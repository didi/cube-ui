<template>
  <cube-cascade-picker
    ref="picker"
    v-model="isVisible"
    :data="cascadeData"
    :selected-index="selectedIndex"
    :title="_title"
    :subtitle="subtitle"
    :cancel-txt="_cancelTxt"
    :confirm-txt="_confirmTxt"
    :swipe-time="swipeTime"
    :z-index="zIndex"
    :mask-closable="maskClosable"
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
  import localeMixin from '../../common/mixins/locale'
  import CubeCascadePicker from '../cascade-picker/cascade-picker.vue'
  import { warn } from '../../common/helpers/debug'

  const COMPONENT_NAME = 'cube-time-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  const NOW = {
    value: 'now'
  }

  const INT_RULE = {
    floor: 'floor',
    ceil: 'ceil',
    round: 'round'
  }

  const DEFAULT_STEP = 10

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, pickerMixin, localeMixin],
    components: {
      CubeCascadePicker
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      delay: {
        type: Number,
        default: 15
      },
      day: {
        type: Object,
        default() {
          return {
            len: 3
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
      },
      min: {
        type: [Date, Number],
        default: null
      },
      max: {
        type: [Date, Number],
        default: null
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
      _title () {
        return this.title || this.$t('selectTime')
      },
      _day () {
        const defaultDay = {
          filter: [this.$t('today')],
          format: this.$t('formatDate')
        }
        return Object.assign({}, defaultDay, this.day)
      },
      nowText() {
        const defaultText = this.$t('now')
        return (this.showNow && this.showNow.text) || defaultText
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
        let minTimeStamp = +this.min || +this.now + this.delay * MINUTE_TIMESTAMP

        // Handle the minTime selectable change caused by minute step.
        const minute = new Date(minTimeStamp).getMinutes()
        const intMinute = Math.min(this.minuteStepRule(minute / this.minuteStepNumber) * this.minuteStepNumber, 60)

        minTimeStamp += (intMinute - minute) * MINUTE_TIMESTAMP
        return new Date(minTimeStamp)
      },
      maxTime() {
        let maxTimeStamp = +this.max || (getZeroStamp(new Date(+this.minTime + this._day.len * DAY_TIMESTAMP)) - 1)

        const minute = new Date(maxTimeStamp).getMinutes()
        const intMinute = Math.floor(minute / this.minuteStepNumber) * this.minuteStepNumber
        maxTimeStamp -= (minute - intMinute) * MINUTE_TIMESTAMP

        return new Date(maxTimeStamp)
      },
      days() {
        const days = []
        const dayDiff = getDayDiff(this.minTime, this.now)
        const len = this.max ? getDayDiff(this.maxTime, this.minTime) + 1 : this._day.len

        for (let i = 0; i < len; i++) {
          const timestamp = +this.minTime + i * DAY_TIMESTAMP
          days.push({
            value: timestamp,
            text: (this._day.filter && this._day.filter[dayDiff + i]) || formatDate(new Date(timestamp), this._day.format)
          })
        }
        return days
      },
      hours() {
        const hours = []
        for (let i = 0; i < 24; i++) {
          hours.push({
            value: i,
            text: `${i}${this.$t('hours')}`,
            children: this.minutes
          })
        }
        return hours
      },
      minutes() {
        const minutes = []
        for (let i = 0; i < 60; i += this.minuteStepNumber) {
          minutes.push({
            value: i,
            text: `${pad(i)}${this.$t('minutes')}`
          })
        }
        return minutes
      },
      cascadeData() {
        const days = this.days.slice()

        // When the maxTime is smaller than minTime by more than a minute step, there is no option could be chosen.
        if (this.maxTime - this.minTime <= -60000) {
          warn('The max is smaller than the min optional time.', COMPONENT_NAME)
          return []
        }

        days.forEach((day, index) => {
          const isMinDay = index === 0
          const isMaxDay = index === days.length - 1

          if (!isMinDay && !isMaxDay) {
            day.children = this.hours
            return
          }

          const partHours = []
          const minHour = isMinDay ? this.minTime.getHours() : 0
          const maxHour = isMaxDay ? this.maxTime.getHours() : 23

          for (let i = minHour; i <= maxHour; i++) {
            const isMinHour = isMinDay && i === minHour
            const isMaxHour = isMaxDay && i === maxHour

            if (!isMinHour && !isMaxHour) {
              partHours.push({
                value: i,
                text: `${i}${this.$t('hours')}`,
                children: this.minutes
              })
              continue
            }

            // Math.round is use to avoid some weird float bug of multiplication and divisionluate in JavaScript. Because we have to ensure the arguments of Array.slice are int.
            const start = isMinHour ? Math.round(this.minTime.getMinutes() / this.minuteStepNumber) : 0
            const end = isMaxHour ? Math.round(this.maxTime.getMinutes() / this.minuteStepNumber) : Math.floor(59 / this.minuteStepNumber)

            const partMinutes = this.minutes.slice(start, end + 1)
            partHours.push({
              value: i,
              text: `${i}${this.$t('hours')}`,
              children: partMinutes
            })
          }

          day.children = partHours
        })

        if (this.showNow) {
          days[0].children.unshift({
            value: NOW.value,
            text: this.nowText,
            children: []
          })
        }

        return days
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
        // fix the value last choose was changed when time-picker is opened again
        const comparativeTime = (this.min || this.min === 0)
          ? +minTime
          : Math.floor(minTime / MINUTE_TIMESTAMP) * MINUTE_TIMESTAMP
        if (value < comparativeTime) {
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
            ? this.showNow
              ? this.minTime.getHours() - 1
              : this.minTime.getHours()
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
