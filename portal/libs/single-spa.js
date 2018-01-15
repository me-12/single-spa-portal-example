(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("singleSpa", [], factory);
	else if(typeof exports === 'object')
		exports["singleSpa"] = factory();
	else
		root["singleSpa"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
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

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(25);
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

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SKIP_BECAUSE_BROKEN = exports.UNLOADING = exports.UNMOUNTING = exports.MOUNTED = exports.MOUNTING = exports.NOT_MOUNTED = exports.BOOTSTRAPPING = exports.NOT_BOOTSTRAPPED = exports.LOADING_SOURCE_CODE = exports.NOT_LOADED = undefined;
exports.isActive = isActive;
exports.isntActive = isntActive;
exports.isLoaded = isLoaded;
exports.isntLoaded = isntLoaded;
exports.shouldBeActive = shouldBeActive;
exports.shouldntBeActive = shouldntBeActive;
exports.notBootstrapped = notBootstrapped;
exports.notSkipped = notSkipped;
exports.toName = toName;
exports.getAppProps = getAppProps;

var _appErrors = __webpack_require__(14);

// App statuses
var NOT_LOADED = exports.NOT_LOADED = 'NOT_LOADED';
var LOADING_SOURCE_CODE = exports.LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE';
var NOT_BOOTSTRAPPED = exports.NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED';
var BOOTSTRAPPING = exports.BOOTSTRAPPING = 'BOOTSTRAPPING';
var NOT_MOUNTED = exports.NOT_MOUNTED = 'NOT_MOUNTED';
var MOUNTING = exports.MOUNTING = 'MOUNTING';
var MOUNTED = exports.MOUNTED = 'MOUNTED';
var UNMOUNTING = exports.UNMOUNTING = 'UNMOUNTING';
var UNLOADING = exports.UNLOADING = 'UNLOADING';
var SKIP_BECAUSE_BROKEN = exports.SKIP_BECAUSE_BROKEN = 'SKIP_BECAUSE_BROKEN';

function isActive(app) {
  return app.status === MOUNTED;
}

function isntActive(app) {
  return !isActive(app);
}

function isLoaded(app) {
  return app.status !== NOT_LOADED && app.status !== LOADING_SOURCE_CODE;
}

function isntLoaded(app) {
  return !isLoaded(app);
}

function shouldBeActive(app) {
  try {
    return app.activeWhen(window.location);
  } catch (err) {
    (0, _appErrors.handleAppError)(err, app);
    app.status = SKIP_BECAUSE_BROKEN;
  }
}

function shouldntBeActive(app) {
  try {
    return !app.activeWhen(window.location);
  } catch (err) {
    (0, _appErrors.handleAppError)(err, app);
    app.status = SKIP_BECAUSE_BROKEN;
  }
}

function notBootstrapped(app) {
  return app.status !== NOT_BOOTSTRAPPED;
}

function notSkipped(item) {
  return item !== SKIP_BECAUSE_BROKEN && (!item || item.status !== SKIP_BECAUSE_BROKEN);
}

function toName(app) {
  return app.name;
}

function getAppProps(app) {
  var props = { appName: app.name };

  if (app.customProps) {
    props.customProps = app.customProps;
  }

  return props;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(47);
var toPrimitive = __webpack_require__(31);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(5);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(51);
var defined = __webpack_require__(29);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleAppError = handleAppError;

var _customEvent = __webpack_require__(36);

var _customEvent2 = _interopRequireDefault(_customEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleAppError(err, app) {
  var transformedErr = transformErr(err, app);

  window.dispatchEvent(new _customEvent2.default("single-spa:application-broken", { detail: { appName: app.name, err: transformedErr } }));

  if (window.SINGLE_SPA_TESTING) {
    console.error(transformedErr);
  } else {
    setTimeout(function () {
      throw transformedErr;
    });
  }
}

function transformErr(ogErr, app) {
  var errPrefix = "'" + app.name + "' died in status " + app.status + ": ";

  var result = void 0;

  if (ogErr instanceof Error) {
    try {
      ogErr.message = errPrefix + ogErr.message;
    } catch (err) {
      /* Some errors have read-only message properties, in which case there is nothing
       * that we can do.
       */
    }
    result = ogErr;
  } else {
    console.warn("While " + app.status + ", '" + app.name + "' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate.");
    try {
      result = new Error(errPrefix + JSON.stringify(ogErr));
    } catch (err) {
      // If it's not an Error and you can't stringify it, then what else can you even do to it?
      result = ogErr;
    }
  }

  return result;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(109);

var _extends3 = _interopRequireDefault(_extends2);

exports.setBootstrapMaxTime = setBootstrapMaxTime;
exports.setMountMaxTime = setMountMaxTime;
exports.setUnmountMaxTime = setUnmountMaxTime;
exports.setUnloadMaxTime = setUnloadMaxTime;
exports.reasonableTime = reasonableTime;
exports.ensureValidAppTimeouts = ensureValidAppTimeouts;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalTimeoutConfig = {
  bootstrap: {
    millis: 4000,
    dieOnTimeout: false
  },
  mount: {
    millis: 3000,
    dieOnTimeout: false
  },
  unmount: {
    millis: 3000,
    dieOnTimeout: false
  },
  unload: {
    millis: 3000,
    dieOnTimeout: false
  }
};

function setBootstrapMaxTime(time) {
  var dieOnTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof time !== 'number' || time <= 0) {
    throw new Error('bootstrap max time must be a positive integer number of milliseconds');
  }

  globalTimeoutConfig.bootstrap = {
    millis: time,
    dieOnTimeout: dieOnTimeout
  };
}

function setMountMaxTime(time) {
  var dieOnTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof time !== 'number' || time <= 0) {
    throw new Error('mount max time must be a positive integer number of milliseconds');
  }

  globalTimeoutConfig.mount = {
    millis: time,
    dieOnTimeout: dieOnTimeout
  };
}

function setUnmountMaxTime(time) {
  var dieOnTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof time !== 'number' || time <= 0) {
    throw new Error('unmount max time must be a positive integer number of milliseconds');
  }

  globalTimeoutConfig.unmount = {
    millis: time,
    dieOnTimeout: dieOnTimeout
  };
}

function setUnloadMaxTime(time) {
  var dieOnTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof time !== 'number' || time <= 0) {
    throw new Error('unload max time must be a positive integer number of milliseconds');
  }

  globalTimeoutConfig.unload = {
    millis: time,
    dieOnTimeout: dieOnTimeout
  };
}

function reasonableTime(promise, description, timeoutConfig, app) {
  var warningPeriod = 1000;

  return new Promise(function (resolve, reject) {
    var finished = false;
    var errored = false;

    promise.then(function (val) {
      finished = true;
      resolve(val);
    }).catch(function (val) {
      finished = true;
      reject(val);
    });

    setTimeout(function () {
      return maybeTimingOut(1);
    }, warningPeriod);
    setTimeout(function () {
      return maybeTimingOut(true);
    }, timeoutConfig.millis);

    function maybeTimingOut(shouldError) {
      if (!finished) {
        if (shouldError === true) {
          errored = true;
          if (timeoutConfig.dieOnTimeout) {
            reject(description + ' did not resolve or reject for ' + timeoutConfig.millis + ' milliseconds');
          } else {
            console.error(description + ' did not resolve or reject for ' + timeoutConfig.millis + ' milliseconds -- we\'re no longer going to warn you about it.');
            //don't resolve or reject, we're waiting this one out
          }
        } else if (!errored) {
          var numWarnings = shouldError;
          var numMillis = numWarnings * warningPeriod;
          console.warn(description + ' did not resolve or reject within ' + numMillis + ' milliseconds');
          if (numMillis + warningPeriod < timeoutConfig.millis) {
            setTimeout(function () {
              return maybeTimingOut(numWarnings + 1);
            }, warningPeriod);
          }
        }
      }
    }
  });
}

function ensureValidAppTimeouts() {
  var timeouts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _extends3.default)({}, globalTimeoutConfig, timeouts);
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.reroute = reroute;

var _customEvent = __webpack_require__(36);

var _customEvent2 = _interopRequireDefault(_customEvent);

var _start = __webpack_require__(43);

var _load = __webpack_require__(95);

var _bootstrap = __webpack_require__(114);

var _mount = __webpack_require__(115);

var _unmount = __webpack_require__(62);

var _apps = __webpack_require__(63);

var _appHelpers = __webpack_require__(4);

var _navigationEvents = __webpack_require__(42);

var _unload = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appChangeUnderway = false,
    peopleWaitingOnAppChange = [];

function reroute() {
  var pendingPromises = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var loadApps = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var loadPromises;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              loadPromises = (0, _apps.getAppsToLoad)().map(_load.toLoadPromise);


              if (loadPromises.length > 0) {
                wasNoOp = false;
              }

              _context.prev = 2;
              _context.next = 5;
              return Promise.all(loadPromises);

            case 5:
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](2);

              callAllEventListeners();
              throw _context.t0;

            case 11:
              return _context.abrupt('return', finishUpAndReturn());

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 7]]);
    }));

    return function loadApps() {
      return _ref.apply(this, arguments);
    };
  }();

  var performAppChanges = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var myCE, unloadPromises, unmountUnloadPromises, allUnmountPromises, unmountAllPromise, appsToLoad, loadThenMountPromises, mountPromises;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              myCE = void 0;

              if (eventArguments && eventArguments[0]) {
                myCE = {
                  detail: eventArguments[0]
                };
              }
              window.dispatchEvent(new _customEvent2.default("single-spa:before-routing-event", myCE));
              unloadPromises = (0, _unload.getAppsToUnload)().map(_unload.toUnloadPromise);
              unmountUnloadPromises = (0, _apps.getAppsToUnmount)().map(_unmount.toUnmountPromise).map(function (unmountPromise) {
                return unmountPromise.then(_unload.toUnloadPromise);
              });
              allUnmountPromises = unmountUnloadPromises.concat(unloadPromises);

              if (allUnmountPromises.length > 0) {
                wasNoOp = false;
              }

              unmountAllPromise = Promise.all(allUnmountPromises);
              appsToLoad = (0, _apps.getAppsToLoad)();

              /* We load and bootstrap apps while other apps are unmounting, but we
               * wait to mount the app until all apps are finishing unmounting
               */

              loadThenMountPromises = appsToLoad.map(function (app) {
                return (0, _load.toLoadPromise)(app).then(_bootstrap.toBootstrapPromise).then(function () {
                  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(app) {
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return unmountAllPromise;

                          case 2:
                            return _context2.abrupt('return', (0, _mount.toMountPromise)(app));

                          case 3:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              });

              if (loadThenMountPromises.length > 0) {
                wasNoOp = false;
              }

              /* These are the apps that are already bootstrapped and just need
               * to be mounted. They each wait for all unmounting apps to finish up
               * before they mount.
               */
              mountPromises = (0, _apps.getAppsToMount)().filter(function (appToMount) {
                return appsToLoad.indexOf(appToMount) < 0;
              }).map(function () {
                var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(appToMount) {
                  return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return (0, _bootstrap.toBootstrapPromise)(appToMount);

                        case 2:
                          _context3.next = 4;
                          return unmountAllPromise;

                        case 4:
                          return _context3.abrupt('return', (0, _mount.toMountPromise)(appToMount));

                        case 5:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));

                return function (_x3) {
                  return _ref4.apply(this, arguments);
                };
              }());

              if (mountPromises.length > 0) {
                wasNoOp = false;
              }

              _context4.prev = 13;
              _context4.next = 16;
              return unmountAllPromise;

            case 16:
              _context4.next = 22;
              break;

            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4['catch'](13);

              callAllEventListeners();
              throw _context4.t0;

            case 22:

              /* Now that the apps that needed to be unmounted are unmounted, their DOM navigation
               * events (like hashchange or popstate) should have been cleaned up. So it's safe
               * to let the remaining captured event listeners to handle about the DOM event.
               */
              callAllEventListeners();

              _context4.prev = 23;
              _context4.next = 26;
              return Promise.all(loadThenMountPromises.concat(mountPromises));

            case 26:
              _context4.next = 32;
              break;

            case 28:
              _context4.prev = 28;
              _context4.t1 = _context4['catch'](23);

              pendingPromises.forEach(function (promise) {
                return promise.reject(_context4.t1);
              });
              throw _context4.t1;

            case 32:
              return _context4.abrupt('return', finishUpAndReturn(false));

            case 33:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[13, 18], [23, 28]]);
    }));

    return function performAppChanges() {
      return _ref2.apply(this, arguments);
    };
  }();

  var eventArguments = arguments[1];

  if (appChangeUnderway) {
    return new Promise(function (resolve, reject) {
      peopleWaitingOnAppChange.push({
        resolve: resolve,
        reject: reject,
        eventArguments: eventArguments
      });
    });
  }

  appChangeUnderway = true;
  var wasNoOp = true;

  if ((0, _start.isStarted)()) {
    return performAppChanges();
  } else {
    return loadApps();
  }

  function finishUpAndReturn() {
    var callEventListeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var returnValue = (0, _apps.getMountedApps)();

    if (callEventListeners) {
      callAllEventListeners();
    }
    pendingPromises.forEach(function (promise) {
      return promise.resolve(returnValue);
    });

    try {
      var appChangeEventName = wasNoOp ? "single-spa:no-app-change" : "single-spa:app-change";
      window.dispatchEvent(new _customEvent2.default(appChangeEventName));
      window.dispatchEvent(new _customEvent2.default("single-spa:routing-event"));
    } catch (err) {
      /* We use a setTimeout because if someone else's event handler throws an error, single-spa
       * needs to carry on. If a listener to the event throws an error, it's their own fault, not
       * single-spa's.
       */
      setTimeout(function () {
        throw err;
      });
    }

    /* Setting this allows for subsequent calls to reroute() to actually perform
     * a reroute instead of just getting queued behind the current reroute call.
     * We want to do this after the mounting/unmounting is done but before we
     * resolve the promise for the `reroute` async function.
     */
    appChangeUnderway = false;

    if (peopleWaitingOnAppChange.length > 0) {
      /* While we were rerouting, someone else triggered another reroute that got queued.
       * So we need reroute again.
       */
      var nextPendingPromises = peopleWaitingOnAppChange;
      peopleWaitingOnAppChange = [];
      reroute(nextPendingPromises);
    }

    return returnValue;
  }

  /* We need to call all event listeners that have been delayed because they were
   * waiting on single-spa. This includes haschange and popstate events for both
   * the current run of performAppChanges(), but also all of the queued event listeners.
   * We want to call the listeners in the same order as if they had not been delayed by
   * single-spa, which means queued ones first and then the most recent one.
   */
  function callAllEventListeners() {
    pendingPromises.forEach(function (pendingPromise) {
      (0, _navigationEvents.callCapturedEventListeners)(pendingPromise.eventArguments);
    });

    (0, _navigationEvents.callCapturedEventListeners)(eventArguments);
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 21 */
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
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(50);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(37);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
/* the array.prototype.find polyfill on npmjs.com is ~20kb (not worth it)
 * and lodash is ~200kb (not worth it)
 */

function find(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }

  return null;
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoader = setLoader;
var Loader = exports.Loader = null;

function setLoader(loader) {
  if (!loader || typeof loader.import !== 'function') {
    throw new Error("'loader' is not a real loader. Must have an import function that returns a Promise");
  }
  exports.Loader = Loader = loader;
  console.error("Warning: singleSpa.setLoader is deprecated. Please declare apps with a loading function instead. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-config.md#loading-function");
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routingEventsListeningTo = undefined;
exports.navigateToUrl = navigateToUrl;
exports.callCapturedEventListeners = callCapturedEventListeners;

var _reroute = __webpack_require__(19);

var _find = __webpack_require__(40);

/* We capture navigation event listeners so that we can make sure
 * that application navigation listeners are not called until
 * single-spa has ensured that the correct applications are
 * unmounted and mounted.
 */
var capturedEventListeners = {
  hashchange: [],
  popstate: []
};

var routingEventsListeningTo = exports.routingEventsListeningTo = ['hashchange', 'popstate'];

function navigateToUrl(obj) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var url = void 0;
  if (typeof obj === 'string') {
    url = obj;
  } else if (this && this.href) {
    url = this.href;
  } else if (obj && obj.currentTarget && obj.currentTarget.href && obj.preventDefault) {
    url = obj.currentTarget.href;
    obj.preventDefault();
  } else {
    throw new Error('singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag');
  }

  var current = parseUri(window.location.href);
  var destination = parseUri(url);

  if (url.indexOf('#') === 0) {
    window.location.hash = '#' + destination.anchor;
  } else if (current.host !== destination.host && destination.host) {
    if (opts.isTestingEnv) {
      return { wouldHaveReloadedThePage: true };
    } else {
      window.location.href = url;
    }
  } else if (!isSamePath(destination.path, current.path)) {
    // different path or a different host
    window.history.pushState(null, null, url);
  } else {
    window.location.hash = '#' + destination.anchor;
  }

  function isSamePath(destination, current) {
    // if the destination has a path but no domain, it doesn't include the root '/'
    return current === destination || current === '/' + destination;
  }
}

function callCapturedEventListeners(eventArguments) {
  var _this = this;

  if (eventArguments) {
    var eventType = eventArguments[0].type;
    if (routingEventsListeningTo.indexOf(eventType) >= 0) {
      capturedEventListeners[eventType].forEach(function (listener) {
        listener.apply(_this, eventArguments);
      });
    }
  }
}

function urlReroute() {
  (0, _reroute.reroute)([], arguments);
}

// We will trigger an app change for any routing events.
window.addEventListener('hashchange', urlReroute);
window.addEventListener('popstate', urlReroute);

// Monkeypatch addEventListener so that we can ensure correct timing
var originalAddEventListener = window.addEventListener;
var originalRemoveEventListener = window.removeEventListener;
window.addEventListener = function (eventName, fn) {
  if (typeof fn === 'function') {
    if (routingEventsListeningTo.indexOf(eventName) >= 0 && !(0, _find.find)(capturedEventListeners[eventName], function (listener) {
      return listener === fn;
    })) {
      capturedEventListeners[eventName].push(fn);
      return;
    }
  }

  return originalAddEventListener.apply(this, arguments);
};

window.removeEventListener = function (eventName, listenerFn) {
  if (typeof listenerFn === 'function') {
    if (routingEventsListeningTo.indexOf(eventName) >= 0) {
      capturedEventListeners[eventName] = capturedEventListeners[eventName].filter(function (fn) {
        return fn !== listenerFn;
      });
      return;
    }
  }

  return originalRemoveEventListener.apply(this, arguments);
};

var originalPushState = window.history.pushState;
window.history.pushState = function (state) {
  var result = originalPushState.apply(this, arguments);

  (0, _reroute.reroute)();

  return result;
};

var originalReplaceState = window.history.replaceState;
window.history.replaceState = function () {
  var result = originalReplaceState.apply(this, arguments);
  (0, _reroute.reroute)();
  return result;
};

/* For convenience in `onclick` attributes, we expose a global function for navigating to
 * whatever an <a> tag's href is.
 */
window.singleSpaNavigate = navigateToUrl;

function parseUri(str) {
  // parseUri 1.2.2
  // (c) Steven Levithan <stevenlevithan.com>
  // MIT License
  // http://blog.stevenlevithan.com/archives/parseuri
  var parseOptions = {
    strictMode: true,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
      name: "queryKey",
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  };

  var o = parseOptions;
  var m = o.parser[o.strictMode ? "strict" : "loose"].exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    uri[o.key[i]] = m[i] || "";
  }uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });

  return uri;
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.started = undefined;
exports.start = start;
exports.isStarted = isStarted;

