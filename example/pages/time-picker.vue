<template>
  <cube-page type="time-picker-view" title="TimePicker（时间选择器）">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showTimePicker">TimePicker</cube-button>
        <cube-button @click="showConfigDayPicker">Config day options</cube-button>
        <cube-button @click="showFormatPicker">Config format</cube-button>
        <cube-button @click="showMinuteStepPicker">Config minute step</cube-button>
        <cube-button @click="showSetTimePiker">Use setTime</cube-button>
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
    methods: {
      showTimePicker() {
        if (!this.timePicker) {
          this.timePicker = this.$createTimePicker({
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.timePicker.show()
      },
      showConfigDayPicker() {
        if (!this.configDayPicker) {
          this.configDayPicker = this.$createTimePicker({
            minuteStep: 5,
            delay: 10,
            day: {
              len: 5,
              filter: ['今天', '明天'],
              format: 'M月D日'
            },
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.configDayPicker.show()
      },
      showFormatPicker() {
        if (!this.formatPicker) {
          this.formatPicker = this.$createTimePicker({
            format: 'hh:mm',
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.formatPicker.show()
      },
      showMinuteStepPicker() {
        if (!this.minuteStepPicker) {
          this.minuteStepPicker = this.$createTimePicker({
            minuteStep: {
              rule: 'ceil',
              step: 15
            },
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.minuteStepPicker.show()
      },
      showSetTimePiker() {
        if (!this.setTimePiker) {
          this.setTimePiker = this.$createTimePicker({
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }

        const time = new Date().valueOf() + 1 * 60 * 60 * 1000 * 24
        this.setTimePiker.setTime(time)
        this.setTimePiker.show()
      },
      selectHandler(selectedTime, selectedText, formatedTime) {
        this.$createDialog({
          type: 'warn',
          title: `selected time: ${selectedTime}`,
          content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    }
  }
</script>
