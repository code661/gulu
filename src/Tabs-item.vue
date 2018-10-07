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
    }
  },
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
  background-color: red;
}
</style>