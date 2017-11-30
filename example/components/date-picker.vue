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
        tempIndex: [0, 0, 0]
      }
    },
    computed: {
      years() {
        return range(this.min[0], this.max[0], false, '年')
      },
      months() {
        let minMonth = !this.tempIndex[0] ? this.min[1] : 1
        let maxMonth = this.tempIndex[0] === this.years.length - 1 ? this.max[1] : 12

        return range(minMonth, maxMonth, false, '月')
      },
      days() {
        const currentYear = this.years[this.tempIndex[0]].value
        const currentMonth = this.months[this.tempIndex[1]].value

        let day = 30
        if ([1, 3, 5, 7, 8, 10, 12].includes(currentMonth)) {
          day = 31
        } else {
          if (currentMonth === 2) {
            day = !(currentYear % 400) || (!(currentYear % 4) && currentYear % 100) ? 29 : 28
          }
        }

        let minDay = !this.tempIndex[0] && !this.tempIndex[1] ? this.min[2] : 1
        let maxDay = this.tempIndex[0] === this.years.length - 1 && this.tempIndex[1] === this.months.length - 1 ? this.max[2] : day

        return range(minDay, maxDay, false, '日')
      },
      dateData() {
        return [this.years, this.months, this.days]
      }
    },
    watch: {
      dateData() {
        this.$refs.picker.refresh()
      }
    },
    methods: {
      show() {
        this.$refs.picker.show()
      },
      hide() {
        this.$refs.picker.hide()
      },
      change(i, newIndex) {
        if (newIndex !== this.tempIndex[i]) {
          this.tempIndex.splice(i, 1, newIndex)
          this.$refs.picker.setData(this.dateData, this.tempIndex)
        }
      },
      select(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
      },
      cancel() {
        this.$emit(EVENT_CANCEL)
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
