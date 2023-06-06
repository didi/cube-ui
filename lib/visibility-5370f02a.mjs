const e = "update:visible", t = {
  props: {
    visible: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      // If use the prop visible directly, the toggle will failed when user haven't set v-model as a reactive property.
      // So we use the data isVisible instead.
      isVisible: !1
    };
  },
  emits: [e],
  watch: {
    isVisible(i) {
      this.$emit(e, i);
    }
  },
  mounted() {
    this.$watch("visible", (i, s) => {
      i ? this.show() : s && !this._createAPI_reuse && this.hide();
    }, {
      immediate: !0
    });
  },
  methods: {
    show() {
      this.isVisible = !0;
    },
    hide() {
      this.isVisible = !1;
    }
  }
};
export {
  t as v
};
