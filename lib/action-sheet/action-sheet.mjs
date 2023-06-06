import "./css.mjs";
import { withDirectives as y, openBlock as u, createElementBlock as f, normalizeClass as v, normalizeStyle as j, createElementVNode as l, withModifiers as C, renderSlot as S, vShow as _, resolveComponent as G, createBlock as K, Transition as E, withCtx as P, createVNode as k, toDisplayString as $, Fragment as W, renderList as Y, camelize as J, h as N, render as L, isVNode as A, mergeProps as Q } from "vue";
const D = "update:visible", O = {
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
  emits: [D],
  watch: {
    isVisible(e) {
      this.$emit(D, e);
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
}, q = {
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
const U = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
}, X = "cube-popup", w = "mask-click", Z = {
  name: X,
  mixins: [O, q],
  emits: [w],
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
      this.$emit(w, e), this.maskClosable && this.hide();
    }
  }
}, ee = {
  key: 0,
  class: "cube-popup-content"
}, te = ["innerHTML"];
function ne(e, t, n, s, a, i) {
  return y((u(), f("div", {
    class: v(["cube-popup", i.rootClass]),
    style: j({ "z-index": e.zIndex })
  }, [
    l("div", {
      class: "cube-popup-mask",
      onTouchmove: t[0] || (t[0] = C(() => {
      }, ["prevent"])),
      onClick: t[1] || (t[1] = (...c) => i.maskClick && i.maskClick(...c))
    }, [
      S(e.$slots, "mask")
    ], 32),
    l("div", {
      class: v(["cube-popup-container", i.containerClass]),
      onTouchmove: t[2] || (t[2] = C(() => {
      }, ["prevent"]))
    }, [
      e.$slots.default ? (u(), f("div", ee, [
        S(e.$slots, "default")
      ])) : (u(), f("div", {
        key: 1,
        class: "cube-popup-content",
        innerHTML: n.content
      }, null, 8, te))
    ], 34)
  ], 6)), [
    [_, e.isVisible]
  ]);
}
const se = /* @__PURE__ */ U(Z, [["render", ne]]), ie = {
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
}, ae = {
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
}, ce = function(e, t) {
};
function H(e) {
  const t = Object.prototype.toString;
  return function(s) {
    return t.call(s) === `[object ${e}]`;
  };
}
function oe(e, t = "") {
  const n = t.split(".");
  let s = e;
  for (let a = 0; a < n.length; a++) {
    const i = n[a];
    if (T(s[i])) {
      s = "";
      break;
    } else
      s = s[i];
  }
  return s;
}
const T = H("Undefined"), le = H("Number");
function re(e, t, n, s) {
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
  if (new RegExp(a[e], s).test(t)) {
    const i = e === "year" ? n.toString().substr(4 - RegExp.$1.length) : RegExp.$1.length === 1 ? n : ue(n);
    t = t.replace(RegExp.$1, i);
  }
  return t;
}
function ue(e) {
  return ("00" + e).substr(("" + e).length);
}
function pe(e, t) {
  const n = {
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
  for (const s in n)
    t = re(s, t, n[s].value, n[s].regExpAttributes);
  return t;
}
let m;
const V = "zh-CN", h = {
  name: "locale",
  install(e) {
    h.installed || (m = e.config.globalProperties, m.$cubeLang = V, m.$cubeMessages = { [V]: ie, "en-US": ae }, h.installed = !0);
  },
  use(e, t) {
    m.$cubeLang = e;
    const n = m.$cubeMessages;
    e in n || (n[[e]] = t);
  },
  helpers: {
    toLocaleDateString(e, t) {
      const n = le(e) ? e : e.replace(/-/g, "/"), s = new Date(n);
      return T(t) ? s.toDateString() : pe(s, t);
    }
  },
  addHelper(e, t) {
    e in h.helpers || (h.helpers[e] = t);
  }
}, F = h, de = "Translation is not registered correctly, you can call Locale.use() to install it.", me = {
  computed: {
    $t() {
      const e = this.$cubeLang, t = this.$cubeMessages[e];
      return T(t) ? (ce(de), "") : (n) => oe(t, n);
    }
  },
  beforeCreate() {
    F.install(this._.appContext.app);
  }
};
const he = "cube-action-sheet", B = "select", z = "cancel", fe = {
  name: he,
  mixins: [O, q, me],
  emits: [B, z],
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
      this.hide(), this.$emit(z);
    },
    itemClick(e, t) {
      this.hide(), this.$emit(B, e, t);
    }
  },
  components: {
    CubePopup: se
  }
}, ge = { class: "cube-action-sheet-content" }, be = { class: "cube-action-sheet-list" }, ye = ["data-align", "innerHTML", "onClick"], _e = /* @__PURE__ */ l("div", { class: "cube-action-sheet-space" }, null, -1);
function ve(e, t, n, s, a, i) {
  const c = G("cube-popup");
  return u(), K(E, { name: "cube-action-sheet-fade" }, {
    default: P(() => [
      y(k(c, {
        type: "action-sheet",
        class: v({ "cube-action-sheet_picker": n.pickerStyle }),
        center: !1,
        mask: !0,
        "z-index": e.zIndex,
        onMaskClick: i.maskClick
      }, {
        default: P(() => [
          k(E, { name: "cube-action-sheet-move" }, {
            default: P(() => [
              y(l("div", {
                class: "cube-action-sheet-panel cube-safe-area-pb",
                onClick: t[1] || (t[1] = C(() => {
                }, ["stop"]))
              }, [
                y(l("h1", { class: "cube-action-sheet-title border-bottom-1px" }, $(n.title), 513), [
                  [_, n.pickerStyle || n.title]
                ]),
                l("div", ge, [
                  l("ul", be, [
                    (u(!0), f(W, null, Y(n.data, (o, r) => (u(), f("li", {
                      class: v(["cube-action-sheet-item border-bottom-1px", [
                        o.class || "",
                        r === n.active ? "cube-action-sheet-item_active" : ""
                      ]]),
                      "data-align": o.align,
                      innerHTML: o.content,
                      onClick: (p) => i.itemClick(o, r)
                    }, null, 10, ye))), 256))
                  ])
                ]),
                _e,
                l("div", {
                  class: "cube-action-sheet-cancel",
                  onClick: t[0] || (t[0] = (...o) => i.cancel && i.cancel(...o))
                }, [
                  l("span", null, $(i._cancelTxt), 1)
                ])
              ], 512), [
                [_, e.isVisible]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "z-index", "onMaskClick"]), [
        [_, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const b = /* @__PURE__ */ U(fe, [["render", ve]]);
let ke = 0;
const x = [], Me = (e, t, n = null, s = null) => {
  let a = t, i = n ? n(N) : null;
  const c = document ? document.createElement("div") : null, o = "cube_create_component_" + ke++, r = k({
    render() {
      return k(e, {
        ...a
        // ref: '$cre'
      }, i);
    }
  }, { id: o });
  s && (r.appContext = s), x.push(r);
  let p;
  return c && (L(r, c), p = r.component.subTree.component.proxy, p.$remove = function(g) {
    L(null, c), e._instance = null, g && g(), c && document.body.contains(c) && document.body.removeChild(c);
    const d = x.findIndex((M) => {
      const { id: R } = M.props;
      return o === R;
    });
    ~d && x.splice(d, 1);
  }, p.$updateProps = function(g, d, M = !0) {
    a = { ...M ? a : {}, ...g }, i = d ? { ...i || {}, ...d(N) } : null, r.component.proxy.$forceUpdate();
  }, document.body.appendChild(c)), p;
};
function I(e) {
  if (!!this && !!this._ && A(this._.vnode)) {
    const n = this && this._ && A(this._.vnode) ? this._.vnode.props : null;
    this._.vnode.props = Q(n || {}, {
      onVnodeBeforeUnmount() {
        e.$remove();
      }
    });
  }
}
function Pe(e, t, n, s) {
  t.$create = e.config.globalProperties[`$create${J(t.name.replace("cube-", "")).replace(/^\w/, (a) => a.toUpperCase())}`] = function(a, i = null) {
    if (s && t._instance)
      return a && t._instance.$updateProps(a, i, !1), I.call(this, t._instance), t._instance;
    const c = t._instance = Me(t, a, i, this ? this._.appContext : null);
    return I.call(this, c), c;
  };
}
function xe(e, t) {
  Pe(e, t, ["select", "cancel"], !0);
}
b.install = function(e) {
  e.component(b.name, b), F.install(e), xe(e, b);
};
export {
  b as default
};
