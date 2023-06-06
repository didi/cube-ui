import "./css.mjs";
import { openBlock as d, createElementBlock as o, normalizeClass as m, renderSlot as h, createElementVNode as _, resolveComponent as E, Fragment as N, renderList as w, createBlock as x, createCommentVNode as k } from "vue";
const S = typeof window < "u", b = S && navigator.userAgent.toLowerCase();
b && b.indexOf("android") > 0;
let f = (() => {
  if (!S)
    return !1;
  let e = document.createElement("div").style, t = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (let n in t)
    if (e[t[n]] !== void 0)
      return n;
  return !1;
})();
function g(e) {
  return f === !1 ? !1 : f === "standard" ? e === "transitionEnd" ? "transitionend" : e : f + e.charAt(0).toUpperCase() + e.substr(1);
}
function C(e, t) {
  if (e.findIndex)
    return e.findIndex(t);
  let n = -1;
  return e.some(function(a, r, i) {
    const s = t.call(this, a, r, i);
    if (s)
      return n = r, s;
  }), n;
}
const $ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, V = "cube-tab", z = {
  name: V,
  props: {
    label: {
      type: [String, Number],
      required: !0
    },
    modelValue: {
      type: [String, Number],
      default(e) {
        return e.label;
      }
    },
    icon: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$parent.addTab(this);
  },
  destroyed() {
    this.$parent.removeTab(this);
  },
  computed: {
    isActive() {
      return this.$parent.modelValue === this.modelValue;
    }
  },
  methods: {
    handleClick(e) {
      this.$parent.trigger(this.modelValue);
    }
  }
}, O = ["innerHTML"];
function A(e, t, n, a, r, i) {
  return d(), o("div", {
    class: m(["cube-tab", { "cube-tab_active": i.isActive }]),
    onClick: t[0] || (t[0] = (...s) => i.handleClick && i.handleClick(...s))
  }, [
    h(e.$slots, "icon", {}, () => [
      _("i", {
        class: m(n.icon)
      }, null, 2)
    ]),
    h(e.$slots, "default", {}, () => [
      _("div", { innerHTML: n.label }, null, 8, O)
    ])
  ], 2);
}
const c = /* @__PURE__ */ $(z, [["render", A]]);
const L = "cube-tab-bar", p = "update:modelValue", T = "change", v = "click", y = g("transform"), B = g("transition"), I = {
  name: L,
  components: {
    CubeTab: c
  },
  emits: [p, T, v],
  props: {
    modelValue: {
      type: [String, Number],
      required: !0
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    inline: {
      type: Boolean,
      default: !1
    },
    showSlider: {
      type: Boolean,
      default: !1
    },
    useTransition: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    modelValue() {
      this._updateSliderStyle();
    }
  },
  created() {
    this.tabs = [];
  },
  mounted() {
    this._updateSliderStyle(), window.addEventListener("resize", this._resizeHandler);
  },
  activated() {
    window.addEventListener("resize", this._resizeHandler);
  },
  deactivated() {
    this._cleanUp();
  },
  beforeUnmount() {
    this._cleanUp();
  },
  methods: {
    addTab(e) {
      this.tabs.push(e);
    },
    removeTab(e) {
      const t = this.tabs.indexOf(e);
      t > -1 && this.tabs.splice(t, 1);
    },
    trigger(e) {
      this.$emit(v, e), e !== this.modelValue && [p, T].forEach((n) => {
        this.$emit(n, e);
      });
    },
    _updateSliderStyle() {
      if (!this.showSlider)
        return;
      const e = this.$refs.slider;
      this.$nextTick(() => {
        const { width: t, index: n } = this._getSliderWidthAndIndex();
        e.style.width = `${t}px`, this.setSliderTransform(this._getOffsetLeft(n));
      });
    },
    setSliderTransform(e) {
      const t = this.$refs.slider;
      typeof e == "number" && (e = `${e}px`), t && (this.useTransition && (t.style[B] = `${y} 0.2s linear`), t.style[y] = `translateX(${e}) translateZ(0)`);
    },
    _getSliderWidthAndIndex() {
      let e = 0, t = 0;
      return this.tabs.length > 0 && (t = C(this.tabs, (n) => n.modelValue === this.modelValue), e = this.tabs[t].$el.clientWidth), {
        width: e,
        index: t
      };
    },
    _getOffsetLeft(e) {
      return this.tabs[e].$el.offsetLeft || 0;
    },
    _resizeHandler() {
      clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(() => {
        this._updateSliderStyle();
      }, 60);
    },
    _cleanUp() {
      clearTimeout(this._resizeTimer), window.removeEventListener("resize", this._resizeHandler);
    }
  }
}, M = {
  key: 0,
  ref: "slider",
  class: "cube-tab-bar-slider"
};
function H(e, t, n, a, r, i) {
  const s = E("cube-tab");
  return d(), o("div", {
    class: m(["cube-tab-bar", { "cube-tab-bar_inline": n.inline }])
  }, [
    h(e.$slots, "default", {}, () => [
      (d(!0), o(N, null, w(n.data, (l, U) => (d(), x(s, {
        label: l.label,
        "model-value": l.value,
        icon: l.icon,
        key: l.value || l.label
      }, null, 8, ["label", "model-value", "icon"]))), 128))
    ]),
    n.showSlider ? (d(), o("div", M, null, 512)) : k("", !0)
  ], 2);
}
const u = /* @__PURE__ */ $(I, [["render", H]]);
u.install = function(e) {
  e.component(u.name, u), e.component(c.name, c);
};
u.Tab = c;
export {
  u as default
};
