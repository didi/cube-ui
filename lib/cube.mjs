import { openBlock as c, createElementBlock as d, normalizeClass as y, createCommentVNode as I, renderSlot as p, createElementVNode as u, normalizeStyle as F, Fragment as S, renderList as $, createBlock as x, Transition as te, withCtx as w, withDirectives as E, withModifiers as R, vShow as N, vModelCheckbox as io, createTextVNode as $e, toDisplayString as k, resolveComponent as T, createVNode as C, vModelRadio as Po, mergeProps as fe, vModelDynamic as Io, vModelText as Do, camelize as Vo, h as Ri, render as Xi, isVNode as Ui, resolveDynamicComponent as yi, toHandlers as Zt, createSlots as so, TransitionGroup as Oo } from "vue";
const Ho = {
  install() {
  }
}, Ao = {
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
}, Lo = {
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
}, Yo = function(e, t) {
}, Ro = function(e, t) {
}, Xo = /-(\w)/g;
function no(e) {
  return e = String(e), e.replace(Xo, function(t, i) {
    return i ? i.toUpperCase() : "";
  });
}
function Uo(e) {
  return e = String(e), e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function Ft(e, t) {
  if (e.findIndex)
    return e.findIndex(t);
  let i = -1;
  return e.some(function(n, o, s) {
    const r = t.call(this, n, o, s);
    if (r)
      return i = o, r;
  }), i;
}
function Wt(e, t) {
  for (let i in t)
    !e[i] || typeof e[i] != "object" ? e[i] = t[i] : Wt(e[i], t[i]);
}
function oo(e) {
  return function(...i) {
    typeof i[0] == "string" && (i[0] = {
      [i[0]]: i[1]
    }), Wt(e, i[0]);
  };
}
function ct(e) {
  const t = Object.prototype.toString;
  return function(n) {
    return t.call(n) === `[object ${e}]`;
  };
}
const be = {
  _set(e, t, i) {
    e[t] = i;
  },
  string(e, t) {
    be._set(e, t, "");
  },
  number(e, t) {
    be._set(e, t, 0);
  },
  boolean(e, t) {
    be._set(e, t, !1);
  },
  object(e, t, i) {
    Array.isArray(i) ? be._set(e, t, []) : be._set(e, t, {});
  }
};
function ro(e, t, i) {
  if (i !== void 0)
    return be._set(e, t, i);
  if (t) {
    const n = e[t], o = be[typeof n];
    o && o(e, t, n);
  } else
    Object.keys(e).forEach((n) => {
      ro(e, n);
    });
}
function zo(e, t) {
  let i = 0, n = [];
  const o = e.length;
  if (!o)
    return t(n);
  e.forEach((s, r) => {
    s((l) => {
      i += 1, n[r] = l, i === o && t(n);
    });
  });
}
function Ii(e) {
  let t;
  if (typeof window.Promise < "u") {
    const i = e;
    t = new window.Promise((n) => {
      e = (o) => {
        i && i(o), n(o);
      };
    }), t.resolve = e;
  }
  return t;
}
function Bo(e, t, i, n) {
  let o, s = n;
  const r = function(a, h) {
    o = null, h && (s = e.apply(a, h));
  }, l = function(...a) {
    if (o && clearTimeout(o), i) {
      const h = !o;
      o = setTimeout(r, t), h && (s = e.apply(this, a));
    } else
      o = setTimeout(() => {
        r(this, a);
      }, t);
    return s;
  };
  return l.cancel = function() {
    clearTimeout(o), o = null;
  }, l;
}
function Fo(e, { prefix: t = "", firstUpperCase: i = !1 } = {}) {
  const o = e.name.replace(/^cube-/i, "");
  let s = `${no(`${t}${o}`)}`;
  return i && (s = s.charAt(0).toUpperCase() + s.slice(1)), s;
}
function Wo(e, t = "") {
  const i = t.split(".");
  let n = e;
  for (let o = 0; o < i.length; o++) {
    const s = i[o];
    if (ht(n[s])) {
      n = "";
      break;
    } else
      n = n[s];
  }
  return n;
}
function jo(e) {
  const i = /os (\d\d?_\d(_\d)?)/.exec(e);
  if (!i)
    return null;
  const n = i[1].split("_").map(function(o) {
    return parseInt(o, 10);
  });
  return {
    major: n[0],
    minor: n[1],
    patch: n[2] || 0
  };
}
const Ie = ct("Function"), ht = ct("Undefined"), Go = ct("Array"), Ko = ct("String"), qo = ct("Number"), Ti = 60 * 60 * 24 * 1e3, Zo = 60 * 60 * 1e3, Ce = 60 * 1e3;
function lo(e, t, i, n) {
  const o = {
    year: "(Y+)",
    month: "(M+)",
    date: "(D+)",
    hour: "(h+)",
    minute: "(m+)",
    second: "(s+)",
    quarter: "(q+)",
    millisecond: "(S)"
  };
  if (new RegExp(o[e], n).test(t)) {
    const s = e === "year" ? i.toString().substr(4 - RegExp.$1.length) : RegExp.$1.length === 1 ? i : ao(i);
    t = t.replace(RegExp.$1, s);
  }
  return t;
}
function ao(e) {
  return ("00" + e).substr(("" + e).length);
}
function xi(e, t) {
  const i = {
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
  for (const n in i)
    t = lo(n, t, i[n].value, i[n].regExpAttributes);
  return t;
}
function $t(e) {
  const t = e.getFullYear(), i = e.getMonth() + 1, n = e.getDate();
  return +/* @__PURE__ */ new Date(t + "/" + i + "/" + n + " 00:00:00");
}
function ft(e, t) {
  return Math.floor(($t(e) - $t(t)) / Ti);
}
function Jt() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
function Jo(e, t) {
  let i = 30;
  return [1, 3, 5, 7, 8, 10, 12].indexOf(e) > -1 ? i = 31 : e === 2 && (i = !t || !(t % 400) || !(t % 4) && t % 100 ? 29 : 28), i;
}
let Ge;
const zi = "zh-CN", Ke = {
  name: "locale",
  install(e) {
    Ke.installed || (Ge = e.config.globalProperties, Ge.$cubeLang = zi, Ge.$cubeMessages = { [zi]: Ao, "en-US": Lo }, Ke.installed = !0);
  },
  use(e, t) {
    Ge.$cubeLang = e;
    const i = Ge.$cubeMessages;
    e in i || (i[[e]] = t);
  },
  helpers: {
    toLocaleDateString(e, t) {
      const i = qo(e) ? e : e.replace(/-/g, "/"), n = new Date(i);
      return ht(t) ? n.toDateString() : xi(n, t);
    }
  },
  addHelper(e, t) {
    e in Ke.helpers || (Ke.helpers[e] = t);
  }
}, X = Ke, Qo = "Translation is not registered correctly, you can call Locale.use() to install it.", ie = {
  computed: {
    $t() {
      const e = this.$cubeLang, t = this.$cubeMessages[e];
      return ht(t) ? (Yo(Qo), "") : (i) => Wo(t, i);
    }
  },
  beforeCreate() {
    X.install(this._.appContext.app);
  }
};
X.localeMixin = ie;
const b = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, o] of t)
    i[n] = o;
  return i;
}, er = "cube-button", tr = {
  name: er,
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
}, ir = ["type"];
function sr(e, t, i, n, o, s) {
  return c(), d("button", {
    class: y(["cube-btn", s.btnClass]),
    type: i.type,
    onClick: t[0] || (t[0] = (...r) => s.handleClick && s.handleClick(...r))
  }, [
    i.icon ? (c(), d("i", {
      key: 0,
      class: y(i.icon)
    }, null, 2)) : I("", !0),
    p(e.$slots, "default")
  ], 10, ir);
}
const se = /* @__PURE__ */ b(tr, [["render", sr]]);
se.install = function(e) {
  e.component(se.name, se);
};
const nr = "cube-loading", or = {
  name: nr,
  data() {
    return {
      balde: 12
    };
  },
  props: {
    size: {
      type: Number
    }
  },
  computed: {
    style() {
      if (!this.size)
        return;
      const e = `${this.size}px`;
      return {
        width: e,
        height: e
      };
    }
  }
}, rr = { class: "cube-loading" }, lr = { class: "cube-loading-spinner" };
function ar(e, t, i, n, o, s) {
  return c(), d("div", rr, [
    u("span", {
      class: "cube-loading-spinners",
      style: F(s.style)
    }, [
      (c(!0), d(S, null, $(o.balde, (r) => (c(), d("i", lr))), 256))
    ], 4)
  ]);
}
const ee = /* @__PURE__ */ b(or, [["render", ar]]);
ee.install = function(e) {
  e.component(ee.name, ee);
};
const Bi = "update:visible", j = {
  props: {
    visible: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      // If use the prop visible directly, the toggle will failed when user haven't set v-model as a reactive property.
      // So we use the data isVisible instead.
      isVisible: !1
    };
  },
  emits: [Bi],
  watch: {
    isVisible(e) {
      this.$emit(Bi, e);
    }
  },
  mounted() {
    this.$watch("visible", (e, t) => {
      e ? this.show() : t && !this._createAPI_reuse && this.hide();
    }, {
      immediate: !0
    });
  },
  methods: {
    show() {
      this.isVisible = !0;
    },
    hide() {
      this.isVisible = !1;
    }
  }
};
const cr = "cube-tip", Fi = "click", Wi = "close", hr = {
  name: cr,
  mixins: [j],
  emits: [Fi, Wi],
  props: {
    direction: {
      type: String,
      default: "top"
    },
    offsetLeft: {
      type: [String, Number],
      default: 0
    },
    offsetRight: {
      type: [String, Number],
      default: 0
    },
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    offsetBottom: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      let e = this.$refs.angle.style;
      const t = {
        left: "right",
        right: "left",
        top: "bottom",
        bottom: "top"
      };
      [
        {
          name: "offsetLeft",
          target: "left",
          percentFix: {
            marginLeft: "-6px"
          }
        },
        {
          name: "offsetRight",
          target: "right",
          percentFix: {
            marginRight: "-6px"
          }
        },
        {
          name: "offsetTop",
          target: "top",
          percentFix: {
            marginTop: "-6px"
          }
        },
        {
          name: "offsetBottom",
          target: "bottom",
          percentFix: {
            marginBottom: "-6px"
          }
        }
      ].forEach((n) => {
        const o = this[n.name];
        if (o !== 0) {
          const s = typeof o == "number";
          e[n.target] = o + (s ? "px" : ""), n.percentFix && !s && Object.keys(n.percentFix).forEach((r) => {
            e[r] = n.percentFix[r];
          }), e[t[n.target]] = "auto";
        }
      });
    });
  },
  methods: {
    handleClick() {
      this.hide(), this.$emit(Fi);
    },
    close() {
      this.hide(), this.$emit(Wi);
    }
  }
}, ur = ["data-dir"], dr = {
  class: "cube-tip-angle",
  ref: "angle"
}, fr = { class: "cube-tip-content" };
function pr(e, t, i, n, o, s) {
  return c(), x(te, { name: "cube-tip-zoom" }, {
    default: w(() => [
      E(u("div", {
        class: "cube-tip",
        "data-dir": i.direction,
        onClick: t[1] || (t[1] = (...r) => s.handleClick && s.handleClick(...r))
      }, [
        u("i", dr, null, 512),
        u("button", {
          class: "cube-tip-close cubeic-close",
          onClick: t[0] || (t[0] = R((...r) => s.close && s.close(...r), ["stop"]))
        }),
        u("div", fr, [
          p(e.$slots, "default")
        ])
      ], 8, ur), [
        [N, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const bt = /* @__PURE__ */ b(hr, [["render", pr]]);
bt.install = function(e) {
  e.component(bt.name, bt);
};
const mr = "cube-checkbox", ji = "update:modelValue", _r = "checked", gr = "cancel-checked", br = {
  name: mr,
  emits: [ji],
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
    const e = this.$parent, t = !!e && e.$data._checkboxGroup, i = t && (e.$props.horizontal || e.$props.colNum > 1);
    return {
      isInGroup: t,
      isInHorizontalGroup: i
    };
  },
  computed: {
    computedOption() {
      let e = this.option;
      const t = this.label, i = this.disabled;
      return e._def_option === !0 ? e = {
        label: t,
        value: t,
        disabled: i
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
        const t = this.computedOption.value, i = t && e ? t : e;
        if (this.$emit(ji, i), this.isInGroup) {
          e = !this.checkValue;
          const n = e ? _r : gr;
          this.$parent.checkEvent(n, t || e);
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
}, vr = ["data-pos"], yr = ["disabled"], Tr = { class: "cube-checkbox-label" };
function xr(e, t, i, n, o, s) {
  return c(), d("div", {
    class: y(["cube-checkbox", s._containerClass]),
    "data-pos": i.position
  }, [
    u("label", {
      class: y(["cube-checkbox-wrap", s._wrapClass])
    }, [
      E(u("input", {
        class: "cube-checkbox-input",
        type: "checkbox",
        disabled: s.computedOption.disabled,
        "onUpdate:modelValue": t[0] || (t[0] = (r) => s.checkValue = r)
      }, null, 8, yr), [
        [io, s.checkValue]
      ]),
      u("span", {
        class: y(["cube-checkbox-ui", s._borderIconClass])
      }, [
        u("i", {
          class: y(s._rightIconClass)
        }, null, 2)
      ], 2),
      u("span", Tr, [
        p(e.$slots, "default", {}, () => [
          $e(k(s.computedOption.label), 1)
        ])
      ])
    ], 2)
  ], 10, vr);
}
const W = /* @__PURE__ */ b(br, [["render", xr]]);
const wr = "cube-toolbar-item", Er = {
  name: wr,
  components: {
    CubeButton: se,
    CubeCheckbox: W
  },
  props: {
    action: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, Sr = { class: "cube-toolbar-item border-right-1px" }, kr = ["innerHTML"], $r = /* @__PURE__ */ u("i", { class: "cube-toolbar-down" }, null, -1);
function Cr(e, t, i, n, o, s) {
  const r = T("cube-checkbox"), l = T("cube-button");
  return c(), d("li", Sr, [
    C(l, {
      icon: i.action.icon
    }, {
      default: w(() => [
        i.action.type == "checkbox" ? (c(), x(r, {
          key: 0,
          class: "cube-toolbar-chb",
          modelValue: i.action.checked,
          "onUpdate:modelValue": t[0] || (t[0] = (a) => i.action.checked = a),
          label: i.action.text
        }, null, 8, ["modelValue", "label"])) : (c(), d("span", {
          key: 1,
          innerHTML: i.action.text
        }, null, 8, kr))
      ]),
      _: 1
    }, 8, ["icon"]),
    $r
  ]);
}
const Mr = /* @__PURE__ */ b(Er, [["render", Cr]]);
const Nr = "cube-toolbar", Gi = "click", Ki = "more-click", Pr = {
  name: Nr,
  components: {
    CubeToolbarItem: Mr
  },
  emits: [Gi, Ki],
  props: {
    actions: {
      type: Array,
      default() {
        return [];
      }
    },
    moreActions: {
      type: Array
    }
  },
  data() {
    return {
      showMore: !1
    };
  },
  computed: {
    basicActions() {
      const e = this.actions.slice();
      return this.moreActions && e.push({
        icon: "cubeic-more",
        $cubeMore: !0
      }), e;
    }
  },
  methods: {
    itemClick(e) {
      e.$cubeMore ? (this.showMore = !this.showMore, this.$emit(Ki, this.showMore)) : this.$emit(Gi, e);
    }
  }
}, Ir = { class: "cube-toolbar" }, Dr = {
  key: 0,
  class: "cube-toolbar-group cube-toolbar-group-more"
}, Vr = { class: "cube-toolbar-group" };
function Or(e, t, i, n, o, s) {
  const r = T("cube-toolbar-item");
  return c(), d("div", Ir, [
    i.moreActions ? E((c(), d("ul", Dr, [
      (c(!0), d(S, null, $(i.moreActions, (l, a) => (c(), x(r, {
        key: a,
        action: l,
        onClick: (h) => s.itemClick(l)
      }, null, 8, ["action", "onClick"]))), 128))
    ], 512)), [
      [N, o.showMore]
    ]) : I("", !0),
    u("ul", Vr, [
      (c(!0), d(S, null, $(s.basicActions, (l, a) => (c(), x(r, {
        key: a,
        action: l,
        onClick: (h) => s.itemClick(l)
      }, null, 8, ["action", "onClick"]))), 128))
    ])
  ]);
}
const Ye = /* @__PURE__ */ b(Pr, [["render", Or]]);
Ye.install = function(e) {
  e.component(se.name, se), e.component(W.name, W), e.component(Ye.name, Ye);
};
Ye.Button = se;
Ye.Checkbox = W;
const jt = typeof window < "u", st = jt && navigator.userAgent.toLowerCase(), qi = st && st.indexOf("android") > 0, Hr = st && /iphone|ipad|ipod|ios/.test(st);
function Di(e, t) {
  return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className);
}
function co(e, t) {
  if (Di(e, t))
    return;
  const i = e.className.split(" ");
  i.push(t), e.className = i.join(" ");
}
function ho(e, t) {
  if (!Di(e, t))
    return;
  const i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
  e.className = e.className.replace(i, " ");
}
function Ar(e, t) {
  const i = "data-";
  return e.getAttribute(i + t);
}
function de(e) {
  return {
    top: e.offsetTop,
    left: e.offsetLeft,
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
let Qt = (() => {
  if (!jt)
    return !1;
  let e = document.createElement("div").style, t = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (let i in t)
    if (e[t[i]] !== void 0)
      return i;
  return !1;
})();
function K(e) {
  return Qt === !1 ? !1 : Qt === "standard" ? e === "transitionEnd" ? "transitionend" : e : Qt + e.charAt(0).toUpperCase() + e.substr(1);
}
function Lr(e, t) {
  let i = e.target;
  for (; i && !Di(i, t); ) {
    if (i === e.currentTarget)
      return null;
    i = i.parentNode;
  }
  return i;
}
function Zi(e, t, { type: i = "Event", bubbles: n = !0, cancelable: o = !0 } = {}) {
  const s = document.createEvent(i);
  s.initEvent(t, n, o), e.dispatchEvent(s);
}
const Yr = "cube-tab", Rr = {
  name: Yr,
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
}, Xr = ["innerHTML"];
function Ur(e, t, i, n, o, s) {
  return c(), d("div", {
    class: y(["cube-tab", { "cube-tab_active": s.isActive }]),
    onClick: t[0] || (t[0] = (...r) => s.handleClick && s.handleClick(...r))
  }, [
    p(e.$slots, "icon", {}, () => [
      u("i", {
        class: y(i.icon)
      }, null, 2)
    ]),
    p(e.$slots, "default", {}, () => [
      u("div", { innerHTML: i.label }, null, 8, Xr)
    ])
  ], 2);
}
const Ct = /* @__PURE__ */ b(Rr, [["render", Ur]]);
const zr = "cube-tab-bar", Ji = "update:modelValue", Qi = "change", es = "click", ts = K("transform"), Br = K("transition"), Fr = {
  name: zr,
  components: {
    CubeTab: Ct
  },
  emits: [Ji, Qi, es],
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
      this.$emit(es, e), e !== this.modelValue && [Ji, Qi].forEach((i) => {
        this.$emit(i, e);
      });
    },
    _updateSliderStyle() {
      if (!this.showSlider)
        return;
      const e = this.$refs.slider;
      this.$nextTick(() => {
        const { width: t, index: i } = this._getSliderWidthAndIndex();
        e.style.width = `${t}px`, this.setSliderTransform(this._getOffsetLeft(i));
      });
    },
    setSliderTransform(e) {
      const t = this.$refs.slider;
      typeof e == "number" && (e = `${e}px`), t && (this.useTransition && (t.style[Br] = `${ts} 0.2s linear`), t.style[ts] = `translateX(${e}) translateZ(0)`);
    },
    _getSliderWidthAndIndex() {
      let e = 0, t = 0;
      return this.tabs.length > 0 && (t = Ft(this.tabs, (i) => i.modelValue === this.modelValue), e = this.tabs[t].$el.clientWidth), {
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
}, Wr = {
  key: 0,
  ref: "slider",
  class: "cube-tab-bar-slider"
};
function jr(e, t, i, n, o, s) {
  const r = T("cube-tab");
  return c(), d("div", {
    class: y(["cube-tab-bar", { "cube-tab-bar_inline": i.inline }])
  }, [
    p(e.$slots, "default", {}, () => [
      (c(!0), d(S, null, $(i.data, (l, a) => (c(), x(r, {
        label: l.label,
        "model-value": l.value,
        icon: l.icon,
        key: l.value || l.label
      }, null, 8, ["label", "model-value", "icon"]))), 128))
    ]),
    i.showSlider ? (c(), d("div", Wr, null, 512)) : I("", !0)
  ], 2);
}
const Re = /* @__PURE__ */ b(Fr, [["render", jr]]);
Re.install = function(e) {
  e.component(Re.name, Re), e.component(Ct.name, Ct);
};
Re.Tab = Ct;
const Gr = "cube-tab-panel", Kr = {
  name: Gr,
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
}, qr = { class: "cube-tab-panel" };
function Zr(e, t, i, n, o, s) {
  return c(), d("div", qr, [
    p(e.$slots, "default")
  ]);
}
const Mt = /* @__PURE__ */ b(Kr, [["render", Zr]]);
const Jr = K("transform"), Qr = "cube-tab-panels", el = -1, tl = {
  name: Qr,
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
      const t = Ft(this.panels, (o) => o.value === e);
      if (t === el)
        return;
      const i = this.$refs.panelsGroup, n = -(t * 100);
      i.style[Jr] = `translateX(${n}%)`;
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
  components: { TabPanel: Mt }
}, il = {
  class: "cube-tab-panels",
  ref: "panels"
}, sl = {
  class: "cube-tab-panels-group",
  ref: "panelsGroup"
};
function nl(e, t, i, n, o, s) {
  const r = T("cube-tab-panel");
  return c(), d("div", il, [
    u("div", sl, [
      p(e.$slots, "default", {}, () => [
        (c(!0), d(S, null, $(i.data, (l, a) => (c(), x(r, {
          label: l.label,
          value: l.value,
          key: l.value || l.label
        }, {
          default: w(() => [
            $e(k(l.label), 1)
          ]),
          _: 2
        }, 1032, ["label", "value"]))), 128))
      ])
    ], 512)
  ], 512);
}
const Xe = /* @__PURE__ */ b(tl, [["render", nl]]);
Xe.install = function(e) {
  e.component(Xe.name, Xe), e.component(Mt.name, Mt);
};
Xe.Panel = Mt;
W.install = function(e) {
  e.component(W.name, W);
};
const ol = K("flexBasis"), uo = {
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
          Array.prototype.forEach.call(this.$refs.group.children, (i) => {
            i.style[ol] = t;
          });
        });
      }
    }
  }
};
const rl = "cube-checkbox-group", is = "update:modelValue", ll = "checked", al = "cancel-checked", cl = {
  name: rl,
  mixins: [uo],
  emits: [is],
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
    CubeCheckbox: W
  },
  methods: {
    checkEvent(e, t) {
      if (e === ll && this._value.length < this.max && this._value.indexOf(t) === -1 && this._value.push(t), e === al) {
        const i = this._value.indexOf(t);
        this._value.length > this.min && i > -1 && this._value.splice(i, 1);
      }
      this.$emit(is, this._value);
    }
  }
}, hl = ["data-horz", "data-col"];
function ul(e, t, i, n, o, s) {
  const r = T("cube-checkbox");
  return c(), d("div", {
    class: y(["cube-checkbox-group", s.groupClass]),
    ref: "group",
    "data-horz": i.horizontal,
    "data-col": e.colNum > 1
  }, [
    p(e.$slots, "default", {}, () => [
      (c(!0), d(S, null, $(i.options, (l, a) => (c(), x(r, {
        key: a,
        option: l,
        shape: i.shape,
        position: i.position,
        "hollow-style": i.hollowStyle
      }, null, 8, ["option", "shape", "position", "hollow-style"]))), 128))
    ])
  ], 10, hl);
}
const Ue = /* @__PURE__ */ b(cl, [["render", ul]]);
Ue.install = function(e) {
  e.component(W.name, W), e.component(Ue.name, Ue);
};
Ue.Checkbox = W;
const dl = "cube-checker-item", fl = {
  name: dl,
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
      const e = this.$parent.isRadio, t = this.$parent.currentValue, i = this.option.value;
      return e ? t === i : t.indexOf(i) >= 0;
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
}, pl = ["innerHTML"];
function ml(e, t, i, n, o, s) {
  return c(), d("li", {
    class: y(["cube-checker-item", { "cube-checker-item_active": s.isActive, "cube-checker-item_disabled": s.isDisabled }]),
    onClick: t[0] || (t[0] = (...r) => s.clickHandler && s.clickHandler(...r))
  }, [
    p(e.$slots, "default", {}, () => [
      u("span", {
        innerHTML: i.option.text
      }, null, 8, pl)
    ])
  ], 2);
}
const Nt = /* @__PURE__ */ b(fl, [["render", ml]]), _l = "cube-checker", ss = "update:modelValue", gl = {
  name: _l,
  emits: [ss],
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
      this.$emit(ss, e);
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
      const t = e.value, i = this.currentValue, n = i.length, o = this.min, s = this.max, r = i.indexOf(t);
      r > -1 ? n > o && i.splice(r, 1) : n < s && i.push(t);
    }
  },
  components: {
    CubeCheckerItem: Nt
  }
}, bl = { class: "cube-checker" };
function vl(e, t, i, n, o, s) {
  const r = T("cube-checker-item");
  return c(), d("ul", bl, [
    p(e.$slots, "default", {}, () => [
      (c(!0), d(S, null, $(i.options, (l, a) => (c(), x(r, {
        option: l,
        key: a
      }, null, 8, ["option"]))), 128))
    ])
  ]);
}
const Te = /* @__PURE__ */ b(gl, [["render", vl]]);
Te.install = function(e) {
  e.component(Te.name, Te), e.component(Nt.name, Nt);
};
Te.Item = Nt;
const yl = "cube-radio", ns = "update:modelValue", Tl = {
  name: yl,
  inject: {
    radioGroup: {
      default: null
    }
  },
  emits: [ns],
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
      typeof this.modelValue == "number" && (e = Number(e)), this.$emit(ns, e), this.radioGroup && (this.radioGroup.radioValue = e);
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
}, xl = ["data-pos"], wl = ["disabled", "value"], El = /* @__PURE__ */ u("span", { class: "cube-radio-ui cubeic-round-border" }, [
  /* @__PURE__ */ u("i")
], -1), Sl = { class: "cube-radio-label" };
function kl(e, t, i, n, o, s) {
  return c(), d("div", {
    class: y(["cube-radio", s._containerClass]),
    "data-pos": i.position
  }, [
    u("label", {
      class: y(["cube-radio-wrap", s._wrapClass])
    }, [
      E(u("input", {
        class: "cube-radio-input",
        type: "radio",
        disabled: i.option.disabled,
        "onUpdate:modelValue": t[0] || (t[0] = (r) => o.radioValue = r),
        value: s.computedOption.value
      }, null, 8, wl), [
        [Po, o.radioValue]
      ]),
      El,
      p(e.$slots, "default", {}, () => [
        u("span", Sl, k(s.computedOption.label), 1)
      ])
    ], 2)
  ], 10, xl);
}
const nt = /* @__PURE__ */ b(Tl, [["render", kl]]);
const $l = "cube-radio-group", os = "update:modelValue", Cl = {
  name: $l,
  mixins: [uo],
  provide() {
    return {
      radioGroup: this
    };
  },
  emits: [os],
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
      this.$emit(os, e);
    }
  },
  computed: {
    _groupClass() {
      if (!this.horizontal)
        return "border-top-1px border-bottom-1px";
    }
  },
  components: {
    CubeRadio: nt
  }
}, Ml = ["data-horz", "data-col"];
function Nl(e, t, i, n, o, s) {
  const r = T("cube-radio");
  return c(), d("div", {
    class: y(["cube-radio-group", s._groupClass]),
    ref: "group",
    "data-horz": i.horizontal,
    "data-col": e.colNum > 1
  }, [
    p(e.$slots, "default", {}, () => [
      (c(!0), d(S, null, $(i.options, (l, a) => (c(), x(r, {
        key: a,
        option: l,
        position: i.position,
        "hollow-style": i.hollowStyle,
        modelValue: o.radioValue,
        "onUpdate:modelValue": t[0] || (t[0] = (h) => o.radioValue = h)
      }, null, 8, ["option", "position", "hollow-style", "modelValue"]))), 128))
    ])
  ], 10, Ml);
}
const xe = /* @__PURE__ */ b(Cl, [["render", Nl]]);
xe.install = function(e) {
  e.component(xe.name, xe), e.component(nt.name, nt);
};
xe.Radio = nt;
const rs = "change", fo = {
  emits: [rs],
  methods: {
    changeHandler(e) {
      this.$emit(rs, e);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    }
  }
};
const Pl = "cube-input", ls = "update:modelValue", as = "blur", cs = "focus", Il = {
  name: Pl,
  mixins: [fo],
  emits: [ls, as, cs],
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
      this.$emit(ls, e);
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
      this.$emit(cs, e), this.isFocus = !0;
    },
    handleBlur(e) {
      this.$emit(as, e), this.isFocus = !1;
    },
    handleClear(e) {
      this.inputValue = "", this.$refs.input.focus();
    },
    handlePwdEye() {
      this.formatedEye.open = !this.formatedEye.open;
    }
  }
}, Dl = {
  key: 0,
  class: "cube-input-prepend"
}, Vl = ["type", "disabled", "readonly", "autocomplete", "autofocus"], Ol = {
  key: 1,
  class: "cube-input-append"
}, Hl = /* @__PURE__ */ u("i", { class: "cubeic-wrong" }, null, -1), Al = [
  Hl
];
function Ll(e, t, i, n, o, s) {
  return c(), d("div", {
    class: y(["cube-input", { "cube-input_active": o.isFocus }])
  }, [
    e.$slots.prepend ? (c(), d("div", Dl, [
      p(e.$slots, "prepend")
    ])) : I("", !0),
    E(u("input", fe({
      class: "cube-input-field",
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = (r) => o.inputValue = r)
    }, e.$props, {
      type: s._type,
      disabled: i.disabled,
      readonly: i.readonly,
      autocomplete: i.autocomplete,
      autofocus: i.autofocus,
      onFocus: t[1] || (t[1] = (...r) => s.handleFocus && s.handleFocus(...r)),
      onBlur: t[2] || (t[2] = (...r) => s.handleBlur && s.handleBlur(...r)),
      onChange: t[3] || (t[3] = (...r) => e.changeHandler && e.changeHandler(...r))
    }), null, 16, Vl), [
      [Io, o.inputValue]
    ]),
    e.$slots.append || s._showClear || s._showPwdEye ? (c(), d("div", Ol, [
      s._showClear ? (c(), d("div", {
        key: 0,
        class: "cube-input-clear",
        onTouchend: t[4] || (t[4] = (...r) => s.handleClear && s.handleClear(...r))
      }, Al, 32)) : I("", !0),
      s._showPwdEye ? (c(), d("div", {
        key: 1,
        class: "cube-input-eye",
        onClick: t[5] || (t[5] = (...r) => s.handlePwdEye && s.handlePwdEye(...r))
      }, [
        u("i", {
          class: y(s.eyeClass)
        }, null, 2)
      ])) : I("", !0),
      p(e.$slots, "append")
    ])) : I("", !0)
  ], 2);
}
const ne = /* @__PURE__ */ b(Il, [["render", Ll]]);
ne.install = function(e) {
  e.component(ne.name, ne);
};
const Yl = "cube-textarea", hs = "update:modelValue", Rl = {
  negative: !0,
  remain: !0
}, Xl = {
  name: Yl,
  mixins: [fo],
  data() {
    return {
      textareaValue: this.modelValue,
      expanded: this.autoExpand ? !!this.modelValue : !1,
      isFocus: !1
    };
  },
  emits: [hs, "focus", "blur", "change"],
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
      return typeof e == "boolean" && (e = {}), Object.assign({}, Rl, e);
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
      this.$emit(hs, e), !this.isFocus && this.expanded && (this.expanded = !1);
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
}, Ul = ["placeholder", "maxlength", "disabled"];
function zl(e, t, i, n, o, s) {
  return c(), d("div", {
    class: y(["cube-textarea-wrapper", { "cube-textarea_expanded": o.expanded, "cube-textarea_active": o.isFocus }])
  }, [
    E(u("textarea", fe({
      ref: "input",
      class: "cube-textarea",
      "onUpdate:modelValue": t[0] || (t[0] = (r) => o.textareaValue = r)
    }, e.$props, {
      placeholder: i.placeholder,
      maxlength: i.maxlength,
      disabled: i.disabled,
      onFocus: t[1] || (t[1] = (...r) => s.handleFocus && s.handleFocus(...r)),
      onBlur: t[2] || (t[2] = (...r) => s.handleBlur && s.handleBlur(...r)),
      onChange: t[3] || (t[3] = (...r) => e.changeHandler && e.changeHandler(...r))
    }), `
    `, 16, Ul), [
      [Do, o.textareaValue]
    ]),
    i.indicator ? E((c(), d("span", {
      key: 0,
      class: "cube-textarea-indicator"
    }, k(s.indicatorConf.remain ? s.remain : s.count), 513)), [
      [N, o.expanded]
    ]) : I("", !0)
  ], 2);
}
const Qe = /* @__PURE__ */ b(Xl, [["render", zl]]);
Qe.install = function(e) {
  e.component(Qe.name, Qe);
};
/*!
 * better-normal-scroll v1.12.6
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var Bl = function() {
  function e(t, i) {
    var n = [], o = !0, s = !1, r = void 0;
    try {
      for (var l = t[Symbol.iterator](), a; !(o = (a = l.next()).done) && (n.push(a.value), !(i && n.length === i)); o = !0)
        ;
    } catch (h) {
      s = !0, r = h;
    } finally {
      try {
        !o && l.return && l.return();
      } finally {
        if (s)
          throw r;
      }
    }
    return n;
  }
  return function(t, i) {
    if (Array.isArray(t))
      return t;
    if (Symbol.iterator in Object(t))
      return e(t, i);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), Fl = function(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++)
      i[t] = e[t];
    return i;
  } else
    return Array.from(e);
};
function Wl(e) {
  e.prototype.on = function(t, i) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    this._events[t] || (this._events[t] = []), this._events[t].push([i, n]);
  }, e.prototype.once = function(t, i) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    function o() {
      this.off(t, o), i.apply(n, arguments);
    }
    o.fn = i, this.on(t, o);
  }, e.prototype.off = function(t, i) {
    var n = this._events[t];
    if (n)
      for (var o = n.length; o--; )
        (n[o][0] === i || n[o][0] && n[o][0].fn === i) && (n[o][0] = void 0);
  }, e.prototype.trigger = function(t) {
    var i = this._events[t];
    if (i)
      for (var n = i.length, o = [].concat(Fl(i)), s = 0; s < n; s++) {
        var r = o[s], l = Bl(r, 2), a = l[0], h = l[1];
        a && a.apply(h, [].slice.call(arguments, 1));
      }
  };
}
var _e = typeof window < "u", Pt = _e && navigator.userAgent.toLowerCase(), jl = Pt && /wechatdevtools/.test(Pt), Gl = Pt && Pt.indexOf("android") > 0;
function ce() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
function ot(e) {
  for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    i[n - 1] = arguments[n];
  for (var o = 0; o < i.length; o++) {
    var s = i[o];
    for (var r in s)
      e[r] = s[r];
  }
  return e;
}
function vt(e) {
  return e == null;
}
function us(e, t) {
  return Math.sqrt(e * e + t * t);
}
var Vi = _e && document.createElement("div").style, ei = function() {
  if (!_e)
    return !1;
  var e = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "transform"
  };
  for (var t in e)
    if (Vi[e[t]] !== void 0)
      return t;
  return !1;
}();
function he(e) {
  return ei === !1 ? !1 : ei === "standard" ? e === "transitionEnd" ? "transitionend" : e : ei + e.charAt(0).toUpperCase() + e.substr(1);
}
function Gt(e, t, i, n) {
  e.addEventListener(t, i, { passive: !1, capture: !!n });
}
function Kt(e, t, i, n) {
  e.removeEventListener(t, i, { passive: !1, capture: !!n });
}
function po(e) {
  for (var t = 0, i = 0; e; )
    t -= e.offsetLeft, i -= e.offsetTop, e = e.offsetParent;
  return {
    left: t,
    top: i
  };
}
function wi(e) {
  var t = e.getBoundingClientRect();
  return {
    left: -(t.left + window.pageXOffset),
    top: -(t.top + window.pageYOffset)
  };
}
var mo = he("transform"), Kl = _e && he("perspective") in Vi, Ei = _e && ("ontouchstart" in window || jl), ql = mo !== !1, Zl = _e && he("transition") in Vi, B = {
  transform: mo,
  transitionTimingFunction: he("transitionTimingFunction"),
  transitionDuration: he("transitionDuration"),
  transitionDelay: he("transitionDelay"),
  transformOrigin: he("transformOrigin"),
  transitionEnd: he("transitionEnd")
}, yt = 1, ti = 2, et = {
  touchstart: yt,
  touchmove: yt,
  touchend: yt,
  mousedown: ti,
  mousemove: ti,
  mouseup: ti
};
function Ve(e) {
  if (e instanceof window.SVGElement) {
    var t = e.getBoundingClientRect();
    return {
      top: t.top,
      left: t.left,
      width: t.width,
      height: t.height
    };
  } else
    return {
      top: e.offsetTop,
      left: e.offsetLeft,
      width: e.offsetWidth,
      height: e.offsetHeight
    };
}
function Tt(e, t) {
  for (var i in t)
    if (t[i].test(e[i]))
      return !0;
  return !1;
}
function Jl(e, t) {
  var i = document.createEvent("Event");
  i.initEvent(t, !0, !0), i.pageX = e.pageX, i.pageY = e.pageY, e.target.dispatchEvent(i);
}
function _o(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "click", i = void 0;
  e.type === "mouseup" || e.type === "mousecancel" ? i = e : (e.type === "touchend" || e.type === "touchcancel") && (i = e.changedTouches[0]);
  var n = {};
  i && (n.screenX = i.screenX || 0, n.screenY = i.screenY || 0, n.clientX = i.clientX || 0, n.clientY = i.clientY || 0);
  var o = void 0, s = !0, r = !0;
  if (typeof MouseEvent < "u")
    try {
      o = new MouseEvent(t, ot({
        bubbles: s,
        cancelable: r
      }, n));
    } catch {
      l();
    }
  else
    l();
  function l() {
    o = document.createEvent("Event"), o.initEvent(t, s, r), ot(o, n);
  }
  o.forwardedTouchEvent = !0, o._constructed = !0, e.target.dispatchEvent(o);
}
function Ql(e) {
  _o(e, "dblclick");
}
function ea(e, t) {
  t.firstChild ? ta(e, t.firstChild) : t.appendChild(e);
}
function ta(e, t) {
  t.parentNode.insertBefore(e, t);
}
function ds(e, t) {
  e.removeChild(t);
}
var ia = {
  startX: 0,
  startY: 0,
  scrollX: !1,
  scrollY: !0,
  freeScroll: !1,
  directionLockThreshold: 5,
  eventPassthrough: "",
  click: !1,
  tap: !1,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: !0,
  bounceTime: 800,
  momentum: !0,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 15e-4,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: !0,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: !0,
  useTransition: !0,
  useTransform: !0,
  bindToWrapper: !1,
  disableMouse: Ei,
  disableTouch: !Ei,
  observeDOM: !0,
  autoBlur: !0,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: !1,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: !1,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: !1,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: !1,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: !1,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: !1,
  stopPropagation: !1,
  /**
   * for zoom
   * zoom: {
   *   start: 1,
   *   min: 1,
   *   max: 4
   * }
   */
  zoom: !1,
  /**
   * for infinity
   * infinity: {
   *   render(item, div) {
   *   },
   *   createTombstone() {
   *   },
   *   fetch(count) {
   *   }
   * }
   */
  infinity: !1,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: !1
};
function sa(e) {
  e.prototype._init = function(t, i) {
    this._handleOptions(i), this._events = {}, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this.setScale(1), this._addDOMEvents(), this._initExtFeatures(), this._watchTransition(), this.options.observeDOM && this._initDOMObserver(), this.options.autoBlur && this._handleAutoBlur(), this.refresh(), this.options.snap || this.scrollTo(this.options.startX, this.options.startY), this.enable();
  }, e.prototype.setScale = function(t) {
    this.lastScale = vt(this.scale) ? t : this.scale, this.scale = t;
  }, e.prototype._handleOptions = function(t) {
    this.options = ot({}, ia, t), this.translateZ = this.options.HWCompositing && Kl ? " translateZ(0)" : "", this.options.useTransition = this.options.useTransition && Zl, this.options.useTransform = this.options.useTransform && ql, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollX = this.options.eventPassthrough === "horizontal" ? !1 : this.options.scrollX, this.options.scrollY = this.options.eventPassthrough === "vertical" ? !1 : this.options.scrollY, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.tap === !0 && (this.options.tap = "tap");
  }, e.prototype._addDOMEvents = function() {
    var t = Gt;
    this._handleDOMEvents(t);
  }, e.prototype._removeDOMEvents = function() {
    var t = Kt;
    this._handleDOMEvents(t);
  }, e.prototype._handleDOMEvents = function(t) {
    var i = this.options.bindToWrapper ? this.wrapper : window;
    t(window, "orientationchange", this), t(window, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)), Ei && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)), t(this.scroller, B.transitionEnd, this);
  }, e.prototype._initExtFeatures = function() {
    this.options.snap && this._initSnap(), this.options.scrollbar && this._initScrollbar(), this.options.pullUpLoad && this._initPullUp(), this.options.pullDownRefresh && this._initPullDown(), this.options.wheel && this._initWheel(), this.options.mouseWheel && this._initMouseWheel(), this.options.zoom && this._initZoom(), this.options.infinity && this._initInfinite();
  }, e.prototype._watchTransition = function() {
    if (typeof Object.defineProperty == "function") {
      var t = this, i = !1, n = this.useTransition ? "isInTransition" : "isAnimating";
      Object.defineProperty(this, n, {
        get: function() {
          return i;
        },
        set: function(s) {
          i = s;
          for (var r = t.scroller.children.length ? t.scroller.children : [t.scroller], l = i && !t.pulling ? "none" : "auto", a = 0; a < r.length; a++)
            r[a].style.pointerEvents = l;
        }
      });
    }
  }, e.prototype._handleAutoBlur = function() {
    this.on("scrollStart", function() {
      var t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur();
    });
  }, e.prototype._initDOMObserver = function() {
    var t = this;
    if (typeof MutationObserver < "u") {
      var i = void 0, n = new MutationObserver(function(s) {
        if (!t._shouldNotRefresh()) {
          for (var r = !1, l = !1, a = 0; a < s.length; a++) {
            var h = s[a];
            if (h.type !== "attributes") {
              r = !0;
              break;
            } else if (h.target !== t.scroller) {
              l = !0;
              break;
            }
          }
          r ? t.refresh() : l && (clearTimeout(i), i = setTimeout(function() {
            t._shouldNotRefresh() || t.refresh();
          }, 60));
        }
      }), o = {
        attributes: !0,
        childList: !0,
        subtree: !0
      };
      n.observe(this.scroller, o), this.on("destroy", function() {
        n.disconnect();
      });
    } else
      this._checkDOMUpdate();
  }, e.prototype._shouldNotRefresh = function() {
    var t = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
    return this.isInTransition || this.stopFromTransition || t;
  }, e.prototype._checkDOMUpdate = function() {
    var t = Ve(this.scroller), i = t.width, n = t.height;
    function o() {
      if (!this.destroyed) {
        t = Ve(this.scroller);
        var r = t.width, l = t.height;
        (i !== r || n !== l) && this.refresh(), i = r, n = l, s.call(this);
      }
    }
    function s() {
      var r = this;
      setTimeout(function() {
        o.call(r);
      }, 1e3);
    }
    s.call(this);
  }, e.prototype.handleEvent = function(t) {
    switch (t.type) {
      case "touchstart":
      case "mousedown":
        this._start(t), this.options.zoom && t.touches && t.touches.length > 1 && this._zoomStart(t);
        break;
      case "touchmove":
      case "mousemove":
        this.options.zoom && t.touches && t.touches.length > 1 ? this._zoom(t) : this._move(t);
        break;
      case "touchend":
      case "mouseup":
      case "touchcancel":
      case "mousecancel":
        this.scaled ? this._zoomEnd(t) : this._end(t);
        break;
      case "orientationchange":
      case "resize":
        this._resize();
        break;
      case "transitionend":
      case "webkitTransitionEnd":
      case "oTransitionEnd":
      case "MSTransitionEnd":
        this._transitionEnd(t);
        break;
      case "click":
        this.enabled && !t._constructed && (Tt(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
        break;
      case "wheel":
      case "DOMMouseScroll":
      case "mousewheel":
        this._onMouseWheel(t);
        break;
    }
  }, e.prototype.refresh = function() {
    var t = window.getComputedStyle(this.wrapper, null).position === "static", i = Ve(this.wrapper);
    this.wrapperWidth = i.width, this.wrapperHeight = i.height;
    var n = Ve(this.scroller);
    this.scrollerWidth = Math.round(n.width * this.scale), this.scrollerHeight = Math.round(n.height * this.scale), this.relativeX = n.left, this.relativeY = n.top, t && (this.relativeX -= i.left, this.relativeY -= i.top), this.minScrollX = 0, this.minScrollY = 0;
    var o = this.options.wheel;
    o ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0, this.selectedIndex === void 0 && (this.selectedIndex = o.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX, this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX, this.minScrollX = this.maxScrollX), this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY, this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY, this.minScrollY = this.maxScrollY)), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY, this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = this.minScrollY, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = po(this.wrapper), this.trigger("refresh"), !this.scaled && this.resetPosition();
  }, e.prototype.enable = function() {
    this.enabled = !0;
  }, e.prototype.disable = function() {
    this.enabled = !1;
  };
}
var z = {
  // easeOutQuint
  swipe: {
    style: "cubic-bezier(0.23, 1, 0.32, 1)",
    fn: function(t) {
      return 1 + --t * t * t * t * t;
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    fn: function(t) {
      return t * (2 - t);
    }
  },
  // easeOutQuart
  bounce: {
    style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    fn: function(t) {
      return 1 - --t * t * t * t;
    }
  }
};
function fs(e, t, i, n, o, s, r) {
  var l = e - t, a = Math.abs(l) / i, h = r.deceleration, f = r.itemHeight, m = r.swipeBounceTime, v = r.wheel, g = r.swipeTime, _ = g, P = v ? 4 : 15, O = e + a / h * (l < 0 ? -1 : 1);
  return v && f && (O = Math.round(O / f) * f), O < n ? (O = s ? Math.max(n - s / 4, n - s / P * a) : n, _ = m) : O > o && (O = s ? Math.min(o + s / 4, o + s / P * a) : o, _ = m), {
    destination: Math.round(O),
    duration: _
  };
}
var na = 100 / 60;
function go() {
}
var ii = function() {
  return _e ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
  function(e) {
    return window.setTimeout(e, (e.interval || na) / 2);
  } : go;
}(), Me = function() {
  return _e ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(e) {
    window.clearTimeout(e);
  } : go;
}(), qe = 1, xt = -1, si = 1, ni = -1, ps = 1, tt = 3;
function It(e) {
  console.error("[BScroll warn]: " + e);
}
function wt(e, t) {
  if (!e)
    throw new Error("[BScroll] " + t);
}
function oa(e) {
  e.prototype._start = function(t) {
    var i = et[t.type];
    if (!(i !== yt && t.button !== 0) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
      this.initiated = i, this.options.preventDefault && !Tt(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.movingDirectionX = 0, this.movingDirectionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = ce(), this.options.wheel && (this.target = t.target), this.stop();
      var n = t.touches ? t.touches[0] : t;
      this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this.trigger("beforeScrollStart");
    }
  }, e.prototype._move = function(t) {
    if (!(!this.enabled || this.destroyed || et[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches ? t.touches[0] : t, n = i.pageX - this.pointX, o = i.pageY - this.pointY;
      this.pointX = i.pageX, this.pointY = i.pageY, this.distX += n, this.distY += o;
      var s = Math.abs(this.distX), r = Math.abs(this.distY), l = ce();
      if (!(l - this.endTime > this.options.momentumLimitTime && r < this.options.momentumLimitDistance && s < this.options.momentumLimitDistance)) {
        if (!this.directionLocked && !this.options.freeScroll && (s > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= s + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), this.directionLocked === "h") {
          if (this.options.eventPassthrough === "vertical")
            t.preventDefault();
          else if (this.options.eventPassthrough === "horizontal") {
            this.initiated = !1;
            return;
          }
          o = 0;
        } else if (this.directionLocked === "v") {
          if (this.options.eventPassthrough === "horizontal")
            t.preventDefault();
          else if (this.options.eventPassthrough === "vertical") {
            this.initiated = !1;
            return;
          }
          n = 0;
        }
        n = this.hasHorizontalScroll ? n : 0, o = this.hasVerticalScroll ? o : 0, this.movingDirectionX = n > 0 ? ni : n < 0 ? si : 0, this.movingDirectionY = o > 0 ? xt : o < 0 ? qe : 0;
        var a = this.x + n, h = this.y + o, f = !1, m = !1, v = !1, g = !1, _ = this.options.bounce;
        _ !== !1 && (f = _.top === void 0 ? !0 : _.top, m = _.bottom === void 0 ? !0 : _.bottom, v = _.left === void 0 ? !0 : _.left, g = _.right === void 0 ? !0 : _.right), (a > this.minScrollX || a < this.maxScrollX) && (a > this.minScrollX && v || a < this.maxScrollX && g ? a = this.x + n / 3 : a = a > this.minScrollX ? this.minScrollX : this.maxScrollX), (h > this.minScrollY || h < this.maxScrollY) && (h > this.minScrollY && f || h < this.maxScrollY && m ? h = this.y + o / 3 : h = h > this.minScrollY ? this.minScrollY : this.maxScrollY), this.moved || (this.moved = !0, this.trigger("scrollStart")), this._translate(a, h), l - this.startTime > this.options.momentumLimitTime && (this.startTime = l, this.startX = this.x, this.startY = this.y, this.options.probeType === ps && this.trigger("scroll", {
          x: this.x,
          y: this.y
        })), this.options.probeType > ps && this.trigger("scroll", {
          x: this.x,
          y: this.y
        });
        var P = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, O = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, G = this.pointX - P, Y = this.pointY - O;
        (G > document.documentElement.clientWidth - this.options.momentumLimitDistance || G < this.options.momentumLimitDistance || Y < this.options.momentumLimitDistance || Y > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t);
      }
    }
  }, e.prototype._end = function(t) {
    if (!(!this.enabled || this.destroyed || et[t.type] !== this.initiated)) {
      this.initiated = !1, this.options.preventDefault && !Tt(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.trigger("touchEnd", {
        x: this.x,
        y: this.y
      }), this.isInTransition = !1;
      var i = Math.round(this.x), n = Math.round(this.y), o = i - this.absStartX, s = n - this.absStartY;
      if (this.directionX = o > 0 ? ni : o < 0 ? si : 0, this.directionY = s > 0 ? xt : s < 0 ? qe : 0, !(this.options.pullDownRefresh && this._checkPullDown())) {
        if (this._checkClick(t)) {
          this.trigger("scrollCancel");
          return;
        }
        if (!this.resetPosition(this.options.bounceTime, z.bounce)) {
          this._translate(i, n), this.endTime = ce();
          var r = this.endTime - this.startTime, l = Math.abs(i - this.startX), a = Math.abs(n - this.startY);
          if (this._events.flick && r < this.options.flickLimitTime && l < this.options.flickLimitDistance && a < this.options.flickLimitDistance) {
            this.trigger("flick");
            return;
          }
          var h = 0;
          if (this.options.momentum && r < this.options.momentumLimitTime && (a > this.options.momentumLimitDistance || l > this.options.momentumLimitDistance)) {
            var f = !1, m = !1, v = !1, g = !1, _ = this.options.bounce;
            _ !== !1 && (f = _.top === void 0 ? !0 : _.top, m = _.bottom === void 0 ? !0 : _.bottom, v = _.left === void 0 ? !0 : _.left, g = _.right === void 0 ? !0 : _.right);
            var P = this.directionX === ni && v || this.directionX === si && g ? this.wrapperWidth : 0, O = this.directionY === xt && f || this.directionY === qe && m ? this.wrapperHeight : 0, G = this.hasHorizontalScroll ? fs(this.x, this.startX, r, this.maxScrollX, this.minScrollX, P, this.options) : { destination: i, duration: 0 }, Y = this.hasVerticalScroll ? fs(this.y, this.startY, r, this.maxScrollY, this.minScrollY, O, this.options) : { destination: n, duration: 0 };
            i = G.destination, n = Y.destination, h = Math.max(G.duration, Y.duration), this.isInTransition = !0;
          } else
            this.options.wheel && (n = Math.round(n / this.itemHeight) * this.itemHeight, h = this.options.wheel.adjustTime || 400);
          var ge = z.swipe;
          if (this.options.snap) {
            var D = this._nearestSnap(i, n);
            this.currentPage = D, h = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - D.x), 1e3), Math.min(Math.abs(n - D.y), 1e3)), 300), i = D.x, n = D.y, this.directionX = 0, this.directionY = 0, ge = this.options.snap.easing || z.bounce;
          }
          if (i !== this.x || n !== this.y) {
            (i > this.minScrollX || i < this.maxScrollX || n > this.minScrollY || n < this.maxScrollY) && (ge = z.swipeBounce), this.scrollTo(i, n, h, ge);
            return;
          }
          this.options.wheel && (this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight))), this.trigger("scrollEnd", {
            x: this.x,
            y: this.y
          });
        }
      }
    }
  }, e.prototype._checkClick = function(t) {
    var i = this.stopFromTransition && !this.pulling;
    if (this.stopFromTransition = !1, !this.moved)
      if (this.options.wheel) {
        if (this.target && this.target.classList.contains(this.options.wheel.wheelWrapperClass)) {
          var n = Math.abs(Math.round(this.y / this.itemHeight)), o = Math.round((this.pointY + wi(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[n + o];
        }
        return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, z.swipe), !0;
      } else {
        if (!i) {
          var s = this.options.dblclick, r = !1;
          if (s && this.lastClickTime) {
            var l = s.delay, a = l === void 0 ? 300 : l;
            ce() - this.lastClickTime < a && (r = !0, Ql(t));
          }
          return this.options.tap && Jl(t, this.options.tap), this.options.click && !Tt(t.target, this.options.preventDefaultException) && _o(t), this.lastClickTime = r ? null : ce(), !0;
        }
        return !1;
      }
    return !1;
  }, e.prototype._resize = function() {
    var t = this;
    this.enabled && (Gl && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
      t.refresh();
    }, this.options.resizePolling));
  }, e.prototype._startProbe = function() {
    Me(this.probeTimer), this.probeTimer = ii(i);
    var t = this;
    function i() {
      var n = t.getComputedPosition();
      if (t.trigger("scroll", n), !t.isInTransition) {
        t.trigger("scrollEnd", n);
        return;
      }
      t.probeTimer = ii(i);
    }
  }, e.prototype._transitionTime = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    if (this.scrollerStyle[B.transitionDuration] = t + "ms", this.options.wheel)
      for (var i = 0; i < this.items.length; i++)
        this.items[i].style[B.transitionDuration] = t + "ms";
    if (this.indicators)
      for (var n = 0; n < this.indicators.length; n++)
        this.indicators[n].transitionTime(t);
  }, e.prototype._transitionTimingFunction = function(t) {
    if (this.scrollerStyle[B.transitionTimingFunction] = t, this.options.wheel)
      for (var i = 0; i < this.items.length; i++)
        this.items[i].style[B.transitionTimingFunction] = t;
    if (this.indicators)
      for (var n = 0; n < this.indicators.length; n++)
        this.indicators[n].transitionTimingFunction(t);
  }, e.prototype._transitionEnd = function(t) {
    if (!(t.target !== this.scroller || !this.isInTransition)) {
      this._transitionTime();
      var i = !this.pulling || this.movingDirectionY === qe;
      i && !this.resetPosition(this.options.bounceTime, z.bounce) && (this.isInTransition = !1, this.options.probeType !== tt && this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }));
    }
  }, e.prototype._translate = function(t, i, n) {
    if (wt(!vt(t) && !vt(i), "Translate x or y is null or undefined."), vt(n) && (n = this.scale), this.options.useTransform ? this.scrollerStyle[B.transform] = "translate(" + t + "px," + i + "px) scale(" + n + ")" + this.translateZ : (t = Math.round(t), i = Math.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.options.wheel)
      for (var o = this.options.wheel.rotate, s = o === void 0 ? 25 : o, r = 0; r < this.items.length; r++) {
        var l = s * (i / this.itemHeight + r);
        this.items[r].style[B.transform] = "rotateX(" + l + "deg)";
      }
    if (this.x = t, this.y = i, this.setScale(n), this.indicators)
      for (var a = 0; a < this.indicators.length; a++)
        this.indicators[a].updatePosition();
  }, e.prototype._animate = function(t, i, n, o) {
    var s = this, r = this.x, l = this.y, a = this.lastScale, h = this.scale, f = ce(), m = f + n;
    function v() {
      var g = ce();
      if (g >= m) {
        s.isAnimating = !1, s._translate(t, i, h), s.trigger("scroll", {
          x: s.x,
          y: s.y
        }), !s.pulling && !s.resetPosition(s.options.bounceTime) && s.trigger("scrollEnd", {
          x: s.x,
          y: s.y
        });
        return;
      }
      g = (g - f) / n;
      var _ = o(g), P = (t - r) * _ + r, O = (i - l) * _ + l, G = (h - a) * _ + a;
      s._translate(P, O, G), s.isAnimating && (s.animateTimer = ii(v)), s.options.probeType === tt && s.trigger("scroll", {
        x: s.x,
        y: s.y
      });
    }
    this.isAnimating = !0, Me(this.animateTimer), v();
  }, e.prototype.scrollBy = function(t, i) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : z.bounce;
    t = this.x + t, i = this.y + i, this.scrollTo(t, i, n, o);
  }, e.prototype.scrollTo = function(t, i) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : z.bounce;
    this.isInTransition = this.options.useTransition && n > 0 && (t !== this.x || i !== this.y), !n || this.options.useTransition ? (this._transitionTimingFunction(o.style), this._transitionTime(n), this._translate(t, i), n && this.options.probeType === tt && this._startProbe(), !n && (t !== this.x || i !== this.y) && (this.trigger("scroll", {
      x: t,
      y: i
    }), this._reflow = document.body.offsetHeight, this.resetPosition(this.options.bounceTime, z.bounce) || this.trigger("scrollEnd", {
      x: t,
      y: i
    })), this.options.wheel && (i > this.minScrollY ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(i / this.itemHeight)))) : this._animate(t, i, n, o.fn);
  }, e.prototype.scrollToElement = function(t, i, n, o, s) {
    if (t && (t = t.nodeType ? t : this.scroller.querySelector(t), !(this.options.wheel && !t.classList.contains(this.options.wheel.wheelItemClass)))) {
      var r = po(t);
      r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, n === !0 && (n = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= n || 0, r.top -= o || 0, r.left = r.left > this.minScrollX ? this.minScrollX : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > this.minScrollY ? this.minScrollY : r.top < this.maxScrollY ? this.maxScrollY : r.top, this.options.wheel && (r.top = Math.round(r.top / this.itemHeight) * this.itemHeight), this.scrollTo(r.left, r.top, i, s);
    }
  }, e.prototype.resetPosition = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z.bounce, n = this.x, o = Math.round(n);
    !this.hasHorizontalScroll || o > this.minScrollX ? n = this.minScrollX : o < this.maxScrollX && (n = this.maxScrollX);
    var s = this.y, r = Math.round(s);
    return !this.hasVerticalScroll || r > this.minScrollY ? s = this.minScrollY : r < this.maxScrollY && (s = this.maxScrollY), n === this.x && s === this.y ? !1 : (this.scrollTo(n, s, t, i), !0);
  }, e.prototype.getComputedPosition = function() {
    var t = window.getComputedStyle(this.scroller, null), i = void 0, n = void 0;
    return this.options.useTransform ? (t = t[B.transform].split(")")[0].split(", "), i = +(t[12] || t[4]), n = +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""), n = +t.top.replace(/[^-\d.]/g, "")), {
      x: i,
      y: n
    };
  }, e.prototype.stop = function() {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = !1, Me(this.probeTimer);
      var t = this.getComputedPosition();
      this._translate(t.x, t.y), this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0;
    } else
      !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, Me(this.animateTimer), this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0);
  }, e.prototype.destroy = function() {
    this.destroyed = !0, this.trigger("destroy"), this.options.useTransition ? Me(this.probeTimer) : Me(this.animateTimer), this._removeDOMEvents(), this._events = {};
  };
}
function ra(e) {
  e.prototype._initSnap = function() {
    var t = this;
    this.currentPage = {};
    var i = this.options.snap;
    if (i.loop) {
      var n = this.scroller.children;
      n.length > 1 ? (ea(n[n.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(n[1].cloneNode(!0))) : i.loop = !1;
    }
    var o = i.el;
    typeof o == "string" && (o = this.scroller.querySelectorAll(o)), this.on("refresh", function() {
      if (t.pages = [], !(!t.wrapperWidth || !t.wrapperHeight || !t.scrollerWidth || !t.scrollerHeight)) {
        var s = i.stepX || t.wrapperWidth, r = i.stepY || t.wrapperHeight, l = 0, a = void 0, h = void 0, f = void 0, m = 0, v = void 0, g = 0, _ = void 0, P = void 0;
        if (o)
          for (v = o.length, _ = -1; m < v; m++)
            P = Ve(o[m]), (m === 0 || P.left <= Ve(o[m - 1]).left) && (g = 0, _++), t.pages[g] || (t.pages[g] = []), l = Math.max(-P.left, t.maxScrollX), a = Math.max(-P.top, t.maxScrollY), h = l - Math.round(P.width / 2), f = a - Math.round(P.height / 2), t.pages[g][_] = {
              x: l,
              y: a,
              width: P.width,
              height: P.height,
              cx: h,
              cy: f
            }, l > t.maxScrollX && g++;
        else
          for (h = Math.round(s / 2), f = Math.round(r / 2); l > -t.scrollerWidth; ) {
            for (t.pages[m] = [], v = 0, a = 0; a > -t.scrollerHeight; )
              t.pages[m][v] = {
                x: Math.max(l, t.maxScrollX),
                y: Math.max(a, t.maxScrollY),
                width: s,
                height: r,
                cx: l - h,
                cy: a - f
              }, a -= r, v++;
            l -= s, m++;
          }
        t._checkSnapLoop();
        var O = i._loopX ? 1 : 0, G = i._loopY ? 1 : 0;
        t._goToPage(t.currentPage.pageX || O, t.currentPage.pageY || G, 0);
        var Y = i.threshold;
        Y % 1 === 0 ? (t.snapThresholdX = Y, t.snapThresholdY = Y) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * Y), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * Y));
      }
    }), this.on("scrollEnd", function() {
      i.loop && (i._loopX ? (t.currentPage.pageX === 0 && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0)) : (t.currentPage.pageY === 0 && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0)));
    }), i.listenFlick !== !1 && this.on("flick", function() {
      var s = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
      t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, s);
    }), this.on("destroy", function() {
      if (i.loop) {
        var s = t.scroller.children;
        s.length > 2 && (ds(t.scroller, s[s.length - 1]), ds(t.scroller, s[0]));
      }
    });
  }, e.prototype._checkSnapLoop = function() {
    var t = this.options.snap;
    !t.loop || !this.pages || !this.pages.length || (this.pages.length > 1 && (t._loopX = !0), this.pages[0] && this.pages[0].length > 1 && (t._loopY = !0), t._loopX && t._loopY && It("Loop does not support two direction at the same time."));
  }, e.prototype._nearestSnap = function(t, i) {
    if (!this.pages.length)
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    var n = 0;
    if (Math.abs(t - this.absStartX) <= this.snapThresholdX && Math.abs(i - this.absStartY) <= this.snapThresholdY)
      return this.currentPage;
    t > this.minScrollX ? t = this.minScrollX : t < this.maxScrollX && (t = this.maxScrollX), i > this.minScrollY ? i = this.minScrollY : i < this.maxScrollY && (i = this.maxScrollY);
    for (var o = this.pages.length; n < o; n++)
      if (t >= this.pages[n][0].cx) {
        t = this.pages[n][0].x;
        break;
      }
    o = this.pages[n].length;
    for (var s = 0; s < o; s++)
      if (i >= this.pages[0][s].cy) {
        i = this.pages[0][s].y;
        break;
      }
    return n === this.currentPage.pageX && (n += this.directionX, n < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x), s === this.currentPage.pageY && (s += this.directionY, s < 0 ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), i = this.pages[0][s].y), {
      x: t,
      y: i,
      pageX: n,
      pageY: s
    };
  }, e.prototype._goToPage = function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments[2], o = arguments[3], s = this.options.snap;
    if (!(!s || !this.pages || !this.pages.length) && (o = o || s.easing || z.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), !!this.pages[t])) {
      i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
      var r = this.pages[t][i].x, l = this.pages[t][i].y;
      n = n === void 0 ? s.speed || Math.max(Math.max(Math.min(Math.abs(r - this.x), 1e3), Math.min(Math.abs(l - this.y), 1e3)), 300) : n, this.currentPage = {
        x: r,
        y: l,
        pageX: t,
        pageY: i
      }, this.scrollTo(r, l, n, o);
    }
  }, e.prototype.goToPage = function(t, i, n, o) {
    var s = this.options.snap;
    if (!(!s || !this.pages || !this.pages.length)) {
      if (s.loop) {
        var r = void 0;
        s._loopX ? (r = this.pages.length - 2, t >= r ? t = r - 1 : t < 0 && (t = 0), t += 1) : (r = this.pages[0].length - 2, i >= r ? i = r - 1 : i < 0 && (i = 0), i += 1);
      }
      this._goToPage(t, i, n, o);
    }
  }, e.prototype.next = function(t, i) {
    var n = this.options.snap;
    if (n) {
      var o = this.currentPage.pageX, s = this.currentPage.pageY;
      o++, o >= this.pages.length && this.hasVerticalScroll && (o = 0, s++), this._goToPage(o, s, t, i);
    }
  }, e.prototype.prev = function(t, i) {
    var n = this.options.snap;
    if (n) {
      var o = this.currentPage.pageX, s = this.currentPage.pageY;
      o--, o < 0 && this.hasVerticalScroll && (o = 0, s--), this._goToPage(o, s, t, i);
    }
  }, e.prototype.getCurrentPage = function() {
    var t = this.options.snap;
    if (!t)
      return null;
    if (t.loop) {
      var i = void 0;
      return t._loopX ? i = ot({}, this.currentPage, {
        pageX: this.currentPage.pageX - 1
      }) : i = ot({}, this.currentPage, {
        pageY: this.currentPage.pageY - 1
      }), i;
    }
    return this.currentPage;
  };
}
function la(e) {
  e.prototype.wheelTo = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    this.options.wheel && (this.y = -t * this.itemHeight, this.scrollTo(0, this.y));
  }, e.prototype.getSelectedIndex = function() {
    return this.options.wheel && this.selectedIndex;
  }, e.prototype._initWheel = function() {
    var t = this.options.wheel;
    t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"), t.wheelItemClass || (t.wheelItemClass = "wheel-item"), t.selectedIndex === void 0 && (t.selectedIndex = 0, It("wheel option selectedIndex is required!"));
  };
}
var Oe = 8;
function aa(e) {
  e.prototype._initScrollbar = function() {
    var t = this, i = this.options.scrollbar, n = i.fade, o = n === void 0 ? !0 : n, s = i.interactive, r = s === void 0 ? !1 : s;
    this.indicators = [];
    var l = void 0;
    this.options.scrollX && (l = {
      el: ms("horizontal"),
      direction: "horizontal",
      fade: o,
      interactive: r
    }, this._insertScrollBar(l.el), this.indicators.push(new V(this, l))), this.options.scrollY && (l = {
      el: ms("vertical"),
      direction: "vertical",
      fade: o,
      interactive: r
    }, this._insertScrollBar(l.el), this.indicators.push(new V(this, l))), this.on("refresh", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].refresh();
    }), o && (this.on("scrollEnd", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].fade();
    }), this.on("scrollCancel", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].fade();
    }), this.on("scrollStart", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].fade(!0);
    }), this.on("beforeScrollStart", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].fade(!0, !0);
    })), this.on("destroy", function() {
      t._removeScrollBars();
    });
  }, e.prototype._insertScrollBar = function(t) {
    this.wrapper.appendChild(t);
  }, e.prototype._removeScrollBars = function() {
    for (var t = 0; t < this.indicators.length; t++)
      this.indicators[t].destroy();
  };
}
function ms(e) {
  var t = document.createElement("div"), i = document.createElement("div");
  return t.style.cssText = "position:absolute;z-index:9999;pointerEvents:none", i.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;", i.className = "bscroll-indicator", e === "horizontal" ? (t.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", i.style.height = "100%", t.className = "bscroll-horizontal-scrollbar") : (t.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", i.style.width = "100%", t.className = "bscroll-vertical-scrollbar"), t.style.cssText += ";overflow:hidden", t.appendChild(i), t;
}
function V(e, t) {
  this.wrapper = t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.direction = t.direction, t.fade ? (this.visible = 0, this.wrapperStyle.opacity = "0") : this.visible = 1, this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.x = 0, this.y = 0, t.interactive && this._addDOMEvents();
}
V.prototype.handleEvent = function(e) {
  switch (e.type) {
    case "touchstart":
    case "mousedown":
      this._start(e);
      break;
    case "touchmove":
    case "mousemove":
      this._move(e);
      break;
    case "touchend":
    case "mouseup":
    case "touchcancel":
    case "mousecancel":
      this._end(e);
      break;
  }
};
V.prototype.refresh = function() {
  this._shouldShow() && (this.transitionTime(), this._calculate(), this.updatePosition());
};
V.prototype.fade = function(e, t) {
  var i = this;
  if (!(t && !this.visible)) {
    var n = e ? 250 : 500;
    e = e ? "1" : "0", this.wrapperStyle[B.transitionDuration] = n + "ms", clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
      i.wrapperStyle.opacity = e, i.visible = +e;
    }, 0);
  }
};
V.prototype.updatePosition = function() {
  if (this.direction === "vertical") {
    var e = Math.round(this.sizeRatioY * this.scroller.y);
    if (e < 0) {
      this.transitionTime(500);
      var t = Math.max(this.indicatorHeight + e * 3, Oe);
      this.indicatorStyle.height = t + "px", e = 0;
    } else if (e > this.maxPosY) {
      this.transitionTime(500);
      var i = Math.max(this.indicatorHeight - (e - this.maxPosY) * 3, Oe);
      this.indicatorStyle.height = i + "px", e = this.maxPosY + this.indicatorHeight - i;
    } else
      this.indicatorStyle.height = this.indicatorHeight + "px";
    this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[B.transform] = "translateY(" + e + "px)" + this.scroller.translateZ : this.indicatorStyle.top = e + "px";
  } else {
    var n = Math.round(this.sizeRatioX * this.scroller.x);
    if (n < 0) {
      this.transitionTime(500);
      var o = Math.max(this.indicatorWidth + n * 3, Oe);
      this.indicatorStyle.width = o + "px", n = 0;
    } else if (n > this.maxPosX) {
      this.transitionTime(500);
      var s = Math.max(this.indicatorWidth - (n - this.maxPosX) * 3, Oe);
      this.indicatorStyle.width = s + "px", n = this.maxPosX + this.indicatorWidth - s;
    } else
      this.indicatorStyle.width = this.indicatorWidth + "px";
    this.x = n, this.scroller.options.useTransform ? this.indicatorStyle[B.transform] = "translateX(" + n + "px)" + this.scroller.translateZ : this.indicatorStyle.left = n + "px";
  }
};
V.prototype.transitionTime = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  this.indicatorStyle[B.transitionDuration] = e + "ms";
};
V.prototype.transitionTimingFunction = function(e) {
  this.indicatorStyle[B.transitionTimingFunction] = e;
};
V.prototype.destroy = function() {
  this._removeDOMEvents(), this.wrapper.parentNode.removeChild(this.wrapper);
};
V.prototype._start = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = ce(), this._handleMoveEvents(Gt), this.scroller.trigger("beforeScrollStart");
};
V.prototype._move = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.moved || this.scroller.trigger("scrollStart"), this.moved = !0;
  var i = t.pageX - this.lastPointX;
  this.lastPointX = t.pageX;
  var n = t.pageY - this.lastPointY;
  this.lastPointY = t.pageY;
  var o = this.x + i, s = this.y + n;
  this._pos(o, s);
};
V.prototype._end = function(e) {
  if (this.initiated) {
    this.initiated = !1, e.preventDefault(), e.stopPropagation(), this._handleMoveEvents(Kt);
    var t = this.scroller.options.snap;
    if (t) {
      var i = t.speed, n = t.easing, o = n === void 0 ? z.bounce : n, s = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), r = i || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - s.x), 1e3), Math.min(Math.abs(this.scroller.y - s.y), 1e3)), 300);
      (this.scroller.x !== s.x || this.scroller.y !== s.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = s, this.scroller.scrollTo(s.x, s.y, r, o));
    }
    this.moved && this.scroller.trigger("scrollEnd", {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};
V.prototype._pos = function(e, t) {
  e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = Math.round(e / this.sizeRatioX), t = Math.round(t / this.sizeRatioY), this.scroller.scrollTo(e, t), this.scroller.trigger("scroll", {
    x: this.scroller.x,
    y: this.scroller.y
  });
};
V.prototype._shouldShow = function() {
  return this.direction === "vertical" && this.scroller.hasVerticalScroll || this.direction === "horizontal" && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "", !0) : (this.wrapper.style.display = "none", !1);
};
V.prototype._calculate = function() {
  if (this.direction === "vertical") {
    var e = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(e * e / (this.scroller.scrollerHeight || e || 1)), Oe), this.indicatorStyle.height = this.indicatorHeight + "px", this.maxPosY = e - this.indicatorHeight, this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var t = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(t * t / (this.scroller.scrollerWidth || t || 1)), Oe), this.indicatorStyle.width = this.indicatorWidth + "px", this.maxPosX = t - this.indicatorWidth, this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};
