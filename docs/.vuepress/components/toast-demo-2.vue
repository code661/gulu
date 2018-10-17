<template>
  <div>
    <div class="demo">
      <g-button @click="$toast('点击右边按钮关闭弹框 👉',
      {autoClose:false,toastPosition:'middle'})"
      >有关闭按钮</g-button>
      <g-button @click="$toast('十秒之后自动关闭 ⏲',
      {autoClose:10,toastPosition:'middle'})"
      >十秒后关闭</g-button>
    </div>
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
  }
};
</script>
<style lang="scss">
.toast-wrap {
  z-index: 20;
}
</style>
