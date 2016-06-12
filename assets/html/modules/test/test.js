/* Zepto 1.1.4 - zepto event ajax form touch detect fx fx_methods data selector - zeptojs.com/license */

/*!
 * artTemplate - Template Engine
 * https://github.com/aui/artTemplate
 */

var requirejs, require, define; (function(e) {
                                 function h(e, t) {
                                 return f.call(e, t)
                                 }
                                 function p(e, t) {
                                 var n, r, i, s, o, a, f, l, h, p, d, v = t && t.split("/"),
                                 m = u.map,
                                 g = m && m["*"] || {};
                                 if (e && e.charAt(0) === ".") if (t) {
                                 v = v.slice(0, v.length - 1),
                                 e = e.split("/"),
                                 o = e.length - 1,
                                 u.nodeIdCompat && c.test(e[o]) && (e[o] = e[o].replace(c, "")),
                                 e = v.concat(e);
                                 for (h = 0; h < e.length; h += 1) {
                                 d = e[h];
                                 if (d === ".") e.splice(h, 1),
                                 h -= 1;
                                 else if (d === "..") {
                                 if (h === 1 && (e[2] === ".." || e[0] === "..")) break;
                                 h > 0 && (e.splice(h - 1, 2), h -= 2)
                                 }
                                 }
                                 e = e.join("/")
                                 } else e.indexOf("./") === 0 && (e = e.substring(2));
                                 if ((v || g) && m) {
                                 n = e.split("/");
                                 for (h = n.length; h > 0; h -= 1) {
                                 r = n.slice(0, h).join("/");
                                 if (v) for (p = v.length; p > 0; p -= 1) {
                                 i = m[v.slice(0, p).join("/")];
                                 if (i) {
                                 i = i[r];
                                 if (i) {
                                 s = i,
                                 a = h;
                                 break
                                 }
                                 }
                                 }
                                 if (s) break; ! f && g && g[r] && (f = g[r], l = h)
                                 } ! s && f && (s = f, a = l),
                                 s && (n.splice(0, a, s), e = n.join("/"))
                                 }
                                 return e
                                 }
                                 function d(t, r) {
                                 return function() {
                                 return n.apply(e, l.call(arguments, 0).concat([t, r]))
                                 }
                                 }
                                 function v(e) {
                                 return function(t) {
                                 return p(t, e)
                                 }
                                 }
                                 function m(e) {
                                 return function(t) {
                                 s[e] = t
                                 }
                                 }
                                 function g(n) {
                                 if (h(o, n)) {
                                 var r = o[n];
                                 delete o[n],
                                 a[n] = !0,
                                 t.apply(e, r)
                                 }
                                 if (!h(s, n) && !h(a, n)) throw new Error("No " + n);
                                 return s[n]
                                 }
                                 function y(e) {
                                 var t, n = e ? e.indexOf("!") : -1;
                                 return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)),
                                 [t, e]
                                 }
                                 function b(e) {
                                 return function() {
                                 return u && u.config && u.config[e] || {}
                                 }
                                 }
                                 var t, n, r, i, s = {},
                                 o = {},
                                 u = {},
                                 a = {},
                                 f = Object.prototype.hasOwnProperty,
                                 l = [].slice,
                                 c = /\.js$/;
                                 r = function(e, t) {
                                 var n, r = y(e),
                                 i = r[0];
                                 return e = r[1],
                                 i && (i = p(i, t), n = g(i)),
                                 i ? n && n.normalize ? e = n.normalize(e, v(t)) : e = p(e, t) : (e = p(e, t), r = y(e), i = r[0], e = r[1], i && (n = g(i))),
                                 {
                                 f: i ? i + "!" + e: e,
                                 n: e,
                                 pr: i,
                                 p: n
                                 }
                                 },
                                 i = {
                                 require: function(e) {
                                 return d(e)
                                 },
                                 exports: function(e) {
                                 var t = s[e];
                                 return typeof t != "undefined" ? t: s[e] = {}
                                 },
                                 module: function(e) {
                                 return {
                                 id: e,
                                 uri: "",
                                 exports: s[e],
                                 config: b(e)
                                 }
                                 }
                                 },
                                 t = function(t, n, u, f) {
                                 var l, c, p, v, y, b = [],
                                 w = typeof u,
                                 E;
                                 f = f || t;
                                 if (w === "undefined" || w === "function") {
                                 n = !n.length && u.length ? ["require", "exports", "module"] : n;
                                 for (y = 0; y < n.length; y += 1) {
                                 v = r(n[y], f),
                                 c = v.f;
                                 if (c === "require") b[y] = i.require(t);
                                 else if (c === "exports") b[y] = i.exports(t),
                                 E = !0;
                                 else if (c === "module") l = b[y] = i.module(t);
                                 else if (h(s, c) || h(o, c) || h(a, c)) b[y] = g(c);
                                 else {
                                 if (!v.p) throw new Error(t + " missing " + c);
                                 v.p.load(v.n, d(f, !0), m(c), {}),
                                 b[y] = s[c]
                                 }
                                 }
                                 p = u ? u.apply(s[t], b) : undefined;
                                 if (t) if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
                                 else if (p !== e || !E) s[t] = p
                                 } else t && (s[t] = u)
                                 },
                                 requirejs = require = n = function(s, o, a, f, l) {
                                 if (typeof s == "string") return i[s] ? i[s](o) : g(r(s, o).f);
                                 if (!s.splice) {
                                 u = s,
                                 u.deps && n(u.deps, u.callback);
                                 if (!o) return;
                                 o.splice ? (s = o, o = a, a = null) : s = e
                                 }
                                 return o = o ||
                                 function() {},
                                 typeof a == "function" && (a = f, f = l),
                                 f ? t(e, s, o, a) : setTimeout(function() {
                                                                t(e, s, o, a)
                                                                },
                                                                4),
                                 n
                                 },
                                 n.config = function(e) {
                                 return n(e)
                                 },
                                 requirejs._defined = s,
                                 define = function(e, t, n) {
                                 t.splice || (n = t, t = []),
                                 !h(s, e) && !h(o, e) && (o[e] = [e, t, n])
                                 },
                                 define.amd = {
                                 jQuery: !0
                                 }
                                 })(),
define("almond",
       function() {});
