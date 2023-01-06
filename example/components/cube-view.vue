<template>
  <router-view v-slot="{ Component }">
    <transition name="page-move">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
  export default {}
</script>

<style lang="stylus">
  .page-move-enter, .page-move-leave-active
    transform: translate(100%, 0)
  .page-move-enter-active, .page-move-leave-active
    transition: transform .3s
</style>
