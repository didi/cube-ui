<template>
  <cube-picker
    ref="picker"
    :title="title"
    :data="data"
    :selected-index="selectedIndex"
    :z-index="zIndex"
    :swipe-time="swipeTime"
    @select="_pickerSelect"
    @cancel="_pickerCancel"
    @change="_pickerChange"></cube-picker>
</template>

<script type="text/ecmascript-6">
  import {
    getZeroDate,
    formatDate,
    DAY_TIMESTAMP,
    HOUR_TIMESTAMP,
    MINUTE_TIMESTAMP
  } from '../../common/lang/date'
  import apiMixin from '../../common/mixins/api'
  import CubePicker from '../picker/picker.vue'

  const DAY_STEP = 1
  const MAX_HOUR = 23
  const MAX_MINUTE = 60
  const HOUR_STEP = 1
  const MINUTE_STEP = 10

  const COMPONENT_NAME = 'cube-time-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  function formatNum(num) {
    return ('' + num).length > 1 ? num : ('0' + num)
  }

  function roundMinute(minute, step) {
    return Math.ceil(minute / step) * step
  }

  export default {
    name: COMPONENT_NAME,
    mixins: [apiMixin],
    props: {
      title: {
        type: String,
        default: '选择时间'
      },
      swipeTime: {
        type: Number,
        default: 2500
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
            format: 'M月d日'
          }
        }
      },
      showNow: {
        type: Boolean,
        default: true
      },
      minuteStep: {
        type: Number,
        default: MINUTE_STEP
      },
      zIndex: {
        type: Number
      }
    },
    data() {
      return {
        selectedDayIndex: 0,
        selectedHourIndex: 0,
        selectedMinuteIndex: 0,
        days: [],
        hours: [],
        minutes: [],
        minTime: 0
      }
    },
    computed: {
      data() {
        return [this.days, this.hours, this.minutes]
      },
      selectedIndex() {
        return [this.selectedDayIndex, this.selectedHourIndex, this.selectedMinuteIndex]
      }
    },
    created() {
      this.selectedTimeStamp = null
    },
    methods: {
      show() {
        this.$refs.picker.show()
        this._updateMinTime()
        this._initDays()
        this.today = this.days[0].value
        // make sure picker render before call refillColumn
        this.$nextTick(() => {
          this.selectedDayIndex = this.$refs.picker.refillColumn(0, this.days)
          this._handleHourAndMinute(true)
          this._resetTime()
        })
      },
      hide() {
        this.$refs.picker.hide()
      },
      setTime(timeStamp) {
        this.selectedTimeStamp = parseInt(timeStamp)
      },
      _resetTime() {
        if (!this.selectedTimeStamp) {
          return
        }
        const now = new Date()
        const currentTimestamp = now.getTime()
        let resetToCurrent = false
        if (this.selectedTimeStamp < currentTimestamp + this.delay * MINUTE_TIMESTAMP) {
          resetToCurrent = true
        }
        const date = new Date(this.selectedTimeStamp)
        this.$nextTick(() => {
          this._updateMinTime()
          const zeroTimestamp = +getZeroDate(this.minTime)
          let dayDiff = resetToCurrent ? 0 : Math.floor((this.selectedTimeStamp - zeroTimestamp) / DAY_TIMESTAMP)
          if (dayDiff < this.days.length) {
            if (dayDiff !== this.selectedDayIndex) {
              this.$refs.picker.scrollTo(0, dayDiff)
              this._pickerChange(0, dayDiff)
            }
            this.$nextTick(() => {
              let hourDiff = 0
              if (!resetToCurrent) {
                if (this.hours[0].value === 'now') {
                  hourDiff = Math.floor((date.getHours() - this.hours[1].value) / HOUR_STEP) + 1
                } else {
                  hourDiff = Math.floor((date.getHours() - this.hours[0].value) / HOUR_STEP)
                }
              }
              if (hourDiff !== this.selectedHourIndex) {
                this.$refs.picker.scrollTo(1, hourDiff)
                this._pickerChange(1, hourDiff)
              }
              if (!resetToCurrent) {
                this.$nextTick(() => {
                  let minuteDiff = 0
                  if (this.minutes.length) {
                    minuteDiff = Math.floor((date.getMinutes() - this.minutes[0].value) / this.minuteStep)
                  }
                  if (minuteDiff !== this.selectedMinuteIndex) {
                    this.$refs.picker.scrollTo(2, minuteDiff)
                    this._pickerChange(2, minuteDiff)
                  }
                })
              }
            })
          }
          this.selectedTimeStamp = null
        })
      },
      _updateMinTime() {
        this.minTime = new Date(+new Date() + this.delay * MINUTE_TIMESTAMP)
      },
      _initDays() {
        const days = []
        const dayConf = this.day
        const zeroTimestamp = +getZeroDate(new Date())

        for (let i = 0; i < dayConf.len; i += DAY_STEP) {
          const timestamp = zeroTimestamp + i * DAY_TIMESTAMP

          if (dayConf.filter && i < dayConf.filter.length) {
            days.push({
              value: timestamp,
              text: dayConf.filter[i]
            })
          } else {
            days.push({
              value: timestamp,
              text: formatDate(new Date(timestamp), dayConf.format)
            })
          }
        }
        this.days = days
      },
      _initHours(begin) {
        const hours = []
        if (this.showNow && this.selectedDayIndex === 0) {
          hours.push({
            value: 'now',
            text: '现在'
          })
        }
        for (let i = begin; i <= MAX_HOUR; i += HOUR_STEP) {
          hours.push({
            value: i,
            text: i + '点'
          })
        }
        this.hours = hours
      },
      _initMinutes(begin) {
        if (begin === false) {
          this.minutes = []
        } else {
          const minutes = []
          const step = this.minuteStep
          const max = 60 - step
          begin = begin % 60
          for (let i = begin; i <= max; i += step) {
            minutes.push({
              value: i,
              text: formatNum(i) + '分'
            })
          }
          this.minutes = minutes
        }
      },
      _handleHourAndMinute(inited) {
        let beginHour = 0
        let beginMinute = 0
        let moreThanOne = false

        if (this.today + DAY_TIMESTAMP < this.minTime) {
          moreThanOne = true
          if (this.showNow && this.selectedDayIndex === 0) {
            beginHour = 24
          }
        } else {
          beginHour = this.minTime.getHours()
          if (this.minTime.getMinutes() > MAX_MINUTE - this.minuteStep) {
            beginHour += 1
            if (beginHour === 24) {
              moreThanOne = true
            }
          }
        }

        // smaller than min time
        if (this.days[this.selectedDayIndex].value < this.minTime) {
          if (!this.showNow && moreThanOne && inited) {
            beginHour = 0
            this.days.shift()
            this.selectedDayIndex = this.$refs.picker.refillColumn(0, this.days)
          }

          this._initHours(beginHour)
          this.selectedHourIndex = this.$refs.picker.refillColumn(1, this.hours)

          let distHour = this.hours[this.selectedHourIndex].value
          if (distHour === beginHour) {
            beginMinute = roundMinute(this.minTime.getMinutes() + 1, this.minuteStep)
          }
          // today now
          if (this.selectedDayIndex === 0 && this.selectedHourIndex === 0 && this.showNow) {
            beginMinute = false
          }
          this._initMinutes(beginMinute)
          this.selectedMinuteIndex = this.$refs.picker.refillColumn(2, this.minutes)
        } else {
          if (!this.showNow && moreThanOne && inited) {
            this.days.shift()
            this.selectedDayIndex = this.$refs.picker.refillColumn(0, this.days)
          }
          beginHour = 0
          this._initHours(beginHour)
          this._initMinutes(beginMinute)
          const refillRet = this.$refs.picker.refill([this.days, this.hours, this.minutes])
          this.selectedHourIndex = refillRet[1]
          this.selectedMinuteIndex = refillRet[2]
        }
      },
      _handleMinute() {
        if (this.days[this.selectedDayIndex].value - +this.minTime < 0) {
          let beginMinute = 0
          let beginHour = this.minTime.getHours()
          if (this.hours[this.selectedHourIndex].value === beginHour) {
            beginMinute = roundMinute(this.minTime.getMinutes() + 1, this.minuteStep)
          }
          // today now
          if (this.selectedDayIndex === 0 && this.selectedHourIndex === 0 && this.showNow) {
            beginMinute = false
          }
          this._initMinutes(beginMinute)
          this.selectedMinuteIndex = this.$refs.picker.refillColumn(2, this.minutes)
        }
      },
      _getSelect() {
        let selectedTime
        let selectedText
        if (this.selectedDayIndex === 0 && this.selectedHourIndex === 0 && this.showNow) {
          selectedTime = +new Date()
          selectedText = this.hours[0].text
        } else {
          selectedTime = this.days[this.selectedDayIndex].value +
            this.hours[this.selectedHourIndex].value * HOUR_TIMESTAMP +
            this.minutes[this.selectedMinuteIndex].value * MINUTE_TIMESTAMP
          selectedText = this.days[this.selectedDayIndex].text + ' ' +
            this.hours[this.selectedHourIndex].text + ':' +
            this.minutes[this.selectedMinuteIndex].text
        }

        return {
          selectedTime,
          selectedText
        }
      },
      _pickerSelect(selectedVal, selectedIndex) {
        this.selectedDayIndex = selectedIndex[0]
        this.selectedHourIndex = selectedIndex[1]
        this.selectedMinuteIndex = selectedIndex[2]

        let {selectedTime, selectedText} = this._getSelect()
        this.$emit(EVENT_SELECT, selectedTime, selectedText)
      },
      _pickerCancel() {
        this.$emit(EVENT_CANCEL)
      },
      _pickerChange(index, selectedIndex) {
        this._updateMinTime()

        if (index === 0) {
          this.selectedDayIndex = selectedIndex
          this._handleHourAndMinute(false)
        } else if (index === 1) {
          this.selectedHourIndex = selectedIndex
          this._handleMinute()
        } else {
          this.selectedMinuteIndex = selectedIndex
        }

        let {selectedTime, selectedText} = this._getSelect()
        this.$emit(EVENT_CHANGE, selectedTime, selectedText)
      }
    },
    components: {
      CubePicker
    }
  }
</script>