V.prototype._addDOMEvents = function() {
  var e = Gt;
  this._handleDOMEvents(e);
};
V.prototype._removeDOMEvents = function() {
  var e = Kt;
  this._handleDOMEvents(e), this._handleMoveEvents(e);
};
V.prototype._handleMoveEvents = function(e) {
  this.scroller.options.disableTouch || e(window, "touchmove", this), this.scroller.options.disableMouse || e(window, "mousemove", this);
};
V.prototype._handleDOMEvents = function(e) {
  this.scroller.options.disableTouch || (e(this.indicator, "touchstart", this), e(window, "touchend", this)), this.scroller.options.disableMouse || (e(this.indicator, "mousedown", this), e(window, "mouseup", this));
};
function ca(e) {
  e.prototype._initPullDown = function() {
    this.options.probeType = tt;
  }, e.prototype._checkPullDown = function() {
    var t = this.options.pullDownRefresh, i = t.threshold, n = i === void 0 ? 90 : i, o = t.stop, s = o === void 0 ? 40 : o;
    return this.directionY !== xt || this.y < n ? !1 : (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, s, this.options.bounceTime, z.bounce), this.pulling);
  }, e.prototype.finishPullDown = function() {
    this.pulling = !1, this.resetPosition(this.options.bounceTime, z.bounce);
  }, e.prototype.openPullDown = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullDownRefresh = t, this._initPullDown();
  }, e.prototype.closePullDown = function() {
    this.options.pullDownRefresh = !1;
  };
}
function ha(e) {
  e.prototype._initPullUp = function() {
    this.options.probeType = tt, this.pullupWatching = !1, this._watchPullUp();
  }, e.prototype._watchPullUp = function() {
    this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd));
  }, e.prototype._checkToEnd = function(t) {
    var i = this, n = this.options.pullUpLoad.threshold, o = n === void 0 ? 0 : n;
    this.movingDirectionY === qe && t.y <= this.maxScrollY + o && (this.once("scrollEnd", function() {
      i.pullupWatching = !1;
    }), this.trigger("pullingUp"), this.off("scroll", this._checkToEnd));
  }, e.prototype.finishPullUp = function() {
    var t = this;
    this.pullupWatching ? this.once("scrollEnd", function() {
      t._watchPullUp();
    }) : this._watchPullUp();
  }, e.prototype.openPullUp = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullUpLoad = t, this._initPullUp();
  }, e.prototype.closePullUp = function() {
    this.options.pullUpLoad = !1, this.pullupWatching && (this.pullupWatching = !1, this.off("scroll", this._checkToEnd));
  };
}
function ua(e) {
  e.prototype._initMouseWheel = function() {
    var t = this;
    this._handleMouseWheelEvent(Gt), this.on("destroy", function() {
      clearTimeout(t.mouseWheelTimer), clearTimeout(t.mouseWheelEndTimer), t._handleMouseWheelEvent(Kt);
    }), this.firstWheelOpreation = !0;
  }, e.prototype._handleMouseWheelEvent = function(t) {
    t(this.wrapper, "wheel", this), t(this.wrapper, "mousewheel", this), t(this.wrapper, "DOMMouseScroll", this);
  }, e.prototype._onMouseWheel = function(t) {
    var i = this;
    if (this.enabled) {
      t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.firstWheelOpreation && this.trigger("scrollStart"), this.firstWheelOpreation = !1;
      var n = this.options.mouseWheel, o = n.speed, s = o === void 0 ? 20 : o, r = n.invert, l = r === void 0 ? !1 : r, a = n.easeTime, h = a === void 0 ? 300 : a;
      clearTimeout(this.mouseWheelTimer), this.mouseWheelTimer = setTimeout(function() {
        !i.options.snap && !h && i.trigger("scrollEnd", {
          x: i.x,
          y: i.y
        }), i.firstWheelOpreation = !0;
      }, 400);
      var f = void 0, m = void 0;
      switch (!0) {
        case "deltaX" in t:
          t.deltaMode === 1 ? (f = -t.deltaX * s, m = -t.deltaY * s) : (f = -t.deltaX, m = -t.deltaY);
          break;
        case "wheelDeltaX" in t:
          f = t.wheelDeltaX / 120 * s, m = t.wheelDeltaY / 120 * s;
          break;
        case "wheelDelta" in t:
          f = m = t.wheelDelta / 120 * s;
          break;
        case "detail" in t:
          f = m = -t.detail / 3 * s;
          break;
        default:
          return;
      }
      var v = l ? -1 : 1;
      f *= v, m *= v, this.hasVerticalScroll || (f = m, m = 0);
      var g = void 0, _ = void 0;
      if (this.options.snap) {
        g = this.currentPage.pageX, _ = this.currentPage.pageY, f > 0 ? g-- : f < 0 && g++, m > 0 ? _-- : m < 0 && _++, this._goToPage(g, _);
        return;
      }
      g = this.x + Math.round(this.hasHorizontalScroll ? f : 0), _ = this.y + Math.round(this.hasVerticalScroll ? m : 0), this.movingDirectionX = this.directionX = f > 0 ? -1 : f < 0 ? 1 : 0, this.movingDirectionY = this.directionY = m > 0 ? -1 : m < 0 ? 1 : 0, g > this.minScrollX ? g = this.minScrollX : g < this.maxScrollX && (g = this.maxScrollX), _ > this.minScrollY ? _ = this.minScrollY : _ < this.maxScrollY && (_ = this.maxScrollY);
      var P = this.y === _;
      this.scrollTo(g, _, h, z.swipe), this.trigger("scroll", {
        x: this.x,
        y: this.y
      }), clearTimeout(this.mouseWheelEndTimer), P && (this.mouseWheelEndTimer = setTimeout(function() {
        i.trigger("scrollEnd", {
          x: i.x,
          y: i.y
        });
      }, h));
    }
  };
}
function da(e) {
  e.prototype._initZoom = function() {
    var t = this.options.zoom, i = t.start, n = i === void 0 ? 1 : i, o = t.min, s = o === void 0 ? 1 : o, r = t.max, l = r === void 0 ? 4 : r;
    this.scale = Math.min(Math.max(n, s), l), this.setScale(this.scale), this.scrollerStyle[B.transformOrigin] = "0 0";
  }, e.prototype._zoomTo = function(t, i, n, o) {
    this.scaled = !0;
    var s = t / (o || this.scale);
    this.setScale(t), this.refresh();
    var r = Math.round(this.startX - (i - this.relativeX) * (s - 1)), l = Math.round(this.startY - (n - this.relativeY) * (s - 1));
    r > this.minScrollX ? r = this.minScrollX : r < this.maxScrollX && (r = this.maxScrollX), l > this.minScrollY ? l = this.minScrollY : l < this.maxScrollY && (l = this.maxScrollY), (this.x !== r || this.y !== l) && this.scrollTo(r, l, this.options.bounceTime), this.scaled = !1;
  }, e.prototype.zoomTo = function(t, i, n) {
    var o = wi(this.wrapper), s = o.left, r = o.top, l = i + s - this.x, a = n + r - this.y;
    this._zoomTo(t, l, a);
  }, e.prototype._zoomStart = function(t) {
    var i = t.touches[0], n = t.touches[1], o = Math.abs(i.pageX - n.pageX), s = Math.abs(i.pageY - n.pageY);
    this.startDistance = us(o, s), this.startScale = this.scale;
    var r = wi(this.wrapper), l = r.left, a = r.top;
    this.originX = Math.abs(i.pageX + n.pageX) / 2 + l - this.x, this.originY = Math.abs(i.pageY + n.pageY) / 2 + a - this.y, this.trigger("zoomStart");
  }, e.prototype._zoom = function(t) {
    if (!(!this.enabled || this.destroyed || et[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches[0], n = t.touches[1], o = Math.abs(i.pageX - n.pageX), s = Math.abs(i.pageY - n.pageY), r = us(o, s), l = r / this.startDistance * this.startScale;
      this.scaled = !0;
      var a = this.options.zoom, h = a.min, f = h === void 0 ? 1 : h, m = a.max, v = m === void 0 ? 4 : m;
      l < f ? l = 0.5 * f * Math.pow(2, l / f) : l > v && (l = 2 * v * Math.pow(0.5, v / l));
      var g = l / this.startScale, _ = this.startX - (this.originX - this.relativeX) * (g - 1), P = this.startY - (this.originY - this.relativeY) * (g - 1);
      this.setScale(l), this.scrollTo(_, P, 0);
    }
  }, e.prototype._zoomEnd = function(t) {
    if (!(!this.enabled || this.destroyed || et[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.isInTransition = !1, this.isAnimating = !1, this.initiated = 0;
      var i = this.options.zoom, n = i.min, o = n === void 0 ? 1 : n, s = i.max, r = s === void 0 ? 4 : s, l = this.scale > r ? r : this.scale < o ? o : this.scale;
      this._zoomTo(l, this.originX, this.originY, this.startScale), this.trigger("zoomEnd");
    }
  };
}
var _s = 30, gs = 10, pt = 200, bo = 2e3;
function fa(e) {
  e.prototype._initInfinite = function() {
    this.options.probeType = 3, this.maxScrollY = -bo, this.infiniteScroller = new L(this, this.options.infinity);
  };
}
function Oi(e) {
  if (e && e.classList)
    return e.classList.contains("tombstone");
}
function L(e, t) {
  var i = this;
  this.options = t, wt(typeof this.options.createTombstone == "function", "Infinite scroll need createTombstone Function to create tombstone"), wt(typeof this.options.fetch == "function", "Infinite scroll need fetch Function to fetch new data."), wt(typeof this.options.render == "function", "Infinite scroll need render Function to render each item."), this.firstAttachedItem = 0, this.lastAttachedItem = 0, this.anchorScrollTop = 0, this.anchorItem = {
    index: 0,
    offset: 0
  }, this.tombstoneHeight = 0, this.tombstoneWidth = 0, this.tombstones = [], this.items = [], this.loadedItems = 0, this.requestInProgress = !1, this.hasMore = !0, this.scroller = e, this.wrapperEl = this.scroller.wrapper, this.scrollerEl = this.scroller.scroller, this.scroller.on("scroll", function() {
    i.onScroll();
  }), this.scroller.on("resize", function() {
    i.onResize();
  }), this.onResize();
}
L.prototype.onScroll = function() {
  var e = -this.scroller.y, t = e - this.anchorScrollTop;
  e === 0 ? this.anchorItem = {
    index: 0,
    offset: 0
  } : this.anchorItem = this._calculateAnchoredItem(this.anchorItem, t), this.anchorScrollTop = e;
  var i = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight), n = this.anchorItem.index, o = i.index;
  t < 0 ? (n -= _s, o += gs) : (n -= gs, o += _s), this.fill(n, o), this.maybeRequestContent();
};
L.prototype.onResize = function() {
  var e = this.options.createTombstone();
  e.style.position = "absolute", this.scrollerEl.appendChild(e), e.style.display = "", this.tombstoneHeight = e.offsetHeight, this.tombstoneWidth = e.offsetWidth, this.scrollerEl.removeChild(e);
  for (var t = 0; t < this.items.length; t++)
    this.items[t].height = this.items[t].width = 0;
  this.onScroll();
};
L.prototype.fill = function(e, t) {
  this.firstAttachedItem = Math.max(0, e), this.hasMore || (t = Math.min(t, this.items.length)), this.lastAttachedItem = t, this.attachContent();
};
L.prototype.maybeRequestContent = function() {
  var e = this;
  if (!(this.requestInProgress || !this.hasMore)) {
    var t = this.lastAttachedItem - this.loadedItems;
    t <= 0 || (this.requestInProgress = !0, this.options.fetch(t).then(function(i) {
      if (e.requestInProgress = !1, i)
        e.addContent(i);
      else {
        e.hasMore = !1;
        var n = e._removeTombstones(), o = 0;
        e.anchorItem.index <= e.items.length ? (o = e._fixScrollPosition(), e._setupAnimations({}, o), e.scroller.resetPosition(e.scroller.options.bounceTime)) : (e.anchorItem.index -= n, o = e._fixScrollPosition(), e._setupAnimations({}, o), e.scroller.stop(), e.scroller.resetPosition(), e.onScroll());
      }
    }));
  }
};
L.prototype.addContent = function(e) {
  for (var t = 0; t < e.length; t++)
    this.items.length <= this.loadedItems && this._addItem(), this.items[this.loadedItems++].data = e[t];
  this.attachContent(), this.maybeRequestContent();
};
L.prototype.attachContent = function() {
  var e = this._collectUnusedNodes(), t = this._createDOMNodes(e);
  this._cleanupUnusedNodes(e), this._cacheNodeSize();
  var i = this._fixScrollPosition();
  this._setupAnimations(t, i);
};
L.prototype.resetMore = function() {
  this.hasMore = !0;
};
L.prototype._removeTombstones = function() {
  for (var e = void 0, t = 0, i = this.items.length, n = 0; n < i; n++) {
    var o = this.items[n].node, s = this.items[n].data;
    (!o || Oi(o)) && !s && (e || (e = n), o && this.scrollerEl.removeChild(o));
  }
  return t = i - e, this.items.splice(e), this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length), t;
};
L.prototype._collectUnusedNodes = function() {
  for (var e = [], t = 0; t < this.items.length; t++) {
    if (t === this.firstAttachedItem) {
      t = this.lastAttachedItem - 1;
      continue;
    }
    var i = this.items[t].node;
    i && (Oi(i) ? (this.tombstones.push(i), this.tombstones[this.tombstones.length - 1].style.display = "none") : e.push(i)), this.items[t].node = null;
  }
  return e;
};
L.prototype._createDOMNodes = function(e) {
  for (var t = {}, i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    for (; this.items.length <= i; )
      this._addItem();
    var n = this.items[i].node, o = this.items[i].data;
    if (n)
      if (Oi(n) && o)
        n.style.zIndex = 1, t[i] = [n, this.items[i].top - this.anchorScrollTop], this.items[i].node = null;
      else
        continue;
    var s = o ? this.options.render(o, e.pop()) : this._getTombStone();
    s.style.position = "absolute", this.items[i].top = -1, this.scrollerEl.appendChild(s), this.items[i].node = s;
  }
  return t;
};
L.prototype._cleanupUnusedNodes = function(e) {
  for (; e.length; )
    this.scrollerEl.removeChild(e.pop());
};
L.prototype._cacheNodeSize = function() {
  for (var e = this.firstAttachedItem; e < this.lastAttachedItem; e++)
    this.items[e].data && !this.items[e].height && (this.items[e].height = this.items[e].node.offsetHeight, this.items[e].width = this.items[e].node.offsetWidth);
};
L.prototype._fixScrollPosition = function() {
  this.anchorScrollTop = 0;
  for (var e = 0; e < this.anchorItem.index; e++)
    this.anchorScrollTop += this.items[e].height || this.tombstoneHeight;
  this.anchorScrollTop += this.anchorItem.offset;
  for (var t = this.anchorScrollTop - this.anchorItem.offset, i = this.anchorItem.index; i > this.firstAttachedItem; )
    t -= this.items[i - 1].height || this.tombstoneHeight, i--;
  return t;
};
L.prototype._setupAnimations = function(e, t) {
  var i = this;
  for (var n in e) {
    var o = e[n];
    this.items[n].node.style.transform = "translateY(" + (this.anchorScrollTop + o[1]) + "px) scale(" + this.tombstoneWidth / this.items[n].width + ", " + this.tombstoneHeight / this.items[n].height + ")", this.items[n].node.offsetTop, o[0].offsetTop, this.items[n].node.style.transition = "transform " + pt + "ms";
  }
  for (var s = this.firstAttachedItem; s < this.lastAttachedItem; s++) {
    var r = e[s];
    if (r) {
      var l = r[0];
      l.style.transition = "transform " + pt + "ms, opacity " + pt + "ms", l.style.transform = "translateY(" + t + "px) scale(" + this.items[s].width / this.tombstoneWidth + ", " + this.items[s].height / this.tombstoneHeight + ")", l.style.opacity = 0;
    }
    t !== this.items[s].top && (r || (this.items[s].node.style.transition = ""), this.items[s].node.style.transform = "translateY(" + t + "px)"), this.items[s].top = t, t += this.items[s].height || this.tombstoneHeight;
  }
  this.scroller.maxScrollY = -(t - this.wrapperEl.offsetHeight + (this.hasMore ? bo : 0)), setTimeout(function() {
    for (var a in e) {
      var h = e[a];
      h[0].style.display = "none", i.tombstones.push(h[0]);
    }
  }, pt);
};
L.prototype._getTombStone = function() {
  var e = this.tombstones.pop();
  return e ? (e.style.display = "", e.style.opacity = 1, e.style.transform = "", e.style.transition = "", e) : this.options.createTombstone();
};
L.prototype._addItem = function() {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};
L.prototype._calculateAnchoredItem = function(e, t) {
  if (t === 0)
    return e;
  var i = e.index, n = 0;
  if (t += e.offset, t < 0) {
    for (; t < 0 && i > 0 && this.items[i - 1].height; )
      t += this.items[i - 1].height, i--;
    n = Math.max(-i, Math.ceil(Math.min(t, 0) / this.tombstoneHeight));
  } else {
    for (; t > 0 && i < this.items.length && this.items[i].height && this.items[i].height < t; )
      t -= this.items[i].height, i++;
    (i >= this.items.length || !this.items[i].height) && (n = Math.floor(Math.max(t, 0) / this.tombstoneHeight));
  }
  return i += n, t -= n * this.tombstoneHeight, {
    index: i,
    offset: t
  };
};
function U(e, t) {
  this.wrapper = typeof e == "string" ? document.querySelector(e) : e, this.wrapper || It("Can not resolve the wrapper DOM."), this.scroller = this.wrapper.children[0], this.scroller || It("The wrapper need at least one child element to be scroller."), this.scrollerStyle = this.scroller.style, this._init(e, t);
}
sa(U);
oa(U);
Wl(U);
ra(U);
la(U);
aa(U);
ca(U);
ha(U);
ua(U);
da(U);
fa(U);
U.Version = "1.12.6";
const q = {
  props: {
    zIndex: {
      type: Number,
      default: 100
    },
    maskClosable: {
      type: Boolean,
      default: !1
    }
  }
};
const pa = "cube-popup", bs = "mask-click", ma = {
  name: pa,
  mixins: [j, q],
  emits: [bs],
  props: {
    type: {
      type: String,
      default: ""
    },
    mask: {
      type: Boolean,
      default: !0
    },
    content: {
      type: String,
      default: ""
    },
    center: {
      type: Boolean,
      default: !0
    },
    position: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      const e = {
        "cube-popup_mask": this.mask
      };
      return this.type && (e[`cube-${this.type}`] = !0), e;
    },
    containerClass() {
      const e = this.center, t = this.position;
      if (t)
        return {
          [`cube-popup-${t}`]: !0
        };
      if (e)
        return {
          "cube-popup-center": !0
        };
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(bs, e), this.maskClosable && this.hide();
    }
  }
}, _a = {
  key: 0,
  class: "cube-popup-content"
}, ga = ["innerHTML"];
function ba(e, t, i, n, o, s) {
  return E((c(), d("div", {
    class: y(["cube-popup", s.rootClass]),
    style: F({ "z-index": e.zIndex })
  }, [
    u("div", {
      class: "cube-popup-mask",
      onTouchmove: t[0] || (t[0] = R(() => {
      }, ["prevent"])),
      onClick: t[1] || (t[1] = (...r) => s.maskClick && s.maskClick(...r))
    }, [
      p(e.$slots, "mask")
    ], 32),
    u("div", {
      class: y(["cube-popup-container", s.containerClass]),
      onTouchmove: t[2] || (t[2] = R(() => {
      }, ["prevent"]))
    }, [
      e.$slots.default ? (c(), d("div", _a, [
        p(e.$slots, "default")
      ])) : (c(), d("div", {
        key: 1,
        class: "cube-popup-content",
        innerHTML: i.content
      }, null, 8, ga))
    ], 34)
  ], 6)), [
    [N, e.isVisible]
  ]);
}
const Q = /* @__PURE__ */ b(ma, [["render", ba]]), oi = {
  value: "value",
  text: "text",
  order: "order"
}, vo = {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedIndex: {
      type: Array,
      default() {
        return [];
      }
    },
    alias: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    valueKey() {
      return this.alias.value || oi.value;
    },
    textKey() {
      return this.alias.text || oi.text;
    },
    orderKey() {
      return oi.order;
    },
    merge() {
      return [this.data, this.selectedIndex];
    }
  },
  watch: {
    // Merge the watch handlers of data and selectedIndex into one.
    merge(e) {
      this.setData(e[0], e[1]);
    }
  }
}, ut = {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    cancelTxt: {
      type: String,
      default: ""
    },
    confirmTxt: {
      type: String,
      default: ""
    },
    swipeTime: {
      type: Number,
      default: 2500
    },
    maskClosable: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    _cancelTxt() {
      return this.cancelTxt || this.$t("cancel");
    },
    _confirmTxt() {
      return this.confirmTxt || this.$t("ok");
    }
  }
};
function va() {
  let e = !0;
  if (Hr) {
    const t = jo(st);
    if (!t)
      return e;
    t.major >= 13 && t.minor >= 3 && (e = !1);
  }
  return e;
}
const rt = va();
const ya = "cube-picker", vs = "select", ys = "value-change", Ts = "cancel", xs = "change", Ta = {
  name: ya,
  mixins: [j, q, vo, ut, ie],
  emits: [vs, ys, Ts, xs],
  props: {
    pending: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      finalData: this.data.slice(),
      _values: [],
      _indexes: []
    };
  },
  created() {
    this._values = [], this._indexes = this.selectedIndex;
  },
  methods: {
    confirm() {
      if (!this._canConfirm())
        return;
      this.hide();
      let e = !1, t = [];
      const i = this.finalData.length, n = this._values.length;
      n !== i && (e = !0, n > i && (this._values.length = this._indexes.length = i));
      for (let o = 0; o < i; o++) {
        let s = this._getSelectIndex(this.wheels[o]);
        this._indexes[o] = s;
        let r = null, l = "";
        this.finalData[o].length && (r = this.finalData[o][s][this.valueKey], l = this.finalData[o][s][this.textKey]), this._values[o] !== r && (e = !0), this._values[o] = r, t[o] = l;
      }
      this.$emit(vs, this._values, this._indexes, t), e && this.$emit(ys, this._values, this._indexes, t);
    },
    maskClick() {
      this.maskClosable && this.cancel();
    },
    cancel() {
      this.hide(), this.$emit(Ts);
    },
    show() {
      if (!this.isVisible)
        if (this.isVisible = !0, !this.wheels || this.dirty)
          this.$nextTick(() => {
            this.wheels = this.wheels || [];
            let e = this.$refs.wheelWrapper;
            for (let t = 0; t < this.finalData.length; t++)
              this._createWheel(e, t).enable(), this.wheels[t].wheelTo(this._indexes[t]);
            this.dirty && this._destroyExtraWheels(), this.dirty = !1;
          });
        else
          for (let e = 0; e < this.finalData.length; e++)
            this.wheels[e].enable(), this.wheels[e].wheelTo(this._indexes[e]);
    },
    hide() {
      if (this.isVisible) {
        this.isVisible = !1;
        for (let e = 0; e < this.finalData.length; e++)
          this.wheels[e].disable();
      }
    },
    setData(e, t) {
      this._indexes = t ? [...t] : [], this.finalData = e.slice(), this.isVisible ? this.$nextTick(() => {
        const i = this.$refs.wheelWrapper;
        this.finalData.forEach((n, o) => {
          this._createWheel(i, o), this.wheels[o].wheelTo(this._indexes[o]);
        }), this._destroyExtraWheels();
      }) : this.dirty = !0;
    },
    refill(e) {
      let t = [];
      return e.length && e.forEach((i, n) => {
        t[n] = this.refillColumn(n, i);
      }), t;
    },
    refillColumn(e, t) {
      const i = this.$refs.wheelWrapper;
      let n = i.children[e].querySelector(".cube-picker-wheel-scroll"), o = this.wheels ? this.wheels[e] : !1, s = 0;
      if (n && o) {
        let r = this.finalData[e];
        this.finalData[e] = t;
        let l = o.getSelectedIndex();
        if (r.length) {
          let a = r[l][this.valueKey];
          for (let h = 0; h < t.length; h++)
            if (t[h][this.valueKey] === a) {
              s = h;
              break;
            }
        }
        this._indexes[e] = s, this.$nextTick(() => {
          o = this._createWheel(i, e), o.wheelTo(s);
        });
      }
      return s;
    },
    scrollTo(e, t) {
      const i = this.wheels[e];
      this._indexes[e] = t, i.wheelTo(t);
    },
    refresh() {
      this.$nextTick(() => {
        this.wheels.forEach((e) => {
          e.refresh();
        });
      });
    },
    _createWheel(e, t) {
      if (this.wheels[t])
        this.wheels[t].refresh();
      else {
        const i = this.wheels[t] = new U(e.children[t], {
          wheel: {
            selectedIndex: this._indexes[t] || 0,
            wheelWrapperClass: "cube-picker-wheel-scroll",
            wheelItemClass: "cube-picker-wheel-item"
          },
          swipeTime: this.swipeTime,
          observeDOM: !1,
          useTransition: rt
        });
        i.on("scrollEnd", () => {
          this.$emit(xs, t, this._getSelectIndex(i));
        });
      }
      return this.wheels[t];
    },
    _destroyExtraWheels() {
      const e = this.finalData.length;
      this.wheels.length > e && this.wheels.splice(e).forEach((i) => {
        i.destroy();
      });
    },
    _canConfirm() {
      return !this.pending && this.wheels.every((e) => !e.isInTransition);
    },
    _getFlexOrder(e) {
      return e[0] ? e[0][this.orderKey] : 0;
    },
    // fixed BScroll not calculating selectedIndex when setting useTransition to false
    _getSelectIndex(e) {
      const t = e.y;
      let i;
      return rt ? i = e.getSelectedIndex() : t > e.minScrollY ? i = 0 : t < e.maxScrollY ? i = e.items.length - 1 : i = Math.round(Math.abs(t / e.itemHeight)), i;
    }
  },
  beforeUnmount() {
    this.wheels && this.wheels.forEach((e) => {
      e.destroy();
    }), this.wheels = null;
  },
  components: {
    CubePopup: Q
  }
}, xa = { class: "cube-picker-choose border-bottom-1px" }, wa = { class: "cube-picker-title-group" }, Ea = ["innerHTML"], Sa = ["innerHTML"], ka = { class: "cube-picker-content" }, $a = /* @__PURE__ */ u("i", { class: "border-bottom-1px" }, null, -1), Ca = /* @__PURE__ */ u("i", { class: "border-top-1px" }, null, -1), Ma = {
  class: "cube-picker-wheel-wrapper",
  ref: "wheelWrapper"
}, Na = { class: "cube-picker-wheel-scroll" }, Pa = ["innerHTML"], Ia = /* @__PURE__ */ u("div", { class: "cube-picker-footer" }, null, -1);
function Da(e, t, i, n, o, s) {
  const r = T("cube-popup");
  return c(), x(te, { name: "cube-picker-fade" }, {
    default: w(() => [
      E(C(r, {
        type: "picker",
        mask: !0,
        center: !1,
        "z-index": e.zIndex,
        onTouchmove: t[3] || (t[3] = R(() => {
        }, ["prevent"])),
        onMaskClick: s.maskClick
      }, {
        default: w(() => [
          C(te, { name: "cube-picker-move" }, {
            default: w(() => [
              E(u("div", {
                class: "cube-picker-panel cube-safe-area-pb",
                onClick: t[2] || (t[2] = R(() => {
                }, ["stop"]))
              }, [
                u("div", xa, [
                  u("span", {
                    class: "cube-picker-cancel",
                    onClick: t[0] || (t[0] = (...l) => s.cancel && s.cancel(...l))
                  }, k(e._cancelTxt), 1),
                  u("span", {
                    class: "cube-picker-confirm",
                    onClick: t[1] || (t[1] = (...l) => s.confirm && s.confirm(...l))
                  }, k(e._confirmTxt), 1),
                  u("div", wa, [
                    u("h1", {
                      class: "cube-picker-title",
                      innerHTML: e.title
                    }, null, 8, Ea),
                    e.subtitle ? (c(), d("h2", {
                      key: 0,
                      class: "cube-picker-subtitle",
                      innerHTML: e.subtitle
                    }, null, 8, Sa)) : I("", !0)
                  ])
                ]),
                u("div", ka, [
                  $a,
                  Ca,
                  u("div", Ma, [
                    (c(!0), d(S, null, $(o.finalData, (l, a) => (c(), d("div", {
                      key: a,
                      style: F({ order: s._getFlexOrder(l) })
                    }, [
                      u("ul", Na, [
                        (c(!0), d(S, null, $(l, (h, f) => (c(), d("li", {
                          class: "cube-picker-wheel-item",
                          key: f,
                          innerHTML: h[e.textKey]
                        }, null, 8, Pa))), 128))
                      ])
                    ], 4))), 128))
                  ], 512)
                ]),
                Ia
              ], 512), [
                [N, e.isVisible]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["z-index", "onMaskClick"]), [
        [N, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const M = /* @__PURE__ */ b(Ta, [["render", Da]]);
const Va = "cube-select", ws = "change", Es = "update:modelValue", Ss = "picker-show", ks = "picker-hide", Oa = {
  name: Va,
  mixins: [ie],
  emits: [ws, Es, Ss, ks],
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
      const e = this.modelValue, t = Ft(this.adaptOptions[0], (i) => i.value === e);
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
      this.disabled || (this.picker.show(), this.active = !0, this.$emit(Ss));
    },
    hided() {
      this.active = !1, this.$emit(ks);
    },
    selectHandler(e, t, i) {
      this.hided(), e[0] !== this.modelValue && (this.$emit(Es, e[0]), this.$emit(ws, e[0], t[0], i[0]));
    }
  }
}, Ha = {
  key: 0,
  class: "cube-select-text"
}, Aa = {
  key: 1,
  class: "cube-select-placeholder"
}, La = /* @__PURE__ */ u("i", { class: "cube-select-icon" }, null, -1);
function Ya(e, t, i, n, o, s) {
  return c(), d("div", {
    class: y(["cube-select", { "cube-select_active": o.active, "cube-select_disabled": i.disabled }]),
    onClick: t[0] || (t[0] = (...r) => s.showPicker && s.showPicker(...r))
  }, [
    s.selectedText ? (c(), d("span", Ha, k(s.selectedText), 1)) : (c(), d("span", Aa, k(s._placeholder), 1)),
    La
  ], 2);
}
const ze = /* @__PURE__ */ b(Oa, [["render", Ya]]);
let Ra = 0;
const ri = [], Xa = (e, t, i = null, n = null) => {
  let o = t, s = i ? i(Ri) : null;
  const r = document ? document.createElement("div") : null, l = "cube_create_component_" + Ra++, a = C({
    render() {
      return C(e, {
        ...o
        // ref: '$cre'
      }, s);
    }
  }, { id: l });
  n && (a.appContext = n), ri.push(a);
  let h;
  return r && (Xi(a, r), h = a.component.subTree.component.proxy, h.$remove = function(f) {
    Xi(null, r), e._instance = null, f && f(), r && document.body.contains(r) && document.body.removeChild(r);
    const m = ri.findIndex((v) => {
      const { id: g } = v.props;
      return l === g;
    });
    ~m && ri.splice(m, 1);
  }, h.$updateProps = function(f, m, v = !0) {
    o = { ...v ? o : {}, ...f }, s = m ? { ...s || {}, ...m(Ri) } : null, a.component.proxy.$forceUpdate();
  }, document.body.appendChild(r)), h;
};
function $s(e) {
  if (!!this && !!this._ && Ui(this._.vnode)) {
    const i = this && this._ && Ui(this._.vnode) ? this._.vnode.props : null;
    this._.vnode.props = fe(i || {}, {
      onVnodeBeforeUnmount() {
        e.$remove();
      }
    });
  }
}
function Z(e, t, i, n) {
  t.$create = e.config.globalProperties[`$create${Vo(t.name.replace("cube-", "")).replace(/^\w/, (o) => o.toUpperCase())}`] = function(o, s = null) {
    if (n && t._instance)
      return o && t._instance.$updateProps(o, s, !1), $s.call(this, t._instance), t._instance;
    const r = t._instance = Xa(t, o, s, this ? this._.appContext : null);
    return $s.call(this, r), r;
  };
}
function je(e, t) {
  Z(e, t);
}
ze.install = function(e) {
  e.component(M.name, M), e.component(ze.name, ze), X.install(e), je(e, M);
};
ze.Picker = M;
const Ua = "cube-switch", Cs = "update:modelValue", za = {
  name: Ua,
  emits: [Cs],
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
      this.$emit(Cs, e);
    }
  }
}, Ba = { class: "cube-switch" }, Fa = ["disabled"], Wa = /* @__PURE__ */ u("i", { class: "cube-switch-ui" }, null, -1), ja = { class: "cube-switch-label" };
function Ga(e, t, i, n, o, s) {
  return c(), d("div", Ba, [
    E(u("input", {
      class: "cube-switch-input",
      type: "checkbox",
      "onUpdate:modelValue": t[0] || (t[0] = (r) => o.checkboxValue = r),
      disabled: i.disabled
    }, null, 8, Fa), [
      [io, o.checkboxValue]
    ]),
    Wa,
    u("span", ja, [
      p(e.$slots, "default")
    ])
  ]);
}
const it = /* @__PURE__ */ b(za, [["render", Ga]]);
it.install = function(e) {
  e.component(it.name, it);
};
const Ka = "cube-rate-item", qa = {
  name: Ka,
  props: {
    index: {
      type: Number,
      default: 0
    }
  }
}, Za = /* @__PURE__ */ u("div", { class: "cube-rate-item-def" }, null, -1);
function Ja(e, t, i, n, o, s) {
  return c(), d("li", {
    class: y(["cube-rate-item", { "cube-rate-item_active": i.index <= e.$parent.tempValue }])
  }, [
    p(e.$slots, "default", {}, () => [
      Za
    ])
  ], 2);
}
const Dt = /* @__PURE__ */ b(qa, [["render", Ja]]);
const Qa = "cube-rate", Ms = "update:modelValue", Ne = "mouse", ec = {
  name: Qa,
  emits: [Ms],
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
        e.type.indexOf(Ne) > -1 && (this.mousePressed = !0, document.addEventListener("mouseup", this.handleEnd), document.addEventListener("mousemove", this.handleMove));
        const t = this.$refs.rateContainer.getBoundingClientRect();
        this.left = t.left, this.containerWidth = t.width;
      }
    },
    handleMove(e) {
      !this.disabled && (e.type.indexOf(Ne) === -1 || this.mousePressed) && this.computeTempValue(e.type.indexOf(Ne) === -1 ? e.touches[0] : e);
    },
    handleEnd(e) {
      !this.disabled && (e.type.indexOf(Ne) === -1 || this.mousePressed) && (e.type.indexOf(Ne) > -1 && (this.mousePressed = !1, document.removeEventListener("mouseup", this.handleEnd), document.removeEventListener("mousemove", this.handleMove)), this.computeTempValue(e.type.indexOf(Ne) > -1 ? e : e.changedTouches[0]), this.$emit(Ms, this.tempValue));
    },
    computeTempValue(e) {
      let t = Math.ceil((e.clientX - this.left) / this.containerWidth * this.max);
      t > 0 && t <= this.max ? this.tempValue = t : t <= 0 ? this.tempValue = 0 : this.tempValue = this.max;
    }
  },
  components: {
    CubeRateItem: Dt
  }
};
function tc(e, t, i, n, o, s) {
  const r = T("cube-rate-item");
  return c(), d("ul", {
    ref: "rateContainer",
    class: y(["cube-rate", s.rateClass]),
    onTouchstart: t[0] || (t[0] = R((...l) => s.handleStart && s.handleStart(...l), ["stop"])),
    onTouchmove: t[1] || (t[1] = R((...l) => s.handleMove && s.handleMove(...l), ["stop", "prevent"])),
    onTouchend: t[2] || (t[2] = R((...l) => s.handleEnd && s.handleEnd(...l), ["stop"])),
    onMousedown: t[3] || (t[3] = R((...l) => s.handleStart && s.handleStart(...l), ["stop"])),
    onMousemove: t[4] || (t[4] = R((...l) => s.handleMove && s.handleMove(...l), ["stop"])),
    onMouseup: t[5] || (t[5] = R((...l) => s.handleEnd && s.handleEnd(...l), ["stop"]))
  }, [
    p(e.$slots, "default", {}, () => [
      (c(!0), d(S, null, $(i.max, (l) => (c(), x(r, {
        key: l,
        index: l
      }, null, 8, ["index"]))), 128))
    ])
  ], 34);
}
const Be = /* @__PURE__ */ b(ec, [["render", tc]]);
Be.install = function(e) {
  e.component(Be.name, Be), e.component(Dt.name, Dt);
};
Be.Item = Dt;
const ic = /^(1|2)\d{3}[.\-/]\d{1,2}[.\-/]\d{1,2}$/, Si = {
  string: (e) => typeof e == "string",
  number: (e) => !isNaN(Number(e)),
  array: (e) => Array.isArray(e),
  date: (e) => !isNaN(Number(e)) || ic.test(e),
  email: (e) => typeof e == "string" && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(e),
  tel: (e) => typeof e == "string" && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(e),
  url: (e) => typeof e == "string" && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e)
}, yo = oo(Si), Et = {
  required: (e, t, i) => (i = i || (Array.isArray(e) ? "array" : typeof e), i === "array" && Array.isArray(e) ? e.length > 0 : e !== "" && e !== void 0 && e !== null),
  type: (e, t) => !Si[t] || Si[t](e),
  min: (e, t, i) => (i = i || typeof e, i === "number" || i === "date" ? Number(e) >= t : e.length >= t),
  max: (e, t, i) => (i = i || typeof e, i === "number" || i === "date" ? Number(e) <= t : e.length <= t),
  len: (e, t, i) => {
    i = i || typeof e;
    let n = e;
    return n.length === void 0 && (n = i === "object" ? Object.keys(n) : String(n)), n.length === t;
  },
  notWhitespace: (e, t, i) => !/^\s+$/.test(e),
  pattern: (e, t, i) => t.test(e),
  custom: (e, t, i) => t(e)
}, To = oo(Et);
function xo(...e) {
  const t = "validator", i = this._base.config.globalProperties, n = i.$cubeLang, o = i.$cubeMessages[n][t];
  typeof e[0] == "string" && (e[0] = {
    [e[0]]: e[1]
  }), Wt(o, e[0]);
}
const sc = /\{\{((?:.|\n)+?)\}\}/g, nc = /['"]/g, li = -1;
function oc(e, t = "") {
  return e.replace(sc, (i, n, o) => {
    const s = n.split("|").slice(1).map((a) => a.trim()), r = s.length;
    let l = t;
    return r && s.forEach((a) => {
      let { fnName: h, args: f } = rc(a);
      f.unshift(l), Ie(X.helpers[h]) ? l = X.helpers[h].apply(null, f) : l = "";
    }), l;
  });
}
function rc(e) {
  const t = e.indexOf("("), i = e.indexOf(")");
  let n = "", o = [];
  return t === li ? (o = [], n = e) : t !== li && i !== li && (o = e.slice(t + 1, i).split(",").map((r) => r.trim().replace(nc, "")), n = e.slice(0, t)), { fnName: n, args: o };
}
const lc = "cube-validator", Ns = "update:modelValue", Ps = "validating", Is = "validated", Ds = "msg-click", ac = {
  name: lc,
  mixins: [ie],
  emits: [Ns, Ps, Is, Ds],
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
      return ht(e) ? void 0 : !e;
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
      const t = Ii(e);
      if (t && (e = t.resolve), this.isDisabled)
        return e && e(this.valid), t;
      this._validateCount++;
      const i = this._validateCount, n = this.targetModel, o = this.rules, s = o.type, r = [];
      let l = !0;
      if (o.required || (l = Et.required(n, !0, s)), l)
        for (const a in o) {
          const h = o[a];
          let f;
          Ie(h) ? f = h(n, o[a], s) : f = !Et[a] || Et[a](n, o[a], s), r.push((m) => {
            const v = (_) => {
              m({
                key: a,
                valid: _ === !0,
                ret: _
              });
            }, g = (_) => {
              m({
                key: a,
                valid: !1,
                ret: _
              });
            };
            typeof f == "object" && Ie(f.then) ? f.then(v).catch(g) : Ie(f) ? f(v, g) : m({
              key: a,
              valid: f === !0,
              ret: f
            });
          });
        }
      return this._checkTasks(r, i, e), t;
    },
    _checkTasks(e, t, i) {
      const n = this.rules;
      let o = !0;
      const s = {};
      let r = !0;
      this.validating = !0;
      const l = this.targetModel;
      zo(e, (a) => {
        this._validateCount === t && (this.validating = !1, a.forEach(({ key: h, valid: f, ret: m }) => {
          const v = this.messages[h] ? Ie(this.messages[h]) ? this.messages[h](m, f) : this.messages[h] : this.findMessage(h, n[h], n.type, l);
          o && !f && (o = !1, this.msg = v), s[h] = {
            valid: f,
            invalid: !f,
            message: v
          };
        }), r || this.$emit(Is, o), this._updateModel(o, s), i && i(this.valid));
      }), this.validating && (r = !1, this.$emit(Ps), this.emitValidChange(void 0));
    },
    _updateModel(e, t) {
      this.validated = !0, this.result = t, t.required && t.required.invalid && (this.msg = t.required.message), e && (this.msg = ""), this.emitValidChange(e);
    },
    reset() {
      this._validateCount++, this.validating = !1, this.dirty = !1, this.result = {}, this.msg = "", this.validated = !1, this.emitValidChange(void 0);
    },
    emitValidChange(e) {
      const t = this.valid;
      this.valid = e, t !== e && this.$emit(Ns, e);
    },
    msgClickHandler() {
      this.$emit(Ds);
    },
    findMessage(e, t, i, n) {
      const o = this.$cubeMessages, s = this.$cubeLang, r = "validator", l = o[s][r][e];
      return l ? Ko(l) ? l : Ie(l) ? l(t) : (l[i] || (i = Go(n) ? "array" : typeof n), typeof l[i] == "function" ? l[i](t) : oc(l[i], t)) : "";
    }
  }
}, cc = { class: "cube-validator-content" }, hc = { class: "cube-validator-msg-def" };
function uc(e, t, i, n, o, s) {
  return c(), d("div", {
    class: y(["cube-validator", s.containerClass])
  }, [
    u("div", cc, [
      p(e.$slots, "default")
    ]),
    u("div", {
      class: "cube-validator-msg",
      onClick: t[0] || (t[0] = (...r) => s.msgClickHandler && s.msgClickHandler(...r))
    }, [
      p(e.$slots, "message", {
        message: o.msg,
        dirty: o.dirty,
        validated: o.validated,
        validating: o.validating,
        result: o.result
      }, () => [
        u("span", hc, k(s.dirtyOrValidated ? o.msg : ""), 1)
      ])
    ])
  ], 2);
}
const H = /* @__PURE__ */ b(ac, [["render", uc]]);
H.install = function(e) {
  e.component(H.name, H), X.install(e), H._base = e;
};
H.addRule = To;
H.addMessage = xo;
H.addType = yo;
H.addHelper = X.addHelper;
const wo = {
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
const dc = "cube-upload-btn", fc = {
  name: dc,
  mixins: [wo],
  methods: {
    changeHandler(e) {
      const t = e.currentTarget, i = t.files;
      i && (this.$parent.addFiles(i), t.value = null);
    }
  }
}, pc = { class: "cube-upload-btn" }, mc = /* @__PURE__ */ u("div", { class: "cube-upload-btn-def" }, [
  /* @__PURE__ */ u("i")
], -1), _c = ["multiple", "accept"];
function gc(e, t, i, n, o, s) {
  return c(), d("div", pc, [
    p(e.$slots, "default", {}, () => [
      mc
    ]),
    u("input", {
      class: "cube-upload-input",
      type: "file",
      onChange: t[0] || (t[0] = (...r) => s.changeHandler && s.changeHandler(...r)),
      multiple: e.multiple,
      accept: e.accept
    }, null, 40, _c)
  ]);
}
const Vt = /* @__PURE__ */ b(fc, [["render", gc]]), ki = jt ? window.URL || window.webkitURL || window.mozURL : null, $i = "ready", Ci = "uploading", ue = "error", Ot = "success";
function bc(e, t, i, n) {
  const o = [], s = e.length;
  let r = 0;
  for (let l = 0; l < s; l++)
    vc(e[l], l, t, function(a, h) {
      if (r++, o[h] = a, i(a, h), r === s)
        return n(o);
    });
}
function vc(e, t, i, n) {
  i(e, function(o) {
    const s = yc(o.name, o.size, $i, 0, o);
    n(s, t);
  });
}
function yc(e = "", t = 0, i = "", n = 0, o = null) {
  const s = o && o.base64 || "", r = s ? "" : Tc(o);
  return {
    name: e,
    size: t,
    url: r,
    base64: s,
    status: i,
    progress: n,
    file: o
  };
}
function Tc(e) {
  return e && ki ? ki.createObjectURL(e) : "";
}
function ai(e, ...t) {
  return typeof e == "function" ? e.apply(this, t) : e;
}
const xc = "cube-upload-file", wc = {
  success: "cubeic-right",
  error: "cubeic-warn"
}, Vs = "click", Ec = {
  name: xc,
  props: {
    file: {
      type: Object,
      required: !0
    }
  },
  emits: [Vs],
  computed: {
    fileCls() {
      return `cube-upload-file_${this.file.status}`;
    },
    fileStatusCls() {
      const e = this.file, t = e.status;
      if (e.progress >= 0.01 || t === Ot || t === ue)
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
      return wc[e];
    },
    fileProgress() {
      return this.statusCls ? "100%" : `${Math.min(Math.floor(this.file.progress * 100), 99)}%`;
    }
  },
  methods: {
    clickHandler() {
      this.$emit(Vs, this.file);
    },
    removeFile() {
      this.$parent.removeFile(this.file);
    }
  }
}, Sc = { class: "cube-upload-file-progress" };
function kc(e, t, i, n, o, s) {
  return c(), d("div", {
    class: y(["cube-upload-file", s.fileCls]),
    onClick: t[1] || (t[1] = (...r) => s.clickHandler && s.clickHandler(...r))
  }, [
    p(e.$slots, "default", {
      imgStyle: s.fileStyle,
      progress: s.fileProgress
    }, () => [
      u("div", {
        class: "cube-upload-file-def",
        style: F(s.fileStyle)
      }, [
        u("i", {
          class: "cubeic-wrong",
          onClick: t[0] || (t[0] = R((...r) => s.removeFile && s.removeFile(...r), ["stop"]))
        }),
        u("div", {
          class: y(["cube-upload-file-state", s.fileStatusCls])
        }, [
          u("i", {
            class: y(["cube-upload-file-status", s.statusCls])
          }, null, 2),
          u("span", Sc, k(s.fileProgress), 1)
        ], 2)
      ], 4)
    ])
  ], 2);
}
const Ht = /* @__PURE__ */ b(Ec, [["render", kc]]);
function $c(e, t, i) {
  const {
    target: n,
    headers: o = {},
    data: s = {},
    fileName: r = "file",
    withCredentials: l,
    timeout: a,
    prop: h = "file",
    progressInterval: f = 100,
    checkSuccess: m = function() {
      return !0;
    }
  } = t, v = ai(n, e);
  e.progress = 0, e.status = Ci;
  const g = new window.XMLHttpRequest();
  e._xhr = g;
  let _ = 0;
  if (g.upload) {
    let D = Date.now();
    g.upload.onprogress = function(le) {
      if (le.total > 0)
        if (_) {
          clearTimeout(_);
          const Yi = Date.now() - D;
          Yi >= f ? qt() : _ = setTimeout(qt, Yi);
        } else
          qt(), _ = 1;
      function qt() {
        e.progress = le.loaded / le.total, D = Date.now();
      }
    };
  }
  const P = new window.FormData(), O = ai(s, e);
  Object.keys(O).forEach((D) => {
    P.append(D, O[D]);
  }), P.append(r, e[h]), g.onload = function() {
    if (g.status < 200 || g.status >= 300) {
      Y(ue);
      return;
    }
    ge();
    const D = e.response;
    if (m.length <= 2) {
      const le = m(D, e);
      Y(le ? Ot : ue);
    } else
      m(D, e, (le) => {
        Y(le ? Ot : ue);
      });
  }, g.onerror = function() {
    ge(), Y(ue);
  }, g.ontimeout = function() {
    ge(), Y(ue);
  }, g.open("POST", v, !0), l && (g.withCredentials = !0);
  const G = ai(o, e);
  Object.keys(G).forEach((D) => {
    g.setRequestHeader(D, G[D]);
  }), a > 0 && (g.timeout = a), g.send(P);
  function Y(D) {
    clearTimeout(_), _ = 0, e.progress = 1, e.status = D, i && i(e);
  }
  function ge() {
    let D = g.responseText || g.response;
    try {
      D = JSON.parse(D);
    } catch {
    }
    e.response = D, e.responseHeaders = g.getAllResponseHeaders();
  }
}
const Cc = "cube-upload", Os = "update:modelValue", Hs = "files-added", As = "file-submitted", Ls = "file-removed", Ys = "file-success", Rs = "file-error", Xs = "file-click", Mc = {
  name: Cc,
  mixins: [wo],
  emits: [Os, Hs, As, Ls, Ys, Rs, Xs],
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
      this.$emit(Os, e);
    }
  },
  methods: {
    addFiles(e) {
      this.$emit(Hs, e);
      const t = this.files.length, i = [], n = this.max - t;
      let o = 0, s = e[o];
      for (; i.length < n && s; )
        s.ignore || i.push(s), s = e[++o];
      bc(i, this.processFile, (r, l) => {
        this.files.push(r), this.$emit(As, r);
      }, () => {
        this.$nextTick(() => {
          this.upload();
        });
      });
    },
    removeFile(e) {
      this.$emit(Ls, e), e._xhr && e._xhr.abort(), e.url && ki.revokeObjectURL(e.url);
      const t = this.files.indexOf(e);
      this.files.splice(t, 1), this.upload();
    },
    fileClick(e, t) {
      this.$emit(Xs, e, t);
    },
    upload(e) {
      const t = this.actionOptions;
      if (this.paused || !t)
        return;
      const i = this.files.length;
      let n = 0, o = 0;
      for (; o < i && n < this.simultaneousUploads; ) {
        const s = this.files[o], r = s.status;
        r === $i || e && r === ue && s._retryId !== this.retryId ? ($c(s, t, (l) => {
          r === ue && (l._retryId = this.retryId), this.$emit(l.status === Ot ? Ys : Rs, l), this.upload(e);
        }), n++) : r === Ci && n++, o++;
      }
    },
    start() {
      this.paused = !1, this.upload();
    },
    pause() {
      this.paused = !0, this.files.forEach((e) => {
        e.status === Ci && (e._xhr.abort(), e.status = $i);
      });
    },
    retry() {
      this.retryId = Date.now(), this.paused = !1, this.upload(!0);
    }
  },
  components: {
    UploadBtn: Vt,
    UploadFile: Ht
  }
}, Nc = { class: "cube-upload" }, Pc = { class: "cube-upload-def clear-fix" };
function Ic(e, t, i, n, o, s) {
  const r = T("upload-file"), l = T("upload-btn");
  return c(), d("div", Nc, [
    p(e.$slots, "default", {}, () => [
      u("div", Pc, [
        (c(!0), d(S, null, $(o.files, (a, h) => (c(), x(r, {
          file: a,
          key: h,
          onClick: (f) => s.fileClick(a, h)
        }, null, 8, ["file", "onClick"]))), 128)),
        E(C(l, {
          multiple: e.multiple,
          accept: e.accept
        }, null, 8, ["multiple", "accept"]), [
          [N, s.isShowBtn]
        ])
      ])
    ])
  ]);
}
const we = /* @__PURE__ */ b(Mc, [["render", Ic]]);
we.install = function(e) {
  e.component(we.name, we), e.component(Vt.name, Vt), e.component(Ht.name, Ht);
};
we.Btn = Vt;
we.File = Ht;
const Dc = (e, t, i) => {
  const n = e.rules && e.rules[t];
  t !== "custom" && n && typeof n != "function" && (e.rules[t] = i);
}, Vc = (e) => (t, i) => Dc(t, e, i), Eo = Vc("required"), Us = (e) => Eo(e, (t) => t !== !1), Oc = (e) => Eo(e, (t) => t > 0), zs = (e, t) => {
  e.type = "button", e.props || (e.props = {}), e.props.type = t;
}, Hc = {
  submit(e) {
    zs(e, "submit");
  },
  reset(e) {
    zs(e, "reset");
  },
  checkbox(e) {
    Us(e);
  },
  switch(e) {
    Us(e);
  },
  rate(e) {
    Oc(e);
  }
};
function Ac(e) {
  const t = Hc[e.type];
  t && t(e);
}
function Lc(e) {
  const t = {
    ...e
  };
  return Ac(t), t;
}
const Yc = {
  STANDARD: "standard",
  CLASSIC: "classic",
  FRESH: "fresh"
}, De = Yc, Rc = {
  checkbox() {
    return !1;
  },
  select() {
    return null;
  }
};
function Xc(e) {
  const t = Rc[e];
  return t && t();
}
const So = {
  data() {
    return {
      validating: !1,
      pending: !1,
      originValid: void 0
    };
  },
  computed: {
    valid() {
      const e = this.originValid, t = this.pending, i = this.validating;
      return t || i ? void 0 : e;
    },
    invalid() {
      const e = this.valid;
      return e === void 0 ? e : !e;
    }
  }
}, Uc = [
  se,
  W,
  Ue,
  Te,
  ne,
  nt,
  xe,
  Be,
  ze,
  it,
  Qe,
  we
], ko = {};
Uc.forEach((e) => {
  ko[e.name] = e;
});
const Mi = ko;
Mi.CubeValidator = H;
const zc = "cube-form-item", Bs = "focusin", Fs = "focusout", Bc = {
  name: zc,
  mixins: [So],
  props: {
    field: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    const e = "value", t = this.field.modelKey, i = t ? this.form.model[t] : null;
    return {
      validatorDisabled: !1,
      validatorModelKey: e,
      modelValue: i,
      validatorModel: {
        [e]: i
      }
    };
  },
  computed: {
    fieldValue() {
      return Lc(this.field);
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
      const i = e.type, n = `cube-${i}`;
      return Mi[n] ? n : i;
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
      e === !0 && (e = 200), !(!e && e !== 0 || e < 0 || this.fieldValue.trigger === "blur") && (this.getValidatorModel = Bo((t) => (this.syncValidatorValue(), this.validate(), t), e, !1, this.validatorModel[this.validatorModelKey]));
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
        e.addEventListener(Bs, this.focusInHandler, !1), e.addEventListener(Fs, this.focusOutHandler, !1), this.getValidatorModel = (t) => this.focused ? this.validatorModel[this.validatorModelKey] : (this.pending = !1, this.form.updatePending(), t);
      }
    },
    removeFocusEvents() {
      const e = this.$refs.formItem;
      e.removeEventListener(Bs, this.focusInHandler, !1), e.removeEventListener(Fs, this.focusOutHandler, !1);
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
      const t = Ii(e);
      t && (e = t.resolve);
      const i = this.$refs.validator;
      return i ? i.validate(() => {
        this.validatorDisabled = !0, this.updateValidity(), e && e(), this.$nextTick(() => {
          this.validatorDisabled = !1;
        });
      }) : e && e(), t;
    },
    reset() {
      const e = this.fieldValue;
      if (e.modelKey) {
        const t = Xc(e.type);
        this.validatorDisabled = !0, ro(this, "modelValue", t), this.syncValidatorValue(), this.$refs.validator && this.$refs.validator.reset(), this.$nextTick(() => {
          this.validatorDisabled = !1;
        });
      }
      this.validating = !1, this.pending = !1;
    },
    msgClick() {
      console.log("error-msg"), this.form.layout === De.STANDARD && this.$createToast && this.$createToast({
        type: "warn",
        txt: this.$refs.validator.msg,
        time: 1e3
      }).show();
    }
  },
  beforeUnmount() {
    this.removeFocusEvents(), this.form.destroyField(this), this.form = null;
  },
  components: Mi
}, Fc = { class: "cube-form-label" }, Wc = {
  key: 1,
  class: "cube-form-field"
};
function jc(e, t, i, n, o, s) {
  const r = T("cube-validator"), l = T("cube-button");
  return c(), d("div", {
    class: y(["cube-form-item border-bottom-1px", s.itemClass]),
    ref: "formItem"
  }, [
    s.isBtnField ? (c(), x(l, fe({ key: 1 }, s.fieldValue.props, Zt(s.fieldValue.events || {})), {
      default: w(() => [
        $e(k(s.fieldValue.label), 1)
      ]),
      _: 1
    }, 16)) : (c(), d(S, { key: 0 }, [
      p(e.$slots, "label", {}, () => [
        E(u("div", Fc, [
          u("span", null, k(s.fieldValue.label), 1)
        ], 512), [
          [N, s.fieldValue.label]
        ])
      ]),
      s.hasRules ? (c(), x(r, {
        key: 0,
        class: "cube-form-field",
        ref: "validator",
        modelValue: e.originValid,
        "onUpdate:modelValue": [
          t[1] || (t[1] = (a) => e.originValid = a),
          s.validatorChangeHandler
        ],
        disabled: o.validatorDisabled,
        model: o.validatorModel,
        "model-key": o.validatorModelKey,
        rules: s.fieldValue.rules,
        messages: s.fieldValue.messages,
        onValidating: s.validatingHandler,
        onValidated: s.validatedHandler,
        onMsgClick: s.msgClick
      }, {
        default: w(() => [
          p(e.$slots, "default", {}, () => [
            (c(), x(yi(s.componentName), fe({
              modelValue: o.modelValue,
              "onUpdate:modelValue": t[0] || (t[0] = (a) => o.modelValue = a)
            }, s.fieldValue.props, Zt(s.fieldValue.events || {})), null, 16, ["modelValue"]))
          ])
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "model", "model-key", "rules", "messages", "onUpdate:modelValue", "onValidating", "onValidated", "onMsgClick"])) : (c(), d("div", Wc, [
        p(e.$slots, "default", {}, () => [
          (c(), x(yi(s.componentName), fe({
            modelValue: o.modelValue,
            "onUpdate:modelValue": t[2] || (t[2] = (a) => o.modelValue = a)
          }, s.fieldValue.props, Zt(s.fieldValue.events || {})), null, 16, ["modelValue"]))
        ])
      ]))
    ], 64))
  ], 2);
}
const At = /* @__PURE__ */ b(Bc, [["render", jc]]);
const Gc = "cube-form-group", Kc = {
  name: Gc,
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
    CubeFormItem: At
  }
}, qc = { class: "cube-form-group" }, Zc = { class: "cube-form-group-legend" }, Jc = { class: "cube-form-group-content" };
function Qc(e, t, i, n, o, s) {
  const r = T("cube-form-item");
  return c(), d("div", qc, [
    u("p", Zc, k(i.legend), 1),
    u("div", Jc, [
      p(e.$slots, "default", {}, () => [
        (c(!0), d(S, null, $(i.fields, (l, a) => (c(), x(r, {
          key: l.key || a,
          field: l
        }, null, 8, ["field"]))), 128))
      ])
    ])
  ]);
}
const Lt = /* @__PURE__ */ b(Kc, [["render", Qc]]);
const eh = "cube-form", ci = "submit", Ws = "reset", js = "validate", Gs = "valid", Ks = "invalid", th = {
  name: eh,
  mixins: [So],
  emits: [ci, Ws, js, Gs, Ks],
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
          layout: De.STANDARD
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
      return this.groups.reduce((e, t) => (t.fields.reduce((i, n) => (i.push(n), i), e), e), []);
    },
    layout() {
      const e = this.options;
      return e && e.layout || De.STANDARD;
    },
    formClass() {
      const e = this.invalid, t = this.valid, i = this.layout;
      return {
        "cube-form_standard": i === De.STANDARD,
        "cube-form_groups": this.groups.length > 1,
        "cube-form_validating": this.validating,
        "cube-form_pending": this.pending,
        "cube-form_valid": t,
        "cube-form_invalid": e,
        "cube-form_classic": i === De.CLASSIC,
        "cube-form_fresh": i === De.FRESH
      };
    }
  },
  watch: {
    validatedCount() {
      this.$emit(js, {
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
      this.skipValidate = e, Zi(this.$refs.form, "submit"), this.skipValidate = !1;
    },
    reset() {
      Zi(this.$refs.form, "reset");
    },
    submitHandler(e) {
      if (this.syncValidatorValues(), this.skipValidate) {
        this.$emit(ci, e, this.model, this.fieldsModel);
        return;
      }
      const t = (i) => {
        i ? (this.$emit(Gs, this.validity), this.$emit(ci, e, this.model, this.fieldsModel)) : (this.options.scrollToInvalidField && this.firstInvalidField && this.firstInvalidField.$el.scrollIntoView(), e.preventDefault(), this.$emit(Ks, this.validity));
      };
      this.submitAlwaysValidate || this.valid === void 0 ? (this._submit(t), (this.validating || this.pending) && e.preventDefault()) : t(this.valid);
    },
    resetHandler(e) {
      this._reset(), this.$emit(Ws, e);
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
      const t = Ii(e);
      t && (e = t.resolve);
      let i = 0;
      const n = this.fields.length;
      return this.originValid = void 0, this.fields.forEach((o) => {
        o.validate(() => {
          i++, i === n && e && e(this.valid);
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
    updateValidity(e, t, i, n) {
      const o = this.validity[e];
      o && o.valid === t && o.result === i && o.dirty === n || this.setValidity(e, {
        valid: t,
        result: i,
        dirty: n
      });
    },
    setValidity(e, t) {
      let i = {};
      e && (Object.assign(i, this.validity), t === void 0 ? delete i[e] : i[e] = t);
      let n = !1, o = !1, s = !0, r = "";
      this.fields.forEach((l) => {
        const a = l.fieldValue.modelKey;
        if (a) {
          const h = i[a];
          h ? (h.dirty && (n = !0), h.valid === !1 ? s = !1 : s && !h.valid && (s = h.valid), !o && h.valid === !1 && (o = !0, r = a)) : l.hasRules && (s && (s = void 0), i[a] = {
            valid: void 0,
            result: {},
            dirty: !1
          });
        }
      }), this.validity = i, this.dirty = n, this.originValid = s, this.setFirstInvalid(r), this.isMounted && this.validatedCount++;
    },
    setFirstInvalid(e) {
      if (!e) {
        this.firstInvalidField = null, this.firstInvalidFieldIndex = -1;
        return;
      }
      this.fields.some((t, i) => {
        if (t.fieldValue.modelKey === e)
          return this.firstInvalidField = t, this.firstInvalidFieldIndex = i, !0;
      });
    },
    addField(e) {
      const t = this.fieldsData.indexOf(e.field);
      this.fields.splice(t, 0, e);
      const i = e.fieldValue.modelKey;
      i && this.setValidity(i);
    },
    destroyField(e) {
      const t = this.fields.indexOf(e);
      this.fields.splice(t, 1);
      const i = e.fieldValue.modelKey;
      i && this.setValidity(i);
    }
  },
  beforeUnmount() {
    this.form = null, this.firstInvalidField = null;
  },
  components: {
    CubeFormGroup: Lt
  }
}, ih = ["action"];
function sh(e, t, i, n, o, s) {
  const r = T("cube-form-group");
  return c(), d("form", {
    ref: "form",
    class: y(["cube-form", s.formClass]),
    action: i.action,
    onSubmit: t[0] || (t[0] = (...l) => s.submitHandler && s.submitHandler(...l)),
    onReset: t[1] || (t[1] = (...l) => s.resetHandler && s.resetHandler(...l))
  }, [
    p(e.$slots, "default", {}, () => [
      (c(!0), d(S, null, $(s.groups, (l, a) => (c(), x(r, {
        fields: l.fields,
        legend: l.legend,
        key: l.key || a
      }, null, 8, ["fields", "legend"]))), 128))
    ])
  ], 42, ih);
}
const oe = /* @__PURE__ */ b(th, [["render", sh]]);
oe.install = function(e) {
  e.component(oe.name, oe), e.component(Lt.name, Lt), e.component(At.name, At), e.component(H.name, H), X.install(e), H._base = e;
};
oe.Group = Lt;
oe.Item = At;
oe.Validator = H;
H.addRule = To;
H.addMessage = xo;
H.addType = yo;
H.addHelper = X.addHelper;
function nh(e, t) {
  Z(e, t, ["mask-click"], !0);
}
Q.install = function(e) {
  e.component(Q.name, Q), nh(e, Q);
};
const oh = "cube-toast", qs = "timeout", rh = {
  name: oh,
  mixins: [j, q],
  emits: [qs],
  props: {
    type: {
      type: String,
      default: "loading"
    },
    icon: {
      type: String,
      default: ""
    },
    mask: {
      type: Boolean,
      default: !1
    },
    txt: {
      type: String,
      default: ""
    },
    time: {
      type: Number,
      default: 3e3
    },
    // By default, Toast has the bigest z-index among popoup-based components.
    zIndex: {
      type: Number,
      default: 900
    }
  },
  computed: {
    iconClass() {
      const e = [];
      this.icon && e.push(this.icon);
      const i = {
        correct: "cubeic-right",
        error: "cubeic-wrong",
        warn: "cubeic-warn"
      }[this.type];
      return i && e.push(i), e;
    },
    isLoading() {
      return this.type === "loading";
    }
  },
  methods: {
    maskClick() {
      this.maskClosable && this.hide();
    },
    show() {
      this.isVisible = !0, this.clearTimer(), this.$nextTick(() => {
        this.time !== 0 && (this.timer = setTimeout(() => {
          this.hide(), this.$emit(qs);
        }, this.time));
      });
    },
    hide() {
      this.isVisible = !1, this.clearTimer();
    },
    clearTimer() {
      clearTimeout(this.timer), this.timer = null;
    }
  },
  components: {
    CubePopup: Q,
    CubeLoading: ee
  }
}, lh = ["innerHTML"];
function ah(e, t, i, n, o, s) {
  const r = T("cube-loading"), l = T("cube-popup");
  return c(), x(te, { name: "cube-toast-fade" }, {
    default: w(() => [
      E(C(l, {
        type: "toast",
        "z-index": i.zIndex,
        mask: i.mask,
        onMaskClick: s.maskClick
      }, {
        default: w(() => [
          !s.isLoading && s.iconClass.length ? (c(), d("i", {
            key: 0,
            class: y(["cube-toast-icon", s.iconClass])
          }, null, 2)) : I("", !0),
          s.isLoading ? (c(), x(r, { key: 1 })) : I("", !0),
          E(u("div", {
            class: "cube-toast-tip",
            innerHTML: i.txt
          }, null, 8, lh), [
            [N, i.txt]
          ])
        ]),
        _: 1
      }, 8, ["z-index", "mask", "onMaskClick"]), [
        [N, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const He = /* @__PURE__ */ b(rh, [["render", ah]]);
function ch(e, t) {
  Z(e, t, ["timeout"], !0);
}
He.install = function(e) {
  e.component(ee.name, ee), e.component(He.name, He), ch(e, He);
};
He.Loading = ee;
M.install = function(e) {
  e.component(M.name, M), X.install(e), je(e, M);
};
const hh = "cube-cascade-picker", Zs = "select", Js = "cancel", Qs = "change", uh = {
  name: hh,
  mixins: [j, q, vo, ut, ie],
  emits: [Zs, Js, Qs],
  props: {
    async: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      cascadeData: this.data.slice(),
      pickerSelectedIndex: this.selectedIndex.slice(),
      pickerData: [],
      pending: !1
    };
  },
  created() {
    this._updatePickerData();
  },
  methods: {
    setData(e, t = []) {
      this.pending = !1, this.cascadeData = e.slice(), this.pickerSelectedIndex = t.slice(), this._updatePickerData();
    },
    _pickerSelect(e, t, i) {
      this.$emit(Zs, e, t, i);
    },
    _pickerCancel() {
      this.$emit(Js);
    },
    _pickerChange(e, t) {
      t !== this.pickerSelectedIndex[e] && (this.pickerSelectedIndex.splice(e, 1, t), this.async ? this.pending = e !== this.pickerData.length - 1 : this._updatePickerData(e + 1)), this.$emit(Qs, e, t);
    },
    _updatePickerData(e = 0) {
      let t = this.cascadeData, i = 0;
      for (; t; ) {
        if (i >= e) {
          let n = [];
          t.forEach((o) => {
            n.push({
              value: o[this.valueKey],
              text: o[this.textKey],
              order: o[this.orderKey]
            });
          }), this.pickerData[i] = n, this.pickerSelectedIndex[i] = e === 0 ? this.pickerSelectedIndex[i] < t.length && this.pickerSelectedIndex[i] || 0 : this.$refs.picker.refillColumn(i, n);
        }
        t = t.length ? t[this.pickerSelectedIndex[i]].children : null, i++;
      }
      i < this.pickerData.length && this.pickerData.splice(i, this.pickerData.length - i), this.pickerData = this.pickerData.slice();
    }
  },
  components: {
    CubePicker: M
  }
};
function dh(e, t, i, n, o, s) {
  const r = T("cube-picker");
  return c(), x(r, {
    ref: "picker",
    visible: e.isVisible,
    "onUpdate:visible": t[0] || (t[0] = (l) => e.isVisible = l),
    data: o.pickerData,
    "selected-index": o.pickerSelectedIndex,
    pending: o.pending,
    title: e.title,
    subtitle: e.subtitle,
    "z-index": e.zIndex,
    "cancel-txt": e._cancelTxt,
    "confirm-txt": e._confirmTxt,
    "swipe-time": e.swipeTime,
    "mask-closable": e.maskClosable,
    onSelect: s._pickerSelect,
    onCancel: s._pickerCancel,
    onChange: s._pickerChange
  }, null, 8, ["visible", "data", "selected-index", "pending", "title", "subtitle", "z-index", "cancel-txt", "confirm-txt", "swipe-time", "mask-closable", "onSelect", "onCancel", "onChange"]);
}
const A = /* @__PURE__ */ b(uh, [["render", dh]]);
function Hi(e, t) {
  Z(e, t);
}
A.install = function(e) {
  e.component(M.name, M), e.component(A.name, A), X.install(e), je(e, M), Hi(e, A);
};
A.Picker = M;
const fh = "cube-date-picker", en = "select", tn = "cancel", sn = "change", J = ["year", "month", "date", "hour", "minute", "second"], ae = {
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
}, ph = {
  year: "YYYY",
  month: "M",
  date: "D",
  hour: "hh",
  minute: "mm",
  second: "ss"
}, mh = {
  name: fh,
  mixins: [j, q, ut, ie],
  emits: [en, tn, sn],
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
      const e = Object.assign({}, ph);
      return Wt(e, this.format), e;
    },
    natureRangeCache() {
      const e = {
        hour: [],
        minute: [],
        second: []
      };
      return Object.keys(e).forEach((t) => {
        e[t] = this._range(t, ae[t].natureMin, ae[t].natureMax);
      }), e;
    },
    startIndex() {
      const e = J.indexOf(this.startColumn);
      return e < 0 ? 0 : e;
    },
    minArray() {
      return this.min instanceof Date ? mt(this.min).slice(this.startIndex, this.startIndex + this.columnCount) : this.min;
    },
    maxArray() {
      return this.max instanceof Date ? mt(this.max).slice(this.startIndex, this.startIndex + this.columnCount) : this.max;
    },
    valueArray() {
      return this.value instanceof Date ? mt(this.value).slice(this.startIndex, this.startIndex + this.columnCount) : this.value;
    },
    data() {
      const e = [];
      return this._generateData(this.startIndex, 0, e), e;
    },
    selectedIndex() {
      const e = [];
      let t = this.data, i;
      for (let n = 0; n < this.columnCount && n < 6 - this.startIndex; n++)
        i = Ft(t, (o) => this.valueArray[n] && o.value === this.valueArray[n]), e[n] = i !== -1 ? i : 0, t = t[e[n]] && t[e[n]].children;
      return e;
    }
  },
  methods: {
    _select(e, t, i) {
      this.$emit(en, this._arrayToDate(e), e, i);
    },
    _cancel() {
      this.$emit(tn);
    },
    _change(e, t) {
      this.$emit(sn, e, t);
    },
    _generateData(e, t, i) {
      if (t === 0) {
        const n = e === 0 ? this.minArray[0] : Math.max(this.minArray[0], ae[J[e]].natureMin), o = e === 0 ? this.maxArray[0] : Math.min(this.maxArray[0], ae[J[e]].natureMax);
        i.push.apply(i, this._range(J[e], n, o, !0, !0));
      } else if (e < 3 || i.isMin || i.isMax) {
        const n = e === 2 ? Jo(i.value, i.year) : ae[J[e]].natureMax, o = i.isMin ? Math.max(this.minArray[t], ae[J[e]].natureMin) : ae[J[e]].natureMin, s = i.isMax ? Math.min(this.maxArray[t], n) : n, r = e === 1 && this.startIndex === 0 && this.columnCount >= 3 && i.value;
        i.children = this._range(J[e], o, s, i.isMin, i.isMax, r);
      } else
        i.children = this.natureRangeCache[J[e]];
      t < this.columnCount - 1 && e < 5 && (i.children || i).forEach((n) => {
        (!n.children || n.isMin || n.isMax) && this._generateData(e + 1, t + 1, n);
      });
    },
    _arrayToDate(e) {
      const t = [], i = mt(/* @__PURE__ */ new Date(0));
      for (let n = 0; n < 6; n++)
        n < this.startIndex ? t[n] = i[n] : n >= this.startIndex + this.columnCount ? t[n] = ae[J[n]].natureMin : t[n] = e[n - this.startIndex];
      return t[1]--, new Date(...t);
    },
    _range(e, t, i, n, o, s = 0) {
      this._rangeCache || (this._rangeCache = {});
      const r = e + s + t + i + n + o;
      if (this._rangeCache[r])
        return this._rangeCache[r];
      const l = [], a = this.formatConfig[e];
      for (let h = t; h <= i; h++) {
        const f = {
          text: lo(e, a, h, "i"),
          value: h,
          order: this.columnOrder.indexOf(e)
        };
        n && h === t && (f.isMin = !0), o && h === i && (f.isMax = !0), s && (f.year = s), l.push(f);
      }
      return this._rangeCache[r] = l, l;
    }
  },
  components: {
    CubeCascadePicker: A
  }
};
function mt(e) {
  return [e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()];
}
function _h(e, t, i, n, o, s) {
  const r = T("cube-cascade-picker");
  return c(), x(r, {
    visible: e.isVisible,
    "onUpdate:visible": t[0] || (t[0] = (l) => e.isVisible = l),
    data: s.data,
    "selected-index": s.selectedIndex,
    title: e.title,
    subtitle: e.subtitle,
    "cancel-txt": e._cancelTxt,
    "confirm-txt": e._confirmTxt,
    "swipe-time": e.swipeTime,
    "z-index": e.zIndex,
    "mask-closable": e.maskClosable,
    onSelect: s._select,
    onCancel: s._cancel,
    onChange: s._change
  }, null, 8, ["visible", "data", "selected-index", "title", "subtitle", "cancel-txt", "confirm-txt", "swipe-time", "z-index", "mask-closable", "onSelect", "onCancel", "onChange"]);
}
const ve = /* @__PURE__ */ b(mh, [["render", _h]]);
function gh(e, t) {
  Z(e, t);
}
ve.install = function(e) {
  e.component(M.name, M), e.component(A.name, A), e.component(ve.name, ve), X.install(e), je(e, M), Hi(e, A), gh(e, ve);
};
ve.Picker = M;
A.Picker = M;
ve.CascadePicker = A;
const bh = "cube-time-picker", nn = "select", on = "cancel", rn = "change", ln = {
  value: "now"
}, an = {
  floor: "floor",
  ceil: "ceil",
  round: "round"
}, cn = 10, vh = {
  name: bh,
  mixins: [j, q, ut, ie],
  components: {
    CubeCascadePicker: A
  },
  emits: [nn, on, rn],
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
      default: cn
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
      const e = {
        filter: [this.$t("today")],
        format: this.$t("formatDate")
      };
      return Object.assign({}, e, this.day);
    },
    nowText() {
      const e = this.$t("now");
      return this.showNow && this.showNow.text || e;
    },
    minuteStepRule() {
      const e = this.minuteStep;
      return typeof e == "object" && Math[an[e.rule]] || Math[an.floor];
    },
    minuteStepNumber() {
      const e = this.minuteStep;
      return typeof e == "number" ? e : e.step || cn;
    },
    minTime() {
      let e = +this.min || +this.now + this.delay * Ce;
      const t = new Date(e).getMinutes(), i = Math.min(this.minuteStepRule(t / this.minuteStepNumber) * this.minuteStepNumber, 60);
      return e += (i - t) * Ce, new Date(e);
    },
    maxTime() {
      let e = +this.max || $t(new Date(+this.minTime + this._day.len * Ti)) - 1;
      const t = new Date(e).getMinutes(), i = Math.floor(t / this.minuteStepNumber) * this.minuteStepNumber;
      return e -= (t - i) * Ce, new Date(e);
    },
    days() {
      const e = [], t = ft(this.minTime, this.now), i = this.max ? ft(this.maxTime, this.minTime) + 1 : this._day.len;
      for (let n = 0; n < i; n++) {
        const o = +this.minTime + n * Ti;
        e.push({
          value: o,
          text: this._day.filter && this._day.filter[t + n] || xi(new Date(o), this._day.format)
        });
      }
      return e;
    },
    hours() {
      const e = [];
      for (let t = 0; t < 24; t++)
        e.push({
          value: t,
          text: `${t}${this.$t("hours")}`,
          children: this.minutes
        });
      return e;
    },
    minutes() {
      const e = [];
      for (let t = 0; t < 60; t += this.minuteStepNumber)
        e.push({
          value: t,
          text: `${ao(t)}${this.$t("minutes")}`
        });
      return e;
    },
    cascadeData() {
      const e = this.days.slice();
      if (this.maxTime - this.minTime <= -6e4)
        return [];
      e.forEach((i, n) => {
        const o = n === 0, s = n === e.length - 1;
        if (!o && !s) {
          i.children = this.hours;
          return;
        }
        const r = [], l = o ? this.minTime.getHours() : 0, a = s ? this.maxTime.getHours() : 23;
        for (let h = l; h <= a; h++) {
          const f = o && h === l, m = s && h === a;
          if (!f && !m) {
            r.push({
              value: h,
              text: `${h}${this.$t("hours")}`,
              children: this.minutes
            });
            continue;
          }
          const v = f ? Math.round(this.minTime.getMinutes() / this.minuteStepNumber) : 0, g = m ? Math.round(this.maxTime.getMinutes() / this.minuteStepNumber) : Math.floor(59 / this.minuteStepNumber), _ = this.minutes.slice(v, g + 1);
          r.push({
            value: h,
            text: `${h}${this.$t("hours")}`,
            children: _
          });
        }
        i.children = r;
      });
      const t = ft(this.minTime, this.now);
      if (this.showNow && t <= 0) {
        const i = Math.abs(t), n = e[i];
        n && (n.children = [...n.children], n.children.unshift({
          value: ln.value,
          text: this.nowText,
          children: []
        }));
      }
      return e;
    }
  },
  methods: {
    show() {
      this.isVisible || (this.isVisible = !0, this._updateNow(), this._updateSelectedIndex());
    },
    setTime(e) {
      this.value = e, this.isVisible && this._updateSelectedIndex();
    },
    _updateSelectedIndex() {
      const e = this.value, t = this.minTime, i = this.min || this.min === 0 ? +t : Math.floor(t / Ce) * Ce;
      if (e < i)
        this.selectedIndex = [0, 0, 0];
      else {
        const n = new Date(e), o = ft(n, t);
        if (o >= this.days.length)
          return;
        const s = n.getHours(), r = o === 0 ? this.showNow ? this.minTime.getHours() - 1 : this.minTime.getHours() : 0, l = s - r, a = this.minuteStepRule(n.getMinutes() / this.minuteStepNumber), h = !o && (this.showNow ? l === 1 : !l) ? this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber) : 0, f = a - h;
        this.selectedIndex = [o, l, f];
      }
    },
    _updateNow() {
      this.now = /* @__PURE__ */ new Date();
    },
    _pickerChange(e, t) {
      this.$emit(rn, e, t);
    },
    _pickerSelect(e, t, i) {
      let n, o;
      e[1] === ln.value ? (n = +/* @__PURE__ */ new Date(), o = this.nowText) : (n = $t(new Date(e[0])) + e[1] * Zo + e[2] * Ce, o = i[0] + " " + i[1] + ":" + i[2]), this.value = n;
      const s = xi(new Date(n), this.format);
      this.$emit(nn, n, o, s);
    },
    _pickerCancel() {
      this.$emit(on);
    }
  }
};
function yh(e, t, i, n, o, s) {
  const r = T("cube-cascade-picker");
  return c(), x(r, {
    ref: "picker",
    visible: e.isVisible,
    "onUpdate:visible": t[0] || (t[0] = (l) => e.isVisible = l),
    data: s.cascadeData,
    "selected-index": o.selectedIndex,
    title: s._title,
    subtitle: e.subtitle,
    "cancel-txt": e._cancelTxt,
    "confirm-txt": e._confirmTxt,
    "swipe-time": e.swipeTime,
    "z-index": e.zIndex,
    "mask-closable": e.maskClosable,
    onSelect: s._pickerSelect,
    onCancel: s._pickerCancel,
    onChange: s._pickerChange
  }, null, 8, ["visible", "data", "selected-index", "title", "subtitle", "cancel-txt", "confirm-txt", "swipe-time", "z-index", "mask-closable", "onSelect", "onCancel", "onChange"]);
}
const Ae = /* @__PURE__ */ b(vh, [["render", yh]]);
function Th(e, t) {
  Z(e, t);
}
Ae.install = function(e) {
  e.component(M.name, M), e.component(Ae.name, Ae), X.install(e), je(e, M), Th(e, Ae);
};
Ae.Picker = M;
const xh = "cube-segment-picker", hn = "next", un = "prev", dn = "select", fn = "cancel", pn = "change", wh = {
  name: xh,
  mixins: [j, q, ut, ie],
  emits: [hn, un, dn, fn, pn],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    nextTxt: {
      type: String,
      default: ""
    },
    prevTxt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      current: 0,
      selectedVal: [],
      selectedIndex: [],
      selectedText: []
    };
  },
  computed: {
    currentPicker() {
      for (let e = 0; e < this.data.length; e++) {
        let t = this.$refs.pickers[e];
        if (t.$attrs.index === this.current)
          return t;
      }
    },
    _nextTxt() {
      return this.nextTxt || this.$t("next");
    },
    _prevTxt() {
      return this.prevTxt || this.$t("prev");
    }
  },
  watch: {
    data() {
      this.current = 0, this.selectedVal = [], this.selectedIndex = [], this.selectedText = [];
    }
  },
  methods: {
    show() {
      this.isVisible || !this.data.length || (this.isVisible = !0, this.currentPicker.show());
    },
    hide() {
      !this.isVisible || !this.data.length || (this.isVisible = !1, this.currentPicker.hide());
    },
    _select(...e) {
      this.selectedVal[this.current] = e[0], this.selectedIndex[this.current] = e[1], this.selectedText[this.current] = e[2], this.current < this.data.length - 1 ? (this.$emit(hn, this.current, ...e), this.current++, this.currentPicker.show()) : (this.isVisible = !1, this.$emit(dn, this.selectedVal, this.selectedIndex, this.selectedText), this.current = 0);
    },
    _cancel(...e) {
      this.current > 0 ? (this.$emit(un, this.current, ...e), this.current--, this.currentPicker.show()) : (this.isVisible = !1, this.$emit(fn));
    },
    _change(...e) {
      this.$emit(pn, this.current, ...e);
    }
  }
}, Eh = { class: "cube-segment-picker" };
function Sh(e, t, i, n, o, s) {
  return c(), d("div", Eh, [
    (c(!0), d(S, null, $(i.data, (r, l) => (c(), x(yi(r.is || "cube-picker"), fe({
      key: l,
      index: l,
      ref_for: !0,
      ref: "pickers",
      title: r.title || e.title,
      subtitle: r.subtitle || e.subtitle,
      "confirm-txt": r.confirmTxt || (l === i.data.length - 1 ? e._confirmTxt : s._nextTxt),
      "cancel-txt": r.cancelTxt || (l === 0 ? e._cancelTxt : s._prevTxt),
      "swipe-time": r.swipeTime || e.swipeTime,
      "z-index": r.zIndex || e.zIndex,
      "mask-closable": e.maskClosable
    }, r, {
      onSelect: s._select,
      onCancel: s._cancel,
      onChange: s._change
    }), null, 16, ["index", "title", "subtitle", "confirm-txt", "cancel-txt", "swipe-time", "z-index", "mask-closable", "onSelect", "onCancel", "onChange"]))), 128))
  ]);
}
const ye = /* @__PURE__ */ b(wh, [["render", Sh]]);
function kh(e, t) {
  Z(e, t);
}
ye.install = function(e) {
  e.component(M.name, M), e.component(A.name, A), e.component(ye.name, ye), X.install(e), je(e, M), Hi(e, A), kh(e, ye);
};
ye.Picker = M;
A.Picker = M;
ye.CascadePicker = A;
const $h = "cube-dialog", mn = "confirm", _n = "cancel", gn = "close", Ai = "javascript:;", bn = {
  textType: "ok",
  active: !0,
  disabled: !1,
  href: Ai
}, vn = {
  textType: "cancel",
  active: !1,
  disabled: !1,
  href: Ai
}, yn = function(e, t) {
  typeof e == "string" && (e = {
    text: e
  });
  const i = t && this.$t(t.textType);
  return Object.assign({}, t, { text: i }, e);
}, Ch = {
  name: $h,
  mixins: [j, q, ie],
  emits: [mn, _n, gn],
  props: {
    type: {
      type: String,
      default: "alert"
    },
    prompt: {
      type: Object,
      default() {
        return {
          value: "",
          placeholder: ""
        };
      }
    },
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    showClose: {
      type: Boolean,
      default: !1
    },
    confirmBtn: {
      type: [Object, String],
      default() {
        return {
          ...bn
        };
      }
    },
    cancelBtn: {
      type: [Object, String],
      default() {
        return {
          ...vn
        };
      }
    }
  },
  data() {
    return {
      defHref: Ai,
      promptValue: this.prompt.value
    };
  },
  computed: {
    _confirmBtn() {
      return yn.call(this, this.confirmBtn, bn);
    },
    _cancelBtn() {
      return yn.call(this, this.cancelBtn, vn);
    },
    isConfirm() {
      return this.type === "confirm";
    },
    isPrompt() {
      return this.type === "prompt";
    },
    containerClass() {
      return `cube-dialog-${this.type}`;
    }
  },
  watch: {
    "prompt.value": {
      handler: function(e) {
        this.promptValue = e;
      }
    }
  },
  methods: {
    maskClick(e) {
      this.maskClosable && this.cancel(e);
    },
    confirm(e) {
      this._confirmBtn.disabled || (this.hide(), this.$emit(mn, e, this.promptValue));
    },
    cancel(e) {
      this._cancelBtn.disabled || (this.hide(), this.$emit(_n, e));
    },
    close(e) {
      this.hide(), this.$emit(gn, e);
    }
  },
  components: {
    CubePopup: Q,
    CubeInput: ne
  }
}, Mh = { class: "cube-dialog-main" }, Nh = /* @__PURE__ */ u("i", { class: "cubeic-close" }, null, -1), Ph = [
  Nh
], Ih = {
  key: 0,
  class: "cube-dialog-icon"
}, Dh = {
  key: 1,
  class: "cube-dialog-title"
}, Vh = { class: "cube-dialog-title-def" }, Oh = { class: "cube-dialog-content" }, Hh = { class: "cube-dialog-content-def" }, Ah = ["innerHTML"], Lh = ["href"], Yh = ["href"];
function Rh(e, t, i, n, o, s) {
  const r = T("cube-input"), l = T("cube-popup");
  return c(), x(te, { name: "cube-dialog-fade" }, {
    default: w(() => [
      E(C(l, {
        type: "dialog",
        "z-index": e.zIndex,
        mask: !0,
        center: !0,
        onMaskClick: s.maskClick
      }, {
        default: w(() => [
          u("div", Mh, [
            E(u("span", {
              class: "cube-dialog-close",
              onClick: t[0] || (t[0] = (...a) => s.close && s.close(...a))
            }, Ph, 512), [
              [N, i.showClose]
            ]),
            u("div", {
              class: y(s.containerClass)
            }, [
              i.icon ? (c(), d("p", Ih, [
                u("i", {
                  class: y(i.icon)
                }, null, 2)
              ])) : I("", !0),
              i.title || e.$slots.title ? (c(), d("h2", Dh, [
                p(e.$slots, "title", {}, () => [
                  u("p", Vh, k(i.title), 1)
                ])
              ])) : I("", !0),
              u("div", Oh, [
                p(e.$slots, "content", {}, () => [
                  u("div", Hh, [
                    i.content ? (c(), d("p", {
                      key: 0,
                      innerHTML: i.content
                    }, null, 8, Ah)) : I("", !0),
                    s.isPrompt ? (c(), x(r, fe({ key: 1 }, i.prompt, {
                      modelValue: o.promptValue,
                      "onUpdate:modelValue": t[1] || (t[1] = (a) => o.promptValue = a)
                    }), null, 16, ["modelValue"])) : I("", !0)
                  ])
                ])
              ]),
              u("div", {
                class: y(["cube-dialog-btns", { "border-right-1px": s.isConfirm || s.isPrompt }])
              }, [
                p(e.$slots, "btns", {}, () => [
                  s.isConfirm || s.isPrompt ? (c(), d("a", {
                    key: 0,
                    href: s._cancelBtn.href,
                    class: y(["cube-dialog-btn border-top-1px", { "cube-dialog-btn_highlight": s._cancelBtn.active, "cube-dialog-btn_disabled": s._cancelBtn.disabled }]),
                    onClick: t[2] || (t[2] = (...a) => s.cancel && s.cancel(...a))
                  }, k(s._cancelBtn.text), 11, Lh)) : I("", !0),
                  u("a", {
                    href: s._confirmBtn.href,
                    class: y(["cube-dialog-btn border-top-1px", { "cube-dialog-btn_highlight": s._confirmBtn.active, "cube-dialog-btn_disabled": s._confirmBtn.disabled }]),
                    onClick: t[3] || (t[3] = (...a) => s.confirm && s.confirm(...a))
                  }, k(s._confirmBtn.text), 11, Yh)
                ])
              ], 2)
            ], 2)
          ])
        ]),
        _: 3
      }, 8, ["z-index", "onMaskClick"]), [
        [N, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const Le = /* @__PURE__ */ b(Ch, [["render", Rh]]);
function Xh(e, t) {
  Z(e, t, ["confirm", "cancel", "close", "btn-click", "link-click"], !0);
}
Le.install = function(e) {
  e.component(ne.name, ne), e.component(Le.name, Le), X.install(e), Xh(e, Le);
};
Le.Input = ne;
const Uh = "cube-action-sheet", Tn = "select", xn = "cancel", zh = {
  name: Uh,
  mixins: [j, q, ie],
  emits: [Tn, xn],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    active: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: ""
    },
    pickerStyle: {
      type: Boolean,
      default: !1
    },
    maskClosable: {
      type: Boolean,
      default: !0
    },
    cancelTxt: {
      type: String,
      default: ""
    }
  },
  computed: {
    _cancelTxt() {
      return this.cancelTxt || this.$t("cancel");
    }
  },
  methods: {
    maskClick() {
      this.maskClosable && this.cancel();
    },
    cancel() {
      this.hide(), this.$emit(xn);
    },
    itemClick(e, t) {
      this.hide(), this.$emit(Tn, e, t);
    }
  },
  components: {
    CubePopup: Q
  }
}, Bh = { class: "cube-action-sheet-content" }, Fh = { class: "cube-action-sheet-list" }, Wh = ["data-align", "innerHTML", "onClick"], jh = /* @__PURE__ */ u("div", { class: "cube-action-sheet-space" }, null, -1);
function Gh(e, t, i, n, o, s) {
  const r = T("cube-popup");
  return c(), x(te, { name: "cube-action-sheet-fade" }, {
    default: w(() => [
      E(C(r, {
        type: "action-sheet",
        class: y({ "cube-action-sheet_picker": i.pickerStyle }),
        center: !1,
        mask: !0,
        "z-index": e.zIndex,
        onMaskClick: s.maskClick
      }, {
        default: w(() => [
          C(te, { name: "cube-action-sheet-move" }, {
            default: w(() => [
              E(u("div", {
                class: "cube-action-sheet-panel cube-safe-area-pb",
                onClick: t[1] || (t[1] = R(() => {
                }, ["stop"]))
              }, [
                E(u("h1", { class: "cube-action-sheet-title border-bottom-1px" }, k(i.title), 513), [
                  [N, i.pickerStyle || i.title]
                ]),
                u("div", Bh, [
                  u("ul", Fh, [
                    (c(!0), d(S, null, $(i.data, (l, a) => (c(), d("li", {
                      class: y(["cube-action-sheet-item border-bottom-1px", [
                        l.class || "",
                        a === i.active ? "cube-action-sheet-item_active" : ""
                      ]]),
                      "data-align": l.align,
                      innerHTML: l.content,
                      onClick: (h) => s.itemClick(l, a)
                    }, null, 10, Wh))), 256))
                  ])
                ]),
                jh,
                u("div", {
                  class: "cube-action-sheet-cancel",
                  onClick: t[0] || (t[0] = (...l) => s.cancel && s.cancel(...l))
                }, [
                  u("span", null, k(s._cancelTxt), 1)
                ])
              ], 512), [
                [N, e.isVisible]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "z-index", "onMaskClick"]), [
        [N, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const Ze = /* @__PURE__ */ b(zh, [["render", Gh]]);
function Kh(e, t) {
  Z(e, t, ["select", "cancel"], !0);
}
Ze.install = function(e) {
  e.component(Ze.name, Ze), X.install(e), Kh(e, Ze);
};
const qh = {
  props: {
    y: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      width: 50,
      height: 80,
      ratio: 2
    };
  },
  computed: {
    distance() {
      return Math.max(0, Math.min(this.y * this.ratio, this.maxDistance));
    },
    style() {
      return `width:${this.width / this.ratio}px;height:${this.height / this.ratio}px`;
    }
  },
  mounted() {
    this.ratio = window.devicePixelRatio, this.width *= this.ratio, this.height *= this.ratio, this.initRadius = 18 * this.ratio, this.minHeadRadius = 12 * this.ratio, this.minTailRadius = 5 * this.ratio, this.initArrowRadius = 10 * this.ratio, this.minArrowRadius = 6 * this.ratio, this.arrowWidth = 3 * this.ratio, this.maxDistance = 40 * this.ratio, this.initCenterX = 25 * this.ratio, this.initCenterY = 25 * this.ratio, this.headCenter = {
      x: this.initCenterX,
      y: this.initCenterY
    }, this._draw();
  },
  methods: {
    _draw() {
      const e = this.$refs.bubble;
      let t = e.getContext("2d");
      t.clearRect(0, 0, e.width, e.height), this._drawBubble(t), this._drawArrow(t);
    },
    _drawBubble(e) {
      e.save(), e.beginPath();
      const t = this.distance / this.maxDistance, i = this.initRadius - (this.initRadius - this.minHeadRadius) * t;
      this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * t, e.arc(this.headCenter.x, this.headCenter.y, i, 0, Math.PI, !0);
      const n = this.initRadius - (this.initRadius - this.minTailRadius) * t, o = {
        x: this.headCenter.x,
        y: this.headCenter.y + this.distance
      }, s = {
        x: o.x - n,
        y: o.y
      }, r = {
        x: s.x,
        y: s.y - this.distance / 2
      };
      e.quadraticCurveTo(r.x, r.y, s.x, s.y), e.arc(o.x, o.y, n, Math.PI, 0, !0);
      const l = {
        x: this.headCenter.x + i,
        y: this.headCenter.y
      }, a = {
        x: o.x + n,
        y: l.y + this.distance / 2
      };
      e.quadraticCurveTo(a.x, a.y, l.x, l.y), e.fillStyle = "rgb(170,170,170)", e.fill(), e.strokeStyle = "rgb(153,153,153)", e.stroke(), e.restore();
    },
    _drawArrow(e) {
      e.save(), e.beginPath();
      const t = this.distance / this.maxDistance, i = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * t;
      e.arc(this.headCenter.x, this.headCenter.y, i - (this.arrowWidth - t), -Math.PI / 2, 0, !0), e.arc(this.headCenter.x, this.headCenter.y, i, 0, Math.PI * 3 / 2, !1), e.lineTo(this.headCenter.x, this.headCenter.y - i - this.arrowWidth / 2 + t), e.lineTo(this.headCenter.x + this.arrowWidth * 2 - t * 2, this.headCenter.y - i + this.arrowWidth / 2), e.lineTo(this.headCenter.x, this.headCenter.y - i + this.arrowWidth * 3 / 2 - t), e.fillStyle = "rgb(255,255,255)", e.fill(), e.strokeStyle = "rgb(170,170,170)", e.stroke(), e.restore();
    }
  },
  watch: {
    y() {
      this._draw();
    }
  }
}, Zh = ["width", "height"];
function Jh(e, t, i, n, o, s) {
  return c(), d("canvas", {
    ref: "bubble",
    width: o.width,
    height: o.height,
    style: F(s.style)
  }, null, 12, Zh);
}
const Qh = /* @__PURE__ */ b(qh, [["render", Jh]]), dt = {
  props: {
    // the options of BetterScroll
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, Li = {
  methods: {
    _checkDeprecated() {
      const e = this.$options.props, t = this.$options.name;
      Object.entries(e).forEach(([i, n]) => {
        const o = n.deprecated;
        o && this[i] !== void 0 && Ro(`The property "${Uo(i)}" is deprecated, please use the recommended property "${o.replacedBy}" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/${t.substr(5)}#cube-Propsconfiguration-anchor`);
      });
    }
  },
  mounted() {
    this._checkDeprecated();
  }
};
const eu = "cube-scroll", tu = "horizontal", wn = "vertical", iu = "Refresh success", su = 600, En = "click", Sn = "pulling-down", kn = "pulling-up", St = "scroll", Ni = "before-scroll-start", $o = "scroll-end", $n = "none", nu = "native", ou = [St, Ni, $o], ru = {
  observeDOM: !0,
  click: !0,
  probeType: 1,
  scrollbar: !1,
  pullDownRefresh: !1,
  pullUpLoad: !1
}, lu = {
  name: eu,
  mixins: [dt, Li],
  provide() {
    return {
      parentScroll: this
    };
  },
  inject: {
    parentScroll: {
      default: null
    }
  },
  emits: [En, Sn, kn, St, Ni, $o],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    scrollEvents: {
      type: Array,
      default() {
        return [];
      },
      validator(e) {
        return e.every((t) => ou.indexOf(t) !== -1);
      }
    },
    // TODO: plan to remove at 1.10.0
    listenScroll: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "scroll-events"
      }
    },
    listenBeforeScroll: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "scroll-events"
      }
    },
    direction: {
      type: String,
      default: wn
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    nestMode: {
      type: String,
      default: $n
    }
  },
  data() {
    return {
      beforePullDown: !0,
      isPullingDown: !1,
      isPullUpLoad: !1,
      pullUpNoMore: !1,
      bubbleY: 0,
      pullDownStyle: "",
      pullDownStop: 40,
      pullDownHeight: 60,
      pullUpHeight: 0
    };
  },
  computed: {
    pullDownRefresh() {
      let e = this.options.pullDownRefresh;
      return e && (e === !0 && (e = {}), Object.assign({ stop: this.pullDownStop }, e));
    },
    pullUpLoad() {
      return this.options.pullUpLoad;
    },
    pullUpTxt() {
      const e = this.pullUpLoad, t = e && e.txt, i = t && t.more || "", n = t && t.noMore || "";
      return this.pullUpNoMore ? n : i;
    },
    refreshTxt() {
      const e = this.pullDownRefresh;
      return e && e.txt || iu;
    },
    finalScrollEvents() {
      const e = this.scrollEvents.slice();
      return e.length || (this.listenScroll && e.push(St), this.listenBeforeScroll && e.push(Ni)), e;
    },
    needListenScroll() {
      return this.finalScrollEvents.indexOf(St) !== -1 || this.parentScroll;
    }
  },
  watch: {
    data: {
      handler() {
        setTimeout(() => {
          this.forceUpdate(!0);
        }, this.refreshDelay);
      },
      deep: !0
    },
    pullDownRefresh: {
      handler(e, t) {
        e && (this.scroll.openPullDown(e), t || (this._onPullDownRefresh(), this._pullDownRefreshChangeHandler())), !e && t && (this.scroll.closePullDown(), this._offPullDownRefresh(), this._pullDownRefreshChangeHandler());
      },
      deep: !0
    },
    pullUpLoad: {
      handler(e, t) {
        e && (this.scroll.openPullUp(e), t || (this._onPullUpLoad(), this._pullUpLoadChangeHandler())), !e && t && (this.scroll.closePullUp(), this._offPullUpLoad(), this._pullUpLoadChangeHandler());
      },
      deep: !0
    }
  },
  activated() {
    this.enable();
  },
  deactivated() {
    this.disable();
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  beforeUnmount() {
    this.destroy();
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper)
        return;
      this._calculateMinHeight();
      let e = {
        scrollY: this.direction === wn,
        scrollX: this.direction === tu,
        probeType: this.needListenScroll ? 3 : 1,
        useTransition: rt
      }, t = Object.assign({}, ru, e, this.options);
      this.scroll = new U(this.$refs.wrapper, t), this.parentScroll && this.nestMode !== $n && this._handleNestScroll(), this._listenScrollEvents(), this.pullDownRefresh && (this._onPullDownRefresh(), this._pullDownRefreshChangeHandler()), this.pullUpLoad && (this._onPullUpLoad(), this._pullUpLoadChangeHandler());
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this._calculateMinHeight(), this.scroll && this.scroll.refresh();
    },
    destroy() {
      this.scroll && this.scroll.destroy(), this.scroll = null;
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    clickItem(e) {
      this.$emit(En, e);
    },
    async forceUpdate(e = !1, t = !1) {
      this.isPullDownUpdating || (this.pullDownRefresh && this.isPullingDown ? (this.isPullingDown = !1, this.isPullDownUpdating = !0, await this._waitFinishPullDown(), this.isPullDownUpdating = !1, await this._waitResetPullDown(e)) : this.pullUpLoad && this.isPullUpLoad && (this.isPullUpLoad = !1, this.scroll.finishPullUp(), this.pullUpNoMore = !e || t), e && this.refresh());
    },
    resetPullUpTxt() {
      this.pullUpNoMore = !1;
    },
    _listenScrollEvents() {
      this.finalScrollEvents.forEach((e) => {
        this.scroll.on(no(e), (...t) => {
          this.$emit(e, ...t);
        });
      });
    },
    _handleNestScroll() {
      this.$nextTick(() => {
        const e = this.scroll, t = this.parentScroll.scroll;
        [e, t].forEach((n, o, s) => {
          n.on("touchEnd", () => {
            t.enable(), e.enable(), e.initiated = !1;
          }), n.on("beforeScrollStart", () => {
            this.touchStartMoment = !0;
            const r = s[(o + 1) % 2];
            r.stop(), r.resetPosition();
          });
        }), e.on("scroll", (n) => {
          if (!e.initiated || e.isInTransition || this.nestMode === nu && !this.touchStartMoment)
            return;
          this._checkReachBoundary(n) ? (e.resetPosition(), e.disable(), t.pointX = e.pointX, t.pointY = e.pointY, t.enable()) : t.disable(), this.touchStartMoment = !1;
        });
      });
    },
    _checkReachBoundary(e) {
      const t = this.scroll.distX, i = this.scroll.distY, n = t > 0 ? e.x >= this.scroll.minScrollX : t < 0 ? e.x <= this.scroll.maxScrollX : !1, o = i > 0 ? e.y >= this.scroll.minScrollY : i < 0 ? e.y <= this.scroll.maxScrollY : !1, s = this.scroll.freeScroll, r = this.scroll.hasHorizontalScroll, l = this.scroll.hasVerticalScroll;
      if (!r && !l)
        return !0;
      if (s)
        return n || o;
      let a;
      return this.scroll.movingDirectionX ? a = n : this.scroll.movingDirectionY && (a = o), a;
    },
    _calculateMinHeight() {
      const { wrapper: e, listWrapper: t } = this.$refs, i = this.pullUpLoad, n = this.pullDownRefresh;
      let o = 0;
      (n || i) && (o = de(e).height + 1, i && i.visible && (o -= this.pullUpHeight)), t.style.minHeight = `${o}px`;
    },
    _onPullDownRefresh() {
      this.scroll.on("pullingDown", this._pullDownHandle), this.scroll.on("scroll", this._pullDownScrollHandle);
    },
    _offPullDownRefresh() {
      this.scroll.off("pullingDown", this._pullDownHandle), this.scroll.off("scroll", this._pullDownScrollHandle);
    },
    _pullDownRefreshChangeHandler() {
      this.$nextTick(() => {
        this._getPullDownEleHeight(), this._calculateMinHeight();
      });
    },
    _pullDownHandle() {
      this.resetPullDownTimer && clearTimeout(this.resetPullDownTimer), this.beforePullDown = !1, this.isPullingDown = !0, this.$emit(Sn);
    },
    _pullDownScrollHandle(e) {
      this.beforePullDown ? (this.bubbleY = Math.max(0, e.y - this.pullDownHeight), this.pullDownStyle = `top:${Math.min(e.y - this.pullDownHeight, 0)}px`) : (this.bubbleY = 0, this.pullDownStyle = `top:${Math.min(e.y - this.pullDownStop, 0)}px`);
    },
    _pullUpLoadChangeHandler() {
      this.$nextTick(() => {
        this._getPullUpEleHeight(), this._calculateMinHeight();
      });
    },
    _onPullUpLoad() {
      this.scroll.on("pullingUp", this._pullUpHandle);
    },
    _offPullUpLoad() {
      this.scroll.off("pullingUp", this._pullUpHandle);
    },
    _pullUpHandle() {
      this.isPullUpLoad = !0, this.$emit(kn);
    },
    _waitFinishPullDown(e) {
      const { stopTime: t = su } = this.pullDownRefresh;
      return new Promise((i) => {
        setTimeout(() => {
          this.scroll.finishPullDown(), i();
        }, t);
      });
    },
    _waitResetPullDown(e) {
      return new Promise((t) => {
        this.resetPullDownTimer = setTimeout(() => {
          this.pullDownStyle = `top: -${this.pullDownHeight}px`, this.beforePullDown = !0, t();
        }, this.scroll.options.bounceTime);
      });
    },
    _getPullDownEleHeight() {
      let e = this.$refs.pulldown;
      e && (e = e.children[0], this.pullDownHeight = de(e).height, this.beforePullDown = !1, this.isPullingDown = !0, this.$nextTick(() => {
        this.pullDownStop = de(e).height, this.beforePullDown = !0, this.isPullingDown = !1;
      }));
    },
    _getPullUpEleHeight() {
      const t = this.$refs.listWrapper.nextElementSibling;
      if (!t) {
        this.pullUpHeight = 0;
        return;
      }
      this.pullUpHeight = de(t).height;
    }
  },
  components: {
    Loading: ee,
    Bubble: Qh
  }
}, au = {
  ref: "wrapper",
  class: "cube-scroll-wrapper"
}, cu = { class: "cube-scroll-content" }, hu = {
  ref: "listWrapper",
  class: "cube-scroll-list-wrapper"
}, uu = { class: "cube-scroll-list" }, du = ["onClick"], fu = {
  key: 0,
  class: "cube-pullup-wrapper"
}, pu = {
  key: 0,
  class: "before-trigger"
}, mu = {
  key: 1,
  class: "after-trigger"
}, _u = {
  key: 0,
  class: "cube-pulldown",
  ref: "pulldown"
}, gu = { class: "before-trigger" }, bu = { class: "after-trigger" }, vu = { class: "loading" }, yu = { class: "cube-pulldown-loaded" };
function Tu(e, t, i, n, o, s) {
  const r = T("loading"), l = T("bubble");
  return c(), d("div", au, [
    u("div", cu, [
      u("div", hu, [
        p(e.$slots, "default", {}, () => [
          u("ul", uu, [
            (c(!0), d(S, null, $(i.data, (a, h) => (c(), d("li", {
              class: "cube-scroll-item border-bottom-1px",
              key: h,
              onClick: (f) => s.clickItem(a)
            }, k(a), 9, du))), 128))
          ])
        ])
      ], 512),
      p(e.$slots, "pullup", {
        pullUpLoad: s.pullUpLoad,
        isPullUpLoad: o.isPullUpLoad
      }, () => [
        s.pullUpLoad ? (c(), d("div", fu, [
          o.isPullUpLoad ? (c(), d("div", mu, [
            C(r)
          ])) : (c(), d("div", pu, [
            u("span", null, k(s.pullUpTxt), 1)
          ]))
        ])) : I("", !0)
      ])
    ]),
    s.pullDownRefresh ? (c(), d("div", _u, [
      p(e.$slots, "pulldown", {
        pullDownRefresh: s.pullDownRefresh,
        pullDownStyle: o.pullDownStyle,
        beforePullDown: o.beforePullDown,
        isPullingDown: o.isPullingDown,
        bubbleY: o.bubbleY
      }, () => [
        u("div", {
          class: "cube-pulldown-wrapper",
          style: F(o.pullDownStyle)
        }, [
          E(u("div", gu, [
            C(l, {
              y: o.bubbleY,
              class: "bubble"
            }, null, 8, ["y"])
          ], 512), [
            [N, o.beforePullDown]
          ]),
          E(u("div", bu, [
            E(u("div", vu, [
              C(r)
            ], 512), [
              [N, o.isPullingDown]
            ]),
            E(u("div", yu, [
              u("span", null, k(s.refreshTxt), 1)
            ], 512), [
              [N, !o.isPullingDown]
            ])
          ], 512), [
            [N, !o.beforePullDown]
          ])
        ], 4)
      ])
    ], 512)) : I("", !0)
  ], 512);
}
const re = /* @__PURE__ */ b(lu, [["render", Tu]]);
const xu = "cube-drawer-item", wu = {
  name: xu,
  props: {
    item: {
      type: [String, Object],
      default: ""
    },
    index: {
      type: Number,
      default: -1
    }
  },
  computed: {
    itemClass() {
      return this.$parent.$parent.$parent.selectedIndex === this.index ? "cube-drawer-item_active" : "";
    }
  },
  methods: {
    clickItem(e) {
      this.$parent.$parent.$parent.itemClickHandler(e, this.index);
    }
  }
};
function Eu(e, t, i, n, o, s) {
  return c(), d("li", {
    class: y(["cube-drawer-item border-bottom-1px", s.itemClass]),
    onClick: t[0] || (t[0] = (r) => s.clickItem(i.item))
  }, [
    p(e.$slots, "default", {}, () => [
      $e(k(i.item.text || i.item), 1)
    ])
  ], 2);
}
const Yt = /* @__PURE__ */ b(wu, [["render", Eu]]);
const Su = "cube-drawer-panel", ku = {
  name: Su,
  mixins: [j],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    index: {
      type: Number,
      default: -1
    }
  },
  computed: {
    selectedIndex() {
      const e = this.$parent.selected[this.index];
      return e === void 0 ? -1 : e;
    }
  },
  watch: {
    data() {
      this.scrollToTop();
    },
    isVisible() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  },
  mounted() {
    this.$parent.addPanel(this);
  },
  beforeUnmount() {
    this.$parent.removePanel(this);
  },
  methods: {
    refresh() {
      this.$refs.scroll.refresh();
    },
    scrollToTop() {
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0, 0, 0);
    },
    itemClickHandler(e, t) {
      this.selectedIndex !== t && this.$parent.changeHandler(this.index, e, t);
    }
  },
  components: {
    CubeScroll: re,
    CubeDrawerItem: Yt
  }
}, $u = { class: "cube-drawer-panel" }, Cu = { class: "cube-drawer-scroll-wrapper" }, Mu = { class: "cube-drawer-list" };
function Nu(e, t, i, n, o, s) {
  const r = T("cube-drawer-item"), l = T("cube-scroll");
  return c(), x(te, { name: "cube-drawer-move" }, {
    default: w(() => [
      E(u("div", $u, [
        u("div", Cu, [
          C(l, {
            ref: "scroll",
            data: i.data
          }, {
            default: w(() => [
              u("ul", Mu, [
                p(e.$slots, "default", {}, () => [
                  (c(!0), d(S, null, $(i.data, (a, h) => (c(), x(r, {
                    item: a,
                    key: h,
                    index: h
                  }, null, 8, ["item", "index"]))), 128))
                ])
              ])
            ]),
            _: 3
          }, 8, ["data"])
        ])
      ], 512), [
        [N, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const Rt = /* @__PURE__ */ b(ku, [["render", Nu]]);
const Pu = "cube-drawer", Cn = "change", Mn = "select", Nn = "cancel", hi = K("transform"), Iu = {
  name: Pu,
  mixins: [j, q],
  emits: [Cn, Mn, Nn],
  props: {
    title: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedIndex: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      index: -1,
      selectedVal: [],
      selectedText: [],
      selected: [...this.selectedIndex],
      slideStyle: {
        [hi]: "translate3d(0, 0, 0)"
      }
    };
  },
  watch: {
    selectedIndex(e) {
      this.selected = [...e];
    },
    index(e, t) {
      this.showPanel(), e < t && this.hidePanel();
    }
  },
  created() {
    this.panels = [];
  },
  methods: {
    show() {
      if (this.isVisible)
        return;
      this.isVisible = !0;
      let e = this.data.length;
      for (let t = 0; t < e; t++)
        if (this.index = t, this.selected[t] < 0 || this.selected[t] === void 0) {
          if (t > 0) {
            const i = t - 1, n = this.selected[i];
            this.changeHandler(i, this.data[i][n], n);
          }
          break;
        }
      this.computedStyle();
    },
    hide() {
      this.slideStyle[hi] = "translate3d(0, 0, 0)", this.shouldHide = !0;
    },
    addPanel(e) {
      this.panels.push(e);
    },
    removePanel(e) {
      const t = this.panels.indexOf(e);
      this.panels.splice(t, 1);
    },
    transitionend() {
      this.shouldHide && (this.isVisible = !1, this.shouldHide = !1);
    },
    refill(e, t, i) {
      this.data[e] = t, this.index = e, this.selected = this.selected.slice(0, e), this.selectedVal = this.selectedVal.slice(0, e), this.selectedText = this.selectedText.slice(0, e), i >= 0 && (this.selected[e] = i, this.changeHandler(e, this.data[e][i], i));
    },
    showPanel() {
      const e = this.index;
      let t = 0;
      for (; t <= e; )
        this.panels[t].show(), t++;
      this.computedStyle();
    },
    hidePanel() {
      const e = this.data.length;
      let t = this.index + 1;
      for (; t < e; )
        this.panels[t].hide(), t++;
    },
    computedStyle() {
      this.$nextTick(() => {
        let e = 0, t = 0;
        const i = this.index;
        for (; t <= i; ) {
          const n = this.panels[t].$el;
          e += n.offsetWidth;
          const o = window.getComputedStyle(n);
          e += parseInt(o.marginLeft), e += parseInt(o.marginRight), t++;
        }
        this.slideStyle[hi] = `translate3d(-${e}px, 0, 0)`;
      });
    },
    changeHandler(e, t, i) {
      typeof t == "string" ? (this.selectedVal[e] = t, this.selectedText[e] = t) : (this.selectedVal[e] = t.value, this.selectedText[e] = t.text), this.selected[e] = i, e === this.data.length - 1 ? (this.$emit(Mn, this.selectedVal, this.selected, this.selectedText), this.hide()) : this.$emit(Cn, e, t, this.selectedVal, this.selected, this.selectedText);
    },
    drawerClick() {
      this.hide(), this.$emit(Nn);
    }
  },
  components: {
    CubeDrawerPanel: Rt
  }
}, Du = { class: "cube-drawer-title" };
function Vu(e, t, i, n, o, s) {
  const r = T("cube-drawer-panel");
  return E((c(), d("div", {
    class: "cube-drawer",
    onClick: t[3] || (t[3] = (...l) => s.drawerClick && s.drawerClick(...l))
  }, [
    u("div", {
      class: "cube-drawer-main",
      style: F(o.slideStyle),
      onClick: t[1] || (t[1] = R(() => {
      }, ["stop"])),
      onTransitionend: t[2] || (t[2] = (...l) => s.transitionend && s.transitionend(...l))
    }, [
      E(u("div", Du, [
        p(e.$slots, "title", {}, () => [
          $e(k(i.title), 1)
        ])
      ], 512), [
        [N, e.$slots.title || i.title]
      ]),
      u("div", {
        class: "cube-drawer-panels",
        onTransitionend: t[0] || (t[0] = R(() => {
        }, ["stop"]))
      }, [
        p(e.$slots, "default", {}, () => [
          (c(!0), d(S, null, $(i.data, (l, a) => (c(), x(r, {
            key: a,
            index: a,
            data: l
          }, null, 8, ["index", "data"]))), 128))
        ])
      ], 32)
    ], 36)
  ], 512)), [
    [N, e.isVisible]
  ]);
}
const pe = /* @__PURE__ */ b(Iu, [["render", Vu]]);
pe.install = function(e) {
  e.component(pe.name, pe), e.component(Rt.name, Rt), e.component(Yt.name, Yt);
};
pe.Panel = Rt;
pe.Item = Yt;
const Ou = "cube-slide-item", Hu = {
  name: Ou,
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, Au = { class: "cube-slide-item" }, Lu = ["href"], Yu = ["src"];
function Ru(e, t, i, n, o, s) {
  return c(), d("div", Au, [
    p(e.$slots, "default", {}, () => [
      u("a", {
        href: i.item.url
      }, [
        u("img", {
          src: i.item.image
        }, null, 8, Yu)
      ], 8, Lu)
    ])
  ]);
}
const lt = /* @__PURE__ */ b(Hu, [["render", Ru]]);
const Xu = "cube-slide", Pn = "change", In = "click", Dn = "scroll-end", Vn = "scroll", Pe = "horizontal", ui = "vertical", Uu = {
  momentum: !1,
  click: !0,
  observeDOM: !1,
  bounce: !1
}, zu = {
  name: Xu,
  mixins: [dt, Li],
  emits: [Pn, In, Dn, Vn],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: !0
    },
    threshold: {
      type: Number,
      default: 0.3
    },
    speed: {
      type: Number,
      default: 400
    },
    autoPlay: {
      type: Boolean,
      default: !0
    },
    interval: {
      type: Number,
      default: 4e3
    },
    showDots: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      default: Pe
    },
    // The props allowVertical, stopPropagation could be removed in next minor version.
    allowVertical: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    },
    stopPropagation: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    },
    refreshResetCurrent: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      dots: 0,
      currentPageIndex: this.initialIndex || 0
    };
  },
  created() {
    this._dataWatchers = [], ["data", "loop", "autoPlay", "options.eventPassthrough", "threshold", "speed", "allowVertical"].forEach((t) => {
      this._dataWatchers.push(this.$watch(t, () => {
        console.log(t), t === "data" && this._destroy(), this.$nextTick(() => {
          this.refresh();
        });
      }, { deep: !0 }));
    });
  },
  watch: {
    initialIndex(e) {
      e !== this.currentPageIndex && this._goToPage(e);
    }
  },
  methods: {
    clickItem(e, t) {
      this.$emit(In, e, t);
    },
    refresh() {
      this.slide !== null && (this._destroy(), clearTimeout(this._timer), this.slide && this.refreshResetCurrent && (this.currentPageIndex = 0), this._updateSlideDom(), this.showDots && this._initDots(), this.currentPageIndex >= this.dots.length && (this.currentPageIndex = this.dots.length - 1), this._initSlide(), this.autoPlay && this._play());
    },
    _destroy() {
      this.slide && this.slide.destroy();
    },
    _refresh() {
      this._updateSlideDom(!0), this.slide.refresh();
    },
    _updateSlideDom(e) {
      this._setSlideStyle(e);
    },
    _setSlideStyle(e) {
      this.children = this.$refs.slideGroup.children;
      const t = this.direction === Pe ? "width" : "height";
      let i = 0;
      const n = this.$refs.slide[`client${t[0].toUpperCase() + t.slice(1)}`], o = this.children.length;
      for (let s = 0; s < o; s++) {
        const r = this.children[s];
        r.style[t] = n + "px", i += n;
      }
      this.loop && !e && o > 1 && (i += 2 * n), this.$refs.slideGroup.style[t] = i + "px";
    },
    _initSlide() {
      const e = this.direction === Pe && this.allowVertical ? ui : "", t = Object.assign({}, Uu, {
        scrollX: this.direction === Pe,
        scrollY: this.direction === ui,
        eventPassthrough: e,
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed
        },
        stopPropagation: this.stopPropagation
      }, this.options);
      this.slide = new U(this.$refs.slide, t), this.slide.on("scrollEnd", this._onScrollEnd), this._goToPage(this.currentPageIndex, 0), this.options.listenScroll && this.options.probeType === 3 && this.slide.on("scroll", this._onScroll);
      const i = this.$refs.slide;
      i.removeEventListener("touchend", this._touchEndEvent, !1), this._touchEndEvent = () => {
        this.autoPlay && this._play();
      }, i.addEventListener("touchend", this._touchEndEvent, !1), this.slide.on("beforeScrollStart", () => {
        this.autoPlay && clearTimeout(this._timer);
      });
    },
    _onScrollEnd() {
      const { pageX: e, pageY: t } = this.slide.getCurrentPage();
      let i = this.direction === Pe ? e : t;
      this.currentPageIndex !== i && (this.currentPageIndex = i, this.$emit(Pn, i)), this.$emit(Dn, i), this.autoPlay && this._play();
    },
    _onScroll(e) {
      this.$emit(Vn, e);
    },
    _initDots() {
      this.dots = new Array(this.children.length);
    },
    _play() {
      clearTimeout(this._timer), this._timer = setTimeout(() => {
        this.slide.next();
      }, this.interval);
    },
    _deactivated() {
      clearTimeout(this._timer), clearTimeout(this._resizeTimer), window.removeEventListener("resize", this._resizeHandler);
      const e = this.$refs.slide;
      e && e.removeEventListener("touchend", this._touchEndEvent, !1);
    },
    _resizeHandler() {
      this.slide && (clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(() => {
        this.slide.isInTransition ? this._onScrollEnd() : this.autoPlay && this._play(), this._refresh();
      }, 60));
    },
    _goToPage(e, t) {
      this.direction === Pe ? this.slide && this.slide.goToPage(e, 0, t) : this.direction === ui && this.slide && this.slide.goToPage(0, e, t);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.refresh();
    }), window.addEventListener("resize", this._resizeHandler);
  },
  activated() {
    this.autoPlay && this._play(), window.addEventListener("resize", this._resizeHandler);
  },
  deactivated() {
    this._deactivated();
  },
  destroyed() {
    this._deactivated(), this._destroy(), this.slide = null, this._dataWatchers.forEach((e) => {
      e();
    }), this._dataWatchers = null;
  },
  components: {
    CubeSlideItem: lt
  }
}, Bu = {
  class: "cube-slide",
  ref: "slide"
}, Fu = {
  class: "cube-slide-group",
  ref: "slideGroup"
}, Wu = {
  key: 0,
  class: "cube-slide-dots"
};
function ju(e, t, i, n, o, s) {
  const r = T("cube-slide-item");
  return c(), d("div", Bu, [
    u("div", Fu, [
      p(e.$slots, "default", {}, () => [
        (c(!0), d(S, null, $(i.data, (l, a) => (c(), x(r, {
          key: a,
          onClick: (h) => s.clickItem(l, a),
          item: l
        }, null, 8, ["onClick", "item"]))), 128))
      ])
    ], 512),
    i.showDots ? (c(), d("div", Wu, [
      p(e.$slots, "dots", {
        current: o.currentPageIndex,
        dots: o.dots
      }, () => [
        (c(!0), d(S, null, $(o.dots, (l, a) => (c(), d("span", {
          class: y({ active: o.currentPageIndex === a }),
          key: a
        }, null, 2))), 128))
      ])
    ])) : I("", !0)
  ], 512);
}
const Ee = /* @__PURE__ */ b(zu, [["render", ju]]);
const Gu = "cube-image-preview", On = "change", Hn = "hide", Ku = {
  name: Gu,
  mixins: [j, q],
  emits: [On, Hn],
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    imgs: {
      type: Array,
      default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: !0
    },
    speed: {
      type: Number,
      default: 400
    },
    preventDefault: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      currentPageIndex: this.initialIndex,
      options: {
        observeDOM: !1,
        bounce: {
          left: !0,
          right: !0
        },
        useTransition: qi ? !1 : rt,
        probeType: 3,
        preventDefault: this.preventDefault
      },
      scrollOptions: {
        useTransition: rt,
        HWCompositing: qi,
        observeDOM: !1,
        zoom: !0,
        bindToWrapper: !0,
        freeScroll: !0,
        scrollX: !0,
        scrollY: !0,
        probeType: 3,
        bounce: !1,
        click: !1,
        dblclick: !0,
        bounceTime: 300,
        preventDefault: this.preventDefault
      }
    };
  },
  watch: {
    initialIndex(e) {
      this.setPageIndex(e);
    }
  },
  methods: {
    show() {
      this.isVisible = !0, this.$nextTick(() => {
        this._listenSlide(), this._listenScroll();
      });
    },
    _listenSlide() {
      this.$nextTick(() => {
        const e = this.$refs.slide.slide;
        e.on("scrollStart", this.slideScrollStartHandler), e.on("scrollEnd", this.slideScrollEndHandler);
      });
    },
    _listenScroll() {
      this.$nextTick(() => {
        this.$refs.items.forEach((e) => {
          const t = e.scroll;
          t.on("zoomStart", this.zoomStartHandler.bind(this, t)), t.on("beforeScrollStart", this.beforeScrollHandler), t.on("scroll", this.checkBoundary.bind(this, t)), t.on("scrollEnd", this.scrollEndHandler.bind(this, t));
        });
      });
    },
    hide() {
      this.isVisible = !1, this.$emit(Hn);
    },
    prev() {
      const e = this.$refs.slide.slide;
      e && e.prev();
    },
    next() {
      const e = this.$refs.slide.slide;
      e && e.next();
    },
    goTo(e) {
      const t = this.$refs.slide.slide;
      t && t.goToPage(e, 0);
    },
    imgLoad(e) {
      this.isVisible && this.$refs.items && this.$refs.items[e].scroll.refresh();
    },
    setPageIndex(e) {
      if (this.currentPageIndex >= 0 && this.currentPageIndex !== e) {
        const t = this.$refs.items[this.currentPageIndex];
        if (t) {
          const i = t.scroll;
          i.scale !== 1 && (i.scale = 1, i.lastcale = 1, i.refresh());
        }
      }
      this.currentPageIndex = e;
    },
    slideChangeHandler(e) {
      this.setPageIndex(e), this.slideScrollEndHandler(), this.$emit(On, e);
    },
    slideScrollStartHandler() {
      const e = this.$refs.slide.slide;
      this._scrolling && !this._hasEnableSlide ? e.disable() : e.enable();
    },
    slideScrollEndHandler() {
      this.$refs.items.forEach((e) => {
        this.scrollEndHandler(e.scroll);
      });
    },
    _scroll(e) {
      const t = this.$refs.slide.slide;
      t.disable(), t.refresh(), e.enable();
    },
    _slide(e) {
      this.$refs.slide.slide.enable(), e.disable();
    },
    beforeScrollHandler() {
      clearTimeout(this.enableSlideTid);
    },
    scrollEndHandler(e) {
      clearTimeout(this.enableSlideTid), this.dblZooming && (this.dblZooming = !1, clearTimeout(this.clickTid)), this._hasEnableSlide = !1, this._scrolling = !1, e.enable(), this.enableSlideTid = setTimeout(() => {
        this.$refs.slide.slide.enable();
      });
    },
    checkBoundary(e, t) {
      e.distX && Math.abs(e.distX) > Math.abs(e.distY) ? (this._scrolling = !0, (e.distX > 0 ? t.x >= e.minScrollX : t.x <= e.maxScrollX) ? (this._hasEnableSlide = !0, this._slide(e)) : this._hasEnableSlide || this._scroll(e)) : e.distY && (this._scrolling = !0, this._scroll(e));
    },
    zoomStartHandler(e) {
      this._scroll(e);
    },
    dblclickHandler(e, t) {
      const i = this.$refs.items[e].scroll;
      this.dblZooming = !0, this.zoomTo(i, i.scale > 1 ? 1 : 2, t), i.disable();
    },
    itemClickHandler() {
      clearTimeout(this.clickTid), this.clickTid = setTimeout(() => {
        !this.dblZooming && this.hide();
      }, this.scrollOptions.bounceTime);
    },
    zoomTo(e, t, i) {
      e.zoomTo(t, i.pageX, i.pageY);
    }
  },
  components: {
    CubePopup: Q,
    CubeSlide: Ee,
    CubeSlideItem: lt,
    CubeScroll: re
  }
}, qu = { class: "cube-image-preview-container" }, Zu = { class: "cube-image-preview-header" }, Ju = ["src", "onLoad"], Qu = /* @__PURE__ */ u("i", null, null, -1), ed = { class: "cube-image-preview-footer" }, td = { class: "cube-image-preview-counter" };
function id(e, t, i, n, o, s) {
  const r = T("cube-scroll"), l = T("cube-slide-item"), a = T("cube-slide"), h = T("cube-popup");
  return c(), x(te, { name: "cube-image-preview-fade" }, {
    default: w(() => [
      E(C(h, {
        type: "image-preview",
        "z-index": e.zIndex,
        center: !1
      }, {
        default: w(() => [
          u("div", qu, [
            u("div", Zu, [
              p(e.$slots, "header", { current: o.currentPageIndex })
            ]),
            e.isVisible ? (c(), x(a, {
              key: 0,
              ref: "slide",
              data: i.imgs,
              "initial-index": o.currentPageIndex,
              "auto-play": !1,
              loop: i.loop,
              speed: i.speed,
              options: o.options,
              onChange: s.slideChangeHandler
            }, {
              dots: w(() => [
                Qu
              ]),
              default: w(() => [
                (c(!0), d(S, null, $(i.imgs, (f, m) => (c(), x(l, { key: m }, {
                  default: w(() => [
                    u("div", {
                      class: "cube-image-preview-item",
                      onClick: t[0] || (t[0] = (...v) => s.itemClickHandler && s.itemClickHandler(...v))
                    }, [
                      C(r, {
                        ref_for: !0,
                        ref: "items",
                        options: o.scrollOptions,
                        onDblclick: (v) => s.dblclickHandler(m, v)
                      }, {
                        default: w(() => [
                          u("img", {
                            class: "cube-image-preview-img",
                            src: f,
                            onLoad: (v) => s.imgLoad(m)
                          }, null, 40, Ju)
                        ]),
                        _: 2
                      }, 1032, ["options", "onDblclick"])
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["data", "initial-index", "loop", "speed", "options", "onChange"])) : I("", !0),
            u("div", ed, [
              p(e.$slots, "footer", { current: o.currentPageIndex }, () => [
                u("span", td, k(o.currentPageIndex + 1) + "/" + k(i.imgs.length), 1)
              ])
            ])
          ])
        ]),
        _: 3
      }, 8, ["z-index"]), [
        [N, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const Je = /* @__PURE__ */ b(Ku, [["render", id]]);
function sd(e, t) {
  Z(e, t, ["change", "hide"], !0);
}
Je.install = function(e) {
  e.component(Je.name, Je), sd(e, Je);
};
re.install = function(e) {
  e.component(re.name, re);
};
Ee.install = function(e) {
  e.component(Ee.name, Ee), e.component(lt.name, lt);
};
Ee.Item = lt;
const nd = "cube-index-list-item", di = "cube-index-list-item_active", An = "select", od = {
  name: nd,
  emits: [An],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    itemClass() {
      return this.item.active ? di : "";
    }
  },
  methods: {
    addActiveCls(e) {
      co(e.currentTarget, di);
    },
    removeActiveCls(e) {
      ho(e.currentTarget, di);
    },
    selectItem() {
      this.$emit(An, this.item);
    }
  }
}, rd = { class: "cube-index-list-item-def border-bottom-1px" };
function ld(e, t, i, n, o, s) {
  return c(), d("li", {
    class: y(["cube-index-list-item", s.itemClass]),
    onTouchstart: t[0] || (t[0] = (...r) => s.addActiveCls && s.addActiveCls(...r)),
    onTouchend: t[1] || (t[1] = (...r) => s.removeActiveCls && s.removeActiveCls(...r)),
    onClick: t[2] || (t[2] = (r) => s.selectItem())
  }, [
    p(e.$slots, "default", {}, () => [
      u("div", rd, k(i.item.name), 1)
    ])
  ], 34);
}
const Xt = /* @__PURE__ */ b(od, [["render", ld]]), ad = "cube-index-list-group", Ln = "select", cd = {
  name: ad,
  emits: [Ln],
  props: {
    group: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    selectItem(e) {
      this.$emit(Ln, e);
    }
  },
  components: {
    CubeIndexListItem: Xt
  }
}, hd = { class: "cube-index-list-group" }, ud = ["innerHTML"];
function dd(e, t, i, n, o, s) {
  const r = T("cube-index-list-item");
  return c(), d("li", hd, [
    u("h2", {
      class: "cube-index-list-anchor",
      innerHTML: i.group.name
    }, null, 8, ud),
    u("ul", null, [
      p(e.$slots, "default", {}, () => [
        (c(!0), d(S, null, $(i.group.items, (l, a) => (c(), x(r, {
          key: a,
          item: l,
          onSelect: s.selectItem
        }, null, 8, ["item", "onSelect"]))), 128))
      ])
    ])
  ]);
}
const Ut = /* @__PURE__ */ b(cd, [["render", dd]]);
const fd = "cube-index-list", Yn = "select", Rn = "title-click", Xn = "pulling-up", Un = "pulling-down", pd = jt && window.innerHeight <= 480 ? 17 : 18, md = K("transform"), _d = {
  name: fd,
  mixins: [dt, Li],
  emits: [Yn, Rn, Xn, Un],
  props: {
    title: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    speed: {
      type: Number,
      default: 0
    },
    navbar: {
      type: Boolean,
      default: !0
    },
    pullDownRefresh: {
      type: [Object, Boolean],
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    },
    pullUpLoad: {
      type: [Object, Boolean],
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    }
  },
  data() {
    return {
      scrollEvents: ["scroll"],
      currentIndex: 0,
      scrollY: -1,
      diff: -1,
      titleHeight: 0
    };
  },
  computed: {
    hasTitle() {
      return this.title || this.$slots.title;
    },
    fixedTitle() {
      return this.hasTitle && !this.titleHeight && this._caculateTitleHeight(), this.scrollY <= -this.titleHeight && this.data[this.currentIndex] ? this.data[this.currentIndex].name : "";
    },
    shortcutList() {
      return this.data.map((e) => e ? e.shortcut || e.name.substr(0, 1) : "");
    },
    scrollOptions() {
      return Object.assign({}, {
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      }, this.options);
    }
  },
  created() {
    this.groupList = [], this.listHeight = [], this.touch = {}, this.subTitleHeight = 0;
  },
  mounted() {
    this.$nextTick(() => {
      this.refresh();
    });
  },
  methods: {
    /* TODO: remove refresh next minor version */
    refresh() {
      this._caculateTitleHeight(), this._calculateHeight(), this.$refs.scroll && this.$refs.scroll.refresh();
    },
    selectItem(e) {
      this.$emit(Yn, e);
    },
    scroll(e) {
      this.scrollY = e.y;
    },
    titleClick() {
      this.$emit(Rn, this.title);
    },
    forceUpdate(e = !1, t = !1) {
      this.$refs.scroll.forceUpdate(e, t), e && this.$nextTick(() => {
        this._calculateHeight();
      });
    },
    onShortcutTouchStart(e) {
      const t = Lr(e, "cube-index-list-nav-item");
      if (!t)
        return;
      let i = Ar(t, "index"), n = e.touches[0];
      this.touch.y1 = n.pageY, this.touch.anchorIndex = i, this._scrollTo(i);
    },
    onShortcutTouchMove(e) {
      let t = e.touches[0];
      this.touch.y2 = t.pageY;
      let i = (this.touch.y2 - this.touch.y1) / pd | 0, n = parseInt(this.touch.anchorIndex) + i;
      this._scrollTo(n);
    },
    onPullingUp() {
      this.$emit(Xn);
    },
    onPullingDown() {
      this.$emit(Un);
    },
    _caculateTitleHeight() {
      this.titleHeight = this.$refs.title ? de(this.$refs.title).height : 0;
    },
    _calculateHeight() {
      this.groupList = this.$el.getElementsByClassName("cube-index-list-group");
      const e = this.$el.getElementsByClassName("cube-index-list-anchor")[0];
      if (this.subTitleHeight = e ? de(e).height : 0, this.listHeight = [], !this.groupList)
        return;
      let t = this.titleHeight;
      this.listHeight.push(t);
      for (let i = 0; i < this.groupList.length; i++) {
        let n = this.groupList[i];
        t += n.clientHeight, this.listHeight.push(t);
      }
    },
    _scrollTo(e) {
      e < 0 ? e = 0 : e > this.listHeight.length - 2 && (e = this.listHeight.length - 2), this.$refs.scroll.scrollToElement(this.groupList[e], this.speed), this.scrollY = this.$refs.scroll.scroll.y;
    }
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this._calculateHeight();
      });
    },
    title(e) {
      this.$nextTick(() => {
        this.refresh();
      });
    },
    diff(e) {
      let t = e > 0 && e < this.subTitleHeight ? e - this.subTitleHeight : 0;
      this.fixedTop !== t && (this.fixedTop = t, this.$refs.fixed.style[md] = `translate3d(0,${t}px,0)`);
    },
    scrollY(e) {
      const t = this.listHeight;
      if (e > -this.titleHeight) {
        this.currentIndex = 0;
        return;
      }
      for (let i = 0; i < t.length - 1; i++) {
        let n = t[i], o = t[i + 1];
        if (-e >= n && -e < o) {
          this.currentIndex = i, this.diff = o + e;
          return;
        }
      }
      this.currentIndex = t.length - 2;
    }
  },
  components: {
    CubeScroll: re,
    CubeIndexListGroup: Ut
  }
}, gd = { class: "cube-index-list" }, bd = {
  class: "cube-index-list-content",
  ref: "content"
}, vd = { class: "cube-index-list-nav-list" }, yd = ["data-index"], Td = ["innerHTML"];
function xd(e, t, i, n, o, s) {
  const r = T("cube-index-list-group"), l = T("cube-scroll");
  return c(), d("div", gd, [
    C(l, {
      ref: "scroll",
      "scroll-events": o.scrollEvents,
      options: s.scrollOptions,
      data: i.data,
      onScroll: s.scroll,
      onPullingDown: s.onPullingDown,
      onPullingUp: s.onPullingUp
    }, so({
      default: w(() => [
        u("div", bd, [
          s.hasTitle ? (c(), d("h1", {
            key: 0,
            class: "cube-index-list-title",
            ref: "title",
            onClick: t[0] || (t[0] = (...a) => s.titleClick && s.titleClick(...a))
          }, [
            p(e.$slots, "title", {}, () => [
              $e(k(i.title), 1)
            ])
          ], 512)) : I("", !0),
          u("ul", null, [
            p(e.$slots, "default", {}, () => [
              (c(!0), d(S, null, $(i.data, (a, h) => (c(), x(r, {
                key: h,
                group: a,
                onSelect: s.selectItem
              }, null, 8, ["group", "onSelect"]))), 128))
            ])
          ])
        ], 512)
      ]),
      _: 2
    }, [
      e.$slots.pullup ? {
        name: "pullup",
        fn: w((a) => [
          p(e.$slots, "pullup", {
            pullUpLoad: a.pullUpLoad,
            isPullUpLoad: a.isPullUpLoad
          })
        ]),
        key: "0"
      } : void 0,
      e.$slots.pulldown ? {
        name: "pulldown",
        fn: w((a) => [
          p(e.$slots, "pulldown", {
            pullDownRefresh: a.pullDownRefresh,
            pullDownStyle: a.pullDownStyle,
            beforePullDown: a.beforePullDown,
            isPullingDown: a.isPullingDown,
            bubbleY: a.bubbleY
          })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["scroll-events", "options", "data", "onScroll", "onPullingDown", "onPullingUp"]),
    i.navbar ? (c(), d("div", {
      key: 0,
      class: "cube-index-list-nav",
      onTouchstart: t[1] || (t[1] = (...a) => s.onShortcutTouchStart && s.onShortcutTouchStart(...a)),
      onTouchmove: t[2] || (t[2] = R((...a) => s.onShortcutTouchMove && s.onShortcutTouchMove(...a), ["stop", "prevent"]))
    }, [
      u("ul", vd, [
        (c(!0), d(S, null, $(s.shortcutList, (a, h) => (c(), d("li", {
          key: h,
          "data-index": h,
          class: y(["cube-index-list-nav-item", { active: o.currentIndex === h }])
        }, [
          p(e.$slots, "nav-item", { item: a }, () => [
            $e(k(a), 1)
          ])
        ], 10, yd))), 128))
      ])
    ], 32)) : I("", !0),
    E(u("div", {
      ref: "fixed",
      innerHTML: s.fixedTitle,
      class: "cube-index-list-fixed cube-index-list-anchor"
    }, null, 8, Td), [
      [N, s.fixedTitle]
    ])
  ]);
}
const Fe = /* @__PURE__ */ b(_d, [["render", xd]]);
Fe.install = function(e) {
  e.component(Fe.name, Fe), e.component(Ut.name, Ut), e.component(Xt.name, Xt);
};
Fe.Group = Ut;
Fe.Item = Xt;
const zn = "cubic-bezier(0.165, 0.84, 0.44, 1)", wd = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const Ed = "cube-swipe-item", Sd = "item-click", kd = "btn-click", Bn = "scroll", $d = "active", Cd = 1, Fn = -1, fi = 0, pi = 1, _t = 600, mi = 300, Wn = 15, Md = 5, gt = K("transform"), jn = K("transitionProperty"), _i = K("transitionDuration"), Gn = K("transitionTimingFunction"), Nd = {
  name: Ed,
  inject: ["swipe"],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    btns: {
      type: Array,
      default() {
        return [];
      }
    },
    index: {
      type: Number,
      index: -1
    },
    autoShrink: {
      type: Boolean,
      default: !1
    }
  },
  watch: {
    btns() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  },
  created() {
    this.x = 0, this.state = fi, this.swipe.addItem(this);
  },
  mounted() {
    this.scrollerStyle = this.$refs.swipeItem.style, this.$nextTick(() => {
      this.refresh();
    });
  },
  methods: {
    _initCachedBtns() {
      this.cachedBtns = [];
      const e = this.$refs.btns.length;
      for (let t = 0; t < e; t++)
        this.cachedBtns.push({
          width: de(this.$refs.btns[t]).width
        });
    },
    _handleBtns(e) {
      if (this.btns.length === 0)
        return;
      const t = this.$refs.btns.length;
      let i = 0, n = -this.maxScrollX;
      for (let o = 0; o < t; o++) {
        const s = this.$refs.btns[o];
        let r = (n - i) / n, l, a = r * e - e;
        e < this.maxScrollX ? l = this.cachedBtns[o].width + r * (this.maxScrollX - e) : l = this.cachedBtns[o].width, i += this.cachedBtns[o].width, s.style.width = `${l}px`, s.style[gt] = `translate(${a}px)`, s.style[_i] = "0ms";
      }
    },
    _isInBtns(e) {
      let t = e, i = !1;
      for (; t && t.className.indexOf("cube-swipe-item") < 0; ) {
        if (t.className.indexOf("cube-swipe-btns") >= 0) {
          i = !0;
          break;
        }
        t = t.parentNode;
      }
      return i;
    },
    _calculateBtnsWidth() {
      let e = 0;
      const t = this.cachedBtns.length;
      for (let i = 0; i < t; i++)
        e += this.cachedBtns[i].width;
      this.maxScrollX = -e;
    },
    _translate(e, t) {
      let i = t ? " translateZ(0)" : "";
      this.scrollerStyle[gt] = `translate(${e}px,0)${i}`, this.x = e;
    },
    _transitionProperty(e = "transform") {
      this.scrollerStyle[jn] = e;
    },
    _transitionTimingFunction(e) {
      this.scrollerStyle[Gn] = e;
    },
    _transitionTime(e = 0) {
      this.scrollerStyle[_i] = `${e}ms`;
    },
    _getComputedPositionX() {
      let e = window.getComputedStyle(this.$refs.swipeItem, null);
      return e = e[gt].split(")")[0].split(", "), +(e[12] || e[4]);
    },
    _translateBtns(e, t, i) {
      if (this.btns.length === 0)
        return;
      const n = this.$refs.btns.length;
      let o = 0, s = 0;
      for (let r = 0; r < n; r++) {
        const l = this.$refs.btns[r];
        this.state === pi ? s = o : s = 0, o += this.cachedBtns[r].width, l.style[gt] = `translate(${s}px,0) translateZ(0)`, l.style[jn] = "all", l.style[Gn] = t, l.style[_i] = `${e}ms`, i && (l.style.width = `${this.cachedBtns[r].width}px`);
      }
    },
    refresh() {
      this.btns.length > 0 && (this._initCachedBtns(), this._calculateBtnsWidth()), this.endTime = 0;
    },
    shrink() {
      this.stop(), this.state = fi, this.$nextTick(() => {
        this.scrollTo(0, _t, zn), this._translateBtns(_t, zn);
      });
    },
    grow() {
      this.state = pi;
      const e = this.x < this.maxScrollX;
      let t = wd;
      this.scrollTo(this.maxScrollX, _t, t), this._translateBtns(_t, t, e);
    },
    scrollTo(e, t, i) {
      this._transitionProperty(), this._transitionTimingFunction(i), this._transitionTime(t), this._translate(e, !0), t && (this.isInTransition = !0);
    },
    genBtnStyl(e) {
      return `background: ${e.color}`;
    },
    clickItem() {
      this.swipe.onItemClick(this.item, this.index), this.$emit(Sd, this.item, this.index);
    },
    clickBtn(e) {
      this.swipe.onBtnClick(e, this.index), this.$emit(kd, e, this.index), this.autoShrink && this.shrink();
    },
    stop() {
      if (this.isInTransition) {
        this.isInTransition = !1;
        let e = this.state === fi ? 0 : this._getComputedPositionX();
        this._translate(e), this.$emit(Bn, this.x), this._handleBtns();
      }
    },
    onTouchStart(e) {
      this.swipe.onItemActive(this.index), this.$emit($d, this.index), this.stop(), this.moved = !1, this.movingDirectionX = 0;
      const t = e.touches[0];
      this.pointX = t.pageX, this.pointY = t.pageY, this.distX = 0, this.distY = 0, this.startX = this.x, this._transitionTime(), this.startTime = Jt(), this.state === pi && !this._isInBtns(e.target) && (this.shrinkTimer = setTimeout(() => {
        this.shrink();
      }, 300));
    },
    onTouchMove(e) {
      if (this.moved && (clearTimeout(this.shrinkTimer), e.stopPropagation()), this.isInTransition)
        return;
      e.preventDefault();
      const t = e.touches[0];
      let i = t.pageX - this.pointX, n = t.pageY - this.pointY;
      this.pointX = t.pageX, this.pointY = t.pageY, this.distX += i, this.distY += n;
      let o = Math.abs(this.distX), s = Math.abs(this.distY);
      if (o + Md <= s)
        return;
      let r = Jt();
      if (r - this.endTime > mi && o < Wn)
        return;
      this.movingDirectionX = i > 0 ? Fn : i < 0 ? Cd : 0;
      let l = this.x + i;
      l > 0 && (l = 0), l < this.maxScrollX && (l = this.x + i / 3), this.moved || (this.moved = !0), this._translate(l, !0), r - this.startTime > mi && (this.startTime = r, this.startX = this.x), this.$emit(Bn, this.x), this._handleBtns();
    },
    onTouchEnd() {
      if (!this.moved)
        return;
      if (this.movingDirectionX === Fn) {
        this.shrink();
        return;
      }
      this.endTime = Jt();
      let e = this.endTime - this.startTime, t = Math.abs(this.x - this.startX);
      e < mi && t > Wn || this.x < this.maxScrollX / 2 ? this.grow() : this.shrink();
    },
    onTransitionEnd() {
      this.isInTransition = !1, this._transitionTime(), this._translate(this.x);
    }
  },
  beforeUnmount() {
    this.swipe.removeItem(this);
  }
}, Pd = { class: "cube-swipe-btns" }, Id = ["onClick"], Dd = { class: "text" };
function Vd(e, t, i, n, o, s) {
  return c(), d("div", {
    ref: "swipeItem",
    onTransitionend: t[1] || (t[1] = (...r) => s.onTransitionEnd && s.onTransitionEnd(...r)),
    onTouchstart: t[2] || (t[2] = (...r) => s.onTouchStart && s.onTouchStart(...r)),
    onTouchmove: t[3] || (t[3] = (...r) => s.onTouchMove && s.onTouchMove(...r)),
    onTouchend: t[4] || (t[4] = (...r) => s.onTouchEnd && s.onTouchEnd(...r)),
    class: "cube-swipe-item"
  }, [
    p(e.$slots, "default", {}, () => [
      u("div", {
        onClick: t[0] || (t[0] = (...r) => s.clickItem && s.clickItem(...r)),
        class: "cube-swipe-item-inner border-bottom-1px"
      }, [
        u("span", null, k(i.item.text), 1)
      ])
    ]),
    u("ul", Pd, [
      (c(!0), d(S, null, $(i.btns, (r) => (c(), d("li", {
        ref_for: !0,
        ref: "btns",
        class: "cube-swipe-btn",
        style: F(s.genBtnStyl(r)),
        onClick: R((l) => s.clickBtn(r), ["prevent"])
      }, [
        u("span", Dd, k(r.text), 1)
      ], 12, Id))), 256))
    ])
  ], 544);
}
const zt = /* @__PURE__ */ b(Nd, [["render", Vd]]);
const Od = "cube-swipe", Kn = "item-click", qn = "btn-click", Hd = {
  name: Od,
  provide() {
    return {
      swipe: this
    };
  },
  emits: [Kn, qn],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    autoShrink: {
      type: Boolean,
      default: !1
    }
  },
  created() {
    this.activeIndex = -1, this.items = [];
  },
  methods: {
    addItem(e) {
      this.items.push(e);
    },
    removeItem(e) {
      const t = this.items.indexOf(e);
      this.items.splice(t, 1), t <= this.activeIndex && (this.activeIndex -= 1);
    },
    onItemClick(e, t) {
      this.$emit(Kn, e, t);
    },
    onBtnClick(e, t) {
      const i = this.data[t];
      this.$emit(qn, e, t, i);
    },
    onItemActive(e) {
      e !== this.activeIndex && (this.activeIndex !== -1 && this.items[this.activeIndex].shrink(), this.activeIndex = e);
    }
  },
  components: {
    CubeSwipeItem: zt
  }
}, Ad = { class: "cube-swipe" };
function Ld(e, t, i, n, o, s) {
  const r = T("cube-swipe-item");
  return c(), d("div", Ad, [
    p(e.$slots, "default", {}, () => [
      C(Oo, {
        name: "cube-swipe",
        tag: "ul"
      }, {
        default: w(() => [
          (c(!0), d(S, null, $(i.data, (l, a) => (c(), d("li", {
            key: l.item.value
          }, [
            C(r, {
              btns: l.btns,
              item: l.item,
              index: a,
              "auto-shrink": i.autoShrink
            }, null, 8, ["btns", "item", "index", "auto-shrink"])
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const We = /* @__PURE__ */ b(Hd, [["render", Ld]]);
We.install = function(e) {
  e.component(We.name, We), e.component(zt.name, zt);
};
We.Item = zt;
const Yd = "cube-sticky", Zn = "change", Jn = "diff-change", Rd = K("transform"), Xd = {
  name: Yd,
  provide() {
    return {
      sticky: this
    };
  },
  emits: [Zn, Jn],
  props: {
    pos: {
      type: Number,
      required: !0
    },
    checkTop: {
      type: Boolean,
      default: !0
    },
    fixedShowAni: {
      type: String,
      default(e) {
        return e.checkTop ? "" : "cube-sticky-fixed-fade";
      }
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      diff: 0,
      currentDiff: 0,
      currentIndex: -1,
      currentKey: ""
    };
  },
  computed: {
    fixedShow() {
      return !!this.eles[this.currentIndex];
    }
  },
  watch: {
    diff(e) {
      e >= 0 && (e = 0), e = Math.ceil(e), this._fixedTop !== e && (this._fixedTop = e, this.$refs.fixedEle.style[Rd] = `translate3d(0, ${e}px, 0)`);
    },
    pos: "computeCurrentSticky",
    currentIndex(e, t) {
      const i = this.eles[t], n = this.eles[e], o = n && n.eleKey !== void 0 ? n.eleKey : e === -1 ? "" : e, s = this.$refs.fixedEle, r = this.$slots.fixed;
      this.$nextTick(() => {
        if (r)
          this.fixedEleHeight = s.offsetHeight;
        else {
          const a = s.firstElementChild;
          i && (i.$el.appendChild(a), i.refresh()), n ? (s.appendChild(n.$el.firstElementChild), this.fixedEleHeight = s.offsetHeight) : this.fixedEleHeight = 0;
        }
        const l = "cube-sticky-ele-on";
        i && ho(i.$el, l), n && co(n.$el, l);
      }), this.currentKey = o, this.$emit(Zn, o, e);
    },
    currentDiff(e) {
      const t = this.heights[this.currentIndex] || 0;
      this.$emit(Jn, e, t);
    }
  },
  created() {
    this.fixedEleHeight = 0, this.eles = [], this.positions = [], this.heights = [];
  },
  mounted() {
    this.refresh();
  },
  methods: {
    addEle(e) {
      this.eles.push(e);
    },
    removeEle(e) {
      const t = this.eles.indexOf(e);
      this.eles.splice(t, 1), this.positions.splice(t, 1);
    },
    refresh() {
      this.$nextTick(() => {
        this.eles.forEach((e) => {
          e.refresh();
        }), this._calculateHeight(), this.computeCurrentSticky(this.pos);
      });
    },
    computeCurrentSticky(e) {
      e += this.offset;
      const t = this.positions, i = this.heights, n = this.checkTop, o = t.length;
      for (let s = o - 1; s >= 0; s--) {
        const r = s === o - 1, l = r ? e : t[s + 1];
        let a, h;
        n ? (a = t[s], h = a + i[s]) : (a = t[s] + i[s], h = a);
        const f = Math.max(h, l);
        if (e >= a && e <= f) {
          this.currentIndex = s, this.currentDiff = e - a;
          const m = l - e;
          m >= 0 && !r ? this.diff = m - (this.fixedEleHeight || i[s]) : this.diff = 0;
          return;
        }
      }
      this.currentIndex = -1, this.currentDiff = 0;
    },
    _calculateHeight() {
      this.eles.forEach((t, i) => {
        const { top: n, height: o } = de(t.$el);
        this.positions[i] = n, this.heights[i] = o;
      }), this.fixedEleHeight = this.$refs.fixedEle.offsetHeight;
    }
  }
}, Ud = { class: "cube-sticky" }, zd = {
  ref: "fixedEle",
  class: "cube-sticky-fixed"
};
function Bd(e, t, i, n, o, s) {
  return c(), d("div", Ud, [
    p(e.$slots, "default"),
    C(te, { name: i.fixedShowAni }, {
      default: w(() => [
        E(u("div", zd, [
          p(e.$slots, "fixed", {
            current: o.currentKey,
            index: o.currentIndex
          })
        ], 512), [
          [N, s.fixedShow]
        ])
      ]),
      _: 3
    }, 8, ["name"])
  ]);
}
const Se = /* @__PURE__ */ b(Xd, [["render", Bd]]);
const Fd = "cube-sticky-ele", Wd = {
  name: Fd,
  inject: ["sticky"],
  props: {
    eleKey: {
      type: [Number, String]
    }
  },
  mounted() {
    this.sticky.addEle(this);
  },
  methods: {
    refresh() {
      const e = this.$el;
      e.firstElementChild && (e.style.height = "", e.style.height = `${e.offsetHeight}px`);
    }
  },
  beforeUnmount() {
    this.sticky.removeEle(this);
  }
}, jd = { class: "cube-sticky-ele" }, Gd = { class: "cube-sticky-content" };
function Kd(e, t, i, n, o, s) {
  return c(), d("div", jd, [
    u("div", Gd, [
      p(e.$slots, "default")
    ])
  ]);
}
const at = /* @__PURE__ */ b(Wd, [["render", Kd]]);
Se.install = function(e) {
  e.component(Se.name, Se), e.component(at.name, at);
};
Se.Ele = at;
const gi = "horizontal", qd = "vertical", Zd = "cube-scroll-nav-bar", Qn = "change", Jd = {
  name: Zd,
  inject: {
    scrollNav: {
      default: null
    }
  },
  mixins: [dt],
  emits: [Qn],
  props: {
    direction: {
      type: String,
      default: gi,
      validator(e) {
        return e === gi || e === qd;
      }
    },
    labels: {
      type: Array,
      default() {
        return [];
      }
    },
    txts: {
      type: Array,
      default(e) {
        return e._defaultTxts = !0, e.labels;
      }
    },
    current: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      active: this.current,
      usedTxts: this.txts
    };
  },
  watch: {
    labels(e) {
      this._defaultTxts && (this.usedTxts = e);
    },
    txts(e) {
      this.usedTxts = e;
    },
    current(e) {
      this.active = e;
    },
    active(e) {
      this.$emit(Qn, e), this._adjust();
    }
  },
  mounted() {
    this.scrollNav && this.scrollNav.setBar(this), this.active && this.$nextTick(() => {
      this._adjust();
    });
  },
  beforeUnmount() {
    this.scrollNav && this.scrollNav.setBar(null);
  },
  methods: {
    clickHandler(e) {
      e !== this.active && (this.active = e, this.scrollNav && this.scrollNav.barChange(e));
    },
    refresh() {
      this.$refs.scroll.refresh(), this._adjust();
    },
    _adjust() {
      this.$nextTick(() => {
        const e = this.direction === gi, t = e ? "clientWidth" : "clientHeight", i = this.active, n = this.$refs.scroll.$el[t], o = this.$refs.items, s = o[t], r = Math.min(0, n - s), l = n / 2, a = o.children;
        let h = 0;
        this.labels.every((m, v) => m === i ? (h += a[v][t] / 2, !1) : (h += a[v][t], !0));
        let f = l - h;
        f = Math.max(r, Math.min(0, f)), this.$refs.scroll.scrollTo(e ? f : 0, e ? 0 : f, 300);
      });
    }
  },
  components: {
    CubeScroll: re
  }
}, Qd = {
  class: "cube-scroll-nav-bar-items",
  ref: "items"
}, ef = ["onClick"], tf = ["innerHTML"];
function sf(e, t, i, n, o, s) {
  const r = T("cube-scroll");
  return c(), d("div", {
    class: y(["cube-scroll-nav-bar", "cube-scroll-nav-bar_" + i.direction])
  }, [
    C(r, {
      ref: "scroll",
      nestMode: "none",
      options: e.options,
      direction: i.direction
    }, {
      default: w(() => [
        u("div", Qd, [
          (c(!0), d(S, null, $(o.usedTxts, (l, a) => (c(), d("div", {
            class: y(["cube-scroll-nav-bar-item", { "cube-scroll-nav-bar-item_active": o.active === i.labels[a] }]),
            key: a,
            onClick: (h) => s.clickHandler(i.labels[a])
          }, [
            p(e.$slots, "default", {
              txt: l,
              index: a,
              active: o.active,
              label: i.labels[a]
            }, () => [
              u("span", { innerHTML: l }, null, 8, tf)
            ])
          ], 10, ef))), 128))
        ], 512)
      ]),
      _: 3
    }, 8, ["options", "direction"])
  ], 2);
}
const me = /* @__PURE__ */ b(Jd, [["render", sf]]);
const nf = "horizontal", of = "vertical", rf = "cube-scroll-nav", eo = "change", to = "sticky-change", lf = {
  name: rf,
  provide() {
    return {
      scrollNav: this
    };
  },
  mixins: [dt],
  emits: [eo, to],
  props: {
    data: {
      type: Array
    },
    speed: {
      type: Number,
      default: 300
    },
    side: {
      type: Boolean,
      default: !1
    },
    current: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      scrollEvents: ["scroll", "scroll-end"],
      scrollY: 0,
      panels: [],
      active: this.current,
      pageStickyOffset: 0
    };
  },
  computed: {
    labels() {
      return this.panels.map((e) => e.label);
    },
    barTxts() {
      return this.panels.map((e) => e.title);
    },
    barDirection() {
      return this.side ? of : nf;
    }
  },
  watch: {
    current(e) {
      this.stickyCurrent = e, this.active = e, this.jumpTo(e);
    },
    active(e) {
      this.$emit(eo, e);
    }
  },
  created() {
    this.navBar = null, this.stickyCurrent = this.current;
  },
  mounted() {
    this.$nextTick(() => {
      if (this.side) {
        const e = this.$refs.pageSticky.$refs.fixedEle;
        this.$refs.scroll.$el.appendChild(e);
      }
      this.current || (this.active = this.stickyCurrent = this.labels[0]), this.refresh(), this.jumpTo(this.current);
    });
  },
  methods: {
    scrollTo() {
      this.$refs.scroll && this.$refs.scroll.scrollTo.apply(this.$refs.scroll, arguments);
    },
    refresh() {
      this.navBar && this.navBar.refresh(), this.$refs.sticky.refresh(), this.$refs.pageSticky.refresh(), this.pageStickyOffset = this.side ? 0 : this.$refs.navBarEle.$el.offsetHeight, this.$refs.scroll.refresh();
    },
    setBar(e) {
      this.navBar = e;
    },
    barChange(e) {
      this.active = e, setTimeout(() => {
        this.jumpTo(e);
      });
    },
    jumpTo(e) {
      if (!e)
        return;
      const t = this.getPanel(e);
      if (t) {
        this._jumping = !0;
        const i = this.pageStickyOffset;
        this.$refs.scroll.scrollToElement(t.$el, this.speed, 0, this.side ? i : -i);
      }
    },
    getPanel(e) {
      let t = null;
      return this.panels.some((i) => {
        if (i.label === e)
          return t = i, !0;
      }), t;
    },
    pageStickyChangeHandler(e) {
      e === "" && (e = this.labels[0]), this.stickyCurrent = e, !this._jumping && (this.active = e);
    },
    stickyChangeHandler(e) {
      this.$nextTick(() => {
        this.navBar && this.navBar.refresh();
      }), this.$emit(to, e);
    },
    scrollHandler(e) {
      this.scrollY = -e.y, this._jumping || (this.active = this.stickyCurrent);
    },
    scrollEndHandler() {
      this._jumping = !1;
    },
    addPanel(e) {
      this.panels.push(e);
    },
    removePanel(e) {
      const t = this.panels.indexOf(e);
      this.panels.splice(t, 1);
    }
  },
  components: {
    CubeSticky: Se,
    CubeStickyEle: at,
    CubeScroll: re,
    CubeScrollNavBar: me
  }
}, af = { class: "cube-scroll-nav-main" }, cf = { class: "cube-scroll-nav-panels" }, hf = /* @__PURE__ */ u("div", null, null, -1);
function uf(e, t, i, n, o, s) {
  const r = T("cube-scroll-nav-bar"), l = T("cube-sticky-ele"), a = T("cube-sticky"), h = T("cube-scroll");
  return c(), d("div", {
    class: y(["cube-scroll-nav", { "cube-scroll-nav_side": i.side }])
  }, [
    C(a, {
      ref: "sticky",
      pos: o.scrollY,
      onChange: s.stickyChangeHandler
    }, {
      default: w(() => [
        C(h, {
          ref: "scroll",
          "scroll-events": o.scrollEvents,
          options: e.options,
          data: i.data,
          onScroll: s.scrollHandler,
          onScrollEnd: s.scrollEndHandler
        }, {
          default: w(() => [
            p(e.$slots, "prepend"),
            u("div", af, [
              C(l, {
                ref: "navBarEle",
                "ele-key": "cube-scroll-nav-bar"
              }, {
                default: w(() => [
                  p(e.$slots, "bar", {
                    txts: s.barTxts,
                    labels: s.labels,
                    current: o.active
                  }, () => [
                    C(r, {
                      direction: s.barDirection,
                      txts: s.barTxts,
                      labels: s.labels,
                      current: o.active
                    }, null, 8, ["direction", "txts", "labels", "current"])
                  ])
                ]),
                _: 3
              }, 512),
              C(a, {
                ref: "pageSticky",
                offset: o.pageStickyOffset,
                pos: o.scrollY,
                onChange: s.pageStickyChangeHandler
              }, so({
                default: w(() => [
                  u("div", cf, [
                    p(e.$slots, "default")
                  ])
                ]),
                _: 2
              }, [
                i.side ? void 0 : {
                  name: "fixed",
                  fn: w(() => [
                    hf
                  ]),
                  key: "0"
                }
              ]), 1032, ["offset", "pos", "onChange"])
            ])
          ]),
          _: 3
        }, 8, ["scroll-events", "options", "data", "onScroll", "onScrollEnd"])
      ]),
      _: 3
    }, 8, ["pos", "onChange"])
  ], 2);
}
const ke = /* @__PURE__ */ b(lf, [["render", uf]]), df = "cube-scroll-nav-panel", ff = {
  name: df,
  inject: ["scrollNav"],
  props: {
    label: {
      type: [String, Number],
      required: !0
    },
    title: {
      type: [String, Number],
      default(e) {
        return e.label;
      }
    }
  },
  mounted() {
    this.scrollNav.addPanel(this);
  },
  beforeUnmount() {
    this.scrollNav.removePanel(this);
  },
  components: {
    CubeStickyEle: at
  }
}, pf = { class: "cube-scroll-nav-panel" }, mf = ["innerHTML"];
function _f(e, t, i, n, o, s) {
  const r = T("cube-sticky-ele");
  return c(), d("div", pf, [
    C(r, { "ele-key": i.label }, {
      default: w(() => [
        u("h2", {
          class: "cube-scroll-nav-panel-title",
          innerHTML: i.title
        }, null, 8, mf)
      ]),
      _: 1
    }, 8, ["ele-key"]),
    p(e.$slots, "default")
  ]);
}
const Pi = /* @__PURE__ */ b(ff, [["render", _f]]);
ke.install = function(e) {
  e.component(ke.name, ke), e.component(Pi.name, Pi), e.component(me.name, me);
};
ke.Panel = Pi;
ke.Bar = me;
me.install = function(e) {
  e.component(me.name, me);
};
const gf = "cube-recycle-list", bi = "scroll", vi = "resize", bf = {
  name: gf,
  emits: [bi, vi],
  data() {
    return {
      items: [],
      heights: 0,
      startIndex: 0,
      loadings: [],
      noMore: !1,
      preload: !1
    };
  },
  props: {
    infinite: {
      type: Boolean,
      default: !1
    },
    size: {
      type: Number,
      default: 20
    },
    offset: {
      type: Number,
      default: 100
    },
    onFetch: {
      type: Function,
      required: !0
    }
  },
  computed: {
    visibleItems() {
      return this.items.slice(Math.max(0, this.startIndex - this.size), Math.min(this.items.length, this.startIndex + this.size));
    },
    tombHeight() {
      return this.infinite ? this.$refs.tomb && this.$refs.tomb.offsetHeight : 0;
    },
    loading() {
      return this.loadings.length;
    }
  },
  created() {
    this.list = [], this.promiseStack = [];
  },
  mounted() {
    this.checkPromiseCompatibility(), this.$el.addEventListener(bi, this._onScroll), window.addEventListener(vi, this._onResize), this.load();
  },
  beforeUnmount() {
    this.$el.removeEventListener(bi, this._onScroll), window.removeEventListener(vi, this._onResize);
  },
  methods: {
    checkPromiseCompatibility() {
      ht(window.Promise);
    },
    load() {
      if (this.infinite) {
        const e = this.items, t = e.length;
        e.length += this.size;
        const i = e.length;
        this.loadItems(t, i), this.getItems();
      } else
        this.loading || this.getItems();
    },
    getItems() {
      const e = this.promiseStack.length, t = this.onFetch();
      this.loadings.push("pending"), this.promiseStack.push(t), this.preload = !0, t.then((i) => {
        this.loadings.pop(), i ? (this.setList(e, i), this.loadItemsByIndex(e), i.length < this.size && this.stopScroll(e)) : this.stopScroll(e), setTimeout(() => {
          this.preload = !1;
        }, 0);
      });
    },
    removeUnusedTombs(e, t) {
      let i, n = this.size, o = t * n, s = (t + 1) * n;
      for (i = o; i < s && !(e[i] && e[i].isTombstone); i++)
        ;
      this.items = e.slice(0, i);
    },
    stopScroll(e) {
      this.noMore = !0, this.removeUnusedTombs(this.items.slice(0), e), this.updateItemTop(), this.updateStartIndex();
    },
    setList(e, t) {
      const i = this.list, n = e * this.size;
      for (let o = 0; o < t.length; o++)
        i[n + o] = t[o];
    },
    loadItemsByIndex(e) {
      const t = this.size, i = e * t, n = (e + 1) * t;
      this.loadItems(i, n);
    },
    loadItems(e, t) {
      const i = this.items;
      let n = [], o;
      for (let s = e; s < t; s++)
        o = i[s], !(o && o.loaded) && (this.setItem(s, this.list[s]), n.push(this.$nextTick().then(() => {
          this.updateItemHeight(s);
        })));
      window.Promise.all(n).then(() => {
        this.updateItemTop(), this.updateStartIndex();
      });
    },
    setItem(e, t) {
      this.items[e] = {
        data: t || {},
        height: 0,
        top: -1e3,
        isTombstone: !t,
        loaded: t ? 1 : 0
      };
    },
    updateItemHeight(e) {
      let t = this.items[e], i = this.$refs["preloads" + e];
      i && i[0] ? t.height = i[0].offsetHeight : t && (t.height = this.tombHeight);
    },
    updateItemTop() {
      let e = 0;
      const t = this.items;
      let i, n;
      for (let o = 0; o < t.length; o++)
        i = t[o - 1], n = t[o], t[o] ? (n.top = i ? i.top + i.height : 0, e += n.height) : e += 0;
      this.heights = e;
    },
    updateStartIndex() {
      let e = this.$el.scrollTop, t;
      const i = this.items;
      for (let n = 0; n < i.length; n++)
        if (t = i[n], !t || t.top > e) {
          this.startIndex = Math.max(0, n - 1);
          break;
        }
    },
    reset() {
      [
        {
          key: "items",
          value: []
        },
        {
          key: "heights",
          value: 0
        },
        {
          key: "startIndex",
          value: 0
        },
        {
          key: "loadings",
          value: []
        },
        {
          key: "noMore",
          value: !1
        },
        {
          key: "list",
          value: []
        },
        {
          key: "promiseStack",
          value: []
        }
      ].forEach(({ key: t, value: i }) => {
        this[t] = i;
      }), this.$el.scrollTop = 0, this.load();
    },
    _onScroll() {
      !this.noMore && this.$el.scrollTop + this.$el.offsetHeight > this.heights - this.offset && this.load(), this.updateStartIndex();
    },
    _onResize() {
      const e = this.items;
      e.forEach((t) => {
        t.loaded = !1;
      }), this.loadItems(0, e.length);
    }
  },
  components: {
    CubeLoading: ee
  }
}, vf = { class: "cube-recycle-list" }, yf = { class: "cube-recycle-list-main" }, Tf = { class: "cube-recycle-list-pool" }, xf = {
  ref: "tomb",
  class: "cube-recycle-list-item cube-recycle-list-invisible"
}, wf = { class: "cube-recycle-list-loading-content" }, Ef = { class: "cube-recycle-list-noMore" }, Sf = /* @__PURE__ */ u("div", { class: "cube-recycle-list-fake" }, null, -1);
function kf(e, t, i, n, o, s) {
  const r = T("cube-loading");
  return c(), d("div", vf, [
    u("div", yf, [
      u("div", {
        class: "cube-recycle-list-items",
        style: F({ height: o.heights + "px" })
      }, [
        (c(!0), d(S, null, $(s.visibleItems, (l) => (c(), d("div", {
          class: "cube-recycle-list-item",
          style: F({ transform: "translate(0," + l.top + "px)" })
        }, [
          i.infinite ? (c(), d("div", {
            key: 0,
            class: y({ "cube-recycle-list-transition": i.infinite }),
            style: F({ opacity: +!l.loaded })
          }, [
            p(e.$slots, "tombstone")
          ], 6)) : I("", !0),
          u("div", {
            class: y({ "cube-recycle-list-transition": i.infinite }),
            style: F({ opacity: l.loaded })
          }, [
            p(e.$slots, "item", {
              data: l.data
            })
          ], 6)
        ], 4))), 256)),
        u("div", Tf, [
          !i.infinite && o.preload ? (c(!0), d(S, { key: 0 }, $(o.items, (l, a) => E((c(), d("div", {
            class: "cube-recycle-list-item cube-recycle-list-invisible",
            ref_for: !0,
            ref: "preloads" + a
          }, [
            p(e.$slots, "item", {
              data: l.data
            })
          ], 512)), [
            [N, l && !l.isTombstone && !l.height]
          ])), 256)) : I("", !0),
          u("div", xf, [
            p(e.$slots, "tombstone")
          ], 512)
        ])
      ], 4),
      !i.infinite && !o.noMore ? (c(), d("div", {
        key: 0,
        class: "cube-recycle-list-loading",
        style: F({ visibility: s.loading ? "visible" : "hidden" })
      }, [
        p(e.$slots, "spinner", {}, () => [
          u("div", wf, [
            C(r, { class: "cube-recycle-list-spinner" })
          ])
        ])
      ], 4)) : I("", !0),
      E(u("div", Ef, [
        p(e.$slots, "noMore")
      ], 512), [
        [N, o.noMore]
      ])
    ]),
    Sf
  ]);
}
const kt = /* @__PURE__ */ b(bf, [["render", kf]]);
kt.install = function(e) {
  e.component(kt.name, kt);
};
oe.Group;
oe.Item;
Ee.Item;
const Co = xe.Radio;
We.Item;
pe.Panel;
pe.Item;
Se.Ele;
ke.Panel;
Re.Tab;
Xe.Panel;
Te.Item;
const Mo = [
  // locale
  X,
  // basic
  se,
  ee,
  bt,
  Ye,
  Re,
  Xe,
  // form
  W,
  Ue,
  Te,
  Co,
  xe,
  ne,
  Qe,
  ze,
  it,
  Be,
  H,
  we,
  oe,
  // popup
  Q,
  He,
  M,
  A,
  ve,
  Ae,
  ye,
  Le,
  Ze,
  pe,
  Je,
  // scroll
  re,
  Ee,
  Fe,
  We,
  Se,
  ke,
  me,
  kt
];
function Bt(e) {
  Bt.installed || (Bt.installed = !0, Mo.forEach((t) => {
    t !== Co && t.install(e);
  }));
}
const No = {
  /* eslint-disable no-undef */
  version: "2.0.0-alpha",
  install: Bt,
  BScroll: U,
  createAPI: Z
}, $f = Symbol("style");
No[$f] = Ho;
Mo.forEach((e) => {
  const t = Fo(e, {
    firstUpperCase: !0
  });
  No[t] = e;
});
typeof window < "u" && window.Vue && window.Vue.use(Bt);
export {
  No as default
};
