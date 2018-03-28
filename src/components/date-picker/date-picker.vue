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
      natureMax: 31,
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
    }
  ]

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
      beginIndex() {
        let beginIndex = UNIT_LIST.indexOf(this.beginUnit)
        return beginIndex < 0 ? 0 : beginIndex
      },
      minArray() {
        return dateToArray(this.min).slice(this.beginIndex, this.beginIndex + this.columnNumber)
      },
      maxArray() {
        return dateToArray(this.max).slice(this.beginIndex, this.beginIndex + this.columnNumber)
      },
      data() {
        let data = []
        this._generateData(this.beginIndex, 0, data)

        return data
      },
      selectedIndex() {
        const selectedVal = [this.value.getFullYear(), this.value.getMonth() + 1, this.value.getDate()]
        let selectedIndex = []
        let data = this.data
        let findIndex

        for (let i = 0; i < this.columnNumber; i++) {
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
      _generateData(i, count, item) {
        if (count === 0) {
          let min = i === 0 ? this.minArray[0] : Math.max(this.minArray[0], UNIT_RELATED_LIST[i].natureMin)
          let max = i === 0 ? this.maxArray[0] : Math.min(this.maxArray[0], UNIT_RELATED_LIST[i].natureMax)
          item.push(...range(min, max, UNIT_RELATED_LIST[i].polyfill, UNIT_RELATED_LIST[i].txt, true, true))
        } else {
          let natureMax = i === 2 ? computeNatrueMaxDay(item.year, item.value) : UNIT_RELATED_LIST[i].natureMax
          let min = item.isMin ? Math.max(this.minArray[count], UNIT_RELATED_LIST[i].natureMin) : UNIT_RELATED_LIST[i].natureMin
          let max = item.isMax ? Math.min(this.maxArray[count], natureMax) : natureMax

          let storageYear = i === 1 && this.beginIndex === 0 && this.columnNumber >= 3 && item.value
          item.children = range(min, max, UNIT_RELATED_LIST[i].polyfill, UNIT_RELATED_LIST[i].txt, item.isMin, item.isMax, storageYear)
        }
        if (i < 5 && count < this.columnNumber - 1) {
          (item.children || item).forEach(subItem => {
            this._generateData(i + 1, count + 1, subItem)
          })
        }
      },
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

  function range(n, m, polyfill = false, unit = '', fatherIsMin, fatherIsMax, year) {
    let arr = []
    for (let i = n; i <= m; i++) {
      const value = (polyfill && i < 10 ? '0' + i : i) + unit
      const object = {
        text: value,
        value: i
      }

      if (fatherIsMin && i === n) object.isMin = true
      if (fatherIsMax && i === m) object.isMax = true
      if (year) object.year = true

      arr.push(object)
    }
    return arr
  }

  function computeNatrueMaxDay(month, year) {
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

  function dateToArray(date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
  }
</script>
