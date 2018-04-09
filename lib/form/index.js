module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 255);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(3);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(7);
var has = __webpack_require__(5);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(23);
var defined = __webpack_require__(13);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(27);
var toAbsoluteIndex = __webpack_require__(38);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(29);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(44) });


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(31);
var toObject = __webpack_require__(17);
var IObject = __webpack_require__(23);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(41);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(47);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(56);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(58);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(57);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(24)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(49).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(55)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(13);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(48);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(18);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(17);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.env = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var inBrowser = exports.inBrowser = typeof window !== 'undefined';
});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(88), __webpack_require__(115), __webpack_require__(93)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/keys'), require('babel-runtime/helpers/defineProperty'), require('babel-runtime/helpers/typeof'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.keys, global.defineProperty, global._typeof);
    global.util = mod.exports;
  }
})(this, function (exports, _keys, _defineProperty2, _typeof2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.resetTypeValue = exports.toLocaleDateString = exports.createAddAPI = exports.deepAssign = undefined;

  var _keys2 = _interopRequireDefault(_keys);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _typeof3 = _interopRequireDefault(_typeof2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function deepAssign(to, from) {
    for (var key in from) {
      if (!to[key] || (0, _typeof3.default)(to[key]) !== 'object') {
        to[key] = from[key];
      } else {
        deepAssign(to[key], from[key]);
      }
    }
  }

  function createAddAPI(baseObj) {
    return function add() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (typeof args[0] === 'string') {
        args[0] = (0, _defineProperty3.default)({}, args[0], args[1]);
      }
      deepAssign(baseObj, args[0]);
    };
  }

  function toLocaleDateString(timestamp, locale) {
    var date = new Date(timestamp);

    if (locale === 'zh') {
      return date.getFullYear() + '\u5E74' + (date.getMonth() + 1) + '\u6708' + date.getDate() + '\u65E5';
    } else {
      return date.toDateString();
    }
  }

  var typesReset = {
    _set: function _set(obj, key, value) {
      obj[key] = value;
    },
    string: function string(obj, key) {
      typesReset._set(obj, key, '');
    },
    number: function number(obj, key) {
      typesReset._set(obj, key, 0);
    },
    boolean: function boolean(obj, key) {
      typesReset._set(obj, key, false);
    },
    object: function object(obj, key, value) {
      if (Array.isArray(value)) {
        typesReset._set(obj, key, []);
      } else {
        typesReset._set(obj, key, {});
      }
    }
  };
  function resetTypeValue(obj, key, defVal) {
    if (defVal !== undefined) {
      return typesReset._set(obj, key, defVal);
    }
    if (key) {
      var value = obj[key];
      var resetHandler = typesReset[typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)];
      resetHandler && resetHandler(obj, key, value);
    } else {
      (0, _keys2.default)(obj).forEach(function (key) {
        resetTypeValue(obj, key);
      });
    }
  }

  exports.deepAssign = deepAssign;
  exports.createAddAPI = createAddAPI;
  exports.toLocaleDateString = toLocaleDateString;
  exports.resetTypeValue = resetTypeValue;
});

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports) {



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
var global = __webpack_require__(0);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(22);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(85);
var step = __webpack_require__(86);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(41);
var wksExt = __webpack_require__(89);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(137);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(139);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(26).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(112)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(114),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(17);
var $keys = __webpack_require__(18);

__webpack_require__(106)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(3);
var fails = __webpack_require__(10);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(77)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../../common/helpers/env'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.env);
    global.util = mod.exports;
  }
})(this, function (exports, _env) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.STATUS_SUCCESS = exports.STATUS_ERROR = exports.STATUS_UPLOADING = exports.STATUS_READY = exports.URL = undefined;
  exports.processFiles = processFiles;
  exports.processFile = processFile;
  exports.newFile = newFile;
  var URL = exports.URL = _env.inBrowser ? window.URL || window.webkitURL || window.mozURL : null;

  var STATUS_READY = exports.STATUS_READY = 'ready';
  var STATUS_UPLOADING = exports.STATUS_UPLOADING = 'uploading';
  var STATUS_ERROR = exports.STATUS_ERROR = 'error';
  var STATUS_SUCCESS = exports.STATUS_SUCCESS = 'success';

  function processFiles(files, eachProcessFile, eachCb, cb) {
    var fileItems = [];
    var len = files.length;
    var processedLen = 0;
    for (var i = 0; i < len; i++) {
      processFile(files[i], i, eachProcessFile, function (item, index) {
        processedLen++;
        fileItems[index] = item;
        eachCb(item, index);
        if (processedLen === len) {
          return cb(fileItems);
        }
      });
    }
  }

  function processFile(file, i, eachProcessFile, cb) {
    eachProcessFile(file, function (file) {
      var item = newFile(file.name, file.size, STATUS_READY, 0, file);
      cb(item, i);
    });
  }

  function newFile() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var progress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var file = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    var base64 = file && file.base64 || '';
    var url = base64 ? '' : createURL(file);

    return {
      name: name,
      size: size,
      url: url,
      base64: base64,
      status: status,
      progress: progress,
      file: file
    };
  }

  function createURL(file) {
    if (file && URL) {
      return URL.createObjectURL(file);
    }
    return '';
  }
});

/***/ }),
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.checkbox = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-checkbox';

  var EVENT_INPUT = 'input';
  var EVENT_CHECKED = 'checked';
  var EVENT_CANCLE_CHECKED = 'cancel-checked';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: [Boolean, String]
      },
      label: {
        type: [Boolean, String]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      option: {
        type: [Boolean, String, Object],
        default: function _default() {
          return {
            _def_option: true
          };
        }
      },
      position: {
        type: String,
        default: 'left'
      },
      shape: {
        type: String,
        default: 'circle'
      },
      hollowStyle: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      var parent = this.$parent;
      var isInGroup = parent.$data._checkboxGroup;
      var isInHorizontalGroup = isInGroup && parent.$props.horizontal;
      return {
        isInGroup: isInGroup,
        isInHorizontalGroup: isInHorizontalGroup
      };
    },

    computed: {
      computedOption: function computedOption() {
        var option = this.option;
        var label = this.label;
        var disabled = this.disabled;
        if (option._def_option === true) {
          option = {
            label: label,
            value: label,
            disabled: disabled
          };
        } else if (typeof option === 'string') {
          option = {
            label: option,
            value: option,
            disabled: false
          };
        }
        return option;
      },

      checkValue: {
        get: function get() {
          if (this.isInGroup) {
            return this.$parent.value.indexOf(this.computedOption.value) > -1;
          } else {
            return Boolean(this.value);
          }
        },
        set: function set(newValue) {
          var value = this.computedOption.value;
          var emitValue = value && newValue ? value : newValue;
          var parentEmitEvent = newValue ? EVENT_CHECKED : EVENT_CANCLE_CHECKED;
          this.$emit(EVENT_INPUT, emitValue);
          if (this.isInGroup) {
            this.$parent.$emit(parentEmitEvent, value || newValue, this);
          }
        }
      },
      _containerClass: function _containerClass() {
        return {
          'cube-checkbox-hollow': this.hollowStyle,
          'cube-checkbox_checked': this.checkValue,
          'cube-checkbox_disabled': this.computedOption.disabled,
          'border-right-1px': this.isInHorizontalGroup
        };
      },
      _wrapClass: function _wrapClass() {
        if (this.isInGroup && !this.isInHorizontalGroup) {
          return 'border-bottom-1px';
        }
      },
      isSquare: function isSquare() {
        return this.shape === 'square' || this.hollowStyle;
      },
      _borderIconClass: function _borderIconClass() {
        return this.isSquare ? 'cubeic-square-border' : 'cubeic-round-border';
      },
      _rightIconClass: function _rightIconClass() {
        return this.isSquare ? 'cubeic-square-right' : 'cubeic-right';
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-checkbox",
    class: _vm._containerClass,
    attrs: {
      "data-pos": _vm.position
    }
  }, [_c('label', {
    staticClass: "cube-checkbox-wrap",
    class: _vm._wrapClass
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.checkValue),
      expression: "checkValue"
    }],
    staticClass: "cube-checkbox-input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.computedOption.disabled
    },
    domProps: {
      "checked": Array.isArray(_vm.checkValue) ? _vm._i(_vm.checkValue, null) > -1 : (_vm.checkValue)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.checkValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.checkValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.checkValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.checkValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "cube-checkbox-ui",
    class: _vm._borderIconClass
  }, [_c('i', {
    class: _vm._rightIconClass
  })]), _vm._v(" "), _c('span', {
    staticClass: "cube-checkbox-label"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.computedOption.label))])], 2)])])
},staticRenderFns: []}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(116);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(118);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(4), 'Object', { defineProperty: __webpack_require__(8).f });


