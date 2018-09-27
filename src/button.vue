<template>
  <button class="g-button" :class="{[`icon-${orientation}`]:true}">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>

  </button>
  </button>
</template>

<script>
export default {
  props:{
    icon: {},
    orientation: {
      type: String,
      default: "left",
      validator(value){
        return ['left','right'].indexOf(value) !== -1
      }
    }
  }
};
</script>

<style lang="scss">
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  border-radius: var(--border-radius);
  padding: 0 1em;
  border: 1px solid;
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .3em
  }
  > .content {
    order: 2
  }
  &.icon-right {
    > .icon{
      order: 2;
      margin-right: 0;
      margin-left: .3em
    }
    > .content {
      order: 1;
    }
  }
}

.i-right:last-child {
  order: 1
}
</style>