<template>
  <div>
    <g-button icon="settings"></g-button>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";
export default {
  data() {
    return {
      msg: "hello"
    };
  },
  components:{
    "g-button": Button
  }
};
</script>