import { camelize as b, h, createVNode as f, render as m, isVNode as v, mergeProps as x } from "vue";
let y = 0;
const p = [], V = (r, e, o = null, a = null) => {
  let t = e, c = o ? o(h) : null;
  const n = document ? document.createElement("div") : null, _ = "cube_create_component_" + y++, i = f({
    render() {
      return f(r, {
        ...t
        // ref: '$cre'
      }, c);
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
    t = { ...d ? t : {}, ...u }, c = s ? { ...c || {}, ...s(h) } : null, i.component.proxy.$forceUpdate();
  }, document.body.appendChild(n)), l;
};
function P(r) {
  if (!!this && !!this._ && v(this._.vnode)) {
    const o = this && this._ && v(this._.vnode) ? this._.vnode.props : null;
    this._.vnode.props = x(o || {}, {
      onVnodeBeforeUnmount() {
        r.$remove();
      }
    });
  }
}
function U(r, e, o, a) {
  e.$create = r.config.globalProperties[`$create${b(e.name.replace("cube-", "")).replace(/^\w/, (t) => t.toUpperCase())}`] = function(t, c = null) {
    if (a && e._instance)
      return t && e._instance.$updateProps(t, c, !1), P.call(this, e._instance), e._instance;
    const n = e._instance = V(e, t, c, this ? this._.appContext : null);
    return P.call(this, n), n;
  };
}
export {
  U as c
};
