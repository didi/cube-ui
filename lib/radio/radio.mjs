import "./css.mjs";
import { openBlock as l, createElementBlock as p, normalizeClass as m, createElementVNode as i, withDirectives as w, vModelRadio as S, renderSlot as b, toDisplayString as C, resolveComponent as E, Fragment as O, renderList as x, createBlock as G } from "vue";
const y = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [u, r] of t)
    o[u] = r;
  return o;
}, T = "cube-radio", f = "update:modelValue", z = {
  name: T,
  inject: {
    radioGroup: {
      default: null
    }
  },
  emits: [f],
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
      typeof this.modelValue == "number" && (e = Number(e)), this.$emit(f, e), this.radioGroup && (this.radioGroup.radioValue = e);
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
}, k = ["data-pos"], B = ["disabled", "value"], $ = /* @__PURE__ */ i("span", { class: "cube-radio-ui cubeic-round-border" }, [
  /* @__PURE__ */ i("i")
], -1), A = { class: "cube-radio-label" };
function M(e, t, o, u, r, a) {
  return l(), p("div", {
    class: m(["cube-radio", a._containerClass]),
    "data-pos": o.position
  }, [
    i("label", {
      class: m(["cube-radio-wrap", a._wrapClass])
    }, [
      w(i("input", {
        class: "cube-radio-input",
        type: "radio",
        disabled: o.option.disabled,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.radioValue = d),
        value: a.computedOption.value
      }, null, 8, B), [
        [S, r.radioValue]
      ]),
      $,
      b(e.$slots, "default", {}, () => [
        i("span", A, C(a.computedOption.label), 1)
      ])
    ], 2)
  ], 10, k);
}
const s = /* @__PURE__ */ y(z, [["render", M]]), V = typeof window < "u", h = V && navigator.userAgent.toLowerCase();
h && h.indexOf("android") > 0;
let c = (() => {
  if (!V)
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
function U(e) {
  return c === !1 ? !1 : c === "standard" ? e === "transitionEnd" ? "transitionend" : e : c + e.charAt(0).toUpperCase() + e.substr(1);
}
const R = U("flexBasis"), P = {
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
            o.style[R] = t;
          });
        });
      }
    }
  }
};
const W = "cube-radio-group", _ = "update:modelValue", I = {
  name: W,
  mixins: [P],
  provide() {
    return {
      radioGroup: this
    };
  },
  emits: [_],
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
      this.$emit(_, e);
    }
  },
  computed: {
    _groupClass() {
      if (!this.horizontal)
        return "border-top-1px border-bottom-1px";
    }
  },
  components: {
    CubeRadio: s
  }
}, L = ["data-horz", "data-col"];
function j(e, t, o, u, r, a) {
  const d = E("cube-radio");
  return l(), p("div", {
    class: m(["cube-radio-group", a._groupClass]),
    ref: "group",
    "data-horz": o.horizontal,
    "data-col": e.colNum > 1
  }, [
    b(e.$slots, "default", {}, () => [
      (l(!0), p(O, null, x(o.options, (g, v) => (l(), G(d, {
        key: v,
        option: g,
        position: o.position,
        "hollow-style": o.hollowStyle,
        modelValue: r.radioValue,
        "onUpdate:modelValue": t[0] || (t[0] = (N) => r.radioValue = N)
      }, null, 8, ["option", "position", "hollow-style", "modelValue"]))), 128))
    ])
  ], 10, L);
}
const n = /* @__PURE__ */ y(I, [["render", j]]);
n.install = function(e) {
  e.component(n.name, n), e.component(s.name, s);
};
n.Radio = s;
export {
  n as default
};
