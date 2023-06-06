import "./css.mjs";
import { openBlock as l, createElementBlock as p, renderSlot as _, resolveComponent as v, createElementVNode as h, Fragment as $, renderList as x, createBlock as N, withCtx as y, createTextVNode as O, toDisplayString as g } from "vue";
const m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, P = "cube-tab-panel", T = {
  name: P,
  props: {
    label: {
      type: [String, Number],
      required: !0
    },
    value: {
      type: [String, Number],
      default(e) {
        return e.label;
      }
    }
  },
  mounted() {
    this.$parent.addPanel(this);
  },
  destroyed() {
    this.$parent.removePanel(this);
  }
}, E = { class: "cube-tab-panel" };
function k(e, t, n, r, a, c) {
  return l(), p("div", E, [
    _(e.$slots, "default")
  ]);
}
const u = /* @__PURE__ */ m(T, [["render", k]]);
function w(e, t) {
  if (e.findIndex)
    return e.findIndex(t);
  let n = -1;
  return e.some(function(r, a, c) {
    const o = t.call(this, r, a, c);
    if (o)
      return n = a, o;
  }), n;
}
const b = typeof window < "u", f = b && navigator.userAgent.toLowerCase();
f && f.indexOf("android") > 0;
let d = (() => {
  if (!b)
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
function S(e) {
  return d === !1 ? !1 : d === "standard" ? e === "transitionEnd" ? "transitionend" : e : d + e.charAt(0).toUpperCase() + e.substr(1);
}
const A = S("transform"), M = "cube-tab-panels", C = -1, B = {
  name: M,
  props: {
    value: {
      type: [String, Number]
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    this.panels = [];
  },
  mounted() {
    this._move(this.value);
  },
  methods: {
    _move(e) {
      const t = w(this.panels, (a) => a.value === e);
      if (t === C)
        return;
      const n = this.$refs.panelsGroup, r = -(t * 100);
      n.style[A] = `translateX(${r}%)`;
    },
    addPanel(e) {
      this.panels.push(e);
    },
    removePanel(e) {
      const t = this.panels.indexOf(e);
      t > -1 && this.panels.splice(t, 1);
    }
  },
  watch: {
    value(e) {
      this._move(e);
    }
  },
  components: { TabPanel: u }
}, I = {
  class: "cube-tab-panels",
  ref: "panels"
}, D = {
  class: "cube-tab-panels-group",
  ref: "panelsGroup"
};
function F(e, t, n, r, a, c) {
  const o = v("cube-tab-panel");
  return l(), p("div", I, [
    h("div", D, [
      _(e.$slots, "default", {}, () => [
        (l(!0), p($, null, x(n.data, (s, G) => (l(), N(o, {
          label: s.label,
          value: s.value,
          key: s.value || s.label
        }, {
          default: y(() => [
            O(g(s.label), 1)
          ]),
          _: 2
        }, 1032, ["label", "value"]))), 128))
      ])
    ], 512)
  ], 512);
}
const i = /* @__PURE__ */ m(B, [["render", F]]);
i.install = function(e) {
  e.component(i.name, i), e.component(u.name, u);
};
i.Panel = u;
export {
  i as default
};
