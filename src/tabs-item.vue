<template>
  <div class="tabs-item" @click="handleClickTab" :class="tabItemClasses" :data-name="name">
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: false
    };
  },
  inject: ["eventBus", "direction"],
  methods: {
    handleClickTab() {
      if (this.disabled) return;
      this.eventBus && this.eventBus.$emit("update:selected", this.name);
      this.$emit("click", this);
      this.setBarPosition();
    },
    setBarPosition() {
      // 获取样式
      let { left, width, height, top } = this.$el.getBoundingClientRect();
      let {
        left: parentLeft,
        top: parentTop
      } = this.$parent.$el.getBoundingClientRect();
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
    this.eventBus && this.eventBus.$on("update:selected", name => {
      if (this.name === name) {
        this.active = true;
        this.setBarPosition();
      } else {
        this.active = false;
      }
    });
  },
  computed: {
    tabItemClasses() {
      return {
        active: this.active,
        disabled: this.disabled
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
    $active-color: #4a90e2;
    color: $active-color;
    font-weight: 500;
  }
  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
}
</style>
