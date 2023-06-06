import { openBlock as i, createElementBlock as n, withDirectives as u, createElementVNode as t, vModelCheckbox as d, renderSlot as _ } from "vue";
import { _ as h } from "./_plugin-vue_export-helper-dad06003.mjs";
const r = "cube-switch", c = "update:modelValue", p = {
  name: r,
  emits: [c],
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
      this.$emit(c, e);
    }
  }
}, b = { class: "cube-switch" }, m = ["disabled"], V = /* @__PURE__ */ t("i", { class: "cube-switch-ui" }, null, -1), f = { class: "cube-switch-label" };
function x(e, s, l, k, o, w) {
  return i(), n("div", b, [
    u(t("input", {
      class: "cube-switch-input",
      type: "checkbox",
      "onUpdate:modelValue": s[0] || (s[0] = (a) => o.checkboxValue = a),
      disabled: l.disabled
    }, null, 8, m), [
      [d, o.checkboxValue]
    ]),
    V,
    t("span", f, [
      _(e.$slots, "default")
    ])
  ]);
}
const v = /* @__PURE__ */ h(p, [["render", x]]);
export {
  v as S
};
