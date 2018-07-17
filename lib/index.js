(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cube"] = factory();
	else
		root["cube"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9), __webpack_require__(50), __webpack_require__(16), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
  exports.processComponentName = exports.debounce = exports.cb2PromiseWithResolve = exports.parallel = exports.resetTypeValue = exports.toLocaleDateString = exports.createAddAPI = exports.deepAssign = exports.findIndex = undefined;

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

  exports.findIndex = findIndex;
  exports.deepAssign = deepAssign;
  exports.createAddAPI = createAddAPI;
  exports.toLocaleDateString = toLocaleDateString;
  exports.resetTypeValue = resetTypeValue;
  exports.parallel = parallel;
  exports.cb2PromiseWithResolve = cb2PromiseWithResolve;
  exports.debounce = debounce;
  exports.processComponentName = processComponentName;
});

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(47)('wks');
var uid = __webpack_require__(36);
var Symbol = __webpack_require__(10).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(196), __esModule: true };

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(221)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./util'), require('./create-api-component'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.util, global.createApiComponent);
    global.createApi = mod.exports;
  }
})(this, function (module, exports, _util, _createApiComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createAPI;

  var _createApiComponent2 = _interopRequireDefault(_createApiComponent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function createAPI(Vue, Component, events, single) {
    var api = _createApiComponent2.default.apply(this, arguments);
    var createName = (0, _util.processComponentName)(Component, {
      prefix: '$create-'
    });
    Vue.prototype[createName] = api.create;
    Component.$create = api.create;
    return api;
  }
  module.exports = exports['default'];
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(37)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./env'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.env);
    global.dom = mod.exports;
  }
})(this, function (exports, _env) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hasClass = hasClass;
  exports.addClass = addClass;
  exports.removeClass = removeClass;
  exports.getData = getData;
  exports.getRect = getRect;
  exports.prefixStyle = prefixStyle;
  exports.getMatchedTarget = getMatchedTarget;
  exports.dispatchEvent = dispatchEvent;
  function hasClass(el, className) {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
  }

  function addClass(el, className) {
    if (hasClass(el, className)) {
      return;
    }

    var newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');
  }

  function removeClass(el, className) {
    if (!hasClass(el, className)) {
      return;
    }

    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
    el.className = el.className.replace(reg, ' ');
  }

  function getData(el, name) {
    var prefix = 'data-';
    return el.getAttribute(prefix + name);
  }

  function getRect(el) {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }

  var vendor = function () {
    if (!_env.inBrowser) {
      return false;
    }
    var elementStyle = document.createElement('div').style;
    var transformNames = {
      standard: 'transform',
      webkit: 'webkitTransform',
      Moz: 'MozTransform',
      O: 'OTransform',
      ms: 'msTransform'
    };

    for (var key in transformNames) {
      if (elementStyle[transformNames[key]] !== undefined) {
        return key;
      }
    }

    return false;
  }();

  function prefixStyle(style) {
    if (vendor === false) {
      return false;
    }

    if (vendor === 'standard') {
      if (style === 'transitionEnd') {
        return 'transitionend';
      }
      return style;
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
  }

  function getMatchedTarget(e, targetClassName) {
    var el = e.target;

    while (el && !hasClass(el, targetClassName)) {
      if (el === e.currentTarget) return null;
      el = el.parentNode;
    }

    return el;
  }

  function dispatchEvent(ele, name) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'Event' : _ref$type,
        _ref$bubbles = _ref.bubbles,
        bubbles = _ref$bubbles === undefined ? true : _ref$bubbles,
        _ref$cancelable = _ref.cancelable,
        cancelable = _ref$cancelable === undefined ? true : _ref$cancelable;

    var e = document.createEvent(type);
    e.initEvent(name, bubbles, cancelable);
    ele.dispatchEvent(e);
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(72);
var toPrimitive = __webpack_require__(49);
var dP = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(69);
var defined = __webpack_require__(43);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(3);
var ctx = __webpack_require__(71);
var hide = __webpack_require__(20);
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
    if (own && key in exports) continue;
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(148);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(158);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(205)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(217),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(224)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(68);
var enumBugKeys = __webpack_require__(48);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(28);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(130)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(131),
  /* template */
  __webpack_require__(132),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(214)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(216),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/create-api'), require('../../common/helpers/debug'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.createApi, global.debug);
    global.api = mod.exports;
  }
})(this, function (module, exports, _createApi, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addPicker;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addPicker(Vue, Picker) {
    var pickerAPI = (0, _createApi2.default)(Vue, Picker, ['select', 'value-change', 'cancel', 'change']);
    pickerAPI.before(function (data, renderFn, single) {
      if (single) {
        (0, _debug.tip)('Picker component can not be a singleton.');
      }
    });
  }
  module.exports = exports['default'];
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(315)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(316),
  /* template */
  __webpack_require__(331),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 31 */
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
    global.picker = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      cancelTxt: {
        type: String,
        default: '取消'
      },
      confirmTxt: {
        type: String,
        default: '确定'
      },
      swipeTime: {
        type: Number,
        default: 2500
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 32 */
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
    global.scroll = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    props: {
      options: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(111)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(113),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(115)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(117),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(43);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 37 */
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
  var ua = exports.ua = inBrowser && navigator.userAgent.toLowerCase();
  var isAndroid = exports.isAndroid = ua && ua.indexOf('android') > 0;
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(150)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(74)(String, 'String', function (iterated) {
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * better-normal-scroll v1.12.4
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        _events[count][0] = undefined;
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

function isUndef(v) {
  return v === undefined || v === null;
}

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

var elementStyle = inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!inBrowser) {
    return false;
  }
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

function offsetToBody(el) {
  var rect = el.getBoundingClientRect();

  return {
    left: -(rect.left + window.pageXOffset),
    top: -(rect.top + window.pageYOffset)
  };
}

var transform = prefixStyle('transform');

var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransform = transform !== false;
var hasTransition = inBrowser && prefixStyle('transition') in elementStyle;

var style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'click';

  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }

  function createEvent() {
    ev = document.createEvent('Event');
    ev.initEvent(event, bubbles, cancelable);
    extend(ev, posSrc);
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true;
  ev._constructed = true;
  e.target.dispatchEvent(ev);
}

function dblclick(e) {
  click(e, 'dblclick');
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function removeChild(el, child) {
  el.removeChild(child);
}

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.0015,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: false,
  stopPropagation: false,
  /**
   * for zoom
   * zoom: {
   *   start: 1,
   *   min: 1,
   *   max: 4
   * }
   */
  zoom: false,
  /**
   * for infinity
   * infinity: {
   *   render(item, div) {
   *   },
   *   createTombstone() {
   *   },
   *   fetch(count) {
   *   }
   * }
   */
  infinity: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
};

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this.setScale(1);

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    if (this.options.observeDOM) {
      this._initDOMObserver();
    }

    if (this.options.autoBlur) {
      this._handleAutoBlur();
    }

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype.setScale = function (scale) {
    this.lastScale = isUndef(this.scale) ? scale : this.scale;
    this.scale = scale;
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
    if (this.options.wheel) {
      this._initWheel();
    }
    if (this.options.mouseWheel) {
      this._initMouseWheel();
    }
    if (this.options.zoom) {
      this._initZoom();
    }
    if (this.options.infinity) {
      this._initInfinite();
    }
  };

  BScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return;
    }
    var me = this;
    var isInTransition = false;
    var key = this.useTransition ? 'isInTransition' : 'isAnimating';
    Object.defineProperty(this, key, {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };

  BScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  BScroll.prototype._initDOMObserver = function () {
    var _this = this;

    if (typeof MutationObserver !== 'undefined') {
      var timer = void 0;
      var observer = new MutationObserver(function (mutations) {
        // don't do any refresh during the transition, or outside of the boundaries
        if (_this._shouldNotRefresh()) {
          return;
        }
        var immediateRefresh = false;
        var deferredRefresh = false;
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          if (mutation.type !== 'attributes') {
            immediateRefresh = true;
            break;
          } else {
            if (mutation.target !== _this.scroller) {
              deferredRefresh = true;
              break;
            }
          }
        }
        if (immediateRefresh) {
          _this.refresh();
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (!_this._shouldNotRefresh()) {
              _this.refresh();
            }
          }, 60);
        }
      });
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      observer.observe(this.scroller, config);

      this.on('destroy', function () {
        observer.disconnect();
      });
    } else {
      this._checkDOMUpdate();
    }
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  BScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = getRect(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = getRect(this.scroller);
      var newWidth = scrollerRect.width;
      var newHeight = scrollerRect.height;

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh();
      }
      oldWidth = newWidth;
      oldHeight = newHeight;

      next.call(this);
    }

    function next() {
      var _this2 = this;

      setTimeout(function () {
        check.call(_this2);
      }, 1000);
    }

    next.call(this);
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoomStart(e);
        }
        break;
      case 'touchmove':
      case 'mousemove':
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoom(e);
        } else {
          this._move(e);
        }
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        if (this.scaled) {
          this._zoomEnd(e);
        } else {
          this._end(e);
        }
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = Math.round(scrollerRect.width * this.scale);
    this.scrollerHeight = Math.round(scrollerRect.height * this.scale);

    this.relativeX = scrollerRect.left;
    this.relativeY = scrollerRect.top;

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left;
      this.relativeY -= wrapperRect.top;
    }

    this.minScrollX = 0;
    this.minScrollY = 0;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;
      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      if (!this.options.infinity) {
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      }
      if (this.maxScrollX < 0) {
        this.maxScrollX -= this.relativeX;
        this.minScrollX = -this.relativeX;
      } else if (this.scale > 1) {
        this.maxScrollX = this.maxScrollX / 2 - this.relativeX;
        this.minScrollX = this.maxScrollX;
      }
      if (this.maxScrollY < 0) {
        this.maxScrollY -= this.relativeY;
        this.minScrollY = -this.relativeY;
      } else if (this.scale > 1) {
        this.maxScrollY = this.maxScrollY / 2 - this.relativeY;
        this.minScrollY = this.maxScrollY;
      }
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = this.minScrollX;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = this.minScrollY;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = offset(this.wrapper);

    this.trigger('refresh');

    !this.scaled && this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };
}

var ease = {
  // easeOutQuint
  swipe: {
    style: 'cubic-bezier(0.23, 1, 0.32, 1)',
    fn: function fn(t) {
      return 1 + --t * t * t * t * t;
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fn: function fn(t) {
      return t * (2 - t);
    }
  },
  // easeOutQuart
  bounce: {
    style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    fn: function fn(t) {
      return 1 - --t * t * t * t;
    }
  }
};

function momentum(current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > upperMargin) {
    destination = wrapperSize ? Math.min(upperMargin + wrapperSize / 4, upperMargin + wrapperSize / rate * speed) : upperMargin;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;

var PROBE_DEBOUNCE = 1;

var PROBE_REALTIME = 3;

function warn(msg) {
  console.error('[BScroll warn]: ' + msg);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error('[BScroll] ' + msg);
  }
}

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

    if (this.options.wheel) {
      this.target = e.target;
    }

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    var top = false;
    var bottom = false;
    var left = false;
    var right = false;
    // Slow down or stop if outside of the boundaries
    var bounce = this.options.bounce;
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top;
      bottom = bounce.bottom === undefined ? true : bounce.bottom;
      left = bounce.left === undefined ? true : bounce.left;
      right = bounce.right === undefined ? true : bounce.right;
    }
    if (newX > this.minScrollX || newX < this.maxScrollX) {
      if (newX > this.minScrollX && left || newX < this.maxScrollX && right) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > this.minScrollX ? this.minScrollX : this.maxScrollX;
      }
    }
    if (newY > this.minScrollY || newY < this.maxScrollY) {
      if (newY > this.minScrollY && top || newY < this.maxScrollY && bottom) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > this.minScrollY ? this.minScrollY : this.maxScrollY;
      }
    }

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > PROBE_DEBOUNCE) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    this.isInTransition = false;

    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel');
      return;
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }

    this._translate(newX, newY);

    this.endTime = getNow();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var top = false;
      var bottom = false;
      var left = false;
      var right = false;
      var bounce = this.options.bounce;
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top;
        bottom = bounce.bottom === undefined ? true : bounce.bottom;
        left = bounce.left === undefined ? true : bounce.left;
        right = bounce.right === undefined ? true : bounce.right;
      }
      var wrapperWidth = this.directionX === DIRECTION_RIGHT && left || this.directionX === DIRECTION_LEFT && right ? this.wrapperWidth : 0;
      var wrapperHeight = this.directionY === DIRECTION_DOWN && top || this.directionY === DIRECTION_UP && bottom ? this.wrapperHeight : 0;
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.snap.easing || ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
    }
    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
          var index = Math.abs(Math.round(this.y / this.itemHeight));
          var _offset = Math.round((this.pointY + offsetToBody(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
        return true;
      } else {
        if (!preventClick) {
          var _dblclick = this.options.dblclick;
          var dblclickTrigged = false;
          if (_dblclick && this.lastClickTime) {
            var _dblclick$delay = _dblclick.delay,
                delay = _dblclick$delay === undefined ? 300 : _dblclick$delay;

            if (getNow() - this.lastClickTime < delay) {
              dblclickTrigged = true;
              dblclick(e);
            }
          }
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          this.lastClickTime = dblclickTrigged ? null : getNow();
          return true;
        }
        return false;
      }
    }
    return false;
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    var needReset = !this.pulling || this.movingDirectionY === DIRECTION_UP;
    if (needReset && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  BScroll.prototype._translate = function (x, y, scale) {
    assert(!isUndef(x) && !isUndef(y), 'Translate x or y is null or undefined.');
    if (isUndef(scale)) {
      scale = this.scale;
    }
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;
    this.setScale(scale);

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startScale = this.lastScale;
    var destScale = this.scale;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY, destScale);

        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;
      var newScale = (destScale - startScale) * easing + startScale;

      me._translate(newX, newY, newScale);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === PROBE_REALTIME) {
        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    if (!time || this.options.useTransition) {
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === PROBE_REALTIME) {
        this._startProbe();
      }

      if (!time && (x !== this.x || y !== this.y)) {
        this.trigger('scroll', {
          x: x,
          y: y
        });
        // force reflow to put everything in position
        this._reflow = document.body.offsetHeight;
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
          this.trigger('scrollEnd', {
            x: x,
            y: y
          });
        }
      }

      if (this.options.wheel) {
        if (y > this.minScrollY) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
        }
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && el.className !== this.options.wheel.wheelItemClass) {
      return;
    }

    var pos = offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > this.minScrollX ? this.minScrollX : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > this.minScrollY ? this.minScrollY : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > this.minScrollX) {
      x = this.minScrollX;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > this.minScrollY) {
      y = this.minScrollY;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

    this.scrollTo(x, y, time, easeing);

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      cancelAnimationFrame(this.probeTimer);
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      cancelAnimationFrame(this.animateTimer);
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');
    if (this.options.useTransition) {
      cancelAnimationFrame(this.probeTimer);
    } else {
      cancelAnimationFrame(this.animateTimer);
    }
    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 1) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      } else {
        // Loop does not make any sense if there is only one child.
        snap.loop = false;
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      _this._checkSnapLoop();

      var initPageX = snap._loopX ? 1 : 0;
      var initPageY = snap._loopY ? 1 : 0;
      _this._goToPage(_this.currentPage.pageX || initPageX, _this.currentPage.pageY || initPageY, 0);

      // Update snap threshold if needed.
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (snap._loopX) {
          if (_this.currentPage.pageX === 0) {
            _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
          }
          if (_this.currentPage.pageX === _this.pages.length - 1) {
            _this._goToPage(1, _this.currentPage.pageY, 0);
          }
        } else {
          if (_this.currentPage.pageY === 0) {
            _this._goToPage(_this.currentPage.pageX, _this.pages[0].length - 2, 0);
          }
          if (_this.currentPage.pageY === _this.pages[0].length - 1) {
            _this._goToPage(_this.currentPage.pageX, 1, 0);
          }
        }
      }
    });

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

        _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }

    this.on('destroy', function () {
      if (snap.loop) {
        var _children = _this.scroller.children;
        if (_children.length > 2) {
          removeChild(_this.scroller, _children[_children.length - 1]);
          removeChild(_this.scroller, _children[0]);
        }
      }
    });
  };

  BScroll.prototype._checkSnapLoop = function () {
    var snap = this.options.snap;

    if (!snap.loop || !this.pages || !this.pages.length) {
      return;
    }

    if (this.pages.length > 1) {
      snap._loopX = true;
    }
    if (this.pages[0] && this.pages[0].length > 1) {
      snap._loopY = true;
    }
    if (snap._loopX && snap._loopY) {
      warn('Loop does not support two direction at the same time.');
    }
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > this.minScrollX) {
      x = this.minScrollX;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > this.minScrollY) {
      y = this.minScrollY;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype._goToPage = function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments[2];
    var easing = arguments[3];

    var snap = this.options.snap;

    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (!this.pages[x]) {
      return;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing);
  };

  BScroll.prototype.goToPage = function (x, y, time, easing) {
    var snap = this.options.snap;
    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    if (snap.loop) {
      var len = void 0;
      if (snap._loopX) {
        len = this.pages.length - 2;
        if (x >= len) {
          x = len - 1;
        } else if (x < 0) {
          x = 0;
        }
        x += 1;
      } else {
        len = this.pages[0].length - 2;
        if (y >= len) {
          y = len - 1;
        } else if (y < 0) {
          y = 0;
        }
        y += 1;
      }
    }
    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.next = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.prev = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    var snap = this.options.snap;
    if (!snap) {
      return null;
    }

    if (snap.loop) {
      var currentPage = void 0;
      if (snap._loopX) {
        currentPage = extend({}, this.currentPage, {
          pageX: this.currentPage.pageX - 1
        });
      } else {
        currentPage = extend({}, this.currentPage, {
          pageY: this.currentPage.pageY - 1
        });
      }
      return currentPage;
    }
    return this.currentPage;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.options.wheel) {
      this.y = -index * this.itemHeight;
      this.scrollTo(0, this.y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };

  BScroll.prototype._initWheel = function () {
    var wheel = this.options.wheel;
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll';
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item';
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0;
      warn('wheel option selectedIndex is required!');
    }
  };
}

var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar = this.options.scrollbar,
        _options$scrollbar$fa = _options$scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
        _options$scrollbar$in = _options$scrollbar.interactive,
        interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }

    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;
  this.x = 0;
  this.y = 0;

  if (options.interactive) {
    this._addDOMEvents();
  }
}

Indicator.prototype.handleEvent = function (e) {
  switch (e.type) {
    case 'touchstart':
    case 'mousedown':
      this._start(e);
      break;
    case 'touchmove':
    case 'mousemove':
      this._move(e);
      break;
    case 'touchend':
    case 'mouseup':
    case 'touchcancel':
    case 'mousecancel':
      this._end(e);
      break;
  }
};

Indicator.prototype.refresh = function () {
  if (this._shouldShow()) {
    this.transitionTime();
    this._calculate();
    this.updatePosition();
  }
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

  this.wrapperStyle[style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

Indicator.prototype._start = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  this.transitionTime();

  this.initiated = true;
  this.moved = false;
  this.lastPointX = point.pageX;
  this.lastPointY = point.pageY;

  this.startTime = getNow();

  this._handleMoveEvents(addEvent);
  this.scroller.trigger('beforeScrollStart');
};

Indicator.prototype._move = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  if (!this.moved) {
    this.scroller.trigger('scrollStart');
  }

  this.moved = true;

  var deltaX = point.pageX - this.lastPointX;
  this.lastPointX = point.pageX;

  var deltaY = point.pageY - this.lastPointY;
  this.lastPointY = point.pageY;

  var newX = this.x + deltaX;
  var newY = this.y + deltaY;

  this._pos(newX, newY);
};

Indicator.prototype._end = function (e) {
  if (!this.initiated) {
    return;
  }
  this.initiated = false;

  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

    var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

    if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
      this.scroller.directionX = 0;
      this.scroller.directionY = 0;
      this.scroller.currentPage = snap;
      this.scroller.scrollTo(snap.x, snap.y, time, easing);
    }
  }

  if (this.moved) {
    this.scroller.trigger('scrollEnd', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};

Indicator.prototype._pos = function (x, y) {
  if (x < 0) {
    x = 0;
  } else if (x > this.maxPosX) {
    x = this.maxPosX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > this.maxPosY) {
    y = this.maxPosY;
  }

  x = Math.round(x / this.sizeRatioX);
  y = Math.round(y / this.sizeRatioY);

  this.scroller.scrollTo(x, y);
  this.scroller.trigger('scroll', {
    x: this.scroller.x,
    y: this.scroller.y
  });
};

Indicator.prototype._shouldShow = function () {
  if (this.direction === 'vertical' && this.scroller.hasVerticalScroll || this.direction === 'horizontal' && this.scroller.hasHorizontalScroll) {
    this.wrapper.style.display = '';
    return true;
  }
  this.wrapper.style.display = 'none';
  return false;
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

Indicator.prototype._addDOMEvents = function () {
  var eventOperation = addEvent;
  this._handleDOMEvents(eventOperation);
};

Indicator.prototype._removeDOMEvents = function () {
  var eventOperation = removeEvent;
  this._handleDOMEvents(eventOperation);
  this._handleMoveEvents(eventOperation);
};

Indicator.prototype._handleMoveEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(window, 'touchmove', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(window, 'mousemove', this);
  }
};

Indicator.prototype._handleDOMEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(this.indicator, 'touchstart', this);
    eventOperation(window, 'touchend', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(this.indicator, 'mousedown', this);
    eventOperation(window, 'mouseup', this);
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };

  BScroll.prototype.openPullDown = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullDownRefresh = config;
    this._initPullDown();
  };

  BScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false;
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    this.on('scroll', this._checkToEnd);
  };

  BScroll.prototype._checkToEnd = function (pos) {
    var _this = this;

    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

    if (this.movingDirectionY === DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', function () {
        _this.pullupWatching = false;
      });
      this.trigger('pullingUp');
      this.off('scroll', this._checkToEnd);
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };

  BScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };

  BScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false;
    if (!this.pullupWatching) {
      return;
    }
    this.pullupWatching = false;
    this.off('scroll', this._checkToEnd);
  };
}

function mouseWheelMixin(BScroll) {
  BScroll.prototype._initMouseWheel = function () {
    var _this = this;

    this._handleMouseWheelEvent(addEvent);

    this.on('destroy', function () {
      clearTimeout(_this.mouseWheelTimer);
      _this._handleMouseWheelEvent(removeEvent);
    });

    this.firstWheelOpreation = true;
  };

  BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
    eventOperation(this.wrapper, 'wheel', this);
    eventOperation(this.wrapper, 'mousewheel', this);
    eventOperation(this.wrapper, 'DOMMouseScroll', this);
  };

  BScroll.prototype._onMouseWheel = function (e) {
    var _this2 = this;

    if (!this.enabled) {
      return;
    }
    e.preventDefault();

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
    }
    this.firstWheelOpreation = false;

    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i,
        _options$mouseWheel$e = _options$mouseWheel.easeTime,
        easeTime = _options$mouseWheel$e === undefined ? 300 : _options$mouseWheel$e;


    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap && !easeTime) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;

    switch (true) {
      case 'deltaX' in e:
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * speed;
          wheelDeltaY = -e.deltaY * speed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
        break;
      case 'wheelDeltaX' in e:
        wheelDeltaX = e.wheelDeltaX / 120 * speed;
        wheelDeltaY = e.wheelDeltaY / 120 * speed;
        break;
      case 'wheelDelta' in e:
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
        break;
      case 'detail' in e:
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
        break;
      default:
        return;
    }

    var direction = invert ? -1 : 1;
    wheelDeltaX *= direction;
    wheelDeltaY *= direction;

    if (!this.hasVerticalScroll) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    var newX = void 0;
    var newY = void 0;
    if (this.options.snap) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if (wheelDeltaX > 0) {
        newX--;
      } else if (wheelDeltaX < 0) {
        newX++;
      }

      if (wheelDeltaY > 0) {
        newY--;
      } else if (wheelDeltaY < 0) {
        newY++;
      }

      this._goToPage(newX, newY);
      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    this.movingDirectionX = this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
    this.movingDirectionY = this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    this.scrollTo(newX, newY, easeTime, ease.swipe);
    this.trigger('scroll', {
      x: this.x,
      y: this.y
    });
  };
}

function zoomMixin(BScroll) {
  BScroll.prototype._initZoom = function () {
    var _options$zoom = this.options.zoom,
        _options$zoom$start = _options$zoom.start,
        start = _options$zoom$start === undefined ? 1 : _options$zoom$start,
        _options$zoom$min = _options$zoom.min,
        min = _options$zoom$min === undefined ? 1 : _options$zoom$min,
        _options$zoom$max = _options$zoom.max,
        max = _options$zoom$max === undefined ? 4 : _options$zoom$max;

    this.scale = Math.min(Math.max(start, min), max);
    this.setScale(this.scale);
    this.scrollerStyle[style.transformOrigin] = '0 0';
  };

  BScroll.prototype._zoomTo = function (scale, originX, originY, startScale) {
    this.scaled = true;

    var lastScale = scale / (startScale || this.scale);
    this.setScale(scale);

    this.refresh();

    var newX = Math.round(this.startX - (originX - this.relativeX) * (lastScale - 1));
    var newY = Math.round(this.startY - (originY - this.relativeY) * (lastScale - 1));

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    if (this.x !== newX || this.y !== newY) {
      this.scrollTo(newX, newY, this.options.bounceTime);
    }

    this.scaled = false;
  };

  BScroll.prototype.zoomTo = function (scale, x, y) {
    var _offsetToBody = offsetToBody(this.wrapper),
        left = _offsetToBody.left,
        top = _offsetToBody.top;

    var originX = x + left - this.x;
    var originY = y + top - this.y;
    this._zoomTo(scale, originX, originY);
  };

  BScroll.prototype._zoomStart = function (e) {
    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);

    this.startDistance = getDistance(deltaX, deltaY);
    this.startScale = this.scale;

    var _offsetToBody2 = offsetToBody(this.wrapper),
        left = _offsetToBody2.left,
        top = _offsetToBody2.top;

    this.originX = Math.abs(firstFinger.pageX + secondFinger.pageX) / 2 + left - this.x;
    this.originY = Math.abs(firstFinger.pageY + secondFinger.pageY) / 2 + top - this.y;

    this.trigger('zoomStart');
  };

  BScroll.prototype._zoom = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);
    var distance = getDistance(deltaX, deltaY);
    var scale = distance / this.startDistance * this.startScale;

    this.scaled = true;

    var _options$zoom2 = this.options.zoom,
        _options$zoom2$min = _options$zoom2.min,
        min = _options$zoom2$min === undefined ? 1 : _options$zoom2$min,
        _options$zoom2$max = _options$zoom2.max,
        max = _options$zoom2$max === undefined ? 4 : _options$zoom2$max;


    if (scale < min) {
      scale = 0.5 * min * Math.pow(2.0, scale / min);
    } else if (scale > max) {
      scale = 2.0 * max * Math.pow(0.5, max / scale);
    }

    var lastScale = scale / this.startScale;

    var x = this.startX - (this.originX - this.relativeX) * (lastScale - 1);
    var y = this.startY - (this.originY - this.relativeY) * (lastScale - 1);

    this.setScale(scale);

    this.scrollTo(x, y, 0);
  };

  BScroll.prototype._zoomEnd = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.isInTransition = false;
    this.isAnimating = false;
    this.initiated = 0;

    var _options$zoom3 = this.options.zoom,
        _options$zoom3$min = _options$zoom3.min,
        min = _options$zoom3$min === undefined ? 1 : _options$zoom3$min,
        _options$zoom3$max = _options$zoom3.max,
        max = _options$zoom3$max === undefined ? 4 : _options$zoom3$max;


    var scale = this.scale > max ? max : this.scale < min ? min : this.scale;

    this._zoomTo(scale, this.originX, this.originY, this.startScale);

    this.trigger('zoomEnd');
  };
}

// import { ease } from '../util/ease'

// Number of items to instantiate beyond current view in the scroll direction.
var RUNWAY_ITEMS = 30;

// Number of items to instantiate beyond current view in the opposite direction.
var RUNWAY_ITEMS_OPPOSITE = 10;

// The animation interval (in ms) for fading in content from tombstones.
var ANIMATION_DURATION_MS = 200;

// The number of pixels of default additional length to allow scrolling to.
var DEFAULT_SCROLL_RUNWAY = 2000;

function infiniteMixin(BScroll) {
  BScroll.prototype._initInfinite = function () {
    this.options.probeType = 3;
    this.maxScrollY = -DEFAULT_SCROLL_RUNWAY;
    this.infiniteScroller = new InfiniteScroller(this, this.options.infinity);
  };
}

function isTombstoneNode(node) {
  if (node && node.classList) {
    return node.classList.contains('tombstone');
  }
}

function InfiniteScroller(scroller, options) {
  var _this = this;

  this.options = options;
  assert(typeof this.options.createTombstone === 'function', 'Infinite scroll need createTombstone Function to create tombstone');

  assert(typeof this.options.fetch === 'function', 'Infinite scroll need fetch Function to fetch new data.');

  assert(typeof this.options.render === 'function', 'Infinite scroll need render Function to render each item.');

  this.firstAttachedItem = 0;
  this.lastAttachedItem = 0;

  this.anchorScrollTop = 0;
  this.anchorItem = {
    index: 0,
    offset: 0
  };
  this.tombstoneHeight = 0;
  this.tombstoneWidth = 0;
  this.tombstones = [];

  this.items = [];
  this.loadedItems = 0;
  this.requestInProgress = false;
  this.hasMore = true;

  this.scroller = scroller;
  this.wrapperEl = this.scroller.wrapper;
  this.scrollerEl = this.scroller.scroller;
  this.scroller.on('scroll', function () {
    _this.onScroll();
  });
  this.scroller.on('resize', function () {
    _this.onResize();
  });

  this.onResize();
}

InfiniteScroller.prototype.onScroll = function () {
  var scrollTop = -this.scroller.y;
  var delta = scrollTop - this.anchorScrollTop;
  if (scrollTop === 0) {
    this.anchorItem = {
      index: 0,
      offset: 0
    };
  } else {
    this.anchorItem = this._calculateAnchoredItem(this.anchorItem, delta);
  }

  this.anchorScrollTop = scrollTop;
  var lastScreenItem = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight);

  var start = this.anchorItem.index;
  var end = lastScreenItem.index;
  if (delta < 0) {
    start -= RUNWAY_ITEMS;
    end += RUNWAY_ITEMS_OPPOSITE;
  } else {
    start -= RUNWAY_ITEMS_OPPOSITE;
    end += RUNWAY_ITEMS;
  }
  this.fill(start, end);
  this.maybeRequestContent();
};

