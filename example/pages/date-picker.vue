<template>
  <cube-page type="picker-view" title="Date Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showDatePicker">Date Picker</cube-button>
        <cube-button @click="showTimePicker">Time Picker</cube-button>
        <cube-button @click="showDateTimePicker">Date Time Picker</cube-button>
        <cube-button @click="showFormatPicker">Use format</cube-button>
        <cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'

  export default {
    methods: {
      showDatePicker() {
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: 'Date Picker',
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle,
            onChange: () => {
              console.log('change')
            }
          })
        }

        this.datePicker.show()
      },
      showTimePicker() {
        if (!this.timePicker) {
          this.timePicker = this.$createDatePicker({
            title: 'Time Picker',
            min: [8, 0, 0],
            max: [20, 59, 59],
            value: new Date(),
            startColumn: 'hour',
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.timePicker.show()
      },
      showDateTimePicker() {
        if (!this.dateTimePicker) {
          this.dateTimePicker = this.$createDatePicker({
            title: 'Date Time Picker',
            min: new Date(2008, 7, 8, 8, 0, 0),
            max: new Date(2020, 9, 20, 20, 59, 59),
            value: new Date(),
            columnCount: 6,
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.dateTimePicker.show()
      },
      showFormatPicker() {
        if (!this.formatPicker) {
          this.formatPicker = this.$createDatePicker({
            title: 'Use format',
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            format: {
              year: 'YY年',
              month: 'MM月',
              date: '第 D 日'
            },
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.formatPicker.show()
      },
      showUpdatePropsPicker() {
        if (!this.updatePropsPicker) {
          this.updatePropsPicker = this.$createDatePicker({
            title: 'Use $updateProps',
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }

        this.updatePropsPicker.show()
        setTimeout(() => {
          this.updatePropsPicker.$updateProps({
            title: 'updated',
            value: new Date(2010, 9, 1)
          })
        }, 1000)
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
