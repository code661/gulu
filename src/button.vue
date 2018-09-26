<template>
  <button class="g-button">按钮</button>
</template>

<script>
  export default {};
</script>

<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  border-radius: var(--border-radius);
  padding: 0 1em;
  border: 1px solid;
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>