(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dialog"] = factory();
	else
		root["cube"] = root["cube"] || {}, root["cube"]["dialog"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 293);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(17);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(31);
var toPrimitive = __webpack_require__(26);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(14);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(29);
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
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(17);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(30);
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
/* 30 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
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
    global.debug = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var warn = exports.warn = function warn(msg, componentName) {
    if (process.env.NODE_ENV !== 'production') {
      var component = componentName ? '<' + componentName + '> ' : '';
      console.error('[Cube warn]: ' + component + msg);
    }
  };

  var tip = exports.tip = function tip(msg, componentName) {
    if (process.env.NODE_ENV !== 'production') {
      var component = componentName ? '<' + componentName + '> ' : '';
      console.warn('[Cube tip]: ' + component + msg);
    }
  };
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(46)(false);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');

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
/* 34 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(40);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(52);
var setToStringTag = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(54);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(51)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(37)(String, 'String', function (iterated) {
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(64);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(53);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(48).appendChild(iframe);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(42);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(13);
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(61), __webpack_require__(39), __webpack_require__(68), __webpack_require__(49)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/keys'), require('babel-runtime/helpers/defineProperty'), require('babel-runtime/helpers/typeof'), require('../lang/string'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.keys, global.defineProperty, global._typeof, global.string);
    global.util = mod.exports;
  }
})(this, function (exports, _keys, _defineProperty2, _typeof2, _string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isNumber = exports.isObject = exports.isString = exports.isArray = exports.isFunc = exports.isUndef = exports.parsePath = exports.processComponentName = exports.debounce = exports.cb2PromiseWithResolve = exports.parallel = exports.resetTypeValue = exports.createAddAPI = exports.deepAssign = exports.findIndex = undefined;

  var _keys2 = _interopRequireDefault(_keys);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _typeof3 = _interopRequireDefault(_typeof2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function findIndex(ary, fn) {
    if (ary.findIndex) {
      return ary.findIndex(fn);
    }

    var index = -1;

    ary.some(function (item, i, ary) {
      var ret = fn.call(this, item, i, ary);
      if (ret) {
        index = i;
        return ret;
      }
    });

    return index;
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

  function judgeTypeFnCreator(type) {
    var toString = Object.prototype.toString;
    return function isType(o) {
      return toString.call(o) === '[object ' + type + ']';
    };
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

  function parallel(tasks, cb) {
    var doneCount = 0;
    var results = [];
    var tasksLen = tasks.length;
    if (!tasksLen) {
      return cb(results);
    }
    tasks.forEach(function (task, i) {
      task(function (ret) {
        doneCount += 1;
        results[i] = ret;
        if (doneCount === tasksLen) {
          cb(results);
        }
      });
    });
  }

  function cb2PromiseWithResolve(cb) {
    var promise = void 0;
    if (typeof window.Promise !== 'undefined') {
      var _cb = cb;
      promise = new window.Promise(function (resolve) {
        cb = function cb(data) {
          _cb && _cb(data);
          resolve(data);
        };
      });
      promise.resolve = cb;
    }
    return promise;
  }

  function debounce(func, wait, immediate, initValue) {
    var timeout = void 0;
    var result = initValue;

    var later = function later(context, args) {
      timeout = null;
      if (args) {
        result = func.apply(context, args);
      }
    };

    var debounced = function debounced() {
      var _this = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (timeout) {
        clearTimeout(timeout);
      }
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(this, args);
        }
      } else {
        timeout = setTimeout(function () {
          later(_this, args);
        }, wait);
      }

      return result;
    };

    debounced.cancel = function () {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  }

  function processComponentName(Component) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === undefined ? '' : _ref$prefix,
        _ref$firstUpperCase = _ref.firstUpperCase,
        firstUpperCase = _ref$firstUpperCase === undefined ? false : _ref$firstUpperCase;

    var name = Component.name;
    var pureName = name.replace(/^cube-/i, '');
    var camelizeName = '' + (0, _string.camelize)('' + prefix + pureName);

    if (firstUpperCase) {
      camelizeName = camelizeName.charAt(0).toUpperCase() + camelizeName.slice(1);
    }
    return camelizeName;
  }

  function parsePath(obj) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var segments = path.split('.');
    var result = obj;
    for (var i = 0; i < segments.length; i++) {
      var key = segments[i];

      if (isUndef(result[key])) {
        result = '';
        break;
      } else {
        result = result[key];
      }
    }
    return result;
  }

  var isFunc = judgeTypeFnCreator('Function');
  var isUndef = judgeTypeFnCreator('Undefined');
  var isArray = judgeTypeFnCreator('Array');
  var isString = judgeTypeFnCreator('String');
  var isObject = judgeTypeFnCreator('Object');
  var isNumber = judgeTypeFnCreator('Number');

  exports.findIndex = findIndex;
  exports.deepAssign = deepAssign;
  exports.createAddAPI = createAddAPI;
  exports.resetTypeValue = resetTypeValue;
  exports.parallel = parallel;
  exports.cb2PromiseWithResolve = cb2PromiseWithResolve;
  exports.debounce = debounce;
  exports.processComponentName = processComponentName;
  exports.parsePath = parsePath;
  exports.isUndef = isUndef;
  exports.isFunc = isFunc;
  exports.isArray = isArray;
  exports.isString = isString;
  exports.isObject = isObject;
  exports.isNumber = isNumber;
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(47);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 49 */
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
    global.string = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.camelize = camelize;
  exports.kebab = kebab;
  var camelizeRE = /-(\w)/g;
  function camelize(str) {
    str = String(str);
    return str.replace(camelizeRE, function (m, c) {
      return c ? c.toUpperCase() : '';
    });
  }

  function kebab(str) {
    str = String(str);
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
});

