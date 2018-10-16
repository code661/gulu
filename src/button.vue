<template>
  <button class="g-button" :class="buttonClasses" @click="$emit('click')">
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <g-icon name="loading" v-if="loading" class="icon loading"></g-icon>
    <div class="buttonContent">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  name: "GuluButton",
  components: {
    "g-icon": Icon
  },
  data() {
    return {
      iconOnly: false
    };
  },
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
        // return ["left", "right"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    if (!this.$slots.default) {
      this.iconOnly = true;
    }
  },
  computed: {
    buttonClasses() {
      return {
        [`icon-${this.orientation}`]: true,
        ["icon-only"]: this.iconOnly
      };
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
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .buttonContent {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .buttonContent {
      order: 1;
    }
  }
  > .loading {
    animation: spin 1s linear infinite;
  }
  &.icon-only {
    > .icon {
      margin-right: 0;
    }
  }
}
</style>