(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define("podiumSdk", ["axios"], factory);
	else if(typeof exports === 'object')
		exports["podiumSdk"] = factory(require("axios"));
	else
		root["podiumSdk"] = factory(root["axios"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_111__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
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

var store = __webpack_require__(30)('wks');
var uid = __webpack_require__(21);
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

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(14);
var hide = __webpack_require__(9);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(43);
var toPrimitive = __webpack_require__(32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(66);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(74);
var defined = __webpack_require__(28);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
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
/* 15 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(89);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(93);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(96);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var cov_1opq5xmnpm = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\podiumRequest\\podiumRequest.js',
      hash = '619ba80b86d8cf79d8f2e99147ebe96aef28bfc2',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\podiumRequest\\podiumRequest.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 14
        },
        end: {
          line: 2,
          column: 30
        }
      },
      '1': {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 57
        }
      },
      '2': {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 4,
          column: 59
        }
      },
      '3': {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 5,
          column: 37
        }
      },
      '4': {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 6,
          column: 43
        }
      },
      '5': {
        start: {
          line: 7,
          column: 25
        },
        end: {
          line: 7,
          column: 40
        }
      },
      '6': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 109,
          column: 1
        }
      },
      '7': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 28
        }
      },
      '8': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 40
        }
      },
      '9': {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 23,
          column: 5
        }
      },
      '10': {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 22,
          column: 7
        }
      },
      '11': {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 74
        }
      },
      '12': {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      '13': {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 37
        }
      },
      '14': {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 37,
          column: 5
        }
      },
      '15': {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 35
        }
      },
      '16': {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 15
        }
      },
      '17': {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 31
        }
      },
      '18': {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 45,
          column: 5
        }
      },
      '19': {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 44,
          column: 82
        }
      },
      '20': {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 30
        }
      },
      '21': {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 54,
          column: 5
        }
      },
      '22': {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 61
        }
      },
      '23': {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 53,
          column: 32
        }
      },
      '24': {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 60,
          column: 5
        }
      },
      '25': {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 57
        }
      },
      '26': {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 35
        }
      },
      '27': {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 67,
          column: 5
        }
      },
      '28': {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 32
        }
      },
      '29': {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 56
        }
      },
      '30': {
        start: {
          line: 69,
          column: 27
        },
        end: {
          line: 69,
          column: 56
        }
      },
      '31': {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 80,
          column: 30
        }
      },
      '32': {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 53
        }
      },
      '33': {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 26
        }
      },
      '34': {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 84,
          column: 56
        }
      },
      '35': {
        start: {
          line: 84,
          column: 27
        },
        end: {
          line: 84,
          column: 56
        }
      },
      '36': {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 98,
          column: 30
        }
      },
      '37': {
        start: {
          line: 97,
          column: 6
        },
        end: {
          line: 97,
          column: 26
        }
      },
      '38': {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 107,
          column: 30
        }
      },
      '39': {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 104,
          column: 43
        }
      },
      '40': {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 105,
          column: 28
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 25
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 18
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 18
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 22
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        loc: {
          start: {
            line: 30,
            column: 22
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 30
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 20
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 41
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 15
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 49
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        loc: {
          start: {
            line: 57,
            column: 18
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 57
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        loc: {
          start: {
            line: 64,
            column: 32
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 64
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 73,
            column: 25
          },
          end: {
            line: 73,
            column: 26
          }
        },
        loc: {
          start: {
            line: 73,
            column: 41
          },
          end: {
            line: 75,
            column: 7
          }
        },
        line: 73
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 78,
            column: 12
          },
          end: {
            line: 78,
            column: 13
          }
        },
        loc: {
          start: {
            line: 78,
            column: 32
          },
          end: {
            line: 80,
            column: 5
          }
        },
        line: 78
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 83,
            column: 3
          }
        },
        loc: {
          start: {
            line: 83,
            column: 33
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 83
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 96,
            column: 12
          },
          end: {
            line: 96,
            column: 13
          }
        },
        loc: {
          start: {
            line: 96,
            column: 32
          },
          end: {
            line: 98,
            column: 5
          }
        },
        line: 96
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        },
        loc: {
          start: {
            line: 101,
            column: 31
          },
          end: {
            line: 108,
            column: 3
          }
        },
        line: 101
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 103,
            column: 12
          },
          end: {
            line: 103,
            column: 13
          }
        },
        loc: {
          start: {
            line: 103,
            column: 24
          },
          end: {
            line: 106,
            column: 7
          }
        },
        line: 103
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        }],
        line: 19
      },
      '1': {
        loc: {
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 27,
            column: 73
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 27,
            column: 48
          }
        }, {
          start: {
            line: 27,
            column: 52
          },
          end: {
            line: 27,
            column: 73
          }
        }],
        line: 27
      },
      '2': {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        }],
        line: 31
      },
      '3': {
        loc: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 86
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 37
          }
        }, {
          start: {
            line: 31,
            column: 41
          },
          end: {
            line: 31,
            column: 86
          }
        }],
        line: 31
      },
      '4': {
        loc: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        }, {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        }],
        line: 35
      },
      '5': {
        loc: {
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 35,
            column: 86
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 35,
            column: 37
          }
        }, {
          start: {
            line: 35,
            column: 41
          },
          end: {
            line: 35,
            column: 86
          }
        }],
        line: 35
      },
      '6': {
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        }, {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        }],
        line: 43
      },
      '7': {
        loc: {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 54,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 54,
            column: 5
          }
        }, {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 54,
            column: 5
          }
        }],
        line: 50
      },
      '8': {
        loc: {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        }, {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        }],
        line: 58
      },
      '9': {
        loc: {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        }, {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        }],
        line: 65
      },
      '10': {
        loc: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 56
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 56
          }
        }, {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 56
          }
        }],
        line: 69
      },
      '11': {
        loc: {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 56
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 56
          }
        }, {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 56
          }
        }],
        line: 84
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0],
      '9': [0, 0],
      '10': [0, 0],
      '11': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = (cov_1opq5xmnpm.s[0]++, __webpack_require__(111));
var convertTime = (cov_1opq5xmnpm.s[1]++, __webpack_require__(112));
var PodiumPaginator = (cov_1opq5xmnpm.s[2]++, __webpack_require__(60));
var INVALID_TOKEN = (cov_1opq5xmnpm.s[3]++, 'INVALID_TOKEN');
var UNACCEPTED_TERMS = (cov_1opq5xmnpm.s[4]++, 'UNACCEPTED_TERMS');
var LOCALSTORAGE_KEY = (cov_1opq5xmnpm.s[5]++, '__podiumSDK__');

cov_1opq5xmnpm.s[6]++;
module.exports = function () {
  function PodiumRequest(settings) {
    (0, _classCallCheck3.default)(this, PodiumRequest);
    cov_1opq5xmnpm.f[0]++;
    cov_1opq5xmnpm.s[7]++;

    this.settings = settings;
  }

  (0, _createClass3.default)(PodiumRequest, [{
    key: '_makeUrl',
    value: function _makeUrl(path) {
      cov_1opq5xmnpm.f[1]++;
      cov_1opq5xmnpm.s[8]++;

      return this.settings.endpoint + path;
    }
  }, {
    key: '_makeHeaders',
    value: function _makeHeaders() {
      cov_1opq5xmnpm.f[2]++;
      cov_1opq5xmnpm.s[9]++;

      if (this._getToken()) {
        cov_1opq5xmnpm.b[0][0]++;
        cov_1opq5xmnpm.s[10]++;

        return {
          'Authentication': this._getToken()
        };
      } else {
        cov_1opq5xmnpm.b[0][1]++;
      }
    }
  }, {
    key: '_hasLocalStorage',
    value: function _hasLocalStorage() {
      cov_1opq5xmnpm.f[3]++;
      cov_1opq5xmnpm.s[11]++;

      return !((cov_1opq5xmnpm.b[1][0]++, typeof localStorage === 'undefined') || (cov_1opq5xmnpm.b[1][1]++, localStorage === null));
    }
  }, {
    key: '_checkError',
    value: function _checkError(error) {
      cov_1opq5xmnpm.f[4]++;
      cov_1opq5xmnpm.s[12]++;

      if ((cov_1opq5xmnpm.b[3][0]++, error.response.status === 400) && (cov_1opq5xmnpm.b[3][1]++, error.response.data.apiCode === INVALID_TOKEN)) {
        cov_1opq5xmnpm.b[2][0]++;
        cov_1opq5xmnpm.s[13]++;

        this.settings.token = undefined;
      } else {
        cov_1opq5xmnpm.b[2][1]++;
      }

      cov_1opq5xmnpm.s[14]++;
      if ((cov_1opq5xmnpm.b[5][0]++, error.response.status === 403) && (cov_1opq5xmnpm.b[5][1]++, error.response.data.code === UNACCEPTED_TERMS)) {
        cov_1opq5xmnpm.b[4][0]++;
        cov_1opq5xmnpm.s[15]++;

        console.log(UNACCEPTED_TERMS);
      } else {
        cov_1opq5xmnpm.b[4][1]++;
      }
      cov_1opq5xmnpm.s[16]++;
      throw error;
    }
  }, {
    key: '_setToken',
    value: function _setToken(token) {
      cov_1opq5xmnpm.f[5]++;
      cov_1opq5xmnpm.s[17]++;

      this.settings.token = token;
      cov_1opq5xmnpm.s[18]++;
      if (this._hasLocalStorage()) {
        cov_1opq5xmnpm.b[6][0]++;
        cov_1opq5xmnpm.s[19]++;

        return localStorage.setItem(LOCALSTORAGE_KEY + 'token', this.settings.token);
      } else {
        cov_1opq5xmnpm.b[6][1]++;
      }
      cov_1opq5xmnpm.s[20]++;
      return this.settings.token;
    }
  }, {
    key: '_getToken',
    value: function _getToken() {
      cov_1opq5xmnpm.f[6]++;
      cov_1opq5xmnpm.s[21]++;

      if (this._hasLocalStorage()) {
        cov_1opq5xmnpm.b[7][0]++;
        cov_1opq5xmnpm.s[22]++;

        return localStorage.getItem(LOCALSTORAGE_KEY + 'token');
      } else {
        cov_1opq5xmnpm.b[7][1]++;
        cov_1opq5xmnpm.s[23]++;

        return this.settings.token;
      }
    }
  }, {
    key: '_removeToken',
    value: function _removeToken() {
      cov_1opq5xmnpm.f[7]++;
      cov_1opq5xmnpm.s[24]++;

      if (this._hasLocalStorage()) {
        cov_1opq5xmnpm.b[8][0]++;
        cov_1opq5xmnpm.s[25]++;

        localStorage.removeItem(LOCALSTORAGE_KEY + 'token');
      } else {
        cov_1opq5xmnpm.b[8][1]++;
      }
      cov_1opq5xmnpm.s[26]++;
      this.settings.token = undefined;
    }
  }, {
    key: 'GetRequest',
    value: function GetRequest(resource, params) {
      cov_1opq5xmnpm.f[8]++;
      cov_1opq5xmnpm.s[27]++;

      if (params instanceof PodiumPaginator) {
        cov_1opq5xmnpm.b[9][0]++;
        cov_1opq5xmnpm.s[28]++;

        params = params.toParams();
      } else {
        cov_1opq5xmnpm.b[9][1]++;
      }

      cov_1opq5xmnpm.s[29]++;
      if (!this._getToken()) {
          cov_1opq5xmnpm.b[10][0]++;
          cov_1opq5xmnpm.s[30]++;
          _promise2.default.reject(INVALID_TOKEN);
        } else {
        cov_1opq5xmnpm.b[10][1]++;
      }cov_1opq5xmnpm.s[31]++;
      return axios({
        method: 'get',
        params: params,
        transformResponse: function transformResponse(data) {
          cov_1opq5xmnpm.f[9]++;
          cov_1opq5xmnpm.s[32]++;

          return convertTime.APIToUTC(JSON.parse(data));
        },
        url: this._makeUrl(resource),
        headers: this._makeHeaders()
      }).then(function (response) {
        cov_1opq5xmnpm.f[10]++;
        cov_1opq5xmnpm.s[33]++;

        return response.data;
      }).catch(this._checkError);
    }
  }, {
    key: 'PostRequest',
    value: function PostRequest(resource, params) {
      cov_1opq5xmnpm.f[11]++;
      cov_1opq5xmnpm.s[34]++;

      if (!this._getToken()) {
          cov_1opq5xmnpm.b[11][0]++;
          cov_1opq5xmnpm.s[35]++;
          _promise2.default.reject(INVALID_TOKEN);
        } else {
        cov_1opq5xmnpm.b[11][1]++;
      }cov_1opq5xmnpm.s[36]++;
      return axios({
        method: 'post',
        // transformRequest: [function (data, headers) {
        //   return convertTime.UTCtoAPI(data)
        // }],
        // transformResponse: function (data) {
        //   return convertTime.APIToUTC(JSON.parse(data))
        // },
        url: this._makeUrl(resource),
        data: params,
        headers: this._makeHeaders()
      }).then(function (response) {
        cov_1opq5xmnpm.f[12]++;
        cov_1opq5xmnpm.s[37]++;

        return response.data;
      }).catch(this._checkError);
    }
  }, {
    key: 'AuthenticateRequest',
    value: function AuthenticateRequest(params) {
      var _this = this;

      cov_1opq5xmnpm.f[13]++;
      cov_1opq5xmnpm.s[38]++;

      return axios.post(this._makeUrl('login'), params).then(function (response) {
        cov_1opq5xmnpm.f[14]++;
        cov_1opq5xmnpm.s[39]++;

        _this._setToken(response.data.token);
        cov_1opq5xmnpm.s[40]++;
        return response.data;
      }).catch(this._checkError);
    }
  }]);
  return PodiumRequest;
}();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(47);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(8);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(69);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(80);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(73);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(29)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe');
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
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(24);
var wksExt = __webpack_require__(37);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(22);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(8);
var toObject = __webpack_require__(27);
var IE_PROTO = __webpack_require__(29)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(15);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(15)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(71)(true);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(9);
var has = __webpack_require__(8);
var Iterators = __webpack_require__(17);
var $iterCreate = __webpack_require__(72);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(41);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(8);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(75)(false);
var IE_PROTO = __webpack_require__(29)('IE_PROTO');

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
var global = __webpack_require__(1);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(17);
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
/* 51 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(47);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(39);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(32);
var has = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(43);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18);
var TAG = __webpack_require__(2)('toStringTag');
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(22);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var invoke = __webpack_require__(104);
var html = __webpack_require__(49);
var cel = __webpack_require__(31);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(18)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(40);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var cov_2frt24ugrq = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\utilities\\Paginator.js',
      hash = 'bae71b7309fdc0549bd8d7046a6e735f2b3379a4',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\utilities\\Paginator.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 56,
          column: 1
        }
      },
      '1': {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 17
        }
      },
      '2': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 39
        }
      },
      '3': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 43
        }
      },
      '4': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 51
        }
      },
      '5': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 33
        }
      },
      '6': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 32
        }
      },
      '7': {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 33
        }
      },
      '8': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 34
        }
      },
      '9': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 15
        }
      },
      '10': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 20
        }
      },
      '11': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 15
        }
      },
      '12': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 26
        }
      },
      '13': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 15
        }
      },
      '14': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 30
        }
      },
      '15': {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 15
        }
      },
      '16': {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 34
        }
      },
      '17': {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 15
        }
      },
      '18': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 44,
          column: 5
        }
      },
      '19': {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 33
        }
      },
      '20': {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 32
        }
      },
      '21': {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 15
        }
      },
      '22': {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 54,
          column: 5
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 4,
            column: 56
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 4
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 19
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 11
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 19
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        loc: {
          start: {
            line: 24,
            column: 23
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 24
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 29
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 31
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 34
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 26
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 39
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        loc: {
          start: {
            line: 48,
            column: 14
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 48
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 54
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 4,
            column: 30
          },
          end: {
            line: 4,
            column: 54
          }
        }],
        line: 4
      },
      '1': {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        }, {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        }],
        line: 40
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    b: {
      '0': [0],
      '1': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_2frt24ugrq.s[0]++;
module.exports = function () {
  function PodiumPaginator() {
    var userSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2frt24ugrq.b[0][0]++, __webpack_require__(61));
    (0, _classCallCheck3.default)(this, PodiumPaginator);
    cov_2frt24ugrq.f[0]++;
    cov_2frt24ugrq.s[1]++;

    this.page = 1;
    cov_2frt24ugrq.s[2]++;
    this.perPage = userSettings.perPage;
    cov_2frt24ugrq.s[3]++;
    this.sortField = userSettings.sortField;
    cov_2frt24ugrq.s[4]++;
    this.sortDirection = userSettings.sortDirection;
  }

  (0, _createClass3.default)(PodiumPaginator, [{
    key: 'setContext',
    value: function setContext(ctx) {
      cov_2frt24ugrq.f[1]++;
      cov_2frt24ugrq.s[5]++;

      this.setPage(ctx.currentPage);
      cov_2frt24ugrq.s[6]++;
      this.setPerPage(ctx.perPage);
      cov_2frt24ugrq.s[7]++;
      this.setSortField(ctx.sortBy);
      cov_2frt24ugrq.s[8]++;
      this.setSortDesc(ctx.sortDesc);
      cov_2frt24ugrq.s[9]++;
      return this;
    }
  }, {
    key: 'setPage',
    value: function setPage(page) {
      cov_2frt24ugrq.f[2]++;
      cov_2frt24ugrq.s[10]++;

      this.page = page;
      cov_2frt24ugrq.s[11]++;
      return this;
    }
  }, {
    key: 'setPerPage',
    value: function setPerPage(perPage) {
      cov_2frt24ugrq.f[3]++;
      cov_2frt24ugrq.s[12]++;

      this.perPage = perPage;
      cov_2frt24ugrq.s[13]++;
      return this;
    }
  }, {
    key: 'setSortField',
    value: function setSortField(sortField) {
      cov_2frt24ugrq.f[4]++;
      cov_2frt24ugrq.s[14]++;

      this.sortField = sortField;
      cov_2frt24ugrq.s[15]++;
      return this;
    }
  }, {
    key: 'setSortDirection',
    value: function setSortDirection(direction) {
      cov_2frt24ugrq.f[5]++;
      cov_2frt24ugrq.s[16]++;

      this.sortDirection = direction;
      cov_2frt24ugrq.s[17]++;
      return this;
    }
  }, {
    key: 'setSortDesc',
    value: function setSortDesc(direction) {
      cov_2frt24ugrq.f[6]++;
      cov_2frt24ugrq.s[18]++;

      if (direction) {
        cov_2frt24ugrq.b[1][0]++;
        cov_2frt24ugrq.s[19]++;

        this.sortDirection = 'desc';
      } else {
        cov_2frt24ugrq.b[1][1]++;
        cov_2frt24ugrq.s[20]++;

        this.sortDirection = 'asc';
      }
      cov_2frt24ugrq.s[21]++;
      return this;
    }
  }, {
    key: 'toParams',
    value: function toParams() {
      cov_2frt24ugrq.f[7]++;
      cov_2frt24ugrq.s[22]++;

      return {
        page: this.page,
        count: this.perPage,
        sort_field: this.sortField,
        sort_direction: this.sortDirection
      };
    }
  }]);
  return PodiumPaginator;
}();

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_oevoga73w = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\settings.js',
      hash = 'fb2c835ee5a4798b9b92fdb1e8049e3bb13686f3',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\settings.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 8,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

cov_oevoga73w.s[0]++;
module.exports = {
  endpoint: 'https://api.podiumrewards.com/v1/',
  perPage: 50,
  sortField: 'created_at',
  sortDirection: 'asc'
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var cov_1ztojd58rh = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\index.js',
      hash = '1179a03754636d27367594ebbb7b28af6e09f7e8',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\index.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 3,
          column: 34
        }
      },
      '1': {
        start: {
          line: 4,
          column: 14
        },
        end: {
          line: 4,
          column: 36
        }
      },
      '2': {
        start: {
          line: 5,
          column: 12
        },
        end: {
          line: 5,
          column: 32
        }
      },
      '3': {
        start: {
          line: 6,
          column: 18
        },
        end: {
          line: 6,
          column: 44
        }
      },
      '4': {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 7,
          column: 40
        }
      },
      '5': {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 50
        }
      },
      '6': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 30
        }
      },
      '7': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 31
        }
      },
      '8': {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 38
        }
      },
      '9': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 36
        }
      },
      '10': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 48
        }
      },
      '11': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 40
        }
      },
      '12': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 44
        }
      },
      '13': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 23
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 53
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 11
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 51
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 11,
            column: 51
          }
        }],
        line: 11
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = (cov_1ztojd58rh.s[0]++, __webpack_require__(63));
var Terms = (cov_1ztojd58rh.s[1]++, __webpack_require__(116));
var LRG = (cov_1ztojd58rh.s[2]++, __webpack_require__(117));
var Incentive = (cov_1ztojd58rh.s[3]++, __webpack_require__(118));
var Profile = (cov_1ztojd58rh.s[4]++, __webpack_require__(119));
var Paginator = (cov_1ztojd58rh.s[5]++, __webpack_require__(60));

var Podium = function Podium() {
  var userSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1ztojd58rh.b[0][0]++, __webpack_require__(61));
  (0, _classCallCheck3.default)(this, Podium);
  cov_1ztojd58rh.f[0]++;
  cov_1ztojd58rh.s[6]++;

  this.Paginator = Paginator;
  cov_1ztojd58rh.s[7]++;
  this.setting = userSettings;
  cov_1ztojd58rh.s[8]++;
  this.auth = new Auth(this.setting);
  cov_1ztojd58rh.s[9]++;
  this.lrg = new LRG(this.setting);
  cov_1ztojd58rh.s[10]++;
  this.incentive = new Incentive(this.setting);
  cov_1ztojd58rh.s[11]++;
  this.terms = new Terms(this.setting);
  cov_1ztojd58rh.s[12]++;
  this.profile = new Profile(this.setting);
};

cov_1ztojd58rh.s[13]++;


module.exports = Podium;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(13);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var cov_1gds5yomf0 = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\auth.js',
      hash = 'ce917fa9a1c224c1ae3c52052646fd2e525b4cb7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\auth.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 20
        },
        end: {
          line: 2,
          column: 63
        }
      },
      '1': {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 32,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 19
        }
      },
      '3': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 28
        }
      },
      '4': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 27
        }
      },
      '5': {
        start: {
          line: 15,
          column: 17
        },
        end: {
          line: 19,
          column: 5
        }
      },
      '6': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 43
        }
      },
      '7': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 25
        }
      },
      '8': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 6
        }
      },
      '9': {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 25
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 14
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 14
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 20
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 12
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 27
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 28,
            column: 46
          },
          end: {
            line: 28,
            column: 47
          }
        },
        loc: {
          start: {
            line: 28,
            column: 53
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 28
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PodiumRequest = (cov_1gds5yomf0.s[0]++, __webpack_require__(20));

cov_1gds5yomf0.s[1]++;
module.exports = function (_PodiumRequest) {
  (0, _inherits3.default)(Auth, _PodiumRequest);

  function Auth(settings) {
    (0, _classCallCheck3.default)(this, Auth);
    cov_1gds5yomf0.f[0]++;
    cov_1gds5yomf0.s[2]++;

    var _this = (0, _possibleConstructorReturn3.default)(this, (Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call(this, settings));

    cov_1gds5yomf0.s[3]++;

    _this.settings = settings;
    return _this;
  }

  (0, _createClass3.default)(Auth, [{
    key: 'getToken',
    value: function getToken() {
      cov_1gds5yomf0.f[1]++;
      cov_1gds5yomf0.s[4]++;

      return this._getToken();
    }
  }, {
    key: 'login',
    value: function login(username, password, programId) {
      cov_1gds5yomf0.f[2]++;

      var params = (cov_1gds5yomf0.s[5]++, {
        'user_account': username,
        'password': password,
        'program_id': programId
      });
      cov_1gds5yomf0.s[6]++;
      return this.AuthenticateRequest(params);
    }
  }, {
    key: 'basicAuth',
    value: function basicAuth(token) {
      cov_1gds5yomf0.f[3]++;
      cov_1gds5yomf0.s[7]++;

      this._setToken(token);
    }
  }, {
    key: 'logout',
    value: function logout() {
      var _this2 = this;

      cov_1gds5yomf0.f[4]++;
      cov_1gds5yomf0.s[8]++;

      return this.PostRequest('logout').finally(function (rsp) {
        cov_1gds5yomf0.f[5]++;
        cov_1gds5yomf0.s[9]++;

        _this2._removeToken();
      });
    }
  }]);
  return Auth;
}(PodiumRequest);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(27);
var $getPrototypeOf = __webpack_require__(41);

__webpack_require__(42)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(50);
module.exports = __webpack_require__(37).f('iterator');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(28);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(23);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(48);
var toAbsoluteIndex = __webpack_require__(76);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(78);
var step = __webpack_require__(79);
var Iterators = __webpack_require__(17);
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
/* 78 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
__webpack_require__(54);
__webpack_require__(87);
__webpack_require__(88);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(46);
var META = __webpack_require__(83).KEY;
var $fails = __webpack_require__(15);
var shared = __webpack_require__(30);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(21);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(37);
var wksDefine = __webpack_require__(38);
var enumKeys = __webpack_require__(84);
var isArray = __webpack_require__(85);
var anObject = __webpack_require__(4);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(32);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(86);
var $GOPD = __webpack_require__(53);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(25);
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
  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(39).f = $propertyIsEnumerable;
  __webpack_require__(51).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(24)) {
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
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(8);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(15)(function () {
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(51);
var pIE = __webpack_require__(39);
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(52).f;
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('asyncIterator');


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(92).set });


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(10);
var anObject = __webpack_require__(4);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(14)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(35) });


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(44);
__webpack_require__(50);
__webpack_require__(98);
__webpack_require__(109);
__webpack_require__(110);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var global = __webpack_require__(1);
var ctx = __webpack_require__(14);
var classof = __webpack_require__(55);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(22);
var anInstance = __webpack_require__(99);
var forOf = __webpack_require__(100);
var speciesConstructor = __webpack_require__(56);
var task = __webpack_require__(57).set;
var microtask = __webpack_require__(105)();
var newPromiseCapabilityModule = __webpack_require__(40);
var perform = __webpack_require__(58);
var promiseResolve = __webpack_require__(59);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(106)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(26)($Promise, PROMISE);
__webpack_require__(107)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(108)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var call = __webpack_require__(101);
var isArrayIter = __webpack_require__(102);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(48);
var getIterFn = __webpack_require__(103);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(17);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(55);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(17);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(57).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(18)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(9);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(56);
var promiseResolve = __webpack_require__(59);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(3);
var newPromiseCapability = __webpack_require__(40);
var perform = __webpack_require__(58);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-useless-escape */

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(113);

var _keys2 = _interopRequireDefault(_keys);

var cov_1yt7aua92 = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\utilities\\convertTime.js',
      hash = 'ce7f0bb46365d2e296b90262538ab16ff933bc01',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\utilities\\convertTime.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 16,
          column: 1
        }
      },
      '1': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 14,
          column: 4
        }
      },
      '2': {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      '3': {
        start: {
          line: 5,
          column: 81
        },
        end: {
          line: 5,
          column: 113
        }
      },
      '4': {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 9,
          column: 7
        }
      },
      '5': {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 35
        }
      },
      '6': {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 12,
          column: 7
        }
      },
      '7': {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 35
        }
      },
      '8': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 12
        }
      },
      '9': {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 24,
          column: 1
        }
      },
      '10': {
        start: {
          line: 19,
          column: 10
        },
        end: {
          line: 19,
          column: 129
        }
      },
      '11': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      '12': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 47
        }
      },
      '13': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 12
        }
      },
      '14': {
        start: {
          line: 26,
          column: 15
        },
        end: {
          line: 28,
          column: 1
        }
      },
      '15': {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 186
        }
      },
      '16': {
        start: {
          line: 30,
          column: 15
        },
        end: {
          line: 32,
          column: 1
        }
      },
      '17': {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 35
        }
      },
      '18': {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 43,
          column: 1
        }
      },
      '19': {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 45
        }
      },
      '20': {
        start: {
          line: 36,
          column: 34
        },
        end: {
          line: 36,
          column: 45
        }
      },
      '21': {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 40
        }
      },
      '22': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 45
        }
      },
      '23': {
        start: {
          line: 40,
          column: 34
        },
        end: {
          line: 40,
          column: 45
        }
      },
      '24': {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 40
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 3,
            column: 23
          },
          end: {
            line: 3,
            column: 24
          }
        },
        loc: {
          start: {
            line: 3,
            column: 40
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 3
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 4,
            column: 27
          },
          end: {
            line: 4,
            column: 28
          }
        },
        loc: {
          start: {
            line: 4,
            column: 34
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 4
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 18,
            column: 15
          },
          end: {
            line: 18,
            column: 16
          }
        },
        loc: {
          start: {
            line: 18,
            column: 24
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 18
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 26,
            column: 15
          },
          end: {
            line: 26,
            column: 16
          }
        },
        loc: {
          start: {
            line: 26,
            column: 24
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 26
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 30,
            column: 15
          },
          end: {
            line: 30,
            column: 16
          }
        },
        loc: {
          start: {
            line: 30,
            column: 22
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 30
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 35,
            column: 12
          },
          end: {
            line: 35,
            column: 13
          }
        },
        loc: {
          start: {
            line: 35,
            column: 28
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 35
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 39,
            column: 13
          }
        },
        loc: {
          start: {
            line: 39,
            column: 28
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 39
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }, {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }],
        line: 5
      },
      '1': {
        loc: {
          start: {
            line: 5,
            column: 8
          },
          end: {
            line: 5,
            column: 79
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 5,
            column: 8
          },
          end: {
            line: 5,
            column: 16
          }
        }, {
          start: {
            line: 5,
            column: 20
          },
          end: {
            line: 5,
            column: 48
          }
        }, {
          start: {
            line: 5,
            column: 52
          },
          end: {
            line: 5,
            column: 79
          }
        }],
        line: 5
      },
      '2': {
        loc: {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 9,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 9,
            column: 7
          }
        }, {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 9,
            column: 7
          }
        }],
        line: 7
      },
      '3': {
        loc: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 64
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 7,
            column: 29
          }
        }, {
          start: {
            line: 7,
            column: 35
          },
          end: {
            line: 7,
            column: 63
          }
        }],
        line: 7
      },
      '4': {
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 12,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 12,
            column: 7
          }
        }, {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 12,
            column: 7
          }
        }],
        line: 10
      },
      '5': {
        loc: {
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 10,
            column: 60
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 10,
            column: 29
          }
        }, {
          start: {
            line: 10,
            column: 35
          },
          end: {
            line: 10,
            column: 59
          }
        }],
        line: 10
      },
      '6': {
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }, {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }],
        line: 20
      },
      '7': {
        loc: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 45
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 45
          }
        }, {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 45
          }
        }],
        line: 36
      },
      '8': {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 45
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 45
          }
        }, {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 45
          }
        }],
        line: 40
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_1yt7aua92.s[0]++;
var _loopNestedObj = function _loopNestedObj(obj, method) {
  cov_1yt7aua92.f[0]++;
  cov_1yt7aua92.s[1]++;

  (0, _keys2.default)(obj).forEach(function (key) {
    cov_1yt7aua92.f[1]++;
    cov_1yt7aua92.s[2]++;

    if ((cov_1yt7aua92.b[1][0]++, obj[key]) && (cov_1yt7aua92.b[1][1]++, (0, _typeof3.default)(obj[key]) === 'object') && (cov_1yt7aua92.b[1][2]++, !(obj[key] instanceof Date))) {
        cov_1yt7aua92.b[0][0]++;
        cov_1yt7aua92.s[3]++;
        _loopNestedObj(obj[key], method);
      } else {
      cov_1yt7aua92.b[0][1]++;
      cov_1yt7aua92.s[4]++;

      if ((cov_1yt7aua92.b[3][0]++, method === 'toUTC') && (cov_1yt7aua92.b[3][1]++, typeof obj[key] === 'string')) {
        cov_1yt7aua92.b[2][0]++;
        cov_1yt7aua92.s[5]++;

        obj[key] = _toUTC(obj[key]);
      } else {
        cov_1yt7aua92.b[2][1]++;
      }
      cov_1yt7aua92.s[6]++;
      if ((cov_1yt7aua92.b[5][0]++, method === 'toAPI') && (cov_1yt7aua92.b[5][1]++, obj[key] instanceof Date)) {
        cov_1yt7aua92.b[4][0]++;
        cov_1yt7aua92.s[7]++;

        obj[key] = _toAPI(obj[key]);
      } else {
        cov_1yt7aua92.b[4][1]++;
      }
    }
  });
  cov_1yt7aua92.s[8]++;
  return obj;
};

