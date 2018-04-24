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
      isVisible: false
    }
  },
  watch: {
    isVisible(newVal) {
      this.$emit(EVENT_TOGGLE, newVal)
    }
  },
  mounted() {
    console.log(this.isVisible)
    this.$watch('visible', (newVal) => {
      console.log('visible', newVal)
      newVal ? this.show() : this.hide()
    }, {
      immediate: true
    })
  },
  methods: {
    show() {
      this.isVisible = true
      console.log('show')
    },
    hide() {
      this.isVisible = false
    }
  }
}
