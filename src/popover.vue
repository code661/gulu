<template>
  <div class="popover" ref="popover">
    <div class="content-wrap" v-if="visible" ref="content" :class="{[`position-${this.position}`]:true}"
      @mouseenter="contentMouseenter"
      @mouseleave="contentMouseleave">
      <slot name="content"></slot>
    </div>
    <span class="trigger-wrap" ref="trigger">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "right", "left"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.handleClick);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.handleMouseenter);
      this.$refs.popover.addEventListener("mouseleave", this.handleMouseleave);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.handleClick);
    } else {
      this.$refs.popover.removeEventListener("mouseenter");
      this.$refs.popover.removeEventListener("mouseleave");
    }
  },
  methods: {
    contentMouseleave() {
      if(this.trigger === "click") {return}
      if (this.enterTimer) clearTimeout(this.enterTimer);
      this.enterTimer = setTimeout(() => {
        this.closeContent();
      }, 100);
    },
    contentMouseenter() {
      if(this.trigger === "click") {return}
      if (this.enterTimer) clearTimeout(this.enterTimer);
    },
    handleMouseenter() {
      if (this.enterTimer) clearTimeout(this.enterTimer);
      this.enterTimer = setTimeout(() => {
        this.openContent();
      }, 100);
    },
    handleMouseleave() {
      if (this.enterTimer) {
        clearTimeout(this.enterTimer);
        this.enterTimer = setTimeout(() => {
          this.closeContent();
        }, 100);
      }
    },
    handleClick(event) {
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
      document.body.appendChild(this.$refs.content);
      let {
        left,
        top,
        height,
        width
      } = this.$refs.trigger.getBoundingClientRect();
      let { height: height2 } = this.$refs.content.getBoundingClientRect();
      let positionTable = {
        top: { top: window.scrollY + top, left: window.scrollX + left },
        bottom: {
          top: window.scrollY + top + height,
          left: window.scrollX + left
        },
        left: {
          top: window.scrollY + top - (height2 - height) / 2,
          left: window.scrollX + left
        },
        right: {
          top: window.scrollY + top - (height2 - height) / 2,
          left: window.scrollX + left + width
        }
      };
      this.$refs.content.style.top = positionTable[this.position].top + "px";
      this.$refs.content.style.left = positionTable[this.position].left + "px";
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
  $margin: 8px;
  font-size: $font-size;
  border: $border;
  border-radius: $border-radius;
  position: absolute;
  background-color: white;
  max-width: 20em;
  padding: 0.5em 1em;
  word-break: break-all;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  z-index: 1;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border: 7px solid transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -$margin;
    &::before {
      border-top-color: #666;
      top: calc(100% + 1px);
      border-bottom: none;
    }
    &::after {
      border-top-color: #fff;
      top: calc(100%);
      border-bottom: none;
    }
  }

  &.position-bottom {
    margin-top: $margin;
    &::before {
      border-bottom-color: #666;
      bottom: calc(100% + 1px);
      border-top: none;
    }
    &::after {
      border-bottom-color: #fff;
      bottom: calc(100%);
      border-top: none;
    }
  }
  &.position-left {
    margin-left: -$margin;
    transform: translateX(-100%);
    &::before,
    &::after {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
    }
    &::before {
      border-left-color: #666;
      left: calc(100% + 1px);
    }
    &::after {
      border-left-color: #fff;
      left: calc(100%);
    }
  }

  &.position-right {
    margin-left: $margin;
    &::before,
    &::after {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left: none;
    }
    &::before {
      border-right-color: #666;
      right: calc(100% + 1px);
    }
    &::after {
      border-right-color: #fff;
      right: calc(100%);
    }
  }
}
</style>


