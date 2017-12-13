(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("store"), require("axios"));
	else if(typeof define === 'function' && define.amd)
		define("podiumSdk", ["store", "axios"], factory);
	else if(typeof exports === 'object')
		exports["podiumSdk"] = factory(require("store"), require("axios"));
	else
		root["podiumSdk"] = factory(root["store"], root["axios"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_81__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
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
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(37);
var toPrimitive = __webpack_require__(25);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(16);
var hide = __webpack_require__(4);
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
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(61);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(56);

var _promise2 = _interopRequireDefault(_promise);

var cov_1opq5xmnpm = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\podiumRequest\\podiumRequest.js',
      hash = '04d9410b7fd2bff332f0e6870d5a8c93f730b7fd',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\podiumRequest\\podiumRequest.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 30
        }
      },
      '1': {
        start: {
          line: 4,
          column: 17
        },
        end: {
          line: 4,
          column: 51
        }
      },
      '2': {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 5,
          column: 57
        }
      },
      '3': {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 37
        }
      },
      '4': {
        start: {
          line: 8,
          column: 25
        },
        end: {
          line: 8,
          column: 43
        }
      },
      '5': {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 9,
          column: 42
        }
      },
      '6': {
        start: {
          line: 11,
          column: 20
        },
        end: {
          line: 11,
          column: 22
        }
      },
      '7': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 24
        }
      },
      '8': {
        start: {
          line: 14,
          column: 15
        },
        end: {
          line: 16,
          column: 1
        }
      },
      '9': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 49
        }
      },
      '10': {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 22,
          column: 1
        }
      },
      '11': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      '12': {
        start: {
          line: 24,
          column: 18
        },
        end: {
          line: 33,
          column: 1
        }
      },
      '13': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      '14': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 35
        }
      },
      '15': {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      '16': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 33
        }
      },
      '17': {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 39
        }
      },
      '18': {
        start: {
          line: 35,
          column: 22
        },
        end: {
          line: 41,
          column: 1
        }
      },
      '19': {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      '20': {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 75
        }
      },
      '21': {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 16
        }
      },
      '22': {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 13
        }
      },
      '23': {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 57,
          column: 1
        }
      },
      '24': {
        start: {
          line: 44,
          column: 15
        },
        end: {
          line: 48,
          column: 3
        }
      },
      '25': {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 56,
          column: 6
        }
      },
      '26': {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 66
        }
      },
      '27': {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 18
        }
      },
      '28': {
        start: {
          line: 59,
          column: 0
        },
        end: {
          line: 67,
          column: 1
        }
      },
      '29': {
        start: {
          line: 60,
          column: 13
        },
        end: {
          line: 63,
          column: 3
        }
      },
      '30': {
        start: {
          line: 64,
          column: 2
        },
        end: {
          line: 64,
          column: 36
        }
      },
      '31': {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 66,
          column: 37
        }
      },
      '32': {
        start: {
          line: 69,
          column: 0
        },
        end: {
          line: 71,
          column: 1
        }
      },
      '33': {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 70,
          column: 37
        }
      },
      '34': {
        start: {
          line: 73,
          column: 0
        },
        end: {
          line: 77,
          column: 1
        }
      },
      '35': {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 76,
          column: 4
        }
      },
      '36': {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 35
        }
      },
      '37': {
        start: {
          line: 79,
          column: 0
        },
        end: {
          line: 91,
          column: 1
        }
      },
      '38': {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 80,
          column: 38
        }
      },
      '39': {
        start: {
          line: 80,
          column: 26
        },
        end: {
          line: 80,
          column: 38
        }
      },
      '40': {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 90,
          column: 23
        }
      },
      '41': {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 84,
          column: 51
        }
      },
      '42': {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 89,
          column: 24
        }
      },
      '43': {
        start: {
          line: 93,
          column: 0
        },
        end: {
          line: 109,
          column: 1
        }
      },
      '44': {
        start: {
          line: 94,
          column: 2
        },
        end: {
          line: 94,
          column: 38
        }
      },
      '45': {
        start: {
          line: 94,
          column: 26
        },
        end: {
          line: 94,
          column: 38
        }
      },
      '46': {
        start: {
          line: 95,
          column: 2
        },
        end: {
          line: 108,
          column: 23
        }
      },
      '47': {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 101,
          column: 51
        }
      },
      '48': {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 24
        }
      },
      '49': {
        start: {
          line: 111,
          column: 0
        },
        end: {
          line: 111,
          column: 30
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 14,
            column: 15
          },
          end: {
            line: 14,
            column: 16
          }
        },
        loc: {
          start: {
            line: 14,
            column: 25
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 14
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 18,
            column: 19
          },
          end: {
            line: 18,
            column: 20
          }
        },
        loc: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 18
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 24,
            column: 18
          },
          end: {
            line: 24,
            column: 19
          }
        },
        loc: {
          start: {
            line: 24,
            column: 29
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 24
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 35,
            column: 22
          },
          end: {
            line: 35,
            column: 23
          }
        },
        loc: {
          start: {
            line: 35,
            column: 28
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 35
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 43,
            column: 29
          },
          end: {
            line: 43,
            column: 30
          }
        },
        loc: {
          start: {
            line: 43,
            column: 64
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 43
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 51,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        },
        loc: {
          start: {
            line: 51,
            column: 30
          },
          end: {
            line: 53,
            column: 5
          }
        },
        line: 51
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 54,
            column: 11
          },
          end: {
            line: 54,
            column: 12
          }
        },
        loc: {
          start: {
            line: 54,
            column: 22
          },
          end: {
            line: 56,
            column: 5
          }
        },
        line: 54
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 59,
            column: 24
          },
          end: {
            line: 59,
            column: 25
          }
        },
        loc: {
          start: {
            line: 59,
            column: 52
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 59
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 69,
            column: 24
          },
          end: {
            line: 69,
            column: 25
          }
        },
        loc: {
          start: {
            line: 69,
            column: 36
          },
          end: {
            line: 71,
            column: 1
          }
        },
        line: 69
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 73,
            column: 23
          },
          end: {
            line: 73,
            column: 24
          }
        },
        loc: {
          start: {
            line: 73,
            column: 29
          },
          end: {
            line: 77,
            column: 1
          }
        },
        line: 73
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 74,
            column: 44
          },
          end: {
            line: 74,
            column: 45
          }
        },
        loc: {
          start: {
            line: 74,
            column: 58
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 74
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 79,
            column: 20
          },
          end: {
            line: 79,
            column: 21
          }
        },
        loc: {
          start: {
            line: 79,
            column: 34
          },
          end: {
            line: 91,
            column: 1
          }
        },
        line: 79
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 83,
            column: 23
          },
          end: {
            line: 83,
            column: 24
          }
        },
        loc: {
          start: {
            line: 83,
            column: 39
          },
          end: {
            line: 85,
            column: 5
          }
        },
        line: 83
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 88,
            column: 10
          },
          end: {
            line: 88,
            column: 11
          }
        },
        loc: {
          start: {
            line: 88,
            column: 30
          },
          end: {
            line: 90,
            column: 3
          }
        },
        line: 88
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 93,
            column: 21
          },
          end: {
            line: 93,
            column: 22
          }
        },
        loc: {
          start: {
            line: 93,
            column: 43
          },
          end: {
            line: 109,
            column: 1
          }
        },
        line: 93
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 100,
            column: 23
          },
          end: {
            line: 100,
            column: 24
          }
        },
        loc: {
          start: {
            line: 100,
            column: 39
          },
          end: {
            line: 102,
            column: 5
          }
        },
        line: 100
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 106,
            column: 10
          },
          end: {
            line: 106,
            column: 11
          }
        },
        loc: {
          start: {
            line: 106,
            column: 30
          },
          end: {
            line: 108,
            column: 3
          }
        },
        line: 106
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 25
      },
      '1': {
        loc: {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 25,
            column: 84
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 25,
            column: 35
          }
        }, {
          start: {
            line: 25,
            column: 39
          },
          end: {
            line: 25,
            column: 84
          }
        }],
        line: 25
      },
      '2': {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        }, {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        }],
        line: 29
      },
      '3': {
        loc: {
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 29,
            column: 84
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 29,
            column: 35
          }
        }, {
          start: {
            line: 29,
            column: 39
          },
          end: {
            line: 29,
            column: 84
          }
        }],
        line: 29
      },
      '4': {
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        }, {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        }],
        line: 36
      },
      '5': {
        loc: {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 80,
            column: 38
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 80,
            column: 38
          }
        }, {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 80,
            column: 38
          }
        }],
        line: 80
      },
      '6': {
        loc: {
          start: {
            line: 94,
            column: 2
          },
          end: {
            line: 94,
            column: 38
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 94,
            column: 2
          },
          end: {
            line: 94,
            column: 38
          }
        }, {
          start: {
            line: 94,
            column: 2
          },
          end: {
            line: 94,
            column: 38
          }
        }],
        line: 94
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
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0
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
      '14': 0,
      '15': 0,
      '16': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0]
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

