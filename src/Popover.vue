<template>
  <div class="popover" @click="onClick">
    <div class="content-wrap" v-if="visible" ref="content">
      <slot name="content"></slot>
    </div>
    <span class="trigger-wrap" ref="trigger">
      <slot></slot>
    </span>
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
      if (this.visible) {
        this.closeContent();
      } else {
        this.openContent();
      }
    },
    onClickDocument(event) {
      if (
        !(
          this.$refs.content.contains(event.target) ||
          this.$refs.trigger.contains(event.target)
        )
      ) {
        this.closeContent();
      }
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
      this.$refs.content.style.top = window.scrollY + top + "px";
      this.$refs.content.style.left = window.scrollX + left + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  > .trigger-wrap {
    display: inline-block;
  }
}
.content-wrap {
  $border: 1px solid #666;
  $font-size: 13px;
  $border-radius: 4px;
  font-size: $font-size;
  border: $border;
  border-radius: $border-radius;
  position: absolute;
  transform: translateY(-100%);
  margin-top: -8px;
  max-width: 20em;
  padding: 0.5em 1em;
  word-break: break-all;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  &::before,
  &::after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border: 7px solid transparent;
    position: absolute;
  }
  &::before {
    border-top: 7px solid #666;
    top: calc(100% + 1px);
  }
  &::after {
    content: "";
    border-top: 7px solid #fff;
    top: calc(100%);
  }
}
</style>


