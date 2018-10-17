<template>
  <div>
    <div class="demo">
      <g-button @click="$toast('<strong>这是 <i>HTML</i> 片段</strong>',
      {enableHtml:true})"
      >开启 HTML</g-button>
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
