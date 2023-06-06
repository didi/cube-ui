import "./css.mjs";
import { withDirectives as g, openBlock as m, createElementBlock as f, normalizeClass as v, normalizeStyle as w, createElementVNode as b, withModifiers as y, renderSlot as k, vShow as M, camelize as B, h as $, createVNode as P, render as C, isVNode as V, mergeProps as S } from "vue";
const x = "update:visible", z = {
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
  emits: [x],
  watch: {
    isVisible(e) {
      this.$emit(x, e);
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
}, I = {
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
const A = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, L = "cube-popup", E = "mask-click", O = {
  name: L,
  mixins: [z, I],
  emits: [E],
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
      this.$emit(E, e), this.maskClosable && this.hide();
    }
  }
}, U = {
  key: 0,
  class: "cube-popup-content"
}, G = ["innerHTML"];
function H(e, t, o, r, n, i) {
  return g((m(), f("div", {
    class: v(["cube-popup", i.rootClass]),
    style: w({ "z-index": e.zIndex })
  }, [
    b("div", {
      class: "cube-popup-mask",
      onTouchmove: t[0] || (t[0] = y(() => {
      }, ["prevent"])),
      onClick: t[1] || (t[1] = (...s) => i.maskClick && i.maskClick(...s))
    }, [
      k(e.$slots, "mask")
    ], 32),
    b("div", {
      class: v(["cube-popup-container", i.containerClass]),
      onTouchmove: t[2] || (t[2] = y(() => {
      }, ["prevent"]))
    }, [
      e.$slots.default ? (m(), f("div", U, [
        k(e.$slots, "default")
      ])) : (m(), f("div", {
        key: 1,
        class: "cube-popup-content",
        innerHTML: o.content
      }, null, 8, G))
    ], 34)
  ], 6)), [
    [M, e.isVisible]
  ]);
}
const p = /* @__PURE__ */ A(O, [["render", H]]);
let K = 0;
const h = [], D = (e, t, o = null, r = null) => {
  let n = t, i = o ? o($) : null;
  const s = document ? document.createElement("div") : null, _ = "cube_create_component_" + K++, l = P({
    render() {
      return P(e, {
        ...n
        // ref: '$cre'
      }, i);
    }
  }, { id: _ });
  r && (l.appContext = r), h.push(l);
  let a;
  return s && (C(l, s), a = l.component.subTree.component.proxy, a.$remove = function(u) {
    C(null, s), e._instance = null, u && u(), s && document.body.contains(s) && document.body.removeChild(s);
    const c = h.findIndex((d) => {
      const { id: T } = d.props;
      return _ === T;
    });
    ~c && h.splice(c, 1);
  }, a.$updateProps = function(u, c, d = !0) {
    n = { ...d ? n : {}, ...u }, i = c ? { ...i || {}, ...c($) } : null, l.component.proxy.$forceUpdate();
  }, document.body.appendChild(s)), a;
};
function N(e) {
  if (!!this && !!this._ && V(this._.vnode)) {
    const o = this && this._ && V(this._.vnode) ? this._.vnode.props : null;
    this._.vnode.props = S(o || {}, {
      onVnodeBeforeUnmount() {
        e.$remove();
      }
    });
  }
}
function F(e, t, o, r) {
  t.$create = e.config.globalProperties[`$create${B(t.name.replace("cube-", "")).replace(/^\w/, (n) => n.toUpperCase())}`] = function(n, i = null) {
    if (r && t._instance)
      return n && t._instance.$updateProps(n, i, !1), N.call(this, t._instance), t._instance;
    const s = t._instance = D(t, n, i, this ? this._.appContext : null);
    return N.call(this, s), s;
  };
}
function j(e, t) {
  F(e, t, ["mask-click"], !0);
}
p.install = function(e) {
  e.component(p.name, p), j(e, p);
};
export {
  p as default
};
