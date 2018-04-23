const EVENT_TOGGLE = 'toggle'

export default {
  model: {
    prop: 'visible',
    event: EVENT_TOGGLE
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      // If use the prop visible directly, the toggle will failed when user haven't set v-model as a reactive property.
      // So we use the data isVisible instead.
      isVisible: undefined
    }
  },
  watch: {
    visible: {
      handler(newVal, oldVal) {
        newVal && !oldVal && this.show()
        oldVal && !newVal && this.hide()
      },
      immediate: true
    },
    isVisible(newVal) {
      this.$emit(EVENT_TOGGLE, newVal)
    }
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
