<template>
  <cube-picker
    ref="picker"
    title="Choose Date"
    :data="dateData"
    :selectedIndex="selectedIndex"
    @change="change"
    @select="select"
    @cancel="cancel">
  </cube-picker>
</template>

<script>
  const COMPONENT_NAME = 'date-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'

  export default {
    name: COMPONENT_NAME,
    props: {
      min: {
        type: Array,
        default() {
          return [2010, 2, 1]
        }
      },
      max: {
        type: Array,
        default() {
          return [2020, 2, 1]
        }
      },
      selectedIndex: {
        type: Array,
        default() {
          return [0, 0, 0]
        }
      }
    },
    data() {
      return {
        dateData: [],
        tempIndex: [0, 0, 0],
        years: [],
        months: [],
        days: [],
        year: 0,
        month: 0,
        day: 0
      }
    },
    watch: {
      year() {
        this.updateMonths()
      },
      month() {
        this.updateDays()
      }
    },
    methods: {
      show() {
        this.$refs.picker.show()
        this.years = range(this.min[0], this.max[0], false, '年')
        this.year = this.years[this.selectedIndex[0]].value
        this.updateMonths()
        this.month = this.months[this.selectedIndex[1]].value
        this.updateDays()
        this.day = this.days[this.selectedIndex[2]].value
        this.tempIndex = this.selectedIndex
      },
      hide() {
        this.$refs.picker.hide()
      },
      change(i, newIndex) {
        if (newIndex !== this.tempIndex[i]) {
          this.tempIndex[i] = newIndex
        }
        const keyMap = ['year', 'month', 'day']
        if (this.dateData[i][newIndex] !== this[keyMap[i]]) {
          this[keyMap[i]] = this.dateData[i][newIndex].value
        }
      },
      select(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
      },
      cancel() {
        this.$emit(EVENT_CANCEL)
      },
      updateMonths() {
        let minMonth = this.year === this.min[0] ? this.min[1] : 1
        let maxMonth = this.year === this.max[0] ? this.max[1] : 12

        this.months = range(minMonth, maxMonth, false, '月')

        /* Try to keep the same month */
        const findIndex = this.months.findIndex((item) => {
          return item.value === this.month
        })
        if (findIndex !== -1) {
          this.tempIndex.splice(1, 1, findIndex)
          this.updateDays()
        } else {
          if (this.month < this.months[0].value) {
            this.month = this.months[0].value
            this.tempIndex[1] = 0
          } else {
            this.month = this.months[this.months.length - 1].value
            this.tempIndex[1] = this.months.length - 1
          }
        }
      },
      updateDays() {
        let day = 30
        if ([1, 3, 5, 7, 8, 10, 12].includes(this.month)) {
          day = 31
        } else {
          if (this.month === 2) {
            day = !(this.year % 400) || (!(this.year % 4) && this.year % 100) ? 29 : 28
          }
        }

        let minDay = this.year === this.min[0] && this.month === this.min[1] ? this.min[2] : 1
        let maxDay = this.year === this.max[0] && this.month === this.max[1] ? this.max[2] : day

        this.days = range(minDay, maxDay, false, '日')

        /* Try to keep the same day */
        const self = this
        const findIndex = this.days.findIndex((item) => {
          return item.value === self.day
        })
        if (findIndex !== -1) {
          this.tempIndex[2] = findIndex
        } else {
          this.day = this.day < this.days[0].value ? this.days[0].value : this.days[this.days.length - 1].value
        }

        this.dateData = [this.years, this.months, this.days]
        // make sure picker render before call refillColumn
        this.$nextTick(() => {
          this.$refs.picker.scrollTo(1, this.tempIndex[1])
          this.$refs.picker.scrollTo(2, this.tempIndex[2])
        })
      }
    }
  }

  function range(n, m, polyfill = false, unit = '') {
    let arr = []
    for (let i = n; i <= m; i++) {
      let value = (polyfill && i < 10 ? '0' + i : i) + unit
      arr.push({
        text: value,
        value: i
      })
    }
    return arr
  }
</script>
