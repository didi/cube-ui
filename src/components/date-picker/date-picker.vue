<template>
  <cube-cascade-picker
    v-model="isVisible"
    :data="data"
    :selected-index="selectedIndex"
    :title="title"
    :subtitle="subtitle"
    :cancel-txt="_cancelTxt"
    :confirm-txt="_confirmTxt"
    :swipe-time="swipeTime"
    :z-index="zIndex"
    :mask-closable="maskClosable"
    @select="_select"
    @cancel="_cancel"
    @change="_change">
  </cube-cascade-picker>
</template>

<script>
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import pickerMixin from '../../common/mixins/picker'
  import localeMixin from '../../common/mixins/locale'
  import { deepAssign, findIndex } from '../../common/helpers/util'
  import { computeNatureMaxDay, formatType } from '../../common/lang/date'

  const COMPONENT_NAME = 'cube-date-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  const TYPE_LIST = ['year', 'month', 'date', 'hour', 'minute', 'second']
  const NATURE_BOUNDARY_MAP = {
    month: {
      natureMin: 1,
      natureMax: 12
    },
    date: {
      natureMin: 1,
      natureMax: 31
    },
    hour: {
      natureMin: 0,
      natureMax: 23
    },
    minute: {
      natureMin: 0,
      natureMax: 59
    },
    second: {
      natureMin: 0,
      natureMax: 59
    }
  }

  const DEFAULT_FORMAT = {
    year: 'YYYY',
    month: 'M',
    date: 'D',
    hour: 'hh',
    minute: 'mm',
    second: 'ss'
  }

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, pickerMixin, localeMixin],
    props: {
      min: {
        type: [Date, Array],
        default() {
          return new Date(2010, 0, 1)
        }
      },
      max: {
        type: [Date, Array],
        default() {
          return new Date(2020, 11, 31)
        }
      },
      startColumn: {
        type: String,
        default() {
          return 'year'
        }
      },
      columnCount: {
        type: Number,
        default: 3
      },
      format: {
        type: Object,
        default() {
          return {}
        }
      },
      value: {
        type: [Date, Array],
        default() {
          return this.min
        }
      },
      columnOrder: {
        type: Array,
        default() {
          return ['year', 'month', 'date', 'hour', 'minute', 'second']
        }
      }
    },
    computed: {
      formatConfig() {
        const formatConfig = Object.assign({}, DEFAULT_FORMAT)
        deepAssign(formatConfig, this.format)

        return formatConfig
      },
      natureRangeCache() {
        const natureRangeCache = {
          hour: [],
          minute: [],
          second: []
        }

        Object.keys(natureRangeCache).forEach((key) => {
          natureRangeCache[key] = this._range(key, NATURE_BOUNDARY_MAP[key].natureMin, NATURE_BOUNDARY_MAP[key].natureMax)
        })

        return natureRangeCache
      },
      startIndex() {
        const startIndex = TYPE_LIST.indexOf(this.startColumn)
        return startIndex < 0 ? 0 : startIndex
      },
      minArray() {
        return this.min instanceof Date
          ? dateToArray(this.min).slice(this.startIndex, this.startIndex + this.columnCount)
          : this.min
      },
      maxArray() {
        return this.max instanceof Date
          ? dateToArray(this.max).slice(this.startIndex, this.startIndex + this.columnCount)
          : this.max
      },
      valueArray() {
        return this.value instanceof Date
          ? dateToArray(this.value).slice(this.startIndex, this.startIndex + this.columnCount)
          : this.value
      },
      data() {
        const data = []
        this._generateData(this.startIndex, 0, data)
        return data
      },
      selectedIndex() {
        const selectedIndex = []
        let data = this.data
        let index

        for (let i = 0; i < this.columnCount && i < 6 - this.startIndex; i++) {
          index = findIndex(data, (item) => {
            return this.valueArray[i] && item.value === this.valueArray[i]
          })
          selectedIndex[i] = index !== -1 ? index : 0
          data = data[selectedIndex[i]] && data[selectedIndex[i]].children
        }

        return selectedIndex
      }
    },
    methods: {
      _select(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, this._arrayToDate(selectedVal), selectedVal, selectedText)
      },
      _cancel() {
        this.$emit(EVENT_CANCEL)
      },
      _change(i, newIndex) {
        this.$emit(EVENT_CHANGE, i, newIndex)
      },
      _generateData(i, count, item) {
        if (count === 0) {
          const min = i === 0 ? this.minArray[0] : Math.max(this.minArray[0], NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMin)
          const max = i === 0 ? this.maxArray[0] : Math.min(this.maxArray[0], NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMax)
          item.push.apply(item, this._range(TYPE_LIST[i], min, max, true, true))
        } else {
          if (i < 3 || item.isMin || item.isMax) {
            const natureMax = i === 2 ? computeNatureMaxDay(item.value, item.year) : NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMax
            const min = item.isMin ? Math.max(this.minArray[count], NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMin) : NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMin
            const max = item.isMax ? Math.min(this.maxArray[count], natureMax) : natureMax

            const storageYear = i === 1 && this.startIndex === 0 && this.columnCount >= 3 && item.value
            item.children = this._range(TYPE_LIST[i], min, max, item.isMin, item.isMax, storageYear)
          } else {
            item.children = this.natureRangeCache[TYPE_LIST[i]]
          }
        }
        if (count < this.columnCount - 1 && i < 5) {
          (item.children || item).forEach(subItem => {
            (!subItem.children || subItem.isMin || subItem.isMax) && this._generateData(i + 1, count + 1, subItem)
          })
        }
      },
      _arrayToDate(selectedVal) {
        const args = []
        const defaultDateArray = dateToArray(new Date(0))

        for (let i = 0; i < 6; i++) {
          if (i < this.startIndex) {
            args[i] = defaultDateArray[i]
          } else if (i >= this.startIndex + this.columnCount) {
            args[i] = NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMin
          } else {
            args[i] = selectedVal[i - this.startIndex]
          }
        }
        // Month need to subtract 1.
        args[1]--

        return new Date(...args)
      },
      _range(type, min, max, fatherIsMin, fatherIsMax, year = 0) {
        if (!this._rangeCache) {
          this._rangeCache = {}
        }
        const k = type + year + min + max + fatherIsMin + fatherIsMax
        if (this._rangeCache[k]) {
          return this._rangeCache[k]
        }
        const arr = []
        const format = this.formatConfig[type]
        for (let i = min; i <= max; i++) {
          const object = {
            text: formatType(type, format, i, 'i'),
            value: i,
            order: this.columnOrder.indexOf(type)
          }

          if (fatherIsMin && i === min) object.isMin = true
          if (fatherIsMax && i === max) object.isMax = true
          if (year) object.year = year

          arr.push(object)
        }
        this._rangeCache[k] = arr
        return arr
      }
    }
  }

  function dateToArray(date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
  }
</script>