cov_1yt7aua92.s[9]++;
var _toUTC = function _toUTC(key) {
  cov_1yt7aua92.f[2]++;

  var n = (cov_1yt7aua92.s[10]++, /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/g);
  cov_1yt7aua92.s[11]++;
  if (n.test(key)) {
    cov_1yt7aua92.b[6][0]++;
    cov_1yt7aua92.s[12]++;

    key = new Date(key.replace(' ', 'T') + 'Z');
  } else {
    cov_1yt7aua92.b[6][1]++;
  }
  cov_1yt7aua92.s[13]++;
  return key;
};

cov_1yt7aua92.s[14]++;
var _toAPI = function _toAPI(key) {
  cov_1yt7aua92.f[3]++;
  cov_1yt7aua92.s[15]++;

  return key.getUTCFullYear() + '-' + strPad(key.getUTCMonth() + 1) + '-' + strPad(key.getUTCDate()) + ' ' + strPad(key.getUTCHours()) + ':' + strPad(key.getUTCMinutes()) + ':' + strPad(key.getUTCSeconds());
};

cov_1yt7aua92.s[16]++;
var strPad = function strPad(n) {
  cov_1yt7aua92.f[4]++;
  cov_1yt7aua92.s[17]++;

  return String('00' + n).slice(-2);
};

