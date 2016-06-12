define(["zepto", "template"],
       function(e, t) {
       var n = {
       parseNum: function(e) {
       var t = "";
       return e > 1e4 ? t = (parseInt(e) / 1e4).toFixed(1) + "万": t = e,
       t
       },
       reloadPage: function() {
       var t = '<div id="reloadPage_debug" class="debug-page">R</div>';
       e("body").append(t)
       },
       parseTemplate: function(e, n, r) {
       var i = document.createElement("div"),
       s = (new Date).getTime();
       i.id = "artmplBox" + s;
       var o = "artmpl_" + e;
       i.innerHTML = '<script type="text/html" id="' + o + '">' + n + "</script>",
       i.style.display = "none",
       document.body.appendChild(i);
       var u = t(o, r);
       return document.body.removeChild(i),
       u
       },
       compileTempl: function(e, n) {
       var r = t(e, n);
       return r
       },
       isEmptyObject: function(e) {
       var t;
       for (t in e) return ! 1;
       return ! 0
       },
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
       },
       getLocalTime: function(e, t) {
       Date.prototype.format = function(e) {
       var t = function(e, t) {
       var n = "",
       r = e < 0,
       i = String(Math.abs(e));
       return i.length < t && (n = (new Array(t - i.length + 1)).join("0")),
       (r ? "-": "") + n + i
       };
       if ("string" != typeof e) return this.toString();
       var n = function(t, n) {
       e = e.replace(t, n)
       },
       r = this.getFullYear(),
       i = this.getMonth() + 1,
       s = this.getDate(),
       o = this.getHours(),
       u = this.getMinutes(),
       a = this.getSeconds();
       return n(/yyyy/g, t(r, 4)),
       n(/yy/g, t(parseInt(r.toString().slice(2), 10), 2)),
       n(/MM/g, t(i, 2)),
       n(/M/g, i),
       n(/dd/g, t(s, 2)),
       n(/d/g, s),
       n(/HH/g, t(o, 2)),
       n(/H/g, o),
       n(/hh/g, t(o % 12, 2)),
       n(/h/g, o % 12),
       n(/mm/g, t(u, 2)),
       n(/m/g, u),
       n(/ss/g, t(a, 2)),
       n(/s/g, a),
       e
       };
       var n = new Date(parseInt(e)),
       r = n.format(t);
       return r
       },
       OS: function() {
       var t = navigator.userAgent.match(/iphone|ipad|ipod/i) ? "ios": "android";
       return e("html").addClass(t),
       t
       },
       getQueryString: function(e) {
       var t = location.search.substring(1).toLowerCase(),
       n = [],
       r = null,
       i;
       if (t.length > 0) {
       t.indexOf("&") >= 0 ? n = t.split("&") : n[0] = t;
       for (var s = 0,
            o = n.length; s < o; s++) i = n[s].indexOf(e + "="),
       i >= 0 && (r = n[s].substr(i + (e + "=").length))
       }
       return r
       },
       uniqueData: function() {
       var e = [],
       t = 0;
       return function(n, r, i) {
       var s = [],
       o;
       i == null ? o = 5 : o = i,
       t == o ? (e = [], t = 1) : t++;
       for (var u = 0,
            a = n.length; u < a; u++) {
       var f = n[u][r];
       e.indexOf(f) < 0 && (e.push(f), s.push(n[u]))
       }
       return {
       allData: e,
       data: s,
       filterNum: t
       }
       }
       },
       query2obj: function(e) {
       var t = {},
       n = new RegExp("^http"),
       r;
       n.test(e) ? r = e.substring(e.indexOf("?") + 1, e.length) : r = e;
       if (r) {
       var i = r.split("&"),
       s = i.length;
       for (var o = 0; o < s; o++) {
       var u = i[o].split("="),
       a = u[0],
       f = u[1];
       t[a] = f
       }
       return t
       }
       },
       getRandomNum: function(e, t) {
       var n = t - e,
       r = Math.random();
       return e + Math.round(r * n)
       },
       debounce: function(e, t, n) {
       var r, i, s, o, u, a = function() {
       var f = (new Date).getTime() - o;
       f < t && f >= 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)))
       };
       return function() {
       s = this,
       i = arguments,
       o = (new Date).getTime();
       var f = n && !r;
       return r || (r = setTimeout(a, t)),
       f && (u = e.apply(s, i), s = i = null),
       u
       }
       },
       sendData: function(t, n, r, i, s, o, u, a, f) {
       e.ajax({
              type: t,
              url: n,
              timeout: 2e5,
              data: r,
              headers: {
              SCOOKIE: a
              },
              dataType: f || "json",
              beforeSend: s ||
              function() {},
              success: i,
              error: o ||
              function() {},
              complete: u ||
              function() {}
              })
       },
       scrollViewer: {
       getTopHeight: function() {
       return {
       pTop: window.pageYOffset || document.documentElement.scrollTop,
       pHeight: document.documentElement.clientHeight || window.innerHeight
       }
       },
       inViewPort: function(t, n) {
       var r = this,
       i = 1,
       s = n.pTop,
       o = n.pHeight,
       u, a = e(document),
       f = e(window);
       n.iScreens && (i = n.iScreens),
       s || (s = r.getTopHeight().pTop),
       o || (o = r.getTopHeight().pHeight),
       u = s + o * i;
       var l = function() {
       typeof n.handle == "function" && n.handle()
       };
       if (t) if (t.getBoundingClientRect) {
       var c = t.getBoundingClientRect().top + s,
       h = c + t.clientHeight;
       c > s && c < u && h > s && h < u && l()
       } else {
       var p = f.scrollTop(),
       d = parseFloat(f.height()) + parseFloat(p);
       a.height() - 20 <= d && l()
       }
       },
       create: function(e, t) {
       var r = document.querySelector(e),
       i = n.scrollViewer.getTopHeight();
       n.scrollViewer.inViewPort(r, {
                                 iScreens: 1,
                                 pTop: i.pTop,
                                 pHeight: i.pHeight + 150,
                                 handle: function() {
                                 t()
                                 }
                                 })
       }
       },
       chgMode: function(n) {
       var r = e("#myMode");
       if (r.size() > 0) {
       if (r.hasClass("Mode1")) {
       n || r.removeClass("Mode1");
       return
       }
       n == 1 ? r.addClass("Mode1") : r.removeClass("Mode1")
       }
       },
       checkIfNight: function() {
       n.getQueryString("mode") == "1" ? n.chgMode(1) : n.chgMode(0)
       },
       chgImgMode: function(n) {
       var r = e("#myMode");
       if (r) {
       if (e(r).hasClass("noImgMode")) {
       n || r.removeClass("noImgMode");
       return
       }
       n == 1 ? r.addClass("noImgMode") : r.removeClass("noImgMode")
       }
       },
       checkImgMode: function() {
       var e = "";
       n.getQueryString("imgs") == "1" ? n.chgImgMode(1) : n.chgImgMode(0)
       }
       };
       return n
       });