import { i as y } from "./input-97db147c.mjs";
import { openBlock as s, createElementBlock as i, normalizeClass as d, renderSlot as p, createCommentVNode as n, withDirectives as c, createElementVNode as o, mergeProps as b, vModelDynamic as E } from "vue";
import { _ as C } from "./_plugin-vue_export-helper-dad06003.mjs";
const g = "cube-input", m = "update:modelValue", h = "blur", f = "focus", _ = {
  name: g,
  mixins: [y],
  emits: [m, h, f],
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
      this.$emit(m, e);
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
      this.$emit(f, e), this.isFocus = !0;
    },
    handleBlur(e) {
      this.$emit(h, e), this.isFocus = !1;
    },
    handleClear(e) {
      this.inputValue = "", this.$refs.input.focus();
    },
    handlePwdEye() {
      this.formatedEye.open = !this.formatedEye.open;
    }
  }
}, w = {
  key: 0,
  class: "cube-input-prepend"
}, V = ["type", "disabled", "readonly", "autocomplete", "autofocus"], v = {
  key: 1,
  class: "cube-input-append"
}, N = /* @__PURE__ */ o("i", { class: "cubeic-wrong" }, null, -1), B = [
  N
];
function S(e, l, r, F, u, t) {
  return s(), i("div", {
    class: d(["cube-input", { "cube-input_active": u.isFocus }])
  }, [
    e.$slots.prepend ? (s(), i("div", w, [
      p(e.$slots, "prepend")
    ])) : n("", !0),
    c(o("input", b({
      class: "cube-input-field",
      ref: "input",
      "onUpdate:modelValue": l[0] || (l[0] = (a) => u.inputValue = a)
    }, e.$props, {
      type: t._type,
      disabled: r.disabled,
      readonly: r.readonly,
      autocomplete: r.autocomplete,
      autofocus: r.autofocus,
      onFocus: l[1] || (l[1] = (...a) => t.handleFocus && t.handleFocus(...a)),
      onBlur: l[2] || (l[2] = (...a) => t.handleBlur && t.handleBlur(...a)),
      onChange: l[3] || (l[3] = (...a) => e.changeHandler && e.changeHandler(...a))
    }), null, 16, V), [
      [E, u.inputValue]
    ]),
    e.$slots.append || t._showClear || t._showPwdEye ? (s(), i("div", v, [
      t._showClear ? (s(), i("div", {
        key: 0,
        class: "cube-input-clear",
        onTouchend: l[4] || (l[4] = (...a) => t.handleClear && t.handleClear(...a))
      }, B, 32)) : n("", !0),
      t._showPwdEye ? (s(), i("div", {
        key: 1,
        class: "cube-input-eye",
        onClick: l[5] || (l[5] = (...a) => t.handlePwdEye && t.handlePwdEye(...a))
      }, [
        o("i", {
          class: d(t.eyeClass)
        }, null, 2)
      ])) : n("", !0),
      p(e.$slots, "append")
    ])) : n("", !0)
  ], 2);
}
const T = /* @__PURE__ */ C(_, [["render", S]]);
export {
  T as I
};