cov_1yt7aua92.s[18]++;
module.exports = {
  APIToUTC: function APIToUTC(data) {
    cov_1yt7aua92.f[5]++;
    cov_1yt7aua92.s[19]++;

    if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object') {
        cov_1yt7aua92.b[7][0]++;
        cov_1yt7aua92.s[20]++;
        return data;
      } else {
      cov_1yt7aua92.b[7][1]++;
    }cov_1yt7aua92.s[21]++;
    return _loopNestedObj(data, 'toUTC');
  },
  UTCtoAPI: function UTCtoAPI(data) {
    cov_1yt7aua92.f[6]++;
    cov_1yt7aua92.s[22]++;

    if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object') {
        cov_1yt7aua92.b[8][0]++;
        cov_1yt7aua92.s[23]++;
        return data;
      } else {
      cov_1yt7aua92.b[8][1]++;
    }cov_1yt7aua92.s[24]++;
    return _loopNestedObj(data, 'toAPI');
  }
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(27);
var $keys = __webpack_require__(25);

__webpack_require__(42)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(13);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var cov_2ot5ggtqce = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\terms.js',
      hash = 'd9196683811537ff327a9ef94483258e0bf72d6b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\terms.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 20
        },
        end: {
          line: 2,
          column: 63
        }
      },
      '1': {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 17,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 19
        }
      },
      '3': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 27
        }
      },
      '4': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 41
        }
      },
      '5': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 58
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 14
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PodiumRequest = (cov_2ot5ggtqce.s[0]++, __webpack_require__(20));

