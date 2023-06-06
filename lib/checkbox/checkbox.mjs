import "./css.mjs";
import { openBlock as d, createElementBlock as p, normalizeClass as a, createElementVNode as c, withDirectives as h, vModelCheckbox as b, renderSlot as _, createTextVNode as m, toDisplayString as f } from "vue";
const k = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, x = "cube-checkbox", r = "update:modelValue", C = "checked", E = "cancel-checked", y = {
  name: x,
  emits: [r],
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
        if (this.$emit(r, o), this.isInGroup) {
          e = !this.checkValue;
          const l = e ? C : E;
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
}, g = ["data-pos"], v = ["disabled"], S = { class: "cube-checkbox-label" };
function I(e, t, o, l, n, s) {
  return d(), p("div", {
    class: a(["cube-checkbox", s._containerClass]),
    "data-pos": o.position
  }, [
    c("label", {
      class: a(["cube-checkbox-wrap", s._wrapClass])
    }, [
      h(c("input", {
        class: "cube-checkbox-input",
        type: "checkbox",
        disabled: s.computedOption.disabled,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => s.checkValue = u)
      }, null, 8, v), [
        [b, s.checkValue]
      ]),
      c("span", {
        class: a(["cube-checkbox-ui", s._borderIconClass])
      }, [
        c("i", {
          class: a(s._rightIconClass)
        }, null, 2)
      ], 2),
      c("span", S, [
        _(e.$slots, "default", {}, () => [
          m(f(s.computedOption.label), 1)
        ])
      ])
    ], 2)
  ], 10, g);
}
const i = /* @__PURE__ */ k(y, [["render", I]]);
i.install = function(e) {
  e.component(i.name, i);
};
export {
  i as default
};
