<template>
  <cube-page type="radio-view" title="Radio">
    <template slot="content">
      <cube-radio v-model="selected" :options="options" />
      <p>selected value: {{selected}}</p>
      <cube-radio v-model="selected2" :options="options2" position="right" />
      <p>selected value: {{selected2}}</p>
      <cube-radio v-model="selected3" :options="options3" :horizontal="true" />
      <p>selected value: {{selected3}}</p>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        selected: '',
        options: ['Option1', 'Option2'],
        selected2: '3',
        options2: [
          {
            label: 'Option1',
            value: '1'
          },
          {
            label: 'Option2',
            value: '2'
          },
          {
            label: 'Option3',
            value: '3',
            disabled: true
          }
        ],
        selected3: '3',
        options3: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3',
            disabled: true
          }
        ]
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .radio-view
    .content
      >
        *
          margin: 10px 0
</style>
