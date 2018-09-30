<template>
  <div class="wrapper" :class="{error:error}">
    <input type="text" :value="value" :disabled="disabled">
    <template v-if="error">
      <g-icon class="error-msg icon" name="warning-ring"></g-icon>
      <span class="error-msg content">{{error}}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    disabled: {
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
$height: 32px;
$border-radius: 4px;
$border-color: #999;
$font-size: 12px;
$border-hover: #666;
$border-focus: #666;
$disabled-bg-color: #ececec;
$disabled-color: #bbb;
$error-red: #ed4014;
.wrapper {
  display: inline-flex;
  align-items: center;
  > input {
    height: $height;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 0.6em;
    font-size: $font-size;

    &:hover {
      border-color: $border-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px 0 rgba($color: #000000, $alpha: 0.5);
      border-color: $border-focus;
    }

    &[disabled] {
      background-color: $disabled-bg-color;
      cursor: not-allowed;
      color: $disabled-color;
      border-color: #999;
    }
  }
}

.wrapper.error {
  > input {
    border-color: $error-red;
    &:focus {
      box-shadow: inset 0 1px 3px 0 rgba($color: #ed4014, $alpha: 0.5);
    }
  }
}

.error-msg {
  font-size: $font-size;
  color: $error-red;
  &.icon{
    margin-left: 8px;
    font-size: 1em;
  }
  &.content{
    margin-left: 4px;
  }
}
</style>


