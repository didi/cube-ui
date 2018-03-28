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

  const UNIT_LIST = ['year', 'month', 'date', 'hour', 'minute', 'second']
  const UNIT_RELATED_LIST = [
    {
      txt: '年',
      polyfill: false
    }, {
      txt: '月',
      natureMin: 1,
      natureMax: 12,
      polyfill: false
    }, {
      txt: '日',
      natureMin: 1,
      polyfill: false
    }, {
      txt: '时',
      natureMin: 0,
      natureMax: 59,
      polyfill: false
    }, {
      txt: '分',
      natureMin: 0,
      natureMax: 59,
      polyfill: true
    }, {
      txt: '秒',
      natureMin: 0,
      natureMax: 59,
      polyfill: true
    }]

  export default {
    name: COMPONENT_NAME,
    props: {
      min: {
        type: Date,
        default() {
          return new Date(2010, 1, 1)
        }
      },
      max: {
        type: Date,
        default() {
          return new Date(2020, 12, 31)
        }
      },
      beginUnit: {
        type: String,
        default() {
          return 'year'
        }
      },
      columnNumber: {
        type: Number,
        default: 3
      },
      value: {
        type: Date,
        default() {
          return this.min
        }
      }
    },
    computed: {
      data() {
        let i = UNIT_LIST.indexOf(this.beginUnit)
        i = i < 0 ? 0 : i
        let count = 0
        let data = []
        let pointer

        while (i < 6 && count < this.columnNumber) {
          if (!count) {
            let min = Math.max(this.min[0], UNIT_RELATED_LIST[i].natureMin)
            let max 
            data = range(this.min[0], this.max[0], UNIT_RELATED_LIST[i].polyfill, UNIT_RELATED_LIST[i].txt, true, true)
            pointer = data
          } else {
            pointer.forEach(item => {
              let min = item.isMin ? this.min[count] : UNIT_RELATED_LIST[i].natureMin

              let natureMin = i === 2 ? this._computeNatrueMaxDay() : UNIT_RELATED_LIST[i].natureMax
            })
            let min = minMonth = year.value === this.min[0] ? this.min[1] : 1
          }
          data = range(this.min[0], this.max[0], false, '年')
        }

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
        const selectedVal = [this.value.getFullYear(), this.value.getMonth() + 1, this.value.getDate()]
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
      },
      _computeNatrueMaxDay(month, year) {
        if (!month) {
          return 31
        }

        let natureMaxDay = 30
        if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) > -1) {
          natureMaxDay = 31
        } else {
          if (month === 2) {
            natureMaxDay = !year || (!(year % 400) || (!(year % 4) && year % 100)) ? 29 : 28
          }
        }

        return natureMaxDay
      }
    }
  }

  function range(n, m, polyfill = false, unit = '', fatherIsMin, fatherIsMax, fatherVal) {
    let arr = []
    for (let i = n; i <= m; i++) {
      const value = (polyfill && i < 10 ? '0' + i : i) + unit
      const object = {
        text: value,
        value: i
      }

      if (fatherIsMin && i === n) object.isMin = true
      if (fatherIsMax && i === m) object.isMax = true

      arr.push(object)
    }
    return arr
  }
</script>
