<template>
  <cube-page type="tab-entry" title="Tab Entry">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="goTo('basic')">tab-basic</cube-button>
        <cube-button @click="goTo('composite')">tab-composite</cube-button>
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
        this.$router.push('/tab-bar/tab/' + subPath)
      }
    }
  }
</script>