var axios = (cov_1opq5xmnpm.s[0]++, __webpack_require__(81));
var settings = (cov_1opq5xmnpm.s[1]++, __webpack_require__(33));
var convertTime = (cov_1opq5xmnpm.s[2]++, __webpack_require__(82));

var INVALID_TOKEN = (cov_1opq5xmnpm.s[3]++, 'INVALID_TOKEN');
var UNACCEPTED_TERMS = (cov_1opq5xmnpm.s[4]++, 'UNACCEPTED_TERMS');
var STORE_USER_KEY = (cov_1opq5xmnpm.s[5]++, '__podiumSDK__user');

var PodiumRequest = (cov_1opq5xmnpm.s[6]++, {});
cov_1opq5xmnpm.s[7]++;
PodiumRequest._user = {};

cov_1opq5xmnpm.s[8]++;
var _makeUrl = function _makeUrl(path) {
  cov_1opq5xmnpm.f[0]++;
  cov_1opq5xmnpm.s[9]++;

  return settings.get('settings').endpoint + path;
};

cov_1opq5xmnpm.s[10]++;
var _makeHeaders = function _makeHeaders() {
  cov_1opq5xmnpm.f[1]++;
  cov_1opq5xmnpm.s[11]++;

  return {
    'Authentication': module.exports.getUser().token
  };
};

