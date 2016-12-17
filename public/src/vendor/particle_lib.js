(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["particle"] = factory();
	else
		root["particle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Vector = __webpack_require__(2);
	var Particle = __webpack_require__(3);
	var Utils = __webpack_require__(5);
	var Shapes = __webpack_require__(6);
	
	module.exports = {
	  Vector: Vector,
	  Particle: Particle,
	  Utils: Utils,
	  Shapes: Shapes
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var INITIAL_STATE = {
	  x: 0,
	  y: 1
	};
	
	/**
	 * Vector
	 * @param {Object} state object.
	 */
	function Vector() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
	  this.state = state;
	};
	
	/**
	 * Create - Easy way to instantiate a vector.
	 * @param  {Int} x
	 * @param  {Int} y
	 * @return {Vector}   A object inheriting from Vector.
	 */
	Vector.prototype.create = function create(x, y) {
	  var vec = new Vector({ x: x, y: y });
	  return vec;
	};
	
	/**
	 * Set - A setter for the vector class.
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
	 * @param  {String} prop 	The prop to set on state.
	 * @return {Value} 				The value assosiated with the prop.
	 */
	Vector.prototype.get = function get(prop) {
	  return this.state[prop];
	};
	
	/**
	 * setAngle - Plot the corrdinates based on radians given.
	 * @param {Radians}	rad A floating point number.
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
	 * @return {Integer} - Cooridinates.
	 */
	Vector.prototype.getLength = function getLength() {
	  var x = this.get("x");
	  var y = this.get("y");
	  return Math.hypot(x, y);
	};
	
	/**
	 * getAngle - Get the angle of coordinates from center plane.
	 * @return {Integer} - Cooridinates.
	 */
	Vector.prototype.getAngle = function getAngle() {
	  var x = this.get("x");
	  var y = this.get("y");
	  return Math.atan2(y, x);
	};
	
	/**
	 * add - Should add vectors together given a vector
	 * @name add
	 * @override ["+"]
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
	 * ie: {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
	 * @name subtract
	 * @override ["-"]
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector} A vector that contains a reduced state.
	 */
	Vector.prototype.subtract = Vector.prototype["-"] = function (v2) {
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
	 * ie: {x: 2, y: 2} * {x: 2, y: 2} = {x: 4, y: 4}
	 * @name multiply
	 * @override ["*"]
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector}    A vector that contains a reduced state.
	 */
	Vector.prototype.multiply = Vector.prototype["*"] = function (v2) {
	  return this.create(this.get("x") * v2.get("x"), this.get("y") * v2.get("y"));
	};
	
	/**
	 * Divide vectors together.
	 * @name Divide
	 * @override ["/"]
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector}    A vector that contains a reduced state.
	 */
	Vector.prototype.divide = Vector.prototype["/"] = function (v2) {
	  return this.create(this.get("x") / v2.get("x"), this.get("y") / v2.get("y"));
	};
	
	/**
	 * Adds to current state the state of v2
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.addTo = Vector.prototype["+="] = function (v2) {
	  this.state.x = this.get("x") + v2.get("x");
	  this.state.y = this.get("y") + v2.get("y");
	  return this.state;
	};
	
	/**
	 * Subtracts from current state the state of v2
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.subtractFrom = Vector.prototype["-="] = function (v2) {
	  this.state.x = this.get("x") - v2.get("x");
	  this.state.y = this.get("y") - v2.get("y");
	  return this.state;
	};
	
	/**
	 * mulitplies by current state the state of v2
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.multiplyBy = Vector.prototype["*="] = function (v2) {
	  this.state.x = this.get("x") * v2.get("x");
	  this.state.y = this.get("y") * v2.get("y");
	  return this.state;
	};
	
	/**
	 * Divides by current state the state of v2
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.divideBy = Vector.prototype["/="] = function (v2) {
	  this.state.x = this.get("x") / v2.get("x");
	  this.state.y = this.get("y") / v2.get("y");
	  return this.state;
	};
	
	module.exports = Vector;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * The particle libary is used for physics animations.
	 * they are not extremely accurate but still represent
	 * and feel like physical movments.
	 */
	var extend = __webpack_require__(4);
	
	// The default state a particle starts with It should not move.
	var INITIAL_STATE = {
	  position: null,
	  velocity: null,
	  gravity: null,
	  radius: 0,
	  mass: 1
	};
	
	/**
	 * Particle constructor
	 * @param {state} state initial state to pass the constructor
	 */
	function Particle() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
	  this.state = state;
	}
	
	/**
	 * get - A getter for the particles state.
	 * @param  {String} prop
	 * @return {Value}  A value assosiated with the property.
	 */
	Particle.prototype.get = function get(prop) {
	  return this.state[prop];
	};
	
	/**
	 * set - A setter for the particles state.
	 * @param {[type]} prop [description]
	 * @param {[type]} val  [description]
	 * @return {Boolean} 		A boolean to tell wether the property
	 *                      exsist on the inital state
	 */
	Particle.prototype.set = function set(prop, val) {
	  if (this.state.hasOwnProperty(prop)) {
	    this.state[prop] = val;
	    return true;
	  }
	
	  return false;
	};
	
	/**
	 * Create constructor
	 * @param  {Object} 	opts 	optional state values to pass to create.
	 * @return {Particle}     		returns a particle
	 */
	Particle.prototype.create = function () {
	  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
	  // A really basic flat level extend.
	  opts = extend(true, {}, INITIAL_STATE, opts);
	  var particle = new Particle(opts);
	  return particle;
	};
	
	/**
	 * Accelerate - A change in velocity.
	 * @param  {Vector} accel The change in distance / time
	 * @return {Value} 	state of the particle after accelerating.
	 */
	Particle.prototype.accelerate = function accelerate(accel) {
	  this.get("velocity").addTo(accel);
	  return this.get("velocity");
	};
	
	/**
	 * Update - A update a position of a particle
	 * based on its gravity. Gravity is usually a acceleration
	 * vector.
	 *
	 * @param  {Vector} grav gravity given.
	 * @return {State}       state of position
	 */
	Particle.prototype.update = function update() {
	  var grav = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.get("gravity");
	
	  var velocity = this.accelerate(grav);
	  var position = this.get("position").addTo(velocity);
	  return position;
	};
	
	/**
	 * angleTo - Asumming we know where
	 * the other particle is on the canvas. can use
	 * the angle formulae to figure out the angle
	 * between two particle. Using arctangent is fine.
	 * but because the corrdinate plane is filped on the
	 * Y axis we use atan2 to get the right values. Explained
	 * in API Docs.
	 *
	 * @param  {Particle} p2 			A particle instance.
	 * @return {Integer}  Angle  	A angle.
	 */
	Particle.prototype.angleTo = function angelTo(p2) {
	  var dx = p2.get("position").get("x") - this.get("position").get("x");
	  var dy = p2.get("position").get("y") - this.get("position").get("y");
	  return Math.atan2(dy, dx);
	};
	
	/**
	 * distanceTo - particle.
	 * Assuming we know where both particle are on the canvas.
	 * we can use the distance formuale to figure out the distance
	 * between the two particles.
	 *
	 * @param  {Particle} p2 			A particle instance
	 * @return {Integer}  Angle  	A Distance
	 */
	Particle.prototype.distanceTo = function distanceTo(p2) {
	  var deltaX = p2.get("position").get("x") - this.get("position").get("x");
	  var deltaY = p2.get("position").get("y") - this.get("position").get("y");
	  return Math.hypot(deltaX, deltaY);
	};
	
	/**
	 * gravitateTo - Creates a gravity vector if he
	 * @param  {Particle} p2     			A particle instance.
	 * @param  {Vector} 	vector 			A vector instance.
	 * @return {Vector}   veclocity 	The velocity of the current state.
	 */
	Particle.prototype.gravitateTo = function (p2, vector) {
	  var grav = this.get("gravity") === null ? vector.create(0, 0) : this.get("gravity");
	
	  var dist = this.distanceTo(p2);
	  var velocity = this.get("velocity");
	
	  grav.setLength(p2.mass / (dist * dist));
	  grav.setAngle(this.angleTo(p2));
	
	  velocity["+="](grav);
	  return velocity;
	};
	
	module.exports = Particle;

/***/ },
/* 4 */
/***/ function(module, exports) {

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
		var options, name, src, copy, copyIsArray, clone,
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
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
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
	


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * This module is composed of small function that
	 * should be used when needed. Most functions are pure
	 * and only return values. For more info read the docs.
	 */
	
	/**
	 * Utils constructor
	 * @return {Self} it self
	 */
	function Utils() {
	  return this;
	};
	
	/**
	 * normalize - Takes a max and min value and returns
	 * the a floating point number that when multiplied
	 * by one hundred represents a precentage of the range
	 * between max and min.
	 *
	 * @param  {Int} val - The value that lies in the range.
	 * @param  {Int} max - The maxium value in the range.
	 * @param  {Int} min - The minimum value in the range.
	 * @return {Int} Int - The value represented in that range.
	 */
	Utils.prototype.normalize = function normalize(val, max, min) {
	  return (val - min) / (max - min);
	};
	
	Utils.prototype.lerp = function lerp(val, min, max) {};
	
	/**
	 * precent - Takes a value and returns a precentage.
	 * you can pass arbitrary large numbers in but thats not
	 * the intended purpose of this function.
	 *
	 * @param  {Float} val 	A value.
	 * @return {Percent}    A value.
	 */
	Utils.prototype.precent = function (val) {
	  return val * 100;
	};
	
	module.exports = Utils;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Shapes constuctor
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
	 * circle - Draws a simples circle
	 * @param  {Number} x     The x coordinate of the circle.
	 * @param  {Number} y     The y coordinate of the circle.
	 * @param  {Number} r     The radius of the circle.
	 * @param  {String} color The color of the circle.
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
	
	module.exports = Shapes;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkZDcwMDRlNjY4MmM1MjJmNGJkNSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9wYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2V4dGVuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2hhcGVzLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsInJlcXVpcmUiLCJQYXJ0aWNsZSIsIlV0aWxzIiwiU2hhcGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIklOSVRJQUxfU1RBVEUiLCJ4IiwieSIsInN0YXRlIiwicHJvdG90eXBlIiwiY3JlYXRlIiwidmVjIiwic2V0IiwicHJvcCIsInZhbCIsImhhc093blByb3BlcnR5IiwiZ2V0Iiwic2V0QW5nbGUiLCJyYWQiLCJsZW5ndGgiLCJnZXRMZW5ndGgiLCJNYXRoIiwiY29zIiwic2luIiwic2V0TGVuZ3RoIiwiZ2V0QW5nbGUiLCJoeXBvdCIsImF0YW4yIiwiYWRkIiwidjIiLCJzZWxmIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidmVjcyIsIm1hcCIsInYiLCJyZWR1Y2UiLCJ2MCIsInZuIiwic3VidHJhY3QiLCJtdWx0aXBseSIsImRpdmlkZSIsImFkZFRvIiwic3VidHJhY3RGcm9tIiwibXVsdGlwbHlCeSIsImRpdmlkZUJ5IiwiZXh0ZW5kIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImdyYXZpdHkiLCJyYWRpdXMiLCJtYXNzIiwib3B0cyIsInBhcnRpY2xlIiwiYWNjZWxlcmF0ZSIsImFjY2VsIiwidXBkYXRlIiwiZ3JhdiIsImFuZ2xlVG8iLCJhbmdlbFRvIiwicDIiLCJkeCIsImR5IiwiZGlzdGFuY2VUbyIsImRlbHRhWCIsImRlbHRhWSIsImdyYXZpdGF0ZVRvIiwidmVjdG9yIiwiZGlzdCIsIm5vcm1hbGl6ZSIsIm1heCIsIm1pbiIsImxlcnAiLCJwcmVjZW50IiwiY3R4IiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsImNpcmNsZSIsImRyYXdDaXJjbGUiLCJyIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNQSxTQUFTLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjtBQUNBLEtBQU1DLFdBQVcsbUJBQUFELENBQVEsQ0FBUixDQUFqQjtBQUNBLEtBQU1FLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkO0FBQ0EsS0FBTUcsU0FBUyxtQkFBQUgsQ0FBUSxDQUFSLENBQWY7O0FBRUFJLFFBQU9DLE9BQVAsR0FBaUI7QUFDZk4saUJBRGU7QUFFZkUscUJBRmU7QUFHZkMsZUFIZTtBQUlmQztBQUplLEVBQWpCLEM7Ozs7Ozs7O0FDTEEsS0FBTUcsZ0JBQWdCO0FBQ3BCQyxNQUFHLENBRGlCO0FBRXBCQyxNQUFHO0FBRmlCLEVBQXRCOztBQUtBOzs7O0FBSUEsVUFBU1QsTUFBVCxHQUFxQztBQUFBLE9BQXJCVSxLQUFxQix1RUFBZkgsYUFBZTs7QUFDbkMsUUFBS0csS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BVixRQUFPVyxTQUFQLENBQWlCQyxNQUFqQixHQUEwQixTQUFTQSxNQUFU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QmdFLE9BQWhCLEdBQTBCLFVBQVMzRCxHQUFULEVBQWM7QUFDdEMsVUFBT0EsTUFBTSxHQUFiO0FBQ0QsRUFGRDs7QUFJQVgsUUFBT0MsT0FBUCxHQUFpQkgsS0FBakIsQzs7Ozs7Ozs7QUM3Q0E7Ozs7O0FBS0EsVUFBU0MsTUFBVCxDQUFnQndFLEdBQWhCLEVBQXFCQyxRQUFyQixFQUErQjtBQUM3QixPQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSLFdBQU0sSUFBSUUsS0FBSixDQUFVLG9EQUFWLENBQU47QUFDRDtBQUNELFFBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFFBQUtDLFFBQUwsR0FBZ0JBLFlBQVlFLE9BQU9GLFFBQW5DO0FBQ0Q7O0FBRUQ7Ozs7Ozs7QUFPQXpFLFFBQU9PLFNBQVAsQ0FBaUJxRSxNQUFqQixHQUEwQixTQUFTQyxVQUFULEdBQW9EO0FBQUEsT0FBaEN6RSxDQUFnQyx1RUFBOUIsQ0FBOEI7QUFBQSxPQUEzQkMsQ0FBMkIsdUVBQXpCLENBQXlCO0FBQUEsT0FBdEJ5RSxDQUFzQix1RUFBcEIsQ0FBb0I7QUFBQSxPQUFqQkMsS0FBaUIsdUVBQVgsU0FBVzs7QUFDNUUsUUFBS1AsR0FBTCxDQUFTUSxTQUFULEdBQXFCRCxLQUFyQjtBQUNBLFFBQUtQLEdBQUwsQ0FBU1MsU0FBVDtBQUNBLFFBQUtULEdBQUwsQ0FBU1UsR0FBVCxDQUFhOUUsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJ5RSxDQUFuQixFQUFzQixDQUF0QixFQUF5QjNELEtBQUtnRSxFQUFMLEdBQVUsQ0FBbkMsRUFBc0MsS0FBdEM7QUFDQSxRQUFLWCxHQUFMLENBQVNZLElBQVQ7QUFDRCxFQUxEOztBQU9BbkYsUUFBT0MsT0FBUCxHQUFpQkYsTUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGQ3MDA0ZTY2ODJjNTIyZjRiZDUiLCJjb25zdCBWZWN0b3IgPSByZXF1aXJlKFwiLi9saWIvdmVjdG9yc1wiKTtcbmNvbnN0IFBhcnRpY2xlID0gcmVxdWlyZShcIi4vbGliL3BhcnRpY2xlXCIpO1xuY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi9saWIvdXRpbHNcIik7XG5jb25zdCBTaGFwZXMgPSByZXF1aXJlKFwiLi9saWIvc2hhcGVzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVmVjdG9yLFxuICBQYXJ0aWNsZSxcbiAgVXRpbHMsXG4gIFNoYXBlcyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsImNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHg6IDAsXG4gIHk6IDEsXG59O1xuXG4vKipcbiAqIFZlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gVmVjdG9yKHN0YXRlPUlOSVRJQUxfU1RBVEUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgLSBFYXN5IHdheSB0byBpbnN0YW50aWF0ZSBhIHZlY3Rvci5cbiAqIEBwYXJhbSAge0ludH0geFxuICogQHBhcmFtICB7SW50fSB5XG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgQSBvYmplY3QgaW5oZXJpdGluZyBmcm9tIFZlY3Rvci5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoeCwgeSkge1xuICBjb25zdCB2ZWMgPSBuZXcgVmVjdG9yKHt4LCB5fSk7XG4gIHJldHVybiB2ZWM7XG59O1xuXG4vKipcbiAqIFNldCAtIEEgc2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICogQHBhcmFtICB7Kn0gcHJvcFxuICogQHBhcmFtICB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtCb29sZWFufSBJcyB0aGUgcHJvcCB5b3VyIHBhc3NpbmcgaW4gZXhzaXN0LlxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wLCB2YWwpIHtcblx0Ly8gVE9ETzogQWRkIGNoZWNrIHZhbCBpcyBudW1iZXJcblx0Ly8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgdGhpcy5zdGF0ZVtwcm9wXSA9IHZhbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogZ2V0IC0gQSBnZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3AgXHRUaGUgcHJvcCB0byBzZXQgb24gc3RhdGUuXG4gKiBAcmV0dXJuIHtWYWx1ZX0gXHRcdFx0XHRUaGUgdmFsdWUgYXNzb3NpYXRlZCB3aXRoIHRoZSBwcm9wLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChwcm9wKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlW3Byb3BdO1xufTtcblxuLyoqXG4gKiBzZXRBbmdsZSAtIFBsb3QgdGhlIGNvcnJkaW5hdGVzIGJhc2VkIG9uIHJhZGlhbnMgZ2l2ZW4uXG4gKiBAcGFyYW0ge1JhZGlhbnN9XHRyYWQgQSBmbG9hdGluZyBwb2ludCBudW1iZXIuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc2V0QW5nbGUgPSBmdW5jdGlvbiBzZXRBbmdsZShyYWQpIHtcblx0Ly8gVE9ETzogQWRkIGNoZWNrIHJhZCBpcyBudW1iZXJcblx0Ly8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgdGhpcy5zZXQoXCJ4XCIsIE1hdGguY29zKHJhZCkgKiBsZW5ndGgpO1xuICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG59O1xuXG4vKipcbiAqIHNldExlbmd0aCAtIFRha2VzIGEgbGVuZ3RoIGFuZCBzZXRzIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGxlbmd0aFxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldExlbmd0aCA9IGZ1bmN0aW9uIHNldExlbmd0aChsZW5ndGgpIHtcblx0Ly8gVE9ETzogQWRkIGNoZWNrIHJhZCBpcyBudW1iZXJcblx0Ly8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGNvbnN0IHJhZCA9IHRoaXMuZ2V0QW5nbGUoKTtcblxuICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gIHRoaXMuc2V0KFwieVwiLCBNYXRoLnNpbihyYWQpICogbGVuZ3RoKTtcbn07XG5cbi8qKlxuICogZ2V0TGVuZ3RoIC0gR2V0cyBsZW5ndGggb2YgdGhlIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICogQHJldHVybiB7SW50ZWdlcn0gLSBDb29yaWRpbmF0ZXMuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICBjb25zdCB4ID0gdGhpcy5nZXQoXCJ4XCIpO1xuICBjb25zdCB5ID0gdGhpcy5nZXQoXCJ5XCIpO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5KTtcbn07XG5cbi8qKlxuICogZ2V0QW5nbGUgLSBHZXQgdGhlIGFuZ2xlIG9mIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICogQHJldHVybiB7SW50ZWdlcn0gLSBDb29yaWRpbmF0ZXMuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiBnZXRBbmdsZSgpIHtcbiAgY29uc3QgeCA9IHRoaXMuZ2V0KFwieFwiKTtcbiAgY29uc3QgeSA9IHRoaXMuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG59O1xuXG4vKipcbiAqIGFkZCAtIFNob3VsZCBhZGQgdmVjdG9ycyB0b2dldGhlciBnaXZlbiBhIHZlY3RvclxuICogQG5hbWUgYWRkXG4gKiBAb3ZlcnJpZGUgW1wiK1wiXVxuICogQHBhcmFtIHtWZWN0b3J9IC0gQSBnaXZlbiB2ZWN0b3IgdG8gYWRkLlxuICogQHJldHVybiB7VmVjdG9yfSAtIEEgdmVjdG9yIHdpdGggY29vcmlkbmF0ZXMsIG9yIG11bHRpcGxlIHZlY3RvcnMuXG4gKi9cblxuVmVjdG9yLnByb3RvdHlwZS5hZGQgPSBWZWN0b3IucHJvdG90eXBlW1wiK1wiXSA9IGZ1bmN0aW9uIGFkZCh2Mikge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICBpZiAodjIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheVwiICYmIHYyLmxlbmd0aCkge1xuXHRcdC8vIFJlZmFjdG9yIHRvIG1ha2UgbW9yZSBlZmZlY2llbnQgLy9cbiAgICBjb25zdCB2ZWNzID0gdjIubWFwKCh2KSA9PiAoe3g6IHYuZ2V0KFwieFwiKSwgeTogdi5nZXQoXCJ5XCIpfSkpXG5cdFx0LnJlZHVjZSgodjAsIHZuKSA9PlxuXHRcdFx0KHt4OiB2MC54ICsgdm4ueCwgeTogdjAueSArIHZuLnl9KSxcblx0XHRzZWxmLnN0YXRlKTtcblxuICAgIHJldHVybiBzZWxmLmNyZWF0ZSh2ZWNzLngsIHZlY3MueSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGUoXG5cdFx0c2VsZi5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKSxcblx0XHRzZWxmLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpXG5cdCk7XG59O1xuXG4vKipcbiAqIHN1YnRyYWN0IC0gc2hvdWxkIHN1YnRyYWN0IHRoZSBnaXZlbiB2ZWN0b3Igd2l0aCBpdHMgb3duIHZlY3Rvci5cbiAqIGllOiB7eDogMiwgeTogMn0gLSB7eDogMiwgeTogMn0gPSB7eDogMCwgeTogMH1cbiAqIEBuYW1lIHN1YnRyYWN0XG4gKiBAb3ZlcnJpZGUgW1wiLVwiXVxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IFZlY3Rvci5wcm90b3R5cGVbXCItXCJdID0gZnVuY3Rpb24odjIpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHYyLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIiAmJiB2Mi5sZW5ndGgpIHtcblx0XHQvLyBSZWZhY3RvciB0byBtYWtlIG1vcmUgZWZmZWNpZW50IC8vXG4gICAgY29uc3QgdmVjcyA9IHYyLm1hcCgodikgPT4gKHt4OiB2LmdldChcInhcIiksIHk6IHYuZ2V0KFwieVwiKX0pKVxuXHRcdC5yZWR1Y2UoKHYwLCB2bikgPT5cblx0XHRcdCh7eDogdjAueCAtIHZuLngsIHk6IHYwLnkgLSB2bi55fSksXG5cdFx0c2VsZi5zdGF0ZSk7XG5cbiAgICByZXR1cm4gc2VsZi5jcmVhdGUodmVjcy54LCB2ZWNzLnkpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuXHRcdHNlbGYuZ2V0KFwieFwiKSAtIHYyLmdldChcInhcIiksXG5cdFx0c2VsZi5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKVxuXHQpO1xufTtcblxuLyoqXG4gKiBNdWxpdHBseWluZyB2ZWN0b3JzIHRvZ2V0aGVyXG4gKiBpZToge3g6IDIsIHk6IDJ9ICoge3g6IDIsIHk6IDJ9ID0ge3g6IDQsIHk6IDR9XG4gKiBAbmFtZSBtdWx0aXBseVxuICogQG92ZXJyaWRlIFtcIipcIl1cbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gICAgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHkgPSBWZWN0b3IucHJvdG90eXBlW1wiKlwiXSA9IGZ1bmN0aW9uKHYyKSB7XG4gIHJldHVybiB0aGlzLmNyZWF0ZShcblx0XHR0aGlzLmdldChcInhcIikgKiB2Mi5nZXQoXCJ4XCIpLFxuXHRcdHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIilcblx0KTtcbn07XG5cbi8qKlxuICogRGl2aWRlIHZlY3RvcnMgdG9nZXRoZXIuXG4gKiBAbmFtZSBEaXZpZGVcbiAqIEBvdmVycmlkZSBbXCIvXCJdXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmRpdmlkZSA9IFZlY3Rvci5wcm90b3R5cGVbXCIvXCJdID0gZnVuY3Rpb24odjIpIHtcbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuXHRcdHRoaXMuZ2V0KFwieFwiKSAvIHYyLmdldChcInhcIiksXG5cdFx0dGhpcy5nZXQoXCJ5XCIpIC8gdjIuZ2V0KFwieVwiKVxuXHQpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRvIGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLmFkZFRvID0gVmVjdG9yLnByb3RvdHlwZVtcIis9XCJdID0gZnVuY3Rpb24odjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICsgdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0cyBmcm9tIGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0RnJvbSA9IFZlY3Rvci5wcm90b3R5cGVbXCItPVwiXSA9IGZ1bmN0aW9uKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAtIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBtdWxpdHBsaWVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnkgPSBWZWN0b3IucHJvdG90eXBlW1wiKj1cIl0gPSBmdW5jdGlvbih2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgKiB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgKiB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogRGl2aWRlcyBieSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeSA9IFZlY3Rvci5wcm90b3R5cGVbXCIvPVwiXSA9IGZ1bmN0aW9uKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAvIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3ZlY3RvcnMuanMiLCIvKipcbiAqIFRoZSBwYXJ0aWNsZSBsaWJhcnkgaXMgdXNlZCBmb3IgcGh5c2ljcyBhbmltYXRpb25zLlxuICogdGhleSBhcmUgbm90IGV4dHJlbWVseSBhY2N1cmF0ZSBidXQgc3RpbGwgcmVwcmVzZW50XG4gKiBhbmQgZmVlbCBsaWtlIHBoeXNpY2FsIG1vdm1lbnRzLlxuICovXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuXG4vLyBUaGUgZGVmYXVsdCBzdGF0ZSBhIHBhcnRpY2xlIHN0YXJ0cyB3aXRoIEl0IHNob3VsZCBub3QgbW92ZS5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHBvc2l0aW9uOiBudWxsLFxuICB2ZWxvY2l0eTogbnVsbCxcbiAgZ3Jhdml0eTogbnVsbCxcbiAgcmFkaXVzOiAwLFxuICBtYXNzOiAxLFxufTtcblxuLyoqXG4gKiBQYXJ0aWNsZSBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdGF0ZX0gc3RhdGUgaW5pdGlhbCBzdGF0ZSB0byBwYXNzIHRoZSBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZShzdGF0ZT1JTklUSUFMX1NUQVRFKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn1cblxuLyoqXG4gKiBnZXQgLSBBIGdldHRlciBmb3IgdGhlIHBhcnRpY2xlcyBzdGF0ZS5cbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcFxuICogQHJldHVybiB7VmFsdWV9ICBBIHZhbHVlIGFzc29zaWF0ZWQgd2l0aCB0aGUgcHJvcGVydHkuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQocHJvcCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZVtwcm9wXTtcbn07XG5cbi8qKlxuICogc2V0IC0gQSBzZXR0ZXIgZm9yIHRoZSBwYXJ0aWNsZXMgc3RhdGUuXG4gKiBAcGFyYW0ge1t0eXBlXX0gcHJvcCBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0ge1t0eXBlXX0gdmFsICBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtCb29sZWFufSBcdFx0QSBib29sZWFuIHRvIHRlbGwgd2V0aGVyIHRoZSBwcm9wZXJ0eVxuICogICAgICAgICAgICAgICAgICAgICAgZXhzaXN0IG9uIHRoZSBpbml0YWwgc3RhdGVcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wLCB2YWwpIHtcbiAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICB0aGlzLnN0YXRlW3Byb3BdID0gdmFsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgY29uc3RydWN0b3JcbiAqIEBwYXJhbSAge09iamVjdH0gXHRvcHRzIFx0b3B0aW9uYWwgc3RhdGUgdmFsdWVzIHRvIHBhc3MgdG8gY3JlYXRlLlxuICogQHJldHVybiB7UGFydGljbGV9ICAgICBcdFx0cmV0dXJucyBhIHBhcnRpY2xlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihvcHRzPUlOSVRJQUxfU1RBVEUpIHtcblx0Ly8gQSByZWFsbHkgYmFzaWMgZmxhdCBsZXZlbCBleHRlbmQuXG4gIG9wdHMgPSBleHRlbmQodHJ1ZSwge30sIElOSVRJQUxfU1RBVEUsIG9wdHMpO1xuICBjb25zdCBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShvcHRzKTtcbiAgcmV0dXJuIHBhcnRpY2xlO1xufTtcblxuLyoqXG4gKiBBY2NlbGVyYXRlIC0gQSBjaGFuZ2UgaW4gdmVsb2NpdHkuXG4gKiBAcGFyYW0gIHtWZWN0b3J9IGFjY2VsIFRoZSBjaGFuZ2UgaW4gZGlzdGFuY2UgLyB0aW1lXG4gKiBAcmV0dXJuIHtWYWx1ZX0gXHRzdGF0ZSBvZiB0aGUgcGFydGljbGUgYWZ0ZXIgYWNjZWxlcmF0aW5nLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYWNjZWxlcmF0ZSA9IGZ1bmN0aW9uIGFjY2VsZXJhdGUoYWNjZWwpIHtcbiAgdGhpcy5nZXQoXCJ2ZWxvY2l0eVwiKS5hZGRUbyhhY2NlbCk7XG4gIHJldHVybiB0aGlzLmdldChcInZlbG9jaXR5XCIpO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgLSBBIHVwZGF0ZSBhIHBvc2l0aW9uIG9mIGEgcGFydGljbGVcbiAqIGJhc2VkIG9uIGl0cyBncmF2aXR5LiBHcmF2aXR5IGlzIHVzdWFsbHkgYSBhY2NlbGVyYXRpb25cbiAqIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0gIHtWZWN0b3J9IGdyYXYgZ3Jhdml0eSBnaXZlbi5cbiAqIEByZXR1cm4ge1N0YXRlfSAgICAgICBzdGF0ZSBvZiBwb3NpdGlvblxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGdyYXY9dGhpcy5nZXQoXCJncmF2aXR5XCIpKSB7XG4gIGNvbnN0IHZlbG9jaXR5ID0gdGhpcy5hY2NlbGVyYXRlKGdyYXYpO1xuICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0KFwicG9zaXRpb25cIikuYWRkVG8odmVsb2NpdHkpO1xuICByZXR1cm4gcG9zaXRpb247XG59O1xuXG4vKipcbiAqIGFuZ2xlVG8gLSBBc3VtbWluZyB3ZSBrbm93IHdoZXJlXG4gKiB0aGUgb3RoZXIgcGFydGljbGUgaXMgb24gdGhlIGNhbnZhcy4gY2FuIHVzZVxuICogdGhlIGFuZ2xlIGZvcm11bGFlIHRvIGZpZ3VyZSBvdXQgdGhlIGFuZ2xlXG4gKiBiZXR3ZWVuIHR3byBwYXJ0aWNsZS4gVXNpbmcgYXJjdGFuZ2VudCBpcyBmaW5lLlxuICogYnV0IGJlY2F1c2UgdGhlIGNvcnJkaW5hdGUgcGxhbmUgaXMgZmlscGVkIG9uIHRoZVxuICogWSBheGlzIHdlIHVzZSBhdGFuMiB0byBnZXQgdGhlIHJpZ2h0IHZhbHVlcy4gRXhwbGFpbmVkXG4gKiBpbiBBUEkgRG9jcy5cbiAqXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDIgXHRcdFx0QSBwYXJ0aWNsZSBpbnN0YW5jZS5cbiAqIEByZXR1cm4ge0ludGVnZXJ9ICBBbmdsZSAgXHRBIGFuZ2xlLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYW5nbGVUbyA9IGZ1bmN0aW9uIGFuZ2VsVG8ocDIpIHtcbiAgY29uc3QgZHggPSBwMi5nZXQoXCJwb3NpdGlvblwiKS5nZXQoXCJ4XCIpIC0gdGhpcy5nZXQoXCJwb3NpdGlvblwiKS5nZXQoXCJ4XCIpO1xuICBjb25zdCBkeSA9IHAyLmdldChcInBvc2l0aW9uXCIpLmdldChcInlcIikgLSB0aGlzLmdldChcInBvc2l0aW9uXCIpLmdldChcInlcIik7XG4gIHJldHVybiBNYXRoLmF0YW4yKGR5LCBkeCk7XG59O1xuXG4vKipcbiAqIGRpc3RhbmNlVG8gLSBwYXJ0aWNsZS5cbiAqIEFzc3VtaW5nIHdlIGtub3cgd2hlcmUgYm90aCBwYXJ0aWNsZSBhcmUgb24gdGhlIGNhbnZhcy5cbiAqIHdlIGNhbiB1c2UgdGhlIGRpc3RhbmNlIGZvcm11YWxlIHRvIGZpZ3VyZSBvdXQgdGhlIGRpc3RhbmNlXG4gKiBiZXR3ZWVuIHRoZSB0d28gcGFydGljbGVzLlxuICpcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiBcdFx0XHRBIHBhcnRpY2xlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSAgQW5nbGUgIFx0QSBEaXN0YW5jZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZGlzdGFuY2VUbyA9IGZ1bmN0aW9uIGRpc3RhbmNlVG8ocDIpIHtcbiAgY29uc3QgZGVsdGFYID0gcDIuZ2V0KFwicG9zaXRpb25cIikuZ2V0KFwieFwiKSAtIHRoaXMuZ2V0KFwicG9zaXRpb25cIikuZ2V0KFwieFwiKTtcbiAgY29uc3QgZGVsdGFZID0gcDIuZ2V0KFwicG9zaXRpb25cIikuZ2V0KFwieVwiKSAtIHRoaXMuZ2V0KFwicG9zaXRpb25cIikuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZGVsdGFYLCBkZWx0YVkpO1xufTtcblxuLyoqXG4gKiBncmF2aXRhdGVUbyAtIENyZWF0ZXMgYSBncmF2aXR5IHZlY3RvciBpZiBoZVxuICogQHBhcmFtICB7UGFydGljbGV9IHAyICAgICBcdFx0XHRBIHBhcnRpY2xlIGluc3RhbmNlLlxuICogQHBhcmFtICB7VmVjdG9yfSBcdHZlY3RvciBcdFx0XHRBIHZlY3RvciBpbnN0YW5jZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gICB2ZWNsb2NpdHkgXHRUaGUgdmVsb2NpdHkgb2YgdGhlIGN1cnJlbnQgc3RhdGUuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5ncmF2aXRhdGVUbyA9IGZ1bmN0aW9uKHAyLCB2ZWN0b3IpIHtcbiAgY29uc3QgZ3JhdiA9IHRoaXMuZ2V0KFwiZ3Jhdml0eVwiKSA9PT0gbnVsbCA/XG5cdFx0KHZlY3Rvci5jcmVhdGUoMCwgMCkpIDpcblx0XHRcdCh0aGlzLmdldChcImdyYXZpdHlcIikpO1xuXG4gIGNvbnN0IGRpc3QgPSB0aGlzLmRpc3RhbmNlVG8ocDIpO1xuICBjb25zdCB2ZWxvY2l0eSA9IHRoaXMuZ2V0KFwidmVsb2NpdHlcIik7XG5cbiAgZ3Jhdi5zZXRMZW5ndGgocDIubWFzcyAvIChkaXN0ICogZGlzdCkpO1xuICBncmF2LnNldEFuZ2xlKHRoaXMuYW5nbGVUbyhwMikpO1xuXG4gIHZlbG9jaXR5W1wiKz1cIl0oZ3Jhdik7XG4gIHJldHVybiB2ZWxvY2l0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgey8qKi99XG5cblx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnIHx8IGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzBdLFxuXHRcdGkgPSAxLFxuXHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0ZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fSBlbHNlIGlmICgodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykgfHwgdGFyZ2V0ID09IG51bGwpIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdGZvciAoOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzW2ldO1xuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAob3B0aW9ucyAhPSBudWxsKSB7XG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtb2R1bGUgaXMgY29tcG9zZWQgb2Ygc21hbGwgZnVuY3Rpb24gdGhhdFxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBuZWVkZWQuIE1vc3QgZnVuY3Rpb25zIGFyZSBwdXJlXG4gKiBhbmQgb25seSByZXR1cm4gdmFsdWVzLiBGb3IgbW9yZSBpbmZvIHJlYWQgdGhlIGRvY3MuXG4gKi9cblxuLyoqXG4gKiBVdGlscyBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7U2VsZn0gaXQgc2VsZlxuICovXG5mdW5jdGlvbiBVdGlscygpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG5vcm1hbGl6ZSAtIFRha2VzIGEgbWF4IGFuZCBtaW4gdmFsdWUgYW5kIHJldHVybnNcbiAqIHRoZSBhIGZsb2F0aW5nIHBvaW50IG51bWJlciB0aGF0IHdoZW4gbXVsdGlwbGllZFxuICogYnkgb25lIGh1bmRyZWQgcmVwcmVzZW50cyBhIHByZWNlbnRhZ2Ugb2YgdGhlIHJhbmdlXG4gKiBiZXR3ZWVuIG1heCBhbmQgbWluLlxuICpcbiAqIEBwYXJhbSAge0ludH0gdmFsIC0gVGhlIHZhbHVlIHRoYXQgbGllcyBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1heCAtIFRoZSBtYXhpdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7SW50fSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcmV0dXJuIHtJbnR9IEludCAtIFRoZSB2YWx1ZSByZXByZXNlbnRlZCBpbiB0aGF0IHJhbmdlLlxuICovXG5VdGlscy5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKHZhbCwgbWF4LCBtaW4pIHtcbiAgcmV0dXJuICh2YWwgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59O1xuXG5VdGlscy5wcm90b3R5cGUubGVycCA9IGZ1bmN0aW9uIGxlcnAodmFsLCBtaW4sIG1heCkge1xuXG59O1xuXG4vKipcbiAqIHByZWNlbnQgLSBUYWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgcHJlY2VudGFnZS5cbiAqIHlvdSBjYW4gcGFzcyBhcmJpdHJhcnkgbGFyZ2UgbnVtYmVycyBpbiBidXQgdGhhdHMgbm90XG4gKiB0aGUgaW50ZW5kZWQgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAge0Zsb2F0fSB2YWwgXHRBIHZhbHVlLlxuICogQHJldHVybiB7UGVyY2VudH0gICAgQSB2YWx1ZS5cbiAqL1xuVXRpbHMucHJvdG90eXBlLnByZWNlbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHZhbCAqIDEwMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3V0aWxzLmpzIiwiLyoqXG4gKiBTaGFwZXMgY29uc3R1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IGN0eCAgICAgIENhbnZhcyBjb250ZXh0LlxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFNoYXBlcyhjdHgsIGRvY3VtZW50KSB7XG4gIGlmICghY3R4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2hhcGVzOiBQbGVhc2UgcHJvdmlkZSBhIGNvbnRleHQgYXJndW1lbnQgW2FyZzo6MV1cIik7XG4gIH1cbiAgdGhpcy5jdHggPSBjdHg7XG4gIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG59O1xuXG4vKipcbiAqIGNpcmNsZSAtIERyYXdzIGEgc2ltcGxlcyBjaXJjbGVcbiAqIEBwYXJhbSAge051bWJlcn0geCAgICAgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHIgICAgIFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgVGhlIGNvbG9yIG9mIHRoZSBjaXJjbGUuXG4gKi9cblNoYXBlcy5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gZHJhd0NpcmNsZSh4PTQsIHk9NCwgcj0yLCBjb2xvcj1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICB0aGlzLmN0eC5maWxsKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvc2hhcGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==