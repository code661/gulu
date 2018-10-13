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
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      valueCopy: null
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  methods: {
    addActiveItem(name) {
      if (this.accordion) {
        this.valueCopy = [];
      }
      this.valueCopy.push(name);
      this.eventBus.$emit("updateActiveItem", this.valueCopy);
      this.$emit("update:value", this.valueCopy);
    },
    removeActiveItem(name) {
      let index = this.valueCopy.indexOf(name);
      this.valueCopy.splice(index, 1);
      this.eventBus.$emit("updateActiveItem", this.valueCopy);
      this.$emit("update:value", this.valueCopy);
    }
  },
  mounted() {
    this.valueCopy = JSON.parse(JSON.stringify(this.value));
    this.eventBus.$emit("updateActiveItem", this.valueCopy);
    this.eventBus.$on("addActiveItem", this.addActiveItem);
    this.eventBus.$on("removeActiveItem", this.removeActiveItem);
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
