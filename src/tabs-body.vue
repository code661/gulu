<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabsBody",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
.tabs {
  &.vertical {
    > .tabs-body {
      margin-left: 1em;
    }
  }
  &.horizontal {
    > .tabs-body {
      margin-top: initial;
      margin-top: 1em;
    }
  }
}
</style>
