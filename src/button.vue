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
import Icon from "./Icon";
export default {
  components: {
    "g-icon": Icon
  },
  props: {
    icon: {},
    loading: {
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

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: $font-size;
  height: $button-height;
  border-radius: $border-radius;
  padding: 0 1em;
  border: 1px solid;
  border-color: $border-color;
  background: $button-bg;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
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