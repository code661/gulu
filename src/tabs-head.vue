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
.tabs {
  > .tabs-head {
    $tab-head-color: #515a6e;
    $tab-head-height: 40px;
    $tab-font-size: 14px;
    display: flex;
    position: relative;
    border-bottom: 1px solid #dbe2e8;
    align-items: center;
    padding-right: 16px;
    color: $tab-head-color;
    height: $tab-head-height;
    font-size: $tab-font-size;
    flex-shrink: 0;
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
  &.vertical {
    flex-direction: row;
    > .tabs-head {
      border-right: 1px solid #dbe2e8;
      border-bottom: none;
      flex-direction: column;
      height: 100%;
      padding-right: 0;
      margin-bottom: 0;
      > .active-bar {
        width: 2px;
        left: auto;
        top: 0;
        right: -1px;
        bottom: auto;
      }
      > .actions-wrap {
        margin: 0 auto;
      }
    }
  }
}
</style>
