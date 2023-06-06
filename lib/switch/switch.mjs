import "./css.mjs";
import { openBlock as u, createElementBlock as d, withDirectives as _, createElementVNode as l, vModelCheckbox as r, renderSlot as h } from "vue";
const p = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, b = "cube-switch", a = "update:modelValue", m = {
  name: b,
  emits: [a],
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      checkboxValue: this.modelValue
    };
  },
  watch: {
    modelValue(e) {
      this.checkboxValue = e;
    },
    checkboxValue(e) {
      this.$emit(a, e);
    }
  }
}, f = { class: "cube-switch" }, V = ["disabled"], k = /* @__PURE__ */ l("i", { class: "cube-switch-ui" }, null, -1), x = { class: "cube-switch-label" };
function w(e, t, o, n, s, v) {
  return u(), d("div", f, [
    _(l("input", {
      class: "cube-switch-input",
      type: "checkbox",
      "onUpdate:modelValue": t[0] || (t[0] = (i) => s.checkboxValue = i),
      disabled: o.disabled
    }, null, 8, V), [
      [r, s.checkboxValue]
    ]),
    k,
    l("span", x, [
      h(e.$slots, "default")
    ])
  ]);
}
const c = /* @__PURE__ */ p(m, [["render", w]]);
c.install = function(e) {
  e.component(c.name, c);
};
export {
  c as default
};
