<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:openItem", this.value)
  }
};
</script>

<style lang="scss" scoped>
.collapse {
  $backgroung-color: #eeeeee;
  $border-color: #cccccc;
  border: 1px solid $border-color;
  border-radius: 4px;
  background-color: $backgroung-color;
  font-size: 13px;
  min-width: 200px;
}
</style>
