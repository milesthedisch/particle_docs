/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function(header) {
	        this.append(header[0], header[1])
	      }, this)
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	window.particleLib = __webpack_require__(3);
	var iframe = __webpack_require__(5)(document);
	var shims = __webpack_require__(7)(document);
	var utils = __webpack_require__(6)(document);
	var DEFAULT_EXAMPLE = "random_vectors";
	
	var sethash = function sethash(fragment) {
	  return window.location.hash = fragment || "";
	};
	
	document.addEventListener("DOMContentLoaded", function () {
	  var hash = window.location.hash;
	  var pathname = window.location.pathname;
	  var textNodes = utils.mapToText(".list-examples li a");
	  var $ = shims.$;
	
	  if (textNodes.length === 0) {
	    throw new Error("Theres no textNodes to check against.");
	  }
	
	  switch (pathname) {
	    case "/":
	      {
	        break;
	      }
	    case "/examples":
	      {
	        var onClickOfList = utils.elmDelegator($(".list-examples"), "click");
	        var isAnchor = function isAnchor(elm) {
	          return elm.tagName === "A";
	        };
	
	        onClickOfList(isAnchor, function (err, target, evt) {
	          if (err) throw err;
	          if (!target && !evt) return;
	
	          sethash(target.text);
	          iframe.loadInIframe(target.text);
	        });
	
	        // If theres a page fragment load the right example.
	        if (hash.length) {
	          var hashQuery = hash.substr(1);
	
	          if (textNodes.indexOf(hashQuery) > -1) {
	            iframe.loadInIframe(hashQuery);
	          }
	        }
	
	        // Default to the an example if theres no hash.
	        if (hash.length < 1) {
	          sethash(DEFAULT_EXAMPLE);
	          iframe.loadInIframe(DEFAULT_EXAMPLE);
	        }
	        break;
	      }
	
	    case "/maths":
	      {
	        break;
	      }
	    default:
	      {
	        console.log("no route matched 404 :(");
	      }
	  }
	});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["particle"] = factory();else root["particle"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = __webpack_require__(1);
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var Vector = __webpack_require__(2);
				var Particle = __webpack_require__(4);
				var Utils = __webpack_require__(3);
				var Shapes = __webpack_require__(118);
				var YAT = __webpack_require__(119);
				var Clock = __webpack_require__(121);
				var Ticker = __webpack_require__(122);
	
				module.exports = {
					Vector: Vector,
					Particle: Particle,
					Utils: Utils,
					Shapes: Shapes,
					YAT: YAT,
					Ticker: Ticker,
					Clock: Clock
				};
	
				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				/* eslint max-len: 0 */
	
				//      
	
				var utils = __webpack_require__(3);
	
				var INITIAL_STATE = {
					x: 0,
					y: 1
				};
	
				/**
	    * Vector class is responsible for doing vector operations and storing
	    * the x and y coordinates of the vector.
	    */
	
				/**
	    * @class Vector
	    * @param {Object} state object.
	    */
	
				var Vector = function () {
	
					/**
	     * constructor
	     * @param  {Object} state Initial state
	     */
					function Vector() {
						var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
						_classCallCheck(this, Vector);
	
						this.state = state;
					}
	
					/**
	     * Create - Easy way to instantiate a vector.
	     * @memberOf Vector
	     * @param  {Int} x
	     * @param  {Int} y
	     * @return {Vector}   A object inheriting from Vector.
	     */
	
					_createClass(Vector, [{
						key: "create",
						value: function create() {
							var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
							var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
							var vec = new Vector({ x: x, y: y });
							return vec;
						}
					}, {
						key: "set",
	
						/**
	      * Set - A setter for the vector class.
	      * @memberOf Vector
	      * @param  {*} prop
	      * @param  {*} val
	      * @return {Boolean} Is the prop your passing in exsist.
	      */
						value: function set(prop, val) {
							// TODO: Add check val is number
							// 1. Create utils.isNumber function.
	
							if (this.state.hasOwnProperty(prop)) {
								this.state[prop] = val;
								return true;
							}
	
							return false;
						}
					}, {
						key: "get",
	
						/**
	      * get - A getter for the vector class.
	      * @memberOf Vector
	      * @param  {String} prop  The prop to set on state.
	      * @return {Value}        The value assosiated with the prop.
	      */
						value: function get(prop) {
							return this.state[prop];
						}
					}, {
						key: "setAngle",
	
						/**
	      * setAngle - Plot the corrdinates based on radians given.
	      * @memberOf Vector
	      * @param {Radians} rad A floating point number.
	      * @return {Vector}
	      */
						value: function setAngle(rad) {
							// TODO: Add check rad is number
							// 1. Create utils.isNumber function.
	
							var length = this.getLength();
	
							this.set("x", Math.cos(rad) * length);
							this.set("y", Math.sin(rad) * length);
	
							return this;
						}
					}, {
						key: "setLength",
	
						/**
	      * setLength - Takes a length and sets coordinate.
	      * @memberOf Vector
	      * @param {Integer} length
	      * @return {Vector}
	      */
						value: function setLength(length) {
							// TODO: Add check rad is number
							// 1. Create utils.isNumber function.
	
							var rad = this.getAngle();
	
							this.set("x", Math.cos(rad) * length);
							this.set("y", Math.sin(rad) * length);
	
							return this;
						}
					}, {
						key: "getLength",
	
						/**
	      * getLength - Gets length of the coordinates from center plane.
	      * @memberOf Vector
	      * @return {Integer} Cooridinates.
	      */
						value: function getLength() {
							var x = this.get("x");
							var y = this.get("y");
							return Math.hypot(x, y);
						}
					}, {
						key: "getAngle",
	
						/**
	      * getAngle - Get the angle of coordinates from center plane.
	      * @memberOf Vector
	      * @return {Integer} Cooridinates.
	      */
						value: function getAngle() {
							var x = this.get("x");
							var y = this.get("y");
							return Math.atan2(y, x);
						}
					}, {
						key: "random",
	
						/**
	      * random generate a vector with random states.
	      * @memberOf Vector
	      * @param {Number} min - A min range on the random vector state.
	      * @param {Number} max - A max range on the random vector state.
	      * @return {Vector}
	      */
						value: function random() {
							var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
							var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	
							var x = utils.lerp(Math.random(), min, max);
							var y = utils.lerp(Math.random(), min, max);
							return this.create(x, y);
						}
					}, {
						key: "randomBetween",
	
						/**
	      * @memberOf Vector
	      * @description Return a vector that has a x between the given range.
	      *              and y given a range.
	      * @param  {Number} xMin Minmum x value
	      * @param  {Number} xMax Maximum x value
	      * @param  {Number} yMin Minmum y value
	      * @param  {Number} yMax Maximum y value
	      * @return {Vector}
	      */
						value: function randomBetween() {
							var xMin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
							var xMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
							var yMin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
							var yMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
	
							xMax = Math.max(xMin, xMax);
							xMin = Math.min(xMin, xMax);
							yMax = Math.max(yMin, yMax);
							yMin = Math.min(yMin, yMax);
	
							var y = utils.randomBetween(yMin, yMax);
							var x = utils.randomBetween(xMin, xMax);
	
							return this.create(x, y);
						}
					}, {
						key: "add",
	
						/**
	      * add - Should add vectors together given a vector
	      * @memberOf Vector
	      * @param {Vector} v2 A given vector to add.
	      * @return {Vector} A vector with cooridnates, or multiple vectors.
	      */
						value: function add(v2) {
							return this.create(this.get("x") + v2.get("x"), this.get("y") + v2.get("y"));
						}
					}, {
						key: "subtract",
	
						/**
	      * subtract - should subtract the given vector with its own vector.
	      * @memberOf Vector
	      * @param  {Vector} v2 A vector that contains state.
	      * @return {Vector} A vector that contains a reduced state.
	      * @example {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
	      */
						value: function subtract(v2) {
							return this.create(this.get("x") - v2.get("x"), this.get("y") - v2.get("y"));
						}
					}, {
						key: "multiply",
	
						/**
	      * Mulitplying vectors together
	      * @memberOf Vector
	      * @example {x: 2, y: 2} * {x: 2, y: 2} = {x: 4, y: 4}
	      * @param  {Vector} v2 A vector that contains state.
	      * @return {Vector}    A vector that contains a reduced state.
	      */
						value: function multiply(v2) {
							return this.create(this.get("x") * v2.get("x"), this.get("y") * v2.get("y"));
						}
					}, {
						key: "divide",
	
						/**
	      * Divide vectors together.
	      * @memberOf Vector
	      * @param  {Vector} v2 A vector that contains state.
	      * @return {Vector}    A vector that contains a reduced state.
	      */
						value: function divide(v2) {
							return this.create(this.get("x") / v2.get("x"), this.get("y") / v2.get("y"));
						}
					}, {
						key: "addTo",
	
						/**
	      * Adds to current state the state of v2
	      * @memberOf Vector
	      * @param {Vector} [v2] - A vector that contains state.
	      * @return {Object} [state] - Key value pair of coordinates
	      */
						value: function addTo(v2) {
							this.state.x = this.get("x") + v2.get("x");
							this.state.y = this.get("y") + v2.get("y");
							return this;
						}
					}, {
						key: "subtractFrom",
	
						/**
	      * Subtracts from current state the state of v2
	      * @memberOf Vector
	      * @param {Vector} [v2] - A vector that contains state.
	      * @return {Object} [state] - Key value pair of coordinates
	      */
						value: function subtractFrom(v2) {
							this.state.x = this.get("x") - v2.get("x");
							this.state.y = this.get("y") - v2.get("y");
							return this;
						}
					}, {
						key: "multiplyBy",
	
						/**
	      * mulitplies by current state the state of v2
	      * @memberOf Vector
	      * @param {Vector} [v2] - A vector that contains state.
	      * @return {Object} [state] - Key value pair of coordinates
	      */
						value: function multiplyBy(v2) {
							this.state.x = this.get("x") * v2.get("x");
							this.state.y = this.get("y") * v2.get("y");
							return this;
						}
					}, {
						key: "divideBy",
	
						/**
	      * Divides by current state the state of v2
	      * @memberOf Vector
	      * @param {Vector} [v2] - A vector that contains state.
	      * @return {Object} [state] - Key value pair of coordinates
	      */
						value: function divideBy(v2) {
							this.state.x = this.get("x") / v2.get("x");
							this.state.y = this.get("y") / v2.get("y");
	
							return this;
						}
					}, {
						key: "rotateBy",
	
						/**
	      * @memberOf Vector
	      * @param  {Number} angle A number of radians to rotate clockwise by.
	      * @return {Vector}
	     */
						value: function rotateBy(angle) {
							var cos = Math.cos(angle);
							var sin = Math.sin(angle);
	
							var x = this.state.x * cos - this.state.y * sin;
							var y = this.state.y * cos + this.state.x * sin;
	
							this.state.x = x;
							this.state.y = y;
	
							return this;
						}
					}], [{
						key: "distanceBetween",
	
						/**
	      * v1
	      * @param {Vector} v1 Vector
	      * @param {Vector} v2 Vector
	      * @return {number}
	      */
						value: function distanceBetween(v1, v2) {
							var dVec = v1.subtract(v2);
							return Math.hypot(dVec.get("x"), dVec.get("y"));
						}
	
						/**
	      * @description Given twos vectors see if they intersect.
	      * @memberOf Utils
	      * @param  {Vector} vec0
	      * @param  {Vector} vec1
	      * @return {Boolean}
	      */
	
					}, {
						key: "vectorIntersect",
						value: function vectorIntersect(vec0, vec1) {
							var x0 = vec0.get("x");
							var y0 = vec0.get("y");
							var x1 = vec1.get("x");
							var y1 = vec1.get("y");
							return utils.rangeIntersect(x0, y0, x1, y1);
						}
					}]);
	
					return Vector;
				}();
	
				;
	
				module.exports = Vector;
	
				/***/
			},
			/* 3 */
			/***/function (module, exports) {
	
				"use strict";
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				//      
	
				/* eslint max-len: 0 */
	
				/**
	    * This module is composed of small function that
	    * should be used when needed. Most functions are pure
	    * and only return values. For more info read the docs.
	    */
	
				/**
	    * normalize - Takes a max and min value and returns
	    * a floating point number, that when multiplied
	    * by one hundred represents a precentage of the range
	    * between max and min.
	    *
	    * @memberOf Utils
	    * @param  {Int} val - The value that lies in the range.
	    * @param  {Int} min - The maxium value in the range.
	    * @param  {Int} max - The minimum value in the range.
	    * @return {Int} Int - The value represented in that range.
	    */
				function normalize(val, min, max) {
					return (val - min) / (max - min);
				};
	
				/**
	    * lerp - linear interpolation takes a range and a given normalized value
	    * and returns a value that represents that normalized value in that range.
	    * @memberOf Utils
	    * @param  {Interger} val
	    * @param  {Interger} min
	    * @param  {Interger} max
	    * @return {Interger}
	    */
				function lerp(val, min, max) {
					return (max - min) * val + min;
				};
	
				/**
	    * map - Given 2 set of values map them to another set.
	    * @memberOf Utils
	    * @param  {number} value
	    * @param  {number} srcMin
	    * @param  {number} srcMax
	    * @param  {number} destMin
	    * @param  {number} destMax
	    * @return {number}
	    */
				function map(value, srcMin, srcMax, destMin, destMax) {
					srcMax = Math.max(srcMax, srcMin);
					srcMin = Math.min(srcMax, srcMin);
					destMin = Math.min(destMin, destMax);
					destMax = Math.max(destMin, destMax);
					return lerp(normalize(value, srcMin, srcMax), destMin, destMax);
				};
	
				/**
	    * @description Takes a value and returns a precentage.
	    *              you can pass arbitrary large numbers in but thats not
	    *              the intended purpose of this function.
	    * @param  {Float} val 	A value.
	    * @memberOf Utils
	    * @return {Percent}    A value.
	    */
				function percent(val) {
					return val * 100;
				};
	
				/**
	    * @description Given a number and a range return the
	    *              value between that range or the max number or min number.
	    * @memberOf Utils
	    * @param  {Number} value
	    * @param  {Number} min
	    * @param  {Number} max
	    * @return {Number}
	    */
				function clamp(value, min, max) {
					return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
				};
	
				/**
	    * @memberOf  Utils
	    * @description Given two numbers return a random number between the two.
	    * @param  {Integer} x
	    * @param  {Integer} y
	    * @return {Integer}
	    */
				function randomBetween(x, y) {
					var min = Math.min(x, y);
					var max = Math.max(x, y);
					return Math.floor(Math.random() * (max - min)) + min;
				};
	
				/**
	    * @description Given two coordinates return the distance between the two.
	    * @memberOf Utils
	    * @param  {Number} x0
	    * @param  {Number} y0
	    * @param  {Number} x1
	    * @param  {Number} y1
	    * @return {Number}
	    */
				function distanceXY(x0, y0, x1, y1) {
					var dx = x0 - x1;
					var dy = y0 - y1;
					return Math.hypot(dx, dy);
				};
	
				/**
	    * @description given a number
	    * @memberOf Utils
	    * @param  {Number} val
	    * @param  {Number} min
	    * @param  {Number} max
	    * @return {Boolean}
	    */
				function inRange(val, min, max) {
					return val <= Math.max(max, min) && Math.min(max, min) <= val;
				};
	
				/**
	    * @description Given a two ranges see if both intersect each other.
	    * @memberOf Utils
	    * @param  {Number} min0
	    * @param  {Number} max0
	    * @param  {Number} min1
	    * @param  {Number} max1
	    * @return {Boolean}
	    */
				function rangeIntersect(min0, max0, min1, max1) {
					return Math.max(max0, min0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(max1, min1);
				};
	
				/**
	    * @description Given two rectange see if the intersect.
	    * @memberOf Utils
	    * @param  {Particle} r0
	    * @param  {Particle} r1
	    * @return {Boolean}
	    */
				function collisionRect(r0, r1) {
					var r0x = r0.state.x;
					var r0y = r0.state.y;
					var r1x = r1.state.x;
					var r1y = r1.state.y;
	
					var r0w = r0x + r0.state.width;
					var r0h = r0y + r0.state.height;
					var r1w = r1x + r1.state.width;
					var r1h = r1y + r1.state.height;
	
					return rangeIntersect(r0x, r0w, r1x, r1w) && rangeIntersect(r0y, r0h, r1y, r1h);
				};
	
				/**
	    * @description Given to particle with radi return wether they collide are not
	    * @memberOf Utils
	    * @param  {Particle} c1
	    * @param  {Particle} c2
	    * @return {Boolean}
	    */
				function collisionCircle(c1, c2) {
					var radi = c1.state.radius + c2.state.radius;
					var distance = distanceXY(c1.state.x, c1.state.y, c2.state.x, c2.state.y);
	
					if (distance) {
						return radi > distance;
					}
	
					return true;
				};
	
				/**
	    * @description Given a point and a circle return a boolean regarding wether they are colliding.
	    * @memberOf Utils
	    * @param  {Number}   x
	    * @param  {Number}   y
	    * @param  {Particle} circle
	    * @return {Boolean}
	    */
				function collisionCirclePoint(x, y, circle) {
					// TODO Write tests.
					var dist = distanceXY(x, y, circle.state.x, circle.state.y);
	
					return circle.state.radius > dist;
				};
	
				/**
	    * @description detect a collision between circles a vector.
	    * @memberOf Utils
	    * @param  {Vector}   vec
	    * @param  {Particle} circle
	    * @return {Boolean}
	    */
				function collisionCircleVec(vec, circle) {
					return circle.state.radius > distanceXY(vec.get("x"), vec.get("y"), circle.state.x, circle.state.y);
				};
	
				/**
	    * @description detect collision of a rectangle and a point.
	    * @memberOf Utils
	    * @param  {Number}   x
	    * @param  {Number}   y
	    * @param  {Particle} rect
	    * @return {Boolean}
	    */
				function collisionRectPoint(x, y, rect) {
					var rectX = rect.state.x;
					var rectY = rect.state.y;
					return inRange(x, rectX, rectX + rect.state.width) && inRange(y, rectY, rectY + rect.state.height);
				};
	
				/**
	    * @description Given a vector and a retangle check wether they collided.
	    * @memberOf Utils
	    * @param  {Vector}   vec
	    * @param  {Particle} rect
	    * @return {Boolean}
	    */
				function collisionRectVec(vec, rect) {
					return collisionRectPoint(vec.get("x"), vec.get("y"), rect);
				};
	
				/**
	    * @memberOf Utils
	    * @description Run a function only if the given time to allow the function execute
	    * has passed. If
	    * @param  {Function} func A function to call every delta.
	    * @param  {Number} wait The minimum time to wait.
	    * @param  {Object} options
	    * @return {Function}
	    * @see underscore
	    */
				function throttle(func, wait, options) {
					var context = void 0;
					var args = void 0;
					var result = void 0;
					var timeout = null;
					var previous = 0;
					if (!options) options = {};
					var later = function later() {
						previous = options.leading === false ? 0 : Date.now();
						timeout = null;
						result = func.apply(context, args);
						if (!timeout) context = args = null;
					};
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}
	
						var now = Date.now();
						if (!previous && options.leading === false) previous = now;
						var remaining = wait - (now - previous);
						context = this;
						args = args;
						if (remaining <= 0 || remaining > wait) {
							if (timeout) {
								clearTimeout(timeout);
								timeout = null;
							}
							previous = now;
							result = func.apply(context, args);
							if (!timeout) context = args = null;
						} else if (!timeout && options.trailing !== false) {
							timeout = setTimeout(later, remaining);
						}
						return result;
					};
				};
	
				/**
	    * @memberOf Utils
	    * @description - Setting the length of a vector.
	    * @param   {number} length
	    * @param   {number} x
	    * @param   {number} y
	    * @return  {number[]} Coordinates
	    */
				function setLength(length, x, y) {
					if (typeof x !== "number" || typeof y !== "number" || typeof length !== "number") {
						throw new Error("Please provide valid x and y values");
					}
	
					var angle = Math.atan2(y, x);
					x = Math.cos(angle) * length;
					y = Math.sin(angle) * length;
	
					return [x, y];
				};
	
				/**
	    * @memberOf Utils
	    * @description - Setting the angle of a vector.
	    * @param   {number} angle
	    * @param   {number} x
	    * @param   {number} y
	    * @return  {number[]} coordinates
	    */
				function setAngle(angle, x, y) {
					if (typeof x !== "number" || typeof y !== "number" || typeof angle !== "number") {
						throw new Error("Please provide valid x and y values");
					}
	
					var length = Math.hypot(x, y);
					x = Math.cos(angle) * length;
					y = Math.sin(angle) * length;
	
					return [x, y];
				};
	
				/**
	    * @memberOf Utils
	    * @description Coverts degrees to radians
	    * @param  {number} deg Degress
	    * @return {number}
	    */
				function degToRad(deg) {
					return deg / 180 * Math.PI;
				};
	
				/**
	    * @memberOf Utils
	    * @description Coverts radians to degress
	    * @param  {number} rad
	    * @return {number}
	    */
				function radToDeg(rad) {
					return rad * 180 / Math.PI;
				};
	
				/**
	    * @memberOf Utils
	    * @description Round to nearest place given.
	    * @param  {number} val
	    * @param  {number} places An exponent
	    * @return {number}
	    */
				function roundToPlaces(val, places) {
					var mult = Math.pow(10, places);
					return Math.round(val * mult) / mult;
				};
	
				/**
	    * @memberOf Utils
	    * @param  {number} val
	    * @param  {number} nearest
	    * @return {number}
	    */
				function roundToMultiple(val, nearest) {
					if (!nearest) {
						throw new Error("Nothing can be a multiple of " + String(nearest));
					}
					return Math.round(val / nearest) * nearest;
				};
	
				/**
	    * @memberOf Utils
	    * @param  {number} v0
	    * @param  {number} v1
	    * @param  {number} v2
	    * @param  {number} t
	    * @param  {number} pFinal
	    * @return {number}
	    */
				function quadraticBezier(v0, v1, v2, t) {
					return Math.pow(1 - t, 2) * v0 + (1 - t) * 2 * t * v1 + t * t * v2;
				};
	
				/**
	    * @memberOf Utils
	    * @param  {number} v0
	    * @param  {number} v1
	    * @param  {number} v2
	    * @param  {number} v3
	    * @param  {number} t
	    * @param  {number} pFinal
	    * @return {number}
	    */
				function cubicBezier(v0, v1, v2, v3, t) {
					return Math.pow(1 - t, 3) * v0 + Math.pow(1 - t, 2) * 3 * t * v1 + (1 - t) * 3 * t * t * v2 + t * t * t + v3;
				};
	
				/**
	    * @memberOf Utils
	    * @param  {number} p0
	    * @param  {number} p1
	    * @param  {number} p2
	    * @param  {number} t
	    * @param  {Object} pFinal
	    * @return {number}
	    */
				function quadraticBezierPoint(p0, p1, p2, t) {
					var x = quadraticBezier(p0.x, p1.x, p2.x, t);
					var y = quadraticBezier(p0.y, p1.y, p2.y, t);
					return { x: x, y: y };
				};
	
				/**
	    * @memberOf Utils
	    * @param  {number} p0
	    * @param  {number} p1
	    * @param  {number} p2
	    * @param  {number} p3
	    * @param  {number} t
	    * @param  {Object} pFinal
	    * @return {number}
	    */
				function cubicBezierPoint(p0, p1, p2, p3, t) {
					var x = cubicBezier(p0.x, p1.x, p2.x, p3.x, t);
					var y = cubicBezier(p0.y, p1.y, p2.y, p3.y, t);
					return { x: x, y: y };
				};
	
				/**
	    * @memberOf Utils
	    * @description Given points on the plane draw a curved line between
	    * all of them.
	    * @param  {{number, number}} points
	    * @param  {CanvasRenderingContext2D} ctx
	    */
				function multiCurve(points, ctx) {
					var p0 = void 0;
					var p1 = void 0;
					var midX = void 0;
					var midY = void 0;
	
					ctx.moveTo(points[0].x, points[0].y);
	
					for (var i = 1; i < points.length - 2; i++) {
						p0 = points[i];
						p1 = points[i + 1];
						midX = (p0.x + p1.x) / 2;
						midY = (p0.y + p1.y) / 2;
						ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);
					}
	
					p0 = points[points.length - 2];
					p1 = points[points.length - 1];
					ctx.quadraticCurveTo(p0.x, p0.y, p1.x, p1.y);
				};
	
				/**
	    * ease
	    * @memberOf Utils
	    * @param  {Float} ease
	    * @param  {Int} a
	    * @param  {Int} b
	    * @param  {number} threshold
	    * @return {Int}
	    */
				function ease(ease, a, b) {
					var threshold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
	
					// the delta can get extremely small and its not performant to keep
					// on rendering or calculating for animation purposes.
					if (Math.abs(b - a) < threshold) {
						return false;
					}
	
					return (b - a) * ease;
				};
	
				/**
	    * easeTo
	    * @param  {number} ease:      number        Ease factor.
	    * @param  {Object} origin:    Object        The starting point.
	    * @param  {Object} target:    Object        The ending point.
	    * @param  {Number} threshold: number        Easing threshold.
	    * @return {Object}
	    */
				function easeTo(ease, origin, target) {
					var threshold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
	
					var dx = target.x - origin.x;
					var dy = target.y - origin.y;
	
					// the delta can get extremely small and its not performant to keep
					// on rendering or calculating for animation purposes.
					if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) {
						return false;
					}
	
					origin.x += dx * ease;
					origin.y += dy * ease;
	
					return origin;
				};
	
				/**
	    * isPlainObject
	    * @param  {*}  data
	    * @return {Boolean}
	    */
				function isObject(data) {
					return (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && {}.toString.call(data) === "[object Object]";
				};
	
				/**
	    * unique return an array with no duplicate values
	    * @param  {Array} array
	    * @return {Array}
	    */
				function unique(array) {
					return array.reduce(function (x, y) {
						if (x.indexOf(y) === -1) x.push(y);
						return x;
					}, []);
				};
	
				// function colorInterpolation(float: number, colorFrom: Color, colorTo: Color) : Color {
				//   const {r1, g1, b1} = colorFrom;
				//   const {r2, g2, b2} = colorTo;
	
				//   const r = r1 + (r2 - r1) / float;
				//   const g = g1 + (g2 - g1) / float;
				//   const b = b1 + (b2 - b1) / float;
	
				//   return "someHex";
				// };
	
				/**
	    * perspective - perspective is the ratio to multiply the x and y values
	    * by to get those points represeneted in 3d space.
	    * @param  {number} focalLength: The length of the lens
	    * @param  {number} distance:    The distance from begining of the lens the the beginging of the object.
	    * @return {number}``
	    */
				function perspective(focalLength, distance) {
					return focalLength / (focalLength - distance);
				};
	
				/**
	    * @class Utils
	    * @return {Utils}
	    */
	
				module.exports = {
					normalize: normalize,
					lerp: lerp,
					map: map,
					percent: percent,
					clamp: clamp,
					randomBetween: randomBetween,
					distanceXY: distanceXY,
					inRange: inRange,
					rangeIntersect: rangeIntersect,
					collisionRect: collisionRect,
					collisionCircle: collisionCircle,
					collisionCirclePoint: collisionCirclePoint,
					collisionCircleVec: collisionCircleVec,
					collisionRectPoint: collisionRectPoint,
					collisionRectVec: collisionRectVec,
					throttle: throttle,
					setLength: setLength,
					setAngle: setAngle,
					degToRad: degToRad,
					radToDeg: radToDeg,
					roundToPlaces: roundToPlaces,
					roundToMultiple: roundToMultiple,
					quadraticBezier: quadraticBezier,
					cubicBezier: cubicBezier,
					quadraticBezierPoint: quadraticBezierPoint,
					cubicBezierPoint: cubicBezierPoint,
					multiCurve: multiCurve,
					perspective: perspective,
					ease: ease,
					easeTo: easeTo,
					isObject: isObject,
					unique: unique
				};
	
				// module.exports = Object.create(Utils);
	
				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				//      
	
				/* eslint max-len: 0 */
	
				/*
	   * The particle libary is used for physics animations.
	   * they are not extremely accurate but still represent
	   * and feel somewhat like physical movments.
	   */
	
				var extend = __webpack_require__(5);
				var clone = __webpack_require__(6);
	
				/* The default state a particle starts with It should not move. */
	
				var INITIAL_STATE = {
					x: 0,
					y: 0,
					vx: 0,
					vy: 0,
					gravity: 0,
					magnitude: 0,
					radius: 1,
					mass: 1,
					direction: Math.PI * 2,
					friction: 1,
					springs: [],
					masses: [],
					color: "#000000",
					width: 10,
					height: 10
				};
	
				/**
	    * @class Particle
	    * @param {state} state initial state to pass the constructor
	    */
	
				var Particle = function () {
	
					/**
	     * constructor
	     * @constructor
	     * @param  {state} state Particle state coordinates, etc.
	     * @return {void}
	     */
					function Particle() {
						var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clone(INITIAL_STATE);
	
						_classCallCheck(this, Particle);
	
						this.state = state || {};
					}
	
					_createClass(Particle, [{
						key: "accelerate",
	
						/**
	      * @description A change in velocity.
	      *
	      * @memberOf Particle
	      * @param  {Integer} ax
	      * @param  {Integer} ay
	      * @return {void} Acceleration vector.
	      */
						value: function accelerate() {
							var ax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
							var ay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
							this.state.vx += ax;
							this.state.vy += ay;
						}
					}, {
						key: "update",
	
						/**
	      * @description A update a position of a particle
	      * based on its gravity and fricition. Gravity is usually a acceleration
	      * vector.
	      *
	      * @memberOf Particle
	      * @param  {Integer} fric Fricition to apply.
	      * @param  {Integer} grav Gravity to apply.
	      * @return {Object} Position state.
	      */
						value: function update() {
							var fric = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.friction;
							var grav = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.gravity;
	
							// Apply springs
							this.handleSprings();
	
							// Apply gravitations
							this.handleMasses();
	
							// Apply fake fricition to velocity
							this.state.vx *= fric;
							this.state.vy *= fric;
	
							// Apply gravity to velocity
							this.accelerate(0, grav);
	
							// Update position based on acceleration
							return this.updatePos();
						}
					}, {
						key: "setSpeed",
	
						/**
	      * @description sets the internal speed of the particle given the force
	      * @memberOf Particle
	      * @param {number} speed
	      */
						value: function setSpeed(speed) {
							var angle = this.getHeading();
							this.state.vx = Math.cos(angle) * speed;
							this.state.vy = Math.sin(angle) * speed;
						}
					}, {
						key: "setHeading",
	
						/**
	      * @memberOf Particle
	      * @description sets the internal speed of the particle given the angle
	      * @param {number} angle
	      */
						value: function setHeading(angle) {
							var speed = this.getSpeed();
							this.state.vx = Math.cos(angle) * speed;
							this.state.vy = Math.sin(angle) * speed;
						}
					}, {
						key: "getSpeed",
	
						/**
	      * @description get the length of the velocity vector.
	      * @memberOf Particle
	      * @param  {number} x
	      * @param  {number} y
	      * @return {number} force of velocity vector.
	      */
						value: function getSpeed() {
							var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
							var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
							return Math.hypot(this.state.vx, this.state.vy);
						}
					}, {
						key: "getHeading",
	
						/**
	      * @description get the angle of the velocity vector.
	      * @memberOf Particle
	      * @param  {number} x
	      * @param  {number} y
	      * @return {number} angle of velocity vector.
	      */
						value: function getHeading() {
							var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
							var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
							return Math.atan2(y, x);
						}
					}, {
						key: "angleTo",
	
						/**
	      * @description Asumming we know where
	      * the other particle is on the canvas. We can use
	      * the angle formulae to figure out the angle
	      * between two particle. Using arctangent is fine.
	      * but because the corrdinate plane is filped on the
	      * Y axis we use atan2 to get the right values. Explained
	      * in API Docs.
	      *
	      * @memberOf Particle
	      * @param  {Particle} p      A particle instance.
	      * @return {Integer}  Angle   A angle.
	      */
						value: function angleTo(p) {
							var dx = p.state.x - this.state.x;
							var dy = p.state.y - this.state.y;
							return Math.atan2(dy, dx);
						}
					}, {
						key: "distanceTo",
	
						/**
	      * @description Assuming we know where both particle are on the canvas.
	      * we can use the distance formuale to figure out the distance
	      * between the two particles.
	      *
	      * @memberOf Particle
	      * @param  {Particle} p      A particle instance
	      * @return {number}  Angle   A Distance
	      */
						value: function distanceTo(p) {
							var dx = p.state.x - this.state.x;
							var dy = p.state.y - this.state.y;
							return Math.hypot(dx, dy);
						}
					}, {
						key: "addMass",
	
						/**
	      * @memberOf Particle
	      * @description Append a particle to the masses array.
	      * @param {Particle} mass
	      */
						value: function addMass(mass) {
							this.removeMass(mass);
							this.state.masses.push(mass);
						}
					}, {
						key: "removeMass",
	
						/**
	      * @memberOf Particle
	      * @description Remove a particle for the masses array.
	      * @param  {Particle} mass
	      */
						value: function removeMass(_ref) {
							var mass = _ref.state;
	
							var masses = this.state.masses;
	
							for (var i = 0; i < masses.length; i++) {
								if (mass.x === masses[i].state.x && mass.y === masses[i].state.y) {
									masses.splice(i, 1);
									break;
								}
							}
						}
					}, {
						key: "gravitateTo",
	
						/**
	      * @memberOf Particle
	      * @description Applys gravitation to the input particle.
	      * @param  {Particle} particle
	      * @return {Object}
	      */
						value: function gravitateTo(particle) {
							var dx = particle.state.x - this.state.x;
							var dy = particle.state.y - this.state.y;
	
							// Distance between the two particles
							// we dont use the distanceTo fn cause we want
							// to optimzie the code to not have to calculate
							// distSqrd again.
							var distSqrd = dx * dx + dy * dy;
							var dist = Math.sqrt(distSqrd);
	
							// Magnitude of the vector [F = G(m1)(m2)/r^2]
							var force = particle.state.mass / distSqrd;
	
							// Setting up angles of the vector
							var sin = dy / dist;
							var cos = dx / dist;
	
							// Setting vetor angle
							var ax = cos * force;
							var ay = sin * force;
	
							return this.accelerate(ax, ay);
						}
					}, {
						key: "updatePos",
	
						/**
	      * @memberOf Particle
	      * @description Apply velocity to the position.
	      * @param  {Integer} vx
	      * @param  {Integer} vy
	      * @return {void}
	      */
						value: function updatePos(vx, vy) {
							if (vx === undefined && vy === undefined) {
								this.state.x += this.state.vx;
								this.state.y += this.state.vy;
								return { x: this.state.x, y: this.state.y };
							}
	
							this.state.x += vx;
							this.state.y += vy;
							return { x: this.state.x, y: this.state.y };
						}
					}, {
						key: "addSpring",
	
						/**
	      * @description add spring to springs array
	      * @memberOf Particle
	      * @param {Object} spring A spring object
	      * @return {Object}
	      */
						value: function addSpring(spring) {
							this.removeSpring(spring);
							this.state.springs.push(spring);
							return spring;
						}
					}, {
						key: "removeSpring",
	
						/**
	      * @description remove a specific string from the springs array
	      * @memberOf Particle
	      * @param  {Object} spring
	      */
						value: function removeSpring(_ref2) {
							var p = _ref2.point.state;
	
							var springs = this.state.springs;
	
							for (var i = 0; i < springs.length; i++) {
								if (p.x === springs[i].point.state.x && p.y === springs[i].point.state.y) {
									springs.splice(i, 1);
									break;
								}
							}
						}
					}, {
						key: "springFromTo",
	
						/**
	      * @memberOf Particle
	      * @description Given two particles calculate the
	      * spring force applied to both particles.
	      * @param  {Particle} particle
	      * @param  {Integer}  springy  Given offset for the particles
	      * @param  {Integer}  offset  The spring coefficent
	      * @return {Particle[]}
	      */
						value: function springFromTo(particle) {
							var springy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
							var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	
							// Postion delta
							var dx = particle.state.x - this.state.x;
							var dy = particle.state.y - this.state.y;
	
							// Setting up magnitude and angle of the vector
							var distance = Math.hypot(dx, dy);
							var springForce = (distance - offset) * springy;
	
							// Spring acceleration vector
							var sx = dx / distance * springForce;
							var sy = dy / distance * springForce;
	
							// Accelerate with the spring vector
							this.accelerate(sx, sy);
	
							// Accelerate the opposite direction.
							particle.state.vx -= sx;
							particle.state.vy -= sy;
	
							return [this, particle];
						}
					}, {
						key: "springToPoint",
	
						/**
	      * @memberOf Particle
	      * @description Given a particle, a vector, and a spring coeffiencent accelerate
	      * the particle according to the distance its is from the point.
	      * @param  {Spring} spring A spring object.
	      * @return {Particle}
	      */
						value: function springToPoint(spring) {
							// Postion delta
							var dx = spring.point.state.x - this.state.x;
							var dy = spring.point.state.y - this.state.y;
	
							// Setting up magnitude and angle of the vector
							var distance = Math.hypot(dx, dy);
							var springForce = (distance - spring.offset) * spring["spring"];
	
							// Spring acceleration vector
							var sx = dx / distance * springForce;
							var sy = dy / distance * springForce;
	
							// Accelerate with the spring vector
							this.accelerate(sx, sy);
	
							return [this, spring];
						}
					}, {
						key: "handleSprings",
	
						/**
	      * @memberOf Particle
	      * @description Apply spring point to all internal springs.
	      * @param  {springs} springs An array of springs to spring to.
	      * @return {Object[]}
	      */
						value: function handleSprings() {
							var springs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.springs;
	
							for (var i = 0; i < springs.length; i++) {
								this.springToPoint(springs[i]);
							}
	
							return springs;
						}
					}, {
						key: "handleMasses",
	
						/**
	      * @memberOf Particle
	      * @description For each mass in the masses array apply gravitate to it.
	      * @param  {Particles[]|Object[]} masses
	      * @return {Particles[]|Object[]}
	      */
						value: function handleMasses() {
							var masses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.masses;
	
							for (var i = 0; i < masses.length; i++) {
								this.gravitateTo(masses[i]);
							}
	
							return masses;
						}
					}], [{
						key: "create",
	
						/**
	      * @description Create a particle given a direction and magnitude.
	      * @memberOf Particle
	      * @param  {Object}   state optional state values to pass to create.
	      * @return {Particle} returns a particle
	      */
						value: function create() {
							var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clone(INITIAL_STATE);
	
							// Extend the optional state on to the default state.
							state = extend(true, clone(INITIAL_STATE), state);
	
							// Create particle with the new options.
							var particle = new Particle(state);
	
							// Set length.
							particle.setSpeed(state.magnitude);
	
							// Set angle.
							particle.setHeading(state.direction);
	
							// Return new particle.
							return particle;
						}
					}, {
						key: "generate",
	
						/**
	      * @memberOf Particle
	      * @description generate a bunch of particles.
	      * @param  {Number} number    The maximum amount of generated particles needed.
	      * @param  {Object} opts      Options to pass each particle
	      * @return {Array<Particle>}
	      */
						value: function generate(number) {
							var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : clone(INITIAL_STATE);
	
							var particles = [];
	
							for (var i = 0; i < number; i++) {
								particles.push(Particle.create(opts));
							}
	
							return particles;
						}
					}]);
	
					return Particle;
				}();
	
				;
	
				module.exports = Particle;
	
				/***/
			},
			/* 5 */
			/***/function (module, exports) {
	
				'use strict';
	
				var hasOwn = Object.prototype.hasOwnProperty;
				var toStr = Object.prototype.toString;
	
				var isArray = function isArray(arr) {
					if (typeof Array.isArray === 'function') {
						return Array.isArray(arr);
					}
	
					return toStr.call(arr) === '[object Array]';
				};
	
				var isPlainObject = function isPlainObject(obj) {
					if (!obj || toStr.call(obj) !== '[object Object]') {
						return false;
					}
	
					var hasOwnConstructor = hasOwn.call(obj, 'constructor');
					var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
					// Not own constructor property must be Object
					if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
						return false;
					}
	
					// Own properties are enumerated firstly, so to speed up,
					// if last one is own, then all properties are own.
					var key;
					for (key in obj) {/**/}
	
					return typeof key === 'undefined' || hasOwn.call(obj, key);
				};
	
				module.exports = function extend() {
					var options,
					    name,
					    src,
					    copy,
					    copyIsArray,
					    clone,
					    target = arguments[0],
					    i = 1,
					    length = arguments.length,
					    deep = false;
	
					// Handle a deep copy situation
					if (typeof target === 'boolean') {
						deep = target;
						target = arguments[1] || {};
						// skip the boolean and the target
						i = 2;
					} else if ((typeof target === 'undefined' ? 'undefined' : _typeof2(target)) !== 'object' && typeof target !== 'function' || target == null) {
						target = {};
					}
	
					for (; i < length; ++i) {
						options = arguments[i];
						// Only deal with non-null/undefined values
						if (options != null) {
							// Extend the base object
							for (name in options) {
								src = target[name];
								copy = options[name];
	
								// Prevent never-ending loop
								if (target !== copy) {
									// Recurse if we're merging plain objects or arrays
									if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
										if (copyIsArray) {
											copyIsArray = false;
											clone = src && isArray(src) ? src : [];
										} else {
											clone = src && isPlainObject(src) ? src : {};
										}
	
										// Never move original objects, clone them
										target[name] = extend(deep, clone, copy);
	
										// Don't bring in undefined values
									} else if (typeof copy !== 'undefined') {
										target[name] = copy;
									}
								}
							}
						}
					}
	
					// Return the modified object
					return target;
				};
	
				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseClone = __webpack_require__(7);
	
				/** Used to compose bitmasks for cloning. */
				var CLONE_DEEP_FLAG = 1,
				    CLONE_SYMBOLS_FLAG = 4;
	
				/**
	    * This method is like `_.clone` except that it recursively clones `value`.
	    *
	    * @static
	    * @memberOf _
	    * @since 1.0.0
	    * @category Lang
	    * @param {*} value The value to recursively clone.
	    * @returns {*} Returns the deep cloned value.
	    * @see _.clone
	    * @example
	    *
	    * var objects = [{ 'a': 1 }, { 'b': 2 }];
	    *
	    * var deep = _.cloneDeep(objects);
	    * console.log(deep[0] === objects[0]);
	    * // => false
	    */
				function cloneDeep(value) {
					return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
				}
	
				module.exports = cloneDeep;
	
				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {
	
				var Stack = __webpack_require__(8),
				    arrayEach = __webpack_require__(52),
				    assignValue = __webpack_require__(53),
				    baseAssign = __webpack_require__(56),
				    baseAssignIn = __webpack_require__(79),
				    cloneBuffer = __webpack_require__(83),
				    copyArray = __webpack_require__(84),
				    copySymbols = __webpack_require__(85),
				    copySymbolsIn = __webpack_require__(89),
				    getAllKeys = __webpack_require__(93),
				    getAllKeysIn = __webpack_require__(95),
				    getTag = __webpack_require__(96),
				    initCloneArray = __webpack_require__(101),
				    initCloneByTag = __webpack_require__(102),
				    initCloneObject = __webpack_require__(116),
				    isArray = __webpack_require__(64),
				    isBuffer = __webpack_require__(65),
				    isObject = __webpack_require__(32),
				    keys = __webpack_require__(58);
	
				/** Used to compose bitmasks for cloning. */
				var CLONE_DEEP_FLAG = 1,
				    CLONE_FLAT_FLAG = 2,
				    CLONE_SYMBOLS_FLAG = 4;
	
				/** `Object#toString` result references. */
				var argsTag = '[object Arguments]',
				    arrayTag = '[object Array]',
				    boolTag = '[object Boolean]',
				    dateTag = '[object Date]',
				    errorTag = '[object Error]',
				    funcTag = '[object Function]',
				    genTag = '[object GeneratorFunction]',
				    mapTag = '[object Map]',
				    numberTag = '[object Number]',
				    objectTag = '[object Object]',
				    regexpTag = '[object RegExp]',
				    setTag = '[object Set]',
				    stringTag = '[object String]',
				    symbolTag = '[object Symbol]',
				    weakMapTag = '[object WeakMap]';
	
				var arrayBufferTag = '[object ArrayBuffer]',
				    dataViewTag = '[object DataView]',
				    float32Tag = '[object Float32Array]',
				    float64Tag = '[object Float64Array]',
				    int8Tag = '[object Int8Array]',
				    int16Tag = '[object Int16Array]',
				    int32Tag = '[object Int32Array]',
				    uint8Tag = '[object Uint8Array]',
				    uint8ClampedTag = '[object Uint8ClampedArray]',
				    uint16Tag = '[object Uint16Array]',
				    uint32Tag = '[object Uint32Array]';
	
				/** Used to identify `toStringTag` values supported by `_.clone`. */
				var cloneableTags = {};
				cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
				cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
	
				/**
	    * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	    * traversed objects.
	    *
	    * @private
	    * @param {*} value The value to clone.
	    * @param {boolean} bitmask The bitmask flags.
	    *  1 - Deep clone
	    *  2 - Flatten inherited properties
	    *  4 - Clone symbols
	    * @param {Function} [customizer] The function to customize cloning.
	    * @param {string} [key] The key of `value`.
	    * @param {Object} [object] The parent object of `value`.
	    * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	    * @returns {*} Returns the cloned value.
	    */
				function baseClone(value, bitmask, customizer, key, object, stack) {
					var result,
					    isDeep = bitmask & CLONE_DEEP_FLAG,
					    isFlat = bitmask & CLONE_FLAT_FLAG,
					    isFull = bitmask & CLONE_SYMBOLS_FLAG;
	
					if (customizer) {
						result = object ? customizer(value, key, object, stack) : customizer(value);
					}
					if (result !== undefined) {
						return result;
					}
					if (!isObject(value)) {
						return value;
					}
					var isArr = isArray(value);
					if (isArr) {
						result = initCloneArray(value);
						if (!isDeep) {
							return copyArray(value, result);
						}
					} else {
						var tag = getTag(value),
						    isFunc = tag == funcTag || tag == genTag;
	
						if (isBuffer(value)) {
							return cloneBuffer(value, isDeep);
						}
						if (tag == objectTag || tag == argsTag || isFunc && !object) {
							result = isFlat || isFunc ? {} : initCloneObject(value);
							if (!isDeep) {
								return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
							}
						} else {
							if (!cloneableTags[tag]) {
								return object ? value : {};
							}
							result = initCloneByTag(value, tag, baseClone, isDeep);
						}
					}
					// Check for circular references and return its corresponding clone.
					stack || (stack = new Stack());
					var stacked = stack.get(value);
					if (stacked) {
						return stacked;
					}
					stack.set(value, result);
	
					var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
	
					var props = isArr ? undefined : keysFunc(value);
					arrayEach(props || value, function (subValue, key) {
						if (props) {
							key = subValue;
							subValue = value[key];
						}
						// Recursively populate clone (susceptible to call stack limits).
						assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
					});
					return result;
				}
	
				module.exports = baseClone;
	
				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {
	
				var ListCache = __webpack_require__(9),
				    stackClear = __webpack_require__(17),
				    stackDelete = __webpack_require__(18),
				    stackGet = __webpack_require__(19),
				    stackHas = __webpack_require__(20),
				    stackSet = __webpack_require__(21);
	
				/**
	    * Creates a stack cache object to store key-value pairs.
	    *
	    * @private
	    * @constructor
	    * @param {Array} [entries] The key-value pairs to cache.
	    */
				function Stack(entries) {
					var data = this.__data__ = new ListCache(entries);
					this.size = data.size;
				}
	
				// Add methods to `Stack`.
				Stack.prototype.clear = stackClear;
				Stack.prototype['delete'] = stackDelete;
				Stack.prototype.get = stackGet;
				Stack.prototype.has = stackHas;
				Stack.prototype.set = stackSet;
	
				module.exports = Stack;
	
				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {
	
				var listCacheClear = __webpack_require__(10),
				    listCacheDelete = __webpack_require__(11),
				    listCacheGet = __webpack_require__(14),
				    listCacheHas = __webpack_require__(15),
				    listCacheSet = __webpack_require__(16);
	
				/**
	    * Creates an list cache object.
	    *
	    * @private
	    * @constructor
	    * @param {Array} [entries] The key-value pairs to cache.
	    */
				function ListCache(entries) {
					var index = -1,
					    length = entries == null ? 0 : entries.length;
	
					this.clear();
					while (++index < length) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}
	
				// Add methods to `ListCache`.
				ListCache.prototype.clear = listCacheClear;
				ListCache.prototype['delete'] = listCacheDelete;
				ListCache.prototype.get = listCacheGet;
				ListCache.prototype.has = listCacheHas;
				ListCache.prototype.set = listCacheSet;
	
				module.exports = ListCache;
	
				/***/
			},
			/* 10 */
			/***/function (module, exports) {
	
				/**
	    * Removes all key-value entries from the list cache.
	    *
	    * @private
	    * @name clear
	    * @memberOf ListCache
	    */
				function listCacheClear() {
					this.__data__ = [];
					this.size = 0;
				}
	
				module.exports = listCacheClear;
	
				/***/
			},
			/* 11 */
			/***/function (module, exports, __webpack_require__) {
	
				var assocIndexOf = __webpack_require__(12);
	
				/** Used for built-in method references. */
				var arrayProto = Array.prototype;
	
				/** Built-in value references. */
				var splice = arrayProto.splice;
	
				/**
	    * Removes `key` and its value from the list cache.
	    *
	    * @private
	    * @name delete
	    * @memberOf ListCache
	    * @param {string} key The key of the value to remove.
	    * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	    */
				function listCacheDelete(key) {
					var data = this.__data__,
					    index = assocIndexOf(data, key);
	
					if (index < 0) {
						return false;
					}
					var lastIndex = data.length - 1;
					if (index == lastIndex) {
						data.pop();
					} else {
						splice.call(data, index, 1);
					}
					--this.size;
					return true;
				}
	
				module.exports = listCacheDelete;
	
				/***/
			},
			/* 12 */
			/***/function (module, exports, __webpack_require__) {
	
				var eq = __webpack_require__(13);
	
				/**
	    * Gets the index at which the `key` is found in `array` of key-value pairs.
	    *
	    * @private
	    * @param {Array} array The array to inspect.
	    * @param {*} key The key to search for.
	    * @returns {number} Returns the index of the matched value, else `-1`.
	    */
				function assocIndexOf(array, key) {
					var length = array.length;
					while (length--) {
						if (eq(array[length][0], key)) {
							return length;
						}
					}
					return -1;
				}
	
				module.exports = assocIndexOf;
	
				/***/
			},
			/* 13 */
			/***/function (module, exports) {
	
				/**
	    * Performs a
	    * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	    * comparison between two values to determine if they are equivalent.
	    *
	    * @static
	    * @memberOf _
	    * @since 4.0.0
	    * @category Lang
	    * @param {*} value The value to compare.
	    * @param {*} other The other value to compare.
	    * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	    * @example
	    *
	    * var object = { 'a': 1 };
	    * var other = { 'a': 1 };
	    *
	    * _.eq(object, object);
	    * // => true
	    *
	    * _.eq(object, other);
	    * // => false
	    *
	    * _.eq('a', 'a');
	    * // => true
	    *
	    * _.eq('a', Object('a'));
	    * // => false
	    *
	    * _.eq(NaN, NaN);
	    * // => true
	    */
				function eq(value, other) {
					return value === other || value !== value && other !== other;
				}
	
				module.exports = eq;
	
				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {
	
				var assocIndexOf = __webpack_require__(12);
	
				/**
	    * Gets the list cache value for `key`.
	    *
	    * @private
	    * @name get
	    * @memberOf ListCache
	    * @param {string} key The key of the value to get.
	    * @returns {*} Returns the entry value.
	    */
				function listCacheGet(key) {
					var data = this.__data__,
					    index = assocIndexOf(data, key);
	
					return index < 0 ? undefined : data[index][1];
				}
	
				module.exports = listCacheGet;
	
				/***/
			},
			/* 15 */
			/***/function (module, exports, __webpack_require__) {
	
				var assocIndexOf = __webpack_require__(12);
	
				/**
	    * Checks if a list cache value for `key` exists.
	    *
	    * @private
	    * @name has
	    * @memberOf ListCache
	    * @param {string} key The key of the entry to check.
	    * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	    */
				function listCacheHas(key) {
					return assocIndexOf(this.__data__, key) > -1;
				}
	
				module.exports = listCacheHas;
	
				/***/
			},
			/* 16 */
			/***/function (module, exports, __webpack_require__) {
	
				var assocIndexOf = __webpack_require__(12);
	
				/**
	    * Sets the list cache `key` to `value`.
	    *
	    * @private
	    * @name set
	    * @memberOf ListCache
	    * @param {string} key The key of the value to set.
	    * @param {*} value The value to set.
	    * @returns {Object} Returns the list cache instance.
	    */
				function listCacheSet(key, value) {
					var data = this.__data__,
					    index = assocIndexOf(data, key);
	
					if (index < 0) {
						++this.size;
						data.push([key, value]);
					} else {
						data[index][1] = value;
					}
					return this;
				}
	
				module.exports = listCacheSet;
	
				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {
	
				var ListCache = __webpack_require__(9);
	
				/**
	    * Removes all key-value entries from the stack.
	    *
	    * @private
	    * @name clear
	    * @memberOf Stack
	    */
				function stackClear() {
					this.__data__ = new ListCache();
					this.size = 0;
				}
	
				module.exports = stackClear;
	
				/***/
			},
			/* 18 */
			/***/function (module, exports) {
	
				/**
	    * Removes `key` and its value from the stack.
	    *
	    * @private
	    * @name delete
	    * @memberOf Stack
	    * @param {string} key The key of the value to remove.
	    * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	    */
				function stackDelete(key) {
					var data = this.__data__,
					    result = data['delete'](key);
	
					this.size = data.size;
					return result;
				}
	
				module.exports = stackDelete;
	
				/***/
			},
			/* 19 */
			/***/function (module, exports) {
	
				/**
	    * Gets the stack value for `key`.
	    *
	    * @private
	    * @name get
	    * @memberOf Stack
	    * @param {string} key The key of the value to get.
	    * @returns {*} Returns the entry value.
	    */
				function stackGet(key) {
					return this.__data__.get(key);
				}
	
				module.exports = stackGet;
	
				/***/
			},
			/* 20 */
			/***/function (module, exports) {
	
				/**
	    * Checks if a stack value for `key` exists.
	    *
	    * @private
	    * @name has
	    * @memberOf Stack
	    * @param {string} key The key of the entry to check.
	    * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	    */
				function stackHas(key) {
					return this.__data__.has(key);
				}
	
				module.exports = stackHas;
	
				/***/
			},
			/* 21 */
			/***/function (module, exports, __webpack_require__) {
	
				var ListCache = __webpack_require__(9),
				    Map = __webpack_require__(22),
				    MapCache = __webpack_require__(37);
	
				/** Used as the size to enable large array optimizations. */
				var LARGE_ARRAY_SIZE = 200;
	
				/**
	    * Sets the stack `key` to `value`.
	    *
	    * @private
	    * @name set
	    * @memberOf Stack
	    * @param {string} key The key of the value to set.
	    * @param {*} value The value to set.
	    * @returns {Object} Returns the stack cache instance.
	    */
				function stackSet(key, value) {
					var data = this.__data__;
					if (data instanceof ListCache) {
						var pairs = data.__data__;
						if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
							pairs.push([key, value]);
							this.size = ++data.size;
							return this;
						}
						data = this.__data__ = new MapCache(pairs);
					}
					data.set(key, value);
					this.size = data.size;
					return this;
				}
	
				module.exports = stackSet;
	
				/***/
			},
			/* 22 */
			/***/function (module, exports, __webpack_require__) {
	
				var getNative = __webpack_require__(23),
				    root = __webpack_require__(28);
	
				/* Built-in method references that are verified to be native. */
				var Map = getNative(root, 'Map');
	
				module.exports = Map;
	
				/***/
			},
			/* 23 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseIsNative = __webpack_require__(24),
				    getValue = __webpack_require__(36);
	
				/**
	    * Gets the native function at `key` of `object`.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @param {string} key The key of the method to get.
	    * @returns {*} Returns the function if it's native, else `undefined`.
	    */
				function getNative(object, key) {
					var value = getValue(object, key);
					return baseIsNative(value) ? value : undefined;
				}
	
				module.exports = getNative;
	
				/***/
			},
			/* 24 */
			/***/function (module, exports, __webpack_require__) {
	
				var isFunction = __webpack_require__(25),
				    isMasked = __webpack_require__(33),
				    isObject = __webpack_require__(32),
				    toSource = __webpack_require__(35);
	
				/**
	    * Used to match `RegExp`
	    * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	    */
				var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
				/** Used to detect host constructors (Safari). */
				var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
				/** Used for built-in method references. */
				var funcProto = Function.prototype,
				    objectProto = Object.prototype;
	
				/** Used to resolve the decompiled source of functions. */
				var funcToString = funcProto.toString;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/** Used to detect if a method is native. */
				var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	
				/**
	    * The base implementation of `_.isNative` without bad shim checks.
	    *
	    * @private
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is a native function,
	    *  else `false`.
	    */
				function baseIsNative(value) {
					if (!isObject(value) || isMasked(value)) {
						return false;
					}
					var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
					return pattern.test(toSource(value));
				}
	
				module.exports = baseIsNative;
	
				/***/
			},
			/* 25 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseGetTag = __webpack_require__(26),
				    isObject = __webpack_require__(32);
	
				/** `Object#toString` result references. */
				var asyncTag = '[object AsyncFunction]',
				    funcTag = '[object Function]',
				    genTag = '[object GeneratorFunction]',
				    proxyTag = '[object Proxy]';
	
				/**
	    * Checks if `value` is classified as a `Function` object.
	    *
	    * @static
	    * @memberOf _
	    * @since 0.1.0
	    * @category Lang
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	    * @example
	    *
	    * _.isFunction(_);
	    * // => true
	    *
	    * _.isFunction(/abc/);
	    * // => false
	    */
				function isFunction(value) {
					if (!isObject(value)) {
						return false;
					}
					// The use of `Object#toString` avoids issues with the `typeof` operator
					// in Safari 9 which returns 'object' for typed arrays and other constructors.
					var tag = baseGetTag(value);
					return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
				}
	
				module.exports = isFunction;
	
				/***/
			},
			/* 26 */
			/***/function (module, exports, __webpack_require__) {
	
				var _Symbol = __webpack_require__(27),
				    getRawTag = __webpack_require__(30),
				    objectToString = __webpack_require__(31);
	
				/** `Object#toString` result references. */
				var nullTag = '[object Null]',
				    undefinedTag = '[object Undefined]';
	
				/** Built-in value references. */
				var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
	
				/**
	    * The base implementation of `getTag` without fallbacks for buggy environments.
	    *
	    * @private
	    * @param {*} value The value to query.
	    * @returns {string} Returns the `toStringTag`.
	    */
				function baseGetTag(value) {
					if (value == null) {
						return value === undefined ? undefinedTag : nullTag;
					}
					return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
				}
	
				module.exports = baseGetTag;
	
				/***/
			},
			/* 27 */
			/***/function (module, exports, __webpack_require__) {
	
				var root = __webpack_require__(28);
	
				/** Built-in value references. */
				var _Symbol2 = root.Symbol;
	
				module.exports = _Symbol2;
	
				/***/
			},
			/* 28 */
			/***/function (module, exports, __webpack_require__) {
	
				var freeGlobal = __webpack_require__(29);
	
				/** Detect free variable `self`. */
				var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof2(self)) == 'object' && self && self.Object === Object && self;
	
				/** Used as a reference to the global object. */
				var root = freeGlobal || freeSelf || Function('return this')();
	
				module.exports = root;
	
				/***/
			},
			/* 29 */
			/***/function (module, exports) {
	
				/* WEBPACK VAR INJECTION */(function (global) {
					/** Detect free variable `global` from Node.js. */
					var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof2(global)) == 'object' && global && global.Object === Object && global;
	
					module.exports = freeGlobal;
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, function () {
					return this;
				}());
	
				/***/
			},
			/* 30 */
			/***/function (module, exports, __webpack_require__) {
	
				var _Symbol3 = __webpack_require__(27);
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/**
	    * Used to resolve the
	    * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	    * of values.
	    */
				var nativeObjectToString = objectProto.toString;
	
				/** Built-in value references. */
				var symToStringTag = _Symbol3 ? _Symbol3.toStringTag : undefined;
	
				/**
	    * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	    *
	    * @private
	    * @param {*} value The value to query.
	    * @returns {string} Returns the raw `toStringTag`.
	    */
				function getRawTag(value) {
					var isOwn = hasOwnProperty.call(value, symToStringTag),
					    tag = value[symToStringTag];
	
					try {
						value[symToStringTag] = undefined;
						var unmasked = true;
					} catch (e) {}
	
					var result = nativeObjectToString.call(value);
					if (unmasked) {
						if (isOwn) {
							value[symToStringTag] = tag;
						} else {
							delete value[symToStringTag];
						}
					}
					return result;
				}
	
				module.exports = getRawTag;
	
				/***/
			},
			/* 31 */
			/***/function (module, exports) {
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/**
	    * Used to resolve the
	    * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	    * of values.
	    */
				var nativeObjectToString = objectProto.toString;
	
				/**
	    * Converts `value` to a string using `Object.prototype.toString`.
	    *
	    * @private
	    * @param {*} value The value to convert.
	    * @returns {string} Returns the converted string.
	    */
				function objectToString(value) {
					return nativeObjectToString.call(value);
				}
	
				module.exports = objectToString;
	
				/***/
			},
			/* 32 */
			/***/function (module, exports) {
	
				/**
	    * Checks if `value` is the
	    * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	    * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	    *
	    * @static
	    * @memberOf _
	    * @since 0.1.0
	    * @category Lang
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	    * @example
	    *
	    * _.isObject({});
	    * // => true
	    *
	    * _.isObject([1, 2, 3]);
	    * // => true
	    *
	    * _.isObject(_.noop);
	    * // => true
	    *
	    * _.isObject(null);
	    * // => false
	    */
				function isObject(value) {
					var type = typeof value === 'undefined' ? 'undefined' : _typeof2(value);
					return value != null && (type == 'object' || type == 'function');
				}
	
				module.exports = isObject;
	
				/***/
			},
			/* 33 */
			/***/function (module, exports, __webpack_require__) {
	
				var coreJsData = __webpack_require__(34);
	
				/** Used to detect methods masquerading as native. */
				var maskSrcKey = function () {
					var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
					return uid ? 'Symbol(src)_1.' + uid : '';
				}();
	
				/**
	    * Checks if `func` has its source masked.
	    *
	    * @private
	    * @param {Function} func The function to check.
	    * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	    */
				function isMasked(func) {
					return !!maskSrcKey && maskSrcKey in func;
				}
	
				module.exports = isMasked;
	
				/***/
			},
			/* 34 */
			/***/function (module, exports, __webpack_require__) {
	
				var root = __webpack_require__(28);
	
				/** Used to detect overreaching core-js shims. */
				var coreJsData = root['__core-js_shared__'];
	
				module.exports = coreJsData;
	
				/***/
			},
			/* 35 */
			/***/function (module, exports) {
	
				/** Used for built-in method references. */
				var funcProto = Function.prototype;
	
				/** Used to resolve the decompiled source of functions. */
				var funcToString = funcProto.toString;
	
				/**
	    * Converts `func` to its source code.
	    *
	    * @private
	    * @param {Function} func The function to convert.
	    * @returns {string} Returns the source code.
	    */
				function toSource(func) {
					if (func != null) {
						try {
							return funcToString.call(func);
						} catch (e) {}
						try {
							return func + '';
						} catch (e) {}
					}
					return '';
				}
	
				module.exports = toSource;
	
				/***/
			},
			/* 36 */
			/***/function (module, exports) {
	
				/**
	    * Gets the value at `key` of `object`.
	    *
	    * @private
	    * @param {Object} [object] The object to query.
	    * @param {string} key The key of the property to get.
	    * @returns {*} Returns the property value.
	    */
				function getValue(object, key) {
					return object == null ? undefined : object[key];
				}
	
				module.exports = getValue;
	
				/***/
			},
			/* 37 */
			/***/function (module, exports, __webpack_require__) {
	
				var mapCacheClear = __webpack_require__(38),
				    mapCacheDelete = __webpack_require__(46),
				    mapCacheGet = __webpack_require__(49),
				    mapCacheHas = __webpack_require__(50),
				    mapCacheSet = __webpack_require__(51);
	
				/**
	    * Creates a map cache object to store key-value pairs.
	    *
	    * @private
	    * @constructor
	    * @param {Array} [entries] The key-value pairs to cache.
	    */
				function MapCache(entries) {
					var index = -1,
					    length = entries == null ? 0 : entries.length;
	
					this.clear();
					while (++index < length) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}
	
				// Add methods to `MapCache`.
				MapCache.prototype.clear = mapCacheClear;
				MapCache.prototype['delete'] = mapCacheDelete;
				MapCache.prototype.get = mapCacheGet;
				MapCache.prototype.has = mapCacheHas;
				MapCache.prototype.set = mapCacheSet;
	
				module.exports = MapCache;
	
				/***/
			},
			/* 38 */
			/***/function (module, exports, __webpack_require__) {
	
				var Hash = __webpack_require__(39),
				    ListCache = __webpack_require__(9),
				    Map = __webpack_require__(22);
	
				/**
	    * Removes all key-value entries from the map.
	    *
	    * @private
	    * @name clear
	    * @memberOf MapCache
	    */
				function mapCacheClear() {
					this.size = 0;
					this.__data__ = {
						'hash': new Hash(),
						'map': new (Map || ListCache)(),
						'string': new Hash()
					};
				}
	
				module.exports = mapCacheClear;
	
				/***/
			},
			/* 39 */
			/***/function (module, exports, __webpack_require__) {
	
				var hashClear = __webpack_require__(40),
				    hashDelete = __webpack_require__(42),
				    hashGet = __webpack_require__(43),
				    hashHas = __webpack_require__(44),
				    hashSet = __webpack_require__(45);
	
				/**
	    * Creates a hash object.
	    *
	    * @private
	    * @constructor
	    * @param {Array} [entries] The key-value pairs to cache.
	    */
				function Hash(entries) {
					var index = -1,
					    length = entries == null ? 0 : entries.length;
	
					this.clear();
					while (++index < length) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}
	
				// Add methods to `Hash`.
				Hash.prototype.clear = hashClear;
				Hash.prototype['delete'] = hashDelete;
				Hash.prototype.get = hashGet;
				Hash.prototype.has = hashHas;
				Hash.prototype.set = hashSet;
	
				module.exports = Hash;
	
				/***/
			},
			/* 40 */
			/***/function (module, exports, __webpack_require__) {
	
				var nativeCreate = __webpack_require__(41);
	
				/**
	    * Removes all key-value entries from the hash.
	    *
	    * @private
	    * @name clear
	    * @memberOf Hash
	    */
				function hashClear() {
					this.__data__ = nativeCreate ? nativeCreate(null) : {};
					this.size = 0;
				}
	
				module.exports = hashClear;
	
				/***/
			},
			/* 41 */
			/***/function (module, exports, __webpack_require__) {
	
				var getNative = __webpack_require__(23);
	
				/* Built-in method references that are verified to be native. */
				var nativeCreate = getNative(Object, 'create');
	
				module.exports = nativeCreate;
	
				/***/
			},
			/* 42 */
			/***/function (module, exports) {
	
				/**
	    * Removes `key` and its value from the hash.
	    *
	    * @private
	    * @name delete
	    * @memberOf Hash
	    * @param {Object} hash The hash to modify.
	    * @param {string} key The key of the value to remove.
	    * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	    */
				function hashDelete(key) {
					var result = this.has(key) && delete this.__data__[key];
					this.size -= result ? 1 : 0;
					return result;
				}
	
				module.exports = hashDelete;
	
				/***/
			},
			/* 43 */
			/***/function (module, exports, __webpack_require__) {
	
				var nativeCreate = __webpack_require__(41);
	
				/** Used to stand-in for `undefined` hash values. */
				var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/**
	    * Gets the hash value for `key`.
	    *
	    * @private
	    * @name get
	    * @memberOf Hash
	    * @param {string} key The key of the value to get.
	    * @returns {*} Returns the entry value.
	    */
				function hashGet(key) {
					var data = this.__data__;
					if (nativeCreate) {
						var result = data[key];
						return result === HASH_UNDEFINED ? undefined : result;
					}
					return hasOwnProperty.call(data, key) ? data[key] : undefined;
				}
	
				module.exports = hashGet;
	
				/***/
			},
			/* 44 */
			/***/function (module, exports, __webpack_require__) {
	
				var nativeCreate = __webpack_require__(41);
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/**
	    * Checks if a hash value for `key` exists.
	    *
	    * @private
	    * @name has
	    * @memberOf Hash
	    * @param {string} key The key of the entry to check.
	    * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	    */
				function hashHas(key) {
					var data = this.__data__;
					return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
				}
	
				module.exports = hashHas;
	
				/***/
			},
			/* 45 */
			/***/function (module, exports, __webpack_require__) {
	
				var nativeCreate = __webpack_require__(41);
	
				/** Used to stand-in for `undefined` hash values. */
				var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
				/**
	    * Sets the hash `key` to `value`.
	    *
	    * @private
	    * @name set
	    * @memberOf Hash
	    * @param {string} key The key of the value to set.
	    * @param {*} value The value to set.
	    * @returns {Object} Returns the hash instance.
	    */
				function hashSet(key, value) {
					var data = this.__data__;
					this.size += this.has(key) ? 0 : 1;
					data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
					return this;
				}
	
				module.exports = hashSet;
	
				/***/
			},
			/* 46 */
			/***/function (module, exports, __webpack_require__) {
	
				var getMapData = __webpack_require__(47);
	
				/**
	    * Removes `key` and its value from the map.
	    *
	    * @private
	    * @name delete
	    * @memberOf MapCache
	    * @param {string} key The key of the value to remove.
	    * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	    */
				function mapCacheDelete(key) {
					var result = getMapData(this, key)['delete'](key);
					this.size -= result ? 1 : 0;
					return result;
				}
	
				module.exports = mapCacheDelete;
	
				/***/
			},
			/* 47 */
			/***/function (module, exports, __webpack_require__) {
	
				var isKeyable = __webpack_require__(48);
	
				/**
	    * Gets the data for `map`.
	    *
	    * @private
	    * @param {Object} map The map to query.
	    * @param {string} key The reference key.
	    * @returns {*} Returns the map data.
	    */
				function getMapData(map, key) {
					var data = map.__data__;
					return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
				}
	
				module.exports = getMapData;
	
				/***/
			},
			/* 48 */
			/***/function (module, exports) {
	
				/**
	    * Checks if `value` is suitable for use as unique object key.
	    *
	    * @private
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	    */
				function isKeyable(value) {
					var type = typeof value === 'undefined' ? 'undefined' : _typeof2(value);
					return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
				}
	
				module.exports = isKeyable;
	
				/***/
			},
			/* 49 */
			/***/function (module, exports, __webpack_require__) {
	
				var getMapData = __webpack_require__(47);
	
				/**
	    * Gets the map value for `key`.
	    *
	    * @private
	    * @name get
	    * @memberOf MapCache
	    * @param {string} key The key of the value to get.
	    * @returns {*} Returns the entry value.
	    */
				function mapCacheGet(key) {
					return getMapData(this, key).get(key);
				}
	
				module.exports = mapCacheGet;
	
				/***/
			},
			/* 50 */
			/***/function (module, exports, __webpack_require__) {
	
				var getMapData = __webpack_require__(47);
	
				/**
	    * Checks if a map value for `key` exists.
	    *
	    * @private
	    * @name has
	    * @memberOf MapCache
	    * @param {string} key The key of the entry to check.
	    * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	    */
				function mapCacheHas(key) {
					return getMapData(this, key).has(key);
				}
	
				module.exports = mapCacheHas;
	
				/***/
			},
			/* 51 */
			/***/function (module, exports, __webpack_require__) {
	
				var getMapData = __webpack_require__(47);
	
				/**
	    * Sets the map `key` to `value`.
	    *
	    * @private
	    * @name set
	    * @memberOf MapCache
	    * @param {string} key The key of the value to set.
	    * @param {*} value The value to set.
	    * @returns {Object} Returns the map cache instance.
	    */
				function mapCacheSet(key, value) {
					var data = getMapData(this, key),
					    size = data.size;
	
					data.set(key, value);
					this.size += data.size == size ? 0 : 1;
					return this;
				}
	
				module.exports = mapCacheSet;
	
				/***/
			},
			/* 52 */
			/***/function (module, exports) {
	
				/**
	    * A specialized version of `_.forEach` for arrays without support for
	    * iteratee shorthands.
	    *
	    * @private
	    * @param {Array} [array] The array to iterate over.
	    * @param {Function} iteratee The function invoked per iteration.
	    * @returns {Array} Returns `array`.
	    */
				function arrayEach(array, iteratee) {
					var index = -1,
					    length = array == null ? 0 : array.length;
	
					while (++index < length) {
						if (iteratee(array[index], index, array) === false) {
							break;
						}
					}
					return array;
				}
	
				module.exports = arrayEach;
	
				/***/
			},
			/* 53 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseAssignValue = __webpack_require__(54),
				    eq = __webpack_require__(13);
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/**
	    * Assigns `value` to `key` of `object` if the existing value is not equivalent
	    * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	    * for equality comparisons.
	    *
	    * @private
	    * @param {Object} object The object to modify.
	    * @param {string} key The key of the property to assign.
	    * @param {*} value The value to assign.
	    */
				function assignValue(object, key, value) {
					var objValue = object[key];
					if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
						baseAssignValue(object, key, value);
					}
				}
	
				module.exports = assignValue;
	
				/***/
			},
			/* 54 */
			/***/function (module, exports, __webpack_require__) {
	
				var defineProperty = __webpack_require__(55);
	
				/**
	    * The base implementation of `assignValue` and `assignMergeValue` without
	    * value checks.
	    *
	    * @private
	    * @param {Object} object The object to modify.
	    * @param {string} key The key of the property to assign.
	    * @param {*} value The value to assign.
	    */
				function baseAssignValue(object, key, value) {
					if (key == '__proto__' && defineProperty) {
						defineProperty(object, key, {
							'configurable': true,
							'enumerable': true,
							'value': value,
							'writable': true
						});
					} else {
						object[key] = value;
					}
				}
	
				module.exports = baseAssignValue;
	
				/***/
			},
			/* 55 */
			/***/function (module, exports, __webpack_require__) {
	
				var getNative = __webpack_require__(23);
	
				var defineProperty = function () {
					try {
						var func = getNative(Object, 'defineProperty');
						func({}, '', {});
						return func;
					} catch (e) {}
				}();
	
				module.exports = defineProperty;
	
				/***/
			},
			/* 56 */
			/***/function (module, exports, __webpack_require__) {
	
				var copyObject = __webpack_require__(57),
				    keys = __webpack_require__(58);
	
				/**
	    * The base implementation of `_.assign` without support for multiple sources
	    * or `customizer` functions.
	    *
	    * @private
	    * @param {Object} object The destination object.
	    * @param {Object} source The source object.
	    * @returns {Object} Returns `object`.
	    */
				function baseAssign(object, source) {
					return object && copyObject(source, keys(source), object);
				}
	
				module.exports = baseAssign;
	
				/***/
			},
			/* 57 */
			/***/function (module, exports, __webpack_require__) {
	
				var assignValue = __webpack_require__(53),
				    baseAssignValue = __webpack_require__(54);
	
				/**
	    * Copies properties of `source` to `object`.
	    *
	    * @private
	    * @param {Object} source The object to copy properties from.
	    * @param {Array} props The property identifiers to copy.
	    * @param {Object} [object={}] The object to copy properties to.
	    * @param {Function} [customizer] The function to customize copied values.
	    * @returns {Object} Returns `object`.
	    */
				function copyObject(source, props, object, customizer) {
					var isNew = !object;
					object || (object = {});
	
					var index = -1,
					    length = props.length;
	
					while (++index < length) {
						var key = props[index];
	
						var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
	
						if (newValue === undefined) {
							newValue = source[key];
						}
						if (isNew) {
							baseAssignValue(object, key, newValue);
						} else {
							assignValue(object, key, newValue);
						}
					}
					return object;
				}
	
				module.exports = copyObject;
	
				/***/
			},
			/* 58 */
			/***/function (module, exports, __webpack_require__) {
	
				var arrayLikeKeys = __webpack_require__(59),
				    baseKeys = __webpack_require__(74),
				    isArrayLike = __webpack_require__(78);
	
				/**
	    * Creates an array of the own enumerable property names of `object`.
	    *
	    * **Note:** Non-object values are coerced to objects. See the
	    * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	    * for more details.
	    *
	    * @static
	    * @since 0.1.0
	    * @memberOf _
	    * @category Object
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of property names.
	    * @example
	    *
	    * function Foo() {
	    *   this.a = 1;
	    *   this.b = 2;
	    * }
	    *
	    * Foo.prototype.c = 3;
	    *
	    * _.keys(new Foo);
	    * // => ['a', 'b'] (iteration order is not guaranteed)
	    *
	    * _.keys('hi');
	    * // => ['0', '1']
	    */
				function keys(object) {
					return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
				}
	
				module.exports = keys;
	
				/***/
			},
			/* 59 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseTimes = __webpack_require__(60),
				    isArguments = __webpack_require__(61),
				    isArray = __webpack_require__(64),
				    isBuffer = __webpack_require__(65),
				    isIndex = __webpack_require__(68),
				    isTypedArray = __webpack_require__(69);
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/**
	    * Creates an array of the enumerable property names of the array-like `value`.
	    *
	    * @private
	    * @param {*} value The value to query.
	    * @param {boolean} inherited Specify returning inherited property names.
	    * @returns {Array} Returns the array of property names.
	    */
				function arrayLikeKeys(value, inherited) {
					var isArr = isArray(value),
					    isArg = !isArr && isArguments(value),
					    isBuff = !isArr && !isArg && isBuffer(value),
					    isType = !isArr && !isArg && !isBuff && isTypedArray(value),
					    skipIndexes = isArr || isArg || isBuff || isType,
					    result = skipIndexes ? baseTimes(value.length, String) : [],
					    length = result.length;
	
					for (var key in value) {
						if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
						// Safari 9 has enumerable `arguments.length` in strict mode.
						key == 'length' ||
						// Node.js 0.10 has enumerable non-index properties on buffers.
						isBuff && (key == 'offset' || key == 'parent') ||
						// PhantomJS 2 has enumerable non-index properties on typed arrays.
						isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
						// Skip index properties.
						isIndex(key, length)))) {
							result.push(key);
						}
					}
					return result;
				}
	
				module.exports = arrayLikeKeys;
	
				/***/
			},
			/* 60 */
			/***/function (module, exports) {
	
				/**
	    * The base implementation of `_.times` without support for iteratee shorthands
	    * or max array length checks.
	    *
	    * @private
	    * @param {number} n The number of times to invoke `iteratee`.
	    * @param {Function} iteratee The function invoked per iteration.
	    * @returns {Array} Returns the array of results.
	    */
				function baseTimes(n, iteratee) {
					var index = -1,
					    result = Array(n);
	
					while (++index < n) {
						result[index] = iteratee(index);
					}
					return result;
				}
	
				module.exports = baseTimes;
	
				/***/
			},
			/* 61 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseIsArguments = __webpack_require__(62),
				    isObjectLike = __webpack_require__(63);
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/** Built-in value references. */
				var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
				/**
	    * Checks if `value` is likely an `arguments` object.
	    *
	    * @static
	    * @memberOf _
	    * @since 0.1.0
	    * @category Lang
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	    *  else `false`.
	    * @example
	    *
	    * _.isArguments(function() { return arguments; }());
	    * // => true
	    *
	    * _.isArguments([1, 2, 3]);
	    * // => false
	    */
				var isArguments = baseIsArguments(function () {
					return arguments;
				}()) ? baseIsArguments : function (value) {
					return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
				};
	
				module.exports = isArguments;
	
				/***/
			},
			/* 62 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseGetTag = __webpack_require__(26),
				    isObjectLike = __webpack_require__(63);
	
				/** `Object#toString` result references. */
				var argsTag = '[object Arguments]';
	
				/**
	    * The base implementation of `_.isArguments`.
	    *
	    * @private
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	    */
				function baseIsArguments(value) {
					return isObjectLike(value) && baseGetTag(value) == argsTag;
				}
	
				module.exports = baseIsArguments;
	
				/***/
			},
			/* 63 */
			/***/function (module, exports) {
	
				/**
	    * Checks if `value` is object-like. A value is object-like if it's not `null`
	    * and has a `typeof` result of "object".
	    *
	    * @static
	    * @memberOf _
	    * @since 4.0.0
	    * @category Lang
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	    * @example
	    *
	    * _.isObjectLike({});
	    * // => true
	    *
	    * _.isObjectLike([1, 2, 3]);
	    * // => true
	    *
	    * _.isObjectLike(_.noop);
	    * // => false
	    *
	    * _.isObjectLike(null);
	    * // => false
	    */
				function isObjectLike(value) {
					return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof2(value)) == 'object';
				}
	
				module.exports = isObjectLike;
	
				/***/
			},
			/* 64 */
			/***/function (module, exports) {
	
				/**
	    * Checks if `value` is classified as an `Array` object.
	    *
	    * @static
	    * @memberOf _
	    * @since 0.1.0
	    * @category Lang
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	    * @example
	    *
	    * _.isArray([1, 2, 3]);
	    * // => true
	    *
	    * _.isArray(document.body.children);
	    * // => false
	    *
	    * _.isArray('abc');
	    * // => false
	    *
	    * _.isArray(_.noop);
	    * // => false
	    */
				var isArray = Array.isArray;
	
				module.exports = isArray;
	
				/***/
			},
			/* 65 */
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (module) {
					var root = __webpack_require__(28),
					    stubFalse = __webpack_require__(67);
	
					/** Detect free variable `exports`. */
					var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) == 'object' && exports && !exports.nodeType && exports;
	
					/** Detect free variable `module`. */
					var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof2(module)) == 'object' && module && !module.nodeType && module;
	
					/** Detect the popular CommonJS extension `module.exports`. */
					var moduleExports = freeModule && freeModule.exports === freeExports;
	
					/** Built-in value references. */
					var Buffer = moduleExports ? root.Buffer : undefined;
	
					/* Built-in method references for those with the same name as other `lodash` methods. */
					var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
					/**
	     * Checks if `value` is a buffer.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	     * @example
	     *
	     * _.isBuffer(new Buffer(2));
	     * // => true
	     *
	     * _.isBuffer(new Uint8Array(2));
	     * // => false
	     */
					var isBuffer = nativeIsBuffer || stubFalse;
	
					module.exports = isBuffer;
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(66)(module));
	
				/***/
			},
			/* 66 */
			/***/function (module, exports) {
	
				module.exports = function (module) {
					if (!module.webpackPolyfill) {
						module.deprecate = function () {};
						module.paths = [];
						// module.parent = undefined by default
						module.children = [];
						module.webpackPolyfill = 1;
					}
					return module;
				};
	
				/***/
			},
			/* 67 */
			/***/function (module, exports) {
	
				/**
	    * This method returns `false`.
	    *
	    * @static
	    * @memberOf _
	    * @since 4.13.0
	    * @category Util
	    * @returns {boolean} Returns `false`.
	    * @example
	    *
	    * _.times(2, _.stubFalse);
	    * // => [false, false]
	    */
				function stubFalse() {
					return false;
				}
	
				module.exports = stubFalse;
	
				/***/
			},
			/* 68 */
			/***/function (module, exports) {
	
				/** Used as references for various `Number` constants. */
				var MAX_SAFE_INTEGER = 9007199254740991;
	
				/** Used to detect unsigned integer values. */
				var reIsUint = /^(?:0|[1-9]\d*)$/;
	
				/**
	    * Checks if `value` is a valid array-like index.
	    *
	    * @private
	    * @param {*} value The value to check.
	    * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	    * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	    */
				function isIndex(value, length) {
					length = length == null ? MAX_SAFE_INTEGER : length;
					return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
				}
	
				module.exports = isIndex;
	
				/***/
			},
			/* 69 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseIsTypedArray = __webpack_require__(70),
				    baseUnary = __webpack_require__(72),
				    nodeUtil = __webpack_require__(73);
	
				/* Node.js helper references. */
				var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
				/**
	    * Checks if `value` is classified as a typed array.
	    *
	    * @static
	    * @memberOf _
	    * @since 3.0.0
	    * @category Lang
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	    * @example
	    *
	    * _.isTypedArray(new Uint8Array);
	    * // => true
	    *
	    * _.isTypedArray([]);
	    * // => false
	    */
				var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
				module.exports = isTypedArray;
	
				/***/
			},
			/* 70 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseGetTag = __webpack_require__(26),
				    isLength = __webpack_require__(71),
				    isObjectLike = __webpack_require__(63);
	
				/** `Object#toString` result references. */
				var argsTag = '[object Arguments]',
				    arrayTag = '[object Array]',
				    boolTag = '[object Boolean]',
				    dateTag = '[object Date]',
				    errorTag = '[object Error]',
				    funcTag = '[object Function]',
				    mapTag = '[object Map]',
				    numberTag = '[object Number]',
				    objectTag = '[object Object]',
				    regexpTag = '[object RegExp]',
				    setTag = '[object Set]',
				    stringTag = '[object String]',
				    weakMapTag = '[object WeakMap]';
	
				var arrayBufferTag = '[object ArrayBuffer]',
				    dataViewTag = '[object DataView]',
				    float32Tag = '[object Float32Array]',
				    float64Tag = '[object Float64Array]',
				    int8Tag = '[object Int8Array]',
				    int16Tag = '[object Int16Array]',
				    int32Tag = '[object Int32Array]',
				    uint8Tag = '[object Uint8Array]',
				    uint8ClampedTag = '[object Uint8ClampedArray]',
				    uint16Tag = '[object Uint16Array]',
				    uint32Tag = '[object Uint32Array]';
	
				/** Used to identify `toStringTag` values of typed arrays. */
				var typedArrayTags = {};
				typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
				typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
				/**
	    * The base implementation of `_.isTypedArray` without Node.js optimizations.
	    *
	    * @private
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	    */
				function baseIsTypedArray(value) {
					return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
				}
	
				module.exports = baseIsTypedArray;
	
				/***/
			},
			/* 71 */
			/***/function (module, exports) {
	
				/** Used as references for various `Number` constants. */
				var MAX_SAFE_INTEGER = 9007199254740991;
	
				/**
	    * Checks if `value` is a valid array-like length.
	    *
	    * **Note:** This method is loosely based on
	    * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	    *
	    * @static
	    * @memberOf _
	    * @since 4.0.0
	    * @category Lang
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	    * @example
	    *
	    * _.isLength(3);
	    * // => true
	    *
	    * _.isLength(Number.MIN_VALUE);
	    * // => false
	    *
	    * _.isLength(Infinity);
	    * // => false
	    *
	    * _.isLength('3');
	    * // => false
	    */
				function isLength(value) {
					return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
				}
	
				module.exports = isLength;
	
				/***/
			},
			/* 72 */
			/***/function (module, exports) {
	
				/**
	    * The base implementation of `_.unary` without support for storing metadata.
	    *
	    * @private
	    * @param {Function} func The function to cap arguments for.
	    * @returns {Function} Returns the new capped function.
	    */
				function baseUnary(func) {
					return function (value) {
						return func(value);
					};
				}
	
				module.exports = baseUnary;
	
				/***/
			},
			/* 73 */
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (module) {
					var freeGlobal = __webpack_require__(29);
	
					/** Detect free variable `exports`. */
					var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) == 'object' && exports && !exports.nodeType && exports;
	
					/** Detect free variable `module`. */
					var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof2(module)) == 'object' && module && !module.nodeType && module;
	
					/** Detect the popular CommonJS extension `module.exports`. */
					var moduleExports = freeModule && freeModule.exports === freeExports;
	
					/** Detect free variable `process` from Node.js. */
					var freeProcess = moduleExports && freeGlobal.process;
	
					/** Used to access faster Node.js helpers. */
					var nodeUtil = function () {
						try {
							return freeProcess && freeProcess.binding && freeProcess.binding('util');
						} catch (e) {}
					}();
	
					module.exports = nodeUtil;
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(66)(module));
	
				/***/
			},
			/* 74 */
			/***/function (module, exports, __webpack_require__) {
	
				var isPrototype = __webpack_require__(75),
				    nativeKeys = __webpack_require__(76);
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/**
	    * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of property names.
	    */
				function baseKeys(object) {
					if (!isPrototype(object)) {
						return nativeKeys(object);
					}
					var result = [];
					for (var key in Object(object)) {
						if (hasOwnProperty.call(object, key) && key != 'constructor') {
							result.push(key);
						}
					}
					return result;
				}
	
				module.exports = baseKeys;
	
				/***/
			},
			/* 75 */
			/***/function (module, exports) {
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/**
	    * Checks if `value` is likely a prototype object.
	    *
	    * @private
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	    */
				function isPrototype(value) {
					var Ctor = value && value.constructor,
					    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
	
					return value === proto;
				}
	
				module.exports = isPrototype;
	
				/***/
			},
			/* 76 */
			/***/function (module, exports, __webpack_require__) {
	
				var overArg = __webpack_require__(77);
	
				/* Built-in method references for those with the same name as other `lodash` methods. */
				var nativeKeys = overArg(Object.keys, Object);
	
				module.exports = nativeKeys;
	
				/***/
			},
			/* 77 */
			/***/function (module, exports) {
	
				/**
	    * Creates a unary function that invokes `func` with its argument transformed.
	    *
	    * @private
	    * @param {Function} func The function to wrap.
	    * @param {Function} transform The argument transform.
	    * @returns {Function} Returns the new function.
	    */
				function overArg(func, transform) {
					return function (arg) {
						return func(transform(arg));
					};
				}
	
				module.exports = overArg;
	
				/***/
			},
			/* 78 */
			/***/function (module, exports, __webpack_require__) {
	
				var isFunction = __webpack_require__(25),
				    isLength = __webpack_require__(71);
	
				/**
	    * Checks if `value` is array-like. A value is considered array-like if it's
	    * not a function and has a `value.length` that's an integer greater than or
	    * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	    *
	    * @static
	    * @memberOf _
	    * @since 4.0.0
	    * @category Lang
	    * @param {*} value The value to check.
	    * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	    * @example
	    *
	    * _.isArrayLike([1, 2, 3]);
	    * // => true
	    *
	    * _.isArrayLike(document.body.children);
	    * // => true
	    *
	    * _.isArrayLike('abc');
	    * // => true
	    *
	    * _.isArrayLike(_.noop);
	    * // => false
	    */
				function isArrayLike(value) {
					return value != null && isLength(value.length) && !isFunction(value);
				}
	
				module.exports = isArrayLike;
	
				/***/
			},
			/* 79 */
			/***/function (module, exports, __webpack_require__) {
	
				var copyObject = __webpack_require__(57),
				    keysIn = __webpack_require__(80);
	
				/**
	    * The base implementation of `_.assignIn` without support for multiple sources
	    * or `customizer` functions.
	    *
	    * @private
	    * @param {Object} object The destination object.
	    * @param {Object} source The source object.
	    * @returns {Object} Returns `object`.
	    */
				function baseAssignIn(object, source) {
					return object && copyObject(source, keysIn(source), object);
				}
	
				module.exports = baseAssignIn;
	
				/***/
			},
			/* 80 */
			/***/function (module, exports, __webpack_require__) {
	
				var arrayLikeKeys = __webpack_require__(59),
				    baseKeysIn = __webpack_require__(81),
				    isArrayLike = __webpack_require__(78);
	
				/**
	    * Creates an array of the own and inherited enumerable property names of `object`.
	    *
	    * **Note:** Non-object values are coerced to objects.
	    *
	    * @static
	    * @memberOf _
	    * @since 3.0.0
	    * @category Object
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of property names.
	    * @example
	    *
	    * function Foo() {
	    *   this.a = 1;
	    *   this.b = 2;
	    * }
	    *
	    * Foo.prototype.c = 3;
	    *
	    * _.keysIn(new Foo);
	    * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	    */
				function keysIn(object) {
					return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
				}
	
				module.exports = keysIn;
	
				/***/
			},
			/* 81 */
			/***/function (module, exports, __webpack_require__) {
	
				var isObject = __webpack_require__(32),
				    isPrototype = __webpack_require__(75),
				    nativeKeysIn = __webpack_require__(82);
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/**
	    * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of property names.
	    */
				function baseKeysIn(object) {
					if (!isObject(object)) {
						return nativeKeysIn(object);
					}
					var isProto = isPrototype(object),
					    result = [];
	
					for (var key in object) {
						if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
							result.push(key);
						}
					}
					return result;
				}
	
				module.exports = baseKeysIn;
	
				/***/
			},
			/* 82 */
			/***/function (module, exports) {
	
				/**
	    * This function is like
	    * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	    * except that it includes inherited enumerable properties.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of property names.
	    */
				function nativeKeysIn(object) {
					var result = [];
					if (object != null) {
						for (var key in Object(object)) {
							result.push(key);
						}
					}
					return result;
				}
	
				module.exports = nativeKeysIn;
	
				/***/
			},
			/* 83 */
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (module) {
					var root = __webpack_require__(28);
	
					/** Detect free variable `exports`. */
					var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) == 'object' && exports && !exports.nodeType && exports;
	
					/** Detect free variable `module`. */
					var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof2(module)) == 'object' && module && !module.nodeType && module;
	
					/** Detect the popular CommonJS extension `module.exports`. */
					var moduleExports = freeModule && freeModule.exports === freeExports;
	
					/** Built-in value references. */
					var Buffer = moduleExports ? root.Buffer : undefined,
					    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	
					/**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */
					function cloneBuffer(buffer, isDeep) {
						if (isDeep) {
							return buffer.slice();
						}
						var length = buffer.length,
						    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
						buffer.copy(result);
						return result;
					}
	
					module.exports = cloneBuffer;
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(66)(module));
	
				/***/
			},
			/* 84 */
			/***/function (module, exports) {
	
				/**
	    * Copies the values of `source` to `array`.
	    *
	    * @private
	    * @param {Array} source The array to copy values from.
	    * @param {Array} [array=[]] The array to copy values to.
	    * @returns {Array} Returns `array`.
	    */
				function copyArray(source, array) {
					var index = -1,
					    length = source.length;
	
					array || (array = Array(length));
					while (++index < length) {
						array[index] = source[index];
					}
					return array;
				}
	
				module.exports = copyArray;
	
				/***/
			},
			/* 85 */
			/***/function (module, exports, __webpack_require__) {
	
				var copyObject = __webpack_require__(57),
				    getSymbols = __webpack_require__(86);
	
				/**
	    * Copies own symbols of `source` to `object`.
	    *
	    * @private
	    * @param {Object} source The object to copy symbols from.
	    * @param {Object} [object={}] The object to copy symbols to.
	    * @returns {Object} Returns `object`.
	    */
				function copySymbols(source, object) {
					return copyObject(source, getSymbols(source), object);
				}
	
				module.exports = copySymbols;
	
				/***/
			},
			/* 86 */
			/***/function (module, exports, __webpack_require__) {
	
				var arrayFilter = __webpack_require__(87),
				    stubArray = __webpack_require__(88);
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Built-in value references. */
				var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
				/* Built-in method references for those with the same name as other `lodash` methods. */
				var nativeGetSymbols = Object.getOwnPropertySymbols;
	
				/**
	    * Creates an array of the own enumerable symbols of `object`.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of symbols.
	    */
				var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
					if (object == null) {
						return [];
					}
					object = Object(object);
					return arrayFilter(nativeGetSymbols(object), function (symbol) {
						return propertyIsEnumerable.call(object, symbol);
					});
				};
	
				module.exports = getSymbols;
	
				/***/
			},
			/* 87 */
			/***/function (module, exports) {
	
				/**
	    * A specialized version of `_.filter` for arrays without support for
	    * iteratee shorthands.
	    *
	    * @private
	    * @param {Array} [array] The array to iterate over.
	    * @param {Function} predicate The function invoked per iteration.
	    * @returns {Array} Returns the new filtered array.
	    */
				function arrayFilter(array, predicate) {
					var index = -1,
					    length = array == null ? 0 : array.length,
					    resIndex = 0,
					    result = [];
	
					while (++index < length) {
						var value = array[index];
						if (predicate(value, index, array)) {
							result[resIndex++] = value;
						}
					}
					return result;
				}
	
				module.exports = arrayFilter;
	
				/***/
			},
			/* 88 */
			/***/function (module, exports) {
	
				/**
	    * This method returns a new empty array.
	    *
	    * @static
	    * @memberOf _
	    * @since 4.13.0
	    * @category Util
	    * @returns {Array} Returns the new empty array.
	    * @example
	    *
	    * var arrays = _.times(2, _.stubArray);
	    *
	    * console.log(arrays);
	    * // => [[], []]
	    *
	    * console.log(arrays[0] === arrays[1]);
	    * // => false
	    */
				function stubArray() {
					return [];
				}
	
				module.exports = stubArray;
	
				/***/
			},
			/* 89 */
			/***/function (module, exports, __webpack_require__) {
	
				var copyObject = __webpack_require__(57),
				    getSymbolsIn = __webpack_require__(90);
	
				/**
	    * Copies own and inherited symbols of `source` to `object`.
	    *
	    * @private
	    * @param {Object} source The object to copy symbols from.
	    * @param {Object} [object={}] The object to copy symbols to.
	    * @returns {Object} Returns `object`.
	    */
				function copySymbolsIn(source, object) {
					return copyObject(source, getSymbolsIn(source), object);
				}
	
				module.exports = copySymbolsIn;
	
				/***/
			},
			/* 90 */
			/***/function (module, exports, __webpack_require__) {
	
				var arrayPush = __webpack_require__(91),
				    getPrototype = __webpack_require__(92),
				    getSymbols = __webpack_require__(86),
				    stubArray = __webpack_require__(88);
	
				/* Built-in method references for those with the same name as other `lodash` methods. */
				var nativeGetSymbols = Object.getOwnPropertySymbols;
	
				/**
	    * Creates an array of the own and inherited enumerable symbols of `object`.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of symbols.
	    */
				var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
					var result = [];
					while (object) {
						arrayPush(result, getSymbols(object));
						object = getPrototype(object);
					}
					return result;
				};
	
				module.exports = getSymbolsIn;
	
				/***/
			},
			/* 91 */
			/***/function (module, exports) {
	
				/**
	    * Appends the elements of `values` to `array`.
	    *
	    * @private
	    * @param {Array} array The array to modify.
	    * @param {Array} values The values to append.
	    * @returns {Array} Returns `array`.
	    */
				function arrayPush(array, values) {
					var index = -1,
					    length = values.length,
					    offset = array.length;
	
					while (++index < length) {
						array[offset + index] = values[index];
					}
					return array;
				}
	
				module.exports = arrayPush;
	
				/***/
			},
			/* 92 */
			/***/function (module, exports, __webpack_require__) {
	
				var overArg = __webpack_require__(77);
	
				/** Built-in value references. */
				var getPrototype = overArg(Object.getPrototypeOf, Object);
	
				module.exports = getPrototype;
	
				/***/
			},
			/* 93 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseGetAllKeys = __webpack_require__(94),
				    getSymbols = __webpack_require__(86),
				    keys = __webpack_require__(58);
	
				/**
	    * Creates an array of own enumerable property names and symbols of `object`.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of property names and symbols.
	    */
				function getAllKeys(object) {
					return baseGetAllKeys(object, keys, getSymbols);
				}
	
				module.exports = getAllKeys;
	
				/***/
			},
			/* 94 */
			/***/function (module, exports, __webpack_require__) {
	
				var arrayPush = __webpack_require__(91),
				    isArray = __webpack_require__(64);
	
				/**
	    * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	    * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	    * symbols of `object`.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @param {Function} keysFunc The function to get the keys of `object`.
	    * @param {Function} symbolsFunc The function to get the symbols of `object`.
	    * @returns {Array} Returns the array of property names and symbols.
	    */
				function baseGetAllKeys(object, keysFunc, symbolsFunc) {
					var result = keysFunc(object);
					return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
				}
	
				module.exports = baseGetAllKeys;
	
				/***/
			},
			/* 95 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseGetAllKeys = __webpack_require__(94),
				    getSymbolsIn = __webpack_require__(90),
				    keysIn = __webpack_require__(80);
	
				/**
	    * Creates an array of own and inherited enumerable property names and
	    * symbols of `object`.
	    *
	    * @private
	    * @param {Object} object The object to query.
	    * @returns {Array} Returns the array of property names and symbols.
	    */
				function getAllKeysIn(object) {
					return baseGetAllKeys(object, keysIn, getSymbolsIn);
				}
	
				module.exports = getAllKeysIn;
	
				/***/
			},
			/* 96 */
			/***/function (module, exports, __webpack_require__) {
	
				var DataView = __webpack_require__(97),
				    Map = __webpack_require__(22),
				    Promise = __webpack_require__(98),
				    Set = __webpack_require__(99),
				    WeakMap = __webpack_require__(100),
				    baseGetTag = __webpack_require__(26),
				    toSource = __webpack_require__(35);
	
				/** `Object#toString` result references. */
				var mapTag = '[object Map]',
				    objectTag = '[object Object]',
				    promiseTag = '[object Promise]',
				    setTag = '[object Set]',
				    weakMapTag = '[object WeakMap]';
	
				var dataViewTag = '[object DataView]';
	
				/** Used to detect maps, sets, and weakmaps. */
				var dataViewCtorString = toSource(DataView),
				    mapCtorString = toSource(Map),
				    promiseCtorString = toSource(Promise),
				    setCtorString = toSource(Set),
				    weakMapCtorString = toSource(WeakMap);
	
				/**
	    * Gets the `toStringTag` of `value`.
	    *
	    * @private
	    * @param {*} value The value to query.
	    * @returns {string} Returns the `toStringTag`.
	    */
				var getTag = baseGetTag;
	
				// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
				if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
					getTag = function getTag(value) {
						var result = baseGetTag(value),
						    Ctor = result == objectTag ? value.constructor : undefined,
						    ctorString = Ctor ? toSource(Ctor) : '';
	
						if (ctorString) {
							switch (ctorString) {
								case dataViewCtorString:
									return dataViewTag;
								case mapCtorString:
									return mapTag;
								case promiseCtorString:
									return promiseTag;
								case setCtorString:
									return setTag;
								case weakMapCtorString:
									return weakMapTag;
							}
						}
						return result;
					};
				}
	
				module.exports = getTag;
	
				/***/
			},
			/* 97 */
			/***/function (module, exports, __webpack_require__) {
	
				var getNative = __webpack_require__(23),
				    root = __webpack_require__(28);
	
				/* Built-in method references that are verified to be native. */
				var DataView = getNative(root, 'DataView');
	
				module.exports = DataView;
	
				/***/
			},
			/* 98 */
			/***/function (module, exports, __webpack_require__) {
	
				var getNative = __webpack_require__(23),
				    root = __webpack_require__(28);
	
				/* Built-in method references that are verified to be native. */
				var Promise = getNative(root, 'Promise');
	
				module.exports = Promise;
	
				/***/
			},
			/* 99 */
			/***/function (module, exports, __webpack_require__) {
	
				var getNative = __webpack_require__(23),
				    root = __webpack_require__(28);
	
				/* Built-in method references that are verified to be native. */
				var Set = getNative(root, 'Set');
	
				module.exports = Set;
	
				/***/
			},
			/* 100 */
			/***/function (module, exports, __webpack_require__) {
	
				var getNative = __webpack_require__(23),
				    root = __webpack_require__(28);
	
				/* Built-in method references that are verified to be native. */
				var WeakMap = getNative(root, 'WeakMap');
	
				module.exports = WeakMap;
	
				/***/
			},
			/* 101 */
			/***/function (module, exports) {
	
				/** Used for built-in method references. */
				var objectProto = Object.prototype;
	
				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;
	
				/**
	    * Initializes an array clone.
	    *
	    * @private
	    * @param {Array} array The array to clone.
	    * @returns {Array} Returns the initialized clone.
	    */
				function initCloneArray(array) {
					var length = array.length,
					    result = array.constructor(length);
	
					// Add properties assigned by `RegExp#exec`.
					if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
						result.index = array.index;
						result.input = array.input;
					}
					return result;
				}
	
				module.exports = initCloneArray;
	
				/***/
			},
			/* 102 */
			/***/function (module, exports, __webpack_require__) {
	
				var cloneArrayBuffer = __webpack_require__(103),
				    cloneDataView = __webpack_require__(105),
				    cloneMap = __webpack_require__(106),
				    cloneRegExp = __webpack_require__(110),
				    cloneSet = __webpack_require__(111),
				    cloneSymbol = __webpack_require__(114),
				    cloneTypedArray = __webpack_require__(115);
	
				/** `Object#toString` result references. */
				var boolTag = '[object Boolean]',
				    dateTag = '[object Date]',
				    mapTag = '[object Map]',
				    numberTag = '[object Number]',
				    regexpTag = '[object RegExp]',
				    setTag = '[object Set]',
				    stringTag = '[object String]',
				    symbolTag = '[object Symbol]';
	
				var arrayBufferTag = '[object ArrayBuffer]',
				    dataViewTag = '[object DataView]',
				    float32Tag = '[object Float32Array]',
				    float64Tag = '[object Float64Array]',
				    int8Tag = '[object Int8Array]',
				    int16Tag = '[object Int16Array]',
				    int32Tag = '[object Int32Array]',
				    uint8Tag = '[object Uint8Array]',
				    uint8ClampedTag = '[object Uint8ClampedArray]',
				    uint16Tag = '[object Uint16Array]',
				    uint32Tag = '[object Uint32Array]';
	
				/**
	    * Initializes an object clone based on its `toStringTag`.
	    *
	    * **Note:** This function only supports cloning values with tags of
	    * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	    *
	    * @private
	    * @param {Object} object The object to clone.
	    * @param {string} tag The `toStringTag` of the object to clone.
	    * @param {Function} cloneFunc The function to clone values.
	    * @param {boolean} [isDeep] Specify a deep clone.
	    * @returns {Object} Returns the initialized clone.
	    */
				function initCloneByTag(object, tag, cloneFunc, isDeep) {
					var Ctor = object.constructor;
					switch (tag) {
						case arrayBufferTag:
							return cloneArrayBuffer(object);
	
						case boolTag:
						case dateTag:
							return new Ctor(+object);
	
						case dataViewTag:
							return cloneDataView(object, isDeep);
	
						case float32Tag:case float64Tag:
						case int8Tag:case int16Tag:case int32Tag:
						case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
							return cloneTypedArray(object, isDeep);
	
						case mapTag:
							return cloneMap(object, isDeep, cloneFunc);
	
						case numberTag:
						case stringTag:
							return new Ctor(object);
	
						case regexpTag:
							return cloneRegExp(object);
	
						case setTag:
							return cloneSet(object, isDeep, cloneFunc);
	
						case symbolTag:
							return cloneSymbol(object);
					}
				}
	
				module.exports = initCloneByTag;
	
				/***/
			},
			/* 103 */
			/***/function (module, exports, __webpack_require__) {
	
				var Uint8Array = __webpack_require__(104);
	
				/**
	    * Creates a clone of `arrayBuffer`.
	    *
	    * @private
	    * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	    * @returns {ArrayBuffer} Returns the cloned array buffer.
	    */
				function cloneArrayBuffer(arrayBuffer) {
					var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
					new Uint8Array(result).set(new Uint8Array(arrayBuffer));
					return result;
				}
	
				module.exports = cloneArrayBuffer;
	
				/***/
			},
			/* 104 */
			/***/function (module, exports, __webpack_require__) {
	
				var root = __webpack_require__(28);
	
				/** Built-in value references. */
				var Uint8Array = root.Uint8Array;
	
				module.exports = Uint8Array;
	
				/***/
			},
			/* 105 */
			/***/function (module, exports, __webpack_require__) {
	
				var cloneArrayBuffer = __webpack_require__(103);
	
				/**
	    * Creates a clone of `dataView`.
	    *
	    * @private
	    * @param {Object} dataView The data view to clone.
	    * @param {boolean} [isDeep] Specify a deep clone.
	    * @returns {Object} Returns the cloned data view.
	    */
				function cloneDataView(dataView, isDeep) {
					var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
					return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
				}
	
				module.exports = cloneDataView;
	
				/***/
			},
			/* 106 */
			/***/function (module, exports, __webpack_require__) {
	
				var addMapEntry = __webpack_require__(107),
				    arrayReduce = __webpack_require__(108),
				    mapToArray = __webpack_require__(109);
	
				/** Used to compose bitmasks for cloning. */
				var CLONE_DEEP_FLAG = 1;
	
				/**
	    * Creates a clone of `map`.
	    *
	    * @private
	    * @param {Object} map The map to clone.
	    * @param {Function} cloneFunc The function to clone values.
	    * @param {boolean} [isDeep] Specify a deep clone.
	    * @returns {Object} Returns the cloned map.
	    */
				function cloneMap(map, isDeep, cloneFunc) {
					var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
					return arrayReduce(array, addMapEntry, new map.constructor());
				}
	
				module.exports = cloneMap;
	
				/***/
			},
			/* 107 */
			/***/function (module, exports) {
	
				/**
	    * Adds the key-value `pair` to `map`.
	    *
	    * @private
	    * @param {Object} map The map to modify.
	    * @param {Array} pair The key-value pair to add.
	    * @returns {Object} Returns `map`.
	    */
				function addMapEntry(map, pair) {
					// Don't return `map.set` because it's not chainable in IE 11.
					map.set(pair[0], pair[1]);
					return map;
				}
	
				module.exports = addMapEntry;
	
				/***/
			},
			/* 108 */
			/***/function (module, exports) {
	
				/**
	    * A specialized version of `_.reduce` for arrays without support for
	    * iteratee shorthands.
	    *
	    * @private
	    * @param {Array} [array] The array to iterate over.
	    * @param {Function} iteratee The function invoked per iteration.
	    * @param {*} [accumulator] The initial value.
	    * @param {boolean} [initAccum] Specify using the first element of `array` as
	    *  the initial value.
	    * @returns {*} Returns the accumulated value.
	    */
				function arrayReduce(array, iteratee, accumulator, initAccum) {
					var index = -1,
					    length = array == null ? 0 : array.length;
	
					if (initAccum && length) {
						accumulator = array[++index];
					}
					while (++index < length) {
						accumulator = iteratee(accumulator, array[index], index, array);
					}
					return accumulator;
				}
	
				module.exports = arrayReduce;
	
				/***/
			},
			/* 109 */
			/***/function (module, exports) {
	
				/**
	    * Converts `map` to its key-value pairs.
	    *
	    * @private
	    * @param {Object} map The map to convert.
	    * @returns {Array} Returns the key-value pairs.
	    */
				function mapToArray(map) {
					var index = -1,
					    result = Array(map.size);
	
					map.forEach(function (value, key) {
						result[++index] = [key, value];
					});
					return result;
				}
	
				module.exports = mapToArray;
	
				/***/
			},
			/* 110 */
			/***/function (module, exports) {
	
				/** Used to match `RegExp` flags from their coerced string values. */
				var reFlags = /\w*$/;
	
				/**
	    * Creates a clone of `regexp`.
	    *
	    * @private
	    * @param {Object} regexp The regexp to clone.
	    * @returns {Object} Returns the cloned regexp.
	    */
				function cloneRegExp(regexp) {
					var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
					result.lastIndex = regexp.lastIndex;
					return result;
				}
	
				module.exports = cloneRegExp;
	
				/***/
			},
			/* 111 */
			/***/function (module, exports, __webpack_require__) {
	
				var addSetEntry = __webpack_require__(112),
				    arrayReduce = __webpack_require__(108),
				    setToArray = __webpack_require__(113);
	
				/** Used to compose bitmasks for cloning. */
				var CLONE_DEEP_FLAG = 1;
	
				/**
	    * Creates a clone of `set`.
	    *
	    * @private
	    * @param {Object} set The set to clone.
	    * @param {Function} cloneFunc The function to clone values.
	    * @param {boolean} [isDeep] Specify a deep clone.
	    * @returns {Object} Returns the cloned set.
	    */
				function cloneSet(set, isDeep, cloneFunc) {
					var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
					return arrayReduce(array, addSetEntry, new set.constructor());
				}
	
				module.exports = cloneSet;
	
				/***/
			},
			/* 112 */
			/***/function (module, exports) {
	
				/**
	    * Adds `value` to `set`.
	    *
	    * @private
	    * @param {Object} set The set to modify.
	    * @param {*} value The value to add.
	    * @returns {Object} Returns `set`.
	    */
				function addSetEntry(set, value) {
					// Don't return `set.add` because it's not chainable in IE 11.
					set.add(value);
					return set;
				}
	
				module.exports = addSetEntry;
	
				/***/
			},
			/* 113 */
			/***/function (module, exports) {
	
				/**
	    * Converts `set` to an array of its values.
	    *
	    * @private
	    * @param {Object} set The set to convert.
	    * @returns {Array} Returns the values.
	    */
				function setToArray(set) {
					var index = -1,
					    result = Array(set.size);
	
					set.forEach(function (value) {
						result[++index] = value;
					});
					return result;
				}
	
				module.exports = setToArray;
	
				/***/
			},
			/* 114 */
			/***/function (module, exports, __webpack_require__) {
	
				var _Symbol4 = __webpack_require__(27);
	
				/** Used to convert symbols to primitives and strings. */
				var symbolProto = _Symbol4 ? _Symbol4.prototype : undefined,
				    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
				/**
	    * Creates a clone of the `symbol` object.
	    *
	    * @private
	    * @param {Object} symbol The symbol object to clone.
	    * @returns {Object} Returns the cloned symbol object.
	    */
				function cloneSymbol(symbol) {
					return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
				}
	
				module.exports = cloneSymbol;
	
				/***/
			},
			/* 115 */
			/***/function (module, exports, __webpack_require__) {
	
				var cloneArrayBuffer = __webpack_require__(103);
	
				/**
	    * Creates a clone of `typedArray`.
	    *
	    * @private
	    * @param {Object} typedArray The typed array to clone.
	    * @param {boolean} [isDeep] Specify a deep clone.
	    * @returns {Object} Returns the cloned typed array.
	    */
				function cloneTypedArray(typedArray, isDeep) {
					var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
					return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
				}
	
				module.exports = cloneTypedArray;
	
				/***/
			},
			/* 116 */
			/***/function (module, exports, __webpack_require__) {
	
				var baseCreate = __webpack_require__(117),
				    getPrototype = __webpack_require__(92),
				    isPrototype = __webpack_require__(75);
	
				/**
	    * Initializes an object clone.
	    *
	    * @private
	    * @param {Object} object The object to clone.
	    * @returns {Object} Returns the initialized clone.
	    */
				function initCloneObject(object) {
					return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
				}
	
				module.exports = initCloneObject;
	
				/***/
			},
			/* 117 */
			/***/function (module, exports, __webpack_require__) {
	
				var isObject = __webpack_require__(32);
	
				/** Built-in value references. */
				var objectCreate = Object.create;
	
				/**
	    * The base implementation of `_.create` without support for assigning
	    * properties to the created object.
	    *
	    * @private
	    * @param {Object} proto The object to inherit from.
	    * @returns {Object} Returns the new object.
	    */
				var baseCreate = function () {
					function object() {}
					return function (proto) {
						if (!isObject(proto)) {
							return {};
						}
						if (objectCreate) {
							return objectCreate(proto);
						}
						object.prototype = proto;
						var result = new object();
						object.prototype = undefined;
						return result;
					};
				}();
	
				module.exports = baseCreate;
	
				/***/
			},
			/* 118 */
			/***/function (module, exports) {
	
				"use strict";
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				/* eslint max-len: 0 */
	
				//      
	
	
				/**
	    * @class Shapes
	    * @param {Object} ctx      Canvas context.
	    * @param {Object} document The document object.
	   */
				var Shapes = function () {
	
					/**
	     * constructor
	     * @param  {HTMLCanvasElement} ctx
	     * @param  {Document} document
	     */
					function Shapes(ctx, document) {
						_classCallCheck(this, Shapes);
	
						if (!ctx) {
							throw new Error("Shapes: Please provide a context argument [arg::1]");
						}
	
						this.ctx = ctx;
						this.document = document || window.document;
					}
	
					/**
	     * @memberOf Shapes
	     * @description draw a circle.
	     * @param {Number} x     The x coordinate of the circle.
	     * @param {Number} y     The y coordinate of the circle.
	     * @param {Number} r     The radius of the circle.
	     * @param {String} color The color of the circle.
	     */
	
					_createClass(Shapes, [{
						key: "circle",
						value: function circle() {
							var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
							var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
							var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
							var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#000000";
	
							this.ctx.fillStyle = color;
							this.ctx.beginPath();
							this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
							this.ctx.fill();
						}
					}, {
						key: "rect",
	
						/**
	      * @memberOf Shapes
	      * @description Fill a rectangle
	      * @param  {Number} x     Starting point X
	      * @param  {Number} y     Starting point Y
	      * @param  {Number} w     Width of the rectangle
	      * @param  {Number} h     Height of the rectangle
	      * @param  {String} color A hex string.
	      */
						value: function rect() {
							var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
							var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
							var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
							var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
							var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";
	
							this.ctx.fillStyle = color;
							this.ctx.fillRect(x, y, w, h);
						}
					}, {
						key: "drawLineXY",
	
						/**
	      * @memberOf Shapes
	      * @description Draw a line between these two points.
	      * @param  {Number} x0
	      * @param  {Number} y0
	      * @param  {Number} x1
	      * @param  {Number} y1
	      * @param  {string} style
	      */
						value: function drawLineXY(x0, y0, x1, y1) {
							var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";
	
							this.ctx.beginPath();
							this.ctx.strokeStyle = style;
							this.ctx.moveTo(x0, y0);
							this.ctx.lineTo(x1, y1);
							this.ctx.stroke();
						}
					}, {
						key: "drawLineVec",
	
						/**
	      * drawLineVec
	      * @param  {Vector} vec0: Vector
	      * @param  {Vector} vec1: Vector
	      */
						value: function drawLineVec(vec0, vec1) {
							this.drawLineXY(vec0.get("x"), vec0.get("y"), vec1.get("x"), vec1.get("y"));
						}
					}, {
						key: "drawLinePoints",
	
						/**
	      * drawLinePoints
	      * @param  {Object} firstPoint
	      * @param  {Array<Object>} points
	      */
						value: function drawLinePoints(points) {
							if (!points[0]) {
								throw new Error("Please provide valid inputs");
							}
	
							if (points.length < 1) {
								throw new Error("Must be given a a number of points greater than 1");
							}
	
							var firstPoint = points.shift();
	
							this.ctx.beginPath();
							this.ctx.moveTo(firstPoint.x, firstPoint.y);
	
							var _iteratorNormalCompletion = true;
							var _didIteratorError = false;
							var _iteratorError = undefined;
	
							try {
								for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var point = _step.value;
	
									this.ctx.lineTo(point.x, point.y);
								}
							} catch (err) {
								_didIteratorError = true;
								_iteratorError = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion && _iterator.return) {
										_iterator.return();
									}
								} finally {
									if (_didIteratorError) {
										throw _iteratorError;
									}
								}
							}
	
							this.ctx.stroke();
							this.ctx.closePath();
						}
					}, {
						key: "grid",
	
						/**
	      * @memberOf Shapes
	      * @param  {number} width
	      * @param  {number} height
	      * @param  {Number} gridSize
	      * @param  {String} color
	      */
						value: function grid(width, height) {
							var gridSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
							var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#ccc";
	
							this.ctx.beginPath();
							this.ctx.strokeStyle = color;
	
							for (var x = 0; x < width; x += gridSize) {
								this.ctx.moveTo(x, 0);
								this.ctx.lineTo(x, height);
							}
	
							for (var y = 0; y < height; y += gridSize) {
								this.ctx.moveTo(0, y);
								this.ctx.lineTo(width, y);
							}
	
							this.ctx.stroke();
						}
					}, {
						key: "pCircle",
	
						/**
	      * pCircle
	      * @memberOf Shapes
	      * @param  {Particle} p
	      * @return {Particle}
	      */
						value: function pCircle(particle) {
							this.circle(particle.state.x, particle.state.y, particle.state.radius, particle.state.color);
							return particle;
						}
					}, {
						key: "pRect",
	
						/**
	      * pRect
	      * @memberOf Shapes
	      * @param  {Particle} p
	      * @return {Particle}
	      */
						value: function pRect(particle) {
							this.rect(particle.state.x, particle.state.y, particle.state.width, particle.state.height, particle.state.color);
							return particle;
						}
					}]);
	
					return Shapes;
				}();
	
				module.exports = Shapes;
	
				/***/
			},
			/* 119 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				/**
	    * YAT stands for Yet Another Tween.
	    * Why not have one more package that does the same thing as the 50 out there?
	    * Well thats a good question that will not be answered in this comment block.
	    * To be honest its for practice and learning purposes. And if anyone in their
	    * right mind actaully benefits from this then so be it.
	    */
	
				var clone = __webpack_require__(6);
				var event = __webpack_require__(120);
				var utils = __webpack_require__(3);
	
				var DEFAULTS = {
					obj: { x: 0, y: 0 },
					props: { x: 100, y: 100 },
					easing: "ease",
					duration: 1000
				};
	
				var eventInstance = event.init();
				// Inherit methods from eventInstance
				var YAT = Object.create(eventInstance);
	
				YAT.init = function initTween(opts) {
					// Can and uses Event and Clock methods.
	
					if (!opts.clock) {
						throw new Error("Please provide a clock API.");
					}
	
					this._clock = opts.clock.init({
						fps: opts.fps || 60
					});
	
					this.parent = eventInstance;
					this.tweens = [];
	
					/**
	     * easingFns
	     * @description All easing functions are orignially written
	     * by robert penner, the tweening god.
	     * Here each method is passed a normalized value. Which is
	     * usually a number between 0 and 1. You can think of this number as
	     * a percentage of a range. With that normlized value / percentage we
	     * can map that percentage to another range. This is called interpolation.
	     * @see {@link http://robertpenner.com/easing/}
	     * @type {Object}
	     */
					this.easingFns = {
						// Here this ease function is linear as there is only one
						// n value. Each ease function can be mapped to a polynomial.
						ease: function ease(c, b, n) {
							// polynomial: ax + b = c; where x is the normalized value
							return c * n + b;
						},
						easeInQuad: function easeInQuad(c, b, n) {
							// polynomial: 1x^2 + 0x + 0 = d;
							return c * (n * n) + b;
						},
						easeOutQuad: function easeOutQuad(c, b, n) {
							// polynomial: -1x^2 + 2x + 0 = d;
							return c * (n * (2 - n)) + b;
						},
						easeInOutQuad: function easeInOutQuad(c, b, n) {
							if ((n *= 2) < 1) {
								return c / 2 * (n * n) + b; // Polynomial for half the range:
								// 2x^2 + 0x + 0 = d;
							}
							return -c / 2 * (--n * (n - 2) - 1) + b; // Polynomial for the the upper
							// half of the range: -2x^2 + 4x - 1
						}
					};
	
					this._clock.on("tick", this.updateTweens, this);
	
					return this;
				};
	
				/**
	    * updateTweens - Updates all the tween instances.
	    */
				YAT.updateTweens = function updateTeens() {
					this.tweens.forEach(function (tween) {
						if (tween.ticker.needsUpdate) {
							tween.update(tween.ticker);
						}
	
						if (!tween.ticker.needsUpdate && tween.ticker.STATE === "DONE") {
							tween.update(tween.ticker);
							tween.remove();
						}
	
						if (tween.ticker.stopped) {
							console.log("Your tween is stopped.");
						}
					});
				};
	
				YAT.create = function () {
					var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
					var YATInstance = Object.create(YAT);
					var _opts = Object.assign(clone(DEFAULTS), opts);
					var duration = _opts.duration,
					    obj = _opts.obj,
					    props = _opts.props,
					    easing = _opts.easing,
					    id = _opts.id;
	
					if (!YATInstance.easingFns[easing]) {
						throw new Error("The easing function " + easing + " does not exists");
					}
	
					if (id) {
						if (this.tweens.some(function (x) {
							return x.id === id;
						})) {
							throw new Error("The tween with id: " + id + " already exists.");
						}
	
						YATInstance.id = id;
					} else {
						YATInstance.id = this.tweens.length + 1;
					}
	
					YATInstance.state = clone(obj);
					YATInstance.obj = obj;
					YATInstance.props = props;
					YATInstance.duration = duration;
					YATInstance.easing = YATInstance.easingFns[easing];
					YATInstance.ticker = this._clock.createSlave({
						id: YATInstance.id,
						duration: YATInstance.duration
					});
	
					this.tweens.push(YATInstance);
					return YATInstance;
				};
	
				YAT.get = function (id) {
					if (this.tweens.length === 1) {
						return YAT[0];
					}
	
					for (var i = 0; i < this.tween.length; i++) {
						if (this.tween[i].id === id) {
							return this.tween[i];
						}
					}
	
					return false;
				};
	
				YAT.rewind = function () {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;
	
					var tween = this.get(id);
	
					if (!this.stopped) {
						tween.stop();
					}
	
					// Figure out a way to cache the old props //
					this.opts.obj = this.opts.props;
					this.opts.props = this.opts.propsBeforeTween;
	
					tween.start();
				};
	
				YAT.startAll = function startAll() {
					if (!this.tweens.length) {
						throw new Error("There are no tweens to start");
					}
	
					this.tweens.forEach(function (t) {
						t.ticker.start();
					});
	
					this._clock.start();
				};
	
				/**
	    * stopAll - Stops all tweens
	    */
				YAT.stopAll = function stopAll() {
					if (this.tweens.length) {
						throw new Error("There are no tweens to stop");
					}
	
					this._clock.stop();
				};
	
				/**
	    * delay - how long to delay the animation
	    * @param  {number} duration
	    * @return {YAT}
	    */
				YAT.delay = function delay(duration) {
					var _this = this;
	
					this.ticker.stop();
					this.obj = clone(this.state);
					setTimeout(function () {
						return _this.ticker.start();
					}, duration);
					return this;
				};
	
				/**
	    * stop - stops the ticker
	    * @return {YAT}
	    */
				YAT.stop = function stop() {
					this.ticker.stop();
					return this;
				};
	
				/**
	    * finish - finishes the tween animation
	    * @return {YAT}
	    */
				YAT.finish = function finish() {
					this.stop();
					this._clock.removeSlave(this.ticker.id);
					this.state = this.props;
					return this;
				};
	
				YAT.remove = function remove() {
					var _this2 = this;
	
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;
	
					this.tweens = this.tweens.filter(function (t) {
						if (t.id === id) {
							_this2._clock.removeSlave(t.ticker.id);
							return false;
						}
	
						return true;
					});
				};
	
				YAT.update = function update(ticker) {
					if (!ticker.needsUpdate) {
						this.state = Object.assign({}, this.props);
						return this.state;
					}
	
					var delta = ticker.timeSinceStart,
					    duration = ticker.duration;
	
					var norm = utils.normalize(delta, 0, duration.ms);
	
					for (var key in this.obj) {
						if (this.obj.hasOwnProperty(key)) {
							if (this.obj[key] !== undefined && this.props[key] !== undefined) {
								this.state[key] = this.easing(this.props[key] - this.obj[key], this.obj[key], norm);
							}
						}
					}
	
					return this.state;
				};
	
				module.exports = YAT;
	
				/* eslint-disable */
	
				/*
	    *
	    * TERMS OF USE - EASING EQUATIONS
	    * 
	    * Open source under the BSD License. 
	    * 
	    * Copyright © 2001 Robert Penner
	    * All rights reserved.
	    * 
	    * Redistribution and use in source and binary forms, with or without modification, 
	    * are permitted provided that the following conditions are met:
	    * 
	    * Redistributions of source code must retain the above copyright notice, this list of 
	    * conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright notice, this list 
	    * of conditions and the following disclaimer in the documentation and/or other materials 
	    * provided with the distribution.
	    *
	    * Neither the name of the author nor the names of contributors may be used to endorse
	    * or promote products derived from this software without specific prior written permission
	    *
	    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
	    * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES O
	    * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL TH
	    *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL
	    *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUT
	    *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
	    * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDIN
	    *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
	    * OF THE POSSIBILITY OF SUCH DAMAGE.
	    *
	    */
	
				/***/
			},
			/* 120 */
			/***/function (module, exports) {
	
				"use strict";
	
				function _toConsumableArray(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}return arr2;
					} else {
						return Array.from(arr);
					}
				}
	
				/**
	    * Event
	    * @type {Object}
	    * @implements {utils}
	    */
				var Event = Object.create(null);
	
				/**
	    * init
	    * @memberOf Event
	    * @description Initializes the event object.
	    * @return {Event}
	    */
				Event.init = function initEvent() {
					this.callbacks = {};
					return this;
				};
	
				/**
	    * emit
	    * @description Executes the handeler that assocaited with the emitted event.
	    * @param {Array} args
	    * @return {Event}
	    */
				Event.emit = function emit() {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}
	
					var event = args[0],
					    rest = args.slice(1);
	
					if (!event) {
						throw new TypeError("Event: Please provide truthy arguments");
					}
	
					this.callbacks[event] = this.callbacks[event] || [];
	
					if (this.callbacks[event].length) {
						this.callbacks[event].forEach(function (callback) {
							callback.apply(undefined, _toConsumableArray(rest));
						});
					}
	
					return this;
				};
	
				/**
	    * on
	    * @description Attach a handler to an event.
	    * @param  {String}   event
	    * @param  {Function} fn
	    * @param  {Object}   context
	    * @return {Event}
	    */
				Event.on = function on(event, fn, context) {
					var _this = this;
	
					if (!event || !fn) {
						throw new TypeError("Event: Please provide truthy arguments");
					}
	
					if (context) {
						fn = fn.bind(context);
					}
	
					var events = event.split(" ");
	
					this.callbacks = this.callbacks || {};
	
					events.forEach(function (e) {
						_this.callbacks[e] = _this.callbacks[e] || [];
	
						if (!_this.callbacks[e].length) {
							_this.callbacks[e].push(fn);
							return _this;
						}
	
						// Dont create duplicates of the same handeled function.
						// If you want your function run twice wrap it in a function.
						return _this.callbacks[e].every(function (cb, i, col) {
							return cb !== fn;
						}) ? _this.callbacks[e].push(fn) : console.warn("Event: That function " + fn + " has already been declared a" + "handler for this event.");
					});
	
					return this;
				};
	
				/**
	    * off
	    * @description Remove an event handeler.
	    * @param  {String}   event
	    * @param  {Function} fn
	    * @return {Event}
	    */
				Event.off = function off() {
					for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
						args[_key2] = arguments[_key2];
					}
	
					var event = args[0],
					    fn = args[1];
	
					if (!event) {
						this.callbacks = {};
						return this;
					}
	
					var callbacks = this.callbacks[event];
	
					if (!callbacks) {
						console.warn("Event: No event named " + event + " has been registered");
						return this;
					}
	
					if (!fn) {
						delete this.callbacks[event];
						return this;
					}
	
					this.callbacks[event] = callbacks.filter(function (cb) {
						return cb !== fn;
					});
	
					return this;
				};
	
				/**
	    * listeners - Return all callbacks attached to a certain event
	    * @param  {any<Array>} args
	    * @return {function[]}
	    */
				Event.listeners = function listeners() {
					for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
						args[_key3] = arguments[_key3];
					}
	
					var event = args[0];
	
					if (!event) {
						return Object.keys(this.callbacks);
					}
	
					if (!this.callbacks[event]) {
						console.warn("Event: No event named " + event + " has been registered");
					}
	
					return this.callbacks[event];
				};
	
				Event.once = function once() {
					var self = this;
	
					for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
						args[_key4] = arguments[_key4];
					}
	
					var event = args[0],
					    fn = args[1],
					    context = args[2];
	
					var wrap = function wrap() {
						fn.bind(context)();
						self.off(event, wrap);
					};
	
					this.on(event, wrap, context);
				};
	
				// Aliases //
				Event.removeListener = Event.removeAllListeners = Event.off;
				Event.fire = Event.emit;
				Event.addListener = Event.on;
				Event.get = Event.listeners;
	
				module.exports = Event;
	
				/***/
			},
			/* 121 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var ticker = __webpack_require__(122);
				var event = __webpack_require__(120).init();
				var Clock = Object.create(event);
				var MAX_FPS = 60;
				var noop = function noop() {};
	
				/**
	    * init - Initalizes the clock with correct properties.
	    * @param  {Object} opts
	    * @param  {Number} opts.fps The fps you want the clock to tick at.
	    * @return {Clock}
	    */
				Clock.init = function initClock() {
					var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
					opts = Object.assign({
						fps: MAX_FPS
					}, opts);
	
					this.slaves = [];
					this.parent = event;
	
					// Zero based frame count.
					this.index = -1;
	
					// Save a reference to the animation frame so we can cancel it
					this.rAF = 0;
	
					// Time properties
					this.startTime;
					this.lastTime;
					this.stopTime;
					this.timeSinceStart = 0;
	
					// The maximum FPS the browser can deliver is 60.
					this.fps = opts.fps > MAX_FPS ? MAX_FPS : opts.fps || MAX_FPS;
	
					return this;
				};
	
				/**
	    * start - Starts the clock with starting time properties.
	    * @param  {Number} fps The fps you want the clock to tick at.
	    * @return {Clock}
	    */
				Clock.start = function start() {
					if (this.fps > 60) {
						throw new Error("The given fps is too high");
					}
	
					if (+this.fps === NaN) {
						throw new Error("The given fps is not valid");
					}
	
					this.fps = 1000 / this.fps;
					this.startTime = performance.now();
					this.lastTime = this.startTime;
	
					// Start ticking
					this.loop(this.startTime);
					return this;
				};
	
				/**
	    * tick
	    * @param  {Number} newTime A value in ms that is equal to the current time.
	    * @return {Clock}
	    */
				Clock.loop = function loop(newTime) {
					this.rAF = requestAnimationFrame(loop.bind(this));
	
					var delta = newTime - this.lastTime;
					this.timeSinceStart = newTime - this.startTime;
	
					if (delta > this.fps) {
						this.index++;
	
						this.whipSlaves({
							newTime: newTime,
							delta: delta,
							index: this.index,
							lastTime: this.lastTime,
							clockStart: this.startTime,
							timeSinceStart: this.timeSinceStart
						});
	
						this.lastTime = newTime - delta % this.fps;
					}
	
					this.emit("render");
	
					return this;
				};
	
				/**
	    * stop - Stop the clock and call the last tick if needed.
	    * @return {Clock}
	    */
				Clock.stop = function stopClock() {
					cancelAnimationFrame(this.rAF);
	
					// Record when we stopped.
					this.stopTime = performance.now();
					this.timeSinceStart += this.stopTime - this.startTime;
					this.clearSlaves();
	
					this.emit("stopped");
					return this;
				};
	
				/**
	    * whipSlaves - Run all slaves in sequence and pass in
	    * the given state of the clock.
	    * @param  {Object} state
	    * @return {Clock}
	    */
				Clock.whipSlaves = function whipSlaves(state) {
					if (!this.slaves.length) return;
	
					this.slaves.forEach(function (slave, index) {
						slave.nudge(state);
					});
	
					this.emit("tick");
					return this;
				};
	
				Clock.createSlave = function createSlave(opts) {
					if (!opts) {
						throw new Error("Please provide a options object");
					}
	
					var id = opts.id,
					    duration = opts.duration;
	
					var timeStamp = performance.now();
	
					var slave = Object.create(ticker).init({ timeStamp: timeStamp, id: id, duration: duration });
	
					if (id) {
						this.slaves.push(slave);
						return slave;
					}
	
					slave.id = this.slaves.push(slave);
					return slave;
				};
	
				Clock.removeSlave = function removeSlave(id) {
					this.slaves = this.slaves.filter(function (slave) {
						if (slave.id !== id) {
							return true;
						}
						slave.removeAllListeners();
						return false;
					});
				};
	
				Clock.clearSlaves = function clearSlaves() {
					if (this.slaves.length) this.slaves = [];
				};
	
				Clock.reset = function () {
					this.stop();
					this.clearSlaves();
					this.removeAllListeners();
					this.rAF = 0;
				};
	
				Clock.removeAllSlaves = Clock.clearSlaves;
	
				module.exports = Clock;
	
				/***/
			},
			/* 122 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var event = __webpack_require__(120);
				var MAX_FPS = 1000 / 60;
				var Ticker = Object.create(event);
				var STATE = {
					STOPPED: "STOPPED",
					RUNNING: "RUNNING",
					DONE: "DONE"
				};
	
				Ticker.init = function init(_ref) {
					var _ref$timeStamp = _ref.timeStamp,
					    timeStamp = _ref$timeStamp === undefined ? performance.now() : _ref$timeStamp,
					    id = _ref.id,
					    _ref$duration = _ref.duration,
					    duration = _ref$duration === undefined ? 1000 : _ref$duration,
					    _ref$interval = _ref.interval,
					    interval = _ref$interval === undefined ? MAX_FPS : _ref$interval;
	
					this.id = id;
					this.parent = event;
					this.parent.name = "event";
	
					// Probably cant support this??
					// You have to have your own clock.
					this.interval = interval;
					this.duration = this.tickFor(duration, "ms");
	
					this.STATE;
					this.delta;
					this.stopTime;
					this.startTime = 0;
					this.timeSinceStart = 0;
					this.timeSinceStart2 = 0;
	
					// Fire the first time you get called.
					this.needsUpdate = true;
	
					return this;
				};
	
				Ticker.tickFor = function tickFor(duration, string) {
					switch (string) {
						case "frames":case "f":
							return {
								type: "frames",
								value: duration,
								ms: duration * MAX_FPS
							};
						case "seconds":case "s":
							return {
								type: "seconds",
								value: duration,
								ms: duration * 1000
							};
						case "milliseconds":case "ms":default:
							return {
								type: "milliseconds",
								value: duration,
								ms: duration
							};
					};
				};
	
				Ticker.start = function start() {
					if (this.STATE === STATE.RUNNING) return false;
					this.STATE = STATE.RUNNING;
					this.startTime = performance.now();
				};
	
				Ticker.stop = function stop() {
					if (this.STATE === STATE.STOPPED) return false;
					this.STATE = STATE.STOPPED;
	
					// Know what time it stopped.
					// so that if it starts again it
					// it can recalculate how far it needs to go.
					var newDuration = this.duration.ms - this.timeSinceStart || 0;
	
					this.duration = this.tickFor(newDuration, "milliseconds");
					this.timeSinceStart = 0;
	
					this.stopTime = performance.now();
				};
	
				Ticker.nudge = function nudge(state) {
					if (!state) {
						throw new Error("Please provide a state object");
					}
	
					if (this.STATE === STATE.STOPPED || this.STATE !== STATE.RUNNING) {
						this.needsUpdate = false;
						return null;
					}
	
					this.STATE = STATE.RUNNING;
					this.timeSinceStart += state.delta;
	
					if (this.timeSinceStart < this.duration.ms) {
						this.needsUpdate = true;
					} else {
						this.STATE = STATE.DONE;
						this.needsUpdate = false;
					}
				};
	
				module.exports = Ticker;
	
				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var FIRST_IFRAME = true;
	
	module.exports = function iframeHandler(document) {
	  document = document || this.document;
	
	  var domHelper = __webpack_require__(6)(document);
	  var shims = __webpack_require__(7)(document);
	
	  var $ = shims.$;
	  var $$ = shims.$$;
	
	  var firstState = FIRST_IFRAME;
	
	  var checkStatus = function checkStatus(res) {
	    var status = res.status;
	
	    if (status >= 200 && status < 400) {
	      return res;
	    }
	
	    console.log("Bad status: " + status);
	    throw res.statusText;
	  };
	
	  /**
	   * [fetchExample description]
	   * @param  {[type]} id [description]
	   * @return {[type]}    [description]
	   */
	  var fetchExample = function fetchExample(id) {
	    return fetch("/examples/" + id).then(checkStatus).then(function (res) {
	      return res.text();
	    }).catch(console.error);
	  };
	
	  /**
	   * [writeFrame description]
	   * @param  {[type]} parent [description]
	   * @param  {[type]} frame  [description]
	   * @return {[type]}        [description]
	   */
	  var writeFrame = function writeFrame(parent, frame) {
	    if (!domHelper.isElement(parent) || !domHelper.isElement(frame)) {
	      throw new Error(parent + " this parent isn't a DOM element.");
	    }
	    return parent.appendChild(frame);
	  };
	
	  /**
	   * [getFrame description]
	   * @param  {[type]} name [description]
	   * @return {[type]}      [description]
	   */
	  var getFrame = function getFrame(name) {
	    if (!name) return $("iframe[data-example]");
	    return $("iframe[data-example^=" + name + "]");
	  };
	
	  /**
	   * [injectSrc description]
	   * @param  {[type]} src   [description]
	   * @param  {[type]} frame [description]
	   * @return {[type]}       [description]
	   */
	  var injectSrc = function injectSrc(src, frame) {
	    frame.srcdoc = src;
	    return frame;
	  };
	
	  /**
	   * [createFrame description]
	   * @param  {[type]} name [description]
	   * @return {[type]}      [description]
	   */
	  var createFrame = function createFrame(name) {
	    if (!name || typeof name !== "string") {
	      throw new Error(name + " Not a valid name for a id.");
	    }
	
	    var iframe = document.createElement("iframe");
	
	    iframe.setAttribute("allow-same-origin", true);
	    iframe.setAttribute("allow-scripts", true);
	    iframe.setAttribute("allowfullscreen", true);
	    iframe.setAttribute("class", "frame_example");
	    iframe.setAttribute("data-example", name);
	
	    return iframe;
	  };
	
	  /**
	   * [removeFrameSrc description]
	   * @param  {[type]} target [description]
	   * @return {[type]}        [description]
	   */
	  var removeFrameSrc = function removeFrameSrc(target) {
	    if (!target) throw new Error("Please provide a target");
	
	    if (!domHelper.isElement(target)) {
	      return getFrame(target).srcDoc = "";
	    }
	    return target.srcDoc = "";
	  };
	
	  /**
	   * exampleExists - check if example exsists
	   * @param  {String} example
	   * @return {Boolean}
	   */
	  var exampleExists = function exampleExists(example) {
	    if (!example) return false;
	
	    var id = void 0;
	
	    try {
	      id = getFrame(example).attributes["data-example"].nodeValue;
	
	      return id === example;
	    } catch (e) {
	      return false;
	    }
	  };
	
	  /**
	   * loadInIframe
	   * @param  {String} name
	   * @return {Promise}
	   */
	  var loadInIframe = function loadInIframe(id) {
	    if (exampleExists(id)) {
	      return false;
	    }
	
	    if (firstState) {
	      // Toggle the state.
	      firstState = !firstState;
	      // Create the frame
	      var firstFrame = createFrame(id);
	      var parentDiv = $(".wrapper__frame");
	      // If we are not the first frame of the document do this regular stuff.
	      return fetchExample(id).then(function (src) {
	        return injectSrc(src, firstFrame);
	      }).then(function (newFrame) {
	        return writeFrame(parentDiv, newFrame);
	      }).catch(errorDialog);
	    }
	
	    // Toggle the state and remove old src and inject new src.
	    var existingFrame = getFrame();
	    removeFrameSrc(existingFrame);
	    existingFrame.setAttribute("data-example", id);
	    return fetchExample(id).then(function (src) {
	      return injectSrc(src, existingFrame);
	    }).catch(errorDialog);
	  };
	
	  var errorDialog = function errorDialog(err) {
	    $(".error_dialog").style.display = "block";
	    $(".error_dialog").insertAdjacentText("afterBegin", err);
	  };
	
	  return {
	    removeFrameSrc: removeFrameSrc,
	    writeFrame: writeFrame,
	    getFrame: getFrame,
	    injectSrc: injectSrc,
	    createFrame: createFrame,
	    loadInIframe: loadInIframe
	  };
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (document) {
	  document = document || this.document;
	
	  var shims = __webpack_require__(7)(document);
	  var $$ = shims.$$;
	
	  /**
	   * isElement checks if a element is a DOM node.
	   * @param  {Object}  obj
	   * @return {Boolean}
	   */
	  var isElement = function isElement(obj) {
	    return obj instanceof HTMLElement;
	  };
	
	  /**
	   * mapText takes an elment list and return a array of textNodes.
	   * @param  {DOMElememt} elm   DOMElememt
	   * @return {Array}            Array
	   */
	  var mapToText = function mapText(elm) {
	    var elmList = $$(elm, document);
	    var textNodes = [];
	
	    /*
	      We need to use a for `of` loop here cause its a NodeList and not an
	      array.
	    */
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = elmList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var item = _step.value;
	
	        textNodes.push(item.text);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    return textNodes;
	  };
	
	  /**
	   * elmDelegator delegate items
	   * @param  {DOMElement} elm The parent element of the delegates.
	   * @param  {String} event Boolean to check which elements to delegate to.
	   * @return {Function}
	   * Curried function that takes a checkTarget function and a callback.
	   */
	  var elmDelegator = function elmDelegator(elm, event) {
	    if (!isElement(elm)) throw new Error(elm + " needs to be a element.");
	    if (elm.length) throw new Error(elm + " needs to be element list");
	
	    return function (checkTarget, callback) {
	      elm.addEventListener(event, function (e) {
	        e.preventDefault();
	
	        if (checkTarget(e.target)) {
	          return callback(null, e.target, e);
	        }
	
	        return callback(null);
	      });
	    };
	  };
	
	  return { elmDelegator: elmDelegator, mapToText: mapToText, isElement: isElement };
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	/* shims */
	module.exports = function shims(document) {
	  document = document || this.document;
	
	  var $ = function qs() {
	    var _document;
	
	    return (_document = document).querySelector.apply(_document, arguments);
	  };
	
	  var $$ = function qsAll() {
	    var _document2;
	
	    return (_document2 = document).querySelectorAll.apply(_document2, arguments);
	  };
	
	  return { $: $, $$: $$ };
	};
	/* shims */

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODIzMTgxOTg0NzRhOTA5NTRlMjUiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDJlOWE5MTJiMmViMzNkYmVlZGZkIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9tYWluLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdmVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9leHRlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvY2xvbmVEZWVwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVNYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hZGRTZXRFbnRyeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvc2hhcGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9ldmVudC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL2Nsb2NrLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9pZnJhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvZG9tX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL3NoaW1zLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsInBhcnRpY2xlTGliIiwicmVxdWlyZSIsImlmcmFtZSIsImRvY3VtZW50Iiwic2hpbXMiLCJ1dGlscyIsIkRFRkFVTFRfRVhBTVBMRSIsInNldGhhc2giLCJmcmFnbWVudCIsImxvY2F0aW9uIiwiaGFzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRobmFtZSIsInRleHROb2RlcyIsIm1hcFRvVGV4dCIsIiQiLCJsZW5ndGgiLCJFcnJvciIsIm9uQ2xpY2tPZkxpc3QiLCJlbG1EZWxlZ2F0b3IiLCJpc0FuY2hvciIsImVsbSIsInRhZ05hbWUiLCJlcnIiLCJ0YXJnZXQiLCJldnQiLCJ0ZXh0IiwibG9hZEluSWZyYW1lIiwiaGFzaFF1ZXJ5Iiwic3Vic3RyIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJGSVJTVF9JRlJBTUUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaWZyYW1lSGFuZGxlciIsImRvbUhlbHBlciIsIiQkIiwiZmlyc3RTdGF0ZSIsImNoZWNrU3RhdHVzIiwicmVzIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImZldGNoRXhhbXBsZSIsImlkIiwiZmV0Y2giLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsIndyaXRlRnJhbWUiLCJwYXJlbnQiLCJmcmFtZSIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0RnJhbWUiLCJuYW1lIiwiaW5qZWN0U3JjIiwic3JjIiwic3JjZG9jIiwiY3JlYXRlRnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRnJhbWVTcmMiLCJzcmNEb2MiLCJleGFtcGxlRXhpc3RzIiwiZXhhbXBsZSIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJlIiwiZmlyc3RGcmFtZSIsInBhcmVudERpdiIsIm5ld0ZyYW1lIiwiZXJyb3JEaWFsb2ciLCJleGlzdGluZ0ZyYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiaW5zZXJ0QWRqYWNlbnRUZXh0Iiwib2JqIiwiSFRNTEVsZW1lbnQiLCJtYXBUZXh0IiwiZWxtTGlzdCIsIml0ZW0iLCJwdXNoIiwiZXZlbnQiLCJjaGVja1RhcmdldCIsImNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJxcyIsInF1ZXJ5U2VsZWN0b3IiLCJxc0FsbCIsInF1ZXJ5U2VsZWN0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LGdCQUFPaUIsU0FBUyxJQUFULENBQVA7QUFDRCxRQVJEO0FBU0QsTUFWRDtBQVdELElBZkQ7O0FBaUJBLFVBQU8sRUFBQ25FLDBCQUFELEVBQWVMLG9CQUFmLEVBQTBCdUMsb0JBQTFCLEVBQVA7QUFDRCxFQTFERCxDOzs7Ozs7OztBQ0FBO0FBQ0FuQixRQUFPQyxPQUFQLEdBQWlCLFNBQVMvQixLQUFULENBQWVELFFBQWYsRUFBeUI7QUFDeENBLGNBQVdBLFlBQVksS0FBS0EsUUFBNUI7O0FBRUEsT0FBTVksSUFBSSxTQUFTeUUsRUFBVCxHQUFxQjtBQUFBOztBQUM3QixZQUFPLHVCQUFTQyxhQUFULDRCQUFQO0FBQ0QsSUFGRDs7QUFJQSxPQUFNbkQsS0FBSyxTQUFTb0QsS0FBVCxHQUF3QjtBQUFBOztBQUNqQyxZQUFPLHdCQUFTQyxnQkFBVCw2QkFBUDtBQUNELElBRkQ7O0FBSUEsVUFBTyxFQUFDNUUsSUFBRCxFQUFJdUIsTUFBSixFQUFQO0FBQ0QsRUFaRDtBQWFBLFkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODIzMTgxOTg0NzRhOTA5NTRlMjUiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cucGFydGljbGVMaWIgPSByZXF1aXJlKFwicGFydGljbGVfbGlicmFyeVwiKTtcbmNvbnN0IGlmcmFtZSA9IHJlcXVpcmUoXCJpZnJhbWVNYW5hZ2VyLmpzXCIpKGRvY3VtZW50KTtcbmNvbnN0IHNoaW1zID0gcmVxdWlyZShcInNoaW1zLmpzXCIpKGRvY3VtZW50KTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcImRvbV9oZWxwZXIuanNcIikoZG9jdW1lbnQpO1xuY29uc3QgREVGQVVMVF9FWEFNUExFID0gXCJyYW5kb21fdmVjdG9yc1wiO1xuXG5jb25zdCBzZXRoYXNoID0gKGZyYWdtZW50KSA9PiB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGZyYWdtZW50IHx8IFwiXCI7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICBjb25zdCBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgdGV4dE5vZGVzID0gdXRpbHMubWFwVG9UZXh0KFwiLmxpc3QtZXhhbXBsZXMgbGkgYVwiKTtcbiAgY29uc3QgJCA9IHNoaW1zLiQ7XG5cbiAgaWYgKHRleHROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZXMgbm8gdGV4dE5vZGVzIHRvIGNoZWNrIGFnYWluc3QuXCIpO1xuICB9XG5cbiAgc3dpdGNoIChwYXRobmFtZSkge1xuICBjYXNlKFwiL1wiKToge1xuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvZXhhbXBsZXNcIik6IHtcbiAgICBjb25zdCBvbkNsaWNrT2ZMaXN0ID0gdXRpbHMuZWxtRGVsZWdhdG9yKCQoXCIubGlzdC1leGFtcGxlc1wiKSwgXCJjbGlja1wiKTtcbiAgICBjb25zdCBpc0FuY2hvciA9IChlbG0pID0+IGVsbS50YWdOYW1lID09PSBcIkFcIjtcblxuICAgIG9uQ2xpY2tPZkxpc3QoaXNBbmNob3IsIGZ1bmN0aW9uKGVyciwgdGFyZ2V0LCBldnQpIHtcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgIGlmICghdGFyZ2V0ICYmICFldnQpIHJldHVybjtcblxuICAgICAgc2V0aGFzaCh0YXJnZXQudGV4dCk7XG4gICAgICBpZnJhbWUubG9hZEluSWZyYW1lKHRhcmdldC50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIElmIHRoZXJlcyBhIHBhZ2UgZnJhZ21lbnQgbG9hZCB0aGUgcmlnaHQgZXhhbXBsZS5cbiAgICBpZiAoaGFzaC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGhhc2hRdWVyeSA9IGhhc2guc3Vic3RyKDEpO1xuXG4gICAgICBpZiAodGV4dE5vZGVzLmluZGV4T2YoaGFzaFF1ZXJ5KSA+IC0xKSB7XG4gICAgICAgIGlmcmFtZS5sb2FkSW5JZnJhbWUoaGFzaFF1ZXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgIC8vIERlZmF1bHQgdG8gdGhlIGFuIGV4YW1wbGUgaWYgdGhlcmVzIG5vIGhhc2guXG4gICAgaWYgKGhhc2gubGVuZ3RoIDwgMSkge1xuICAgICAgc2V0aGFzaChERUZBVUxUX0VYQU1QTEUpO1xuICAgICAgaWZyYW1lLmxvYWRJbklmcmFtZShERUZBVUxUX0VYQU1QTEUpO1xuICAgIH1cbiAgICBicmVhaztcbiAgfVxuXG4gIGNhc2UoXCIvbWF0aHNcIik6IHtcbiAgICBicmVhaztcbiAgfVxuICBkZWZhdWx0OiB7XG4gICAgY29uc29sZS5sb2coXCJubyByb3V0ZSBtYXRjaGVkIDQwNCA6KFwiKTtcbiAgfVxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYXJ0aWNsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYXJ0aWNsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTlhOTEyYjJlYjMzZGJlZWRmZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi93ZWJwYWNrL2Jvb3RzdHJhcCAyZTlhOTEyYjJlYjMzZGJlZWRmZCIsImNvbnN0IFZlY3RvciA9IHJlcXVpcmUoXCIuL2xpYi92ZWN0b3JzXCIpO1xuY29uc3QgUGFydGljbGUgPSByZXF1aXJlKFwiLi9saWIvcGFydGljbGVcIik7XG5jb25zdCBVdGlscyA9IHJlcXVpcmUoXCIuL2xpYi91dGlsc1wiKTtcbmNvbnN0IFNoYXBlcyA9IHJlcXVpcmUoXCIuL2xpYi9zaGFwZXNcIik7XG5jb25zdCBZQVQgPSByZXF1aXJlKFwiLi9saWIvdHdlZW5cIik7XG5jb25zdCBDbG9jayA9IHJlcXVpcmUoXCIuL2xpYi9jbG9jay5qc1wiKTtcbmNvbnN0IFRpY2tlciA9IHJlcXVpcmUoXCIuL2xpYi90aWNrZXIuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBWZWN0b3IsXG4gIFBhcnRpY2xlLFxuICBVdGlscyxcbiAgU2hhcGVzLFxuICBZQVQsXG4gIFRpY2tlcixcbiAgQ2xvY2ssXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbWFpbi5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5cbi8vICAgICAgXG5cbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHg6IDAsXG4gIHk6IDEsXG59O1xuXG4vKipcbiAqIFZlY3RvciBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgZG9pbmcgdmVjdG9yIG9wZXJhdGlvbnMgYW5kIHN0b3JpbmdcbiAqIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHRoZSB2ZWN0b3IuXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgVmVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgb2JqZWN0LlxuICovXG5jbGFzcyBWZWN0b3Ige1xuICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgXG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge09iamVjdH0gc3RhdGUgSW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RhdGUgICAgICAgICA9IElOSVRJQUxfU1RBVEUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIC0gRWFzeSB3YXkgdG8gaW5zdGFudGlhdGUgYSB2ZWN0b3IuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7SW50fSB4XG4gICAqIEBwYXJhbSAge0ludH0geVxuICAgKiBAcmV0dXJuIHtWZWN0b3J9ICAgQSBvYmplY3QgaW5oZXJpdGluZyBmcm9tIFZlY3Rvci5cbiAgICovXG4gIGNyZWF0ZSh4ICAgICAgICAgPSAwLCB5ICAgICAgICAgPSAwKSAgICAgICAgIHtcbiAgICBjb25zdCB2ZWMgPSBuZXcgVmVjdG9yKHt4LCB5fSk7XG4gICAgcmV0dXJuIHZlYztcbiAgfTtcblxuICAvKipcbiAgICogU2V0IC0gQSBzZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7Kn0gcHJvcFxuICAgKiBAcGFyYW0gIHsqfSB2YWxcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gSXMgdGhlIHByb3AgeW91ciBwYXNzaW5nIGluIGV4c2lzdC5cbiAgICovXG4gIHNldChwcm9wICAgICAgICAsIHZhbCAgICAgKSAgICAgICAgICB7XG4gICAgLy8gVE9ETzogQWRkIGNoZWNrIHZhbCBpcyBudW1iZXJcbiAgICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgdGhpcy5zdGF0ZVtwcm9wXSA9IHZhbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0IC0gQSBnZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwcm9wICBUaGUgcHJvcCB0byBzZXQgb24gc3RhdGUuXG4gICAqIEByZXR1cm4ge1ZhbHVlfSAgICAgICAgVGhlIHZhbHVlIGFzc29zaWF0ZWQgd2l0aCB0aGUgcHJvcC5cbiAgICovXG4gIGdldChwcm9wICAgICAgICApICAgICAge1xuICAgIHJldHVybiB0aGlzLnN0YXRlW3Byb3BdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBzZXRBbmdsZSAtIFBsb3QgdGhlIGNvcnJkaW5hdGVzIGJhc2VkIG9uIHJhZGlhbnMgZ2l2ZW4uXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtSYWRpYW5zfSByYWQgQSBmbG9hdGluZyBwb2ludCBudW1iZXIuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICovXG4gIHNldEFuZ2xlKHJhZCAgICAgICAgKSAgICAgICAgIHtcbiAgICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAgIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gICAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIHNldExlbmd0aCAtIFRha2VzIGEgbGVuZ3RoIGFuZCBzZXRzIGNvb3JkaW5hdGUuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtJbnRlZ2VyfSBsZW5ndGhcbiAgICogQHJldHVybiB7VmVjdG9yfVxuICAgKi9cbiAgc2V0TGVuZ3RoKGxlbmd0aCAgICAgICAgKSAgICAgICAgIHtcbiAgICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAgIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICAgIGNvbnN0IHJhZCA9IHRoaXMuZ2V0QW5nbGUoKTtcblxuICAgIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogZ2V0TGVuZ3RoIC0gR2V0cyBsZW5ndGggb2YgdGhlIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEByZXR1cm4ge0ludGVnZXJ9IENvb3JpZGluYXRlcy5cbiAgICovXG4gIGdldExlbmd0aCgpICAgICAgICAge1xuICAgIGNvbnN0IHggPSAodGhpcy5nZXQoXCJ4XCIpICAgICAgICApO1xuICAgIGNvbnN0IHkgPSAodGhpcy5nZXQoXCJ5XCIpICAgICAgICApO1xuICAgIHJldHVybiBNYXRoLmh5cG90KHgsIHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBnZXRBbmdsZSAtIEdldCB0aGUgYW5nbGUgb2YgY29vcmRpbmF0ZXMgZnJvbSBjZW50ZXIgcGxhbmUuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHJldHVybiB7SW50ZWdlcn0gQ29vcmlkaW5hdGVzLlxuICAgKi9cbiAgZ2V0QW5nbGUoKSAgICAgICAgIHtcbiAgICBjb25zdCB4ID0gKHRoaXMuZ2V0KFwieFwiKSAgICAgICAgKTtcbiAgICBjb25zdCB5ID0gKHRoaXMuZ2V0KFwieVwiKSAgICAgICAgKTtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbiAgfTtcblxuICAvKipcbiAgICogcmFuZG9tIGdlbmVyYXRlIGEgdmVjdG9yIHdpdGggcmFuZG9tIHN0YXRlcy5cbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIC0gQSBtaW4gcmFuZ2Ugb24gdGhlIHJhbmRvbSB2ZWN0b3Igc3RhdGUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggLSBBIG1heCByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAgICogQHJldHVybiB7VmVjdG9yfVxuICAgKi9cbiAgcmFuZG9tKG1pbiAgICAgICAgPTEsIG1heCAgICAgICAgPTEwKSAgICAgICAgIHtcbiAgICBjb25zdCB4ID0gdXRpbHMubGVycChNYXRoLnJhbmRvbSgpLCBtaW4sIG1heCk7XG4gICAgY29uc3QgeSA9IHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAZGVzY3JpcHRpb24gUmV0dXJuIGEgdmVjdG9yIHRoYXQgaGFzIGEgeCBiZXR3ZWVuIHRoZSBnaXZlbiByYW5nZS5cbiAgICogICAgICAgICAgICAgIGFuZCB5IGdpdmVuIGEgcmFuZ2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geE1pbiBNaW5tdW0geCB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhNYXggTWF4aW11bSB4IHZhbHVlXG4gICAqIEBwYXJhbSAge051bWJlcn0geU1pbiBNaW5tdW0geSB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlNYXggTWF4aW11bSB5IHZhbHVlXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICovXG4gIHJhbmRvbUJldHdlZW4oeE1pbiAgICAgICAgPTAsIHhNYXggICAgICAgID0xMCwgeU1pbiAgICAgICAgPTAsIHlNYXggICAgICAgID0xMCkgICAgICAgICB7XG4gICAgeE1heCA9IE1hdGgubWF4KHhNaW4sIHhNYXgpO1xuICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCB4TWF4KTtcbiAgICB5TWF4ID0gTWF0aC5tYXgoeU1pbiwgeU1heCk7XG4gICAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHlNYXgpO1xuXG4gICAgY29uc3QgeSA9ICh1dGlscy5yYW5kb21CZXR3ZWVuKHlNaW4sIHlNYXgpICAgICAgICApO1xuICAgIGNvbnN0IHggPSAodXRpbHMucmFuZG9tQmV0d2Vlbih4TWluLCB4TWF4KSAgICAgICAgKTtcblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbiAgfTtcblxuICAvKipcbiAgICogYWRkIC0gU2hvdWxkIGFkZCB2ZWN0b3JzIHRvZ2V0aGVyIGdpdmVuIGEgdmVjdG9yXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IHYyIEEgZ2l2ZW4gdmVjdG9yIHRvIGFkZC5cbiAgICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB3aXRoIGNvb3JpZG5hdGVzLCBvciBtdWx0aXBsZSB2ZWN0b3JzLlxuICAgKi9cbiAgYWRkKHYyICAgICAgICApICAgICAgICAge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICAgIHRoaXMuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIiksXG4gICAgICB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogc3VidHJhY3QgLSBzaG91bGQgc3VidHJhY3QgdGhlIGdpdmVuIHZlY3RvciB3aXRoIGl0cyBvd24gdmVjdG9yLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAgICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9IC0ge3g6IDIsIHk6IDJ9ID0ge3g6IDAsIHk6IDB9XG4gICAqL1xuICBzdWJ0cmFjdCh2MiAgICAgICAgKSAgICAgICAgIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgICB0aGlzLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpLFxuICAgICAgdGhpcy5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE11bGl0cGx5aW5nIHZlY3RvcnMgdG9nZXRoZXJcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAZXhhbXBsZSB7eDogMiwgeTogMn0gKiB7eDogMiwgeTogMn0gPSB7eDogNCwgeTogNH1cbiAgICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICAgKi9cbiAgbXVsdGlwbHkodjIgICAgICAgICkgICAgICAgICB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgICAgdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKSxcbiAgICAgIHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXZpZGUgdmVjdG9ycyB0b2dldGhlci5cbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn0gICAgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gICAqL1xuICBkaXZpZGUodjIgICAgICAgICkgICAgICAgICB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgICAgdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKSxcbiAgICAgIHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIHRvIGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICAgKi9cbiAgYWRkVG8odjIgICAgICAgICkgICAgICAgICB7XG4gICAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKTtcbiAgICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdWJ0cmFjdHMgZnJvbSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAgICovXG4gIHN1YnRyYWN0RnJvbSh2MiAgICAgICAgKSAgICAgICAgIHtcbiAgICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpO1xuICAgIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIG11bGl0cGxpZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gICAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gICAqL1xuICBtdWx0aXBseUJ5KHYyICAgICAgICApICAgICAgICAge1xuICAgIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIik7XG4gICAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBEaXZpZGVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICAgKi9cbiAgZGl2aWRlQnkodjIgICAgICAgICkgICAgICAgICB7XG4gICAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKTtcbiAgICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBhbmdsZSBBIG51bWJlciBvZiByYWRpYW5zIHRvIHJvdGF0ZSBjbG9ja3dpc2UgYnkuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgKi9cbiAgcm90YXRlQnkoYW5nbGUgICAgICAgICkgICAgICAgICB7XG4gICAgY29uc3QgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgIGNvbnN0IHggPSB0aGlzLnN0YXRlLnggKiBjb3MgLSB0aGlzLnN0YXRlLnkgKiBzaW47XG4gICAgY29uc3QgeSA9IHRoaXMuc3RhdGUueSAqIGNvcyArIHRoaXMuc3RhdGUueCAqIHNpbjtcblxuICAgIHRoaXMuc3RhdGUueCA9IHg7XG4gICAgdGhpcy5zdGF0ZS55ID0geTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiB2MVxuICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdjEgVmVjdG9yXG4gICAqIEBwYXJhbSB7VmVjdG9yfSB2MiBWZWN0b3JcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGRpc3RhbmNlQmV0d2Vlbih2MSAgICAgICAgLCB2MiAgICAgICAgKSAgICAgICAgIHtcbiAgICBjb25zdCBkVmVjID0gdjEuc3VidHJhY3QodjIpO1xuICAgIHJldHVybiBNYXRoLmh5cG90KGRWZWMuZ2V0KFwieFwiKSwgZFZlYy5nZXQoXCJ5XCIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvcyB2ZWN0b3JzIHNlZSBpZiB0aGV5IGludGVyc2VjdC5cbiAgICogQG1lbWJlck9mIFV0aWxzXG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMFxuICAgKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzFcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyB2ZWN0b3JJbnRlcnNlY3QodmVjMCAgICAgICAgLCB2ZWMxICAgICAgICApICAgICAgICAgIHtcbiAgICBjb25zdCB4MCA9IHZlYzAuZ2V0KFwieFwiKTtcbiAgICBjb25zdCB5MCA9IHZlYzAuZ2V0KFwieVwiKTtcbiAgICBjb25zdCB4MSA9IHZlYzEuZ2V0KFwieFwiKTtcbiAgICBjb25zdCB5MSA9IHZlYzEuZ2V0KFwieVwiKTtcbiAgICByZXR1cm4gdXRpbHMucmFuZ2VJbnRlcnNlY3QoeDAsIHkwLCB4MSwgeTEpO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3ZlY3RvcnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3ZlY3RvcnMuanMiLCIvLyAgICAgIFxuXG4vKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIGNvbXBvc2VkIG9mIHNtYWxsIGZ1bmN0aW9uIHRoYXRcbiAqIHNob3VsZCBiZSB1c2VkIHdoZW4gbmVlZGVkLiBNb3N0IGZ1bmN0aW9ucyBhcmUgcHVyZVxuICogYW5kIG9ubHkgcmV0dXJuIHZhbHVlcy4gRm9yIG1vcmUgaW5mbyByZWFkIHRoZSBkb2NzLlxuICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4vKipcbiAqIG5vcm1hbGl6ZSAtIFRha2VzIGEgbWF4IGFuZCBtaW4gdmFsdWUgYW5kIHJldHVybnNcbiAqIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLCB0aGF0IHdoZW4gbXVsdGlwbGllZFxuICogYnkgb25lIGh1bmRyZWQgcmVwcmVzZW50cyBhIHByZWNlbnRhZ2Ugb2YgdGhlIHJhbmdlXG4gKiBiZXR3ZWVuIG1heCBhbmQgbWluLlxuICpcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50fSB2YWwgLSBUaGUgdmFsdWUgdGhhdCBsaWVzIGluIHRoZSByYW5nZS5cbiAqIEBwYXJhbSAge0ludH0gbWluIC0gVGhlIG1heGl1bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1heCAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAqIEByZXR1cm4ge0ludH0gSW50IC0gVGhlIHZhbHVlIHJlcHJlc2VudGVkIGluIHRoYXQgcmFuZ2UuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwgICAgICAgICwgbWluICAgICAgICAsIG1heCAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuICgodmFsIC0gbWluKSAvIChtYXggLSBtaW4pICAgICAgICApO1xufTtcblxuLyoqXG4gKiBsZXJwIC0gbGluZWFyIGludGVycG9sYXRpb24gdGFrZXMgYSByYW5nZSBhbmQgYSBnaXZlbiBub3JtYWxpemVkIHZhbHVlXG4gKiBhbmQgcmV0dXJucyBhIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGF0IG5vcm1hbGl6ZWQgdmFsdWUgaW4gdGhhdCByYW5nZS5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50ZXJnZXJ9IHZhbFxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1pblxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1heFxuICogQHJldHVybiB7SW50ZXJnZXJ9XG4gKi9cbmZ1bmN0aW9uIGxlcnAodmFsICAgICAgICAsIG1pbiAgICAgICAgLCBtYXggICAgICAgICkgICAgICAgICB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIHZhbCArIG1pbjtcbn07XG5cbi8qKlxuICogbWFwIC0gR2l2ZW4gMiBzZXQgb2YgdmFsdWVzIG1hcCB0aGVtIHRvIGFub3RoZXIgc2V0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNyY01pblxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNYXhcbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1pblxuICogQHBhcmFtICB7bnVtYmVyfSBkZXN0TWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG1hcCh2YWx1ZSAgICAgICAgLCBzcmNNaW4gICAgICAgICwgc3JjTWF4ICAgICAgICAsIGRlc3RNaW4gICAgICAgICwgZGVzdE1heCAgICAgICAgKSAgICAgICAgIHtcbiAgc3JjTWF4ID0gKE1hdGgubWF4KHNyY01heCwgc3JjTWluKSAgICAgICAgKTtcbiAgc3JjTWluID0gKE1hdGgubWluKHNyY01heCwgc3JjTWluKSAgICAgICAgKTtcbiAgZGVzdE1pbiA9IChNYXRoLm1pbihkZXN0TWluLCBkZXN0TWF4KSAgICAgICAgKTtcbiAgZGVzdE1heCA9IChNYXRoLm1heChkZXN0TWluLCBkZXN0TWF4KSAgICAgICAgKTtcbiAgcmV0dXJuIGxlcnAobm9ybWFsaXplKHZhbHVlLCBzcmNNaW4sIHNyY01heCksIGRlc3RNaW4sIGRlc3RNYXgpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHByZWNlbnRhZ2UuXG4gKiAgICAgICAgICAgICAgeW91IGNhbiBwYXNzIGFyYml0cmFyeSBsYXJnZSBudW1iZXJzIGluIGJ1dCB0aGF0cyBub3RcbiAqICAgICAgICAgICAgICB0aGUgaW50ZW5kZWQgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7RmxvYXR9IHZhbCBcdEEgdmFsdWUuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEByZXR1cm4ge1BlcmNlbnR9ICAgIEEgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHBlcmNlbnQodmFsICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gKCh2YWwgKiAxMDApICAgICAgICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBudW1iZXIgYW5kIGEgcmFuZ2UgcmV0dXJuIHRoZVxuICogICAgICAgICAgICAgIHZhbHVlIGJldHdlZW4gdGhhdCByYW5nZSBvciB0aGUgbWF4IG51bWJlciBvciBtaW4gbnVtYmVyLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUgICAgICAgICwgbWluICAgICAgICAsIG1heCAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihtaW4sIG1heCkpLCBNYXRoLm1heChtaW4sIG1heCkpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIG51bWJlcnMgcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB4XG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB5XG4gKiBAcmV0dXJuIHtJbnRlZ2VyfVxuICovXG5mdW5jdGlvbiByYW5kb21CZXR3ZWVuKHggICAgICAgICwgeSAgICAgICAgKSAgICAgICAgIHtcbiAgbGV0IG1pbiA9IE1hdGgubWluKHgsIHkpO1xuICBsZXQgbWF4ID0gTWF0aC5tYXgoeCwgeSk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gY29vcmRpbmF0ZXMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2VYWSh4MCAgICAgICAgLCB5MCAgICAgICAgLCB4MSAgICAgICAgLCB5MSAgICAgICAgKSAgICAgICAgIHtcbiAgY29uc3QgZHggPSB4MCAtIHgxO1xuICBjb25zdCBkeSA9IHkwIC0geTE7XG4gIHJldHVybiBNYXRoLmh5cG90KGR4LCBkeSk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBnaXZlbiBhIG51bWJlclxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbFxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpblJhbmdlKHZhbCAgICAgICAgLCBtaW4gICAgICAgICwgbWF4ICAgICAgICApICAgICAgICAgIHtcbiAgcmV0dXJuICh2YWwgPD0gTWF0aC5tYXgobWF4LCBtaW4pKSAmJiAoTWF0aC5taW4obWF4LCBtaW4pIDw9IHZhbCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHR3byByYW5nZXMgc2VlIGlmIGJvdGggaW50ZXJzZWN0IGVhY2ggb3RoZXIuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gbWluMFxuICogQHBhcmFtICB7TnVtYmVyfSBtYXgwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pbjFcbiAqIEBwYXJhbSAge051bWJlcn0gbWF4MVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmFuZ2VJbnRlcnNlY3QobWluMCAgICAgICAgLCBtYXgwICAgICAgICAsIG1pbjEgICAgICAgICwgbWF4MSAgICAgICAgKSAgICAgICAgICB7XG4gIHJldHVybiAoXG4gICAgTWF0aC5tYXgobWF4MCwgbWluMCkgPj0gTWF0aC5taW4obWluMSwgbWF4MSkgJiZcbiAgICBNYXRoLm1pbihtaW4wLCBtYXgwKSA8PSBNYXRoLm1heChtYXgxLCBtaW4xKVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHJlY3RhbmdlIHNlZSBpZiB0aGUgaW50ZXJzZWN0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcjBcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByMVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uUmVjdChyMCAgICAgLCByMSAgICAgKSB7XG4gIGNvbnN0IHIweCA9IHIwLnN0YXRlLng7XG4gIGNvbnN0IHIweSA9IHIwLnN0YXRlLnk7XG4gIGNvbnN0IHIxeCA9IHIxLnN0YXRlLng7XG4gIGNvbnN0IHIxeSA9IHIxLnN0YXRlLnk7XG5cbiAgY29uc3QgcjB3ID0gcjB4ICsgcjAuc3RhdGUud2lkdGg7XG4gIGNvbnN0IHIwaCA9IHIweSArIHIwLnN0YXRlLmhlaWdodDtcbiAgY29uc3QgcjF3ID0gcjF4ICsgcjEuc3RhdGUud2lkdGg7XG4gIGNvbnN0IHIxaCA9IHIxeSArIHIxLnN0YXRlLmhlaWdodDtcblxuICByZXR1cm4gKFxuICAgIHJhbmdlSW50ZXJzZWN0KHIweCwgcjB3LCByMXgsIHIxdykgJiZcbiAgICByYW5nZUludGVyc2VjdChyMHksIHIwaCwgcjF5LCByMWgpXG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0byBwYXJ0aWNsZSB3aXRoIHJhZGkgcmV0dXJuIHdldGhlciB0aGV5IGNvbGxpZGUgYXJlIG5vdFxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gYzFcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjMlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uQ2lyY2xlKGMxICAgICAsIGMyICAgICApICAgICAgICAgIHtcbiAgY29uc3QgcmFkaSA9IChjMS5zdGF0ZS5yYWRpdXMgKyBjMi5zdGF0ZS5yYWRpdXMpO1xuICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlWFkoYzEuc3RhdGUueCwgYzEuc3RhdGUueSwgYzIuc3RhdGUueCwgYzIuc3RhdGUueSk7XG5cbiAgaWYgKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIHJhZGkgPiBkaXN0YW5jZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwb2ludCBhbmQgYSBjaXJjbGUgcmV0dXJuIGEgYm9vbGVhbiByZWdhcmRpbmcgd2V0aGVyIHRoZXkgYXJlIGNvbGxpZGluZy5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSAgIHhcbiAqIEBwYXJhbSAge051bWJlcn0gICB5XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gY2lyY2xlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb2xsaXNpb25DaXJjbGVQb2ludCh4ICAgICAgICAsIHkgICAgICAgICwgY2lyY2xlICAgICApIHtcbiAgLy8gVE9ETyBXcml0ZSB0ZXN0cy5cbiAgY29uc3QgZGlzdCA9IGRpc3RhbmNlWFkoXG4gICAgeCxcbiAgICB5LFxuICAgIGNpcmNsZS5zdGF0ZS54LFxuICAgIGNpcmNsZS5zdGF0ZS55XG4gICk7XG5cbiAgcmV0dXJuIGNpcmNsZS5zdGF0ZS5yYWRpdXMgPiBkaXN0O1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGEgY29sbGlzaW9uIGJldHdlZW4gY2lyY2xlcyBhIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSAgIHZlY1xuICogQHBhcmFtICB7UGFydGljbGV9IGNpcmNsZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uQ2lyY2xlVmVjKHZlYyAgICAgICAgLCBjaXJjbGUgICAgICkge1xuICByZXR1cm4gY2lyY2xlLnN0YXRlLnJhZGl1cyA+IGRpc3RhbmNlWFkoXG4gICAgdmVjLmdldChcInhcIiksXG4gICAgdmVjLmdldChcInlcIiksXG4gICAgY2lyY2xlLnN0YXRlLngsXG4gICAgY2lyY2xlLnN0YXRlLnlcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGRldGVjdCBjb2xsaXNpb24gb2YgYSByZWN0YW5nbGUgYW5kIGEgcG9pbnQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gICB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeVxuICogQHBhcmFtICB7UGFydGljbGV9IHJlY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbGxpc2lvblJlY3RQb2ludCh4ICAgICAgICAsIHkgICAgICAgICwgcmVjdCAgICAgKSB7XG4gIGNvbnN0IHJlY3RYID0gcmVjdC5zdGF0ZS54O1xuICBjb25zdCByZWN0WSA9IHJlY3Quc3RhdGUueTtcbiAgcmV0dXJuIChcbiAgICBpblJhbmdlKHgsIHJlY3RYLCByZWN0WCArIHJlY3Quc3RhdGUud2lkdGgpICYmXG4gICAgaW5SYW5nZSh5LCByZWN0WSwgcmVjdFkgKyByZWN0LnN0YXRlLmhlaWdodClcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgdmVjdG9yIGFuZCBhIHJldGFuZ2xlIGNoZWNrIHdldGhlciB0aGV5IGNvbGxpZGVkLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9ICAgdmVjXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcmVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uUmVjdFZlYyh2ZWMgICAgICAgICwgcmVjdCAgICAgKSB7XG4gIHJldHVybiBjb2xsaXNpb25SZWN0UG9pbnQodmVjLmdldChcInhcIiksIHZlYy5nZXQoXCJ5XCIpLCByZWN0KTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gUnVuIGEgZnVuY3Rpb24gb25seSBpZiB0aGUgZ2l2ZW4gdGltZSB0byBhbGxvdyB0aGUgZnVuY3Rpb24gZXhlY3V0ZVxuICogaGFzIHBhc3NlZC4gSWZcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmdW5jIEEgZnVuY3Rpb24gdG8gY2FsbCBldmVyeSBkZWx0YS5cbiAqIEBwYXJhbSAge051bWJlcn0gd2FpdCBUaGUgbWluaW11bSB0aW1lIHRvIHdhaXQuXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSB1bmRlcnNjb3JlXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMgICAgICAgICAgLCB3YWl0ICAgICAgICAsIG9wdGlvbnMgICAgICkge1xuICBsZXQgY29udGV4dDtcbiAgbGV0IGFyZ3MgICAgIDtcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICBsZXQgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogRGF0ZS5ub3coKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncyAgICAgKSB7XG4gICAgbGV0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICBsZXQgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IChhcmdzICAgICApO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIC0gU2V0dGluZyB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yLlxuICogQHBhcmFtICAge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0gICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJuICB7bnVtYmVyW119IENvb3JkaW5hdGVzXG4gKi9cbmZ1bmN0aW9uIHNldExlbmd0aChsZW5ndGggICAgICAgICwgeCAgICAgICAgLCB5ICAgICAgICApICAgICAgICAgICAgICAgIHtcbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgeSAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIGxlbmd0aCAhPT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIHggYW5kIHkgdmFsdWVzXCIpO1xuICB9XG5cbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHksIHgpO1xuICB4ID0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoO1xuICB5ID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuXG4gIHJldHVybiBbeCwgeV07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIC0gU2V0dGluZyB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBhbmdsZVxuICogQHBhcmFtICAge251bWJlcn0geFxuICogQHBhcmFtICAge251bWJlcn0geVxuICogQHJldHVybiAge251bWJlcltdfSBjb29yZGluYXRlc1xuICovXG5mdW5jdGlvbiBzZXRBbmdsZShhbmdsZSAgICAgICAgLCB4ICAgICAgICAsIHkgICAgICAgICkgICAgICAgICAgICAgICAge1xuICBpZiAodHlwZW9mIHggIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiB5ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgYW5nbGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCB4IGFuZCB5IHZhbHVlc1wiKTtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoeCwgeSk7XG4gIHggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gIHkgPSBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGg7XG5cbiAgcmV0dXJuIFt4LCB5XTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gQ292ZXJ0cyBkZWdyZWVzIHRvIHJhZGlhbnNcbiAqIEBwYXJhbSAge251bWJlcn0gZGVnIERlZ3Jlc3NcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGVnVG9SYWQoZGVnICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gZGVnIC8gMTgwICogTWF0aC5QSTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gQ292ZXJ0cyByYWRpYW5zIHRvIGRlZ3Jlc3NcbiAqIEBwYXJhbSAge251bWJlcn0gcmFkXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHJhZFRvRGVnKHJhZCAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIFJvdW5kIHRvIG5lYXJlc3QgcGxhY2UgZ2l2ZW4uXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbFxuICogQHBhcmFtICB7bnVtYmVyfSBwbGFjZXMgQW4gZXhwb25lbnRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcm91bmRUb1BsYWNlcyh2YWwgICAgICAgICwgcGxhY2VzICAgICAgICApICAgICAgICAge1xuICBjb25zdCBtdWx0ID0gTWF0aC5wb3coMTAsIHBsYWNlcyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIG11bHQpIC8gbXVsdDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbFxuICogQHBhcmFtICB7bnVtYmVyfSBuZWFyZXN0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHJvdW5kVG9NdWx0aXBsZSh2YWwgICAgICAgICwgbmVhcmVzdCAgICAgICAgKSAgICAgICAgIHtcbiAgaWYgKCFuZWFyZXN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90aGluZyBjYW4gYmUgYSBtdWx0aXBsZSBvZiBcIiArIFN0cmluZyhuZWFyZXN0KSk7XG4gIH1cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsIC8gbmVhcmVzdCkgKiBuZWFyZXN0O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gdjBcbiAqIEBwYXJhbSAge251bWJlcn0gdjFcbiAqIEBwYXJhbSAge251bWJlcn0gdjJcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7bnVtYmVyfSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcXVhZHJhdGljQmV6aWVyKHYwICAgICAgICAsIHYxICAgICAgICAsIHYyICAgICAgICAsIHQgICAgICAgICkgICAgICAgICB7XG4gIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMikgKiB2MCArICgxIC0gdCkgKiAyICogdCAqIHYxICsgdCAqIHQgKiB2Mjtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge251bWJlcn0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKHYwICAgICAgICAgLCB2MSAgICAgICAgICwgdjIgICAgICAgICAsIHYzICAgICAgICAgLCB0ICAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuIE1hdGgucG93KDEgLSB0LCAzKSAqIHYwICtcbiAgICAgICAgIE1hdGgucG93KDEgLSB0LCAyKSAqIDMgKiB0ICogdjEgK1xuICAgICAgICAgKDEgLSB0KSAqIDMgKiB0ICogdCAqIHYyICtcbiAgICAgICAgIHQgKiB0ICogdCArIHYzO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcXVhZHJhdGljQmV6aWVyUG9pbnQocDAgICAgICwgcDEgICAgICwgcDIgICAgICwgdCAgICAgICAgKSB7XG4gIGNvbnN0IHggPSBxdWFkcmF0aWNCZXppZXIocDAueCwgcDEueCwgcDIueCwgdCk7XG4gIGNvbnN0IHkgPSBxdWFkcmF0aWNCZXppZXIocDAueSwgcDEueSwgcDIueSwgdCk7XG4gIHJldHVybiB7eCwgeX07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSBwMFxuICogQHBhcmFtICB7bnVtYmVyfSBwMVxuICogQHBhcmFtICB7bnVtYmVyfSBwMlxuICogQHBhcmFtICB7bnVtYmVyfSBwM1xuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtPYmplY3R9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjdWJpY0JlemllclBvaW50KHAwICAgICAsIHAxICAgICAsIHAyICAgICAsIHAzICAgICAsIHQgICAgICAgICkge1xuICBjb25zdCB4ID0gY3ViaWNCZXppZXIocDAueCwgcDEueCwgcDIueCwgcDMueCwgdCk7XG4gIGNvbnN0IHkgPSBjdWJpY0JlemllcihwMC55LCBwMS55LCBwMi55LCBwMy55LCB0KTtcbiAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gcG9pbnRzIG9uIHRoZSBwbGFuZSBkcmF3IGEgY3VydmVkIGxpbmUgYmV0d2VlblxuICogYWxsIG9mIHRoZW0uXG4gKiBAcGFyYW0gIHt7bnVtYmVyLCBudW1iZXJ9fSBwb2ludHNcbiAqIEBwYXJhbSAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XG4gKi9cbmZ1bmN0aW9uIG11bHRpQ3VydmUocG9pbnRzICAgICAgICAgICAgLCBjdHggICAgICAgICkge1xuICBsZXQgcDA7XG4gIGxldCBwMTtcbiAgbGV0IG1pZFg7XG4gIGxldCBtaWRZO1xuXG4gIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICBwMCA9IHBvaW50c1tpXTtcbiAgICBwMSA9IHBvaW50c1tpICsgMV07XG4gICAgbWlkWCA9IChwMC54ICsgcDEueCkvMjtcbiAgICBtaWRZID0gKHAwLnkgKyBwMS55KS8yO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIG1pZFgsIG1pZFkpO1xuICB9XG5cbiAgcDAgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdO1xuICBwMSA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIHAxLngsIHAxLnkpO1xufTtcblxuLyoqXG4gKiBlYXNlXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0Zsb2F0fSBlYXNlXG4gKiBAcGFyYW0gIHtJbnR9IGFcbiAqIEBwYXJhbSAge0ludH0gYlxuICogQHBhcmFtICB7bnVtYmVyfSB0aHJlc2hvbGRcbiAqIEByZXR1cm4ge0ludH1cbiAqL1xuZnVuY3Rpb24gZWFzZShlYXNlICAgICAgICAsIGEgICAgICAgICwgYiAgICAgICAgLCB0aHJlc2hvbGQgICAgICAgICA9IDAuMSkgICAgICAgICAgICAgICAgICAge1xuICAvLyB0aGUgZGVsdGEgY2FuIGdldCBleHRyZW1lbHkgc21hbGwgYW5kIGl0cyBub3QgcGVyZm9ybWFudCB0byBrZWVwXG4gIC8vIG9uIHJlbmRlcmluZyBvciBjYWxjdWxhdGluZyBmb3IgYW5pbWF0aW9uIHB1cnBvc2VzLlxuICBpZiAoTWF0aC5hYnMoYiAtIGEpIDwgdGhyZXNob2xkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChiIC0gYSkgKiBlYXNlO1xufTtcblxuLyoqXG4gKiBlYXNlVG9cbiAqIEBwYXJhbSAge251bWJlcn0gZWFzZTogICAgICBudW1iZXIgICAgICAgIEVhc2UgZmFjdG9yLlxuICogQHBhcmFtICB7T2JqZWN0fSBvcmlnaW46ICAgIE9iamVjdCAgICAgICAgVGhlIHN0YXJ0aW5nIHBvaW50LlxuICogQHBhcmFtICB7T2JqZWN0fSB0YXJnZXQ6ICAgIE9iamVjdCAgICAgICAgVGhlIGVuZGluZyBwb2ludC5cbiAqIEBwYXJhbSAge051bWJlcn0gdGhyZXNob2xkOiBudW1iZXIgICAgICAgIEVhc2luZyB0aHJlc2hvbGQuXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGVhc2VUbyhlYXNlICAgICAgICAsIG9yaWdpbiAgICAgICAgLCB0YXJnZXQgICAgICAgICwgdGhyZXNob2xkICAgICAgICA9MC4xKSB7XG4gIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgY29uc3QgZHkgPSB0YXJnZXQueSAtIG9yaWdpbi55O1xuXG4gIC8vIHRoZSBkZWx0YSBjYW4gZ2V0IGV4dHJlbWVseSBzbWFsbCBhbmQgaXRzIG5vdCBwZXJmb3JtYW50IHRvIGtlZXBcbiAgLy8gb24gcmVuZGVyaW5nIG9yIGNhbGN1bGF0aW5nIGZvciBhbmltYXRpb24gcHVycG9zZXMuXG4gIGlmIChNYXRoLmFicyhkeCkgPCB0aHJlc2hvbGQgJiYgTWF0aC5hYnMoZHkpIDwgdGhyZXNob2xkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb3JpZ2luLnggKz0gZHggKiBlYXNlO1xuICBvcmlnaW4ueSArPSBkeSAqIGVhc2U7XG5cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbi8qKlxuICogaXNQbGFpbk9iamVjdFxuICogQHBhcmFtICB7Kn0gIGRhdGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KGRhdGEgICAgICkgICAgICAgICAge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgKHt9KS50b1N0cmluZy5jYWxsKGRhdGEpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufTtcblxuLyoqXG4gKiB1bmlxdWUgcmV0dXJuIGFuIGFycmF5IHdpdGggbm8gZHVwbGljYXRlIHZhbHVlc1xuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gdW5pcXVlKGFycmF5ICAgICAgICAgICAgKSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKHgsIHkpID0+IHtcbiAgICBpZiAoeC5pbmRleE9mKHkpID09PSAtMSkgeC5wdXNoKHkpO1xuICAgIHJldHVybiB4O1xuICB9LCBbXSk7XG59O1xuXG4vLyBmdW5jdGlvbiBjb2xvckludGVycG9sYXRpb24oZmxvYXQ6IG51bWJlciwgY29sb3JGcm9tOiBDb2xvciwgY29sb3JUbzogQ29sb3IpIDogQ29sb3Ige1xuLy8gICBjb25zdCB7cjEsIGcxLCBiMX0gPSBjb2xvckZyb207XG4vLyAgIGNvbnN0IHtyMiwgZzIsIGIyfSA9IGNvbG9yVG87XG5cbi8vICAgY29uc3QgciA9IHIxICsgKHIyIC0gcjEpIC8gZmxvYXQ7XG4vLyAgIGNvbnN0IGcgPSBnMSArIChnMiAtIGcxKSAvIGZsb2F0O1xuLy8gICBjb25zdCBiID0gYjEgKyAoYjIgLSBiMSkgLyBmbG9hdDtcblxuLy8gICByZXR1cm4gXCJzb21lSGV4XCI7XG4vLyB9O1xuXG4vKipcbiAqIHBlcnNwZWN0aXZlIC0gcGVyc3BlY3RpdmUgaXMgdGhlIHJhdGlvIHRvIG11bHRpcGx5IHRoZSB4IGFuZCB5IHZhbHVlc1xuICogYnkgdG8gZ2V0IHRob3NlIHBvaW50cyByZXByZXNlbmV0ZWQgaW4gM2Qgc3BhY2UuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGZvY2FsTGVuZ3RoOiBUaGUgbGVuZ3RoIG9mIHRoZSBsZW5zXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRpc3RhbmNlOiAgICBUaGUgZGlzdGFuY2UgZnJvbSBiZWdpbmluZyBvZiB0aGUgbGVucyB0aGUgdGhlIGJlZ2luZ2luZyBvZiB0aGUgb2JqZWN0LlxuICogQHJldHVybiB7bnVtYmVyfWBgXG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZvY2FsTGVuZ3RoICAgICAgICAsIGRpc3RhbmNlICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gZm9jYWxMZW5ndGggLyAoZm9jYWxMZW5ndGggLSBkaXN0YW5jZSk7XG59O1xuXG4vKipcbiAqIEBjbGFzcyBVdGlsc1xuICogQHJldHVybiB7VXRpbHN9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5vcm1hbGl6ZSxcbiAgbGVycCxcbiAgbWFwLFxuICBwZXJjZW50LFxuICBjbGFtcCxcbiAgcmFuZG9tQmV0d2VlbixcbiAgZGlzdGFuY2VYWSxcbiAgaW5SYW5nZSxcbiAgcmFuZ2VJbnRlcnNlY3QsXG4gIGNvbGxpc2lvblJlY3QsXG4gIGNvbGxpc2lvbkNpcmNsZSxcbiAgY29sbGlzaW9uQ2lyY2xlUG9pbnQsXG4gIGNvbGxpc2lvbkNpcmNsZVZlYyxcbiAgY29sbGlzaW9uUmVjdFBvaW50LFxuICBjb2xsaXNpb25SZWN0VmVjLFxuICB0aHJvdHRsZSxcbiAgc2V0TGVuZ3RoLFxuICBzZXRBbmdsZSxcbiAgZGVnVG9SYWQsXG4gIHJhZFRvRGVnLFxuICByb3VuZFRvUGxhY2VzLFxuICByb3VuZFRvTXVsdGlwbGUsXG4gIHF1YWRyYXRpY0JlemllcixcbiAgY3ViaWNCZXppZXIsXG4gIHF1YWRyYXRpY0JlemllclBvaW50LFxuICBjdWJpY0JlemllclBvaW50LFxuICBtdWx0aUN1cnZlLFxuICBwZXJzcGVjdGl2ZSxcbiAgZWFzZSxcbiAgZWFzZVRvLFxuICBpc09iamVjdCxcbiAgdW5pcXVlLFxufTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlKFV0aWxzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdXRpbHMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3V0aWxzLmpzIiwiLy8gICAgICBcblxuLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuLypcbiogVGhlIHBhcnRpY2xlIGxpYmFyeSBpcyB1c2VkIGZvciBwaHlzaWNzIGFuaW1hdGlvbnMuXG4qIHRoZXkgYXJlIG5vdCBleHRyZW1lbHkgYWNjdXJhdGUgYnV0IHN0aWxsIHJlcHJlc2VudFxuKiBhbmQgZmVlbCBzb21ld2hhdCBsaWtlIHBoeXNpY2FsIG1vdm1lbnRzLlxuKi9cblxuY29uc3QgZXh0ZW5kID0gcmVxdWlyZShcImV4dGVuZFwiKTtcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG5cblxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gIFxuXG5cbi8qIFRoZSBkZWZhdWx0IHN0YXRlIGEgcGFydGljbGUgc3RhcnRzIHdpdGggSXQgc2hvdWxkIG5vdCBtb3ZlLiAqL1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gIFxuXG5jb25zdCBJTklUSUFMX1NUQVRFICAgICAgICA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgdng6IDAsXG4gIHZ5OiAwLFxuICBncmF2aXR5OiAwLFxuICBtYWduaXR1ZGU6IDAsXG4gIHJhZGl1czogMSxcbiAgbWFzczogMSxcbiAgZGlyZWN0aW9uOiBNYXRoLlBJICogMixcbiAgZnJpY3Rpb246IDEsXG4gIHNwcmluZ3M6IFtdLFxuICBtYXNzZXM6IFtdLFxuICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gIHdpZHRoOiAxMCxcbiAgaGVpZ2h0OiAxMCxcbn07XG5cbi8qKlxuICogQGNsYXNzIFBhcnRpY2xlXG4gKiBAcGFyYW0ge3N0YXRlfSBzdGF0ZSBpbml0aWFsIHN0YXRlIHRvIHBhc3MgdGhlIGNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIFBhcnRpY2xlIHtcbiAgICAgICAgICAgICAgIFxuXG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7c3RhdGV9IHN0YXRlIFBhcnRpY2xlIHN0YXRlIGNvb3JkaW5hdGVzLCBldGMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdGF0ZSAgICAgICA9Y2xvbmUoSU5JVElBTF9TVEFURSkpICAgICAgIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgfHwge307XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBwYXJ0aWNsZSBnaXZlbiBhIGRpcmVjdGlvbiBhbmQgbWFnbml0dWRlLlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgIHN0YXRlIG9wdGlvbmFsIHN0YXRlIHZhbHVlcyB0byBwYXNzIHRvIGNyZWF0ZS5cbiAgICogQHJldHVybiB7UGFydGljbGV9IHJldHVybnMgYSBwYXJ0aWNsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShzdGF0ZSAgICAgICAgPSBjbG9uZShJTklUSUFMX1NUQVRFKSkgICAgICAgICAgIHtcbiAgICAvLyBFeHRlbmQgdGhlIG9wdGlvbmFsIHN0YXRlIG9uIHRvIHRoZSBkZWZhdWx0IHN0YXRlLlxuICAgIHN0YXRlID0gZXh0ZW5kKHRydWUsIGNsb25lKElOSVRJQUxfU1RBVEUpLCBzdGF0ZSk7XG5cbiAgICAvLyBDcmVhdGUgcGFydGljbGUgd2l0aCB0aGUgbmV3IG9wdGlvbnMuXG4gICAgY29uc3QgcGFydGljbGUgPSBuZXcgUGFydGljbGUoc3RhdGUpO1xuXG4gICAgLy8gU2V0IGxlbmd0aC5cbiAgICBwYXJ0aWNsZS5zZXRTcGVlZChzdGF0ZS5tYWduaXR1ZGUpO1xuXG4gICAgLy8gU2V0IGFuZ2xlLlxuICAgIHBhcnRpY2xlLnNldEhlYWRpbmcoc3RhdGUuZGlyZWN0aW9uKTtcblxuICAgIC8vIFJldHVybiBuZXcgcGFydGljbGUuXG4gICAgcmV0dXJuIHBhcnRpY2xlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlIGEgYnVuY2ggb2YgcGFydGljbGVzLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG51bWJlciAgICBUaGUgbWF4aW11bSBhbW91bnQgb2YgZ2VuZXJhdGVkIHBhcnRpY2xlcyBuZWVkZWQuXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0cyAgICAgIE9wdGlvbnMgdG8gcGFzcyBlYWNoIHBhcnRpY2xlXG4gICAqIEByZXR1cm4ge0FycmF5PFBhcnRpY2xlPn1cbiAgICovXG4gIHN0YXRpYyBnZW5lcmF0ZShudW1iZXIgICAgICAgICwgb3B0cyAgICAgICA9Y2xvbmUoSU5JVElBTF9TVEFURSkpICAgICAgICAgICAgICAgICAge1xuICAgIGNvbnN0IHBhcnRpY2xlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgcGFydGljbGVzLnB1c2goUGFydGljbGUuY3JlYXRlKG9wdHMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydGljbGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQSBjaGFuZ2UgaW4gdmVsb2NpdHkuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfSBheFxuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfSBheVxuICAgKiBAcmV0dXJuIHt2b2lkfSBBY2NlbGVyYXRpb24gdmVjdG9yLlxuICAgKi9cbiAgYWNjZWxlcmF0ZShheCAgICAgICAgPXRoaXMuc3RhdGUudngsIGF5ICAgICAgICA9dGhpcy5zdGF0ZS52eSkgICAgICAge1xuICAgIHRoaXMuc3RhdGUudnggKz0gYXg7XG4gICAgdGhpcy5zdGF0ZS52eSArPSBheTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEEgdXBkYXRlIGEgcG9zaXRpb24gb2YgYSBwYXJ0aWNsZVxuICAgKiBiYXNlZCBvbiBpdHMgZ3Jhdml0eSBhbmQgZnJpY2l0aW9uLiBHcmF2aXR5IGlzIHVzdWFsbHkgYSBhY2NlbGVyYXRpb25cbiAgICogdmVjdG9yLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtICB7SW50ZWdlcn0gZnJpYyBGcmljaXRpb24gdG8gYXBwbHkuXG4gICAqIEBwYXJhbSAge0ludGVnZXJ9IGdyYXYgR3Jhdml0eSB0byBhcHBseS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBQb3NpdGlvbiBzdGF0ZS5cbiAgICovXG4gIHVwZGF0ZShmcmljICAgICAgICAgPSB0aGlzLnN0YXRlLmZyaWN0aW9uLCBncmF2ICAgICAgICAgPSB0aGlzLnN0YXRlLmdyYXZpdHkpIHtcbiAgICAvLyBBcHBseSBzcHJpbmdzXG4gICAgdGhpcy5oYW5kbGVTcHJpbmdzKCk7XG5cbiAgICAvLyBBcHBseSBncmF2aXRhdGlvbnNcbiAgICB0aGlzLmhhbmRsZU1hc3NlcygpO1xuXG4gICAgLy8gQXBwbHkgZmFrZSBmcmljaXRpb24gdG8gdmVsb2NpdHlcbiAgICB0aGlzLnN0YXRlLnZ4ICo9IGZyaWM7XG4gICAgdGhpcy5zdGF0ZS52eSAqPSBmcmljO1xuXG4gICAgLy8gQXBwbHkgZ3Jhdml0eSB0byB2ZWxvY2l0eVxuICAgIHRoaXMuYWNjZWxlcmF0ZSgwLCBncmF2KTtcblxuICAgIC8vIFVwZGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhY2NlbGVyYXRpb25cbiAgICByZXR1cm4gdGhpcy51cGRhdGVQb3MoKTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIHNldHMgdGhlIGludGVybmFsIHNwZWVkIG9mIHRoZSBwYXJ0aWNsZSBnaXZlbiB0aGUgZm9yY2VcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuICAgKi9cbiAgc2V0U3BlZWQoc3BlZWQgICAgICAgICkgICAgICAge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5nZXRIZWFkaW5nKCk7XG4gICAgdGhpcy5zdGF0ZS52eCA9IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkO1xuICAgIHRoaXMuc3RhdGUudnkgPSBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZDtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBzZXRzIHRoZSBpbnRlcm5hbCBzcGVlZCBvZiB0aGUgcGFydGljbGUgZ2l2ZW4gdGhlIGFuZ2xlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgKi9cbiAgc2V0SGVhZGluZyhhbmdsZSAgICAgICAgKSAgICAgICB7XG4gICAgY29uc3Qgc3BlZWQgPSB0aGlzLmdldFNwZWVkKCk7XG4gICAgdGhpcy5zdGF0ZS52eCA9IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkO1xuICAgIHRoaXMuc3RhdGUudnkgPSBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZDtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWxvY2l0eSB2ZWN0b3IuXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHhcbiAgICogQHBhcmFtICB7bnVtYmVyfSB5XG4gICAqIEByZXR1cm4ge251bWJlcn0gZm9yY2Ugb2YgdmVsb2NpdHkgdmVjdG9yLlxuICAgKi9cbiAgZ2V0U3BlZWQoeCAgICAgICAgID0gdGhpcy5zdGF0ZS52eCwgeSAgICAgICAgID0gdGhpcy5zdGF0ZS52eSkgICAgICAgICB7XG4gICAgcmV0dXJuIE1hdGguaHlwb3QodGhpcy5zdGF0ZS52eCwgdGhpcy5zdGF0ZS52eSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBnZXQgdGhlIGFuZ2xlIG9mIHRoZSB2ZWxvY2l0eSB2ZWN0b3IuXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHhcbiAgICogQHBhcmFtICB7bnVtYmVyfSB5XG4gICAqIEByZXR1cm4ge251bWJlcn0gYW5nbGUgb2YgdmVsb2NpdHkgdmVjdG9yLlxuICAgKi9cbiAgZ2V0SGVhZGluZyh4ICAgICAgICAgPSB0aGlzLnN0YXRlLnZ4LCB5ICAgICAgICAgPSB0aGlzLnN0YXRlLnZ5KSAgICAgICAgIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFzdW1taW5nIHdlIGtub3cgd2hlcmVcbiAgICogdGhlIG90aGVyIHBhcnRpY2xlIGlzIG9uIHRoZSBjYW52YXMuIFdlIGNhbiB1c2VcbiAgICogdGhlIGFuZ2xlIGZvcm11bGFlIHRvIGZpZ3VyZSBvdXQgdGhlIGFuZ2xlXG4gICAqIGJldHdlZW4gdHdvIHBhcnRpY2xlLiBVc2luZyBhcmN0YW5nZW50IGlzIGZpbmUuXG4gICAqIGJ1dCBiZWNhdXNlIHRoZSBjb3JyZGluYXRlIHBsYW5lIGlzIGZpbHBlZCBvbiB0aGVcbiAgICogWSBheGlzIHdlIHVzZSBhdGFuMiB0byBnZXQgdGhlIHJpZ2h0IHZhbHVlcy4gRXhwbGFpbmVkXG4gICAqIGluIEFQSSBEb2NzLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtICB7UGFydGljbGV9IHAgICAgICBBIHBhcnRpY2xlIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtJbnRlZ2VyfSAgQW5nbGUgICBBIGFuZ2xlLlxuICAgKi9cbiAgYW5nbGVUbyhwICAgICAgICAgICkgICAgICAgICB7XG4gICAgY29uc3QgZHggPSBwLnN0YXRlLnggLSB0aGlzLnN0YXRlLng7XG4gICAgY29uc3QgZHkgPSBwLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnk7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIoZHksIGR4KTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFzc3VtaW5nIHdlIGtub3cgd2hlcmUgYm90aCBwYXJ0aWNsZSBhcmUgb24gdGhlIGNhbnZhcy5cbiAgICogd2UgY2FuIHVzZSB0aGUgZGlzdGFuY2UgZm9ybXVhbGUgdG8gZmlndXJlIG91dCB0aGUgZGlzdGFuY2VcbiAgICogYmV0d2VlbiB0aGUgdHdvIHBhcnRpY2xlcy5cbiAgICpcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSAge1BhcnRpY2xlfSBwICAgICAgQSBwYXJ0aWNsZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICBBbmdsZSAgIEEgRGlzdGFuY2VcbiAgICovXG4gIGRpc3RhbmNlVG8ocCAgICAgICAgICApICAgICAgICAge1xuICAgIGNvbnN0IGR4ID0gcC5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54O1xuICAgIGNvbnN0IGR5ID0gcC5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xuICAgIHJldHVybiBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gQXBwZW5kIGEgcGFydGljbGUgdG8gdGhlIG1hc3NlcyBhcnJheS5cbiAgICogQHBhcmFtIHtQYXJ0aWNsZX0gbWFzc1xuICAgKi9cbiAgYWRkTWFzcyhtYXNzICAgICAgICAgICkgICAgICAge1xuICAgIHRoaXMucmVtb3ZlTWFzcyhtYXNzKTtcbiAgICB0aGlzLnN0YXRlLm1hc3Nlcy5wdXNoKG1hc3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIHBhcnRpY2xlIGZvciB0aGUgbWFzc2VzIGFycmF5LlxuICAgKiBAcGFyYW0gIHtQYXJ0aWNsZX0gbWFzc1xuICAgKi9cbiAgcmVtb3ZlTWFzcyh7c3RhdGU6IG1hc3N9ICAgICAgICAgICkgICAgICAge1xuICAgIGNvbnN0IG1hc3NlcyA9IHRoaXMuc3RhdGUubWFzc2VzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChtYXNzLnggPT09IG1hc3Nlc1tpXS5zdGF0ZS54ICYmXG4gICAgICAgICAgbWFzcy55ID09PSBtYXNzZXNbaV0uc3RhdGUueSkge1xuICAgICAgICBtYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gQXBwbHlzIGdyYXZpdGF0aW9uIHRvIHRoZSBpbnB1dCBwYXJ0aWNsZS5cbiAgICogQHBhcmFtICB7UGFydGljbGV9IHBhcnRpY2xlXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdyYXZpdGF0ZVRvKHBhcnRpY2xlICAgICAgICAgICkgICAgICAge1xuICAgIGNvbnN0IGR4ID0gcGFydGljbGUuc3RhdGUueCAtIHRoaXMuc3RhdGUueDtcbiAgICBjb25zdCBkeSA9IHBhcnRpY2xlLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnk7XG5cbiAgICAvLyBEaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcGFydGljbGVzXG4gICAgLy8gd2UgZG9udCB1c2UgdGhlIGRpc3RhbmNlVG8gZm4gY2F1c2Ugd2Ugd2FudFxuICAgIC8vIHRvIG9wdGltemllIHRoZSBjb2RlIHRvIG5vdCBoYXZlIHRvIGNhbGN1bGF0ZVxuICAgIC8vIGRpc3RTcXJkIGFnYWluLlxuICAgIGNvbnN0IGRpc3RTcXJkID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChkaXN0U3FyZCk7XG5cbiAgICAvLyBNYWduaXR1ZGUgb2YgdGhlIHZlY3RvciBbRiA9IEcobTEpKG0yKS9yXjJdXG4gICAgY29uc3QgZm9yY2UgPSBwYXJ0aWNsZS5zdGF0ZS5tYXNzIC8gZGlzdFNxcmQ7XG5cbiAgICAvLyBTZXR0aW5nIHVwIGFuZ2xlcyBvZiB0aGUgdmVjdG9yXG4gICAgY29uc3Qgc2luID0gZHkgLyBkaXN0O1xuICAgIGNvbnN0IGNvcyA9IGR4IC8gZGlzdDtcblxuICAgIC8vIFNldHRpbmcgdmV0b3IgYW5nbGVcbiAgICBjb25zdCBheCA9IGNvcyAqIGZvcmNlO1xuICAgIGNvbnN0IGF5ID0gc2luICogZm9yY2U7XG5cbiAgICByZXR1cm4gdGhpcy5hY2NlbGVyYXRlKGF4LCBheSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gQXBwbHkgdmVsb2NpdHkgdG8gdGhlIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfSB2eFxuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfSB2eVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdXBkYXRlUG9zKHZ4ICAgICAgICAgLCB2eSAgICAgICAgICkgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgIGlmICh2eCA9PT0gdW5kZWZpbmVkICYmIHZ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUueCArPSB0aGlzLnN0YXRlLnZ4O1xuICAgICAgdGhpcy5zdGF0ZS55ICs9IHRoaXMuc3RhdGUudnk7XG4gICAgICByZXR1cm4ge3g6IHRoaXMuc3RhdGUueCwgeTogdGhpcy5zdGF0ZS55fTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLnggKz0gdng7XG4gICAgdGhpcy5zdGF0ZS55ICs9IHZ5O1xuICAgIHJldHVybiB7eDogdGhpcy5zdGF0ZS54LCB5OiB0aGlzLnN0YXRlLnl9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gYWRkIHNwcmluZyB0byBzcHJpbmdzIGFycmF5XG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3ByaW5nIEEgc3ByaW5nIG9iamVjdFxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBhZGRTcHJpbmcoc3ByaW5nICAgICAgICApICAgICAgICAge1xuICAgIHRoaXMucmVtb3ZlU3ByaW5nKHNwcmluZyk7XG4gICAgdGhpcy5zdGF0ZS5zcHJpbmdzLnB1c2goc3ByaW5nKTtcbiAgICByZXR1cm4gc3ByaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlIGEgc3BlY2lmaWMgc3RyaW5nIGZyb20gdGhlIHNwcmluZ3MgYXJyYXlcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSAge09iamVjdH0gc3ByaW5nXG4gICAqL1xuICByZW1vdmVTcHJpbmcoe3BvaW50OiB7c3RhdGU6IHB9fSAgICAgICAgKSAgICAgICB7XG4gICAgY29uc3Qgc3ByaW5ncyA9IHRoaXMuc3RhdGUuc3ByaW5ncztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ByaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHAueCA9PT0gc3ByaW5nc1tpXS5wb2ludC5zdGF0ZS54ICYmXG4gICAgICAgICAgcC55ID09PSBzcHJpbmdzW2ldLnBvaW50LnN0YXRlLnkpIHtcbiAgICAgICAgc3ByaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gcGFydGljbGVzIGNhbGN1bGF0ZSB0aGVcbiAgICogc3ByaW5nIGZvcmNlIGFwcGxpZWQgdG8gYm90aCBwYXJ0aWNsZXMuXG4gICAqIEBwYXJhbSAge1BhcnRpY2xlfSBwYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfSAgc3ByaW5neSAgR2l2ZW4gb2Zmc2V0IGZvciB0aGUgcGFydGljbGVzXG4gICAqIEBwYXJhbSAge0ludGVnZXJ9ICBvZmZzZXQgIFRoZSBzcHJpbmcgY29lZmZpY2VudFxuICAgKiBAcmV0dXJuIHtQYXJ0aWNsZVtdfVxuICAgKi9cbiAgc3ByaW5nRnJvbVRvKHBhcnRpY2xlICAgICAgICAgICwgc3ByaW5neSAgICAgICAgID0gMC4wNSwgb2Zmc2V0ICAgICAgICAgPSAxMDApICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgLy8gUG9zdGlvbiBkZWx0YVxuICAgIGNvbnN0IGR4ID0gKHBhcnRpY2xlLnN0YXRlLnggLSB0aGlzLnN0YXRlLngpO1xuICAgIGNvbnN0IGR5ID0gKHBhcnRpY2xlLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnkpO1xuXG4gICAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgICBjb25zdCBzcHJpbmdGb3JjZSA9IChkaXN0YW5jZSAtIG9mZnNldCkgKiBzcHJpbmd5O1xuXG4gICAgLy8gU3ByaW5nIGFjY2VsZXJhdGlvbiB2ZWN0b3JcbiAgICBjb25zdCBzeCA9IGR4IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcbiAgICBjb25zdCBzeSA9IGR5IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcblxuICAgIC8vIEFjY2VsZXJhdGUgd2l0aCB0aGUgc3ByaW5nIHZlY3RvclxuICAgIHRoaXMuYWNjZWxlcmF0ZShzeCwgc3kpO1xuXG4gICAgLy8gQWNjZWxlcmF0ZSB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICAgIHBhcnRpY2xlLnN0YXRlLnZ4IC09IHN4O1xuICAgIHBhcnRpY2xlLnN0YXRlLnZ5IC09IHN5O1xuXG4gICAgcmV0dXJuIFt0aGlzLCBwYXJ0aWNsZV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwYXJ0aWNsZSwgYSB2ZWN0b3IsIGFuZCBhIHNwcmluZyBjb2VmZmllbmNlbnQgYWNjZWxlcmF0ZVxuICAgKiB0aGUgcGFydGljbGUgYWNjb3JkaW5nIHRvIHRoZSBkaXN0YW5jZSBpdHMgaXMgZnJvbSB0aGUgcG9pbnQuXG4gICAqIEBwYXJhbSAge1NwcmluZ30gc3ByaW5nIEEgc3ByaW5nIG9iamVjdC5cbiAgICogQHJldHVybiB7UGFydGljbGV9XG4gICAqL1xuICBzcHJpbmdUb1BvaW50KHNwcmluZyAgICAgICAgKSAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAvLyBQb3N0aW9uIGRlbHRhXG4gICAgY29uc3QgZHggPSAoc3ByaW5nLnBvaW50LnN0YXRlLnggLSB0aGlzLnN0YXRlLngpO1xuICAgIGNvbnN0IGR5ID0gKHNwcmluZy5wb2ludC5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55KTtcblxuICAgIC8vIFNldHRpbmcgdXAgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gICAgY29uc3Qgc3ByaW5nRm9yY2UgPSAoZGlzdGFuY2UgLSBzcHJpbmcub2Zmc2V0KSAqIHNwcmluZ1tcInNwcmluZ1wiXTtcblxuICAgIC8vIFNwcmluZyBhY2NlbGVyYXRpb24gdmVjdG9yXG4gICAgY29uc3Qgc3ggPSBkeCAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG4gICAgY29uc3Qgc3kgPSBkeSAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG5cbiAgICAvLyBBY2NlbGVyYXRlIHdpdGggdGhlIHNwcmluZyB2ZWN0b3JcbiAgICB0aGlzLmFjY2VsZXJhdGUoc3gsIHN5KTtcblxuICAgIHJldHVybiBbdGhpcywgc3ByaW5nXTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBBcHBseSBzcHJpbmcgcG9pbnQgdG8gYWxsIGludGVybmFsIHNwcmluZ3MuXG4gICAqIEBwYXJhbSAge3NwcmluZ3N9IHNwcmluZ3MgQW4gYXJyYXkgb2Ygc3ByaW5ncyB0byBzcHJpbmcgdG8uXG4gICAqIEByZXR1cm4ge09iamVjdFtdfVxuICAgKi9cbiAgaGFuZGxlU3ByaW5ncyhzcHJpbmdzICAgICAgICAgICAgICAgPXRoaXMuc3RhdGUuc3ByaW5ncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ByaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zcHJpbmdUb1BvaW50KHNwcmluZ3NbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBzcHJpbmdzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIEZvciBlYWNoIG1hc3MgaW4gdGhlIG1hc3NlcyBhcnJheSBhcHBseSBncmF2aXRhdGUgdG8gaXQuXG4gICAqIEBwYXJhbSAge1BhcnRpY2xlc1tdfE9iamVjdFtdfSBtYXNzZXNcbiAgICogQHJldHVybiB7UGFydGljbGVzW118T2JqZWN0W119XG4gICAqL1xuICBoYW5kbGVNYXNzZXMobWFzc2VzICAgICAgICAgICAgICAgICA9dGhpcy5zdGF0ZS5tYXNzZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ncmF2aXRhdGVUbyhtYXNzZXNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXNzZXM7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpY2xlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9wYXJ0aWNsZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvcGFydGljbGUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7LyoqL31cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9IGVsc2UgaWYgKCh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSB8fCB0YXJnZXQgPT0gbnVsbCkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbbmFtZV07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBjb3B5KSB7XG5cdFx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSkpIHtcblx0XHRcdFx0XHRcdGlmIChjb3B5SXNBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9leHRlbmQvaW5kZXguanMiLCJ2YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfREVFUF9GTEFHIHwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2Nsb25lRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9jbG9uZURlZXAuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbicpLFxuICAgIGJhc2VBc3NpZ25JbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25JbicpLFxuICAgIGNsb25lQnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVCdWZmZXInKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBjb3B5U3ltYm9scyA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzJyksXG4gICAgY29weVN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzSW4nKSxcbiAgICBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpLFxuICAgIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGluaXRDbG9uZUFycmF5ID0gcmVxdWlyZSgnLi9faW5pdENsb25lQXJyYXknKSxcbiAgICBpbml0Q2xvbmVCeVRhZyA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUJ5VGFnJyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgdmFyIGtleXNGdW5jID0gaXNGdWxsXG4gICAgPyAoaXNGbGF0ID8gZ2V0QWxsS2V5c0luIDogZ2V0QWxsS2V5cylcbiAgICA6IChpc0ZsYXQgPyBrZXlzSW4gOiBrZXlzKTtcblxuICB2YXIgcHJvcHMgPSBpc0FyciA/IHVuZGVmaW5lZCA6IGtleXNGdW5jKHZhbHVlKTtcbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2xvbmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQ2xvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N0YWNrLmpzIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2VxLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fTWFwLmpzIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19TeW1ib2wuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fcm9vdC5qcyIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc09iamVjdC5qcyIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pc01hc2tlZC5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fSGFzaC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoR2V0LmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoSGFzLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ24uanMiLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2tleXMuanMiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0FycmF5LmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9rZXlzSW4uanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlBcnJheS5qcyIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29weVN5bWJvbHMuanMiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weVN5bWJvbHNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFRhZy5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19Qcm9taXNlLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1NldC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpLFxuICAgIGNsb25lRGF0YVZpZXcgPSByZXF1aXJlKCcuL19jbG9uZURhdGFWaWV3JyksXG4gICAgY2xvbmVNYXAgPSByZXF1aXJlKCcuL19jbG9uZU1hcCcpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVNldCA9IHJlcXVpcmUoJy4vX2Nsb25lU2V0JyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIGNsb25lU2V0KG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lQnlUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsInZhciBhZGRNYXBFbnRyeSA9IHJlcXVpcmUoJy4vX2FkZE1hcEVudHJ5JyksXG4gICAgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgQ0xPTkVfREVFUF9GTEFHKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZU1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZU1hcC5qcyIsIi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1hcEVudHJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVJlZHVjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVJlZHVjZS5qcyIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsInZhciBhZGRTZXRFbnRyeSA9IHJlcXVpcmUoJy4vX2FkZFNldEVudHJ5JyksXG4gICAgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKHNldFRvQXJyYXkoc2V0KSwgQ0xPTkVfREVFUF9GTEFHKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVNldC5qcyIsIi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgc2V0YC5cbiAqL1xuZnVuY3Rpb24gYWRkU2V0RW50cnkoc2V0LCB2YWx1ZSkge1xuICAvLyBEb24ndCByZXR1cm4gYHNldC5hZGRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBzZXQuYWRkKHZhbHVlKTtcbiAgcmV0dXJuIHNldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRTZXRFbnRyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qcyIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCIvKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG4vLyAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4vKipcbiAqIEBjbGFzcyBTaGFwZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHggICAgICBDYW52YXMgY29udGV4dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0LlxuKi9cbmNsYXNzIFNoYXBlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgXG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge0hUTUxDYW52YXNFbGVtZW50fSBjdHhcbiAgICogQHBhcmFtICB7RG9jdW1lbnR9IGRvY3VtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihjdHggICAgICAgICAgICAgICAgICAgICAgICAgICwgZG9jdW1lbnQgICAgICAgICAgKSB7XG4gICAgaWYgKCFjdHgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoYXBlczogUGxlYXNlIHByb3ZpZGUgYSBjb250ZXh0IGFyZ3VtZW50IFthcmc6OjFdXCIpO1xuICAgIH1cblxuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlck9mIFNoYXBlc1xuICAgKiBAZGVzY3JpcHRpb24gZHJhdyBhIGNpcmNsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggICAgIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGNpcmNsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNpcmNsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHIgICAgIFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIFRoZSBjb2xvciBvZiB0aGUgY2lyY2xlLlxuICAgKi9cbiAgY2lyY2xlKHggICAgICAgID00LCB5ICAgICAgICA9NCwgciAgICAgICAgPTIsIGNvbG9yICAgICAgID1cIiMwMDAwMDBcIikge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFNoYXBlc1xuICAgKiBAZGVzY3JpcHRpb24gRmlsbCBhIHJlY3RhbmdsZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgIFN0YXJ0aW5nIHBvaW50IFhcbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICBTdGFydGluZyBwb2ludCBZXG4gICAqIEBwYXJhbSAge051bWJlcn0gdyAgICAgV2lkdGggb2YgdGhlIHJlY3RhbmdsZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGggICAgIEhlaWdodCBvZiB0aGUgcmVjdGFuZ2xlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgQSBoZXggc3RyaW5nLlxuICAgKi9cbiAgcmVjdCh4ICAgICAgICAgPSAwLFxuICAgICAgeSAgICAgICAgID0gMCxcbiAgICAgIHcgICAgICAgICA9IDEwLFxuICAgICAgaCAgICAgICAgID0gMTAsXG4gICAgICBjb2xvciAgICAgICAgPSBcIiMwMDAwMDBcIikge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgU2hhcGVzXG4gICAqIEBkZXNjcmlwdGlvbiBEcmF3IGEgbGluZSBiZXR3ZWVuIHRoZXNlIHR3byBwb2ludHMuXG4gICAqIEBwYXJhbSAge051bWJlcn0geDBcbiAgICogQHBhcmFtICB7TnVtYmVyfSB5MFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHgxXG4gICAqIEBwYXJhbSAge051bWJlcn0geTFcbiAgICogQHBhcmFtICB7c3RyaW5nfSBzdHlsZVxuICAgKi9cbiAgZHJhd0xpbmVYWSh4MCAgICAgICAgLFxuICAgIHkwICAgICAgICAsXG4gICAgeDEgICAgICAgICxcbiAgICB5MSAgICAgICAgLFxuICAgIHN0eWxlICAgICAgICAgPSBcIiMwMDAwMDBcIikge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gc3R5bGU7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgwLCB5MCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHgxLCB5MSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGRyYXdMaW5lVmVjXG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMDogVmVjdG9yXG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMTogVmVjdG9yXG4gICAqL1xuICBkcmF3TGluZVZlYyh2ZWMwICAgICAgICAsIHZlYzEgICAgICAgICkge1xuICAgIHRoaXMuZHJhd0xpbmVYWSh2ZWMwLmdldChcInhcIiksIHZlYzAuZ2V0KFwieVwiKSwgdmVjMS5nZXQoXCJ4XCIpLCB2ZWMxLmdldChcInlcIikpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBkcmF3TGluZVBvaW50c1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpcnN0UG9pbnRcbiAgICogQHBhcmFtICB7QXJyYXk8T2JqZWN0Pn0gcG9pbnRzXG4gICAqL1xuICBkcmF3TGluZVBvaW50cyhwb2ludHMgICAgICAgICAgICAgICApIHtcbiAgICBpZiAoIXBvaW50c1swXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgaW5wdXRzXCIpO1xuICAgIH1cblxuICAgIGlmIChwb2ludHMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBiZSBnaXZlbiBhIGEgbnVtYmVyIG9mIHBvaW50cyBncmVhdGVyIHRoYW4gMVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFBvaW50ID0gcG9pbnRzLnNoaWZ0KCk7XG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oZmlyc3RQb2ludC54LCBmaXJzdFBvaW50LnkpO1xuXG4gICAgZm9yIChsZXQgcG9pbnQgb2YgcG9pbnRzKSB7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBTaGFwZXNcbiAgICogQHBhcmFtICB7bnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGhlaWdodFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGdyaWRTaXplXG4gICAqIEBwYXJhbSAge1N0cmluZ30gY29sb3JcbiAgICovXG4gIGdyaWQod2lkdGggICAgICAgICwgaGVpZ2h0ICAgICAgICAsIGdyaWRTaXplICAgICAgICAgPSAyMCwgY29sb3IgICAgICAgICA9IFwiI2NjY1wiKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHggKz0gZ3JpZFNpemUpIHtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCBoZWlnaHQpO1xuICAgIH1cblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5ICs9IGdyaWRTaXplKSB7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgeSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8od2lkdGgsIHkpO1xuICAgIH1cblxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBwQ2lyY2xlXG4gICAqIEBtZW1iZXJPZiBTaGFwZXNcbiAgICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAgICogQHJldHVybiB7UGFydGljbGV9XG4gICAqL1xuICBwQ2lyY2xlKHBhcnRpY2xlICAgICAgICAgICkge1xuICAgIHRoaXMuY2lyY2xlKFxuICAgICAgcGFydGljbGUuc3RhdGUueCxcbiAgICAgIHBhcnRpY2xlLnN0YXRlLnksXG4gICAgICBwYXJ0aWNsZS5zdGF0ZS5yYWRpdXMsXG4gICAgICBwYXJ0aWNsZS5zdGF0ZS5jb2xvclxuICAgICk7XG4gICAgcmV0dXJuIHBhcnRpY2xlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBwUmVjdFxuICAgKiBAbWVtYmVyT2YgU2hhcGVzXG4gICAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gICAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICAgKi9cbiAgcFJlY3QocGFydGljbGUgICAgICAgICAgKSB7XG4gICAgdGhpcy5yZWN0KFxuICAgICAgcGFydGljbGUuc3RhdGUueCxcbiAgICAgIHBhcnRpY2xlLnN0YXRlLnksXG4gICAgICBwYXJ0aWNsZS5zdGF0ZS53aWR0aCxcbiAgICAgIHBhcnRpY2xlLnN0YXRlLmhlaWdodCxcbiAgICAgIHBhcnRpY2xlLnN0YXRlLmNvbG9yXG4gICAgKTtcbiAgICByZXR1cm4gcGFydGljbGU7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhcGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zaGFwZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3NoYXBlcy5qcyIsIi8qKlxuICogWUFUIHN0YW5kcyBmb3IgWWV0IEFub3RoZXIgVHdlZW4uXG4gKiBXaHkgbm90IGhhdmUgb25lIG1vcmUgcGFja2FnZSB0aGF0IGRvZXMgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIDUwIG91dCB0aGVyZT9cbiAqIFdlbGwgdGhhdHMgYSBnb29kIHF1ZXN0aW9uIHRoYXQgd2lsbCBub3QgYmUgYW5zd2VyZWQgaW4gdGhpcyBjb21tZW50IGJsb2NrLlxuICogVG8gYmUgaG9uZXN0IGl0cyBmb3IgcHJhY3RpY2UgYW5kIGxlYXJuaW5nIHB1cnBvc2VzLiBBbmQgaWYgYW55b25lIGluIHRoZWlyXG4gKiByaWdodCBtaW5kIGFjdGF1bGx5IGJlbmVmaXRzIGZyb20gdGhpcyB0aGVuIHNvIGJlIGl0LlxuICovXG5cbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gIG9iajoge3g6IDAsIHk6IDB9LFxuICBwcm9wczoge3g6IDEwMCwgeTogMTAwfSxcbiAgZWFzaW5nOiBcImVhc2VcIixcbiAgZHVyYXRpb246IDEwMDAsXG59O1xuXG5jb25zdCBldmVudEluc3RhbmNlID0gZXZlbnQuaW5pdCgpO1xuLy8gSW5oZXJpdCBtZXRob2RzIGZyb20gZXZlbnRJbnN0YW5jZVxuY29uc3QgWUFUID0gT2JqZWN0LmNyZWF0ZShldmVudEluc3RhbmNlKTtcblxuWUFULmluaXQgPSBmdW5jdGlvbiBpbml0VHdlZW4ob3B0cykge1xuICAvLyBDYW4gYW5kIHVzZXMgRXZlbnQgYW5kIENsb2NrIG1ldGhvZHMuXG5cbiAgaWYgKCFvcHRzLmNsb2NrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSBjbG9jayBBUEkuXCIpO1xuICB9XG5cbiAgdGhpcy5fY2xvY2sgPSBvcHRzLmNsb2NrLmluaXQoe1xuICAgIGZwczogb3B0cy5mcHMgfHwgNjAsXG4gIH0pO1xuXG4gIHRoaXMucGFyZW50ID0gZXZlbnRJbnN0YW5jZTtcbiAgdGhpcy50d2VlbnMgPSBbXTtcblxuICAvKipcbiAgICogZWFzaW5nRm5zXG4gICAqIEBkZXNjcmlwdGlvbiBBbGwgZWFzaW5nIGZ1bmN0aW9ucyBhcmUgb3JpZ25pYWxseSB3cml0dGVuXG4gICAqIGJ5IHJvYmVydCBwZW5uZXIsIHRoZSB0d2VlbmluZyBnb2QuXG4gICAqIEhlcmUgZWFjaCBtZXRob2QgaXMgcGFzc2VkIGEgbm9ybWFsaXplZCB2YWx1ZS4gV2hpY2ggaXNcbiAgICogdXN1YWxseSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuIFlvdSBjYW4gdGhpbmsgb2YgdGhpcyBudW1iZXIgYXNcbiAgICogYSBwZXJjZW50YWdlIG9mIGEgcmFuZ2UuIFdpdGggdGhhdCBub3JtbGl6ZWQgdmFsdWUgLyBwZXJjZW50YWdlIHdlXG4gICAqIGNhbiBtYXAgdGhhdCBwZXJjZW50YWdlIHRvIGFub3RoZXIgcmFuZ2UuIFRoaXMgaXMgY2FsbGVkIGludGVycG9sYXRpb24uXG4gICAqIEBzZWUge0BsaW5rIGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy99XG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB0aGlzLmVhc2luZ0ZucyA9IHtcbiAgICAvLyBIZXJlIHRoaXMgZWFzZSBmdW5jdGlvbiBpcyBsaW5lYXIgYXMgdGhlcmUgaXMgb25seSBvbmVcbiAgICAvLyBuIHZhbHVlLiBFYWNoIGVhc2UgZnVuY3Rpb24gY2FuIGJlIG1hcHBlZCB0byBhIHBvbHlub21pYWwuXG4gICAgZWFzZShjLCBiLCBuKSB7IC8vIHBvbHlub21pYWw6IGF4ICsgYiA9IGM7IHdoZXJlIHggaXMgdGhlIG5vcm1hbGl6ZWQgdmFsdWVcbiAgICAgIHJldHVybiBjICogbiArIGI7XG4gICAgfSxcbiAgICBlYXNlSW5RdWFkKGMsIGIsIG4pIHsgLy8gcG9seW5vbWlhbDogMXheMiArIDB4ICsgMCA9IGQ7XG4gICAgICByZXR1cm4gYyAqIChuICogbikgKyBiO1xuICAgIH0sXG4gICAgZWFzZU91dFF1YWQoYywgYiwgbikgeyAvLyBwb2x5bm9taWFsOiAtMXheMiArIDJ4ICsgMCA9IGQ7XG4gICAgICByZXR1cm4gYyAqIChuICogKDIgLSBuKSkgKyBiO1xuICAgIH0sXG4gICAgZWFzZUluT3V0UXVhZChjLCBiLCBuKSB7XG4gICAgICBpZiAoKG4qPTIpIDwgMSkge1xuICAgICAgICByZXR1cm4gYy8yICogKG4qbikgKyBiOyAvLyBQb2x5bm9taWFsIGZvciBoYWxmIHRoZSByYW5nZTpcbiAgICAgICAgLy8gMnheMiArIDB4ICsgMCA9IGQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gLWMvMiAqICgoLS1uKSoobi0yKSAtIDEpICsgYjsgLy8gUG9seW5vbWlhbCBmb3IgdGhlIHRoZSB1cHBlclxuICAgICAgLy8gaGFsZiBvZiB0aGUgcmFuZ2U6IC0yeF4yICsgNHggLSAxXG4gICAgfSxcbiAgfTtcblxuICB0aGlzLl9jbG9jay5vbihcInRpY2tcIiwgdGhpcy51cGRhdGVUd2VlbnMsIHRoaXMpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB1cGRhdGVUd2VlbnMgLSBVcGRhdGVzIGFsbCB0aGUgdHdlZW4gaW5zdGFuY2VzLlxuICovXG5ZQVQudXBkYXRlVHdlZW5zID0gZnVuY3Rpb24gdXBkYXRlVGVlbnMoKSB7XG4gIHRoaXMudHdlZW5zLmZvckVhY2goKHR3ZWVuKSA9PiB7XG4gICAgaWYgKHR3ZWVuLnRpY2tlci5uZWVkc1VwZGF0ZSkge1xuICAgICAgdHdlZW4udXBkYXRlKHR3ZWVuLnRpY2tlcik7XG4gICAgfVxuXG4gICAgaWYgKCF0d2Vlbi50aWNrZXIubmVlZHNVcGRhdGUgJiZcbiAgICAgICAgdHdlZW4udGlja2VyLlNUQVRFID09PSBcIkRPTkVcIikge1xuICAgICAgdHdlZW4udXBkYXRlKHR3ZWVuLnRpY2tlcik7XG4gICAgICB0d2Vlbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodHdlZW4udGlja2VyLnN0b3BwZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWW91ciB0d2VlbiBpcyBzdG9wcGVkLlwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuWUFULmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdHM9e30pIHtcbiAgY29uc3QgWUFUSW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKFlBVCk7XG4gIGNvbnN0IF9vcHRzID0gT2JqZWN0LmFzc2lnbihjbG9uZShERUZBVUxUUyksIG9wdHMpO1xuICBjb25zdCB7ZHVyYXRpb24sIG9iaiwgcHJvcHMsIGVhc2luZywgaWR9ID0gX29wdHM7XG5cbiAgaWYgKCFZQVRJbnN0YW5jZS5lYXNpbmdGbnNbZWFzaW5nXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVhc2luZyBmdW5jdGlvbiAke2Vhc2luZ30gZG9lcyBub3QgZXhpc3RzYCk7XG4gIH1cblxuICBpZiAoaWQpIHtcbiAgICBpZiAodGhpcy50d2VlbnMuc29tZSgoeCkgPT4geC5pZCA9PT0gaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0d2VlbiB3aXRoIGlkOiAke2lkfSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICB9XG5cbiAgICBZQVRJbnN0YW5jZS5pZCA9IGlkO1xuICB9IGVsc2Uge1xuICAgIFlBVEluc3RhbmNlLmlkID0gdGhpcy50d2VlbnMubGVuZ3RoICsgMTtcbiAgfVxuXG4gIFlBVEluc3RhbmNlLnN0YXRlID0gY2xvbmUob2JqKTtcbiAgWUFUSW5zdGFuY2Uub2JqID0gb2JqO1xuICBZQVRJbnN0YW5jZS5wcm9wcyA9IHByb3BzO1xuICBZQVRJbnN0YW5jZS5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICBZQVRJbnN0YW5jZS5lYXNpbmcgPSBZQVRJbnN0YW5jZS5lYXNpbmdGbnNbZWFzaW5nXTtcbiAgWUFUSW5zdGFuY2UudGlja2VyID0gdGhpcy5fY2xvY2suY3JlYXRlU2xhdmUoe1xuICAgIGlkOiBZQVRJbnN0YW5jZS5pZCxcbiAgICBkdXJhdGlvbjogWUFUSW5zdGFuY2UuZHVyYXRpb24sXG4gIH0pO1xuXG4gIHRoaXMudHdlZW5zLnB1c2goWUFUSW5zdGFuY2UpO1xuICByZXR1cm4gWUFUSW5zdGFuY2U7XG59O1xuXG5ZQVQuZ2V0ID0gZnVuY3Rpb24oaWQpIHtcbiAgaWYgKHRoaXMudHdlZW5zLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBZQVRbMF07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHdlZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy50d2VlbltpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnR3ZWVuW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbllBVC5yZXdpbmQgPSBmdW5jdGlvbihpZD10aGlzLmlkKSB7XG4gIGNvbnN0IHR3ZWVuID0gdGhpcy5nZXQoaWQpO1xuXG4gIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgdHdlZW4uc3RvcCgpO1xuICB9XG5cbiAgLy8gRmlndXJlIG91dCBhIHdheSB0byBjYWNoZSB0aGUgb2xkIHByb3BzIC8vXG4gIHRoaXMub3B0cy5vYmogPSB0aGlzLm9wdHMucHJvcHM7XG4gIHRoaXMub3B0cy5wcm9wcyA9IHRoaXMub3B0cy5wcm9wc0JlZm9yZVR3ZWVuO1xuXG4gIHR3ZWVuLnN0YXJ0KCk7XG59O1xuXG5ZQVQuc3RhcnRBbGwgPSBmdW5jdGlvbiBzdGFydEFsbCgpIHtcbiAgaWYgKCF0aGlzLnR3ZWVucy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhcmUgbm8gdHdlZW5zIHRvIHN0YXJ0XCIpO1xuICB9XG5cbiAgdGhpcy50d2VlbnMuZm9yRWFjaCgodCkgPT4ge1xuICAgIHQudGlja2VyLnN0YXJ0KCk7XG4gIH0pO1xuXG4gIHRoaXMuX2Nsb2NrLnN0YXJ0KCk7XG59O1xuXG4vKipcbiAqIHN0b3BBbGwgLSBTdG9wcyBhbGwgdHdlZW5zXG4gKi9cbllBVC5zdG9wQWxsID0gZnVuY3Rpb24gc3RvcEFsbCgpIHtcbiAgaWYgKHRoaXMudHdlZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSBubyB0d2VlbnMgdG8gc3RvcFwiKTtcbiAgfVxuXG4gIHRoaXMuX2Nsb2NrLnN0b3AoKTtcbn07XG5cbi8qKlxuICogZGVsYXkgLSBob3cgbG9uZyB0byBkZWxheSB0aGUgYW5pbWF0aW9uXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcmV0dXJuIHtZQVR9XG4gKi9cbllBVC5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KGR1cmF0aW9uKSB7XG4gIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgdGhpcy5vYmogPSBjbG9uZSh0aGlzLnN0YXRlKTtcbiAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpY2tlci5zdGFydCgpLCBkdXJhdGlvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdG9wIC0gc3RvcHMgdGhlIHRpY2tlclxuICogQHJldHVybiB7WUFUfVxuICovXG5ZQVQuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIGZpbmlzaCAtIGZpbmlzaGVzIHRoZSB0d2VlbiBhbmltYXRpb25cbiAqIEByZXR1cm4ge1lBVH1cbiAqL1xuWUFULmZpbmlzaCA9IGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuX2Nsb2NrLnJlbW92ZVNsYXZlKHRoaXMudGlja2VyLmlkKTtcbiAgdGhpcy5zdGF0ZSA9IHRoaXMucHJvcHM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuWUFULnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpZD10aGlzLmlkKSB7XG4gIHRoaXMudHdlZW5zID0gdGhpcy50d2VlbnMuZmlsdGVyKCh0KSA9PiB7XG4gICAgaWYgKHQuaWQgPT09IGlkKSB7XG4gICAgICB0aGlzLl9jbG9jay5yZW1vdmVTbGF2ZSh0LnRpY2tlci5pZCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufTtcblxuWUFULnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSh0aWNrZXIpIHtcbiAgaWYgKCF0aWNrZXIubmVlZHNVcGRhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBjb25zdCB7dGltZVNpbmNlU3RhcnQ6IGRlbHRhLCBkdXJhdGlvbn0gPSB0aWNrZXI7XG4gIGNvbnN0IG5vcm0gPSB1dGlscy5ub3JtYWxpemUoZGVsdGEsIDAsIGR1cmF0aW9uLm1zKTtcblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5vYmopIHtcbiAgICBpZiAodGhpcy5vYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHRoaXMub2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB0aGlzLmVhc2luZyh0aGlzLnByb3BzW2tleV0gLSB0aGlzLm9ialtrZXldLCB0aGlzLm9ialtrZXldLCBub3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gWUFUO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKlxuICpcbiAqIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcbiAqIFxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLiBcbiAqIFxuICogQ29weXJpZ2h0IMKpIDIwMDEgUm9iZXJ0IFBlbm5lclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiBcbiAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIFxuICogY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3QgXG4gKiBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBcbiAqIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZVxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvblxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTllcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSFxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVUXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRURcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdHdlZW4uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3R3ZWVuLmpzIiwiLyoqXG4gKiBFdmVudFxuICogQHR5cGUge09iamVjdH1cbiAqIEBpbXBsZW1lbnRzIHt1dGlsc31cbiAqL1xuY29uc3QgRXZlbnQgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAgXG5cbi8qKlxuICogaW5pdFxuICogQG1lbWJlck9mIEV2ZW50XG4gKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGV2ZW50IG9iamVjdC5cbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5pbml0ID0gZnVuY3Rpb24gaW5pdEV2ZW50KCkge1xuICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogZW1pdFxuICogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIHRoZSBoYW5kZWxlciB0aGF0IGFzc29jYWl0ZWQgd2l0aCB0aGUgZW1pdHRlZCBldmVudC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5lbWl0ID0gZnVuY3Rpb24gZW1pdCguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudCwgLi4ucmVzdF0gPSBhcmdzO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnQ6IFBsZWFzZSBwcm92aWRlIHRydXRoeSBhcmd1bWVudHNcIik7XG4gIH1cblxuICB0aGlzLmNhbGxiYWNrc1tldmVudF0gPSB0aGlzLmNhbGxiYWNrc1tldmVudF0gfHwgW107XG5cbiAgaWYgKHRoaXMuY2FsbGJhY2tzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICB0aGlzLmNhbGxiYWNrc1tldmVudF0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKC4uLnJlc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG9uXG4gKiBAZGVzY3JpcHRpb24gQXR0YWNoIGEgaGFuZGxlciB0byBhbiBldmVudC5cbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudFxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgY29udGV4dFxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50Lm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIGlmICghZXZlbnQgfHwgIWZuKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV2ZW50OiBQbGVhc2UgcHJvdmlkZSB0cnV0aHkgYXJndW1lbnRzXCIpO1xuICB9XG5cbiAgaWYgKGNvbnRleHQpIHtcbiAgICBmbiA9IGZuLmJpbmQoY29udGV4dCk7XG4gIH1cblxuICBjb25zdCBldmVudHMgPSBldmVudC5zcGxpdChcIiBcIik7XG5cbiAgdGhpcy5jYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcyB8fCB7fTtcblxuICBldmVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIHRoaXMuY2FsbGJhY2tzW2VdID0gdGhpcy5jYWxsYmFja3NbZV0gfHwgW107XG5cbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2VdLmxlbmd0aCkge1xuICAgICAgdGhpcy5jYWxsYmFja3NbZV0ucHVzaChmbik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBEb250IGNyZWF0ZSBkdXBsaWNhdGVzIG9mIHRoZSBzYW1lIGhhbmRlbGVkIGZ1bmN0aW9uLlxuICAgIC8vIElmIHlvdSB3YW50IHlvdXIgZnVuY3Rpb24gcnVuIHR3aWNlIHdyYXAgaXQgaW4gYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gdGhpcy5jYWxsYmFja3NbZV0uZXZlcnkoKGNiLCBpLCBjb2wpID0+IHtcbiAgICAgIHJldHVybiBjYiAhPT0gZm47XG4gICAgfSkgPyB0aGlzLmNhbGxiYWNrc1tlXS5wdXNoKGZuKSA6XG4gICAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBUaGF0IGZ1bmN0aW9uICR7Zm59IGhhcyBhbHJlYWR5IGJlZW4gZGVjbGFyZWQgYWAgK1xuICAgICAgICBcImhhbmRsZXIgZm9yIHRoaXMgZXZlbnQuXCIpO1xuICB9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogb2ZmXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFuIGV2ZW50IGhhbmRlbGVyLlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5vZmYgPSBmdW5jdGlvbiBvZmYoLi4uYXJncykge1xuICBjb25zdCBbZXZlbnQsIGZuXSA9IGFyZ3M7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsZXQgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgY29uc29sZS53YXJuKGBFdmVudDogTm8gZXZlbnQgbmFtZWQgJHtldmVudH0gaGFzIGJlZW4gcmVnaXN0ZXJlZGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKCFmbikge1xuICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGlzLmNhbGxiYWNrc1tldmVudF0gPSBjYWxsYmFja3MuZmlsdGVyKChjYikgPT4gY2IgIT09IGZuKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogbGlzdGVuZXJzIC0gUmV0dXJuIGFsbCBjYWxsYmFja3MgYXR0YWNoZWQgdG8gYSBjZXJ0YWluIGV2ZW50XG4gKiBAcGFyYW0gIHthbnk8QXJyYXk+fSBhcmdzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbltdfVxuICovXG5FdmVudC5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoLi4uYXJncykge1xuICBjb25zdCBbZXZlbnRdID0gYXJncztcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2FsbGJhY2tzKTtcbiAgfVxuXG4gIGlmICghdGhpcy5jYWxsYmFja3NbZXZlbnRdKSB7XG4gICAgY29uc29sZS53YXJuKGBFdmVudDogTm8gZXZlbnQgbmFtZWQgJHtldmVudH0gaGFzIGJlZW4gcmVnaXN0ZXJlZGApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbn07XG5cbkV2ZW50Lm9uY2UgPSBmdW5jdGlvbiBvbmNlKC4uLmFyZ3MpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IFtldmVudCwgZm4sIGNvbnRleHRdID0gYXJncztcblxuICBjb25zdCB3cmFwID0gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICBmbi5iaW5kKGNvbnRleHQpKCk7XG4gICAgc2VsZi5vZmYoZXZlbnQsIHdyYXApO1xuICB9O1xuXG4gIHRoaXMub24oZXZlbnQsIHdyYXAsIGNvbnRleHQpO1xufTtcblxuLy8gQWxpYXNlcyAvL1xuRXZlbnQucmVtb3ZlTGlzdGVuZXIgPSBFdmVudC5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBFdmVudC5vZmY7XG5FdmVudC5maXJlID0gRXZlbnQuZW1pdDtcbkV2ZW50LmFkZExpc3RlbmVyID0gRXZlbnQub247XG5FdmVudC5nZXQgPSBFdmVudC5saXN0ZW5lcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2V2ZW50LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9ldmVudC5qcyIsImNvbnN0IHRpY2tlciA9IHJlcXVpcmUoXCIuL3RpY2tlclwiKTtcbmNvbnN0IGV2ZW50ID0gcmVxdWlyZShcIi4vZXZlbnRcIikuaW5pdCgpO1xuY29uc3QgQ2xvY2sgPSBPYmplY3QuY3JlYXRlKGV2ZW50KTtcbmNvbnN0IE1BWF9GUFMgPSA2MDtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiBpbml0IC0gSW5pdGFsaXplcyB0aGUgY2xvY2sgd2l0aCBjb3JyZWN0IHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSAge051bWJlcn0gb3B0cy5mcHMgVGhlIGZwcyB5b3Ugd2FudCB0aGUgY2xvY2sgdG8gdGljayBhdC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5pbml0ID0gZnVuY3Rpb24gaW5pdENsb2NrKG9wdHM9e30pIHtcbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGZwczogTUFYX0ZQUyxcbiAgfSwgb3B0cyk7XG5cbiAgdGhpcy5zbGF2ZXMgPSBbXTtcbiAgdGhpcy5wYXJlbnQgPSBldmVudDtcblxuICAvLyBaZXJvIGJhc2VkIGZyYW1lIGNvdW50LlxuICB0aGlzLmluZGV4ID0gLTE7XG5cbiAgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgYW5pbWF0aW9uIGZyYW1lIHNvIHdlIGNhbiBjYW5jZWwgaXRcbiAgdGhpcy5yQUYgPSAwO1xuXG4gIC8vIFRpbWUgcHJvcGVydGllc1xuICB0aGlzLnN0YXJ0VGltZTtcbiAgdGhpcy5sYXN0VGltZTtcbiAgdGhpcy5zdG9wVGltZTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG5cbiAgLy8gVGhlIG1heGltdW0gRlBTIHRoZSBicm93c2VyIGNhbiBkZWxpdmVyIGlzIDYwLlxuICB0aGlzLmZwcyA9IG9wdHMuZnBzID4gTUFYX0ZQUyA/XG4gICAgTUFYX0ZQUyA6XG4gICAgKG9wdHMuZnBzIHx8IE1BWF9GUFMpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdGFydCAtIFN0YXJ0cyB0aGUgY2xvY2sgd2l0aCBzdGFydGluZyB0aW1lIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGZwcyBUaGUgZnBzIHlvdSB3YW50IHRoZSBjbG9jayB0byB0aWNrIGF0LlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmICh0aGlzLmZwcyA+IDYwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGdpdmVuIGZwcyBpcyB0b28gaGlnaFwiKTtcbiAgfVxuXG4gIGlmICgrdGhpcy5mcHMgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnaXZlbiBmcHMgaXMgbm90IHZhbGlkXCIpO1xuICB9XG5cbiAgdGhpcy5mcHMgPSAxMDAwIC8gdGhpcy5mcHM7XG4gIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHRoaXMubGFzdFRpbWUgPSB0aGlzLnN0YXJ0VGltZTtcblxuICAvLyBTdGFydCB0aWNraW5nXG4gIHRoaXMubG9vcCh0aGlzLnN0YXJ0VGltZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB0aWNrXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG5ld1RpbWUgQSB2YWx1ZSBpbiBtcyB0aGF0IGlzIGVxdWFsIHRvIHRoZSBjdXJyZW50IHRpbWUuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2subG9vcCA9IGZ1bmN0aW9uIGxvb3AobmV3VGltZSkge1xuICB0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wLmJpbmQodGhpcykpO1xuXG4gIGxldCBkZWx0YSA9IG5ld1RpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0ID0gbmV3VGltZSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIGlmIChkZWx0YSA+IHRoaXMuZnBzKSB7XG4gICAgdGhpcy5pbmRleCsrO1xuXG4gICAgdGhpcy53aGlwU2xhdmVzKHtcbiAgICAgIG5ld1RpbWUsXG4gICAgICBkZWx0YSxcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgbGFzdFRpbWU6IHRoaXMubGFzdFRpbWUsXG4gICAgICBjbG9ja1N0YXJ0OiB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIHRpbWVTaW5jZVN0YXJ0OiB0aGlzLnRpbWVTaW5jZVN0YXJ0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IG5ld1RpbWUgLSAoZGVsdGEgJSB0aGlzLmZwcyk7XG4gIH1cblxuICB0aGlzLmVtaXQoXCJyZW5kZXJcIik7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHN0b3AgLSBTdG9wIHRoZSBjbG9jayBhbmQgY2FsbCB0aGUgbGFzdCB0aWNrIGlmIG5lZWRlZC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5zdG9wID0gZnVuY3Rpb24gc3RvcENsb2NrKCkge1xuICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XG5cbiAgLy8gUmVjb3JkIHdoZW4gd2Ugc3RvcHBlZC5cbiAgdGhpcy5zdG9wVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0ICs9IHRoaXMuc3RvcFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcbiAgdGhpcy5jbGVhclNsYXZlcygpO1xuXG4gIHRoaXMuZW1pdChcInN0b3BwZWRcIik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB3aGlwU2xhdmVzIC0gUnVuIGFsbCBzbGF2ZXMgaW4gc2VxdWVuY2UgYW5kIHBhc3MgaW5cbiAqIHRoZSBnaXZlbiBzdGF0ZSBvZiB0aGUgY2xvY2suXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2sud2hpcFNsYXZlcyA9IGZ1bmN0aW9uIHdoaXBTbGF2ZXMoc3RhdGUpIHtcbiAgaWYgKCF0aGlzLnNsYXZlcy5sZW5ndGgpIHJldHVybjtcblxuICB0aGlzLnNsYXZlcy5mb3JFYWNoKChzbGF2ZSwgaW5kZXgpID0+IHtcbiAgICBzbGF2ZS5udWRnZShzdGF0ZSk7XG4gIH0pO1xuXG4gIHRoaXMuZW1pdChcInRpY2tcIik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuQ2xvY2suY3JlYXRlU2xhdmUgPSBmdW5jdGlvbiBjcmVhdGVTbGF2ZShvcHRzKSB7XG4gIGlmICghb3B0cykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgb3B0aW9ucyBvYmplY3RcIik7XG4gIH1cblxuICBjb25zdCB7aWQsIGR1cmF0aW9ufSA9IG9wdHM7XG4gIGNvbnN0IHRpbWVTdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gIGNvbnN0IHNsYXZlID0gT2JqZWN0LmNyZWF0ZSh0aWNrZXIpXG4gICAgLmluaXQoe3RpbWVTdGFtcCwgaWQsIGR1cmF0aW9ufSk7XG5cbiAgaWYgKGlkKSB7XG4gICAgdGhpcy5zbGF2ZXMucHVzaChzbGF2ZSk7XG4gICAgcmV0dXJuIHNsYXZlO1xuICB9XG5cbiAgc2xhdmUuaWQgPSB0aGlzLnNsYXZlcy5wdXNoKHNsYXZlKTtcbiAgcmV0dXJuIHNsYXZlO1xufTtcblxuQ2xvY2sucmVtb3ZlU2xhdmUgPSBmdW5jdGlvbiByZW1vdmVTbGF2ZShpZCkge1xuICB0aGlzLnNsYXZlcyA9IHRoaXMuc2xhdmVzLmZpbHRlcigoc2xhdmUpID0+IHtcbiAgICBpZiAoc2xhdmUuaWQgIT09IGlkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc2xhdmUucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbkNsb2NrLmNsZWFyU2xhdmVzID0gZnVuY3Rpb24gY2xlYXJTbGF2ZXMoKSB7XG4gIGlmICh0aGlzLnNsYXZlcy5sZW5ndGgpIHRoaXMuc2xhdmVzID0gW107XG59O1xuXG5DbG9jay5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnN0b3AoKTtcbiAgdGhpcy5jbGVhclNsYXZlcygpO1xuICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICB0aGlzLnJBRiA9IDA7XG59O1xuXG5DbG9jay5yZW1vdmVBbGxTbGF2ZXMgPSBDbG9jay5jbGVhclNsYXZlcztcblxubW9kdWxlLmV4cG9ydHMgPSBDbG9jaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvY2xvY2suanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL2Nsb2NrLmpzIiwiY29uc3QgZXZlbnQgPSByZXF1aXJlKFwiLi9ldmVudFwiKTtcbmNvbnN0IE1BWF9GUFMgPSAxMDAwLzYwO1xuY29uc3QgVGlja2VyID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBTVEFURSA9IHtcbiAgU1RPUFBFRDogXCJTVE9QUEVEXCIsXG4gIFJVTk5JTkc6IFwiUlVOTklOR1wiLFxuICBET05FOiBcIkRPTkVcIixcbn07XG5cblxuVGlja2VyLmluaXQgPSBmdW5jdGlvbiBpbml0KHtcbiAgdGltZVN0YW1wPXBlcmZvcm1hbmNlLm5vdygpLFxuICBpZCxcbiAgZHVyYXRpb249MTAwMCxcbiAgaW50ZXJ2YWw9TUFYX0ZQUyxcbn0pIHtcbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnBhcmVudCA9IGV2ZW50O1xuICB0aGlzLnBhcmVudC5uYW1lID0gXCJldmVudFwiO1xuXG4gIC8vIFByb2JhYmx5IGNhbnQgc3VwcG9ydCB0aGlzPz9cbiAgLy8gWW91IGhhdmUgdG8gaGF2ZSB5b3VyIG93biBjbG9jay5cbiAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKGR1cmF0aW9uLCBcIm1zXCIpO1xuXG4gIHRoaXMuU1RBVEU7XG4gIHRoaXMuZGVsdGE7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQyID0gMDtcblxuICAvLyBGaXJlIHRoZSBmaXJzdCB0aW1lIHlvdSBnZXQgY2FsbGVkLlxuICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cblRpY2tlci50aWNrRm9yID0gZnVuY3Rpb24gdGlja0ZvcihkdXJhdGlvbiwgc3RyaW5nKSB7XG4gIHN3aXRjaCAoc3RyaW5nKSB7XG4gIGNhc2UgXCJmcmFtZXNcIjogY2FzZSBcImZcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJmcmFtZXNcIixcbiAgICAgIHZhbHVlOiBkdXJhdGlvbixcbiAgICAgIG1zOiBkdXJhdGlvbiAqIE1BWF9GUFMsXG4gICAgfTtcbiAgY2FzZSBcInNlY29uZHNcIjogY2FzZSBcInNcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24gKiAxMDAwLFxuICAgIH07XG4gIGNhc2UgXCJtaWxsaXNlY29uZHNcIjogY2FzZSBcIm1zXCI6IGRlZmF1bHQ6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24sXG4gICAgfTtcbiAgfTtcbn07XG5cblRpY2tlci5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuUlVOTklORykgcmV0dXJuIGZhbHNlO1xuICB0aGlzLlNUQVRFID0gU1RBVEUuUlVOTklORztcbiAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbn07XG5cblRpY2tlci5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlNUT1BQRUQpIHJldHVybiBmYWxzZTtcbiAgdGhpcy5TVEFURSA9IFNUQVRFLlNUT1BQRUQ7XG5cbiAgLy8gS25vdyB3aGF0IHRpbWUgaXQgc3RvcHBlZC5cbiAgLy8gc28gdGhhdCBpZiBpdCBzdGFydHMgYWdhaW4gaXRcbiAgLy8gaXQgY2FuIHJlY2FsY3VsYXRlIGhvdyBmYXIgaXQgbmVlZHMgdG8gZ28uXG4gIGNvbnN0IG5ld0R1cmF0aW9uID0gdGhpcy5kdXJhdGlvbi5tcyAtIHRoaXMudGltZVNpbmNlU3RhcnQgfHwgMDtcblxuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKG5ld0R1cmF0aW9uLCBcIm1pbGxpc2Vjb25kc1wiKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG5cbiAgdGhpcy5zdG9wVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xufTtcblxuVGlja2VyLm51ZGdlID0gZnVuY3Rpb24gbnVkZ2Uoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgc3RhdGUgb2JqZWN0XCIpO1xuICB9XG5cblxuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuU1RPUFBFRCB8fCB0aGlzLlNUQVRFICE9PSBTVEFURS5SVU5OSU5HKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdGhpcy5TVEFURSA9IFNUQVRFLlJVTk5JTkc7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgKz0gc3RhdGUuZGVsdGE7XG5cbiAgaWYgKHRoaXMudGltZVNpbmNlU3RhcnQgPCB0aGlzLmR1cmF0aW9uLm1zKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5TVEFURSA9IFNUQVRFLkRPTkU7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdGlja2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi90aWNrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBGSVJTVF9JRlJBTUUgPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlmcmFtZUhhbmRsZXIoZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50O1xuXG4gIGNvbnN0IGRvbUhlbHBlciA9IHJlcXVpcmUoXCJkb21faGVscGVyXCIpKGRvY3VtZW50KTtcbiAgY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwic2hpbXNcIikoZG9jdW1lbnQpO1xuXG4gIGNvbnN0ICQgPSBzaGltcy4kO1xuICBjb25zdCAkJCA9IHNoaW1zLiQkO1xuXG4gIGxldCBmaXJzdFN0YXRlID0gRklSU1RfSUZSQU1FO1xuXG4gIGNvbnN0IGNoZWNrU3RhdHVzID0gKHJlcykgPT4ge1xuICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5zdGF0dXM7XG5cbiAgICBpZiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA0MDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYEJhZCBzdGF0dXM6ICR7c3RhdHVzfWApO1xuICAgIHRocm93IHJlcy5zdGF0dXNUZXh0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBbZmV0Y2hFeGFtcGxlIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGlkIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBmZXRjaEV4YW1wbGUgPSBmdW5jdGlvbiBmZXRjaEV4YW1wbGUoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goXCIvZXhhbXBsZXMvXCIgKyBpZClcbiAgICAudGhlbihjaGVja1N0YXR1cylcbiAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBbd3JpdGVGcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBwYXJlbnQgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGZyYW1lICBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IHdyaXRlRnJhbWUgPSBmdW5jdGlvbiB3cml0ZUZyYW1lKHBhcmVudCwgZnJhbWUpIHtcbiAgICBpZiAoIWRvbUhlbHBlci5pc0VsZW1lbnQocGFyZW50KSB8fCAhZG9tSGVscGVyLmlzRWxlbWVudChmcmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwYXJlbnQgKyBcIiB0aGlzIHBhcmVudCBpc24ndCBhIERPTSBlbGVtZW50LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZChmcmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtnZXRGcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBuYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGdldEZyYW1lID0gZnVuY3Rpb24gZ2V0RnJhbWUobmFtZSkge1xuICAgIGlmICghbmFtZSkgcmV0dXJuICQoXCJpZnJhbWVbZGF0YS1leGFtcGxlXVwiKTtcbiAgICByZXR1cm4gJChcImlmcmFtZVtkYXRhLWV4YW1wbGVePVwiICsgbmFtZSArIFwiXVwiKTtcbiAgfTtcblxuICAvKipcbiAgICogW2luamVjdFNyYyBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBzcmMgICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZnJhbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGluamVjdFNyYyA9IGZ1bmN0aW9uIGluamVjdFNyYyhzcmMsIGZyYW1lKSB7XG4gICAgZnJhbWUuc3JjZG9jID0gc3JjO1xuICAgIHJldHVybiBmcmFtZTtcbiAgfTtcblxuICAvKipcbiAgICogW2NyZWF0ZUZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5hbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgY3JlYXRlRnJhbWUgPSBmdW5jdGlvbiBjcmVhdGVGcmFtZShuYW1lKSB7XG4gICAgaWYgKCFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArIFwiIE5vdCBhIHZhbGlkIG5hbWUgZm9yIGEgaWQuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3ctc2FtZS1vcmlnaW5cIiwgdHJ1ZSk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93LXNjcmlwdHNcIiwgdHJ1ZSk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCB0cnVlKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmcmFtZV9leGFtcGxlXCIpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWV4YW1wbGVcIiwgbmFtZSk7XG5cbiAgICByZXR1cm4gaWZyYW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbcmVtb3ZlRnJhbWVTcmMgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gdGFyZ2V0IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgcmVtb3ZlRnJhbWVTcmMgPSBmdW5jdGlvbiByZW1vdmVGcmFtZVNyYyh0YXJnZXQpIHtcbiAgICBpZiAoIXRhcmdldCkgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSB0YXJnZXRcIik7XG5cbiAgICBpZiAoIWRvbUhlbHBlci5pc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGdldEZyYW1lKHRhcmdldCkuc3JjRG9jID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC5zcmNEb2MgPSBcIlwiO1xuICB9O1xuXG4gIC8qKlxuICAgKiBleGFtcGxlRXhpc3RzIC0gY2hlY2sgaWYgZXhhbXBsZSBleHNpc3RzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZXhhbXBsZVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgY29uc3QgZXhhbXBsZUV4aXN0cyA9IGZ1bmN0aW9uIGV4YW1wbGVFeGlzdHMoZXhhbXBsZSkge1xuICAgIGlmICghZXhhbXBsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGlkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlkID0gZ2V0RnJhbWUoZXhhbXBsZSlcbiAgICAgICAgLmF0dHJpYnV0ZXNbXCJkYXRhLWV4YW1wbGVcIl1cbiAgICAgICAgLm5vZGVWYWx1ZTtcblxuICAgICAgcmV0dXJuIGlkID09PSBleGFtcGxlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGxvYWRJbklmcmFtZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGNvbnN0IGxvYWRJbklmcmFtZSA9IGZ1bmN0aW9uIGxvYWRJbklmcmFtZShpZCkgeyBcbiAgICBpZiAoZXhhbXBsZUV4aXN0cyhpZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIFxuICAgIGlmIChmaXJzdFN0YXRlKSB7XG4gICAgICAvLyBUb2dnbGUgdGhlIHN0YXRlLlxuICAgICAgZmlyc3RTdGF0ZSA9ICFmaXJzdFN0YXRlO1xuICAgICAgLy8gQ3JlYXRlIHRoZSBmcmFtZVxuICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGNyZWF0ZUZyYW1lKGlkKTtcbiAgICAgIGNvbnN0IHBhcmVudERpdiA9ICQoXCIud3JhcHBlcl9fZnJhbWVcIik7XG4gICAgICAvLyBJZiB3ZSBhcmUgbm90IHRoZSBmaXJzdCBmcmFtZSBvZiB0aGUgZG9jdW1lbnQgZG8gdGhpcyByZWd1bGFyIHN0dWZmLlxuICAgICAgcmV0dXJuIGZldGNoRXhhbXBsZShpZClcbiAgICAgICAgLnRoZW4oKHNyYykgPT4gaW5qZWN0U3JjKHNyYywgZmlyc3RGcmFtZSkpXG4gICAgICAgIC50aGVuKChuZXdGcmFtZSkgPT4gd3JpdGVGcmFtZShwYXJlbnREaXYsIG5ld0ZyYW1lKSlcbiAgICAgICAgLmNhdGNoKGVycm9yRGlhbG9nKTtcbiAgICB9XG5cbiAgICAvLyBUb2dnbGUgdGhlIHN0YXRlIGFuZCByZW1vdmUgb2xkIHNyYyBhbmQgaW5qZWN0IG5ldyBzcmMuXG4gICAgY29uc3QgZXhpc3RpbmdGcmFtZSA9IGdldEZyYW1lKCk7XG4gICAgcmVtb3ZlRnJhbWVTcmMoZXhpc3RpbmdGcmFtZSk7XG4gICAgZXhpc3RpbmdGcmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWV4YW1wbGVcIiwgaWQpO1xuICAgIHJldHVybiBmZXRjaEV4YW1wbGUoaWQpXG4gICAgICAudGhlbigoc3JjKSA9PiBpbmplY3RTcmMoc3JjLCBleGlzdGluZ0ZyYW1lKSlcbiAgICAgIC5jYXRjaChlcnJvckRpYWxvZyk7XG4gIH07XG5cbiAgY29uc3QgZXJyb3JEaWFsb2cgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAkKFwiLmVycm9yX2RpYWxvZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICQoXCIuZXJyb3JfZGlhbG9nXCIpLmluc2VydEFkamFjZW50VGV4dChcImFmdGVyQmVnaW5cIiwgZXJyKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbW92ZUZyYW1lU3JjLFxuICAgIHdyaXRlRnJhbWUsXG4gICAgZ2V0RnJhbWUsXG4gICAgaW5qZWN0U3JjLFxuICAgIGNyZWF0ZUZyYW1lLFxuICAgIGxvYWRJbklmcmFtZSxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL2lmcmFtZU1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQ7XG5cbiAgY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwic2hpbXNcIikoZG9jdW1lbnQpO1xuICBjb25zdCAkJCA9IHNoaW1zLiQkO1xuXG4gIC8qKlxuICAgKiBpc0VsZW1lbnQgY2hlY2tzIGlmIGEgZWxlbWVudCBpcyBhIERPTSBub2RlLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzRWxlbWVudCA9IChvYmopID0+IG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBtYXBUZXh0IHRha2VzIGFuIGVsbWVudCBsaXN0IGFuZCByZXR1cm4gYSBhcnJheSBvZiB0ZXh0Tm9kZXMuXG4gICAqIEBwYXJhbSAge0RPTUVsZW1lbXR9IGVsbSAgIERPTUVsZW1lbXRcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgQXJyYXlcbiAgICovXG4gIGNvbnN0IG1hcFRvVGV4dCA9IGZ1bmN0aW9uIG1hcFRleHQoZWxtKSB7XG4gICAgY29uc3QgZWxtTGlzdCA9ICQkKGVsbSwgZG9jdW1lbnQpO1xuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdO1xuXG4gICAgLypcbiAgICAgIFdlIG5lZWQgdG8gdXNlIGEgZm9yIGBvZmAgbG9vcCBoZXJlIGNhdXNlIGl0cyBhIE5vZGVMaXN0IGFuZCBub3QgYW5cbiAgICAgIGFycmF5LlxuICAgICovXG4gICAgZm9yIChsZXQgaXRlbSBvZiBlbG1MaXN0KSB7XG4gICAgICB0ZXh0Tm9kZXMucHVzaChpdGVtLnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0Tm9kZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIGVsbURlbGVnYXRvciBkZWxlZ2F0ZSBpdGVtc1xuICAgKiBAcGFyYW0gIHtET01FbGVtZW50fSBlbG0gVGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBkZWxlZ2F0ZXMuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnQgQm9vbGVhbiB0byBjaGVjayB3aGljaCBlbGVtZW50cyB0byBkZWxlZ2F0ZSB0by5cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIGNoZWNrVGFyZ2V0IGZ1bmN0aW9uIGFuZCBhIGNhbGxiYWNrLlxuICAgKi9cbiAgY29uc3QgZWxtRGVsZWdhdG9yID0gZnVuY3Rpb24gZWxtRGVsZWdhdG9yKGVsbSwgZXZlbnQpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbG0pKSB0aHJvdyBuZXcgRXJyb3IoZWxtICsgXCIgbmVlZHMgdG8gYmUgYSBlbGVtZW50LlwiKTtcbiAgICBpZiAoZWxtLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKGVsbSArIFwiIG5lZWRzIHRvIGJlIGVsZW1lbnQgbGlzdFwiKTtcblxuICAgIHJldHVybiBmdW5jdGlvbihjaGVja1RhcmdldCwgY2FsbGJhY2spIHtcbiAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoY2hlY2tUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGUudGFyZ2V0LCBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtlbG1EZWxlZ2F0b3IsIG1hcFRvVGV4dCwgaXNFbGVtZW50fTtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUvZG9tX2hlbHBlci5qcyIsIi8qIHNoaW1zICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1zKGRvY3VtZW50KSB7XG4gIGRvY3VtZW50ID0gZG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudDtcblxuICBjb25zdCAkID0gZnVuY3Rpb24gcXMoLi4uYXJncykge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKC4uLmFyZ3MpO1xuICB9O1xuXG4gIGNvbnN0ICQkID0gZnVuY3Rpb24gcXNBbGwoLi4uYXJncykge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKC4uLmFyZ3MpO1xuICB9O1xuXG4gIHJldHVybiB7JCwgJCR9O1xufTtcbi8qIHNoaW1zICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL3NoaW1zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==