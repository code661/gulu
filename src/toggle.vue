<template>
  <div class="toggle">
    <button
      class="toggle-btn"
      :class="{ 'toggle-btn-on': checked, 'toggle-btn-off': !checked }"
      @click="onClick"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      checked: false
    };
  },
  created() {
    this.checked = this.on;
  },
  methods: {
    onClick() {
      this.checked = !this.checked;
      this.$emit("toggled", this.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #999;

.toggle-btn {
  display: inline-block;
  position: relative;
  border-radius: 2em;
  height: 2rem;
  width: 4rem;
  cursor: pointer;
  outline: 0;
  transition: all 0.4s ease;
  border: 1px solid $border-color;

  &::after {
    content: "";
    position: relative;
    border-radius: 50%;
    width: 50%;
    height: 100%;
    display: block;
    border: 1px solid ;
    transition: all 0.4s ease;
  }
  &:active::after {
    border: 1px solid burlywood;
    padding-right: .8rem;
  }

  &.toggle-btn-on {
    background-color: green;
    &::after {
      left: 50%;
      background-color: aquamarine;
    }
  }

  &.toggle-btn-off {
    background: #fbfbfb;

    &::after {
      left: 0;
    }
  }
}
</style>
