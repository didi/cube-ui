<template>
  <cube-page type="form" title="Form">
    <template #content>
      <cube-button-group>
        <cube-button @click="goTo('default')">Default</cube-button>
        <cube-button @click="goTo('custom')">Custom</cube-button>
        <cube-button @click="goTo('classic')">Classic style</cube-button>
        <cube-button @click="goTo('fresh')">Fresh style</cube-button>
        <cube-button @click="goTo('questionnaire')">Questionnaire</cube-button>
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
        this.$router.push('/form/' + subPath)
      }
    }
  }
</script>

<style lang="stylus" >
</style>
