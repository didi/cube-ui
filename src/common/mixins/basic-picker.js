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
