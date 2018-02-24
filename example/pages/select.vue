<template>
  <cube-page type="button-view" title="Select">
    <div slot="content">
      <cube-select
        v-model="value"
        :title="title"
        :options="options"
        :placeholder="placeholder"
        :auto-pop="autoPop"
        :disabled="disabled"
        cancelTxt="Cancel"
        confirmTxt="Confirm"
        @change="change">
      </cube-select>
      <cube-button-group>
        <cube-button @click="modify">modify</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'

  export default {
    components: {
      CubePage,
      CubeButtonGroup
    },
    data() {
      return {
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        value: 2016,
        title: 'Entry time',
        placeholder: 'Please choose entry time',
        autoPop: false,
        disabled: false
      }
    },
    methods: {
      change(value, index, text) {
        console.log('change', value, index, text)
      },
      modify() {
        this.value = 2014
      }
    }
  }
</script>
