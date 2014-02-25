
        'use strict';
function t() {
    return function() {
    }
}
function ba(a) {
    return function(c) {
        this[a] = c
    }
}
function v(a) {
    return function() {
        return this[a]
    }
}
function w(a) {
    return function() {
        return a
    }
}
var y, ca, da, A, ea, fa, H, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, ta, ua, va, wa, M, xa, ya, za, Aa, Ba, Ca, Da, Ea, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(a) {
    return a.__proto__
} : function(a) {
    return a.constructor.prototype
});
(function() {
    function a(a, b, c, d) {
        this.set(a, b, c, d)
    }
    function c() {
        this.fd = this.ed = this.hd = this.gd = this.ud = this.td = this.ec = this.cc = 0
    }
    function b(a, b, c, d) {
        a < b ? c < d ? (n = a < c ? a : c, m = b > d ? b : d) : (n = a < d ? a : d, m = b > c ? b : c) : c < d ? (n = b < c ? b : c, m = a > d ? a : d) : (n = b < d ? b : d, m = a > c ? a : c)
    }
    function d() {
        this.fg = this.Jf = null;
        this.ik = 0;
        r ? this.Jf = new Set : this.fg = {};
        this.pi = [];
        this.Ii = !0
    }
    function e(a) {
        p[s++] = a
    }
    function g() {
        this.ac = this.sp = this.y = this.C = 0
    }
    function f(a) {
        this.kc = [];
        this.qn = this.sn = this.tn = this.rn = 0;
        this.Hn = null;
        this.Bm(a)
    }
    function h(a,
            b) {
        this.bz = a;
        this.az = b;
        this.cells = {}
    }
    function l(a, b, c) {
        var d;
        return u.length ? (d = u.pop(), d.PA = a, d.x = b, d.y = c, d) : new ca(a, b, c)
    }
    function k(a, b, c) {
        this.PA = a;
        this.x = b;
        this.y = c;
        this.tm = new da
    }
    A = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ea = function(a) {
        return"undefined" === typeof a
    };
    fa = function(a) {
        return"number" === typeof a
    };
    H = function(a) {
        return"string" === typeof a
    };
    ga = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    ha = function(a) {
        --a;
        for (var b = 1; 32 > b; b <<= 1)
            a |= a >> b;
        return a + 1
    };
    ia = function(a) {
        return 0 >
                a ? -a : a
    };
    ja = function(a, b) {
        return a < b ? a : b
    };
    ka = Math.PI;
    la = function(a) {
        return a + 0.5 | 0
    };
    ma = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    na = function(a) {
        var b = a | 0;
        return b === a ? b : b + 1
    };
    oa = function(a, b, c, d, e, f, g, u) {
        var h, m, x, l;
        a < c ? (m = a, h = c) : (m = c, h = a);
        e < g ? (l = e, x = g) : (l = g, x = e);
        if (h < l || m > x)
            return!1;
        b < d ? (m = b, h = d) : (m = d, h = b);
        f < u ? (l = f, x = u) : (l = u, x = f);
        if (h < l || m > x)
            return!1;
        h = e - a + g - c;
        m = f - b + u - d;
        a = c - a;
        b = d - b;
        e = g - e;
        f = u - f;
        u = ia(b * e - f * a);
        return ia(e * m - f * h) > u ? !1 : ia(a * m - b * h) <= u
    };
    a.prototype.set = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.right = c;
        this.bottom = d
    };
    a.prototype.copy = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    a.prototype.width = function() {
        return this.right - this.left
    };
    a.prototype.height = function() {
        return this.bottom - this.top
    };
    a.prototype.offset = function(a, b) {
        this.left += a;
        this.top += b;
        this.right += a;
        this.bottom += b;
        return this
    };
    a.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top =
                this.bottom, this.bottom = a)
    };
    a.prototype.WA = function(a) {
        return!(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    a.prototype.XA = function(a, b, c) {
        return!(a.right + b < this.left || a.bottom + c < this.top || a.left + b > this.right || a.top + c > this.bottom)
    };
    a.prototype.Re = function(a, b) {
        return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
    };
    a.prototype.Mz = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    pa = a;
    c.prototype.Am = function(a) {
        this.cc =
                a.left;
        this.ec = a.top;
        this.td = a.right;
        this.ud = a.top;
        this.gd = a.right;
        this.hd = a.bottom;
        this.ed = a.left;
        this.fd = a.bottom
    };
    c.prototype.sw = function(a, b) {
        if (0 === b)
            this.Am(a);
        else {
            var c = Math.sin(b), d = Math.cos(b), e = a.left * c, f = a.top * c, g = a.right * c, c = a.bottom * c, u = a.left * d, h = a.top * d, m = a.right * d, d = a.bottom * d;
            this.cc = u - f;
            this.ec = h + e;
            this.td = m - f;
            this.ud = h + g;
            this.gd = m - c;
            this.hd = d + g;
            this.ed = u - c;
            this.fd = d + e
        }
    };
    c.prototype.offset = function(a, b) {
        this.cc += a;
        this.ec += b;
        this.td += a;
        this.ud += b;
        this.gd += a;
        this.hd += b;
        this.ed +=
                a;
        this.fd += b;
        return this
    };
    var n = 0, m = 0;
    c.prototype.gu = function(a) {
        b(this.cc, this.td, this.gd, this.ed);
        a.left = n;
        a.right = m;
        b(this.ec, this.ud, this.hd, this.fd);
        a.top = n;
        a.bottom = m
    };
    c.prototype.Re = function(a, b) {
        var c = this.td - this.cc, d = this.ud - this.ec, e = this.gd - this.cc, f = this.hd - this.ec, g = a - this.cc, u = b - this.ec, h = c * c + d * d, m = c * e + d * f, d = c * g + d * u, x = e * e + f * f, l = e * g + f * u, k = 1 / (h * x - m * m), c = (x * d - m * l) * k, h = (h * l - m * d) * k;
        if (0 <= c && 0 < h && 1 > c + h)
            return!0;
        c = this.ed - this.cc;
        d = this.fd - this.ec;
        h = c * c + d * d;
        m = c * e + d * f;
        d = c * g + d * u;
        k = 1 / (h * x - m *
                m);
        c = (x * d - m * l) * k;
        h = (h * l - m * d) * k;
        return 0 <= c && 0 < h && 1 > c + h
    };
    c.prototype.Ih = function(a, b) {
        if (b)
            switch (a) {
                case 0:
                    return this.cc;
                case 1:
                    return this.td;
                case 2:
                    return this.gd;
                case 3:
                    return this.ed;
                case 4:
                    return this.cc;
                default:
                    return this.cc
            }
        else
            switch (a) {
                case 0:
                    return this.ec;
                case 1:
                    return this.ud;
                case 2:
                    return this.hd;
                case 3:
                    return this.fd;
                case 4:
                    return this.ec;
                default:
                    return this.ec
                }
    };
    c.prototype.bi = function() {
        return(this.cc + this.td + this.gd + this.ed) / 4
    };
    c.prototype.ci = function() {
        return(this.ec + this.ud +
                this.hd + this.fd) / 4
    };
    c.prototype.Wu = function(a) {
        var b = a.bi(), c = a.ci();
        if (this.Re(b, c))
            return!0;
        b = this.bi();
        c = this.ci();
        if (a.Re(b, c))
            return!0;
        var d, e, f, g, u, h, m, x;
        for (m = 0; 4 > m; m++)
            for (x = 0; 4 > x; x++)
                if (b = this.Ih(m, !0), c = this.Ih(m, !1), d = this.Ih(m + 1, !0), e = this.Ih(m + 1, !1), f = a.Ih(x, !0), g = a.Ih(x, !1), u = a.Ih(x + 1, !0), h = a.Ih(x + 1, !1), oa(b, c, d, e, f, g, u, h))
                    return!0;
        return!1
    };
    qa = c;
    ra = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    ta = function(a, b) {
        var c, d;
        b = ma(b);
        if (!(0 > b || b >= a.length))
            if (0 ===
                    b)
                a.shift();
            else if (b === a.length - 1)
                a.pop();
            else {
                c = b;
                for (d = a.length - 1; c < d; c++)
                    a[c] = a[c + 1];
                a.length = d
            }
    };
    ua = function(a, b) {
        a.length = b.length;
        var c, d;
        c = 0;
        for (d = b.length; c < d; c++)
            a[c] = b[c]
    };
    va = function(a, b) {
        a.push.apply(a, b)
    };
    wa = function(a, b) {
        var c = a.indexOf(b);
        -1 !== c && ta(a, c)
    };
    M = function(a) {
        return a / (180 / ka)
    };
    xa = function(a) {
        return a * (180 / ka)
    };
    ya = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    za = function(a) {
        a %= 2 * ka;
        0 > a && (a += 2 * ka);
        return a
    };
    Aa = function(a) {
        return ya(xa(a))
    };
    Ba = function(a) {
        return za(M(a))
    };
    Ca =
            function(a, b, c, d) {
                return Math.atan2(d - b, c - a)
            };
    Da = function(a, b) {
        if (a === b)
            return 0;
        var c = Math.sin(a), d = Math.cos(a), e = Math.sin(b), f = Math.cos(b), c = c * e + d * f;
        return 1 <= c ? 0 : -1 >= c ? ka : Math.acos(c)
    };
    Ea = function(a, b, c) {
        var d = Math.sin(a), e = Math.cos(a), f = Math.sin(b), g = Math.cos(b);
        return Math.acos(d * f + e * g) > c ? 0 < e * f - d * g ? za(a + c) : za(a - c) : za(b)
    };
    Ga = function(a, b) {
        var c = Math.sin(a), d = Math.cos(a), e = Math.sin(b), f = Math.cos(b);
        return 0 >= d * e - c * f
    };
    Ha = function(a, b, c, d) {
        a = c - a;
        b = d - b;
        return Math.sqrt(a * a + b * b)
    };
    Ia = function(a, b) {
        return!a !==
                !b
    };
    Ja = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return!0;
        return!1
    };
    Ka = function(a) {
        for (var b in a)
            a.hasOwnProperty(b) && delete a[b]
    };
    var q = +new Date;
    La = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now)
                return a.now();
            if ("undefined" !== typeof a.webkitNow)
                return a.webkitNow();
            if ("undefined" !== typeof a.mozNow)
                return a.mozNow();
            if ("undefined" !== typeof a.msNow)
                return a.msNow()
        }
        return Date.now() - q
    };
    var r = "undefined" !== typeof Set && "undefined" !==
            typeof Set.prototype.forEach;
    d.prototype.contains = function(a) {
        return r ? this.Jf.has(a) : this.fg.hasOwnProperty(a.toString())
    };
    d.prototype.add = function(a) {
        if (r)
            this.Jf.has(a) || (this.Jf.add(a), this.Ii = !1);
        else {
            var b = a.toString();
            this.fg.hasOwnProperty(b) || (this.fg[b] = a, this.ik++, this.Ii = !1)
        }
        return this
    };
    d.prototype.remove = function(a) {
        r ? this.Jf.has(a) && (this.Jf["delete"](a), this.Ii = !1) : (a = a.toString(), this.fg.hasOwnProperty(a) && (delete this.fg[a], this.ik--, this.Ii = !1));
        return this
    };
    d.prototype.clear = function() {
        r ?
                this.Jf.clear() : (this.fg = {}, this.ik = 0);
        this.pi.length = 0;
        this.Ii = !0;
        return this
    };
    d.prototype.Qh = function() {
        return r ? 0 === this.Jf.size : 0 === this.ik
    };
    d.prototype.count = function() {
        return r ? this.Jf.size : this.ik
    };
    var p = null, s = 0;
    d.prototype.Vw = function() {
        if (!this.Ii) {
            if (r)
                this.pi.length = this.Jf.size, p = this.pi, s = 0, this.Jf.forEach(e), p = null, s = 0;
            else {
                this.pi.length = this.ik;
                var a, b = 0;
                for (a in this.fg)
                    this.fg.hasOwnProperty(a) && (this.pi[b++] = this.fg[a])
            }
            this.Ii = !0
        }
    };
    d.prototype.zC = function() {
        this.Vw();
        return this.pi.slice(0)
    };
    d.prototype.oi = function() {
        this.Vw();
        return this.pi
    };
    da = d;
    g.prototype.add = function(a) {
        this.y = a - this.C;
        this.sp = this.ac + this.y;
        this.C = this.sp - this.ac - this.y;
        this.ac = this.sp
    };
    g.prototype.reset = function() {
        this.ac = this.sp = this.y = this.C = 0
    };
    Ma = g;
    Na = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    f.prototype.Bm = function(a) {
        this.ew = a;
        this.Je = a.length / 2;
        this.kc.length = a.length;
        this.zn = this.An = -1;
        this.iu = 0
    };
    f.prototype.$i = function() {
        return!this.ew.length
    };
    f.prototype.lb = function() {
        for (var a =
                this.kc, b = a[0], c = b, d = a[1], e = d, f, g, u = 1, h = this.Je; u < h; ++u)
            g = 2 * u, f = a[g], g = a[g + 1], f < b && (b = f), f > c && (c = f), g < d && (d = g), g > e && (e = g);
        this.rn = b;
        this.sn = c;
        this.tn = d;
        this.qn = e
    };
    f.prototype.Am = function(a, b, c) {
        this.kc.length = 8;
        this.Je = 4;
        var d = this.kc;
        d[0] = a.left - b;
        d[1] = a.top - c;
        d[2] = a.right - b;
        d[3] = a.top - c;
        d[4] = a.right - b;
        d[5] = a.bottom - c;
        d[6] = a.left - b;
        d[7] = a.bottom - c;
        this.An = a.right - a.left;
        this.zn = a.bottom - a.top;
        this.lb()
    };
    f.prototype.Ik = function(a, b, c, d, e) {
        this.kc.length = 8;
        this.Je = 4;
        var f = this.kc;
        f[0] = a.cc - b;
        f[1] =
                a.ec - c;
        f[2] = a.td - b;
        f[3] = a.ud - c;
        f[4] = a.gd - b;
        f[5] = a.hd - c;
        f[6] = a.ed - b;
        f[7] = a.fd - c;
        this.An = d;
        this.zn = e;
        this.lb()
    };
    f.prototype.rw = function(a) {
        this.Je = a.Je;
        ua(this.kc, a.kc);
        this.rn = a.rn;
        this.tn - a.tn;
        this.sn = a.sn;
        this.qn = a.qn
    };
    f.prototype.Hi = function(a, b, c) {
        if (this.An !== a || this.zn !== b || this.iu !== c) {
            this.An = a;
            this.zn = b;
            this.iu = c;
            var d, e, f, g, u, h = 0, m = 1, x = this.ew, l = this.kc;
            0 !== c && (h = Math.sin(c), m = Math.cos(c));
            c = 0;
            for (f = this.Je; c < f; c++)
                d = 2 * c, e = d + 1, g = x[d] * a, u = x[e] * b, l[d] = g * m - u * h, l[e] = u * m + g * h;
            this.lb()
        }
    };
    f.prototype.Re =
            function(a, b) {
                var c = this.kc;
                if (a === c[0] && b === c[1])
                    return!0;
                var d, e, f, g = this.Je, u = this.rn - 110, h = this.tn - 101, m = this.sn + 131, x = this.qn + 120, l, k, q = 0, n = 0;
                for (d = 0; d < g; d++)
                    e = 2 * d, f = 2 * ((d + 1) % g), l = c[e], e = c[e + 1], k = c[f], f = c[f + 1], oa(u, h, a, b, l, e, k, f) && q++, oa(m, x, a, b, l, e, k, f) && n++;
                return 1 === q % 2 || 1 === n % 2
            };
    f.prototype.Gl = function(a, b, c) {
        var d = a.kc, e = this.kc;
        if (this.Re(d[0] + b, d[1] + c) || a.Re(e[0] - b, e[1] - c))
            return!0;
        var f, g, u, h, m, x, l, k, q, n, r, p;
        f = 0;
        for (h = this.Je; f < h; f++)
            for (g = 2 * f, u = 2 * ((f + 1) % h), k = e[g], g = e[g + 1], q = e[u], n =
                    e[u + 1], u = 0, l = a.Je; u < l; u++)
                if (m = 2 * u, x = 2 * ((u + 1) % l), r = d[m] + b, m = d[m + 1] + c, p = d[x] + b, x = d[x + 1] + c, oa(k, g, q, n, r, m, p, x))
                    return!0;
        return!1
    };
    Oa = f;
    h.prototype.Rq = function(a, b, c) {
        var d;
        d = this.cells[a];
        return d ? (d = d[b]) ? d : c ? (d = l(this, a, b), this.cells[a][b] = d) : null : c ? (d = l(this, a, b), this.cells[a] = {}, this.cells[a][b] = d) : null
    };
    h.prototype.mn = function(a) {
        return ma(a / this.bz)
    };
    h.prototype.nn = function(a) {
        return ma(a / this.az)
    };
    h.prototype.update = function(a, b, c) {
        var d, e, f, g, h;
        if (b)
            for (d = b.left, e = b.right; d <= e; ++d)
                for (f = b.top,
                        g = b.bottom; f <= g; ++f)
                    if (!c || !c.Re(d, f))
                        if (h = this.Rq(d, f, !1))
                            h.remove(a), h.Qh() && (h.tm.clear(), 1E3 > u.length && u.push(h), this.cells[d][f] = null);
        if (c)
            for (d = c.left, e = c.right; d <= e; ++d)
                for (f = c.top, g = c.bottom; f <= g; ++f)
                    b && b.Re(d, f) || this.Rq(d, f, !0).VA(a)
    };
    h.prototype.gw = function(a, b) {
        var c, d, e, f, g, u;
        c = this.mn(a.left);
        e = this.nn(a.top);
        d = this.mn(a.right);
        for (g = this.nn(a.bottom); c <= d; ++c)
            for (f = e; f <= g; ++f)
                (u = this.Rq(c, f, !1)) && u.Az(b)
    };
    Ra = h;
    var u = [];
    k.prototype.Qh = function() {
        return this.tm.Qh()
    };
    k.prototype.VA =
            function(a) {
                this.tm.add(a)
            };
    k.prototype.remove = function(a) {
        this.tm.remove(a)
    };
    k.prototype.Az = function(a) {
        va(a, this.tm.oi())
    };
    ca = k;
    var x = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    Sa = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : x[a - 1]
    };
    Ta = function(a, b, c) {
        if (c)
            switch (a.qd = c.ONE, a.jd = c.ONE_MINUS_SRC_ALPHA, b) {
                case 1:
                    a.qd = c.ONE;
                    a.jd = c.ONE;
                    break;
                case 3:
                    a.qd = c.ONE;
                    a.jd = c.ZERO;
                    break;
                case 4:
                    a.qd = c.ONE_MINUS_DST_ALPHA;
                    a.jd =
                            c.ONE;
                    break;
                case 5:
                    a.qd = c.DST_ALPHA;
                    a.jd = c.ZERO;
                    break;
                case 6:
                    a.qd = c.ZERO;
                    a.jd = c.SRC_ALPHA;
                    break;
                case 7:
                    a.qd = c.ONE_MINUS_DST_ALPHA;
                    a.jd = c.ZERO;
                    break;
                case 8:
                    a.qd = c.ZERO;
                    a.jd = c.ONE_MINUS_SRC_ALPHA;
                    break;
                case 9:
                    a.qd = c.DST_ALPHA;
                    a.jd = c.ONE_MINUS_SRC_ALPHA;
                    break;
                case 10:
                    a.qd = c.ONE_MINUS_DST_ALPHA, a.jd = c.SRC_ALPHA
                }
    };
    Ua = function(a) {
        return la(1E6 * a) / 1E6
    };
    Va = function(a, b) {
        return"string" !== typeof a || "string" !== typeof b || a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
    }
})();
var Lb = "undefined" !== typeof Float32Array ? Float32Array : Array;
function Mb(a) {
    var c = new Lb(3);
    a && (c[0] = a[0], c[1] = a[1], c[2] = a[2]);
    return c
}
function Nb(a) {
    var c = new Lb(16);
    a && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]);
    return c
}
function Ob(a, c) {
    c[0] = a[0];
    c[1] = a[1];
    c[2] = a[2];
    c[3] = a[3];
    c[4] = a[4];
    c[5] = a[5];
    c[6] = a[6];
    c[7] = a[7];
    c[8] = a[8];
    c[9] = a[9];
    c[10] = a[10];
    c[11] = a[11];
    c[12] = a[12];
    c[13] = a[13];
    c[14] = a[14];
    c[15] = a[15]
}
function Pb(a, c) {
    var b = c[0], d = c[1];
    c = c[2];
    a[0] *= b;
    a[1] *= b;
    a[2] *= b;
    a[3] *= b;
    a[4] *= d;
    a[5] *= d;
    a[6] *= d;
    a[7] *= d;
    a[8] *= c;
    a[9] *= c;
    a[10] *= c;
    a[11] *= c
}
function Qb(a, c, b, d) {
    d || (d = Nb());
    var e, g, f, h, l, k, n, m, q = a[0], r = a[1];
    a = a[2];
    g = b[0];
    f = b[1];
    e = b[2];
    b = c[1];
    k = c[2];
    q === c[0] && r === b && a === k ? (a = d, a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1) : (b = q - c[0], k = r - c[1], n = a - c[2], m = 1 / Math.sqrt(b * b + k * k + n * n), b *= m, k *= m, n *= m, c = f * n - e * k, e = e * b - g * n, g = g * k - f * b, (m = Math.sqrt(c * c + e * e + g * g)) ? (m = 1 / m, c *= m, e *= m, g *= m) : g = e = c = 0, f = k * g - n * e, h = n * c - b * g, l = b * e - k * c, (m = Math.sqrt(f * f + h * h + l * l)) ? (m = 1 / m, f *= m, h *= m, l *= m) : l = h = f = 0,
            d[0] = c, d[1] = f, d[2] = b, d[3] = 0, d[4] = e, d[5] = h, d[6] = k, d[7] = 0, d[8] = g, d[9] = l, d[10] = n, d[11] = 0, d[12] = -(c * q + e * r + g * a), d[13] = -(f * q + h * r + l * a), d[14] = -(b * q + k * r + n * a), d[15] = 1)
}
(function() {
    function a(a) {
        this.oo = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.ju = Mb([0, 0, 100]);
        this.Av = Mb([0, 0, 0]);
        this.Rw = Mb([0, 1, 0]);
        this.gt = Mb([1, 1, 1]);
        this.Zr = Nb();
        this.cf = Nb();
        this.ov = Nb();
        this.Aq = Nb();
        this.Z = a;
        this.Su()
    }
    function c(a, b, c) {
        this.Z = a;
        this.Cm = b;
        this.name = c;
        this.Ye = a.getAttribLocation(b, "aPos");
        this.Wh = a.getAttribLocation(b, "aTex");
        this.yv = a.getUniformLocation(b, "matP");
        this.ok = a.getUniformLocation(b, "matMV");
        this.pk = a.getUniformLocation(b,
                "opacity");
        this.zv = a.getUniformLocation(b, "samplerFront");
        this.Wl = a.getUniformLocation(b, "samplerBack");
        this.ij = a.getUniformLocation(b, "destStart");
        this.hj = a.getUniformLocation(b, "destEnd");
        this.Hr = a.getUniformLocation(b, "seconds");
        this.Gr = a.getUniformLocation(b, "pixelWidth");
        this.Fr = a.getUniformLocation(b, "pixelHeight");
        this.Vl = a.getUniformLocation(b, "layerScale");
        this.Ul = a.getUniformLocation(b, "layerAngle");
        this.Xl = a.getUniformLocation(b, "viewOrigin");
        this.SA = !!(this.Gr || this.Fr || this.Hr || this.Wl ||
                this.ij || this.hj || this.Vl || this.Ul || this.Xl);
        this.pk && a.uniform1f(this.pk, 1);
        this.zv && a.uniform1i(this.zv, 0);
        this.Wl && a.uniform1i(this.Wl, 1);
        this.ij && a.uniform2f(this.ij, 0, 0);
        this.hj && a.uniform2f(this.hj, 1, 1);
        this.Vl && a.uniform1f(this.Vl, 1);
        this.Ul && a.uniform1f(this.Ul, 0);
        this.Xl && a.uniform2f(this.Xl, 0, 0);
        this.Ti = !1
    }
    function b(a, b) {
        this.type = a;
        this.ba = b;
        this.Z = b.Z;
        this.eg = this.hf = this.Uv = 0;
        this.kb = this.Lf = null;
        this.uw = []
    }
    a.prototype.Su = function() {
        var a = this.Z, b;
        this.pv = 1;
        this.ej = this.Uh = null;
        this.ru =
                1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.DEPTH_TEST);
        this.rv = a.ONE;
        this.lv = a.ONE_MINUS_SRC_ALPHA;
        this.ns = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.ns);
        this.Mm = Array(4);
        this.Gm = Array(4);
        for (b = 0; 4 > b; b++)
            this.Mm[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Mm[b]), this.Gm[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Gm[b]);
        this.Qg = 0;
        this.UA = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,
                this.UA);
        this.dt = new Float32Array(16E3);
        this.Ps = new Float32Array(16E3);
        this.VB = new Float32Array(32E3);
        for (var c = new Uint16Array(12E3), d = b = 0; 12E3 > b; )
            c[b++] = d, c[b++] = d + 1, c[b++] = d + 2, c[b++] = d, c[b++] = d + 2, c[b++] = d + 3, d += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW);
        this.os = this.Dg = 0;
        this.Dc = [];
        b = this.zq({src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"},
        "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", "<default>");
        this.Dc.push(b);
        b = this.zq({src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"}, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}",
                "<point>");
        this.Dc.push(b);
        for (var e in Rb)
            Rb.hasOwnProperty(e) && this.Dc.push(this.zq(Rb[e], "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", e));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.Kh = [];
        this.Lg = 0;
        this.be = !1;
        this.su = this.Ol = -1;
        this.wl = null;
        this.jA = a.createFramebuffer();
        this.lw =
                null;
        this.mi = Mb([0, 0, 0]);
        this.zg(0)
    };
    a.prototype.zq = function(a, b, d) {
        var e = this.Z, k = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(k, a.src);
        e.compileShader(k);
        if (!e.getShaderParameter(k, e.COMPILE_STATUS))
            return e.deleteShader(k), null;
        var n = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(n, b);
        e.compileShader(n);
        if (!e.getShaderParameter(n, e.COMPILE_STATUS))
            return e.deleteShader(k), e.deleteShader(n), null;
        b = e.createProgram();
        e.attachShader(b, k);
        e.attachShader(b, n);
        e.linkProgram(b);
        if (!e.getProgramParameter(b,
                e.LINK_STATUS))
            return e.deleteShader(k), e.deleteShader(n), e.deleteProgram(b), null;
        e.useProgram(b);
        e.deleteShader(k);
        e.deleteShader(n);
        d = new c(e, b, d);
        d.Gq = a.Gq || 0;
        d.Hq = a.Hq || 0;
        d.ou = !!a.ou;
        d.$t = !!a.$t;
        d.ma = a.ma || [];
        a = 0;
        for (k = d.ma.length; a < k; a++)
            d.ma[a][1] = e.getUniformLocation(b, d.ma[a][0]), e.uniform1f(d.ma[a][1], 0);
        return d
    };
    a.prototype.Uq = function(a) {
        var b, c;
        b = 0;
        for (c = this.Dc.length; b < c; b++)
            if (this.Dc[b].name === a)
                return b;
        return-1
    };
    a.prototype.dw = function(a, b, c) {
        var d = this.cf, e = this.Zr, n = [0, 0, 0, 0,
            0, 0, 0, 0];
        n[0] = d[0] * a + d[4] * b + d[12];
        n[1] = d[1] * a + d[5] * b + d[13];
        n[2] = d[2] * a + d[6] * b + d[14];
        n[3] = d[3] * a + d[7] * b + d[15];
        n[4] = e[0] * n[0] + e[4] * n[1] + e[8] * n[2] + e[12] * n[3];
        n[5] = e[1] * n[0] + e[5] * n[1] + e[9] * n[2] + e[13] * n[3];
        n[6] = e[2] * n[0] + e[6] * n[1] + e[10] * n[2] + e[14] * n[3];
        n[7] = -n[2];
        0 !== n[7] && (n[7] = 1 / n[7], n[4] *= n[7], n[5] *= n[7], n[6] *= n[7], c[0] = (0.5 * n[4] + 0.5) * this.width, c[1] = (0.5 * n[5] + 0.5) * this.height)
    };
    a.prototype.Hk = function(a, b, c) {
        if (this.width !== a || this.height !== b || c) {
            this.Nh();
            this.width = a;
            this.height = b;
            this.Z.viewport(0,
                    0, a, b);
            b = a / b;
            var d = this.Zr, e;
            e = 1 * Math.tan(45 * Math.PI / 360);
            b *= e;
            a = -b;
            c = -e;
            d || (d = Nb());
            var n = b - a, m = e - c;
            d[0] = 2 / n;
            d[1] = 0;
            d[2] = 0;
            d[3] = 0;
            d[4] = 0;
            d[5] = 2 / m;
            d[6] = 0;
            d[7] = 0;
            d[8] = (b + a) / n;
            d[9] = (e + c) / m;
            d[10] = -1001 / 999;
            d[11] = -1;
            d[12] = 0;
            d[13] = 0;
            d[14] = -2E3 / 999;
            d[15] = 0;
            Qb(this.ju, this.Av, this.Rw, this.cf);
            a = [0, 0];
            b = [0, 0];
            this.dw(0, 0, a);
            this.dw(1, 1, b);
            this.gt[0] = 1 / (b[0] - a[0]);
            this.gt[1] = -1 / (b[1] - a[1]);
            a = 0;
            for (b = this.Dc.length; a < b; a++)
                c = this.Dc[a], c.Ti = !1, c.yv && (this.Z.useProgram(c.Cm), this.Z.uniformMatrix4fv(c.yv, !1,
                        this.Zr));
            this.Z.useProgram(this.Dc[this.Ol].Cm);
            this.Z.bindTexture(this.Z.TEXTURE_2D, null);
            this.Z.activeTexture(this.Z.TEXTURE1);
            this.Z.bindTexture(this.Z.TEXTURE_2D, null);
            this.Z.activeTexture(this.Z.TEXTURE0);
            this.ej = this.Uh = null
        }
    };
    a.prototype.wg = function() {
        Qb(this.ju, this.Av, this.Rw, this.cf);
        Pb(this.cf, this.gt)
    };
    a.prototype.translate = function(a, b) {
        if (0 !== a || 0 !== b) {
            this.mi[0] = a;
            this.mi[1] = b;
            this.mi[2] = 0;
            var c = this.cf, d = this.mi, e = d[0], n = d[1], d = d[2];
            c[12] = c[0] * e + c[4] * n + c[8] * d + c[12];
            c[13] = c[1] * e + c[5] *
                    n + c[9] * d + c[13];
            c[14] = c[2] * e + c[6] * n + c[10] * d + c[14];
            c[15] = c[3] * e + c[7] * n + c[11] * d + c[15]
        }
    };
    a.prototype.scale = function(a, b) {
        if (1 !== a || 1 !== b)
            this.mi[0] = a, this.mi[1] = b, this.mi[2] = 1, Pb(this.cf, this.mi)
    };
    a.prototype.Cs = function(a) {
        if (0 !== a) {
            var b = this.cf, c, d = Math.sin(a);
            a = Math.cos(a);
            var e = b[0], n = b[1], m = b[2], q = b[3], r = b[4], p = b[5], s = b[6], u = b[7];
            c ? b !== c && (c[8] = b[8], c[9] = b[9], c[10] = b[10], c[11] = b[11], c[12] = b[12], c[13] = b[13], c[14] = b[14], c[15] = b[15]) : c = b;
            c[0] = e * a + r * d;
            c[1] = n * a + p * d;
            c[2] = m * a + s * d;
            c[3] = q * a + u * d;
            c[4] = e * -d +
                    r * a;
            c[5] = n * -d + p * a;
            c[6] = m * -d + s * a;
            c[7] = q * -d + u * a
        }
    };
    a.prototype.Cg = function() {
        for (var a = !1, b = 0; 16 > b; b++)
            if (this.ov[b] !== this.cf[b]) {
                a = !0;
                break
            }
        a && (a = this.If(), a.type = 5, a.kb ? Ob(this.cf, a.kb) : a.kb = Nb(this.cf), Ob(this.cf, this.ov), this.be = !1)
    };
    b.prototype.xz = function() {
        this.Z.bindTexture(this.Z.TEXTURE_2D, this.Lf)
    };
    b.prototype.yz = function() {
        var a = this.Z;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.Lf);
        a.activeTexture(a.TEXTURE0)
    };
    b.prototype.uz = function() {
        var a = this.Uv, b = this.ba;
        b.ru = a;
        b = b.wl;
        b.pk && this.Z.uniform1f(b.pk, a)
    };
    b.prototype.rz = function() {
        this.Z.drawElements(this.Z.TRIANGLES, this.eg, this.Z.UNSIGNED_SHORT, 2 * this.hf)
    };
    b.prototype.tz = function() {
        this.Z.blendFunc(this.hf, this.eg)
    };
    b.prototype.zz = function() {
        var a, b, c, d = this.ba.Dc, e = this.ba.su;
        a = 0;
        for (b = d.length; a < b; a++)
            c = d[a], a === e && c.ok ? (this.Z.uniformMatrix4fv(c.ok, !1, this.kb), c.Ti = !0) : c.Ti = !1;
        Ob(this.kb, this.ba.Aq)
    };
    b.prototype.sz = function() {
        var a = this.Z, b = this.ba;
        this.Lf ? (b.ej === this.Lf && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D,
                null), b.ej = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.jA), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.Lf, 0)) : (a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    b.prototype.mz = function() {
        var a = this.Z;
        0 === this.hf ? (a.clearColor(this.kb[0], this.kb[1], this.kb[2], this.kb[3]), a.clear(a.COLOR_BUFFER_BIT)) : (a.enable(a.SCISSOR_TEST), a.scissor(this.kb[0], this.kb[1], this.kb[2], this.kb[3]),
                a.clearColor(0, 0, 0, 0), a.clear(this.Z.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST))
    };
    b.prototype.qz = function() {
        var a = this.Z, b = this.ba, c = b.Dc[1];
        a.useProgram(c.Cm);
        !c.Ti && c.ok && (a.uniformMatrix4fv(c.ok, !1, b.Aq), c.Ti = !0);
        a.enableVertexAttribArray(c.Ye);
        a.bindBuffer(a.ARRAY_BUFFER, b.ns);
        a.vertexAttribPointer(c.Ye, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.hf / 4, this.eg);
        c = b.wl;
        a.useProgram(c.Cm);
        0 <= c.Ye && (a.enableVertexAttribArray(c.Ye), a.bindBuffer(a.ARRAY_BUFFER, b.Mm[b.Qg]), a.vertexAttribPointer(c.Ye,
                2, a.FLOAT, !1, 0, 0));
        0 <= c.Wh && (a.enableVertexAttribArray(c.Wh), a.bindBuffer(a.ARRAY_BUFFER, b.Gm[b.Qg]), a.vertexAttribPointer(c.Wh, 2, a.FLOAT, !1, 0, 0))
    };
    b.prototype.vz = function() {
        var a = this.Z, b = this.ba, c = b.Dc[this.hf];
        b.su = this.hf;
        b.wl = c;
        a.useProgram(c.Cm);
        !c.Ti && c.ok && (a.uniformMatrix4fv(c.ok, !1, b.Aq), c.Ti = !0);
        c.pk && a.uniform1f(c.pk, b.ru);
        0 <= c.Ye && (a.enableVertexAttribArray(c.Ye), a.bindBuffer(a.ARRAY_BUFFER, b.Mm[b.Qg]), a.vertexAttribPointer(c.Ye, 2, a.FLOAT, !1, 0, 0));
        0 <= c.Wh && (a.enableVertexAttribArray(c.Wh),
                a.bindBuffer(a.ARRAY_BUFFER, b.Gm[b.Qg]), a.vertexAttribPointer(c.Wh, 2, a.FLOAT, !1, 0, 0))
    };
    b.prototype.wz = function() {
        var a, b, c = this.ba.wl, d = this.Z;
        a = this.kb;
        c.Wl && this.ba.ej !== this.Lf && (d.activeTexture(d.TEXTURE1), d.bindTexture(d.TEXTURE_2D, this.Lf), this.ba.ej = this.Lf, d.activeTexture(d.TEXTURE0));
        c.Gr && d.uniform1f(c.Gr, a[0]);
        c.Fr && d.uniform1f(c.Fr, a[1]);
        c.ij && d.uniform2f(c.ij, a[2], a[3]);
        c.hj && d.uniform2f(c.hj, a[4], a[5]);
        c.Vl && d.uniform1f(c.Vl, a[6]);
        c.Ul && d.uniform1f(c.Ul, a[7]);
        c.Xl && d.uniform2f(c.Xl,
                a[8], a[9]);
        c.Hr && d.uniform1f(c.Hr, La() / 1E3);
        if (c.ma.length)
            for (a = 0, b = c.ma.length; a < b; a++)
                d.uniform1f(c.ma[a][1], this.uw[a])
    };
    a.prototype.If = function() {
        this.Lg === this.Kh.length && this.Kh.push(new b(0, this));
        return this.Kh[this.Lg++]
    };
    a.prototype.Nh = function() {
        if (0 !== this.Lg && !this.Z.isContextLost()) {
            var a = this.Z;
            0 < this.os && (a.bindBuffer(a.ARRAY_BUFFER, this.ns), a.bufferData(a.ARRAY_BUFFER, this.VB.subarray(0, this.os), a.STREAM_DRAW), b && 0 <= b.Ye && "<point>" === b.name && a.vertexAttribPointer(b.Ye, 4, a.FLOAT,
                    !1, 0, 0));
            if (0 < this.Dg) {
                var b = this.wl;
                a.bindBuffer(a.ARRAY_BUFFER, this.Mm[this.Qg]);
                a.bufferData(a.ARRAY_BUFFER, this.dt.subarray(0, this.Dg), a.STREAM_DRAW);
                b && 0 <= b.Ye && "<point>" !== b.name && a.vertexAttribPointer(b.Ye, 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.Gm[this.Qg]);
                a.bufferData(a.ARRAY_BUFFER, this.Ps.subarray(0, this.Dg), a.STREAM_DRAW);
                b && 0 <= b.Wh && "<point>" !== b.name && a.vertexAttribPointer(b.Wh, 2, a.FLOAT, !1, 0, 0)
            }
            for (var c, a = 0, b = this.Lg; a < b; a++)
                switch (c = this.Kh[a], c.type) {
                    case 1:
                        c.rz();
                        break;
                    case 2:
                        c.xz();
                        break;
                    case 3:
                        c.uz();
                        break;
                    case 4:
                        c.tz();
                        break;
                    case 5:
                        c.zz();
                        break;
                    case 6:
                        c.sz();
                        break;
                    case 7:
                        c.mz();
                        break;
                    case 8:
                        c.qz();
                        break;
                    case 9:
                        c.vz();
                        break;
                    case 10:
                        c.wz();
                        break;
                    case 11:
                        c.yz()
                }
            this.os = this.Dg = this.Lg = 0;
            this.be = !1;
            this.Qg++;
            4 <= this.Qg && (this.Qg = 0)
        }
    };
    a.prototype.Bj = function(a) {
        if (a !== this.pv) {
            var b = this.If();
            b.type = 3;
            this.pv = b.Uv = a;
            this.be = !1
        }
    };
    a.prototype.me = function(a) {
        if (a !== this.Uh) {
            var b = this.If();
            b.type = 2;
            this.Uh = b.Lf = a;
            this.be = !1
        }
    };
    a.prototype.gi = function(a, b) {
        if (a !== this.rv ||
                b !== this.lv) {
            var c = this.If();
            c.type = 4;
            c.hf = a;
            c.eg = b;
            this.rv = a;
            this.lv = b;
            this.be = !1
        }
    };
    a.prototype.qw = function() {
        this.gi(this.Z.ONE, this.Z.ONE_MINUS_SRC_ALPHA)
    };
    a.prototype.cp = function(a, b, c, d, e, n, m, q) {
        15992 <= this.Dg && this.Nh();
        var r = this.Dg, p = this.dt, s = this.Ps;
        if (this.be)
            this.Kh[this.Lg - 1].eg += 6;
        else {
            var u = this.If();
            u.type = 1;
            u.hf = 3 * (r / 4);
            u.eg = 6;
            this.be = !0
        }
        p[r] = a;
        s[r++] = 0;
        p[r] = b;
        s[r++] = 0;
        p[r] = c;
        s[r++] = 1;
        p[r] = d;
        s[r++] = 0;
        p[r] = e;
        s[r++] = 1;
        p[r] = n;
        s[r++] = 1;
        p[r] = m;
        s[r++] = 0;
        p[r] = q;
        s[r++] = 1;
        this.Dg = r
    };
    a.prototype.tg =
            function(a, b, c, d, e, n, m, q, r) {
                15992 <= this.Dg && this.Nh();
                var p = this.Dg, s = this.dt, u = this.Ps;
                if (this.be)
                    this.Kh[this.Lg - 1].eg += 6;
                else {
                    var x = this.If();
                    x.type = 1;
                    x.hf = 3 * (p / 4);
                    x.eg = 6;
                    this.be = !0
                }
                var x = r.left, z = r.top, E = r.right;
                r = r.bottom;
                s[p] = a;
                u[p++] = x;
                s[p] = b;
                u[p++] = z;
                s[p] = c;
                u[p++] = E;
                s[p] = d;
                u[p++] = z;
                s[p] = e;
                u[p++] = E;
                s[p] = n;
                u[p++] = r;
                s[p] = m;
                u[p++] = x;
                s[p] = q;
                u[p++] = r;
                this.Dg = p
            };
    a.prototype.zg = function(a) {
        if (this.Ol !== a) {
            if (!this.Dc[a]) {
                if (0 === this.Ol)
                    return;
                a = 0
            }
            var b = this.If();
            b.type = 9;
            this.Ol = b.hf = a;
            this.be = !1
        }
    };
    a.prototype.wm = function(a) {
        a = this.Dc[a];
        return!(!a.ij && !a.hj)
    };
    a.prototype.ts = function(a) {
        a = this.Dc[a];
        return!!(a.ij || a.hj || a.ou)
    };
    a.prototype.YB = function(a) {
        a = this.Dc[a];
        return 0 !== a.Gq || 0 !== a.Hq
    };
    a.prototype.xA = function(a) {
        return this.Dc[a].Gq
    };
    a.prototype.yA = function(a) {
        return this.Dc[a].Hq
    };
    a.prototype.zA = function(a, b) {
        return this.Dc[a].ma[b][2]
    };
    a.prototype.Zo = function(a) {
        return this.Dc[a].$t
    };
    a.prototype.Gk = function(a, b, c, d, e, n, m, q, r, p, s, u) {
        var x = this.Dc[this.Ol], z, E;
        if (x.SA || u.length) {
            z = this.If();
            z.type = 10;
            z.kb ? Ob(this.cf, z.kb) : z.kb = Nb();
            E = z.kb;
            E[0] = b;
            E[1] = c;
            E[2] = d;
            E[3] = e;
            E[4] = n;
            E[5] = m;
            E[6] = q;
            E[7] = r;
            E[8] = p;
            E[9] = s;
            z.Lf = x.Wl ? a : null;
            if (u.length)
                for (c = z.uw, c.length = u.length, a = 0, b = u.length; a < b; a++)
                    c[a] = u[a];
            this.be = !1
        }
    };
    a.prototype.clear = function(a, b, c, d) {
        var e = this.If();
        e.type = 7;
        e.hf = 0;
        e.kb || (e.kb = Nb());
        e.kb[0] = a;
        e.kb[1] = b;
        e.kb[2] = c;
        e.kb[3] = d;
        this.be = !1
    };
    a.prototype.clearRect = function(a, b, c, d) {
        var e = this.If();
        e.type = 7;
        e.hf = 1;
        e.kb || (e.kb = Nb());
        e.kb[0] = a;
        e.kb[1] = b;
        e.kb[2] = c;
        e.kb[3] = d;
        this.be = !1
    };
    a.prototype.XB = function() {
        this.Nh();
        this.Z.flush()
    };
    var d = [], e = {};
    a.prototype.Eo = function(a, b, c, l) {
        b = !!b;
        c = !!c;
        var k = a.src + "," + b + "," + c + (b ? ",undefined" : ""), n = null;
        if ("undefined" !== typeof a.src && e.hasOwnProperty(k))
            return n = e[k], n.yn++, n;
        this.Nh();
        var m = this.Z, q = ga(a.width) && ga(a.height), n = m.createTexture();
        m.bindTexture(m.TEXTURE_2D, n);
        m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var r = m.RGBA, p = m.RGBA, s = m.UNSIGNED_BYTE;
        if (l && !this.oo)
            switch (l) {
                case 1:
                    p = r = m.RGB;
                    break;
                case 2:
                    s = m.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case 3:
                    s = m.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case 4:
                    p = r = m.RGB, s = m.UNSIGNED_SHORT_5_6_5
            }
        !q && b ? (l = document.createElement("canvas"), l.width = ha(a.width), l.height = ha(a.height), l.getContext("2d").drawImage(a, 0, 0, a.width, a.height, 0, 0, l.width, l.height), m.texImage2D(m.TEXTURE_2D, 0, r, p, s, l)) : m.texImage2D(m.TEXTURE_2D, 0, r, p, s, a);
        b ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.REPEAT), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.REPEAT)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE),
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE));
        c ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.LINEAR), q ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.LINEAR_MIPMAP_LINEAR), m.generateMipmap(m.TEXTURE_2D)) : m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.LINEAR)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST));
        m.bindTexture(m.TEXTURE_2D, null);
        this.Uh = null;
        n.sl = a.width;
        n.rl = a.height;
        n.yn = 1;
        n.hu = k;
        d.push(n);
        return e[k] = n
    };
    a.prototype.Pg = function(a, b, c, e) {
        this.Nh();
        var k = this.Z;
        this.oo && (e = !1);
        var n = k.createTexture();
        k.bindTexture(k.TEXTURE_2D, n);
        k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, a, b, 0, k.RGBA, e ? k.UNSIGNED_SHORT_4_4_4_4 : k.UNSIGNED_BYTE, null);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, c ? k.LINEAR : k.NEAREST);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER,
                c ? k.LINEAR : k.NEAREST);
        k.bindTexture(k.TEXTURE_2D, null);
        this.Uh = null;
        n.sl = a;
        n.rl = b;
        d.push(n);
        return n
    };
    a.prototype.BC = function(a, b, c) {
        this.Nh();
        var d = this.Z;
        this.oo && (c = !1);
        d.bindTexture(d.TEXTURE_2D, b);
        d.pixelStorei(d.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, c ? d.UNSIGNED_SHORT_4_4_4_4 : d.UNSIGNED_BYTE, a);
        d.bindTexture(d.TEXTURE_2D, null);
        this.Uh = null
    };
    a.prototype.deleteTexture = function(a) {
        a && ("undefined" !== typeof a.yn && 1 < a.yn ? a.yn-- : (this.Nh(), a === this.Uh && (this.Z.bindTexture(this.Z.TEXTURE_2D,
                null), this.Uh = null), a === this.ej && (this.Z.activeTexture(this.Z.TEXTURE1), this.Z.bindTexture(this.Z.TEXTURE_2D, null), this.Z.activeTexture(this.Z.TEXTURE0), this.ej = null), wa(d, a), "undefined" !== typeof a.hu && delete e[a.hu], this.Z.deleteTexture(a)))
    };
    a.prototype.yg = function(a) {
        if (a !== this.lw) {
            var b = this.If();
            b.type = 6;
            this.lw = b.Lf = a;
            this.be = !1
        }
    };
    Wa = a
})();
(function() {
    function a(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.Yu = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk);
            this.$u = !this.Yu && "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap);
            this.Yi = !!a.dc;
            this.bB = "undefined" !== typeof window.AppMobi || this.Yi;
            if (this.Xg = !!window.c2cocoonjs)
                CocoonJS.App.onSuspended.addEventListener(function() {
                    b.setSuspended(!0)
                }),
                        CocoonJS.App.onActivated.addEventListener(function() {
                            b.setSuspended(!1)
                        });
            this.kd = this.Yi || this.Xg;
            this.av = /tizen/i.test(navigator.userAgent);
            this.Xu = /android/i.test(navigator.userAgent) && !this.av;
            this.oo = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
            this.kr = /iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent);
            this.dv = /ipad/i.test(navigator.userAgent);
            this.hB = this.kr || this.dv;
            this.iB = this.kr && /os\s6/i.test(navigator.userAgent);
            this.no = /chrome/i.test(navigator.userAgent) ||
                    /chromium/i.test(navigator.userAgent);
            this.$A = /amazonwebappplatform/i.test(navigator.userAgent);
            this.eB = /firefox/i.test(navigator.userAgent);
            this.gB = !this.no && /safari/i.test(navigator.userAgent);
            this.Sh = "undefined" !== typeof window.c2nodewebkit || /nodewebkit/i.test(navigator.userAgent);
            this.ir = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.bv = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.cB = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.aB = this.Xu && !this.no && !this.eB && !this.$A && !this.kd;
            this.devicePixelRatio = 1;
            this.Rh = this.$u || this.Yu || this.bB || this.Xg || this.Xu || this.hB || this.bv || this.cB || this.av;
            this.Rh || (this.Rh = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet)/i.test(navigator.userAgent));
            "undefined" === typeof cr_is_preview || this.Sh || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.Sh = !0);
            this.dB = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
            this.canvas = a;
            this.Bn = document.getElementById("c2canvasdiv");
            this.mb = this.ba = this.Z = null;
            this.Nq = "";
            this.Vn = !1;
            this.Rv = this.Sv = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return!1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return!1
            };
            this.Yi && (window.c2runtime = this);
            this.Sh && (window.cE = function(a) {
                a.preventDefault();
                return!1
            }, window.dE = function(a) {
                a.preventDefault();
                return!1
            }, require("nw.gui").App.clearCache());
            this.width = a.width;
            this.height =
                    a.height;
            this.Oa = this.width;
            this.Na = this.height;
            this.Jn = this.width;
            this.In = this.height;
            this.Ql = window.innerWidth;
            this.Pl = window.innerHeight;
            this.zb = !0;
            this.Kl = !1;
            Date.now || (Date.now = function() {
                return+new Date
            });
            this.plugins = [];
            this.types = {};
            this.aa = [];
            this.mc = [];
            this.mk = {};
            this.yf = [];
            this.Fq = {};
            this.Pi = [];
            this.Pk = [];
            this.zp = [];
            this.Py = [];
            this.Qy = [];
            this.gv = this.Bw = null;
            this.Yf = new da;
            this.br = !1;
            this.Yg = 0;
            this.dr = !1;
            this.Nd = [];
            this.ah = this.Dd = this.Co = this.Gs = "";
            this.Fm = this.zw = !1;
            this.xq = this.Yl = this.Lh =
                    this.Ca = 0;
            this.li = 1;
            this.bj = new Ma;
            this.wo = 0;
            this.Lv = !0;
            this.Vo = this.$n = this.Sn = this.Ke = this.Rl = this.Mq = 0;
            this.Ng = null;
            this.On = [];
            this.Eq = [];
            this.Qn = -1;
            this.Ir = [[]];
            this.Ws = this.Go = 0;
            this.bp(null);
            this.yl = this.Ov = this.rm = 0;
            this.rp = [];
            this.vp = this.ep = 0;
            this.aj = !0;
            this.Fo = 0;
            this.Jl = !1;
            this.mC = 0;
            this.QA = !1;
            this.rr = 0;
            this.gk = this.ws = !1;
            this.bs = new da;
            this.Qv = new da;
            this.fp = [];
            this.Kf = new Oa([]);
            this.Os = new Oa([]);
            this.Hh = [];
            this.pl = {};
            this.Uj = {};
            this.Qj = {};
            this.Ok = {};
            this.fu = {};
            this.xv = this.Ao = this.fe =
                    this.Be = this.wv = this.zo = this.sb = null;
            this.Nk = this.jr = !1;
            this.Oq = [null, null];
            this.Si = 0;
            this.wj = {};
            this.pp = this.nk = null;
            this.load();
            this.devicePixelRatio = (this.Zi = !this.kd && this.xC && !this.aB) ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
            this.bd();
            var c, d = this.kq && !(this.Sh || this.ir || this.bv);
            0 < this.ye && this.setSize(window.innerWidth, window.innerHeight, !0);
            try {
                !this.Jz || !this.Xg && this.kd || (c = {alpha: d, depth: !1, antialias: !1, failIfMajorPerformanceCaveat: !0},
                this.Z = a.getContext("webgl", c) || a.getContext("experimental-webgl", c))
            } catch (e) {
            }
            if (this.Z) {
                this.kd || (this.Xc = document.createElement("canvas"), jQuery(this.Xc).appendTo(this.canvas.parentNode), this.Xc.oncontextmenu = w(!1), this.Xc.onselectstart = w(!1), this.Xc.width = this.Jn, this.Xc.height = this.In, jQuery(this.Xc).css({width: this.Jn + "px", height: this.In + "px"}), this.$v(), this.ls = this.Xc.getContext("2d"));
                this.ba = new Wa(this.Z, this.Rh);
                this.ba.Hk(a.width, a.height);
                this.mb = null;
                this.canvas.addEventListener("webglcontextlost",
                        function(a) {
                            a.preventDefault();
                            b.RB();
                            console.log("[Construct 2] WebGL context lost");
                            window.cr_setSuspended(!0)
                        }, !1);
                this.canvas.addEventListener("webglcontextrestored", function() {
                    b.ba.Su();
                    b.ba.Hk(b.ba.width, b.ba.height, !0);
                    b.Be = null;
                    b.fe = null;
                    b.Oq[0] = null;
                    b.Oq[1] = null;
                    b.SB();
                    b.zb = !0;
                    console.log("[Construct 2] WebGL context restored");
                    window.cr_setSuspended(!1)
                }, !1);
                var f, m, g, h, l, k;
                a = 0;
                for (c = this.aa.length; a < c; a++)
                    for (m = this.aa[a], d = 0, f = m.ya.length; d < f; d++)
                        h = m.ya[d], h.Zc = this.ba.Uq(h.id), this.Nk =
                                this.Nk || this.ba.wm(h.Zc);
                a = 0;
                for (c = this.yf.length; a < c; a++) {
                    l = this.yf[a];
                    d = 0;
                    for (f = l.ya.length; d < f; d++)
                        h = l.ya[d], h.Zc = this.ba.Uq(h.id);
                    d = 0;
                    for (f = l.Ua.length; d < f; d++)
                        for (k = l.Ua[d], m = 0, g = k.ya.length; m < g; m++)
                            h = k.ya[m], h.Zc = this.ba.Uq(h.id), this.Nk = this.Nk || this.ba.wm(h.Zc)
                }
            } else {
                if (0 < this.ye && this.Yi) {
                    this.canvas = null;
                    document.oncontextmenu = w(!1);
                    document.onselectstart = w(!1);
                    this.mb = AppMobi.canvas.getContext("2d");
                    try {
                        this.mb.samplingMode = this.ab ? "smooth" : "sharp", this.mb.globalScale = 1, this.mb.HTML5CompatibilityMode =
                                !0, this.mb.imageSmoothingEnabled = this.ab
                    } catch (q) {
                    }
                    0 !== this.width && 0 !== this.height && (this.mb.width = this.width, this.mb.height = this.height)
                }
                this.mb || (c = this.Xg ? {antialias: !!this.ab, alpha: d} : {alpha: d}, this.mb = a.getContext("2d", c), this.mb.webkitImageSmoothingEnabled = this.ab, this.mb.mozImageSmoothingEnabled = this.ab, this.mb.msImageSmoothingEnabled = this.ab, this.mb.imageSmoothingEnabled = this.ab);
                this.ls = this.Xc = null
            }
            this.up = function() {
                b.sd()
            };
            window == window.top || this.kd || this.ir || (document.addEventListener("mousedown",
                    function() {
                        window.focus()
                    }, !0), document.addEventListener("touchstart", function() {
                window.focus()
            }, !0));
            "undefined" !== typeof cr_is_preview && (this.Xg && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (A("Reloading for continuous preview"), this.Co = "__c2_continuouspreview", this.Fm = !0), this.UB && !this.Rh && (jQuery(window).focus(function() {
                b.setSuspended(!1)
            }), jQuery(window).blur(function() {
                b.setSuspended(!0)
            })));
            0 === this.ye && this.Zi && 1 < this.devicePixelRatio &&
                    this.setSize(this.Oc, this.Nc, !0);
            this.Nw();
            this.go();
            this.ja = {}
        }
    }
    function c(a) {
        a.target.result.createObjectStore("saves", {keyPath: "slot"})
    }
    function b(a, b, d, e) {
        var f = indexedDB.open("_C2SaveStates");
        f.onupgradeneeded = c;
        f.onerror = e;
        f.onsuccess = function(c) {
            c = c.target.result;
            c.onerror = e;
            c.transaction(["saves"], "readwrite").objectStore("saves").put({slot: a, data: b}).onsuccess = d
        }
    }
    function d(a, b, d) {
        var e = indexedDB.open("_C2SaveStates");
        e.onupgradeneeded = c;
        e.onerror = d;
        e.onsuccess = function(c) {
            c = c.target.result;
            c.onerror = d;
            var e = c.transaction(["saves"]).objectStore("saves").get(a);
            e.onsuccess = function() {
                e.result ? b(e.result.data) : b(null)
            }
        }
    }
    function e() {
        A("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location += "?continuous"
    }
    function g(a) {
        var b, c = {};
        for (b in a)
            !a.hasOwnProperty(b) || a[b]instanceof da || a[b] && "undefined" !== typeof a[b].Wf || (c[b] = a[b]);
        return c
    }
    a.prototype.setSize = function(a, b, c) {
        var d =
                0, e = 0, f = 0, m = 0, m = 0, h = this.iB && this.gB && !navigator.standalone && !this.kd && !this.$u;
        h && (b += 60);
        if (this.Ql !== a || this.Pl !== b || c) {
            this.Ql = a;
            this.Pl = b;
            var g = this.ye, l = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Jl;
            if (l || 0 !== this.ye || c)
                l && 0 < this.Si && (g = this.Si), 4 <= g ? (c = this.Oc / this.Nc, a / b > c ? (f = b * c, 5 === g ? (m = f / this.Oc, 1 < m ? m = Math.floor(m) : 1 > m && (m = 1 / Math.ceil(1 / m)), f = this.Oc * m, m *= this.Nc, d = (a - f) / 2, e = (b - m) / 2, a = f, b = m) : (d = (a - f) / 2, a = f)) : (m = a / c, 5 ===
                        g ? (m /= this.Nc, 1 < m ? m = Math.floor(m) : 1 > m && (m = 1 / Math.ceil(1 / m)), f = this.Oc * m, m *= this.Nc, d = (a - f) / 2, e = (b - m) / 2, a = f) : e = (b - m) / 2, b = m), l && !this.Sh && (e = d = 0), d = Math.floor(d), e = Math.floor(e), a = Math.floor(a), b = Math.floor(b)) : this.Sh && this.Jl && 0 === this.Bu && (d = Math.floor((a - this.Oc) / 2), e = Math.floor((b - this.Nc) / 2), a = this.Oc, b = this.Nc), 2 > g && (this.ql = this.devicePixelRatio), this.Zi && this.dv && 1 < this.devicePixelRatio && (1024 <= a && (a = 1023), 1024 <= b && (b = 1023)), l = this.devicePixelRatio, this.Jn = a, this.In = b, this.width = Math.round(a *
                        l), this.height = Math.round(b * l), this.zb = !0, this.bx ? (this.Oa = this.width, this.Na = this.height, this.Ve = !0) : this.width < this.Oc && this.height < this.Nc || 1 === g ? (this.Oa = this.width, this.Na = this.height, this.Ve = !0) : (this.Oa = this.Oc, this.Na = this.Nc, this.Ve = !1, 2 === g ? (c = this.Oc / this.Nc, g = this.Ql / this.Pl, g < c ? this.Oa = this.Na * g : g > c && (this.Na = this.Oa / g)) : 3 === g && (c = this.Oc / this.Nc, g = this.Ql / this.Pl, g > c ? this.Oa = this.Na * g : g < c && (this.Na = this.Oa / g))), this.Bn && !this.kd && (jQuery(this.Bn).css({width: a + "px", height: b + "px", "margin-left": d,
                    "margin-top": e}), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({width: a + "px", height: b + "px"})), this.canvas && (this.canvas.width = Math.round(a * l), this.canvas.height = Math.round(b * l), this.Zi && jQuery(this.canvas).css({width: a + "px", height: b + "px"})), this.Xc && (this.Xc.width = a, this.Xc.height = b, jQuery(this.Xc).css({width: a + "px", height: b + "px"})), this.ba && this.ba.Hk(Math.round(a * l), Math.round(b * l)), this.Yi && this.mb && (this.mb.width = a, this.mb.height = b), this.mb && (this.mb.webkitImageSmoothingEnabled =
                        this.ab, this.mb.mozImageSmoothingEnabled = this.ab, this.mb.msImageSmoothingEnabled = this.ab, this.mb.imageSmoothingEnabled = this.ab), this.Nw(), h && window.setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 100)
        }
    };
    a.prototype.Nw = function() {
        if (this.Ty && 0 !== this.ks) {
            var a = "portrait";
            2 === this.ks && (a = "landscape");
            screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
        }
    };
    a.prototype.RB = function() {
        this.jr = !0;
        var a, b, c;
        a = 0;
        for (b = this.aa.length; a < b; a++)
            c = this.aa[a], c.Wo && c.Wo()
    };
    a.prototype.SB = function() {
        this.jr = !1;
        var a, b, c;
        a = 0;
        for (b = this.aa.length; a < b; a++)
            c = this.aa[a], c.hs && c.hs()
    };
    a.prototype.$v = function() {
        if (!this.kd) {
            var a = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Jl ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Xc).css(a)
        }
    };
    var f = window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    a.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.Kl)
            for (A("[Construct 2] Suspending"), this.Kl = !0, 0 !== this.ep && f && f(this.ep), 0 !== this.vp && clearTimeout(this.vp), a = 0, b = this.rp.length; a < b; a++)
                this.rp[a](!0);
        else if (!a && this.Kl) {
            A("[Construct 2] Resuming");
            this.Kl = !1;
            this.wo = La();
            this.Rl = La();
            a = this.Yl = this.$n = 0;
            for (b = this.rp.length; a < b; a++)
                this.rp[a](!1);
            this.sd()
        }
    };
    a.prototype.load =
            function() {
                var a = Sb();
                this.name = a[0];
                this.Au = a[1];
                this.ye = a[11];
                this.Bu = a[11];
                this.Oc = a[9];
                this.Nc = a[10];
                this.Vv = this.Oc / 2;
                this.Wv = this.Nc / 2;
                this.kd && (4 <= a[11] || 0 === a[11]) && (A("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Bu = this.ye = 3);
                this.bt = a[17];
                this.Tl = a[18];
                0 === this.Tl && (this.nk = new Image, this.nk.src = "loading-logo.png");
                this.rm = a[20];
                this.Ag = new N(this);
                var b, c, d, e, f, m, g, h, l;
                b = 0;
                for (c = a[2].length; b < c; b++)
                    g = a[2][b], Xa(g),
                            l = new g[0](this), l.Ms = g[1], l.Th = g[2], l.Mv = g[9], l.xa && l.xa(), this.plugins.push(l);
                a = Sb();
                b = 0;
                for (c = a[3].length; b < c; b++) {
                    g = a[3][b];
                    f = g[1];
                    l = null;
                    d = 0;
                    for (e = this.plugins.length; d < e; d++)
                        if (this.plugins[d]instanceof f) {
                            l = this.plugins[d];
                            break
                        }
                    var k = new l.eb(l);
                    k.name = g[0];
                    k.ra = g[2];
                    k.$q = g[3].slice(0);
                    k.AC = g[3].length;
                    k.Xy = g[4];
                    k.lA = g[5];
                    k.Pa = g[11];
                    k.ra ? (k.So = [], k.bg = this.yl++, k.Db = null) : (k.So = null, k.bg = -1, k.Db = []);
                    k.Tn = null;
                    k.$j = null;
                    k.wu = null;
                    k.xf = !1;
                    k.Md = null;
                    g[6] ? (k.Qs = g[6][0], k.Rs = g[6][1], k.Ss = g[6][2]) :
                            (k.Qs = null, k.Rs = 0, k.Ss = 0);
                    k.Zd = g[7] ? g[7] : null;
                    k.index = b;
                    k.G = [];
                    k.Mn = [];
                    k.ki = [new Ya(k)];
                    k.Rg = 0;
                    k.Zf = null;
                    k.iz = 0;
                    k.Kk = !0;
                    k.Ap = Za;
                    k.oA = $a;
                    k.wA = ab;
                    k.qb = bb;
                    k.ym = cb;
                    k.$o = db;
                    k.xj = eb;
                    k.bo = fb;
                    k.Qq = gb;
                    k.Tq = hb;
                    k.Vf = ib;
                    k.Hu = jb;
                    k.Dn = new Ra(this.Oc, this.Nc);
                    k.on = !0;
                    k.pn = !1;
                    k.ja = {};
                    k.toString = kb;
                    k.mc = [];
                    d = 0;
                    for (e = g[8].length; d < e; d++) {
                        h = g[8][d];
                        var q = h[1], n = null;
                        f = 0;
                        for (m = this.mc.length; f < m; f++)
                            if (this.mc[f]instanceof q) {
                                n = this.mc[f];
                                break
                            }
                        n || (n = new q(this), n.Uo = [], n.To = new da, n.xa && n.xa(), this.mc.push(n), Tb && n instanceof
                                Tb && (this.Bw = n), Ub && n instanceof Ub && (this.gv = n));
                        -1 === n.Uo.indexOf(k) && n.Uo.push(k);
                        f = new n.eb(n, k);
                        f.name = h[0];
                        f.Pa = h[2];
                        f.xa();
                        k.mc.push(f)
                    }
                    k.global = g[9];
                    k.cr = g[10];
                    k.ya = [];
                    d = 0;
                    for (e = g[12].length; d < e; d++)
                        k.ya.push({id: g[12][d][0], name: g[12][d][1], Zc: -1, Vc: !0, index: d});
                    k.kE = g[13];
                    this.bt && !k.ra && !k.cr && l.Th || k.xa();
                    k.name && (this.types[k.name] = k);
                    this.aa.push(k);
                    l.Ms && (d = new l.Ra(k), d.uid = this.rm++, d.fw = this.Ov++, d.Ui = 0, d.Dl = lb, d.toString = mb, d.W = g[14], d.xa(), k.G.push(d), this.wj[d.uid.toString()] =
                            d)
                }
                b = 0;
                for (c = a[4].length; b < c; b++)
                    for (f = a[4][b], m = this.aa[f[0]], d = 1, e = f.length; d < e; d++)
                        g = this.aa[f[d]], g.Db.push(m), m.So.push(g);
                b = 0;
                for (c = a[23].length; b < c; b++) {
                    f = a[23][b];
                    m = [];
                    d = 0;
                    for (e = f.length; d < e; d++)
                        m.push(this.aa[f[d]]);
                    d = 0;
                    for (e = m.length; d < e; d++)
                        m[d].xf = !0, m[d].Md = m
                }
                if (0 < this.yl)
                    for (b = 0, c = this.aa.length; b < c; b++)
                        if (g = this.aa[b], !g.ra && g.Db.length) {
                            g.Tn = Array(this.yl);
                            g.$j = Array(this.yl);
                            g.wu = Array(this.yl);
                            k = [];
                            d = n = q = h = 0;
                            for (e = g.Db.length; d < e; d++)
                                for (l = g.Db[d], g.Tn[l.bg] = h, h += l.AC, g.$j[l.bg] =
                                        q, q += l.Xy, g.wu[l.bg] = n, n += l.lA, f = 0, m = l.ya.length; f < m; f++)
                                    k.push(ra({}, l.ya[f]));
                            g.ya = k.concat(g.ya);
                            d = 0;
                            for (e = g.ya.length; d < e; d++)
                                g.ya[d].index = d
                        }
                b = 0;
                for (c = a[5].length; b < c; b++)
                    g = a[5][b], d = new nb(this, g), this.mk[d.name] = d, this.yf.push(d);
                b = 0;
                for (c = a[6].length; b < c; b++)
                    g = a[6][b], d = new ob(this, g), this.Fq[d.name] = d, this.Pi.push(d);
                b = 0;
                for (c = this.Pi.length; b < c; b++)
                    this.Pi[b].jc();
                b = 0;
                for (c = this.zp.length; b < c; b++)
                    this.zp[b].jc();
                this.zp.length = 0;
                this.qg = a[8];
                this.ql = 1;
                this.Jz = a[12];
                this.ab = a[13];
                this.kq =
                        a[14];
                this.xC = a[16];
                this.ks = a[19];
                this.Ty = 0 < this.ks;
                this.UB = a[21];
                this.Ve = this.bx = a[22];
                this.qp = Date.now()
            };
    var h = !1;
    a.prototype.ax = function(a) {
        a.onerror = function() {
            h = a.Zy = !0
        };
        this.Pk.push(a)
    };
    a.prototype.kA = function(a) {
        var b, c;
        b = 0;
        for (c = this.Pk.length; b < c; b++)
            if (this.Pk[b].ez === a)
                return this.Pk[b];
        return null
    };
    a.prototype.au = function() {
        var a = 0, b = 0, c = !0, d, e, f;
        d = 0;
        for (e = this.Pk.length; d < e; d++) {
            f = this.Pk[d];
            var g = f.nu;
            if (!g || 0 >= g)
                g = 5E4;
            a += g;
            !f.complete && !f.loaded || f.Zy ? c = !1 : b += g
        }
        this.yj = 0 == a ? 0 : b / a;
        return c
    };
    a.prototype.go = function() {
        if (this.mb || this.ba) {
            var a = this.mb || this.ls;
            this.Xc && this.$v();
            this.yj = 0;
            this.vv = -1;
            if (this.au())
                this.OA();
            else {
                var b = Date.now() - this.qp;
                if (a) {
                    var c = this.width, d = this.height, e = this.devicePixelRatio;
                    this.Xc && (c = this.Jn, d = this.In, e = 1);
                    if (3 !== this.Tl && 500 <= b && this.vv != this.yj) {
                        a.clearRect(0, 0, c, d);
                        var b = c / 2, d = d / 2, c = 0 === this.Tl && this.nk.complete, f = 40 * e, g = 0, m = 80 * e, k;
                        c && (m = this.nk.width * e, k = this.nk.height * e, f = m / 2, g = k / 2, a.drawImage(this.nk, ma(b - f), ma(d - g), m, k));
                        1 >= this.Tl ?
                                (b = ma(b - f) + 0.5, d = ma(d + (g + (c ? 12 * e : 0))) + 0.5, a.fillStyle = h ? "red" : "DodgerBlue", a.fillRect(b, d, Math.floor(m * this.yj), 6 * e), a.strokeStyle = "black", a.strokeRect(b, d, m, 6 * e), a.strokeStyle = "white", a.strokeRect(b - 1 * e, d - 1 * e, m + 2 * e, 8 * e)) : 2 === this.Tl && (a.font = "12pt Arial", a.fillStyle = h ? "#f00" : "#999", a.jE = "middle", e = Math.round(100 * this.yj) + "%", c = a.measureText ? a.measureText(e) : null, a.fillText(e, b - (c ? c.width : 0) / 2, d))
                    }
                    this.vv = this.yj
                }
                setTimeout(function(a) {
                    return function() {
                        a.go()
                    }
                }(this), 100)
            }
        }
    };
    a.prototype.OA = function() {
        this.Xc &&
                (this.canvas.parentNode.removeChild(this.Xc), this.Xc = this.ls = null);
        this.qp = Date.now();
        this.Rl = La();
        var a, b, c;
        if (this.bt)
            for (a = 0, b = this.aa.length; a < b; a++)
                c = this.aa[a], c.ra || c.cr || !c.rc.Th || c.xa();
        else
            this.aj = !1;
        a = 0;
        for (b = this.yf.length; a < b; a++)
            this.yf[a].fz();
        2 <= this.ye && (a = this.Oc / this.Nc, b = this.width / this.height, this.ql = 2 !== this.ye && b > a || 2 === this.ye && b < a ? this.height / this.Nc : this.width / this.Oc);
        this.Au ? this.mk[this.Au].Ns() : this.yf[0].Ns();
        this.bt || (this.Fo = 1, this.trigger(N.prototype.X.Et, null));
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (b = this.aa.length; a < b; a++)
            c = this.aa[a], c.QB && c.QB();
        this.sd();
        this.Yi && AppMobi.webview.execute("onGameReady();")
    };
    var l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    a.prototype.sd = function() {
        if (this.sb) {
            var a = La();
            if (this.QA && this.ws && 29 > a - this.rr)
                this.ws = !1, this.rr = a, l ? this.ep = l(this.up, this.canvas) :
                        this.vp = setTimeout(this.up, this.Rh ? 1 : 16);
            else {
                this.ws = !0;
                this.rr = a;
                var b = this.ye, c = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement;
                (c || this.Jl) && 0 < this.Si && (b = this.Si);
                if (0 < b && (!this.kr || window.self !== window.top)) {
                    var b = window.innerWidth, d = window.innerHeight;
                    this.Ql === b && this.Pl === d || this.setSize(b, d)
                }
                this.kd || (c ? (this.Vn || (this.Nq = jQuery(this.canvas).css("margin") || "0", this.Vn = !0), this.no || this.Sh || jQuery(this.canvas).css({"margin-left": "" +
                            Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px", "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"})) : this.Vn ? (this.no || this.Sh || jQuery(this.canvas).css("margin", this.Nq), this.Nq = "", this.Vn = !1, 0 === this.ye && this.setSize(Math.round(this.Sv / this.devicePixelRatio), Math.round(this.Rv / this.devicePixelRatio), !0)) : (this.Sv = this.width, this.Rv = this.height));
                this.aj && (c = this.au(), this.Fo = this.yj, c && (this.aj = !1, this.yj = 1, this.trigger(N.prototype.X.Et, null)));
                this.nB();
                !this.zb && !this.Xg || this.jr || this.Fm || (this.zb = !1, this.ba ? this.xe() : this.vf(), this.pp && (this.canvas && this.canvas.toDataURL && (this.canvas.toDataURL(this.pp[0], this.pp[1]), this.trigger(N.prototype.X.Nx, null)), this.pp = null));
                this.bE || (this.Ke++, this.Sn++, this.$n++);
                this.Yl += La() - a;
                this.Kl || (l ? this.ep = l(this.up, this.canvas) : this.vp = setTimeout(this.up, this.Rh ? 1 : 16))
            }
        }
    };
    a.prototype.nB = function() {
        var a, b, c, d, e, f, g, m, h;
        a = La();
        1E3 <= a - this.Rl && (this.Rl += 1E3, this.Mq = this.$n, this.$n = 0, this.xq = this.Yl,
                this.Yl = 0);
        this.Lv && (0 !== this.wo && (b = a - this.wo, 0 !== b || this.dB ? (this.Lh = b / 1E3, 0.5 < this.Lh ? this.Lh = 0 : 0.1 < this.Lh && (this.Lh = 0.1)) : (10 <= this.mE && (this.Lv = !1), this.Lh = 1 / 60)), this.wo = a);
        this.Ca = this.Lh * this.li;
        this.bj.add(this.Ca);
        a = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Jl;
        2 <= this.ye || a && 0 < this.Si ? (b = this.Oc / this.Nc, c = this.width / this.height, d = this.ye, a && 0 < this.Si && (d = this.Si), this.ql = 2 !== d && c > b || 2 === d && c < b ? this.height / this.Nc : this.width /
                this.Oc, this.sb && (this.sb.Hs(this.sb.scrollX), this.sb.Is(this.sb.scrollY))) : this.ql = this.Zi ? this.devicePixelRatio : 1;
        this.bd();
        this.Yg++;
        this.Ag.dC();
        this.Yg--;
        this.bd();
        this.Yg++;
        a = 0;
        for (b = this.aa.length; a < b; a++)
            if (g = this.aa[a], !g.ra && (g.mc.length || g.Db.length))
                for (c = 0, d = g.G.length; c < d; c++)
                    for (m = g.G[c], e = 0, f = m.Fa.length; e < f; e++)
                        m.Fa[e].sd();
        a = 0;
        for (b = this.aa.length; a < b; a++)
            if (g = this.aa[a], !g.ra && (g.mc.length || g.Db.length))
                for (c = 0, d = g.G.length; c < d; c++)
                    for (m = g.G[c], e = 0, f = m.Fa.length; e < f; e++)
                        h = m.Fa[e],
                                h.bw && h.bw();
        c = this.bs.oi();
        a = 0;
        for (b = c.length; a < b; a++)
            c[a].sd();
        this.Yg--;
        this.RA();
        for (a = 0; this.Ng && 10 > a++; )
            this.uu(this.Ng);
        a = 0;
        for (b = this.Pi.length; a < b; a++)
            this.Pi[a].Vq = !1;
        this.sb.Pn && this.sb.Pn.tc();
        this.fp.length = 0;
        this.Yg++;
        a = 0;
        for (b = this.aa.length; a < b; a++)
            if (g = this.aa[a], !g.ra && (g.mc.length || g.Db.length))
                for (c = 0, d = g.G.length; c < d; c++)
                    for (m = g.G[c], e = 0, f = m.Fa.length; e < f; e++)
                        h = m.Fa[e], h.Hm && h.Hm();
        c = this.Qv.oi();
        a = 0;
        for (b = c.length; a < b; a++)
            c[a].Hm();
        this.Yg--
    };
    a.prototype.uu = function(a) {
        var b =
                this.sb;
        this.sb.oC();
        var c, d, e, f, g, m, h;
        if (this.ba)
            for (c = 0, d = this.aa.length; c < d; c++)
                g = this.aa[c], g.ra || !g.Ys || g.global && 0 !== g.G.length || -1 !== a.Fl.indexOf(g) || g.Ys();
        b == a && (this.Ag.pe.length = 0);
        a.Ns();
        c = 0;
        for (d = this.aa.length; c < d; c++)
            if (g = this.aa[c], g.global || g.rc.Ms)
                for (a = 0, b = g.G.length; a < b; a++)
                    if (m = g.G[a], m.gs && m.gs(), m.Fa)
                        for (e = 0, f = m.Fa.length; e < f; e++)
                            h = m.Fa[e], h.gs && h.gs();
        this.zb = !0;
        this.bd()
    };
    a.prototype.Ts = function(a) {
        this.bs.add(a)
    };
    a.prototype.ck = function(a) {
        return a && -1 !== a.qm ? this.Lh * a.qm :
                this.Ca
    };
    a.prototype.vf = function() {
        this.sb.vf(this.mb);
        this.Yi && this.mb.present()
    };
    a.prototype.xe = function() {
        this.sb.xe(this.ba);
        this.ba.XB()
    };
    a.prototype.jq = function(a) {
        a && this.On.push(a)
    };
    a.prototype.kw = function(a) {
        wa(this.On, a)
    };
    a.prototype.dk = function(a) {
        return this.wj[a.toString()]
    };
    a.prototype.Ij = function(a) {
        var b, c;
        if (!this.Yf.contains(a)) {
            this.Yf.add(a);
            if (a.xf)
                for (b = 0, c = a.siblings.length; b < c; b++)
                    this.Ij(a.siblings[b]);
            this.br && this.Yf.pi.push(a);
            this.Yg++;
            this.trigger(Object.getPrototypeOf(a.type.rc).X.Rx,
                    a);
            this.Yg--
        }
    };
    a.prototype.bd = function() {
        var a, b, c, d, e, f, g, m, h, k;
        this.br = !0;
        d = 0;
        for (f = this.Nd.length; d < f; d++)
            for (a = this.Nd[d], b = a.type, b.G.push(a), e = 0, g = b.Db.length; e < g; e++)
                b.Db[e].G.push(a), b.Db[e].Kk = !0;
        this.Nd.length = 0;
        f = this.Yf.oi();
        for (d = 0; d < f.length; d++) {
            a = f[d];
            b = a.type;
            c = b.G;
            e = 0;
            for (g = this.On.length; e < g; e++)
                this.On[e](a);
            wa(c, a);
            0 === c.length && (b.pn = !1);
            a.Cn && b.Dn.update(a, a.Cn, null);
            a.O && (ta(a.O.G, a.Ae()), a.O.qe = !0);
            e = 0;
            for (g = b.Db.length; e < g; e++)
                wa(b.Db[e].G, a), b.Db[e].Kk = !0;
            if (a.Fa)
                for (e =
                        0, g = a.Fa.length; e < g; e++)
                    c = a.Fa[e], c.nh && c.nh(), c.Y.To.remove(a);
            this.bs.remove(a);
            this.Qv.remove(a);
            e = 0;
            for (g = this.Ag.pe.length; e < g; e++)
                if (h = this.Ag.pe[e], h.ne.hasOwnProperty(b.index) && wa(h.ne[b.index].Xi, a), !b.ra)
                    for (c = 0, m = b.Db.length; c < m; c++)
                        k = b.Db[c], h.ne.hasOwnProperty(k.index) && wa(h.ne[k.index].Xi, a);
            a.nh && a.nh();
            this.wj.hasOwnProperty(a.uid.toString()) && delete this.wj[a.uid.toString()];
            this.Vo--;
            64 > b.Mn.length && b.Mn.push(a);
            b.Kk = !0
        }
        this.Yf.Qh() || (this.zb = !0);
        this.Yf.clear();
        this.br = !1
    };
    var k =
    [];
    a.prototype.Li = function(a, b, c, d, e, f) {
        var g, m, h, l;
        if (!a)
            return null;
        var q = this.aa[a[1]], n = q.rc.Th;
        if (this.aj && n && !q.cr || n && !this.ba && 11 === a[0][11])
            return null;
        var r = b;
        n || (b = null);
        var p;
        q.Mn.length ? (p = q.Mn.pop(), p.le = !0, q.rc.Ra.call(p, q)) : (p = new q.rc.Ra(q), p.le = !1);
        p.uid = c && !f ? a[2] : this.rm++;
        this.wj[p.uid.toString()] = p;
        p.fw = this.Ov++;
        p.Ui = q.G.length;
        g = 0;
        for (m = this.Nd.length; g < m; ++g)
            this.Nd[g].type === q && p.Ui++;
        p.Dl = lb;
        h = a[3];
        if (p.le)
            Ka(p.ja);
        else {
            p.ja = {};
            if ("undefined" !== typeof cr_is_preview)
                for (p.Vu =
                [], p.Vu.length = h.length, g = 0, m = h.length; g < m; g++)
                    p.Vu[g] = h[g][1];
            p.Bc = [];
            p.Bc.length = h.length
        }
        g = 0;
        for (m = h.length; g < m; g++)
            p.Bc[g] = h[g][0];
        if (n) {
            var s = a[0];
            p.x = ea(d) ? s[0] : d;
            p.y = ea(e) ? s[1] : e;
            p.z = s[2];
            p.width = s[3];
            p.height = s[4];
            p.depth = s[5];
            p.Q = s[6];
            p.opacity = s[7];
            p.Pd = s[8];
            p.Qd = s[9];
            p.Kd = s[10];
            g = s[11];
            !this.ba && q.ya.length && (p.Kd = g);
            p.tl = Sa(p.Kd);
            this.Z && Ta(p, p.Kd, this.Z);
            if (p.le) {
                g = 0;
                for (m = s[12].length; g < m; g++)
                    for (h = 0, l = s[12][g].length; h < l; h++)
                        p.Vb[g][h] = s[12][g][h];
                p.Qb.set(0, 0, 0, 0);
                p.Cn.set(0, 0, -1,
                        -1);
                p.ob.Am(p.Qb);
                p.nq.length = 0
            } else {
                p.Vb = s[12].slice(0);
                g = 0;
                for (m = p.Vb.length; g < m; g++)
                    p.Vb[g] = s[12][g].slice(0);
                p.$a = [];
                p.Gh = [];
                p.Gh.length = q.ya.length;
                p.Qb = new pa(0, 0, 0, 0);
                p.Cn = new pa(0, 0, -1, -1);
                p.ob = new qa;
                p.nq = [];
                p.$ = pb;
                p.UD = qb;
                p.Re = rb;
                p.lb = sb;
                p.Ww = tb;
                p.Ae = ub
            }
            p.vh = !1;
            p.tC = 0;
            p.sC = 0;
            p.rC = null;
            14 === s.length && (p.vh = !0, p.tC = s[13][0], p.sC = s[13][1], p.rC = s[13][2]);
            g = 0;
            for (m = q.ya.length; g < m; g++)
                p.Gh[g] = !0;
            p.xh = vb;
            p.xh();
            p.Yw = !!p.$a.length;
            p.mq = !0;
            p.oq = !0;
            q.on = !0;
            p.visible = !0;
            p.qm = -1;
            p.O = b;
            p.Dj = b.G.length;
            "undefined" === typeof p.Ja && (p.Ja = null);
            this.zb = p.Og = !0
        }
        p.toString = mb;
        var L;
        g = k.length = 0;
        for (m = q.Db.length; g < m; g++)
            k.push.apply(k, q.Db[g].mc);
        k.push.apply(k, q.mc);
        if (p.le)
            for (g = 0, m = k.length; g < m; g++) {
                var W = k[g];
                L = p.Fa[g];
                L.le = !0;
                W.Y.Ra.call(L, W, p);
                s = a[4][g];
                h = 0;
                for (l = s.length; h < l; h++)
                    L.W[h] = s[h];
                L.xa();
                W.Y.To.add(p)
            }
        else
            for (p.Fa = [], g = 0, m = k.length; g < m; g++)
                W = k[g], L = new W.Y.Ra(W, p), L.le = !1, L.W = a[4][g].slice(0), L.xa(), p.Fa.push(L), W.Y.To.add(p);
        s = a[5];
        if (p.le)
            for (g = 0, m = s.length; g < m; g++)
                p.W[g] = s[g];
        else
            p.W =
                    s.slice(0);
        this.Nd.push(p);
        b && (b.G.push(p), 1 !== b.oh || 1 !== b.ph) && (q.pn = !0);
        this.Vo++;
        if (q.xf) {
            if (p.xf = !0, p.le ? p.siblings.length = 0 : p.siblings = [], !c && !f) {
                g = 0;
                for (m = q.Md.length; g < m; g++)
                    if (q.Md[g] !== q) {
                        if (!q.Md[g].Zf)
                            return null;
                        p.siblings.push(this.Li(q.Md[g].Zf, r, !1, n ? p.x : d, n ? p.y : e, !0))
                    }
                g = 0;
                for (m = p.siblings.length; g < m; g++)
                    for (p.siblings[g].siblings.push(p), h = 0; h < m; h++)
                        g !== h && p.siblings[g].siblings.push(p.siblings[h])
            }
        } else
            p.xf = !1, p.siblings = null;
        p.xa();
        g = 0;
        for (m = p.Fa.length; g < m; g++)
            p.Fa[g].aw && p.Fa[g].aw();
        return p
    };
    a.prototype.tA = function(a) {
        var b, c;
        b = 0;
        for (c = this.sb.Ua.length; b < c; b++) {
            var d = this.sb.Ua[b];
            if (Va(d.name, a))
                return d
        }
        return null
    };
    a.prototype.uA = function(a) {
        a = ma(a);
        0 > a && (a = 0);
        a >= this.sb.Ua.length && (a = this.sb.Ua.length - 1);
        return this.sb.Ua[a]
    };
    a.prototype.rq = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++)
            a[b].qb().Sb = !0
    };
    a.prototype.ym = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++)
            a[b].ym()
    };
    a.prototype.$o = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++)
            a[b].$o()
    };
    a.prototype.xj = function(a) {
        var b,
                c;
        b = 0;
        for (c = a.length; b < c; b++)
            a[b].xj()
    };
    a.prototype.Sw = function(a) {
        if (a.on) {
            var b, c, d = a.G;
            b = 0;
            for (c = d.length; b < c; ++b)
                d[b].Ww();
            d = this.Nd;
            b = 0;
            for (c = d.length; b < c; ++b)
                d[b].type === a && d[b].Ww();
            a.on = !1
        }
    };
    a.prototype.Du = function(a, b, c, d) {
        var e, f, g = a ? 1 !== a.oh || 1 !== a.ph : !1;
        if (b.ra)
            for (a = 0, e = b.So.length; a < e; ++a)
                f = b.So[a], g || f.pn ? va(d, f.G) : (this.Sw(f), f.Dn.gw(c, d));
        else
            g || b.pn ? va(d, b.G) : (this.Sw(b), b.Dn.gw(c, d))
    };
    a.prototype.Ku = function(a, b, c, d) {
        var e, f;
        e = 0;
        for (f = b.length; e < f; ++e)
            this.Du(a, b[e], c, d)
    };
    a.prototype.AA =
            function(a, b, c) {
                var d = this.Bw;
                d && this.Ku(a, d.Uo, b, c)
            };
    a.prototype.sA = function(a, b, c) {
        var d = this.gv;
        d && this.Ku(a, d.Uo, b, c)
    };
    a.prototype.kf = function(a, b) {
        if (!(a && b && a !== b && a.Og && b.Og))
            return!1;
        a.lb();
        b.lb();
        var c = a.O, d = b.O, e, f, g, m, h, k, l, q;
        if (c === d || c.oh === d.oh && d.ph === d.ph && c.scale === d.scale && c.Q === d.Q && c.Nm === d.Nm) {
            if (!a.Qb.WA(b.Qb) || !a.ob.Wu(b.ob) || a.vh && b.vh)
                return!1;
            if (a.vh)
                return this.Gw(a, b);
            if (b.vh)
                return this.Gw(b, a);
            l = a.Ja && !a.Ja.$i();
            e = b.Ja && !b.Ja.$i();
            if (!l && !e)
                return!0;
            l ? (a.Ja.Hi(a.width,
                    a.height, a.Q), l = a.Ja) : (this.Kf.Ik(a.ob, a.x, a.y, a.width, a.height), l = this.Kf);
            e ? (b.Ja.Hi(b.width, b.height, b.Q), q = b.Ja) : (this.Kf.Ik(b.ob, b.x, b.y, b.width, b.height), q = this.Kf);
            return l.Gl(q, b.x - a.x, b.y - a.y)
        }
        l = a.Ja && !a.Ja.$i();
        e = b.Ja && !b.Ja.$i();
        l ? (a.Ja.Hi(a.width, a.height, a.Q), this.Kf.rw(a.Ja)) : this.Kf.Ik(a.ob, a.x, a.y, a.width, a.height);
        l = this.Kf;
        e ? (b.Ja.Hi(b.width, b.height, b.Q), this.Os.rw(b.Ja)) : this.Os.Ik(b.ob, b.x, b.y, b.width, b.height);
        q = this.Os;
        e = 0;
        for (f = l.Je; e < f; e++)
            g = 2 * e, m = g + 1, h = l.kc[g], k = l.kc[m],
                    l.kc[g] = c.rb(h + a.x, k + a.y, !0), l.kc[m] = c.rb(h + a.x, k + a.y, !1);
        l.lb();
        e = 0;
        for (f = q.Je; e < f; e++)
            g = 2 * e, m = g + 1, h = q.kc[g], k = q.kc[m], q.kc[g] = d.rb(h + b.x, k + b.y, !0), q.kc[m] = d.rb(h + b.x, k + b.y, !1);
        q.lb();
        return l.Gl(q, 0, 0)
    };
    var n = new qa;
    new pa(0, 0, 0, 0);
    var m = [];
    a.prototype.Gw = function(a, b) {
        var c, d, e, f, g = b.Qb, h = a.x, l = a.y;
        a.YD(g, m);
        var k = b.Ja && !b.Ja.$i();
        c = 0;
        for (d = m.length; c < d; ++c)
            if (e = m[c], f = e.aC, g.XA(f, h, l) && (n.Am(f), n.offset(h, l), n.Wu(b.ob)))
                if (k)
                    if (b.Ja.Hi(b.width, b.height, b.Q), e.rg) {
                        if (e.rg.Gl(b.Ja, b.x - (h + f.left),
                                b.y - (l + f.top)))
                            return m.length = 0, !0
                    } else {
                        if (this.Kf.Ik(n, 0, 0, f.right - f.left, f.bottom - f.top), this.Kf.Gl(b.Ja, b.x, b.y))
                            return m.length = 0, !0
                    }
                else if (e.rg) {
                    if (this.Kf.Ik(b.ob, 0, 0, b.width, b.height), e.rg.Gl(this.Kf, -(h + f.left), -(l + f.top)))
                        return m.length = 0, !0
                } else
                    return m.length = 0, !0;
        m.length = 0;
        return!1
    };
    a.prototype.Ow = function(a, b) {
        if (!b)
            return!1;
        var c, d, e, f, g;
        c = 0;
        for (d = a.mc.length; c < d; c++)
            if (a.mc[c].Y instanceof b)
                return!0;
        if (!a.ra)
            for (c = 0, d = a.Db.length; c < d; c++)
                for (g = a.Db[c], e = 0, f = g.mc.length; e < f; e++)
                    if (g.mc[e].Y instanceof
                            b)
                        return!0;
        return!1
    };
    a.prototype.Pw = function(a) {
        return this.Ow(a, Kb.mD)
    };
    a.prototype.Xs = function(a) {
        return this.Ow(a, Kb.nD)
    };
    var q = [];
    a.prototype.oe = function(a) {
        var b, c, d;
        a.lb();
        this.AA(a.O, a.Qb, q);
        b = 0;
        for (c = q.length; b < c; ++b)
            if (d = q[b], d.ja.Cw && this.kf(a, d))
                return q.length = 0, d;
        q.length = 0;
        return null
    };
    var r = [];
    a.prototype.uh = function(a, b) {
        var c = null;
        b && (c = r, c.length = 0);
        a.lb();
        this.sA(a.O, a.Qb, q);
        var d, e, f;
        d = 0;
        for (e = q.length; d < e; ++d)
            if (f = q[d], f.ja.hv && this.kf(a, f))
                if (b)
                    c.push(f);
                else
                    return q.length =
                            0, f;
        q.length = 0;
        return c
    };
    a.prototype.sg = function(a, b, c, d, e, f) {
        d = d || 50;
        var g = a.x, m = a.y, h, l = null, k = null;
        for (h = 0; h < d; h++)
            if (a.x = g + b * h, a.y = m + c * h, a.$(), !this.kf(a, l) && ((l = this.oe(a)) && (k = l), !l && (e && (l = f ? this.kf(a, f) ? f : null : this.uh(a)) && (k = l), !l)))
                return k && this.us(a, b, c, k), !0;
        a.x = g;
        a.y = m;
        a.$();
        return!1
    };
    a.prototype.us = function(a, b, c, d) {
        var e = 2, f, g = !1;
        f = !1;
        for (var m = a.x, h = a.y; 16 >= e; )
            f = 1 / e, e *= 2, a.x += b * f * (g ? 1 : -1), a.y += c * f * (g ? 1 : -1), a.$(), this.kf(a, d) ? f = g = !0 : (f = g = !1, m = a.x, h = a.y);
        f && (a.x = m, a.y = h, a.$())
    };
    a.prototype.$B =
            function(a, b) {
                var c = ea(b) ? 100 : b, d = 0, e = a.x, f = a.y, g = 0, m = 0, h = 0, l = this.oe(a);
                if (!l)
                    return!0;
                for (; d <= c; ) {
                    switch (g) {
                        case 0:
                            m = 0;
                            h = -1;
                            d++;
                            break;
                        case 1:
                            m = 1;
                            h = -1;
                            break;
                        case 2:
                            m = 1;
                            h = 0;
                            break;
                        case 3:
                            h = m = 1;
                            break;
                        case 4:
                            m = 0;
                            h = 1;
                            break;
                        case 5:
                            m = -1;
                            h = 1;
                            break;
                        case 6:
                            m = -1;
                            h = 0;
                            break;
                        case 7:
                            h = m = -1
                    }
                    g = (g + 1) % 8;
                    a.x = ma(e + m * d);
                    a.y = ma(f + h * d);
                    a.$();
                    if (!this.kf(a, l) && (l = this.oe(a), !l))
                        return!0
                }
                a.x = e;
                a.y = f;
                a.$();
                return!1
            };
    a.prototype.Fk = function(a, b) {
        a.Og && b.Og && this.fp.push([a, b])
    };
    a.prototype.dz = function(a, b) {
        var c, d, e;
        c = 0;
        for (d =
                this.fp.length; c < d; c++)
            if (e = this.fp[c], e[0] == a && e[1] == b || e[0] == b && e[1] == a)
                return!0;
        return!1
    };
    var p = [], s = -1;
    a.prototype.trigger = function(a, b, c) {
        if (!this.sb)
            return!1;
        var d = this.sb.Pn;
        if (!d)
            return!1;
        s++;
        s === p.length ? p.push(new da) : p[s].clear();
        a = this.Kw(a, b, d, c);
        s--;
        return a
    };
    a.prototype.Kw = function(a, b, c, d) {
        var e = p[s];
        if (e.contains(c))
            return!1;
        e.add(c);
        var e = c.Qu.oi(), f = !1, g, m, h;
        g = 0;
        for (m = e.length; g < m; g++)
            e[g].ZA() && (h = this.Kw(a, b, e[g].El, d), f = f || h);
        if (b)
            for (h = this.Vs(a, b, b.type.name, c, d), f = f || h, g =
                    0, m = b.type.Db.length; g < m; g++)
                h = this.Vs(a, b, b.type.Db[g].name, c, d), f = f || h;
        else
            h = this.Vs(a, b, "system", c, d), f = f || h;
        return f
    };
    a.prototype.Vs = function(a, b, c, d, e) {
        var f, g = !1, m = !1, m = "undefined" !== typeof e, h = (m ? d.yu : d.Mw)[c];
        if (!h)
            return g;
        var l = null;
        d = 0;
        for (f = h.length; d < f; d++)
            if (h[d].method == a) {
                l = h[d].Rn;
                break
            }
        if (!l)
            return g;
        a = m ? l[e] : l;
        if (!a)
            return null;
        d = 0;
        for (f = a.length; d < f; d++)
            e = a[d][0], m = a[d][1], m = this.iA(b, c, e, m), g = g || m;
        return g
    };
    a.prototype.iA = function(a, b, c, d) {
        var e, f, g = !1;
        this.Ws++;
        var m = this.Bd().Te;
        m && this.ym(m.hi);
        var h = 1 < this.Ws;
        this.ym(c.hi);
        h && this.ZB();
        var l = this.bp(c);
        l.Te = c;
        a && (e = this.types[b].qb(), e.Sb = !1, e.G.length = 1, e.G[0] = a, this.types[b].Vf());
        a = !0;
        if (c.parent) {
            b = l.Fw;
            for (e = c.parent; e; )
                b.push(e), e = e.parent;
            b.reverse();
            e = 0;
            for (f = b.length; e < f; e++)
                if (!b[e].fC()) {
                    a = !1;
                    break
                }
        }
        a && (this.Sn++, c.Ef ? c.eC(d) : c.tc(), g = g || l.fj);
        this.Yo();
        h && this.WB();
        this.xj(c.hi);
        m && this.xj(m.hi);
        0 !== this.Yg || 0 !== s || this.dr || this.Yf.Qh() && !this.Nd.length || this.bd();
        this.Ws--;
        return g
    };
    a.prototype.Eu = function() {
        var a =
                this.Bd();
        return a.Te.Rb[a.xc]
    };
    a.prototype.ZB = function() {
        this.Go++;
        this.Go >= this.Ir.length && this.Ir.push([])
    };
    a.prototype.WB = function() {
        this.Go--
    };
    a.prototype.Fu = function() {
        return this.Ir[this.Go]
    };
    a.prototype.bp = function(a) {
        this.Qn++;
        this.Qn >= this.Eq.length && this.Eq.push(new wb);
        var b = this.Bd();
        b.reset(a);
        return b
    };
    a.prototype.Yo = function() {
        this.Qn--
    };
    a.prototype.Bd = function() {
        return this.Eq[this.Qn]
    };
    a.prototype.Gu = function(a, b) {
        for (var c, d, e, f, g, m; b; ) {
            c = 0;
            for (d = b.jf.length; c < d; c++)
                if (m = b.jf[c],
                        m instanceof xb && Va(a, m.name))
                    return m;
            b = b.parent
        }
        c = 0;
        for (d = this.Pi.length; c < d; c++)
            for (g = this.Pi[c], e = 0, f = g.Oh.length; e < f; e++)
                if (m = g.Oh[e], m instanceof xb && Va(a, m.name))
                    return m;
        return null
    };
    a.prototype.Iu = function(a) {
        var b, c;
        b = 0;
        for (c = this.yf.length; b < c; b++)
            if (this.yf[b].Pa === a)
                return this.yf[b];
        return null
    };
    a.prototype.ho = function(a) {
        var b, c;
        b = 0;
        for (c = this.aa.length; b < c; b++)
            if (this.aa[b].Pa === a)
                return this.aa[b];
        return null
    };
    a.prototype.pA = function(a) {
        var b, c;
        b = 0;
        for (c = this.Hh.length; b < c; b++)
            if (this.Hh[b].Pa ===
                    a)
                return this.Hh[b];
        return null
    };
    a.prototype.RA = function() {
        var a = this, c = this.Gs, f = this.ah, g = this.Co, m = !1;
        this.zw && (m = !0, c = "__c2_continuouspreview", this.zw = !1);
        if (c.length) {
            this.bd();
            f = this.kC();
            if (window.indexedDB && !this.Xg)
                b(c, f, function() {
                    A("Saved state to IndexedDB storage (" + f.length + " bytes)");
                    a.ah = f;
                    a.trigger(N.prototype.X.Vp, null);
                    a.ah = "";
                    m && e()
                }, function(b) {
                    try {
                        localStorage.setItem("__c2save_" + c, f), A("Saved state to WebStorage (" + f.length + " bytes)"), a.ah = f, a.trigger(N.prototype.X.Vp, null),
                                a.ah = "", m && e()
                    } catch (d) {
                        A("Failed to save game state: " + b + "; " + d)
                    }
                });
            else
                try {
                    localStorage.setItem("__c2save_" + c, f), A("Saved state to WebStorage (" + f.length + " bytes)"), a.ah = f, this.trigger(N.prototype.X.Vp, null), a.ah = "", m && e()
                } catch (h) {
                    A("Error saving to WebStorage: " + h)
                }
            this.Dd = this.Co = this.Gs = ""
        }
        g.length && (window.indexedDB && !this.Xg ? d(g, function(b) {
            b ? (a.Dd = b, A("Loaded state from IndexedDB storage (" + a.Dd.length + " bytes)")) : (a.Dd = localStorage.getItem("__c2save_" + g) || "", A("Loaded state from WebStorage (" +
                    a.Dd.length + " bytes)"));
            a.Fm = !1;
            a.Dd.length || a.trigger(N.prototype.X.Up, null)
        }, function() {
            a.Dd = localStorage.getItem("__c2save_" + g) || "";
            A("Loaded state from WebStorage (" + a.Dd.length + " bytes)");
            a.Fm = !1;
            a.Dd.length || a.trigger(N.prototype.X.Up, null)
        }) : (this.Dd = localStorage.getItem("__c2save_" + g) || "", A("Loaded state from WebStorage (" + this.Dd.length + " bytes)"), this.Fm = !1, a.Dd.length || a.trigger(N.prototype.X.Up, null)), this.Gs = this.Co = "");
        this.Dd.length && (this.bd(), this.mB(this.Dd), this.ah = this.Dd, this.trigger(N.prototype.X.ay,
                null), this.Dd = this.ah = "")
    };
    a.prototype.kC = function() {
        var a, b, c, d, e, f, m, h = {c2save: !0, version: 1, rt: {time: this.bj.ac, timescale: this.li, tickcount: this.Ke, execcount: this.Sn, next_uid: this.rm, running_layout: this.sb.Pa, start_time_offset: Date.now() - this.qp}, types: {}, layouts: {}, events: {groups: {}, cnds: {}, acts: {}, vars: {}}};
        a = 0;
        for (b = this.aa.length; a < b; a++)
            if (e = this.aa[a], !e.ra && !this.Pw(e)) {
                f = {instances: []};
                Ja(e.ja) && (f.ex = g(e.ja));
                c = 0;
                for (d = e.G.length; c < d; c++)
                    f.instances.push(this.Fs(e.G[c]));
                h.types[e.Pa.toString()] =
                f
            }
        a = 0;
        for (b = this.yf.length; a < b; a++)
            c = this.yf[a], h.layouts[c.Pa.toString()] = c.Yc();
        d = h.events.groups;
        a = 0;
        for (b = this.Hh.length; a < b; a++)
            c = this.Hh[a], d[c.Pa.toString()] = !!this.pl[c.ek];
        b = h.events.cnds;
        for (m in this.Uj)
            this.Uj.hasOwnProperty(m) && (a = this.Uj[m], Ja(a.ja) && (b[m] = {ex: g(a.ja)}));
        b = h.events.acts;
        for (m in this.Qj)
            this.Qj.hasOwnProperty(m) && (a = this.Qj[m], Ja(a.ja) && (b[m] = {ex: a.ja}));
        b = h.events.vars;
        for (m in this.Ok)
            this.Ok.hasOwnProperty(m) && (a = this.Ok[m], a.po || a.parent && !a.Ll || (b[m] = a.data));
        h.system =
                this.Ag.Yc();
        return JSON.stringify(h)
    };
    a.prototype.iw = function() {
        var a, b, c, d, e, f;
        this.wj = {};
        a = 0;
        for (b = this.aa.length; a < b; a++)
            if (c = this.aa[a], !c.ra)
                for (d = 0, e = c.G.length; d < e; d++)
                    f = c.G[d], this.wj[f.uid.toString()] = f
    };
    a.prototype.mB = function(a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            var b = a.rt;
            this.bj.reset();
            this.bj.ac = b.time;
            this.li = b.timescale;
            this.Ke = b.tickcount;
            this.qp = Date.now() - b.start_time_offset;
            var c = b.running_layout;
            if (c !== this.sb.Pa)
                if (c = this.Iu(c))
                    this.uu(c);
                else
                    return;
            var d, e, f, g,
                    m, h, l;
            h = a.types;
            for (e in h)
                if (h.hasOwnProperty(e) && (g = this.ho(parseInt(e, 10))) && !g.ra && !this.Pw(g)) {
                    h[e].ex ? g.ja = h[e].ex : Ka(g.ja);
                    m = g.G;
                    f = h[e].instances;
                    c = 0;
                    for (d = ja(m.length, f.length); c < d; c++)
                        this.Do(m[c], f[c]);
                    c = f.length;
                    for (d = m.length; c < d; c++)
                        this.Ij(m[c]);
                    c = m.length;
                    for (d = f.length; c < d; c++) {
                        m = null;
                        if (g.rc.Th && (m = this.sb.fo(f[c].w.l), !m))
                            continue;
                        m = this.Li(g.Zf, m, !1, 0, 0, !0);
                        this.Do(m, f[c])
                    }
                    g.Kk = !0
                }
            this.bd();
            this.iw();
            d = a.layouts;
            for (e in d)
                d.hasOwnProperty(e) && (c = this.Iu(parseInt(e, 10))) && c.Cd(d[e]);
            d = a.events.groups;
            for (e in d)
                d.hasOwnProperty(e) && (c = this.pA(parseInt(e, 10))) && (this.pl[c.ek] = d[e]);
            c = a.events.cnds;
            for (e in c)
                c.hasOwnProperty(e) && this.Uj.hasOwnProperty(e) && (this.Uj[e].ja = c[e].ex);
            c = a.events.acts;
            for (e in c)
                c.hasOwnProperty(e) && this.Qj.hasOwnProperty(e) && (this.Qj[e].ja = c[e].ex);
            c = a.events.vars;
            for (e in c)
                c.hasOwnProperty(e) && this.Ok.hasOwnProperty(e) && (this.Ok[e].data = c[e]);
            this.rm = b.next_uid;
            this.Ag.Cd(a.system);
            c = 0;
            for (d = this.aa.length; c < d; c++)
                if (g = this.aa[c], !g.ra)
                    for (e = 0, a =
                            g.G.length; e < a; e++) {
                        m = g.G[e];
                        if (g.xf)
                            for (h = m.Dl(), b = m.siblings.length = 0, f = g.Md.length; b < f; b++)
                                l = g.Md[b], g !== l && m.siblings.push(l.G[h]);
                        m.Tf && m.Tf();
                        if (m.Fa)
                            for (b = 0, f = m.Fa.length; b < f; b++)
                                h = m.Fa[b], h.Tf && h.Tf()
                    }
            this.zb = !0
        }
    };
    a.prototype.Fs = function(a, b) {
        var c, d, e, f, m;
        f = a.type;
        e = f.rc;
        var h = {};
        b ? h.c2 = !0 : h.uid = a.uid;
        Ja(a.ja) && (h.ex = g(a.ja));
        if (a.Bc && a.Bc.length)
            for (h.ivs = {}, c = 0, d = a.Bc.length; c < d; c++)
                h.ivs[a.type.$q[c].toString()] = a.Bc[c];
        if (e.Th) {
            e = {x: a.x, y: a.y, w: a.width, h: a.height, l: a.O.Pa, zi: a.Ae()};
            0 !== a.Q && (e.a = a.Q);
            1 !== a.opacity && (e.o = a.opacity);
            0.5 !== a.Pd && (e.hX = a.Pd);
            0.5 !== a.Qd && (e.hY = a.Qd);
            0 !== a.Kd && (e.bm = a.Kd);
            a.visible || (e.v = a.visible);
            a.Og || (e.ce = a.Og);
            -1 !== a.qm && (e.mts = a.qm);
            if (f.ya.length)
                for (e.fx = [], c = 0, d = f.ya.length; c < d; c++)
                    m = f.ya[c], e.fx.push({name: m.name, active: a.Gh[m.index], params: a.Vb[m.index]});
            h.w = e
        }
        if (a.Fa && a.Fa.length)
            for (h.behs = {}, c = 0, d = a.Fa.length; c < d; c++)
                f = a.Fa[c], f.Yc && (h.behs[f.type.Pa.toString()] = f.Yc());
        a.Yc && (h.data = a.Yc());
        return h
    };
    a.prototype.rA = function(a, b) {
        var c,
                d;
        c = 0;
        for (d = a.$q.length; c < d; c++)
            if (a.$q[c] === b)
                return c;
        return-1
    };
    a.prototype.nA = function(a, b) {
        var c, d;
        c = 0;
        for (d = a.Fa.length; c < d; c++)
            if (a.Fa[c].type.Pa === b)
                return c;
        return-1
    };
    a.prototype.Do = function(a, b, c) {
        var d, e, f, g, m;
        m = a.type;
        f = m.rc;
        if (c) {
            if (!b.c2)
                return
        } else
            a.uid = b.uid;
        b.ex ? a.ja = b.ex : Ka(a.ja);
        if (e = b.ivs)
            for (d in e)
                e.hasOwnProperty(d) && (c = this.rA(m, parseInt(d, 10)), 0 > c || c >= a.Bc.length || (a.Bc[c] = e[d]));
        if (f.Th) {
            f = b.w;
            a.O.Pa !== f.l && (c = a.O, a.O = this.sb.fo(f.l), a.O ? (a.O.G.push(a), a.O.qe = !0, wa(c.G, a),
                    c.qe = !0) : (a.O = c, this.Ij(a)));
            a.x = f.x;
            a.y = f.y;
            a.width = f.w;
            a.height = f.h;
            a.Dj = f.zi;
            a.Q = f.hasOwnProperty("a") ? f.a : 0;
            a.opacity = f.hasOwnProperty("o") ? f.o : 1;
            a.Pd = f.hasOwnProperty("hX") ? f.hX : 0.5;
            a.Qd = f.hasOwnProperty("hY") ? f.hY : 0.5;
            a.visible = f.hasOwnProperty("v") ? f.v : !0;
            a.Og = f.hasOwnProperty("ce") ? f.ce : !0;
            a.qm = f.hasOwnProperty("mts") ? f.mts : -1;
            a.Kd = f.hasOwnProperty("bm") ? f.bm : 0;
            a.tl = Sa(a.Kd);
            this.Z && Ta(a, a.Kd, this.Z);
            a.$();
            if (f.hasOwnProperty("fx"))
                for (c = 0, e = f.fx.length; c < e; c++)
                    g = m.Tq(f.fx[c].name), 0 > g || (a.Gh[g] =
                            f.fx[c].active, a.Vb[g] = f.fx[c].params);
            a.xh()
        }
        if (m = b.behs)
            for (d in m)
                m.hasOwnProperty(d) && (f = this.nA(a, parseInt(d, 10)), 0 > f || a.Fa[f].Cd(m[d]));
        b.data && a.Cd(b.data)
    };
    yb = function(b) {
        return new a(document.getElementById(b))
    };
    zb = function(b, c) {
        return new a({dc: !0, width: b, height: c})
    };
    window.cr_createRuntime = yb;
    window.cr_createDCRuntime = zb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var b = document.createElement("screencanvas") || document.createElement("canvas");
        b.iE = !0;
        document.body.appendChild(b);
        b = new a(b);
        window.c2runtime = b;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return b
    }
})();
window.cr_getC2Runtime = function() {
    var a = document.getElementById("c2canvas");
    return a ? a.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_sizeCanvas = function(a, c) {
    if (0 !== a && 0 !== c) {
        var b = window.cr_getC2Runtime();
        b && b.setSize(a, c)
    }
};
window.cr_setSuspended = function(a) {
    var c = window.cr_getC2Runtime();
    c && c.setSuspended(a)
};
(function() {
    function a(a, b) {
        this.j = a;
        this.Pn = null;
        this.scrollX = this.j.Oc / 2;
        this.scrollY = this.j.Nc / 2;
        this.scale = 1;
        this.Q = 0;
        this.zl = !0;
        this.name = b[0];
        this.width = b[1];
        this.height = b[2];
        this.Qw = b[3];
        this.vw = b[4];
        this.Pa = b[5];
        var c = b[6], d, l;
        this.Ua = [];
        this.Fl = [];
        d = 0;
        for (l = c.length; d < l; d++) {
            var k = new Ab(this, c[d]);
            k.Pv = d;
            this.Ua.push(k)
        }
        c = b[7];
        this.Wi = [];
        d = 0;
        for (l = c.length; d < l; d++) {
            var k = c[d], n = this.j.aa[k[1]];
            n.Zf || (n.Zf = k);
            this.Wi.push(k);
            -1 === this.Fl.indexOf(n) && this.Fl.push(n)
        }
        this.ya = [];
        this.$a = [];
        this.Vb = [];
        d = 0;
        for (l = b[8].length; d < l; d++)
            this.ya.push({id: b[8][d][0], name: b[8][d][1], Zc: -1, Vc: !0, index: d}), this.Vb.push(b[8][d][2].slice(0));
        this.xh();
        this.ei = new pa(0, 0, 1, 1);
        this.xs = new pa(0, 0, 1, 1);
        this.di = {}
    }
    function c(a, b) {
        this.jb = a;
        this.j = a.j;
        this.G = [];
        this.scale = 1;
        this.Q = 0;
        this.Mi = !1;
        this.wh = new pa(0, 0, 0, 0);
        this.Jw = new qa;
        this.Ud = this.Rc = this.Vd = this.Qc = 0;
        this.qe = !1;
        this.name = b[0];
        this.index = b[1];
        this.Pa = b[2];
        this.visible = b[3];
        this.Jh = b[4];
        this.Cj = b[5];
        this.oh = b[6];
        this.ph = b[7];
        this.opacity =
                b[8];
        this.Lq = b[9];
        this.Nm = b[10];
        this.Kd = b[11];
        this.Iz = b[12];
        this.tl = "source-over";
        this.jd = this.qd = 0;
        this.fi = !1;
        var c = b[13], d, l;
        this.fk = [];
        d = 0;
        for (l = c.length; d < l; d++) {
            var k = c[d], n = this.j.aa[k[1]];
            n.Zf || (n.Zf = k, n.iz = this.index);
            this.fk.push(k);
            -1 === this.jb.Fl.indexOf(n) && this.jb.Fl.push(n)
        }
        this.ya = [];
        this.$a = [];
        this.Vb = [];
        d = 0;
        for (l = b[14].length; d < l; d++)
            this.ya.push({id: b[14][d][0], name: b[14][d][1], Zc: -1, Vc: !0, index: d}), this.Vb.push(b[14][d][2].slice(0));
        this.xh();
        this.ei = new pa(0, 0, 1, 1);
        this.xs = new pa(0,
                0, 1, 1)
    }
    function b(a, b) {
        return a.Dj - b.Dj
    }
    a.prototype.jC = function(a) {
        var b = a.type.Pa.toString();
        this.di.hasOwnProperty(b) || (this.di[b] = []);
        this.di[b].push(this.j.Fs(a))
    };
    a.prototype.Nu = function() {
        var a = this.Ua[0];
        return!a.Cj && 1 === a.opacity && !a.Lq && a.visible
    };
    a.prototype.xh = function() {
        this.$a.length = 0;
        var a, b, c;
        a = 0;
        for (b = this.ya.length; a < b; a++)
            c = this.ya[a], c.Vc && this.$a.push(c)
    };
    a.prototype.Sq = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.ya.length; b < c; b++)
            if (d = this.ya[b], d.name === a)
                return d;
        return null
    };
    var d =
    [];
    a.prototype.Ns = function() {
        this.vw && (this.Pn = this.j.Fq[this.vw]);
        this.j.sb = this;
        this.scrollX = this.j.Oc / 2;
        this.scrollY = this.j.Nc / 2;
        var a, c, f, h, l, k, n;
        a = 0;
        for (f = this.j.aa.length; a < f; a++)
            if (c = this.j.aa[a], !c.ra)
                for (l = c.G, c = 0, h = l.length; c < h; c++)
                    if (k = l[c], k.O) {
                        var m = k.O.Pv;
                        m >= this.Ua.length && (m = this.Ua.length - 1);
                        k.O = this.Ua[m];
                        k.O.G.push(k);
                        k.O.qe = !0
                    }
        d.length = 0;
        this.Yy();
        a = 0;
        for (f = this.Ua.length; a < f; a++)
            k = this.Ua[a], k.gz(), k.Mi = !0, c = k.Sj(!0), h = k.Sj(!1), k.Mi = !1, this.j.qg && (c = c + 0.5 | 0, h = h + 0.5 | 0), k.Bs(c,
                    h, null);
        l = !1;
        if (!this.zl) {
            for (n in this.di)
                if (this.di.hasOwnProperty(n) && (c = this.j.ho(parseInt(n, 10))) && !c.ra && this.j.Xs(c)) {
                    h = this.di[n];
                    a = 0;
                    for (f = h.length; a < f; a++) {
                        k = null;
                        if (c.rc.Th && (k = this.fo(h[a].w.l), !k))
                            continue;
                        k = this.j.Li(c.Zf, k, !1, 0, 0, !0);
                        this.j.Do(k, h[a]);
                        l = !0;
                        d.push(k)
                    }
                    h.length = 0
                }
            a = 0;
            for (f = this.Ua.length; a < f; a++)
                this.Ua[a].G.sort(b), this.Ua[a].qe = !0
        }
        l && (this.j.bd(), this.j.iw());
        for (a = 0; a < d.length; a++)
            if (k = d[a], k.type.xf)
                for (f = k.Dl(), c = 0, h = k.type.Md.length; c < h; c++)
                    n = k.type.Md[c], k.type !==
                            n && (n.G.length > f ? k.siblings.push(n.G[f]) : n.Zf && (l = this.j.Li(n.Zf, k.O, !0, k.x, k.y, !0), this.j.bd(), n.Ap(), k.siblings.push(l), d.push(l)));
        a = 0;
        for (f = this.Wi.length; a < f; a++)
            this.j.Li(this.Wi[a], null, !0);
        this.j.Ng = null;
        this.j.bd();
        if (this.j.mb && !this.j.kd)
            for (a = 0, f = this.j.aa.length; a < f; a++)
                n = this.j.aa[a], !n.ra && n.G.length && n.qs && n.qs(this.j.mb);
        a = 0;
        for (f = d.length; a < f; a++)
            k = d[a], this.j.trigger(Object.getPrototypeOf(k.type.rc).X.Px, k);
        d.length = 0;
        this.j.trigger(N.prototype.X.Zx, null);
        this.zl = !1
    };
    a.prototype.fz =
            function() {
                var a, b, c, d, l;
                b = a = 0;
                for (c = this.Wi.length; a < c; a++)
                    d = this.Wi[a], l = this.j.aa[d[1]], l.global ? this.j.Li(d, null, !0) : (this.Wi[b] = d, b++);
                this.Wi.length = b
            };
    a.prototype.oC = function() {
        this.j.trigger(N.prototype.X.Yx, null);
        this.j.Ag.pe.length = 0;
        var a, b, c, d, l, k;
        a = 0;
        for (b = this.Ua.length; a < b; a++) {
            l = this.Ua[a].G;
            c = 0;
            for (d = l.length; c < d; c++)
                k = l[c], k.type.global || (this.j.Xs(k.type) && this.jC(k), this.j.Ij(k));
            this.j.bd();
            l.length = 0;
            this.Ua[a].qe = !0
        }
        a = 0;
        for (b = this.j.aa.length; a < b; a++)
            if (l = this.j.aa[a], !(l.global ||
                    l.rc.Th || l.rc.Ms || l.ra)) {
                c = 0;
                for (d = l.G.length; c < d; c++)
                    this.j.Ij(l.G[c]);
                this.j.bd()
            }
    };
    a.prototype.vf = function(a) {
        var b, c = a, d = !1, l = !this.j.Ve;
        l && (this.j.Ao || (this.j.Ao = document.createElement("canvas"), b = this.j.Ao, b.width = this.j.Oa, b.height = this.j.Na, this.j.xv = b.getContext("2d"), d = !0), b = this.j.Ao, c = this.j.xv, b.width !== this.j.Oa && (b.width = this.j.Oa, d = !0), b.height !== this.j.Na && (b.height = this.j.Na, d = !0), d && (c.webkitImageSmoothingEnabled = this.j.ab, c.mozImageSmoothingEnabled = this.j.ab, c.msImageSmoothingEnabled =
                this.j.ab, c.imageSmoothingEnabled = this.j.ab));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.j.kq && !this.Nu() && c.clearRect(0, 0, this.j.Oa, this.j.Na);
        var k, n, d = 0;
        for (k = this.Ua.length; d < k; d++)
            n = this.Ua[d], n.visible && 0 < n.opacity && 11 !== n.Kd && n.vf(c);
        l && a.drawImage(b, 0, 0, this.j.width, this.j.height)
    };
    a.prototype.xe = function(a) {
        var b = 0 < this.$a.length || this.j.Nk || !this.j.Ve;
        if (b) {
            this.j.fe || (this.j.fe = a.Pg(this.j.Oa, this.j.Na, this.j.ab));
            if (this.j.fe.sl !== this.j.Oa || this.j.fe.rl !== this.j.Na)
                a.deleteTexture(this.j.fe),
                        this.j.fe = a.Pg(this.j.Oa, this.j.Na, this.j.ab);
            a.yg(this.j.fe);
            this.j.Ve || a.Hk(this.j.Oa, this.j.Na)
        } else
            this.j.fe && (a.yg(null), a.deleteTexture(this.j.fe), this.j.fe = null);
        this.j.kq && !this.Nu() && a.clear(0, 0, 0, 0);
        var c, d;
        c = 0;
        for (d = this.Ua.length; c < d; c++)
            this.Ua[c].visible && 0 < this.Ua[c].opacity && this.Ua[c].xe(a);
        b && (0 === this.$a.length || 1 === this.$a.length && this.j.Ve ? (1 === this.$a.length ? (b = this.$a[0].index, a.zg(this.$a[0].Zc), a.Gk(null, 1 / this.j.Oa, 1 / this.j.Na, 0, 0, 1, 1, this.scale, this.Q, 0, 0, this.Vb[b]), a.Zo(this.$a[0].Zc) &&
                (this.j.zb = !0)) : a.zg(0), this.j.Ve || a.Hk(this.j.width, this.j.height), a.yg(null), a.Bj(1), a.me(this.j.fe), a.qw(), a.wg(), a.Cg(), b = this.j.width / 2, c = this.j.height / 2, a.cp(-b, c, b, c, b, -c, -b, -c), a.me(null)) : this.zs(a, null, null, null))
    };
    a.prototype.Cl = function() {
        return 0 < this.$a.length || this.j.Nk || !this.j.Ve ? this.j.fe : null
    };
    a.prototype.Ju = function() {
        var a = this.Ua[0].Od(), b, c, d;
        b = 1;
        for (c = this.Ua.length; b < c; b++)
            d = this.Ua[b], (0 !== d.oh || 0 !== d.ph) && d.Od() < a && (a = d.Od());
        return a
    };
    a.prototype.Hs = function(a) {
        if (!this.Qw) {
            var b =
                    this.j.Oa * (1 / this.Ju()) / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.j.zb = !0)
    };
    a.prototype.Is = function(a) {
        if (!this.Qw) {
            var b = this.j.Na * (1 / this.Ju()) / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.j.zb = !0)
    };
    a.prototype.Yy = function() {
        this.Hs(this.scrollX);
        this.Is(this.scrollY)
    };
    a.prototype.zs = function(a, b, c, d) {
        var l = c ? c.$a : b ? b.$a : this.$a, k = 1, n = 0, m = 0, q = 0;
        c ? (k = c.O.Od(), n = c.O.ze(), m = c.O.Qc, q = c.O.Rc) : b && (k = b.Od(), n = b.ze(), m =
                b.Qc, q = b.Rc);
        var r = this.j.Oq, p, s, u, x, z = 0, E = 1, G, F = this.j.Oa, C = this.j.Na, B = F / 2, K = C / 2, J = b ? b.ei : this.ei, D = b ? b.xs : this.xs, I = 0, O = 0, Q = 0, aa = 0, L = F, W = F, T = C, Fa = C, sa = u = 0, Pa = c ? c.O.ze() : 0;
        if (c) {
            p = 0;
            for (s = l.length; p < s; p++)
                u += a.xA(l[p].Zc), sa += a.yA(l[p].Zc);
            x = c.Qb;
            I = b.rb(x.left, x.top, !0, !0);
            Q = b.rb(x.left, x.top, !1, !0);
            L = b.rb(x.right, x.bottom, !0, !0);
            T = b.rb(x.right, x.bottom, !1, !0);
            0 !== Pa && (p = b.rb(x.right, x.top, !0, !0), s = b.rb(x.right, x.top, !1, !0), O = b.rb(x.left, x.bottom, !0, !0), aa = b.rb(x.left, x.bottom, !1, !0), x = Math.min(I,
                    L, p, O), L = Math.max(I, L, p, O), I = x, x = Math.min(Q, T, s, aa), T = Math.max(Q, T, s, aa), Q = x);
            I -= u;
            Q -= sa;
            L += u;
            T += sa;
            D.left = I / F;
            D.top = 1 - Q / C;
            D.right = L / F;
            D.bottom = 1 - T / C;
            O = I = ma(I);
            aa = Q = ma(Q);
            W = L = na(L);
            Fa = T = na(T);
            O -= u;
            aa -= sa;
            W += u;
            Fa += sa;
            0 > I && (I = 0);
            0 > Q && (Q = 0);
            L > F && (L = F);
            T > C && (T = C);
            0 > O && (O = 0);
            0 > aa && (aa = 0);
            W > F && (W = F);
            Fa > C && (Fa = C);
            J.left = I / F;
            J.top = 1 - Q / C;
            J.right = L / F;
            J.bottom = 1 - T / C
        } else
            J.left = D.left = 0, J.top = D.top = 0, J.right = D.right = 1, J.bottom = D.bottom = 1;
        sa = c && ((c.Q || Pa) && a.wm(l[0].Zc) || 0 !== u || 0 !== sa || 1 !== c.opacity || c.type.rc.Mv) ||
                b && !c && 1 !== b.opacity;
        a.qw();
        if (sa) {
            r[z] || (r[z] = a.Pg(F, C, this.j.ab));
            if (r[z].sl !== F || r[z].rl !== C)
                a.deleteTexture(r[z]), r[z] = a.Pg(F, C, this.j.ab);
            a.zg(0);
            a.yg(r[z]);
            G = Fa - aa;
            a.clearRect(O, C - aa - G, W - O, G);
            c ? c.xe(a) : (a.me(this.j.Be), a.Bj(b.opacity), a.wg(), a.translate(-B, -K), a.Cg(), a.tg(I, T, L, T, L, Q, I, Q, J));
            D.left = D.top = 0;
            D.right = D.bottom = 1;
            c && (x = J.top, J.top = J.bottom, J.bottom = x);
            z = 1;
            E = 0
        }
        a.Bj(1);
        u = l.length - 1;
        var Pa = a.ts(l[u].Zc) || !b && !c && !this.j.Ve, Qa = 0;
        p = 0;
        for (s = l.length; p < s; p++) {
            r[z] || (r[z] = a.Pg(F, C, this.j.ab));
            if (r[z].sl !== F || r[z].rl !== C)
                a.deleteTexture(r[z]), r[z] = a.Pg(F, C, this.j.ab);
            a.zg(l[p].Zc);
            Qa = l[p].index;
            a.Zo(l[p].Zc) && (this.j.zb = !0);
            0 != p || sa ? (a.Gk(d, 1 / F, 1 / C, D.left, D.top, D.right, D.bottom, k, n, m, q, c ? c.Vb[Qa] : b ? b.Vb[Qa] : this.Vb[Qa]), a.me(null), p !== u || Pa ? (a.yg(r[z]), G = Fa - aa, x = C - aa - G, a.clearRect(O, x, W - O, G)) : (c ? a.gi(c.qd, c.jd) : b && a.gi(b.qd, b.jd), a.yg(d)), a.me(r[E]), a.wg(), a.translate(-B, -K), a.Cg(), a.tg(I, T, L, T, L, Q, I, Q, J), p !== u || Pa || a.me(null)) : (a.yg(r[z]), G = Fa - aa, x = C - aa - G, a.clearRect(O, x, W - O, G), c ? (a.Gk(d,
                    1 / c.width, 1 / c.height, D.left, D.top, D.right, D.bottom, k, n, m, q, c.Vb[Qa]), c.xe(a)) : (a.Gk(d, 1 / F, 1 / C, 0, 0, 1, 1, k, n, m, q, b ? b.Vb[Qa] : this.Vb[Qa]), a.me(b ? this.j.Be : this.j.fe), a.wg(), a.translate(-B, -K), a.Cg(), a.tg(I, T, L, T, L, Q, I, Q, J)), D.left = D.top = 0, D.right = D.bottom = 1, c && !Pa && (x = T, T = Q, Q = x));
            z = 0 === z ? 1 : 0;
            E = 0 === z ? 1 : 0
        }
        Pa && (a.zg(0), c ? a.gi(c.qd, c.jd) : b ? a.gi(b.qd, b.jd) : this.j.Ve || (a.Hk(this.j.width, this.j.height), B = this.j.width / 2, K = this.j.height / 2, Q = I = 0, L = this.j.width, T = this.j.height), a.yg(d), a.me(r[E]), a.wg(), a.translate(-B,
                -K), a.Cg(), c && 1 === l.length && !sa ? a.tg(I, Q, L, Q, L, T, I, T, J) : a.tg(I, T, L, T, L, Q, I, Q, J), a.me(null))
    };
    a.prototype.fo = function(a) {
        var b, c;
        b = 0;
        for (c = this.Ua.length; b < c; b++)
            if (this.Ua[b].Pa === a)
                return this.Ua[b];
        return null
    };
    a.prototype.Yc = function() {
        var a, b, c, d = {sx: this.scrollX, sy: this.scrollY, s: this.scale, a: this.Q, w: this.width, h: this.height, fv: this.zl, persist: this.di, fx: [], layers: {}};
        a = 0;
        for (b = this.ya.length; a < b; a++)
            c = this.ya[a], d.fx.push({name: c.name, active: c.Vc, params: this.Vb[c.index]});
        a = 0;
        for (b = this.Ua.length; a <
                b; a++)
            c = this.Ua[a], d.layers[c.Pa.toString()] = c.Yc();
        return d
    };
    a.prototype.Cd = function(a) {
        var b, c, d, l;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.Q = a.a;
        this.width = a.w;
        this.height = a.h;
        this.di = a.persist;
        "undefined" !== typeof a.fv && (this.zl = a.fv);
        var k = a.fx;
        b = 0;
        for (c = k.length; b < c; b++)
            if (d = this.Sq(k[b].name))
                d.Vc = k[b].active, this.Vb[d.index] = k[b].params;
        this.xh();
        b = a.layers;
        for (l in b)
            b.hasOwnProperty(l) && (a = this.fo(parseInt(l, 10))) && a.Cd(b[l])
    };
    nb = a;
    c.prototype.xh = function() {
        this.$a.length =
                0;
        var a, b, c;
        a = 0;
        for (b = this.ya.length; a < b; a++)
            c = this.ya[a], c.Vc && this.$a.push(c)
    };
    c.prototype.Sq = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.ya.length; b < c; b++)
            if (d = this.ya[b], d.name === a)
                return d;
        return null
    };
    c.prototype.gz = function() {
        var a, b, c, h, l, k;
        b = a = 0;
        for (c = this.fk.length; a < c; a++) {
            h = this.fk[a];
            l = this.j.aa[h[1]];
            k = this.j.Xs(l);
            l = !0;
            if (!k || this.jb.zl)
                h = this.j.Li(h, this, !0), d.push(h), h.type.global && (l = !1);
            l && (this.fk[b] = this.fk[a], b++)
        }
        this.fk.length = b;
        this.j.bd();
        !this.j.ba && this.ya.length && (this.Kd = this.Iz);
        this.tl = Sa(this.Kd);
        this.j.Z && Ta(this, this.Kd, this.j.Z)
    };
    c.prototype.wC = function() {
        if (this.qe) {
            var a, b;
            a = 0;
            for (b = this.G.length; a < b; a++)
                this.G[a].Dj = a;
            this.qe = !1
        }
    };
    c.prototype.Od = function(a) {
        return this.vA() * (this.j.Ve || a ? this.j.ql : 1)
    };
    c.prototype.vA = function() {
        return(this.scale * this.jb.scale - 1) * this.Nm + 1
    };
    c.prototype.ze = function() {
        return this.Mi ? 0 : za(this.jb.Q + this.Q)
    };
    c.prototype.vf = function(a) {
        this.fi = this.Lq || 1 !== this.opacity || 0 !== this.Kd;
        var b = this.j.canvas, c = a, d = !1;
        a.globalAlpha = 1;
        a.globalCompositeOperation =
                "source-over";
        this.fi && (this.j.zo || (this.j.zo = document.createElement("canvas"), b = this.j.zo, b.width = this.j.Oa, b.height = this.j.Na, this.j.wv = b.getContext("2d"), d = !0), b = this.j.zo, c = this.j.wv, b.width !== this.j.Oa && (b.width = this.j.Oa, d = !0), b.height !== this.j.Na && (b.height = this.j.Na, d = !0), d && (c.webkitImageSmoothingEnabled = this.j.ab, c.mozImageSmoothingEnabled = this.j.ab, c.msImageSmoothingEnabled = this.j.ab, c.imageSmoothingEnabled = this.j.ab), this.Cj && c.clearRect(0, 0, this.j.Oa, this.j.Na));
        this.Cj || (c.fillStyle =
                "rgb(" + this.Jh[0] + "," + this.Jh[1] + "," + this.Jh[2] + ")", c.fillRect(0, 0, this.j.Oa, this.j.Na));
        c.save();
        this.Mi = !0;
        var d = this.Sj(!0), l = this.Sj(!1);
        this.Mi = !1;
        this.j.qg && (d = d + 0.5 | 0, l = l + 0.5 | 0);
        this.Bs(d, l, c);
        var k = this.Od();
        c.scale(k, k);
        c.translate(-d, -l);
        for (var n, d = 0, l = this.G.length; d < l; d++)
            k = this.G[d], k.visible && 0 !== k.width && 0 !== k.height && (k.lb(), n = k.Qb, n.right < this.Qc || n.bottom < this.Rc || n.left > this.Vd || n.top > this.Ud || (c.globalCompositeOperation = k.tl, k.vf(c)));
        c.restore();
        this.fi && (a.globalCompositeOperation =
                this.tl, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    c.prototype.Bs = function(a, b, c) {
        var d = this.Od();
        this.Qc = a;
        this.Rc = b;
        this.Vd = a + this.j.Oa * (1 / d);
        this.Ud = b + this.j.Na * (1 / d);
        a = this.ze();
        0 !== a && (c && (c.translate(this.j.Oa / 2, this.j.Na / 2), c.rotate(-a), c.translate(this.j.Oa / -2, this.j.Na / -2)), this.wh.set(this.Qc, this.Rc, this.Vd, this.Ud), this.wh.offset((this.Qc + this.Vd) / -2, (this.Rc + this.Ud) / -2), this.Jw.sw(this.wh, a), this.Jw.gu(this.wh), this.wh.offset((this.Qc + this.Vd) / 2, (this.Rc + this.Ud) / 2), this.Qc = this.wh.left,
                this.Rc = this.wh.top, this.Vd = this.wh.right, this.Ud = this.wh.bottom)
    };
    c.prototype.xe = function(a) {
        var b = this.j.Oa, c = this.j.Na, d = 0, l = 0;
        if (this.fi = this.Lq || 1 !== this.opacity || 0 < this.$a.length || 0 !== this.Kd) {
            this.j.Be || (this.j.Be = a.Pg(this.j.Oa, this.j.Na, this.j.ab));
            if (this.j.Be.sl !== this.j.Oa || this.j.Be.rl !== this.j.Na)
                a.deleteTexture(this.j.Be), this.j.Be = a.Pg(this.j.Oa, this.j.Na, this.j.ab);
            a.yg(this.j.Be);
            this.Cj && a.clear(0, 0, 0, 0)
        }
        this.Cj || a.clear(this.Jh[0] / 255, this.Jh[1] / 255, this.Jh[2] / 255, 1);
        this.Mi = !0;
        var l = this.Sj(!0), k = this.Sj(!1);
        this.Mi = !1;
        this.j.qg && (l = l + 0.5 | 0, k = k + 0.5 | 0);
        this.Bs(l, k, null);
        k = this.Od();
        a.wg();
        a.scale(k, k);
        a.Cs(-this.ze());
        a.translate((this.Qc + this.Vd) / -2, (this.Rc + this.Ud) / -2);
        a.Cg();
        var n, m, q;
        n = 0;
        for (m = this.G.length; n < m; n++)
            if (q = this.G[n], q.visible && 0 !== q.width && 0 !== q.height && (q.lb(), d = q.Qb, !(d.right < this.Qc || d.bottom < this.Rc || d.left > this.Vd || d.top > this.Ud)))
                if (q.Yw)
                    if (d = q.$a[0].Zc, l = q.$a[0].index, 1 !== q.$a.length || a.ts(d) || a.YB(d) || (q.Q || q.O.ze()) && a.wm(d) || 1 !== q.opacity || q.type.rc.Mv)
                        this.jb.zs(a,
                                this, q, this.fi ? this.j.Be : this.jb.Cl()), a.wg(), a.scale(k, k), a.Cs(-this.ze()), a.translate((this.Qc + this.Vd) / -2, (this.Rc + this.Ud) / -2), a.Cg();
                    else {
                        a.zg(d);
                        a.gi(q.qd, q.jd);
                        a.Zo(d) && (this.j.zb = !0);
                        var r = 0, p = 0, s = 0, u = 0;
                        a.wm(d) && (d = q.Qb, r = this.rb(d.left, d.top, !0, !0), p = this.rb(d.left, d.top, !1, !0), s = this.rb(d.right, d.bottom, !0, !0), d = this.rb(d.right, d.bottom, !1, !0), r /= b, p = 1 - p / c, s /= b, u = 1 - d / c);
                        a.Gk(this.fi ? this.j.Be : this.jb.Cl(), 1 / q.width, 1 / q.height, r, p, s, u, this.Od(), this.ze(), this.Qc, this.Rc, q.Vb[l]);
                        q.xe(a)
                    }
                else
                    a.zg(0),
                            a.gi(q.qd, q.jd), q.xe(a);
        this.fi && (d = this.$a.length ? this.$a[0].Zc : 0, l = this.$a.length ? this.$a[0].index : 0, 0 === this.$a.length || 1 === this.$a.length && !a.ts(d) && 1 === this.opacity ? (1 === this.$a.length ? (a.zg(d), a.Gk(this.jb.Cl(), 1 / this.j.Oa, 1 / this.j.Na, 0, 0, 1, 1, this.Od(), this.ze(), this.Qc, this.Rc, this.Vb[l]), a.Zo(d) && (this.j.zb = !0)) : a.zg(0), a.yg(this.jb.Cl()), a.Bj(this.opacity), a.me(this.j.Be), a.gi(this.qd, this.jd), a.wg(), a.Cg(), b = this.j.Oa / 2, c = this.j.Na / 2, a.cp(-b, c, b, c, b, -c, -b, -c), a.me(null)) : this.jb.zs(a, this,
                null, this.jb.Cl()))
    };
    c.prototype.Sj = function(a) {
        var b = 0, c = 0, d = this.j.devicePixelRatio;
        this.j.Zi && (b *= d, c *= d);
        var d = this.j.Vv, l = this.j.Wv, d = (this.jb.scrollX - d) * this.oh + d, l = (this.jb.scrollY - l) * this.ph + l, k = 1 / this.Od(!1), d = d - this.j.Oa * k / 2, l = l - this.j.Na * k / 2, d = d + b * k, l = l + c * k, c = this.ze();
        0 !== c && (d -= this.jb.scrollX, l -= this.jb.scrollY, b = Math.cos(c), c = Math.sin(c), k = d * b - l * c, l = l * b + d * c, d = k + this.jb.scrollX, l += this.jb.scrollY);
        return a ? d : l
    };
    c.prototype.rb = function(a, b, c, d) {
        var l = this.ze();
        if (0 !== l) {
            a -= this.jb.scrollX;
            b -= this.jb.scrollY;
            var k = Math.cos(-l), l = Math.sin(-l), n = a * k - b * l;
            b = b * k + a * l;
            a = n + this.jb.scrollX;
            b += this.jb.scrollY
        }
        k = this.j.Vv;
        l = this.j.Wv;
        k = (this.jb.scrollX - k) * this.oh + k;
        l = (this.jb.scrollY - l) * this.ph + l;
        n = 1 / this.Od(!d);
        d ? (k -= this.j.Oa * n / 2, l -= this.j.Na * n / 2) : (k -= this.j.width * n / 2, l -= this.j.height * n / 2);
        k = (a - k) / n;
        l = (b - l) / n;
        a = this.j.devicePixelRatio;
        this.j.Zi && (k /= a, l /= a);
        return c ? k : l
    };
    c.prototype.Yc = function() {
        var a, b, c, d = {s: this.scale, a: this.Q, vl: this.Qc, vt: this.Rc, vr: this.Vd, vb: this.Ud, v: this.visible, bc: this.Jh,
            t: this.Cj, px: this.oh, py: this.ph, o: this.opacity, zr: this.Nm, fx: [], instances: []};
        a = 0;
        for (b = this.ya.length; a < b; a++)
            c = this.ya[a], d.fx.push({name: c.name, active: c.Vc, params: this.Vb[c.index]});
        return d
    };
    c.prototype.Cd = function(a) {
        var c, d;
        this.scale = a.s;
        this.Q = a.a;
        this.Qc = a.vl;
        this.Rc = a.vt;
        this.Vd = a.vr;
        this.Ud = a.vb;
        this.visible = a.v;
        this.Jh = a.bc;
        this.Cj = a.t;
        this.oh = a.px;
        this.ph = a.py;
        this.opacity = a.o;
        this.Nm = a.zr;
        var h = a.fx;
        a = 0;
        for (c = h.length; a < c; a++)
            if (d = this.Sq(h[a].name))
                d.Vc = h[a].active, this.Vb[d.index] =
                        h[a].params;
        this.xh();
        this.G.sort(b);
        this.qe = !0
    };
    Ab = c
})();
(function() {
    function a(a, b) {
        var c, d = a.length;
        switch (d) {
            case 0:
                return!0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < d; c++)
                    if (a[c] !== b[c])
                        return!1;
                return!0
            }
    }
    function c(a, b) {
        return a.index - b.index
    }
    function b(b) {
        var d, e, f, m;
        2 === b.length ? b[0].index > b[1].index && (d = b[0], b[0] = b[1], b[1] = d) : 2 < b.length && b.sort(c);
        b.length >= r.length && (r.length = b.length + 1);
        r[b.length] || (r[b.length] = []);
        m = r[b.length];
        d = 0;
        for (e = m.length; d < e; d++)
            if (f = m[d], a(b, f))
                return f;
        m.push(b);
        return b
    }
    function d(a, b) {
        this.j = a;
        this.Mw = {};
        this.yu = {};
        this.Vq = !1;
        this.Qu = new da;
        this.name = b[0];
        var c = b[1];
        this.Oh = [];
        var d, e;
        d = 0;
        for (e = c.length; d < e; d++)
            this.Tu(c[d], null, this.Oh)
    }
    function e(a) {
        this.type = a;
        this.G = [];
        this.ib = [];
        this.Sb = !0
    }
    function g(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.j = a.j;
        this.Tb = [];
        this.hi = [];
        this.Ou = this.wp = this.Us = this.mo = this.group = this.Aw = !1;
        this.Rb = [];
        this.rf = [];
        this.jf = [];
        c[1] ? (this.ek = c[1][1].toLowerCase(), this.group = !0, this.mo = !!c[1][0], this.j.Hh.push(this), this.j.pl[this.ek.toLowerCase()] =
                this.mo) : (this.ek = "", this.mo = this.group = !1);
        this.Ef = c[2];
        this.Pa = c[4];
        this.group || (this.j.fu[this.Pa.toString()] = this);
        var d = c[5];
        a = 0;
        for (b = d.length; a < b; a++) {
            var e = new Bb(this, d[a]);
            e.index = a;
            this.Rb.push(e);
            this.Wt(e.type)
        }
        d = c[6];
        a = 0;
        for (b = d.length; a < b; a++)
            e = new Cb(this, d[a]), e.index = a, this.rf.push(e);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++)
                this.sheet.Tu(c[a], this, this.jf);
        this.qo = !1;
        this.Rb.length && (this.qo = null == this.Rb[0].type && this.Rb[0].oc == N.prototype.X.ux)
    }
    function f(a, b) {
        var c,
                d, e;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.xf))
            for (c = 0, d = a.Md.length; c < d; c++)
                e = a.Md[c], a !== e && -1 === b.indexOf(e) && b.push(e)
    }
    function h(a, b) {
        this.we = a;
        this.sheet = a.sheet;
        this.j = a.j;
        this.ma = [];
        this.Ea = [];
        this.ja = {};
        this.index = -1;
        this.oc = b[1];
        this.trigger = 0 < b[3];
        this.xu = 2 === b[3];
        this.Hl = b[5];
        this.jB = b[6];
        this.Pa = b[7];
        this.j.Uj[this.Pa.toString()] = this;
        -1 === b[0] ? (this.type = null, this.tc = this.Es, this.Fi = null, this.Wc = -1) : (this.type = this.j.aa[b[0]], this.tc = this.jB ? this.gC : this.Ds, b[2] ? (this.Fi = this.type.bo(b[2]),
                this.Wc = this.type.Qq(b[2])) : (this.Fi = null, this.Wc = -1), this.we.parent && this.we.parent.lp());
        this.xu && (this.tc = this.hC);
        if (10 === b.length) {
            var c, d, e = b[9];
            c = 0;
            for (d = e.length; c < d; c++) {
                var f = new Db(this, e[c]);
                this.ma.push(f)
            }
            this.Ea.length = e.length
        }
    }
    function l(a, b) {
        this.we = a;
        this.sheet = a.sheet;
        this.j = a.j;
        this.ma = [];
        this.Ea = [];
        this.ja = {};
        this.index = -1;
        this.oc = b[1];
        -1 === b[0] ? (this.type = null, this.tc = this.Es, this.Fi = null, this.Wc = -1) : (this.type = this.j.aa[b[0]], this.tc = this.Ds, b[2] ? (this.Fi = this.type.bo(b[2]),
                this.Wc = this.type.Qq(b[2])) : (this.Fi = null, this.Wc = -1));
        this.Pa = b[3];
        this.j.Qj[this.Pa.toString()] = this;
        if (6 === b.length) {
            var c, d, e = b[5];
            c = 0;
            for (d = e.length; c < d; c++) {
                var f = new Db(this, e[c]);
                this.ma.push(f)
            }
            this.Ea.length = e.length
        }
    }
    function k(a, b) {
        this.pa = a;
        this.we = a.we;
        this.sheet = a.sheet;
        this.j = a.j;
        this.type = b[0];
        this.ag = null;
        this.lu = this.ji = 0;
        this.jb = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Dp = this.Lk = this.zu = this.Qi = this.Jm = null;
        var c, d, e;
        switch (b[0]) {
            case 0:
            case 7:
                this.ag = new Eb(this, b[1]);
                this.ji = 0;
                this.get = this.FA;
                break;
            case 1:
                this.ag = new Eb(this, b[1]);
                this.ji = 0;
                this.get = this.GA;
                break;
            case 5:
                this.ag = new Eb(this, b[1]);
                this.ji = 0;
                this.get = this.KA;
                break;
            case 3:
            case 8:
                this.lu = b[1];
                this.get = this.DA;
                break;
            case 6:
                this.jb = this.j.mk[b[1]];
                this.get = this.LA;
                break;
            case 9:
                this.key = b[1];
                this.get = this.JA;
                break;
            case 4:
                this.object = this.j.aa[b[1]];
                this.get = this.MA;
                this.we.Wt(this.object);
                this.pa instanceof Cb ? this.we.lp() : this.we.parent && this.we.parent.lp();
                break;
            case 10:
                this.index = b[1];
                this.get = a.type.ra ?
                        this.HA : this.IA;
                break;
            case 11:
                this.Jm = b[1];
                this.Qi = null;
                this.get = this.EA;
                break;
            case 2:
            case 12:
                this.zu = b[1];
                this.get = this.CA;
                break;
            case 13:
                for (this.get = this.NA, this.Lk = [], this.Dp = [], c = 1, d = b.length; c < d; c++)
                    e = new Db(this.pa, b[c]), this.Lk.push(e), this.Dp.push(0)
            }
    }
    function n(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.j = a.j;
        this.Tb = [];
        this.name = c[1];
        this.Zq = c[3];
        this.Ll = !!c[4];
        this.po = !!c[5];
        this.Pa = c[6];
        this.j.Ok[this.Pa.toString()] = this;
        this.data = this.Zq;
        this.parent ? (this.kj = this.Ll || this.po ? -1 : this.j.mC++,
                this.j.Qy.push(this)) : (this.kj = -1, this.j.Py.push(this))
    }
    function m(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.j = a.j;
        this.Tb = [];
        this.El = null;
        this.TA = c[1]
    }
    function q() {
        this.Fw = [];
        this.reset(null)
    }
    var r = [];
    d.prototype.toString = v("name");
    d.prototype.Tu = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a = new Fb(this, b, a);
                if (a.Ef)
                    for (c.push(a), c = 0, b = a.Rb.length; c < b; c++)
                        a.Rb[c].trigger && this.Uu(a, c);
                else
                    a.cv() ? this.Uu(a, 0) : c.push(a);
                break;
            case 1:
                a = new xb(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new Gb(this, b, a), c.push(a)
            }
    };
    d.prototype.jc =
            function() {
                var a, b;
                a = 0;
                for (b = this.Oh.length; a < b; a++)
                    this.Oh[a].jc(a < b - 1 && this.Oh[a + 1].qo)
            };
    d.prototype.tc = function(a) {
        this.j.eE || (this.Vq = !0, a || (this.j.dr = !0));
        var b, c;
        b = 0;
        for (c = this.Oh.length; b < c; b++) {
            var d = this.Oh[b];
            d.tc();
            this.j.rq(d.Tb);
            this.j.Yf.Qh() && !this.j.Nd.length || this.j.bd()
        }
        a || (this.j.dr = !1)
    };
    d.prototype.Uu = function(a, b) {
        a.Ef || this.j.zp.push(a);
        var c, d, e = a.Rb[b], f;
        f = e.type ? e.type.name : "system";
        var m = (c = e.xu) ? this.yu : this.Mw;
        m[f] || (m[f] = []);
        f = m[f];
        m = e.oc;
        if (c) {
            if (e.ma.length && (e = e.ma[0],
                    1 === e.type && 2 === e.ag.type)) {
                e = e.ag.value.toLowerCase();
                c = 0;
                for (d = f.length; c < d; c++)
                    if (f[c].method == m) {
                        c = f[c].Rn;
                        c[e] ? c[e].push([a, b]) : c[e] = [[a, b]];
                        return
                    }
                c = {};
                c[e] = [[a, b]];
                f.push({method: m, Rn: c})
            }
        } else {
            c = 0;
            for (d = f.length; c < d; c++)
                if (f[c].method == m) {
                    f[c].Rn.push([a, b]);
                    return
                }
            f.push({method: m, Rn: [[a, b]]})
        }
    };
    ob = d;
    e.prototype.Mu = function() {
        return this.Sb ? this.type.G.length : this.G.length
    };
    e.prototype.We = function() {
        return this.Sb ? this.type.G : this.G
    };
    e.prototype.um = function(a) {
        a && (a.j.Bd().Te.Ef ? (this.Sb &&
                (this.G.length = 0, ua(this.ib, a.type.G), this.Sb = !1), a = this.ib.indexOf(a), -1 !== a && (this.G.push(this.ib[a]), this.ib.splice(a, 1))) : (this.Sb = !1, this.G.length = 1, this.G[0] = a))
    };
    Ya = e;
    window._c2hh_ = "";
    g.prototype.jc = function(a) {
        var c, d = this.parent;
        if (this.group)
            for (this.wp = !0; d; ) {
                if (!d.group) {
                    this.wp = !1;
                    break
                }
                d = d.parent
            }
        this.Us = !this.cv() && (!this.parent || this.parent.group && this.parent.wp);
        this.Ou = !!a;
        this.hi = this.Tb.slice(0);
        for (d = this.parent; d; ) {
            a = 0;
            for (c = d.Tb.length; a < c; a++)
                this.Ny(d.Tb[a]);
            d = d.parent
        }
        this.Tb =
                b(this.Tb);
        this.hi = b(this.hi);
        a = 0;
        for (c = this.Rb.length; a < c; a++)
            this.Rb[a].jc();
        a = 0;
        for (c = this.rf.length; a < c; a++)
            this.rf[a].jc();
        a = 0;
        for (c = this.jf.length; a < c; a++)
            this.jf[a].jc(a < c - 1 && this.jf[a + 1].qo)
    };
    g.prototype.Wt = function(a) {
        f(a, this.Tb)
    };
    g.prototype.Ny = function(a) {
        f(a, this.hi)
    };
    g.prototype.lp = function() {
        this.Aw = !0;
        this.parent && this.parent.lp()
    };
    g.prototype.cv = function() {
        return this.Rb.length ? this.Rb[0].trigger : !1
    };
    g.prototype.tc = function() {
        var a, b = !1, c, d = this.j.Bd();
        d.Te = this;
        this.qo || (d.Dq = !1);
        if (this.Ef) {
            0 === this.Rb.length && (b = !0);
            d.xc = 0;
            for (a = this.Rb.length; d.xc < a; d.xc++)
                this.Rb[d.xc].trigger || (c = this.Rb[d.xc].tc()) && (b = !0);
            (d.fj = b) && this.ip()
        } else {
            d.xc = 0;
            for (a = this.Rb.length; d.xc < a; d.xc++)
                if (c = this.Rb[d.xc].tc(), !c) {
                    d.fj = !1;
                    !this.Us || this.j.Yf.Qh() && !this.j.Nd.length || this.j.bd();
                    return
                }
            d.fj = !0;
            this.ip()
        }
        this.Kz(d)
    };
    g.prototype.Kz = function(a) {
        a.fj && this.Ou && (a.Dq = !0);
        !this.Us || this.j.Yf.Qh() && !this.j.Nd.length || this.j.bd()
    };
    g.prototype.eC = function(a) {
        this.j.Bd().Te = this;
        this.Rb[a].tc() &&
                (this.ip(), this.j.Bd().fj = !0)
    };
    g.prototype.ip = function() {
        var a = this.j.Bd(), b;
        a.Pe = 0;
        for (b = this.rf.length; a.Pe < b; a.Pe++)
            if (this.rf[a.Pe].tc())
                return;
        this.mw()
    };
    g.prototype.bC = function() {
        var a = this.j.Bd(), b;
        for (b = this.rf.length; a.Pe < b; a.Pe++)
            if (this.rf[a.Pe].tc())
                return;
        this.mw()
    };
    g.prototype.mw = function() {
        if (this.jf.length) {
            var a, b, c, d, e = this.jf.length - 1;
            this.j.bp(this);
            if (this.Aw)
                for (a = 0, b = this.jf.length; a < b; a++)
                    c = this.jf[a], (d = !this.wp || !this.group && a < e) && this.j.$o(c.Tb), c.tc(), d ? this.j.xj(c.Tb) :
                            this.j.rq(c.Tb);
            else
                for (a = 0, b = this.jf.length; a < b; a++)
                    this.jf[a].tc();
            this.j.Yo()
        }
    };
    g.prototype.fC = function() {
        var a = this.j.Bd();
        a.Te = this;
        var b = !1, c;
        a.xc = 0;
        for (c = this.Rb.length; a.xc < c; a.xc++)
            if (this.Rb[a.xc].tc())
                b = !0;
            else if (!this.Ef)
                return!1;
        return this.Ef ? b : !0
    };
    g.prototype.cC = function() {
        this.j.Sn++;
        var a = this.j.Bd().xc, b = this.j.bp(this);
        if (!this.Ef)
            for (b.xc = a + 1, a = this.Rb.length; b.xc < a; b.xc++)
                if (!this.Rb[b.xc].tc()) {
                    this.j.Yo();
                    return
                }
        this.ip();
        this.j.Yo()
    };
    g.prototype.fB = function(a) {
        var b = a.index;
        if (0 === b)
            return!0;
        for (--b; 0 <= b; --b)
            if (this.Rb[b].type === a.type)
                return!1;
        return!0
    };
    Fb = g;
    h.prototype.jc = function() {
        var a, b;
        a = 0;
        for (b = this.ma.length; a < b; a++)
            this.ma[a].jc()
    };
    h.prototype.hC = w(!0);
    h.prototype.Es = function() {
        var a, b;
        a = 0;
        for (b = this.ma.length; a < b; a++)
            this.Ea[a] = this.ma[a].get();
        return Ia(this.oc.apply(this.j.Ag, this.Ea), this.Hl)
    };
    h.prototype.gC = function() {
        var a, b;
        a = 0;
        for (b = this.ma.length; a < b; a++)
            this.Ea[a] = this.ma[a].get(a);
        a = this.oc.apply(this.Fi ? this.Fi : this.type, this.Ea);
        this.type.Vf();
        return a
    };
    h.prototype.Ds = function() {
        var a, b, c, d, e, f, m, g = this.type.qb(), h = this.we.Ef && !this.trigger, l = 0, k = this.type.xf;
        if (g.Sb) {
            g.G.length = 0;
            a = g.ib.length = 0;
            for (c = this.type.G.length; a < c; a++) {
                f = this.type.G[a];
                b = 0;
                for (d = this.ma.length; b < d; b++)
                    this.Ea[b] = this.ma[b].get(a);
                -1 < this.Wc ? (this.type.ra && (l = f.type.$j[this.type.bg]), b = this.oc.apply(f.Fa[this.Wc + l], this.Ea)) : b = this.oc.apply(f, this.Ea);
                (e = Ia(b, this.Hl)) ? g.G.push(f) : h && g.ib.push(f)
            }
            this.type.finish && this.type.finish(!0);
            g.Sb = !1;
            this.type.Vf();
            return g.Mu()
        }
        var q =
                0, n = (e = h && !this.we.fB(this)) ? g.ib : g.G, r = !1;
        a = 0;
        for (c = n.length; a < c; a++) {
            f = n[a];
            b = 0;
            for (d = this.ma.length; b < d; b++)
                this.Ea[b] = this.ma[b].get(a);
            -1 < this.Wc ? (this.type.ra && (l = f.type.$j[this.type.bg]), b = this.oc.apply(f.Fa[this.Wc + l], this.Ea)) : b = this.oc.apply(f, this.Ea);
            if (Ia(b, this.Hl))
                if (r = !0, e) {
                    if (g.G.push(f), k)
                        for (b = 0, d = f.siblings.length; b < d; b++)
                            m = f.siblings[b], m.type.qb().G.push(m)
                } else {
                    n[q] = f;
                    if (k)
                        for (b = 0, d = f.siblings.length; b < d; b++)
                            m = f.siblings[b], m.type.qb().G[q] = m;
                    q++
                }
            else if (e) {
                n[q] = f;
                if (k)
                    for (b =
                            0, d = f.siblings.length; b < d; b++)
                        m = f.siblings[b], m.type.qb().ib[q] = m;
                q++
            } else if (h && (g.ib.push(f), k))
                for (b = 0, d = f.siblings.length; b < d; b++)
                    m = f.siblings[b], m.type.qb().ib.push(m)
        }
        n.length = q;
        if (k)
            for (a = 0, c = this.type.Md.length; a < c; a++)
                f = this.type.Md[a].qb(), e ? f.ib.length = q : f.G.length = q;
        l = r;
        if (e && !r)
            for (a = 0, c = g.G.length; a < c; a++) {
                f = g.G[a];
                b = 0;
                for (d = this.ma.length; b < d; b++)
                    this.Ea[b] = this.ma[b].get(a);
                b = -1 < this.Wc ? this.oc.apply(f.Fa[this.Wc], this.Ea) : this.oc.apply(f, this.Ea);
                if (Ia(b, this.Hl)) {
                    r = !0;
                    break
                }
            }
        this.type.finish &&
                this.type.finish(l || h);
        return h ? r : g.Mu()
    };
    Bb = h;
    l.prototype.jc = function() {
        var a, b;
        a = 0;
        for (b = this.ma.length; a < b; a++)
            this.ma[a].jc()
    };
    l.prototype.Es = function() {
        var a, b;
        a = 0;
        for (b = this.ma.length; a < b; a++)
            this.Ea[a] = this.ma[a].get();
        return this.oc.apply(this.j.Ag, this.Ea)
    };
    l.prototype.Ds = function() {
        var a = this.type.qb().We(), b, c, d, e, f;
        b = 0;
        for (d = a.length; b < d; b++) {
            f = a[b];
            c = 0;
            for (e = this.ma.length; c < e; c++)
                this.Ea[c] = this.ma[c].get(b);
            -1 < this.Wc ? (c = 0, this.type.ra && (c = f.type.$j[this.type.bg]), this.oc.apply(f.Fa[this.Wc +
            c], this.Ea)) : this.oc.apply(f, this.Ea)
        }
        return!1
    };
    Cb = l;
    var p = [], s = -1;
    k.prototype.jc = function() {
        var a, b;
        if (11 === this.type)
            this.Qi = this.j.Gu(this.Jm, this.we.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Lk.length; a < b; a++)
                this.Lk[a].jc();
        this.ag && this.ag.jc()
    };
    k.prototype.Cc = function() {
        s++;
        p.length === s && p.push(new Hb);
        return p[s]
    };
    k.prototype.sc = function() {
        s--
    };
    k.prototype.FA = function(a) {
        this.ji = a || 0;
        a = this.Cc();
        this.ag.get(a);
        this.sc();
        return a.data
    };
    k.prototype.GA = function(a) {
        this.ji = a || 0;
        a = this.Cc();
        this.ag.get(a);
        this.sc();
        return H(a.data) ? a.data : ""
    };
    k.prototype.MA = v("object");
    k.prototype.DA = v("lu");
    k.prototype.KA = function(a) {
        this.ji = a || 0;
        a = this.Cc();
        this.ag.get(a);
        this.sc();
        return a.Lc() ? this.j.uA(a.data) : this.j.tA(a.data)
    };
    k.prototype.LA = v("jb");
    k.prototype.JA = v("key");
    k.prototype.IA = v("index");
    k.prototype.HA = function(a) {
        var b = this.pa.type, c = null, c = b.qb(), d = c.We(), c = d.length ? d[a % d.length].type : c.ib[a % c.ib.length].type;
        return this.index + c.Tn[b.bg]
    };
    k.prototype.EA = v("Qi");
    k.prototype.CA = v("zu");
    k.prototype.NA = function() {
        var a, b;
        a = 0;
        for (b = this.Lk.length; a < b; a++)
            this.Dp[a] = this.Lk[a].get();
        return this.Dp
    };
    Db = k;
    n.prototype.jc = function() {
        this.Tb = b(this.Tb)
    };
    n.prototype.lC = function(a) {
        var b = this.j.Fu();
        this.parent && !this.Ll && b ? (this.kj >= b.length && (b.length = this.kj + 1), b[this.kj] = a) : this.data = a
    };
    n.prototype.BA = function() {
        var a = this.j.Fu();
        return!this.parent || this.Ll || !a || this.po ? this.data : this.kj >= a.length || "undefined" === typeof a[this.kj] ? this.Zq : a[this.kj]
    };
    n.prototype.tc = function() {
        !this.parent ||
                this.Ll || this.po || this.lC(this.Zq)
    };
    xb = n;
    m.prototype.toString = function() {
        return"include:" + this.El.toString()
    };
    m.prototype.jc = function() {
        this.El = this.j.Fq[this.TA];
        this.sheet.Qu.add(this);
        this.Tb = b(this.Tb)
    };
    m.prototype.tc = function() {
        this.parent && this.j.ym(this.j.aa);
        this.El.Vq || this.El.tc(!0);
        this.parent && this.j.xj(this.j.aa)
    };
    m.prototype.ZA = function() {
        for (var a = this.parent; a; ) {
            if (a.group && !this.j.pl[a.ek.toLowerCase()])
                return!1;
            a = a.parent
        }
        return!0
    };
    Gb = m;
    q.prototype.reset = function(a) {
        this.Te = a;
        this.Pe =
                this.xc = 0;
        this.Fw.length = 0;
        this.Dq = this.fj = !1
    };
    wb = q
})();
(function() {
    function a(a, c) {
        this.pa = a;
        this.j = a.j;
        this.type = c[0];
        this.get = [this.Xz, this.Tz, this.eA, this.hA, this.Nz, this.fA, this.aA, this.Qz, this.$z, this.dA, this.Oz, this.cA, this.Rz, this.bA, this.Yz, this.Zz, this.Uz, this.Vz, this.Pz, this.gA, this.vu, this.Wz, this.vu, this.Sz][this.type];
        var e = null;
        this.je = this.ma = this.Ea = this.oc = this.tp = this.Pc = this.first = this.value = null;
        this.Wc = -1;
        this.Vg = null;
        this.ct = -1;
        this.Qi = this.Jm = null;
        this.zm = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = c[1];
                break;
            case 3:
                this.first =
                        new Eb(a, c[1]);
                break;
            case 18:
                this.first = new Eb(a, c[1]);
                this.Pc = new Eb(a, c[2]);
                this.tp = new Eb(a, c[3]);
                break;
            case 19:
                this.oc = c[1];
                this.Ea = [];
                this.ma = [];
                3 === c.length ? (e = c[2], this.Ea.length = e.length + 1) : this.Ea.length = 1;
                break;
            case 20:
                this.je = this.j.aa[c[1]];
                this.Wc = -1;
                this.oc = c[2];
                this.zm = c[3];
                this.Vg = c[4] ? new Eb(a, c[4]) : null;
                this.Ea = [];
                this.ma = [];
                6 === c.length ? (e = c[5], this.Ea.length = e.length + 1) : this.Ea.length = 1;
                break;
            case 21:
                this.je = this.j.aa[c[1]];
                this.zm = c[2];
                this.Vg = c[3] ? new Eb(a, c[3]) : null;
                this.ct =
                        c[4];
                break;
            case 22:
                this.je = this.j.aa[c[1]];
                this.je.bo(c[2]);
                this.Wc = this.je.Qq(c[2]);
                this.oc = c[3];
                this.zm = c[4];
                this.Vg = c[5] ? new Eb(a, c[5]) : null;
                this.Ea = [];
                this.ma = [];
                7 === c.length ? (e = c[6], this.Ea.length = e.length + 1) : this.Ea.length = 1;
                break;
            case 23:
                this.Jm = c[1], this.Qi = null
        }
        4 <= this.type && 17 >= this.type && (this.first = new Eb(a, c[1]), this.Pc = new Eb(a, c[2]));
        if (e) {
            var g, f;
            g = 0;
            for (f = e.length; g < f; g++)
                this.ma.push(new Eb(a, e[g]))
        }
    }
    function c(a, c) {
        this.type = a || Ib.cl;
        this.data = c || 0;
        this.Ck = null;
        this.type == Ib.cl &&
                (this.data = Math.floor(this.data))
    }
    a.prototype.jc = function() {
        23 === this.type && (this.Qi = this.pa.j.Gu(this.Jm, this.pa.we.parent));
        this.first && this.first.jc();
        this.Pc && this.Pc.jc();
        this.tp && this.tp.jc();
        this.Vg && this.Vg.jc();
        if (this.ma) {
            var a, c;
            a = 0;
            for (c = this.ma.length; a < c; a++)
                this.ma[a].jc()
        }
    };
    a.prototype.gA = function(a) {
        this.Ea[0] = a;
        a = this.pa.Cc();
        var c, e;
        c = 0;
        for (e = this.ma.length; c < e; c++)
            this.ma[c].get(a), this.Ea[c + 1] = a.data;
        this.pa.sc();
        this.oc.apply(this.j.Ag, this.Ea)
    };
    a.prototype.vu = function(a) {
        var c =
                this.je.qb(), e = c.We();
        if (!e.length)
            if (c.ib.length)
                e = c.ib;
            else {
                this.zm ? a.gf("") : a.Ab(0);
                return
            }
        this.Ea[0] = a;
        a.Ck = this.je;
        a = this.pa.Cc();
        var g, c = 0;
        for (g = this.ma.length; c < g; c++)
            this.ma[c].get(a), this.Ea[c + 1] = a.data;
        c = this.pa.ji;
        this.Vg && (this.Vg.get(a), a.Lc() && (c = a.data, e = this.je.G));
        this.pa.sc();
        c %= e.length;
        0 > c && (c += e.length);
        e = e[c];
        -1 < this.Wc ? (a = 0, this.je.ra && (a = e.type.$j[this.je.bg]), this.oc.apply(e.Fa[this.Wc + a], this.Ea)) : this.oc.apply(e, this.Ea)
    };
    a.prototype.Wz = function(a) {
        var c = this.je.qb(), e =
                c.We();
        if (!e.length)
            if (c.ib.length)
                e = c.ib;
            else {
                this.zm ? a.gf("") : a.Ab(0);
                return
            }
        c = this.pa.ji;
        if (this.Vg) {
            var g = this.pa.Cc();
            this.Vg.get(g);
            if (g.Lc()) {
                c = g.data;
                e = this.je.G;
                c %= e.length;
                0 > c && (c += e.length);
                e = e[c].Bc[this.ct];
                H(e) ? a.gf(e) : a.Xa(e);
                this.pa.sc();
                return
            }
            this.pa.sc()
        }
        c %= e.length;
        0 > c && (c += e.length);
        e = e[c];
        c = 0;
        this.je.ra && (c = e.type.Tn[this.je.bg]);
        e = e.Bc[this.ct + c];
        H(e) ? a.gf(e) : a.Xa(e)
    };
    a.prototype.Xz = function(a) {
        a.type = Ib.cl;
        a.data = this.value
    };
    a.prototype.Tz = function(a) {
        a.type = Ib.Yk;
        a.data = this.value
    };
    a.prototype.eA = function(a) {
        a.type = Ib.cq;
        a.data = this.value
    };
    a.prototype.hA = function(a) {
        this.first.get(a);
        a.Lc() && (a.data = -a.data)
    };
    a.prototype.Nz = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Lc() && c.Lc() && (a.data += c.data, c.hk() && a.yk());
        this.pa.sc()
    };
    a.prototype.fA = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Lc() && c.Lc() && (a.data -= c.data, c.hk() && a.yk());
        this.pa.sc()
    };
    a.prototype.aA = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Lc() && c.Lc() &&
                (a.data *= c.data, c.hk() && a.yk());
        this.pa.sc()
    };
    a.prototype.Qz = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Lc() && c.Lc() && (a.data /= c.data, a.yk());
        this.pa.sc()
    };
    a.prototype.$z = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Lc() && c.Lc() && (a.data %= c.data, c.hk() && a.yk());
        this.pa.sc()
    };
    a.prototype.dA = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Lc() && c.Lc() && (a.data = Math.pow(a.data, c.data), c.hk() && a.yk());
        this.pa.sc()
    };
    a.prototype.Oz = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Lc() ? c.ro() ? a.gf(a.data.toString() + c.data) : a.data && c.data ? a.Ab(1) : a.Ab(0) : a.ro() && (a.data = c.ro() ? a.data + c.data : a.data + (Math.round(1E10 * c.data) / 1E10).toString());
        this.pa.sc()
    };
    a.prototype.cA = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Lc() && c.Lc() && (a.data || c.data ? a.Ab(1) : a.Ab(0));
        this.pa.sc()
    };
    a.prototype.Pz = function(a) {
        this.first.get(a);
        a.data ? this.Pc.get(a) : this.tp.get(a)
    };
    a.prototype.Rz = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Ab(a.data === c.data ? 1 : 0);
        this.pa.sc()
    };
    a.prototype.bA = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Ab(a.data !== c.data ? 1 : 0);
        this.pa.sc()
    };
    a.prototype.Yz = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Ab(a.data < c.data ? 1 : 0);
        this.pa.sc()
    };
    a.prototype.Zz = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Ab(a.data <= c.data ? 1 : 0);
        this.pa.sc()
    };
    a.prototype.Uz = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Ab(a.data > c.data ? 1 : 0);
        this.pa.sc()
    };
    a.prototype.Vz = function(a) {
        this.first.get(a);
        var c = this.pa.Cc();
        this.Pc.get(c);
        a.Ab(a.data >= c.data ? 1 : 0);
        this.pa.sc()
    };
    a.prototype.Sz = function(a) {
        var c = this.Qi.BA();
        fa(c) ? a.Xa(c) : a.gf(c)
    };
    Eb = a;
    c.prototype.hk = function() {
        return this.type === Ib.Yk
    };
    c.prototype.Lc = function() {
        return this.type === Ib.cl || this.type === Ib.Yk
    };
    c.prototype.ro = function() {
        return this.type === Ib.cq
    };
    c.prototype.yk = function() {
        this.hk() || (this.ro() && (this.data = parseFloat(this.data)), this.type = Ib.Yk)
    };
    c.prototype.Ab = function(a) {
        this.type =
                Ib.cl;
        this.data = Math.floor(a)
    };
    c.prototype.Xa = function(a) {
        this.type = Ib.Yk;
        this.data = a
    };
    c.prototype.gf = function(a) {
        this.type = Ib.cq;
        this.data = a
    };
    Hb = c;
    Ib = {cl: 0, Yk: 1, cq: 2}
})();
function N(a) {
    this.j = a;
    this.pe = []
}
N.prototype.Yc = function() {
    var a = {}, c, b, d, e, g, f, h, l;
    a.waits = [];
    var k = a.waits, n;
    c = 0;
    for (b = this.pe.length; c < b; c++) {
        f = this.pe[c];
        n = {t: f.time, ev: f.xl.Pa, sm: [], sols: {}};
        f.xl.rf[f.Pe] && (n.act = f.xl.rf[f.Pe].Pa);
        d = 0;
        for (e = f.Tb.length; d < e; d++)
            n.sm.push(f.Tb[d].Pa);
        for (g in f.ne)
            if (f.ne.hasOwnProperty(g)) {
                h = this.j.aa[parseInt(g, 10)];
                l = {sa: f.ne[g].pw, insts: []};
                d = 0;
                for (e = f.ne[g].Xi.length; d < e; d++)
                    l.insts.push(f.ne[g].Xi[d].uid);
                n.sols[h.Pa.toString()] = l
            }
        k.push(n)
    }
    return a
};
N.prototype.Cd = function(a) {
    a = a.waits;
    var c, b, d, e, g, f, h, l, k, n, m;
    c = this.pe.length = 0;
    for (b = a.length; c < b; c++)
        if (f = a[c], l = this.j.fu[f.ev.toString()]) {
            k = -1;
            d = 0;
            for (e = l.rf.length; d < e; d++)
                if (l.rf[d].Pa === f.act) {
                    k = d;
                    break
                }
            if (-1 !== k) {
                h = {ne: {}, Tb: [], tu: !1};
                h.time = f.t;
                h.xl = l;
                h.Pe = k;
                d = 0;
                for (e = f.sm.length; d < e; d++)
                    (l = this.j.ho(f.sm[d])) && h.Tb.push(l);
                for (g in f.sols)
                    if (f.sols.hasOwnProperty(g) && (l = this.j.ho(parseInt(g, 10)))) {
                        k = f.sols[g];
                        n = {pw: k.sa, Xi: []};
                        d = 0;
                        for (e = k.insts.length; d < e; d++)
                            (m = this.j.dk(k.insts[d])) &&
                                    n.Xi.push(m);
                        h.ne[l.index.toString()] = n
                    }
                this.pe.push(h)
            }
        }
};
(function() {
    function a() {
    }
    function c() {
    }
    function b() {
    }
    var d = N.prototype;
    a.prototype.Zx = w(!0);
    a.prototype.Yx = w(!0);
    a.prototype.ux = function() {
        var a = this.j.Bd();
        return a.Dq ? !1 : !a.fj
    };
    a.prototype.Et = w(!0);
    a.prototype.Nx = w(!0);
    a.prototype.Vp = w(!0);
    a.prototype.ay = w(!0);
    a.prototype.Up = w(!0);
    d.X = new a;
    c.prototype.Cx = function(a) {
        this.j.aj || this.j.Ng || (this.j.Ng = a)
    };
    var e = [], g = [];
    c.prototype.Dx = function(a) {
        if (!this.j.aj && !this.j.Ng)
            for (var b in this.j.mk)
                if (this.j.mk.hasOwnProperty(b) && Va(b, a)) {
                    this.j.Ng = this.j.mk[b];
                    break
                }
    };
    c.prototype.ky = function() {
        if (!this.j.aj && !this.j.Ng && this.j.sb) {
            this.j.Ng = this.j.sb;
            var a, b, c;
            a = 0;
            for (b = this.j.Hh.length; a < b; a++)
                c = this.j.Hh[a], this.j.pl[c.ek.toLowerCase()] = c.mo
        }
    };
    d.ub = new c;
    b.prototype["int"] = function(a, b) {
        H(b) ? (a.Ab(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.Ab(b)
    };
    b.prototype["float"] = function(a, b) {
        H(b) ? (a.Xa(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.Xa(b)
    };
    b.prototype.random = function(a, b, c) {
        void 0 === c ? a.Xa(Math.random() * b) : a.Xa(Math.random() * (c - b) + b)
    };
    b.prototype.sqrt =
            function(a, b) {
                a.Xa(Math.sqrt(b))
            };
    b.prototype.abs = function(a, b) {
        a.Xa(Math.abs(b))
    };
    b.prototype.round = function(a, b) {
        a.Ab(Math.round(b))
    };
    b.prototype.floor = function(a, b) {
        a.Ab(Math.floor(b))
    };
    b.prototype.ceil = function(a, b) {
        a.Ab(Math.ceil(b))
    };
    b.prototype.sin = function(a, b) {
        a.Xa(Math.sin(M(b)))
    };
    b.prototype.cos = function(a, b) {
        a.Xa(Math.cos(M(b)))
    };
    b.prototype.tan = function(a, b) {
        a.Xa(Math.tan(M(b)))
    };
    b.prototype.asin = function(a, b) {
        a.Xa(xa(Math.asin(b)))
    };
    b.prototype.acos = function(a, b) {
        a.Xa(xa(Math.acos(b)))
    };
    b.prototype.max = function(a) {
        var b = arguments[1], c, d;
        c = 2;
        for (d = arguments.length; c < d; c++)
            b < arguments[c] && (b = arguments[c]);
        a.Xa(b)
    };
    b.prototype.min = function(a) {
        var b = arguments[1], c, d;
        c = 2;
        for (d = arguments.length; c < d; c++)
            b > arguments[c] && (b = arguments[c]);
        a.Xa(b)
    };
    b.prototype.Ca = function(a) {
        a.Xa(this.j.Ca)
    };
    b.prototype.li = function(a) {
        a.Xa(this.j.li)
    };
    b.prototype.time = function(a) {
        a.Xa(this.j.bj.ac)
    };
    b.prototype.Ke = function(a) {
        a.Ab(this.j.Ke)
    };
    b.prototype.Vo = function(a) {
        a.Ab(this.j.Vo)
    };
    b.prototype.Mq = function(a) {
        a.Ab(this.j.Mq)
    };
    b.prototype.Sg = function(a, b, c, d, e) {
        a.Xa(Ha(b, c, d, e))
    };
    b.prototype.Q = function(a, b, c, d, e) {
        a.Xa(xa(Ca(b, c, d, e)))
    };
    b.prototype.kB = function(a) {
        a.Ab(this.j.sb.height)
    };
    b.prototype.left = function(a, b, c) {
        a.gf(H(b) ? b.substr(0, c) : "")
    };
    b.prototype.right = function(a, b, c) {
        a.gf(H(b) ? b.substr(b.length - c) : "")
    };
    b.prototype.replace = function(a, b, c, d) {
        H(b) && H(c) && H(d) ? a.gf(b.replace(RegExp(Na(c), "gi"), d)) : a.gf(H(b) ? b : "")
    };
    b.prototype.xq = function(a) {
        a.Xa(this.j.xq / 1E3)
    };
    b.prototype.Fo = function(a) {
        a.Xa(this.j.Fo)
    };
    d.ae =
            new b;
    d.dC = function() {
        var a, b, c, d, n, m, q = this.j.Bd();
        a = 0;
        for (c = this.pe.length; a < c; a++)
            if (d = this.pe[a], !(d.time > this.j.bj.ac)) {
                q.Te = d.xl;
                q.Pe = d.Pe;
                q.xc = 0;
                for (b in d.ne)
                    d.ne.hasOwnProperty(b) && (n = this.j.aa[parseInt(b, 10)].qb(), m = d.ne[b], n.Sb = m.pw, ua(n.G, m.Xi), n = m, n.Xi.length = 0, g.push(n));
                d.xl.bC();
                this.j.rq(d.Tb);
                d.tu = !0
            }
        b = a = 0;
        for (c = this.pe.length; a < c; a++)
            d = this.pe[a], this.pe[b] = d, d.tu ? (Ka(d.ne), d.Tb.length = 0, e.push(d)) : b++;
        this.pe.length = b
    }
})();
(function() {
    Xa = function(a) {
        var b = a[0].prototype, d = a[1], e = a[3], g = a[4], f = a[5], h = a[6], l = a[7];
        a = a[8];
        b.X || (b.X = {});
        b.ub || (b.ub = {});
        b.ae || (b.ae = {});
        var k = b.X, n = b.ub, b = b.ae;
        e && (k.SC = function(a, b) {
            return Jb(this.x, a, b)
        }, k.nx = function(a, b) {
            return Jb(this.y, a, b)
        }, k.$C = function() {
            var a = this.O;
            this.lb();
            var b = this.Qb;
            return!(b.right < a.Qc || b.bottom < a.Rc || b.left > a.Vd || b.top > a.Ud)
        }, k.aD = function() {
            this.lb();
            var a = this.Qb, b = this.j.sb;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, k.pD = function(a,
                b, c) {
            var d = this.qb(), e = d.We();
            if (!e.length)
                return!1;
            var f = e[0], g = f, h = Ha(f.x, f.y, b, c), l, k, n;
            l = 1;
            for (k = e.length; l < k; l++)
                if (f = e[l], n = Ha(f.x, f.y, b, c), 0 === a && n < h || 1 === a && n > h)
                    h = n, g = f;
            d.um(g);
            return!0
        }, n.JD = function(a) {
            this.x !== a && (this.x = a, this.$())
        }, n.KD = function(a) {
            this.y !== a && (this.y = a, this.$())
        }, n.FD = function(a, b) {
            if (this.x !== a || this.y !== b)
                this.x = a, this.y = b, this.$()
        }, n.GD = function(a, b) {
            var c = a.wA(this);
            if (c) {
                var d;
                c.dg ? (d = c.dg(b, !0), c = c.dg(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c)
                    this.x = d, this.y =
                            c, this.$()
            }
        }, n.hD = function(a) {
            0 !== a && (this.x += Math.cos(this.Q) * a, this.y += Math.sin(this.Q) * a, this.$())
        }, n.gD = function(a, b) {
            0 !== b && (this.x += Math.cos(M(a)) * b, this.y += Math.sin(M(a)) * b, this.$())
        }, b.QD = function(a) {
            a.Xa(this.x)
        }, b.RD = function(a) {
            a.Xa(this.y)
        }, b.Ca = function(a) {
            a.Xa(this.j.ck(this))
        });
        g && (k.RC = function(a, b) {
            return Jb(this.width, a, b)
        }, k.OC = function(a, b) {
            return Jb(this.height, a, b)
        }, n.oy = function(a) {
            this.width !== a && (this.width = a, this.$())
        }, n.CD = function(a) {
            this.height !== a && (this.height = a, this.$())
        },
                n.HD = function(a, b) {
                    if (this.width !== a || this.height !== b)
                        this.width = a, this.height = b, this.$()
                }, b.PD = function(a) {
            a.Xa(this.width)
        }, b.UC = function(a) {
            a.Xa(this.height)
        }, b.LC = function(a) {
            this.lb();
            a.Xa(this.Qb.left)
        }, b.NC = function(a) {
            this.lb();
            a.Xa(this.Qb.top)
        }, b.MC = function(a) {
            this.lb();
            a.Xa(this.Qb.right)
        }, b.KC = function(a) {
            this.lb();
            a.Xa(this.Qb.bottom)
        });
        f && (k.EC = function(a, b) {
            return Da(this.Q, M(b)) <= M(a)
        }, k.YC = function(a) {
            return Ga(this.Q, M(a))
        }, k.WC = function(a, b) {
            var c = Ba(a), d = Ba(b), e = za(this.Q);
            return Ga(d,
                    c) ? Ga(e, c) && !Ga(e, d) : !(!Ga(e, c) && Ga(e, d))
        }, n.jn = function(a) {
            a = M(ya(a));
            isNaN(a) || this.Q === a || (this.Q = a, this.$())
        }, n.vD = function(a) {
            0 === a || isNaN(a) || (this.Q += M(a), this.Q = za(this.Q), this.$())
        }, n.wD = function(a) {
            0 === a || isNaN(a) || (this.Q -= M(a), this.Q = za(this.Q), this.$())
        }, n.xD = function(a, b) {
            var c = Ea(this.Q, M(b), M(a));
            isNaN(c) || this.Q === c || (this.Q = c, this.$())
        }, n.yD = function(a, b, c) {
            a = Ea(this.Q, Math.atan2(c - this.y, b - this.x), M(a));
            isNaN(a) || this.Q === a || (this.Q = a, this.$())
        }, n.ID = function(a, b) {
            var c = Math.atan2(b -
                    this.y, a - this.x);
            isNaN(c) || this.Q === c || (this.Q = c, this.$())
        }, b.DC = function(a) {
            a.Xa(Aa(this.Q))
        });
        d || (k.PC = function(a, b, c) {
            return Jb(this.Bc[a], b, c)
        }, k.XC = function(a) {
            return this.Bc[a]
        }, k.qD = function(a, b) {
            var c = this.qb(), d = c.We();
            if (!d.length)
                return!1;
            var e = d[0], f = e, g = e.Bc[b], h, l, k;
            h = 1;
            for (l = d.length; h < l; h++)
                if (e = d[h], k = e.Bc[b], 0 === a && k < g || 1 === a && k > g)
                    g = k, f = e;
            c.um(f);
            return!0
        }, k.oD = function(a) {
            var b, c, d, e, f;
            if (this.j.Eu().Hl) {
                f = this.qb();
                if (f.Sb)
                    for (f.Sb = !1, f.G.length = 0, f.ib.length = 0, d = this.G, b = 0, c =
                            d.length; b < c; b++)
                        e = d[b], e.uid === a ? f.ib.push(e) : f.G.push(e);
                else {
                    d = b = 0;
                    for (c = f.G.length; b < c; b++)
                        e = f.G[b], f.G[d] = e, e.uid === a ? f.ib.push(e) : d++;
                    f.G.length = d
                }
                this.Vf();
                return!!f.G.length
            }
            e = this.j.dk(a);
            if (!e)
                return!1;
            f = this.qb();
            if (!f.Sb && -1 === f.G.indexOf(e))
                return!1;
            if (this.ra)
                for (a = e.type.Db, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this)
                        return f.um(e), this.Vf(), !0
                }
            else if (e.type === this)
                return f.um(e), this.Vf(), !0;
            return!1
        }, k.Px = w(!0), k.Rx = w(!0), n.DD = function(a, b) {
            var c = this.Bc;
            fa(c[a]) ? c[a] = fa(b) ? b : parseFloat(b) :
                    H(c[a]) && (c[a] = H(b) ? b : b.toString())
        }, n.CC = function(a, b) {
            var c = this.Bc;
            fa(c[a]) ? c[a] = fa(b) ? c[a] + b : c[a] + parseFloat(b) : H(c[a]) && (c[a] = H(b) ? c[a] + b : c[a] + b.toString())
        }, n.LD = function(a, b) {
            var c = this.Bc;
            fa(c[a]) && (c[a] = fa(b) ? c[a] - b : c[a] - parseFloat(b))
        }, n.zD = function(a, b) {
            this.Bc[a] = b ? 1 : 0
        }, n.ND = function(a) {
            this.Bc[a] = 1 - this.Bc[a]
        }, n.Jd = function() {
            this.j.Ij(this)
        }, n.Ex || (n.Ex = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.j.Do(this, b, !0);
            this.Tf && this.Tf();
            if (this.Fa)
                for (a = 0, b = this.Fa.length; a <
                        b; ++a)
                    c = this.Fa[a], c.Tf && c.Tf()
        }), b.TC = function(a) {
            var b = a.Ck.G.length, c, d, e;
            c = 0;
            for (d = this.j.Nd.length; c < d; c++)
                e = this.j.Nd[c], a.Ck.ra ? 0 <= e.type.Db.indexOf(a.Ck) && b++ : e.type === a.Ck && b++;
            a.Ab(b)
        }, b.sD = function(a) {
            a.Ab(a.Ck.qb().We().length)
        }, b.OD = function(a) {
            a.Ab(this.uid)
        }, b.VC = function(a) {
            a.Ab(this.Dl())
        }, b.jx || (b.jx = function(a) {
            a.gf(JSON.stringify(this.j.Fs(this, !0)))
        }));
        h && (k.cD = v("visible"), n.ny = function(a) {
            !a !== !this.visible && (this.visible = a, this.j.zb = !0)
        }, k.QC = function(a, b) {
            return Jb(Ua(100 *
                    this.opacity), a, b)
        }, n.ED = function(a) {
            a /= 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.j.zb = !0)
        }, b.Opacity = function(a) {
            a.Xa(Ua(100 * this.opacity))
        });
        l && (k.ZC = function(a) {
            return a ? this.O === a : !1
        }, k.rD = function(a) {
            var b = this.qb(), c = b.We();
            if (!c.length)
                return!1;
            var d = c[0], e = d, f, g;
            f = 1;
            for (g = c.length; f < g; f++)
                if (d = c[f], 0 === a) {
                    if (d.O.index > e.O.index || d.O.index === e.O.index && d.Ae() > e.Ae())
                        e = d
                } else if (d.O.index < e.O.index || d.O.index === e.O.index && d.Ae() < e.Ae())
                    e = d;
            b.um(e);
            return!0
        }, n.kD = function() {
            var a =
                    this.Ae();
            a !== this.O.G.length - 1 && (ta(this.O.G, a), this.O.G.push(this), this.j.zb = !0, this.O.qe = !0)
        }, n.iD = function() {
            var a = this.Ae();
            0 !== a && (ta(this.O.G, a), this.O.G.unshift(this), this.j.zb = !0, this.O.qe = !0)
        }, n.jD = function(a) {
            a && a != this.O && (ta(this.O.G, this.Ae()), this.O.qe = !0, this.O = a, this.Dj = a.G.length, a.G.push(this), this.j.zb = !0)
        }, n.TD = function(a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.oA(this);
                if (d && d.uid !== this.uid) {
                    this.O.index !== d.O.index && (ta(this.O.G, this.Ae()), this.O.qe = !0, this.O = d.O, this.Dj = d.O.G.length,
                            d.O.G.push(this));
                    var e = this.Ae(), d = d.Ae();
                    ta(this.O.G, e);
                    e < d && d--;
                    c && d++;
                    d === this.O.G.length ? this.O.G.push(this) : this.O.G.splice(d, 0, this);
                    this.O.qe = !0;
                    this.j.zb = !0
                }
            }
        }, b.eD = function(a) {
            a.Ab(this.O.Pv)
        }, b.dD = function(a) {
            a.gf(this.O.name)
        }, b.SD = function(a) {
            a.Ab(this.Ae())
        });
        a && (n.AD = function(a, b) {
            if (this.j.ba) {
                var c = this.type.Tq(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.Gh[c] !== d && (this.Gh[c] = d, this.xh(), this.j.zb = !0)
                }
            }
        }, n.BD = function(a, b, c) {
            if (this.j.ba) {
                var d = this.type.Tq(a);
                0 > d || (a = this.type.ya[d], d = this.Vb[d],
                        b = Math.floor(b), 0 > b || b >= d.length || (1 === this.j.ba.zA(a.Zc, b) && (c /= 100), d[b] !== c && (d[b] = c, a.Vc && (this.j.zb = !0))))
            }
        })
    };
    pb = function() {
        this.oq = this.mq = !0;
        this.type.on = !0;
        this.j.zb = !0;
        var a, b, d = this.nq;
        a = 0;
        for (b = d.length; a < b; ++a)
            d[a](this)
    };
    qb = function(a) {
        a && this.nq.push(a)
    };
    sb = function() {
        if (this.mq) {
            var a = this.Qb, b = this.ob;
            a.set(this.x, this.y, this.x + this.width, this.y + this.height);
            a.offset(-this.Pd * this.width, -this.Qd * this.height);
            this.Q ? (a.offset(-this.x, -this.y), b.sw(a, this.Q), b.offset(this.x, this.y),
                    b.gu(a)) : b.Am(a);
            a.normalize();
            this.mq = !1
        }
    };
    var a = new pa(0, 0, 0, 0);
    tb = function() {
        if (this.oq && this.Og) {
            this.lb();
            var c = this.type.Dn, b = this.Cn, d = this.Qb;
            a.set(c.mn(d.left), c.nn(d.top), c.mn(d.right), c.nn(d.bottom));
            b.Mz(a) || (b.right < b.left ? c.update(this, null, a) : c.update(this, b, a), b.copy(a), this.oq = !1)
        }
    };
    rb = function(a, b) {
        return this.Qb.Re(a, b) && this.ob.Re(a, b) ? this.Ja && !this.Ja.$i() ? (this.Ja.Hi(this.width, this.height, this.Q), this.Ja.Re(a - this.x, b - this.y)) : !0 : !1
    };
    lb = function() {
        this.type.Ap();
        return this.Ui
    };
    ub = function() {
        this.O.wC();
        return this.Dj
    };
    vb = function() {
        this.$a.length = 0;
        var a, b;
        a = 0;
        for (b = this.Gh.length; a < b; a++)
            this.Gh[a] && this.$a.push(this.type.ya[a]);
        this.Yw = !!this.$a.length
    };
    mb = function() {
        return"Inst" + this.fw
    };
    $a = function(a) {
        if (a && a.xf && a.type != this) {
            var b, d, e;
            b = 0;
            for (d = a.siblings.length; b < d; b++)
                if (e = a.siblings[b], e.type == this)
                    return e
        }
        a = this.qb().We();
        return a.length ? a[0] : null
    };
    ab = function(a) {
        var b = this.qb().We();
        return b.length ? b[a.Dl() % b.length] : null
    };
    Za = function() {
        if (this.Kk && !this.ra) {
            var a,
                    b;
            a = 0;
            for (b = this.G.length; a < b; a++)
                this.G[a].Ui = a;
            var d = a, e = this.j.Nd;
            a = 0;
            for (b = e.length; a < b; ++a)
                e[a].type === this && (e[a].Ui = d++);
            this.Kk = !1
        }
    };
    jb = function(a) {
        if (a < this.G.length)
            return this.G[a];
        a -= this.G.length;
        var b = this.j.Nd, d, e;
        d = 0;
        for (e = b.length; d < e; ++d)
            if (b[d].type === this) {
                if (0 === a)
                    return b[d];
                --a
            }
        return null
    };
    bb = function() {
        return this.ki[this.Rg]
    };
    cb = function() {
        this.Rg++;
        this.Rg === this.ki.length ? this.ki.push(new Ya(this)) : this.ki[this.Rg].Sb = !0
    };
    db = function() {
        this.Rg++;
        this.Rg === this.ki.length &&
                this.ki.push(new Ya(this));
        var a = this.ki[this.Rg], b = this.ki[this.Rg - 1];
        b.Sb ? a.Sb = !0 : (a.Sb = !1, ua(a.G, b.G), ua(a.ib, b.ib))
    };
    eb = function() {
        this.Rg--
    };
    fb = function(a) {
        var b, d, e, g, f, h = 0;
        if (!this.ra)
            for (b = 0, d = this.Db.length; b < d; b++)
                for (f = this.Db[b], e = 0, g = f.mc.length; e < g; e++) {
                    if (a === f.mc[e].name)
                        return this.ja.jv = h, f.mc[e];
                    h++
                }
        b = 0;
        for (d = this.mc.length; b < d; b++) {
            if (a === this.mc[b].name)
                return this.ja.jv = h, this.mc[b];
            h++
        }
        return null
    };
    gb = function(a) {
        return this.bo(a) ? this.ja.jv : -1
    };
    hb = function(a) {
        var b, d;
        b = 0;
        for (d =
                this.ya.length; b < d; b++)
            if (this.ya[b].name === a)
                return b;
        return-1
    };
    ib = function() {
        if (this.xf && !this.ra) {
            var a, b, d, e, g, f, h;
            this.Ap();
            f = this.qb();
            var l = f.Sb, k = (a = this.j.Bd()) && a.Te && a.Te.Ef;
            a = 0;
            for (b = this.Md.length; a < b; a++)
                if (g = this.Md[a], g !== this && (g.Ap(), h = g.qb(), h.Sb = l, !l)) {
                    h.G.length = f.G.length;
                    d = 0;
                    for (e = f.G.length; d < e; d++)
                        h.G[d] = g.Hu(f.G[d].Ui);
                    if (k)
                        for (h.ib.length = f.ib.length, d = 0, e = f.ib.length; d < e; d++)
                            h.ib[d] = g.Hu(f.ib[d].Ui)
                }
        }
    };
    kb = function() {
        return"Type" + this.Pa
    };
    Jb = function(a, b, d) {
        if ("undefined" ===
                typeof a || "undefined" === typeof d)
            return!1;
        switch (b) {
            case 0:
                return a === d;
            case 1:
                return a !== d;
            case 2:
                return a < d;
            case 3:
                return a <= d;
            case 4:
                return a > d;
            case 5:
                return a >= d;
            default:
                return!1
            }
    }
})();
var Rb = {};
function Vb(a) {
    this.j = a
}
(function() {
    function a() {
    }
    function c() {
    }
    var b = Vb.prototype;
    b.eb = function(a) {
        this.rc = a;
        this.j = a.j
    };
    b.eb.prototype.xa = t();
    b.Ra = function(a) {
        this.type = a;
        this.j = a.j
    };
    var d = b.Ra.prototype;
    d.xa = function() {
        this.j.kd ? A("[Construct 2] Button plugin not supported on this platform - the object will not be created") : (this.Il = 1 === this.W[0], this.Xe = document.createElement("input"), this.nb = this.Il ? document.createElement("label") : this.Xe, this.to = null, this.Xe.type = this.Il ? "checkbox" : "button", this.Xe.id = this.W[6], jQuery(this.nb).appendTo(this.j.Bn ?
                this.j.Bn : "body"), this.Il ? (jQuery(this.Xe).appendTo(this.nb), this.to = document.createTextNode(this.W[1]), jQuery(this.nb).append(this.to), this.Xe.checked = 0 !== this.W[7], jQuery(this.nb).css("font-family", "sans-serif"), jQuery(this.nb).css("display", "inline-block"), jQuery(this.nb).css("color", "black")) : this.Xe.value = this.W[1], this.nb.title = this.W[2], this.Xe.disabled = 0 === this.W[4], this.Sy = 0 !== this.W[5], this.Ni = !1, 0 === this.W[3] && (jQuery(this.nb).hide(), this.visible = !1, this.Ni = !0), this.Xe.onclick = function(a) {
            return function(b) {
                b.stopPropagation();
                a.j.gk = !0;
                a.j.trigger(Vb.prototype.X.Dt, a);
                a.j.gk = !1
            }
        }(this), this.nb.addEventListener("touchstart", function(a) {
            a.stopPropagation()
        }, !1), this.nb.addEventListener("touchmove", function(a) {
            a.stopPropagation()
        }, !1), this.nb.addEventListener("touchend", function(a) {
            a.stopPropagation()
        }, !1), jQuery(this.nb).mousedown(function(a) {
            a.stopPropagation()
        }), jQuery(this.nb).mouseup(function(a) {
            a.stopPropagation()
        }), jQuery(this.nb).keydown(function(a) {
            a.stopPropagation()
        }), jQuery(this.nb).keyup(function(a) {
            a.stopPropagation()
        }),
                this.tv = this.uv = this.kv = this.qv = this.sv = this.nv = 0, this.Uw(!0), this.j.Ts(this))
    };
    d.Yc = function() {
        var a = {tooltip: this.nb.title, disabled: !!this.Xe.disabled};
        this.Il ? (a.checked = !!this.Xe.checked, a.text = this.to.nodeValue) : a.text = this.nb.value;
        return a
    };
    d.Cd = function(a) {
        this.nb.title = a.tooltip;
        this.Xe.disabled = a.disabled;
        this.Il ? (this.Xe.checked = a.checked, this.to.nodeValue = a.text) : this.nb.value = a.text
    };
    d.nh = function() {
        this.j.kd || (jQuery(this.nb).remove(), this.nb = null)
    };
    d.sd = function() {
        this.Uw()
    };
    d.Uw = function(a) {
        if (!this.j.kd) {
            var b =
                    this.O.rb(this.x, this.y, !0), c = this.O.rb(this.x, this.y, !1), d = this.O.rb(this.x + this.width, this.y + this.height, !0), l = this.O.rb(this.x + this.width, this.y + this.height, !1);
            if (!this.visible || !this.O.visible || 0 >= d || 0 >= l || b >= this.j.width || c >= this.j.height)
                this.Ni || jQuery(this.nb).hide(), this.Ni = !0;
            else {
                1 > b && (b = 1);
                1 > c && (c = 1);
                d >= this.j.width && (d = this.j.width - 1);
                l >= this.j.height && (l = this.j.height - 1);
                var k = window.innerWidth, n = window.innerHeight;
                a || this.nv !== b || this.sv !== c || this.qv !== d || this.kv !== l || this.uv !== k ||
                        this.tv !== n ? (this.nv = b, this.sv = c, this.qv = d, this.kv = l, this.uv = k, this.tv = n, this.Ni && (jQuery(this.nb).show(), this.Ni = !1), a = Math.round(b) + jQuery(this.j.canvas).offset().left, k = Math.round(c) + jQuery(this.j.canvas).offset().top, jQuery(this.nb).css("position", "absolute"), jQuery(this.nb).offset({left: a, top: k}), jQuery(this.nb).width(Math.round(d - b)), jQuery(this.nb).height(Math.round(l - c)), this.Sy && jQuery(this.nb).css("font-size", this.O.Od(!0) / this.j.devicePixelRatio - 0.2 + "em")) : this.Ni && (jQuery(this.nb).show(),
                        this.Ni = !1)
            }
        }
    };
    d.vf = t();
    d.xe = t();
    a.prototype.Dt = w(!0);
    b.X = new a;
    c.prototype.ny = function(a) {
        this.j.kd || (this.visible = 0 !== a)
    };
    b.ub = new c;
    b.ae = new (t())
})();
function P(a) {
    this.j = a
}
(function() {
    function a() {
    }
    var c = P.prototype;
    c.eb = function(a) {
        this.rc = a;
        this.j = a.j
    };
    c.eb.prototype.xa = t();
    c.Ra = function(a) {
        this.type = a;
        this.j = a.j;
        this.so = Array(256);
        this.Bp = Array(256);
        this.ni = 0
    };
    var b = c.Ra.prototype;
    b.xa = function() {
        var a = this;
        this.j.kd || (jQuery(document).keydown(function(b) {
            a.ds(b)
        }), jQuery(document).keyup(function(b) {
            a.es(b)
        }))
    };
    var d = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    b.ds = function(a) {
        var b = !1;
        window != window.top && -1 < d.indexOf(a.which) && (a.preventDefault(), b = !0, a.stopPropagation());
        if (this.so[a.which])
            this.Bp[a.which] && !b && a.preventDefault();
        else {
            this.so[a.which] = !0;
            this.ni = a.which;
            this.j.gk = !0;
            this.j.trigger(P.prototype.X.Lx, this);
            var c = this.j.trigger(P.prototype.X.Nj, this), h = this.j.trigger(P.prototype.X.Ux, this);
            this.j.gk = !1;
            if (c || h)
                this.Bp[a.which] = !0, b || a.preventDefault()
        }
    };
    b.es = function(a) {
        this.so[a.which] = !1;
        this.ni = a.which;
        this.j.gk = !0;
        this.j.trigger(P.prototype.X.Mx, this);
        var b = this.j.trigger(P.prototype.X.Wx, this), c = this.j.trigger(P.prototype.X.Vx, this);
        this.j.gk = !1;
        if (b || c || this.Bp[a.which])
            this.Bp[a.which] = !0, a.preventDefault()
    };
    b.Yc = function() {
        return{triggerKey: this.ni}
    };
    b.Cd = function(a) {
        this.ni = a.triggerKey
    };
    a.prototype.dn = function(a) {
        return this.so[a]
    };
    a.prototype.Nj = function(a) {
        return a === this.ni
    };
    a.prototype.Lx = w(!0);
    a.prototype.Mx = w(!0);
    a.prototype.Wx = function(a) {
        return a === this.ni
    };
    a.prototype.Ux = function(a) {
        return a === this.ni
    };
    a.prototype.Vx = function(a) {
        return a === this.ni
    };
    c.X = new a;
    c.ub = new (t());
    c.ae = new (t())
})();
function Wb(a) {
    this.j = a
}
(function() {
    function a() {
        if (0 === this.Bq.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Jk ? b.drawImage(this.Ma, this.Dk, this.Ek, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.Ma, 0, 0, this.width, this.height);
            this.Bq = a.toDataURL("image/png")
        }
        return this.Bq
    }
    function c() {
    }
    function b(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        q.push(a)
    }
    function d(a, b) {
        return a < b ? "" + a + "," + b : "" + b + "," + a
    }
    function e(a, b, c, e) {
        b = b.uid;
        c = c.uid;
        var f = d(b, c);
        if (a.hasOwnProperty(f))
            a[f][2] =
                    e;
        else {
            var g = q.length ? q.pop() : [0, 0, 0];
            g[0] = b;
            g[1] = c;
            g[2] = e;
            a[f] = g
        }
    }
    function g(a, c, e) {
        c = d(c.uid, e.uid);
        a.hasOwnProperty(c) && (b(a[c]), delete a[c])
    }
    function f(a, b, c) {
        b = d(b.uid, c.uid);
        if (a.hasOwnProperty(b))
            return r = a[b][2], !0;
        r = -2;
        return!1
    }
    function h() {
    }
    var l = Wb.prototype;
    l.eb = function(a) {
        this.rc = a;
        this.j = a.j
    };
    var k = l.eb.prototype;
    k.xa = function() {
        if (!this.ra) {
            var b, c, d, e, f, g, m, h, l;
            this.sf = [];
            this.lo = !1;
            b = 0;
            for (c = this.Zd.length; b < c; b++) {
                f = this.Zd[b];
                m = {};
                m.name = f[0];
                m.speed = f[1];
                m.loop = f[2];
                m.As = f[3];
                m.gp = f[4];
                m.Yv = f[5];
                m.Pa = f[6];
                m.frames = [];
                d = 0;
                for (e = f[7].length; d < e; d++)
                    g = f[7][d], h = {}, h.Qs = g[0], h.Rs = g[1], h.Dk = g[2], h.Ek = g[3], h.width = g[4], h.height = g[5], h.duration = g[6], h.Pd = g[7], h.Qd = g[8], h.Xq = g[9], h.Xo = g[10], h.Zv = g[11], h.Jk = 0 !== h.width, h.Bq = "", h.ZD = a, l = {left: 0, top: 0, right: 1, bottom: 1}, h.Ls = l, h.Pb = null, (l = this.j.kA(g[0])) ? h.Ma = l : (h.Ma = new Image, h.Ma.idtkLoadDisposed = !0, h.Ma.src = g[0], h.Ma.ez = g[0], h.Ma.nu = g[1], h.Ma.$y = null, this.j.ax(h.Ma)), m.frames.push(h), this.sf.push(h);
                this.Zd[b] = m
            }
        }
    };
    k.vC = function() {
        var a,
                b, c;
        a = 0;
        for (b = this.G.length; a < b; a++)
            c = this.G[a], c.Kn = c.Se.Pb
    };
    k.Wo = function() {
        if (!this.ra) {
            var a, b, c;
            a = 0;
            for (b = this.sf.length; a < b; ++a)
                c = this.sf[a], c.Ma.$y = null, c.Pb = null
        }
    };
    k.hs = function() {
        if (!this.ra && this.G.length) {
            var a, b, c;
            a = 0;
            for (b = this.sf.length; a < b; ++a)
                c = this.sf[a], c.Pb = this.j.ba.Eo(c.Ma, !1, this.j.ab, c.Zv);
            this.vC()
        }
    };
    k.Er = function() {
        if (!this.ra && !this.lo && this.j.ba) {
            var a, b, c;
            a = 0;
            for (b = this.sf.length; a < b; ++a)
                c = this.sf[a], c.Pb = this.j.ba.Eo(c.Ma, !1, this.j.ab, c.Zv);
            this.lo = !0
        }
    };
    k.Ys = function() {
        if (!this.ra &&
                !this.G.length && this.lo) {
            var a, b, c;
            a = 0;
            for (b = this.sf.length; a < b; ++a)
                c = this.sf[a], this.j.ba.deleteTexture(c.Pb);
            this.lo = !1
        }
    };
    var n = [];
    k.qs = function(a) {
        var b, c, d;
        b = n.length = 0;
        for (c = this.sf.length; b < c; ++b)
            d = this.sf[b].Ma, -1 === n.indexOf(d) && (a.drawImage(d, 0, 0), n.push(d))
    };
    l.Ra = function(a) {
        this.type = a;
        this.j = a.j;
        a = this.type.Zd[0].frames[0].Xo;
        this.le ? this.Ja.Bm(a) : this.Ja = new Oa(a)
    };
    var m = l.Ra.prototype;
    m.xa = function() {
        this.visible = 0 === this.W[0];
        this.Og = 0 !== this.W[3];
        1 === this.type.Zd.length && 1 === this.type.Zd[0].frames.length ||
                0 === this.type.Zd[0].speed || this.j.Ts(this);
        this.Cb = this.Cu(this.W[1]) || this.type.Zd[0];
        this.da = this.W[2];
        0 > this.da && (this.da = 0);
        this.da >= this.Cb.frames.length && (this.da = this.Cb.frames.length - 1);
        var a = this.Cb.frames[this.da];
        this.Ja.Bm(a.Xo);
        this.Pd = a.Pd;
        this.Qd = a.Qd;
        this.ul = this.Cb.speed;
        this.le ? this.Uf.reset() : this.Uf = new Ma;
        this.Tg = this.Uf.ac;
        this.Ei = !0;
        this.Kg = 0;
        this.Di = !0;
        this.qq = this.Zt = "";
        this.cz = 0;
        this.pq = -1;
        this.type.Er();
        var b, c, d, e, f, g, m, a = 0;
        for (b = this.type.Zd.length; a < b; a++)
            for (e = this.type.Zd[a],
                    c = 0, d = e.frames.length; c < d; c++)
                f = e.frames[c], 0 === f.width && (f.width = f.Ma.width, f.height = f.Ma.height), f.Jk && (m = f.Ma, g = f.Ls, g.left = f.Dk / m.width, g.top = f.Ek / m.height, g.right = (f.Dk + f.width) / m.width, g.bottom = (f.Ek + f.height) / m.height, 0 === f.Dk && 0 === f.Ek && f.width === m.width && f.height === m.height && (f.Jk = !1));
        this.Se = this.Cb.frames[this.da];
        this.Kn = this.Se.Pb
    };
    m.Yc = function() {
        var a = {a: this.Cb.Pa, f: this.da, cas: this.ul, fs: this.Tg, ar: this.Kg, at: this.Uf.ac};
        this.Ei || (a.ap = this.Ei);
        this.Di || (a.af = this.Di);
        return a
    };
    m.Cd = function(a) {
        var b = this.mA(a.a);
        b && (this.Cb = b);
        this.da = a.f;
        0 > this.da && (this.da = 0);
        this.da >= this.Cb.frames.length && (this.da = this.Cb.frames.length - 1);
        this.ul = a.cas;
        this.Tg = a.fs;
        this.Kg = a.ar;
        this.Uf.reset();
        this.Uf.ac = a.at;
        this.Ei = a.hasOwnProperty("ap") ? a.ap : !0;
        this.Di = a.hasOwnProperty("af") ? a.af : !0;
        this.Se = this.Cb.frames[this.da];
        this.Kn = this.Se.Pb;
        this.Ja.Bm(this.Se.Xo);
        this.Pd = this.Se.Pd;
        this.Qd = this.Se.Qd
    };
    m.lq = function(a) {
        this.da = a ? 0 : this.Cb.frames.length - 1;
        this.Ei = !1;
        this.Zt = this.Cb.name;
        this.j.trigger(Wb.prototype.X.Kx,
                this);
        this.j.trigger(Wb.prototype.X.Jx, this);
        this.Kg = 0
    };
    m.aE = function() {
        return this.Uf.ac
    };
    m.sd = function() {
        this.Uf.add(this.j.ck(this));
        this.qq.length && this.kz();
        0 <= this.pq && this.lz();
        var a = this.Uf.ac, b = this.Cb, c = b.frames[this.da], d = c.duration / this.ul;
        this.Ei && a >= this.Tg + d && (this.Di ? this.da++ : this.da--, this.Tg += d, this.da >= b.frames.length && (b.Yv ? (this.Di = !1, this.da = b.frames.length - 2) : b.loop ? this.da = b.gp : (this.Kg++, this.Kg >= b.As ? this.lq(!1) : this.da = b.gp)), 0 > this.da && (b.Yv ? (this.da = 1, this.Di = !0, b.loop ||
                (this.Kg++, this.Kg >= b.As && this.lq(!0))) : b.loop ? this.da = b.gp : (this.Kg++, this.Kg >= b.As ? this.lq(!0) : this.da = b.gp)), 0 > this.da ? this.da = 0 : this.da >= b.frames.length && (this.da = b.frames.length - 1), a > this.Tg + b.frames[this.da].duration / this.ul && (this.Tg = a), a = b.frames[this.da], this.gl(c, a), this.j.zb = !0)
    };
    m.Cu = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Zd.length; b < c; b++)
            if (d = this.type.Zd[b], Va(d.name, a))
                return d;
        return null
    };
    m.mA = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Zd.length; b < c; b++)
            if (d = this.type.Zd[b], d.Pa ===
                    a)
                return d;
        return null
    };
    m.kz = function() {
        var a = this.Cb.frames[this.da], b = this.Cu(this.qq);
        this.qq = "";
        !b || Va(b.name, this.Cb.name) && this.Ei || (this.Cb = b, this.ul = b.speed, 0 > this.da && (this.da = 0), this.da >= this.Cb.frames.length && (this.da = this.Cb.frames.length - 1), 1 === this.cz && (this.da = 0), this.Ei = !0, this.Tg = this.Uf.ac, this.Di = !0, this.gl(a, this.Cb.frames[this.da]), this.j.zb = !0)
    };
    m.lz = function() {
        var a = this.Cb.frames[this.da], b = this.da;
        this.da = ma(this.pq);
        0 > this.da && (this.da = 0);
        this.da >= this.Cb.frames.length &&
                (this.da = this.Cb.frames.length - 1);
        b !== this.da && (this.gl(a, this.Cb.frames[this.da]), this.Tg = this.Uf.ac, this.j.zb = !0);
        this.pq = -1
    };
    m.gl = function(a, b) {
        var c = a.width, d = a.height, e = b.width, f = b.height;
        c != e && (this.width *= e / c);
        d != f && (this.height *= f / d);
        this.Pd = b.Pd;
        this.Qd = b.Qd;
        this.Ja.Bm(b.Xo);
        this.$();
        this.Se = b;
        this.Kn = b.Pb;
        c = 0;
        for (d = this.Fa.length; c < d; c++)
            e = this.Fa[c], e.Tv && e.Tv(a, b);
        this.j.trigger(Wb.prototype.X.gl, this)
    };
    m.vf = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Se, c = b.Jk, d = b.Ma, e = this.x, f =
                this.y, g = this.width, m = this.height;
        if (0 === this.Q && 0 <= g && 0 <= m)
            e -= this.Pd * g, f -= this.Qd * m, this.j.qg && (e = e + 0.5 | 0, f = f + 0.5 | 0), c ? a.drawImage(d, b.Dk, b.Ek, b.width, b.height, e, f, g, m) : a.drawImage(d, e, f, g, m);
        else {
            this.j.qg && (e = e + 0.5 | 0, f = f + 0.5 | 0);
            a.save();
            var h = 0 < g ? 1 : -1, l = 0 < m ? 1 : -1;
            a.translate(e, f);
            1 === h && 1 === l || a.scale(h, l);
            a.rotate(this.Q * h * l);
            e = 0 - this.Pd * ia(g);
            f = 0 - this.Qd * ia(m);
            c ? a.drawImage(d, b.Dk, b.Ek, b.width, b.height, e, f, ia(g), ia(m)) : a.drawImage(d, e, f, ia(g), ia(m));
            a.restore()
        }
    };
    m.xe = function(a) {
        a.me(this.Kn);
        a.Bj(this.opacity);
        var b = this.Se, c = this.ob;
        if (this.j.qg) {
            var d = (this.x + 0.5 | 0) - this.x, e = (this.y + 0.5 | 0) - this.y;
            b.Jk ? a.tg(c.cc + d, c.ec + e, c.td + d, c.ud + e, c.gd + d, c.hd + e, c.ed + d, c.fd + e, b.Ls) : a.cp(c.cc + d, c.ec + e, c.td + d, c.ud + e, c.gd + d, c.hd + e, c.ed + d, c.fd + e)
        } else
            b.Jk ? a.tg(c.cc, c.ec, c.td, c.ud, c.gd, c.hd, c.ed, c.fd, b.Ls) : a.cp(c.cc, c.ec, c.td, c.ud, c.gd, c.hd, c.ed, c.fd)
    };
    m.qA = function(a) {
        var b = this.Se, c, d;
        c = 0;
        for (d = b.Xq.length; c < d; c++)
            if (Va(a, b.Xq[c][0]))
                return c;
        return-1
    };
    m.dg = function(a, b) {
        var c = this.Se, d = c.Xq, e;
        e = H(a) ?
                this.qA(a) : a - 1;
        e = ma(e);
        if (0 > e || e >= d.length)
            return b ? this.x : this.y;
        var f = (d[e][1] - c.Pd) * this.width, d = d[e][2], d = (d - c.Qd) * this.height, c = Math.cos(this.Q);
        e = Math.sin(this.Q);
        var g = f * c - d * e, d = d * c + f * e, f = g + this.x, d = d + this.y;
        return b ? f : d
    };
    var q = [], r = -2, p = [];
    c.prototype.Ox = function(a) {
        if (!a)
            return!1;
        var c = this.j, d = c.Eu(), m = d.type;
        d.ja.tq || (d.ja.tq = {}, c.jq(function(a) {
            return function(c) {
                c = c.uid;
                var d, e;
                for (d in a)
                    a.hasOwnProperty(d) && (e = a[d], e[0] === c || e[1] === c) && (b(a[d]), delete a[d])
            }
        }(d.ja.tq)));
        var d = d.ja.tq,
                h = m.qb(), l = a.qb(), h = h.We(), k, n, q, s, u, O, Q, aa = this.j.Ke, L = aa - 1, W = c.Bd().Te;
        for (n = 0; n < h.length; n++) {
            q = h[n];
            l.Sb ? (q.lb(), this.j.Du(q.O, a, q.Qb, p), k = p) : k = l.We();
            for (s = 0; s < k.length; s++)
                u = k[s], c.kf(q, u) || c.dz(q, u) ? (O = f(d, q, u), O = !O || r < L, e(d, q, u, aa), O && (c.$o(W.Tb), O = m.qb(), Q = a.qb(), O.Sb = !1, Q.Sb = !1, m === a ? (O.G.length = 2, O.G[0] = q, O.G[1] = u, m.Vf()) : (O.G.length = 1, Q.G.length = 1, O.G[0] = q, Q.G[0] = u, m.Vf(), a.Vf()), W.cC(), c.xj(W.Tb))) : g(d, q, u);
            p.length = 0
        }
        return!1
    };
    var s = new da, u = !1;
    k.finish = function(a) {
        if (u) {
            if (a) {
                var b =
                        this.j.Bd().Te.Ef;
                a = null.qb();
                var c = s.oi(), d, e;
                if (a.Sb) {
                    a.Sb = !1;
                    a.G.length = c.length;
                    d = 0;
                    for (e = c.length; d < e; d++)
                        a.G[d] = c[d];
                    if (b)
                        for (d = a.ib.length = 0, e = null.G.length; d < e; d++)
                            c = null.G[d], s.contains(c) || a.ib.push(c)
                } else if (b)
                    for (b = a.G.length, a.G.length = b + c.length, d = 0, e = c.length; d < e; d++)
                        a.G[b + d] = c[d], wa(a.ib, c[d]);
                else
                    ua(a.G, c);
                null.Vf()
            }
            s.clear();
            u = !1
        }
    };
    c.prototype.Jx = function(a) {
        return Va(this.Zt, a)
    };
    c.prototype.Kx = w(!0);
    c.prototype.gl = w(!0);
    l.X = new c;
    h.prototype.Ot = function(a) {
        a = ia(this.width) * (0 ===
                a ? -1 : 1);
        this.width !== a && (this.width = a, this.$())
    };
    l.ub = new h;
    l.ae = new (t())
})();
function Xb(a) {
    this.j = a
}
(function() {
    function a() {
        return g.length ? g.pop() : {}
    }
    function c(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++)
            g.push(a[b]);
        a.length = 0
    }
    var b = Xb.prototype;
    b.xa = function() {
        b.ub.oy = function(a) {
            this.width !== a && (this.width = a, this.Mk = !0, this.$())
        }
    };
    b.eb = function(a) {
        this.rc = a;
        this.j = a.j
    };
    var d = b.eb.prototype;
    d.xa = t();
    d.Wo = function() {
        if (!this.ra) {
            var a, b, c;
            a = 0;
            for (b = this.G.length; a < b; a++)
                c = this.G[a], c.pg = null, c.vj = null, c.ie = null
        }
    };
    b.Ra = function(a) {
        this.type = a;
        this.j = a.j;
        this.le ? this.Vh.length = 0 : this.Vh = [];
        this.Mk =
                !0
    };
    d = b.Ra.prototype;
    d.xa = function() {
        this.text = this.W[0];
        this.visible = 0 === this.W[1];
        this.font = this.W[2];
        this.color = this.W[3];
        this.ko = this.W[4];
        this.Cp = this.W[5];
        this.ht = 0 === this.W[7];
        this.xr = this.yo = this.width;
        this.xo = this.height;
        this.Br = this.W[8];
        this.Zn = this.Zj = "";
        this.Hw = this.Iw = this.xm = 0;
        this.TB();
        this.ie = this.vj = this.pg = null;
        this.Nv = !1;
        this.Sl = this.j.Ke;
        this.le ? this.ei.set(0, 0, 1, 1) : this.ei = new pa(0, 0, 1, 1);
        this.j.ba && this.j.Ts(this)
    };
    d.TB = function() {
        var a = this.font.split(" "), b;
        for (b = 0; b < a.length; b++)
            if ("pt" ===
                    a[b].substr(a[b].length - 2, 2)) {
                this.xm = parseInt(a[b].substr(0, a[b].length - 2));
                this.vs = Math.ceil(96 * (this.xm / 72)) + 4;
                0 < b && (this.Zn = a[b - 1]);
                this.Zj = a[b + 1];
                for (b += 2; b < a.length; b++)
                    this.Zj += " " + a[b];
                break
            }
    };
    d.Yc = function() {
        return{t: this.text, f: this.font, c: this.color, ha: this.ko, va: this.Cp, wr: this.ht, lho: this.Br, fn: this.Zj, fs: this.Zn, ps: this.xm, pxh: this.vs, tw: this.Iw, th: this.Hw, lrt: this.Sl}
    };
    d.Cd = function(a) {
        this.text = a.t;
        this.font = a.f;
        this.color = a.c;
        this.ko = a.ha;
        this.Cp = a.va;
        this.ht = a.wr;
        this.Br = a.lho;
        this.Zj =
                a.fn;
        this.Zn = a.fs;
        this.xm = a.ps;
        this.vs = a.pxh;
        this.Iw = a.tw;
        this.Hw = a.th;
        this.Sl = a.lrt;
        this.Mk = !0;
        this.xr = this.yo = this.width;
        this.xo = this.height
    };
    d.sd = function() {
        if (this.j.ba && this.ie && 300 <= this.j.Ke - this.Sl) {
            var a = this.O;
            this.lb();
            var b = this.Qb;
            if (b.right < a.Qc || b.bottom < a.Rc || b.left > a.Vd || b.top > a.Ud)
                this.j.ba.deleteTexture(this.ie), this.pg = this.vj = this.ie = null
        }
    };
    d.nh = function() {
        this.pg = this.vj = null;
        this.j.ba && this.ie && this.j.ba.deleteTexture(this.ie);
        this.ie = null
    };
    d.lE = function() {
        this.font = this.Zn +
                " " + this.xm.toString() + "pt " + this.Zj;
        this.Mk = !0;
        this.j.zb = !0
    };
    d.vf = function(a, b) {
        a.font = this.font;
        a.textBaseline = "top";
        a.fillStyle = this.color;
        a.globalAlpha = b ? 1 : this.opacity;
        var c = 1;
        b && (c = this.O.Od(), a.save(), a.scale(c, c));
        if (this.Mk || this.width !== this.xr)
            this.type.rc.Ay(this.text, this.Vh, a, this.width, this.ht), this.Mk = !1, this.xr = this.width;
        this.lb();
        var c = b ? 0 : this.ob.cc, d = b ? 0 : this.ob.ec;
        this.j.qg && (c = c + 0.5 | 0, d = d + 0.5 | 0);
        0 === this.Q || b || (a.save(), a.translate(c, d), a.rotate(this.Q), d = c = 0);
        var e = d + this.height,
                g = this.vs, g = g + this.Br, q, r;
        1 === this.Cp ? d += Math.max(this.height / 2 - this.Vh.length * g / 2, 0) : 2 === this.Cp && (d += Math.max(this.height - this.Vh.length * g - 2, 0));
        for (r = 0; r < this.Vh.length && !(q = c, 1 === this.ko?q = c + (this.width - this.Vh[r].width) / 2:2 === this.ko && (q = c + (this.width - this.Vh[r].width)), a.fillText(this.Vh[r].text, q, d), d += g, d >= e - g); r++)
            ;
        (0 !== this.Q || b) && a.restore();
        this.Sl = this.j.Ke
    };
    d.xe = function(a) {
        if (!(1 > this.width || 1 > this.height)) {
            var b = this.Mk || this.Nv;
            this.Nv = !1;
            var c = this.O.Od(), d = this.O.ze(), e = this.ei,
                    g = c * this.width, q = c * this.height, r = Math.ceil(g), p = Math.ceil(q), s = this.j.Oa / 2, u = this.j.Na / 2;
            this.vj || (this.pg = document.createElement("canvas"), this.pg.width = r, this.pg.height = p, this.yo = r, this.xo = p, b = !0, this.vj = this.pg.getContext("2d"));
            if (r !== this.yo || p !== this.xo)
                this.pg.width = r, this.pg.height = p, this.ie && (a.deleteTexture(this.ie), this.ie = null), b = !0;
            b && (this.vj.clearRect(0, 0, r, p), this.vf(this.vj, !0), this.ie || (this.ie = a.Pg(r, p, this.j.ab, this.j.Rh)), a.BC(this.pg, this.ie, this.j.Rh));
            this.yo = r;
            this.xo = p;
            a.me(this.ie);
            a.Bj(this.opacity);
            a.wg();
            a.translate(-s, -u);
            a.Cg();
            var x = this.ob, z = this.j.devicePixelRatio;
            this.j.devicePixelRatio = 1;
            var b = this.O.rb(x.cc, x.ec, !0, !0), s = this.O.rb(x.cc, x.ec, !1, !0), u = this.O.rb(x.td, x.ud, !0, !0), E = this.O.rb(x.td, x.ud, !1, !0), G = this.O.rb(x.gd, x.hd, !0, !0), F = this.O.rb(x.gd, x.hd, !1, !0), C = this.O.rb(x.ed, x.fd, !0, !0), x = this.O.rb(x.ed, x.fd, !1, !0);
            this.j.devicePixelRatio = z;
            if (this.j.qg || 0 === this.Q && 0 === d)
                var z = (b + 0.5 | 0) - b, B = (s + 0.5 | 0) - s, b = b + z, s = s + B, u = u + z, E = E + B, G = G + z, F = F + B, C = C + z, x = x + B;
            0 === this.Q &&
                    0 === d ? (u = b + r, E = s, G = u, F = s + p, C = b, x = F, e.right = 1, e.bottom = 1) : (e.right = g / r, e.bottom = q / p);
            a.tg(b, s, u, E, G, F, C, x, e);
            a.wg();
            a.scale(c, c);
            a.Cs(-this.O.ze());
            a.translate((this.O.Qc + this.O.Vd) / -2, (this.O.Rc + this.O.Ud) / -2);
            a.Cg();
            this.Sl = this.j.Ke
        }
    };
    var e = [];
    b.xy = function(a) {
        e.length = 0;
        for (var b = "", c, d = 0; d < a.length; )
            if (c = a.charAt(d), "\n" === c)
                b.length && (e.push(b), b = ""), e.push("\n"), ++d;
            else if (" " === c || "\t" === c || "-" === c) {
                do
                    b += a.charAt(d), d++;
                while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
                e.push(b);
                b = ""
            } else
                d < a.length && (b += c, d++);
        b.length && e.push(b)
    };
    var g = [];
    b.Ay = function(b, d, e, g, n) {
        if (b && b.length)
            if (2 >= g)
                c(d);
            else {
                if (100 >= b.length && -1 === b.indexOf("\n")) {
                    var m = e.measureText(b).width;
                    if (m <= g) {
                        c(d);
                        d.push(a());
                        d[0].text = b;
                        d[0].width = m;
                        return
                    }
                }
                this.By(b, d, e, g, n)
            }
        else
            c(d)
    };
    b.By = function(b, c, d, k, n) {
        n && (this.xy(b), b = e);
        var m = "", q, r, p, s = 0;
        for (p = 0; p < b.length; p++)
            "\n" === b[p] ? (s >= c.length && c.push(a()), r = c[s], r.text = m, r.width = d.measureText(m).width, s++, m = "") : (q = m, m += b[p], r = d.measureText(m).width, r >=
                    k && (s >= c.length && c.push(a()), r = c[s], r.text = q, r.width = d.measureText(q).width, s++, m = b[p], n || " " !== m || (m = "")));
        m.length && (s >= c.length && c.push(a()), r = c[s], r.text = m, r.width = d.measureText(m).width, s++);
        for (p = s; p < c.length; p++)
            g.push(c[p]);
        c.length = s
    };
    b.X = new (t());
    b.ub = new (t());
    b.ae = new (t())
})();
function Yb(a) {
    this.j = a
}
(function() {
    var a = Yb.prototype;
    a.eb = function(a) {
        this.rc = a;
        this.j = a.j
    };
    var c = a.eb.prototype;
    c.xa = function() {
        this.ra || (this.Ma = new Image, this.Ma.idtkLoadDisposed = !0, this.Ma.src = this.Qs, this.Ma.nu = this.Rs, this.j.ax(this.Ma), this.Pb = this.pattern = null)
    };
    c.Wo = function() {
        this.ra || (this.Pb = null)
    };
    c.hs = function() {
        if (!this.ra && this.G.length) {
            this.Pb || (this.Pb = this.j.ba.Eo(this.Ma, !0, this.j.ab, this.Ss));
            var a, c;
            a = 0;
            for (c = this.G.length; a < c; a++)
                this.G[a].Pb = this.Pb
        }
    };
    c.Er = function() {
        this.ra || this.Pb || !this.j.ba ||
                (this.Pb = this.j.ba.Eo(this.Ma, !0, this.j.ab, this.Ss))
    };
    c.Ys = function() {
        this.ra || this.G.length || !this.Pb || (this.j.ba.deleteTexture(this.Pb), this.Pb = null)
    };
    c.qs = function(a) {
        a.drawImage(this.Ma, 0, 0)
    };
    a.Ra = function(a) {
        this.type = a;
        this.j = a.j
    };
    c = a.Ra.prototype;
    c.xa = function() {
        this.visible = 0 === this.W[0];
        this.ei = new pa(0, 0, 0, 0);
        this.Pu = !1;
        this.Ma = this.type.Ma;
        this.j.ba ? (this.type.Er(), this.Pb = this.type.Pb) : (this.type.pattern || (this.type.pattern = this.j.mb.createPattern(this.type.Ma, "repeat")), this.pattern =
                this.type.pattern)
    };
    c.Tf = function() {
        this.Pu = !1;
        this.Ma = this.type.Ma
    };
    c.nh = function() {
        this.j.ba && this.Pu && this.Pb && (this.j.ba.deleteTexture(this.Pb), this.Pb = null)
    };
    c.vf = function(a) {
        a.globalAlpha = this.opacity;
        a.save();
        a.fillStyle = this.pattern;
        var c = this.x, e = this.y;
        this.j.qg && (c = c + 0.5 | 0, e = e + 0.5 | 0);
        var g = -(this.Pd * this.width), f = -(this.Qd * this.height), h = g % this.Ma.width, l = f % this.Ma.height;
        0 > h && (h += this.Ma.width);
        0 > l && (l += this.Ma.height);
        a.translate(c, e);
        a.rotate(this.Q);
        a.translate(h, l);
        a.fillRect(g - h,
                f - l, this.width, this.height);
        a.restore()
    };
    c.xe = function(a) {
        a.me(this.Pb);
        a.Bj(this.opacity);
        var c = this.ei;
        c.right = this.width / this.Ma.width;
        c.bottom = this.height / this.Ma.height;
        var e = this.ob;
        if (this.j.qg) {
            var g = (this.x + 0.5 | 0) - this.x, f = (this.y + 0.5 | 0) - this.y;
            a.tg(e.cc + g, e.ec + f, e.td + g, e.ud + f, e.gd + g, e.hd + f, e.ed + g, e.fd + f, c)
        } else
            a.tg(e.cc, e.ec, e.td, e.ud, e.gd, e.hd, e.ed, e.fd, c)
    };
    a.X = new (t());
    a.ub = new (t());
    a.ae = new (t())
})();
function Zb(a) {
    this.j = a
}
(function() {
    function a() {
    }
    var c = Zb.prototype;
    c.eb = function(a) {
        this.rc = a;
        this.j = a.j
    };
    c.eb.prototype.xa = t();
    c.Ra = function(a) {
        this.type = a;
        this.j = a.j
    };
    var b = c.Ra.prototype, d = !1;
    b.xa = function() {
        this.hr = this.j.ir;
        this.Lw = 0;
        this.gr = 0 !== this.W[0];
        this.ww = 0 !== this.W[1];
        this.yw = 0 !== this.W[2];
        this.xw = 0 !== this.W[3];
        this.qu = null;
        var a = this;
        if (this.hr) {
            var b = Windows.ApplicationModel.Store;
            this.qu = this.gr ? b.CurrentAppSimulator : b.CurrentApp;
            this.gr && (new Windows.UI.Popups.MessageDialog("Note: this Windows 8 app is in Test Mode, designed for testing purchases. Before publishing, be sure to set Test Mode to 'No' in the Windows 8 object's properties.")).showAsync();
            window.addEventListener("resize", function() {
                a.Lw = Windows.UI.ViewManagement.ApplicationView.value;
                a.j.trigger(Zb.prototype.X.fy, a)
            });
            Windows.Storage.ApplicationData.current.addEventListener("datachanged", function() {
                a.j.trigger(Zb.prototype.X.Qx, a)
            });
            Windows.ApplicationModel.DataTransfer.DataTransferManager.getForCurrentView().addEventListener("datarequested", function(b) {
                d = !1;
                a.j.trigger(Zb.prototype.X.cy, a);
                d || b.request.failWithDisplayText("Try selecting a different option before sharing.")
            });
            this.qu.licenseInformation.addEventListener("licensechanged",
                    function() {
                        a.j.trigger(Zb.prototype.X.$x, a)
                    });
            (this.ww || this.yw || this.xw) && WinJS.Application.addEventListener("settings", function(b) {
                var c = {};
                a.ww && (c.about = {title: "About", href: "/about.html"});
                a.yw && (c.support = {title: "Support", href: "/support.html"});
                a.xw && (c.privacy = {title: "Privacy Policy", href: "/privacy.html"});
                b.detail.applicationcommands = c;
                WinJS.UI.SettingsFlyout.populateSettings(b)
            });
            this.gr && Windows.ApplicationModel.Package.current.installedLocation.getFileAsync("WindowsStoreProxy.xml").done(function(a) {
                Windows.ApplicationModel.Store.CurrentAppSimulator.reloadSimulatorAsync(a).done(function() {
                    console.log("[Construct 2] Test mode; loaded WindowsStoreProxy.xml")
                },
                        function(a) {
                            console.log("[Construct 2] Error loading WindowsStoreProxy.xml: " + a)
                        })
            }, function(a) {
                console.log("[Construct 2] Error loading WindowsStoreProxy.xml: " + a)
            })
        }
    };
    b.fE = function() {
        return this.hr ? Windows.Storage.ApplicationData.current.roamingSettings.values : null
    };
    a.prototype.fy = function(a) {
        return this.hr ? a === this.Lw : !1
    };
    a.prototype.Qx = w(!0);
    a.prototype.cy = w(!0);
    a.prototype.$x = w(!0);
    c.X = new a;
    c.ub = new (t());
    c.ae = new (t())
})();
function R(a, c) {
    for (var b in c.prototype)
        c.prototype.hasOwnProperty(b) && (a.prototype[b] = c.prototype[b])
}
if (navigator.isCocoonJS && "undefined" !== typeof window.cr_cjs_accelerated_physics)
    A("Using CocoonJS native physics"), window.ext && "undefined" !== typeof window.ext.IDTK_SRV_BOX2D ? function() {
        function a(a, b, d, e) {
            this.type = c.Xj;
            this.wb = new n;
            this.xb = new n;
            this.Mf = null;
            void 0 !== a && (this.L = a);
            void 0 !== b && (this.N = b);
            void 0 !== d && this.wb.I(d);
            void 0 !== e && this.xb.I(e);
            this.Bk = this.Kv = this.Zs = this.Jr = this.vg = 0;
            this.Yj = this.Oi = !1
        }
        function c(a) {
            this.L = a.L;
            this.N = a.N;
            this.Mf = a.Mf;
            this.type = a.type;
            this.next = null
        }
        function b(a,
                b) {
            this.Ho = [];
            this.Gb = [];
            this.nj = [];
            this.dh = null;
            this.zB = [];
            this.Yb = window.ext.IDTK_SRV_BOX2D.makeCall("createWorld", a.x, a.y, b)
        }
        function d() {
        }
        function e(a, b, c) {
            this.Jb = a;
            this.Fb = b;
            this.HB = c
        }
        function g(a, b) {
            var c = a.Mf;
            a.Mf = null;
            this.Ha = b;
            this.D = new l(a.position, k.Jj(a.Q));
            this.em = [];
            this.Zl = a.Vc;
            a.type === g.ve && (a.uf = 0);
            this.pc = window.ext.IDTK_SRV_BOX2D.makeCall("createBody", b.Yb, a);
            a.Mf = c
        }
        function f(a, b, c, d) {
            this.cm = a;
            this.Or = c;
            this.kh = {};
            this.kh.Ed = n.B(0, 0);
            this.Ko = !1;
            this.Io = d.uf;
            this.Qr = d.cg;
            this.lm =
                    d.xg;
            this.Ko = d.er
        }
        function h() {
        }
        function l(a, b) {
            this.position = n.B(0, 0);
            this.u = new k;
            void 0 === a && (a = null);
            void 0 === b && (b = null);
            a && (this.position.I(a), this.u.of(b))
        }
        function k() {
            this.k = n.B(0, 0);
            this.m = n.B(0, 0);
            this.Eh()
        }
        function n(a, b) {
            void 0 === a && (a = 0);
            void 0 === b && (b = 0);
            this.x = a;
            this.y = b
        }
        S = n;
        n.Jg = [];
        n.B = function(a, b) {
            if (0 < S.Jg.length) {
                var c = S.Jg.pop();
                c.Set(a, b);
                return c
            }
            return new S(a, b)
        };
        n.fc = function(a) {
            1E4 > S.Jg.length && S.Jg.push(a)
        };
        n.prototype.ia = function() {
            this.y = this.x = 0
        };
        n.prototype.Set = function(a,
                b) {
            void 0 === a && (a = 0);
            void 0 === b && (b = 0);
            this.x = a;
            this.y = b
        };
        n.prototype.I = function(a) {
            this.x = a.x;
            this.y = a.y
        };
        n.fD = function(a, b) {
            void 0 === a && (a = 0);
            void 0 === b && (b = 0);
            return n.B(a, b)
        };
        n.prototype.lc = function() {
            return n.B(this.x, this.y)
        };
        n.prototype.Fg = function(a) {
            this.x += a.x;
            this.y += a.y
        };
        n.prototype.dq = function(a) {
            this.x -= a.x;
            this.y -= a.y
        };
        n.prototype.xd = function(a) {
            void 0 === a && (a = 0);
            this.x *= a;
            this.y *= a
        };
        n.prototype.Rf = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        };
        n.prototype.hn = function() {
            return this.x *
                    this.x + this.y * this.y
        };
        n.prototype.yd = function() {
            var a = Math.sqrt(this.x * this.x + this.y * this.y);
            if (a < Number.MIN_VALUE)
                return 0;
            var b = 1 / a;
            this.x *= b;
            this.y *= b;
            return a
        };
        n.prototype.Tp = function() {
            this.x = -this.x;
            this.y = -this.y
        };
        U = k;
        k.Jj = function(a) {
            void 0 === a && (a = 0);
            var b = new k;
            b.Set(a);
            return b
        };
        k.Qf = function(a, b) {
            var c = new k;
            c.$p(a, b);
            return c
        };
        k.prototype.Set = function(a) {
            void 0 === a && (a = 0);
            var b = Math.cos(a);
            a = Math.sin(a);
            this.k.x = b;
            this.m.x = -a;
            this.k.y = a;
            this.m.y = b
        };
        k.prototype.$p = function(a, b) {
            this.k.I(a);
            this.m.I(b)
        };
        k.prototype.lc = function() {
            var a = new k;
            a.of(this);
            return a
        };
        k.prototype.of = function(a) {
            this.k.I(a.k);
            this.m.I(a.m)
        };
        k.prototype.Om = function(a) {
            this.k.x += a.k.x;
            this.k.y += a.k.y;
            this.m.x += a.m.x;
            this.m.y += a.m.y
        };
        k.prototype.Eh = function() {
            this.k.x = 1;
            this.m.x = 0;
            this.k.y = 0;
            this.m.y = 1
        };
        k.prototype.ia = function() {
            this.k.x = 0;
            this.m.x = 0;
            this.k.y = 0;
            this.m.y = 0
        };
        k.prototype.vd = function() {
            return Math.atan2(this.k.y, this.k.x)
        };
        k.prototype.Mp = function(a) {
            var b = this.k.x, c = this.m.x, d = this.k.y, e = this.m.y,
                    f = b * e - c * d;
            0 !== f && (f = 1 / f);
            a.k.x = f * e;
            a.m.x = -f * c;
            a.k.y = -f * d;
            a.m.y = f * b;
            return a
        };
        k.prototype.Fh = function(a, b, c) {
            void 0 === b && (b = 0);
            void 0 === c && (c = 0);
            var d = this.k.x, e = this.m.x, f = this.k.y, g = this.m.y, h = d * g - e * f;
            0 !== h && (h = 1 / h);
            a.x = h * (g * b - e * c);
            a.y = h * (d * c - f * b);
            return a
        };
        k.prototype.Eg = function() {
            this.k.Eg();
            this.m.Eg()
        };
        $b = l;
        l.prototype.gc = function(a, b) {
            this.position.I(a);
            this.u.of(b)
        };
        l.prototype.Eh = function() {
            this.position.ia();
            this.u.Eh()
        };
        l.prototype.Set = function(a) {
            this.position.I(a.position);
            this.u.of(a.u)
        };
        l.prototype.jn = function() {
            return Math.atan2(this.u.k.y, this.u.k.x)
        };
        V = h;
        h.gn = function(a) {
            void 0 === a && (a = 0);
            return isFinite(a)
        };
        h.Hb = function(a, b) {
            return a.x * b.x + a.y * b.y
        };
        h.qi = function(a, b) {
            return a.x * b.y - a.y * b.x
        };
        h.Gg = function(a, b) {
            void 0 === b && (b = 0);
            return n.B(b * a.y, -b * a.x)
        };
        h.Ip = function(a, b) {
            void 0 === a && (a = 0);
            return n.B(-a * b.y, a * b.x)
        };
        h.Ub = function(a, b) {
            return n.B(a.k.x * b.x + a.m.x * b.y, a.k.y * b.x + a.m.y * b.y)
        };
        h.Hg = function(a, b) {
            return n.B(h.Hb(b, a.k), h.Hb(b, a.m))
        };
        h.vc = function(a, b) {
            var c = h.Ub(a.u,
                    b);
            c.x += a.position.x;
            c.y += a.position.y;
            return c
        };
        h.Rp = function(a, b) {
            var c = h.tb(b, a.position), d = c.x * a.u.k.x + c.y * a.u.k.y;
            c.y = c.x * a.u.m.x + c.y * a.u.m.y;
            c.x = d;
            return c
        };
        h.Uk = function(a, b) {
            return n.B(a.x + b.x, a.y + b.y)
        };
        h.tb = function(a, b) {
            return n.B(a.x - b.x, a.y - b.y)
        };
        h.tx = function(a, b) {
            var c = a.x - b.x, d = a.y - b.y;
            return Math.sqrt(c * c + d * d)
        };
        h.ot = function(a, b) {
            var c = a.x - b.x, d = a.y - b.y;
            return c * c + d * d
        };
        h.Gx = function(a, b) {
            void 0 === a && (a = 0);
            return n.B(a * b.x, a * b.y)
        };
        h.hx = function(a, b) {
            return k.Qf(h.Uk(a.k, b.k), h.Uk(a.m,
                    b.m))
        };
        h.Hx = function(a, b) {
            return k.Qf(h.Ub(a, b.k), h.Ub(a, b.m))
        };
        h.Ix = function(a, b) {
            var c = n.B(h.Hb(a.k, b.k), h.Hb(a.m, b.k)), d = n.B(h.Hb(a.k, b.m), h.Hb(a.m, b.m));
            return k.Qf(c, d)
        };
        h.Eg = function(a) {
            void 0 === a && (a = 0);
            return 0 < a ? a : -a
        };
        h.Rk = function(a) {
            return n.B(h.Eg(a.x), h.Eg(a.y))
        };
        h.cx = function(a) {
            return k.Qf(h.Rk(a.k), h.Rk(a.m))
        };
        h.Bt = function(a, b) {
            void 0 === a && (a = 0);
            void 0 === b && (b = 0);
            return a < b ? a : b
        };
        h.Ct = function(a, b) {
            return n.B(h.Bt(a.x, b.x), h.Bt(a.y, b.y))
        };
        h.zt = function(a, b) {
            void 0 === a && (a = 0);
            void 0 ===
                    b && (b = 0);
            return a > b ? a : b
        };
        h.At = function(a, b) {
            return n.B(h.zt(a.x, b.x), h.zt(a.y, b.y))
        };
        h.Bb = function(a, b, c) {
            void 0 === a && (a = 0);
            void 0 === b && (b = 0);
            void 0 === c && (c = 0);
            return a < b ? b : a > c ? c : a
        };
        h.kx = function(a, b, c) {
            return h.At(b, h.Ct(a, c))
        };
        h.MD = function(a, b) {
            var c = a[0];
            a[0] = b[0];
            b[0] = c
        };
        h.tD = function() {
            return 2 * Math.random() - 1
        };
        h.uD = function(a, b) {
            void 0 === a && (a = 0);
            void 0 === b && (b = 0);
            var c = Math.random();
            return(b - a) * c + a
        };
        h.lD = function(a) {
            void 0 === a && (a = 0);
            a |= a >> 1 & 2147483647;
            a |= a >> 2 & 1073741823;
            a |= a >> 4 & 268435455;
            a |= a >> 8 & 16777215;
            return(a | a >> 16 & 65535) + 1
        };
        h.bD = function(a) {
            void 0 === a && (a = 0);
            return 0 < a && 0 === (a & a - 1)
        };
        h.Vy = new n(0, 0);
        h.Uy = k.Qf(new n(1, 0), new n(0, 1));
        h.VD = new l(h.Vy, h.Uy);
        X = function() {
            this.position = n.B(0, 0);
            this.Cr = n.B(0, 0);
            this.Mf = null;
            this.Q = 0;
            this.Cr.Set(0, 0);
            this.Ci = this.gj = this.Yt = 0;
            this.bu = this.Xt = !0;
            this.Gi = this.Iq = !1;
            this.type = g.ve;
            this.Vc = !0;
            this.Ru = 1
        };
        ac = f;
        f.prototype.Qa = v("cm");
        f.prototype.uc = function() {
            console.log("fixture.GetShape not yet supported in CocoonJS Box2D binding");
            return null
        };
        f.prototype.vi = v("Ko");
        bc = g;
        g.prototype.Hj = function(a) {
            var b = a.Mf;
            a.Mf = null;
            var c = window.ext.IDTK_SRV_BOX2D.makeCall("createFixture", this.Ha.Yb, this.pc, a);
            a.Mf = b;
            a = new f(this, 0, c, a);
            this.Ha.nj[c] = a;
            this.em.push(a);
            return a
        };
        g.prototype.Lp = function() {
            return 0 === this.em.length ? null : this.em[0]
        };
        g.prototype.nt = function(a) {
            window.ext.IDTK_SRV_BOX2D.makeCall("deleteFixture", this.Ha.Yb, a.Or);
            delete this.Ha.nj[a.Or]
        };
        g.prototype.ml = function(a, b) {
            window.ext.IDTK_SRV_BOX2D.makeCall("setBodyTransform", this.Ha.Yb,
                    this.pc, a.x, a.y, b);
            this.D.u.Set(b);
            this.D.position.I(a)
        };
        g.prototype.Zp = function(a) {
            this.ml(a, this.vd())
        };
        g.prototype.ri = function() {
            var a = window.ext.IDTK_SRV_BOX2D.makeCall("getLinearVelocity", this.Ha.Yb, this.pc);
            return n.B(a[0], a[1])
        };
        g.prototype.Lj = function() {
            var a = window.ext.IDTK_SRV_BOX2D.makeCall("getWorldCenter", this.Ha.Yb, this.pc);
            return n.B(a[0], a[1])
        };
        g.prototype.si = function() {
            var a = window.ext.IDTK_SRV_BOX2D.makeCall("getLocalCenter", this.Ha.Yb, this.pc);
            return n.B(a[0], a[1])
        };
        g.prototype.cd =
                function(a) {
                    return h.Rp(this.D, a)
                };
        g.prototype.Kj = function() {
            return window.ext.IDTK_SRV_BOX2D.makeCall("getMass", this.Ha.Yb, this.pc)
        };
        g.prototype.dd = function() {
            return window.ext.IDTK_SRV_BOX2D.makeCall("isAwake", this.Ha.Yb, this.pc)
        };
        g.prototype.Ym = function() {
            return window.ext.IDTK_SRV_BOX2D.makeCall("getAngularVelocity", this.Ha.Yb, this.pc)
        };
        g.prototype.Uc = function(a) {
            window.ext.IDTK_SRV_BOX2D.makeCall("setAwake", this.Ha.Yb, this.pc, a)
        };
        g.prototype.xi = function(a) {
            window.ext.IDTK_SRV_BOX2D.makeCall("setLinearVelocity",
                    this.Ha.Yb, this.pc, a.x, a.y)
        };
        g.prototype.Nf = function(a, b, c) {
            window.ext.IDTK_SRV_BOX2D.makeCall("applyForce", this.Ha.Yb, this.pc, a.x, a.y, b.x, b.y, c)
        };
        g.prototype.Pm = function(a, b) {
            window.ext.IDTK_SRV_BOX2D.makeCall("applyTorque", this.Ha.Yb, this.pc, a, b)
        };
        g.prototype.kl = function(a) {
            window.ext.IDTK_SRV_BOX2D.makeCall("setAngularVelocity", this.Ha.Yb, this.pc, a)
        };
        g.prototype.Dh = v("Zl");
        g.prototype.vd = function() {
            return this.D.u.vd()
        };
        g.prototype.jn = function(a) {
            void 0 === a && (a = 0);
            this.ml(this.D.position, a)
        };
        g.prototype.Bh =
                function() {
                    for (var a = window.ext.IDTK_SRV_BOX2D.makeCall("getObjectContacts", this.Ha.Yb, this.pc), b = [], c = 0; c < a.length; c++)
                        b.push(this.Ha.Ho[a[c]]);
                    return b
                };
        bc.ve = 0;
        bc.du = 1;
        bc.wc = 2;
        e.prototype.Pp = v("HB");
        cc = d;
        d.prototype.Qm = t();
        cc.cu = new d;
        dc = t();
        ec = b;
        b.prototype.Lt = ba("dh");
        b.prototype.Kt = function(a) {
            var b = this;
            window.ext.IDTK_SRV_BOX2D.makeCall("setContactFilter", this.Yb, function(c, d) {
                return a.yi(b.nj[c], b.nj[d])
            })
        };
        b.prototype.Hp = function(a) {
            a = new g(a, this);
            return this.Ho[a.pc] = a
        };
        b.prototype.Vm =
                function(a) {
                    window.ext.IDTK_SRV_BOX2D.makeCall("deleteBody", this.Yb, a.pc);
                    delete this.Ho[a.pc];
                    for (var b = 0; b < a.em.length; ++b)
                        delete this.nj[a.em[b].Or]
                };
        b.prototype.Um = function(a) {
            if (a.L.pc !== a.N.pc) {
                var b = a.L, d = a.N;
                a.L = b.pc;
                a.N = d.pc;
                var e = "createDistanceJoint";
                a.type === c.Xj && (e = "createRevoluteJoint");
                var f = new c(a);
                f.yB = window.ext.IDTK_SRV_BOX2D.makeCall(e, this.Yb, a);
                a.L = b;
                a.N = d;
                this.zB.push(f);
                return f
            }
        };
        b.prototype.Wm = function(a) {
            window.ext.IDTK_SRV_BOX2D.makeCall("destroyJoint", this.Yb, a.yB)
        };
        b.prototype.Ig = function(a, b, c) {
            c = window.ext.IDTK_SRV_BOX2D.makeCall("step", this.Yb, a, b, c);
            b = c[0];
            for (a = 1; a <= 4 * b; a += 4) {
                var d = this.Ho[c[a + 0]];
                if (null === d)
                    break;
                d.D.position.Set(c[a + 1], c[a + 2]);
                d.D.u.Set(c[a + 3])
            }
            if (null !== this.dh)
                for (c = window.ext.IDTK_SRV_BOX2D.makeCall("getLastContacts", this.Yb), b = c[0], a = 1; a <= 3 * b; a += 3) {
                    var d = c[a + 2], f = this.nj[c[a + 0]], g = this.nj[c[a + 1]];
                    "undefined" === typeof f || "undefined" === typeof g ? console.log("One of the fixtures in a contact DOESN'T EXIST!!") : this.dh.Qm(new e(f, g, d))
                }
        };
        b.prototype.mt = function() {
            window.ext.IDTK_SRV_BOX2D.makeCall("clearForces", this.Yb)
        };
        fc = function(a) {
            this.dp = a;
            this.type = "circle"
        };
        Y = t();
        Y.prototype.kn = function(a, b) {
            this.type = "box";
            this.width = a;
            this.height = b
        };
        Y.prototype.It = function() {
            this.type = "edge"
        };
        Y.prototype.ll = function(a, b) {
            this.type = "polygon";
            this.$w = [];
            for (var c = 0; c < b; c++)
                this.$w.push(a[c].x), this.$w.push(a[c].y)
        };
        gc = function() {
            this.Mf = this.shape = null;
            this.cg = 0.2;
            this.uf = this.xg = 0;
            this.er = !1;
            this.filter = {Tj: 1, zk: 65535, Ph: 0}
        };
        Z = c;
        c.prototype.Zk =
                v("L");
        c.prototype.Kp = v("N");
        c.prototype.Ec = v("type");
        c.Cq = 0;
        c.Xj = 1;
        hc = function(a, b, d, e) {
            this.type = c.Cq;
            this.wb = n.B(0, 0);
            this.xb = n.B(0, 0);
            this.Mf = null;
            void 0 !== a && (this.L = a);
            void 0 !== b && (this.N = b);
            void 0 !== d && this.wb.I(d);
            void 0 !== e && this.xb.I(e);
            void 0 !== d && void 0 !== e && (a = e.x - d.x, d = e.y - d.y, this.length = Math.sqrt(a * a + d * d));
            this.Ln = this.ao = 0
        };
        a.prototype.gc = function(a, b, c) {
            this.L = a;
            this.N = b;
            this.wb = this.L.cd(c);
            this.xb = this.N.cd(c);
            this.vg = this.N.vd() - this.L.vd()
        };
        ic = a
    }() : console.log("The CocoonJS binding for Box2D has been ignored because ext.IDTK_SRV_BOX2D is not available");
else {
    var V = {}, jc = 2 / 180 * Math.PI, kc = 8 / 180 * Math.PI, lc = 0.5 * Math.PI, mc = lc * lc, nc = 2 / 180 * Math.PI, oc = Number.MIN_VALUE * Number.MIN_VALUE;
    V.Hb = function(a, c) {
        return a.x * c.x + a.y * c.y
    };
    V.qi = function(a, c) {
        return a.x * c.y - a.y * c.x
    };
    V.Gg = function(a, c) {
        return S.B(c * a.y, -c * a.x)
    };
    V.Ip = function(a, c) {
        return S.B(-a * c.y, a * c.x)
    };
    V.Ub = function(a, c) {
        return S.B(a.k.x * c.x + a.m.x * c.y, a.k.y * c.x + a.m.y * c.y)
    };
    V.Hg = function(a, c) {
        return S.B(V.Hb(c, a.k), V.Hb(c, a.m))
    };
    V.vc = function(a, c) {
        var b = V.Ub(a.u, c);
        b.x += a.position.x;
        b.y += a.position.y;
        return b
    };
    V.Rp = function(a, c) {
        var b = V.tb(c, a.position), d = b.x * a.u.k.x + b.y * a.u.k.y;
        b.y = b.x * a.u.m.x + b.y * a.u.m.y;
        b.x = d;
        return b
    };
    V.Uk = function(a, c) {
        return S.B(a.x + c.x, a.y + c.y)
    };
    V.tb = function(a, c) {
        return S.B(a.x - c.x, a.y - c.y)
    };
    V.tx = function(a, c) {
        return Math.sqrt(V.ot(a, c))
    };
    V.ot = function(a, c) {
        var b = a.x - c.x, d = a.y - c.y;
        return b * b + d * d
    };
    V.Gx = function(a, c) {
        return S.B(a * c.x, a * c.y)
    };
    V.hx = function(a, c) {
        return U.Qf(V.Uk(a.k, c.k), V.Uk(a.m, c.m))
    };
    V.Hx = function(a, c) {
        return U.Qf(V.Ub(a, c.k), V.Ub(a, c.m))
    };
    V.Ix = function(a,
            c) {
        var b = S.B(V.Hb(a.k, c.k), V.Hb(a.m, c.k)), d = S.B(V.Hb(a.k, c.m), V.Hb(a.m, c.m));
        return U.Qf(b, d)
    };
    V.Rk = function(a) {
        return S.B(Math.abs(a.x), Math.abs(a.y))
    };
    V.cx = function(a) {
        return U.Qf(V.Rk(a.k), V.Rk(a.m))
    };
    V.Bb = function(a, c, b) {
        return a < c ? c : a > b ? b : a
    };
    V.kx = function(a, c, b) {
        return S.B(V.Bb(a.x, c.x, b.x), V.Bb(a.y, c.y, b.y))
    };
    var U = function() {
        this.k = S.B(0, 0);
        this.m = S.B(0, 0);
        this.Eh()
    };
    U.Jj = function(a) {
        var c = new U;
        c.Set(a);
        return c
    };
    U.Qf = function(a, c) {
        var b = new U;
        b.$p(a, c);
        return b
    };
    y = U.prototype;
    y.Set = function(a) {
        var c =
                Math.cos(a);
        a = Math.sin(a);
        this.k.Set(c, a);
        this.m.Set(-a, c)
    };
    y.$p = function(a, c) {
        this.k.I(a);
        this.m.I(c)
    };
    y.lc = function() {
        var a = new U;
        a.of(this);
        return a
    };
    y.of = function(a) {
        this.k.I(a.k);
        this.m.I(a.m)
    };
    y.Om = function(a) {
        this.k.Fg(a.k);
        this.m.Fg(a.m)
    };
    y.Eh = function() {
        this.k.Set(1, 0);
        this.m.Set(0, 1)
    };
    y.ia = function() {
        this.k.Set(0, 0);
        this.m.Set(0, 0)
    };
    y.vd = function() {
        return Math.atan2(this.k.y, this.k.x)
    };
    y.Mp = function(a) {
        var c = this.k.x * this.m.y - this.m.x * this.k.y;
        0 !== c && (c = 1 / c);
        a.k.x = c * this.m.y;
        a.m.x = -c * this.m.x;
        a.k.y = -c * this.k.y;
        a.m.y = c * this.k.x;
        return a
    };
    y.Fh = function(a, c, b) {
        var d = this.k.x * this.m.y - this.m.x * this.k.y;
        0 !== d && (d = 1 / d);
        a.x = d * (this.m.y * c - this.m.x * b);
        a.y = d * (this.k.x * b - this.k.y * c);
        return a
    };
    y.Eg = function() {
        this.k.Eg();
        this.m.Eg()
    };
    var qc = function(a, c, b) {
        this.k = new pc(0, 0, 0);
        this.m = new pc(0, 0, 0);
        this.qa = new pc(0, 0, 0);
        a && this.k.I(a);
        c && this.m.I(c);
        b && this.qa.I(b)
    };
    y = qc.prototype;
    y.lc = function() {
        return new qc(this.k, this.m, this.qa)
    };
    y.of = function(a) {
        this.k.I(a.k);
        this.m.I(a.m);
        this.qa.I(a.qa)
    };
    y.Om =
            function(a) {
                this.k.x += a.k.x;
                this.k.y += a.k.y;
                this.k.z += a.k.z;
                this.m.x += a.m.x;
                this.m.y += a.m.y;
                this.m.z += a.m.z;
                this.qa.x += a.qa.x;
                this.qa.y += a.qa.y;
                this.qa.z += a.qa.z
            };
    y.Eh = function() {
        this.k.Set(1, 0, 0);
        this.m.Set(0, 1, 0);
        this.qa.Set(0, 0, 1)
    };
    y.ia = function() {
        this.k.Set(0, 0, 0);
        this.m.Set(0, 0, 0);
        this.qa.Set(0, 0, 0)
    };
    y.Oj = function(a, c, b) {
        var d = this.k.x, e = this.m.x, g = this.k.y, f = this.m.y, h = d * f - e * g;
        0 != h && (h = 1 / h);
        a.x = h * (f * c - e * b);
        a.y = h * (d * b - g * c);
        return a
    };
    y.nl = function(a, c, b, d) {
        var e = this.k.x, g = this.k.y, f = this.k.z,
                h = this.m.x, l = this.m.y, k = this.m.z, n = this.qa.x, m = this.qa.y, q = this.qa.z, r = e * (l * q - k * m) + g * (k * n - h * q) + f * (h * m - l * n);
        0 != r && (r = 1 / r);
        a.x = r * (c * (l * q - k * m) + b * (k * n - h * q) + d * (h * m - l * n));
        a.y = r * (e * (b * q - d * m) + g * (d * n - c * q) + f * (c * m - b * n));
        a.z = r * (e * (l * d - k * b) + g * (k * c - h * d) + f * (h * b - l * c));
        return a
    };
    var rc = function() {
        this.P = S.B(0, 0);
        this.Hc = S.B(0, 0);
        this.C = S.B(0, 0)
    };
    rc.prototype.Set = function(a) {
        this.P.I(a.P);
        this.Hc.I(a.Hc);
        this.C.I(a.C);
        this.Oe = a.Oe;
        this.M = a.M;
        this.rd = a.rd
    };
    rc.prototype.lc = function() {
        var a = new rc;
        a.P.I(this.P);
        a.Hc.I(this.Hc);
        a.C.I(this.C);
        a.Oe = this.Oe;
        a.M = this.M;
        a.rd = this.rd;
        return a
    };
    rc.prototype.Xd = function(a, c) {
        void 0 === c && (c = 0);
        a.position.x = (1 - c) * this.Hc.x + c * this.C.x;
        a.position.y = (1 - c) * this.Hc.y + c * this.C.y;
        a.u.Set((1 - c) * this.Oe + c * this.M);
        var b = a.u;
        a.position.x -= b.k.x * this.P.x + b.m.x * this.P.y;
        a.position.y -= b.k.y * this.P.x + b.m.y * this.P.y
    };
    rc.prototype.Ah = function(a) {
        void 0 === a && (a = 0);
        if (this.rd < a && 1 - this.rd > Number.MIN_VALUE) {
            var c = (a - this.rd) / (1 - this.rd);
            this.Hc.x = (1 - c) * this.Hc.x + c * this.C.x;
            this.Hc.y = (1 - c) * this.Hc.y +
                    c * this.C.y;
            this.Oe = (1 - c) * this.Oe + c * this.M;
            this.rd = a
        }
    };
    var $b = function(a, c) {
        this.position = S.B(0, 0);
        this.u = new U;
        a && this.position.I(a);
        c && this.u.of(c)
    };
    $b.prototype.gc = function(a, c) {
        this.position.I(a);
        this.u.of(c)
    };
    $b.prototype.Eh = function() {
        this.position.ia();
        this.u.Eh()
    };
    $b.prototype.Set = function(a) {
        this.position.I(a.position);
        this.u.of(a.u)
    };
    $b.prototype.vd = function() {
        return Math.atan2(this.u.k.y, this.u.k.x)
    };
    var S = function(a, c) {
        this.x = a;
        this.y = c
    };
    S.Jg = [];
    S.B = function(a, c) {
        if (0 < S.Jg.length) {
            var b =
                    S.Jg.pop();
            b.Set(a, c);
            return b
        }
        return new S(a, c)
    };
    S.fc = function(a) {
        S.Jg.push(a)
    };
    y = S.prototype;
    y.ia = function() {
        this.y = this.x = 0
    };
    y.Set = function(a, c) {
        this.x = a;
        this.y = c
    };
    y.I = function(a) {
        this.x = a.x;
        this.y = a.y
    };
    y.Ch = function() {
        return S.B(-this.x, -this.y)
    };
    y.Tp = function() {
        this.x = -this.x;
        this.y = -this.y
    };
    y.lc = function() {
        return S.B(this.x, this.y)
    };
    y.Fg = function(a) {
        this.x += a.x;
        this.y += a.y
    };
    y.dq = function(a) {
        this.x -= a.x;
        this.y -= a.y
    };
    y.xd = function(a) {
        this.x *= a;
        this.y *= a
    };
    y.Gg = function(a) {
        var c = this.x;
        this.x = a *
                this.y;
        this.y = -a * c
    };
    y.Ip = function(a) {
        var c = this.x;
        this.x = -a * this.y;
        this.y = a * c
    };
    y.Ct = function(a) {
        this.x = Math.min(this.x, a.x);
        this.y = Math.min(this.y, a.y)
    };
    y.At = function(a) {
        this.x = Math.max(this.x, a.x);
        this.y = Math.max(this.y, a.y)
    };
    y.Eg = function() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y)
    };
    y.Rf = function() {
        return Math.sqrt(this.hn())
    };
    y.hn = function() {
        return this.x * this.x + this.y * this.y
    };
    y.yd = function() {
        var a = this.Rf();
        if (a < Number.MIN_VALUE)
            return 0;
        var c = 1 / a;
        this.x *= c;
        this.y *= c;
        return a
    };
    y.gn = function() {
        return isFinite(this.x) &&
                isFinite(this.y)
    };
    var pc = function(a, c, b) {
        this.x = a;
        this.y = c;
        this.z = b
    };
    y = pc.prototype;
    y.ia = function() {
        this.z = this.y = this.x = 0
    };
    y.Set = function(a, c, b) {
        this.x = a;
        this.y = c;
        this.z = b
    };
    y.I = function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z
    };
    y.Ch = function() {
        return new pc(-this.x, -this.y, -this.z)
    };
    y.Tp = function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z
    };
    y.lc = function() {
        return new pc(this.x, this.y, this.z)
    };
    y.Fg = function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z
    };
    y.dq = function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z
    };
    y.xd = function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a
    };
    var sc = function() {
        this.Va = 0.005
    };
    y = sc.prototype;
    y.ti = t();
    y.lc = t();
    y.Set = function(a) {
        this.Va = a.Va
    };
    y.Gj = t();
    y.Vk = t();
    y.Tm = t();
    y.Yp = t();
    var fc = function(a) {
        this.Va = 0.005;
        this.Va = a;
        this.wk = a * a;
        this.fb = S.B(0, 0)
    };
    R(fc, sc);
    y = fc.prototype;
    y.ti = function() {
        return fc.nf
    };
    y.lc = function() {
        var a = new fc(this.Va);
        a.Set(this);
        return a
    };
    y.Set = function(a) {
        sc.prototype.Set.call(this, a);
        a instanceof fc && this.fb.I(a.fb)
    };
    y.Gj = function(a, c) {
        var b = c.u, d = c.position.x + (b.k.x *
                this.fb.x + b.m.x * this.fb.y), b = c.position.y + (b.k.y * this.fb.x + b.m.y * this.fb.y);
        a.Aa.Set(d - this.Va, b - this.Va);
        a.Ba.Set(d + this.Va, b + this.Va)
    };
    y.Vk = function(a, c) {
        a.og = c * Math.PI * this.wk;
        a.Mg.I(this.fb);
        a.Mj = a.og * (0.5 * this.wk + (this.fb.x * this.fb.x + this.fb.y * this.fb.y))
    };
    y.Tm = function(a, c, b, d) {
        b = V.vc(b, this.fb);
        var e = -(V.Hb(a, b) - c);
        if (e < -this.Va + Number.MIN_VALUE)
            return 0;
        if (e > this.Va)
            return d.I(b), Math.PI * this.wk;
        c = e * e;
        e = this.wk * (Math.asin(e / this.Va) + Math.PI / 2) + e * Math.sqrt(this.wk - c);
        c = -2 / 3 * Math.pow(this.wk -
                c, 1.5) / e;
        d.x = b.x + a.x * c;
        d.y = b.y + a.y * c;
        return e
    };
    y.Yp = function(a) {
        a.K = [this.fb];
        a.na = 1;
        a.Va = this.Va
    };
    fc.nf = "b2CircleShape";
    var tc = function(a, c) {
        this.Va = 0.005;
        this.oa = a;
        this.Ga = c;
        this.mj = S.B(this.Ga.x - this.oa.x, this.Ga.y - this.oa.y);
        this.Rr = this.mj.yd();
        this.ua = S.B(this.mj.y, -this.mj.x);
        S.B(-0.04 * (this.ua.x - this.mj.x) + this.oa.x, -0.04 * (this.ua.y - this.mj.y) + this.oa.y);
        S.B(-0.04 * (this.ua.x + this.mj.x) + this.Ga.x, -0.04 * (this.ua.y + this.mj.y) + this.Ga.y);
        S.B(-this.ua.x, -this.ua.y)
    };
    R(tc, sc);
    tc.prototype.ti = w("b2EdgeShape");
    tc.prototype.Gj = function(a, c) {
        var b = c.u, d = c.position.x + (b.k.x * this.oa.x + b.m.x * this.oa.y), e = c.position.y + (b.k.y * this.oa.x + b.m.y * this.oa.y), g = c.position.x + (b.k.x * this.Ga.x + b.m.x * this.Ga.y), b = c.position.y + (b.k.y * this.Ga.x + b.m.y * this.Ga.y);
        d < g ? (a.Aa.x = d, a.Ba.x = g) : (a.Aa.x = g, a.Ba.x = d);
        e < b ? (a.Aa.y = e, a.Ba.y = b) : (a.Aa.y = b, a.Ba.y = e)
    };
    tc.prototype.Vk = function(a) {
        a.og = 0;
        a.Mg.I(this.oa);
        a.Mj = 0
    };
    tc.prototype.Tm = function(a, c, b, d) {
        void 0 === c && (c = 0);
        var e = S.B(a.x * c, a.y * c), g = V.vc(b, this.oa);
        b = V.vc(b, this.Ga);
        var f =
                V.Hb(a, g) - c;
        a = V.Hb(a, b) - c;
        if (0 < f) {
            if (0 < a)
                return 0;
            g.x = -a / (f - a) * g.x + f / (f - a) * b.x;
            g.y = -a / (f - a) * g.y + f / (f - a) * b.y
        } else
            0 < a && (b.x = -a / (f - a) * g.x + f / (f - a) * b.x, b.y = -a / (f - a) * g.y + f / (f - a) * b.y);
        d.x = (e.x + g.x + b.x) / 3;
        d.y = (e.y + g.y + b.y) / 3;
        return 0.5 * ((g.x - e.x) * (b.y - e.y) - (g.y - e.y) * (b.x - e.x))
    };
    var uc = function() {
        this.og = 0;
        this.Mg = S.B(0, 0);
        this.Mj = 0
    }, Y = function() {
        this.Va = 0.005;
        this.Ed = S.B(0, 0);
        this.K = [];
        this.wa = []
    };
    R(Y, sc);
    Y.prototype.ti = function() {
        return Y.nf
    };
    Y.prototype.lc = function() {
        var a = new Y;
        a.Set(this);
        return a
    };
    Y.prototype.Set = function(a) {
        sc.prototype.Set.call(this, a);
        if (a instanceof Y) {
            this.Ed.I(a.Ed);
            this.La = a.La;
            this.jl(this.La);
            for (var c = 0; c < this.La; c++)
                this.K[c].I(a.K[c]), this.wa[c].I(a.wa[c])
        }
    };
    Y.prototype.ll = function(a) {
        this.Jt(a)
    };
    Y.FC = function(a) {
        var c = new Y;
        c.ll(a);
        return c
    };
    Y.prototype.Jt = function(a) {
        var c = a.length;
        this.La = c;
        this.jl(c);
        for (c = c = 0; c < this.La; c++)
            this.K[c].I(a[c]);
        for (c = 0; c < this.La; ++c)
            a = V.tb(this.K[c + 1 < this.La ? c + 1 : 0], this.K[c]), this.wa[c].I(V.Gg(a, 1)), this.wa[c].yd();
        this.Ed = Y.qx(this.K,
                this.La)
    };
    Y.JC = function(a) {
        var c = new Y;
        c.Jt(a);
        return c
    };
    Y.prototype.kn = function(a, c) {
        this.La = 4;
        this.jl(4);
        this.K[0].Set(-a, -c);
        this.K[1].Set(a, -c);
        this.K[2].Set(a, c);
        this.K[3].Set(-a, c);
        this.wa[0].Set(0, -1);
        this.wa[1].Set(1, 0);
        this.wa[2].Set(0, 1);
        this.wa[3].Set(-1, 0);
        this.Ed.ia()
    };
    Y.GC = function(a, c) {
        var b = new Y;
        b.kn(a, c);
        return b
    };
    Y.prototype.ly = function(a, c, b, d) {
        this.La = 4;
        this.jl(4);
        this.K[0].Set(-a, -c);
        this.K[1].Set(a, -c);
        this.K[2].Set(a, c);
        this.K[3].Set(-a, c);
        this.wa[0].Set(0, -1);
        this.wa[1].Set(1,
                0);
        this.wa[2].Set(0, 1);
        this.wa[3].Set(-1, 0);
        this.Ed = b;
        a = new U;
        a.Set(d);
        b = new $b(b, a);
        for (d = 0; d < this.La; ++d)
            this.K[d] = V.vc(b, this.K[d]), this.wa[d] = V.Ub(b.u, this.wa[d])
    };
    Y.IC = function(a, c, b, d) {
        var e = new Y;
        e.ly(a, c, b, d);
        return e
    };
    Y.prototype.It = function(a, c) {
        this.La = 2;
        this.jl(2);
        this.K[0].I(a);
        this.K[1].I(c);
        this.Ed.x = 0.5 * (a.x + c.x);
        this.Ed.y = 0.5 * (a.y + c.y);
        this.wa[0] = V.Gg(V.tb(c, a), 1);
        this.wa[0].yd();
        this.wa[1].x = -this.wa[0].x;
        this.wa[1].y = -this.wa[0].y
    };
    Y.HC = function(a, c) {
        var b = new Y;
        b.It(a, c);
        return b
    };
    y = Y.prototype;
    y.Gj = function(a, c) {
        for (var b = c.u, d = this.K[0], e = c.position.x + (b.k.x * d.x + b.m.x * d.y), g = c.position.y + (b.k.y * d.x + b.m.y * d.y), f = e, h = g, l = 1; l < this.La; ++l)
            var d = this.K[l], k = c.position.x + (b.k.x * d.x + b.m.x * d.y), d = c.position.y + (b.k.y * d.x + b.m.y * d.y), e = e < k ? e : k, g = g < d ? g : d, f = f > k ? f : k, h = h > d ? h : d;
        a.Aa.x = e - this.Va;
        a.Aa.y = g - this.Va;
        a.Ba.x = f + this.Va;
        a.Ba.y = h + this.Va
    };
    y.Vk = function(a, c) {
        if (2 == this.La)
            a.Mg.x = 0.5 * (this.K[0].x + this.K[1].x), a.Mg.y = 0.5 * (this.K[0].y + this.K[1].y), a.og = 0, a.Mj = 0;
        else {
            for (var b = 0, d = 0, e =
                    0, g = 0, f = 1 / 3, h = 0; h < this.La; ++h)
                var l = this.K[h], k = h + 1 < this.La ? this.K[h + 1] : this.K[0], n = l.x - 0, m = l.y - 0, q = k.x - 0, r = k.y - 0, p = n * r - m * q, s = 0.5 * p, e = e + s, b = b + s * f * (0 + l.x + k.x), d = d + s * f * (0 + l.y + k.y), l = n, g = g + p * (f * (0.25 * (l * l + q * l + q * q) + (0 * l + 0 * q)) + 0 + (f * (0.25 * (m * m + r * m + r * r) + (0 * m + 0 * r)) + 0));
            a.og = c * e;
            a.Mg.Set(b * (1 / e), d * (1 / e));
            a.Mj = c * g
        }
    };
    y.Tm = function(a, c, b, d) {
        var e = V.Hg(b.u, a), g = c - V.Hb(a, b.position), f = [], h = 0, l = -1;
        c = -1;
        var k = !1;
        for (a = a = 0; a < this.La; ++a) {
            f[a] = V.Hb(e, this.K[a]) - g;
            var n = f[a] < -Number.MIN_VALUE;
            0 < a && (n ? k || (l = a - 1, h++) :
                    k && (c = a - 1, h++));
            k = n
        }
        switch (h) {
            case 0:
                return k ? (a = new uc, this.Vk(a, 1), d.I(V.vc(b, a.Mg)), a.og) : 0;
            case 1:
                -1 == l ? l = this.La - 1 : c = this.La - 1
        }
        a = (l + 1) % this.La;
        e = (c + 1) % this.La;
        g = (0 - f[l]) / (f[a] - f[l]);
        f = (0 - f[c]) / (f[e] - f[c]);
        l = S.B(this.K[l].x * (1 - g) + this.K[a].x * g, this.K[l].y * (1 - g) + this.K[a].y * g);
        c = S.B(this.K[c].x * (1 - f) + this.K[e].x * f, this.K[c].y * (1 - f) + this.K[e].y * f);
        f = 0;
        g = S.B(0, 0);
        for (h = this.K[a]; a != e; )
            a = (a + 1) % this.La, k = a == e ? c : this.K[a], n = 0.5 * ((h.x - l.x) * (k.y - l.y) - (h.y - l.y) * (k.x - l.x)), f += n, g.x += n * (l.x + h.x + k.x) / 3, g.y +=
                    n * (l.y + h.y + k.y) / 3, h = k;
        g.xd(1 / f);
        d.I(V.vc(b, g));
        return f
    };
    y.Yp = function(a) {
        a.K = this.K;
        a.na = this.La;
        a.Va = this.Va
    };
    y.an = function(a) {
        for (var c = 0, b = this.K[0].x * a.x + this.K[0].y * a.y, d = 1; d < this.La; ++d) {
            var e = this.K[d].x * a.x + this.K[d].y * a.y;
            e > b && (c = d, b = e)
        }
        return c
    };
    y.bl = function(a) {
        for (var c = 0, b = this.K[0].x * a.x + this.K[0].y * a.y, d = 1; d < this.La; ++d) {
            var e = this.K[d].x * a.x + this.K[d].y * a.y;
            e > b && (c = d, b = e)
        }
        return this.K[c]
    };
    y.jl = function(a) {
        this.K = [];
        this.wa = [];
        for (var c = this.K.length; c < a; c++)
            this.K[c] = S.B(0, 0), this.wa[c] =
                    S.B(0, 0)
    };
    Y.qx = function(a, c) {
        for (var b = S.B(0, 0), d = 0, e = 1 / 3, g = 0; g < c; ++g) {
            var f = a[g], h = g + 1 < c ? a[g + 1] : a[0], l = 0.5 * ((f.x - 0) * (h.y - 0) - (f.y - 0) * (h.x - 0)), d = d + l;
            b.x += l * e * (0 + f.x + h.x);
            b.y += l * e * (0 + f.y + h.y)
        }
        b.x *= 1 / d;
        b.y *= 1 / d;
        return b
    };
    Y.gE = new U;
    Y.nf = "b2PolygonShape";
    var vc = function() {
        this.hq = this.gq = this.iq = this.zd = 0
    };
    y = vc.prototype;
    y.wi = function(a) {
        this.zd = a;
        this.iq = this.zd & 255;
        this.gq = (this.zd & 65280) >> 8 & 255;
        this.hq = (this.zd & 16711680) >> 16 & 255;
        this.Vt = (this.zd & 4278190080) >> 24 & 255
    };
    y.Set = function(a) {
        this.wi(a.zd)
    };
    y.Pt = function(a) {
        this.iq = a;
        this.zd = this.zd & 4294967040 | this.iq & 255
    };
    y.Mt = function(a) {
        this.gq = a;
        this.zd = this.zd & 4294902015 | this.gq << 8 & 65280
    };
    y.Nt = function(a) {
        this.hq = a;
        this.zd = this.zd & 4278255615 | this.hq << 16 & 16711680
    };
    y.my = function(a) {
        this.Vt = a;
        this.zd = this.zd & 16777215 | this.Vt << 24 & 4278190080
    };
    y.lc = function() {
        var a = new vc;
        a.Set(this);
        return a
    };
    var wc = function() {
        this.Le = S.B(0, 0);
        this.id = new vc
    };
    wc.prototype.Set = function(a) {
        this.Le.I(a.Le);
        this.id.Set(a.id)
    };
    var xc = function() {
        this.Aa = S.B(0, 0);
        this.Ba = S.B(0,
                0)
    }, yc = [], zc = function() {
        if (0 < yc.length) {
            var a = yc.pop();
            a.ia();
            return a
        }
        return new xc
    };
    y = xc.prototype;
    y.ia = function() {
        this.Aa.Set(0, 0);
        this.Ba.Set(0, 0)
    };
    y.gn = function() {
        return 0 > this.Ba.x - this.Aa.x || 0 > this.Ba.y - this.Aa.y ? !1 : this.Aa.gn() && this.Ba.gn()
    };
    y.yx = function() {
        return S.B((this.Aa.x + this.Ba.x) / 2, (this.Aa.y + this.Ba.y) / 2)
    };
    y.Gp = function(a) {
        var c;
        return c = (c = (c = (c = this.Aa.x <= a.Aa.x) && this.Aa.y <= a.Aa.y) && a.Ba.x <= this.Ba.x) && a.Ba.y <= this.Ba.y
    };
    y.ol = function(a) {
        return 0 < a.Aa.x - this.Ba.x || 0 < a.Aa.y -
                this.Ba.y || 0 < this.Aa.x - a.Ba.x || 0 < this.Aa.y - a.Ba.y ? !1 : !0
    };
    y.Sm = function(a, c) {
        this.Aa.x = Math.min(a.Aa.x, c.Aa.x);
        this.Aa.y = Math.min(a.Aa.y, c.Aa.y);
        this.Ba.x = Math.max(a.Ba.x, c.Ba.x);
        this.Ba.y = Math.max(a.Ba.y, c.Ba.y)
    };
    var Ac = function(a, c, b, d) {
        var e = 0, g = c[0].Le, f = c[1].Le, h = b.x * g.x + b.y * g.y - d;
        b = b.x * f.x + b.y * f.y - d;
        0 >= h && a[e++].Set(c[0]);
        0 >= b && a[e++].Set(c[1]);
        0 > h * b && (b = h / (h - b), d = a[e].Le, d.x = g.x + b * (f.x - g.x), d.y = g.y + b * (f.y - g.y), a[e].id = 0 < h ? c[0].id : c[1].id, e++);
        return e
    }, Bc = function(a, c, b, d, e) {
        for (var g = c.u.k.x *
                a.wa[b].x + c.u.m.x * a.wa[b].y, f = c.u.k.y * a.wa[b].x + c.u.m.y * a.wa[b].y, h = e.u.k.x * g + e.u.k.y * f, l = e.u.m.x * g + e.u.m.y * f, k = 0, n = Number.MAX_VALUE, m = 0; m < d.La; m++) {
            var q = d.K[m].x * h + d.K[m].y * l;
            q < n && (n = q, k = m)
        }
        return(e.position.x + (e.u.k.x * d.K[k].x + e.u.m.x * d.K[k].y) - (c.position.x + (c.u.k.x * a.K[b].x + c.u.m.x * a.K[b].y))) * g + (e.position.y + (e.u.k.y * d.K[k].x + e.u.m.y * d.K[k].y) - (c.position.y + (c.u.k.y * a.K[b].x + c.u.m.y * a.K[b].y))) * f
    }, Cc = function(a, c, b, d) {
        for (var e = d.position.x + (d.u.k.x * b.Ed.x + d.u.m.x * b.Ed.y), g = d.position.y + (d.u.k.y *
                b.Ed.x + d.u.m.y * b.Ed.y), e = e - (c.position.x + (c.u.k.x * a.Ed.x + c.u.m.x * a.Ed.y)), g = g - (c.position.y + (c.u.k.y * a.Ed.x + c.u.m.y * a.Ed.y)), f = e * c.u.k.x + g * c.u.k.y, g = e * c.u.m.x + g * c.u.m.y, e = 0, h = -Number.MAX_VALUE, l = 0; l < a.La; ++l) {
            var k = a.wa[l].x * f + a.wa[l].y * g;
            k > h && (h = k, e = l)
        }
        f = Bc(a, c, e, b, d);
        g = e - 1;
        0 > g && (g = a.La - 1);
        h = Bc(a, c, g, b, d);
        l = e + 1;
        l >= a.La && (l = 0);
        var k = Bc(a, c, l, b, d), n = 0, m = 0;
        if (h > f && h > k)
            for (n = g, m = h; ; )
                if (e = n - 1, 0 > e && (e = a.La - 1), f = Bc(a, c, e, b, d), f > m)
                    n = e, m = f;
                else
                    break;
        else if (k > f)
            for (n = l, m = k; ; )
                if (e = n + 1, e >= a.La && (e = 0), f = Bc(a,
                        c, e, b, d), f > m)
                    n = e, m = f;
                else
                    break;
        else
            n = e, m = f;
        return{eu: n, kp: m}
    }, Ec = function(a, c, b) {
        var d = new Dc;
        d.hy(c, b.rh, b.xp, b.sh, b.yp);
        for (var e = 0; 20 > e; ) {
            for (var g = [], f = 0; f < d.na; f++)
                g[f] = {}, g[f].hc = d.K[f].hc, g[f].ic = d.K[f].ic;
            2 == d.na ? d.qy() : 3 == d.na && d.ry();
            if (3 == d.na)
                break;
            f = d.Ax();
            if (f.hn() < oc)
                break;
            var h = f.Ch();
            d.K[d.na].hc = b.rh.an(V.Hg(b.xp.u, h));
            d.K[d.na].$c = V.vc(b.xp, b.rh.Tc(d.K[d.na].hc));
            d.K[d.na].ic = b.sh.an(V.Hg(b.yp.u, f));
            d.K[d.na].lf = V.vc(b.yp, b.sh.Tc(d.K[d.na].ic));
            d.K[d.na].Sc = V.tb(d.K[d.na].lf,
                    d.K[d.na].$c);
            S.fc(f);
            S.fc(h);
            e++;
            h = !1;
            for (f = 0; f < g.length; f++)
                if (d.K[d.na].hc == g[f].hc && d.K[d.na].ic == g[f].ic) {
                    h = !0;
                    break
                }
            if (h)
                break;
            d.na++
        }
        d.Bx(a.Gf, a.Hf);
        a.Sg = V.tb(a.Gf, a.Hf).Rf();
        d.Cy(c);
        b.Xw && (c = b.rh.Va, b = b.sh.Va, a.Sg > c + b && a.Sg > Number.MIN_VALUE ? (a.Sg -= c + b, d = V.tb(a.Hf, a.Gf), d.yd(), a.Gf.x += c * d.x, a.Gf.y += c * d.y, a.Hf.x -= b * d.x, a.Hf.y -= b * d.y, S.fc(d)) : (b = S.B(0, 0), b.x = 0.5 * (a.Gf.x + a.Hf.x), b.y = 0.5 * (a.Gf.y + a.Hf.y), a.Gf.x = a.Hf.x = b.x, a.Gf.y = a.Hf.y = b.y, a.Sg = 0, S.fc(b)))
    }, Fc = t(), Gc = function() {
        this.Gf = S.B(0, 0);
        this.Hf = S.B(0, 0);
        this.Sg = 0
    }, Hc = t();
    Hc.prototype.Set = function(a) {
        a.Yp(this)
    };
    Hc.prototype.an = function(a) {
        for (var c = 0, b = this.K[0].x * a.x + this.K[0].y * a.y, d = 1; d < this.na; d++) {
            var e = this.K[d].x * a.x + this.K[d].y * a.y;
            e > b && (c = d, b = e)
        }
        return c
    };
    Hc.prototype.bl = function(a) {
        return this.K[this.an(a)]
    };
    Hc.prototype.Tc = function(a) {
        void 0 === a && (a = 0);
        return this.K[a]
    };
    var Ic = function() {
        this.ng = null
    };
    y = Ic.prototype;
    y.Wk = function(a, c) {
        var b = Jc(c);
        b.Sa.Aa.x = a.Aa.x - 0.1;
        b.Sa.Aa.y = a.Aa.y - 0.1;
        b.Sa.Ba.x = a.Ba.x + 0.1;
        b.Sa.Ba.y =
                a.Ba.y + 0.1;
        this.xt(b);
        return b
    };
    y.Xk = function(a) {
        this.Ft(a);
        a.Jd()
    };
    y.Qp = function(a, c, b) {
        if (a.Sa.Gp(c))
            return!1;
        this.Ft(a);
        var d = 0.1 + 2 * Math.abs(b.x);
        b = 0.1 + 2 * Math.abs(b.y);
        a.Sa.Aa.x = c.Aa.x - d;
        a.Sa.Aa.y = c.Aa.y - b;
        a.Sa.Ba.x = c.Ba.x + d;
        a.Sa.Ba.y = c.Ba.y + b;
        this.xt(a);
        return!0
    };
    y.$k = function(a) {
        return a.Sa
    };
    y.Wp = function(a, c) {
        if (null !== this.ng) {
            var b = [];
            for (b.push(this.ng); 0 < b.length; ) {
                var d = b.pop();
                if (d.Sa.ol(c))
                    if (d.yt()) {
                        if (!a(d.Ue))
                            break
                    } else
                        b.push(d.$d), b.push(d.Xf)
            }
        }
    };
    y.xt = function(a) {
        if (null === this.ng)
            this.ng =
                    a, this.ng.parent = null;
        else {
            var c = this.xx(a), b = c.parent, d = Jc();
            d.parent = b;
            d.Sa.Sm(a.Sa, c.Sa);
            if (b)
                for (c.parent.$d == c?b.$d = d:b.Xf = d, d.$d = c, d.Xf = a, c.parent = d, a.parent = d; b && !b.Sa.Gp(d.Sa); )
                    b.Sa.Sm(b.$d.Sa, b.Xf.Sa), d = b, b = b.parent;
            else
                d.$d = c, d.Xf = a, c.parent = d, this.ng = a.parent = d
        }
    };
    y.xx = function(a) {
        a = a.Sa.yx();
        for (var c = this.ng; !c.yt(); )
            var b = c.$d, c = c.Xf, d = Math.abs((b.Sa.Aa.x + b.Sa.Ba.x) / 2 - a.x) + Math.abs((b.Sa.Aa.y + b.Sa.Ba.y) / 2 - a.y), e = Math.abs((c.Sa.Aa.x + c.Sa.Ba.x) / 2 - a.x) + Math.abs((c.Sa.Aa.y + c.Sa.Ba.y) / 2 -
                a.y), c = d < e ? b : c;
        S.fc(a);
        return c
    };
    y.Ft = function(a) {
        if (a == this.ng)
            this.ng = null;
        else {
            var c = a.parent, b = c.parent;
            a = c.$d == a ? c.Xf : c.$d;
            if (b)
                for (b.$d == c ? b.$d = a : b.Xf = a, a.parent = b; b; ) {
                    a = b.Sa;
                    b.Sa.Sm(b.$d.Sa, b.Xf.Sa);
                    if (a.Gp(b.Sa))
                        break;
                    b = b.parent
                }
            else
                this.ng = a, a.parent = null;
            c.Jd()
        }
    };
    var Kc = function() {
        this.lh = new Ic;
        this.Oo = []
    };
    y = Kc.prototype;
    y.Wk = function(a, c) {
        var b = this.lh.Wk(a, c);
        this.lt(b);
        return b
    };
    y.Xk = function(a) {
        this.yy(a);
        this.lh.Xk(a)
    };
    y.Qp = function(a, c, b) {
        this.lh.Qp(a, c, b) && this.lt(a)
    };
    y.ol = function(a,
            c) {
        return this.lh.$k(a).ol(this.lh.$k(c))
    };
    y.$k = function(a) {
        return this.lh.$k(a)
    };
    y.zy = function(a) {
        for (var c = []; 0 < this.Oo.length; ) {
            var b = this.Oo.pop();
            this.lh.Wp(function(a) {
                a != b.Ue && c.push(new Lc(b.Ue, a));
                return!0
            }, this.lh.$k(b))
        }
        for (var d = 0; d < c.length; ) {
            var e = c[d];
            a(e.Al, e.Bl);
            for (d++; d < c.length; ) {
                var g = c[d];
                if (!(g.Al == e.Al && g.Bl == e.Bl || g.Al == e.Bl && g.Bl == e.Al))
                    break;
                d++
            }
        }
    };
    y.Wp = function(a, c) {
        this.lh.Wp(a, c)
    };
    y.lt = function(a) {
        this.Oo.push(a)
    };
    y.yy = function(a) {
        wa(this.Oo, a)
    };
    var Mc = function(a) {
        this.Sa =
                zc();
        this.Ue = this.parent = this.Xf = this.$d = null;
        "undefined" != typeof a && (this.Ue = a)
    }, Nc = [], Jc = function(a) {
        if (0 < Nc.length) {
            var c = Nc.pop();
            "undefined" != typeof a && (c.Ue = a);
            c.Sa.ia();
            return c
        }
        return new Mc(a)
    };
    Mc.prototype.Jd = function() {
        this.Ue = this.parent = this.Xf = this.$d = null;
        Nc.push(this)
    };
    Mc.prototype.yt = function() {
        return null === this.$d
    };
    var Lc = function(a, c) {
        this.Al = a;
        this.Bl = c
    }, Pc = function() {
        this.Wa = this.Xb = 0;
        this.la = [];
        for (var a = 0; 2 > a; a++)
            this.la[a] = new Oc;
        this.Mc = S.B(0, 0);
        this.ta = S.B(0, 0)
    };
    Pc.prototype.Fc =
            function() {
                for (var a = 0; 2 > a; a++)
                    this.la[a].Fc();
                this.Mc.ia();
                this.ta.ia();
                this.Xb = this.Wa = 0
            };
    Pc.prototype.Set = function(a) {
        this.Xb = a.Xb;
        for (var c = 0; 2 > c; c++)
            this.la[c].Set(a.la[c]);
        this.Mc.I(a.Mc);
        this.ta.I(a.ta);
        this.Wa = a.Wa
    };
    Pc.prototype.lc = function() {
        var a = new Pc;
        a.Set(this);
        return a
    };
    var Oc = function() {
        this.ta = S.B(0, 0);
        this.bf = new vc;
        this.Fc()
    };
    Oc.prototype.Fc = function() {
        this.ta.ia();
        this.tj = this.pj = 0;
        this.bf.wi(0)
    };
    Oc.prototype.Set = function(a) {
        this.ta.I(a.ta);
        this.pj = a.pj;
        this.tj = a.tj;
        this.bf.Set(a.bf)
    };
    var Qc = function() {
        this.ta = S.B(0, 0);
        this.S = S.B(0, 0)
    };
    Qc.prototype.gc = function(a, c, b, d, e) {
        this.$h = c;
        this.ai = d;
        var g, f, h, l = h = f = 0, k = 0;
        d = c = 0;
        var n, m, l = 0;
        1 == a.count ? (this.Wa = Rc, g = this.$h.Tc(a.hc[0]), a = this.ai.Tc(a.ic[0]), m = g, n = b.u, f = b.position.x + (n.k.x * m.x + n.m.x * m.y), h = b.position.y + (n.k.y * m.x + n.m.y * m.y), m = a, n = e.u, l = e.position.x + (n.k.x * m.x + n.m.x * m.y), k = e.position.y + (n.k.y * m.x + n.m.y * m.y), this.S.x = l - f, this.S.y = k - h, this.S.yd()) : (a.ic[0] == a.ic[1] ? (this.Wa = Sc, c = this.$h.Tc(a.hc[0]), d = this.$h.Tc(a.hc[1]), a = this.ai.Tc(a.ic[0]),
                this.ta.x = 0.5 * (c.x + d.x), this.ta.y = 0.5 * (c.y + d.y), this.S = V.Gg(V.tb(d, c), 1), this.S.yd(), m = this.S, n = b.u, c = n.k.x * m.x + n.m.x * m.y, d = n.k.y * m.x + n.m.y * m.y, m = this.ta, n = b.u, f = b.position.x + (n.k.x * m.x + n.m.x * m.y), h = b.position.y + (n.k.y * m.x + n.m.y * m.y), m = a, n = e.u, l = e.position.x + (n.k.x * m.x + n.m.x * m.y), k = e.position.y + (n.k.y * m.x + n.m.y * m.y), l = (l - f) * c + (k - h) * d) : a.hc[0] == a.hc[0] ? (this.Wa = Tc, f = this.ai.Tc(a.ic[0]), h = this.ai.Tc(a.ic[1]), g = this.$h.Tc(a.hc[0]), this.ta.x = 0.5 * (f.x + h.x), this.ta.y = 0.5 * (f.y + h.y), this.S = V.Gg(V.tb(h, f),
                1), this.S.yd(), m = this.S, n = e.u, c = n.k.x * m.x + n.m.x * m.y, d = n.k.y * m.x + n.m.y * m.y, m = this.ta, n = e.u, l = e.position.x + (n.k.x * m.x + n.m.x * m.y), k = e.position.y + (n.k.y * m.x + n.m.y * m.y), m = g, n = b.u, f = b.position.x + (n.k.x * m.x + n.m.x * m.y), h = b.position.y + (n.k.y * m.x + n.m.y * m.y), l = (f - l) * c + (h - k) * d) : (c = this.$h.Tc(a.hc[0]), d = this.$h.Tc(a.hc[1]), f = this.ai.Tc(a.ic[0]), h = this.ai.Tc(a.ic[1]), l = V.Ub(b.u, V.tb(d, c)), k = V.Ub(e.u, V.tb(h, f)), e = l.x * l.x + l.y * l.y, b = k.x * k.x + k.y * k.y, g = V.tb(k, l), a = l.x * g.x + l.y * g.y, g = k.x * g.x + k.y * g.y, k = l.x * k.x + l.y * k.y,
                n = e * b - k * k, l = 0, 0 != n && (l = V.Bb((k * g - a * b) / n, 0, 1)), 0 > (k * l + g) / b && (l = V.Bb((k - a) / e, 0, 1)), g = S.B(0, 0), g.x = c.x + l * (d.x - c.x), g.y = c.y + l * (d.y - c.y), a = S.B(0, 0), a.x = f.x + l * (h.x - f.x), a.y = f.y + l * (h.y - f.y), 0 == l || 1 == l ? (this.Wa = Tc, this.S = V.Gg(V.tb(h, f), 1), this.S.yd(), this.ta = a) : (this.Wa = Sc, this.S = V.Gg(V.tb(d, c), 1), this.ta = g)), 0 > l && this.S.Tp())
    };
    Qc.prototype.Pf = function(a, c) {
        var b, d, e = 0;
        switch (this.Wa) {
            case Rc:
                b = V.Hg(a.u, this.S);
                d = V.Hg(c.u, this.S.Ch());
                b = this.$h.bl(b);
                d = this.ai.bl(d);
                b = V.vc(a, b);
                d = V.vc(c, d);
                e = (d.x - b.x) * this.S.x +
                        (d.y - b.y) * this.S.y;
                break;
            case Sc:
                e = V.Ub(a.u, this.S);
                b = V.vc(a, this.ta);
                d = V.Hg(c.u, e.Ch());
                d = this.ai.bl(d);
                d = V.vc(c, d);
                e = (d.x - b.x) * e.x + (d.y - b.y) * e.y;
                break;
            case Tc:
                e = V.Ub(c.u, this.S), d = V.vc(c, this.ta), b = V.Hg(a.u, e.Ch()), b = this.$h.bl(b), b = V.vc(a, b), e = (b.x - d.x) * e.x + (b.y - d.y) * e.y
        }
        return e
    };
    var Rc = 1, Sc = 2, Tc = 4, Dc = function() {
        this.oa = new Uc;
        this.Ga = new Uc;
        this.ge = new Uc;
        this.K = [this.oa, this.Ga, this.ge]
    };
    y = Dc.prototype;
    y.hy = function(a, c, b, d, e) {
        var g, f;
        this.na = a.count;
        for (var h = this.K, l = 0; l < this.na; l++) {
            var k =
                    h[l];
            k.hc = a.hc[l];
            k.ic = a.ic[l];
            g = c.Tc(k.hc);
            f = d.Tc(k.ic);
            k.$c = V.vc(b, g);
            k.lf = V.vc(e, f);
            k.Sc = V.tb(k.lf, k.$c);
            k.M = 0
        }
        1 < this.na && (a = a.MB, g = this.wt(), g < 0.5 * a || 2 * a < g || g < Number.MIN_VALUE) && (this.na = 0);
        0 == this.na && (k = h[0], k.hc = 0, k.ic = 0, g = c.Tc(0), f = d.Tc(0), k.$c = V.vc(b, g), k.lf = V.vc(e, f), k.Sc = V.tb(k.lf, k.$c), this.na = 1)
    };
    y.Cy = function(a) {
        a.MB = this.wt();
        a.count = this.na;
        for (var c = this.K, b = 0; b < this.na; b++)
            a.hc[b] = c[b].hc, a.ic[b] = c[b].ic
    };
    y.Ax = function() {
        if (1 == this.na)
            return this.oa.Sc.Ch();
        if (2 == this.na) {
            var a =
                    V.tb(this.Ga.Sc, this.oa.Sc);
            return 0 < V.qi(a, this.oa.Sc.Ch()) ? V.Ip(1, a) : V.Gg(a, 1)
        }
        return S.B(0, 0)
    };
    y.Bx = function(a, c) {
        1 == this.na ? (a.I(this.oa.$c), c.I(this.oa.lf)) : 2 == this.na ? (a.x = this.oa.M * this.oa.$c.x + this.Ga.M * this.Ga.$c.x, a.y = this.oa.M * this.oa.$c.y + this.Ga.M * this.Ga.$c.y, c.x = this.oa.M * this.oa.lf.x + this.Ga.M * this.Ga.lf.x, c.y = this.oa.M * this.oa.lf.y + this.Ga.M * this.Ga.lf.y) : 3 == this.na && (c.x = a.x = this.oa.M * this.oa.$c.x + this.Ga.M * this.Ga.$c.x + this.ge.M * this.ge.$c.x, c.y = a.y = this.oa.M * this.oa.$c.y + this.Ga.M *
                this.Ga.$c.y + this.ge.M * this.ge.$c.y)
    };
    y.wt = function() {
        return 1 == this.na ? 0 : 2 == this.na ? V.tb(this.oa.Sc, this.Ga.Sc).Rf() : 3 == this.na ? V.qi(V.tb(this.Ga.Sc, this.oa.Sc), V.tb(this.ge.Sc, this.oa.Sc)) : 0
    };
    y.qy = function() {
        var a = this.oa.Sc, c = this.Ga.Sc, b = V.tb(c, a), a = -(a.x * b.x + a.y * b.y);
        0 >= a ? this.na = this.oa.M = 1 : (c = c.x * b.x + c.y * b.y, 0 >= c ? (this.na = this.Ga.M = 1, this.oa.Set(this.Ga)) : (b = 1 / (c + a), this.oa.M = c * b, this.Ga.M = a * b, this.na = 2))
    };
    y.ry = function() {
        var a = this.oa.Sc, c = this.Ga.Sc, b = this.ge.Sc, d = V.tb(c, a), e = V.Hb(c, d), g =
                -V.Hb(a, d), f = V.tb(b, a), h = V.Hb(b, f), l = -V.Hb(a, f), k = V.tb(b, c), n = V.Hb(b, k), k = -V.Hb(c, k), f = V.qi(d, f), d = f * V.qi(c, b), b = f * V.qi(b, a), a = f * V.qi(a, c);
        0 >= g && 0 >= l ? this.na = this.oa.M = 1 : 0 < e && 0 < g && 0 >= a ? (h = 1 / (e + g), this.oa.M = e * h, this.Ga.M = g * h, this.na = 2) : 0 < h && 0 < l && 0 >= b ? (e = 1 / (h + l), this.oa.M = h * e, this.ge.M = l * e, this.na = 2, this.Ga.Set(this.ge)) : 0 >= e && 0 >= k ? (this.na = this.Ga.M = 1, this.oa.Set(this.Ga)) : 0 >= h && 0 >= n ? (this.na = this.ge.M = 1, this.oa.Set(this.ge)) : 0 < n && 0 < k && 0 >= d ? (e = 1 / (n + k), this.Ga.M = n * e, this.ge.M = k * e, this.na = 2, this.oa.Set(this.ge)) :
                (e = 1 / (d + b + a), this.oa.M = d * e, this.Ga.M = b * e, this.ge.M = a * e, this.na = 3)
    };
    var Vc = function() {
        this.hc = [0, 0, 0];
        this.ic = [0, 0, 0]
    }, Uc = t();
    Uc.prototype.Set = function(a) {
        this.$c.I(a.$c);
        this.lf.I(a.lf);
        this.Sc.I(a.Sc);
        this.M = a.M;
        this.hc = a.hc;
        this.ic = a.ic
    };
    var Wc = function() {
        this.rh = new Hc;
        this.sh = new Hc;
        this.Dw = new rc;
        this.Ew = new rc
    }, Xc = function() {
        this.ua = S.B(0, 0);
        this.la = [];
        for (var a = this.Xb = 0; 2 > a; a++)
            this.la[a] = S.B(0, 0)
    };
    Xc.prototype.gc = function(a, c, b, d, e) {
        if (0 != a.Xb) {
            var g = 0, f, h, l = 0, k = 0, n = 0, m = 0, q = 0;
            f = 0;
            switch (a.Wa) {
                case 1:
                    h =
                            c.u;
                    f = a.ta;
                    g = c.position.x + h.k.x * f.x + h.m.x * f.y;
                    c = c.position.y + h.k.y * f.x + h.m.y * f.y;
                    h = d.u;
                    f = a.la[0].ta;
                    a = d.position.x + h.k.x * f.x + h.m.x * f.y;
                    d = d.position.y + h.k.y * f.x + h.m.y * f.y;
                    f = a - g;
                    h = d - c;
                    l = f * f + h * h;
                    l > oc ? (l = Math.sqrt(l), this.ua.x = f / l, this.ua.y = h / l) : (this.ua.x = 1, this.ua.y = 0);
                    f = c + b * this.ua.y;
                    d -= e * this.ua.y;
                    this.la[0].x = 0.5 * (g + b * this.ua.x + (a - e * this.ua.x));
                    this.la[0].y = 0.5 * (f + d);
                    break;
                case 2:
                    h = c.u;
                    f = a.Mc;
                    l = h.k.x * f.x + h.m.x * f.y;
                    k = h.k.y * f.x + h.m.y * f.y;
                    h = c.u;
                    f = a.ta;
                    n = c.position.x + h.k.x * f.x + h.m.x * f.y;
                    m = c.position.y +
                            h.k.y * f.x + h.m.y * f.y;
                    this.ua.x = l;
                    this.ua.y = k;
                    for (g = 0; g < a.Xb; g++)
                        h = d.u, f = a.la[g].ta, q = d.position.x + h.k.x * f.x + h.m.x * f.y, f = d.position.y + h.k.y * f.x + h.m.y * f.y, this.la[g].x = q + 0.5 * (b - (q - n) * l - (f - m) * k - e) * l, this.la[g].y = f + 0.5 * (b - (q - n) * l - (f - m) * k - e) * k;
                    break;
                case 4:
                    for (h = d.u, f = a.Mc, l = h.k.x * f.x + h.m.x * f.y, k = h.k.y * f.x + h.m.y * f.y, h = d.u, f = a.ta, n = d.position.x + h.k.x * f.x + h.m.x * f.y, m = d.position.y + h.k.y * f.x + h.m.y * f.y, this.ua.x = - l, this.ua.y = - k, g = 0; g < a.Xb; g++)
                        h = c.u, f = a.la[g].ta, q = c.position.x + h.k.x * f.x + h.m.x * f.y, f = c.position.y +
                                h.k.y * f.x + h.m.y * f.y, this.la[g].x = q + 0.5 * (e - (q - n) * l - (f - m) * k - b) * l, this.la[g].y = f + 0.5 * (e - (q - n) * l - (f - m) * k - b) * k
                }
        }
    };
    var bc = function(a, c) {
        this.wd = "Body" + bc.Sp++;
        this.D = new $b;
        this.D.position.I(a.position);
        this.D.u.Set(a.Q);
        this.n = new rc;
        this.n.P.ia();
        this.n.rd = 1;
        this.n.Oe = this.n.M = a.Q;
        this.n.C.x = this.D.u.k.x * this.n.P.x + this.D.u.m.x * this.n.P.y;
        this.n.C.y = this.D.u.k.y * this.n.P.x + this.D.u.m.y * this.n.P.y;
        this.n.C.x += this.D.position.x;
        this.n.C.y += this.D.position.y;
        this.n.Hc.I(this.n.C);
        this.A = a.Cr.lc();
        this.fh =
                S.B(0, 0);
        this.rk = a.Gi;
        this.tB = a.Iq;
        this.Lr = a.Xt;
        this.Mr = a.bu;
        this.Zl = a.Vc;
        this.Ha = c;
        this.Gb = null;
        this.Ld = new Yc;
        this.Ki = new Zc;
        this.H = a.Yt;
        this.AB = a.gj;
        this.oB = a.Ci;
        this.mm = this.uj = 0;
        this.Wa = a.type;
        this.T = this.Wa == X.wc ? 1 : 0;
        this.J = this.Wa == X.wc ? 1 : 0;
        this.R = this.Ze = 0;
        this.xB = a.Ru;
        this.ak = new $c;
        this.Mo = []
    };
    y = bc.prototype;
    y.Hj = function(a) {
        a = new ac(this, this.D, a);
        this.Zl && a.Wk(this.Ha.Fd.qk, this.D);
        this.ak.gx(a);
        a.cm = this;
        0 < a.Io && this.Ht();
        this.Ha.Wr = !0;
        return a
    };
    y.Jd = function() {
        S.fc(this.A);
        S.fc(this.fh)
    };
    y.nt = function(a) {
        this.ak.iy(a);
        for (var c = this.Ld.Ia(ad); c; c = c.next)
            a != c.yc.Jb && a != c.yc.Fb || this.Ha.Fd.Jd(c.yc);
        this.Zl && a.Xk(this.Ha.Fd.qk);
        a.Jd();
        a.cm = null;
        this.Ht()
    };
    y.ml = function(a, c) {
        this.D.u.Set(c);
        this.D.position.I(a);
        var b = this.D.u, d = this.n.P;
        this.n.C.x = b.k.x * d.x + b.m.x * d.y;
        this.n.C.y = b.k.y * d.x + b.m.y * d.y;
        this.n.C.x += this.D.position.x;
        this.n.C.y += this.D.position.y;
        this.n.Hc.I(this.n.C);
        this.n.Oe = this.n.M = c;
        b = this.Ha.Fd.qk;
        for (d = this.ak.Ia(); d; d = d.next)
            d.Ue.Qt(b, this.D, this.D);
        this.Ha.Fd.Xm()
    };
    y.Xd = v("D");
    y.Zp = function(a) {
        this.ml(a, this.vd())
    };
    y.vd = function() {
        return this.n.M
    };
    y.jn = function(a) {
        this.ml(this.D.position, a)
    };
    y.Lj = function() {
        return this.n.C
    };
    y.si = function() {
        return this.n.P
    };
    y.xi = function(a) {
        this.Wa != X.ve && this.A.I(a)
    };
    y.ri = v("A");
    y.kl = function(a) {
        void 0 === a && (a = 0);
        this.Wa != X.ve && (this.H = a)
    };
    y.Ym = v("H");
    y.Nf = function(a, c) {
        this.Wa == X.wc && (this.Uc(!0), this.fh.x += a.x, this.fh.y += a.y, this.uj += (c.x - this.n.C.x) * a.y - (c.y - this.n.C.y) * a.x)
    };
    y.Pm = function(a) {
        void 0 === a && (a = 0);
        this.Wa == X.wc &&
                (this.Uc(!0), this.uj += a)
    };
    y.Kj = v("T");
    y.ut = function(a) {
        a || (a = new uc);
        a.og = this.T;
        a.Mj = this.Ze;
        a.Mg.I(this.n.P);
        return a
    };
    y.Ht = function() {
        this.R = this.Ze = this.J = this.T = 0;
        this.n.P.ia();
        if (this.Wa != X.ve && this.Wa != X.du) {
            for (var a = S.B(0, 0), c = this.ak.Ia(); c; c = c.next) {
                var b = c.Ue;
                0 != b.Io && (b = b.ut(), this.T += b.og, a.x += b.Mg.x * b.og, a.y += b.Mg.y * b.og, this.Ze += b.Mj)
            }
            0 < this.T ? (this.J = 1 / this.T, a.x *= this.J, a.y *= this.J) : this.J = this.T = 1;
            0 < this.Ze && !this.tB ? (this.Ze -= this.T * (a.x * a.x + a.y * a.y), this.Ze *= this.xB, this.R = 1 /
                    this.Ze) : this.R = this.Ze = 0;
            c = this.n.C.lc();
            this.n.P.I(a);
            this.n.Hc.I(V.vc(this.D, this.n.P));
            this.n.C.I(this.n.Hc);
            this.A.x += this.H * -(this.n.C.y - c.y);
            this.A.y += this.H * +(this.n.C.x - c.x);
            S.fc(a);
            S.fc(c)
        }
    };
    y.bn = function(a) {
        var c = this.D.u;
        a = S.B(c.k.x * a.x + c.m.x * a.y, c.k.y * a.x + c.m.y * a.y);
        a.x += this.D.position.x;
        a.y += this.D.position.y;
        return a
    };
    y.Op = function(a) {
        return V.Ub(this.D.u, a)
    };
    y.cd = function(a) {
        return V.Rp(this.D, a)
    };
    y.Np = function(a) {
        return V.Hg(this.D.u, a)
    };
    y.zx = function(a) {
        return S.B(this.A.x - this.H *
                (a.y - this.n.C.y), this.A.y + this.H * (a.x - this.n.C.x))
    };
    y.Ec = v("Wa");
    y.Uc = function(a) {
        if (this.Mr != a)
            for (this.Mr = a, this.mm = 0, a || (this.A.ia(), this.H = 0, this.fh.ia(), this.uj = 0), a = 0; a < this.Mo.length; a++)
                this.Mo[a].Tt(this)
    };
    y.dd = v("Mr");
    y.Dh = v("Zl");
    y.Lp = v("ak");
    y.Sk = function(a) {
        this.Ki.Sk(a)
    };
    y.il = function(a) {
        this.Ki.il(a)
    };
    y.Bh = v("Ld");
    y.Rt = function() {
        var a = bc.iC;
        a.u.Set(this.n.Oe);
        var c = a.u, b = this.n.P;
        a.position.x = this.n.Hc.x - (c.k.x * b.x + c.m.x * b.y);
        a.position.y = this.n.Hc.y - (c.k.y * b.x + c.m.y * b.y);
        c = this.Ha.Fd.qk;
        for (b = this.ak.Ia(); b; b = b.next)
            b.Ue.Qt(c, a, this.D)
    };
    y.Ib = function() {
        this.D.u.Set(this.n.M);
        var a = this.D.u, c = this.n.P;
        this.D.position.x = this.n.C.x - (a.k.x * c.x + a.m.x * c.y);
        this.D.position.y = this.n.C.y - (a.k.y * c.x + a.m.y * c.y)
    };
    y.yi = function(a) {
        if (this.Wa != X.wc && a.Wa != X.wc)
            return!1;
        for (var c = this.Gb; c; c = c.next)
            if (c.Ie == a && !1 == c.$g.Cv)
                return!1;
        return!0
    };
    y.Ah = function(a) {
        this.n.Ah(a);
        this.n.C.I(this.n.Hc);
        this.n.M = this.n.Oe;
        this.Ib()
    };
    bc.Sp = 0;
    var X = function() {
        this.position = S.B(0, 0);
        this.Cr = S.B(0, 0);
        this.Ci =
                this.gj = this.Yt = this.Q = 0;
        this.bu = this.Xt = !0;
        this.Gi = this.Iq = !1;
        this.type = X.ve;
        this.Vc = !0;
        this.Ru = 1
    };
    X.ve = 0;
    X.du = 1;
    X.wc = 2;
    var cd = function() {
        this.wn = [];
        for (var a = 0; a <= bd; a++)
            this.wn[a] = null;
        this.xn = [];
        for (a = 0; a <= bd; a++)
            this.xn[a] = null;
        this.Rj = {}
    };
    y = cd.prototype;
    y.Ia = function(a) {
        return this.wn[a]
    };
    y.Ej = function(a) {
        var c = a.wd;
        null == this.Rj[c] && (this.Of(a, c, bd), this.Tt(a), a.Mo.push(this))
    };
    y.Tt = function(a) {
        var c = a.Ec(), b = a.wd, d = a.dd(), e = a.Dh();
        c == X.wc ? this.Of(a, b, dd) : this.Sf(b, dd);
        c != X.ve ? this.Of(a, b,
                ed) : this.Sf(b, ed);
        c != X.ve && e && d ? this.Of(a, b, fd) : this.Sf(b, fd);
        d ? this.Of(a, b, gd) : this.Sf(b, gd);
        e ? this.Of(a, b, hd) : this.Sf(b, hd)
    };
    y.hl = function(a) {
        var c = a.wd;
        if (null != this.Rj[c]) {
            wa(a.Mo, this);
            for (a = 0; a <= bd; a++)
                this.Sf(c, a);
            delete this.Rj[c]
        }
    };
    y.Sf = function(a, c) {
        var b = this.Rj[a];
        if (null != b) {
            var d = b[c];
            null != d && (b[c] = null, b = d.ff, d = d.next, null == b ? this.wn[c] = d : b.pf(d), null == d ? this.xn[c] = b : d.qf(b))
        }
    };
    y.Of = function(a, c, b) {
        var d = this.Rj[c];
        if (null == d) {
            for (var d = [], e = 0; e <= bd; e++)
                d[e] = null;
            this.Rj[c] = d
        }
        null ==
                d[b] && (d[b] = new id(a), a = this.xn[b], null != a ? a.pf(d[b]) : this.wn[b] = d[b], d[b].qf(a), this.xn[b] = d[b])
    };
    var dd = 0, ed = 1, hd = 2, fd = 3, gd = 4, bd = 5, id = function(a) {
        this.body = a;
        this.ff = this.next = null
    };
    id.prototype.pf = ba("next");
    id.prototype.qf = ba("ff");
    id.prototype.Qa = v("body");
    var dc = t();
    dc.prototype.yi = function(a, c) {
        var b = a.tt(), d = c.tt();
        return b.Ph == d.Ph && 0 != b.Ph ? 0 < b.Ph : 0 != (b.zk & d.Tj) && 0 != (b.Tj & d.zk)
    };
    dc.Wy = new dc;
    var jd = function() {
        this.PB = [];
        this.pC = []
    }, cc = t();
    cc.prototype.Qm = t();
    var ld = function(a) {
        this.Ha = a;
        this.Nr = dc.Wy;
        this.dh = cc.cu;
        this.Dv = new kd;
        this.qk = new Kc
    };
    ld.prototype.ix = function(a, c) {
        var b = a.Qa(), d = c.Qa();
        if (b != d && d.yi(b) && this.Nr.yi(a, c)) {
            for (b = d.Ld.Ia(ad); b; b = b.next)
                if (d = b.yc.Jb, d == a) {
                    if (d = b.yc.Fb, d == c)
                        return
                } else if (d == c && (d = b.yc.Fb, d == a))
                    return;
            this.Dv.Me(a, c)
        }
    };
    ld.prototype.Xm = function() {
        var a = this;
        this.qk.zy(function(c, b) {
            a.ix(c, b)
        })
    };
    ld.prototype.Jd = function(a) {
        0 < a.Ge.Xb && (a.Jb.Qa().Uc(!0), a.Fb.Qa().Uc(!0));
        a.jy();
        this.Dv.Jd(a)
    };
    ld.prototype.mx = function() {
        for (var a = this.Ha.Ld.Ia(ad); a; a =
                a.next) {
            var c = a.yc, b = c.Jb, d = c.Fb, e = b.Qa(), g = d.Qa();
            if (!1 != e.dd() || !1 != g.dd()) {
                if (c.Un) {
                    if (!1 == g.yi(e)) {
                        this.Jd(c);
                        continue
                    }
                    if (!1 == this.Nr.yi(b, d)) {
                        this.Jd(c);
                        continue
                    }
                    c.lx()
                }
                !1 == this.qk.ol(b.qj, d.qj) ? this.Jd(c) : c.St(this.dh)
            }
        }
    };
    var md = function() {
        this.Tj = 1;
        this.zk = 65535;
        this.Ph = 0
    };
    md.prototype.lc = function() {
        var a = new md;
        a.Tj = this.Tj;
        a.zk = this.zk;
        a.Ph = this.Ph;
        return a
    };
    var ac = function(a, c, b) {
        this.wd = "Fixture" + ac.Sp++;
        this.sB = b.filter.lc();
        this.lj = zc();
        this.cm = a;
        this.kh = b.shape.lc();
        this.Io = b.uf;
        this.Qr =
                b.cg;
        this.lm = b.xg;
        this.Ko = b.er
    };
    y = ac.prototype;
    y.uc = v("kh");
    y.vi = v("Ko");
    y.tt = function() {
        return this.sB.lc()
    };
    y.Qa = v("cm");
    y.ut = function(a) {
        a || (a = new uc);
        this.kh.Vk(a, this.Io);
        return a
    };
    y.Jd = function() {
        yc.push(this.lj)
    };
    y.Wk = function(a, c) {
        this.kh.Gj(this.lj, c);
        this.qj = a.Wk(this.lj, this)
    };
    y.Xk = function(a) {
        null != this.qj && (a.Xk(this.qj), this.qj = null)
    };
    y.Qt = function(a, c, b) {
        if (this.qj) {
            var d = zc(), e = zc();
            this.kh.Gj(d, c);
            this.kh.Gj(e, b);
            this.lj.Sm(d, e);
            yc.push(d);
            yc.push(e);
            c = V.tb(b.position, c.position);
            a.Qp(this.qj, this.lj, c);
            S.fc(c)
        }
    };
    ac.Sp = 0;
    var gc = function() {
        this.filter = new md;
        this.filter.Tj = 1;
        this.filter.zk = 65535;
        this.filter.Ph = 0;
        this.shape = null;
        this.cg = 0.2;
        this.uf = this.xg = 0;
        this.er = !1
    }, $c = function() {
        this.Kq = this.Jq = null;
        this.Xn = {}
    };
    $c.prototype.Ia = v("Jq");
    $c.prototype.gx = function(a) {
        var c = a.wd;
        if (null == this.Xn[c]) {
            a = new nd(a);
            var b = this.Kq;
            null != b ? b.pf(a) : this.Jq = a;
            a.qf(b);
            this.Kq = a;
            this.Xn[c] = a
        }
    };
    $c.prototype.iy = function(a) {
        a = a.wd;
        var c = this.Xn[a];
        if (null != c) {
            var b = c.ff, c = c.next;
            null == b ? this.Jq =
                    c : b.pf(c);
            null == c ? this.Kq = b : c.qf(b);
            delete this.Xn[a]
        }
    };
    var nd = function(a) {
        this.Ue = a;
        this.ff = this.next = null
    };
    nd.prototype.pf = ba("next");
    nd.prototype.qf = ba("ff");
    var od = function(a, c) {
        this.BB = a;
        this.Bf = c;
        this.hg = [];
        this.Jo = [];
        this.Zh = [];
        this.eh = [];
        this.od = []
    };
    y = od.prototype;
    y.Rm = function() {
        this.hg = [];
        this.Jo = [];
        this.Zh = [];
        this.eh = [];
        this.od = []
    };
    y.Fh = function(a, c, b) {
        this.Gy(a, c);
        this.Bf.gc(a, this.eh, this.eh.length);
        this.My(a);
        this.Iy(a);
        this.Jy(a);
        this.Gt(this.Bf.ig);
        b && this.Hy(a)
    };
    y.Gy = function(a, c) {
        for (var b =
                0; b < this.Jo.length; b++) {
            var d = this.Jo[b];
            d.A.x += a.Ca * (c.x + d.J * d.fh.x);
            d.A.y += a.Ca * (c.y + d.J * d.fh.y);
            d.H += a.Ca * d.R * d.uj;
            d.A.xd(V.Bb(1 - a.Ca * d.AB, 0, 1));
            d.H *= V.Bb(1 - a.Ca * d.oB, 0, 1)
        }
    };
    y.My = function(a) {
        this.Bf.Ne(a);
        for (var c = 0; c < this.od.length; c++)
            this.od[c].Ne(a);
        for (c = 0; c < a.Lm; c++) {
            for (var b = 0; b < this.od.length; b++)
                this.od[b].ue(a);
            this.Bf.ue()
        }
        for (a = 0; a < this.od.length; a++)
            this.od[a].Jp();
        this.Bf.Jp()
    };
    y.Iy = function(a) {
        for (var c = 0; c < this.Zh.length; ++c) {
            var b = this.Zh[c], d = a.Ca * b.A.x, e = a.Ca * b.A.y;
            4 < d * d + e *
                    e && (b.A.yd(), b.A.x = 2 * b.A.x * a.Wg, b.A.y = 2 * b.A.y * a.Wg);
            d = a.Ca * b.H;
            d * d > mc && (b.H = 0 > b.H ? -lc * a.Wg : lc * a.Wg);
            b.n.Hc.I(b.n.C);
            b.n.Oe = b.n.M;
            b.n.C.x += a.Ca * b.A.x;
            b.n.C.y += a.Ca * b.A.y;
            b.n.M += a.Ca * b.H;
            b.Ib()
        }
    };
    y.Jy = function(a) {
        for (var c = 0; c < a.vm; c++) {
            for (var b = this.Bf.te(0.2), d = !0, e = 0; e < this.od.length; e++)
                var g = this.od[e].te(0.2), d = d && g;
            if (b && d)
                break
        }
    };
    y.Hy = function(a) {
        for (var c = Number.MAX_VALUE, b = 0; b < this.Zh.length; b++) {
            var d = this.Zh[b];
            !d.Lr || Math.abs(d.H) > nc || 1E-4 < V.Hb(d.A, d.A) ? c = d.mm = 0 : (d.mm += a.Ca, c = Math.min(c,
                    d.mm))
        }
        if (0.5 <= c)
            for (a = 0; a < this.hg.length; a++)
                this.hg[a].Uc(!1)
    };
    y.bq = function(a) {
        var c = 0, b = 0;
        this.Bf.gc(a, this.eh, this.eh.length);
        for (var d = this.Bf, c = 0; c < this.od.length; ++c)
            this.od[c].Ne(a);
        for (c = 0; c < a.Lm; ++c)
            for (d.ue(), b = 0; b < this.od.length; ++b)
                this.od[b].ue(a);
        for (c = 0; c < this.Zh.length; ++c) {
            var b = this.Zh[c], e = a.Ca * b.A.x, g = a.Ca * b.A.y;
            4 < e * e + g * g && (b.A.yd(), b.A.x = 2 * b.A.x * a.Wg, b.A.y = 2 * b.A.y * a.Wg);
            e = a.Ca * b.H;
            e * e > mc && (b.H = 0 > b.H ? -lc * a.Wg : lc * a.Wg);
            b.n.Hc.I(b.n.C);
            b.n.Oe = b.n.M;
            b.n.C.x += a.Ca * b.A.x;
            b.n.C.y +=
                    a.Ca * b.A.y;
            b.n.M += a.Ca * b.H;
            b.Ib()
        }
        for (c = 0; c < a.vm; ++c) {
            e = d.te(0.75);
            g = !0;
            for (b = 0; b < this.od.length; ++b)
                var f = this.od[b].te(0.2), g = g && f;
            if (e && g)
                break
        }
        this.Gt(d.ig)
    };
    y.Gt = function(a) {
        if (null != this.BB)
            for (var c = 0; c < this.eh.length; ++c)
                for (var b = a[c], d = new jd, e = 0; e < b.ef; ++e)
                    d.PB[e] = b.$b[e].Zb, d.pC[e] = b.$b[e].Bg
    };
    y.Ej = function(a) {
        this.hg.push(a);
        a.Ec() != X.ve && (this.Zh.push(a), a.Ec() == X.wc && this.Jo.push(a))
    };
    y.Fj = function(a) {
        this.eh.push(a)
    };
    y.jt = function(a) {
        this.od.push(a)
    };
    var pd = function(a, c, b, d, e) {
        this.Ca =
                a;
        var g = 0;
        0 < a && (g = 1 / a);
        this.Wg = g;
        this.nc = c;
        this.vm = b;
        this.Lm = d;
        this.yh = e
    }, ec = function(a, c) {
        this.Fd = new ld(this);
        this.Bf = new qd;
        this.Wr = !1;
        this.Gc = new cd;
        this.Ld = new Yc;
        this.Gb = null;
        this.Ki = new Zc;
        this.Lo = 0;
        this.qB = this.IB = !0;
        this.Lr = c;
        this.Ev = a;
        this.Fv = 0;
        this.wB = this.Hp(new X)
    };
    ec.Fx = 1 - 100 * Number.MIN_VALUE;
    y = ec.prototype;
    y.Kt = function(a) {
        this.Fd.Nr = a
    };
    y.Lt = function(a) {
        this.Fd.dh = a
    };
    y.Hp = function(a) {
        a = new bc(a, this);
        this.Gc.Ej(a);
        return a
    };
    y.Vm = function(a) {
        for (var c = a.Gb; c; ) {
            var b = c, c = c.next;
            this.Wm(b.$g)
        }
        for (c =
                a.Ki.Ia(); c; c = c.next)
            c.mu.hl(a);
        for (c = a.Ld.Ia(ad); c; c = c.next)
            this.Fd.Jd(c.yc);
        for (c = a.Lp().Ia(); c; c = c.next)
            a.nt(c.Ue);
        a.Jd();
        this.Gc.hl(a)
    };
    y.Um = function(a) {
        var c = Z.Me(a);
        c.tk = null;
        if (c.Yh = this.Gb)
            this.Gb.tk = c;
        this.Gb = c;
        this.Lo++;
        c.Gd.$g = c;
        c.Gd.Ie = c.V;
        c.Gd.prev = null;
        if (c.Gd.next = c.U.Gb)
            c.U.Gb.prev = c.Gd;
        c.U.Gb = c.Gd;
        c.Hd.$g = c;
        c.Hd.Ie = c.U;
        c.Hd.prev = null;
        if (c.Hd.next = c.V.Gb)
            c.V.Gb.prev = c.Hd;
        c.V.Gb = c.Hd;
        var b = a.L, d = a.N;
        if (!a.sq)
            for (a = d.Ld.Ia(ad); a; a = a.next)
                a.yc.$m(d) == b && a.yc.qt();
        return c
    };
    y.Wm = function(a) {
        var c =
                a.Cv;
        a.tk && (a.tk.Yh = a.Yh);
        a.Yh && (a.Yh.tk = a.tk);
        a == this.Gb && (this.Gb = a.Yh);
        var b = a.U, d = a.V;
        b.Uc(!0);
        d.Uc(!0);
        a.Gd.prev && (a.Gd.prev.next = a.Gd.next);
        a.Gd.next && (a.Gd.next.prev = a.Gd.prev);
        a.Gd == b.Gb && (b.Gb = a.Gd.next);
        a.Gd.prev = null;
        a.Gd.next = null;
        a.Hd.prev && (a.Hd.prev.next = a.Hd.next);
        a.Hd.next && (a.Hd.next.prev = a.Hd.prev);
        a.Hd == d.Gb && (d.Gb = a.Hd.next);
        a.Hd.prev = null;
        a.Hd.next = null;
        this.Lo--;
        if (!c)
            for (a = d.Ld.Ia(ad); a; a = a.next)
                a.yc.$m(d) == b && a.yc.qt()
    };
    y.Sk = function(a) {
        if (null !== a.Ha && a.Ha != this)
            throw Error("Controller can only be a member of one world");
        this.Ki.Sk(a);
        a.Ha = this;
        return a
    };
    y.il = function(a) {
        this.Ki.il(a);
        a.Ha = null;
        a.Rm()
    };
    y.Ig = function(a, c, b) {
        this.Wr && (this.Fd.Xm(), this.Wr = !1);
        a = new pd(a, this.Fv * a, c, b, this.IB);
        this.Fd.mx();
        0 < a.Ca && (this.Fh(a), this.qB && this.bq(a), this.Fv = a.Wg)
    };
    y.mt = function() {
        for (var a = this.Gc.Ia(dd); a; a = a.next)
            a.body.fh.ia(), a.body.uj = 0
    };
    y.Bh = v("Ld");
    var rd = [];
    ec.prototype.Fh = function(a) {
        for (var c = this.Ki.Ia(); c; c = c.next)
            c.mu.Ig(a);
        for (var c = new od(this.Fd.dh, this.Bf), b = this.Gc.Ia(bd); b; b = b.next)
            b.body.yb = !1;
        for (var d =
                this.Ld.Ia(ad); d; d = d.next)
            d.yc.yb = !1;
        for (b = this.Gb; b; b = b.Yh)
            b.yb = !1;
        for (b = this.Gc.Ia(fd); b; b = b.next)
            if (d = b.body, !d.yb) {
                c.Rm();
                rd.length = 0;
                var e = rd;
                e.push(d);
                for (d.yb = !0; 0 < e.length; ) {
                    var g = e.pop();
                    c.Ej(g);
                    g.dd() || g.Uc(!0);
                    if (g.Ec() != X.ve) {
                        for (d = g.Ld.Ia(sd); d; d = d.next) {
                            var f = d.yc;
                            f.yb || (c.Fj(f), f.yb = !0, f = f.$m(g), f.yb || (e.push(f), f.yb = !0))
                        }
                        for (d = g.Gb; d; d = d.next)
                            !d.$g.yb && d.Ie.Dh() && (c.jt(d.$g), d.$g.yb = !0, d.Ie.yb || (e.push(d.Ie), d.Ie.yb = !0))
                    }
                }
                c.Fh(a, this.Ev, this.Lr)
            }
        for (b = this.Gc.Ia(fd); b; b = b.next)
            b.body.Rt();
        this.Fd.Xm()
    };
    ec.prototype.bq = function(a) {
        for (var c = new od(this.Fd.dh, this.Bf), b = this.Gc.Ia(bd); b; b = b.next) {
            var d = b.body;
            d.yb = !1;
            d.n.rd = 0
        }
        for (var e = this.Ld.Ia(ad); e; e = e.next)
            e.yc.yb = !1, e.yc.xk = null;
        for (b = this.Gb; b; b = b.Yh)
            b.yb = !1;
        for (; ; ) {
            var b = this.Ky(), g = b.NB, b = b.OB;
            if (null === g || ec.Fx < b)
                break;
            e = g.Jb.Qa();
            d = g.Fb.Qa();
            ec.nw.Set(e.n);
            ec.ow.Set(d.n);
            e.Ah(b);
            d.Ah(b);
            g.St(this.Fd.dh);
            g.xk = null;
            if (g.jp || !g.enabled)
                e.n.Set(ec.nw), d.n.Set(ec.ow), e.Ib(), d.Ib();
            else if (g.Im) {
                e.Ec() != X.wc && (e = d);
                c.Rm();
                rd.length =
                        0;
                g = rd;
                g.push(e);
                for (e.yb = !0; 0 < g.length; )
                    if (d = g.pop(), c.Ej(d), d.dd() || d.Uc(!0), d.Ec() == X.wc) {
                        for (e = d.Ld.Ia(sd); e && 32 != c.pB; e = e.next) {
                            var f = e.yc;
                            f.yb || (c.Fj(f), f.yb = !0, f = f.$m(d), f.yb || (f.Ec() != X.ve && (f.Ah(b), f.Uc(!0), g.push(f)), f.yb = !0))
                        }
                        for (d = d.Gb; d; d = d.next)
                            32 != c.Lo && !d.$g.yb && d.Ie.Dh() && (c.jt(d.$g), d.$g.yb = !0, d.Ie.yb || (d.Ie.Ec() != X.ve && (d.Ie.Ah(b), d.Ie.Uc(!0), g.push(d.Ie)), d.Ie.yb = !0))
                    }
                c.bq(new pd((1 - b) * a.Ca, 0, a.Lm, a.vm, !1));
                for (b = 0; b < c.hg.length; b++)
                    if (c.hg[b].yb = !1, c.hg[b].dd() && c.hg[b].Ec() ==
                            X.wc)
                        for (c.hg[b].Rt(), e = c.hg[b].Ld.Ia(ad); e; e = e.next)
                            e.yc.xk = null;
                for (b = 0; b < c.pB; b++)
                    c.eh[b].yb = !1, c.eh[b].xk = null;
                for (b = 0; b < c.Lo; b++)
                    c.od[b].yb = !1;
                this.Fd.Xm()
            }
        }
    };
    ec.prototype.Ky = function() {
        for (var a = null, c = 1, b = this.Ld.Ia(td); b; b = b.next) {
            var d = b.yc;
            if (!this.Ly(d)) {
                var e = 1;
                if (null != d.xk)
                    e = d.xk;
                else {
                    if (d.Im)
                        e = 1;
                    else {
                        var e = d.Jb.Qa(), g = d.Fb.Qa(), f = e.n.rd;
                        e.n.rd < g.n.rd ? (f = g.n.rd, e.n.Ah(f)) : g.n.rd < e.n.rd && (f = e.n.rd, g.n.Ah(f));
                        e = d.rx(e.n, g.n);
                        0 < e && 1 > e && (e = (1 - e) * f + e)
                    }
                    d.xk = e
                }
                Number.MIN_VALUE < e && e < c && (a = d,
                        c = e)
            }
        }
        return{NB: a, OB: c}
    };
    ec.prototype.Ly = function(a) {
        var c = a.Jb.Qa();
        a = a.Fb.Qa();
        return c.Ec() == X.wc && c.dd() || a.Ec() == X.wc && a.dd() ? !1 : !0
    };
    var vd = function(a, c) {
        this.wd = "Contact" + ud++;
        this.Ge = new Pc;
        this.jm = new Pc;
        this.Im = !1;
        var b = a.Qa(), d = c.Qa();
        this.uq = b.Ec() != X.wc || b.rk || d.Ec() != X.wc || d.rk;
        this.jp = a.vi() || c.vi();
        this.Un = !1;
        this.Jb = a;
        this.Fb = c;
        this.enabled = !0;
        this.un = b.Bh();
        this.vn = d.Bh();
        this.Fp = d.Ha.Bh();
        this.kt()
    };
    y = vd.prototype;
    y.Fc = function(a, c) {
        this.Ge.Fc();
        this.jm.Fc();
        this.Im = !1;
        var b = a.Qa(),
                d = c.Qa();
        this.uq = b.Ec() != X.wc || b.rk || d.Ec() != X.wc || d.rk;
        this.jp = a.vi() || c.vi();
        this.Un = !1;
        this.Jb = a;
        this.Fb = c;
        this.enabled = !0;
        this.un = b.Bh();
        this.vn = d.Bh();
        this.Fp = d.Ha.Bh();
        this.kt()
    };
    y.kt = function() {
        this.un.Fj(this);
        this.vn.Fj(this);
        this.Fp.Fj(this);
        this.Ut()
    };
    y.Ut = function() {
        var a = !1, c = !1;
        !this.vi() && this.cn() && (this.Pp() && (a = !0), this.uq && (c = !0));
        this.un.fq(this, a, c);
        this.vn.fq(this, a, c);
        this.Fp.fq(this, a, c)
    };
    y.jy = function() {
        this.un.Xp(this);
        this.vn.Xp(this);
        this.Fp.Xp(this)
    };
    y.Pp = v("Im");
    y.vi =
            v("jp");
    y.cn = v("enabled");
    y.$m = function(a) {
        var c = this.Jb.Qa();
        return c != a ? c : this.Fb.Qa()
    };
    y.qt = function() {
        this.Un = !0
    };
    y.lx = function() {
        this.Un = !1
    };
    y.St = function(a) {
        var c = this.jm;
        this.jm = this.Ge;
        this.Ge = c;
        this.enabled = !0;
        var b = !1, c = this.Pp(), d = this.Jb.Qa(), e = this.Fb.Qa(), g = this.Jb.lj.ol(this.Fb.lj);
        if (this.jp) {
            if (g) {
                var b = this.Jb.uc(), d = d.Xd(), g = this.Fb.uc(), f = e.Xd(), e = new Fc;
                e.rh = new Hc;
                e.rh.Set(b);
                e.sh = new Hc;
                e.sh.Set(g);
                e.xp = d;
                e.yp = f;
                e.Xw = !0;
                d = new Vc;
                d.count = 0;
                b = new Gc;
                Ec(b, d, e);
                b = b.Sg < 10 * Number.MIN_VALUE
            }
            this.Ge.Xb =
            0
        } else {
            this.uq = d.Ec() != X.wc || d.rk || e.Ec() != X.wc || e.rk ? !0 : !1;
            if (g)
                for (this.Pf(), b = 0 < this.Ge.Xb, g = 0; g < this.Ge.Xb; g++) {
                    f = this.Ge.la[g];
                    f.pj = 0;
                    for (var h = f.tj = 0; h < this.jm.Xb; h++) {
                        var l = this.jm.la[h];
                        if (l.bf.zd == f.bf.zd) {
                            f.pj = l.pj;
                            f.tj = l.tj;
                            break
                        }
                    }
                }
            else
                this.Ge.Xb = 0;
            b != c && (d.Uc(!0), e.Uc(!0))
        }
        this.Im = b;
        b != c && this.Ut();
        !c && b && a.Qm(this)
    };
    y.Pf = t();
    y.rx = function(a, c) {
        wd.rh.Set(this.Jb.uc());
        wd.sh.Set(this.Fb.uc());
        wd.Dw = a;
        wd.Ew = c;
        wd.uC = 0.005;
        var b = wd;
        xd++;
        var d = b.rh, e = b.sh, g = b.Dw, f = b.Ew, h = d.Va + e.Va, b = b.uC,
                l = 0, k = 0, n = 0;
        yd.count = 0;
        for (zd.Xw = !1; ; ) {
            g.Xd(Ad, l);
            f.Xd(Bd, l);
            zd.rh = d;
            zd.sh = e;
            zd.xp = Ad;
            zd.yp = Bd;
            Ec(Cd, yd, zd);
            if (0 >= Cd.Sg) {
                l = 1;
                break
            }
            Dd.gc(yd, d, Ad, e, Bd);
            var m = Dd.Pf(Ad, Bd);
            if (0 >= m) {
                l = 1;
                break
            }
            0 == k && (n = m > h ? Math.max(h - b, 0.75 * h) : Math.max(m - b, 0.02 * h));
            if (m - n < 0.5 * b) {
                if (0 == k) {
                    l = 1;
                    break
                }
                break
            }
            var q = l, r = l, p = 1;
            g.Xd(Ad, p);
            f.Xd(Bd, p);
            var s = Dd.Pf(Ad, Bd);
            if (s >= n) {
                l = 1;
                break
            }
            for (var u = 0; ; ) {
                var x = 0, x = u & 1 ? r + (n - m) * (p - r) / (s - m) : 0.5 * (r + p);
                g.Xd(Ad, x);
                f.Xd(Bd, x);
                var z = Dd.Pf(Ad, Bd);
                if (Math.abs(z - n) < 0.025 * b) {
                    q = x;
                    break
                }
                z > n ? (r =
                        x, m = z) : (p = x, s = z);
                u++;
                Ed++;
                if (50 == u)
                    break
            }
            Fd = Math.max(Fd, u);
            if (q < (1 + 100 * Number.MIN_VALUE) * l)
                break;
            l = q;
            k++;
            Gd++;
            if (1E3 == k)
                break
        }
        Hd = Math.max(Hd, k);
        return l
    };
    var wd = new Wc, ud = 0, Id = function(a, c) {
        vd.call(this, a, c)
    };
    R(Id, vd);
    Id.prototype.Fc = function(a, c) {
        vd.prototype.Fc.call(this, a, c)
    };
    Id.prototype.Pf = function() {
        var a = this.Ge, c = this.Jb.uc(), b = this.Jb.Qa().D, d = this.Fb.uc(), e = this.Fb.Qa().D;
        a.Xb = 0;
        var g = e.position.x + (e.u.k.x * d.fb.x + e.u.m.x * d.fb.y) - (b.position.x + (b.u.k.x * c.fb.x + b.u.m.x * c.fb.y)), b = e.position.y +
                (e.u.k.y * d.fb.x + e.u.m.y * d.fb.y) - (b.position.y + (b.u.k.y * c.fb.x + b.u.m.y * c.fb.y)), e = c.Va + d.Va;
        g * g + b * b > e * e || (a.Wa = 1, a.ta.I(c.fb), a.Mc.ia(), a.Xb = 1, a.la[0].ta.I(d.fb), a.la[0].bf.wi(0))
    };
    var Kd = function() {
        this.gg = S.B(0, 0);
        this.Wb = S.B(0, 0);
        this.pd = S.B(0, 0);
        this.mh = new U;
        this.Yd = new U;
        this.$b = [];
        for (var a = 0; 2 > a; a++)
            this.$b[a] = new Jd
    }, Jd = function() {
        this.Wb = S.B(0, 0);
        this.Nb = S.B(0, 0);
        this.Ob = S.B(0, 0)
    };
    Jd.prototype.Fc = function() {
        this.Wb.Set(0, 0);
        this.Nb.Set(0, 0);
        this.Ob.Set(0, 0)
    };
    var kd = function() {
        this.Df = {};
        this.gh = {};
        this.Tk(Id, fc.nf, fc.nf);
        this.Tk(Ld, Y.nf, fc.nf);
        this.Tk(Md, Y.nf, Y.nf);
        this.Tk(Nd, "b2EdgeShape", fc.nf);
        this.Tk(Od, Y.nf, "b2EdgeShape")
    };
    kd.prototype.Tk = function(a, c, b) {
        this.gh[c] = this.gh[c] || {};
        this.gh[c][b] = this.gh[c][b] || [];
        this.Df[c] = this.Df[c] || {};
        this.Df[c][b] = new Pd;
        this.Df[c][b].pu = a;
        this.Df[c][b].cw = !0;
        c != b && (this.Df[b] = this.Df[b] || {}, this.Df[b][c] = new Pd, this.Df[b][c].pu = a, this.Df[b][c].cw = !1)
    };
    kd.prototype.Me = function(a, c) {
        var b = a.uc().ti(), d = c.uc().ti(), e = this.Df[b][d], g = e.pu;
        return null !=
                g ? e.cw ? 0 < this.gh[b][d].length ? (b = this.gh[b][d].pop(), b.Fc(a, c), b) : new g(a, c) : 0 < this.gh[d][b].length ? (b = this.gh[d][b].pop(), b.Fc(c, a), b) : new g(c, a) : null
    };
    kd.prototype.Jd = function(a) {
        var c = a.Jb.uc().ti(), b = a.Fb.uc().ti();
        this.gh[c][b].push(a)
    };
    var Yc = function() {
        this.En = [];
        for (var a = 0; a <= ad; a++)
            this.En[a] = null;
        this.Fn = [];
        for (a = 0; a <= ad; a++)
            this.Fn[a] = null;
        this.Ji = {}
    };
    y = Yc.prototype;
    y.Ia = function(a) {
        return this.En[a]
    };
    y.Fj = function(a) {
        var c = a.wd;
        if (null == this.Ji[c]) {
            this.Ji[c] = [];
            for (var b = 0; b <= ad; b++)
                this.Ji[c][b] =
                        null;
            this.Of(a, c, ad)
        }
    };
    y.fq = function(a, c, b) {
        c ? this.Of(a, a.wd, sd) : this.Sf(a.wd, sd);
        b ? this.Of(a, a.wd, td) : this.Sf(a.wd, td)
    };
    y.Xp = function(a) {
        a = a.wd;
        if (null != this.Ji[a]) {
            for (var c = 0; c <= ad; c++)
                this.Sf(a, c);
            delete this.Ji[a]
        }
    };
    y.Sf = function(a, c) {
        var b = this.Ji[a];
        if (null != b) {
            var d = b[c];
            if (null != d) {
                b[c] = null;
                var b = d.ff, e = d.next;
                null == b ? this.En[c] = e : b.pf(e);
                null == e ? this.Fn[c] = b : e.qf(b);
                Qd.push(d)
            }
        }
    };
    y.Of = function(a, c, b) {
        c = this.Ji[c];
        if (null == c[b]) {
            if (0 < Qd.length) {
                var d = Qd.pop();
                d.next = null;
                d.ff = null;
                d.yc =
                        a;
                a = d
            } else
                a = new Rd(a);
            c[b] = a;
            a = this.Fn[b];
            null != a ? (a.pf(c[b]), c[b].qf(a)) : this.En[b] = c[b];
            this.Fn[b] = c[b]
        }
    };
    var sd = 0, td = 1, ad = 2, Rd = function(a) {
        this.yc = a;
        this.ff = this.next = null
    }, Qd = [];
    Rd.prototype.pf = ba("next");
    Rd.prototype.qf = ba("ff");
    var Pd = t(), Sd = function() {
        this.ua = S.B(0, 0);
        this.Qo = [];
        this.la = [];
        for (var a = 0; 2 > a; a++)
            this.la[a] = S.B(0, 0)
    };
    Sd.prototype.gc = function(a) {
        switch (a.type) {
            case 1:
                this.Dy(a);
                break;
            case 2:
                this.Ey(a);
                break;
            case 4:
                this.Fy(a)
            }
    };
    Sd.prototype.Dy = function(a) {
        var c = a.L.D.u, b = a.Wb, d =
                a.L.D.position.x + (c.k.x * b.x + c.m.x * b.y), e = a.L.D.position.y + (c.k.y * b.x + c.m.y * b.y), c = a.N.D.u, b = a.$b[0].Wb, g = a.N.D.position.x + (c.k.x * b.x + c.m.x * b.y), c = a.N.D.position.y + (c.k.y * b.x + c.m.y * b.y), b = g - d, f = c - e, h = b * b + f * f;
        h > oc ? (h = Math.sqrt(h), this.ua.x = b / h, this.ua.y = f / h) : (this.ua.x = 1, this.ua.y = 0);
        this.la[0].x = 0.5 * (d + g);
        this.la[0].y = 0.5 * (e + c);
        this.Qo[0] = b * this.ua.x + f * this.ua.y - a.dp
    };
    Sd.prototype.Ey = function(a) {
        this.ua.x = a.L.D.u.k.x * a.gg.x + a.L.D.u.m.x * a.gg.y;
        this.ua.y = a.L.D.u.k.y * a.gg.x + a.L.D.u.m.y * a.gg.y;
        for (var c =
                a.L.D.position.x + (a.L.D.u.k.x * a.Wb.x + a.L.D.u.m.x * a.Wb.y), b = a.L.D.position.y + (a.L.D.u.k.y * a.Wb.x + a.L.D.u.m.y * a.Wb.y), d = 0; d < a.ef; d++) {
            var e = a.N.D.position.x + (a.N.D.u.k.x * a.$b[d].Wb.x + a.N.D.u.m.x * a.$b[d].Wb.y), g = a.N.D.position.y + (a.N.D.u.k.y * a.$b[d].Wb.x + a.N.D.u.m.y * a.$b[d].Wb.y);
            this.Qo[d] = (e - c) * this.ua.x + (g - b) * this.ua.y - a.dp;
            this.la[d].x = e;
            this.la[d].y = g
        }
    };
    Sd.prototype.Fy = function(a) {
        this.ua.x = a.N.D.u.k.x * a.gg.x + a.N.D.u.m.x * a.gg.y;
        this.ua.y = a.N.D.u.k.y * a.gg.x + a.N.D.u.m.y * a.gg.y;
        for (var c = a.N.D.position.x +
                (a.N.D.u.k.x * a.Wb.x + a.N.D.u.m.x * a.Wb.y), b = a.N.D.position.y + (a.N.D.u.k.y * a.Wb.x + a.N.D.u.m.y * a.Wb.y), d = 0; d < a.ef; d++) {
            var e = a.L.D.position.x + (a.L.D.u.k.x * a.$b[d].Wb.x + a.L.D.u.m.x * a.$b[d].Wb.y), g = a.L.D.position.y + (a.L.D.u.k.y * a.$b[d].Wb.x + a.L.D.u.m.y * a.$b[d].Wb.y);
            this.Qo[d] = (e - c) * this.ua.x + (g - b) * this.ua.y - a.dp;
            this.la[d].Set(e, g)
        }
        this.ua.x *= -1;
        this.ua.y *= -1
    };
    var qd = function() {
        this.ig = []
    };
    y = qd.prototype;
    y.gc = function(a, c, b) {
        for (this.dm = b; this.ig.length < this.dm; )
            this.ig[this.ig.length] = new Kd;
        for (a = 0; a <
                b; a++) {
            var d = c[a], e = d.Jb, g = d.Fb, f = e.kh.Va, h = g.kh.Va, l = e.Qa(), k = g.Qa(), n = d.Ge, m = Math.sqrt(e.Qr * g.Qr), q = e.lm > g.lm ? e.lm : g.lm, r = l.A.x, p = l.A.y, s = k.A.x, u = k.A.y, x = l.H, z = k.H;
            Td.gc(n, l.D, f, k.D, h);
            g = Td.ua.x;
            d = Td.ua.y;
            e = this.ig[a];
            e.L = l;
            e.N = k;
            e.JB = n;
            e.pd.x = g;
            e.pd.y = d;
            e.ef = n.Xb;
            e.cg = m;
            e.xg = q;
            e.gg.x = n.Mc.x;
            e.gg.y = n.Mc.y;
            e.Wb.x = n.ta.x;
            e.Wb.y = n.ta.y;
            e.dp = f + h;
            e.type = n.Wa;
            for (f = 0; f < e.ef; ++f) {
                m = n.la[f];
                h = e.$b[f];
                h.Zb = m.pj;
                h.Bg = m.tj;
                h.Wb.I(m.ta);
                var m = h.Nb.x = Td.la[f].x - l.n.C.x, q = h.Nb.y = Td.la[f].y - l.n.C.y, E = h.Ob.x = Td.la[f].x -
                        k.n.C.x, G = h.Ob.y = Td.la[f].y - k.n.C.y, F = m * d - q * g, C = E * d - G * g, F = F * F, C = C * C;
                h.mh = 1 / (l.J + k.J + l.R * F + k.R * C);
                var B = l.T * l.J + k.T * k.J, B = B + (l.T * l.R * F + k.T * k.R * C);
                h.Lz = 1 / B;
                C = d;
                B = -g;
                F = m * B - q * C;
                C = E * B - G * C;
                F *= F;
                C *= C;
                h.qC = 1 / (l.J + k.J + l.R * F + k.R * C);
                h.Km = 0;
                m = e.pd.x * (s + -z * G - r - -x * q) + e.pd.y * (u + z * E - p - x * m);
                -1 > m && (h.Km += -e.xg * m)
            }
            2 == e.ef && (u = e.$b[0], s = e.$b[1], n = l.J, l = l.R, r = k.J, k = k.R, p = u.Nb.x * d - u.Nb.y * g, u = u.Ob.x * d - u.Ob.y * g, x = s.Nb.x * d - s.Nb.y * g, s = s.Ob.x * d - s.Ob.y * g, g = n + r + l * p * p + k * u * u, d = n + r + l * x * x + k * s * s, k = n + r + l * p * x + k * u * s, g * g < 100 * (g * d - k *
                    k) ? (e.Yd.k.Set(g, k), e.Yd.m.Set(k, d), e.Yd.Mp(e.mh)) : e.ef = 1)
        }
    };
    y.Ne = function(a) {
        for (var c = 0; c < this.dm; ++c) {
            var b = this.ig[c], d = b.L, e = b.N, g = d.J, f = d.R, h = e.J, l = e.R, k = b.pd.x, n = b.pd.y, m = n, q = -k, r = 0, p = 0;
            if (a.yh)
                for (p = b.ef, r = 0; r < p; ++r) {
                    var s = b.$b[r];
                    s.Zb *= a.nc;
                    s.Bg *= a.nc;
                    var u = s.Zb * k + s.Bg * m, x = s.Zb * n + s.Bg * q;
                    d.H -= f * (s.Nb.x * x - s.Nb.y * u);
                    d.A.x -= g * u;
                    d.A.y -= g * x;
                    e.H += l * (s.Ob.x * x - s.Ob.y * u);
                    e.A.x += h * u;
                    e.A.y += h * x
                }
            else
                for (p = b.ef, r = 0; r < p; ++r)
                    d = b.$b[r], d.Zb = 0, d.Bg = 0
        }
    };
    y.ue = function() {
        for (var a = 0; a < this.dm; a++)
            this.ty(this.ig[a])
    };
    y.ty = function(a) {
        for (var c = a.pd.x, b = a.pd.y, d = 0; d < a.ef; d++)
            qd.prototype.uy(a, a.$b[d]);
        if (1 == a.ef) {
            var d = a.$b[0], e = d.Zb - d.mh * ((a.N.A.x - a.N.H * d.Ob.y - a.L.A.x + a.L.H * d.Nb.y) * c + (a.N.A.y + a.N.H * d.Ob.x - a.L.A.y - a.L.H * d.Nb.x) * b - d.Km), e = 0 < e ? e : 0, g = e - d.Zb, f = g * c, b = g * b;
            a.L.A.x -= a.L.J * f;
            a.L.A.y -= a.L.J * b;
            a.L.H -= a.L.R * (d.Nb.x * b - d.Nb.y * f);
            a.N.A.x += a.N.J * f;
            a.N.A.y += a.N.J * b;
            a.N.H += a.N.R * (d.Ob.x * b - d.Ob.y * f);
            d.Zb = e
        } else
            for (var d = a.$b[0], e = a.$b[1], g = d.Zb, f = e.Zb, h = (a.N.A.x - a.N.H * d.Ob.y - a.L.A.x + a.L.H * d.Nb.y) * c + (a.N.A.y + a.N.H *
                    d.Ob.x - a.L.A.y - a.L.H * d.Nb.x) * b - d.Km, b = (a.N.A.x - a.N.H * e.Ob.y - a.L.A.x + a.L.H * e.Nb.y) * c + (a.N.A.y + a.N.H * e.Ob.x - a.L.A.y - a.L.H * e.Nb.x) * b - e.Km, h = h - (a.Yd.k.x * g + a.Yd.m.x * f), b = b - (a.Yd.k.y * g + a.Yd.m.y * f); ; ) {
                c = -(a.mh.k.x * h + a.mh.m.x * b);
                if (0 <= c) {
                    var l = -(a.mh.k.y * h + a.mh.m.y * b);
                    if (0 <= l) {
                        this.ln(a, d, e, c - g, l - f);
                        d.Zb = c;
                        e.Zb = l;
                        break
                    }
                }
                c = -d.mh * h;
                if (0 <= c && 0 <= a.Yd.k.y * c + b) {
                    this.ln(a, d, e, c - g, -f);
                    d.Zb = c;
                    e.Zb = 0;
                    break
                }
                c = -e.mh * b;
                if (0 <= c && 0 <= a.Yd.m.x * c + h) {
                    this.ln(a, d, e, -g, c - f);
                    d.Zb = 0;
                    e.Zb = c;
                    break
                }
                if (0 <= h && 0 <= b) {
                    this.ln(a, d, e, -g,
                            -f);
                    d.Zb = 0;
                    e.Zb = 0;
                    break
                }
                break
            }
    };
    y.uy = function(a, c) {
        var b = a.pd.y, d = -a.pd.x, e = a.cg * c.Zb, e = V.Bb(c.Bg - c.qC * ((a.N.A.x - a.N.H * c.Ob.y - a.L.A.x + a.L.H * c.Nb.y) * b + (a.N.A.y + a.N.H * c.Ob.x - a.L.A.y - a.L.H * c.Nb.x) * d), -e, e), g = e - c.Bg, b = g * b, d = g * d;
        a.L.A.x -= a.L.J * b;
        a.L.A.y -= a.L.J * d;
        a.L.H -= a.L.R * (c.Nb.x * d - c.Nb.y * b);
        a.N.A.x += a.N.J * b;
        a.N.A.y += a.N.J * d;
        a.N.H += a.N.R * (c.Ob.x * d - c.Ob.y * b);
        c.Bg = e
    };
    y.ln = function(a, c, b, d, e) {
        var g = d * a.pd.x;
        d *= a.pd.y;
        var f = e * a.pd.x;
        e *= a.pd.y;
        a.L.A.x -= a.L.J * (g + f);
        a.L.A.y -= a.L.J * (d + e);
        a.L.H -= a.L.R * (c.Nb.x *
                d - c.Nb.y * g + b.Nb.x * e - b.Nb.y * f);
        a.N.A.x += a.N.J * (g + f);
        a.N.A.y += a.N.J * (d + e);
        a.N.H += a.N.R * (c.Ob.x * d - c.Ob.y * g + b.Ob.x * e - b.Ob.y * f);
        c.Zb = 0;
        b.Zb = 0
    };
    y.Jp = function() {
        for (var a = 0; a < this.dm; ++a)
            for (var c = this.ig[a], b = c.JB, d = 0; d < c.ef; ++d) {
                var e = b.la[d], g = c.$b[d];
                e.pj = g.Zb;
                e.tj = g.Bg
            }
    };
    y.te = function(a) {
        void 0 === a && (a = 0);
        for (var c = 0, b = 0; b < this.dm; b++) {
            var d = this.ig[b], e = d.L, g = d.N, f = e.T * e.J, h = e.T * e.R, l = g.T * g.J, k = g.T * g.R;
            Ud.gc(d);
            for (var n = Ud.ua, m = 0; m < d.ef; m++) {
                var q = d.$b[m], r = Ud.la[m], p = Ud.Qo[m], s = r.x - e.n.C.x, u = r.y -
                        e.n.C.y, x = r.x - g.n.C.x, r = r.y - g.n.C.y, c = c < p ? c : p, p = -q.Lz * V.Bb(a * (p + 0.005), -0.2, 0), q = p * n.x, p = p * n.y;
                e.n.C.x -= f * q;
                e.n.C.y -= f * p;
                e.n.M -= h * (s * p - u * q);
                e.Ib();
                g.n.C.x += l * q;
                g.n.C.y += l * p;
                g.n.M += k * (x * p - r * q);
                g.Ib()
            }
        }
        return-0.0075 < c
    };
    var Nd = function(a, c) {
        vd.call(this, a, c)
    };
    R(Nd, vd);
    Nd.prototype.Fc = function(a, c) {
        vd.prototype.Fc.call(this, a, c)
    };
    Nd.prototype.Pf = function() {
        this.Jb.uc();
        this.Fb.uc()
    };
    var Ld = function(a, c) {
        vd.call(this, a, c)
    };
    R(Ld, vd);
    Ld.prototype.Fc = function(a, c) {
        vd.prototype.Fc.call(this, a, c)
    };
    Ld.prototype.Pf =
            function() {
                a:{
                    var a = this.Ge, c = this.Jb.uc(), b = this.Jb.Qa().D, d = this.Fb.uc(), e = this.Fb.Qa().D;
                    a.Xb = 0;
                    for (var g = e.position.x + (e.u.k.x * d.fb.x + e.u.m.x * d.fb.y) - b.position.x, f = e.position.y + (e.u.k.y * d.fb.x + e.u.m.y * d.fb.y) - b.position.y, e = g * b.u.k.x + f * b.u.k.y, b = g * b.u.m.x + f * b.u.m.y, g = 0, f = -Number.MAX_VALUE, h = c.Va + d.Va, l = 0; l < c.La; ++l) {
                        var k = c.wa[l].x * (e - c.K[l].x) + c.wa[l].y * (b - c.K[l].y);
                        if (k > h)
                            break a;
                        k > f && (f = k, g = l)
                    }
                    k = g + 1;
                    k >= c.La && (k = 0);
                    var l = c.K[g], n = c.K[k];
                    f < Number.MIN_VALUE ? (a.Xb = 1, a.Wa = 2, a.Mc.I(c.wa[g]), a.ta.x =
                            0.5 * (l.x + n.x), a.ta.y = 0.5 * (l.y + n.y), a.la[0].ta.I(d.fb), a.la[0].bf.wi(0)) : 0 >= (e - l.x) * (n.x - l.x) + (b - l.y) * (n.y - l.y) ? (e - l.x) * (e - l.x) + (b - l.y) * (b - l.y) > h * h || (a.Xb = 1, a.Wa = 2, a.Mc.x = e - l.x, a.Mc.y = b - l.y, a.Mc.yd(), a.ta.I(l), a.la[0].ta.I(d.fb), a.la[0].bf.wi(0)) : 0 >= (e - n.x) * (l.x - n.x) + (b - n.y) * (l.y - n.y) ? (e - n.x) * (e - n.x) + (b - n.y) * (b - n.y) > h * h || (a.Xb = 1, a.Wa = 2, a.Mc.x = e - n.x, a.Mc.y = b - n.y, a.Mc.yd(), a.ta.I(n), a.la[0].ta.I(d.fb), a.la[0].bf.wi(0)) : (k = 0.5 * (l.x + n.x), l = 0.5 * (l.y + n.y), f = (e - k) * c.wa[g].x + (b - l) * c.wa[g].y, f > h || (a.Xb = 1, a.Wa =
                            2, a.Mc.x = c.wa[g].x, a.Mc.y = c.wa[g].y, a.Mc.yd(), a.ta.Set(k, l), a.la[0].ta.I(d.fb), a.la[0].bf.wi(0)))
                }
            };
    var Od = function(a, c) {
        vd.call(this, a, c)
    };
    R(Od, vd);
    Od.prototype.Fc = function(a, c) {
        vd.prototype.Fc.call(this, a, c)
    };
    Od.prototype.Pf = function() {
        this.Jb.uc();
        this.Fb.uc()
    };
    var Md = function(a, c) {
        vd.call(this, a, c)
    };
    R(Md, vd);
    Md.prototype.Fc = function(a, c) {
        vd.prototype.Fc.call(this, a, c)
    };
    Md.prototype.Pf = function() {
        var a = this.Ge, c = this.Jb.uc(), b = this.Jb.Qa().D, d = this.Fb.uc(), e = this.Fb.Qa().D;
        a.Xb = 0;
        var g = c.Va + d.Va,
                f = Cc(c, b, d, e), h = f.eu;
        if (!(f.kp > g)) {
            var l = Cc(d, e, c, b);
            if (!(l.kp > g)) {
                var k = c, n = d, m = b, q = e, r = 0;
                a.Wa = 2;
                l.kp > 0.98 * f.kp + 0.001 && (k = d, n = c, m = e, q = b, h = l.eu, a.Wa = 4, r = 1);
                c = h;
                b = q;
                d = Vd;
                void 0 === c && (c = 0);
                for (var e = m.u.k.x * k.wa[c].x + m.u.m.x * k.wa[c].y, f = m.u.k.y * k.wa[c].x + m.u.m.y * k.wa[c].y, l = b.u.k.x * e + b.u.k.y * f, f = b.u.m.x * e + b.u.m.y * f, e = l, l = 0, p = Number.MAX_VALUE, s = 0; s < n.La; s++) {
                    var u = e * n.wa[s].x + f * n.wa[s].y;
                    u < p && (p = u, l = s)
                }
                e = l + 1;
                e >= n.La && (e = 0);
                d[0].Le.x = b.position.x + (b.u.k.x * n.K[l].x + b.u.m.x * n.K[l].y);
                d[0].Le.y = b.position.y +
                        (b.u.k.y * n.K[l].x + b.u.m.y * n.K[l].y);
                d[0].id.Pt(c);
                d[0].id.Mt(l);
                d[0].id.Nt(0);
                d[1].Le.x = b.position.x + (b.u.k.x * n.K[e].x + b.u.m.x * n.K[e].y);
                d[1].Le.y = b.position.y + (b.u.k.y * n.K[e].x + b.u.m.y * n.K[e].y);
                d[1].id.Pt(c);
                d[1].id.Mt(e);
                d[1].id.Nt(1);
                c = k.K[h];
                h = h + 1 < k.La ? k.K[h + 1] : k.K[0];
                Wd.Set(h.x - c.x, h.y - c.y);
                Wd.yd();
                Xd.x = Wd.y;
                Xd.y = -Wd.x;
                Yd.Set(0.5 * (c.x + h.x), 0.5 * (c.y + h.y));
                Zd.x = m.u.k.x * Wd.x + m.u.m.x * Wd.y;
                Zd.y = m.u.k.y * Wd.x + m.u.m.y * Wd.y;
                $d.x = -Zd.x;
                $d.y = -Zd.y;
                ae.x = Zd.y;
                ae.y = -Zd.x;
                be.x = m.position.x + (m.u.k.x * c.x + m.u.m.x *
                        c.y);
                be.y = m.position.y + (m.u.k.y * c.x + m.u.m.y * c.y);
                ce.x = m.position.x + (m.u.k.x * h.x + m.u.m.x * h.y);
                ce.y = m.position.y + (m.u.k.y * h.x + m.u.m.y * h.y);
                if (!(2 > Ac(de, Vd, $d, -Zd.x * be.x - Zd.y * be.y + g) || 2 > Ac(ee, de, Zd, Zd.x * ce.x + Zd.y * ce.y + g))) {
                    a.Mc.I(Xd);
                    a.ta.I(Yd);
                    m = ae.x * be.x + ae.y * be.y;
                    for (k = h = 0; 2 > k; ++k)
                        ae.x * ee[k].Le.x + ae.y * ee[k].Le.y - m <= g && (c = ee[k].Le.x - q.position.x, n = ee[k].Le.y - q.position.y, a.la[h].ta.x = c * q.u.k.x + n * q.u.k.y, a.la[h].ta.y = c * q.u.m.x + n * q.u.m.y, a.la[h].bf.Set(ee[k].id), a.la[h].bf.my(r), h++);
                    a.Xb = h
                }
            }
        }
    };
    var ge =
            function() {
                this.wd = "Controller" + fe++;
                this.Ha = null;
                this.Gc = new cd
            };
    ge.prototype.Ig = t();
    ge.prototype.Ej = function(a) {
        this.Gc.Ej(a);
        a.Sk(this)
    };
    ge.prototype.hl = function(a) {
        this.Gc.hl(a);
        a.il(this)
    };
    ge.prototype.Rm = function() {
        for (var a = this.Gc.Ia(bd); a; a = a.next)
            this.hl(a.body)
    };
    var fe = 0, he = function() {
        ge.call(this);
        this.pd = S.B(0, -1);
        this.uf = this.offset = 0;
        this.Zw = S.B(0, 0);
        this.lB = 2;
        this.Ry = 1;
        this.yC = !0;
        this.Lu = null
    };
    R(he, ge);
    he.prototype.Ig = function() {
        this.yC && (this.Lu = this.Ha.Ev.lc());
        for (var a = this.Gc.Ia(gd); a; a =
                a.next) {
            for (var c = a.body, b = S.B(0, 0), d = S.B(0, 0), e = 0, g = 0, f = c.Lp().Ia(); f; f = f.next) {
                var h = S.B(0, 0), l = f.Ue.uc().Tm(this.pd, this.offset, c.Xd(), h), e = e + l;
                b.x += l * h.x;
                b.y += l * h.y;
                var k = 0, k = 1, g = g + l * k;
                d.x += l * h.x * k;
                d.y += l * h.y * k
            }
            e < Number.MIN_VALUE || (b.x /= e, b.y /= e, d.x /= g, d.y /= g, g = this.Lu.Ch(), g.xd(this.uf * e), c.Nf(g, d), g = c.zx(b), g.dq(this.Zw), g.xd(-this.lB * e), c.Nf(g, b), c.Pm(-c.Ze / c.Kj() * e * c.Ym() * this.Ry), S.fc(b), S.fc(d))
        }
    };
    var ie = function() {
        ge.call(this);
        this.it = S.B(0, 0)
    };
    R(ie, ge);
    ie.prototype.Ig = function(a) {
        a = S.B(this.it.x *
                a.Ca, this.it.y * a.Ca);
        for (var c = this.Gc.Ia(gd); c; c = c.next) {
            var b = c.body, d = b.ri();
            b.xi(S.B(d.x + a.x, d.y + a.y))
        }
        S.fc(a)
    };
    var je = function() {
        ge.call(this);
        this.wx = S.B(0, 0)
    };
    R(je, ge);
    je.prototype.Ig = function() {
        for (var a = this.Gc.Ia(gd); a; a = a.next) {
            var c = a.body;
            c.Nf(this.wx, c.Lj())
        }
    };
    var Zc = function() {
        this.wq = this.vq = null;
        this.Gn = {}
    };
    Zc.prototype.Ia = v("vq");
    Zc.prototype.Sk = function(a) {
        var c = a.wd;
        if (null == this.Gn[c]) {
            a = new ke(a);
            var b = this.wq;
            null != b ? b.pf(a) : this.vq = a;
            a.qf(b);
            this.wq = a;
            this.Gn[c] = a
        }
    };
    Zc.prototype.il =
            function(a) {
                a = a.wd;
                var c = this.Gn[a];
                if (null != c) {
                    var b = c.ff, c = c.next;
                    null == b ? this.vq = c : b.pf(c);
                    null == c ? this.wq = b : c.qf(b);
                    delete this.Gn[a]
                }
            };
    var ke = function(a) {
        this.mu = a;
        this.ff = this.next = null
    };
    ke.prototype.pf = ba("next");
    ke.prototype.qf = ba("ff");
    var le = function() {
        ge.call(this);
        this.st = 1;
        this.YA = !0
    };
    R(le, ge);
    le.prototype.Ig = function() {
        var a = null, c = null, b = 0, d = null, e = null, g = 0, f = 0, h = 0, g = null;
        if (this.YA)
            for (var l = this.Gc.Ia(bd); l; l = l.next)
                for (var a = l.body, c = a.Lj(), b = a.Kj(), k = this.Gc.Ia(bd); k; k = k.next) {
                    if (d =
                            k.body, a.dd() || d.dd())
                        e = d.Lj(), g = e.x - c.x, f = e.y - c.y, h = g * g + f * f, h < Number.MIN_VALUE || (g = S.B(g, f), g.xd(this.st / h / Math.sqrt(h) * b * d.Kj()), a.dd() && a.Nf(g, c), g.xd(-1), d.dd() && d.Nf(g, e), S.fc(g))
                }
        else
            for (l = this.Gc.Ia(bd); l; l = l.next)
                for (a = bodyNode.body, c = a.Lj(), b = a.Kj(), k = this.Gc.Ia(bd); k; k = k.next)
                    if (d = bodyNode.body, a.dd() || d.dd())
                        e = d.Lj(), g = e.x - c.x, f = e.y - c.y, h = g * g + f * f, h < Number.MIN_VALUE || (g = S.B(g, f), g.xd(this.st / h * b * d.Kj()), a.dd() && a.Nf(g, c), g.xd(-1), d.dd() && d.Nf(g, e), S.fc(g))
    };
    var me = function() {
        ge.call(this);
        this.wy = new U;
        this.as = 0
    };
    R(me, ge);
    me.prototype.Ig = function(a) {
        a = a.Ca;
        if (!(a <= Number.MIN_VALUE)) {
            a > this.as && 0 < this.as && (a = this.as);
            for (var c = this.Gc.Ia(gd); c; c = c.next) {
                var b = c.body, d = b.Op(V.Ub(this.wy, b.Np(b.ri())));
                b.xi(S.B(b.ri().x + d.x * a, b.ri().y + d.y * a))
            }
        }
    };
    var Z = function(a) {
        this.Gd = new ne;
        this.Hd = new ne;
        this.lg = S.B(0, 0);
        this.mg = S.B(0, 0);
        this.Wa = a.type;
        this.Yh = this.tk = null;
        this.U = a.L;
        this.V = a.N;
        this.Cv = a.sq
    };
    Z.prototype.Ec = v("Wa");
    Z.prototype.Zk = v("U");
    Z.prototype.Kp = v("V");
    Z.prototype.Dh = function() {
        return this.U.Dh() &&
                this.V.Dh()
    };
    Z.Me = function(a) {
        return a.Me()
    };
    Z.prototype.Ne = t();
    Z.prototype.ue = t();
    Z.prototype.Jp = t();
    Z.prototype.te = w(!1);
    Z.Gz = 0;
    Z.Xj = 1;
    Z.Ez = 2;
    Z.Cq = 3;
    Z.Fz = 4;
    Z.WD = 5;
    Z.Cz = 6;
    Z.Dz = 7;
    Z.Hz = 8;
    Z.Bz = 9;
    Z.Ad = 0;
    Z.$f = 1;
    Z.Kc = 2;
    Z.Mh = 3;
    var oe = function() {
        this.type = Z.Gz;
        this.N = this.L = null;
        this.sq = !1
    }, ne = t(), pe = function(a) {
        Z.call(this, a);
        this.ea = S.B(0, 0);
        this.fa = S.B(0, 0);
        this.qc = S.B(0, 0);
        this.ea.I(a.wb);
        this.fa.I(a.xb);
        this.Rr = a.length;
        this.Pr = a.ao;
        this.rB = a.Ln;
        this.Bv = this.oj = this.F = 0
    };
    R(pe, Z);
    pe.prototype.Ne = function(a) {
        var c,
                b = 0, d = this.U, e = this.V;
        c = d.D.u;
        var g = this.ea.x - d.n.P.x, f = this.ea.y - d.n.P.y, b = c.k.x * g + c.m.x * f, f = c.k.y * g + c.m.y * f, g = b;
        c = e.D.u;
        var h = this.fa.x - e.n.P.x, l = this.fa.y - e.n.P.y, b = c.k.x * h + c.m.x * l, l = c.k.y * h + c.m.y * l, h = b;
        this.qc.x = e.n.C.x + h - d.n.C.x - g;
        this.qc.y = e.n.C.y + l - d.n.C.y - f;
        b = Math.sqrt(this.qc.x * this.qc.x + this.qc.y * this.qc.y);
        0.005 < b ? this.qc.xd(1 / b) : this.qc.ia();
        c = g * this.qc.y - f * this.qc.x;
        var k = h * this.qc.y - l * this.qc.x;
        c = d.J + d.R * c * c + e.J + e.R * k * k;
        this.T = 0 != c ? 1 / c : 0;
        if (0 < this.Pr) {
            var b = b - this.Rr, k = 2 * Math.PI * this.Pr,
                    n = this.T * k * k;
            this.oj = a.Ca * (2 * this.T * this.rB * k + a.Ca * n);
            this.oj = 0 != this.oj ? 1 / this.oj : 0;
            this.Bv = b * a.Ca * n * this.oj;
            this.T = c + this.oj;
            this.T = 0 != this.T ? 1 / this.T : 0
        }
        a.yh ? (this.F *= a.nc, a = this.F * this.qc.x, c = this.F * this.qc.y, d.A.x -= d.J * a, d.A.y -= d.J * c, d.H -= d.R * (g * c - f * a), e.A.x += e.J * a, e.A.y += e.J * c, e.H += e.R * (h * c - l * a)) : this.F = 0
    };
    pe.prototype.ue = function() {
        var a = this.ea.x - this.U.n.P.x, c = this.ea.y - this.U.n.P.y, b = this.U.D.u.k.x * a + this.U.D.u.m.x * c, c = this.U.D.u.k.y * a + this.U.D.u.m.y * c, a = b, d = this.fa.x - this.V.n.P.x, e = this.fa.y -
                this.V.n.P.y, b = this.V.D.u.k.x * d + this.V.D.u.m.x * e, e = this.V.D.u.k.y * d + this.V.D.u.m.y * e, d = b, g = -this.T * (this.qc.x * (this.V.A.x - this.V.H * e - (this.U.A.x - this.U.H * c)) + this.qc.y * (this.V.A.y + this.V.H * d - (this.U.A.y + this.U.H * a)) + this.Bv + this.oj * this.F);
        this.F += g;
        b = g * this.qc.x;
        g *= this.qc.y;
        this.U.A.x -= this.U.J * b;
        this.U.A.y -= this.U.J * g;
        this.U.H -= this.U.R * (a * g - c * b);
        this.V.A.x += this.V.J * b;
        this.V.A.y += this.V.J * g;
        this.V.H += this.V.R * (d * g - e * b)
    };
    pe.prototype.te = function() {
        if (0 < this.Pr)
            return!0;
        var a = this.ea.x - this.U.n.P.x,
                c = this.ea.y - this.U.n.P.y, b = this.U.D.u.k.x * a + this.U.D.u.m.x * c, c = this.U.D.u.k.y * a + this.U.D.u.m.y * c, a = b, d = this.fa.x - this.V.n.P.x, e = this.fa.y - this.V.n.P.y, b = this.V.D.u.k.x * d + this.V.D.u.m.x * e, e = this.V.D.u.k.y * d + this.V.D.u.m.y * e, d = b, g = this.V.n.C.x + d - this.U.n.C.x - a, f = this.V.n.C.y + e - this.U.n.C.y - c, h = Math.sqrt(g * g + f * f), b = V.Bb(h - this.Rr, -0.2, 0.2), l = -this.T * b;
        this.qc.Set(g / h, f / h);
        g = l * this.qc.x;
        l *= this.qc.y;
        this.U.n.C.x -= this.U.J * g;
        this.U.n.C.y -= this.U.J * l;
        this.U.n.M -= this.U.R * (a * l - c * g);
        this.V.n.C.x += this.V.J *
                g;
        this.V.n.C.y += this.V.J * l;
        this.V.n.M += this.V.R * (d * l - e * g);
        this.U.Ib();
        this.V.Ib();
        return 0.005 > Math.abs(b)
    };
    var hc = function() {
        oe.call(this);
        this.wb = S.B(0, 0);
        this.xb = S.B(0, 0);
        this.type = Z.Cq;
        this.length = 1;
        this.Ln = this.ao = 0
    };
    R(hc, oe);
    hc.prototype.gc = function(a, c, b, d) {
        this.L = a;
        this.N = c;
        this.wb.I(this.L.cd(b));
        this.xb.I(this.N.cd(d));
        a = d.x - b.x;
        b = d.y - b.y;
        this.length = Math.sqrt(a * a + b * b);
        this.Ln = this.ao = 0
    };
    hc.prototype.Me = function() {
        return new pe(this)
    };
    var qe = function(a) {
        Z.call(this, a);
        this.De = S.B(0, 0);
        this.Ee =
                S.B(0, 0);
        this.Ur = new U;
        this.Ce = S.B(0, 0);
        this.De.I(a.wb);
        this.Ee.I(a.xb);
        this.Ur.ia();
        this.$l = 0;
        this.Ce.ia();
        this.bh = 0;
        this.CB = a.KB;
        this.EB = a.LB
    };
    R(qe, Z);
    qe.prototype.Ne = function(a) {
        var c, b = 0, d = this.U, e = this.V;
        c = d.D.u;
        var g = this.De.x - d.n.P.x, f = this.De.y - d.n.P.y, b = c.k.x * g + c.m.x * f, f = c.k.y * g + c.m.y * f, g = b;
        c = e.D.u;
        var h = this.Ee.x - e.n.P.x, l = this.Ee.y - e.n.P.y, b = c.k.x * h + c.m.x * l, l = c.k.y * h + c.m.y * l, h = b;
        c = d.J;
        var b = e.J, k = d.R, n = e.R, m = new U;
        m.k.x = c + b;
        m.m.x = 0;
        m.k.y = 0;
        m.m.y = c + b;
        m.k.x += k * f * f;
        m.m.x += -k * g * f;
        m.k.y += -k *
                g * f;
        m.m.y += k * g * g;
        m.k.x += n * l * l;
        m.m.x += -n * h * l;
        m.k.y += -n * h * l;
        m.m.y += n * h * h;
        m.Mp(this.Ur);
        this.$l = k + n;
        0 < this.$l && (this.$l = 1 / this.$l);
        a.yh ? (this.Ce.x *= a.nc, this.Ce.y *= a.nc, this.bh *= a.nc, a = this.Ce, d.A.x -= c * a.x, d.A.y -= c * a.y, d.H -= k * (g * a.y - f * a.x + this.bh), e.A.x += b * a.x, e.A.y += b * a.y, e.H += n * (h * a.y - l * a.x + this.bh)) : (this.Ce.ia(), this.bh = 0)
    };
    qe.prototype.ue = function(a) {
        var c, b = 0, d = this.U, e = this.V, g = d.A, f = d.H, h = e.A, l = e.H, k = d.J, n = e.J, m = d.R, q = e.R;
        c = d.D.u;
        var r = this.De.x - d.n.P.x, p = this.De.y - d.n.P.y, b = c.k.x * r + c.m.x * p,
                p = c.k.y * r + c.m.y * p, r = b;
        c = e.D.u;
        var s = this.Ee.x - e.n.P.x, u = this.Ee.y - e.n.P.y, b = c.k.x * s + c.m.x * u, u = c.k.y * s + c.m.y * u, s = b;
        c = 0;
        var b = -this.$l * (l - f), x = this.bh;
        c = a.Ca * this.EB;
        this.bh = V.Bb(this.bh + b, -c, c);
        b = this.bh - x;
        f -= m * b;
        l += q * b;
        c = V.Ub(this.Ur, S.B(-(h.x - l * u - g.x + f * p), -(h.y + l * s - g.y - f * r)));
        b = this.Ce.lc();
        this.Ce.Fg(c);
        c = a.Ca * this.CB;
        this.Ce.hn() > c * c && (this.Ce.yd(), this.Ce.xd(c));
        c = V.tb(this.Ce, b);
        g.x -= k * c.x;
        g.y -= k * c.y;
        f -= m * (r * c.y - p * c.x);
        h.x += n * c.x;
        h.y += n * c.y;
        l += q * (s * c.y - u * c.x);
        d.H = f;
        e.H = l
    };
    qe.prototype.te = w(!0);
    var re = function() {
        oe.call(this);
        this.wb = S.B(0, 0);
        this.xb = S.B(0, 0);
        this.type = Z.Bz;
        this.LB = this.KB = 0
    };
    R(re, oe);
    re.prototype.gc = function(a, c, b) {
        this.L = a;
        this.N = c;
        this.wb.I(this.L.cd(b));
        this.xb.I(this.N.cd(b))
    };
    re.prototype.Me = function() {
        return new qe(this)
    };
    var te = function(a) {
        Z.call(this, a);
        this.hh = S.B(0, 0);
        this.ih = S.B(0, 0);
        this.ea = S.B(0, 0);
        this.fa = S.B(0, 0);
        this.Eb = new se;
        var c = a.jk.Wa, b = a.kk.Wa;
        this.vk = this.sj = this.uk = this.rj = null;
        var d = 0, e = 0;
        this.uB = a.jk.Zk();
        this.U = a.jk.Kp();
        c == Z.Xj ? (this.rj = a.jk,
                this.hh.I(this.rj.ea), this.ea.I(this.rj.fa), d = this.rj.Zm()) : (this.uk = a.jk, this.hh.I(this.uk.ea), this.ea.I(this.uk.fa), d = this.uk.al());
        this.vB = a.kk.Zk();
        this.V = a.kk.Kp();
        b == Z.Xj ? (this.sj = a.kk, this.ih.I(this.sj.ea), this.fa.I(this.sj.fa), e = this.sj.Zm()) : (this.vk = a.kk, this.ih.I(this.vk.ea), this.fa.I(this.vk.fa), e = this.vk.al());
        this.Mb = a.ke;
        this.sk = d + this.Mb * e;
        this.F = 0
    };
    R(te, Z);
    te.prototype.Ne = function(a) {
        var c = this.uB, b = this.vB, d = this.U, e = this.V, g = 0, f = 0, h = 0, l = 0, k = h = 0, n = 0;
        this.Eb.ia();
        this.rj ? (this.Eb.Ai =
                -1, n += d.R) : (c = c.D.u, f = this.uk.Rd, g = c.k.x * f.x + c.m.x * f.y, f = c.k.y * f.x + c.m.y * f.y, c = d.D.u, h = this.ea.x - d.n.P.x, l = this.ea.y - d.n.P.y, k = c.k.x * h + c.m.x * l, l = c.k.y * h + c.m.y * l, h = k * f - l * g, this.Eb.zf.Set(-g, -f), this.Eb.Ai = -h, n += d.J + d.R * h * h);
        this.sj ? (this.Eb.Bi = -this.Mb, n += this.Mb * this.Mb * e.R) : (c = b.D.u, f = this.vk.Rd, g = c.k.x * f.x + c.m.x * f.y, f = c.k.y * f.x + c.m.y * f.y, c = e.D.u, h = this.fa.x - e.n.P.x, l = this.fa.y - e.n.P.y, k = c.k.x * h + c.m.x * l, l = c.k.y * h + c.m.y * l, h = k * f - l * g, this.Eb.Af.Set(-this.Mb * g, -this.Mb * f), this.Eb.Bi = -this.Mb * h, n += this.Mb *
                this.Mb * (e.J + e.R * h * h));
        this.T = 0 < n ? 1 / n : 0;
        a.yh ? (d.A.x += d.J * this.F * this.Eb.zf.x, d.A.y += d.J * this.F * this.Eb.zf.y, d.H += d.R * this.F * this.Eb.Ai, e.A.x += e.J * this.F * this.Eb.Af.x, e.A.y += e.J * this.F * this.Eb.Af.y, e.H += e.R * this.F * this.Eb.Bi) : this.F = 0
    };
    te.prototype.ue = function() {
        var a = this.U, c = this.V, b = -this.T * this.Eb.ox(a.A, a.H, c.A, c.H);
        this.F += b;
        a.A.x += a.J * b * this.Eb.zf.x;
        a.A.y += a.J * b * this.Eb.zf.y;
        a.H += a.R * b * this.Eb.Ai;
        c.A.x += c.J * b * this.Eb.Af.x;
        c.A.y += c.J * b * this.Eb.Af.y;
        c.H += c.R * b * this.Eb.Bi
    };
    te.prototype.te = function() {
        var a =
                this.U, c = this.V, b = 0, d = 0, b = this.rj ? this.rj.Zm() : this.uk.al(), d = this.sj ? this.sj.Zm() : this.vk.al(), b = -this.T * (this.sk - (b + this.Mb * d));
        a.n.C.x += a.J * b * this.Eb.zf.x;
        a.n.C.y += a.J * b * this.Eb.zf.y;
        a.n.M += a.R * b * this.Eb.Ai;
        c.n.C.x += c.J * b * this.Eb.Af.x;
        c.n.C.y += c.J * b * this.Eb.Af.y;
        c.n.M += c.R * b * this.Eb.Bi;
        a.Ib();
        c.Ib();
        return!0
    };
    var ue = function() {
        oe.call(this);
        this.type = Z.Cz;
        this.kk = this.jk = null;
        this.ke = 1
    };
    R(ue, oe);
    ue.prototype.gc = function(a, c, b) {
        this.jk = a;
        this.L = a.Zk();
        this.kk = c;
        this.N = c.Zk();
        this.ke = b
    };
    ue.prototype.Me =
            function() {
                return new te(this)
            };
    var se = function() {
        this.zf = S.B(0, 0);
        this.Af = S.B(0, 0)
    };
    se.prototype.ia = function() {
        this.zf.ia();
        this.Ai = 0;
        this.Af.ia();
        this.Bi = 0
    };
    se.prototype.Set = function(a, c, b, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        this.zf.I(a);
        this.Ai = c;
        this.Af.I(b);
        this.Bi = d
    };
    se.prototype.ox = function(a, c, b, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        return this.zf.x * a.x + this.zf.y * a.y + this.Ai * c + (this.Af.x * b.x + this.Af.y * b.y) + this.Bi * d
    };
    var ve = function(a) {
        Z.call(this, a);
        this.ea = S.B(0, 0);
        this.fa = S.B(0, 0);
        this.Rd = S.B(0, 0);
        this.jh = S.B(0, 0);
        this.S = S.B(0, 0);
        this.ka = S.B(0, 0);
        this.ca = new U;
        this.F = S.B(0, 0);
        this.ea.I(a.wb);
        this.fa.I(a.xb);
        this.Rd.I(a.jj);
        this.jh.x = -this.Rd.y;
        this.jh.y = this.Rd.x;
        this.F.ia();
        this.Ka = this.Id = 0;
        this.Fe = a.Kr;
        this.He = a.$s;
        this.Vr = a.$r;
        this.hm = a.Bk;
        this.Cf = a.Oi;
        this.Xh = a.Yj;
        this.za = Z.Ad;
        this.S.ia();
        this.ka.ia()
    };
    R(ve, Z);
    ve.prototype.al = function() {
        var a = this.U, c = this.V, b = a.bn(this.ea), d = c.bn(this.fa), c = d.x - b.x, b = d.y - b.y, a = a.Op(this.Rd);
        return a.x * c + a.y * b
    };
    ve.prototype.Ne = function(a) {
        var c =
                this.U, b = this.V, d, e = 0;
        this.lg.I(c.si());
        this.mg.I(b.si());
        var g = c.Xd();
        b.Xd();
        d = c.D.u;
        var f = this.ea.x - this.lg.x, h = this.ea.y - this.lg.y, e = d.k.x * f + d.m.x * h, h = d.k.y * f + d.m.y * h, f = e;
        d = b.D.u;
        var l = this.fa.x - this.mg.x, k = this.fa.y - this.mg.y, e = d.k.x * l + d.m.x * k, k = d.k.y * l + d.m.y * k, l = e;
        d = b.n.C.x + l - c.n.C.x - f;
        e = b.n.C.y + k - c.n.C.y - h;
        this.Kb = c.J;
        this.Lb = b.J;
        this.md = c.R;
        this.nd = b.R;
        this.S.I(V.Ub(g.u, this.Rd));
        this.Ya = (d + f) * this.S.y - (e + h) * this.S.x;
        this.Za = l * this.S.y - k * this.S.x;
        this.Id = this.Kb + this.Lb + this.md * this.Ya * this.Ya +
                this.nd * this.Za * this.Za;
        this.Id = this.Id > Number.MIN_VALUE ? 1 / this.Id : 0;
        this.ka.I(V.Ub(g.u, this.jh));
        this.bb = (d + f) * this.ka.y - (e + h) * this.ka.x;
        this.cb = l * this.ka.y - k * this.ka.x;
        g = this.Kb;
        f = this.Lb;
        h = this.md;
        l = this.nd;
        this.ca.k.x = g + f + h * this.bb * this.bb + l * this.cb * this.cb;
        this.ca.k.y = h * this.bb * this.Ya + l * this.cb * this.Za;
        this.ca.m.x = this.ca.k.y;
        this.ca.m.y = g + f + h * this.Ya * this.Ya + l * this.Za * this.Za;
        this.Cf ? (d = this.S.x * d + this.S.y * e, 0.01 > Math.abs(this.He - this.Fe) ? this.za = Z.Mh : d <= this.Fe ? this.za != Z.$f && (this.za = Z.$f,
                this.F.y = 0) : d >= this.He ? this.za != Z.Kc && (this.za = Z.Kc, this.F.y = 0) : (this.za = Z.Ad, this.F.y = 0)) : this.za = Z.Ad;
        !1 == this.Xh && (this.Ka = 0);
        a.yh ? (this.F.x *= a.nc, this.F.y *= a.nc, this.Ka *= a.nc, a = this.F.x * this.ka.x + (this.Ka + this.F.y) * this.S.x, d = this.F.x * this.ka.y + (this.Ka + this.F.y) * this.S.y, e = this.F.x * this.bb + (this.Ka + this.F.y) * this.Ya, g = this.F.x * this.cb + (this.Ka + this.F.y) * this.Za, c.A.x -= this.Kb * a, c.A.y -= this.Kb * d, c.H -= this.md * e, b.A.x += this.Lb * a, b.A.y += this.Lb * d, b.H += this.nd * g) : (this.F.ia(), this.Ka = 0)
    };
    ve.prototype.ue =
            function(a) {
                var c = this.U, b = this.V, d = c.A, e = c.H, g = b.A, f = b.H, h = 0, l = 0, k = 0, n = 0;
                this.Xh && this.za != Z.Mh && (n = this.Id * (this.hm - (this.S.x * (g.x - d.x) + this.S.y * (g.y - d.y) + this.Za * f - this.Ya * e)), h = this.Ka, l = a.Ca * this.Vr, this.Ka = V.Bb(this.Ka + n, -l, l), n = this.Ka - h, h = n * this.S.x, l = n * this.S.y, k = n * this.Ya, n *= this.Za, d.x -= this.Kb * h, d.y -= this.Kb * l, e -= this.md * k, g.x += this.Lb * h, g.y += this.Lb * l, f += this.nd * n);
                l = this.ka.x * (g.x - d.x) + this.ka.y * (g.y - d.y) + this.cb * f - this.bb * e;
                this.Cf && this.za != Z.Ad ? (k = this.S.x * (g.x - d.x) + this.S.y * (g.y -
                        d.y) + this.Za * f - this.Ya * e, h = this.F.lc(), a = this.ca.Fh(S.B(0, 0), -l, -k), this.F.Fg(a), this.za == Z.$f ? this.F.y = Math.max(this.F.y, 0) : this.za == Z.Kc && (this.F.y = Math.min(this.F.y, 0)), l = -l - (this.F.y - h.y) * this.ca.m.x, k = 0, k = 0 != this.ca.k.x ? l / this.ca.k.x + h.x : h.x, this.F.x = k, a.x = this.F.x - h.x, a.y = this.F.y - h.y, h = a.x * this.ka.x + a.y * this.S.x, l = a.x * this.ka.y + a.y * this.S.y, k = a.x * this.bb + a.y * this.Ya, n = a.x * this.cb + a.y * this.Za) : (a = 0, a = 0 != this.ca.k.x ? -l / this.ca.k.x : 0, this.F.x += a, h = a * this.ka.x, l = a * this.ka.y, k = a * this.bb, n = a * this.cb);
                d.x -= this.Kb * h;
                d.y -= this.Kb * l;
                e -= this.md * k;
                g.x += this.Lb * h;
                g.y += this.Lb * l;
                f += this.nd * n;
                c.A.I(d);
                c.H = e;
                b.A.I(g);
                b.H = f
            };
    ve.prototype.te = function() {
        var a = this.U, c = this.V, b = a.n.C, d = a.n.M, e = c.n.C, g = c.n.M, f, h = 0, l = 0, k = 0, n = 0, m = f = 0, q = 0, l = !1, r = 0, p = U.Jj(d), k = U.Jj(g);
        f = p;
        var q = this.ea.x - this.lg.x, s = this.ea.y - this.lg.y, h = f.k.x * q + f.m.x * s, s = f.k.y * q + f.m.y * s, q = h;
        f = k;
        k = this.fa.x - this.mg.x;
        n = this.fa.y - this.mg.y;
        h = f.k.x * k + f.m.x * n;
        n = f.k.y * k + f.m.y * n;
        k = h;
        f = e.x + k - b.x - q;
        h = e.y + n - b.y - s;
        if (this.Cf) {
            this.S = V.Ub(p, this.Rd);
            this.Ya =
                    (f + q) * this.S.y - (h + s) * this.S.x;
            this.Za = k * this.S.y - n * this.S.x;
            var u = this.S.x * f + this.S.y * h;
            0.01 > Math.abs(this.He - this.Fe) ? (r = V.Bb(u, -0.2, 0.2), m = Math.abs(u), l = !0) : u <= this.Fe ? (r = V.Bb(u - this.Fe + 0.005, -0.2, 0), m = this.Fe - u, l = !0) : u >= this.He && (r = V.Bb(u - this.He + 0.005, 0, 0.2), m = u - this.He, l = !0)
        }
        this.ka = V.Ub(p, this.jh);
        this.bb = (f + q) * this.ka.y - (h + s) * this.ka.x;
        this.cb = k * this.ka.y - n * this.ka.x;
        p = S.B(0, 0);
        s = this.ka.x * f + this.ka.y * h;
        m = Math.max(m, Math.abs(s));
        q = 0;
        l ? (l = this.Kb, k = this.Lb, n = this.md, f = this.nd, this.ca.k.x = l +
                k + n * this.bb * this.bb + f * this.cb * this.cb, this.ca.k.y = n * this.bb * this.Ya + f * this.cb * this.Za, this.ca.m.x = this.ca.k.y, this.ca.m.y = l + k + n * this.Ya * this.Ya + f * this.Za * this.Za, this.ca.Fh(p, -s, -r)) : (l = this.Kb, k = this.Lb, n = this.md, f = this.nd, r = l + k + n * this.bb * this.bb + f * this.cb * this.cb, p.x = 0 != r ? -s / r : 0, p.y = 0);
        r = p.x * this.ka.x + p.y * this.S.x;
        l = p.x * this.ka.y + p.y * this.S.y;
        s = p.x * this.bb + p.y * this.Ya;
        p = p.x * this.cb + p.y * this.Za;
        b.x -= this.Kb * r;
        b.y -= this.Kb * l;
        d -= this.md * s;
        e.x += this.Lb * r;
        e.y += this.Lb * l;
        g += this.nd * p;
        a.n.M = d;
        c.n.M = g;
        a.Ib();
        c.Ib();
        return 0.005 >= m && q <= jc
    };
    var we = function() {
        oe.call(this);
        this.wb = S.B(0, 0);
        this.xb = S.B(0, 0);
        this.jj = S.B(0, 0);
        this.type = Z.Dz;
        this.jj.Set(1, 0);
        this.Oi = !1;
        this.$s = this.Kr = 0;
        this.Yj = !1;
        this.Bk = this.$r = 0
    };
    R(we, oe);
    we.prototype.gc = function(a, c, b, d) {
        this.L = a;
        this.N = c;
        this.wb = this.L.cd(b);
        this.xb = this.N.cd(b);
        this.jj = this.L.Np(d)
    };
    we.prototype.Me = function() {
        return new ve(this)
    };
    var xe = function(a) {
        Z.call(this, a);
        this.ea = S.B(0, 0);
        this.fa = S.B(0, 0);
        this.Rd = S.B(0, 0);
        this.jh = S.B(0, 0);
        this.S = S.B(0, 0);
        this.ka = S.B(0, 0);
        this.ca = new qc;
        this.F = new pc(0, 0, 0);
        this.ea.I(a.wb);
        this.fa.I(a.xb);
        this.Rd.I(a.jj);
        this.jh.x = -this.Rd.y;
        this.jh.y = this.Rd.x;
        this.GB = a.vg;
        this.F.ia();
        this.Ka = this.Id = 0;
        this.Fe = a.Kr;
        this.He = a.$s;
        this.Vr = a.$r;
        this.hm = a.Bk;
        this.Cf = a.Oi;
        this.Xh = a.Yj;
        this.za = Z.Ad;
        this.S.ia();
        this.ka.ia()
    };
    R(xe, Z);
    xe.prototype.al = function() {
        var a = this.U, c = this.V, b = a.bn(this.ea), d = c.bn(this.fa), c = d.x - b.x, b = d.y - b.y, a = a.Op(this.Rd);
        return a.x * c + a.y * b
    };
    xe.prototype.Ne = function(a) {
        var c = this.U, b = this.V, d, e =
                0;
        this.lg.I(c.si());
        this.mg.I(b.si());
        var g = c.Xd();
        b.Xd();
        d = c.D.u;
        var f = this.ea.x - this.lg.x, h = this.ea.y - this.lg.y, e = d.k.x * f + d.m.x * h, h = d.k.y * f + d.m.y * h, f = e;
        d = b.D.u;
        var l = this.fa.x - this.mg.x, k = this.fa.y - this.mg.y, e = d.k.x * l + d.m.x * k, k = d.k.y * l + d.m.y * k, l = e;
        d = b.n.C.x + l - c.n.C.x - f;
        e = b.n.C.y + k - c.n.C.y - h;
        this.Kb = c.J;
        this.Lb = b.J;
        this.md = c.R;
        this.nd = b.R;
        this.S.I(V.Ub(g.u, this.Rd));
        this.Ya = (d + f) * this.S.y - (e + h) * this.S.x;
        this.Za = l * this.S.y - k * this.S.x;
        this.Id = this.Kb + this.Lb + this.md * this.Ya * this.Ya + this.nd * this.Za *
                this.Za;
        this.Id > Number.MIN_VALUE && (this.Id = 1 / this.Id);
        this.ka.I(V.Ub(g.u, this.jh));
        this.bb = (d + f) * this.ka.y - (e + h) * this.ka.x;
        this.cb = l * this.ka.y - k * this.ka.x;
        g = this.Kb;
        f = this.Lb;
        h = this.md;
        l = this.nd;
        this.ca.k.x = g + f + h * this.bb * this.bb + l * this.cb * this.cb;
        this.ca.k.y = h * this.bb + l * this.cb;
        this.ca.k.z = h * this.bb * this.Ya + l * this.cb * this.Za;
        this.ca.m.x = this.ca.k.y;
        this.ca.m.y = h + l;
        this.ca.m.z = h * this.Ya + l * this.Za;
        this.ca.qa.x = this.ca.k.z;
        this.ca.qa.y = this.ca.m.z;
        this.ca.qa.z = g + f + h * this.Ya * this.Ya + l * this.Za * this.Za;
        this.Cf ? (d = this.S.x * d + this.S.y * e, 0.01 > Math.abs(this.He - this.Fe) ? this.za = Z.Mh : d <= this.Fe ? this.za != Z.$f && (this.za = Z.$f, this.F.z = 0) : d >= this.He ? this.za != Z.Kc && (this.za = Z.Kc, this.F.z = 0) : (this.za = Z.Ad, this.F.z = 0)) : this.za = Z.Ad;
        !1 == this.Xh && (this.Ka = 0);
        a.yh ? (this.F.x *= a.nc, this.F.y *= a.nc, this.Ka *= a.nc, a = this.F.x * this.ka.x + (this.Ka + this.F.z) * this.S.x, d = this.F.x * this.ka.y + (this.Ka + this.F.z) * this.S.y, e = this.F.x * this.bb + this.F.y + (this.Ka + this.F.z) * this.Ya, g = this.F.x * this.cb + this.F.y + (this.Ka + this.F.z) * this.Za,
                c.A.x -= this.Kb * a, c.A.y -= this.Kb * d, c.H -= this.md * e, b.A.x += this.Lb * a, b.A.y += this.Lb * d, b.H += this.nd * g) : (this.F.ia(), this.Ka = 0)
    };
    xe.prototype.ue = function(a) {
        var c = this.U, b = this.V, d = c.A, e = c.H, g = b.A, f = b.H, h = 0, l = 0, k = 0, n = 0;
        this.Xh && this.za != Z.Mh && (n = this.Id * (this.hm - (this.S.x * (g.x - d.x) + this.S.y * (g.y - d.y) + this.Za * f - this.Ya * e)), h = this.Ka, a = a.Ca * this.Vr, this.Ka = V.Bb(this.Ka + n, -a, a), n = this.Ka - h, h = n * this.S.x, l = n * this.S.y, k = n * this.Ya, n *= this.Za, d.x -= this.Kb * h, d.y -= this.Kb * l, e -= this.md * k, g.x += this.Lb * h, g.y += this.Lb *
                l, f += this.nd * n);
        k = this.ka.x * (g.x - d.x) + this.ka.y * (g.y - d.y) + this.cb * f - this.bb * e;
        l = f - e;
        this.Cf && this.za != Z.Ad ? (a = this.S.x * (g.x - d.x) + this.S.y * (g.y - d.y) + this.Za * f - this.Ya * e, h = this.F.lc(), a = this.ca.nl(new pc(0, 0, 0), -k, -l, -a), this.F.Fg(a), this.za == Z.$f ? this.F.z = Math.max(this.F.z, 0) : this.za == Z.Kc && (this.F.z = Math.min(this.F.z, 0)), k = -k - (this.F.z - h.z) * this.ca.qa.x, l = -l - (this.F.z - h.z) * this.ca.qa.y, l = this.ca.Oj(S.B(0, 0), k, l), l.x += h.x, l.y += h.y, this.F.x = l.x, this.F.y = l.y, a.x = this.F.x - h.x, a.y = this.F.y - h.y, a.z = this.F.z -
                h.z, h = a.x * this.ka.x + a.z * this.S.x, l = a.x * this.ka.y + a.z * this.S.y, k = a.x * this.bb + a.y + a.z * this.Ya, n = a.x * this.cb + a.y + a.z * this.Za) : (a = this.ca.Oj(S.B(0, 0), -k, -l), this.F.x += a.x, this.F.y += a.y, h = a.x * this.ka.x, l = a.x * this.ka.y, k = a.x * this.bb + a.y, n = a.x * this.cb + a.y);
        d.x -= this.Kb * h;
        d.y -= this.Kb * l;
        e -= this.md * k;
        g.x += this.Lb * h;
        g.y += this.Lb * l;
        f += this.nd * n;
        c.A.I(d);
        c.H = e;
        b.A.I(g);
        b.H = f
    };
    xe.prototype.te = function() {
        var a = this.U, c = this.V, b = a.n.C, d = a.n.M, e = c.n.C, g = c.n.M, f, h = 0, l = 0, k = 0, n = h = f = 0, m = 0, l = !1, q = 0, r = U.Jj(d), p = U.Jj(g);
        f = r;
        var m = this.ea.x - this.lg.x, s = this.ea.y - this.lg.y, h = f.k.x * m + f.m.x * s, s = f.k.y * m + f.m.y * s, m = h;
        f = p;
        p = this.fa.x - this.mg.x;
        k = this.fa.y - this.mg.y;
        h = f.k.x * p + f.m.x * k;
        k = f.k.y * p + f.m.y * k;
        p = h;
        f = e.x + p - b.x - m;
        h = e.y + k - b.y - s;
        if (this.Cf) {
            this.S = V.Ub(r, this.Rd);
            this.Ya = (f + m) * this.S.y - (h + s) * this.S.x;
            this.Za = p * this.S.y - k * this.S.x;
            var u = this.S.x * f + this.S.y * h;
            0.01 > Math.abs(this.He - this.Fe) ? (q = V.Bb(u, -0.2, 0.2), n = Math.abs(u), l = !0) : u <= this.Fe ? (q = V.Bb(u - this.Fe + 0.005, -0.2, 0), n = this.Fe - u, l = !0) : u >= this.He && (q = V.Bb(u - this.He +
                    0.005, 0, 0.2), n = u - this.He, l = !0)
        }
        this.ka = V.Ub(r, this.jh);
        this.bb = (f + m) * this.ka.y - (h + s) * this.ka.x;
        this.cb = p * this.ka.y - k * this.ka.x;
        r = new pc(0, 0, 0);
        s = this.ka.x * f + this.ka.y * h;
        p = g - d - this.GB;
        n = Math.max(n, Math.abs(s));
        m = Math.abs(p);
        l ? (l = this.Kb, k = this.Lb, f = this.md, h = this.nd, this.ca.k.x = l + k + f * this.bb * this.bb + h * this.cb * this.cb, this.ca.k.y = f * this.bb + h * this.cb, this.ca.k.z = f * this.bb * this.Ya + h * this.cb * this.Za, this.ca.m.x = this.ca.k.y, this.ca.m.y = f + h, this.ca.m.z = f * this.Ya + h * this.Za, this.ca.qa.x = this.ca.k.z, this.ca.qa.y =
                this.ca.m.z, this.ca.qa.z = l + k + f * this.Ya * this.Ya + h * this.Za * this.Za, this.ca.nl(r, -s, -p, -q)) : (l = this.Kb, k = this.Lb, f = this.md, h = this.nd, q = f * this.bb + h * this.cb, u = f + h, this.ca.k.Set(l + k + f * this.bb * this.bb + h * this.cb * this.cb, q, 0), this.ca.m.Set(q, u, 0), q = this.ca.Oj(S.B(0, 0), -s, -p), r.x = q.x, r.y = q.y, r.z = 0);
        q = r.x * this.ka.x + r.z * this.S.x;
        l = r.x * this.ka.y + r.z * this.S.y;
        s = r.x * this.bb + r.y + r.z * this.Ya;
        r = r.x * this.cb + r.y + r.z * this.Za;
        b.x -= this.Kb * q;
        b.y -= this.Kb * l;
        d -= this.md * s;
        e.x += this.Lb * q;
        e.y += this.Lb * l;
        g += this.nd * r;
        a.n.M = d;
        c.n.M = g;
        a.Ib();
        c.Ib();
        return 0.005 >= n && m <= jc
    };
    var ye = function() {
        oe.call(this);
        this.wb = S.B(0, 0);
        this.xb = S.B(0, 0);
        this.jj = S.B(0, 0);
        this.type = Z.Ez;
        this.jj.Set(1, 0);
        this.vg = 0;
        this.Oi = !1;
        this.$s = this.Kr = 0;
        this.Yj = !1;
        this.Bk = this.$r = 0
    };
    R(ye, oe);
    ye.prototype.gc = function(a, c, b, d) {
        this.L = a;
        this.N = c;
        this.wb = this.L.cd(b);
        this.xb = this.N.cd(b);
        this.jj = this.L.Np(d);
        this.vg = this.N.vd() - this.L.vd()
    };
    ye.prototype.Me = function() {
        return new xe(this)
    };
    var Ae = function(a) {
        Z.call(this, a);
        this.hh = S.B(0, 0);
        this.ih = S.B(0, 0);
        this.ea = S.B(0, 0);
        this.fa = S.B(0, 0);
        this.gb = S.B(0, 0);
        this.hb = S.B(0, 0);
        this.$e = this.U.Ha.wB;
        this.hh.x = a.io.x - this.$e.D.position.x;
        this.hh.y = a.io.y - this.$e.D.position.y;
        this.ih.x = a.jo.x - this.$e.D.position.x;
        this.ih.y = a.jo.y - this.$e.D.position.y;
        this.ea.I(a.wb);
        this.fa.I(a.xb);
        this.Mb = a.ke;
        this.sk = a.yr + this.Mb * a.Ar;
        this.Gv = Math.min(a.Iv, this.sk - this.Mb * ze);
        this.Hv = Math.min(a.Jv, (this.sk - ze) / this.Mb);
        this.kg = this.jg = this.F = 0
    };
    R(Ae, Z);
    Ae.prototype.Ne = function(a) {
        var c = this.U, b = this.V, d;
        d = c.D.u;
        var e = this.ea.x -
                c.n.P.x, g = this.ea.y - c.n.P.y, f = d.k.x * e + d.m.x * g, g = d.k.y * e + d.m.y * g, e = f;
        d = b.D.u;
        var h = this.fa.x - b.n.P.x, l = this.fa.y - b.n.P.y, f = d.k.x * h + d.m.x * l, l = d.k.y * h + d.m.y * l, h = f;
        d = b.n.C.x + h;
        var f = b.n.C.y + l, k = this.$e.D.position.x + this.ih.x, n = this.$e.D.position.y + this.ih.y;
        this.gb.Set(c.n.C.x + e - (this.$e.D.position.x + this.hh.x), c.n.C.y + g - (this.$e.D.position.y + this.hh.y));
        this.hb.Set(d - k, f - n);
        d = this.gb.Rf();
        f = this.hb.Rf();
        0.005 < d ? this.gb.xd(1 / d) : this.gb.ia();
        0.005 < f ? this.hb.xd(1 / f) : this.hb.ia();
        0 < this.sk - d - this.Mb * f ? (this.Xr =
                Z.Ad, this.F = 0) : this.Xr = Z.Kc;
        d < this.Gv ? (this.Sr = Z.Ad, this.jg = 0) : this.Sr = Z.Kc;
        f < this.Hv ? (this.Tr = Z.Ad, this.kg = 0) : this.Tr = Z.Kc;
        d = e * this.gb.y - g * this.gb.x;
        f = h * this.hb.y - l * this.hb.x;
        this.fm = c.J + c.R * d * d;
        this.gm = b.J + b.R * f * f;
        this.Po = this.fm + this.Mb * this.Mb * this.gm;
        this.fm = 1 / this.fm;
        this.gm = 1 / this.gm;
        this.Po = 1 / this.Po;
        a.yh ? (this.F *= a.nc, this.jg *= a.nc, this.kg *= a.nc, a = (-this.F - this.jg) * this.gb.x, d = (-this.F - this.jg) * this.gb.y, f = (-this.Mb * this.F - this.kg) * this.hb.x, k = (-this.Mb * this.F - this.kg) * this.hb.y, c.A.x += c.J *
                a, c.A.y += c.J * d, c.H += c.R * (e * d - g * a), b.A.x += b.J * f, b.A.y += b.J * k, b.H += b.R * (h * k - l * f)) : this.kg = this.jg = this.F = 0
    };
    Ae.prototype.ue = function() {
        var a = this.U, c = this.V, b;
        b = a.D.u;
        var d = this.ea.x - a.n.P.x, e = this.ea.y - a.n.P.y, g = b.k.x * d + b.m.x * e, e = b.k.y * d + b.m.y * e, d = g;
        b = c.D.u;
        var f = this.fa.x - c.n.P.x, h = this.fa.y - c.n.P.y, g = b.k.x * f + b.m.x * h, h = b.k.y * f + b.m.y * h, f = g, l = g = b = 0, k = 0;
        b = k = b = k = l = g = b = 0;
        this.Xr == Z.Kc && (b = a.A.x + -a.H * e, g = a.A.y + a.H * d, l = c.A.x + -c.H * h, k = c.A.y + c.H * f, b = -(this.gb.x * b + this.gb.y * g) - this.Mb * (this.hb.x * l + this.hb.y *
                k), k = this.Po * -b, b = this.F, this.F = Math.max(0, this.F + k), k = this.F - b, b = -k * this.gb.x, g = -k * this.gb.y, l = -this.Mb * k * this.hb.x, k = -this.Mb * k * this.hb.y, a.A.x += a.J * b, a.A.y += a.J * g, a.H += a.R * (d * g - e * b), c.A.x += c.J * l, c.A.y += c.J * k, c.H += c.R * (f * k - h * l));
        this.Sr == Z.Kc && (b = a.A.x + -a.H * e, g = a.A.y + a.H * d, b = -(this.gb.x * b + this.gb.y * g), k = -this.fm * b, b = this.jg, this.jg = Math.max(0, this.jg + k), k = this.jg - b, b = -k * this.gb.x, g = -k * this.gb.y, a.A.x += a.J * b, a.A.y += a.J * g, a.H += a.R * (d * g - e * b));
        this.Tr == Z.Kc && (l = c.A.x + -c.H * h, k = c.A.y + c.H * f, b = -(this.hb.x *
                l + this.hb.y * k), k = -this.gm * b, b = this.kg, this.kg = Math.max(0, this.kg + k), k = this.kg - b, l = -k * this.hb.x, k = -k * this.hb.y, c.A.x += c.J * l, c.A.y += c.J * k, c.H += c.R * (f * k - h * l))
    };
    Ae.prototype.te = function() {
        var a = this.U, c = this.V, b, d = this.$e.D.position.x + this.hh.x, e = this.$e.D.position.y + this.hh.y, g = this.$e.D.position.x + this.ih.x, f = this.$e.D.position.y + this.ih.y, h = 0, l = 0, k = 0, n = 0, m = b = 0, q = 0, r = 0, p = m = r = b = m = b = 0;
        this.Xr == Z.Kc && (b = a.D.u, h = this.ea.x - a.n.P.x, l = this.ea.y - a.n.P.y, m = b.k.x * h + b.m.x * l, l = b.k.y * h + b.m.y * l, h = m, b = c.D.u, k = this.fa.x -
                c.n.P.x, n = this.fa.y - c.n.P.y, m = b.k.x * k + b.m.x * n, n = b.k.y * k + b.m.y * n, k = m, b = a.n.C.x + h, m = a.n.C.y + l, q = c.n.C.x + k, r = c.n.C.y + n, this.gb.Set(b - d, m - e), this.hb.Set(q - g, r - f), b = this.gb.Rf(), m = this.hb.Rf(), 0.005 < b ? this.gb.xd(1 / b) : this.gb.ia(), 0.005 < m ? this.hb.xd(1 / m) : this.hb.ia(), b = this.sk - b - this.Mb * m, p = Math.max(p, -b), b = V.Bb(b + 0.005, -0.2, 0), r = -this.Po * b, b = -r * this.gb.x, m = -r * this.gb.y, q = -this.Mb * r * this.hb.x, r = -this.Mb * r * this.hb.y, a.n.C.x += a.J * b, a.n.C.y += a.J * m, a.n.M += a.R * (h * m - l * b), c.n.C.x += c.J * q, c.n.C.y += c.J * r, c.n.M +=
                c.R * (k * r - n * q), a.Ib(), c.Ib());
        this.Sr == Z.Kc && (b = a.D.u, h = this.ea.x - a.n.P.x, l = this.ea.y - a.n.P.y, m = b.k.x * h + b.m.x * l, l = b.k.y * h + b.m.y * l, h = m, b = a.n.C.x + h, m = a.n.C.y + l, this.gb.Set(b - d, m - e), b = this.gb.Rf(), 0.005 < b ? (this.gb.x *= 1 / b, this.gb.y *= 1 / b) : this.gb.ia(), b = this.Gv - b, p = Math.max(p, -b), b = V.Bb(b + 0.005, -0.2, 0), r = -this.fm * b, b = -r * this.gb.x, m = -r * this.gb.y, a.n.C.x += a.J * b, a.n.C.y += a.J * m, a.n.M += a.R * (h * m - l * b), a.Ib());
        this.Tr == Z.Kc && (b = c.D.u, k = this.fa.x - c.n.P.x, n = this.fa.y - c.n.P.y, m = b.k.x * k + b.m.x * n, n = b.k.y * k + b.m.y * n, k =
                m, q = c.n.C.x + k, r = c.n.C.y + n, this.hb.Set(q - g, r - f), m = this.hb.Rf(), 0.005 < m ? (this.hb.x *= 1 / m, this.hb.y *= 1 / m) : this.hb.ia(), b = this.Hv - m, p = Math.max(p, -b), b = V.Bb(b + 0.005, -0.2, 0), r = -this.gm * b, q = -r * this.hb.x, r = -r * this.hb.y, c.n.C.x += c.J * q, c.n.C.y += c.J * r, c.n.M += c.R * (k * r - n * q), c.Ib());
        return 0.005 > p
    };
    var ze = 1, Be = function() {
        oe.call(this);
        this.io = S.B(0, 0);
        this.jo = S.B(0, 0);
        this.wb = S.B(0, 0);
        this.xb = S.B(0, 0);
        this.type = Z.Fz;
        this.io.Set(-1, 1);
        this.jo.Set(1, 1);
        this.wb.Set(-1, 0);
        this.xb.Set(1, 0);
        this.Jv = this.Ar = this.Iv = this.yr =
                0;
        this.ke = 1;
        this.sq = !0
    };
    R(Be, oe);
    Be.prototype.gc = function(a, c, b, d, e, g, f) {
        void 0 === f && (f = 0);
        this.L = a;
        this.N = c;
        this.io.I(b);
        this.jo.I(d);
        this.wb = this.L.cd(e);
        this.xb = this.N.cd(g);
        a = e.x - b.x;
        b = e.y - b.y;
        this.yr = Math.sqrt(a * a + b * b);
        b = g.x - d.x;
        d = g.y - d.y;
        this.Ar = Math.sqrt(b * b + d * d);
        this.ke = f;
        f = this.yr + this.ke * this.Ar;
        this.Iv = f - this.ke * ze;
        this.Jv = (f - ze) / this.ke
    };
    Be.prototype.Me = function() {
        return new Ae(this)
    };
    var Ce = function(a) {
        Z.call(this, a);
        this.Yd = new U;
        this.dl = new U;
        this.el = new U;
        this.fl = new U;
        this.Ac = new pc(0,
                0, 0);
        this.wf = S.B(0, 0);
        this.ug = S.B(0, 0);
        this.ea = S.B(0, 0);
        this.fa = S.B(0, 0);
        this.F = new pc(0, 0, 0);
        this.T = new qc;
        this.ea.I(a.wb);
        this.fa.I(a.xb);
        this.km = a.vg;
        this.F.ia();
        this.Ka = 0;
        this.No = a.Jr;
        this.Yr = a.Zs;
        this.DB = a.Kv;
        this.hm = a.Bk;
        this.Cf = a.Oi;
        this.Xh = a.Yj;
        this.za = Z.Ad
    };
    R(Ce, Z);
    Ce.prototype.Zm = function() {
        return this.V.n.M - this.U.n.M - this.km
    };
    Ce.prototype.Ne = function(a) {
        var c = this.U, b = this.V, d, e = 0;
        d = c.D.u;
        var g = this.ea.x - c.n.P.x, f = this.ea.y - c.n.P.y, e = d.k.x * g + d.m.x * f, f = d.k.y * g + d.m.y * f, g = e;
        d = b.D.u;
        var h =
                this.fa.x - b.n.P.x, l = this.fa.y - b.n.P.y, e = d.k.x * h + d.m.x * l, l = d.k.y * h + d.m.y * l, h = e;
        d = c.J;
        var e = b.J, k = c.R, n = b.R;
        this.T.k.x = d + e + f * f * k + l * l * n;
        this.T.m.x = -f * g * k - l * h * n;
        this.T.qa.x = -f * k - l * n;
        this.T.k.y = this.T.m.x;
        this.T.m.y = d + e + g * g * k + h * h * n;
        this.T.qa.y = g * k + h * n;
        this.T.k.z = this.T.qa.x;
        this.T.m.z = this.T.qa.y;
        this.T.qa.z = k + n;
        this.Id = 1 / (k + n);
        this.Xh || (this.Ka = 0);
        if (this.Cf) {
            var m = b.n.M - c.n.M - this.km;
            Math.abs(this.Yr - this.No) < 2 * jc ? this.za = Z.Mh : m <= this.No ? (this.za != Z.$f && (this.F.z = 0), this.za = Z.$f) : m >= this.Yr ? (this.za !=
                    Z.Kc && (this.F.z = 0), this.za = Z.Kc) : (this.za = Z.Ad, this.F.z = 0)
        } else
            this.za = Z.Ad;
        a.yh ? (this.F.x *= a.nc, this.F.y *= a.nc, this.Ka *= a.nc, a = this.F.x, m = this.F.y, c.A.x -= d * a, c.A.y -= d * m, c.H -= k * (g * m - f * a + this.Ka + this.F.z), b.A.x += e * a, b.A.y += e * m, b.H += n * (h * m - l * a + this.Ka + this.F.z)) : (this.F.ia(), this.Ka = 0)
    };
    Ce.prototype.ue = function(a) {
        var c = this.U, b = this.V, d = 0, e = d = 0, g = 0, f = 0, h = 0, l = c.A, k = c.H, n = b.A, m = b.H, q = c.J, r = b.J, p = c.R, s = b.R;
        this.Xh && this.za != Z.Mh && (e = this.Id * -(m - k - this.hm), g = this.Ka, f = a.Ca * this.DB, this.Ka = V.Bb(this.Ka +
                e, -f, f), e = this.Ka - g, k -= p * e, m += s * e);
        if (this.Cf && this.za != Z.Ad) {
            a = c.D.u;
            e = this.ea.x - c.n.P.x;
            g = this.ea.y - c.n.P.y;
            d = a.k.x * e + a.m.x * g;
            g = a.k.y * e + a.m.y * g;
            e = d;
            a = b.D.u;
            f = this.fa.x - b.n.P.x;
            h = this.fa.y - b.n.P.y;
            d = a.k.x * f + a.m.x * h;
            h = a.k.y * f + a.m.y * h;
            f = d;
            a = n.x + -m * h - l.x - -k * g;
            var u = n.y + m * f - l.y - k * e;
            this.T.nl(this.Ac, -a, -u, -(m - k));
            this.za == Z.Mh ? this.F.Fg(this.Ac) : this.za == Z.$f ? (d = this.F.z + this.Ac.z, 0 > d && (this.T.Oj(this.ug, -a, -u), this.Ac.x = this.ug.x, this.Ac.y = this.ug.y, this.Ac.z = -this.F.z, this.F.x += this.ug.x, this.F.y +=
                    this.ug.y, this.F.z = 0)) : this.za == Z.Kc && (d = this.F.z + this.Ac.z, 0 < d && (this.T.Oj(this.ug, -a, -u), this.Ac.x = this.ug.x, this.Ac.y = this.ug.y, this.Ac.z = -this.F.z, this.F.x += this.ug.x, this.F.y += this.ug.y, this.F.z = 0));
            l.x -= q * this.Ac.x;
            l.y -= q * this.Ac.y;
            k -= p * (e * this.Ac.y - g * this.Ac.x + this.Ac.z);
            n.x += r * this.Ac.x;
            n.y += r * this.Ac.y;
            m += s * (f * this.Ac.y - h * this.Ac.x + this.Ac.z)
        } else
            a = c.D.u, e = this.ea.x - c.n.P.x, g = this.ea.y - c.n.P.y, d = a.k.x * e + a.m.x * g, g = a.k.y * e + a.m.y * g, e = d, a = b.D.u, f = this.fa.x - b.n.P.x, h = this.fa.y - b.n.P.y, d = a.k.x *
                    f + a.m.x * h, h = a.k.y * f + a.m.y * h, f = d, this.T.Oj(this.wf, -(n.x + -m * h - l.x - -k * g), -(n.y + m * f - l.y - k * e)), this.F.x += this.wf.x, this.F.y += this.wf.y, l.x -= q * this.wf.x, l.y -= q * this.wf.y, k -= p * (e * this.wf.y - g * this.wf.x), n.x += r * this.wf.x, n.y += r * this.wf.y, m += s * (f * this.wf.y - h * this.wf.x);
        c.A.I(l);
        c.H = k;
        b.A.I(n);
        b.H = m
    };
    Ce.prototype.te = function() {
        var a = 0, c, b = this.U, d = this.V, e = 0, g = c = 0, f = 0, h = 0;
        if (this.Cf && this.za != Z.Ad) {
            var a = d.n.M - b.n.M - this.km, l = 0;
            this.za == Z.Mh ? (a = V.Bb(a - this.No, -kc, kc), l = -this.Id * a, e = Math.abs(a)) : this.za == Z.$f ?
                    (a -= this.No, e = -a, a = V.Bb(a + jc, -kc, 0), l = -this.Id * a) : this.za == Z.Kc && (e = a -= this.Yr, a = V.Bb(a - jc, 0, kc), l = -this.Id * a);
            b.n.M -= b.R * l;
            d.n.M += d.R * l;
            b.Ib();
            d.Ib()
        }
        c = b.D.u;
        l = this.ea.x - b.n.P.x;
        a = this.ea.y - b.n.P.y;
        g = c.k.x * l + c.m.x * a;
        a = c.k.y * l + c.m.y * a;
        l = g;
        c = d.D.u;
        var k = this.fa.x - d.n.P.x, n = this.fa.y - d.n.P.y, g = c.k.x * k + c.m.x * n, n = c.k.y * k + c.m.y * n, k = g, f = d.n.C.x + k - b.n.C.x - l, h = d.n.C.y + n - b.n.C.y - a, m = f * f + h * h;
        c = Math.sqrt(m);
        var g = b.J, q = d.J, r = b.R, p = d.R;
        m > 0.05 * 0.05 && (m = 1 / (g + q), f = m * -f, h = m * -h, b.n.C.x -= 0.5 * g * f, b.n.C.y -= 0.5 * g * h, d.n.C.x +=
                0.5 * q * f, d.n.C.y += 0.5 * q * h, f = d.n.C.x + k - b.n.C.x - l, h = d.n.C.y + n - b.n.C.y - a);
        this.dl.k.x = g + q;
        this.dl.m.x = 0;
        this.dl.k.y = 0;
        this.dl.m.y = g + q;
        this.el.k.x = r * a * a;
        this.el.m.x = -r * l * a;
        this.el.k.y = -r * l * a;
        this.el.m.y = r * l * l;
        this.fl.k.x = p * n * n;
        this.fl.m.x = -p * k * n;
        this.fl.k.y = -p * k * n;
        this.fl.m.y = p * k * k;
        this.Yd.of(this.dl);
        this.Yd.Om(this.el);
        this.Yd.Om(this.fl);
        this.Yd.Fh(De, -f, -h);
        f = De.x;
        h = De.y;
        b.n.C.x -= b.J * f;
        b.n.C.y -= b.J * h;
        b.n.M -= b.R * (l * h - a * f);
        d.n.C.x += d.J * f;
        d.n.C.y += d.J * h;
        d.n.M += d.R * (k * h - n * f);
        b.Ib();
        d.Ib();
        return 0.005 >=
                c && e <= jc
    };
    var De = S.B(0, 0), ic = function() {
        oe.call(this);
        this.wb = S.B(0, 0);
        this.xb = S.B(0, 0);
        this.type = Z.Xj;
        this.wb.ia();
        this.xb.ia();
        this.Bk = this.Kv = this.Zs = this.Jr = this.vg = 0;
        this.Yj = this.Oi = !1
    };
    R(ic, oe);
    ic.prototype.gc = function(a, c, b) {
        this.L = a;
        this.N = c;
        this.wb = this.L.cd(b);
        this.xb = this.N.cd(b);
        this.vg = this.N.vd() - this.L.vd()
    };
    ic.prototype.Me = function() {
        return new Ce(this)
    };
    var Ee = function(a) {
        Z.call(this, a);
        this.De = S.B(0, 0);
        this.Ee = S.B(0, 0);
        this.F = new pc(0, 0, 0);
        this.T = new qc;
        this.De.I(a.wb);
        this.Ee.I(a.xb);
        this.km = a.vg
    };
    R(Ee, Z);
    Ee.prototype.Ne = function(a) {
        var c, b = 0, d = this.U, e = this.V;
        c = d.D.u;
        var g = this.De.x - d.n.P.x, f = this.De.y - d.n.P.y, b = c.k.x * g + c.m.x * f, f = c.k.y * g + c.m.y * f, g = b;
        c = e.D.u;
        var h = this.Ee.x - e.n.P.x, l = this.Ee.y - e.n.P.y, b = c.k.x * h + c.m.x * l, l = c.k.y * h + c.m.y * l, h = b;
        c = d.J;
        var b = e.J, k = d.R, n = e.R;
        this.T.k.x = c + b + f * f * k + l * l * n;
        this.T.m.x = -f * g * k - l * h * n;
        this.T.qa.x = -f * k - l * n;
        this.T.k.y = this.T.m.x;
        this.T.m.y = c + b + g * g * k + h * h * n;
        this.T.qa.y = g * k + h * n;
        this.T.k.z = this.T.qa.x;
        this.T.m.z = this.T.qa.y;
        this.T.qa.z = k + n;
        a.yh ? (this.F.x *=
                a.nc, this.F.y *= a.nc, this.F.z *= a.nc, d.A.x -= c * this.F.x, d.A.y -= c * this.F.y, d.H -= k * (g * this.F.y - f * this.F.x + this.F.z), e.A.x += b * this.F.x, e.A.y += b * this.F.y, e.H += n * (h * this.F.y - l * this.F.x + this.F.z)) : this.F.ia()
    };
    Ee.prototype.ue = function() {
        var a, c = 0, b = this.U, d = this.V, e = b.A, g = b.H, f = d.A, h = d.H, l = b.J, k = d.J, n = b.R, m = d.R;
        a = b.D.u;
        var q = this.De.x - b.n.P.x, r = this.De.y - b.n.P.y, c = a.k.x * q + a.m.x * r, r = a.k.y * q + a.m.y * r, q = c;
        a = d.D.u;
        var p = this.Ee.x - d.n.P.x, s = this.Ee.y - d.n.P.y, c = a.k.x * p + a.m.x * s, s = a.k.y * p + a.m.y * s, p = c;
        a = new pc(0, 0,
                0);
        this.T.nl(a, -(f.x - h * s - e.x + g * r), -(f.y + h * p - e.y - g * q), -(h - g));
        this.F.Fg(a);
        e.x -= l * a.x;
        e.y -= l * a.y;
        g -= n * (q * a.y - r * a.x + a.z);
        f.x += k * a.x;
        f.y += k * a.y;
        h += m * (p * a.y - s * a.x + a.z);
        b.H = g;
        d.H = h
    };
    Ee.prototype.te = function() {
        var a, c = 0, b = this.U, d = this.V;
        a = b.D.u;
        var e = this.De.x - b.n.P.x, g = this.De.y - b.n.P.y, c = a.k.x * e + a.m.x * g, g = a.k.y * e + a.m.y * g, e = c;
        a = d.D.u;
        var f = this.Ee.x - d.n.P.x, h = this.Ee.y - d.n.P.y, c = a.k.x * f + a.m.x * h, h = a.k.y * f + a.m.y * h, f = c;
        a = b.J;
        var c = d.J, l = b.R, k = d.R, n = d.n.C.x + f - b.n.C.x - e, m = d.n.C.y + h - b.n.C.y - g, q = d.n.M - b.n.M -
                this.km, r = Math.sqrt(n * n + m * m), p = Math.abs(q);
        0.05 < r && (l *= 1, k *= 1);
        this.T.k.x = a + c + g * g * l + h * h * k;
        this.T.m.x = -g * e * l - h * f * k;
        this.T.qa.x = -g * l - h * k;
        this.T.k.y = this.T.m.x;
        this.T.m.y = a + c + e * e * l + f * f * k;
        this.T.qa.y = e * l + f * k;
        this.T.k.z = this.T.qa.x;
        this.T.m.z = this.T.qa.y;
        this.T.qa.z = l + k;
        var s = new pc(0, 0, 0);
        this.T.nl(s, -n, -m, -q);
        b.n.C.x -= a * s.x;
        b.n.C.y -= a * s.y;
        b.n.M -= l * (e * s.y - g * s.x + s.z);
        d.n.C.x += c * s.x;
        d.n.C.y += c * s.y;
        d.n.M += k * (f * s.y - h * s.x + s.z);
        b.Ib();
        d.Ib();
        return 0.005 >= r && p <= jc
    };
    var Fe = function() {
        oe.call(this);
        this.wb = S.B(0,
                0);
        this.xb = S.B(0, 0);
        this.type = Z.Hz;
        this.vg = 0
    };
    R(Fe, oe);
    Fe.prototype.gc = function(a, c, b) {
        this.L = a;
        this.N = c;
        this.wb.I(this.L.cd(b));
        this.xb.I(this.N.cd(b));
        this.vg = this.N.vd() - this.L.vd()
    };
    Fe.prototype.Me = function() {
        return new Ee(this)
    };
    var Vd = [new wc, new wc], de = [new wc, new wc], ee = [new wc, new wc], Wd = S.B(0, 0), Xd = S.B(0, 0), Yd = S.B(0, 0), ae = S.B(0, 0), Zd = S.B(0, 0), $d = S.B(0, 0), be = S.B(0, 0), ce = S.B(0, 0), xd = 0, Gd = 0, Hd = 0, Ed = 0, Fd = 0, yd = new Vc, zd = new Fc, Ad = new $b, Bd = new $b, Dd = new Qc, Cd = new Gc;
    bc.iC = new $b;
    cc.cu = new cc;
    new function() {
        this.position = S.B(0, 0);
        this.Zw = S.B(0, 0);
        this.pd = S.B(0, 0);
        this.id = new vc
    };
    ec.hE = new $b;
    ec.nw = new rc;
    ec.ow = new rc;
    var wd = new Wc, Td = new Xc, Ud = new Sd
}
function Ge(a, c, b, d, e, g) {
    return(b + 0.1 >= a && a >= e - 0.1 || b - 0.1 <= a && a <= e + 0.1) && (d + 0.1 >= c && c >= g - 0.1 || d - 0.1 <= c && c <= g + 0.1) && (0.1 < Math.abs(e - b) ? 0.1 > Math.abs((g - d) / (e - b) * (a - b) + d - c) : 0.1 > Math.abs(a - b))
}
function He(a, c) {
    var b = S, d = Ie(a), e = [], g, f, h, l, k, n, m, q, r;
    k = 0;
    for (n = d.length; k < n; k++) {
        f = d[k];
        g = [];
        g.length = f.length;
        m = r = 0;
        for (q = f.length; m < q; m++)
            h = f[m], l = f[(m + 1) % q], r += h.x * l.y - h.y * l.x, g[m] = b.B(h.x, h.y);
        r = Math.abs(r / 2);
        r >= 0.001 * c && e.push(g)
    }
    return e
}
function Ie(a) {
    var c = [], b = 0, d = 0, e = 0, g = 0, f = 0, h = f = 0, l = 0, k = 0, n = 0, g = 0, m, q, r, p, s, u = g = b = 0, x = 0, e = [], l = [], z = !1, E = [], G = [];
    for (G.push(a); G.length; ) {
        c = G[0];
        d = c.length;
        z = !0;
        for (b = 0; b < d; b++)
            if (k = b, n = b < d - 1 ? b + 1 : b + 1 - d, g = b < d - 2 ? b + 2 : b + 2 - d, a = c[k], m = c[n], g = c[g], g = a.x * m.y + m.x * g.y + g.x * a.y - a.y * m.x - m.y * g.x - g.y * a.x, 0 > g) {
                z = !1;
                l = 1E9;
                for (e = 0; e < d; e++)
                    if (e !== k && e !== n) {
                        b = e;
                        g = e < d - 1 ? e + 1 : 0;
                        q = c[b];
                        r = c[g];
                        h = a.x;
                        p = a.y;
                        var F = m.x, C = m.y, f = q.x;
                        q = q.y;
                        var B = r.x;
                        r = r.y;
                        var K = F - h, J = C - p, D = B - f, I = r - q, D = (D * (q - p) - I * (f - h)) / (J * D - K * I), K = h + D * K, J = p + D * J,
                                h = Ge(F, C, h, p, K, J), f = Ge(K, J, f, q, B, r);
                        if (p = h && f ? S.B(K, J) : null)
                            f = m.x - p.x, h = m.y - p.y, f = f * f + h * h, f < l && (x = b, u = g, s = p, l = f)
                    }
                if (1E9 === l)
                    return[];
                e = [];
                l = [];
                b = x;
                g = u;
                q = c[b];
                r = c[g];
                0.1 > Math.abs(r.x - s.x) && 0.1 > Math.abs(r.y - s.y) || e.push(s);
                0.1 > Math.abs(q.x - s.x) && 0.1 > Math.abs(q.y - s.y) || l.push(s);
                x = -1;
                for (u = k; ; ) {
                    if (u !== g)
                        e.push(c[u]);
                    else {
                        if (0 > x || x >= d)
                            return[];
                        Ge(r.x, r.y, c[x].x, c[x].y, a.x, a.y) || e.push(c[u]);
                        break
                    }
                    x = u;
                    0 > u - 1 ? u = d - 1 : u--
                }
                e.reverse();
                x = -1;
                for (u = n; ; ) {
                    if (u !== b)
                        l.push(c[u]);
                    else {
                        if (0 > x || x >= d)
                            return[];
                        u !== b || Ge(q.x,
                                q.y, c[x].x, c[x].y, m.x, m.y) || l.push(c[u]);
                        break
                    }
                    x = u;
                    u + 1 > d - 1 ? u = 0 : u++
                }
                G.push(e, l);
                G.shift();
                break
            }
        z && E.push(G.shift())
    }
    return E
}
function Je(a) {
    for (var c = 0; 4E3 > c; c++)
        S.Jg.push(new S(0, 0));
    this.j = a;
    this.Wd = new ec(S.B(0, 10), !0);
    this.tr = -1;
    a = new cc;
    a.Y = this;
    a.Qm = function(a) {
        this.Y.j.Fk(a.Jb.Qa().Wf.q, a.Fb.Qa().Wf.q)
    };
    this.Wd.Lt(a);
    a = new dc;
    a.Y = this;
    a.yi = function(a, c) {
        if (this.Y.Oy)
            return!0;
        var e = a.Qa().Wf.q.type, g = c.Qa().Wf.q.type, f = e.ja.gy;
        return f && f.contains(g) ? !1 : (f = g.ja.gy) && f.contains(e) ? !1 : !0
    };
    this.Wd.Kt(a);
    this.nC = 0;
    this.Lm = 8;
    this.vm = 3;
    this.Oy = !0
}
(function() {
    function a() {
    }
    function c() {
    }
    var b = S, d = X, e = gc, g = Y, f = fc, h = hc, l = ic, k = Je.prototype;
    k.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    k.eb.prototype.xa = t();
    k.Ra = function(a, b) {
        this.type = a;
        this.Y = a.Y;
        this.q = b;
        this.j = a.j;
        this.Wd = this.Y.Wd
    };
    var n = k.Ra.prototype;
    n.xa = function() {
        this.Yq = 0 !== this.W[0];
        this.ku = this.W[1];
        this.rs = 0 !== this.W[2];
        this.uf = this.W[3];
        this.cg = this.W[4];
        this.xg = this.W[5];
        this.gj = this.W[6];
        this.Ci = this.W[7];
        this.Gi = 0 !== this.W[8];
        this.enabled = 0 !== this.W[9];
        this.body = null;
        this.q.lb();
        this.uo =
                this.q.x;
        this.vo = this.q.y;
        this.qr = this.q.Q;
        this.or = this.ur = 0;
        this.hw = this.sr = !1;
        this.mr = null;
        this.nr = -1;
        this.he ? (this.he.length = 0, this.df.length = 0, this.Zg.clear()) : (this.he = [], this.df = [], this.Zg = new da);
        var a = this;
        this.le || (this.pm = function(b) {
            a.cs(b)
        });
        this.j.jq(this.pm)
    };
    n.aw = function() {
        this.q.lb();
        this.yq();
        this.mr = this.q.Cb;
        this.nr = this.q.da
    };
    n.nh = function() {
        this.Nn();
        this.df.length = 0;
        this.Zg.clear();
        this.body && (this.Wd.Vm(this.body), this.body = null);
        this.j.kw(this.pm)
    };
    n.Yc = function() {
        var a = {e: this.enabled,
            im: this.Yq, pr: this.rs, d: this.uf, fr: this.cg, re: this.xg, ld: this.gj, ad: this.Ci, b: this.Gi, mcj: this.df};
        if (this.enabled) {
            var c = b.B(0, 0);
            c.I(this.body.ri());
            a.vx = c.x;
            a.vy = c.y;
            a.om = this.body.Ym()
        }
        return a
    };
    n.Cd = function(a) {
        this.Nn();
        this.df.length = 0;
        this.Zg.clear();
        this.body && (this.Wd.Vm(this.body), this.body = null);
        this.enabled = a.e;
        this.Yq = a.im;
        this.rs = a.pr;
        this.uf = a.d;
        this.cg = a.fr;
        this.xg = a.re;
        this.gj = a.ld;
        this.Ci = a.ad;
        this.Gi = a.b;
        this.uo = this.q.x;
        this.vo = this.q.y;
        this.qr = this.q.Q;
        this.ur = this.q.width;
        this.or =
                this.q.height;
        this.enabled && (this.yq(), this.body.xi(b.B(a.vx, a.vy)), this.body.kl(a.om), 0 === a.vx && 0 === a.vy && 0 === a.om || this.body.Uc(!0), this.df = a.mcj)
    };
    n.Tf = function() {
        this.enabled && this.ys();
        this.Y.tr = this.j.Ke - 1
    };
    n.cs = function(a) {
        var b, c, d, e = a.uid;
        d = b = 0;
        for (c = this.df.length; b < c; b++)
            this.df[d] = this.df[b], d < this.he.length && (this.he[d] = this.he[b]), this.df[b].Ff[1] == e ? this.Wd.Wm(this.he[b]) : d++;
        this.df.length = d;
        d < this.he.length && (this.he.length = d);
        this.Zg.remove(a)
    };
    n.Nn = function() {
        var a, b;
        a = 0;
        for (b =
                this.he.length; a < b; a++)
            this.Wd.Wm(this.he[a]);
        this.he.length = 0
    };
    n.ys = function() {
        var a, b, c;
        a = 0;
        for (b = this.df.length; a < b; a++)
            switch (c = this.df[a], c.type) {
                case 0:
                    this.nz(c.Ff[0], c.Ff[1], c.Ff[2], c.Ff[3], c.Ff[4]);
                    break;
                case 1:
                    this.pz(c.Ff[0], c.Ff[1]);
                    break;
                case 2:
                    this.oz(c.Ff[0], c.Ff[1], c.Ff[2], c.Ff[3])
                }
    };
    n.jz = function() {
        this.body && (this.Nn(), this.Wd.Vm(this.body), this.body = null, this.q.ja.Qe = null)
    };
    var m = [];
    n.yq = function() {
        if (this.enabled) {
            var a = this.q, c = !1, h = null, l = null, k, n, z, E, G, F, C, B, K, J, D, I, O;
            if (this.body) {
                c =
                        !0;
                h = b.B(0, 0);
                h.I(this.body.ri());
                l = this.body.Ym();
                B = this.Zg.oi();
                k = 0;
                for (n = B.length; k < n; k++)
                    K = B[k].ja.Qe.Wf, K.Nn();
                this.jz()
            }
            K = new e;
            K.uf = this.uf;
            K.cg = this.cg;
            K.xg = this.xg;
            k = new d;
            k.type = this.Yq ? 0 : 2;
            a.lb();
            k.position.x = 0.02 * a.ob.bi();
            k.position.y = 0.02 * a.ob.ci();
            k.Q = a.Q;
            k.Iq = this.rs;
            k.gj = this.gj;
            k.Ci = this.Ci;
            k.Gi = this.Gi;
            B = this.q.Ja && !this.q.Ja.$i();
            this.body = this.Wd.Hp(k);
            this.body.Wf = this;
            k = this.ku;
            B || this.q.vh || 0 !== this.ku || (k = 1);
            n = Math.max(Math.abs(a.width), 1);
            z = Math.max(Math.abs(a.height), 1);
            J = 0 > a.width;
            D = 0 > a.height;
            if (0 === k)
                if (a.vh)
                    for (I = a.ob.bi() - a.x, C = a.ob.ci() - a.y, a.XD(m), B = [], k = 0, n = m.length; k < n; ++k) {
                        J = m[k];
                        D = J.aC;
                        if (J.rg) {
                            if (!J.rg.Hn) {
                                G = J.rg.kc;
                                E = J.rg.Je;
                                for (z = 0; z < E; ++z)
                                    B.push(b.B(G[2 * z], G[2 * z + 1]));
                                z = J.id & 3758096384;
                                (-2147483648 === z || 1073741824 === z || 536870912 === z || z & -2147483648 && z & 1073741824 && z & 536870912) && B.reverse();
                                J.rg.Hn = He(B, (D.right - D.left) * (D.bottom - D.top));
                                z = 0;
                                for (E = B.length; z < E; ++z)
                                    b.fc(B[z]);
                                B.length = 0
                            }
                            z = 0;
                            for (E = J.rg.Hn.length; z < E; ++z) {
                                O = J.rg.Hn[z];
                                G = 0;
                                for (F = O.length; G <
                                        F; ++G)
                                    B.push(b.B(0.02 * (D.left + O[G].x - I), 0.02 * (D.top + O[G].y - C)));
                                K.shape = new g;
                                K.shape.ll(B, B.length);
                                this.body.Hj(K);
                                G = 0;
                                for (F = B.length; G < F; ++G)
                                    b.fc(B[G]);
                                B.length = 0
                            }
                        } else
                            B.push(b.B(0.02 * (D.left - I), 0.02 * (D.top - C))), B.push(b.B(0.02 * (D.right - I), 0.02 * (D.top - C))), B.push(b.B(0.02 * (D.right - I), 0.02 * (D.bottom - C))), B.push(b.B(0.02 * (D.left - I), 0.02 * (D.bottom - C))), K.shape = new g, K.shape.ll(B, B.length), this.body.Hj(K);
                        z = 0;
                        for (E = B.length; z < E; ++z)
                            b.fc(B[z]);
                        B.length = 0
                    }
                else {
                    k = a.Q;
                    a.Q = 0;
                    a.$();
                    a.lb();
                    I = a.ob.bi() - a.x;
                    C = a.ob.ci() - a.y;
                    a.Q = k;
                    a.$();
                    a.Ja.Hi(J ? -n : n, D ? -z : z, 0);
                    G = a.Ja.kc;
                    E = a.Ja.Je;
                    B = [];
                    B.length = E;
                    for (k = 0; k < E; k++)
                        B[k] = b.B(G[2 * k] - I, G[2 * k + 1] - C);
                    J !== D && B.reverse();
                    I = He(B, n * z);
                    for (k = 0; k < E; k++)
                        b.fc(B[k]);
                    if (I.length)
                        for (k = 0, n = I.length; k < n; k++) {
                            B = I[k];
                            z = 0;
                            for (E = B.length; z < E; z++)
                                C = B[z], C.x *= 0.02, C.y *= 0.02;
                            K.shape = new g;
                            K.shape.ll(B, B.length);
                            this.body.Hj(K);
                            z = 0;
                            for (E = B.length; z < E; z++)
                                b.fc(B[z])
                        }
                    else
                        K.shape = new g, K.shape.kn(0.01 * n, 0.01 * z), this.body.Hj(K)
                }
            else
                1 === k ? (K.shape = new g, K.shape.kn(0.01 * n, 0.01 * z)) : K.shape =
                        new f(0.01 * Math.min(n, z)), this.body.Hj(K);
            a.ja.Qe = this.body;
            this.ur = a.width;
            this.or = a.height;
            if (c)
                for (this.body.xi(h), this.body.kl(l), b.fc(h), this.ys(), B = this.Zg.oi(), k = 0, n = B.length; k < n; k++)
                    K = B[k].ja.Qe.Wf, K.ys();
            m.length = 0
        }
    };
    n.sd = function() {
        if (this.enabled) {
            var a = this.q, c;
            0 === this.Y.nC ? c = this.j.li / 60 : (c = this.j.ck(this.q), c > 1 / 30 && (c = 1 / 30));
            this.j.Ke > this.Y.tr && 0 < this.j.li && (this.Wd.Ig(c, this.Y.Lm, this.Y.vm), this.Wd.mt(), this.Y.tr = this.j.Ke);
            if (this.hw || a.width !== this.ur || a.height !== this.or || a.Cb !==
                    this.mr || a.da !== this.nr || a.vh && a.Xv)
                this.yq(), this.hw = !1, this.mr = a.Cb, this.nr = a.da, a.vh && a.Xv && (a.Xv = !1);
            c = a.Q !== this.qr;
            if (a.x !== this.uo || a.y !== this.vo) {
                a.lb();
                var d = a.ob.bi(), e = a.ob.ci(), f = d - this.uo, g = e - this.vo;
                this.body.Zp(b.B(0.02 * d, 0.02 * e));
                this.body.xi(b.B(f, g));
                this.sr = !0;
                this.body.Uc(!0)
            } else
                this.sr && (this.sr = !1, this.body.xi(b.B(0, 0)), this.body.Zp(b.B(0.02 * a.ob.bi(), 0.02 * a.ob.ci())));
            c && (this.body.jn(a.Q), this.body.Uc(!0));
            d = this.body.D.position;
            c = d.x / 0.02;
            d = d.y / 0.02;
            e = this.body.vd();
            if (c !==
                    a.x || d !== a.y || e !== a.Q)
                if (a.x = c, a.y = d, a.Q = e, a.$(), a.lb(), c = a.ob.bi() - a.x, d = a.ob.ci() - a.y, 0 !== c || 0 !== d)
                    a.x -= c, a.y -= d, a.$();
            this.uo = a.x;
            this.vo = a.y;
            this.qr = a.Q
        }
    };
    n.co = function(a) {
        return-1 !== a && this.q.dg ? 0 === a && this.body ? (this.body.D.position.x + this.body.si().x) / 0.02 : this.q.dg(a, !0) : this.q.x
    };
    n.eo = function(a) {
        return-1 !== a && this.q.dg ? 0 === a && this.body ? (this.body.D.position.y + this.body.si().y) / 0.02 : this.q.dg(a, !1) : this.q.y
    };
    a.prototype.cn = v("enabled");
    k.X = new a;
    c.prototype.Nf = function(a, c, d) {
        if (this.enabled) {
            var e =
                    this.co(d);
            d = this.eo(d);
            this.body.Nf(b.B(a, c), b.B(0.02 * e, 0.02 * d))
        }
    };
    c.prototype.Pm = function(a) {
        this.enabled && this.body.Pm(M(a))
    };
    c.prototype.kl = function(a) {
        this.enabled && (this.body.kl(M(a)), this.body.Uc(!0))
    };
    n.nz = function(a, c, d, e, f) {
        if (this.enabled && (c = this.j.dk(c)) && c != this.q && c.ja.Qe) {
            c.ja.Qe.Wf.Zg.add(this.q);
            var g = this.co(a);
            a = this.eo(a);
            var k;
            c.dg ? (k = c.dg(d, !0), d = c.dg(d, !1)) : (k = c.x, d = c.y);
            var l = g - k, m = a - d, n = new h;
            n.gc(this.body, c.ja.Qe, b.B(0.02 * g, 0.02 * a), b.B(0.02 * k, 0.02 * d));
            n.length = 0.02 * Math.sqrt(l *
                    l + m * m);
            n.Ln = e;
            n.ao = f;
            this.he.push(this.Wd.Um(n))
        }
    };
    n.pz = function(a, c) {
        if (this.enabled) {
            var d = this.j.dk(c);
            if (d && d != this.q && d.ja.Qe) {
                d.ja.Qe.Wf.Zg.add(this.q);
                var e = this.co(a), f = this.eo(a), g = new l;
                g.gc(this.body, d.ja.Qe, b.B(0.02 * e, 0.02 * f));
                this.he.push(this.Wd.Um(g))
            }
        }
    };
    n.oz = function(a, c, d, e) {
        if (this.enabled && (c = this.j.dk(c)) && c != this.q && c.ja.Qe) {
            c.ja.Qe.Wf.Zg.add(this.q);
            var f = this.co(a);
            a = this.eo(a);
            var g = new l;
            g.gc(this.body, c.ja.Qe, b.B(0.02 * f, 0.02 * a));
            g.Oi = !0;
            g.Jr = M(d);
            g.Zs = M(e);
            this.he.push(this.Wd.Um(g))
        }
    };
    k.ub = new c;
    k.ae = new (t())
})();
function Ke(a) {
    this.j = a
}
(function() {
    function a() {
    }
    function c() {
    }
    var b = Ke.prototype;
    b.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    b.eb.prototype.xa = t();
    b.Ra = function(a, b) {
        this.type = a;
        this.Y = a.Y;
        this.q = b;
        this.j = a.j;
        this.Em = this.op = this.np = this.Wq = this.lk = this.Ml = this.hp = this.Bo = !1;
        this.de = null;
        this.Dr = -1;
        this.dj = this.cj = 0;
        this.Yn = !1;
        this.Ri = this.tf = 0;
        this.Wn = !0;
        this.pb = this.Da = 0
    };
    var d = b.Ra.prototype;
    d.Tw = function() {
        this.Ic = Math.cos(this.bk);
        this.Jc = Math.sin(this.bk);
        this.zj = Math.cos(this.bk - Math.PI / 2);
        this.Aj = Math.sin(this.bk - Math.PI /
                2);
        this.Ic = Ua(this.Ic);
        this.Jc = Ua(this.Jc);
        this.zj = Ua(this.zj);
        this.Aj = Ua(this.Aj);
        this.Pq = this.Ug;
        0 > this.Ug && (this.Ic *= -1, this.Jc *= -1, this.Ug = Math.abs(this.Ug))
    };
    d.xa = function() {
        this.Ak = this.W[0];
        this.Pj = this.W[1];
        this.Wj = this.W[2];
        this.lr = this.W[3];
        this.Pq = this.Ug = this.W[4];
        this.Ro = this.W[5];
        this.hz = 1 === this.W[6];
        this.enabled = 0 !== this.W[7];
        this.Qk = !1;
        this.Ep = this.j.uh(this.q);
        this.bk = M(90);
        this.Tw();
        var a = this;
        this.hz && !this.j.kd && (jQuery(document).keydown(function(b) {
            a.ds(b)
        }), jQuery(document).keyup(function(b) {
            a.es(b)
        }));
        this.le || (this.pm = function(b) {
            a.cs(b)
        });
        this.j.jq(this.pm)
    };
    d.Yc = function() {
        return{ii: this.Wq, lfx: this.cj, lfy: this.dj, lfo: this.de ? this.de.uid : -1, am: this.tf, en: this.enabled, fall: this.Ri, ft: this.Wn, dx: this.Da, dy: this.pb, ms: this.Ak, acc: this.Pj, dec: this.Wj, js: this.lr, g: this.Ug, g1: this.Pq, mf: this.Ro, wof: this.Qk, woj: this.Ep, ga: this.bk}
    };
    d.Cd = function(a) {
        this.Wq = a.ii;
        this.cj = a.lfx;
        this.dj = a.lfy;
        this.Dr = a.lfo;
        this.tf = a.am;
        this.enabled = a.en;
        this.Ri = a.fall;
        this.Wn = a.ft;
        this.Da = a.dx;
        this.pb = a.dy;
        this.Ak = a.ms;
        this.Pj = a.acc;
        this.Wj = a.dec;
        this.lr = a.js;
        this.Ug = a.g;
        this.Pq = a.g1;
        this.Ro = a.mf;
        this.Qk = a.wof;
        this.Ep = a.woj;
        this.bk = a.ga;
        this.Em = this.op = this.np = this.lk = this.Ml = this.hp = this.Bo = !1;
        this.Tw()
    };
    d.Tf = function() {
        this.de = -1 === this.Dr ? null : this.j.dk(this.Dr)
    };
    d.cs = function(a) {
        this.de == a && (this.de = null)
    };
    d.nh = function() {
        this.de = null;
        this.j.kw(this.pm)
    };
    d.ds = function(a) {
        switch (a.which) {
            case 38:
                a.preventDefault();
                this.Ml = !0;
                break;
            case 37:
                a.preventDefault();
                this.Bo = !0;
                break;
            case 39:
                a.preventDefault(), this.hp =
                        !0
            }
    };
    d.es = function(a) {
        switch (a.which) {
            case 38:
                a.preventDefault();
                this.lk = this.Ml = !1;
                break;
            case 37:
                a.preventDefault();
                this.Bo = !1;
                break;
            case 39:
                a.preventDefault(), this.hp = !1
            }
    };
    d.$D = function() {
        return 0 > this.Ug ? -1 : 1
    };
    d.Zu = function() {
        var a = null, b = null, c, d;
        c = this.q.x;
        d = this.q.y;
        this.q.x += this.Ic;
        this.q.y += this.Jc;
        this.q.$();
        if (this.de && this.j.kf(this.q, this.de))
            return this.q.x = c, this.q.y = d, this.q.$(), this.de;
        (a = this.j.oe(this.q)) || 0 !== this.Ri || (b = this.j.uh(this.q, !0));
        this.q.x = c;
        this.q.y = d;
        this.q.$();
        if (a) {
            if (this.j.kf(this.q,
                    a))
                return null;
            this.Yn = !1;
            return a
        }
        if (b && b.length) {
            d = a = 0;
            for (c = b.length; a < c; a++)
                b[d] = b[a], this.j.kf(this.q, b[a]) || d++;
            if (1 <= d)
                return this.Yn = !0, b[0]
        }
        return null
    };
    d.sd = t();
    d.bw = function() {
        var a = this.j.ck(this.q), b, c, d, l, k, n, m, q, r;
        this.Ml || this.Em || (this.lk = !1);
        var p = this.Bo || this.np;
        d = this.hp || this.op;
        var s = (this.Ml || this.Em) && !this.lk;
        this.Em = this.op = this.np = !1;
        if (this.enabled) {
            this.Wq && (s = d = p = !1);
            q = this.de;
            r = !1;
            this.Wn && ((this.j.oe(this.q) || this.j.uh(this.q)) && this.j.sg(this.q, -this.Ic, -this.Jc,
                    4, !0), this.Wn = !1);
            !q || 0 !== this.pb || q.y === this.dj && q.x === this.cj || (b = q.x - this.cj, c = q.y - this.dj, this.q.x += b, this.q.y += c, this.q.$(), this.cj = q.x, this.dj = q.y, r = !0, this.j.oe(this.q) && this.j.sg(this.q, -b, -c, 2.5 * Math.sqrt(b * b + c * c)));
            var u = this.Zu();
            if (c = this.j.oe(this.q))
                if (this.j.$B(this.q, Math.max(this.q.width, this.q.height) / 2))
                    this.j.Fk(this.q, c);
                else
                    return;
            u ? (0 < this.pb && (this.Qk || (this.j.us(this.q, -this.Ic, -this.Jc, u), this.Qk = !0), this.pb = 0), q != u ? (this.de = u, this.cj = u.x, this.dj = u.y, this.j.Fk(this.q, u)) :
                    r && (c = this.j.oe(this.q)) && (this.j.Fk(this.q, c), 0 !== b && (0 < b ? this.j.sg(this.q, -this.zj, -this.Aj) : this.j.sg(this.q, this.zj, this.Aj)), this.j.sg(this.q, -this.Ic, -this.Jc)), s && (q = this.q.x, r = this.q.y, this.q.x -= this.Ic, this.q.y -= this.Jc, this.q.$(), this.j.oe(this.q) ? s = !1 : (this.j.trigger(Ke.prototype.X.Tx, this.q), this.tf = 2, this.pb = -this.lr, this.lk = !0), this.q.x = q, this.q.y = r, this.q.$())) : (this.de = null, this.pb += this.Ug * a, this.pb > this.Ro && (this.pb = this.Ro), s && (this.lk = !0));
            this.Qk = !!u;
            p == d && (0 > this.Da ? (this.Da +=
                    this.Wj * a, 0 < this.Da && (this.Da = 0)) : 0 < this.Da && (this.Da -= this.Wj * a, 0 > this.Da && (this.Da = 0)));
            p && !d && (this.Da = 0 < this.Da ? this.Da - (this.Pj + this.Wj) * a : this.Da - this.Pj * a);
            d && !p && (this.Da = 0 > this.Da ? this.Da + (this.Pj + this.Wj) * a : this.Da + this.Pj * a);
            this.Da > this.Ak ? this.Da = this.Ak : this.Da < -this.Ak && (this.Da = -this.Ak);
            p = !1;
            0 !== this.Da && (q = this.q.x, r = this.q.y, b = this.Da * a * this.zj, c = this.Da * a * this.Aj, this.q.x += this.zj * (1 < this.Da ? 1 : -1) - this.Ic, this.q.y += this.Aj * (1 < this.Da ? 1 : -1) - this.Jc, this.q.$(), l = !1, k = this.j.oe(this.q),
                    this.q.x = q + b, this.q.y = r + c, this.q.$(), d = this.j.oe(this.q), !d && u && (d = this.j.uh(this.q)) && (this.q.x = q, this.q.y = r, this.q.$(), this.j.kf(this.q, d) ? (d = null, l = !1) : l = !0, this.q.x = q + b, this.q.y = r + c, this.q.$()), d ? (b = Math.abs(this.Da * a) + 2, k || !this.j.sg(this.q, -this.Ic, -this.Jc, b, l, d)) ? (this.j.Fk(this.q, d), b = Math.max(Math.abs(2.5 * this.Da * a), 30), this.j.sg(this.q, this.zj * (0 > this.Da ? 1 : -1), this.Aj * (0 > this.Da ? 1 : -1), b, !1) ? !u || l || this.Yn || (q = this.q.x, r = this.q.y, this.q.x += this.Ic, this.q.y += this.Jc, this.j.oe(this.q) ? this.j.sg(this.q,
                    -this.Ic, -this.Jc, 3, !1) || (this.q.x = q, this.q.y = r, this.q.$()) : (this.q.x = q, this.q.y = r, this.q.$())) : (this.q.x = q, this.q.y = r, this.q.$()), l || (this.Da = 0)) : !k && 15 > Math.abs(this.pb) && (this.pb = 0, u || (p = !0)) : (q = this.Zu(), u && !q ? (c = Math.ceil(Math.abs(this.Da * a)) + 2, q = this.q.x, r = this.q.y, this.q.x += this.Ic * c, this.q.y += this.Jc * c, this.q.$(), this.j.oe(this.q) || this.j.uh(this.q) ? this.j.sg(this.q, -this.Ic, -this.Jc, c + 2, !0) : (this.q.x = q, this.q.y = r, this.q.$())) : q && 0 === this.pb && this.j.us(this.q, -this.Ic, -this.Jc, q)));
            if (0 !==
                    this.pb) {
                q = this.q.x;
                r = this.q.y;
                this.q.x += this.pb * a * this.Ic;
                this.q.y += this.pb * a * this.Jc;
                b = this.q.x;
                d = this.q.y;
                this.q.$();
                c = this.j.oe(this.q);
                l = !1;
                if (!c && 0 < this.pb && !u) {
                    if ((l = 0 < this.Ri ? null : this.j.uh(this.q, !0)) && l.length) {
                        if (this.Ep) {
                            this.q.x = q;
                            this.q.y = r;
                            this.q.$();
                            m = k = 0;
                            for (n = l.length; k < n; k++)
                                l[m] = l[k], this.j.kf(this.q, l[k]) || m++;
                            l.length = m;
                            this.q.x = b;
                            this.q.y = d;
                            this.q.$()
                        }
                        1 <= l.length && (c = l[0])
                    }
                    l = !!c
                }
                c && (this.j.Fk(this.q, c), b = l ? Math.abs(2.5 * this.pb * a + 10) : Math.max(Math.abs(2.5 * this.pb * a + 10), 30), this.j.sg(this.q,
                        this.Ic * (0 > this.pb ? 1 : -1), this.Jc * (0 > this.pb ? 1 : -1), b, l, c) ? (this.de = c, this.cj = c.x, this.dj = c.y, (this.Yn = l) && (p = !0), this.pb = 0) : (this.q.x = q, this.q.y = r, this.q.$(), this.Qk = !0, l || (this.pb = 0)))
            }
            3 !== this.tf && 0 < this.pb && !u && (this.j.trigger(Ke.prototype.X.Sx, this.q), this.tf = 3);
            if (u || p)
                3 === this.tf || p || s && 0 === this.pb ? (this.j.trigger(Ke.prototype.X.Xx, this.q), this.tf = 0 === this.Da && 0 === this.pb ? 0 : 1) : (0 !== this.tf && 0 === this.Da && 0 === this.pb && (this.j.trigger(Ke.prototype.X.ey, this.q), this.tf = 0), 1 === this.tf || 0 === this.Da &&
                        0 === this.pb || s || (this.j.trigger(Ke.prototype.X.by, this.q), this.tf = 1));
            0 < this.Ri && this.Ri--;
            this.Ep = this.j.uh(this.q)
        }
    };
    a.prototype.Tx = w(!0);
    a.prototype.Sx = w(!0);
    a.prototype.ey = w(!0);
    a.prototype.by = w(!0);
    a.prototype.Xx = w(!0);
    b.X = new a;
    c.prototype.aq = function(a) {
        switch (a) {
            case 0:
                this.np = !0;
                break;
            case 1:
                this.op = !0;
                break;
            case 2:
                this.Em = !0
            }
    };
    c.prototype.pt = function() {
        var a = this.q.x, b = this.q.y;
        this.q.x += this.Ic;
        this.q.y += this.Jc;
        this.q.$();
        var c = this.j.uh(this.q, !1);
        this.q.x = a;
        this.q.y = b;
        this.q.$();
        c &&
                (this.Ri = 3, this.de = null)
    };
    b.ub = new c;
    b.ae = new (t())
})();
function Le(a) {
    this.j = a
}
(function() {
    function a() {
    }
    var c = Le.prototype;
    c.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    c.eb.prototype.xa = t();
    c.Ra = function(a, b) {
        this.type = a;
        this.Y = a.Y;
        this.q = b;
        this.j = a.j;
        this.zc = 0
    };
    var b = c.Ra.prototype, d = 2 * Math.PI, e = Math.PI / 2, g = 3 * Math.PI / 2;
    b.xa = function() {
        this.Vc = 1 === this.W[0];
        this.nm = this.W[1];
        this.et = this.W[2];
        this.qh = this.W[3];
        this.qh += Math.random() * this.W[4];
        0 === this.qh ? this.zc = 0 : (this.zc = this.W[5] / this.qh * d, this.zc += Math.random() * this.W[6] / this.qh * d);
        this.Sd = this.W[7];
        this.Sd += Math.random() * this.W[8];
        this.ke = this.Vi = this.Ta = 0;
        this.init()
    };
    b.Yc = function() {
        return{i: this.zc, a: this.Vc, mv: this.nm, w: this.et, p: this.qh, mag: this.Sd, iv: this.Ta, iv2: this.Vi, r: this.ke, lkv: this.ee, lkv2: this.Nl}
    };
    b.Cd = function(a) {
        this.zc = a.i;
        this.Vc = a.a;
        this.nm = a.mv;
        this.et = a.w;
        this.qh = a.p;
        this.Sd = a.mag;
        this.Ta = a.iv;
        this.Vi = a.iv2 || 0;
        this.ke = a.r;
        this.ee = a.lkv;
        this.Nl = a.lkv2 || 0
    };
    b.init = function() {
        switch (this.nm) {
            case 0:
                this.Ta = this.q.x;
                break;
            case 1:
                this.Ta = this.q.y;
                break;
            case 2:
                this.Ta = this.q.width;
                this.ke = this.q.height / this.q.width;
                break;
            case 3:
                this.Ta = this.q.width;
                break;
            case 4:
                this.Ta = this.q.height;
                break;
            case 5:
                this.Ta = this.q.Q;
                this.Sd = M(this.Sd);
                break;
            case 6:
                this.Ta = this.q.opacity;
                break;
            case 7:
                this.Ta = 0;
                break;
            case 8:
                this.Ta = this.q.x, this.Vi = this.q.y
        }
        this.ee = this.Ta;
        this.Nl = this.Vi
    };
    b.zh = function(a) {
        a %= d;
        switch (this.et) {
            case 0:
                return Math.sin(a);
            case 1:
                return a <= e ? a / e : a <= g ? 1 - 2 * (a - e) / Math.PI : (a - g) / e - 1;
            case 2:
                return 2 * a / d - 1;
            case 3:
                return-2 * a / d + 1;
            case 4:
                return a < Math.PI ? -1 : 1
        }
        return 0
    };
    b.sd = function() {
        var a = this.j.ck(this.q);
        if (this.Vc &&
                0 !== a) {
            0 === this.qh ? this.zc = 0 : (this.zc += a / this.qh * d, this.zc %= d);
            switch (this.nm) {
                case 0:
                    this.q.x !== this.ee && (this.Ta += this.q.x - this.ee);
                    this.q.x = this.Ta + this.zh(this.zc) * this.Sd;
                    this.ee = this.q.x;
                    break;
                case 1:
                    this.q.y !== this.ee && (this.Ta += this.q.y - this.ee);
                    this.q.y = this.Ta + this.zh(this.zc) * this.Sd;
                    this.ee = this.q.y;
                    break;
                case 2:
                    this.q.width = this.Ta + this.zh(this.zc) * this.Sd;
                    this.q.height = this.q.width * this.ke;
                    break;
                case 3:
                    this.q.width = this.Ta + this.zh(this.zc) * this.Sd;
                    break;
                case 4:
                    this.q.height = this.Ta +
                            this.zh(this.zc) * this.Sd;
                    break;
                case 5:
                    this.q.Q !== this.ee && (this.Ta = za(this.Ta + (this.q.Q - this.ee)));
                    this.q.Q = za(this.Ta + this.zh(this.zc) * this.Sd);
                    this.ee = this.q.Q;
                    break;
                case 6:
                    this.q.opacity = this.Ta + this.zh(this.zc) * this.Sd / 100;
                    0 > this.q.opacity ? this.q.opacity = 0 : 1 < this.q.opacity && (this.q.opacity = 1);
                    break;
                case 8:
                    this.q.x !== this.ee && (this.Ta += this.q.x - this.ee), this.q.y !== this.Nl && (this.Vi += this.q.y - this.Nl), this.q.x = this.Ta + Math.cos(this.q.Q) * this.zh(this.zc) * this.Sd, this.q.y = this.Vi + Math.sin(this.q.Q) *
                            this.zh(this.zc) * this.Sd, this.ee = this.q.x, this.Nl = this.q.y
            }
            this.q.$()
        }
    };
    b.Tv = function(a, b) {
        switch (this.nm) {
            case 2:
                this.Ta *= b.width / a.width;
                this.ke = b.height / b.width;
                break;
            case 3:
                this.Ta *= b.width / a.width;
                break;
            case 4:
                this.Ta *= b.height / a.height
            }
    };
    a.prototype.Dh = v("Vc");
    c.X = new a;
    c.ub = new (t());
    c.ae = new (t())
})();
function Me(a) {
    this.j = a
}
(function() {
    var a = Me.prototype;
    a.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    a.eb.prototype.xa = t();
    a.Ra = function(a, c) {
        this.type = a;
        this.Y = a.Y;
        this.q = c;
        this.j = a.j
    };
    var c = a.Ra.prototype;
    c.xa = function() {
        this.Td = {}
    };
    c.nh = function() {
        Ka(this.Td)
    };
    c.Yc = function() {
        var a = {}, c, e;
        for (c in this.Td)
            this.Td.hasOwnProperty(c) && (e = this.Td[c], a[c] = {c: e.Vj.ac, t: e.total.ac, d: e.duration, r: e.jw});
        return a
    };
    c.Cd = function(a) {
        this.Td = {};
        for (var c in a)
            a.hasOwnProperty(c) && (this.Td[c] = {Vj: new Ma, total: new Ma, duration: a[c].d, jw: a[c].r},
            this.Td[c].Vj.ac = a[c].c, this.Td[c].total.ac = a[c].t)
    };
    c.sd = function() {
        var a = this.j.ck(this.q), c, e;
        for (c in this.Td)
            this.Td.hasOwnProperty(c) && (e = this.Td[c], e.Vj.add(a), e.total.add(a))
    };
    c.Hm = function() {
        var a, c;
        for (a in this.Td)
            this.Td.hasOwnProperty(a) && (c = this.Td[a], c.Vj.ac >= c.duration && (c.jw ? c.Vj.ac -= c.duration : delete this.Td[a]))
    };
    a.X = new (t());
    a.ub = new (t());
    a.ae = new (t())
})();
function Ne(a) {
    this.j = a
}
(function() {
    var a = Ne.prototype;
    a.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    a.eb.prototype.xa = t();
    a.Ra = function(a, b) {
        this.type = a;
        this.Y = a.Y;
        this.q = b;
        this.j = a.j;
        this.mode = 0
    };
    a = a.Ra.prototype;
    a.xa = function() {
        this.mode = this.W[0]
    };
    a.sd = t();
    a.Hm = function() {
        this.q.lb();
        var a = this.q.Qb, b = this.q.O.jb, d = !1;
        0 === this.mode ? (0 > this.q.x && (this.q.x = 0, d = !0), 0 > this.q.y && (this.q.y = 0, d = !0), this.q.x > b.width && (this.q.x = b.width, d = !0), this.q.y > b.height && (this.q.y = b.height, d = !0)) : (0 > a.left && (this.q.x -= a.left, d = !0), 0 > a.top && (this.q.y -=
                a.top, d = !0), a.right > b.width && (this.q.x -= a.right - b.width, d = !0), a.bottom > b.height && (this.q.y -= a.bottom - b.height, d = !0));
        d && this.q.$()
    }
})();
function Ub(a) {
    this.j = a
}
(function() {
    function a() {
    }
    var c = Ub.prototype;
    c.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    c.eb.prototype.xa = t();
    c.Ra = function(a, b) {
        this.type = a;
        this.Y = a.Y;
        this.q = b;
        this.j = a.j
    };
    var b = c.Ra.prototype;
    b.xa = function() {
        this.q.ja.hv = 0 !== this.W[0]
    };
    b.sd = t();
    a.prototype.cn = function() {
        return this.q.ja.hv
    };
    c.X = new a;
    c.ub = new (t())
})();
function Oe(a) {
    this.j = a;
    this.Ks = this.mp = this.Dm = this.Js = 0
}
(function() {
    var a = Oe.prototype;
    a.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    a.eb.prototype.xa = t();
    a.Ra = function(a, c) {
        this.type = a;
        this.Y = a.Y;
        this.q = c;
        this.j = a.j
    };
    var c = a.Ra.prototype;
    c.xa = function() {
        this.enabled = 0 !== this.W[0]
    };
    c.Yc = function() {
        return{smg: this.Y.Js, ss: this.Y.Dm, se: this.Y.mp, smd: this.Y.Ks}
    };
    c.Cd = function(a) {
        this.Y.Js = a.smg;
        this.Y.Dm = a.ss;
        this.Y.mp = a.se;
        this.Y.Ks = a.smd
    };
    c.sd = t();
    c.Hm = function() {
        if (this.enabled) {
            var a = this.Y.To.zC(), c = 0, e = 0, g, f;
            g = 0;
            for (f = a.length; g < f; g++)
                c += a[g].x, e += a[g].y;
            g =
                    this.q.O.jb;
            var h = this.j.bj.ac, l = f = 0;
            h >= this.Y.Dm && h < this.Y.mp && (f = this.Y.Js * Math.min(this.j.li, 1), 0 === this.Y.Ks && (f *= 1 - (h - this.Y.Dm) / (this.Y.mp - this.Y.Dm)), h = 2 * Math.random() * Math.PI, l = Math.random() * f, f = Math.cos(h) * l, l *= Math.sin(h));
            g.Hs(c / a.length + f);
            g.Is(e / a.length + l)
        }
    };
    a.ub = new (t())
})();
function Tb(a) {
    this.j = a
}
(function() {
    function a() {
    }
    var c = Tb.prototype;
    c.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    c.eb.prototype.xa = t();
    c.Ra = function(a, b) {
        this.type = a;
        this.Y = a.Y;
        this.q = b;
        this.j = a.j
    };
    var b = c.Ra.prototype;
    b.xa = function() {
        this.q.ja.Cw = 0 !== this.W[0]
    };
    b.sd = t();
    a.prototype.cn = function() {
        return this.q.ja.Cw
    };
    c.X = new a;
    c.ub = new (t())
})();
function Pe(a) {
    this.j = a
}
(function() {
    var a = Pe.prototype;
    a.eb = function(a) {
        this.Y = a;
        this.j = a.j
    };
    a.eb.prototype.xa = t();
    a.Ra = function(a, b) {
        this.type = a;
        this.Y = a.Y;
        this.q = b;
        this.j = a.j
    };
    a = a.Ra.prototype;
    a.xa = function() {
        this.mode = this.W[0]
    };
    a.sd = function() {
        var a = this.q;
        a.lb();
        var b = a.Qb, d = a.O, e = d.jb, g = 0, f = 0, h = 0, l = 0;
        0 === this.mode ? (f = e.width, l = e.height) : (g = d.Qc, f = d.Vd, h = d.Rc, l = d.Ud);
        b.right < g ? (a.x = f - 1 + (a.x - b.left), a.$()) : b.left > f ? (a.x = g + 1 - (b.right - a.x), a.$()) : b.bottom < h ? (a.y = l - 1 + (a.y - b.top), a.$()) : b.top > l && (a.y = h + 1 - (b.bottom - a.y),
                a.$())
    }
})();
function Sb() {
    return[null, null, [[P, !0, !1, !1, !1, !1, !1, !1, !1, !1], [Vb, !1, !0, !0, !0, !1, !1, !1, !1, !1], [Wb, !1, !0, !0, !0, !0, !0, !0, !0, !1], [Xb, !1, !0, !0, !0, !0, !0, !0, !0, !1], [Yb, !1, !0, !0, !0, !0, !0, !0, !0, !0], [Zb, !0, !1, !1, !1, !1, !1, !1, !1, !1]], [["t0", Wb, !1, [], 3, 0, null, [["Default", 5, !1, 1, 0, !1, 6721177173653812, [["images/player-sheet0.png", 18944, 0, 0, 110, 119, 1, 0.5, 1, [], [], 1]]]], [["Platform", Ke, 0xbef06e0145693], ["ScrollTo", Oe, 8916420257739861], ["Physics", Je, 6621916306950439]], !1, !1, 0xc8931969779d1, [], null], ["t1", Yb, !1, [],
                1, 0, ["images/solidtile.png", 4129, 0], null, [["Solid", Tb, 4544850981582839]], !1, !1, 6443454831307749, [], null], ["t2", Yb, !1, [], 2, 0, ["images/solidtile.png", 4129, 0], null, [["Solid", Tb, 0xb652fc846e85d], ["Sine", Le, 5115911356498052]], !1, !1, 428882954531585, [], null], ["t3", Yb, !1, [], 2, 0, ["images/jumpthrutile.png", 100, 1], null, [["Jumpthru", Ub, 5822734323234122], ["Timer", Me, 973244675300402]], !1, !1, 5357174049820326, [], null], ["t4", P, !1, [], 0, 0, null, null, [], !1, !1, 6510214336245982, [], null, []], ["t5", Xb, !1, [], 0, 0, null, null,
                [], !1, !1, 5540101245157953, [], null], ["t6", Yb, !1, [], 0, 0, ["images/tiledbackground.png", 1289713, 0], null, [], !1, !1, 0x69fabefe5b6f0, [], null], ["t7", Yb, !1, [], 2, 0, ["images/finnish.png", 102, 1], null, [["Solid", Tb, 5471719784990449], ["Wrap", Pe, 6913195187495692]], !1, !1, 9454083626538436, [], null], ["t8", Yb, !1, [], 0, 0, ["images/tiledbackground2.png", 169, 3], null, [], !1, !1, 392576245309901, [], null], ["t9", Yb, !1, [], 0, 0, ["images/tiledbackground3.png", 483254, 0], null, [], !1, !1, 8229516427689174, [], null], ["t10", Yb, !1, [], 0, 0, ["images/tiledbackground4.png",
                    174, 0], null, [], !1, !1, 6095346543989132, [], null], ["t11", Zb, !1, [], 0, 0, null, null, [], !1, !1, 0xc795bdaa41739, [], null, [1, 1, 1, 1]], ["t12", Vb, !1, [], 2, 0, null, null, [["Solid", Tb, 0xa746641fd9a2e], ["BoundToLayout", Ne, 8549274708701657]], !1, !1, 9875230772194158, [], null]], [], [["Opening", 944, 784, !1, "Event sheet 3", 4840518632157175, [["Layer 0", 0, 0xf40a1f1d11a38, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [[[177, 384, 0, 289, 28, 0, 0, 1, 0, 0, 0, 0, []], 12, 17, [], [[1], [1]], [0, "PLAY", "", 1, 1, 1, "", 0]]], []]], [], []], ["Level1", 944, 784, !1, "Event sheet 1",
                7650352728372819, [["Background", 0, 879940070462746, !0, [255, 255, 255], !1, 0.5, 0.5, 1, !1, 1, 0, 0, [], []], ["Game", 1, 0x7fef59cd3e983, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [[[0, 0, 0, 944, 784, 0, 0, 1, 0, 0, 0, 0, []], 6, 0, [], [], [0, 0]], [[64, 693, 0, 64, 64, 0, 0, 1, 0.5, 1, 0, 0, []], 0, 1, [], [[330, 1500, 1500, 350, 1500, 1E3, 1, 1], [1], [0, 0, 0, 1, 0.5, 0.2, 0, 0.01, 0, 1]], [0, "Default", 0, 1]], [[0, 720, 0, 208, 64, 0, 0, 1, 0, 0, 0, 0, []], 1, 2, [], [[1]], [0, 0]], [[784, 640, 0, 96, 32, 0, 0, 1, 0, 0, 0, 0, []], 1, 3, [], [[1]], [0, 0]], [[496, 720, 0, 176, 32, 0, 0, 1, 0, 0, 0, 0, []], 2, 6, [], [[1], [1,
                                        0, 0, 4, 0, 0, 0, 50, 0]], [0, 0]], [[768, 528, 0, 160, 16, 0, 0, 0.800000011920929, 0, 0, 0, 0, []], 3, 8, [], [[1], []], [0, 0]], [[576, 448, 0, 128, 32, 0, 0.1745329201221466, 1, 0, 0, 0, 0, []], 1, 9, [], [[1]], [0, 0]], [[480, 448, 0, 96, 32, 0, 0, 1, 0, 0, 0, 0, []], 1, 10, [], [[1]], [0, 0]], [[304, 432.0000305175781, 0, 192, 32, 0, 0.08473921567201614, 1, 0, 0, 0, 0, []], 1, 11, [], [[1]], [0, 0]], [[160, 224, 0, 96, 16, 0, 0, 0.800000011920929, 0, 0, 0, 0, []], 3, 12, [], [[1], []], [0, 0]], [[80, 352, 0, 96, 32, 0, 0.1343993693590164, 1, 0, 0, 0, 0, []], 1, 13, [], [[1]], [0, 0]], [[320, 160, 0, 96, 16, 0, 0, 0.800000011920929,
                                    0, 0, 0, 0, []], 3, 14, [], [[1], []], [0, 0]], [[512, 128, 0, 96, 16, 0, 0, 0.800000011920929, 0, 0, 0, 0, []], 3, 15, [], [[1], []], [0, 0]], [[672, 176, 0, 192, 32, 0, -0.008291693404316902, 1, 0, 0, 0, 0, []], 7, 4, [], [[1], [0]], [0, 0]]], []], ["UI", 2, 0xa5488ffd8d20a, !0, [255, 255, 255], !0, 0, 0, 1, !1, 1, 0, 0, [[[32, 16, 0, 240, 48, 0, 0, 1, 0, 0, 0, 0, []], 5, 19, [], [], ["Arrow keys or WASD to move", 0, "12pt Arial", "rgb(0,0,0)", 0, 0, 0, 0, 0]]], []]], [], []], ["transition", 944, 784, !1, "Event sheet 2", 6688031640633648, [["Layer 0", 0, 6976722625304847, !0, [255, 255, 255], !1, 1, 1, 1,
                        !1, 1, 0, 0, [[[60, 936, 0, 128, 32, 0, 0, 1, 0, 0, 0, 0, []], 2, 5, [], [[1], [1, 0, 0, 4, 0, 0, 0, 50, 0]], [0, 0]], [[127, 933, 0, 80, 80, 0, 0, 1, 0.5, 1, 0, 0, []], 0, 7, [], [[330, 1500, 1500, 650, 1500, 1E3, 1, 1], [1], [0, 0, 0, 1, 0.5, 0.2, 0, 0.01, 0, 1]], [0, "Default", 0, 1]]], []]], [], []]], [["Event sheet 1", [[0, null, !1, null, 9494940855561792, [[4, P.prototype.X.Nj, null, 1, !1, !1, !1, 4785725767416373, !1, [[9, 40]]]], [[0, Ke.prototype.ub.pt, "Platform", 0x74eeb99229ce3, !1]]], [0, null, !1, null, 8997632123894781, [[4, P.prototype.X.dn, null, 0, !1, !1, !1, 0x643a0f9bac2c0, !1, [[9,
                                        87]]]], [[0, Ke.prototype.ub.aq, "Platform", 6878887607721239, !1, [[3, 2]]]]], [0, null, !1, null, 5839415096742917, [[4, P.prototype.X.dn, null, 0, !1, !1, !1, 7260599245159569, !1, [[9, 65]]]], [[0, Ke.prototype.ub.aq, "Platform", 6365269128541239, !1, [[3, 0]]]]], [0, null, !1, null, 0xcf4010923f469, [[4, P.prototype.X.dn, null, 0, !1, !1, !1, 0x9e22d169126ac, !1, [[9, 83]]]], [[0, Ke.prototype.ub.pt, "Platform", 7905055343040281, !1]]], [0, null, !1, null, 360865261019413, [[4, P.prototype.X.dn, null, 0, !1, !1, !1, 0x6bcdd34ae6045, !1, [[9, 68]]]], [[0, Ke.prototype.ub.aq,
                                "Platform", 0xf6e51ae9ef0bc, !1, [[3, 1]]]]], [0, null, !0, null, 9949098388650352, [[4, P.prototype.X.Nj, null, 1, !1, !1, !1, 7042335934386412, !1, [[9, 37]]], [4, P.prototype.X.Nj, null, 1, !1, !1, !1, 8882228786026354, !1, [[9, 65]]]], [[0, Wb.prototype.ub.Ot, null, 0xb5e13f26df97, !1, [[3, 0]]]]], [0, null, !0, null, 0xf365aa4160af1, [[4, P.prototype.X.Nj, null, 1, !1, !1, !1, 0x78c1bbc5fc851, !1, [[9, 39]]], [4, P.prototype.X.Nj, null, 1, !1, !1, !1, 0x88a79fed7f0f9, !1, [[9, 68]]]], [[0, Wb.prototype.ub.Ot, null, 6428393236657613, !1, [[3, 1]]]]], [0, null, !1, null,
                        6220729016991316, [[0, Wb.prototype.X.nx, null, 0, !1, !1, !1, 0x71e3639c1dbe3, !1, [[8, 4], [0, [19, N.prototype.ae.kB]]]]], [[-1, N.prototype.ub.ky, null, 7480229964542754, !1]]], [0, null, !1, null, 0x81c0ae0062a5d, [[0, Wb.prototype.X.Ox, null, 0, !1, !1, !0, 0x6bac6c912a357, !1, [[4, 7]]]], [[-1, N.prototype.ub.Cx, null, 9254692917359116, !1, [[6, "transition"]]]]]]], ["Event sheet 2", []], ["Event sheet 3", [[0, null, !1, null, 0x548249b5e98ac, [[12, Vb.prototype.X.Dt, null, 1, !1, !1, !1, 8422565756098104, !1]], [[-1, N.prototype.ub.Dx, null, 7966617164717815,
                                !1, [[1, [2, "Level1"]]]]]]]]], "media/", !1, 640, 480, 4, !0, !0, !0, "1.0", !0, !1, 0, 0, 21, !1, !0, []]
}
;
