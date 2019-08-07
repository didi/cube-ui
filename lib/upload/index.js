(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["upload"] = factory();
	else
		root["cube"] = root["cube"] || {}, root["cube"]["upload"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 428);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 11:
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 14:
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(72)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
  exports.evalOpts = evalOpts;
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

  function evalOpts(data) {
    if (typeof data === 'function') {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return data.apply(this, args);
    }
    return data;
  }
});

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 191:
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
    global.btnMixin = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    props: {
      multiple: {
        type: Boolean,
        default: true
      },
      accept: {
        type: String,
        default: 'image/*'
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(239)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(240),
  /* template */
  __webpack_require__(241),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(242)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(243),
  /* template */
  __webpack_require__(244),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(17);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 22:
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

/***/ 23:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(237)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(238),
  /* template */
  __webpack_require__(246),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 237:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(196), __webpack_require__(197), __webpack_require__(245), __webpack_require__(191), __webpack_require__(171)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./btn.vue'), require('./file.vue'), require('./ajax'), require('./btn-mixin'), require('./util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.btn, global.file, global.ajax, global.btnMixin, global.util);
    global.upload = mod.exports;
  }
})(this, function (module, exports, _btn, _file, _ajax, _btnMixin, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _btn2 = _interopRequireDefault(_btn);

  var _file2 = _interopRequireDefault(_file);

  var _ajax2 = _interopRequireDefault(_ajax);

  var _btnMixin2 = _interopRequireDefault(_btnMixin);

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
    mixins: [_btnMixin2.default],
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

/***/ 239:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(191)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./btn-mixin'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.btnMixin);
    global.btn = mod.exports;
  }
})(this, function (module, exports, _btnMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _btnMixin2 = _interopRequireDefault(_btnMixin);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'cube-upload-btn';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_btnMixin2.default],
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

/***/ 241:
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

/***/ 242:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(171)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
      fileCls: function fileCls() {
        return 'cube-upload-file_' + this.file.status;
      },
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

/***/ 244:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cube-upload-file",
    class: _vm.fileCls,
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

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(61), __webpack_require__(171)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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


    var realTarget = (0, _util.evalOpts)(target, file);

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
    var realData = (0, _util.evalOpts)(data, file);
    (0, _keys2.default)(realData).forEach(function (key) {
      formData.append(key, realData[key]);
    });
    formData.append(fileName, file[prop]);

    xhr.onload = function () {
      if (xhr.status < 200 || xhr.status >= 300) {
        setStatus(_util.STATUS_ERROR);
        return;
      }
      setResponse();
      var response = file.response;

      if (checkSuccess.length <= 2) {
        var isSuccess = checkSuccess(response, file);
        setStatus(isSuccess ? _util.STATUS_SUCCESS : _util.STATUS_ERROR);
      } else {
        checkSuccess(response, file, function (isSuccess) {
          setStatus(isSuccess ? _util.STATUS_SUCCESS : _util.STATUS_ERROR);
        });
      }
    };
    xhr.onerror = function () {
      setResponse();
      setStatus(_util.STATUS_ERROR);
    };
    xhr.ontimeout = function () {
      setResponse();
      setStatus(_util.STATUS_ERROR);
    };

    xhr.open('POST', realTarget, true);
    if (withCredentials) {
      xhr.withCredentials = true;
    }
    var realHeaders = (0, _util.evalOpts)(headers, file);
    (0, _keys2.default)(realHeaders).forEach(function (key) {
      xhr.setRequestHeader(key, realHeaders[key]);
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
    function setResponse() {
      var response = xhr.responseText || xhr.response;
      try {
        response = JSON.parse(response);
      } catch (e) {}
      file.response = response;
      file.responseHeaders = xhr.getAllResponseHeaders();
    }
  }
  module.exports = exports['default'];
});

/***/ }),

/***/ 246:
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
    }],
    attrs: {
      "multiple": _vm.multiple,
      "accept": _vm.accept
    }
  })], 2)])], 2)
},staticRenderFns: []}

/***/ }),

/***/ 26:
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 29:
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 33:
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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 4:
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

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(236), __webpack_require__(196), __webpack_require__(197)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 46:
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),

/***/ 7:
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

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),

/***/ 75:
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

/***/ 76:
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

/***/ 8:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ })

/******/ });
});