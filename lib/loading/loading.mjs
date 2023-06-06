import "./css.mjs";
import { openBlock as s, createElementBlock as o, createElementVNode as l, normalizeStyle as _, Fragment as u, renderList as d } from "vue";
const p = (e, c) => {
  const t = e.__vccOpts || e;
  for (const [i, n] of c)
    t[i] = n;
  return t;
}, m = "cube-loading", g = {
  name: m,
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
}, f = { class: "cube-loading" }, h = { class: "cube-loading-spinner" };
function y(e, c, t, i, n, a) {
  return s(), o("div", f, [
    l("span", {
      class: "cube-loading-spinners",
      style: _(a.style)
    }, [
      (s(!0), o(u, null, d(n.balde, (b) => (s(), o("i", h))), 256))
    ], 4)
  ]);
}
const r = /* @__PURE__ */ p(g, [["render", y]]);
r.install = function(e) {
  e.component(r.name, r);
};
export {
  r as default
};
