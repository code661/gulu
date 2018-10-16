<template>
  <div>
    <g-input placeholder="支持事件触发"
      @change="onChange" 
      @blur="onBlur" 
      @focus="onFocus" 
      @input="onInput"
    ></g-input>
      <span v-if="event" class="info">触发了 {{event}} 事件</span>
  </div>    
</template>
<script>
import Input from "../../../src/input";
import Button from "../../../src/button";
export default {
  components: {
    "g-input": Input,
    "g-button": Button
  },
  data() {
    return {
      event: ""
    };
  },
  methods: {
    onChange($event) {
      this.event = "Change"
    },
    onBlur($event) {
      this.event = "Blur"
    },
    onFocus($event) {
      this.event = "Focus"
    },
    onInput(value) {
      this.event = "Input"
    }
  }
};
</script>
<style lang="scss" scoped>
.info{
  font-size: 13px;
}
</style>

