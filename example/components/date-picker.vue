<template>
  <cube-picker
    ref="datePicker"
    title="Choose Date"
    :data="dateData"
    @change="change"
    @select="select"
    @cancel="cancel">
  </cube-picker>
</template>

<script>
  function range(n, m, polyfill = false) {
    let arr = []
    for (let i = n; i <= m; i++) {
      let value = polyfill && i < 10 ? '0' + i : i
      arr.push({
        text: value,
        value: i
      })
    }
    return arr
  }

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
      }
    },
    data() {
      return {
        tempIndex: [0, 0, 0]
      }
    },
    computed: {
      years() {
        return range(this.min[0], this.max[0])
      },
      months() {
        let minMonth = !this.tempIndex[0] ? this.min[1] : 1
        let maxMonth = this.tempIndex[0] === this.years.length - 1 ? this.max[1] : 12

        return range(minMonth, maxMonth)
      },
      days() {
        const currentMonth = this.months[this.tempIndex[1]].value
        let day = 30
        if ([1, 3, 5, 7, 8, 10, 12].includes(currentMonth)) {
          day = 31
        } else {
          if (currentMonth === 2) {
            day = this.tempIndex[0] % 4 ? 28 : 29
          }
        }

        let minDay = !this.tempIndex[0] && !this.tempIndex[1] ? this.min[2] : 1
        let maxDay = this.tempIndex[0] === this.years.length - 1 && this.tempIndex[1] === this.months.length - 1 ? this.max[2] : day

        return range(minDay, maxDay)
      },
      dateData() {
        return [this.years, this.months, this.days]
      }
    },
    methods: {
      show() {
        this.$refs.datePicker.show()
      },
      hide() {
        this.$refs.datePicker.hide()
      },
      change(i, newIndex) {
        this.tempIndex.splice(i, 1, newIndex)
        this.$refs.datePicker.setData(this.dateData, this.tempIndex)
      },
      select(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
      },
      cancel() {
        this.$emit(EVENT_CANCEL)
      }
    }
  }
</script>
