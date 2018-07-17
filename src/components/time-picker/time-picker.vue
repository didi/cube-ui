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
  import { warn } from '../../common/helpers/debug'

  const COMPONENT_NAME = 'cube-time-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  const NOW = {
    value: 'now',
    defaultText: '现在'
  }

  const INT_RULE = {
    floor: 'floor',
    ceil: 'ceil',
    round: 'round'
  }

  const DEFAULT_STEP = 10

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
        type: [Boolean, Object],
        default: true
      },
      minuteStep: {
        type: [Number, Object],
        default: DEFAULT_STEP
      },
      format: {
        type: String,
        default: 'YYYY/M/D hh:mm'
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
      nowText() {
        return (this.showNow && this.showNow.text) || NOW.defaultText
      },
      minuteStepRule() {
        const minuteStep = this.minuteStep
        return (typeof minuteStep === 'object' && Math[INT_RULE[minuteStep.rule]]) || Math[INT_RULE.floor]
      },
      minuteStepNumber() {
        const minuteStep = this.minuteStep
        return typeof minuteStep === 'number' ? minuteStep : (minuteStep.step || DEFAULT_STEP)
      },
      minTime() {
        let minTimeStamp = +this.now + this.delay * MINUTE_TIMESTAMP

        // Handle the minTime selectable change caused by minute step.
        const minute = new Date(minTimeStamp).getMinutes()
        const intMinute = this.minuteStepRule(minute / this.minuteStepNumber) * this.minuteStepNumber
        if (intMinute >= 60) {
          minTimeStamp += (60 - minute) * MINUTE_TIMESTAMP
        }

        return new Date(minTimeStamp)
      },
      days() {
        const days = []
        const dayDiff = getDayDiff(this.minTime, this.now)

        for (let i = 0; i < this.day.len; i++) {
          const timestamp = +this.minTime + i * DAY_TIMESTAMP
          days.push({
            value: timestamp,
            text: (this.day.filter && this.day.filter[dayDiff + i]) || formatDate(new Date(timestamp), this.day.format)
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
            text: this.nowText,
            children: []
          })
        }
        return partHours
      },
      minutes() {
        const minutes = []
        for (let i = 0; i < 60; i += this.minuteStepNumber) {
          minutes.push({
            value: i,
            text: pad(i) + '分'
          })
        }
        return minutes
      },
      partMinutes() {
        const begin = this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber)
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
        this._updateSelectedIndex()
      },
      setTime(value) {
        this.value = value

        this.isVisible && this._updateSelectedIndex()
      },
      _updateSelectedIndex() {
        const value = this.value
        const minTime = this.minTime

        if (value <= +minTime) {
          this.selectedIndex = [0, 0, 0]
        } else {
          // calculate dayIndex
          const valueDate = new Date(value)
          const dayIndex = getDayDiff(valueDate, minTime)

          if (dayIndex >= this.days.length) {
            warn('Use "setTime" to set a time exceeded to the option range do not actually work.', COMPONENT_NAME)
            return
          }

          // calculate hourIndex
          const hour = valueDate.getHours()
          const beginHour = dayIndex === 0
                            ? this.showNow ? this.minTime.getHours() - 1 : this.minTime.getHours()
                            : 0
          const hourIndex = hour - beginHour

          // calculate minuteIndex
          const minute = this.minuteStepRule(valueDate.getMinutes() / this.minuteStepNumber)
          const beginMinute = !dayIndex && (this.showNow ? hourIndex === 1 : !hourIndex)
                              ? this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber)
                              : 0
          const minuteIndex = minute - beginMinute

          this.selectedIndex = [dayIndex, hourIndex, minuteIndex]
        }
      },
      _updateNow() {
        this.now = new Date()
      },
      _pickerChange(i, newIndex) {
        this.$emit(EVENT_CHANGE, i, newIndex)
      },
      _pickerSelect(selectedVal, selectedIndex, selectedText) {
        let timestamp
        let text
        if (selectedVal[1] === NOW.value) {
          timestamp = +new Date()
          text = this.nowText
        } else {
          timestamp = getZeroStamp(new Date(selectedVal[0])) + selectedVal[1] * HOUR_TIMESTAMP + selectedVal[2] * MINUTE_TIMESTAMP
          text = selectedText[0] + ' ' + selectedText[1] + ':' + selectedText[2]
        }

        this.value = timestamp
        const formatedTime = formatDate(new Date(timestamp), this.format)
        this.$emit(EVENT_SELECT, timestamp, text, formatedTime)
      },
      _pickerCancel() {
        this.$emit(EVENT_CANCEL)
      }
    }
  }
</script>