cov_1opq5xmnpm.s[12]++;
var _checkError = function _checkError(error) {
  cov_1opq5xmnpm.f[2]++;
  cov_1opq5xmnpm.s[13]++;

  if ((cov_1opq5xmnpm.b[1][0]++, error.response.status === 400) && (cov_1opq5xmnpm.b[1][1]++, error.response.data.apiCode === INVALID_TOKEN)) {
    cov_1opq5xmnpm.b[0][0]++;
    cov_1opq5xmnpm.s[14]++;

    settings.remove(STORE_USER_KEY);
  } else {
    cov_1opq5xmnpm.b[0][1]++;
  }

  cov_1opq5xmnpm.s[15]++;
  if ((cov_1opq5xmnpm.b[3][0]++, error.response.status === 403) && (cov_1opq5xmnpm.b[3][1]++, error.response.data.code === UNACCEPTED_TERMS)) {
    cov_1opq5xmnpm.b[2][0]++;
    cov_1opq5xmnpm.s[16]++;

    console.log(UNACCEPTED_TERMS);
  } else {
    cov_1opq5xmnpm.b[2][1]++;
  }
  cov_1opq5xmnpm.s[17]++;
  return _promise2.default.reject(error.response);
};

cov_1opq5xmnpm.s[18]++;
var _prepareRequest = function _prepareRequest() {
  cov_1opq5xmnpm.f[3]++;
  cov_1opq5xmnpm.s[19]++;

  if (!module.exports.getUser()) {
    cov_1opq5xmnpm.b[4][0]++;
    cov_1opq5xmnpm.s[20]++;

    console.error('PodiumSDK - User is not Authenticated.  Login in first');
    cov_1opq5xmnpm.s[21]++;
    return false;
  } else {
    cov_1opq5xmnpm.b[4][1]++;
  }
  cov_1opq5xmnpm.s[22]++;
  return true;
};

