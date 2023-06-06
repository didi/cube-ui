import "./css.mjs";
import { camelize as b, h as f, createVNode as h, render as m, isVNode as v, mergeProps as x } from "vue";
let y = 0;
const p = [], V = (r, e, c = null, a = null) => {
  let t = e, o = c ? c(f) : null;
  const n = document ? document.createElement("div") : null, _ = "cube_create_component_" + y++, i = h({
    render() {
      return h(r, {
        ...t
        // ref: '$cre'
      }, o);
    }
  }, { id: _ });
  a && (i.appContext = a), p.push(i);
  let l;
  return n && (m(i, n), l = i.component.subTree.component.proxy, l.$remove = function(u) {
    m(null, n), r._instance = null, u && u(), n && document.body.contains(n) && document.body.removeChild(n);
    const s = p.findIndex((d) => {
      const { id: $ } = d.props;
      return _ === $;
    });
    ~s && p.splice(s, 1);
  }, l.$updateProps = function(u, s, d = !0) {
    t = { ...d ? t : {}, ...u }, o = s ? { ...o || {}, ...s(f) } : null, i.component.proxy.$forceUpdate();
  }, document.body.appendChild(n)), l;
};
function P(r) {
  if (!!this && !!this._ && v(this._.vnode)) {
    const c = this && this._ && v(this._.vnode) ? this._.vnode.props : null;
    this._.vnode.props = x(c || {}, {
      onVnodeBeforeUnmount() {
        r.$remove();
      }
    });
  }
}
function I(r, e, c, a) {
  e.$create = r.config.globalProperties[`$create${b(e.name.replace("cube-", "")).replace(/^\w/, (t) => t.toUpperCase())}`] = function(t, o = null) {
    if (a && e._instance)
      return t && e._instance.$updateProps(t, o, !1), P.call(this, e._instance), e._instance;
    const n = e._instance = V(e, t, o, this ? this._.appContext : null);
    return P.call(this, n), n;
  };
}
export {
  I as default
};
