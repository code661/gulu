<template>
  <div class="tabs-item" @click="xxx" :class="{active: isActive}">
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
  inject: ["eventBus"],
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
      this.setBarPosition()
    },
    setBarPosition() {
      let { left, width } = this.$el.getBoundingClientRect();
      let activeBar = this.$parent.$refs.activeBar;
      activeBar.style.width = width + "px";
      activeBar.style.transform = `translateX(${left}px)`;
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (this.name === name) {
        this.isActive = true;
        this.setBarPosition()
      } else {
        this.isActive = false;
      }
    });
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