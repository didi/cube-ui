<template>
  <cube-page type="sticky" title="Sticky">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="goTo('scroll')">Scroll</cube-button>
        <cube-button @click="goTo('native')">Native Scroll</cube-button>
        <cube-button @click="goTo('wechat')">WeChat</cube-button>
        <cube-button @click="goTo('complex')">Complex</cube-button>
      </cube-button-group>
      <cube-view></cube-view>
    </div>
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
        this.$router.push('/sticky/' + subPath)
      }
    }
  }
</script>

<style lang="stylus" >
</style>
