<template>
  <div class="collapse-item" @click="toggle">
    <div class="title">{{title}}</div>
    <div class="content" v-show="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  mounted() {
    this.eventBus.$on("updateActiveItem", names => {
      if (names.indexOf(this.name) >= 0) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  methods: {
    toggle() {
      if (this.active) {
        this.eventBus.$emit("removeActiveItem", this.name);
      } else {
        this.eventBus.$emit("addActiveItem", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.collapse-item {
  $border-color: #dcdee2;
  &:not(:first-child) {
    border-top: 1px solid $border-color;
  }
  > .title {
    padding-left: 12px;
    line-height: 30px;
  }
  > .content {
    border-top: 1px solid $border-color;
    background-color: white;
    padding: 12px;
  }
  &:last-child {
    > .content {
      border-radius: 0 0 3px 3px;
    }
  }
}
</style>
