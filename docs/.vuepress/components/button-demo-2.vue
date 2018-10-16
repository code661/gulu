<template>
  <div>
    <g-button icon="settings"></g-button>
    <g-button icon="ups"></g-button>
    <g-button icon="download"></g-button>
    <g-button icon="left"></g-button>
    <g-button icon="right"></g-button>
    <g-button icon="info"></g-button>
    <g-button icon="bell"></g-button>
    <g-button icon="warning-circle"></g-button>
    <g-button icon="wechat"></g-button>
    <g-button icon="wechat-pay"></g-button>    
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
