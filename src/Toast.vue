<template>
  <div class="toast">
    <div class="message-wrap">
      <div v-if="enableHtml" v-html="$slots.default[0]"></div>
      <slot v-else></slot>
    </div>
    <div class="close-wrap" v-if="!autoClose" >
      <hr>
      <span class="close-tip" @click="clickCloseBtton">{{closeButton.text}}</span>
    </div>
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
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickCloseBtton() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callBack === "function") {
        this.closeButton.callBack(this);
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    setAutoCloseTimer() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    }
  },
  mounted() {
    this.setAutoCloseTimer();
  }
};
</script>

<style lang="scss" scoped>
.toast {
  $toast-bg: rgba(0, 0, 0, 0.74);
  $toast-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  $toast-color: white;
  $toast-font-size: 14px;
  $toast-border-radius: 4px;
  
  background: $toast-bg;
  color: $toast-color;
  border-radius: $toast-border-radius;
  box-shadow: $toast-box-shadow;
  font-size: $toast-font-size;
  display: flex;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  .message-wrap {
    max-width: 250px;
    padding: 8px 16px;
  }
  .close-wrap {
    flex-shrink: 0;
    display: flex;
    hr {
      border: none;
      width: 1px;
      background-color: #666666;
      transform: scaleX(0.4)
    }
    .close-tip {
      display: flex;
      padding: 0 16px;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>


