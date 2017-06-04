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
	    case "/docs":
	      {
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
	
				/* eslint max-len: 0 */
	
				var utils = __webpack_require__(3);
	
				var INITIAL_STATE = {
					x: 0,
					y: 1
				};
	
				/**
	    * @class Vector
	    * @param {Object} state object.
	    */
				function Vector() {
					var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
					this.state = state;
				};
	
				/**
	    * Create - Easy way to instantiate a vector.
	    * @memberOf Vector
	    * @param  {Int} x
	    * @param  {Int} y
	    * @return {Vector}   A object inheriting from Vector.
	    */
				Vector.prototype.create = function create() {
					var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
					var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
					var vec = new Vector({ x: x, y: y });
					return vec;
				};
	
				/**
	    * Set - A setter for the vector class.
	    * @memberOf Vector
	    * @param  {*} prop
	    * @param  {*} val
	    * @return {Boolean} Is the prop your passing in exsist.
	    */
				Vector.prototype.set = function set(prop, val) {
					// TODO: Add check val is number
					// 1. Create utils.isNumber function.
	
					if (this.state.hasOwnProperty(prop)) {
						this.state[prop] = val;
						return true;
					}
	
					return false;
				};
	
				/**
	    * get - A getter for the vector class.
	    * @memberOf Vector
	    * @param  {String} prop  The prop to set on state.
	    * @return {Value}        The value assosiated with the prop.
	    */
				Vector.prototype.get = function get(prop) {
					return this.state[prop];
				};
	
				/**
	    * setAngle - Plot the corrdinates based on radians given.
	    * @memberOf Vector
	    * @param {Radians} rad A floating point number.
	    */
				Vector.prototype.setAngle = function setAngle(rad) {
					// TODO: Add check rad is number
					// 1. Create utils.isNumber function.
	
					var length = this.getLength();
	
					this.set("x", Math.cos(rad) * length);
					this.set("y", Math.sin(rad) * length);
				};
	
				/**
	    * setLength - Takes a length and sets coordinate.
	    * @memberOf Vector
	    * @param {Integer} length
	    */
				Vector.prototype.setLength = function setLength(length) {
					// TODO: Add check rad is number
					// 1. Create utils.isNumber function.
	
					var rad = this.getAngle();
	
					this.set("x", Math.cos(rad) * length);
					this.set("y", Math.sin(rad) * length);
				};
	
				/**
	    * getLength - Gets length of the coordinates from center plane.
	    * @memberOf Vector
	    * @return {Integer} Cooridinates.
	    */
				Vector.prototype.getLength = function getLength() {
					var x = this.get("x");
					var y = this.get("y");
					return Math.hypot(x, y);
				};
	
				/**
	    * getAngle - Get the angle of coordinates from center plane.
	    * @memberOf Vector
	    * @return {Integer} Cooridinates.
	    */
				Vector.prototype.getAngle = function getAngle() {
					var x = this.get("x");
					var y = this.get("y");
					return Math.atan2(y, x);
				};
	
				/**
	    * add - Should add vectors together given a vector
	    * @memberOf Vector
	    * @param {Vector} v2 A given vector to add.
	    * @return {Vector} A vector with cooridnates, or multiple vectors.
	    */
	
				Vector.prototype.add = function add(v2) {
					var self = this;
	
					if (v2.constructor.name === "Array" && v2.length) {
						// Refactor to make more effecient //
						var vecs = v2.map(function (v) {
							return { x: v.get("x"), y: v.get("y") };
						}).reduce(function (v0, vn) {
							return { x: v0.x + vn.x, y: v0.y + vn.y };
						}, self.state);
	
						return self.create(vecs.x, vecs.y);
					}
	
					return this.create(self.get("x") + v2.get("x"), self.get("y") + v2.get("y"));
				};
	
				/**
	    * subtract - should subtract the given vector with its own vector.
	    * @memberOf Vector
	    * @param  {Vector} v2 A vector that contains state.
	    * @return {Vector} A vector that contains a reduced state.
	    * @example {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
	    */
				Vector.prototype.subtract = function subtract(v2) {
					var self = this;
	
					if (v2.constructor.name === "Array" && v2.length) {
						// Refactor to make more effecient //
						var vecs = v2.map(function (v) {
							return { x: v.get("x"), y: v.get("y") };
						}).reduce(function (v0, vn) {
							return { x: v0.x - vn.x, y: v0.y - vn.y };
						}, self.state);
	
						return self.create(vecs.x, vecs.y);
					}
	
					return this.create(self.get("x") - v2.get("x"), self.get("y") - v2.get("y"));
				};
	
				/**
	    * Mulitplying vectors together
	    * @memberOf Vector
	    * @example {x: 2, y: 2} * {x: 2, y: 2} = {x: 4, y: 4}
	    * @param  {Vector} v2 A vector that contains state.
	    * @return {Vector}    A vector that contains a reduced state.
	    */
				Vector.prototype.multiply = function multiply(v2) {
					return this.create(this.get("x") * v2.get("x"), this.get("y") * v2.get("y"));
				};
	
				/**
	    * Divide vectors together.
	    * @memberOf Vector
	    * @param  {Vector} v2 A vector that contains state.
	    * @return {Vector}    A vector that contains a reduced state.
	    */
				Vector.prototype.divide = function divide(v2) {
					return this.create(this.get("x") / v2.get("x"), this.get("y") / v2.get("y"));
				};
	
				/**
	    * Adds to current state the state of v2
	    * @memberOf Vector
	    * @param {Vector} [v2] - A vector that contains state.
	    * @return {Object} [state] - Key value pair of coordinates
	    */
				Vector.prototype.addTo = function addTo(v2) {
					this.state.x = this.get("x") + v2.get("x");
					this.state.y = this.get("y") + v2.get("y");
					return this.state;
				};
	
				/**
	    * Subtracts from current state the state of v2
	    * @memberOf Vector
	    * @param {Vector} [v2] - A vector that contains state.
	    * @return {Object} [state] - Key value pair of coordinates
	    */
				Vector.prototype.subtractFrom = function subtractFrom(v2) {
					this.state.x = this.get("x") - v2.get("x");
					this.state.y = this.get("y") - v2.get("y");
					return this.state;
				};
	
				/**
	    * mulitplies by current state the state of v2
	    * @memberOf Vector
	    * @param {Vector} [v2] - A vector that contains state.
	    * @return {Object} [state] - Key value pair of coordinates
	    */
				Vector.prototype.multiplyBy = function multiplyBy(v2) {
					this.state.x = this.get("x") * v2.get("x");
					this.state.y = this.get("y") * v2.get("y");
					return this.state;
				};
	
				/**
	    * Divides by current state the state of v2
	    * @memberOf Vector
	    * @param {Vector} [v2] - A vector that contains state.
	    * @return {Object} [state] - Key value pair of coordinates
	    */
				Vector.prototype.divideBy = function divideBy(v2) {
					this.state.x = this.get("x") / v2.get("x");
					this.state.y = this.get("y") / v2.get("y");
					return this.state;
				};
	
				/**
	    * @memberOf Vector
	    * @param  {Number} angle A number of radians to rotate clockwise by.
	   */
				Vector.prototype.rotate = function (delta) {
					var cos = Math.cos(delta);
					var sin = Math.sin(delta);
	
					//
					var x = this.state.x * cos - this.state.y * sin;
					var y = this.state.y * cos + this.state.x * sin;
	
					this.state.x = x;
					this.state.y = y;
				};
	
				/**
	    * random generate a vector with random states.
	    * @memberOf Vector
	    * @param {Number} min - A min range on the random vector state.
	    * @param {Number} max - A max range on the random vector state.
	    * @return {Vector}
	    */
				Vector.prototype.random = function rVector() {
					var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
					var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	
					var x = utils.lerp(Math.random(), min, max);
					var y = utils.lerp(Math.random(), min, max);
					return this.create(x, y);
				};
	
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
				Vector.prototype.randomBetween = function rBetween() {
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
				};
	
				Vector.prototype["+"] = Vector.prototype.add;
				Vector.prototype["-"] = Vector.prototype.subtract;
				Vector.prototype["*"] = Vector.prototype.multiply;
				Vector.prototype["/"] = Vector.prototype.divide;
				Vector.prototype["+="] = Vector.prototype.addTo;
				Vector.prototype["-="] = Vector.prototype.subtractFrom;
				Vector.prototype["*="] = Vector.prototype.multiplyBy;
				Vector.prototype["/="] = Vector.prototype.divideBy;
	
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
	
				/* eslint max-len: 0 */
	
				/**
	    * This module is composed of small function that
	    * should be used when needed. Most functions are pure
	    * and only return values. For more info read the docs.
	    */
	
				/**
	    * @class Utils
	    * @return {Utils}
	    */
				var Utils = Object.create(null);
	
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
				Utils.normalize = function normalize(val, min, max) {
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
				Utils.lerp = function lerp(val, min, max) {
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
				Utils.map = function map(value, srcMin, srcMax, destMin, destMax) {
					srcMax = Math.max(srcMax, srcMin);
					srcMin = Math.min(srcMax, srcMin);
					destMin = Math.min(destMin, destMax);
					destMax = Math.max(destMin, destMax);
					return this.lerp(this.normalize(value, srcMin, srcMax), destMin, destMax);
				};
	
				/**
	    * @description Takes a value and returns a precentage.
	    *              you can pass arbitrary large numbers in but thats not
	    *              the intended purpose of this function.
	    * @param  {Float} val 	A value.
	    * @memberOf Utils
	    * @return {Percent}    A value.
	    */
				Utils.percent = function (val) {
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
				Utils.clamp = function (value, min, max) {
					return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
				};
	
				/**
	    * @memberOf  Utils
	    * @description Given two numbers return a random number between the two.
	    * @param  {Integer} x
	    * @param  {Integer} y
	    * @return {Integer}
	    */
				Utils.randomBetween = function (x, y) {
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
				Utils.distanceXY = function (x0, y0, x1, y1) {
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
				Utils.distanceVec = function (v1, v2) {
					var dVec = v1["-"](v2);
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
				Utils.inRange = function (val, min, max) {
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
				Utils.rangeIntersect = function (min0, max0, min1, max1) {
					return Math.max(max0, min0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(max1, min1);
				};
	
				/**
	    * @description Given twos vectors see if they intersect.
	    * @memberOf Utils
	    * @param  {Vector} vec0
	    * @param  {Vector} vec1
	    * @return {Boolean}
	    */
				Utils.vectorIntersect = function (vec0, vec1) {
					var x0 = vec0.get("x");
					var y0 = vec0.get("y");
					var x1 = vec1.get("x");
					var y1 = vec1.get("y");
					return this.rangeIntersect(x0, y0, x1, y1);
				};
	
				/**
	    * @description Given two rectange see if the intersect.
	    * @memberOf Utils
	    * @param  {Particle} r0
	    * @param  {Particle} r1
	    * @return {Boolean}
	    */
				Utils.collisionRect = function (r0, r1) {
					var r0x = r0.state.x;
					var r0y = r0.state.y;
					var r1x = r1.state.x;
					var r1y = r1.state.y;
	
					var r0w = r0x + r0.state.width;
					var r0h = r0y + r0.state.height;
					var r1w = r1x + r1.state.width;
					var r1h = r1y + r1.state.height;
	
					return this.rangeIntersect(r0x, r0w, r1x, r1w) && this.rangeIntersect(r0y, r0h, r1y, r1h);
				};
	
				/**
	    * @description Given to particle with radi return wether they collide are not
	    * @memberOf Utils
	    * @param  {Particle} c1
	    * @param  {Particle} c2
	    * @return {Boolean}
	    */
				Utils.collisionCircle = function (c1, c2) {
					var radi = c1.state.radius + c2.state.radius;
					var distance = this.distanceXY(c1.state.x, c1.state.y, c2.state.x, c2.state.y);
	
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
				Utils.collisionCirclePoint = function (x, y, circle) {
					// TODO Write tests.
					var dist = this.distanceXY(x, y, circle.state.x, circle.state.y);
					return circle.state.radius > dist;
				};
	
				/**
	    * @description detect a collision between circles a vector.
	    * @memberOf Utils
	    * @param  {Vector}   vec
	    * @param  {Particle} circle
	    * @return {Boolean}
	    */
				Utils.collisionCircleVec = function (vec, circle) {
					return circle.state.radius > this.distanceXY(vec.get("x"), vec.get("y"), circle.state.x, circle.state.y);
				};
	
				/**
	    * @description detect collision of a rectangle and a point.
	    * @memberOf Utils
	    * @param  {Number}   x
	    * @param  {Number}   y
	    * @param  {Particle} rect
	    * @return {Boolean}
	    */
				Utils.collisionRectPoint = function (x, y, rect) {
					var rectX = rect.state.x;
					var rectY = rect.state.y;
					return this.inRange(x, rectX, rectX + rect.state.width) && this.inRange(y, rectY, rectY + rect.state.height);
				};
	
				/**
	    * @description Given a vector and a retangle check wether they collided.
	    * @memberOf Utils
	    * @param  {Vector}   vec
	    * @param  {Particle} rect
	    * @return {Boolean}
	    */
				Utils.collisionRectVec = function (vec, rect) {
					return this.collisionRectPoint(vec.get("x"), vec.get("y"), rect);
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
				Utils.throttle = function throttle(func, wait, options) {
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
				Utils.setLength = function (length, x, y) {
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
				Utils.setAngle = function (angle, x, y) {
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
				Utils.degToRad = function (deg) {
					return deg / 180 * Math.PI;
				};
	
				/**
	    * @memberOf Utils
	    * @description Coverts radians to degress
	    * @param  {number} rad
	    * @return {number}
	    */
				Utils.radToDeg = function (rad) {
					return rad * 180 / Math.PI;
				};
	
				/**
	    * @memberOf Utils
	    * @description Round to nearest place given.
	    * @param  {number} val
	    * @param  {number} places An exponent
	    * @return {number}
	    */
				Utils.roundToPlaces = function (val, places) {
					var mult = Math.pow(10, places);
					return Math.round(val * mult) / mult;
				};
	
				/**
	    * @memberOf Utils
	    * @param  {number} val
	    * @param  {number} nearest
	    * @return {number}
	    */
				Utils.roundToMultiple = function (val, nearest) {
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
				Utils.quadraticBezier = function (v0, v1, v2, t) {
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
				Utils.cubicBezier = function (v0, v1, v2, v3, t) {
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
				Utils.quadraticBezierPoint = function (p0, p1, p2, t) {
					var x = this.quadraticBezier(p0.x, p1.x, p2.x, t);
					var y = this.quadraticBezier(p0.y, p1.y, p2.y, t);
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
				Utils.cubicBezierPoint = function (p0, p1, p2, p3, t) {
					x = this.cubicBezier(p0.x, p1.x, p2.x, t);
					y = this.cubicBezier(p0.y, p1.y, p2.y, t);
					return { x: x, y: y };
				};
	
				/**
	    * @memberOf Utils
	    * @description Given points on the plane draw a curved line between
	    * all of them.
	    * @param  {{number, number}} points
	    * @param  {CanvasRenderingContext2D} ctx
	    */
				Utils.multiCurve = function (points, ctx) {
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
				Utils.ease = function (ease, a, b) {
					// the delta can get extremely small and its not performant to keep
					// on rendering or calculating for animation purposes.
					if (Math.abs(b - a) < 0.1) {
						return false;
					}
	
					return (b - a) * ease;
				};
	
				Utils.easeTo = function (ease, origin, target) {
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
				Utils.isObject = function (data) {
					return (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && {}.toString.call(data) === "[object Object]";
				};
	
				/**
	    * unique return an array with no duplicate values
	    * @param  {Array} array
	    * @return {Array}
	    */
				Utils.unique = function (array) {
					return array.reduce(function (x, y) {
						if (x.indexOf(y) === -1) x.push(y);
						return x;
					}, []);
				};
	
				module.exports = Object.create(Utils);
	
				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				/* eslint max-len: 0 */
				/*
	   * The particle libary is used for physics animations.
	   * they are not extremely accurate but still represent
	   * and feel like physical movments.
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
				function Particle() {
					var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clone(INITIAL_STATE);
	
					this.state = state;
				}
	
				/**
	    * @description Create a particle given a direction and magnitude.
	    * @memberOf Particle
	    * @param  {Object}   opts optional state values to pass to create.
	    * @returns {Particle} returns a particle
	    */
				Particle.prototype.create = function () {
					var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clone(INITIAL_STATE);
	
					// Extend the optional state on to the default state.
					opts = extend(true, clone(INITIAL_STATE), opts);
	
					// Create particle with the new options.
					var particle = new Particle(opts);
	
					// Set length.
					particle.setSpeed(opts.magnitude);
	
					// Set angle.
					particle.setHeading(opts.direction);
	
					// Return new particle.
					return particle;
				};
	
				/**
	    * @description A change in velocity.
	    *
	    * @memberOf Particle
	    * @param  {Integer} ax
	    * @param  {Integer} ay
	    * @returns {Object} Acceleration vector.
	    */
				Particle.prototype.accelerate = function accelerate() {
					var ax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
					var ay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
					this.state.vx += ax;
					this.state.vy += ay;
					return { ax: ax, ay: ay };
				};
	
				/**
	    * @description A update a position of a particle
	    * based on its gravity and fricition. Gravity is usually a acceleration
	    * vector.
	    *
	    * @memberOf Particle
	    * @param  {Integer} fric Fricition to apply.
	    * @param  {Integer} grav Gravity to apply.
	    * @returns {Object} Position state.
	    */
				Particle.prototype.update = function update() {
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
				};
	
				/**
	    * @description sets the internal speed of the particle given the force
	    * @memberOf Particle
	    * @param {number} speed
	    */
				Particle.prototype.setSpeed = function setSpeed(speed) {
					var angle = this.getHeading();
					this.state.vx = Math.cos(angle) * speed;
					this.state.vy = Math.sin(angle) * speed;
				};
	
				/**
	    * @memberOf Particle
	    * @description sets the internal speed of the particle given the angle
	    * @param {number} angle
	    */
				Particle.prototype.setHeading = function setHeading(angle) {
					var speed = this.getSpeed();
					this.state.vx = Math.cos(angle) * speed;
					this.state.vy = Math.sin(angle) * speed;
				};
	
				/**
	    * @description get the length of the velocity vector.
	    * @memberOf Particle
	    * @param  {number} x
	    * @param  {number} y
	    * @returns {number} force of velocity vector.
	    */
				Particle.prototype.getSpeed = function getSpeed() {
					var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
					var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
					return Math.hypot(this.state.vx, this.state.vy);
				};
	
				/**
	    * @description get the angle of the velocity vector.
	    * @memberOf Particle
	    * @param  {number} x
	    * @param  {number} y
	    * @returns {number} angle of velocity vector.
	    */
				Particle.prototype.getHeading = function getHeading() {
					var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
					var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
					return Math.atan2(y, x);
				};
	
				/**
	    * @description add spring to springs array
	    * @memberOf Particle
	    * @param {Object} spring A spring object
	    * @returns {Object}
	    */
				Particle.prototype.addSpring = function addSpring(spring) {
					this.removeSpring(spring);
					this.state.springs.push(spring);
					return spring;
				};
	
				/**
	    * @description remove a specific string from the springs array
	    * @memberOf Particle
	    * @param  {Object} spring
	    */
				Particle.prototype.removeSpring = function removeSpring(_ref) {
					var p = _ref.point.state;
	
					var springs = this.state.springs;
	
					for (var i = 0; i < springs.length; i++) {
						if (p.x === springs[i].point.state.x && p.y === springs[i].point.state.y) {
							springs.splice(i, 1);
							break;
						}
					}
				};
	
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
	    * @param  {Particle} p2      A particle instance.
	    * @returns {Integer}  Angle   A angle.
	    */
				Particle.prototype.angleTo = function angelTo(_ref2) {
					var _ref2$state = _ref2.state,
					    x = _ref2$state.x,
					    y = _ref2$state.y;
					var _x$y = { x: x - this.state.x, y: y - this.state.y },
					    dx = _x$y.x,
					    dy = _x$y.y;
	
					return Math.atan2(dy, dx);
				};
	
				/**
	    * @description Assuming we know where both particle are on the canvas.
	    * we can use the distance formuale to figure out the distance
	    * between the two particles.
	    *
	    * @memberOf Particle
	    * @param  {Particle} p2      A particle instance
	    * @returns {Integer}  Angle   A Distance
	    */
				Particle.prototype.distanceTo = function distanceTo(_ref3) {
					var _ref3$state = _ref3.state,
					    x = _ref3$state.x,
					    y = _ref3$state.y;
					var _x$y2 = { x: x - this.state.x, y: y - this.state.y },
					    dx = _x$y2.x,
					    dy = _x$y2.y;
	
					return Math.hypot(dx, dy);
				};
	
				/**
	    * @memberOf Particle
	    * @description Append a particle to the masses array.
	    * @param {Particle} mass
	    */
				Particle.prototype.addMass = function (mass) {
					this.removeMass(mass);
					this.state.masses.push(mass);
				};
	
				/**
	    * @memberOf Particle
	    * @description Remove a particle for the masses array.
	    * @param  {Particle} mass
	    */
				Particle.prototype.removeMass = function (_ref4) {
					var mass = _ref4.state;
	
					var masses = this.state.masses;
	
					for (var i = 0; i < masses.length; i++) {
						if (mass.x === masses[i].state.x && mass.y === masses[i].state.y) {
							masses.splice(i, 1);
							break;
						}
					}
				};
	
				/**
	    * @memberOf Particle
	    * @description Applys gravitation to the input particle.
	    * @param  {Particle} p2
	    * @returns {Object}
	    */
				Particle.prototype.gravitateTo = function (p2) {
					var dx = p2.state.x - this.state.x;
					var dy = p2.state.y - this.state.y;
	
					// Distance between the two particles
					var distSQ = dx * dx + dy * dy;
					var dist = Math.sqrt(distSQ);
	
					// Magnitude of the vector [F = G(m1)(m2)/r^2]
					var force = p2.state.mass / distSQ;
	
					// Setting up angles of the vector
					var sin = dy / dist;
					var cos = dx / dist;
	
					// Setting vetor angle
					var ax = cos * force;
					var ay = sin * force;
	
					return this.accelerate(ax, ay);
				};
	
				// This generatorr function is pretty gross Miles fix this you lazy pile of developer.
				/**
	    * @memberOf Particle
	    * @description generate a bunch of particles.
	    * @param  {Number}                     num       The maximum amount of generated particles needed.
	    * @param  {Object}                     opts      Options to pass each particle
	    * @param  {Particle~generatorCallback} callback  Function to allow mapping.
	    * @returns {Particle[]}
	    */
				Particle.prototype.generator = function gen(num) {
					var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : clone(INITIAL_STATE);
					var callback = arguments[2];
	
					// Should not mutate the options after they have been given //
					Object.freeze(opts);
	
					var particles = [];
					var self = this;
	
					if (typeof callback === "function") {
						for (var i = 0; i < num; i++) {
							callback(opts, i, function (p) {
								if (!p) {
									console.log("No particle passed to generator. Will use default state.");
									var _newParticle = self.create(opts);
									particles.push(_newParticle);
									return _newParticle;
								}
	
								var newParticle = self.create(p);
								particles.push(newParticle);
								return newParticle;
							});
						}
					}
	
					if (!callback) {
						for (var _i = 0; _i < num; _i++) {
							particles.push(self.create(opts));
						}
					}
	
					return particles;
				};
	
				/**
	    * Generator callback
	    * @memberOf Particle
	    * @callback Particle~generatorCallback
	    * @param {Object} opts Options to be extend on to each particle.
	    * @param {Number} i Index of particle in Array.
	    * @param {Function} {} A call back to be called with the generated particle.
	    */
	
				/**
	    * @memberOf Particle
	    * @description Apply velocity to the position.
	    * @param  {Integer} vx
	    * @param  {Integer} vy
	    * @returns {Object} Position state after velocity has been applied
	    */
				Particle.prototype.updatePos = function updatePos(vx, vy) {
					if (vx === undefined && vy === undefined) {
						this.state.x += this.state.vx;
						this.state.y += this.state.vy;
						return { x: this.state.x, y: this.state.y };
					}
	
					this.state.x += vx;
					this.state.y += vy;
					return { x: this.state.x, y: this.state.y };
				};
	
				/**
	    * @memberOf Particle
	    * @description Given two particles calculate the
	    * spring force applied to both particles.
	    * @param  {Particle} p
	    * @param  {Integer}  spring  Given offset for the particles
	    * @param  {Integer}  offset  The spring coefficent
	    * @returns {Particle[]}
	    */
				Particle.prototype.springFromTo = function springFromTo(p) {
					var spring = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
					var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	
					// Postion delta
					var dx = p.state.x - this.state.x;
					var dy = p.state.y - this.state.y;
	
					// Setting up magnitude and angle of the vector
					var distance = Math.hypot(dx, dy);
					var springForce = (distance - offset) * spring;
	
					// Spring acceleration vector
					var sx = dx / distance * springForce;
					var sy = dy / distance * springForce;
	
					// Accelerate with the spring vector
					this.accelerate(sx, sy);
	
					// Accelerate the opposite direction.
					p.state.vx -= sx;
					p.state.vy -= sy;
	
					return [this, p];
				};
	
				/**
	    * @memberOf Particle
	    * @description Given a particle, a vector, and a spring coeffiencent accelerate
	    * the particle according to the distance its is from the point.
	    * @param  {Object} p A spring object.
	    * @returns {Particle}
	    */
				Particle.prototype.springToPoint = function springToPoint(p) {
					// Postion delta
					var dx = p.point.state.x - this.state.x;
					var dy = p.point.state.y - this.state.y;
	
					// Setting up magnitude and angle of the vector
					var distance = Math.hypot(dx, dy);
					var springForce = (distance - p.offset) * p.spring;
	
					// Spring acceleration vector
					var sx = dx / distance * springForce;
					var sy = dy / distance * springForce;
	
					// Accelerate with the spring vector
					this.accelerate(sx, sy);
	
					return [this, p];
				};
	
				/**
	    * @memberOf Particle
	    * @description Apply spring point to all internal springs.
	    * @param  {springs} springs An array of springs to spring to.
	    * @returns {Object[]}
	    */
				Particle.prototype.handleSprings = function handleSprings() {
					var springs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.springs;
	
					for (var i = 0; i < springs.length; i++) {
						this.springToPoint(springs[i]);
					}
					return springs;
				};
	
				/**
	    * @memberOf Particle
	    * @description For each mass in the masses array apply gravitate to it.
	    * @param  {Particles[]|Object[]} masses
	    * @returns {Particles[]|Object[]}
	    */
				Particle.prototype.handleMasses = function handleMasses() {
					var masses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.masses;
	
					for (var i = 0; i < masses.length; i++) {
						this.gravitateTo(masses[i]);
					}
					return masses;
				};
	
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
							var _step$value = _step.value,
							    px = _step$value.x,
							    py = _step$value.y;
	
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
	
				var extend = __webpack_require__(5);
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
	    console.log("load in iFrame");
	    // If the example already exsists dont do anything.
	    if (!exampleExists(id)) {
	      var _ret = function () {
	        // If we are not the first frame in the document.
	        if (!firstState) {
	          var _ret2 = function () {
	            console.log("Example doesn't exsist but we are the next iframe.");
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
	
	        console.log("Example doesn't exsist but we are the first iframe ever.");
	
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
	
	    console.log("Example already exsists dont do anything..");
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGM0NjIwZGY1ZTE1MTYzNDJhMmIiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGE5ODYzODBhYjI5OTgxYjc5NDllIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9tYWluLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdmVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9leHRlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvY2xvbmVEZWVwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVNYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hZGRTZXRFbnRyeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvc2hhcGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi9ldmVudC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL2Nsb2NrLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9pZnJhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvZG9tX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL3NoaW1zLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsInBhcnRpY2xlTGliIiwicmVxdWlyZSIsImlmcmFtZSIsImRvY3VtZW50Iiwic2hpbXMiLCJ1dGlscyIsIkRFRkFVTFRfRVhBTVBMRSIsInNldGhhc2giLCJmcmFnbWVudCIsImxvY2F0aW9uIiwiaGFzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRobmFtZSIsInRleHROb2RlcyIsIm1hcFRvVGV4dCIsIiQiLCJsZW5ndGgiLCJFcnJvciIsIm9uQ2xpY2tPZkxpc3QiLCJlbG1EZWxlZ2F0b3IiLCJpc0FuY2hvciIsImVsbSIsInRhZ05hbWUiLCJlcnIiLCJ0YXJnZXQiLCJldnQiLCJ0ZXh0IiwibG9hZEluSWZyYW1lIiwiaGFzaFF1ZXJ5Iiwic3Vic3RyIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJGSVJTVF9JRlJBTUUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaWZyYW1lSGFuZGxlciIsImRvbUhlbHBlciIsIiQkIiwiZmlyc3RTdGF0ZSIsImNoZWNrU3RhdHVzIiwicmVzIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImZldGNoRXhhbXBsZSIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsIndyaXRlRnJhbWUiLCJwYXJlbnQiLCJmcmFtZSIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0RnJhbWUiLCJuYW1lIiwiaW5qZWN0U3JjIiwic3JjIiwic3JjZG9jIiwiY3JlYXRlRnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRnJhbWVTcmMiLCJzcmNEb2MiLCJleGFtcGxlRXhpc3RzIiwiZXhhbXBsZSIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJlIiwiZXhpc3RpbmdGcmFtZSIsImxvYWRJZnJhbWVFcnJvciIsImZpcnN0RnJhbWUiLCJwYXJlbnREaXYiLCJuZXdGcmFtZSIsImVycm9yIiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwid2lkdGgiLCJpbnNlcnRBZGphY2VudFRleHQiLCJvYmoiLCJIVE1MRWxlbWVudCIsIm1hcFRleHQiLCJlbG1MaXN0IiwiaXRlbSIsInB1c2giLCJldmVudCIsImNoZWNrVGFyZ2V0IiwiY2FsbGJhY2siLCJwcmV2ZW50RGVmYXVsdCIsInFzIiwicXVl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VUFBTyxFQUFDL0UsSUFBRCxFQUFJdUIsTUFBSixFQUFQO0FBQ0QsRUFaRDtBQWFBLFkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGM0NjIwZGY1ZTE1MTYzNDJhMmIiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG5cbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy51cmwgPSBpbnB1dFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KCdcXHJcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwid2luZG93LnBhcnRpY2xlTGliID0gcmVxdWlyZShcInBhcnRpY2xlc1wiKTtcblxuY29uc3QgaWZyYW1lID0gcmVxdWlyZShcImlmcmFtZU1hbmFnZXIuanNcIikoZG9jdW1lbnQpO1xuY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwic2hpbXMuanNcIikoZG9jdW1lbnQpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiZG9tX2hlbHBlci5qc1wiKShkb2N1bWVudCk7XG5jb25zdCBERUZBVUxUX0VYQU1QTEUgPSBcInJhbmRvbV92ZWN0b3JzXCI7XG5cbmNvbnN0IHNldGhhc2ggPSAoZnJhZ21lbnQpID0+IHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gZnJhZ21lbnQgfHwgXCJcIjtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICBjb25zdCB0ZXh0Tm9kZXMgPSB1dGlscy5tYXBUb1RleHQoXCIubGlzdC1leGFtcGxlcyBsaSBhXCIpO1xuICBjb25zdCAkID0gc2hpbXMuJDtcblxuICBpZiAodGV4dE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlcyBubyB0ZXh0Tm9kZXMgdG8gY2hlY2sgYWdhaW5zdC5cIik7XG4gIH1cblxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gIGNhc2UoXCIvXCIpOiB7XG4gICAgYnJlYWs7XG4gIH1cbiAgY2FzZShcIi9leGFtcGxlc1wiKToge1xuICAgIGNvbnN0IG9uQ2xpY2tPZkxpc3QgPSB1dGlscy5lbG1EZWxlZ2F0b3IoJChcIi5saXN0LWV4YW1wbGVzXCIpLCBcImNsaWNrXCIpO1xuICAgIGNvbnN0IGlzQW5jaG9yID0gKGVsbSkgPT4gZWxtLnRhZ05hbWUgPT09IFwiQVwiO1xuXG4gICAgb25DbGlja09mTGlzdChpc0FuY2hvciwgZnVuY3Rpb24oZXJyLCB0YXJnZXQsIGV2dCkge1xuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICBzZXRoYXNoKHRhcmdldC50ZXh0KTtcbiAgICAgIGlmcmFtZS5sb2FkSW5JZnJhbWUodGFyZ2V0LnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlcmVzIGEgcGFnZSBmcmFnbWVudCBsb2FkIHRoZSByaWdodCBleGFtcGxlLlxuICAgIGlmIChoYXNoLmxlbmd0aCkge1xuICAgICAgY29uc3QgaGFzaFF1ZXJ5ID0gaGFzaC5zdWJzdHIoMSk7XG5cbiAgICAgIGlmICh0ZXh0Tm9kZXMuaW5kZXhPZihoYXNoUXVlcnkpID4gLTEpIHtcbiAgICAgICAgaWZyYW1lLmxvYWRJbklmcmFtZShoYXNoUXVlcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgLy8gRGVmYXVsdCB0byB0aGUgYW4gZXhhbXBsZSBpZiB0aGVyZXMgbm8gaGFzaC5cbiAgICBpZiAoaGFzaC5sZW5ndGggPCAxKSB7XG4gICAgICBzZXRoYXNoKERFRkFVTFRfRVhBTVBMRSk7XG4gICAgICBpZnJhbWUubG9hZEluSWZyYW1lKERFRkFVTFRfRVhBTVBMRSk7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvZG9jc1wiKToge1xuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvbWF0aHNcIik6IHtcbiAgICBicmVhaztcbiAgfVxuICBkZWZhdWx0OiB7XG4gICAgY29uc29sZS5sb2coXCJubyByb3V0ZSBtYXRjaGVkIDQwNCA6KFwiKTtcbiAgfVxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYXJ0aWNsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYXJ0aWNsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhOTg2MzgwYWIyOTk4MWI3OTQ5ZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi93ZWJwYWNrL2Jvb3RzdHJhcCBhOTg2MzgwYWIyOTk4MWI3OTQ5ZSIsImNvbnN0IFZlY3RvciA9IHJlcXVpcmUoXCIuL2xpYi92ZWN0b3JzXCIpO1xuY29uc3QgUGFydGljbGUgPSByZXF1aXJlKFwiLi9saWIvcGFydGljbGVcIik7XG5jb25zdCBVdGlscyA9IHJlcXVpcmUoXCIuL2xpYi91dGlsc1wiKTtcbmNvbnN0IFNoYXBlcyA9IHJlcXVpcmUoXCIuL2xpYi9zaGFwZXNcIik7XG5jb25zdCBZQVQgPSByZXF1aXJlKFwiLi9saWIvdHdlZW5cIik7XG5jb25zdCBDbG9jayA9IHJlcXVpcmUoXCIuL2xpYi9jbG9jay5qc1wiKTtcbmNvbnN0IFRpY2tlciA9IHJlcXVpcmUoXCIuL2xpYi90aWNrZXIuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBWZWN0b3IsXG4gIFBhcnRpY2xlLFxuICBVdGlscyxcbiAgU2hhcGVzLFxuICBZQVQsXG4gIFRpY2tlcixcbiAgQ2xvY2ssXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbWFpbi5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5cbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHg6IDAsXG4gIHk6IDEsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBWZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFZlY3RvcihzdGF0ZT1JTklUSUFMX1NUQVRFKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIC0gRWFzeSB3YXkgdG8gaW5zdGFudGlhdGUgYSB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHtJbnR9IHhcbiAqIEBwYXJhbSAge0ludH0geVxuICogQHJldHVybiB7VmVjdG9yfSAgIEEgb2JqZWN0IGluaGVyaXRpbmcgZnJvbSBWZWN0b3IuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHg9MCwgeT0wKSB7XG4gIGNvbnN0IHZlYyA9IG5ldyBWZWN0b3Ioe3gsIHl9KTtcbiAgcmV0dXJuIHZlYztcbn07XG5cbi8qKlxuICogU2V0IC0gQSBzZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHsqfSBwcm9wXG4gKiBAcGFyYW0gIHsqfSB2YWxcbiAqIEByZXR1cm4ge0Jvb2xlYW59IElzIHRoZSBwcm9wIHlvdXIgcGFzc2luZyBpbiBleHNpc3QuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3AsIHZhbCkge1xuICAvLyBUT0RPOiBBZGQgY2hlY2sgdmFsIGlzIG51bWJlclxuICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICB0aGlzLnN0YXRlW3Byb3BdID0gdmFsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBnZXQgLSBBIGdldHRlciBmb3IgdGhlIHZlY3RvciBjbGFzcy5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcCAgVGhlIHByb3AgdG8gc2V0IG9uIHN0YXRlLlxuICogQHJldHVybiB7VmFsdWV9ICAgICAgICBUaGUgdmFsdWUgYXNzb3NpYXRlZCB3aXRoIHRoZSBwcm9wLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChwcm9wKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlW3Byb3BdO1xufTtcblxuLyoqXG4gKiBzZXRBbmdsZSAtIFBsb3QgdGhlIGNvcnJkaW5hdGVzIGJhc2VkIG9uIHJhZGlhbnMgZ2l2ZW4uXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1JhZGlhbnN9IHJhZCBBIGZsb2F0aW5nIHBvaW50IG51bWJlci5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXRBbmdsZSA9IGZ1bmN0aW9uIHNldEFuZ2xlKHJhZCkge1xuICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gIHRoaXMuc2V0KFwieVwiLCBNYXRoLnNpbihyYWQpICogbGVuZ3RoKTtcbn07XG5cbi8qKlxuICogc2V0TGVuZ3RoIC0gVGFrZXMgYSBsZW5ndGggYW5kIHNldHMgY29vcmRpbmF0ZS5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7SW50ZWdlcn0gbGVuZ3RoXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc2V0TGVuZ3RoID0gZnVuY3Rpb24gc2V0TGVuZ3RoKGxlbmd0aCkge1xuICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgY29uc3QgcmFkID0gdGhpcy5nZXRBbmdsZSgpO1xuXG4gIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xufTtcblxuLyoqXG4gKiBnZXRMZW5ndGggLSBHZXRzIGxlbmd0aCBvZiB0aGUgY29vcmRpbmF0ZXMgZnJvbSBjZW50ZXIgcGxhbmUuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSBDb29yaWRpbmF0ZXMuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICBjb25zdCB4ID0gdGhpcy5nZXQoXCJ4XCIpO1xuICBjb25zdCB5ID0gdGhpcy5nZXQoXCJ5XCIpO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5KTtcbn07XG5cbi8qKlxuICogZ2V0QW5nbGUgLSBHZXQgdGhlIGFuZ2xlIG9mIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHJldHVybiB7SW50ZWdlcn0gQ29vcmlkaW5hdGVzLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24gZ2V0QW5nbGUoKSB7XG4gIGNvbnN0IHggPSB0aGlzLmdldChcInhcIik7XG4gIGNvbnN0IHkgPSB0aGlzLmdldChcInlcIik7XG4gIHJldHVybiBNYXRoLmF0YW4yKHksIHgpO1xufTtcblxuLyoqXG4gKiBhZGQgLSBTaG91bGQgYWRkIHZlY3RvcnMgdG9nZXRoZXIgZ2l2ZW4gYSB2ZWN0b3JcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSB2MiBBIGdpdmVuIHZlY3RvciB0byBhZGQuXG4gKiBAcmV0dXJuIHtWZWN0b3J9IEEgdmVjdG9yIHdpdGggY29vcmlkbmF0ZXMsIG9yIG11bHRpcGxlIHZlY3RvcnMuXG4gKi9cblxuVmVjdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQodjIpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHYyLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIiAmJiB2Mi5sZW5ndGgpIHtcbiAgICAvLyBSZWZhY3RvciB0byBtYWtlIG1vcmUgZWZmZWNpZW50IC8vXG4gICAgY29uc3QgdmVjcyA9IHYyXG4gICAgICAubWFwKCh2KSA9PiAoe3g6IHYuZ2V0KFwieFwiKSwgeTogdi5nZXQoXCJ5XCIpfSkpXG4gICAgICAucmVkdWNlKCh2MCwgdm4pID0+ICh7eDogdjAueCArIHZuLngsIHk6IHYwLnkgKyB2bi55fSksIHNlbGYuc3RhdGUpO1xuXG4gICAgcmV0dXJuIHNlbGYuY3JlYXRlKHZlY3MueCwgdmVjcy55KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICBzZWxmLmdldChcInhcIikgKyB2Mi5nZXQoXCJ4XCIpLFxuICAgIHNlbGYuZ2V0KFwieVwiKSArIHYyLmdldChcInlcIilcbiAgKTtcbn07XG5cbi8qKlxuICogc3VidHJhY3QgLSBzaG91bGQgc3VidHJhY3QgdGhlIGdpdmVuIHZlY3RvciB3aXRoIGl0cyBvd24gdmVjdG9yLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqIEBleGFtcGxlIHt4OiAyLCB5OiAyfSAtIHt4OiAyLCB5OiAyfSA9IHt4OiAwLCB5OiAwfVxuICovXG5WZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gc3VidHJhY3QodjIpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHYyLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIiAmJiB2Mi5sZW5ndGgpIHtcbiAgICAvLyBSZWZhY3RvciB0byBtYWtlIG1vcmUgZWZmZWNpZW50IC8vXG4gICAgY29uc3QgdmVjcyA9IHYyLm1hcCgodikgPT4gKHt4OiB2LmdldChcInhcIiksIHk6IHYuZ2V0KFwieVwiKX0pKVxuICAgIC5yZWR1Y2UoKHYwLCB2bikgPT5cbiAgICAgICh7eDogdjAueCAtIHZuLngsIHk6IHYwLnkgLSB2bi55fSksXG4gICAgc2VsZi5zdGF0ZSk7XG5cbiAgICByZXR1cm4gc2VsZi5jcmVhdGUodmVjcy54LCB2ZWNzLnkpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgIHNlbGYuZ2V0KFwieFwiKSAtIHYyLmdldChcInhcIiksXG4gICAgc2VsZi5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKVxuICApO1xufTtcblxuLyoqXG4gKiBNdWxpdHBseWluZyB2ZWN0b3JzIHRvZ2V0aGVyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAZXhhbXBsZSB7eDogMiwgeTogMn0gKiB7eDogMiwgeTogMn0gPSB7eDogNCwgeTogNH1cbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gICAgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiBtdWx0aXBseSh2Mikge1xuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKSxcbiAgICB0aGlzLmdldChcInlcIikgKiB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIERpdmlkZSB2ZWN0b3JzIHRvZ2V0aGVyLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSAgICBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiBkaXZpZGUodjIpIHtcbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgIHRoaXMuZ2V0KFwieFwiKSAvIHYyLmdldChcInhcIiksXG4gICAgdGhpcy5nZXQoXCJ5XCIpIC8gdjIuZ2V0KFwieVwiKVxuICApO1xufTtcblxuLyoqXG4gKiBBZGRzIHRvIGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLmFkZFRvID0gZnVuY3Rpb24gYWRkVG8odjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICsgdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0cyBmcm9tIGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0RnJvbSA9IGZ1bmN0aW9uIHN1YnRyYWN0RnJvbSh2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLSB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogbXVsaXRwbGllcyBieSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5ID0gZnVuY3Rpb24gbXVsdGlwbHlCeSh2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgKiB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgKiB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogRGl2aWRlcyBieSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeSA9IGZ1bmN0aW9uIGRpdmlkZUJ5KHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAvIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGFuZ2xlIEEgbnVtYmVyIG9mIHJhZGlhbnMgdG8gcm90YXRlIGNsb2Nrd2lzZSBieS5cbiovXG5WZWN0b3IucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKGRlbHRhKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4oZGVsdGEpO1xuXG4gIC8vXG4gIGNvbnN0IHggPSB0aGlzLnN0YXRlLnggKiBjb3MgLSB0aGlzLnN0YXRlLnkgKiBzaW47XG4gIGNvbnN0IHkgPSB0aGlzLnN0YXRlLnkgKiBjb3MgKyB0aGlzLnN0YXRlLnggKiBzaW47XG5cbiAgdGhpcy5zdGF0ZS54ID0geDtcbiAgdGhpcy5zdGF0ZS55ID0geTtcbn07XG5cbi8qKlxuICogcmFuZG9tIGdlbmVyYXRlIGEgdmVjdG9yIHdpdGggcmFuZG9tIHN0YXRlcy5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW4gLSBBIG1pbiByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggLSBBIG1heCByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiByVmVjdG9yKG1pbj0xLCBtYXg9MTApIHtcbiAgY29uc3QgeCA9IHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpO1xuICBjb25zdCB5ID0gdXRpbHMubGVycChNYXRoLnJhbmRvbSgpLCBtaW4sIG1heCk7XG4gIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQGRlc2NyaXB0aW9uIFJldHVybiBhIHZlY3RvciB0aGF0IGhhcyBhIHggYmV0d2VlbiB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKiAgICAgICAgICAgICAgYW5kIHkgZ2l2ZW4gYSByYW5nZS5cbiAqIEBwYXJhbSAge051bWJlcn0geE1pbiBNaW5tdW0geCB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSB4TWF4IE1heGltdW0geCB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSB5TWluIE1pbm11bSB5IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHlNYXggTWF4aW11bSB5IHZhbHVlXG4gKiBAcmV0dXJuIHtWZWN0b3J9XG4gKi9cblZlY3Rvci5wcm90b3R5cGUucmFuZG9tQmV0d2VlbiA9IGZ1bmN0aW9uIHJCZXR3ZWVuKHhNaW49MCwgeE1heD0xMCwgeU1pbj0wLCB5TWF4PTEwKSB7XG4gIHhNYXggPSBNYXRoLm1heCh4TWluLCB4TWF4KTtcbiAgeE1pbiA9IE1hdGgubWluKHhNaW4sIHhNYXgpO1xuICB5TWF4ID0gTWF0aC5tYXgoeU1pbiwgeU1heCk7XG4gIHlNaW4gPSBNYXRoLm1pbih5TWluLCB5TWF4KTtcblxuICBjb25zdCB5ID0gdXRpbHMucmFuZG9tQmV0d2Vlbih5TWluLCB5TWF4KTtcbiAgY29uc3QgeCA9IHV0aWxzLnJhbmRvbUJldHdlZW4oeE1pbiwgeE1heCk7XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKHgsIHkpO1xufTtcblxuVmVjdG9yLnByb3RvdHlwZVtcIitcIl0gPSBWZWN0b3IucHJvdG90eXBlLmFkZDtcblZlY3Rvci5wcm90b3R5cGVbXCItXCJdID0gVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdDtcblZlY3Rvci5wcm90b3R5cGVbXCIqXCJdID0gVmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseTtcblZlY3Rvci5wcm90b3R5cGVbXCIvXCJdID0gVmVjdG9yLnByb3RvdHlwZS5kaXZpZGU7XG5WZWN0b3IucHJvdG90eXBlW1wiKz1cIl0gPSBWZWN0b3IucHJvdG90eXBlLmFkZFRvO1xuVmVjdG9yLnByb3RvdHlwZVtcIi09XCJdID0gVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdEZyb207XG5WZWN0b3IucHJvdG90eXBlW1wiKj1cIl0gPSBWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5Qnk7XG5WZWN0b3IucHJvdG90eXBlW1wiLz1cIl0gPSBWZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdmVjdG9ycy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvdmVjdG9ycy5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgY29tcG9zZWQgb2Ygc21hbGwgZnVuY3Rpb24gdGhhdFxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBuZWVkZWQuIE1vc3QgZnVuY3Rpb25zIGFyZSBwdXJlXG4gKiBhbmQgb25seSByZXR1cm4gdmFsdWVzLiBGb3IgbW9yZSBpbmZvIHJlYWQgdGhlIGRvY3MuXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgVXRpbHNcbiAqIEByZXR1cm4ge1V0aWxzfVxuICovXG5jb25zdCBVdGlscyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbi8qKlxuICogbm9ybWFsaXplIC0gVGFrZXMgYSBtYXggYW5kIG1pbiB2YWx1ZSBhbmQgcmV0dXJuc1xuICogYSBmbG9hdGluZyBwb2ludCBudW1iZXIsIHRoYXQgd2hlbiBtdWx0aXBsaWVkXG4gKiBieSBvbmUgaHVuZHJlZCByZXByZXNlbnRzIGEgcHJlY2VudGFnZSBvZiB0aGUgcmFuZ2VcbiAqIGJldHdlZW4gbWF4IGFuZCBtaW4uXG4gKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtJbnR9IHZhbCAtIFRoZSB2YWx1ZSB0aGF0IGxpZXMgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7SW50fSBtaW4gLSBUaGUgbWF4aXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAqIEBwYXJhbSAge0ludH0gbWF4IC0gVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICogQHJldHVybiB7SW50fSBJbnQgLSBUaGUgdmFsdWUgcmVwcmVzZW50ZWQgaW4gdGhhdCByYW5nZS5cbiAqL1xuVXRpbHMubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuICh2YWwgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59O1xuXG4vKipcbiAqIGxlcnAgLSBsaW5lYXIgaW50ZXJwb2xhdGlvbiB0YWtlcyBhIHJhbmdlIGFuZCBhIGdpdmVuIG5vcm1hbGl6ZWQgdmFsdWVcbiAqIGFuZCByZXR1cm5zIGEgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoYXQgbm9ybWFsaXplZCB2YWx1ZSBpbiB0aGF0IHJhbmdlLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtJbnRlcmdlcn0gdmFsXG4gKiBAcGFyYW0gIHtJbnRlcmdlcn0gbWluXG4gKiBAcGFyYW0gIHtJbnRlcmdlcn0gbWF4XG4gKiBAcmV0dXJuIHtJbnRlcmdlcn1cbiAqL1xuVXRpbHMubGVycCA9IGZ1bmN0aW9uIGxlcnAodmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gKG1heCAtIG1pbikgKiB2YWwgKyBtaW47XG59O1xuXG4vKipcbiAqIG1hcCAtIEdpdmVuIDIgc2V0IG9mIHZhbHVlcyBtYXAgdGhlbSB0byBhbm90aGVyIHNldC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNaW5cbiAqIEBwYXJhbSAge251bWJlcn0gc3JjTWF4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRlc3RNaW5cbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5tYXAgPSBmdW5jdGlvbiBtYXAodmFsdWUsIHNyY01pbiwgc3JjTWF4LCBkZXN0TWluLCBkZXN0TWF4KSB7XG4gIHNyY01heCA9IE1hdGgubWF4KHNyY01heCwgc3JjTWluKTtcbiAgc3JjTWluID0gTWF0aC5taW4oc3JjTWF4LCBzcmNNaW4pO1xuICBkZXN0TWluID0gTWF0aC5taW4oZGVzdE1pbiwgZGVzdE1heCk7XG4gIGRlc3RNYXggPSBNYXRoLm1heChkZXN0TWluLCBkZXN0TWF4KTtcbiAgcmV0dXJuIHRoaXMubGVycCh0aGlzLm5vcm1hbGl6ZSh2YWx1ZSwgc3JjTWluLCBzcmNNYXgpLCBkZXN0TWluLCBkZXN0TWF4KTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBwcmVjZW50YWdlLlxuICogICAgICAgICAgICAgIHlvdSBjYW4gcGFzcyBhcmJpdHJhcnkgbGFyZ2UgbnVtYmVycyBpbiBidXQgdGhhdHMgbm90XG4gKiAgICAgICAgICAgICAgdGhlIGludGVuZGVkIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge0Zsb2F0fSB2YWwgXHRBIHZhbHVlLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcmV0dXJuIHtQZXJjZW50fSAgICBBIHZhbHVlLlxuICovXG5VdGlscy5wZXJjZW50ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB2YWwgKiAxMDA7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIG51bWJlciBhbmQgYSByYW5nZSByZXR1cm4gdGhlXG4gKiAgICAgICAgICAgICAgdmFsdWUgYmV0d2VlbiB0aGF0IHJhbmdlIG9yIHRoZSBtYXggbnVtYmVyIG9yIG1pbiBudW1iZXIuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5VdGlscy5jbGFtcCA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKG1pbiwgbWF4KSksIE1hdGgubWF4KG1pbiwgbWF4KSk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiAgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gbnVtYmVycyByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJldHdlZW4gdGhlIHR3by5cbiAqIEBwYXJhbSAge0ludGVnZXJ9IHhcbiAqIEBwYXJhbSAge0ludGVnZXJ9IHlcbiAqIEByZXR1cm4ge0ludGVnZXJ9XG4gKi9cblV0aWxzLnJhbmRvbUJldHdlZW4gPSBmdW5jdGlvbih4LCB5KSB7XG4gIGxldCBtaW4gPSBNYXRoLm1pbih4LCB5KTtcbiAgbGV0IG1heCA9IE1hdGgubWF4KHgsIHkpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIGNvb3JkaW5hdGVzIHJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHgwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHgxXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkxXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblV0aWxzLmRpc3RhbmNlWFkgPSBmdW5jdGlvbih4MCwgeTAsIHgxLCB5MSkge1xuICBjb25zdCBkeCA9IHgwIC0geDE7XG4gIGNvbnN0IGR5ID0geTAgLSB5MTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZHgsIGR5KTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byB2ZWN0b3JzIHJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYxXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblV0aWxzLmRpc3RhbmNlVmVjID0gZnVuY3Rpb24odjEsIHYyKSB7XG4gIGNvbnN0IGRWZWMgPSAodjEpW1wiLVwiXSh2Mik7XG4gIHJldHVybiBNYXRoLmh5cG90KGRWZWMuZ2V0KFwieFwiKSwgZFZlYy5nZXQoXCJ5XCIpKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGdpdmVuIGEgbnVtYmVyXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gdmFsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmluUmFuZ2UgPSBmdW5jdGlvbih2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsIDw9IE1hdGgubWF4KG1heCwgbWluKSkgJiYgKE1hdGgubWluKG1heCwgbWluKSA8PSB2YWwpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSB0d28gcmFuZ2VzIHNlZSBpZiBib3RoIGludGVyc2VjdCBlYWNoIG90aGVyLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pbjBcbiAqIEBwYXJhbSAge051bWJlcn0gbWF4MFxuICogQHBhcmFtICB7TnVtYmVyfSBtaW4xXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heDFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLnJhbmdlSW50ZXJzZWN0ID0gZnVuY3Rpb24obWluMCwgbWF4MCwgbWluMSwgbWF4MSkge1xuICByZXR1cm4gKFxuICAgIE1hdGgubWF4KG1heDAsIG1pbjApID49IE1hdGgubWluKG1pbjEsIG1heDEpICYmXG4gICAgTWF0aC5taW4obWluMCwgbWF4MCkgPD0gTWF0aC5tYXgobWF4MSwgbWluMSlcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3b3MgdmVjdG9ycyBzZWUgaWYgdGhleSBpbnRlcnNlY3QuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMFxuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMxXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy52ZWN0b3JJbnRlcnNlY3QgPSBmdW5jdGlvbih2ZWMwLCB2ZWMxKSB7XG4gIGNvbnN0IHgwID0gdmVjMC5nZXQoXCJ4XCIpO1xuICBjb25zdCB5MCA9IHZlYzAuZ2V0KFwieVwiKTtcbiAgY29uc3QgeDEgPSB2ZWMxLmdldChcInhcIik7XG4gIGNvbnN0IHkxID0gdmVjMS5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5yYW5nZUludGVyc2VjdCh4MCwgeTAsIHgxLCB5MSk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gcmVjdGFuZ2Ugc2VlIGlmIHRoZSBpbnRlcnNlY3QuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByMFxuICogQHBhcmFtICB7UGFydGljbGV9IHIxXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25SZWN0ID0gZnVuY3Rpb24ocjAsIHIxKSB7XG4gIGNvbnN0IHIweCA9IHIwLnN0YXRlLng7XG4gIGNvbnN0IHIweSA9IHIwLnN0YXRlLnk7XG4gIGNvbnN0IHIxeCA9IHIxLnN0YXRlLng7XG4gIGNvbnN0IHIxeSA9IHIxLnN0YXRlLnk7XG5cbiAgY29uc3QgcjB3ID0gcjB4ICsgcjAuc3RhdGUud2lkdGg7XG4gIGNvbnN0IHIwaCA9IHIweSArIHIwLnN0YXRlLmhlaWdodDtcbiAgY29uc3QgcjF3ID0gcjF4ICsgcjEuc3RhdGUud2lkdGg7XG4gIGNvbnN0IHIxaCA9IHIxeSArIHIxLnN0YXRlLmhlaWdodDtcblxuICByZXR1cm4gKFxuICAgIHRoaXMucmFuZ2VJbnRlcnNlY3QocjB4LCByMHcsIHIxeCwgcjF3KSAmJlxuICAgIHRoaXMucmFuZ2VJbnRlcnNlY3QocjB5LCByMGgsIHIxeSwgcjFoKVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdG8gcGFydGljbGUgd2l0aCByYWRpIHJldHVybiB3ZXRoZXIgdGhleSBjb2xsaWRlIGFyZSBub3RcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7UGFydGljbGV9IGMxXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gYzJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvbkNpcmNsZSA9IGZ1bmN0aW9uKGMxLCBjMikge1xuICBjb25zdCByYWRpID0gKGMxLnN0YXRlLnJhZGl1cyArIGMyLnN0YXRlLnJhZGl1cyk7XG4gIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZVhZKGMxLnN0YXRlLngsIGMxLnN0YXRlLnksIGMyLnN0YXRlLngsIGMyLnN0YXRlLnkpO1xuXG4gIGlmIChkaXN0YW5jZSkge1xuICAgIHJldHVybiByYWRpID4gZGlzdGFuY2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHBvaW50IGFuZCBhIGNpcmNsZSByZXR1cm4gYSBib29sZWFuIHJlZ2FyZGluZyB3ZXRoZXIgdGhleSBhcmUgY29sbGlkaW5nLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeFxuICogQHBhcmFtICB7TnVtYmVyfSAgIHlcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjaXJjbGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvbkNpcmNsZVBvaW50ID0gZnVuY3Rpb24oeCwgeSwgY2lyY2xlKSB7XG4gIC8vIFRPRE8gV3JpdGUgdGVzdHMuXG4gIGNvbnN0IGRpc3QgPSB0aGlzLmRpc3RhbmNlWFkoXG4gICAgeCxcbiAgICB5LFxuICAgIGNpcmNsZS5zdGF0ZS54LFxuICAgIGNpcmNsZS5zdGF0ZS55XG4gICk7XG4gIHJldHVybiBjaXJjbGUuc3RhdGUucmFkaXVzID4gZGlzdDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGRldGVjdCBhIGNvbGxpc2lvbiBiZXR3ZWVuIGNpcmNsZXMgYSB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gICB2ZWNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjaXJjbGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvbkNpcmNsZVZlYyA9IGZ1bmN0aW9uKHZlYywgY2lyY2xlKSB7XG4gIHJldHVybiBjaXJjbGUuc3RhdGUucmFkaXVzID4gdGhpcy5kaXN0YW5jZVhZKFxuICAgIHZlYy5nZXQoXCJ4XCIpLFxuICAgIHZlYy5nZXQoXCJ5XCIpLFxuICAgIGNpcmNsZS5zdGF0ZS54LFxuICAgIGNpcmNsZS5zdGF0ZS55XG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgY29sbGlzaW9uIG9mIGEgcmVjdGFuZ2xlIGFuZCBhIHBvaW50LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeFxuICogQHBhcmFtICB7TnVtYmVyfSAgIHlcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25SZWN0UG9pbnQgPSBmdW5jdGlvbih4LCB5LCByZWN0KSB7XG4gIGNvbnN0IHJlY3RYID0gcmVjdC5zdGF0ZS54O1xuICBjb25zdCByZWN0WSA9IHJlY3Quc3RhdGUueTtcbiAgcmV0dXJuIChcbiAgICB0aGlzLmluUmFuZ2UoeCwgcmVjdFgsIHJlY3RYICsgcmVjdC5zdGF0ZS53aWR0aCkgJiZcbiAgICB0aGlzLmluUmFuZ2UoeSwgcmVjdFksIHJlY3RZICsgcmVjdC5zdGF0ZS5oZWlnaHQpXG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHZlY3RvciBhbmQgYSByZXRhbmdsZSBjaGVjayB3ZXRoZXIgdGhleSBjb2xsaWRlZC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSAgIHZlY1xuICogQHBhcmFtICB7UGFydGljbGV9IHJlY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvblJlY3RWZWMgPSBmdW5jdGlvbih2ZWMsIHJlY3QpIHtcbiAgcmV0dXJuIHRoaXMuY29sbGlzaW9uUmVjdFBvaW50KHZlYy5nZXQoXCJ4XCIpLCB2ZWMuZ2V0KFwieVwiKSwgcmVjdCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIFJ1biBhIGZ1bmN0aW9uIG9ubHkgaWYgdGhlIGdpdmVuIHRpbWUgdG8gYWxsb3cgdGhlIGZ1bmN0aW9uIGV4ZWN1dGVcbiAqIGhhcyBwYXNzZWQuIElmXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZnVuYyBBIGZ1bmN0aW9uIHRvIGNhbGwgZXZlcnkgZGVsdGEuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHdhaXQgVGhlIG1pbmltdW0gdGltZSB0byB3YWl0LlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgdW5kZXJzY29yZVxuICovXG5VdGlscy50aHJvdHRsZSA9IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgbGV0IGNvbnRleHQ7XG4gIGxldCBhcmdzO1xuICBsZXQgcmVzdWx0O1xuICBsZXQgdGltZW91dCA9IG51bGw7XG4gIGxldCBwcmV2aW91cyA9IDA7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBEYXRlLm5vdygpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgbGV0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICBsZXQgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3M7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gLSBTZXR0aW5nIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4gIHtudW1iZXJbXX0gQ29vcmRpbmF0ZXNcbiAqL1xuVXRpbHMuc2V0TGVuZ3RoID0gZnVuY3Rpb24obGVuZ3RoLCB4LCB5KSB7XG4gIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIHkgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiBsZW5ndGggIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCB4IGFuZCB5IHZhbHVlc1wiKTtcbiAgfVxuXG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KTtcbiAgeCA9IE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aDtcbiAgeSA9IE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aDtcblxuICByZXR1cm4gW3gsIHldO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiAtIFNldHRpbmcgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yLlxuICogQHBhcmFtICAge251bWJlcn0gYW5nbGVcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4gIHtudW1iZXJbXX0gY29vcmRpbmF0ZXNcbiAqL1xuVXRpbHMuc2V0QW5nbGUgPSBmdW5jdGlvbihhbmdsZSwgeCwgeSkge1xuICBpZiAodHlwZW9mIHggIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiB5ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgYW5nbGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCB4IGFuZCB5IHZhbHVlc1wiKTtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoeCwgeSk7XG4gIHggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gIHkgPSBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGg7XG5cbiAgcmV0dXJuIFt4LCB5XTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gQ292ZXJ0cyBkZWdyZWVzIHRvIHJhZGlhbnNcbiAqIEBwYXJhbSAge251bWJlcn0gZGVnIERlZ3Jlc3NcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMuZGVnVG9SYWQgPSBmdW5jdGlvbihkZWcpIHtcbiAgcmV0dXJuIGRlZyAvIDE4MCAqIE1hdGguUEk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIENvdmVydHMgcmFkaWFucyB0byBkZWdyZXNzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHJhZFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5yYWRUb0RlZyA9IGZ1bmN0aW9uKHJhZCkge1xuICByZXR1cm4gcmFkICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gUm91bmQgdG8gbmVhcmVzdCBwbGFjZSBnaXZlbi5cbiAqIEBwYXJhbSAge251bWJlcn0gdmFsXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBsYWNlcyBBbiBleHBvbmVudFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5yb3VuZFRvUGxhY2VzID0gZnVuY3Rpb24odmFsLCBwbGFjZXMpIHtcbiAgY29uc3QgbXVsdCA9IE1hdGgucG93KDEwLCBwbGFjZXMpO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiBtdWx0KSAvIG11bHQ7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge251bWJlcn0gbmVhcmVzdFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5yb3VuZFRvTXVsdGlwbGUgPSBmdW5jdGlvbih2YWwsIG5lYXJlc3QpIHtcbiAgaWYgKCFuZWFyZXN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90aGluZyBjYW4gYmUgYSBtdWx0aXBsZSBvZiBcIiArIFN0cmluZyhuZWFyZXN0KSk7XG4gIH1cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsIC8gbmVhcmVzdCkgKiBuZWFyZXN0O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gdjBcbiAqIEBwYXJhbSAge251bWJlcn0gdjFcbiAqIEBwYXJhbSAge251bWJlcn0gdjJcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7bnVtYmVyfSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMucXVhZHJhdGljQmV6aWVyID0gZnVuY3Rpb24odjAsIHYxLCB2MiwgdCkge1xuICByZXR1cm4gTWF0aC5wb3coMSAtIHQsIDIpICogdjAgKyAoMSAtIHQpICogMiAqIHQgKiB2MSArIHQgKiB0ICogdjI7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2MFxuICogQHBhcmFtICB7bnVtYmVyfSB2MVxuICogQHBhcmFtICB7bnVtYmVyfSB2MlxuICogQHBhcmFtICB7bnVtYmVyfSB2M1xuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5jdWJpY0JlemllciA9IGZ1bmN0aW9uKHYwLCB2MSwgdjIsIHYzLCB0KSB7XG4gIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMykgKiB2MCArXG4gICAgICAgICBNYXRoLnBvdygxIC0gdCwgMikgKiAzICogdCAqIHYxICtcbiAgICAgICAgICgxIC0gdCkgKiAzICogdCAqIHQgKiB2MiArXG4gICAgICAgICB0ICogdCAqIHQgKyB2Mztcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge09iamVjdH0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLnF1YWRyYXRpY0JlemllclBvaW50ID0gZnVuY3Rpb24ocDAsIHAxLCBwMiwgdCkge1xuICBjb25zdCB4ID0gdGhpcy5xdWFkcmF0aWNCZXppZXIocDAueCwgcDEueCwgcDIueCwgdCk7XG4gIGNvbnN0IHkgPSB0aGlzLnF1YWRyYXRpY0JlemllcihwMC55LCBwMS55LCBwMi55LCB0KTtcbiAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge09iamVjdH0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLmN1YmljQmV6aWVyUG9pbnQgPSBmdW5jdGlvbihwMCwgcDEsIHAyLCBwMywgdCkge1xuICB4ID0gdGhpcy5jdWJpY0JlemllcihwMC54LCBwMS54LCBwMi54LCB0KTtcbiAgeSA9IHRoaXMuY3ViaWNCZXppZXIocDAueSwgcDEueSwgcDIueSwgdCk7XG4gIHJldHVybiB7eCwgeX07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIEdpdmVuIHBvaW50cyBvbiB0aGUgcGxhbmUgZHJhdyBhIGN1cnZlZCBsaW5lIGJldHdlZW5cbiAqIGFsbCBvZiB0aGVtLlxuICogQHBhcmFtICB7e251bWJlciwgbnVtYmVyfX0gcG9pbnRzXG4gKiBAcGFyYW0gIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxuICovXG5VdGlscy5tdWx0aUN1cnZlID0gZnVuY3Rpb24ocG9pbnRzLCBjdHgpIHtcbiAgbGV0IHAwO1xuICBsZXQgcDE7XG4gIGxldCBtaWRYO1xuICBsZXQgbWlkWTtcblxuICBjdHgubW92ZVRvKHBvaW50c1swXS54LCBwb2ludHNbMF0ueSk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgcDAgPSBwb2ludHNbaV07XG4gICAgcDEgPSBwb2ludHNbaSArIDFdO1xuICAgIG1pZFggPSAocDAueCArIHAxLngpLzI7XG4gICAgbWlkWSA9IChwMC55ICsgcDEueSkvMjtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhwMC54LCBwMC55LCBtaWRYLCBtaWRZKTtcbiAgfVxuXG4gIHAwID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAyXTtcbiAgcDEgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuICBjdHgucXVhZHJhdGljQ3VydmVUbyhwMC54LCBwMC55LCBwMS54LCBwMS55KTtcbn07XG5cbi8qKlxuICogZWFzZVxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtGbG9hdH0gZWFzZSBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtJbnR9IGEgICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7SW50fSBiICAgIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge0ludH0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cblV0aWxzLmVhc2UgPSBmdW5jdGlvbihlYXNlLCBhLCBiKSB7XG4gIC8vIHRoZSBkZWx0YSBjYW4gZ2V0IGV4dHJlbWVseSBzbWFsbCBhbmQgaXRzIG5vdCBwZXJmb3JtYW50IHRvIGtlZXBcbiAgLy8gb24gcmVuZGVyaW5nIG9yIGNhbGN1bGF0aW5nIGZvciBhbmltYXRpb24gcHVycG9zZXMuXG4gIGlmIChNYXRoLmFicyhiIC0gYSkgPCAwLjEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKGIgLSBhKSAqIGVhc2U7XG59O1xuXG5VdGlscy5lYXNlVG8gPSBmdW5jdGlvbihlYXNlLCBvcmlnaW4sIHRhcmdldCwgdGhyZXNob2xkPTAuMSkge1xuICBjb25zdCBkeCA9IHRhcmdldC54IC0gb3JpZ2luLng7XG4gIGNvbnN0IGR5ID0gdGFyZ2V0LnkgLSBvcmlnaW4ueTtcblxuICAvLyB0aGUgZGVsdGEgY2FuIGdldCBleHRyZW1lbHkgc21hbGwgYW5kIGl0cyBub3QgcGVyZm9ybWFudCB0byBrZWVwXG4gIC8vIG9uIHJlbmRlcmluZyBvciBjYWxjdWxhdGluZyBmb3IgYW5pbWF0aW9uIHB1cnBvc2VzLlxuICBpZiAoTWF0aC5hYnMoZHgpIDwgdGhyZXNob2xkICYmIE1hdGguYWJzKGR5KSA8IHRocmVzaG9sZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9yaWdpbi54ICs9IGR4ICogZWFzZTtcbiAgb3JpZ2luLnkgKz0gZHkgKiBlYXNlO1xuXG4gIHJldHVybiBvcmlnaW47XG59O1xuXG4vKipcbiAqIGlzUGxhaW5PYmplY3RcbiAqIEBwYXJhbSAgeyp9ICBkYXRhXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5pc09iamVjdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmICh7fSkudG9TdHJpbmcuY2FsbChkYXRhKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbn07XG5cbi8qKlxuICogdW5pcXVlIHJldHVybiBhbiBhcnJheSB3aXRoIG5vIGR1cGxpY2F0ZSB2YWx1ZXNcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblV0aWxzLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKHgsIHkpID0+IHtcbiAgICBpZiAoeC5pbmRleE9mKHkpID09PSAtMSkgeC5wdXNoKHkpO1xuICAgIHJldHVybiB4O1xuICB9LCBbXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUoVXRpbHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91dGlscy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvdXRpbHMuanMiLCIvKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuLypcbiogVGhlIHBhcnRpY2xlIGxpYmFyeSBpcyB1c2VkIGZvciBwaHlzaWNzIGFuaW1hdGlvbnMuXG4qIHRoZXkgYXJlIG5vdCBleHRyZW1lbHkgYWNjdXJhdGUgYnV0IHN0aWxsIHJlcHJlc2VudFxuKiBhbmQgZmVlbCBsaWtlIHBoeXNpY2FsIG1vdm1lbnRzLlxuKi9cblxuY29uc3QgZXh0ZW5kID0gcmVxdWlyZShcImV4dGVuZFwiKTtcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG4vKiBUaGUgZGVmYXVsdCBzdGF0ZSBhIHBhcnRpY2xlIHN0YXJ0cyB3aXRoIEl0IHNob3VsZCBub3QgbW92ZS4gKi9cblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgdng6IDAsXG4gIHZ5OiAwLFxuICBncmF2aXR5OiAwLFxuICBtYWduaXR1ZGU6IDAsXG4gIHJhZGl1czogMSxcbiAgbWFzczogMSxcbiAgZGlyZWN0aW9uOiBNYXRoLlBJICogMixcbiAgZnJpY3Rpb246IDEsXG4gIHNwcmluZ3M6IFtdLFxuICBtYXNzZXM6IFtdLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgUGFydGljbGVcbiAqIEBwYXJhbSB7c3RhdGV9IHN0YXRlIGluaXRpYWwgc3RhdGUgdG8gcGFzcyB0aGUgY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFydGljbGUoc3RhdGU9Y2xvbmUoSU5JVElBTF9TVEFURSkpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBwYXJ0aWNsZSBnaXZlbiBhIGRpcmVjdGlvbiBhbmQgbWFnbml0dWRlLlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgb3B0cyBvcHRpb25hbCBzdGF0ZSB2YWx1ZXMgdG8gcGFzcyB0byBjcmVhdGUuXG4gKiBAcmV0dXJucyB7UGFydGljbGV9IHJldHVybnMgYSBwYXJ0aWNsZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz1jbG9uZShJTklUSUFMX1NUQVRFKSkge1xuICAvLyBFeHRlbmQgdGhlIG9wdGlvbmFsIHN0YXRlIG9uIHRvIHRoZSBkZWZhdWx0IHN0YXRlLlxuICBvcHRzID0gZXh0ZW5kKHRydWUsIGNsb25lKElOSVRJQUxfU1RBVEUpLCBvcHRzKTtcblxuICAvLyBDcmVhdGUgcGFydGljbGUgd2l0aCB0aGUgbmV3IG9wdGlvbnMuXG4gIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKG9wdHMpO1xuXG4gIC8vIFNldCBsZW5ndGguXG4gIHBhcnRpY2xlLnNldFNwZWVkKG9wdHMubWFnbml0dWRlKTtcblxuICAvLyBTZXQgYW5nbGUuXG4gIHBhcnRpY2xlLnNldEhlYWRpbmcob3B0cy5kaXJlY3Rpb24pO1xuXG4gIC8vIFJldHVybiBuZXcgcGFydGljbGUuXG4gIHJldHVybiBwYXJ0aWNsZTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEEgY2hhbmdlIGluIHZlbG9jaXR5LlxuICpcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7SW50ZWdlcn0gYXhcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGF5XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBY2NlbGVyYXRpb24gdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYWNjZWxlcmF0ZSA9IGZ1bmN0aW9uIGFjY2VsZXJhdGUoYXg9dGhpcy5zdGF0ZS52eCwgYXk9dGhpcy5zdGF0ZS52eSkge1xuICB0aGlzLnN0YXRlLnZ4ICs9IGF4O1xuICB0aGlzLnN0YXRlLnZ5ICs9IGF5O1xuICByZXR1cm4ge2F4LCBheX07XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBIHVwZGF0ZSBhIHBvc2l0aW9uIG9mIGEgcGFydGljbGVcbiAqIGJhc2VkIG9uIGl0cyBncmF2aXR5IGFuZCBmcmljaXRpb24uIEdyYXZpdHkgaXMgdXN1YWxseSBhIGFjY2VsZXJhdGlvblxuICogdmVjdG9yLlxuICpcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7SW50ZWdlcn0gZnJpYyBGcmljaXRpb24gdG8gYXBwbHkuXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSBncmF2IEdyYXZpdHkgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQb3NpdGlvbiBzdGF0ZS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShmcmljPXRoaXMuc3RhdGUuZnJpY3Rpb24sIGdyYXY9dGhpcy5zdGF0ZS5ncmF2aXR5KSB7XG4gIC8vIEFwcGx5IHNwcmluZ3NcbiAgdGhpcy5oYW5kbGVTcHJpbmdzKCk7XG5cbiAgLy8gQXBwbHkgZ3Jhdml0YXRpb25zXG4gIHRoaXMuaGFuZGxlTWFzc2VzKCk7XG5cbiAgLy8gQXBwbHkgZmFrZSBmcmljaXRpb24gdG8gdmVsb2NpdHlcbiAgdGhpcy5zdGF0ZS52eCAqPSBmcmljO1xuICB0aGlzLnN0YXRlLnZ5ICo9IGZyaWM7XG5cbiAgLy8gQXBwbHkgZ3Jhdml0eSB0byB2ZWxvY2l0eVxuICB0aGlzLmFjY2VsZXJhdGUoMCwgZ3Jhdik7XG5cbiAgLy8gVXBkYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFjY2VsZXJhdGlvblxuICByZXR1cm4gdGhpcy51cGRhdGVQb3MoKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHNldHMgdGhlIGludGVybmFsIHNwZWVkIG9mIHRoZSBwYXJ0aWNsZSBnaXZlbiB0aGUgZm9yY2VcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zZXRTcGVlZCA9IGZ1bmN0aW9uIHNldFNwZWVkKHNwZWVkKSB7XG4gIGNvbnN0IGFuZ2xlID0gdGhpcy5nZXRIZWFkaW5nKCk7XG4gIHRoaXMuc3RhdGUudnggPSBNYXRoLmNvcyhhbmdsZSkgKiBzcGVlZDtcbiAgdGhpcy5zdGF0ZS52eSA9IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBzZXRzIHRoZSBpbnRlcm5hbCBzcGVlZCBvZiB0aGUgcGFydGljbGUgZ2l2ZW4gdGhlIGFuZ2xlXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNldEhlYWRpbmcgPSBmdW5jdGlvbiBzZXRIZWFkaW5nKGFuZ2xlKSB7XG4gIGNvbnN0IHNwZWVkID0gdGhpcy5nZXRTcGVlZCgpO1xuICB0aGlzLnN0YXRlLnZ4ID0gTWF0aC5jb3MoYW5nbGUpICogc3BlZWQ7XG4gIHRoaXMuc3RhdGUudnkgPSBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWxvY2l0eSB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge251bWJlcn0geFxuICogQHBhcmFtICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBmb3JjZSBvZiB2ZWxvY2l0eSB2ZWN0b3IuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5nZXRTcGVlZCA9IGZ1bmN0aW9uIGdldFNwZWVkKHg9dGhpcy5zdGF0ZS52eCwgeT10aGlzLnN0YXRlLnZ5KSB7XG4gIHJldHVybiBNYXRoLmh5cG90KHRoaXMuc3RhdGUudngsIHRoaXMuc3RhdGUudnkpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBhbmdsZSBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yLlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAge251bWJlcn0geVxuICogQHJldHVybnMge251bWJlcn0gYW5nbGUgb2YgdmVsb2NpdHkgdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2V0SGVhZGluZyA9IGZ1bmN0aW9uIGdldEhlYWRpbmcoeD10aGlzLnN0YXRlLnZ4LCB5PXRoaXMuc3RhdGUudnkpIHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBhZGQgc3ByaW5nIHRvIHNwcmluZ3MgYXJyYXlcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtIHtPYmplY3R9IHNwcmluZyBBIHNwcmluZyBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hZGRTcHJpbmcgPSBmdW5jdGlvbiBhZGRTcHJpbmcoc3ByaW5nKSB7XG4gIHRoaXMucmVtb3ZlU3ByaW5nKHNwcmluZyk7XG4gIHRoaXMuc3RhdGUuc3ByaW5ncy5wdXNoKHNwcmluZyk7XG4gIHJldHVybiBzcHJpbmc7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiByZW1vdmUgYSBzcGVjaWZpYyBzdHJpbmcgZnJvbSB0aGUgc3ByaW5ncyBhcnJheVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNwcmluZ1xuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUucmVtb3ZlU3ByaW5nID0gZnVuY3Rpb24gcmVtb3ZlU3ByaW5nKHtwb2ludDoge3N0YXRlOiBwfX0pIHtcbiAgY29uc3Qgc3ByaW5ncyA9IHRoaXMuc3RhdGUuc3ByaW5ncztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwcmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocC54ID09PSBzcHJpbmdzW2ldLnBvaW50LnN0YXRlLnggJiZcbiAgICAgICAgcC55ID09PSBzcHJpbmdzW2ldLnBvaW50LnN0YXRlLnkpIHtcbiAgICAgIHNwcmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBc3VtbWluZyB3ZSBrbm93IHdoZXJlXG4gKiB0aGUgb3RoZXIgcGFydGljbGUgaXMgb24gdGhlIGNhbnZhcy4gV2UgY2FuIHVzZVxuICogdGhlIGFuZ2xlIGZvcm11bGFlIHRvIGZpZ3VyZSBvdXQgdGhlIGFuZ2xlXG4gKiBiZXR3ZWVuIHR3byBwYXJ0aWNsZS4gVXNpbmcgYXJjdGFuZ2VudCBpcyBmaW5lLlxuICogYnV0IGJlY2F1c2UgdGhlIGNvcnJkaW5hdGUgcGxhbmUgaXMgZmlscGVkIG9uIHRoZVxuICogWSBheGlzIHdlIHVzZSBhdGFuMiB0byBnZXQgdGhlIHJpZ2h0IHZhbHVlcy4gRXhwbGFpbmVkXG4gKiBpbiBBUEkgRG9jcy5cbiAqIFxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDIgICAgICBBIHBhcnRpY2xlIGluc3RhbmNlLlxuICogQHJldHVybnMge0ludGVnZXJ9ICBBbmdsZSAgIEEgYW5nbGUuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hbmdsZVRvID0gZnVuY3Rpb24gYW5nZWxUbyh7c3RhdGU6IHt4OiB4LCB5OiB5fX0pIHtcbiAgY29uc3Qge3g6IGR4LCB5OiBkeX0gPSB7eDogeCAtIHRoaXMuc3RhdGUueCwgeTogeSAtIHRoaXMuc3RhdGUueX07XG4gIHJldHVybiBNYXRoLmF0YW4yKGR5LCBkeCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBc3N1bWluZyB3ZSBrbm93IHdoZXJlIGJvdGggcGFydGljbGUgYXJlIG9uIHRoZSBjYW52YXMuXG4gKiB3ZSBjYW4gdXNlIHRoZSBkaXN0YW5jZSBmb3JtdWFsZSB0byBmaWd1cmUgb3V0IHRoZSBkaXN0YW5jZVxuICogYmV0d2VlbiB0aGUgdHdvIHBhcnRpY2xlcy5cbiAqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiAgICAgIEEgcGFydGljbGUgaW5zdGFuY2VcbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAgQW5nbGUgICBBIERpc3RhbmNlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5kaXN0YW5jZVRvID0gZnVuY3Rpb24gZGlzdGFuY2VUbyh7c3RhdGU6IHt4OiB4LCB5OiB5fX0pIHtcbiAgY29uc3Qge3g6IGR4LCB5OiBkeX0gPSB7eDogeCAtIHRoaXMuc3RhdGUueCwgeTogeSAtIHRoaXMuc3RhdGUueX07XG4gIHJldHVybiBNYXRoLmh5cG90KGR4LCBkeSk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEFwcGVuZCBhIHBhcnRpY2xlIHRvIHRoZSBtYXNzZXMgYXJyYXkuXG4gKiBAcGFyYW0ge1BhcnRpY2xlfSBtYXNzXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hZGRNYXNzID0gZnVuY3Rpb24obWFzcykge1xuICB0aGlzLnJlbW92ZU1hc3MobWFzcyk7XG4gIHRoaXMuc3RhdGUubWFzc2VzLnB1c2gobWFzcyk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIHBhcnRpY2xlIGZvciB0aGUgbWFzc2VzIGFycmF5LlxuICogQHBhcmFtICB7UGFydGljbGV9IG1hc3NcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnJlbW92ZU1hc3MgPSBmdW5jdGlvbih7c3RhdGU6IG1hc3N9KSB7XG4gIGNvbnN0IG1hc3NlcyA9IHRoaXMuc3RhdGUubWFzc2VzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1hc3MueCA9PT0gbWFzc2VzW2ldLnN0YXRlLnggJiZcbiAgICAgICAgbWFzcy55ID09PSBtYXNzZXNbaV0uc3RhdGUueSkge1xuICAgICAgbWFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseXMgZ3Jhdml0YXRpb24gdG8gdGhlIGlucHV0IHBhcnRpY2xlLlxuICogQHBhcmFtICB7UGFydGljbGV9IHAyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ3Jhdml0YXRlVG8gPSBmdW5jdGlvbihwMikge1xuICBjb25zdCBkeCA9IHAyLnN0YXRlLnggLSB0aGlzLnN0YXRlLng7XG4gIGNvbnN0IGR5ID0gcDIuc3RhdGUueSAtIHRoaXMuc3RhdGUueTtcblxuICAvLyBEaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcGFydGljbGVzXG4gIGNvbnN0IGRpc3RTUSA9IGR4ICogZHggKyBkeSAqIGR5O1xuICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGRpc3RTUSk7XG5cbiAgLy8gTWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IgW0YgPSBHKG0xKShtMikvcl4yXVxuICBjb25zdCBmb3JjZSA9IHAyLnN0YXRlLm1hc3MgLyBkaXN0U1E7XG5cbiAgLy8gU2V0dGluZyB1cCBhbmdsZXMgb2YgdGhlIHZlY3RvclxuICBjb25zdCBzaW4gPSBkeSAvIGRpc3Q7XG4gIGNvbnN0IGNvcyA9IGR4IC8gZGlzdDtcblxuICAvLyBTZXR0aW5nIHZldG9yIGFuZ2xlXG4gIGNvbnN0IGF4ID0gY29zICogZm9yY2U7XG4gIGNvbnN0IGF5ID0gc2luICogZm9yY2U7XG5cbiAgcmV0dXJuIHRoaXMuYWNjZWxlcmF0ZShheCwgYXkpO1xufTtcblxuLy8gVGhpcyBnZW5lcmF0b3JyIGZ1bmN0aW9uIGlzIHByZXR0eSBncm9zcyBNaWxlcyBmaXggdGhpcyB5b3UgbGF6eSBwaWxlIG9mIGRldmVsb3Blci5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGUgYSBidW5jaCBvZiBwYXJ0aWNsZXMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgbnVtICAgICAgIFRoZSBtYXhpbXVtIGFtb3VudCBvZiBnZW5lcmF0ZWQgcGFydGljbGVzIG5lZWRlZC5cbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgT3B0aW9ucyB0byBwYXNzIGVhY2ggcGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfmdlbmVyYXRvckNhbGxiYWNrfSBjYWxsYmFjayAgRnVuY3Rpb24gdG8gYWxsb3cgbWFwcGluZy5cbiAqIEByZXR1cm5zIHtQYXJ0aWNsZVtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2VuZXJhdG9yID0gZnVuY3Rpb24gZ2VuKG51bSwgb3B0cz1jbG9uZShJTklUSUFMX1NUQVRFKSwgY2FsbGJhY2spIHtcbiAgLy8gU2hvdWxkIG5vdCBtdXRhdGUgdGhlIG9wdGlvbnMgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZ2l2ZW4gLy9cbiAgT2JqZWN0LmZyZWV6ZShvcHRzKTtcblxuICBjb25zdCBwYXJ0aWNsZXMgPSBbXTtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgY2FsbGJhY2sob3B0cywgaSwgZnVuY3Rpb24ocCkge1xuICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHBhcnRpY2xlIHBhc3NlZCB0byBnZW5lcmF0b3IuIFdpbGwgdXNlIGRlZmF1bHQgc3RhdGUuXCIpO1xuICAgICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gc2VsZi5jcmVhdGUob3B0cyk7XG4gICAgICAgICAgcGFydGljbGVzLnB1c2gobmV3UGFydGljbGUpO1xuICAgICAgICAgIHJldHVybiBuZXdQYXJ0aWNsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gc2VsZi5jcmVhdGUocCk7XG4gICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ld1BhcnRpY2xlKTtcbiAgICAgICAgcmV0dXJuIG5ld1BhcnRpY2xlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIHBhcnRpY2xlcy5wdXNoKHNlbGYuY3JlYXRlKG9wdHMpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydGljbGVzO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0b3IgY2FsbGJhY2tcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGNhbGxiYWNrIFBhcnRpY2xlfmdlbmVyYXRvckNhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25zIHRvIGJlIGV4dGVuZCBvbiB0byBlYWNoIHBhcnRpY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IGkgSW5kZXggb2YgcGFydGljbGUgaW4gQXJyYXkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB7fSBBIGNhbGwgYmFjayB0byBiZSBjYWxsZWQgd2l0aCB0aGUgZ2VuZXJhdGVkIHBhcnRpY2xlLlxuICovXG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gQXBwbHkgdmVsb2NpdHkgdG8gdGhlIHBvc2l0aW9uLlxuICogQHBhcmFtICB7SW50ZWdlcn0gdnhcbiAqIEBwYXJhbSAge0ludGVnZXJ9IHZ5XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQb3NpdGlvbiBzdGF0ZSBhZnRlciB2ZWxvY2l0eSBoYXMgYmVlbiBhcHBsaWVkXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS51cGRhdGVQb3MgPSBmdW5jdGlvbiB1cGRhdGVQb3ModngsIHZ5KSB7XG4gIGlmICh2eCA9PT0gdW5kZWZpbmVkICYmIHZ5ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnN0YXRlLnggKz0gdGhpcy5zdGF0ZS52eDtcbiAgICB0aGlzLnN0YXRlLnkgKz0gdGhpcy5zdGF0ZS52eTtcbiAgICByZXR1cm4ge3g6IHRoaXMuc3RhdGUueCwgeTogdGhpcy5zdGF0ZS55fTtcbiAgfVxuXG4gIHRoaXMuc3RhdGUueCArPSB2eDtcbiAgdGhpcy5zdGF0ZS55ICs9IHZ5O1xuICByZXR1cm4ge3g6IHRoaXMuc3RhdGUueCwgeTogdGhpcy5zdGF0ZS55fTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHBhcnRpY2xlcyBjYWxjdWxhdGUgdGhlXG4gKiBzcHJpbmcgZm9yY2UgYXBwbGllZCB0byBib3RoIHBhcnRpY2xlcy5cbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSAgc3ByaW5nICBHaXZlbiBvZmZzZXQgZm9yIHRoZSBwYXJ0aWNsZXNcbiAqIEBwYXJhbSAge0ludGVnZXJ9ICBvZmZzZXQgIFRoZSBzcHJpbmcgY29lZmZpY2VudFxuICogQHJldHVybnMge1BhcnRpY2xlW119XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zcHJpbmdGcm9tVG8gPSBmdW5jdGlvbiBzcHJpbmdGcm9tVG8ocCwgc3ByaW5nPTAuMDUsIG9mZnNldD0xMDApIHtcbiAgLy8gUG9zdGlvbiBkZWx0YVxuICBjb25zdCBkeCA9IChwLnN0YXRlLnggLSB0aGlzLnN0YXRlLngpO1xuICBjb25zdCBkeSA9IChwLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnkpO1xuXG4gIC8vIFNldHRpbmcgdXAgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBjb25zdCBzcHJpbmdGb3JjZSA9IChkaXN0YW5jZSAtIG9mZnNldCkgKiBzcHJpbmc7XG5cbiAgLy8gU3ByaW5nIGFjY2VsZXJhdGlvbiB2ZWN0b3JcbiAgY29uc3Qgc3ggPSBkeCAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG4gIGNvbnN0IHN5ID0gZHkgLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuXG4gIC8vIEFjY2VsZXJhdGUgd2l0aCB0aGUgc3ByaW5nIHZlY3RvclxuICB0aGlzLmFjY2VsZXJhdGUoc3gsIHN5KTtcblxuICAvLyBBY2NlbGVyYXRlIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gIHAuc3RhdGUudnggLT0gc3g7XG4gIHAuc3RhdGUudnkgLT0gc3k7XG5cbiAgcmV0dXJuIFt0aGlzLCBwXTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwYXJ0aWNsZSwgYSB2ZWN0b3IsIGFuZCBhIHNwcmluZyBjb2VmZmllbmNlbnQgYWNjZWxlcmF0ZVxuICogdGhlIHBhcnRpY2xlIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UgaXRzIGlzIGZyb20gdGhlIHBvaW50LlxuICogQHBhcmFtICB7T2JqZWN0fSBwIEEgc3ByaW5nIG9iamVjdC5cbiAqIEByZXR1cm5zIHtQYXJ0aWNsZX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNwcmluZ1RvUG9pbnQgPSBmdW5jdGlvbiBzcHJpbmdUb1BvaW50KHApIHtcbiAgLy8gUG9zdGlvbiBkZWx0YVxuICBjb25zdCBkeCA9IChwLnBvaW50LnN0YXRlLnggLSB0aGlzLnN0YXRlLngpO1xuICBjb25zdCBkeSA9IChwLnBvaW50LnN0YXRlLnkgLSB0aGlzLnN0YXRlLnkpO1xuXG4gIC8vIFNldHRpbmcgdXAgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBjb25zdCBzcHJpbmdGb3JjZSA9IChkaXN0YW5jZSAtIHAub2Zmc2V0KSAqIHAuc3ByaW5nO1xuXG4gIC8vIFNwcmluZyBhY2NlbGVyYXRpb24gdmVjdG9yXG4gIGNvbnN0IHN4ID0gZHggLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuICBjb25zdCBzeSA9IGR5IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcblxuICAvLyBBY2NlbGVyYXRlIHdpdGggdGhlIHNwcmluZyB2ZWN0b3JcbiAgdGhpcy5hY2NlbGVyYXRlKHN4LCBzeSk7XG5cbiAgcmV0dXJuIFt0aGlzLCBwXTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gQXBwbHkgc3ByaW5nIHBvaW50IHRvIGFsbCBpbnRlcm5hbCBzcHJpbmdzLlxuICogQHBhcmFtICB7c3ByaW5nc30gc3ByaW5ncyBBbiBhcnJheSBvZiBzcHJpbmdzIHRvIHNwcmluZyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmhhbmRsZVNwcmluZ3MgPSBmdW5jdGlvbiBoYW5kbGVTcHJpbmdzKHNwcmluZ3M9dGhpcy5zdGF0ZS5zcHJpbmdzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3ByaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuc3ByaW5nVG9Qb2ludChzcHJpbmdzW2ldKTtcbiAgfVxuICByZXR1cm4gc3ByaW5ncztcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gRm9yIGVhY2ggbWFzcyBpbiB0aGUgbWFzc2VzIGFycmF5IGFwcGx5IGdyYXZpdGF0ZSB0byBpdC5cbiAqIEBwYXJhbSAge1BhcnRpY2xlc1tdfE9iamVjdFtdfSBtYXNzZXNcbiAqIEByZXR1cm5zIHtQYXJ0aWNsZXNbXXxPYmplY3RbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmhhbmRsZU1hc3NlcyA9IGZ1bmN0aW9uIGhhbmRsZU1hc3NlcyhtYXNzZXM9dGhpcy5zdGF0ZS5tYXNzZXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmdyYXZpdGF0ZVRvKG1hc3Nlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIG1hc3Nlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3BhcnRpY2xlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9wYXJ0aWNsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsvKiovfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH0gZWxzZSBpZiAoKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpIHx8IHRhcmdldCA9PSBudWxsKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2V4dGVuZC9pbmRleC5qcyIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvY2xvbmVEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGJhc2VDbG9uZSwgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VDbG9uZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TdGFjay5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fU3RhY2suanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvZXEuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0hhcy5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja1NldC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19NYXAuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19yb290LmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19IYXNoLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faGFzaFNldC5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUVhY2guanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29weU9iamVjdC5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gva2V5cy5qcyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faXNJbmRleC5qcyIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2tleXNJbi5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlS2V5c0luLmpzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29weUFycmF5LmpzIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weVN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fU2V0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZU1hcCA9IHJlcXVpcmUoJy4vX2Nsb25lTWFwJyksXG4gICAgY2xvbmVSZWdFeHAgPSByZXF1aXJlKCcuL19jbG9uZVJlZ0V4cCcpLFxuICAgIGNsb25lU2V0ID0gcmVxdWlyZSgnLi9fY2xvbmVTZXQnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwidmFyIGFkZE1hcEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkTWFwRW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCBDTE9ORV9ERUVQX0ZMQUcpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lTWFwLmpzIiwiLyoqXG4gKiBBZGRzIHRoZSBrZXktdmFsdWUgYHBhaXJgIHRvIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gcGFpciBUaGUga2V5LXZhbHVlIHBhaXIgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAqL1xuZnVuY3Rpb24gYWRkTWFwRW50cnkobWFwLCBwYWlyKSB7XG4gIC8vIERvbid0IHJldHVybiBgbWFwLnNldGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIG1hcC5zZXQocGFpclswXSwgcGFpclsxXSk7XG4gIHJldHVybiBtYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTWFwRW50cnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hZGRNYXBFbnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hZGRNYXBFbnRyeS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwidmFyIGFkZFNldEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkU2V0RW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCBDTE9ORV9ERUVQX0ZMQUcpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzIiwiLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFNldEVudHJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYWRkU2V0RW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYWRkU2V0RW50cnkuanMiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIi8qKlxuICogQGNsYXNzIFNoYXBlc1xuICogQHBhcmFtIHtPYmplY3R9IGN0eCAgICAgIENhbnZhcyBjb250ZXh0LlxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFNoYXBlcyhjdHgsIGRvY3VtZW50KSB7XG4gIGlmICghY3R4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2hhcGVzOiBQbGVhc2UgcHJvdmlkZSBhIGNvbnRleHQgYXJndW1lbnQgW2FyZzo6MV1cIik7XG4gIH1cbiAgdGhpcy5jdHggPSBjdHg7XG4gIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBkZXNjcmlwdGlvbiBkcmF3IGEgY2lyY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHggICAgIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5ICAgICBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0ge051bWJlcn0gciAgICAgVGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIFRoZSBjb2xvciBvZiB0aGUgY2lyY2xlLlxuICovXG5TaGFwZXMucHJvdG90eXBlLmNpcmNsZSA9IGZ1bmN0aW9uIGRyYXdDaXJjbGUoeD00LCB5PTQsIHI9MiwgY29sb3I9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgdGhpcy5jdHguZmlsbCgpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAZGVzY3JpcHRpb24gRmlsbCBhIHJlY3RhbmdsZVxuICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICBTdGFydGluZyBwb2ludCBYXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkgICAgIFN0YXJ0aW5nIHBvaW50IFlcbiAqIEBwYXJhbSAge051bWJlcn0gdyAgICAgV2lkdGggb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtICB7TnVtYmVyfSBoICAgICBIZWlnaHQgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtICB7U3RyaW5nfSBjb2xvciBBIGhleCBzdHJpbmcuXG4gKi9cblNoYXBlcy5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uIGRyYXdSZWN0KHgsIHksIHc9MTAsIGg9MTAsIGNvbG9yPVwiIzAwMDAwMFwiKSB7XG4gIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbn07XG5cbi8qKlxuICogcENpcmNsZVxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICovXG5TaGFwZXMucHJvdG90eXBlLnBDaXJjbGUgPSBmdW5jdGlvbiBwYXJ0aWNsZUNpcmNsZShwKSB7XG4gIHRoaXMuY2lyY2xlKFxuICAgIHAuc3RhdGUueCxcbiAgICBwLnN0YXRlLnksXG4gICAgcC5zdGF0ZS5yYWRpdXMsXG4gICAgcC5zdGF0ZS5jb2xvclxuICApO1xuICByZXR1cm4gcDtcbn07XG5cbi8qKlxuICogcFJlY3RcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gKiBAcmV0dXJuIHtQYXJ0aWNsZX1cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5wUmVjdCA9IGZ1bmN0aW9uIHBhcnRpY2xlUmVjdChwKSB7XG4gIHRoaXMucmVjdChcbiAgICBwLnN0YXRlLngsXG4gICAgcC5zdGF0ZS55LFxuICAgIHAuc3RhdGUud2lkdGgsXG4gICAgcC5zdGF0ZS5oZWlnaHQsXG4gICAgcC5zdGF0ZS5jb2xvclxuICApO1xuICByZXR1cm4gcDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQGRlc2NyaXB0aW9uIERyYXcgYSBsaW5lIGJldHdlZW4gdGhlc2UgdHdvIHBvaW50cy5cbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEBwYXJhbSAge3N0cmluZ30gc3R5bGVcbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5kcmF3TGluZVhZID0gZnVuY3Rpb24oeDAsIHkwLCB4MSwgeTEsIHN0eWxlPVwiIzAwMDAwMFwiKSB7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHN0eWxlO1xuICB0aGlzLmN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgdGhpcy5jdHgubGluZVRvKHgxLCB5MSk7XG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzBcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMVxuICogQHJldHVybiB7Vm9pZH1cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5kcmF3TGluZVZlYyA9IGZ1bmN0aW9uKHZlYzAsIHZlYzEpIHtcbiAgdGhpcy5kcmF3TGluZVhZKHZlYzAuZ2V0KFwieFwiKSwgdmVjMC5nZXQoXCJ5XCIpLCB2ZWMxLmdldChcInhcIiksIHZlYzEuZ2V0KFwieVwiKSk7XG4gIHJldHVybiB2b2lkKDApO1xufTtcblxuU2hhcGVzLnByb3RvdHlwZS5kcmF3TGluZVBvaW50cyA9IGZ1bmN0aW9uKC4uLnBvaW50cykge1xuICBjb25zdCBbZmlyc3RQb2ludF0gPSBwb2ludHM7XG5cbiAgaWYgKCFmaXJzdFBvaW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgaW5wdXRzXCIpO1xuICB9XG5cbiAgaWYgKHBvaW50cy5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBiZSBnaXZlbiBhIGEgbnVtYmVyIG9mIHBvaW50cyBncmVhdGVyIHRoYW4gMVwiKTtcbiAgfVxuXG4gIGNvbnN0IHt4OiBzeCwgeTogc3l9ID0gZmlyc3RQb2ludDtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4Lm1vdmVUbyhzeCwgc3kpO1xuXG4gIC8vIFNvbWUgdHJpY2t5IGRlc3RydWN0aW5nIGdvaW5nIG9uIGhlcmUuXG4gIC8vIEkgbmVlZCBzb21lIHByYWN0aWNlIHNvLi4uIGp1c3QgdGVzdGluZyBpdCBvdXQuXG4gIC8vIFRoZSAuLi5wb2ludHMgYml0IGlzIGp1c3QgYSBzaGFsbG93IGNvcHlpbmcgYXJyYXlcbiAgLy8gYnV0IGdldHRpbmcgcmlkIG9mIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAgLy8gVGhlIHNlY29uZCBiaXQgaXMgZGVzdHJ1Y3RpbmcgdGhlIG9iamVjdCB0aGF0XG4gIC8vIGl0IGdldHMgZm9yIGVhY2ggaXRlcmF0aW9uIGFuZCBhbGlhc2luZ1xuICAvLyB0aGUgdmFsdWVzIHRvIHB4IGFuZCBweS5cblxuICBjb25zdCBbLCAuLi54c10gPSBwb2ludHM7XG4gIGZvciAobGV0IHt4OiBweCwgeTogcHl9IG9mIHhzKSB7XG4gICAgdGhpcy5jdHgubGluZVRvKHB4LCBweSk7XG4gIH1cblxuICB0aGlzLmN0eC5zdHJva2UoKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQHBhcmFtICB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtICB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSAge051bWJlcn0gZ3JpZFNpemVcbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3JcbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5ncmlkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgZ3JpZFNpemU9MjAsIGNvbG9yPVwiI2NjY1wiKSB7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHggKz0gZ3JpZFNpemUpIHtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHgsIGhlaWdodCk7XG4gIH1cblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSArPSBncmlkU2l6ZSkge1xuICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB5KTtcbiAgICB0aGlzLmN0eC5saW5lVG8od2lkdGgsIHkpO1xuICB9XG5cbiAgdGhpcy5jdHguc3Ryb2tlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvc2hhcGVzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9zaGFwZXMuanMiLCIvKipcbiAqIFlBVCBzdGFuZHMgZm9yIFlldCBBbm90aGVyIFR3ZWVuLlxuICogV2h5IG5vdCBoYXZlIG9uZSBtb3JlIHBhY2thZ2UgdGhhdCBkb2VzIHRoZSBzYW1lIHRoaW5nIGFzIHRoZSA1MCBvdXQgdGhlcmU/XG4gKiBXZWxsIHRoYXRzIGEgZ29vZCBxdWVzdGlvbiB0aGF0IHdpbGwgbm90IGJlIGFuc3dlcmVkIGluIHRoaXMgY29tbWVudCBibG9jay5cbiAqIFRvIGJlIGhvbmVzdCBpdHMgZm9yIHByYWN0aWNlIGFuZCBsZWFybmluZyBwdXJwb3Nlcy4gQW5kIGlmIGFueW9uZSBpbiB0aGVpclxuICogcmlnaHQgbWluZCBhY3RhdWxseSBiZW5lZml0cyBmcm9tIHRoaXMgdGhlbiBzbyBiZSBpdC5cbiAqL1xuXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTtcbmNvbnN0IGV2ZW50ID0gcmVxdWlyZShcIi4vZXZlbnRcIik7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgb2JqOiB7eDogMCwgeTogMH0sXG4gIHByb3BzOiB7eDogMTAwLCB5OiAxMDB9LFxuICBlYXNpbmc6IFwiZWFzZVwiLFxuICBkdXJhdGlvbjogMTAwMCxcbn07XG5cbmNvbnN0IGV2ZW50SW5zdGFuY2UgPSBldmVudC5pbml0KCk7XG4vLyBJbmhlcml0IG1ldGhvZHMgZnJvbSBldmVudEluc3RhbmNlXG5jb25zdCBZQVQgPSBPYmplY3QuY3JlYXRlKGV2ZW50SW5zdGFuY2UpO1xuXG5ZQVQuaW5pdCA9IGZ1bmN0aW9uIGluaXRUd2VlbihvcHRzKSB7XG4gIC8vIENhbiBhbmQgdXNlcyBFdmVudCBhbmQgQ2xvY2sgbWV0aG9kcy5cblxuICBpZiAoIW9wdHMuY2xvY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIGNsb2NrIEFQSS5cIik7XG4gIH1cblxuICB0aGlzLl9jbG9jayA9IG9wdHMuY2xvY2suaW5pdCh7XG4gICAgZnBzOiBvcHRzLmZwcyB8fCA2MCxcbiAgfSk7XG5cbiAgdGhpcy5wYXJlbnQgPSBldmVudEluc3RhbmNlO1xuICB0aGlzLnR3ZWVucyA9IFtdO1xuXG4gIC8qKlxuICAgKiBlYXNpbmdGbnNcbiAgICogQGRlc2NyaXB0aW9uIEFsbCBlYXNpbmcgZnVuY3Rpb25zIGFyZSBvcmlnbmlhbGx5IHdyaXR0ZW5cbiAgICogYnkgcm9iZXJ0IHBlbm5lciwgdGhlIHR3ZWVuaW5nIGdvZC5cbiAgICogSGVyZSBlYWNoIG1ldGhvZCBpcyBwYXNzZWQgYSBub3JtYWxpemVkIHZhbHVlLiBXaGljaCBpc1xuICAgKiB1c3VhbGx5IGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS4gWW91IGNhbiB0aGluayBvZiB0aGlzIG51bWJlciBhc1xuICAgKiBhIHBlcmNlbnRhZ2Ugb2YgYSByYW5nZS4gV2l0aCB0aGF0IG5vcm1saXplZCB2YWx1ZSAvIHBlcmNlbnRhZ2Ugd2VcbiAgICogY2FuIG1hcCB0aGF0IHBlcmNlbnRhZ2UgdG8gYW5vdGhlciByYW5nZS4gVGhpcyBpcyBjYWxsZWQgaW50ZXJwb2xhdGlvbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cDovL3JvYmVydHBlbm5lci5jb20vZWFzaW5nL31cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHRoaXMuZWFzaW5nRm5zID0ge1xuICAgIC8vIEhlcmUgdGhpcyBlYXNlIGZ1bmN0aW9uIGlzIGxpbmVhciBhcyB0aGVyZSBpcyBvbmx5IG9uZVxuICAgIC8vIG4gdmFsdWUuIEVhY2ggZWFzZSBmdW5jdGlvbiBjYW4gYmUgbWFwcGVkIHRvIGEgcG9seW5vbWlhbC5cbiAgICBlYXNlKGMsIGIsIG4pIHsgLy8gcG9seW5vbWlhbDogYXggKyBiID0gYzsgd2hlcmUgeCBpcyB0aGUgbm9ybWFsaXplZCB2YWx1ZVxuICAgICAgcmV0dXJuIGMgKiBuICsgYjtcbiAgICB9LFxuICAgIGVhc2VJblF1YWQoYywgYiwgbikgeyAvLyBwb2x5bm9taWFsOiAxeF4yICsgMHggKyAwID0gZDtcbiAgICAgIHJldHVybiBjICogKG4gKiBuKSArIGI7XG4gICAgfSxcbiAgICBlYXNlT3V0UXVhZChjLCBiLCBuKSB7IC8vIHBvbHlub21pYWw6IC0xeF4yICsgMnggKyAwID0gZDtcbiAgICAgIHJldHVybiBjICogKG4gKiAoMiAtIG4pKSArIGI7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFkKGMsIGIsIG4pIHtcbiAgICAgIGlmICgobio9MikgPCAxKSB7XG4gICAgICAgIHJldHVybiBjLzIgKiAobipuKSArIGI7IC8vIFBvbHlub21pYWwgZm9yIGhhbGYgdGhlIHJhbmdlOlxuICAgICAgICAvLyAyeF4yICsgMHggKyAwID0gZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtYy8yICogKCgtLW4pKihuLTIpIC0gMSkgKyBiOyAvLyBQb2x5bm9taWFsIGZvciB0aGUgdGhlIHVwcGVyXG4gICAgICAvLyBoYWxmIG9mIHRoZSByYW5nZTogLTJ4XjIgKyA0eCAtIDFcbiAgICB9LFxuICB9O1xuXG4gIHRoaXMuX2Nsb2NrLm9uKFwidGlja1wiLCB0aGlzLnVwZGF0ZVR3ZWVucywgdGhpcyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHVwZGF0ZVR3ZWVucyAtIFVwZGF0ZXMgYWxsIHRoZSB0d2VlbiBpbnN0YW5jZXMuXG4gKi9cbllBVC51cGRhdGVUd2VlbnMgPSBmdW5jdGlvbiB1cGRhdGVUZWVucygpIHtcbiAgdGhpcy50d2VlbnMuZm9yRWFjaCgodHdlZW4pID0+IHtcbiAgICBpZiAodHdlZW4udGlja2VyLm5lZWRzVXBkYXRlKSB7XG4gICAgICB0d2Vlbi51cGRhdGUodHdlZW4udGlja2VyKTtcbiAgICB9XG5cbiAgICBpZiAoIXR3ZWVuLnRpY2tlci5uZWVkc1VwZGF0ZSAmJlxuICAgICAgICB0d2Vlbi50aWNrZXIuU1RBVEUgPT09IFwiRE9ORVwiKSB7XG4gICAgICB0d2Vlbi51cGRhdGUodHdlZW4udGlja2VyKTtcbiAgICAgIHR3ZWVuLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0d2Vlbi50aWNrZXIuc3RvcHBlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJZb3VyIHR3ZWVuIGlzIHN0b3BwZWQuXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5ZQVQuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz17fSkge1xuICBjb25zdCBZQVRJbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUoWUFUKTtcbiAgY29uc3QgX29wdHMgPSBPYmplY3QuYXNzaWduKGNsb25lKERFRkFVTFRTKSwgb3B0cyk7XG4gIGNvbnN0IHtkdXJhdGlvbiwgb2JqLCBwcm9wcywgZWFzaW5nLCBpZH0gPSBfb3B0cztcblxuICBpZiAoIVlBVEluc3RhbmNlLmVhc2luZ0Zuc1tlYXNpbmddKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZWFzaW5nIGZ1bmN0aW9uICR7ZWFzaW5nfSBkb2VzIG5vdCBleGlzdHNgKTtcbiAgfVxuXG4gIGlmIChpZCkge1xuICAgIGlmICh0aGlzLnR3ZWVucy5zb21lKCh4KSA9PiB4LmlkID09PSBpZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHR3ZWVuIHdpdGggaWQ6ICR7aWR9IGFscmVhZHkgZXhpc3RzLmApO1xuICAgIH1cblxuICAgIFlBVEluc3RhbmNlLmlkID0gaWQ7XG4gIH0gZWxzZSB7XG4gICAgWUFUSW5zdGFuY2UuaWQgPSB0aGlzLnR3ZWVucy5sZW5ndGggKyAxO1xuICB9XG5cbiAgWUFUSW5zdGFuY2Uuc3RhdGUgPSBjbG9uZShvYmopO1xuICBZQVRJbnN0YW5jZS5vYmogPSBvYmo7XG4gIFlBVEluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gIFlBVEluc3RhbmNlLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIFlBVEluc3RhbmNlLmVhc2luZyA9IFlBVEluc3RhbmNlLmVhc2luZ0Zuc1tlYXNpbmddO1xuICBZQVRJbnN0YW5jZS50aWNrZXIgPSB0aGlzLl9jbG9jay5jcmVhdGVTbGF2ZSh7XG4gICAgaWQ6IFlBVEluc3RhbmNlLmlkLFxuICAgIGR1cmF0aW9uOiBZQVRJbnN0YW5jZS5kdXJhdGlvbixcbiAgfSk7XG5cbiAgdGhpcy50d2VlbnMucHVzaChZQVRJbnN0YW5jZSk7XG4gIHJldHVybiBZQVRJbnN0YW5jZTtcbn07XG5cbllBVC5nZXQgPSBmdW5jdGlvbihpZCkge1xuICBpZiAodGhpcy50d2VlbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIFlBVFswXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50d2Vlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLnR3ZWVuW2ldLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIHRoaXMudHdlZW5baV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuWUFULnJld2luZCA9IGZ1bmN0aW9uKGlkPXRoaXMuaWQpIHtcbiAgY29uc3QgdHdlZW4gPSB0aGlzLmdldChpZCk7XG5cbiAgaWYgKCF0aGlzLnN0b3BwZWQpIHtcbiAgICB0d2Vlbi5zdG9wKCk7XG4gIH1cblxuICAvLyBGaWd1cmUgb3V0IGEgd2F5IHRvIGNhY2hlIHRoZSBvbGQgcHJvcHMgLy9cbiAgdGhpcy5vcHRzLm9iaiA9IHRoaXMub3B0cy5wcm9wcztcbiAgdGhpcy5vcHRzLnByb3BzID0gdGhpcy5vcHRzLnByb3BzQmVmb3JlVHdlZW47XG5cbiAgdHdlZW4uc3RhcnQoKTtcbn07XG5cbllBVC5zdGFydEFsbCA9IGZ1bmN0aW9uIHN0YXJ0QWxsKCkge1xuICBpZiAoIXRoaXMudHdlZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSBubyB0d2VlbnMgdG8gc3RhcnRcIik7XG4gIH1cblxuICB0aGlzLnR3ZWVucy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgdC50aWNrZXIuc3RhcnQoKTtcbiAgfSk7XG5cbiAgdGhpcy5fY2xvY2suc3RhcnQoKTtcbn07XG5cbi8qKlxuICogc3RvcEFsbCAtIFN0b3BzIGFsbCB0d2VlbnNcbiAqL1xuWUFULnN0b3BBbGwgPSBmdW5jdGlvbiBzdG9wQWxsKCkge1xuICBpZiAodGhpcy50d2VlbnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYXJlIG5vIHR3ZWVucyB0byBzdG9wXCIpO1xuICB9XG5cbiAgdGhpcy5fY2xvY2suc3RvcCgpO1xufTtcblxuLyoqXG4gKiBkZWxheSAtIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb25cbiAqIEBwYXJhbSAge251bWJlcn0gZHVyYXRpb25cbiAqIEByZXR1cm4ge1lBVH1cbiAqL1xuWUFULmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZHVyYXRpb24pIHtcbiAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICB0aGlzLm9iaiA9IGNsb25lKHRoaXMuc3RhdGUpO1xuICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGlja2VyLnN0YXJ0KCksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHN0b3AgLSBzdG9wcyB0aGUgdGlja2VyXG4gKiBAcmV0dXJuIHtZQVR9XG4gKi9cbllBVC5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogZmluaXNoIC0gZmluaXNoZXMgdGhlIHR3ZWVuIGFuaW1hdGlvblxuICogQHJldHVybiB7WUFUfVxuICovXG5ZQVQuZmluaXNoID0gZnVuY3Rpb24gZmluaXNoKCkge1xuICB0aGlzLnN0b3AoKTtcbiAgdGhpcy5fY2xvY2sucmVtb3ZlU2xhdmUodGhpcy50aWNrZXIuaWQpO1xuICB0aGlzLnN0YXRlID0gdGhpcy5wcm9wcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5ZQVQucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGlkPXRoaXMuaWQpIHtcbiAgdGhpcy50d2VlbnMgPSB0aGlzLnR3ZWVucy5maWx0ZXIoKHQpID0+IHtcbiAgICBpZiAodC5pZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMuX2Nsb2NrLnJlbW92ZVNsYXZlKHQudGlja2VyLmlkKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG5ZQVQudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHRpY2tlcikge1xuICBpZiAoIXRpY2tlci5uZWVkc1VwZGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHt0aW1lU2luY2VTdGFydDogZGVsdGEsIGR1cmF0aW9ufSA9IHRpY2tlcjtcbiAgY29uc3Qgbm9ybSA9IHV0aWxzLm5vcm1hbGl6ZShkZWx0YSwgMCwgZHVyYXRpb24ubXMpO1xuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLm9iaikge1xuICAgIGlmICh0aGlzLm9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodGhpcy5vYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHRoaXMuZWFzaW5nKHRoaXMucHJvcHNba2V5XSAtIHRoaXMub2JqW2tleV0sIHRoaXMub2JqW2tleV0sIG5vcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBZQVQ7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qXG4gKlxuICogVEVSTVMgT0YgVVNFIC0gRUFTSU5HIEVRVUFUSU9OU1xuICogXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuIFxuICogXG4gKiBDb3B5cmlnaHQgwqkgMjAwMSBSb2JlcnQgUGVubmVyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqIFxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlXG4gKiBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9cbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMXG4gKiAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRURcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5cbiAqICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi90d2Vlbi5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvdHdlZW4uanMiLCIvKipcbiAqIEV2ZW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQGltcGxlbWVudHMge3V0aWxzfVxuICovXG5jb25zdCBFdmVudCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbi8qKlxuICogaW5pdFxuICogQG1lbWJlck9mIEV2ZW50XG4gKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGV2ZW50IG9iamVjdC5cbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5pbml0ID0gZnVuY3Rpb24gaW5pdEV2ZW50KCkge1xuICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogZW1pdFxuICogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIHRoZSBoYW5kZWxlciB0aGF0IGFzc29jYWl0ZWQgd2l0aCB0aGUgZW1pdHRlZCBldmVudC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5lbWl0ID0gZnVuY3Rpb24gZW1pdCguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudCwgLi4ucmVzdF0gPSBhcmdzO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnQ6IFBsZWFzZSBwcm92aWRlIHRydXRoeSBhcmd1bWVudHNcIik7XG4gIH1cblxuICB0aGlzLmNhbGxiYWNrc1tldmVudF0gPSB0aGlzLmNhbGxiYWNrc1tldmVudF0gfHwgW107XG5cbiAgaWYgKHRoaXMuY2FsbGJhY2tzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICB0aGlzLmNhbGxiYWNrc1tldmVudF0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKC4uLnJlc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG9uXG4gKiBAZGVzY3JpcHRpb24gQXR0YWNoIGEgaGFuZGxlciB0byBhbiBldmVudC5cbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudFxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgY29udGV4dFxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50Lm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIGlmICghZXZlbnQgfHwgIWZuKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV2ZW50OiBQbGVhc2UgcHJvdmlkZSB0cnV0aHkgYXJndW1lbnRzXCIpO1xuICB9XG5cbiAgaWYgKGNvbnRleHQpIHtcbiAgICBmbiA9IGZuLmJpbmQoY29udGV4dCk7XG4gIH1cblxuICBjb25zdCBldmVudHMgPSBldmVudC5zcGxpdChcIiBcIik7XG5cbiAgdGhpcy5jYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcyB8fCB7fTtcblxuICBldmVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIHRoaXMuY2FsbGJhY2tzW2VdID0gdGhpcy5jYWxsYmFja3NbZV0gfHwgW107XG5cbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2VdLmxlbmd0aCkge1xuICAgICAgdGhpcy5jYWxsYmFja3NbZV0ucHVzaChmbik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBEb250IGNyZWF0ZSBkdXBsaWNhdGVzIG9mIHRoZSBzYW1lIGhhbmRlbGVkIGZ1bmN0aW9uLlxuICAgIC8vIElmIHlvdSB3YW50IHlvdXIgZnVuY3Rpb24gcnVuIHR3aWNlIHdyYXAgaXQgaW4gYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gdGhpcy5jYWxsYmFja3NbZV0uZXZlcnkoKGNiLCBpLCBjb2wpID0+IHtcbiAgICAgIHJldHVybiBjYiAhPT0gZm47XG4gICAgfSkgPyB0aGlzLmNhbGxiYWNrc1tlXS5wdXNoKGZuKSA6XG4gICAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBUaGF0IGZ1bmN0aW9uICR7Zm59IGhhcyBhbHJlYWR5IGJlZW4gZGVjbGFyZWQgYWAgK1xuICAgICAgICBcImhhbmRsZXIgZm9yIHRoaXMgZXZlbnQuXCIpO1xuICB9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogb2ZmXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFuIGV2ZW50IGhhbmRlbGVyLlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5vZmYgPSBmdW5jdGlvbiBvZmYoLi4uYXJncykge1xuICBjb25zdCBbZXZlbnQsIGZuXSA9IGFyZ3M7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsZXQgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgY29uc29sZS53YXJuKGBFdmVudDogTm8gZXZlbnQgbmFtZWQgJHtldmVudH0gaGFzIGJlZW4gcmVnaXN0ZXJlZGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKCFmbikge1xuICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGlzLmNhbGxiYWNrc1tldmVudF0gPSBjYWxsYmFja3MuZmlsdGVyKChjYikgPT4gY2IgIT09IGZuKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogbGlzdGVuZXJzIC0gUmV0dXJuIGFsbCBjYWxsYmFja3MgYXR0YWNoZWQgdG8gYSBjZXJ0YWluIGV2ZW50XG4gKiBAcGFyYW0gIHthbnk8QXJyYXk+fSBhcmdzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbltdfVxuICovXG5FdmVudC5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoLi4uYXJncykge1xuICBjb25zdCBbZXZlbnRdID0gYXJncztcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2FsbGJhY2tzKTtcbiAgfVxuXG4gIGlmICghdGhpcy5jYWxsYmFja3NbZXZlbnRdKSB7XG4gICAgY29uc29sZS53YXJuKGBFdmVudDogTm8gZXZlbnQgbmFtZWQgJHtldmVudH0gaGFzIGJlZW4gcmVnaXN0ZXJlZGApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbn07XG5cbkV2ZW50Lm9uY2UgPSBmdW5jdGlvbiBvbmNlKC4uLmFyZ3MpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IFtldmVudCwgZm4sIGNvbnRleHRdID0gYXJncztcblxuICBjb25zdCB3cmFwID0gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICBmbi5iaW5kKGNvbnRleHQpKCk7XG4gICAgc2VsZi5vZmYoZXZlbnQsIHdyYXApO1xuICB9O1xuXG4gIHRoaXMub24oZXZlbnQsIHdyYXAsIGNvbnRleHQpO1xufTtcblxuLy8gQWxpYXNlcyAvL1xuRXZlbnQucmVtb3ZlTGlzdGVuZXIgPSBFdmVudC5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBFdmVudC5vZmY7XG5FdmVudC5maXJlID0gRXZlbnQuZW1pdDtcbkV2ZW50LmFkZExpc3RlbmVyID0gRXZlbnQub247XG5FdmVudC5nZXQgPSBFdmVudC5saXN0ZW5lcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2V2ZW50LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9ldmVudC5qcyIsImNvbnN0IHRpY2tlciA9IHJlcXVpcmUoXCIuL3RpY2tlclwiKTtcbmNvbnN0IGV2ZW50ID0gcmVxdWlyZShcIi4vZXZlbnRcIikuaW5pdCgpO1xuY29uc3QgQ2xvY2sgPSBPYmplY3QuY3JlYXRlKGV2ZW50KTtcbmNvbnN0IE1BWF9GUFMgPSA2MDtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiBpbml0IC0gSW5pdGFsaXplcyB0aGUgY2xvY2sgd2l0aCBjb3JyZWN0IHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSAge051bWJlcn0gb3B0cy5mcHMgVGhlIGZwcyB5b3Ugd2FudCB0aGUgY2xvY2sgdG8gdGljayBhdC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5pbml0ID0gZnVuY3Rpb24gaW5pdENsb2NrKG9wdHM9e30pIHtcbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGZwczogTUFYX0ZQUyxcbiAgfSwgb3B0cyk7XG5cbiAgdGhpcy5zbGF2ZXMgPSBbXTtcbiAgdGhpcy5wYXJlbnQgPSBldmVudDtcblxuICAvLyBaZXJvIGJhc2VkIGZyYW1lIGNvdW50LlxuICB0aGlzLmluZGV4ID0gLTE7XG5cbiAgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgYW5pbWF0aW9uIGZyYW1lIHNvIHdlIGNhbiBjYW5jZWwgaXRcbiAgdGhpcy5yQUYgPSAwO1xuXG4gIC8vIFRpbWUgcHJvcGVydGllc1xuICB0aGlzLnN0YXJ0VGltZTtcbiAgdGhpcy5sYXN0VGltZTtcbiAgdGhpcy5zdG9wVGltZTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG5cbiAgLy8gVGhlIG1heGltdW0gRlBTIHRoZSBicm93c2VyIGNhbiBkZWxpdmVyIGlzIDYwLlxuICB0aGlzLmZwcyA9IG9wdHMuZnBzID4gTUFYX0ZQUyA/XG4gICAgTUFYX0ZQUyA6XG4gICAgKG9wdHMuZnBzIHx8IE1BWF9GUFMpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdGFydCAtIFN0YXJ0cyB0aGUgY2xvY2sgd2l0aCBzdGFydGluZyB0aW1lIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGZwcyBUaGUgZnBzIHlvdSB3YW50IHRoZSBjbG9jayB0byB0aWNrIGF0LlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmICh0aGlzLmZwcyA+IDYwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGdpdmVuIGZwcyBpcyB0b28gaGlnaFwiKTtcbiAgfVxuXG4gIGlmICgrdGhpcy5mcHMgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnaXZlbiBmcHMgaXMgbm90IHZhbGlkXCIpO1xuICB9XG5cbiAgdGhpcy5mcHMgPSAxMDAwIC8gdGhpcy5mcHM7XG4gIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHRoaXMubGFzdFRpbWUgPSB0aGlzLnN0YXJ0VGltZTtcblxuICAvLyBTdGFydCB0aWNraW5nXG4gIHRoaXMubG9vcCh0aGlzLnN0YXJ0VGltZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB0aWNrXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG5ld1RpbWUgQSB2YWx1ZSBpbiBtcyB0aGF0IGlzIGVxdWFsIHRvIHRoZSBjdXJyZW50IHRpbWUuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2subG9vcCA9IGZ1bmN0aW9uIGxvb3AobmV3VGltZSkge1xuICB0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wLmJpbmQodGhpcykpO1xuXG4gIGxldCBkZWx0YSA9IG5ld1RpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0ID0gbmV3VGltZSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIGlmIChkZWx0YSA+IHRoaXMuZnBzKSB7XG4gICAgdGhpcy5pbmRleCsrO1xuXG4gICAgdGhpcy53aGlwU2xhdmVzKHtcbiAgICAgIG5ld1RpbWUsXG4gICAgICBkZWx0YSxcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgbGFzdFRpbWU6IHRoaXMubGFzdFRpbWUsXG4gICAgICBjbG9ja1N0YXJ0OiB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIHRpbWVTaW5jZVN0YXJ0OiB0aGlzLnRpbWVTaW5jZVN0YXJ0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5sYXN0VGltZSA9IG5ld1RpbWUgLSAoZGVsdGEgJSB0aGlzLmZwcyk7XG4gIH1cblxuICB0aGlzLmVtaXQoXCJyZW5kZXJcIik7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHN0b3AgLSBTdG9wIHRoZSBjbG9jayBhbmQgY2FsbCB0aGUgbGFzdCB0aWNrIGlmIG5lZWRlZC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5zdG9wID0gZnVuY3Rpb24gc3RvcENsb2NrKCkge1xuICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XG5cbiAgLy8gUmVjb3JkIHdoZW4gd2Ugc3RvcHBlZC5cbiAgdGhpcy5zdG9wVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0ICs9IHRoaXMuc3RvcFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcbiAgdGhpcy5jbGVhclNsYXZlcygpO1xuXG4gIHRoaXMuZW1pdChcInN0b3BwZWRcIik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB3aGlwU2xhdmVzIC0gUnVuIGFsbCBzbGF2ZXMgaW4gc2VxdWVuY2UgYW5kIHBhc3MgaW5cbiAqIHRoZSBnaXZlbiBzdGF0ZSBvZiB0aGUgY2xvY2suXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2sud2hpcFNsYXZlcyA9IGZ1bmN0aW9uIHdoaXBTbGF2ZXMoc3RhdGUpIHtcbiAgaWYgKCF0aGlzLnNsYXZlcy5sZW5ndGgpIHJldHVybjtcblxuICB0aGlzLnNsYXZlcy5mb3JFYWNoKChzbGF2ZSwgaW5kZXgpID0+IHtcbiAgICBzbGF2ZS5udWRnZShzdGF0ZSk7XG4gIH0pO1xuXG4gIHRoaXMuZW1pdChcInRpY2tcIik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuQ2xvY2suY3JlYXRlU2xhdmUgPSBmdW5jdGlvbiBjcmVhdGVTbGF2ZShvcHRzKSB7XG4gIGlmICghb3B0cykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgb3B0aW9ucyBvYmplY3RcIik7XG4gIH1cblxuICBjb25zdCB7aWQsIGR1cmF0aW9ufSA9IG9wdHM7XG4gIGNvbnN0IHRpbWVTdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gIGNvbnN0IHNsYXZlID0gT2JqZWN0LmNyZWF0ZSh0aWNrZXIpXG4gICAgLmluaXQoe3RpbWVTdGFtcCwgaWQsIGR1cmF0aW9ufSk7XG5cbiAgaWYgKGlkKSB7XG4gICAgdGhpcy5zbGF2ZXMucHVzaChzbGF2ZSk7XG4gICAgcmV0dXJuIHNsYXZlO1xuICB9XG5cbiAgc2xhdmUuaWQgPSB0aGlzLnNsYXZlcy5wdXNoKHNsYXZlKTtcbiAgcmV0dXJuIHNsYXZlO1xufTtcblxuQ2xvY2sucmVtb3ZlU2xhdmUgPSBmdW5jdGlvbiByZW1vdmVTbGF2ZShpZCkge1xuICB0aGlzLnNsYXZlcyA9IHRoaXMuc2xhdmVzLmZpbHRlcigoc2xhdmUpID0+IHtcbiAgICBpZiAoc2xhdmUuaWQgIT09IGlkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc2xhdmUucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbkNsb2NrLmNsZWFyU2xhdmVzID0gZnVuY3Rpb24gY2xlYXJTbGF2ZXMoKSB7XG4gIGlmICh0aGlzLnNsYXZlcy5sZW5ndGgpIHRoaXMuc2xhdmVzID0gW107XG59O1xuXG5DbG9jay5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnN0b3AoKTtcbiAgdGhpcy5jbGVhclNsYXZlcygpO1xuICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICB0aGlzLnJBRiA9IDA7XG59O1xuXG5DbG9jay5yZW1vdmVBbGxTbGF2ZXMgPSBDbG9jay5jbGVhclNsYXZlcztcblxubW9kdWxlLmV4cG9ydHMgPSBDbG9jaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvY2xvY2suanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL2Nsb2NrLmpzIiwiY29uc3QgZXZlbnQgPSByZXF1aXJlKFwiLi9ldmVudFwiKTtcbmNvbnN0IE1BWF9GUFMgPSAxMDAwLzYwO1xuY29uc3QgVGlja2VyID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBTVEFURSA9IHtcbiAgU1RPUFBFRDogXCJTVE9QUEVEXCIsXG4gIFJVTk5JTkc6IFwiUlVOTklOR1wiLFxuICBET05FOiBcIkRPTkVcIixcbn07XG5cblxuVGlja2VyLmluaXQgPSBmdW5jdGlvbiBpbml0KHtcbiAgdGltZVN0YW1wPXBlcmZvcm1hbmNlLm5vdygpLFxuICBpZCxcbiAgZHVyYXRpb249MTAwMCxcbiAgaW50ZXJ2YWw9TUFYX0ZQUyxcbn0pIHtcbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnBhcmVudCA9IGV2ZW50O1xuICB0aGlzLnBhcmVudC5uYW1lID0gXCJldmVudFwiO1xuXG4gIC8vIFByb2JhYmx5IGNhbnQgc3VwcG9ydCB0aGlzPz9cbiAgLy8gWW91IGhhdmUgdG8gaGF2ZSB5b3VyIG93biBjbG9jay5cbiAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKGR1cmF0aW9uLCBcIm1zXCIpO1xuXG4gIHRoaXMuU1RBVEU7XG4gIHRoaXMuZGVsdGE7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQyID0gMDtcblxuICAvLyBGaXJlIHRoZSBmaXJzdCB0aW1lIHlvdSBnZXQgY2FsbGVkLlxuICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cblRpY2tlci50aWNrRm9yID0gZnVuY3Rpb24gdGlja0ZvcihkdXJhdGlvbiwgc3RyaW5nKSB7XG4gIHN3aXRjaCAoc3RyaW5nKSB7XG4gIGNhc2UgXCJmcmFtZXNcIjogY2FzZSBcImZcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJmcmFtZXNcIixcbiAgICAgIHZhbHVlOiBkdXJhdGlvbixcbiAgICAgIG1zOiBkdXJhdGlvbiAqIE1BWF9GUFMsXG4gICAgfTtcbiAgY2FzZSBcInNlY29uZHNcIjogY2FzZSBcInNcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24gKiAxMDAwLFxuICAgIH07XG4gIGNhc2UgXCJtaWxsaXNlY29uZHNcIjogY2FzZSBcIm1zXCI6IGRlZmF1bHQ6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24sXG4gICAgfTtcbiAgfTtcbn07XG5cblRpY2tlci5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuUlVOTklORykgcmV0dXJuIGZhbHNlO1xuICB0aGlzLlNUQVRFID0gU1RBVEUuUlVOTklORztcbiAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbn07XG5cblRpY2tlci5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlNUT1BQRUQpIHJldHVybiBmYWxzZTtcbiAgdGhpcy5TVEFURSA9IFNUQVRFLlNUT1BQRUQ7XG5cbiAgLy8gS25vdyB3aGF0IHRpbWUgaXQgc3RvcHBlZC5cbiAgLy8gc28gdGhhdCBpZiBpdCBzdGFydHMgYWdhaW4gaXRcbiAgLy8gaXQgY2FuIHJlY2FsY3VsYXRlIGhvdyBmYXIgaXQgbmVlZHMgdG8gZ28uXG4gIGNvbnN0IG5ld0R1cmF0aW9uID0gdGhpcy5kdXJhdGlvbi5tcyAtIHRoaXMudGltZVNpbmNlU3RhcnQgfHwgMDtcblxuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKG5ld0R1cmF0aW9uLCBcIm1pbGxpc2Vjb25kc1wiKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG5cbiAgdGhpcy5zdG9wVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xufTtcblxuVGlja2VyLm51ZGdlID0gZnVuY3Rpb24gbnVkZ2Uoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgc3RhdGUgb2JqZWN0XCIpO1xuICB9XG5cblxuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuU1RPUFBFRCB8fCB0aGlzLlNUQVRFICE9PSBTVEFURS5SVU5OSU5HKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdGhpcy5TVEFURSA9IFNUQVRFLlJVTk5JTkc7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgKz0gc3RhdGUuZGVsdGE7XG5cbiAgaWYgKHRoaXMudGltZVNpbmNlU3RhcnQgPCB0aGlzLmR1cmF0aW9uLm1zKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5TVEFURSA9IFNUQVRFLkRPTkU7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdGlja2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi90aWNrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBGSVJTVF9JRlJBTUUgPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlmcmFtZUhhbmRsZXIoZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50O1xuXG4gIGNvbnN0IGRvbUhlbHBlciA9IHJlcXVpcmUoXCJkb21faGVscGVyXCIpKGRvY3VtZW50KTtcbiAgY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwic2hpbXNcIikoZG9jdW1lbnQpO1xuXG4gIGNvbnN0ICQgPSBzaGltcy4kO1xuICBjb25zdCAkJCA9IHNoaW1zLiQkO1xuICBcbiAgbGV0IGZpcnN0U3RhdGUgPSBGSVJTVF9JRlJBTUU7XG5cbiAgY29uc3QgY2hlY2tTdGF0dXMgPSAocmVzKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzID0gcmVzLnN0YXR1cztcbiAgICBpZiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA0MDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHRocm93IHJlcy5zdGF0dXNUZXh0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBbZmV0Y2hFeGFtcGxlIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGlkIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBmZXRjaEV4YW1wbGUgPSBmdW5jdGlvbiBmZXRjaEV4YW1wbGUoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goXCIvZXhhbXBsZXMvXCIgKyBpZClcbiAgICAudGhlbihjaGVja1N0YXR1cylcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIFt3cml0ZUZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHBhcmVudCBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZnJhbWUgIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3Qgd3JpdGVGcmFtZSA9IGZ1bmN0aW9uIHdyaXRlRnJhbWUocGFyZW50LCBmcmFtZSkge1xuICAgIGlmICghZG9tSGVscGVyLmlzRWxlbWVudChwYXJlbnQpIHx8ICFkb21IZWxwZXIuaXNFbGVtZW50KGZyYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHBhcmVudCArIFwiIHRoaXMgcGFyZW50IGlzbid0IGEgRE9NIGVsZW1lbnQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogW2dldEZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5hbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgZ2V0RnJhbWUgPSBmdW5jdGlvbiBnZXRGcmFtZShuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gJChcImlmcmFtZVtkYXRhLWV4YW1wbGVdXCIpO1xuICAgIHJldHVybiAkKFwiaWZyYW1lW2RhdGEtZXhhbXBsZV49XCIgKyBuYW1lICsgXCJdXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbaW5qZWN0U3JjIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHNyYyAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBmcmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgaW5qZWN0U3JjID0gZnVuY3Rpb24gaW5qZWN0U3JjKHNyYywgZnJhbWUpIHtcbiAgICBmcmFtZS5zcmNkb2MgPSBzcmM7XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbY3JlYXRlRnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUgfHwgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgXCIgTm90IGEgdmFsaWQgbmFtZSBmb3IgYSBpZC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvdy1zYW1lLW9yaWdpblwiLCB0cnVlKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3ctc2NyaXB0c1wiLCB0cnVlKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIHRydWUpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZyYW1lX2V4YW1wbGVcIik7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtZXhhbXBsZVwiLCBuYW1lKTtcblxuICAgIHJldHVybiBpZnJhbWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtyZW1vdmVGcmFtZVNyYyBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSB0YXJnZXQgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCByZW1vdmVGcmFtZVNyYyA9IGZ1bmN0aW9uIHJlbW92ZUZyYW1lU3JjKHRhcmdldCkge1xuICAgIGlmICghdGFyZ2V0KSB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIHRhcmdldFwiKTtcblxuICAgIGlmICghZG9tSGVscGVyLmlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZ2V0RnJhbWUodGFyZ2V0KS5zcmNEb2MgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0LnNyY0RvYyA9IFwiXCI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtleGFtcGxlRXhpc3RzIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGV4YW1wbGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgZXhhbXBsZUV4aXN0cyA9IGZ1bmN0aW9uIGV4YW1wbGVFeGlzdHMoZXhhbXBsZSkge1xuICAgIGlmICghZXhhbXBsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGlkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlkID0gZ2V0RnJhbWUoZXhhbXBsZSlcbiAgICAgICAgLmF0dHJpYnV0ZXNbXCJkYXRhLWV4YW1wbGVcIl1cbiAgICAgICAgLm5vZGVWYWx1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICByZXR1cm4gaWQgPT09IGV4YW1wbGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbbG9hZEluSWZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5hbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgbG9hZEluSWZyYW1lID0gZnVuY3Rpb24gbG9hZEluSWZyYW1lKGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJsb2FkIGluIGlGcmFtZVwiKTtcbiAgICAvLyBJZiB0aGUgZXhhbXBsZSBhbHJlYWR5IGV4c2lzdHMgZG9udCBkbyBhbnl0aGluZy5cbiAgICBpZiAoIWV4YW1wbGVFeGlzdHMoaWQpKSB7XG4gICAgICAvLyBJZiB3ZSBhcmUgbm90IHRoZSBmaXJzdCBmcmFtZSBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICBpZiAoIWZpcnN0U3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFeGFtcGxlIGRvZXNuJ3QgZXhzaXN0IGJ1dCB3ZSBhcmUgdGhlIG5leHQgaWZyYW1lLlwiKTtcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBzdGF0ZSBhbmQgcmVtb3ZlIG9sZCBzcmMgYW5kIGluamVjdCBuZXcgc3JjLlxuICAgICAgICBjb25zdCBleGlzdGluZ0ZyYW1lID0gZ2V0RnJhbWUoKTtcbiAgICAgICAgcmVtb3ZlRnJhbWVTcmMoZXhpc3RpbmdGcmFtZSk7XG4gICAgICAgIGV4aXN0aW5nRnJhbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1leGFtcGxlXCIsIGlkKTtcbiAgICAgICAgcmV0dXJuIGZldGNoRXhhbXBsZShpZClcbiAgICAgICAgICAudGhlbigoc3JjKSA9PiBpbmplY3RTcmMoc3JjLCBleGlzdGluZ0ZyYW1lKSlcbiAgICAgICAgICAuY2F0Y2gobG9hZElmcmFtZUVycm9yKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJFeGFtcGxlIGRvZXNuJ3QgZXhzaXN0IGJ1dCB3ZSBhcmUgdGhlIGZpcnN0IGlmcmFtZSBldmVyLlwiKTtcblxuICAgICAgLy8gVG9nZ2xlIHRoZSBzdGF0ZS5cbiAgICAgIGZpcnN0U3RhdGUgPSAhZmlyc3RTdGF0ZTtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZnJhbWVcbiAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBjcmVhdGVGcmFtZShpZCk7XG4gICAgICBjb25zdCBwYXJlbnREaXYgPSAkKFwiLndyYXBwZXJfX2ZyYW1lXCIpO1xuICAgICAgLy8gSWYgd2UgYXJlIG5vdCB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIGRvY3VtZW50IGRvIHRoaXMgcmVndWxhciBzdHVmZi5cbiAgICAgIHJldHVybiBmZXRjaEV4YW1wbGUoaWQpXG4gICAgICAgIC50aGVuKChzcmMpID0+IGluamVjdFNyYyhzcmMsIGZpcnN0RnJhbWUpKVxuICAgICAgICAudGhlbigobmV3RnJhbWUpID0+IHdyaXRlRnJhbWUocGFyZW50RGl2LCBuZXdGcmFtZSkpXG4gICAgICAgIC5jYXRjaChsb2FkSWZyYW1lRXJyb3IpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiRXhhbXBsZSBhbHJlYWR5IGV4c2lzdHMgZG9udCBkbyBhbnl0aGluZy4uXCIpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRJZnJhbWVFcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAkKFwiLndyYXBwZXJfX2Vycm9yXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgJChcIi53cmFwcGVyX19lcnJvclwiKS5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgJChcIi53cmFwcGVyX19lcnJvclwiKS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICQoXCIud3JhcHBlcl9fZXJyb3IgI2Vycm9yXCIpLmluc2VydEFkamFjZW50VGV4dChcImFmdGVyQmVnaW5cIiwgZXJyKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbW92ZUZyYW1lU3JjLFxuICAgIHdyaXRlRnJhbWUsXG4gICAgZ2V0RnJhbWUsXG4gICAgaW5qZWN0U3JjLFxuICAgIGNyZWF0ZUZyYW1lLFxuICAgIGxvYWRJbklmcmFtZSxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL2lmcmFtZU1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQ7XG5cbiAgY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwic2hpbXNcIikoZG9jdW1lbnQpO1xuICBjb25zdCAkJCA9IHNoaW1zLiQkO1xuXG4gIC8qKlxuICAgKiBpc0VsZW1lbnQgY2hlY2tzIGlmIGEgZWxlbWVudCBpcyBhIERPTSBub2RlLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzRWxlbWVudCA9IChvYmopID0+IG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBtYXBUZXh0IHRha2VzIGFuIGVsbWVudCBsaXN0IGFuZCByZXR1cm4gYSBhcnJheSBvZiB0ZXh0Tm9kZXMuXG4gICAqIEBwYXJhbSAge0RPTUVsZW1lbXR9IGVsbSAgIERPTUVsZW1lbXRcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgQXJyYXlcbiAgICovXG4gIGNvbnN0IG1hcFRvVGV4dCA9IGZ1bmN0aW9uIG1hcFRleHQoZWxtKSB7XG4gICAgY29uc3QgZWxtTGlzdCA9ICQkKGVsbSwgZG9jdW1lbnQpO1xuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdO1xuXG4gICAgLypcbiAgICAgIFdlIG5lZWQgdG8gdXNlIGEgZm9yIGBvZmAgbG9vcCBoZXJlIGNhdXNlIGl0cyBhIE5vZGVMaXN0IGFuZCBub3QgYW5cbiAgICAgIGFycmF5LlxuICAgICovXG4gICAgZm9yIChsZXQgaXRlbSBvZiBlbG1MaXN0KSB7XG4gICAgICB0ZXh0Tm9kZXMucHVzaChpdGVtLnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0Tm9kZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIGVsbURlbGVnYXRvciBkZWxlZ2F0ZSBpdGVtc1xuICAgKiBAcGFyYW0gIHtET01FbGVtZW50fSBlbG0gVGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBkZWxlZ2F0ZXMuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnQgQm9vbGVhbiB0byBjaGVjayB3aGljaCBlbGVtZW50cyB0byBkZWxlZ2F0ZSB0by5cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIGNoZWNrVGFyZ2V0IGZ1bmN0aW9uIGFuZCBhIGNhbGxiYWNrLlxuICAgKi9cbiAgY29uc3QgZWxtRGVsZWdhdG9yID0gZnVuY3Rpb24gZWxtRGVsZWdhdG9yKGVsbSwgZXZlbnQpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbG0pKSB0aHJvdyBuZXcgRXJyb3IoZWxtICsgXCIgbmVlZHMgdG8gYmUgYSBlbGVtZW50LlwiKTtcbiAgICBpZiAoZWxtLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKGVsbSArIFwiIG5lZWRzIHRvIGJlIGVsZW1lbnQgbGlzdFwiKTtcblxuICAgIHJldHVybiBmdW5jdGlvbihjaGVja1RhcmdldCwgY2FsbGJhY2spIHtcbiAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoY2hlY2tUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGUudGFyZ2V0LCBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoXCJObyB0YXJnZXQgbWF0Y2hlZFwiKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7ZWxtRGVsZWdhdG9yLCBtYXBUb1RleHQsIGlzRWxlbWVudH07XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL2RvbV9oZWxwZXIuanMiLCIvKiBzaGltcyAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltcyhkb2N1bWVudCkge1xuICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQ7XG5cbiAgY29uc3QgJCA9IGZ1bmN0aW9uIHFzKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciguLi5hcmdzKTtcbiAgfTtcblxuICBjb25zdCAkJCA9IGZ1bmN0aW9uIHFzQWxsKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCguLi5hcmdzKTtcbiAgfTtcblxuICByZXR1cm4geyQsICQkfTtcbn07XG4vKiBzaGltcyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9zaGltcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=