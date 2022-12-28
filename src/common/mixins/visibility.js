const EVENT_TOGGLE = 'update:visible'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // If use the prop visible directly, the toggle will failed when user haven't set v-model as a reactive property.
      // So we use the data isVisible instead.
      isVisible: false
    }
  },
  emits: [EVENT_TOGGLE],
  watch: {
    isVisible(newVal) {
      this.$emit(EVENT_TOGGLE, newVal)
    }
  },
  mounted() {
    this.$watch('visible', (newVal, oldVal) => {
      if (newVal) {
        this.show()
        // todo createAPI
      } else if (oldVal && !this._createAPI_reuse) {
        this.hide()
      }
    }, {
      immediate: true
    })
  },
  methods: {
    show() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    }
  }
}
