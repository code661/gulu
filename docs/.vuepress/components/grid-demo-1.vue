<template>
  <div class="demo">
    <g-row>
      <g-col span="12">col-12</g-col>
      <g-col span="12">col-12</g-col>
    </g-row>
    <br>
    <g-row>
      <g-col span="8">col-8</g-col>
      <g-col span="8">col-8</g-col>
      <g-col span="8">col-8</g-col>
    </g-row>
    <br>
    <g-row>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
      <g-col span="6">col-6</g-col>
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
