(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["toolbar"] = factory();
	else
		root["cube"] = root["cube"] || {}, root["cube"]["toolbar"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 419);
/******/ })
/************************************************************************/
/******/ ({

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(168)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(169),
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

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 169:
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
      var isInHorizontalGroup = isInGroup && (parent.$props.horizontal || parent.$props.colNum > 1);
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

/***/ 170:
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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(174)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(176),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 175:
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

/***/ 176:
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

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(172), __webpack_require__(161), __webpack_require__(420)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(421)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(422),
  /* template */
  __webpack_require__(427),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 421:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(423)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(424)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(425),
  /* template */
  __webpack_require__(426),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(172), __webpack_require__(161)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 426:
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

/***/ 427:
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