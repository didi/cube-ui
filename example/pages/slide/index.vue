<template>
  <cube-page type="slide" title="Slide">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="goTo('vertical')">Vertical</cube-button>
        <cube-button @click="goTo('horizontal')">Horizontal</cube-button>
      </cube-button-group>
      <cube-view></cube-view>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
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
        this.$router.push('/slide/' + subPath)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