/***/ }),
/* 50 */
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
    global.visibility = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EVENT_TOGGLE = 'toggle';

  exports.default = {
    model: {
      prop: 'visible',
      event: EVENT_TOGGLE
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        isVisible: false
      };
    },

    watch: {
      isVisible: function isVisible(newVal) {
        this.$emit(EVENT_TOGGLE, newVal);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.$watch('visible', function (newVal, oldVal) {
        if (newVal) {
          _this.show();
        } else if (oldVal && !_this._createAPI_reuse) {
          _this.hide();
        }
      }, {
        immediate: true
      });
    },

    methods: {
      show: function show() {
        this.isVisible = true;
      },
      hide: function hide() {
        this.isVisible = false;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var defined = __webpack_require__(18);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(41);
var descriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(25);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(15);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(27);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(56);
var step = __webpack_require__(57);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(37)(Array, 'Array', function (iterated, kind) {
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
/* 56 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(33);
var hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 59 */
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
    global.popup = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    props: {
      zIndex: {
        type: Number,
        default: 100
      },
      maskClosable: {
        type: Boolean,
        default: false
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),
/* 60 */
/***/ (function(module, exports) {



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 62 */,
/* 63 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(39), __webpack_require__(104), __webpack_require__(32), __webpack_require__(45), __webpack_require__(91)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/defineProperty'), require('../../locale/lang/zh-CN'), require('../helpers/debug'), require('../helpers/util'), require('../lang/date'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.defineProperty, global.zhCN, global.debug, global.util, global.date);
    global.index = mod.exports;
  }
})(this, function (module, exports, _defineProperty2, _zhCN, _debug, _util, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _zhCN2 = _interopRequireDefault(_zhCN);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var proto = void 0;

  var DEFAULT_LANG = 'zh-CN';

  var locale = {
    name: 'locale',
    install: function install(Vue) {
      if (locale.installed) return;
      proto = Vue.prototype;
      Vue.util.defineReactive(proto, '$cubeLang', DEFAULT_LANG);
      proto['$cubeMessages'] = (0, _defineProperty3.default)({}, DEFAULT_LANG, _zhCN2.default);
      locale.installed = true;
    },
    use: function use(lang, messages) {
      proto['$cubeLang'] = lang;
      var cubeMessages = proto['$cubeMessages'];

      if (!(lang in cubeMessages)) {
        cubeMessages[[lang]] = messages;
      }
    },

    helpers: {
      toLocaleDateString: function toLocaleDateString(config, formatRules) {
        var compatibleConfig = (0, _util.isNumber)(config) ? config : config.replace(/-/g, '/');
        var date = new Date(compatibleConfig);

        if ((0, _util.isUndef)(formatRules)) return date.toDateString();
        return (0, _date.formatDate)(date, formatRules);
      }
    },
    addHelper: function addHelper(fnName, fn) {
      if (fnName in locale.helpers) {
        (0, _debug.warn)(fnName + ' has already been registered on helpers function, please change another name');
        return;
      }
      locale.helpers[fnName] = fn;
    }
  };

  exports.default = locale;
  module.exports = exports['default'];
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(79);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(81);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(67), __webpack_require__(45), __webpack_require__(32)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../locale'), require('../helpers/util'), require('../helpers/debug'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.locale, global.util, global.debug);
    global.locale = mod.exports;
  }
})(this, function (module, exports, _locale, _util, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _locale2 = _interopRequireDefault(_locale);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TRANSLATION_ABSENT = 'Translation is not registered correctly, ' + 'you can call Locale.use() to install it.';

  exports.default = {
    computed: {
      $t: function $t() {
        var lang = this.$cubeLang;
        var messages = this.$cubeMessages[lang];
        if ((0, _util.isUndef)(messages)) {
          (0, _debug.warn)(TRANSLATION_ABSENT);
          return '';
        }
        return function (path) {
          return (0, _util.parsePath)(messages, path);
        };
      }
    },
    beforeCreate: function beforeCreate() {
      _locale2.default.install(this.$root.constructor);
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(27);
var $keys = __webpack_require__(15);

__webpack_require__(76)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(0);
var fails = __webpack_require__(12);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(98)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('vue-create-api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.vueCreateApi);
    global.createApi = mod.exports;
  }
})(this, function (module, exports, _vueCreateApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createAPI;

  var _vueCreateApi2 = _interopRequireDefault(_vueCreateApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function createAPI(Vue, Component, events, single) {
    Vue.use(_vueCreateApi2.default, { componentPrefix: 'cube-' });
    var api = Vue.createAPI(Component, events, single);
    return api;
  }
  module.exports = exports['default'];
});

/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(44);
module.exports = __webpack_require__(42).f('iterator');


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
__webpack_require__(60);
__webpack_require__(89);
__webpack_require__(90);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(3);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(40);
var META = __webpack_require__(84).KEY;
var $fails = __webpack_require__(12);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(25);
var uid = __webpack_require__(17);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(42);
var wksDefine = __webpack_require__(43);
var enumKeys = __webpack_require__(85);
var isArray = __webpack_require__(86);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(26);
var createDesc = __webpack_require__(14);
var _create = __webpack_require__(41);
var gOPNExt = __webpack_require__(87);
var $GOPD = __webpack_require__(88);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(15);
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
  __webpack_require__(58).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(34).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(17)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(5);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(12)(function () {
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(15);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(24);
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10);
var gOPN = __webpack_require__(58).f;
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(14);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(26);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(31);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('observable');


/***/ }),
/* 91 */
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
    global.date = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DAY_TIMESTAMP = 60 * 60 * 24 * 1000;
  var HOUR_TIMESTAMP = 60 * 60 * 1000;
  var MINUTE_TIMESTAMP = 60 * 1000;

  function formatType(type, format, value, regExpAttributes) {
    var regExpMap = {
      year: '(Y+)',
      month: '(M+)',
      date: '(D+)',
      hour: '(h+)',
      minute: '(m+)',
      second: '(s+)',
      quarter: '(q+)',
      millisecond: '(S)'
    };

    if (new RegExp(regExpMap[type], regExpAttributes).test(format)) {
      var replaceStr = type === 'year' ? value.toString().substr(4 - RegExp.$1.length) : RegExp.$1.length === 1 ? value : pad(value);
      format = format.replace(RegExp.$1, replaceStr);
    }

    return format;
  }

  function pad(value) {
    return ('00' + value).substr(('' + value).length);
  }

  function formatDate(date, format) {
    var map = {
      year: {
        value: date.getFullYear(),
        regExpAttributes: 'i'
      },
      month: {
        value: date.getMonth() + 1
      },
      date: {
        value: date.getDate(),
        regExpAttributes: 'i'
      },
      hour: {
        value: date.getHours(),
        regExpAttributes: 'i'
      },
      minute: {
        value: date.getMinutes()
      },
      second: {
        value: date.getSeconds()
      },
      quarter: {
        value: Math.floor((date.getMonth() + 3) / 3),
        regExpAttributes: 'i'
      },
      millisecond: {
        value: date.getMilliseconds()
      }
    };

    for (var key in map) {
      format = formatType(key, format, map[key].value, map[key].regExpAttributes);
    }

    return format;
  }

  function getZeroStamp(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return +new Date(year + '/' + month + '/' + day + ' 00:00:00');
  }

  function getDayDiff(date1, date2) {
    return Math.floor((getZeroStamp(date1) - getZeroStamp(date2)) / DAY_TIMESTAMP);
  }

  function getNow() {
    return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
  }

  function computeNatureMaxDay(month, year) {
    var natureMaxDay = 30;
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) > -1) {
      natureMaxDay = 31;
    } else {
      if (month === 2) {
        natureMaxDay = !year || !(year % 400) || !(year % 4) && year % 100 ? 29 : 28;
      }
    }

    return natureMaxDay;
  }

  exports.DAY_TIMESTAMP = DAY_TIMESTAMP;
  exports.HOUR_TIMESTAMP = HOUR_TIMESTAMP;
  exports.MINUTE_TIMESTAMP = MINUTE_TIMESTAMP;
  exports.pad = pad;
  exports.formatType = formatType;
  exports.formatDate = formatDate;
  exports.getZeroStamp = getZeroStamp;
  exports.getDayDiff = getDayDiff;
  exports.getNow = getNow;
  exports.computeNatureMaxDay = computeNatureMaxDay;
});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(94) });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(15);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(24);
var toObject = __webpack_require__(27);
var IObject = __webpack_require__(35);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function () {
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
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * vue-create-api v0.2.3
 * (c) 2019 ustbhuangyi
 * @license MIT
 */
var _extends = Object.assign || function (target) {
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

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return (str + '').replace(camelizeRE, function (m, c) {
    return c ? c.toUpperCase() : '';
  });
}

function escapeReg(str, delimiter) {
  return (str + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function isUndef(value) {
  return value === undefined;
}

function isStr(value) {
  return typeof value === 'string';
}

function isFunction(fn) {
  return typeof fn === 'function';
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vue-create-api error]: " + msg);
  }
}

function instantiateComponent(Vue, Component, data, renderFn, options) {
  var renderData = void 0;
  var childrenRenderFn = void 0;

  var instance = new Vue(_extends({}, options, {
    render: function render(createElement) {
      var children = childrenRenderFn && childrenRenderFn(createElement);
      if (children && !Array.isArray(children)) {
        children = [children];
      }

      return createElement(Component, _extends({}, renderData), children || []);
    },

    methods: {
      init: function init() {
        document.body.appendChild(this.$el);
      },
      destroy: function destroy() {
        this.$destroy();
        if (this.$el && this.$el.parentNode === document.body) {
          document.body.removeChild(this.$el);
        }
      }
    }
  }));
  instance.updateRenderData = function (data, render) {
    renderData = data;
    childrenRenderFn = render;
  };
  instance.updateRenderData(data, renderFn);
  instance.$mount();
  instance.init();
  var component = instance.$children[0];
  component.$updateProps = function (props) {
    _extends(renderData.props, props);
    instance.$forceUpdate();
  };
  return component;
}

function parseRenderData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  events = parseEvents(events);
  var props = _extends({}, data);
  var on = {};
  for (var name in events) {
    if (events.hasOwnProperty(name)) {
      var handlerName = events[name];
      if (props[handlerName]) {
        on[name] = props[handlerName];
        delete props[handlerName];
      }
    }
  }
  return {
    props: props,
    on: on
  };
}