cov_1opq5xmnpm.s[23]++;
PodiumRequest.Authenticate = function (username, password, programId) {
  cov_1opq5xmnpm.f[4]++;

  var params = (cov_1opq5xmnpm.s[24]++, {
    'user_account': username,
    'password': password,
    'program_id': programId
  });

  cov_1opq5xmnpm.s[25]++;
  return axios.post(_makeUrl('login'), params).then(function (response) {
    cov_1opq5xmnpm.f[5]++;
    cov_1opq5xmnpm.s[26]++;

    return PodiumRequest.setUser(response.data.token, programId);
  }).catch(function (error) {
    cov_1opq5xmnpm.f[6]++;
    cov_1opq5xmnpm.s[27]++;

    return error;
  });
};

cov_1opq5xmnpm.s[28]++;
PodiumRequest.setUser = function (token, programId) {
  cov_1opq5xmnpm.f[7]++;

  var user = (cov_1opq5xmnpm.s[29]++, {
    token: token,
    program_id: programId
  });
  cov_1opq5xmnpm.s[30]++;
  settings.set(STORE_USER_KEY, user);

  cov_1opq5xmnpm.s[31]++;
  return settings.get(STORE_USER_KEY);
};

cov_1opq5xmnpm.s[32]++;
PodiumRequest.getUser = function () {
  cov_1opq5xmnpm.f[8]++;
  cov_1opq5xmnpm.s[33]++;

  return settings.get(STORE_USER_KEY);
};

cov_1opq5xmnpm.s[34]++;
PodiumRequest.Logout = function () {
  cov_1opq5xmnpm.f[9]++;
  cov_1opq5xmnpm.s[35]++;

  return module.exports.post('logout').then(function (response) {
    cov_1opq5xmnpm.f[10]++;
    cov_1opq5xmnpm.s[36]++;

    settings.remove(STORE_USER_KEY);
  });
};

cov_1opq5xmnpm.s[37]++;
PodiumRequest.get = function (resource) {
  cov_1opq5xmnpm.f[11]++;
  cov_1opq5xmnpm.s[38]++;

  if (!_prepareRequest()) {
      cov_1opq5xmnpm.b[5][0]++;
      cov_1opq5xmnpm.s[39]++;
      return false;
    } else {
    cov_1opq5xmnpm.b[5][1]++;
  }cov_1opq5xmnpm.s[40]++;
  return axios({
    method: 'get',
    transformResponse: function transformResponse(data) {
      cov_1opq5xmnpm.f[12]++;
      cov_1opq5xmnpm.s[41]++;

      return convertTime.APIToUTC(JSON.parse(data));
    },
    url: _makeUrl(resource),
    headers: _makeHeaders()
  }).then(function (response) {
    cov_1opq5xmnpm.f[13]++;
    cov_1opq5xmnpm.s[42]++;

    return response.data;
  }).catch(_checkError);
};

cov_1opq5xmnpm.s[43]++;
PodiumRequest.post = function (resource, params) {
  cov_1opq5xmnpm.f[14]++;
  cov_1opq5xmnpm.s[44]++;

  if (!_prepareRequest()) {
      cov_1opq5xmnpm.b[6][0]++;
      cov_1opq5xmnpm.s[45]++;
      return false;
    } else {
    cov_1opq5xmnpm.b[6][1]++;
  }cov_1opq5xmnpm.s[46]++;
  return axios({
    method: 'post',
    // transformRequest: [function (data, headers) {
    //   return convertTime.UTCtoAPI(data)
    // }],
    transformResponse: function transformResponse(data) {
      cov_1opq5xmnpm.f[15]++;
      cov_1opq5xmnpm.s[47]++;

      return convertTime.APIToUTC(JSON.parse(data));
    },
    url: _makeUrl(resource),
    data: params,
    headers: _makeHeaders()
  }).then(function (response) {
    cov_1opq5xmnpm.f[16]++;
    cov_1opq5xmnpm.s[48]++;

    return response.data;
  }).catch(_checkError);
};

cov_1opq5xmnpm.s[49]++;
module.exports = PodiumRequest;

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

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(17);
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
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(28);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
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

