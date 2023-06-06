import "./css.mjs";
import { openBlock as s, createElementBlock as p, renderSlot as u, resolveComponent as m, createElementVNode as b, Fragment as f, renderList as h, createBlock as v, withCtx as $, createTextVNode as y, toDisplayString as N } from "vue";
import { _ as i } from "../_plugin-vue_export-helper-dad06003.mjs";
import { f as x } from "../util-ec61f3da.mjs";
import { p as P } from "../dom-d693ece1.mjs";
import "../env-c05026db.mjs";
const O = "cube-tab-panel", g = {
  name: O,
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
function S(e, t, a, r, c, _) {
  return s(), p("div", E, [
    u(e.$slots, "default")
  ]);
}
const o = /* @__PURE__ */ i(g, [["render", S]]);
const T = P("transform"), A = "cube-tab-panels", M = -1, k = {
  name: A,
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
      const t = x(this.panels, (c) => c.value === e);
      if (t === M)
        return;
      const a = this.$refs.panelsGroup, r = -(t * 100);
      a.style[T] = `translateX(${r}%)`;
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
  components: { TabPanel: o }
}, B = {
  class: "cube-tab-panels",
  ref: "panels"
}, C = {
  class: "cube-tab-panels-group",
  ref: "panelsGroup"
};
function D(e, t, a, r, c, _) {
  const d = m("cube-tab-panel");
  return s(), p("div", B, [
    b("div", C, [
      u(e.$slots, "default", {}, () => [
        (s(!0), p(f, null, h(a.data, (n, F) => (s(), v(d, {
          label: n.label,
          value: n.value,
          key: n.value || n.label
        }, {
          default: $(() => [
            y(N(n.label), 1)
          ]),
          _: 2
        }, 1032, ["label", "value"]))), 128))
      ])
    ], 512)
  ], 512);
}
const l = /* @__PURE__ */ i(k, [["render", D]]);
l.install = function(e) {
  e.component(l.name, l), e.component(o.name, o);
};
l.Panel = o;
export {
  l as default
};
