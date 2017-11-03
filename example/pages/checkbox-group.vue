<template>
  <cube-page type="checkbox-group-view" title="CheckboxGroup">
    <template slot="content">
      <cube-checkbox-group v-model="checkList">
        <cube-checkbox label="1">Checkbox 1</cube-checkbox>
        <cube-checkbox label="2">Checkbox 2</cube-checkbox>
        <cube-checkbox label="3" :disabled="true">Disabled Checkbox</cube-checkbox>
        <cube-checkbox label="4" :disabled="true">Disabled & Checked Checkbox</cube-checkbox>
      </cube-checkbox-group>
      <p>checkList value : {{checkList}}</p>
      <cube-checkbox-group v-model="checkList" :horizontal="true">
        <cube-checkbox label="1">1</cube-checkbox>
        <cube-checkbox label="2">2</cube-checkbox>
        <cube-checkbox label="3" :disabled="true">3</cube-checkbox>
        <cube-checkbox label="4" :disabled="true">4</cube-checkbox>
      </cube-checkbox-group>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        checkList: ['1', '4']
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .checkbox-group-view
    .content
      >
        *
          margin: 10px 0
</style>
