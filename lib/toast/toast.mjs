import "./css.mjs";
import { L as o } from "../loading-0018ccd1.mjs";
import { C as _ } from "../popup-e92a5a70.mjs";
import { v as b } from "../visibility-5370f02a.mjs";
import { p as k } from "../popup-c9badb65.mjs";
import { resolveComponent as c, openBlock as a, createBlock as r, Transition as g, withCtx as m, withDirectives as l, createVNode as C, createElementBlock as x, normalizeClass as y, createCommentVNode as u, createElementVNode as T, vShow as d } from "vue";
import { _ as M } from "../_plugin-vue_export-helper-dad06003.mjs";
import { c as L } from "../create-api-056c0420.mjs";
const N = "cube-toast", p = "timeout", v = {
  name: N,
  mixins: [b, k],
  emits: [p],
  props: {
    type: {
      type: String,
      default: "loading"
    },
    icon: {
      type: String,
      default: ""
    },
    mask: {
      type: Boolean,
      default: !1
    },
    txt: {
      type: String,
      default: ""
    },
    time: {
      type: Number,
      default: 3e3
    },
    // By default, Toast has the bigest z-index among popoup-based components.
    zIndex: {
      type: Number,
      default: 900
    }
  },
  computed: {
    iconClass() {
      const e = [];
      this.icon && e.push(this.icon);
      const t = {
        correct: "cubeic-right",
        error: "cubeic-wrong",
        warn: "cubeic-warn"
      }[this.type];
      return t && e.push(t), e;
    },
    isLoading() {
      return this.type === "loading";
    }
  },
  methods: {
    maskClick() {
      this.maskClosable && this.hide();
    },
    show() {
      this.isVisible = !0, this.clearTimer(), this.$nextTick(() => {
        this.time !== 0 && (this.timer = setTimeout(() => {
          this.hide(), this.$emit(p);
        }, this.time));
      });
    },
    hide() {
      this.isVisible = !1, this.clearTimer();
    },
    clearTimer() {
      clearTimeout(this.timer), this.timer = null;
    }
  },
  components: {
    CubePopup: _,
    CubeLoading: o
  }
}, w = ["innerHTML"];
function E(e, n, t, z, B, i) {
  const h = c("cube-loading"), f = c("cube-popup");
  return a(), r(g, { name: "cube-toast-fade" }, {
    default: m(() => [
      l(C(f, {
        type: "toast",
        "z-index": t.zIndex,
        mask: t.mask,
        onMaskClick: i.maskClick
      }, {
        default: m(() => [
          !i.isLoading && i.iconClass.length ? (a(), x("i", {
            key: 0,
            class: y(["cube-toast-icon", i.iconClass])
          }, null, 2)) : u("", !0),
          i.isLoading ? (a(), r(h, { key: 1 })) : u("", !0),
          l(T("div", {
            class: "cube-toast-tip",
            innerHTML: t.txt
          }, null, 8, w), [
            [d, t.txt]
          ])
        ]),
        _: 1
      }, 8, ["z-index", "mask", "onMaskClick"]), [
        [d, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const s = /* @__PURE__ */ M(v, [["render", E]]);
function V(e, n) {
  L(e, n, ["timeout"], !0);
}
s.install = function(e) {
  e.component(o.name, o), e.component(s.name, s), V(e, s);
};
s.Loading = o;
export {
  s as default
};
