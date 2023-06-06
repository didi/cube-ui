const c = 864e5, g = 36e5, l = 6e4;
function i(e, t, n, r) {
  const s = {
    year: "(Y+)",
    month: "(M+)",
    date: "(D+)",
    hour: "(h+)",
    minute: "(m+)",
    second: "(s+)",
    quarter: "(q+)",
    millisecond: "(S)"
  };
  if (new RegExp(s[e], r).test(t)) {
    const a = e === "year" ? n.toString().substr(4 - RegExp.$1.length) : RegExp.$1.length === 1 ? n : u(n);
    t = t.replace(RegExp.$1, a);
  }
  return t;
}
function u(e) {
  return ("00" + e).substr(("" + e).length);
}
function p(e, t) {
  const n = {
    year: {
      value: e.getFullYear(),
      regExpAttributes: "i"
    },
    month: {
      value: e.getMonth() + 1
    },
    date: {
      value: e.getDate(),
      regExpAttributes: "i"
    },
    hour: {
      value: e.getHours(),
      regExpAttributes: "i"
    },
    minute: {
      value: e.getMinutes()
    },
    second: {
      value: e.getSeconds()
    },
    quarter: {
      value: Math.floor((e.getMonth() + 3) / 3),
      regExpAttributes: "i"
    },
    millisecond: {
      value: e.getMilliseconds()
    }
  };
  for (const r in n)
    t = i(r, t, n[r].value, n[r].regExpAttributes);
  return t;
}
function o(e) {
  const t = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate();
  return +/* @__PURE__ */ new Date(t + "/" + n + "/" + r + " 00:00:00");
}
function M(e, t) {
  return Math.floor((o(e) - o(t)) / 864e5);
}
function f() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
function E(e, t) {
  let n = 30;
  return [1, 3, 5, 7, 8, 10, 12].indexOf(e) > -1 ? n = 31 : e === 2 && (n = !t || !(t % 400) || !(t % 4) && t % 100 ? 29 : 28), n;
}
export {
  c as D,
  g as H,
  l as M,
  p as a,
  o as b,
  E as c,
  M as d,
  i as f,
  f as g,
  u as p
};