InfiniteScroller.prototype.onResize = function () {
  var tombstone = this.options.createTombstone();
  tombstone.style.position = 'absolute';
  this.scrollerEl.appendChild(tombstone);
  tombstone.style.display = '';
  this.tombstoneHeight = tombstone.offsetHeight;
  this.tombstoneWidth = tombstone.offsetWidth;
  this.scrollerEl.removeChild(tombstone);

  for (var i = 0; i < this.items.length; i++) {
    this.items[i].height = this.items[i].width = 0;
  }

  this.onScroll();
};

InfiniteScroller.prototype.fill = function (start, end) {
  this.firstAttachedItem = Math.max(0, start);
  if (!this.hasMore) {
    end = Math.min(end, this.items.length);
  }
  this.lastAttachedItem = end;
  this.attachContent();
};

InfiniteScroller.prototype.maybeRequestContent = function () {
  var _this2 = this;

  if (this.requestInProgress || !this.hasMore) {
    return;
  }
  var itemsNeeded = this.lastAttachedItem - this.loadedItems;
  if (itemsNeeded <= 0) {
    return;
  }
  this.requestInProgress = true;
  this.options.fetch(itemsNeeded).then(function (items) {
    if (items) {
      _this2.addContent(items);
    } else {
      _this2.hasMore = false;
      var tombstoneLen = _this2._removeTombstones();
      var curPos = 0;
      if (_this2.anchorItem.index <= _this2.items.length) {
        curPos = _this2._fixScrollPosition();
        _this2._setupAnimations({}, curPos);
        _this2.scroller.resetPosition(_this2.scroller.options.bounceTime);
      } else {
        _this2.anchorItem.index -= tombstoneLen;
        curPos = _this2._fixScrollPosition();
        _this2._setupAnimations({}, curPos);
        _this2.scroller.stop();
        _this2.scroller.resetPosition();
        _this2.onScroll();
      }
    }
  });
};

InfiniteScroller.prototype.addContent = function (items) {
  this.requestInProgress = false;
  for (var i = 0; i < items.length; i++) {
    if (this.items.length <= this.loadedItems) {
      this._addItem();
    }
    this.items[this.loadedItems++].data = items[i];
  }
  this.attachContent();
  this.maybeRequestContent();
};

InfiniteScroller.prototype.attachContent = function () {
  var unusedNodes = this._collectUnusedNodes();
  var tombstoneAnimations = this._createDOMNodes(unusedNodes);
  this._cleanupUnusedNodes(unusedNodes);
  this._cacheNodeSize();
  var curPos = this._fixScrollPosition();
  this._setupAnimations(tombstoneAnimations, curPos);
};

InfiniteScroller.prototype._removeTombstones = function () {
  var markIndex = void 0;
  var tombstoneLen = 0;
  var itemLen = this.items.length;
  for (var i = 0; i < itemLen; i++) {
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if ((!currentNode || isTombstoneNode(currentNode)) && !currentData) {
      if (!markIndex) {
        markIndex = i;
      }
      if (currentNode) {
        this.scrollerEl.removeChild(currentNode);
      }
    }
  }
  tombstoneLen = itemLen - markIndex;
  this.items.splice(markIndex);
  this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length);
  return tombstoneLen;
};

InfiniteScroller.prototype._collectUnusedNodes = function () {
  var unusedNodes = [];
  for (var i = 0; i < this.items.length; i++) {
    // Skip the items which should be visible.
    if (i === this.firstAttachedItem) {
      i = this.lastAttachedItem - 1;
      continue;
    }
    var currentNode = this.items[i].node;
    if (currentNode) {
      if (isTombstoneNode(currentNode)) {
        // Cache tombstones for reuse
        this.tombstones.push(currentNode);
        this.tombstones[this.tombstones.length - 1].style.display = 'none';
      } else {
        unusedNodes.push(currentNode);
      }
    }
    this.items[i].node = null;
  }
  return unusedNodes;
};

InfiniteScroller.prototype._createDOMNodes = function (unusedNodes) {
  var tombstoneAnimations = {};
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    while (this.items.length <= i) {
      this._addItem();
    }
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if (currentNode) {
      if (isTombstoneNode(currentNode) && currentData) {
        currentNode.style.zIndex = 1;
        tombstoneAnimations[i] = [currentNode, this.items[i].top - this.anchorScrollTop];
        this.items[i].node = null;
      } else {
        continue;
      }
    }
    var node = currentData ? this.options.render(currentData, unusedNodes.pop()) : this._getTombStone();
    node.style.position = 'absolute';
    this.items[i].top = -1;
    this.scrollerEl.appendChild(node);
    this.items[i].node = node;
  }
  return tombstoneAnimations;
};

InfiniteScroller.prototype._cleanupUnusedNodes = function (unusedNodes) {
  while (unusedNodes.length) {
    this.scrollerEl.removeChild(unusedNodes.pop());
  }
};

InfiniteScroller.prototype._cacheNodeSize = function () {
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    // Only cache the height if we have the real contents, not a placeholder.
    if (this.items[i].data && !this.items[i].height) {
      this.items[i].height = this.items[i].node.offsetHeight;
      this.items[i].width = this.items[i].node.offsetWidth;
    }
  }
};

InfiniteScroller.prototype._fixScrollPosition = function () {
  this.anchorScrollTop = 0;
  for (var _i = 0; _i < this.anchorItem.index; _i++) {
    this.anchorScrollTop += this.items[_i].height || this.tombstoneHeight;
  }
  this.anchorScrollTop += this.anchorItem.offset;

  // Position all nodes.
  var curPos = this.anchorScrollTop - this.anchorItem.offset;
  var i = this.anchorItem.index;
  while (i > this.firstAttachedItem) {
    curPos -= this.items[i - 1].height || this.tombstoneHeight;
    i--;
  }

  return curPos;
};

InfiniteScroller.prototype._setupAnimations = function (tombstoneAnimations, curPos) {
  var _this3 = this;

  for (var i in tombstoneAnimations) {
    var animation = tombstoneAnimations[i];
    this.items[i].node.style.transform = 'translateY(' + (this.anchorScrollTop + animation[1]) + 'px) scale(' + this.tombstoneWidth / this.items[i].width + ', ' + this.tombstoneHeight / this.items[i].height + ')';
    // Call offsetTop on the nodes to be animated to force them to apply current transforms.
    /* eslint-disable no-unused-expressions */
    this.items[i].node.offsetTop;
    animation[0].offsetTop;
    this.items[i].node.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms';
  }

  for (var _i2 = this.firstAttachedItem; _i2 < this.lastAttachedItem; _i2++) {
    var _animation = tombstoneAnimations[_i2];
    if (_animation) {
      var tombstoneNode = _animation[0];
      tombstoneNode.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms, opacity ' + ANIMATION_DURATION_MS + 'ms';
      tombstoneNode.style.transform = 'translateY(' + curPos + 'px) scale(' + this.items[_i2].width / this.tombstoneWidth + ', ' + this.items[_i2].height / this.tombstoneHeight + ')';
      tombstoneNode.style.opacity = 0;
    }
    if (curPos !== this.items[_i2].top) {
      if (!_animation) {
        this.items[_i2].node.style.transition = '';
      }
      this.items[_i2].node.style.transform = 'translateY(' + curPos + 'px)';
    }
    this.items[_i2].top = curPos;
    curPos += this.items[_i2].height || this.tombstoneHeight;
  }

  this.scroller.maxScrollY = -(curPos - this.wrapperEl.offsetHeight + (this.hasMore ? DEFAULT_SCROLL_RUNWAY : 0));

  setTimeout(function () {
    for (var _i3 in tombstoneAnimations) {
      var _animation2 = tombstoneAnimations[_i3];
      _animation2[0].style.display = 'none';
      // Tombstone can be recycled now.
      _this3.tombstones.push(_animation2[0]);
    }
  }, ANIMATION_DURATION_MS);
};

InfiniteScroller.prototype._getTombStone = function () {
  var tombstone = this.tombstones.pop();
  if (tombstone) {
    tombstone.style.display = '';
    tombstone.style.opacity = 1;
    tombstone.style.transform = '';
    tombstone.style.transition = '';
    return tombstone;
  }
  return this.options.createTombstone();
};

InfiniteScroller.prototype._addItem = function () {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};

InfiniteScroller.prototype._calculateAnchoredItem = function (initialAnchor, delta) {
  if (delta === 0) {
    return initialAnchor;
  }
  var i = initialAnchor.index;
  var tombstones = 0;

  delta += initialAnchor.offset;
  if (delta < 0) {
    while (delta < 0 && i > 0 && this.items[i - 1].height) {
      delta += this.items[i - 1].height;
      i--;
    }
    tombstones = Math.max(-i, Math.ceil(Math.min(delta, 0) / this.tombstoneHeight));
  } else {
    while (delta > 0 && i < this.items.length && this.items[i].height && this.items[i].height < delta) {
      delta -= this.items[i].height;
      i++;
    }
    if (i >= this.items.length || !this.items[i].height) {
      tombstones = Math.floor(Math.max(delta, 0) / this.tombstoneHeight);
    }
  }
  i += tombstones;
  delta -= tombstones * this.tombstoneHeight;

  return {
    index: i,
    offset: delta
  };
};

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(el, options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);
zoomMixin(BScroll);
infiniteMixin(BScroll);

BScroll.Version = '1.12.4';

/* harmony default export */ __webpack_exports__["default"] = (BScroll);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(5);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(280),
  /* template */
  __webpack_require__(281),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(47)('keys');
var uid = __webpack_require__(36);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(28);
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(145);

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
/* 51 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
var global = __webpack_require__(10);
var hide = __webpack_require__(20);
var Iterators = __webpack_require__(24);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(51);
var wksExt = __webpack_require__(54);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(189)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(191),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(207);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(237)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(238),
  /* template */
  __webpack_require__(243),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(239), __webpack_require__(240), __webpack_require__(91)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(37)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/create-api'), require('../../common/helpers/debug'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.createApi, global.debug);
    global.api = mod.exports;
  }
})(this, function (module, exports, _createApi, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addCascadePicker;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addCascadePicker(Vue, CascadePicker) {
    var cascadePickerAPI = (0, _createApi2.default)(Vue, CascadePicker, ['select', 'cancel', 'change']);
    cascadePickerAPI.before(function (data, renderFn, single) {
      if (single) {
        (0, _debug.tip)('CascadePicker component can not be a singleton.');
      }
    });
  }
  module.exports = exports['default'];
});

/***/ }),
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(317), __webpack_require__(324), __webpack_require__(18), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/slicedToArray'), require('babel-runtime/core-js/object/entries'), require('../../common/helpers/debug'), require('../../common/lang/string'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.slicedToArray, global.entries, global.debug, global.string);
    global.deprecated = mod.exports;
  }
})(this, function (module, exports, _slicedToArray2, _entries, _debug, _string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

  var _entries2 = _interopRequireDefault(_entries);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    methods: {
      _checkDeprecated: function _checkDeprecated() {
        var _this = this;

        var props = this.$options.props;
        var componentName = this.$options.name;

        (0, _entries2.default)(props).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
              key = _ref2[0],
              prop = _ref2[1];

          var deprecated = prop.deprecated;

          if (deprecated && _this[key] !== undefined) {
            (0, _debug.tip)('The property "' + (0, _string.kebab)(key) + '" is deprecated, please use the recommended property "' + deprecated.replacedBy + '" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/' + componentName.substr(5) + '#cube-Propsconfiguration-anchor', componentName);
          }
        });
      }
    },
    mounted: function mounted() {
      this._checkDeprecated();
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(343)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(344),
  /* template */
  __webpack_require__(345),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(374)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(375),
  /* template */
  __webpack_require__(376),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(381)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(382),
  /* template */
  __webpack_require__(383),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(124)(false);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(44);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(45);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(127);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(73)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(28);
var document = __webpack_require__(10).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(75);
var hide = __webpack_require__(20);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(24);
var $iterCreate = __webpack_require__(151);
var setToStringTag = __webpack_require__(52);
var getPrototypeOf = __webpack_require__(154);
var ITERATOR = __webpack_require__(4)('iterator');
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
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
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
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(21);
var dPs = __webpack_require__(152);
var enumBugKeys = __webpack_require__(48);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(73)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(153).appendChild(iframe);
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(68);
var hiddenKeys = __webpack_require__(48).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(169)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(170),
  /* template */
  __webpack_require__(171),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(177)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(179),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(183)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(185),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(187)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(188),
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(194)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(199),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(201)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(202),
  /* template */
  __webpack_require__(203),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(85);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(44);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 86 */
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
    global.basicPicker = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DEFAULT_KEYS = {
    value: 'value',
    text: 'text'
  };

  exports.default = {
    props: {
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      selectedIndex: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      alias: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      maskClosable: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      valueKey: function valueKey() {
        return this.alias.value || DEFAULT_KEYS.value;
      },
      textKey: function textKey() {
        return this.alias.text || DEFAULT_KEYS.text;
      },
      merge: function merge() {
        return [this.data, this.selectedIndex];
      }
    },
    watch: {
      merge: function merge(newVal) {
        this.setData(newVal[0], newVal[1]);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(218)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(219),
  /* template */
  __webpack_require__(220),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(226)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(227),
  /* template */
  __webpack_require__(228),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(230)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(231),
  /* template */
  __webpack_require__(235),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(232)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(233),
  /* template */
  __webpack_require__(234),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(245)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(246),
  /* template */
  __webpack_require__(254),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(247)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(248),
  /* template */
  __webpack_require__(249),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(250)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(251),
  /* template */
  __webpack_require__(252),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(259)
}
var Component = __webpack_require__(0)(
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(261)
}
var Component = __webpack_require__(0)(
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
/* 97 */
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
    global.layouts = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LAYOUTS = {
    STANDARD: 'standard',
    CLASSIC: 'classic',
    FRESH: 'fresh'
  };

  exports.default = LAYOUTS;
  module.exports = exports['default'];
});

/***/ }),
/* 98 */
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
    global.mixin = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: function data() {
      return {
        validating: false,
        pending: false,
        originValid: undefined
      };
    },

    computed: {
      valid: function valid() {
        var originValid = this.originValid;
        var pending = this.pending;
        var validating = this.validating;
        return pending || validating ? undefined : originValid;
      },
      invalid: function invalid() {
        var valid = this.valid;
        return valid === undefined ? valid : !valid;
      }
    }
  };
  module.exports = exports["default"];
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(313)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(314),
  /* template */
  __webpack_require__(335),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(332)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(333),
  /* template */
  __webpack_require__(334),
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
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(341)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(342),
  /* template */
  __webpack_require__(346),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(355),
  /* template */
  __webpack_require__(359),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(356)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(357),
  /* template */
  __webpack_require__(358),
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

