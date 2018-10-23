<template>
  <cube-page type="checkbox-view" title="Checkbox">
    <template slot="content">
      <cube-checkbox v-model="checked">Checkbox</cube-checkbox>
      <p>checked value: {{checked}}</p>
      <cube-checkbox v-model="checked" position="right" shape="square" :hollow-style="true">Styled Checkbox</cube-checkbox>
      <br><br>
      <cube-checkbox v-model="checked2" :option="optionValue"></cube-checkbox>
      <p>checked value (with option) : {{checked2}}</p>
      <cube-checkbox v-model="checked2" :option="{disabled: true}" :hollow-style="true">
        Disabled Checkbox
      </cube-checkbox>
      <br><br>
      <cube-checkbox class="with-click" v-model="checked2">
        Agree <a href="javascript:;" @click.stop>《xxx》</a>
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
    .cube-checkbox
      background-color: #fff
    .with-click
      .cube-checkbox-label
        a
          position: relative
          z-index: 1
</style>
