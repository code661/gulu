<template>
  <div class="wrapper" :class="{error:error}">
    <input type="text"
      :value="value" :disabled="disabled" :readOnly="readonly"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
    >
    <template v-if="error">
      <g-icon class="error-msg icon" name="warning-ring"></g-icon>
      <span class="error-msg content">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./Icon"
export default {
  components:{
    "g-icon": Icon
  },
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;
$border-color: #999;
$font-size: 12px;
$border-hover: #666;
$border-focus: #666;
$disabled-bg-color: #ececec;
$disabled-color: rgba(34, 36, 38, 0.15);
$error-red: #ed4014;
.wrapper {
  display: inline-flex;
  align-items: center;
  > input {
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 0.6em;
    font-size: $font-size;
    &:hover {
      border-color: $border-hover;
    }
    &[disabled] {
      background-color: $disabled-bg-color;
      border-color: $disabled-color;
      cursor: not-allowed;
      color: $disabled-color;
    }
    &[readonly] {
      border-color: $disabled-color;
      color: $disabled-color;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
      border-color: $border-focus;
    }
  }
}
.wrapper.error {
  > input {
    border-color: $error-red;
    &:focus {
      box-shadow: inset 0 1px 3px 0 rgba($color: #ed4014, $alpha: 0.3);
    }
  }
}
.error-msg {
  font-size: $font-size;
  color: $error-red;
  &.icon {
    margin-left: 8px;
    font-size: 1em;
  }
  &.content {
    margin-left: 4px;
  }
}
</style>


