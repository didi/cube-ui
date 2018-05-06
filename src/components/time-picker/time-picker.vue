<template>
  <cube-cascade-picker
    ref="picker"
    v-model="isVisible"
    :data="cascadeData"
    :selected-index="selectedIndex"
    :title="title"
    :subtitle="subtitle"
    :cancel-txt="cancelTxt"
    :confirm-txt="confirmTxt"
    :swipe-time="swipeTime"
    :z-index="zIndex"
    @select="_pickerSelect"
    @cancel="_pickerCancel"
    @change="_pickerChange">
  </cube-cascade-picker>
</template>

<script type="text/ecmascript-6">
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
  import CubeCascadePicker from '../cascade-picker/cascade-picker.vue'

  const NOW = {
    value: 'now',
    text: '现在'
  }

  const COMPONENT_NAME = 'cube-time-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, pickerMixin],
    components: {
      CubeCascadePicker
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
      hours() {
        const hours = []
        for (let i = 0; i < 24; i++) {
          hours.push({
            value: i,
            text: i + '点',
            children: this.minutes
          })
        }
        return hours
      },
      partHours() {
        const partHours = this.hours.slice(this.minTime.getHours())
        partHours[0] = Object.assign({}, partHours[0], {children: this.partMinutes})

        if (this.showNow) {
          partHours.unshift({
            value: NOW.value,
            text: NOW.text,
            children: []
          })
        }
        return partHours
      },
      minutes() {
        const minutes = []
        for (let i = 0; i < 60; i += this.minuteStep) {
          minutes.push({
            value: i,
            text: pad(i) + '分'
          })
        }
        return minutes
      },
      partMinutes() {
        const begin = Math.floor(this.minTime.getMinutes() / this.minuteStep)
        return this.minutes.slice(begin)
      },
      cascadeData() {
        const data = this.days.slice()
        data.forEach((item, index) => {
          item.children = index ? this.hours : this.partHours
        })
        return data
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
        this.$emit(EVENT_CHANGE, i, newIndex)
      },
      _pickerSelect(selectedVal, selectedIndex, selectedText) {
        if (selectedVal[1] === NOW.value) {
          this.$emit(EVENT_SELECT, +new Date(), NOW.text)
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
