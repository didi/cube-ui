<template>
  <li class="cube-rate-item" :class="{ active: index <= $parent.tempValue }">
    <slot>
      <div class="cube-rate-item-def"></div>
    </slot>
  </li>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-rate-item'
  export default {
    name: COMPONENT_NAME,
    props: {
      index: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/mixin.styl"

  .cube-rate-item
    margin: 0 9px
    width: 1em
    height: 1em
    .cube-rate-item-def
      width: 100%
      height: 100%
      background-size: 100%
      background-repeat: no-repeat
      bg-image("evaluation_icon_star_gray")
    &.active
      .cube-rate-item-def
        bg-image("evaluation_icon_star")

</style>
