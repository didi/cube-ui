import { a as o } from "./env-c05026db.mjs";
function s(t, r) {
  return new RegExp("(^|\\s)" + r + "(\\s|$)").test(t.className);
}
function c(t, r) {
  if (s(t, r))
    return;
  const e = t.className.split(" ");
  e.push(r), t.className = e.join(" ");
}
function d(t, r) {
  if (!s(t, r))
    return;
  const e = new RegExp("(^|\\s)" + r + "(\\s|$)", "g");
  t.className = t.className.replace(e, " ");
}
function m(t, r) {
  const e = "data-";
  return t.getAttribute(e + r);
}
function l(t) {
  return {
    top: t.offsetTop,
    left: t.offsetLeft,
    width: t.offsetWidth,
    height: t.offsetHeight
  };
}
let n = (() => {
  if (!o)
    return !1;
  let t = document.createElement("div").style, r = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (let e in r)
    if (t[r[e]] !== void 0)
      return e;
  return !1;
})();
function p(t) {
  return n === !1 ? !1 : n === "standard" ? t === "transitionEnd" ? "transitionend" : t : n + t.charAt(0).toUpperCase() + t.substr(1);
}
function g(t, r) {
  let e = t.target;
  for (; e && !s(e, r); ) {
    if (e === t.currentTarget)
      return null;
    e = e.parentNode;
  }
  return e;
}
function h(t, r, { type: e = "Event", bubbles: f = !0, cancelable: i = !0 } = {}) {
  const a = document.createEvent(e);
  a.initEvent(r, f, i), t.dispatchEvent(a);
}
export {
  c as a,
  m as b,
  l as c,
  h as d,
  g,
  p,
  d as r
};
