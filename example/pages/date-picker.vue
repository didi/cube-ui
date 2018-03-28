<template>
  <cube-page type="picker-view" title="Date Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showDatePicker">Date Picker</cube-button>
        <cube-button @click="updateProps">Use $updateProps</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'

  export default {
    mounted() {
      this.datePicker = this.$createDatePicker({
        min: new Date(2008, 7, 8),
        max: new Date(2020, 9, 20),
        value: new Date(2010, 9, 1),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showDatePicker() {
        this.datePicker.show()
      },
      updateProps() {
        this.datePicker.$updateProps({
          min: new Date(2010, 8, 8),
          max: new Date(2030, 10, 20),
          value: new Date()
        })
      },
      selectHandle(date, selectedVal, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
