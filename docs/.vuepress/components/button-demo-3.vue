<template>
  <div>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <g-button-group>
      <g-button icon="share"></g-button>
      <g-button icon="edit"></g-button>
      <g-button icon="trash"></g-button>
    </g-button-group>
  </div>

</template>

<script>
import Button from "../../../src/button.vue";
import ButtonGruop from "../../../src/button-group.vue";
export default {
  components: {
    "g-button": Button,
    "g-button-group": ButtonGruop
  }
};
</script>
