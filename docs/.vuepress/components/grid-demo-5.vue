<template>
  <div class="demo">
    <p>子元素向左排列</p>
    <g-row align="left">
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
    </g-row>
    <p>子元素向右排列</p>
    <g-row align="right">
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
    </g-row>
    <p>子元素居中排列</p>
    <g-row align="center">
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
      <g-col span="4">col-4</g-col>
    </g-row>
</div>
</template>
<script>
import Row from "../../../src/row";
import Column from "../../../src/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Column
  }
};
</script>
<style lang="scss" scoped>
.demo {
  padding: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
  border-radius: 4px;
}
.col {
  color: #fff;
  padding: 10px 0;
  text-align: center;
  background: rgba(0, 153, 229, 0.9);
  font-size: 12px;
  &:nth-child(odd) {
    background: rgba(0, 153, 229, 0.7);
  }
}
</style>
