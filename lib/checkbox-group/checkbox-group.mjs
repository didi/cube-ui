import "./css.mjs";
import { openBlock as l, createElementBlock as p, normalizeClass as a, createElementVNode as r, withDirectives as C, vModelCheckbox as g, renderSlot as _, createTextVNode as v, toDisplayString as N, resolveComponent as S, Fragment as V, renderList as O, createBlock as w } from "vue";
const k = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, u] of t)
    o[s] = u;
  return o;
}, T = "cube-checkbox", f = "update:modelValue", I = "checked", B = "cancel-checked", z = {
  name: T,
  emits: [f],
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
    const e = this.$parent, t = !!e && e.$data._checkboxGroup, o = t && (e.$props.horizontal || e.$props.colNum > 1);
    return {
      isInGroup: t,
      isInHorizontalGroup: o
    };
  },
  computed: {
    computedOption() {
      let e = this.option;
      const t = this.label, o = this.disabled;
      return e._def_option === !0 ? e = {
        label: t,
        value: t,
        disabled: o
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
        const t = this.computedOption.value, o = t && e ? t : e;
        if (this.$emit(f, o), this.isInGroup) {
          e = !this.checkValue;
          const s = e ? I : B;
          this.$parent.checkEvent(s, t || e);
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
}, $ = ["data-pos"], G = ["disabled"], A = { class: "cube-checkbox-label" };
function H(e, t, o, s, u, n) {
  return l(), p("div", {
    class: a(["cube-checkbox", n._containerClass]),
    "data-pos": o.position
  }, [
    r("label", {
      class: a(["cube-checkbox-wrap", n._wrapClass])
    }, [
      C(r("input", {
        class: "cube-checkbox-input",
        type: "checkbox",
        disabled: n.computedOption.disabled,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => n.checkValue = d)
      }, null, 8, G), [
        [g, n.checkValue]
      ]),
      r("span", {
        class: a(["cube-checkbox-ui", n._borderIconClass])
      }, [
        r("i", {
          class: a(n._rightIconClass)
        }, null, 2)
      ], 2),
      r("span", A, [
        _(e.$slots, "default", {}, () => [
          v(N(n.computedOption.label), 1)
        ])
      ])
    ], 2)
  ], 10, $);
}
const i = /* @__PURE__ */ k(z, [["render", H]]), x = typeof window < "u", b = x && navigator.userAgent.toLowerCase();
b && b.indexOf("android") > 0;
let h = (() => {
  if (!x)
    return !1;
  let e = document.createElement("div").style, t = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (let o in t)
    if (e[t[o]] !== void 0)
      return o;
  return !1;
})();
function M(e) {
  return h === !1 ? !1 : h === "standard" ? e === "transitionEnd" ? "transitionend" : e : h + e.charAt(0).toUpperCase() + e.substr(1);
}
const q = M("flexBasis"), D = {
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
          Array.prototype.forEach.call(this.$refs.group.children, (o) => {
            o.style[q] = t;
          });
        });
      }
    }
  }
};
const L = "cube-checkbox-group", m = "update:modelValue", K = "checked", P = "cancel-checked", U = {
  name: L,
  mixins: [D],
  emits: [m],
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
    CubeCheckbox: i
  },
  methods: {
    checkEvent(e, t) {
      if (e === K && this._value.length < this.max && this._value.indexOf(t) === -1 && this._value.push(t), e === P) {
        const o = this._value.indexOf(t);
        this._value.length > this.min && o > -1 && this._value.splice(o, 1);
      }
      this.$emit(m, this._value);
    }
  }
}, F = ["data-horz", "data-col"];
function j(e, t, o, s, u, n) {
  const d = S("cube-checkbox");
  return l(), p("div", {
    class: a(["cube-checkbox-group", n.groupClass]),
    ref: "group",
    "data-horz": o.horizontal,
    "data-col": e.colNum > 1
  }, [
    _(e.$slots, "default", {}, () => [
      (l(!0), p(V, null, O(o.options, (y, E) => (l(), w(d, {
        key: E,
        option: y,
        shape: o.shape,
        position: o.position,
        "hollow-style": o.hollowStyle
      }, null, 8, ["option", "shape", "position", "hollow-style"]))), 128))
    ])
  ], 10, F);
}
const c = /* @__PURE__ */ k(U, [["render", j]]);
c.install = function(e) {
  e.component(i.name, i), e.component(c.name, c);
};
c.Checkbox = i;
export {
  c as default
};
