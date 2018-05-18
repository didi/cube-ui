<template>
  <cube-page type="scroll" title="Scroll">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="goTo('default')">Default</cube-button>
        <cube-button @click="goTo('config')">Config</cube-button>
        <cube-button @click="goTo('herizontal')">Herizontal</cube-button>
        <cube-button @click="goTo('jd')">京东</cube-button>
        <cube-button @click="goTo('toutiao')">头条</cube-button>
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
        this.$router.push('/scroll/' + subPath)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
