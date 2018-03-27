<template>
  <cube-cascade-picker
    ref="cascadePicker"
    title="Date Picker"
    :data="data"
    :selectedIndex="selectedIndex"
    @select="_select"
    @cancel="_cancel"
    @change="_change"
    @value-change="_valueChange">
  </cube-cascade-picker>
</template>

<script>
  const COMPONENT_NAME = 'date-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'
  const EVENT_VALUE_CHANGE = 'value-change'

  export default {
    name: COMPONENT_NAME,
    props: {
      min: {
        type: Array,
        default() {
          return [2010, 1, 1]
        }
      },
      max: {
        type: Array,
        default() {
          return [2020, 12, 31]
        }
      },
      value: {
        type: [Array, Date],
        default() {
          return this.min
        }
      }
    },
    computed: {
      data() {
        let data = range(this.min[0], this.max[0], false, '年')

        data.forEach(year => {
          let minMonth = year.value === this.min[0] ? this.min[1] : 1
          let maxMonth = year.value === this.max[0] ? this.max[1] : 12

          year.children = range(minMonth, maxMonth, false, '月')
          year.children.forEach(month => {
            let day = 30
            if ([1, 3, 5, 7, 8, 10, 12].indexOf(month.value) > -1) {
              day = 31
            } else {
              if (month.value === 2) {
                day = !(year.value % 400) || (!(year.value % 4) && year.value % 100) ? 29 : 28
              }
            }

            let minDay = year.value === this.min[0] && month.value === this.min[1] ? this.min[2] : 1
            let maxDay = year.value === this.max[0] && month.value === this.max[1] ? this.max[2] : day

            month.children = range(minDay, maxDay, false, '日')
          })
        })

        return data
      },
      selectedIndex() {
        const selectedVal = this.value instanceof Date
                            ? [this.value.getFullYear(), this.value.getMonth() + 1, this.value.getDate()]
                            : this.value
        let selectedIndex = []
        let data = this.data
        let findIndex

        for (let i = 0; i < 3; i++) {
          findIndex = data.findIndex((item) => {
            return selectedVal[i] && item.value === selectedVal[i]
          })
          selectedIndex[i] = findIndex !== -1 ? findIndex : 0
          data = data[selectedIndex[i]].children
        }

        return selectedIndex
      }
    },
    methods: {
      show() {
        this.$refs.cascadePicker.show()
      },
      hide() {
        this.$refs.cascadePicker.hide()
      },
      _select(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
      },
      _cancel() {
        this.$emit(EVENT_CANCEL)
      },
      _change(i, newIndex) {
        this.$emit(EVENT_CHANGE, i, newIndex)
      },
      _valueChange(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_VALUE_CHANGE, selectedVal, selectedIndex, selectedText)
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