var _reroute = __webpack_require__(19);

var _loader = __webpack_require__(41);

var started = exports.started = false;

function start() {
  exports.started = started = true;
  (0, _reroute.reroute)();
}

function isStarted() {
  return started;
}

var startWarningDelay = 5000;

setTimeout(function () {
  if (!started) {
    console.warn('singleSpa.start() has not been called, ' + startWarningDelay + 'ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start');
  }
}, startWarningDelay);

/***/ }),
/* 44 */
/***/ (function(module, exports) {



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(72)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(46)(String, 'String', function (iterated) {
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(48);
var hide = __webpack_require__(5);
var has = __webpack_require__(9);
var Iterators = __webpack_require__(17);
var $iterCreate = __webpack_require__(73);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(77);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(74);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(75)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(29);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
var global = __webpack_require__(0);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(17);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(22);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(87);
var html = __webpack_require__(53);
var cel = __webpack_require__(30);
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
/* 59 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(35);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(50);
var hiddenKeys = __webpack_require__(34).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUnmountPromise = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var toUnmountPromise = exports.toUnmountPromise = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(app) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(app.status !== _appHelpers.MOUNTED)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', app);

          case 2:
            app.status = _appHelpers.UNMOUNTING;

            _context.prev = 3;
            _context.next = 6;
            return (0, _timeouts.reasonableTime)(app.unmount((0, _appHelpers.getAppProps)(app)), 'Unmounting application ' + app.name + '\'', app.timeouts.unmount);

          case 6:
            app.status = _appHelpers.NOT_MOUNTED;
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](3);

            (0, _appErrors.handleAppError)(_context.t0, app);
            app.status = _appHelpers.SKIP_BECAUSE_BROKEN;

          case 13:
            return _context.abrupt('return', app);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));

  return function toUnmountPromise(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _appHelpers = __webpack_require__(4);

var _appErrors = __webpack_require__(14);

var _timeouts = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMountedApps = getMountedApps;
exports.getAppNames = getAppNames;
exports.getAppStatus = getAppStatus;
exports.declareChildApplication = declareChildApplication;
exports.registerApplication = registerApplication;
exports.checkActivityFunctions = checkActivityFunctions;
exports.getAppsToLoad = getAppsToLoad;
exports.getAppsToUnmount = getAppsToUnmount;
exports.getAppsToMount = getAppsToMount;
exports.unloadChildApplication = unloadChildApplication;
exports.unloadApplication = unloadApplication;

var _loader = __webpack_require__(41);

var _jquerySupport = __webpack_require__(64);

var _appHelpers = __webpack_require__(4);

var _reroute = __webpack_require__(19);

var _find = __webpack_require__(40);

var _unmount = __webpack_require__(62);

var _unload = __webpack_require__(65);

var apps = [];

function getMountedApps() {
  return apps.filter(_appHelpers.isActive).map(_appHelpers.toName);
}

function getAppNames() {
  return app.map(_appHelpers.toName);
}

function getAppStatus(appName) {
  var app = (0, _find.find)(apps, function (app) {
    return app.name === appName;
  });
  return app ? app.status : null;
}

function declareChildApplication(appName, arg1, arg2) {
  console.warn('declareChildApplication is deprecated and will be removed in the next major version, use "registerApplication" instead');
  return registerApplication(appName, arg1, arg2);
}

function registerApplication(appName, arg1, arg2, customProps) {
  if (typeof appName !== 'string' || appName.length === 0) throw new Error('The first argument must be a non-empty string \'appName\'');
  if (apps[appName]) throw new Error('There is already an app declared with name ' + appName);

  var loadImpl = void 0,
      activeWhen = void 0;
  if (!arg2) {
    if (!_loader.Loader) {
      throw new Error('You cannot declare a single-spa application without either providing a way to load the application or a Loader. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#declareApplication');
    }
    loadImpl = function loadImpl() {
      return _loader.Loader.import(appName);
    };
    activeWhen = arg1;
  } else {
    if (typeof arg1 !== 'function') {
      loadImpl = function loadImpl() {
        return Promise.resolve(arg1);
      };
    } else {
      loadImpl = arg1;
    }
    activeWhen = arg2;
  }
  if (typeof activeWhen !== 'function') throw new Error('The activeWhen argument must be a function');

  var app = {
    name: appName,
    loadImpl: loadImpl,
    activeWhen: activeWhen,
    status: _appHelpers.NOT_LOADED
  };

  if (customProps) {
    debugger;
    app.customProps = customProps('foo');
  }

  // if (isFunction(customProps)) {
  //     app.customProps = customProps(app, apps, getMountedApps(), getAppsToMount());
  // }

  apps.push(app);

  (0, _jquerySupport.ensureJQuerySupport)();

  (0, _reroute.reroute)();
}

function checkActivityFunctions(location) {
  var activeApps = [];
  for (var i = 0; i < apps.length; i++) {
    if (apps[i].activeWhen(location)) {
      activeApps.push(apps[i].name);
    }
  }
  return activeApps;
}

function getAppsToLoad() {
  return apps.filter(_appHelpers.shouldBeActive).filter(_appHelpers.notSkipped).filter(_appHelpers.isntLoaded);
}

function getAppsToUnmount() {
  return apps.filter(_appHelpers.shouldntBeActive).filter(_appHelpers.notSkipped).filter(_appHelpers.isActive);
}

function getAppsToMount() {
  return apps.filter(_appHelpers.shouldBeActive).filter(_appHelpers.notSkipped).filter(_appHelpers.isntActive).filter(_appHelpers.isLoaded);
}

function unloadChildApplication(appName, opts) {
  console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use "unloadApplication" instead');
  return unloadApplication(appName, opts);
}

function unloadApplication(appName) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { waitForUnmount: false };

  if (typeof appName !== 'string') {
    throw new Error('unloadApplication requires a string \'appName\'');
  }
  var app = (0, _find.find)(apps, function (App) {
    return App.name === appName;
  });
  if (!app) {
    throw new Error('Could not unload application \'' + appName + '\' because no such application has been declared');
  }

  var appUnloadInfo = (0, _unload.getAppUnloadInfo)(app.name);
  if (opts && opts.waitForUnmount) {
    // We need to wait for unmount before unloading the app

    if (appUnloadInfo) {
      // Someone else is already waiting for this, too
      return appUnloadInfo.promise;
    } else {
      // We're the first ones wanting the app to be resolved.
      var promise = new Promise(function (resolve, reject) {
        (0, _unload.addAppToUnload)(app, function () {
          return promise;
        }, resolve, reject);
      });
      return promise;
    }
  } else {
    /* We should unmount the app, unload it, and remount it immediately.
     */

    var resultPromise = void 0;

    if (appUnloadInfo) {
      // Someone else is already waiting for this app to unload
      resultPromise = appUnloadInfo.promise;
      immediatelyUnloadApp(app, appUnloadInfo.resolve, appUnloadInfo.reject);
    } else {
      // We're the first ones wanting the app to be resolved.
      resultPromise = new Promise(function (resolve, reject) {
        (0, _unload.addAppToUnload)(app, function () {
          return resultPromise;
        }, resolve, reject);
        immediatelyUnloadApp(app, resolve, reject);
      });
    }

    return resultPromise;
  }
}

function immediatelyUnloadApp(app, resolve, reject) {
  (0, _unmount.toUnmountPromise)(app).then(_unload.toUnloadPromise).then(function () {
    resolve();
    setTimeout(function () {
      // reroute, but the unload promise is done
      (0, _reroute.reroute)();
    });
  }).catch(reject);
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureJQuerySupport = ensureJQuerySupport;

var _navigationEvents = __webpack_require__(42);

var hasInitialized = false;

function ensureJQuerySupport() {
  var jQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.jQuery;

  if (!jQuery) {
    if (window.$ && window.$.fn && window.$.fn.jquery) {
      jQuery = window.$;
    }
  }

  if (jQuery && !hasInitialized) {
    var originalJQueryOn = jQuery.fn.on;
    var originalJQueryOff = jQuery.fn.off;

    jQuery.fn.on = function (eventString, fn) {
      return captureRoutingEvents.call(this, originalJQueryOn, window.addEventListener, eventString, fn, arguments);
    };

    jQuery.fn.off = function (eventString, fn) {
      return captureRoutingEvents.call(this, originalJQueryOff, window.removeEventListener, eventString, fn, arguments);
    };

    hasInitialized = true;
  }
}

function captureRoutingEvents(originalJQueryFunction, nativeFunctionToCall, eventString, fn, originalArgs) {
  if (typeof eventString !== 'string') {
    return originalJQueryFunction.apply(this, originalArgs);
  }

  var eventNames = eventString.split(/\s+/);
  eventNames.forEach(function (eventName) {
    if (_navigationEvents.routingEventsListeningTo.indexOf(eventName) >= 0) {
      nativeFunctionToCall(eventName, fn);
      eventString = eventString.replace(eventName, '');
    }
  });

  if (eventString.trim() === '') {
    return this;
  } else {
    return originalJQueryFunction.apply(this, originalArgs);
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUnloadPromise = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var toUnloadPromise = exports.toUnloadPromise = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(app) {
    var unloadInfo;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            unloadInfo = appsToUnload[app.name];

            if (!(app.status === _appHelpers.NOT_LOADED)) {
              _context.next = 4;
              break;
            }

            /* This app is already unloaded. We just need to clean up
             * anything that still thinks we need to unload the app.
             */
            finishUnloadingApp(app, unloadInfo);
            return _context.abrupt('return', app);

          case 4:
            if (!(app.status === _appHelpers.UNLOADING)) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return unloadInfo.promise;

          case 7:
            return _context.abrupt('return', app);

          case 8:
            if (!(app.status !== _appHelpers.NOT_MOUNTED)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', app);

          case 10:
            if (unloadInfo) {
              _context.next = 12;
              break;
            }

            return _context.abrupt('return', app);

          case 12:
            _context.prev = 12;

            app.status = _appHelpers.UNLOADING;
            _context.next = 16;
            return (0, _timeouts.reasonableTime)(app.unload((0, _appHelpers.getAppProps)(app)), 'Unloading application \'' + app.name + '\'', app.timeouts.unload);

          case 16:
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](12);

            errorUnloadingApp(app, unloadInfo, _context.t0);
            return _context.abrupt('return', app);

          case 22:

            finishUnloadingApp(app, unloadInfo);

            return _context.abrupt('return', app);

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[12, 18]]);
  }));

  return function toUnloadPromise(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addAppToUnload = addAppToUnload;
exports.getAppUnloadInfo = getAppUnloadInfo;
exports.getAppsToUnload = getAppsToUnload;

var _appHelpers = __webpack_require__(4);

var _appErrors = __webpack_require__(14);

var _timeouts = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appsToUnload = {};

function finishUnloadingApp(app, unloadInfo) {
  delete appsToUnload[app.name];

  // Unloaded apps don't have lifecycles
  delete app.bootstrap;
  delete app.mount;
  delete app.unmount;
  delete app.unload;

  app.status = _appHelpers.NOT_LOADED;

  /* resolve the promise of whoever called unloadApplication.
   * This should be done after all other cleanup/bookkeeping
   */
  unloadInfo.resolve();
}

function errorUnloadingApp(app, unloadInfo, err) {
  delete appsToUnload[app.name];

  // Unloaded apps don't have lifecycles
  delete app.bootstrap;
  delete app.mount;
  delete app.unmount;
  delete app.unload;

  (0, _appErrors.handleAppError)(err, app);
  app.status = _appHelpers.SKIP_BECAUSE_BROKEN;
  unloadInfo.reject(err);
}

function addAppToUnload(app, promiseGetter, resolve, reject) {
  appsToUnload[app.name] = { app: app, resolve: resolve, reject: reject };
  Object.defineProperty(appsToUnload[app.name], 'promise', { get: promiseGetter });
}

function getAppUnloadInfo(appName) {
  return appsToUnload[appName];
}

function getAppsToUnload() {
  return Object.keys(appsToUnload).map(function (appName) {
    return appsToUnload[appName].app;
  }).filter(_appHelpers.isntActive);
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _start = __webpack_require__(43);

Object.defineProperty(exports, 'start', {
  enumerable: true,
  get: function get() {
    return _start.start;
  }
});

var _jquerySupport = __webpack_require__(64);

Object.defineProperty(exports, 'ensureJQuerySupport', {
  enumerable: true,
  get: function get() {
    return _jquerySupport.ensureJQuerySupport;
  }
});

var _timeouts = __webpack_require__(15);

Object.defineProperty(exports, 'setBootstrapMaxTime', {
  enumerable: true,
  get: function get() {
    return _timeouts.setBootstrapMaxTime;
  }
});
Object.defineProperty(exports, 'setMountMaxTime', {
  enumerable: true,
  get: function get() {
    return _timeouts.setMountMaxTime;
  }
});
Object.defineProperty(exports, 'setUnmountMaxTime', {
  enumerable: true,
  get: function get() {
    return _timeouts.setUnmountMaxTime;
  }
});
Object.defineProperty(exports, 'setUnloadMaxTime', {
  enumerable: true,
  get: function get() {
    return _timeouts.setUnloadMaxTime;
  }
});

var _apps = __webpack_require__(63);

Object.defineProperty(exports, 'registerApplication', {
  enumerable: true,
  get: function get() {
    return _apps.registerApplication;
  }
});
Object.defineProperty(exports, 'getMountedApps', {
  enumerable: true,
  get: function get() {
    return _apps.getMountedApps;
  }
});
Object.defineProperty(exports, 'getAppStatus', {
  enumerable: true,
  get: function get() {
    return _apps.getAppStatus;
  }
});
Object.defineProperty(exports, 'unloadApplication', {
  enumerable: true,
  get: function get() {
    return _apps.unloadApplication;
  }
});
Object.defineProperty(exports, 'checkActivityFunctions', {
  enumerable: true,
  get: function get() {
    return _apps.checkActivityFunctions;
  }
});
Object.defineProperty(exports, 'getAppNames', {
  enumerable: true,
  get: function get() {
    return _apps.getAppNames;
  }
});
Object.defineProperty(exports, 'declareChildApplication', {
  enumerable: true,
  get: function get() {
    return _apps.declareChildApplication;
  }
});
Object.defineProperty(exports, 'unloadChildApplication', {
  enumerable: true,
  get: function get() {
    return _apps.unloadChildApplication;
  }
});

var _navigationEvents = __webpack_require__(42);

Object.defineProperty(exports, 'navigateToUrl', {
  enumerable: true,
  get: function get() {
    return _navigationEvents.navigateToUrl;
  }
});

var _reroute = __webpack_require__(19);

Object.defineProperty(exports, 'triggerAppChange', {
  enumerable: true,
  get: function get() {
    return _reroute.reroute;
  }
});

var _loader = __webpack_require__(41);

Object.defineProperty(exports, 'setLoader', {
  enumerable: true,
  get: function get() {
    return _loader.setLoader;
  }
});

var _appHelpers = __webpack_require__(4);

Object.defineProperty(exports, 'NOT_LOADED', {
  enumerable: true,
  get: function get() {
    return _appHelpers.NOT_LOADED;
  }
});
Object.defineProperty(exports, 'LOADING_SOURCE_CODE', {
  enumerable: true,
  get: function get() {
    return _appHelpers.LOADING_SOURCE_CODE;
  }
});
Object.defineProperty(exports, 'NOT_BOOTSTRAPPED', {
  enumerable: true,
  get: function get() {
    return _appHelpers.NOT_BOOTSTRAPPED;
  }
});
Object.defineProperty(exports, 'BOOTSTRAPPING', {
  enumerable: true,
  get: function get() {
    return _appHelpers.BOOTSTRAPPING;
  }
});
Object.defineProperty(exports, 'NOT_MOUNTED', {
  enumerable: true,
  get: function get() {
    return _appHelpers.NOT_MOUNTED;
  }
});
Object.defineProperty(exports, 'MOUNTING', {
  enumerable: true,
  get: function get() {
    return _appHelpers.MOUNTING;
  }
});
Object.defineProperty(exports, 'MOUNTED', {
  enumerable: true,
  get: function get() {
    return _appHelpers.MOUNTED;
  }
});
Object.defineProperty(exports, 'UNMOUNTING', {
  enumerable: true,
  get: function get() {
    return _appHelpers.UNMOUNTING;
  }
});
Object.defineProperty(exports, 'SKIP_BECAUSE_BROKEN', {
  enumerable: true,
  get: function get() {
    return _appHelpers.SKIP_BECAUSE_BROKEN;
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(69);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(55);
__webpack_require__(81);
__webpack_require__(92);
__webpack_require__(93);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var defined = __webpack_require__(29);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(49);
var descriptor = __webpack_require__(23);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(24);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(52);
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

var toInteger = __webpack_require__(28);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(54);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(79);
var step = __webpack_require__(80);
var Iterators = __webpack_require__(17);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(46)(Array, 'Array', function (iterated, kind) {
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
/* 79 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var global = __webpack_require__(0);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(56);
var $export = __webpack_require__(12);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(22);
var anInstance = __webpack_require__(82);
var forOf = __webpack_require__(83);
var speciesConstructor = __webpack_require__(57);
var task = __webpack_require__(58).set;
var microtask = __webpack_require__(88)();
var newPromiseCapabilityModule = __webpack_require__(35);
var perform = __webpack_require__(59);
var promiseResolve = __webpack_require__(60);
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
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
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
  Internal.prototype = __webpack_require__(89)($Promise.prototype, {
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
__webpack_require__(90)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(91)(function (iter) {
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
/* 82 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(84);
var isArrayIter = __webpack_require__(85);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(52);
var getIterFn = __webpack_require__(86);
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(17);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(56);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(17);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(58).set;
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
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(5);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 91 */
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(12);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(57);
var promiseResolve = __webpack_require__(60);

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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(12);
var newPromiseCapability = __webpack_require__(35);
var perform = __webpack_require__(59);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 94 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toLoadPromise = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = __webpack_require__(96);

var _typeof3 = _interopRequireDefault(_typeof2);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var toLoadPromise = exports.toLoadPromise = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(app) {
    var appOpts, loadPromise, validationErrMessage;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(app.status !== _appHelpers.NOT_LOADED)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', app);

          case 2:

            app.status = _appHelpers.LOADING_SOURCE_CODE;

            appOpts = void 0;
            _context.prev = 4;
            loadPromise = app.loadImpl((0, _appHelpers.getAppProps)(app));

            if (smellsLikeAPromise(loadPromise)) {
              _context.next = 8;
              break;
            }

            throw new Error('single-spa loading function did not return a promise. Check the second argument to registerApplication(\'' + app.name + '\', loadingFunction, activityFunction)');

          case 8:
            _context.next = 10;
            return loadPromise;

          case 10:
            appOpts = _context.sent;
            _context.next = 18;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](4);

            (0, _appErrors.handleAppError)(_context.t0, app);
            app.status = _appHelpers.SKIP_BECAUSE_BROKEN;
            return _context.abrupt('return', app);

          case 18:
            validationErrMessage = void 0;


            if ((typeof appOpts === 'undefined' ? 'undefined' : (0, _typeof3.default)(appOpts)) !== 'object') {
              validationErrMessage = 'does not export anything';
            }

            if (!validLifecycleFn(appOpts.bootstrap)) {
              validationErrMessage = 'does not export a bootstrap function or array of functions';
            }

            if (!validLifecycleFn(appOpts.mount)) {
              validationErrMessage = 'does not export a mount function or array of functions';
            }

            if (!validLifecycleFn(appOpts.unmount)) {
              validationErrMessage = 'does not export an unmount function or array of functions';
            }

            if (!validationErrMessage) {
              _context.next = 27;
              break;
            }

            (0, _appErrors.handleAppError)(validationErrMessage, app);
            app.status = _appHelpers.SKIP_BECAUSE_BROKEN;
            return _context.abrupt('return', app);

          case 27:

            app.status = _appHelpers.NOT_BOOTSTRAPPED;
            app.bootstrap = flattenFnArray(appOpts.bootstrap, 'App \'' + app.name + '\' bootstrap function');
            app.mount = flattenFnArray(appOpts.mount, 'App \'' + app.name + '\' mount function');
            app.unmount = flattenFnArray(appOpts.unmount, 'App \'' + app.name + '\' unmount function');
            app.unload = flattenFnArray(appOpts.unload || [], 'App \'' + app.name + '\' unload function');
            app.timeouts = (0, _timeouts.ensureValidAppTimeouts)(appOpts.timeouts);

            return _context.abrupt('return', app);

          case 34:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 13]]);
  }));

  return function toLoadPromise(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _appHelpers = __webpack_require__(4);

var _timeouts = __webpack_require__(15);

var _appErrors = __webpack_require__(14);

var _find = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validLifecycleFn(fn) {
  return fn && (typeof fn === 'function' || isArrayOfFns(fn));

  function isArrayOfFns(arr) {
    return Array.isArray(arr) && !(0, _find.find)(arr, function (item) {
      return typeof item !== 'function';
    });
  }
}

function flattenFnArray(fns, description) {
  fns = Array.isArray(fns) ? fns : [fns];
  if (fns.length === 0) {
    fns = [function () {
      return Promise.resolve();
    }];
  }

  return function (props) {
    return new Promise(function (resolve, reject) {
      waitForPromises(0);

      function waitForPromises(index) {
        var promise = fns[index](props);
        if (!smellsLikeAPromise(promise)) {
          reject(description + ' at index ' + index + ' did not return a promise');
        } else {
          promise.then(function () {
            if (index === fns.length - 1) {
              resolve();
            } else {
              waitForPromises(index + 1);
            }
          }).catch(reject);
        }
      }
    });
  };
}

function smellsLikeAPromise(promise) {
  return promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(97);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(99);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(55);
module.exports = __webpack_require__(37).f('iterator');


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
__webpack_require__(44);
__webpack_require__(107);
__webpack_require__(108);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(48);
var META = __webpack_require__(102).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(33);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(25);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(37);
var wksDefine = __webpack_require__(38);
var enumKeys = __webpack_require__(103);
var isArray = __webpack_require__(104);
var anObject = __webpack_require__(3);
var isObject = __webpack_require__(7);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(31);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(49);
var gOPNExt = __webpack_require__(105);
var $GOPD = __webpack_require__(106);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(24);
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
  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f = $propertyIsEnumerable;
  __webpack_require__(39).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(25)('meta');
var isObject = __webpack_require__(7);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(24);
var gOPS = __webpack_require__(39);
var pIE = __webpack_require__(27);
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13);
var gOPN = __webpack_require__(61).f;
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(31);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(47);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('asyncIterator');


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(110);

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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(113) });


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(24);
var gOPS = __webpack_require__(39);
var pIE = __webpack_require__(27);
var toObject = __webpack_require__(54);
var IObject = __webpack_require__(51);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBootstrapPromise = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var toBootstrapPromise = exports.toBootstrapPromise = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(app) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(app.status !== _appHelpers.NOT_BOOTSTRAPPED)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', app);

          case 2:

            app.status = _appHelpers.BOOTSTRAPPING;

            _context.prev = 3;
            _context.next = 6;
            return (0, _timeouts.reasonableTime)(app.bootstrap((0, _appHelpers.getAppProps)(app)), 'Bootstrapping app \'' + app.name + '\'', app.timeouts.bootstrap);

          case 6:
            app.status = _appHelpers.NOT_MOUNTED;
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](3);

            app.status = _appHelpers.SKIP_BECAUSE_BROKEN;
            (0, _appErrors.handleAppError)(_context.t0, app);

          case 13:
            return _context.abrupt('return', app);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));

  return function toBootstrapPromise(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _appHelpers = __webpack_require__(4);

var _timeouts = __webpack_require__(15);

var _appErrors = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toMountPromise = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var toMountPromise = exports.toMountPromise = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(app) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(app.status !== _appHelpers.NOT_MOUNTED)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', app);

          case 2:

            if (!beforeFirstMountFired) {
              window.dispatchEvent(new _customEvent2.default('single-spa:before-first-mount'));
              beforeFirstMountFired = true;
            }

            _context.prev = 3;
            _context.next = 6;
            return (0, _timeouts.reasonableTime)(app.mount((0, _appHelpers.getAppProps)(app)), 'Mounting application \'' + app.name + '\'', app.timeouts.mount);

          case 6:
            app.status = _appHelpers.MOUNTED;
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](3);

            (0, _appErrors.handleAppError)(_context.t0, app);
            app.status = _appHelpers.SKIP_BECAUSE_BROKEN;

          case 13:

            if (!firstMountFired) {
              window.dispatchEvent(new _customEvent2.default('single-spa:first-mount'));
              firstMountFired = true;
            }

            return _context.abrupt('return', app);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));

  return function toMountPromise(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _appHelpers = __webpack_require__(4);

var _appErrors = __webpack_require__(14);

var _timeouts = __webpack_require__(15);

var _customEvent = __webpack_require__(36);

var _customEvent2 = _interopRequireDefault(_customEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beforeFirstMountFired = false;
var firstMountFired = false;

/***/ })
/******/ ]);
});
//# sourceMappingURL=single-spa.js.map