function injectStyle (ssrContext) {
  __webpack_require__(365)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(366),
  /* template */
  __webpack_require__(368),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(371)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(372),
  /* template */
  __webpack_require__(373),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(107), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./module'), require('./common/helpers/util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.module, global.util);
    global.index = mod.exports;
  }
})(this, function (module, exports, _module, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var components = [_module.Button, _module.Loading, _module.Tip, _module.Toolbar, _module.TabBar, _module.TabPanels, _module.Checkbox, _module.CheckboxGroup, _module.Radio, _module.RadioGroup, _module.Input, _module.Textarea, _module.Select, _module.Switch, _module.Rate, _module.Validator, _module.Upload, _module.Form, _module.Popup, _module.Toast, _module.Picker, _module.CascadePicker, _module.DatePicker, _module.TimePicker, _module.SegmentPicker, _module.Dialog, _module.ActionSheet, _module.Drawer, _module.ImagePreview, _module.Scroll, _module.Slide, _module.IndexList, _module.Swipe, _module.Sticky, _module.ScrollNav, _module.ScrollNavBar];

  function install(Vue) {
    if (install.installed) {
      return;
    }
    install.installed = true;
    components.forEach(function (Component) {
      if (Component === _module.Radio) {
        return;
      }
      Component.install(Vue);
    });
  }

  var Cube = {
    version: "1.10.6",
    install: install,
    BScroll: _module.BetterScroll,
    createAPI: _module.createAPI
  };

  components.forEach(function (Component) {
    var name = (0, _util.processComponentName)(Component, {
      firstUpperCase: true
    });
    Cube[name] = Component;
  });

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install);
  }

  exports.default = Cube;
  module.exports = exports['default'];
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(108), __webpack_require__(110), __webpack_require__(114), __webpack_require__(118), __webpack_require__(129), __webpack_require__(141), __webpack_require__(173), __webpack_require__(181), __webpack_require__(182), __webpack_require__(186), __webpack_require__(193), __webpack_require__(200), __webpack_require__(204), __webpack_require__(225), __webpack_require__(229), __webpack_require__(236), __webpack_require__(244), __webpack_require__(255), __webpack_require__(391), __webpack_require__(272), __webpack_require__(278), __webpack_require__(279), __webpack_require__(282), __webpack_require__(287), __webpack_require__(292), __webpack_require__(297), __webpack_require__(303), __webpack_require__(309), __webpack_require__(337), __webpack_require__(349), __webpack_require__(350), __webpack_require__(351), __webpack_require__(361), __webpack_require__(370), __webpack_require__(377), __webpack_require__(388), __webpack_require__(389), __webpack_require__(390)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./modules/style'), require('./modules/button'), require('./modules/loading'), require('./modules/tip'), require('./modules/toolbar'), require('./modules/tab-bar'), require('./modules/tab-panels'), require('./modules/checkbox'), require('./modules/checkbox-group'), require('./modules/radio-group'), require('./modules/input'), require('./modules/textarea'), require('./modules/select'), require('./modules/switch'), require('./modules/rate'), require('./modules/validator'), require('./modules/upload'), require('./modules/form'), require('./modules/popup'), require('./modules/toast'), require('./modules/picker'), require('./modules/cascade-picker'), require('./modules/date-picker'), require('./modules/time-picker'), require('./modules/segment-picker'), require('./modules/dialog'), require('./modules/action-sheet'), require('./modules/drawer'), require('./modules/image-preview'), require('./modules/scroll'), require('./modules/slide'), require('./modules/index-list'), require('./modules/swipe'), require('./modules/sticky'), require('./modules/scroll-nav'), require('./modules/scroll-nav-bar'), require('./modules/better-scroll'), require('./modules/create-api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.style, global.button, global.loading, global.tip, global.toolbar, global.tabBar, global.tabPanels, global.checkbox, global.checkboxGroup, global.radioGroup, global.input, global.textarea, global.select, global._switch, global.rate, global.validator, global.upload, global.form, global.popup, global.toast, global.picker, global.cascadePicker, global.datePicker, global.timePicker, global.segmentPicker, global.dialog, global.actionSheet, global.drawer, global.imagePreview, global.scroll, global.slide, global.indexList, global.swipe, global.sticky, global.scrollNav, global.scrollNavBar, global.betterScroll, global.createApi);
    global.module = mod.exports;
  }
})(this, function (exports, _style, _button, _loading, _tip, _toolbar, _tabBar, _tabPanels, _checkbox, _checkboxGroup, _radioGroup, _input, _textarea, _select, _switch, _rate, _validator, _upload, _form, _popup, _toast, _picker, _cascadePicker, _datePicker, _timePicker, _segmentPicker, _dialog, _actionSheet, _drawer, _imagePreview, _scroll, _slide, _indexList, _swipe, _sticky, _scrollNav, _scrollNavBar, _betterScroll, _createApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createAPI = exports.BetterScroll = exports.ScrollNavBar = exports.ScrollNav = exports.ScrollNavPanel = exports.Sticky = exports.StickyEle = exports.Swipe = exports.SwipeItem = exports.IndexList = exports.Slide = exports.SlideItem = exports.Scroll = exports.ImagePreview = exports.Drawer = exports.DrawerPanel = exports.DrawerItem = exports.ActionSheet = exports.Dialog = exports.SegmentPicker = exports.TimePicker = exports.DatePicker = exports.CascadePicker = exports.Picker = exports.Toast = exports.Popup = exports.Form = exports.FormGroup = exports.FormItem = exports.Upload = exports.Validator = exports.Rate = exports.Switch = exports.Select = exports.Textarea = exports.Input = exports.RadioGroup = exports.Radio = exports.CheckboxGroup = exports.Checkbox = exports.TabPanel = exports.TabPanels = exports.Tab = exports.TabBar = exports.Toolbar = exports.Tip = exports.Loading = exports.Button = exports.Style = undefined;

  var _style2 = _interopRequireDefault(_style);

  var _button2 = _interopRequireDefault(_button);

  var _loading2 = _interopRequireDefault(_loading);

  var _tip2 = _interopRequireDefault(_tip);

  var _toolbar2 = _interopRequireDefault(_toolbar);

  var _tabBar2 = _interopRequireDefault(_tabBar);

  var _tabPanels2 = _interopRequireDefault(_tabPanels);

  var _checkbox2 = _interopRequireDefault(_checkbox);

  var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

  var _radioGroup2 = _interopRequireDefault(_radioGroup);

  var _input2 = _interopRequireDefault(_input);

  var _textarea2 = _interopRequireDefault(_textarea);

  var _select2 = _interopRequireDefault(_select);

  var _switch2 = _interopRequireDefault(_switch);

  var _rate2 = _interopRequireDefault(_rate);

  var _validator2 = _interopRequireDefault(_validator);

  var _upload2 = _interopRequireDefault(_upload);

  var _form2 = _interopRequireDefault(_form);

  var _popup2 = _interopRequireDefault(_popup);

  var _toast2 = _interopRequireDefault(_toast);

  var _picker2 = _interopRequireDefault(_picker);

  var _cascadePicker2 = _interopRequireDefault(_cascadePicker);

  var _datePicker2 = _interopRequireDefault(_datePicker);

  var _timePicker2 = _interopRequireDefault(_timePicker);

  var _segmentPicker2 = _interopRequireDefault(_segmentPicker);

  var _dialog2 = _interopRequireDefault(_dialog);

  var _actionSheet2 = _interopRequireDefault(_actionSheet);

  var _drawer2 = _interopRequireDefault(_drawer);

  var _imagePreview2 = _interopRequireDefault(_imagePreview);

  var _scroll2 = _interopRequireDefault(_scroll);

  var _slide2 = _interopRequireDefault(_slide);

  var _indexList2 = _interopRequireDefault(_indexList);

  var _swipe2 = _interopRequireDefault(_swipe);

  var _sticky2 = _interopRequireDefault(_sticky);

  var _scrollNav2 = _interopRequireDefault(_scrollNav);

  var _scrollNavBar2 = _interopRequireDefault(_scrollNavBar);

  var _betterScroll2 = _interopRequireDefault(_betterScroll);

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var FormGroup = _form2.default.Group;
  var FormItem = _form2.default.Item;
  var SlideItem = _slide2.default.Item;
  var Radio = _radioGroup2.default.Radio;
  var SwipeItem = _swipe2.default.Item;
  var DrawerPanel = _drawer2.default.Panel;
  var DrawerItem = _drawer2.default.Item;
  var StickyEle = _sticky2.default.Ele;
  var ScrollNavPanel = _scrollNav2.default.Panel;
  var Tab = _tabBar2.default.Tab;
  var TabPanel = _tabPanels2.default.Panel;

  exports.Style = _style2.default;
  exports.Button = _button2.default;
  exports.Loading = _loading2.default;
  exports.Tip = _tip2.default;
  exports.Toolbar = _toolbar2.default;
  exports.TabBar = _tabBar2.default;
  exports.Tab = Tab;
  exports.TabPanels = _tabPanels2.default;
  exports.TabPanel = TabPanel;
  exports.Checkbox = _checkbox2.default;
  exports.CheckboxGroup = _checkboxGroup2.default;
  exports.Radio = Radio;
  exports.RadioGroup = _radioGroup2.default;
  exports.Input = _input2.default;
  exports.Textarea = _textarea2.default;
  exports.Select = _select2.default;
  exports.Switch = _switch2.default;
  exports.Rate = _rate2.default;
  exports.Validator = _validator2.default;
  exports.Upload = _upload2.default;
  exports.FormItem = FormItem;
  exports.FormGroup = FormGroup;
  exports.Form = _form2.default;
  exports.Popup = _popup2.default;
  exports.Toast = _toast2.default;
  exports.Picker = _picker2.default;
  exports.CascadePicker = _cascadePicker2.default;
  exports.DatePicker = _datePicker2.default;
  exports.TimePicker = _timePicker2.default;
  exports.SegmentPicker = _segmentPicker2.default;
  exports.Dialog = _dialog2.default;
  exports.ActionSheet = _actionSheet2.default;
  exports.DrawerItem = DrawerItem;
  exports.DrawerPanel = DrawerPanel;
  exports.Drawer = _drawer2.default;
  exports.ImagePreview = _imagePreview2.default;
  exports.Scroll = _scroll2.default;
  exports.SlideItem = SlideItem;
  exports.Slide = _slide2.default;
  exports.IndexList = _indexList2.default;
  exports.SwipeItem = SwipeItem;
  exports.Swipe = _swipe2.default;
  exports.StickyEle = StickyEle;
  exports.Sticky = _sticky2.default;
  exports.ScrollNavPanel = ScrollNavPanel;
  exports.ScrollNav = _scrollNav2.default;
  exports.ScrollNavBar = _scrollNavBar2.default;
  exports.BetterScroll = _betterScroll2.default;
  exports.createAPI = _createApi2.default;
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(109)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/stylus/index.styl'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.index);
    global.index = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    install: function install() {}
  };
  module.exports = exports['default'];
});

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(33)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/button/button.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.button);
    global.index = mod.exports;
  }
})(this, function (module, exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _button2 = _interopRequireDefault(_button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _button2.default.install = function (Vue) {
    Vue.component(_button2.default.name, _button2.default);
  };

  exports.default = _button2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
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
/* 113 */
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(34)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/loading/loading.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.loading);
    global.index = mod.exports;
  }
})(this, function (module, exports, _loading) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _loading2 = _interopRequireDefault(_loading);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _loading2.default.install = function (Vue) {
    Vue.component(_loading2.default.name, _loading2.default);
  };

  exports.default = _loading2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
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
    global.loading = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-loading';

  exports.default = {
    name: COMPONENT_NAME,
    data: function data() {
      return {
        balde: 12
      };
    },

    props: {
      size: {
        type: Number
      }
    },
    computed: {
      style: function style() {
        if (!this.size) {
          return;
        }
        var value = this.size + 'px';
        return {
          width: value,
          height: value
        };
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-loading"
  }, [_c('span', {
    staticClass: "cube-loading-spinners",
    style: (_vm.style)
  }, _vm._l((_vm.balde), function(item) {
    return _c('i', {
      staticClass: "cube-loading-spinner"
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(119)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/tip/tip.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.tip);
    global.index = mod.exports;
  }
})(this, function (module, exports, _tip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _tip2 = _interopRequireDefault(_tip);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _tip2.default.install = function (Vue) {
    Vue.component(_tip2.default.name, _tip2.default);
  };

  exports.default = _tip2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(120)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(128),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(9), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/keys'), require('../../common/mixins/visibility'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global.visibility);
    global.tip = mod.exports;
  }
})(this, function (module, exports, _keys, _visibility) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _keys2 = _interopRequireDefault(_keys);

  var _visibility2 = _interopRequireDefault(_visibility);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-tip';
  var EVENT_CLICK = 'click';
  var EVENT_CLOSE = 'close';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default],
    props: {
      direction: {
        type: String,
        default: 'top'
      },
      offsetLeft: {
        type: [String, Number],
        default: 0
      },
      offsetRight: {
        type: [String, Number],
        default: 0
      },
      offsetTop: {
        type: [String, Number],
        default: 0
      },
      offsetBottom: {
        type: [String, Number],
        default: 0
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.$nextTick(function () {
        var angleEleStyle = _this.$refs.angle.style;
        var boxMap = {
          left: 'right',
          right: 'left',
          top: 'bottom',
          bottom: 'top'
        };
        var offsets = [{
          name: 'offsetLeft',
          target: 'left',
          percentFix: {
            marginLeft: '-6px'
          }
        }, {
          name: 'offsetRight',
          target: 'right',
          percentFix: {
            marginRight: '-6px'
          }
        }, {
          name: 'offsetTop',
          target: 'top',
          percentFix: {
            marginTop: '-6px'
          }
        }, {
          name: 'offsetBottom',
          target: 'bottom',
          percentFix: {
            marginBottom: '-6px'
          }
        }];
        offsets.forEach(function (offset) {
          var value = _this[offset.name];
          if (value !== 0) {
            var isNum = typeof value === 'number';
            angleEleStyle[offset.target] = value + (isNum ? 'px' : '');
            if (offset.percentFix && !isNum) {
              (0, _keys2.default)(offset.percentFix).forEach(function (key) {
                angleEleStyle[key] = offset.percentFix[key];
              });
            }
            angleEleStyle[boxMap[offset.target]] = 'auto';
          }
        });
      });
    },

    methods: {
      handleClick: function handleClick() {
        this.hide();
        this.$emit(EVENT_CLICK);
      },
      close: function close() {
        this.hide();
        this.$emit(EVENT_CLOSE);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(35);
var $keys = __webpack_require__(19);

__webpack_require__(126)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(70);
var toAbsoluteIndex = __webpack_require__(125);
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(14);
var core = __webpack_require__(3);
var fails = __webpack_require__(22);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "cube-tip-zoom"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    staticClass: "cube-tip",
    attrs: {
      "data-dir": _vm.direction
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('i', {
    ref: "angle",
    staticClass: "cube-tip-angle"
  }), _vm._v(" "), _c('button', {
    staticClass: "cube-tip-close cubeic-close",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.close($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "cube-tip-content"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(33), __webpack_require__(23), __webpack_require__(133)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/button/button.vue'), require('../../components/checkbox/checkbox.vue'), require('../../components/toolbar/toolbar.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.button, global.checkbox, global.toolbar);
    global.index = mod.exports;
  }
})(this, function (module, exports, _button, _checkbox, _toolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _button2 = _interopRequireDefault(_button);

  var _checkbox2 = _interopRequireDefault(_checkbox);

  var _toolbar2 = _interopRequireDefault(_toolbar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _toolbar2.default.install = function (Vue) {
    Vue.component(_button2.default.name, _button2.default);
    Vue.component(_checkbox2.default.name, _checkbox2.default);
    Vue.component(_toolbar2.default.name, _toolbar2.default);
  };

  _toolbar2.default.Button = _button2.default;
  _toolbar2.default.Checkbox = _checkbox2.default;

  exports.default = _toolbar2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
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
            this.$parent.$emit(parentEmitEvent, value || newValue);
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
/* 132 */
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(134)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(135),
  /* template */
  __webpack_require__(140),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(136)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./toolbar-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.toolbarItem);
    global.toolbar = mod.exports;
  }
})(this, function (module, exports, _toolbarItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _toolbarItem2 = _interopRequireDefault(_toolbarItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-toolbar';
  var EVENT_CLICK = 'click';
  var EVENT_MORE_CLICK = 'more-click';

  exports.default = {
    name: COMPONENT_NAME,
    components: {
      CubeToolbarItem: _toolbarItem2.default
    },
    props: {
      actions: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      moreActions: {
        type: Array
      }
    },
    data: function data() {
      return {
        showMore: false
      };
    },

    computed: {
      basicActions: function basicActions() {
        var basicActions = this.actions.slice();
        this.moreActions && basicActions.push({
          icon: 'cubeic-more',
          $cubeMore: true
        });
        return basicActions;
      }
    },
    methods: {
      itemClick: function itemClick(action) {
        if (action.$cubeMore) {
          this.showMore = !this.showMore;
          this.$emit(EVENT_MORE_CLICK, this.showMore);
        } else {
          this.$emit(EVENT_CLICK, action);
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(137)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(139),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(33), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../button/button'), require('../checkbox/checkbox'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.button, global.checkbox);
    global.toolbarItem = mod.exports;
  }
})(this, function (module, exports, _button, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _button2 = _interopRequireDefault(_button);

  var _checkbox2 = _interopRequireDefault(_checkbox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-toolbar-item';

  exports.default = {
    name: COMPONENT_NAME,
    components: {
      CubeButton: _button2.default,
      CubeCheckbox: _checkbox2.default
    },
    props: {
      action: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "cube-toolbar-item border-right-1px"
  }, [_c('cube-button', {
    attrs: {
      "icon": _vm.action.icon
    }
  }, [(_vm.action.type == 'checkbox') ? _c('cube-checkbox', {
    staticClass: "cube-toolbar-chb",
    attrs: {
      "label": _vm.action.text
    },
    model: {
      value: (_vm.action.checked),
      callback: function($$v) {
        _vm.$set(_vm.action, "checked", $$v)
      },
      expression: "action.checked"
    }
  }) : _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.action.text)
    }
  })], 1), _vm._v(" "), _c('i', {
    staticClass: "cube-toolbar-down"
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-toolbar"
  }, [(_vm.moreActions) ? _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMore),
      expression: "showMore"
    }],
    staticClass: "cube-toolbar-group cube-toolbar-group-more"
  }, _vm._l((_vm.moreActions), function(action, index) {
    return _c('cube-toolbar-item', {
      key: index,
      attrs: {
        "action": action
      },
      nativeOn: {
        "click": function($event) {
          _vm.itemClick(action)
        }
      }
    })
  })) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "cube-toolbar-group"
  }, _vm._l((_vm.basicActions), function(action, index) {
    return _c('cube-toolbar-item', {
      key: index,
      attrs: {
        "action": action
      },
      nativeOn: {
        "click": function($event) {
          _vm.itemClick(action)
        }
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(142), __webpack_require__(78)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/tab-bar/tab-bar.vue'), require('../../components/tab-bar/tab.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.tabBar, global.tab);
    global.index = mod.exports;
  }
})(this, function (module, exports, _tabBar, _tab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _tabBar2 = _interopRequireDefault(_tabBar);

  var _tab2 = _interopRequireDefault(_tab);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _tabBar2.default.install = function (Vue) {
    Vue.component(_tabBar2.default.name, _tabBar2.default);
    Vue.component(_tab2.default.name, _tab2.default);
  };

  _tabBar2.default.Tab = _tab2.default;

  exports.default = _tabBar2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(143)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(172),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(8), __webpack_require__(1), __webpack_require__(78)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/dom'), require('../../common/helpers/util'), require('./tab.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.dom, global.util, global.tab);
    global.tabBar = mod.exports;
  }
})(this, function (module, exports, _dom, _util, _tab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _tab2 = _interopRequireDefault(_tab);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-tab-bar';

  var EVENT_INPUT = 'input';
  var EVENT_CHANGE = 'change';
  var EVENT_CLICK = 'click';

  var TRANSFORM = (0, _dom.prefixStyle)('transform');
  var TRANSITION = (0, _dom.prefixStyle)('transition');

  exports.default = {
    name: COMPONENT_NAME,
    components: {
      CubeTab: _tab2.default
    },
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      inline: {
        type: Boolean,
        default: false
      },
      showSlider: {
        type: Boolean,
        default: false
      },
      useTransition: {
        type: Boolean,
        default: true
      }
    },
    created: function created() {
      this.tabs = [];
    },
    mounted: function mounted() {
      this._updateSliderStyle();
    },

    methods: {
      addTab: function addTab(tab) {
        this.tabs.push(tab);
      },
      removeTab: function removeTab(tab) {
        var index = this.tabs.indexOf(tab);
        if (index > -1) this.tabs.splice(index, 1);
      },
      trigger: function trigger(label) {
        var _this = this;

        this.$emit(EVENT_CLICK, label);

        if (label !== this.value) {
          var changedEvents = [EVENT_INPUT, EVENT_CHANGE];
          changedEvents.forEach(function (eventType) {
            _this.$emit(eventType, label);
          });
        }
      },
      _updateSliderStyle: function _updateSliderStyle() {
        var _this2 = this;

        if (!this.showSlider) return;
        var slider = this.$refs.slider;
        this.$nextTick(function () {
          var _getSliderWidthAndInd = _this2._getSliderWidthAndIndex(),
              width = _getSliderWidthAndInd.width,
              index = _getSliderWidthAndInd.index;

          slider.style.width = width + 'px';
          _this2.setSliderTransform(_this2._getOffsetLeft(index));
        });
      },
      setSliderTransform: function setSliderTransform(offset) {
        var slider = this.$refs.slider;
        if (typeof offset === 'number') {
          offset = offset + 'px';
        }
        if (slider) {
          if (this.useTransition) slider.style[TRANSITION] = 'all 0.2s linear';
          slider.style[TRANSFORM] = 'translateX(' + offset + ') translateZ(0)';
        }
      },
      _getSliderWidthAndIndex: function _getSliderWidthAndIndex() {
        var _this3 = this;

        var width = 0;
        var index = 0;
        if (this.tabs.length > 0) {
          index = (0, _util.findIndex)(this.tabs, function (tab) {
            return tab.label === _this3.value;
          });
          width = this.tabs[index].$el.clientWidth;
        }
        return {
          width: width,
          index: index
        };
      },
      _getOffsetLeft: function _getOffsetLeft(index) {
        var offsetLeft = 0;
        this.tabs.forEach(function (tab, i) {
          if (i < index) offsetLeft += tab.$el.clientWidth;
        });
        return offsetLeft;
      }
    },
    watch: {
      value: function value() {
        this._updateSliderStyle();
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(53);
module.exports = __webpack_require__(54).f('iterator');


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45);
var defined = __webpack_require__(43);
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
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(76);
var descriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(52);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(20)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(21);
var getKeys = __webpack_require__(19);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(10).document;
module.exports = document && document.documentElement;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(35);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(156);
var step = __webpack_require__(157);
var Iterators = __webpack_require__(24);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(74)(Array, 'Array', function (iterated, kind) {
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
/* 156 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(10);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(15);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(75);
var META = __webpack_require__(161).KEY;
var $fails = __webpack_require__(22);
var shared = __webpack_require__(47);
var setToStringTag = __webpack_require__(52);
var uid = __webpack_require__(36);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(54);
var wksDefine = __webpack_require__(55);
var enumKeys = __webpack_require__(162);
var isArray = __webpack_require__(163);
var anObject = __webpack_require__(21);
var isObject = __webpack_require__(28);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(49);
var createDesc = __webpack_require__(29);
var _create = __webpack_require__(76);
var gOPNExt = __webpack_require__(164);
var $GOPD = __webpack_require__(165);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(19);
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
  __webpack_require__(77).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(30).f = $propertyIsEnumerable;
  __webpack_require__(56).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(51)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(36)('meta');
var isObject = __webpack_require__(28);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(22)(function () {
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(56);
var pIE = __webpack_require__(30);
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(44);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13);
var gOPN = __webpack_require__(77).f;
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(30);
var createDesc = __webpack_require__(29);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(49);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(72);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 166 */
/***/ (function(module, exports) {



/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('asyncIterator');


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('observable');


/***/ }),
/* 169 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 170 */
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
    global.tab = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-tab';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      icon: {
        type: String,
        default: ''
      }
    },
    mounted: function mounted() {
      this.$parent.addTab(this);
    },
    destroyed: function destroyed() {
      this.$parent.removeTab(this);
    },

    computed: {
      isActive: function isActive() {
        return this.$parent.value === this.label;
      }
    },
    methods: {
      handleClick: function handleClick(item) {
        this.$parent.trigger(this.label);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-tab",
    class: {
      'cube-tab_active': _vm.isActive
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("icon", [_c('i', {
    class: _vm.icon
  })]), _vm._v(" "), _vm._t("default", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.label)
    }
  })])], 2)
},staticRenderFns: []}

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-tab-bar",
    class: {
      'cube-tab-bar_inline': _vm.inline
    }
  }, [_vm._t("default", _vm._l((_vm.data), function(item, index) {
    return _c('cube-tab', {
      key: item.label,
      attrs: {
        "label": item.label,
        "icon": item.icon
      }
    })
  })), _vm._v(" "), (_vm.showSlider) ? _c('div', {
    ref: "slider",
    staticClass: "cube-tab-bar-slider"
  }) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(174), __webpack_require__(79)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/tab-panels/tab-panels.vue'), require('../../components/tab-panels/tab-panel.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.tabPanels, global.tabPanel);
    global.index = mod.exports;
  }
})(this, function (module, exports, _tabPanels, _tabPanel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _tabPanels2 = _interopRequireDefault(_tabPanels);

  var _tabPanel2 = _interopRequireDefault(_tabPanel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _tabPanels2.default.install = function (Vue) {
    Vue.component(_tabPanels2.default.name, _tabPanels2.default);
    Vue.component(_tabPanel2.default.name, _tabPanel2.default);
  };

  _tabPanels2.default.Panel = _tabPanel2.default;

  exports.default = _tabPanels2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(175)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(176),
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
/* 175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(79), __webpack_require__(1), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./tab-panel.vue'), require('../../common/helpers/util'), require('../../common/helpers/dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.tabPanel, global.util, global.dom);
    global.tabPanels = mod.exports;
  }
})(this, function (module, exports, _tabPanel, _util, _dom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _tabPanel2 = _interopRequireDefault(_tabPanel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TRANSFORM = (0, _dom.prefixStyle)('transform');

  var COMPONENT_NAME = 'cube-tab-panels';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: [String, Number]
      },
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    created: function created() {
      this.panels = [];
    },
    mounted: function mounted() {
      this._move(this.value);
    },

    methods: {
      _move: function _move(label) {
        var curIndex = (0, _util.findIndex)(this.panels, function (panel) {
          return panel.label === label;
        });
        var panelsGroup = this.$refs.panelsGroup;
        var distance = -(curIndex * 100);
        panelsGroup.style[TRANSFORM] = 'translateX(' + distance + '%)';
      },
      addPanel: function addPanel(panel) {
        this.panels.push(panel);
      },
      removePanel: function removePanel(panel) {
        var index = this.panels.indexOf(panel);
        if (index > -1) this.panels.splice(index, 1);
      }
    },
    watch: {
      value: function value(newV) {
        this._move(newV);
      }
    },
    components: { TabPanel: _tabPanel2.default }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 178 */
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
    global.tabPanel = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-tab-panel';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      }
    },
    mounted: function mounted() {
      this.$parent.addPanel(this);
    },
    destroyed: function destroyed() {
      this.$parent.removePanel(this);
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-tab-panel"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "panels",
    staticClass: "cube-tab-panels"
  }, [_c('div', {
    ref: "panelsGroup",
    staticClass: "cube-tab-panels-group"
  }, [_vm._t("default", _vm._l((_vm.data), function(item, index) {
    return _c('cube-tab-panel', {
      key: item.label,
      attrs: {
        "label": item.label
      }
    }, [_vm._v("\n        " + _vm._s(item.label) + "\n      ")])
  }))], 2)])
},staticRenderFns: []}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/checkbox/checkbox.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.checkbox);
    global.index = mod.exports;
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

  _checkbox2.default.install = function (Vue) {
    Vue.component(_checkbox2.default.name, _checkbox2.default);
  };

  exports.default = _checkbox2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(23), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/checkbox/checkbox.vue'), require('../../components/checkbox-group/checkbox-group.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.checkbox, global.checkboxGroup);
    global.index = mod.exports;
  }
})(this, function (module, exports, _checkbox, _checkboxGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _checkbox2 = _interopRequireDefault(_checkbox);

  var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _checkboxGroup2.default.install = function (Vue) {
    Vue.component(_checkbox2.default.name, _checkbox2.default);
    Vue.component(_checkboxGroup2.default.name, _checkboxGroup2.default);
  };

  _checkboxGroup2.default.Checkbox = _checkbox2.default;

  exports.default = _checkboxGroup2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 185 */
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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(81), __webpack_require__(57)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/radio/radio-group.vue'), require('../../components/radio/radio.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.radioGroup, global.radio);
    global.index = mod.exports;
  }
})(this, function (module, exports, _radioGroup, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _radioGroup2 = _interopRequireDefault(_radioGroup);

  var _radio2 = _interopRequireDefault(_radio);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _radioGroup2.default.install = function (Vue) {
    Vue.component(_radioGroup2.default.name, _radioGroup2.default);
    Vue.component(_radio2.default.name, _radio2.default);
  };

  _radioGroup2.default.Radio = _radio2.default;

  exports.default = _radioGroup2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 187 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(57)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      value: [String, Number],
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
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
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
      value: [String, Number],
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
        if (typeof value === 'number') {
          newV = Number(newV);
        }
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
/* 191 */
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
/* 192 */
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
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(82)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/input/input.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.input);
    global.index = mod.exports;
  }
})(this, function (module, exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _input2 = _interopRequireDefault(_input);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _input2.default.install = function (Vue) {
    Vue.component(_input2.default.name, _input2.default);
  };

  exports.default = _input2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 194 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign);
    global.input = mod.exports;
  }
})(this, function (module, exports, _assign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-input';
  var EVENT_INPUT = 'input';
  var EVENT_CHANGE = 'change';
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
        return this.clearable && this.inputValue && !this.readonly && !this.disabled;
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

      eye: {
        handler: function handler() {
          this.formateEye();
        },

        immediate: true
      }
    },
    methods: {
      changeHander: function changeHander(e) {
        this.$emit(EVENT_CHANGE, e);
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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(197);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(198) });


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(56);
var pIE = __webpack_require__(30);
var toObject = __webpack_require__(35);
var IObject = __webpack_require__(69);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(22)(function () {
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
/* 199 */
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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(83)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/textarea/textarea.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.textarea);
    global.index = mod.exports;
  }
})(this, function (module, exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _textarea2 = _interopRequireDefault(_textarea);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _textarea2.default.install = function (Vue) {
    Vue.component(_textarea2.default.name, _textarea2.default);
  };

  exports.default = _textarea2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 201 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign);
    global.textarea = mod.exports;
  }
})(this, function (module, exports, _assign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-textarea';
  var EVENT_INPUT = 'input';

  var DEFAULT_INDICATOR = {
    negative: true,
    remain: true
  };

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
      },
      indicator: {
        type: [Boolean, Object],
        default: true
      }
    },
    computed: {
      indicatorConf: function indicatorConf() {
        var indicator = this.indicator;
        if (typeof indicator === 'boolean') {
          indicator = {};
        }
        return (0, _assign2.default)({}, DEFAULT_INDICATOR, indicator);
      },
      count: function count() {
        return this.textareaValue.length;
      },
      remain: function remain() {
        var diff = this.maxlength - this.count;
        if (!this.indicatorConf.negative && diff < 0) {
          diff = 0;
        }
        return diff;
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
/* 203 */
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
  }, 'textarea', _vm.$props, false)), _vm._v(" "), (_vm.indicator) ? _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.expanded),
      expression: "expanded"
    }],
    staticClass: "cube-textarea-indicator"
  }, [_vm._v(_vm._s(_vm.indicatorConf.remain ? _vm.remain : _vm.count))]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(17), __webpack_require__(87), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/picker/picker.vue'), require('../../components/select/select.vue'), require('../picker/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.picker, global.select, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _picker, _select, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _picker2 = _interopRequireDefault(_picker);

  var _select2 = _interopRequireDefault(_select);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _select2.default.install = function (Vue) {
    Vue.component(_picker2.default.name, _picker2.default);
    Vue.component(_select2.default.name, _select2.default);
    (0, _api2.default)(Vue, _picker2.default);
  };

  _select2.default.Picker = _picker2.default;

  exports.default = _select2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 205 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(58), __webpack_require__(40), __webpack_require__(25), __webpack_require__(2), __webpack_require__(6), __webpack_require__(86), __webpack_require__(31)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/toConsumableArray'), require('better-scroll'), require('../popup/popup.vue'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'), require('../../common/mixins/basic-picker'), require('../../common/mixins/picker'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.toConsumableArray, global.betterScroll, global.popup, global.visibility, global.popup, global.basicPicker, global.picker);
    global.picker = mod.exports;
  }
})(this, function (module, exports, _toConsumableArray2, _betterScroll, _popup, _visibility, _popup3, _basicPicker, _picker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  var _betterScroll2 = _interopRequireDefault(_betterScroll);

  var _popup2 = _interopRequireDefault(_popup);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup4 = _interopRequireDefault(_popup3);

  var _basicPicker2 = _interopRequireDefault(_basicPicker);

  var _picker2 = _interopRequireDefault(_picker);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-picker';

  var EVENT_SELECT = 'select';
  var EVENT_VALUE_CHANGE = 'value-change';
  var EVENT_CANCEL = 'cancel';
  var EVENT_CHANGE = 'change';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup4.default, _basicPicker2.default, _picker2.default],
    props: {
      pending: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        pickerData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex
      };
    },
    created: function created() {
      this.pickerSelectedVal = [];
      if (!this.pickerSelectedIndex.length) {
        this.pickerSelectedIndex = [];
        for (var i = 0; i < this.pickerData.length; i++) {
          this.pickerSelectedIndex[i] = 0;
        }
      }
    },

    methods: {
      confirm: function confirm() {
        if (!this._canConfirm()) {
          return;
        }
        this.hide();

        var changed = false;
        var pickerSelectedText = [];

        var dataLength = this.pickerData.length;
        var selectedValLength = this.pickerSelectedVal.length;

        if (selectedValLength !== dataLength) {
          if (selectedValLength > dataLength) {
            this.pickerSelectedVal.splice(dataLength);
            this.pickerSelectedIndex.splice(dataLength);
          }
          changed = true;
        }

        for (var i = 0; i < dataLength; i++) {
          var index = this.wheels[i].getSelectedIndex();
          this.pickerSelectedIndex[i] = index;

          var value = null;
          var text = '';
          if (this.pickerData[i].length) {
            value = this.pickerData[i][index][this.valueKey];
            text = this.pickerData[i][index][this.textKey];
          }
          if (this.pickerSelectedVal[i] !== value) {
            changed = true;
          }
          this.pickerSelectedVal[i] = value;
          pickerSelectedText[i] = text;
        }

        this.$emit(EVENT_SELECT, this.pickerSelectedVal, this.pickerSelectedIndex, pickerSelectedText);

        if (changed) {
          this.$emit(EVENT_VALUE_CHANGE, this.pickerSelectedVal, this.pickerSelectedIndex, pickerSelectedText);
        }
      },
      maskClick: function maskClick() {
        this.maskClosable && this.cancel();
      },
      cancel: function cancel() {
        this.hide();
        this.$emit(EVENT_CANCEL);
      },
      show: function show() {
        var _this = this;

        if (this.isVisible) {
          return;
        }

        this.isVisible = true;
        if (!this.wheels || this.dirty) {
          this.$nextTick(function () {
            _this.wheels = _this.wheels || [];
            var wheelWrapper = _this.$refs.wheelWrapper;
            for (var i = 0; i < _this.pickerData.length; i++) {
              _this._createWheel(wheelWrapper, i).enable();
              _this.wheels[i].wheelTo(_this.pickerSelectedIndex[i]);
            }
            _this.dirty && _this._destroyExtraWheels();
            _this.dirty = false;
          });
        } else {
          for (var i = 0; i < this.pickerData.length; i++) {
            this.wheels[i].enable();
            this.wheels[i].wheelTo(this.pickerSelectedIndex[i]);
          }
        }
      },
      hide: function hide() {
        if (!this.isVisible) {
          return;
        }
        this.isVisible = false;

        for (var i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].disable();
        }
      },
      setData: function setData(data, selectedIndex) {
        var _this2 = this;

        this.pickerSelectedIndex = selectedIndex ? [].concat((0, _toConsumableArray3.default)(selectedIndex)) : [];
        this.pickerData = data.slice();
        if (this.isVisible) {
          this.$nextTick(function () {
            var wheelWrapper = _this2.$refs.wheelWrapper;
            _this2.pickerData.forEach(function (item, i) {
              _this2._createWheel(wheelWrapper, i);
              _this2.wheels[i].wheelTo(_this2.pickerSelectedIndex[i]);
            });
            _this2._destroyExtraWheels();
          });
        } else {
          this.dirty = true;
        }
      },
      refill: function refill(datas) {
        var _this3 = this;

        var ret = [];
        if (!datas.length) {
          return ret;
        }
        datas.forEach(function (data, index) {
          ret[index] = _this3.refillColumn(index, data);
        });
        return ret;
      },
      refillColumn: function refillColumn(index, data) {
        var _this4 = this;

        var wheelWrapper = this.$refs.wheelWrapper;
        var scroll = wheelWrapper.children[index].querySelector('.cube-picker-wheel-scroll');
        var wheel = this.wheels ? this.wheels[index] : false;
        var dist = 0;
        if (scroll && wheel) {
          var oldData = this.pickerData[index];
          this.$set(this.pickerData, index, data);
          var selectedIndex = wheel.getSelectedIndex();
          if (oldData.length) {
            var oldValue = oldData[selectedIndex][this.valueKey];
            for (var i = 0; i < data.length; i++) {
              if (data[i][this.valueKey] === oldValue) {
                dist = i;
                break;
              }
            }
          }
          this.pickerSelectedIndex[index] = dist;
          this.$nextTick(function () {
            wheel = _this4._createWheel(wheelWrapper, index);
            wheel.wheelTo(dist);
          });
        }
        return dist;
      },
      scrollTo: function scrollTo(index, dist) {
        var wheel = this.wheels[index];
        this.pickerSelectedIndex[index] = dist;
        wheel.wheelTo(dist);
      },
      refresh: function refresh() {
        var _this5 = this;

        this.$nextTick(function () {
          _this5.wheels.forEach(function (wheel) {
            wheel.refresh();
          });
        });
      },
      _createWheel: function _createWheel(wheelWrapper, i) {
        var _this6 = this;

        if (!this.wheels[i]) {
          var wheel = this.wheels[i] = new _betterScroll2.default(wheelWrapper.children[i], {
            wheel: {
              selectedIndex: this.pickerSelectedIndex[i] || 0,
              wheelWrapperClass: 'cube-picker-wheel-scroll',
              wheelItemClass: 'cube-picker-wheel-item'
            },
            swipeTime: this.swipeTime,
            observeDOM: false
          });
          wheel.on('scrollEnd', function () {
            _this6.$emit(EVENT_CHANGE, i, wheel.getSelectedIndex());
          });
        } else {
          this.wheels[i].refresh();
        }
        return this.wheels[i];
      },
      _destroyExtraWheels: function _destroyExtraWheels() {
        var dataLength = this.pickerData.length;
        if (this.wheels.length > dataLength) {
          var extraWheels = this.wheels.splice(dataLength);
          extraWheels.forEach(function (wheel) {
            wheel.destroy();
          });
        }
      },
      _canConfirm: function _canConfirm() {
        return !this.pending && this.wheels.every(function (wheel) {
          return !wheel.isInTransition;
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.wheels && this.wheels.forEach(function (wheel) {
        wheel.destroy();
      });
      this.wheels = null;
    },

    components: {
      CubePopup: _popup2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(209);
module.exports = __webpack_require__(3).Array.from;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(71);
var $export = __webpack_require__(14);
var toObject = __webpack_require__(35);
var call = __webpack_require__(210);
var isArrayIter = __webpack_require__(211);
var toLength = __webpack_require__(70);
var createProperty = __webpack_require__(212);
var getIterFn = __webpack_require__(84);

$export($export.S + $export.F * !__webpack_require__(213)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(21);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(24);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(29);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 214 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(50), __webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 216 */
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
      "click": _vm.maskClick
    }
  }, [_vm._t("mask")], 2), _vm._v(" "), _c('div', {
    staticClass: "cube-popup-container",
    class: _vm.containerClass
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
/* 217 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "cube-picker-fade"
    }
  }, [_c('cube-popup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    attrs: {
      "type": "picker",
      "mask": true,
      "center": false,
      "z-index": _vm.zIndex
    },
    on: {
      "touchmove": function($event) {
        $event.preventDefault();
      },
      "mask-click": _vm.maskClick
    }
  }, [_c('transition', {
    attrs: {
      "name": "cube-picker-move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    staticClass: "cube-picker-panel cube-safe-area-pb",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "cube-picker-choose border-bottom-1px"
  }, [_c('span', {
    staticClass: "cube-picker-cancel",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.cancelTxt))]), _vm._v(" "), _c('span', {
    staticClass: "cube-picker-confirm",
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm.confirmTxt))]), _vm._v(" "), _c('div', {
    staticClass: "cube-picker-title-group"
  }, [_c('h1', {
    staticClass: "cube-picker-title",
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _vm._v(" "), (_vm.subtitle) ? _c('h2', {
    staticClass: "cube-picker-subtitle",
    domProps: {
      "innerHTML": _vm._s(_vm.subtitle)
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "cube-picker-content"
  }, [_c('i', {
    staticClass: "border-bottom-1px"
  }), _vm._v(" "), _c('i', {
    staticClass: "border-top-1px"
  }), _vm._v(" "), _c('div', {
    ref: "wheelWrapper",
    staticClass: "cube-picker-wheel-wrapper"
  }, _vm._l((_vm.pickerData), function(data, index) {
    return _c('div', {
      key: index
    }, [_c('ul', {
      staticClass: "cube-picker-wheel-scroll"
    }, _vm._l((data), function(item, index) {
      return _c('li', {
        key: index,
        staticClass: "cube-picker-wheel-item",
        domProps: {
          "innerHTML": _vm._s(item[_vm.textKey])
        }
      })
    }))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "cube-picker-footer"
  })])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 218 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(16), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/typeof'), require('../../common/helpers/util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._typeof, global.util);
    global.select = mod.exports;
  }
})(this, function (module, exports, _typeof2, _util) {
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
      valueIndex: function valueIndex() {
        var val = this.value;
        var index = (0, _util.findIndex)(this.adaptOptions[0], function (item) {
          return item.value === val;
        });
        this.picker && this.picker.setData(this.adaptOptions, index !== -1 ? [index] : [0]);

        return index;
      },
      selectedIndex: function selectedIndex() {
        return this.valueIndex !== -1 ? [this.valueIndex] : [0];
      },
      selectedText: function selectedText() {
        return this.valueIndex !== -1 ? this.adaptOptions[0][this.valueIndex].text : '';
      }
    },
    created: function created() {
      this.picker = this.$createPicker({
        $props: {
          title: 'title',
          data: 'adaptOptions',
          selectedIndex: 'selectedIndex',
          cancelTxt: 'cancelTxt',
          confirmTxt: 'confirmTxt'
        },
        $events: {
          select: 'selectHandler',
          cancel: this.hided
        }
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
      selectHandler: function selectHandler(selectedVal, selectedIndex, selectedText) {
        this.hided();
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
/* 220 */
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
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(9), __webpack_require__(16), __webpack_require__(222), __webpack_require__(223)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/keys'), require('babel-runtime/helpers/typeof'), require('./instantiate-component'), require('./parse-render-data'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global._typeof, global.instantiateComponent, global.parseRenderData);
    global.createApiComponent = mod.exports;
  }
})(this, function (module, exports, _keys, _typeof2, _instantiateComponent, _parseRenderData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createAPIComponent;

  var _keys2 = _interopRequireDefault(_keys);

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

  var _parseRenderData2 = _interopRequireDefault(_parseRenderData);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function createAPIComponent(Vue, Component) {
    var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var single = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var singleComponent = void 0;
    var singleInstance = void 0;
    var beforeFns = [];
    var api = {
      before: function before(fn) {
        beforeFns.push(fn);
      },
      open: function open(data, renderFn, options) {
        if (typeof renderFn !== 'function' && options === undefined) {
          options = renderFn;
          renderFn = null;
        }
        var instanceSingle = options;
        if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === 'object') {
          instanceSingle = options.single;
          delete options.single;
        }

        beforeFns.forEach(function (before) {
          before(data, renderFn, instanceSingle);
        });
        if (instanceSingle === undefined) {
          instanceSingle = single;
        }
        if (instanceSingle && singleComponent) {
          singleInstance.updateRenderData(data, renderFn);

          singleComponent._createAPI_reuse = true;
          singleInstance.$forceUpdate();
          var oldVisible = singleComponent.visible;
          singleComponent.$nextTick(function () {
            singleComponent._createAPI_reuse = false;

            if (oldVisible && singleComponent.visible) {
              singleComponent.show();
            }
          });

          return singleComponent;
        }
        var component = (0, _instantiateComponent2.default)(Vue, Component, data, renderFn, options);
        var instance = component.$parent;
        var originRemove = component.remove;

        component.remove = function () {
          if (instance.__cube__destroyed) {
            return;
          }
          originRemove && originRemove.call(this);
          instance.destroy();
          instance.__cube__destroyed = true;
          if (instanceSingle) {
            singleComponent = null;
            singleInstance = null;
          }
        };
        var originShow = component.show;
        component.show = function () {
          originShow && originShow.call(this);
          return this;
        };
        var originHide = component.hide;
        component.hide = function () {
          originHide && originHide.call(this);
          return this;
        };
        if (instanceSingle) {
          singleComponent = component;
          singleInstance = instance;
        }

        return component;
      },
      create: function create(config, renderFn, single) {
        var ownerInstance = this;
        var isInVueInstance = !!ownerInstance.$on;
        var renderData = (0, _parseRenderData2.default)(config, events);

        cancelWatchProps();
        processProps();
        processEvents();
        process$();

        if (typeof renderFn !== 'function' && single === undefined) {
          single = renderFn;
          renderFn = null;
        }

        var options = {
          single: single
        };
        if (isInVueInstance) {
          options.parent = ownerInstance;
        }

        var component = api.open(renderData, renderFn, options);
        if (component.__cube__parent !== ownerInstance) {
          component.__cube__parent = ownerInstance;
          var beforeDestroy = function beforeDestroy() {
            cancelWatchProps();
            if (component.__cube__parent === ownerInstance) {
              component.remove();
            }
            ownerInstance.$off('hook:beforeDestroy', beforeDestroy);
            component.__cube__parent = null;
          };
          isInVueInstance && ownerInstance.$on('hook:beforeDestroy', beforeDestroy);
        }
        return component;

        function processProps() {
          var $props = renderData.props.$props;
          if ($props) {
            delete renderData.props.$props;

            var watchKeys = [];
            var watchPropKeys = [];
            (0, _keys2.default)($props).forEach(function (key) {
              var propKey = $props[key];
              if (typeof propKey === 'string' && propKey in ownerInstance) {
                renderData.props[key] = ownerInstance[propKey];
                watchKeys.push(key);
                watchPropKeys.push(propKey);
              } else {
                renderData.props[key] = propKey;
              }
            });
            if (isInVueInstance) {
              ownerInstance.__createAPI_watcher = ownerInstance.$watch(function () {
                var props = {};
                watchKeys.forEach(function (key, i) {
                  props[key] = ownerInstance[watchPropKeys[i]];
                });
                return props;
              }, function (newProps) {
                component && component.$updateProps(newProps);
              });
            }
          }
        }

        function processEvents() {
          var $events = renderData.props.$events;
          if ($events) {
            delete renderData.props.$events;

            (0, _keys2.default)($events).forEach(function (event) {
              var eventHandler = $events[event];
              if (typeof eventHandler === 'string') {
                eventHandler = ownerInstance[eventHandler];
              }
              renderData.on[event] = eventHandler;
            });
          }
        }

        function process$() {
          var props = renderData.props;
          (0, _keys2.default)(props).forEach(function (prop) {
            if (prop.charAt(0) === '$') {
              renderData[prop.slice(1)] = props[prop];
              delete props[prop];
            }
          });
        }

        function cancelWatchProps() {
          if (ownerInstance.__createAPI_watcher) {
            ownerInstance.__createAPI_watcher();
            ownerInstance.__createAPI_watcher = null;
          }
        }
      }
    };
    return api;
  }
  module.exports = exports['default'];
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(5), __webpack_require__(41)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("babel-runtime/core-js/object/assign"), require("babel-runtime/helpers/extends"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global._extends);
    global.instantiateComponent = mod.exports;
  }
})(this, function (module, exports, _assign, _extends2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = instantiateComponent;

  var _assign2 = _interopRequireDefault(_assign);

  var _extends3 = _interopRequireDefault(_extends2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function instantiateComponent(Vue, Component, data, renderFn, options) {
    var renderData = void 0;
    var childrenRenderFn = void 0;

    if (options === undefined) {
      options = {};
    }

    var instance = new Vue((0, _extends3.default)({}, options, {
      render: function render(createElement) {
        var children = childrenRenderFn && childrenRenderFn(createElement);
        if (children && !Array.isArray(children)) {
          children = [children];
        }

        return createElement(Component, (0, _extends3.default)({}, renderData), children || []);
      },

      methods: {
        init: function init() {
          document.body.appendChild(this.$el);
        },
        destroy: function destroy() {
          this.$destroy();
          document.body.removeChild(this.$el);
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
      (0, _assign2.default)(renderData.props, props);
      instance.$forceUpdate();
    };
    return component;
  }
  module.exports = exports["default"];
});

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(41), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/extends'), require('../lang/string'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._extends, global.string);
    global.parseRenderData = mod.exports;
  }
})(this, function (module, exports, _extends2, _string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = parseRenderData;

  var _extends3 = _interopRequireDefault(_extends2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function parseRenderData() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    events = parseEvents(events);
    var props = (0, _extends3.default)({}, data);
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
      parsedEvents[name] = (0, _string.camelize)('on-' + name);
    });
    return parsedEvents;
  }
  module.exports = exports['default'];
});

