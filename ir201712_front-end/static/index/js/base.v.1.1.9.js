! function(t) {
    function i(o) {
        if (n[o])
            return n[o].exports;
        var r = n[o] = {
            "i": o,
            "l": !1,
            "exports": {}
        };
        return t[o].call(r.exports, r, r.exports, i),
            r.l = !0,
            r.exports
    }
    var n = {};
    i.m = t,
        i.c = n,
        i.d = function(t, n, o) {
            i.o(t, n) || Object.defineProperty(t, n, {
                "configurable": !1,
                "enumerable": !0,
                "get": o
            })
        },
        i.n = function(t) {
            var n = t && t.__esModule ? function() {
                    return t["default"]
                } :
                function() {
                    return t
                };
            return i.d(n, "a", n),
                n
        },
        i.o = function(t, i) {
            return Object.prototype.hasOwnProperty.call(t, i)
        },
        i.p = "",
        i(i.s = 1)
}([function(t, i, n) {
    "use strict";

    function o(t) {
        var i = void 0,
            n = void 0;
        return document.cookie.length > 0 && -1 !== (i = document.cookie.indexOf(t + "=")) ? (i = i + t.length + 1,
            n = document.cookie.indexOf(";", i), -1 === n && (n = document.cookie.length),
            decodeURI(document.cookie.substring(i, n))) : ""
    }

    function r(t, i, n, o, r) {
        var a = new Date(r),
            s = a.toUTCString();
        document.cookie = [t, "=", encodeURI(i), ";expires=", s, ";path=", o].join("")
    }

    function a(t) {
        if (!t)
            return "";
        if (-1 === t.indexOf("http://") || 0 === t.indexOf("https://"))
            return t;
        var i = Math.abs(function(t) {
                var i = 0,
                    n = void 0;
                if (0 === t.length)
                    return i;
                for (var o = 0; o < t.length; o++)
                    n = t.charCodeAt(o),
                    i = (i << 5) - i + n,
                    i &= i;
                return i
            }(t) % 4) + 1,
            n = location.protocol + "//img0" + i + ".sogoucdn.com",
            o = /^\s*http:\/\/www\.sogou\.com/g,
            r = /^\s*http:\/\/img\d*\.sogoucdn\.com/g,
            a = /^\s*http:\/\/img\d*\.store\.sogou\.com/g,
            s = /^\s*http:\/\/imgstore\d*\.cdn\.sogou\.com/g,
            c = /^\s*http:\/\/cmc\.imgstore\.cdn\.sogou\.com/g,
            l = /^\s*http:\/\/pic\d*\.sogoucdn\.com/g;
        return o.test(t) ? t.replace(o, "") : r.test(t) ? t.replace(r, n) : a.test(t) ? t.replace(a, n) : s.test(t) ? t.replace(s, n) : c.test(t) ? t.replace(c, n) : l.test(t) ? t.replace(l, n) : n + "/v2/thumb?url=" + encodeURIComponent(t) + "&appid=200706"
    }

    function s(t, i, n) {
        var o = t.width || 0,
            r = t.height || 0;
        if (0 === o || 0 === r) {
            var a = t.cloneNode(!0);
            a.style.visibility = "hidden",
                document.body.appendChild(a),
                o = a.width,
                r = a.height,
                document.body.removeChild(a)
        }
        o > i && r > n && (o / r <= i / n ? (t.style.width = i + "px",
                t.style.height = "auto") : (t.style.height = n + "px",
                t.style.width = "auto")),
            t.style.marginLeft = "auto",
            t.style.marginRight = "auto",
            t.style.visibility = "visible",
            t.style.display = "block"
    }

    function c(t, i, n) {
        function o(e) {
            "select" !== e.target.tagName.toLowerCase() && (a = setTimeout(function() {
                t.removeClass(l),
                    i.stop().animate({
                        "top": s,
                        "opacity": 0
                    }, 200, function() {
                        $(this).hide()
                    })
            }, 200))
        }

        function r() {
            clearTimeout(a),
                t.addClass(l),
                i.show().stop().animate({
                    "top": c.top,
                    "opacity": 1
                }, 300)
        }
        if (t = $(t),
            i = $(i),
            i.length && t.length) {
            var a = null,
                s = parseInt(i.css("top"), 10),
                c = n || {},
                l = c.activeClass || "";
            i.on("mouseenter", r),
                t.on("mouseleave", o),
                t.on("mouseenter", r),
                i.on("mouseleave", o)
        }
    }

    function l(t) {
        //{ "tabs": u, "tabInfo": p, "activeClass": "cur" } u = $(".js-settings-tab"),
        //p = $(".js-settings-content"),
        var i = $(t.tabs),
            n = $(t.tabInfo),
            o = t.activeClass,
            r = t.eventName || "click",
            a = t.isBubble || !1;
        // console.log('tabinfo length', n.length);
        // console.log('tabtitle length', i.length);
        n.length === i.length && i.bind(r, function(t) {
            var r = i.index(this);

            i.removeClass(o),
                $(this).addClass(o),
                n.css("display", "none"),
                n.eq(r).css("display", "block"),
                a && t.stopPropagation()
        })
    }
    Object.defineProperty(i, "__esModule", {
            "value": !0
        }),
        i.setCookie = r,
        i.getCookie = o,
        i.getCdnImageUrl = a,
        i.resizeImage = s,
        i.toggleBox = c,
        i.tabControl = l
}, function(t, i, n) {
    n(2),
        n(3),
        t.exports = n(4)
}, function(t, i, n) {
    "use strict";
    var o, r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } :
        function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
    ! function(a, s) {
        o = s,
            void 0 !== (r = "function" == typeof o ? o.call(i, n, i, t) : o) && (t.exports = r)
    }(0, function() {
        var t, i, n = Array,
            o = n.prototype,
            r = Object,
            s = r.prototype,
            c = Function,
            l = c.prototype,
            u = String,
            d = u.prototype,
            p = Number,
            h = p.prototype,
            f = o.slice,
            g = o.splice,
            w = o.push,
            m = o.unshift,
            v = o.concat,
            y = o.join,
            b = l.call,
            _ = l.apply,
            x = Math.max,
            k = Math.min,
            C = s.toString,
            j = "function" == typeof Symbol && "symbol" === a(Symbol.toStringTag),
            T = Function.prototype.toString,
            O = /^\s*class /,
            I = function(t) {
                try {
                    var i = T.call(t),
                        n = i.replace(/\/\/.*\n/g, ""),
                        o = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                        r = o.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return O.test(r)
                } catch (e) {
                    return !1
                }
            },
            D = function(t) {
                try {
                    return !I(t) && (T.call(t), !0)
                } catch (e) {
                    return !1
                }
            },
            t = function(t) {
                if (!t)
                    return !1;
                if ("function" != typeof t && "object" !== (void 0 === t ? "undefined" : a(t)))
                    return !1;
                if (j)
                    return D(t);
                if (I(t))
                    return !1;
                var i = C.call(t);
                return "[object Function]" === i || "[object GeneratorFunction]" === i
            },
            E = RegExp.prototype.exec,
            S = function(t) {
                try {
                    return E.call(t), !0
                } catch (e) {
                    return !1
                }
            };
        i = function(t) {
            return "object" === (void 0 === t ? "undefined" : a(t)) && (j ? S(t) : "[object RegExp]" === C.call(t))
        };
        var P, M = String.prototype.valueOf,
            A = function(t) {
                try {
                    return M.call(t), !0
                } catch (e) {
                    return !1
                }
            };
        P = function(t) {
            return "string" == typeof t || "object" === (void 0 === t ? "undefined" : a(t)) && (j ? A(t) : "[object String]" === C.call(t))
        };
        var N = r.defineProperty && function() {
                try {
                    var t = {};
                    r.defineProperty(t, "x", {
                        "enumerable": !1,
                        "value": t
                    });
                    for (var i in t)
                        return !1;
                    return t.x === t
                } catch (e) {
                    return !1
                }
            }(),
            R = function(t) {
                var i;
                return i = N ? function(t, i, n, o) {
                        !o && i in t || r.defineProperty(t, i, {
                            "configurable": !0,
                            "enumerable": !1,
                            "writable": !0,
                            "value": n
                        })
                    } :
                    function(t, i, n, o) {
                        !o && i in t || (t[i] = n)
                    },
                    function(n, o, r) {
                        for (var a in o)
                            t.call(o, a) && i(n, a, o[a], r)
                    }
            }(s.hasOwnProperty),
            U = function(t) {
                var i = void 0 === t ? "undefined" : a(t);
                return null === t || "object" !== i && "function" !== i
            },
            B = p.isNaN || function(t) {
                return t !== t
            },
            q = {
                "ToInteger": function(t) {
                    var i = +t;
                    return B(i) ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i))),
                        i
                },
                "ToPrimitive": function(i) {
                    var n, o, r;
                    if (U(i))
                        return i;
                    if (o = i.valueOf,
                        t(o) && (n = o.call(i),
                            U(n)))
                        return n;
                    if (r = i.toString,
                        t(r) && (n = r.call(i),
                            U(n)))
                        return n;
                    throw new TypeError
                },
                "ToObject": function(t) {
                    if (null == t)
                        throw new TypeError("can't convert " + t + " to object");
                    return r(t)
                },
                "ToUint32": function(t) {
                    return t >>> 0
                }
            },
            L = function() {};
        R(l, {
            "bind": function(i) {
                var n = this;
                if (!t(n))
                    throw new TypeError("Function.prototype.bind called on incompatible " + n);
                for (var o, a = f.call(arguments, 1), s = function() {
                        if (this instanceof o) {
                            var t = _.call(n, this, v.call(a, f.call(arguments)));
                            return r(t) === t ? t : this
                        }
                        return _.call(n, i, v.call(a, f.call(arguments)))
                    }, l = x(0, n.length - a.length), u = [], d = 0; d < l; d++)
                    w.call(u, "$" + d);
                return o = c("binder", "return function (" + y.call(u, ",") + "){ return binder.apply(this, arguments); }")(s),
                    n.prototype && (L.prototype = n.prototype,
                        o.prototype = new L,
                        L.prototype = null),
                    o
            }
        });
        var z = b.bind(s.hasOwnProperty),
            F = b.bind(s.toString),
            W = b.bind(f),
            Q = _.bind(f),
            H = b.bind(d.slice),
            Y = b.bind(d.split),
            G = b.bind(d.indexOf),
            X = b.bind(w),
            J = b.bind(s.propertyIsEnumerable),
            V = b.bind(o.sort),
            Z = n.isArray || function(t) {
                return "[object Array]" === F(t)
            },
            K = 1 !== [].unshift(0);
        R(o, {
                "unshift": function() {
                    return m.apply(this, arguments),
                        this.length
                }
            }, K),
            R(n, {
                "isArray": Z
            });
        var ee = r("a"),
            te = "a" !== ee[0] || !(0 in ee),
            ie = function(t) {
                var i = !0,
                    n = !0,
                    o = !1;
                if (t)
                    try {
                        t.call("foo", function(t, n, o) {
                                "object" !== (void 0 === o ? "undefined" : a(o)) && (i = !1)
                            }),
                            t.call([1], function() {
                                n = "string" == typeof this
                            }, "x")
                    } catch (e) {
                        o = !0
                    }
                return !!t && !o && i && n
            };
        R(o, {
                "forEach": function(i) {
                    var n, o = q.ToObject(this),
                        r = te && P(this) ? Y(this, "") : o,
                        a = -1,
                        s = q.ToUint32(r.length);
                    if (arguments.length > 1 && (n = arguments[1]), !t(i))
                        throw new TypeError("Array.prototype.forEach callback must be a function");
                    for (; ++a < s;)
                        a in r && (void 0 === n ? i(r[a], a, o) : i.call(n, r[a], a, o))
                }
            }, !ie(o.forEach)),
            R(o, {
                "map": function(i) {
                    var o, r = q.ToObject(this),
                        a = te && P(this) ? Y(this, "") : r,
                        s = q.ToUint32(a.length),
                        c = n(s);
                    if (arguments.length > 1 && (o = arguments[1]), !t(i))
                        throw new TypeError("Array.prototype.map callback must be a function");
                    for (var l = 0; l < s; l++)
                        l in a && (c[l] = void 0 === o ? i(a[l], l, r) : i.call(o, a[l], l, r));
                    return c
                }
            }, !ie(o.map)),
            R(o, {
                "filter": function(i) {
                    var n, o, r = q.ToObject(this),
                        a = te && P(this) ? Y(this, "") : r,
                        s = q.ToUint32(a.length),
                        c = [];
                    if (arguments.length > 1 && (o = arguments[1]), !t(i))
                        throw new TypeError("Array.prototype.filter callback must be a function");
                    for (var l = 0; l < s; l++)
                        l in a && (n = a[l],
                            (void 0 === o ? i(n, l, r) : i.call(o, n, l, r)) && X(c, n));
                    return c
                }
            }, !ie(o.filter)),
            R(o, {
                "every": function(i) {
                    var n, o = q.ToObject(this),
                        r = te && P(this) ? Y(this, "") : o,
                        a = q.ToUint32(r.length);
                    if (arguments.length > 1 && (n = arguments[1]), !t(i))
                        throw new TypeError("Array.prototype.every callback must be a function");
                    for (var s = 0; s < a; s++)
                        if (s in r && !(void 0 === n ? i(r[s], s, o) : i.call(n, r[s], s, o)))
                            return !1;
                    return !0
                }
            }, !ie(o.every)),
            R(o, {
                "some": function(i) {
                    var n, o = q.ToObject(this),
                        r = te && P(this) ? Y(this, "") : o,
                        a = q.ToUint32(r.length);
                    if (arguments.length > 1 && (n = arguments[1]), !t(i))
                        throw new TypeError("Array.prototype.some callback must be a function");
                    for (var s = 0; s < a; s++)
                        if (s in r && (void 0 === n ? i(r[s], s, o) : i.call(n, r[s], s, o)))
                            return !0;
                    return !1
                }
            }, !ie(o.some));
        var ne = !1;
        o.reduce && (ne = "object" === a(o.reduce.call("es5", function(t, i, n, o) {
                return o
            }))),
            R(o, {
                "reduce": function(i) {
                    var n = q.ToObject(this),
                        o = te && P(this) ? Y(this, "") : n,
                        r = q.ToUint32(o.length);
                    if (!t(i))
                        throw new TypeError("Array.prototype.reduce callback must be a function");
                    if (0 === r && 1 === arguments.length)
                        throw new TypeError("reduce of empty array with no initial value");
                    var a, s = 0;
                    if (arguments.length >= 2)
                        a = arguments[1];
                    else
                        for (;;) {
                            if (s in o) {
                                a = o[s++];
                                break
                            }
                            if (++s >= r)
                                throw new TypeError("reduce of empty array with no initial value")
                        }
                    for (; s < r; s++)
                        s in o && (a = i(a, o[s], s, n));
                    return a
                }
            }, !ne);
        var oe = !1;
        o.reduceRight && (oe = "object" === a(o.reduceRight.call("es5", function(t, i, n, o) {
                return o
            }))),
            R(o, {
                "reduceRight": function(i) {
                    var n = q.ToObject(this),
                        o = te && P(this) ? Y(this, "") : n,
                        r = q.ToUint32(o.length);
                    if (!t(i))
                        throw new TypeError("Array.prototype.reduceRight callback must be a function");
                    if (0 === r && 1 === arguments.length)
                        throw new TypeError("reduceRight of empty array with no initial value");
                    var a, s = r - 1;
                    if (arguments.length >= 2)
                        a = arguments[1];
                    else
                        for (;;) {
                            if (s in o) {
                                a = o[s--];
                                break
                            }
                            if (--s < 0)
                                throw new TypeError("reduceRight of empty array with no initial value")
                        }
                    if (s < 0)
                        return a;
                    do {
                        s in o && (a = i(a, o[s], s, n))
                    } while (s--);
                    return a
                }
            }, !oe);
        var re = o.indexOf && -1 !== [0, 1].indexOf(1, 2);
        R(o, {
            "indexOf": function(t) {
                var i = te && P(this) ? Y(this, "") : q.ToObject(this),
                    n = q.ToUint32(i.length);
                if (0 === n)
                    return -1;
                var o = 0;
                for (arguments.length > 1 && (o = q.ToInteger(arguments[1])),
                    o = o >= 0 ? o : x(0, n + o); o < n; o++)
                    if (o in i && i[o] === t)
                        return o;
                return -1
            }
        }, re);
        var ae = o.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
        R(o, {
            "lastIndexOf": function(t) {
                var i = te && P(this) ? Y(this, "") : q.ToObject(this),
                    n = q.ToUint32(i.length);
                if (0 === n)
                    return -1;
                var o = n - 1;
                for (arguments.length > 1 && (o = k(o, q.ToInteger(arguments[1]))),
                    o = o >= 0 ? o : n - Math.abs(o); o >= 0; o--)
                    if (o in i && t === i[o])
                        return o;
                return -1
            }
        }, ae);
        var se = function() {
            var t = [1, 2],
                i = t.splice();
            return 2 === t.length && Z(i) && 0 === i.length
        }();
        R(o, {
            "splice": function(t, i) {
                return 0 === arguments.length ? [] : g.apply(this, arguments)
            }
        }, !se);
        var ce = function() {
            var t = {};
            return o.splice.call(t, 0, 0, 1),
                1 === t.length
        }();
        R(o, {
            "splice": function(t, i) {
                if (0 === arguments.length)
                    return [];
                var n = arguments;
                return this.length = x(q.ToInteger(this.length), 0),
                    arguments.length > 0 && "number" != typeof i && (n = W(arguments),
                        n.length < 2 ? X(n, this.length - t) : n[1] = q.ToInteger(i)),
                    g.apply(this, n)
            }
        }, !ce);
        var le = function() {
                var t = new n(1e5);
                return t[8] = "x",
                    t.splice(1, 1),
                    7 === t.indexOf("x")
            }(),
            ue = function() {
                var t = [];
                return t[256] = "a",
                    t.splice(257, 0, "b"),
                    "a" === t[256]
            }();
        R(o, {
            "splice": function(t, i) {
                for (var n, o = q.ToObject(this), r = [], a = q.ToUint32(o.length), s = q.ToInteger(t), c = s < 0 ? x(a + s, 0) : k(s, a), l = k(x(q.ToInteger(i), 0), a - c), d = 0; d < l;)
                    n = u(c + d),
                    z(o, n) && (r[d] = o[n]),
                    d += 1;
                var p, h = W(arguments, 2),
                    f = h.length;
                if (f < l) {
                    d = c;
                    for (var g = a - l; d < g;)
                        n = u(d + l),
                        p = u(d + f),
                        z(o, n) ? o[p] = o[n] : delete o[p],
                        d += 1;
                    d = a;
                    for (var w = a - l + f; d > w;)
                        delete o[d - 1],
                        d -= 1
                } else if (f > l)
                    for (d = a - l; d > c;)
                        n = u(d + l - 1),
                        p = u(d + f - 1),
                        z(o, n) ? o[p] = o[n] : delete o[p],
                        d -= 1;
                d = c;
                for (var m = 0; m < h.length; ++m)
                    o[d] = h[m],
                    d += 1;
                return o.length = a - l + f,
                    r
            }
        }, !le || !ue);
        var de, pe = o.join;
        try {
            de = "1,2,3" !== Array.prototype.join.call("123", ",")
        } catch (e) {
            de = !0
        }
        de && R(o, {
            "join": function(t) {
                var i = void 0 === t ? "," : t;
                return pe.call(P(this) ? Y(this, "") : this, i)
            }
        }, de);
        var he = "1,2" !== [1, 2].join(void 0);
        he && R(o, {
            "join": function(t) {
                var i = void 0 === t ? "," : t;
                return pe.call(this, i)
            }
        }, he);
        var fe = function(t) {
                for (var i = q.ToObject(this), n = q.ToUint32(i.length), o = 0; o < arguments.length;)
                    i[n + o] = arguments[o],
                    o += 1;
                return i.length = n + o,
                    n + o
            },
            ge = function() {
                var t = {};
                return 1 !== Array.prototype.push.call(t, void 0) || 1 !== t.length || void 0 !== t[0] || !z(t, 0)
            }();
        R(o, {
            "push": function(t) {
                return Z(this) ? w.apply(this, arguments) : fe.apply(this, arguments)
            }
        }, ge);
        var we = function() {
            var t = [];
            return 1 !== t.push(void 0) || 1 !== t.length || void 0 !== t[0] || !z(t, 0)
        }();
        R(o, {
                "push": fe
            }, we),
            R(o, {
                "slice": function(t, i) {
                    var n = P(this) ? Y(this, "") : this;
                    return Q(n, arguments)
                }
            }, te);
        var me = function() {
                try {
                    return [1, 2].sort(null), [1, 2].sort({}), !0
                } catch (e) {}
                return !1
            }(),
            ve = function() {
                try {
                    return [1, 2].sort(/a/), !1
                } catch (e) {}
                return !0
            }(),
            ye = function() {
                try {
                    return [1, 2].sort(void 0), !0
                } catch (e) {}
                return !1
            }();
        R(o, {
            "sort": function(i) {
                if (void 0 === i)
                    return V(this);
                if (!t(i))
                    throw new TypeError("Array.prototype.sort callback must be a function");
                return V(this, i)
            }
        }, me || !ye || !ve);
        var be = !J({
                "toString": null
            }, "toString"),
            $e = J(function() {}, "prototype"),
            _e = !z("x", "0"),
            xe = function(t) {
                var i = t.constructor;
                return i && i.prototype === t
            },
            ke = {
                "$window": !0,
                "$console": !0,
                "$parent": !0,
                "$self": !0,
                "$frame": !0,
                "$frames": !0,
                "$frameElement": !0,
                "$webkitIndexedDB": !0,
                "$webkitStorageInfo": !0,
                "$external": !0
            },
            Ce = function() {
                if ("undefined" == typeof window)
                    return !1;
                for (var t in window)
                    try {
                        !ke["$" + t] && z(window, t) && null !== window[t] && "object" === a(window[t]) && xe(window[t])
                    } catch (e) {
                        return !0
                    }
                return !1
            }(),
            je = function(t) {
                if ("undefined" == typeof window || !Ce)
                    return xe(t);
                try {
                    return xe(t)
                } catch (e) {
                    return !1
                }
            },
            Te = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            Oe = Te.length,
            Ie = function(t) {
                return "[object Arguments]" === F(t)
            },
            De = function(i) {
                return null !== i && "object" === (void 0 === i ? "undefined" : a(i)) && "number" == typeof i.length && i.length >= 0 && !Z(i) && t(i.callee)
            },
            Ee = Ie(arguments) ? Ie : De;
        R(r, {
            "keys": function(i) {
                var n = t(i),
                    o = Ee(i),
                    r = null !== i && "object" === (void 0 === i ? "undefined" : a(i)),
                    s = r && P(i);
                if (!r && !n && !o)
                    throw new TypeError("Object.keys called on a non-object");
                var c = [],
                    l = $e && n;
                if (s && _e || o)
                    for (var d = 0; d < i.length; ++d)
                        X(c, u(d));
                if (!o)
                    for (var p in i)
                        l && "prototype" === p || !z(i, p) || X(c, u(p));
                if (be)
                    for (var h = je(i), f = 0; f < Oe; f++) {
                        var g = Te[f];
                        h && "constructor" === g || !z(i, g) || X(c, g)
                    }
                return c
            }
        });
        var Se = r.keys && function() {
                return 2 === r.keys(arguments).length
            }(1, 2),
            Pe = r.keys && function() {
                var t = r.keys(arguments);
                return 1 !== arguments.length || 1 !== t.length || 1 !== t[0]
            }(1),
            Me = r.keys;
        R(r, {
            "keys": function(t) {
                return Me(Ee(t) ? W(t) : t)
            }
        }, !Se || Pe);
        var Ae, Ne, Re = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
            Ue = new Date(-0x55d318d56a724),
            Be = new Date(14496624e5),
            qe = "Mon, 01 Jan -45875 11:59:59 GMT" !== Ue.toUTCString();
        Ue.getTimezoneOffset() < -720 ? (Ae = "Tue Jan 02 -45875" !== Ue.toDateString(),
            Ne = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Be.toString())) : (Ae = "Mon Jan 01 -45875" !== Ue.toDateString(),
            Ne = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Be.toString()));
        var Le = b.bind(Date.prototype.getFullYear),
            ze = b.bind(Date.prototype.getMonth),
            Fe = b.bind(Date.prototype.getDate),
            We = b.bind(Date.prototype.getUTCFullYear),
            Qe = b.bind(Date.prototype.getUTCMonth),
            He = b.bind(Date.prototype.getUTCDate),
            Ye = b.bind(Date.prototype.getUTCDay),
            Ge = b.bind(Date.prototype.getUTCHours),
            Xe = b.bind(Date.prototype.getUTCMinutes),
            Je = b.bind(Date.prototype.getUTCSeconds),
            Ve = b.bind(Date.prototype.getUTCMilliseconds),
            Ze = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            Ke = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            et = function(t, i) {
                return Fe(new Date(i, t, 0))
            };
        R(Date.prototype, {
                "getFullYear": function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = Le(this);
                    return t < 0 && ze(this) > 11 ? t + 1 : t
                },
                "getMonth": function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = Le(this),
                        i = ze(this);
                    return t < 0 && i > 11 ? 0 : i
                },
                "getDate": function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = Le(this),
                        i = ze(this),
                        n = Fe(this);
                    if (t < 0 && i > 11) {
                        if (12 === i)
                            return n;
                        return et(0, t + 1) - n + 1
                    }
                    return n
                },
                "getUTCFullYear": function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = We(this);
                    return t < 0 && Qe(this) > 11 ? t + 1 : t
                },
                "getUTCMonth": function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = We(this),
                        i = Qe(this);
                    return t < 0 && i > 11 ? 0 : i
                },
                "getUTCDate": function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = We(this),
                        i = Qe(this),
                        n = He(this);
                    if (t < 0 && i > 11) {
                        if (12 === i)
                            return n;
                        return et(0, t + 1) - n + 1
                    }
                    return n
                }
            }, Re),
            R(Date.prototype, {
                "toUTCString": function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = Ye(this),
                        i = He(this),
                        n = Qe(this),
                        o = We(this),
                        r = Ge(this),
                        a = Xe(this),
                        s = Je(this);
                    return Ze[t] + ", " + (i < 10 ? "0" + i : i) + " " + Ke[n] + " " + o + " " + (r < 10 ? "0" + r : r) + ":" + (a < 10 ? "0" + a : a) + ":" + (s < 10 ? "0" + s : s) + " GMT"
                }
            }, Re || qe),
            R(Date.prototype, {
                "toDateString": function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = this.getDay(),
                        i = this.getDate(),
                        n = this.getMonth(),
                        o = this.getFullYear();
                    return Ze[t] + " " + Ke[n] + " " + (i < 10 ? "0" + i : i) + " " + o
                }
            }, Re || Ae),
            (Re || Ne) && (Date.prototype.toString = function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var t = this.getDay(),
                        i = this.getDate(),
                        n = this.getMonth(),
                        o = this.getFullYear(),
                        r = this.getHours(),
                        a = this.getMinutes(),
                        s = this.getSeconds(),
                        c = this.getTimezoneOffset(),
                        l = Math.floor(Math.abs(c) / 60),
                        u = Math.floor(Math.abs(c) % 60);
                    return Ze[t] + " " + Ke[n] + " " + (i < 10 ? "0" + i : i) + " " + o + " " + (r < 10 ? "0" + r : r) + ":" + (a < 10 ? "0" + a : a) + ":" + (s < 10 ? "0" + s : s) + " GMT" + (c > 0 ? "-" : "+") + (l < 10 ? "0" + l : l) + (u < 10 ? "0" + u : u)
                },
                N && r.defineProperty(Date.prototype, "toString", {
                    "configurable": !0,
                    "enumerable": !1,
                    "writable": !0
                }));
        var tt = Date.prototype.toISOString && -1 === new Date(-621987552e5).toISOString().indexOf("-000001"),
            it = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
            nt = b.bind(Date.prototype.getTime);
        R(Date.prototype, {
                "toISOString": function() {
                    if (!isFinite(this) || !isFinite(nt(this)))
                        throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                    var t = We(this),
                        i = Qe(this);
                    t += Math.floor(i / 12),
                        i = (i % 12 + 12) % 12;
                    var n = [i + 1, He(this), Ge(this), Xe(this), Je(this)];
                    t = (t < 0 ? "-" : t > 9999 ? "+" : "") + H("00000" + Math.abs(t), 0 <= t && t <= 9999 ? -4 : -6);
                    for (var o = 0; o < n.length; ++o)
                        n[o] = H("00" + n[o], -2);
                    return t + "-" + W(n, 0, 2).join("-") + "T" + W(n, 2).join(":") + "." + H("000" + Ve(this), -3) + "Z"
                }
            }, tt || it),
            function() {
                try {
                    return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(-621987552e5).toJSON().indexOf("-000001") && Date.prototype.toJSON.call({
                        "toISOString": function() {
                            return !0
                        }
                    })
                } catch (e) {
                    return !1
                }
            }() || (Date.prototype.toJSON = function(i) {
                var n = r(this),
                    o = q.ToPrimitive(n);
                if ("number" == typeof o && !isFinite(o))
                    return null;
                var a = n.toISOString;
                if (!t(a))
                    throw new TypeError("toISOString property is not callable");
                return a.call(n)
            });
        var ot = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
            rt = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
        if (isNaN(Date.parse("2000-01-01T00:00:00.000Z")) || rt || !ot) {
            var at = Math.pow(2, 31) - 1,
                st = B(new Date(1970, 0, 1, 0, 0, 0, at + 1).getTime());
            Date = function(t) {
                var i = function(n, o, r, a, s, c, l) {
                        var d, p = arguments.length;
                        if (this instanceof t) {
                            var h = c,
                                f = l;
                            if (st && p >= 7 && l > at) {
                                var g = Math.floor(l / at) * at,
                                    w = Math.floor(g / 1e3);
                                h += w,
                                    f -= 1e3 * w
                            }
                            d = 1 === p && u(n) === n ? new t(i.parse(n)) : p >= 7 ? new t(n, o, r, a, s, h, f) : p >= 6 ? new t(n, o, r, a, s, h) : p >= 5 ? new t(n, o, r, a, s) : p >= 4 ? new t(n, o, r, a) : p >= 3 ? new t(n, o, r) : p >= 2 ? new t(n, o) : p >= 1 ? new t(n instanceof t ? +n : n) : new t
                        } else
                            d = t.apply(this, arguments);
                        return U(d) || R(d, {
                                "constructor": i
                            }, !0),
                            d
                    },
                    n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                    o = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
                    r = function(t, i) {
                        var n = i > 1 ? 1 : 0;
                        return o[i] + Math.floor((t - 1969 + n) / 4) - Math.floor((t - 1901 + n) / 100) + Math.floor((t - 1601 + n) / 400) + 365 * (t - 1970)
                    },
                    a = function(i) {
                        var n = 0,
                            o = i;
                        if (st && o > at) {
                            var r = Math.floor(o / at) * at,
                                a = Math.floor(r / 1e3);
                            n += a,
                                o -= 1e3 * a
                        }
                        return p(new t(1970, 0, 1, 0, 0, n, o))
                    };
                for (var s in t)
                    z(t, s) && (i[s] = t[s]);
                return R(i, {
                        "now": t.now,
                        "UTC": t.UTC
                    }, !0),
                    i.prototype = t.prototype,
                    R(i.prototype, {
                        "constructor": i
                    }, !0),
                    R(i, {
                        "parse": function(i) {
                            var o = n.exec(i);
                            if (o) {
                                var s, c = p(o[1]),
                                    l = p(o[2] || 1) - 1,
                                    u = p(o[3] || 1) - 1,
                                    d = p(o[4] || 0),
                                    h = p(o[5] || 0),
                                    f = p(o[6] || 0),
                                    g = Math.floor(1e3 * p(o[7] || 0)),
                                    w = Boolean(o[4] && !o[8]),
                                    m = "-" === o[9] ? 1 : -1,
                                    v = p(o[10] || 0),
                                    y = p(o[11] || 0);
                                return d < (h > 0 || f > 0 || g > 0 ? 24 : 25) && h < 60 && f < 60 && g < 1e3 && l > -1 && l < 12 && v < 24 && y < 60 && u > -1 && u < r(c, l + 1) - r(c, l) && (s = 60 * (24 * (r(c, l) + u) + d + v * m),
                                    s = 1e3 * (60 * (s + h + y * m) + f) + g,
                                    w && (s = a(s)), -864e13 <= s && s <= 864e13) ? s : NaN
                            }
                            return t.parse.apply(this, arguments)
                        }
                    }),
                    i
            }(Date)
        }
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        });
        var ct = h.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
            lt = {
                "base": 1e7,
                "size": 6,
                "data": [0, 0, 0, 0, 0, 0],
                "multiply": function(t, i) {
                    for (var n = -1, o = i; ++n < lt.size;)
                        o += t * lt.data[n],
                        lt.data[n] = o % lt.base,
                        o = Math.floor(o / lt.base)
                },
                "divide": function(t) {
                    for (var i = lt.size, n = 0; --i >= 0;)
                        n += lt.data[i],
                        lt.data[i] = Math.floor(n / t),
                        n = n % t * lt.base
                },
                "numToString": function() {
                    for (var t = lt.size, i = ""; --t >= 0;)
                        if ("" !== i || 0 === t || 0 !== lt.data[t]) {
                            var n = u(lt.data[t]);
                            "" === i ? i = n : i += H("0000000", 0, 7 - n.length) + n
                        }
                    return i
                },
                "pow": function Tt(t, i, n) {
                    return 0 === i ? n : i % 2 == 1 ? Tt(t, i - 1, n * t) : Tt(t * t, i / 2, n)
                },
                "log": function(t) {
                    for (var i = 0, n = t; n >= 4096;)
                        i += 12,
                        n /= 4096;
                    for (; n >= 2;)
                        i += 1,
                        n /= 2;
                    return i
                }
            };
        R(h, {
            "toFixed": function(t) {
                var i, n, o, r, e, a, s, c;
                if (i = p(t),
                    (i = B(i) ? 0 : Math.floor(i)) < 0 || i > 20)
                    throw new RangeError("Number.toFixed called with invalid number of decimals");
                if (n = p(this),
                    B(n))
                    return "NaN";
                if (n <= -1e21 || n >= 1e21)
                    return u(n);
                if (o = "",
                    n < 0 && (o = "-",
                        n = -n),
                    r = "0",
                    n > 1e-21)
                    if (e = lt.log(n * lt.pow(2, 69, 1)) - 69,
                        a = e < 0 ? n * lt.pow(2, -e, 1) : n / lt.pow(2, e, 1),
                        a *= 4503599627370496,
                        (e = 52 - e) > 0) {
                        for (lt.multiply(0, a),
                            s = i; s >= 7;)
                            lt.multiply(1e7, 0),
                            s -= 7;
                        for (lt.multiply(lt.pow(10, s, 1), 0),
                            s = e - 1; s >= 23;)
                            lt.divide(1 << 23),
                            s -= 23;
                        lt.divide(1 << s),
                            lt.multiply(1, 1),
                            lt.divide(2),
                            r = lt.numToString()
                    } else
                        lt.multiply(0, a),
                        lt.multiply(1 << -e, 0),
                        r = lt.numToString() + H("0.00000000000000000000", 2, 2 + i);
                return i > 0 ? (c = r.length,
                        r = c <= i ? o + H("0.0000000000000000000", 0, i - c + 2) + r : o + H(r, 0, c - i) + "." + H(r, c - i)) : r = o + r,
                    r
            }
        }, ct);
        var ut = function() {
                try {
                    return "1" === 1..toPrecision(void 0)
                } catch (e) {
                    return !0
                }
            }(),
            dt = h.toPrecision;
        R(h, {
                "toPrecision": function(t) {
                    return void 0 === t ? dt.call(this) : dt.call(this, t)
                }
            }, ut),
            2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
                var t = void 0 === /()??/.exec("")[1],
                    n = Math.pow(2, 32) - 1;
                d.split = function(o, r) {
                    var a = String(this);
                    if (void 0 === o && 0 === r)
                        return [];
                    if (!i(o))
                        return Y(this, o, r);
                    var s, c, l, u, d = [],
                        p = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (o.sticky ? "y" : ""),
                        h = 0,
                        f = new RegExp(o.source, p + "g");
                    t || (s = new RegExp("^" + f.source + "$(?!\\s)", p));
                    var g = void 0 === r ? n : q.ToUint32(r);
                    for (c = f.exec(a); c && !((l = c.index + c[0].length) > h && (X(d, H(a, h, c.index)), !t && c.length > 1 && c[0].replace(s, function() {
                                for (var t = 1; t < arguments.length - 2; t++)
                                    void 0 === arguments[t] && (c[t] = void 0)
                            }),
                            c.length > 1 && c.index < a.length && w.apply(d, W(c, 1)),
                            u = c[0].length,
                            h = l,
                            d.length >= g));)
                        f.lastIndex === c.index && f.lastIndex++,
                        c = f.exec(a);
                    return h === a.length ? !u && f.test("") || X(d, "") : X(d, H(a, h)),
                        d.length > g ? W(d, 0, g) : d
                }
            }() : "0".split(void 0, 0).length && (d.split = function(t, i) {
                return void 0 === t && 0 === i ? [] : Y(this, t, i)
            });
        var pt = d.replace;
        (function() {
            var t = [];
            return "x".replace(/x(.)?/g, function(i, n) {
                    X(t, n)
                }),
                1 === t.length && void 0 === t[0]
        })() || (d.replace = function(n, o) {
            var r = t(o),
                a = i(n) && /\)[*?]/.test(n.source);
            if (r && a) {
                var s = function(t) {
                    var i = arguments.length,
                        r = n.lastIndex;
                    n.lastIndex = 0;
                    var a = n.exec(t) || [];
                    return n.lastIndex = r,
                        X(a, arguments[i - 2], arguments[i - 1]),
                        o.apply(this, a)
                };
                return pt.call(this, n, s)
            }
            return pt.call(this, n, o)
        });
        var ht = d.substr,
            ft = "".substr && "b" !== "0b".substr(-1);
        R(d, {
            "substr": function(t, i) {
                var n = t;
                return t < 0 && (n = x(this.length + t, 0)),
                    ht.call(this, n, i)
            }
        }, ft);
        var gt = "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
            wt = "\u200b",
            mt = "[" + gt + "]",
            vt = new RegExp("^" + mt + mt + "*"),
            yt = new RegExp(mt + mt + "*$"),
            bt = d.trim && (gt.trim() || !wt.trim());
        R(d, {
            "trim": function() {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                return u(this).replace(vt, "").replace(yt, "")
            }
        }, bt);
        var $t = b.bind(String.prototype.trim),
            _t = d.lastIndexOf && -1 !== "abc\u3042\u3044".lastIndexOf("\u3042\u3044", 2);
        R(d, {
            "lastIndexOf": function(t) {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                for (var i = u(this), n = u(t), o = arguments.length > 1 ? p(arguments[1]) : NaN, r = B(o) ? 1 / 0 : q.ToInteger(o), a = k(x(r, 0), i.length), s = n.length, c = a + s; c > 0;) {
                    c = x(0, c - s);
                    var l = G(H(i, c, a + s), n);
                    if (-1 !== l)
                        return c + l
                }
                return -1
            }
        }, _t);
        var xt = d.lastIndexOf;
        if (R(d, {
                "lastIndexOf": function(t) {
                    return xt.apply(this, arguments)
                }
            }, 1 !== d.lastIndexOf.length),
            8 === parseInt(gt + "08") && 22 === parseInt(gt + "0x16") || (parseInt = function(t) {
                var i = /^[\-+]?0[xX]/;
                return function(n, o) {
                    var r = $t(String(n)),
                        a = p(o) || (i.test(r) ? 16 : 10);
                    return t(r, a)
                }
            }(parseInt)),
            1 / parseFloat("-0") != -1 / 0 && (parseFloat = function(t) {
                return function(i) {
                    var n = $t(String(i)),
                        o = t(n);
                    return 0 === o && "-" === H(n, 0, 1) ? -0 : o
                }
            }(parseFloat)),
            "RangeError: test" !== String(new RangeError("test"))) {
            var kt = function() {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                var t = this.name;
                void 0 === t ? t = "Error" : "string" != typeof t && (t = u(t));
                var i = this.message;
                return void 0 === i ? i = "" : "string" != typeof i && (i = u(i)),
                    t ? i ? t + ": " + i : t : i
            };
            Error.prototype.toString = kt
        }
        if (N) {
            var Ct = function(t, i) {
                if (J(t, i)) {
                    var n = Object.getOwnPropertyDescriptor(t, i);
                    n.configurable && (n.enumerable = !1,
                        Object.defineProperty(t, i, n))
                }
            };
            Ct(Error.prototype, "message"),
                "" !== Error.prototype.message && (Error.prototype.message = ""),
                Ct(Error.prototype, "name")
        }
        if ("/a/gim" !== String(/a/gim)) {
            var jt = function() {
                var t = "/" + this.source + "/";
                return this.global && (t += "g"),
                    this.ignoreCase && (t += "i"),
                    this.multiline && (t += "m"),
                    t
            };
            RegExp.prototype.toString = jt
        }
    })
}, function(t, i, n) {
    "use strict";
    var o, r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } :
        function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
    ! function(a, s) {
        o = s,
            void 0 !== (r = "function" == typeof o ? o.call(i, n, i, t) : o) && (t.exports = r)
    }(0, function() {
        var t, i, n, o, r = Function.call,
            s = Object.prototype,
            c = r.bind(s.hasOwnProperty),
            l = r.bind(s.propertyIsEnumerable),
            u = r.bind(s.toString),
            d = c(s, "__defineGetter__");
        d && (t = r.bind(s.__defineGetter__),
            i = r.bind(s.__defineSetter__),
            n = r.bind(s.__lookupGetter__),
            o = r.bind(s.__lookupSetter__));
        var p = function(t) {
            return null == t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t
        };
        Object.getPrototypeOf || (Object.getPrototypeOf = function(t) {
            var i = t.__proto__;
            return i || null === i ? i : "[object Function]" === u(t.constructor) ? t.constructor.prototype : t instanceof Object ? s : null
        });
        var h = function(t) {
            try {
                return t.sentinel = 0,
                    0 === Object.getOwnPropertyDescriptor(t, "sentinel").value
            } catch (i) {
                return !1
            }
        };
        if (Object.defineProperty) {
            var f = h({});
            if (!("undefined" == typeof document || h(document.createElement("div"))) || !f)
                var g = Object.getOwnPropertyDescriptor
        }
        if (!Object.getOwnPropertyDescriptor || g) {
            Object.getOwnPropertyDescriptor = function(t, i) {
                if (p(t))
                    throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + t);
                if (g)
                    try {
                        return g.call(Object, t, i)
                    } catch (w) {}
                var r;
                if (!c(t, i))
                    return r;
                if (r = {
                        "enumerable": l(t, i),
                        "configurable": !0
                    },
                    d) {
                    var a = t.__proto__,
                        u = t !== s;
                    u && (t.__proto__ = s);
                    var h = n(t, i),
                        f = o(t, i);
                    if (u && (t.__proto__ = a),
                        h || f)
                        return h && (r.get = h),
                            f && (r.set = f),
                            r
                }
                return r.value = t[i],
                    r.writable = !0,
                    r
            }
        }
        if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(t) {
                return Object.keys(t)
            }), !Object.create) {
            var w, m = !({
                        "__proto__": null
                    }
                    instanceof Object),
                v = function() {
                    if (!document.domain)
                        return !1;
                    try {
                        return !!new ActiveXObject("htmlfile")
                    } catch (t) {
                        return !1
                    }
                },
                y = function() {
                    var t, i;
                    i = new ActiveXObject("htmlfile");
                    return i.write("<script><\/script>"),
                        i.close(),
                        t = i.parentWindow.Object.prototype,
                        i = null,
                        t
                },
                b = function() {
                    var t, i = document.createElement("iframe"),
                        n = document.body || document.documentElement;
                    return i.style.display = "none",
                        n.appendChild(i),
                        i.src = "javascript:",
                        t = i.contentWindow.Object.prototype,
                        n.removeChild(i),
                        i = null,
                        t
                };
            w = m || "undefined" == typeof document ? function() {
                    return {
                        "__proto__": null
                    }
                } :
                function() {
                    var t = v() ? y() : b();
                    delete t.constructor,
                        delete t.hasOwnProperty,
                        delete t.propertyIsEnumerable,
                        delete t.isPrototypeOf,
                        delete t.toLocaleString,
                        delete t.toString,
                        delete t.valueOf;
                    var i = function() {};
                    return i.prototype = t,
                        w = function() {
                            return new i
                        },
                        new i
                },
                Object.create = function(t, i) {
                    var n, o = function() {};
                    if (null === t)
                        n = w();
                    else {
                        if (null !== t && p(t))
                            throw new TypeError("Object prototype may only be an Object or null");
                        o.prototype = t,
                            n = new o,
                            n.__proto__ = t
                    }
                    return void 0 !== i && Object.defineProperties(n, i),
                        n
                }
        }
        var _ = function(t) {
            try {
                return Object.defineProperty(t, "sentinel", {}),
                    "sentinel" in t
            } catch (i) {
                return !1
            }
        };
        if (Object.defineProperty) {
            var x = _({}),
                k = "undefined" == typeof document || _(document.createElement("div"));
            if (!x || !k)
                var C = Object.defineProperty,
                    j = Object.defineProperties
        }
        if (!Object.defineProperty || C) {
            Object.defineProperty = function(r, a, c) {
                if (p(r))
                    throw new TypeError("Object.defineProperty called on non-object: " + r);
                if (p(c))
                    throw new TypeError("Property description must be an object: " + c);
                if (C)
                    try {
                        return C.call(Object, r, a, c)
                    } catch (f) {}
                if ("value" in c)
                    if (d && (n(r, a) || o(r, a))) {
                        var l = r.__proto__;
                        r.__proto__ = s,
                            delete r[a],
                            r[a] = c.value,
                            r.__proto__ = l
                    } else
                        r[a] = c.value;
                else {
                    var u = "get" in c,
                        h = "set" in c;
                    if (!d && (u || h))
                        throw new TypeError("getters & setters can not be defined on this javascript engine");
                    u && t(r, a, c.get),
                        h && i(r, a, c.set)
                }
                return r
            }
        }
        Object.defineProperties && !j || (Object.defineProperties = function(t, i) {
                if (j)
                    try {
                        return j.call(Object, t, i)
                    } catch (n) {}
                return Object.keys(i).forEach(function(n) {
                        "__proto__" !== n && Object.defineProperty(t, n, i[n])
                    }),
                    t
            }),
            Object.seal || (Object.seal = function(t) {
                if (Object(t) !== t)
                    throw new TypeError("Object.seal can only be called on Objects.");
                return t
            }),
            Object.freeze || (Object.freeze = function(t) {
                if (Object(t) !== t)
                    throw new TypeError("Object.freeze can only be called on Objects.");
                return t
            });
        try {
            Object.freeze(function() {})
        } catch (T) {
            Object.freeze = function(t) {
                return function(i) {
                    return "function" == typeof i ? i : t(i)
                }
            }(Object.freeze)
        }
        Object.preventExtensions || (Object.preventExtensions = function(t) {
                if (Object(t) !== t)
                    throw new TypeError("Object.preventExtensions can only be called on Objects.");
                return t
            }),
            Object.isSealed || (Object.isSealed = function(t) {
                if (Object(t) !== t)
                    throw new TypeError("Object.isSealed can only be called on Objects.");
                return !1
            }),
            Object.isFrozen || (Object.isFrozen = function(t) {
                if (Object(t) !== t)
                    throw new TypeError("Object.isFrozen can only be called on Objects.");
                return !1
            }),
            Object.isExtensible || (Object.isExtensible = function(t) {
                if (Object(t) !== t)
                    throw new TypeError("Object.isExtensible can only be called on Objects.");
                for (var i = ""; c(t, i);)
                    i += "?";
                t[i] = !0;
                var n = c(t, i);
                return delete t[i],
                    n
            })
    })
}, function(t, i, n) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    n(5);
    var r = n(6),
        a = o(r),
        s = n(7),
        c = o(s),
        l = n(8),
        u = o(l),
        d = n(9),
        p = o(d),
        h = n(12),
        f = o(h);
    (0,
        c["default"])(),
    "string" == typeof window.userSec && (0,
            u["default"])(),
        (0,
            a["default"])(),
        (0,
            f["default"])(),
        (0,
            p["default"])()
}, function(t, i) {}, function(module, exports, __webpack_require__) {
    "use strict";

    function getXmlDoc(t) {
        var i = null,
            n = void 0;
        return window.DOMParser ? (n = new DOMParser,
                i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"),
                i.async = "false",
                i.loadXML(t)),
            i
    }

    function getAirLevel(t) {
        if ("number" != typeof(t = Number(t)))
            return "";
        var i = parseInt((t - 1) / 50, 10);
        return i > 5 && (i = 5),
            i
    }

    function weatherUrl(t) {
        return "/web?ie=utf8&from=index_weather&query=" + encodeURIComponent(t + "\u5929\u6c14")
    }

    function renderCurrentWeather(t) {
        var i = $("#cur-weather");
        i.html(juicer('<span class="c6">${today.city}</span><i><img src="${today.icon}" width="16" height="16" title="${today.weather}" alt="${today.weather}"></i><span class="c6">${today.temperature}\xb0</span>{@if today.pm!=="undefined"}<span class="pj-w ${today.className}">${today.pmLevelText} ${today.pm}</span>{@/if}', t)),
            i.show(),
            $("#user-box-line").show()
    }

    function renderDetailWeather(t) {
        var i = $("#detail-weather");
        juicer.register("weatherUrl", weatherUrl),
            i.html(juicer('<span class="ico-san"></span><div class="weather-pos"><div class="riqi">${today.month}\u6708${today.days}\u65e5\uff08${today.week}\uff09<a href="javascript:void(0);" uigs-id="weather_city" id="weather-city-btn" class="adree">\u66f4\u6362\u57ce\u5e02<i class="m-arr"></i></a><div class="shaixuan"><div class="part1"><select name="" id="weather-province"></select></div><div class="part1"><select name="" id="weather-city"></select></div><div class="part2"><a href="javascript:void(0);" uigs-id="weather_change" id="weather-change">\u66f4\u6362</a></div></div></div><a href="${today.city|weatherUrl}" uigs-id="weather_days" class="wd-info">{@if today.pm!=="undefined"}<div class="s1">${today.temperature}\xb0<span class="you ${today.className}">${today.pmLevelText} ${today.pm}</span></div>{@/if}<div class="s2"><p class="p1">${today.description}</p><p class="p1">${today.low}/${today.height}\xb0</p><p class="p2">${today.wind}</p></div></a><ul class="other-day">{@each otherDay as item, i}<li><a href="${today.city|weatherUrl}" title="${item.description}" uigs-id="weather_days"><p class="day">{@if i==0}\u660e\u5929{@else if i==1}\u540e\u5929{@else}${item.week}{@/if}</p><p class="ico-tq"><img src="${item.icon}" width="28" height="28" alt="${item.description}"></p><p class="wd">${item.low}/${item.height}\xb0</p></a></li>{@/each}</ul></div>', t)),
            citySelect(),
            (0,
                _utils.toggleBox)($("#cur-weather"), i, {
                "top": 27
            })
    }

    function getCity(t) {
        "ok" === t.status && (weatherData.city = t.city.replace(/\t[\u4e00-\u9fa5]*[\u53bf\u533a]{1}/g, ""))
    }

    function getTodayWeahterInfo() {
        var curCity = encodeURI(weatherData.city.replace(/[\u7701\u5e02]/g, ""));
        $.when($.ajax(CUR_WEATHER_URL.replace("{{city}}", curCity)), $.ajax(PM25_URL.replace("{{city}}", curCity))).done(function(curData, pm25Data) {
            var data = eval(curData[0]);
            if (!$.isEmptyObject(data)) {
                var xmlDoc = getXmlDoc(pm25Data[0]),
                    cnAQI = xmlDoc.getElementsByTagName("cn")[0],
                    weatherIconPath = "white" === $("body").attr("color-style") ? ICON_BASE_PATH.replace("multicolor", "white") : ICON_BASE_PATH,
                    pmLevel = void 0,
                    pmNum = void 0;
                cnAQI && (pmNum = cnAQI.getAttribute("aqi"),
                        pmLevel = getAirLevel(pmNum),
                        weatherData.today.pm = pmNum,
                        weatherData.today.pmLevelText = AQI_TEXT[pmLevel],
                        weatherData.today.className = "level" + ++pmLevel),
                    weatherData.today.weather = WEATHER_MAP[data.l.l5].text,
                    weatherData.today.city = weatherData.city.replace(/[\u7701\u5e02]/g, ""),
                    weatherData.today.icon = weatherIconPath + WEATHER_MAP[data.l.l5].img,
                    weatherData.today.temperature = data.l.l1,
                    renderCurrentWeather(weatherData),
                    get3DaysWeatherInfo()
            }
        })
    }

    function getDaysWeather(t) {
        var i = t.getElementsByTagName("day"),
            n = [],
            o = {};
        if (!i || i.length < 4)
            return [];
        for (var r in WEATHER_MAP)
            WEATHER_MAP.hasOwnProperty(r) && (o[WEATHER_MAP[r].text] = WEATHER_MAP[r].img);
        for (var a = 1; a <= 4; a++)
            n.push({
                "low": i[a].getElementsByTagName("low")[0].firstChild.nodeValue,
                "height": i[a].getElementsByTagName("high")[0].firstChild.nodeValue,
                "month": parseInt(i[a].getElementsByTagName("month")[0].firstChild.nodeValue, 10),
                "days": parseInt(i[a].getElementsByTagName("days")[0].firstChild.nodeValue, 10),
                "week": i[a].getElementsByTagName("week")[0].firstChild.nodeValue,
                "description": i[a].getElementsByTagName("description")[0].firstChild.nodeValue,
                "wind": i[a].getElementsByTagName("wind")[0].firstChild.nodeValue,
                "icon": ICON_BASE_PATH + o[i[a].getElementsByTagName("daydescription")[0].firstChild.nodeValue]
            });
        return n
    }

    function get3DaysWeatherInfo() {
        var t = encodeURI(weatherData.city.replace(/[\u7701\u5e02\t]/g, "") + "\u5929\u6c14");
        $.ajax({
            "url": DETAIL_WEATHER_URL.replace("{{type}}", t),
            "success": function(t) {
                var i = getXmlDoc(t),
                    n = getDaysWeather(i),
                    o = i.getElementsByTagName("pcurl")[0];
                n.length && ($.extend(weatherData.today, n.shift()),
                    weatherData.otherDay = n,
                    weatherData.more = o.firstChild.nodeValue,
                    renderDetailWeather(weatherData))
            }
        })
    }

    function citySelect() {
        var t = $("#weather-province"),
            i = $("#weather-change"),
            n = $("#weather-city");
        $("#weather-city-btn").on("click", function() {
                var t = $(this).parent();
                t.hasClass("zhankai") ? t.removeClass("zhankai") : (addProvince(),
                    t.addClass("zhankai"))
            }),
            t.on("change", function() {
                addCities(CITY_MAP[CITY_MAP_INDEX[$(this).val()]].cities)
            }),
            i.on("click", function() {
                var i = CITY_MAP[CITY_MAP_INDEX[t.val()]].municipality;
                "\u672c\u5730\u5929\u6c14" === t.val() ? ((0,
                        _utils.setCookie)("web_index_weather_city", weatherData.city, "www.sogou.com", "/", (new Date).getTime() - 1e3),
                    getAjaxData()) : (weatherData.city = t.val() + (i ? "" : "\t" + n.val()),
                    (0,
                        _utils.setCookie)("web_index_weather_city", weatherData.city, "www.sogou.com", "/", 25e11),
                    getTodayWeahterInfo())
            })
    }

    function addProvince() {
        var t = CITY_MAP.length,
            i = void 0,
            n = void 0,
            o = void 0,
            r = "";
        for (i = 0; i < t; i++)
            n = CITY_MAP[i].province,
            weatherData.today.city.indexOf(n) > -1 ? (o = 'selected="selected"',
                addCities(CITY_MAP[i].cities)) : o = "",
            r += "<option " + o + ' value="' + n + '">' + n + "</option>";
        $("#weather-province").html(r)
    }

    function addCities(t) {
        var i = t.length,
            n = void 0,
            o = void 0,
            r = void 0,
            a = "";
        for (n = 0; n < i; n++)
            o = t[n],
            r = weatherData.today.city.indexOf(o) > -1 ? 'selected="selected"' : "",
            a += "<option " + r + ' value="' + o + '">' + o + "</option>";
        $("#weather-city").html(a)
    }

    function getAjaxData() {
        // $.ajax(GET_CITY_URL).done([getCity, getTodayWeahterInfo])
    }

    function initWeather() {
        // "" !== weatherData.city ? getTodayWeahterInfo() : getAjaxData()
    }
    Object.defineProperty(exports, "__esModule", {
        "value": !0
    });
    var _utils = __webpack_require__(0),
        GET_CITY_URL = "/websearch/api/getcity",
        CUR_WEATHER_URL = "/viwwwsogou?op=8&query={{city}}",
        PM25_URL = "/tworeq?queryString=pm2.5&qoInfo=classNo%3d0%26location%3D1%26vrQuery%3dpm2.5%26query%3dpm2.5%26classId%3d21169801%26classTag%3dEXTERNAL.PM25.LVSEHUXI&ie=utf8&userArea={{city}}",
        DETAIL_WEATHER_URL = "/tworeq?queryString={{type}}&ie=utf8&reqClassids=70090205;70090206&queryFrom=wap&vrForQc=false&dataPlatformSource=weather_card&retType=xml",
        ICON_BASE_PATH = "/web/index/images/weather/multicolor/",
        WEATHER_MAP = {
            "00": {
                "text": "\u6674",
                "img": "qing.png"
            },
            "01": {
                "text": "\u591a\u4e91",
                "img": "duoyun.png"
            },
            "02": {
                "text": "\u9634",
                "img": "yin.png"
            },
            "03": {
                "text": "\u9635\u96e8",
                "img": "zhenyu.png"
            },
            "04": {
                "text": "\u96f7\u9635\u96e8",
                "img": "leizhenyu.png"
            },
            "05": {
                "text": "\u96f7\u9635\u96e8\u4f34\u6709\u51b0\u96f9",
                "img": "leizhenyu_bingbao.png"
            },
            "06": {
                "text": "\u96e8\u5939\u96ea",
                "img": "yujiaxue.png"
            },
            "07": {
                "text": "\u5c0f\u96e8",
                "img": "xiaoyu.png"
            },
            "08": {
                "text": "\u4e2d\u96e8",
                "img": "zhongyu.png"
            },
            "09": {
                "text": "\u5927\u96e8",
                "img": "dayu.png"
            },
            "10": {
                "text": "\u66b4\u96e8",
                "img": "baoyu.png"
            },
            "11": {
                "text": "\u5927\u66b4\u96e8",
                "img": "dabaoyu.png"
            },
            "12": {
                "text": "\u7279\u5927\u66b4\u96e8",
                "img": "tedabaoyu.png"
            },
            "13": {
                "text": "\u9635\u96ea",
                "img": "zhenxue.png"
            },
            "14": {
                "text": "\u5c0f\u96ea",
                "img": "xiaoxue.png"
            },
            "15": {
                "text": "\u4e2d\u96ea",
                "img": "zhongxue.png"
            },
            "16": {
                "text": "\u5927\u96ea",
                "img": "daxue.png"
            },
            "17": {
                "text": "\u66b4\u96ea",
                "img": "baoxue.png"
            },
            "18": {
                "text": "\u96fe",
                "img": "wu.png"
            },
            "19": {
                "text": "\u51bb\u96e8",
                "img": "dongyu.png"
            },
            "20": {
                "text": "\u6c99\u5c18\u66b4",
                "img": "shachenbao.png"
            },
            "21": {
                "text": "\u5c0f\u5230\u4e2d\u96e8",
                "img": "zhongyu.png"
            },
            "22": {
                "text": "\u4e2d\u5230\u5927\u96e8",
                "img": "dayu.png"
            },
            "23": {
                "text": "\u5927\u5230\u66b4\u96e8",
                "img": "baoyu.png"
            },
            "24": {
                "text": "\u66b4\u96e8\u5230\u5927\u66b4\u96e8",
                "img": "dabaoyu.png"
            },
            "25": {
                "text": "\u5927\u66b4\u96e8\u5230\u7279\u5927\u66b4\u96e8",
                "img": "tedabaoyu.png"
            },
            "26": {
                "text": "\u5c0f\u5230\u4e2d\u96ea",
                "img": "zhongxue.png"
            },
            "27": {
                "text": "\u4e2d\u5230\u5927\u96ea",
                "img": "daxue.png"
            },
            "28": {
                "text": "\u5927\u5230\u66b4\u96ea",
                "img": "baoxue.png"
            },
            "29": {
                "text": "\u6d6e\u5c18",
                "img": "fuchen.png"
            },
            "30": {
                "text": "\u626c\u6c99",
                "img": "yangsha.png"
            },
            "31": {
                "text": "\u5f3a\u6c99\u5c18\u66b4",
                "img": "qiangshachenbao.png"
            },
            "53": {
                "text": "\u973e",
                "img": "mai.png"
            }
        },
        AQI_TEXT = ["\u4f18", "\u826f", "\u8f7b\u5ea6\u6c61\u67d3", "\u4e2d\u5ea6\u6c61\u67d3", "\u91cd\u5ea6\u6c61\u67d3", "\u4e25\u91cd\u6c61\u67d3"],
        CITY_MAP = [{
            "province": "\u672c\u5730\u5929\u6c14",
            "cities": ["\u672c\u5730\u5929\u6c14"]
        }, {
            "province": "\u5317\u4eac",
            "cities": ["\u5317\u4eac"],
            "municipality": !0
        }, {
            "province": "\u4e0a\u6d77",
            "cities": ["\u4e0a\u6d77"],
            "municipality": !0
        }, {
            "province": "\u5929\u6d25",
            "cities": ["\u5929\u6d25"],
            "municipality": !0
        }, {
            "province": "\u91cd\u5e86",
            "cities": ["\u91cd\u5e86"],
            "municipality": !0
        }, {
            "province": "\u5b89\u5fbd",
            "cities": ["\u5408\u80a5", "\u5b89\u5e86", "\u868c\u57e0", "\u4eb3\u5dde", "\u6c60\u5dde", "\u6ec1\u5dde", "\u961c\u9633", "\u6dee\u5317", "\u6dee\u5357", "\u9ec4\u5c71", "\u516d\u5b89", "\u9a6c\u978d\u5c71", "\u94dc\u9675", "\u829c\u6e56", "\u5bbf\u5dde", "\u5ba3\u57ce"]
        }, {
            "province": "\u798f\u5efa",
            "cities": ["\u798f\u5dde", "\u9f99\u5ca9", "\u5357\u5e73", "\u5b81\u5fb7", "\u8386\u7530", "\u6cc9\u5dde", "\u4e09\u660e", "\u53a6\u95e8", "\u6f33\u5dde"]
        }, {
            "province": "\u7518\u8083",
            "cities": ["\u5170\u5dde", "\u767d\u94f6", "\u5b9a\u897f", "\u7518\u5357", "\u5609\u5cea\u5173", "\u91d1\u660c", "\u9152\u6cc9", "\u4e34\u590f", "\u9647\u5357", "\u5e73\u51c9", "\u5e86\u9633", "\u5929\u6c34", "\u6b66\u5a01", "\u5f20\u6396"]
        }, {
            "province": "\u5e7f\u4e1c",
            "cities": ["\u5e7f\u5dde", "\u6f6e\u5dde", "\u4e1c\u839e", "\u4f5b\u5c71", "\u6cb3\u6e90", "\u60e0\u5dde", "\u6c5f\u95e8", "\u63ed\u9633", "\u8302\u540d", "\u6885\u5dde", "\u6e05\u8fdc", "\u6c55\u5934", "\u6c55\u5c3e", "\u97f6\u5173", "\u6df1\u5733", "\u9633\u6c5f", "\u4e91\u6d6e", "\u6e5b\u6c5f", "\u8087\u5e86", "\u4e2d\u5c71", "\u73e0\u6d77"]
        }, {
            "province": "\u5e7f\u897f",
            "cities": ["\u5357\u5b81", "\u767e\u8272", "\u5317\u6d77", "\u5d07\u5de6", "\u9632\u57ce\u6e2f", "\u8d35\u6e2f", "\u6842\u6797", "\u6cb3\u6c60", "\u8d3a\u5dde", "\u6765\u5bbe", "\u67f3\u5dde", "\u94a6\u5dde", "\u68a7\u5dde", "\u7389\u6797"]
        }, {
            "province": "\u8d35\u5dde",
            "cities": ["\u8d35\u9633", "\u5b89\u987a", "\u6bd5\u8282", "\u516d\u76d8\u6c34", "\u9ed4\u4e1c\u5357", "\u9ed4\u5357", "\u9ed4\u897f\u5357", "\u94dc\u4ec1", "\u9075\u4e49"]
        }, {
            "province": "\u6d77\u5357",
            "cities": ["\u6d77\u53e3", "\u4e09\u4e9a", "\u4fdd\u4ead", "\u510b\u5dde", "\u6587\u660c", "\u767d\u6c99", "\u4e34\u9ad8", "\u4e94\u6307\u5c71", "\u743c\u6d77", "\u4e07\u5b81", "\u660c\u6c5f", "\u6f84\u8fc8", "\u4e1c\u65b9", "\u743c\u4e2d", "\u4e50\u4e1c", "\u5c6f\u660c", "\u9675\u6c34", "\u5b9a\u5b89"]
        }, {
            "province": "\u6cb3\u5317",
            "cities": ["\u77f3\u5bb6\u5e84", "\u5eca\u574a", "\u79e6\u7687\u5c9b", "\u6ca7\u5dde", "\u90af\u90f8", "\u627f\u5fb7", "\u5510\u5c71", "\u4fdd\u5b9a", "\u8861\u6c34", "\u5f20\u5bb6\u53e3", "\u90a2\u53f0"]
        }, {
            "province": "\u6cb3\u5357",
            "cities": ["\u90d1\u5dde", "\u65b0\u4e61", "\u9a7b\u9a6c\u5e97", "\u5546\u4e18", "\u6d1b\u9633", "\u5f00\u5c01", "\u6f2f\u6cb3", "\u6fee\u9633", "\u4fe1\u9633", "\u5357\u9633", "\u8bb8\u660c", "\u5468\u53e3", "\u5b89\u9633", "\u9e64\u58c1", "\u7126\u4f5c", "\u4e09\u95e8\u5ce1", "\u5e73\u9876\u5c71"]
        }, {
            "province": "\u9ed1\u9f99\u6c5f",
            "cities": ["\u54c8\u5c14\u6ee8", "\u9ed1\u6cb3", "\u4e03\u53f0\u6cb3", "\u9f50\u9f50\u54c8\u5c14", "\u5927\u5e86", "\u4f73\u6728\u65af", "\u9e64\u5c97", "\u4f0a\u6625", "\u53cc\u9e2d\u5c71", "\u7ee5\u5316", "\u9e21\u897f", "\u5927\u5174\u5b89\u5cad", "\u7261\u4e39\u6c5f"]
        }, {
            "province": "\u6e56\u5317",
            "cities": ["\u6b66\u6c49", "\u8346\u95e8", "\u6069\u65bd", "\u8346\u5dde", "\u9ec4\u5188", "\u54b8\u5b81", "\u5b9c\u660c", "\u8944\u9633", "\u968f\u5dde", "\u9102\u5dde", "\u9ec4\u77f3", "\u795e\u519c\u67b6", "\u5341\u5830", "\u5b5d\u611f"]
        }, {
            "province": "\u6e56\u5357",
            "cities": ["\u957f\u6c99", "\u76ca\u9633", "\u90b5\u9633", "\u682a\u6d32", "\u6c38\u5dde", "\u6e58\u6f6d", "\u6e58\u897f", "\u6000\u5316", "\u8861\u9633", "\u90f4\u5dde", "\u5a04\u5e95", "\u5e38\u5fb7", "\u5f20\u5bb6\u754c", "\u5cb3\u9633"]
        }, {
            "province": "\u5409\u6797",
            "cities": ["\u957f\u6625", "\u767d\u57ce", "\u901a\u5316", "\u56db\u5e73", "\u5ef6\u8fb9", "\u5409\u6797", "\u767d\u5c71", "\u8fbd\u6e90", "\u677e\u539f"]
        }, {
            "province": "\u6c5f\u82cf",
            "cities": ["\u5357\u4eac", "\u6dee\u5b89", "\u82cf\u5dde", "\u65e0\u9521", "\u6cf0\u5dde", "\u5357\u901a", "\u8fde\u4e91\u6e2f", "\u5e38\u5dde", "\u9547\u6c5f", "\u5f90\u5dde", "\u76d0\u57ce", "\u5bbf\u8fc1", "\u626c\u5dde"]
        }, {
            "province": "\u6c5f\u897f",
            "cities": ["\u5357\u660c", "\u666f\u5fb7\u9547", "\u4e5d\u6c5f", "\u65b0\u4f59", "\u629a\u5dde", "\u8d63\u5dde", "\u4e0a\u9976", "\u9e70\u6f6d", "\u5b9c\u6625", "\u5409\u5b89", "\u840d\u4e61"]
        }, {
            "province": "\u8fbd\u5b81",
            "cities": ["\u6c88\u9633", "\u76d8\u9526", "\u671d\u9633", "\u672c\u6eaa", "\u846b\u82a6\u5c9b", "\u629a\u987a", "\u978d\u5c71", "\u94c1\u5cad", "\u9526\u5dde", "\u961c\u65b0", "\u5927\u8fde", "\u8fbd\u9633", "\u8425\u53e3", "\u4e39\u4e1c"]
        }, {
            "province": "\u5185\u8499\u53e4",
            "cities": ["\u547c\u548c\u6d69\u7279", "\u5df4\u5f66\u6dd6\u5c14", "\u5174\u5b89\u76df", "\u547c\u4f26\u8d1d\u5c14", "\u9102\u5c14\u591a\u65af", "\u963f\u62c9\u5584\u76df", "\u8d64\u5cf0", "\u5305\u5934", "\u9521\u6797\u90ed\u52d2", "\u4e4c\u6d77", "\u901a\u8fbd", "\u4e4c\u5170\u5bdf\u5e03"]
        }, {
            "province": "\u5b81\u590f",
            "cities": ["\u94f6\u5ddd", "\u77f3\u5634\u5c71", "\u56fa\u539f", "\u4e2d\u536b", "\u5434\u5fe0"]
        }, {
            "province": "\u9752\u6d77",
            "cities": ["\u897f\u5b81", "\u6d77\u897f", "\u6d77\u5357", "\u9ec4\u5357", "\u7389\u6811", "\u6d77\u4e1c", "\u6d77\u5317", "\u679c\u6d1b"]
        }, {
            "province": "\u5c71\u4e1c",
            "cities": ["\u6d4e\u5357", "\u83b1\u829c", "\u6ee8\u5dde", "\u9752\u5c9b", "\u83cf\u6cfd", "\u5a01\u6d77", "\u6d4e\u5b81", "\u65e5\u7167", "\u70df\u53f0", "\u6f4d\u574a", "\u4e34\u6c82", "\u6cf0\u5b89", "\u4e1c\u8425", "\u804a\u57ce", "\u6dc4\u535a", "\u67a3\u5e84", "\u5fb7\u5dde"]
        }, {
            "province": "\u5c71\u897f",
            "cities": ["\u592a\u539f", "\u5927\u540c", "\u664b\u57ce", "\u664b\u4e2d", "\u4e34\u6c7e", "\u5415\u6881", "\u6714\u5dde", "\u5ffb\u5dde", "\u9633\u6cc9", "\u8fd0\u57ce", "\u957f\u6cbb"]
        }, {
            "province": "\u9655\u897f",
            "cities": ["\u897f\u5b89", "\u5546\u6d1b", "\u6c49\u4e2d", "\u6768\u51cc", "\u6986\u6797", "\u54b8\u9633", "\u6e2d\u5357", "\u94dc\u5ddd", "\u5b9d\u9e21", "\u5ef6\u5b89", "\u5b89\u5eb7"]
        }, {
            "province": "\u56db\u5ddd",
            "cities": ["\u6210\u90fd", "\u5185\u6c5f", "\u5b9c\u5bbe", "\u8d44\u9633", "\u81ea\u8d21", "\u5e7f\u5143", "\u6cf8\u5dde", "\u8fbe\u5dde", "\u9042\u5b81", "\u4e50\u5c71", "\u7518\u5b5c", "\u963f\u575d", "\u7ef5\u9633", "\u7709\u5c71", "\u51c9\u5c71", "\u96c5\u5b89", "\u5df4\u4e2d", "\u5fb7\u9633", "\u6500\u679d\u82b1", "\u5e7f\u5b89", "\u5357\u5145"]
        }, {
            "province": "\u897f\u85cf",
            "cities": ["\u62c9\u8428", "\u5c71\u5357", "\u6797\u829d", "\u963f\u91cc", "\u660c\u90fd", "\u65e5\u5580\u5219", "\u90a3\u66f2"]
        }, {
            "province": "\u65b0\u7586",
            "cities": ["\u4e4c\u9c81\u6728\u9f50", "\u5854\u57ce", "\u514b\u62c9\u739b\u4f9d", "\u963f\u52d2\u6cf0", "\u77f3\u6cb3\u5b50", "\u54c8\u5bc6", "\u5580\u4ec0", "\u4f0a\u7281", "\u963f\u514b\u82cf", "\u548c\u7530", "\u514b\u5dde", "\u5410\u9c81\u756a", "\u5df4\u97f3\u90ed\u695e", "\u535a\u5c14\u5854\u62c9", "\u660c\u5409"]
        }, {
            "province": "\u4e91\u5357",
            "cities": ["\u6606\u660e", "\u897f\u53cc\u7248\u7eb3", "\u6012\u6c5f", "\u7ea2\u6cb3", "\u666e\u6d31", "\u5927\u7406", "\u4e3d\u6c5f", "\u5fb7\u5b8f", "\u695a\u96c4", "\u6587\u5c71", "\u4fdd\u5c71", "\u4e34\u6ca7", "\u8fea\u5e86", "\u7389\u6eaa", "\u662d\u901a", "\u66f2\u9756"]
        }, {
            "province": "\u6d59\u6c5f",
            "cities": ["\u676d\u5dde", "\u5b81\u6ce2", "\u821f\u5c71", "\u53f0\u5dde", "\u6e56\u5dde", "\u8862\u5dde", "\u6e29\u5dde", "\u7ecd\u5174", "\u4e3d\u6c34", "\u5609\u5174", "\u91d1\u534e"]
        }, {
            "province": "\u9999\u6e2f",
            "cities": ["\u9999\u6e2f"],
            "municipality": !0
        }, {
            "province": "\u6fb3\u95e8",
            "cities": ["\u6fb3\u95e8"],
            "municipality": !0
        }, {
            "province": "\u53f0\u6e7e",
            "cities": ["\u53f0\u5317", "\u9ad8\u96c4", "\u53f0\u4e2d"]
        }],
        CITY_MAP_INDEX = {
            "\u672c\u5730\u5929\u6c14": 0,
            "\u5317\u4eac": 1,
            "\u4e0a\u6d77": 2,
            "\u5929\u6d25": 3,
            "\u91cd\u5e86": 4,
            "\u5b89\u5fbd": 5,
            "\u798f\u5efa": 6,
            "\u7518\u8083": 7,
            "\u5e7f\u4e1c": 8,
            "\u5e7f\u897f": 9,
            "\u8d35\u5dde": 10,
            "\u6d77\u5357": 11,
            "\u6cb3\u5317": 12,
            "\u6cb3\u5357": 13,
            "\u9ed1\u9f99\u6c5f": 14,
            "\u6e56\u5317": 15,
            "\u6e56\u5357": 16,
            "\u5409\u6797": 17,
            "\u6c5f\u82cf": 18,
            "\u6c5f\u897f": 19,
            "\u8fbd\u5b81": 20,
            "\u5185\u8499\u53e4": 21,
            "\u5b81\u590f": 22,
            "\u9752\u6d77": 23,
            "\u5c71\u4e1c": 24,
            "\u5c71\u897f": 25,
            "\u9655\u897f": 26,
            "\u56db\u5ddd": 27,
            "\u897f\u85cf": 28,
            "\u65b0\u7586": 29,
            "\u4e91\u5357": 30,
            "\u6d59\u6c5f": 31,
            "\u9999\u6e2f": 32,
            "\u6fb3\u95e8": 33,
            "\u53f0\u6e7e": 34
        },
        weatherData = {
            "city": (0,
                _utils.getCookie)("web_index_weather_city"),
            "today": {},
            "otherDay": []
        };
    exports["default"] = initWeather
}, function(t, i, n) {
    "use strict";

    function o() {
        var t = void 0;
        r($(window).width() > 1366),
            (0,
                d.toggleBox)($("#more-product"), $("#products-box"), {
                "top": 30,
                "activeClass": "m-arr"
            }),
            (0,
                d.toggleBox)($("#settings"), $("#settings-box"), {
                "top": 30
            }),
            (0,
                d.toggleBox)($("#nick-name"), $("#nick-name-box"), {
                "top": 30
            }),
            (0,
                d.toggleBox)($("#miniQRcode"), $("#QRcode")),
            $("#loginBtn").length > 0 && login({
                "loginBtn": "#loginBtn",
                "parent": "#wrap"
            }),
            $("#changeSkinBtn").length > 0 && void 0 === window.userSec && login({
                "loginBtn": "#changeSkinBtn",
                "parent": "#wrap"
            }),
            $("#indexBanner,#loginBtn,#query,#stb,#changeSkinBtn").on("click", function() {
                var t = $(this);
                "function" == typeof window.uigsPB && uigsPB(t.attr("uigs-id") || t.attr("id"))
            }),
            s(),
            c(),
            a(),
            $(window).on("resize.baseStyle", function() {
                clearTimeout(t),
                    t = setTimeout(function() {
                        r($(this).width() > 1366)
                    })
            })
    }

    function r(t) {
        var i = $("body");
        t ? i.addClass("big-scn") : i.removeClass("big-scn")
    }

    function a() {
        // if (window.userSec) {
        //     window.PassportSC = {},
        //         window.PassportSC.onApiLoaded = function() {
        //             window.PassportSC.appid = 2017,
        //                 window.WEB = {},
        //                 WEB.logout = function() {
        //                     window.PassportSC.logoutHandle($("#pp-playground")[0], function() {}, function() {
        //                         window.location.reload()
        //                     })
        //                 }
        //         };
        //     var t = $("<script/>"),
        //         i = location.protocol + "//account.sogou.com/static/api/passport_cb.js";
        //     t.attr("src", i),
        //         $("body").append(t)
        // }
    }

    function s() {
        var t = $("#query");
        t.on("focus", function() {
                $(this).removeClass("hover"),
                    $(this).addClass("active"),
                    this.select()
            }),
            t.on("blur", function() {
                $(this).removeClass("hover"),
                    $(this).removeClass("active")
            }),
            t.on("mouseenter", function() {
                $(this).addClass("hover")
            }),
            t.on("mouseleave", function() {
                $(this).removeClass("hover")
            })
    }

    function c() {
        var t = location.search.replace("?", ""),
            i = u(t) || {},
            n = document.getElementById("sf");
        (i.hdq || i.pid) && (i.hdq ? n.appendChild(l("hdq", i.hdq)) : n.appendChild(l("pid", i.pid)),
            n.action = "/search")
    }

    function l(t, i) {
        if (t && i) {
            var n = document.createElement("input");
            return n.type = "hidden",
                n.name = t,
                n.value = i,
                n
        }
    }

    function u(t) {
        if ("string" == typeof t) {
            t = t.replace("?", "");
            for (var i = t.split("&"), n = {}, o = void 0, r = 0, a = i.length; r < a; r++)
                o = i[r].split("="),
                n[o[0]] = o[1];
            return n
        }
    }
    Object.defineProperty(i, "__esModule", {
        "value": !0
    });
    var d = n(0);
    window.resizeImg = d.resizeImage,
        i["default"] = o
}, function(t, i, n) {
    "use strict";

    function o(t) {
        var i = 0,
            n = 0,
            o = function(t) {
                return window.skinId && t.id == window.skinId ? "cur" : ""
            },
            a = function(t, o) {
                return i == o ? t < n || t >= n + 6 ? "hide" : "show" : t < 6 ? "show" : "hide"
            },
            s = function(t) {
                return t == i ? "cur" : ""
            },
            c = function(t) {
                return i == t ? "show" : "hide"
            };
        r("/home/data/skinlist", {}, function(r) {
            if (r && "ok" == r.code) {
                if (window.skinId)
                    for (var l = 0; r.skinlib && l < r.skinlib.length; l++)
                        for (var u = 0; r.skinlib[l].skins && u < r.skinlib[l].skins.length; u++)
                            r.skinlib[l].skins[u].id == window.skinId && (i = l,
                                n = 6 * Math.floor(u / 6));
                juicer.register("drawSkinCurClass", o),
                    juicer.register("drawSkinDisplayClass", a),
                    juicer.register("drawCateCurClass", s),
                    juicer.register("drawCateDisplayClass", c),
                    juicer.register("getCdnImgLink", window.getCdnImgLink);
                var d = juicer('{@each skinlib as item, index}<li class="${index|drawCateCurClass}"><a href="javascript:void(0)" id="skincate_${index}">${item.name}</a></li>{@/each}<li><a href="javascript:void(0)" id="skincate_history">\u5386\u53f2\u76ae\u80a4</a></li>', r),
                    p = juicer('{@each skinlib as item,index}<ul class="${index|drawCateDisplayClass}">{@each item.skins as skinItem, skinIndex}<li class="$${skinItem|drawSkinCurClass} $${skinIndex|drawSkinDisplayClass, index}"><a href="javascript:void(0)" s-pic="${skinItem.smallurl|getCdnImgLink}" skin-pic="${skinItem.bigurl|getCdnImgLink}" id="${skinItem.id}" logo-id="${skinItem.logo_id}"><span></span><div class="skin-form">${skinItem.source}</div><img src="${skinItem.smallurl|getCdnImgLink}"></a></li>{@/each}</ul>{@/each}<ul class="hide" id="skin_history_list"></ul>', r),
                    h = $("#skinCateList"),
                    f = $("#skinlist");
                d && h && p && f && (h.html(d),
                        f.html(p),
                        "function" == typeof t && t()),
                    juicer.unregister("drawSkinCurClass"),
                    juicer.unregister("drawSkinDisplayClass"),
                    juicer.unregister("drawCateCurClass"),
                    juicer.unregister("drawCateDisplayClass"),
                    juicer.unregister("getCdnImgLink")
            }
        })
    }

    function r(t, i, n, o, r) {
        $ && $.ajax && (i["t"] = (new Date).getTime(),
            $.ajax({
                "type": "GET",
                "url": t,
                "data": i,
                "dataType": r || "json",
                "success": n,
                "error": o
            }))
    }

    function a(t, i, n) {
        var o = "";
        uigs_para && uigs_para.puid && (o = uigs_para.puid);
        // (new Image).src = location.protocol.toLowerCase() + "//pb.sogou.com/pv.gif?uigs_productid=webapp&uigs_t=" + (new Date).getTime() + "&puid=" + o + "&type=" + t + "&stype=" + i + n
    }

    function s(t) {
        var i = (0,
            x.getCookie)("skin_pos_close");
        if (0 == $("#" + t).length && (0,
                x.setCookie)("skin_pos_close", "1", 1),
            1 == $("#" + t).length && "1" != i) {
            var n = arrayIndexOf(cardAllList, "movie"),
                o = b("movie");
            n > -1 ? o || $("#" + t).show() : $("#" + t).show()
        }
        $("#" + t).css("width", $(".hf-box").width() + "px")
    }

    function c(t, i) {
        1 == $("#" + t).length && ($("#" + t).hide(),
            (0,
                x.setCookie)("skin_pos_close", "1", i))
    }

    function l(t) {
        var i = $("#cur-weather").find("i img"),
            n = $("body");
        t = getCdnImgLink(t),
            $(".skin-bg img").attr("src", t),
            $(".skin-bg").show(),
            "1" == ($("#skinlist").find(".cur a").eq(0).attr("logo-id") || logoid) ? (n.removeClass("white-skin"),
                i.length && (i.attr("src", i.attr("src").replace("white", "multicolor")),
                    n.removeAttr("color-style")),
                logoid = "1") : (n.addClass("white-skin"),
                i.length && (i.attr("src", i.attr("src").replace("multicolor", "white")),
                    n.attr("color-style", "white")),
                logoid = "0"),
            C && $(".logo span").hide(),
            $(".qborder").addClass("qborder-v1"),
            $("#header").addClass("index-login-v2"),
            $("#skinEBtn").parent().hide(),
            $("#skinDBtn").parent().show(),
            $("#closeSkinBtn").show(),
            $("#hoverItemSkin").find(">a").attr("data-show", "1").find(">span").addClass("ico-d2"),
            window.defaultBgImage = t,
            $(window).resize(),
            (P.length && "block" == P.css("display") || "block" == M.css("display")) && (E.hide(),
                D.show(),
                S.show())
    }

    function u() {
        var t = $("#cur-weather").find("i img"),
            i = $("body");
        $(".skin-bg").hide(),
            i.removeClass("white-skin"),
            t.length && (t.attr("src", t.attr("src").replace("white", "multicolor")),
                i.removeAttr("color-style")),
            C && $(".logo span").show(),
            $(".qborder").removeClass("qborder-v1"),
            $("#header").removeClass("index-login-v2"),
            I = $("#skinlist .cur").removeClass("cur"),
            $("#skinEBtn").parent().show(),
            $("#skinDBtn").parent().hide(),
            $("#closeSkinBtn").hide(),
            $("#hoverItemSkin").find(">a").attr("data-show", "0").find(">span").removeClass("ico-d2"),
            d("set", "skininfo.enable", "0")
    }

    function d(t, i, n) {
        r(k, {
            "op": t,
            "type": i,
            "detail": n
        }, function(t) {
            t && t.code && "ok" == t.code || a("lindex", "skincardfailed", "&data=" + encodeURIComponent(t))
        }, function() {
            a("lindex", "skincardfailed", "&err=net")
        })
    }

    function p(t) {
        var i = $("#skinlist ul.show li").length,
            n = $("#skinlist ul.show li.show").index();
        if ("right" == t && n + 6 < i) {
            $("#skinlist ul.show li.show").removeClass("show").addClass("hide");
            for (var o = n + 6; o < n + 12 && o < i; o++)
                $($("#skinlist ul.show li")[o]).removeClass("hide").addClass("show")
        }
        if ("left" == t && n - 6 >= 0) {
            $("#nextBtn").show(),
                $("#skinlist ul.show li.show").removeClass("show").addClass("hide");
            for (var o = n - 6; o < n; o++)
                $($("#skinlist ul.show li")[o]).removeClass("hide").addClass("show")
        }
        h()
    }

    function h() {
        var t = $("#skinlist ul.show li").length,
            i = $("#skinlist ul.show li.show").index();
        0 == i ? $("#prevBtn").hide() : $("#prevBtn").show(),
            i + 6 >= t ? $("#nextBtn").hide() : $("#nextBtn").show()
    }

    function f() {
        var t = $(this).attr("skin-pic"),
            i = $(this).attr("logo-id");
        if (t) {
            $("#skinlist .cur").removeClass("cur"),
                I = $(this).parent().addClass("cur"),
                window.skinPic && (window.skinPic = t),
                l(t);
            var n = $(this).attr("id"),
                o = $(this).attr("s-pic");
            if (r(k, {
                    "op": "set",
                    "type": "skin",
                    "detail": '{"id" : "' + n + '", "smallurl" : "' + o + '", "bigurl" : "' + t + '", "logo_id" : "' + i + '"}'
                }, function(t) {
                    t && t.code && "ok" == t.code || a("lindex", "setskinfail", "&data=" + encodeURIComponent(t)),
                        window.skinId && (window.skinId = n),
                        O = !0
                }, function() {
                    a("lindex", "setskinfail", "&err=net")
                }),
                "" != filmSkinForCard && 0 == n.indexOf(filmSkinForCard)) {
                if (sogouIndex && sogouIndex.cardEnabled) {
                    $("#cardEBtn").click(),
                        _("movie") || ($("#movie_dbtn").parent().show(),
                            $("#movie_ebtn").parent().hide(),
                            $("#movie").click())
                }
            } else
                _("movie") && ($("#movie_ebtn").parent().show(),
                    $("#movie_dbtn").parent().hide());
            c("skin-pos", 1296e6),
                a("lindex", "setskinpic", "&skinid=" + n)
        }
    }

    function g() {
        $("#skinCateList li").removeClass("cur"),
            $($("#skinCateList li")[0]).addClass("cur"),
            $("#skinlist ul").removeClass().addClass("hide"),
            $($("#skinlist ul")[0]).removeClass("hide").addClass("show")
    }

    function w() {
        $("#skinlist a").click(f),
            $("#skinCateList a").click(function() {
                var t = $(this).parent().index();
                $("#skinCateList .cur").index() != t && ($("#skinCateList li").removeClass("cur"),
                        $(this).parent().addClass("cur"),
                        $("#skinlist ul").removeClass().addClass("hide"),
                        $($("#skinlist ul")[t]).removeClass("hide").addClass("show")),
                    h(),
                    a("lindex", "switchskincate", "&skincateid=" + $("this").attr("id"))
            }),
            $("#skincate_history").click(function() {
                T && !O || v(function() {
                    $("#skin_history_list a").click(f),
                        h()
                })
            }),
            g(),
            h()
    }

    function m() {
        j || o(w),
            j = !0,
            g()
    }

    function v(t) {
        var i = {
                "op": "get",
                "type": "skin.all"
            },
            n = 0,
            o = function(t) {
                return window.skinId && t.id == window.skinId ? "cur" : ""
            },
            a = function(t) {
                return t < n || t >= n + 6 ? "hide" : "show"
            };
        r("/home/data/user", i, function(i) {
            if (i && "ok" == i.code && i.skininfo && i.skininfo.histories) {
                if (window.skinId)
                    for (var r = 0; i.skininfo.histories && r < i.skininfo.histories.length; r++)
                        i.skininfo.histories[r].id == window.skinId && (n = 6 * Math.floor(r / 6));
                juicer.register("drawSkinCurClass", o),
                    juicer.register("drawSkinDisplayClass", a),
                    juicer.register("getCdnImgLink", window.getCdnImgLink);
                var s = juicer('{@each histories as skinItem, skinIndex}<li class="$${skinItem|drawSkinCurClass} $${skinIndex|drawSkinDisplayClass}"><a href="javascript:void(0)" s-pic="${skinItem.smallurl|getCdnImgLink}" skin-pic="${skinItem.bigurl|getCdnImgLink}" id="${skinItem.id}" logo-id="${skinItem.logo_id}"><span></span><img src="${skinItem.smallurl|getCdnImgLink}"></a></li>{@/each}', i.skininfo),
                    c = $("#skin_history_list");
                s && c && (c.html(s),
                        "function" == typeof t && t()),
                    juicer.unregister("drawSkinCurClass"),
                    juicer.unregister("drawSkinDisplayClass"),
                    juicer.unregister("getCdnImgLink")
            }
        })
    }

    function y() {
        s("skin-pos");
        var t = $("#skinDialog"),
            i = $("#header .top-rt");
        $("#changeSkinBtn").click(function(n) {
                uigsPB(($(this).attr("uigs-id") || $(this).attr("id")) + "&" + $(this).attr("href"), $(this).html()),
                    i.fadeOut("normal"),
                    t.slideDown("normal"),
                    m(),
                    n.stopPropagation(),
                    a("lindex", "showskinpanel", "")
            }),
            $("#hideSkinBtn,body").click(function() {
                t.slideUp("normal", function() {
                        i.show()
                    }),
                    a("lindex", "hideskinpanel", "")
            }),
            t.click(function(e) {
                e.stopPropagation()
            }),
            $(".hide-skin").click(function() {
                u(),
                    a("lindex", "panelcloseskin", ""),
                    P.length && "none" != P.css("display") || "none" != M.css("display") || (E.show(),
                        D.hide(),
                        S.hide())
            }),
            $("#prevBtn").click(function() {
                p("left"),
                    a("lindex", "skinprevpage", "")
            }),
            $("#nextBtn").click(function() {
                p("right"),
                    a("lindex", "skinnextpage", "")
            })
    }

    function b(t) {
        for (var i = 0; window.cardList && i < window.cardList.length; i++)
            if (t == window.cardList[i].code)
                return !0;
        return !1
    }

    function _(t) {
        var i = (0,
                x.getCookie)("skin_" + t + "_card_switch_clicked"),
            n = (0,
                x.getCookie)("skin_" + t + "_card_switch");
        if (b(t)) {
            if ("1" != i && null == n)
                return !0
        } else if ("1" == i && "0" == n)
            return !0;
        return !1
    }
    Object.defineProperty(i, "__esModule", {
        "value": !0
    });
    var x = n(0),
        k = "/home/data/user",
        C = window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE6.0") >= 0,
        j = !1,
        T = !1,
        O = !1,
        I = [],
        D = $("#footer"),
        E = $("#QRcode-footer"),
        S = $("#QRcode-box"),
        P = $(".skin-bg"),
        M = $("#card-box");
    window.resizeImg = x.resizeImage,
        window.loadDefault = function(t, i) {
            void 0 !== t && (t.src = i,
                t.style.visibility = "visible")
        },
        window.getCdnImgLink = x.getCdnImageUrl,
        i["default"] = y
}, function(t, i, n) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function r() {
        b.show ? a() : ("none" === $("#QRcode-footer").css("display") && $("#QRcode-box").show(),
            $("#show-card").show().on("click.cardsInit", function() {
                a(),
                    window.userSec ? l("set", "cardinfo.enable", "1") : (0,
                        f.setCookie)("web_index_card_show", "1", "", "/", 25e11),
                    $(this).off("click.cardsInit").hide()
            }))
    }

    function a() {
        var t = null,
            i = $("#footer"),
            n = $("#QRcode-footer"),
            o = $("#QRcode-box");
        s(),
            c(),
            h(),
            p(o, !x),
            p($("#back-top")),
            d(),
            x && (n.hide(),
                o.show(),
                i.show()),
            $("#top-card-tab,#card-tab-box").on("click", "span", function(e) {
                k(e.target.id)
            }),
            $(window).on("scroll", function() {
                p($("#QRcode-box"), !x),
                    p($("#back-top"), !x)
            }),
            $(window).on("resize", function() {
                clearTimeout(t),
                    t = setTimeout(function() {
                        $("#content").hasClass("fixed") && (p($("#search-box")),
                                p($("#logo-s"))),
                            p($(".js-content-right")),
                            p($("#QRcode-box"), !x),
                            p($("#back-top"))
                    }, 10)
            })
    }

    function s() {
        var t = void 0,
            i = $("#card-tab-box"),
            n = b.cardTab.length,
            o = $("#card-box"),
            r = $("#scroll-more"),
            a = $("#wrap"),
            s = $("#QRcode-box"),
            c = new Image,
            l = !1;
        if (!n)
            return void $("#close-card").click();
        for (var d = n - 1; d >= 0; d--) {
            var p = b.cardTab[d],
                h = p.initFn;
            "function" == typeof y[h] ? (t = $('<span class="js-card-tab"/>'),
                t.html(p.text),
                p.id && t.attr("id", p.id),
                p.className && t.addClass(p.className),
                i.prepend(t),
                y[h]()) : "cur" === p.className && (l = !0)
        }
        if (l) {
            var f = $(".js-card-tab");
            if (!(f.length > 0))
                return void $("#close-card").click();
            f.eq(0).click().addClass("cur")
        }
        a.addClass("join-on"),
            s.addClass("kuozhandl").show(),
            o.show(),
            r.show(),
            // c.src = location.protocol + "//pb.sogou.com/pv.gif?uigs_productid=webapp&uigs_t=" + (new Date).getTime() + "&type=webindex_card&stype=show",
            u(),
            x = !0
    }

    function c() {
        var t = $("#card-box"),
            i = $("#card-settings"),
            n = $("#close-card"),
            o = $("#card-options"),
            r = $("#show-card"),
            a = $("#scroll-more"),
            s = $("#wrap"),
            c = $("#QRcode-box"),
            u = $("#footer"),
            d = $("#QRcode-footer"),
            h = $(".skin-bg");
        i.on("click", function(e) {
                o.toggle(),
                    k($(this).attr("uigs-id")),
                    e.stopPropagation()
            }),
            $("body").on("click", function() {
                o.hide()
            }),
            n.on("click", function() {
                t.hide(),
                    a.hide(),
                    o.hide(),
                    s.removeClass("join-on"),
                    c.removeClass("kuozhandl"),
                    r.show(),
                    u.removeClass("pos-sta"),
                    x = !1,
                    h.length && "none" !== h.css("display") || (d.show(),
                        c.hide(),
                        u.hide()),
                    window.userSec ? l("set", "cardinfo.enable", "0") : (0,
                        f.setCookie)("web_index_card_show", "0", "", "/", 25e11),
                    p($("#QRcode-box"), !x),
                    window.resizeBgImg && window.resizeBgImg()
            }),
            r.on("click", function() {
                s.addClass("join-on"),
                    c.addClass("kuozhandl"),
                    t.show(),
                    a.show(),
                    d.length && (d.hide(),
                        c.show(),
                        u.show()),
                    $("#card-box2").hasClass("show-all") && u.addClass("pos-sta"),
                    $(this).hide(),
                    x = !0,
                    window.userSec ? l("set", "cardinfo.enable", "1") : (0,
                        f.setCookie)("web_index_card_show", "1", "", "/", 25e11)
            })
    }

    function l(t, i, n) {
        if (window.userSec) {
            var o = {
                "op": t,
                "type": i,
                "detail": n,
                "t": (new Date).getTime()
            };
            $.ajax({
                "type": "GET",
                "url": C,
                "data": o,
                "cache": !1,
                "success": function(t) {
                    !t || !t.code || t.code
                },
                "error": function() {}
            })
        }
    }

    function u() {
        var t = $(document),
            i = $("#back-top");
        $(window).on("scroll", function() {
                _ = t.scrollTop(),
                    setTimeout(function() {
                        clearTimeout(void 0),
                            _ > 50 ? i.show() : i.hide()
                    }, 100)
            }),
            i.on("click", function() {
                $(document).scrollTop(0)
            })
    }

    function d() {
        var t = $(document),
            i = $("#content"),
            n = $("#search-box"),
            o = $("#card-box"),
            r = $("#card-tab-box"),
            a = $("#top-card-tab"),
            s = $("#card-tab-layer"),
            c = $("#top-float-bar"),
            l = $(".js-content-right"),
            u = $("#logo-s"),
            d = r.children("span"),
            h = n.offset().top,
            f = $("#card-content").offset().top,
            g = !1,
            w = !1,
            m = !1;
        $(window).on("scroll.setSearch", function() {
                var s = t.scrollTop();
                $("#vl").hide(),
                    $("#card-options").hide(),
                    s > h - 14 && (p(n),
                        p(u), !w && n.css("opacity", 0),
                        i.addClass("fixed"), !w && n.animate({
                            "opacity": 1
                        }, 500), !w && u.animate({
                            "opacity": 1
                        }, 500),
                        w = !0),
                    s <= h - 14 && w && (p(n, !0),
                        p(u, !0),
                        w && u.css({
                            "opacity": 0
                        }),
                        w = !1,
                        i.removeClass("fixed")),
                    s + 72 > f && (g = !0,
                        d.appendTo(a)),
                    s + 72 <= f && g && (g = !1,
                        r.prepend(d)),
                    s >= f - 109 && $("#card-box2").hasClass("show-all") && (m = !0,
                        o.addClass("card-box-fix"),
                        p(l)),
                    s < f - 109 && m && (m = !1,
                        o.removeClass("card-box-fix"),
                        p(l, !0))
            }),
            t.on("mousewheel", function(e) {
                var i = navigator.userAgent.indexOf("MSIE 8") > -1;
                t.scrollTop() - r.height() <= f ? s.stop().fadeOut(function() {
                    i || c.height(72)
                }) : t.scrollTop() > f && 1 === e.deltaY ? s.stop().fadeIn(function() {
                    i || c.height(114)
                }) : s.stop().fadeOut(function() {
                    i || c.height(72)
                })
            })
    }

    function p(t, i) {
        if (t.length) {
            var n = $(window).width(),
                o = $(document).scrollLeft();
            n < 1e3 && !i ? t.css({
                "left": 500 - o
            }) : t.css({
                "left": ""
            })
        }
    }

    function h() {
        $("#card-box2").addClass("show-all"),
            $("#footer").addClass("pos-sta"),
            $("#scroll-more").hide()
    }
    Object.defineProperty(i, "__esModule", {
        "value": !0
    });
    var f = n(0),
        g = n(10),
        w = o(g),
        m = n(11),
        v = o(m),
        y = {
            "newsInit": w["default"],
            "navInit": v["default"]
        },
        b = {
            "show": "1" === (0,
                f.getCookie)("web_index_card_show"),
            "cardTab": [{
                "text": "\u63a8\u8350",
                "id": "card-news-tab",
                "initFn": "newsInit",
                "className": "cur"
            }]
        },
        _ = 0,
        x = !1,
        k = "function" == typeof window.uigsPB ? window.uigsPB : function() {},
        C = "/home/data/user";
    i["default"] = r
}, function(t, i, n) {
    "use strict";
    //hot news and words
    function o(t) {}

    function r(t) {
        return "/search?ie=utf8&query=" + encodeURIComponent(t) + "&from=newscard"
    }

    function a(t, i) {
        if ("number" == typeof t || "string" == typeof t) {
            var n = t + "",
                o = n.length;
            return i = i || 2,
                o < i ? new Array(i - n.length + 1).join("0") + n : n
        }
        return ""
    }

    function s(t) {
        if ("number" != typeof t || 10 !== t.toString().length && 13 !== t.toString().length)
            return "";
        10 === t.toString().length && (t *= 1e3);
        var i = new Date(t),
            n = i.getMonth() + 1,
            o = i.getDate(),
            r = i.getHours(),
            s = i.getMinutes();
        return a(n) + "-" + a(o) + " " + a(r) + ":" + a(s)
    }

    function c(t) {
        if ("number" != typeof t || 10 !== t.toString().length && 13 !== t.toString().length)
            return "";
        10 === t.toString().length && (t *= 1e3);
        var i = new Date(t),
            n = i.getFullYear(),
            o = i.getSeconds();
        return n + "-" + s(t) + ":" + a(o)
    }

    function l() {
        console.log('请求热词');
        $.ajax({
            "url": "/suggnew/hotwords",
            "cache": !1,
            "crossDomain": !0,
            "dataType": "script", // 返回脚本并执行 var top_words= [];
            "scriptCharset": "GBK",
            "success": u,
            "error": function() {
                $("#card-news-right").show()
            }
        })
    }

    function u() {

        if ("object" === ("undefined" == typeof top_words ? "undefined" : w(top_words))) {
            var t = $("#hot-list"),
                i = void 0;
            juicer.register("getHotWordUrl", r),
                i = juicer(v, {
                    "hotWords": top_words
                }),
                t.append(i),
                $("#card-news-right").show()
        }
    }

    function d(t) {
        var i = $("#news-list");
        juicer.register("imageUrl", m.getCdnImageUrl),
            juicer.register("formatPublistTime", s),
            juicer.register("formatTime", c),
            i.append(y.render(t))
    }

    function p(t) {
        var i = {
                "data": []
            },
            n = t.data.length;
        if (n)
            for (var o = 0; o < n; o++)
                _[t.data[o].preview_url] || _[t.data[o].title] || i.data.push(t.data[o]),
                _[t.data[o].preview_url] = 1,
                _[t.data[o].title] = 1;
        return i
    }

    function h() {
        var t = {
                "page": b
            },
            i = $("#loading-fail"),
            n = $("#no-more"),
            r = $("#loading"),
            a = $("#scroll-more");
        // console.log('c', c);
        C || $.ajax({
            "url": "/suggnew/hotnews",
            "cache": !1,
            "data": t,
            "dataType": "json",
            "beforeSend": function() {
                C = !0;
                r.show(),
                    i.hide(),
                    o("request");
            },
            "success": function(t) {
                // t = {data: [{title:,preview_url:,behot_time, source: , brief:}], message:"success", page: , ret:}
                // console.info(t);
                var r = void 0;
                return "success" !== t.message || t.reventonCode ? (i.show(),
                    void o("error")) : t.data.length ? (1 === b && $("#news-list").empty(),
                    t.page && (b = t.page),
                    r = p(t),
                    r.data.length < 5 && o("fewNews"),
                    void d(r)) : (n.show(),
                    a.hide(),
                    $(window).off("scroll.loadingNews"),
                    void o("noMore"))
            },
            "error": function() {
                o("serverError"),
                    i.show()
            },
            "complete": function() {
                C = !1,
                    r.hide()
            }
        })
    }

    function f() {
        var t = $(document),
            i = void 0;
        $(window).on("scroll.loadingNews", function() {
            clearTimeout(i),
                i = setTimeout(function() {
                    !C && $(this).height() + t.scrollTop() >= t.height() - 500 && $("#card-box2").hasClass("show-all") && $("#card-news-tab").hasClass("cur") && h()
                }, 100)
        })
    }

    function g() {
        j = $("#card-news-tab"),
            j.on("click", function() {
                $(this).parent().children("span.cur").removeClass("cur"),
                    k.children("div").hide(),
                    x.show(),
                    $(this).addClass("cur")
            }),
            j.hasClass("cur") && x.show(),
            $("#reload").click(function() {
                h()
            }),
            $("#scroll-more").on("click", function() {
                h()
            }),
            l(),
            h(),
            f()
    }
    Object.defineProperty(i, "__esModule", {
        "value": !0
    });
    var w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } :
        function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        m = n(0), //hotWords  index  getHotWordUrl   
        v = '{@each hotWords as word, index}{@if index<10}<li><a href="$${word|getHotWordUrl}" uigs-id="news_hot-news${index}" target="_blank" title="${word}">${word}</a></li>{@/if}{@/each}', //data gengxin: news.title, brief, news.time, sources, preview_url
        y = juicer("{@each data as news}<li><div class=\"info-box\"><h2><a href=\"$${news.preview_url}\" uigs-id=\"news_link\" click-opt=\"[{'category':'open','tag':'go_detail','datetime':'${news.behot_time|formatTime}','value':'${news.group_id}','label':'click_headline'}]\" target=\"_blank\" title=\"${news.title}\">${news.title}</a></h2><p>${news.brief}</p><p class=\"time\"><span>${news.source}</span>${news.behot_time|formatPublistTime}</p></div></li>{@/each}"),
        b = 1,
        _ = {},
        x = $("<div/>"),
        k = $("#card-content"),
        C = !1,
        j = void 0;
    x.css("display", "none"),
        x.append('<div class="c-main-left"><ul class="news-list" id="news-list"><li style="padding:78px 0;border:none;"></li></ul><div class="loading-box" id="no-more" style="display: none;">\u6ca1\u6709\u66f4\u591a\u5185\u5bb9\u4e86~</div><div class="loading-box" id="loading"><i class="loading-gif"></i>\u6b63\u5728\u52a0\u8f7d...</div><div class="loading-box" id="loading-fail"><i class="loading-err"></i>\u52a0\u8f7d\u5931\u8d25\uff0c<a href="javascript:void(0);" id="reload">\u70b9\u51fb\u91cd\u65b0\u52a0\u8f7d</a></div></div><div class="c-main-right js-content-right" id="card-news-right" style="display: none;"><div class="r-tit"><a href="javascript:void(0);" uigs-id="news_hot-title" target="_blank">\u5b9e\u65f6\u70ed\u70b9&nbsp;<span>&gt;</span></a></div><ul class="hot-list" id="hot-list"></ul></div>'),
        k.append(x),
        i["default"] = g
}, function(t, i, n) {
    "use strict";
    //导航
    function o() { // l = $(a), l.on("click", function() { $(this).parent().children("span.cur").removeClass("cur"), c.children("div").hide(), u.show(), $(this).addClass("cur") }), l.on("click.setLogo", function() {
        //     $(".js-site-logo").each(function() {
        //         var t = $(this);
        //         t.attr("src", t.data("src"))
        //     }), l.off("click.setLogo")
        // }), l.hasClass("cur") && u.show()
    }
    Object.defineProperty(i, "__esModule", {
        "value": !0
    });
    // var r = { "categories": [{ "category": "\u70ed\u95e8\u63a8\u8350", "sites": [{ "text": "\u65b0\u6d6a\u5fae\u535a", "url": "http://www.weibo.com", "logo": "/web/index/images/site_logo/h_weibo.png" }, { "text": "\u6dd8\u5b9d\u7f51", "url": "http://www.taobao.com", "logo": "/web/index/images/site_logo/h_taobao.png" }, { "text": "\u7231\u5947\u827a", "url": "http://www.iqiyi.com", "logo": "/web/index/images/site_logo/h_iqiyi.png" }, { "text": "4399\u5c0f\u6e38\u620f", "url": "http://www.4399.com", "logo": "/web/index/images/site_logo/h_4399.png" }, { "text": "\u5fae\u4fe1", "url": "http://weixin.qq.com", "logo": "/web/index/images/site_logo/h_weixin.png" }, { "text": "\u641c\u72d0\u7f51", "url": "http://www.sohu.com", "logo": "/web/index/images/site_logo/h_sohu.png" }] }, { "category": "\u89c6\u9891\u5a31\u4e50", "sites": [{ "text": "\u817e\u8baf\u89c6\u9891", "url": "http://v.qq.com", "logo": "/web/index/images/site_logo/v_qq.png" }, { "text": "\u641c\u72d0\u89c6\u9891", "url": "http://tv.sohu.com", "logo": "/web/index/images/site_logo/v_sohu.png" }, { "text": "\u54d4\u54e9\u54d4\u54e9", "url": "http://www.bilibili.com", "logo": "/web/index/images/site_logo/v_bilibili.png" }, { "text": "\u4f18\u9177\u89c6\u9891", "url": "http://www.youku.com", "logo": "/web/index/images/site_logo/v_youku.png" }, { "text": "\u4e50\u89c6\u89c6\u9891", "url": "http://www.letv.com", "logo": "/web/index/images/site_logo/v_letv.png" }, { "text": "\u571f\u8c46\u89c6\u9891", "url": "http://www.tudou.com", "logo": "/web/index/images/site_logo/v_tudou.png" }] }, { "category": "\u65b0\u95fb\u8d44\u8baf", "sites": [{ "text": "\u65b0\u6d6a\u65b0\u95fb", "url": "http://news.sina.com.cn", "logo": "/web/index/images/site_logo/n_sina.png" }, { "text": "\u7f51\u6613\u65b0\u95fb", "url": "http://news.163.com", "logo": "/web/index/images/site_logo/n_163.png" }, { "text": "\u641c\u72d0\u65b0\u95fb", "url": "http://news.sohu.com", "logo": "/web/index/images/site_logo/n_sohu.png" }, { "text": "\u817e\u8baf\u65b0\u95fb", "url": "http://news.qq.com", "logo": "/web/index/images/site_logo/n_qq.png" }, { "text": "\u51e4\u51f0\u8d44\u8baf", "url": "http://news.ifeng.com", "logo": "/web/index/images/site_logo/n_ifeng.png" }, { "text": "\u65b0\u534e\u7f51", "url": "http://www.xinhuanet.com", "logo": "/web/index/images/site_logo/n_xinhua.png" }] }, { "category": "\u5728\u7ebf\u97f3\u4e50", "sites": [{ "text": "\u7f51\u6613\u4e91\u97f3\u4e50", "url": "http://music.163.com", "logo": "/web/index/images/site_logo/m_163.png" }, { "text": "QQ\u97f3\u4e50", "url": "http://y.qq.com", "logo": "/web/index/images/site_logo/m_qq.png" }, { "text": "\u867e\u7c73\u97f3\u4e50", "url": "http://www.xiami.com", "logo": "/web/index/images/site_logo/m_xiami.png" }, { "text": "\u8c46\u74e3\u7535\u53f0", "url": "http://douban.fm", "logo": "/web/index/images/site_logo/m_FM.png" }, { "text": "\u641c\u72d7\u97f3\u4e50", "url": "http://mp3.sogou.com", "logo": "/web/index/images/site_logo/m_sogou.png" }, { "text": "\u97f3\u60a6\u53f0", "url": "http://www.yinyuetai.com", "logo": "/web/index/images/site_logo/m_yinyuetai.png" }] }, { "category": "\u8d2d\u7269\u5927\u5168", "sites": [{ "text": "\u4eac\u4e1c", "url": "http://www.jd.com", "logo": "/web/index/images/site_logo/s_jd.png" }, { "text": "\u805a\u7f8e\u4f18\u54c1", "url": "http://www.jumei.com", "logo": "/web/index/images/site_logo/s_jumei.png" }, { "text": "\u552f\u54c1\u4f1a", "url": "http://www.vip.com", "logo": "/web/index/images/site_logo/s_vip.png" }, { "text": "1\u53f7\u5e97", "url": "http://www.yhd.com", "logo": "/web/index/images/site_logo/s_yhd.png" }, { "text": "\u82cf\u5b81\u6613\u8d2d", "url": "http://www.suning.com", "logo": "/web/index/images/site_logo/s_suning.png" }, { "text": "\u5929\u732b", "url": "http://www.tmall.com", "logo": "/web/index/images/site_logo/s_tmall.png" }] }, { "category": "\u751f\u6d3b\u65c5\u6e38", "sites": [{ "text": "12306", "url": "http://www.12306.cn", "logo": "/web/index/images/site_logo/l_12306.png" }, { "text": "\u53bb\u54ea\u513f", "url": "http://www.qunar.com", "logo": "/web/index/images/site_logo/l_qunar.png" }, { "text": "\u643a\u7a0b", "url": "http://www.ctrip.com", "logo": "/web/index/images/site_logo/l_ctrip.png" }, { "text": "\u9014\u725b", "url": "http://www.tuniu.com", "logo": "/web/index/images/site_logo/l_tuniu.png" }, { "text": "\u5927\u4f17\u70b9\u8bc4", "url": "http://www.dianping.com", "logo": "/web/index/images/site_logo/l_dianping.png" }, { "text": "\u641c\u623f", "url": "http://www.fang.com", "logo": "/web/index/images/site_logo/l_fang.png" }, { "text": "58\u540c\u57ce", "url": "http://www.58.com", "logo": "/web/index/images/site_logo/l_58.png" }, { "text": "\u9a74\u5988\u5988", "url": "http://www.lvmama.com/", "logo": "/web/index/images/site_logo/l_lvmama.png" }] }] },
    //     a = "#card-nav-tab",
    //     s = juicer('{@each categories as item,index}<div class="dh-tit">${item.category}</div><ul class="dh-list">{@each item.sites as site,subindex}<li><a href="${site.url}" uigs-id="card_nav-${index}-${subindex}" target="_blank" title="${site.text}"><img class="js-site-logo" data-src="${site.logo}" src="/web/index/images/loading.gif" width="16" height="16" alt="${site.text}">${site.text}</a></li>{@/each}</ul>{@/each}', r),
    //     c = $("#card-content"),
    //     l = void 0,
    //     u = $("<div/>");

    // u.css("display", "block"), 
    // u.html(s), 
    // c.append(u), 
    i["default"] = o
}, function(t, i, n) {
    "use strict";
    //设置的函数

    //判断是否启用cookie
    function o() {

        return document.cookie.indexOf("cookietest") > -1
    }

    //useful
    function r(t, i, n) {
        t.length && i.length && t.on("click", function() {
            var o = $(this);
            t.removeClass(n),
                o.addClass(n),
                i.val(o.data("value"));
            // 将排序方式写入cookies
            //(0, g.setCookie)("ranking-by", i.val(), "", "/", 25e11);
        })
    }

    function a(t, i) {
        if (t.length && i.length) {
            var n = function() {
                    t.removeClass("open-ul"),
                        s.off(c)
                },
                o = t.children("a"),
                r = t.find("ul a"),
                a = (new Date).getTime() * Math.random(),
                s = $(document),
                c = "click." + parseInt(a, 10);
            o.on("click", function() {
                    s.off(c),
                        t.addClass("open-ul"),
                        setTimeout(function() {
                            s.on(c, n)
                        }, 20)
                }),
                r.on("click", function() {
                    var t = $(this),
                        r = t.data("value");
                    o.html(t.html()).data("value", r),
                        i.val(r),
                        n()
                })
        }
    }

    function s() {
        var t = $(".js-open-type");
        $("#settings-number").html("\u6bcf\u9875\u663e\u793a10\u6761").data("value", 10),
            t.eq(0).click()
    }

    //useful
    function c() {
        // console.log($('#ranking-by'));
        var t = $("#ranking-by").val();
        // console.info(t);
        (0,
            g.setCookie)("ranking-by", t, "", "/", 25e11),
        $("#settings-save-layer").show(),
            setTimeout(function() {
                d(),
                    $("#settings-save-layer").hide()
            }, 750)
    }

    function l() {
        var t = (0,
                g.getCookie)("com_sohu_websearch_ITEM_PER_PAGE") || "10",
            i = "\u6bcf\u9875\u663e\u793a" + t + "\u6761";
        $("#settings-number").html(i).data("value", t)
    }

    //useful
    function u(t) {
        var i = $(document);
        if (t) {
            var n = function(e) {
                return e.preventDefault(), !1
            };
            i.on("mousewheel.prevent", n),
                i.on("scroll.prevent", n)
        } else
            i.off("mousewheel.prevent"),
            i.off("scroll.prevent")
    }

    function d(t, i) {
        var n = $("#settings-advanced"),
            r = $(document);
        t ? (u(!0),
            n.show().stop().animate({
                "top": 0,
                "opacity": 1
            }, 300, function() {
            console.info("点击设置");
                r.on("click.settings", p),
                    "function" == typeof i && i()
            })) : n.stop().animate({
            "top": -n.height(),
            "opacity": 0
        }, 200, function() {
            r.off("click.settings"),
                u(!1),
                $(this).hide(),
                "function" == typeof i && i()
        })
    }

    function p(e) {
        $("#settings-advanced").is($(e.target).parents("#settings-advanced")) || (uigsPB("outside-layer"),
            d())
    }

    function h(t) {
        var i = $("#advanced-search-form"),
            n = i.find('input[name="include"]').val(),
            o = i.find('input[name="located"]').val(),
            r = $.trim(i.find('input[name="sitequery"]').val()),
            a = $.trim(i.find('input[name="filetype"]').val()),
            s = i.children('input[name="fieldtitle"]'),
            c = i.children('input[name="fieldcontent"]'),
            l = i.children('input[name="fieldstripurl"]'),
            u = {
                "0": "",
                "1": "intitle:",
                "2": "",
                "3": "inurl:"
            };
        switch ("checkbox" !== n && (t = '"' + t.replace(/\s+/g, '" "') + '"'),
            o) {
            case "0":
                s.val(""),
                    c.val(""),
                    l.val("");
                break;
            case "1":
                t = u[1] + t,
                    s.val("on"),
                    c.val(""),
                    l.val("");
                break;
            case "2":
                s.val(""),
                    c.val("on"),
                    l.val("");
                break;
            case "3":
                t = u[3] + t,
                    s.val(""),
                    c.val(""),
                    l.val("on")
        }
        return r && (t += " site:" + r),
            a && (t += " filetype:" + a),
            t
    }

    function f() {
        var t = $("#settings-close"),
            i = $("#search-settings"),
            n = $("#advanced-search"),
            u = $(".js-settings-tab"),
            p = $(".js-settings-content"),
            f = $(".js-input-box"),
            w = window.uigsPB || function() {};
        (0,
            g.tabControl)({
            "tabs": u,
            "tabInfo": p,
            "activeClass": "cur"
        }),
        l(),
            r($(".js-open-type"), $("#settings-open-type"), "cur"),
            $(".js-as-radio").each(function() {
                var t = $(this);
                r(t.children("a"), t.children("input"), "cur")
            }),
            $(".js-as-select").each(function() {
                var t = $(this);
                a(t.find("dd"), t.find("input"))
            }),
            t.on("click", function() {
                d()
            }),
            i.on("click", function() {
                u.eq(0).click(),
                    d(!0)
            }),
            n.on("click", function() {
                u.eq(1).click(),
                    d(!0)
            }),
            f.find("input").on("focus", function() {
                $(this).parent().attr("class", "input-box active")
            }),
            f.find("input").on("blur", function() {
                var t = $(this),
                    i = t.parent();
                $.trim(t.val()) || "1" !== t.attr("must") ? i.attr("class", "input-box") : i.attr("class", "input-box err")
            }),
            f.on("mouseenter", function() {
                $(this).addClass("hover")
            }),
            f.on("mouseleave", function() {
                $(this).removeClass("hover")
            }),
            $("#advanced-search-form").on("submit", function() {
                var t = $("#advanced-search-form"),
                    i = $.trim(t.find('input[name="q"]').val()),
                    n = t.find('input[name="query"]');
                if (!i)
                    return $("#advanced-query-box").addClass("err"), !1;
                n.val(h(i))
            }),
            $("#settings-reset").on("click", s),
            $("#settings-save").on("click", c),
            $("#adv-search-btn").on("click", function() {
                w($(this).attr("uigs-id"))
            }),
            o() || $(".js-settings-mask").show()
    }
    Object.defineProperty(i, "__esModule", {
        "value": !0
    });
    var g = n(0);
    i["default"] = f
}]);