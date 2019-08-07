(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sticky"] = factory();
	else
		root["cube"] = root["cube"] || {}, root["cube"]["sticky"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 373);
/******/ })
/************************************************************************/
/******/ ({

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(258)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(259),
  /* template */
  __webpack_require__(260),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(255)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(256),
  /* template */
  __webpack_require__(257),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 255:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(71)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 257:
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

/***/ 258:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 259:
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

/***/ 260:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-sticky-ele"
  }, [_c('div', {
    staticClass: "cube-sticky-content"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(254), __webpack_require__(198)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

  _sticky2.default.Ele = _stickyEle2.default;

  exports.default = _sticky2.default;
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


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(72)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 72:
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

/***/ })

/******/ });
});