/***/ }),
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(83);
module.exports = __webpack_require__(89).f('iterator');


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
__webpack_require__(82);
__webpack_require__(147);
__webpack_require__(148);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(4);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(47);
var META = __webpack_require__(142).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(25);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(20);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(89);
var wksDefine = __webpack_require__(90);
var enumKeys = __webpack_require__(143);
var isArray = __webpack_require__(144);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(6);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(48);
var gOPNExt = __webpack_require__(145);
var $GOPD = __webpack_require__(146);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(18);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(102).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(41)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(20)('meta');
var isObject = __webpack_require__(6);
var has = __webpack_require__(5);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(31);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(102).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(31);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(33);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90)('asyncIterator');


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90)('observable');


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(78)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.util);
    global.types = mod.exports;
  }
})(this, function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addType = exports.types = undefined;

  var types = {
    string: function string(val) {
      return typeof val === 'string';
    },
    number: function number(val) {
      return !isNaN(Number(val));
    },
    array: function array(val) {
      return Array.isArray(val);
    },
    date: function date(val) {
      return !isNaN(Number(val));
    },
    email: function email(val) {
      return typeof val === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(val);
    },
    tel: function tel(val) {
      return typeof val === 'string' && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(val);
    },
    url: function url(val) {
      return typeof val === 'string' && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(val);
    }
  };

  var addType = (0, _util.createAddAPI)(types);

  exports.types = types;
  exports.addType = addType;
});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(178)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(180),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(166), __webpack_require__(167), __webpack_require__(149)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./rules'), require('./messages'), require('./types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.rules, global.messages, global.types);
    global.index = mod.exports;
  }
})(this, function (exports, _rules, _messages, _types) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'rules', {
    enumerable: true,
    get: function () {
      return _rules.rules;
    }
  });
  Object.defineProperty(exports, 'addRule', {
    enumerable: true,
    get: function () {
      return _rules.addRule;
    }
  });
  Object.defineProperty(exports, 'findMessage', {
    enumerable: true,
    get: function () {
      return _messages.findMessage;
    }
  });
  Object.defineProperty(exports, 'addMessage', {
    enumerable: true,
    get: function () {
      return _messages.addMessage;
    }
  });
  Object.defineProperty(exports, 'setLanguage', {
    enumerable: true,
    get: function () {
      return _messages.setLanguage;
    }
  });
  Object.defineProperty(exports, 'types', {
    enumerable: true,
    get: function () {
      return _types.types;
    }
  });
  Object.defineProperty(exports, 'addType', {
    enumerable: true,
    get: function () {
      return _types.addType;
    }
  });
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(185)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(186),
  /* template */
  __webpack_require__(187),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(204)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(206),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(207)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(209),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(156)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(158),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.button = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-button';
  exports.default = {
    name: COMPONENT_NAME,
    props: {
      icon: {
        type: String,
        default: ''
      },
      active: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      primary: {
        type: Boolean,
        default: false
      },
      outline: {
        type: Boolean,
        default: false
      },
      light: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'button'
      }
    },
    computed: {
      btnClass: function btnClass() {
        return {
          'cube-btn_active': this.active,
          'cube-btn_disabled': this.disabled,
          'cube-btn-inline': this.inline,
          'cube-btn-primary': this.primary,
          'cube-btn-outline': this.outline,
          'cube-btn-outline-primary': this.outline && this.primary,
          'cube-btn-light': this.light
        };
      }
    },
    methods: {
      handleClick: function handleClick(event) {
        if (this.disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        this.$emit('click', event);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "cube-btn",
    class: _vm.btnClass,
    attrs: {
      "type": _vm.type
    },
    on: {
      "click": _vm.handleClick
    }
  }, [(_vm.icon) ? _c('i', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(160)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(162),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(103)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../checkbox/checkbox.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.checkbox);
    global.checkboxGroup = mod.exports;
  }
})(this, function (module, exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _checkbox2 = _interopRequireDefault(_checkbox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-checkbox-group';

  var EVENT_INPUT = 'input';
  var EVENT_CHECKED = 'checked';
  var EVENT_CANCLE_CHECKED = 'cancel-checked';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Array
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: 'circle'
      },
      position: {
        type: String,
        default: 'left'
      },
      hollowStyle: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        _value: [],
        _checkboxGroup: true
      };
    },

    computed: {
      groupClass: function groupClass() {
        if (!this.horizontal) {
          return 'border-top-1px border-bottom-1px';
        }
      }
    },
    watch: {
      value: {
        immediate: true,
        handler: function handler(newValue, oldValue) {
          this._value = this.value.concat();
        }
      }
    },
    mounted: function mounted() {
      this.$on(EVENT_CHECKED, function (value) {
        this._value.push(value);
        this.$emit(EVENT_INPUT, this._value);
      });
      this.$on(EVENT_CANCLE_CHECKED, function (value) {
        var index = this._value.indexOf(value);
        this._value.splice(index, 1);
        this.$emit(EVENT_INPUT, this._value);
      });
    },

    components: {
      CubeCheckbox: _checkbox2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "group",
    staticClass: "cube-checkbox-group",
    class: _vm.groupClass,
    attrs: {
      "data-horz": _vm.horizontal
    }
  }, [_vm._t("default", _vm._l((_vm.options), function(option, index) {
    return _c('cube-checkbox', {
      key: index,
      attrs: {
        "option": option,
        "shape": _vm.shape,
        "position": _vm.position,
        "hollow-style": _vm.hollowStyle
      }
    })
  }))], 2)
},staticRenderFns: []}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(164)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(170),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(88), __webpack_require__(151)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/keys'), require('../../common/helpers/validator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global.validator);
    global.validator = mod.exports;
  }
})(this, function (module, exports, _keys, _validator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _keys2 = _interopRequireDefault(_keys);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-validator';
  var EVENT_INPUT = 'input';
  var EVENT_MSG_CLICK = 'msg-click';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      model: {
        required: true
      },
      rules: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      messages: {
        type: [Object, String],
        default: function _default() {
          return {};
        }
      },
      value: {},
      disabled: {
        type: Boolean,
        default: false
      },
      immediate: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      var value = this.value;
      return {
        valid: value,
        validated: false,
        msg: '',
        dirty: false,
        result: {}
      };
    },

    computed: {
      invalid: function invalid() {
        var valid = this.valid;
        return valid === undefined ? undefined : !valid;
      },
      isDisabled: function isDisabled() {
        var disabled = this.disabled;
        var noRules = (0, _keys2.default)(this.rules).length <= 0;
        return disabled || noRules;
      },
      dirtyOrValidated: function dirtyOrValidated() {
        return this.dirty || this.validated;
      },
      containerClass: function containerClass() {
        var disabled = this.isDisabled;
        if (disabled) {
          return;
        }
        return {
          'cube-validator_invalid': this.invalid,
          'cube-validator_valid': this.valid
        };
      }
    },
    watch: {
      model: function model(newVal) {
        if (this.isDisabled) {
          return;
        }
        if (!this.dirty) {
          this.dirty = true;
        }

        this.validate();
      },
      isDisabled: function isDisabled(newVal) {
        if (!newVal && this.trigger && !this.validated) {
          this.validate();
        }
      }
    },
    created: function created() {
      if (!this.isDisabled && this.immediate) {
        this.validate();
      }
    },

    methods: {
      validate: function validate() {
        if (this.isDisabled) {
          return;
        }
        var val = this.model;
        this.validated = true;

        var valid = true;
        var configRules = this.rules;
        var type = configRules.type;
        var result = {};

        if (!configRules.required) {
          var requiredValid = _validator.rules.required(val, true, type);
          if (!requiredValid) {
            return this._updateModel(valid, result);
          }
        }

        for (var key in configRules) {
          var ruleValue = configRules[key];
          var ret = void 0;
          if (typeof ruleValue === 'function') {
            ret = ruleValue(val, configRules[key], type);
          } else {
            ret = !_validator.rules[key] || _validator.rules[key](val, configRules[key], type);
          }
          var msg = this.messages[key] ? typeof this.messages[key] === 'function' ? this.messages[key](ret) : this.messages[key] : (0, _validator.findMessage)(key, configRules[key], type, val);

          if (valid && ret !== true) {
            valid = false;
            this.msg = msg;
          }

          result[key] = {
            valid: ret === true,
            invalid: ret !== true,
            message: msg
          };
        }
        this._updateModel(valid, result);
      },
      _updateModel: function _updateModel(valid, result) {
        this.result = result;
        if (result.required && result.required.invalid) {
          this.msg = result.required.message;
        }

        if (valid) {
          this.msg = '';
        }
        this.valid = valid;
        this.$emit(EVENT_INPUT, this.valid);
      },
      reset: function reset() {
        this.dirty = false;
        this.result = {};
        this.msg = '';
        this.validated = false;
        this.valid = undefined;
        this.$emit(EVENT_INPUT, this.valid);
      },
      msgClickHandler: function msgClickHandler() {
        this.$emit(EVENT_MSG_CLICK);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(93), __webpack_require__(78), __webpack_require__(149)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/helpers/typeof'), require('../util'), require('./types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.util, global.types);
    global.rules = mod.exports;
  }
})(this, function (exports, _typeof2, _util, _types) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addRule = exports.rules = undefined;

  var _typeof3 = _interopRequireDefault(_typeof2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var rules = {
    required: function required(val, _required, type) {
      type = type || (Array.isArray(val) ? 'array' : typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val));
      if (type === 'array' && Array.isArray(val)) {
        return val.length > 0;
      }
      return val !== '' && val !== undefined && val !== null;
    },
    type: function type(val, _type) {
      return !_types.types[_type] || _types.types[_type](val);
    },
    min: function min(val, _min, type) {
      type = type || (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val));
      if (type === 'number' || type === 'date') {
        return Number(val) >= _min;
      } else {
        return val.length >= _min;
      }
    },
    max: function max(val, _max, type) {
      type = type || (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val));
      if (type === 'number' || type === 'date') {
        return Number(val) <= _max;
      } else {
        return val.length <= _max;
      }
    },
    len: function len(val, _len, type) {
      type = type || (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val));
      if (type === 'number' || type === 'date') {
        return Number(val) === _len;
      } else {
        return val.length === _len;
      }
    },
    notWhitespace: function notWhitespace(val, config, type) {
      return !/^\s+$/.test(val);
    },
    pattern: function pattern(val, _pattern, type) {
      return _pattern.test(val);
    },
    custom: function custom(val, _custom, type) {
      return _custom(val);
    }
  };

  var addRule = (0, _util.createAddAPI)(rules);

  exports.rules = rules;
  exports.addRule = addRule;
});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(93), __webpack_require__(78), __webpack_require__(168), __webpack_require__(169)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/helpers/typeof'), require('../util'), require('./language/chinese'), require('./language/english'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.util, global.chinese, global.english);
    global.messages = mod.exports;
  }
})(this, function (exports, _typeof2, _util, _chinese, _english) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setLanguage = exports.addMessage = exports.findMessage = undefined;

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _chinese2 = _interopRequireDefault(_chinese);

  var _english2 = _interopRequireDefault(_english);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var language = 'zh';

  var messages = {
    zh: _chinese2.default,
    en: _english2.default
  };

  function findMessage(key, config, type, val) {
    var target = messages[language][key];
    if (!target) {
      return '';
    }
    if (typeof target === 'string') {
      return target;
    } else {
      if (!target[type]) {
        type = Array.isArray(val) ? 'array' : typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val);
      }
      return typeof target[type] === 'function' ? target[type](config) : target[type];
    }
  }

  var addMessageZh = (0, _util.createAddAPI)(messages.zh);
  var addMessageEn = (0, _util.createAddAPI)(messages.en);

  function addMessage() {
    if (language === 'zh') {
      addMessageZh.apply(undefined, arguments);
    } else {
      addMessageEn.apply(undefined, arguments);
    }
  }

  function setLanguage(lang) {
    language = lang;
  }

  exports.findMessage = findMessage;
  exports.addMessage = addMessage;
  exports.setLanguage = setLanguage;
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(78)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.util);
    global.chinese = mod.exports;
  }
})(this, function (module, exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    required: '此为必填项',
    type: {
      string: '请输入字符',
      number: '请输入数字',
      array: '数据类型应为数组',
      date: '请选择有效日期',
      email: '请输入有效邮箱',
      tel: '请输入有效的手机号码',
      url: '请输入有效网址'
    },
    min: {
      string: function string(config) {
        return '\u81F3\u5C11\u8F93\u5165 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      number: function number(config) {
        return '\u4E0D\u5F97\u5C0F\u4E8E ' + config;
      },
      array: function array(config) {
        return '\u8BF7\u9009\u62E9\u81F3\u5C11 ' + config + ' \u9879';
      },
      date: function date(config) {
        return '\u8BF7\u9009\u62E9 ' + (0, _util.toLocaleDateString)(config, 'zh') + ' \u4E4B\u540E\u7684\u65F6\u95F4';
      },
      email: function email(config) {
        return '\u81F3\u5C11\u8F93\u5165 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      tel: function tel(config) {
        return '\u81F3\u5C11\u8F93\u5165 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      url: function url(config) {
        return '\u81F3\u5C11\u8F93\u5165 ' + config + ' \u4F4D\u5B57\u7B26';
      }
    },
    max: {
      string: function string(config) {
        return '\u8BF7\u52FF\u8D85\u8FC7 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      number: function number(config) {
        return '\u8BF7\u52FF\u5927\u4E8E ' + config;
      },
      array: function array(config) {
        return '\u6700\u591A\u9009\u62E9 ' + config + ' \u9879';
      },
      date: function date(config) {
        return '\u8BF7\u9009\u62E9 ' + (0, _util.toLocaleDateString)(config, 'zh') + ' \u4E4B\u524D\u7684\u65F6\u95F4';
      },
      email: function email(config) {
        return '\u8BF7\u52FF\u8D85\u8FC7 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      tel: function tel(config) {
        return '\u8BF7\u52FF\u8D85\u8FC7 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      url: function url(config) {
        return '\u8BF7\u52FF\u8D85\u8FC7 ' + config + ' \u4F4D\u5B57\u7B26';
      }
    },
    len: {
      string: function string(config) {
        return '\u8BF7\u8F93\u5165 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      number: function number(config) {
        return '\u9700\u7B49\u4E8E ' + config;
      },
      array: function array(config) {
        return '\u8BF7\u9009\u62E9 ' + config + ' \u9879';
      },
      date: function date(config) {
        return '\u8BF7\u9009\u62E9 ' + (0, _util.toLocaleDateString)(config, 'zh');
      },
      email: function email(config) {
        return '\u8BF7\u8F93\u5165 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      tel: function tel(config) {
        return '\u8BF7\u8F93\u5165 ' + config + ' \u4F4D\u5B57\u7B26';
      },
      url: function url(config) {
        return '\u8BF7\u8F93\u5165 ' + config + ' \u4F4D\u5B57\u7B26';
      }
    },
    pattern: '格式错误',
    custom: '未通过校验',
    notWhitespace: '空白内容无效'
  };
  module.exports = exports['default'];
});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(78)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.util);
    global.english = mod.exports;
  }
})(this, function (module, exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    required: 'Required.',
    type: {
      string: 'Please input characters.',
      number: 'Please input numbers.',
      array: 'The data type should be array.',
      date: 'Please select a valid date.',
      email: 'Please input a valid E-mail.',
      tel: 'Please input a valid telphone number.',
      url: 'Please input a valid web site.'
    },
    min: {
      string: function string(config) {
        return 'Please input at least ' + config + ' characters.';
      },
      number: function number(config) {
        return 'The number could not smaller than ' + config + '.';
      },
      array: function array(config) {
        return 'Please select at least ' + config + ' items.';
      },
      date: function date(config) {
        return 'Please select a date after ' + (0, _util.toLocaleDateString)(config, 'en');
      },
      email: function email(config) {
        return 'Please input at least ' + config + ' characters.';
      },
      tel: function tel(config) {
        return 'Please input at least ' + config + ' characters.';
      },
      url: function url(config) {
        return 'Please input at least ' + config + ' characters.';
      }
    },
    max: {
      string: function string(config) {
        return 'Please input no more than ' + config + ' characters.';
      },
      number: function number(config) {
        return 'The number could not bigger than ' + config;
      },
      array: function array(config) {
        return 'Please select no more than  ' + config + ' items';
      },
      date: function date(config) {
        return 'Please select a date before ' + (0, _util.toLocaleDateString)(config, 'en');
      },
      email: function email(config) {
        return 'Please input no more than ' + config + ' characters.';
      },
      tel: function tel(config) {
        return 'Please input no more than ' + config + ' characters.';
      },
      url: function url(config) {
        return 'Please input no more than ' + config + ' characters.';
      }
    },
    len: {
      string: function string(config) {
        return 'Please input ' + config + ' characters.';
      },
      number: function number(config) {
        return 'The number should equal ' + config;
      },
      array: function array(config) {
        return 'Please select ' + config + ' items';
      },
      date: function date(config) {
        return 'Please select ' + (0, _util.toLocaleDateString)(config, 'en');
      },
      email: function email(config) {
        return 'Please input ' + config + ' characters.';
      },
      tel: function tel(config) {
        return 'Please input ' + config + ' characters.';
      },
      url: function url(config) {
        return 'Please input ' + config + ' characters.';
      }
    },
    pattern: 'The input don"t match pattern.',
    custom: 'Invalid.',
    notWhitespace: 'Whitespace is invalid.'
  };
  module.exports = exports['default'];
});

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-validator",
    class: _vm.containerClass
  }, [_c('div', {
    staticClass: "cube-validator-content"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "cube-validator-msg",
    on: {
      "click": _vm.msgClickHandler
    }
  }, [_vm._t("message", [_c('span', {
    staticClass: "cube-validator-msg-def"
  }, [_vm._v(_vm._s(_vm.dirtyOrValidated ? _vm.msg : ''))])], {
    message: _vm.msg,
    dirty: _vm.dirty,
    validated: _vm.validated,
    result: _vm.result
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(172)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(174),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.input = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-input';
  var EVENT_INPUT = 'input';
  var EVENT_BLUR = 'blur';
  var EVENT_FOCUS = 'focus';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      readonly: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: Boolean,
        default: false
      },
      name: String,
      id: String,
      form: String,
      minlength: Number,
      maxlength: Number,
      resize: String,
      min: Number,
      max: Number,
      step: Number,
      tabindex: String,
      clearable: {
        type: Boolean,
        default: false
      },
      eye: {
        type: [Boolean, Object],
        default: false
      }
    },
    data: function data() {
      return {
        inputValue: this.value,
        isFocus: false,
        pwdVisible: false
      };
    },

    computed: {
      _type: function _type() {
        var type = this.type;
        if (type === 'password' && this.pwdVisible) {
          return 'text';
        }
        return type;
      },
      _showClear: function _showClear() {
        return this.clearable && this.inputValue && !this.readonly && !this.disabled;
      },
      _showPwdEye: function _showPwdEye() {
        return this.type === 'password' && this.eye && !this.disabled;
      },
      eyeClass: function eyeClass() {
        return this.pwdVisible ? 'cubeic-eye-invisible' : 'cubeic-eye-visible';
      }
    },
    watch: {
      value: function value(newValue) {
        this.inputValue = newValue;
      },
      inputValue: function inputValue(newValue) {
        this.$emit(EVENT_INPUT, newValue);
      },
      eye: function eye() {
        this._computedPwdVisible();
      }
    },
    created: function created() {
      this._computedPwdVisible();
    },

    methods: {
      _computedPwdVisible: function _computedPwdVisible() {
        if (typeof this.eye === 'boolean') {
          this.pwdVisible = this.eye;
        } else {
          this.pwdVisible = this.eye.open;
        }
      },
      handleFocus: function handleFocus(e) {
        this.$emit(EVENT_FOCUS, e);
        this.isFocus = true;
      },
      handleBlur: function handleBlur(e) {
        this.$emit(EVENT_BLUR, e);
        this.isFocus = false;
      },
      handleClear: function handleClear(e) {
        this.inputValue = '';
        this.$refs.input.focus();
      },
      handlePwdEye: function handlePwdEye() {
        this.pwdVisible = !this.pwdVisible;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-input",
    class: {
      'cube-input_active': _vm.isFocus
    }
  }, [(_vm.$slots.prepend) ? _c('div', {
    staticClass: "cube-input-prepend"
  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), ((_vm._type) === 'checkbox') ? _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    ref: "input",
    staticClass: "cube-input-field",
    attrs: {
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.inputValue) ? _vm._i(_vm.inputValue, null) > -1 : (_vm.inputValue)
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "change": function($event) {
        var $$a = _vm.inputValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.inputValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.inputValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.inputValue = $$c
        }
      }
    }
  }, 'input', _vm.$props, false)) : ((_vm._type) === 'radio') ? _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    ref: "input",
    staticClass: "cube-input-field",
    attrs: {
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.inputValue, null)
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "change": function($event) {
        _vm.inputValue = null
      }
    }
  }, 'input', _vm.$props, false)) : _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    ref: "input",
    staticClass: "cube-input-field",
    attrs: {
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "type": _vm._type
    },
    domProps: {
      "value": (_vm.inputValue)
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputValue = $event.target.value
      }
    }
  }, 'input', _vm.$props, false)), _vm._v(" "), (_vm.$slots.append || _vm._showClear || _vm._showPwdEye) ? _c('div', {
    staticClass: "cube-input-append"
  }, [(_vm._showClear) ? _c('div', {
    staticClass: "cube-input-clear",
    on: {
      "click": _vm.handleClear
    }
  }, [_c('i', {
    staticClass: "cubeic-wrong"
  })]) : _vm._e(), _vm._v(" "), (_vm._showPwdEye) ? _c('div', {
    staticClass: "cube-input-eye",
    on: {
      "click": _vm.handlePwdEye
    }
  }, [_c('i', {
    class: _vm.eyeClass
  })]) : _vm._e(), _vm._v(" "), _vm._t("append")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(176)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(181),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(150)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./radio.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.radio);
    global.radioGroup = mod.exports;
  }
})(this, function (module, exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _radio2 = _interopRequireDefault(_radio);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-radio-group';

  var EVENT_INPUT = 'input';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: String,
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      position: {
        type: String,
        default: 'left'
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      hollowStyle: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        radioValue: this.value
      };
    },

    watch: {
      value: function value(newV) {
        this.radioValue = newV;
      },
      radioValue: function radioValue(newV) {
        this.$emit(EVENT_INPUT, newV);
      }
    },
    computed: {
      _groupClass: function _groupClass() {
        if (!this.horizontal) {
          return 'border-top-1px border-bottom-1px';
        }
      }
    },
    components: {
      CubeRadio: _radio2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.radio = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-radio';
  var EVENT_INPUT = 'input';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: String,
      option: {
        type: [String, Object],
        required: true
      },
      position: {
        type: String,
        default: 'left'
      },
      hollowStyle: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        radioValue: this.value
      };
    },

    watch: {
      value: function value(newV) {
        this.radioValue = newV;
      },
      radioValue: function radioValue(newV) {
        this.$emit(EVENT_INPUT, newV);
      }
    },
    computed: {
      _containerClass: function _containerClass() {
        var option = this.option;
        return {
          'cube-radio-hollow': this.hollowStyle,
          'cube-radio_selected': this.radioValue === (option.value || option),
          'cube-radio_disabled': option.disabled,
          'border-right-1px': this.$parent.horizontal
        };
      },
      _wrapClass: function _wrapClass() {
        if (!this.$parent.horizontal) {
          return 'border-bottom-1px';
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-radio",
    class: _vm._containerClass,
    attrs: {
      "data-pos": _vm.position
    }
  }, [_c('label', {
    staticClass: "cube-radio-wrap",
    class: _vm._wrapClass
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.radioValue),
      expression: "radioValue"
    }],
    staticClass: "cube-radio-input",
    attrs: {
      "type": "radio",
      "disabled": _vm.option.disabled
    },
    domProps: {
      "value": _vm.option.value || _vm.option,
      "checked": _vm._q(_vm.radioValue, _vm.option.value || _vm.option)
    },
    on: {
      "change": function($event) {
        _vm.radioValue = _vm.option.value || _vm.option
      }
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._t("default", [_c('span', {
    staticClass: "cube-radio-label"
  }, [_vm._v(_vm._s(_vm.option.label || _vm.option))])])], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "cube-radio-ui cubeic-round-border"
  }, [_c('i')])
}]}

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-radio-group",
    class: _vm._groupClass,
    attrs: {
      "data-horz": _vm.horizontal
    }
  }, [_vm._t("default", _vm._l((_vm.options), function(option, index) {
    return _c('cube-radio', {
      key: index,
      attrs: {
        "option": option,
        "position": _vm.position,
        "hollow-style": _vm.hollowStyle
      },
      model: {
        value: (_vm.radioValue),
        callback: function($$v) {
          _vm.radioValue = $$v
        },
        expression: "radioValue"
      }
    })
  }))], 2)
},staticRenderFns: []}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(183)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(188),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(152)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./rate-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.rateItem);
    global.rate = mod.exports;
  }
})(this, function (module, exports, _rateItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _rateItem2 = _interopRequireDefault(_rateItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-rate';
  var EVENT_INPUT = 'input';

  var EVENT_TYPE_MOUSE = 'mouse';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 5
      },
      disabled: {
        type: Boolean,
        default: false
      },
      justify: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        tempValue: this.value
      };
    },
    created: function created() {
      this.mousePressed = false;
    },

    computed: {
      rateClass: function rateClass() {
        return this.justify && 'cube-rate-justify';
      }
    },
    watch: {
      value: function value(val) {
        if (val !== this.tempValue) {
          this.tempValue = val;
        }
      }
    },
    methods: {
      handleStart: function handleStart(e) {
        if (!this.disabled) {
          if (e.type.indexOf(EVENT_TYPE_MOUSE) > -1) {
            this.mousePressed = true;
            document.addEventListener('mouseup', this.handleEnd);
            document.addEventListener('mousemove', this.handleMove);
          }
          var rect = this.$refs.rateContainer.getBoundingClientRect();
          this.left = rect.left;
          this.containerWidth = rect.width;
        }
      },
      handleMove: function handleMove(e) {
        if (!this.disabled && (e.type.indexOf(EVENT_TYPE_MOUSE) === -1 || this.mousePressed)) {
          this.computeTempValue(e.type.indexOf(EVENT_TYPE_MOUSE) === -1 ? e.touches[0] : e);
        }
      },
      handleEnd: function handleEnd(e) {
        if (!this.disabled && (e.type.indexOf(EVENT_TYPE_MOUSE) === -1 || this.mousePressed)) {
          if (e.type.indexOf(EVENT_TYPE_MOUSE) > -1) {
            this.mousePressed = false;
            document.removeEventListener('mouseup', this.handleEnd);
            document.removeEventListener('mousemove', this.handleMove);
          }
          this.computeTempValue(e.type.indexOf(EVENT_TYPE_MOUSE) > -1 ? e : e.changedTouches[0]);
          this.$emit(EVENT_INPUT, this.tempValue);
        }
      },
      computeTempValue: function computeTempValue(touch) {
        var leftAmount = Math.ceil((touch.clientX - this.left) / this.containerWidth * this.max);
        if (leftAmount > 0 && leftAmount <= this.max) {
          this.tempValue = leftAmount;
        } else if (leftAmount <= 0) {
          this.tempValue = 0;
        } else {
          this.tempValue = this.max;
        }
      }
    },
    components: {
      CubeRateItem: _rateItem2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.rateItem = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-rate-item';
  exports.default = {
    name: COMPONENT_NAME,
    props: {
      index: {
        type: Number,
        default: 0
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "cube-rate-item",
    class: {
      'cube-rate-item_active': _vm.index <= _vm.$parent.tempValue
    }
  }, [_vm._t("default", [_c('div', {
    staticClass: "cube-rate-item-def"
  })])], 2)
},staticRenderFns: []}

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    ref: "rateContainer",
    staticClass: "cube-rate",
    class: _vm.rateClass,
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        return _vm.handleStart($event)
      },
      "touchmove": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.handleMove($event)
      },
      "touchend": function($event) {
        $event.stopPropagation();
        return _vm.handleEnd($event)
      },
      "mousedown": function($event) {
        $event.stopPropagation();
        return _vm.handleStart($event)
      },
      "mousemove": function($event) {
        $event.stopPropagation();
        return _vm.handleMove($event)
      },
      "mouseup": function($event) {
        $event.stopPropagation();
        return _vm.handleEnd($event)
      }
    }
  }, [_vm._t("default", _vm._l((_vm.max), function(n) {
    return _c('cube-rate-item', {
      key: n,
      attrs: {
        "index": n
      }
    })
  }))], 2)
},staticRenderFns: []}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(190)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(192),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 190 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(93)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/typeof'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._typeof);
    global.select = mod.exports;
  }
})(this, function (module, exports, _typeof2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof3 = _interopRequireDefault(_typeof2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-select';

  var EVENT_CHANGE = 'change';
  var EVENT_INPUT = 'input';
  var EVENT_PICKER_SHOW = 'picker-show';
  var EVENT_PICKER_HIDE = 'picker-hide';

  exports.default = {
    name: COMPONENT_NAME,
    data: function data() {
      return {
        active: false
      };
    },

    props: {
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      value: null,
      placeholder: {
        type: String,
        default: '请选择'
      },
      autoPop: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '请选择'
      },
      cancelTxt: {
        type: String,
        default: '取消'
      },
      confirmTxt: {
        type: String,
        default: '确定'
      }
    },
    computed: {
      adaptOptions: function adaptOptions() {
        return [this.options.map(function (item) {
          if ((typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) !== 'object') {
            item = {
              value: item,
              text: item
            };
          }
          return item;
        })];
      },
      findIndex: function findIndex() {
        var _this = this;

        var findIndex = this.adaptOptions[0].findIndex(function (item) {
          return item.value === _this.value;
        });
        this.picker && this.picker.setData(this.adaptOptions, findIndex !== -1 ? [findIndex] : [0]);

        return findIndex;
      },
      selectedText: function selectedText() {
        return this.findIndex !== -1 ? this.adaptOptions[0][this.findIndex].text : '';
      }
    },
    created: function created() {
      this.picker = this.$createPicker({
        title: this.title,
        data: this.adaptOptions,
        selectedIndex: this.findIndex !== -1 ? [this.findIndex] : [0],
        cancelTxt: this.cancelTxt,
        confirmTxt: this.confirmTxt,
        onSelect: this.hided,
        onValueChange: this.changeHandle,
        onCancel: this.hided
      });
      this.autoPop && this.showPicker();
    },

    methods: {
      showPicker: function showPicker() {
        if (this.disabled) {
          return;
        }
        this.picker.show();
        this.active = true;
        this.$emit(EVENT_PICKER_SHOW);
      },
      hided: function hided() {
        this.active = false;
        this.$emit(EVENT_PICKER_HIDE);
      },
      changeHandle: function changeHandle(selectedVal, selectedIndex, selectedText) {
        if (selectedVal[0] !== this.value) {
          this.$emit(EVENT_INPUT, selectedVal[0]);
          this.$emit(EVENT_CHANGE, selectedVal[0], selectedIndex[0], selectedText[0]);
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-select",
    class: {
      'cube-select_active': _vm.active, 'cube-select_disabled': _vm.disabled
    },
    on: {
      "click": _vm.showPicker
    }
  }, [(_vm.selectedText) ? _c('span', {
    staticClass: "cube-select-text"
  }, [_vm._v(_vm._s(_vm.selectedText))]) : _c('span', {
    staticClass: "cube-select-placeholder"
  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _c('i', {
    staticClass: "cube-select-icon"
  })])
},staticRenderFns: []}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(194)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(196),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global._switch = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-switch';

  var EVENT_INPUT = 'input';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        checkboxValue: this.value
      };
    },

    watch: {
      value: function value(newVal) {
        this.checkboxValue = newVal;
      },
      checkboxValue: function checkboxValue(newVal) {
        this.$emit(EVENT_INPUT, newVal);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-switch"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.checkboxValue),
      expression: "checkboxValue"
    }],
    staticClass: "cube-switch-input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": Array.isArray(_vm.checkboxValue) ? _vm._i(_vm.checkboxValue, null) > -1 : (_vm.checkboxValue)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.checkboxValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.checkboxValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.checkboxValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.checkboxValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "cube-switch-ui"
  }), _vm._v(" "), _c('span', {
    staticClass: "cube-switch-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(198)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(199),
  /* template */
  __webpack_require__(200),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 198 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.textarea = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-textarea';
  var EVENT_INPUT = 'input';

  exports.default = {
    name: COMPONENT_NAME,
    data: function data() {
      return {
        textareaValue: this.value,
        expanded: false,
        isFocus: false
      };
    },

    props: {
      value: {
        type: String,
        default: ''
      },
      cols: Number,
      rows: Number,
      readonly: Boolean,
      wrap: String,
      required: Boolean,
      placeholder: {
        type: String,
        default: 'please type here...'
      },
      dirname: String,
      form: String,
      name: String,
      autofocus: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 60
      }
    },
    computed: {
      remain: function remain() {
        return this.maxlength - this.value.length;
      }
    },
    watch: {
      value: function value(newValue) {
        this.textareaValue = newValue;
      },
      textareaValue: function textareaValue(newValue) {
        this.$emit(EVENT_INPUT, newValue);
        if (!this.isFocus && this.expanded) {
          this.expanded = false;
        }
      }
    },
    methods: {
      handleFocus: function handleFocus(e) {
        this.$emit('focus', e);
        this.expanded = true;
        this.isFocus = true;
      },
      handleBlur: function handleBlur(e) {
        this.$emit('blur', e);
        if (this.textareaValue.length === 0) {
          this.expanded = false;
        }
        this.isFocus = false;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-textarea-wrapper",
    class: {
      'cube-textarea_expanded': _vm.expanded, 'cube-textarea_active': _vm.isFocus
    }
  }, [_c('textarea', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.textareaValue),
      expression: "textareaValue"
    }],
    staticClass: "cube-textarea",
    attrs: {
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.textareaValue)
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.textareaValue = $event.target.value
      }
    }
  }, 'textarea', _vm.$props, false)), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.expanded),
      expression: "expanded"
    }],
    staticClass: "cube-textarea-indicator"
  }, [_vm._v(_vm._s(_vm.remain))])])
},staticRenderFns: []}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(202)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(211),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(153), __webpack_require__(154), __webpack_require__(210), __webpack_require__(107)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./btn.vue'), require('./file.vue'), require('./ajax'), require('./util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.btn, global.file, global.ajax, global.util);
    global.upload = mod.exports;
  }
})(this, function (module, exports, _btn, _file, _ajax, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _btn2 = _interopRequireDefault(_btn);

  var _file2 = _interopRequireDefault(_file);

  var _ajax2 = _interopRequireDefault(_ajax);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-upload';
  var EVENT_INPUT = 'input';
  var EVENT_ADDED = 'files-added';
  var EVENT_SUBMITTED = 'file-submitted';
  var EVENT_REMOVED = 'file-removed';
  var EVENT_SUCCESS = 'file-success';
  var EVENT_ERROR = 'file-error';
  var EVENT_CLICK = 'file-click';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      action: {
        type: [String, Object],
        default: ''
      },
      max: {
        type: Number,
        default: 10
      },
      auto: {
        type: Boolean,
        default: true
      },
      simultaneousUploads: {
        type: Number,
        default: 1
      },
      processFile: {
        type: Function,
        default: function _default(file, cb) {
          cb(file);
        }
      }
    },
    data: function data() {
      return {
        files: this.value,
        paused: !this.auto
      };
    },

    computed: {
      actionOptions: function actionOptions() {
        var action = this.action;
        if (typeof action === 'string') {
          return action ? {
            target: action
          } : null;
        } else {
          return action;
        }
      },
      isShowBtn: function isShowBtn() {
        return this.files.length < this.max;
      }
    },
    watch: {
      files: function files(newFiles) {
        this.$emit(EVENT_INPUT, newFiles);
      }
    },
    methods: {
      addFiles: function addFiles(files) {
        var _this = this;

        this.$emit(EVENT_ADDED, files);
        var filesLen = this.files.length;
        var newFiles = [];
        var maxLen = this.max - filesLen;
        var i = 0;
        var file = files[i];
        while (newFiles.length < maxLen && file) {
          if (!file.ignore) {
            newFiles.push(file);
            this.files.push((0, _util.newFile)());
          }
          file = files[++i];
        }
        (0, _util.processFiles)(newFiles, this.processFile, function (file, index) {
          _this.$set(_this.files, filesLen + index, file);
          _this.$emit(EVENT_SUBMITTED, file);
        }, function () {
          _this.$nextTick(function () {
            _this.upload();
          });
        });
      },
      removeFile: function removeFile(file) {
        this.$emit(EVENT_REMOVED, file);
        file._xhr && file._xhr.abort();
        if (file.url) {
          _util.URL.revokeObjectURL(file.url);
        }
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.upload();
      },
      fileClick: function fileClick(file) {
        this.$emit(EVENT_CLICK, file);
      },
      upload: function upload(retry) {
        var _this2 = this;

        var options = this.actionOptions;
        if (this.paused || !options) {
          return;
        }
        var len = this.files.length;
        var uploadingCount = 0;
        var i = 0;

        var _loop = function _loop() {
          var file = _this2.files[i];
          var status = file.status;
          if (status === _util.STATUS_READY || retry && status === _util.STATUS_ERROR && file._retryId !== _this2.retryId) {
            (0, _ajax2.default)(file, options, function (file) {
              if (status === _util.STATUS_ERROR) {
                file._retryId = _this2.retryId;
              }
              _this2.$emit(file.status === _util.STATUS_SUCCESS ? EVENT_SUCCESS : EVENT_ERROR, file);
              _this2.upload(retry);
            });
            uploadingCount++;
          } else if (status === _util.STATUS_UPLOADING) {
            uploadingCount++;
          }
          i++;
        };

        while (i < len && uploadingCount < this.simultaneousUploads) {
          _loop();
        }
      },
      start: function start() {
        this.paused = false;
        this.upload();
      },
      pause: function pause() {
        this.paused = true;
        this.files.forEach(function (file) {
          if (file.status === _util.STATUS_UPLOADING) {
            file._xhr.abort();
            file.status = _util.STATUS_READY;
          }
        });
      },
      retry: function retry() {
        this.retryId = Date.now();
        this.paused = false;
        this.upload(true);
      }
    },
    components: {
      UploadBtn: _btn2.default,
      UploadFile: _file2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 204 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.btn = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-upload-btn';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      multiple: {
        type: Boolean,
        default: true
      },
      accept: {
        type: String,
        default: 'image/*'
      }
    },
    methods: {
      changeHandler: function changeHandler(e) {
        var fileEle = e.currentTarget;
        var files = fileEle.files;
        if (files) {
          this.$parent.addFiles(files);
          fileEle.value = null;
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-upload-btn"
  }, [_vm._t("default", [_vm._m(0)]), _vm._v(" "), _c('input', {
    staticClass: "cube-upload-input",
    attrs: {
      "type": "file",
      "multiple": _vm.multiple,
      "accept": _vm.accept
    },
    on: {
      "change": _vm.changeHandler
    }
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-upload-btn-def"
  }, [_c('i')])
}]}

