<template>
  <div class="tabs-pane" :class="{active: isActive}" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabsPane",
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
  created() {
    this.eventBus.$on("update:selected", name => {
      if (this.name === name) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.active{
}
</style>