<template>
  <cube-page type="recycle-list" title="RecycleList">
    <template #content>
      <cube-button-group>
        <cube-button @click="goTo('default')">Default</cube-button>
        <cube-button @click="goTo('tombstone')">Infinite</cube-button>
      </cube-button-group>
      <cube-view></cube-view>
    </template>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import CubeView from 'example/components/cube-view.vue'

  export default {
    components: {
      CubePage,
      CubeButtonGroup,
      CubeView
    },
    methods: {
      goTo(subPath) {
        this.$router.push('/recycle-list/' + subPath)
      }
    }
  }
</script>

<style lang="stylus">
</style>
