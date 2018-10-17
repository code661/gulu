<template>
  <div class="demoWrap">
    <g-tabs selected="1" direction="vertical">
      <g-tabs-head>
        <g-tabs-item name="1">标签一</g-tabs-item>
        <g-tabs-item name="2">标签二</g-tabs-item>
        <g-tabs-item name="3">标签三</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">标签一的内容</g-tabs-pane>
        <g-tabs-pane name="2">标签二的内容</g-tabs-pane>
        <g-tabs-pane name="3">标签三的内容</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/Tabs.vue";
import TabsItem from "../../../src/Tabs-item.vue";
import TabsBody from "../../../src/Tabs-body.vue";
import TabsHead from "../../../src/Tabs-head.vue";
import TabsPane from "../../../src/Tabs-pane.vue";

export default {
  components: {
    "g-tabs-item": TabsItem,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-tabs-pane": TabsPane,
    "g-tabs": Tabs
  }
};
</script>

<style lang="scss" scoped>
.demoWrap {
  padding: 2em;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
  border-radius: 4px;
  margin: 18px 0;
}
</style>


