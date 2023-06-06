import "./css.mjs";
import { openBlock as u, createElementBlock as d, normalizeClass as f, createElementVNode as c, renderSlot as m, toDisplayString as V, createCommentVNode as D, withDirectives as k, vModelCheckbox as it, createTextVNode as at, resolveComponent as E, Fragment as $, renderList as w, createBlock as v, mergeProps as L, vModelDynamic as pt, vModelRadio as bt, withModifiers as M, vModelText as _t, vShow as oe, normalizeStyle as gt, createVNode as yt, withCtx as be, resolveDynamicComponent as _e, toHandlers as J } from "vue";
const ue = typeof window < "u", ge = ue && navigator.userAgent.toLowerCase();
ge && ge.indexOf("android") > 0;
let Q = (() => {
  if (!ue)
    return !1;
  let e = document.createElement("div").style, t = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (let s in t)
    if (e[t[s]] !== void 0)
      return s;
  return !1;
})();
function vt(e) {
  return Q === !1 ? !1 : Q === "standard" ? e === "transitionEnd" ? "transitionend" : e : Q + e.charAt(0).toUpperCase() + e.substr(1);
}
function ye(e, t, { type: s = "Event", bubbles: l = !0, cancelable: a = !0 } = {}) {
  const i = document.createEvent(s);
  i.initEvent(t, l, a), e.dispatchEvent(i);
}
function Vt(e, t) {
  if (e.findIndex)
    return e.findIndex(t);
  let s = -1;
  return e.some(function(l, a, i) {
    const n = t.call(this, l, a, i);
    if (n)
      return s = a, n;
  }), s;
}
function de(e, t) {
  for (let s in t)
    !e[s] || typeof e[s] != "object" ? e[s] = t[s] : de(e[s], t[s]);
}
function lt(e) {
  return function(...s) {
    typeof s[0] == "string" && (s[0] = {
      [s[0]]: s[1]
    }), de(e, s[0]);
  };
}
function j(e) {
  const t = Object.prototype.toString;
  return function(l) {
    return t.call(l) === `[object ${e}]`;
  };
}
const O = {
  _set(e, t, s) {
    e[t] = s;
  },
  string(e, t) {
    O._set(e, t, "");
  },
  number(e, t) {
    O._set(e, t, 0);
  },
  boolean(e, t) {
    O._set(e, t, !1);
  },
  object(e, t, s) {
    Array.isArray(s) ? O._set(e, t, []) : O._set(e, t, {});
  }
};
function nt(e, t, s) {
  if (s !== void 0)
    return O._set(e, t, s);
  if (t) {
    const l = e[t], a = O[typeof l];
    a && a(e, t, l);
  } else
    Object.keys(e).forEach((l) => {
      nt(e, l);
    });
}
function Et(e, t) {
  let s = 0, l = [];
  const a = e.length;
  if (!a)
    return t(l);
  e.forEach((i, n) => {
    i((r) => {
      s += 1, l[n] = r, s === a && t(l);
    });
  });
}
function ce(e) {
  let t;
  if (typeof window.Promise < "u") {
    const s = e;
    t = new window.Promise((l) => {
      e = (a) => {
        s && s(a), l(a);
      };
    }), t.resolve = e;
  }
  return t;
}
function xt(e, t, s, l) {
  let a, i = l;
  const n = function(o, h) {
    a = null, h && (i = e.apply(o, h));
  }, r = function(...o) {
    if (a && clearTimeout(a), s) {
      const h = !a;
      a = setTimeout(n, t), h && (i = e.apply(this, o));
    } else
      a = setTimeout(() => {
        n(this, o);
      }, t);
    return i;
  };
  return r.cancel = function() {
    clearTimeout(a), a = null;
  }, r;
}
function Ct(e, t = "") {
  const s = t.split(".");
  let l = e;
  for (let a = 0; a < s.length; a++) {
    const i = s[a];
    if (W(l[i])) {
      l = "";
      break;
    } else
      l = l[i];
  }
  return l;
}
const A = j("Function"), W = j("Undefined"), Nt = j("Array"), Tt = j("String"), kt = j("Number"), $t = (e, t, s) => {
  const l = e.rules && e.rules[t];
  t !== "custom" && l && typeof l != "function" && (e.rules[t] = s);
}, St = (e) => (t, s) => $t(t, e, s), rt = St("required"), ve = (e) => rt(e, (t) => t !== !1), Mt = (e) => rt(e, (t) => t > 0), Ve = (e, t) => {
  e.type = "button", e.props || (e.props = {}), e.props.type = t;
}, Ot = {
  submit(e) {
    Ve(e, "submit");
  },
  reset(e) {
    Ve(e, "reset");
  },
  checkbox(e) {
    ve(e);
  },
  switch(e) {
    ve(e);
  },
  rate(e) {
    Mt(e);
  }
};
function wt(e) {
  const t = Ot[e.type];
  t && t(e);
}
function It(e) {
  const t = {
    ...e
  };
  return wt(t), t;
}
const At = /^(1|2)\d{3}[.\-/]\d{1,2}[.\-/]\d{1,2}$/, ie = {
  string: (e) => typeof e == "string",
  number: (e) => !isNaN(Number(e)),
  array: (e) => Array.isArray(e),
  date: (e) => !isNaN(Number(e)) || At.test(e),
  email: (e) => typeof e == "string" && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(e),
  tel: (e) => typeof e == "string" && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(e),
  url: (e) => typeof e == "string" && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e)
}, Pt = lt(ie), q = {
  required: (e, t, s) => (s = s || (Array.isArray(e) ? "array" : typeof e), s === "array" && Array.isArray(e) ? e.length > 0 : e !== "" && e !== void 0 && e !== null),
  type: (e, t) => !ie[t] || ie[t](e),
  min: (e, t, s) => (s = s || typeof e, s === "number" || s === "date" ? Number(e) >= t : e.length >= t),
  max: (e, t, s) => (s = s || typeof e, s === "number" || s === "date" ? Number(e) <= t : e.length <= t),
  len: (e, t, s) => {
    s = s || typeof e;
    let l = e;
    return l.length === void 0 && (l = s === "object" ? Object.keys(l) : String(l)), l.length === t;
  },
  notWhitespace: (e, t, s) => !/^\s+$/.test(e),
  pattern: (e, t, s) => t.test(e),
  custom: (e, t, s) => t(e)
}, Dt = lt(q);
function Ft(...e) {
  const t = "validator", s = this._base.config.globalProperties, l = s.$cubeLang, a = s.$cubeMessages[l][t];
  typeof e[0] == "string" && (e[0] = {
    [e[0]]: e[1]
  }), de(a, e[0]);
}
const Bt = {
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
}, Ht = {
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
}, Rt = function(e, t) {
};
function Ut(e, t, s, l) {
  const a = {
    year: "(Y+)",
    month: "(M+)",
    date: "(D+)",
    hour: "(h+)",
    minute: "(m+)",
    second: "(s+)",
    quarter: "(q+)",
    millisecond: "(S)"
  };
  if (new RegExp(a[e], l).test(t)) {
    const i = e === "year" ? s.toString().substr(4 - RegExp.$1.length) : RegExp.$1.length === 1 ? s : Lt(s);
    t = t.replace(RegExp.$1, i);
  }
  return t;
}
function Lt(e) {
  return ("00" + e).substr(("" + e).length);
}
function jt(e, t) {
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
  for (const l in s)
    t = Ut(l, t, s[l].value, s[l].regExpAttributes);
  return t;
}
let R;
const Ee = "zh-CN", U = {
  name: "locale",
  install(e) {
    U.installed || (R = e.config.globalProperties, R.$cubeLang = Ee, R.$cubeMessages = { [Ee]: Bt, "en-US": Ht }, U.installed = !0);
  },
  use(e, t) {
    R.$cubeLang = e;
    const s = R.$cubeMessages;
    e in s || (s[[e]] = t);
  },
  helpers: {
    toLocaleDateString(e, t) {
      const s = kt(e) ? e : e.replace(/-/g, "/"), l = new Date(s);
      return W(t) ? l.toDateString() : jt(l, t);
    }
  },
  addHelper(e, t) {
    e in U.helpers || (U.helpers[e] = t);
  }
}, B = U, qt = "Translation is not registered correctly, you can call Locale.use() to install it.", he = {
  computed: {
    $t() {
      const e = this.$cubeLang, t = this.$cubeMessages[e];
      return W(t) ? (Rt(qt), "") : (s) => Ct(t, s);
    }
  },
  beforeCreate() {
    B.install(this._.appContext.app);
  }
};
B.localeMixin = he;
const Gt = /\{\{((?:.|\n)+?)\}\}/g, Kt = /['"]/g, ee = -1;
function zt(e, t = "") {
  return e.replace(Gt, (s, l, a) => {
    const i = l.split("|").slice(1).map((o) => o.trim()), n = i.length;
    let r = t;
    return n && i.forEach((o) => {
      let { fnName: h, args: p } = Wt(o);
      p.unshift(r), A(B.helpers[h]) ? r = B.helpers[h].apply(null, p) : r = "";
    }), r;
  });
}
function Wt(e) {
  const t = e.indexOf("("), s = e.indexOf(")");
  let l = "", a = [];
  return t === ee ? (a = [], l = e) : t !== ee && s !== ee && (a = e.slice(t + 1, s).split(",").map((n) => n.trim().replace(Kt, "")), l = e.slice(0, t)), { fnName: l, args: a };
}
const b = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, a] of t)
    s[l] = a;
  return s;
}, Yt = "cube-validator", xe = "update:modelValue", Ce = "validating", Ne = "validated", Te = "msg-click", Xt = {
  name: Yt,
  mixins: [he],
  emits: [xe, Ce, Ne, Te],
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
      return W(e) ? void 0 : !e;
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
      const t = ce(e);
      if (t && (e = t.resolve), this.isDisabled)
        return e && e(this.valid), t;
      this._validateCount++;
      const s = this._validateCount, l = this.targetModel, a = this.rules, i = a.type, n = [];
      let r = !0;
      if (a.required || (r = q.required(l, !0, i)), r)
        for (const o in a) {
          const h = a[o];
          let p;
          A(h) ? p = h(l, a[o], i) : p = !q[o] || q[o](l, a[o], i), n.push((x) => {
            const S = (y) => {
              x({
                key: o,
                valid: y === !0,
                ret: y
              });
            }, _ = (y) => {
              x({
                key: o,
                valid: !1,
                ret: y
              });
            };
            typeof p == "object" && A(p.then) ? p.then(S).catch(_) : A(p) ? p(S, _) : x({
              key: o,
              valid: p === !0,
              ret: p
            });
          });
        }
      return this._checkTasks(n, s, e), t;
    },
    _checkTasks(e, t, s) {
      const l = this.rules;
      let a = !0;
      const i = {};
      let n = !0;
      this.validating = !0;
      const r = this.targetModel;
      Et(e, (o) => {
        this._validateCount === t && (this.validating = !1, o.forEach(({ key: h, valid: p, ret: x }) => {
          const S = this.messages[h] ? A(this.messages[h]) ? this.messages[h](x, p) : this.messages[h] : this.findMessage(h, l[h], l.type, r);
          a && !p && (a = !1, this.msg = S), i[h] = {
            valid: p,
            invalid: !p,
            message: S
          };
        }), n || this.$emit(Ne, a), this._updateModel(a, i), s && s(this.valid));
      }), this.validating && (n = !1, this.$emit(Ce), this.emitValidChange(void 0));
    },
    _updateModel(e, t) {
      this.validated = !0, this.result = t, t.required && t.required.invalid && (this.msg = t.required.message), e && (this.msg = ""), this.emitValidChange(e);
    },
    reset() {
      this._validateCount++, this.validating = !1, this.dirty = !1, this.result = {}, this.msg = "", this.validated = !1, this.emitValidChange(void 0);
    },
    emitValidChange(e) {
      const t = this.valid;
      this.valid = e, t !== e && this.$emit(xe, e);
    },
    msgClickHandler() {
      this.$emit(Te);
    },
    findMessage(e, t, s, l) {
      const a = this.$cubeMessages, i = this.$cubeLang, n = "validator", r = a[i][n][e];
      return r ? Tt(r) ? r : A(r) ? r(t) : (r[s] || (s = Nt(l) ? "array" : typeof l), typeof r[s] == "function" ? r[s](t) : zt(r[s], t)) : "";
    }
  }
}, Zt = { class: "cube-validator-content" }, Jt = { class: "cube-validator-msg-def" };
function Qt(e, t, s, l, a, i) {
  return u(), d("div", {
    class: f(["cube-validator", i.containerClass])
  }, [
    c("div", Zt, [
      m(e.$slots, "default")
    ]),
    c("div", {
      class: "cube-validator-msg",
      onClick: t[0] || (t[0] = (...n) => i.msgClickHandler && i.msgClickHandler(...n))
    }, [
      m(e.$slots, "message", {
        message: a.msg,
        dirty: a.dirty,
        validated: a.validated,
        validating: a.validating,
        result: a.result
      }, () => [
        c("span", Jt, V(i.dirtyOrValidated ? a.msg : ""), 1)
      ])
    ])
  ], 2);
}
const C = /* @__PURE__ */ b(Xt, [["render", Qt]]), es = {
  STANDARD: "standard",
  CLASSIC: "classic",
  FRESH: "fresh"
}, P = es, ts = {
  checkbox() {
    return !1;
  },
  select() {
    return null;
  }
};
function ss(e) {
  const t = ts[e];
  return t && t();
}
const ot = {
  data() {
    return {
      validating: !1,
      pending: !1,
      originValid: void 0
    };
  },
  computed: {
    valid() {
      const e = this.originValid, t = this.pending, s = this.validating;
      return t || s ? void 0 : e;
    },
    invalid() {
      const e = this.valid;
      return e === void 0 ? e : !e;
    }
  }
};
const is = "cube-button", as = {
  name: is,
  emits: ["click"],
  props: {
    icon: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    inline: {
      type: Boolean,
      default: !1
    },
    primary: {
      type: Boolean,
      default: !1
    },
    outline: {
      type: Boolean,
      default: !1
    },
    light: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "button"
    }
  },
  computed: {
    btnClass() {
      return {
        "cube-btn_active": this.active,
        "cube-btn_disabled": this.disabled,
        "cube-btn-inline": this.inline,
        "cube-btn-primary": this.primary,
        "cube-btn-outline": this.outline,
        "cube-btn-outline-primary": this.outline && this.primary,
        "cube-btn-light": this.light
      };
    }
  },
  methods: {
    handleClick(e) {
      if (this.disabled) {
        e.preventDefault(), e.stopPropagation();
        return;
      }
      this.$emit("click", e);
    }
  }
}, ls = ["type"];
function ns(e, t, s, l, a, i) {
  return u(), d("button", {
    class: f(["cube-btn", i.btnClass]),
    type: s.type,
    onClick: t[0] || (t[0] = (...n) => i.handleClick && i.handleClick(...n))
  }, [
    s.icon ? (u(), d("i", {
      key: 0,
      class: f(s.icon)
    }, null, 2)) : D("", !0),
    m(e.$slots, "default")
  ], 10, ls);
}
const rs = /* @__PURE__ */ b(as, [["render", ns]]);
const os = "cube-checkbox", ke = "update:modelValue", us = "checked", ds = "cancel-checked", cs = {
  name: os,
  emits: [ke],
  props: {
    modelValue: {
      type: [Boolean, String]
    },
    label: {
      type: [Boolean, String]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    option: {
      type: [Boolean, String, Object],
      default() {
        return {
          _def_option: !0
        };
      }
    },
    position: {
      type: String,
      default: "left"
    },
    shape: {
      type: String,
      default: "circle"
    },
    hollowStyle: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    const e = this.$parent, t = !!e && e.$data._checkboxGroup, s = t && (e.$props.horizontal || e.$props.colNum > 1);
    return {
      isInGroup: t,
      isInHorizontalGroup: s
    };
  },
  computed: {
    computedOption() {
      let e = this.option;
      const t = this.label, s = this.disabled;
      return e._def_option === !0 ? e = {
        label: t,
        value: t,
        disabled: s
      } : typeof e == "string" && (e = {
        label: e,
        value: e,
        disabled: !1
      }), e;
    },
    checkValue: {
      get() {
        return this.isInGroup ? this.$parent.modelValue.indexOf(this.computedOption.value) > -1 : !!this.modelValue;
      },
      set(e) {
        const t = this.computedOption.value, s = t && e ? t : e;
        if (this.$emit(ke, s), this.isInGroup) {
          e = !this.checkValue;
          const l = e ? us : ds;
          this.$parent.checkEvent(l, t || e);
        }
      }
    },
    _containerClass() {
      return {
        "cube-checkbox-hollow": this.hollowStyle,
        "cube-checkbox_checked": this.checkValue,
        "cube-checkbox_disabled": this.computedOption.disabled,
        "border-right-1px": this.isInHorizontalGroup
      };
    },
    _wrapClass() {
      if (this.isInGroup && !this.isInHorizontalGroup)
        return "border-bottom-1px";
    },
    isSquare() {
      return this.shape === "square" || this.hollowStyle;
    },
    _borderIconClass() {
      return this.isSquare ? "cubeic-square-border" : "cubeic-round-border";
    },
    _rightIconClass() {
      return this.isSquare ? "cubeic-square-right" : "cubeic-right";
    }
  }
}, hs = ["data-pos"], fs = ["disabled"], ms = { class: "cube-checkbox-label" };
function ps(e, t, s, l, a, i) {
  return u(), d("div", {
    class: f(["cube-checkbox", i._containerClass]),
    "data-pos": s.position
  }, [
    c("label", {
      class: f(["cube-checkbox-wrap", i._wrapClass])
    }, [
      k(c("input", {
        class: "cube-checkbox-input",
        type: "checkbox",
        disabled: i.computedOption.disabled,
        "onUpdate:modelValue": t[0] || (t[0] = (n) => i.checkValue = n)
      }, null, 8, fs), [
        [it, i.checkValue]
      ]),
      c("span", {
        class: f(["cube-checkbox-ui", i._borderIconClass])
      }, [
        c("i", {
          class: f(i._rightIconClass)
        }, null, 2)
      ], 2),
      c("span", ms, [
        m(e.$slots, "default", {}, () => [
          at(V(i.computedOption.label), 1)
        ])
      ])
    ], 2)
  ], 10, hs);
}
const ut = /* @__PURE__ */ b(cs, [["render", ps]]), bs = vt("flexBasis"), dt = {
  props: {
    colNum: {
      type: Number,
      default: 1
    }
  },
  watch: {
    colNum: {
      immediate: !0,
      handler(e) {
        if (e <= 1)
          return "";
        this.$nextTick(() => {
          let t = 100 / e + "%";
          Array.prototype.forEach.call(this.$refs.group.children, (s) => {
            s.style[bs] = t;
          });
        });
      }
    }
  }
};
const _s = "cube-checkbox-group", $e = "update:modelValue", gs = "checked", ys = "cancel-checked", vs = {
  name: _s,
  mixins: [dt],
  emits: [$e],
  props: {
    modelValue: {
      type: Array
    },
    horizontal: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "circle"
    },
    position: {
      type: String,
      default: "left"
    },
    hollowStyle: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1 / 0
    }
  },
  data() {
    return {
      _value: [],
      _checkboxGroup: !0
    };
  },
  computed: {
    groupClass() {
      if (!this.horizontal || this.colNum > 1)
        return "border-top-1px border-bottom-1px";
    }
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler(e, t) {
        this._value = this.modelValue.concat();
      }
    }
  },
  components: {
    CubeCheckbox: ut
  },
  methods: {
    checkEvent(e, t) {
      if (e === gs && this._value.length < this.max && this._value.indexOf(t) === -1 && this._value.push(t), e === ys) {
        const s = this._value.indexOf(t);
        this._value.length > this.min && s > -1 && this._value.splice(s, 1);
      }
      this.$emit($e, this._value);
    }
  }
}, Vs = ["data-horz", "data-col"];
function Es(e, t, s, l, a, i) {
  const n = E("cube-checkbox");
  return u(), d("div", {
    class: f(["cube-checkbox-group", i.groupClass]),
    ref: "group",
    "data-horz": s.horizontal,
    "data-col": e.colNum > 1
  }, [
    m(e.$slots, "default", {}, () => [
      (u(!0), d($, null, w(s.options, (r, o) => (u(), v(n, {
        key: o,
        option: r,
        shape: s.shape,
        position: s.position,
        "hollow-style": s.hollowStyle
      }, null, 8, ["option", "shape", "position", "hollow-style"]))), 128))
    ])
  ], 10, Vs);
}
const xs = /* @__PURE__ */ b(vs, [["render", Es]]);
const Cs = "cube-checker-item", Ns = {
  name: Cs,
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
      const e = this.$parent.isRadio, t = this.$parent.currentValue, s = this.option.value;
      return e ? t === s : t.indexOf(s) >= 0;
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
}, Ts = ["innerHTML"];
function ks(e, t, s, l, a, i) {
  return u(), d("li", {
    class: f(["cube-checker-item", { "cube-checker-item_active": i.isActive, "cube-checker-item_disabled": i.isDisabled }]),
    onClick: t[0] || (t[0] = (...n) => i.clickHandler && i.clickHandler(...n))
  }, [
    m(e.$slots, "default", {}, () => [
      c("span", {
        innerHTML: s.option.text
      }, null, 8, Ts)
    ])
  ], 2);
}
const $s = /* @__PURE__ */ b(Ns, [["render", ks]]), Ss = "cube-checker", Se = "update:modelValue", Ms = {
  name: Ss,
  emits: [Se],
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
      this.$emit(Se, e);
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
      const t = e.value, s = this.currentValue, l = s.length, a = this.min, i = this.max, n = s.indexOf(t);
      n > -1 ? l > a && s.splice(n, 1) : l < i && s.push(t);
    }
  },
  components: {
    CubeCheckerItem: $s
  }
}, Os = { class: "cube-checker" };
function ws(e, t, s, l, a, i) {
  const n = E("cube-checker-item");
  return u(), d("ul", Os, [
    m(e.$slots, "default", {}, () => [
      (u(!0), d($, null, w(s.options, (r, o) => (u(), v(n, {
        option: r,
        key: o
      }, null, 8, ["option"]))), 128))
    ])
  ]);
}
const Is = /* @__PURE__ */ b(Ms, [["render", ws]]), Me = "change", ct = {
  emits: [Me],
  methods: {
    changeHandler(e) {
      this.$emit(Me, e);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    }
  }
};
const As = "cube-input", Oe = "update:modelValue", we = "blur", Ie = "focus", Ps = {
  name: As,
  mixins: [ct],
  emits: [Oe, we, Ie],
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: [Boolean, String],
      default: !1
    },
    name: String,
    id: String,
    form: String,
    minlength: Number,
    maxlength: Number,
    resize: String,
    min: Number,
    max: Number,
    step: Number,
    tabindex: String,
    pattern: String,
    clearable: {
      type: [Boolean, Object],
      default: !1
    },
    eye: {
      type: [Boolean, Object],
      default: !1
    }
  },
  data() {
    return {
      inputValue: this.modelValue,
      isFocus: !1,
      formatedClearable: {
        visible: !1,
        blurHidden: !0
      },
      formatedEye: {
        open: !1,
        reverse: !1
      }
    };
  },
  computed: {
    _type() {
      const e = this.type;
      return e === "password" && this.eye && this.pwdVisible ? "text" : e;
    },
    _showClear() {
      let e = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled;
      return this.formatedClearable.blurHidden && !this.isFocus && (e = !1), e;
    },
    _showPwdEye() {
      return this.type === "password" && this.eye && !this.disabled;
    },
    pwdVisible() {
      const e = this.formatedEye;
      return e.reverse ? !e.open : e.open;
    },
    eyeClass() {
      return this.formatedEye.open ? "cubeic-eye-visible" : "cubeic-eye-invisible";
    }
  },
  watch: {
    modelValue(e) {
      this.inputValue = e;
    },
    inputValue(e) {
      this.$emit(Oe, e);
    },
    clearable: {
      handler() {
        this.formatClearable();
      },
      deep: !0,
      immediate: !0
    },
    eye: {
      handler() {
        this.formateEye();
      },
      deep: !0,
      immediate: !0
    }
  },
  methods: {
    formatClearable() {
      typeof this.clearable == "boolean" ? this.formatedClearable.visible = this.clearable : Object.assign(this.formatedClearable, this.clearable);
    },
    formateEye() {
      typeof this.eye == "boolean" ? this.formatedEye.open = this.eye : Object.assign(this.formatedEye, this.eye);
    },
    handleFocus(e) {
      this.$emit(Ie, e), this.isFocus = !0;
    },
    handleBlur(e) {
      this.$emit(we, e), this.isFocus = !1;
    },
    handleClear(e) {
      this.inputValue = "", this.$refs.input.focus();
    },
    handlePwdEye() {
      this.formatedEye.open = !this.formatedEye.open;
    }
  }
}, Ds = {
  key: 0,
  class: "cube-input-prepend"
}, Fs = ["type", "disabled", "readonly", "autocomplete", "autofocus"], Bs = {
  key: 1,
  class: "cube-input-append"
}, Hs = /* @__PURE__ */ c("i", { class: "cubeic-wrong" }, null, -1), Rs = [
  Hs
];
function Us(e, t, s, l, a, i) {
  return u(), d("div", {
    class: f(["cube-input", { "cube-input_active": a.isFocus }])
  }, [
    e.$slots.prepend ? (u(), d("div", Ds, [
      m(e.$slots, "prepend")
    ])) : D("", !0),
    k(c("input", L({
      class: "cube-input-field",
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => a.inputValue = n)
    }, e.$props, {
      type: i._type,
      disabled: s.disabled,
      readonly: s.readonly,
      autocomplete: s.autocomplete,
      autofocus: s.autofocus,
      onFocus: t[1] || (t[1] = (...n) => i.handleFocus && i.handleFocus(...n)),
      onBlur: t[2] || (t[2] = (...n) => i.handleBlur && i.handleBlur(...n)),
      onChange: t[3] || (t[3] = (...n) => e.changeHandler && e.changeHandler(...n))
    }), null, 16, Fs), [
      [pt, a.inputValue]
    ]),
    e.$slots.append || i._showClear || i._showPwdEye ? (u(), d("div", Bs, [
      i._showClear ? (u(), d("div", {
        key: 0,
        class: "cube-input-clear",
        onTouchend: t[4] || (t[4] = (...n) => i.handleClear && i.handleClear(...n))
      }, Rs, 32)) : D("", !0),
      i._showPwdEye ? (u(), d("div", {
        key: 1,
        class: "cube-input-eye",
        onClick: t[5] || (t[5] = (...n) => i.handlePwdEye && i.handlePwdEye(...n))
      }, [
        c("i", {
          class: f(i.eyeClass)
        }, null, 2)
      ])) : D("", !0),
      m(e.$slots, "append")
    ])) : D("", !0)
  ], 2);
}
const Ls = /* @__PURE__ */ b(Ps, [["render", Us]]);
const js = "cube-radio", Ae = "update:modelValue", qs = {
  name: js,
  inject: {
    radioGroup: {
      default: null
    }
  },
  emits: [Ae],
  props: {
    modelValue: [String, Number],
    option: {
      type: [String, Object],
      required: !0
    },
    position: {
      type: String,
      default: "left"
    },
    hollowStyle: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      radioValue: this.modelValue
    };
  },
  created() {
    const e = this.radioGroup;
    e && e.radioValue !== void 0 && (this.radioValue = e.radioValue, this._cancelWatchGroup = this.$watch(
      () => e.radioValue,
      (t) => {
        this.radioValue = t;
      }
    ));
  },
  beforeUnmount() {
    this._cancelWatchGroup && this._cancelWatchGroup(), this._cancelWatchGroup = null;
  },
  watch: {
    modelValue(e) {
      this.radioValue = e;
    },
    radioValue(e) {
      typeof this.modelValue == "number" && (e = Number(e)), this.$emit(Ae, e), this.radioGroup && (this.radioGroup.radioValue = e);
    }
  },
  computed: {
    computedOption() {
      const e = this.option;
      return typeof e == "string" ? {
        value: e,
        label: e
      } : e;
    },
    _containerClass() {
      const e = this.computedOption;
      return {
        "cube-radio-hollow": this.hollowStyle,
        "cube-radio_selected": this.radioValue === e.value,
        "cube-radio_disabled": e.disabled,
        "border-right-1px": this.$parent.horizontal
      };
    },
    _wrapClass() {
      let e = this.$parent;
      if (!(e.horizontal || e.$props.colNum > 1))
        return "border-bottom-1px";
    }
  }
}, Gs = ["data-pos"], Ks = ["disabled", "value"], zs = /* @__PURE__ */ c("span", { class: "cube-radio-ui cubeic-round-border" }, [
  /* @__PURE__ */ c("i")
], -1), Ws = { class: "cube-radio-label" };
function Ys(e, t, s, l, a, i) {
  return u(), d("div", {
    class: f(["cube-radio", i._containerClass]),
    "data-pos": s.position
  }, [
    c("label", {
      class: f(["cube-radio-wrap", i._wrapClass])
    }, [
      k(c("input", {
        class: "cube-radio-input",
        type: "radio",
        disabled: s.option.disabled,
        "onUpdate:modelValue": t[0] || (t[0] = (n) => a.radioValue = n),
        value: i.computedOption.value
      }, null, 8, Ks), [
        [bt, a.radioValue]
      ]),
      zs,
      m(e.$slots, "default", {}, () => [
        c("span", Ws, V(i.computedOption.label), 1)
      ])
    ], 2)
  ], 10, Gs);
}
const ht = /* @__PURE__ */ b(qs, [["render", Ys]]);
const Xs = "cube-radio-group", Pe = "update:modelValue", Zs = {
  name: Xs,
  mixins: [dt],
  provide() {
    return {
      radioGroup: this
    };
  },
  emits: [Pe],
  props: {
    modelValue: [String, Number],
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    position: {
      type: String,
      default: "left"
    },
    horizontal: {
      type: Boolean,
      default: !1
    },
    hollowStyle: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      radioValue: this.modelValue
    };
  },
  watch: {
    modelValue(e) {
      this.radioValue = e;
    },
    radioValue(e) {
      this.$emit(Pe, e);
    }
  },
  computed: {
    _groupClass() {
      if (!this.horizontal)
        return "border-top-1px border-bottom-1px";
    }
  },
  components: {
    CubeRadio: ht
  }
}, Js = ["data-horz", "data-col"];
function Qs(e, t, s, l, a, i) {
  const n = E("cube-radio");
  return u(), d("div", {
    class: f(["cube-radio-group", i._groupClass]),
    ref: "group",
    "data-horz": s.horizontal,
    "data-col": e.colNum > 1
  }, [
    m(e.$slots, "default", {}, () => [
      (u(!0), d($, null, w(s.options, (r, o) => (u(), v(n, {
        key: o,
        option: r,
        position: s.position,
        "hollow-style": s.hollowStyle,
        modelValue: a.radioValue,
        "onUpdate:modelValue": t[0] || (t[0] = (h) => a.radioValue = h)
      }, null, 8, ["option", "position", "hollow-style", "modelValue"]))), 128))
    ])
  ], 10, Js);
}
const ei = /* @__PURE__ */ b(Zs, [["render", Qs]]);
const ti = "cube-rate-item", si = {
  name: ti,
  props: {
    index: {
      type: Number,
      default: 0
    }
  }
}, ii = /* @__PURE__ */ c("div", { class: "cube-rate-item-def" }, null, -1);
function ai(e, t, s, l, a, i) {
  return u(), d("li", {
    class: f(["cube-rate-item", { "cube-rate-item_active": s.index <= e.$parent.tempValue }])
  }, [
    m(e.$slots, "default", {}, () => [
      ii
    ])
  ], 2);
}
const li = /* @__PURE__ */ b(si, [["render", ai]]);
const ni = "cube-rate", De = "update:modelValue", I = "mouse", ri = {
  name: ni,
  emits: [De],
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    justify: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      tempValue: this.modelValue
    };
  },
  created() {
    this.mousePressed = !1;
  },
  computed: {
    rateClass() {
      return this.justify && "cube-rate-justify";
    }
  },
  watch: {
    modelValue(e) {
      e !== this.tempValue && (this.tempValue = e);
    }
  },
  methods: {
    handleStart(e) {
      if (!this.disabled) {
        e.type.indexOf(I) > -1 && (this.mousePressed = !0, document.addEventListener("mouseup", this.handleEnd), document.addEventListener("mousemove", this.handleMove));
        const t = this.$refs.rateContainer.getBoundingClientRect();
        this.left = t.left, this.containerWidth = t.width;
      }
    },
    handleMove(e) {
      !this.disabled && (e.type.indexOf(I) === -1 || this.mousePressed) && this.computeTempValue(e.type.indexOf(I) === -1 ? e.touches[0] : e);
    },
    handleEnd(e) {
      !this.disabled && (e.type.indexOf(I) === -1 || this.mousePressed) && (e.type.indexOf(I) > -1 && (this.mousePressed = !1, document.removeEventListener("mouseup", this.handleEnd), document.removeEventListener("mousemove", this.handleMove)), this.computeTempValue(e.type.indexOf(I) > -1 ? e : e.changedTouches[0]), this.$emit(De, this.tempValue));
    },
    computeTempValue(e) {
      let t = Math.ceil((e.clientX - this.left) / this.containerWidth * this.max);
      t > 0 && t <= this.max ? this.tempValue = t : t <= 0 ? this.tempValue = 0 : this.tempValue = this.max;
    }
  },
  components: {
    CubeRateItem: li
  }
};
function oi(e, t, s, l, a, i) {
  const n = E("cube-rate-item");
  return u(), d("ul", {
    ref: "rateContainer",
    class: f(["cube-rate", i.rateClass]),
    onTouchstart: t[0] || (t[0] = M((...r) => i.handleStart && i.handleStart(...r), ["stop"])),
    onTouchmove: t[1] || (t[1] = M((...r) => i.handleMove && i.handleMove(...r), ["stop", "prevent"])),
    onTouchend: t[2] || (t[2] = M((...r) => i.handleEnd && i.handleEnd(...r), ["stop"])),
    onMousedown: t[3] || (t[3] = M((...r) => i.handleStart && i.handleStart(...r), ["stop"])),
    onMousemove: t[4] || (t[4] = M((...r) => i.handleMove && i.handleMove(...r), ["stop"])),
    onMouseup: t[5] || (t[5] = M((...r) => i.handleEnd && i.handleEnd(...r), ["stop"]))
  }, [
    m(e.$slots, "default", {}, () => [
      (u(!0), d($, null, w(s.max, (r) => (u(), v(n, {
        key: r,
        index: r
      }, null, 8, ["index"]))), 128))
    ])
  ], 34);
}
const ui = /* @__PURE__ */ b(ri, [["render", oi]]);
const di = "cube-select", Fe = "change", Be = "update:modelValue", He = "picker-show", Re = "picker-hide", ci = {
  name: di,
  mixins: [he],
  emits: [Fe, Be, He, Re],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: null,
    placeholder: {
      type: String,
      default: ""
    },
    autoPop: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    cancelTxt: {
      type: String,
      default: ""
    },
    confirmTxt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      active: !1,
      picker: null
    };
  },
  computed: {
    adaptOptions() {
      return [this.options.map((e) => (typeof e != "object" && (e = {
        value: e,
        text: e
      }), e))];
    },
    valueIndex() {
      const e = this.modelValue, t = Vt(this.adaptOptions[0], (s) => s.value === e);
      return this.picker && this.picker.setData(this.adaptOptions, t !== -1 ? [t] : [0]), t;
    },
    selectedIndex() {
      return this.valueIndex !== -1 ? [this.valueIndex] : [0];
    },
    selectedText() {
      return this.valueIndex !== -1 ? this.adaptOptions[0][this.valueIndex].text : "";
    },
    _placeholder() {
      return this.placeholder || this.$t("selectText");
    },
    _title() {
      return this.title || this.$t("selectText");
    },
    _cancelTxt() {
      return this.cancelTxt || this.$t("cancel");
    },
    _confirmTxt() {
      return this.confirmTxt || this.$t("ok");
    }
  },
  created() {
    this.picker = this.$createPicker({
      title: this._title,
      data: this.adaptOptions,
      selectedIndex: this.selectedIndex,
      cancelTxt: this._cancelTxt,
      confirmTxt: this._confirmTxt,
      onSelect: this.selectHandler,
      onCancel: this.hided
    }), this.autoPop && this.showPicker();
  },
  methods: {
    showPicker() {
      this.disabled || (this.picker.show(), this.active = !0, this.$emit(He));
    },
    hided() {
      this.active = !1, this.$emit(Re);
    },
    selectHandler(e, t, s) {
      this.hided(), e[0] !== this.modelValue && (this.$emit(Be, e[0]), this.$emit(Fe, e[0], t[0], s[0]));
    }
  }
}, hi = {
  key: 0,
  class: "cube-select-text"
}, fi = {
  key: 1,
  class: "cube-select-placeholder"
}, mi = /* @__PURE__ */ c("i", { class: "cube-select-icon" }, null, -1);
function pi(e, t, s, l, a, i) {
  return u(), d("div", {
    class: f(["cube-select", { "cube-select_active": a.active, "cube-select_disabled": s.disabled }]),
    onClick: t[0] || (t[0] = (...n) => i.showPicker && i.showPicker(...n))
  }, [
    i.selectedText ? (u(), d("span", hi, V(i.selectedText), 1)) : (u(), d("span", fi, V(i._placeholder), 1)),
    mi
  ], 2);
}
const bi = /* @__PURE__ */ b(ci, [["render", pi]]);
const _i = "cube-switch", Ue = "update:modelValue", gi = {
  name: _i,
  emits: [Ue],
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
      this.$emit(Ue, e);
    }
  }
}, yi = { class: "cube-switch" }, vi = ["disabled"], Vi = /* @__PURE__ */ c("i", { class: "cube-switch-ui" }, null, -1), Ei = { class: "cube-switch-label" };
function xi(e, t, s, l, a, i) {
  return u(), d("div", yi, [
    k(c("input", {
      class: "cube-switch-input",
      type: "checkbox",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => a.checkboxValue = n),
      disabled: s.disabled
    }, null, 8, vi), [
      [it, a.checkboxValue]
    ]),
    Vi,
    c("span", Ei, [
      m(e.$slots, "default")
    ])
  ]);
}
const Ci = /* @__PURE__ */ b(gi, [["render", xi]]);
const Ni = "cube-textarea", Le = "update:modelValue", Ti = {
  negative: !0,
  remain: !0
}, ki = {
  name: Ni,
  mixins: [ct],
  data() {
    return {
      textareaValue: this.modelValue,
      expanded: this.autoExpand ? !!this.modelValue : !1,
      isFocus: !1
    };
  },
  emits: [Le, "focus", "blur", "change"],
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    cols: Number,
    rows: Number,
    readonly: Boolean,
    wrap: String,
    required: Boolean,
    placeholder: {
      type: String,
      default: "please type here..."
    },
    dirname: String,
    form: String,
    name: String,
    autofocus: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: 60
    },
    indicator: {
      type: [Boolean, Object],
      default: !0
    },
    autoExpand: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    indicatorConf() {
      let e = this.indicator;
      return typeof e == "boolean" && (e = {}), Object.assign({}, Ti, e);
    },
    count() {
      return this.textareaValue.length;
    },
    remain() {
      let e = this.maxlength - this.count;
      return !this.indicatorConf.negative && e < 0 && (e = 0), e;
    }
  },
  watch: {
    modelValue(e) {
      this.textareaValue = e;
    },
    textareaValue(e) {
      this.$emit(Le, e), !this.isFocus && this.expanded && (this.expanded = !1);
    }
  },
  methods: {
    handleFocus(e) {
      this.$emit("focus", e), this.expanded = !0, this.isFocus = !0;
    },
    handleBlur(e) {
      this.$emit("blur", e), this.textareaValue.length === 0 && (this.expanded = !1), this.isFocus = !1;
    }
  }
}, $i = ["placeholder", "maxlength", "disabled"];
function Si(e, t, s, l, a, i) {
  return u(), d("div", {
    class: f(["cube-textarea-wrapper", { "cube-textarea_expanded": a.expanded, "cube-textarea_active": a.isFocus }])
  }, [
    k(c("textarea", L({
      ref: "input",
      class: "cube-textarea",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => a.textareaValue = n)
    }, e.$props, {
      placeholder: s.placeholder,
      maxlength: s.maxlength,
      disabled: s.disabled,
      onFocus: t[1] || (t[1] = (...n) => i.handleFocus && i.handleFocus(...n)),
      onBlur: t[2] || (t[2] = (...n) => i.handleBlur && i.handleBlur(...n)),
      onChange: t[3] || (t[3] = (...n) => e.changeHandler && e.changeHandler(...n))
    }), `
    `, 16, $i), [
      [_t, a.textareaValue]
    ]),
    s.indicator ? k((u(), d("span", {
      key: 0,
      class: "cube-textarea-indicator"
    }, V(i.indicatorConf.remain ? i.remain : i.count), 513)), [
      [oe, a.expanded]
    ]) : D("", !0)
  ], 2);
}
const Mi = /* @__PURE__ */ b(ki, [["render", Si]]), ft = {
  props: {
    multiple: {
      type: Boolean,
      default: !0
    },
    accept: {
      type: String,
      default: "image/*"
    }
  }
};
const Oi = "cube-upload-btn", wi = {
  name: Oi,
  mixins: [ft],
  methods: {
    changeHandler(e) {
      const t = e.currentTarget, s = t.files;
      s && (this.$parent.addFiles(s), t.value = null);
    }
  }
}, Ii = { class: "cube-upload-btn" }, Ai = /* @__PURE__ */ c("div", { class: "cube-upload-btn-def" }, [
  /* @__PURE__ */ c("i")
], -1), Pi = ["multiple", "accept"];
function Di(e, t, s, l, a, i) {
  return u(), d("div", Ii, [
    m(e.$slots, "default", {}, () => [
      Ai
    ]),
    c("input", {
      class: "cube-upload-input",
      type: "file",
      onChange: t[0] || (t[0] = (...n) => i.changeHandler && i.changeHandler(...n)),
      multiple: e.multiple,
      accept: e.accept
    }, null, 40, Pi)
  ]);
}
const Fi = /* @__PURE__ */ b(wi, [["render", Di]]), ae = ue ? window.URL || window.webkitURL || window.mozURL : null, le = "ready", ne = "uploading", T = "error", G = "success";
function Bi(e, t, s, l) {
  const a = [], i = e.length;
  let n = 0;
  for (let r = 0; r < i; r++)
    Hi(e[r], r, t, function(o, h) {
      if (n++, a[h] = o, s(o, h), n === i)
        return l(a);
    });
}
function Hi(e, t, s, l) {
  s(e, function(a) {
    const i = Ri(a.name, a.size, le, 0, a);
    l(i, t);
  });
}
function Ri(e = "", t = 0, s = "", l = 0, a = null) {
  const i = a && a.base64 || "", n = i ? "" : Ui(a);
  return {
    name: e,
    size: t,
    url: n,
    base64: i,
    status: s,
    progress: l,
    file: a
  };
}
function Ui(e) {
  return e && ae ? ae.createObjectURL(e) : "";
}
function te(e, ...t) {
  return typeof e == "function" ? e.apply(this, t) : e;
}
const Li = "cube-upload-file", ji = {
  success: "cubeic-right",
  error: "cubeic-warn"
}, je = "click", qi = {
  name: Li,
  props: {
    file: {
      type: Object,
      required: !0
    }
  },
  emits: [je],
  computed: {
    fileCls() {
      return `cube-upload-file_${this.file.status}`;
    },
    fileStatusCls() {
      const e = this.file, t = e.status;
      if (e.progress >= 0.01 || t === G || t === T)
        return "cube-upload-file_stat";
    },
    fileStyle() {
      const e = this.file.url || this.file.base64;
      if (e)
        return {
          "background-image": `url("${e}")`
        };
    },
    statusCls() {
      const e = this.file.status;
      return ji[e];
    },
    fileProgress() {
      return this.statusCls ? "100%" : `${Math.min(Math.floor(this.file.progress * 100), 99)}%`;
    }
  },
  methods: {
    clickHandler() {
      this.$emit(je, this.file);
    },
    removeFile() {
      this.$parent.removeFile(this.file);
    }
  }
}, Gi = { class: "cube-upload-file-progress" };
function Ki(e, t, s, l, a, i) {
  return u(), d("div", {
    class: f(["cube-upload-file", i.fileCls]),
    onClick: t[1] || (t[1] = (...n) => i.clickHandler && i.clickHandler(...n))
  }, [
    m(e.$slots, "default", {
      imgStyle: i.fileStyle,
      progress: i.fileProgress
    }, () => [
      c("div", {
        class: "cube-upload-file-def",
        style: gt(i.fileStyle)
      }, [
        c("i", {
          class: "cubeic-wrong",
          onClick: t[0] || (t[0] = M((...n) => i.removeFile && i.removeFile(...n), ["stop"]))
        }),
        c("div", {
          class: f(["cube-upload-file-state", i.fileStatusCls])
        }, [
          c("i", {
            class: f(["cube-upload-file-status", i.statusCls])
          }, null, 2),
          c("span", Gi, V(i.fileProgress), 1)
        ], 2)
      ], 4)
    ])
  ], 2);
}
const zi = /* @__PURE__ */ b(qi, [["render", Ki]]);
function Wi(e, t, s) {
  const {
    target: l,
    headers: a = {},
    data: i = {},
    fileName: n = "file",
    withCredentials: r,
    timeout: o,
    prop: h = "file",
    progressInterval: p = 100,
    checkSuccess: x = function() {
      return !0;
    }
  } = t, S = te(l, e);
  e.progress = 0, e.status = ne;
  const _ = new window.XMLHttpRequest();
  e._xhr = _;
  let y = 0;
  if (_.upload) {
    let g = Date.now();
    _.upload.onprogress = function(N) {
      if (N.total > 0)
        if (y) {
          clearTimeout(y);
          const pe = Date.now() - g;
          pe >= p ? Z() : y = setTimeout(Z, pe);
        } else
          Z(), y = 1;
      function Z() {
        e.progress = N.loaded / N.total, g = Date.now();
      }
    };
  }
  const Y = new window.FormData(), fe = te(i, e);
  Object.keys(fe).forEach((g) => {
    Y.append(g, fe[g]);
  }), Y.append(n, e[h]), _.onload = function() {
    if (_.status < 200 || _.status >= 300) {
      H(T);
      return;
    }
    X();
    const g = e.response;
    if (x.length <= 2) {
      const N = x(g, e);
      H(N ? G : T);
    } else
      x(g, e, (N) => {
        H(N ? G : T);
      });
  }, _.onerror = function() {
    X(), H(T);
  }, _.ontimeout = function() {
    X(), H(T);
  }, _.open("POST", S, !0), r && (_.withCredentials = !0);
  const me = te(a, e);
  Object.keys(me).forEach((g) => {
    _.setRequestHeader(g, me[g]);
  }), o > 0 && (_.timeout = o), _.send(Y);
  function H(g) {
    clearTimeout(y), y = 0, e.progress = 1, e.status = g, s && s(e);
  }
  function X() {
    let g = _.responseText || _.response;
    try {
      g = JSON.parse(g);
    } catch {
    }
    e.response = g, e.responseHeaders = _.getAllResponseHeaders();
  }
}
const Yi = "cube-upload", qe = "update:modelValue", Ge = "files-added", Ke = "file-submitted", ze = "file-removed", We = "file-success", Ye = "file-error", Xe = "file-click", Xi = {
  name: Yi,
  mixins: [ft],
  emits: [qe, Ge, Ke, ze, We, Ye, Xe],
  props: {
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    action: {
      type: [String, Object],
      default: ""
    },
    max: {
      type: Number,
      default: 10
    },
    auto: {
      type: Boolean,
      default: !0
    },
    simultaneousUploads: {
      type: Number,
      default: 1
    },
    processFile: {
      type: Function,
      default: function(e, t) {
        t(e);
      }
    }
  },
  data() {
    return {
      files: this.modelValue,
      paused: !this.auto
    };
  },
  computed: {
    actionOptions() {
      const e = this.action;
      return typeof e == "string" ? e ? {
        target: e
      } : null : e;
    },
    isShowBtn() {
      return this.files.length < this.max;
    }
  },
  watch: {
    modelValue(e) {
      this.files = e;
    },
    files(e) {
      this.$emit(qe, e);
    }
  },
  methods: {
    addFiles(e) {
      this.$emit(Ge, e);
      const t = this.files.length, s = [], l = this.max - t;
      let a = 0, i = e[a];
      for (; s.length < l && i; )
        i.ignore || s.push(i), i = e[++a];
      Bi(s, this.processFile, (n, r) => {
        this.files.push(n), this.$emit(Ke, n);
      }, () => {
        this.$nextTick(() => {
          this.upload();
        });
      });
    },
    removeFile(e) {
      this.$emit(ze, e), e._xhr && e._xhr.abort(), e.url && ae.revokeObjectURL(e.url);
      const t = this.files.indexOf(e);
      this.files.splice(t, 1), this.upload();
    },
    fileClick(e, t) {
      this.$emit(Xe, e, t);
    },
    upload(e) {
      const t = this.actionOptions;
      if (this.paused || !t)
        return;
      const s = this.files.length;
      let l = 0, a = 0;
      for (; a < s && l < this.simultaneousUploads; ) {
        const i = this.files[a], n = i.status;
        n === le || e && n === T && i._retryId !== this.retryId ? (Wi(i, t, (r) => {
          n === T && (r._retryId = this.retryId), this.$emit(r.status === G ? We : Ye, r), this.upload(e);
        }), l++) : n === ne && l++, a++;
      }
    },
    start() {
      this.paused = !1, this.upload();
    },
    pause() {
      this.paused = !0, this.files.forEach((e) => {
        e.status === ne && (e._xhr.abort(), e.status = le);
      });
    },
    retry() {
      this.retryId = Date.now(), this.paused = !1, this.upload(!0);
    }
  },
  components: {
    UploadBtn: Fi,
    UploadFile: zi
  }
}, Zi = { class: "cube-upload" }, Ji = { class: "cube-upload-def clear-fix" };
function Qi(e, t, s, l, a, i) {
  const n = E("upload-file"), r = E("upload-btn");
  return u(), d("div", Zi, [
    m(e.$slots, "default", {}, () => [
      c("div", Ji, [
        (u(!0), d($, null, w(a.files, (o, h) => (u(), v(n, {
          file: o,
          key: h,
          onClick: (p) => i.fileClick(o, h)
        }, null, 8, ["file", "onClick"]))), 128)),
        k(yt(r, {
          multiple: e.multiple,
          accept: e.accept
        }, null, 8, ["multiple", "accept"]), [
          [oe, i.isShowBtn]
        ])
      ])
    ])
  ]);
}
const ea = /* @__PURE__ */ b(Xi, [["render", Qi]]), ta = [
  rs,
  ut,
  xs,
  Is,
  Ls,
  ht,
  ei,
  ui,
  bi,
  Ci,
  Mi,
  ea
], mt = {};
ta.forEach((e) => {
  mt[e.name] = e;
});
const re = mt;
re.CubeValidator = C;
const sa = "cube-form-item", Ze = "focusin", Je = "focusout", ia = {
  name: sa,
  mixins: [ot],
  props: {
    field: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    const e = "value", t = this.field.modelKey, s = t ? this.form.model[t] : null;
    return {
      validatorDisabled: !1,
      validatorModelKey: e,
      modelValue: s,
      validatorModel: {
        [e]: s
      }
    };
  },
  computed: {
    fieldValue() {
      return It(this.field);
    },
    hasRules() {
      return Object.keys(this.fieldValue.rules || {}).length > 0;
    },
    isBtnField() {
      return this.fieldValue.type === "button";
    },
    itemClass() {
      const e = this.fieldValue.rules;
      return {
        // only handle required rule for now
        "cube-form-item_required": e && e.required,
        "cube-form-item_btn": this.isBtnField,
        "cube-form-item_validating": this.validating,
        "cube-form-item_pending": this.pending,
        "cube-form-item_valid": this.valid,
        "cube-form-item_invalid": this.invalid
      };
    },
    modelVal() {
      return this.form.model[this.fieldValue.modelKey];
    },
    componentName() {
      const e = this.fieldValue, t = e.component;
      if (t)
        return t;
      const s = e.type, l = `cube-${s}`;
      return re[l] ? l : s;
    }
  },
  watch: {
    modelVal(e) {
      this.modelValue !== e && (this.modelValue = e);
    },
    modelValue: {
      handler(e) {
        this.form.model[this.fieldValue.modelKey] = e, this.updateValidatorModel();
      },
      flush: "sync"
    },
    originValid(e) {
      this.lastOriginValid = e;
    }
  },
  beforeCreate() {
    this.form = this.$parent.form;
  },
  created() {
    this.form.addField(this), this.getValidatorModel = (e) => (this.pending = !1, e);
  },
  mounted() {
    this.initDebounce(), this.initFocusEvents();
  },
  methods: {
    initDebounce() {
      let e = this.fieldValue.debounce;
      e === !0 && (e = 200), !(!e && e !== 0 || e < 0 || this.fieldValue.trigger === "blur") && (this.getValidatorModel = xt((t) => (this.syncValidatorValue(), this.validate(), t), e, !1, this.validatorModel[this.validatorModelKey]));
    },
    focusInHandler() {
      this.focused = !0;
    },
    focusOutHandler() {
      this.focused = !1, this.updateValidatorModel(), this.validate();
    },
    initFocusEvents() {
      if (this.fieldValue.trigger === "blur") {
        const e = this.$refs.formItem;
        e.addEventListener(Ze, this.focusInHandler, !1), e.addEventListener(Je, this.focusOutHandler, !1), this.getValidatorModel = (t) => this.focused ? this.validatorModel[this.validatorModelKey] : (this.pending = !1, this.form.updatePending(), t);
      }
    },
    removeFocusEvents() {
      const e = this.$refs.formItem;
      e.removeEventListener(Ze, this.focusInHandler, !1), e.removeEventListener(Je, this.focusOutHandler, !1);
    },
    updateValidatorModel() {
      this.pending = !0, this.validatorModel[this.validatorModelKey] = this.getValidatorModel(this.modelValue), this.pending && (this.form.setPending(this.pending), this.originValid = void 0);
    },
    syncValidatorValue() {
      this.pending = !1, this.validatorModel[this.validatorModelKey] = this.modelValue, this.form.updatePending();
    },
    validatorChangeHandler() {
      this.validatorDisabled || this.originValid && this.lastOriginValid || this.updateValidity();
    },
    validatingHandler() {
      this.validating = !0, this.form.setValidating(!0);
    },
    validatedHandler() {
      this.validating = !1, this.form.updateValidating();
    },
    updateValidity() {
      const e = this.$refs.validator;
      e && this.form.updateValidity(this.fieldValue.modelKey, e.valid, e.result, e.dirty);
    },
    validate(e) {
      const t = ce(e);
      t && (e = t.resolve);
      const s = this.$refs.validator;
      return s ? s.validate(() => {
        this.validatorDisabled = !0, this.updateValidity(), e && e(), this.$nextTick(() => {
          this.validatorDisabled = !1;
        });
      }) : e && e(), t;
    },
    reset() {
      const e = this.fieldValue;
      if (e.modelKey) {
        const t = ss(e.type);
        this.validatorDisabled = !0, nt(this, "modelValue", t), this.syncValidatorValue(), this.$refs.validator && this.$refs.validator.reset(), this.$nextTick(() => {
          this.validatorDisabled = !1;
        });
      }
      this.validating = !1, this.pending = !1;
    },
    msgClick() {
      console.log("error-msg"), this.form.layout === P.STANDARD && this.$createToast && this.$createToast({
        type: "warn",
        txt: this.$refs.validator.msg,
        time: 1e3
      }).show();
    }
  },
  beforeUnmount() {
    this.removeFocusEvents(), this.form.destroyField(this), this.form = null;
  },
  components: re
}, aa = { class: "cube-form-label" }, la = {
  key: 1,
  class: "cube-form-field"
};
function na(e, t, s, l, a, i) {
  const n = E("cube-validator"), r = E("cube-button");
  return u(), d("div", {
    class: f(["cube-form-item border-bottom-1px", i.itemClass]),
    ref: "formItem"
  }, [
    i.isBtnField ? (u(), v(r, L({ key: 1 }, i.fieldValue.props, J(i.fieldValue.events || {})), {
      default: be(() => [
        at(V(i.fieldValue.label), 1)
      ]),
      _: 1
    }, 16)) : (u(), d($, { key: 0 }, [
      m(e.$slots, "label", {}, () => [
        k(c("div", aa, [
          c("span", null, V(i.fieldValue.label), 1)
        ], 512), [
          [oe, i.fieldValue.label]
        ])
      ]),
      i.hasRules ? (u(), v(n, {
        key: 0,
        class: "cube-form-field",
        ref: "validator",
        modelValue: e.originValid,
        "onUpdate:modelValue": [
          t[1] || (t[1] = (o) => e.originValid = o),
          i.validatorChangeHandler
        ],
        disabled: a.validatorDisabled,
        model: a.validatorModel,
        "model-key": a.validatorModelKey,
        rules: i.fieldValue.rules,
        messages: i.fieldValue.messages,
        onValidating: i.validatingHandler,
        onValidated: i.validatedHandler,
        onMsgClick: i.msgClick
      }, {
        default: be(() => [
          m(e.$slots, "default", {}, () => [
            (u(), v(_e(i.componentName), L({
              modelValue: a.modelValue,
              "onUpdate:modelValue": t[0] || (t[0] = (o) => a.modelValue = o)
            }, i.fieldValue.props, J(i.fieldValue.events || {})), null, 16, ["modelValue"]))
          ])
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "model", "model-key", "rules", "messages", "onUpdate:modelValue", "onValidating", "onValidated", "onMsgClick"])) : (u(), d("div", la, [
        m(e.$slots, "default", {}, () => [
          (u(), v(_e(i.componentName), L({
            modelValue: a.modelValue,
            "onUpdate:modelValue": t[2] || (t[2] = (o) => a.modelValue = o)
          }, i.fieldValue.props, J(i.fieldValue.events || {})), null, 16, ["modelValue"]))
        ])
      ]))
    ], 64))
  ], 2);
}
const K = /* @__PURE__ */ b(ia, [["render", na]]);
const ra = "cube-form-group", oa = {
  name: ra,
  props: {
    legend: {
      type: String,
      default: ""
    },
    fields: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  beforeCreate() {
    this.form = this.$parent.form;
  },
  beforeUnmount() {
    this.form = null;
  },
  components: {
    CubeFormItem: K
  }
}, ua = { class: "cube-form-group" }, da = { class: "cube-form-group-legend" }, ca = { class: "cube-form-group-content" };
function ha(e, t, s, l, a, i) {
  const n = E("cube-form-item");
  return u(), d("div", ua, [
    c("p", da, V(s.legend), 1),
    c("div", ca, [
      m(e.$slots, "default", {}, () => [
        (u(!0), d($, null, w(s.fields, (r, o) => (u(), v(n, {
          key: r.key || o,
          field: r
        }, null, 8, ["field"]))), 128))
      ])
    ])
  ]);
}
const z = /* @__PURE__ */ b(oa, [["render", ha]]);
const fa = "cube-form", se = "submit", Qe = "reset", et = "validate", tt = "valid", st = "invalid", ma = {
  name: fa,
  mixins: [ot],
  emits: [se, Qe, et, tt, st],
  props: {
    action: String,
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    schema: {
      type: Object,
      default() {
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {
          scrollToInvalidField: !1,
          layout: P.STANDARD
        };
      }
    },
    immediateValidate: {
      type: Boolean,
      default: !1
    },
    submitAlwaysValidate: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      validatedCount: 0,
      dirty: !1,
      firstInvalidField: null,
      firstInvalidFieldIndex: -1
    };
  },
  computed: {
    fieldsModel() {
      const e = {};
      return this.fields.forEach((t) => {
        t.isBtnField || (e[t.fieldValue.modelKey] = t.modelValue);
      }), e;
    },
    groups() {
      const e = this.schema, t = e.groups || [];
      return e.fields && t.unshift({
        fields: e.fields
      }), t;
    },
    fieldsData() {
      return this.groups.reduce((e, t) => (t.fields.reduce((s, l) => (s.push(l), s), e), e), []);
    },
    layout() {
      const e = this.options;
      return e && e.layout || P.STANDARD;
    },
    formClass() {
      const e = this.invalid, t = this.valid, s = this.layout;
      return {
        "cube-form_standard": s === P.STANDARD,
        "cube-form_groups": this.groups.length > 1,
        "cube-form_validating": this.validating,
        "cube-form_pending": this.pending,
        "cube-form_valid": t,
        "cube-form_invalid": e,
        "cube-form_classic": s === P.CLASSIC,
        "cube-form_fresh": s === P.FRESH
      };
    }
  },
  watch: {
    validatedCount() {
      this.$emit(et, {
        validity: this.validity,
        valid: this.valid,
        invalid: this.invalid,
        dirty: this.dirty,
        firstInvalidFieldIndex: this.firstInvalidFieldIndex
      });
    }
  },
  beforeCreate() {
    this.form = this, this.fields = [], this.validity = {}, this.isMounted = !1;
  },
  mounted() {
    this.isMounted = !0, this.immediateValidate && this.validate();
  },
  methods: {
    submit(e = !1) {
      this.skipValidate = e, ye(this.$refs.form, "submit"), this.skipValidate = !1;
    },
    reset() {
      ye(this.$refs.form, "reset");
    },
    submitHandler(e) {
      if (this.syncValidatorValues(), this.skipValidate) {
        this.$emit(se, e, this.model, this.fieldsModel);
        return;
      }
      const t = (s) => {
        s ? (this.$emit(tt, this.validity), this.$emit(se, e, this.model, this.fieldsModel)) : (this.options.scrollToInvalidField && this.firstInvalidField && this.firstInvalidField.$el.scrollIntoView(), e.preventDefault(), this.$emit(st, this.validity));
      };
      this.submitAlwaysValidate || this.valid === void 0 ? (this._submit(t), (this.validating || this.pending) && e.preventDefault()) : t(this.valid);
    },
    resetHandler(e) {
      this._reset(), this.$emit(Qe, e);
    },
    _submit(e) {
      this.validate(() => {
        e && e(this.valid);
      });
    },
    _reset() {
      this.fields.forEach((e) => {
        e.reset();
      }), this.setValidity(), this.setValidating(), this.setPending();
    },
    syncValidatorValues() {
      this.fields.forEach((e) => {
        e.syncValidatorValue();
      });
    },
    validate(e) {
      const t = ce(e);
      t && (e = t.resolve);
      let s = 0;
      const l = this.fields.length;
      return this.originValid = void 0, this.fields.forEach((a) => {
        a.validate(() => {
          s++, s === l && e && e(this.valid);
        });
      }), t;
    },
    updateValidating() {
      const e = this.fields.some((t) => t.validating);
      this.setValidating(e);
    },
    updatePending() {
      const e = this.fields.some((t) => t.pending);
      this.setPending(e);
    },
    setValidating(e = !1) {
      this.validating = e;
    },
    setPending(e = !1) {
      this.pending = e;
    },
    updateValidity(e, t, s, l) {
      const a = this.validity[e];
      a && a.valid === t && a.result === s && a.dirty === l || this.setValidity(e, {
        valid: t,
        result: s,
        dirty: l
      });
    },
    setValidity(e, t) {
      let s = {};
      e && (Object.assign(s, this.validity), t === void 0 ? delete s[e] : s[e] = t);
      let l = !1, a = !1, i = !0, n = "";
      this.fields.forEach((r) => {
        const o = r.fieldValue.modelKey;
        if (o) {
          const h = s[o];
          h ? (h.dirty && (l = !0), h.valid === !1 ? i = !1 : i && !h.valid && (i = h.valid), !a && h.valid === !1 && (a = !0, n = o)) : r.hasRules && (i && (i = void 0), s[o] = {
            valid: void 0,
            result: {},
            dirty: !1
          });
        }
      }), this.validity = s, this.dirty = l, this.originValid = i, this.setFirstInvalid(n), this.isMounted && this.validatedCount++;
    },
    setFirstInvalid(e) {
      if (!e) {
        this.firstInvalidField = null, this.firstInvalidFieldIndex = -1;
        return;
      }
      this.fields.some((t, s) => {
        if (t.fieldValue.modelKey === e)
          return this.firstInvalidField = t, this.firstInvalidFieldIndex = s, !0;
      });
    },
    addField(e) {
      const t = this.fieldsData.indexOf(e.field);
      this.fields.splice(t, 0, e);
      const s = e.fieldValue.modelKey;
      s && this.setValidity(s);
    },
    destroyField(e) {
      const t = this.fields.indexOf(e);
      this.fields.splice(t, 1);
      const s = e.fieldValue.modelKey;
      s && this.setValidity(s);
    }
  },
  beforeUnmount() {
    this.form = null, this.firstInvalidField = null;
  },
  components: {
    CubeFormGroup: z
  }
}, pa = ["action"];
function ba(e, t, s, l, a, i) {
  const n = E("cube-form-group");
  return u(), d("form", {
    ref: "form",
    class: f(["cube-form", i.formClass]),
    action: s.action,
    onSubmit: t[0] || (t[0] = (...r) => i.submitHandler && i.submitHandler(...r)),
    onReset: t[1] || (t[1] = (...r) => i.resetHandler && i.resetHandler(...r))
  }, [
    m(e.$slots, "default", {}, () => [
      (u(!0), d($, null, w(i.groups, (r, o) => (u(), v(n, {
        fields: r.fields,
        legend: r.legend,
        key: r.key || o
      }, null, 8, ["fields", "legend"]))), 128))
    ])
  ], 42, pa);
}
const F = /* @__PURE__ */ b(ma, [["render", ba]]);
F.install = function(e) {
  e.component(F.name, F), e.component(z.name, z), e.component(K.name, K), e.component(C.name, C), B.install(e), C._base = e;
};
F.Group = z;
F.Item = K;
F.Validator = C;
C.addRule = Dt;
C.addMessage = Ft;
C.addType = Pt;
C.addHelper = B.addHelper;
export {
  F as default
};
