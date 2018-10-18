<template>
  <div class="demo">
    <g-button @click="showToast">点我有惊喜</g-button>
    <p>回调执行结果：{{msg}}</p>
  </div>
</template>
<script>
import Toast from "../../../src/toast";
import Button from "../../../src/button";
import Toastplugin from "../../../src/toast-plugin";
import Vue from "vue";
Vue.use(Toastplugin);
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      msg: "回调函数还未执行"
    };
  },
  methods: {
    showToast() {
      const propData = {
        autoClose: false,
        closeButton: {
          text: "残忍拒绝",
          callBack: toast => {
            this.msg = "让 " + toast.$slots.default[0] + "，被拒绝了";
          }
        }
      };
      const zoo = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];
      let num = Math.floor(Math.random() * 10);
      const message = zoo[num] + "给个五星好评";
      this.$toast(message, propData);
    }
  }
};
</script>
<style lang="scss" scoped>
.toast-wrap {
  z-index: 20;
}
.demo {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
  border-radius: 4px;
  padding: 2em;
}
</style>
