<template>
  <div class="demo">
    <g-layout class="g-layout">
      <g-header class="g-header">Header</g-header>
      <g-layout class="g-layout">
        <g-sider class="g-sider">Sider</g-sider>
        <g-content class="g-content">Content</g-content>
      </g-layout>
      <g-footer class="g-footer">Footer</g-footer>        
    </g-layout>
  </div>
</template>
<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Sider from "../../../src/sider";
import Footer from "../../../src/footer";

export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-content": Content,
    "g-sider": Sider,
    "g-footer": Footer
  }
};
</script>
<style lang="scss" scoped>
.demo {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
  border-radius: 4px;
}
.g-layout {
  text-align: center;
  font-size: 14px;
  color: #fff;
  .g-header {
    background: #7cbce9;
    height: 64px;
    justify-content: center;
    align-items: center;
  }
  .g-content {
    min-height: 120px;
    line-height: 120px;
    align-items: center;
    justify-content: center;
    background: #0f8de9;
  }
  .g-footer {
    justify-content: center;
    align-items: center;
    background: #7cbce9;
  }
  .g-sider {
    background: #7cbce9;
    background: #3a9fe8;
    min-height: 120px;
    line-height: 120px;
    width: 150px;
    min-width: 150px;
    max-width: 150px;
    flex: 0 0 200px;
  }
}
</style>