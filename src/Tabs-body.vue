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
.tabs-body {
  margin-top: 1em;
}
</style>