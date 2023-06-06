import { openBlock as i, createElementBlock as a, normalizeClass as p, renderSlot as l, createElementVNode as _, resolveComponent as k, Fragment as b, renderList as f, createBlock as V } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-dad06003.mjs";
const x = "cube-checker-item", C = {
  name: x,
  props: {
    option: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    isActive() {
      const e = this.$parent.isRadio, c = this.$parent.currentValue, t = this.option.value;
      return e ? c === t : c.indexOf(t) >= 0;
    },
    isDisabled() {
      return this.option.disabled;
    }
  },
  methods: {
    clickHandler() {
      this.isDisabled || this.$parent.check(this.option);
    }
  }
}, v = ["innerHTML"];
function y(e, c, t, s, o, n) {
  return i(), a("li", {
    class: p(["cube-checker-item", { "cube-checker-item_active": n.isActive, "cube-checker-item_disabled": n.isDisabled }]),
    onClick: c[0] || (c[0] = (...r) => n.clickHandler && n.clickHandler(...r))
  }, [
    l(e.$slots, "default", {}, () => [
      _("span", {
        innerHTML: t.option.text
      }, null, 8, v)
    ])
  ], 2);
}
const N = /* @__PURE__ */ d(C, [["render", y]]), $ = "cube-checker", u = "update:modelValue", E = {
  name: $,
  emits: [u],
  props: {
    modelValue: [String, Number, Array],
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    type: {
      type: String,
      default: "checkbox"
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default(e) {
        return e.options.length;
      }
    }
  },
  data() {
    return {
      currentValue: this.modelValue
    };
  },
  computed: {
    isRadio() {
      return this.type === "radio";
    }
  },
  watch: {
    modelValue(e) {
      this.currentValue = e;
    },
    currentValue(e) {
      this.$emit(u, e);
    }
  },
  methods: {
    check(e) {
      this.isRadio ? this.checkRadio(e) : this.checkCheckbox(e);
    },
    checkRadio(e) {
      this.currentValue = e.value;
    },
    checkCheckbox(e) {
      const c = e.value, t = this.currentValue, s = t.length, o = this.min, n = this.max, r = t.indexOf(c);
      r > -1 ? s > o && t.splice(r, 1) : s < n && t.push(c);
    }
  },
  components: {
    CubeCheckerItem: N
  }
}, O = { class: "cube-checker" };
function g(e, c, t, s, o, n) {
  const r = k("cube-checker-item");
  return i(), a("ul", O, [
    l(e.$slots, "default", {}, () => [
      (i(!0), a(b, null, f(t.options, (h, m) => (i(), V(r, {
        option: h,
        key: m
      }, null, 8, ["option"]))), 128))
    ])
  ]);
}
const R = /* @__PURE__ */ d(E, [["render", g]]);
export {
  R as C,
  N as a
};