var Zepto = function() {
    function e(e) {
        return null == e ? String(e) : J[K.call(e)] || "object"
    }
    function t(t) {
        return "function" == e(t)
    }
    function n(e) {
        return null != e && e == e.window
    }
    function r(e) {
        return null != e && e.nodeType == e.DOCUMENT_NODE
    }
    function i(t) {
        return "object" == e(t)
    }
    function s(e) {
        return i(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
    }
    function o(e) {
        return "number" == typeof e.length
    }
    function u(e) {
        return O.call(e,
                      function(e) {
                      return null != e
                      })
    }
    function a(e) {
        return e.length > 0 ? T.fn.concat.apply([], e) : e
    }
    function f(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function l(e) {
        return e in P ? P[e] : P[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
    }
    function c(e, t) {
        return "number" != typeof t || H[f(e)] ? t: t + "px"
    }
    function h(e) {
        var t, n;
        return D[e] || (t = _.createElement(e), _.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), D[e] = n),
        D[e]
    }
    function p(e) {
        return "children" in e ? M.call(e.children) : T.map(e.childNodes,
                                                            function(e) {
                                                            return 1 == e.nodeType ? e: void 0
                                                            })
    }
    function d(e, t) {
        var n, r = e ? e.length: 0;
        for (n = 0; r > n; n++) this[n] = e[n];
        this.length = r,
        this.selector = t || ""
    }
    function v(e, t, n) {
        for (x in t) n && (s(t[x]) || Z(t[x])) ? (s(t[x]) && !s(e[x]) && (e[x] = {}), Z(t[x]) && !Z(e[x]) && (e[x] = []), v(e[x], t[x], n)) : t[x] !== S && (e[x] = t[x])
            }
    function m(e, t) {
        return null == t ? T(e) : T(e).filter(t)
    }
    function g(e, n, r, i) {
        return t(n) ? n.call(e, r, i) : n
    }
    function y(e, t, n) {
        null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
    }
    function b(e, t) {
        var n = e.className || "",
        r = n && n.baseVal !== S;
        return t === S ? r ? n.baseVal: n: void(r ? n.baseVal = t: e.className = t)
    }
    function w(e) {
        try {
            return e ? "true" == e || ("false" == e ? !1 : "null" == e ? null: +e + "" == e ? +e: /^[\[\{]/.test(e) ? T.parseJSON(e) : e) : e
                                                                                                     } catch(t) {
                                                                                                     return e
                                                                                                     }
                                                                                                     }
                                                                                                     function E(e, t) {
                                                                                                     t(e);
                                                                                                     for (var n = 0,
                                                                                                          r = e.childNodes.length; r > n; n++) E(e.childNodes[n], t)
                                                                                                     }
                                                                                                     var S, x, T, N, C, k, L = [],
                                                                                                     A = L.concat,
                                                                                                     O = L.filter,
                                                                                                     M = L.slice,
                                                                                                     _ = window.document,
                                                                                                     D = {},
                                                                                                     P = {},
                                                                                                     H = {
                                                                                                     "column-count": 1,
                                                                                                     columns: 1,
                                                                                                     "font-weight": 1,
                                                                                                     "line-height": 1,
                                                                                                     opacity: 1,
                                                                                                     "z-index": 1,
                                                                                                     zoom: 1
                                                                                                     },
                                                                                                     B = /^\s*<(\w+|!)[^>]*>/,
                                                                                                     j = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                                                                                                     F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                                                                                                     I = /^(?:body|html)$/i,
                                                                                                     q = /([A-Z])/g,
                                                                                                     R = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                                                                                                     U = ["after", "prepend", "before", "append"],
                                                                                                     z = _.createElement("table"),
                                                                                                     W = _.createElement("tr"),
                                                                                                     X = {
                                                                                                     tr: _.createElement("tbody"),
                                                                                                     tbody: z,
                                                                                                     thead: z,
                                                                                                     tfoot: z,
                                                                                                     td: W,
                                                                                                     th: W,
                                                                                                     "*": _.createElement("div")
                                                                                                     },
                                                                                                     V = /complete|loaded|interactive/,
                                                                                                     $ = /^[\w-]*$/,
                                                                                                     J = {},
                                                                                                     K = J.toString,
                                                                                                     Q = {},
                                                                                                     G = _.createElement("div"),
                                                                                                     Y = {
                                                                                                     tabindex: "tabIndex",
                                                                                                     readonly: "readOnly",
                                                                                                     "for": "htmlFor",
                                                                                                     "class": "className",
                                                                                                     maxlength: "maxLength",
                                                                                                     cellspacing: "cellSpacing",
                                                                                                     cellpadding: "cellPadding",
                                                                                                     rowspan: "rowSpan",
                                                                                                     colspan: "colSpan",
                                                                                                     usemap: "useMap",
                                                                                                     frameborder: "frameBorder",
                                                                                                     contenteditable: "contentEditable"
                                                                                                     },
                                                                                                     Z = Array.isArray ||
                                                                                                     function(e) {
                                                                                                     return e instanceof Array
                                                                                                     };
                                                                                                     return Q.matches = function(e, t) {
                                                                                                     if (!t || !e || 1 !== e.nodeType) return ! 1;
                                                                                                     var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                                                                                                     if (n) return n.call(e, t);
                                                                                                     var r, i = e.parentNode,
                                                                                                     s = !i;
                                                                                                     return s && (i = G).appendChild(e),
                                                                                                     r = ~Q.qsa(i, t).indexOf(e),
                                                                                                     s && G.removeChild(e),
                                                                                                     r
                                                                                                     },
                                                                                                     C = function(e) {
                                                                                                     return e.replace(/-+(.)?/g,
                                                                                                                      function(e, t) {
                                                                                                                      return t ? t.toUpperCase() : ""
                                                                                                                      })
                                                                                                     },
                                                                                                     k = function(e) {
                                                                                                     return O.call(e,
                                                                                                                   function(t, n) {
                                                                                                                   return e.indexOf(t) == n
                                                                                                                   })
                                                                                                     },
                                                                                                     Q.fragment = function(e, t, n) {
                                                                                                     var r, i, o;
                                                                                                     return j.test(e) && (r = T(_.createElement(RegExp.$1))),
                                                                                                     r || (e.replace && (e = e.replace(F, "<$1></$2>")), t === S && (t = B.test(e) && RegExp.$1), t in X || (t = "*"), o = X[t], o.innerHTML = "" + e, r = T.each(M.call(o.childNodes),
                                                                                                                                                                                                                                                                  function() {
                                                                                                                                                                                                                                                                  o.removeChild(this)
                                                                                                                                                                                                                                                                  })),
                                                                                                     s(n) && (i = T(r), T.each(n,
                                                                                                                               function(e, t) {
                                                                                                                               R.indexOf(e) > -1 ? i[e](t) : i.attr(e, t)
                                                                                                                               })),
                                                                                                     r
                                                                                                     },
                                                                                                     Q.Z = function(e, t) {
                                                                                                     return new d(e, t)
                                                                                                     },
                                                                                                     Q.isZ = function(e) {
                                                                                                     return e instanceof Q.Z
                                                                                                     },
                                                                                                     Q.init = function(e, n) {
                                                                                                     var r;
                                                                                                     if (!e) return Q.Z();
                                                                                                     if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && B.test(e)) r = Q.fragment(e, RegExp.$1, n),
                                                                                                     e = null;
                                                                                                     else {
                                                                                                     if (n !== S) return T(n).find(e);
                                                                                                     r = Q.qsa(_, e)
                                                                                                     } else {
                                                                                                     if (t(e)) return T(_).ready(e);
                                                                                                     if (Q.isZ(e)) return e;
                                                                                                     if (Z(e)) r = u(e);
                                                                                                     else if (i(e)) r = [e],
                                                                                                     e = null;
                                                                                                     else if (B.test(e)) r = Q.fragment(e.trim(), RegExp.$1, n),
                                                                                                     e = null;
                                                                                                     else {
                                                                                                     if (n !== S) return T(n).find(e);
                                                                                                     r = Q.qsa(_, e)
                                                                                                     }
                                                                                                     }
                                                                                                     return Q.Z(r, e)
                                                                                                     },
                                                                                                     T = function(e, t) {
                                                                                                     return Q.init(e, t)
                                                                                                     },
                                                                                                     T.extend = function(e) {
                                                                                                     var t, n = M.call(arguments, 1);
                                                                                                     return "boolean" == typeof e && (t = e, e = n.shift()),
                                                                                                     n.forEach(function(n) {
                                                                                                               v(e, n, t)
                                                                                                               }),
                                                                                                     e
                                                                                                     },
                                                                                                     Q.qsa = function(e, t) {
                                                                                                     var n, r = "#" == t[0],
                                                                                                     i = !r && "." == t[0],
                                                                                                     s = r || i ? t.slice(1) : t,
                                                                                                     o = $.test(s);
                                                                                                     return e.getElementById && o && r ? (n = e.getElementById(s)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : M.call(o && !r && e.getElementsByClassName ? i ? e.getElementsByClassName(s) : e.getElementsByTagName(t) : e.querySelectorAll(t))
                                                                                                     },
                                                                                                     T.contains = _.documentElement.contains ?
                                                                                                     function(e, t) {
                                                                                                     return e !== t && e.contains(t)
                                                                                                     }: function(e, t) {
                                                                                                     for (; t && (t = t.parentNode);) if (t === e) return ! 0;
                                                                                                     return ! 1
                                                                                                     },
                                                                                                     T.type = e,
                                                                                                     T.isFunction = t,
                                                                                                     T.isWindow = n,
                                                                                                     T.isArray = Z,
                                                                                                     T.isPlainObject = s,
                                                                                                     T.isEmptyObject = function(e) {
                                                                                                     var t;
                                                                                                     for (t in e) return ! 1;
                                                                                                     return ! 0
                                                                                                     },
                                                                                                     T.inArray = function(e, t, n) {
                                                                                                     return L.indexOf.call(t, e, n)
                                                                                                     },
                                                                                                     T.camelCase = C,
                                                                                                     T.trim = function(e) {
                                                                                                     return null == e ? "": String.prototype.trim.call(e)
                                                                                                     },
                                                                                                     T.uuid = 0,
                                                                                                     T.support = {},
                                                                                                     T.expr = {},
                                                                                                     T.noop = function() {},
                                                                                                     T.map = function(e, t) {
                                                                                                     var n, r, i, s = [];
                                                                                                     if (o(e)) for (r = 0; r < e.length; r++) n = t(e[r], r),
                                                                                                     null != n && s.push(n);
                                                                                                     else for (i in e) n = t(e[i], i),
                                                                                                     null != n && s.push(n);
                                                                                                     return a(s)
                                                                                                     },
                                                                                                     T.each = function(e, t) {
                                                                                                     var n, r;
                                                                                                     if (o(e)) {
                                                                                                     for (n = 0; n < e.length; n++) if (t.call(e[n], n, e[n]) === !1) return e
                                                                                                     } else for (r in e) if (t.call(e[r], r, e[r]) === !1) return e;
                                                                                                     return e
                                                                                                     },
                                                                                                     T.grep = function(e, t) {
                                                                                                     return O.call(e, t)
                                                                                                     },
                                                                                                     window.JSON && (T.parseJSON = JSON.parse),
                                                                                                     T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
                                                                                                            function(e, t) {
                                                                                                            J["[object " + t + "]"] = t.toLowerCase()
                                                                                                            }),
                                                                                                     T.fn = {
                                                                                                     constructor: Q.Z,
                                                                                                     length: 0,
                                                                                                     forEach: L.forEach,
                                                                                                     reduce: L.reduce,
                                                                                                     push: L.push,
                                                                                                     sort: L.sort,
                                                                                                     splice: L.splice,
                                                                                                     indexOf: L.indexOf,
                                                                                                     concat: function() {
                                                                                                     var e, t, n = [];
                                                                                                     for (e = 0; e < arguments.length; e++) t = arguments[e],
                                                                                                     n[e] = Q.isZ(t) ? t.toArray() : t;
                                                                                                     return A.apply(Q.isZ(this) ? this.toArray() : this, n)
                                                                                                     },
                                                                                                     map: function(e) {
                                                                                                     return T(T.map(this,
                                                                                                                    function(t, n) {
                                                                                                                    return e.call(t, n, t)
                                                                                                                    }))
                                                                                                     },
                                                                                                     slice: function() {
                                                                                                     return T(M.apply(this, arguments))
                                                                                                     },
                                                                                                     ready: function(e) {
                                                                                                     return V.test(_.readyState) && _.body ? e(T) : _.addEventListener("DOMContentLoaded",
                                                                                                                                                                       function() {
                                                                                                                                                                       e(T)
                                                                                                                                                                       },
                                                                                                                                                                       !1),
                                                                                                     this
                                                                                                     },
                                                                                                     get: function(e) {
                                                                                                     return e === S ? M.call(this) : this[e >= 0 ? e: e + this.length]
                                                                                                     },
                                                                                                     toArray: function() {
                                                                                                     return this.get()
                                                                                                     },
                                                                                                     size: function() {
                                                                                                     return this.length
                                                                                                     },
                                                                                                     remove: function() {
                                                                                                     return this.each(function() {
                                                                                                                      null != this.parentNode && this.parentNode.removeChild(this)
                                                                                                                      })
                                                                                                     },
                                                                                                     each: function(e) {
                                                                                                     return L.every.call(this,
                                                                                                                         function(t, n) {
                                                                                                                         return e.call(t, n, t) !== !1
                                                                                                                         }),
                                                                                                     this
                                                                                                     },
                                                                                                     filter: function(e) {
                                                                                                     return t(e) ? this.not(this.not(e)) : T(O.call(this,
                                                                                                                                                    function(t) {
                                                                                                                                                    return Q.matches(t, e)
                                                                                                                                                    }))
                                                                                                     },
                                                                                                     add: function(e, t) {
                                                                                                     return T(k(this.concat(T(e, t))))
                                                                                                     },
                                                                                                     is: function(e) {
                                                                                                     return this.length > 0 && Q.matches(this[0], e)
                                                                                                     },
                                                                                                     not: function(e) {
                                                                                                     var n = [];
                                                                                                     if (t(e) && e.call !== S) this.each(function(t) {
                                                                                                                                         e.call(this, t) || n.push(this)
                                                                                                                                         });
                                                                                                     else {
                                                                                                     var r = "string" == typeof e ? this.filter(e) : o(e) && t(e.item) ? M.call(e) : T(e);
                                                                                                     this.forEach(function(e) {
                                                                                                                  r.indexOf(e) < 0 && n.push(e)
                                                                                                                  })
                                                                                                     }
                                                                                                     return T(n)
                                                                                                     },
                                                                                                     has: function(e) {
                                                                                                     return this.filter(function() {
                                                                                                                        return i(e) ? T.contains(this, e) : T(this).find(e).size()
                                                                                                                        })
                                                                                                     },
                                                                                                     eq: function(e) {
                                                                                                     return - 1 === e ? this.slice(e) : this.slice(e, +e + 1)
                                                                                                     },
                                                                                                     first: function() {
                                                                                                     var e = this[0];
                                                                                                     return e && !i(e) ? e: T(e)
                                                                                                     },
                                                                                                     last: function() {
                                                                                                     var e = this[this.length - 1];
                                                                                                     return e && !i(e) ? e: T(e)
                                                                                                     },
                                                                                                     find: function(e) {
                                                                                                     var t, n = this;
                                                                                                     return t = e ? "object" == typeof e ? T(e).filter(function() {
                                                                                                                                                       var e = this;
                                                                                                                                                       return L.some.call(n,
                                                                                                                                                                          function(t) {
                                                                                                                                                                          return T.contains(t, e)
                                                                                                                                                                          })
                                                                                                                                                       }) : 1 == this.length ? T(Q.qsa(this[0], e)) : this.map(function() {
                                                                                                                                                                                                               return Q.qsa(this, e)
                                                                                                                                                                                                               }) : T()
                                                                                                     },
                                                                                                     closest: function(e, t) {
                                                                                                     var n = this[0],
                                                                                                     i = !1;
                                                                                                     for ("object" == typeof e && (i = T(e)); n && !(i ? i.indexOf(n) >= 0 : Q.matches(n, e));) n = n !== t && !r(n) && n.parentNode;
                                                                                                     return T(n)
                                                                                                     },
                                                                                                     parents: function(e) {
                                                                                                     for (var t = [], n = this; n.length > 0;) n = T.map(n,
                                                                                                                                                         function(e) {
                                                                                                                                                         return (e = e.parentNode) && !r(e) && t.indexOf(e) < 0 ? (t.push(e), e) : void 0
                                                                                                                                                         });
                                                                                                     return m(t, e)
                                                                                                     },
                                                                                                     parent: function(e) {
                                                                                                     return m(k(this.pluck("parentNode")), e)
                                                                                                     },
                                                                                                     children: function(e) {
                                                                                                     return m(this.map(function() {
                                                                                                                       return p(this)
                                                                                                                       }), e)
                                                                                                     },
                                                                                                     contents: function() {
                                                                                                     return this.map(function() {
                                                                                                                     return this.contentDocument || M.call(this.childNodes)
                                                                                                                     })
                                                                                                     },
                                                                                                     siblings: function(e) {
                                                                                                     return m(this.map(function(e, t) {
                                                                                                                       return O.call(p(t.parentNode),
                                                                                                                                     function(e) {
                                                                                                                                     return e !== t
                                                                                                                                     })
                                                                                                                       }), e)
                                                                                                     },
                                                                                                     empty: function() {
                                                                                                     return this.each(function() {
                                                                                                                      this.innerHTML = ""
                                                                                                                      })
                                                                                                     },
                                                                                                     pluck: function(e) {
                                                                                                     return T.map(this,
                                                                                                                  function(t) {
                                                                                                                  return t[e]
                                                                                                                  })
                                                                                                     },
                                                                                                     show: function() {
                                                                                                     return this.each(function() {
                                                                                                                      "none" == this.style.display && (this.style.display = ""),
                                                                                                                      "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                                                                                                                      })
                                                                                                     },
                                                                                                     replaceWith: function(e) {
                                                                                                     return this.before(e).remove()
                                                                                                     },
                                                                                                     wrap: function(e) {
                                                                                                     var n = t(e);
                                                                                                     if (this[0] && !n) var r = T(e).get(0),
                                                                                                     i = r.parentNode || this.length > 1;
                                                                                                     return this.each(function(t) {
                                                                                                                      T(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(!0) : r)
                                                                                                                      })
                                                                                                     },
                                                                                                     wrapAll: function(e) {
                                                                                                     if (this[0]) {
                                                                                                     T(this[0]).before(e = T(e));
                                                                                                     for (var t; (t = e.children()).length;) e = t.first();
                                                                                                     T(e).append(this)
                                                                                                     }
                                                                                                     return this
                                                                                                     },
                                                                                                     wrapInner: function(e) {
                                                                                                     var n = t(e);
                                                                                                     return this.each(function(t) {
                                                                                                                      var r = T(this),
                                                                                                                      i = r.contents(),
                                                                                                                      s = n ? e.call(this, t) : e;
                                                                                                                      i.length ? i.wrapAll(s) : r.append(s)
                                                                                                                      })
                                                                                                     },
                                                                                                     unwrap: function() {
                                                                                                     return this.parent().each(function() {
                                                                                                                               T(this).replaceWith(T(this).children())
                                                                                                                               }),
                                                                                                     this
                                                                                                     },
                                                                                                     clone: function() {
                                                                                                     return this.map(function() {
                                                                                                                     return this.cloneNode(!0)
                                                                                                                     })
                                                                                                     },
                                                                                                     hide: function() {
                                                                                                     return this.css("display", "none")
                                                                                                     },
                                                                                                     toggle: function(e) {
                                                                                                     return this.each(function() {
                                                                                                                      var t = T(this); (e === S ? "none" == t.css("display") : e) ? t.show() : t.hide()
                                                                                                                      })
                                                                                                     },
                                                                                                     prev: function(e) {
                                                                                                     return T(this.pluck("previousElementSibling")).filter(e || "*")
                                                                                                     },
                                                                                                     next: function(e) {
                                                                                                     return T(this.pluck("nextElementSibling")).filter(e || "*")
                                                                                                     },
                                                                                                     html: function(e) {
                                                                                                     return 0 in arguments ? this.each(function(t) {
                                                                                                                                       var n = this.innerHTML;
                                                                                                                                       T(this).empty().append(g(this, e, t, n))
                                                                                                                                       }) : 0 in this ? this[0].innerHTML: null
                                                                                                     },
                                                                                                     text: function(e) {
                                                                                                     return 0 in arguments ? this.each(function(t) {
                                                                                                                                       var n = g(this, e, t, this.textContent);
                                                                                                                                       this.textContent = null == n ? "": "" + n
                                                                                                                                       }) : 0 in this ? this[0].textContent: null
                                                                                                     },
                                                                                                     attr: function(e, t) {
                                                                                                     var n;
                                                                                                     return "string" != typeof e || 1 in arguments ? this.each(function(n) {
                                                                                                                                                               if (1 === this.nodeType) if (i(e)) for (x in e) y(this, x, e[x]);
                                                                                                                                                               else y(this, e, g(this, t, n, this.getAttribute(e)))
                                                                                                                                                               }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n: S
                                                                                                     },
                                                                                                     removeAttr: function(e) {
                                                                                                     return this.each(function() {
                                                                                                                      1 === this.nodeType && e.split(" ").forEach(function(e) {
                                                                                                                                                                  y(this, e)
                                                                                                                                                                  },
                                                                                                                                                                  this)
                                                                                                                      })
                                                                                                     },
                                                                                                     prop: function(e, t) {
                                                                                                     return e = Y[e] || e,
                                                                                                     1 in arguments ? this.each(function(n) {
                                                                                                                                this[e] = g(this, t, n, this[e])
                                                                                                                                }) : this[0] && this[0][e]
                                                                                                     },
                                                                                                     data: function(e, t) {
                                                                                                     var n = "data-" + e.replace(q, "-$1").toLowerCase(),
                                                                                                     r = 1 in arguments ? this.attr(n, t) : this.attr(n);
                                                                                                     return null !== r ? w(r) : S
                                                                                                     },
                                                                                                     val: function(e) {
                                                                                                     return 0 in arguments ? this.each(function(t) {
                                                                                                                                       this.value = g(this, e, t, this.value)
                                                                                                                                       }) : this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function() {
                                                                                                                                                                                                            return this.selected
                                                                                                                                                                                                            }).pluck("value") : this[0].value)
                                                                                                     },
                                                                                                     offset: function(e) {
                                                                                                     if (e) return this.each(function(t) {
                                                                                                                             var n = T(this),
                                                                                                                             r = g(this, e, t, n.offset()),
                                                                                                                             i = n.offsetParent().offset(),
                                                                                                                             s = {
                                                                                                                             top: r.top - i.top,
                                                                                                                             left: r.left - i.left
                                                                                                                             };
                                                                                                                             "static" == n.css("position") && (s.position = "relative"),
                                                                                                                             n.css(s)
                                                                                                                             });
                                                                                                     if (!this.length) return null;
                                                                                                     var t = this[0].getBoundingClientRect();
                                                                                                     return {
                                                                                                     left: t.left + window.pageXOffset,
                                                                                                     top: t.top + window.pageYOffset,
                                                                                                     width: Math.round(t.width),
                                                                                                     height: Math.round(t.height)
                                                                                                     }
                                                                                                     },
                                                                                                     css: function(t, n) {
                                                                                                     if (arguments.length < 2) {
                                                                                                     var r, i = this[0];
                                                                                                     if (!i) return;
                                                                                                     if (r = getComputedStyle(i, ""), "string" == typeof t) return i.style[C(t)] || r.getPropertyValue(t);
                                                                                                     if (Z(t)) {
                                                                                                     var s = {};
                                                                                                     return T.each(t,
                                                                                                                   function(e, t) {
                                                                                                                   s[t] = i.style[C(t)] || r.getPropertyValue(t)
                                                                                                                   }),
                                                                                                     s
                                                                                                     }
                                                                                                     }
                                                                                                     var o = "";
                                                                                                     if ("string" == e(t)) n || 0 === n ? o = f(t) + ":" + c(t, n) : this.each(function() {
                                                                                                                                                                               this.style.removeProperty(f(t))
                                                                                                                                                                               });
                                                                                                     else for (x in t) t[x] || 0 === t[x] ? o += f(x) + ":" + c(x, t[x]) + ";": this.each(function() {
                                                                                                                                                                                          this.style.removeProperty(f(x))
                                                                                                                                                                                          });
                                                                                                     return this.each(function() {
                                                                                                                      this.style.cssText += ";" + o
                                                                                                                      })
                                                                                                     },
                                                                                                     index: function(e) {
                                                                                                     return e ? this.indexOf(T(e)[0]) : this.parent().children().indexOf(this[0])
                                                                                                     },
                                                                                                     hasClass: function(e) {
                                                                                                     return e ? L.some.call(this,
                                                                                                                            function(e) {
                                                                                                                            return this.test(b(e))
                                                                                                                            },
                                                                                                                            l(e)) : !1
                                                                                                     },
                                                                                                     addClass: function(e) {
                                                                                                     return e ? this.each(function(t) {
                                                                                                                          if ("className" in this) {
                                                                                                                          N = [];
                                                                                                                          var n = b(this),
                                                                                                                          r = g(this, e, t, n);
                                                                                                                          r.split(/\s+/g).forEach(function(e) {
                                                                                                                                                  T(this).hasClass(e) || N.push(e)
                                                                                                                                                  },
                                                                                                                                                  this),
                                                                                                                          N.length && b(this, n + (n ? " ": "") + N.join(" "))
                                                                                                                          }
                                                                                                                          }) : this
                                                                                                     },
                                                                                                     removeClass: function(e) {
                                                                                                     return this.each(function(t) {
                                                                                                                      if ("className" in this) {
                                                                                                                      if (e === S) return b(this, "");
                                                                                                                      N = b(this),
                                                                                                                      g(this, e, t, N).split(/\s+/g).forEach(function(e) {
                                                                                                                                                             N = N.replace(l(e), " ")
                                                                                                                                                             }),
                                                                                                                      b(this, N.trim())
                                                                                                                      }
                                                                                                                      })
                                                                                                     },
                                                                                                     toggleClass: function(e, t) {
                                                                                                     return e ? this.each(function(n) {
                                                                                                                          var r = T(this),
                                                                                                                          i = g(this, e, n, b(this));
                                                                                                                          i.split(/\s+/g).forEach(function(e) { (t === S ? !r.hasClass(e) : t) ? r.addClass(e) : r.removeClass(e)
                                                                                                                                                  })
                                                                                                                          }) : this
                                                                                                     },
                                                                                                     scrollTop: function(e) {
                                                                                                     if (this.length) {
                                                                                                     var t = "scrollTop" in this[0];
                                                                                                     return e === S ? t ? this[0].scrollTop: this[0].pageYOffset: this.each(t ?
                                                                                                                                                                            function() {
                                                                                                                                                                            this.scrollTop = e
                                                                                                                                                                            }: function() {
                                                                                                                                                                            this.scrollTo(this.scrollX, e)
                                                                                                                                                                            })
                                                                                                     }
                                                                                                     },
                                                                                                     scrollLeft: function(e) {
                                                                                                     if (this.length) {
                                                                                                     var t = "scrollLeft" in this[0];
                                                                                                     return e === S ? t ? this[0].scrollLeft: this[0].pageXOffset: this.each(t ?
                                                                                                                                                                             function() {
                                                                                                                                                                             this.scrollLeft = e
                                                                                                                                                                             }: function() {
                                                                                                                                                                             this.scrollTo(e, this.scrollY)
                                                                                                                                                                             })
                                                                                                     }
                                                                                                     },
                                                                                                     position: function() {
                                                                                                     if (this.length) {
                                                                                                     var e = this[0],
                                                                                                     t = this.offsetParent(),
                                                                                                     n = this.offset(),
                                                                                                     r = I.test(t[0].nodeName) ? {
                                                                                                     top: 0,
                                                                                                     left: 0
                                                                                                     }: t.offset();
                                                                                                     return n.top -= parseFloat(T(e).css("margin-top")) || 0,
                                                                                                     n.left -= parseFloat(T(e).css("margin-left")) || 0,
                                                                                                     r.top += parseFloat(T(t[0]).css("border-top-width")) || 0,
                                                                                                     r.left += parseFloat(T(t[0]).css("border-left-width")) || 0,
                                                                                                     {
                                                                                                     top: n.top - r.top,
                                                                                                     left: n.left - r.left
                                                                                                     }
                                                                                                     }
                                                                                                     },
                                                                                                     offsetParent: function() {
                                                                                                     return this.map(function() {
                                                                                                                     for (var e = this.offsetParent || _.body; e && !I.test(e.nodeName) && "static" == T(e).css("position");) e = e.offsetParent;
                                                                                                                     return e
                                                                                                                     })
                                                                                                     }
                                                                                                     },
                                                                                                     T.fn.detach = T.fn.remove,
                                                                                                     ["width", "height"].forEach(function(e) {
                                                                                                                                 var t = e.replace(/./,
                                                                                                                                                   function(e) {
                                                                                                                                                   return e[0].toUpperCase()
                                                                                                                                                   });
                                                                                                                                 T.fn[e] = function(i) {
                                                                                                                                 var s, o = this[0];
                                                                                                                                 return i === S ? n(o) ? o["inner" + t] : r(o) ? o.documentElement["scroll" + t] : (s = this.offset()) && s[e] : this.each(function(t) {
                                                                                                                                                                                                                                                           o = T(this),
                                                                                                                                                                                                                                                           o.css(e, g(this, i, t, o[e]()))
                                                                                                                                                                                                                                                           })
                                                                                                                                 }
                                                                                                                                 }),
                                                                                                     U.forEach(function(t, n) {
                                                                                                               var r = n % 2;
                                                                                                               T.fn[t] = function() {
                                                                                                               var t, i, s = T.map(arguments,
                                                                                                                                   function(n) {
                                                                                                                                   return t = e(n),
                                                                                                                                   "object" == t || "array" == t || null == n ? n: Q.fragment(n)
                                                                                                                                   }),
                                                                                                               o = this.length > 1;
                                                                                                               return s.length < 1 ? this: this.each(function(e, t) {
                                                                                                                                                     i = r ? t: t.parentNode,
                                                                                                                                                     t = 0 == n ? t.nextSibling: 1 == n ? t.firstChild: 2 == n ? t: null;
                                                                                                                                                     var u = T.contains(_.documentElement, i);
                                                                                                                                                     s.forEach(function(e) {
                                                                                                                                                               if (o) e = e.cloneNode(!0);
                                                                                                                                                               else if (!i) return T(e).remove();
                                                                                                                                                               i.insertBefore(e, t),
                                                                                                                                                               u && E(e,
                                                                                                                                                                      function(e) {
                                                                                                                                                                      null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                                                                                                                                                                      })
                                                                                                                                                               })
                                                                                                                                                     })
                                                                                                               },
                                                                                                               T.fn[r ? t + "To": "insert" + (n ? "Before": "After")] = function(e) {
                                                                                                               return T(e)[t](this),
                                                                                                               this
                                                                                                               }
                                                                                                               }),
                                                                                                     Q.Z.prototype = d.prototype = T.fn,
                                                                                                     Q.uniq = k,
                                                                                                     Q.deserializeValue = w,
                                                                                                     T.zepto = Q,
                                                                                                     T
                                                                                                     } ();
                                                                                                     window.Zepto = Zepto,
                                                                                                     void 0 === window.$ && (window.$ = Zepto),
                                                                                                     function(e) {
                                                                                                     function t(e) {
                                                                                                     return e._zid || (e._zid = h++)
                                                                                                     }
                                                                                                     function n(e, n, s, o) {
                                                                                                     if (n = r(n), n.ns) var u = i(n.ns);
                                                                                                     return (m[t(e)] || []).filter(function(e) {
                                                                                                                                   return ! (!e || n.e && e.e != n.e || n.ns && !u.test(e.ns) || s && t(e.fn) !== t(s) || o && e.sel != o)
                                                                                                                                   })
                                                                                                     }
                                                                                                     function r(e) {
                                                                                                     var t = ("" + e).split(".");
                                                                                                     return {
                                                                                                     e: t[0],
                                                                                                     ns: t.slice(1).sort().join(" ")
                                                                                                     }
                                                                                                     }
                                                                                                     function i(e) {
                                                                                                     return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
                                                                                                     }
                                                                                                     function s(e, t) {
                                                                                                     return e.del && !y && e.e in b || !!t
                                                                                                     }
                                                                                                     function o(e) {
                                                                                                     return w[e] || y && b[e] || e
                                                                                                     }
                                                                                                     function u(n, i, u, a, l, h, p) {
                                                                                                     var d = t(n),
                                                                                                     v = m[d] || (m[d] = []);
                                                                                                     i.split(/\s/).forEach(function(t) {
                                                                                                                           if ("ready" == t) return e(document).ready(u);
                                                                                                                           var i = r(t);
                                                                                                                           i.fn = u,
                                                                                                                           i.sel = l,
                                                                                                                           i.e in w && (u = function(t) {
                                                                                                                                        var n = t.relatedTarget;
                                                                                                                                        return ! n || n !== this && !e.contains(this, n) ? i.fn.apply(this, arguments) : void 0
                                                                                                                                        }),
                                                                                                                           i.del = h;
                                                                                                                           var d = h || u;
                                                                                                                           i.proxy = function(e) {
                                                                                                                           if (e = f(e), !e.isImmediatePropagationStopped()) {
                                                                                                                           e.data = a;
                                                                                                                           var t = d.apply(n, e._args == c ? [e] : [e].concat(e._args));
                                                                                                                           return t === !1 && (e.preventDefault(), e.stopPropagation()),
                                                                                                                           t
                                                                                                                           }
                                                                                                                           },
                                                                                                                           i.i = v.length,
                                                                                                                           v.push(i),
                                                                                                                           "addEventListener" in n && n.addEventListener(o(i.e), i.proxy, s(i, p))
                                                                                                                           })
                                                                                                     }
                                                                                                     function a(e, r, i, u, a) {
                                                                                                     var f = t(e); (r || "").split(/\s/).forEach(function(t) {
                                                                                                                                                 n(e, t, i, u).forEach(function(t) {
                                                                                                                                                                       delete m[f][t.i],
                                                                                                                                                                       "removeEventListener" in e && e.removeEventListener(o(t.e), t.proxy, s(t, a))
                                                                                                                                                                       })
                                                                                                                                                 })
                                                                                                     }
                                                                                                     function f(t, n) {
                                                                                                     return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(T,
                                                                                                                                                                  function(e, r) {
                                                                                                                                                                  var i = n[e];
                                                                                                                                                                  t[e] = function() {
                                                                                                                                                                  return this[r] = E,
                                                                                                                                                                  i && i.apply(n, arguments)
                                                                                                                                                                  },
                                                                                                                                                                  t[r] = S
                                                                                                                                                                  }), (n.defaultPrevented !== c ? n.defaultPrevented: "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = E)),
                                                                                                     t
                                                                                                     }
                                                                                                     function l(e) {
                                                                                                     var t, n = {
                                                                                                     originalEvent: e
                                                                                                     };
                                                                                                     for (t in e) x.test(t) || e[t] === c || (n[t] = e[t]);
                                                                                                     return f(n, e)
                                                                                                     }
                                                                                                     var c, h = 1,
                                                                                                     p = Array.prototype.slice,
                                                                                                     d = e.isFunction,
                                                                                                     v = function(e) {
                                                                                                     return "string" == typeof e
                                                                                                     },
                                                                                                     m = {},
                                                                                                     g = {},
                                                                                                     y = "onfocusin" in window,
                                                                                                     b = {
                                                                                                     focus: "focusin",
                                                                                                     blur: "focusout"
                                                                                                     },
                                                                                                     w = {
                                                                                                     mouseenter: "mouseover",
                                                                                                     mouseleave: "mouseout"
                                                                                                     };
                                                                                                     g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents",
                                                                                                     e.event = {
                                                                                                     add: u,
                                                                                                     remove: a
                                                                                                     },
                                                                                                     e.proxy = function(n, r) {
                                                                                                     var i = 2 in arguments && p.call(arguments, 2);
                                                                                                     if (d(n)) {
                                                                                                     var s = function() {
                                                                                                     return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
                                                                                                     };
                                                                                                     return s._zid = t(n),
                                                                                                     s
                                                                                                     }
                                                                                                     if (v(r)) return i ? (i.unshift(n[r], n), e.proxy.apply(null, i)) : e.proxy(n[r], n);
                                                                                                     throw new TypeError("expected function")
                                                                                                     },
                                                                                                     e.fn.bind = function(e, t, n) {
                                                                                                     return this.on(e, t, n)
                                                                                                     },
                                                                                                     e.fn.unbind = function(e, t) {
                                                                                                     return this.off(e, t)
                                                                                                     },
                                                                                                     e.fn.one = function(e, t, n, r) {
                                                                                                     return this.on(e, t, n, r, 1)
                                                                                                     };
                                                                                                     var E = function() {
                                                                                                     return ! 0
                                                                                                     },
                                                                                                     S = function() {
                                                                                                     return ! 1
                                                                                                     },
                                                                                                     x = /^([A-Z]|returnValue$|layer[XY]$)/,
                                                                                                     T = {
                                                                                                     preventDefault: "isDefaultPrevented",
                                                                                                     stopImmediatePropagation: "isImmediatePropagationStopped",
                                                                                                     stopPropagation: "isPropagationStopped"
                                                                                                     };
                                                                                                     e.fn.delegate = function(e, t, n) {
                                                                                                     return this.on(t, e, n)
                                                                                                     },
                                                                                                     e.fn.undelegate = function(e, t, n) {
                                                                                                     return this.off(t, e, n)
                                                                                                     },
                                                                                                     e.fn.live = function(t, n) {
                                                                                                     return e(document.body).delegate(this.selector, t, n),
                                                                                                     this
                                                                                                     },
                                                                                                     e.fn.die = function(t, n) {
                                                                                                     return e(document.body).undelegate(this.selector, t, n),
                                                                                                     this
                                                                                                     },
                                                                                                     e.fn.on = function(t, n, r, i, s) {
                                                                                                     var o, f, h = this;
                                                                                                     return t && !v(t) ? (e.each(t,
                                                                                                                                 function(e, t) {
                                                                                                                                 h.on(e, n, r, t, s)
                                                                                                                                 }), h) : (v(n) || d(i) || i === !1 || (i = r, r = n, n = c), (i === c || r === !1) && (i = r, r = c), i === !1 && (i = S), h.each(function(c, h) {
                                                                                                                                                                                                                                                                   s && (o = function(e) {
                                                                                                                                                                                                                                                                         return a(h, e.type, i),
                                                                                                                                                                                                                                                                         i.apply(this, arguments)
                                                                                                                                                                                                                                                                         }),
                                                                                                                                                                                                                                                                   n && (f = function(t) {
                                                                                                                                                                                                                                                                         var r, s = e(t.target).closest(n, h).get(0);
                                                                                                                                                                                                                                                                         return s && s !== h ? (r = e.extend(l(t), {
                                                                                                                                                                                                                                                                                                             currentTarget: s,
                                                                                                                                                                                                                                                                                                             liveFired: h
                                                                                                                                                                                                                                                                                                             }), (o || i).apply(s, [r].concat(p.call(arguments, 1)))) : void 0
                                                                                                                                                                                                                                                                         }),
                                                                                                                                                                                                                                                                   u(h, t, i, r, n, f || o)
                                                                                                                                                                                                                                                                   }))
                                                                                                     },
                                                                                                     e.fn.off = function(t, n, r) {
                                                                                                     var i = this;
                                                                                                     return t && !v(t) ? (e.each(t,
                                                                                                                                 function(e, t) {
                                                                                                                                 i.off(e, n, t)
                                                                                                                                 }), i) : (v(n) || d(r) || r === !1 || (r = n, n = c), r === !1 && (r = S), i.each(function() {
                                                                                                                                                                                                                   a(this, t, r, n)
                                                                                                                                                                                                                   }))
                                                                                                     },
                                                                                                     e.fn.trigger = function(t, n) {
                                                                                                     return t = v(t) || e.isPlainObject(t) ? e.Event(t) : f(t),
                                                                                                     t._args = n,
                                                                                                     this.each(function() {
                                                                                                               t.type in b && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                                                                                                               })
                                                                                                     },
                                                                                                     e.fn.triggerHandler = function(t, r) {
                                                                                                     var i, s;
                                                                                                     return this.each(function(o, u) {
                                                                                                                      i = l(v(t) ? e.Event(t) : t),
                                                                                                                      i._args = r,
                                                                                                                      i.target = u,
                                                                                                                      e.each(n(u, t.type || t),
                                                                                                                             function(e, t) {
                                                                                                                             return s = t.proxy(i),
                                                                                                                             i.isImmediatePropagationStopped() ? !1 : void 0
                                                                                                                             })
                                                                                                                      }),
                                                                                                     s
                                                                                                     },
                                                                                                     "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                                                                                                                                                                                                                                                                                                               e.fn[t] = function(e) {
                                                                                                                                                                                                                                                                                                               return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                                                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                                                               }),
                                                                                                     e.Event = function(e, t) {
                                                                                                     v(e) || (t = e, e = t.type);
                                                                                                     var n = document.createEvent(g[e] || "Events"),
                                                                                                     r = !0;
                                                                                                     if (t) for (var i in t)"bubbles" == i ? r = !!t[i] : n[i] = t[i];
                                                                                                     return n.initEvent(e, r, !0),
                                                                                                     f(n)
                                                                                                     }
                                                                                                     } (Zepto),
                                                                                                     function(t) {
                                                                                                     function h(e, n, r) {
                                                                                                     var i = t.Event(n);
                                                                                                     return t(e).trigger(i, r),
                                                                                                     !i.isDefaultPrevented()
                                                                                                     }
                                                                                                     function p(e, t, r, i) {
                                                                                                     return e.global ? h(t || n, r, i) : void 0
                                                                                                     }
                                                                                                     function d(e) {
                                                                                                     e.global && 0 === t.active++&&p(e, null, "ajaxStart")
                                                                                                     }
                                                                                                     function m(e) {
                                                                                                     e.global && !--t.active && p(e, null, "ajaxStop")
                                                                                                     }
                                                                                                     function g(e, t) {
                                                                                                     var n = t.context;
                                                                                                     return t.beforeSend.call(n, e, t) === !1 || p(t, n, "ajaxBeforeSend", [e, t]) === !1 ? !1 : void p(t, n, "ajaxSend", [e, t])
                                                                                                     }
                                                                                                     function v(e, t, n, r) {
                                                                                                     var i = n.context,
                                                                                                     s = "success";
                                                                                                     n.success.call(i, e, s, t),
                                                                                                     r && r.resolveWith(i, [e, s, t]),
                                                                                                     p(n, i, "ajaxSuccess", [t, n, e]),
                                                                                                     w(s, t, n)
                                                                                                     }
                                                                                                     function y(e, t, n, r, i) {
                                                                                                     var s = r.context;
                                                                                                     r.error.call(s, n, t, e),
                                                                                                     i && i.rejectWith(s, [n, t, e]),
                                                                                                     p(r, s, "ajaxError", [n, r, e || t]),
                                                                                                     w(t, n, r)
                                                                                                     }
                                                                                                     function w(e, t, n) {
                                                                                                     var r = n.context;
                                                                                                     n.complete.call(r, t, e),
                                                                                                     p(n, r, "ajaxComplete", [t, n]),
                                                                                                     m(n)
                                                                                                     }
                                                                                                     function b() {}
                                                                                                     function x(e) {
                                                                                                     return e && (e = e.split(";", 2)[0]),
                                                                                                     e && (e == f ? "html": e == u ? "json": a.test(e) ? "script": s.test(e) && "xml") || "text"
                                                                                                     }
                                                                                                     function E(e, t) {
                                                                                                     return "" == t ? e: (e + "&" + t).replace(/[&?]{1,2}/, "?")
                                                                                                     }
                                                                                                     function T(e) {
                                                                                                     e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
                                                                                                     !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0)
                                                                                                     }
                                                                                                     function S(e, n, r, i) {
                                                                                                     return t.isFunction(n) && (i = r, r = n, n = void 0),
                                                                                                     t.isFunction(r) || (i = r, r = void 0),
                                                                                                     {
                                                                                                     url: e,
                                                                                                     data: n,
                                                                                                     success: r,
                                                                                                     dataType: i
                                                                                                     }
                                                                                                     }
                                                                                                     function P(e, n, r, i) {
                                                                                                     var s, o = t.isArray(n),
                                                                                                     u = t.isPlainObject(n);
                                                                                                     t.each(n,
                                                                                                            function(n, f) {
                                                                                                            s = t.type(f),
                                                                                                            i && (n = r ? i: i + "[" + (u || "object" == s || "array" == s ? n: "") + "]"),
                                                                                                            !i && o ? e.add(f.name, f.value) : "array" == s || !r && "object" == s ? P(e, f, r, n) : e.add(n, f)
                                                                                                            })
                                                                                                     }
                                                                                                     var i, r, e = 0,
                                                                                                     n = window.document,
                                                                                                     o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                                                                                                     a = /^(?:text|application)\/javascript/i,
                                                                                                     s = /^(?:text|application)\/xml/i,
                                                                                                     u = "application/json",
                                                                                                     f = "text/html",
                                                                                                     c = /^\s*$/,
                                                                                                     l = n.createElement("a");
                                                                                                     l.href = window.location.href,
                                                                                                     t.active = 0,
                                                                                                     t.ajaxJSONP = function(r, i) {
                                                                                                     if ("type" in r) {
                                                                                                     var s, o, u = r.jsonpCallback,
                                                                                                     a = (t.isFunction(u) ? u() : u) || "jsonp" + ++e,
                                                                                                     f = n.createElement("script"),
                                                                                                     l = window[a],
                                                                                                     c = function(e) {
                                                                                                     t(f).triggerHandler("error", e || "abort")
                                                                                                     },
                                                                                                     h = {
                                                                                                     abort: c
                                                                                                     };
                                                                                                     return i && i.promise(h),
                                                                                                     t(f).on("load error",
                                                                                                             function(e, n) {
                                                                                                             clearTimeout(o),
                                                                                                             t(f).off().remove(),
                                                                                                             "error" != e.type && s ? v(s[0], h, r, i) : y(null, n || "error", h, r, i),
                                                                                                             window[a] = l,
                                                                                                             s && t.isFunction(l) && l(s[0]),
                                                                                                             l = s = void 0
                                                                                                             }),
                                                                                                     g(h, r) === !1 ? (c("abort"), h) : (window[a] = function() {
                                                                                                                                         s = arguments
                                                                                                                                         },
                                                                                                                                         f.src = r.url.replace(/\?(.+)=\?/, "?$1=" + a), n.head.appendChild(f), r.timeout > 0 && (o = setTimeout(function() {
                                                                                                                                                                                                                                                 c("timeout")
                                                                                                                                                                                                                                                 },
                                                                                                                                                                                                                                                 r.timeout)), h)
                                                                                                     }
                                                                                                     return t.ajax(r)
                                                                                                     },
                                                                                                     t.ajaxSettings = {
                                                                                                     type: "GET",
                                                                                                     beforeSend: b,
                                                                                                     success: b,
                                                                                                     error: b,
                                                                                                     complete: b,
                                                                                                     context: null,
                                                                                                     global: !0,
                                                                                                     xhr: function() {
                                                                                                     return new window.XMLHttpRequest
                                                                                                     },
                                                                                                     accepts: {
                                                                                                     script: "text/javascript, application/javascript, application/x-javascript",
                                                                                                     json: u,
                                                                                                     xml: "application/xml, text/xml",
                                                                                                     html: f,
                                                                                                     text: "text/plain"
                                                                                                     },
                                                                                                     crossDomain: !1,
                                                                                                     timeout: 0,
                                                                                                     processData: !0,
                                                                                                     cache: !0
                                                                                                     },
                                                                                                     t.ajax = function(e) {
                                                                                                     var s, u, o = t.extend({},
                                                                                                                            e || {}),
                                                                                                     a = t.Deferred && t.Deferred();
                                                                                                     for (i in t.ajaxSettings) void 0 === o[i] && (o[i] = t.ajaxSettings[i]);
                                                                                                     d(o),
                                                                                                     o.crossDomain || (s = n.createElement("a"), s.href = o.url, s.href = s.href, o.crossDomain = l.protocol + "//" + l.host != s.protocol + "//" + s.host),
                                                                                                     o.url || (o.url = window.location.toString()),
                                                                                                     (u = o.url.indexOf("#")) > -1 && (o.url = o.url.slice(0, u)),
                                                                                                     T(o);
                                                                                                     var f = o.dataType,
                                                                                                     h = /\?.+=\?/.test(o.url);
                                                                                                     if (h && (f = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != f && "jsonp" != f) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == f) return h || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?": o.jsonp === !1 ? "": "callback=?")),
                                                                                                     t.ajaxJSONP(o, a);
                                                                                                     var C, p = o.accepts[f],
                                                                                                     m = {},
                                                                                                     w = function(e, t) {
                                                                                                     m[e.toLowerCase()] = [e, t]
                                                                                                     },
                                                                                                     S = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1: window.location.protocol,
                                                                                                     j = o.xhr(),
                                                                                                     P = j.setRequestHeader;
                                                                                                     if (a && a.promise(j), o.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", p || "*/*"), (p = o.mimeType || p) && (p.indexOf(",") > -1 && (p = p.split(",", 2)[0]), j.overrideMimeType && j.overrideMimeType(p)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && w("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (r in o.headers) w(r, o.headers[r]);
                                                                                                     if (j.setRequestHeader = w, j.onreadystatechange = function() {
                                                                                                         if (4 == j.readyState) {
                                                                                                         j.onreadystatechange = b,
                                                                                                         clearTimeout(C);
                                                                                                         var e, n = !1;
                                                                                                         if (j.status >= 200 && j.status < 300 || 304 == j.status || 0 == j.status && "file:" == S) {
                                                                                                         f = f || x(o.mimeType || j.getResponseHeader("content-type")),
                                                                                                         e = j.responseText;
                                                                                                         try {
                                                                                                         "script" == f ? (1, eval)(e) : "xml" == f ? e = j.responseXML: "json" == f && (e = c.test(e) ? null: t.parseJSON(e))
                                                                                                         } catch(i) {
                                                                                                         n = i
                                                                                                         }
                                                                                                         n ? y(n, "parsererror", j, o, a) : v(e, j, o, a)
                                                                                                         } else y(j.statusText || null, j.status ? "error": "abort", j, o, a)
                                                                                                         }
                                                                                                         },
                                                                                                         g(j, o) === !1) return j.abort(),
                                                                                                     y(null, "abort", j, o, a),
                                                                                                     j;
                                                                                                     if (o.xhrFields) for (r in o.xhrFields) j[r] = o.xhrFields[r];
                                                                                                     var O = "async" in o ? o.async: !0;
                                                                                                     j.open(o.type, o.url, O, o.username, o.password);
                                                                                                     for (r in m) P.apply(j, m[r]);
                                                                                                     return o.timeout > 0 && (C = setTimeout(function() {
                                                                                                                                             j.onreadystatechange = b,
                                                                                                                                             j.abort(),
                                                                                                                                             y(null, "timeout", j, o, a)
                                                                                                                                             },
                                                                                                                                             o.timeout)),
                                                                                                     j.send(o.data ? o.data: null),
                                                                                                     j
                                                                                                     },
                                                                                                     t.get = function() {
                                                                                                     return t.ajax(S.apply(null, arguments))
                                                                                                     },
                                                                                                     t.post = function() {
                                                                                                     var e = S.apply(null, arguments);
                                                                                                     return e.type = "POST",
                                                                                                     t.ajax(e)
                                                                                                     },
                                                                                                     t.getJSON = function() {
                                                                                                     var e = S.apply(null, arguments);
                                                                                                     return e.dataType = "json",
                                                                                                     t.ajax(e)
                                                                                                     },
                                                                                                     t.fn.load = function(e, n, r) {
                                                                                                     if (!this.length) return this;
                                                                                                     var i, s = this,
                                                                                                     u = e.split(/\s/),
                                                                                                     a = S(e, n, r),
                                                                                                     f = a.success;
                                                                                                     return u.length > 1 && (a.url = u[0], i = u[1]),
                                                                                                     a.success = function(e) {
                                                                                                     s.html(i ? t("<div>").html(e.replace(o, "")).find(i) : e),
                                                                                                     f && f.apply(s, arguments)
                                                                                                     },
                                                                                                     t.ajax(a),
                                                                                                     this
                                                                                                     };
                                                                                                     var j = encodeURIComponent;
                                                                                                     t.param = function(e, n) {
                                                                                                     var r = [];
                                                                                                     return r.add = function(e, n) {
                                                                                                     t.isFunction(n) && (n = n()),
                                                                                                     null == n && (n = ""),
                                                                                                     this.push(j(e) + "=" + j(n))
                                                                                                     },
                                                                                                     P(r, e, n),
                                                                                                     r.join("&").replace(/%20/g, "+")
                                                                                                     }
                                                                                                     } (Zepto),
                                                                                                     function(e) {
                                                                                                     e.fn.serializeArray = function() {
                                                                                                     var n, r, i = [],
                                                                                                     s = function(e) {
                                                                                                     return e.forEach ? e.forEach(s) : void i.push({
                                                                                                                                                   name: n,
                                                                                                                                                   value: e
                                                                                                                                                   })
                                                                                                     };
                                                                                                     return this[0] && e.each(this[0].elements,
                                                                                                                              function(i, o) {
                                                                                                                              r = o.type,
                                                                                                                              n = o.name,
                                                                                                                              n && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != r && "reset" != r && "button" != r && "file" != r && ("radio" != r && "checkbox" != r || o.checked) && s(e(o).val())
                                                                                                                              }),
                                                                                                     i
                                                                                                     },
                                                                                                     e.fn.serialize = function() {
                                                                                                     var e = [];
                                                                                                     return this.serializeArray().forEach(function(n) {
                                                                                                                                          e.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
                                                                                                                                          }),
                                                                                                     e.join("&")
                                                                                                     },
                                                                                                     e.fn.submit = function(n) {
                                                                                                     if (0 in arguments) this.bind("submit", n);
                                                                                                     else if (this.length) {
                                                                                                     var r = e.Event("submit");
                                                                                                     this.eq(0).trigger(r),
                                                                                                     r.isDefaultPrevented() || this.get(0).submit()
                                                                                                     }
                                                                                                     return this
                                                                                                     }
                                                                                                     } (Zepto),
                                                                                                     function(e) {
                                                                                                     function t(e, t, n, r) {
                                                                                                     return Math.abs(e - t) >= Math.abs(n - r) ? e - t > 0 ? "Left": "Right": n - r > 0 ? "Up": "Down"
                                                                                                     }
                                                                                                     function n() {
                                                                                                     l = null,
                                                                                                     h.last && (h.el.trigger("longTap"), h = {})
                                                                                                     }
                                                                                                     function r() {
                                                                                                     l && clearTimeout(l),
                                                                                                     l = null
                                                                                                     }
                                                                                                     function i() {
                                                                                                     u && clearTimeout(u),
                                                                                                     a && clearTimeout(a),
                                                                                                     f && clearTimeout(f),
                                                                                                     l && clearTimeout(l),
                                                                                                     u = a = f = l = null,
                                                                                                     h = {}
                                                                                                     }
                                                                                                     function s(e) {
                                                                                                     return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
                                                                                                     }
                                                                                                     function o(e, t) {
                                                                                                     return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
                                                                                                     }
                                                                                                     var u, a, f, l, c, h = {},
                                                                                                     p = 750;
                                                                                                     e(document).ready(function() {
                                                                                                                       var d, v, m, g, y = 0,
                                                                                                                       b = 0;
                                                                                                                       "MSGesture" in window && (c = new MSGesture, c.target = document.body),
                                                                                                                       e(document).bind("MSGestureEnd",
                                                                                                                                        function(e) {
                                                                                                                                        var t = e.velocityX > 1 ? "Right": e.velocityX < -1 ? "Left": e.velocityY > 1 ? "Down": e.velocityY < -1 ? "Up": null;
                                                                                                                                        t && (h.el.trigger("swipe"), h.el.trigger("swipe" + t))
                                                                                                                                        }).on("touchstart MSPointerDown pointerdown",
                                                                                                                                              function(t) { (!(g = o(t, "down")) || s(t)) && (m = g ? t: t.touches[0], t.touches && 1 === t.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), d = Date.now(), v = d - (h.last || d), h.el = e("tagName" in m.target ? m.target: m.target.parentNode), u && clearTimeout(u), h.x1 = m.pageX, h.y1 = m.pageY, v > 0 && 250 >= v && (h.isDoubleTap = !0), h.last = d, l = setTimeout(n, p), c && g && c.addPointer(t.pointerId))
                                                                                                                                              }).on("touchmove MSPointerMove pointermove",
                                                                                                                                                    function(e) { (!(g = o(e, "move")) || s(e)) && (m = g ? e: e.touches[0], r(), h.x2 = m.pageX, h.y2 = m.pageY, y += Math.abs(h.x1 - h.x2), b += Math.abs(h.y1 - h.y2))
                                                                                                                                                    }).on("touchend MSPointerUp pointerup",
                                                                                                                                                          function(n) { (!(g = o(n, "up")) || s(n)) && (r(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? f = setTimeout(function() {
                                                                                                                                                                                                                                                                                                       h.el.trigger("swipe"),
                                                                                                                                                                                                                                                                                                       h.el.trigger("swipe" + t(h.x1, h.x2, h.y1, h.y2)),
                                                                                                                                                                                                                                                                                                       h = {}
                                                                                                                                                                                                                                                                                                       },
                                                                                                                                                                                                                                                                                                       0) : "last" in h && (30 > y && 30 > b ? a = setTimeout(function() {
                                                                                                                                                                                                                                                                                                                                                              var t = e.Event("tap");
                                                                                                                                                                                                                                                                                                                                                              t.cancelTouch = i,
                                                                                                                                                                                                                                                                                                                                                              h.el.trigger(t),
                                                                                                                                                                                                                                                                                                                                                              h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : u = setTimeout(function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                           u = null,
                                                                                                                                                                                                                                                                                                                                                                                                                                           h.el && h.el.trigger("singleTap"),
                                                                                                                                                                                                                                                                                                                                                                                                                                           h = {}
                                                                                                                                                                                                                                                                                                                                                                                                                                           },
                                                                                                                                                                                                                                                                                                                                                                                                                                           250)
                                                                                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                                                                                              0) : h = {}), y = b = 0)
                                                                                                                                                          }).on("touchcancel MSPointerCancel pointercancel", i),
                                                                                                                       e(window).on("scroll", i)
                                                                                                                       }),
                                                                                                     ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
                                                                                                                                                                                                                      e.fn[t] = function(e) {
                                                                                                                                                                                                                      return this.on(t, e)
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                     } (Zepto),
                                                                                                     function(e) {
                                                                                                     function t(e, t) {
                                                                                                     var n = this.os = {},
                                                                                                     r = this.browser = {},
                                                                                                     i = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                                                                                                     s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                                                                                                     o = !!e.match(/\(Macintosh\; Intel /),
                                                                                                                   u = e.match(/(iPad).*OS\s([\d_]+)/),
                                                                                                                   a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                                                                                                                   f = !u && e.match(/(iPhone\sOS)\s([\d_]+)/),
                                                                                                                   l = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                                                                                                                   c = /Win\d{2}|Windows/.test(t),
                                                                                                                   h = e.match(/Windows Phone ([\d.]+)/),
                                                                                                                   p = l && e.match(/TouchPad/),
                                                                                                                   d = e.match(/Kindle\/([\d.]+)/),
                                                                                                                   v = e.match(/Silk\/([\d._]+)/),
                                                                                                                   m = e.match(/(BlackBerry).*Version\/([\d.]+)/),
                                                                                                                   g = e.match(/(BB10).*Version\/([\d.]+)/),
                                                                                                                   y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                                                                                                                   b = e.match(/PlayBook/),
                                                                                                                   w = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                                                                                                                   E = e.match(/Firefox\/([\d.]+)/),
                                                                                                                   S = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                                                                                                                   x = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                                                                                                                   T = !w && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                                                                                                                   N = T || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/); (r.webkit = !!i) && (r.version = i[1]),
                                                                                                                   s && (n.android = !0, n.version = s[2]),
                                                                                                                   f && !a && (n.ios = n.iphone = !0, n.version = f[2].replace(/_/g, ".")),
                                                                                                                   u && (n.ios = n.ipad = !0, n.version = u[2].replace(/_/g, ".")),
                                                                                                                   a && (n.ios = n.ipod = !0, n.version = a[3] ? a[3].replace(/_/g, ".") : null),
                                                                                                                   h && (n.wp = !0, n.version = h[1]),
                                                                                                                   l && (n.webos = !0, n.version = l[2]),
                                                                                                                   p && (n.touchpad = !0),
                                                                                                                   m && (n.blackberry = !0, n.version = m[2]),
                                                                                                                   g && (n.bb10 = !0, n.version = g[2]),
                                                                                                                   y && (n.rimtabletos = !0, n.version = y[2]),
                                                                                                                   b && (r.playbook = !0),
                                                                                                                   d && (n.kindle = !0, n.version = d[1]),
                                                                                                                   v && (r.silk = !0, r.version = v[1]),
                                                                                                                   !v && n.android && e.match(/Kindle Fire/) && (r.silk = !0),
                                                                                                                   w && (r.chrome = !0, r.version = w[1]),
                                                                                                                   E && (r.firefox = !0, r.version = E[1]),
                                                                                                                   S && (n.firefoxos = !0, n.version = S[1]),
                                                                                                                   x && (r.ie = !0, r.version = x[1]),
                                                                                                                   N && (o || n.ios || c) && (r.safari = !0, n.ios || (r.version = N[1])),
                                                                                                                   T && (r.webview = !0),
                                                                                                                   n.tablet = !!(u || b || s && !e.match(/Mobile/) || E && e.match(/Tablet/) || x && !e.match(/Phone/) && e.match(/Touch/)),
                                                                                                                   n.phone = !(n.tablet || n.ipod || !(s || f || l || m || g || w && e.match(/Android/) || w && e.match(/CriOS\/([\d.]+)/) || E && e.match(/Mobile/) || x && e.match(/Touch/)))
                                                                                                                   }
                                                                                                                   t.call(e, navigator.userAgent, navigator.platform),
                                                                                                                   e.__detect = t
                                                                                                                   } (Zepto),
                                                                                                                   function(e, t) {
                                                                                                                   function n(e) {
                                                                                                                   return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
                                                                                                                   }
                                                                                                                   function r(e) {
                                                                                                                   return i ? i + e: e.toLowerCase()
                                                                                                                   }
                                                                                                                   var i, s, o, u, a, f, l, c, h, p, d = "",
                                                                                                                   v = {
                                                                                                                   Webkit: "webkit",
                                                                                                                   Moz: "",
                                                                                                                   O: "o"
                                                                                                                   },
                                                                                                                   m = document.createElement("div"),
                                                                                                                   g = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                                                                                                                   y = {};
                                                                                                                   e.each(v,
                                                                                                                          function(e, n) {
                                                                                                                          return m.style[e + "TransitionProperty"] !== t ? (d = "-" + e.toLowerCase() + "-", i = n, !1) : void 0
                                                                                                                          }),
                                                                                                                   s = d + "transform",
                                                                                                                   y[o = d + "transition-property"] = y[u = d + "transition-duration"] = y[f = d + "transition-delay"] = y[a = d + "transition-timing-function"] = y[l = d + "animation-name"] = y[c = d + "animation-duration"] = y[p = d + "animation-delay"] = y[h = d + "animation-timing-function"] = "",
                                                                                                                   e.fx = {
                                                                                                                   off: i === t && m.style.transitionProperty === t,
                                                                                                                   speeds: {
                                                                                                                   _default: 400,
                                                                                                                   fast: 200,
                                                                                                                   slow: 600
                                                                                                                   },
                                                                                                                   cssPrefix: d,
                                                                                                                   transitionEnd: r("TransitionEnd"),
                                                                                                                   animationEnd: r("AnimationEnd")
                                                                                                                   },
                                                                                                                   e.fn.animate = function(n, r, i, s, o) {
                                                                                                                   return e.isFunction(r) && (s = r, i = t, r = t),
                                                                                                                   e.isFunction(i) && (s = i, i = t),
                                                                                                                   e.isPlainObject(r) && (i = r.easing, s = r.complete, o = r.delay, r = r.duration),
                                                                                                                   r && (r = ("number" == typeof r ? r: e.fx.speeds[r] || e.fx.speeds._default) / 1e3),
                                                                                                                   o && (o = parseFloat(o) / 1e3),
                                                                                                                   this.anim(n, r, i, s, o)
                                                                                                                   },
                                                                                                                   e.fn.anim = function(r, i, d, v, m) {
                                                                                                                   var b, w, E, S = {},
                                                                                                                   x = "",
                                                                                                                   T = this,
                                                                                                                   N = e.fx.transitionEnd,
                                                                                                                   C = !1;
                                                                                                                   if (i === t && (i = e.fx.speeds._default / 1e3), m === t && (m = 0), e.fx.off && (i = 0), "string" == typeof r) S[l] = r,
                                                                                                                   S[c] = i + "s",
                                                                                                                   S[p] = m + "s",
                                                                                                                   S[h] = d || "linear",
                                                                                                                   N = e.fx.animationEnd;
                                                                                                                   else {
                                                                                                                   w = [];
                                                                                                                   for (b in r) g.test(b) ? x += b + "(" + r[b] + ") ": (S[b] = r[b], w.push(n(b)));
                                                                                                                   x && (S[s] = x, w.push(s)),
                                                                                                                   i > 0 && "object" == typeof r && (S[o] = w.join(", "), S[u] = i + "s", S[f] = m + "s", S[a] = d || "linear")
                                                                                                                   }
                                                                                                                   return E = function(t) {
                                                                                                                   if ("undefined" != typeof t) {
                                                                                                                   if (t.target !== t.currentTarget) return;
                                                                                                                   e(t.target).unbind(N, E)
                                                                                                                   } else e(this).unbind(N, E);
                                                                                                                   C = !0,
                                                                                                                   e(this).css(y),
                                                                                                                   v && v.call(this)
                                                                                                                   },
                                                                                                                   i > 0 && (this.bind(N, E), setTimeout(function() {
                                                                                                                                                         C || E.call(T)
                                                                                                                                                         },
                                                                                                                                                         1e3 * (i + m) + 25)),
                                                                                                                   this.size() && this.get(0).clientLeft,
                                                                                                                   this.css(S),
                                                                                                                   0 >= i && setTimeout(function() {
                                                                                                                                        T.each(function() {
                                                                                                                                               E.call(this)
                                                                                                                                               })
                                                                                                                                        },
                                                                                                                                        0),
                                                                                                                   this
                                                                                                                   },
                                                                                                                   m = null
                                                                                                                   } (Zepto),
                                                                                                                   function(e, t) {
                                                                                                                   function n(n, r, i, s, o) {
                                                                                                                   "function" != typeof r || o || (o = r, r = t);
                                                                                                                   var u = {
                                                                                                                   opacity: i
                                                                                                                   };
                                                                                                                   return s && (u.scale = s, n.css(e.fx.cssPrefix + "transform-origin", "0 0")),
                                                                                                                   n.animate(u, r, null, o)
                                                                                                                   }
                                                                                                                   function r(t, r, i, s) {
                                                                                                                   return n(t, r, 0, i,
                                                                                                                            function() {
                                                                                                                            o.call(e(this)),
                                                                                                                            s && s.call(this)
                                                                                                                            })
                                                                                                                   }
                                                                                                                   var i = window.document,
                                                                                                                   s = (i.documentElement, e.fn.show),
                                                                                                                   o = e.fn.hide,
                                                                                                                   u = e.fn.toggle;
                                                                                                                   e.fn.show = function(e, r) {
                                                                                                                   return s.call(this),
                                                                                                                   e === t ? e = 0 : this.css("opacity", 0),
                                                                                                                   n(this, e, 1, "1,1", r)
                                                                                                                   },
                                                                                                                   e.fn.hide = function(e, n) {
                                                                                                                   return e === t ? o.call(this) : r(this, e, "0,0", n)
                                                                                                                   },
                                                                                                                   e.fn.toggle = function(n, r) {
                                                                                                                   return n === t || "boolean" == typeof n ? u.call(this, n) : this.each(function() {
                                                                                                                                                                                         var t = e(this);
                                                                                                                                                                                         t["none" == t.css("display") ? "show": "hide"](n, r)
                                                                                                                                                                                         })
                                                                                                                   },
                                                                                                                   e.fn.fadeTo = function(e, t, r) {
                                                                                                                   return n(this, e, t, null, r)
                                                                                                                   },
                                                                                                                   e.fn.fadeIn = function(e, t) {
                                                                                                                   var n = this.css("opacity");
                                                                                                                   return n > 0 ? this.css("opacity", 0) : n = 1,
                                                                                                                   s.call(this).fadeTo(e, n, t)
                                                                                                                   },
                                                                                                                   e.fn.fadeOut = function(e, t) {
                                                                                                                   return r(this, e, null, t)
                                                                                                                   },
                                                                                                                   e.fn.fadeToggle = function(t, n) {
                                                                                                                   return this.each(function() {
                                                                                                                                    var r = e(this);
                                                                                                                                    r[0 == r.css("opacity") || "none" == r.css("display") ? "fadeIn": "fadeOut"](t, n)
                                                                                                                                    })
                                                                                                                   }
                                                                                                                   } (Zepto),
                                                                                                                   function(e) {
                                                                                                                   function t(t, r) {
                                                                                                                   var a = t[u],
                                                                                                                   f = a && i[a];
                                                                                                                   if (void 0 === r) return f || n(t);
                                                                                                                   if (f) {
                                                                                                                   if (r in f) return f[r];
                                                                                                                   var l = o(r);
                                                                                                                   if (l in f) return f[l]
                                                                                                                   }
                                                                                                                   return s.call(e(t), r)
                                                                                                                   }
                                                                                                                   function n(t, n, s) {
                                                                                                                   var a = t[u] || (t[u] = ++e.uuid),
                                                                                                                   f = i[a] || (i[a] = r(t));
                                                                                                                   return void 0 !== n && (f[o(n)] = s),
                                                                                                                   f
                                                                                                                   }
                                                                                                                   function r(t) {
                                                                                                                   var n = {};
                                                                                                                   return e.each(t.attributes || a,
                                                                                                                                 function(t, r) {
                                                                                                                                 0 == r.name.indexOf("data-") && (n[o(r.name.replace("data-", ""))] = e.zepto.deserializeValue(r.value))
                                                                                                                                 }),
                                                                                                                   n
                                                                                                                   }
                                                                                                                   var i = {},
                                                                                                                   s = e.fn.data,
                                                                                                                   o = e.camelCase,
                                                                                                                   u = e.expando = "Zepto" + +(new Date),
                                                                                                                   a = [];
                                                                                                                   e.fn.data = function(r, i) {
                                                                                                                   return void 0 === i ? e.isPlainObject(r) ? this.each(function(t, i) {
                                                                                                                                                                        e.each(r,
                                                                                                                                                                               function(e, t) {
                                                                                                                                                                               n(i, e, t)
                                                                                                                                                                               })
                                                                                                                                                                        }) : 0 in this ? t(this[0], r) : void 0 : this.each(function() {
                                                                                                                                                                                                                            n(this, r, i)
                                                                                                                                                                                                                            })
                                                                                                                   },
                                                                                                                   e.fn.removeData = function(t) {
                                                                                                                   return "string" == typeof t && (t = t.split(/\s+/)),
                                                                                                                   this.each(function() {
                                                                                                                             var n = this[u],
                                                                                                                             r = n && i[n];
                                                                                                                             r && e.each(t || r,
                                                                                                                                         function(e) {
                                                                                                                                         delete r[t ? o(this) : e]
                                                                                                                                         })
                                                                                                                             })
                                                                                                                   },
                                                                                                                   ["remove", "empty"].forEach(function(t) {
                                                                                                                                               var n = e.fn[t];
                                                                                                                                               e.fn[t] = function() {
                                                                                                                                               var e = this.find("*");
                                                                                                                                               return "remove" === t && (e = e.add(this)),
                                                                                                                                               e.removeData(),
                                                                                                                                               n.call(this)
                                                                                                                                               }
                                                                                                                                               })
                                                                                                                   } (Zepto),
                                                                                                                   function(e) {
                                                                                                                   function t(t) {
                                                                                                                   return t = e(t),
                                                                                                                   ( !! t.width() || !!t.height()) && "none" !== t.css("display")
                                                                                                                   }
                                                                                                                   function n(e, t) {
                                                                                                                   e = e.replace(/=#\]/g, '="#"]');
                                                                                                                   var n, r, i = u.exec(e);
                                                                                                                   if (i && i[2] in o && (n = o[i[2]], r = i[3], e = i[1], r)) {
                                                                                                                   var s = Number(r);
                                                                                                                   r = isNaN(s) ? r.replace(/^["']|["']$/g, "") : s
                                                                                                                                               }
                                                                                                                                               return t(e, n, r)
                                                                                                                                               }
                                                                                                                                               var r = e.zepto,
                                                                                                                                               i = r.qsa,
                                                                                                                                               s = r.matches,
                                                                                                                                               o = e.expr[":"] = {
                                                                                                                                               visible: function() {
                                                                                                                                               return t(this) ? this: void 0
                                                                                                                                               },
                                                                                                                                               hidden: function() {
                                                                                                                                               return t(this) ? void 0 : this
                                                                                                                                               },
                                                                                                                                               selected: function() {
                                                                                                                                               return this.selected ? this: void 0
                                                                                                                                               },
                                                                                                                                               checked: function() {
                                                                                                                                               return this.checked ? this: void 0
                                                                                                                                               },
                                                                                                                                               parent: function() {
                                                                                                                                               return this.parentNode
                                                                                                                                               },
                                                                                                                                               first: function(e) {
                                                                                                                                               return 0 === e ? this: void 0
                                                                                                                                               },
                                                                                                                                               last: function(e, t) {
                                                                                                                                               return e === t.length - 1 ? this: void 0
                                                                                                                                               },
                                                                                                                                               eq: function(e, t, n) {
                                                                                                                                               return e === n ? this: void 0
                                                                                                                                               },
                                                                                                                                               contains: function(t, n, r) {
                                                                                                                                               return e(this).text().indexOf(r) > -1 ? this: void 0
                                                                                                                                               },
                                                                                                                                               has: function(e, t, n) {
                                                                                                                                               return r.qsa(this, n).length ? this: void 0
                                                                                                                                               }
                                                                                                                                               },
                                                                                                                                               u = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
                                                                                                                                               a = /^\s*>/,
                                                                                                                                               f = "Zepto" + +(new Date);
                                                                                                                                               r.qsa = function(t, s) {
                                                                                                                                               return n(s,
                                                                                                                                                        function(n, o, u) {
                                                                                                                                                        try {
                                                                                                                                                        var l; ! n && o ? n = "*": a.test(n) && (l = e(t).addClass(f), n = "." + f + " " + n);
                                                                                                                                                        var c = i(t, n)
                                                                                                                                                        } catch(h) {
                                                                                                                                                        throw console.error("error performing selector: %o", s),
                                                                                                                                                        h
                                                                                                                                                        } finally {
                                                                                                                                                        l && l.removeClass(f)
                                                                                                                                                        }
                                                                                                                                                        return o ? r.uniq(e.map(c,
                                                                                                                                                                                function(e, t) {
                                                                                                                                                                                return o.call(e, t, c, u)
                                                                                                                                                                                })) : c
                                                                                                                                                        })
                                                                                                                                               },
                                                                                                                                               r.matches = function(e, t) {
                                                                                                                                               return n(t,
                                                                                                                                                        function(t, n, r) {
                                                                                                                                                        return ! (t && !s(e, t) || n && n.call(e, null, r) !== e)
                                                                                                                                                        })
                                                                                                                                               }
                                                                                                                                               } (Zepto),
                                                                                                                                               define("zepto",
                                                                                                                                                      function(e) {
                                                                                                                                                      return function() {
                                                                                                                                                      var t, n;
                                                                                                                                                      return t || e.$
                                                                                                                                                      }
                                                                                                                                                      } (this)),
                                                                                                                                               !
                                                                                                                                               function() {
                                                                                                                                               function S(e) {
                                                                                                                                               return e.replace(m, "").replace(g, ",").replace(y, "").replace(b, "").replace(w, "").split(E)
                                                                                                                                               }
                                                                                                                                               function x(e) {
                                                                                                                                               return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
                                                                                                                                                                        }
                                                                                                                                                                        function T(e, t) {
                                                                                                                                                                        function C(e) {
                                                                                                                                                                        return a += e.split(/\n/).length - 1,
                                                                                                                                                                        o && (e = e.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")),
                                                                                                                                                                        e && (e = p[1] + x(e) + p[2] + "\n"),
                                                                                                                                                                        e
                                                                                                                                                                        }
                                                                                                                                                                        function k(e) {
                                                                                                                                                                        var r = a;
                                                                                                                                                                        s ? e = s(e, t) : n && (e = e.replace(/\n/g,
                                                                                                                                                                                                              function() {
                                                                                                                                                                                                              return a++,
                                                                                                                                                                                                              "$line=" + a + ";"
                                                                                                                                                                                                              }));
                                                                                                                                                                        if (e.indexOf("=") === 0) {
                                                                                                                                                                        var i = u && !/^=[=#]/.test(e);
                                                                                                                                                                        e = e.replace(/^=[=#]?|[\s;]*$/g, "");
                                                                                                                                                                        if (i) {
                                                                                                                                                                        var o = e.replace(/\s*\([^\)]+\)/, ""); ! l[o] && !/^(include|print)$/.test(o) && (e = "$escape(" + e + ")")
                                                                                                                                                                        } else e = "$string(" + e + ")";
                                                                                                                                                                        e = p[1] + e + p[2]
                                                                                                                                                                        }
                                                                                                                                                                        return n && (e = "$line=" + r + ";" + e),
                                                                                                                                                                        d(S(e),
                                                                                                                                                                          function(e) {
                                                                                                                                                                          if (!e || f[e]) return;
                                                                                                                                                                          var t;
                                                                                                                                                                          e === "print" ? t = m: e === "include" ? t = g: l[e] ? t = "$utils." + e: c[e] ? t = "$helpers." + e: t = "$data." + e,
                                                                                                                                                                          y += e + "=" + t + ",",
                                                                                                                                                                          f[e] = !0
                                                                                                                                                                          }),
                                                                                                                                                                        e + "\n"
                                                                                                                                                                        }
                                                                                                                                                                        var n = t.debug,
                                                                                                                                                                        r = t.openTag,
                                                                                                                                                                        i = t.closeTag,
                                                                                                                                                                        s = t.parser,
                                                                                                                                                                        o = t.compress,
                                                                                                                                                                        u = t.escape,
                                                                                                                                                                        a = 1,
                                                                                                                                                                        f = {
                                                                                                                                                                        $data: 1,
                                                                                                                                                                        $filename: 1,
                                                                                                                                                                        $utils: 1,
                                                                                                                                                                        $helpers: 1,
                                                                                                                                                                        $out: 1,
                                                                                                                                                                        $line: 1
                                                                                                                                                                        },
                                                                                                                                                                        h = "".trim,
                                                                                                                                                                        p = h ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
                                                                                                                                                                        v = h ? "$out+=text;return $out;": "$out.push(text);",
                                                                                                                                                                        m = "function(){var text=''.concat.apply('',arguments);" + v + "}",
                                                                                                                                                                        g = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + v + "}",
                                                                                                                                                                        y = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (n ? "$line=0,": ""),
                                                                                                                                                                        b = p[0],
                                                                                                                                                                        w = "return new String(" + p[3] + ");";
                                                                                                                                                                        d(e.split(r),
                                                                                                                                                                          function(e) {
                                                                                                                                                                          e = e.split(i);
                                                                                                                                                                          var t = e[0],
                                                                                                                                                                          n = e[1];
                                                                                                                                                                          e.length === 1 ? b += C(t) : (b += k(t), n && (b += C(n)))
                                                                                                                                                                          });
                                                                                                                                                                        var E = y + b + w;
                                                                                                                                                                        n && (E = "try{" + E + "}catch(e){" + "throw {" + "filename:$filename," + "name:'Render Error'," + "message:e.message," + "line:$line," + "source:" + x(e) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')" + "};" + "}");
                                                                                                                                                                        try {
                                                                                                                                                                        var T = new Function("$data", "$filename", E);
                                                                                                                                                                        return T.prototype = l,
                                                                                                                                                                        T
                                                                                                                                                                        } catch(N) {
                                                                                                                                                                        throw N.temp = "function anonymous($data,$filename) {" + E + "}",
                                                                                                                                                                        N
                                                                                                                                                                        }
                                                                                                                                                                        }
                                                                                                                                                                        var e = function(e, t) {
                                                                                                                                                                        return typeof t == "string" ? p(t, {
                                                                                                                                                                                                        filename: e
                                                                                                                                                                                                        }) : r(e, t)
                                                                                                                                                                        };
                                                                                                                                                                        e.version = "3.0.0",
                                                                                                                                                                        e.config = function(e, n) {
                                                                                                                                                                        t[e] = n
                                                                                                                                                                        };
                                                                                                                                                                        var t = e.defaults = {
                                                                                                                                                                        openTag: "<%",
                                                                                                                                                                        closeTag: "%>",
                                                                                                                                                                        escape: !0,
                                                                                                                                                                        cache: !0,
                                                                                                                                                                        compress: !1,
                                                                                                                                                                        parser: null
                                                                                                                                                                        },
                                                                                                                                                                        n = e.cache = {};
                                                                                                                                                                        e.render = function(e, t) {
                                                                                                                                                                        return p(e, t)
                                                                                                                                                                        };
                                                                                                                                                                        var r = e.renderFile = function(t, n) {
                                                                                                                                                                        var r = e.get(t) || h({
                                                                                                                                                                                              filename: t,
                                                                                                                                                                                              name: "Render Error",
                                                                                                                                                                                              message: "Template not found"
                                                                                                                                                                                              });
                                                                                                                                                                        return n ? r(n) : r
                                                                                                                                                                        };
                                                                                                                                                                        e.get = function(e) {
                                                                                                                                                                        var t;
                                                                                                                                                                        if (n[e]) t = n[e];
                                                                                                                                                                        else if (typeof document == "object") {
                                                                                                                                                                        var r = document.getElementById(e);
                                                                                                                                                                        if (r) {
                                                                                                                                                                        var i = (r.value || r.innerHTML).replace(/^\s*|\s*$/g, "");
                                                                                                                                                                        t = p(i, {
                                                                                                                                                                              filename: e
                                                                                                                                                                              })
                                                                                                                                                                        }
                                                                                                                                                                        }
                                                                                                                                                                        return t
                                                                                                                                                                        };
                                                                                                                                                                        var i = function(e, t) {
                                                                                                                                                                        return typeof e != "string" && (t = typeof e, t === "number" ? e += "": t === "function" ? e = i(e.call(e)) : e = ""),
                                                                                                                                                                        e
                                                                                                                                                                        },
                                                                                                                                                                        s = {
                                                                                                                                                                        "<": "&#60;",
                                                                                                                                                                        ">": "&#62;",
                                                                                                                                                                        '"': "&#34;",
                                                                                                                                                                        "'": "&#39;",
                                                                                                                                                                        "&": "&#38;"
                                                                                                                                                                        },
                                                                                                                                                                        o = function(e) {
                                                                                                                                                                        return s[e]
                                                                                                                                                                        },
                                                                                                                                                                        u = function(e) {
                                                                                                                                                                        return i(e).replace(/&(?![\w#]+;)|[<>"']/g, o)
                                                                                                                                                                                                           },
                                                                                                                                                                                                           a = Array.isArray ||
                                                                                                                                                                                                           function(e) {
                                                                                                                                                                                                           return {}.toString.call(e) === "[object Array]"
                                                                                                                                                                                                           },
                                                                                                                                                                                                           f = function(e, t) {
                                                                                                                                                                                                           var n, r;
                                                                                                                                                                                                           if (a(e)) for (n = 0, r = e.length; n < r; n++) t.call(e, e[n], n, e);
                                                                                                                                                                                                           else for (n in e) t.call(e, e[n], n)
                                                                                                                                                                                                           },
                                                                                                                                                                                                           l = e.utils = {
                                                                                                                                                                                                           $helpers: {},
                                                                                                                                                                                                           $include: r,
                                                                                                                                                                                                           $string: i,
                                                                                                                                                                                                           $escape: u,
                                                                                                                                                                                                           $each: f
                                                                                                                                                                                                           };
                                                                                                                                                                                                           e.helper = function(e, t) {
                                                                                                                                                                                                           c[e] = t
                                                                                                                                                                                                           };
                                                                                                                                                                                                           var c = e.helpers = l.$helpers;
                                                                                                                                                                                                           e.onerror = function(e) {
                                                                                                                                                                                                           var t = "Template Error\n\n";
                                                                                                                                                                                                           for (var n in e) t += "<" + n + ">\n" + e[n] + "\n\n";
                                                                                                                                                                                                           typeof console == "object" && console.error(t)
                                                                                                                                                                                                           };
                                                                                                                                                                                                           var h = function(t) {
                                                                                                                                                                                                           return e.onerror(t),
                                                                                                                                                                                                           function() {
                                                                                                                                                                                                           return "{Template Error}"
                                                                                                                                                                                                           }
                                                                                                                                                                                                           },
                                                                                                                                                                                                           p = e.compile = function(e, r) {
                                                                                                                                                                                                           function a(t) {
                                                                                                                                                                                                           try {
                                                                                                                                                                                                           return new o(t, s) + ""
                                                                                                                                                                                                           } catch(n) {
                                                                                                                                                                                                           return r.debug ? h(n)() : (r.debug = !0, p(e, r)(t))
                                                                                                                                                                                                           }
                                                                                                                                                                                                           }
                                                                                                                                                                                                           r = r || {};
                                                                                                                                                                                                           for (var i in t) r[i] === undefined && (r[i] = t[i]);
                                                                                                                                                                                                           var s = r.filename;
                                                                                                                                                                                                           try {
                                                                                                                                                                                                           var o = T(e, r)
                                                                                                                                                                                                           } catch(u) {
                                                                                                                                                                                                           return u.filename = s || "anonymous",
                                                                                                                                                                                                           u.name = "Syntax Error",
                                                                                                                                                                                                           h(u)
                                                                                                                                                                                                           }
                                                                                                                                                                                                           return a.prototype = o.prototype,
                                                                                                                                                                                                           a.toString = function() {
                                                                                                                                                                                                           return o.toString()
                                                                                                                                                                                                           },
                                                                                                                                                                                                           s && r.cache && (n[s] = a),
                                                                                                                                                                                                           a
                                                                                                                                                                                                           },
                                                                                                                                                                                                           d = l.$each,
                                                                                                                                                                                                           v = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
                                                                                                                                                                                                           m = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
                                                                                                                                                                        g = /[^\w$]+/g,
                                                                                                                                                                        y = new RegExp(["\\b" + v.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
                                                                                                                                                                        b = /^\d[^,]*|,\d[^,]*/g,
                                                                                                                                                                        w = /^,+|,+$/g,
                                                                                                                                                                        E = /^$|,+/;
                                                                                                                                                                        t.openTag = "{{",
                                                                                                                                                                        t.closeTag = "}}";
                                                                                                                                                                        var N = function(e, t) {
                                                                                                                                                                        var n = t.split(":"),
                                                                                                                                                                        r = n.shift(),
                                                                                                                                                                        i = n.join(":") || "";
                                                                                                                                                                        return i && (i = ", " + i),
                                                                                                                                                                        "$helpers." + r + "(" + e + i + ")"
                                                                                                                                                                        };
                                                                                                                                                                        t.parser = function(t, n) {
                                                                                                                                                                        t = t.replace(/^\s/, "");
                                                                                                                                                                        var r = t.split(" "),
                                                                                                                                                                        i = r.shift(),
                                                                                                                                                                        s = r.join(" ");
                                                                                                                                                                        switch (i) {
                                                                                                                                                                        case "if":
                                                                                                                                                                        t = "if(" + s + "){";
                                                                                                                                                                        break;
                                                                                                                                                                        case "else":
                                                                                                                                                                        r.shift() === "if" ? r = " if(" + r.join(" ") + ")": r = "",
                                                                                                                                                                        t = "}else" + r + "{";
                                                                                                                                                                        break;
                                                                                                                                                                        case "/if":
                                                                                                                                                                        t = "}";
                                                                                                                                                                        break;
                                                                                                                                                                        case "each":
                                                                                                                                                                        var o = r[0] || "$data",
                                                                                                                                                                        u = r[1] || "as",
                                                                                                                                                                        a = r[2] || "$value",
                                                                                                                                                                        f = r[3] || "$index",
                                                                                                                                                                        l = a + "," + f;
                                                                                                                                                                        u !== "as" && (o = "[]"),
                                                                                                                                                                        t = "$each(" + o + ",function(" + l + "){";
                                                                                                                                                                        break;
                                                                                                                                                                        case "/each":
                                                                                                                                                                        t = "});";
                                                                                                                                                                        break;
                                                                                                                                                                        case "echo":
                                                                                                                                                                        t = "print(" + s + ");";
                                                                                                                                                                        break;
                                                                                                                                                                        case "print":
                                                                                                                                                                        case "include":
                                                                                                                                                                        t = i + "(" + r.join(",") + ");";
                                                                                                                                                                        break;
                                                                                                                                                                        default:
                                                                                                                                                                        if (/^\s*\|\s*[\w\$]/.test(s)) {
                                                                                                                                                                        var c = !0;
                                                                                                                                                                        t.indexOf("#") === 0 && (t = t.substr(1), c = !1);
                                                                                                                                                                        var h = 0,
                                                                                                                                                                        p = t.split("|"),
                                                                                                                                                                        d = p.length,
                                                                                                                                                                        v = p[h++];
                                                                                                                                                                        for (; h < d; h++) v = N(v, p[h]);
                                                                                                                                                                        t = (c ? "=": "=#") + v
                                                                                                                                                                        } else e.helpers[i] ? t = "=#" + i + "(" + r.join(",") + ");": t = "=" + t
                                                                                                                                                                        }
                                                                                                                                                                        return t
                                                                                                                                                                        },
                                                                                                                                                                        typeof define == "function" ? define("template", [],
                                                                                                                                                                                                             function() {
                                                                                                                                                                                                             return e
                                                                                                                                                                                                             }) : typeof exports != "undefined" ? module.exports = e: this.template = e
                                                                                                                                                                        } (),
                                                                                                                                                                        function(window) {
                                                                                                                                                                        if (window.WebViewJSBridge) return;
                                                                                                                                                                        window.WebViewJSBridge = {},
                                                                                                                                                                        console.log("--- kerkee init begin---");
                                                                                                                                                                        var browser = {
                                                                                                                                                                        versions: function() {
                                                                                                                                                                        var e = navigator.userAgent,
                                                                                                                                                                        t = navigator.appVersion;
                                                                                                                                                                        return {
                                                                                                                                                                        trident: e.indexOf("Trident") > -1,
                                                                                                                                                                        presto: e.indexOf("Presto") > -1,
                                                                                                                                                                        webKit: e.indexOf("AppleWebKit") > -1,
                                                                                                                                                                        gecko: e.indexOf("Gecko") > -1 && e.indexOf("KHTML") == -1,
                                                                                                                                                                        mobile: !!e.match(/AppleWebKit.*Mobile.*/),
                                                                                                                                                                        ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                                                                                                                                                                                       android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
                                                                                                                                                                                       iPhone: e.indexOf("iPhone") > -1,
                                                                                                                                                                                       iPad: e.indexOf("iPad") > -1,
                                                                                                                                                                                       iPod: e.indexOf("iPod") > -1,
                                                                                                                                                                                       webApp: e.indexOf("Safari") == -1,
                                                                                                                                                                                       weixin: e.indexOf("MicroMessenger") > -1,
                                                                                                                                                                                       qq: e.match(/\sQQ/i) == " qq"
                                                                                                                                                                                       }
                                                                                                                                                                                       } (),
                                                                                                                                                                                       language: (navigator.browserLanguage || navigator.language).toLowerCase()
                                                                                                                                                                                       },
                                                                                                                                                                                       global = this,
                                                                                                                                                                                       ApiBridge = {
                                                                                                                                                                                       msgQueue: [],
                                                                                                                                                                                       callbackCache: [],
                                                                                                                                                                                       callbackId: 0,
                                                                                                                                                                                       processingMsg: !1,
                                                                                                                                                                                       isReady: !1,
                                                                                                                                                                                       isNotifyReady: !1
                                                                                                                                                                                       };
                                                                                                                                                                                       ApiBridge.create = function() {
                                                                                                                                                                                       ApiBridge.bridgeIframe = document.createElement("iframe"),
                                                                                                                                                                                       ApiBridge.bridgeIframe.style.display = "none",
                                                                                                                                                                                       document.documentElement.appendChild(ApiBridge.bridgeIframe)
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.prepareProcessingMessages = function() {
                                                                                                                                                                                       ApiBridge.processingMsg = !0
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.fetchMessages = function() {
                                                                                                                                                                                       if (ApiBridge.msgQueue.length > 0) {
                                                                                                                                                                                       var e = JSON.stringify(ApiBridge.msgQueue);
                                                                                                                                                                                       return ApiBridge.msgQueue.length = 0,
                                                                                                                                                                                       e
                                                                                                                                                                                       }
                                                                                                                                                                                       return ApiBridge.processingMsg = !1,
                                                                                                                                                                                       null
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.callNative = function(e, t, n, r) {
                                                                                                                                                                                       var i = {};
                                                                                                                                                                                       i.clz = e,
                                                                                                                                                                                       i.method = t,
                                                                                                                                                                                       n != undefined && (i.args = n);
                                                                                                                                                                                       if (r) {
                                                                                                                                                                                       var s = ApiBridge.getCallbackId();
                                                                                                                                                                                       ApiBridge.callbackCache[s] = r,
                                                                                                                                                                                       i.args ? i.args.callbackId = s.toString() : i.args = {
                                                                                                                                                                                       callbackId: s.toString()
                                                                                                                                                                                       }
                                                                                                                                                                                       }
                                                                                                                                                                                       if (browser.versions.ios) ApiBridge.bridgeIframe == undefined && ApiBridge.create(),
                                                                                                                                                                                       ApiBridge.msgQueue.push(i),
                                                                                                                                                                                       ApiBridge.processingMsg || (ApiBridge.bridgeIframe.src = "kcnative://go");
                                                                                                                                                                                       else if (browser.versions.android) return prompt(JSON.stringify(i))
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.log = function(e) {
                                                                                                                                                                                       ApiBridge.callNative("ApiBridge", "JSLog", {
                                                                                                                                                                                                            msg: e
                                                                                                                                                                                                            })
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.getCallbackId = function() {
                                                                                                                                                                                       return ApiBridge.callbackId++
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.onCallback = function(e, t) {
                                                                                                                                                                                       ApiBridge.callbackCache[e] && ApiBridge.callbackCache[e](t)
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.onBridgeInitComplete = function(e) {
                                                                                                                                                                                       ApiBridge.callNative("ApiBridge", "onBridgeInitComplete", {},
                                                                                                                                                                                                            e)
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.onNativeInitComplete = function(e) {
                                                                                                                                                                                       ApiBridge.isReady = !0,
                                                                                                                                                                                       console.log("--- kerkee onNativeInitComplete end ---"),
                                                                                                                                                                                       e && (e(), ApiBridge.isNotifyReady = !0, console.log("--- device ready go--- "))
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.compile = function(aIdentity, aJS) {
                                                                                                                                                                                       var value, error;
                                                                                                                                                                                       try {
                                                                                                                                                                                       value = eval(aJS)
                                                                                                                                                                                       } catch(e) {
                                                                                                                                                                                       var err = {};
                                                                                                                                                                                       err.name = e.name,
                                                                                                                                                                                       err.message = e.message,
                                                                                                                                                                                       err.number = e.number & 65535,
                                                                                                                                                                                       error = err
                                                                                                                                                                                       }
                                                                                                                                                                                       ApiBridge.callNative("ApiBridge", "compile", {
                                                                                                                                                                                                            identity: aIdentity,
                                                                                                                                                                                                            returnValue: value,
                                                                                                                                                                                                            error: error
                                                                                                                                                                                                            })
                                                                                                                                                                                       };
                                                                                                                                                                                       var _Configs = {
                                                                                                                                                                                       isOpenJSLog: !1,
                                                                                                                                                                                       sysLog: {},
                                                                                                                                                                                       isOpenNativeXHR: !0,
                                                                                                                                                                                       sysXHR: {}
                                                                                                                                                                                       };
                                                                                                                                                                                       _Configs.sysLog = global.console.log,
                                                                                                                                                                                       _Configs.sysXHR = global.XMLHttpRequest;
                                                                                                                                                                                       var kerkee = {};
                                                                                                                                                                                       kerkee.Event = {},
                                                                                                                                                                                       kerkee.addEventListener = function(e, t) {
                                                                                                                                                                                       ApiBridge.callNative("event", "addEventListener", {
                                                                                                                                                                                                            event: e
                                                                                                                                                                                                            },
                                                                                                                                                                                                            t)
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.registerHitPageBottomListener = function(e, t) {
                                                                                                                                                                                       ApiBridge.callNative("ApiBridge", "setHitPageBottomThreshold", {
                                                                                                                                                                                                            threshold: t
                                                                                                                                                                                                            }),
                                                                                                                                                                                       kerkee.onHitPageBottom = e
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.registerScrollListener = function(e) {
                                                                                                                                                                                       ApiBridge.callNative("ApiBridge", "setPageScroll", {
                                                                                                                                                                                                            isScrollOn: !0
                                                                                                                                                                                                            }),
                                                                                                                                                                                       kerkee.onPageScroll = e
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.testJSBrige = function(e) {
                                                                                                                                                                                       ApiBridge.callNative("jsBridgeClient", "testJSBrige", {
                                                                                                                                                                                                            info: e
                                                                                                                                                                                                            })
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.openJSLog = function() {
                                                                                                                                                                                       _Configs.isOpenJSLog = !0,
                                                                                                                                                                                       global.console.log = ApiBridge.log
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.closeJSLog = function() {
                                                                                                                                                                                       _Configs.isOpenJSLog = !1,
                                                                                                                                                                                       global.console.log = _Configs.sysLog
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.commonApi = function(e, t) {
                                                                                                                                                                                       ApiBridge.callNative("jsBridgeClient", "commonApi", {
                                                                                                                                                                                                            info: e
                                                                                                                                                                                                            },
                                                                                                                                                                                                            t)
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.onDeviceReady = function(e) {
                                                                                                                                                                                       ApiBridge.onDeviceReady = e,
                                                                                                                                                                                       ApiBridge.isReady && !ApiBridge.isNotifyReady && e && (console.log("-- device ready --"), e(), ApiBridge.isNotifyReady = !0)
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.invoke = function(e, t, n, r) {
                                                                                                                                                                                       r ? ApiBridge.callNative(e, t, n, r) : ApiBridge.callNative(e, t, n)
                                                                                                                                                                                       },
                                                                                                                                                                                       kerkee.onSetImage = function(e, t) {
                                                                                                                                                                                       var n = document.querySelectorAll('img[src$="' + e + '"]');
                                                                                                                                                                                       for (var r = 0; r < n.length; ++r) n[r].src = t
                                                                                                                                                                                       };
                                                                                                                                                                                       var _XMLHttpRequest = function() {
                                                                                                                                                                                       this.id = _XMLHttpRequest.globalId++,
                                                                                                                                                                                       _XMLHttpRequest.cache[this.id] = this,
                                                                                                                                                                                       this.status = 0,
                                                                                                                                                                                       this.statusText = "",
                                                                                                                                                                                       this.readyState = 0,
                                                                                                                                                                                       this.responseText = "",
                                                                                                                                                                                       this.headers = {},
                                                                                                                                                                                       this.onreadystatechange = undefined,
                                                                                                                                                                                       ApiBridge.callNative("XMLHttpRequest", "create", {
                                                                                                                                                                                                            id: this.id
                                                                                                                                                                                                            })
                                                                                                                                                                                       };
                                                                                                                                                                                       _XMLHttpRequest.globalId = 0,
                                                                                                                                                                                       _XMLHttpRequest.cache = [],
                                                                                                                                                                                       _XMLHttpRequest.setProperties = function(e) {
                                                                                                                                                                                       var t = e.id;
                                                                                                                                                                                       if (_XMLHttpRequest.cache[t]) {
                                                                                                                                                                                       var n = _XMLHttpRequest.cache[t];
                                                                                                                                                                                       e.hasOwnProperty("status") && (n.status = e.status),
                                                                                                                                                                                       e.hasOwnProperty("statusText") && (n.statusText = e.statusText),
                                                                                                                                                                                       e.hasOwnProperty("readyState") && (n.readyState = e.readyState),
                                                                                                                                                                                       e.hasOwnProperty("responseText") && (n.responseText = e.responseText),
                                                                                                                                                                                       e.hasOwnProperty("headers") && (n.headers = e.headers),
                                                                                                                                                                                       _XMLHttpRequest.cache[t].onreadystatechange && _XMLHttpRequest.cache[t].onreadystatechange()
                                                                                                                                                                                       }
                                                                                                                                                                                       },
                                                                                                                                                                                       _XMLHttpRequest.prototype.open = function(e, t, n) {
                                                                                                                                                                                       ApiBridge.callNative("XMLHttpRequest", "open", {
                                                                                                                                                                                                            id: this.id,
                                                                                                                                                                                                            method: e,
                                                                                                                                                                                                            url: t,
                                                                                                                                                                                                            scheme: window.location.protocol,
                                                                                                                                                                                                            host: window.location.hostname,
                                                                                                                                                                                                            port: window.location.port,
                                                                                                                                                                                                            href: window.location.href,
                                                                                                                                                                                                            referer: document.referrer != "" ? document.referrer: undefined,
                                                                                                                                                                                                            useragent: navigator.userAgent,
                                                                                                                                                                                                            cookie: document.cookie != "" ? document.cookie: undefined,
                                                                                                                                                                                                            async: n,
                                                                                                                                                                                                            timeout: this.timeout
                                                                                                                                                                                                            })
                                                                                                                                                                                       },
                                                                                                                                                                                       _XMLHttpRequest.prototype.send = function(e) {
                                                                                                                                                                                       e != null ? ApiBridge.callNative("XMLHttpRequest", "send", {
                                                                                                                                                                                                                        id: this.id,
                                                                                                                                                                                                                        data: e
                                                                                                                                                                                                                        }) : ApiBridge.callNative("XMLHttpRequest", "send", {
                                                                                                                                                                                                                                                  id: this.id
                                                                                                                                                                                                                                                  })
                                                                                                                                                                                       },
                                                                                                                                                                                       _XMLHttpRequest.prototype.overrideMimeType = function(e) {
                                                                                                                                                                                       ApiBridge.callNative("XMLHttpRequest", "overrideMimeType", {
                                                                                                                                                                                                            id: this.id,
                                                                                                                                                                                                            mimetype: e
                                                                                                                                                                                                            })
                                                                                                                                                                                       },
                                                                                                                                                                                       _XMLHttpRequest.prototype.abort = function() {
                                                                                                                                                                                       ApiBridge.callNative("XMLHttpRequest", "abort", {
                                                                                                                                                                                                            id: this.id
                                                                                                                                                                                                            })
                                                                                                                                                                                       },
                                                                                                                                                                                       _XMLHttpRequest.prototype.setRequestHeader = function(e, t) {
                                                                                                                                                                                       ApiBridge.callNative("XMLHttpRequest", "setRequestHeader", {
                                                                                                                                                                                                            id: this.id,
                                                                                                                                                                                                            headerName: e,
                                                                                                                                                                                                            headerValue: t
                                                                                                                                                                                                            })
                                                                                                                                                                                       },
                                                                                                                                                                                       _XMLHttpRequest.prototype.getAllResponseHeaders = function() {
                                                                                                                                                                                       var e = "";
                                                                                                                                                                                       for (var t in this.headers) e += t + ": " + this.headers[t] + "\r\n";
                                                                                                                                                                                       return e
                                                                                                                                                                                       },
                                                                                                                                                                                       _XMLHttpRequest.prototype.getResponseHeader = function(e) {
                                                                                                                                                                                       var t, n = e.toUpperCase();
                                                                                                                                                                                       for (var r in this.headers) n == r.toUpperCase() && (t = this.headers[r]);
                                                                                                                                                                                       return t
                                                                                                                                                                                       },
                                                                                                                                                                                       _XMLHttpRequest.deleteObject = function(e) {
                                                                                                                                                                                       _XMLHttpRequest.cache[e] && (_XMLHttpRequest.cache[e] = undefined)
                                                                                                                                                                                       },
                                                                                                                                                                                       global.ApiBridge = ApiBridge,
                                                                                                                                                                                       global.kerkee = kerkee,
                                                                                                                                                                                       global.XMLHttpRequest = _XMLHttpRequest,
                                                                                                                                                                                       global.jsBridgeClient = kerkee,
                                                                                                                                                                                       kerkee.register = function(e) {
                                                                                                                                                                                       e.ApiBridge = window.ApiBridge,
                                                                                                                                                                                       e.kerkee = window.kerkee,
                                                                                                                                                                                       e.console.log = window.console.log,
                                                                                                                                                                                       e.XMLHttpRequest = window.XMLHttpRequest,
                                                                                                                                                                                       e.open = window.open
                                                                                                                                                                                       },
                                                                                                                                                                                       ApiBridge.onBridgeInitComplete(function(e) {
                                                                                                                                                                                                                      e && (e.hasOwnProperty("isOpenJSLog") && (_Configs.isOpenJSLog = e.isOpenJSLog), e.hasOwnProperty("isOpenNativeXHR") && (_Configs.isOpenNativeXHR = e.isOpenNativeXHR)),
                                                                                                                                                                                                                      _Configs.isOpenJSLog && (global.console.log = ApiBridge.log),
                                                                                                                                                                                                                      ApiBridge.onNativeInitComplete(ApiBridge.onDeviceReady)
                                                                                                                                                                                                                      })
                                                                                                                                                                                       } (window),
                                                                                                                                                                                       define("kerkee",
                                                                                                                                                                                              function(e) {
                                                                                                                                                                                              return function() {
                                                                                                                                                                                              var t, n;
                                                                                                                                                                                              return t || e.kerkee
                                                                                                                                                                                              }
                                                                                                                                                                                              } (this)),
                                                                                                                                                                                       define("api/helper/util", ["kerkee"],
                                                                                                                                                                                              function(e) {
                                                                                                                                                                                              var t = {
                                                                                                                                                                                              Klass: function() {
                                                                                                                                                                                              var e = function(e, t) {
                                                                                                                                                                                              function i() {
                                                                                                                                                                                              this.constructor = e
                                                                                                                                                                                              }
                                                                                                                                                                                              for (var r in t) n.call(t, r) && (e[r] = t[r]);
                                                                                                                                                                                              return i.prototype = t.prototype,
                                                                                                                                                                                              e.prototype = new i,
                                                                                                                                                                                              e.__super__ = t.prototype,
                                                                                                                                                                                              e
                                                                                                                                                                                              },
                                                                                                                                                                                              t = function(e, t) {
                                                                                                                                                                                              return function() {
                                                                                                                                                                                              return e.apply(t, arguments)
                                                                                                                                                                                              }
                                                                                                                                                                                              },
                                                                                                                                                                                              n = {}.hasOwnProperty,
                                                                                                                                                                                              r = function(e, t) {
                                                                                                                                                                                              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                                                                                                                                                                                              return e
                                                                                                                                                                                              },
                                                                                                                                                                                              i = function() {
                                                                                                                                                                                              function t(e) {
                                                                                                                                                                                              this.attributes = e
                                                                                                                                                                                              }
                                                                                                                                                                                              return t.include = function(e) {
                                                                                                                                                                                              var n = e.included;
                                                                                                                                                                                              for (var r in e) t.prototype[r] = e[r];
                                                                                                                                                                                              n && n(t)
                                                                                                                                                                                              },
                                                                                                                                                                                              t.sub = function(t) {
                                                                                                                                                                                              return e(t, this)
                                                                                                                                                                                              },
                                                                                                                                                                                              t.prototype._exec = function(e) {
                                                                                                                                                                                              e.callBack ? this.attributes.jsbc.invoke(e.nativeCls, e.method, e.param, e.callBack) : this.attributes.jsbc.invoke(e.nativeCls, e.method, e.param)
                                                                                                                                                                                              },
                                                                                                                                                                                              t.prototype.sendData = function(e) {
                                                                                                                                                                                              var t = r({
                                                                                                                                                                                                        nativeCls: this.attributes.nativeCls,
                                                                                                                                                                                                        method: "",
                                                                                                                                                                                                        param: {}
                                                                                                                                                                                                        },
                                                                                                                                                                                                        e);
                                                                                                                                                                                              this._exec(t)
                                                                                                                                                                                              },
                                                                                                                                                                                              t.prototype.start = function(e) {
                                                                                                                                                                                              this.attributes.jsbc.onDeviceReady(e)
                                                                                                                                                                                              },
                                                                                                                                                                                              t
                                                                                                                                                                                              } ();
                                                                                                                                                                                              return i
                                                                                                                                                                                              }
                                                                                                                                                                                              };
                                                                                                                                                                                              return t
                                                                                                                                                                                              }),
                                                                                                                                                                                       define("clientApi/clientUI", ["api/helper/util"],
                                                                                                                                                                                              function(e) {
                                                                                                                                                                                              var t = function() {
                                                                                                                                                                                              function t() {
                                                                                                                                                                                              t.__super__.constructor.apply(this, arguments)
                                                                                                                                                                                              }
                                                                                                                                                                                              return e.Klass().sub(t),
                                                                                                                                                                                              t.include({
                                                                                                                                                                                                        clientToast: function(e, t) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "clientToast",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      msg: e,
                                                                                                                                                                                                                      type: t || "notice"
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        clientDownloadMainVer: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "clientDownloadMainVer",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "clientDownloadMainVer",
                                                                                                                                                                                                                      type: e
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        switchLocation: function() {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "switchLocation",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "switchLocation"
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        backHeadChannel: function() {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "backHeadChannel",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "backHeadChannel"
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        showLoadingView: function(e, t) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "showLoadingView",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      visible: t,
                                                                                                                                                                                                                      channelid: e
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        showLoadingFailedView: function(e, t) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "showLoadingFailedView",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      visible: t,
                                                                                                                                                                                                                      channelid: e
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        showVideoPlayNoWifiConfirmDialog: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "showVideoPlayNoWifiConfirmDialog",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "showVideoPlayNoWifiConfirmDialog"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }),
                                                                                                                                                                                              t
                                                                                                                                                                                              } ();
                                                                                                                                                                                              return new t({
                                                                                                                                                                                                           name: "client ui",
                                                                                                                                                                                                           author: "huangjian",
                                                                                                                                                                                                           version: "1.0",
                                                                                                                                                                                                           jsbc: jsBridgeClient,
                                                                                                                                                                                                           nativeCls: "clientUI"
                                                                                                                                                                                                           })
                                                                                                                                                                                              }),
                                                                                                                                                                                       define("clientApi/clientInfo", ["api/helper/util"],
                                                                                                                                                                                              function(e) {
                                                                                                                                                                                              var t = function() {
                                                                                                                                                                                              function t() {
                                                                                                                                                                                              t.__super__.constructor.apply(this, arguments)
                                                                                                                                                                                              }
                                                                                                                                                                                              return e.Klass().sub(t),
                                                                                                                                                                                              t.include({
                                                                                                                                                                                                        getHost: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "getHost",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "getHost"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        getRequestParam: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "getRequestParam",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "getRequestParam"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        getArticleNeedParam: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "getArticleNeedParam",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "getArticleNeedParam"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        addLog: function(e, t) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "addLog",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      type: e,
                                                                                                                                                                                                                      log: t
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        getNetwork: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "getNetwork",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "getNetwork"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        getDevice: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "getDevice",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: "getDevice"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        setArticleCmtCount: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "setArticleCmtCount",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      count: e
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }),
                                                                                                                                                                                              t
                                                                                                                                                                                              } ();
                                                                                                                                                                                              return new t({
                                                                                                                                                                                                           name: "client infomation",
                                                                                                                                                                                                           author: "huangjian",
                                                                                                                                                                                                           version: "1.0",
                                                                                                                                                                                                           jsbc: jsBridgeClient,
                                                                                                                                                                                                           nativeCls: "clientInfo"
                                                                                                                                                                                                           })
                                                                                                                                                                                              }),
                                                                                                                                                                                       define("api/nativeUI/widget", ["api/helper/util"],
                                                                                                                                                                                              function(e) {
                                                                                                                                                                                              var t = function() {
                                                                                                                                                                                              function t() {
                                                                                                                                                                                              t.__super__.constructor.apply(this, arguments)
                                                                                                                                                                                              }
                                                                                                                                                                                              return e.Klass().sub(t),
                                                                                                                                                                                              t.include({
                                                                                                                                                                                                        toast: function(e) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "toast",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      info: e
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        showDialog: function(e, t, n, r, i) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "showDialog",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      title: e || "提示",
                                                                                                                                                                                                                      message: t || "内容",
                                                                                                                                                                                                                      okBtn: r || "确定",
                                                                                                                                                                                                                      cancelBtn: i || "取消"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: n
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        alertDialog: function(e, t, n, r) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "showDialog",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      title: e || "提示",
                                                                                                                                                                                                                      message: t || "内容",
                                                                                                                                                                                                                      okBtn: r || "确定"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: n
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }),
                                                                                                                                                                                              t
                                                                                                                                                                                              } ();
                                                                                                                                                                                              return new t({
                                                                                                                                                                                                           name: "device widget",
                                                                                                                                                                                                           author: "huangjian",
                                                                                                                                                                                                           version: "1.0",
                                                                                                                                                                                                           jsbc: jsBridgeClient,
                                                                                                                                                                                                           nativeCls: "widget"
                                                                                                                                                                                                           })
                                                                                                                                                                                              }),
                                                                                                                                                                                       define("clientApi/testApi", ["api/helper/util"],
                                                                                                                                                                                              function(e) {
                                                                                                                                                                                              var t = function() {
                                                                                                                                                                                              function t() {
                                                                                                                                                                                              t.__super__.constructor.apply(this, arguments)
                                                                                                                                                                                              }
                                                                                                                                                                                              return e.Klass().sub(t),
                                                                                                                                                                                              t.include({
                                                                                                                                                                                                        getTestInfo: function(e, t) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "testInfo",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      testInfo: "I'm testInfo"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }),
                                                                                                                                                                                              t
                                                                                                                                                                                              } ();
                                                                                                                                                                                              return new t({
                                                                                                                                                                                                           name: "kerkee testApi",
                                                                                                                                                                                                           author: "zihong",
                                                                                                                                                                                                           version: "1.0",
                                                                                                                                                                                                           jsbc: jsBridgeClient,
                                                                                                                                                                                                           nativeCls: "testModule"
                                                                                                                                                                                                           })
                                                                                                                                                                                              }),
                                                                                                                                                                                       define("clientApi/objExampleApi", ["api/helper/util"],
                                                                                                                                                                                              function(e) {
                                                                                                                                                                                              var t = function() {
                                                                                                                                                                                              function t() {
                                                                                                                                                                                              t.__super__.constructor.apply(this, arguments)
                                                                                                                                                                                              }
                                                                                                                                                                                              return e.Klass().sub(t),
                                                                                                                                                                                              t.include({
                                                                                                                                                                                                        objExampleNotStaticFunction: function(e, t) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "objExampleNotStaticFunction",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      testInfo: "I'm objExampleNotStaticFunction"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        },
                                                                                                                                                                                                        objExampleStaticFunction: function(e, t) {
                                                                                                                                                                                                        this.sendData({
                                                                                                                                                                                                                      method: "objExampleStaticFunction",
                                                                                                                                                                                                                      param: {
                                                                                                                                                                                                                      testInfo: "I'm objExampleStaticFunction"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      callBack: e
                                                                                                                                                                                                                      })
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }),
                                                                                                                                                                                              t
                                                                                                                                                                                              } ();
                                                                                                                                                                                              return new t({
                                                                                                                                                                                                           name: "kerkee objExampleApi",
                                                                                                                                                                                                           author: "zihong",
                                                                                                                                                                                                           version: "1.0",
                                                                                                                                                                                                           jsbc: jsBridgeClient,
                                                                                                                                                                                                           nativeCls: "objExampleApi"
                                                                                                                                                                                                           })
                                                                                                                                                                                              }),
                                                                                                                                                                                       define("domReady", [],
                                                                                                                                                                                              function() {
                                                                                                                                                                                              "use strict";
                                                                                                                                                                                              function u(e) {
                                                                                                                                                                                              var t;
                                                                                                                                                                                              for (t = 0; t < e.length; t += 1) e[t](s)
                                                                                                                                                                                              }
                                                                                                                                                                                              function a() {
                                                                                                                                                                                              var e = o;
                                                                                                                                                                                              i && e.length && (o = [], u(e))
                                                                                                                                                                                              }
                                                                                                                                                                                              function f() {
                                                                                                                                                                                              i || (i = !0, n && clearInterval(n), a())
                                                                                                                                                                                              }
                                                                                                                                                                                              function c(e) {
                                                                                                                                                                                              return i ? e(s) : o.push(e),
                                                                                                                                                                                              c
                                                                                                                                                                                              }
                                                                                                                                                                                              var e, t, n, r = typeof window != "undefined" && window.document,
                                                                                                                                                                                              i = !r,
                                                                                                                                                                                              s = r ? document: null,
                                                                                                                                                                                              o = [];
                                                                                                                                                                                              if (r) {
                                                                                                                                                                                              if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, !1),
                                                                                                                                                                                              window.addEventListener("load", f, !1);
                                                                                                                                                                                              else if (window.attachEvent) {
                                                                                                                                                                                              window.attachEvent("onload", f),
                                                                                                                                                                                              t = document.createElement("div");
                                                                                                                                                                                              try {
                                                                                                                                                                                              e = window.frameElement === null
                                                                                                                                                                                              } catch(l) {}
                                                                                                                                                                                              t.doScroll && e && window.external && (n = setInterval(function() {
                                                                                                                                                                                                                                                     try {
                                                                                                                                                                                                                                                     t.doScroll(),
                                                                                                                                                                                                                                                     f()
                                                                                                                                                                                                                                                     } catch(e) {}
                                                                                                                                                                                                                                                     },
                                                                                                                                                                                                                                                     30))
                                                                                                                                                                                              }
                                                                                                                                                                                              document.readyState === "complete" && f()
                                                                                                                                                                                              }
                                                                                                                                                                                              return c.version = "2.0.1",
                                                                                                                                                                                              c.load = function(e, t, n, r) {
                                                                                                                                                                                              r.isBuild ? n(null) : c(n)
                                                                                                                                                                                              },
                                                                                                                                                                                              c
                                                                                                                                                                                              }),
                                                                                                                                                                                       define("modules/test/testDo", ["zepto", "template", "clientApi/clientUI", "clientApi/clientInfo", "api/helper/util", "api/nativeUI/widget", "clientApi/testApi", "clientApi/objExampleApi", "domReady!"],
                                                                                                                                                                                              function(e, t, n, r, i, s, o, u) {
                                                                                                                                                                                              function a() {}
                                                                                                                                                                                              return a.prototype.render = function() {
                                                                                                                                                                                              e("body").on("click", ".toast",
                                                                                                                                                                                                           function() {
                                                                                                                                                                                                           s.toast("this is a test")
                                                                                                                                                                                                           }),
                                                                                                                                                                                              e("body").on("click", ".alert",
                                                                                                                                                                                                           function() {
                                                                                                                                                                                                           s.alertDialog("this is a test", "this is a test message",
                                                                                                                                                                                                                         function() {
                                                                                                                                                                                                                         alert("callback normal")
                                                                                                                                                                                                                         },
                                                                                                                                                                                                                         "OK")
                                                                                                                                                                                                           }),
                                                                                                                                                                                              e("body").on("click", ".alertClientUI",
                                                                                                                                                                                                           function() {
                                                                                                                                                                                                           n.clientToast("this is a test", "warn")
                                                                                                                                                                                                           }),
                                                                                                                                                                                              e("body").on("click", ".testInfo",
                                                                                                                                                                                                           function() {
                                                                                                                                                                                                           alert(1),
                                                                                                                                                                                                           o.getTestInfo(function(e) {
                                                                                                                                                                                                                         console.log("callback:" + e)
                                                                                                                                                                                                                         },
                                                                                                                                                                                                                         "test getTestInfo fun")
                                                                                                                                                                                                           }),
                                                                                                                                                                                              e("body").on("click", ".objExampleNotStaticFunction",
                                                                                                                                                                                                           function() {
                                                                                                                                                                                                           u.objExampleNotStaticFunction(function(e) {
                                                                                                                                                                                                                                         console.log("callback:" + e)
                                                                                                                                                                                                                                         },
                                                                                                                                                                                                                                         "objExampleApi.objExampleNotStaticFunction that click from js")
                                                                                                                                                                                                           }),
                                                                                                                                                                                              e("body").on("click", ".objExampleStaticFunction",
                                                                                                                                                                                                           function() {
                                                                                                                                                                                                           u.objExampleStaticFunction(function(e) {
                                                                                                                                                                                                                                      console.log("callback:" + e)
                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                      "objExampleApi.objExampleStaticFunction that click from js")
                                                                                                                                                                                                           }),
                                                                                                                                                                                              window.testReturnString = function(e) {
                                                                                                                                                                                              return alert(typeof e),
                                                                                                                                                                                              alert(e),
                                                                                                                                                                                              alert(JSON.stringify(e)),
                                                                                                                                                                                              "Im testReturnString"
                                                                                                                                                                                              }
                                                                                                                                                                                              },
                                                                                                                                                                                              a.prototype.init = function() {
                                                                                                                                                                                              var e = this;
                                                                                                                                                                                              o.start(function() {
                                                                                                                                                                                                      e.render()
                                                                                                                                                                                                      })
                                                                                                                                                                                              },
                                                                                                                                                                                              new a
                                                                                                                                                                                              }),
                                                                                                                                                                                       requirejs.config({
                                                                                                                                                                                                        baseUrl: "../../../html",
                                                                                                                                                                                                        paths: {
                                                                                                                                                                                                        core: "../core",
                                                                                                                                                                                                        api: "../core/coreApi",
                                                                                                                                                                                                        when: "lib/when",
                                                                                                                                                                                                        kerkee: "../core/kerkee",
                                                                                                                                                                                                        swiper: "lib/swiper.min",
                                                                                                                                                                                                        zepto: "lib/zepto.min",
                                                                                                                                                                                                        lazyload: "lib/jquery.lazyload",
                                                                                                                                                                                                        underscore: "lib/underscore",
                                                                                                                                                                                                        fastclick: "lib/fastclick",
                                                                                                                                                                                                        template: "lib/template",
                                                                                                                                                                                                        domReady: "widget/domReady",
                                                                                                                                                                                                        text: "widget/require.text",
                                                                                                                                                                                                        css: "widget/require.css",
                                                                                                                                                                                                        text_path: "modules",
                                                                                                                                                                                                        css_path: "static/css"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        waitSeconds: 10,
                                                                                                                                                                                                        "*": {
                                                                                                                                                                                                        text: "widget/require.text",
                                                                                                                                                                                                        css: "widget/require.css"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        shim: {
                                                                                                                                                                                                        kerkee: {
                                                                                                                                                                                                        exports: "kerkee"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        zepto: {
                                                                                                                                                                                                        exports: "$"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        template: {
                                                                                                                                                                                                        exports: "template"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        lazyload: {
                                                                                                                                                                                                        deps: ["zepto"],
                                                                                                                                                                                                        exports: "lazyload"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        when: {
                                                                                                                                                                                                        deps: ["zepto"]
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }),
                                                                                                                                                                                       require(["modules/test/testDo"],
                                                                                                                                                                                               function(e) {
                                                                                                                                                                                               e.init()
                                                                                                                                                                                               }),
                                                                                                                                                                                       define("modules/test/test",
                                                                                                                                                                                              function() {});