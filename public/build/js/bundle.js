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
	  var textNodes = utils.mapText(".list-examples li a");
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
	  var mapText = function mapText(elm) {
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
	
	  return { elmDelegator: elmDelegator, mapText: mapText, isElement: isElement };
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
				Vector.prototype.random = function randomVector() {
					var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
					var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	
					var x = utils.lerp(Math.random(), min, max);
					var y = utils.lerp(Math.random(), min, max);
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
	
				function Utils() {
					return this;
				};
	
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
				Utils.prototype.normalize = function normalize(val, min, max) {
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
				Utils.prototype.lerp = function lerp(val, min, max) {
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
				Utils.prototype.map = function map(value, srcMin, srcMax, destMin, destMax) {
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
				Utils.prototype.percent = function (val) {
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
				Utils.prototype.clamp = function (value, min, max) {
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
				Utils.prototype.randomBetween = function (x, y) {
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
				Utils.prototype.distanceXY = function (x0, y0, x1, y1) {
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
				Utils.prototype.distanceVec = function (v1, v2) {
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
				Utils.prototype.inRange = function (val, min, max) {
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
				Utils.prototype.rangeIntersect = function (min0, max0, min1, max1) {
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
				Utils.prototype.vectorIntersect = function (vec0, vec1) {
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
				Utils.prototype.collisionRect = function (r0, r1) {
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
				Utils.prototype.collisionCircle = function (c1, c2) {
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
				Utils.prototype.collisionCirclePoint = function (x, y, circle) {
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
				Utils.prototype.collisionCircleVec = function (vec, circle) {
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
				Utils.prototype.collisionRectPoint = function (x, y, rect) {
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
				Utils.prototype.collisionRectVec = function (vec, rect) {
					return this.collisionRectPoint(vec.get("x"), vec.get("y"), rect);
				};
	
				/**
	    * @name setLength
	    * @description - Setting the length of a vector.
	    * @param   {number} length
	    * @param   {number} x
	    * @param   {number} y
	    * @return  {number[]} Coordinates
	    */
				Utils.prototype.setLength = function (length, x, y) {
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
	    * @description - Setting the angle of a vector.
	    * @param   {number} angle
	    * @param   {number} x
	    * @param   {number} y
	    * @return  {number[]} coordinates
	    */
				Utils.prototype.setAngle = function (angle, x, y) {
					if (typeof x !== "number" || typeof y !== "number" || typeof angle !== "number") {
						throw new Error("Please provide valid x and y values");
					}
	
					var length = Math.hypot(x, y);
					x = Math.cos(angle) * length;
					y = Math.sin(angle) * length;
	
					return [x, y];
				};
	
				module.exports = new Utils();
	
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
					radius: 0,
					mass: 1,
					direction: Math.PI * 2,
					friction: 1,
					springs: []
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
	
					// Apple springs
					this.handleSprings();
	
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
	    * @param {[type]} angle [description]
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
	
					return Math.atan2(x, y);
				};
	
				/**
	    * @name addSpring
	    * @description add spring to springs array
	    * @memberOf Particle
	    * @param {Vector} point
	    * @param {Number} k
	    * @param {Number} offset
	    */
				Particle.prototype.addSpring = function addSpring(spring) {
					this.removeSpring(spring);
					this.state.springs.push(spring);
				};
	
				/**
	    * @name removeSpring
	    * @description remove a specific string from the springs array
	    * @memberOf Particle
	    * @param  {Vector} point
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
	    * @param  {Vector}     point
	    * @param  {Number}     spring The spring coeffiecent the higher
	    *                             the value the more springy it gets.
	    * @param  {Integer}    offset Offset from the spring
	    *
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
	    * @return {Void}
	    */
				Shapes.prototype.drawLineXY = function (x0, y0, x1, y1) {
					this.ctx.beginPath();
					this.ctx.moveTo(x0, y0);
					this.ctx.lineTo(x1, y1);
					this.ctx.stroke();
					return void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQxMzhiZmY0N2NjNzg2MDUzZTQiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL2lmcmFtZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9kb21faGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvc2hpbXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrOi93ZWJwYWNrL2Jvb3RzdHJhcCA2NzI2YzdmMDFiNDVjNjc1MGM1NiIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2NvcHlBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29weVN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lTWFwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19hZGRNYXBFbnRyeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVNldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYWRkU2V0RW50cnkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvbGliL3NoYXBlcy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbImlmcmFtZSIsInJlcXVpcmUiLCJkb2N1bWVudCIsInNoaW1zIiwidXRpbHMiLCJwYXJ0aWNsZUxpYiIsIkRFRkFVTFRfRVhBTVBMRSIsInNldGhhc2giLCJmcmFnbWVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRobmFtZSIsInRleHROb2RlcyIsIm1hcFRleHQiLCIkIiwibGVuZ3RoIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZWxtRGVsZWdhdG9yIiwiY2hlY2siLCJlbG0iLCJ0YWdOYW1lIiwiZXJyIiwidGFyZ2V0IiwiZXZ0IiwidGV4dCIsImxvYWRJbklmcmFtZSIsImhhc2hRdWVyeSIsInN1YnN0ciIsImluZGV4T2YiLCJGSVJTVF9JRlJBTUUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaWZyYW1lSGFuZGxlciIsImRvbUhlbHBlciIsIiQkIiwiZmlyc3RTdGF0ZSIsImZldGNoRXhhbXBsZSIsImlkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0eHQiLCJjYXRjaCIsImVycm9yIiwid3JpdGVGcmFtZSIsInBhcmVudCIsImZyYW1lIiwiaXNFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnZXRGcmFtZSIsIm5hbWUiLCJpbmplY3RTcmMiLCJzcmMiLCJzcmNkb2MiLCJjcmVhdGVGcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVGcmFtZVNyYyIsInNyY0RvYyIsImV4YW1wbGVFeGlzdHMiLCJleGFtcGxlIiwiYXR0cmlidXRlcyIsIm5vZGVWYWx1ZSIsImUiLCJleGlzdGluZ0ZyYW1lIiwiZmlyc3RGcmFtZSIsInBhcmVudERpdiIsIm5ld0ZyYW1lIiwiaXNFbG0iLCJvYmoiLCJIVE1MRWxlbWVudCIsImVsbUxpc3QiLCJpdGVtIiwicHVzaCIsImV2ZW50IiwiY2hlY2tUYXJnZXQiLCJjYWxsYmFjayIsInByZXZlbnREZWZhdWx0IiwicXMiLCJzZWxlY3RvciIsImJhc2VOb2RlIiwicXVlcnlTZWxlY3RvciIsInFzQWxsIiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVAsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQWtDLG9CQUFvQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBd0MsNEJBQTRCO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZELFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVCwrRUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1B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QUFTLE1BQU0sTUFDNUM7VUFBSyxXQUFXLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssSUFDbEU7WUFBTyxLQUNSO0FBRUQ7O1dBQU8sVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUN0R2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE0MTM4YmZmNDdjYzc4NjA1M2U0IiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMudXJsID0gaW5wdXRcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgnXFxyXFxuJykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGlmcmFtZSA9IHJlcXVpcmUoXCJpZnJhbWVNYW5hZ2VyLmpzXCIpKGRvY3VtZW50KTtcbmNvbnN0IHNoaW1zID0gcmVxdWlyZShcInNoaW1zLmpzXCIpKGRvY3VtZW50KTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcImRvbV9oZWxwZXIuanNcIikoZG9jdW1lbnQpO1xuY29uc3QgcGFydGljbGVMaWIgPSByZXF1aXJlKFwiLi92ZW5kb3IvcGFydGljbGVfbGliLmpzXCIpO1xuY29uc3QgREVGQVVMVF9FWEFNUExFID0gXCJyYW5kb21fdmVjdG9yc1wiO1xuXG5jb25zdCBzZXRoYXNoID0gKGZyYWdtZW50KSA9PiB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGZyYWdtZW50IHx8IFwiXCI7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgd2luZG93LnBhcnRpY2xlTGliID0gcGFydGljbGVMaWI7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgY29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGNvbnN0IHRleHROb2RlcyA9IHV0aWxzLm1hcFRleHQoXCIubGlzdC1leGFtcGxlcyBsaSBhXCIpO1xuICBjb25zdCAkID0gc2hpbXMuJDtcblxuICBpZiAodGV4dE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlcyBubyB0ZXh0Tm9kZXMgdG8gY2hlY2sgYWdhaW5zdC5cIik7XG4gIH1cblxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gIGNhc2UoXCIvXCIpOiB7XG4gICAgY29uc29sZS5sb2coXCJob21lXCIpO1xuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvZXhhbXBsZXNcIik6IHtcbiAgICB1dGlscy5lbG1EZWxlZ2F0b3IoJChcIi5saXN0LWV4YW1wbGVzXCIpLCBcImNsaWNrXCIsIGZ1bmN0aW9uIGNoZWNrKGVsbSkge1xuICAgICAgcmV0dXJuIGVsbS50YWdOYW1lID09PSBcIkFcIjtcbiAgICB9LCBmdW5jdGlvbihlcnIsIHRhcmdldCwgZXZ0KSB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgIHNldGhhc2godGFyZ2V0LnRleHQpO1xuICAgICAgaWZyYW1lLmxvYWRJbklmcmFtZSh0YXJnZXQudGV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGVyZXMgYSBwYWdlIGZyYWdtZW50IGxvYWQgdGhlIHJpZ2h0IGV4YW1wbGUuXG4gICAgaWYgKGhhc2gubGVuZ3RoKSB7XG4gICAgICBjb25zdCBoYXNoUXVlcnkgPSBoYXNoLnN1YnN0cigxKTtcblxuICAgICAgaWYgKHRleHROb2Rlcy5pbmRleE9mKGhhc2hRdWVyeSkgPiAtMSkge1xuICAgICAgICBpZnJhbWUubG9hZEluSWZyYW1lKGhhc2hRdWVyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAvLyBEZWZhdWx0IHRvIHRoZSBhbiBleGFtcGxlIGlmIHRoZXJlcyBubyBoYXNoLlxuICAgIGlmIChoYXNoLmxlbmd0aCA8IDEpIHtcbiAgICAgIHNldGhhc2goREVGQVVMVF9FWEFNUExFKTtcbiAgICAgIGlmcmFtZS5sb2FkSW5JZnJhbWUoREVGQVVMVF9FWEFNUExFKTtcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cbiAgY2FzZShcIi9kb2NzXCIpOiB7XG4gICAgY29uc29sZS5sb2coXCJkb2NzXCIpO1xuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvbWF0aHNcIik6IHtcbiAgICBjb25zb2xlLmxvZyhcIm1hdGhzXCIpO1xuICAgIGJyZWFrO1xuICB9XG4gIGRlZmF1bHQ6IHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIHJvdXRlIG1hdGNoZWQgNDA0IDooXCIpO1xuICB9XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsIiAgY29uc3QgRklSU1RfSUZSQU1FID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpZnJhbWVIYW5kbGVyKGRvY3VtZW50KSB7XG4gIGRvY3VtZW50ID0gZG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudDtcblxuICBjb25zdCBkb21IZWxwZXIgPSByZXF1aXJlKFwiLi9kb21faGVscGVyXCIpKGRvY3VtZW50KTtcbiAgY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwiLi9zaGltc1wiKShkb2N1bWVudCk7XG5cbiAgY29uc3QgJCA9IHNoaW1zLiQ7XG4gIGNvbnN0ICQkID0gc2hpbXMuJCQ7XG4gIFxuICBsZXQgZmlyc3RTdGF0ZSA9IEZJUlNUX0lGUkFNRTtcblxuICAvKipcbiAgICogW2ZldGNoRXhhbXBsZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBpZCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgZmV0Y2hFeGFtcGxlID0gZnVuY3Rpb24gZmV0Y2hFeGFtcGxlKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiL2V4YW1wbGVzL1wiICsgaWQpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbihmdW5jdGlvbih0eHQpIHtcbiAgICAgICAgcmV0dXJuIHR4dDtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cblxuICAvKipcbiAgICogW3dyaXRlRnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gcGFyZW50IFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBmcmFtZSAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCB3cml0ZUZyYW1lID0gZnVuY3Rpb24gd3JpdGVGcmFtZShwYXJlbnQsIGZyYW1lKSB7XG4gICAgaWYgKCFkb21IZWxwZXIuaXNFbGVtZW50KHBhcmVudCkgfHwgIWRvbUhlbHBlci5pc0VsZW1lbnQoZnJhbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocGFyZW50ICsgXCIgdGhpcyBwYXJlbnQgaXNuJ3QgYSBET00gZWxlbWVudC5cIik7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbZ2V0RnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBnZXRGcmFtZSA9IGZ1bmN0aW9uIGdldEZyYW1lKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiAkKFwiaWZyYW1lW2RhdGEtZXhhbXBsZV1cIik7XG4gICAgcmV0dXJuICQoXCJpZnJhbWVbZGF0YS1leGFtcGxlXj1cIiArIG5hbWUgKyBcIl1cIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtpbmplY3RTcmMgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gc3JjICAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGZyYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBpbmplY3RTcmMgPSBmdW5jdGlvbiBpbmplY3RTcmMoc3JjLCBmcmFtZSkge1xuICAgIGZyYW1lLnNyY2RvYyA9IHNyYztcbiAgICByZXR1cm4gZnJhbWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtjcmVhdGVGcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBuYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGNyZWF0ZUZyYW1lID0gZnVuY3Rpb24gY3JlYXRlRnJhbWUobmFtZSkge1xuICAgIGlmICghbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyBcIiBOb3QgYSB2YWxpZCBuYW1lIGZvciBhIGlkLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93LXNhbWUtb3JpZ2luXCIsIHRydWUpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvdy1zY3JpcHRzXCIsIHRydWUpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgdHJ1ZSk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJhbWVfZXhhbXBsZVwiKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1leGFtcGxlXCIsIG5hbWUpO1xuXG4gICAgcmV0dXJuIGlmcmFtZTtcbiAgfTtcblxuICAvKipcbiAgICogW3JlbW92ZUZyYW1lU3JjIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHRhcmdldCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IHJlbW92ZUZyYW1lU3JjID0gZnVuY3Rpb24gcmVtb3ZlRnJhbWVTcmModGFyZ2V0KSB7XG4gICAgaWYgKCF0YXJnZXQpIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgdGFyZ2V0XCIpO1xuXG4gICAgaWYgKCFkb21IZWxwZXIuaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBnZXRGcmFtZSh0YXJnZXQpLnNyY0RvYyA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQuc3JjRG9jID0gXCJcIjtcbiAgfTtcblxuICAvKipcbiAgICogW2V4YW1wbGVFeGlzdHMgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZXhhbXBsZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBleGFtcGxlRXhpc3RzID0gZnVuY3Rpb24gZXhhbXBsZUV4aXN0cyhleGFtcGxlKSB7XG4gICAgaWYgKCFleGFtcGxlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgaWQ7XG5cbiAgICB0cnkge1xuICAgICAgaWQgPSBnZXRGcmFtZShleGFtcGxlKVxuICAgICAgICAuYXR0cmlidXRlc1tcImRhdGEtZXhhbXBsZVwiXVxuICAgICAgICAubm9kZVZhbHVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHJldHVybiBpZCA9PT0gZXhhbXBsZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtsb2FkSW5JZnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBsb2FkSW5JZnJhbWUgPSBmdW5jdGlvbiBsb2FkSW5JZnJhbWUoaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWQgaW4gaUZyYW1lXCIpO1xuICAgIC8vIElmIHRoZSBleGFtcGxlIGFscmVhZHkgZXhzaXN0cyBkb250IGRvIGFueXRoaW5nLlxuICAgIGlmICghZXhhbXBsZUV4aXN0cyhpZCkpIHtcbiAgICAgIC8vIElmIHdlIGFyZSBub3QgdGhlIGZpcnN0IGZyYW1lIGluIHRoZSBkb2N1bWVudC5cbiAgICAgIGlmICghZmlyc3RTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV4YW1wbGUgZG9lc24ndCBleHNpc3QgYnV0IHdlIGFyZSB0aGUgbmV4dCBpZnJhbWUuXCIpO1xuICAgICAgICAvLyBUb2dnbGUgdGhlIHN0YXRlIGFuZCByZW1vdmUgb2xkIHNyYyBhbmQgaW5qZWN0IG5ldyBzcmMuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRnJhbWUgPSBnZXRGcmFtZSgpO1xuICAgICAgICByZW1vdmVGcmFtZVNyYyhleGlzdGluZ0ZyYW1lKTtcbiAgICAgICAgZXhpc3RpbmdGcmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWV4YW1wbGVcIiwgaWQpO1xuICAgICAgICByZXR1cm4gZmV0Y2hFeGFtcGxlKGlkKVxuICAgICAgICAgIC50aGVuKChzcmMpID0+IGluamVjdFNyYyhzcmMsIGV4aXN0aW5nRnJhbWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcIkV4YW1wbGUgZG9lc24ndCBleHNpc3QgYnV0IHdlIGFyZSB0aGUgZmlyc3QgaWZyYW1lIGV2ZXIuXCIpO1xuXG4gICAgICAvLyBUb2dnbGUgdGhlIHN0YXRlLlxuICAgICAgZmlyc3RTdGF0ZSA9ICFmaXJzdFN0YXRlO1xuICAgICAgLy8gQ3JlYXRlIHRoZSBmcmFtZVxuICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGNyZWF0ZUZyYW1lKGlkKTtcbiAgICAgIGNvbnN0IHBhcmVudERpdiA9ICQoXCIud3JhcHBlcl9fZnJhbWVcIik7XG4gICAgICAvLyBJZiB3ZSBhcmUgbm90IHRoZSBmaXJzdCBmcmFtZSBvZiB0aGUgZG9jdW1lbnQgZG8gdGhpcyByZWd1bGFyIHN0dWZmLlxuICAgICAgcmV0dXJuIGZldGNoRXhhbXBsZShpZClcbiAgICAgICAgLnRoZW4oKHNyYykgPT4gaW5qZWN0U3JjKHNyYywgZmlyc3RGcmFtZSkpXG4gICAgICAgIC50aGVuKChuZXdGcmFtZSkgPT4gd3JpdGVGcmFtZShwYXJlbnREaXYsIG5ld0ZyYW1lKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJFeGFtcGxlIGFscmVhZHkgZXhzaXN0cyBkb250IGRvIGFueXRoaW5nLi5cIik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZUZyYW1lU3JjLFxuICAgIHdyaXRlRnJhbWUsXG4gICAgZ2V0RnJhbWUsXG4gICAgaW5qZWN0U3JjLFxuICAgIGNyZWF0ZUZyYW1lLFxuICAgIGxvYWRJbklmcmFtZSxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL2lmcmFtZU1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IHRoaXMuZG9jdW1lbnQ7XG5cbiAgY29uc3Qgc2hpbXMgPSByZXF1aXJlKFwic2hpbXNcIikoZG9jdW1lbnQpO1xuICBjb25zdCAkJCA9IHNoaW1zLiQkO1xuXG4gIC8qKlxuICAgKiBpc0VsZW1lbnQgY2hlY2tzIGlmIGEgZWxlbWVudCBpcyBhIERPTSBub2RlLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzRWxlbWVudCA9IGZ1bmN0aW9uIGlzRWxtKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogbWFwVGV4dCB0YWtlcyBhbiBlbG1lbnQgbGlzdCBhbmQgcmV0dXJuIGEgYXJyYXkgb2YgdGV4dE5vZGVzLlxuICAgKiBAcGFyYW0gIHtET01FbGVtZW10fSBlbG0gICBET01FbGVtZW10XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgIEFycmF5XG4gICAqL1xuICBjb25zdCBtYXBUZXh0ID0gZnVuY3Rpb24gbWFwVGV4dChlbG0pIHtcbiAgICBjb25zdCBlbG1MaXN0ID0gJCQoZWxtLCBkb2N1bWVudCk7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gW107XG5cbiAgICAvKlxuICAgICAgV2UgbmVlZCB0byB1c2UgYSBmb3IgYG9mYCBsb29wIGhlcmUgY2F1c2UgaXRzIGEgTm9kZUxpc3QgYW5kIG5vdCBhblxuICAgICAgYXJyYXkuXG4gICAgKi9cbiAgICBmb3IgKGxldCBpdGVtIG9mIGVsbUxpc3QpIHtcbiAgICAgIHRleHROb2Rlcy5wdXNoKGl0ZW0udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHROb2RlcztcbiAgfTtcblxuICAvKipcbiAgICogZWxtRGVsZWdhdG9yIGRlbGVnYXRlIGl0ZW1zXG4gICAqIEBwYXJhbSAge0RPTUVsZW1lbnR9IGVsbSAgICAgICAgIFRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgZGVsZWdhdGVzLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICBjaGVja1RhcmdldCBCb29sZWFuIHRvIGNoZWNrIHdoaWNoIGVsZW1lbnRzIHRvIGRlbGVnYXRlIHRvLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICBjYWxsYmFjayAgICBBIGNhbGxiYWNrIHRoYXQgaXMgcGFzc2VkIGEgZXJyb3IgYXMgaXRzIGZpcnN0XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VnbWV0IGFuZCBzZWNvbmQgYXJndW1lbnQgYXMgdGhlIGRlbGVnYXRlLlxuICAgKi9cbiAgY29uc3QgZWxtRGVsZWdhdG9yID0gZnVuY3Rpb24gZWxtRGVsZWdhdG9yKGVsbSwgZXZlbnQsIGNoZWNrVGFyZ2V0LCBjYWxsYmFjaykge1xuICAgIGlmICghaXNFbGVtZW50KGVsbSkpIHRocm93IG5ldyBFcnJvcihlbG0gKyBcIiBuZWVkcyB0byBiZSBhIGVsZW1lbnQuXCIpO1xuICAgIGlmIChlbG0ubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoZWxtICsgXCIgbmVlZHMgdG8gYmUgZWxlbWVudCBsaXN0XCIpO1xuXG4gICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGNoZWNrVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgZS50YXJnZXQsIGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKFwiTm8gdGFyZ2V0IG1hdGNoZWRcIikpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7ZWxtRGVsZWdhdG9yLCBtYXBUZXh0LCBpc0VsZW1lbnR9O1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9kb21faGVscGVyLmpzIiwiLyogc2hpbXMgKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbXMoZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50O1xuXG4gIGNvbnN0ICQgPSBmdW5jdGlvbiBxcyhzZWxlY3RvciwgYmFzZU5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciwgYmFzZU5vZGUpO1xuICB9O1xuXG4gIGNvbnN0ICQkID0gZnVuY3Rpb24gcXNBbGwoc2VsZWN0b3IsIGJhc2VOb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IsIGJhc2VOb2RlKTtcbiAgfTtcblxuICByZXR1cm4geyQsICQkfTtcbn07XG4vKiBzaGltcyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9zaGltcy5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBhcnRpY2xlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBhcnRpY2xlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY3MjZjN2YwMWI0NWM2NzUwYzU2XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDY3MjZjN2YwMWI0NWM2NzUwYzU2IiwiY29uc3QgVmVjdG9yID0gcmVxdWlyZShcIi4vbGliL3ZlY3RvcnNcIik7XG5jb25zdCBQYXJ0aWNsZSA9IHJlcXVpcmUoXCIuL2xpYi9wYXJ0aWNsZVwiKTtcbmNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vbGliL3V0aWxzXCIpO1xuY29uc3QgU2hhcGVzID0gcmVxdWlyZShcIi4vbGliL3NoYXBlc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZlY3RvcixcbiAgUGFydGljbGUsXG4gIFV0aWxzLFxuICBTaGFwZXMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbWFpbi5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5cbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHg6IDAsXG4gIHk6IDEsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBWZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFZlY3RvcihzdGF0ZT1JTklUSUFMX1NUQVRFKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIC0gRWFzeSB3YXkgdG8gaW5zdGFudGlhdGUgYSB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHtJbnR9IHhcbiAqIEBwYXJhbSAge0ludH0geVxuICogQHJldHVybiB7VmVjdG9yfSAgIEEgb2JqZWN0IGluaGVyaXRpbmcgZnJvbSBWZWN0b3IuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHg9MCwgeT0wKSB7XG4gIGNvbnN0IHZlYyA9IG5ldyBWZWN0b3Ioe3gsIHl9KTtcbiAgcmV0dXJuIHZlYztcbn07XG5cbi8qKlxuICogU2V0IC0gQSBzZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHsqfSBwcm9wXG4gKiBAcGFyYW0gIHsqfSB2YWxcbiAqIEByZXR1cm4ge0Jvb2xlYW59IElzIHRoZSBwcm9wIHlvdXIgcGFzc2luZyBpbiBleHNpc3QuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3AsIHZhbCkge1xuICAvLyBUT0RPOiBBZGQgY2hlY2sgdmFsIGlzIG51bWJlclxuICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICB0aGlzLnN0YXRlW3Byb3BdID0gdmFsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBnZXQgLSBBIGdldHRlciBmb3IgdGhlIHZlY3RvciBjbGFzcy5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcCAgVGhlIHByb3AgdG8gc2V0IG9uIHN0YXRlLlxuICogQHJldHVybiB7VmFsdWV9ICAgICAgICBUaGUgdmFsdWUgYXNzb3NpYXRlZCB3aXRoIHRoZSBwcm9wLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChwcm9wKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlW3Byb3BdO1xufTtcblxuLyoqXG4gKiBzZXRBbmdsZSAtIFBsb3QgdGhlIGNvcnJkaW5hdGVzIGJhc2VkIG9uIHJhZGlhbnMgZ2l2ZW4uXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1JhZGlhbnN9IHJhZCBBIGZsb2F0aW5nIHBvaW50IG51bWJlci5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXRBbmdsZSA9IGZ1bmN0aW9uIHNldEFuZ2xlKHJhZCkge1xuICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gIHRoaXMuc2V0KFwieVwiLCBNYXRoLnNpbihyYWQpICogbGVuZ3RoKTtcbn07XG5cbi8qKlxuICogc2V0TGVuZ3RoIC0gVGFrZXMgYSBsZW5ndGggYW5kIHNldHMgY29vcmRpbmF0ZS5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7SW50ZWdlcn0gbGVuZ3RoXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc2V0TGVuZ3RoID0gZnVuY3Rpb24gc2V0TGVuZ3RoKGxlbmd0aCkge1xuICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgY29uc3QgcmFkID0gdGhpcy5nZXRBbmdsZSgpO1xuXG4gIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xufTtcblxuLyoqXG4gKiBnZXRMZW5ndGggLSBHZXRzIGxlbmd0aCBvZiB0aGUgY29vcmRpbmF0ZXMgZnJvbSBjZW50ZXIgcGxhbmUuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSAtIENvb3JpZGluYXRlcy5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gIGNvbnN0IHggPSB0aGlzLmdldChcInhcIik7XG4gIGNvbnN0IHkgPSB0aGlzLmdldChcInlcIik7XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHkpO1xufTtcblxuLyoqXG4gKiBnZXRBbmdsZSAtIEdldCB0aGUgYW5nbGUgb2YgY29vcmRpbmF0ZXMgZnJvbSBjZW50ZXIgcGxhbmUuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSAtIENvb3JpZGluYXRlcy5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5nZXRBbmdsZSA9IGZ1bmN0aW9uIGdldEFuZ2xlKCkge1xuICBjb25zdCB4ID0gdGhpcy5nZXQoXCJ4XCIpO1xuICBjb25zdCB5ID0gdGhpcy5nZXQoXCJ5XCIpO1xuICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbn07XG5cbi8qKlxuICogYWRkIC0gU2hvdWxkIGFkZCB2ZWN0b3JzIHRvZ2V0aGVyIGdpdmVuIGEgdmVjdG9yXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAbmFtZSBhZGRcbiAqIEBhbGlhcyBbXCIrXCJdXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gLSBBIGdpdmVuIHZlY3RvciB0byBhZGQuXG4gKiBAcmV0dXJuIHtWZWN0b3J9IC0gQSB2ZWN0b3Igd2l0aCBjb29yaWRuYXRlcywgb3IgbXVsdGlwbGUgdmVjdG9ycy5cbiAqL1xuXG5WZWN0b3IucHJvdG90eXBlLmFkZCA9IFZlY3Rvci5wcm90b3R5cGVbXCIrXCJdID0gZnVuY3Rpb24gYWRkKHYyKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIGlmICh2Mi5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5XCIgJiYgdjIubGVuZ3RoKSB7XG4gICAgLy8gUmVmYWN0b3IgdG8gbWFrZSBtb3JlIGVmZmVjaWVudCAvL1xuICAgIGNvbnN0IHZlY3MgPSB2MlxuICAgICAgLm1hcCgodikgPT4gKHt4OiB2LmdldChcInhcIiksIHk6IHYuZ2V0KFwieVwiKX0pKVxuICAgICAgLnJlZHVjZSgodjAsIHZuKSA9PiAoe3g6IHYwLnggKyB2bi54LCB5OiB2MC55ICsgdm4ueX0pLCBzZWxmLnN0YXRlKTtcblxuICAgIHJldHVybiBzZWxmLmNyZWF0ZSh2ZWNzLngsIHZlY3MueSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgc2VsZi5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKSxcbiAgICBzZWxmLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIHN1YnRyYWN0IC0gc2hvdWxkIHN1YnRyYWN0IHRoZSBnaXZlbiB2ZWN0b3Igd2l0aCBpdHMgb3duIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBleGFtcGxlIHt4OiAyLCB5OiAyfSAtIHt4OiAyLCB5OiAyfSA9IHt4OiAwLCB5OiAwfVxuICogQG5hbWUgc3VidHJhY3RcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3QgPSBWZWN0b3IucHJvdG90eXBlW1wiLVwiXSA9IGZ1bmN0aW9uIHN1YnRyYWN0KHYyKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIGlmICh2Mi5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5XCIgJiYgdjIubGVuZ3RoKSB7XG4gICAgLy8gUmVmYWN0b3IgdG8gbWFrZSBtb3JlIGVmZmVjaWVudCAvL1xuICAgIGNvbnN0IHZlY3MgPSB2Mi5tYXAoKHYpID0+ICh7eDogdi5nZXQoXCJ4XCIpLCB5OiB2LmdldChcInlcIil9KSlcbiAgICAucmVkdWNlKCh2MCwgdm4pID0+XG4gICAgICAoe3g6IHYwLnggLSB2bi54LCB5OiB2MC55IC0gdm4ueX0pLFxuICAgIHNlbGYuc3RhdGUpO1xuXG4gICAgcmV0dXJuIHNlbGYuY3JlYXRlKHZlY3MueCwgdmVjcy55KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICBzZWxmLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpLFxuICAgIHNlbGYuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIilcbiAgKTtcbn07XG5cbi8qKlxuICogTXVsaXRwbHlpbmcgdmVjdG9ycyB0b2dldGhlclxuICogQG1lbWJlck9mIFZlY3RvclxuICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9ICoge3g6IDIsIHk6IDJ9ID0ge3g6IDQsIHk6IDR9XG4gKiBAbmFtZSBtdWx0aXBseVxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSAgICBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseSA9IFZlY3Rvci5wcm90b3R5cGVbXCIqXCJdID0gZnVuY3Rpb24gbXVsdGlwbHkodjIpIHtcbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgIHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIiksXG4gICAgdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKVxuICApO1xufTtcblxuLyoqXG4gKiBEaXZpZGUgdmVjdG9ycyB0b2dldGhlci5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBuYW1lIERpdmlkZVxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSAgICBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5kaXZpZGUgPSBWZWN0b3IucHJvdG90eXBlW1wiL1wiXSA9IGZ1bmN0aW9uIGRpdmlkZSh2Mikge1xuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKSxcbiAgICB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIEFkZHMgdG8gY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuYWRkVG8gPSBWZWN0b3IucHJvdG90eXBlW1wiKz1cIl0gPSBmdW5jdGlvbiBhZGRUbyh2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgKyB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogU3VidHJhY3RzIGZyb20gY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3RGcm9tID0gVmVjdG9yLnByb3RvdHlwZVtcIi09XCJdID0gZnVuY3Rpb24gc3VidHJhY3RGcm9tKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAtIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBtdWxpdHBsaWVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnkgPSBWZWN0b3IucHJvdG90eXBlW1wiKj1cIl0gPSBmdW5jdGlvbiBtdWx0aXBseUJ5KHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBEaXZpZGVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5ID0gVmVjdG9yLnByb3RvdHlwZVtcIi89XCJdID0gZnVuY3Rpb24gZGl2aWRlQnkodjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpIC8gdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIHJhbmRvbSBnZW5lcmF0ZSBhIHZlY3RvciB3aXRoIHJhbmRvbSBzdGF0ZXMuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gbWluIC0gQSBtaW4gcmFuZ2Ugb24gdGhlIHJhbmRvbSB2ZWN0b3Igc3RhdGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IC0gQSBtYXggcmFuZ2Ugb24gdGhlIHJhbmRvbSB2ZWN0b3Igc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9XG4gKi9cblZlY3Rvci5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tVmVjdG9yKG1pbj0xLCBtYXg9MTApIHtcbiAgY29uc3QgeCA9IHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpO1xuICBjb25zdCB5ID0gdXRpbHMubGVycChNYXRoLnJhbmRvbSgpLCBtaW4sIG1heCk7XG4gIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi92ZWN0b3JzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi92ZWN0b3JzLmpzIiwiLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyBjb21wb3NlZCBvZiBzbWFsbCBmdW5jdGlvbiB0aGF0XG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIG5lZWRlZC4gTW9zdCBmdW5jdGlvbnMgYXJlIHB1cmVcbiAqIGFuZCBvbmx5IHJldHVybiB2YWx1ZXMuIEZvciBtb3JlIGluZm8gcmVhZCB0aGUgZG9jcy5cbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBVdGlsc1xuICogQHJldHVybiB7VXRpbHN9XG4gKi9cbmZ1bmN0aW9uIFV0aWxzKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogbm9ybWFsaXplIC0gVGFrZXMgYSBtYXggYW5kIG1pbiB2YWx1ZSBhbmQgcmV0dXJuc1xuICogYSBmbG9hdGluZyBwb2ludCBudW1iZXIsIHRoYXQgd2hlbiBtdWx0aXBsaWVkXG4gKiBieSBvbmUgaHVuZHJlZCByZXByZXNlbnRzIGEgcHJlY2VudGFnZSBvZiB0aGUgcmFuZ2VcbiAqIGJldHdlZW4gbWF4IGFuZCBtaW4uXG4gKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtJbnR9IHZhbCAtIFRoZSB2YWx1ZSB0aGF0IGxpZXMgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7SW50fSBtaW4gLSBUaGUgbWF4aXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAqIEBwYXJhbSAge0ludH0gbWF4IC0gVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICogQHJldHVybiB7SW50fSBJbnQgLSBUaGUgdmFsdWUgcmVwcmVzZW50ZWQgaW4gdGhhdCByYW5nZS5cbiAqL1xuVXRpbHMucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsIC0gbWluKSAvIChtYXggLSBtaW4pO1xufTtcblxuLyoqXG4gKiBsZXJwIC0gbGluZWFyIGludGVycG9sYXRpb24gdGFrZXMgYSByYW5nZSBhbmQgYSBnaXZlbiBub3JtYWxpemVkIHZhbHVlXG4gKiBhbmQgcmV0dXJucyBhIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGF0IG5vcm1hbGl6ZWQgdmFsdWUgaW4gdGhhdCByYW5nZS5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50ZXJnZXJ9IHZhbFxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1pblxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1heFxuICogQHJldHVybiB7SW50ZXJnZXJ9XG4gKi9cblV0aWxzLnByb3RvdHlwZS5sZXJwID0gZnVuY3Rpb24gbGVycCh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIHZhbCArIG1pbjtcbn07XG5cbi8qKlxuICogbWFwIC0gR2l2ZW4gMiBzZXQgb2YgdmFsdWVzIG1hcCB0aGVtIHRvIGFub3RoZXIgc2V0LlxuICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNaW5cbiAqIEBwYXJhbSAge251bWJlcn0gc3JjTWF4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRlc3RNaW5cbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gbWFwKHZhbHVlLCBzcmNNaW4sIHNyY01heCwgZGVzdE1pbiwgZGVzdE1heCkge1xuICBzcmNNYXggPSBNYXRoLm1heChzcmNNYXgsIHNyY01pbik7XG4gIHNyY01pbiA9IE1hdGgubWluKHNyY01heCwgc3JjTWluKTtcbiAgZGVzdE1pbiA9IE1hdGgubWluKGRlc3RNaW4sIGRlc3RNYXgpO1xuICBkZXN0TWF4ID0gTWF0aC5tYXgoZGVzdE1pbiwgZGVzdE1heCk7XG4gIHJldHVybiB0aGlzLmxlcnAodGhpcy5ub3JtYWxpemUodmFsdWUsIHNyY01pbiwgc3JjTWF4KSwgZGVzdE1pbiwgZGVzdE1heCk7XG59O1xuXG4vKipcbiAqIEBuYW1lICBwcmVjZW50XG4gKiBAZGVzY3JpcHRpb24gVGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHByZWNlbnRhZ2UuXG4gKiAgICAgICAgICAgICAgeW91IGNhbiBwYXNzIGFyYml0cmFyeSBsYXJnZSBudW1iZXJzIGluIGJ1dCB0aGF0cyBub3RcbiAqICAgICAgICAgICAgICB0aGUgaW50ZW5kZWQgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7RmxvYXR9IHZhbCBcdEEgdmFsdWUuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEByZXR1cm4ge1BlcmNlbnR9ICAgIEEgdmFsdWUuXG4gKi9cblV0aWxzLnByb3RvdHlwZS5wZXJjZW50ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB2YWwgKiAxMDA7XG59O1xuXG4vKipcbiAqIEBuYW1lICBjbGFtcFxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgbnVtYmVyIGFuZCBhIHJhbmdlIHJldHVybiB0aGVcbiAqICAgICAgICAgICAgICB2YWx1ZSBiZXR3ZWVuIHRoYXQgcmFuZ2Ugb3IgdGhlIG1heCBudW1iZXIgb3IgbWluIG51bWJlci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblV0aWxzLnByb3RvdHlwZS5jbGFtcCA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKG1pbiwgbWF4KSksIE1hdGgubWF4KG1pbiwgbWF4KSk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiAgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gbnVtYmVycyByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJldHdlZW4gdGhlIHR3by5cbiAqIEBuYW1lICByYW5kb21SYW5nZVxuICogQHBhcmFtICB7SW50ZWdlcn0geFxuICogQHBhcmFtICB7SW50ZWdlcn0geVxuICogQHJldHVybiB7SW50ZWdlcn1cbiAqL1xuVXRpbHMucHJvdG90eXBlLnJhbmRvbUJldHdlZW4gPSBmdW5jdGlvbih4LCB5KSB7XG4gIGxldCBtaW4gPSBNYXRoLm1pbih4LCB5KTtcbiAgbGV0IG1heCA9IE1hdGgubWF4KHgsIHkpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgZGlzdGFuY2VYWVxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byBjb29yZGluYXRlcyByZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3by5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB4MFxuICogQHBhcmFtICB7TnVtYmVyfSB5MFxuICogQHBhcmFtICB7TnVtYmVyfSB4MVxuICogQHBhcmFtICB7TnVtYmVyfSB5MVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5VdGlscy5wcm90b3R5cGUuZGlzdGFuY2VYWSA9IGZ1bmN0aW9uKHgwLCB5MCwgeDEsIHkxKSB7XG4gIGNvbnN0IGR4ID0geDAgLSB4MTtcbiAgY29uc3QgZHkgPSB5MCAtIHkxO1xuICByZXR1cm4gTWF0aC5oeXBvdChkeCwgZHkpO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgZGlzdGFuY2VWZWNcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gdmVjdG9ycyByZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3by5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSB2MVxuICogQHBhcmFtICB7VmVjdG9yfSB2MlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5VdGlscy5wcm90b3R5cGUuZGlzdGFuY2VWZWMgPSBmdW5jdGlvbih2MSwgdjIpIHtcbiAgY29uc3QgZFZlYyA9ICh2MSlbXCItXCJdKHYyKTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZFZlYy5nZXQoXCJ4XCIpLCBkVmVjLmdldChcInlcIikpO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgaW5SYW5nZVxuICogQGRlc2NyaXB0aW9uIGdpdmVuIGEgbnVtYmVyXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gdmFsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLnByb3RvdHlwZS5pblJhbmdlID0gZnVuY3Rpb24odmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gKHZhbCA8PSBNYXRoLm1heChtYXgsIG1pbikpICYmIChNYXRoLm1pbihtYXgsIG1pbikgPD0gdmFsKTtcbn07XG5cbi8qKlxuICogQG5hbWUgIHJhbmdlSW50ZXJzZWN0XG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSB0d28gcmFuZ2VzIHNlZSBpZiBib3RoIGludGVyc2VjdCBlYWNoIG90aGVyLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pbjBcbiAqIEBwYXJhbSAge051bWJlcn0gbWF4MFxuICogQHBhcmFtICB7TnVtYmVyfSBtaW4xXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heDFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLnByb3RvdHlwZS5yYW5nZUludGVyc2VjdCA9IGZ1bmN0aW9uKG1pbjAsIG1heDAsIG1pbjEsIG1heDEpIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLm1heChtYXgwLCBtaW4wKSA+PSBNYXRoLm1pbihtaW4xLCBtYXgxKSAmJlxuICAgIE1hdGgubWluKG1pbjAsIG1heDApIDw9IE1hdGgubWF4KG1heDEsIG1pbjEpXG4gICk7XG59O1xuXG4vKipcbiAqIEBuYW1lICB2ZWN0b3JJbnRlcnNlY3RcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d29zIHZlY3RvcnMgc2VlIGlmIHRoZXkgaW50ZXJzZWN0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzBcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMucHJvdG90eXBlLnZlY3RvckludGVyc2VjdCA9IGZ1bmN0aW9uKHZlYzAsIHZlYzEpIHtcbiAgY29uc3QgeDAgPSB2ZWMwLmdldChcInhcIik7XG4gIGNvbnN0IHkwID0gdmVjMC5nZXQoXCJ5XCIpO1xuICBjb25zdCB4MSA9IHZlYzEuZ2V0KFwieFwiKTtcbiAgY29uc3QgeTEgPSB2ZWMxLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnJhbmdlSW50ZXJzZWN0KHgwLCB5MCwgeDEsIHkxKTtcbn07XG5cbi8qKlxuICogQG5hbWUgIGNvbGxpc2lvblJlY3RcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gcmVjdGFuZ2Ugc2VlIGlmIHRoZSBpbnRlcnNlY3QuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByMFxuICogQHBhcmFtICB7UGFydGljbGV9IHIxXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5wcm90b3R5cGUuY29sbGlzaW9uUmVjdCA9IGZ1bmN0aW9uKHIwLCByMSkge1xuICBjb25zdCByMHggPSByMC5zdGF0ZS54O1xuICBjb25zdCByMHkgPSByMC5zdGF0ZS55O1xuICBjb25zdCByMXggPSByMS5zdGF0ZS54O1xuICBjb25zdCByMXkgPSByMS5zdGF0ZS55O1xuXG4gIGNvbnN0IHIwdyA9IHIweCArIHIwLnN0YXRlLndpZHRoO1xuICBjb25zdCByMGggPSByMHkgKyByMC5zdGF0ZS5oZWlnaHQ7XG4gIGNvbnN0IHIxdyA9IHIxeCArIHIxLnN0YXRlLndpZHRoO1xuICBjb25zdCByMWggPSByMXkgKyByMS5zdGF0ZS5oZWlnaHQ7XG5cbiAgcmV0dXJuIChcbiAgICB0aGlzLnJhbmdlSW50ZXJzZWN0KHIweCwgcjB3LCByMXgsIHIxdykgJiZcbiAgICB0aGlzLnJhbmdlSW50ZXJzZWN0KHIweSwgcjBoLCByMXksIHIxaClcbiAgKTtcbn07XG5cbi8qKlxuICogQG5hbWUgIGNvbGxpc2lvbkNpcmNsZVxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHRvIHBhcnRpY2xlIHdpdGggcmFkaSByZXR1cm4gd2V0aGVyIHRoZXkgY29sbGlkZSBhcmUgbm90XG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjMVxuICogQHBhcmFtICB7UGFydGljbGV9IGMyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5wcm90b3R5cGUuY29sbGlzaW9uQ2lyY2xlID0gZnVuY3Rpb24oYzEsIGMyKSB7XG4gIGNvbnN0IHJhZGkgPSAoYzEuc3RhdGUucmFkaXVzICsgYzIuc3RhdGUucmFkaXVzKTtcbiAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlWFkoYzEuc3RhdGUueCwgYzEuc3RhdGUueSwgYzIuc3RhdGUueCwgYzIuc3RhdGUueSk7XG5cbiAgaWYgKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIHJhZGkgPiBkaXN0YW5jZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQG5hbWUgIGNpcmNsZVBvaW50Q29sbGlzaW9uXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwb2ludCBhbmQgYSBjaXJjbGUgcmV0dXJuIGEgYm9vbGVhbiByZWdhcmRpbmcgd2V0aGVyIHRoZXkgYXJlIGNvbGxpZGluZy5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSAgIHhcbiAqIEBwYXJhbSAge051bWJlcn0gICB5XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gY2lyY2xlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5wcm90b3R5cGUuY29sbGlzaW9uQ2lyY2xlUG9pbnQgPSBmdW5jdGlvbih4LCB5LCBjaXJjbGUpIHtcbiAgLy8gVE9ETyBXcml0ZSB0ZXN0cy5cbiAgY29uc3QgZGlzdCA9IHRoaXMuZGlzdGFuY2VYWShcbiAgICB4LFxuICAgIHksXG4gICAgY2lyY2xlLnN0YXRlLngsXG4gICAgY2lyY2xlLnN0YXRlLnlcbiAgKTtcbiAgcmV0dXJuIGNpcmNsZS5zdGF0ZS5yYWRpdXMgPiBkaXN0O1xufTtcblxuLyoqXG4gKiBAbmFtZSAgY29sbGlzaW9uQ2lyY2xlVmVjXG4gKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGEgY29sbGlzaW9uIGJldHdlZW4gY2lyY2xlcyBhIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSAgIHZlY1xuICogQHBhcmFtICB7UGFydGljbGV9IGNpcmNsZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMucHJvdG90eXBlLmNvbGxpc2lvbkNpcmNsZVZlYyA9IGZ1bmN0aW9uKHZlYywgY2lyY2xlKSB7XG4gIHJldHVybiBjaXJjbGUuc3RhdGUucmFkaXVzID4gdGhpcy5kaXN0YW5jZVhZKFxuICAgIHZlYy5nZXQoXCJ4XCIpLFxuICAgIHZlYy5nZXQoXCJ5XCIpLFxuICAgIGNpcmNsZS5zdGF0ZS54LFxuICAgIGNpcmNsZS5zdGF0ZS55XG4gICk7XG59O1xuXG4vKipcbiAqIEBuYW1lICBjb2xsaXNpb25SZWN0UG9pbnRcbiAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgY29sbGlzaW9uIG9mIGEgcmVjdGFuZ2xlIGFuZCBhIHBvaW50LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeFxuICogQHBhcmFtICB7TnVtYmVyfSAgIHlcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5wcm90b3R5cGUuY29sbGlzaW9uUmVjdFBvaW50ID0gZnVuY3Rpb24oeCwgeSwgcmVjdCkge1xuICBjb25zdCByZWN0WCA9IHJlY3Quc3RhdGUueDtcbiAgY29uc3QgcmVjdFkgPSByZWN0LnN0YXRlLnk7XG4gIHJldHVybiAoXG4gICAgdGhpcy5pblJhbmdlKHgsIHJlY3RYLCByZWN0WCArIHJlY3Quc3RhdGUud2lkdGgpICYmXG4gICAgdGhpcy5pblJhbmdlKHksIHJlY3RZLCByZWN0WSArIHJlY3Quc3RhdGUuaGVpZ2h0KVxuICApO1xufTtcblxuLyoqXG4gKiBAbmFtZSBjb2xsaXNpb25SZWN0VmVjXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSB2ZWN0b3IgYW5kIGEgcmV0YW5nbGUgY2hlY2sgd2V0aGVyIHRoZXkgY29sbGlkZWQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gICB2ZWNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5wcm90b3R5cGUuY29sbGlzaW9uUmVjdFZlYyA9IGZ1bmN0aW9uKHZlYywgcmVjdCkge1xuICByZXR1cm4gdGhpcy5jb2xsaXNpb25SZWN0UG9pbnQodmVjLmdldChcInhcIiksIHZlYy5nZXQoXCJ5XCIpLCByZWN0KTtcbn07XG5cbi8qKlxuICogQG5hbWUgc2V0TGVuZ3RoXG4gKiBAZGVzY3JpcHRpb24gLSBTZXR0aW5nIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4gIHtudW1iZXJbXX0gQ29vcmRpbmF0ZXNcbiAqL1xuVXRpbHMucHJvdG90eXBlLnNldExlbmd0aCA9IGZ1bmN0aW9uKGxlbmd0aCwgeCwgeSkge1xuICBpZiAodHlwZW9mIHggIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiB5ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgbGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgeCBhbmQgeSB2YWx1ZXNcIik7XG4gIH1cblxuICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeSwgeCk7XG4gIHggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gIHkgPSBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGg7XG5cbiAgcmV0dXJuIFt4LCB5XTtcbn07XG5cbi8qKlxuICogQG5hbWUgc2V0QW5nbGVcbiAqIEBkZXNjcmlwdGlvbiAtIFNldHRpbmcgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yLlxuICogQHBhcmFtICAge251bWJlcn0gYW5nbGVcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4gIHtudW1iZXJbXX0gY29vcmRpbmF0ZXNcbiAqL1xuVXRpbHMucHJvdG90eXBlLnNldEFuZ2xlID0gZnVuY3Rpb24oYW5nbGUsIHgsIHkpIHtcbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgeSAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIGFuZ2xlICE9PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgeCBhbmQgeSB2YWx1ZXNcIik7XG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KHgsIHkpO1xuICB4ID0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoO1xuICB5ID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuXG4gIHJldHVybiBbeCwgeV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBVdGlscygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91dGlscy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9saWIvdXRpbHMuanMiLCIvKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuLypcbiogVGhlIHBhcnRpY2xlIGxpYmFyeSBpcyB1c2VkIGZvciBwaHlzaWNzIGFuaW1hdGlvbnMuXG4qIHRoZXkgYXJlIG5vdCBleHRyZW1lbHkgYWNjdXJhdGUgYnV0IHN0aWxsIHJlcHJlc2VudFxuKiBhbmQgZmVlbCBsaWtlIHBoeXNpY2FsIG1vdm1lbnRzLlxuKi9cblxuY29uc3QgZXh0ZW5kID0gcmVxdWlyZShcImV4dGVuZFwiKTtcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG4vKiBUaGUgZGVmYXVsdCBzdGF0ZSBhIHBhcnRpY2xlIHN0YXJ0cyB3aXRoIEl0IHNob3VsZCBub3QgbW92ZS4gKi9cblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgdng6IDAsXG4gIHZ5OiAwLFxuICBncmF2aXR5OiAwLFxuICBtYWduaXR1ZGU6IDAsXG4gIHJhZGl1czogMCxcbiAgbWFzczogMSxcbiAgZGlyZWN0aW9uOiBNYXRoLlBJICogMixcbiAgZnJpY3Rpb246IDEsXG4gIHNwcmluZ3M6IFtdLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgUGFydGljbGVcbiAqIEBwYXJhbSB7c3RhdGV9IHN0YXRlIGluaXRpYWwgc3RhdGUgdG8gcGFzcyB0aGUgY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFydGljbGUoc3RhdGU9Y2xvbmUoSU5JVElBTF9TVEFURSkpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG4vKipcbiAqIEBuYW1lIGNyZWF0ZVxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIHBhcnRpY2xlIGdpdmVuIGEgZGlyZWN0aW9uIGFuZCBtYWduaXR1ZGUuXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge09iamVjdH0gICBvcHRzIG9wdGlvbmFsIHN0YXRlIHZhbHVlcyB0byBwYXNzIHRvIGNyZWF0ZS5cbiAqIEByZXR1cm4ge1BhcnRpY2xlfSByZXR1cm5zIGEgcGFydGljbGVcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdHM9Y2xvbmUoSU5JVElBTF9TVEFURSkpIHtcbiAgLy8gRXh0ZW5kIHRoZSBvcHRpb25hbCBzdGF0ZSBvbiB0byB0aGUgZGVmYXVsdCBzdGF0ZS5cbiAgb3B0cyA9IGV4dGVuZCh0cnVlLCBjbG9uZShJTklUSUFMX1NUQVRFKSwgb3B0cyk7XG5cbiAgLy8gQ3JlYXRlIHBhcnRpY2xlIHdpdGggdGhlIG5ldyBvcHRpb25zLlxuICBjb25zdCBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShvcHRzKTtcblxuICAvLyBTZXQgbGVuZ3RoLlxuICBwYXJ0aWNsZS5zZXRTcGVlZChvcHRzLm1hZ25pdHVkZSk7XG5cbiAgLy8gU2V0IGFuZ2xlLlxuICBwYXJ0aWNsZS5zZXRIZWFkaW5nKG9wdHMuZGlyZWN0aW9uKTtcblxuICAvLyBSZXR1cm4gbmV3IHBhcnRpY2xlLlxuICByZXR1cm4gcGFydGljbGU7XG59O1xuXG4vKipcbiAqIEBuYW1lIGFjY2VsZXJhdGVcbiAqIEBkZXNjcmlwdGlvbiBBIGNoYW5nZSBpbiB2ZWxvY2l0eS5cbiAqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGF4XG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSBheVxuICogQHJldHVybiB7T2JqZWN0fSBBY2NlbGVyYXRpb24gdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYWNjZWxlcmF0ZSA9IGZ1bmN0aW9uIGFjY2VsZXJhdGUoYXg9dGhpcy5zdGF0ZS52eCwgYXk9dGhpcy5zdGF0ZS52eSkge1xuICB0aGlzLnN0YXRlLnZ4ICs9IGF4O1xuICB0aGlzLnN0YXRlLnZ5ICs9IGF5O1xuICByZXR1cm4ge2F4LCBheX07XG59O1xuXG4vKipcbiAqIEBuYW1lIHVwZGF0ZVxuICogQGRlc2NyaXB0aW9uIEEgdXBkYXRlIGEgcG9zaXRpb24gb2YgYSBwYXJ0aWNsZVxuICogYmFzZWQgb24gaXRzIGdyYXZpdHkgYW5kIGZyaWNpdGlvbi4gR3Jhdml0eSBpcyB1c3VhbGx5IGEgYWNjZWxlcmF0aW9uXG4gKiB2ZWN0b3IuXG4gKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSBmcmljIEZyaWNpdGlvbiB0byBhcHBseS5cbiAqIEBwYXJhbSAge0ludGVnZXJ9IGdyYXYgR3Jhdml0eSB0byBhcHBseS5cbiAqIEByZXR1cm4ge09iamVjdH0gUG9zaXRpb24gc3RhdGUuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoZnJpYz10aGlzLnN0YXRlLmZyaWN0aW9uLCBncmF2PXRoaXMuc3RhdGUuZ3Jhdml0eSkge1xuICAvLyBBcHBsZSBzcHJpbmdzXG4gIHRoaXMuaGFuZGxlU3ByaW5ncygpO1xuXG4gIC8vIEFwcGx5IGZha2UgZnJpY2l0aW9uIHRvIHZlbG9jaXR5XG4gIHRoaXMuc3RhdGUudnggKj0gZnJpYztcbiAgdGhpcy5zdGF0ZS52eSAqPSBmcmljO1xuXG4gIC8vIEFwcGx5IGdyYXZpdHkgdG8gdmVsb2NpdHlcbiAgdGhpcy5hY2NlbGVyYXRlKDAsIGdyYXYpO1xuXG4gIC8vIFVwZGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhY2NlbGVyYXRpb25cbiAgcmV0dXJuIHRoaXMudXBkYXRlUG9zKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIHNldFNwZWVkXG4gKiBAZGVzY3JpcHRpb24gc2V0cyB0aGUgaW50ZXJuYWwgc3BlZWQgb2YgdGhlIHBhcnRpY2xlIGdpdmVuIHRoZSBmb3JjZVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNldFNwZWVkID0gZnVuY3Rpb24gc2V0U3BlZWQoc3BlZWQpIHtcbiAgY29uc3QgYW5nbGUgPSB0aGlzLmdldEhlYWRpbmcoKTtcbiAgdGhpcy5zdGF0ZS52eCA9IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkO1xuICB0aGlzLnN0YXRlLnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogc3BlZWQ7XG59O1xuXG4vKipcbiAqIEBuYW1lIHNldEhlYWRpbmdcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIHNldHMgdGhlIGludGVybmFsIHNwZWVkIG9mIHRoZSBwYXJ0aWNsZSBnaXZlbiB0aGUgYW5nbGVcbiAqIEBwYXJhbSB7W3R5cGVdfSBhbmdsZSBbZGVzY3JpcHRpb25dXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zZXRIZWFkaW5nID0gZnVuY3Rpb24gc2V0SGVhZGluZyhhbmdsZSkge1xuICBjb25zdCBzcGVlZCA9IHRoaXMuZ2V0U3BlZWQoKTtcbiAgdGhpcy5zdGF0ZS52eCA9IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkO1xuICB0aGlzLnN0YXRlLnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogc3BlZWQ7XG59O1xuXG4vKipcbiAqIEBuYW1lIGdldFNwZWVkXG4gKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4ge251bWJlcn0gZm9yY2Ugb2YgdmVsb2NpdHkgdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2V0U3BlZWQgPSBmdW5jdGlvbiBnZXRTcGVlZCh4PXRoaXMuc3RhdGUudngsIHk9dGhpcy5zdGF0ZS52eSkge1xuICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLnN0YXRlLnZ4LCB0aGlzLnN0YXRlLnZ5KTtcbn07XG5cbi8qKlxuICogQG5hbWUgZ2V0SGVhZGluZ1xuICogQGRlc2NyaXB0aW9uIGdldCB0aGUgYW5nbGUgb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4ge251bWJlcn0gYW5nbGUgb2YgdmVsb2NpdHkgdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2V0SGVhZGluZyA9IGZ1bmN0aW9uIGdldEhlYWRpbmcoeD10aGlzLnN0YXRlLnZ4LCB5PXRoaXMuc3RhdGUudnkpIHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeCwgeSk7XG59O1xuXG4vKipcbiAqIEBuYW1lIGFkZFNwcmluZ1xuICogQGRlc2NyaXB0aW9uIGFkZCBzcHJpbmcgdG8gc3ByaW5ncyBhcnJheVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gcG9pbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBrXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hZGRTcHJpbmcgPSBmdW5jdGlvbiBhZGRTcHJpbmcoc3ByaW5nKSB7XG4gIHRoaXMucmVtb3ZlU3ByaW5nKHNwcmluZyk7XG4gIHRoaXMuc3RhdGUuc3ByaW5ncy5wdXNoKHNwcmluZyk7XG59O1xuXG4vKipcbiAqIEBuYW1lIHJlbW92ZVNwcmluZ1xuICogQGRlc2NyaXB0aW9uIHJlbW92ZSBhIHNwZWNpZmljIHN0cmluZyBmcm9tIHRoZSBzcHJpbmdzIGFycmF5XG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gcG9pbnRcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnJlbW92ZVNwcmluZyA9IGZ1bmN0aW9uIHJlbW92ZVNwcmluZyhzcHJpbmcpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnNwcmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3ByaW5nLnBvaW50LnN0YXRlLnggPT09IHRoaXMuc3RhdGUuc3ByaW5nc1tpXS5wb2ludC5zdGF0ZS54ICYmXG4gICAgICAgIHNwcmluZy5wb2ludC5zdGF0ZS55ID09PSB0aGlzLnN0YXRlLnNwcmluZ3NbaV0ucG9pbnQuc3RhdGUueSkge1xuICAgICAgdGhpcy5zdGF0ZS5zcHJpbmdzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBhbmdsZVRvIC0gQXN1bW1pbmcgd2Uga25vdyB3aGVyZVxuICogdGhlIG90aGVyIHBhcnRpY2xlIGlzIG9uIHRoZSBjYW52YXMuIFdlIGNhbiB1c2VcbiAqIHRoZSBhbmdsZSBmb3JtdWxhZSB0byBmaWd1cmUgb3V0IHRoZSBhbmdsZVxuICogYmV0d2VlbiB0d28gcGFydGljbGUuIFVzaW5nIGFyY3RhbmdlbnQgaXMgZmluZS5cbiAqIGJ1dCBiZWNhdXNlIHRoZSBjb3JyZGluYXRlIHBsYW5lIGlzIGZpbHBlZCBvbiB0aGVcbiAqIFkgYXhpcyB3ZSB1c2UgYXRhbjIgdG8gZ2V0IHRoZSByaWdodCB2YWx1ZXMuIEV4cGxhaW5lZFxuICogaW4gQVBJIERvY3MuXG4gKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDIgICAgICBBIHBhcnRpY2xlIGluc3RhbmNlLlxuICogQHJldHVybiB7SW50ZWdlcn0gIEFuZ2xlICAgQSBhbmdsZS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFuZ2xlVG8gPSBmdW5jdGlvbiBhbmdlbFRvKHAyKSB7XG4gIGNvbnN0IGR4ID0gcDIuc3RhdGUueCAtIHRoaXMuc3RhdGUueDtcbiAgY29uc3QgZHkgPSBwMi5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xuICByZXR1cm4gTWF0aC5hdGFuMihkeSwgZHgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBkaXN0YW5jZVRvXG4gKiBAZGVzY3JpcHRpb24gQXNzdW1pbmcgd2Uga25vdyB3aGVyZSBib3RoIHBhcnRpY2xlIGFyZSBvbiB0aGUgY2FudmFzLlxuICogd2UgY2FuIHVzZSB0aGUgZGlzdGFuY2UgZm9ybXVhbGUgdG8gZmlndXJlIG91dCB0aGUgZGlzdGFuY2VcbiAqIGJldHdlZW4gdGhlIHR3byBwYXJ0aWNsZXMuXG4gKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDIgICAgICBBIHBhcnRpY2xlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSAgQW5nbGUgICBBIERpc3RhbmNlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5kaXN0YW5jZVRvID0gZnVuY3Rpb24gZGlzdGFuY2VUbyhwMikge1xuICBjb25zdCBkeCA9IHAyLnN0YXRlLnggLSB0aGlzLnN0YXRlLng7XG4gIGNvbnN0IGR5ID0gcDIuc3RhdGUueSAtIHRoaXMuc3RhdGUueTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZHgsIGR5KTtcbn07XG5cbi8qKlxuICogQG5hbWUgZ3Jhdml0YXRlVG9cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEFwcGx5cyBncmF2aXRhdGlvbiB0byB0aGUgaW5wdXQgcGFydGljbGUuXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmdyYXZpdGF0ZVRvID0gZnVuY3Rpb24ocDIpIHtcbiAgY29uc3QgZHggPSBwMi5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54O1xuICBjb25zdCBkeSA9IHAyLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnk7XG5cbiAgLy8gRGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBhcnRpY2xlc1xuICBjb25zdCBkaXN0U1EgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgY29uc3QgZGlzdCA9IE1hdGguc3FydChkaXN0U1EpO1xuXG4gIC8vIE1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yIFtGID0gRyhtMSkobTIpL3JeMl1cbiAgY29uc3QgZm9yY2UgPSBwMi5zdGF0ZS5tYXNzIC8gZGlzdFNRO1xuXG4gIC8vIFNldHRpbmcgdXAgYW5nbGVzIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3Qgc2luID0gZHkgLyBkaXN0O1xuICBjb25zdCBjb3MgPSBkeCAvIGRpc3Q7XG5cbiAgLy8gU2V0dGluZyB2ZXRvciBhbmdsZVxuICBjb25zdCBheCA9IGNvcyAqIGZvcmNlO1xuICBjb25zdCBheSA9IHNpbiAqIGZvcmNlO1xuXG4gIHJldHVybiB0aGlzLmFjY2VsZXJhdGUoYXgsIGF5KTtcbn07XG5cbi8qKlxuICogQG5hbWUgIGdlbmVyYXRvclxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGUgYSBidW5jaCBvZiBwYXJ0aWNsZXMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgbnVtICAgICAgIFRoZSBtYXhpbXVtIGFtb3VudCBvZiBnZW5lcmF0ZWQgcGFydGljbGVzIG5lZWRlZC5cbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgT3B0aW9ucyB0byBwYXNzIGVhY2ggcGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfmdlbmVyYXRvckNhbGxiYWNrfSBjYWxsYmFjayAgRnVuY3Rpb24gdG8gYWxsb3cgbWFwcGluZy5cbiAqIEByZXR1cm4ge1BhcnRpY2xlW119XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5nZW5lcmF0b3IgPSBmdW5jdGlvbiBnZW4obnVtLCBvcHRzPWNsb25lKElOSVRJQUxfU1RBVEUpLCBjYWxsYmFjaykge1xuICBPYmplY3QuZnJlZXplKG9wdHMpO1xuICBjb25zdCBwYXJ0aWNsZXMgPSBbXTtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgY2FsbGJhY2sob3B0cywgaSwgZnVuY3Rpb24ocCkge1xuICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHBhcnRpY2xlIHBhc3NlZCB0byBnZW5lcmF0b3IuIFdpbGwgdXNlIGRlZmF1bHQgc3RhdGUuXCIpO1xuICAgICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gc2VsZi5jcmVhdGUob3B0cyk7XG4gICAgICAgICAgcGFydGljbGVzLnB1c2gobmV3UGFydGljbGUpO1xuICAgICAgICAgIHJldHVybiBuZXdQYXJ0aWNsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gc2VsZi5jcmVhdGUocCk7XG4gICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ld1BhcnRpY2xlKTtcbiAgICAgICAgcmV0dXJuIG5ld1BhcnRpY2xlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIHBhcnRpY2xlcy5wdXNoKHNlbGYuY3JlYXRlKG9wdHMpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydGljbGVzO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0b3IgY2FsbGJhY2tcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGNhbGxiYWNrIFBhcnRpY2xlfmdlbmVyYXRvckNhbGxiYWNrXG4gKiBAcGFyYW0ge1BhcnRpY2xlfVxuICovXG5cbi8qKlxuICogQG5hbWUgdXBkYXRlUG9zXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseSB2ZWxvY2l0eSB0byB0aGUgcG9zaXRpb24uXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB2eFxuICogQHBhcmFtICB7SW50ZWdlcn0gdnlcbiAqIEByZXR1cm4ge09iamVjdH0gUG9zaXRpb24gc3RhdGUgYWZ0ZXIgdmVsb2NpdHkgaGFzIGJlZW4gYXBwbGllZFxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUudXBkYXRlUG9zID0gZnVuY3Rpb24gdXBkYXRlUG9zKHZ4LCB2eSkge1xuICBpZiAodnggPT09IHVuZGVmaW5lZCAmJiB2eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zdGF0ZS54ICs9IHRoaXMuc3RhdGUudng7XG4gICAgdGhpcy5zdGF0ZS55ICs9IHRoaXMuc3RhdGUudnk7XG4gICAgcmV0dXJuIHt4OiB0aGlzLnN0YXRlLngsIHk6IHRoaXMuc3RhdGUueX07XG4gIH1cblxuICB0aGlzLnN0YXRlLnggKz0gdng7XG4gIHRoaXMuc3RhdGUueSArPSB2eTtcbiAgcmV0dXJuIHt4OiB0aGlzLnN0YXRlLngsIHk6IHRoaXMuc3RhdGUueX07XG59O1xuXG4vKipcbiAqIEBuYW1lIHNwcmluZ0Zyb21Ub1xuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHBhcnRpY2xlcyBjYWxjdWxhdGUgdGhlXG4gKiBzcHJpbmcgZm9yY2UgYXBwbGllZCB0byBib3RoIHBhcnRpY2xlcy5cbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSAgc3ByaW5nICBHaXZlbiBvZmZzZXQgZm9yIHRoZSBwYXJ0aWNsZXNcbiAqIEBwYXJhbSAge0ludGVnZXJ9ICBvZmZzZXQgIFRoZSBzcHJpbmcgY29lZmZpY2VudFxuICogQHJldHVybiB7UGFydGljbGVbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNwcmluZ0Zyb21UbyA9IGZ1bmN0aW9uIHNwcmluZ0Zyb21UbyhwLCBzcHJpbmc9MC4wNSwgb2Zmc2V0PTEwMCkge1xuICAvLyBQb3N0aW9uIGRlbHRhXG4gIGNvbnN0IGR4ID0gKHAuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gIGNvbnN0IGR5ID0gKHAuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gb2Zmc2V0KSAqIHNwcmluZztcblxuICAvLyBTcHJpbmcgYWNjZWxlcmF0aW9uIHZlY3RvclxuICBjb25zdCBzeCA9IGR4IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcbiAgY29uc3Qgc3kgPSBkeSAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG5cbiAgLy8gQWNjZWxlcmF0ZSB3aXRoIHRoZSBzcHJpbmcgdmVjdG9yXG4gIHRoaXMuYWNjZWxlcmF0ZShzeCwgc3kpO1xuXG4gIC8vIEFjY2VsZXJhdGUgdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgcC5zdGF0ZS52eCAtPSBzeDtcbiAgcC5zdGF0ZS52eSAtPSBzeTtcblxuICByZXR1cm4gW3RoaXMsIHBdO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgc3ByaW5nVG9Qb2ludFxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwYXJ0aWNsZSwgYSB2ZWN0b3IsIGFuZCBhIHNwcmluZyBjb2VmZmllbmNlbnQgYWNjZWxlcmF0ZVxuICogdGhlIHBhcnRpY2xlIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UgaXRzIGlzIGZyb20gdGhlIHBvaW50LlxuICogQHBhcmFtICB7VmVjdG9yfSAgICAgcG9pbnRcbiAqIEBwYXJhbSAge051bWJlcn0gICAgIHNwcmluZyBUaGUgc3ByaW5nIGNvZWZmaWVjZW50IHRoZSBoaWdoZXJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgdmFsdWUgdGhlIG1vcmUgc3ByaW5neSBpdCBnZXRzLlxuICogQHBhcmFtICB7SW50ZWdlcn0gICAgb2Zmc2V0IE9mZnNldCBmcm9tIHRoZSBzcHJpbmdcbiAqXG4gKiBAcmV0dXJuIHtQYXJ0aWNsZX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNwcmluZ1RvUG9pbnQgPSBmdW5jdGlvbiBzcHJpbmdUb1BvaW50KHApIHtcbiAgLy8gUG9zdGlvbiBkZWx0YVxuICBjb25zdCBkeCA9IChwLnBvaW50LnN0YXRlLnggLSB0aGlzLnN0YXRlLngpO1xuICBjb25zdCBkeSA9IChwLnBvaW50LnN0YXRlLnkgLSB0aGlzLnN0YXRlLnkpO1xuXG4gIC8vIFNldHRpbmcgdXAgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBjb25zdCBzcHJpbmdGb3JjZSA9IChkaXN0YW5jZSAtIHAub2Zmc2V0KSAqIHAuc3ByaW5nO1xuXG4gIC8vIFNwcmluZyBhY2NlbGVyYXRpb24gdmVjdG9yXG4gIGNvbnN0IHN4ID0gZHggLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuICBjb25zdCBzeSA9IGR5IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcblxuICAvLyBBY2NlbGVyYXRlIHdpdGggdGhlIHNwcmluZyB2ZWN0b3JcbiAgdGhpcy5hY2NlbGVyYXRlKHN4LCBzeSk7XG5cbiAgcmV0dXJuIFt0aGlzLCBwXTtcbn07XG5cbi8qKlxuICogQG5hbWUgaGFuZGxlU3ByaW5nc1xuICogQGRlc2NyaXB0aW9uIEFwcGx5IHNwcmluZyBwb2ludCB0byBhbGwgaW50ZXJuYWwgc3ByaW5ncy5cbiAqIEBwYXJhbSAge3NwcmluZ3N9IHNwcmluZ3MgQW4gYXJyYXkgb2Ygc3ByaW5ncyB0byBzcHJpbmcgdG8uXG4gKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmhhbmRsZVNwcmluZ3MgPSBmdW5jdGlvbiBoYW5kbGVTcHJpbmdzKHNwcmluZ3M9dGhpcy5zdGF0ZS5zcHJpbmdzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3ByaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuc3ByaW5nVG9Qb2ludChzcHJpbmdzW2ldKTtcbiAgfVxuICByZXR1cm4gc3ByaW5ncztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3BhcnRpY2xlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2xpYi9wYXJ0aWNsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsvKiovfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH0gZWxzZSBpZiAoKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpIHx8IHRhcmdldCA9PSBudWxsKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2V4dGVuZC9pbmRleC5qcyIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvY2xvbmVEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGJhc2VDbG9uZSwgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VDbG9uZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TdGFjay5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fU3RhY2suanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvZXEuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja0hhcy5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19zdGFja1NldC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19NYXAuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19yb290LmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19IYXNoLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faGFzaFNldC5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUVhY2guanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29weU9iamVjdC5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gva2V5cy5qcyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faXNJbmRleC5qcyIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL2tleXNJbi5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19iYXNlS2V5c0luLmpzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29weUFycmF5LmpzIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weVN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fU2V0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZU1hcCA9IHJlcXVpcmUoJy4vX2Nsb25lTWFwJyksXG4gICAgY2xvbmVSZWdFeHAgPSByZXF1aXJlKCcuL19jbG9uZVJlZ0V4cCcpLFxuICAgIGNsb25lU2V0ID0gcmVxdWlyZSgnLi9fY2xvbmVTZXQnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwidmFyIGFkZE1hcEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkTWFwRW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCBDTE9ORV9ERUVQX0ZMQUcpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lTWFwLmpzIiwiLyoqXG4gKiBBZGRzIHRoZSBrZXktdmFsdWUgYHBhaXJgIHRvIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gcGFpciBUaGUga2V5LXZhbHVlIHBhaXIgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAqL1xuZnVuY3Rpb24gYWRkTWFwRW50cnkobWFwLCBwYWlyKSB7XG4gIC8vIERvbid0IHJldHVybiBgbWFwLnNldGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIG1hcC5zZXQocGFpclswXSwgcGFpclsxXSk7XG4gIHJldHVybiBtYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTWFwRW50cnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hZGRNYXBFbnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19hZGRNYXBFbnRyeS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzIiwidmFyIGFkZFNldEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkU2V0RW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCBDTE9ORV9ERUVQX0ZMQUcpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzIiwiLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFNldEVudHJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYWRkU2V0RW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYWRkU2V0RW50cnkuanMiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIi8qKlxuICogQGNsYXNzIFNoYXBlc1xuICogQHBhcmFtIHtPYmplY3R9IGN0eCAgICAgIENhbnZhcyBjb250ZXh0LlxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFNoYXBlcyhjdHgsIGRvY3VtZW50KSB7XG4gIGlmICghY3R4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2hhcGVzOiBQbGVhc2UgcHJvdmlkZSBhIGNvbnRleHQgYXJndW1lbnQgW2FyZzo6MV1cIik7XG4gIH1cbiAgdGhpcy5jdHggPSBjdHg7XG4gIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBuYW1lICBjaXJjbGVcbiAqIEBkZXNjcmlwdGlvbiBkcmF3IGEgY2lyY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHggICAgIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5ICAgICBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0ge051bWJlcn0gciAgICAgVGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIFRoZSBjb2xvciBvZiB0aGUgY2lyY2xlLlxuICovXG5TaGFwZXMucHJvdG90eXBlLmNpcmNsZSA9IGZ1bmN0aW9uIGRyYXdDaXJjbGUoeD00LCB5PTQsIHI9MiwgY29sb3I9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgdGhpcy5jdHguZmlsbCgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSAgcmVjdFxuICogQGRlc2NyaXB0aW9uIEZpbGwgYSByZWN0YW5nbGVcbiAqIEBwYXJhbSAge051bWJlcn0geCAgICAgU3RhcnRpbmcgcG9pbnQgWFxuICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICBTdGFydGluZyBwb2ludCBZXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHcgICAgIFdpZHRoIG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSAge051bWJlcn0gaCAgICAgSGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgQSBoZXggc3RyaW5nLlxuICovXG5TaGFwZXMucHJvdG90eXBlLnJlY3QgPSBmdW5jdGlvbiBkcmF3UmVjdCh4LCB5LCB3PTEwLCBoPTEwLCBjb2xvcj1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XG59O1xuXG4vKipcbiAqIHBDaXJjbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gKiBAcmV0dXJuIHtQYXJ0aWNsZX1cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5wQ2lyY2xlID0gZnVuY3Rpb24gcGFydGljbGVDaXJjbGUocCkge1xuICB0aGlzLmNpcmNsZShcbiAgICBwLnN0YXRlLngsXG4gICAgcC5zdGF0ZS55LFxuICAgIHAuc3RhdGUucmFkaXVzLFxuICAgIHAuc3RhdGUuY29sb3JcbiAgKTtcbiAgcmV0dXJuIHA7XG59O1xuXG4vKipcbiAqIHBSZWN0XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcFxuICogQHJldHVybiB7UGFydGljbGV9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUucFJlY3QgPSBmdW5jdGlvbiBwYXJ0aWNsZVJlY3QocCkge1xuICB0aGlzLnJlY3QoXG4gICAgcC5zdGF0ZS54LFxuICAgIHAuc3RhdGUueSxcbiAgICBwLnN0YXRlLndpZHRoLFxuICAgIHAuc3RhdGUuaGVpZ2h0LFxuICAgIHAuc3RhdGUuY29sb3JcbiAgKTtcbiAgcmV0dXJuIHA7XG59O1xuXG4vKipcbiAqIEBuYW1lICBkcmF3TGluZVhZXG4gKiBAZGVzY3JpcHRpb24gRHJhdyBhIGxpbmUgYmV0d2VlbiB0aGVzZSB0d28gcG9pbnRzLlxuICogQHBhcmFtICB7TnVtYmVyfSB4MFxuICogQHBhcmFtICB7TnVtYmVyfSB5MFxuICogQHBhcmFtICB7TnVtYmVyfSB4MVxuICogQHBhcmFtICB7TnVtYmVyfSB5MVxuICogQHJldHVybiB7Vm9pZH1cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5kcmF3TGluZVhZID0gZnVuY3Rpb24oeDAsIHkwLCB4MSwgeTEpIHtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4Lm1vdmVUbyh4MCwgeTApO1xuICB0aGlzLmN0eC5saW5lVG8oeDEsIHkxKTtcbiAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIHJldHVybiB2b2lkKDApO1xufTtcblxuLyoqXG4gKiBAbmFtZSBkcmF3TGluZVZlY1xuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMwXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzFcbiAqIEByZXR1cm4ge1ZvaWR9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUuZHJhd0xpbmVWZWMgPSBmdW5jdGlvbih2ZWMwLCB2ZWMxKSB7XG4gIHRoaXMuZHJhd0xpbmVYWSh2ZWMwLmdldChcInhcIiksIHZlYzAuZ2V0KFwieVwiKSwgdmVjMS5nZXQoXCJ4XCIpLCB2ZWMxLmdldChcInlcIikpO1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhcGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zaGFwZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvbGliL3NoYXBlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=