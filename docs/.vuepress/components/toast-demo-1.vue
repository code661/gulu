<template>
  <div>
    <div class="demo">
      <g-button @click="$toast('这是从上方弹出的信息')">上方弹出</g-button>
      <g-button @click="$toast('这是从中间弹出的信息',{toastPosition:'middle'})">中间弹出</g-button>
      <g-button @click="$toast('这是从底部弹出的信息',{toastPosition:'bottom'})">下方弹出</g-button>
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
.toast-wrap{
  z-index: 20;
}
</style>
