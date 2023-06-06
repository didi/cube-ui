import "./css.mjs";
import { v as m } from "../visibility-5370f02a.mjs";
import { openBlock as f, createBlock as d, Transition as u, withCtx as g, withDirectives as h, createElementVNode as r, withModifiers as b, renderSlot as _, vShow as x } from "vue";
import { _ as y } from "../_plugin-vue_export-helper-dad06003.mjs";
const E = "cube-tip", l = "click", p = "close", N = {
  name: E,
  mixins: [m],
  emits: [l, p],
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
      const o = {
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
      ].forEach((e) => {
        const s = this[e.name];
        if (s !== 0) {
          const i = typeof s == "number";
          t[e.target] = s + (i ? "px" : ""), e.percentFix && !i && Object.keys(e.percentFix).forEach((n) => {
            t[n] = e.percentFix[n];
          }), t[o[e.target]] = "auto";
        }
      });
    });
  },
  methods: {
    handleClick() {
      this.hide(), this.$emit(l);
    },
    close() {
      this.hide(), this.$emit(p);
    }
  }
}, C = ["data-dir"], k = {
  class: "cube-tip-angle",
  ref: "angle"
}, v = { class: "cube-tip-content" };
function S(t, o, a, e, s, i) {
  return f(), d(u, { name: "cube-tip-zoom" }, {
    default: g(() => [
      h(r("div", {
        class: "cube-tip",
        "data-dir": a.direction,
        onClick: o[1] || (o[1] = (...n) => i.handleClick && i.handleClick(...n))
      }, [
        r("i", k, null, 512),
        r("button", {
          class: "cube-tip-close cubeic-close",
          onClick: o[0] || (o[0] = b((...n) => i.close && i.close(...n), ["stop"]))
        }),
        r("div", v, [
          _(t.$slots, "default")
        ])
      ], 8, C), [
        [x, t.isVisible]
      ])
    ]),
    _: 3
  });
}
const c = /* @__PURE__ */ y(N, [["render", S]]);
c.install = function(t) {
  t.component(c.name, c);
};
export {
  c as default
};
