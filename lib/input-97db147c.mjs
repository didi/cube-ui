const s = "change", i = {
  emits: [s],
  methods: {
    changeHandler(t) {
      this.$emit(s, t);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    }
  }
};
export {
  i
};
