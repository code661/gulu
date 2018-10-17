<template>
  <div class="toast-wrap" :class="toastClass">
    <div class="toast">
      <div class="message-wrap">
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <div class="close-wrap" v-if="!autoClose || closeButton" >
        <hr>
        <span class="close-tip" @click="clickCloseButton">{{closeButton ? (closeButton.text ? closeButton.text : "关闭") : "关闭" }}</span>
      </div>
    </div>  
  </div>

</template>

<script>
export default {
  props: {
    autoClose: {
      type: [Number, Boolean],
      default: 5
    },
    closeButton: {
      type: Object
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    toastPosition: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.setAutoCloseTimer();
  },
  methods: {
    clickCloseButton() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callBack === "function") {
        this.closeButton.callBack(this);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    setAutoCloseTimer() {
      if (this.autoClose === true) {
        setTimeout(() => {
          this.close();
        }, 5000);
      } else if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    }
  },
  computed: {
    toastClass() {
      return { [`position-${this.toastPosition}`]: true };
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
.toast-wrap {
  $toast-bg: rgba(0, 0, 0, 0.74);
  $toast-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  $toast-color: white;
  $toast-font-size: 14px;
  $toast-border-radius: 4px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      animation: slide-down 0.4s linear;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in 0.4s linear;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      animation: slide-up 0.4s linear;
    }
  }
  .toast {
    background: $toast-bg;
    color: $toast-color;
    border-radius: $toast-border-radius;
    box-shadow: $toast-box-shadow;
    font-size: $toast-font-size;
    display: flex;
    .message-wrap {
      max-width: 250px;
      padding: 8px;
      flex-wrap: wrap;
    }
    .close-wrap {
      display: flex;
      hr {
        border: none;
        width: 1px;
        background-color: #666666;
        transform: scaleX(0.4);
      }
      .close-tip {
        display: flex;
        padding: 8px;
        align-items: center;
        cursor: pointer;
        min-width: 2em;
        max-width: 4em;
        text-align: center;
      }
    }
  }
}
</style>
