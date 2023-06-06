import "./css.mjs";
import { p as v, P as p, a as E } from "../api-39513968.mjs";
import { M as u, b as T, D as b, d, a as x, p as C, H as I } from "../date-7a142ee6.mjs";
import { v as $ } from "../visibility-5370f02a.mjs";
import { p as H } from "../popup-c9badb65.mjs";
import { l as P, L as A } from "../locale-72b46132.mjs";
import { C as O } from "../cascade-picker-fe710ede.mjs";
import { resolveComponent as L, openBlock as R, createBlock as j } from "vue";
import { _ as U } from "../_plugin-vue_export-helper-dad06003.mjs";
import { c as V } from "../create-api-056c0420.mjs";
import "../bscroll.esm-986d5802.mjs";
import "../popup-e92a5a70.mjs";
import "../constants-5ce69144.mjs";
import "../env-c05026db.mjs";
import "../util-ec61f3da.mjs";
import "../debug-2fc173dc.mjs";
const Y = "cube-time-picker", w = "select", M = "cancel", S = "change", y = {
  value: "now"
}, N = {
  floor: "floor",
  ceil: "ceil",
  round: "round"
}, _ = 10, z = {
  name: Y,
  mixins: [$, H, v, P],
  components: {
    CubeCascadePicker: O
  },
  emits: [w, M, S],
  props: {
    title: {
      type: String,
      default: ""
    },
    delay: {
      type: Number,
      default: 15
    },
    day: {
      type: Object,
      default() {
        return {
          len: 3
        };
      }
    },
    showNow: {
      type: [Boolean, Object],
      default: !0
    },
    minuteStep: {
      type: [Number, Object],
      default: _
    },
    format: {
      type: String,
      default: "YYYY/M/D hh:mm"
    },
    min: {
      type: [Date, Number],
      default: null
    },
    max: {
      type: [Date, Number],
      default: null
    }
  },
  data() {
    return {
      now: /* @__PURE__ */ new Date(),
      selectedIndex: [0, 0, 0],
      value: 0
    };
  },
  computed: {
    _title() {
      return this.title || this.$t("selectTime");
    },
    _day() {
      const t = {
        filter: [this.$t("today")],
        format: this.$t("formatDate")
      };
      return Object.assign({}, t, this.day);
    },
    nowText() {
      const t = this.$t("now");
      return this.showNow && this.showNow.text || t;
    },
    minuteStepRule() {
      const t = this.minuteStep;
      return typeof t == "object" && Math[N[t.rule]] || Math[N.floor];
    },
    minuteStepNumber() {
      const t = this.minuteStep;
      return typeof t == "number" ? t : t.step || _;
    },
    minTime() {
      let t = +this.min || +this.now + this.delay * u;
      const e = new Date(t).getMinutes(), s = Math.min(this.minuteStepRule(e / this.minuteStepNumber) * this.minuteStepNumber, 60);
      return t += (s - e) * u, new Date(t);
    },
    maxTime() {
      let t = +this.max || T(new Date(+this.minTime + this._day.len * b)) - 1;
      const e = new Date(t).getMinutes(), s = Math.floor(e / this.minuteStepNumber) * this.minuteStepNumber;
      return t -= (e - s) * u, new Date(t);
    },
    days() {
      const t = [], e = d(this.minTime, this.now), s = this.max ? d(this.maxTime, this.minTime) + 1 : this._day.len;
      for (let i = 0; i < s; i++) {
        const n = +this.minTime + i * b;
        t.push({
          value: n,
          text: this._day.filter && this._day.filter[e + i] || x(new Date(n), this._day.format)
        });
      }
      return t;
    },
    hours() {
      const t = [];
      for (let e = 0; e < 24; e++)
        t.push({
          value: e,
          text: `${e}${this.$t("hours")}`,
          children: this.minutes
        });
      return t;
    },
    minutes() {
      const t = [];
      for (let e = 0; e < 60; e += this.minuteStepNumber)
        t.push({
          value: e,
          text: `${C(e)}${this.$t("minutes")}`
        });
      return t;
    },
    cascadeData() {
      const t = this.days.slice();
      if (this.maxTime - this.minTime <= -6e4)
        return [];
      t.forEach((s, i) => {
        const n = i === 0, o = i === t.length - 1;
        if (!n && !o) {
          s.children = this.hours;
          return;
        }
        const r = [], m = n ? this.minTime.getHours() : 0, h = o ? this.maxTime.getHours() : 23;
        for (let a = m; a <= h; a++) {
          const l = n && a === m, f = o && a === h;
          if (!l && !f) {
            r.push({
              value: a,
              text: `${a}${this.$t("hours")}`,
              children: this.minutes
            });
            continue;
          }
          const D = l ? Math.round(this.minTime.getMinutes() / this.minuteStepNumber) : 0, g = f ? Math.round(this.maxTime.getMinutes() / this.minuteStepNumber) : Math.floor(59 / this.minuteStepNumber), k = this.minutes.slice(D, g + 1);
          r.push({
            value: a,
            text: `${a}${this.$t("hours")}`,
            children: k
          });
        }
        s.children = r;
      });
      const e = d(this.minTime, this.now);
      if (this.showNow && e <= 0) {
        const s = Math.abs(e), i = t[s];
        i && (i.children = [...i.children], i.children.unshift({
          value: y.value,
          text: this.nowText,
          children: []
        }));
      }
      return t;
    }
  },
  methods: {
    show() {
      this.isVisible || (this.isVisible = !0, this._updateNow(), this._updateSelectedIndex());
    },
    setTime(t) {
      this.value = t, this.isVisible && this._updateSelectedIndex();
    },
    _updateSelectedIndex() {
      const t = this.value, e = this.minTime, s = this.min || this.min === 0 ? +e : Math.floor(e / u) * u;
      if (t < s)
        this.selectedIndex = [0, 0, 0];
      else {
        const i = new Date(t), n = d(i, e);
        if (n >= this.days.length)
          return;
        const o = i.getHours(), r = n === 0 ? this.showNow ? this.minTime.getHours() - 1 : this.minTime.getHours() : 0, m = o - r, h = this.minuteStepRule(i.getMinutes() / this.minuteStepNumber), a = !n && (this.showNow ? m === 1 : !m) ? this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber) : 0, l = h - a;
        this.selectedIndex = [n, m, l];
      }
    },
    _updateNow() {
      this.now = /* @__PURE__ */ new Date();
    },
    _pickerChange(t, e) {
      this.$emit(S, t, e);
    },
    _pickerSelect(t, e, s) {
      let i, n;
      t[1] === y.value ? (i = +/* @__PURE__ */ new Date(), n = this.nowText) : (i = T(new Date(t[0])) + t[1] * I + t[2] * u, n = s[0] + " " + s[1] + ":" + s[2]), this.value = i;
      const o = x(new Date(i), this.format);
      this.$emit(w, i, n, o);
    },
    _pickerCancel() {
      this.$emit(M);
    }
  }
};
function B(t, e, s, i, n, o) {
  const r = L("cube-cascade-picker");
  return R(), j(r, {
    ref: "picker",
    visible: t.isVisible,
    "onUpdate:visible": e[0] || (e[0] = (m) => t.isVisible = m),
    data: o.cascadeData,
    "selected-index": n.selectedIndex,
    title: o._title,
    subtitle: t.subtitle,
    "cancel-txt": t._cancelTxt,
    "confirm-txt": t._confirmTxt,
    "swipe-time": t.swipeTime,
    "z-index": t.zIndex,
    "mask-closable": t.maskClosable,
    onSelect: o._pickerSelect,
    onCancel: o._pickerCancel,
    onChange: o._pickerChange
  }, null, 8, ["visible", "data", "selected-index", "title", "subtitle", "cancel-txt", "confirm-txt", "swipe-time", "z-index", "mask-closable", "onSelect", "onCancel", "onChange"]);
}
const c = /* @__PURE__ */ U(z, [["render", B]]);
function F(t, e) {
  V(t, e);
}
c.install = function(t) {
  t.component(p.name, p), t.component(c.name, c), A.install(t), E(t, p), F(t, c);
};
c.Picker = p;
export {
  c as default
};
