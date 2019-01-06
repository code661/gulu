<template>
  <div class="carousel">
    <div class="main-slider-container"></div>
    <div class="extra-slider-container">
      <div v-for="item in propName" class="extra-slider-item">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propName: {
      type: Number,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    name() {
      
    }
  },
};
</script>

<style lang="scss" scoped>
</style>