/***/ }),
/* 207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(107)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.util);
    global.file = mod.exports;
  }
})(this, function (module, exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-upload-file';
  var STATUS_CLASS_MAP = {
    success: 'cubeic-right',
    error: 'cubeic-warn'
  };
  var EVENT_CLICK = 'click';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      file: {
        type: Object,
        required: true
      }
    },
    computed: {
      fileStatusCls: function fileStatusCls() {
        var file = this.file;
        var status = file.status;
        if (file.progress >= 0.01 || status === _util.STATUS_SUCCESS || status === _util.STATUS_ERROR) {
          return 'cube-upload-file_stat';
        }
      },
      fileStyle: function fileStyle() {
        var url = this.file.url || this.file.base64;
        if (!url) {
          return;
        }
        return {
          'background-image': 'url("' + url + '")'
        };
      },
      statusCls: function statusCls() {
        var status = this.file.status;
        return STATUS_CLASS_MAP[status];
      },
      fileProgress: function fileProgress() {
        if (this.statusCls) {
          return '100%';
        }
        var p = Math.min(Math.floor(this.file.progress * 100), 99);
        return p + '%';
      }
    },
    methods: {
      clickHandler: function clickHandler() {
        this.$emit(EVENT_CLICK, this.file);
      },
      removeFile: function removeFile() {
        this.$parent.removeFile(this.file);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-upload-file",
    on: {
      "click": _vm.clickHandler
    }
  }, [_vm._t("default", [_c('div', {
    staticClass: "cube-upload-file-def",
    style: (_vm.fileStyle)
  }, [_c('i', {
    staticClass: "cubeic-wrong",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.removeFile($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "cube-upload-file-state",
    class: _vm.fileStatusCls
  }, [_c('i', {
    staticClass: "cube-upload-file-status",
    class: _vm.statusCls
  }), _vm._v(" "), _c('span', {
    staticClass: "cube-upload-file-progress"
  }, [_vm._v(_vm._s(_vm.fileProgress))])])])])], 2)
},staticRenderFns: []}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(88), __webpack_require__(107)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/keys'), require('./util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global.util);
    global.ajax = mod.exports;
  }
})(this, function (module, exports, _keys, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ajaxUpload;

  var _keys2 = _interopRequireDefault(_keys);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ajaxUpload(file, options, changeHandler) {
    var target = options.target,
        _options$headers = options.headers,
        headers = _options$headers === undefined ? {} : _options$headers,
        _options$data = options.data,
        data = _options$data === undefined ? {} : _options$data,
        _options$fileName = options.fileName,
        fileName = _options$fileName === undefined ? 'file' : _options$fileName,
        withCredentials = options.withCredentials,
        timeout = options.timeout,
        _options$prop = options.prop,
        prop = _options$prop === undefined ? 'file' : _options$prop,
        _options$progressInte = options.progressInterval,
        progressInterval = _options$progressInte === undefined ? 100 : _options$progressInte;


    file.progress = 0;
    file.status = _util.STATUS_UPLOADING;

    var xhr = new window.XMLHttpRequest();
    file._xhr = xhr;
    var progressTid = 0;
    if (xhr.upload) {
      var lastProgressTime = Date.now();
      xhr.upload.onprogress = function (e) {
        if (e.total > 0) {
          if (progressTid) {
            clearTimeout(progressTid);
            var now = Date.now();
            var diff = now - lastProgressTime;
            if (diff >= progressInterval) {
              computed();
            } else {
              progressTid = setTimeout(computed, diff);
            }
          } else {
            computed();
            progressTid = 1;
          }
        }
        function computed() {
          file.progress = e.loaded / e.total;
          lastProgressTime = Date.now();
        }
      };
    }

    var formData = new window.FormData();
    (0, _keys2.default)(data).forEach(function (key) {
      formData.append(key, data[key]);
    });
    formData.append(fileName, file[prop]);

    xhr.onload = function () {
      if (xhr.status < 200 || xhr.status >= 300) {
        setStatus(_util.STATUS_ERROR);
        return;
      }
      var response = xhr.responseText || xhr.response;
      try {
        response = JSON.parse(response);
      } catch (e) {}
      file.response = response;
      file.responseHeaders = xhr.getAllResponseHeaders();
      setStatus(_util.STATUS_SUCCESS);
    };
    xhr.onerror = function () {
      setStatus(_util.STATUS_ERROR);
    };
    xhr.ontimeout = function () {
      setStatus(_util.STATUS_ERROR);
    };

    xhr.open('POST', target, true);
    if (withCredentials) {
      xhr.withCredentials = true;
    }
    (0, _keys2.default)(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    if (timeout > 0) {
      xhr.timeout = timeout;
    }

    xhr.send(formData);
    function setStatus(status) {
      clearTimeout(progressTid);
      progressTid = 0;
      file.progress = 1;
      file.status = status;
      changeHandler && changeHandler(file);
    }
  }
  module.exports = exports['default'];
});

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-upload"
  }, [_vm._t("default", [_c('div', {
    staticClass: "cube-upload-def clear-fix"
  }, [_vm._l((_vm.files), function(file, i) {
    return _c('upload-file', {
      key: i,
      attrs: {
        "file": file
      },
      on: {
        "click": _vm.fileClick
      }
    })
  }), _vm._v(" "), _c('upload-btn', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowBtn),
      expression: "isShowBtn"
    }]
  })], 2)])], 2)
},staticRenderFns: []}

/***/ }),
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(259)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(260),
  /* template */
  __webpack_require__(270),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(261)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(262),
  /* template */
  __webpack_require__(269),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(256), __webpack_require__(215), __webpack_require__(216)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/form/form.vue'), require('../../components/form/form-group.vue'), require('../../components/form/form-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.form, global.formGroup, global.formItem);
    global.index = mod.exports;
  }
})(this, function (module, exports, _form, _formGroup, _formItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _form2 = _interopRequireDefault(_form);

  var _formGroup2 = _interopRequireDefault(_formGroup);

  var _formItem2 = _interopRequireDefault(_formItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _form2.default.install = function (Vue) {
    Vue.component(_form2.default.name, _form2.default);
    Vue.component(_formGroup2.default.name, _formGroup2.default);
    Vue.component(_formItem2.default.name, _formItem2.default);
  };

  _form2.default.Group = _formGroup2.default;
  _form2.default.Item = _formItem2.default;

  exports.default = _form2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(257)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(258),
  /* template */
  __webpack_require__(271),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 257 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(29), __webpack_require__(215)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('./form-group.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.formGroup);
    global.form = mod.exports;
  }
})(this, function (module, exports, _assign, _formGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _formGroup2 = _interopRequireDefault(_formGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-form';
  var LAYOUTS = {
    STANDARD: 'standard',
    CLASSIC: 'classic',
    FRESH: 'fresh'
  };
  var EVENT_SUBMIT = 'submit';
  var EVENT_RESET = 'reset';
  var EVENT_VALIDATE = 'validate';
  var EVENT_VALID = 'valid';
  var EVENT_INVALID = 'invalid';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      action: String,
      model: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      schema: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      options: {
        type: Object,
        default: function _default() {
          return {
            scrollToInvalidField: false,
            layout: LAYOUTS.STANDARD
          };
        }
      },
      immediateValidate: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        validatedCount: 0,
        dirty: false,
        valid: undefined,
        firstInvalidField: null,
        firstInvalidFieldIndex: -1
      };
    },

    computed: {
      groups: function groups() {
        var schema = this.schema;
        var groups = schema.groups || [];
        if (schema.fields) {
          groups.unshift({
            fields: schema.fields
          });
        }
        return groups;
      },
      invalid: function invalid() {
        var valid = this.valid;
        return valid === undefined ? valid : !valid;
      },
      formClass: function formClass() {
        var invalid = this.invalid;
        var valid = this.valid;
        var options = this.options;
        var layout = options && options.layout || LAYOUTS.STANDARD;
        return {
          'cube-form_standard': layout === LAYOUTS.STANDARD,
          'cube-form_groups': this.groups.length > 1,
          'cube-form_valid': valid === true,
          'cube-form_invalid': invalid,
          'cube-form_classic': layout === LAYOUTS.CLASSIC,
          'cube-form_fresh': layout === LAYOUTS.FRESH
        };
      }
    },
    watch: {
      validatedCount: function validatedCount() {
        this.$emit(EVENT_VALIDATE, {
          validity: this.validity,
          valid: this.valid,
          invalid: this.invalid,
          dirty: this.dirty,
          firstInvalidFieldIndex: this.firstInvalidFieldIndex
        });
      }
    },
    beforeCreate: function beforeCreate() {
      this.form = this;
      this.fields = [];
      this.validity = {};
    },
    mounted: function mounted() {
      if (this.immediateValidate) {
        this.validate();
      }
    },

    methods: {
      submit: function submit() {
        this.$refs.form.submit();
      },
      reset: function reset() {
        this.$refs.form.reset();
      },
      submitHandler: function submitHandler(e) {
        var submitResult = this._submit();
        if (submitResult) {
          this.$emit(EVENT_VALID, this.validity);
          this.$emit(EVENT_SUBMIT, e, this.model);
        } else {
          e.preventDefault();
          this.$emit(EVENT_INVALID, this.validity);
        }
      },
      resetHandler: function resetHandler(e) {
        this._reset();
        this.$emit(EVENT_RESET, e);
      },
      _submit: function _submit() {
        this.validate();
        if (this.invalid) {
          if (this.options.scrollToInvalidField && this.firstInvalidField) {
            this.firstInvalidField.$el.scrollIntoView();
          }
          return false;
        }
        return true;
      },
      _reset: function _reset() {
        this.fields.forEach(function (fieldComponent) {
          fieldComponent.reset();
        });
        this.setValidity();
      },
      validate: function validate() {
        this.fields.forEach(function (fieldComponent) {
          fieldComponent.validate();
        });
        return this.valid;
      },
      updateValidity: function updateValidity(modelKey, valid, result, dirty) {
        var curResult = this.validity[modelKey];
        if (curResult && curResult.valid === valid && curResult.result === result && curResult.dirty === dirty) {
          return;
        }
        this.setValidity(modelKey, {
          valid: valid,
          result: result,
          dirty: dirty
        });
      },
      setValidity: function setValidity(key, val) {
        var validity = {};
        if (key) {
          (0, _assign2.default)(validity, this.validity);
          if (val === undefined) {
            delete validity[key];
          } else {
            validity[key] = val;
          }
        }

        var dirty = false;
        var invalid = false;
        var valid = true;
        var firstInvalidFieldKey = '';
        this.fields.forEach(function (fieldComponent) {
          var modelKey = fieldComponent.fieldValue.modelKey;
          if (modelKey) {
            var retVal = validity[modelKey];
            if (retVal) {
              if (retVal.dirty) {
                dirty = true;
              }
              if (retVal.valid === false) {
                valid = false;
              } else if (valid && !retVal.valid) {
                valid = retVal.valid;
              }

              if (!invalid && retVal.valid === false) {
                invalid = true;
                firstInvalidFieldKey = modelKey;
              }
            } else if (fieldComponent.hasRules) {
              if (valid) {
                valid = undefined;
              }
              validity[modelKey] = {
                valid: undefined,
                result: {},
                dirty: false
              };
            }
          }
        });
        this.validity = validity;
        this.dirty = dirty;
        this.valid = valid;
        this.setFirstInvalid(firstInvalidFieldKey);
        this.validatedCount++;
      },
      setFirstInvalid: function setFirstInvalid(key) {
        var _this = this;

        if (!key) {
          this.firstInvalidField = null;
          this.firstInvalidFieldIndex = -1;
          return;
        }
        this.fields.some(function (fieldComponent, index) {
          if (fieldComponent.fieldValue.modelKey === key) {
            _this.firstInvalidField = fieldComponent;
            _this.firstInvalidFieldIndex = index;
            return true;
          }
        });
      },
      addField: function addField(fieldComponent) {
        this.fields.push(fieldComponent);
      },
      destroyField: function destroyField(fieldComponent) {
        var i = this.fields.indexOf(fieldComponent);
        this.fields.splice(i, 1);
        this.setValidity(fieldComponent.fieldValue.modelKey);
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.form = null;
      this.firstInvalidField = null;
    },

    components: {
      CubeFormGroup: _formGroup2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 259 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(216)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./form-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.formItem);
    global.formGroup = mod.exports;
  }
})(this, function (module, exports, _formItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _formItem2 = _interopRequireDefault(_formItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-form-group';
  exports.default = {
    name: COMPONENT_NAME,
    props: {
      legend: {
        type: String,
        default: ''
      },
      fields: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    beforeCreate: function beforeCreate() {
      this.form = this.$parent.form;
    },
    beforeDestroy: function beforeDestroy() {
      this.form = null;
    },

    components: {
      CubeFormItem: _formItem2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 261 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(88), __webpack_require__(263), __webpack_require__(78), __webpack_require__(163), __webpack_require__(267), __webpack_require__(268)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/keys'), require('./fields/index'), require('../../common/helpers/util'), require('../validator/validator.vue'), require('./fields/reset'), require('./components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global.index, global.util, global.validator, global.reset, global.components);
    global.formItem = mod.exports;
  }
})(this, function (module, exports, _keys, _index, _util, _validator, _reset, _components) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _keys2 = _interopRequireDefault(_keys);

  var _validator2 = _interopRequireDefault(_validator);

  var _components2 = _interopRequireDefault(_components);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _components2.default.CubeValidator = _validator2.default;

  var COMPONENT_NAME = 'cube-form-item';
  exports.default = {
    name: COMPONENT_NAME,
    props: {
      field: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    data: function data() {
      var modelKey = this.field.modelKey;
      return {
        validatorDisabled: false,
        isValid: undefined,
        modelValue: modelKey ? this.form.model[modelKey] : null
      };
    },

    computed: {
      fieldValue: function fieldValue() {
        return (0, _index.processField)(this.field);
      },
      hasRules: function hasRules() {
        return (0, _keys2.default)(this.fieldValue.rules || {}).length > 0;
      },
      isBtnField: function isBtnField() {
        return this.fieldValue.type === 'button';
      },
      itemClass: function itemClass() {
        var rules = this.fieldValue.rules;
        return {
          'cube-form-item_required': rules && rules.required,
          'cube-form-item_btn': this.isBtnField,
          'cube-form-item_valid': this.isValid,
          'cube-form-item_invalid': this.isValid === false
        };
      },
      modelVal: function modelVal() {
        return this.form.model[this.fieldValue.modelKey];
      },
      componentName: function componentName() {
        var fieldValue = this.fieldValue;
        var component = fieldValue.component;
        if (component) {
          return component;
        }
        var type = fieldValue.type;
        var cubeType = 'cube-' + type;
        if (_components2.default[cubeType]) {
          return cubeType;
        }
        return type;
      }
    },
    watch: {
      modelVal: function modelVal(newModel) {
        if (this.modelValue !== newModel) {
          this.modelValue = newModel;
        }
      },
      modelValue: function modelValue(newModel) {
        this.form.model[this.fieldValue.modelKey] = newModel;
      },
      isValid: function isValid(newValue) {
        if (this.validatorDisabled) {
          return;
        }
        this.updateValidity();
      }
    },
    beforeCreate: function beforeCreate() {
      this.form = this.$parent.form;
    },
    created: function created() {
      this.form.addField(this);
    },

    methods: {
      updateValidity: function updateValidity() {
        var validator = this.$refs.validator;
        if (validator) {
          this.form.updateValidity(this.fieldValue.modelKey, validator.valid, validator.result, validator.dirty);
        }
      },
      validate: function validate(skipValidate) {
        var validator = this.$refs.validator;
        validator && validator.validate();
        this.updateValidity();
      },
      reset: function reset() {
        var _this = this;

        var fieldValue = this.fieldValue;
        if (fieldValue.modelKey) {
          var defValue = (0, _reset.getResetValueByType)(fieldValue.type);
          this.validatorDisabled = true;
          (0, _util.resetTypeValue)(this, 'modelValue', defValue);
          this.$refs.validator && this.$refs.validator.reset();
          this.$nextTick(function () {
            _this.validatorDisabled = false;
          });
        }
      },
      msgClick: function msgClick() {
        this.$createToast && this.$createToast({
          type: 'warn',
          txt: this.$refs.validator.msg,
          time: 1000
        }).show();
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.form.destroyField(this);
      this.form = null;
    },

    components: _components2.default
  };
  module.exports = exports['default'];
});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(39), __webpack_require__(264)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/helpers/extends'), require('./types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.types);
    global.index = mod.exports;
  }
})(this, function (exports, _extends2, _types) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.processField = undefined;

  var _extends3 = _interopRequireDefault(_extends2);

  var _types2 = _interopRequireDefault(_types);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function processField(field) {
    var _field = (0, _extends3.default)({}, field);
    (0, _types2.default)(_field);
    return _field;
  }

  exports.processField = processField;
});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(265), __webpack_require__(266)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./validate'), require('./props'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.validate, global.props);
    global.types = mod.exports;
  }
})(this, function (module, exports, _validate, _props) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = processTypes;


  var typesMap = {
    submit: function submit(field) {
      (0, _props.toButtonHandler)(field, 'submit');
    },
    reset: function reset(field) {
      (0, _props.toButtonHandler)(field, 'reset');
    },
    checkbox: function checkbox(field) {
      (0, _validate.boolRequiredHandler)(field);
    },
    switch: function _switch(field) {
      (0, _validate.boolRequiredHandler)(field);
    },
    rate: function rate(field) {
      (0, _validate.numberGT0RequiredHandler)(field);
    }
  };
  function processTypes(field) {
    var typeFn = typesMap[field.type];
    if (typeFn) {
      typeFn(field);
    }
  }
  module.exports = exports['default'];
});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.validate = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var handleValidateRule = function handleValidateRule(field, type, custom) {
    var ruleValue = field.rules && field.rules[type];
    if (type !== 'custom' && ruleValue && typeof ruleValue !== 'function') {
      field.rules[type] = custom;
    }
  };
  var createHandler = function createHandler(type) {
    return function (field, custom) {
      return handleValidateRule(field, type, custom);
    };
  };

  var handleRequired = createHandler('required');
  var boolRequiredHandler = function boolRequiredHandler(field) {
    return handleRequired(field, function (val) {
      return val !== false;
    });
  };
  var numberGT0RequiredHandler = function numberGT0RequiredHandler(field) {
    return handleRequired(field, function (val) {
      return val > 0;
    });
  };

  exports.boolRequiredHandler = boolRequiredHandler;
  exports.numberGT0RequiredHandler = numberGT0RequiredHandler;
});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.props = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var toButtonHandler = function toButtonHandler(field, type) {
    field.type = 'button';
    if (!field.props) {
      field.props = {};
    }
    field.props.type = type;
  };

  exports.toButtonHandler = toButtonHandler;
});

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.reset = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var typesResetMap = {
    checkbox: function checkbox() {
      return false;
    },
    select: function select() {
      return null;
    }
  };
  function getResetValueByType(type) {
    var resetHandler = typesResetMap[type];
    return resetHandler && resetHandler();
  }

  exports.getResetValueByType = getResetValueByType;
});

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(155), __webpack_require__(103), __webpack_require__(159), __webpack_require__(171), __webpack_require__(150), __webpack_require__(175), __webpack_require__(182), __webpack_require__(189), __webpack_require__(193), __webpack_require__(197), __webpack_require__(201)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../button/button.vue'), require('../checkbox/checkbox.vue'), require('../checkbox-group/checkbox-group.vue'), require('../input/input.vue'), require('../radio/radio.vue'), require('../radio/radio-group.vue'), require('../rate/rate.vue'), require('../select/select.vue'), require('../switch/switch.vue'), require('../textarea/textarea.vue'), require('../upload/upload.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.button, global.checkbox, global.checkboxGroup, global.input, global.radio, global.radioGroup, global.rate, global.select, global._switch, global.textarea, global.upload);
    global.components = mod.exports;
  }
})(this, function (module, exports, _button, _checkbox, _checkboxGroup, _input, _radio, _radioGroup, _rate, _select, _switch, _textarea, _upload) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _button2 = _interopRequireDefault(_button);

  var _checkbox2 = _interopRequireDefault(_checkbox);

  var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

  var _input2 = _interopRequireDefault(_input);

  var _radio2 = _interopRequireDefault(_radio);

  var _radioGroup2 = _interopRequireDefault(_radioGroup);

  var _rate2 = _interopRequireDefault(_rate);

  var _select2 = _interopRequireDefault(_select);

  var _switch2 = _interopRequireDefault(_switch);

  var _textarea2 = _interopRequireDefault(_textarea);

  var _upload2 = _interopRequireDefault(_upload);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var allComponents = [_button2.default, _checkbox2.default, _checkboxGroup2.default, _input2.default, _radio2.default, _radioGroup2.default, _rate2.default, _select2.default, _switch2.default, _textarea2.default, _upload2.default];

  var components = {};
  allComponents.forEach(function (Component) {
    components[Component.name] = Component;
  });

  exports.default = components;
  module.exports = exports['default'];
});

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-form-item border-bottom-1px",
    class: _vm.itemClass
  }, [(!_vm.isBtnField) ? [_vm._t("label", [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.fieldValue.label),
      expression: "fieldValue.label"
    }],
    staticClass: "cube-form-label"
  }, [_c('span', [_vm._v(_vm._s(_vm.fieldValue.label))])])]), _vm._v(" "), (_vm.hasRules) ? _c('cube-validator', {
    ref: "validator",
    staticClass: "cube-form-field",
    attrs: {
      "disabled": _vm.validatorDisabled,
      "model": _vm.modelValue,
      "rules": _vm.fieldValue.rules,
      "messages": _vm.fieldValue.messages
    },
    on: {
      "msg-click": _vm.msgClick
    },
    model: {
      value: (_vm.isValid),
      callback: function($$v) {
        _vm.isValid = $$v
      },
      expression: "isValid"
    }
  }, [_vm._t("default", [_c(_vm.componentName, _vm._b({
    tag: "component",
    model: {
      value: (_vm.modelValue),
      callback: function($$v) {
        _vm.modelValue = $$v
      },
      expression: "modelValue"
    }
  }, 'component', _vm.fieldValue.props, false))])], 2) : _c('div', {
    staticClass: "cube-form-field"
  }, [_vm._t("default", [_c(_vm.componentName, _vm._b({
    tag: "component",
    model: {
      value: (_vm.modelValue),
      callback: function($$v) {
        _vm.modelValue = $$v
      },
      expression: "modelValue"
    }
  }, 'component', _vm.fieldValue.props, false))])], 2)] : _c('cube-button', _vm._b({}, 'cube-button', _vm.fieldValue.props, false), [_vm._v(_vm._s(_vm.fieldValue.label))])], 2)
},staticRenderFns: []}

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-form-group"
  }, [_c('p', {
    staticClass: "cube-form-group-legend"
  }, [_vm._v(_vm._s(_vm.legend))]), _vm._v(" "), _c('div', {
    staticClass: "cube-form-group-content"
  }, [_vm._t("default", _vm._l((_vm.fields), function(field, index) {
    return _c('cube-form-item', {
      key: index,
      attrs: {
        "field": field
      }
    })
  }))], 2)])
},staticRenderFns: []}

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    ref: "form",
    staticClass: "cube-form",
    class: _vm.formClass,
    attrs: {
      "action": _vm.action
    },
    on: {
      "submit": _vm.submitHandler,
      "reset": _vm.resetHandler
    }
  }, [_vm._t("default", _vm._l((_vm.groups), function(group, index) {
    return _c('cube-form-group', {
      key: index,
      attrs: {
        "fields": group.fields,
        "legend": group.legend
      }
    })
  }))], 2)
},staticRenderFns: []}

/***/ })
/******/ ]);