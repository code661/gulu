<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-button-grounp",
  mounted(){
    for(let node of this.$el.children){
      if(node.nodeName.toLowerCase() !== "button"){
        console.error(`g-button-group 组件的子组件应该是g-button`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.g-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .g-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-radius: var(--border-radius) 0 0 var(--border-radius)
    }
    &:last-child{
      border-radius: 0 var(--border-radius) var(--border-radius) 0
    }
    &:hover{
      z-index: 1
    }
  }
}
</style>



