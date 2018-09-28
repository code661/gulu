<template>
  <button class="g-button" :class="{[`icon-${orientation}`]:true}" @click="$emit('click')">
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <g-icon name="loading" v-if="loading" class="icon loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading:{
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "right"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  > .loading {
    animation: spin 1s linear infinite;
  }
}
</style>