<template>
  <transition name="page-move">
    <router-view class="cube-view"></router-view>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cube-view
    transform: translate3d(0, 0, 0)
  .page-move-enter, .page-move-leave-active
    transform: translate3d(100%, 0, 0)
  .page-move-enter-active, .page-move-leave-active
    transition: transform .3s
</style>
