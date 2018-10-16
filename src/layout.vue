<template>
  <div class="layout" :class="{'layout-has-sider':hasSider}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasSider: false
    };
  },
  mounted() {
    this.$children.map(vm => {
      if (vm.$options.name === "sider") {
        this.hasSider = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.layout-has-sider {
    flex-direction: row;
  }
}
</style>