cov_2ot5ggtqce.s[1]++;
module.exports = function (_PodiumRequest) {
  (0, _inherits3.default)(Terms, _PodiumRequest);

  function Terms(settings) {
    (0, _classCallCheck3.default)(this, Terms);
    cov_2ot5ggtqce.f[0]++;
    cov_2ot5ggtqce.s[2]++;

    var _this = (0, _possibleConstructorReturn3.default)(this, (Terms.__proto__ || (0, _getPrototypeOf2.default)(Terms)).call(this, settings));

    cov_2ot5ggtqce.s[3]++;

    _this.resource = 'terms';
    return _this;
  }

  (0, _createClass3.default)(Terms, [{
    key: 'get',
    value: function get() {
      cov_2ot5ggtqce.f[1]++;
      cov_2ot5ggtqce.s[4]++;

      return this.GetRequest(this.resource);
    }
  }, {
    key: 'accept',
    value: function accept(id) {
      cov_2ot5ggtqce.f[2]++;
      cov_2ot5ggtqce.s[5]++;

      return this.PostRequest(this.resource, { terms_id: id });
    }
  }]);
  return Terms;
}(PodiumRequest);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(13);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var cov_2lt44hlgmf = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\lrg.js',
      hash = '9e271f8571ecf2339d0cfd678028f46b23073beb',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\lrg.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 20
        },
        end: {
          line: 2,
          column: 63
        }
      },
      '1': {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 25,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 19
        }
      },
      '3': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 33
        }
      },
      '4': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 6
        }
      },
      '5': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 23,
          column: 5
        }
      },
      '6': {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 8
        }
      },
      '7': {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 59
        }
      },
      '8': {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 18
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 10
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 25
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 16
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 18,
            column: 34
          }
        },
        loc: {
          start: {
            line: 18,
            column: 45
          },
          end: {
            line: 20,
            column: 7
          }
        },
        line: 18
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        }],
        line: 17
      },
      '1': {
        loc: {
          start: {
            line: 17,
            column: 10
          },
          end: {
            line: 17,
            column: 58
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 17,
            column: 10
          },
          end: {
            line: 17,
            column: 39
          }
        }, {
          start: {
            line: 17,
            column: 43
          },
          end: {
            line: 17,
            column: 58
          }
        }],
        line: 17
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PodiumRequest = (cov_2lt44hlgmf.s[0]++, __webpack_require__(20));

