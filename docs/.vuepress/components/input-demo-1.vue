<template>
  <div>
    <div class="example">
      <div>
        <p>基础用法</p>
        <g-input placeholder="请输入内容"></g-input>
      </div>
      <div>
        <p>错误提醒状态</p>
        <g-input placeholder="错误提示显示" error="我是错误提醒文字"></g-input>
      </div>
      <div>
        <p>禁用状态</p>
        <g-input placeholder="这是disabled状态" disabled></g-input>
      </div>
      <div>
        <p>只读状态</p>
        <g-input placeholder="这是readonly状态" readonly></g-input>
      </div>
    </div>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input,
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
  color: rgb(68, 66, 66);
  line-height: 16px;
}
.example {
  display: flex;
  flex-wrap: wrap;
  > * {
    width: 50%;
  }
}
</style>

