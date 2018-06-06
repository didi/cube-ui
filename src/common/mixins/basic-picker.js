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
    alias: {
      type: Object,
      default() {
        return {}
      }
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    valueKey() {
      return this.alias.value || DEFAULT_KEYS.value
    },
    textKey() {
      return this.alias.text || DEFAULT_KEYS.text
    },
    merge() {
      return [this.data, this.selectedIndex]
    }
  },
  watch: {
    // Merge the watch handlers of data and selectedIndex into one.
    merge(newVal) {
      this.setData(newVal[0], newVal[1])
    }
  }
}
