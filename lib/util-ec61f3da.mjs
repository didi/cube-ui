function h(e, t) {
  if (e.findIndex)
    return e.findIndex(t);
  let n = -1;
  return e.some(function(s, i, r) {
    const o = t.call(this, s, i, r);
    if (o)
      return n = i, o;
  }), n;
}
function d(e, t) {
  for (let n in t)
    !e[n] || typeof e[n] != "object" ? e[n] = t[n] : d(e[n], t[n]);
}
function y(e) {
  return function(...n) {
    typeof n[0] == "string" && (n[0] = {
      [n[0]]: n[1]
    }), d(e, n[0]);
  };
}
function u(e) {
  const t = Object.prototype.toString;
  return function(s) {
    return t.call(s) === `[object ${e}]`;
  };
}
const c = {
  _set(e, t, n) {
    e[t] = n;
  },
  string(e, t) {
    c._set(e, t, "");
  },
  number(e, t) {
    c._set(e, t, 0);
  },
  boolean(e, t) {
    c._set(e, t, !1);
  },
  object(e, t, n) {
    Array.isArray(n) ? c._set(e, t, []) : c._set(e, t, {});
  }
};
function p(e, t, n) {
  if (n !== void 0)
    return c._set(e, t, n);
  if (t) {
    const s = e[t], i = c[typeof s];
    i && i(e, t, s);
  } else
    Object.keys(e).forEach((s) => {
      p(e, s);
    });
}
function _(e, t) {
  let n = 0, s = [];
  const i = e.length;
  if (!i)
    return t(s);
  e.forEach((r, o) => {
    r((l) => {
      n += 1, s[o] = l, n === i && t(s);
    });
  });
}
function g(e) {
  let t;
  if (typeof window.Promise < "u") {
    const n = e;
    t = new window.Promise((s) => {
      e = (i) => {
        n && n(i), s(i);
      };
    }), t.resolve = e;
  }
  return t;
}
function x(e, t, n, s) {
  let i, r = s;
  const o = function(f, a) {
    i = null, a && (r = e.apply(f, a));
  }, l = function(...f) {
    if (i && clearTimeout(i), n) {
      const a = !i;
      i = setTimeout(o, t), a && (r = e.apply(this, f));
    } else
      i = setTimeout(() => {
        o(this, f);
      }, t);
    return r;
  };
  return l.cancel = function() {
    clearTimeout(i), i = null;
  }, l;
}
function b(e, t = "") {
  const n = t.split(".");
  let s = e;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (m(s[r])) {
      s = "";
      break;
    } else
      s = s[r];
  }
  return s;
}
function A(e) {
  const n = /os (\d\d?_\d(_\d)?)/.exec(e);
  if (!n)
    return null;
  const s = n[1].split("_").map(function(i) {
    return parseInt(i, 10);
  });
  return {
    major: s[0],
    minor: s[1],
    patch: s[2] || 0
  };
}
const T = u("Function"), m = u("Undefined"), I = u("Array"), w = u("String"), P = u("Number");
export {
  x as a,
  P as b,
  g as c,
  d,
  y as e,
  h as f,
  A as g,
  T as h,
  m as i,
  _ as j,
  w as k,
  I as l,
  b as p,
  p as r
};
