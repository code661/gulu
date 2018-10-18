<template>
  <div class="demo">
    <g-row>
      <g-col span="2" :pad="{span: 4}" :pc="{span: 6}" :widthPc="{span: 8}" >Col</g-col>
      <g-col span="20" :pad="{span: 16}" :pc="{span: 12}" :widthPc="{span: 8}" >Col</g-col>
      <g-col span="2" :pad="{span: 4}" :pc="{span: 6}" :widthPc="{span: 8}" >Col</g-col>
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
