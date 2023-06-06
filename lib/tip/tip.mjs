import "./css.mjs";
import { openBlock as m, createBlock as d, Transition as u, withCtx as h, withDirectives as b, createElementVNode as a, withModifiers as g, renderSlot as _, vShow as x } from "vue";
const c = "update:visible", E = {
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
  emits: [c],
  watch: {
    isVisible(t) {
      this.$emit(c, t);
    }
  },
  mounted() {
    this.$watch("visible", (t, e) => {
      t ? this.show() : e && !this._createAPI_reuse && this.hide();
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
};
const v = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [i, o] of e)
    r[i] = o;
  return r;
}, y = "cube-tip", p = "click", f = "close", N = {
  name: y,
  mixins: [E],
  emits: [p, f],
  props: {
    direction: {
      type: String,
      default: "top"
    },
    offsetLeft: {
      type: [String, Number],
      default: 0
    },
    offsetRight: {
      type: [String, Number],
      default: 0
    },
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    offsetBottom: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      let t = this.$refs.angle.style;
      const e = {
        left: "right",
        right: "left",
        top: "bottom",
        bottom: "top"
      };
      [
        {
          name: "offsetLeft",
          target: "left",
          percentFix: {
            marginLeft: "-6px"
          }
        },
        {
          name: "offsetRight",
          target: "right",
          percentFix: {
            marginRight: "-6px"
          }
        },
        {
          name: "offsetTop",
          target: "top",
          percentFix: {
            marginTop: "-6px"
          }
        },
        {
          name: "offsetBottom",
          target: "bottom",
          percentFix: {
            marginBottom: "-6px"
          }
        }
      ].forEach((i) => {
        const o = this[i.name];
        if (o !== 0) {
          const s = typeof o == "number";
          t[i.target] = o + (s ? "px" : ""), i.percentFix && !s && Object.keys(i.percentFix).forEach((n) => {
            t[n] = i.percentFix[n];
          }), t[e[i.target]] = "auto";
        }
      });
    });
  },
  methods: {
    handleClick() {
      this.hide(), this.$emit(p);
    },
    close() {
      this.hide(), this.$emit(f);
    }
  }
}, T = ["data-dir"], k = {
  class: "cube-tip-angle",
  ref: "angle"
}, C = { class: "cube-tip-content" };
function S(t, e, r, i, o, s) {
  return m(), d(u, { name: "cube-tip-zoom" }, {
    default: h(() => [
      b(a("div", {
        class: "cube-tip",
        "data-dir": r.direction,
        onClick: e[1] || (e[1] = (...n) => s.handleClick && s.handleClick(...n))
      }, [
        a("i", k, null, 512),
        a("button", {
          class: "cube-tip-close cubeic-close",
          onClick: e[0] || (e[0] = g((...n) => s.close && s.close(...n), ["stop"]))
        }),
        a("div", C, [
          _(t.$slots, "default")
        ])
      ], 8, T), [
        [x, t.isVisible]
      ])
    ]),
    _: 3
  });
}
const l = /* @__PURE__ */ v(N, [["render", S]]);
l.install = function(t) {
  t.component(l.name, l);
};
export {
  l as default
};
