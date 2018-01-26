<template>
  <cube-page type="switch-view" title="Switch">
    <template slot="content">
      <cube-switch v-model="value"> Switch</cube-switch>
      <p>switch value: {{value}}</p>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        value: true
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .switch-view
    .content
      >
        *
          margin: 10px 0
      .cube-switch
        padding: 10px
        background-color: white
</style>