/***/ }),
/* 224 */
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
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(88)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/switch/switch.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._switch);
    global.index = mod.exports;
  }
})(this, function (module, exports, _switch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _switch2 = _interopRequireDefault(_switch);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _switch2.default.install = function (Vue) {
    Vue.component(_switch2.default.name, _switch2.default);
  };

  exports.default = _switch2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 226 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 227 */
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
/* 228 */
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
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(89), __webpack_require__(90)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/rate/rate.vue'), require('../../components/rate/rate-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.rate, global.rateItem);
    global.index = mod.exports;
  }
})(this, function (module, exports, _rate, _rateItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _rate2 = _interopRequireDefault(_rate);

  var _rateItem2 = _interopRequireDefault(_rateItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _rate2.default.install = function (Vue) {
    Vue.component(_rate2.default.name, _rate2.default);
    Vue.component(_rateItem2.default.name, _rateItem2.default);
  };
  _rate2.default.Item = _rateItem2.default;
  exports.default = _rate2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 230 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(90)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 233 */
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
/* 234 */
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
/* 235 */
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
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(59), __webpack_require__(60)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/validator/validator.vue'), require('../../common/helpers/validator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.validator, global.validator);
    global.index = mod.exports;
  }
})(this, function (module, exports, _validator, _validator3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _validator2 = _interopRequireDefault(_validator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _validator2.default.install = function (Vue) {
    Vue.component(_validator2.default.name, _validator2.default);
  };

  _validator2.default.addRule = _validator3.addRule;
  _validator2.default.addMessage = _validator3.addMessage;
  _validator2.default.addType = _validator3.addType;
  _validator2.default.setLanguage = _validator3.setLanguage;

  exports.default = _validator2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 237 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(16), __webpack_require__(9), __webpack_require__(1), __webpack_require__(60)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/typeof'), require('babel-runtime/core-js/object/keys'), require('../../common/helpers/util'), require('../../common/helpers/validator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._typeof, global.keys, global.util, global.validator);
    global.validator = mod.exports;
  }
})(this, function (module, exports, _typeof2, _keys, _util, _validator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _keys2 = _interopRequireDefault(_keys);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-validator';
  var EVENT_INPUT = 'input';
  var EVENT_VALIDATING = 'validating';
  var EVENT_VALIDATED = 'validated';
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
      return {
        valid: this.value,
        validated: false,
        msg: '',
        dirty: false,
        validating: false,
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
        return (this.dirty || this.validated) && !this.validating;
      },
      containerClass: function containerClass() {
        var disabled = this.isDisabled;
        if (disabled) {
          return;
        }
        return {
          'cube-validator_invalid': this.invalid,
          'cube-validator_valid': this.valid,
          'cube-validator_validating': this.validating
        };
      }
    },
    watch: {
      value: function value(newVal) {
        this.valid = newVal;
      },
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
      this._validateCount = 0;
      if (!this.isDisabled && this.immediate) {
        this.validate();
      }
    },

    methods: {
      validate: function validate(cb) {
        var promise = (0, _util.cb2PromiseWithResolve)(cb);
        if (promise) {
          cb = promise.resolve;
        }
        if (this.isDisabled) {
          cb && cb(this.valid);
          return promise;
        }
        this._validateCount++;
        var validateCount = this._validateCount;
        var val = this.model;

        var configRules = this.rules;
        var type = configRules.type;
        var allTasks = [];

        var requiredValid = true;
        if (!configRules.required) {
          requiredValid = _validator.rules.required(val, true, type);
        }

        if (requiredValid) {
          var _loop = function _loop(key) {
            var ruleValue = configRules[key];
            var ret = void 0;
            if (typeof ruleValue === 'function') {
              ret = ruleValue(val, configRules[key], type);
            } else {
              ret = !_validator.rules[key] || _validator.rules[key](val, configRules[key], type);
            }
            allTasks.push(function (next) {
              var resolve = function resolve(_ret) {
                next({
                  key: key,
                  valid: _ret === true,
                  ret: _ret
                });
              };
              var reject = function reject(err) {
                next({
                  key: key,
                  valid: false,
                  ret: err
                });
              };
              var resultType = typeof ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(ret);
              if (resultType === 'object' && ret !== null && typeof ret.then === 'function') {
                ret.then(resolve).catch(reject);
              } else if (resultType === 'function') {
                ret(resolve, reject);
              } else {
                next({
                  key: key,
                  valid: ret === true,
                  ret: ret
                });
              }
            });
          };

          for (var key in configRules) {
            _loop(key);
          }
        }
        this._checkTasks(allTasks, validateCount, cb);
        return promise;
      },
      _checkTasks: function _checkTasks(allTasks, validateCount, cb) {
        var _this = this;

        var configRules = this.rules;
        var isValid = true;
        var result = {};
        var sync = true;
        this.validating = true;
        (0, _util.parallel)(allTasks, function (results) {
          if (_this._validateCount !== validateCount) {
            return;
          }
          _this.validating = false;
          results.forEach(function (_ref) {
            var key = _ref.key,
                valid = _ref.valid,
                ret = _ref.ret;

            var msg = _this.messages[key] ? typeof _this.messages[key] === 'function' ? _this.messages[key](ret, valid) : _this.messages[key] : (0, _validator.findMessage)(key, configRules[key], configRules.type, _this.model);
            if (isValid && !valid) {
              isValid = false;
              _this.msg = msg;
            }
            result[key] = {
              valid: valid,
              invalid: !valid,
              message: msg
            };
          });
          if (!sync) {
            _this.$emit(EVENT_VALIDATED, isValid);
          }
          _this._updateModel(isValid, result);
          cb && cb(_this.valid);
        });
        if (this.validating) {
          sync = false;

          this.$emit(EVENT_VALIDATING);
          this.valid = undefined;
          this.$emit(EVENT_INPUT, this.valid);
        }
      },
      _updateModel: function _updateModel(valid, result) {
        this.validated = true;
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
        this._validateCount++;
        this.validating = false;
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
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9), __webpack_require__(16), __webpack_require__(1), __webpack_require__(91)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/keys'), require('babel-runtime/helpers/typeof'), require('../util'), require('./types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.keys, global._typeof, global.util, global.types);
    global.rules = mod.exports;
  }
})(this, function (exports, _keys, _typeof2, _util, _types) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addRule = exports.rules = undefined;

  var _keys2 = _interopRequireDefault(_keys);

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
      var target = val;
      if (target.length === undefined) {
        target = type === 'object' ? (0, _keys2.default)(target) : String(target);
      }
      return target.length === _len;
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
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(16), __webpack_require__(1), __webpack_require__(241), __webpack_require__(242)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 243 */
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
    validating: _vm.validating,
    result: _vm.result
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(92), __webpack_require__(93), __webpack_require__(94)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/upload/upload.vue'), require('../../components/upload/btn.vue'), require('../../components/upload/file.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.upload, global.btn, global.file);
    global.index = mod.exports;
  }
})(this, function (module, exports, _upload, _btn, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _upload2 = _interopRequireDefault(_upload);

  var _btn2 = _interopRequireDefault(_btn);

  var _file2 = _interopRequireDefault(_file);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _upload2.default.install = function (Vue) {
    Vue.component(_upload2.default.name, _upload2.default);
    Vue.component(_btn2.default.name, _btn2.default);
    Vue.component(_file2.default.name, _file2.default);
  };

  _upload2.default.Btn = _btn2.default;
  _upload2.default.File = _file2.default;

  exports.default = _upload2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 245 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(93), __webpack_require__(94), __webpack_require__(253), __webpack_require__(61)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      value: function value(newVal) {
        this.files = newVal;
      },
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
/* 247 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 248 */
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
/* 249 */
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
/* 250 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(61)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 252 */
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
  }, [_vm._v(_vm._s(_vm.fileProgress))])])])], {
    imgStyle: _vm.fileStyle,
    progress: _vm.fileProgress
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(9), __webpack_require__(61)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
        progressInterval = _options$progressInte === undefined ? 100 : _options$progressInte,
        _options$checkSuccess = options.checkSuccess,
        checkSuccess = _options$checkSuccess === undefined ? function () {
      return true;
    } : _options$checkSuccess;


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

      var isSuccess = checkSuccess(response);
      setStatus(isSuccess ? _util.STATUS_SUCCESS : _util.STATUS_ERROR);
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
/* 254 */
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
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(256), __webpack_require__(95), __webpack_require__(96), __webpack_require__(59), __webpack_require__(60)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/form/form.vue'), require('../../components/form/form-group.vue'), require('../../components/form/form-item.vue'), require('../../components/validator/validator.vue'), require('../../common/helpers/validator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.form, global.formGroup, global.formItem, global.validator, global.validator);
    global.index = mod.exports;
  }
})(this, function (module, exports, _form, _formGroup, _formItem, _validator, _validator3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _form2 = _interopRequireDefault(_form);

  var _formGroup2 = _interopRequireDefault(_formGroup);

  var _formItem2 = _interopRequireDefault(_formItem);

  var _validator2 = _interopRequireDefault(_validator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _form2.default.install = function (Vue) {
    Vue.component(_form2.default.name, _form2.default);
    Vue.component(_formGroup2.default.name, _formGroup2.default);
    Vue.component(_formItem2.default.name, _formItem2.default);
    Vue.component(_validator2.default.name, _validator2.default);
  };

  _form2.default.Group = _formGroup2.default;
  _form2.default.Item = _formItem2.default;
  _form2.default.Validator = _validator2.default;

  _validator2.default.addRule = _validator3.addRule;
  _validator2.default.addMessage = _validator3.addMessage;
  _validator2.default.addType = _validator3.addType;
  _validator2.default.setLanguage = _validator3.setLanguage;

  exports.default = _form2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(257)
}
var Component = __webpack_require__(0)(
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(5), __webpack_require__(8), __webpack_require__(1), __webpack_require__(95), __webpack_require__(97), __webpack_require__(98)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('../../common/helpers/dom'), require('../../common/helpers/util'), require('./form-group.vue'), require('./layouts'), require('./mixin'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.dom, global.util, global.formGroup, global.layouts, global.mixin);
    global.form = mod.exports;
  }
})(this, function (module, exports, _assign, _dom, _util, _formGroup, _layouts, _mixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _formGroup2 = _interopRequireDefault(_formGroup);

  var _layouts2 = _interopRequireDefault(_layouts);

  var _mixin2 = _interopRequireDefault(_mixin);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-form';
  var EVENT_SUBMIT = 'submit';
  var EVENT_RESET = 'reset';
  var EVENT_VALIDATE = 'validate';
  var EVENT_VALID = 'valid';
  var EVENT_INVALID = 'invalid';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_mixin2.default],
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
            layout: _layouts2.default.STANDARD
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
      layout: function layout() {
        var options = this.options;
        var layout = options && options.layout || _layouts2.default.STANDARD;
        return layout;
      },
      formClass: function formClass() {
        var invalid = this.invalid;
        var valid = this.valid;
        var layout = this.layout;
        return {
          'cube-form_standard': layout === _layouts2.default.STANDARD,
          'cube-form_groups': this.groups.length > 1,
          'cube-form_validating': this.validating,
          'cube-form_pending': this.pending,
          'cube-form_valid': valid,
          'cube-form_invalid': invalid,
          'cube-form_classic': layout === _layouts2.default.CLASSIC,
          'cube-form_fresh': layout === _layouts2.default.FRESH
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
        (0, _dom.dispatchEvent)(this.$refs.form, 'submit');
      },
      reset: function reset() {
        (0, _dom.dispatchEvent)(this.$refs.form, 'reset');
      },
      submitHandler: function submitHandler(e) {
        var _this = this;

        var submited = function submited(submitResult) {
          if (submitResult) {
            _this.$emit(EVENT_VALID, _this.validity);
            _this.$emit(EVENT_SUBMIT, e, _this.model);
          } else {
            e.preventDefault();
            _this.$emit(EVENT_INVALID, _this.validity);
          }
        };
        if (this.valid === undefined) {
          this._submit(submited);
          if (this.validating || this.pending) {
            e.preventDefault();
          }
        } else {
          submited(this.valid);
        }
      },
      resetHandler: function resetHandler(e) {
        this._reset();
        this.$emit(EVENT_RESET, e);
      },
      _submit: function _submit(cb) {
        var _this2 = this;

        this.validate(function () {
          if (_this2.invalid) {
            if (_this2.options.scrollToInvalidField && _this2.firstInvalidField) {
              _this2.firstInvalidField.$el.scrollIntoView();
            }
          }
          cb && cb(_this2.valid);
        });
      },
      _reset: function _reset() {
        this.fields.forEach(function (fieldComponent) {
          fieldComponent.reset();
        });
        this.setValidity();
        this.setValidating();
        this.setPending();
      },
      validate: function validate(cb) {
        var _this3 = this;

        var promise = (0, _util.cb2PromiseWithResolve)(cb);
        if (promise) {
          cb = promise.resolve;
        }
        var doneCount = 0;
        var len = this.fields.length;
        this.originValid = undefined;
        this.fields.forEach(function (fieldComponent) {
          fieldComponent.validate(function () {
            doneCount++;
            if (doneCount === len) {
              cb && cb(_this3.valid);
            }
          });
        });
        return promise;
      },
      updateValidating: function updateValidating() {
        var validating = this.fields.some(function (fieldComponent) {
          return fieldComponent.validating;
        });
        this.setValidating(validating);
      },
      updatePending: function updatePending() {
        var pending = this.fields.some(function (fieldComponent) {
          return fieldComponent.pending;
        });
        this.setPending(pending);
      },
      setValidating: function setValidating() {
        var validating = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        this.validating = validating;
      },
      setPending: function setPending() {
        var pending = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        this.pending = pending;
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
        this.originValid = valid;
        this.setFirstInvalid(firstInvalidFieldKey);
        this.validatedCount++;
      },
      setFirstInvalid: function setFirstInvalid(key) {
        var _this4 = this;

        if (!key) {
          this.firstInvalidField = null;
          this.firstInvalidFieldIndex = -1;
          return;
        }
        this.fields.some(function (fieldComponent, index) {
          if (fieldComponent.fieldValue.modelKey === key) {
            _this4.firstInvalidField = fieldComponent;
            _this4.firstInvalidFieldIndex = index;
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(96)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(9), __webpack_require__(263), __webpack_require__(1), __webpack_require__(59), __webpack_require__(97), __webpack_require__(267), __webpack_require__(98), __webpack_require__(268)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/keys'), require('./fields/index'), require('../../common/helpers/util'), require('../validator/validator.vue'), require('./layouts'), require('./fields/reset'), require('./mixin'), require('./components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global.index, global.util, global.validator, global.layouts, global.reset, global.mixin, global.components);
    global.formItem = mod.exports;
  }
})(this, function (module, exports, _keys, _index, _util, _validator, _layouts, _reset, _mixin, _components) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _keys2 = _interopRequireDefault(_keys);

  var _validator2 = _interopRequireDefault(_validator);

  var _layouts2 = _interopRequireDefault(_layouts);

  var _mixin2 = _interopRequireDefault(_mixin);

  var _components2 = _interopRequireDefault(_components);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _components2.default.CubeValidator = _validator2.default;

  var COMPONENT_NAME = 'cube-form-item';
  var EVENT_FOCUSIN = 'focusin';
  var EVENT_FOCUSOUT = 'focusout';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_mixin2.default],
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
      var modelValue = modelKey ? this.form.model[modelKey] : null;
      return {
        validatorDisabled: false,
        modelValue: modelValue,
        validatorModel: modelValue
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
          'cube-form-item_validating': this.validating,
          'cube-form-item_pending': this.pending,
          'cube-form-item_valid': this.valid,
          'cube-form-item_invalid': this.invalid
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
        this.updateValidatorModel();
      },
      originValid: function originValid(newVal) {
        this.lastOriginValid = newVal;
      }
    },
    beforeCreate: function beforeCreate() {
      this.form = this.$parent.form;
    },
    created: function created() {
      var _this = this;

      this.form.addField(this);
      this.getValidatorModel = function (modelValue) {
        _this.pending = false;
        return modelValue;
      };
    },
    mounted: function mounted() {
      this.initDebounce();
      this.initFocusEvents();
    },

    methods: {
      initDebounce: function initDebounce() {
        var _this2 = this;

        var debounceTime = this.fieldValue.debounce;
        if (debounceTime === true) {
          debounceTime = 200;
        }
        if (!debounceTime && debounceTime !== 0 || debounceTime < 0 || this.fieldValue.trigger === 'blur') return;
        this.getValidatorModel = (0, _util.debounce)(function (modelValue) {
          _this2.pending = false;
          _this2.validatorModel = modelValue;
          _this2.form.updatePending();
          _this2.asyncSameCheck();
          return modelValue;
        }, debounceTime, false, this.validatorModel);
      },
      asyncSameCheck: function asyncSameCheck() {
        var validator = this.$refs.validator;
        var validatorModel = this.validatorModel;
        if (validator) {
          if (validatorModel === validator.model) {
            validator && validator.validate();
          }
        }
      },
      focusInHandler: function focusInHandler() {
        this.focused = true;
      },
      focusOutHandler: function focusOutHandler() {
        this.focused = false;
        this.updateValidatorModel();
        this.asyncSameCheck();
      },
      initFocusEvents: function initFocusEvents() {
        var _this3 = this;

        if (this.fieldValue.trigger === 'blur') {
          var formItem = this.$refs.formItem;
          formItem.addEventListener(EVENT_FOCUSIN, this.focusInHandler, false);
          formItem.addEventListener(EVENT_FOCUSOUT, this.focusOutHandler, false);
          this.getValidatorModel = function (modelValue) {
            if (_this3.focused) {
              return _this3.validatorModel;
            } else {
              _this3.pending = false;
              _this3.form.updatePending();
              return modelValue;
            }
          };
        }
      },
      removeFocusEvents: function removeFocusEvents() {
        var formItem = this.$refs.formItem;
        formItem.removeEventListener(EVENT_FOCUSIN, this.focusInHandler, false);
        formItem.removeEventListener(EVENT_FOCUSOUT, this.focusOutHandler, false);
      },
      updateValidatorModel: function updateValidatorModel() {
        this.pending = true;
        this.validatorModel = this.getValidatorModel(this.modelValue);
        if (this.pending) {
          this.form.setPending(this.pending);
          this.originValid = undefined;
        }
      },
      validatorChangeHandler: function validatorChangeHandler() {
        if (this.validatorDisabled || this.originValid && this.lastOriginValid) {
          return;
        }
        this.updateValidity();
      },
      validatingHandler: function validatingHandler() {
        this.validating = true;
        this.form.setValidating(true);
      },
      validatedHandler: function validatedHandler() {
        this.validating = false;
        this.form.updateValidating();
      },
      updateValidity: function updateValidity() {
        var validator = this.$refs.validator;
        if (validator) {
          this.form.updateValidity(this.fieldValue.modelKey, validator.valid, validator.result, validator.dirty);
        }
      },
      validate: function validate(cb) {
        var _this4 = this;

        var promise = (0, _util.cb2PromiseWithResolve)(cb);
        if (promise) {
          cb = promise.resolve;
        }
        var validator = this.$refs.validator;
        if (validator) {
          validator.validate(function () {
            _this4.validatorDisabled = true;
            _this4.updateValidity();
            cb && cb();
            _this4.$nextTick(function () {
              _this4.validatorDisabled = false;
            });
          });
        } else {
          cb && cb();
        }
        return promise;
      },
      reset: function reset() {
        var _this5 = this;

        var fieldValue = this.fieldValue;
        if (fieldValue.modelKey) {
          var defValue = (0, _reset.getResetValueByType)(fieldValue.type);
          this.validatorDisabled = true;
          (0, _util.resetTypeValue)(this, 'modelValue', defValue);
          this.$refs.validator && this.$refs.validator.reset();
          this.$nextTick(function () {
            _this5.validatorDisabled = false;
          });
        }
        this.validating = false;
        this.pending = false;
      },
      msgClick: function msgClick() {
        if (this.form.layout !== _layouts2.default.STANDARD) {
          return;
        }

        this.$createToast && this.$createToast({
          type: 'warn',
          txt: this.$refs.validator.msg,
          time: 1000
        }).show();
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.removeFocusEvents();
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(41), __webpack_require__(264)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(33), __webpack_require__(23), __webpack_require__(80), __webpack_require__(82), __webpack_require__(57), __webpack_require__(81), __webpack_require__(89), __webpack_require__(87), __webpack_require__(88), __webpack_require__(83), __webpack_require__(92)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
    ref: "formItem",
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
      "model": _vm.validatorModel,
      "rules": _vm.fieldValue.rules,
      "messages": _vm.fieldValue.messages
    },
    on: {
      "input": _vm.validatorChangeHandler,
      "validating": _vm.validatingHandler,
      "validated": _vm.validatedHandler,
      "msg-click": _vm.msgClick
    },
    model: {
      value: (_vm.originValid),
      callback: function($$v) {
        _vm.originValid = $$v
      },
      expression: "originValid"
    }
  }, [_vm._t("default", [_c(_vm.componentName, _vm._g(_vm._b({
    tag: "component",
    model: {
      value: (_vm.modelValue),
      callback: function($$v) {
        _vm.modelValue = $$v
      },
      expression: "modelValue"
    }
  }, 'component', _vm.fieldValue.props, false), _vm.fieldValue.events))])], 2) : _c('div', {
    staticClass: "cube-form-field"
  }, [_vm._t("default", [_c(_vm.componentName, _vm._g(_vm._b({
    tag: "component",
    model: {
      value: (_vm.modelValue),
      callback: function($$v) {
        _vm.modelValue = $$v
      },
      expression: "modelValue"
    }
  }, 'component', _vm.fieldValue.props, false), _vm.fieldValue.events))])], 2)] : _c('cube-button', _vm._b({}, 'cube-button', _vm.fieldValue.props, false), [_vm._v(_vm._s(_vm.fieldValue.label))])], 2)
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

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(34), __webpack_require__(273), __webpack_require__(277)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/loading/loading.vue'), require('../../components/toast/toast.vue'), require('./api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.loading, global.toast, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _loading, _toast, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _loading2 = _interopRequireDefault(_loading);

  var _toast2 = _interopRequireDefault(_toast);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _toast2.default.install = function (Vue) {
    Vue.component(_loading2.default.name, _loading2.default);
    Vue.component(_toast2.default.name, _toast2.default);
    (0, _api2.default)(Vue, _toast2.default);
  };

  _toast2.default.Loading = _loading2.default;

  exports.default = _toast2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(274)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(275),
  /* template */
  __webpack_require__(276),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 274 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(34), __webpack_require__(25), __webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../loading/loading.vue'), require('../popup/popup.vue'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.loading, global.popup, global.visibility, global.popup);
    global.toast = mod.exports;
  }
})(this, function (module, exports, _loading, _popup, _visibility, _popup3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _loading2 = _interopRequireDefault(_loading);

  var _popup2 = _interopRequireDefault(_popup);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup4 = _interopRequireDefault(_popup3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-toast';

  var EVENT_TIMEOUT = 'timeout';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup4.default],
    props: {
      type: {
        type: String,
        default: 'loading'
      },
      icon: {
        type: String,
        default: ''
      },
      mask: {
        type: Boolean,
        default: false
      },
      txt: {
        type: String,
        default: ''
      },
      time: {
        type: Number,
        default: 3000
      },

      zIndex: {
        type: Number,
        default: 900
      }
    },
    computed: {
      iconClass: function iconClass() {
        var iconClass = {};
        if (this.icon) {
          iconClass[this.icon] = true;
        }
        var classMap = {
          correct: 'cubeic-right',
          error: 'cubeic-wrong',
          warn: 'cubeic-warn'
        };
        var icon = classMap[this.type];
        if (icon) {
          iconClass[icon] = true;
        }
        return iconClass;
      },
      isLoading: function isLoading() {
        return this.type === 'loading';
      }
    },
    methods: {
      maskClick: function maskClick() {
        this.maskClosable && this.hide();
      },
      show: function show() {
        var _this = this;

        this.isVisible = true;
        this.clearTimer();
        this.$nextTick(function () {
          if (_this.time !== 0) {
            _this.timer = setTimeout(function () {
              _this.hide();
              _this.$emit(EVENT_TIMEOUT);
            }, _this.time);
          }
        });
      },
      hide: function hide() {
        this.isVisible = false;
        this.clearTimer();
      },
      clearTimer: function clearTimer() {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    components: {
      CubePopup: _popup2.default,
      CubeLoading: _loading2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "cube-toast-fade"
    }
  }, [_c('cube-popup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    attrs: {
      "type": "toast",
      "z-index": _vm.zIndex,
      "mask": _vm.mask
    },
    on: {
      "mask-click": _vm.maskClick
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isLoading),
      expression: "!isLoading"
    }],
    staticClass: "cube-toast-icon",
    class: _vm.iconClass
  }), _vm._v(" "), _c('cube-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLoading),
      expression: "isLoading"
    }]
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.txt),
      expression: "txt"
    }],
    staticClass: "cube-toast-tip",
    domProps: {
      "innerHTML": _vm._s(_vm.txt)
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
  exports.default = addToast;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addToast(Vue, Toast) {
    (0, _createApi2.default)(Vue, Toast, ['timeout'], true);
  }
  module.exports = exports['default'];
});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(17), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/picker/picker.vue'), require('./api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.picker, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _picker, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _picker2 = _interopRequireDefault(_picker);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _picker2.default.install = function (Vue) {
    Vue.component(_picker2.default.name, _picker2.default);
    (0, _api2.default)(Vue, _picker2.default);
  };

  exports.default = _picker2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(17), __webpack_require__(42), __webpack_require__(62), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/picker/picker.vue'), require('../../components/cascade-picker/cascade-picker.vue'), require('./api'), require('../picker/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.picker, global.cascadePicker, global.api, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _picker, _cascadePicker, _api, _api3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _picker2 = _interopRequireDefault(_picker);

  var _cascadePicker2 = _interopRequireDefault(_cascadePicker);

  var _api2 = _interopRequireDefault(_api);

  var _api4 = _interopRequireDefault(_api3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _cascadePicker2.default.install = function (Vue) {
    Vue.component(_picker2.default.name, _picker2.default);
    Vue.component(_cascadePicker2.default.name, _cascadePicker2.default);
    (0, _api4.default)(Vue, _picker2.default);
    (0, _api2.default)(Vue, _cascadePicker2.default);
  };

  _cascadePicker2.default.Picker = _picker2.default;

  exports.default = _cascadePicker2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(17), __webpack_require__(2), __webpack_require__(6), __webpack_require__(86), __webpack_require__(31)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../picker/picker.vue'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'), require('../../common/mixins/basic-picker'), require('../../common/mixins/picker'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.picker, global.visibility, global.popup, global.basicPicker, global.picker);
    global.cascadePicker = mod.exports;
  }
})(this, function (module, exports, _picker, _visibility, _popup, _basicPicker, _picker3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _picker2 = _interopRequireDefault(_picker);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup2 = _interopRequireDefault(_popup);

  var _basicPicker2 = _interopRequireDefault(_basicPicker);

  var _picker4 = _interopRequireDefault(_picker3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-cascade-picker';
  var EVENT_SELECT = 'select';
  var EVENT_CANCEL = 'cancel';
  var EVENT_CHANGE = 'change';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup2.default, _basicPicker2.default, _picker4.default],
    props: {
      async: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        cascadeData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex.slice(),
        pickerData: [],
        pending: false
      };
    },
    created: function created() {
      this._updatePickerData();
    },

    methods: {
      setData: function setData(data) {
        var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        this.pending = false;
        this.cascadeData = data.slice();
        this.pickerSelectedIndex = selectedIndex.slice();
        this._updatePickerData();
      },
      _pickerSelect: function _pickerSelect(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText);
      },
      _pickerCancel: function _pickerCancel() {
        this.$emit(EVENT_CANCEL);
      },
      _pickerChange: function _pickerChange(i, newIndex) {
        if (newIndex !== this.pickerSelectedIndex[i]) {
          this.pickerSelectedIndex.splice(i, 1, newIndex);
          this.async ? this.pending = i !== this.pickerData.length - 1 : this._updatePickerData(i + 1);
        }
        this.$emit(EVENT_CHANGE, i, newIndex);
      },
      _updatePickerData: function _updatePickerData() {
        var _this = this;

        var fromColumn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var data = this.cascadeData;
        var i = 0;
        while (data) {
          if (i >= fromColumn) {
            (function () {
              var columnData = [];
              data.forEach(function (item) {
                columnData.push({
                  value: item[_this.valueKey],
                  text: item[_this.textKey]
                });
              });
              _this.pickerData[i] = columnData;

              _this.pickerSelectedIndex[i] = fromColumn === 0 ? _this.pickerSelectedIndex[i] < data.length ? _this.pickerSelectedIndex[i] || 0 : 0 : _this.$refs.picker.refillColumn(i, columnData);
            })();
          }
          data = data.length ? data[this.pickerSelectedIndex[i]].children : null;

          i++;
        }

        if (i < this.pickerData.length) {
          this.pickerData.splice(i, this.pickerData.length - i);
        }

        this.pickerData = this.pickerData.slice();
      }
    },
    components: {
      CubePicker: _picker2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cube-picker', {
    ref: "picker",
    attrs: {
      "data": _vm.pickerData,
      "selected-index": _vm.pickerSelectedIndex,
      "pending": _vm.pending,
      "title": _vm.title,
      "subtitle": _vm.subtitle,
      "z-index": _vm.zIndex,
      "cancel-txt": _vm.cancelTxt,
      "confirm-txt": _vm.confirmTxt,
      "swipe-time": _vm.swipeTime
    },
    on: {
      "select": _vm._pickerSelect,
      "cancel": _vm._pickerCancel,
      "change": _vm._pickerChange
    },
    model: {
      value: (_vm.isVisible),
      callback: function($$v) {
        _vm.isVisible = $$v
      },
      expression: "isVisible"
    }
  })
},staticRenderFns: []}

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(17), __webpack_require__(42), __webpack_require__(283), __webpack_require__(286), __webpack_require__(62), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/picker/picker.vue'), require('../../components/cascade-picker/cascade-picker.vue'), require('../../components/date-picker/date-picker.vue'), require('./api'), require('../cascade-picker/api'), require('../picker/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.picker, global.cascadePicker, global.datePicker, global.api, global.api, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _picker, _cascadePicker, _datePicker, _api, _api3, _api5) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _picker2 = _interopRequireDefault(_picker);

  var _cascadePicker2 = _interopRequireDefault(_cascadePicker);

  var _datePicker2 = _interopRequireDefault(_datePicker);

  var _api2 = _interopRequireDefault(_api);

  var _api4 = _interopRequireDefault(_api3);

  var _api6 = _interopRequireDefault(_api5);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _datePicker2.default.install = function (Vue) {
    Vue.component(_picker2.default.name, _picker2.default);
    Vue.component(_cascadePicker2.default.name, _cascadePicker2.default);
    Vue.component(_datePicker2.default.name, _datePicker2.default);
    (0, _api6.default)(Vue, _picker2.default);
    (0, _api4.default)(Vue, _cascadePicker2.default);
    (0, _api2.default)(Vue, _datePicker2.default);
  };

  _datePicker2.default.Picker = _picker2.default;
  _cascadePicker2.default.Picker = _picker2.default;
  _datePicker2.default.CascadePicker = _cascadePicker2.default;

  exports.default = _datePicker2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(284),
  /* template */
  __webpack_require__(285),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(9), __webpack_require__(5), __webpack_require__(2), __webpack_require__(6), __webpack_require__(31), __webpack_require__(1), __webpack_require__(63)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/keys'), require('babel-runtime/core-js/object/assign'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'), require('../../common/mixins/picker'), require('../../common/helpers/util'), require('../../common/lang/date'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.keys, global.assign, global.visibility, global.popup, global.picker, global.util, global.date);
    global.datePicker = mod.exports;
  }
})(this, function (module, exports, _keys, _assign, _visibility, _popup, _picker, _util, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _keys2 = _interopRequireDefault(_keys);

  var _assign2 = _interopRequireDefault(_assign);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup2 = _interopRequireDefault(_popup);

  var _picker2 = _interopRequireDefault(_picker);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-date-picker';
  var EVENT_SELECT = 'select';
  var EVENT_CANCEL = 'cancel';
  var EVENT_CHANGE = 'change';

  var TYPE_LIST = ['year', 'month', 'date', 'hour', 'minute', 'second'];
  var NATURE_BOUNDARY_MAP = {
    month: {
      natureMin: 1,
      natureMax: 12
    },
    date: {
      natureMin: 1,
      natureMax: 31
    },
    hour: {
      natureMin: 0,
      natureMax: 23
    },
    minute: {
      natureMin: 0,
      natureMax: 59
    },
    second: {
      natureMin: 0,
      natureMax: 59
    }
  };

  var DEFAULT_FORMAT = {
    year: 'YYYY',
    month: 'M',
    date: 'D',
    hour: 'hh',
    minute: 'mm',
    second: 'ss'
  };

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup2.default, _picker2.default],
    props: {
      min: {
        type: [Date, Array],
        default: function _default() {
          return new Date(2010, 1, 1);
        }
      },
      max: {
        type: [Date, Array],
        default: function _default() {
          return new Date(2020, 12, 31);
        }
      },
      startColumn: {
        type: String,
        default: function _default() {
          return 'year';
        }
      },
      columnCount: {
        type: Number,
        default: 3
      },
      format: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      value: {
        type: [Date, Array],
        default: function _default() {
          return this.min;
        }
      }
    },
    computed: {
      formatConfig: function formatConfig() {
        var formatConfig = (0, _assign2.default)({}, DEFAULT_FORMAT);
        (0, _util.deepAssign)(formatConfig, this.format);

        return formatConfig;
      },
      natureRangeCache: function natureRangeCache() {
        var _this = this;

        var natureRangeCache = {
          hour: [],
          minute: [],
          second: []
        };

        (0, _keys2.default)(natureRangeCache).forEach(function (key) {
          natureRangeCache[key] = _this._range(key, NATURE_BOUNDARY_MAP[key].natureMin, NATURE_BOUNDARY_MAP[key].natureMax);
        });

        return natureRangeCache;
      },
      startIndex: function startIndex() {
        var startIndex = TYPE_LIST.indexOf(this.startColumn);
        return startIndex < 0 ? 0 : startIndex;
      },
      minArray: function minArray() {
        return this.min instanceof Date ? dateToArray(this.min).slice(this.startIndex, this.startIndex + this.columnCount) : this.min;
      },
      maxArray: function maxArray() {
        return this.max instanceof Date ? dateToArray(this.max).slice(this.startIndex, this.startIndex + this.columnCount) : this.max;
      },
      valueArray: function valueArray() {
        return this.value instanceof Date ? dateToArray(this.value).slice(this.startIndex, this.startIndex + this.columnCount) : this.value;
      },
      data: function data() {
        var data = [];
        this._generateData(this.startIndex, 0, data);
        return data;
      },
      selectedIndex: function selectedIndex() {
        var _this2 = this;

        var selectedIndex = [];
        var data = this.data;
        var index = void 0;

        var _loop = function _loop(i) {
          index = (0, _util.findIndex)(data, function (item) {
            return _this2.valueArray[i] && item.value === _this2.valueArray[i];
          });
          selectedIndex[i] = index !== -1 ? index : 0;
          data = data[selectedIndex[i]].children;
        };

        for (var i = 0; i < this.columnCount && i < 6 - this.startIndex; i++) {
          _loop(i);
        }

        return selectedIndex;
      }
    },
    methods: {
      _select: function _select(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, this._arrayToDate(selectedVal), selectedVal, selectedText);
      },
      _cancel: function _cancel() {
        this.$emit(EVENT_CANCEL);
      },
      _change: function _change(i, newIndex) {
        this.$emit(EVENT_CHANGE, i, newIndex);
      },
      _generateData: function _generateData(i, count, item) {
        var _this3 = this;

        if (count === 0) {
          var min = i === 0 ? this.minArray[0] : Math.max(this.minArray[0], NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMin);
          var max = i === 0 ? this.maxArray[0] : Math.min(this.maxArray[0], NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMax);
          item.push.apply(item, this._range(TYPE_LIST[i], min, max, true, true));
        } else {
          if (i < 3 || item.isMin || item.isMax) {
            var natureMax = i === 2 ? (0, _date.computeNatureMaxDay)(item.value, item.year) : NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMax;
            var _min = item.isMin ? Math.max(this.minArray[count], NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMin) : NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMin;
            var _max = item.isMax ? Math.min(this.maxArray[count], natureMax) : natureMax;

            var storageYear = i === 1 && this.startIndex === 0 && this.columnCount >= 3 && item.value;
            item.children = this._range(TYPE_LIST[i], _min, _max, item.isMin, item.isMax, storageYear);
          } else {
            item.children = this.natureRangeCache[TYPE_LIST[i]];
          }
        }
        if (count < this.columnCount - 1 && i < 5) {
          (item.children || item).forEach(function (subItem) {
            !subItem.children && _this3._generateData(i + 1, count + 1, subItem);
          });
        }
      },
      _arrayToDate: function _arrayToDate(selectedVal) {
        var args = [];
        var defaultDateArray = dateToArray(new Date(0));

        for (var i = 0; i < 6; i++) {
          if (i < this.startIndex) {
            args[i] = defaultDateArray[i];
          } else if (i >= this.startIndex + this.columnCount) {
            args[i] = NATURE_BOUNDARY_MAP[TYPE_LIST[i]].natureMin;
          } else {
            args[i] = selectedVal[i - this.startIndex];
          }
        }

        args[1]--;

        return new (Function.prototype.bind.apply(Date, [null].concat(args)))();
      },
      _range: function _range(type, min, max, fatherIsMin, fatherIsMax) {
        var year = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (!this._rangeCache) {
          this._rangeCache = {};
        }
        var k = type + year + min + max + fatherIsMin + fatherIsMax;
        if (this._rangeCache[k]) {
          return this._rangeCache[k];
        }
        var arr = [];
        var format = this.formatConfig[type];
        for (var i = min; i <= max; i++) {
          var object = {
            text: (0, _date.formatType)(type, format, i, 'i'),
            value: i
          };

          if (fatherIsMin && i === min) object.isMin = true;
          if (fatherIsMax && i === max) object.isMax = true;
          if (year) object.year = year;

          arr.push(object);
        }
        this._rangeCache[k] = arr;
        return arr;
      }
    }
  };


  function dateToArray(date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
  }
  module.exports = exports['default'];
});

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cube-cascade-picker', {
    attrs: {
      "data": _vm.data,
      "selectedIndex": _vm.selectedIndex,
      "title": _vm.title,
      "subtitle": _vm.subtitle,
      "cancel-txt": _vm.cancelTxt,
      "confirm-txt": _vm.confirmTxt,
      "swipe-time": _vm.swipeTime,
      "z-index": _vm.zIndex
    },
    on: {
      "select": _vm._select,
      "cancel": _vm._cancel,
      "change": _vm._change
    },
    model: {
      value: (_vm.isVisible),
      callback: function($$v) {
        _vm.isVisible = $$v
      },
      expression: "isVisible"
    }
  })
},staticRenderFns: []}

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/create-api'), require('../../common/helpers/debug'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.createApi, global.debug);
    global.api = mod.exports;
  }
})(this, function (module, exports, _createApi, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addDatePicker;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addDatePicker(Vue, DatePicker) {
    var datePickerAPI = (0, _createApi2.default)(Vue, DatePicker, ['select', 'cancel', 'value-change']);
    datePickerAPI.before(function (data, renderFn, single) {
      if (single) {
        (0, _debug.tip)('DatePicker component can not be a singleton.');
      }
    });
  }
  module.exports = exports['default'];
});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(17), __webpack_require__(288), __webpack_require__(291), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/picker/picker.vue'), require('../../components/time-picker/time-picker.vue'), require('./api'), require('../picker/api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.picker, global.timePicker, global.api, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _picker, _timePicker, _api, _api3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _picker2 = _interopRequireDefault(_picker);

  var _timePicker2 = _interopRequireDefault(_timePicker);

  var _api2 = _interopRequireDefault(_api);

  var _api4 = _interopRequireDefault(_api3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _timePicker2.default.install = function (Vue) {
    Vue.component(_picker2.default.name, _picker2.default);
    Vue.component(_timePicker2.default.name, _timePicker2.default);
    (0, _api4.default)(Vue, _picker2.default);
    (0, _api2.default)(Vue, _timePicker2.default);
  };

  _timePicker2.default.Picker = _picker2.default;

  exports.default = _timePicker2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(289),
  /* template */
  __webpack_require__(290),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(5), __webpack_require__(16), __webpack_require__(63), __webpack_require__(2), __webpack_require__(6), __webpack_require__(31), __webpack_require__(42), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('babel-runtime/helpers/typeof'), require('../../common/lang/date'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'), require('../../common/mixins/picker'), require('../cascade-picker/cascade-picker.vue'), require('../../common/helpers/debug'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global._typeof, global.date, global.visibility, global.popup, global.picker, global.cascadePicker, global.debug);
    global.timePicker = mod.exports;
  }
})(this, function (module, exports, _assign, _typeof2, _date, _visibility, _popup, _picker, _cascadePicker, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup2 = _interopRequireDefault(_popup);

  var _picker2 = _interopRequireDefault(_picker);

  var _cascadePicker2 = _interopRequireDefault(_cascadePicker);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-time-picker';
  var EVENT_SELECT = 'select';
  var EVENT_CANCEL = 'cancel';
  var EVENT_CHANGE = 'change';

  var NOW = {
    value: 'now',
    defaultText: '现在'
  };

  var INT_RULE = {
    floor: 'floor',
    ceil: 'ceil',
    round: 'round'
  };

  var DEFAULT_STEP = 10;

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup2.default, _picker2.default],
    components: {
      CubeCascadePicker: _cascadePicker2.default
    },
    props: {
      title: {
        type: String,
        default: '选择时间'
      },
      delay: {
        type: Number,
        default: 15
      },
      day: {
        type: Object,
        default: function _default() {
          return {
            len: 3,
            filter: ['今日'],
            format: 'M月D日'
          };
        }
      },
      showNow: {
        type: [Boolean, Object],
        default: true
      },
      minuteStep: {
        type: [Number, Object],
        default: DEFAULT_STEP
      },
      format: {
        type: String,
        default: 'YYYY/M/D hh:mm'
      }
    },
    data: function data() {
      return {
        now: new Date(),
        selectedIndex: [0, 0, 0],
        value: 0
      };
    },

    computed: {
      nowText: function nowText() {
        return this.showNow && this.showNow.text || NOW.defaultText;
      },
      minuteStepRule: function minuteStepRule() {
        var minuteStep = this.minuteStep;
        return (typeof minuteStep === 'undefined' ? 'undefined' : (0, _typeof3.default)(minuteStep)) === 'object' && Math[INT_RULE[minuteStep.rule]] || Math[INT_RULE.floor];
      },
      minuteStepNumber: function minuteStepNumber() {
        var minuteStep = this.minuteStep;
        return typeof minuteStep === 'number' ? minuteStep : minuteStep.step || DEFAULT_STEP;
      },
      minTime: function minTime() {
        var minTimeStamp = +this.now + this.delay * _date.MINUTE_TIMESTAMP;

        var minute = new Date(minTimeStamp).getMinutes();
        var intMinute = this.minuteStepRule(minute / this.minuteStepNumber) * this.minuteStepNumber;
        if (intMinute >= 60) {
          minTimeStamp += (60 - minute) * _date.MINUTE_TIMESTAMP;
        }

        return new Date(minTimeStamp);
      },
      days: function days() {
        var days = [];
        var dayDiff = (0, _date.getDayDiff)(this.minTime, this.now);

        for (var i = 0; i < this.day.len; i++) {
          var timestamp = +this.minTime + i * _date.DAY_TIMESTAMP;
          days.push({
            value: timestamp,
            text: this.day.filter && this.day.filter[dayDiff + i] || (0, _date.formatDate)(new Date(timestamp), this.day.format)
          });
        }
        return days;
      },
      hours: function hours() {
        var hours = [];
        for (var i = 0; i < 24; i++) {
          hours.push({
            value: i,
            text: i + '点',
            children: this.minutes
          });
        }
        return hours;
      },
      partHours: function partHours() {
        var partHours = this.hours.slice(this.minTime.getHours());
        partHours[0] = (0, _assign2.default)({}, partHours[0], { children: this.partMinutes });

        if (this.showNow) {
          partHours.unshift({
            value: NOW.value,
            text: this.nowText,
            children: []
          });
        }
        return partHours;
      },
      minutes: function minutes() {
        var minutes = [];
        for (var i = 0; i < 60; i += this.minuteStepNumber) {
          minutes.push({
            value: i,
            text: (0, _date.pad)(i) + '分'
          });
        }
        return minutes;
      },
      partMinutes: function partMinutes() {
        var begin = this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber);
        return this.minutes.slice(begin);
      },
      cascadeData: function cascadeData() {
        var _this = this;

        var data = this.days.slice();
        data.forEach(function (item, index) {
          item.children = index ? _this.hours : _this.partHours;
        });
        return data;
      }
    },
    methods: {
      show: function show() {
        if (this.isVisible) {
          return;
        }
        this.isVisible = true;

        this._updateNow();
        this._updateSelectedIndex();
      },
      setTime: function setTime(value) {
        this.value = value;

        this.isVisible && this._updateSelectedIndex();
      },
      _updateSelectedIndex: function _updateSelectedIndex() {
        var value = this.value;
        var minTime = this.minTime;

        if (value <= +minTime) {
          this.selectedIndex = [0, 0, 0];
        } else {
          var valueDate = new Date(value);
          var dayIndex = (0, _date.getDayDiff)(valueDate, minTime);

          if (dayIndex >= this.days.length) {
            (0, _debug.warn)('Use "setTime" to set a time exceeded to the option range do not actually work.', COMPONENT_NAME);
            return;
          }

          var hour = valueDate.getHours();
          var beginHour = dayIndex === 0 ? this.showNow ? this.minTime.getHours() - 1 : this.minTime.getHours() : 0;
          var hourIndex = hour - beginHour;

          var minute = this.minuteStepRule(valueDate.getMinutes() / this.minuteStepNumber);
          var beginMinute = !dayIndex && (this.showNow ? hourIndex === 1 : !hourIndex) ? this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber) : 0;
          var minuteIndex = minute - beginMinute;

          this.selectedIndex = [dayIndex, hourIndex, minuteIndex];
        }
      },
      _updateNow: function _updateNow() {
        this.now = new Date();
      },
      _pickerChange: function _pickerChange(i, newIndex) {
        this.$emit(EVENT_CHANGE, i, newIndex);
      },
      _pickerSelect: function _pickerSelect(selectedVal, selectedIndex, selectedText) {
        var timestamp = void 0;
        var text = void 0;
        if (selectedVal[1] === NOW.value) {
          timestamp = +new Date();
          text = this.nowText;
        } else {
          timestamp = (0, _date.getZeroStamp)(new Date(selectedVal[0])) + selectedVal[1] * _date.HOUR_TIMESTAMP + selectedVal[2] * _date.MINUTE_TIMESTAMP;
          text = selectedText[0] + ' ' + selectedText[1] + ':' + selectedText[2];
        }

        this.value = timestamp;
        var formatedTime = (0, _date.formatDate)(new Date(timestamp), this.format);
        this.$emit(EVENT_SELECT, timestamp, text, formatedTime);
      },
      _pickerCancel: function _pickerCancel() {
        this.$emit(EVENT_CANCEL);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cube-cascade-picker', {
    ref: "picker",
    attrs: {
      "data": _vm.cascadeData,
      "selected-index": _vm.selectedIndex,
      "title": _vm.title,
      "subtitle": _vm.subtitle,
      "cancel-txt": _vm.cancelTxt,
      "confirm-txt": _vm.confirmTxt,
      "swipe-time": _vm.swipeTime,
      "z-index": _vm.zIndex
    },
    on: {
      "select": _vm._pickerSelect,
      "cancel": _vm._pickerCancel,
      "change": _vm._pickerChange
    },
    model: {
      value: (_vm.isVisible),
      callback: function($$v) {
        _vm.isVisible = $$v
      },
      expression: "isVisible"
    }
  })
},staticRenderFns: []}

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/create-api'), require('../../common/helpers/debug'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.createApi, global.debug);
    global.api = mod.exports;
  }
})(this, function (module, exports, _createApi, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addTimePicker;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addTimePicker(Vue, TimePicker) {
    var timePickerAPI = (0, _createApi2.default)(Vue, TimePicker, ['select', 'cancel', 'change']);
    timePickerAPI.before(function (data, renderFn, single) {
      if (single) {
        (0, _debug.tip)('TimePicker component can not be a singleton.');
      }
    });
  }
  module.exports = exports['default'];
});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(17), __webpack_require__(42), __webpack_require__(293), __webpack_require__(26), __webpack_require__(62), __webpack_require__(296)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/picker/picker.vue'), require('../../components/cascade-picker/cascade-picker.vue'), require('../../components/segment-picker/segment-picker.vue'), require('../picker/api'), require('../cascade-picker/api'), require('./api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.picker, global.cascadePicker, global.segmentPicker, global.api, global.api, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _picker, _cascadePicker, _segmentPicker, _api, _api3, _api5) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _picker2 = _interopRequireDefault(_picker);

  var _cascadePicker2 = _interopRequireDefault(_cascadePicker);

  var _segmentPicker2 = _interopRequireDefault(_segmentPicker);

  var _api2 = _interopRequireDefault(_api);

  var _api4 = _interopRequireDefault(_api3);

  var _api6 = _interopRequireDefault(_api5);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _segmentPicker2.default.install = function (Vue) {
    Vue.component(_picker2.default.name, _picker2.default);
    Vue.component(_cascadePicker2.default.name, _cascadePicker2.default);
    Vue.component(_segmentPicker2.default.name, _segmentPicker2.default);
    (0, _api2.default)(Vue, _picker2.default);
    (0, _api4.default)(Vue, _cascadePicker2.default);
    (0, _api6.default)(Vue, _segmentPicker2.default);
  };

  _segmentPicker2.default.Picker = _picker2.default;
  _cascadePicker2.default.Picker = _picker2.default;
  _segmentPicker2.default.CascadePicker = _cascadePicker2.default;

  exports.default = _segmentPicker2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(294),
  /* template */
  __webpack_require__(295),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(58), __webpack_require__(2), __webpack_require__(6), __webpack_require__(31)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/toConsumableArray'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'), require('../../common/mixins/picker'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.toConsumableArray, global.visibility, global.popup, global.picker);
    global.segmentPicker = mod.exports;
  }
})(this, function (module, exports, _toConsumableArray2, _visibility, _popup, _picker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup2 = _interopRequireDefault(_popup);

  var _picker2 = _interopRequireDefault(_picker);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-segment-picker';
  var EVENT_NEXT = 'next';
  var EVENT_PREV = 'prev';
  var EVENT_SELECT = 'select';
  var EVENT_CANCEL = 'cancel';
  var EVENT_CHANGE = 'change';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup2.default, _picker2.default],
    props: {
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      nextTxt: {
        type: String,
        default: '下一步'
      },
      prevTxt: {
        type: String,
        default: '上一步'
      }
    },
    data: function data() {
      return {
        current: 0,
        selectedVal: [],
        selectedIndex: [],
        selectedText: []
      };
    },

    computed: {
      currentPicker: function currentPicker() {
        for (var i = 0; i < this.data.length; i++) {
          var item = this.$refs.pickers[i];
          if (item.$attrs.index === this.current) {
            return item;
          }
        }
      }
    },
    watch: {
      data: function data() {
        this.current = 0;
        this.selectedVal = [];
        this.selectedIndex = [];
        this.selectedText = [];
      }
    },
    methods: {
      show: function show() {
        if (this.isVisible || !this.data.length) {
          return;
        }
        this.currentPicker.show();
      },
      hide: function hide() {
        if (!this.isVisible || !this.data.length) {
          return;
        }
        this.$refs.currentPicker.hide();
      },
      _select: function _select() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.selectedVal[this.current] = args[0];
        this.selectedIndex[this.current] = args[1];
        this.selectedText[this.current] = args[2];

        if (this.current < this.data.length - 1) {
          this.$emit.apply(this, [EVENT_NEXT, this.current].concat((0, _toConsumableArray3.default)(args)));
          this.current++;
          this.currentPicker.show();
        } else {
          this.$emit(EVENT_SELECT, this.selectedVal, this.selectedIndex, this.selectedText);
          this.current = 0;
        }
      },
      _cancel: function _cancel() {
        if (this.current > 0) {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          this.$emit.apply(this, [EVENT_PREV, this.current].concat((0, _toConsumableArray3.default)(args)));
          this.current--;
          this.currentPicker.show();
        } else {
          this.$emit(EVENT_CANCEL);
        }
      },
      _change: function _change() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        this.$emit.apply(this, [EVENT_CHANGE, this.current].concat((0, _toConsumableArray3.default)(args)));
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-segment-picker"
  }, _vm._l((_vm.data), function(item, index) {
    return _c(item.is || 'cube-picker', _vm._b({
      key: index,
      ref: "pickers",
      refInFor: true,
      tag: "component",
      attrs: {
        "index": index,
        "title": item.title || _vm.title,
        "subtitle": item.subtitle || _vm.subtitle,
        "confirm-txt": item.confirmTxt || (index === _vm.data.length - 1 ? _vm.confirmTxt : _vm.nextTxt),
        "cancel-txt": item.cancelTxt || (index === 0 ? _vm.cancelTxt : _vm.prevTxt),
        "swipe-time": item.swipeTime || _vm.swipeTime,
        "z-index": item.zIndex || _vm.zIndex
      },
      on: {
        "select": _vm._select,
        "cancel": _vm._cancel,
        "change": _vm._change
      }
    }, 'component', item, false))
  }))
},staticRenderFns: []}

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/create-api'), require('../../common/helpers/debug'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.createApi, global.debug);
    global.api = mod.exports;
  }
})(this, function (module, exports, _createApi, _debug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addSegmentPicker;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addSegmentPicker(Vue, SegmentPicker) {
    var segmentPickerAPI = (0, _createApi2.default)(Vue, SegmentPicker, ['select', 'cancel', 'change', 'next', 'prev']);
    segmentPickerAPI.before(function (data, renderFn, single) {
      if (single) {
        (0, _debug.tip)('SegmentPicker component can not be a singleton.');
      }
    });
  }
  module.exports = exports['default'];
});

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(298), __webpack_require__(302)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/dialog/dialog.vue'), require('./api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.dialog, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _dialog, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _dialog2 = _interopRequireDefault(_dialog);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _dialog2.default.install = function (Vue) {
    Vue.component(_dialog2.default.name, _dialog2.default);
    (0, _api2.default)(Vue, _dialog2.default);
  };

  exports.default = _dialog2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(299)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(300),
  /* template */
  __webpack_require__(301),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 299 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(41), __webpack_require__(5), __webpack_require__(25), __webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/extends'), require('babel-runtime/core-js/object/assign'), require('../popup/popup.vue'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._extends, global.assign, global.popup, global.visibility, global.popup);
    global.dialog = mod.exports;
  }
})(this, function (module, exports, _extends2, _assign, _popup, _visibility, _popup3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends3 = _interopRequireDefault(_extends2);

  var _assign2 = _interopRequireDefault(_assign);

  var _popup2 = _interopRequireDefault(_popup);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup4 = _interopRequireDefault(_popup3);

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
    text: '确定',
    active: true,
    disabled: false,
    href: defHref
  };
  var defCancelBtn = {
    text: '取消',
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
    return (0, _assign2.default)({}, defBtn, btn);
  };

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup4.default],
    props: {
      type: {
        type: String,
        default: 'alert'
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
        defHref: defHref
      };
    },

    computed: {
      _confirmBtn: function _confirmBtn() {
        return parseBtn(this.confirmBtn, defConfirmBtn);
      },
      _cancelBtn: function _cancelBtn() {
        return parseBtn(this.cancelBtn, defCancelBtn);
      },
      isConfirm: function isConfirm() {
        return this.type === 'confirm';
      },
      containerClass: function containerClass() {
        return 'cube-dialog-' + this.type;
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
        this.$emit(EVENT_CONFIRM, e);
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
      CubePopup: _popup2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 301 */
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
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])])], 2), _vm._v(" "), _c('div', {
    staticClass: "cube-dialog-btns",
    class: {
      'border-right-1px': _vm.isConfirm
    }
  }, [_vm._t("btns", [(_vm.isConfirm) ? _c('a', {
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
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(304), __webpack_require__(308)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/action-sheet/action-sheet.vue'), require('./api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.actionSheet, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _actionSheet, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _actionSheet2 = _interopRequireDefault(_actionSheet);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _actionSheet2.default.install = function (Vue) {
    Vue.component(_actionSheet2.default.name, _actionSheet2.default);
    (0, _api2.default)(Vue, _actionSheet2.default);
  };

  exports.default = _actionSheet2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(305)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(306),
  /* template */
  __webpack_require__(307),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 305 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(25), __webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../popup/popup.vue'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.popup, global.visibility, global.popup);
    global.actionSheet = mod.exports;
  }
})(this, function (module, exports, _popup, _visibility, _popup3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _popup2 = _interopRequireDefault(_popup);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup4 = _interopRequireDefault(_popup3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-action-sheet';
  var EVENT_SELECT = 'select';
  var EVENT_CANCEL = 'cancel';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup4.default],
    props: {
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      active: {
        type: Number,
        default: -1
      },
      title: {
        type: String,
        default: ''
      },
      pickerStyle: {
        type: Boolean,
        default: false
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      cancelTxt: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      maskClick: function maskClick() {
        this.maskClosable && this.cancel();
      },
      cancel: function cancel() {
        this.hide();
        this.$emit(EVENT_CANCEL);
      },
      itemClick: function itemClick(item, index) {
        this.hide();
        this.$emit(EVENT_SELECT, item, index);
      }
    },
    components: {
      CubePopup: _popup2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 307 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "cube-action-sheet-fade"
    }
  }, [_c('cube-popup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    class: {
      'cube-action-sheet_picker': _vm.pickerStyle
    },
    attrs: {
      "type": "action-sheet",
      "center": false,
      "mask": true,
      "z-index": _vm.zIndex
    },
    on: {
      "touchmove": function($event) {
        $event.preventDefault();
      },
      "mask-click": _vm.maskClick
    }
  }, [_c('transition', {
    attrs: {
      "name": "cube-action-sheet-move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    staticClass: "cube-action-sheet-panel cube-safe-area-pb",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('h1', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pickerStyle || _vm.title),
      expression: "pickerStyle || title"
    }],
    staticClass: "cube-action-sheet-title border-bottom-1px"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "cube-action-sheet-content"
  }, [_c('ul', {
    staticClass: "cube-action-sheet-list"
  }, _vm._l((_vm.data), function(item, index) {
    return _c('li', {
      staticClass: "cube-action-sheet-item border-bottom-1px",
      class: [
        item.class || '',
        index === _vm.active ? 'cube-action-sheet-item_active' : ''
      ],
      attrs: {
        "data-align": item.align
      },
      domProps: {
        "innerHTML": _vm._s(item.content)
      },
      on: {
        "click": function($event) {
          _vm.itemClick(item, index)
        }
      }
    })
  }))]), _vm._v(" "), _c('div', {
    staticClass: "cube-action-sheet-space"
  }), _vm._v(" "), _c('div', {
    staticClass: "cube-action-sheet-cancel",
    on: {
      "click": _vm.cancel
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.cancelTxt))])])])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
  exports.default = addActionSheet;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addActionSheet(Vue, ActionSheet) {
    (0, _createApi2.default)(Vue, ActionSheet, ['select', 'cancel'], true);
  }
  module.exports = exports['default'];
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(310), __webpack_require__(99), __webpack_require__(100)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/drawer/drawer.vue'), require('../../components/drawer/drawer-panel.vue'), require('../../components/drawer/drawer-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.drawer, global.drawerPanel, global.drawerItem);
    global.index = mod.exports;
  }
})(this, function (module, exports, _drawer, _drawerPanel, _drawerItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _drawer2 = _interopRequireDefault(_drawer);

  var _drawerPanel2 = _interopRequireDefault(_drawerPanel);

  var _drawerItem2 = _interopRequireDefault(_drawerItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _drawer2.default.install = function (Vue) {
    Vue.component(_drawer2.default.name, _drawer2.default);
    Vue.component(_drawerPanel2.default.name, _drawerPanel2.default);
    Vue.component(_drawerItem2.default.name, _drawerItem2.default);
  };

  _drawer2.default.Panel = _drawerPanel2.default;
  _drawer2.default.Item = _drawerItem2.default;

  exports.default = _drawer2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(311)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(312),
  /* template */
  __webpack_require__(336),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 311 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(50), __webpack_require__(58), __webpack_require__(8), __webpack_require__(99), __webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/defineProperty'), require('babel-runtime/helpers/toConsumableArray'), require('../../common/helpers/dom'), require('./drawer-panel.vue'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.defineProperty, global.toConsumableArray, global.dom, global.drawerPanel, global.visibility, global.popup);
    global.drawer = mod.exports;
  }
})(this, function (module, exports, _defineProperty2, _toConsumableArray2, _dom, _drawerPanel, _visibility, _popup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  var _drawerPanel2 = _interopRequireDefault(_drawerPanel);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup2 = _interopRequireDefault(_popup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-drawer';
  var EVENT_CHANGE = 'change';
  var EVENT_SELECT = 'select';
  var EVENT_CANCEL = 'cancel';

  var transform = (0, _dom.prefixStyle)('transform');

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup2.default],
    props: {
      title: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      selectedIndex: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        index: -1,
        selectedVal: [],
        selectedText: [],
        selected: [].concat((0, _toConsumableArray3.default)(this.selectedIndex)),
        slideStyle: (0, _defineProperty3.default)({}, transform, 'translate3d(0, 0, 0)')
      };
    },

    watch: {
      selectedIndex: function selectedIndex(newVal) {
        this.selected = [].concat((0, _toConsumableArray3.default)(newVal));
      },
      index: function index(newIndex, oldIndex) {
        this.showPanel();
        if (newIndex < oldIndex) {
          this.hidePanel();
        }
      }
    },
    created: function created() {
      this.panels = [];
    },

    methods: {
      show: function show() {
        if (this.isVisible) {
          return;
        }
        this.isVisible = true;

        var len = this.data.length;
        for (var i = 0; i < len; i++) {
          this.index = i;
          if (this.selected[i] < 0 || this.selected[i] === undefined) {
            if (i > 0) {
              var lastIndex = i - 1;
              var index = this.selected[lastIndex];
              this.changeHandler(lastIndex, this.data[lastIndex][index], index);
            }
            break;
          }
        }
        this.computedStyle();
      },
      hide: function hide() {
        this.slideStyle[transform] = 'translate3d(0, 0, 0)';
        this.shouldHide = true;
      },
      addPanel: function addPanel(panel) {
        this.panels.push(panel);
      },
      removePanel: function removePanel(panel) {
        var i = this.panels.indexOf(panel);
        this.panels.splice(i, 1);
      },
      transitionend: function transitionend() {
        if (this.shouldHide) {
          this.isVisible = false;
          this.shouldHide = false;
        }
      },
      refill: function refill(panelIndex, data, index) {
        this.$set(this.data, panelIndex, data);
        this.index = panelIndex;
        this.selected = this.selected.slice(0, panelIndex);
        this.selectedVal = this.selectedVal.slice(0, panelIndex);
        this.selectedText = this.selectedText.slice(0, panelIndex);
        if (index >= 0) {
          this.$set(this.selected, panelIndex, index);
          this.changeHandler(panelIndex, this.data[panelIndex][index], index);
        }
      },
      showPanel: function showPanel() {
        var index = this.index;
        var i = 0;
        while (i <= index) {
          this.panels[i].show();
          i++;
        }
        this.computedStyle();
      },
      hidePanel: function hidePanel() {
        var len = this.data.length;
        var i = this.index + 1;
        while (i < len) {
          this.panels[i].hide();
          i++;
        }
      },
      computedStyle: function computedStyle() {
        var _this = this;

        this.$nextTick(function () {
          var allWidth = 0;
          var i = 0;
          var index = _this.index;
          while (i <= index) {
            var el = _this.panels[i].$el;
            allWidth += el.offsetWidth;
            var elStyle = window.getComputedStyle(el);
            allWidth += parseInt(elStyle.marginLeft);
            allWidth += parseInt(elStyle.marginRight);
            i++;
          }
          _this.slideStyle[transform] = 'translate3d(-' + allWidth + 'px, 0, 0)';
        });
      },
      changeHandler: function changeHandler(panelIndex, item, index) {
        if (typeof item === 'string') {
          this.selectedVal[panelIndex] = item;
          this.selectedText[panelIndex] = item;
        } else {
          this.selectedVal[panelIndex] = item.value;
          this.selectedText[panelIndex] = item.text;
        }
        this.$set(this.selected, panelIndex, index);
        if (panelIndex === this.data.length - 1) {
          this.$emit(EVENT_SELECT, this.selectedVal, this.selected, this.selectedText);
          this.hide();
        } else {
          this.$emit(EVENT_CHANGE, panelIndex, item, this.selectedVal, this.selected, this.selectedText);
        }
      },
      drawerClick: function drawerClick() {
        this.hide();
        this.$emit(EVENT_CANCEL);
      }
    },
    components: {
      CubeDrawerPanel: _drawerPanel2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 313 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(2), __webpack_require__(27), __webpack_require__(100)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/mixins/visibility'), require('../scroll/scroll.vue'), require('./drawer-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.visibility, global.scroll, global.drawerItem);
    global.drawerPanel = mod.exports;
  }
})(this, function (module, exports, _visibility, _scroll, _drawerItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _visibility2 = _interopRequireDefault(_visibility);

  var _scroll2 = _interopRequireDefault(_scroll);

  var _drawerItem2 = _interopRequireDefault(_drawerItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-drawer-panel';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default],
    props: {
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      index: {
        type: Number,
        default: -1
      }
    },
    computed: {
      selectedIndex: function selectedIndex() {
        var selectedIndex = this.$parent.selected[this.index];
        return selectedIndex === undefined ? -1 : selectedIndex;
      }
    },
    watch: {
      data: function data() {
        this.scrollToTop();
      },
      isVisible: function isVisible() {
        var _this = this;

        this.$nextTick(function () {
          _this.refresh();
        });
      }
    },
    mounted: function mounted() {
      this.$parent.addPanel(this);
    },
    beforeDestroy: function beforeDestroy() {
      this.$parent.removePanel(this);
    },

    methods: {
      refresh: function refresh() {
        this.$refs.scroll.refresh();
      },
      scrollToTop: function scrollToTop() {
        this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0, 0, 0);
      },
      itemClickHandler: function itemClickHandler(item, index) {
        if (this.selectedIndex !== index) {
          this.$parent.changeHandler(this.index, item, index);
        }
      }
    },
    components: {
      CubeScroll: _scroll2.default,
      CubeDrawerItem: _drawerItem2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 315 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(5), __webpack_require__(40), __webpack_require__(34), __webpack_require__(328), __webpack_require__(32), __webpack_require__(64), __webpack_require__(8), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('better-scroll'), require('../loading/loading.vue'), require('../bubble/bubble.vue'), require('../../common/mixins/scroll'), require('../../common/mixins/deprecated'), require('../../common/helpers/dom'), require('../../common/lang/string'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.betterScroll, global.loading, global.bubble, global.scroll, global.deprecated, global.dom, global.string);
    global.scroll = mod.exports;
  }
})(this, function (module, exports, _assign, _betterScroll, _loading, _bubble, _scroll, _deprecated, _dom, _string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _betterScroll2 = _interopRequireDefault(_betterScroll);

  var _loading2 = _interopRequireDefault(_loading);

  var _bubble2 = _interopRequireDefault(_bubble);

  var _scroll2 = _interopRequireDefault(_scroll);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-scroll';
  var DIRECTION_H = 'horizontal';
  var DIRECTION_V = 'vertical';
  var DEFAULT_REFRESH_TXT = 'Refresh success';
  var DEFAULT_STOP_TIME = 600;

  var EVENT_CLICK = 'click';
  var EVENT_PULLING_DOWN = 'pulling-down';
  var EVENT_PULLING_UP = 'pulling-up';

  var EVENT_SCROLL = 'scroll';
  var EVENT_BEFORE_SCROLL_START = 'before-scroll-start';
  var EVENT_SCROLL_END = 'scroll-end';

  var SCROLL_EVENTS = [EVENT_SCROLL, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL_END];

  var DEFAULT_OPTIONS = {
    observeDOM: true,
    click: true,
    probeType: 1,
    scrollbar: false,
    pullDownRefresh: false,
    pullUpLoad: false
  };

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_scroll2.default, _deprecated2.default],
    props: {
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      scrollEvents: {
        type: Array,
        default: function _default() {
          return [];
        },
        validator: function validator(arr) {
          return arr.every(function (item) {
            return SCROLL_EVENTS.indexOf(item) !== -1;
          });
        }
      },

      listenScroll: {
        type: Boolean,
        default: undefined,
        deprecated: {
          replacedBy: 'scroll-events'
        }
      },
      listenBeforeScroll: {
        type: Boolean,
        default: undefined,
        deprecated: {
          replacedBy: 'scroll-events'
        }
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    data: function data() {
      return {
        beforePullDown: true,
        isPullingDown: false,
        isPullUpLoad: false,
        pullUpDirty: true,
        bubbleY: 0,
        pullDownStyle: '',
        pullDownStop: 40,
        pullDownHeight: 60
      };
    },

    computed: {
      pullDownRefresh: function pullDownRefresh() {
        var pullDownRefresh = this.options.pullDownRefresh;
        if (!pullDownRefresh) {
          return pullDownRefresh;
        }
        if (pullDownRefresh === true) {
          pullDownRefresh = {};
        }
        return (0, _assign2.default)({ stop: this.pullDownStop }, pullDownRefresh);
      },
      pullUpLoad: function pullUpLoad() {
        return this.options.pullUpLoad;
      },
      pullUpTxt: function pullUpTxt() {
        var pullUpLoad = this.pullUpLoad;
        var txt = pullUpLoad && pullUpLoad.txt;
        var moreTxt = txt && txt.more || '';
        var noMoreTxt = txt && txt.noMore || '';

        return this.pullUpDirty ? moreTxt : noMoreTxt;
      },
      refreshTxt: function refreshTxt() {
        var pullDownRefresh = this.pullDownRefresh;
        return pullDownRefresh && pullDownRefresh.txt || DEFAULT_REFRESH_TXT;
      },
      finalScrollEvents: function finalScrollEvents() {
        var finalScrollEvents = this.scrollEvents.slice();

        if (!finalScrollEvents.length) {
          this.listenScroll && finalScrollEvents.push(EVENT_SCROLL);
          this.listenBeforeScroll && finalScrollEvents.push(EVENT_BEFORE_SCROLL_START);
        }
        return finalScrollEvents;
      }
    },
    watch: {
      data: function data() {
        var _this = this;

        setTimeout(function () {
          _this.forceUpdate(true);
        }, this.refreshDelay);
      },

      pullDownRefresh: {
        handler: function handler(newVal, oldVal) {
          if (newVal) {
            this.scroll.openPullDown(newVal);
            if (!oldVal) {
              this._onPullDownRefresh();
              this._calculateMinHeight();
            }
          }

          if (!newVal && oldVal) {
            this.scroll.closePullDown();
            this._offPullDownRefresh();
            this._calculateMinHeight();
          }
        },

        deep: true
      },
      pullUpLoad: {
        handler: function handler(newVal, oldVal) {
          if (newVal) {
            this.scroll.openPullUp(newVal);
            if (!oldVal) {
              this._onPullUpLoad();
              this._calculateMinHeight();
            }
          }

          if (!newVal && oldVal) {
            this.scroll.closePullUp();
            this._offPullUpLoad();
            this._calculateMinHeight();
          }
        },

        deep: true
      }
    },
    activated: function activated() {
      this.enable();
    },
    deactivated: function deactivated() {
      this.disable();
    },
    mounted: function mounted() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.initScroll();
      });
    },
    beforeDestroy: function beforeDestroy() {
      this.destroy();
    },

    methods: {
      initScroll: function initScroll() {
        if (!this.$refs.wrapper) {
          return;
        }
        this._calculateMinHeight();

        var options = (0, _assign2.default)({}, DEFAULT_OPTIONS, {
          scrollY: this.direction === DIRECTION_V,
          scrollX: this.direction === DIRECTION_H,
          probeType: this.finalScrollEvents.indexOf(EVENT_SCROLL) !== -1 ? 3 : 1
        }, this.options);

        this.scroll = new _betterScroll2.default(this.$refs.wrapper, options);

        this._listenScrollEvents();

        if (this.pullDownRefresh) {
          this._getPullDownEleHeight();
          this._onPullDownRefresh();
        }

        if (this.pullUpLoad) {
          this._onPullUpLoad();
        }
      },
      disable: function disable() {
        this.scroll && this.scroll.disable();
      },
      enable: function enable() {
        this.scroll && this.scroll.enable();
      },
      refresh: function refresh() {
        this._calculateMinHeight();
        this.scroll && this.scroll.refresh();
      },
      destroy: function destroy() {
        this.scroll && this.scroll.destroy();
        this.scroll = null;
      },
      scrollTo: function scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
      },
      scrollToElement: function scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
      },
      clickItem: function clickItem(item) {
        this.$emit(EVENT_CLICK, item);
      },
      forceUpdate: function forceUpdate() {
        var _this3 = this;

        var dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false;
          this._reboundPullDown(function () {
            _this3._afterPullDown(dirty);
          });
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false;
          this.scroll.finishPullUp();
          this.pullUpDirty = dirty;
          dirty && this.refresh();
        } else {
          dirty && this.refresh();
        }
      },
      resetPullUpTxt: function resetPullUpTxt() {
        this.pullUpDirty = true;
      },
      _listenScrollEvents: function _listenScrollEvents() {
        var _this4 = this;

        this.finalScrollEvents.forEach(function (event) {
          _this4.scroll.on((0, _string.camelize)(event), function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this4.$emit.apply(_this4, [event].concat(args));
          });
        });
      },
      _calculateMinHeight: function _calculateMinHeight() {
        if (this.$refs.listWrapper) {
          this.$refs.listWrapper.style.minHeight = this.pullDownRefresh || this.pullUpLoad ? (0, _dom.getRect)(this.$refs.wrapper).height + 1 + 'px' : 0;
        }
      },
      _onPullDownRefresh: function _onPullDownRefresh() {
        this.scroll.on('pullingDown', this._pullDownHandle);
        this.scroll.on('scroll', this._pullDownScrollHandle);
      },
      _offPullDownRefresh: function _offPullDownRefresh() {
        this.scroll.off('pullingDown', this._pullDownHandle);
        this.scroll.off('scroll', this._pullDownScrollHandle);
      },
      _pullDownHandle: function _pullDownHandle() {
        if (this.resetPullDownTimer) {
          clearTimeout(this.resetPullDownTimer);
        }
        this.beforePullDown = false;
        this.isPullingDown = true;
        this.$emit(EVENT_PULLING_DOWN);
      },
      _pullDownScrollHandle: function _pullDownScrollHandle(pos) {
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y - this.pullDownHeight);
          this.pullDownStyle = 'top:' + Math.min(pos.y - this.pullDownHeight, 0) + 'px';
        } else {
          this.bubbleY = 0;
          this.pullDownStyle = 'top:' + Math.min(pos.y - this.pullDownStop, 0) + 'px';
        }
      },
      _onPullUpLoad: function _onPullUpLoad() {
        this.scroll.on('pullingUp', this._pullUpHandle);
      },
      _offPullUpLoad: function _offPullUpLoad() {
        this.scroll.off('pullingUp', this._pullUpHandle);
      },
      _pullUpHandle: function _pullUpHandle() {
        this.isPullUpLoad = true;
        this.$emit(EVENT_PULLING_UP);
      },
      _reboundPullDown: function _reboundPullDown(next) {
        var _this5 = this;

        var _pullDownRefresh$stop = this.pullDownRefresh.stopTime,
            stopTime = _pullDownRefresh$stop === undefined ? DEFAULT_STOP_TIME : _pullDownRefresh$stop;

        setTimeout(function () {
          _this5.scroll.finishPullDown();
          next();
        }, stopTime);
      },
      _afterPullDown: function _afterPullDown(dirty) {
        var _this6 = this;

        this.resetPullDownTimer = setTimeout(function () {
          _this6.pullDownStyle = 'top: -' + _this6.pullDownHeight + 'px';
          _this6.beforePullDown = true;
          dirty && _this6.refresh();
        }, this.scroll.options.bounceTime);
      },
      _getPullDownEleHeight: function _getPullDownEleHeight() {
        var _this7 = this;

        var pulldown = this.$refs.pulldown.firstChild;
        this.pullDownHeight = (0, _dom.getRect)(pulldown).height;

        this.beforePullDown = false;
        this.isPullingDown = true;
        this.$nextTick(function () {
          _this7.pullDownStop = (0, _dom.getRect)(pulldown).height;

          _this7.beforePullDown = true;
          _this7.isPullingDown = false;
        });
      }
    },
    components: {
      Loading: _loading2.default,
      Bubble: _bubble2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(318);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(321);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(319), __esModule: true };

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(38);
module.exports = __webpack_require__(320);


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(85);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(3).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(322), __esModule: true };

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(38);
module.exports = __webpack_require__(323);


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var get = __webpack_require__(84);
module.exports = __webpack_require__(3).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(325), __esModule: true };

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(326);
module.exports = __webpack_require__(3).Object.entries;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(14);
var $entries = __webpack_require__(327)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(19);
var toIObject = __webpack_require__(13);
var isEnum = __webpack_require__(30).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(329),
  /* template */
  __webpack_require__(330),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 329 */
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
    global.bubble = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    props: {
      y: {
        type: Number,
        default: 0
      }
    },
    data: function data() {
      return {
        width: 50,
        height: 80
      };
    },

    computed: {
      distance: function distance() {
        return Math.max(0, Math.min(this.y * this.ratio, this.maxDistance));
      },
      style: function style() {
        return 'width:' + this.width / this.ratio + 'px;height:' + this.height / this.ratio + 'px';
      }
    },
    mounted: function mounted() {
      this.ratio = window.devicePixelRatio;
      this.width *= this.ratio;
      this.height *= this.ratio;
      this.initRadius = 18 * this.ratio;
      this.minHeadRadius = 12 * this.ratio;
      this.minTailRadius = 5 * this.ratio;
      this.initArrowRadius = 10 * this.ratio;
      this.minArrowRadius = 6 * this.ratio;
      this.arrowWidth = 3 * this.ratio;
      this.maxDistance = 40 * this.ratio;
      this.initCenterX = 25 * this.ratio;
      this.initCenterY = 25 * this.ratio;
      this.headCenter = {
        x: this.initCenterX,
        y: this.initCenterY
      };
      this._draw();
    },

    methods: {
      _draw: function _draw() {
        var bubble = this.$refs.bubble;
        var ctx = bubble.getContext('2d');
        ctx.clearRect(0, 0, bubble.width, bubble.height);

        this._drawBubble(ctx);

        this._drawArrow(ctx);
      },
      _drawBubble: function _drawBubble(ctx) {
        ctx.save();
        ctx.beginPath();

        var rate = this.distance / this.maxDistance;
        var headRadius = this.initRadius - (this.initRadius - this.minHeadRadius) * rate;

        this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * rate;

        ctx.arc(this.headCenter.x, this.headCenter.y, headRadius, 0, Math.PI, true);

        var tailRadius = this.initRadius - (this.initRadius - this.minTailRadius) * rate;
        var tailCenter = {
          x: this.headCenter.x,
          y: this.headCenter.y + this.distance
        };

        var tailPointL = {
          x: tailCenter.x - tailRadius,
          y: tailCenter.y
        };
        var controlPointL = {
          x: tailPointL.x,
          y: tailPointL.y - this.distance / 2
        };

        ctx.quadraticCurveTo(controlPointL.x, controlPointL.y, tailPointL.x, tailPointL.y);

        ctx.arc(tailCenter.x, tailCenter.y, tailRadius, Math.PI, 0, true);

        var headPointR = {
          x: this.headCenter.x + headRadius,
          y: this.headCenter.y
        };
        var controlPointR = {
          x: tailCenter.x + tailRadius,
          y: headPointR.y + this.distance / 2
        };
        ctx.quadraticCurveTo(controlPointR.x, controlPointR.y, headPointR.x, headPointR.y);

        ctx.fillStyle = 'rgb(170,170,170)';
        ctx.fill();
        ctx.strokeStyle = 'rgb(153,153,153)';
        ctx.stroke();
        ctx.restore();
      },
      _drawArrow: function _drawArrow(ctx) {
        ctx.save();
        ctx.beginPath();

        var rate = this.distance / this.maxDistance;
        var arrowRadius = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * rate;

        ctx.arc(this.headCenter.x, this.headCenter.y, arrowRadius - (this.arrowWidth - rate), -Math.PI / 2, 0, true);

        ctx.arc(this.headCenter.x, this.headCenter.y, arrowRadius, 0, Math.PI * 3 / 2, false);

        ctx.lineTo(this.headCenter.x, this.headCenter.y - arrowRadius - this.arrowWidth / 2 + rate);
        ctx.lineTo(this.headCenter.x + this.arrowWidth * 2 - rate * 2, this.headCenter.y - arrowRadius + this.arrowWidth / 2);

        ctx.lineTo(this.headCenter.x, this.headCenter.y - arrowRadius + this.arrowWidth * 3 / 2 - rate);

        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fill();
        ctx.strokeStyle = 'rgb(170,170,170)';
        ctx.stroke();
        ctx.restore();
      }
    },
    watch: {
      y: function y() {
        this._draw();
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('canvas', {
    ref: "bubble",
    style: (_vm.style),
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  })
},staticRenderFns: []}

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "wrapper",
    staticClass: "cube-scroll-wrapper"
  }, [_c('div', {
    staticClass: "cube-scroll-content"
  }, [_c('div', {
    ref: "listWrapper",
    staticClass: "cube-scroll-list-wrapper"
  }, [_vm._t("default", [_c('ul', {
    staticClass: "cube-scroll-list"
  }, _vm._l((_vm.data), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "cube-scroll-item border-bottom-1px",
      on: {
        "click": function($event) {
          _vm.clickItem(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))])], 2), _vm._v(" "), _vm._t("pullup", [(_vm.pullUpLoad) ? _c('div', {
    staticClass: "cube-pullup-wrapper"
  }, [(!_vm.isPullUpLoad) ? _c('div', {
    staticClass: "before-trigger"
  }, [_c('span', [_vm._v(_vm._s(_vm.pullUpTxt))])]) : _c('div', {
    staticClass: "after-trigger"
  }, [_c('loading')], 1)]) : _vm._e()], {
    pullUpLoad: _vm.pullUpLoad,
    isPullUpLoad: _vm.isPullUpLoad
  })], 2), _vm._v(" "), (_vm.pullDownRefresh) ? _c('div', {
    ref: "pulldown",
    staticClass: "cube-pulldown"
  }, [_vm._t("pulldown", [_c('div', {
    staticClass: "cube-pulldown-wrapper",
    style: (_vm.pullDownStyle)
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.beforePullDown),
      expression: "beforePullDown"
    }],
    staticClass: "before-trigger"
  }, [_c('bubble', {
    staticClass: "bubble",
    attrs: {
      "y": _vm.bubbleY
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.beforePullDown),
      expression: "!beforePullDown"
    }],
    staticClass: "after-trigger"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isPullingDown),
      expression: "isPullingDown"
    }],
    staticClass: "loading"
  }, [_c('loading')], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isPullingDown),
      expression: "!isPullingDown"
    }],
    staticClass: "cube-pulldown-loaded"
  }, [_c('span', [_vm._v(_vm._s(_vm.refreshTxt))])])])])], {
    pullDownRefresh: _vm.pullDownRefresh,
    pullDownStyle: _vm.pullDownStyle,
    beforePullDown: _vm.beforePullDown,
    isPullingDown: _vm.isPullingDown,
    bubbleY: _vm.bubbleY
  })], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 332 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 333 */
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
    global.drawerItem = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-drawer-item';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      item: {
        type: [String, Object],
        default: ''
      },
      index: {
        type: Number,
        default: -1
      }
    },
    computed: {
      itemClass: function itemClass() {
        return this.$parent.$parent.selectedIndex === this.index ? 'cube-drawer-item_active' : '';
      }
    },
    methods: {
      clickItem: function clickItem(item) {
        this.$parent.$parent.itemClickHandler(item, this.index);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "cube-drawer-item border-bottom-1px",
    class: _vm.itemClass,
    on: {
      "click": function($event) {
        _vm.clickItem(_vm.item)
      }
    }
  }, [_vm._t("default", [_vm._v("\n    " + _vm._s(_vm.item.text || _vm.item) + "\n  ")])], 2)
},staticRenderFns: []}

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "cube-drawer-move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    staticClass: "cube-drawer-panel"
  }, [_c('div', {
    staticClass: "cube-drawer-scroll-wrapper"
  }, [_c('cube-scroll', {
    ref: "scroll",
    attrs: {
      "data": _vm.data
    }
  }, [_c('ul', {
    staticClass: "cube-drawer-list"
  }, [_vm._t("default", _vm._l((_vm.data), function(item, i) {
    return _c('cube-drawer-item', {
      key: i,
      attrs: {
        "item": item,
        "index": i
      }
    })
  }))], 2)])], 1)])])
},staticRenderFns: []}

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    staticClass: "cube-drawer",
    on: {
      "click": _vm.drawerClick
    }
  }, [_c('div', {
    staticClass: "cube-drawer-main",
    style: (_vm.slideStyle),
    on: {
      "click": function($event) {
        $event.stopPropagation();
      },
      "transitionend": _vm.transitionend
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$slots.title || _vm.title),
      expression: "$slots.title || title"
    }],
    staticClass: "cube-drawer-title"
  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), _c('div', {
    staticClass: "cube-drawer-panels",
    on: {
      "transitionend": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm._t("default", _vm._l((_vm.data), function(panel, index) {
    return _c('cube-drawer-panel', {
      key: index,
      attrs: {
        "index": index,
        "data": panel
      }
    })
  }))], 2)])])
},staticRenderFns: []}

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(338), __webpack_require__(348)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/image-preview/image-preview.vue'), require('./api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.imagePreview, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _imagePreview, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _imagePreview2 = _interopRequireDefault(_imagePreview);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _imagePreview2.default.install = function (Vue) {
    Vue.component(_imagePreview2.default.name, _imagePreview2.default);
    (0, _api2.default)(Vue, _imagePreview2.default);
  };

  exports.default = _imagePreview2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(339)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(340),
  /* template */
  __webpack_require__(347),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 339 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(25), __webpack_require__(101), __webpack_require__(65), __webpack_require__(27), __webpack_require__(2), __webpack_require__(6), __webpack_require__(37)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../popup/popup.vue'), require('../slide/slide.vue'), require('../slide/slide-item.vue'), require('../scroll/scroll.vue'), require('../../common/mixins/visibility'), require('../../common/mixins/popup'), require('../../common/helpers/env'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.popup, global.slide, global.slideItem, global.scroll, global.visibility, global.popup, global.env);
    global.imagePreview = mod.exports;
  }
})(this, function (module, exports, _popup, _slide2, _slideItem, _scroll2, _visibility, _popup3, _env) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _popup2 = _interopRequireDefault(_popup);

  var _slide3 = _interopRequireDefault(_slide2);

  var _slideItem2 = _interopRequireDefault(_slideItem);

  var _scroll3 = _interopRequireDefault(_scroll2);

  var _visibility2 = _interopRequireDefault(_visibility);

  var _popup4 = _interopRequireDefault(_popup3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-image-preview';
  var EVENT_CHANGE = 'change';
  var EVENT_HIDE = 'hide';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_visibility2.default, _popup4.default],
    props: {
      initialIndex: {
        type: Number,
        default: 0
      },
      imgs: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      speed: {
        type: Number,
        default: 400
      }
    },
    data: function data() {
      return {
        currentPageIndex: this.initialIndex,
        options: {
          observeDOM: false,
          bounce: {
            left: true,
            right: true
          },
          useTransition: !_env.isAndroid,
          probeType: 3
        },
        scrollOptions: {
          observeDOM: false,
          zoom: true,
          bindToWrapper: true,
          freeScroll: true,
          scrollX: true,
          scrollY: true,
          probeType: 3,
          bounce: false,
          click: false,
          dblclick: true,
          bounceTime: 300
        }
      };
    },

    watch: {
      initialIndex: function initialIndex(newIndex) {
        this.setPageIndex(newIndex);
      }
    },
    methods: {
      show: function show() {
        var _this = this;

        this.isVisible = true;
        this.$nextTick(function () {
          _this._listenSlide();
          _this._listenScroll();
        });
      },
      _listenSlide: function _listenSlide() {
        var _this2 = this;

        this.$nextTick(function () {
          var slide = _this2.$refs.slide.slide;
          slide.on('scrollStart', _this2.slideScrollStartHandler);
          slide.on('scrollEnd', _this2.slideScrollEndHandler);
        });
      },
      _listenScroll: function _listenScroll() {
        var _this3 = this;

        this.$nextTick(function () {
          _this3.$refs.items.forEach(function (scrollItem) {
            var scroll = scrollItem.scroll;
            scroll.on('zoomStart', _this3.zoomStartHandler.bind(_this3, scroll));
            scroll.on('beforeScrollStart', _this3.beforeScrollHandler);
            scroll.on('scroll', _this3.checkBoundary.bind(_this3, scroll));
            scroll.on('scrollEnd', _this3.scrollEndHandler.bind(_this3, scroll));
          });
        });
      },
      hide: function hide() {
        this.isVisible = false;
        this.$emit(EVENT_HIDE);
      },
      prev: function prev() {
        var slide = this.$refs.slide.slide;
        slide && slide.prev();
      },
      next: function next() {
        var slide = this.$refs.slide.slide;
        slide && slide.next();
      },
      goTo: function goTo(index) {
        var slide = this.$refs.slide.slide;
        slide && slide.goToPage(index, 0);
      },
      imgLoad: function imgLoad(i) {
        if (this.isVisible && this.$refs.items) {
          this.$refs.items[i].scroll.refresh();
        }
      },
      setPageIndex: function setPageIndex(currentPageIndex) {
        if (this.currentPageIndex >= 0 && this.currentPageIndex !== currentPageIndex) {
          var item = this.$refs.items[this.currentPageIndex];
          if (item) {
            var scroll = item.scroll;

            if (scroll.scale !== 1) {
              scroll.scale = 1;
              scroll.lastcale = 1;
              scroll.refresh();
            }
          }
        }
        this.currentPageIndex = currentPageIndex;
      },
      slideChangeHandler: function slideChangeHandler(currentPageIndex) {
        this.setPageIndex(currentPageIndex);
        this.slideScrollEndHandler();
        this.$emit(EVENT_CHANGE, currentPageIndex);
      },
      slideScrollStartHandler: function slideScrollStartHandler() {
        var slide = this.$refs.slide.slide;
        if (this._scrolling && !this._hasEnableSlide) {
          slide.disable();
        } else {
          slide.enable();
        }
      },
      slideScrollEndHandler: function slideScrollEndHandler() {
        var _this4 = this;

        this.$refs.items.forEach(function (scrollItem) {
          _this4.scrollEndHandler(scrollItem.scroll);
        });
      },
      _scroll: function _scroll(scroll) {
        var slide = this.$refs.slide.slide;
        slide.disable();
        slide.refresh();
        scroll.enable();
      },
      _slide: function _slide(scroll) {
        this.$refs.slide.slide.enable();
        scroll.disable();
      },
      beforeScrollHandler: function beforeScrollHandler() {
        clearTimeout(this.enableSlideTid);
      },
      scrollEndHandler: function scrollEndHandler(scroll) {
        var _this5 = this;

        clearTimeout(this.enableSlideTid);
        if (this.dblZooming) {
          this.dblZooming = false;
          clearTimeout(this.clickTid);
        }
        this._hasEnableSlide = false;
        this._scrolling = false;
        scroll.enable();
        this.enableSlideTid = setTimeout(function () {
          _this5.$refs.slide.slide.enable();
        });
      },
      checkBoundary: function checkBoundary(scroll, pos) {
        if (scroll.movingDirectionX) {
          this._scrolling = true;
          var reached = scroll.movingDirectionX === -1 ? pos.x >= scroll.minScrollX : pos.x <= scroll.maxScrollX;
          if (reached) {
            this._hasEnableSlide = true;
            this._slide(scroll);
          } else {
            if (!this._hasEnableSlide) {
              this._scroll(scroll);
            }
          }
        } else if (scroll.movingDirectionY) {
          this._scrolling = true;
          this._scroll(scroll);
        }
      },
      zoomStartHandler: function zoomStartHandler(scroll) {
        this._scroll(scroll);
      },
      dblclickHandler: function dblclickHandler(index, e) {
        var scroll = this.$refs.items[index].scroll;
        this.dblZooming = true;
        this.zoomTo(scroll, scroll.scale > 1 ? 1 : 2, e);
        scroll.disable();
      },
      itemClickHandler: function itemClickHandler() {
        var _this6 = this;

        clearTimeout(this.clickTid);
        this.clickTid = setTimeout(function () {
          !_this6.dblZooming && _this6.hide();
        }, this.scrollOptions.bounceTime);
      },
      zoomTo: function zoomTo(scroll, scale, e) {
        scroll.zoomTo(scale, e.pageX, e.pageY);
      }
    },
    components: {
      CubePopup: _popup2.default,
      CubeSlide: _slide3.default,
      CubeSlideItem: _slideItem2.default,
      CubeScroll: _scroll3.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 341 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(5), __webpack_require__(65), __webpack_require__(40), __webpack_require__(32), __webpack_require__(64)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('./slide-item.vue'), require('better-scroll'), require('../../common/mixins/scroll'), require('../../common/mixins/deprecated'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.slideItem, global.betterScroll, global.scroll, global.deprecated);
    global.slide = mod.exports;
  }
})(this, function (module, exports, _assign, _slideItem, _betterScroll, _scroll, _deprecated) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _slideItem2 = _interopRequireDefault(_slideItem);

  var _betterScroll2 = _interopRequireDefault(_betterScroll);

  var _scroll2 = _interopRequireDefault(_scroll);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-slide';
  var EVENT_CHANGE = 'change';
  var EVENT_SELECT = 'click';
  var EVENT_SCROLL_END = 'scroll-end';
  var EVENT_SCROLL = 'scroll';

  var DIRECTION_H = 'horizontal';
  var DIRECTION_V = 'vertical';

  var DEFAULT_OPTIONS = {
    momentum: false,
    click: true,
    observeDOM: false,
    bounce: false
  };

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_scroll2.default, _deprecated2.default],
    props: {
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      initialIndex: {
        type: Number,
        default: 0
      },
      loop: {
        type: Boolean,
        default: true
      },
      threshold: {
        type: Number,
        default: 0.3
      },
      speed: {
        type: Number,
        default: 400
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      showDots: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: DIRECTION_H
      },

      allowVertical: {
        type: Boolean,
        default: undefined,
        deprecated: {
          replacedBy: 'options'
        }
      },
      stopPropagation: {
        type: Boolean,
        default: undefined,
        deprecated: {
          replacedBy: 'options'
        }
      }
    },
    data: function data() {
      return {
        dots: 0,
        currentPageIndex: this.initialIndex || 0
      };
    },
    created: function created() {
      var _this = this;

      this._dataWatchers = [];
      var needRefreshProps = ['data', 'loop', 'autoPlay', 'options.eventPassthrough', 'threshold', 'speed', 'allowVertical'];
      needRefreshProps.forEach(function (key) {
        _this._dataWatchers.push(_this.$watch(key, function () {
          if (key === 'data') {
            _this._destroy();
          }

          _this.$nextTick(function () {
            _this.refresh();
          });
        }));
      });
    },

    watch: {
      initialIndex: function initialIndex(newIndex) {
        if (newIndex !== this.currentPageIndex) {
          this.slide && this.slide.goToPage(newIndex);
        }
      }
    },
    methods: {
      clickItem: function clickItem(item, index) {
        this.$emit(EVENT_SELECT, item, index);
      },
      refresh: function refresh() {
        if (this.slide === null) {
          return;
        }
        this._destroy();
        clearTimeout(this._timer);

        if (this.slide) {
          this.currentPageIndex = 0;
        }
        this._updateSlideDom();
        if (this.showDots) {
          this._initDots();
        }
        if (this.currentPageIndex >= this.dots.length) {
          this.currentPageIndex = this.dots.length - 1;
        }
        this._initSlide();

        if (this.autoPlay) {
          this._play();
        }
      },
      _destroy: function _destroy() {
        this.slide && this.slide.destroy();
      },
      _refresh: function _refresh() {
        this._updateSlideDom(true);
        this.slide.refresh();
      },
      _updateSlideDom: function _updateSlideDom(isResize) {
        this._setSlideStyle(isResize);
      },
      _setSlideStyle: function _setSlideStyle(isResize) {
        this.children = this.$refs.slideGroup.children;

        var target = this.direction === DIRECTION_H ? 'width' : 'height';
        var allSize = 0;
        var slideSize = this.$refs.slide['client' + (target[0].toUpperCase() + target.slice(1))];
        var len = this.children.length;
        for (var i = 0; i < len; i++) {
          var child = this.children[i];
          child.style[target] = slideSize + 'px';
          allSize += slideSize;
        }
        if (this.loop && !isResize && len > 1) {
          allSize += 2 * slideSize;
        }
        this.$refs.slideGroup.style[target] = allSize + 'px';
      },
      _initSlide: function _initSlide() {
        var _this2 = this;

        var eventPassthrough = this.direction === DIRECTION_H && this.allowVertical ? DIRECTION_V : '';

        var options = (0, _assign2.default)({}, DEFAULT_OPTIONS, {
          scrollX: this.direction === DIRECTION_H,
          scrollY: this.direction === DIRECTION_V,
          eventPassthrough: eventPassthrough,
          snap: {
            loop: this.loop,
            threshold: this.threshold,
            speed: this.speed
          },
          stopPropagation: this.stopPropagation
        }, this.options);

        this.slide = new _betterScroll2.default(this.$refs.slide, options);

        this.slide.goToPage(this.currentPageIndex, 0, 0);

        this.slide.on('scrollEnd', this._onScrollEnd);

        if (this.options.listenScroll) {
          this.options.probeType = 3;
          this.slide.on('scroll', this._onScroll);
        }
        var slideEl = this.$refs.slide;
        slideEl.removeEventListener('touchend', this._touchEndEvent, false);
        this._touchEndEvent = function () {
          if (_this2.autoPlay) {
            _this2._play();
          }
        };
        slideEl.addEventListener('touchend', this._touchEndEvent, false);

        this.slide.on('beforeScrollStart', function () {
          if (_this2.autoPlay) {
            clearTimeout(_this2._timer);
          }
        });
      },
      _onScrollEnd: function _onScrollEnd() {
        var _slide$getCurrentPage = this.slide.getCurrentPage(),
            pageX = _slide$getCurrentPage.pageX,
            pageY = _slide$getCurrentPage.pageY;

        var pageIndex = this.direction === DIRECTION_H ? pageX : pageY;
        if (this.currentPageIndex !== pageIndex) {
          this.currentPageIndex = pageIndex;
          this.$emit(EVENT_CHANGE, pageIndex);
        }

        this.$emit(EVENT_SCROLL_END, pageIndex);

        if (this.autoPlay) {
          this._play();
        }
      },
      _onScroll: function _onScroll(pos) {
        this.$emit(EVENT_SCROLL, pos);
      },
      _initDots: function _initDots() {
        this.dots = new Array(this.children.length);
      },
      _play: function _play() {
        var _this3 = this;

        clearTimeout(this._timer);
        this._timer = setTimeout(function () {
          _this3.slide.next();
        }, this.interval);
      },
      _deactivated: function _deactivated() {
        clearTimeout(this._timer);
        clearTimeout(this._resizeTimer);
        window.removeEventListener('resize', this._resizeHandler);
        var slideEl = this.$refs.slide;
        if (slideEl) {
          slideEl.removeEventListener('touchend', this._touchEndEvent, false);
        }
      },
      _resizeHandler: function _resizeHandler() {
        var _this4 = this;

        if (!this.slide) {
          return;
        }
        clearTimeout(this._resizeTimer);
        this._resizeTimer = setTimeout(function () {
          if (_this4.slide.isInTransition) {
            _this4._onScrollEnd();
          } else {
            if (_this4.autoPlay) {
              _this4._play();
            }
          }
          _this4._refresh();
        }, 60);
      }
    },
    mounted: function mounted() {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.refresh();
      });

      window.addEventListener('resize', this._resizeHandler);
    },
    activated: function activated() {
      if (this.autoPlay) {
        this._play();
      }
      window.addEventListener('resize', this._resizeHandler);
    },
    deactivated: function deactivated() {
      this._deactivated();
    },
    destroyed: function destroyed() {
      this._deactivated();
      this._destroy();
      this.slide = null;

      this._dataWatchers.forEach(function (cancalWatcher) {
        cancalWatcher();
      });
      this._dataWatchers = null;
    },

    components: {
      CubeSlideItem: _slideItem2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 343 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 344 */
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
    global.slideItem = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-slide-item';
  exports.default = {
    name: COMPONENT_NAME,
    props: {
      item: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 345 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-slide-item"
  }, [_vm._t("default", [_c('a', {
    attrs: {
      "href": _vm.item.url
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.item.image
    }
  })])])], 2)
},staticRenderFns: []}

