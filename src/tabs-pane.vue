<template>
  <div class="tabs-pane" :class="{active: active}" v-show="active">
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
      active: false
    };
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      if (this.name === name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
