<template>
  <cube-page type="switch-view" title="Switch">
    <template slot="content">
      <cube-switch v-model="values[0]">Switch</cube-switch>
      <p>switch value: {{values[0]}}</p>
      <cube-switch v-model="values[1]">Switch</cube-switch>
      <p>switch value: {{values[1]}}</p>
      <cube-switch v-model="values[2]" :disabled="disabled">Disbled Switch</cube-switch>
      <p>switch value: {{values[2]}}</p>
      <cube-switch v-model="values[3]" :disabled="disabled">Disbled Switch</cube-switch>
      <p>switch value: {{values[3]}}</p>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        values: [true, false, true, false],
        disabled: true
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
