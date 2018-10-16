<template>
  <div>
    <g-tabs selected="tech">
      <g-tabs-head>
        <g-tabs-item name="tech">科技</g-tabs-item>
        <g-tabs-item name="sport">体育</g-tabs-item>
        <g-tabs-item name="news">新闻综合</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="tech">1</g-tabs-pane>
        <g-tabs-pane name="sport">2</g-tabs-pane>
        <g-tabs-pane name="news">3</g-tabs-pane>
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

