<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrap" v-if="visible" ref="content">
      <slot name="content"></slot>
    </div>
    <div class="trigger-wrap" ref="trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClick(event) {
      if (this.$refs.trigger.contains(event.target)) {
        if (this.visible === true) {
          this.closeContent();
        } else {
          this.openContent();
        }
      }
    },
    onClickDocument(event) {
      if (
        this.$refs.content.contains(event.target) ||
        this.$refs.trigger.contains(event.target)
      ) {
        return;
      }
      this.closeContent();
    },
    openContent() {
      this.visible = true;
      this.$nextTick(() => {
        this.setContentPosistion();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    closeContent() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    setContentPosistion() {
      let {
        left,
        top,
        height,
        width
      } = this.$refs.trigger.getBoundingClientRect();
      document.body.appendChild(this.$refs.content);
      this.$refs.content.style.top = window.scrollY + top + height + "px";
      this.$refs.content.style.left = window.scrollX + left + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
}
.content-wrap {
  border: 1px solid;
  position: absolute;
}
</style>


