import { openBlock as n, createElementBlock as u, normalizeClass as l, createElementVNode as c, withDirectives as d, vModelCheckbox as p, renderSlot as h, createTextVNode as b, toDisplayString as _ } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-dad06003.mjs";
const f = "cube-checkbox", i = "update:modelValue", k = "checked", x = "cancel-checked", C = {
  name: f,
  emits: [i],
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
        if (this.$emit(i, s), this.isInGroup) {
          e = !this.checkValue;
          const a = e ? k : x;
          this.$parent.checkEvent(a, t || e);
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
}, E = ["data-pos"], y = ["disabled"], g = { class: "cube-checkbox-label" };
function S(e, t, s, a, v, o) {
  return n(), u("div", {
    class: l(["cube-checkbox", o._containerClass]),
    "data-pos": s.position
  }, [
    c("label", {
      class: l(["cube-checkbox-wrap", o._wrapClass])
    }, [
      d(c("input", {
        class: "cube-checkbox-input",
        type: "checkbox",
        disabled: o.computedOption.disabled,
        "onUpdate:modelValue": t[0] || (t[0] = (r) => o.checkValue = r)
      }, null, 8, y), [
        [p, o.checkValue]
      ]),
      c("span", {
        class: l(["cube-checkbox-ui", o._borderIconClass])
      }, [
        c("i", {
          class: l(o._rightIconClass)
        }, null, 2)
      ], 2),
      c("span", g, [
        h(e.$slots, "default", {}, () => [
          b(_(o.computedOption.label), 1)
        ])
      ])
    ], 2)
  ], 10, E);
}
const N = /* @__PURE__ */ m(C, [["render", S]]);
export {
  N as C
};
