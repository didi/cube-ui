import { openBlock as t, createElementBlock as n, createElementVNode as o, normalizeStyle as i, Fragment as c, renderList as a } from "vue";
import { _ as l } from "./_plugin-vue_export-helper-dad06003.mjs";
const _ = "cube-loading", d = {
  name: _,
  data() {
    return {
      balde: 12
    };
  },
  props: {
    size: {
      type: Number
    }
  },
  computed: {
    style() {
      if (!this.size)
        return;
      const e = `${this.size}px`;
      return {
        width: e,
        height: e
      };
    }
  }
}, u = { class: "cube-loading" }, p = { class: "cube-loading-spinner" };
function m(e, g, h, b, s, r) {
  return t(), n("div", u, [
    o("span", {
      class: "cube-loading-spinners",
      style: i(r.style)
    }, [
      (t(!0), n(c, null, a(s.balde, (f) => (t(), n("i", p))), 256))
    ], 4)
  ]);
}
const N = /* @__PURE__ */ l(d, [["render", m]]);
export {
  N as L
};