cov_2lt44hlgmf.s[1]++;
module.exports = function (_PodiumRequest) {
  (0, _inherits3.default)(LRG, _PodiumRequest);

  function LRG(settings) {
    (0, _classCallCheck3.default)(this, LRG);
    cov_2lt44hlgmf.f[0]++;
    cov_2lt44hlgmf.s[2]++;

    var _this = (0, _possibleConstructorReturn3.default)(this, (LRG.__proto__ || (0, _getPrototypeOf2.default)(LRG)).call(this, settings));

    cov_2lt44hlgmf.s[3]++;

    _this.resource = 'lrg/session';
    return _this;
  }

  (0, _createClass3.default)(LRG, [{
    key: 'get',
    value: function get(redirectUrl) {
      cov_2lt44hlgmf.f[1]++;
      cov_2lt44hlgmf.s[4]++;

      return this.PostRequest(this.resource, {
        website_back: redirectUrl
      });
    }
  }, {
    key: 'redirect',
    value: function redirect(redirectUrl) {
      cov_2lt44hlgmf.f[2]++;
      cov_2lt44hlgmf.s[5]++;

      if (!((cov_2lt44hlgmf.b[1][0]++, typeof window === 'undefined') || (cov_2lt44hlgmf.b[1][1]++, window === null))) {
        cov_2lt44hlgmf.b[0][0]++;
        cov_2lt44hlgmf.s[6]++;

        this.get(redirectUrl).then(function (response) {
          cov_2lt44hlgmf.f[3]++;
          cov_2lt44hlgmf.s[7]++;

          window.location.replace(response.body.redirect_url);
        });
      } else {
        cov_2lt44hlgmf.b[0][1]++;
        cov_2lt44hlgmf.s[8]++;

        return false;
      }
    }
  }]);
  return LRG;
}(PodiumRequest);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(13);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var cov_h5lh0ytqj = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\incentive.js',
      hash = '2e534d0f98a41710f1b80f4a96dbcee15bcac4a7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\incentive.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 20
        },
        end: {
          line: 2,
          column: 63
        }
      },
      '1': {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 17,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 19
        }
      },
      '3': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 28
        }
      },
      '4': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 54
        }
      },
      '5': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 52
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PodiumRequest = (cov_h5lh0ytqj.s[0]++, __webpack_require__(20));

