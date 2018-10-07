<template>
  <div class="tabs">
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
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide(){
    return{
      eventBus: this.eventBus
    }
  },
  created(){
    this.eventBus.$on("update:selected",(name)=>{
      this.$emit("update:selected", name)
    })
  },
  mounted(){
    this.eventBus.$emit("update:selected", this.selected)
  }
};
</script>

<style lang="scss" scoped>

</style>