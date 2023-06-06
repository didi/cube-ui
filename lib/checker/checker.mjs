import "./css.mjs";
import { openBlock as i, createElementBlock as l, normalizeClass as k, renderSlot as h, createElementVNode as f, resolveComponent as b, Fragment as v, renderList as V, createBlock as x } from "vue";
const m = (e, c) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of c)
    t[r] = o;
  return t;
}, y = "cube-checker-item", N = {
  name: y,
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
}, $ = ["innerHTML"];
function C(e, c, t, r, o, n) {
  return i(), l("li", {
    class: k(["cube-checker-item", { "cube-checker-item_active": n.isActive, "cube-checker-item_disabled": n.isDisabled }]),
    onClick: c[0] || (c[0] = (...s) => n.clickHandler && n.clickHandler(...s))
  }, [
    h(e.$slots, "default", {}, () => [
      f("span", {
        innerHTML: t.option.text
      }, null, 8, $)
    ])
  ], 2);
}
const u = /* @__PURE__ */ m(N, [["render", C]]), E = "cube-checker", d = "update:modelValue", O = {
  name: E,
  emits: [d],
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
      this.$emit(d, e);
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
      const c = e.value, t = this.currentValue, r = t.length, o = this.min, n = this.max, s = t.indexOf(c);
      s > -1 ? r > o && t.splice(s, 1) : r < n && t.push(c);
    }
  },
  components: {
    CubeCheckerItem: u
  }
}, g = { class: "cube-checker" };
function A(e, c, t, r, o, n) {
  const s = b("cube-checker-item");
  return i(), l("ul", g, [
    h(e.$slots, "default", {}, () => [
      (i(!0), l(v, null, V(t.options, (p, _) => (i(), x(s, {
        option: p,
        key: _
      }, null, 8, ["option"]))), 128))
    ])
  ]);
}
const a = /* @__PURE__ */ m(O, [["render", A]]);
a.install = function(e) {
  e.component(a.name, a), e.component(u.name, u);
};
a.Item = u;
export {
  a as default
};
