<template>
  <div class="model-wrapper">
    <div class="model">
    <g-input placeholder="双向绑定value值" v-model="message" class="model-input"></g-input>
      <span>{{message}}</span>
    </div>
    <div class="model">
      <g-button @click="changeMessage">点我变脸</g-button>
    </div>
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
      message: `我是初始值 🐶`
    };
  },
  methods: {
    changeMessage() {
      let zoo = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];
      let num = Math.floor(Math.random() * 10);
      this.message = zoo[num] + zoo[num];
    }
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
  color: rgb(68, 66, 66);
  line-height: 16px;
}
.model-wrapper {
  display: flex;
  flex-direction: column;
  .model {
    margin: 6px 0;
    span {
      font-size: 13px;
    }
    .model-input {
      margin-right: 16px;
    }
  }
}
</style>

