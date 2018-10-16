<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button icon="info" 
      @click="loading=!loading" 
      :loading="loading"
    >点击加载</g-button>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      loading: false
    };
  }
};
</script>