function parseEvents(events) {
  var parsedEvents = {};
  events.forEach(function (name) {
    parsedEvents[name] = camelize('on-' + name);
  });
  return parsedEvents;
}

var eventBeforeDestroy = 'hook:beforeDestroy';

function apiCreator(Component) {
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var single = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var Vue = this;
  var singleMap = {};
  var beforeHooks = [];

  function createComponent(renderData, renderFn, options, single) {
    beforeHooks.forEach(function (before) {
      before(renderData, renderFn, single);
    });
    var ownerInsUid = options.parent ? options.parent._uid : -1;

    var _ref = singleMap[ownerInsUid] ? singleMap[ownerInsUid] : {},
        comp = _ref.comp,
        ins = _ref.ins;

    if (single && comp && ins) {
      ins.updateRenderData(renderData, renderFn);
      ins.$forceUpdate();
      return comp;
    }
    var component = instantiateComponent(Vue, Component, renderData, renderFn, options);
    var instance = component.$parent;
    var originRemove = component.remove;

    component.remove = function () {
      if (single) {
        if (!singleMap[ownerInsUid]) {
          return;
        }
        singleMap[ownerInsUid] = null;
      }
      originRemove && originRemove.apply(this, arguments);
      instance.destroy();
    };

    var originShow = component.show;
    component.show = function () {
      originShow && originShow.apply(this, arguments);
      return this;
    };

    var originHide = component.hide;
    component.hide = function () {
      originHide && originHide.apply(this, arguments);
      return this;
    };

    if (single) {
      singleMap[ownerInsUid] = {
        comp: component,
        ins: instance
      };
    }
    return component;
  }

  function processProps(ownerInstance, renderData, isInVueInstance, onChange) {
    var $props = renderData.props.$props;
    if ($props) {
      delete renderData.props.$props;

      var watchKeys = [];
      var watchPropKeys = [];
      Object.keys($props).forEach(function (key) {
        var propKey = $props[key];
        if (isStr(propKey) && propKey in ownerInstance) {
          // get instance value
          renderData.props[key] = ownerInstance[propKey];
          watchKeys.push(key);
          watchPropKeys.push(propKey);
        } else {
          renderData.props[key] = propKey;
        }
      });
      if (isInVueInstance) {
        var unwatchFn = ownerInstance.$watch(function () {
          var props = {};
          watchKeys.forEach(function (key, i) {
            props[key] = ownerInstance[watchPropKeys[i]];
          });
          return props;
        }, onChange);
        ownerInstance.__unwatchFns__.push(unwatchFn);
      }
    }
  }

  function processEvents(renderData, ownerInstance) {
    var $events = renderData.props.$events;
    if ($events) {
      delete renderData.props.$events;

      Object.keys($events).forEach(function (event) {
        var eventHandler = $events[event];
        if (typeof eventHandler === 'string') {
          eventHandler = ownerInstance[eventHandler];
        }
        renderData.on[event] = eventHandler;
      });
    }
  }

  function process$(renderData) {
    var props = renderData.props;
    Object.keys(props).forEach(function (prop) {
      if (prop.charAt(0) === '$') {
        renderData[prop.slice(1)] = props[prop];
        delete props[prop];
      }
    });
  }

  function cancelWatchProps(ownerInstance) {
    if (ownerInstance.__unwatchFns__) {
      ownerInstance.__unwatchFns__.forEach(function (unwatchFn) {
        unwatchFn();
      });
      ownerInstance.__unwatchFns__ = null;
    }
  }

  var api = {
    before: function before(hook) {
      beforeHooks.push(hook);
    },
    create: function create(config, renderFn, _single) {
      if (!isFunction(renderFn) && isUndef(_single)) {
        _single = renderFn;
        renderFn = null;
      }

      if (isUndef(_single)) {
        _single = single;
      }

      var ownerInstance = this;
      var isInVueInstance = !!ownerInstance.$on;
      var options = {};

      if (isInVueInstance) {
        // Set parent to store router i18n ...
        options.parent = ownerInstance;
        if (!ownerInstance.__unwatchFns__) {
          ownerInstance.__unwatchFns__ = [];
        }
      }

      var renderData = parseRenderData(config, events);

      var component = null;

      processProps(ownerInstance, renderData, isInVueInstance, function (newProps) {
        component && component.$updateProps(newProps);
      });
      processEvents(renderData, ownerInstance);
      process$(renderData);

      component = createComponent(renderData, renderFn, options, _single);

      if (isInVueInstance) {
        ownerInstance.$on(eventBeforeDestroy, beforeDestroy);
      }

      function beforeDestroy() {
        cancelWatchProps(ownerInstance);
        component.remove();
        component = null;
      }

      return component;
    }
  };

  return api;
}