/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "slide",
    staticClass: "cube-slide"
  }, [_c('div', {
    ref: "slideGroup",
    staticClass: "cube-slide-group"
  }, [_vm._t("default", _vm._l((_vm.data), function(item, index) {
    return _c('cube-slide-item', {
      key: index,
      attrs: {
        "item": item
      },
      nativeOn: {
        "click": function($event) {
          _vm.clickItem(item, index)
        }
      }
    })
  }))], 2), _vm._v(" "), (_vm.showDots) ? _c('div', {
    staticClass: "cube-slide-dots"
  }, [_vm._t("dots", _vm._l((_vm.dots), function(item, index) {
    return _c('span', {
      key: index,
      class: {
        active: _vm.currentPageIndex === index
      }
    })
  }), {
    current: _vm.currentPageIndex,
    dots: _vm.dots
  })], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "cube-image-preview-fade"
    }
  }, [_c('cube-popup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisible),
      expression: "isVisible"
    }],
    attrs: {
      "type": "image-preview",
      "center": false
    }
  }, [_c('div', {
    staticClass: "cube-image-preview-container"
  }, [_c('div', {
    staticClass: "cube-image-preview-header"
  }, [_vm._t("header", null, {
    current: _vm.currentPageIndex
  })], 2), _vm._v(" "), (_vm.isVisible) ? _c('cube-slide', {
    ref: "slide",
    attrs: {
      "data": _vm.imgs,
      "initial-index": _vm.currentPageIndex,
      "auto-play": false,
      "loop": _vm.loop,
      "speed": _vm.speed,
      "options": _vm.options
    },
    on: {
      "change": _vm.slideChangeHandler
    }
  }, [_vm._l((_vm.imgs), function(img, index) {
    return _c('cube-slide-item', {
      key: index
    }, [_c('div', {
      staticClass: "cube-image-preview-item",
      on: {
        "click": _vm.itemClickHandler
      }
    }, [_c('cube-scroll', {
      ref: "items",
      refInFor: true,
      attrs: {
        "options": _vm.scrollOptions
      },
      nativeOn: {
        "dblclick": function($event) {
          _vm.dblclickHandler(index, $event)
        }
      }
    }, [_c('img', {
      staticClass: "cube-image-preview-img",
      attrs: {
        "src": img
      },
      on: {
        "load": function($event) {
          _vm.imgLoad(index)
        }
      }
    })])], 1)])
  }), _vm._v(" "), _c('template', {
    slot: "dots"
  }, [_c('i')])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "cube-image-preview-footer"
  }, [_vm._t("footer", [_c('span', {
    staticClass: "cube-image-preview-counter"
  }, [_vm._v(_vm._s(_vm.currentPageIndex + 1) + "/" + _vm._s(_vm.imgs.length))])], {
    current: _vm.currentPageIndex
  })], 2)], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
  exports.default = addImagePreview;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addImagePreview(Vue, ImagePreview) {
    (0, _createApi2.default)(Vue, ImagePreview, ['change', 'hide'], true);
  }
  module.exports = exports['default'];
});

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(27)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/scroll/scroll.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.scroll);
    global.index = mod.exports;
  }
})(this, function (module, exports, _scroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _scroll2 = _interopRequireDefault(_scroll);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _scroll2.default.install = function (Vue) {
    Vue.component(_scroll2.default.name, _scroll2.default);
  };

  exports.default = _scroll2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(101), __webpack_require__(65)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/slide/slide.vue'), require('../../components/slide/slide-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.slide, global.slideItem);
    global.index = mod.exports;
  }
})(this, function (module, exports, _slide, _slideItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slide2 = _interopRequireDefault(_slide);

  var _slideItem2 = _interopRequireDefault(_slideItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _slide2.default.install = function (Vue) {
    Vue.component(_slide2.default.name, _slide2.default);
    Vue.component(_slideItem2.default.name, _slideItem2.default);
  };

  _slide2.default.Item = _slideItem2.default;

  exports.default = _slide2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(352), __webpack_require__(102), __webpack_require__(103)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/index-list/index-list.vue'), require('../../components/index-list/index-list-group.vue'), require('../../components/index-list/index-list-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.indexList, global.indexListGroup, global.indexListItem);
    global.index = mod.exports;
  }
})(this, function (module, exports, _indexList, _indexListGroup, _indexListItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _indexList2 = _interopRequireDefault(_indexList);

  var _indexListGroup2 = _interopRequireDefault(_indexListGroup);

  var _indexListItem2 = _interopRequireDefault(_indexListItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _indexList2.default.install = function (Vue) {
    Vue.component(_indexList2.default.name, _indexList2.default);
    Vue.component(_indexListGroup2.default.name, _indexListGroup2.default);
    Vue.component(_indexListItem2.default.name, _indexListItem2.default);
  };

  _indexList2.default.Group = _indexListGroup2.default;
  _indexList2.default.Item = _indexListItem2.default;

  exports.default = _indexList2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(353)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(354),
  /* template */
  __webpack_require__(360),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 353 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(5), __webpack_require__(8), __webpack_require__(37), __webpack_require__(27), __webpack_require__(102), __webpack_require__(32), __webpack_require__(64)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('../../common/helpers/dom'), require('../../common/helpers/env'), require('../scroll/scroll.vue'), require('./index-list-group.vue'), require('../../common/mixins/scroll'), require('../../common/mixins/deprecated'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.dom, global.env, global.scroll, global.indexListGroup, global.scroll, global.deprecated);
    global.indexList = mod.exports;
  }
})(this, function (module, exports, _assign, _dom, _env, _scroll, _indexListGroup, _scroll3, _deprecated) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _scroll2 = _interopRequireDefault(_scroll);

  var _indexListGroup2 = _interopRequireDefault(_indexListGroup);

  var _scroll4 = _interopRequireDefault(_scroll3);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-index-list';
  var EVENT_SELECT = 'select';
  var EVENT_TITLE_CLICK = 'title-click';
  var EVENT_PULLING_UP = 'pulling-up';
  var EVENT_PULLING_DOWN = 'pulling-down';

  var ANCHOR_HEIGHT = _env.inBrowser ? window.innerHeight <= 480 ? 17 : 18 : 18;
  var transformStyleKey = (0, _dom.prefixStyle)('transform');

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_scroll4.default, _deprecated2.default],
    props: {
      title: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      speed: {
        type: Number,
        default: 0
      },
      navbar: {
        type: Boolean,
        default: true
      },
      pullDownRefresh: {
        type: [Object, Boolean],
        default: undefined,
        deprecated: {
          replacedBy: 'options'
        }
      },
      pullUpLoad: {
        type: [Object, Boolean],
        default: undefined,
        deprecated: {
          replacedBy: 'options'
        }
      }
    },
    data: function data() {
      return {
        scrollEvents: ['scroll'],
        currentIndex: 0,
        scrollY: -1,
        diff: -1,
        titleHeight: 0
      };
    },

    computed: {
      fixedTitle: function fixedTitle() {
        this.title && !this.titleHeight && this._caculateTitleHeight();

        return this.scrollY <= -this.titleHeight && this.data[this.currentIndex] ? this.data[this.currentIndex].name : '';
      },
      shortcutList: function shortcutList() {
        return this.data.map(function (group) {
          return group ? group.shortcut || group.name.substr(0, 1) : '';
        });
      },
      scrollOptions: function scrollOptions() {
        return (0, _assign2.default)({}, {
          pullDownRefresh: this.pullDownRefresh,
          pullUpLoad: this.pullUpLoad
        }, this.options);
      }
    },
    created: function created() {
      this.groupList = [];
      this.listHeight = [];
      this.touch = {};
      this.subTitleHeight = 0;
    },
    mounted: function mounted() {
      var _this = this;

      this.$nextTick(function () {
        _this.title && _this._caculateTitleHeight();
        _this._calculateHeight();
      });
    },

    methods: {
      refresh: function refresh() {
        this.$refs.scroll.refresh();
      },
      selectItem: function selectItem(item) {
        this.$emit(EVENT_SELECT, item);
      },
      scroll: function scroll(pos) {
        this.scrollY = pos.y;
      },
      titleClick: function titleClick() {
        this.$emit(EVENT_TITLE_CLICK, this.title);
      },
      forceUpdate: function forceUpdate() {
        this.$refs.scroll.forceUpdate();
      },
      onShortcutTouchStart: function onShortcutTouchStart(e) {
        var target = (0, _dom.getMatchedTarget)(e, 'cube-index-list-nav-item');
        if (!target) return;
        var anchorIndex = (0, _dom.getData)(target, 'index');
        var firstTouch = e.touches[0];
        this.touch.y1 = firstTouch.pageY;
        this.touch.anchorIndex = anchorIndex;

        this._scrollTo(anchorIndex);
      },
      onShortcutTouchMove: function onShortcutTouchMove(e) {
        var firstTouch = e.touches[0];
        this.touch.y2 = firstTouch.pageY;
        var delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0;
        var anchorIndex = parseInt(this.touch.anchorIndex) + delta;

        this._scrollTo(anchorIndex);
      },
      onPullingUp: function onPullingUp() {
        this.$emit(EVENT_PULLING_UP);
      },
      onPullingDown: function onPullingDown() {
        this.$emit(EVENT_PULLING_DOWN);
      },
      _caculateTitleHeight: function _caculateTitleHeight() {
        this.titleHeight = this.$refs.title ? (0, _dom.getRect)(this.$refs.title).height : 0;
      },
      _calculateHeight: function _calculateHeight() {
        this.groupList = this.$el.getElementsByClassName('cube-index-list-group');
        var subTitleEl = this.$el.getElementsByClassName('cube-index-list-anchor')[0];
        this.subTitleHeight = subTitleEl ? (0, _dom.getRect)(subTitleEl).height : 0;
        this.listHeight = [];

        if (!this.groupList) {
          return;
        }

        var height = this.titleHeight;
        this.listHeight.push(height);
        for (var i = 0; i < this.groupList.length; i++) {
          var item = this.groupList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      _scrollTo: function _scrollTo(index) {
        if (index < 0) {
          index = 0;
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2;
        }
        this.$refs.scroll.scrollToElement(this.groupList[index], this.speed);
        this.scrollY = this.$refs.scroll.scroll.y;
      }
    },
    watch: {
      data: function data() {
        var _this2 = this;

        this.$nextTick(function () {
          _this2._calculateHeight();
        });
      },
      title: function title(newVal) {
        var _this3 = this;

        this.$nextTick(function () {
          _this3._caculateTitleHeight();
          _this3._calculateHeight();
        });
      },
      diff: function diff(newVal) {
        var fixedTop = newVal > 0 && newVal < this.subTitleHeight ? newVal - this.subTitleHeight : 0;
        if (this.fixedTop === fixedTop) {
          return;
        }
        this.fixedTop = fixedTop;
        this.$refs.fixed.style[transformStyleKey] = 'translate3d(0,' + fixedTop + 'px,0)';
      },
      scrollY: function scrollY(newY) {
        var listHeight = this.listHeight;

        if (newY > -this.titleHeight) {
          this.currentIndex = 0;
          return;
        }

        for (var i = 0; i < listHeight.length - 1; i++) {
          var height1 = listHeight[i];
          var height2 = listHeight[i + 1];
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i;
            this.diff = height2 + newY;
            return;
          }
        }

        this.currentIndex = listHeight.length - 2;
      }
    },
    components: {
      CubeScroll: _scroll2.default,
      CubeIndexListGroup: _indexListGroup2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(103)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./index-list-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.indexListItem);
    global.indexListGroup = mod.exports;
  }
})(this, function (module, exports, _indexListItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _indexListItem2 = _interopRequireDefault(_indexListItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-index-list-group';
  var EVENT_SELECT = 'select';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      group: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    methods: {
      selectItem: function selectItem(item) {
        this.$emit(EVENT_SELECT, item);
      }
    },
    components: {
      CubeIndexListItem: _indexListItem2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 356 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.dom);
    global.indexListItem = mod.exports;
  }
})(this, function (module, exports, _dom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-index-list-item';
  var ACTIVE_CLS = 'cube-index-list-item_active';
  var EVENT_SELECT = 'select';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      item: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    computed: {
      itemClass: function itemClass() {
        return this.item.active ? ACTIVE_CLS : '';
      }
    },
    methods: {
      addActiveCls: function addActiveCls(e) {
        (0, _dom.addClass)(e.currentTarget, ACTIVE_CLS);
      },
      removeActiveCls: function removeActiveCls(e) {
        (0, _dom.removeClass)(e.currentTarget, ACTIVE_CLS);
      },
      selectItem: function selectItem() {
        this.$emit(EVENT_SELECT, this.item);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 358 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "cube-index-list-item",
    class: _vm.itemClass,
    on: {
      "touchstart": _vm.addActiveCls,
      "touchend": _vm.removeActiveCls,
      "click": function($event) {
        _vm.selectItem()
      }
    }
  }, [_vm._t("default", [_c('div', {
    staticClass: "cube-index-list-item-def border-bottom-1px"
  }, [_vm._v("\n      " + _vm._s(_vm.item.name) + "\n    ")])])], 2)
},staticRenderFns: []}

