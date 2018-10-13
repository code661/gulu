<template>
  <div class="collapse-item" @click="toggle">
    <div class="title">{{title}}</div>
    <div class="content" v-show="open">
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
    name:{
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      open: false,
    };
  },
  mounted() {
    this.eventBus && this.eventBus.$on("update:openItem", name => {
      if (name !== this.name) {
        this.close();
      }else{
        this.show()
      }
    });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false;
      } else {
        this.eventBus && this.eventBus.$emit("update:openItem", this.name);
      }
    },
    close() {
      this.open = false;
    },
    show(){
      this.open = true
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
