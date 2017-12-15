<template>
  <div ref="" class="cube-index-list-item border-bottom-1px">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-index-list-item'
  export default {
    name: COMPONENT_NAME
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cube-index-list-item
    position: relative
    height: 50px
    line-height: 50px
    padding: 0 16px
    font-size: $fontsize-medium
    color: $index-list-item-color
    &:last-child
      border-none()
  .cube-index-list-item_active
    background: $index-list-item-active-bgc
</style>
