import "./css.mjs";
import { p as _, P as d, a as y } from "../api-39513968.mjs";
import { C as h } from "../cascade-picker-fe710ede.mjs";
import { v as A } from "../visibility-5370f02a.mjs";
import { p as D } from "../popup-c9badb65.mjs";
import { l as b, L as k } from "../locale-72b46132.mjs";
import { d as v, f as E } from "../util-ec61f3da.mjs";
import { c as I, f as T } from "../date-7a142ee6.mjs";
import { resolveComponent as P, openBlock as N, createBlock as O } from "vue";
import { _ as Y } from "../_plugin-vue_export-helper-dad06003.mjs";
import { c as w } from "../create-api-056c0420.mjs";
import { a as L } from "../api-5cf76254.mjs";
import "../bscroll.esm-986d5802.mjs";
import "../popup-e92a5a70.mjs";
import "../constants-5ce69144.mjs";
import "../env-c05026db.mjs";
import "../debug-2fc173dc.mjs";
const R = "cube-date-picker", M = "select", p = "cancel", C = "change", s = ["year", "month", "date", "hour", "minute", "second"], o = {
  month: {
    natureMin: 1,
    natureMax: 12
  },
  date: {
    natureMin: 1,
    natureMax: 31
  },
  hour: {
    natureMin: 0,
    natureMax: 23
  },
  minute: {
    natureMin: 0,
    natureMax: 59
  },
  second: {
    natureMin: 0,
    natureMax: 59
  }
}, S = {
  year: "YYYY",
  month: "M",
  date: "D",
  hour: "hh",
  minute: "mm",
  second: "ss"
}, j = {
  name: R,
  mixins: [A, D, _, b],
  emits: [M, p, C],
  props: {
    min: {
      type: [Date, Array],
      default() {
        return new Date(2010, 0, 1);
      }
    },
    max: {
      type: [Date, Array],
      default() {
        return [(/* @__PURE__ */ new Date()).getFullYear() + 1, 12, 31, 23, 59, 59];
      }
    },
    startColumn: {
      type: String,
      default() {
        return "year";
      }
    },
    columnCount: {
      type: Number,
      default: 3
    },
    format: {
      type: Object,
      default() {
        return {};
      }
    },
    value: {
      type: [Date, Array],
      default(e) {
        return e.min;
      }
    },
    columnOrder: {
      type: Array,
      default() {
        return ["year", "month", "date", "hour", "minute", "second"];
      }
    }
  },
  computed: {
    formatConfig() {
      const e = Object.assign({}, S);
      return v(e, this.format), e;
    },
    natureRangeCache() {
      const e = {
        hour: [],
        minute: [],
        second: []
      };
      return Object.keys(e).forEach((t) => {
        e[t] = this._range(t, o[t].natureMin, o[t].natureMax);
      }), e;
    },
    startIndex() {
      const e = s.indexOf(this.startColumn);
      return e < 0 ? 0 : e;
    },
    minArray() {
      return this.min instanceof Date ? x(this.min).slice(this.startIndex, this.startIndex + this.columnCount) : this.min;
    },
    maxArray() {
      return this.max instanceof Date ? x(this.max).slice(this.startIndex, this.startIndex + this.columnCount) : this.max;
    },
    valueArray() {
      return this.value instanceof Date ? x(this.value).slice(this.startIndex, this.startIndex + this.columnCount) : this.value;
    },
    data() {
      const e = [];
      return this._generateData(this.startIndex, 0, e), e;
    },
    selectedIndex() {
      const e = [];
      let t = this.data, n;
      for (let a = 0; a < this.columnCount && a < 6 - this.startIndex; a++)
        n = E(t, (i) => this.valueArray[a] && i.value === this.valueArray[a]), e[a] = n !== -1 ? n : 0, t = t[e[a]] && t[e[a]].children;
      return e;
    }
  },
  methods: {
    _select(e, t, n) {
      this.$emit(M, this._arrayToDate(e), e, n);
    },
    _cancel() {
      this.$emit(p);
    },
    _change(e, t) {
      this.$emit(C, e, t);
    },
    _generateData(e, t, n) {
      if (t === 0) {
        const a = e === 0 ? this.minArray[0] : Math.max(this.minArray[0], o[s[e]].natureMin), i = e === 0 ? this.maxArray[0] : Math.min(this.maxArray[0], o[s[e]].natureMax);
        n.push.apply(n, this._range(s[e], a, i, !0, !0));
      } else if (e < 3 || n.isMin || n.isMax) {
        const a = e === 2 ? I(n.value, n.year) : o[s[e]].natureMax, i = n.isMin ? Math.max(this.minArray[t], o[s[e]].natureMin) : o[s[e]].natureMin, r = n.isMax ? Math.min(this.maxArray[t], a) : a, c = e === 1 && this.startIndex === 0 && this.columnCount >= 3 && n.value;
        n.children = this._range(s[e], i, r, n.isMin, n.isMax, c);
      } else
        n.children = this.natureRangeCache[s[e]];
      t < this.columnCount - 1 && e < 5 && (n.children || n).forEach((a) => {
        (!a.children || a.isMin || a.isMax) && this._generateData(e + 1, t + 1, a);
      });
    },
    _arrayToDate(e) {
      const t = [], n = x(/* @__PURE__ */ new Date(0));
      for (let a = 0; a < 6; a++)
        a < this.startIndex ? t[a] = n[a] : a >= this.startIndex + this.columnCount ? t[a] = o[s[a]].natureMin : t[a] = e[a - this.startIndex];
      return t[1]--, new Date(...t);
    },
    _range(e, t, n, a, i, r = 0) {
      this._rangeCache || (this._rangeCache = {});
      const c = e + r + t + n + a + i;
      if (this._rangeCache[c])
        return this._rangeCache[c];
      const m = [], g = this.formatConfig[e];
      for (let u = t; u <= n; u++) {
        const f = {
          text: T(e, g, u, "i"),
          value: u,
          order: this.columnOrder.indexOf(e)
        };
        a && u === t && (f.isMin = !0), i && u === n && (f.isMax = !0), r && (f.year = r), m.push(f);
      }
      return this._rangeCache[c] = m, m;
    }
  },
  components: {
    CubeCascadePicker: h
  }
};
function x(e) {
  return [e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()];
}
function F(e, t, n, a, i, r) {
  const c = P("cube-cascade-picker");
  return N(), O(c, {
    visible: e.isVisible,
    "onUpdate:visible": t[0] || (t[0] = (m) => e.isVisible = m),
    data: r.data,
    "selected-index": r.selectedIndex,
    title: e.title,
    subtitle: e.subtitle,
    "cancel-txt": e._cancelTxt,
    "confirm-txt": e._confirmTxt,
    "swipe-time": e.swipeTime,
    "z-index": e.zIndex,
    "mask-closable": e.maskClosable,
    onSelect: r._select,
    onCancel: r._cancel,
    onChange: r._change
  }, null, 8, ["visible", "data", "selected-index", "title", "subtitle", "cancel-txt", "confirm-txt", "swipe-time", "z-index", "mask-closable", "onSelect", "onCancel", "onChange"]);
}
const l = /* @__PURE__ */ Y(j, [["render", F]]);
function U(e, t) {
  w(e, t);
}
l.install = function(e) {
  e.component(d.name, d), e.component(h.name, h), e.component(l.name, l), k.install(e), y(e, d), L(e, h), U(e, l);
};
l.Picker = d;
h.Picker = d;
l.CascadePicker = h;
export {
  l as default
};