var def = __webpack_require__(5).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(17);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(15);
var wksExt = __webpack_require__(30);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_azf623emi = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\utilities\\settings.js',
      hash = 'b5c781208e4901b56d9bd78aa53143b133da675c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\utilities\\settings.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 30
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 31,
          column: 1
        }
      },
      '2': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 74
        }
      },
      '3': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      '4': {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 34
        }
      },
      '5': {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 29
        }
      },
      '6': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      '7': {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 27
        }
      },
      '8': {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 28
        }
      },
      '9': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      '10': {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 30
        }
      },
      '11': {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 35
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 20
          },
          end: {
            line: 7,
            column: 21
          }
        },
        loc: {
          start: {
            line: 7,
            column: 26
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 7
          },
          end: {
            line: 10,
            column: 8
          }
        },
        loc: {
          start: {
            line: 10,
            column: 29
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 10
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 17,
            column: 7
          },
          end: {
            line: 17,
            column: 8
          }
        },
        loc: {
          start: {
            line: 17,
            column: 22
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 17
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 24,
            column: 11
          }
        },
        loc: {
          start: {
            line: 24,
            column: 25
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 24
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 13
          },
          end: {
            line: 8,
            column: 73
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 8,
            column: 13
          },
          end: {
            line: 8,
            column: 48
          }
        }, {
          start: {
            line: 8,
            column: 52
          },
          end: {
            line: 8,
            column: 73
          }
        }],
        line: 8
      },
      '1': {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }],
        line: 11
      },
      '2': {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 18
      },
      '3': {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        }],
        line: 25
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
      '11': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0]
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

var store = (cov_azf623emi.s[0]++, __webpack_require__(54));

