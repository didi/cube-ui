import "./css.mjs";
import { openBlock as n, createElementBlock as r, normalizeClass as c, renderSlot as h, createCommentVNode as u, withDirectives as E, createElementVNode as d, mergeProps as g, vModelDynamic as C } from "vue";
const m = "change", _ = {
  emits: [m],
  methods: {
    changeHandler(e) {
      this.$emit(m, e);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    }
  }
};
const v = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [p, i] of t)
    a[p] = i;
  return a;
}, V = "cube-input", f = "update:modelValue", y = "blur", b = "focus", w = {
  name: V,
  mixins: [_],
  emits: [f, y, b],
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: [Boolean, String],
      default: !1
    },
    name: String,
    id: String,
    form: String,
    minlength: Number,
    maxlength: Number,
    resize: String,
    min: Number,
    max: Number,
    step: Number,
    tabindex: String,
    pattern: String,
    clearable: {
      type: [Boolean, Object],
      default: !1
    },
    eye: {
      type: [Boolean, Object],
      default: !1
    }
  },
  data() {
    return {
      inputValue: this.modelValue,
      isFocus: !1,
      formatedClearable: {
        visible: !1,
        blurHidden: !0
      },
      formatedEye: {
        open: !1,
        reverse: !1
      }
    };
  },
  computed: {
    _type() {
      const e = this.type;
      return e === "password" && this.eye && this.pwdVisible ? "text" : e;
    },
    _showClear() {
      let e = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled;
      return this.formatedClearable.blurHidden && !this.isFocus && (e = !1), e;
    },
    _showPwdEye() {
      return this.type === "password" && this.eye && !this.disabled;
    },
    pwdVisible() {
      const e = this.formatedEye;
      return e.reverse ? !e.open : e.open;
    },
    eyeClass() {
      return this.formatedEye.open ? "cubeic-eye-visible" : "cubeic-eye-invisible";
    }
  },
  watch: {
    modelValue(e) {
      this.inputValue = e;
    },
    inputValue(e) {
      this.$emit(f, e);
    },
    clearable: {
      handler() {
        this.formatClearable();
      },
      deep: !0,
      immediate: !0
    },
    eye: {
      handler() {
        this.formateEye();
      },
      deep: !0,
      immediate: !0
    }
  },
  methods: {
    formatClearable() {
      typeof this.clearable == "boolean" ? this.formatedClearable.visible = this.clearable : Object.assign(this.formatedClearable, this.clearable);
    },
    formateEye() {
      typeof this.eye == "boolean" ? this.formatedEye.open = this.eye : Object.assign(this.formatedEye, this.eye);
    },
    handleFocus(e) {
      this.$emit(b, e), this.isFocus = !0;
    },
    handleBlur(e) {
      this.$emit(y, e), this.isFocus = !1;
    },
    handleClear(e) {
      this.inputValue = "", this.$refs.input.focus();
    },
    handlePwdEye() {
      this.formatedEye.open = !this.formatedEye.open;
    }
  }
}, N = {
  key: 0,
  class: "cube-input-prepend"
}, B = ["type", "disabled", "readonly", "autocomplete", "autofocus"], S = {
  key: 1,
  class: "cube-input-append"
}, F = /* @__PURE__ */ d("i", { class: "cubeic-wrong" }, null, -1), P = [
  F
];
function k(e, t, a, p, i, l) {
  return n(), r("div", {
    class: c(["cube-input", { "cube-input_active": i.isFocus }])
  }, [
    e.$slots.prepend ? (n(), r("div", N, [
      h(e.$slots, "prepend")
    ])) : u("", !0),
    E(d("input", g({
      class: "cube-input-field",
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = (s) => i.inputValue = s)
    }, e.$props, {
      type: l._type,
      disabled: a.disabled,
      readonly: a.readonly,
      autocomplete: a.autocomplete,
      autofocus: a.autofocus,
      onFocus: t[1] || (t[1] = (...s) => l.handleFocus && l.handleFocus(...s)),
      onBlur: t[2] || (t[2] = (...s) => l.handleBlur && l.handleBlur(...s)),
      onChange: t[3] || (t[3] = (...s) => e.changeHandler && e.changeHandler(...s))
    }), null, 16, B), [
      [C, i.inputValue]
    ]),
    e.$slots.append || l._showClear || l._showPwdEye ? (n(), r("div", S, [
      l._showClear ? (n(), r("div", {
        key: 0,
        class: "cube-input-clear",
        onTouchend: t[4] || (t[4] = (...s) => l.handleClear && l.handleClear(...s))
      }, P, 32)) : u("", !0),
      l._showPwdEye ? (n(), r("div", {
        key: 1,
        class: "cube-input-eye",
        onClick: t[5] || (t[5] = (...s) => l.handlePwdEye && l.handlePwdEye(...s))
      }, [
        d("i", {
          class: c(l.eyeClass)
        }, null, 2)
      ])) : u("", !0),
      h(e.$slots, "append")
    ])) : u("", !0)
  ], 2);
}
const o = /* @__PURE__ */ v(w, [["render", k]]);
o.install = function(e) {
  e.component(o.name, o);
};
export {
  o as default
};