/***/ }),
/* 359 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "cube-index-list-group"
  }, [_c('h2', {
    staticClass: "cube-index-list-anchor",
    domProps: {
      "innerHTML": _vm._s(_vm.group.name)
    }
  }), _vm._v(" "), _c('ul', [_vm._t("default", _vm._l((_vm.group.items), function(item, index) {
    return _c('cube-index-list-item', {
      key: index,
      attrs: {
        "item": item
      },
      on: {
        "select": _vm.selectItem
      }
    })
  }))], 2)])
},staticRenderFns: []}

/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-index-list"
  }, [_c('cube-scroll', {
    ref: "scroll",
    attrs: {
      "scroll-events": _vm.scrollEvents,
      "options": _vm.scrollOptions,
      "data": _vm.data
    },
    on: {
      "scroll": _vm.scroll,
      "pulling-down": _vm.onPullingDown,
      "pulling-up": _vm.onPullingUp
    },
    scopedSlots: _vm._u([{
      key: "pullup",
      fn: function(props) {
        return _vm.$slots.pullup || _vm.$scopedSlots.pullup ? [_vm._t("pullup", null, {
          pullUpLoad: props.pullUpLoad,
          isPullUpLoad: props.isPullUpLoad
        })] : undefined
      }
    }, {
      key: "pulldown",
      fn: function(props) {
        return _vm.$slots.pulldown || _vm.$scopedSlots.pulldown ? [_vm._t("pulldown", null, {
          pullDownRefresh: props.pullDownRefresh,
          pullDownStyle: props.pullDownStyle,
          beforePullDown: props.beforePullDown,
          isPullingDown: props.isPullingDown,
          bubbleY: props.bubbleY
        })] : undefined
      }
    }])
  }, [_c('div', {
    ref: "content",
    staticClass: "cube-index-list-content"
  }, [(_vm.title) ? _c('h1', {
    ref: "title",
    staticClass: "cube-index-list-title",
    on: {
      "click": _vm.titleClick
    }
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]) : _vm._e(), _vm._v(" "), _c('ul', [_vm._t("default", _vm._l((_vm.data), function(group, index) {
    return _c('cube-index-list-group', {
      key: index,
      attrs: {
        "group": group
      },
      on: {
        "select": _vm.selectItem
      }
    })
  }))], 2)])]), _vm._v(" "), (_vm.navbar) ? _c('div', {
    staticClass: "cube-index-list-nav",
    on: {
      "touchstart": _vm.onShortcutTouchStart,
      "touchmove": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.onShortcutTouchMove($event)
      }
    }
  }, [_c('ul', {
    staticClass: "cube-index-list-nav-list"
  }, _vm._l((_vm.shortcutList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "cube-index-list-nav-item",
      class: {
        active: _vm.currentIndex === index
      },
      attrs: {
        "data-index": index
      }
    }, [_vm._t("nav-item", [_vm._v(_vm._s(item))], {
      item: item
    })], 2)
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.fixedTitle),
      expression: "fixedTitle"
    }],
    ref: "fixed",
    staticClass: "cube-index-list-fixed cube-index-list-anchor",
    domProps: {
      "innerHTML": _vm._s(_vm.fixedTitle)
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(362), __webpack_require__(104)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/swipe/swipe.vue'), require('../../components/swipe/swipe-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.swipe, global.swipeItem);
    global.index = mod.exports;
  }
})(this, function (module, exports, _swipe, _swipeItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _swipe2 = _interopRequireDefault(_swipe);

  var _swipeItem2 = _interopRequireDefault(_swipeItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _swipe2.default.install = function (Vue) {
    Vue.component(_swipe2.default.name, _swipe2.default);
    Vue.component(_swipeItem2.default.name, _swipeItem2.default);
  };

  _swipe2.default.Item = _swipeItem2.default;

  exports.default = _swipe2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(363)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(364),
  /* template */
  __webpack_require__(369),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 363 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(104)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./swipe-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.swipeItem);
    global.swipe = mod.exports;
  }
})(this, function (module, exports, _swipeItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _swipeItem2 = _interopRequireDefault(_swipeItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-swipe';
  var EVENT_ITEM_CLICK = 'item-click';
  var EVENT_BTN_CLICK = 'btn-click';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      autoShrink: {
        type: Boolean,
        default: false
      }
    },
    created: function created() {
      this.activeIndex = -1;
    },

    methods: {
      onItemClick: function onItemClick(item, index) {
        this.$emit(EVENT_ITEM_CLICK, item, index);
      },
      onBtnClick: function onBtnClick(btn, index) {
        var item = this.data[index];
        this.$emit(EVENT_BTN_CLICK, btn, index, item);
      },
      onItemActive: function onItemActive(index) {
        if (index === this.activeIndex) {
          return;
        }
        if (this.activeIndex !== -1) {
          var activeItem = this.$refs.swipeItem[this.activeIndex];
          activeItem.shrink();
        }
        this.activeIndex = index;
      }
    },
    components: {
      CubeSwipeItem: _swipeItem2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 365 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(8), __webpack_require__(367), __webpack_require__(63)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/dom'), require('../../common/helpers/ease'), require('../../common/lang/date'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.dom, global.ease, global.date);
    global.swipeItem = mod.exports;
  }
})(this, function (module, exports, _dom, _ease, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-swipe-item';
  var EVENT_ITEM_CLICK = 'item-click';
  var EVENT_BTN_CLICK = 'btn-click';
  var EVENT_SCROLL = 'scroll';
  var EVENT_ACTIVE = 'active';
  var DIRECTION_LEFT = 1;
  var DIRECTION_RIGHT = -1;
  var STATE_SHRINK = 0;
  var STATE_GROW = 1;
  var easingTime = 600;
  var momentumLimitTime = 300;
  var momentumLimitDistance = 15;
  var directionLockThreshold = 5;

  var transform = (0, _dom.prefixStyle)('transform');
  var transitionProperty = (0, _dom.prefixStyle)('transitionProperty');
  var transitionDuration = (0, _dom.prefixStyle)('transitionDuration');
  var transitionTimingFunction = (0, _dom.prefixStyle)('transitionTimingFunction');

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      item: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      btns: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      index: {
        type: Number,
        index: -1
      },
      autoShrink: {
        type: Boolean,
        default: false
      }
    },
    created: function created() {
      this.x = 0;
      this.state = STATE_SHRINK;
    },
    mounted: function mounted() {
      var _this = this;

      this.scrollerStyle = this.$refs.swipeItem.style;
      this.$nextTick(function () {
        _this.refresh();
      });
      this.$on(EVENT_SCROLL, this._handleBtns);
    },

    methods: {
      _initCachedBtns: function _initCachedBtns() {
        this.cachedBtns = [];
        var len = this.$refs.btns.length;
        for (var i = 0; i < len; i++) {
          this.cachedBtns.push({
            width: (0, _dom.getRect)(this.$refs.btns[i]).width
          });
        }
      },
      _handleBtns: function _handleBtns(x) {
        if (this.btns.length === 0) {
          return;
        }
        var len = this.$refs.btns.length;
        var delta = 0;
        var totalWidth = -this.maxScrollX;
        for (var i = 0; i < len; i++) {
          var btn = this.$refs.btns[i];
          var rate = (totalWidth - delta) / totalWidth;
          var width = void 0;
          var translate = rate * x - x;
          if (x < this.maxScrollX) {
            width = this.cachedBtns[i].width + rate * (this.maxScrollX - x);
          } else {
            width = this.cachedBtns[i].width;
          }
          delta += this.cachedBtns[i].width;
          btn.style.width = width + 'px';
          btn.style[transform] = 'translate(' + translate + 'px)';
          btn.style[transitionDuration] = '0ms';
        }
      },
      _isInBtns: function _isInBtns(target) {
        var parent = target;
        var flag = false;
        while (parent && parent.className.indexOf('cube-swipe-item') < 0) {
          if (parent.className.indexOf('cube-swipe-btns') >= 0) {
            flag = true;
            break;
          }
          parent = parent.parentNode;
        }
        return flag;
      },
      _calculateBtnsWidth: function _calculateBtnsWidth() {
        var width = 0;
        var len = this.cachedBtns.length;
        for (var i = 0; i < len; i++) {
          width += this.cachedBtns[i].width;
        }
        this.maxScrollX = -width;
      },
      _translate: function _translate(x, useZ) {
        var translateZ = useZ ? ' translateZ(0)' : '';
        this.scrollerStyle[transform] = 'translate(' + x + 'px,0)' + translateZ;
        this.x = x;
      },
      _transitionProperty: function _transitionProperty() {
        var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

        this.scrollerStyle[transitionProperty] = property;
      },
      _transitionTimingFunction: function _transitionTimingFunction(easing) {
        this.scrollerStyle[transitionTimingFunction] = easing;
      },
      _transitionTime: function _transitionTime() {
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        this.scrollerStyle[transitionDuration] = time + 'ms';
      },
      _getComputedPositionX: function _getComputedPositionX() {
        var matrix = window.getComputedStyle(this.$refs.swipeItem, null);
        matrix = matrix[transform].split(')')[0].split(', ');
        var x = +(matrix[12] || matrix[4]);
        return x;
      },
      _translateBtns: function _translateBtns(time, easing, extend) {
        if (this.btns.length === 0) {
          return;
        }
        var len = this.$refs.btns.length;
        var delta = 0;
        var translate = 0;
        for (var i = 0; i < len; i++) {
          var btn = this.$refs.btns[i];
          if (this.state === STATE_GROW) {
            translate = delta;
          } else {
            translate = 0;
          }
          delta += this.cachedBtns[i].width;
          btn.style[transform] = 'translate(' + translate + 'px,0) translateZ(0)';
          btn.style[transitionProperty] = 'all';
          btn.style[transitionTimingFunction] = easing;
          btn.style[transitionDuration] = time + 'ms';
          if (extend) {
            btn.style.width = this.cachedBtns[i].width + 'px';
          }
        }
      },
      refresh: function refresh() {
        if (this.btns.length > 0) {
          this._initCachedBtns();
          this._calculateBtnsWidth();
        }
        this.endTime = 0;
      },
      shrink: function shrink() {
        var _this2 = this;

        this.stop();
        this.state = STATE_SHRINK;
        this.$nextTick(function () {
          _this2.scrollTo(0, easingTime, _ease.easeOutQuart);
          _this2._translateBtns(easingTime, _ease.easeOutQuart);
        });
      },
      grow: function grow() {
        this.state = STATE_GROW;
        var extend = this.x < this.maxScrollX;
        var easing = _ease.easeOutCubic;
        this.scrollTo(this.maxScrollX, easingTime, easing);
        this._translateBtns(easingTime, easing, extend);
      },
      scrollTo: function scrollTo(x, time, easing) {
        this._transitionProperty();
        this._transitionTimingFunction(easing);
        this._transitionTime(time);
        this._translate(x, true);
        if (time) {
          this.isInTransition = true;
        }
      },
      genBtnStyl: function genBtnStyl(btn) {
        return 'background: ' + btn.color;
      },
      clickItem: function clickItem(item) {
        this.$emit(EVENT_ITEM_CLICK, item, this.index);
      },
      clickBtn: function clickBtn(btn) {
        this.$emit(EVENT_BTN_CLICK, btn, this.index);
        if (this.autoShrink) {
          this.shrink();
        }
      },
      stop: function stop() {
        if (this.isInTransition) {
          this.isInTransition = false;
          var x = this.state === STATE_SHRINK ? 0 : this._getComputedPositionX();
          this._translate(x);
          this.$emit(EVENT_SCROLL, this.x);
        }
      },
      onTouchStart: function onTouchStart(e) {
        var _this3 = this;

        this.$emit(EVENT_ACTIVE, this.index);
        this.stop();
        this.moved = false;
        this.movingDirectionX = 0;
        var point = e.touches[0];
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.distX = 0;
        this.distY = 0;
        this.startX = this.x;
        this._transitionTime();
        this.startTime = (0, _date.getNow)();
        if (this.state === STATE_GROW && !this._isInBtns(e.target)) {
          this.shrinkTimer = setTimeout(function () {
            _this3.shrink();
          }, 300);
        }
      },
      onTouchMove: function onTouchMove(e) {
        if (this.moved) {
          clearTimeout(this.shrinkTimer);
          e.stopPropagation();
        }

        if (this.isInTransition) {
          return;
        }
        e.preventDefault();
        var point = e.touches[0];
        var deltaX = point.pageX - this.pointX;
        var deltaY = point.pageY - this.pointY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;

        this.distX += deltaX;
        this.distY += deltaY;
        var absDistX = Math.abs(this.distX);
        var absDistY = Math.abs(this.distY);

        if (absDistX + directionLockThreshold <= absDistY) {
          return;
        }

        var timestamp = (0, _date.getNow)();
        if (timestamp - this.endTime > momentumLimitTime && absDistX < momentumLimitDistance) {
          return;
        }

        this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;

        var newX = this.x + deltaX;
        if (newX > 0) {
          newX = 0;
        }
        if (newX < this.maxScrollX) {
          newX = this.x + deltaX / 3;
        }
        if (!this.moved) {
          this.moved = true;
        }

        this._translate(newX, true);

        if (timestamp - this.startTime > momentumLimitTime) {
          this.startTime = timestamp;
          this.startX = this.x;
        }

        this.$emit(EVENT_SCROLL, this.x);
      },
      onTouchEnd: function onTouchEnd() {
        if (!this.moved) {
          return;
        }
        if (this.movingDirectionX === DIRECTION_RIGHT) {
          this.shrink();
          return;
        }
        this.endTime = (0, _date.getNow)();
        var duration = this.endTime - this.startTime;
        var absDistX = Math.abs(this.x - this.startX);
        if (duration < momentumLimitTime && absDistX > momentumLimitDistance || this.x < this.maxScrollX / 2) {
          this.grow();
        } else {
          this.shrink();
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        this.isInTransition = false;
        this._transitionTime();
        this._translate(this.x);
      }
    },
    watch: {
      btns: function btns() {
        var _this4 = this;

        this.$nextTick(function () {
          _this4.refresh();
        });
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 367 */
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
    global.ease = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var easeOutBack = exports.easeOutBack = 'cubic-bezier(0.18, 0.89, 0.32, 1.28)';
  var easeOutQuart = exports.easeOutQuart = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
  var easeOutCubic = exports.easeOutCubic = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
});

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "swipeItem",
    staticClass: "cube-swipe-item",
    on: {
      "transitionend": _vm.onTransitionEnd,
      "touchstart": _vm.onTouchStart,
      "touchmove": _vm.onTouchMove,
      "touchend": _vm.onTouchEnd
    }
  }, [_vm._t("default", [_c('div', {
    staticClass: "cube-swipe-item-inner border-bottom-1px",
    on: {
      "click": function($event) {
        _vm.clickItem(_vm.item)
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.item.text))])])]), _vm._v(" "), _c('ul', {
    staticClass: "cube-swipe-btns"
  }, _vm._l((_vm.btns), function(btn) {
    return _c('li', {
      ref: "btns",
      refInFor: true,
      staticClass: "cube-swipe-btn",
      style: (_vm.genBtnStyl(btn)),
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.clickBtn(btn)
        }
      }
    }, [_c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(btn.text))])])
  }))], 2)
},staticRenderFns: []}

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-swipe"
  }, [_vm._t("default", [_c('transition-group', {
    attrs: {
      "name": "cube-swipe",
      "tag": "ul"
    }
  }, _vm._l((_vm.data), function(item, index) {
    return _c('li', {
      key: item.item.value
    }, [_c('cube-swipe-item', {
      ref: "swipeItem",
      refInFor: true,
      attrs: {
        "btns": item.btns,
        "item": item.item,
        "index": index,
        "auto-shrink": _vm.autoShrink
      },
      on: {
        "item-click": _vm.onItemClick,
        "btn-click": _vm.onBtnClick,
        "active": _vm.onItemActive
      }
    })], 1)
  }))])], 2)
},staticRenderFns: []}

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(105), __webpack_require__(66)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/sticky/sticky.vue'), require('../../components/sticky/sticky-ele.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.sticky, global.stickyEle);
    global.index = mod.exports;
  }
})(this, function (module, exports, _sticky, _stickyEle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _sticky2 = _interopRequireDefault(_sticky);

  var _stickyEle2 = _interopRequireDefault(_stickyEle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _sticky2.default.install = function (Vue) {
    Vue.component(_sticky2.default.name, _sticky2.default);
    Vue.component(_stickyEle2.default.name, _stickyEle2.default);
  };

  _sticky2.default.Ele = _sticky2.default;

  exports.default = _sticky2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 371 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/helpers/dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.dom);
    global.sticky = mod.exports;
  }
})(this, function (module, exports, _dom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-sticky';
  var EVENT_CHANGE = 'change';
  var EVENT_DIFF_CHANGE = 'diff-change';

  var transformStyleKey = (0, _dom.prefixStyle)('transform');

  exports.default = {
    name: COMPONENT_NAME,
    provide: function provide() {
      return {
        sticky: this
      };
    },

    props: {
      pos: {
        type: Number,
        required: true
      },
      checkTop: {
        type: Boolean,
        default: true
      },
      fixedShowAni: {
        type: String,
        default: function _default() {
          return this.checkTop ? '' : 'cube-sticky-fixed-fade';
        }
      },
      offset: {
        type: Number,
        default: 0
      }
    },
    data: function data() {
      return {
        diff: 0,
        currentDiff: 0,
        currentIndex: -1,
        currentKey: ''
      };
    },

    computed: {
      fixedShow: function fixedShow() {
        var targetEle = this.eles[this.currentIndex];
        return !!targetEle;
      }
    },
    watch: {
      diff: function diff(newVal) {
        if (newVal >= 0) {
          newVal = 0;
        }
        newVal = Math.ceil(newVal);
        if (this._fixedTop === newVal) {
          return;
        }
        this._fixedTop = newVal;
        this.$refs.fixedEle.style[transformStyleKey] = 'translate3d(0, ' + newVal + 'px, 0)';
      },

      pos: 'computeCurrentSticky',
      currentIndex: function currentIndex(newIndex, oldIndex) {
        var _this = this;

        var oldEle = this.eles[oldIndex];
        var newEle = this.eles[newIndex];

        var currentKey = newEle && newEle.eleKey !== undefined ? newEle.eleKey : newIndex === -1 ? '' : newIndex;
        var fixedEle = this.$refs.fixedEle;
        var fixedSlot = this.$slots.fixed || this.$scopedSlots.fixed;

        this.$nextTick(function () {
          if (fixedSlot) {
            _this.fixedEleHeight = fixedEle.offsetHeight;
          } else {
            var oldChild = fixedEle.firstElementChild;
            if (oldEle) {
              oldEle.$el.appendChild(oldChild);
              oldEle.refresh();
            }
            if (newEle) {
              fixedEle.appendChild(newEle.$el.firstElementChild);
              _this.fixedEleHeight = fixedEle.offsetHeight;
            } else {
              _this.fixedEleHeight = 0;
            }
          }
        });

        this.currentKey = currentKey;
        this.$emit(EVENT_CHANGE, currentKey, newIndex);
      },
      currentDiff: function currentDiff(newVal) {
        var height = this.heights[this.currentIndex] || 0;
        this.$emit(EVENT_DIFF_CHANGE, newVal, height);
      }
    },
    created: function created() {
      this.fixedEleHeight = 0;
      this.eles = [];
      this.positions = [];
      this.heights = [];
    },
    mounted: function mounted() {
      this.refresh();
    },

    methods: {
      addEle: function addEle(ele) {
        this.eles.push(ele);
      },
      removeEle: function removeEle(ele) {
        var i = this.eles.indexOf(ele);
        this.eles.splice(i, 1);
        this.positions.splice(i, 1);
      },
      refresh: function refresh() {
        var _this2 = this;

        this.$nextTick(function () {
          _this2.eles.forEach(function (ele) {
            ele.refresh();
          });
          _this2._calculateHeight();
          _this2.computeCurrentSticky(_this2.pos);
        });
      },
      computeCurrentSticky: function computeCurrentSticky(scrollY) {
        scrollY += this.offset;

        var positions = this.positions;
        var heights = this.heights;
        var checkTop = this.checkTop;

        var len = positions.length;
        for (var i = len - 1; i >= 0; i--) {
          var isLast = i === len - 1;
          var nextTop = isLast ? scrollY : positions[i + 1];
          var top = void 0;
          var bottom = void 0;
          if (checkTop) {
            top = positions[i];
            bottom = top + heights[i];
          } else {
            top = positions[i] + heights[i];
            bottom = top;
          }
          var max = Math.max(bottom, nextTop);

          if (scrollY >= top && scrollY <= max) {
            this.currentIndex = i;
            this.currentDiff = scrollY - top;
            var diff = nextTop - scrollY;
            if (diff >= 0 && !isLast) {
              this.diff = diff - (this.fixedEleHeight || heights[i]);
            } else {
              this.diff = 0;
            }
            return;
          }
        }
        this.currentIndex = -1;
        this.currentDiff = 0;
      },
      _calculateHeight: function _calculateHeight() {
        var _this3 = this;

        var eles = this.eles;
        eles.forEach(function (ele, i) {
          var _getRect = (0, _dom.getRect)(ele.$el),
              top = _getRect.top,
              height = _getRect.height;

          _this3.positions[i] = top;
          _this3.heights[i] = height;
        });
        this.fixedEleHeight = this.$refs.fixedEle.offsetHeight;
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-sticky"
  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.fixedShowAni
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.fixedShow),
      expression: "fixedShow"
    }],
    ref: "fixedEle",
    staticClass: "cube-sticky-fixed"
  }, [_vm._t("fixed", null, {
    current: _vm.currentKey,
    index: _vm.currentIndex
  })], 2)])], 2)
},staticRenderFns: []}

