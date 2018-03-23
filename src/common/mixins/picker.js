const DEFAULT_KEYS = {
  value: 'value',
  text: 'text'
}

export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    selectedIndex: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String
    },
    cancelTxt: {
      type: String,
      default: '取消'
    },
    confirmTxt: {
      type: String,
      default: '确定'
    },
    swipeTime: {
      type: Number,
      default: 2500
    },
    alias: {
      type: Object,
      default() {
        return {}
      }
    },
    zIndex: {
      type: Number
    }
  },
  computed: {
    valueKey() {
      return this.alias.value || DEFAULT_KEYS.value
    },
    textKey() {
      return this.alias.text || DEFAULT_KEYS.text
    }
  },
  watch: {
    data(newVal) {
      this.setData(newVal, this.selectedIndex)
    },
    selectedIndex(newVal) {
      this.setData(this.data, newVal)
    }
  }
}
