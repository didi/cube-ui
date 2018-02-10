<template>
  <cube-cascade-picker
    ref="cascadePicker"
    title="Date Picker"
    :data="data"
    :selectedIndex="selectedIndex"
    @select="select"
    @cancel="cancel">
  </cube-cascade-picker>
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
      }
    },
    methods: {
      show() {
        this.$refs.cascadePicker.show()
      },
      hide() {
        this.$refs.cascadePicker.hide()
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
