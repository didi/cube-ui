<template>
  <cube-page type="tabs" title="Tab Demos">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="goTo('tab-bar')">TabBar Demos</cube-button>
        <cube-button @click="goTo('tab')">Tab Demos</cube-button>
        <cube-button @click="goTo('scroll-tab')">ScrollTab Demo</cube-button>
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
        this.$router.push('/tab-bar/' + subPath)
      }
    }
  }
</script>
