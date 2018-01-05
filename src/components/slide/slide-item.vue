<template>
  <div class="cube-slide-item">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-slide-item'
  export default {
    name: COMPONENT_NAME
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cube-slide-item
    float: left
    box-sizing: border-box
    height: 100%
    text-align: center
    > a
      display: block
      height: 100%
      overflow: hidden
      text-decoration: none
      > img
        display: block
        height: 100%
</style>
