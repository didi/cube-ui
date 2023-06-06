import "./css.mjs";
import { openBlock as q, createElementBlock as O, normalizeClass as R, createElementVNode as P, renderSlot as C, toDisplayString as w } from "vue";
function N(e, t) {
  for (let s in t)
    !e[s] || typeof e[s] != "object" ? e[s] = t[s] : N(e[s], t[s]);
}
function k(e) {
  return function(...s) {
    typeof s[0] == "string" && (s[0] = {
      [s[0]]: s[1]
    }), N(e, s[0]);
  };
}
function b(e) {
  const t = Object.prototype.toString;
  return function(i) {
    return t.call(i) === `[object ${e}]`;
  };
}
function I(e, t) {
  let s = 0, i = [];
  const n = e.length;
  if (!n)
    return t(i);
  e.forEach((a, o) => {
    a((r) => {
      s += 1, i[o] = r, s === n && t(i);
    });
  });
}
function j(e) {
  let t;
  if (typeof window.Promise < "u") {
    const s = e;
    t = new window.Promise((i) => {
      e = (n) => {
        s && s(n), i(n);
      };
    }), t.resolve = e;
  }
  return t;
}
function H(e, t = "") {
  const s = t.split(".");
  let i = e;
  for (let n = 0; n < s.length; n++) {
    const a = s[n];
    if (M(i[a])) {
      i = "";
      break;
    } else
      i = i[a];
  }
  return i;
}
const g = b("Function"), M = b("Undefined"), z = b("Array"), B = b("String"), F = b("Number"), K = /^(1|2)\d{3}[.\-/]\d{1,2}[.\-/]\d{1,2}$/, A = {
  string: (e) => typeof e == "string",
  number: (e) => !isNaN(Number(e)),
  array: (e) => Array.isArray(e),
  date: (e) => !isNaN(Number(e)) || K.test(e),
  email: (e) => typeof e == "string" && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(e),
  tel: (e) => typeof e == "string" && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(e),
  url: (e) => typeof e == "string" && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e)
}, U = k(A), _ = {
  required: (e, t, s) => (s = s || (Array.isArray(e) ? "array" : typeof e), s === "array" && Array.isArray(e) ? e.length > 0 : e !== "" && e !== void 0 && e !== null),
  type: (e, t) => !A[t] || A[t](e),
  min: (e, t, s) => (s = s || typeof e, s === "number" || s === "date" ? Number(e) >= t : e.length >= t),
  max: (e, t, s) => (s = s || typeof e, s === "number" || s === "date" ? Number(e) <= t : e.length <= t),
  len: (e, t, s) => {
    s = s || typeof e;
    let i = e;
    return i.length === void 0 && (i = s === "object" ? Object.keys(i) : String(i)), i.length === t;
  },
  notWhitespace: (e, t, s) => !/^\s+$/.test(e),
  pattern: (e, t, s) => t.test(e),
  custom: (e, t, s) => t(e)
}, W = k(_);
function G(...e) {
  const t = "validator", s = this._base.config.globalProperties, i = s.$cubeLang, n = s.$cubeMessages[i][t];
  typeof e[0] == "string" && (e[0] = {
    [e[0]]: e[1]
  }), N(n, e[0]);
}
const Y = {
  cancel: "取消",
  confirm: "确认",
  ok: "确定",
  prev: "上一步",
  next: "下一步",
  selectText: "请选择",
  now: "现在",
  selectTime: "选择时间",
  today: "今日",
  formatDate: "M月D日",
  hours: "点",
  minutes: "分",
  validator: {
    required: "此为必填项",
    type: {
      string: "请输入字符",
      number: "请输入数字",
      array: "数据类型应为数组",
      date: "请选择有效日期",
      email: "请输入有效邮箱",
      tel: "请输入有效的手机号码",
      url: "请输入有效网址"
    },
    min: {
      string: "至少输入 {{config}} 位字符",
      number: "不得小于 {{config}}",
      array: "请选择至少 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之后的时间',
      email: "至少输入 {{config}} 位字符",
      tel: "至少输入 {{config}} 位字符",
      url: "至少输入 {{config}} 位字符"
    },
    max: {
      string: "请勿超过 {{config}} 位字符",
      number: "请勿大于 {{config}}",
      array: "最多选择 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: "请勿超过 {{config}} 位字符",
      tel: "请勿超过 {{config}} 位字符",
      url: "请勿超过 {{config}} 位字符"
    },
    len: {
      string: "请输入 {{config}} 位字符",
      number: "长度应等于 {{config}}",
      array: "请选择 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: "请输入 {{config}} 位字符",
      tel: "请输入 {{config}} 位字符",
      url: "请输入 {{config}} 位字符"
    },
    pattern: "格式错误",
    custom: "未通过校验",
    notWhitespace: "空白内容无效"
  }
}, Z = {
  cancel: "Cancel",
  confirm: "Confirm",
  ok: "OK",
  prev: "Prev",
  next: "Next",
  selectText: "Please select",
  now: "Now",
  selectTime: "Select time",
  today: "Today",
  formatDate: "M-D",
  hours: "",
  minutes: "",
  validator: {
    required: "Required.",
    type: {
      string: "Please input characters.",
      number: "Please input numbers.",
      array: "The data type should be array.",
      date: "Please select a valid date.",
      email: "Please input a valid E-mail.",
      tel: "Please input a valid telphone number.",
      url: "Please input a valid web site."
    },
    min: {
      string: "Please input at least {{config}} characters.",
      number: "The number could not smaller than {{config}}.",
      array: "Please select at least {{config}} items.",
      date: 'Please select a date after {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input at least {{config}} characters.",
      tel: "Please input at least {{config}} characters.",
      url: "Please input at least {{config}} characters."
    },
    max: {
      string: "Please input no more than {{config}} characters.",
      number: "The number could not bigger than {{config}}",
      array: "Please select no more than  {{config}} items",
      date: 'Please select a date before {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input no more than {{config}} characters.",
      tel: "Please input no more than {{config}} characters.",
      url: "Please input no more than {{config}} characters."
    },
    len: {
      string: "Please input {{config}} characters.",
      number: "The length should equal {{config}}",
      array: "Please select {{config}} items",
      date: 'Please select {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input {{config}} characters.",
      tel: "Please input {{config}} characters.",
      url: "Please input {{config}} characters."
    },
    pattern: 'The input don"t match pattern.',
    custom: "Invalid.",
    notWhitespace: "Whitespace is invalid."
  }
}, X = function(e, t) {
};
function J(e, t, s, i) {
  const n = {
    year: "(Y+)",
    month: "(M+)",
    date: "(D+)",
    hour: "(h+)",
    minute: "(m+)",
    second: "(s+)",
    quarter: "(q+)",
    millisecond: "(S)"
  };
  if (new RegExp(n[e], i).test(t)) {
    const a = e === "year" ? s.toString().substr(4 - RegExp.$1.length) : RegExp.$1.length === 1 ? s : Q(s);
    t = t.replace(RegExp.$1, a);
  }
  return t;
}
function Q(e) {
  return ("00" + e).substr(("" + e).length);
}
function ee(e, t) {
  const s = {
    year: {
      value: e.getFullYear(),
      regExpAttributes: "i"
    },
    month: {
      value: e.getMonth() + 1
    },
    date: {
      value: e.getDate(),
      regExpAttributes: "i"
    },
    hour: {
      value: e.getHours(),
      regExpAttributes: "i"
    },
    minute: {
      value: e.getMinutes()
    },
    second: {
      value: e.getSeconds()
    },
    quarter: {
      value: Math.floor((e.getMonth() + 3) / 3),
      regExpAttributes: "i"
    },
    millisecond: {
      value: e.getMilliseconds()
    }
  };
  for (const i in s)
    t = J(i, t, s[i].value, s[i].regExpAttributes);
  return t;
}
let p;
const D = "zh-CN", y = {
  name: "locale",
  install(e) {
    y.installed || (p = e.config.globalProperties, p.$cubeLang = D, p.$cubeMessages = { [D]: Y, "en-US": Z }, y.installed = !0);
  },
  use(e, t) {
    p.$cubeLang = e;
    const s = p.$cubeMessages;
    e in s || (s[[e]] = t);
  },
  helpers: {
    toLocaleDateString(e, t) {
      const s = F(e) ? e : e.replace(/-/g, "/"), i = new Date(s);
      return M(t) ? i.toDateString() : ee(i, t);
    }
  },
  addHelper(e, t) {
    e in y.helpers || (y.helpers[e] = t);
  }
}, f = y, te = "Translation is not registered correctly, you can call Locale.use() to install it.", $ = {
  computed: {
    $t() {
      const e = this.$cubeLang, t = this.$cubeMessages[e];
      return M(t) ? (X(te), "") : (s) => H(t, s);
    }
  },
  beforeCreate() {
    f.install(this._.appContext.app);
  }
};
f.localeMixin = $;
const se = /\{\{((?:.|\n)+?)\}\}/g, ie = /['"]/g, E = -1;
function ne(e, t = "") {
  return e.replace(se, (s, i, n) => {
    const a = i.split("|").slice(1).map((c) => c.trim()), o = a.length;
    let r = t;
    return o && a.forEach((c) => {
      let { fnName: u, args: l } = ae(c);
      l.unshift(r), g(f.helpers[u]) ? r = f.helpers[u].apply(null, l) : r = "";
    }), r;
  });
}
function ae(e) {
  const t = e.indexOf("("), s = e.indexOf(")");
  let i = "", n = [];
  return t === E ? (n = [], i = e) : t !== E && s !== E && (n = e.slice(t + 1, s).split(",").map((o) => o.trim().replace(ie, "")), i = e.slice(0, t)), { fnName: i, args: n };
}
const re = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, n] of t)
    s[i] = n;
  return s;
}, le = "cube-validator", S = "update:modelValue", x = "validating", L = "validated", V = "msg-click", oe = {
  name: le,
  mixins: [$],
  emits: [S, x, L, V],
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
      return M(e) ? void 0 : !e;
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
      const t = j(e);
      if (t && (e = t.resolve), this.isDisabled)
        return e && e(this.valid), t;
      this._validateCount++;
      const s = this._validateCount, i = this.targetModel, n = this.rules, a = n.type, o = [];
      let r = !0;
      if (n.required || (r = _.required(i, !0, a)), r)
        for (const c in n) {
          const u = n[c];
          let l;
          g(u) ? l = u(i, n[c], a) : l = !_[c] || _[c](i, n[c], a), o.push((h) => {
            const m = (v) => {
              h({
                key: c,
                valid: v === !0,
                ret: v
              });
            }, T = (v) => {
              h({
                key: c,
                valid: !1,
                ret: v
              });
            };
            typeof l == "object" && g(l.then) ? l.then(m).catch(T) : g(l) ? l(m, T) : h({
              key: c,
              valid: l === !0,
              ret: l
            });
          });
        }
      return this._checkTasks(o, s, e), t;
    },
    _checkTasks(e, t, s) {
      const i = this.rules;
      let n = !0;
      const a = {};
      let o = !0;
      this.validating = !0;
      const r = this.targetModel;
      I(e, (c) => {
        this._validateCount === t && (this.validating = !1, c.forEach(({ key: u, valid: l, ret: h }) => {
          const m = this.messages[u] ? g(this.messages[u]) ? this.messages[u](h, l) : this.messages[u] : this.findMessage(u, i[u], i.type, r);
          n && !l && (n = !1, this.msg = m), a[u] = {
            valid: l,
            invalid: !l,
            message: m
          };
        }), o || this.$emit(L, n), this._updateModel(n, a), s && s(this.valid));
      }), this.validating && (o = !1, this.$emit(x), this.emitValidChange(void 0));
    },
    _updateModel(e, t) {
      this.validated = !0, this.result = t, t.required && t.required.invalid && (this.msg = t.required.message), e && (this.msg = ""), this.emitValidChange(e);
    },
    reset() {
      this._validateCount++, this.validating = !1, this.dirty = !1, this.result = {}, this.msg = "", this.validated = !1, this.emitValidChange(void 0);
    },
    emitValidChange(e) {
      const t = this.valid;
      this.valid = e, t !== e && this.$emit(S, e);
    },
    msgClickHandler() {
      this.$emit(V);
    },
    findMessage(e, t, s, i) {
      const n = this.$cubeMessages, a = this.$cubeLang, o = "validator", r = n[a][o][e];
      return r ? B(r) ? r : g(r) ? r(t) : (r[s] || (s = z(i) ? "array" : typeof i), typeof r[s] == "function" ? r[s](t) : ne(r[s], t)) : "";
    }
  }
}, ce = { class: "cube-validator-content" }, ue = { class: "cube-validator-msg-def" };
function de(e, t, s, i, n, a) {
  return q(), O("div", {
    class: R(["cube-validator", a.containerClass])
  }, [
    P("div", ce, [
      C(e.$slots, "default")
    ]),
    P("div", {
      class: "cube-validator-msg",
      onClick: t[0] || (t[0] = (...o) => a.msgClickHandler && a.msgClickHandler(...o))
    }, [
      C(e.$slots, "message", {
        message: n.msg,
        dirty: n.dirty,
        validated: n.validated,
        validating: n.validating,
        result: n.result
      }, () => [
        P("span", ue, w(a.dirtyOrValidated ? n.msg : ""), 1)
      ])
    ])
  ], 2);
}
const d = /* @__PURE__ */ re(oe, [["render", de]]);
d.install = function(e) {
  e.component(d.name, d), f.install(e), d._base = e;
};
d.addRule = W;
d.addMessage = G;
d.addType = U;
d.addHelper = f.addHelper;
export {
  d as default
};
