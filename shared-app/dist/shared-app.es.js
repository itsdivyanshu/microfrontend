import Ie from "react";
import { useSelector as xe } from "react-redux";
import { createSlice as De, combineReducers as hr, configureStore as Er } from "@reduxjs/toolkit";
import { persistReducer as Sr, FLUSH as Tr, REHYDRATE as Or, PAUSE as wr, PERSIST as Pr, PURGE as Cr, REGISTER as xr, persistStore as jr } from "redux-persist";
var re = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function kr() {
  if (je)
    return $;
  je = 1;
  var a = Ie, c = Symbol.for("react.element"), l = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, R = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(T, p, x) {
    var _, E = {}, O = null, U = null;
    x !== void 0 && (O = "" + x), p.key !== void 0 && (O = "" + p.key), p.ref !== void 0 && (U = p.ref);
    for (_ in p)
      y.call(p, _) && !S.hasOwnProperty(_) && (E[_] = p[_]);
    if (T && T.defaultProps)
      for (_ in p = T.defaultProps, p)
        E[_] === void 0 && (E[_] = p[_]);
    return { $$typeof: c, type: T, key: O, ref: U, props: E, _owner: R.current };
  }
  return $.Fragment = l, $.jsx = C, $.jsxs = C, $;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Ir() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Ie, c = Symbol.for("react.element"), l = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), T = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), ae = Symbol.iterator, Ue = "@@iterator";
    function Ye(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Ue];
      return typeof r == "function" ? r : null;
    }
    var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Me("error", e, t);
      }
    }
    function Me(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ne = !1, Le = !1, Ve = !1, Be = !1, qe = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === S || qe || e === R || e === x || e === _ || Be || e === U || Ne || Le || Ve || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === E || e.$$typeof === C || e.$$typeof === T || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Ge(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function h(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case l:
          return "Portal";
        case S:
          return "Profiler";
        case R:
          return "StrictMode";
        case x:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ie(r) + ".Consumer";
          case C:
            var t = e;
            return ie(t._context) + ".Provider";
          case p:
            return Ge(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : h(e.type) || "Memo";
          case O: {
            var u = e, s = u._payload, i = u._init;
            try {
              return h(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, D = 0, ue, se, ce, le, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function ze() {
      {
        if (D === 0) {
          ue = console.log, se = console.info, ce = console.warn, le = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ke() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ue
            }),
            info: w({}, e, {
              value: se
            }),
            warn: w({}, e, {
              value: ce
            }),
            error: w({}, e, {
              value: le
            }),
            group: w({}, e, {
              value: fe
            }),
            groupCollapsed: w({}, e, {
              value: de
            }),
            groupEnd: w({}, e, {
              value: ve
            })
          });
        }
        D < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = j.ReactCurrentDispatcher, q;
    function Y(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var J = !1, M;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      M = new He();
    }
    function me(e, r) {
      if (!e || J)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, ze();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              n = g;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), m = n.stack.split(`
`), f = o.length - 1, d = m.length - 1; f >= 1 && d >= 0 && o[f] !== m[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (o[f] !== m[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || o[f] !== m[d]) {
                    var b = `
` + o[f].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, b), b;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        J = !1, B.current = s, Ke(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", P = I ? Y(I) : "";
      return typeof e == "function" && M.set(e, P), P;
    }
    function Xe(e, r, t) {
      return me(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ze(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case x:
          return Y("Suspense");
        case _:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Xe(e.render);
          case E:
            return N(e.type, r, t);
          case O: {
            var n = e, u = n._payload, s = n._init;
            try {
              return N(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, ge = {}, ye = j.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Qe(e, r, t, n, u) {
      {
        var s = Function.call.bind(A);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              o = f;
            }
            o && !(o instanceof Error) && (L(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), L(null)), o instanceof Error && !(o.message in ge) && (ge[o.message] = !0, L(u), v("Failed %s type: %s", t, o.message), L(null));
          }
      }
    }
    var er = Array.isArray;
    function G(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function tr(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function be(e) {
      if (tr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), _e(e);
    }
    var F = j.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, he, z;
    z = {};
    function ar(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = h(F.current.type);
        z[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', h(F.current.type), e.ref), z[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Re || (Re = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, t, n, u, s, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function lr(e, r, t, n, u) {
      {
        var s, i = {}, o = null, m = null;
        t !== void 0 && (be(t), o = "" + t), or(r) && (be(r.key), o = "" + r.key), ar(r) && (m = r.ref, ir(r, u));
        for (s in r)
          A.call(r, s) && !nr.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (s in f)
            i[s] === void 0 && (i[s] = f[s]);
        }
        if (o || m) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ur(i, d), m && sr(i, d);
        }
        return cr(e, o, m, u, n, F.current, i);
      }
    }
    var K = j.ReactCurrentOwner, Ee = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Se() {
      {
        if (K.current) {
          var e = h(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function fr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Te = {};
    function dr(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = dr(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + h(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Oe(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Ye(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              X(i.value) && Oe(i.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = h(r);
          Qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var u = h(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Pe = {};
    function Ce(e, r, t, n, u, s) {
      {
        var i = Je(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = fr(u);
          m ? o += m : o += Se();
          var f;
          e === null ? f = "null" : G(e) ? f = "array" : e !== void 0 && e.$$typeof === c ? (f = "<" + (h(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, o);
        }
        var d = lr(e, r, t, u, s);
        if (d == null)
          return d;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (G(b)) {
                for (var I = 0; I < b.length; I++)
                  we(b[I], e);
                Object.freeze && Object.freeze(b);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(b, e);
        }
        if (A.call(r, "key")) {
          var P = h(e), g = Object.keys(r).filter(function(Rr) {
            return Rr !== "key";
          }), Z = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[P + Z]) {
            var br = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, P, br, P), Pe[P + Z] = !0;
          }
        }
        return e === y ? pr(d) : vr(d), d;
      }
    }
    function mr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var yr = gr, _r = mr;
    W.Fragment = y, W.jsx = yr, W.jsxs = _r;
  }()), W;
}
process.env.NODE_ENV === "production" ? re.exports = kr() : re.exports = Ir();
var Ae = re.exports;
const Dr = Ae.jsx, Q = Ae.jsxs, rt = () => {
  const a = xe((l) => l.counter.value), c = xe((l) => l.user);
  return Q("div", { className: "sidebar", children: [Dr("h2", { children: "Sidebar" }), Q("p", { children: ["Counter: ", a] }), Q("p", { children: ["User: ", c.name] })] });
};
var te = {}, ne = {};
ne.__esModule = !0;
ne.default = $r;
function V(a) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? V = function(l) {
    return typeof l;
  } : V = function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, V(a);
}
function ee() {
}
var Ar = {
  getItem: ee,
  setItem: ee,
  removeItem: ee
};
function Fr(a) {
  if ((typeof self > "u" ? "undefined" : V(self)) !== "object" || !(a in self))
    return !1;
  try {
    var c = self[a], l = "redux-persist ".concat(a, " test");
    c.setItem(l, "test"), c.getItem(l), c.removeItem(l);
  } catch {
    return process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(a, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function $r(a) {
  var c = "".concat(a, "Storage");
  return Fr(c) ? self[c] : (process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), Ar);
}
te.__esModule = !0;
te.default = Yr;
var Wr = Ur(ne);
function Ur(a) {
  return a && a.__esModule ? a : { default: a };
}
function Yr(a) {
  var c = (0, Wr.default)(a);
  return {
    getItem: function(y) {
      return new Promise(function(R, S) {
        R(c.getItem(y));
      });
    },
    setItem: function(y, R) {
      return new Promise(function(S, C) {
        S(c.setItem(y, R));
      });
    },
    removeItem: function(y) {
      return new Promise(function(R, S) {
        R(c.removeItem(y));
      });
    }
  };
}
var Fe = void 0, Mr = Nr(te);
function Nr(a) {
  return a && a.__esModule ? a : { default: a };
}
var Lr = (0, Mr.default)("local");
Fe = Lr;
const Vr = {
  value: 0
}, $e = De({
  name: "counter",
  initialState: Vr,
  reducers: {
    increment: (a) => {
      a.value += 1;
    },
    decrement: (a) => {
      a.value -= 1;
    },
    incrementByAmount: (a, c) => {
      a.value += c.payload;
    }
  }
}), { increment: tt, decrement: nt, incrementByAmount: at } = $e.actions, Br = $e.reducer, qr = {
  name: "",
  email: ""
}, We = De({
  name: "user",
  initialState: qr,
  reducers: {
    setUser: (a, c) => {
      a.name = c.payload.name, a.email = c.payload.email;
    },
    clearUser: (a) => {
      a.name = "", a.email = "";
    }
  }
}), { setUser: ot, clearUser: it } = We.actions, Jr = We.reducer, Gr = hr({
  counter: Br,
  user: Jr
}), zr = {
  key: "root",
  version: 1,
  storage: Fe
}, Kr = Sr(zr, Gr), Hr = Er({
  reducer: Kr,
  middleware: (a) => a({
    serializableCheck: {
      ignoredActions: [Tr, Or, wr, Pr, Cr, xr]
    }
  })
}), ut = jr(Hr);
export {
  rt as Sidebar,
  it as clearUser,
  nt as decrement,
  tt as increment,
  ut as persistor,
  ot as setUser,
  Hr as store
};
