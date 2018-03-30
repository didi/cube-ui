<template>
  <cube-page type="picker-view" title="Date Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showDatePicker">Date Picker</cube-button>
        <cube-button @click="showTimePicker">Time Picker</cube-button>
        <cube-button @click="showDateTimePicker">Date Time Picker</cube-button>
        <cube-button @click="showMonthDatePicker">Month Date Picker</cube-button>
        <cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>
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
        title: 'Date Picker',
        min: new Date(2008, 7, 8),
        max: new Date(2020, 9, 20),
        value: new Date(),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.timePicker = this.$createDatePicker({
        title: 'Time Picker',
        min: [8, 0, 0],
        max: [20, 59, 59],
        value: new Date(),
        beginColumn: 'hour',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.dateTimePicker = this.$createDatePicker({
        title: 'Date Time Picker',
        min: new Date(2008, 7, 8, 8, 0, 0),
        max: new Date(2020, 9, 20, 20, 59, 59),
        value: new Date(),
        columnNumber: 6,
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.monthDatePicker = this.$createDatePicker({
        title: 'Month Date Picker',
        min: [1, 1],
        max: [12, 31],
        value: new Date(),
        beginColumn: 'month',
        columnNumber: 2,
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.updatePropsPicker = this.$createDatePicker({
        title: 'Use $updateProps',
        min: new Date(2008, 7, 8),
        max: new Date(2020, 9, 20),
        value: new Date(),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showDatePicker() {
        this.datePicker.show()
      },
      showTimePicker() {
        this.timePicker.show()
      },
      showDateTimePicker() {
        this.dateTimePicker.show()
      },
      showMonthDatePicker() {
        this.monthDatePicker.show()
      },
      showUpdatePropsPicker() {
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
