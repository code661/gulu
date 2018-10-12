<template>
  <div class="popover" @click="onClick">
    <div class="content-wrap" v-if="visible" ref="content" :class="{[`position-${this.position}`]:true}">
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
    }
  },
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
        right,
        top,
        height,
        width,
        bottom
      } = this.$refs.trigger.getBoundingClientRect();
      document.body.appendChild(this.$refs.content);
      console.log(this.$refs.trigger.getBoundingClientRect());
      if (this.position === "top") {
        this.$refs.content.style.top = window.scrollY + top + "px";
        this.$refs.content.style.left = window.scrollX + left + "px";
      }
      if (this.position === "bottom") {
        this.$refs.content.style.top = window.scrollY + bottom + "px";
        this.$refs.content.style.left = window.scrollX + left + "px";
      }

      if (this.position === "left") {
        let { height: height2 } = this.$refs.content.getBoundingClientRect();
        this.$refs.content.style.top =
          window.scrollY + top - (height2 - height) / 2 + "px";
        this.$refs.content.style.left = window.scrollX + left + "px";
      }

      if (this.position === "right") {
        let { height: height2 } = this.$refs.content.getBoundingClientRect();
        this.$refs.content.style.top =
          window.scrollY + top - (height2 - height) / 2 + "px";
        this.$refs.content.style.left = window.scrollX + left + width + "px";
      }
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
    }
    &::after {
      border-top-color: #fff;
      top: calc(100%);
    }
  }

  &.position-bottom {
    margin-top: $margin;
    &::before {
      border-bottom-color: #666;
      bottom: calc(100% + 1px);
    }
    &::after {
      border-bottom-color: #fff;
      bottom: calc(100%);
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


