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
	
	var iframe = __webpack_require__(3)(document);
	var shims = __webpack_require__(5)(document);
	var utils = __webpack_require__(4)(document);
	var particleLib = __webpack_require__(6);
	var DEFAULT_EXAMPLE = "random_vectors";
	
	var sethash = function sethash(fragment) {
	  return window.location.hash = fragment || "";
	};
	
	document.addEventListener("DOMContentLoaded", function () {
	  window.particleLib = particleLib;
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
	        console.log("home");
	        break;
	      }
	    case "/examples":
	      {
	        utils.elmDelegator($(".list-examples"), "click", function check(elm) {
	          return elm.tagName === "A";
	        }, function (err, target, evt) {
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
	        console.log("docs");
	        break;
	      }
	    case "/maths":
	      {
	        console.log("maths");
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

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var FIRST_IFRAME = true;
	
	module.exports = function iframeHandler(document) {
	  document = document || this.document;
	
	  var domHelper = __webpack_require__(4)(document);
	  var shims = __webpack_require__(5)(document);
	
	  var $ = shims.$;
	  var $$ = shims.$$;
	
	  var firstState = FIRST_IFRAME;
	
	  /**
	   * [fetchExample description]
	   * @param  {[type]} id [description]
	   * @return {[type]}    [description]
	   */
	  var fetchExample = function fetchExample(id) {
	    return fetch("/examples/" + id).then(function (response) {
	      return response.text().then(function (txt) {
	        return txt;
	      });
	    }).catch(function (err) {
	      console.error(new Error(err));
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
	                }).catch(function (err) {
	                  return console.error(err);
	                })
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
	          }).catch(function (err) {
	            return console.error(err);
	          })
	        };
	      }();
	
	      if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	    }
	
	    console.log("Example already exsists dont do anything..");
	
	    return false;
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (document) {
	  document = document || this.document;
	
	  var shims = __webpack_require__(5)(document);
	  var $$ = shims.$$;
	
	  /**
	   * isElement checks if a element is a DOM node.
	   * @param  {Object}  obj
	   * @return {Boolean}
	   */
	  var isElement = function isElm(obj) {
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
	   * @param  {DOMElement} elm         The parent element of the delegates.
	   * @param  {Function}   checkTarget Boolean to check which elements to delegate to.
	   * @param  {Function}   callback    A callback that is passed a error as its first
	   *                                     argugmet and second argument as the delegate.
	   */
	  var elmDelegator = function elmDelegator(elm, event, checkTarget, callback) {
	    if (!isElement(elm)) throw new Error(elm + " needs to be a element.");
	    if (elm.length) throw new Error(elm + " needs to be element list");
	
	    elm.addEventListener(event, function (e) {
	      e.preventDefault();
	
	      if (checkTarget(e.target)) {
	        return callback(null, e.target, e);
	      }
	
	      return callback(new Error("No target matched"));
	    });
	  };
	
	  return { elmDelegator: elmDelegator, mapToText: mapToText, isElement: isElement };
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	/* shims */
	module.exports = function shims(document) {
	  document = document || this.document;
	
	  var $ = function qs(selector, baseNode) {
	    return document.querySelector(selector, baseNode);
	  };
	
	  var $$ = function qsAll(selector, baseNode) {
	    return document.querySelectorAll(selector, baseNode);
	  };
	
	  return { $: $, $$: $$ };
	};
	/* shims */

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["particle"] = factory();else root["particle"] = factory();
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
	
				module.exports = {
					Vector: Vector,
					Particle: Particle,
					Utils: Utils,
					Shapes: Shapes
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
	    * @return {Integer} - Cooridinates.
	    */
				Vector.prototype.getLength = function getLength() {
					var x = this.get("x");
					var y = this.get("y");
					return Math.hypot(x, y);
				};
	
				/**
	    * getAngle - Get the angle of coordinates from center plane.
	    * @memberOf Vector
	    * @return {Integer} - Cooridinates.
	    */
				Vector.prototype.getAngle = function getAngle() {
					var x = this.get("x");
					var y = this.get("y");
					return Math.atan2(y, x);
				};
	
				/**
	    * add - Should add vectors together given a vector
	    * @memberOf Vector
	    * @name add
	    * @alias ["+"]
	    * @param {Vector} - A given vector to add.
	    * @return {Vector} - A vector with cooridnates, or multiple vectors.
	    */
	
				Vector.prototype.add = Vector.prototype["+"] = function add(v2) {
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
	    * @example {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
	    * @name subtract
	    * @param  {Vector} v2 A vector that contains state.
	    * @return {Vector} A vector that contains a reduced state.
	    */
				Vector.prototype.subtract = Vector.prototype["-"] = function subtract(v2) {
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
	    * @name multiply
	    * @param  {Vector} v2 A vector that contains state.
	    * @return {Vector}    A vector that contains a reduced state.
	    */
				Vector.prototype.multiply = Vector.prototype["*"] = function multiply(v2) {
					return this.create(this.get("x") * v2.get("x"), this.get("y") * v2.get("y"));
				};
	
				/**
	    * Divide vectors together.
	    * @memberOf Vector
	    * @name Divide
	    * @param  {Vector} v2 A vector that contains state.
	    * @return {Vector}    A vector that contains a reduced state.
	    */
				Vector.prototype.divide = Vector.prototype["/"] = function divide(v2) {
					return this.create(this.get("x") / v2.get("x"), this.get("y") / v2.get("y"));
				};
	
				/**
	    * Adds to current state the state of v2
	    * @memberOf Vector
	    * @param {Vector} [v2] - A vector that contains state.
	    * @return {Object} [state] - Key value pair of coordinates
	    */
				Vector.prototype.addTo = Vector.prototype["+="] = function addTo(v2) {
					this.state.x = this.get("x") + v2.get("x");
					this.state.y = this.get("y") + v2.get("y");
					return this.state;
				};
	
				/**
	    * Subtracts from current state the state of v2
	    * @param {Vector} [v2] - A vector that contains state.
	    * @return {Object} [state] - Key value pair of coordinates
	    */
				Vector.prototype.subtractFrom = Vector.prototype["-="] = function subtractFrom(v2) {
					this.state.x = this.get("x") - v2.get("x");
					this.state.y = this.get("y") - v2.get("y");
					return this.state;
				};
	
				/**
	    * mulitplies by current state the state of v2
	    * @param {Vector} [v2] - A vector that contains state.
	    * @return {Object} [state] - Key value pair of coordinates
	    */
				Vector.prototype.multiplyBy = Vector.prototype["*="] = function multiplyBy(v2) {
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
				Vector.prototype.divideBy = Vector.prototype["/="] = function divideBy(v2) {
					this.state.x = this.get("x") / v2.get("x");
					this.state.y = this.get("y") / v2.get("y");
					return this.state;
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
	    * @name randomBetween
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
	
					xMin = Math.max(xMin, xMax);
					xMax = Math.min(xMin, xMax);
					yMin = Math.max(yMin, yMax);
					yMax = Math.min(yMin, yMax);
	
					var y = utils.randomBetween(yMin, yMax);
					var x = utils.randomBetween(xMin, xMax);
	
					return this.create(x, y);
				};
	
				module.exports = Vector;
	
				/***/
			},
			/* 3 */
			/***/function (module, exports) {
	
				"use strict";
	
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
	    * @name  precent
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
	    * @name  clamp
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
	    * @name  randomRange
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
	    * @name  distanceXY
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
	    * @name  distanceVec
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
	    * @name  inRange
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
	    * @name  rangeIntersect
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
	    * @name  vectorIntersect
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
	    * @name  collisionRect
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
	    * @name  collisionCircle
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
	    * @name  circlePointCollision
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
	    * @name  collisionCircleVec
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
	    * @name  collisionRectPoint
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
	    * @name collisionRectVec
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
	    * @name throttle
	    * @description Run a function only if the given time to allow the function execute
	    * has passed. If
	    * @param  {Function} func A function to call every delta.
	    * @param  {Number} wait The minimum time to wait.
	    * @param  {Object} options
	    * @return {Function}
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
	    * @name setLength
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
	    * @name setAngle
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
	    * @name degToRad
	    * @memberOf Utils
	    * @description Coverts degrees to radians
	    * @param  {number} deg Degress
	    * @return {number}
	    */
				Utils.degToRad = function (deg) {
					return deg / 180 * Math.PI;
				};
	
				/**
	    * @name radToDeg
	    * @memberOf Utils
	    * @description Coverts radians to degress
	    * @param  {number} rad
	    * @return {number}
	    */
				Utils.radToDeg = function (rad) {
					return rad * 180 / Math.PI;
				};
	
				/**
	    * @name  roundToPlaces
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
	    * @name roundToMultiple
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
	    * @name quadraticBezier
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
	    * @name cubicBezier
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
	    * @name quadtraticBezierPoint
	    * @memberOf Utils
	    * @param  {number} p0
	    * @param  {number} p1
	    * @param  {number} p2
	    * @param  {number} t
	    * @param  {Object} pFinal
	    * @return {number}
	    */
				Utils.quadraticBezierPoint = function (p0, p1, p2, t) {
					var pFinal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
					pFinal.x = Math.pow(1 - t, 2) * p0.x + (1 - t) * 2 * t * p1.x + t * t * p2.x;
					pFinal.y = Math.pow(1 - t, 2) * p0.y + (1 - t) * 2 * t * p1.y + t * t * p2.y;
					return pFinal;
				};
	
				/**
	    * @name cubicBezierPoint
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
					var pFinal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	
					pFinal.x = Math.pow(1 - t, 3) * p0.x + Math.pow(1 - t, 2) * 3 * t * p1.x + (1 - t) * 3 * t * t * p2.x + t * t * t + p3.x;
					pFinal.y = Math.pow(1 - t, 3) * p0.y + Math.pow(1 - t, 2) * 3 * t * p1.y + (1 - t) * 3 * t * t * p2.y + t * t * t + p3.x;
					return pFinal;
				};
	
				/**
	    * @name multiCurve
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
	
				module.exports = Utils;
	
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
	    * @name create
	    * @description Create a particle given a direction and magnitude.
	    * @memberOf Particle
	    * @param  {Object}   opts optional state values to pass to create.
	    * @return {Particle} returns a particle
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
	    * @name accelerate
	    * @description A change in velocity.
	    *
	    * @memberOf Particle
	    * @param  {Integer} ax
	    * @param  {Integer} ay
	    * @return {Object} Acceleration vector.
	    */
				Particle.prototype.accelerate = function accelerate() {
					var ax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
					var ay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
					this.state.vx += ax;
					this.state.vy += ay;
					return { ax: ax, ay: ay };
				};
	
				/**
	    * @name update
	    * @description A update a position of a particle
	    * based on its gravity and fricition. Gravity is usually a acceleration
	    * vector.
	    *
	    * @memberOf Particle
	    * @param  {Integer} fric Fricition to apply.
	    * @param  {Integer} grav Gravity to apply.
	    * @return {Object} Position state.
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
	    * @name setSpeed
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
	    * @name setHeading
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
	    * @name getSpeed
	    * @description get the length of the velocity vector.
	    * @memberOf Particle
	    * @param  {number} x
	    * @param  {number} y
	    * @return {number} force of velocity vector.
	    */
				Particle.prototype.getSpeed = function getSpeed() {
					var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
					var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
					return Math.hypot(this.state.vx, this.state.vy);
				};
	
				/**
	    * @name getHeading
	    * @description get the angle of the velocity vector.
	    * @memberOf Particle
	    * @param  {number} x
	    * @param  {number} y
	    * @return {number} angle of velocity vector.
	    */
				Particle.prototype.getHeading = function getHeading() {
					var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
					var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
					return Math.atan2(y, x);
				};
	
				/**
	    * @name addSpring
	    * @description add spring to springs array
	    * @memberOf Particle
	    * @param {Object} spring A spring object
	    * @return {Object}
	    */
				Particle.prototype.addSpring = function addSpring(spring) {
					this.removeSpring(spring);
					this.state.springs.push(spring);
					return spring;
				};
	
				/**
	    * @name removeSpring
	    * @description remove a specific string from the springs array
	    * @memberOf Particle
	    * @param  {Object} spring
	    */
				Particle.prototype.removeSpring = function removeSpring(spring) {
					for (var i = 0; i < this.state.springs.length; i++) {
						if (spring.point.state.x === this.state.springs[i].point.state.x && spring.point.state.y === this.state.springs[i].point.state.y) {
							this.state.springs.splice(i, 1);
							break;
						}
					}
				};
	
				/**
	    * angleTo - Asumming we know where
	    * the other particle is on the canvas. We can use
	    * the angle formulae to figure out the angle
	    * between two particle. Using arctangent is fine.
	    * but because the corrdinate plane is filped on the
	    * Y axis we use atan2 to get the right values. Explained
	    * in API Docs.
	    *
	    * @memberOf Particle
	    * @param  {Particle} p2      A particle instance.
	    * @return {Integer}  Angle   A angle.
	    */
				Particle.prototype.angleTo = function angelTo(p2) {
					var dx = p2.state.x - this.state.x;
					var dy = p2.state.y - this.state.y;
					return Math.atan2(dy, dx);
				};
	
				/**
	    * @name distanceTo
	    * @description Assuming we know where both particle are on the canvas.
	    * we can use the distance formuale to figure out the distance
	    * between the two particles.
	    *
	    * @memberOf Particle
	    * @param  {Particle} p2      A particle instance
	    * @return {Integer}  Angle   A Distance
	    */
				Particle.prototype.distanceTo = function distanceTo(p2) {
					var dx = p2.state.x - this.state.x;
					var dy = p2.state.y - this.state.y;
					return Math.hypot(dx, dy);
				};
	
				/**
	    * @name addMass
	    * @description Append a particle to the masses array.
	    * @param {Particle} mass
	    */
				Particle.prototype.addMass = function (mass) {
					this.removeMass(mass);
					this.state.masses.push(mass);
				};
	
				/**
	    * @name removeMass
	    * @description Remove a particle for the masses array.
	    * @param  {Particle} mass
	    */
				Particle.prototype.removeMass = function (mass) {
					for (var i = 0; i < this.state.masses.length; i++) {
						if (mass.state.x === this.state.masses[i].state.x && mass.state.y === this.state.masses[i].state.y) {
							this.state.masses.splice(i, 1);
							break;
						}
					}
				};
	
				/**
	    * @name gravitateTo
	    * @memberOf Particle
	    * @description Applys gravitation to the input particle.
	    * @param  {Particle} p2
	    * @return {Object}
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
	
				/**
	    * @name  generator
	    * @memberOf Particle
	    * @description generate a bunch of particles.
	    * @param  {Number}                     num       The maximum amount of generated particles needed.
	    * @param  {Object}                     opts      Options to pass each particle
	    * @param  {Particle~generatorCallback} callback  Function to allow mapping.
	    * @return {Particle[]}
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
	    * @param {Particle}
	    */
	
				/**
	    * @name updatePos
	    * @memberOf Particle
	    * @description Apply velocity to the position.
	    * @param  {Integer} vx
	    * @param  {Integer} vy
	    * @return {Object} Position state after velocity has been applied
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
	    * @name springFromTo
	    * @memberOf Particle
	    * @description Given two particles calculate the
	    * spring force applied to both particles.
	    * @param  {Particle} p
	    * @param  {Integer}  spring  Given offset for the particles
	    * @param  {Integer}  offset  The spring coefficent
	    * @return {Particle[]}
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
	    * @name  springToPoint
	    * @memberOf Particle
	    * @description Given a particle, a vector, and a spring coeffiencent accelerate
	    * the particle according to the distance its is from the point.
	    * @param  {Object} p A spring object.
	    * @return {Particle}
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
	    * @name handleSprings
	    * @description Apply spring point to all internal springs.
	    * @param  {springs} springs An array of springs to spring to.
	    * @return {Object[]}
	    */
				Particle.prototype.handleSprings = function handleSprings() {
					var springs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.springs;
	
					for (var i = 0; i < springs.length; i++) {
						this.springToPoint(springs[i]);
					}
					return springs;
				};
	
				/**
	    * @name handleMasses
	    * @description For each mass in the masses array apply gravitate to it.
	    * @param  {Particles[]|Object[]} masses
	    * @return {Particles[]|Object[]}
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
					} else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function' || target == null) {
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
				var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;
	
				/** Used as a reference to the global object. */
				var root = freeGlobal || freeSelf || Function('return this')();
	
				module.exports = root;
	
				/***/
			},
			/* 29 */
			/***/function (module, exports) {
	
				/* WEBPACK VAR INJECTION */(function (global) {
					/** Detect free variable `global` from Node.js. */
					var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
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
					var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
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
					var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
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
					return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
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
					var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
					/** Detect free variable `module`. */
					var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
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
					var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
					/** Detect free variable `module`. */
					var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
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
					var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
					/** Detect free variable `module`. */
					var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
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
	    * @name  circle
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
	    * @name  rect
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
	    * @param  {Particle} p
	    * @return {Particle}
	    */
				Shapes.prototype.pCircle = function particleCircle(p) {
					this.circle(p.state.x, p.state.y, p.state.radius, p.state.color);
					return p;
				};
	
				/**
	    * pRect
	    * @param  {Particle} p
	    * @return {Particle}
	    */
				Shapes.prototype.pRect = function particleRect(p) {
					this.rect(p.state.x, p.state.y, p.state.width, p.state.height, p.state.color);
					return p;
				};
	
				/**
	    * @name  drawLineXY
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
	    * @name drawLineVec
	    * @param  {Vector} vec0
	    * @param  {Vector} vec1
	    * @return {Void}
	    */
				Shapes.prototype.drawLineVec = function (vec0, vec1) {
					this.drawLineXY(vec0.get("x"), vec0.get("y"), vec1.get("x"), vec1.get("y"));
					return void 0;
				};
	
				/**
	    * @name grid
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
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODQ1ZmI5MWExMzNlZGY1MjdlMjUiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2lmcmFtZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9kb21faGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvc2hpbXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrOi93ZWJwYWNrL2Jvb3RzdHJhcCBlYWQwNjU3ZWJlZGIzNTNkMmVmNiIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29weVN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lTWFwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hZGRNYXBFbnRyeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVNldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYWRkU2V0RW50cnkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3NoYXBlcy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbImlmcmFtZSIsInJlcXVpcmUiLCJkb2N1bWVudCIsInNoaW1zIiwidXRpbHMiLCJwYXJ0aWNsZUxpYiIsIkRFRkFVTFRfRVhBTVBMRSIsInNldGhhc2giLCJmcmFnbWVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRobmFtZSIsInRleHROb2RlcyIsIm1hcFRvVGV4dCIsIiQiLCJsZW5ndGgiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlbG1EZWxlZ2F0b3IiLCJjaGVjayIsImVsbSIsInRhZ05hbWUiLCJlcnIiLCJ0YXJnZXQiLCJldnQiLCJ0ZXh0IiwibG9hZEluSWZyYW1lIiwiaGFzaFF1ZXJ5Iiwic3Vic3RyIiwiaW5kZXhPZiIsIkZJUlNUX0lGUkFNRSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpZnJhbWVIYW5kbGVyIiwiZG9tSGVscGVyIiwiJCQiLCJmaXJzdFN0YXRlIiwiZmV0Y2hFeGFtcGxlIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInR4dCIsImNhdGNoIiwiZXJyb3IiLCJ3cml0ZUZyYW1lIiwicGFyZW50IiwiZnJhbWUiLCJpc0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImdldEZyYW1lIiwibmFtZSIsImluamVjdFNyYyIsInNyYyIsInNyY2RvYyIsImNyZWF0ZUZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUZyYW1lU3JjIiwic3JjRG9jIiwiZXhhbXBsZUV4aXN0cyIsImV4YW1wbGUiLCJhdHRyaWJ1dGVzIiwibm9kZVZhbHVlIiwiZSIsImV4aXN0aW5nRnJhbWUiLCJmaXJzdEZyYW1lIiwicGFyZW50RGl2IiwibmV3RnJhbWUiLCJpc0VsbSIsIm9iaiIsIkhUTUxFbGVtZW50IiwibWFwVGV4dCIsImVsbUxpc3QiLCJpdGVtIiwicHVzaCIsImV2ZW50IiwiY2hlY2tUYXJnZXQiLCJjYWxsYmFjayIsInByZXZlbnREZWZhdWx0IiwicXMiLCJzZWxlY3RvciIsImJhc2VOb2RlIiwicXVlcnlTZWxlY3RvciIsInFzQWxsIiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVAsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQWtDLG9CQUFvQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBd0MsNEJBQTRCO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZELFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVCwrRUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7V0FBTyxVQUFVLGFBQWEsVUFBUyxJQUFJLElBQUksSUFBSSxJQUFxQjtTQUFBLDRFQUN0RTs7VUFBSyxJQUNMO1VBQUssSUFBSSxjQUNUO1VBQUssSUFBSSxPQUFPLElBQ2hCO1VBQUssSUFBSSxPQUFPLElBQ2hCO1VBQUssSUFDTjtBQUVEOztBQU1BOzs7Ozs7V0FBTyxVQUFVLGNBQWMsVUFBUyxNQUFNLE1BQzVDO1VBQUssV0FBVyxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQ2xFO1lBQU8sS0FDUjtBQUVEOztBQU9BOzs7Ozs7O1dBQU8sVUFBVSxPQUFPLFVBQVMsT0FBTyxRQUFtQztTQUFBO1NBQUEsNEVBQ3pFOztVQUFLLElBQ0w7VUFBSyxJQUFJLGNBRVQ7O1VBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUssVUFDOUI7V0FBSyxJQUFJLE9BQU8sR0FDaEI7V0FBSyxJQUFJLE9BQU8sR0FDakI7QUFFRDs7VUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsS0FBSyxVQUMvQjtXQUFLLElBQUksT0FBTyxHQUNoQjtXQUFLLElBQUksT0FBTyxPQUNqQjtBQUVEOztVQUFLLElBQ047QUFFRDs7V0FBTyxVQUFVOzs7Ozs7Ozs7Ozs7OztBQzlIakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODQ1ZmI5MWExMzNlZGY1MjdlMjUiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG5cbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy51cmwgPSBpbnB1dFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KCdcXHJcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgaWZyYW1lID0gcmVxdWlyZShcImlmcmFtZU1hbmFnZXIuanNcIikoZG9jdW1lbnQpO1xuY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwic2hpbXMuanNcIikoZG9jdW1lbnQpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiZG9tX2hlbHBlci5qc1wiKShkb2N1bWVudCk7XG5jb25zdCBwYXJ0aWNsZUxpYiA9IHJlcXVpcmUoXCIuL3ZlbmRvci9wYXJ0aWNsZV9saWIuanNcIik7XG5jb25zdCBERUZBVUxUX0VYQU1QTEUgPSBcInJhbmRvbV92ZWN0b3JzXCI7XG5cbmNvbnN0IHNldGhhc2ggPSAoZnJhZ21lbnQpID0+IHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gZnJhZ21lbnQgfHwgXCJcIjtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICB3aW5kb3cucGFydGljbGVMaWIgPSBwYXJ0aWNsZUxpYjtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICBjb25zdCBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgdGV4dE5vZGVzID0gdXRpbHMubWFwVG9UZXh0KFwiLmxpc3QtZXhhbXBsZXMgbGkgYVwiKTtcbiAgY29uc3QgJCA9IHNoaW1zLiQ7XG5cbiAgaWYgKHRleHROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZXMgbm8gdGV4dE5vZGVzIHRvIGNoZWNrIGFnYWluc3QuXCIpO1xuICB9XG5cbiAgc3dpdGNoIChwYXRobmFtZSkge1xuICBjYXNlKFwiL1wiKToge1xuICAgIGNvbnNvbGUubG9nKFwiaG9tZVwiKTtcbiAgICBicmVhaztcbiAgfVxuICBjYXNlKFwiL2V4YW1wbGVzXCIpOiB7XG4gICAgdXRpbHMuZWxtRGVsZWdhdG9yKCQoXCIubGlzdC1leGFtcGxlc1wiKSwgXCJjbGlja1wiLCBmdW5jdGlvbiBjaGVjayhlbG0pIHtcbiAgICAgIHJldHVybiBlbG0udGFnTmFtZSA9PT0gXCJBXCI7XG4gICAgfSwgZnVuY3Rpb24oZXJyLCB0YXJnZXQsIGV2dCkge1xuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICBzZXRoYXNoKHRhcmdldC50ZXh0KTtcbiAgICAgIGlmcmFtZS5sb2FkSW5JZnJhbWUodGFyZ2V0LnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlcmVzIGEgcGFnZSBmcmFnbWVudCBsb2FkIHRoZSByaWdodCBleGFtcGxlLlxuICAgIGlmIChoYXNoLmxlbmd0aCkge1xuICAgICAgY29uc3QgaGFzaFF1ZXJ5ID0gaGFzaC5zdWJzdHIoMSk7XG5cbiAgICAgIGlmICh0ZXh0Tm9kZXMuaW5kZXhPZihoYXNoUXVlcnkpID4gLTEpIHtcbiAgICAgICAgaWZyYW1lLmxvYWRJbklmcmFtZShoYXNoUXVlcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgLy8gRGVmYXVsdCB0byB0aGUgYW4gZXhhbXBsZSBpZiB0aGVyZXMgbm8gaGFzaC5cbiAgICBpZiAoaGFzaC5sZW5ndGggPCAxKSB7XG4gICAgICBzZXRoYXNoKERFRkFVTFRfRVhBTVBMRSk7XG4gICAgICBpZnJhbWUubG9hZEluSWZyYW1lKERFRkFVTFRfRVhBTVBMRSk7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvZG9jc1wiKToge1xuICAgIGNvbnNvbGUubG9nKFwiZG9jc1wiKTtcbiAgICBicmVhaztcbiAgfVxuICBjYXNlKFwiL21hdGhzXCIpOiB7XG4gICAgY29uc29sZS5sb2coXCJtYXRoc1wiKTtcbiAgICBicmVhaztcbiAgfVxuICBkZWZhdWx0OiB7XG4gICAgY29uc29sZS5sb2coXCJubyByb3V0ZSBtYXRjaGVkIDQwNCA6KFwiKTtcbiAgfVxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCIgIGNvbnN0IEZJUlNUX0lGUkFNRSA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaWZyYW1lSGFuZGxlcihkb2N1bWVudCkge1xuICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQ7XG5cbiAgY29uc3QgZG9tSGVscGVyID0gcmVxdWlyZShcIi4vZG9tX2hlbHBlclwiKShkb2N1bWVudCk7XG4gIGNvbnN0IHNoaW1zID0gcmVxdWlyZShcIi4vc2hpbXNcIikoZG9jdW1lbnQpO1xuXG4gIGNvbnN0ICQgPSBzaGltcy4kO1xuICBjb25zdCAkJCA9IHNoaW1zLiQkO1xuICBcbiAgbGV0IGZpcnN0U3RhdGUgPSBGSVJTVF9JRlJBTUU7XG5cbiAgLyoqXG4gICAqIFtmZXRjaEV4YW1wbGUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaWQgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGZldGNoRXhhbXBsZSA9IGZ1bmN0aW9uIGZldGNoRXhhbXBsZShpZCkge1xuICAgIHJldHVybiBmZXRjaChcIi9leGFtcGxlcy9cIiArIGlkKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4oZnVuY3Rpb24odHh0KSB7XG4gICAgICAgIHJldHVybiB0eHQ7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIFt3cml0ZUZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHBhcmVudCBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZnJhbWUgIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3Qgd3JpdGVGcmFtZSA9IGZ1bmN0aW9uIHdyaXRlRnJhbWUocGFyZW50LCBmcmFtZSkge1xuICAgIGlmICghZG9tSGVscGVyLmlzRWxlbWVudChwYXJlbnQpIHx8ICFkb21IZWxwZXIuaXNFbGVtZW50KGZyYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHBhcmVudCArIFwiIHRoaXMgcGFyZW50IGlzbid0IGEgRE9NIGVsZW1lbnQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogW2dldEZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5hbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgZ2V0RnJhbWUgPSBmdW5jdGlvbiBnZXRGcmFtZShuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gJChcImlmcmFtZVtkYXRhLWV4YW1wbGVdXCIpO1xuICAgIHJldHVybiAkKFwiaWZyYW1lW2RhdGEtZXhhbXBsZV49XCIgKyBuYW1lICsgXCJdXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbaW5qZWN0U3JjIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHNyYyAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBmcmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgaW5qZWN0U3JjID0gZnVuY3Rpb24gaW5qZWN0U3JjKHNyYywgZnJhbWUpIHtcbiAgICBmcmFtZS5zcmNkb2MgPSBzcmM7XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbY3JlYXRlRnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUgfHwgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgXCIgTm90IGEgdmFsaWQgbmFtZSBmb3IgYSBpZC5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvdy1zYW1lLW9yaWdpblwiLCB0cnVlKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3ctc2NyaXB0c1wiLCB0cnVlKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIHRydWUpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZyYW1lX2V4YW1wbGVcIik7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtZXhhbXBsZVwiLCBuYW1lKTtcblxuICAgIHJldHVybiBpZnJhbWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtyZW1vdmVGcmFtZVNyYyBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSB0YXJnZXQgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCByZW1vdmVGcmFtZVNyYyA9IGZ1bmN0aW9uIHJlbW92ZUZyYW1lU3JjKHRhcmdldCkge1xuICAgIGlmICghdGFyZ2V0KSB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIHRhcmdldFwiKTtcblxuICAgIGlmICghZG9tSGVscGVyLmlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZ2V0RnJhbWUodGFyZ2V0KS5zcmNEb2MgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0LnNyY0RvYyA9IFwiXCI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtleGFtcGxlRXhpc3RzIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGV4YW1wbGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgZXhhbXBsZUV4aXN0cyA9IGZ1bmN0aW9uIGV4YW1wbGVFeGlzdHMoZXhhbXBsZSkge1xuICAgIGlmICghZXhhbXBsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGlkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlkID0gZ2V0RnJhbWUoZXhhbXBsZSlcbiAgICAgICAgLmF0dHJpYnV0ZXNbXCJkYXRhLWV4YW1wbGVcIl1cbiAgICAgICAgLm5vZGVWYWx1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICByZXR1cm4gaWQgPT09IGV4YW1wbGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbbG9hZEluSWZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5hbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgbG9hZEluSWZyYW1lID0gZnVuY3Rpb24gbG9hZEluSWZyYW1lKGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJsb2FkIGluIGlGcmFtZVwiKTtcbiAgICAvLyBJZiB0aGUgZXhhbXBsZSBhbHJlYWR5IGV4c2lzdHMgZG9udCBkbyBhbnl0aGluZy5cbiAgICBpZiAoIWV4YW1wbGVFeGlzdHMoaWQpKSB7XG4gICAgICAvLyBJZiB3ZSBhcmUgbm90IHRoZSBmaXJzdCBmcmFtZSBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICBpZiAoIWZpcnN0U3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFeGFtcGxlIGRvZXNuJ3QgZXhzaXN0IGJ1dCB3ZSBhcmUgdGhlIG5leHQgaWZyYW1lLlwiKTtcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBzdGF0ZSBhbmQgcmVtb3ZlIG9sZCBzcmMgYW5kIGluamVjdCBuZXcgc3JjLlxuICAgICAgICBjb25zdCBleGlzdGluZ0ZyYW1lID0gZ2V0RnJhbWUoKTtcbiAgICAgICAgcmVtb3ZlRnJhbWVTcmMoZXhpc3RpbmdGcmFtZSk7XG4gICAgICAgIGV4aXN0aW5nRnJhbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1leGFtcGxlXCIsIGlkKTtcbiAgICAgICAgcmV0dXJuIGZldGNoRXhhbXBsZShpZClcbiAgICAgICAgICAudGhlbigoc3JjKSA9PiBpbmplY3RTcmMoc3JjLCBleGlzdGluZ0ZyYW1lKSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJFeGFtcGxlIGRvZXNuJ3QgZXhzaXN0IGJ1dCB3ZSBhcmUgdGhlIGZpcnN0IGlmcmFtZSBldmVyLlwiKTtcblxuICAgICAgLy8gVG9nZ2xlIHRoZSBzdGF0ZS5cbiAgICAgIGZpcnN0U3RhdGUgPSAhZmlyc3RTdGF0ZTtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZnJhbWVcbiAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBjcmVhdGVGcmFtZShpZCk7XG4gICAgICBjb25zdCBwYXJlbnREaXYgPSAkKFwiLndyYXBwZXJfX2ZyYW1lXCIpO1xuICAgICAgLy8gSWYgd2UgYXJlIG5vdCB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIGRvY3VtZW50IGRvIHRoaXMgcmVndWxhciBzdHVmZi5cbiAgICAgIHJldHVybiBmZXRjaEV4YW1wbGUoaWQpXG4gICAgICAgIC50aGVuKChzcmMpID0+IGluamVjdFNyYyhzcmMsIGZpcnN0RnJhbWUpKVxuICAgICAgICAudGhlbigobmV3RnJhbWUpID0+IHdyaXRlRnJhbWUocGFyZW50RGl2LCBuZXdGcmFtZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiRXhhbXBsZSBhbHJlYWR5IGV4c2lzdHMgZG9udCBkbyBhbnl0aGluZy4uXCIpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG5cbiAgcmV0dXJuIHtcbiAgICByZW1vdmVGcmFtZVNyYyxcbiAgICB3cml0ZUZyYW1lLFxuICAgIGdldEZyYW1lLFxuICAgIGluamVjdFNyYyxcbiAgICBjcmVhdGVGcmFtZSxcbiAgICBsb2FkSW5JZnJhbWUsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9pZnJhbWVNYW5hZ2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50O1xuXG4gIGNvbnN0IHNoaW1zID0gcmVxdWlyZShcInNoaW1zXCIpKGRvY3VtZW50KTtcbiAgY29uc3QgJCQgPSBzaGltcy4kJDtcblxuICAvKipcbiAgICogaXNFbGVtZW50IGNoZWNrcyBpZiBhIGVsZW1lbnQgaXMgYSBET00gbm9kZS5cbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc0VsZW1lbnQgPSBmdW5jdGlvbiBpc0VsbShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIG1hcFRleHQgdGFrZXMgYW4gZWxtZW50IGxpc3QgYW5kIHJldHVybiBhIGFycmF5IG9mIHRleHROb2Rlcy5cbiAgICogQHBhcmFtICB7RE9NRWxlbWVtdH0gZWxtICAgRE9NRWxlbWVtdFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBBcnJheVxuICAgKi9cbiAgY29uc3QgbWFwVG9UZXh0ID0gZnVuY3Rpb24gbWFwVGV4dChlbG0pIHtcbiAgICBjb25zdCBlbG1MaXN0ID0gJCQoZWxtLCBkb2N1bWVudCk7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gW107XG5cbiAgICAvKlxuICAgICAgV2UgbmVlZCB0byB1c2UgYSBmb3IgYG9mYCBsb29wIGhlcmUgY2F1c2UgaXRzIGEgTm9kZUxpc3QgYW5kIG5vdCBhblxuICAgICAgYXJyYXkuXG4gICAgKi9cbiAgICBmb3IgKGxldCBpdGVtIG9mIGVsbUxpc3QpIHtcbiAgICAgIHRleHROb2Rlcy5wdXNoKGl0ZW0udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHROb2RlcztcbiAgfTtcblxuICAvKipcbiAgICogZWxtRGVsZWdhdG9yIGRlbGVnYXRlIGl0ZW1zXG4gICAqIEBwYXJhbSAge0RPTUVsZW1lbnR9IGVsbSAgICAgICAgIFRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgZGVsZWdhdGVzLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICBjaGVja1RhcmdldCBCb29sZWFuIHRvIGNoZWNrIHdoaWNoIGVsZW1lbnRzIHRvIGRlbGVnYXRlIHRvLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICBjYWxsYmFjayAgICBBIGNhbGxiYWNrIHRoYXQgaXMgcGFzc2VkIGEgZXJyb3IgYXMgaXRzIGZpcnN0XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VnbWV0IGFuZCBzZWNvbmQgYXJndW1lbnQgYXMgdGhlIGRlbGVnYXRlLlxuICAgKi9cbiAgY29uc3QgZWxtRGVsZWdhdG9yID0gZnVuY3Rpb24gZWxtRGVsZWdhdG9yKGVsbSwgZXZlbnQsIGNoZWNrVGFyZ2V0LCBjYWxsYmFjaykge1xuICAgIGlmICghaXNFbGVtZW50KGVsbSkpIHRocm93IG5ldyBFcnJvcihlbG0gKyBcIiBuZWVkcyB0byBiZSBhIGVsZW1lbnQuXCIpO1xuICAgIGlmIChlbG0ubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoZWxtICsgXCIgbmVlZHMgdG8gYmUgZWxlbWVudCBsaXN0XCIpO1xuXG4gICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGNoZWNrVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgZS50YXJnZXQsIGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKFwiTm8gdGFyZ2V0IG1hdGNoZWRcIikpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7ZWxtRGVsZWdhdG9yLCBtYXBUb1RleHQsIGlzRWxlbWVudH07XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL2RvbV9oZWxwZXIuanMiLCIvKiBzaGltcyAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltcyhkb2N1bWVudCkge1xuICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQ7XG5cbiAgY29uc3QgJCA9IGZ1bmN0aW9uIHFzKHNlbGVjdG9yLCBiYXNlTm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCBiYXNlTm9kZSk7XG4gIH07XG5cbiAgY29uc3QgJCQgPSBmdW5jdGlvbiBxc0FsbChzZWxlY3RvciwgYmFzZU5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciwgYmFzZU5vZGUpO1xuICB9O1xuXG4gIHJldHVybiB7JCwgJCR9O1xufTtcbi8qIHNoaW1zICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL3NoaW1zLmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWFkMDY1N2ViZWRiMzUzZDJlZjZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovd2VicGFjay9ib290c3RyYXAgZWFkMDY1N2ViZWRiMzUzZDJlZjYiLCJjb25zdCBWZWN0b3IgPSByZXF1aXJlKFwiLi9saWIvdmVjdG9yc1wiKTtcbmNvbnN0IFBhcnRpY2xlID0gcmVxdWlyZShcIi4vbGliL3BhcnRpY2xlXCIpO1xuY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi9saWIvdXRpbHNcIik7XG5jb25zdCBTaGFwZXMgPSByZXF1aXJlKFwiLi9saWIvc2hhcGVzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVmVjdG9yLFxuICBQYXJ0aWNsZSxcbiAgVXRpbHMsXG4gIFNoYXBlcyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9tYWluLmpzIiwiLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgeDogMCxcbiAgeTogMSxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gVmVjdG9yKHN0YXRlPUlOSVRJQUxfU1RBVEUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgLSBFYXN5IHdheSB0byBpbnN0YW50aWF0ZSBhIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge0ludH0geFxuICogQHBhcmFtICB7SW50fSB5XG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgQSBvYmplY3QgaW5oZXJpdGluZyBmcm9tIFZlY3Rvci5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoeD0wLCB5PTApIHtcbiAgY29uc3QgdmVjID0gbmV3IFZlY3Rvcih7eCwgeX0pO1xuICByZXR1cm4gdmVjO1xufTtcblxuLyoqXG4gKiBTZXQgLSBBIHNldHRlciBmb3IgdGhlIHZlY3RvciBjbGFzcy5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAgeyp9IHByb3BcbiAqIEBwYXJhbSAgeyp9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn0gSXMgdGhlIHByb3AgeW91ciBwYXNzaW5nIGluIGV4c2lzdC5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcCwgdmFsKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayB2YWwgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIHRoaXMuc3RhdGVbcHJvcF0gPSB2YWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIGdldCAtIEEgZ2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wICBUaGUgcHJvcCB0byBzZXQgb24gc3RhdGUuXG4gKiBAcmV0dXJuIHtWYWx1ZX0gICAgICAgIFRoZSB2YWx1ZSBhc3Nvc2lhdGVkIHdpdGggdGhlIHByb3AuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KHByb3ApIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcF07XG59O1xuXG4vKipcbiAqIHNldEFuZ2xlIC0gUGxvdCB0aGUgY29ycmRpbmF0ZXMgYmFzZWQgb24gcmFkaWFucyBnaXZlbi5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7UmFkaWFuc30gcmFkIEEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLlxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldEFuZ2xlID0gZnVuY3Rpb24gc2V0QW5nbGUocmFkKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayByYWQgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xufTtcblxuLyoqXG4gKiBzZXRMZW5ndGggLSBUYWtlcyBhIGxlbmd0aCBhbmQgc2V0cyBjb29yZGluYXRlLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtJbnRlZ2VyfSBsZW5ndGhcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXRMZW5ndGggPSBmdW5jdGlvbiBzZXRMZW5ndGgobGVuZ3RoKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayByYWQgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBjb25zdCByYWQgPSB0aGlzLmdldEFuZ2xlKCk7XG5cbiAgdGhpcy5zZXQoXCJ4XCIsIE1hdGguY29zKHJhZCkgKiBsZW5ndGgpO1xuICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG59O1xuXG4vKipcbiAqIGdldExlbmd0aCAtIEdldHMgbGVuZ3RoIG9mIHRoZSBjb29yZGluYXRlcyBmcm9tIGNlbnRlciBwbGFuZS5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEByZXR1cm4ge0ludGVnZXJ9IC0gQ29vcmlkaW5hdGVzLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgY29uc3QgeCA9IHRoaXMuZ2V0KFwieFwiKTtcbiAgY29uc3QgeSA9IHRoaXMuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSk7XG59O1xuXG4vKipcbiAqIGdldEFuZ2xlIC0gR2V0IHRoZSBhbmdsZSBvZiBjb29yZGluYXRlcyBmcm9tIGNlbnRlciBwbGFuZS5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEByZXR1cm4ge0ludGVnZXJ9IC0gQ29vcmlkaW5hdGVzLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24gZ2V0QW5nbGUoKSB7XG4gIGNvbnN0IHggPSB0aGlzLmdldChcInhcIik7XG4gIGNvbnN0IHkgPSB0aGlzLmdldChcInlcIik7XG4gIHJldHVybiBNYXRoLmF0YW4yKHksIHgpO1xufTtcblxuLyoqXG4gKiBhZGQgLSBTaG91bGQgYWRkIHZlY3RvcnMgdG9nZXRoZXIgZ2l2ZW4gYSB2ZWN0b3JcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBuYW1lIGFkZFxuICogQGFsaWFzIFtcIitcIl1cbiAqIEBwYXJhbSB7VmVjdG9yfSAtIEEgZ2l2ZW4gdmVjdG9yIHRvIGFkZC5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gLSBBIHZlY3RvciB3aXRoIGNvb3JpZG5hdGVzLCBvciBtdWx0aXBsZSB2ZWN0b3JzLlxuICovXG5cblZlY3Rvci5wcm90b3R5cGUuYWRkID0gVmVjdG9yLnByb3RvdHlwZVtcIitcIl0gPSBmdW5jdGlvbiBhZGQodjIpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHYyLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIiAmJiB2Mi5sZW5ndGgpIHtcbiAgICAvLyBSZWZhY3RvciB0byBtYWtlIG1vcmUgZWZmZWNpZW50IC8vXG4gICAgY29uc3QgdmVjcyA9IHYyXG4gICAgICAubWFwKCh2KSA9PiAoe3g6IHYuZ2V0KFwieFwiKSwgeTogdi5nZXQoXCJ5XCIpfSkpXG4gICAgICAucmVkdWNlKCh2MCwgdm4pID0+ICh7eDogdjAueCArIHZuLngsIHk6IHYwLnkgKyB2bi55fSksIHNlbGYuc3RhdGUpO1xuXG4gICAgcmV0dXJuIHNlbGYuY3JlYXRlKHZlY3MueCwgdmVjcy55KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICBzZWxmLmdldChcInhcIikgKyB2Mi5nZXQoXCJ4XCIpLFxuICAgIHNlbGYuZ2V0KFwieVwiKSArIHYyLmdldChcInlcIilcbiAgKTtcbn07XG5cbi8qKlxuICogc3VidHJhY3QgLSBzaG91bGQgc3VidHJhY3QgdGhlIGdpdmVuIHZlY3RvciB3aXRoIGl0cyBvd24gdmVjdG9yLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9IC0ge3g6IDIsIHk6IDJ9ID0ge3g6IDAsIHk6IDB9XG4gKiBAbmFtZSBzdWJ0cmFjdFxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IFZlY3Rvci5wcm90b3R5cGVbXCItXCJdID0gZnVuY3Rpb24gc3VidHJhY3QodjIpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHYyLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIiAmJiB2Mi5sZW5ndGgpIHtcbiAgICAvLyBSZWZhY3RvciB0byBtYWtlIG1vcmUgZWZmZWNpZW50IC8vXG4gICAgY29uc3QgdmVjcyA9IHYyLm1hcCgodikgPT4gKHt4OiB2LmdldChcInhcIiksIHk6IHYuZ2V0KFwieVwiKX0pKVxuICAgIC5yZWR1Y2UoKHYwLCB2bikgPT5cbiAgICAgICh7eDogdjAueCAtIHZuLngsIHk6IHYwLnkgLSB2bi55fSksXG4gICAgc2VsZi5zdGF0ZSk7XG5cbiAgICByZXR1cm4gc2VsZi5jcmVhdGUodmVjcy54LCB2ZWNzLnkpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgIHNlbGYuZ2V0KFwieFwiKSAtIHYyLmdldChcInhcIiksXG4gICAgc2VsZi5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKVxuICApO1xufTtcblxuLyoqXG4gKiBNdWxpdHBseWluZyB2ZWN0b3JzIHRvZ2V0aGVyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAZXhhbXBsZSB7eDogMiwgeTogMn0gKiB7eDogMiwgeTogMn0gPSB7eDogNCwgeTogNH1cbiAqIEBuYW1lIG11bHRpcGx5XG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICovXG5WZWN0b3IucHJvdG90eXBlLm11bHRpcGx5ID0gVmVjdG9yLnByb3RvdHlwZVtcIipcIl0gPSBmdW5jdGlvbiBtdWx0aXBseSh2Mikge1xuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKSxcbiAgICB0aGlzLmdldChcInlcIikgKiB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIERpdmlkZSB2ZWN0b3JzIHRvZ2V0aGVyLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQG5hbWUgRGl2aWRlXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmRpdmlkZSA9IFZlY3Rvci5wcm90b3R5cGVbXCIvXCJdID0gZnVuY3Rpb24gZGl2aWRlKHYyKSB7XG4gIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICB0aGlzLmdldChcInhcIikgLyB2Mi5nZXQoXCJ4XCIpLFxuICAgIHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIilcbiAgKTtcbn07XG5cbi8qKlxuICogQWRkcyB0byBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5hZGRUbyA9IFZlY3Rvci5wcm90b3R5cGVbXCIrPVwiXSA9IGZ1bmN0aW9uIGFkZFRvKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSArIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgZnJvbSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdEZyb20gPSBWZWN0b3IucHJvdG90eXBlW1wiLT1cIl0gPSBmdW5jdGlvbiBzdWJ0cmFjdEZyb20odjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC0gdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIG11bGl0cGxpZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeSA9IFZlY3Rvci5wcm90b3R5cGVbXCIqPVwiXSA9IGZ1bmN0aW9uIG11bHRpcGx5QnkodjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnkgPSBWZWN0b3IucHJvdG90eXBlW1wiLz1cIl0gPSBmdW5jdGlvbiBkaXZpZGVCeSh2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLyB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogcmFuZG9tIGdlbmVyYXRlIGEgdmVjdG9yIHdpdGggcmFuZG9tIHN0YXRlcy5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW4gLSBBIG1pbiByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggLSBBIG1heCByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiByVmVjdG9yKG1pbj0xLCBtYXg9MTApIHtcbiAgY29uc3QgeCA9IHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpO1xuICBjb25zdCB5ID0gdXRpbHMubGVycChNYXRoLnJhbmRvbSgpLCBtaW4sIG1heCk7XG4gIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbn07XG5cbi8qKlxuICogQG5hbWUgcmFuZG9tQmV0d2VlblxuICogQGRlc2NyaXB0aW9uIFJldHVybiBhIHZlY3RvciB0aGF0IGhhcyBhIHggYmV0d2VlbiB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKiAgICAgICAgICAgICAgYW5kIHkgZ2l2ZW4gYSByYW5nZS5cbiAqIEBwYXJhbSAge051bWJlcn0geE1pbiBNaW5tdW0geCB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSB4TWF4IE1heGltdW0geCB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSB5TWluIE1pbm11bSB5IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHlNYXggTWF4aW11bSB5IHZhbHVlXG4gKiBAcmV0dXJuIHtWZWN0b3J9XG4gKi9cblZlY3Rvci5wcm90b3R5cGUucmFuZG9tQmV0d2VlbiA9IGZ1bmN0aW9uIHJCZXR3ZWVuKHhNaW49MCwgeE1heD0xMCwgeU1pbj0wLCB5TWF4PTEwKSB7XG4gIHhNaW4gPSBNYXRoLm1heCh4TWluLCB4TWF4KTtcbiAgeE1heCA9IE1hdGgubWluKHhNaW4sIHhNYXgpO1xuICB5TWluID0gTWF0aC5tYXgoeU1pbiwgeU1heCk7XG4gIHlNYXggPSBNYXRoLm1pbih5TWluLCB5TWF4KTtcblxuICBjb25zdCB5ID0gdXRpbHMucmFuZG9tQmV0d2Vlbih5TWluLCB5TWF4KTtcbiAgY29uc3QgeCA9IHV0aWxzLnJhbmRvbUJldHdlZW4oeE1pbiwgeE1heCk7XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKHgsIHkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3ZlY3RvcnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3ZlY3RvcnMuanMiLCIvKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIGNvbXBvc2VkIG9mIHNtYWxsIGZ1bmN0aW9uIHRoYXRcbiAqIHNob3VsZCBiZSB1c2VkIHdoZW4gbmVlZGVkLiBNb3N0IGZ1bmN0aW9ucyBhcmUgcHVyZVxuICogYW5kIG9ubHkgcmV0dXJuIHZhbHVlcy4gRm9yIG1vcmUgaW5mbyByZWFkIHRoZSBkb2NzLlxuICovXG5cbi8qKlxuICogQGNsYXNzIFV0aWxzXG4gKiBAcmV0dXJuIHtVdGlsc31cbiAqL1xuY29uc3QgVXRpbHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4vKipcbiAqIG5vcm1hbGl6ZSAtIFRha2VzIGEgbWF4IGFuZCBtaW4gdmFsdWUgYW5kIHJldHVybnNcbiAqIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLCB0aGF0IHdoZW4gbXVsdGlwbGllZFxuICogYnkgb25lIGh1bmRyZWQgcmVwcmVzZW50cyBhIHByZWNlbnRhZ2Ugb2YgdGhlIHJhbmdlXG4gKiBiZXR3ZWVuIG1heCBhbmQgbWluLlxuICpcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50fSB2YWwgLSBUaGUgdmFsdWUgdGhhdCBsaWVzIGluIHRoZSByYW5nZS5cbiAqIEBwYXJhbSAge0ludH0gbWluIC0gVGhlIG1heGl1bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1heCAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAqIEByZXR1cm4ge0ludH0gSW50IC0gVGhlIHZhbHVlIHJlcHJlc2VudGVkIGluIHRoYXQgcmFuZ2UuXG4gKi9cblV0aWxzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsIC0gbWluKSAvIChtYXggLSBtaW4pO1xufTtcblxuLyoqXG4gKiBsZXJwIC0gbGluZWFyIGludGVycG9sYXRpb24gdGFrZXMgYSByYW5nZSBhbmQgYSBnaXZlbiBub3JtYWxpemVkIHZhbHVlXG4gKiBhbmQgcmV0dXJucyBhIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGF0IG5vcm1hbGl6ZWQgdmFsdWUgaW4gdGhhdCByYW5nZS5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50ZXJnZXJ9IHZhbFxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1pblxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1heFxuICogQHJldHVybiB7SW50ZXJnZXJ9XG4gKi9cblV0aWxzLmxlcnAgPSBmdW5jdGlvbiBsZXJwKHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIChtYXggLSBtaW4pICogdmFsICsgbWluO1xufTtcblxuLyoqXG4gKiBtYXAgLSBHaXZlbiAyIHNldCBvZiB2YWx1ZXMgbWFwIHRoZW0gdG8gYW5vdGhlciBzZXQuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNyY01pblxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNYXhcbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1pblxuICogQHBhcmFtICB7bnVtYmVyfSBkZXN0TWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLm1hcCA9IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgc3JjTWluLCBzcmNNYXgsIGRlc3RNaW4sIGRlc3RNYXgpIHtcbiAgc3JjTWF4ID0gTWF0aC5tYXgoc3JjTWF4LCBzcmNNaW4pO1xuICBzcmNNaW4gPSBNYXRoLm1pbihzcmNNYXgsIHNyY01pbik7XG4gIGRlc3RNaW4gPSBNYXRoLm1pbihkZXN0TWluLCBkZXN0TWF4KTtcbiAgZGVzdE1heCA9IE1hdGgubWF4KGRlc3RNaW4sIGRlc3RNYXgpO1xuICByZXR1cm4gdGhpcy5sZXJwKHRoaXMubm9ybWFsaXplKHZhbHVlLCBzcmNNaW4sIHNyY01heCksIGRlc3RNaW4sIGRlc3RNYXgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgcHJlY2VudFxuICogQGRlc2NyaXB0aW9uIFRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBwcmVjZW50YWdlLlxuICogICAgICAgICAgICAgIHlvdSBjYW4gcGFzcyBhcmJpdHJhcnkgbGFyZ2UgbnVtYmVycyBpbiBidXQgdGhhdHMgbm90XG4gKiAgICAgICAgICAgICAgdGhlIGludGVuZGVkIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge0Zsb2F0fSB2YWwgXHRBIHZhbHVlLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcmV0dXJuIHtQZXJjZW50fSAgICBBIHZhbHVlLlxuICovXG5VdGlscy5wZXJjZW50ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB2YWwgKiAxMDA7XG59O1xuXG4vKipcbiAqIEBuYW1lICBjbGFtcFxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgbnVtYmVyIGFuZCBhIHJhbmdlIHJldHVybiB0aGVcbiAqICAgICAgICAgICAgICB2YWx1ZSBiZXR3ZWVuIHRoYXQgcmFuZ2Ugb3IgdGhlIG1heCBudW1iZXIgb3IgbWluIG51bWJlci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblV0aWxzLmNsYW1wID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4obWluLCBtYXgpKSwgTWF0aC5tYXgobWluLCBtYXgpKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mICBVdGlsc1xuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byBudW1iZXJzIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiB0aGUgdHdvLlxuICogQG5hbWUgIHJhbmRvbVJhbmdlXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB4XG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB5XG4gKiBAcmV0dXJuIHtJbnRlZ2VyfVxuICovXG5VdGlscy5yYW5kb21CZXR3ZWVuID0gZnVuY3Rpb24oeCwgeSkge1xuICBsZXQgbWluID0gTWF0aC5taW4oeCwgeSk7XG4gIGxldCBtYXggPSBNYXRoLm1heCh4LCB5KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn07XG5cbi8qKlxuICogQG5hbWUgIGRpc3RhbmNlWFlcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gY29vcmRpbmF0ZXMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuVXRpbHMuZGlzdGFuY2VYWSA9IGZ1bmN0aW9uKHgwLCB5MCwgeDEsIHkxKSB7XG4gIGNvbnN0IGR4ID0geDAgLSB4MTtcbiAgY29uc3QgZHkgPSB5MCAtIHkxO1xuICByZXR1cm4gTWF0aC5oeXBvdChkeCwgZHkpO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgZGlzdGFuY2VWZWNcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gdmVjdG9ycyByZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3by5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSB2MVxuICogQHBhcmFtICB7VmVjdG9yfSB2MlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5VdGlscy5kaXN0YW5jZVZlYyA9IGZ1bmN0aW9uKHYxLCB2Mikge1xuICBjb25zdCBkVmVjID0gKHYxKVtcIi1cIl0odjIpO1xuICByZXR1cm4gTWF0aC5oeXBvdChkVmVjLmdldChcInhcIiksIGRWZWMuZ2V0KFwieVwiKSk7XG59O1xuXG4vKipcbiAqIEBuYW1lICBpblJhbmdlXG4gKiBAZGVzY3JpcHRpb24gZ2l2ZW4gYSBudW1iZXJcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuaW5SYW5nZSA9IGZ1bmN0aW9uKHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuICh2YWwgPD0gTWF0aC5tYXgobWF4LCBtaW4pKSAmJiAoTWF0aC5taW4obWF4LCBtaW4pIDw9IHZhbCk7XG59O1xuXG4vKipcbiAqIEBuYW1lICByYW5nZUludGVyc2VjdFxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgdHdvIHJhbmdlcyBzZWUgaWYgYm90aCBpbnRlcnNlY3QgZWFjaCBvdGhlci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSBtaW4wXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heDBcbiAqIEBwYXJhbSAge051bWJlcn0gbWluMVxuICogQHBhcmFtICB7TnVtYmVyfSBtYXgxXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5yYW5nZUludGVyc2VjdCA9IGZ1bmN0aW9uKG1pbjAsIG1heDAsIG1pbjEsIG1heDEpIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLm1heChtYXgwLCBtaW4wKSA+PSBNYXRoLm1pbihtaW4xLCBtYXgxKSAmJlxuICAgIE1hdGgubWluKG1pbjAsIG1heDApIDw9IE1hdGgubWF4KG1heDEsIG1pbjEpXG4gICk7XG59O1xuXG4vKipcbiAqIEBuYW1lICB2ZWN0b3JJbnRlcnNlY3RcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d29zIHZlY3RvcnMgc2VlIGlmIHRoZXkgaW50ZXJzZWN0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzBcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMudmVjdG9ySW50ZXJzZWN0ID0gZnVuY3Rpb24odmVjMCwgdmVjMSkge1xuICBjb25zdCB4MCA9IHZlYzAuZ2V0KFwieFwiKTtcbiAgY29uc3QgeTAgPSB2ZWMwLmdldChcInlcIik7XG4gIGNvbnN0IHgxID0gdmVjMS5nZXQoXCJ4XCIpO1xuICBjb25zdCB5MSA9IHZlYzEuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2VJbnRlcnNlY3QoeDAsIHkwLCB4MSwgeTEpO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgY29sbGlzaW9uUmVjdFxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byByZWN0YW5nZSBzZWUgaWYgdGhlIGludGVyc2VjdC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7UGFydGljbGV9IHIwXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcjFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvblJlY3QgPSBmdW5jdGlvbihyMCwgcjEpIHtcbiAgY29uc3QgcjB4ID0gcjAuc3RhdGUueDtcbiAgY29uc3QgcjB5ID0gcjAuc3RhdGUueTtcbiAgY29uc3QgcjF4ID0gcjEuc3RhdGUueDtcbiAgY29uc3QgcjF5ID0gcjEuc3RhdGUueTtcblxuICBjb25zdCByMHcgPSByMHggKyByMC5zdGF0ZS53aWR0aDtcbiAgY29uc3QgcjBoID0gcjB5ICsgcjAuc3RhdGUuaGVpZ2h0O1xuICBjb25zdCByMXcgPSByMXggKyByMS5zdGF0ZS53aWR0aDtcbiAgY29uc3QgcjFoID0gcjF5ICsgcjEuc3RhdGUuaGVpZ2h0O1xuXG4gIHJldHVybiAoXG4gICAgdGhpcy5yYW5nZUludGVyc2VjdChyMHgsIHIwdywgcjF4LCByMXcpICYmXG4gICAgdGhpcy5yYW5nZUludGVyc2VjdChyMHksIHIwaCwgcjF5LCByMWgpXG4gICk7XG59O1xuXG4vKipcbiAqIEBuYW1lICBjb2xsaXNpb25DaXJjbGVcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0byBwYXJ0aWNsZSB3aXRoIHJhZGkgcmV0dXJuIHdldGhlciB0aGV5IGNvbGxpZGUgYXJlIG5vdFxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gYzFcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjMlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uQ2lyY2xlID0gZnVuY3Rpb24oYzEsIGMyKSB7XG4gIGNvbnN0IHJhZGkgPSAoYzEuc3RhdGUucmFkaXVzICsgYzIuc3RhdGUucmFkaXVzKTtcbiAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlWFkoYzEuc3RhdGUueCwgYzEuc3RhdGUueSwgYzIuc3RhdGUueCwgYzIuc3RhdGUueSk7XG5cbiAgaWYgKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIHJhZGkgPiBkaXN0YW5jZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQG5hbWUgIGNpcmNsZVBvaW50Q29sbGlzaW9uXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwb2ludCBhbmQgYSBjaXJjbGUgcmV0dXJuIGEgYm9vbGVhbiByZWdhcmRpbmcgd2V0aGVyIHRoZXkgYXJlIGNvbGxpZGluZy5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSAgIHhcbiAqIEBwYXJhbSAge051bWJlcn0gICB5XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gY2lyY2xlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25DaXJjbGVQb2ludCA9IGZ1bmN0aW9uKHgsIHksIGNpcmNsZSkge1xuICAvLyBUT0RPIFdyaXRlIHRlc3RzLlxuICBjb25zdCBkaXN0ID0gdGhpcy5kaXN0YW5jZVhZKFxuICAgIHgsXG4gICAgeSxcbiAgICBjaXJjbGUuc3RhdGUueCxcbiAgICBjaXJjbGUuc3RhdGUueVxuICApO1xuICByZXR1cm4gY2lyY2xlLnN0YXRlLnJhZGl1cyA+IGRpc3Q7XG59O1xuXG4vKipcbiAqIEBuYW1lICBjb2xsaXNpb25DaXJjbGVWZWNcbiAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgYSBjb2xsaXNpb24gYmV0d2VlbiBjaXJjbGVzIGEgdmVjdG9yLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9ICAgdmVjXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gY2lyY2xlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25DaXJjbGVWZWMgPSBmdW5jdGlvbih2ZWMsIGNpcmNsZSkge1xuICByZXR1cm4gY2lyY2xlLnN0YXRlLnJhZGl1cyA+IHRoaXMuZGlzdGFuY2VYWShcbiAgICB2ZWMuZ2V0KFwieFwiKSxcbiAgICB2ZWMuZ2V0KFwieVwiKSxcbiAgICBjaXJjbGUuc3RhdGUueCxcbiAgICBjaXJjbGUuc3RhdGUueVxuICApO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgY29sbGlzaW9uUmVjdFBvaW50XG4gKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGNvbGxpc2lvbiBvZiBhIHJlY3RhbmdsZSBhbmQgYSBwb2ludC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSAgIHhcbiAqIEBwYXJhbSAge051bWJlcn0gICB5XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcmVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uUmVjdFBvaW50ID0gZnVuY3Rpb24oeCwgeSwgcmVjdCkge1xuICBjb25zdCByZWN0WCA9IHJlY3Quc3RhdGUueDtcbiAgY29uc3QgcmVjdFkgPSByZWN0LnN0YXRlLnk7XG4gIHJldHVybiAoXG4gICAgdGhpcy5pblJhbmdlKHgsIHJlY3RYLCByZWN0WCArIHJlY3Quc3RhdGUud2lkdGgpICYmXG4gICAgdGhpcy5pblJhbmdlKHksIHJlY3RZLCByZWN0WSArIHJlY3Quc3RhdGUuaGVpZ2h0KVxuICApO1xufTtcblxuLyoqXG4gKiBAbmFtZSBjb2xsaXNpb25SZWN0VmVjXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSB2ZWN0b3IgYW5kIGEgcmV0YW5nbGUgY2hlY2sgd2V0aGVyIHRoZXkgY29sbGlkZWQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gICB2ZWNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25SZWN0VmVjID0gZnVuY3Rpb24odmVjLCByZWN0KSB7XG4gIHJldHVybiB0aGlzLmNvbGxpc2lvblJlY3RQb2ludCh2ZWMuZ2V0KFwieFwiKSwgdmVjLmdldChcInlcIiksIHJlY3QpO1xufTtcblxuLyoqXG4gKiBAbmFtZSB0aHJvdHRsZVxuICogQGRlc2NyaXB0aW9uIFJ1biBhIGZ1bmN0aW9uIG9ubHkgaWYgdGhlIGdpdmVuIHRpbWUgdG8gYWxsb3cgdGhlIGZ1bmN0aW9uIGV4ZWN1dGVcbiAqIGhhcyBwYXNzZWQuIElmXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZnVuYyBBIGZ1bmN0aW9uIHRvIGNhbGwgZXZlcnkgZGVsdGEuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHdhaXQgVGhlIG1pbmltdW0gdGltZSB0byB3YWl0LlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuVXRpbHMudGhyb3R0bGUgPSBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIGxldCBjb250ZXh0O1xuICBsZXQgYXJncztcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICBsZXQgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogRGF0ZS5ub3coKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgbGV0IHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmdzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG4vKipcbiAqIEBuYW1lIHNldExlbmd0aFxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gLSBTZXR0aW5nIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4gIHtudW1iZXJbXX0gQ29vcmRpbmF0ZXNcbiAqL1xuVXRpbHMuc2V0TGVuZ3RoID0gZnVuY3Rpb24obGVuZ3RoLCB4LCB5KSB7XG4gIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIHkgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiBsZW5ndGggIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCB4IGFuZCB5IHZhbHVlc1wiKTtcbiAgfVxuXG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KTtcbiAgeCA9IE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aDtcbiAgeSA9IE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aDtcblxuICByZXR1cm4gW3gsIHldO1xufTtcblxuLyoqXG4gKiBAbmFtZSBzZXRBbmdsZVxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gLSBTZXR0aW5nIHRoZSBhbmdsZSBvZiBhIHZlY3Rvci5cbiAqIEBwYXJhbSAgIHtudW1iZXJ9IGFuZ2xlXG4gKiBAcGFyYW0gICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJuICB7bnVtYmVyW119IGNvb3JkaW5hdGVzXG4gKi9cblV0aWxzLnNldEFuZ2xlID0gZnVuY3Rpb24oYW5nbGUsIHgsIHkpIHtcbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgeSAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIGFuZ2xlICE9PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgeCBhbmQgeSB2YWx1ZXNcIik7XG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KHgsIHkpO1xuICB4ID0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoO1xuICB5ID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuXG4gIHJldHVybiBbeCwgeV07XG59O1xuXG4vKipcbiAqIEBuYW1lIGRlZ1RvUmFkXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBDb3ZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFuc1xuICogQHBhcmFtICB7bnVtYmVyfSBkZWcgRGVncmVzc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5kZWdUb1JhZCA9IGZ1bmN0aW9uKGRlZykge1xuICByZXR1cm4gZGVnIC8gMTgwICogTWF0aC5QSTtcbn07XG5cbi8qKlxuICogQG5hbWUgcmFkVG9EZWdcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIENvdmVydHMgcmFkaWFucyB0byBkZWdyZXNzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHJhZFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5yYWRUb0RlZyA9IGZ1bmN0aW9uKHJhZCkge1xuICByZXR1cm4gcmFkICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qKlxuICogQG5hbWUgIHJvdW5kVG9QbGFjZXNcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIFJvdW5kIHRvIG5lYXJlc3QgcGxhY2UgZ2l2ZW4uXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbFxuICogQHBhcmFtICB7bnVtYmVyfSBwbGFjZXMgQW4gZXhwb25lbnRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMucm91bmRUb1BsYWNlcyA9IGZ1bmN0aW9uKHZhbCwgcGxhY2VzKSB7XG4gIGNvbnN0IG11bHQgPSBNYXRoLnBvdygxMCwgcGxhY2VzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsICogbXVsdCkgLyBtdWx0O1xufTtcblxuLyoqXG4gKiBAbmFtZSByb3VuZFRvTXVsdGlwbGVcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge251bWJlcn0gbmVhcmVzdFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5yb3VuZFRvTXVsdGlwbGUgPSBmdW5jdGlvbih2YWwsIG5lYXJlc3QpIHtcbiAgaWYgKCFuZWFyZXN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90aGluZyBjYW4gYmUgYSBtdWx0aXBsZSBvZiBcIiArIFN0cmluZyhuZWFyZXN0KSk7XG4gIH1cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsIC8gbmVhcmVzdCkgKiBuZWFyZXN0O1xufTtcblxuLyoqXG4gKiBAbmFtZSBxdWFkcmF0aWNCZXppZXJcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2MFxuICogQHBhcmFtICB7bnVtYmVyfSB2MVxuICogQHBhcmFtICB7bnVtYmVyfSB2MlxuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5xdWFkcmF0aWNCZXppZXIgPSBmdW5jdGlvbih2MCwgdjEsIHYyLCB0KSB7XG4gIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMikgKiB2MCArICgxIC0gdCkgKiAyICogdCAqIHYxICsgdCAqIHQgKiB2Mjtcbn07XG5cbi8qKlxuICogQG5hbWUgY3ViaWNCZXppZXJcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2MFxuICogQHBhcmFtICB7bnVtYmVyfSB2MVxuICogQHBhcmFtICB7bnVtYmVyfSB2MlxuICogQHBhcmFtICB7bnVtYmVyfSB2M1xuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5jdWJpY0JlemllciA9IGZ1bmN0aW9uKHYwLCB2MSwgdjIsIHYzLCB0KSB7XG4gIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMykgKiB2MCArXG4gICAgICAgICBNYXRoLnBvdygxIC0gdCwgMikgKiAzICogdCAqIHYxICtcbiAgICAgICAgICgxIC0gdCkgKiAzICogdCAqIHQgKiB2MiArXG4gICAgICAgICB0ICogdCAqIHQgKyB2Mztcbn07XG5cbi8qKlxuICogQG5hbWUgcXVhZHRyYXRpY0JlemllclBvaW50XG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMucXVhZHJhdGljQmV6aWVyUG9pbnQgPSBmdW5jdGlvbihwMCwgcDEsIHAyLCB0LCBwRmluYWw9e30pIHtcbiAgcEZpbmFsLnggPSBNYXRoLnBvdygxIC0gdCwgMikgKiBwMC54ICtcbiAgICAgICAgICAgICAoMSAtIHQpICogMiAqIHQgKiBwMS54ICtcbiAgICAgICAgICAgICB0ICogdCAqIHAyLng7XG4gIHBGaW5hbC55ID0gTWF0aC5wb3coMSAtIHQsIDIpICogcDAueSArXG4gICAgICAgICAgICAgKDEgLSB0KSAqIDIgKiB0ICogcDEueSArXG4gICAgICAgICAgICAgdCAqIHQgKiBwMi55O1xuICByZXR1cm4gcEZpbmFsO1xufTtcblxuLyoqXG4gKiBAbmFtZSBjdWJpY0JlemllclBvaW50XG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gcDNcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMuY3ViaWNCZXppZXJQb2ludCA9IGZ1bmN0aW9uKHAwLCBwMSwgcDIsIHAzLCB0LCBwRmluYWw9e30pIHtcbiAgcEZpbmFsLnggPSBNYXRoLnBvdygxIC0gdCwgMykgKiBwMC54ICtcbiAgICAgICAgICAgICBNYXRoLnBvdygxIC0gdCwgMikgKiAzICogdCAqIHAxLnggK1xuICAgICAgICAgICAgICgxIC0gdCkgKiAzICogdCAqIHQgKiBwMi54ICtcbiAgICAgICAgICAgICB0ICogdCAqIHQgKyBwMy54O1xuICBwRmluYWwueSA9IE1hdGgucG93KDEgLSB0LCAzKSAqIHAwLnkgK1xuICAgICAgICAgICAgIE1hdGgucG93KDEgLSB0LCAyKSAqIDMgKiB0ICogcDEueSArXG4gICAgICAgICAgICAgKDEgLSB0KSAqIDMgKiB0ICogdCAqIHAyLnkgK1xuICAgICAgICAgICAgIHQgKiB0ICogdCArXG4gICAgICAgICAgICAgcDMueDtcbiAgcmV0dXJuIHBGaW5hbDtcbn07XG5cbi8qKlxuICogQG5hbWUgbXVsdGlDdXJ2ZVxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHBvaW50cyBvbiB0aGUgcGxhbmUgZHJhdyBhIGN1cnZlZCBsaW5lIGJldHdlZW5cbiAqIGFsbCBvZiB0aGVtLlxuICogQHBhcmFtICB7e251bWJlciwgbnVtYmVyfX0gcG9pbnRzXG4gKiBAcGFyYW0gIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxuICovXG5VdGlscy5tdWx0aUN1cnZlID0gZnVuY3Rpb24ocG9pbnRzLCBjdHgpIHtcbiAgbGV0IHAwO1xuICBsZXQgcDE7XG4gIGxldCBtaWRYO1xuICBsZXQgbWlkWTtcblxuICBjdHgubW92ZVRvKHBvaW50c1swXS54LCBwb2ludHNbMF0ueSk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgcDAgPSBwb2ludHNbaV07XG4gICAgcDEgPSBwb2ludHNbaSArIDFdO1xuICAgIG1pZFggPSAocDAueCArIHAxLngpLzI7XG4gICAgbWlkWSA9IChwMC55ICsgcDEueSkvMjtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhwMC54LCBwMC55LCBtaWRYLCBtaWRZKTtcbiAgfVxuXG4gIHAwID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAyXTtcbiAgcDEgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuICBjdHgucXVhZHJhdGljQ3VydmVUbyhwMC54LCBwMC55LCBwMS54LCBwMS55KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3V0aWxzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi91dGlscy5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG4vKlxuKiBUaGUgcGFydGljbGUgbGliYXJ5IGlzIHVzZWQgZm9yIHBoeXNpY3MgYW5pbWF0aW9ucy5cbiogdGhleSBhcmUgbm90IGV4dHJlbWVseSBhY2N1cmF0ZSBidXQgc3RpbGwgcmVwcmVzZW50XG4qIGFuZCBmZWVsIGxpa2UgcGh5c2ljYWwgbW92bWVudHMuXG4qL1xuXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTtcbi8qIFRoZSBkZWZhdWx0IHN0YXRlIGEgcGFydGljbGUgc3RhcnRzIHdpdGggSXQgc2hvdWxkIG5vdCBtb3ZlLiAqL1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB2eDogMCxcbiAgdnk6IDAsXG4gIGdyYXZpdHk6IDAsXG4gIG1hZ25pdHVkZTogMCxcbiAgcmFkaXVzOiAxLFxuICBtYXNzOiAxLFxuICBkaXJlY3Rpb246IE1hdGguUEkgKiAyLFxuICBmcmljdGlvbjogMSxcbiAgc3ByaW5nczogW10sXG4gIG1hc3NlczogW10sXG59O1xuXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNsZVxuICogQHBhcmFtIHtzdGF0ZX0gc3RhdGUgaW5pdGlhbCBzdGF0ZSB0byBwYXNzIHRoZSBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZShzdGF0ZT1jbG9uZShJTklUSUFMX1NUQVRFKSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbi8qKlxuICogQG5hbWUgY3JlYXRlXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgcGFydGljbGUgZ2l2ZW4gYSBkaXJlY3Rpb24gYW5kIG1hZ25pdHVkZS5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7T2JqZWN0fSAgIG9wdHMgb3B0aW9uYWwgc3RhdGUgdmFsdWVzIHRvIHBhc3MgdG8gY3JlYXRlLlxuICogQHJldHVybiB7UGFydGljbGV9IHJldHVybnMgYSBwYXJ0aWNsZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz1jbG9uZShJTklUSUFMX1NUQVRFKSkge1xuICAvLyBFeHRlbmQgdGhlIG9wdGlvbmFsIHN0YXRlIG9uIHRvIHRoZSBkZWZhdWx0IHN0YXRlLlxuICBvcHRzID0gZXh0ZW5kKHRydWUsIGNsb25lKElOSVRJQUxfU1RBVEUpLCBvcHRzKTtcblxuICAvLyBDcmVhdGUgcGFydGljbGUgd2l0aCB0aGUgbmV3IG9wdGlvbnMuXG4gIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKG9wdHMpO1xuXG4gIC8vIFNldCBsZW5ndGguXG4gIHBhcnRpY2xlLnNldFNwZWVkKG9wdHMubWFnbml0dWRlKTtcblxuICAvLyBTZXQgYW5nbGUuXG4gIHBhcnRpY2xlLnNldEhlYWRpbmcob3B0cy5kaXJlY3Rpb24pO1xuXG4gIC8vIFJldHVybiBuZXcgcGFydGljbGUuXG4gIHJldHVybiBwYXJ0aWNsZTtcbn07XG5cbi8qKlxuICogQG5hbWUgYWNjZWxlcmF0ZVxuICogQGRlc2NyaXB0aW9uIEEgY2hhbmdlIGluIHZlbG9jaXR5LlxuICpcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7SW50ZWdlcn0gYXhcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGF5XG4gKiBAcmV0dXJuIHtPYmplY3R9IEFjY2VsZXJhdGlvbiB2ZWN0b3IuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hY2NlbGVyYXRlID0gZnVuY3Rpb24gYWNjZWxlcmF0ZShheD10aGlzLnN0YXRlLnZ4LCBheT10aGlzLnN0YXRlLnZ5KSB7XG4gIHRoaXMuc3RhdGUudnggKz0gYXg7XG4gIHRoaXMuc3RhdGUudnkgKz0gYXk7XG4gIHJldHVybiB7YXgsIGF5fTtcbn07XG5cbi8qKlxuICogQG5hbWUgdXBkYXRlXG4gKiBAZGVzY3JpcHRpb24gQSB1cGRhdGUgYSBwb3NpdGlvbiBvZiBhIHBhcnRpY2xlXG4gKiBiYXNlZCBvbiBpdHMgZ3Jhdml0eSBhbmQgZnJpY2l0aW9uLiBHcmF2aXR5IGlzIHVzdWFsbHkgYSBhY2NlbGVyYXRpb25cbiAqIHZlY3Rvci5cbiAqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGZyaWMgRnJpY2l0aW9uIHRvIGFwcGx5LlxuICogQHBhcmFtICB7SW50ZWdlcn0gZ3JhdiBHcmF2aXR5IHRvIGFwcGx5LlxuICogQHJldHVybiB7T2JqZWN0fSBQb3NpdGlvbiBzdGF0ZS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShmcmljPXRoaXMuc3RhdGUuZnJpY3Rpb24sIGdyYXY9dGhpcy5zdGF0ZS5ncmF2aXR5KSB7XG4gIC8vIEFwcGx5IHNwcmluZ3NcbiAgdGhpcy5oYW5kbGVTcHJpbmdzKCk7XG5cbiAgLy8gQXBwbHkgZ3Jhdml0YXRpb25zXG4gIHRoaXMuaGFuZGxlTWFzc2VzKCk7XG5cbiAgLy8gQXBwbHkgZmFrZSBmcmljaXRpb24gdG8gdmVsb2NpdHlcbiAgdGhpcy5zdGF0ZS52eCAqPSBmcmljO1xuICB0aGlzLnN0YXRlLnZ5ICo9IGZyaWM7XG5cbiAgLy8gQXBwbHkgZ3Jhdml0eSB0byB2ZWxvY2l0eVxuICB0aGlzLmFjY2VsZXJhdGUoMCwgZ3Jhdik7XG5cbiAgLy8gVXBkYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFjY2VsZXJhdGlvblxuICByZXR1cm4gdGhpcy51cGRhdGVQb3MoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgc2V0U3BlZWRcbiAqIEBkZXNjcmlwdGlvbiBzZXRzIHRoZSBpbnRlcm5hbCBzcGVlZCBvZiB0aGUgcGFydGljbGUgZ2l2ZW4gdGhlIGZvcmNlXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc2V0U3BlZWQgPSBmdW5jdGlvbiBzZXRTcGVlZChzcGVlZCkge1xuICBjb25zdCBhbmdsZSA9IHRoaXMuZ2V0SGVhZGluZygpO1xuICB0aGlzLnN0YXRlLnZ4ID0gTWF0aC5jb3MoYW5nbGUpICogc3BlZWQ7XG4gIHRoaXMuc3RhdGUudnkgPSBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZDtcbn07XG5cbi8qKlxuICogQG5hbWUgc2V0SGVhZGluZ1xuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gc2V0cyB0aGUgaW50ZXJuYWwgc3BlZWQgb2YgdGhlIHBhcnRpY2xlIGdpdmVuIHRoZSBhbmdsZVxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zZXRIZWFkaW5nID0gZnVuY3Rpb24gc2V0SGVhZGluZyhhbmdsZSkge1xuICBjb25zdCBzcGVlZCA9IHRoaXMuZ2V0U3BlZWQoKTtcbiAgdGhpcy5zdGF0ZS52eCA9IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkO1xuICB0aGlzLnN0YXRlLnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogc3BlZWQ7XG59O1xuXG4vKipcbiAqIEBuYW1lIGdldFNwZWVkXG4gKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4ge251bWJlcn0gZm9yY2Ugb2YgdmVsb2NpdHkgdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2V0U3BlZWQgPSBmdW5jdGlvbiBnZXRTcGVlZCh4PXRoaXMuc3RhdGUudngsIHk9dGhpcy5zdGF0ZS52eSkge1xuICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLnN0YXRlLnZ4LCB0aGlzLnN0YXRlLnZ5KTtcbn07XG5cbi8qKlxuICogQG5hbWUgZ2V0SGVhZGluZ1xuICogQGRlc2NyaXB0aW9uIGdldCB0aGUgYW5nbGUgb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4ge251bWJlcn0gYW5nbGUgb2YgdmVsb2NpdHkgdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2V0SGVhZGluZyA9IGZ1bmN0aW9uIGdldEhlYWRpbmcoeD10aGlzLnN0YXRlLnZ4LCB5PXRoaXMuc3RhdGUudnkpIHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIGFkZFNwcmluZ1xuICogQGRlc2NyaXB0aW9uIGFkZCBzcHJpbmcgdG8gc3ByaW5ncyBhcnJheVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ByaW5nIEEgc3ByaW5nIG9iamVjdFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYWRkU3ByaW5nID0gZnVuY3Rpb24gYWRkU3ByaW5nKHNwcmluZykge1xuICB0aGlzLnJlbW92ZVNwcmluZyhzcHJpbmcpO1xuICB0aGlzLnN0YXRlLnNwcmluZ3MucHVzaChzcHJpbmcpO1xuICByZXR1cm4gc3ByaW5nO1xufTtcblxuLyoqXG4gKiBAbmFtZSByZW1vdmVTcHJpbmdcbiAqIEBkZXNjcmlwdGlvbiByZW1vdmUgYSBzcGVjaWZpYyBzdHJpbmcgZnJvbSB0aGUgc3ByaW5ncyBhcnJheVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNwcmluZ1xuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUucmVtb3ZlU3ByaW5nID0gZnVuY3Rpb24gcmVtb3ZlU3ByaW5nKHNwcmluZykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuc3ByaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzcHJpbmcucG9pbnQuc3RhdGUueCA9PT0gdGhpcy5zdGF0ZS5zcHJpbmdzW2ldLnBvaW50LnN0YXRlLnggJiZcbiAgICAgICAgc3ByaW5nLnBvaW50LnN0YXRlLnkgPT09IHRoaXMuc3RhdGUuc3ByaW5nc1tpXS5wb2ludC5zdGF0ZS55KSB7XG4gICAgICB0aGlzLnN0YXRlLnNwcmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGFuZ2xlVG8gLSBBc3VtbWluZyB3ZSBrbm93IHdoZXJlXG4gKiB0aGUgb3RoZXIgcGFydGljbGUgaXMgb24gdGhlIGNhbnZhcy4gV2UgY2FuIHVzZVxuICogdGhlIGFuZ2xlIGZvcm11bGFlIHRvIGZpZ3VyZSBvdXQgdGhlIGFuZ2xlXG4gKiBiZXR3ZWVuIHR3byBwYXJ0aWNsZS4gVXNpbmcgYXJjdGFuZ2VudCBpcyBmaW5lLlxuICogYnV0IGJlY2F1c2UgdGhlIGNvcnJkaW5hdGUgcGxhbmUgaXMgZmlscGVkIG9uIHRoZVxuICogWSBheGlzIHdlIHVzZSBhdGFuMiB0byBnZXQgdGhlIHJpZ2h0IHZhbHVlcy4gRXhwbGFpbmVkXG4gKiBpbiBBUEkgRG9jcy5cbiAqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiAgICAgIEEgcGFydGljbGUgaW5zdGFuY2UuXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSAgQW5nbGUgICBBIGFuZ2xlLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYW5nbGVUbyA9IGZ1bmN0aW9uIGFuZ2VsVG8ocDIpIHtcbiAgY29uc3QgZHggPSBwMi5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54O1xuICBjb25zdCBkeSA9IHAyLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnk7XG4gIHJldHVybiBNYXRoLmF0YW4yKGR5LCBkeCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIGRpc3RhbmNlVG9cbiAqIEBkZXNjcmlwdGlvbiBBc3N1bWluZyB3ZSBrbm93IHdoZXJlIGJvdGggcGFydGljbGUgYXJlIG9uIHRoZSBjYW52YXMuXG4gKiB3ZSBjYW4gdXNlIHRoZSBkaXN0YW5jZSBmb3JtdWFsZSB0byBmaWd1cmUgb3V0IHRoZSBkaXN0YW5jZVxuICogYmV0d2VlbiB0aGUgdHdvIHBhcnRpY2xlcy5cbiAqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiAgICAgIEEgcGFydGljbGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0ludGVnZXJ9ICBBbmdsZSAgIEEgRGlzdGFuY2VcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmRpc3RhbmNlVG8gPSBmdW5jdGlvbiBkaXN0YW5jZVRvKHAyKSB7XG4gIGNvbnN0IGR4ID0gcDIuc3RhdGUueCAtIHRoaXMuc3RhdGUueDtcbiAgY29uc3QgZHkgPSBwMi5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xuICByZXR1cm4gTWF0aC5oeXBvdChkeCwgZHkpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBhZGRNYXNzXG4gKiBAZGVzY3JpcHRpb24gQXBwZW5kIGEgcGFydGljbGUgdG8gdGhlIG1hc3NlcyBhcnJheS5cbiAqIEBwYXJhbSB7UGFydGljbGV9IG1hc3NcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFkZE1hc3MgPSBmdW5jdGlvbihtYXNzKSB7XG4gIHRoaXMucmVtb3ZlTWFzcyhtYXNzKTtcbiAgdGhpcy5zdGF0ZS5tYXNzZXMucHVzaChtYXNzKTtcbn07XG5cbi8qKlxuICogQG5hbWUgcmVtb3ZlTWFzc1xuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIHBhcnRpY2xlIGZvciB0aGUgbWFzc2VzIGFycmF5LlxuICogQHBhcmFtICB7UGFydGljbGV9IG1hc3NcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnJlbW92ZU1hc3MgPSBmdW5jdGlvbihtYXNzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobWFzcy5zdGF0ZS54ID09PSB0aGlzLnN0YXRlLm1hc3Nlc1tpXS5zdGF0ZS54ICYmXG4gICAgICAgIG1hc3Muc3RhdGUueSA9PT0gdGhpcy5zdGF0ZS5tYXNzZXNbaV0uc3RhdGUueSkge1xuICAgICAgdGhpcy5zdGF0ZS5tYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIGdyYXZpdGF0ZVRvXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseXMgZ3Jhdml0YXRpb24gdG8gdGhlIGlucHV0IHBhcnRpY2xlLlxuICogQHBhcmFtICB7UGFydGljbGV9IHAyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5ncmF2aXRhdGVUbyA9IGZ1bmN0aW9uKHAyKSB7XG4gIGNvbnN0IGR4ID0gcDIuc3RhdGUueCAtIHRoaXMuc3RhdGUueDtcbiAgY29uc3QgZHkgPSBwMi5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xuXG4gIC8vIERpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwYXJ0aWNsZXNcbiAgY29uc3QgZGlzdFNRID0gZHggKiBkeCArIGR5ICogZHk7XG4gIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoZGlzdFNRKTtcblxuICAvLyBNYWduaXR1ZGUgb2YgdGhlIHZlY3RvciBbRiA9IEcobTEpKG0yKS9yXjJdXG4gIGNvbnN0IGZvcmNlID0gcDIuc3RhdGUubWFzcyAvIGRpc3RTUTtcblxuICAvLyBTZXR0aW5nIHVwIGFuZ2xlcyBvZiB0aGUgdmVjdG9yXG4gIGNvbnN0IHNpbiA9IGR5IC8gZGlzdDtcbiAgY29uc3QgY29zID0gZHggLyBkaXN0O1xuXG4gIC8vIFNldHRpbmcgdmV0b3IgYW5nbGVcbiAgY29uc3QgYXggPSBjb3MgKiBmb3JjZTtcbiAgY29uc3QgYXkgPSBzaW4gKiBmb3JjZTtcblxuICByZXR1cm4gdGhpcy5hY2NlbGVyYXRlKGF4LCBheSk7XG59O1xuXG4vKipcbiAqIEBuYW1lICBnZW5lcmF0b3JcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlIGEgYnVuY2ggb2YgcGFydGljbGVzLlxuICogQHBhcmFtICB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgIG51bSAgICAgICBUaGUgbWF4aW11bSBhbW91bnQgb2YgZ2VuZXJhdGVkIHBhcnRpY2xlcyBuZWVkZWQuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgb3B0cyAgICAgIE9wdGlvbnMgdG8gcGFzcyBlYWNoIHBhcnRpY2xlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX5nZW5lcmF0b3JDYWxsYmFja30gY2FsbGJhY2sgIEZ1bmN0aW9uIHRvIGFsbG93IG1hcHBpbmcuXG4gKiBAcmV0dXJuIHtQYXJ0aWNsZVtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2VuZXJhdG9yID0gZnVuY3Rpb24gZ2VuKG51bSwgb3B0cz1jbG9uZShJTklUSUFMX1NUQVRFKSwgY2FsbGJhY2spIHtcbiAgLy8gU2hvdWxkIG5vdCBtdXRhdGUgdGhlIG9wdGlvbnMgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZ2l2ZW4gLy9cbiAgT2JqZWN0LmZyZWV6ZShvcHRzKTtcblxuICBjb25zdCBwYXJ0aWNsZXMgPSBbXTtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgY2FsbGJhY2sob3B0cywgaSwgZnVuY3Rpb24ocCkge1xuICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHBhcnRpY2xlIHBhc3NlZCB0byBnZW5lcmF0b3IuIFdpbGwgdXNlIGRlZmF1bHQgc3RhdGUuXCIpO1xuICAgICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gc2VsZi5jcmVhdGUob3B0cyk7XG4gICAgICAgICAgcGFydGljbGVzLnB1c2gobmV3UGFydGljbGUpO1xuICAgICAgICAgIHJldHVybiBuZXdQYXJ0aWNsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gc2VsZi5jcmVhdGUocCk7XG4gICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ld1BhcnRpY2xlKTtcbiAgICAgICAgcmV0dXJuIG5ld1BhcnRpY2xlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIHBhcnRpY2xlcy5wdXNoKHNlbGYuY3JlYXRlKG9wdHMpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydGljbGVzO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0b3IgY2FsbGJhY2tcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGNhbGxiYWNrIFBhcnRpY2xlfmdlbmVyYXRvckNhbGxiYWNrXG4gKiBAcGFyYW0ge1BhcnRpY2xlfVxuICovXG5cbi8qKlxuICogQG5hbWUgdXBkYXRlUG9zXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseSB2ZWxvY2l0eSB0byB0aGUgcG9zaXRpb24uXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB2eFxuICogQHBhcmFtICB7SW50ZWdlcn0gdnlcbiAqIEByZXR1cm4ge09iamVjdH0gUG9zaXRpb24gc3RhdGUgYWZ0ZXIgdmVsb2NpdHkgaGFzIGJlZW4gYXBwbGllZFxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUudXBkYXRlUG9zID0gZnVuY3Rpb24gdXBkYXRlUG9zKHZ4LCB2eSkge1xuICBpZiAodnggPT09IHVuZGVmaW5lZCAmJiB2eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zdGF0ZS54ICs9IHRoaXMuc3RhdGUudng7XG4gICAgdGhpcy5zdGF0ZS55ICs9IHRoaXMuc3RhdGUudnk7XG4gICAgcmV0dXJuIHt4OiB0aGlzLnN0YXRlLngsIHk6IHRoaXMuc3RhdGUueX07XG4gIH1cblxuICB0aGlzLnN0YXRlLnggKz0gdng7XG4gIHRoaXMuc3RhdGUueSArPSB2eTtcbiAgcmV0dXJuIHt4OiB0aGlzLnN0YXRlLngsIHk6IHRoaXMuc3RhdGUueX07XG59O1xuXG4vKipcbiAqIEBuYW1lIHNwcmluZ0Zyb21Ub1xuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHBhcnRpY2xlcyBjYWxjdWxhdGUgdGhlXG4gKiBzcHJpbmcgZm9yY2UgYXBwbGllZCB0byBib3RoIHBhcnRpY2xlcy5cbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSAgc3ByaW5nICBHaXZlbiBvZmZzZXQgZm9yIHRoZSBwYXJ0aWNsZXNcbiAqIEBwYXJhbSAge0ludGVnZXJ9ICBvZmZzZXQgIFRoZSBzcHJpbmcgY29lZmZpY2VudFxuICogQHJldHVybiB7UGFydGljbGVbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNwcmluZ0Zyb21UbyA9IGZ1bmN0aW9uIHNwcmluZ0Zyb21UbyhwLCBzcHJpbmc9MC4wNSwgb2Zmc2V0PTEwMCkge1xuICAvLyBQb3N0aW9uIGRlbHRhXG4gIGNvbnN0IGR4ID0gKHAuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gIGNvbnN0IGR5ID0gKHAuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gb2Zmc2V0KSAqIHNwcmluZztcblxuICAvLyBTcHJpbmcgYWNjZWxlcmF0aW9uIHZlY3RvclxuICBjb25zdCBzeCA9IGR4IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcbiAgY29uc3Qgc3kgPSBkeSAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG5cbiAgLy8gQWNjZWxlcmF0ZSB3aXRoIHRoZSBzcHJpbmcgdmVjdG9yXG4gIHRoaXMuYWNjZWxlcmF0ZShzeCwgc3kpO1xuXG4gIC8vIEFjY2VsZXJhdGUgdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgcC5zdGF0ZS52eCAtPSBzeDtcbiAgcC5zdGF0ZS52eSAtPSBzeTtcblxuICByZXR1cm4gW3RoaXMsIHBdO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgc3ByaW5nVG9Qb2ludFxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwYXJ0aWNsZSwgYSB2ZWN0b3IsIGFuZCBhIHNwcmluZyBjb2VmZmllbmNlbnQgYWNjZWxlcmF0ZVxuICogdGhlIHBhcnRpY2xlIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UgaXRzIGlzIGZyb20gdGhlIHBvaW50LlxuICogQHBhcmFtICB7T2JqZWN0fSBwIEEgc3ByaW5nIG9iamVjdC5cbiAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc3ByaW5nVG9Qb2ludCA9IGZ1bmN0aW9uIHNwcmluZ1RvUG9pbnQocCkge1xuICAvLyBQb3N0aW9uIGRlbHRhXG4gIGNvbnN0IGR4ID0gKHAucG9pbnQuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gIGNvbnN0IGR5ID0gKHAucG9pbnQuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gcC5vZmZzZXQpICogcC5zcHJpbmc7XG5cbiAgLy8gU3ByaW5nIGFjY2VsZXJhdGlvbiB2ZWN0b3JcbiAgY29uc3Qgc3ggPSBkeCAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG4gIGNvbnN0IHN5ID0gZHkgLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuXG4gIC8vIEFjY2VsZXJhdGUgd2l0aCB0aGUgc3ByaW5nIHZlY3RvclxuICB0aGlzLmFjY2VsZXJhdGUoc3gsIHN5KTtcblxuICByZXR1cm4gW3RoaXMsIHBdO1xufTtcblxuLyoqXG4gKiBAbmFtZSBoYW5kbGVTcHJpbmdzXG4gKiBAZGVzY3JpcHRpb24gQXBwbHkgc3ByaW5nIHBvaW50IHRvIGFsbCBpbnRlcm5hbCBzcHJpbmdzLlxuICogQHBhcmFtICB7c3ByaW5nc30gc3ByaW5ncyBBbiBhcnJheSBvZiBzcHJpbmdzIHRvIHNwcmluZyB0by5cbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuaGFuZGxlU3ByaW5ncyA9IGZ1bmN0aW9uIGhhbmRsZVNwcmluZ3Moc3ByaW5ncz10aGlzLnN0YXRlLnNwcmluZ3MpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5zcHJpbmdUb1BvaW50KHNwcmluZ3NbaV0pO1xuICB9XG4gIHJldHVybiBzcHJpbmdzO1xufTtcblxuLyoqXG4gKiBAbmFtZSBoYW5kbGVNYXNzZXNcbiAqIEBkZXNjcmlwdGlvbiBGb3IgZWFjaCBtYXNzIGluIHRoZSBtYXNzZXMgYXJyYXkgYXBwbHkgZ3Jhdml0YXRlIHRvIGl0LlxuICogQHBhcmFtICB7UGFydGljbGVzW118T2JqZWN0W119IG1hc3Nlc1xuICogQHJldHVybiB7UGFydGljbGVzW118T2JqZWN0W119XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5oYW5kbGVNYXNzZXMgPSBmdW5jdGlvbiBoYW5kbGVNYXNzZXMobWFzc2VzPXRoaXMuc3RhdGUubWFzc2VzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ncmF2aXRhdGVUbyhtYXNzZXNbaV0pO1xuICB9XG4gIHJldHVybiBtYXNzZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpY2xlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9wYXJ0aWNsZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvcGFydGljbGUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7LyoqL31cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9IGVsc2UgaWYgKCh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSB8fCB0YXJnZXQgPT0gbnVsbCkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbbmFtZV07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBjb3B5KSB7XG5cdFx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSkpIHtcblx0XHRcdFx0XHRcdGlmIChjb3B5SXNBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9leHRlbmQvaW5kZXguanMiLCJ2YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfREVFUF9GTEFHIHwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2Nsb25lRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9jbG9uZURlZXAuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbicpLFxuICAgIGJhc2VBc3NpZ25JbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25JbicpLFxuICAgIGNsb25lQnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVCdWZmZXInKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBjb3B5U3ltYm9scyA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzJyksXG4gICAgY29weVN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzSW4nKSxcbiAgICBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpLFxuICAgIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGluaXRDbG9uZUFycmF5ID0gcmVxdWlyZSgnLi9faW5pdENsb25lQXJyYXknKSxcbiAgICBpbml0Q2xvbmVCeVRhZyA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUJ5VGFnJyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgdmFyIGtleXNGdW5jID0gaXNGdWxsXG4gICAgPyAoaXNGbGF0ID8gZ2V0QWxsS2V5c0luIDogZ2V0QWxsS2V5cylcbiAgICA6IChpc0ZsYXQgPyBrZXlzSW4gOiBrZXlzKTtcblxuICB2YXIgcHJvcHMgPSBpc0FyciA/IHVuZGVmaW5lZCA6IGtleXNGdW5jKHZhbHVlKTtcbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2xvbmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQ2xvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N0YWNrLmpzIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2VxLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fTWFwLmpzIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19TeW1ib2wuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fcm9vdC5qcyIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc09iamVjdC5qcyIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pc01hc2tlZC5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fSGFzaC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoR2V0LmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoSGFzLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ24uanMiLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2tleXMuanMiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0FycmF5LmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9rZXlzSW4uanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlBcnJheS5qcyIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29weVN5bWJvbHMuanMiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weVN5bWJvbHNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFRhZy5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19Qcm9taXNlLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1NldC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpLFxuICAgIGNsb25lRGF0YVZpZXcgPSByZXF1aXJlKCcuL19jbG9uZURhdGFWaWV3JyksXG4gICAgY2xvbmVNYXAgPSByZXF1aXJlKCcuL19jbG9uZU1hcCcpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVNldCA9IHJlcXVpcmUoJy4vX2Nsb25lU2V0JyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIGNsb25lU2V0KG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lQnlUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsInZhciBhZGRNYXBFbnRyeSA9IHJlcXVpcmUoJy4vX2FkZE1hcEVudHJ5JyksXG4gICAgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgQ0xPTkVfREVFUF9GTEFHKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZU1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZU1hcC5qcyIsIi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1hcEVudHJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVJlZHVjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVJlZHVjZS5qcyIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsInZhciBhZGRTZXRFbnRyeSA9IHJlcXVpcmUoJy4vX2FkZFNldEVudHJ5JyksXG4gICAgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKHNldFRvQXJyYXkoc2V0KSwgQ0xPTkVfREVFUF9GTEFHKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVNldC5qcyIsIi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgc2V0YC5cbiAqL1xuZnVuY3Rpb24gYWRkU2V0RW50cnkoc2V0LCB2YWx1ZSkge1xuICAvLyBEb24ndCByZXR1cm4gYHNldC5hZGRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBzZXQuYWRkKHZhbHVlKTtcbiAgcmV0dXJuIHNldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRTZXRFbnRyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qcyIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCIvKipcbiAqIEBjbGFzcyBTaGFwZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHggICAgICBDYW52YXMgY29udGV4dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBTaGFwZXMoY3R4LCBkb2N1bWVudCkge1xuICBpZiAoIWN0eCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNoYXBlczogUGxlYXNlIHByb3ZpZGUgYSBjb250ZXh0IGFyZ3VtZW50IFthcmc6OjFdXCIpO1xuICB9XG4gIHRoaXMuY3R4ID0gY3R4O1xuICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAbmFtZSAgY2lyY2xlXG4gKiBAZGVzY3JpcHRpb24gZHJhdyBhIGNpcmNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB4ICAgICBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0ge051bWJlcn0geSAgICAgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgICAgIFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBUaGUgY29sb3Igb2YgdGhlIGNpcmNsZS5cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5jaXJjbGUgPSBmdW5jdGlvbiBkcmF3Q2lyY2xlKHg9NCwgeT00LCByPTIsIGNvbG9yPVwiIzAwMDAwMFwiKSB7XG4gIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHguYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gIHRoaXMuY3R4LmZpbGwoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgIHJlY3RcbiAqIEBkZXNjcmlwdGlvbiBGaWxsIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgIFN0YXJ0aW5nIHBvaW50IFhcbiAqIEBwYXJhbSAge051bWJlcn0geSAgICAgU3RhcnRpbmcgcG9pbnQgWVxuICogQHBhcmFtICB7TnVtYmVyfSB3ICAgICBXaWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGggICAgIEhlaWdodCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbG9yIEEgaGV4IHN0cmluZy5cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5yZWN0ID0gZnVuY3Rpb24gZHJhd1JlY3QoeCwgeSwgdz0xMCwgaD0xMCwgY29sb3I9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xufTtcblxuLyoqXG4gKiBwQ2lyY2xlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcFxuICogQHJldHVybiB7UGFydGljbGV9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUucENpcmNsZSA9IGZ1bmN0aW9uIHBhcnRpY2xlQ2lyY2xlKHApIHtcbiAgdGhpcy5jaXJjbGUoXG4gICAgcC5zdGF0ZS54LFxuICAgIHAuc3RhdGUueSxcbiAgICBwLnN0YXRlLnJhZGl1cyxcbiAgICBwLnN0YXRlLmNvbG9yXG4gICk7XG4gIHJldHVybiBwO1xufTtcblxuLyoqXG4gKiBwUmVjdFxuICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICovXG5TaGFwZXMucHJvdG90eXBlLnBSZWN0ID0gZnVuY3Rpb24gcGFydGljbGVSZWN0KHApIHtcbiAgdGhpcy5yZWN0KFxuICAgIHAuc3RhdGUueCxcbiAgICBwLnN0YXRlLnksXG4gICAgcC5zdGF0ZS53aWR0aCxcbiAgICBwLnN0YXRlLmhlaWdodCxcbiAgICBwLnN0YXRlLmNvbG9yXG4gICk7XG4gIHJldHVybiBwO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgZHJhd0xpbmVYWVxuICogQGRlc2NyaXB0aW9uIERyYXcgYSBsaW5lIGJldHdlZW4gdGhlc2UgdHdvIHBvaW50cy5cbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEBwYXJhbSAge3N0cmluZ30gc3R5bGVcbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5kcmF3TGluZVhZID0gZnVuY3Rpb24oeDAsIHkwLCB4MSwgeTEsIHN0eWxlPVwiIzAwMDAwMFwiKSB7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHN0eWxlO1xuICB0aGlzLmN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgdGhpcy5jdHgubGluZVRvKHgxLCB5MSk7XG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBkcmF3TGluZVZlY1xuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMwXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzFcbiAqIEByZXR1cm4ge1ZvaWR9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUuZHJhd0xpbmVWZWMgPSBmdW5jdGlvbih2ZWMwLCB2ZWMxKSB7XG4gIHRoaXMuZHJhd0xpbmVYWSh2ZWMwLmdldChcInhcIiksIHZlYzAuZ2V0KFwieVwiKSwgdmVjMS5nZXQoXCJ4XCIpLCB2ZWMxLmdldChcInlcIikpO1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5cbi8qKlxuICogQG5hbWUgZ3JpZFxuICogQHBhcmFtICB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtICB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSAge051bWJlcn0gZ3JpZFNpemVcbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3JcbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5ncmlkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgZ3JpZFNpemU9MjAsIGNvbG9yPVwiI2NjY1wiKSB7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHggKz0gZ3JpZFNpemUpIHtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHgsIGhlaWdodCk7XG4gIH1cblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSArPSBncmlkU2l6ZSkge1xuICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB5KTtcbiAgICB0aGlzLmN0eC5saW5lVG8od2lkdGgsIHkpO1xuICB9XG5cbiAgdGhpcy5jdHguc3Ryb2tlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvc2hhcGVzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9zaGFwZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9