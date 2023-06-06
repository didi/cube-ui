import { C as u } from "./checkbox-e64fe430.mjs";
import { g as h } from "./group-col-19fd44a2.mjs";
import { resolveComponent as p, openBlock as l, createElementBlock as a, normalizeClass as d, renderSlot as m, Fragment as _, renderList as f, createBlock as b } from "vue";
import { _ as x } from "./_plugin-vue_export-helper-dad06003.mjs";
const C = "cube-checkbox-group", n = "update:modelValue", y = "checked", k = "cancel-checked", E = {
  name: C,
  mixins: [h],
  emits: [n],
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
      handler(t, o) {
        this._value = this.modelValue.concat();
      }
    }
  },
  components: {
    CubeCheckbox: u
  },
  methods: {
    checkEvent(t, o) {
      if (t === y && this._value.length < this.max && this._value.indexOf(o) === -1 && this._value.push(o), t === k) {
        const e = this._value.indexOf(o);
        this._value.length > this.min && e > -1 && this._value.splice(e, 1);
      }
      this.$emit(n, this._value);
    }
  }
}, g = ["data-horz", "data-col"];
function N(t, o, e, v, V, s) {
  const i = p("cube-checkbox");
  return l(), a("div", {
    class: d(["cube-checkbox-group", s.groupClass]),
    ref: "group",
    "data-horz": e.horizontal,
    "data-col": t.colNum > 1
  }, [
    m(t.$slots, "default", {}, () => [
      (l(!0), a(_, null, f(e.options, (r, c) => (l(), b(i, {
        key: c,
        option: r,
        shape: e.shape,
        position: e.position,
        "hollow-style": e.hollowStyle
      }, null, 8, ["option", "shape", "position", "hollow-style"]))), 128))
    ])
  ], 10, g);
}
const T = /* @__PURE__ */ x(E, [["render", N]]);
export {
  T as C
};
