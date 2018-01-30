<template>
  <cube-page type="checkbox-view" title="Checkbox">
    <template slot="content">
      <cube-checkbox v-model="checked">Checkbox</cube-checkbox>
      <p>checked value: {{checked}}</p>
      <cube-checkbox v-model="checked" position="right">Position Checkbox</cube-checkbox>
      <br><br>
      <cube-checkbox v-model="checked2" :option="optionValue" shape="square"></cube-checkbox>
      <p>checked value (with option) : {{checked2}}</p>
      <cube-checkbox v-model="checked2" :option="{disabled: true}">
        Disabled Checkbox
      </cube-checkbox>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        checked: true,
        checked2: 'optionValue',
        optionValue: {
          label: 'Option Checkbox',
          value: 'optionValue',
          disabled: false
        }
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .checkbox-view
    .content
      >
        *
          margin: 10px 0
</style>