/***/ }),
/* 374 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 375 */
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
    global.stickyEle = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-sticky-ele';

  exports.default = {
    name: COMPONENT_NAME,
    inject: ['sticky'],
    props: {
      eleKey: {
        type: [Number, String]
      }
    },
    mounted: function mounted() {
      this.sticky.addEle(this);
    },

    methods: {
      refresh: function refresh() {
        var el = this.$el;
        if (el.firstElementChild) {
          el.style.height = '';
          el.style.height = el.offsetHeight + 'px';
        }
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.sticky.removeEle(this);
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-sticky-ele"
  }, [_c('div', {
    staticClass: "cube-sticky-content"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(378), __webpack_require__(385), __webpack_require__(67)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/scroll-nav/scroll-nav.vue'), require('../../components/scroll-nav/scroll-nav-panel.vue'), require('../../components/scroll-nav-bar/scroll-nav-bar.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.scrollNav, global.scrollNavPanel, global.scrollNavBar);
    global.index = mod.exports;
  }
})(this, function (module, exports, _scrollNav, _scrollNavPanel, _scrollNavBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _scrollNav2 = _interopRequireDefault(_scrollNav);

  var _scrollNavPanel2 = _interopRequireDefault(_scrollNavPanel);

  var _scrollNavBar2 = _interopRequireDefault(_scrollNavBar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _scrollNav2.default.install = function (Vue) {
    Vue.component(_scrollNav2.default.name, _scrollNav2.default);
    Vue.component(_scrollNavPanel2.default.name, _scrollNavPanel2.default);
    Vue.component(_scrollNavBar2.default.name, _scrollNavBar2.default);
  };

  _scrollNav2.default.Panel = _scrollNavPanel2.default;
  _scrollNav2.default.Bar = _scrollNavBar2.default;

  exports.default = _scrollNav2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(379)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(380),
  /* template */
  __webpack_require__(384),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 379 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(32), __webpack_require__(105), __webpack_require__(66), __webpack_require__(27), __webpack_require__(67)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/mixins/scroll'), require('../sticky/sticky.vue'), require('../sticky/sticky-ele.vue'), require('../scroll/scroll.vue'), require('../scroll-nav-bar/scroll-nav-bar.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.scroll, global.sticky, global.stickyEle, global.scroll, global.scrollNavBar);
    global.scrollNav = mod.exports;
  }
})(this, function (module, exports, _scroll, _sticky, _stickyEle, _scroll3, _scrollNavBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _scroll2 = _interopRequireDefault(_scroll);

  var _sticky2 = _interopRequireDefault(_sticky);

  var _stickyEle2 = _interopRequireDefault(_stickyEle);

  var _scroll4 = _interopRequireDefault(_scroll3);

  var _scrollNavBar2 = _interopRequireDefault(_scrollNavBar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var DIRECTION_H = 'horizontal';
  var DIRECTION_V = 'vertical';

  var COMPONENT_NAME = 'cube-scroll-nav';
  var EVENT_CHANGE = 'change';
  var EVENT_STICKY_CHANGE = 'sticky-change';

  exports.default = {
    name: COMPONENT_NAME,
    provide: function provide() {
      return {
        scrollNav: this
      };
    },

    mixins: [_scroll2.default],
    props: {
      data: {
        type: Array
      },
      speed: {
        type: Number,
        default: 300
      },
      side: {
        type: Boolean,
        default: false
      },
      current: {
        type: [String, Number],
        default: ''
      }
    },
    data: function data() {
      return {
        scrollEvents: ['scroll', 'scroll-end'],
        scrollY: 0,
        labels: [],
        barTxts: [],
        active: this.current,
        pageStickyOffset: 0
      };
    },

    computed: {
      barDirection: function barDirection() {
        return this.side ? DIRECTION_V : DIRECTION_H;
      }
    },
    watch: {
      current: function current(newVal) {
        this.stickyCurrent = newVal;
        this.active = newVal;
        this.jumpTo(newVal);
      },
      active: function active(newVal) {
        this.$emit(EVENT_CHANGE, newVal);
      }
    },
    created: function created() {
      this.navBar = null;
      this.panels = [];
      this.stickyCurrent = this.current;
    },
    mounted: function mounted() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.side) {
          var fixedEle = _this.$refs.pageSticky.$refs.fixedEle;
          _this.$refs.scroll.$el.appendChild(fixedEle);
        }
        if (!_this.current) {
          _this.active = _this.stickyCurrent = _this.labels[0];
        }
        _this.refresh();
        _this.jumpTo(_this.current);
      });
    },

    methods: {
      refresh: function refresh() {
        this.navBar && this.navBar.refresh();
        this.$refs.sticky.refresh();
        this.$refs.pageSticky.refresh();
        this.pageStickyOffset = this.side ? 0 : this.$refs.navBarEle.$el.offsetHeight;
        this.$refs.scroll.refresh();
      },
      setBar: function setBar(bar) {
        this.navBar = bar;
      },
      barChange: function barChange(label) {
        var _this2 = this;

        this.active = label;

        this.$nextTick(function () {
          _this2.jumpTo(label);
        });
      },
      jumpTo: function jumpTo(label) {
        if (!label) {
          return;
        }
        var panel = this.getPanel(label);
        if (panel) {
          this._jumping = true;
          var offset = this.pageStickyOffset;
          this.$refs.scroll.scrollToElement(panel.$el, this.speed, 0, this.side ? offset : -offset);
        }
      },
      getPanel: function getPanel(label) {
        var panel = null;
        this.panels.some(function (_panel) {
          if (_panel.label === label) {
            panel = _panel;
            return true;
          }
        });
        return panel;
      },
      pageStickyChangeHandler: function pageStickyChangeHandler(current) {
        if (current === '') {
          current = this.labels[0];
        }
        this.stickyCurrent = current;
        if (this._jumping) {
          return;
        }
        this.active = current;
      },
      stickyChangeHandler: function stickyChangeHandler(current) {
        var _this3 = this;

        this.$nextTick(function () {
          _this3.navBar && _this3.navBar.refresh();
        });
        this.$emit(EVENT_STICKY_CHANGE, current);
      },
      scrollHandler: function scrollHandler(pos) {
        this.scrollY = -pos.y;
        if (!this._jumping) {
          this.active = this.stickyCurrent;
        }
      },
      scrollEndHandler: function scrollEndHandler() {
        this._jumping = false;
      },
      addPanel: function addPanel(panel) {
        this.panels.push(panel);
        this.labels.push(panel.label);
        this.barTxts.push(panel.title);
      },
      removePanel: function removePanel(panel) {
        var i = this.panels.indexOf(panel);
        this.panels.splice(i, 1);
        this.labels.splice(i, 1);
        this.barTxts.splice(i, 1);
      }
    },
    components: {
      CubeSticky: _sticky2.default,
      CubeStickyEle: _stickyEle2.default,
      CubeScroll: _scroll4.default,
      CubeScrollNavBar: _scrollNavBar2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 381 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(32), __webpack_require__(27)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../common/mixins/scroll'), require('../scroll/scroll.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.scroll, global.scroll);
    global.scrollNavBar = mod.exports;
  }
})(this, function (module, exports, _scroll, _scroll3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _scroll2 = _interopRequireDefault(_scroll);

  var _scroll4 = _interopRequireDefault(_scroll3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var DIRECTION_H = 'horizontal';
  var DIRECTION_V = 'vertical';

  var COMPONENT_NAME = 'cube-scroll-nav-bar';
  var EVENT_CHANGE = 'change';

  exports.default = {
    name: COMPONENT_NAME,
    inject: {
      scrollNav: {
        default: null
      }
    },
    mixins: [_scroll2.default],
    props: {
      direction: {
        type: String,
        default: DIRECTION_H,
        validator: function validator(val) {
          return val === DIRECTION_H || val === DIRECTION_V;
        }
      },
      labels: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      txts: {
        type: Array,
        default: function _default() {
          return this.labels;
        }
      },
      current: {
        type: [String, Number],
        default: ''
      }
    },
    data: function data() {
      return {
        active: this.current
      };
    },

    watch: {
      current: function current(newVal) {
        this.active = newVal;
      },
      active: function active(newVal) {
        this.$emit(EVENT_CHANGE, newVal);
        this._adjust();
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.scrollNav && this.scrollNav.setBar(this);
      if (this.active) {
        this.$nextTick(function () {
          _this._adjust();
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.scrollNav && this.scrollNav.setBar(null);
    },

    methods: {
      clickHandler: function clickHandler(label) {
        if (label === this.active) {
          return;
        }
        this.active = label;
        this.scrollNav && this.scrollNav.barChange(label);
      },
      refresh: function refresh() {
        this.$refs.scroll.refresh();
        this._adjust();
      },
      _adjust: function _adjust() {
        var _this2 = this;

        this.$nextTick(function () {
          var isHorizontal = _this2.direction === DIRECTION_H;
          var targetProp = isHorizontal ? 'clientWidth' : 'clientHeight';
          var active = _this2.active;
          var viewportSize = _this2.$refs.scroll.$el[targetProp];
          var itemsEle = _this2.$refs.items;
          var scrollerSize = itemsEle[targetProp];
          var minTranslate = Math.min(0, viewportSize - scrollerSize);
          var middleTranslate = viewportSize / 2;
          var items = itemsEle.children;
          var size = 0;
          _this2.labels.every(function (label, index) {
            if (label === active) {
              size += items[index][targetProp] / 2;
              return false;
            }
            size += items[index][targetProp];
            return true;
          });
          var translate = middleTranslate - size;
          translate = Math.max(minTranslate, Math.min(0, translate));
          _this2.$refs.scroll.scrollTo(isHorizontal ? translate : 0, isHorizontal ? 0 : translate, 300);
        });
      }
    },
    components: {
      CubeScroll: _scroll4.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-scroll-nav-bar",
    class: 'cube-scroll-nav-bar_' + _vm.direction
  }, [_c('cube-scroll', {
    ref: "scroll",
    attrs: {
      "options": _vm.options,
      "direction": _vm.direction
    }
  }, [_c('div', {
    ref: "items",
    staticClass: "cube-scroll-nav-bar-items"
  }, _vm._l((_vm.txts), function(txt, index) {
    return _c('div', {
      key: index,
      staticClass: "cube-scroll-nav-bar-item",
      class: {
        'cube-scroll-nav-bar-item_active': _vm.active === _vm.labels[index]
      },
      on: {
        "click": function($event) {
          _vm.clickHandler(_vm.labels[index])
        }
      }
    }, [_vm._t("default", [_c('span', {
      domProps: {
        "innerHTML": _vm._s(txt)
      }
    })], {
      txt: txt,
      index: index,
      active: _vm.active,
      label: _vm.labels[index]
    })], 2)
  }))])], 1)
},staticRenderFns: []}

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-scroll-nav",
    class: {
      'cube-scroll-nav_side': _vm.side
    }
  }, [_c('cube-sticky', {
    ref: "sticky",
    attrs: {
      "pos": _vm.scrollY
    },
    on: {
      "change": _vm.stickyChangeHandler
    }
  }, [_c('cube-scroll', {
    ref: "scroll",
    attrs: {
      "scroll-events": _vm.scrollEvents,
      "options": _vm.options,
      "data": _vm.data
    },
    on: {
      "scroll": _vm.scrollHandler,
      "scroll-end": _vm.scrollEndHandler
    }
  }, [_vm._t("prepend"), _vm._v(" "), _c('div', {
    staticClass: "cube-scroll-nav-main"
  }, [_c('cube-sticky-ele', {
    ref: "navBarEle",
    attrs: {
      "ele-key": "cube-scroll-nav-bar"
    }
  }, [_vm._t("bar", [_c('cube-scroll-nav-bar', {
    attrs: {
      "direction": _vm.barDirection,
      "txts": _vm.barTxts,
      "labels": _vm.labels,
      "current": _vm.active
    }
  })], {
    txts: _vm.barTxts,
    labels: _vm.labels,
    current: _vm.active
  })], 2), _vm._v(" "), _c('cube-sticky', {
    ref: "pageSticky",
    attrs: {
      "offset": _vm.pageStickyOffset,
      "pos": _vm.scrollY
    },
    on: {
      "change": _vm.pageStickyChangeHandler
    }
  }, [_c('div', {
    staticClass: "cube-scroll-nav-panels"
  }, [_vm._t("default")], 2), _vm._v(" "), (!_vm.side) ? _c('template', {
    slot: "fixed"
  }, [_c('div')]) : _vm._e()], 2)], 1)], 2)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(386),
  /* template */
  __webpack_require__(387),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(66)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../sticky/sticky-ele.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.stickyEle);
    global.scrollNavPanel = mod.exports;
  }
})(this, function (module, exports, _stickyEle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _stickyEle2 = _interopRequireDefault(_stickyEle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-scroll-nav-panel';

  exports.default = {
    name: COMPONENT_NAME,
    inject: ['scrollNav'],
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      title: {
        type: [String, Number],
        default: function _default() {
          return this.label;
        }
      }
    },
    mounted: function mounted() {
      this.scrollNav.addPanel(this);
    },
    beforeDestroy: function beforeDestroy() {
      this.scrollNav.removePanel(this);
    },

    components: {
      CubeStickyEle: _stickyEle2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-scroll-nav-panel"
  }, [_c('cube-sticky-ele', {
    attrs: {
      "ele-key": _vm.label
    }
  }, [_c('h2', {
    staticClass: "cube-scroll-nav-panel-title",
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(67)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/scroll-nav-bar/scroll-nav-bar.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.scrollNavBar);
    global.index = mod.exports;
  }
})(this, function (module, exports, _scrollNavBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _scrollNavBar2 = _interopRequireDefault(_scrollNavBar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _scrollNavBar2.default.install = function (Vue) {
    Vue.component(_scrollNavBar2.default.name, _scrollNavBar2.default);
  };

  exports.default = _scrollNavBar2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(40)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('better-scroll'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.betterScroll);
    global.index = mod.exports;
  }
})(this, function (module, exports, _betterScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _betterScroll2 = _interopRequireDefault(_betterScroll);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _betterScroll2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
    global.index = mod.exports;
  }
})(this, function (module, exports, _createApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _createApi2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(25), __webpack_require__(392)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/popup/popup.vue'), require('./api'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.popup, global.api);
    global.index = mod.exports;
  }
})(this, function (module, exports, _popup, _api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _popup2 = _interopRequireDefault(_popup);

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _popup2.default.install = function (Vue) {
    Vue.component(_popup2.default.name, _popup2.default);
    (0, _api2.default)(Vue, _popup2.default);
  };

  exports.default = _popup2.default;
  module.exports = exports['default'];
});

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
  exports.default = addPopup;

  var _createApi2 = _interopRequireDefault(_createApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addPopup(Vue, Popup) {
    (0, _createApi2.default)(Vue, Popup, ['mask-click'], true);
  }
  module.exports = exports['default'];
});

/***/ })
/******/ ]);
});