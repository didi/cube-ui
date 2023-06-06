import "./css.mjs";
import { openBlock as o, createElementBlock as u, normalizeClass as m, withDirectives as d, createElementVNode as f, mergeProps as p, vModelText as x, toDisplayString as g, vShow as b, createCommentVNode as V } from "vue";
const c = "change", y = {
  emits: [c],
  methods: {
    changeHandler(e) {
      this.$emit(c, e);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    }
  }
};
const _ = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [s, n] of t)
    a[s] = n;
  return a;
}, N = "cube-textarea", h = "update:modelValue", B = {
  negative: !0,
  remain: !0
}, E = {
  name: N,
  mixins: [y],
  data() {
    return {
      textareaValue: this.modelValue,
      expanded: this.autoExpand ? !!this.modelValue : !1,
      isFocus: !1
    };
  },
  emits: [h, "focus", "blur", "change"],
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    cols: Number,
    rows: Number,
    readonly: Boolean,
    wrap: String,
    required: Boolean,
    placeholder: {
      type: String,
      default: "please type here..."
    },
    dirname: String,
    form: String,
    name: String,
    autofocus: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: 60
    },
    indicator: {
      type: [Boolean, Object],
      default: !0
    },
    autoExpand: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    indicatorConf() {
      let e = this.indicator;
      return typeof e == "boolean" && (e = {}), Object.assign({}, B, e);
    },
    count() {
      return this.textareaValue.length;
    },
    remain() {
      let e = this.maxlength - this.count;
      return !this.indicatorConf.negative && e < 0 && (e = 0), e;
    }
  },
  watch: {
    modelValue(e) {
      this.textareaValue = e;
    },
    textareaValue(e) {
      this.$emit(h, e), !this.isFocus && this.expanded && (this.expanded = !1);
    }
  },
  methods: {
    handleFocus(e) {
      this.$emit("focus", e), this.expanded = !0, this.isFocus = !0;
    },
    handleBlur(e) {
      this.$emit("blur", e), this.textareaValue.length === 0 && (this.expanded = !1), this.isFocus = !1;
    }
  }
}, v = ["placeholder", "maxlength", "disabled"];
function F(e, t, a, s, n, r) {
  return o(), u("div", {
    class: m(["cube-textarea-wrapper", { "cube-textarea_expanded": n.expanded, "cube-textarea_active": n.isFocus }])
  }, [
    d(f("textarea", p({
      ref: "input",
      class: "cube-textarea",
      "onUpdate:modelValue": t[0] || (t[0] = (l) => n.textareaValue = l)
    }, e.$props, {
      placeholder: a.placeholder,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onFocus: t[1] || (t[1] = (...l) => r.handleFocus && r.handleFocus(...l)),
      onBlur: t[2] || (t[2] = (...l) => r.handleBlur && r.handleBlur(...l)),
      onChange: t[3] || (t[3] = (...l) => e.changeHandler && e.changeHandler(...l))
    }), `
    `, 16, v), [
      [x, n.textareaValue]
    ]),
    a.indicator ? d((o(), u("span", {
      key: 0,
      class: "cube-textarea-indicator"
    }, g(r.indicatorConf.remain ? r.remain : r.count), 513)), [
      [b, n.expanded]
    ]) : V("", !0)
  ], 2);
}
const i = /* @__PURE__ */ _(E, [["render", F]]);
i.install = function(e) {
  e.component(i.name, i);
};
export {
  i as default
};
