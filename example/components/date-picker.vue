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
        value: value
      })
    }
    return arr
  }
  const year = range(2010, 2020)
  const month = range(1, 12)

  const COMPONENT_NAME = 'date-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        tempIndex: [0, 0, 0]
      }
    },
    computed: {
      dateData() {
        let day = 30
        if ([0, 2, 4, 6, 7, 9, 11].includes(this.tempIndex[1])) {
          day = 31
        } else {
          if (this.tempIndex[1] === 1) {
            day = this.tempIndex[0] % 4 ? 28 : 29
          }
        }
        return [year, month, range(1, day)]
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
      select(selectedVal, selectedIndex) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex)
      },
      cancel() {
        this.$emit(EVENT_CANCEL)
      }
    }
  }
</script>
