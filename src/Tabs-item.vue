<template>
  <div class="tabs-item" @click="handleClickTab" :class="tabItemClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabsItem",
  props: {
    name: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  inject: ["eventBus", "direction"],
  methods: {
    handleClickTab() {
      this.eventBus.$emit("update:selected", this.name);
      this.setBarPosition();
    },
    setBarPosition() {
      // 获取样式
      let { left, width, height, top } = this.$el.getBoundingClientRect();
      let { left: parentLeft, top: parentTop } = this.$parent.$el.getBoundingClientRect();
      // 修正偏移
      left -= parentLeft;
      top -= parentTop;
      // 设置样式
      let activeBar = this.$parent.$refs.activeBar;
      switch (this.direction) {
        case "vertical":
          activeBar.style.height = height + "px";
          activeBar.style.transform = `translateY(${top}px)`;
          break;
        case "horizontal":
          activeBar.style.width = width + "px";
          activeBar.style.transform = `translateX(${left}px)`;
          break;
      }
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (this.name === name) {
        this.isActive = true;
        this.setBarPosition();
      } else {
        this.isActive = false;
      }
    });
  },
  computed: {
    tabItemClasses() {
      return {
        active: this.isActive
      };
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.tabs-item {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  cursor: pointer;
  &.active {
    $active-color: #292525;
    color: $active-color;
    font-weight: 500;
  }
}
</style>