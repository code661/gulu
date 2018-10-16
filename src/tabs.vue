<template>
  <div class="tabs" :class="tabClasses">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "tabs",
  props: {
    selected: {
      type: [Number, String],
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
      direction: this.direction
    };
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.$emit("update:selected", name);
    });
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
  },
  computed: {
    tabClasses() {
      return { [`${this.direction}`]: true };
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  &.horizontal {
    flex-direction: column;
  }
  &.vertical {
    flex-direction: row;
  }
}
</style>
