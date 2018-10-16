<template>
    <ol>
      <li><g-icon name="settings" class="icon"></g-icon><span>setting</span></li>
      <li><g-icon name="settings-2" class="icon"></g-icon><span>setting-2</span></li>      
      <li><g-icon name="share" class="icon"></g-icon><span>share</span></li>
      <li><g-icon name="edit" class="icon"></g-icon><span>edit</span></li>
      <li><g-icon name="wechat" class="icon"></g-icon><span>wechat</span></li>
      <li><g-icon name="wechat-pay" class="icon"></g-icon><span>wechat-pay</span></li>
      <li><g-icon name="trash" class="icon"></g-icon><span>trash</span></li>
      <li><g-icon name="github" class="icon"></g-icon><span>github</span></li>
      <li><g-icon name="warning" class="icon"></g-icon><span>warning</span></li>
      <li><g-icon name="warning-circle" class="icon"></g-icon><span>warning-circle</span></li>
      <li><g-icon name="info" class="icon"></g-icon><span>info</span></li>
      <li><g-icon name="loading" class="icon"></g-icon><span>loading</span></li>
      <li><g-icon name="left" class="icon"></g-icon><span>left</span></li>
      <li><g-icon name="right" class="icon"></g-icon><span>right</span></li>
      <li><g-icon name="bell" class="icon"></g-icon><span>bell</span></li>
      <li><g-icon name="up" class="icon"></g-icon><span>up</span></li>
      <li><g-icon name="down" class="icon"></g-icon><span>down</span></li>
      <li><g-icon name="ups" class="icon"></g-icon><span>thumbs-up</span></li>
      <li><g-icon name="download" class="icon"></g-icon><span>download</span></li>
    </ol>
</template>
<script>
import Icon from "../../../src/icon";
export default {
  components: {
    "g-icon": Icon
  }
};
</script>
<style lang="scss" scoped>
ol {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
  border-radius: 4px;
  margin: 18px 0;
  li {
    display: inline-flex;
    justify-content: center;
    padding: 0.5em 0;
    align-items: center;
    &:not(:last-child) {
      padding-right: 2em;
    }
    .icon {
      margin-right: 0.3em;
    }
  }
}
</style>