cov_azf623emi.s[1]++;
module.exports = {
  _data: [],
  _hasLocalStorage: function _hasLocalStorage() {
    cov_azf623emi.f[0]++;
    cov_azf623emi.s[2]++;

    return !((cov_azf623emi.b[0][0]++, typeof localStorage === 'undefined') || (cov_azf623emi.b[0][1]++, localStorage === null));
  },
  set: function set(key, value) {
    cov_azf623emi.f[1]++;
    cov_azf623emi.s[3]++;

    if (this._hasLocalStorage()) {
      cov_azf623emi.b[1][0]++;
      cov_azf623emi.s[4]++;

      return store.set(key, value);
    } else {
      cov_azf623emi.b[1][1]++;
      cov_azf623emi.s[5]++;

      this._data[key] = value;
    }
  },
  get: function get(key) {
    cov_azf623emi.f[2]++;
    cov_azf623emi.s[6]++;

    if (this._hasLocalStorage()) {
      cov_azf623emi.b[2][0]++;
      cov_azf623emi.s[7]++;

      return store.get(key);
    } else {
      cov_azf623emi.b[2][1]++;
      cov_azf623emi.s[8]++;

      return this._data[key];
    }
  },
  remove: function remove(key) {
    cov_azf623emi.f[3]++;
    cov_azf623emi.s[9]++;

    if (this._hasLocalStorage()) {
      cov_azf623emi.b[3][0]++;
      cov_azf623emi.s[10]++;

      return store.remove(key);
    } else {
      cov_azf623emi.b[3][1]++;
      cov_azf623emi.s[11]++;

      return delete this._data[key];
    }
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(58)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(36)(String, 'String', function (iterated) {
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(38);
var hide = __webpack_require__(4);
var has = __webpack_require__(7);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(59);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(64);
var ITERATOR = __webpack_require__(1)('iterator');
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(60);
var enumBugKeys = __webpack_require__(28);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
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
  __webpack_require__(42).appendChild(iframe);
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(62)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
var global = __webpack_require__(0);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

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

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(14);
var TAG = __webpack_require__(1)('toStringTag');
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(17);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var invoke = __webpack_require__(74);
var html = __webpack_require__(42);
var cel = __webpack_require__(24);
var global = __webpack_require__(0);
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
  if (__webpack_require__(14)(process) == 'process') {
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
/* 48 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(29);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(40);
var hiddenKeys = __webpack_require__(28).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(53);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var cov_1ztojd58rh = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\index.js',
      hash = '4dc38e4a4223f5c4428f84ee18366388eab7669e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\index.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 3,
          column: 48
        }
      },
      '1': {
        start: {
          line: 4,
          column: 13
        },
        end: {
          line: 4,
          column: 34
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
          column: 14
        },
        end: {
          line: 8,
          column: 36
        }
      },
      '6': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 42
        }
      },
      '7': {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 28
        }
      },
      '8': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 26
        }
      },
      '9': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 38
        }
      },
      '10': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 34
        }
      },
      '11': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 30
        }
      },
      '12': {
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
            line: 13,
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
      '12': 0
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

var settings = (cov_1ztojd58rh.s[0]++, __webpack_require__(33));
var auth = (cov_1ztojd58rh.s[1]++, __webpack_require__(55));
var lrg = (cov_1ztojd58rh.s[2]++, __webpack_require__(100));
var incentive = (cov_1ztojd58rh.s[3]++, __webpack_require__(101));
var profile = (cov_1ztojd58rh.s[4]++, __webpack_require__(102));
var terms = (cov_1ztojd58rh.s[5]++, __webpack_require__(103));

var Podium = function Podium() {
  var userSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1ztojd58rh.b[0][0]++, __webpack_require__(104));
  (0, _classCallCheck3.default)(this, Podium);
  cov_1ztojd58rh.f[0]++;
  cov_1ztojd58rh.s[6]++;

  settings.set('settings', userSettings);
};

cov_1ztojd58rh.s[7]++;


Podium.prototype.auth = auth;
cov_1ztojd58rh.s[8]++;
Podium.prototype.lrg = lrg;
cov_1ztojd58rh.s[9]++;
Podium.prototype.incentive = incentive;
cov_1ztojd58rh.s[10]++;
Podium.prototype.profile = profile;
cov_1ztojd58rh.s[11]++;
Podium.prototype.terms = terms;

cov_1ztojd58rh.s[12]++;
module.exports = Podium;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1gds5yomf0 = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\auth.js',
      hash = 'f0e4c278a9e4048f67ee1e122c4c7ed11ccbc186',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\auth.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 61
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 10,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 3
        }
      },
      '3': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 40
        }
      },
      '4': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 14
        }
      },
      '5': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 14,
          column: 1
        }
      },
      '6': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 48
        }
      },
      '7': {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 18,
          column: 1
        }
      },
      '8': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 66
        }
      },
      '9': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 22,
          column: 1
        }
      },
      '10': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 31
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 19
          },
          end: {
            line: 5,
            column: 20
          }
        },
        loc: {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 21
          }
        },
        loc: {
          start: {
            line: 12,
            column: 42
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 17
          }
        },
        loc: {
          start: {
            line: 16,
            column: 51
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 16
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 20,
            column: 18
          }
        },
        loc: {
          start: {
            line: 20,
            column: 29
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 20
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        }, {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        }],
        line: 6
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
      '10': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0]
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

var PodiumRequest = (cov_1gds5yomf0.s[0]++, __webpack_require__(11));

cov_1gds5yomf0.s[1]++;
exports.getToken = function () {
  cov_1gds5yomf0.f[0]++;
  cov_1gds5yomf0.s[2]++;

  if (PodiumRequest.getUser()) {
    cov_1gds5yomf0.b[0][0]++;
    cov_1gds5yomf0.s[3]++;

    return PodiumRequest.getUser().token;
  } else {
    cov_1gds5yomf0.b[0][1]++;
  }
  cov_1gds5yomf0.s[4]++;
  return false;
};

cov_1gds5yomf0.s[5]++;
exports.basicAuth = function (token, programId) {
  cov_1gds5yomf0.f[1]++;
  cov_1gds5yomf0.s[6]++;

  return PodiumRequest.setUser(token, programId);
};

cov_1gds5yomf0.s[7]++;
exports.login = function (username, password, programId) {
  cov_1gds5yomf0.f[2]++;
  cov_1gds5yomf0.s[8]++;

  return PodiumRequest.Authenticate(username, password, programId);
};

cov_1gds5yomf0.s[9]++;
exports.logout = function () {
  cov_1gds5yomf0.f[3]++;
  cov_1gds5yomf0.s[10]++;

  return PodiumRequest.Logout();
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(44);
__webpack_require__(68);
__webpack_require__(79);
__webpack_require__(80);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(23);
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(19);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(14);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(41);
var toAbsoluteIndex = __webpack_require__(63);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(43);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(66);
var step = __webpack_require__(67);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(36)(Array, 'Array', function (iterated, kind) {
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
/* 66 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var global = __webpack_require__(0);
var ctx = __webpack_require__(16);
var classof = __webpack_require__(45);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(17);
var anInstance = __webpack_require__(69);
var forOf = __webpack_require__(70);
var speciesConstructor = __webpack_require__(46);
var task = __webpack_require__(47).set;
var microtask = __webpack_require__(75)();
var newPromiseCapabilityModule = __webpack_require__(29);
var perform = __webpack_require__(48);
var promiseResolve = __webpack_require__(49);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(76)($Promise.prototype, {
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
__webpack_require__(21)($Promise, PROMISE);
__webpack_require__(77)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(78)(function (iter) {
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
/* 69 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var call = __webpack_require__(71);
var isArrayIter = __webpack_require__(72);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(41);
var getIterFn = __webpack_require__(73);
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(47).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(14)(process) == 'process';

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(4);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(46);
var promiseResolve = __webpack_require__(49);

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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(29);
var perform = __webpack_require__(48);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_81__;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-useless-escape */

var _typeof2 = __webpack_require__(83);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(96);

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(84);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(86);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(44);
module.exports = __webpack_require__(30).f('iterator');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
__webpack_require__(34);
__webpack_require__(94);
__webpack_require__(95);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(38);
var META = __webpack_require__(89).KEY;
var $fails = __webpack_require__(12);
var shared = __webpack_require__(27);
var setToStringTag = __webpack_require__(21);
var uid = __webpack_require__(20);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(30);
var wksDefine = __webpack_require__(31);
var enumKeys = __webpack_require__(90);
var isArray = __webpack_require__(91);
var anObject = __webpack_require__(3);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(25);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(92);
var $GOPD = __webpack_require__(93);
var $DP = __webpack_require__(5);
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
  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(32).f = $propertyIsEnumerable;
  __webpack_require__(50).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(15)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(4)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(20)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(5).f;
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(50);
var pIE = __webpack_require__(32);
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(14);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10);
var gOPN = __webpack_require__(51).f;
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(32);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(25);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(37);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('asyncIterator');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('observable');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(43);
var $keys = __webpack_require__(19);

__webpack_require__(99)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var fails = __webpack_require__(12);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2lt44hlgmf = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\lrg.js',
      hash = '32920a3a9d5ebd42ac5a85c7f5090e5ce38826db',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\lrg.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 61
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 9,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 4
        }
      },
      '3': {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 15,
          column: 1
        }
      },
      '4': {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 4
        }
      },
      '5': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 55
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 14
          },
          end: {
            line: 5,
            column: 15
          }
        },
        loc: {
          start: {
            line: 5,
            column: 31
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 11,
            column: 19
          },
          end: {
            line: 11,
            column: 20
          }
        },
        loc: {
          start: {
            line: 11,
            column: 36
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 11
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 12,
            column: 29
          },
          end: {
            line: 12,
            column: 30
          }
        },
        loc: {
          start: {
            line: 12,
            column: 43
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
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

var PodiumRequest = (cov_2lt44hlgmf.s[0]++, __webpack_require__(11));

cov_2lt44hlgmf.s[1]++;
exports.get = function (redirectUrl) {
  cov_2lt44hlgmf.f[0]++;
  cov_2lt44hlgmf.s[2]++;

  return PodiumRequest.post('lrg/session', {
    website_back: redirectUrl
  });
};

cov_2lt44hlgmf.s[3]++;
exports.redirect = function (redirectUrl) {
  cov_2lt44hlgmf.f[1]++;
  cov_2lt44hlgmf.s[4]++;

  undefined.get(redirectUrl).then(function (response) {
    cov_2lt44hlgmf.f[2]++;
    cov_2lt44hlgmf.s[5]++;

    window.location.replace(response.body.redirect_url);
  });
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_h5lh0ytqj = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\incentive.js',
      hash = '3a8f53402e2136f126968260f2bf34a5d070a2ca',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\incentive.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 61
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 9,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 4
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
          column: 0
        },
        end: {
          line: 15,
          column: 1
        }
      },
      '5': {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 4
        }
      },
      '6': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 24
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 21
          },
          end: {
            line: 5,
            column: 22
          }
        },
        loc: {
          start: {
            line: 5,
            column: 27
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 6,
            column: 43
          },
          end: {
            line: 6,
            column: 44
          }
        },
        loc: {
          start: {
            line: 6,
            column: 57
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 6
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 11,
            column: 26
          },
          end: {
            line: 11,
            column: 27
          }
        },
        loc: {
          start: {
            line: 11,
            column: 32
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 11
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 12,
            column: 55
          },
          end: {
            line: 12,
            column: 56
          }
        },
        loc: {
          start: {
            line: 12,
            column: 69
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
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
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
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

var PodiumRequest = (cov_h5lh0ytqj.s[0]++, __webpack_require__(11));

cov_h5lh0ytqj.s[1]++;
exports.getBalance = function () {
  cov_h5lh0ytqj.f[0]++;
  cov_h5lh0ytqj.s[2]++;

  return PodiumRequest.get('balance').then(function (response) {
    cov_h5lh0ytqj.f[1]++;
    cov_h5lh0ytqj.s[3]++;

    return response.data[0];
  });
};

cov_h5lh0ytqj.s[4]++;
exports.getTransactions = function () {
  cov_h5lh0ytqj.f[2]++;
  cov_h5lh0ytqj.s[5]++;

  return PodiumRequest.get('points_transactions').then(function (response) {
    cov_h5lh0ytqj.f[3]++;
    cov_h5lh0ytqj.s[6]++;

    return response.data;
  });
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_kbvmnx5tk = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\profile.js',
      hash = 'bd5911501f5fabb50876617b00534d435c3a204b',
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
          column: 61
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 7,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 37
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 14
          },
          end: {
            line: 5,
            column: 15
          }
        },
        loc: {
          start: {
            line: 5,
            column: 20
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
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

var PodiumRequest = (cov_kbvmnx5tk.s[0]++, __webpack_require__(11));

cov_kbvmnx5tk.s[1]++;
exports.get = function () {
  cov_kbvmnx5tk.f[0]++;
  cov_kbvmnx5tk.s[2]++;

  return PodiumRequest.get('profile');
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2ot5ggtqce = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\terms.js',
      hash = '7429e55ddc24ad3d74d5680b062c6ee4a0ec8a40',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\api\\terms.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 61
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 7,
          column: 1
        }
      },
      '2': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 35
        }
      },
      '3': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 11,
          column: 1
        }
      },
      '4': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
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
            column: 14
          },
          end: {
            line: 5,
            column: 15
          }
        },
        loc: {
          start: {
            line: 5,
            column: 20
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 9,
            column: 18
          }
        },
        loc: {
          start: {
            line: 9,
            column: 25
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
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

var PodiumRequest = (cov_2ot5ggtqce.s[0]++, __webpack_require__(11));

cov_2ot5ggtqce.s[1]++;
exports.get = function () {
  cov_2ot5ggtqce.f[0]++;
  cov_2ot5ggtqce.s[2]++;

  return PodiumRequest.get('terms');
};

cov_2ot5ggtqce.s[3]++;
exports.accept = function (id) {
  cov_2ot5ggtqce.f[1]++;
  cov_2ot5ggtqce.s[4]++;

  return PodiumRequest.post('terms', { terms_id: id });
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_oevoga73w = function () {
  var path = 'C:\\Engage\\podium.clients\\podium-js-sdk\\src\\settings.js',
      hash = '9002c00caefcd7160a2a09bb10c3b1dc1e5252bc',
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
          line: 5,
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
  endpoint: 'https://api.podiumrewards.com/v1/'
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map