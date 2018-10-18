<template>
  <div class="demo">
    <g-row gutter="16">
      <g-col span="6">
        <div>col-6</div>
      </g-col>
      <g-col span="6">
        <div>col-6</div>
      </g-col>
      <g-col span="6">
        <div>col-6</div>
      </g-col>
      <g-col span="6">
        <div>col-6</div>
      </g-col>
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
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  font-size: 12px;
  background-color: #fff;
  &:nth-child(odd) {
    background-color: #fff;
  }
  & > div {
    padding: 10px;
    background: rgba(0, 153, 229, 0.9);
  }
}
</style>
