<template>
  <div class="row"
    :style="rowStyle"
    :class="[
      align && `align-${align}`
    ]"
  >
    <slot></slot>
  </div>
</template>


<script>
export default {
  props: {
    gutter: {
      type: [String, Number]
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      }
    }
  },
  mounted() {
    this.$children.map($col => {
      $col.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>


