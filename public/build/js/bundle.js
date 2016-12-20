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
	var DEFAULT_EXAMPLE = "a1";
	
	var sethash = function sethash(fragment) {
	  return window.location.hash = fragment || "";
	};
	
	document.addEventListener("DOMContentLoaded", function () {
	  var hash = window.location.hash;
	  var pathname = window.location.pathname;
	  var textNodes = utils.mapText(".list_container li a");
	  var $ = shims.$;
	
	  switch (pathname) {
	    case "/":
	      {
	        console.log("home");
	        break;
	      }
	    case "/examples":
	      {
	        utils.elmDelegator($(".list_container"), "click", function check(elm) {
	          return elm.tagName === "A";
	        }, function (err, target, evt) {
	          if (err) {
	            throw err;
	          }
	
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
	      id = getFrame(example).attributes["data-value"].nodeValue;
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
	    // If the example already exsists dont do anything.
	    if (!exampleExists(id)) {
	      var _ret = function () {
	        // If we are not the first frame in the document.
	        if (!firstState) {
	          var _ret2 = function () {
	            // Toggle the state and remove old src and inject new src.
	            var existingFrame = getFrame();
	            removeFrameSrc(existingFrame);
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
	
	        // Toggle the state.
	        firstState = !firstState;
	        // Create the frame
	        var firstFrame = createFrame(id);
	        var parentDiv = $(".frame_container");
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2VkOGFhMjg4YWYzYWJhMzExZTQiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9tb2R1bGUvaWZyYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL21vZHVsZS9kb21faGVscGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvbW9kdWxlL3NoaW1zLmpzIl0sIm5hbWVzIjpbImlmcmFtZSIsInJlcXVpcmUiLCJkb2N1bWVudCIsInNoaW1zIiwidXRpbHMiLCJERUZBVUxUX0VYQU1QTEUiLCJzZXRoYXNoIiwiZnJhZ21lbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJhZGRFdmVudExpc3RlbmVyIiwicGF0aG5hbWUiLCJ0ZXh0Tm9kZXMiLCJtYXBUZXh0IiwiJCIsImNvbnNvbGUiLCJsb2ciLCJlbG1EZWxlZ2F0b3IiLCJjaGVjayIsImVsbSIsInRhZ05hbWUiLCJlcnIiLCJ0YXJnZXQiLCJldnQiLCJ0ZXh0IiwibG9hZEluSWZyYW1lIiwibGVuZ3RoIiwiaGFzaFF1ZXJ5Iiwic3Vic3RyIiwiaW5kZXhPZiIsIkZJUlNUX0lGUkFNRSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpZnJhbWVIYW5kbGVyIiwiZG9tSGVscGVyIiwiJCQiLCJmaXJzdFN0YXRlIiwiZmV0Y2hFeGFtcGxlIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInR4dCIsImNhdGNoIiwiZXJyb3IiLCJFcnJvciIsIndyaXRlRnJhbWUiLCJwYXJlbnQiLCJmcmFtZSIsImlzRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0RnJhbWUiLCJuYW1lIiwiaW5qZWN0U3JjIiwic3JjIiwic3JjZG9jIiwiY3JlYXRlRnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRnJhbWVTcmMiLCJzcmNEb2MiLCJleGFtcGxlRXhpc3RzIiwiZXhhbXBsZSIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJlIiwiZXhpc3RpbmdGcmFtZSIsImZpcnN0RnJhbWUiLCJwYXJlbnREaXYiLCJuZXdGcmFtZSIsImlzRWxtIiwib2JqIiwiSFRNTEVsZW1lbnQiLCJlbG1MaXN0IiwiaXRlbSIsInB1c2giLCJldmVudCIsImNoZWNrVGFyZ2V0IiwiY2FsbGJhY2siLCJwcmV2ZW50RGVmYXVsdCIsInFzIiwic2VsZWN0b3IiLCJiYXNlTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJxc0FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQLE1BQUs7QUFDTDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXdDLDRCQUE0QjtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RCxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1QsK0VBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLHdDQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUErQiwwQkFBMEIsZUFBZTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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S0FBSixDQUFVMUIsTUFBTSx5QkFBaEIsQ0FBTjtBQUNyQixTQUFJQSxJQUFJTyxNQUFSLEVBQWdCLE1BQU0sSUFBSW1CLEtBQUosQ0FBVTFCLE1BQU0sMkJBQWhCLENBQU47O0FBRWhCQSxTQUFJVCxnQkFBSixDQUFxQmtFLEtBQXJCLEVBQTRCLFVBQVNYLENBQVQsRUFBWTtBQUN0Q0EsU0FBRWMsY0FBRjs7QUFFQSxXQUFJRixZQUFZWixFQUFFM0MsTUFBZCxDQUFKLEVBQTJCO0FBQ3pCLGdCQUFPd0QsU0FBUyxJQUFULEVBQWViLEVBQUUzQyxNQUFqQixFQUF5QjJDLENBQXpCLENBQVA7QUFDRDs7QUFFRCxjQUFPYSxTQUFTLElBQUlqQyxLQUFKLENBQVUsbUJBQVYsQ0FBVCxDQUFQO0FBQ0QsTUFSRDtBQVNELElBYkQ7O0FBZUEsVUFBTyxFQUFDNUIsMEJBQUQsRUFBZUosZ0JBQWYsRUFBd0JvQyxvQkFBeEIsRUFBUDtBQUNELEVBMURELEM7Ozs7Ozs7O0FDQUE7QUFDQWxCLFFBQU9DLE9BQVAsR0FBaUIsU0FBUzlCLEtBQVQsQ0FBZUQsUUFBZixFQUF5QjtBQUN4Q0EsY0FBV0EsWUFBWSxLQUFLQSxRQUE1Qjs7QUFFQSxPQUFNYSxJQUFJLFNBQVNrRSxFQUFULENBQVlDLFFBQVosRUFBc0JDLFFBQXRCLEVBQWdDO0FBQ3hDLFlBQU9qRixTQUFTa0YsYUFBVCxDQUF1QkYsUUFBdkIsRUFBaUNDLFFBQWpDLENBQVA7QUFDRCxJQUZEOztBQUlBLE9BQU0vQyxLQUFLLFNBQVNpRCxLQUFULENBQWVILFFBQWYsRUFBeUJDLFFBQXpCLEVBQW1DO0FBQzVDLFlBQU9qRixTQUFTb0YsZ0JBQVQsQ0FBMEJKLFFBQTFCLEVBQW9DQyxRQUFwQyxDQUFQO0FBQ0QsSUFGRDs7QUFJQSxVQUFPLEVBQUNwRSxJQUFELEVBQUlxQixNQUFKLEVBQVA7QUFDRCxFQVpEO0FBYUEsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZWQ4YWEyODhhZjNhYmEzMTFlNCIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcblxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVybCA9IGlucHV0XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoJ1xcclxcbicpLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBpZnJhbWUgPSByZXF1aXJlKFwiaWZyYW1lTWFuYWdlci5qc1wiKShkb2N1bWVudCk7XG5jb25zdCBzaGltcyA9IHJlcXVpcmUoXCJzaGltcy5qc1wiKShkb2N1bWVudCk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCJkb21faGVscGVyLmpzXCIpKGRvY3VtZW50KTtcbmNvbnN0IERFRkFVTFRfRVhBTVBMRSA9IFwiYTFcIjtcblxuY29uc3Qgc2V0aGFzaCA9IChmcmFnbWVudCkgPT4ge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBmcmFnbWVudCB8fCBcIlwiO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgY29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGNvbnN0IHRleHROb2RlcyA9IHV0aWxzLm1hcFRleHQoXCIubGlzdF9jb250YWluZXIgbGkgYVwiKTtcbiAgY29uc3QgJCA9IHNoaW1zLiQ7XG5cbiAgc3dpdGNoIChwYXRobmFtZSkge1xuICBjYXNlKFwiL1wiKToge1xuICAgIGNvbnNvbGUubG9nKFwiaG9tZVwiKTtcbiAgICBicmVhaztcbiAgfVxuICBjYXNlKFwiL2V4YW1wbGVzXCIpOiB7XG4gICAgdXRpbHMuZWxtRGVsZWdhdG9yKCQoXCIubGlzdF9jb250YWluZXJcIiksIFwiY2xpY2tcIiwgZnVuY3Rpb24gY2hlY2soZWxtKSB7XG4gICAgICByZXR1cm4gZWxtLnRhZ05hbWUgPT09IFwiQVwiO1xuICAgIH0sIGZ1bmN0aW9uKGVyciwgdGFyZ2V0LCBldnQpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICBzZXRoYXNoKHRhcmdldC50ZXh0KTtcbiAgICAgIGlmcmFtZS5sb2FkSW5JZnJhbWUodGFyZ2V0LnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlcmVzIGEgcGFnZSBmcmFnbWVudCBsb2FkIHRoZSByaWdodCBleGFtcGxlLlxuICAgIGlmIChoYXNoLmxlbmd0aCkge1xuICAgICAgY29uc3QgaGFzaFF1ZXJ5ID0gaGFzaC5zdWJzdHIoMSk7XG5cbiAgICAgIGlmICh0ZXh0Tm9kZXMuaW5kZXhPZihoYXNoUXVlcnkpID4gLTEpIHtcbiAgICAgICAgaWZyYW1lLmxvYWRJbklmcmFtZShoYXNoUXVlcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgLy8gRGVmYXVsdCB0byB0aGUgYW4gZXhhbXBsZSBpZiB0aGVyZXMgbm8gaGFzaC5cbiAgICBpZiAoaGFzaC5sZW5ndGggPCAxKSB7XG4gICAgICBzZXRoYXNoKERFRkFVTFRfRVhBTVBMRSk7XG4gICAgICBpZnJhbWUubG9hZEluSWZyYW1lKERFRkFVTFRfRVhBTVBMRSk7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG4gIGNhc2UoXCIvZG9jc1wiKToge1xuICAgIGNvbnNvbGUubG9nKFwiZG9jc1wiKTtcbiAgICBicmVhaztcbiAgfVxuICBjYXNlKFwiL21hdGhzXCIpOiB7XG4gICAgY29uc29sZS5sb2coXCJtYXRoc1wiKTtcbiAgICBicmVhaztcbiAgfVxuICBkZWZhdWx0OiB7XG4gICAgY29uc29sZS5sb2coXCJubyByb3V0ZSBtYXRjaGVkIDQwNCA6KFwiKTtcbiAgfVxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvYXBwLmpzIiwiICBjb25zdCBGSVJTVF9JRlJBTUUgPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlmcmFtZUhhbmRsZXIoZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50O1xuXG4gIGNvbnN0IGRvbUhlbHBlciA9IHJlcXVpcmUoXCIuL2RvbV9oZWxwZXJcIikoZG9jdW1lbnQpO1xuICBjb25zdCBzaGltcyA9IHJlcXVpcmUoXCIuL3NoaW1zXCIpKGRvY3VtZW50KTtcblxuICBjb25zdCAkID0gc2hpbXMuJDtcbiAgY29uc3QgJCQgPSBzaGltcy4kJDtcbiAgXG4gIGxldCBmaXJzdFN0YXRlID0gRklSU1RfSUZSQU1FO1xuXG4gIC8qKlxuICAgKiBbZmV0Y2hFeGFtcGxlIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGlkIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBmZXRjaEV4YW1wbGUgPSBmdW5jdGlvbiBmZXRjaEV4YW1wbGUoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goXCIvZXhhbXBsZXMvXCIgKyBpZClcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKGZ1bmN0aW9uKHR4dCkge1xuICAgICAgICByZXR1cm4gdHh0O1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBbd3JpdGVGcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBwYXJlbnQgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGZyYW1lICBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IHdyaXRlRnJhbWUgPSBmdW5jdGlvbiB3cml0ZUZyYW1lKHBhcmVudCwgZnJhbWUpIHtcbiAgICBpZiAoIWRvbUhlbHBlci5pc0VsZW1lbnQocGFyZW50KSB8fCAhZG9tSGVscGVyLmlzRWxlbWVudChmcmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwYXJlbnQgKyBcIiB0aGlzIHBhcmVudCBpc24ndCBhIERPTSBlbGVtZW50LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZChmcmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtnZXRGcmFtZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBuYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGdldEZyYW1lID0gZnVuY3Rpb24gZ2V0RnJhbWUobmFtZSkge1xuICAgIGlmICghbmFtZSkgcmV0dXJuICQoXCJpZnJhbWVbZGF0YS1leGFtcGxlXVwiKTtcbiAgICByZXR1cm4gJChcImlmcmFtZVtkYXRhLWV4YW1wbGVePVwiICsgbmFtZSArIFwiXVwiKTtcbiAgfTtcblxuICAvKipcbiAgICogW2luamVjdFNyYyBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBzcmMgICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZnJhbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGluamVjdFNyYyA9IGZ1bmN0aW9uIGluamVjdFNyYyhzcmMsIGZyYW1lKSB7XG4gICAgZnJhbWUuc3JjZG9jID0gc3JjO1xuICAgIHJldHVybiBmcmFtZTtcbiAgfTtcblxuICAvKipcbiAgICogW2NyZWF0ZUZyYW1lIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5hbWUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgY3JlYXRlRnJhbWUgPSBmdW5jdGlvbiBjcmVhdGVGcmFtZShuYW1lKSB7XG4gICAgaWYgKCFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArIFwiIE5vdCBhIHZhbGlkIG5hbWUgZm9yIGEgaWQuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiYWxsb3ctc2FtZS1vcmlnaW5cIiwgdHJ1ZSk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93LXNjcmlwdHNcIiwgdHJ1ZSk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCB0cnVlKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmcmFtZV9leGFtcGxlXCIpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWV4YW1wbGVcIiwgbmFtZSk7XG5cbiAgICByZXR1cm4gaWZyYW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbcmVtb3ZlRnJhbWVTcmMgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gdGFyZ2V0IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3QgcmVtb3ZlRnJhbWVTcmMgPSBmdW5jdGlvbiByZW1vdmVGcmFtZVNyYyh0YXJnZXQpIHtcbiAgICBpZiAoIXRhcmdldCkgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSB0YXJnZXRcIik7XG5cbiAgICBpZiAoIWRvbUhlbHBlci5pc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGdldEZyYW1lKHRhcmdldCkuc3JjRG9jID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC5zcmNEb2MgPSBcIlwiO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbZXhhbXBsZUV4aXN0cyBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBleGFtcGxlIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0IGV4YW1wbGVFeGlzdHMgPSBmdW5jdGlvbiBleGFtcGxlRXhpc3RzKGV4YW1wbGUpIHtcbiAgICBpZiAoIWV4YW1wbGUpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBpZDtcblxuICAgIHRyeSB7XG4gICAgICBpZCA9IGdldEZyYW1lKGV4YW1wbGUpXG4gICAgICAgIC5hdHRyaWJ1dGVzW1wiZGF0YS12YWx1ZVwiXVxuICAgICAgICAubm9kZVZhbHVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHJldHVybiBpZCA9PT0gZXhhbXBsZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtsb2FkSW5JZnJhbWUgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbmFtZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdCBsb2FkSW5JZnJhbWUgPSBmdW5jdGlvbiBsb2FkSW5JZnJhbWUoaWQpIHtcbiAgICAvLyBJZiB0aGUgZXhhbXBsZSBhbHJlYWR5IGV4c2lzdHMgZG9udCBkbyBhbnl0aGluZy5cbiAgICBpZiAoIWV4YW1wbGVFeGlzdHMoaWQpKSB7XG4gICAgICAvLyBJZiB3ZSBhcmUgbm90IHRoZSBmaXJzdCBmcmFtZSBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICBpZiAoIWZpcnN0U3RhdGUpIHtcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBzdGF0ZSBhbmQgcmVtb3ZlIG9sZCBzcmMgYW5kIGluamVjdCBuZXcgc3JjLlxuICAgICAgICBjb25zdCBleGlzdGluZ0ZyYW1lID0gZ2V0RnJhbWUoKTtcbiAgICAgICAgcmVtb3ZlRnJhbWVTcmMoZXhpc3RpbmdGcmFtZSk7XG4gICAgICAgIHJldHVybiBmZXRjaEV4YW1wbGUoaWQpXG4gICAgICAgICAgLnRoZW4oKHNyYykgPT4gaW5qZWN0U3JjKHNyYywgZXhpc3RpbmdGcmFtZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSB0aGUgc3RhdGUuXG4gICAgICBmaXJzdFN0YXRlID0gIWZpcnN0U3RhdGU7XG4gICAgICAvLyBDcmVhdGUgdGhlIGZyYW1lXG4gICAgICBjb25zdCBmaXJzdEZyYW1lID0gY3JlYXRlRnJhbWUoaWQpO1xuICAgICAgY29uc3QgcGFyZW50RGl2ID0gJChcIi5mcmFtZV9jb250YWluZXJcIik7XG4gICAgICAvLyBJZiB3ZSBhcmUgbm90IHRoZSBmaXJzdCBmcmFtZSBvZiB0aGUgZG9jdW1lbnQgZG8gdGhpcyByZWd1bGFyIHN0dWZmLlxuICAgICAgcmV0dXJuIGZldGNoRXhhbXBsZShpZClcbiAgICAgICAgLnRoZW4oKHNyYykgPT4gaW5qZWN0U3JjKHNyYywgZmlyc3RGcmFtZSkpXG4gICAgICAgIC50aGVuKChuZXdGcmFtZSkgPT4gd3JpdGVGcmFtZShwYXJlbnREaXYsIG5ld0ZyYW1lKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG5cbiAgcmV0dXJuIHtcbiAgICByZW1vdmVGcmFtZVNyYyxcbiAgICB3cml0ZUZyYW1lLFxuICAgIGdldEZyYW1lLFxuICAgIGluamVjdFNyYyxcbiAgICBjcmVhdGVGcmFtZSxcbiAgICBsb2FkSW5JZnJhbWUsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NyYy9tb2R1bGUvaWZyYW1lTWFuYWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gIGRvY3VtZW50ID0gZG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudDtcblxuICBjb25zdCBzaGltcyA9IHJlcXVpcmUoXCJzaGltc1wiKShkb2N1bWVudCk7XG4gIGNvbnN0ICQkID0gc2hpbXMuJCQ7XG5cbiAgLyoqXG4gICAqIGlzRWxlbWVudCBjaGVja3MgaWYgYSBlbGVtZW50IGlzIGEgRE9NIG5vZGUuXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG9ialxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNFbGVtZW50ID0gZnVuY3Rpb24gaXNFbG0ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBtYXBUZXh0IHRha2VzIGFuIGVsbWVudCBsaXN0IGFuZCByZXR1cm4gYSBhcnJheSBvZiB0ZXh0Tm9kZXMuXG4gICAqIEBwYXJhbSAge0RPTUVsZW1lbXR9IGVsbSAgIERPTUVsZW1lbXRcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgQXJyYXlcbiAgICovXG4gIGNvbnN0IG1hcFRleHQgPSBmdW5jdGlvbiBtYXBUZXh0KGVsbSkge1xuICAgIGNvbnN0IGVsbUxpc3QgPSAkJChlbG0sIGRvY3VtZW50KTtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXTtcblxuICAgIC8qXG4gICAgICBXZSBuZWVkIHRvIHVzZSBhIGZvciBgb2ZgIGxvb3AgaGVyZSBjYXVzZSBpdHMgYSBOb2RlTGlzdCBhbmQgbm90IGFuXG4gICAgICBhcnJheS5cbiAgICAqL1xuICAgIGZvciAobGV0IGl0ZW0gb2YgZWxtTGlzdCkge1xuICAgICAgdGV4dE5vZGVzLnB1c2goaXRlbS50ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dE5vZGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBlbG1EZWxlZ2F0b3IgZGVsZWdhdGUgaXRlbXNcbiAgICogQHBhcmFtICB7RE9NRWxlbWVudH0gZWxtICAgICAgICAgVGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBkZWxlZ2F0ZXMuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgIGNoZWNrVGFyZ2V0IEJvb2xlYW4gdG8gY2hlY2sgd2hpY2ggZWxlbWVudHMgdG8gZGVsZWdhdGUgdG8uXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgIGNhbGxiYWNrICAgIEEgY2FsbGJhY2sgdGhhdCBpcyBwYXNzZWQgYSBlcnJvciBhcyBpdHMgZmlyc3RcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndWdtZXQgYW5kIHNlY29uZCBhcmd1bWVudCBhcyB0aGUgZGVsZWdhdGUuXG4gICAqL1xuICBjb25zdCBlbG1EZWxlZ2F0b3IgPSBmdW5jdGlvbiBlbG1EZWxlZ2F0b3IoZWxtLCBldmVudCwgY2hlY2tUYXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFpc0VsZW1lbnQoZWxtKSkgdGhyb3cgbmV3IEVycm9yKGVsbSArIFwiIG5lZWRzIHRvIGJlIGEgZWxlbWVudC5cIik7XG4gICAgaWYgKGVsbS5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihlbG0gKyBcIiBuZWVkcyB0byBiZSBlbGVtZW50IGxpc3RcIik7XG5cbiAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoY2hlY2tUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBlLnRhcmdldCwgZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoXCJObyB0YXJnZXQgbWF0Y2hlZFwiKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtlbG1EZWxlZ2F0b3IsIG1hcFRleHQsIGlzRWxlbWVudH07XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc3JjL21vZHVsZS9kb21faGVscGVyLmpzIiwiLyogc2hpbXMgKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbXMoZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50O1xuXG4gIGNvbnN0ICQgPSBmdW5jdGlvbiBxcyhzZWxlY3RvciwgYmFzZU5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciwgYmFzZU5vZGUpO1xuICB9O1xuXG4gIGNvbnN0ICQkID0gZnVuY3Rpb24gcXNBbGwoc2VsZWN0b3IsIGJhc2VOb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IsIGJhc2VOb2RlKTtcbiAgfTtcblxuICByZXR1cm4geyQsICQkfTtcbn07XG4vKiBzaGltcyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NyYy9tb2R1bGUvc2hpbXMuanMiXSwic291cmNlUm9vdCI6IiJ9