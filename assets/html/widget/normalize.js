define([],
       function() {
       function s(e, i, s) {
       if (e.match(r) || e.match(n)) return e;
       e = t(e);
       var a = s.match(n),
       f = i.match(n);
       return f && (!a || a[1] != f[1] || a[2] != f[2]) ? o(e, i) : u(o(e, i), s)
       }
       function o(e, t) {
       e.substr(0, 2) == "./" && (e = e.substr(2));
       if (e.match(r) || e.match(n)) return e;
       var i = t.split("/"),
       s = e.split("/");
       i.pop();
       while (curPart = s.shift()) curPart == ".." ? i.pop() : i.push(curPart);
       return i.join("/")
       }
       function u(e, t) {
       var n = t.split("/");
       n.pop(),
       t = n.join("/") + "/",
       i = 0;
       while (t.substr(i, 1) == e.substr(i, 1)) i++;
       while (t.substr(i, 1) != "/") i--;
       t = t.substr(i + 1),
       e = e.substr(i + 1),
       n = t.split("/");
       var r = e.split("/");
       out = "";
       while (n.shift()) out += "../";
       while (curPart = r.shift()) out += curPart + "/";
       return out.substr(0, out.length - 1)
       }
       var e = /([^:])\/+/g,
       t = function(t) {
       return t.replace(e, "$1/")
       },
       n = /[^\:\/]*:\/\/([^\/])*/,
       r = /^(\/|data:)/,
       a = function(e, n, r) {
       n = t(n),
       r = t(r);
       var i = /@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/ig,
       o, u, e;
       while (o = i.exec(e)) {
       u = o[3] || o[2] || o[5] || o[6] || o[4];
       var a;
       a = s(u, n, r);
       var f = o[5] || o[6] ? 1 : 0;
       e = e.substr(0, i.lastIndex - u.length - f - 1) + a + e.substr(i.lastIndex - f - 1),
       i.lastIndex = i.lastIndex + (a.length - u.length)
       }
       return e
       };
       return a.convertURIBase = s,
       a.absoluteURI = o,
       a.relativeURI = u,
       a
       });