function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$componentPre = options.componentPrefix,
      componentPrefix = _options$componentPre === undefined ? '' : _options$componentPre,
      _options$apiPrefix = options.apiPrefix,
      apiPrefix = _options$apiPrefix === undefined ? '$create-' : _options$apiPrefix;


  Vue.createAPI = function (Component, events, single) {
    if (isBoolean(events)) {
      single = events;
      events = [];
    }
    var api = apiCreator.call(this, Component, events, single);
    var createName = processComponentName(Component, {
      componentPrefix: componentPrefix,
      apiPrefix: apiPrefix
    });
    Vue.prototype[createName] = Component.$create = api.create;
    return api;
  };
}

function processComponentName(Component, options) {
  var componentPrefix = options.componentPrefix,
      apiPrefix = options.apiPrefix;

  var name = Component.name;
  assert(name, 'Component must have name while using create-api!');
  var prefixReg = new RegExp('^' + escapeReg(componentPrefix), 'i');
  var pureName = name.replace(prefixReg, '');
  var camelizeName = '' + camelize('' + apiPrefix + pureName);
  return camelizeName;
}

var index = {
  install: install,
  instantiateComponent: instantiateComponent,
  version: '0.2.3'
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(101)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(103),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(39), __webpack_require__(50), __webpack_require__(59)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/defineProperty'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.defineProperty, global.visibility, global.popup);
    global.popup = mod.exports;
  }
})(this, function (module, exports, _defineProperty2, _visibility, _popup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup2 = _interopRequireDefault(_popup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-popup';
  var EVENT_MASK_CLICK = 'mask-click';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup2.default],
    props: {
      type: {
        type: String,
        default: ''
      },
      mask: {
        type: Boolean,
        default: true
      },
      content: {
        type: String,
        default: ''
      },
      center: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: ''
      }
    },
    computed: {
      rootClass: function rootClass() {
        var cls = {
          'cube-popup_mask': this.mask
        };
        if (this.type) {
          cls['cube-' + this.type] = true;
        }
        return cls;
      },
      containerClass: function containerClass() {
        var center = this.center;
        var position = this.position;
        if (position) {
          return (0, _defineProperty3.default)({}, 'cube-popup-' + position, true);
        }
        if (center) {
          return {
            'cube-popup-center': true
          };
        }
      }
    },
    methods: {
      maskClick: function maskClick(e) {
        this.$emit(EVENT_MASK_CLICK, e);
        if (this.maskClosable) {
          this.hide();
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    staticClass: "cube-popup",
    class: _vm.rootClass,
    style: ({
      'z-index': _vm.zIndex
    })
  }, [_c('div', {
    staticClass: "cube-popup-mask",
    on: {
      "touchmove": function($event) {
        $event.preventDefault();
      },
      "click": _vm.maskClick
    }
  }, [_vm._t("mask")], 2), _vm._v(" "), _c('div', {
    staticClass: "cube-popup-container",
    class: _vm.containerClass,
    on: {
      "touchmove": function($event) {
        $event.preventDefault();
      }
    }
  }, [(_vm.$slots.default) ? _c('div', {
    staticClass: "cube-popup-content"
  }, [_vm._t("default")], 2) : _c('div', {
    staticClass: "cube-popup-content",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 104 */
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
    global.zhCN = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    cancel: '取消',
    confirm: '确认',
    ok: '确定',
    prev: '上一步',
    next: '下一步',
    selectText: '请选择',
    now: '现在',
    selectTime: '选择时间',
    today: '今日',
    formatDate: 'M月D日',
    hours: '点',
    minutes: '分',
    validator: {
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
        string: '至少输入 {{config}} 位字符',
        number: '不得小于 {{config}}',
        array: '请选择至少 {{config}} 项',
        date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之后的时间',
        email: '至少输入 {{config}} 位字符',
        tel: '至少输入 {{config}} 位字符',
        url: '至少输入 {{config}} 位字符'
      },
      max: {
        string: '请勿超过 {{config}} 位字符',
        number: '请勿大于 {{config}}',
        array: '最多选择 {{config}} 项',
        date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
        email: '请勿超过 {{config}} 位字符',
        tel: '请勿超过 {{config}} 位字符',
        url: '请勿超过 {{config}} 位字符'
      },
      len: {
        string: '请输入 {{config}} 位字符',
        number: '长度应等于 {{config}}',
        array: '请选择 {{config}} 项',
        date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
        email: '请输入 {{config}} 位字符',
        tel: '请输入 {{config}} 位字符',
        url: '请输入 {{config}} 位字符'
      },
      pattern: '格式错误',
      custom: '未通过校验',
      notWhitespace: '空白内容无效'
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
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
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
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
  var EVENT_CHANGE = 'change';

  exports.default = {
    methods: {
      changeHander: function changeHander(e) {
        this.$emit(EVENT_CHANGE, e);
      },
      focus: function focus() {
        this.$refs.input.focus();
      },
      blur: function blur() {
        this.$refs.input.blur();
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(178)
}
var Component = __webpack_require__(6)(
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
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(73), __webpack_require__(163)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('../../common/mixins/input'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.input);
    global.input = mod.exports;
  }
})(this, function (module, exports, _assign, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _input2 = _interopRequireDefault(_input);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-input';
  var EVENT_INPUT = 'input';
  var EVENT_BLUR = 'blur';
  var EVENT_FOCUS = 'focus';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_input2.default],
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
        type: [Boolean, String],
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
      pattern: String,
      clearable: {
        type: [Boolean, Object],
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
        formatedClearable: {
          visible: false,
          blurHidden: true
        },
        formatedEye: {
          open: false,
          reverse: false
        }
      };
    },

    computed: {
      _type: function _type() {
        var type = this.type;
        if (type === 'password' && this.eye && this.pwdVisible) {
          return 'text';
        }
        return type;
      },
      _showClear: function _showClear() {
        var visible = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled;
        if (this.formatedClearable.blurHidden && !this.isFocus) {
          visible = false;
        }
        return visible;
      },
      _showPwdEye: function _showPwdEye() {
        return this.type === 'password' && this.eye && !this.disabled;
      },
      pwdVisible: function pwdVisible() {
        var eye = this.formatedEye;
        return eye.reverse ? !eye.open : eye.open;
      },
      eyeClass: function eyeClass() {
        return this.formatedEye.open ? 'cubeic-eye-visible' : 'cubeic-eye-invisible';
      }
    },
    watch: {
      value: function value(newValue) {
        this.inputValue = newValue;
      },
      inputValue: function inputValue(newValue) {
        this.$emit(EVENT_INPUT, newValue);
      },

      clearable: {
        handler: function handler() {
          this.formatClearable();
        },

        deep: true,
        immediate: true
      },
      eye: {
        handler: function handler() {
          this.formateEye();
        },

        deep: true,
        immediate: true
      }
    },
    methods: {
      formatClearable: function formatClearable() {
        if (typeof this.clearable === 'boolean') {
          this.formatedClearable.visible = this.clearable;
        } else {
          (0, _assign2.default)(this.formatedClearable, this.clearable);
        }
      },
      formateEye: function formateEye() {
        if (typeof this.eye === 'boolean') {
          this.formatedEye.open = this.eye;
        } else {
          (0, _assign2.default)(this.formatedEye, this.eye);
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
        this.formatedEye.open = !this.formatedEye.open;
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
      "change": [function($event) {
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
      }, _vm.changeHander]
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
      "change": [function($event) {
        _vm.inputValue = null
      }, _vm.changeHander]
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
      "change": _vm.changeHander,
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
      "touchend": _vm.handleClear
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
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(73);

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
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
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
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(294), __webpack_require__(67), __webpack_require__(173), __webpack_require__(298)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/dialog/dialog.vue'), require('../../common/locale'), require('../../components/input/input.vue'), require('./api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.dialog, global.locale, global.input, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _dialog, _locale, _input, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _dialog2 = _interopRequireDefault(_dialog);

  var _locale2 = _interopRequireDefault(_locale);

  var _input2 = _interopRequireDefault(_input);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _dialog2.default.install = function (Vue) {
    Vue.component(_input2.default.name, _input2.default);
    Vue.component(_dialog2.default.name, _dialog2.default);
    _locale2.default.install(Vue);
    (0, _api2.default)(Vue, _dialog2.default);
  };

  _dialog2.default.Input = _input2.default;

  exports.default = _dialog2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(295)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(296),
  /* template */
  __webpack_require__(297),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 295 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(210), __webpack_require__(73), __webpack_require__(100), __webpack_require__(173), __webpack_require__(50), __webpack_require__(59), __webpack_require__(69)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/extends'), require('babel-runtime/core-js/object/assign'), require('../popup/popup.vue'), require('../input/input.vue'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'), require('../../common/mixins/locale'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._extends, global.assign, global.popup, global.input, global.visibility, global.popup, global.locale);
    global.dialog = mod.exports;
  }
})(this, function (module, exports, _extends2, _assign, _popup, _input, _visibility, _popup3, _locale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends3 = _interopRequireDefault(_extends2);

  var _assign2 = _interopRequireDefault(_assign);

  var _popup2 = _interopRequireDefault(_popup);

  var _input2 = _interopRequireDefault(_input);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup4 = _interopRequireDefault(_popup3);

  var _locale2 = _interopRequireDefault(_locale);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-dialog';
  var EVENT_CONFIRM = 'confirm';
  var EVENT_CANCEL = 'cancel';
  var EVENT_CLOSE = 'close';

  var defHref = 'javascript:;';
  var defConfirmBtn = {
    textType: 'ok',
    active: true,
    disabled: false,
    href: defHref
  };
  var defCancelBtn = {
    textType: 'cancel',
    active: false,
    disabled: false,
    href: defHref
  };
  var parseBtn = function parseBtn(btn, defBtn) {
    if (typeof btn === 'string') {
      btn = {
        text: btn
      };
    }
    var text = defBtn && this.$t(defBtn.textType);
    return (0, _assign2.default)({}, defBtn, { text: text }, btn);
  };

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup4.default, _locale2.default],
    props: {
      type: {
        type: String,
        default: 'alert'
      },
      prompt: {
        type: Object,
        default: function _default() {
          return {
            value: '',
            placeholder: ''
          };
        }
      },
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      showClose: {
        type: Boolean,
        default: false
      },
      confirmBtn: {
        type: [Object, String],
        default: function _default() {
          return (0, _extends3.default)({}, defConfirmBtn);
        }
      },
      cancelBtn: {
        type: [Object, String],
        default: function _default() {
          return (0, _extends3.default)({}, defCancelBtn);
        }
      }
    },
    data: function data() {
      return {
        defHref: defHref,
        promptValue: this.prompt.value
      };
    },

    computed: {
      _confirmBtn: function _confirmBtn() {
        return parseBtn.call(this, this.confirmBtn, defConfirmBtn);
      },
      _cancelBtn: function _cancelBtn() {
        return parseBtn.call(this, this.cancelBtn, defCancelBtn);
      },
      isConfirm: function isConfirm() {
        return this.type === 'confirm';
      },
      isPrompt: function isPrompt() {
        return this.type === 'prompt';
      },
      containerClass: function containerClass() {
        return 'cube-dialog-' + this.type;
      }
    },
    watch: {
      'prompt.value': {
        handler: function handler(newVal) {
          this.promptValue = newVal;
        }
      }
    },
    methods: {
      maskClick: function maskClick(e) {
        this.maskClosable && this.cancel(e);
      },
      confirm: function confirm(e) {
        if (this._confirmBtn.disabled) {
          return;
        }
        this.hide();
        this.$emit(EVENT_CONFIRM, e, this.promptValue);
      },
      cancel: function cancel(e) {
        if (this._cancelBtn.disabled) {
          return;
        }
        this.hide();
        this.$emit(EVENT_CANCEL, e);
      },
      close: function close(e) {
        this.hide();
        this.$emit(EVENT_CLOSE, e);
      }
    },
    components: {
      CubePopup: _popup2.default,
      CubeInput: _input2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "cube-dialog-fade"
    }
  }, [_c('cube-popup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    attrs: {
      "type": "dialog",
      "z-index": _vm.zIndex,
      "mask": true,
      "center": true
    },
    on: {
      "mask-click": _vm.maskClick
    }
  }, [_c('div', {
    staticClass: "cube-dialog-main"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showClose),
      expression: "showClose"
    }],
    staticClass: "cube-dialog-close",
    on: {
      "click": _vm.close
    }
  }, [_c('i', {
    staticClass: "cubeic-close"
  })]), _vm._v(" "), _c('div', {
    class: _vm.containerClass
  }, [(_vm.icon) ? _c('p', {
    staticClass: "cube-dialog-icon"
  }, [_c('i', {
    class: _vm.icon
  })]) : _vm._e(), _vm._v(" "), (_vm.title || _vm.$slots.title) ? _c('h2', {
    staticClass: "cube-dialog-title"
  }, [_vm._t("title", [_c('p', {
    staticClass: "cube-dialog-title-def"
  }, [_vm._v(_vm._s(_vm.title))])])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "cube-dialog-content"
  }, [_vm._t("content", [_c('div', {
    staticClass: "cube-dialog-content-def"
  }, [(_vm.content) ? _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isPrompt) ? _c('cube-input', _vm._b({
    model: {
      value: (_vm.promptValue),
      callback: function($$v) {
        _vm.promptValue = $$v
      },
      expression: "promptValue"
    }
  }, 'cube-input', _vm.prompt, false)) : _vm._e()], 1)])], 2), _vm._v(" "), _c('div', {
    staticClass: "cube-dialog-btns",
    class: {
      'border-right-1px': _vm.isConfirm || _vm.isPrompt
    }
  }, [_vm._t("btns", [(_vm.isConfirm || _vm.isPrompt) ? _c('a', {
    staticClass: "cube-dialog-btn border-top-1px",
    class: {
      'cube-dialog-btn_highlight': _vm._cancelBtn.active, 'cube-dialog-btn_disabled': _vm._cancelBtn.disabled
    },
    attrs: {
      "href": _vm._cancelBtn.href
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm._cancelBtn.text))]) : _vm._e(), _vm._v(" "), _c('a', {
    staticClass: "cube-dialog-btn border-top-1px",
    class: {
      'cube-dialog-btn_highlight': _vm._confirmBtn.active, 'cube-dialog-btn_disabled': _vm._confirmBtn.disabled
    },
    attrs: {
      "href": _vm._confirmBtn.href
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm._confirmBtn.text))])])], 2)])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(77)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/create-api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.createApi);
    global.api = mod.exports;
  }
})(this, function (module, exports, _createApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addDialog;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addDialog(Vue, Dialog) {
    (0, _createApi2.default)(Vue, Dialog, ['confirm', 'cancel', 'close', 'btn-click', 'link-click'], true);
  }
  module.exports = exports['default'];
});

/***/ })
/******/ ]);
});