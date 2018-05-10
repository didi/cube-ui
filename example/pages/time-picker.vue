<template>
  <cube-page type="time-picker-view" title="TimePicker（时间选择器）">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showTimePicker">TimePicker</cube-button>
        <cube-button @click="showConfigDayPicker">Config day options</cube-button>
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
      showSetTimePiker() {
        if (!this.setTimePiker) {
          this.setTimePiker = this.$createTimePicker({
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }

        const time = new Date().valueOf() + 1 * 60 * 60 * 1000 * 24 * 3
        this.setTimePiker.setTime(time)
        this.setTimePiker.show()
      },
      selectHandler(selectedTime, selectedText) {
        this.$createDialog({
          type: 'warn',
          title: `选中的时间戳是 ${selectedTime}`,
          content: `选中的内容是 ${selectedText}`,
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
