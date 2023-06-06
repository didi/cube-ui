import { e as M, d as k, h as c, i as D, c as T, j as I, k as q, l as O } from "./util-ec61f3da.mjs";
import { L as b, l as j } from "./locale-72b46132.mjs";
import "./locale/locale.mjs";
import { openBlock as L, createElementBlock as P, normalizeClass as R, createElementVNode as v, renderSlot as A, toDisplayString as S } from "vue";
import { _ as $ } from "./_plugin-vue_export-helper-dad06003.mjs";
const x = /^(1|2)\d{3}[.\-/]\d{1,2}[.\-/]\d{1,2}$/, _ = {
  string: (e) => typeof e == "string",
  number: (e) => !isNaN(Number(e)),
  array: (e) => Array.isArray(e),
  date: (e) => !isNaN(Number(e)) || x.test(e),
  email: (e) => typeof e == "string" && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(e),
  tel: (e) => typeof e == "string" && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(e),
  url: (e) => typeof e == "string" && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e)
}, ee = M(_), g = {
  required: (e, t, s) => (s = s || (Array.isArray(e) ? "array" : typeof e), s === "array" && Array.isArray(e) ? e.length > 0 : e !== "" && e !== void 0 && e !== null),
  type: (e, t) => !_[t] || _[t](e),
  min: (e, t, s) => (s = s || typeof e, s === "number" || s === "date" ? Number(e) >= t : e.length >= t),
  max: (e, t, s) => (s = s || typeof e, s === "number" || s === "date" ? Number(e) <= t : e.length <= t),
  len: (e, t, s) => {
    s = s || typeof e;
    let a = e;
    return a.length === void 0 && (a = s === "object" ? Object.keys(a) : String(a)), a.length === t;
  },
  notWhitespace: (e, t, s) => !/^\s+$/.test(e),
  pattern: (e, t, s) => t.test(e),
  custom: (e, t, s) => t(e)
}, te = M(g);
function se(...e) {
  const t = "validator", s = this._base.config.globalProperties, a = s.$cubeLang, i = s.$cubeMessages[a][t];
  typeof e[0] == "string" && (e[0] = {
    [e[0]]: e[1]
  }), k(i, e[0]);
}
const z = /\{\{((?:.|\n)+?)\}\}/g, B = /['"]/g, p = -1;
function H(e, t = "") {
  return e.replace(z, (s, a, i) => {
    const n = a.split("|").slice(1).map((d) => d.trim()), o = n.length;
    let r = t;
    return o && n.forEach((d) => {
      let { fnName: u, args: l } = K(d);
      l.unshift(r), c(b.helpers[u]) ? r = b.helpers[u].apply(null, l) : r = "";
    }), r;
  });
}
function K(e) {
  const t = e.indexOf("("), s = e.indexOf(")");
  let a = "", i = [];
  return t === p ? (i = [], a = e) : t !== p && s !== p && (i = e.slice(t + 1, s).split(",").map((o) => o.trim().replace(B, "")), a = e.slice(0, t)), { fnName: a, args: i };
}
const F = "cube-validator", N = "update:modelValue", E = "validating", V = "validated", C = "msg-click", G = {
  name: F,
  mixins: [j],
  emits: [N, E, V, C],
  props: {
    model: {
      required: !0
    },
    modelKey: {
      type: String,
      default: ""
    },
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    messages: {
      type: [Object, String],
      default() {
        return {};
      }
    },
    modelValue: {},
    disabled: {
      type: Boolean,
      default: !1
    },
    immediate: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      valid: this.modelValue,
      validated: !1,
      msg: "",
      dirty: !1,
      validating: !1,
      result: {}
    };
  },
  computed: {
    targetModel() {
      const e = this.modelKey, t = this.model;
      return e ? t[e] : t;
    },
    invalid() {
      const e = this.valid;
      return D(e) ? void 0 : !e;
    },
    isDisabled() {
      const e = this.disabled, t = Object.keys(this.rules).length <= 0;
      return e || t;
    },
    dirtyOrValidated() {
      return (this.dirty || this.validated) && !this.validating;
    },
    containerClass() {
      if (!this.isDisabled)
        return {
          "cube-validator_invalid": this.invalid,
          "cube-validator_valid": this.valid,
          "cube-validator_validating": this.validating
        };
    }
  },
  watch: {
    modelValue(e) {
      this.valid = e;
    },
    targetModel: {
      handler() {
        this.isDisabled || (this.dirty || (this.dirty = !0), this.validate());
      },
      flush: "sync",
      deep: !0
    },
    rules() {
      this.validate();
    },
    isDisabled(e) {
      !e && this.trigger && !this.validated && this.validate();
    }
  },
  created() {
    this._validateCount = 0, !this.isDisabled && this.immediate && this.validate();
  },
  methods: {
    validate(e) {
      const t = T(e);
      if (t && (e = t.resolve), this.isDisabled)
        return e && e(this.valid), t;
      this._validateCount++;
      const s = this._validateCount, a = this.targetModel, i = this.rules, n = i.type, o = [];
      let r = !0;
      if (i.required || (r = g.required(a, !0, n)), r)
        for (const d in i) {
          const u = i[d];
          let l;
          c(u) ? l = u(a, i[d], n) : l = !g[d] || g[d](a, i[d], n), o.push((h) => {
            const f = (m) => {
              h({
                key: d,
                valid: m === !0,
                ret: m
              });
            }, y = (m) => {
              h({
                key: d,
                valid: !1,
                ret: m
              });
            };
            typeof l == "object" && c(l.then) ? l.then(f).catch(y) : c(l) ? l(f, y) : h({
              key: d,
              valid: l === !0,
              ret: l
            });
          });
        }
      return this._checkTasks(o, s, e), t;
    },
    _checkTasks(e, t, s) {
      const a = this.rules;
      let i = !0;
      const n = {};
      let o = !0;
      this.validating = !0;
      const r = this.targetModel;
      I(e, (d) => {
        this._validateCount === t && (this.validating = !1, d.forEach(({ key: u, valid: l, ret: h }) => {
          const f = this.messages[u] ? c(this.messages[u]) ? this.messages[u](h, l) : this.messages[u] : this.findMessage(u, a[u], a.type, r);
          i && !l && (i = !1, this.msg = f), n[u] = {
            valid: l,
            invalid: !l,
            message: f
          };
        }), o || this.$emit(V, i), this._updateModel(i, n), s && s(this.valid));
      }), this.validating && (o = !1, this.$emit(E), this.emitValidChange(void 0));
    },
    _updateModel(e, t) {
      this.validated = !0, this.result = t, t.required && t.required.invalid && (this.msg = t.required.message), e && (this.msg = ""), this.emitValidChange(e);
    },
    reset() {
      this._validateCount++, this.validating = !1, this.dirty = !1, this.result = {}, this.msg = "", this.validated = !1, this.emitValidChange(void 0);
    },
    emitValidChange(e) {
      const t = this.valid;
      this.valid = e, t !== e && this.$emit(N, e);
    },
    msgClickHandler() {
      this.$emit(C);
    },
    findMessage(e, t, s, a) {
      const i = this.$cubeMessages, n = this.$cubeLang, o = "validator", r = i[n][o][e];
      return r ? q(r) ? r : c(r) ? r(t) : (r[s] || (s = O(a) ? "array" : typeof a), typeof r[s] == "function" ? r[s](t) : H(r[s], t)) : "";
    }
  }
}, U = { class: "cube-validator-content" }, W = { class: "cube-validator-msg-def" };
function Z(e, t, s, a, i, n) {
  return L(), P("div", {
    class: R(["cube-validator", n.containerClass])
  }, [
    v("div", U, [
      A(e.$slots, "default")
    ]),
    v("div", {
      class: "cube-validator-msg",
      onClick: t[0] || (t[0] = (...o) => n.msgClickHandler && n.msgClickHandler(...o))
    }, [
      A(e.$slots, "message", {
        message: i.msg,
        dirty: i.dirty,
        validated: i.validated,
        validating: i.validating,
        result: i.result
      }, () => [
        v("span", W, S(n.dirtyOrValidated ? i.msg : ""), 1)
      ])
    ])
  ], 2);
}
const ie = /* @__PURE__ */ $(G, [["render", Z]]);
export {
  ie as V,
  te as a,
  se as b,
  ee as c
};
