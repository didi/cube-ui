const EVENT_CHANGE = 'change'

export default {
  emits: [EVENT_CHANGE],
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
