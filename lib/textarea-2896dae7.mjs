import { i as d } from "./input-97db147c.mjs";
import { openBlock as i, createElementBlock as o, normalizeClass as c, withDirectives as s, createElementVNode as m, mergeProps as h, vModelText as f, toDisplayString as x, vShow as p, createCommentVNode as g } from "vue";
import { _ as b } from "./_plugin-vue_export-helper-dad06003.mjs";
const V = "cube-textarea", u = "update:modelValue", y = {
  negative: !0,
  remain: !0
}, B = {
  name: V,
  mixins: [d],
  data() {
    return {
      textareaValue: this.modelValue,
      expanded: this.autoExpand ? !!this.modelValue : !1,
      isFocus: !1
    };
  },
  emits: [u, "focus", "blur", "change"],
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
      return typeof e == "boolean" && (e = {}), Object.assign({}, y, e);
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
      this.$emit(u, e), !this.isFocus && this.expanded && (this.expanded = !1);
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
}, _ = ["placeholder", "maxlength", "disabled"];
function N(e, t, l, F, r, a) {
  return i(), o("div", {
    class: c(["cube-textarea-wrapper", { "cube-textarea_expanded": r.expanded, "cube-textarea_active": r.isFocus }])
  }, [
    s(m("textarea", h({
      ref: "input",
      class: "cube-textarea",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => r.textareaValue = n)
    }, e.$props, {
      placeholder: l.placeholder,
      maxlength: l.maxlength,
      disabled: l.disabled,
      onFocus: t[1] || (t[1] = (...n) => a.handleFocus && a.handleFocus(...n)),
      onBlur: t[2] || (t[2] = (...n) => a.handleBlur && a.handleBlur(...n)),
      onChange: t[3] || (t[3] = (...n) => e.changeHandler && e.changeHandler(...n))
    }), `
    `, 16, _), [
      [f, r.textareaValue]
    ]),
    l.indicator ? s((i(), o("span", {
      key: 0,
      class: "cube-textarea-indicator"
    }, x(a.indicatorConf.remain ? a.remain : a.count), 513)), [
      [p, r.expanded]
    ]) : g("", !0)
  ], 2);
}
const S = /* @__PURE__ */ b(B, [["render", N]]);
export {
  S as T
};
