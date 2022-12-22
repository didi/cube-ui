const EVENT_CHANGE = 'change'

export default {
  methods: {
    changeHandler(e) {
      this.$emit(EVENT_CHANGE, e)
    },
    focus() {
      this.$refs.input.focus()
    },
    blur() {
      this.$refs.input.blur()
    }
  }
}
