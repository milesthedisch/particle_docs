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
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var particle = function (t) {
	  function e(n) {
	    if (r[n]) return r[n].exports;var o = r[n] = { exports: {}, id: n, loaded: !1 };return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
	  }var r = {};return e.m = t, e.c = r, e.p = "", e(0);
	}([function (t, e, r) {
	  t.exports = r(1);
	}, function (t, e, r) {
	  "use strict";
	  var n = r(2),
	      o = r(4),
	      i = r(3),
	      a = r(118);t.exports = { Vector: n, Particle: o, Utils: i, Shapes: a };
	}, function (t, e, r) {
	  "use strict";
	  function n() {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;this.state = t;
	  }var o = r(3),
	      i = { x: 0, y: 1 };n.prototype.create = function () {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
	        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
	        r = new n({ x: t, y: e });return r;
	  }, n.prototype.set = function (t, e) {
	    return !!this.state.hasOwnProperty(t) && (this.state[t] = e, !0);
	  }, n.prototype.get = function (t) {
	    return this.state[t];
	  }, n.prototype.setAngle = function (t) {
	    var e = this.getLength();this.set("x", Math.cos(t) * e), this.set("y", Math.sin(t) * e);
	  }, n.prototype.setLength = function (t) {
	    var e = this.getAngle();this.set("x", Math.cos(e) * t), this.set("y", Math.sin(e) * t);
	  }, n.prototype.getLength = function () {
	    var t = this.get("x"),
	        e = this.get("y");return Math.hypot(t, e);
	  }, n.prototype.getAngle = function () {
	    var t = this.get("x"),
	        e = this.get("y");return Math.atan2(e, t);
	  }, n.prototype.add = n.prototype["+"] = function (t) {
	    var e = this;if ("Array" === t.constructor.name && t.length) {
	      var r = t.map(function (t) {
	        return { x: t.get("x"), y: t.get("y") };
	      }).reduce(function (t, e) {
	        return { x: t.x + e.x, y: t.y + e.y };
	      }, e.state);return e.create(r.x, r.y);
	    }return this.create(e.get("x") + t.get("x"), e.get("y") + t.get("y"));
	  }, n.prototype.subtract = n.prototype["-"] = function (t) {
	    var e = this;if ("Array" === t.constructor.name && t.length) {
	      var r = t.map(function (t) {
	        return { x: t.get("x"), y: t.get("y") };
	      }).reduce(function (t, e) {
	        return { x: t.x - e.x, y: t.y - e.y };
	      }, e.state);return e.create(r.x, r.y);
	    }return this.create(e.get("x") - t.get("x"), e.get("y") - t.get("y"));
	  }, n.prototype.multiply = n.prototype["*"] = function (t) {
	    return this.create(this.get("x") * t.get("x"), this.get("y") * t.get("y"));
	  }, n.prototype.divide = n.prototype["/"] = function (t) {
	    return this.create(this.get("x") / t.get("x"), this.get("y") / t.get("y"));
	  }, n.prototype.addTo = n.prototype["+="] = function (t) {
	    return this.state.x = this.get("x") + t.get("x"), this.state.y = this.get("y") + t.get("y"), this.state;
	  }, n.prototype.subtractFrom = n.prototype["-="] = function (t) {
	    return this.state.x = this.get("x") - t.get("x"), this.state.y = this.get("y") - t.get("y"), this.state;
	  }, n.prototype.multiplyBy = n.prototype["*="] = function (t) {
	    return this.state.x = this.get("x") * t.get("x"), this.state.y = this.get("y") * t.get("y"), this.state;
	  }, n.prototype.divideBy = n.prototype["/="] = function (t) {
	    return this.state.x = this.get("x") / t.get("x"), this.state.y = this.get("y") / t.get("y"), this.state;
	  }, n.prototype.random = function () {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
	        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
	        r = o.lerp(Math.random(), t, e),
	        n = o.lerp(Math.random(), t, e);return this.create(r, n);
	  }, n.prototype.randomBetween = function () {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
	        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
	        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
	        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;t = Math.max(t, e), e = Math.min(t, e), r = Math.max(r, n), n = Math.min(r, n);var i = o.randomBetween(r, n),
	        a = o.randomBetween(t, e);return this.create(a, i);
	  }, t.exports = n;
	}, function (t, e) {
	  "use strict";
	  var r = Object.create(null);r.normalize = function (t, e, r) {
	    return (t - e) / (r - e);
	  }, r.lerp = function (t, e, r) {
	    return (r - e) * t + e;
	  }, r.map = function (t, e, r, n, o) {
	    return r = Math.max(r, e), e = Math.min(r, e), n = Math.min(n, o), o = Math.max(n, o), this.lerp(this.normalize(t, e, r), n, o);
	  }, r.percent = function (t) {
	    return 100 * t;
	  }, r.clamp = function (t, e, r) {
	    return Math.min(Math.max(t, Math.min(e, r)), Math.max(e, r));
	  }, r.randomBetween = function (t, e) {
	    var r = Math.min(t, e),
	        n = Math.max(t, e);return Math.floor(Math.random() * (n - r)) + r;
	  }, r.distanceXY = function (t, e, r, n) {
	    var o = t - r,
	        i = e - n;return Math.hypot(o, i);
	  }, r.distanceVec = function (t, e) {
	    var r = t["-"](e);return Math.hypot(r.get("x"), r.get("y"));
	  }, r.inRange = function (t, e, r) {
	    return t <= Math.max(r, e) && Math.min(r, e) <= t;
	  }, r.rangeIntersect = function (t, e, r, n) {
	    return Math.max(e, t) >= Math.min(r, n) && Math.min(t, e) <= Math.max(n, r);
	  }, r.vectorIntersect = function (t, e) {
	    var r = t.get("x"),
	        n = t.get("y"),
	        o = e.get("x"),
	        i = e.get("y");return this.rangeIntersect(r, n, o, i);
	  }, r.collisionRect = function (t, e) {
	    var r = t.state.x,
	        n = t.state.y,
	        o = e.state.x,
	        i = e.state.y,
	        a = r + t.state.width,
	        c = n + t.state.height,
	        s = o + e.state.width,
	        u = i + e.state.height;return this.rangeIntersect(r, a, o, s) && this.rangeIntersect(n, c, i, u);
	  }, r.collisionCircle = function (t, e) {
	    var r = t.state.radius + e.state.radius,
	        n = this.distanceXY(t.state.x, t.state.y, e.state.x, e.state.y);return !n || r > n;
	  }, r.collisionCirclePoint = function (t, e, r) {
	    var n = this.distanceXY(t, e, r.state.x, r.state.y);return r.state.radius > n;
	  }, r.collisionCircleVec = function (t, e) {
	    return e.state.radius > this.distanceXY(t.get("x"), t.get("y"), e.state.x, e.state.y);
	  }, r.collisionRectPoint = function (t, e, r) {
	    var n = r.state.x,
	        o = r.state.y;return this.inRange(t, n, n + r.state.width) && this.inRange(e, o, o + r.state.height);
	  }, r.collisionRectVec = function (t, e) {
	    return this.collisionRectPoint(t.get("x"), t.get("y"), e);
	  }, r.throttle = function (t, e, r) {
	    var n = void 0,
	        o = void 0,
	        i = void 0,
	        a = null,
	        c = 0;r || (r = {});var s = function s() {
	      c = r.leading === !1 ? 0 : Date.now(), a = null, i = t.apply(n, o), a || (n = o = null);
	    };return function () {
	      for (var o = arguments.length, u = Array(o), p = 0; p < o; p++) {
	        u[p] = arguments[p];
	      }var f = Date.now();c || r.leading !== !1 || (c = f);var h = e - (f - c);return n = this, u = u, h <= 0 || h > e ? (a && (clearTimeout(a), a = null), c = f, i = t.apply(n, u), a || (n = u = null)) : a || r.trailing === !1 || (a = setTimeout(s, h)), i;
	    };
	  }, r.setLength = function (t, e, r) {
	    if ("number" != typeof e || "number" != typeof r || "number" != typeof t) throw new Error("Please provide valid x and y values");var n = Math.atan2(r, e);return e = Math.cos(n) * t, r = Math.sin(n) * t, [e, r];
	  }, r.setAngle = function (t, e, r) {
	    if ("number" != typeof e || "number" != typeof r || "number" != typeof t) throw new Error("Please provide valid x and y values");var n = Math.hypot(e, r);return e = Math.cos(t) * n, r = Math.sin(t) * n, [e, r];
	  }, r.degToRad = function (t) {
	    return t / 180 * Math.PI;
	  }, r.radToDeg = function (t) {
	    return 180 * t / Math.PI;
	  }, r.roundToPlaces = function (t, e) {
	    var r = Math.pow(10, e);return Math.round(t * r) / r;
	  }, r.roundToMultiple = function (t, e) {
	    if (!e) throw new Error("Nothing can be a multiple of " + String(e));return Math.round(t / e) * e;
	  }, r.quadraticBezier = function (t, e, r, n) {
	    return Math.pow(1 - n, 2) * t + 2 * (1 - n) * n * e + n * n * r;
	  }, r.cubicBezier = function (t, e, r, n, o) {
	    return Math.pow(1 - o, 3) * t + 3 * Math.pow(1 - o, 2) * o * e + 3 * (1 - o) * o * o * r + o * o * o + n;
	  }, r.quadraticBezierPoint = function (t, e, r, n) {
	    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};return o.x = Math.pow(1 - n, 2) * t.x + 2 * (1 - n) * n * e.x + n * n * r.x, o.y = Math.pow(1 - n, 2) * t.y + 2 * (1 - n) * n * e.y + n * n * r.y, o;
	  }, r.cubicBezierPoint = function (t, e, r, n, o) {
	    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};return i.x = Math.pow(1 - o, 3) * t.x + 3 * Math.pow(1 - o, 2) * o * e.x + 3 * (1 - o) * o * o * r.x + o * o * o + n.x, i.y = Math.pow(1 - o, 3) * t.y + 3 * Math.pow(1 - o, 2) * o * e.y + 3 * (1 - o) * o * o * r.y + o * o * o + n.x, i;
	  }, r.multiCurve = function (t, e) {
	    var r = void 0,
	        n = void 0,
	        o = void 0,
	        i = void 0;e.moveTo(t[0].x, t[0].y);for (var a = 1; a < t.length - 2; a++) {
	      r = t[a], n = t[a + 1], o = (r.x + n.x) / 2, i = (r.y + n.y) / 2, e.quadraticCurveTo(r.x, r.y, o, i);
	    }r = t[t.length - 2], n = t[t.length - 1], e.quadraticCurveTo(r.x, r.y, n.x, n.y);
	  }, t.exports = r;
	}, function (t, e, r) {
	  "use strict";
	  function n() {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i(a);this.state = t;
	  }var o = r(5),
	      i = r(6),
	      a = { x: 0, y: 0, vx: 0, vy: 0, gravity: 0, magnitude: 0, radius: 1, mass: 1, direction: 2 * Math.PI, friction: 1, springs: [], masses: [] };n.prototype.create = function () {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i(a);t = o(!0, i(a), t);var e = new n(t);return e.setSpeed(t.magnitude), e.setHeading(t.direction), e;
	  }, n.prototype.accelerate = function () {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.vx,
	        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.vy;return this.state.vx += t, this.state.vy += e, { ax: t, ay: e };
	  }, n.prototype.update = function () {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.friction,
	        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.gravity;return this.handleSprings(), this.handleMasses(), this.state.vx *= t, this.state.vy *= t, this.accelerate(0, e), this.updatePos();
	  }, n.prototype.setSpeed = function (t) {
	    var e = this.getHeading();this.state.vx = Math.cos(e) * t, this.state.vy = Math.sin(e) * t;
	  }, n.prototype.setHeading = function (t) {
	    var e = this.getSpeed();this.state.vx = Math.cos(t) * e, this.state.vy = Math.sin(t) * e;
	  }, n.prototype.getSpeed = function () {
	    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.vx, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.vy;return Math.hypot(this.state.vx, this.state.vy);
	  }, n.prototype.getHeading = function () {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.vx,
	        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.vy;return Math.atan2(e, t);
	  }, n.prototype.addSpring = function (t) {
	    return this.removeSpring(t), this.state.springs.push(t), t;
	  }, n.prototype.removeSpring = function (t) {
	    for (var e = t.point.state, r = this.state.springs, n = 0; n < r.length; n++) {
	      if (e.x === r[n].point.state.x && e.y === r[n].point.state.y) {
	        r.splice(n, 1);break;
	      }
	    }
	  }, n.prototype.angleTo = function (t) {
	    var e = t.state,
	        r = e.x,
	        n = e.y,
	        o = { x: r - this.state.x, y: n - this.state.y },
	        i = o.x,
	        a = o.y;return Math.atan2(a, i);
	  }, n.prototype.distanceTo = function (t) {
	    var e = t.state,
	        r = e.x,
	        n = e.y,
	        o = { x: r - this.state.x, y: n - this.state.y },
	        i = o.x,
	        a = o.y;return Math.hypot(i, a);
	  }, n.prototype.addMass = function (t) {
	    this.removeMass(t), this.state.masses.push(t);
	  }, n.prototype.removeMass = function (t) {
	    for (var e = t.state, r = this.state.masses, n = 0; n < r.length; n++) {
	      if (e.x === r[n].state.x && e.y === r[n].state.y) {
	        r.splice(n, 1);break;
	      }
	    }
	  }, n.prototype.gravitateTo = function (t) {
	    var e = t.state.x - this.state.x,
	        r = t.state.y - this.state.y,
	        n = e * e + r * r,
	        o = Math.sqrt(n),
	        i = t.state.mass / n,
	        a = r / o,
	        c = e / o,
	        s = c * i,
	        u = a * i;return this.accelerate(s, u);
	  }, n.prototype.generator = function (t) {
	    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i(a),
	        r = arguments[2];Object.freeze(e);var n = [],
	        o = this;if ("function" == typeof r) for (var c = 0; c < t; c++) {
	      r(e, c, function (t) {
	        if (!t) {
	          console.log("No particle passed to generator. Will use default state.");var r = o.create(e);return n.push(r), r;
	        }var i = o.create(t);return n.push(i), i;
	      });
	    }if (!r) for (var s = 0; s < t; s++) {
	      n.push(o.create(e));
	    }return n;
	  }, n.prototype.updatePos = function (t, e) {
	    return void 0 === t && void 0 === e ? (this.state.x += this.state.vx, this.state.y += this.state.vy, { x: this.state.x, y: this.state.y }) : (this.state.x += +t, this.state.y += +e, { x: this.state.x, y: this.state.y });
	  }, n.prototype.springFromTo = function (t) {
	    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .05,
	        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
	        n = t.state.x - this.state.x,
	        o = t.state.y - this.state.y,
	        i = Math.hypot(n, o),
	        a = (i - r) * e,
	        c = n / i * a,
	        s = o / i * a;return this.accelerate(c, s), t.state.vx -= c, t.state.vy -= s, [this, t];
	  }, n.prototype.springToPoint = function (t) {
	    var e = t.point.state.x - this.state.x,
	        r = t.point.state.y - this.state.y,
	        n = Math.hypot(e, r),
	        o = (n - t.offset) * t.spring,
	        i = e / n * o,
	        a = r / n * o;return this.accelerate(i, a), [this, t];
	  }, n.prototype.handleSprings = function () {
	    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.springs, e = 0; e < t.length; e++) {
	      this.springToPoint(t[e]);
	    }return t;
	  }, n.prototype.handleMasses = function () {
	    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.masses, e = 0; e < t.length; e++) {
	      this.gravitateTo(t[e]);
	    }return t;
	  }, t.exports = n;
	}, function (t, e) {
	  "use strict";
	  var r = Object.prototype.hasOwnProperty,
	      n = Object.prototype.toString,
	      o = function o(t) {
	    return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === n.call(t);
	  },
	      i = function i(t) {
	    if (!t || "[object Object]" !== n.call(t)) return !1;var e = r.call(t, "constructor"),
	        o = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf");if (t.constructor && !e && !o) return !1;var i;for (i in t) {}return "undefined" == typeof i || r.call(t, i);
	  };t.exports = function t() {
	    var e,
	        r,
	        n,
	        a,
	        c,
	        s,
	        u = arguments[0],
	        p = 1,
	        f = arguments.length,
	        h = !1;for ("boolean" == typeof u ? (h = u, u = arguments[1] || {}, p = 2) : ("object" != (typeof u === "undefined" ? "undefined" : _typeof(u)) && "function" != typeof u || null == u) && (u = {}); p < f; ++p) {
	      if (e = arguments[p], null != e) for (r in e) {
	        n = u[r], a = e[r], u !== a && (h && a && (i(a) || (c = o(a))) ? (c ? (c = !1, s = n && o(n) ? n : []) : s = n && i(n) ? n : {}, u[r] = t(h, s, a)) : "undefined" != typeof a && (u[r] = a));
	      }
	    }return u;
	  };
	}, function (t, e, r) {
	  function n(t) {
	    return o(t, i | a);
	  }var o = r(7),
	      i = 1,
	      a = 4;t.exports = n;
	}, function (t, e, r) {
	  function n(t, e, r, P, S, T) {
	    var z,
	        k = e & w,
	        F = e & M,
	        U = e & O;if (r && (z = S ? r(t, P, S, T) : r(t)), void 0 !== z) return z;if (!_(t)) return t;var R = b(t);if (R) {
	      if (z = x(t), !k) return p(t, z);
	    } else {
	      var C = l(t),
	          D = C == I || C == B;if (j(t)) return u(t, k);if (C == E || C == A || D && !S) {
	        if (z = F || D ? {} : d(t), !k) return F ? h(t, s(z, t)) : f(t, c(z, t));
	      } else {
	        if (!Q[C]) return S ? t : {};z = g(t, C, n, k);
	      }
	    }T || (T = new o());var L = T.get(t);if (L) return L;T.set(t, z);var V = U ? F ? v : y : F ? keysIn : m,
	        $ = R ? void 0 : V(t);return i($ || t, function (o, i) {
	      $ && (i = o, o = t[i]), a(z, i, n(o, e, r, i, t, T));
	    }), z;
	  }var o = r(8),
	      i = r(52),
	      a = r(53),
	      c = r(56),
	      s = r(79),
	      u = r(83),
	      p = r(84),
	      f = r(85),
	      h = r(89),
	      y = r(93),
	      v = r(95),
	      l = r(96),
	      x = r(101),
	      g = r(102),
	      d = r(116),
	      b = r(64),
	      j = r(65),
	      _ = r(32),
	      m = r(58),
	      w = 1,
	      M = 2,
	      O = 4,
	      A = "[object Arguments]",
	      P = "[object Array]",
	      S = "[object Boolean]",
	      T = "[object Date]",
	      z = "[object Error]",
	      I = "[object Function]",
	      B = "[object GeneratorFunction]",
	      k = "[object Map]",
	      F = "[object Number]",
	      E = "[object Object]",
	      U = "[object RegExp]",
	      R = "[object Set]",
	      C = "[object String]",
	      D = "[object Symbol]",
	      L = "[object WeakMap]",
	      V = "[object ArrayBuffer]",
	      $ = "[object DataView]",
	      N = "[object Float32Array]",
	      X = "[object Float64Array]",
	      Y = "[object Int8Array]",
	      q = "[object Int16Array]",
	      W = "[object Int32Array]",
	      H = "[object Uint8Array]",
	      G = "[object Uint8ClampedArray]",
	      J = "[object Uint16Array]",
	      K = "[object Uint32Array]",
	      Q = {};Q[A] = Q[P] = Q[V] = Q[$] = Q[S] = Q[T] = Q[N] = Q[X] = Q[Y] = Q[q] = Q[W] = Q[k] = Q[F] = Q[E] = Q[U] = Q[R] = Q[C] = Q[D] = Q[H] = Q[G] = Q[J] = Q[K] = !0, Q[z] = Q[I] = Q[L] = !1, t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    var e = this.__data__ = new o(t);this.size = e.size;
	  }var o = r(9),
	      i = r(17),
	      a = r(18),
	      c = r(19),
	      s = r(20),
	      u = r(21);n.prototype.clear = i, n.prototype.delete = a, n.prototype.get = c, n.prototype.has = s, n.prototype.set = u, t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    var e = -1,
	        r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
	      var n = t[e];this.set(n[0], n[1]);
	    }
	  }var o = r(10),
	      i = r(11),
	      a = r(14),
	      c = r(15),
	      s = r(16);n.prototype.clear = o, n.prototype.delete = i, n.prototype.get = a, n.prototype.has = c, n.prototype.set = s, t.exports = n;
	}, function (t, e) {
	  function r() {
	    this.__data__ = [], this.size = 0;
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t) {
	    var e = this.__data__,
	        r = o(e, t);if (r < 0) return !1;var n = e.length - 1;return r == n ? e.pop() : a.call(e, r, 1), --this.size, !0;
	  }var o = r(12),
	      i = Array.prototype,
	      a = i.splice;t.exports = n;
	}, function (t, e, r) {
	  function n(t, e) {
	    for (var r = t.length; r--;) {
	      if (o(t[r][0], e)) return r;
	    }return -1;
	  }var o = r(13);t.exports = n;
	}, function (t, e) {
	  function r(t, e) {
	    return t === e || t !== t && e !== e;
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t) {
	    var e = this.__data__,
	        r = o(e, t);return r < 0 ? void 0 : e[r][1];
	  }var o = r(12);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    return o(this.__data__, t) > -1;
	  }var o = r(12);t.exports = n;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = this.__data__,
	        n = o(r, t);return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
	  }var o = r(12);t.exports = n;
	}, function (t, e, r) {
	  function n() {
	    this.__data__ = new o(), this.size = 0;
	  }var o = r(9);t.exports = n;
	}, function (t, e) {
	  function r(t) {
	    var e = this.__data__,
	        r = e.delete(t);return this.size = e.size, r;
	  }t.exports = r;
	}, function (t, e) {
	  function r(t) {
	    return this.__data__.get(t);
	  }t.exports = r;
	}, function (t, e) {
	  function r(t) {
	    return this.__data__.has(t);
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = this.__data__;if (r instanceof o) {
	      var n = r.__data__;if (!i || n.length < c - 1) return n.push([t, e]), this.size = ++r.size, this;r = this.__data__ = new a(n);
	    }return r.set(t, e), this.size = r.size, this;
	  }var o = r(9),
	      i = r(22),
	      a = r(37),
	      c = 200;t.exports = n;
	}, function (t, e, r) {
	  var n = r(23),
	      o = r(28),
	      i = n(o, "Map");t.exports = i;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = i(t, e);return o(r) ? r : void 0;
	  }var o = r(24),
	      i = r(36);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    if (!a(t) || i(t)) return !1;var e = o(t) ? v : u;return e.test(c(t));
	  }var o = r(25),
	      i = r(33),
	      a = r(32),
	      c = r(35),
	      s = /[\\^$.*+?()[\]{}|]/g,
	      u = /^\[object .+?Constructor\]$/,
	      p = Function.prototype,
	      f = Object.prototype,
	      h = p.toString,
	      y = f.hasOwnProperty,
	      v = RegExp("^" + h.call(y).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    if (!i(t)) return !1;var e = o(t);return e == c || e == s || e == a || e == u;
	  }var o = r(26),
	      i = r(32),
	      a = "[object AsyncFunction]",
	      c = "[object Function]",
	      s = "[object GeneratorFunction]",
	      u = "[object Proxy]";t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    return null == t ? void 0 === t ? s : c : u && u in Object(t) ? i(t) : a(t);
	  }var o = r(27),
	      i = r(30),
	      a = r(31),
	      c = "[object Null]",
	      s = "[object Undefined]",
	      u = o ? o.toStringTag : void 0;t.exports = n;
	}, function (t, e, r) {
	  var n = r(28),
	      o = n.Symbol;t.exports = o;
	}, function (t, e, r) {
	  var n = r(29),
	      o = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
	      i = n || o || Function("return this")();t.exports = i;
	}, function (t, e) {
	  (function (e) {
	    var r = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.Object === Object && e;t.exports = r;
	  }).call(e, function () {
	    return this;
	  }());
	}, function (t, e, r) {
	  function n(t) {
	    var e = a.call(t, s),
	        r = t[s];try {
	      t[s] = void 0;var n = !0;
	    } catch (t) {}var o = c.call(t);return n && (e ? t[s] = r : delete t[s]), o;
	  }var o = r(27),
	      i = Object.prototype,
	      a = i.hasOwnProperty,
	      c = i.toString,
	      s = o ? o.toStringTag : void 0;t.exports = n;
	}, function (t, e) {
	  function r(t) {
	    return o.call(t);
	  }var n = Object.prototype,
	      o = n.toString;t.exports = r;
	}, function (t, e) {
	  function r(t) {
	    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && ("object" == e || "function" == e);
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t) {
	    return !!i && i in t;
	  }var o = r(34),
	      i = function () {
	    var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
	  }();t.exports = n;
	}, function (t, e, r) {
	  var n = r(28),
	      o = n["__core-js_shared__"];t.exports = o;
	}, function (t, e) {
	  function r(t) {
	    if (null != t) {
	      try {
	        return o.call(t);
	      } catch (t) {}try {
	        return t + "";
	      } catch (t) {}
	    }return "";
	  }var n = Function.prototype,
	      o = n.toString;t.exports = r;
	}, function (t, e) {
	  function r(t, e) {
	    return null == t ? void 0 : t[e];
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t) {
	    var e = -1,
	        r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
	      var n = t[e];this.set(n[0], n[1]);
	    }
	  }var o = r(38),
	      i = r(46),
	      a = r(49),
	      c = r(50),
	      s = r(51);n.prototype.clear = o, n.prototype.delete = i, n.prototype.get = a, n.prototype.has = c, n.prototype.set = s, t.exports = n;
	}, function (t, e, r) {
	  function n() {
	    this.size = 0, this.__data__ = { hash: new o(), map: new (a || i)(), string: new o() };
	  }var o = r(39),
	      i = r(9),
	      a = r(22);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    var e = -1,
	        r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
	      var n = t[e];this.set(n[0], n[1]);
	    }
	  }var o = r(40),
	      i = r(42),
	      a = r(43),
	      c = r(44),
	      s = r(45);n.prototype.clear = o, n.prototype.delete = i, n.prototype.get = a, n.prototype.has = c, n.prototype.set = s, t.exports = n;
	}, function (t, e, r) {
	  function n() {
	    this.__data__ = o ? o(null) : {}, this.size = 0;
	  }var o = r(41);t.exports = n;
	}, function (t, e, r) {
	  var n = r(23),
	      o = n(Object, "create");t.exports = o;
	}, function (t, e) {
	  function r(t) {
	    var e = this.has(t) && delete this.__data__[t];return this.size -= e ? 1 : 0, e;
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t) {
	    var e = this.__data__;if (o) {
	      var r = e[t];return r === i ? void 0 : r;
	    }return c.call(e, t) ? e[t] : void 0;
	  }var o = r(41),
	      i = "__lodash_hash_undefined__",
	      a = Object.prototype,
	      c = a.hasOwnProperty;t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    var e = this.__data__;return o ? void 0 !== e[t] : a.call(e, t);
	  }var o = r(41),
	      i = Object.prototype,
	      a = i.hasOwnProperty;t.exports = n;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = this.__data__;return this.size += this.has(t) ? 0 : 1, r[t] = o && void 0 === e ? i : e, this;
	  }var o = r(41),
	      i = "__lodash_hash_undefined__";t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    var e = o(this, t).delete(t);return this.size -= e ? 1 : 0, e;
	  }var o = r(47);t.exports = n;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = t.__data__;return o(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
	  }var o = r(48);t.exports = n;
	}, function (t, e) {
	  function r(t) {
	    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t) {
	    return o(this, t).get(t);
	  }var o = r(47);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    return o(this, t).has(t);
	  }var o = r(47);t.exports = n;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = o(this, t),
	        n = r.size;return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
	  }var o = r(47);t.exports = n;
	}, function (t, e) {
	  function r(t, e) {
	    for (var r = -1, n = null == t ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1;) {}return t;
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t, e, r) {
	    var n = t[e];c.call(t, e) && i(n, r) && (void 0 !== r || e in t) || o(t, e, r);
	  }var o = r(54),
	      i = r(13),
	      a = Object.prototype,
	      c = a.hasOwnProperty;t.exports = n;
	}, function (t, e, r) {
	  function n(t, e, r) {
	    "__proto__" == e && o ? o(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : t[e] = r;
	  }var o = r(55);t.exports = n;
	}, function (t, e, r) {
	  var n = r(23),
	      o = function () {
	    try {
	      var t = n(Object, "defineProperty");return t({}, "", {}), t;
	    } catch (t) {}
	  }();t.exports = o;
	}, function (t, e, r) {
	  function n(t, e) {
	    return t && o(e, i(e), t);
	  }var o = r(57),
	      i = r(58);t.exports = n;
	}, function (t, e, r) {
	  function n(t, e, r, n) {
	    var a = !r;r || (r = {});for (var c = -1, s = e.length; ++c < s;) {
	      var u = e[c],
	          p = n ? n(r[u], t[u], u, r, t) : void 0;void 0 === p && (p = t[u]), a ? i(r, u, p) : o(r, u, p);
	    }return r;
	  }var o = r(53),
	      i = r(54);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    return a(t) ? o(t) : i(t);
	  }var o = r(59),
	      i = r(74),
	      a = r(78);t.exports = n;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = a(t),
	        n = !r && i(t),
	        p = !r && !n && c(t),
	        h = !r && !n && !p && u(t),
	        y = r || n || p || h,
	        v = y ? o(t.length, String) : [],
	        l = v.length;for (var x in t) {
	      !e && !f.call(t, x) || y && ("length" == x || p && ("offset" == x || "parent" == x) || h && ("buffer" == x || "byteLength" == x || "byteOffset" == x) || s(x, l)) || v.push(x);
	    }return v;
	  }var o = r(60),
	      i = r(61),
	      a = r(64),
	      c = r(65),
	      s = r(68),
	      u = r(69),
	      p = Object.prototype,
	      f = p.hasOwnProperty;t.exports = n;
	}, function (t, e) {
	  function r(t, e) {
	    for (var r = -1, n = Array(t); ++r < t;) {
	      n[r] = e(r);
	    }return n;
	  }t.exports = r;
	}, function (t, e, r) {
	  var n = r(62),
	      o = r(63),
	      i = Object.prototype,
	      a = i.hasOwnProperty,
	      c = i.propertyIsEnumerable,
	      s = n(function () {
	    return arguments;
	  }()) ? n : function (t) {
	    return o(t) && a.call(t, "callee") && !c.call(t, "callee");
	  };t.exports = s;
	}, function (t, e, r) {
	  function n(t) {
	    return i(t) && o(t) == a;
	  }var o = r(26),
	      i = r(63),
	      a = "[object Arguments]";t.exports = n;
	}, function (t, e) {
	  function r(t) {
	    return null != t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
	  }t.exports = r;
	}, function (t, e) {
	  var r = Array.isArray;t.exports = r;
	}, function (t, e, r) {
	  (function (t) {
	    var n = r(28),
	        o = r(67),
	        i = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && !e.nodeType && e,
	        a = i && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && !t.nodeType && t,
	        c = a && a.exports === i,
	        s = c ? n.Buffer : void 0,
	        u = s ? s.isBuffer : void 0,
	        p = u || o;t.exports = p;
	  }).call(e, r(66)(t));
	}, function (t, e) {
	  t.exports = function (t) {
	    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t;
	  };
	}, function (t, e) {
	  function r() {
	    return !1;
	  }t.exports = r;
	}, function (t, e) {
	  function r(t, e) {
	    return e = null == e ? n : e, !!e && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e;
	  }var n = 9007199254740991,
	      o = /^(?:0|[1-9]\d*)$/;t.exports = r;
	}, function (t, e, r) {
	  var n = r(70),
	      o = r(72),
	      i = r(73),
	      a = i && i.isTypedArray,
	      c = a ? o(a) : n;t.exports = c;
	}, function (t, e, r) {
	  function n(t) {
	    return a(t) && i(t.length) && !!I[o(t)];
	  }var o = r(26),
	      i = r(71),
	      a = r(63),
	      c = "[object Arguments]",
	      s = "[object Array]",
	      u = "[object Boolean]",
	      p = "[object Date]",
	      f = "[object Error]",
	      h = "[object Function]",
	      y = "[object Map]",
	      v = "[object Number]",
	      l = "[object Object]",
	      x = "[object RegExp]",
	      g = "[object Set]",
	      d = "[object String]",
	      b = "[object WeakMap]",
	      j = "[object ArrayBuffer]",
	      _ = "[object DataView]",
	      m = "[object Float32Array]",
	      w = "[object Float64Array]",
	      M = "[object Int8Array]",
	      O = "[object Int16Array]",
	      A = "[object Int32Array]",
	      P = "[object Uint8Array]",
	      S = "[object Uint8ClampedArray]",
	      T = "[object Uint16Array]",
	      z = "[object Uint32Array]",
	      I = {};I[m] = I[w] = I[M] = I[O] = I[A] = I[P] = I[S] = I[T] = I[z] = !0, I[c] = I[s] = I[j] = I[u] = I[_] = I[p] = I[f] = I[h] = I[y] = I[v] = I[l] = I[x] = I[g] = I[d] = I[b] = !1, t.exports = n;
	}, function (t, e) {
	  function r(t) {
	    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
	  }var n = 9007199254740991;t.exports = r;
	}, function (t, e) {
	  function r(t) {
	    return function (e) {
	      return t(e);
	    };
	  }t.exports = r;
	}, function (t, e, r) {
	  (function (t) {
	    var n = r(29),
	        o = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && !e.nodeType && e,
	        i = o && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && !t.nodeType && t,
	        a = i && i.exports === o,
	        c = a && n.process,
	        s = function () {
	      try {
	        return c && c.binding && c.binding("util");
	      } catch (t) {}
	    }();t.exports = s;
	  }).call(e, r(66)(t));
	}, function (t, e, r) {
	  function n(t) {
	    if (!o(t)) return i(t);var e = [];for (var r in Object(t)) {
	      c.call(t, r) && "constructor" != r && e.push(r);
	    }return e;
	  }var o = r(75),
	      i = r(76),
	      a = Object.prototype,
	      c = a.hasOwnProperty;t.exports = n;
	}, function (t, e) {
	  function r(t) {
	    var e = t && t.constructor,
	        r = "function" == typeof e && e.prototype || n;return t === r;
	  }var n = Object.prototype;t.exports = r;
	}, function (t, e, r) {
	  var n = r(77),
	      o = n(Object.keys, Object);t.exports = o;
	}, function (t, e) {
	  function r(t, e) {
	    return function (r) {
	      return t(e(r));
	    };
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t) {
	    return null != t && i(t.length) && !o(t);
	  }var o = r(25),
	      i = r(71);t.exports = n;
	}, function (t, e, r) {
	  function n(t, e) {
	    return t && o(e, i(e), t);
	  }var o = r(57),
	      i = r(80);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    return a(t) ? o(t, !0) : i(t);
	  }var o = r(59),
	      i = r(81),
	      a = r(78);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    if (!o(t)) return a(t);var e = i(t),
	        r = [];for (var n in t) {
	      ("constructor" != n || !e && s.call(t, n)) && r.push(n);
	    }return r;
	  }var o = r(32),
	      i = r(75),
	      a = r(82),
	      c = Object.prototype,
	      s = c.hasOwnProperty;t.exports = n;
	}, function (t, e) {
	  function r(t) {
	    var e = [];if (null != t) for (var r in Object(t)) {
	      e.push(r);
	    }return e;
	  }t.exports = r;
	}, function (t, e, r) {
	  (function (t) {
	    function n(t, e) {
	      if (e) return t.slice();var r = t.length,
	          n = u ? u(r) : new t.constructor(r);return t.copy(n), n;
	    }var o = r(28),
	        i = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && !e.nodeType && e,
	        a = i && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && !t.nodeType && t,
	        c = a && a.exports === i,
	        s = c ? o.Buffer : void 0,
	        u = s ? s.allocUnsafe : void 0;t.exports = n;
	  }).call(e, r(66)(t));
	}, function (t, e) {
	  function r(t, e) {
	    var r = -1,
	        n = t.length;for (e || (e = Array(n)); ++r < n;) {
	      e[r] = t[r];
	    }return e;
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t, e) {
	    return o(t, i(t), e);
	  }var o = r(57),
	      i = r(86);t.exports = n;
	}, function (t, e, r) {
	  var n = r(87),
	      o = r(88),
	      i = Object.prototype,
	      a = i.propertyIsEnumerable,
	      c = Object.getOwnPropertySymbols,
	      s = c ? function (t) {
	    return null == t ? [] : (t = Object(t), n(c(t), function (e) {
	      return a.call(t, e);
	    }));
	  } : o;t.exports = s;
	}, function (t, e) {
	  function r(t, e) {
	    for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
	      var a = t[r];e(a, r, t) && (i[o++] = a);
	    }return i;
	  }t.exports = r;
	}, function (t, e) {
	  function r() {
	    return [];
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t, e) {
	    return o(t, i(t), e);
	  }var o = r(57),
	      i = r(90);t.exports = n;
	}, function (t, e, r) {
	  var n = r(91),
	      o = r(92),
	      i = r(86),
	      a = r(88),
	      c = Object.getOwnPropertySymbols,
	      s = c ? function (t) {
	    for (var e = []; t;) {
	      n(e, i(t)), t = o(t);
	    }return e;
	  } : a;t.exports = s;
	}, function (t, e) {
	  function r(t, e) {
	    for (var r = -1, n = e.length, o = t.length; ++r < n;) {
	      t[o + r] = e[r];
	    }return t;
	  }t.exports = r;
	}, function (t, e, r) {
	  var n = r(77),
	      o = n(Object.getPrototypeOf, Object);t.exports = o;
	}, function (t, e, r) {
	  function n(t) {
	    return o(t, a, i);
	  }var o = r(94),
	      i = r(86),
	      a = r(58);t.exports = n;
	}, function (t, e, r) {
	  function n(t, e, r) {
	    var n = e(t);return i(t) ? n : o(n, r(t));
	  }var o = r(91),
	      i = r(64);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    return o(t, a, i);
	  }var o = r(94),
	      i = r(90),
	      a = r(80);t.exports = n;
	}, function (t, e, r) {
	  var n = r(97),
	      o = r(22),
	      i = r(98),
	      a = r(99),
	      c = r(100),
	      s = r(26),
	      u = r(35),
	      p = "[object Map]",
	      f = "[object Object]",
	      h = "[object Promise]",
	      y = "[object Set]",
	      v = "[object WeakMap]",
	      l = "[object DataView]",
	      x = u(n),
	      g = u(o),
	      d = u(i),
	      b = u(a),
	      j = u(c),
	      _ = s;(n && _(new n(new ArrayBuffer(1))) != l || o && _(new o()) != p || i && _(i.resolve()) != h || a && _(new a()) != y || c && _(new c()) != v) && (_ = function _(t) {
	    var e = s(t),
	        r = e == f ? t.constructor : void 0,
	        n = r ? u(r) : "";if (n) switch (n) {case x:
	        return l;case g:
	        return p;case d:
	        return h;case b:
	        return y;case j:
	        return v;}return e;
	  }), t.exports = _;
	}, function (t, e, r) {
	  var n = r(23),
	      o = r(28),
	      i = n(o, "DataView");t.exports = i;
	}, function (t, e, r) {
	  var n = r(23),
	      o = r(28),
	      i = n(o, "Promise");t.exports = i;
	}, function (t, e, r) {
	  var n = r(23),
	      o = r(28),
	      i = n(o, "Set");t.exports = i;
	}, function (t, e, r) {
	  var n = r(23),
	      o = r(28),
	      i = n(o, "WeakMap");t.exports = i;
	}, function (t, e) {
	  function r(t) {
	    var e = t.length,
	        r = t.constructor(e);return e && "string" == typeof t[0] && o.call(t, "index") && (r.index = t.index, r.input = t.input), r;
	  }var n = Object.prototype,
	      o = n.hasOwnProperty;t.exports = r;
	}, function (t, e, r) {
	  function n(t, e, r, n) {
	    var z = t.constructor;switch (e) {case b:
	        return o(t);case f:case h:
	        return new z(+t);case j:
	        return i(t, n);case _:case m:case w:case M:case O:case A:case P:case S:case T:
	        return p(t, n);case y:
	        return a(t, n, r);case v:case g:
	        return new z(t);case l:
	        return c(t);case x:
	        return s(t, n, r);case d:
	        return u(t);}
	  }var o = r(103),
	      i = r(105),
	      a = r(106),
	      c = r(110),
	      s = r(111),
	      u = r(114),
	      p = r(115),
	      f = "[object Boolean]",
	      h = "[object Date]",
	      y = "[object Map]",
	      v = "[object Number]",
	      l = "[object RegExp]",
	      x = "[object Set]",
	      g = "[object String]",
	      d = "[object Symbol]",
	      b = "[object ArrayBuffer]",
	      j = "[object DataView]",
	      _ = "[object Float32Array]",
	      m = "[object Float64Array]",
	      w = "[object Int8Array]",
	      M = "[object Int16Array]",
	      O = "[object Int32Array]",
	      A = "[object Uint8Array]",
	      P = "[object Uint8ClampedArray]",
	      S = "[object Uint16Array]",
	      T = "[object Uint32Array]";t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    var e = new t.constructor(t.byteLength);return new o(e).set(new o(t)), e;
	  }var o = r(104);t.exports = n;
	}, function (t, e, r) {
	  var n = r(28),
	      o = n.Uint8Array;t.exports = o;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = e ? o(t.buffer) : t.buffer;return new t.constructor(r, t.byteOffset, t.byteLength);
	  }var o = r(103);t.exports = n;
	}, function (t, e, r) {
	  function n(t, e, r) {
	    var n = e ? r(a(t), c) : a(t);return i(n, o, new t.constructor());
	  }var o = r(107),
	      i = r(108),
	      a = r(109),
	      c = 1;t.exports = n;
	}, function (t, e) {
	  function r(t, e) {
	    return t.set(e[0], e[1]), t;
	  }t.exports = r;
	}, function (t, e) {
	  function r(t, e, r, n) {
	    var o = -1,
	        i = null == t ? 0 : t.length;for (n && i && (r = t[++o]); ++o < i;) {
	      r = e(r, t[o], o, t);
	    }return r;
	  }t.exports = r;
	}, function (t, e) {
	  function r(t) {
	    var e = -1,
	        r = Array(t.size);return t.forEach(function (t, n) {
	      r[++e] = [n, t];
	    }), r;
	  }t.exports = r;
	}, function (t, e) {
	  function r(t) {
	    var e = new t.constructor(t.source, n.exec(t));return e.lastIndex = t.lastIndex, e;
	  }var n = /\w*$/;t.exports = r;
	}, function (t, e, r) {
	  function n(t, e, r) {
	    var n = e ? r(a(t), c) : a(t);return i(n, o, new t.constructor());
	  }var o = r(112),
	      i = r(108),
	      a = r(113),
	      c = 1;t.exports = n;
	}, function (t, e) {
	  function r(t, e) {
	    return t.add(e), t;
	  }t.exports = r;
	}, function (t, e) {
	  function r(t) {
	    var e = -1,
	        r = Array(t.size);return t.forEach(function (t) {
	      r[++e] = t;
	    }), r;
	  }t.exports = r;
	}, function (t, e, r) {
	  function n(t) {
	    return a ? Object(a.call(t)) : {};
	  }var o = r(27),
	      i = o ? o.prototype : void 0,
	      a = i ? i.valueOf : void 0;t.exports = n;
	}, function (t, e, r) {
	  function n(t, e) {
	    var r = e ? o(t.buffer) : t.buffer;return new t.constructor(r, t.byteOffset, t.length);
	  }var o = r(103);t.exports = n;
	}, function (t, e, r) {
	  function n(t) {
	    return "function" != typeof t.constructor || a(t) ? {} : o(i(t));
	  }var o = r(117),
	      i = r(92),
	      a = r(75);t.exports = n;
	}, function (t, e, r) {
	  var n = r(32),
	      o = Object.create,
	      i = function () {
	    function t() {}return function (e) {
	      if (!n(e)) return {};if (o) return o(e);t.prototype = e;var r = new t();return t.prototype = void 0, r;
	    };
	  }();t.exports = i;
	}, function (t, e) {
	  "use strict";
	  function r(t, e) {
	    if (!t) throw new Error("Shapes: Please provide a context argument [arg::1]");this.ctx = t, this.document = e || window.document;
	  }r.prototype.circle = function () {
	    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4,
	        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
	        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
	        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#000000";this.ctx.fillStyle = n, this.ctx.beginPath(), this.ctx.arc(t, e, r, 0, 2 * Math.PI, !1), this.ctx.fill();
	  }, r.prototype.rect = function (t, e) {
	    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
	        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
	        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#000000";this.ctx.fillStyle = o, this.ctx.fillRect(t, e, r, n);
	  }, r.prototype.pCircle = function (t) {
	    return this.circle(t.state.x, t.state.y, t.state.radius, t.state.color), t;
	  }, r.prototype.pRect = function (t) {
	    return this.rect(t.state.x, t.state.y, t.state.width, t.state.height, t.state.color), t;
	  }, r.prototype.drawLineXY = function (t, e, r, n) {
	    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#000000";this.ctx.beginPath(), this.ctx.strokeStyle = o, this.ctx.moveTo(t, e), this.ctx.lineTo(r, n), this.ctx.stroke();
	  }, r.prototype.drawLineVec = function (t, e) {
	    this.drawLineXY(t.get("x"), t.get("y"), e.get("x"), e.get("y"));
	  }, r.prototype.drawLineArray = function (t, e) {
	    var r = t.x,
	        n = t.y;if (void 0 === r || void 0 === r) throw new Error("Must be given a start of the line");this.ctx.beginPath(), this.ctx.moveTo(r, n);var o = !0,
	        i = !1,
	        a = void 0;try {
	      for (var c, s = e[Symbol.iterator](); !(o = (c = s.next()).done); o = !0) {
	        var u = c.value,
	            p = u.x,
	            f = u.y;this.ctx.lineTo(p, f);
	      }
	    } catch (t) {
	      i = !0, a = t;
	    } finally {
	      try {
	        !o && s.return && s.return();
	      } finally {
	        if (i) throw a;
	      }
	    }this.ctx.stroke();
	  }, r.prototype.grid = function (t, e) {
	    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
	        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#ccc";this.ctx.beginPath(), this.ctx.strokeStyle = n;for (var o = 0; o < t; o += r) {
	      this.ctx.moveTo(o, 0), this.ctx.lineTo(o, e);
	    }for (var i = 0; i < e; i += r) {
	      this.ctx.moveTo(0, i), this.ctx.lineTo(t, i);
	    }this.ctx.stroke();
	  }, t.exports = r;
	}]);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjcwNjQxOWM0ODI3MmIyY2U3M2YiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2lmcmFtZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9kb21faGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvc2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3BhcnRpY2xlX2xpYnJhcnkvbWFpbi5taW4uanMiXSwibmFtZXMiOlsiaWZyYW1lIiwicmVxdWlyZSIsImRvY3VtZW50Iiwic2hpbXMiLCJ1dGlscyIsInBhcnRpY2xlTGliIiwiREVGQVVMVF9FWEFNUExFIiwic2V0aGFzaCIsImZyYWdtZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGhuYW1lIiwidGV4dE5vZGVzIiwibWFwVG9UZXh0IiwiJCIsImxlbmd0aCIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsImVsbURlbGVnYXRvciIsImNoZWNrIiwiZWxtIiwidGFnTmFtZSIsImVyciIsInRhcmdldCIsImV2dCIsInRleHQiLCJsb2FkSW5JZnJhbWUiLCJoYXNoUXVlcnkiLCJzdWJzdHIiLCJpbmRleE9mIiwiRklSU1RfSUZSQU1FIiwibW9kdWxlIiwiZXhwb3J0cyIsImlmcmFtZUhhbmRsZXIiLCJkb21IZWxwZXIiLCIkJCIsImZpcnN0U3RhdGUiLCJmZXRjaEV4YW1wbGUiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidHh0IiwiY2F0Y2giLCJlcnJvciIsIndyaXRlRnJhbWUiLCJwYXJlbnQiLCJmcmFtZSIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0RnJhbWUiLCJuYW1lIiwiaW5qZWN0U3JjIiwic3JjIiwic3JjZG9jIiwiY3JlYXRlRnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRnJhbWVTcmMiLCJzcmNEb2MiLCJleGFtcGxlRXhpc3RzIiwiZXhhbXBsZSIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJlIiwiZXhpc3RpbmdGcmFtZSIsImZpcnN0RnJhbWUiLCJwYXJlbnREaXYiLCJuZXdGcmFtZSIsImlzRWxtIiwib2JqIiwiSFRNTEVsZW1lbnQiLCJtYXBUZXh0IiwiZWxtTGlzdCIsIml0ZW0iLCJwdXNoIiwiZXZlbnQiLCJjaGVja1RhcmdldCIsImNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJxcyIsInNlbGVjdG9yIiwiYmFzZU5vZGUiLCJxdWVyeVNlbGVjdG9yIiwicXNBbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFydGljbGUiLCJ0IiwibiIsInIiLCJvIiwibG9hZGVkIiwiY2FsbCIsIm0iLCJjIiwicCIsImkiLCJhIiwiVmVjdG9yIiwiUGFydGljbGUiLCJVdGlscyIsIlNoYXBlcyIsImFyZ3VtZW50cyIsInN0YXRlIiwieCIsInkiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJzZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImdldCIsInNldEFuZ2xlIiwiZ2V0TGVuZ3RoIiwiTWF0aCIsImNvcyIsInNpbiIsInNldExlbmd0aCIsImdldEFuZ2xlIiwiaHlwb3QiLCJhdGFuMiIsImFkZCIsImNvbnN0cnVjdG9yIiwibWFwIiwicmVkdWNlIiwic3VidHJhY3QiLCJtdWx0aXBseSIsImRpdmlkZSIsImFkZFRvIiwic3VidHJhY3RGcm9tIiwibXVsdGlwbHlCeSIsImRpdmlkZUJ5IiwicmFuZG9tIiwibGVycCIsInJhbmRvbUJldHdlZW4iLCJtYXgiLCJtaW4iLCJPYmplY3QiLCJub3JtYWxpemUiLCJwZXJjZW50IiwiY2xhbXAiLCJmbG9vciIsImRpc3RhbmNlWFkiLCJkaXN0YW5jZVZlYyIsImluUmFuZ2UiLCJyYW5nZUludGVyc2VjdCIsInZlY3RvckludGVyc2VjdCIsImNvbGxpc2lvblJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInMiLCJ1IiwiY29sbGlzaW9uQ2lyY2xlIiwicmFkaXVzIiwiY29sbGlzaW9uQ2lyY2xlUG9pbnQiLCJjb2xsaXNpb25DaXJjbGVWZWMiLCJjb2xsaXNpb25SZWN0UG9pbnQiLCJjb2xsaXNpb25SZWN0VmVjIiwidGhyb3R0bGUiLCJsZWFkaW5nIiwiRGF0ZSIsIm5vdyIsImFwcGx5IiwiQXJyYXkiLCJmIiwiaCIsImNsZWFyVGltZW91dCIsInRyYWlsaW5nIiwic2V0VGltZW91dCIsImRlZ1RvUmFkIiwiUEkiLCJyYWRUb0RlZyIsInJvdW5kVG9QbGFjZXMiLCJwb3ciLCJyb3VuZCIsInJvdW5kVG9NdWx0aXBsZSIsIlN0cmluZyIsInF1YWRyYXRpY0JlemllciIsImN1YmljQmV6aWVyIiwicXVhZHJhdGljQmV6aWVyUG9pbnQiLCJjdWJpY0JlemllclBvaW50IiwibXVsdGlDdXJ2ZSIsIm1vdmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJ2eCIsInZ5IiwiZ3Jhdml0eSIsIm1hZ25pdHVkZSIsIm1hc3MiLCJkaXJlY3Rpb24iLCJmcmljdGlvbiIsInNwcmluZ3MiLCJtYXNzZXMiLCJzZXRTcGVlZCIsInNldEhlYWRpbmciLCJhY2NlbGVyYXRlIiwiYXgiLCJheSIsInVwZGF0ZSIsImhhbmRsZVNwcmluZ3MiLCJoYW5kbGVNYXNzZXMiLCJ1cGRhdGVQb3MiLCJnZXRIZWFkaW5nIiwiZ2V0U3BlZWQiLCJhZGRTcHJpbmciLCJyZW1vdmVTcHJpbmciLCJwb2ludCIsInNwbGljZSIsImFuZ2xlVG8iLCJkaXN0YW5jZVRvIiwiYWRkTWFzcyIsInJlbW92ZU1hc3MiLCJncmF2aXRhdGVUbyIsInNxcnQiLCJnZW5lcmF0b3IiLCJmcmVlemUiLCJzcHJpbmdGcm9tVG8iLCJzcHJpbmdUb1BvaW50Iiwib2Zmc2V0Iiwic3ByaW5nIiwidG9TdHJpbmciLCJpc0FycmF5IiwiUCIsIlMiLCJUIiwieiIsImsiLCJ3IiwiRiIsIk0iLCJVIiwiTyIsIl8iLCJSIiwiYiIsIkMiLCJsIiwiRCIsIkkiLCJCIiwiaiIsIkUiLCJBIiwiZCIsIlEiLCJnIiwiTCIsIlYiLCJ2Iiwia2V5c0luIiwiTiIsIlgiLCJZIiwicSIsIlciLCJIIiwiRyIsIkoiLCJLIiwiX19kYXRhX18iLCJzaXplIiwiY2xlYXIiLCJkZWxldGUiLCJoYXMiLCJwb3AiLCJ0ZXN0IiwiRnVuY3Rpb24iLCJSZWdFeHAiLCJyZXBsYWNlIiwidG9TdHJpbmdUYWciLCJTeW1ib2wiLCJzZWxmIiwiZXhlYyIsImtleXMiLCJJRV9QUk9UTyIsInN0cmluZyIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIndyaXRhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJub2RlVHlwZSIsIkJ1ZmZlciIsImlzQnVmZmVyIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImlzVHlwZWRBcnJheSIsInByb2Nlc3MiLCJiaW5kaW5nIiwic2xpY2UiLCJjb3B5IiwiYWxsb2NVbnNhZmUiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRQcm90b3R5cGVPZiIsIkFycmF5QnVmZmVyIiwicmVzb2x2ZSIsImluZGV4IiwiaW5wdXQiLCJieXRlTGVuZ3RoIiwiVWludDhBcnJheSIsImJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJmb3JFYWNoIiwic291cmNlIiwibGFzdEluZGV4IiwidmFsdWVPZiIsImN0eCIsImNpcmNsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiLCJyZWN0IiwiZmlsbFJlY3QiLCJwQ2lyY2xlIiwiY29sb3IiLCJwUmVjdCIsImRyYXdMaW5lWFkiLCJzdHJva2VTdHlsZSIsImxpbmVUbyIsInN0cm9rZSIsImRyYXdMaW5lVmVjIiwiZHJhd0xpbmVBcnJheSIsIml0ZXJhdG9yIiwibmV4dCIsImRvbmUiLCJyZXR1cm4iLCJncmlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUCxNQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXdDLG1CQUFtQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBa0Msb0JBQW9CO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF3Qyw0QkFBNEI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNULCtFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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R0FBMENBLFVBQVUsQ0FBVixDQUExQyxHQUF1RCxNQUF6SCxDQUFnSSxLQUFLNk0sR0FBTCxDQUFTRyxTQUFULElBQXFCLEtBQUtILEdBQUwsQ0FBU1ksV0FBVCxHQUFxQnZPLENBQTFDLENBQTRDLEtBQUksSUFBSUUsSUFBRSxDQUFWLEVBQVlBLElBQUVILENBQWQsRUFBZ0JHLEtBQUdELENBQW5CO0FBQXFCLFlBQUswTixHQUFMLENBQVM5SCxNQUFULENBQWdCM0YsQ0FBaEIsRUFBa0IsQ0FBbEIsR0FBcUIsS0FBS3lOLEdBQUwsQ0FBU2EsTUFBVCxDQUFnQnRPLENBQWhCLEVBQWtCMUIsQ0FBbEIsQ0FBckI7QUFBckIsTUFBK0QsS0FBSSxJQUFJZ0MsSUFBRSxDQUFWLEVBQVlBLElBQUVoQyxDQUFkLEVBQWdCZ0MsS0FBR1AsQ0FBbkI7QUFBcUIsWUFBSzBOLEdBQUwsQ0FBUzlILE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBa0JyRixDQUFsQixHQUFxQixLQUFLbU4sR0FBTCxDQUFTYSxNQUFULENBQWdCek8sQ0FBaEIsRUFBa0JTLENBQWxCLENBQXJCO0FBQXJCLE1BQ250K0IsS0FBS21OLEdBQUwsQ0FBU2MsTUFBVDtBQUFrQixJQURtNDZCLEVBQ2w0NkIxTyxFQUFFdkQsT0FBRixHQUFVeUQsQ0FEdzM2QjtBQUN0MzZCLEVBRG9MLENBQXRNLENBQWIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNzA2NDE5YzQ4MjcyYjJjZTczZiIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcblxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVybCA9IGlucHV0XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoJ1xcclxcbicpLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBpZnJhbWUgPSByZXF1aXJlKFwiaWZyYW1lTWFuYWdlci5qc1wiKShkb2N1bWVudCk7XG5jb25zdCBzaGltcyA9IHJlcXVpcmUoXCJzaGltcy5qc1wiKShkb2N1bWVudCk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCJkb21faGVscGVyLmpzXCIpKGRvY3VtZW50KTtcbmNvbnN0IHBhcnRpY2xlTGliID0gcmVxdWlyZShcInBhcnRpY2xlc1wiKTtcbmNvbnN0IERFRkFVTFRfRVhBTVBMRSA9IFwicmFuZG9tX3ZlY3RvcnNcIjtcblxuY29uc3Qgc2V0aGFzaCA9IChmcmFnbWVudCkgPT4ge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBmcmFnbWVudCB8fCBcIlwiO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5wYXJ0aWNsZUxpYiA9IHBhcnRpY2xlTGliO1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICBjb25zdCB0ZXh0Tm9kZXMgPSB1dGlscy5tYXBUb1RleHQoXCIubGlzdC1leGFtcGxlcyBsaSBhXCIpO1xuICBjb25zdCAkID0gc2hpbXMuJDtcblxuICBpZiAodGV4dE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlcyBubyB0ZXh0Tm9kZXMgdG8gY2hlY2sgYWdhaW5zdC5cIik7XG4gIH1cblxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gIGNhc2UoXCIvXCIpOiB7XG4gICAgY29uc29sZS5sb2coXCJob21lXCIpO1xuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvZXhhbXBsZXNcIik6IHtcbiAgICB1dGlscy5lbG1EZWxlZ2F0b3IoJChcIi5saXN0LWV4YW1wbGVzXCIpLCBcImNsaWNrXCIsIGZ1bmN0aW9uIGNoZWNrKGVsbSkge1xuICAgICAgcmV0dXJuIGVsbS50YWdOYW1lID09PSBcIkFcIjtcbiAgICB9LCBmdW5jdGlvbihlcnIsIHRhcmdldCwgZXZ0KSB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgIHNldGhhc2godGFyZ2V0LnRleHQpO1xuICAgICAgaWZyYW1lLmxvYWRJbklmcmFtZSh0YXJnZXQudGV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGVyZXMgYSBwYWdlIGZyYWdtZW50IGxvYWQgdGhlIHJpZ2h0IGV4YW1wbGUuXG4gICAgaWYgKGhhc2gubGVuZ3RoKSB7XG4gICAgICBjb25zdCBoYXNoUXVlcnkgPSBoYXNoLnN1YnN0cigxKTtcblxuICAgICAgaWYgKHRleHROb2Rlcy5pbmRleE9mKGhhc2hRdWVyeSkgPiAtMSkge1xuICAgICAgICBpZnJhbWUubG9hZEluSWZyYW1lKGhhc2hRdWVyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAvLyBEZWZhdWx0IHRvIHRoZSBhbiBleGFtcGxlIGlmIHRoZXJlcyBubyBoYXNoLlxuICAgIGlmIChoYXNoLmxlbmd0aCA8IDEpIHtcbiAgICAgIHNldGhhc2goREVGQVVMVF9FWEFNUExFKTtcbiAgICAgIGlmcmFtZS5sb2FkSW5JZnJhbWUoREVGQVVMVF9FWEFNUExFKTtcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cbiAgY2FzZShcIi9kb2NzXCIpOiB7XG4gICAgY29uc29sZS5sb2coXCJkb2NzXCIpO1xuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvbWF0aHNcIik6IHtcbiAgICBjb25zb2xlLmxvZyhcIm1hdGhzXCIpO1xuICAgIGJyZWFrO1xuICB9XG4gIGRlZmF1bHQ6IHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIHJvdXRlIG1hdGNoZWQgNDA0IDooXCIpO1xuICB9XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsImNvbnN0IEZJUlNUX0lGUkFNRSA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaWZyYW1lSGFuZGxlcihkb2N1bWVudCkge1xuICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQ7XG5cbiAgY29uc3QgZG9tSGVscGVyID0gcmVxdWlyZShcImRvbV9oZWxwZXJcIikoZG9jdW1lbnQpO1xuICBjb25zdCBzaGltcyA9IHJlcXVpcmUoXCJzaGltc1wiKShkb2N1bWVudCk7XG5cbiAgY29uc3QgJCA9IHNoaW1zLiQ7XG4gIGNvbnN0ICQkID0gc2hpbXMuJCQ7XG4gIFxuICBsZXQgZmlyc3RTdGF0ZSA9IEZJUlNUX0lGUkFNRTtcblxuICAvKipcbiAgICogW2ZldGNoRXhhbXBsZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBpZCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgZmV0Y2hFeGFtcGxlID0gZnVuY3Rpb24gZmV0Y2hFeGFtcGxlKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiL2V4YW1wbGVzL1wiICsgaWQpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbihmdW5jdGlvbih0eHQpIHtcbiAgICAgICAgcmV0dXJuIHR4dDtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cblxuICAvKipcbiAgICogW3dyaXRlRnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gcGFyZW50IFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBmcmFtZSAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCB3cml0ZUZyYW1lID0gZnVuY3Rpb24gd3JpdGVGcmFtZShwYXJlbnQsIGZyYW1lKSB7XG4gICAgaWYgKCFkb21IZWxwZXIuaXNFbGVtZW50KHBhcmVudCkgfHwgIWRvbUhlbHBlci5pc0VsZW1lbnQoZnJhbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocGFyZW50ICsgXCIgdGhpcyBwYXJlbnQgaXNuJ3QgYSBET00gZWxlbWVudC5cIik7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbZ2V0RnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBnZXRGcmFtZSA9IGZ1bmN0aW9uIGdldEZyYW1lKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiAkKFwiaWZyYW1lW2RhdGEtZXhhbXBsZV1cIik7XG4gICAgcmV0dXJuICQoXCJpZnJhbWVbZGF0YS1leGFtcGxlXj1cIiArIG5hbWUgKyBcIl1cIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtpbmplY3RTcmMgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gc3JjICAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGZyYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBpbmplY3RTcmMgPSBmdW5jdGlvbiBpbmplY3RTcmMoc3JjLCBmcmFtZSkge1xuICAgIGZyYW1lLnNyY2RvYyA9IHNyYztcbiAgICByZXR1cm4gZnJhbWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtjcmVhdGVGcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBuYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGNyZWF0ZUZyYW1lID0gZnVuY3Rpb24gY3JlYXRlRnJhbWUobmFtZSkge1xuICAgIGlmICghbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyBcIiBOb3QgYSB2YWxpZCBuYW1lIGZvciBhIGlkLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93LXNhbWUtb3JpZ2luXCIsIHRydWUpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvdy1zY3JpcHRzXCIsIHRydWUpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgdHJ1ZSk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJhbWVfZXhhbXBsZVwiKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1leGFtcGxlXCIsIG5hbWUpO1xuXG4gICAgcmV0dXJuIGlmcmFtZTtcbiAgfTtcblxuICAvKipcbiAgICogW3JlbW92ZUZyYW1lU3JjIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHRhcmdldCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IHJlbW92ZUZyYW1lU3JjID0gZnVuY3Rpb24gcmVtb3ZlRnJhbWVTcmModGFyZ2V0KSB7XG4gICAgaWYgKCF0YXJnZXQpIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgdGFyZ2V0XCIpO1xuXG4gICAgaWYgKCFkb21IZWxwZXIuaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBnZXRGcmFtZSh0YXJnZXQpLnNyY0RvYyA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQuc3JjRG9jID0gXCJcIjtcbiAgfTtcblxuICAvKipcbiAgICogW2V4YW1wbGVFeGlzdHMgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZXhhbXBsZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBleGFtcGxlRXhpc3RzID0gZnVuY3Rpb24gZXhhbXBsZUV4aXN0cyhleGFtcGxlKSB7XG4gICAgaWYgKCFleGFtcGxlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgaWQ7XG5cbiAgICB0cnkge1xuICAgICAgaWQgPSBnZXRGcmFtZShleGFtcGxlKVxuICAgICAgICAuYXR0cmlidXRlc1tcImRhdGEtZXhhbXBsZVwiXVxuICAgICAgICAubm9kZVZhbHVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHJldHVybiBpZCA9PT0gZXhhbXBsZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtsb2FkSW5JZnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBsb2FkSW5JZnJhbWUgPSBmdW5jdGlvbiBsb2FkSW5JZnJhbWUoaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWQgaW4gaUZyYW1lXCIpO1xuICAgIC8vIElmIHRoZSBleGFtcGxlIGFscmVhZHkgZXhzaXN0cyBkb250IGRvIGFueXRoaW5nLlxuICAgIGlmICghZXhhbXBsZUV4aXN0cyhpZCkpIHtcbiAgICAgIC8vIElmIHdlIGFyZSBub3QgdGhlIGZpcnN0IGZyYW1lIGluIHRoZSBkb2N1bWVudC5cbiAgICAgIGlmICghZmlyc3RTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV4YW1wbGUgZG9lc24ndCBleHNpc3QgYnV0IHdlIGFyZSB0aGUgbmV4dCBpZnJhbWUuXCIpO1xuICAgICAgICAvLyBUb2dnbGUgdGhlIHN0YXRlIGFuZCByZW1vdmUgb2xkIHNyYyBhbmQgaW5qZWN0IG5ldyBzcmMuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRnJhbWUgPSBnZXRGcmFtZSgpO1xuICAgICAgICByZW1vdmVGcmFtZVNyYyhleGlzdGluZ0ZyYW1lKTtcbiAgICAgICAgZXhpc3RpbmdGcmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWV4YW1wbGVcIiwgaWQpO1xuICAgICAgICByZXR1cm4gZmV0Y2hFeGFtcGxlKGlkKVxuICAgICAgICAgIC50aGVuKChzcmMpID0+IGluamVjdFNyYyhzcmMsIGV4aXN0aW5nRnJhbWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcIkV4YW1wbGUgZG9lc24ndCBleHNpc3QgYnV0IHdlIGFyZSB0aGUgZmlyc3QgaWZyYW1lIGV2ZXIuXCIpO1xuXG4gICAgICAvLyBUb2dnbGUgdGhlIHN0YXRlLlxuICAgICAgZmlyc3RTdGF0ZSA9ICFmaXJzdFN0YXRlO1xuICAgICAgLy8gQ3JlYXRlIHRoZSBmcmFtZVxuICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGNyZWF0ZUZyYW1lKGlkKTtcbiAgICAgIGNvbnN0IHBhcmVudERpdiA9ICQoXCIud3JhcHBlcl9fZnJhbWVcIik7XG4gICAgICAvLyBJZiB3ZSBhcmUgbm90IHRoZSBmaXJzdCBmcmFtZSBvZiB0aGUgZG9jdW1lbnQgZG8gdGhpcyByZWd1bGFyIHN0dWZmLlxuICAgICAgcmV0dXJuIGZldGNoRXhhbXBsZShpZClcbiAgICAgICAgLnRoZW4oKHNyYykgPT4gaW5qZWN0U3JjKHNyYywgZmlyc3RGcmFtZSkpXG4gICAgICAgIC50aGVuKChuZXdGcmFtZSkgPT4gd3JpdGVGcmFtZShwYXJlbnREaXYsIG5ld0ZyYW1lKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJFeGFtcGxlIGFscmVhZHkgZXhzaXN0cyBkb250IGRvIGFueXRoaW5nLi5cIik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZUZyYW1lU3JjLFxuICAgIHdyaXRlRnJhbWUsXG4gICAgZ2V0RnJhbWUsXG4gICAgaW5qZWN0U3JjLFxuICAgIGNyZWF0ZUZyYW1lLFxuICAgIGxvYWRJbklmcmFtZSxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL2lmcmFtZU1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQ7XG5cbiAgY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwic2hpbXNcIikoZG9jdW1lbnQpO1xuICBjb25zdCAkJCA9IHNoaW1zLiQkO1xuXG4gIC8qKlxuICAgKiBpc0VsZW1lbnQgY2hlY2tzIGlmIGEgZWxlbWVudCBpcyBhIERPTSBub2RlLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzRWxlbWVudCA9IGZ1bmN0aW9uIGlzRWxtKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogbWFwVGV4dCB0YWtlcyBhbiBlbG1lbnQgbGlzdCBhbmQgcmV0dXJuIGEgYXJyYXkgb2YgdGV4dE5vZGVzLlxuICAgKiBAcGFyYW0gIHtET01FbGVtZW10fSBlbG0gICBET01FbGVtZW10XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgIEFycmF5XG4gICAqL1xuICBjb25zdCBtYXBUb1RleHQgPSBmdW5jdGlvbiBtYXBUZXh0KGVsbSkge1xuICAgIGNvbnN0IGVsbUxpc3QgPSAkJChlbG0sIGRvY3VtZW50KTtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXTtcblxuICAgIC8qXG4gICAgICBXZSBuZWVkIHRvIHVzZSBhIGZvciBgb2ZgIGxvb3AgaGVyZSBjYXVzZSBpdHMgYSBOb2RlTGlzdCBhbmQgbm90IGFuXG4gICAgICBhcnJheS5cbiAgICAqL1xuICAgIGZvciAobGV0IGl0ZW0gb2YgZWxtTGlzdCkge1xuICAgICAgdGV4dE5vZGVzLnB1c2goaXRlbS50ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dE5vZGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBlbG1EZWxlZ2F0b3IgZGVsZWdhdGUgaXRlbXNcbiAgICogQHBhcmFtICB7RE9NRWxlbWVudH0gZWxtICAgICAgICAgVGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBkZWxlZ2F0ZXMuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgIGNoZWNrVGFyZ2V0IEJvb2xlYW4gdG8gY2hlY2sgd2hpY2ggZWxlbWVudHMgdG8gZGVsZWdhdGUgdG8uXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgIGNhbGxiYWNrICAgIEEgY2FsbGJhY2sgdGhhdCBpcyBwYXNzZWQgYSBlcnJvciBhcyBpdHMgZmlyc3RcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndWdtZXQgYW5kIHNlY29uZCBhcmd1bWVudCBhcyB0aGUgZGVsZWdhdGUuXG4gICAqL1xuICBjb25zdCBlbG1EZWxlZ2F0b3IgPSBmdW5jdGlvbiBlbG1EZWxlZ2F0b3IoZWxtLCBldmVudCwgY2hlY2tUYXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFpc0VsZW1lbnQoZWxtKSkgdGhyb3cgbmV3IEVycm9yKGVsbSArIFwiIG5lZWRzIHRvIGJlIGEgZWxlbWVudC5cIik7XG4gICAgaWYgKGVsbS5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihlbG0gKyBcIiBuZWVkcyB0byBiZSBlbGVtZW50IGxpc3RcIik7XG5cbiAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoY2hlY2tUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBlLnRhcmdldCwgZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoXCJObyB0YXJnZXQgbWF0Y2hlZFwiKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtlbG1EZWxlZ2F0b3IsIG1hcFRvVGV4dCwgaXNFbGVtZW50fTtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUvZG9tX2hlbHBlci5qcyIsIi8qIHNoaW1zICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1zKGRvY3VtZW50KSB7XG4gIGRvY3VtZW50ID0gZG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudDtcblxuICBjb25zdCAkID0gZnVuY3Rpb24gcXMoc2VsZWN0b3IsIGJhc2VOb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IsIGJhc2VOb2RlKTtcbiAgfTtcblxuICBjb25zdCAkJCA9IGZ1bmN0aW9uIHFzQWxsKHNlbGVjdG9yLCBiYXNlTm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yLCBiYXNlTm9kZSk7XG4gIH07XG5cbiAgcmV0dXJuIHskLCAkJH07XG59O1xuLyogc2hpbXMgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUvc2hpbXMuanMiLCJ2YXIgcGFydGljbGU9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShuKXtpZihyW25dKXJldHVybiByW25dLmV4cG9ydHM7dmFyIG89cltuXT17ZXhwb3J0czp7fSxpZDpuLGxvYWRlZDohMX07cmV0dXJuIHRbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsZSksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciByPXt9O3JldHVybiBlLm09dCxlLmM9cixlLnA9XCJcIixlKDApfShbZnVuY3Rpb24odCxlLHIpe3QuZXhwb3J0cz1yKDEpfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cigyKSxvPXIoNCksaT1yKDMpLGE9cigxMTgpO3QuZXhwb3J0cz17VmVjdG9yOm4sUGFydGljbGU6byxVdGlsczppLFNoYXBlczphfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06aTt0aGlzLnN0YXRlPXR9dmFyIG89cigzKSxpPXt4OjAseToxfTtuLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLHI9bmV3IG4oe3g6dCx5OmV9KTtyZXR1cm4gcn0sbi5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuISF0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KHQpJiYodGhpcy5zdGF0ZVt0XT1lLCEwKX0sbi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXRlW3RdfSxuLnByb3RvdHlwZS5zZXRBbmdsZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldExlbmd0aCgpO3RoaXMuc2V0KFwieFwiLE1hdGguY29zKHQpKmUpLHRoaXMuc2V0KFwieVwiLE1hdGguc2luKHQpKmUpfSxuLnByb3RvdHlwZS5zZXRMZW5ndGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRBbmdsZSgpO3RoaXMuc2V0KFwieFwiLE1hdGguY29zKGUpKnQpLHRoaXMuc2V0KFwieVwiLE1hdGguc2luKGUpKnQpfSxuLnByb3RvdHlwZS5nZXRMZW5ndGg9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldChcInhcIiksZT10aGlzLmdldChcInlcIik7cmV0dXJuIE1hdGguaHlwb3QodCxlKX0sbi5wcm90b3R5cGUuZ2V0QW5nbGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldChcInhcIiksZT10aGlzLmdldChcInlcIik7cmV0dXJuIE1hdGguYXRhbjIoZSx0KX0sbi5wcm90b3R5cGUuYWRkPW4ucHJvdG90eXBlW1wiK1wiXT1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKFwiQXJyYXlcIj09PXQuY29uc3RydWN0b3IubmFtZSYmdC5sZW5ndGgpe3ZhciByPXQubWFwKGZ1bmN0aW9uKHQpe3JldHVybnt4OnQuZ2V0KFwieFwiKSx5OnQuZ2V0KFwieVwiKX19KS5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm57eDp0LngrZS54LHk6dC55K2UueX19LGUuc3RhdGUpO3JldHVybiBlLmNyZWF0ZShyLngsci55KX1yZXR1cm4gdGhpcy5jcmVhdGUoZS5nZXQoXCJ4XCIpK3QuZ2V0KFwieFwiKSxlLmdldChcInlcIikrdC5nZXQoXCJ5XCIpKX0sbi5wcm90b3R5cGUuc3VidHJhY3Q9bi5wcm90b3R5cGVbXCItXCJdPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYoXCJBcnJheVwiPT09dC5jb25zdHJ1Y3Rvci5uYW1lJiZ0Lmxlbmd0aCl7dmFyIHI9dC5tYXAoZnVuY3Rpb24odCl7cmV0dXJue3g6dC5nZXQoXCJ4XCIpLHk6dC5nZXQoXCJ5XCIpfX0pLnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybnt4OnQueC1lLngseTp0LnktZS55fX0sZS5zdGF0ZSk7cmV0dXJuIGUuY3JlYXRlKHIueCxyLnkpfXJldHVybiB0aGlzLmNyZWF0ZShlLmdldChcInhcIiktdC5nZXQoXCJ4XCIpLGUuZ2V0KFwieVwiKS10LmdldChcInlcIikpfSxuLnByb3RvdHlwZS5tdWx0aXBseT1uLnByb3RvdHlwZVtcIipcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuZ2V0KFwieFwiKSp0LmdldChcInhcIiksdGhpcy5nZXQoXCJ5XCIpKnQuZ2V0KFwieVwiKSl9LG4ucHJvdG90eXBlLmRpdmlkZT1uLnByb3RvdHlwZVtcIi9cIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuZ2V0KFwieFwiKS90LmdldChcInhcIiksdGhpcy5nZXQoXCJ5XCIpL3QuZ2V0KFwieVwiKSl9LG4ucHJvdG90eXBlLmFkZFRvPW4ucHJvdG90eXBlW1wiKz1cIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhdGUueD10aGlzLmdldChcInhcIikrdC5nZXQoXCJ4XCIpLHRoaXMuc3RhdGUueT10aGlzLmdldChcInlcIikrdC5nZXQoXCJ5XCIpLHRoaXMuc3RhdGV9LG4ucHJvdG90eXBlLnN1YnRyYWN0RnJvbT1uLnByb3RvdHlwZVtcIi09XCJdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXRlLng9dGhpcy5nZXQoXCJ4XCIpLXQuZ2V0KFwieFwiKSx0aGlzLnN0YXRlLnk9dGhpcy5nZXQoXCJ5XCIpLXQuZ2V0KFwieVwiKSx0aGlzLnN0YXRlfSxuLnByb3RvdHlwZS5tdWx0aXBseUJ5PW4ucHJvdG90eXBlW1wiKj1cIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhdGUueD10aGlzLmdldChcInhcIikqdC5nZXQoXCJ4XCIpLHRoaXMuc3RhdGUueT10aGlzLmdldChcInlcIikqdC5nZXQoXCJ5XCIpLHRoaXMuc3RhdGV9LG4ucHJvdG90eXBlLmRpdmlkZUJ5PW4ucHJvdG90eXBlW1wiLz1cIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhdGUueD10aGlzLmdldChcInhcIikvdC5nZXQoXCJ4XCIpLHRoaXMuc3RhdGUueT10aGlzLmdldChcInlcIikvdC5nZXQoXCJ5XCIpLHRoaXMuc3RhdGV9LG4ucHJvdG90eXBlLnJhbmRvbT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjEwLHI9by5sZXJwKE1hdGgucmFuZG9tKCksdCxlKSxuPW8ubGVycChNYXRoLnJhbmRvbSgpLHQsZSk7cmV0dXJuIHRoaXMuY3JlYXRlKHIsbil9LG4ucHJvdG90eXBlLnJhbmRvbUJldHdlZW49ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXToxMCxyPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTowLG49YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOjEwO3Q9TWF0aC5tYXgodCxlKSxlPU1hdGgubWluKHQsZSkscj1NYXRoLm1heChyLG4pLG49TWF0aC5taW4ocixuKTt2YXIgaT1vLnJhbmRvbUJldHdlZW4ocixuKSxhPW8ucmFuZG9tQmV0d2Vlbih0LGUpO3JldHVybiB0aGlzLmNyZWF0ZShhLGkpfSx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO3Iubm9ybWFsaXplPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4odC1lKS8oci1lKX0sci5sZXJwPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4oci1lKSp0K2V9LHIubWFwPWZ1bmN0aW9uKHQsZSxyLG4sbyl7cmV0dXJuIHI9TWF0aC5tYXgocixlKSxlPU1hdGgubWluKHIsZSksbj1NYXRoLm1pbihuLG8pLG89TWF0aC5tYXgobixvKSx0aGlzLmxlcnAodGhpcy5ub3JtYWxpemUodCxlLHIpLG4sbyl9LHIucGVyY2VudD1mdW5jdGlvbih0KXtyZXR1cm4gMTAwKnR9LHIuY2xhbXA9ZnVuY3Rpb24odCxlLHIpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heCh0LE1hdGgubWluKGUscikpLE1hdGgubWF4KGUscikpfSxyLnJhbmRvbUJldHdlZW49ZnVuY3Rpb24odCxlKXt2YXIgcj1NYXRoLm1pbih0LGUpLG49TWF0aC5tYXgodCxlKTtyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihuLXIpKStyfSxyLmRpc3RhbmNlWFk9ZnVuY3Rpb24odCxlLHIsbil7dmFyIG89dC1yLGk9ZS1uO3JldHVybiBNYXRoLmh5cG90KG8saSl9LHIuZGlzdGFuY2VWZWM9ZnVuY3Rpb24odCxlKXt2YXIgcj10W1wiLVwiXShlKTtyZXR1cm4gTWF0aC5oeXBvdChyLmdldChcInhcIiksci5nZXQoXCJ5XCIpKX0sci5pblJhbmdlPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gdDw9TWF0aC5tYXgocixlKSYmTWF0aC5taW4ocixlKTw9dH0sci5yYW5nZUludGVyc2VjdD1mdW5jdGlvbih0LGUscixuKXtyZXR1cm4gTWF0aC5tYXgoZSx0KT49TWF0aC5taW4ocixuKSYmTWF0aC5taW4odCxlKTw9TWF0aC5tYXgobixyKX0sci52ZWN0b3JJbnRlcnNlY3Q9ZnVuY3Rpb24odCxlKXt2YXIgcj10LmdldChcInhcIiksbj10LmdldChcInlcIiksbz1lLmdldChcInhcIiksaT1lLmdldChcInlcIik7cmV0dXJuIHRoaXMucmFuZ2VJbnRlcnNlY3QocixuLG8saSl9LHIuY29sbGlzaW9uUmVjdD1mdW5jdGlvbih0LGUpe3ZhciByPXQuc3RhdGUueCxuPXQuc3RhdGUueSxvPWUuc3RhdGUueCxpPWUuc3RhdGUueSxhPXIrdC5zdGF0ZS53aWR0aCxjPW4rdC5zdGF0ZS5oZWlnaHQscz1vK2Uuc3RhdGUud2lkdGgsdT1pK2Uuc3RhdGUuaGVpZ2h0O3JldHVybiB0aGlzLnJhbmdlSW50ZXJzZWN0KHIsYSxvLHMpJiZ0aGlzLnJhbmdlSW50ZXJzZWN0KG4sYyxpLHUpfSxyLmNvbGxpc2lvbkNpcmNsZT1mdW5jdGlvbih0LGUpe3ZhciByPXQuc3RhdGUucmFkaXVzK2Uuc3RhdGUucmFkaXVzLG49dGhpcy5kaXN0YW5jZVhZKHQuc3RhdGUueCx0LnN0YXRlLnksZS5zdGF0ZS54LGUuc3RhdGUueSk7cmV0dXJuIW58fHI+bn0sci5jb2xsaXNpb25DaXJjbGVQb2ludD1mdW5jdGlvbih0LGUscil7dmFyIG49dGhpcy5kaXN0YW5jZVhZKHQsZSxyLnN0YXRlLngsci5zdGF0ZS55KTtyZXR1cm4gci5zdGF0ZS5yYWRpdXM+bn0sci5jb2xsaXNpb25DaXJjbGVWZWM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5zdGF0ZS5yYWRpdXM+dGhpcy5kaXN0YW5jZVhZKHQuZ2V0KFwieFwiKSx0LmdldChcInlcIiksZS5zdGF0ZS54LGUuc3RhdGUueSl9LHIuY29sbGlzaW9uUmVjdFBvaW50PWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yLnN0YXRlLngsbz1yLnN0YXRlLnk7cmV0dXJuIHRoaXMuaW5SYW5nZSh0LG4sbityLnN0YXRlLndpZHRoKSYmdGhpcy5pblJhbmdlKGUsbyxvK3Iuc3RhdGUuaGVpZ2h0KX0sci5jb2xsaXNpb25SZWN0VmVjPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY29sbGlzaW9uUmVjdFBvaW50KHQuZ2V0KFwieFwiKSx0LmdldChcInlcIiksZSl9LHIudGhyb3R0bGU9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPXZvaWQgMCxvPXZvaWQgMCxpPXZvaWQgMCxhPW51bGwsYz0wO3J8fChyPXt9KTt2YXIgcz1mdW5jdGlvbigpe2M9ci5sZWFkaW5nPT09ITE/MDpEYXRlLm5vdygpLGE9bnVsbCxpPXQuYXBwbHkobixvKSxhfHwobj1vPW51bGwpfTtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIG89YXJndW1lbnRzLmxlbmd0aCx1PUFycmF5KG8pLHA9MDtwPG87cCsrKXVbcF09YXJndW1lbnRzW3BdO3ZhciBmPURhdGUubm93KCk7Y3x8ci5sZWFkaW5nIT09ITF8fChjPWYpO3ZhciBoPWUtKGYtYyk7cmV0dXJuIG49dGhpcyx1PXUsaDw9MHx8aD5lPyhhJiYoY2xlYXJUaW1lb3V0KGEpLGE9bnVsbCksYz1mLGk9dC5hcHBseShuLHUpLGF8fChuPXU9bnVsbCkpOmF8fHIudHJhaWxpbmc9PT0hMXx8KGE9c2V0VGltZW91dChzLGgpKSxpfX0sci5zZXRMZW5ndGg9ZnVuY3Rpb24odCxlLHIpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiBlfHxcIm51bWJlclwiIT10eXBlb2Ygcnx8XCJudW1iZXJcIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgeCBhbmQgeSB2YWx1ZXNcIik7dmFyIG49TWF0aC5hdGFuMihyLGUpO3JldHVybiBlPU1hdGguY29zKG4pKnQscj1NYXRoLnNpbihuKSp0LFtlLHJdfSxyLnNldEFuZ2xlPWZ1bmN0aW9uKHQsZSxyKXtpZihcIm51bWJlclwiIT10eXBlb2YgZXx8XCJudW1iZXJcIiE9dHlwZW9mIHJ8fFwibnVtYmVyXCIhPXR5cGVvZiB0KXRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIHggYW5kIHkgdmFsdWVzXCIpO3ZhciBuPU1hdGguaHlwb3QoZSxyKTtyZXR1cm4gZT1NYXRoLmNvcyh0KSpuLHI9TWF0aC5zaW4odCkqbixbZSxyXX0sci5kZWdUb1JhZD1mdW5jdGlvbih0KXtyZXR1cm4gdC8xODAqTWF0aC5QSX0sci5yYWRUb0RlZz1mdW5jdGlvbih0KXtyZXR1cm4gMTgwKnQvTWF0aC5QSX0sci5yb3VuZFRvUGxhY2VzPWZ1bmN0aW9uKHQsZSl7dmFyIHI9TWF0aC5wb3coMTAsZSk7cmV0dXJuIE1hdGgucm91bmQodCpyKS9yfSxyLnJvdW5kVG9NdWx0aXBsZT1mdW5jdGlvbih0LGUpe2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk5vdGhpbmcgY2FuIGJlIGEgbXVsdGlwbGUgb2YgXCIrU3RyaW5nKGUpKTtyZXR1cm4gTWF0aC5yb3VuZCh0L2UpKmV9LHIucXVhZHJhdGljQmV6aWVyPWZ1bmN0aW9uKHQsZSxyLG4pe3JldHVybiBNYXRoLnBvdygxLW4sMikqdCsyKigxLW4pKm4qZStuKm4qcn0sci5jdWJpY0Jlemllcj1mdW5jdGlvbih0LGUscixuLG8pe3JldHVybiBNYXRoLnBvdygxLW8sMykqdCszKk1hdGgucG93KDEtbywyKSpvKmUrMyooMS1vKSpvKm8qcitvKm8qbytufSxyLnF1YWRyYXRpY0JlemllclBvaW50PWZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTp7fTtyZXR1cm4gby54PU1hdGgucG93KDEtbiwyKSp0LngrMiooMS1uKSpuKmUueCtuKm4qci54LG8ueT1NYXRoLnBvdygxLW4sMikqdC55KzIqKDEtbikqbiplLnkrbipuKnIueSxvfSxyLmN1YmljQmV6aWVyUG9pbnQ9ZnVuY3Rpb24odCxlLHIsbixvKXt2YXIgaT1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06e307cmV0dXJuIGkueD1NYXRoLnBvdygxLW8sMykqdC54KzMqTWF0aC5wb3coMS1vLDIpKm8qZS54KzMqKDEtbykqbypvKnIueCtvKm8qbytuLngsaS55PU1hdGgucG93KDEtbywzKSp0LnkrMypNYXRoLnBvdygxLW8sMikqbyplLnkrMyooMS1vKSpvKm8qci55K28qbypvK24ueCxpfSxyLm11bHRpQ3VydmU9ZnVuY3Rpb24odCxlKXt2YXIgcj12b2lkIDAsbj12b2lkIDAsbz12b2lkIDAsaT12b2lkIDA7ZS5tb3ZlVG8odFswXS54LHRbMF0ueSk7Zm9yKHZhciBhPTE7YTx0Lmxlbmd0aC0yO2ErKylyPXRbYV0sbj10W2ErMV0sbz0oci54K24ueCkvMixpPShyLnkrbi55KS8yLGUucXVhZHJhdGljQ3VydmVUbyhyLngsci55LG8saSk7cj10W3QubGVuZ3RoLTJdLG49dFt0Lmxlbmd0aC0xXSxlLnF1YWRyYXRpY0N1cnZlVG8oci54LHIueSxuLngsbi55KX0sdC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOmkoYSk7dGhpcy5zdGF0ZT10fXZhciBvPXIoNSksaT1yKDYpLGE9e3g6MCx5OjAsdng6MCx2eTowLGdyYXZpdHk6MCxtYWduaXR1ZGU6MCxyYWRpdXM6MSxtYXNzOjEsZGlyZWN0aW9uOjIqTWF0aC5QSSxmcmljdGlvbjoxLHNwcmluZ3M6W10sbWFzc2VzOltdfTtuLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06aShhKTt0PW8oITAsaShhKSx0KTt2YXIgZT1uZXcgbih0KTtyZXR1cm4gZS5zZXRTcGVlZCh0Lm1hZ25pdHVkZSksZS5zZXRIZWFkaW5nKHQuZGlyZWN0aW9uKSxlfSxuLnByb3RvdHlwZS5hY2NlbGVyYXRlPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMuc3RhdGUudngsZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06dGhpcy5zdGF0ZS52eTtyZXR1cm4gdGhpcy5zdGF0ZS52eCs9dCx0aGlzLnN0YXRlLnZ5Kz1lLHtheDp0LGF5OmV9fSxuLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy5zdGF0ZS5mcmljdGlvbixlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp0aGlzLnN0YXRlLmdyYXZpdHk7cmV0dXJuIHRoaXMuaGFuZGxlU3ByaW5ncygpLHRoaXMuaGFuZGxlTWFzc2VzKCksdGhpcy5zdGF0ZS52eCo9dCx0aGlzLnN0YXRlLnZ5Kj10LHRoaXMuYWNjZWxlcmF0ZSgwLGUpLHRoaXMudXBkYXRlUG9zKCl9LG4ucHJvdG90eXBlLnNldFNwZWVkPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0SGVhZGluZygpO3RoaXMuc3RhdGUudng9TWF0aC5jb3MoZSkqdCx0aGlzLnN0YXRlLnZ5PU1hdGguc2luKGUpKnR9LG4ucHJvdG90eXBlLnNldEhlYWRpbmc9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRTcGVlZCgpO3RoaXMuc3RhdGUudng9TWF0aC5jb3ModCkqZSx0aGlzLnN0YXRlLnZ5PU1hdGguc2luKHQpKmV9LG4ucHJvdG90eXBlLmdldFNwZWVkPWZ1bmN0aW9uKCl7YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMuc3RhdGUudngsYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnRoaXMuc3RhdGUudnk7cmV0dXJuIE1hdGguaHlwb3QodGhpcy5zdGF0ZS52eCx0aGlzLnN0YXRlLnZ5KX0sbi5wcm90b3R5cGUuZ2V0SGVhZGluZz1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp0aGlzLnN0YXRlLnZ4LGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnRoaXMuc3RhdGUudnk7cmV0dXJuIE1hdGguYXRhbjIoZSx0KX0sbi5wcm90b3R5cGUuYWRkU3ByaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJlbW92ZVNwcmluZyh0KSx0aGlzLnN0YXRlLnNwcmluZ3MucHVzaCh0KSx0fSxuLnByb3RvdHlwZS5yZW1vdmVTcHJpbmc9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQucG9pbnQuc3RhdGUscj10aGlzLnN0YXRlLnNwcmluZ3Msbj0wO248ci5sZW5ndGg7bisrKWlmKGUueD09PXJbbl0ucG9pbnQuc3RhdGUueCYmZS55PT09cltuXS5wb2ludC5zdGF0ZS55KXtyLnNwbGljZShuLDEpO2JyZWFrfX0sbi5wcm90b3R5cGUuYW5nbGVUbz1mdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLHI9ZS54LG49ZS55LG89e3g6ci10aGlzLnN0YXRlLngseTpuLXRoaXMuc3RhdGUueX0saT1vLngsYT1vLnk7cmV0dXJuIE1hdGguYXRhbjIoYSxpKX0sbi5wcm90b3R5cGUuZGlzdGFuY2VUbz1mdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLHI9ZS54LG49ZS55LG89e3g6ci10aGlzLnN0YXRlLngseTpuLXRoaXMuc3RhdGUueX0saT1vLngsYT1vLnk7cmV0dXJuIE1hdGguaHlwb3QoaSxhKX0sbi5wcm90b3R5cGUuYWRkTWFzcz1mdW5jdGlvbih0KXt0aGlzLnJlbW92ZU1hc3ModCksdGhpcy5zdGF0ZS5tYXNzZXMucHVzaCh0KX0sbi5wcm90b3R5cGUucmVtb3ZlTWFzcz1mdW5jdGlvbih0KXtmb3IodmFyIGU9dC5zdGF0ZSxyPXRoaXMuc3RhdGUubWFzc2VzLG49MDtuPHIubGVuZ3RoO24rKylpZihlLng9PT1yW25dLnN0YXRlLngmJmUueT09PXJbbl0uc3RhdGUueSl7ci5zcGxpY2UobiwxKTticmVha319LG4ucHJvdG90eXBlLmdyYXZpdGF0ZVRvPWZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUueC10aGlzLnN0YXRlLngscj10LnN0YXRlLnktdGhpcy5zdGF0ZS55LG49ZSplK3IqcixvPU1hdGguc3FydChuKSxpPXQuc3RhdGUubWFzcy9uLGE9ci9vLGM9ZS9vLHM9YyppLHU9YSppO3JldHVybiB0aGlzLmFjY2VsZXJhdGUocyx1KX0sbi5wcm90b3R5cGUuZ2VuZXJhdG9yPWZ1bmN0aW9uKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTppKGEpLHI9YXJndW1lbnRzWzJdO09iamVjdC5mcmVlemUoZSk7dmFyIG49W10sbz10aGlzO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHIpZm9yKHZhciBjPTA7Yzx0O2MrKylyKGUsYyxmdW5jdGlvbih0KXtpZighdCl7Y29uc29sZS5sb2coXCJObyBwYXJ0aWNsZSBwYXNzZWQgdG8gZ2VuZXJhdG9yLiBXaWxsIHVzZSBkZWZhdWx0IHN0YXRlLlwiKTt2YXIgcj1vLmNyZWF0ZShlKTtyZXR1cm4gbi5wdXNoKHIpLHJ9dmFyIGk9by5jcmVhdGUodCk7cmV0dXJuIG4ucHVzaChpKSxpfSk7aWYoIXIpZm9yKHZhciBzPTA7czx0O3MrKyluLnB1c2goby5jcmVhdGUoZSkpO3JldHVybiBufSxuLnByb3RvdHlwZS51cGRhdGVQb3M9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09dCYmdm9pZCAwPT09ZT8odGhpcy5zdGF0ZS54Kz10aGlzLnN0YXRlLnZ4LHRoaXMuc3RhdGUueSs9dGhpcy5zdGF0ZS52eSx7eDp0aGlzLnN0YXRlLngseTp0aGlzLnN0YXRlLnl9KToodGhpcy5zdGF0ZS54Kz0rdCx0aGlzLnN0YXRlLnkrPStlLHt4OnRoaXMuc3RhdGUueCx5OnRoaXMuc3RhdGUueX0pfSxuLnByb3RvdHlwZS5zcHJpbmdGcm9tVG89ZnVuY3Rpb24odCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOi4wNSxyPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXToxMDAsbj10LnN0YXRlLngtdGhpcy5zdGF0ZS54LG89dC5zdGF0ZS55LXRoaXMuc3RhdGUueSxpPU1hdGguaHlwb3QobixvKSxhPShpLXIpKmUsYz1uL2kqYSxzPW8vaSphO3JldHVybiB0aGlzLmFjY2VsZXJhdGUoYyxzKSx0LnN0YXRlLnZ4LT1jLHQuc3RhdGUudnktPXMsW3RoaXMsdF19LG4ucHJvdG90eXBlLnNwcmluZ1RvUG9pbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5wb2ludC5zdGF0ZS54LXRoaXMuc3RhdGUueCxyPXQucG9pbnQuc3RhdGUueS10aGlzLnN0YXRlLnksbj1NYXRoLmh5cG90KGUsciksbz0obi10Lm9mZnNldCkqdC5zcHJpbmcsaT1lL24qbyxhPXIvbipvO3JldHVybiB0aGlzLmFjY2VsZXJhdGUoaSxhKSxbdGhpcyx0XX0sbi5wcm90b3R5cGUuaGFuZGxlU3ByaW5ncz1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy5zdGF0ZS5zcHJpbmdzLGU9MDtlPHQubGVuZ3RoO2UrKyl0aGlzLnNwcmluZ1RvUG9pbnQodFtlXSk7cmV0dXJuIHR9LG4ucHJvdG90eXBlLmhhbmRsZU1hc3Nlcz1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06dGhpcy5zdGF0ZS5tYXNzZXMsZT0wO2U8dC5sZW5ndGg7ZSsrKXRoaXMuZ3Jhdml0YXRlVG8odFtlXSk7cmV0dXJuIHR9LHQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3ZhciByPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLG89ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkuaXNBcnJheT9BcnJheS5pc0FycmF5KHQpOlwiW29iamVjdCBBcnJheV1cIj09PW4uY2FsbCh0KX0saT1mdW5jdGlvbih0KXtpZighdHx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW4uY2FsbCh0KSlyZXR1cm4hMTt2YXIgZT1yLmNhbGwodCxcImNvbnN0cnVjdG9yXCIpLG89dC5jb25zdHJ1Y3RvciYmdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUmJnIuY2FsbCh0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIik7aWYodC5jb25zdHJ1Y3RvciYmIWUmJiFvKXJldHVybiExO3ZhciBpO2ZvcihpIGluIHQpO3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBpfHxyLmNhbGwodCxpKX07dC5leHBvcnRzPWZ1bmN0aW9uIHQoKXt2YXIgZSxyLG4sYSxjLHMsdT1hcmd1bWVudHNbMF0scD0xLGY9YXJndW1lbnRzLmxlbmd0aCxoPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIHU/KGg9dSx1PWFyZ3VtZW50c1sxXXx8e30scD0yKTooXCJvYmplY3RcIiE9dHlwZW9mIHUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHV8fG51bGw9PXUpJiYodT17fSk7cDxmOysrcClpZihlPWFyZ3VtZW50c1twXSxudWxsIT1lKWZvcihyIGluIGUpbj11W3JdLGE9ZVtyXSx1IT09YSYmKGgmJmEmJihpKGEpfHwoYz1vKGEpKSk/KGM/KGM9ITEscz1uJiZvKG4pP246W10pOnM9biYmaShuKT9uOnt9LHVbcl09dChoLHMsYSkpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhJiYodVtyXT1hKSk7cmV0dXJuIHV9fSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0KXtyZXR1cm4gbyh0LGl8YSl9dmFyIG89cig3KSxpPTEsYT00O3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0LGUscixQLFMsVCl7dmFyIHosaz1lJncsRj1lJk0sVT1lJk87aWYociYmKHo9Uz9yKHQsUCxTLFQpOnIodCkpLHZvaWQgMCE9PXopcmV0dXJuIHo7aWYoIV8odCkpcmV0dXJuIHQ7dmFyIFI9Yih0KTtpZihSKXtpZih6PXgodCksIWspcmV0dXJuIHAodCx6KX1lbHNle3ZhciBDPWwodCksRD1DPT1JfHxDPT1CO2lmKGoodCkpcmV0dXJuIHUodCxrKTtpZihDPT1FfHxDPT1BfHxEJiYhUyl7aWYoej1GfHxEP3t9OmQodCksIWspcmV0dXJuIEY/aCh0LHMoeix0KSk6Zih0LGMoeix0KSl9ZWxzZXtpZighUVtDXSlyZXR1cm4gUz90Ont9O3o9Zyh0LEMsbixrKX19VHx8KFQ9bmV3IG8pO3ZhciBMPVQuZ2V0KHQpO2lmKEwpcmV0dXJuIEw7VC5zZXQodCx6KTt2YXIgVj1VP0Y/djp5OkY/a2V5c0luOm0sJD1SP3ZvaWQgMDpWKHQpO3JldHVybiBpKCR8fHQsZnVuY3Rpb24obyxpKXskJiYoaT1vLG89dFtpXSksYSh6LGksbihvLGUscixpLHQsVCkpfSksen12YXIgbz1yKDgpLGk9cig1MiksYT1yKDUzKSxjPXIoNTYpLHM9cig3OSksdT1yKDgzKSxwPXIoODQpLGY9cig4NSksaD1yKDg5KSx5PXIoOTMpLHY9cig5NSksbD1yKDk2KSx4PXIoMTAxKSxnPXIoMTAyKSxkPXIoMTE2KSxiPXIoNjQpLGo9cig2NSksXz1yKDMyKSxtPXIoNTgpLHc9MSxNPTIsTz00LEE9XCJbb2JqZWN0IEFyZ3VtZW50c11cIixQPVwiW29iamVjdCBBcnJheV1cIixTPVwiW29iamVjdCBCb29sZWFuXVwiLFQ9XCJbb2JqZWN0IERhdGVdXCIsej1cIltvYmplY3QgRXJyb3JdXCIsST1cIltvYmplY3QgRnVuY3Rpb25dXCIsQj1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsaz1cIltvYmplY3QgTWFwXVwiLEY9XCJbb2JqZWN0IE51bWJlcl1cIixFPVwiW29iamVjdCBPYmplY3RdXCIsVT1cIltvYmplY3QgUmVnRXhwXVwiLFI9XCJbb2JqZWN0IFNldF1cIixDPVwiW29iamVjdCBTdHJpbmddXCIsRD1cIltvYmplY3QgU3ltYm9sXVwiLEw9XCJbb2JqZWN0IFdlYWtNYXBdXCIsVj1cIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsJD1cIltvYmplY3QgRGF0YVZpZXddXCIsTj1cIltvYmplY3QgRmxvYXQzMkFycmF5XVwiLFg9XCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIixZPVwiW29iamVjdCBJbnQ4QXJyYXldXCIscT1cIltvYmplY3QgSW50MTZBcnJheV1cIixXPVwiW29iamVjdCBJbnQzMkFycmF5XVwiLEg9XCJbb2JqZWN0IFVpbnQ4QXJyYXldXCIsRz1cIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCIsSj1cIltvYmplY3QgVWludDE2QXJyYXldXCIsSz1cIltvYmplY3QgVWludDMyQXJyYXldXCIsUT17fTtRW0FdPVFbUF09UVtWXT1RWyRdPVFbU109UVtUXT1RW05dPVFbWF09UVtZXT1RW3FdPVFbV109UVtrXT1RW0ZdPVFbRV09UVtVXT1RW1JdPVFbQ109UVtEXT1RW0hdPVFbR109UVtKXT1RW0tdPSEwLFFbel09UVtJXT1RW0xdPSExLHQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fPW5ldyBvKHQpO3RoaXMuc2l6ZT1lLnNpemV9dmFyIG89cig5KSxpPXIoMTcpLGE9cigxOCksYz1yKDE5KSxzPXIoMjApLHU9cigyMSk7bi5wcm90b3R5cGUuY2xlYXI9aSxuLnByb3RvdHlwZS5kZWxldGU9YSxuLnByb3RvdHlwZS5nZXQ9YyxuLnByb3RvdHlwZS5oYXM9cyxuLnByb3RvdHlwZS5zZXQ9dSx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7dmFyIGU9LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8cjspe3ZhciBuPXRbZV07dGhpcy5zZXQoblswXSxuWzFdKX19dmFyIG89cigxMCksaT1yKDExKSxhPXIoMTQpLGM9cigxNSkscz1yKDE2KTtuLnByb3RvdHlwZS5jbGVhcj1vLG4ucHJvdG90eXBlLmRlbGV0ZT1pLG4ucHJvdG90eXBlLmdldD1hLG4ucHJvdG90eXBlLmhhcz1jLG4ucHJvdG90eXBlLnNldD1zLHQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIoKXt0aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfXQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fLHI9byhlLHQpO2lmKHI8MClyZXR1cm4hMTt2YXIgbj1lLmxlbmd0aC0xO3JldHVybiByPT1uP2UucG9wKCk6YS5jYWxsKGUsciwxKSwtLXRoaXMuc2l6ZSwhMH12YXIgbz1yKDEyKSxpPUFycmF5LnByb3RvdHlwZSxhPWkuc3BsaWNlO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0LGUpe2Zvcih2YXIgcj10Lmxlbmd0aDtyLS07KWlmKG8odFtyXVswXSxlKSlyZXR1cm4gcjtyZXR1cm4tMX12YXIgbz1yKDEzKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQsZSl7cmV0dXJuIHQ9PT1lfHx0IT09dCYmZSE9PWV9dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQpe3ZhciBlPXRoaXMuX19kYXRhX18scj1vKGUsdCk7cmV0dXJuIHI8MD92b2lkIDA6ZVtyXVsxXX12YXIgbz1yKDEyKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIG8odGhpcy5fX2RhdGFfXyx0KT4tMX12YXIgbz1yKDEyKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlKXt2YXIgcj10aGlzLl9fZGF0YV9fLG49byhyLHQpO3JldHVybiBuPDA/KCsrdGhpcy5zaXplLHIucHVzaChbdCxlXSkpOnJbbl1bMV09ZSx0aGlzfXZhciBvPXIoMTIpO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbigpe3RoaXMuX19kYXRhX189bmV3IG8sdGhpcy5zaXplPTB9dmFyIG89cig5KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3ZhciBlPXRoaXMuX19kYXRhX18scj1lLmRlbGV0ZSh0KTtyZXR1cm4gdGhpcy5zaXplPWUuc2l6ZSxyfXQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KHQpfXQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfXQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0LGUpe3ZhciByPXRoaXMuX19kYXRhX187aWYociBpbnN0YW5jZW9mIG8pe3ZhciBuPXIuX19kYXRhX187aWYoIWl8fG4ubGVuZ3RoPGMtMSlyZXR1cm4gbi5wdXNoKFt0LGVdKSx0aGlzLnNpemU9KytyLnNpemUsdGhpcztyPXRoaXMuX19kYXRhX189bmV3IGEobil9cmV0dXJuIHIuc2V0KHQsZSksdGhpcy5zaXplPXIuc2l6ZSx0aGlzfXZhciBvPXIoOSksaT1yKDIyKSxhPXIoMzcpLGM9MjAwO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7dmFyIG49cigyMyksbz1yKDI4KSxpPW4obyxcIk1hcFwiKTt0LmV4cG9ydHM9aX0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlKXt2YXIgcj1pKHQsZSk7cmV0dXJuIG8ocik/cjp2b2lkIDB9dmFyIG89cigyNCksaT1yKDM2KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7aWYoIWEodCl8fGkodCkpcmV0dXJuITE7dmFyIGU9byh0KT92OnU7cmV0dXJuIGUudGVzdChjKHQpKX12YXIgbz1yKDI1KSxpPXIoMzMpLGE9cigzMiksYz1yKDM1KSxzPS9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyx1PS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8scD1GdW5jdGlvbi5wcm90b3R5cGUsZj1PYmplY3QucHJvdG90eXBlLGg9cC50b1N0cmluZyx5PWYuaGFzT3duUHJvcGVydHksdj1SZWdFeHAoXCJeXCIraC5jYWxsKHkpLnJlcGxhY2UocyxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0KXtpZighaSh0KSlyZXR1cm4hMTt2YXIgZT1vKHQpO3JldHVybiBlPT1jfHxlPT1zfHxlPT1hfHxlPT11fXZhciBvPXIoMjYpLGk9cigzMiksYT1cIltvYmplY3QgQXN5bmNGdW5jdGlvbl1cIixjPVwiW29iamVjdCBGdW5jdGlvbl1cIixzPVwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIix1PVwiW29iamVjdCBQcm94eV1cIjt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIG51bGw9PXQ/dm9pZCAwPT09dD9zOmM6dSYmdSBpbiBPYmplY3QodCk/aSh0KTphKHQpfXZhciBvPXIoMjcpLGk9cigzMCksYT1yKDMxKSxjPVwiW29iamVjdCBOdWxsXVwiLHM9XCJbb2JqZWN0IFVuZGVmaW5lZF1cIix1PW8/by50b1N0cmluZ1RhZzp2b2lkIDA7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDI4KSxvPW4uU3ltYm9sO3QuZXhwb3J0cz1vfSxmdW5jdGlvbih0LGUscil7dmFyIG49cigyOSksbz1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsaT1ufHxvfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7dC5leHBvcnRzPWl9LGZ1bmN0aW9uKHQsZSl7KGZ1bmN0aW9uKGUpe3ZhciByPVwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLk9iamVjdD09PU9iamVjdCYmZTt0LmV4cG9ydHM9cn0pLmNhbGwoZSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7dmFyIGU9YS5jYWxsKHQscykscj10W3NdO3RyeXt0W3NdPXZvaWQgMDt2YXIgbj0hMH1jYXRjaCh0KXt9dmFyIG89Yy5jYWxsKHQpO3JldHVybiBuJiYoZT90W3NdPXI6ZGVsZXRlIHRbc10pLG99dmFyIG89cigyNyksaT1PYmplY3QucHJvdG90eXBlLGE9aS5oYXNPd25Qcm9wZXJ0eSxjPWkudG9TdHJpbmcscz1vP28udG9TdHJpbmdUYWc6dm9pZCAwO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCl7cmV0dXJuIG8uY2FsbCh0KX12YXIgbj1PYmplY3QucHJvdG90eXBlLG89bi50b1N0cmluZzt0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiBudWxsIT10JiYoXCJvYmplY3RcIj09ZXx8XCJmdW5jdGlvblwiPT1lKX10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuISFpJiZpIGluIHR9dmFyIG89cigzNCksaT1mdW5jdGlvbigpe3ZhciB0PS9bXi5dKyQvLmV4ZWMobyYmby5rZXlzJiZvLmtleXMuSUVfUFJPVE98fFwiXCIpO3JldHVybiB0P1wiU3ltYm9sKHNyYylfMS5cIit0OlwiXCJ9KCk7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDI4KSxvPW5bXCJfX2NvcmUtanNfc2hhcmVkX19cIl07dC5leHBvcnRzPW99LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gcih0KXtpZihudWxsIT10KXt0cnl7cmV0dXJuIG8uY2FsbCh0KX1jYXRjaCh0KXt9dHJ5e3JldHVybiB0K1wiXCJ9Y2F0Y2godCl7fX1yZXR1cm5cIlwifXZhciBuPUZ1bmN0aW9uLnByb3RvdHlwZSxvPW4udG9TdHJpbmc7dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gcih0LGUpe3JldHVybiBudWxsPT10P3ZvaWQgMDp0W2VdfXQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0KXt2YXIgZT0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxyOyl7dmFyIG49dFtlXTt0aGlzLnNldChuWzBdLG5bMV0pfX12YXIgbz1yKDM4KSxpPXIoNDYpLGE9cig0OSksYz1yKDUwKSxzPXIoNTEpO24ucHJvdG90eXBlLmNsZWFyPW8sbi5wcm90b3R5cGUuZGVsZXRlPWksbi5wcm90b3R5cGUuZ2V0PWEsbi5wcm90b3R5cGUuaGFzPWMsbi5wcm90b3R5cGUuc2V0PXMsdC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgbyxtYXA6bmV3KGF8fGkpLHN0cmluZzpuZXcgb319dmFyIG89cigzOSksaT1yKDkpLGE9cigyMik7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQpe3ZhciBlPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPHI7KXt2YXIgbj10W2VdO3RoaXMuc2V0KG5bMF0sblsxXSl9fXZhciBvPXIoNDApLGk9cig0MiksYT1yKDQzKSxjPXIoNDQpLHM9cig0NSk7bi5wcm90b3R5cGUuY2xlYXI9byxuLnByb3RvdHlwZS5kZWxldGU9aSxuLnByb3RvdHlwZS5nZXQ9YSxuLnByb3RvdHlwZS5oYXM9YyxuLnByb3RvdHlwZS5zZXQ9cyx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4oKXt0aGlzLl9fZGF0YV9fPW8/byhudWxsKTp7fSx0aGlzLnNpemU9MH12YXIgbz1yKDQxKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe3ZhciBuPXIoMjMpLG89bihPYmplY3QsXCJjcmVhdGVcIik7dC5leHBvcnRzPW99LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gcih0KXt2YXIgZT10aGlzLmhhcyh0KSYmZGVsZXRlIHRoaXMuX19kYXRhX19bdF07cmV0dXJuIHRoaXMuc2l6ZS09ZT8xOjAsZX10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztpZihvKXt2YXIgcj1lW3RdO3JldHVybiByPT09aT92b2lkIDA6cn1yZXR1cm4gYy5jYWxsKGUsdCk/ZVt0XTp2b2lkIDB9dmFyIG89cig0MSksaT1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIixhPU9iamVjdC5wcm90b3R5cGUsYz1hLmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiBvP3ZvaWQgMCE9PWVbdF06YS5jYWxsKGUsdCl9dmFyIG89cig0MSksaT1PYmplY3QucHJvdG90eXBlLGE9aS5oYXNPd25Qcm9wZXJ0eTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlKXt2YXIgcj10aGlzLl9fZGF0YV9fO3JldHVybiB0aGlzLnNpemUrPXRoaXMuaGFzKHQpPzA6MSxyW3RdPW8mJnZvaWQgMD09PWU/aTplLHRoaXN9dmFyIG89cig0MSksaT1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7dmFyIGU9byh0aGlzLHQpLmRlbGV0ZSh0KTtyZXR1cm4gdGhpcy5zaXplLT1lPzE6MCxlfXZhciBvPXIoNDcpO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0LGUpe3ZhciByPXQuX19kYXRhX187cmV0dXJuIG8oZSk/cltcInN0cmluZ1wiPT10eXBlb2YgZT9cInN0cmluZ1wiOlwiaGFzaFwiXTpyLm1hcH12YXIgbz1yKDQ4KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3ZhciBlPXR5cGVvZiB0O3JldHVyblwic3RyaW5nXCI9PWV8fFwibnVtYmVyXCI9PWV8fFwic3ltYm9sXCI9PWV8fFwiYm9vbGVhblwiPT1lP1wiX19wcm90b19fXCIhPT10Om51bGw9PT10fXQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0KXtyZXR1cm4gbyh0aGlzLHQpLmdldCh0KX12YXIgbz1yKDQ3KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIG8odGhpcyx0KS5oYXModCl9dmFyIG89cig0Nyk7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQsZSl7dmFyIHI9byh0aGlzLHQpLG49ci5zaXplO3JldHVybiByLnNldCh0LGUpLHRoaXMuc2l6ZSs9ci5zaXplPT1uPzA6MSx0aGlzfXZhciBvPXIoNDcpO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCxlKXtmb3IodmFyIHI9LTEsbj1udWxsPT10PzA6dC5sZW5ndGg7KytyPG4mJmUodFtyXSxyLHQpIT09ITE7KTtyZXR1cm4gdH10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlLHIpe3ZhciBuPXRbZV07Yy5jYWxsKHQsZSkmJmkobixyKSYmKHZvaWQgMCE9PXJ8fGUgaW4gdCl8fG8odCxlLHIpfXZhciBvPXIoNTQpLGk9cigxMyksYT1PYmplY3QucHJvdG90eXBlLGM9YS5oYXNPd25Qcm9wZXJ0eTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlLHIpe1wiX19wcm90b19fXCI9PWUmJm8/byh0LGUse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOnIsd3JpdGFibGU6ITB9KTp0W2VdPXJ9dmFyIG89cig1NSk7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDIzKSxvPWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PW4oT2JqZWN0LFwiZGVmaW5lUHJvcGVydHlcIik7cmV0dXJuIHQoe30sXCJcIix7fSksdH1jYXRjaCh0KXt9fSgpO3QuZXhwb3J0cz1vfSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0LGUpe3JldHVybiB0JiZvKGUsaShlKSx0KX12YXIgbz1yKDU3KSxpPXIoNTgpO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0LGUscixuKXt2YXIgYT0hcjtyfHwocj17fSk7Zm9yKHZhciBjPS0xLHM9ZS5sZW5ndGg7KytjPHM7KXt2YXIgdT1lW2NdLHA9bj9uKHJbdV0sdFt1XSx1LHIsdCk6dm9pZCAwO3ZvaWQgMD09PXAmJihwPXRbdV0pLGE/aShyLHUscCk6byhyLHUscCl9cmV0dXJuIHJ9dmFyIG89cig1MyksaT1yKDU0KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIGEodCk/byh0KTppKHQpfXZhciBvPXIoNTkpLGk9cig3NCksYT1yKDc4KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlKXt2YXIgcj1hKHQpLG49IXImJmkodCkscD0hciYmIW4mJmModCksaD0hciYmIW4mJiFwJiZ1KHQpLHk9cnx8bnx8cHx8aCx2PXk/byh0Lmxlbmd0aCxTdHJpbmcpOltdLGw9di5sZW5ndGg7Zm9yKHZhciB4IGluIHQpIWUmJiFmLmNhbGwodCx4KXx8eSYmKFwibGVuZ3RoXCI9PXh8fHAmJihcIm9mZnNldFwiPT14fHxcInBhcmVudFwiPT14KXx8aCYmKFwiYnVmZmVyXCI9PXh8fFwiYnl0ZUxlbmd0aFwiPT14fHxcImJ5dGVPZmZzZXRcIj09eCl8fHMoeCxsKSl8fHYucHVzaCh4KTtyZXR1cm4gdn12YXIgbz1yKDYwKSxpPXIoNjEpLGE9cig2NCksYz1yKDY1KSxzPXIoNjgpLHU9cig2OSkscD1PYmplY3QucHJvdG90eXBlLGY9cC5oYXNPd25Qcm9wZXJ0eTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQsZSl7Zm9yKHZhciByPS0xLG49QXJyYXkodCk7KytyPHQ7KW5bcl09ZShyKTtyZXR1cm4gbn10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLHIpe3ZhciBuPXIoNjIpLG89cig2MyksaT1PYmplY3QucHJvdG90eXBlLGE9aS5oYXNPd25Qcm9wZXJ0eSxjPWkucHJvcGVydHlJc0VudW1lcmFibGUscz1uKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/bjpmdW5jdGlvbih0KXtyZXR1cm4gbyh0KSYmYS5jYWxsKHQsXCJjYWxsZWVcIikmJiFjLmNhbGwodCxcImNhbGxlZVwiKX07dC5leHBvcnRzPXN9LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQpe3JldHVybiBpKHQpJiZvKHQpPT1hfXZhciBvPXIoMjYpLGk9cig2MyksYT1cIltvYmplY3QgQXJndW1lbnRzXVwiO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCl7cmV0dXJuIG51bGwhPXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fXQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUpe3ZhciByPUFycmF5LmlzQXJyYXk7dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXsoZnVuY3Rpb24odCl7dmFyIG49cigyOCksbz1yKDY3KSxpPVwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiYhZS5ub2RlVHlwZSYmZSxhPWkmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiYhdC5ub2RlVHlwZSYmdCxjPWEmJmEuZXhwb3J0cz09PWkscz1jP24uQnVmZmVyOnZvaWQgMCx1PXM/cy5pc0J1ZmZlcjp2b2lkIDAscD11fHxvO3QuZXhwb3J0cz1wfSkuY2FsbChlLHIoNjYpKHQpKX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQud2VicGFja1BvbHlmaWxsfHwodC5kZXByZWNhdGU9ZnVuY3Rpb24oKXt9LHQucGF0aHM9W10sdC5jaGlsZHJlbj1bXSx0LndlYnBhY2tQb2x5ZmlsbD0xKSx0fX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKCl7cmV0dXJuITF9dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gcih0LGUpe3JldHVybiBlPW51bGw9PWU/bjplLCEhZSYmKFwibnVtYmVyXCI9PXR5cGVvZiB0fHxvLnRlc3QodCkpJiZ0Pi0xJiZ0JTE9PTAmJnQ8ZX12YXIgbj05MDA3MTk5MjU0NzQwOTkxLG89L14oPzowfFsxLTldXFxkKikkLzt0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLHIpe3ZhciBuPXIoNzApLG89cig3MiksaT1yKDczKSxhPWkmJmkuaXNUeXBlZEFycmF5LGM9YT9vKGEpOm47dC5leHBvcnRzPWN9LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQpe3JldHVybiBhKHQpJiZpKHQubGVuZ3RoKSYmISFJW28odCldfXZhciBvPXIoMjYpLGk9cig3MSksYT1yKDYzKSxjPVwiW29iamVjdCBBcmd1bWVudHNdXCIscz1cIltvYmplY3QgQXJyYXldXCIsdT1cIltvYmplY3QgQm9vbGVhbl1cIixwPVwiW29iamVjdCBEYXRlXVwiLGY9XCJbb2JqZWN0IEVycm9yXVwiLGg9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiLHk9XCJbb2JqZWN0IE1hcF1cIix2PVwiW29iamVjdCBOdW1iZXJdXCIsbD1cIltvYmplY3QgT2JqZWN0XVwiLHg9XCJbb2JqZWN0IFJlZ0V4cF1cIixnPVwiW29iamVjdCBTZXRdXCIsZD1cIltvYmplY3QgU3RyaW5nXVwiLGI9XCJbb2JqZWN0IFdlYWtNYXBdXCIsaj1cIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsXz1cIltvYmplY3QgRGF0YVZpZXddXCIsbT1cIltvYmplY3QgRmxvYXQzMkFycmF5XVwiLHc9XCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIixNPVwiW29iamVjdCBJbnQ4QXJyYXldXCIsTz1cIltvYmplY3QgSW50MTZBcnJheV1cIixBPVwiW29iamVjdCBJbnQzMkFycmF5XVwiLFA9XCJbb2JqZWN0IFVpbnQ4QXJyYXldXCIsUz1cIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCIsVD1cIltvYmplY3QgVWludDE2QXJyYXldXCIsej1cIltvYmplY3QgVWludDMyQXJyYXldXCIsST17fTtJW21dPUlbd109SVtNXT1JW09dPUlbQV09SVtQXT1JW1NdPUlbVF09SVt6XT0hMCxJW2NdPUlbc109SVtqXT1JW3VdPUlbX109SVtwXT1JW2ZdPUlbaF09SVt5XT1JW3ZdPUlbbF09SVt4XT1JW2ddPUlbZF09SVtiXT0hMSx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0Pi0xJiZ0JTE9PTAmJnQ8PW59dmFyIG49OTAwNzE5OTI1NDc0MDk5MTt0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdChlKX19dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXsoZnVuY3Rpb24odCl7dmFyIG49cigyOSksbz1cIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmIWUubm9kZVR5cGUmJmUsaT1vJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmIXQubm9kZVR5cGUmJnQsYT1pJiZpLmV4cG9ydHM9PT1vLGM9YSYmbi5wcm9jZXNzLHM9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGMmJmMuYmluZGluZyYmYy5iaW5kaW5nKFwidXRpbFwiKX1jYXRjaCh0KXt9fSgpO3QuZXhwb3J0cz1zfSkuY2FsbChlLHIoNjYpKHQpKX0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7aWYoIW8odCkpcmV0dXJuIGkodCk7dmFyIGU9W107Zm9yKHZhciByIGluIE9iamVjdCh0KSljLmNhbGwodCxyKSYmXCJjb25zdHJ1Y3RvclwiIT1yJiZlLnB1c2gocik7cmV0dXJuIGV9dmFyIG89cig3NSksaT1yKDc2KSxhPU9iamVjdC5wcm90b3R5cGUsYz1hLmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCl7dmFyIGU9dCYmdC5jb25zdHJ1Y3RvcixyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUucHJvdG90eXBlfHxuO3JldHVybiB0PT09cn12YXIgbj1PYmplY3QucHJvdG90eXBlO3QuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUscil7dmFyIG49cig3Nyksbz1uKE9iamVjdC5rZXlzLE9iamVjdCk7dC5leHBvcnRzPW99LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gcih0LGUpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gdChlKHIpKX19dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQpe3JldHVybiBudWxsIT10JiZpKHQubGVuZ3RoKSYmIW8odCl9dmFyIG89cigyNSksaT1yKDcxKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlKXtyZXR1cm4gdCYmbyhlLGkoZSksdCl9dmFyIG89cig1NyksaT1yKDgwKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIGEodCk/byh0LCEwKTppKHQpfXZhciBvPXIoNTkpLGk9cig4MSksYT1yKDc4KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7aWYoIW8odCkpcmV0dXJuIGEodCk7dmFyIGU9aSh0KSxyPVtdO2Zvcih2YXIgbiBpbiB0KShcImNvbnN0cnVjdG9yXCIhPW58fCFlJiZzLmNhbGwodCxuKSkmJnIucHVzaChuKTtyZXR1cm4gcn12YXIgbz1yKDMyKSxpPXIoNzUpLGE9cig4MiksYz1PYmplY3QucHJvdG90eXBlLHM9Yy5oYXNPd25Qcm9wZXJ0eTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3ZhciBlPVtdO2lmKG51bGwhPXQpZm9yKHZhciByIGluIE9iamVjdCh0KSllLnB1c2gocik7cmV0dXJuIGV9dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXsoZnVuY3Rpb24odCl7ZnVuY3Rpb24gbih0LGUpe2lmKGUpcmV0dXJuIHQuc2xpY2UoKTt2YXIgcj10Lmxlbmd0aCxuPXU/dShyKTpuZXcgdC5jb25zdHJ1Y3RvcihyKTtyZXR1cm4gdC5jb3B5KG4pLG59dmFyIG89cigyOCksaT1cIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmIWUubm9kZVR5cGUmJmUsYT1pJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmIXQubm9kZVR5cGUmJnQsYz1hJiZhLmV4cG9ydHM9PT1pLHM9Yz9vLkJ1ZmZlcjp2b2lkIDAsdT1zP3MuYWxsb2NVbnNhZmU6dm9pZCAwO3QuZXhwb3J0cz1ufSkuY2FsbChlLHIoNjYpKHQpKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQsZSl7dmFyIHI9LTEsbj10Lmxlbmd0aDtmb3IoZXx8KGU9QXJyYXkobikpOysrcjxuOyllW3JdPXRbcl07cmV0dXJuIGV9dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQsZSl7cmV0dXJuIG8odCxpKHQpLGUpfXZhciBvPXIoNTcpLGk9cig4Nik7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDg3KSxvPXIoODgpLGk9T2JqZWN0LnByb3RvdHlwZSxhPWkucHJvcGVydHlJc0VudW1lcmFibGUsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLHM9Yz9mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9bXToodD1PYmplY3QodCksbihjKHQpLGZ1bmN0aW9uKGUpe3JldHVybiBhLmNhbGwodCxlKX0pKX06bzt0LmV4cG9ydHM9c30sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoLG89MCxpPVtdOysrcjxuOyl7dmFyIGE9dFtyXTtlKGEscix0KSYmKGlbbysrXT1hKX1yZXR1cm4gaX10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKCl7cmV0dXJuW119dC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQsZSl7cmV0dXJuIG8odCxpKHQpLGUpfXZhciBvPXIoNTcpLGk9cig5MCk7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDkxKSxvPXIoOTIpLGk9cig4NiksYT1yKDg4KSxjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMscz1jP2Z1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXTt0OyluKGUsaSh0KSksdD1vKHQpO3JldHVybiBlfTphO3QuZXhwb3J0cz1zfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCxlKXtmb3IodmFyIHI9LTEsbj1lLmxlbmd0aCxvPXQubGVuZ3RoOysrcjxuOyl0W28rcl09ZVtyXTtyZXR1cm4gdH10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLHIpe3ZhciBuPXIoNzcpLG89bihPYmplY3QuZ2V0UHJvdG90eXBlT2YsT2JqZWN0KTt0LmV4cG9ydHM9b30sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIG8odCxhLGkpfXZhciBvPXIoOTQpLGk9cig4NiksYT1yKDU4KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlLHIpe3ZhciBuPWUodCk7cmV0dXJuIGkodCk/bjpvKG4scih0KSl9dmFyIG89cig5MSksaT1yKDY0KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIG8odCxhLGkpfXZhciBvPXIoOTQpLGk9cig5MCksYT1yKDgwKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe3ZhciBuPXIoOTcpLG89cigyMiksaT1yKDk4KSxhPXIoOTkpLGM9cigxMDApLHM9cigyNiksdT1yKDM1KSxwPVwiW29iamVjdCBNYXBdXCIsZj1cIltvYmplY3QgT2JqZWN0XVwiLGg9XCJbb2JqZWN0IFByb21pc2VdXCIseT1cIltvYmplY3QgU2V0XVwiLHY9XCJbb2JqZWN0IFdlYWtNYXBdXCIsbD1cIltvYmplY3QgRGF0YVZpZXddXCIseD11KG4pLGc9dShvKSxkPXUoaSksYj11KGEpLGo9dShjKSxfPXM7KG4mJl8obmV3IG4obmV3IEFycmF5QnVmZmVyKDEpKSkhPWx8fG8mJl8obmV3IG8pIT1wfHxpJiZfKGkucmVzb2x2ZSgpKSE9aHx8YSYmXyhuZXcgYSkhPXl8fGMmJl8obmV3IGMpIT12KSYmKF89ZnVuY3Rpb24odCl7dmFyIGU9cyh0KSxyPWU9PWY/dC5jb25zdHJ1Y3Rvcjp2b2lkIDAsbj1yP3Uocik6XCJcIjtpZihuKXN3aXRjaChuKXtjYXNlIHg6cmV0dXJuIGw7Y2FzZSBnOnJldHVybiBwO2Nhc2UgZDpyZXR1cm4gaDtjYXNlIGI6cmV0dXJuIHk7Y2FzZSBqOnJldHVybiB2fXJldHVybiBlfSksdC5leHBvcnRzPV99LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDIzKSxvPXIoMjgpLGk9bihvLFwiRGF0YVZpZXdcIik7dC5leHBvcnRzPWl9LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDIzKSxvPXIoMjgpLGk9bihvLFwiUHJvbWlzZVwiKTt0LmV4cG9ydHM9aX0sZnVuY3Rpb24odCxlLHIpe3ZhciBuPXIoMjMpLG89cigyOCksaT1uKG8sXCJTZXRcIik7dC5leHBvcnRzPWl9LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDIzKSxvPXIoMjgpLGk9bihvLFwiV2Vha01hcFwiKTt0LmV4cG9ydHM9aX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3ZhciBlPXQubGVuZ3RoLHI9dC5jb25zdHJ1Y3RvcihlKTtyZXR1cm4gZSYmXCJzdHJpbmdcIj09dHlwZW9mIHRbMF0mJm8uY2FsbCh0LFwiaW5kZXhcIikmJihyLmluZGV4PXQuaW5kZXgsci5pbnB1dD10LmlucHV0KSxyfXZhciBuPU9iamVjdC5wcm90b3R5cGUsbz1uLmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0LGUscixuKXt2YXIgej10LmNvbnN0cnVjdG9yO3N3aXRjaChlKXtjYXNlIGI6cmV0dXJuIG8odCk7Y2FzZSBmOmNhc2UgaDpyZXR1cm4gbmV3IHooK3QpO2Nhc2UgajpyZXR1cm4gaSh0LG4pO2Nhc2UgXzpjYXNlIG06Y2FzZSB3OmNhc2UgTTpjYXNlIE86Y2FzZSBBOmNhc2UgUDpjYXNlIFM6Y2FzZSBUOnJldHVybiBwKHQsbik7Y2FzZSB5OnJldHVybiBhKHQsbixyKTtjYXNlIHY6Y2FzZSBnOnJldHVybiBuZXcgeih0KTtjYXNlIGw6cmV0dXJuIGModCk7Y2FzZSB4OnJldHVybiBzKHQsbixyKTtjYXNlIGQ6cmV0dXJuIHUodCl9fXZhciBvPXIoMTAzKSxpPXIoMTA1KSxhPXIoMTA2KSxjPXIoMTEwKSxzPXIoMTExKSx1PXIoMTE0KSxwPXIoMTE1KSxmPVwiW29iamVjdCBCb29sZWFuXVwiLGg9XCJbb2JqZWN0IERhdGVdXCIseT1cIltvYmplY3QgTWFwXVwiLHY9XCJbb2JqZWN0IE51bWJlcl1cIixsPVwiW29iamVjdCBSZWdFeHBdXCIseD1cIltvYmplY3QgU2V0XVwiLGc9XCJbb2JqZWN0IFN0cmluZ11cIixkPVwiW29iamVjdCBTeW1ib2xdXCIsYj1cIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsaj1cIltvYmplY3QgRGF0YVZpZXddXCIsXz1cIltvYmplY3QgRmxvYXQzMkFycmF5XVwiLG09XCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIix3PVwiW29iamVjdCBJbnQ4QXJyYXldXCIsTT1cIltvYmplY3QgSW50MTZBcnJheV1cIixPPVwiW29iamVjdCBJbnQzMkFycmF5XVwiLEE9XCJbb2JqZWN0IFVpbnQ4QXJyYXldXCIsUD1cIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCIsUz1cIltvYmplY3QgVWludDE2QXJyYXldXCIsVD1cIltvYmplY3QgVWludDMyQXJyYXldXCI7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXtmdW5jdGlvbiBuKHQpe3ZhciBlPW5ldyB0LmNvbnN0cnVjdG9yKHQuYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyBvKGUpLnNldChuZXcgbyh0KSksZX12YXIgbz1yKDEwNCk7dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1yKDI4KSxvPW4uVWludDhBcnJheTt0LmV4cG9ydHM9b30sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlKXt2YXIgcj1lP28odC5idWZmZXIpOnQuYnVmZmVyO3JldHVybiBuZXcgdC5jb25zdHJ1Y3RvcihyLHQuYnl0ZU9mZnNldCx0LmJ5dGVMZW5ndGgpfXZhciBvPXIoMTAzKTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlLHIpe3ZhciBuPWU/cihhKHQpLGMpOmEodCk7cmV0dXJuIGkobixvLG5ldyB0LmNvbnN0cnVjdG9yKX12YXIgbz1yKDEwNyksaT1yKDEwOCksYT1yKDEwOSksYz0xO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCxlKXtyZXR1cm4gdC5zZXQoZVswXSxlWzFdKSx0fXQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCxlLHIsbil7dmFyIG89LTEsaT1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKG4mJmkmJihyPXRbKytvXSk7KytvPGk7KXI9ZShyLHRbb10sbyx0KTtyZXR1cm4gcn10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3ZhciBlPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7clsrK2VdPVtuLHRdfSkscn10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3ZhciBlPW5ldyB0LmNvbnN0cnVjdG9yKHQuc291cmNlLG4uZXhlYyh0KSk7cmV0dXJuIGUubGFzdEluZGV4PXQubGFzdEluZGV4LGV9dmFyIG49L1xcdyokLzt0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlLHIpe3ZhciBuPWU/cihhKHQpLGMpOmEodCk7cmV0dXJuIGkobixvLG5ldyB0LmNvbnN0cnVjdG9yKX12YXIgbz1yKDExMiksaT1yKDEwOCksYT1yKDExMyksYz0xO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIHIodCxlKXtyZXR1cm4gdC5hZGQoZSksdH10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQpe3ZhciBlPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JbKytlXT10fSkscn10LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIGE/T2JqZWN0KGEuY2FsbCh0KSk6e319dmFyIG89cigyNyksaT1vP28ucHJvdG90eXBlOnZvaWQgMCxhPWk/aS52YWx1ZU9mOnZvaWQgMDt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe2Z1bmN0aW9uIG4odCxlKXt2YXIgcj1lP28odC5idWZmZXIpOnQuYnVmZmVyO3JldHVybiBuZXcgdC5jb25zdHJ1Y3RvcihyLHQuYnl0ZU9mZnNldCx0Lmxlbmd0aCl9dmFyIG89cigxMDMpO3QuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUscil7ZnVuY3Rpb24gbih0KXtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiB0LmNvbnN0cnVjdG9yfHxhKHQpP3t9Om8oaSh0KSl9dmFyIG89cigxMTcpLGk9cig5MiksYT1yKDc1KTt0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLHIpe3ZhciBuPXIoMzIpLG89T2JqZWN0LmNyZWF0ZSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gZnVuY3Rpb24oZSl7aWYoIW4oZSkpcmV0dXJue307aWYobylyZXR1cm4gbyhlKTt0LnByb3RvdHlwZT1lO3ZhciByPW5ldyB0O3JldHVybiB0LnByb3RvdHlwZT12b2lkIDAscn19KCk7dC5leHBvcnRzPWl9LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUpe2lmKCF0KXRocm93IG5ldyBFcnJvcihcIlNoYXBlczogUGxlYXNlIHByb3ZpZGUgYSBjb250ZXh0IGFyZ3VtZW50IFthcmc6OjFdXCIpO3RoaXMuY3R4PXQsdGhpcy5kb2N1bWVudD1lfHx3aW5kb3cuZG9jdW1lbnR9ci5wcm90b3R5cGUuY2lyY2xlPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjQsZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06NCxyPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXToyLG49YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOlwiIzAwMDAwMFwiO3RoaXMuY3R4LmZpbGxTdHlsZT1uLHRoaXMuY3R4LmJlZ2luUGF0aCgpLHRoaXMuY3R4LmFyYyh0LGUsciwwLDIqTWF0aC5QSSwhMSksdGhpcy5jdHguZmlsbCgpfSxyLnByb3RvdHlwZS5yZWN0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjEwLG49YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOjEwLG89YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOlwiIzAwMDAwMFwiO3RoaXMuY3R4LmZpbGxTdHlsZT1vLHRoaXMuY3R4LmZpbGxSZWN0KHQsZSxyLG4pfSxyLnByb3RvdHlwZS5wQ2lyY2xlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNpcmNsZSh0LnN0YXRlLngsdC5zdGF0ZS55LHQuc3RhdGUucmFkaXVzLHQuc3RhdGUuY29sb3IpLHR9LHIucHJvdG90eXBlLnBSZWN0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJlY3QodC5zdGF0ZS54LHQuc3RhdGUueSx0LnN0YXRlLndpZHRoLHQuc3RhdGUuaGVpZ2h0LHQuc3RhdGUuY29sb3IpLHR9LHIucHJvdG90eXBlLmRyYXdMaW5lWFk9ZnVuY3Rpb24odCxlLHIsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOlwiIzAwMDAwMFwiO3RoaXMuY3R4LmJlZ2luUGF0aCgpLHRoaXMuY3R4LnN0cm9rZVN0eWxlPW8sdGhpcy5jdHgubW92ZVRvKHQsZSksdGhpcy5jdHgubGluZVRvKHIsbiksdGhpcy5jdHguc3Ryb2tlKCl9LHIucHJvdG90eXBlLmRyYXdMaW5lVmVjPWZ1bmN0aW9uKHQsZSl7dGhpcy5kcmF3TGluZVhZKHQuZ2V0KFwieFwiKSx0LmdldChcInlcIiksZS5nZXQoXCJ4XCIpLGUuZ2V0KFwieVwiKSl9LHIucHJvdG90eXBlLmRyYXdMaW5lQXJyYXk9ZnVuY3Rpb24odCxlKXt2YXIgcj10Lngsbj10Lnk7aWYodm9pZCAwPT09cnx8dm9pZCAwPT09cil0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGJlIGdpdmVuIGEgc3RhcnQgb2YgdGhlIGxpbmVcIik7dGhpcy5jdHguYmVnaW5QYXRoKCksdGhpcy5jdHgubW92ZVRvKHIsbik7dmFyIG89ITAsaT0hMSxhPXZvaWQgMDt0cnl7Zm9yKHZhciBjLHM9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShvPShjPXMubmV4dCgpKS5kb25lKTtvPSEwKXt2YXIgdT1jLnZhbHVlLHA9dS54LGY9dS55O3RoaXMuY3R4LmxpbmVUbyhwLGYpfX1jYXRjaCh0KXtpPSEwLGE9dH1maW5hbGx5e3RyeXshbyYmcy5yZXR1cm4mJnMucmV0dXJuKCl9ZmluYWxseXtpZihpKXRocm93IGF9fXRoaXMuY3R4LnN0cm9rZSgpfSxyLnByb3RvdHlwZS5ncmlkPWZ1bmN0aW9uKHQsZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjIwLG49YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOlwiI2NjY1wiO3RoaXMuY3R4LmJlZ2luUGF0aCgpLHRoaXMuY3R4LnN0cm9rZVN0eWxlPW47Zm9yKHZhciBvPTA7bzx0O28rPXIpdGhpcy5jdHgubW92ZVRvKG8sMCksdGhpcy5jdHgubGluZVRvKG8sZSk7Zm9yKHZhciBpPTA7aTxlO2krPXIpdGhpcy5jdHgubW92ZVRvKDAsaSksdGhpcy5jdHgubGluZVRvKHQsaSk7XG50aGlzLmN0eC5zdHJva2UoKX0sdC5leHBvcnRzPXJ9XSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3BhcnRpY2xlX2xpYnJhcnkvbWFpbi5taW4uanMiXSwic291cmNlUm9vdCI6IiJ9