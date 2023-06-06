import "./css.mjs";
import { openBlock as a, createElementBlock as r, createElementVNode as _, normalizeStyle as O, Fragment as F, renderList as G, withDirectives as v, normalizeClass as k, withModifiers as $, renderSlot as x, vShow as g, resolveComponent as N, createBlock as M, Transition as K, withCtx as E, createVNode as C, createCommentVNode as V, camelize as D, h as w, render as P, isVNode as z, mergeProps as j } from "vue";
const T = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [c, i] of t)
    s[c] = i;
  return s;
}, q = "cube-loading", J = {
  name: q,
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
}, Q = { class: "cube-loading" }, R = { class: "cube-loading-spinner" };
function W(e, t, s, c, i, n) {
  return a(), r("div", Q, [
    _("span", {
      class: "cube-loading-spinners",
      style: O(n.style)
    }, [
      (a(!0), r(F, null, G(i.balde, (o) => (a(), r("i", R))), 256))
    ], 4)
  ]);
}
const f = /* @__PURE__ */ T(J, [["render", W]]), L = "update:visible", A = {
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
  emits: [L],
  watch: {
    isVisible(e) {
      this.$emit(L, e);
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
}, H = {
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
const X = "cube-popup", S = "mask-click", Y = {
  name: X,
  mixins: [A, H],
  emits: [S],
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
      this.$emit(S, e), this.maskClosable && this.hide();
    }
  }
}, Z = {
  key: 0,
  class: "cube-popup-content"
}, ee = ["innerHTML"];
function te(e, t, s, c, i, n) {
  return v((a(), r("div", {
    class: k(["cube-popup", n.rootClass]),
    style: O({ "z-index": e.zIndex })
  }, [
    _("div", {
      class: "cube-popup-mask",
      onTouchmove: t[0] || (t[0] = $(() => {
      }, ["prevent"])),
      onClick: t[1] || (t[1] = (...o) => n.maskClick && n.maskClick(...o))
    }, [
      x(e.$slots, "mask")
    ], 32),
    _("div", {
      class: k(["cube-popup-container", n.containerClass]),
      onTouchmove: t[2] || (t[2] = $(() => {
      }, ["prevent"]))
    }, [
      e.$slots.default ? (a(), r("div", Z, [
        x(e.$slots, "default")
      ])) : (a(), r("div", {
        key: 1,
        class: "cube-popup-content",
        innerHTML: s.content
      }, null, 8, ee))
    ], 34)
  ], 6)), [
    [g, e.isVisible]
  ]);
}
const se = /* @__PURE__ */ T(Y, [["render", te]]);
const ne = "cube-toast", B = "timeout", ie = {
  name: ne,
  mixins: [A, H],
  emits: [B],
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
      const s = {
        correct: "cubeic-right",
        error: "cubeic-wrong",
        warn: "cubeic-warn"
      }[this.type];
      return s && e.push(s), e;
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
          this.hide(), this.$emit(B);
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
    CubePopup: se,
    CubeLoading: f
  }
}, oe = ["innerHTML"];
function ce(e, t, s, c, i, n) {
  const o = N("cube-loading"), p = N("cube-popup");
  return a(), M(K, { name: "cube-toast-fade" }, {
    default: E(() => [
      v(C(p, {
        type: "toast",
        "z-index": s.zIndex,
        mask: s.mask,
        onMaskClick: n.maskClick
      }, {
        default: E(() => [
          !n.isLoading && n.iconClass.length ? (a(), r("i", {
            key: 0,
            class: k(["cube-toast-icon", n.iconClass])
          }, null, 2)) : V("", !0),
          n.isLoading ? (a(), M(o, { key: 1 })) : V("", !0),
          v(_("div", {
            class: "cube-toast-tip",
            innerHTML: s.txt
          }, null, 8, oe), [
            [g, s.txt]
          ])
        ]),
        _: 1
      }, 8, ["z-index", "mask", "onMaskClick"]), [
        [g, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const d = /* @__PURE__ */ T(ie, [["render", ce]]);
let ae = 0;
const y = [], re = (e, t, s = null, c = null) => {
  let i = t, n = s ? s(w) : null;
  const o = document ? document.createElement("div") : null, p = "cube_create_component_" + ae++, l = C({
    render() {
      return C(e, {
        ...i
        // ref: '$cre'
      }, n);
    }
  }, { id: p });
  c && (l.appContext = c), y.push(l);
  let m;
  return o && (P(l, o), m = l.component.subTree.component.proxy, m.$remove = function(h) {
    P(null, o), e._instance = null, h && h(), o && document.body.contains(o) && document.body.removeChild(o);
    const u = y.findIndex((b) => {
      const { id: U } = b.props;
      return p === U;
    });
    ~u && y.splice(u, 1);
  }, m.$updateProps = function(h, u, b = !0) {
    i = { ...b ? i : {}, ...h }, n = u ? { ...n || {}, ...u(w) } : null, l.component.proxy.$forceUpdate();
  }, document.body.appendChild(o)), m;
};
function I(e) {
  if (!!this && !!this._ && z(this._.vnode)) {
    const s = this && this._ && z(this._.vnode) ? this._.vnode.props : null;
    this._.vnode.props = j(s || {}, {
      onVnodeBeforeUnmount() {
        e.$remove();
      }
    });
  }
}
function le(e, t, s, c) {
  t.$create = e.config.globalProperties[`$create${D(t.name.replace("cube-", "")).replace(/^\w/, (i) => i.toUpperCase())}`] = function(i, n = null) {
    if (c && t._instance)
      return i && t._instance.$updateProps(i, n, !1), I.call(this, t._instance), t._instance;
    const o = t._instance = re(t, i, n, this ? this._.appContext : null);
    return I.call(this, o), o;
  };
}
function ue(e, t) {
  le(e, t, ["timeout"], !0);
}
d.install = function(e) {
  e.component(f.name, f), e.component(d.name, d), ue(e, d);
};
d.Loading = f;
export {
  d as default
};
