<template>
  <div>
    <g-popover trigger="hover">
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容。</div>
      </div>
      <g-button>上边</g-button>
    </g-popover>
    <g-popover trigger="hover" position="bottom">
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容。</div>
      </div>
      <g-button >下边</g-button>
    </g-popover>
    <g-popover trigger="hover" position="left">
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容。</div>
      </div>
      <g-button >左边</g-button>
    </g-popover>
    <g-popover trigger="hover" position="right">
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容。</div>
      </div>
      <g-button >右边</g-button>
    </g-popover>
  </div>
</template>
<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";
export default {
  components: {
    "g-popover": Popover,
    "g-button": Button
  }
};
</script>
<style lang="scss" scoped>
h4 {
  margin: 2px 0;
}
</style>
