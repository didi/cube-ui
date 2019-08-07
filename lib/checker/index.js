(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["checker"] = factory();
	else
		root["cube"] = root["cube"] || {}, root["cube"]["checker"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 286);
/******/ })
/************************************************************************/
/******/ ({

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(206)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(208),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(209),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(193)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./checker-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.checkerItem);
    global.checker = mod.exports;
  }
})(this, function (module, exports, _checkerItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _checkerItem2 = _interopRequireDefault(_checkerItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-checker';
  var EVENT_INPUT = 'input';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      value: [String, Number, Array],
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      type: {
        type: String,
        default: 'checkbox'
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: function _default() {
          return this.options.length;
        }
      }
    },
    data: function data() {
      return {
        currentValue: this.value
      };
    },

    computed: {
      isRadio: function isRadio() {
        return this.type === 'radio';
      }
    },
    watch: {
      value: function value(newValue) {
        this.currentValue = newValue;
      },
      currentValue: function currentValue(val) {
        this.$emit(EVENT_INPUT, val);
      }
    },
    methods: {
      check: function check(option) {
        if (this.isRadio) {
          this.checkRadio(option);
        } else {
          this.checkCheckbox(option);
        }
      },
      checkRadio: function checkRadio(option) {
        this.currentValue = option.value;
      },
      checkCheckbox: function checkCheckbox(option) {
        var value = option.value;
        var currentValue = this.currentValue;
        var valueLen = currentValue.length;
        var min = this.min;
        var max = this.max;

        var index = currentValue.indexOf(value);

        if (index > -1) {
          valueLen > min && currentValue.splice(index, 1);
        } else {
          valueLen < max && currentValue.push(value);
        }
      }
    },
    components: {
      CubeCheckerItem: _checkerItem2.default
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 207:
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
    global.checkerItem = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var COMPONENT_NAME = 'cube-checker-item';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      option: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    computed: {
      isActive: function isActive() {
        var isRadio = this.$parent.isRadio;
        var currentValue = this.$parent.currentValue;
        var value = this.option.value;
        return isRadio ? currentValue === value : currentValue.indexOf(value) >= 0;
      },
      isDisabled: function isDisabled() {
        return this.option.disabled;
      }
    },
    methods: {
      clickHandler: function clickHandler() {
        if (this.isDisabled) {
          return;
        }
        this.$parent.check(this.option);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "cube-checker-item",
    class: {
      'cube-checker-item_active': _vm.isActive, 'cube-checker-item_disabled': _vm.isDisabled
    },
    on: {
      "click": _vm.clickHandler
    }
  }, [_vm._t("default", [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.option.text)
    }
  })])], 2)
},staticRenderFns: []}

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "cube-checker"
  }, [_vm._t("default", _vm._l((_vm.options), function(option, index) {
    return _c('cube-checker-item', {
      key: index,
      attrs: {
        "option": option
      }
    })
  }))], 2)
},staticRenderFns: []}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(204), __webpack_require__(193)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/checker/checker.vue'), require('../../components/checker/checker-item.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.checker, global.checkerItem);
    global.index = mod.exports;
  }
})(this, function (module, exports, _checker, _checkerItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _checker2 = _interopRequireDefault(_checker);

  var _checkerItem2 = _interopRequireDefault(_checkerItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _checker2.default.install = function (Vue) {
    Vue.component(_checker2.default.name, _checker2.default);
    Vue.component(_checkerItem2.default.name, _checkerItem2.default);
  };

  _checker2.default.Item = _checkerItem2.default;

  exports.default = _checker2.default;
  module.exports = exports['default'];
});

/***/ }),

/***/ 6:
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


/***/ })

/******/ });
});