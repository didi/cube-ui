import "./css.mjs";
import { openBlock as g, createElementBlock as S, renderSlot as R, createElementVNode as c, normalizeClass as O, normalizeStyle as Q, withModifiers as W, toDisplayString as Z, resolveComponent as M, Fragment as ee, renderList as te, createBlock as se, withDirectives as ne, createVNode as oe, vShow as ie } from "vue";
const J = {
  props: {
    multiple: {
      type: Boolean,
      default: !0
    },
    accept: {
      type: String,
      default: "image/*"
    }
  }
};
const F = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, le = "cube-upload-btn", re = {
  name: le,
  mixins: [J],
  methods: {
    changeHandler(e) {
      const t = e.currentTarget, o = t.files;
      o && (this.$parent.addFiles(o), t.value = null);
    }
  }
}, ae = { class: "cube-upload-btn" }, ue = /* @__PURE__ */ c("div", { class: "cube-upload-btn-def" }, [
  /* @__PURE__ */ c("i")
], -1), ce = ["multiple", "accept"];
function de(e, t, o, l, n, s) {
  return g(), S("div", ae, [
    R(e.$slots, "default", {}, () => [
      ue
    ]),
    c("input", {
      class: "cube-upload-input",
      type: "file",
      onChange: t[0] || (t[0] = (...i) => s.changeHandler && s.changeHandler(...i)),
      multiple: e.multiple,
      accept: e.accept
    }, null, 40, ce)
  ]);
}
const w = /* @__PURE__ */ F(re, [["render", de]]), X = typeof window < "u", I = X && navigator.userAgent.toLowerCase();
I && I.indexOf("android") > 0;
const $ = X ? window.URL || window.webkitURL || window.mozURL : null, k = "ready", x = "uploading", f = "error", y = "success";
function pe(e, t, o, l) {
  const n = [], s = e.length;
  let i = 0;
  for (let u = 0; u < s; u++)
    fe(e[u], u, t, function(d, h) {
      if (i++, n[h] = d, o(d, h), i === s)
        return l(n);
    });
}
function fe(e, t, o, l) {
  o(e, function(n) {
    const s = he(n.name, n.size, k, 0, n);
    l(s, t);
  });
}
function he(e = "", t = 0, o = "", l = 0, n = null) {
  const s = n && n.base64 || "", i = s ? "" : me(n);
  return {
    name: e,
    size: t,
    url: i,
    base64: s,
    status: o,
    progress: l,
    file: n
  };
}
function me(e) {
  return e && $ ? $.createObjectURL(e) : "";
}
function U(e, ...t) {
  return typeof e == "function" ? e.apply(this, t) : e;
}
const _e = "cube-upload-file", ge = {
  success: "cubeic-right",
  error: "cubeic-warn"
}, B = "click", be = {
  name: _e,
  props: {
    file: {
      type: Object,
      required: !0
    }
  },
  emits: [B],
  computed: {
    fileCls() {
      return `cube-upload-file_${this.file.status}`;
    },
    fileStatusCls() {
      const e = this.file, t = e.status;
      if (e.progress >= 0.01 || t === y || t === f)
        return "cube-upload-file_stat";
    },
    fileStyle() {
      const e = this.file.url || this.file.base64;
      if (e)
        return {
          "background-image": `url("${e}")`
        };
    },
    statusCls() {
      const e = this.file.status;
      return ge[e];
    },
    fileProgress() {
      return this.statusCls ? "100%" : `${Math.min(Math.floor(this.file.progress * 100), 99)}%`;
    }
  },
  methods: {
    clickHandler() {
      this.$emit(B, this.file);
    },
    removeFile() {
      this.$parent.removeFile(this.file);
    }
  }
}, Se = { class: "cube-upload-file-progress" };
function we(e, t, o, l, n, s) {
  return g(), S("div", {
    class: O(["cube-upload-file", s.fileCls]),
    onClick: t[1] || (t[1] = (...i) => s.clickHandler && s.clickHandler(...i))
  }, [
    R(e.$slots, "default", {
      imgStyle: s.fileStyle,
      progress: s.fileProgress
    }, () => [
      c("div", {
        class: "cube-upload-file-def",
        style: Q(s.fileStyle)
      }, [
        c("i", {
          class: "cubeic-wrong",
          onClick: t[0] || (t[0] = W((...i) => s.removeFile && s.removeFile(...i), ["stop"]))
        }),
        c("div", {
          class: O(["cube-upload-file-state", s.fileStatusCls])
        }, [
          c("i", {
            class: O(["cube-upload-file-status", s.statusCls])
          }, null, 2),
          c("span", Se, Z(s.fileProgress), 1)
        ], 2)
      ], 4)
    ])
  ], 2);
}
const E = /* @__PURE__ */ F(be, [["render", we]]);
function ye(e, t, o) {
  const {
    target: l,
    headers: n = {},
    data: s = {},
    fileName: i = "file",
    withCredentials: u,
    timeout: d,
    prop: h = "file",
    progressInterval: L = 100,
    checkSuccess: T = function() {
      return !0;
    }
  } = t, Y = U(l, e);
  e.progress = 0, e.status = x;
  const a = new window.XMLHttpRequest();
  e._xhr = a;
  let m = 0;
  if (a.upload) {
    let r = Date.now();
    a.upload.onprogress = function(p) {
      if (p.total > 0)
        if (m) {
          clearTimeout(m);
          const V = Date.now() - r;
          V >= L ? N() : m = setTimeout(N, V);
        } else
          N(), m = 1;
      function N() {
        e.progress = p.loaded / p.total, r = Date.now();
      }
    };
  }
  const C = new window.FormData(), A = U(s, e);
  Object.keys(A).forEach((r) => {
    C.append(r, A[r]);
  }), C.append(i, e[h]), a.onload = function() {
    if (a.status < 200 || a.status >= 300) {
      _(f);
      return;
    }
    v();
    const r = e.response;
    if (T.length <= 2) {
      const p = T(r, e);
      _(p ? y : f);
    } else
      T(r, e, (p) => {
        _(p ? y : f);
      });
  }, a.onerror = function() {
    v(), _(f);
  }, a.ontimeout = function() {
    v(), _(f);
  }, a.open("POST", Y, !0), u && (a.withCredentials = !0);
  const D = U(n, e);
  Object.keys(D).forEach((r) => {
    a.setRequestHeader(r, D[r]);
  }), d > 0 && (a.timeout = d), a.send(C);
  function _(r) {
    clearTimeout(m), m = 0, e.progress = 1, e.status = r, o && o(e);
  }
  function v() {
    let r = a.responseText || a.response;
    try {
      r = JSON.parse(r);
    } catch {
    }
    e.response = r, e.responseHeaders = a.getAllResponseHeaders();
  }
}
const Ee = "cube-upload", P = "update:modelValue", H = "files-added", j = "file-submitted", z = "file-removed", q = "file-success", K = "file-error", G = "file-click", Te = {
  name: Ee,
  mixins: [J],
  emits: [P, H, j, z, q, K, G],
  props: {
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    action: {
      type: [String, Object],
      default: ""
    },
    max: {
      type: Number,
      default: 10
    },
    auto: {
      type: Boolean,
      default: !0
    },
    simultaneousUploads: {
      type: Number,
      default: 1
    },
    processFile: {
      type: Function,
      default: function(e, t) {
        t(e);
      }
    }
  },
  data() {
    return {
      files: this.modelValue,
      paused: !this.auto
    };
  },
  computed: {
    actionOptions() {
      const e = this.action;
      return typeof e == "string" ? e ? {
        target: e
      } : null : e;
    },
    isShowBtn() {
      return this.files.length < this.max;
    }
  },
  watch: {
    modelValue(e) {
      this.files = e;
    },
    files(e) {
      this.$emit(P, e);
    }
  },
  methods: {
    addFiles(e) {
      this.$emit(H, e);
      const t = this.files.length, o = [], l = this.max - t;
      let n = 0, s = e[n];
      for (; o.length < l && s; )
        s.ignore || o.push(s), s = e[++n];
      pe(o, this.processFile, (i, u) => {
        this.files.push(i), this.$emit(j, i);
      }, () => {
        this.$nextTick(() => {
          this.upload();
        });
      });
    },
    removeFile(e) {
      this.$emit(z, e), e._xhr && e._xhr.abort(), e.url && $.revokeObjectURL(e.url);
      const t = this.files.indexOf(e);
      this.files.splice(t, 1), this.upload();
    },
    fileClick(e, t) {
      this.$emit(G, e, t);
    },
    upload(e) {
      const t = this.actionOptions;
      if (this.paused || !t)
        return;
      const o = this.files.length;
      let l = 0, n = 0;
      for (; n < o && l < this.simultaneousUploads; ) {
        const s = this.files[n], i = s.status;
        i === k || e && i === f && s._retryId !== this.retryId ? (ye(s, t, (u) => {
          i === f && (u._retryId = this.retryId), this.$emit(u.status === y ? q : K, u), this.upload(e);
        }), l++) : i === x && l++, n++;
      }
    },
    start() {
      this.paused = !1, this.upload();
    },
    pause() {
      this.paused = !0, this.files.forEach((e) => {
        e.status === x && (e._xhr.abort(), e.status = k);
      });
    },
    retry() {
      this.retryId = Date.now(), this.paused = !1, this.upload(!0);
    }
  },
  components: {
    UploadBtn: w,
    UploadFile: E
  }
}, Ce = { class: "cube-upload" }, ve = { class: "cube-upload-def clear-fix" };
function Ne(e, t, o, l, n, s) {
  const i = M("upload-file"), u = M("upload-btn");
  return g(), S("div", Ce, [
    R(e.$slots, "default", {}, () => [
      c("div", ve, [
        (g(!0), S(ee, null, te(n.files, (d, h) => (g(), se(i, {
          file: d,
          key: h,
          onClick: (L) => s.fileClick(d, h)
        }, null, 8, ["file", "onClick"]))), 128)),
        ne(oe(u, {
          multiple: e.multiple,
          accept: e.accept
        }, null, 8, ["multiple", "accept"]), [
          [ie, s.isShowBtn]
        ])
      ])
    ])
  ]);
}
const b = /* @__PURE__ */ F(Te, [["render", Ne]]);
b.install = function(e) {
  e.component(b.name, b), e.component(w.name, w), e.component(E.name, E);
};
b.Btn = w;
b.File = E;
export {
  b as default
};
