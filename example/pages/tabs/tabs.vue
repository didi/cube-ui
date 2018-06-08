<template>
  <cube-page type="tabs" title="Tabs">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="goTo('basic')">tabs-basic</cube-button>
        <cube-button @click="goTo('composite')">tabs-composite</cube-button>
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
        this.$router.push('/tabs/tabs/' + subPath)
      }
    }
  }
</script>
