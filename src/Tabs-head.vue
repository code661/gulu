<template>
  <div class="tabs-head">
    <div class="active-bar" ref="activeBar"></div>
    <slot></slot>
    <div class="actions-wrap">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabsHead",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
.tabs-head {
  $tab-head-color: #515a6e;
  $tab-head-height: 40px;
  $tab-font-size: 14px;
  color: $tab-head-color;
  display: flex;
  position: relative;
  height: $tab-head-height;
  border-bottom: 1px solid #dbe2e8;
  align-items: center;
  font-size: $tab-font-size;
  padding-right: 16px;
  > .active-bar {
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 2px;
    background-color: #4a90e2;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  > .actions-wrap {
    margin-left: auto;
  }
}
</style>