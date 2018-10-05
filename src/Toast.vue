<template>
  <div class="toast">
    <slot></slot>
    <span v-if="closeButton" @click="close">{{closeButton.text}}</span>
  </div>  
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callBack: null
        };
      }
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
      if (this.closeButton && typeof this.closeButton.callBack === "function") {
        this.closeButton.callBack(this);
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


