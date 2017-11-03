<template>
  <cube-page type="time-picker-view" title="TimePicker（时间选择器）">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="selectTime">TimePicker</cube-button>
        <cube-button @click="selectTimeDay">TimePicker - day options</cube-button>
        <cube-button @click="selectTimeSetTime">TimePicker - setTime(next hour)</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'
  export default {
    methods: {
      selectTime() {
        this.timePicker = this.$createTimePicker({
          showNow: true,
          minuteStep: 5,
          delay: 15
        })
        this.timePicker.show()
      },
      selectTimeDay() {
        this.timePicker = this.$createTimePicker({
          showNow: true,
          minuteStep: 10,
          delay: 10,
          day: {
            len: 5,
            filter: ['今天', '明天'],
            format: 'M月d日'
          },
          onSelect(selectedTime, selectedText) {
            console.log(selectedTime, selectedText)
          }
        })
        this.timePicker.show()
      },
      selectTimeSetTime() {
        const time = new Date().valueOf() + 1 * 60 * 60 * 1000
        this.timePicker = this.$createTimePicker({
          showNow: true,
          minuteStep: 10,
          delay: 15,
          day: {
            len: 5,
            filter: ['今天', '明天', '后天'],
            format: 'M月d日'
          }
        })

        this.timePicker.setTime(time)
        this.timePicker.show()
      }
    },
    beforeDestroy () {
      this.timePicker && this.timePicker.remove() && (this.timePicker = null)
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
