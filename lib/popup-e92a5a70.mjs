import { v as m } from "./visibility-5370f02a.mjs";
import { p as d } from "./popup-c9badb65.mjs";
import { withDirectives as f, openBlock as o, createElementBlock as i, normalizeClass as n, normalizeStyle as k, createElementVNode as p, withModifiers as r, renderSlot as u, vShow as v } from "vue";
import { _ as y } from "./_plugin-vue_export-helper-dad06003.mjs";
const C = "cube-popup", l = "mask-click", b = {
  name: C,
  mixins: [m, d],
  emits: [l],
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
      this.$emit(l, e), this.maskClosable && this.hide();
    }
  }
}, _ = {
  key: 0,
  class: "cube-popup-content"
}, h = ["innerHTML"];
function M(e, t, a, S, E, s) {
  return f((o(), i("div", {
    class: n(["cube-popup", s.rootClass]),
    style: k({ "z-index": e.zIndex })
  }, [
    p("div", {
      class: "cube-popup-mask",
      onTouchmove: t[0] || (t[0] = r(() => {
      }, ["prevent"])),
      onClick: t[1] || (t[1] = (...c) => s.maskClick && s.maskClick(...c))
    }, [
      u(e.$slots, "mask")
    ], 32),
    p("div", {
      class: n(["cube-popup-container", s.containerClass]),
      onTouchmove: t[2] || (t[2] = r(() => {
      }, ["prevent"]))
    }, [
      e.$slots.default ? (o(), i("div", _, [
        u(e.$slots, "default")
      ])) : (o(), i("div", {
        key: 1,
        class: "cube-popup-content",
        innerHTML: a.content
      }, null, 8, h))
    ], 34)
  ], 6)), [
    [v, e.isVisible]
  ]);
}
const x = /* @__PURE__ */ y(b, [["render", M]]);
export {
  x as C
};
