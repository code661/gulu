<template>
  <div class="collapse-item">
    <div class="title" @click.stop="toggle">
      <span>{{ title }}</span>
      <Icon
        class="collapse-item__arrow"
        :class="{ active: !this.active }"
        name="right"
      />
    </div>
    <div
      class="collapseContent"
      :class="{ inactive: !this.active }"
      ref="collapseContent"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  components: {
    Icon
  },
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: [String, Number],
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
      if (names.indexOf(this.name) >= 0) this.active = true;
      else this.active = false;
    });
  },
  watch: {
    active(newValue) {
      if (newValue) this.expand();
      else this.collapse();
    }
  },
  methods: {
    toggle() {
      if (this.active) {
        this.eventBus.$emit("removeActiveItem", this.name);
      } else {
        this.eventBus.$emit("addActiveItem", this.name);
      }
    },
    collapse() {
      var element = this.$refs.collapseContent;
      var scrollHeight = element.scrollHeight;
      requestAnimationFrame(() => {
        element.style.height = scrollHeight + "px";
        requestAnimationFrame(() => {
          element.style.height = 0 + "px";
        });
      });
    },
    expand() {
      var element = this.$refs.collapseContent;
      element.style.height = element.scrollHeight + "px";
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

  &__arrow {
    &.active {
      transform: rotate(90deg);
    }
    transition: transform 0.3s;
  }
  > .title {
    padding: 0 12px;
    line-height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > .collapseContent {
    &.inactive {
      height: 0;
    }
    transition: height 0.3s ease-in-out 0s, padding-top 0.3s ease-in-out 0s,
      padding-bottom 0.3s ease-in-out 0s;
    border-top: 1px solid $border-color;
    background-color: white;
    overflow: hidden;
    height: auto;

    > * {
      padding: 12px;
    }
  }
  &:last-child {
    > .collapseContent {
      border-radius: 0 0 3px 3px;
    }
  }
}
</style>
