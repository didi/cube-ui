import "./css.mjs";
import { B as a } from "../button-10f1417a.mjs";
import { C as u } from "../checkbox-e64fe430.mjs";
import { resolveComponent as m, openBlock as o, createElementBlock as n, createVNode as A, withCtx as E, createBlock as b, createElementVNode as f, withDirectives as N, Fragment as h, renderList as k, vShow as v, createCommentVNode as w } from "vue";
import { _ as x } from "../_plugin-vue_export-helper-dad06003.mjs";
const T = "cube-toolbar-item", V = {
  name: T,
  components: {
    CubeButton: a,
    CubeCheckbox: u
  },
  props: {
    action: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, $ = { class: "cube-toolbar-item border-right-1px" }, g = ["innerHTML"], B = /* @__PURE__ */ f("i", { class: "cube-toolbar-down" }, null, -1);
function O(e, _, t, y, d, i) {
  const l = m("cube-checkbox"), c = m("cube-button");
  return o(), n("li", $, [
    A(c, {
      icon: t.action.icon
    }, {
      default: E(() => [
        t.action.type == "checkbox" ? (o(), b(l, {
          key: 0,
          class: "cube-toolbar-chb",
          modelValue: t.action.checked,
          "onUpdate:modelValue": _[0] || (_[0] = (r) => t.action.checked = r),
          label: t.action.text
        }, null, 8, ["modelValue", "label"])) : (o(), n("span", {
          key: 1,
          innerHTML: t.action.text
        }, null, 8, g))
      ]),
      _: 1
    }, 8, ["icon"]),
    B
  ]);
}
const L = /* @__PURE__ */ x(V, [["render", O]]);
const I = "cube-toolbar", C = "click", p = "more-click", H = {
  name: I,
  components: {
    CubeToolbarItem: L
  },
  emits: [C, p],
  props: {
    actions: {
      type: Array,
      default() {
        return [];
      }
    },
    moreActions: {
      type: Array
    }
  },
  data() {
    return {
      showMore: !1
    };
  },
  computed: {
    basicActions() {
      const e = this.actions.slice();
      return this.moreActions && e.push({
        icon: "cubeic-more",
        $cubeMore: !0
      }), e;
    }
  },
  methods: {
    itemClick(e) {
      e.$cubeMore ? (this.showMore = !this.showMore, this.$emit(p, this.showMore)) : this.$emit(C, e);
    }
  }
}, K = { class: "cube-toolbar" }, P = {
  key: 0,
  class: "cube-toolbar-group cube-toolbar-group-more"
}, j = { class: "cube-toolbar-group" };
function D(e, _, t, y, d, i) {
  const l = m("cube-toolbar-item");
  return o(), n("div", K, [
    t.moreActions ? N((o(), n("ul", P, [
      (o(!0), n(h, null, k(t.moreActions, (c, r) => (o(), b(l, {
        key: r,
        action: c,
        onClick: (M) => i.itemClick(c)
      }, null, 8, ["action", "onClick"]))), 128))
    ], 512)), [
      [v, d.showMore]
    ]) : w("", !0),
    f("ul", j, [
      (o(!0), n(h, null, k(i.basicActions, (c, r) => (o(), b(l, {
        key: r,
        action: c,
        onClick: (M) => i.itemClick(c)
      }, null, 8, ["action", "onClick"]))), 128))
    ])
  ]);
}
const s = /* @__PURE__ */ x(H, [["render", D]]);
s.install = function(e) {
  e.component(a.name, a), e.component(u.name, u), e.component(s.name, s);
};
s.Button = a;
s.Checkbox = u;
export {
  s as default
};