cov_h5lh0ytqj.s[1]++;
module.exports = function (_PodiumRequest) {
  (0, _inherits3.default)(Incentive, _PodiumRequest);

  function Incentive(settings) {
    (0, _classCallCheck3.default)(this, Incentive);
    cov_h5lh0ytqj.f[0]++;
    cov_h5lh0ytqj.s[2]++;

    var _this = (0, _possibleConstructorReturn3.default)(this, (Incentive.__proto__ || (0, _getPrototypeOf2.default)(Incentive)).call(this, settings));

    cov_h5lh0ytqj.s[3]++;

    _this.resource = 'ledger';
    return _this;
  }

  (0, _createClass3.default)(Incentive, [{
    key: 'getBalance',
    value: function getBalance() {
      cov_h5lh0ytqj.f[1]++;
      cov_h5lh0ytqj.s[4]++;

      return this.GetRequest(this.resource + '/balance');
    }
  }, {
    key: 'getTransactions',
    value: function getTransactions(paginator) {
      cov_h5lh0ytqj.f[2]++;
      cov_h5lh0ytqj.s[5]++;

      return this.GetRequest(this.resource, paginator);
    }
  }]);
  return Incentive;
}(PodiumRequest);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(13);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var cov_kbvmnx5tk = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\profile.js',
      hash = 'f066a7a16eceedd1716c509ff6111773dfd07bb5',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\profile.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 63
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 14,
          column: 1
        }
      },
      '2': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 19
        }
      },
      '3': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 29
        }
      },
      '4': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 41
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        loc: {
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 6
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PodiumRequest = (cov_kbvmnx5tk.s[0]++, __webpack_require__(20));

cov_kbvmnx5tk.s[1]++;
module.exports = function (_PodiumRequest) {
  (0, _inherits3.default)(Profile, _PodiumRequest);

  function Profile(settings) {
    (0, _classCallCheck3.default)(this, Profile);
    cov_kbvmnx5tk.f[0]++;
    cov_kbvmnx5tk.s[2]++;

    var _this = (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).call(this, settings));

    cov_kbvmnx5tk.s[3]++;

    _this.resource = 'profile';
    return _this;
  }

  (0, _createClass3.default)(Profile, [{
    key: 'get',
    value: function get() {
      cov_kbvmnx5tk.f[1]++;
      cov_kbvmnx5tk.s[4]++;

      return this.GetRequest(this.resource);
    }
  }]);
  return Profile;
}(PodiumRequest);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map