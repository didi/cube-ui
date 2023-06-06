import "./css.mjs";
import { withDirectives as C, openBlock as o, createElementBlock as u, normalizeClass as d, normalizeStyle as ie, createElementVNode as r, withModifiers as w, renderSlot as f, vShow as S, createCommentVNode as p, mergeProps as V, vModelDynamic as ae, resolveComponent as L, createBlock as D, Transition as le, withCtx as O, createVNode as T, toDisplayString as P, camelize as re, h as A, render as $, isVNode as F } from "vue";
const I = "update:visible", Z = {
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
  emits: [I],
  watch: {
    isVisible(e) {
      this.$emit(I, e);
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
}, ee = {
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
const x = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, l] of t)
    s[i] = l;
  return s;
}, oe = "cube-popup", H = "mask-click", ce = {
  name: oe,
  mixins: [Z, ee],
  emits: [H],
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
      this.$emit(H, e), this.maskClosable && this.hide();
    }
  }
}, ue = {
  key: 0,
  class: "cube-popup-content"
}, de = ["innerHTML"];
function pe(e, t, s, i, l, n) {
  return C((o(), u("div", {
    class: d(["cube-popup", n.rootClass]),
    style: ie({ "z-index": e.zIndex })
  }, [
    r("div", {
      class: "cube-popup-mask",
      onTouchmove: t[0] || (t[0] = w(() => {
      }, ["prevent"])),
      onClick: t[1] || (t[1] = (...a) => n.maskClick && n.maskClick(...a))
    }, [
      f(e.$slots, "mask")
    ], 32),
    r("div", {
      class: d(["cube-popup-container", n.containerClass]),
      onTouchmove: t[2] || (t[2] = w(() => {
      }, ["prevent"]))
    }, [
      e.$slots.default ? (o(), u("div", ue, [
        f(e.$slots, "default")
      ])) : (o(), u("div", {
        key: 1,
        class: "cube-popup-content",
        innerHTML: s.content
      }, null, 8, de))
    ], 34)
  ], 6)), [
    [S, e.isVisible]
  ]);
}
const fe = /* @__PURE__ */ x(ce, [["render", pe]]), j = "change", me = {
  emits: [j],
  methods: {
    changeHandler(e) {
      this.$emit(j, e);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    }
  }
};
const he = "cube-input", U = "update:modelValue", z = "blur", q = "focus", be = {
  name: he,
  mixins: [me],
  emits: [U, z, q],
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
      this.$emit(U, e);
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
      this.$emit(q, e), this.isFocus = !0;
    },
    handleBlur(e) {
      this.$emit(z, e), this.isFocus = !1;
    },
    handleClear(e) {
      this.inputValue = "", this.$refs.input.focus();
    },
    handlePwdEye() {
      this.formatedEye.open = !this.formatedEye.open;
    }
  }
}, ge = {
  key: 0,
  class: "cube-input-prepend"
}, ye = ["type", "disabled", "readonly", "autocomplete", "autofocus"], _e = {
  key: 1,
  class: "cube-input-append"
}, ve = /* @__PURE__ */ r("i", { class: "cubeic-wrong" }, null, -1), Ce = [
  ve
];
function Ee(e, t, s, i, l, n) {
  return o(), u("div", {
    class: d(["cube-input", { "cube-input_active": l.isFocus }])
  }, [
    e.$slots.prepend ? (o(), u("div", ge, [
      f(e.$slots, "prepend")
    ])) : p("", !0),
    C(r("input", V({
      class: "cube-input-field",
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = (a) => l.inputValue = a)
    }, e.$props, {
      type: n._type,
      disabled: s.disabled,
      readonly: s.readonly,
      autocomplete: s.autocomplete,
      autofocus: s.autofocus,
      onFocus: t[1] || (t[1] = (...a) => n.handleFocus && n.handleFocus(...a)),
      onBlur: t[2] || (t[2] = (...a) => n.handleBlur && n.handleBlur(...a)),
      onChange: t[3] || (t[3] = (...a) => e.changeHandler && e.changeHandler(...a))
    }), null, 16, ye), [
      [ae, l.inputValue]
    ]),
    e.$slots.append || n._showClear || n._showPwdEye ? (o(), u("div", _e, [
      n._showClear ? (o(), u("div", {
        key: 0,
        class: "cube-input-clear",
        onTouchend: t[4] || (t[4] = (...a) => n.handleClear && n.handleClear(...a))
      }, Ce, 32)) : p("", !0),
      n._showPwdEye ? (o(), u("div", {
        key: 1,
        class: "cube-input-eye",
        onClick: t[5] || (t[5] = (...a) => n.handlePwdEye && n.handlePwdEye(...a))
      }, [
        r("i", {
          class: d(n.eyeClass)
        }, null, 2)
      ])) : p("", !0),
      f(e.$slots, "append")
    ])) : p("", !0)
  ], 2);
}
const E = /* @__PURE__ */ x(be, [["render", Ee]]), ke = {
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
}, Pe = {
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
}, Me = function(e, t) {
};
function te(e) {
  const t = Object.prototype.toString;
  return function(i) {
    return t.call(i) === `[object ${e}]`;
  };
}
function Se(e, t = "") {
  const s = t.split(".");
  let i = e;
  for (let l = 0; l < s.length; l++) {
    const n = s[l];
    if (N(i[n])) {
      i = "";
      break;
    } else
      i = i[n];
  }
  return i;
}
const N = te("Undefined"), Te = te("Number");
function Ve(e, t, s, i) {
  const l = {
    year: "(Y+)",
    month: "(M+)",
    date: "(D+)",
    hour: "(h+)",
    minute: "(m+)",
    second: "(s+)",
    quarter: "(q+)",
    millisecond: "(S)"
  };
  if (new RegExp(l[e], i).test(t)) {
    const n = e === "year" ? s.toString().substr(4 - RegExp.$1.length) : RegExp.$1.length === 1 ? s : xe(s);
    t = t.replace(RegExp.$1, n);
  }
  return t;
}
function xe(e) {
  return ("00" + e).substr(("" + e).length);
}
function Ne(e, t) {
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
    t = Ve(i, t, s[i].value, s[i].regExpAttributes);
  return t;
}
let h;
const R = "zh-CN", b = {
  name: "locale",
  install(e) {
    b.installed || (h = e.config.globalProperties, h.$cubeLang = R, h.$cubeMessages = { [R]: ke, "en-US": Pe }, b.installed = !0);
  },
  use(e, t) {
    h.$cubeLang = e;
    const s = h.$cubeMessages;
    e in s || (s[[e]] = t);
  },
  helpers: {
    toLocaleDateString(e, t) {
      const s = Te(e) ? e : e.replace(/-/g, "/"), i = new Date(s);
      return N(t) ? i.toDateString() : Ne(i, t);
    }
  },
  addHelper(e, t) {
    e in b.helpers || (b.helpers[e] = t);
  }
}, ne = b, Be = "Translation is not registered correctly, you can call Locale.use() to install it.", we = {
  computed: {
    $t() {
      const e = this.$cubeLang, t = this.$cubeMessages[e];
      return N(t) ? (Me(Be), "") : (s) => Se(t, s);
    }
  },
  beforeCreate() {
    ne.install(this._.appContext.app);
  }
};
const Le = "cube-dialog", G = "confirm", K = "cancel", W = "close", B = "javascript:;", Y = {
  textType: "ok",
  active: !0,
  disabled: !1,
  href: B
}, J = {
  textType: "cancel",
  active: !1,
  disabled: !1,
  href: B
}, Q = function(e, t) {
  typeof e == "string" && (e = {
    text: e
  });
  const s = t && this.$t(t.textType);
  return Object.assign({}, t, { text: s }, e);
}, De = {
  name: Le,
  mixins: [Z, ee, we],
  emits: [G, K, W],
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
          ...Y
        };
      }
    },
    cancelBtn: {
      type: [Object, String],
      default() {
        return {
          ...J
        };
      }
    }
  },
  data() {
    return {
      defHref: B,
      promptValue: this.prompt.value
    };
  },
  computed: {
    _confirmBtn() {
      return Q.call(this, this.confirmBtn, Y);
    },
    _cancelBtn() {
      return Q.call(this, this.cancelBtn, J);
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
      this._confirmBtn.disabled || (this.hide(), this.$emit(G, e, this.promptValue));
    },
    cancel(e) {
      this._cancelBtn.disabled || (this.hide(), this.$emit(K, e));
    },
    close(e) {
      this.hide(), this.$emit(W, e);
    }
  },
  components: {
    CubePopup: fe,
    CubeInput: E
  }
}, Oe = { class: "cube-dialog-main" }, Ae = /* @__PURE__ */ r("i", { class: "cubeic-close" }, null, -1), $e = [
  Ae
], Fe = {
  key: 0,
  class: "cube-dialog-icon"
}, Ie = {
  key: 1,
  class: "cube-dialog-title"
}, He = { class: "cube-dialog-title-def" }, je = { class: "cube-dialog-content" }, Ue = { class: "cube-dialog-content-def" }, ze = ["innerHTML"], qe = ["href"], Re = ["href"];
function Ge(e, t, s, i, l, n) {
  const a = L("cube-input"), y = L("cube-popup");
  return o(), D(le, { name: "cube-dialog-fade" }, {
    default: O(() => [
      C(T(y, {
        type: "dialog",
        "z-index": e.zIndex,
        mask: !0,
        center: !0,
        onMaskClick: n.maskClick
      }, {
        default: O(() => [
          r("div", Oe, [
            C(r("span", {
              class: "cube-dialog-close",
              onClick: t[0] || (t[0] = (...c) => n.close && n.close(...c))
            }, $e, 512), [
              [S, s.showClose]
            ]),
            r("div", {
              class: d(n.containerClass)
            }, [
              s.icon ? (o(), u("p", Fe, [
                r("i", {
                  class: d(s.icon)
                }, null, 2)
              ])) : p("", !0),
              s.title || e.$slots.title ? (o(), u("h2", Ie, [
                f(e.$slots, "title", {}, () => [
                  r("p", He, P(s.title), 1)
                ])
              ])) : p("", !0),
              r("div", je, [
                f(e.$slots, "content", {}, () => [
                  r("div", Ue, [
                    s.content ? (o(), u("p", {
                      key: 0,
                      innerHTML: s.content
                    }, null, 8, ze)) : p("", !0),
                    n.isPrompt ? (o(), D(a, V({ key: 1 }, s.prompt, {
                      modelValue: l.promptValue,
                      "onUpdate:modelValue": t[1] || (t[1] = (c) => l.promptValue = c)
                    }), null, 16, ["modelValue"])) : p("", !0)
                  ])
                ])
              ]),
              r("div", {
                class: d(["cube-dialog-btns", { "border-right-1px": n.isConfirm || n.isPrompt }])
              }, [
                f(e.$slots, "btns", {}, () => [
                  n.isConfirm || n.isPrompt ? (o(), u("a", {
                    key: 0,
                    href: n._cancelBtn.href,
                    class: d(["cube-dialog-btn border-top-1px", { "cube-dialog-btn_highlight": n._cancelBtn.active, "cube-dialog-btn_disabled": n._cancelBtn.disabled }]),
                    onClick: t[2] || (t[2] = (...c) => n.cancel && n.cancel(...c))
                  }, P(n._cancelBtn.text), 11, qe)) : p("", !0),
                  r("a", {
                    href: n._confirmBtn.href,
                    class: d(["cube-dialog-btn border-top-1px", { "cube-dialog-btn_highlight": n._confirmBtn.active, "cube-dialog-btn_disabled": n._confirmBtn.disabled }]),
                    onClick: t[3] || (t[3] = (...c) => n.confirm && n.confirm(...c))
                  }, P(n._confirmBtn.text), 11, Re)
                ])
              ], 2)
            ], 2)
          ])
        ]),
        _: 3
      }, 8, ["z-index", "onMaskClick"]), [
        [S, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const g = /* @__PURE__ */ x(De, [["render", Ge]]);
let Ke = 0;
const M = [], We = (e, t, s = null, i = null) => {
  let l = t, n = s ? s(A) : null;
  const a = document ? document.createElement("div") : null, y = "cube_create_component_" + Ke++, c = T({
    render() {
      return T(e, {
        ...l
        // ref: '$cre'
      }, n);
    }
  }, { id: y });
  i && (c.appContext = i), M.push(c);
  let _;
  return a && ($(c, a), _ = c.component.subTree.component.proxy, _.$remove = function(v) {
    $(null, a), e._instance = null, v && v(), a && document.body.contains(a) && document.body.removeChild(a);
    const m = M.findIndex((k) => {
      const { id: se } = k.props;
      return y === se;
    });
    ~m && M.splice(m, 1);
  }, _.$updateProps = function(v, m, k = !0) {
    l = { ...k ? l : {}, ...v }, n = m ? { ...n || {}, ...m(A) } : null, c.component.proxy.$forceUpdate();
  }, document.body.appendChild(a)), _;
};
function X(e) {
  if (!!this && !!this._ && F(this._.vnode)) {
    const s = this && this._ && F(this._.vnode) ? this._.vnode.props : null;
    this._.vnode.props = V(s || {}, {
      onVnodeBeforeUnmount() {
        e.$remove();
      }
    });
  }
}
function Ye(e, t, s, i) {
  t.$create = e.config.globalProperties[`$create${re(t.name.replace("cube-", "")).replace(/^\w/, (l) => l.toUpperCase())}`] = function(l, n = null) {
    if (i && t._instance)
      return l && t._instance.$updateProps(l, n, !1), X.call(this, t._instance), t._instance;
    const a = t._instance = We(t, l, n, this ? this._.appContext : null);
    return X.call(this, a), a;
  };
}
function Je(e, t) {
  Ye(e, t, ["confirm", "cancel", "close", "btn-click", "link-click"], !0);
}
g.install = function(e) {
  e.component(E.name, E), e.component(g.name, g), ne.install(e), Je(e, g);
};
g.Input = E;
export {
  g as default
};
