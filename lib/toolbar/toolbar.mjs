import "./css.mjs";
import { openBlock as c, createElementBlock as s, normalizeClass as b, createCommentVNode as v, renderSlot as N, createElementVNode as r, withDirectives as $, vModelCheckbox as O, createTextVNode as V, toDisplayString as B, resolveComponent as f, createVNode as I, withCtx as S, createBlock as k, Fragment as y, renderList as C, vShow as T } from "vue";
const m = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [i, u] of o)
    t[i] = u;
  return t;
}, A = "cube-button", w = {
  name: A,
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
}, G = ["type"];
function H(e, o, t, i, u, n) {
  return c(), s("button", {
    class: b(["cube-btn", n.btnClass]),
    type: t.type,
    onClick: o[0] || (o[0] = (...l) => n.handleClick && n.handleClick(...l))
  }, [
    t.icon ? (c(), s("i", {
      key: 0,
      class: b(t.icon)
    }, null, 2)) : v("", !0),
    N(e.$slots, "default")
  ], 10, G);
}
const _ = /* @__PURE__ */ m(w, [["render", H]]);
const q = "cube-checkbox", x = "update:modelValue", L = "checked", P = "cancel-checked", z = {
  name: q,
  emits: [x],
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
    const e = this.$parent, o = !!e && e.$data._checkboxGroup, t = o && (e.$props.horizontal || e.$props.colNum > 1);
    return {
      isInGroup: o,
      isInHorizontalGroup: t
    };
  },
  computed: {
    computedOption() {
      let e = this.option;
      const o = this.label, t = this.disabled;
      return e._def_option === !0 ? e = {
        label: o,
        value: o,
        disabled: t
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
        const o = this.computedOption.value, t = o && e ? o : e;
        if (this.$emit(x, t), this.isInGroup) {
          e = !this.checkValue;
          const i = e ? L : P;
          this.$parent.checkEvent(i, o || e);
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
}, D = ["data-pos"], K = ["disabled"], U = { class: "cube-checkbox-label" };
function j(e, o, t, i, u, n) {
  return c(), s("div", {
    class: b(["cube-checkbox", n._containerClass]),
    "data-pos": t.position
  }, [
    r("label", {
      class: b(["cube-checkbox-wrap", n._wrapClass])
    }, [
      $(r("input", {
        class: "cube-checkbox-input",
        type: "checkbox",
        disabled: n.computedOption.disabled,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => n.checkValue = l)
      }, null, 8, K), [
        [O, n.checkValue]
      ]),
      r("span", {
        class: b(["cube-checkbox-ui", n._borderIconClass])
      }, [
        r("i", {
          class: b(n._rightIconClass)
        }, null, 2)
      ], 2),
      r("span", U, [
        N(e.$slots, "default", {}, () => [
          V(B(n.computedOption.label), 1)
        ])
      ])
    ], 2)
  ], 10, D);
}
const p = /* @__PURE__ */ m(z, [["render", j]]);
const F = "cube-toolbar-item", R = {
  name: F,
  components: {
    CubeButton: _,
    CubeCheckbox: p
  },
  props: {
    action: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, J = { class: "cube-toolbar-item border-right-1px" }, Q = ["innerHTML"], W = /* @__PURE__ */ r("i", { class: "cube-toolbar-down" }, null, -1);
function X(e, o, t, i, u, n) {
  const l = f("cube-checkbox"), a = f("cube-button");
  return c(), s("li", J, [
    I(a, {
      icon: t.action.icon
    }, {
      default: S(() => [
        t.action.type == "checkbox" ? (c(), k(l, {
          key: 0,
          class: "cube-toolbar-chb",
          modelValue: t.action.checked,
          "onUpdate:modelValue": o[0] || (o[0] = (d) => t.action.checked = d),
          label: t.action.text
        }, null, 8, ["modelValue", "label"])) : (c(), s("span", {
          key: 1,
          innerHTML: t.action.text
        }, null, 8, Q))
      ]),
      _: 1
    }, 8, ["icon"]),
    W
  ]);
}
const Y = /* @__PURE__ */ m(R, [["render", X]]);
const Z = "cube-toolbar", g = "click", E = "more-click", ee = {
  name: Z,
  components: {
    CubeToolbarItem: Y
  },
  emits: [g, E],
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
      e.$cubeMore ? (this.showMore = !this.showMore, this.$emit(E, this.showMore)) : this.$emit(g, e);
    }
  }
}, te = { class: "cube-toolbar" }, oe = {
  key: 0,
  class: "cube-toolbar-group cube-toolbar-group-more"
}, ne = { class: "cube-toolbar-group" };
function ce(e, o, t, i, u, n) {
  const l = f("cube-toolbar-item");
  return c(), s("div", te, [
    t.moreActions ? $((c(), s("ul", oe, [
      (c(!0), s(y, null, C(t.moreActions, (a, d) => (c(), k(l, {
        key: d,
        action: a,
        onClick: (M) => n.itemClick(a)
      }, null, 8, ["action", "onClick"]))), 128))
    ], 512)), [
      [T, u.showMore]
    ]) : v("", !0),
    r("ul", ne, [
      (c(!0), s(y, null, C(n.basicActions, (a, d) => (c(), k(l, {
        key: d,
        action: a,
        onClick: (M) => n.itemClick(a)
      }, null, 8, ["action", "onClick"]))), 128))
    ])
  ]);
}
const h = /* @__PURE__ */ m(ee, [["render", ce]]);
h.install = function(e) {
  e.component(_.name, _), e.component(p.name, p), e.component(h.name, h);
};
h.Button = _;
h.Checkbox = p;
export {
  h as default
};
