<template>
  <cube-picker
    ref="picker"
    v-model="isVisible"
    :data="pickerData"
    :selected-index="selectedIndex"
    :title="title"
    :subtitle="subtitle"
    :cancel-txt="cancelTxt"
    :confirm-txt="confirmTxt"
    :swipe-time="swipeTime"
    :z-index="zIndex"
    @select="_pickerSelect"
    @cancel="_pickerCancel"
    @change="_pickerChange"></cube-picker>
</template>

<script type="text/ecmascript-6">
  // TODO: 有延时，特别的延时超过一天的时候，是否还需要‘现在’？

  import {
    pad,
    formatDate,
    getZeroStamp,
    getDayDiff,
    DAY_TIMESTAMP,
    HOUR_TIMESTAMP,
    MINUTE_TIMESTAMP
  } from '../../common/lang/date'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import pickerMixin from '../../common/mixins/picker'
  import CubePicker from '../picker/picker.vue'

  const COMPONENT_NAME = 'cube-time-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  const normalHours = []
  for (let i = 0; i < 24; i++) {
    normalHours.push({
      value: i,
      text: i + '点'
    })
  }

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, pickerMixin],
    components: {
      CubePicker
    },
    props: {
      title: {
        type: String,
        default: '选择时间'
      },
      delay: {
        type: Number,
        default: 15
      },
      day: {
        type: Object,
        default() {
          return {
            len: 3,
            filter: ['今日'],
            format: 'M月D日'
          }
        }
      },
      showNow: {
        type: Boolean,
        default: true
      },
      minuteStep: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        now: new Date(),
        selectedIndex: [0, 0, 0],
        value: 0
      }
    },
    computed: {
      minTime() {
        return new Date(+this.now + this.delay * MINUTE_TIMESTAMP)
      },
      days() {
        const days = []
        const dayDiff = getDayDiff(this.minTime, this.now)

        for (let i = dayDiff; i < this.day.len; i++) {
          const timestamp = +this.minTime + i * DAY_TIMESTAMP
          days.push({
            value: timestamp,
            text: (this.day.filter && this.day.filter[dayDiff + i]) || formatDate(new Date(timestamp), this.day.format, 'i')
          })
        }
        return days
      },
      normalMinutes() {
        const normalMinutes = []
        for (let i = 0; i < 60; i += this.minuteStep) {
          normalMinutes.push({
            value: i,
            text: pad(i) + '分'
          })
        }
        return normalMinutes
      },
      pickerData() {
        if (this.selectedIndex[0]) {
          return [this.days, normalHours, this.normalMinutes]
        }
        const hours = normalHours.slice(this.minTime.getHours())

        if (this.showNow) {
          hours.unshift({
            value: 'now',
            text: '现在'
          })
          if (this.selectedIndex[1] === 0) {
            return [this.days, hours, []]
          }
        }

        if ((this.showNow && this.selectedIndex[1] === 1) || (!this.showNow && this.selectedIndex[0] === 0)) {
          const begin = Math.floor(this.minTime.getMinutes() / this.minuteStep)
          const minutes = this.normalMinutes.slice(begin)

          return [this.days, hours, minutes]
        }

        return [this.days, hours, this.normalMinutes]
      }
    },
    methods: {
      show() {
        if (this.isVisible) {
          return
        }
        this.isVisible = true

        this._updateNow()
        this._updateSelecteIndex()
      },
      setTime(value) {
        this.value = value

        this.isVisible && this._updateSelecteIndex()
      },
      _updateSelecteIndex() {
        const value = this.value
        const minTime = this.minTime

        if (value <= +minTime) {
          return [0, 0, 0]
        } else {
          const dayIndex = getDayDiff(new Date(value), minTime)

          const valueZeroStamp = getZeroStamp(new Date(value))
          let resetStamp = value - valueZeroStamp
          const hour = Math.floor(resetStamp / HOUR_TIMESTAMP)
          const minHour = this.minTime.getHours()
          const hourIndex = hour - (dayIndex ? 0 : this.showNow ? (minHour - 1) : minHour)

          resetStamp = resetStamp % HOUR_TIMESTAMP
          const minute = Math.floor(resetStamp / (this.minuteStep * MINUTE_TIMESTAMP))
          const minuteIndex = minute - (dayIndex || hourIndex ? 0 : Math.floor(this.minTime.getMinutes() / this.minuteStep))

          this.selectedIndex.splice(0, 3, dayIndex, hourIndex, minuteIndex)
        }
      },
      _updateNow() {
        this.now = new Date()
      },
      _pickerChange(i, newIndex) {
        if (this.selectedIndex[i] !== newIndex) {
          this.selectedIndex.splice(i, 1, newIndex)
        }
        this.$emit(EVENT_CHANGE)
      },
      _pickerSelect(selectedVal, selectedIndex, selectedText) {
        if (this.showNow && !selectedIndex[0] && !selectedIndex[1]) {
          this.$emit(EVENT_SELECT, +new Date(), '现在')
        } else {
          const timestamp = +getZeroStamp(new Date(selectedVal[0])) + selectedVal[1] * HOUR_TIMESTAMP + selectedVal[2] * MINUTE_TIMESTAMP
          const text = selectedText[0] + ' ' + selectedText[1] + ':' + selectedText[2]
          this.value = timestamp
          this.$emit(EVENT_SELECT, timestamp, text)
        }
      },
      _pickerCancel() {
        this.$emit(EVENT_CANCEL)
      }
    }
  }
</script>
