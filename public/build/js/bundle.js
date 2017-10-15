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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	
	    if (typeof input === 'string') {
	      this.url = input
	    } else {
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
	    rawHeaders.split('\r\n').forEach(function(line) {
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
	    * @description Given two vectors return the distance between the two.
	    * @memberOf Utils
	    * @param  {Vector} v1
	    * @param  {Vector} v2
	    * @return {Number}
	    */
				function distanceVec(v1, v2) {
					var dVec = v1.subtract(v2);
					return Math.hypot(dVec.get("x"), dVec.get("y"));
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
	    * @param  {Float} ease [description]
	    * @param  {Int} a    [description]
	    * @param  {Int} b    [description]
	    * @return {Int}      [description]
	    */
				function ease(ease, a, b) {
					// the delta can get extremely small and its not performant to keep
					// on rendering or calculating for animation purposes.
					if (Math.abs(b - a) < 0.1) {
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
	    * @return {[type]}            [description]
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
					distanceVec: distanceVec,
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
					masses: []
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
					var options, name, src, copy, copyIsArray, clone;
					var target = arguments[0];
					var i = 1;
					var length = arguments.length;
					var deep = false;
	
					// Handle a deep copy situation
					if (typeof target === 'boolean') {
						deep = target;
						target = arguments[1] || {};
						// skip the boolean and the target
						i = 2;
					}
					if (target == null || (typeof target === 'undefined' ? 'undefined' : _typeof2(target)) !== 'object' && typeof target !== 'function') {
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
	
				/**
	    * @class Shapes
	    * @param {Object} ctx      Canvas context.
	    * @param {Object} document The document object.
	    */
	
				function Shapes(ctx, document) {
					if (!ctx) {
						throw new Error("Shapes: Please provide a context argument [arg::1]");
					}
					this.ctx = ctx;
					this.document = document || window.document;
				};
	
				/**
	    * @memberOf Shapes
	    * @description draw a circle.
	    * @param {Number} x     The x coordinate of the circle.
	    * @param {Number} y     The y coordinate of the circle.
	    * @param {Number} r     The radius of the circle.
	    * @param {String} color The color of the circle.
	    */
				Shapes.prototype.circle = function drawCircle() {
					var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
					var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
					var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
					var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#000000";
	
					this.ctx.fillStyle = color;
					this.ctx.beginPath();
					this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
					this.ctx.fill();
				};
	
				/**
	    * @memberOf Shapes
	    * @description Fill a rectangle
	    * @param  {Number} x     Starting point X
	    * @param  {Number} y     Starting point Y
	    * @param  {Number} w     Width of the rectangle
	    * @param  {Number} h     Height of the rectangle
	    * @param  {String} color A hex string.
	    */
				Shapes.prototype.rect = function drawRect(x, y) {
					var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
					var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
					var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";
	
					this.ctx.fillStyle = color;
					this.ctx.fillRect(x, y, w, h);
				};
	
				/**
	    * pCircle
	    * @memberOf Shapes
	    * @param  {Particle} p
	    * @return {Particle}
	    */
				Shapes.prototype.pCircle = function particleCircle(p) {
					this.circle(p.state.x, p.state.y, p.state.radius, p.state.color);
					return p;
				};
	
				/**
	    * pRect
	    * @memberOf Shapes
	    * @param  {Particle} p
	    * @return {Particle}
	    */
				Shapes.prototype.pRect = function particleRect(p) {
					this.rect(p.state.x, p.state.y, p.state.width, p.state.height, p.state.color);
					return p;
				};
	
				/**
	    * @memberOf Shapes
	    * @description Draw a line between these two points.
	    * @param  {Number} x0
	    * @param  {Number} y0
	    * @param  {Number} x1
	    * @param  {Number} y1
	    * @param  {string} style
	    */
				Shapes.prototype.drawLineXY = function (x0, y0, x1, y1) {
					var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";
	
					this.ctx.beginPath();
					this.ctx.strokeStyle = style;
					this.ctx.moveTo(x0, y0);
					this.ctx.lineTo(x1, y1);
					this.ctx.stroke();
				};
	
				/**
	    * @memberOf Shapes
	    * @param  {Vector} vec0
	    * @param  {Vector} vec1
	    * @return {Void}
	    */
				Shapes.prototype.drawLineVec = function (vec0, vec1) {
					this.drawLineXY(vec0.get("x"), vec0.get("y"), vec1.get("x"), vec1.get("y"));
					return void 0;
				};
	
				Shapes.prototype.drawLinePoints = function () {
					for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
						points[_key] = arguments[_key];
					}
	
					var firstPoint = points[0];
	
					if (!firstPoint) {
						throw new Error("Please provide valid inputs");
					}
	
					if (points.length < 1) {
						throw new Error("Must be given a a number of points greater than 1");
					}
	
					var sx = firstPoint.x,
					    sy = firstPoint.y;
	
					this.ctx.beginPath();
					this.ctx.moveTo(sx, sy);
	
					// Some tricky destructing going on here.
					// I need some practice so... just testing it out.
					// The ...points bit is just a shallow copying array
					// but getting rid of the first argument.
					// The second bit is destructing the object that
					// it gets for each iteration and aliasing
					// the values to px and py.
	
					var xs = points.slice(1);
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = xs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var _ref = _step.value;
							var px = _ref.x;
							var py = _ref.y;
	
							this.ctx.lineTo(px, py);
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
				};
	
				/**
	    * @memberOf Shapes
	    * @param  {number} width
	    * @param  {number} height
	    * @param  {Number} gridSize
	    * @param  {String} color
	    */
				Shapes.prototype.grid = function (width, height) {
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
				};
	
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
			}])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
	    throw res.statusText;
	  };
	
	  /**
	   * [fetchExample description]
	   * @param  {[type]} id [description]
	   * @return {[type]}    [description]
	   */
	  var fetchExample = function fetchExample(id) {
	    return fetch("/examples/" + id).then(checkStatus).then(function (response) {
	      return response.text();
	    }).catch(function (err) {
	      throw new Error(err);
	    });
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
	   * [exampleExists description]
	   * @param  {[type]} example [description]
	   * @return {[type]}         [description]
	   */
	  var exampleExists = function exampleExists(example) {
	    if (!example) return false;
	
	    var id = void 0;
	
	    try {
	      id = getFrame(example).attributes["data-example"].nodeValue;
	    } catch (e) {
	      if (e) {
	        id = false;
	      }
	    } finally {
	      return id === example;
	    }
	  };
	
	  /**
	   * [loadInIframe description]
	   * @param  {[type]} name [description]
	   * @return {[type]}      [description]
	   */
	  var loadInIframe = function loadInIframe(id) {
	    if (!exampleExists(id)) {
	      var _ret = function () {
	
	        if (!firstState) {
	          var _ret2 = function () {
	
	            // Toggle the state and remove old src and inject new src.
	            var existingFrame = getFrame();
	            removeFrameSrc(existingFrame);
	            existingFrame.setAttribute("data-example", id);
	            return {
	              v: {
	                v: fetchExample(id).then(function (src) {
	                  return injectSrc(src, existingFrame);
	                }).catch(loadIframeError)
	              }
	            };
	          }();
	
	          if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
	        }
	
	        // Toggle the state.
	        firstState = !firstState;
	        // Create the frame
	        var firstFrame = createFrame(id);
	        var parentDiv = $(".wrapper__frame");
	        // If we are not the first frame of the document do this regular stuff.
	        return {
	          v: fetchExample(id).then(function (src) {
	            return injectSrc(src, firstFrame);
	          }).then(function (newFrame) {
	            return writeFrame(parentDiv, newFrame);
	          }).catch(loadIframeError)
	        };
	      }();
	
	      if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	    }
	
	    return false;
	  };
	
	  var loadIframeError = function loadIframeError(err) {
	    console.error(err);
	    $(".wrapper__error").style.display = "block";
	    $(".wrapper__error").style.height = "100vh";
	    $(".wrapper__error").style.width = "100%";
	    $(".wrapper__error #error").insertAdjacentText("afterBegin", err);
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
	
	        return callback(new Error("No target matched"));
	      });
	    };
	  };
	
	  return { elmDelegator: elmDelegator, mapToText: mapToText, isElement: isElement };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWUzZDQxZTAwNzY5ZmIwNzBhMzgiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDBjZmI0MTAzNzQ2ZTk3NGIxZDYwIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9tYWluLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdmVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9leHRlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvY2xvbmVEZWVwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVNYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hZGRTZXRFbnRyeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvc2hhcGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9ldmVudC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL2Nsb2NrLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9pZnJhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvZG9tX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL3NoaW1zLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsInBhcnRpY2xlTGliIiwicmVxdWlyZSIsImlmcmFtZSIsImRvY3VtZW50Iiwic2hpbXMiLCJ1dGlscyIsIkRFRkFVTFRfRVhBTVBMRSIsInNldGhhc2giLCJmcmFnbWVudCIsImxvY2F0aW9uIiwiaGFzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRobmFtZSIsInRleHROb2RlcyIsIm1hcFRvVGV4dCIsIiQiLCJsZW5ndGgiLCJFcnJvciIsIm9uQ2xpY2tPZkxpc3QiLCJlbG1EZWxlZ2F0b3IiLCJpc0FuY2hvciIsImVsbSIsInRhZ05hbWUiLCJlcnIiLCJ0YXJnZXQiLCJldnQiLCJ0ZXh0IiwibG9hZEluSWZyYW1lIiwiaGFzaFF1ZXJ5Iiwic3Vic3RyIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJGSVJTVF9JRlJBTUUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaWZyYW1lSGFuZGxlciIsImRvbUhlbHBlciIsIiQkIiwiZmlyc3RTdGF0ZSIsImNoZWNrU3RhdHVzIiwicmVzIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImZldGNoRXhhbXBsZSIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsIndyaXRlRnJhbWUiLCJwYXJlbnQiLCJmcmFtZSIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0RnJhbWUiLCJuYW1lIiwiaW5qZWN0U3JjIiwic3JjIiwic3JjZG9jIiwiY3JlYXRlRnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRnJhbWVTcmMiLCJzcmNEb2MiLCJleGFtcGxlRXhpc3RzIiwiZXhhbXBsZSIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJlIiwiZXhpc3RpbmdGcmFtZSIsImxvYWRJZnJhbWVFcnJvciIsImZpcnN0RnJhbWUiLCJwYXJlbnREaXYiLCJuZXdGcmFtZSIsImVycm9yIiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwid2lkdGgiLCJpbnNlcnRBZGphY2VudFRleHQiLCJvYmoiLCJIVE1MRWxlbWVudCIsIm1hcFRleHQiLCJlbG1MaXN0IiwiaXRlbSIsInB1c2giLCJldmVudCIsImNoZWNrVGFyZ2V0IiwiY2FsbGJhY2siLCJwcmV2ZW50RGVmYXVsdCIsInFzIiwicXVlcnlTZWxlY3RvciIsInFzQWxsIiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVAsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQWtDLG9CQUFvQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBd0MsNEJBQTRCO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZELFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVCwrRUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0Esd0NBQXVDLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQStCLDBCQUEwQixlQUFlO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7OztBQ3pjREEsUUFBT0MsV0FBUCxHQUFxQixtQkFBQUMsQ0FBUSxDQUFSLENBQXJCOztBQUVBLEtBQU1DLFNBQVMsbUJBQUFELENBQVEsQ0FBUixFQUE0QkUsUUFBNUIsQ0FBZjtBQUNBLEtBQU1DLFFBQVEsbUJBQUFILENBQVEsQ0FBUixFQUFvQkUsUUFBcEIsQ0FBZDtBQUNBLEtBQU1FLFFBQVEsbUJBQUFKLENBQVEsQ0FBUixFQUF5QkUsUUFBekIsQ0FBZDtBQUNBLEtBQU1HLGtCQUFrQixnQkFBeEI7O0FBRUEsS0FBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLFFBQUQsRUFBYztBQUM1QixVQUFPVCxPQUFPVSxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkYsWUFBWSxFQUExQztBQUNELEVBRkQ7O0FBSUFMLFVBQVNRLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3ZELE9BQU1ELE9BQU9YLE9BQU9VLFFBQVAsQ0FBZ0JDLElBQTdCO0FBQ0EsT0FBTUUsV0FBV2IsT0FBT1UsUUFBUCxDQUFnQkcsUUFBakM7QUFDQSxPQUFNQyxZQUFZUixNQUFNUyxTQUFOLENBQWdCLHFCQUFoQixDQUFsQjtBQUNBLE9BQU1DLElBQUlYLE1BQU1XLENBQWhCOztBQUVBLE9BQUlGLFVBQVVHLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsV0FBTSxJQUFJQyxLQUFKLENBQVUsdUNBQVYsQ0FBTjtBQUNEOztBQUVELFdBQVFMLFFBQVI7QUFDQSxVQUFLLEdBQUw7QUFBVztBQUNUO0FBQ0Q7QUFDRCxVQUFLLFdBQUw7QUFBbUI7QUFDakIsYUFBTU0sZ0JBQWdCYixNQUFNYyxZQUFOLENBQW1CSixFQUFFLGdCQUFGLENBQW5CLEVBQXdDLE9BQXhDLENBQXRCO0FBQ0EsYUFBTUssV0FBVyxTQUFYQSxRQUFXLENBQUNDLEdBQUQ7QUFBQSxrQkFBU0EsSUFBSUMsT0FBSixLQUFnQixHQUF6QjtBQUFBLFVBQWpCOztBQUVBSix1QkFBY0UsUUFBZCxFQUF3QixVQUFTRyxHQUFULEVBQWNDLE1BQWQsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ2pELGVBQUlGLEdBQUosRUFBUyxNQUFNQSxHQUFOOztBQUVUaEIsbUJBQVFpQixPQUFPRSxJQUFmO0FBQ0F4QixrQkFBT3lCLFlBQVAsQ0FBb0JILE9BQU9FLElBQTNCO0FBQ0QsVUFMRDs7QUFPQTtBQUNBLGFBQUloQixLQUFLTSxNQUFULEVBQWlCO0FBQ2YsZUFBTVksWUFBWWxCLEtBQUttQixNQUFMLENBQVksQ0FBWixDQUFsQjs7QUFFQSxlQUFJaEIsVUFBVWlCLE9BQVYsQ0FBa0JGLFNBQWxCLElBQStCLENBQUMsQ0FBcEMsRUFBdUM7QUFDckMxQixvQkFBT3lCLFlBQVAsQ0FBb0JDLFNBQXBCO0FBQ0Q7QUFDRjs7QUFFRjtBQUNDLGFBQUlsQixLQUFLTSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkJULG1CQUFRRCxlQUFSO0FBQ0FKLGtCQUFPeUIsWUFBUCxDQUFvQnJCLGVBQXBCO0FBQ0Q7QUFDRDtBQUNEOztBQUVELFVBQUssUUFBTDtBQUFnQjtBQUNkO0FBQ0Q7QUFDRDtBQUFTO0FBQ1B5QixpQkFBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0Q7QUFyQ0Q7QUF1Q0QsRUFqREQsRTs7Ozs7Ozs7OztBQ1hBLDJEQUNBOytHQUNBLDJCQUNBLHVCQUNBLHlFQUNBLG9ZQUNBLGdDQUVBLGtDQUNBO0FBQUM7QUFDRCxTOztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O1FBQU0sU0FBUyxvQkFDZjtRQUFNLFdBQVcsb0JBQ2pCO1FBQU0sUUFBUSxvQkFDZDtRQUFNLFNBQVMsb0JBQ2Y7UUFBTSxNQUFNLG9CQUNaO1FBQU0sUUFBUSxvQkFDZDtRQUFNLFNBQVMsb0JBRWY7O1dBQU87YUFFTDtlQUNBO1lBQ0E7YUFDQTtVQUNBO2FBQ0E7WUFQZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RGOztBQUVBOztBQUVBOztRQUFNLFFBQVEsb0JBRWQ7O1FBQU07UUFFSjtRQUdGO0FBSkU7O0FBU0Y7Ozs7Ozs7Ozs7UUFJTSxxQkFNSjs7QUFJQTs7Ozt1QkFBMkM7VUFBQTs7NEJBQ3pDOztXQUFLLFFBQ047QUFFRDs7Ozs7Ozs7Ozs7OytCQU82QztXQUFBO1dBQUEsd0VBQzNDOztXQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUMsR0FBRCxHQUFJLEdBQzNCO2NBQ0Q7OztXQUVEOzs7Ozs7Ozs7MEJBT0ksTUFBYyxLQUNoQjtBQUNBO0FBRUE7O1dBQUksS0FBSyxNQUFNLGVBQWUsT0FDNUI7YUFBSyxNQUFNLFFBQ1g7ZUFDRDtBQUVEOztjQUNEOzs7V0FFRDs7Ozs7Ozs7MEJBTUksTUFDRjtjQUFPLEtBQUssTUFDYjs7O1dBRUQ7Ozs7Ozs7OytCQU1TLEtBQ1A7QUFDQTtBQUVBOztXQUFNLFNBQVMsS0FFZjs7WUFBSyxJQUFJLEtBQUssS0FBSyxJQUFJLE9BQ3ZCO1lBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxPQUV2Qjs7Y0FDRDs7O1dBRUQ7Ozs7Ozs7O2dDQU1VLFFBQ1I7QUFDQTtBQUVBOztXQUFNLE1BQU0sS0FFWjs7WUFBSyxJQUFJLEtBQUssS0FBSyxJQUFJLE9BQ3ZCO1lBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxPQUV2Qjs7Y0FDRDs7O1dBRUQ7Ozs7Ozs7a0NBTUU7V0FBTSxJQUFLLEtBQUssSUFDaEI7V0FBTSxJQUFLLEtBQUssSUFDaEI7Y0FBTyxLQUFLLE1BQU0sR0FDbkI7OztXQUVEOzs7Ozs7O2lDQU1FO1dBQU0sSUFBSyxLQUFLLElBQ2hCO1dBQU0sSUFBSyxLQUFLLElBQ2hCO2NBQU8sS0FBSyxNQUFNLEdBQ25COzs7V0FFRDs7Ozs7Ozs7OytCQU84QztXQUFBO1dBQUEsMEVBQzVDOztXQUFNLElBQUksTUFBTSxLQUFLLEtBQUssVUFBVSxLQUNwQztXQUFNLElBQUksTUFBTSxLQUFLLEtBQUssVUFBVSxLQUNwQztjQUFPLEtBQUssT0FBTyxHQUNwQjs7O1dBRUQ7Ozs7Ozs7Ozs7OztzQ0FVd0Y7V0FBQTtXQUFBO1dBQUE7V0FBQSwyRUFDdEY7O2NBQU8sS0FBSyxJQUFJLE1BQ2hCO2NBQU8sS0FBSyxJQUFJLE1BQ2hCO2NBQU8sS0FBSyxJQUFJLE1BQ2hCO2NBQU8sS0FBSyxJQUFJLE1BRWhCOztXQUFNLElBQUssTUFBTSxjQUFjLE1BQy9CO1dBQU0sSUFBSyxNQUFNLGNBQWMsTUFFL0I7O2NBQU8sS0FBSyxPQUFPLEdBQ3BCOzs7V0FFRDs7Ozs7Ozs7MEJBTUksSUFDRjtjQUFPLEtBQUssT0FDVixLQUFLLElBQUksT0FBTyxHQUFHLElBQUksTUFDdkIsS0FBSyxJQUFJLE9BQU8sR0FBRyxJQUV0Qjs7O1dBRUQ7Ozs7Ozs7OzsrQkFPUyxJQUNQO2NBQU8sS0FBSyxPQUNWLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUN2QixLQUFLLElBQUksT0FBTyxHQUFHLElBRXRCOzs7V0FFRDs7Ozs7Ozs7OytCQU9TLElBQ1A7Y0FBTyxLQUFLLE9BQ1YsS0FBSyxJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQ3ZCLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFFdEI7OztXQUVEOzs7Ozs7Ozs2QkFNTyxJQUNMO2NBQU8sS0FBSyxPQUNWLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUN2QixLQUFLLElBQUksT0FBTyxHQUFHLElBRXRCOzs7V0FFRDs7Ozs7Ozs7NEJBTU0sSUFDSjtZQUFLLE1BQU0sSUFBSSxLQUFLLElBQUksT0FBTyxHQUFHLElBQ2xDO1lBQUssTUFBTSxJQUFJLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFDbEM7Y0FDRDs7O1dBRUQ7Ozs7Ozs7O21DQU1hLElBQ1g7WUFBSyxNQUFNLElBQUksS0FBSyxJQUFJLE9BQU8sR0FBRyxJQUNsQztZQUFLLE1BQU0sSUFBSSxLQUFLLElBQUksT0FBTyxHQUFHLElBQ2xDO2NBQ0Q7OztXQUVEOzs7Ozs7OztpQ0FNVyxJQUNUO1lBQUssTUFBTSxJQUFJLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFDbEM7WUFBSyxNQUFNLElBQUksS0FBSyxJQUFJLE9BQU8sR0FBRyxJQUNsQztjQUNEOzs7V0FHRDs7Ozs7Ozs7K0JBTVMsSUFDUDtZQUFLLE1BQU0sSUFBSSxLQUFLLElBQUksT0FBTyxHQUFHLElBQ2xDO1lBQUssTUFBTSxJQUFJLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFFbEM7O2NBQ0Q7OztXQUVEOzs7Ozs7OytCQUtTLE9BQ1A7V0FBTSxNQUFNLEtBQUssSUFDakI7V0FBTSxNQUFNLEtBQUssSUFFakI7O1dBQU0sSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssTUFBTSxJQUMxQztXQUFNLElBQUksS0FBSyxNQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sSUFFMUM7O1lBQUssTUFBTSxJQUNYO1lBQUssTUFBTSxJQUVYOztjQUNEOzs7V0FFRDs7Ozs7Ozs7c0NBTXVCLElBQVksSUFDakM7V0FBTSxPQUFPLEdBQUcsU0FDaEI7Y0FBTyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sS0FBSyxJQUN2QztBQUVEOzs7Ozs7Ozs7Ozs7c0NBT3VCLE1BQWMsTUFDbkM7V0FBTSxLQUFLLEtBQUssSUFDaEI7V0FBTSxLQUFLLEtBQUssSUFDaEI7V0FBTSxLQUFLLEtBQUssSUFDaEI7V0FBTSxLQUFLLEtBQUssSUFDaEI7Y0FBTyxNQUFNLGVBQWUsSUFBSSxJQUFJLElBQ3JDOzs7OztBQUNGOztBQUVEOztXQUFPLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUM3VGpCOztBQUVBOztBQUVBOztBQVFBOzs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7O2FBQVMsVUFBVSxLQUFhLEtBQWEsS0FDM0M7WUFBUSxDQUFDLE1BQU0sUUFBUSxNQUN4QjtBQUVEOztBQVNBOzs7Ozs7Ozs7YUFBUyxLQUFLLEtBQWEsS0FBYSxLQUN0QztZQUFPLENBQUMsTUFBTSxPQUFPLE1BQ3RCO0FBRUQ7O0FBVUE7Ozs7Ozs7Ozs7YUFBUyxJQUFJLE9BQWUsUUFBZ0IsUUFBZ0IsU0FBaUIsU0FDM0U7Y0FBVSxLQUFLLElBQUksUUFDbkI7Y0FBVSxLQUFLLElBQUksUUFDbkI7ZUFBVyxLQUFLLElBQUksU0FDcEI7ZUFBVyxLQUFLLElBQUksU0FDcEI7WUFBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFNBQVMsU0FDL0M7QUFFRDs7QUFRQTs7Ozs7Ozs7YUFBUyxRQUFRLEtBQ2Y7WUFBUyxNQUNWO0FBRUQ7O0FBU0E7Ozs7Ozs7OzthQUFTLE1BQU0sT0FBZSxLQUFhLEtBQ3pDO1lBQU8sS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssSUFBSSxLQUFLLE9BQU8sS0FBSyxJQUFJLEtBQy9EO0FBRUQ7O0FBT0E7Ozs7Ozs7YUFBUyxjQUFjLEdBQVcsR0FDaEM7U0FBSSxNQUFNLEtBQUssSUFBSSxHQUNuQjtTQUFJLE1BQU0sS0FBSyxJQUFJLEdBQ25CO1lBQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLFFBQzFDO0FBRUQ7O0FBU0E7Ozs7Ozs7OzthQUFTLFdBQVcsSUFBWSxJQUFZLElBQVksSUFDdEQ7U0FBTSxLQUFLLEtBQ1g7U0FBTSxLQUFLLEtBQ1g7WUFBTyxLQUFLLE1BQU0sSUFDbkI7QUFFRDs7QUFPQTs7Ozs7OzthQUFTLFlBQVksSUFBWSxJQUMvQjtTQUFNLE9BQU8sR0FBRyxTQUNoQjtZQUFPLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQ3ZDO0FBRUQ7O0FBUUE7Ozs7Ozs7O2FBQVMsUUFBUSxLQUFhLEtBQWEsS0FDekM7WUFBUSxPQUFPLEtBQUssSUFBSSxLQUFLLFFBQVUsS0FBSyxJQUFJLEtBQUssUUFDdEQ7QUFFRDs7QUFTQTs7Ozs7Ozs7O2FBQVMsZUFBZSxNQUFjLE1BQWMsTUFBYyxNQUNoRTtZQUNFLEtBQUssSUFBSSxNQUFNLFNBQVMsS0FBSyxJQUFJLE1BQU0sU0FDdkMsS0FBSyxJQUFJLE1BQU0sU0FBUyxLQUFLLElBQUksTUFFcEM7QUFFRDs7QUFPQTs7Ozs7OzthQUFTLGNBQWMsSUFBUyxJQUM5QjtTQUFNLE1BQU0sR0FBRyxNQUNmO1NBQU0sTUFBTSxHQUFHLE1BQ2Y7U0FBTSxNQUFNLEdBQUcsTUFDZjtTQUFNLE1BQU0sR0FBRyxNQUVmOztTQUFNLE1BQU0sTUFBTSxHQUFHLE1BQ3JCO1NBQU0sTUFBTSxNQUFNLEdBQUcsTUFDckI7U0FBTSxNQUFNLE1BQU0sR0FBRyxNQUNyQjtTQUFNLE1BQU0sTUFBTSxHQUFHLE1BRXJCOztZQUNFLGVBQWUsS0FBSyxLQUFLLEtBQUssUUFDOUIsZUFBZSxLQUFLLEtBQUssS0FFNUI7QUFFRDs7QUFPQTs7Ozs7OzthQUFTLGdCQUFnQixJQUFTLElBQ2hDO1NBQU0sT0FBUSxHQUFHLE1BQU0sU0FBUyxHQUFHLE1BQ25DO1NBQU0sV0FBVyxXQUFXLEdBQUcsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsTUFFbkU7O1NBQUksVUFDRjthQUFPLE9BQ1I7QUFFRDs7WUFDRDtBQUVEOztBQVFBOzs7Ozs7OzthQUFTLHFCQUFxQixHQUFXLEdBQVcsUUFDbEQ7QUFDQTtTQUFNLE9BQU8sV0FDWCxHQUNBLEdBQ0EsT0FBTyxNQUFNLEdBQ2IsT0FBTyxNQUdUOztZQUFPLE9BQU8sTUFBTSxTQUNyQjtBQUVEOztBQU9BOzs7Ozs7O2FBQVMsbUJBQW1CLEtBQWEsUUFDdkM7WUFBTyxPQUFPLE1BQU0sU0FBUyxXQUMzQixJQUFJLElBQUksTUFDUixJQUFJLElBQUksTUFDUixPQUFPLE1BQU0sR0FDYixPQUFPLE1BRVY7QUFFRDs7QUFRQTs7Ozs7Ozs7YUFBUyxtQkFBbUIsR0FBVyxHQUFXLE1BQ2hEO1NBQU0sUUFBUSxLQUFLLE1BQ25CO1NBQU0sUUFBUSxLQUFLLE1BQ25CO1lBQ0UsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLE1BQU0sVUFDckMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLE1BRWxDO0FBRUQ7O0FBT0E7Ozs7Ozs7YUFBUyxpQkFBaUIsS0FBYSxNQUNyQztZQUFPLG1CQUFtQixJQUFJLElBQUksTUFBTSxJQUFJLElBQUksTUFDakQ7QUFFRDs7QUFVQTs7Ozs7Ozs7OzthQUFTLFNBQVMsTUFBZ0IsTUFBYyxTQUM5QztTQUFJLGVBQ0o7U0FBSSxZQUNKO1NBQUksY0FDSjtTQUFJLFVBQ0o7U0FBSSxXQUNKO1NBQUksQ0FBQyxTQUFTLFVBQ2Q7U0FBTSxRQUFRLGlCQUNaO2lCQUFXLFFBQVEsWUFBWSxRQUFRLElBQUksS0FDM0M7Z0JBQ0E7ZUFBUyxLQUFLLE1BQU0sU0FDcEI7VUFBSSxDQUFDLFNBQVMsVUFBVSxPQUN6QjtBQUNEO1lBQU8sWUFBdUI7d0NBQUEsbURBQVg7QUFBVztBQUM1Qjs7VUFBSSxNQUFNLEtBQ1Y7VUFBSSxDQUFDLFlBQVksUUFBUSxZQUFZLE9BQU8sV0FDNUM7VUFBSSxZQUFZLFFBQVEsTUFDeEI7Z0JBQ0E7YUFDQTtVQUFJLGFBQWEsS0FBSyxZQUFZLE1BQ2hDO1dBQUksU0FDRjtxQkFDQTtrQkFDRDtBQUNEO2tCQUNBO2dCQUFTLEtBQUssTUFBTSxTQUNwQjtXQUFJLENBQUMsU0FBUyxVQUFVLE9BQ3pCO0FBUkQsYUFRTyxJQUFJLENBQUMsV0FBVyxRQUFRLGFBQWEsT0FDMUM7aUJBQVUsV0FBVyxPQUN0QjtBQUNEO2FBQ0Q7QUFDRjtBQUVEOztBQVFBOzs7Ozs7OzthQUFTLFVBQVUsUUFBZ0IsR0FBVyxHQUM1QztTQUFJLE9BQU8sTUFBTSxZQUNiLE9BQU8sTUFBTSxZQUNiLE9BQU8sV0FBVyxVQUNwQjtZQUFNLElBQUksTUFDWDtBQUVEOztTQUFNLFFBQVEsS0FBSyxNQUFNLEdBQ3pCO1NBQUksS0FBSyxJQUFJLFNBQ2I7U0FBSSxLQUFLLElBQUksU0FFYjs7WUFBTyxDQUFDLEdBQ1Q7QUFFRDs7QUFRQTs7Ozs7Ozs7YUFBUyxTQUFTLE9BQWUsR0FBVyxHQUMxQztTQUFJLE9BQU8sTUFBTSxZQUNiLE9BQU8sTUFBTSxZQUNiLE9BQU8sVUFBVSxVQUNuQjtZQUFNLElBQUksTUFDWDtBQUVEOztTQUFNLFNBQVMsS0FBSyxNQUFNLEdBQzFCO1NBQUksS0FBSyxJQUFJLFNBQ2I7U0FBSSxLQUFLLElBQUksU0FFYjs7WUFBTyxDQUFDLEdBQ1Q7QUFFRDs7QUFNQTs7Ozs7O2FBQVMsU0FBUyxLQUNoQjtZQUFPLE1BQU0sTUFBTSxLQUNwQjtBQUVEOztBQU1BOzs7Ozs7YUFBUyxTQUFTLEtBQ2hCO1lBQU8sTUFBTSxNQUFNLEtBQ3BCO0FBRUQ7O0FBT0E7Ozs7Ozs7YUFBUyxjQUFjLEtBQWEsUUFDbEM7U0FBTSxPQUFPLEtBQUssSUFBSSxJQUN0QjtZQUFPLEtBQUssTUFBTSxNQUFNLFFBQ3pCO0FBRUQ7O0FBTUE7Ozs7OzthQUFTLGdCQUFnQixLQUFhLFNBQ3BDO1NBQUksQ0FBQyxTQUNIO1lBQU0sSUFBSSxNQUFNLGtDQUFrQyxPQUNuRDtBQUNEO1lBQU8sS0FBSyxNQUFNLE1BQU0sV0FDekI7QUFFRDs7QUFTQTs7Ozs7Ozs7O2FBQVMsZ0JBQWdCLElBQVksSUFBWSxJQUFZLEdBQzNEO1lBQU8sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxJQUM3RDtBQUVEOztBQVVBOzs7Ozs7Ozs7O2FBQVMsWUFBWSxJQUFhLElBQWEsSUFBYSxJQUFhLEdBQ3ZFO1lBQU8sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEtBQ3JCLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksS0FDN0IsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FDdEIsSUFBSSxJQUFJLElBQ2hCO0FBRUQ7O0FBU0E7Ozs7Ozs7OzthQUFTLHFCQUFxQixJQUFTLElBQVMsSUFBUyxHQUN2RDtTQUFNLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUN6QztTQUFNLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUN6QztZQUFPLEVBQUMsR0FBRCxHQUFJLEdBQ1o7QUFFRDs7QUFVQTs7Ozs7Ozs7OzthQUFTLGlCQUFpQixJQUFTLElBQVMsSUFBUyxJQUFTLEdBQzVEO1NBQU0sSUFBSSxZQUFZLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FDM0M7U0FBTSxJQUFJLFlBQVksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUMzQztZQUFPLEVBQUMsR0FBRCxHQUFJLEdBQ1o7QUFFRDs7QUFPQTs7Ozs7OzthQUFTLFdBQVcsUUFBb0IsS0FDdEM7U0FBSSxVQUNKO1NBQUksVUFDSjtTQUFJLFlBQ0o7U0FBSSxZQUVKOztTQUFJLE9BQU8sT0FBTyxHQUFHLEdBQUcsT0FBTyxHQUUvQjs7VUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sU0FBUyxHQUFHLEtBQ3JDO1dBQUssT0FDTDtXQUFLLE9BQU8sSUFDWjthQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FDbEI7YUFBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQ2xCO1VBQUksaUJBQWlCLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFDbEM7QUFFRDs7VUFBSyxPQUFPLE9BQU8sU0FDbkI7VUFBSyxPQUFPLE9BQU8sU0FDbkI7U0FBSSxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FDeEM7QUFFRDs7QUFRQTs7Ozs7Ozs7YUFBUyxLQUFLLE1BQWMsR0FBVyxHQUNyQztBQUNBO0FBQ0E7U0FBSSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQ3BCO2FBQ0Q7QUFFRDs7WUFBTyxDQUFDLElBQUksS0FDYjtBQUVEOztBQVFBOzs7Ozs7OzthQUFTLE9BQU8sTUFBYyxRQUFnQixRQUF1QztTQUFBLGdGQUNuRjs7U0FBTSxLQUFLLE9BQU8sSUFBSSxPQUN0QjtTQUFNLEtBQUssT0FBTyxJQUFJLE9BRXRCOztBQUNBO0FBQ0E7U0FBSSxLQUFLLElBQUksTUFBTSxhQUFhLEtBQUssSUFBSSxNQUFNLFdBQzdDO2FBQ0Q7QUFFRDs7WUFBTyxLQUFLLEtBQ1o7WUFBTyxLQUFLLEtBRVo7O1lBQ0Q7QUFFRDs7QUFLQTs7Ozs7YUFBUyxTQUFTLE1BQ2hCO1lBQU8sUUFBTyx3REFBUyxZQUFhLEdBQUksU0FBUyxLQUFLLFVBQ3ZEO0FBRUQ7O0FBS0E7Ozs7O2FBQVMsT0FBTyxPQUNkO2tCQUFhLE9BQU8sVUFBQyxHQUFHLEdBQ3RCO1VBQUksRUFBRSxRQUFRLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FDM0I7YUFDRDtBQUhNLFFBSVI7QUFFRDs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBT0E7Ozs7Ozs7YUFBUyxZQUFZLGFBQXFCLFVBQ3hDO1lBQU8sZUFBZSxjQUN2QjtBQUVEOztBQUtBOzs7OztXQUFPO2dCQUVMO1dBQ0E7VUFDQTtjQUNBO1lBQ0E7b0JBQ0E7aUJBQ0E7a0JBQ0E7Y0FDQTtxQkFDQTtvQkFDQTtzQkFDQTsyQkFDQTt5QkFDQTt5QkFDQTt1QkFDQTtlQUNBO2dCQUNBO2VBQ0E7ZUFDQTtlQUNBO29CQUNBO3NCQUNBO3NCQUNBO2tCQUNBOzJCQUNBO3VCQUNBO2lCQUNBO2tCQUNBO1dBQ0E7YUFDQTtlQUNBO2FBR0Y7QUFuQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzakJGOztBQUVBOztBQUVBOztBQU1BOzs7Ozs7UUFBTSxTQUFTLG9CQUNmO1FBQU0sUUFBUSxvQkFlZDs7QUFnQkE7O1FBQU07UUFFSjtRQUNBO1NBQ0E7U0FDQTtjQUNBO2dCQUNBO2FBQ0E7V0FDQTtnQkFBVyxLQUFLLEtBQ2hCO2VBQ0E7Y0FDQTthQUdGO0FBZEU7Ozs7Ozs7UUFrQkksdUJBR0o7O0FBTUE7Ozs7Ozt5QkFBcUQ7VUFBQSw0RUFBNUIsTUFBNEI7OzRCQUNuRDs7V0FBSyxRQUFRLFNBQ2Q7Ozs7V0EwQ0Q7Ozs7Ozs7Ozs7bUNBUXFFO1dBQUEseUVBQS9DLEtBQUssTUFBMEM7V0FBQSx5RUFBckIsS0FBSyxNQUNuRDs7WUFBSyxNQUFNLE1BQ1g7WUFBSyxNQUFNLE1BQ1o7OztXQUVEOzs7Ozs7Ozs7Ozs7K0JBVThFO1dBQUEsMkVBQXhELEtBQUssTUFBbUQ7V0FBQSwyRUFBcEIsS0FBSyxNQUM3RDs7QUFDQTtZQUVBOztBQUNBO1lBRUE7O0FBQ0E7WUFBSyxNQUFNLE1BQ1g7WUFBSyxNQUFNLE1BRVg7O0FBQ0E7WUFBSyxXQUFXLEdBRWhCOztBQUNBO2NBQU8sS0FDUjs7O1dBRUQ7Ozs7Ozs7K0JBS1MsT0FDUDtXQUFNLFFBQVEsS0FDZDtZQUFLLE1BQU0sS0FBSyxLQUFLLElBQUksU0FDekI7WUFBSyxNQUFNLEtBQUssS0FBSyxJQUFJLFNBQzFCOzs7V0FFRDs7Ozs7OztpQ0FLVyxPQUNUO1dBQU0sUUFBUSxLQUNkO1lBQUssTUFBTSxLQUFLLEtBQUssSUFBSSxTQUN6QjtZQUFLLE1BQU0sS0FBSyxLQUFLLElBQUksU0FDMUI7OztXQUVEOzs7Ozs7Ozs7aUNBT3VFO1dBQUEsd0VBQWxELEtBQUssTUFBNkM7V0FBQSx3RUFBdkIsS0FBSyxNQUNuRDs7Y0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLElBQUksS0FBSyxNQUN2Qzs7O1dBRUQ7Ozs7Ozs7OzttQ0FPeUU7V0FBQSx3RUFBbEQsS0FBSyxNQUE2QztXQUFBLHdFQUF2QixLQUFLLE1BQ3JEOztjQUFPLEtBQUssTUFBTSxHQUNuQjs7O1dBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs4QkFhUSxHQUNOO1dBQU0sS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLE1BQzVCO1dBQU0sS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLE1BQzVCO2NBQU8sS0FBSyxNQUFNLElBQ25COzs7V0FFRDs7Ozs7Ozs7Ozs7aUNBU1csR0FDVDtXQUFNLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxNQUM1QjtXQUFNLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxNQUM1QjtjQUFPLEtBQUssTUFBTSxJQUNuQjs7O1dBRUQ7Ozs7Ozs7OEJBS1EsTUFDTjtZQUFLLFdBQ0w7WUFBSyxNQUFNLE9BQU8sS0FDbkI7OztXQUVEOzs7Ozs7O3VDQUswQztXQUFBLFlBQ3hDOztXQUFNLFNBQVMsS0FBSyxNQUVwQjs7WUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUNqQztZQUFJLEtBQUssTUFBTSxPQUFPLEdBQUcsTUFBTSxLQUMzQixLQUFLLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FDN0I7Z0JBQU8sT0FBTyxHQUNkO0FBQ0Q7QUFDRjtBQUNGOzs7V0FFRDs7Ozs7Ozs7a0NBTVksVUFDVjtXQUFNLEtBQUssU0FBUyxNQUFNLElBQUksS0FBSyxNQUNuQztXQUFNLEtBQUssU0FBUyxNQUFNLElBQUksS0FBSyxNQUVuQzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtXQUFNLFdBQVcsS0FBSyxLQUFLLEtBQzNCO1dBQU0sT0FBTyxLQUFLLEtBRWxCOztBQUNBO1dBQU0sUUFBUSxTQUFTLE1BQU0sT0FFN0I7O0FBQ0E7V0FBTSxNQUFNLEtBQ1o7V0FBTSxNQUFNLEtBRVo7O0FBQ0E7V0FBTSxLQUFLLE1BQ1g7V0FBTSxLQUFLLE1BRVg7O2NBQU8sS0FBSyxXQUFXLElBQ3hCOzs7V0FFRDs7Ozs7Ozs7O2dDQU9VLElBQWEsSUFDckI7V0FBSSxPQUFPLGFBQWEsT0FBTyxXQUM3QjthQUFLLE1BQU0sS0FBSyxLQUFLLE1BQ3JCO2FBQUssTUFBTSxLQUFLLEtBQUssTUFDckI7ZUFBTyxFQUFDLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBRyxLQUFLLE1BQ2xDO0FBRUQ7O1lBQUssTUFBTSxLQUNYO1lBQUssTUFBTSxLQUNYO2NBQU8sRUFBQyxHQUFHLEtBQUssTUFBTSxHQUFHLEdBQUcsS0FBSyxNQUNsQzs7O1dBRUQ7Ozs7Ozs7O2dDQU1VLFFBQ1I7WUFBSyxhQUNMO1lBQUssTUFBTSxRQUFRLEtBQ25CO2NBQ0Q7OztXQUVEOzs7Ozs7OzBDQUtnRDtXQUFBLGdCQUM5Qzs7V0FBTSxVQUFVLEtBQUssTUFFckI7O1lBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLFFBQVEsS0FDbEM7WUFBSSxFQUFFLE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxLQUMvQixFQUFFLE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxHQUNqQztpQkFBUSxPQUFPLEdBQ2Y7QUFDRDtBQUNGO0FBQ0Y7OztXQUVEOzs7Ozs7Ozs7OzttQ0FTYSxVQUF3RjtXQUFBO1dBQUEsNkVBQ25HOztBQUNBO1dBQU0sS0FBTSxTQUFTLE1BQU0sSUFBSSxLQUFLLE1BQ3BDO1dBQU0sS0FBTSxTQUFTLE1BQU0sSUFBSSxLQUFLLE1BRXBDOztBQUNBO1dBQU0sV0FBVyxLQUFLLE1BQU0sSUFDNUI7V0FBTSxjQUFjLENBQUMsV0FBVyxVQUVoQzs7QUFDQTtXQUFNLEtBQUssS0FBSyxXQUNoQjtXQUFNLEtBQUssS0FBSyxXQUVoQjs7QUFDQTtZQUFLLFdBQVcsSUFFaEI7O0FBQ0E7Z0JBQVMsTUFBTSxNQUNmO2dCQUFTLE1BQU0sTUFFZjs7Y0FBTyxDQUFDLE1BQ1Q7OztXQUVEOzs7Ozs7Ozs7b0NBT2MsUUFDWjtBQUNBO1dBQU0sS0FBTSxPQUFPLE1BQU0sTUFBTSxJQUFJLEtBQUssTUFDeEM7V0FBTSxLQUFNLE9BQU8sTUFBTSxNQUFNLElBQUksS0FBSyxNQUV4Qzs7QUFDQTtXQUFNLFdBQVcsS0FBSyxNQUFNLElBQzVCO1dBQU0sY0FBYyxDQUFDLFdBQVcsT0FBTyxVQUFVLE9BRWpEOztBQUNBO1dBQU0sS0FBSyxLQUFLLFdBQ2hCO1dBQU0sS0FBSyxLQUFLLFdBRWhCOztBQUNBO1lBQUssV0FBVyxJQUVoQjs7Y0FBTyxDQUFDLE1BQ1Q7OztXQUVEOzs7Ozs7OztzQ0FNeUQ7V0FBQSw4RUFBcEIsS0FBSyxNQUN4Qzs7WUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxLQUNsQzthQUFLLGNBQWMsUUFDcEI7QUFFRDs7Y0FDRDs7O1dBRUQ7Ozs7Ozs7O3FDQU13RDtXQUFBLDZFQUFuQixLQUFLLE1BQ3hDOztZQUFLLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxRQUFRLEtBQ2pDO2FBQUssWUFBWSxPQUNsQjtBQUVEOztjQUNEOzs7V0E3VkQ7Ozs7Ozs7OytCQU02RDtXQUFBLDRFQUFoQyxNQUMzQjs7QUFDQTtlQUFRLE9BQU8sTUFBTSxNQUFNLGdCQUUzQjs7QUFDQTtXQUFNLFdBQVcsSUFBSSxTQUVyQjs7QUFDQTtnQkFBUyxTQUFTLE1BRWxCOztBQUNBO2dCQUFTLFdBQVcsTUFFcEI7O0FBQ0E7Y0FDRDs7O1dBRUQ7Ozs7Ozs7OzsrQkFPZ0IsUUFBbUU7V0FBQSwyRUFBdkMsTUFDMUM7O1dBQU0sWUFFTjs7WUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsS0FDMUI7a0JBQVUsS0FBSyxTQUFTLE9BQ3pCO0FBRUQ7O2NBQ0Q7Ozs7O0FBd1RGOztBQUVEOztXQUFPLFVBQVU7Ozs7O21DQzFhakI7O0FBRUE7O2tDQUNBO2lDQUVBOzt3Q0FDQTs4Q0FDQTsyQkFDQTtBQUVBOztnQ0FDQTtBQUVBOztvREFDQTt3REFDQTthQUNBO0FBRUE7OzhDQUNBO21IQUNBO0FBQ0E7cUVBQ0E7YUFDQTtBQUVBOztBQUNBO0FBQ0E7U0FDQTtzQkFBbUIsS0FFbkI7OzJEQUNBO0FBRUE7O3VDQUNBO2dEQUNBOzRCQUNBO2FBQ0E7NEJBQ0E7Z0JBRUE7O0FBQ0E7c0NBQ0E7YUFDQTsrQkFDQTtBQUNBO1VBQ0E7QUFDQTswSUFDQTtlQUNBO0FBRUE7O0FBQU8sZ0JBQVksYUFDbkI7MEJBQ0E7QUFDQTsyQkFDQTtBQUNBOzZCQUNBO3FCQUNBO3VCQUVBOztBQUNBOzZCQUNBO0FBQ0E7cUZBQ0E7MkJBQ0E7eUJBQ0E7K0NBQ0E7QUFBTyxpQkFDUDtxREFDQTtBQUVBOztBQUNBOzZDQUVBOztBQUNBO0FBQU0saURBQ047eUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO1lBQ0E7Ozs7Ozt3RENyRkE7O3dDQUVBOztBQUNBOzBCQUNBOzZCQUVBOztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUNBOytDQUNBO0FBRUE7Ozs7Ozs7d0RDNUJBOztvQ0FDQTt3Q0FDQTswQ0FDQTt5Q0FDQTsyQ0FDQTswQ0FDQTt3Q0FDQTswQ0FDQTs0Q0FDQTt5Q0FDQTsyQ0FDQTtxQ0FDQTs2Q0FDQTs2Q0FDQTs4Q0FDQTtzQ0FDQTt1Q0FDQTt1Q0FDQTttQ0FFQTs7QUFDQTswQkFDQTswQkFDQTs2QkFFQTs7QUFDQTtrQkFDQTttQkFDQTtrQkFDQTtrQkFDQTttQkFDQTtrQkFDQTtpQkFDQTtpQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtpQkFDQTtvQkFDQTtvQkFDQTtxQkFFQTs7eUJBQ0E7c0JBQ0E7cUJBQ0E7cUJBQ0E7a0JBQ0E7bUJBQ0E7bUJBQ0E7bUJBQ0E7MEJBQ0E7b0JBQ0E7b0JBRUE7O0FBQ0E7d0JBQ0E7MkNBQ0EsMERBQ0Esc0RBQ0EscURBQ0EscURBQ0Esb0RBQ0EsbURBQ0Esc0RBQ0EsbURBQ0EscURBQ0EseUVBQ0E7NENBQ0EsdUNBRUE7O0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7O3VFQUNBO1NBQ0E7NEJBQ0E7NEJBQ0E7NEJBRUE7O3FCQUNBOzJFQUNBO0FBQ0E7K0JBQ0E7YUFDQTtBQUNBOzJCQUNBO2FBQ0E7QUFDQTt5QkFDQTtnQkFDQTs4QkFDQTttQkFDQTsrQkFDQTtBQUNBO0FBQUcsWUFDSDt1QkFDQTs0Q0FFQTs7MkJBQ0E7aUNBQ0E7QUFDQTttRUFDQTttQ0FBc0MscUJBQ3RDO29CQUNBO2VBQ0EsbURBQ0EsZ0RBQ0E7QUFDQTtBQUFLLGFBQ0w7Z0NBQ0E7Z0NBQ0E7QUFDQTtzREFDQTtBQUNBO0FBQ0E7QUFDQTsyQkFDQTs2QkFDQTtrQkFDQTthQUNBO0FBQ0E7c0JBRUE7O29CQUNBLGlDQUNBLCtCQUVBOzs4Q0FDQTt3REFDQTtpQkFDQTthQUNBO3dCQUNBO0FBQ0E7QUFDQTtvRkFDQTtBQUNBO1lBQ0E7QUFFQTs7Ozs7Ozt3REN4SkE7O3dDQUNBO3lDQUNBOzBDQUNBO3VDQUNBO3VDQUNBO3VDQUVBOztBQU9BOzs7Ozs7OzRCQUNBOzhDQUNBO3NCQUNBO0FBRUE7O0FBQ0E7NEJBQ0E7Z0NBQ0E7MEJBQ0E7MEJBQ0E7MEJBRUE7Ozs7Ozs7d0RDMUJBOzs2Q0FDQTs4Q0FDQTsyQ0FDQTsyQ0FDQTsyQ0FFQTs7QUFPQTs7Ozs7OztnQ0FDQTtrQkFDQTtnREFFQTs7VUFDQTs4QkFDQTswQkFDQTsrQkFDQTtBQUNBO0FBRUE7O0FBQ0E7Z0NBQ0E7b0NBQ0E7OEJBQ0E7OEJBQ0E7OEJBRUE7Ozs7Ozs7bUNDL0JBOztBQU9BOzs7Ozs7OzhCQUNBO3FCQUNBO2lCQUNBO0FBRUE7Ozs7Ozs7d0RDWkE7OzJDQUVBOztBQUNBOzJCQUVBOztBQUNBOzRCQUVBOztBQVNBOzs7Ozs7Ozs7a0NBQ0E7cUJBQ0E7b0NBRUE7O29CQUNBO2FBQ0E7QUFDQTttQ0FDQTs2QkFDQTtXQUNBO0FBQUcsWUFDSDsrQkFDQTtBQUNBO1lBQ0E7WUFDQTtBQUVBOzs7Ozs7O3dEQ2xDQTs7aUNBRUE7O0FBUUE7Ozs7Ozs7O3NDQUNBO3dCQUNBO3NCQUNBO3FDQUNBO2NBQ0E7QUFDQTtBQUNBO2FBQ0E7QUFFQTs7Ozs7OzttQ0NwQkE7O0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFDQTs0REFDQTtBQUVBOzs7Ozs7O3dEQ3BDQTs7MkNBRUE7O0FBU0E7Ozs7Ozs7OzsrQkFDQTtxQkFDQTtvQ0FFQTs7Z0RBQ0E7QUFFQTs7Ozs7Ozt3RENsQkE7OzJDQUVBOztBQVNBOzs7Ozs7Ozs7K0JBQ0E7Z0RBQ0E7QUFFQTs7Ozs7Ozt3RENmQTs7MkNBRUE7O0FBVUE7Ozs7Ozs7Ozs7c0NBQ0E7cUJBQ0E7b0NBRUE7O29CQUNBO2FBQ0E7c0JBQ0E7QUFBRyxZQUNIO3VCQUNBO0FBQ0E7WUFDQTtBQUVBOzs7Ozs7O3dEQ3pCQTs7d0NBRUE7O0FBT0E7Ozs7Ozs7MEJBQ0E7eUJBQ0E7aUJBQ0E7QUFFQTs7Ozs7OzttQ0NkQTs7QUFTQTs7Ozs7Ozs7OzhCQUNBO3FCQUNBO2lDQUVBOztzQkFDQTtZQUNBO0FBRUE7Ozs7Ozs7bUNDakJBOztBQVNBOzs7Ozs7Ozs7MkJBQ0E7OEJBQ0E7QUFFQTs7Ozs7OzttQ0NiQTs7QUFTQTs7Ozs7Ozs7OzJCQUNBOzhCQUNBO0FBRUE7Ozs7Ozs7d0RDYkE7O3dDQUNBO2tDQUNBO3VDQUVBOztBQUNBOzJCQUVBOztBQVVBOzs7Ozs7Ozs7O2tDQUNBO3FCQUNBO29DQUNBO3VCQUNBO3VEQUNBO3dCQUNBOzBCQUNBO2NBQ0E7QUFDQTswQ0FDQTtBQUNBO21CQUNBO3NCQUNBO1lBQ0E7QUFFQTs7Ozs7Ozt3RENqQ0E7O3dDQUNBO21DQUVBOztBQUNBOzhCQUVBOzs7Ozs7O3dEQ05BOzsyQ0FDQTt1Q0FFQTs7QUFRQTs7Ozs7Ozs7b0NBQ0E7a0NBQ0E7MENBQ0E7QUFFQTs7Ozs7Ozt3RENoQkE7O3lDQUNBO3VDQUNBO3VDQUNBO3VDQUVBOztBQUlBOzs7O3VCQUVBOztBQUNBO3VCQUVBOztBQUNBOzZCQUNBOzZCQUVBOztBQUNBO2lDQUVBOztBQUNBO3FDQUVBOztBQUNBOzRCQUNBLDhEQUNBLHFGQUdBOztBQVFBOzs7Ozs7OztpQ0FDQTs4Q0FDQTthQUNBO0FBQ0E7b0RBQ0E7a0NBQ0E7QUFFQTs7Ozs7Ozt3REM5Q0E7O3lDQUNBO3VDQUVBOztBQUNBO21CQUNBO2tCQUNBO2lCQUNBO21CQUVBOztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBQ0E7MkJBQ0E7YUFDQTtBQUNBO0FBQ0E7QUFDQTswQkFDQTt5RUFDQTtBQUVBOzs7Ozs7O3dEQ3BDQTs7c0NBQ0E7d0NBQ0E7NkNBRUE7O0FBQ0E7a0JBQ0E7dUJBRUE7O0FBQ0E7eURBRUE7O0FBT0E7Ozs7Ozs7K0JBQ0E7d0JBQ0E7a0RBQ0E7QUFDQTt1REFDQSxtQkFDQSx3QkFDQTtBQUVBOzs7Ozs7O3dEQzNCQTs7bUNBRUE7O0FBQ0E7d0JBRUE7Ozs7Ozs7d0RDTEE7O3lDQUVBOztBQUNBO2lJQUVBOztBQUNBO2tEQUVBOzs7Ozs7O21DQ1JBOzs7QUFDQTs0SUFFQTs7Ozs7Ozs7Ozs7O3dEQ0hBOzt1Q0FFQTs7QUFDQTs2QkFFQTs7QUFDQTtxQ0FFQTs7QUFLQTs7Ozs7MkNBRUE7O0FBQ0E7MkRBRUE7O0FBT0E7Ozs7Ozs7OEJBQ0E7NENBQ0E7cUJBRUE7O1NBQ0E7OEJBQ0E7cUJBQ0E7QUFBRyxrQkFFSDs7NENBQ0E7bUJBQ0E7aUJBQ0E7K0JBQ0E7QUFBSyxhQUNMO29CQUNBO0FBQ0E7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7bUNDN0NBOztBQUNBOzZCQUVBOztBQUtBOzs7OzsyQ0FFQTs7QUFPQTs7Ozs7OzttQ0FDQTtzQ0FDQTtBQUVBOzs7Ozs7O21DQ3JCQTs7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBQ0E7dUJBQ0E7MERBQ0E7QUFFQTs7Ozs7Ozt3REM5QkE7O3lDQUVBOztBQUNBO2lDQUNBOzBGQUNBOzJDQUNBO0FBRUE7O0FBT0E7Ozs7Ozs7NEJBQ0E7MENBQ0E7QUFFQTs7Ozs7Ozt3RENuQkE7O21DQUVBOztBQUNBOzBCQUVBOzs7Ozs7O21DQ0xBOztBQUNBOzZCQUVBOztBQUNBO2lDQUVBOztBQU9BOzs7Ozs7OzRCQUNBO3VCQUNBO1VBQ0E7Z0NBQ0E7QUFBSyxtQkFDTDtVQUNBO3FCQUNBO0FBQUssbUJBQ0w7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7bUNDekJBOztBQVFBOzs7Ozs7OzttQ0FDQTtnREFDQTtBQUVBOzs7Ozs7O3dEQ1pBOzs0Q0FDQTs2Q0FDQTswQ0FDQTswQ0FDQTswQ0FFQTs7QUFPQTs7Ozs7OzsrQkFDQTtrQkFDQTtnREFFQTs7VUFDQTs4QkFDQTswQkFDQTsrQkFDQTtBQUNBO0FBRUE7O0FBQ0E7K0JBQ0E7bUNBQ0E7NkJBQ0E7NkJBQ0E7NkJBRUE7Ozs7Ozs7d0RDL0JBOzttQ0FDQTt3Q0FDQTtrQ0FFQTs7QUFPQTs7Ozs7Ozs2QkFDQTtpQkFDQTs7a0JBRUE7eUJBQ0E7b0JBRUE7QUFKQTtBQU1BOzs7Ozs7O3dEQ3BCQTs7d0NBQ0E7eUNBQ0E7c0NBQ0E7c0NBQ0E7c0NBRUE7O0FBT0E7Ozs7Ozs7MkJBQ0E7a0JBQ0E7Z0RBRUE7O1VBQ0E7OEJBQ0E7MEJBQ0E7K0JBQ0E7QUFDQTtBQUVBOztBQUNBOzJCQUNBOytCQUNBO3lCQUNBO3lCQUNBO3lCQUVBOzs7Ozs7O3dEQy9CQTs7MkNBRUE7O0FBT0E7Ozs7Ozs7eUJBQ0E7eURBQ0E7aUJBQ0E7QUFFQTs7Ozs7Ozt3RENkQTs7d0NBRUE7O0FBQ0E7eUNBRUE7Ozs7Ozs7bUNDTEE7O0FBVUE7Ozs7Ozs7Ozs7NkJBQ0E7d0RBQ0E7K0JBQ0E7WUFDQTtBQUVBOzs7Ozs7O3dEQ2hCQTs7MkNBRUE7O0FBQ0E7eUJBRUE7O0FBQ0E7NkJBRUE7O0FBQ0E7cUNBRUE7O0FBU0E7Ozs7Ozs7OzswQkFDQTtxQkFDQTt1QkFDQTt3QkFDQTtxREFDQTtBQUNBO3lEQUNBO0FBRUE7Ozs7Ozs7d0RDN0JBOzsyQ0FFQTs7QUFDQTs2QkFFQTs7QUFDQTtxQ0FFQTs7QUFTQTs7Ozs7Ozs7OzBCQUNBO3FCQUNBOytFQUNBO0FBRUE7Ozs7Ozs7d0RDdEJBOzsyQ0FFQTs7QUFDQTt5QkFFQTs7QUFVQTs7Ozs7Ozs7OztpQ0FDQTtxQkFDQTtzQ0FDQTt3RUFDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDdEJBOzt5Q0FFQTs7QUFTQTs7Ozs7Ozs7O2lDQUNBO2tEQUNBOytCQUNBO1lBQ0E7QUFFQTs7Ozs7Ozt3RENqQkE7O3dDQUVBOztBQVFBOzs7Ozs7OztrQ0FDQTtvQkFDQTtzQkFDQSxnREFDQSxlQUNBO0FBRUE7Ozs7Ozs7bUNDakJBOztBQU9BOzs7Ozs7OzhCQUNBO3VCQUNBO2dGQUNBLHNCQUNBLHdCQUNBO0FBRUE7Ozs7Ozs7d0RDZEE7O3lDQUVBOztBQVNBOzs7Ozs7Ozs7OEJBQ0E7c0NBQ0E7QUFFQTs7Ozs7Ozt3RENmQTs7eUNBRUE7O0FBU0E7Ozs7Ozs7Ozs4QkFDQTtzQ0FDQTtBQUVBOzs7Ozs7O3dEQ2ZBOzt5Q0FFQTs7QUFVQTs7Ozs7Ozs7OztxQ0FDQTtpQ0FDQTtxQkFFQTs7bUJBQ0E7MENBQ0E7WUFDQTtBQUVBOzs7Ozs7O21DQ3JCQTs7QUFTQTs7Ozs7Ozs7O3dDQUNBO2tCQUNBOzRDQUVBOzs4QkFDQTswREFDQTtBQUNBO0FBQ0E7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDckJBOzs4Q0FDQTtpQ0FFQTs7QUFDQTs2QkFFQTs7QUFDQTtxQ0FFQTs7QUFVQTs7Ozs7Ozs7Ozs2Q0FDQTsyQkFDQTs0REFDQSxvREFDQTttQ0FDQTtBQUNBO0FBRUE7Ozs7Ozs7d0RDM0JBOzs2Q0FFQTs7QUFTQTs7Ozs7Ozs7O2lEQUNBOytDQUNBOzt1QkFFQTtxQkFDQTtnQkFDQTttQkFFQTtBQUxBO0FBS0csWUFDSDtvQkFDQTtBQUNBO0FBRUE7Ozs7Ozs7d0RDeEJBOzt3Q0FFQTs7cUNBQ0E7U0FDQTttQ0FDQTtXQUFXLFFBQ1g7YUFDQTtBQUFHLGtCQUNIO0FBRUE7Ozs7Ozs7d0RDVkE7O3lDQUNBO21DQUVBOztBQVNBOzs7Ozs7Ozs7d0NBQ0E7dURBQ0E7QUFFQTs7Ozs7Ozt3RENoQkE7OzBDQUNBOzhDQUVBOztBQVVBOzs7Ozs7Ozs7OzJEQUNBO2tCQUNBO3lCQUVBOztrQkFDQTt3QkFFQTs7OEJBQ0E7c0JBRUE7O3FCQUNBLCtEQUNBLFVBRUE7O2tDQUNBO3lCQUNBO0FBQ0E7aUJBQ0E7b0NBQ0E7QUFBSyxhQUNMO2dDQUNBO0FBQ0E7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDdkNBOzs0Q0FDQTt1Q0FDQTswQ0FFQTs7QUE0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0E7bUVBQ0E7QUFFQTs7Ozs7Ozt3RENwQ0E7O3dDQUNBOzBDQUNBO3NDQUNBO3VDQUNBO3NDQUNBOzJDQUVBOztBQUNBOzZCQUVBOztBQUNBO3FDQUVBOztBQVFBOzs7Ozs7Ozs2Q0FDQTt5QkFDQTt1Q0FDQTsrQ0FDQTs4REFDQTttREFDQTtrRUFDQTt5QkFFQTs7NEJBQ0E7bURBQ0E7QUFFQTthQUNBO0FBQ0E7MkNBQ0E7QUFDQTtrRUFDQTtBQUNBO21CQUNBLE9BUkEsSUFTQTttQkFDQTtBQUNBO0FBQ0E7WUFDQTtBQUVBOzs7Ozs7O21DQ2hEQTs7QUFTQTs7Ozs7Ozs7O29DQUNBO2tCQUNBO3dCQUVBOzt5QkFDQTsrQkFDQTtBQUNBO1lBQ0E7QUFFQTs7Ozs7Ozt3RENuQkE7OzhDQUNBOzJDQUVBOztBQUNBOzZCQUVBOztBQUNBO3FDQUVBOztBQUNBOzJDQUVBOztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUE4QztZQUFrQjtBQUFFLDhDQUNsRTs4REFDQSwrQ0FDQTtBQUVBOzs7Ozs7O3dEQ25DQTs7eUNBQ0E7MkNBRUE7O0FBQ0E7a0JBRUE7O0FBT0E7Ozs7Ozs7b0NBQ0E7d0RBQ0E7QUFFQTs7Ozs7OzttQ0NqQkE7O0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBQ0E7K0ZBQ0E7QUFFQTs7Ozs7OzttQ0M1QkE7O0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFFQTs7Ozs7Ozt3REN6QkE7OztvQ0FDQTt5Q0FFQTs7QUFDQTt5SUFFQTs7QUFDQTttSkFFQTs7QUFDQTs4REFFQTs7QUFDQTtnREFFQTs7QUFDQTtxREFFQTs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUVBOzs7Ozs7Ozs7O21DQ3JDQTs7dUNBQ0E7a0NBQ0E7c0NBQ0E7cUJBQ0E7QUFDQTt3QkFDQTsrQkFDQTtBQUNBO1lBQ0E7Ozs7OzttQ0NUQTs7QUFhQTs7Ozs7Ozs7Ozs7Ozt5QkFDQTtZQUNBO0FBRUE7Ozs7Ozs7bUNDakJBOztBQUNBOzJCQUVBOztBQUNBO21CQUVBOztBQVFBOzs7Ozs7OztvQ0FDQTtrREFDQTtjQUNBLHFEQUNBLG1EQUNBO0FBRUE7Ozs7Ozs7d0RDckJBOzsrQ0FDQTt3Q0FDQTt1Q0FFQTs7QUFDQTtnREFFQTs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O3dFQUVBOzs7Ozs7O3dEQzFCQTs7eUNBQ0E7dUNBQ0E7MkNBRUE7O0FBQ0E7a0JBQ0E7bUJBQ0E7a0JBQ0E7a0JBQ0E7bUJBQ0E7a0JBQ0E7aUJBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0E7b0JBQ0E7cUJBRUE7O3lCQUNBO3NCQUNBO3FCQUNBO3FCQUNBO2tCQUNBO21CQUNBO21CQUNBO21CQUNBOzBCQUNBO29CQUNBO29CQUVBOztBQUNBO3lCQUNBO2dEQUNBLHVEQUNBLHNEQUNBLDZEQUNBLHlDQUNBOzZDQUNBLDREQUNBLHdEQUNBLHFEQUNBLG1EQUNBLHdEQUNBLHFEQUNBLDBDQUVBOztBQU9BOzs7Ozs7O3FDQUNBO3lCQUNBLGdFQUNBO0FBRUE7Ozs7Ozs7bUNDM0RBOztBQUNBOzJCQUVBOztBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBQ0E7NEJBQ0EscURBQ0E7QUFFQTs7Ozs7OzttQ0NsQ0E7O0FBT0E7Ozs7Ozs7NkJBQ0E7NkJBQ0E7a0JBQ0E7QUFDQTtBQUVBOzs7Ozs7O3dEQ2JBOzs7MENBRUE7O0FBQ0E7eUlBRUE7O0FBQ0E7bUpBRUE7O0FBQ0E7OERBRUE7O0FBQ0E7bURBRUE7O0FBQ0E7Z0NBQ0E7VUFDQTt3RUFDQTtBQUFHLG1CQUNIO0FBRUE7Ozs7Ozs7Ozs7d0RDckJBOzswQ0FDQTt5Q0FFQTs7QUFDQTs2QkFFQTs7QUFDQTtxQ0FFQTs7QUFPQTs7Ozs7Ozs4QkFDQTsrQkFDQTt3QkFDQTtBQUNBO2tCQUNBO3FDQUNBO29FQUNBO21CQUNBO0FBQ0E7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7bUNDN0JBOztBQUNBOzZCQUVBOztBQU9BOzs7Ozs7O2dDQUNBOytCQUNBO2dFQUVBOztzQkFDQTtBQUVBOzs7Ozs7O3dEQ2pCQTs7c0NBRUE7O0FBQ0E7MENBRUE7Ozs7Ozs7bUNDTEE7O0FBUUE7Ozs7Ozs7O3NDQUNBOzJCQUNBOzRCQUNBO0FBQ0E7QUFFQTs7Ozs7Ozt3RENkQTs7eUNBQ0E7dUNBRUE7O0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUNBO21FQUNBO0FBRUE7Ozs7Ozs7d0RDaENBOzt5Q0FDQTtxQ0FFQTs7QUFTQTs7Ozs7Ozs7OzBDQUNBO3lEQUNBO0FBRUE7Ozs7Ozs7d0RDaEJBOzs0Q0FDQTt5Q0FDQTswQ0FFQTs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUNBOzJFQUNBO0FBRUE7Ozs7Ozs7d0RDL0JBOzt1Q0FDQTswQ0FDQTsyQ0FFQTs7QUFDQTs2QkFFQTs7QUFDQTtxQ0FFQTs7QUFPQTs7Ozs7OztnQ0FDQTs0QkFDQTswQkFDQTtBQUNBOytCQUNBO2tCQUVBOzs2QkFDQTtxRkFDQTttQkFDQTtBQUNBO0FBQ0E7WUFDQTtBQUVBOzs7Ozs7O21DQ2hDQTs7QUFTQTs7Ozs7Ozs7O2tDQUNBO2tCQUNBO3lCQUNBO3NDQUNBO21CQUNBO0FBQ0E7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDbkJBOzs7b0NBRUE7O0FBQ0E7eUlBRUE7O0FBQ0E7bUpBRUE7O0FBQ0E7OERBRUE7O0FBQ0E7Z0RBQ0E7cURBRUE7O0FBUUE7Ozs7Ozs7OzBDQUNBO2tCQUNBO3FCQUNBO0FBQ0E7MEJBQ0E7OEVBRUE7O2tCQUNBO2FBQ0E7QUFFQTs7Ozs7Ozs7OzttQ0NsQ0E7O0FBUUE7Ozs7Ozs7O3NDQUNBO2tCQUNBO3lCQUVBOzs2QkFDQTs4QkFDQTs0QkFDQTtBQUNBO1lBQ0E7QUFFQTs7Ozs7Ozt3RENuQkE7O3lDQUNBO3lDQUVBOztBQVFBOzs7Ozs7Ozt5Q0FDQTttREFDQTtBQUVBOzs7Ozs7O3dEQ2ZBOzswQ0FDQTt3Q0FFQTs7QUFDQTs2QkFFQTs7QUFDQTsyQ0FFQTs7QUFDQTtrQ0FFQTs7QUFPQTs7Ozs7Ozt1RUFDQTt5QkFDQTthQUNBO0FBQ0E7cUJBQ0E7b0VBQ0E7K0NBQ0E7QUFDQTtBQUVBOzs7Ozs7O21DQzdCQTs7QUFTQTs7Ozs7Ozs7OzJDQUNBO2tCQUNBOzRDQUNBO29CQUNBO2tCQUVBOzs4QkFDQTt3QkFDQTswQ0FDQTs0QkFDQTtBQUNBO0FBQ0E7WUFDQTtBQUVBOzs7Ozs7O21DQ3hCQTs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDdEJBOzt5Q0FDQTsyQ0FFQTs7QUFRQTs7Ozs7Ozs7MkNBQ0E7cURBQ0E7QUFFQTs7Ozs7Ozt3RENmQTs7d0NBQ0E7MkNBQ0E7eUNBQ0E7d0NBRUE7O0FBQ0E7a0NBRUE7O0FBT0E7Ozs7Ozs7eUVBQ0E7a0JBQ0E7b0JBQ0E7bUNBQ0E7NEJBQ0E7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7bUNDeEJBOztBQVFBOzs7Ozs7OztzQ0FDQTtrQkFDQTt5QkFDQTt3QkFFQTs7OEJBQ0E7cUNBQ0E7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDbkJBOztzQ0FFQTs7QUFDQTtzREFFQTs7Ozs7Ozt3RENMQTs7NkNBQ0E7eUNBQ0E7bUNBRUE7O0FBT0E7Ozs7Ozs7Z0NBQ0E7eUNBQ0E7QUFFQTs7Ozs7Ozt3RENmQTs7d0NBQ0E7c0NBRUE7O0FBV0E7Ozs7Ozs7Ozs7OzJEQUNBOzJCQUNBO3FFQUNBO0FBRUE7Ozs7Ozs7d0RDbkJBOzs2Q0FDQTsyQ0FDQTtxQ0FFQTs7QUFRQTs7Ozs7Ozs7a0NBQ0E7MkNBQ0E7QUFFQTs7Ozs7Ozt3RENoQkE7O3VDQUNBO2tDQUNBO3NDQUNBO2tDQUNBO3NDQUNBO3lDQUNBO3VDQUVBOztBQUNBO2lCQUNBO29CQUNBO3FCQUNBO2lCQUNBO3FCQUVBOztzQkFFQTs7QUFDQTtzQ0FDQTtpQ0FDQTtxQ0FDQTtpQ0FDQTtxQ0FFQTs7QUFPQTs7Ozs7OztpQkFFQTs7QUFDQTtnRUFDQSwyQ0FDQSxrREFDQSwwQ0FDQSwwREFDQTtxQ0FDQTs4QkFDQTsyREFDQTsrQ0FFQTs7c0JBQ0E7ZUFDQTs7Z0JBQ0E7O2dCQUNBOztnQkFDQTs7Z0JBQ0E7O2dCQUVBOztBQUNBO2FBQ0E7QUFDQTtBQUVBOzs7Ozs7O3dEQ3pEQTs7d0NBQ0E7bUNBRUE7O0FBQ0E7bUNBRUE7Ozs7Ozs7d0RDTkE7O3dDQUNBO21DQUVBOztBQUNBO2tDQUVBOzs7Ozs7O3dEQ05BOzt3Q0FDQTttQ0FFQTs7QUFDQTs4QkFFQTs7Ozs7Ozt3RENOQTs7d0NBQ0E7bUNBRUE7O0FBQ0E7a0NBRUE7Ozs7Ozs7bUNDTkE7O0FBQ0E7NkJBRUE7O0FBQ0E7cUNBRUE7O0FBT0E7Ozs7Ozs7bUNBQ0E7d0JBQ0E7b0NBRUE7O0FBQ0E7dUZBQ0E7MkJBQ0E7MkJBQ0E7QUFDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDekJBOzsrQ0FDQTs0Q0FDQTt1Q0FDQTswQ0FDQTt1Q0FDQTswQ0FDQTs4Q0FFQTs7QUFDQTtrQkFDQTtrQkFDQTtpQkFDQTtvQkFDQTtvQkFDQTtpQkFDQTtvQkFDQTtvQkFFQTs7eUJBQ0E7c0JBQ0E7cUJBQ0E7cUJBQ0E7a0JBQ0E7bUJBQ0E7bUJBQ0E7bUJBQ0E7MEJBQ0E7b0JBQ0E7b0JBRUE7O0FBYUE7Ozs7Ozs7Ozs7Ozs7NERBQ0E7dUJBQ0E7YUFDQTtXQUNBOytCQUVBOztXQUNBO1dBQ0E7d0JBRUE7O1dBQ0E7b0NBRUE7OzJCQUNBO3NDQUNBOzZEQUNBO3NDQUVBOztXQUNBO3VDQUVBOztXQUNBO1dBQ0E7dUJBRUE7O1dBQ0E7MEJBRUE7O1dBQ0E7dUNBRUE7O1dBQ0E7MEJBRUE7O0FBRUE7Ozs7Ozs7d0RDL0VBOzt5Q0FFQTs7QUFPQTs7Ozs7OzsyQ0FDQTswREFDQTsrQ0FDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDZkE7O21DQUVBOztBQUNBOzBCQUVBOzs7Ozs7O3dEQ0xBOzsrQ0FFQTs7QUFRQTs7Ozs7Ozs7NkNBQ0E7d0VBQ0E7MkVBQ0E7QUFFQTs7Ozs7Ozt3RENmQTs7MENBQ0E7MENBQ0E7eUNBRUE7O0FBQ0E7MEJBRUE7O0FBU0E7Ozs7Ozs7Ozs4Q0FDQTttRkFDQTtvREFDQTtBQUVBOzs7Ozs7O21DQ3JCQTs7QUFRQTs7Ozs7Ozs7b0NBQ0E7QUFDQTsyQkFDQTtZQUNBO0FBRUE7Ozs7Ozs7bUNDZEE7O0FBWUE7Ozs7Ozs7Ozs7OztrRUFDQTtrQkFDQTs0Q0FFQTs7OEJBQ0E7NEJBQ0E7QUFDQTs4QkFDQTsrREFDQTtBQUNBO1lBQ0E7QUFFQTs7Ozs7OzttQ0N6QkE7O0FBT0E7Ozs7Ozs7NkJBQ0E7a0JBQ0E7NEJBRUE7O3VDQUNBOzhCQUNBO0FBQ0E7WUFDQTtBQUVBOzs7Ozs7O21DQ2pCQTs7QUFDQTtrQkFFQTs7QUFPQTs7Ozs7OztpQ0FDQTtxRUFDQTsrQkFDQTtZQUNBO0FBRUE7Ozs7Ozs7d0RDaEJBOzswQ0FDQTswQ0FDQTt5Q0FFQTs7QUFDQTswQkFFQTs7QUFTQTs7Ozs7Ozs7OzhDQUNBO21GQUNBO29EQUNBO0FBRUE7Ozs7Ozs7bUNDckJBOztBQVFBOzs7Ozs7OztxQ0FDQTtBQUNBO2FBQ0E7WUFDQTtBQUVBOzs7Ozs7O21DQ2RBOztBQU9BOzs7Ozs7OzZCQUNBO2tCQUNBOzRCQUVBOztrQ0FDQTt3QkFDQTtBQUNBO1lBQ0E7QUFFQTs7Ozs7Ozt3RENqQkE7O3VDQUVBOztBQUNBO3NEQUNBOzREQUVBOztBQU9BOzs7Ozs7O2lDQUNBO2lFQUNBO0FBRUE7Ozs7Ozs7d0RDakJBOzsrQ0FFQTs7QUFRQTs7Ozs7Ozs7aURBQ0E7NEVBQ0E7aUZBQ0E7QUFFQTs7Ozs7Ozt3RENmQTs7eUNBQ0E7MkNBQ0E7MENBRUE7O0FBT0E7Ozs7Ozs7cUNBQ0E7b0VBQ0Esa0NBQ0EsV0FDQTtBQUVBOzs7Ozs7O3dEQ2pCQTs7dUNBRUE7O0FBQ0E7OEJBRUE7O0FBUUE7Ozs7Ozs7O2lDQUNBO3dCQUNBOzZCQUNBOzRCQUNBO2NBQ0E7QUFDQTt3QkFDQTsyQkFDQTtBQUNBO3lCQUNBO3VCQUNBO3lCQUNBO2FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUM3QkE7O0FBS0E7Ozs7OzthQUFTLE9BQU8sS0FBSyxVQUNuQjtTQUFJLENBQUMsS0FDSDtZQUFNLElBQUksTUFDWDtBQUNEO1VBQUssTUFDTDtVQUFLLFdBQVcsWUFBWSxPQUM3QjtBQUVEOztBQVFBOzs7Ozs7OztXQUFPLFVBQVUsU0FBUyxTQUFTLGFBQTJDO1NBQUE7U0FBQTtTQUFBO1NBQUEsNEVBQzVFOztVQUFLLElBQUksWUFDVDtVQUFLLElBQ0w7VUFBSyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssR0FDbkM7VUFBSyxJQUNOO0FBRUQ7O0FBU0E7Ozs7Ozs7OztXQUFPLFVBQVUsT0FBTyxTQUFTLFNBQVMsR0FBRyxHQUFnQztTQUFBO1NBQUE7U0FBQSw0RUFDM0U7O1VBQUssSUFBSSxZQUNUO1VBQUssSUFBSSxTQUFTLEdBQUcsR0FBRyxHQUN6QjtBQUVEOztBQU1BOzs7Ozs7V0FBTyxVQUFVLFVBQVUsU0FBUyxlQUFlLEdBQ2pEO1VBQUssT0FDSCxFQUFFLE1BQU0sR0FDUixFQUFFLE1BQU0sR0FDUixFQUFFLE1BQU0sUUFDUixFQUFFLE1BRUo7WUFDRDtBQUVEOztBQU1BOzs7Ozs7V0FBTyxVQUFVLFFBQVEsU0FBUyxhQUFhLEdBQzdDO1VBQUssS0FDSCxFQUFFLE1BQU0sR0FDUixFQUFFLE1BQU0sR0FDUixFQUFFLE1BQU0sT0FDUixFQUFFLE1BQU0sUUFDUixFQUFFLE1BRUo7WUFDRDtBQUVEOztBQVNBOzs7Ozs7Ozs7V0FBTyxVQUFVLGFBQWEsVUFBUyxJQUFJLElBQUksSUFBSSxJQUFxQjtTQUFBLDRFQUN0RTs7VUFBSyxJQUNMO1VBQUssSUFBSSxjQUNUO1VBQUssSUFBSSxPQUFPLElBQ2hCO1VBQUssSUFBSSxPQUFPLElBQ2hCO1VBQUssSUFDTjtBQUVEOztBQU1BOzs7Ozs7V0FBTyxVQUFVLGNBQWMsVUFBUyxNQUFNLE1BQzVDO1VBQUssV0FBVyxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQ2xFO1lBQU8sS0FDUjtBQUVEOztXQUFPLFVBQVUsaUJBQWlCLFlBQW9CO3VDQUFBLHFEQUFSO0FBQVE7QUFBQTs7U0FDN0MsYUFBYyxPQUVyQjs7U0FBSSxDQUFDLFlBQ0g7WUFBTSxJQUFJLE1BQ1g7QUFFRDs7U0FBSSxPQUFPLFNBQVMsR0FDbEI7WUFBTSxJQUFJLE1BQ1g7QUFUbUQ7O1NBVzFDLEtBQWEsV0FBaEI7U0FBVSxLQUFNLFdBQ3ZCOztVQUFLLElBQ0w7VUFBSyxJQUFJLE9BQU8sSUFFaEI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJvRDs7U0F1QnhDLEtBQU0sYUF2QmtDO3FDQUFBOzZCQUFBOzBCQUFBOztTQXdCcEQ7MkJBQTJCLGdJQUFJO3dCQUFBO1dBQUE7V0FBQSxVQUM3Qjs7WUFBSyxJQUFJLE9BQU8sSUFDakI7QUExQm1EO21CQUFBOzBCQUFBO3VCQUFBO2VBQUE7VUFBQTsyREFBQTtrQkFBQTtBQUFBO2dCQUFBOzhCQUFBO2NBQUE7QUFBQTtBQUFBO0FBNEJwRDs7VUFBSyxJQUNOO0FBRUQ7O0FBT0E7Ozs7Ozs7V0FBTyxVQUFVLE9BQU8sVUFBUyxPQUFPLFFBQW1DO1NBQUE7U0FBQSw0RUFDekU7O1VBQUssSUFDTDtVQUFLLElBQUksY0FFVDs7VUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSyxVQUM5QjtXQUFLLElBQUksT0FBTyxHQUNoQjtXQUFLLElBQUksT0FBTyxHQUNqQjtBQUVEOztVQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxLQUFLLFVBQy9CO1dBQUssSUFBSSxPQUFPLEdBQ2hCO1dBQUssSUFBSSxPQUFPLE9BQ2pCO0FBRUQ7O1VBQUssSUFDTjtBQUVEOztXQUFPLFVBQVU7Ozs7Ozs7QUM5SmpCOztBQVFBOzs7Ozs7OztRQUFNLFFBQVEsb0JBQ2Q7UUFBTSxRQUFRLG9CQUNkO1FBQU0sUUFBUSxvQkFFZDs7UUFBTTtVQUNDLEVBQUMsR0FBRyxHQUFHLEdBQ1o7WUFBTyxFQUFDLEdBQUcsS0FBSyxHQUNoQjthQUNBO2VBR0Y7QUFORTs7UUFNSSxnQkFBZ0IsTUFDdEI7QUFDQTtRQUFNLE1BQU0sT0FBTyxPQUVuQjs7UUFBSSxPQUFPLFNBQVMsVUFBVSxNQUM1QjtBQUVBOztTQUFJLENBQUMsS0FBSyxPQUNSO1lBQU0sSUFBSSxNQUNYO0FBRUQ7O1VBQUssY0FBYyxNQUFNO1dBQ2xCLEtBQUssT0FHWjtBQUhFLE1BRFk7O1VBSVQsU0FDTDtVQUFLLFNBRUw7O0FBV0E7Ozs7Ozs7Ozs7O1VBQUs7QUFFSDtBQUNBO0FBSGUsMEJBR1YsR0FBRyxHQUFHLEdBQUs7QUFDZDtjQUFPLElBQUksSUFDWjtBQUNEO0FBTmUsc0NBTUosR0FBRyxHQUFHLEdBQUs7QUFDcEI7Y0FBTyxLQUFLLElBQUksS0FDakI7QUFDRDtBQVRlLHdDQVNILEdBQUcsR0FBRyxHQUFLO0FBQ3JCO2NBQU8sS0FBSyxLQUFLLElBQUksTUFDdEI7QUFDRDtBQVplLDRDQVlELEdBQUcsR0FBRztXQUNkLENBQUMsS0FBRyxLQUFLLEdBQ1g7ZUFBTyxJQUFFLEtBQUssSUFBRSxLQUFLLEdBQ3JCO0FBQ0Q7QUFDRDtjQUFPLENBQUMsSUFBRSxLQUFNLEVBQUUsS0FBSSxJQUFFLEtBQUssS0FBSyxFQUpsQyxDQUtBO0FBQ0Q7QUFHSDtBQXJCRTs7VUFxQkcsT0FBTyxHQUFHLFFBQVEsS0FBSyxjQUU1Qjs7WUFDRDtBQUVEOztBQUdBOzs7UUFBSSxlQUFlLFNBQVMsY0FDMUI7VUFBSyxPQUFPLFFBQVEsVUFBQyxPQUNuQjtVQUFJLE1BQU0sT0FBTyxhQUNmO2FBQU0sT0FBTyxNQUNkO0FBRUQ7O1VBQUksQ0FBQyxNQUFNLE9BQU8sZUFDZCxNQUFNLE9BQU8sVUFBVSxRQUN6QjthQUFNLE9BQU8sTUFDYjthQUNEO0FBRUQ7O1VBQUksTUFBTSxPQUFPLFNBQ2Y7ZUFBUSxJQUNUO0FBQ0Y7QUFDRjtBQUVEOztRQUFJLFNBQVMsWUFBa0I7U0FBQSwyRUFDN0I7O1NBQU0sY0FBYyxPQUFPLE9BQzNCO1NBQU0sUUFBUSxPQUFPLE9BQU8sTUFBTSxXQUFXO1NBQ3RDLFdBQW9DLE1BQXBDO1NBQVUsTUFBMEIsTUFBMUI7U0FBSyxRQUFxQixNQUFyQjtTQUFPLFNBQWMsTUFBZDtTQUFRLEtBQU0sTUFFM0M7O1NBQUksQ0FBQyxZQUFZLFVBQVUsU0FDekI7WUFBTSxJQUFJLCtCQUE2QixTQUN4QztBQUVEOztTQUFJLElBQ0Y7ZUFBUyxPQUFPLEtBQUssVUFBQyxHQUFEO2NBQU8sRUFBRSxPQUFPO0FBQWpDLFVBQ0Y7YUFBTSxJQUFJLDhCQUE0QixLQUN2QztBQUVEOztrQkFBWSxLQUNiO0FBTkQsWUFPRTtrQkFBWSxLQUFLLEtBQUssT0FBTyxTQUM5QjtBQUVEOztpQkFBWSxRQUFRLE1BQ3BCO2lCQUFZLE1BQ1o7aUJBQVksUUFDWjtpQkFBWSxXQUNaO2lCQUFZLFNBQVMsWUFBWSxVQUNqQztpQkFBWSxjQUFjLE9BQU87VUFDM0IsWUFDSjtnQkFBVSxZQUdaO0FBSkUsTUFEbUI7O1VBS2hCLE9BQU8sS0FDWjtZQUNEO0FBRUQ7O1FBQUksTUFBTSxVQUFTLElBQ2pCO1NBQUksS0FBSyxPQUFPLFdBQVcsR0FDekI7YUFBTyxJQUNSO0FBRUQ7O1VBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE1BQU0sUUFBUSxLQUNyQztVQUFJLEtBQUssTUFBTSxHQUFHLE9BQU8sSUFDdkI7Y0FBTyxLQUFLLE1BQ2I7QUFDRjtBQUVEOztZQUNEO0FBRUQ7O1FBQUksU0FBUyxZQUFxQjtTQUFBLHlFQUFULEtBQ3ZCOztTQUFNLFFBQVEsS0FBSyxJQUVuQjs7U0FBSSxDQUFDLEtBQUssU0FDUjtZQUNEO0FBRUQ7O0FBQ0E7VUFBSyxLQUFLLE1BQU0sS0FBSyxLQUNyQjtVQUFLLEtBQUssUUFBUSxLQUFLLEtBRXZCOztXQUNEO0FBRUQ7O1FBQUksV0FBVyxTQUFTLFdBQ3RCO1NBQUksQ0FBQyxLQUFLLE9BQU8sUUFDZjtZQUFNLElBQUksTUFDWDtBQUVEOztVQUFLLE9BQU8sUUFBUSxVQUFDLEdBQ25CO1FBQUUsT0FDSDtBQUVEOztVQUFLLE9BQ047QUFFRDs7QUFHQTs7O1FBQUksVUFBVSxTQUFTLFVBQ3JCO1NBQUksS0FBSyxPQUFPLFFBQ2Q7WUFBTSxJQUFJLE1BQ1g7QUFFRDs7VUFBSyxPQUNOO0FBRUQ7O0FBS0E7Ozs7O1FBQUksUUFBUSxTQUFTLE1BQU0sVUFBVTtpQkFDbkM7O1VBQUssT0FDTDtVQUFLLE1BQU0sTUFBTSxLQUNqQjtnQkFBVzthQUFNLE1BQUssT0FBTztBQUE3QixRQUNBO1lBQ0Q7QUFFRDs7QUFJQTs7OztRQUFJLE9BQU8sU0FBUyxPQUNsQjtVQUFLLE9BQ0w7WUFDRDtBQUVEOztBQUlBOzs7O1FBQUksU0FBUyxTQUFTLFNBQ3BCO1VBQ0E7VUFBSyxPQUFPLFlBQVksS0FBSyxPQUM3QjtVQUFLLFFBQVEsS0FDYjtZQUNEO0FBRUQ7O1FBQUksU0FBUyxTQUFTLFNBQW1CO2tCQUFBOztTQUFBLHlFQUFULEtBQzlCOztVQUFLLGNBQWMsT0FBTyxPQUFPLFVBQUMsR0FDaEM7VUFBSSxFQUFFLE9BQU8sSUFDWDtjQUFLLE9BQU8sWUFBWSxFQUFFLE9BQzFCO2NBQ0Q7QUFFRDs7YUFDRDtBQUNGLE1BUmU7QUFVaEI7O1FBQUksU0FBUyxTQUFTLE9BQU8sUUFDM0I7U0FBSSxDQUFDLE9BQU8sYUFDVjtXQUFLLFFBQVEsT0FBTyxPQUFPLElBQUksS0FDL0I7YUFBTyxLQUNSO0FBSmtDOztTQU1aLFFBQW1CLE9BQW5DO1NBQXVCLFdBQVksT0FDMUM7O1NBQU0sT0FBTyxNQUFNLFVBQVUsT0FBTyxHQUFHLFNBRXZDOztVQUFLLElBQUksT0FBTyxLQUFLLEtBQ25CO1VBQUksS0FBSyxJQUFJLGVBQWUsTUFDMUI7V0FBSSxLQUFLLElBQUksU0FBUyxhQUFhLEtBQUssTUFBTSxTQUFTLFdBQ3JEO2FBQUssTUFBTSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sT0FBTyxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksTUFDekU7QUFDRjtBQUNGO0FBRUQ7O1lBQU8sS0FDUjtBQUVEOztXQUFPLFVBRVA7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlBBOztBQUtBOzs7OztRQUFNLFFBQVEsT0FBTyxPQUlyQjs7QUFNQTs7Ozs7O1VBQU0sT0FBTyxTQUFTLFlBQ3BCO1VBQUssWUFDTDtZQUNEO0FBRUQ7O0FBTUE7Ozs7OztVQUFNLE9BQU8sU0FBUyxPQUFjO3VDQUFBLG1EQUFOO0FBQU07QUFBQTs7U0FDM0IsUUFBa0IsS0FEUztTQUNqQixPQUFRLFdBRXpCOztTQUFJLENBQUMsT0FDSDtZQUFNLElBQUksVUFDWDtBQUVEOztVQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFFdkM7O1NBQUksS0FBSyxVQUFVLE9BQU8sUUFDeEI7V0FBSyxVQUFVLE9BQU8sUUFBUSxVQUFDLFVBQzdCO29EQUNEO0FBQ0Y7QUFFRDs7WUFDRDtBQUVEOztBQVFBOzs7Ozs7OztVQUFNLEtBQUssU0FBUyxHQUFHLE9BQU8sSUFBSSxTQUFTO2lCQUN6Qzs7U0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUNiO1lBQU0sSUFBSSxVQUNYO0FBRUQ7O1NBQUksU0FDRjtXQUFLLEdBQUcsS0FDVDtBQUVEOztTQUFNLFNBQVMsTUFBTSxNQUVyQjs7VUFBSyxZQUFZLEtBQUssYUFFdEI7O1lBQU8sUUFBUSxVQUFDLEdBQ2Q7WUFBSyxVQUFVLEtBQUssTUFBSyxVQUFVLE1BRW5DOztVQUFJLENBQUMsTUFBSyxVQUFVLEdBQUcsUUFDckI7YUFBSyxVQUFVLEdBQUcsS0FDbEI7Y0FDRDtBQUVEOztBQUNBO0FBQ0E7bUJBQVksVUFBVSxHQUFHLE1BQU0sVUFBQyxJQUFJLEdBQUcsS0FDckM7Y0FBTyxPQUNSO0FBRk0sV0FFRixNQUFLLFVBQVUsR0FBRyxLQUFLLE1BQzFCLFFBQVEsS0FBSywwQkFBd0Isc0NBRXhDO0FBRUQ7O1lBQ0Q7QUFFRDs7QUFPQTs7Ozs7OztVQUFNLE1BQU0sU0FBUyxNQUFhO3dDQUFBLHdEQUFOO0FBQU07QUFBQTs7U0FDekIsUUFBYSxLQURZO1NBQ2xCLEtBQU0sS0FFcEI7O1NBQUksQ0FBQyxPQUNIO1dBQUssWUFDTDthQUNEO0FBRUQ7O1NBQUksWUFBWSxLQUFLLFVBRXJCOztTQUFJLENBQUMsV0FDSDtjQUFRLGdDQUE4QixRQUN0QzthQUNEO0FBRUQ7O1NBQUksQ0FBQyxJQUNIO2FBQU8sS0FBSyxVQUNaO2FBQ0Q7QUFFRDs7VUFBSyxVQUFVLG1CQUFtQixPQUFPLFVBQUMsSUFBRDthQUFRLE9BQU87QUFFeEQsTUFGd0I7O1lBR3pCO0FBRUQ7O0FBS0E7Ozs7O1VBQU0sWUFBWSxTQUFTLFlBQW1CO3dDQUFBLHdEQUFOO0FBQU07QUFBQTs7U0FDckMsUUFBUyxLQUVoQjs7U0FBSSxDQUFDLE9BQ0g7YUFBTyxPQUFPLEtBQUssS0FDcEI7QUFFRDs7U0FBSSxDQUFDLEtBQUssVUFBVSxRQUNsQjtjQUFRLGdDQUE4QixRQUN2QztBQUVEOztZQUFPLEtBQUssVUFDYjtBQUVEOztVQUFNLE9BQU8sU0FBUyxPQUNwQjtTQUFNLE9BQU87O3dDQURxQix3REFBTjtBQUFNO0FBQUE7O1NBRTNCLFFBQXNCLEtBRks7U0FFcEIsS0FBZSxLQUZLO1NBRWhCLFVBQVcsS0FFN0I7O1NBQU0sT0FBTyxTQUFTLE9BQ3BCO1NBQUcsS0FDSDtXQUFLLElBQUksT0FDVjtBQUVEOztVQUFLLEdBQUcsT0FBTyxNQUNoQjtBQUVEOztBQUNBO1VBQU0saUJBQWlCLE1BQU0scUJBQXFCLE1BQ2xEO1VBQU0sT0FBTyxNQUNiO1VBQU0sY0FBYyxNQUNwQjtVQUFNLE1BQU0sTUFFWjs7V0FBTyxVQUFVOzs7Ozs7O0FDMUpqQjs7UUFBTSxTQUFTLG9CQUNmO1FBQU0sUUFBUSxvQkFBUSxLQUN0QjtRQUFNLFFBQVEsT0FBTyxPQUNyQjtRQUFNLFVBQ047UUFBTSxPQUFPLGdCQUFRLENBRXJCOztBQU1BOzs7Ozs7VUFBTSxPQUFPLFNBQVMsWUFBbUI7U0FBQSwyRUFDdkM7O21CQUFjO1dBQ1A7QUFBTCxNQURLLEVBSVA7O1VBQUssU0FDTDtVQUFLLFNBRUw7O0FBQ0E7VUFBSyxRQUFRLENBRWI7O0FBQ0E7VUFBSyxNQUVMOztBQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQUssaUJBRUw7O0FBQ0E7VUFBSyxNQUFNLEtBQUssTUFBTSxVQUNwQixVQUNDLEtBQUssT0FFUjs7WUFDRDtBQUVEOztBQUtBOzs7OztVQUFNLFFBQVEsU0FBUyxRQUNyQjtTQUFJLEtBQUssTUFBTSxJQUNiO1lBQU0sSUFBSSxNQUNYO0FBRUQ7O1NBQUksQ0FBQyxLQUFLLFFBQVEsS0FDaEI7WUFBTSxJQUFJLE1BQ1g7QUFFRDs7VUFBSyxNQUFNLE9BQU8sS0FDbEI7VUFBSyxZQUFZLFlBQ2pCO1VBQUssV0FBVyxLQUVoQjs7QUFDQTtVQUFLLEtBQUssS0FDVjtZQUNEO0FBRUQ7O0FBS0E7Ozs7O1VBQU0sT0FBTyxTQUFTLEtBQUssU0FDekI7VUFBSyxNQUFNLHNCQUFzQixLQUFLLEtBRXRDOztTQUFJLFFBQVEsVUFBVSxLQUN0QjtVQUFLLGlCQUFpQixVQUFVLEtBRWhDOztTQUFJLFFBQVEsS0FBSyxLQUNmO1dBRUE7O1dBQUs7Z0JBRUg7Y0FDQTtjQUFPLEtBQ1A7aUJBQVUsS0FDVjttQkFBWSxLQUNaO3VCQUFnQixLQUdsQjtBQVJFOztXQVFHLFdBQVcsVUFBVyxRQUFRLEtBQ3BDO0FBRUQ7O1VBQUssS0FFTDs7WUFDRDtBQUVEOztBQUlBOzs7O1VBQU0sT0FBTyxTQUFTLFlBQ3BCOzBCQUFxQixLQUVyQjs7QUFDQTtVQUFLLFdBQVcsWUFDaEI7VUFBSyxrQkFBa0IsS0FBSyxXQUFXLEtBQ3ZDO1VBRUE7O1VBQUssS0FDTDtZQUNEO0FBRUQ7O0FBTUE7Ozs7OztVQUFNLGFBQWEsU0FBUyxXQUFXLE9BQ3JDO1NBQUksQ0FBQyxLQUFLLE9BQU8sUUFFakI7O1VBQUssT0FBTyxRQUFRLFVBQUMsT0FBTyxPQUMxQjtZQUFNLE1BQ1A7QUFFRDs7VUFBSyxLQUNMO1lBQ0Q7QUFFRDs7VUFBTSxjQUFjLFNBQVMsWUFBWSxNQUN2QztTQUFJLENBQUMsTUFDSDtZQUFNLElBQUksTUFDWDtBQUg0Qzs7U0FLdEMsS0FBZ0IsS0FBaEI7U0FBSSxXQUFZLEtBQ3ZCOztTQUFNLFlBQVksWUFFbEI7O1NBQU0sUUFBUSxPQUFPLE9BQU8sUUFDekIsS0FBSyxFQUFDLFdBQUQsV0FBWSxJQUFaLElBQWdCLFVBRXhCOztTQUFJLElBQ0Y7V0FBSyxPQUFPLEtBQ1o7YUFDRDtBQUVEOztXQUFNLEtBQUssS0FBSyxPQUFPLEtBQ3ZCO1lBQ0Q7QUFFRDs7VUFBTSxjQUFjLFNBQVMsWUFBWSxJQUN2QztVQUFLLGNBQWMsT0FBTyxPQUFPLFVBQUMsT0FDaEM7VUFBSSxNQUFNLE9BQU8sSUFDZjtjQUNEO0FBQ0Q7WUFDQTthQUNEO0FBQ0YsTUFQZTtBQVNoQjs7VUFBTSxjQUFjLFNBQVMsY0FDM0I7U0FBSSxLQUFLLE9BQU8sUUFBUSxLQUFLLFNBQzlCO0FBRUQ7O1VBQU0sUUFBUSxZQUNaO1VBQ0E7VUFDQTtVQUNBO1VBQUssTUFDTjtBQUVEOztVQUFNLGtCQUFrQixNQUV4Qjs7V0FBTyxVQUFVOzs7Ozs7O0FDMUtqQjs7UUFBTSxRQUFRLG9CQUNkO1FBQU0sVUFBVSxPQUNoQjtRQUFNLFNBQVMsT0FBTyxPQUN0QjtRQUFNO2NBRUo7Y0FDQTtXQUlGO0FBTkU7O1dBTUssT0FBTyxTQUFTLFdBS3BCOytCQUFBO1NBQUEsMkNBSlMsWUFJVDtTQUFBOzhCQUFBO1NBQUE7OEJBQUE7U0FBQSxtREFDRDs7VUFBSyxLQUNMO1VBQUssU0FDTDtVQUFLLE9BQU8sT0FFWjs7QUFDQTtBQUNBO1VBQUssV0FDTDtVQUFLLFdBQVcsS0FBSyxRQUFRLFVBRTdCOztVQUNBO1VBQ0E7VUFDQTtVQUFLLFlBQ0w7VUFBSyxpQkFDTDtVQUFLLGtCQUVMOztBQUNBO1VBQUssY0FFTDs7WUFDRDtBQUVEOztXQUFPLFVBQVUsU0FBUyxRQUFRLFVBQVUsUUFDMUM7YUFDQTtXQUFLLFNBQVUsS0FDYjs7Y0FFRTtlQUNBO1lBQUksV0FFUjtBQUpJO1dBSUMsVUFBVyxLQUNkOztjQUVFO2VBQ0E7WUFBSSxXQUVSO0FBSkk7V0FJQyxlQUFnQixLQUFLLEtBQ3hCOztjQUVFO2VBQ0E7WUFBSTtBQUZKO01BS0w7QUFFRDs7V0FBTyxRQUFRLFNBQVMsUUFDdEI7U0FBSSxLQUFLLFVBQVUsTUFBTSxTQUFTLE9BQ2xDO1VBQUssUUFBUSxNQUNiO1VBQUssWUFBWSxZQUNsQjtBQUVEOztXQUFPLE9BQU8sU0FBUyxPQUNyQjtTQUFJLEtBQUssVUFBVSxNQUFNLFNBQVMsT0FDbEM7VUFBSyxRQUFRLE1BRWI7O0FBQ0E7QUFDQTtBQUNBO1NBQU0sY0FBYyxLQUFLLFNBQVMsS0FBSyxLQUFLLGtCQUU1Qzs7VUFBSyxXQUFXLEtBQUssUUFBUSxhQUM3QjtVQUFLLGlCQUVMOztVQUFLLFdBQVcsWUFDakI7QUFFRDs7V0FBTyxRQUFRLFNBQVMsTUFBTSxPQUM1QjtTQUFJLENBQUMsT0FDSDtZQUFNLElBQUksTUFDWDtBQUdEOztTQUFJLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sU0FDdkQ7V0FBSyxjQUNMO2FBQ0Q7QUFFRDs7VUFBSyxRQUFRLE1BQ2I7VUFBSyxrQkFBa0IsTUFFdkI7O1NBQUksS0FBSyxpQkFBaUIsS0FBSyxTQUFTLElBQ3RDO1dBQUssY0FDTjtBQUZELFlBR0U7V0FBSyxRQUFRLE1BQ2I7V0FBSyxjQUNOO0FBQ0Y7QUFFRDs7V0FBTyxVQUFVOzs7Ozs7Ozs7Ozs7O0FDeEdqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQSxLQUFNQyxlQUFlLElBQXJCOztBQUVBQyxRQUFPQyxPQUFQLEdBQWlCLFNBQVNDLGFBQVQsQ0FBdUJqQyxRQUF2QixFQUFpQztBQUNoREEsY0FBV0EsWUFBWSxLQUFLQSxRQUE1Qjs7QUFFQSxPQUFNa0MsWUFBWSxtQkFBQXBDLENBQVEsQ0FBUixFQUFzQkUsUUFBdEIsQ0FBbEI7QUFDQSxPQUFNQyxRQUFRLG1CQUFBSCxDQUFRLENBQVIsRUFBaUJFLFFBQWpCLENBQWQ7O0FBRUEsT0FBTVksSUFBSVgsTUFBTVcsQ0FBaEI7QUFDQSxPQUFNdUIsS0FBS2xDLE1BQU1rQyxFQUFqQjs7QUFFQSxPQUFJQyxhQUFhTixZQUFqQjs7QUFFQSxPQUFNTyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFTO0FBQzNCLFNBQU1DLFNBQVNELElBQUlDLE1BQW5CO0FBQ0EsU0FBSUEsVUFBVSxHQUFWLElBQWlCQSxTQUFTLEdBQTlCLEVBQW1DO0FBQ2pDLGNBQU9ELEdBQVA7QUFDRDtBQUNELFdBQU1BLElBQUlFLFVBQVY7QUFDRCxJQU5EOztBQVFBOzs7OztBQUtBLE9BQU1DLGVBQWUsU0FBU0EsWUFBVCxDQUFzQkMsRUFBdEIsRUFBMEI7QUFDN0MsWUFBT0MsTUFBTSxlQUFlRCxFQUFyQixFQUNORSxJQURNLENBQ0RQLFdBREMsRUFFTk8sSUFGTSxDQUVELFVBQVNDLFFBQVQsRUFBbUI7QUFDdkIsY0FBT0EsU0FBU3RCLElBQVQsRUFBUDtBQUNELE1BSk0sRUFLTnVCLEtBTE0sQ0FLQSxVQUFTMUIsR0FBVCxFQUFjO0FBQ25CLGFBQU0sSUFBSU4sS0FBSixDQUFVTSxHQUFWLENBQU47QUFDRCxNQVBNLENBQVA7QUFRRCxJQVREOztBQVlBOzs7Ozs7QUFNQSxPQUFNMkIsYUFBYSxTQUFTQSxVQUFULENBQW9CQyxNQUFwQixFQUE0QkMsS0FBNUIsRUFBbUM7QUFDcEQsU0FBSSxDQUFDZixVQUFVZ0IsU0FBVixDQUFvQkYsTUFBcEIsQ0FBRCxJQUFnQyxDQUFDZCxVQUFVZ0IsU0FBVixDQUFvQkQsS0FBcEIsQ0FBckMsRUFBaUU7QUFDL0QsYUFBTSxJQUFJbkMsS0FBSixDQUFVa0MsU0FBUyxtQ0FBbkIsQ0FBTjtBQUNEO0FBQ0QsWUFBT0EsT0FBT0csV0FBUCxDQUFtQkYsS0FBbkIsQ0FBUDtBQUNELElBTEQ7O0FBT0E7Ozs7O0FBS0EsT0FBTUcsV0FBVyxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUN2QyxTQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPekMsRUFBRSxzQkFBRixDQUFQO0FBQ1gsWUFBT0EsRUFBRSwwQkFBMEJ5QyxJQUExQixHQUFpQyxHQUFuQyxDQUFQO0FBQ0QsSUFIRDs7QUFLQTs7Ozs7O0FBTUEsT0FBTUMsWUFBWSxTQUFTQSxTQUFULENBQW1CQyxHQUFuQixFQUF3Qk4sS0FBeEIsRUFBK0I7QUFDL0NBLFdBQU1PLE1BQU4sR0FBZUQsR0FBZjtBQUNBLFlBQU9OLEtBQVA7QUFDRCxJQUhEOztBQUtBOzs7OztBQUtBLE9BQU1RLGNBQWMsU0FBU0EsV0FBVCxDQUFxQkosSUFBckIsRUFBMkI7QUFDN0MsU0FBSSxDQUFDQSxJQUFELElBQVMsT0FBT0EsSUFBUCxLQUFnQixRQUE3QixFQUF1QztBQUNyQyxhQUFNLElBQUl2QyxLQUFKLENBQVV1QyxPQUFPLDZCQUFqQixDQUFOO0FBQ0Q7O0FBRUQsU0FBTXRELFNBQVNDLFNBQVMwRCxhQUFULENBQXVCLFFBQXZCLENBQWY7O0FBRUEzRCxZQUFPNEQsWUFBUCxDQUFvQixtQkFBcEIsRUFBeUMsSUFBekM7QUFDQTVELFlBQU80RCxZQUFQLENBQW9CLGVBQXBCLEVBQXFDLElBQXJDO0FBQ0E1RCxZQUFPNEQsWUFBUCxDQUFvQixpQkFBcEIsRUFBdUMsSUFBdkM7QUFDQTVELFlBQU80RCxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLGVBQTdCO0FBQ0E1RCxZQUFPNEQsWUFBUCxDQUFvQixjQUFwQixFQUFvQ04sSUFBcEM7O0FBRUEsWUFBT3RELE1BQVA7QUFDRCxJQWREOztBQWdCQTs7Ozs7QUFLQSxPQUFNNkQsaUJBQWlCLFNBQVNBLGNBQVQsQ0FBd0J2QyxNQUF4QixFQUFnQztBQUNyRCxTQUFJLENBQUNBLE1BQUwsRUFBYSxNQUFNLElBQUlQLEtBQUosQ0FBVSx5QkFBVixDQUFOOztBQUViLFNBQUksQ0FBQ29CLFVBQVVnQixTQUFWLENBQW9CN0IsTUFBcEIsQ0FBTCxFQUFrQztBQUNoQyxjQUFPK0IsU0FBUy9CLE1BQVQsRUFBaUJ3QyxNQUFqQixHQUEwQixFQUFqQztBQUNEO0FBQ0QsWUFBT3hDLE9BQU93QyxNQUFQLEdBQWdCLEVBQXZCO0FBQ0QsSUFQRDs7QUFTQTs7Ozs7QUFLQSxPQUFNQyxnQkFBZ0IsU0FBU0EsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7QUFDcEQsU0FBSSxDQUFDQSxPQUFMLEVBQWMsT0FBTyxLQUFQOztBQUVkLFNBQUlyQixXQUFKOztBQUVBLFNBQUk7QUFDRkEsWUFBS1UsU0FBU1csT0FBVCxFQUNGQyxVQURFLENBQ1MsY0FEVCxFQUVGQyxTQUZIO0FBR0QsTUFKRCxDQUlFLE9BQU9DLENBQVAsRUFBVTtBQUNWLFdBQUlBLENBQUosRUFBTztBQUNMeEIsY0FBSyxLQUFMO0FBQ0Q7QUFDRixNQVJELFNBUVU7QUFDUixjQUFPQSxPQUFPcUIsT0FBZDtBQUNEO0FBQ0YsSUFoQkQ7O0FBa0JBOzs7OztBQUtBLE9BQU12QyxlQUFlLFNBQVNBLFlBQVQsQ0FBc0JrQixFQUF0QixFQUEwQjtBQUM3QyxTQUFJLENBQUNvQixjQUFjcEIsRUFBZCxDQUFMLEVBQXdCO0FBQUE7O0FBRXRCLGFBQUksQ0FBQ04sVUFBTCxFQUFpQjtBQUFBOztBQUVmO0FBQ0EsaUJBQU0rQixnQkFBZ0JmLFVBQXRCO0FBQ0FRLDRCQUFlTyxhQUFmO0FBQ0FBLDJCQUFjUixZQUFkLENBQTJCLGNBQTNCLEVBQTJDakIsRUFBM0M7QUFDQTtBQUFBO0FBQUEsb0JBQU9ELGFBQWFDLEVBQWIsRUFDSkUsSUFESSxDQUNDLFVBQUNXLEdBQUQ7QUFBQSwwQkFBU0QsVUFBVUMsR0FBVixFQUFlWSxhQUFmLENBQVQ7QUFBQSxrQkFERCxFQUVKckIsS0FGSSxDQUVFc0IsZUFGRjtBQUFQO0FBQUE7QUFOZTs7QUFBQTtBQVNoQjs7QUFFRDtBQUNBaEMsc0JBQWEsQ0FBQ0EsVUFBZDtBQUNBO0FBQ0EsYUFBTWlDLGFBQWFaLFlBQVlmLEVBQVosQ0FBbkI7QUFDQSxhQUFNNEIsWUFBWTFELEVBQUUsaUJBQUYsQ0FBbEI7QUFDQTtBQUNBO0FBQUEsY0FBTzZCLGFBQWFDLEVBQWIsRUFDSkUsSUFESSxDQUNDLFVBQUNXLEdBQUQ7QUFBQSxvQkFBU0QsVUFBVUMsR0FBVixFQUFlYyxVQUFmLENBQVQ7QUFBQSxZQURELEVBRUp6QixJQUZJLENBRUMsVUFBQzJCLFFBQUQ7QUFBQSxvQkFBY3hCLFdBQVd1QixTQUFYLEVBQXNCQyxRQUF0QixDQUFkO0FBQUEsWUFGRCxFQUdKekIsS0FISSxDQUdFc0IsZUFIRjtBQUFQO0FBbkJzQjs7QUFBQTtBQXVCdkI7O0FBRUQsWUFBTyxLQUFQO0FBQ0QsSUEzQkQ7O0FBNkJBLE9BQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBU2hELEdBQVQsRUFBYztBQUNwQ1EsYUFBUTRDLEtBQVIsQ0FBY3BELEdBQWQ7QUFDQVIsT0FBRSxpQkFBRixFQUFxQjZELEtBQXJCLENBQTJCQyxPQUEzQixHQUFxQyxPQUFyQztBQUNBOUQsT0FBRSxpQkFBRixFQUFxQjZELEtBQXJCLENBQTJCRSxNQUEzQixHQUFvQyxPQUFwQztBQUNBL0QsT0FBRSxpQkFBRixFQUFxQjZELEtBQXJCLENBQTJCRyxLQUEzQixHQUFtQyxNQUFuQztBQUNBaEUsT0FBRSx3QkFBRixFQUE0QmlFLGtCQUE1QixDQUErQyxZQUEvQyxFQUE2RHpELEdBQTdEO0FBQ0QsSUFORDs7QUFRQSxVQUFPO0FBQ0x3QyxtQ0FESztBQUVMYiwyQkFGSztBQUdMSyx1QkFISztBQUlMRSx5QkFKSztBQUtMRyw2QkFMSztBQU1MakM7QUFOSyxJQUFQO0FBUUQsRUFsTEQsQzs7Ozs7Ozs7QUNGQU8sUUFBT0MsT0FBUCxHQUFpQixVQUFVaEMsUUFBVixFQUFvQjtBQUNuQ0EsY0FBV0EsWUFBWSxLQUFLQSxRQUE1Qjs7QUFFQSxPQUFNQyxRQUFRLG1CQUFBSCxDQUFRLENBQVIsRUFBaUJFLFFBQWpCLENBQWQ7QUFDQSxPQUFNbUMsS0FBS2xDLE1BQU1rQyxFQUFqQjs7QUFFQTs7Ozs7QUFLQSxPQUFNZSxZQUFZLFNBQVpBLFNBQVksQ0FBQzRCLEdBQUQ7QUFBQSxZQUFTQSxlQUFlQyxXQUF4QjtBQUFBLElBQWxCOztBQUVBOzs7OztBQUtBLE9BQU1wRSxZQUFZLFNBQVNxRSxPQUFULENBQWlCOUQsR0FBakIsRUFBc0I7QUFDdEMsU0FBTStELFVBQVU5QyxHQUFHakIsR0FBSCxFQUFRbEIsUUFBUixDQUFoQjtBQUNBLFNBQU1VLFlBQVksRUFBbEI7O0FBRUE7Ozs7QUFKc0M7QUFBQTtBQUFBOztBQUFBO0FBUXRDLDRCQUFpQnVFLE9BQWpCLDhIQUEwQjtBQUFBLGFBQWpCQyxJQUFpQjs7QUFDeEJ4RSxtQkFBVXlFLElBQVYsQ0FBZUQsS0FBSzNELElBQXBCO0FBQ0Q7QUFWcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZdEMsWUFBT2IsU0FBUDtBQUNELElBYkQ7O0FBZUE7Ozs7Ozs7QUFPQSxPQUFNTSxlQUFlLFNBQVNBLFlBQVQsQ0FBc0JFLEdBQXRCLEVBQTJCa0UsS0FBM0IsRUFBa0M7QUFDckQsU0FBSSxDQUFDbEMsVUFBVWhDLEdBQVYsQ0FBTCxFQUFxQixNQUFNLElBQUlKLEtBQUosQ0FBVUksTUFBTSx5QkFBaEIsQ0FBTjtBQUNyQixTQUFJQSxJQUFJTCxNQUFSLEVBQWdCLE1BQU0sSUFBSUMsS0FBSixDQUFVSSxNQUFNLDJCQUFoQixDQUFOOztBQUVoQixZQUFPLFVBQVNtRSxXQUFULEVBQXNCQyxRQUF0QixFQUFnQztBQUNyQ3BFLFdBQUlWLGdCQUFKLENBQXFCNEUsS0FBckIsRUFBNEIsVUFBU2xCLENBQVQsRUFBWTtBQUN0Q0EsV0FBRXFCLGNBQUY7O0FBRUEsYUFBSUYsWUFBWW5CLEVBQUU3QyxNQUFkLENBQUosRUFBMkI7QUFDekIsa0JBQU9pRSxTQUFTLElBQVQsRUFBZXBCLEVBQUU3QyxNQUFqQixFQUF5QjZDLENBQXpCLENBQVA7QUFDRDs7QUFFRCxnQkFBT29CLFNBQVMsSUFBSXhFLEtBQUosQ0FBVSxtQkFBVixDQUFULENBQVA7QUFDRCxRQVJEO0FBU0QsTUFWRDtBQVdELElBZkQ7O0FBaUJBLFVBQU8sRUFBQ0UsMEJBQUQsRUFBZUwsb0JBQWYsRUFBMEJ1QyxvQkFBMUIsRUFBUDtBQUNELEVBMURELEM7Ozs7Ozs7O0FDQUE7QUFDQW5CLFFBQU9DLE9BQVAsR0FBaUIsU0FBUy9CLEtBQVQsQ0FBZUQsUUFBZixFQUF5QjtBQUN4Q0EsY0FBV0EsWUFBWSxLQUFLQSxRQUE1Qjs7QUFFQSxPQUFNWSxJQUFJLFNBQVM0RSxFQUFULEdBQXFCO0FBQUE7O0FBQzdCLFlBQU8sdUJBQVNDLGFBQVQsNEJBQVA7QUFDRCxJQUZEOztBQUlBLE9BQU10RCxLQUFLLFNBQVN1RCxLQUFULEdBQXdCO0FBQUE7O0FBQ2pDLFlBQU8sd0JBQVNDLGdCQUFULDZCQUFQO0FBQ0QsSUFGRDs7QUFJQSxVQUFPLEVBQUMvRSxJQUFELEVBQUl1QixNQUFKLEVBQVA7QUFDRCxFQVpEO0FBYUEsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ZTNkNDFlMDA3NjlmYjA3MGEzOCIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcblxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVybCA9IGlucHV0XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoJ1xcclxcbicpLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cucGFydGljbGVMaWIgPSByZXF1aXJlKFwicGFydGljbGVzXCIpO1xuXG5jb25zdCBpZnJhbWUgPSByZXF1aXJlKFwiaWZyYW1lTWFuYWdlci5qc1wiKShkb2N1bWVudCk7XG5jb25zdCBzaGltcyA9IHJlcXVpcmUoXCJzaGltcy5qc1wiKShkb2N1bWVudCk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCJkb21faGVscGVyLmpzXCIpKGRvY3VtZW50KTtcbmNvbnN0IERFRkFVTFRfRVhBTVBMRSA9IFwicmFuZG9tX3ZlY3RvcnNcIjtcblxuY29uc3Qgc2V0aGFzaCA9IChmcmFnbWVudCkgPT4ge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBmcmFnbWVudCB8fCBcIlwiO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgY29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGNvbnN0IHRleHROb2RlcyA9IHV0aWxzLm1hcFRvVGV4dChcIi5saXN0LWV4YW1wbGVzIGxpIGFcIik7XG4gIGNvbnN0ICQgPSBzaGltcy4kO1xuXG4gIGlmICh0ZXh0Tm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmVzIG5vIHRleHROb2RlcyB0byBjaGVjayBhZ2FpbnN0LlwiKTtcbiAgfVxuXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcbiAgY2FzZShcIi9cIik6IHtcbiAgICBicmVhaztcbiAgfVxuICBjYXNlKFwiL2V4YW1wbGVzXCIpOiB7XG4gICAgY29uc3Qgb25DbGlja09mTGlzdCA9IHV0aWxzLmVsbURlbGVnYXRvcigkKFwiLmxpc3QtZXhhbXBsZXNcIiksIFwiY2xpY2tcIik7XG4gICAgY29uc3QgaXNBbmNob3IgPSAoZWxtKSA9PiBlbG0udGFnTmFtZSA9PT0gXCJBXCI7XG5cbiAgICBvbkNsaWNrT2ZMaXN0KGlzQW5jaG9yLCBmdW5jdGlvbihlcnIsIHRhcmdldCwgZXZ0KSB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgIHNldGhhc2godGFyZ2V0LnRleHQpO1xuICAgICAgaWZyYW1lLmxvYWRJbklmcmFtZSh0YXJnZXQudGV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGVyZXMgYSBwYWdlIGZyYWdtZW50IGxvYWQgdGhlIHJpZ2h0IGV4YW1wbGUuXG4gICAgaWYgKGhhc2gubGVuZ3RoKSB7XG4gICAgICBjb25zdCBoYXNoUXVlcnkgPSBoYXNoLnN1YnN0cigxKTtcblxuICAgICAgaWYgKHRleHROb2Rlcy5pbmRleE9mKGhhc2hRdWVyeSkgPiAtMSkge1xuICAgICAgICBpZnJhbWUubG9hZEluSWZyYW1lKGhhc2hRdWVyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAvLyBEZWZhdWx0IHRvIHRoZSBhbiBleGFtcGxlIGlmIHRoZXJlcyBubyBoYXNoLlxuICAgIGlmIChoYXNoLmxlbmd0aCA8IDEpIHtcbiAgICAgIHNldGhhc2goREVGQVVMVF9FWEFNUExFKTtcbiAgICAgIGlmcmFtZS5sb2FkSW5JZnJhbWUoREVGQVVMVF9FWEFNUExFKTtcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cblxuICBjYXNlKFwiL21hdGhzXCIpOiB7XG4gICAgYnJlYWs7XG4gIH1cbiAgZGVmYXVsdDoge1xuICAgIGNvbnNvbGUubG9nKFwibm8gcm91dGUgbWF0Y2hlZCA0MDQgOihcIik7XG4gIH1cbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGNmYjQxMDM3NDZlOTc0YjFkNjBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovd2VicGFjay9ib290c3RyYXAgMGNmYjQxMDM3NDZlOTc0YjFkNjAiLCJjb25zdCBWZWN0b3IgPSByZXF1aXJlKFwiLi9saWIvdmVjdG9yc1wiKTtcbmNvbnN0IFBhcnRpY2xlID0gcmVxdWlyZShcIi4vbGliL3BhcnRpY2xlXCIpO1xuY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi9saWIvdXRpbHNcIik7XG5jb25zdCBTaGFwZXMgPSByZXF1aXJlKFwiLi9saWIvc2hhcGVzXCIpO1xuY29uc3QgWUFUID0gcmVxdWlyZShcIi4vbGliL3R3ZWVuXCIpO1xuY29uc3QgQ2xvY2sgPSByZXF1aXJlKFwiLi9saWIvY2xvY2suanNcIik7XG5jb25zdCBUaWNrZXIgPSByZXF1aXJlKFwiLi9saWIvdGlja2VyLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVmVjdG9yLFxuICBQYXJ0aWNsZSxcbiAgVXRpbHMsXG4gIFNoYXBlcyxcbiAgWUFULFxuICBUaWNrZXIsXG4gIENsb2NrLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL21haW4uanMiLCIvKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG4vLyAgICAgIFxuXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICB4OiAwLFxuICB5OiAxLFxufTtcblxuLyoqXG4gKiBWZWN0b3IgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGRvaW5nIHZlY3RvciBvcGVyYXRpb25zIGFuZCBzdG9yaW5nXG4gKiB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBvZiB0aGUgdmVjdG9yLlxuICovXG5cbi8qKlxuICogQGNsYXNzIFZlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIG9iamVjdC5cbiAqL1xuY2xhc3MgVmVjdG9yIHtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgIFxuXG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlIEluaXRpYWwgc3RhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0YXRlICAgICAgICAgPSBJTklUSUFMX1NUQVRFKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSAtIEVhc3kgd2F5IHRvIGluc3RhbnRpYXRlIGEgdmVjdG9yLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSAge0ludH0geFxuICAgKiBAcGFyYW0gIHtJbnR9IHlcbiAgICogQHJldHVybiB7VmVjdG9yfSAgIEEgb2JqZWN0IGluaGVyaXRpbmcgZnJvbSBWZWN0b3IuXG4gICAqL1xuICBjcmVhdGUoeCAgICAgICAgID0gMCwgeSAgICAgICAgID0gMCkgICAgICAgICB7XG4gICAgY29uc3QgdmVjID0gbmV3IFZlY3Rvcih7eCwgeX0pO1xuICAgIHJldHVybiB2ZWM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCAtIEEgc2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSAgeyp9IHByb3BcbiAgICogQHBhcmFtICB7Kn0gdmFsXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IElzIHRoZSBwcm9wIHlvdXIgcGFzc2luZyBpbiBleHNpc3QuXG4gICAqL1xuICBzZXQocHJvcCAgICAgICAgLCB2YWwgICAgICkgICAgICAgICAge1xuICAgIC8vIFRPRE86IEFkZCBjaGVjayB2YWwgaXMgbnVtYmVyXG4gICAgLy8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIHRoaXMuc3RhdGVbcHJvcF0gPSB2YWw7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldCAtIEEgZ2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcHJvcCAgVGhlIHByb3AgdG8gc2V0IG9uIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtWYWx1ZX0gICAgICAgIFRoZSB2YWx1ZSBhc3Nvc2lhdGVkIHdpdGggdGhlIHByb3AuXG4gICAqL1xuICBnZXQocHJvcCAgICAgICAgKSAgICAgIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVtwcm9wXTtcbiAgfTtcblxuICAvKipcbiAgICogc2V0QW5nbGUgLSBQbG90IHRoZSBjb3JyZGluYXRlcyBiYXNlZCBvbiByYWRpYW5zIGdpdmVuLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSB7UmFkaWFuc30gcmFkIEEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLlxuICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAqL1xuICBzZXRBbmdsZShyYWQgICAgICAgICkgICAgICAgICB7XG4gICAgLy8gVE9ETzogQWRkIGNoZWNrIHJhZCBpcyBudW1iZXJcbiAgICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgdGhpcy5zZXQoXCJ4XCIsIE1hdGguY29zKHJhZCkgKiBsZW5ndGgpO1xuICAgIHRoaXMuc2V0KFwieVwiLCBNYXRoLnNpbihyYWQpICogbGVuZ3RoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBzZXRMZW5ndGggLSBUYWtlcyBhIGxlbmd0aCBhbmQgc2V0cyBjb29yZGluYXRlLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSB7SW50ZWdlcn0gbGVuZ3RoXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICovXG4gIHNldExlbmd0aChsZW5ndGggICAgICAgICkgICAgICAgICB7XG4gICAgLy8gVE9ETzogQWRkIGNoZWNrIHJhZCBpcyBudW1iZXJcbiAgICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgICBjb25zdCByYWQgPSB0aGlzLmdldEFuZ2xlKCk7XG5cbiAgICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gICAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldExlbmd0aCAtIEdldHMgbGVuZ3RoIG9mIHRoZSBjb29yZGluYXRlcyBmcm9tIGNlbnRlciBwbGFuZS5cbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcmV0dXJuIHtJbnRlZ2VyfSBDb29yaWRpbmF0ZXMuXG4gICAqL1xuICBnZXRMZW5ndGgoKSAgICAgICAgIHtcbiAgICBjb25zdCB4ID0gKHRoaXMuZ2V0KFwieFwiKSAgICAgICAgKTtcbiAgICBjb25zdCB5ID0gKHRoaXMuZ2V0KFwieVwiKSAgICAgICAgKTtcbiAgICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5KTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0QW5nbGUgLSBHZXQgdGhlIGFuZ2xlIG9mIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEByZXR1cm4ge0ludGVnZXJ9IENvb3JpZGluYXRlcy5cbiAgICovXG4gIGdldEFuZ2xlKCkgICAgICAgICB7XG4gICAgY29uc3QgeCA9ICh0aGlzLmdldChcInhcIikgICAgICAgICk7XG4gICAgY29uc3QgeSA9ICh0aGlzLmdldChcInlcIikgICAgICAgICk7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIHJhbmRvbSBnZW5lcmF0ZSBhIHZlY3RvciB3aXRoIHJhbmRvbSBzdGF0ZXMuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiAtIEEgbWluIHJhbmdlIG9uIHRoZSByYW5kb20gdmVjdG9yIHN0YXRlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IC0gQSBtYXggcmFuZ2Ugb24gdGhlIHJhbmRvbSB2ZWN0b3Igc3RhdGUuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICovXG4gIHJhbmRvbShtaW4gICAgICAgID0xLCBtYXggICAgICAgID0xMCkgICAgICAgICB7XG4gICAgY29uc3QgeCA9IHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpO1xuICAgIGNvbnN0IHkgPSB1dGlscy5sZXJwKE1hdGgucmFuZG9tKCksIG1pbiwgbWF4KTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoeCwgeSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybiBhIHZlY3RvciB0aGF0IGhhcyBhIHggYmV0d2VlbiB0aGUgZ2l2ZW4gcmFuZ2UuXG4gICAqICAgICAgICAgICAgICBhbmQgeSBnaXZlbiBhIHJhbmdlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhNaW4gTWlubXVtIHggdmFsdWVcbiAgICogQHBhcmFtICB7TnVtYmVyfSB4TWF4IE1heGltdW0geCB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlNaW4gTWlubXVtIHkgdmFsdWVcbiAgICogQHBhcmFtICB7TnVtYmVyfSB5TWF4IE1heGltdW0geSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICAqL1xuICByYW5kb21CZXR3ZWVuKHhNaW4gICAgICAgID0wLCB4TWF4ICAgICAgICA9MTAsIHlNaW4gICAgICAgID0wLCB5TWF4ICAgICAgICA9MTApICAgICAgICAge1xuICAgIHhNYXggPSBNYXRoLm1heCh4TWluLCB4TWF4KTtcbiAgICB4TWluID0gTWF0aC5taW4oeE1pbiwgeE1heCk7XG4gICAgeU1heCA9IE1hdGgubWF4KHlNaW4sIHlNYXgpO1xuICAgIHlNaW4gPSBNYXRoLm1pbih5TWluLCB5TWF4KTtcblxuICAgIGNvbnN0IHkgPSAodXRpbHMucmFuZG9tQmV0d2Vlbih5TWluLCB5TWF4KSAgICAgICAgKTtcbiAgICBjb25zdCB4ID0gKHV0aWxzLnJhbmRvbUJldHdlZW4oeE1pbiwgeE1heCkgICAgICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoeCwgeSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGFkZCAtIFNob3VsZCBhZGQgdmVjdG9ycyB0b2dldGhlciBnaXZlbiBhIHZlY3RvclxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSB7VmVjdG9yfSB2MiBBIGdpdmVuIHZlY3RvciB0byBhZGQuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSB2ZWN0b3Igd2l0aCBjb29yaWRuYXRlcywgb3IgbXVsdGlwbGUgdmVjdG9ycy5cbiAgICovXG4gIGFkZCh2MiAgICAgICAgKSAgICAgICAgIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgICB0aGlzLmdldChcInhcIikgKyB2Mi5nZXQoXCJ4XCIpLFxuICAgICAgdGhpcy5nZXQoXCJ5XCIpICsgdjIuZ2V0KFwieVwiKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIHN1YnRyYWN0IC0gc2hvdWxkIHN1YnRyYWN0IHRoZSBnaXZlbiB2ZWN0b3Igd2l0aCBpdHMgb3duIHZlY3Rvci5cbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gICAqIEBleGFtcGxlIHt4OiAyLCB5OiAyfSAtIHt4OiAyLCB5OiAyfSA9IHt4OiAwLCB5OiAwfVxuICAgKi9cbiAgc3VidHJhY3QodjIgICAgICAgICkgICAgICAgICB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgICAgdGhpcy5nZXQoXCJ4XCIpIC0gdjIuZ2V0KFwieFwiKSxcbiAgICAgIHRoaXMuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNdWxpdHBseWluZyB2ZWN0b3JzIHRvZ2V0aGVyXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9ICoge3g6IDIsIHk6IDJ9ID0ge3g6IDQsIHk6IDR9XG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7VmVjdG9yfSAgICBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAgICovXG4gIG11bHRpcGx5KHYyICAgICAgICApICAgICAgICAge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICAgIHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIiksXG4gICAgICB0aGlzLmdldChcInlcIikgKiB2Mi5nZXQoXCJ5XCIpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogRGl2aWRlIHZlY3RvcnMgdG9nZXRoZXIuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICAgKi9cbiAgZGl2aWRlKHYyICAgICAgICApICAgICAgICAge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICAgIHRoaXMuZ2V0KFwieFwiKSAvIHYyLmdldChcInhcIiksXG4gICAgICB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyB0byBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAgICovXG4gIGFkZFRvKHYyICAgICAgICApICAgICAgICAge1xuICAgIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIik7XG4gICAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICsgdjIuZ2V0KFwieVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU3VidHJhY3RzIGZyb20gY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gICAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gICAqL1xuICBzdWJ0cmFjdEZyb20odjIgICAgICAgICkgICAgICAgICB7XG4gICAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC0gdjIuZ2V0KFwieFwiKTtcbiAgICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLSB2Mi5nZXQoXCJ5XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBtdWxpdHBsaWVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICAgKi9cbiAgbXVsdGlwbHlCeSh2MiAgICAgICAgKSAgICAgICAgIHtcbiAgICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgKiB2Mi5nZXQoXCJ4XCIpO1xuICAgIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cblxuICAvKipcbiAgICogRGl2aWRlcyBieSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAgICovXG4gIGRpdmlkZUJ5KHYyICAgICAgICApICAgICAgICAge1xuICAgIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAvIHYyLmdldChcInhcIik7XG4gICAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpIC8gdjIuZ2V0KFwieVwiKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gYW5nbGUgQSBudW1iZXIgb2YgcmFkaWFucyB0byByb3RhdGUgY2xvY2t3aXNlIGJ5LlxuICAgKiBAcmV0dXJuIHtWZWN0b3J9XG4gICovXG4gIHJvdGF0ZUJ5KGFuZ2xlICAgICAgICApICAgICAgICAge1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBjb25zdCB4ID0gdGhpcy5zdGF0ZS54ICogY29zIC0gdGhpcy5zdGF0ZS55ICogc2luO1xuICAgIGNvbnN0IHkgPSB0aGlzLnN0YXRlLnkgKiBjb3MgKyB0aGlzLnN0YXRlLnggKiBzaW47XG5cbiAgICB0aGlzLnN0YXRlLnggPSB4O1xuICAgIHRoaXMuc3RhdGUueSA9IHk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogdjFcbiAgICogQHBhcmFtIHtWZWN0b3J9IHYxIFZlY3RvclxuICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdjIgVmVjdG9yXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBkaXN0YW5jZUJldHdlZW4odjEgICAgICAgICwgdjIgICAgICAgICkgICAgICAgICB7XG4gICAgY29uc3QgZFZlYyA9IHYxLnN1YnRyYWN0KHYyKTtcbiAgICByZXR1cm4gTWF0aC5oeXBvdChkVmVjLmdldChcInhcIiksIGRWZWMuZ2V0KFwieVwiKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3b3MgdmVjdG9ycyBzZWUgaWYgdGhleSBpbnRlcnNlY3QuXG4gICAqIEBtZW1iZXJPZiBVdGlsc1xuICAgKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzBcbiAgICogQHBhcmFtICB7VmVjdG9yfSB2ZWMxXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgdmVjdG9ySW50ZXJzZWN0KHZlYzAgICAgICAgICwgdmVjMSAgICAgICAgKSAgICAgICAgICB7XG4gICAgY29uc3QgeDAgPSB2ZWMwLmdldChcInhcIik7XG4gICAgY29uc3QgeTAgPSB2ZWMwLmdldChcInlcIik7XG4gICAgY29uc3QgeDEgPSB2ZWMxLmdldChcInhcIik7XG4gICAgY29uc3QgeTEgPSB2ZWMxLmdldChcInlcIik7XG4gICAgcmV0dXJuIHV0aWxzLnJhbmdlSW50ZXJzZWN0KHgwLCB5MCwgeDEsIHkxKTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi92ZWN0b3JzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi92ZWN0b3JzLmpzIiwiLy8gICAgICBcblxuLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyBjb21wb3NlZCBvZiBzbWFsbCBmdW5jdGlvbiB0aGF0XG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIG5lZWRlZC4gTW9zdCBmdW5jdGlvbnMgYXJlIHB1cmVcbiAqIGFuZCBvbmx5IHJldHVybiB2YWx1ZXMuIEZvciBtb3JlIGluZm8gcmVhZCB0aGUgZG9jcy5cbiAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuLyoqXG4gKiBub3JtYWxpemUgLSBUYWtlcyBhIG1heCBhbmQgbWluIHZhbHVlIGFuZCByZXR1cm5zXG4gKiBhIGZsb2F0aW5nIHBvaW50IG51bWJlciwgdGhhdCB3aGVuIG11bHRpcGxpZWRcbiAqIGJ5IG9uZSBodW5kcmVkIHJlcHJlc2VudHMgYSBwcmVjZW50YWdlIG9mIHRoZSByYW5nZVxuICogYmV0d2VlbiBtYXggYW5kIG1pbi5cbiAqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0ludH0gdmFsIC0gVGhlIHZhbHVlIHRoYXQgbGllcyBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1pbiAtIFRoZSBtYXhpdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7SW50fSBtYXggLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcmV0dXJuIHtJbnR9IEludCAtIFRoZSB2YWx1ZSByZXByZXNlbnRlZCBpbiB0aGF0IHJhbmdlLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemUodmFsICAgICAgICAsIG1pbiAgICAgICAgLCBtYXggICAgICAgICkgICAgICAgICB7XG4gIHJldHVybiAoKHZhbCAtIG1pbikgLyAobWF4IC0gbWluKSAgICAgICAgKTtcbn07XG5cbi8qKlxuICogbGVycCAtIGxpbmVhciBpbnRlcnBvbGF0aW9uIHRha2VzIGEgcmFuZ2UgYW5kIGEgZ2l2ZW4gbm9ybWFsaXplZCB2YWx1ZVxuICogYW5kIHJldHVybnMgYSB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgdGhhdCBub3JtYWxpemVkIHZhbHVlIGluIHRoYXQgcmFuZ2UuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0ludGVyZ2VyfSB2YWxcbiAqIEBwYXJhbSAge0ludGVyZ2VyfSBtaW5cbiAqIEBwYXJhbSAge0ludGVyZ2VyfSBtYXhcbiAqIEByZXR1cm4ge0ludGVyZ2VyfVxuICovXG5mdW5jdGlvbiBsZXJwKHZhbCAgICAgICAgLCBtaW4gICAgICAgICwgbWF4ICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gKG1heCAtIG1pbikgKiB2YWwgKyBtaW47XG59O1xuXG4vKipcbiAqIG1hcCAtIEdpdmVuIDIgc2V0IG9mIHZhbHVlcyBtYXAgdGhlbSB0byBhbm90aGVyIHNldC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNaW5cbiAqIEBwYXJhbSAge251bWJlcn0gc3JjTWF4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRlc3RNaW5cbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBtYXAodmFsdWUgICAgICAgICwgc3JjTWluICAgICAgICAsIHNyY01heCAgICAgICAgLCBkZXN0TWluICAgICAgICAsIGRlc3RNYXggICAgICAgICkgICAgICAgICB7XG4gIHNyY01heCA9IChNYXRoLm1heChzcmNNYXgsIHNyY01pbikgICAgICAgICk7XG4gIHNyY01pbiA9IChNYXRoLm1pbihzcmNNYXgsIHNyY01pbikgICAgICAgICk7XG4gIGRlc3RNaW4gPSAoTWF0aC5taW4oZGVzdE1pbiwgZGVzdE1heCkgICAgICAgICk7XG4gIGRlc3RNYXggPSAoTWF0aC5tYXgoZGVzdE1pbiwgZGVzdE1heCkgICAgICAgICk7XG4gIHJldHVybiBsZXJwKG5vcm1hbGl6ZSh2YWx1ZSwgc3JjTWluLCBzcmNNYXgpLCBkZXN0TWluLCBkZXN0TWF4KTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBwcmVjZW50YWdlLlxuICogICAgICAgICAgICAgIHlvdSBjYW4gcGFzcyBhcmJpdHJhcnkgbGFyZ2UgbnVtYmVycyBpbiBidXQgdGhhdHMgbm90XG4gKiAgICAgICAgICAgICAgdGhlIGludGVuZGVkIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge0Zsb2F0fSB2YWwgXHRBIHZhbHVlLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcmV0dXJuIHtQZXJjZW50fSAgICBBIHZhbHVlLlxuICovXG5mdW5jdGlvbiBwZXJjZW50KHZhbCAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuICgodmFsICogMTAwKSAgICAgICAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgbnVtYmVyIGFuZCBhIHJhbmdlIHJldHVybiB0aGVcbiAqICAgICAgICAgICAgICB2YWx1ZSBiZXR3ZWVuIHRoYXQgcmFuZ2Ugb3IgdGhlIG1heCBudW1iZXIgb3IgbWluIG51bWJlci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlICAgICAgICAsIG1pbiAgICAgICAgLCBtYXggICAgICAgICkgICAgICAgICB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4obWluLCBtYXgpKSwgTWF0aC5tYXgobWluLCBtYXgpKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mICBVdGlsc1xuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byBudW1iZXJzIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiB0aGUgdHdvLlxuICogQHBhcmFtICB7SW50ZWdlcn0geFxuICogQHBhcmFtICB7SW50ZWdlcn0geVxuICogQHJldHVybiB7SW50ZWdlcn1cbiAqL1xuZnVuY3Rpb24gcmFuZG9tQmV0d2Vlbih4ICAgICAgICAsIHkgICAgICAgICkgICAgICAgICB7XG4gIGxldCBtaW4gPSBNYXRoLm1pbih4LCB5KTtcbiAgbGV0IG1heCA9IE1hdGgubWF4KHgsIHkpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIGNvb3JkaW5hdGVzIHJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHgwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHgxXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkxXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlWFkoeDAgICAgICAgICwgeTAgICAgICAgICwgeDEgICAgICAgICwgeTEgICAgICAgICkgICAgICAgICB7XG4gIGNvbnN0IGR4ID0geDAgLSB4MTtcbiAgY29uc3QgZHkgPSB5MCAtIHkxO1xuICByZXR1cm4gTWF0aC5oeXBvdChkeCwgZHkpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHZlY3RvcnMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjFcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2VWZWModjEgICAgICAgICwgdjIgICAgICAgICkgICAgICAgICB7XG4gIGNvbnN0IGRWZWMgPSB2MS5zdWJ0cmFjdCh2Mik7XG4gIHJldHVybiBNYXRoLmh5cG90KGRWZWMuZ2V0KFwieFwiKSwgZFZlYy5nZXQoXCJ5XCIpKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGdpdmVuIGEgbnVtYmVyXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gdmFsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGluUmFuZ2UodmFsICAgICAgICAsIG1pbiAgICAgICAgLCBtYXggICAgICAgICkgICAgICAgICAge1xuICByZXR1cm4gKHZhbCA8PSBNYXRoLm1heChtYXgsIG1pbikpICYmIChNYXRoLm1pbihtYXgsIG1pbikgPD0gdmFsKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgdHdvIHJhbmdlcyBzZWUgaWYgYm90aCBpbnRlcnNlY3QgZWFjaCBvdGhlci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSBtaW4wXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heDBcbiAqIEBwYXJhbSAge051bWJlcn0gbWluMVxuICogQHBhcmFtICB7TnVtYmVyfSBtYXgxXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiByYW5nZUludGVyc2VjdChtaW4wICAgICAgICAsIG1heDAgICAgICAgICwgbWluMSAgICAgICAgLCBtYXgxICAgICAgICApICAgICAgICAgIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLm1heChtYXgwLCBtaW4wKSA+PSBNYXRoLm1pbihtaW4xLCBtYXgxKSAmJlxuICAgIE1hdGgubWluKG1pbjAsIG1heDApIDw9IE1hdGgubWF4KG1heDEsIG1pbjEpXG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gcmVjdGFuZ2Ugc2VlIGlmIHRoZSBpbnRlcnNlY3QuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByMFxuICogQHBhcmFtICB7UGFydGljbGV9IHIxXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb2xsaXNpb25SZWN0KHIwICAgICAsIHIxICAgICApIHtcbiAgY29uc3QgcjB4ID0gcjAuc3RhdGUueDtcbiAgY29uc3QgcjB5ID0gcjAuc3RhdGUueTtcbiAgY29uc3QgcjF4ID0gcjEuc3RhdGUueDtcbiAgY29uc3QgcjF5ID0gcjEuc3RhdGUueTtcblxuICBjb25zdCByMHcgPSByMHggKyByMC5zdGF0ZS53aWR0aDtcbiAgY29uc3QgcjBoID0gcjB5ICsgcjAuc3RhdGUuaGVpZ2h0O1xuICBjb25zdCByMXcgPSByMXggKyByMS5zdGF0ZS53aWR0aDtcbiAgY29uc3QgcjFoID0gcjF5ICsgcjEuc3RhdGUuaGVpZ2h0O1xuXG4gIHJldHVybiAoXG4gICAgcmFuZ2VJbnRlcnNlY3QocjB4LCByMHcsIHIxeCwgcjF3KSAmJlxuICAgIHJhbmdlSW50ZXJzZWN0KHIweSwgcjBoLCByMXksIHIxaClcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHRvIHBhcnRpY2xlIHdpdGggcmFkaSByZXR1cm4gd2V0aGVyIHRoZXkgY29sbGlkZSBhcmUgbm90XG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjMVxuICogQHBhcmFtICB7UGFydGljbGV9IGMyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb2xsaXNpb25DaXJjbGUoYzEgICAgICwgYzIgICAgICkgICAgICAgICAge1xuICBjb25zdCByYWRpID0gKGMxLnN0YXRlLnJhZGl1cyArIGMyLnN0YXRlLnJhZGl1cyk7XG4gIGNvbnN0IGRpc3RhbmNlID0gZGlzdGFuY2VYWShjMS5zdGF0ZS54LCBjMS5zdGF0ZS55LCBjMi5zdGF0ZS54LCBjMi5zdGF0ZS55KTtcblxuICBpZiAoZGlzdGFuY2UpIHtcbiAgICByZXR1cm4gcmFkaSA+IGRpc3RhbmNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHBvaW50IGFuZCBhIGNpcmNsZSByZXR1cm4gYSBib29sZWFuIHJlZ2FyZGluZyB3ZXRoZXIgdGhleSBhcmUgY29sbGlkaW5nLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeFxuICogQHBhcmFtICB7TnVtYmVyfSAgIHlcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjaXJjbGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbGxpc2lvbkNpcmNsZVBvaW50KHggICAgICAgICwgeSAgICAgICAgLCBjaXJjbGUgICAgICkge1xuICAvLyBUT0RPIFdyaXRlIHRlc3RzLlxuICBjb25zdCBkaXN0ID0gZGlzdGFuY2VYWShcbiAgICB4LFxuICAgIHksXG4gICAgY2lyY2xlLnN0YXRlLngsXG4gICAgY2lyY2xlLnN0YXRlLnlcbiAgKTtcblxuICByZXR1cm4gY2lyY2xlLnN0YXRlLnJhZGl1cyA+IGRpc3Q7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgYSBjb2xsaXNpb24gYmV0d2VlbiBjaXJjbGVzIGEgdmVjdG9yLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9ICAgdmVjXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gY2lyY2xlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb2xsaXNpb25DaXJjbGVWZWModmVjICAgICAgICAsIGNpcmNsZSAgICAgKSB7XG4gIHJldHVybiBjaXJjbGUuc3RhdGUucmFkaXVzID4gZGlzdGFuY2VYWShcbiAgICB2ZWMuZ2V0KFwieFwiKSxcbiAgICB2ZWMuZ2V0KFwieVwiKSxcbiAgICBjaXJjbGUuc3RhdGUueCxcbiAgICBjaXJjbGUuc3RhdGUueVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGNvbGxpc2lvbiBvZiBhIHJlY3RhbmdsZSBhbmQgYSBwb2ludC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSAgIHhcbiAqIEBwYXJhbSAge051bWJlcn0gICB5XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcmVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uUmVjdFBvaW50KHggICAgICAgICwgeSAgICAgICAgLCByZWN0ICAgICApIHtcbiAgY29uc3QgcmVjdFggPSByZWN0LnN0YXRlLng7XG4gIGNvbnN0IHJlY3RZID0gcmVjdC5zdGF0ZS55O1xuICByZXR1cm4gKFxuICAgIGluUmFuZ2UoeCwgcmVjdFgsIHJlY3RYICsgcmVjdC5zdGF0ZS53aWR0aCkgJiZcbiAgICBpblJhbmdlKHksIHJlY3RZLCByZWN0WSArIHJlY3Quc3RhdGUuaGVpZ2h0KVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSB2ZWN0b3IgYW5kIGEgcmV0YW5nbGUgY2hlY2sgd2V0aGVyIHRoZXkgY29sbGlkZWQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gICB2ZWNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb2xsaXNpb25SZWN0VmVjKHZlYyAgICAgICAgLCByZWN0ICAgICApIHtcbiAgcmV0dXJuIGNvbGxpc2lvblJlY3RQb2ludCh2ZWMuZ2V0KFwieFwiKSwgdmVjLmdldChcInlcIiksIHJlY3QpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBSdW4gYSBmdW5jdGlvbiBvbmx5IGlmIHRoZSBnaXZlbiB0aW1lIHRvIGFsbG93IHRoZSBmdW5jdGlvbiBleGVjdXRlXG4gKiBoYXMgcGFzc2VkLiBJZlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZ1bmMgQSBmdW5jdGlvbiB0byBjYWxsIGV2ZXJ5IGRlbHRhLlxuICogQHBhcmFtICB7TnVtYmVyfSB3YWl0IFRoZSBtaW5pbXVtIHRpbWUgdG8gd2FpdC5cbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIHVuZGVyc2NvcmVcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYyAgICAgICAgICAsIHdhaXQgICAgICAgICwgb3B0aW9ucyAgICAgKSB7XG4gIGxldCBjb250ZXh0O1xuICBsZXQgYXJncyAgICAgO1xuICBsZXQgcmVzdWx0O1xuICBsZXQgdGltZW91dCA9IG51bGw7XG4gIGxldCBwcmV2aW91cyA9IDA7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBEYXRlLm5vdygpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzICAgICApIHtcbiAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgIGxldCByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gKGFyZ3MgICAgICk7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gLSBTZXR0aW5nIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4gIHtudW1iZXJbXX0gQ29vcmRpbmF0ZXNcbiAqL1xuZnVuY3Rpb24gc2V0TGVuZ3RoKGxlbmd0aCAgICAgICAgLCB4ICAgICAgICAsIHkgICAgICAgICkgICAgICAgICAgICAgICAge1xuICBpZiAodHlwZW9mIHggIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiB5ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgbGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgeCBhbmQgeSB2YWx1ZXNcIik7XG4gIH1cblxuICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeSwgeCk7XG4gIHggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gIHkgPSBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGg7XG5cbiAgcmV0dXJuIFt4LCB5XTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gLSBTZXR0aW5nIHRoZSBhbmdsZSBvZiBhIHZlY3Rvci5cbiAqIEBwYXJhbSAgIHtudW1iZXJ9IGFuZ2xlXG4gKiBAcGFyYW0gICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJuICB7bnVtYmVyW119IGNvb3JkaW5hdGVzXG4gKi9cbmZ1bmN0aW9uIHNldEFuZ2xlKGFuZ2xlICAgICAgICAsIHggICAgICAgICwgeSAgICAgICAgKSAgICAgICAgICAgICAgICB7XG4gIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIHkgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiBhbmdsZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIHggYW5kIHkgdmFsdWVzXCIpO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCh4LCB5KTtcbiAgeCA9IE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aDtcbiAgeSA9IE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aDtcblxuICByZXR1cm4gW3gsIHldO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBDb3ZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFuc1xuICogQHBhcmFtICB7bnVtYmVyfSBkZWcgRGVncmVzc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBkZWdUb1JhZChkZWcgICAgICAgICkgICAgICAgICB7XG4gIHJldHVybiBkZWcgLyAxODAgKiBNYXRoLlBJO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBDb3ZlcnRzIHJhZGlhbnMgdG8gZGVncmVzc1xuICogQHBhcmFtICB7bnVtYmVyfSByYWRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcmFkVG9EZWcocmFkICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gcmFkICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gUm91bmQgdG8gbmVhcmVzdCBwbGFjZSBnaXZlbi5cbiAqIEBwYXJhbSAge251bWJlcn0gdmFsXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBsYWNlcyBBbiBleHBvbmVudFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiByb3VuZFRvUGxhY2VzKHZhbCAgICAgICAgLCBwbGFjZXMgICAgICAgICkgICAgICAgICB7XG4gIGNvbnN0IG11bHQgPSBNYXRoLnBvdygxMCwgcGxhY2VzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsICogbXVsdCkgLyBtdWx0O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gdmFsXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG5lYXJlc3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcm91bmRUb011bHRpcGxlKHZhbCAgICAgICAgLCBuZWFyZXN0ICAgICAgICApICAgICAgICAge1xuICBpZiAoIW5lYXJlc3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RoaW5nIGNhbiBiZSBhIG11bHRpcGxlIG9mIFwiICsgU3RyaW5nKG5lYXJlc3QpKTtcbiAgfVxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgLyBuZWFyZXN0KSAqIG5lYXJlc3Q7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2MFxuICogQHBhcmFtICB7bnVtYmVyfSB2MVxuICogQHBhcmFtICB7bnVtYmVyfSB2MlxuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBxdWFkcmF0aWNCZXppZXIodjAgICAgICAgICwgdjEgICAgICAgICwgdjIgICAgICAgICwgdCAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuIE1hdGgucG93KDEgLSB0LCAyKSAqIHYwICsgKDEgLSB0KSAqIDIgKiB0ICogdjEgKyB0ICogdCAqIHYyO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gdjBcbiAqIEBwYXJhbSAge251bWJlcn0gdjFcbiAqIEBwYXJhbSAge251bWJlcn0gdjJcbiAqIEBwYXJhbSAge251bWJlcn0gdjNcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7bnVtYmVyfSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY3ViaWNCZXppZXIodjAgICAgICAgICAsIHYxICAgICAgICAgLCB2MiAgICAgICAgICwgdjMgICAgICAgICAsIHQgICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gTWF0aC5wb3coMSAtIHQsIDMpICogdjAgK1xuICAgICAgICAgTWF0aC5wb3coMSAtIHQsIDIpICogMyAqIHQgKiB2MSArXG4gICAgICAgICAoMSAtIHQpICogMyAqIHQgKiB0ICogdjIgK1xuICAgICAgICAgdCAqIHQgKiB0ICsgdjM7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSBwMFxuICogQHBhcmFtICB7bnVtYmVyfSBwMVxuICogQHBhcmFtICB7bnVtYmVyfSBwMlxuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtPYmplY3R9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBxdWFkcmF0aWNCZXppZXJQb2ludChwMCAgICAgLCBwMSAgICAgLCBwMiAgICAgLCB0ICAgICAgICApIHtcbiAgY29uc3QgeCA9IHF1YWRyYXRpY0JlemllcihwMC54LCBwMS54LCBwMi54LCB0KTtcbiAgY29uc3QgeSA9IHF1YWRyYXRpY0JlemllcihwMC55LCBwMS55LCBwMi55LCB0KTtcbiAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge09iamVjdH0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyUG9pbnQocDAgICAgICwgcDEgICAgICwgcDIgICAgICwgcDMgICAgICwgdCAgICAgICAgKSB7XG4gIGNvbnN0IHggPSBjdWJpY0JlemllcihwMC54LCBwMS54LCBwMi54LCBwMy54LCB0KTtcbiAgY29uc3QgeSA9IGN1YmljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHAzLnksIHQpO1xuICByZXR1cm4ge3gsIHl9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBwb2ludHMgb24gdGhlIHBsYW5lIGRyYXcgYSBjdXJ2ZWQgbGluZSBiZXR3ZWVuXG4gKiBhbGwgb2YgdGhlbS5cbiAqIEBwYXJhbSAge3tudW1iZXIsIG51bWJlcn19IHBvaW50c1xuICogQHBhcmFtICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcbiAqL1xuZnVuY3Rpb24gbXVsdGlDdXJ2ZShwb2ludHMgICAgICAgICAgICAsIGN0eCAgICAgICAgKSB7XG4gIGxldCBwMDtcbiAgbGV0IHAxO1xuICBsZXQgbWlkWDtcbiAgbGV0IG1pZFk7XG5cbiAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgIHAwID0gcG9pbnRzW2ldO1xuICAgIHAxID0gcG9pbnRzW2kgKyAxXTtcbiAgICBtaWRYID0gKHAwLnggKyBwMS54KS8yO1xuICAgIG1pZFkgPSAocDAueSArIHAxLnkpLzI7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8ocDAueCwgcDAueSwgbWlkWCwgbWlkWSk7XG4gIH1cblxuICBwMCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMl07XG4gIHAxID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8ocDAueCwgcDAueSwgcDEueCwgcDEueSk7XG59O1xuXG4vKipcbiAqIGVhc2VcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7RmxvYXR9IGVhc2UgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7SW50fSBhICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge0ludH0gYiAgICBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtJbnR9ICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBlYXNlKGVhc2UgICAgICAgICwgYSAgICAgICAgLCBiICAgICAgICApICAgICAgICAgICAgICAgICAgIHtcbiAgLy8gdGhlIGRlbHRhIGNhbiBnZXQgZXh0cmVtZWx5IHNtYWxsIGFuZCBpdHMgbm90IHBlcmZvcm1hbnQgdG8ga2VlcFxuICAvLyBvbiByZW5kZXJpbmcgb3IgY2FsY3VsYXRpbmcgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcy5cbiAgaWYgKE1hdGguYWJzKGIgLSBhKSA8IDAuMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoYiAtIGEpICogZWFzZTtcbn07XG5cbi8qKlxuICogZWFzZVRvXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGVhc2U6ICAgICAgbnVtYmVyICAgICAgICBFYXNlIGZhY3Rvci5cbiAqIEBwYXJhbSAge09iamVjdH0gb3JpZ2luOiAgICBPYmplY3QgICAgICAgIFRoZSBzdGFydGluZyBwb2ludC5cbiAqIEBwYXJhbSAge09iamVjdH0gdGFyZ2V0OiAgICBPYmplY3QgICAgICAgIFRoZSBlbmRpbmcgcG9pbnQuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRocmVzaG9sZDogbnVtYmVyICAgICAgICBFYXNpbmcgdGhyZXNob2xkLlxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gZWFzZVRvKGVhc2UgICAgICAgICwgb3JpZ2luICAgICAgICAsIHRhcmdldCAgICAgICAgLCB0aHJlc2hvbGQgICAgICAgID0wLjEpIHtcbiAgY29uc3QgZHggPSB0YXJnZXQueCAtIG9yaWdpbi54O1xuICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG5cbiAgLy8gdGhlIGRlbHRhIGNhbiBnZXQgZXh0cmVtZWx5IHNtYWxsIGFuZCBpdHMgbm90IHBlcmZvcm1hbnQgdG8ga2VlcFxuICAvLyBvbiByZW5kZXJpbmcgb3IgY2FsY3VsYXRpbmcgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcy5cbiAgaWYgKE1hdGguYWJzKGR4KSA8IHRocmVzaG9sZCAmJiBNYXRoLmFicyhkeSkgPCB0aHJlc2hvbGQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvcmlnaW4ueCArPSBkeCAqIGVhc2U7XG4gIG9yaWdpbi55ICs9IGR5ICogZWFzZTtcblxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuLyoqXG4gKiBpc1BsYWluT2JqZWN0XG4gKiBAcGFyYW0gIHsqfSAgZGF0YVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoZGF0YSAgICAgKSAgICAgICAgICB7XG4gIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAoe30pLnRvU3RyaW5nLmNhbGwoZGF0YSkgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59O1xuXG4vKipcbiAqIHVuaXF1ZSByZXR1cm4gYW4gYXJyYXkgd2l0aCBubyBkdXBsaWNhdGUgdmFsdWVzXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiB1bmlxdWUoYXJyYXkgICAgICAgICAgICApIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoeCwgeSkgPT4ge1xuICAgIGlmICh4LmluZGV4T2YoeSkgPT09IC0xKSB4LnB1c2goeSk7XG4gICAgcmV0dXJuIHg7XG4gIH0sIFtdKTtcbn07XG5cbi8vIGZ1bmN0aW9uIGNvbG9ySW50ZXJwb2xhdGlvbihmbG9hdDogbnVtYmVyLCBjb2xvckZyb206IENvbG9yLCBjb2xvclRvOiBDb2xvcikgOiBDb2xvciB7XG4vLyAgIGNvbnN0IHtyMSwgZzEsIGIxfSA9IGNvbG9yRnJvbTtcbi8vICAgY29uc3Qge3IyLCBnMiwgYjJ9ID0gY29sb3JUbztcblxuLy8gICBjb25zdCByID0gcjEgKyAocjIgLSByMSkgLyBmbG9hdDtcbi8vICAgY29uc3QgZyA9IGcxICsgKGcyIC0gZzEpIC8gZmxvYXQ7XG4vLyAgIGNvbnN0IGIgPSBiMSArIChiMiAtIGIxKSAvIGZsb2F0O1xuXG4vLyAgIHJldHVybiBcInNvbWVIZXhcIjtcbi8vIH07XG5cbi8qKlxuICogcGVyc3BlY3RpdmUgLSBwZXJzcGVjdGl2ZSBpcyB0aGUgcmF0aW8gdG8gbXVsdGlwbHkgdGhlIHggYW5kIHkgdmFsdWVzXG4gKiBieSB0byBnZXQgdGhvc2UgcG9pbnRzIHJlcHJlc2VuZXRlZCBpbiAzZCBzcGFjZS5cbiAqIEBwYXJhbSAge251bWJlcn0gZm9jYWxMZW5ndGg6IFRoZSBsZW5ndGggb2YgdGhlIGxlbnNcbiAqIEBwYXJhbSAge251bWJlcn0gZGlzdGFuY2U6ICAgIFRoZSBkaXN0YW5jZSBmcm9tIGJlZ2luaW5nIG9mIHRoZSBsZW5zIHRoZSB0aGUgYmVnaW5naW5nIG9mIHRoZSBvYmplY3QuXG4gKiBAcmV0dXJuIHtudW1iZXJ9YGBcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmUoZm9jYWxMZW5ndGggICAgICAgICwgZGlzdGFuY2UgICAgICAgICkgICAgICAgICB7XG4gIHJldHVybiBmb2NhbExlbmd0aCAvIChmb2NhbExlbmd0aCAtIGRpc3RhbmNlKTtcbn07XG5cbi8qKlxuICogQGNsYXNzIFV0aWxzXG4gKiBAcmV0dXJuIHtVdGlsc31cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbm9ybWFsaXplLFxuICBsZXJwLFxuICBtYXAsXG4gIHBlcmNlbnQsXG4gIGNsYW1wLFxuICByYW5kb21CZXR3ZWVuLFxuICBkaXN0YW5jZVhZLFxuICBkaXN0YW5jZVZlYyxcbiAgaW5SYW5nZSxcbiAgcmFuZ2VJbnRlcnNlY3QsXG4gIGNvbGxpc2lvblJlY3QsXG4gIGNvbGxpc2lvbkNpcmNsZSxcbiAgY29sbGlzaW9uQ2lyY2xlUG9pbnQsXG4gIGNvbGxpc2lvbkNpcmNsZVZlYyxcbiAgY29sbGlzaW9uUmVjdFBvaW50LFxuICBjb2xsaXNpb25SZWN0VmVjLFxuICB0aHJvdHRsZSxcbiAgc2V0TGVuZ3RoLFxuICBzZXRBbmdsZSxcbiAgZGVnVG9SYWQsXG4gIHJhZFRvRGVnLFxuICByb3VuZFRvUGxhY2VzLFxuICByb3VuZFRvTXVsdGlwbGUsXG4gIHF1YWRyYXRpY0JlemllcixcbiAgY3ViaWNCZXppZXIsXG4gIHF1YWRyYXRpY0JlemllclBvaW50LFxuICBjdWJpY0JlemllclBvaW50LFxuICBtdWx0aUN1cnZlLFxuICBwZXJzcGVjdGl2ZSxcbiAgZWFzZSxcbiAgZWFzZVRvLFxuICBpc09iamVjdCxcbiAgdW5pcXVlLFxufTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlKFV0aWxzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdXRpbHMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3V0aWxzLmpzIiwiLy8gICAgICBcblxuLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuLypcbiogVGhlIHBhcnRpY2xlIGxpYmFyeSBpcyB1c2VkIGZvciBwaHlzaWNzIGFuaW1hdGlvbnMuXG4qIHRoZXkgYXJlIG5vdCBleHRyZW1lbHkgYWNjdXJhdGUgYnV0IHN0aWxsIHJlcHJlc2VudFxuKiBhbmQgZmVlbCBzb21ld2hhdCBsaWtlIHBoeXNpY2FsIG1vdm1lbnRzLlxuKi9cblxuY29uc3QgZXh0ZW5kID0gcmVxdWlyZShcImV4dGVuZFwiKTtcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG5cblxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gIFxuXG5cbi8qIFRoZSBkZWZhdWx0IHN0YXRlIGEgcGFydGljbGUgc3RhcnRzIHdpdGggSXQgc2hvdWxkIG5vdCBtb3ZlLiAqL1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgICAgICAgID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB2eDogMCxcbiAgdnk6IDAsXG4gIGdyYXZpdHk6IDAsXG4gIG1hZ25pdHVkZTogMCxcbiAgcmFkaXVzOiAxLFxuICBtYXNzOiAxLFxuICBkaXJlY3Rpb246IE1hdGguUEkgKiAyLFxuICBmcmljdGlvbjogMSxcbiAgc3ByaW5nczogW10sXG4gIG1hc3NlczogW10sXG59O1xuXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNsZVxuICogQHBhcmFtIHtzdGF0ZX0gc3RhdGUgaW5pdGlhbCBzdGF0ZSB0byBwYXNzIHRoZSBjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBQYXJ0aWNsZSB7XG4gICAgICAgICAgICAgICBcblxuICAvKipcbiAgICogY29uc3RydWN0b3JcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge3N0YXRlfSBzdGF0ZSBQYXJ0aWNsZSBzdGF0ZSBjb29yZGluYXRlcywgZXRjLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RhdGUgICAgICAgPWNsb25lKElOSVRJQUxfU1RBVEUpKSAgICAgICB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlIHx8IHt9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgcGFydGljbGUgZ2l2ZW4gYSBkaXJlY3Rpb24gYW5kIG1hZ25pdHVkZS5cbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSAge09iamVjdH0gICBzdGF0ZSBvcHRpb25hbCBzdGF0ZSB2YWx1ZXMgdG8gcGFzcyB0byBjcmVhdGUuXG4gICAqIEByZXR1cm4ge1BhcnRpY2xlfSByZXR1cm5zIGEgcGFydGljbGVcbiAgICovXG4gIHN0YXRpYyBjcmVhdGUoc3RhdGUgICAgICAgID0gY2xvbmUoSU5JVElBTF9TVEFURSkpICAgICAgICAgICB7XG4gICAgLy8gRXh0ZW5kIHRoZSBvcHRpb25hbCBzdGF0ZSBvbiB0byB0aGUgZGVmYXVsdCBzdGF0ZS5cbiAgICBzdGF0ZSA9IGV4dGVuZCh0cnVlLCBjbG9uZShJTklUSUFMX1NUQVRFKSwgc3RhdGUpO1xuXG4gICAgLy8gQ3JlYXRlIHBhcnRpY2xlIHdpdGggdGhlIG5ldyBvcHRpb25zLlxuICAgIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKHN0YXRlKTtcblxuICAgIC8vIFNldCBsZW5ndGguXG4gICAgcGFydGljbGUuc2V0U3BlZWQoc3RhdGUubWFnbml0dWRlKTtcblxuICAgIC8vIFNldCBhbmdsZS5cbiAgICBwYXJ0aWNsZS5zZXRIZWFkaW5nKHN0YXRlLmRpcmVjdGlvbik7XG5cbiAgICAvLyBSZXR1cm4gbmV3IHBhcnRpY2xlLlxuICAgIHJldHVybiBwYXJ0aWNsZTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSBhIGJ1bmNoIG9mIHBhcnRpY2xlcy5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBudW1iZXIgICAgVGhlIG1heGltdW0gYW1vdW50IG9mIGdlbmVyYXRlZCBwYXJ0aWNsZXMgbmVlZGVkLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdHMgICAgICBPcHRpb25zIHRvIHBhc3MgZWFjaCBwYXJ0aWNsZVxuICAgKiBAcmV0dXJuIHtBcnJheTxQYXJ0aWNsZT59XG4gICAqL1xuICBzdGF0aWMgZ2VuZXJhdGUobnVtYmVyICAgICAgICAsIG9wdHMgICAgICAgPWNsb25lKElOSVRJQUxfU1RBVEUpKSAgICAgICAgICAgICAgICAgIHtcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgIHBhcnRpY2xlcy5wdXNoKFBhcnRpY2xlLmNyZWF0ZShvcHRzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRpY2xlcztcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEEgY2hhbmdlIGluIHZlbG9jaXR5LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtICB7SW50ZWdlcn0gYXhcbiAgICogQHBhcmFtICB7SW50ZWdlcn0gYXlcbiAgICogQHJldHVybiB7dm9pZH0gQWNjZWxlcmF0aW9uIHZlY3Rvci5cbiAgICovXG4gIGFjY2VsZXJhdGUoYXggICAgICAgID10aGlzLnN0YXRlLnZ4LCBheSAgICAgICAgPXRoaXMuc3RhdGUudnkpICAgICAgIHtcbiAgICB0aGlzLnN0YXRlLnZ4ICs9IGF4O1xuICAgIHRoaXMuc3RhdGUudnkgKz0gYXk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBIHVwZGF0ZSBhIHBvc2l0aW9uIG9mIGEgcGFydGljbGVcbiAgICogYmFzZWQgb24gaXRzIGdyYXZpdHkgYW5kIGZyaWNpdGlvbi4gR3Jhdml0eSBpcyB1c3VhbGx5IGEgYWNjZWxlcmF0aW9uXG4gICAqIHZlY3Rvci5cbiAgICpcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSAge0ludGVnZXJ9IGZyaWMgRnJpY2l0aW9uIHRvIGFwcGx5LlxuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfSBncmF2IEdyYXZpdHkgdG8gYXBwbHkuXG4gICAqIEByZXR1cm4ge09iamVjdH0gUG9zaXRpb24gc3RhdGUuXG4gICAqL1xuICB1cGRhdGUoZnJpYyAgICAgICAgID0gdGhpcy5zdGF0ZS5mcmljdGlvbiwgZ3JhdiAgICAgICAgID0gdGhpcy5zdGF0ZS5ncmF2aXR5KSB7XG4gICAgLy8gQXBwbHkgc3ByaW5nc1xuICAgIHRoaXMuaGFuZGxlU3ByaW5ncygpO1xuXG4gICAgLy8gQXBwbHkgZ3Jhdml0YXRpb25zXG4gICAgdGhpcy5oYW5kbGVNYXNzZXMoKTtcblxuICAgIC8vIEFwcGx5IGZha2UgZnJpY2l0aW9uIHRvIHZlbG9jaXR5XG4gICAgdGhpcy5zdGF0ZS52eCAqPSBmcmljO1xuICAgIHRoaXMuc3RhdGUudnkgKj0gZnJpYztcblxuICAgIC8vIEFwcGx5IGdyYXZpdHkgdG8gdmVsb2NpdHlcbiAgICB0aGlzLmFjY2VsZXJhdGUoMCwgZ3Jhdik7XG5cbiAgICAvLyBVcGRhdGUgcG9zaXRpb24gYmFzZWQgb24gYWNjZWxlcmF0aW9uXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlUG9zKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBzZXRzIHRoZSBpbnRlcm5hbCBzcGVlZCBvZiB0aGUgcGFydGljbGUgZ2l2ZW4gdGhlIGZvcmNlXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcbiAgICovXG4gIHNldFNwZWVkKHNwZWVkICAgICAgICApICAgICAgIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMuZ2V0SGVhZGluZygpO1xuICAgIHRoaXMuc3RhdGUudnggPSBNYXRoLmNvcyhhbmdsZSkgKiBzcGVlZDtcbiAgICB0aGlzLnN0YXRlLnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogc3BlZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gc2V0cyB0aGUgaW50ZXJuYWwgc3BlZWQgb2YgdGhlIHBhcnRpY2xlIGdpdmVuIHRoZSBhbmdsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICovXG4gIHNldEhlYWRpbmcoYW5nbGUgICAgICAgICkgICAgICAge1xuICAgIGNvbnN0IHNwZWVkID0gdGhpcy5nZXRTcGVlZCgpO1xuICAgIHRoaXMuc3RhdGUudnggPSBNYXRoLmNvcyhhbmdsZSkgKiBzcGVlZDtcbiAgICB0aGlzLnN0YXRlLnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogc3BlZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yLlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtICB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSAge251bWJlcn0geVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGZvcmNlIG9mIHZlbG9jaXR5IHZlY3Rvci5cbiAgICovXG4gIGdldFNwZWVkKHggICAgICAgICA9IHRoaXMuc3RhdGUudngsIHkgICAgICAgICA9IHRoaXMuc3RhdGUudnkpICAgICAgICAge1xuICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMuc3RhdGUudngsIHRoaXMuc3RhdGUudnkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBhbmdsZSBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yLlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtICB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSAge251bWJlcn0geVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGFuZ2xlIG9mIHZlbG9jaXR5IHZlY3Rvci5cbiAgICovXG4gIGdldEhlYWRpbmcoeCAgICAgICAgID0gdGhpcy5zdGF0ZS52eCwgeSAgICAgICAgID0gdGhpcy5zdGF0ZS52eSkgICAgICAgICB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBc3VtbWluZyB3ZSBrbm93IHdoZXJlXG4gICAqIHRoZSBvdGhlciBwYXJ0aWNsZSBpcyBvbiB0aGUgY2FudmFzLiBXZSBjYW4gdXNlXG4gICAqIHRoZSBhbmdsZSBmb3JtdWxhZSB0byBmaWd1cmUgb3V0IHRoZSBhbmdsZVxuICAgKiBiZXR3ZWVuIHR3byBwYXJ0aWNsZS4gVXNpbmcgYXJjdGFuZ2VudCBpcyBmaW5lLlxuICAgKiBidXQgYmVjYXVzZSB0aGUgY29ycmRpbmF0ZSBwbGFuZSBpcyBmaWxwZWQgb24gdGhlXG4gICAqIFkgYXhpcyB3ZSB1c2UgYXRhbjIgdG8gZ2V0IHRoZSByaWdodCB2YWx1ZXMuIEV4cGxhaW5lZFxuICAgKiBpbiBBUEkgRG9jcy5cbiAgICpcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSAge1BhcnRpY2xlfSBwICAgICAgQSBwYXJ0aWNsZSBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7SW50ZWdlcn0gIEFuZ2xlICAgQSBhbmdsZS5cbiAgICovXG4gIGFuZ2xlVG8ocCAgICAgICAgICApICAgICAgICAge1xuICAgIGNvbnN0IGR4ID0gcC5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54O1xuICAgIGNvbnN0IGR5ID0gcC5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xuICAgIHJldHVybiBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBc3N1bWluZyB3ZSBrbm93IHdoZXJlIGJvdGggcGFydGljbGUgYXJlIG9uIHRoZSBjYW52YXMuXG4gICAqIHdlIGNhbiB1c2UgdGhlIGRpc3RhbmNlIGZvcm11YWxlIHRvIGZpZ3VyZSBvdXQgdGhlIGRpc3RhbmNlXG4gICAqIGJldHdlZW4gdGhlIHR3byBwYXJ0aWNsZXMuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcCAgICAgIEEgcGFydGljbGUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7bnVtYmVyfSAgQW5nbGUgICBBIERpc3RhbmNlXG4gICAqL1xuICBkaXN0YW5jZVRvKHAgICAgICAgICAgKSAgICAgICAgIHtcbiAgICBjb25zdCBkeCA9IHAuc3RhdGUueCAtIHRoaXMuc3RhdGUueDtcbiAgICBjb25zdCBkeSA9IHAuc3RhdGUueSAtIHRoaXMuc3RhdGUueTtcbiAgICByZXR1cm4gTWF0aC5oeXBvdChkeCwgZHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIEFwcGVuZCBhIHBhcnRpY2xlIHRvIHRoZSBtYXNzZXMgYXJyYXkuXG4gICAqIEBwYXJhbSB7UGFydGljbGV9IG1hc3NcbiAgICovXG4gIGFkZE1hc3MobWFzcyAgICAgICAgICApICAgICAgIHtcbiAgICB0aGlzLnJlbW92ZU1hc3MobWFzcyk7XG4gICAgdGhpcy5zdGF0ZS5tYXNzZXMucHVzaChtYXNzKTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBwYXJ0aWNsZSBmb3IgdGhlIG1hc3NlcyBhcnJheS5cbiAgICogQHBhcmFtICB7UGFydGljbGV9IG1hc3NcbiAgICovXG4gIHJlbW92ZU1hc3Moe3N0YXRlOiBtYXNzfSAgICAgICAgICApICAgICAgIHtcbiAgICBjb25zdCBtYXNzZXMgPSB0aGlzLnN0YXRlLm1hc3NlcztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobWFzcy54ID09PSBtYXNzZXNbaV0uc3RhdGUueCAmJlxuICAgICAgICAgIG1hc3MueSA9PT0gbWFzc2VzW2ldLnN0YXRlLnkpIHtcbiAgICAgICAgbWFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIEFwcGx5cyBncmF2aXRhdGlvbiB0byB0aGUgaW5wdXQgcGFydGljbGUuXG4gICAqIEBwYXJhbSAge1BhcnRpY2xlfSBwYXJ0aWNsZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBncmF2aXRhdGVUbyhwYXJ0aWNsZSAgICAgICAgICApICAgICAgIHtcbiAgICBjb25zdCBkeCA9IHBhcnRpY2xlLnN0YXRlLnggLSB0aGlzLnN0YXRlLng7XG4gICAgY29uc3QgZHkgPSBwYXJ0aWNsZS5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xuXG4gICAgLy8gRGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBhcnRpY2xlc1xuICAgIC8vIHdlIGRvbnQgdXNlIHRoZSBkaXN0YW5jZVRvIGZuIGNhdXNlIHdlIHdhbnRcbiAgICAvLyB0byBvcHRpbXppZSB0aGUgY29kZSB0byBub3QgaGF2ZSB0byBjYWxjdWxhdGVcbiAgICAvLyBkaXN0U3FyZCBhZ2Fpbi5cbiAgICBjb25zdCBkaXN0U3FyZCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoZGlzdFNxcmQpO1xuXG4gICAgLy8gTWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IgW0YgPSBHKG0xKShtMikvcl4yXVxuICAgIGNvbnN0IGZvcmNlID0gcGFydGljbGUuc3RhdGUubWFzcyAvIGRpc3RTcXJkO1xuXG4gICAgLy8gU2V0dGluZyB1cCBhbmdsZXMgb2YgdGhlIHZlY3RvclxuICAgIGNvbnN0IHNpbiA9IGR5IC8gZGlzdDtcbiAgICBjb25zdCBjb3MgPSBkeCAvIGRpc3Q7XG5cbiAgICAvLyBTZXR0aW5nIHZldG9yIGFuZ2xlXG4gICAgY29uc3QgYXggPSBjb3MgKiBmb3JjZTtcbiAgICBjb25zdCBheSA9IHNpbiAqIGZvcmNlO1xuXG4gICAgcmV0dXJuIHRoaXMuYWNjZWxlcmF0ZShheCwgYXkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIEFwcGx5IHZlbG9jaXR5IHRvIHRoZSBwb3NpdGlvbi5cbiAgICogQHBhcmFtICB7SW50ZWdlcn0gdnhcbiAgICogQHBhcmFtICB7SW50ZWdlcn0gdnlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHVwZGF0ZVBvcyh2eCAgICAgICAgICwgdnkgICAgICAgICApICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICBpZiAodnggPT09IHVuZGVmaW5lZCAmJiB2eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnggKz0gdGhpcy5zdGF0ZS52eDtcbiAgICAgIHRoaXMuc3RhdGUueSArPSB0aGlzLnN0YXRlLnZ5O1xuICAgICAgcmV0dXJuIHt4OiB0aGlzLnN0YXRlLngsIHk6IHRoaXMuc3RhdGUueX07XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS54ICs9IHZ4O1xuICAgIHRoaXMuc3RhdGUueSArPSB2eTtcbiAgICByZXR1cm4ge3g6IHRoaXMuc3RhdGUueCwgeTogdGhpcy5zdGF0ZS55fTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGFkZCBzcHJpbmcgdG8gc3ByaW5ncyBhcnJheVxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHNwcmluZyBBIHNwcmluZyBvYmplY3RcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgYWRkU3ByaW5nKHNwcmluZyAgICAgICAgKSAgICAgICAgIHtcbiAgICB0aGlzLnJlbW92ZVNwcmluZyhzcHJpbmcpO1xuICAgIHRoaXMuc3RhdGUuc3ByaW5ncy5wdXNoKHNwcmluZyk7XG4gICAgcmV0dXJuIHNwcmluZztcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIHJlbW92ZSBhIHNwZWNpZmljIHN0cmluZyBmcm9tIHRoZSBzcHJpbmdzIGFycmF5XG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHNwcmluZ1xuICAgKi9cbiAgcmVtb3ZlU3ByaW5nKHtwb2ludDoge3N0YXRlOiBwfX0gICAgICAgICkgICAgICAge1xuICAgIGNvbnN0IHNwcmluZ3MgPSB0aGlzLnN0YXRlLnNwcmluZ3M7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwcmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwLnggPT09IHNwcmluZ3NbaV0ucG9pbnQuc3RhdGUueCAmJlxuICAgICAgICAgIHAueSA9PT0gc3ByaW5nc1tpXS5wb2ludC5zdGF0ZS55KSB7XG4gICAgICAgIHNwcmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHBhcnRpY2xlcyBjYWxjdWxhdGUgdGhlXG4gICAqIHNwcmluZyBmb3JjZSBhcHBsaWVkIHRvIGJvdGggcGFydGljbGVzLlxuICAgKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtICB7SW50ZWdlcn0gIHNwcmluZ3kgIEdpdmVuIG9mZnNldCBmb3IgdGhlIHBhcnRpY2xlc1xuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfSAgb2Zmc2V0ICBUaGUgc3ByaW5nIGNvZWZmaWNlbnRcbiAgICogQHJldHVybiB7UGFydGljbGVbXX1cbiAgICovXG4gIHNwcmluZ0Zyb21UbyhwYXJ0aWNsZSAgICAgICAgICAsIHNwcmluZ3kgICAgICAgICA9IDAuMDUsIG9mZnNldCAgICAgICAgID0gMTAwKSAgICAgICAgICAgICAgICAgICAgICAge1xuICAgIC8vIFBvc3Rpb24gZGVsdGFcbiAgICBjb25zdCBkeCA9IChwYXJ0aWNsZS5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54KTtcbiAgICBjb25zdCBkeSA9IChwYXJ0aWNsZS5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55KTtcblxuICAgIC8vIFNldHRpbmcgdXAgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gICAgY29uc3Qgc3ByaW5nRm9yY2UgPSAoZGlzdGFuY2UgLSBvZmZzZXQpICogc3ByaW5neTtcblxuICAgIC8vIFNwcmluZyBhY2NlbGVyYXRpb24gdmVjdG9yXG4gICAgY29uc3Qgc3ggPSBkeCAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG4gICAgY29uc3Qgc3kgPSBkeSAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG5cbiAgICAvLyBBY2NlbGVyYXRlIHdpdGggdGhlIHNwcmluZyB2ZWN0b3JcbiAgICB0aGlzLmFjY2VsZXJhdGUoc3gsIHN5KTtcblxuICAgIC8vIEFjY2VsZXJhdGUgdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgICBwYXJ0aWNsZS5zdGF0ZS52eCAtPSBzeDtcbiAgICBwYXJ0aWNsZS5zdGF0ZS52eSAtPSBzeTtcblxuICAgIHJldHVybiBbdGhpcywgcGFydGljbGVdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgcGFydGljbGUsIGEgdmVjdG9yLCBhbmQgYSBzcHJpbmcgY29lZmZpZW5jZW50IGFjY2VsZXJhdGVcbiAgICogdGhlIHBhcnRpY2xlIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UgaXRzIGlzIGZyb20gdGhlIHBvaW50LlxuICAgKiBAcGFyYW0gIHtTcHJpbmd9IHNwcmluZyBBIHNwcmluZyBvYmplY3QuXG4gICAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICAgKi9cbiAgc3ByaW5nVG9Qb2ludChzcHJpbmcgICAgICAgICkgICAgICAgICAgICAgICAgICAgICB7XG4gICAgLy8gUG9zdGlvbiBkZWx0YVxuICAgIGNvbnN0IGR4ID0gKHNwcmluZy5wb2ludC5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54KTtcbiAgICBjb25zdCBkeSA9IChzcHJpbmcucG9pbnQuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgICAvLyBTZXR0aW5nIHVwIG1hZ25pdHVkZSBhbmQgYW5nbGUgb2YgdGhlIHZlY3RvclxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICAgIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gc3ByaW5nLm9mZnNldCkgKiBzcHJpbmdbXCJzcHJpbmdcIl07XG5cbiAgICAvLyBTcHJpbmcgYWNjZWxlcmF0aW9uIHZlY3RvclxuICAgIGNvbnN0IHN4ID0gZHggLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuICAgIGNvbnN0IHN5ID0gZHkgLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuXG4gICAgLy8gQWNjZWxlcmF0ZSB3aXRoIHRoZSBzcHJpbmcgdmVjdG9yXG4gICAgdGhpcy5hY2NlbGVyYXRlKHN4LCBzeSk7XG5cbiAgICByZXR1cm4gW3RoaXMsIHNwcmluZ107XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gQXBwbHkgc3ByaW5nIHBvaW50IHRvIGFsbCBpbnRlcm5hbCBzcHJpbmdzLlxuICAgKiBAcGFyYW0gIHtzcHJpbmdzfSBzcHJpbmdzIEFuIGFycmF5IG9mIHNwcmluZ3MgdG8gc3ByaW5nIHRvLlxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAgICovXG4gIGhhbmRsZVNwcmluZ3Moc3ByaW5ncyAgICAgICAgICAgICAgID10aGlzLnN0YXRlLnNwcmluZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwcmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3ByaW5nVG9Qb2ludChzcHJpbmdzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ByaW5ncztcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBGb3IgZWFjaCBtYXNzIGluIHRoZSBtYXNzZXMgYXJyYXkgYXBwbHkgZ3Jhdml0YXRlIHRvIGl0LlxuICAgKiBAcGFyYW0gIHtQYXJ0aWNsZXNbXXxPYmplY3RbXX0gbWFzc2VzXG4gICAqIEByZXR1cm4ge1BhcnRpY2xlc1tdfE9iamVjdFtdfVxuICAgKi9cbiAgaGFuZGxlTWFzc2VzKG1hc3NlcyAgICAgICAgICAgICAgICAgPXRoaXMuc3RhdGUubWFzc2VzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ3Jhdml0YXRlVG8obWFzc2VzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFzc2VzO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvcGFydGljbGUuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3BhcnRpY2xlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgeyAvKiovIH1cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZTtcblx0dmFyIHRhcmdldCA9IGFyZ3VtZW50c1swXTtcblx0dmFyIGkgPSAxO1xuXHR2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0dmFyIGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH1cblx0aWYgKHRhcmdldCA9PSBudWxsIHx8ICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbbmFtZV07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBjb3B5KSB7XG5cdFx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSkpIHtcblx0XHRcdFx0XHRcdGlmIChjb3B5SXNBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vZXh0ZW5kL2luZGV4LmpzIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9jbG9uZURlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvY2xvbmVEZWVwLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUNsb25lLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQ2xvbmUuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19TdGFjay5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9lcS5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0dldC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX01hcC5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fU3ltYm9sLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3Jvb3QuanMiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX0hhc2guanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faGFzaEdldC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faGFzaEhhcy5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoU2V0LmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5RWFjaC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQXNzaWduLmpzIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9rZXlzLmpzIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNBcnJheS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pc0luZGV4LmpzIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19vdmVyQXJnLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25JbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gva2V5c0luLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUJ1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9sc0luID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob2JqZWN0KSB7XG4gICAgYXJyYXlQdXNoKHJlc3VsdCwgZ2V0U3ltYm9scyhvYmplY3QpKTtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGUob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRUYWcuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19EYXRhVmlldy5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19TZXQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19XZWFrTWFwLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lTWFwID0gcmVxdWlyZSgnLi9fY2xvbmVNYXAnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTZXQgPSByZXF1aXJlKCcuL19jbG9uZVNldCcpLFxuICAgIGNsb25lU3ltYm9sID0gcmVxdWlyZSgnLi9fY2xvbmVTeW1ib2wnKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCJ2YXIgYWRkTWFwRW50cnkgPSByZXF1aXJlKCcuL19hZGRNYXBFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIENMT05FX0RFRVBfRkxBRykgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVNYXAuanMiLCIvKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNYXBFbnRyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlSZWR1Y2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVSZWdFeHAuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVSZWdFeHAuanMiLCJ2YXIgYWRkU2V0RW50cnkgPSByZXF1aXJlKCcuL19hZGRTZXRFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIENMT05FX0RFRVBfRkxBRykgOiBzZXRUb0FycmF5KHNldCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkU2V0RW50cnksIG5ldyBzZXQuY29uc3RydWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVTZXQuanMiLCIvKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkU2V0RW50cnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hZGRTZXRFbnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hZGRTZXRFbnRyeS5qcyIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwiLyoqXG4gKiBAY2xhc3MgU2hhcGVzXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4ICAgICAgQ2FudmFzIGNvbnRleHQuXG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gU2hhcGVzKGN0eCwgZG9jdW1lbnQpIHtcbiAgaWYgKCFjdHgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGFwZXM6IFBsZWFzZSBwcm92aWRlIGEgY29udGV4dCBhcmd1bWVudCBbYXJnOjoxXVwiKTtcbiAgfVxuICB0aGlzLmN0eCA9IGN0eDtcbiAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQGRlc2NyaXB0aW9uIGRyYXcgYSBjaXJjbGUuXG4gKiBAcGFyYW0ge051bWJlcn0geCAgICAgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSByICAgICBUaGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgVGhlIGNvbG9yIG9mIHRoZSBjaXJjbGUuXG4gKi9cblNoYXBlcy5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gZHJhd0NpcmNsZSh4PTQsIHk9NCwgcj0yLCBjb2xvcj1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICB0aGlzLmN0eC5maWxsKCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBkZXNjcmlwdGlvbiBGaWxsIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgIFN0YXJ0aW5nIHBvaW50IFhcbiAqIEBwYXJhbSAge051bWJlcn0geSAgICAgU3RhcnRpbmcgcG9pbnQgWVxuICogQHBhcmFtICB7TnVtYmVyfSB3ICAgICBXaWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGggICAgIEhlaWdodCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbG9yIEEgaGV4IHN0cmluZy5cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5yZWN0ID0gZnVuY3Rpb24gZHJhd1JlY3QoeCwgeSwgdz0xMCwgaD0xMCwgY29sb3I9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xufTtcblxuLyoqXG4gKiBwQ2lyY2xlXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcFxuICogQHJldHVybiB7UGFydGljbGV9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUucENpcmNsZSA9IGZ1bmN0aW9uIHBhcnRpY2xlQ2lyY2xlKHApIHtcbiAgdGhpcy5jaXJjbGUoXG4gICAgcC5zdGF0ZS54LFxuICAgIHAuc3RhdGUueSxcbiAgICBwLnN0YXRlLnJhZGl1cyxcbiAgICBwLnN0YXRlLmNvbG9yXG4gICk7XG4gIHJldHVybiBwO1xufTtcblxuLyoqXG4gKiBwUmVjdFxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICovXG5TaGFwZXMucHJvdG90eXBlLnBSZWN0ID0gZnVuY3Rpb24gcGFydGljbGVSZWN0KHApIHtcbiAgdGhpcy5yZWN0KFxuICAgIHAuc3RhdGUueCxcbiAgICBwLnN0YXRlLnksXG4gICAgcC5zdGF0ZS53aWR0aCxcbiAgICBwLnN0YXRlLmhlaWdodCxcbiAgICBwLnN0YXRlLmNvbG9yXG4gICk7XG4gIHJldHVybiBwO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAZGVzY3JpcHRpb24gRHJhdyBhIGxpbmUgYmV0d2VlbiB0aGVzZSB0d28gcG9pbnRzLlxuICogQHBhcmFtICB7TnVtYmVyfSB4MFxuICogQHBhcmFtICB7TnVtYmVyfSB5MFxuICogQHBhcmFtICB7TnVtYmVyfSB4MVxuICogQHBhcmFtICB7TnVtYmVyfSB5MVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHlsZVxuICovXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lWFkgPSBmdW5jdGlvbih4MCwgeTAsIHgxLCB5MSwgc3R5bGU9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gc3R5bGU7XG4gIHRoaXMuY3R4Lm1vdmVUbyh4MCwgeTApO1xuICB0aGlzLmN0eC5saW5lVG8oeDEsIHkxKTtcbiAgdGhpcy5jdHguc3Ryb2tlKCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMFxuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMxXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lVmVjID0gZnVuY3Rpb24odmVjMCwgdmVjMSkge1xuICB0aGlzLmRyYXdMaW5lWFkodmVjMC5nZXQoXCJ4XCIpLCB2ZWMwLmdldChcInlcIiksIHZlYzEuZ2V0KFwieFwiKSwgdmVjMS5nZXQoXCJ5XCIpKTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lUG9pbnRzID0gZnVuY3Rpb24oLi4ucG9pbnRzKSB7XG4gIGNvbnN0IFtmaXJzdFBvaW50XSA9IHBvaW50cztcblxuICBpZiAoIWZpcnN0UG9pbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCBpbnB1dHNcIik7XG4gIH1cblxuICBpZiAocG9pbnRzLmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGJlIGdpdmVuIGEgYSBudW1iZXIgb2YgcG9pbnRzIGdyZWF0ZXIgdGhhbiAxXCIpO1xuICB9XG5cbiAgY29uc3Qge3g6IHN4LCB5OiBzeX0gPSBmaXJzdFBvaW50O1xuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHgubW92ZVRvKHN4LCBzeSk7XG5cbiAgLy8gU29tZSB0cmlja3kgZGVzdHJ1Y3RpbmcgZ29pbmcgb24gaGVyZS5cbiAgLy8gSSBuZWVkIHNvbWUgcHJhY3RpY2Ugc28uLi4ganVzdCB0ZXN0aW5nIGl0IG91dC5cbiAgLy8gVGhlIC4uLnBvaW50cyBiaXQgaXMganVzdCBhIHNoYWxsb3cgY29weWluZyBhcnJheVxuICAvLyBidXQgZ2V0dGluZyByaWQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICAvLyBUaGUgc2Vjb25kIGJpdCBpcyBkZXN0cnVjdGluZyB0aGUgb2JqZWN0IHRoYXRcbiAgLy8gaXQgZ2V0cyBmb3IgZWFjaCBpdGVyYXRpb24gYW5kIGFsaWFzaW5nXG4gIC8vIHRoZSB2YWx1ZXMgdG8gcHggYW5kIHB5LlxuXG4gIGNvbnN0IFssIC4uLnhzXSA9IHBvaW50cztcbiAgZm9yIChsZXQge3g6IHB4LCB5OiBweX0gb2YgeHMpIHtcbiAgICB0aGlzLmN0eC5saW5lVG8ocHgsIHB5KTtcbiAgfVxuXG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtICB7TnVtYmVyfSBncmlkU2l6ZVxuICogQHBhcmFtICB7U3RyaW5nfSBjb2xvclxuICovXG5TaGFwZXMucHJvdG90eXBlLmdyaWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBncmlkU2l6ZT0yMCwgY29sb3I9XCIjY2NjXCIpIHtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCArPSBncmlkU2l6ZSkge1xuICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oeCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5ICs9IGdyaWRTaXplKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKDAsIHkpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyh3aWR0aCwgeSk7XG4gIH1cblxuICB0aGlzLmN0eC5zdHJva2UoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhcGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zaGFwZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3NoYXBlcy5qcyIsIi8qKlxuICogWUFUIHN0YW5kcyBmb3IgWWV0IEFub3RoZXIgVHdlZW4uXG4gKiBXaHkgbm90IGhhdmUgb25lIG1vcmUgcGFja2FnZSB0aGF0IGRvZXMgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIDUwIG91dCB0aGVyZT9cbiAqIFdlbGwgdGhhdHMgYSBnb29kIHF1ZXN0aW9uIHRoYXQgd2lsbCBub3QgYmUgYW5zd2VyZWQgaW4gdGhpcyBjb21tZW50IGJsb2NrLlxuICogVG8gYmUgaG9uZXN0IGl0cyBmb3IgcHJhY3RpY2UgYW5kIGxlYXJuaW5nIHB1cnBvc2VzLiBBbmQgaWYgYW55b25lIGluIHRoZWlyXG4gKiByaWdodCBtaW5kIGFjdGF1bGx5IGJlbmVmaXRzIGZyb20gdGhpcyB0aGVuIHNvIGJlIGl0LlxuICovXG5cbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gIG9iajoge3g6IDAsIHk6IDB9LFxuICBwcm9wczoge3g6IDEwMCwgeTogMTAwfSxcbiAgZWFzaW5nOiBcImVhc2VcIixcbiAgZHVyYXRpb246IDEwMDAsXG59O1xuXG5jb25zdCBldmVudEluc3RhbmNlID0gZXZlbnQuaW5pdCgpO1xuLy8gSW5oZXJpdCBtZXRob2RzIGZyb20gZXZlbnRJbnN0YW5jZVxuY29uc3QgWUFUID0gT2JqZWN0LmNyZWF0ZShldmVudEluc3RhbmNlKTtcblxuWUFULmluaXQgPSBmdW5jdGlvbiBpbml0VHdlZW4ob3B0cykge1xuICAvLyBDYW4gYW5kIHVzZXMgRXZlbnQgYW5kIENsb2NrIG1ldGhvZHMuXG5cbiAgaWYgKCFvcHRzLmNsb2NrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSBjbG9jayBBUEkuXCIpO1xuICB9XG5cbiAgdGhpcy5fY2xvY2sgPSBvcHRzLmNsb2NrLmluaXQoe1xuICAgIGZwczogb3B0cy5mcHMgfHwgNjAsXG4gIH0pO1xuXG4gIHRoaXMucGFyZW50ID0gZXZlbnRJbnN0YW5jZTtcbiAgdGhpcy50d2VlbnMgPSBbXTtcblxuICAvKipcbiAgICogZWFzaW5nRm5zXG4gICAqIEBkZXNjcmlwdGlvbiBBbGwgZWFzaW5nIGZ1bmN0aW9ucyBhcmUgb3JpZ25pYWxseSB3cml0dGVuXG4gICAqIGJ5IHJvYmVydCBwZW5uZXIsIHRoZSB0d2VlbmluZyBnb2QuXG4gICAqIEhlcmUgZWFjaCBtZXRob2QgaXMgcGFzc2VkIGEgbm9ybWFsaXplZCB2YWx1ZS4gV2hpY2ggaXNcbiAgICogdXN1YWxseSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuIFlvdSBjYW4gdGhpbmsgb2YgdGhpcyBudW1iZXIgYXNcbiAgICogYSBwZXJjZW50YWdlIG9mIGEgcmFuZ2UuIFdpdGggdGhhdCBub3JtbGl6ZWQgdmFsdWUgLyBwZXJjZW50YWdlIHdlXG4gICAqIGNhbiBtYXAgdGhhdCBwZXJjZW50YWdlIHRvIGFub3RoZXIgcmFuZ2UuIFRoaXMgaXMgY2FsbGVkIGludGVycG9sYXRpb24uXG4gICAqIEBzZWUge0BsaW5rIGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy99XG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB0aGlzLmVhc2luZ0ZucyA9IHtcbiAgICAvLyBIZXJlIHRoaXMgZWFzZSBmdW5jdGlvbiBpcyBsaW5lYXIgYXMgdGhlcmUgaXMgb25seSBvbmVcbiAgICAvLyBuIHZhbHVlLiBFYWNoIGVhc2UgZnVuY3Rpb24gY2FuIGJlIG1hcHBlZCB0byBhIHBvbHlub21pYWwuXG4gICAgZWFzZShjLCBiLCBuKSB7IC8vIHBvbHlub21pYWw6IGF4ICsgYiA9IGM7IHdoZXJlIHggaXMgdGhlIG5vcm1hbGl6ZWQgdmFsdWVcbiAgICAgIHJldHVybiBjICogbiArIGI7XG4gICAgfSxcbiAgICBlYXNlSW5RdWFkKGMsIGIsIG4pIHsgLy8gcG9seW5vbWlhbDogMXheMiArIDB4ICsgMCA9IGQ7XG4gICAgICByZXR1cm4gYyAqIChuICogbikgKyBiO1xuICAgIH0sXG4gICAgZWFzZU91dFF1YWQoYywgYiwgbikgeyAvLyBwb2x5bm9taWFsOiAtMXheMiArIDJ4ICsgMCA9IGQ7XG4gICAgICByZXR1cm4gYyAqIChuICogKDIgLSBuKSkgKyBiO1xuICAgIH0sXG4gICAgZWFzZUluT3V0UXVhZChjLCBiLCBuKSB7XG4gICAgICBpZiAoKG4qPTIpIDwgMSkge1xuICAgICAgICByZXR1cm4gYy8yICogKG4qbikgKyBiOyAvLyBQb2x5bm9taWFsIGZvciBoYWxmIHRoZSByYW5nZTpcbiAgICAgICAgLy8gMnheMiArIDB4ICsgMCA9IGQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gLWMvMiAqICgoLS1uKSoobi0yKSAtIDEpICsgYjsgLy8gUG9seW5vbWlhbCBmb3IgdGhlIHRoZSB1cHBlclxuICAgICAgLy8gaGFsZiBvZiB0aGUgcmFuZ2U6IC0yeF4yICsgNHggLSAxXG4gICAgfSxcbiAgfTtcblxuICB0aGlzLl9jbG9jay5vbihcInRpY2tcIiwgdGhpcy51cGRhdGVUd2VlbnMsIHRoaXMpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB1cGRhdGVUd2VlbnMgLSBVcGRhdGVzIGFsbCB0aGUgdHdlZW4gaW5zdGFuY2VzLlxuICovXG5ZQVQudXBkYXRlVHdlZW5zID0gZnVuY3Rpb24gdXBkYXRlVGVlbnMoKSB7XG4gIHRoaXMudHdlZW5zLmZvckVhY2goKHR3ZWVuKSA9PiB7XG4gICAgaWYgKHR3ZWVuLnRpY2tlci5uZWVkc1VwZGF0ZSkge1xuICAgICAgdHdlZW4udXBkYXRlKHR3ZWVuLnRpY2tlcik7XG4gICAgfVxuXG4gICAgaWYgKCF0d2Vlbi50aWNrZXIubmVlZHNVcGRhdGUgJiZcbiAgICAgICAgdHdlZW4udGlja2VyLlNUQVRFID09PSBcIkRPTkVcIikge1xuICAgICAgdHdlZW4udXBkYXRlKHR3ZWVuLnRpY2tlcik7XG4gICAgICB0d2Vlbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodHdlZW4udGlja2VyLnN0b3BwZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWW91ciB0d2VlbiBpcyBzdG9wcGVkLlwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuWUFULmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdHM9e30pIHtcbiAgY29uc3QgWUFUSW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKFlBVCk7XG4gIGNvbnN0IF9vcHRzID0gT2JqZWN0LmFzc2lnbihjbG9uZShERUZBVUxUUyksIG9wdHMpO1xuICBjb25zdCB7ZHVyYXRpb24sIG9iaiwgcHJvcHMsIGVhc2luZywgaWR9ID0gX29wdHM7XG5cbiAgaWYgKCFZQVRJbnN0YW5jZS5lYXNpbmdGbnNbZWFzaW5nXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVhc2luZyBmdW5jdGlvbiAke2Vhc2luZ30gZG9lcyBub3QgZXhpc3RzYCk7XG4gIH1cblxuICBpZiAoaWQpIHtcbiAgICBpZiAodGhpcy50d2VlbnMuc29tZSgoeCkgPT4geC5pZCA9PT0gaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0d2VlbiB3aXRoIGlkOiAke2lkfSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICB9XG5cbiAgICBZQVRJbnN0YW5jZS5pZCA9IGlkO1xuICB9IGVsc2Uge1xuICAgIFlBVEluc3RhbmNlLmlkID0gdGhpcy50d2VlbnMubGVuZ3RoICsgMTtcbiAgfVxuXG4gIFlBVEluc3RhbmNlLnN0YXRlID0gY2xvbmUob2JqKTtcbiAgWUFUSW5zdGFuY2Uub2JqID0gb2JqO1xuICBZQVRJbnN0YW5jZS5wcm9wcyA9IHByb3BzO1xuICBZQVRJbnN0YW5jZS5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICBZQVRJbnN0YW5jZS5lYXNpbmcgPSBZQVRJbnN0YW5jZS5lYXNpbmdGbnNbZWFzaW5nXTtcbiAgWUFUSW5zdGFuY2UudGlja2VyID0gdGhpcy5fY2xvY2suY3JlYXRlU2xhdmUoe1xuICAgIGlkOiBZQVRJbnN0YW5jZS5pZCxcbiAgICBkdXJhdGlvbjogWUFUSW5zdGFuY2UuZHVyYXRpb24sXG4gIH0pO1xuXG4gIHRoaXMudHdlZW5zLnB1c2goWUFUSW5zdGFuY2UpO1xuICByZXR1cm4gWUFUSW5zdGFuY2U7XG59O1xuXG5ZQVQuZ2V0ID0gZnVuY3Rpb24oaWQpIHtcbiAgaWYgKHRoaXMudHdlZW5zLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBZQVRbMF07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHdlZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy50d2VlbltpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnR3ZWVuW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbllBVC5yZXdpbmQgPSBmdW5jdGlvbihpZD10aGlzLmlkKSB7XG4gIGNvbnN0IHR3ZWVuID0gdGhpcy5nZXQoaWQpO1xuXG4gIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgdHdlZW4uc3RvcCgpO1xuICB9XG5cbiAgLy8gRmlndXJlIG91dCBhIHdheSB0byBjYWNoZSB0aGUgb2xkIHByb3BzIC8vXG4gIHRoaXMub3B0cy5vYmogPSB0aGlzLm9wdHMucHJvcHM7XG4gIHRoaXMub3B0cy5wcm9wcyA9IHRoaXMub3B0cy5wcm9wc0JlZm9yZVR3ZWVuO1xuXG4gIHR3ZWVuLnN0YXJ0KCk7XG59O1xuXG5ZQVQuc3RhcnRBbGwgPSBmdW5jdGlvbiBzdGFydEFsbCgpIHtcbiAgaWYgKCF0aGlzLnR3ZWVucy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhcmUgbm8gdHdlZW5zIHRvIHN0YXJ0XCIpO1xuICB9XG5cbiAgdGhpcy50d2VlbnMuZm9yRWFjaCgodCkgPT4ge1xuICAgIHQudGlja2VyLnN0YXJ0KCk7XG4gIH0pO1xuXG4gIHRoaXMuX2Nsb2NrLnN0YXJ0KCk7XG59O1xuXG4vKipcbiAqIHN0b3BBbGwgLSBTdG9wcyBhbGwgdHdlZW5zXG4gKi9cbllBVC5zdG9wQWxsID0gZnVuY3Rpb24gc3RvcEFsbCgpIHtcbiAgaWYgKHRoaXMudHdlZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSBubyB0d2VlbnMgdG8gc3RvcFwiKTtcbiAgfVxuXG4gIHRoaXMuX2Nsb2NrLnN0b3AoKTtcbn07XG5cbi8qKlxuICogZGVsYXkgLSBob3cgbG9uZyB0byBkZWxheSB0aGUgYW5pbWF0aW9uXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcmV0dXJuIHtZQVR9XG4gKi9cbllBVC5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KGR1cmF0aW9uKSB7XG4gIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgdGhpcy5vYmogPSBjbG9uZSh0aGlzLnN0YXRlKTtcbiAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpY2tlci5zdGFydCgpLCBkdXJhdGlvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdG9wIC0gc3RvcHMgdGhlIHRpY2tlclxuICogQHJldHVybiB7WUFUfVxuICovXG5ZQVQuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIGZpbmlzaCAtIGZpbmlzaGVzIHRoZSB0d2VlbiBhbmltYXRpb25cbiAqIEByZXR1cm4ge1lBVH1cbiAqL1xuWUFULmZpbmlzaCA9IGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuX2Nsb2NrLnJlbW92ZVNsYXZlKHRoaXMudGlja2VyLmlkKTtcbiAgdGhpcy5zdGF0ZSA9IHRoaXMucHJvcHM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuWUFULnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpZD10aGlzLmlkKSB7XG4gIHRoaXMudHdlZW5zID0gdGhpcy50d2VlbnMuZmlsdGVyKCh0KSA9PiB7XG4gICAgaWYgKHQuaWQgPT09IGlkKSB7XG4gICAgICB0aGlzLl9jbG9jay5yZW1vdmVTbGF2ZSh0LnRpY2tlci5pZCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufTtcblxuWUFULnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSh0aWNrZXIpIHtcbiAgaWYgKCF0aWNrZXIubmVlZHNVcGRhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBjb25zdCB7dGltZVNpbmNlU3RhcnQ6IGRlbHRhLCBkdXJhdGlvbn0gPSB0aWNrZXI7XG4gIGNvbnN0IG5vcm0gPSB1dGlscy5ub3JtYWxpemUoZGVsdGEsIDAsIGR1cmF0aW9uLm1zKTtcblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5vYmopIHtcbiAgICBpZiAodGhpcy5vYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHRoaXMub2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB0aGlzLmVhc2luZyh0aGlzLnByb3BzW2tleV0gLSB0aGlzLm9ialtrZXldLCB0aGlzLm9ialtrZXldLCBub3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gWUFUO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKlxuICpcbiAqIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcbiAqIFxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLiBcbiAqIFxuICogQ29weXJpZ2h0IMKpIDIwMDEgUm9iZXJ0IFBlbm5lclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiBcbiAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIFxuICogY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3QgXG4gKiBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBcbiAqIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZVxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvblxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTllcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSFxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVUXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRURcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdHdlZW4uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3R3ZWVuLmpzIiwiLyoqXG4gKiBFdmVudFxuICogQHR5cGUge09iamVjdH1cbiAqIEBpbXBsZW1lbnRzIHt1dGlsc31cbiAqL1xuY29uc3QgRXZlbnQgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAgXG5cblxuXG4vKipcbiAqIGluaXRcbiAqIEBtZW1iZXJPZiBFdmVudFxuICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBldmVudCBvYmplY3QuXG4gKiBAcmV0dXJuIHtFdmVudH1cbiAqL1xuRXZlbnQuaW5pdCA9IGZ1bmN0aW9uIGluaXRFdmVudCgpIHtcbiAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIGVtaXRcbiAqIEBkZXNjcmlwdGlvbiBFeGVjdXRlcyB0aGUgaGFuZGVsZXIgdGhhdCBhc3NvY2FpdGVkIHdpdGggdGhlIGVtaXR0ZWQgZXZlbnQuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gKiBAcmV0dXJuIHtFdmVudH1cbiAqL1xuRXZlbnQuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoLi4uYXJncykge1xuICBjb25zdCBbZXZlbnQsIC4uLnJlc3RdID0gYXJncztcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV2ZW50OiBQbGVhc2UgcHJvdmlkZSB0cnV0aHkgYXJndW1lbnRzXCIpO1xuICB9XG5cbiAgdGhpcy5jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xuXG4gIGlmICh0aGlzLmNhbGxiYWNrc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgdGhpcy5jYWxsYmFja3NbZXZlbnRdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayguLi5yZXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBvblxuICogQGRlc2NyaXB0aW9uIEF0dGFjaCBhIGhhbmRsZXIgdG8gYW4gZXZlbnQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtICB7T2JqZWN0fSAgIGNvbnRleHRcbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICBpZiAoIWV2ZW50IHx8ICFmbikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudDogUGxlYXNlIHByb3ZpZGUgdHJ1dGh5IGFyZ3VtZW50c1wiKTtcbiAgfVxuXG4gIGlmIChjb250ZXh0KSB7XG4gICAgZm4gPSBmbi5iaW5kKGNvbnRleHQpO1xuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gZXZlbnQuc3BsaXQoXCIgXCIpO1xuXG4gIHRoaXMuY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MgfHwge307XG5cbiAgZXZlbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICB0aGlzLmNhbGxiYWNrc1tlXSA9IHRoaXMuY2FsbGJhY2tzW2VdIHx8IFtdO1xuXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrc1tlXS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzW2VdLnB1c2goZm4pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRG9udCBjcmVhdGUgZHVwbGljYXRlcyBvZiB0aGUgc2FtZSBoYW5kZWxlZCBmdW5jdGlvbi5cbiAgICAvLyBJZiB5b3Ugd2FudCB5b3VyIGZ1bmN0aW9uIHJ1biB0d2ljZSB3cmFwIGl0IGluIGEgZnVuY3Rpb24uXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzW2VdLmV2ZXJ5KChjYiwgaSwgY29sKSA9PiB7XG4gICAgICByZXR1cm4gY2IgIT09IGZuO1xuICAgIH0pID8gdGhpcy5jYWxsYmFja3NbZV0ucHVzaChmbikgOlxuICAgICAgY29uc29sZS53YXJuKGBFdmVudDogVGhhdCBmdW5jdGlvbiAke2ZufSBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkIGFgICtcbiAgICAgICAgXCJoYW5kbGVyIGZvciB0aGlzIGV2ZW50LlwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG9mZlxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhbiBldmVudCBoYW5kZWxlci5cbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudFxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFdmVudH1cbiAqL1xuRXZlbnQub2ZmID0gZnVuY3Rpb24gb2ZmKC4uLmFyZ3MpIHtcbiAgY29uc3QgW2V2ZW50LCBmbl0gPSBhcmdzO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGV0IGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoIWNhbGxiYWNrcykge1xuICAgIGNvbnNvbGUud2FybihgRXZlbnQ6IE5vIGV2ZW50IG5hbWVkICR7ZXZlbnR9IGhhcyBiZWVuIHJlZ2lzdGVyZWRgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmICghZm4pIHtcbiAgICBkZWxldGUgdGhpcy5jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhpcy5jYWxsYmFja3NbZXZlbnRdID0gY2FsbGJhY2tzLmZpbHRlcigoY2IpID0+IGNiICE9PSBmbik7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIGxpc3RlbmVycyAtIFJldHVybiBhbGwgY2FsbGJhY2tzIGF0dGFjaGVkIHRvIGEgY2VydGFpbiBldmVudFxuICogQHBhcmFtICB7YW55PEFycmF5Pn0gYXJnc1xuICogQHJldHVybiB7ZnVuY3Rpb25bXX1cbiAqL1xuRXZlbnQubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKC4uLmFyZ3MpIHtcbiAgY29uc3QgW2V2ZW50XSA9IGFyZ3M7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNhbGxiYWNrcyk7XG4gIH1cblxuICBpZiAoIXRoaXMuY2FsbGJhY2tzW2V2ZW50XSkge1xuICAgIGNvbnNvbGUud2FybihgRXZlbnQ6IE5vIGV2ZW50IG5hbWVkICR7ZXZlbnR9IGhhcyBiZWVuIHJlZ2lzdGVyZWRgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNhbGxiYWNrc1tldmVudF07XG59O1xuXG5FdmVudC5vbmNlID0gZnVuY3Rpb24gb25jZSguLi5hcmdzKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBjb25zdCBbZXZlbnQsIGZuLCBjb250ZXh0XSA9IGFyZ3M7XG5cbiAgY29uc3Qgd3JhcCA9IGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgZm4uYmluZChjb250ZXh0KSgpO1xuICAgIHNlbGYub2ZmKGV2ZW50LCB3cmFwKTtcbiAgfTtcblxuICB0aGlzLm9uKGV2ZW50LCB3cmFwLCBjb250ZXh0KTtcbn07XG5cbi8vIEFsaWFzZXMgLy9cbkV2ZW50LnJlbW92ZUxpc3RlbmVyID0gRXZlbnQucmVtb3ZlQWxsTGlzdGVuZXJzID0gRXZlbnQub2ZmO1xuRXZlbnQuZmlyZSA9IEV2ZW50LmVtaXQ7XG5FdmVudC5hZGRMaXN0ZW5lciA9IEV2ZW50Lm9uO1xuRXZlbnQuZ2V0ID0gRXZlbnQubGlzdGVuZXJzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9ldmVudC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvZXZlbnQuanMiLCJjb25zdCB0aWNrZXIgPSByZXF1aXJlKFwiLi90aWNrZXJcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpLmluaXQoKTtcbmNvbnN0IENsb2NrID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBNQVhfRlBTID0gNjA7XG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuICogaW5pdCAtIEluaXRhbGl6ZXMgdGhlIGNsb2NrIHdpdGggY29ycmVjdCBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG9wdHMuZnBzIFRoZSBmcHMgeW91IHdhbnQgdGhlIGNsb2NrIHRvIHRpY2sgYXQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suaW5pdCA9IGZ1bmN0aW9uIGluaXRDbG9jayhvcHRzPXt9KSB7XG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBmcHM6IE1BWF9GUFMsXG4gIH0sIG9wdHMpO1xuXG4gIHRoaXMuc2xhdmVzID0gW107XG4gIHRoaXMucGFyZW50ID0gZXZlbnQ7XG5cbiAgLy8gWmVybyBiYXNlZCBmcmFtZSBjb3VudC5cbiAgdGhpcy5pbmRleCA9IC0xO1xuXG4gIC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGFuaW1hdGlvbiBmcmFtZSBzbyB3ZSBjYW4gY2FuY2VsIGl0XG4gIHRoaXMuckFGID0gMDtcblxuICAvLyBUaW1lIHByb3BlcnRpZXNcbiAgdGhpcy5zdGFydFRpbWU7XG4gIHRoaXMubGFzdFRpbWU7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSAwO1xuXG4gIC8vIFRoZSBtYXhpbXVtIEZQUyB0aGUgYnJvd3NlciBjYW4gZGVsaXZlciBpcyA2MC5cbiAgdGhpcy5mcHMgPSBvcHRzLmZwcyA+IE1BWF9GUFMgP1xuICAgIE1BWF9GUFMgOlxuICAgIChvcHRzLmZwcyB8fCBNQVhfRlBTKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogc3RhcnQgLSBTdGFydHMgdGhlIGNsb2NrIHdpdGggc3RhcnRpbmcgdGltZSBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7TnVtYmVyfSBmcHMgVGhlIGZwcyB5b3Ugd2FudCB0aGUgY2xvY2sgdG8gdGljayBhdC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5mcHMgPiA2MCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnaXZlbiBmcHMgaXMgdG9vIGhpZ2hcIik7XG4gIH1cblxuICBpZiAoK3RoaXMuZnBzID09PSBOYU4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2l2ZW4gZnBzIGlzIG5vdCB2YWxpZFwiKTtcbiAgfVxuXG4gIHRoaXMuZnBzID0gMTAwMCAvIHRoaXMuZnBzO1xuICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG5cbiAgLy8gU3RhcnQgdGlja2luZ1xuICB0aGlzLmxvb3AodGhpcy5zdGFydFRpbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogdGlja1xuICogQHBhcmFtICB7TnVtYmVyfSBuZXdUaW1lIEEgdmFsdWUgaW4gbXMgdGhhdCBpcyBlcXVhbCB0byB0aGUgY3VycmVudCB0aW1lLlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLmxvb3AgPSBmdW5jdGlvbiBsb29wKG5ld1RpbWUpIHtcbiAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcC5iaW5kKHRoaXMpKTtcblxuICBsZXQgZGVsdGEgPSBuZXdUaW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IG5ld1RpbWUgLSB0aGlzLnN0YXJ0VGltZTtcblxuICBpZiAoZGVsdGEgPiB0aGlzLmZwcykge1xuICAgIHRoaXMuaW5kZXgrKztcblxuICAgIHRoaXMud2hpcFNsYXZlcyh7XG4gICAgICBuZXdUaW1lLFxuICAgICAgZGVsdGEsXG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIGxhc3RUaW1lOiB0aGlzLmxhc3RUaW1lLFxuICAgICAgY2xvY2tTdGFydDogdGhpcy5zdGFydFRpbWUsXG4gICAgICB0aW1lU2luY2VTdGFydDogdGhpcy50aW1lU2luY2VTdGFydCxcbiAgICB9KTtcblxuICAgIHRoaXMubGFzdFRpbWUgPSBuZXdUaW1lIC0gKGRlbHRhICUgdGhpcy5mcHMpO1xuICB9XG5cbiAgdGhpcy5lbWl0KFwicmVuZGVyXCIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdG9wIC0gU3RvcCB0aGUgY2xvY2sgYW5kIGNhbGwgdGhlIGxhc3QgdGljayBpZiBuZWVkZWQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suc3RvcCA9IGZ1bmN0aW9uIHN0b3BDbG9jaygpIHtcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpO1xuXG4gIC8vIFJlY29yZCB3aGVuIHdlIHN0b3BwZWQuXG4gIHRoaXMuc3RvcFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCArPSB0aGlzLnN0b3BUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcblxuICB0aGlzLmVtaXQoXCJzdG9wcGVkXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogd2hpcFNsYXZlcyAtIFJ1biBhbGwgc2xhdmVzIGluIHNlcXVlbmNlIGFuZCBwYXNzIGluXG4gKiB0aGUgZ2l2ZW4gc3RhdGUgb2YgdGhlIGNsb2NrLlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLndoaXBTbGF2ZXMgPSBmdW5jdGlvbiB3aGlwU2xhdmVzKHN0YXRlKSB7XG4gIGlmICghdGhpcy5zbGF2ZXMubGVuZ3RoKSByZXR1cm47XG5cbiAgdGhpcy5zbGF2ZXMuZm9yRWFjaCgoc2xhdmUsIGluZGV4KSA9PiB7XG4gICAgc2xhdmUubnVkZ2Uoc3RhdGUpO1xuICB9KTtcblxuICB0aGlzLmVtaXQoXCJ0aWNrXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkNsb2NrLmNyZWF0ZVNsYXZlID0gZnVuY3Rpb24gY3JlYXRlU2xhdmUob3B0cykge1xuICBpZiAoIW9wdHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIG9wdGlvbnMgb2JqZWN0XCIpO1xuICB9XG5cbiAgY29uc3Qge2lkLCBkdXJhdGlvbn0gPSBvcHRzO1xuICBjb25zdCB0aW1lU3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBjb25zdCBzbGF2ZSA9IE9iamVjdC5jcmVhdGUodGlja2VyKVxuICAgIC5pbml0KHt0aW1lU3RhbXAsIGlkLCBkdXJhdGlvbn0pO1xuXG4gIGlmIChpZCkge1xuICAgIHRoaXMuc2xhdmVzLnB1c2goc2xhdmUpO1xuICAgIHJldHVybiBzbGF2ZTtcbiAgfVxuXG4gIHNsYXZlLmlkID0gdGhpcy5zbGF2ZXMucHVzaChzbGF2ZSk7XG4gIHJldHVybiBzbGF2ZTtcbn07XG5cbkNsb2NrLnJlbW92ZVNsYXZlID0gZnVuY3Rpb24gcmVtb3ZlU2xhdmUoaWQpIHtcbiAgdGhpcy5zbGF2ZXMgPSB0aGlzLnNsYXZlcy5maWx0ZXIoKHNsYXZlKSA9PiB7XG4gICAgaWYgKHNsYXZlLmlkICE9PSBpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHNsYXZlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG5DbG9jay5jbGVhclNsYXZlcyA9IGZ1bmN0aW9uIGNsZWFyU2xhdmVzKCkge1xuICBpZiAodGhpcy5zbGF2ZXMubGVuZ3RoKSB0aGlzLnNsYXZlcyA9IFtdO1xufTtcblxuQ2xvY2sucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcbiAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgdGhpcy5yQUYgPSAwO1xufTtcblxuQ2xvY2sucmVtb3ZlQWxsU2xhdmVzID0gQ2xvY2suY2xlYXJTbGF2ZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2Nsb2NrLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9jbG9jay5qcyIsImNvbnN0IGV2ZW50ID0gcmVxdWlyZShcIi4vZXZlbnRcIik7XG5jb25zdCBNQVhfRlBTID0gMTAwMC82MDtcbmNvbnN0IFRpY2tlciA9IE9iamVjdC5jcmVhdGUoZXZlbnQpO1xuY29uc3QgU1RBVEUgPSB7XG4gIFNUT1BQRUQ6IFwiU1RPUFBFRFwiLFxuICBSVU5OSU5HOiBcIlJVTk5JTkdcIixcbiAgRE9ORTogXCJET05FXCIsXG59O1xuXG5cblRpY2tlci5pbml0ID0gZnVuY3Rpb24gaW5pdCh7XG4gIHRpbWVTdGFtcD1wZXJmb3JtYW5jZS5ub3coKSxcbiAgaWQsXG4gIGR1cmF0aW9uPTEwMDAsXG4gIGludGVydmFsPU1BWF9GUFMsXG59KSB7XG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy5wYXJlbnQgPSBldmVudDtcbiAgdGhpcy5wYXJlbnQubmFtZSA9IFwiZXZlbnRcIjtcblxuICAvLyBQcm9iYWJseSBjYW50IHN1cHBvcnQgdGhpcz8/XG4gIC8vIFlvdSBoYXZlIHRvIGhhdmUgeW91ciBvd24gY2xvY2suXG4gIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgdGhpcy5kdXJhdGlvbiA9IHRoaXMudGlja0ZvcihkdXJhdGlvbiwgXCJtc1wiKTtcblxuICB0aGlzLlNUQVRFO1xuICB0aGlzLmRlbHRhO1xuICB0aGlzLnN0b3BUaW1lO1xuICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSAwO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0MiA9IDA7XG5cbiAgLy8gRmlyZSB0aGUgZmlyc3QgdGltZSB5b3UgZ2V0IGNhbGxlZC5cbiAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5UaWNrZXIudGlja0ZvciA9IGZ1bmN0aW9uIHRpY2tGb3IoZHVyYXRpb24sIHN0cmluZykge1xuICBzd2l0Y2ggKHN0cmluZykge1xuICBjYXNlIFwiZnJhbWVzXCI6IGNhc2UgXCJmXCI6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwiZnJhbWVzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24gKiBNQVhfRlBTLFxuICAgIH07XG4gIGNhc2UgXCJzZWNvbmRzXCI6IGNhc2UgXCJzXCI6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwic2Vjb25kc1wiLFxuICAgICAgdmFsdWU6IGR1cmF0aW9uLFxuICAgICAgbXM6IGR1cmF0aW9uICogMTAwMCxcbiAgICB9O1xuICBjYXNlIFwibWlsbGlzZWNvbmRzXCI6IGNhc2UgXCJtc1wiOiBkZWZhdWx0OlxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgICAgdmFsdWU6IGR1cmF0aW9uLFxuICAgICAgbXM6IGR1cmF0aW9uLFxuICAgIH07XG4gIH07XG59O1xuXG5UaWNrZXIuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlJVTk5JTkcpIHJldHVybiBmYWxzZTtcbiAgdGhpcy5TVEFURSA9IFNUQVRFLlJVTk5JTkc7XG4gIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG59O1xuXG5UaWNrZXIuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gIGlmICh0aGlzLlNUQVRFID09PSBTVEFURS5TVE9QUEVEKSByZXR1cm4gZmFsc2U7XG4gIHRoaXMuU1RBVEUgPSBTVEFURS5TVE9QUEVEO1xuXG4gIC8vIEtub3cgd2hhdCB0aW1lIGl0IHN0b3BwZWQuXG4gIC8vIHNvIHRoYXQgaWYgaXQgc3RhcnRzIGFnYWluIGl0XG4gIC8vIGl0IGNhbiByZWNhbGN1bGF0ZSBob3cgZmFyIGl0IG5lZWRzIHRvIGdvLlxuICBjb25zdCBuZXdEdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24ubXMgLSB0aGlzLnRpbWVTaW5jZVN0YXJ0IHx8IDA7XG5cbiAgdGhpcy5kdXJhdGlvbiA9IHRoaXMudGlja0ZvcihuZXdEdXJhdGlvbiwgXCJtaWxsaXNlY29uZHNcIik7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSAwO1xuXG4gIHRoaXMuc3RvcFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbn07XG5cblRpY2tlci5udWRnZSA9IGZ1bmN0aW9uIG51ZGdlKHN0YXRlKSB7XG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIHN0YXRlIG9iamVjdFwiKTtcbiAgfVxuXG5cbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlNUT1BQRUQgfHwgdGhpcy5TVEFURSAhPT0gU1RBVEUuUlVOTklORykge1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRoaXMuU1RBVEUgPSBTVEFURS5SVU5OSU5HO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0ICs9IHN0YXRlLmRlbHRhO1xuXG4gIGlmICh0aGlzLnRpbWVTaW5jZVN0YXJ0IDwgdGhpcy5kdXJhdGlvbi5tcykge1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuU1RBVEUgPSBTVEFURS5ET05FO1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3RpY2tlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvdGlja2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgRklSU1RfSUZSQU1FID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpZnJhbWVIYW5kbGVyKGRvY3VtZW50KSB7XG4gIGRvY3VtZW50ID0gZG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudDtcblxuICBjb25zdCBkb21IZWxwZXIgPSByZXF1aXJlKFwiZG9tX2hlbHBlclwiKShkb2N1bWVudCk7XG4gIGNvbnN0IHNoaW1zID0gcmVxdWlyZShcInNoaW1zXCIpKGRvY3VtZW50KTtcblxuICBjb25zdCAkID0gc2hpbXMuJDtcbiAgY29uc3QgJCQgPSBzaGltcy4kJDtcbiAgXG4gIGxldCBmaXJzdFN0YXRlID0gRklSU1RfSUZSQU1FO1xuXG4gIGNvbnN0IGNoZWNrU3RhdHVzID0gKHJlcykgPT4ge1xuICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNDAwKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICB0aHJvdyByZXMuc3RhdHVzVGV4dDtcbiAgfTtcblxuICAvKipcbiAgICogW2ZldGNoRXhhbXBsZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBpZCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgZmV0Y2hFeGFtcGxlID0gZnVuY3Rpb24gZmV0Y2hFeGFtcGxlKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiL2V4YW1wbGVzL1wiICsgaWQpXG4gICAgLnRoZW4oY2hlY2tTdGF0dXMpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9KTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBbd3JpdGVGcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBwYXJlbnQgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGZyYW1lICBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IHdyaXRlRnJhbWUgPSBmdW5jdGlvbiB3cml0ZUZyYW1lKHBhcmVudCwgZnJhbWUpIHtcbiAgICBpZiAoIWRvbUhlbHBlci5pc0VsZW1lbnQocGFyZW50KSB8fCAhZG9tSGVscGVyLmlzRWxlbWVudChmcmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwYXJlbnQgKyBcIiB0aGlzIHBhcmVudCBpc24ndCBhIERPTSBlbGVtZW50LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZChmcmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtnZXRGcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBuYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGdldEZyYW1lID0gZnVuY3Rpb24gZ2V0RnJhbWUobmFtZSkge1xuICAgIGlmICghbmFtZSkgcmV0dXJuICQoXCJpZnJhbWVbZGF0YS1leGFtcGxlXVwiKTtcbiAgICByZXR1cm4gJChcImlmcmFtZVtkYXRhLWV4YW1wbGVePVwiICsgbmFtZSArIFwiXVwiKTtcbiAgfTtcblxuICAvKipcbiAgICogW2luamVjdFNyYyBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBzcmMgICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZnJhbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGluamVjdFNyYyA9IGZ1bmN0aW9uIGluamVjdFNyYyhzcmMsIGZyYW1lKSB7XG4gICAgZnJhbWUuc3JjZG9jID0gc3JjO1xuICAgIHJldHVybiBmcmFtZTtcbiAgfTtcblxuICAvKipcbiAgICogW2NyZWF0ZUZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5hbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgY3JlYXRlRnJhbWUgPSBmdW5jdGlvbiBjcmVhdGVGcmFtZShuYW1lKSB7XG4gICAgaWYgKCFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArIFwiIE5vdCBhIHZhbGlkIG5hbWUgZm9yIGEgaWQuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3ctc2FtZS1vcmlnaW5cIiwgdHJ1ZSk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93LXNjcmlwdHNcIiwgdHJ1ZSk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCB0cnVlKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmcmFtZV9leGFtcGxlXCIpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWV4YW1wbGVcIiwgbmFtZSk7XG5cbiAgICByZXR1cm4gaWZyYW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbcmVtb3ZlRnJhbWVTcmMgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gdGFyZ2V0IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgcmVtb3ZlRnJhbWVTcmMgPSBmdW5jdGlvbiByZW1vdmVGcmFtZVNyYyh0YXJnZXQpIHtcbiAgICBpZiAoIXRhcmdldCkgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSB0YXJnZXRcIik7XG5cbiAgICBpZiAoIWRvbUhlbHBlci5pc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGdldEZyYW1lKHRhcmdldCkuc3JjRG9jID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC5zcmNEb2MgPSBcIlwiO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbZXhhbXBsZUV4aXN0cyBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBleGFtcGxlIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGV4YW1wbGVFeGlzdHMgPSBmdW5jdGlvbiBleGFtcGxlRXhpc3RzKGV4YW1wbGUpIHtcbiAgICBpZiAoIWV4YW1wbGUpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBpZDtcblxuICAgIHRyeSB7XG4gICAgICBpZCA9IGdldEZyYW1lKGV4YW1wbGUpXG4gICAgICAgIC5hdHRyaWJ1dGVzW1wiZGF0YS1leGFtcGxlXCJdXG4gICAgICAgIC5ub2RlVmFsdWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgcmV0dXJuIGlkID09PSBleGFtcGxlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW2xvYWRJbklmcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBuYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGxvYWRJbklmcmFtZSA9IGZ1bmN0aW9uIGxvYWRJbklmcmFtZShpZCkgeyAgXG4gICAgaWYgKCFleGFtcGxlRXhpc3RzKGlkKSkge1xuICBcbiAgICAgIGlmICghZmlyc3RTdGF0ZSkge1xuICBcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBzdGF0ZSBhbmQgcmVtb3ZlIG9sZCBzcmMgYW5kIGluamVjdCBuZXcgc3JjLlxuICAgICAgICBjb25zdCBleGlzdGluZ0ZyYW1lID0gZ2V0RnJhbWUoKTtcbiAgICAgICAgcmVtb3ZlRnJhbWVTcmMoZXhpc3RpbmdGcmFtZSk7XG4gICAgICAgIGV4aXN0aW5nRnJhbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1leGFtcGxlXCIsIGlkKTtcbiAgICAgICAgcmV0dXJuIGZldGNoRXhhbXBsZShpZClcbiAgICAgICAgICAudGhlbigoc3JjKSA9PiBpbmplY3RTcmMoc3JjLCBleGlzdGluZ0ZyYW1lKSlcbiAgICAgICAgICAuY2F0Y2gobG9hZElmcmFtZUVycm9yKTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIHRoZSBzdGF0ZS5cbiAgICAgIGZpcnN0U3RhdGUgPSAhZmlyc3RTdGF0ZTtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZnJhbWVcbiAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBjcmVhdGVGcmFtZShpZCk7XG4gICAgICBjb25zdCBwYXJlbnREaXYgPSAkKFwiLndyYXBwZXJfX2ZyYW1lXCIpO1xuICAgICAgLy8gSWYgd2UgYXJlIG5vdCB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIGRvY3VtZW50IGRvIHRoaXMgcmVndWxhciBzdHVmZi5cbiAgICAgIHJldHVybiBmZXRjaEV4YW1wbGUoaWQpXG4gICAgICAgIC50aGVuKChzcmMpID0+IGluamVjdFNyYyhzcmMsIGZpcnN0RnJhbWUpKVxuICAgICAgICAudGhlbigobmV3RnJhbWUpID0+IHdyaXRlRnJhbWUocGFyZW50RGl2LCBuZXdGcmFtZSkpXG4gICAgICAgIC5jYXRjaChsb2FkSWZyYW1lRXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBsb2FkSWZyYW1lRXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgJChcIi53cmFwcGVyX19lcnJvclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICQoXCIud3JhcHBlcl9fZXJyb3JcIikuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgICQoXCIud3JhcHBlcl9fZXJyb3JcIikuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAkKFwiLndyYXBwZXJfX2Vycm9yICNlcnJvclwiKS5pbnNlcnRBZGphY2VudFRleHQoXCJhZnRlckJlZ2luXCIsIGVycik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW1vdmVGcmFtZVNyYyxcbiAgICB3cml0ZUZyYW1lLFxuICAgIGdldEZyYW1lLFxuICAgIGluamVjdFNyYyxcbiAgICBjcmVhdGVGcmFtZSxcbiAgICBsb2FkSW5JZnJhbWUsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9pZnJhbWVNYW5hZ2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50O1xuXG4gIGNvbnN0IHNoaW1zID0gcmVxdWlyZShcInNoaW1zXCIpKGRvY3VtZW50KTtcbiAgY29uc3QgJCQgPSBzaGltcy4kJDtcblxuICAvKipcbiAgICogaXNFbGVtZW50IGNoZWNrcyBpZiBhIGVsZW1lbnQgaXMgYSBET00gbm9kZS5cbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc0VsZW1lbnQgPSAob2JqKSA9PiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogbWFwVGV4dCB0YWtlcyBhbiBlbG1lbnQgbGlzdCBhbmQgcmV0dXJuIGEgYXJyYXkgb2YgdGV4dE5vZGVzLlxuICAgKiBAcGFyYW0gIHtET01FbGVtZW10fSBlbG0gICBET01FbGVtZW10XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgIEFycmF5XG4gICAqL1xuICBjb25zdCBtYXBUb1RleHQgPSBmdW5jdGlvbiBtYXBUZXh0KGVsbSkge1xuICAgIGNvbnN0IGVsbUxpc3QgPSAkJChlbG0sIGRvY3VtZW50KTtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXTtcblxuICAgIC8qXG4gICAgICBXZSBuZWVkIHRvIHVzZSBhIGZvciBgb2ZgIGxvb3AgaGVyZSBjYXVzZSBpdHMgYSBOb2RlTGlzdCBhbmQgbm90IGFuXG4gICAgICBhcnJheS5cbiAgICAqL1xuICAgIGZvciAobGV0IGl0ZW0gb2YgZWxtTGlzdCkge1xuICAgICAgdGV4dE5vZGVzLnB1c2goaXRlbS50ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dE5vZGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBlbG1EZWxlZ2F0b3IgZGVsZWdhdGUgaXRlbXNcbiAgICogQHBhcmFtICB7RE9NRWxlbWVudH0gZWxtIFRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgZGVsZWdhdGVzLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50IEJvb2xlYW4gdG8gY2hlY2sgd2hpY2ggZWxlbWVudHMgdG8gZGVsZWdhdGUgdG8uXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBjaGVja1RhcmdldCBmdW5jdGlvbiBhbmQgYSBjYWxsYmFjay5cbiAgICovXG4gIGNvbnN0IGVsbURlbGVnYXRvciA9IGZ1bmN0aW9uIGVsbURlbGVnYXRvcihlbG0sIGV2ZW50KSB7XG4gICAgaWYgKCFpc0VsZW1lbnQoZWxtKSkgdGhyb3cgbmV3IEVycm9yKGVsbSArIFwiIG5lZWRzIHRvIGJlIGEgZWxlbWVudC5cIik7XG4gICAgaWYgKGVsbS5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihlbG0gKyBcIiBuZWVkcyB0byBiZSBlbGVtZW50IGxpc3RcIik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oY2hlY2tUYXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGNoZWNrVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBlLnRhcmdldCwgZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKFwiTm8gdGFyZ2V0IG1hdGNoZWRcIikpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge2VsbURlbGVnYXRvciwgbWFwVG9UZXh0LCBpc0VsZW1lbnR9O1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9kb21faGVscGVyLmpzIiwiLyogc2hpbXMgKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbXMoZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50O1xuXG4gIGNvbnN0ICQgPSBmdW5jdGlvbiBxcyguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoLi4uYXJncyk7XG4gIH07XG5cbiAgY29uc3QgJCQgPSBmdW5jdGlvbiBxc0FsbCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoLi4uYXJncyk7XG4gIH07XG5cbiAgcmV0dXJuIHskLCAkJH07XG59O1xuLyogc2hpbXMgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUvc2hpbXMuanMiXSwic291cmNlUm9vdCI6IiJ9