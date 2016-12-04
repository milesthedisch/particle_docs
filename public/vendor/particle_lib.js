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
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(1);
  module.exports = __webpack_require__(298);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global) {"use strict";
  
  __webpack_require__(2);
  
  __webpack_require__(293);
  
  __webpack_require__(295);
  
  if (global._babelPolyfill) {
    throw new Error("only one instance of babel-polyfill is allowed");
  }
  global._babelPolyfill = true;
  
  var DEFINE_PROPERTY = "defineProperty";
  function define(O, key, value) {
    O[key] || Object[DEFINE_PROPERTY](O, key, {
      writable: true,
      configurable: true,
      value: value
    });
  }
  
  define(String.prototype, "padLeft", "".padStart);
  define(String.prototype, "padRight", "".padEnd);
  
  "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
    [][key] && define(Array, key, Function.call.bind([][key]));
  });
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(3);
  __webpack_require__(52);
  __webpack_require__(53);
  __webpack_require__(54);
  __webpack_require__(55);
  __webpack_require__(57);
  __webpack_require__(60);
  __webpack_require__(61);
  __webpack_require__(62);
  __webpack_require__(63);
  __webpack_require__(64);
  __webpack_require__(65);
  __webpack_require__(66);
  __webpack_require__(67);
  __webpack_require__(68);
  __webpack_require__(70);
  __webpack_require__(72);
  __webpack_require__(74);
  __webpack_require__(76);
  __webpack_require__(79);
  __webpack_require__(80);
  __webpack_require__(81);
  __webpack_require__(85);
  __webpack_require__(87);
  __webpack_require__(89);
  __webpack_require__(92);
  __webpack_require__(93);
  __webpack_require__(94);
  __webpack_require__(95);
  __webpack_require__(97);
  __webpack_require__(98);
  __webpack_require__(99);
  __webpack_require__(100);
  __webpack_require__(101);
  __webpack_require__(102);
  __webpack_require__(103);
  __webpack_require__(105);
  __webpack_require__(106);
  __webpack_require__(107);
  __webpack_require__(109);
  __webpack_require__(110);
  __webpack_require__(111);
  __webpack_require__(113);
  __webpack_require__(114);
  __webpack_require__(115);
  __webpack_require__(116);
  __webpack_require__(117);
  __webpack_require__(118);
  __webpack_require__(119);
  __webpack_require__(120);
  __webpack_require__(121);
  __webpack_require__(122);
  __webpack_require__(123);
  __webpack_require__(124);
  __webpack_require__(125);
  __webpack_require__(126);
  __webpack_require__(131);
  __webpack_require__(132);
  __webpack_require__(136);
  __webpack_require__(137);
  __webpack_require__(138);
  __webpack_require__(139);
  __webpack_require__(141);
  __webpack_require__(142);
  __webpack_require__(143);
  __webpack_require__(144);
  __webpack_require__(145);
  __webpack_require__(146);
  __webpack_require__(147);
  __webpack_require__(148);
  __webpack_require__(149);
  __webpack_require__(150);
  __webpack_require__(151);
  __webpack_require__(152);
  __webpack_require__(153);
  __webpack_require__(154);
  __webpack_require__(155);
  __webpack_require__(156);
  __webpack_require__(157);
  __webpack_require__(159);
  __webpack_require__(160);
  __webpack_require__(166);
  __webpack_require__(167);
  __webpack_require__(169);
  __webpack_require__(170);
  __webpack_require__(171);
  __webpack_require__(175);
  __webpack_require__(176);
  __webpack_require__(177);
  __webpack_require__(178);
  __webpack_require__(179);
  __webpack_require__(181);
  __webpack_require__(182);
  __webpack_require__(183);
  __webpack_require__(184);
  __webpack_require__(187);
  __webpack_require__(189);
  __webpack_require__(190);
  __webpack_require__(191);
  __webpack_require__(193);
  __webpack_require__(195);
  __webpack_require__(197);
  __webpack_require__(198);
  __webpack_require__(199);
  __webpack_require__(201);
  __webpack_require__(202);
  __webpack_require__(203);
  __webpack_require__(204);
  __webpack_require__(211);
  __webpack_require__(214);
  __webpack_require__(215);
  __webpack_require__(217);
  __webpack_require__(218);
  __webpack_require__(221);
  __webpack_require__(222);
  __webpack_require__(224);
  __webpack_require__(225);
  __webpack_require__(226);
  __webpack_require__(227);
  __webpack_require__(228);
  __webpack_require__(229);
  __webpack_require__(230);
  __webpack_require__(231);
  __webpack_require__(232);
  __webpack_require__(233);
  __webpack_require__(234);
  __webpack_require__(235);
  __webpack_require__(236);
  __webpack_require__(237);
  __webpack_require__(238);
  __webpack_require__(239);
  __webpack_require__(240);
  __webpack_require__(241);
  __webpack_require__(242);
  __webpack_require__(244);
  __webpack_require__(245);
  __webpack_require__(246);
  __webpack_require__(247);
  __webpack_require__(248);
  __webpack_require__(249);
  __webpack_require__(251);
  __webpack_require__(252);
  __webpack_require__(253);
  __webpack_require__(254);
  __webpack_require__(255);
  __webpack_require__(256);
  __webpack_require__(257);
  __webpack_require__(258);
  __webpack_require__(260);
  __webpack_require__(261);
  __webpack_require__(263);
  __webpack_require__(264);
  __webpack_require__(265);
  __webpack_require__(266);
  __webpack_require__(269);
  __webpack_require__(270);
  __webpack_require__(271);
  __webpack_require__(272);
  __webpack_require__(273);
  __webpack_require__(274);
  __webpack_require__(275);
  __webpack_require__(276);
  __webpack_require__(278);
  __webpack_require__(279);
  __webpack_require__(280);
  __webpack_require__(281);
  __webpack_require__(282);
  __webpack_require__(283);
  __webpack_require__(284);
  __webpack_require__(285);
  __webpack_require__(286);
  __webpack_require__(287);
  __webpack_require__(288);
  __webpack_require__(291);
  __webpack_require__(292);
  module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // ECMAScript 6 symbols shim
  var global         = __webpack_require__(4)
    , has            = __webpack_require__(5)
    , DESCRIPTORS    = __webpack_require__(6)
    , $export        = __webpack_require__(8)
    , redefine       = __webpack_require__(18)
    , META           = __webpack_require__(22).KEY
    , $fails         = __webpack_require__(7)
    , shared         = __webpack_require__(23)
    , setToStringTag = __webpack_require__(24)
    , uid            = __webpack_require__(19)
    , wks            = __webpack_require__(25)
    , wksExt         = __webpack_require__(26)
    , wksDefine      = __webpack_require__(27)
    , keyOf          = __webpack_require__(29)
    , enumKeys       = __webpack_require__(42)
    , isArray        = __webpack_require__(45)
    , anObject       = __webpack_require__(12)
    , toIObject      = __webpack_require__(32)
    , toPrimitive    = __webpack_require__(16)
    , createDesc     = __webpack_require__(17)
    , _create        = __webpack_require__(46)
    , gOPNExt        = __webpack_require__(49)
    , $GOPD          = __webpack_require__(51)
    , $DP            = __webpack_require__(11)
    , $keys          = __webpack_require__(30)
    , gOPD           = $GOPD.f
    , dP             = $DP.f
    , gOPN           = gOPNExt.f
    , $Symbol        = global.Symbol
    , $JSON          = global.JSON
    , _stringify     = $JSON && $JSON.stringify
    , PROTOTYPE      = 'prototype'
    , HIDDEN         = wks('_hidden')
    , TO_PRIMITIVE   = wks('toPrimitive')
    , isEnum         = {}.propertyIsEnumerable
    , SymbolRegistry = shared('symbol-registry')
    , AllSymbols     = shared('symbols')
    , OPSymbols      = shared('op-symbols')
    , ObjectProto    = Object[PROTOTYPE]
    , USE_NATIVE     = typeof $Symbol == 'function'
    , QObject        = global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
  
  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = DESCRIPTORS && $fails(function(){
    return _create(dP({}, 'a', {
      get: function(){ return dP(this, 'a', {value: 7}).a; }
    })).a != 7;
  }) ? function(it, key, D){
    var protoDesc = gOPD(ObjectProto, key);
    if(protoDesc)delete ObjectProto[key];
    dP(it, key, D);
    if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
  } : dP;
  
  var wrap = function(tag){
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
  };
  
  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
    return typeof it == 'symbol';
  } : function(it){
    return it instanceof $Symbol;
  };
  
  var $defineProperty = function defineProperty(it, key, D){
    if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if(has(AllSymbols, key)){
      if(!D.enumerable){
        if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
        D = _create(D, {enumerable: createDesc(0, false)});
      } return setSymbolDesc(it, key, D);
    } return dP(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P){
    anObject(it);
    var keys = enumKeys(P = toIObject(P))
      , i    = 0
      , l = keys.length
      , key;
    while(l > i)$defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P){
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key){
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
    it  = toIObject(it);
    key = toPrimitive(key, true);
    if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
    var D = gOPD(it, key);
    if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it){
    var names  = gOPN(toIObject(it))
      , result = []
      , i      = 0
      , key;
    while(names.length > i){
      if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
    var IS_OP  = it === ObjectProto
      , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
      , result = []
      , i      = 0
      , key;
    while(names.length > i){
      if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
    } return result;
  };
  
  // 19.4.1.1 Symbol([description])
  if(!USE_NATIVE){
    $Symbol = function Symbol(){
      if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function(value){
        if(this === ObjectProto)$set.call(OPSymbols, value);
        if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      };
      if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString(){
      return this._k;
    });
  
    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f   = $defineProperty;
    __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
    __webpack_require__(44).f  = $propertyIsEnumerable;
    __webpack_require__(43).f = $getOwnPropertySymbols;
  
    if(DESCRIPTORS && !__webpack_require__(28)){
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }
  
    wksExt.f = function(name){
      return wrap(wks(name));
    }
  }
  
  $export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
  
  for(var symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
  
  for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
  
  $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function(key){
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(key){
      if(isSymbol(key))return keyOf(SymbolRegistry, key);
      throw TypeError(key + ' is not a symbol!');
    },
    useSetter: function(){ setter = true; },
    useSimple: function(){ setter = false; }
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
  $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it){
      if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
      var args = [it]
        , i    = 1
        , replacer, $replacer;
      while(arguments.length > i)args.push(arguments[i++]);
      replacer = args[1];
      if(typeof replacer == 'function')$replacer = replacer;
      if($replacer || !isArray(replacer))replacer = function(key, value){
        if($replacer)value = $replacer.call(this, key, value);
        if(!isSymbol(value))return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });
  
  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key){
    return hasOwnProperty.call(it, key);
  };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  // Thank's IE8 for his funny defineProperty
  module.exports = !__webpack_require__(7)(function(){
    return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
  });

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = function(exec){
    try {
      return !!exec();
    } catch(e){
      return true;
    }
  };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  var global    = __webpack_require__(4)
    , core      = __webpack_require__(9)
    , hide      = __webpack_require__(10)
    , redefine  = __webpack_require__(18)
    , ctx       = __webpack_require__(20)
    , PROTOTYPE = 'prototype';
  
  var $export = function(type, name, source){
    var IS_FORCED = type & $export.F
      , IS_GLOBAL = type & $export.G
      , IS_STATIC = type & $export.S
      , IS_PROTO  = type & $export.P
      , IS_BIND   = type & $export.B
      , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
      , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
      , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
      , key, own, out, exp;
    if(IS_GLOBAL)source = name;
    for(key in source){
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if(target)redefine(target, key, out, type & $export.U);
      // export
      if(exports[key] != out)hide(exports, key, exp);
      if(IS_PROTO && expProto[key] != out)expProto[key] = out;
    }
  };
  global.core = core;
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

/***/ },
/* 9 */
/***/ function(module, exports) {

  var core = module.exports = {version: '2.4.0'};
  if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  var dP         = __webpack_require__(11)
    , createDesc = __webpack_require__(17);
  module.exports = __webpack_require__(6) ? function(object, key, value){
    return dP.f(object, key, createDesc(1, value));
  } : function(object, key, value){
    object[key] = value;
    return object;
  };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  var anObject       = __webpack_require__(12)
    , IE8_DOM_DEFINE = __webpack_require__(14)
    , toPrimitive    = __webpack_require__(16)
    , dP             = Object.defineProperty;
  
  exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if(IE8_DOM_DEFINE)try {
      return dP(O, P, Attributes);
    } catch(e){ /* empty */ }
    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
    if('value' in Attributes)O[P] = Attributes.value;
    return O;
  };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(13);
  module.exports = function(it){
    if(!isObject(it))throw TypeError(it + ' is not an object!');
    return it;
  };

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = function(it){
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
    return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
  });

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(13)
    , document = __webpack_require__(4).document
    // in old IE typeof document.createElement is 'object'
    , is = isObject(document) && isObject(document.createElement);
  module.exports = function(it){
    return is ? document.createElement(it) : {};
  };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = __webpack_require__(13);
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  module.exports = function(it, S){
    if(!isObject(it))return it;
    var fn, val;
    if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
    if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
    if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
    throw TypeError("Can't convert object to primitive value");
  };

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = function(bitmap, value){
    return {
      enumerable  : !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable    : !(bitmap & 4),
      value       : value
    };
  };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  var global    = __webpack_require__(4)
    , hide      = __webpack_require__(10)
    , has       = __webpack_require__(5)
    , SRC       = __webpack_require__(19)('src')
    , TO_STRING = 'toString'
    , $toString = Function[TO_STRING]
    , TPL       = ('' + $toString).split(TO_STRING);
  
  __webpack_require__(9).inspectSource = function(it){
    return $toString.call(it);
  };
  
  (module.exports = function(O, key, val, safe){
    var isFunction = typeof val == 'function';
    if(isFunction)has(val, 'name') || hide(val, 'name', key);
    if(O[key] === val)return;
    if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if(O === global){
      O[key] = val;
    } else {
      if(!safe){
        delete O[key];
        hide(O, key, val);
      } else {
        if(O[key])O[key] = val;
        else hide(O, key, val);
      }
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString(){
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });

/***/ },
/* 19 */
/***/ function(module, exports) {

  var id = 0
    , px = Math.random();
  module.exports = function(key){
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  // optional / simple context binding
  var aFunction = __webpack_require__(21);
  module.exports = function(fn, that, length){
    aFunction(fn);
    if(that === undefined)return fn;
    switch(length){
      case 1: return function(a){
        return fn.call(that, a);
      };
      case 2: return function(a, b){
        return fn.call(that, a, b);
      };
      case 3: return function(a, b, c){
        return fn.call(that, a, b, c);
      };
    }
    return function(/* ...args */){
      return fn.apply(that, arguments);
    };
  };

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = function(it){
    if(typeof it != 'function')throw TypeError(it + ' is not a function!');
    return it;
  };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  var META     = __webpack_require__(19)('meta')
    , isObject = __webpack_require__(13)
    , has      = __webpack_require__(5)
    , setDesc  = __webpack_require__(11).f
    , id       = 0;
  var isExtensible = Object.isExtensible || function(){
    return true;
  };
  var FREEZE = !__webpack_require__(7)(function(){
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function(it){
    setDesc(it, META, {value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    }});
  };
  var fastKey = function(it, create){
    // return primitive with prefix
    if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if(!has(it, META)){
      // can't set metadata to uncaught frozen object
      if(!isExtensible(it))return 'F';
      // not necessary to add metadata
      if(!create)return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function(it, create){
    if(!has(it, META)){
      // can't set metadata to uncaught frozen object
      if(!isExtensible(it))return true;
      // not necessary to add metadata
      if(!create)return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function(it){
    if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY:      META,
    NEED:     false,
    fastKey:  fastKey,
    getWeak:  getWeak,
    onFreeze: onFreeze
  };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  var global = __webpack_require__(4)
    , SHARED = '__core-js_shared__'
    , store  = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key){
    return store[key] || (store[key] = {});
  };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  var def = __webpack_require__(11).f
    , has = __webpack_require__(5)
    , TAG = __webpack_require__(25)('toStringTag');
  
  module.exports = function(it, tag, stat){
    if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
  };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  var store      = __webpack_require__(23)('wks')
    , uid        = __webpack_require__(19)
    , Symbol     = __webpack_require__(4).Symbol
    , USE_SYMBOL = typeof Symbol == 'function';
  
  var $exports = module.exports = function(name){
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };
  
  $exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  var global         = __webpack_require__(4)
    , core           = __webpack_require__(9)
    , LIBRARY        = __webpack_require__(28)
    , wksExt         = __webpack_require__(26)
    , defineProperty = __webpack_require__(11).f;
  module.exports = function(name){
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
  };

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  var getKeys   = __webpack_require__(30)
    , toIObject = __webpack_require__(32);
  module.exports = function(object, el){
    var O      = toIObject(object)
      , keys   = getKeys(O)
      , length = keys.length
      , index  = 0
      , key;
    while(length > index)if(O[key = keys[index++]] === el)return key;
  };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys       = __webpack_require__(31)
    , enumBugKeys = __webpack_require__(41);
  
  module.exports = Object.keys || function keys(O){
    return $keys(O, enumBugKeys);
  };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  var has          = __webpack_require__(5)
    , toIObject    = __webpack_require__(32)
    , arrayIndexOf = __webpack_require__(36)(false)
    , IE_PROTO     = __webpack_require__(40)('IE_PROTO');
  
  module.exports = function(object, names){
    var O      = toIObject(object)
      , i      = 0
      , result = []
      , key;
    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if(has(O, key = names[i++])){
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = __webpack_require__(33)
    , defined = __webpack_require__(35);
  module.exports = function(it){
    return IObject(defined(it));
  };

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = __webpack_require__(34);
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

/***/ },
/* 34 */
/***/ function(module, exports) {

  var toString = {}.toString;
  
  module.exports = function(it){
    return toString.call(it).slice(8, -1);
  };

/***/ },
/* 35 */
/***/ function(module, exports) {

  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function(it){
    if(it == undefined)throw TypeError("Can't call method on  " + it);
    return it;
  };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = __webpack_require__(32)
    , toLength  = __webpack_require__(37)
    , toIndex   = __webpack_require__(39);
  module.exports = function(IS_INCLUDES){
    return function($this, el, fromIndex){
      var O      = toIObject($this)
        , length = toLength(O.length)
        , index  = toIndex(fromIndex, length)
        , value;
      // Array#includes uses SameValueZero equality algorithm
      if(IS_INCLUDES && el != el)while(length > index){
        value = O[index++];
        if(value != value)return true;
      // Array#toIndex ignores holes, Array#includes - not
      } else for(;length > index; index++)if(IS_INCLUDES || index in O){
        if(O[index] === el)return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.15 ToLength
  var toInteger = __webpack_require__(38)
    , min       = Math.min;
  module.exports = function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

/***/ },
/* 38 */
/***/ function(module, exports) {

  // 7.1.4 ToInteger
  var ceil  = Math.ceil
    , floor = Math.floor;
  module.exports = function(it){
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__(38)
    , max       = Math.max
    , min       = Math.min;
  module.exports = function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  var shared = __webpack_require__(23)('keys')
    , uid    = __webpack_require__(19);
  module.exports = function(key){
    return shared[key] || (shared[key] = uid(key));
  };

/***/ },
/* 41 */
/***/ function(module, exports) {

  // IE 8- don't enum bug keys
  module.exports = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  // all enumerable object keys, includes symbols
  var getKeys = __webpack_require__(30)
    , gOPS    = __webpack_require__(43)
    , pIE     = __webpack_require__(44);
  module.exports = function(it){
    var result     = getKeys(it)
      , getSymbols = gOPS.f;
    if(getSymbols){
      var symbols = getSymbols(it)
        , isEnum  = pIE.f
        , i       = 0
        , key;
      while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
    } return result;
  };

/***/ },
/* 43 */
/***/ function(module, exports) {

  exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

  exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  // 7.2.2 IsArray(argument)
  var cof = __webpack_require__(34);
  module.exports = Array.isArray || function isArray(arg){
    return cof(arg) == 'Array';
  };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject    = __webpack_require__(12)
    , dPs         = __webpack_require__(47)
    , enumBugKeys = __webpack_require__(41)
    , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
    , Empty       = function(){ /* empty */ }
    , PROTOTYPE   = 'prototype';
  
  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function(){
    // Thrash, waste and sodomy: IE GC bug
    var iframe = __webpack_require__(15)('iframe')
      , i      = enumBugKeys.length
      , lt     = '<'
      , gt     = '>'
      , iframeDocument;
    iframe.style.display = 'none';
    __webpack_require__(48).appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };
  
  module.exports = Object.create || function create(O, Properties){
    var result;
    if(O !== null){
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty;
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  var dP       = __webpack_require__(11)
    , anObject = __webpack_require__(12)
    , getKeys  = __webpack_require__(30);
  
  module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
    anObject(O);
    var keys   = getKeys(Properties)
      , length = keys.length
      , i = 0
      , P;
    while(length > i)dP.f(O, P = keys[i++], Properties[P]);
    return O;
  };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var toIObject = __webpack_require__(32)
    , gOPN      = __webpack_require__(50).f
    , toString  = {}.toString;
  
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];
  
  var getWindowNames = function(it){
    try {
      return gOPN(it);
    } catch(e){
      return windowNames.slice();
    }
  };
  
  module.exports.f = function getOwnPropertyNames(it){
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
  };


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys      = __webpack_require__(31)
    , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
  
  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
    return $keys(O, hiddenKeys);
  };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  var pIE            = __webpack_require__(44)
    , createDesc     = __webpack_require__(17)
    , toIObject      = __webpack_require__(32)
    , toPrimitive    = __webpack_require__(16)
    , has            = __webpack_require__(5)
    , IE8_DOM_DEFINE = __webpack_require__(14)
    , gOPD           = Object.getOwnPropertyDescriptor;
  
  exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
    O = toIObject(O);
    P = toPrimitive(P, true);
    if(IE8_DOM_DEFINE)try {
      return gOPD(O, P);
    } catch(e){ /* empty */ }
    if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
  };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(8)
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  $export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(8);
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  $export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(8);
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  $export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  var toIObject                 = __webpack_require__(32)
    , $getOwnPropertyDescriptor = __webpack_require__(51).f;
  
  __webpack_require__(56)('getOwnPropertyDescriptor', function(){
    return function getOwnPropertyDescriptor(it, key){
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  // most Object methods by ES6 should accept primitives
  var $export = __webpack_require__(8)
    , core    = __webpack_require__(9)
    , fails   = __webpack_require__(7);
  module.exports = function(KEY, exec){
    var fn  = (core.Object || {})[KEY] || Object[KEY]
      , exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject        = __webpack_require__(58)
    , $getPrototypeOf = __webpack_require__(59);
  
  __webpack_require__(56)('getPrototypeOf', function(){
    return function getPrototypeOf(it){
      return $getPrototypeOf(toObject(it));
    };
  });

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.13 ToObject(argument)
  var defined = __webpack_require__(35);
  module.exports = function(it){
    return Object(defined(it));
  };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has         = __webpack_require__(5)
    , toObject    = __webpack_require__(58)
    , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
    , ObjectProto = Object.prototype;
  
  module.exports = Object.getPrototypeOf || function(O){
    O = toObject(O);
    if(has(O, IE_PROTO))return O[IE_PROTO];
    if(typeof O.constructor == 'function' && O instanceof O.constructor){
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.14 Object.keys(O)
  var toObject = __webpack_require__(58)
    , $keys    = __webpack_require__(30);
  
  __webpack_require__(56)('keys', function(){
    return function keys(it){
      return $keys(toObject(it));
    };
  });

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.7 Object.getOwnPropertyNames(O)
  __webpack_require__(56)('getOwnPropertyNames', function(){
    return __webpack_require__(49).f;
  });

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.5 Object.freeze(O)
  var isObject = __webpack_require__(13)
    , meta     = __webpack_require__(22).onFreeze;
  
  __webpack_require__(56)('freeze', function($freeze){
    return function freeze(it){
      return $freeze && isObject(it) ? $freeze(meta(it)) : it;
    };
  });

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.17 Object.seal(O)
  var isObject = __webpack_require__(13)
    , meta     = __webpack_require__(22).onFreeze;
  
  __webpack_require__(56)('seal', function($seal){
    return function seal(it){
      return $seal && isObject(it) ? $seal(meta(it)) : it;
    };
  });

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.15 Object.preventExtensions(O)
  var isObject = __webpack_require__(13)
    , meta     = __webpack_require__(22).onFreeze;
  
  __webpack_require__(56)('preventExtensions', function($preventExtensions){
    return function preventExtensions(it){
      return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
    };
  });

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.12 Object.isFrozen(O)
  var isObject = __webpack_require__(13);
  
  __webpack_require__(56)('isFrozen', function($isFrozen){
    return function isFrozen(it){
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.13 Object.isSealed(O)
  var isObject = __webpack_require__(13);
  
  __webpack_require__(56)('isSealed', function($isSealed){
    return function isSealed(it){
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.11 Object.isExtensible(O)
  var isObject = __webpack_require__(13);
  
  __webpack_require__(56)('isExtensible', function($isExtensible){
    return function isExtensible(it){
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.1 Object.assign(target, source)
  var $export = __webpack_require__(8);
  
  $export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 19.1.2.1 Object.assign(target, source, ...)
  var getKeys  = __webpack_require__(30)
    , gOPS     = __webpack_require__(43)
    , pIE      = __webpack_require__(44)
    , toObject = __webpack_require__(58)
    , IObject  = __webpack_require__(33)
    , $assign  = Object.assign;
  
  // should work with symbols and should have deterministic property order (V8 bug)
  module.exports = !$assign || __webpack_require__(7)(function(){
    var A = {}
      , B = {}
      , S = Symbol()
      , K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k){ B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source){ // eslint-disable-line no-unused-vars
    var T     = toObject(target)
      , aLen  = arguments.length
      , index = 1
      , getSymbols = gOPS.f
      , isEnum     = pIE.f;
    while(aLen > index){
      var S      = IObject(arguments[index++])
        , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
        , length = keys.length
        , j      = 0
        , key;
      while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
    } return T;
  } : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.10 Object.is(value1, value2)
  var $export = __webpack_require__(8);
  $export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y){
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $export = __webpack_require__(8);
  $export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = __webpack_require__(13)
    , anObject = __webpack_require__(12);
  var check = function(O, proto){
    anObject(O);
    if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function(test, buggy, set){
        try {
          set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 19.1.3.6 Object.prototype.toString()
  var classof = __webpack_require__(75)
    , test    = {};
  test[__webpack_require__(25)('toStringTag')] = 'z';
  if(test + '' != '[object z]'){
    __webpack_require__(18)(Object.prototype, 'toString', function toString(){
      return '[object ' + classof(this) + ']';
    }, true);
  }

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = __webpack_require__(34)
    , TAG = __webpack_require__(25)('toStringTag')
    // ES3 wrong here
    , ARG = cof(function(){ return arguments; }()) == 'Arguments';
  
  // fallback for IE11 Script Access Denied error
  var tryGet = function(it, key){
    try {
      return it[key];
    } catch(e){ /* empty */ }
  };
  
  module.exports = function(it){
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
  var $export = __webpack_require__(8);
  
  $export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var aFunction  = __webpack_require__(21)
    , isObject   = __webpack_require__(13)
    , invoke     = __webpack_require__(78)
    , arraySlice = [].slice
    , factories  = {};
  
  var construct = function(F, len, args){
    if(!(len in factories)){
      for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    } return factories[len](F, args);
  };
  
  module.exports = Function.bind || function bind(that /*, args... */){
    var fn       = aFunction(this)
      , partArgs = arraySlice.call(arguments, 1);
    var bound = function(/* args... */){
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if(isObject(fn.prototype))bound.prototype = fn.prototype;
    return bound;
  };

/***/ },
/* 78 */
/***/ function(module, exports) {

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  module.exports = function(fn, args, that){
    var un = that === undefined;
    switch(args.length){
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
    } return              fn.apply(that, args);
  };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  var dP         = __webpack_require__(11).f
    , createDesc = __webpack_require__(17)
    , has        = __webpack_require__(5)
    , FProto     = Function.prototype
    , nameRE     = /^\s*function ([^ (]*)/
    , NAME       = 'name';
  
  var isExtensible = Object.isExtensible || function(){
    return true;
  };
  
  // 19.2.4.2 name
  NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
    configurable: true,
    get: function(){
      try {
        var that = this
          , name = ('' + that).match(nameRE)[1];
        has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
        return name;
      } catch(e){
        return '';
      }
    }
  });

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var isObject       = __webpack_require__(13)
    , getPrototypeOf = __webpack_require__(59)
    , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
    , FunctionProto  = Function.prototype;
  // 19.2.3.6 Function.prototype[@@hasInstance](V)
  if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
    if(typeof this != 'function' || !isObject(O))return false;
    if(!isObject(this.prototype))return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while(O = getPrototypeOf(O))if(this.prototype === O)return true;
    return false;
  }});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  var $export   = __webpack_require__(8)
    , $parseInt = __webpack_require__(82);
  // 18.2.5 parseInt(string, radix)
  $export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  var $parseInt = __webpack_require__(4).parseInt
    , $trim     = __webpack_require__(83).trim
    , ws        = __webpack_require__(84)
    , hex       = /^[\-+]?0[xX]/;
  
  module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
    var string = $trim(String(str), 3);
    return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
  } : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(8)
    , defined = __webpack_require__(35)
    , fails   = __webpack_require__(7)
    , spaces  = __webpack_require__(84)
    , space   = '[' + spaces + ']'
    , non     = '\u200b\u0085'
    , ltrim   = RegExp('^' + space + space + '*')
    , rtrim   = RegExp(space + space + '*$');
  
  var exporter = function(KEY, exec, ALIAS){
    var exp   = {};
    var FORCE = fails(function(){
      return !!spaces[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
    if(ALIAS)exp[ALIAS] = fn;
    $export($export.P + $export.F * FORCE, 'String', exp);
  };
  
  // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim
  var trim = exporter.trim = function(string, TYPE){
    string = String(defined(string));
    if(TYPE & 1)string = string.replace(ltrim, '');
    if(TYPE & 2)string = string.replace(rtrim, '');
    return string;
  };
  
  module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

  module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  var $export     = __webpack_require__(8)
    , $parseFloat = __webpack_require__(86);
  // 18.2.4 parseFloat(string)
  $export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  var $parseFloat = __webpack_require__(4).parseFloat
    , $trim       = __webpack_require__(83).trim;
  
  module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
    var string = $trim(String(str), 3)
      , result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global            = __webpack_require__(4)
    , has               = __webpack_require__(5)
    , cof               = __webpack_require__(34)
    , inheritIfRequired = __webpack_require__(88)
    , toPrimitive       = __webpack_require__(16)
    , fails             = __webpack_require__(7)
    , gOPN              = __webpack_require__(50).f
    , gOPD              = __webpack_require__(51).f
    , dP                = __webpack_require__(11).f
    , $trim             = __webpack_require__(83).trim
    , NUMBER            = 'Number'
    , $Number           = global[NUMBER]
    , Base              = $Number
    , proto             = $Number.prototype
    // Opera ~12 has broken Object#toString
    , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
    , TRIM              = 'trim' in String.prototype;
  
  // 7.1.3 ToNumber(argument)
  var toNumber = function(argument){
    var it = toPrimitive(argument, false);
    if(typeof it == 'string' && it.length > 2){
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0)
        , third, radix, maxCode;
      if(first === 43 || first === 45){
        third = it.charCodeAt(2);
        if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if(first === 48){
        switch(it.charCodeAt(1)){
          case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
          case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
          default : return +it;
        }
        for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
          code = digits.charCodeAt(i);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if(code < 48 || code > maxCode)return NaN;
        } return parseInt(digits, radix);
      }
    } return +it;
  };
  
  if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
    $Number = function Number(value){
      var it = arguments.length < 1 ? 0 : value
        , that = this;
      return that instanceof $Number
        // check on 1..constructor(foo) case
        && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
          ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for(var keys = __webpack_require__(6) ? gOPN(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), j = 0, key; keys.length > j; j++){
      if(has(Base, key = keys[j]) && !has($Number, key)){
        dP($Number, key, gOPD(Base, key));
      }
    }
    $Number.prototype = proto;
    proto.constructor = $Number;
    __webpack_require__(18)(global, NUMBER, $Number);
  }

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  var isObject       = __webpack_require__(13)
    , setPrototypeOf = __webpack_require__(73).set;
  module.exports = function(that, target, C){
    var P, S = target.constructor;
    if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
      setPrototypeOf(that, P);
    } return that;
  };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export      = __webpack_require__(8)
    , toInteger    = __webpack_require__(38)
    , aNumberValue = __webpack_require__(90)
    , repeat       = __webpack_require__(91)
    , $toFixed     = 1..toFixed
    , floor        = Math.floor
    , data         = [0, 0, 0, 0, 0, 0]
    , ERROR        = 'Number.toFixed: incorrect invocation!'
    , ZERO         = '0';
  
  var multiply = function(n, c){
    var i  = -1
      , c2 = c;
    while(++i < 6){
      c2 += n * data[i];
      data[i] = c2 % 1e7;
      c2 = floor(c2 / 1e7);
    }
  };
  var divide = function(n){
    var i = 6
      , c = 0;
    while(--i >= 0){
      c += data[i];
      data[i] = floor(c / n);
      c = (c % n) * 1e7;
    }
  };
  var numToString = function(){
    var i = 6
      , s = '';
    while(--i >= 0){
      if(s !== '' || i === 0 || data[i] !== 0){
        var t = String(data[i]);
        s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
      }
    } return s;
  };
  var pow = function(x, n, acc){
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };
  var log = function(x){
    var n  = 0
      , x2 = x;
    while(x2 >= 4096){
      n += 12;
      x2 /= 4096;
    }
    while(x2 >= 2){
      n  += 1;
      x2 /= 2;
    } return n;
  };
  
  $export($export.P + $export.F * (!!$toFixed && (
    0.00008.toFixed(3) !== '0.000' ||
    0.9.toFixed(0) !== '1' ||
    1.255.toFixed(2) !== '1.25' ||
    1000000000000000128..toFixed(0) !== '1000000000000000128'
  ) || !__webpack_require__(7)(function(){
    // V8 ~ Android 4.3-
    $toFixed.call({});
  })), 'Number', {
    toFixed: function toFixed(fractionDigits){
      var x = aNumberValue(this, ERROR)
        , f = toInteger(fractionDigits)
        , s = ''
        , m = ZERO
        , e, z, j, k;
      if(f < 0 || f > 20)throw RangeError(ERROR);
      if(x != x)return 'NaN';
      if(x <= -1e21 || x >= 1e21)return String(x);
      if(x < 0){
        s = '-';
        x = -x;
      }
      if(x > 1e-21){
        e = log(x * pow(2, 69, 1)) - 69;
        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if(e > 0){
          multiply(0, z);
          j = f;
          while(j >= 7){
            multiply(1e7, 0);
            j -= 7;
          }
          multiply(pow(10, j, 1), 0);
          j = e - 1;
          while(j >= 23){
            divide(1 << 23);
            j -= 23;
          }
          divide(1 << j);
          multiply(1, 1);
          divide(2);
          m = numToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          m = numToString() + repeat.call(ZERO, f);
        }
      }
      if(f > 0){
        k = m.length;
        m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
      } else {
        m = s + m;
      } return m;
    }
  });

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  var cof = __webpack_require__(34);
  module.exports = function(it, msg){
    if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
    return +it;
  };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var toInteger = __webpack_require__(38)
    , defined   = __webpack_require__(35);
  
  module.exports = function repeat(count){
    var str = String(defined(this))
      , res = ''
      , n   = toInteger(count);
    if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
    for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
    return res;
  };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export      = __webpack_require__(8)
    , $fails       = __webpack_require__(7)
    , aNumberValue = __webpack_require__(90)
    , $toPrecision = 1..toPrecision;
  
  $export($export.P + $export.F * ($fails(function(){
    // IE7-
    return $toPrecision.call(1, undefined) !== '1';
  }) || !$fails(function(){
    // V8 ~ Android 4.3-
    $toPrecision.call({});
  })), 'Number', {
    toPrecision: function toPrecision(precision){
      var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
    }
  });

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.1 Number.EPSILON
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.2 Number.isFinite(number)
  var $export   = __webpack_require__(8)
    , _isFinite = __webpack_require__(4).isFinite;
  
  $export($export.S, 'Number', {
    isFinite: function isFinite(it){
      return typeof it == 'number' && _isFinite(it);
    }
  });

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.3 Number.isInteger(number)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.3 Number.isInteger(number)
  var isObject = __webpack_require__(13)
    , floor    = Math.floor;
  module.exports = function isInteger(it){
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.4 Number.isNaN(number)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Number', {
    isNaN: function isNaN(number){
      return number != number;
    }
  });

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.5 Number.isSafeInteger(number)
  var $export   = __webpack_require__(8)
    , isInteger = __webpack_require__(96)
    , abs       = Math.abs;
  
  $export($export.S, 'Number', {
    isSafeInteger: function isSafeInteger(number){
      return isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
  });

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.10 Number.MIN_SAFE_INTEGER
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  var $export     = __webpack_require__(8)
    , $parseFloat = __webpack_require__(86);
  // 20.1.2.12 Number.parseFloat(string)
  $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  var $export   = __webpack_require__(8)
    , $parseInt = __webpack_require__(82);
  // 20.1.2.13 Number.parseInt(string, radix)
  $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.3 Math.acosh(x)
  var $export = __webpack_require__(8)
    , log1p   = __webpack_require__(104)
    , sqrt    = Math.sqrt
    , $acosh  = Math.acosh;
  
  $export($export.S + $export.F * !($acosh
    // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
    && Math.floor($acosh(Number.MAX_VALUE)) == 710
    // Tor Browser bug: Math.acosh(Infinity) -> NaN 
    && $acosh(Infinity) == Infinity
  ), 'Math', {
    acosh: function acosh(x){
      return (x = +x) < 1 ? NaN : x > 94906265.62425156
        ? Math.log(x) + Math.LN2
        : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });

/***/ },
/* 104 */
/***/ function(module, exports) {

  // 20.2.2.20 Math.log1p(x)
  module.exports = Math.log1p || function log1p(x){
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.5 Math.asinh(x)
  var $export = __webpack_require__(8)
    , $asinh  = Math.asinh;
  
  function asinh(x){
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  }
  
  // Tor Browser bug: Math.asinh(0) -> -0 
  $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.7 Math.atanh(x)
  var $export = __webpack_require__(8)
    , $atanh  = Math.atanh;
  
  // Tor Browser bug: Math.atanh(-0) -> 0 
  $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x){
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  });

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.9 Math.cbrt(x)
  var $export = __webpack_require__(8)
    , sign    = __webpack_require__(108);
  
  $export($export.S, 'Math', {
    cbrt: function cbrt(x){
      return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  });

/***/ },
/* 108 */
/***/ function(module, exports) {

  // 20.2.2.28 Math.sign(x)
  module.exports = Math.sign || function sign(x){
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.11 Math.clz32(x)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {
    clz32: function clz32(x){
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  });

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.12 Math.cosh(x)
  var $export = __webpack_require__(8)
    , exp     = Math.exp;
  
  $export($export.S, 'Math', {
    cosh: function cosh(x){
      return (exp(x = +x) + exp(-x)) / 2;
    }
  });

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.14 Math.expm1(x)
  var $export = __webpack_require__(8)
    , $expm1  = __webpack_require__(112);
  
  $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

  // 20.2.2.14 Math.expm1(x)
  var $expm1 = Math.expm1;
  module.exports = (!$expm1
    // Old FF bug
    || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
    // Tor Browser bug
    || $expm1(-2e-17) != -2e-17
  ) ? function expm1(x){
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.16 Math.fround(x)
  var $export   = __webpack_require__(8)
    , sign      = __webpack_require__(108)
    , pow       = Math.pow
    , EPSILON   = pow(2, -52)
    , EPSILON32 = pow(2, -23)
    , MAX32     = pow(2, 127) * (2 - EPSILON32)
    , MIN32     = pow(2, -126);
  
  var roundTiesToEven = function(n){
    return n + 1 / EPSILON - 1 / EPSILON;
  };
  
  
  $export($export.S, 'Math', {
    fround: function fround(x){
      var $abs  = Math.abs(x)
        , $sign = sign(x)
        , a, result;
      if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      if(result > MAX32 || result != result)return $sign * Infinity;
      return $sign * result;
    }
  });

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
  var $export = __webpack_require__(8)
    , abs     = Math.abs;
  
  $export($export.S, 'Math', {
    hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
      var sum  = 0
        , i    = 0
        , aLen = arguments.length
        , larg = 0
        , arg, div;
      while(i < aLen){
        arg = abs(arguments[i++]);
        if(larg < arg){
          div  = larg / arg;
          sum  = sum * div * div + 1;
          larg = arg;
        } else if(arg > 0){
          div  = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  });

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.18 Math.imul(x, y)
  var $export = __webpack_require__(8)
    , $imul   = Math.imul;
  
  // some WebKit versions fails with big numbers, some has wrong arity
  $export($export.S + $export.F * __webpack_require__(7)(function(){
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {
    imul: function imul(x, y){
      var UINT16 = 0xffff
        , xn = +x
        , yn = +y
        , xl = UINT16 & xn
        , yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.21 Math.log10(x)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {
    log10: function log10(x){
      return Math.log(x) / Math.LN10;
    }
  });

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.20 Math.log1p(x)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.22 Math.log2(x)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {
    log2: function log2(x){
      return Math.log(x) / Math.LN2;
    }
  });

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.28 Math.sign(x)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.30 Math.sinh(x)
  var $export = __webpack_require__(8)
    , expm1   = __webpack_require__(112)
    , exp     = Math.exp;
  
  // V8 near Chromium 38 has a problem with very small numbers
  $export($export.S + $export.F * __webpack_require__(7)(function(){
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {
    sinh: function sinh(x){
      return Math.abs(x = +x) < 1
        ? (expm1(x) - expm1(-x)) / 2
        : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
    }
  });

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.33 Math.tanh(x)
  var $export = __webpack_require__(8)
    , expm1   = __webpack_require__(112)
    , exp     = Math.exp;
  
  $export($export.S, 'Math', {
    tanh: function tanh(x){
      var a = expm1(x = +x)
        , b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
  });

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.34 Math.trunc(x)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {
    trunc: function trunc(it){
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  var $export        = __webpack_require__(8)
    , toIndex        = __webpack_require__(39)
    , fromCharCode   = String.fromCharCode
    , $fromCodePoint = String.fromCodePoint;
  
  // length should be 1, old FF problem
  $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
      var res  = []
        , aLen = arguments.length
        , i    = 0
        , code;
      while(aLen > i){
        code = +arguments[i++];
        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000
          ? fromCharCode(code)
          : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
        );
      } return res.join('');
    }
  });

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  var $export   = __webpack_require__(8)
    , toIObject = __webpack_require__(32)
    , toLength  = __webpack_require__(37);
  
  $export($export.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite){
      var tpl  = toIObject(callSite.raw)
        , len  = toLength(tpl.length)
        , aLen = arguments.length
        , res  = []
        , i    = 0;
      while(len > i){
        res.push(String(tpl[i++]));
        if(i < aLen)res.push(String(arguments[i]));
      } return res.join('');
    }
  });

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 21.1.3.25 String.prototype.trim()
  __webpack_require__(83)('trim', function($trim){
    return function trim(){
      return $trim(this, 3);
    };
  });

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $at  = __webpack_require__(127)(true);
  
  // 21.1.3.27 String.prototype[@@iterator]()
  __webpack_require__(128)(String, 'String', function(iterated){
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function(){
    var O     = this._t
      , index = this._i
      , point;
    if(index >= O.length)return {value: undefined, done: true};
    point = $at(O, index);
    this._i += point.length;
    return {value: point, done: false};
  });

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__(38)
    , defined   = __webpack_require__(35);
  // true  -> String#at
  // false -> String#codePointAt
  module.exports = function(TO_STRING){
    return function(that, pos){
      var s = String(defined(that))
        , i = toInteger(pos)
        , l = s.length
        , a, b;
      if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var LIBRARY        = __webpack_require__(28)
    , $export        = __webpack_require__(8)
    , redefine       = __webpack_require__(18)
    , hide           = __webpack_require__(10)
    , has            = __webpack_require__(5)
    , Iterators      = __webpack_require__(129)
    , $iterCreate    = __webpack_require__(130)
    , setToStringTag = __webpack_require__(24)
    , getPrototypeOf = __webpack_require__(59)
    , ITERATOR       = __webpack_require__(25)('iterator')
    , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
    , FF_ITERATOR    = '@@iterator'
    , KEYS           = 'keys'
    , VALUES         = 'values';
  
  var returnThis = function(){ return this; };
  
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind){
      if(!BUGGY && kind in proto)return proto[kind];
      switch(kind){
        case KEYS: return function keys(){ return new Constructor(this, kind); };
        case VALUES: return function values(){ return new Constructor(this, kind); };
      } return function entries(){ return new Constructor(this, kind); };
    };
    var TAG        = NAME + ' Iterator'
      , DEF_VALUES = DEFAULT == VALUES
      , VALUES_BUG = false
      , proto      = Base.prototype
      , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
      , $default   = $native || getMethod(DEFAULT)
      , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
      , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
      , methods, key, IteratorPrototype;
    // Fix native
    if($anyNative){
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
      if(IteratorPrototype !== Object.prototype){
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
    // Define iterator
    if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
      hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG]  = returnThis;
    if(DEFAULT){
      methods = {
        values:  DEF_VALUES ? $default : getMethod(VALUES),
        keys:    IS_SET     ? $default : getMethod(KEYS),
        entries: $entries
      };
      if(FORCED)for(key in methods){
        if(!(key in proto))redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

/***/ },
/* 129 */
/***/ function(module, exports) {

  module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var create         = __webpack_require__(46)
    , descriptor     = __webpack_require__(17)
    , setToStringTag = __webpack_require__(24)
    , IteratorPrototype = {};
  
  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  __webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });
  
  module.exports = function(Constructor, NAME, next){
    Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(8)
    , $at     = __webpack_require__(127)(false);
  $export($export.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos){
      return $at(this, pos);
    }
  });

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
  'use strict';
  var $export   = __webpack_require__(8)
    , toLength  = __webpack_require__(37)
    , context   = __webpack_require__(133)
    , ENDS_WITH = 'endsWith'
    , $endsWith = ''[ENDS_WITH];
  
  $export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString /*, endPosition = @length */){
      var that = context(this, searchString, ENDS_WITH)
        , endPosition = arguments.length > 1 ? arguments[1] : undefined
        , len    = toLength(that.length)
        , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
        , search = String(searchString);
      return $endsWith
        ? $endsWith.call(that, search, end)
        : that.slice(end - search.length, end) === search;
    }
  });

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

  // helper for String#{startsWith, endsWith, includes}
  var isRegExp = __webpack_require__(134)
    , defined  = __webpack_require__(35);
  
  module.exports = function(that, searchString, NAME){
    if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  // 7.2.8 IsRegExp(argument)
  var isObject = __webpack_require__(13)
    , cof      = __webpack_require__(34)
    , MATCH    = __webpack_require__(25)('match');
  module.exports = function(it){
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  var MATCH = __webpack_require__(25)('match');
  module.exports = function(KEY){
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch(e){
      try {
        re[MATCH] = false;
        return !'/./'[KEY](re);
      } catch(f){ /* empty */ }
    } return true;
  };

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
  'use strict';
  var $export  = __webpack_require__(8)
    , context  = __webpack_require__(133)
    , INCLUDES = 'includes';
  
  $export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
    includes: function includes(searchString /*, position = 0 */){
      return !!~context(this, searchString, INCLUDES)
        .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(8);
  
  $export($export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: __webpack_require__(91)
  });

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
  'use strict';
  var $export     = __webpack_require__(8)
    , toLength    = __webpack_require__(37)
    , context     = __webpack_require__(133)
    , STARTS_WITH = 'startsWith'
    , $startsWith = ''[STARTS_WITH];
  
  $export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString /*, position = 0 */){
      var that   = context(this, searchString, STARTS_WITH)
        , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
        , search = String(searchString);
      return $startsWith
        ? $startsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  });

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.2 String.prototype.anchor(name)
  __webpack_require__(140)('anchor', function(createHTML){
    return function anchor(name){
      return createHTML(this, 'a', 'name', name);
    }
  });

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(8)
    , fails   = __webpack_require__(7)
    , defined = __webpack_require__(35)
    , quot    = /"/g;
  // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
  var createHTML = function(string, tag, attribute, value) {
    var S  = String(defined(string))
      , p1 = '<' + tag;
    if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };
  module.exports = function(NAME, exec){
    var O = {};
    O[NAME] = exec(createHTML);
    $export($export.P + $export.F * fails(function(){
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  };

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.3 String.prototype.big()
  __webpack_require__(140)('big', function(createHTML){
    return function big(){
      return createHTML(this, 'big', '', '');
    }
  });

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.4 String.prototype.blink()
  __webpack_require__(140)('blink', function(createHTML){
    return function blink(){
      return createHTML(this, 'blink', '', '');
    }
  });

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.5 String.prototype.bold()
  __webpack_require__(140)('bold', function(createHTML){
    return function bold(){
      return createHTML(this, 'b', '', '');
    }
  });

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.6 String.prototype.fixed()
  __webpack_require__(140)('fixed', function(createHTML){
    return function fixed(){
      return createHTML(this, 'tt', '', '');
    }
  });

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.7 String.prototype.fontcolor(color)
  __webpack_require__(140)('fontcolor', function(createHTML){
    return function fontcolor(color){
      return createHTML(this, 'font', 'color', color);
    }
  });

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.8 String.prototype.fontsize(size)
  __webpack_require__(140)('fontsize', function(createHTML){
    return function fontsize(size){
      return createHTML(this, 'font', 'size', size);
    }
  });

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.9 String.prototype.italics()
  __webpack_require__(140)('italics', function(createHTML){
    return function italics(){
      return createHTML(this, 'i', '', '');
    }
  });

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.10 String.prototype.link(url)
  __webpack_require__(140)('link', function(createHTML){
    return function link(url){
      return createHTML(this, 'a', 'href', url);
    }
  });

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.11 String.prototype.small()
  __webpack_require__(140)('small', function(createHTML){
    return function small(){
      return createHTML(this, 'small', '', '');
    }
  });

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.12 String.prototype.strike()
  __webpack_require__(140)('strike', function(createHTML){
    return function strike(){
      return createHTML(this, 'strike', '', '');
    }
  });

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.13 String.prototype.sub()
  __webpack_require__(140)('sub', function(createHTML){
    return function sub(){
      return createHTML(this, 'sub', '', '');
    }
  });

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.14 String.prototype.sup()
  __webpack_require__(140)('sup', function(createHTML){
    return function sup(){
      return createHTML(this, 'sup', '', '');
    }
  });

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

  // 20.3.3.1 / 15.9.4.4 Date.now()
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export     = __webpack_require__(8)
    , toObject    = __webpack_require__(58)
    , toPrimitive = __webpack_require__(16);
  
  $export($export.P + $export.F * __webpack_require__(7)(function(){
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
  }), 'Date', {
    toJSON: function toJSON(key){
      var O  = toObject(this)
        , pv = toPrimitive(O);
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
  var $export = __webpack_require__(8)
    , fails   = __webpack_require__(7)
    , getTime = Date.prototype.getTime;
  
  var lz = function(num){
    return num > 9 ? num : '0' + num;
  };
  
  // PhantomJS / old WebKit has a broken implementations
  $export($export.P + $export.F * (fails(function(){
    return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
  }) || !fails(function(){
    new Date(NaN).toISOString();
  })), 'Date', {
    toISOString: function toISOString(){
      if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
      var d = this
        , y = d.getUTCFullYear()
        , m = d.getUTCMilliseconds()
        , s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
        '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
        'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
        ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    }
  });

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

  var DateProto    = Date.prototype
    , INVALID_DATE = 'Invalid Date'
    , TO_STRING    = 'toString'
    , $toString    = DateProto[TO_STRING]
    , getTime      = DateProto.getTime;
  if(new Date(NaN) + '' != INVALID_DATE){
    __webpack_require__(18)(DateProto, TO_STRING, function toString(){
      var value = getTime.call(this);
      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

  var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
    , proto        = Date.prototype;
  
  if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var anObject    = __webpack_require__(12)
    , toPrimitive = __webpack_require__(16)
    , NUMBER      = 'number';
  
  module.exports = function(hint){
    if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
    return toPrimitive(anObject(this), hint != NUMBER);
  };

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var ctx            = __webpack_require__(20)
    , $export        = __webpack_require__(8)
    , toObject       = __webpack_require__(58)
    , call           = __webpack_require__(161)
    , isArrayIter    = __webpack_require__(162)
    , toLength       = __webpack_require__(37)
    , createProperty = __webpack_require__(163)
    , getIterFn      = __webpack_require__(164);
  
  $export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
      var O       = toObject(arrayLike)
        , C       = typeof this == 'function' ? this : Array
        , aLen    = arguments.length
        , mapfn   = aLen > 1 ? arguments[1] : undefined
        , mapping = mapfn !== undefined
        , index   = 0
        , iterFn  = getIterFn(O)
        , length, result, step, iterator;
      if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
        for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = toLength(O.length);
        for(result = new C(length); length > index; index++){
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

  // call something on iterator step with safe closing on error
  var anObject = __webpack_require__(12);
  module.exports = function(iterator, fn, value, entries){
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch(e){
      var ret = iterator['return'];
      if(ret !== undefined)anObject(ret.call(iterator));
      throw e;
    }
  };

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

  // check on default Array iterator
  var Iterators  = __webpack_require__(129)
    , ITERATOR   = __webpack_require__(25)('iterator')
    , ArrayProto = Array.prototype;
  
  module.exports = function(it){
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $defineProperty = __webpack_require__(11)
    , createDesc      = __webpack_require__(17);
  
  module.exports = function(object, index, value){
    if(index in object)$defineProperty.f(object, index, createDesc(0, value));
    else object[index] = value;
  };

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

  var classof   = __webpack_require__(75)
    , ITERATOR  = __webpack_require__(25)('iterator')
    , Iterators = __webpack_require__(129);
  module.exports = __webpack_require__(9).getIteratorMethod = function(it){
    if(it != undefined)return it[ITERATOR]
      || it['@@iterator']
      || Iterators[classof(it)];
  };

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

  var ITERATOR     = __webpack_require__(25)('iterator')
    , SAFE_CLOSING = false;
  
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function(){ SAFE_CLOSING = true; };
    Array.from(riter, function(){ throw 2; });
  } catch(e){ /* empty */ }
  
  module.exports = function(exec, skipClosing){
    if(!skipClosing && !SAFE_CLOSING)return false;
    var safe = false;
    try {
      var arr  = [7]
        , iter = arr[ITERATOR]();
      iter.next = function(){ return {done: safe = true}; };
      arr[ITERATOR] = function(){ return iter; };
      exec(arr);
    } catch(e){ /* empty */ }
    return safe;
  };

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export        = __webpack_require__(8)
    , createProperty = __webpack_require__(163);
  
  // WebKit Array.of isn't generic
  $export($export.S + $export.F * __webpack_require__(7)(function(){
    function F(){}
    return !(Array.of.call(F) instanceof F);
  }), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of(/* ...args */){
      var index  = 0
        , aLen   = arguments.length
        , result = new (typeof this == 'function' ? this : Array)(aLen);
      while(aLen > index)createProperty(result, index, arguments[index++]);
      result.length = aLen;
      return result;
    }
  });

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.13 Array.prototype.join(separator)
  var $export   = __webpack_require__(8)
    , toIObject = __webpack_require__(32)
    , arrayJoin = [].join;
  
  // fallback for not array-like strings
  $export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
    join: function join(separator){
      return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
    }
  });

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

  var fails = __webpack_require__(7);
  
  module.exports = function(method, arg){
    return !!method && fails(function(){
      arg ? method.call(null, function(){}, 1) : method.call(null);
    });
  };

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export    = __webpack_require__(8)
    , html       = __webpack_require__(48)
    , cof        = __webpack_require__(34)
    , toIndex    = __webpack_require__(39)
    , toLength   = __webpack_require__(37)
    , arraySlice = [].slice;
  
  // fallback for not array-like ES3 strings and DOM objects
  $export($export.P + $export.F * __webpack_require__(7)(function(){
    if(html)arraySlice.call(html);
  }), 'Array', {
    slice: function slice(begin, end){
      var len   = toLength(this.length)
        , klass = cof(this);
      end = end === undefined ? len : end;
      if(klass == 'Array')return arraySlice.call(this, begin, end);
      var start  = toIndex(begin, len)
        , upTo   = toIndex(end, len)
        , size   = toLength(upTo - start)
        , cloned = Array(size)
        , i      = 0;
      for(; i < size; i++)cloned[i] = klass == 'String'
        ? this.charAt(start + i)
        : this[start + i];
      return cloned;
    }
  });

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export   = __webpack_require__(8)
    , aFunction = __webpack_require__(21)
    , toObject  = __webpack_require__(58)
    , fails     = __webpack_require__(7)
    , $sort     = [].sort
    , test      = [1, 2, 3];
  
  $export($export.P + $export.F * (fails(function(){
    // IE8-
    test.sort(undefined);
  }) || !fails(function(){
    // V8 bug
    test.sort(null);
    // Old WebKit
  }) || !__webpack_require__(168)($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn){
      return comparefn === undefined
        ? $sort.call(toObject(this))
        : $sort.call(toObject(this), aFunction(comparefn));
    }
  });

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export  = __webpack_require__(8)
    , $forEach = __webpack_require__(172)(0)
    , STRICT   = __webpack_require__(168)([].forEach, true);
  
  $export($export.P + $export.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn /* , thisArg */){
      return $forEach(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var ctx      = __webpack_require__(20)
    , IObject  = __webpack_require__(33)
    , toObject = __webpack_require__(58)
    , toLength = __webpack_require__(37)
    , asc      = __webpack_require__(173);
  module.exports = function(TYPE, $create){
    var IS_MAP        = TYPE == 1
      , IS_FILTER     = TYPE == 2
      , IS_SOME       = TYPE == 3
      , IS_EVERY      = TYPE == 4
      , IS_FIND_INDEX = TYPE == 6
      , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
      , create        = $create || asc;
    return function($this, callbackfn, that){
      var O      = toObject($this)
        , self   = IObject(O)
        , f      = ctx(callbackfn, that, 3)
        , length = toLength(self.length)
        , index  = 0
        , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
        , val, res;
      for(;length > index; index++)if(NO_HOLES || index in self){
        val = self[index];
        res = f(val, index, O);
        if(TYPE){
          if(IS_MAP)result[index] = res;            // map
          else if(res)switch(TYPE){
            case 3: return true;                    // some
            case 5: return val;                     // find
            case 6: return index;                   // findIndex
            case 2: result.push(val);               // filter
          } else if(IS_EVERY)return false;          // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
  var speciesConstructor = __webpack_require__(174);
  
  module.exports = function(original, length){
    return new (speciesConstructor(original))(length);
  };

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(13)
    , isArray  = __webpack_require__(45)
    , SPECIES  = __webpack_require__(25)('species');
  
  module.exports = function(original){
    var C;
    if(isArray(original)){
      C = original.constructor;
      // cross-realm fallback
      if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
      if(isObject(C)){
        C = C[SPECIES];
        if(C === null)C = undefined;
      }
    } return C === undefined ? Array : C;
  };

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(8)
    , $map    = __webpack_require__(172)(1);
  
  $export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn /* , thisArg */){
      return $map(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(8)
    , $filter = __webpack_require__(172)(2);
  
  $export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn /* , thisArg */){
      return $filter(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(8)
    , $some   = __webpack_require__(172)(3);
  
  $export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn /* , thisArg */){
      return $some(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(8)
    , $every  = __webpack_require__(172)(4);
  
  $export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn /* , thisArg */){
      return $every(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(8)
    , $reduce = __webpack_require__(180);
  
  $export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn /* , initialValue */){
      return $reduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

  var aFunction = __webpack_require__(21)
    , toObject  = __webpack_require__(58)
    , IObject   = __webpack_require__(33)
    , toLength  = __webpack_require__(37);
  
  module.exports = function(that, callbackfn, aLen, memo, isRight){
    aFunction(callbackfn);
    var O      = toObject(that)
      , self   = IObject(O)
      , length = toLength(O.length)
      , index  = isRight ? length - 1 : 0
      , i      = isRight ? -1 : 1;
    if(aLen < 2)for(;;){
      if(index in self){
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if(isRight ? index < 0 : length <= index){
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(8)
    , $reduce = __webpack_require__(180);
  
  $export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn /* , initialValue */){
      return $reduce(this, callbackfn, arguments.length, arguments[1], true);
    }
  });

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export       = __webpack_require__(8)
    , $indexOf      = __webpack_require__(36)(false)
    , $native       = [].indexOf
    , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
  
  $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? $native.apply(this, arguments) || 0
        : $indexOf(this, searchElement, arguments[1]);
    }
  });

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export       = __webpack_require__(8)
    , toIObject     = __webpack_require__(32)
    , toInteger     = __webpack_require__(38)
    , toLength      = __webpack_require__(37)
    , $native       = [].lastIndexOf
    , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
  
  $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
      // convert -0 to +0
      if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
      var O      = toIObject(this)
        , length = toLength(O.length)
        , index  = length - 1;
      if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
      if(index < 0)index = length + index;
      for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
      return -1;
    }
  });

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  var $export = __webpack_require__(8);
  
  $export($export.P, 'Array', {copyWithin: __webpack_require__(185)});
  
  __webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  'use strict';
  var toObject = __webpack_require__(58)
    , toIndex  = __webpack_require__(39)
    , toLength = __webpack_require__(37);
  
  module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
    var O     = toObject(this)
      , len   = toLength(O.length)
      , to    = toIndex(target, len)
      , from  = toIndex(start, len)
      , end   = arguments.length > 2 ? arguments[2] : undefined
      , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
      , inc   = 1;
    if(from < to && to < from + count){
      inc  = -1;
      from += count - 1;
      to   += count - 1;
    }
    while(count-- > 0){
      if(from in O)O[to] = O[from];
      else delete O[to];
      to   += inc;
      from += inc;
    } return O;
  };

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = __webpack_require__(25)('unscopables')
    , ArrayProto  = Array.prototype;
  if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
  module.exports = function(key){
    ArrayProto[UNSCOPABLES][key] = true;
  };

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  var $export = __webpack_require__(8);
  
  $export($export.P, 'Array', {fill: __webpack_require__(188)});
  
  __webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  'use strict';
  var toObject = __webpack_require__(58)
    , toIndex  = __webpack_require__(39)
    , toLength = __webpack_require__(37);
  module.exports = function fill(value /*, start = 0, end = @length */){
    var O      = toObject(this)
      , length = toLength(O.length)
      , aLen   = arguments.length
      , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
      , end    = aLen > 2 ? arguments[2] : undefined
      , endPos = end === undefined ? length : toIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
  };

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
  var $export = __webpack_require__(8)
    , $find   = __webpack_require__(172)(5)
    , KEY     = 'find'
    , forced  = true;
  // Shouldn't skip holes
  if(KEY in [])Array(1)[KEY](function(){ forced = false; });
  $export($export.P + $export.F * forced, 'Array', {
    find: function find(callbackfn/*, that = undefined */){
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  __webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
  var $export = __webpack_require__(8)
    , $find   = __webpack_require__(172)(6)
    , KEY     = 'findIndex'
    , forced  = true;
  // Shouldn't skip holes
  if(KEY in [])Array(1)[KEY](function(){ forced = false; });
  $export($export.P + $export.F * forced, 'Array', {
    findIndex: function findIndex(callbackfn/*, that = undefined */){
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  __webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global      = __webpack_require__(4)
    , dP          = __webpack_require__(11)
    , DESCRIPTORS = __webpack_require__(6)
    , SPECIES     = __webpack_require__(25)('species');
  
  module.exports = function(KEY){
    var C = global[KEY];
    if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
      configurable: true,
      get: function(){ return this; }
    });
  };

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var addToUnscopables = __webpack_require__(186)
    , step             = __webpack_require__(194)
    , Iterators        = __webpack_require__(129)
    , toIObject        = __webpack_require__(32);
  
  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function(){
    var O     = this._t
      , kind  = this._k
      , index = this._i++;
    if(!O || index >= O.length){
      this._t = undefined;
      return step(1);
    }
    if(kind == 'keys'  )return step(0, index);
    if(kind == 'values')return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  
  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;
  
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

  module.exports = function(done, value){
    return {value: value, done: !!done};
  };

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

  var global            = __webpack_require__(4)
    , inheritIfRequired = __webpack_require__(88)
    , dP                = __webpack_require__(11).f
    , gOPN              = __webpack_require__(50).f
    , isRegExp          = __webpack_require__(134)
    , $flags            = __webpack_require__(196)
    , $RegExp           = global.RegExp
    , Base              = $RegExp
    , proto             = $RegExp.prototype
    , re1               = /a/g
    , re2               = /a/g
    // "new" creates a new object, old webkit buggy here
    , CORRECT_NEW       = new $RegExp(re1) !== re1;
  
  if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
    re2[__webpack_require__(25)('match')] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))){
    $RegExp = function RegExp(p, f){
      var tiRE = this instanceof $RegExp
        , piRE = isRegExp(p)
        , fiU  = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
        : inheritIfRequired(CORRECT_NEW
          ? new Base(piRE && !fiU ? p.source : p, f)
          : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
        , tiRE ? this : proto, $RegExp);
    };
    var proxy = function(key){
      key in $RegExp || dP($RegExp, key, {
        configurable: true,
        get: function(){ return Base[key]; },
        set: function(it){ Base[key] = it; }
      });
    };
    for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    __webpack_require__(18)(global, 'RegExp', $RegExp);
  }
  
  __webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 21.2.5.3 get RegExp.prototype.flags
  var anObject = __webpack_require__(12);
  module.exports = function(){
    var that   = anObject(this)
      , result = '';
    if(that.global)     result += 'g';
    if(that.ignoreCase) result += 'i';
    if(that.multiline)  result += 'm';
    if(that.unicode)    result += 'u';
    if(that.sticky)     result += 'y';
    return result;
  };

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  __webpack_require__(198);
  var anObject    = __webpack_require__(12)
    , $flags      = __webpack_require__(196)
    , DESCRIPTORS = __webpack_require__(6)
    , TO_STRING   = 'toString'
    , $toString   = /./[TO_STRING];
  
  var define = function(fn){
    __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
  };
  
  // 21.2.5.14 RegExp.prototype.toString()
  if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
    define(function toString(){
      var R = anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if($toString.name != TO_STRING){
    define(function toString(){
      return $toString.call(this);
    });
  }

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

  // 21.2.5.3 get RegExp.prototype.flags()
  if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
    configurable: true,
    get: __webpack_require__(196)
  });

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

  // @@match logic
  __webpack_require__(200)('match', 1, function(defined, MATCH, $match){
    // 21.1.3.11 String.prototype.match(regexp)
    return [function match(regexp){
      'use strict';
      var O  = defined(this)
        , fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, $match];
  });

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var hide     = __webpack_require__(10)
    , redefine = __webpack_require__(18)
    , fails    = __webpack_require__(7)
    , defined  = __webpack_require__(35)
    , wks      = __webpack_require__(25);
  
  module.exports = function(KEY, length, exec){
    var SYMBOL   = wks(KEY)
      , fns      = exec(defined, SYMBOL, ''[KEY])
      , strfn    = fns[0]
      , rxfn     = fns[1];
    if(fails(function(){
      var O = {};
      O[SYMBOL] = function(){ return 7; };
      return ''[KEY](O) != 7;
    })){
      redefine(String.prototype, KEY, strfn);
      hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function(string, arg){ return rxfn.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function(string){ return rxfn.call(string, this); }
      );
    }
  };

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

  // @@replace logic
  __webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
    // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
    return [function replace(searchValue, replaceValue){
      'use strict';
      var O  = defined(this)
        , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    }, $replace];
  });

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

  // @@search logic
  __webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
    // 21.1.3.15 String.prototype.search(regexp)
    return [function search(regexp){
      'use strict';
      var O  = defined(this)
        , fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, $search];
  });

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

  // @@split logic
  __webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
    'use strict';
    var isRegExp   = __webpack_require__(134)
      , _split     = $split
      , $push      = [].push
      , $SPLIT     = 'split'
      , LENGTH     = 'length'
      , LAST_INDEX = 'lastIndex';
    if(
      'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
      'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
      'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
      '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
      '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
      ''[$SPLIT](/.?/)[LENGTH]
    ){
      var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
      // based on es5-shim implementation, need to rework it
      $split = function(separator, limit){
        var string = String(this);
        if(separator === undefined && limit === 0)return [];
        // If `separator` is not a regex, use native split
        if(!isRegExp(separator))return _split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var separator2, match, lastIndex, lastLength, i;
        // Doesn't need flags gy, but they don't hurt
        if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
        while(match = separatorCopy.exec(string)){
          // `separatorCopy.lastIndex` is not reliable cross-browser
          lastIndex = match.index + match[0][LENGTH];
          if(lastIndex > lastLastIndex){
            output.push(string.slice(lastLastIndex, match.index));
            // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
            if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
              for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
            });
            if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if(output[LENGTH] >= splitLimit)break;
          }
          if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }
        if(lastLastIndex === string[LENGTH]){
          if(lastLength || !separatorCopy.test(''))output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    // Chakra, V8
    } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
      $split = function(separator, limit){
        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
      };
    }
    // 21.1.3.17 String.prototype.split(separator, limit)
    return [function split(separator, limit){
      var O  = defined(this)
        , fn = separator == undefined ? undefined : separator[SPLIT];
      return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
    }, $split];
  });

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var LIBRARY            = __webpack_require__(28)
    , global             = __webpack_require__(4)
    , ctx                = __webpack_require__(20)
    , classof            = __webpack_require__(75)
    , $export            = __webpack_require__(8)
    , isObject           = __webpack_require__(13)
    , aFunction          = __webpack_require__(21)
    , anInstance         = __webpack_require__(205)
    , forOf              = __webpack_require__(206)
    , speciesConstructor = __webpack_require__(207)
    , task               = __webpack_require__(208).set
    , microtask          = __webpack_require__(209)()
    , PROMISE            = 'Promise'
    , TypeError          = global.TypeError
    , process            = global.process
    , $Promise           = global[PROMISE]
    , process            = global.process
    , isNode             = classof(process) == 'process'
    , empty              = function(){ /* empty */ }
    , Internal, GenericPromiseCapability, Wrapper;
  
  var USE_NATIVE = !!function(){
    try {
      // correct subclassing with @@species support
      var promise     = $Promise.resolve(1)
        , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
    } catch(e){ /* empty */ }
  }();
  
  // helpers
  var sameConstructor = function(a, b){
    // with library wrapper special case
    return a === b || a === $Promise && b === Wrapper;
  };
  var isThenable = function(it){
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var newPromiseCapability = function(C){
    return sameConstructor($Promise, C)
      ? new PromiseCapability(C)
      : new GenericPromiseCapability(C);
  };
  var PromiseCapability = GenericPromiseCapability = function(C){
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject){
      if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject  = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject  = aFunction(reject);
  };
  var perform = function(exec){
    try {
      exec();
    } catch(e){
      return {error: e};
    }
  };
  var notify = function(promise, isReject){
    if(promise._n)return;
    promise._n = true;
    var chain = promise._c;
    microtask(function(){
      var value = promise._v
        , ok    = promise._s == 1
        , i     = 0;
      var run = function(reaction){
        var handler = ok ? reaction.ok : reaction.fail
          , resolve = reaction.resolve
          , reject  = reaction.reject
          , domain  = reaction.domain
          , result, then;
        try {
          if(handler){
            if(!ok){
              if(promise._h == 2)onHandleUnhandled(promise);
              promise._h = 1;
            }
            if(handler === true)result = value;
            else {
              if(domain)domain.enter();
              result = handler(value);
              if(domain)domain.exit();
            }
            if(result === reaction.promise){
              reject(TypeError('Promise-chain cycle'));
            } else if(then = isThenable(result)){
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch(e){
          reject(e);
        }
      };
      while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if(isReject && !promise._h)onUnhandled(promise);
    });
  };
  var onUnhandled = function(promise){
    task.call(global, function(){
      var value = promise._v
        , abrupt, handler, console;
      if(isUnhandled(promise)){
        abrupt = perform(function(){
          if(isNode){
            process.emit('unhandledRejection', value, promise);
          } else if(handler = global.onunhandledrejection){
            handler({promise: promise, reason: value});
          } else if((console = global.console) && console.error){
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
      } promise._a = undefined;
      if(abrupt)throw abrupt.error;
    });
  };
  var isUnhandled = function(promise){
    if(promise._h == 1)return false;
    var chain = promise._a || promise._c
      , i     = 0
      , reaction;
    while(chain.length > i){
      reaction = chain[i++];
      if(reaction.fail || !isUnhandled(reaction.promise))return false;
    } return true;
  };
  var onHandleUnhandled = function(promise){
    task.call(global, function(){
      var handler;
      if(isNode){
        process.emit('rejectionHandled', promise);
      } else if(handler = global.onrejectionhandled){
        handler({promise: promise, reason: promise._v});
      }
    });
  };
  var $reject = function(value){
    var promise = this;
    if(promise._d)return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if(!promise._a)promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function(value){
    var promise = this
      , then;
    if(promise._d)return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if(promise === value)throw TypeError("Promise can't be resolved itself");
      if(then = isThenable(value)){
        microtask(function(){
          var wrapper = {_w: promise, _d: false}; // wrap
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch(e){
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch(e){
      $reject.call({_w: promise, _d: false}, e); // wrap
    }
  };
  
  // constructor polyfill
  if(!USE_NATIVE){
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor){
      anInstance(this, $Promise, PROMISE, '_h');
      aFunction(executor);
      Internal.call(this);
      try {
        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
      } catch(err){
        $reject.call(this, err);
      }
    };
    Internal = function Promise(executor){
      this._c = [];             // <- awaiting reactions
      this._a = undefined;      // <- checked in isUnhandled reactions
      this._s = 0;              // <- state
      this._d = false;          // <- done
      this._v = undefined;      // <- value
      this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false;          // <- notify
    };
    Internal.prototype = __webpack_require__(210)($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected){
        var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
        reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail   = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode ? process.domain : undefined;
        this._c.push(reaction);
        if(this._a)this._a.push(reaction);
        if(this._s)notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function(onRejected){
        return this.then(undefined, onRejected);
      }
    });
    PromiseCapability = function(){
      var promise  = new Internal;
      this.promise = promise;
      this.resolve = ctx($resolve, promise, 1);
      this.reject  = ctx($reject, promise, 1);
    };
  }
  
  $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
  __webpack_require__(24)($Promise, PROMISE);
  __webpack_require__(192)(PROMISE);
  Wrapper = __webpack_require__(9)[PROMISE];
  
  // statics
  $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r){
      var capability = newPromiseCapability(this)
        , $$reject   = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x){
      // instanceof instead of internal slot check because we should fix it without replacement native Promise core
      if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
      var capability = newPromiseCapability(this)
        , $$resolve  = capability.resolve;
      $$resolve(x);
      return capability.promise;
    }
  });
  $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable){
      var C          = this
        , capability = newPromiseCapability(C)
        , resolve    = capability.resolve
        , reject     = capability.reject;
      var abrupt = perform(function(){
        var values    = []
          , index     = 0
          , remaining = 1;
        forOf(iterable, false, function(promise){
          var $index        = index++
            , alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function(value){
            if(alreadyCalled)return;
            alreadyCalled  = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if(abrupt)reject(abrupt.error);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable){
      var C          = this
        , capability = newPromiseCapability(C)
        , reject     = capability.reject;
      var abrupt = perform(function(){
        forOf(iterable, false, function(promise){
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if(abrupt)reject(abrupt.error);
      return capability.promise;
    }
  });

/***/ },
/* 205 */
/***/ function(module, exports) {

  module.exports = function(it, Constructor, name, forbiddenField){
    if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
      throw TypeError(name + ': incorrect invocation!');
    } return it;
  };

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

  var ctx         = __webpack_require__(20)
    , call        = __webpack_require__(161)
    , isArrayIter = __webpack_require__(162)
    , anObject    = __webpack_require__(12)
    , toLength    = __webpack_require__(37)
    , getIterFn   = __webpack_require__(164)
    , BREAK       = {}
    , RETURN      = {};
  var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
    var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
      , f      = ctx(fn, that, entries ? 2 : 1)
      , index  = 0
      , length, step, iterator, result;
    if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if(result === BREAK || result === RETURN)return result;
    } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
      result = call(iterator, f, step.value, entries);
      if(result === BREAK || result === RETURN)return result;
    }
  };
  exports.BREAK  = BREAK;
  exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
  var anObject  = __webpack_require__(12)
    , aFunction = __webpack_require__(21)
    , SPECIES   = __webpack_require__(25)('species');
  module.exports = function(O, D){
    var C = anObject(O).constructor, S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

  var ctx                = __webpack_require__(20)
    , invoke             = __webpack_require__(78)
    , html               = __webpack_require__(48)
    , cel                = __webpack_require__(15)
    , global             = __webpack_require__(4)
    , process            = global.process
    , setTask            = global.setImmediate
    , clearTask          = global.clearImmediate
    , MessageChannel     = global.MessageChannel
    , counter            = 0
    , queue              = {}
    , ONREADYSTATECHANGE = 'onreadystatechange'
    , defer, channel, port;
  var run = function(){
    var id = +this;
    if(queue.hasOwnProperty(id)){
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function(event){
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if(!setTask || !clearTask){
    setTask = function setImmediate(fn){
      var args = [], i = 1;
      while(arguments.length > i)args.push(arguments[i++]);
      queue[++counter] = function(){
        invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id){
      delete queue[id];
    };
    // Node.js 0.8-
    if(__webpack_require__(34)(process) == 'process'){
      defer = function(id){
        process.nextTick(ctx(run, id, 1));
      };
    // Browsers with MessageChannel, includes WebWorkers
    } else if(MessageChannel){
      channel = new MessageChannel;
      port    = channel.port2;
      channel.port1.onmessage = listener;
      defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
      defer = function(id){
        global.postMessage(id + '', '*');
      };
      global.addEventListener('message', listener, false);
    // IE8-
    } else if(ONREADYSTATECHANGE in cel('script')){
      defer = function(id){
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
          html.removeChild(this);
          run.call(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function(id){
        setTimeout(ctx(run, id, 1), 0);
      };
    }
  }
  module.exports = {
    set:   setTask,
    clear: clearTask
  };

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

  var global    = __webpack_require__(4)
    , macrotask = __webpack_require__(208).set
    , Observer  = global.MutationObserver || global.WebKitMutationObserver
    , process   = global.process
    , Promise   = global.Promise
    , isNode    = __webpack_require__(34)(process) == 'process';
  
  module.exports = function(){
    var head, last, notify;
  
    var flush = function(){
      var parent, fn;
      if(isNode && (parent = process.domain))parent.exit();
      while(head){
        fn   = head.fn;
        head = head.next;
        try {
          fn();
        } catch(e){
          if(head)notify();
          else last = undefined;
          throw e;
        }
      } last = undefined;
      if(parent)parent.enter();
    };
  
    // Node.js
    if(isNode){
      notify = function(){
        process.nextTick(flush);
      };
    // browsers with MutationObserver
    } else if(Observer){
      var toggle = true
        , node   = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
      notify = function(){
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if(Promise && Promise.resolve){
      var promise = Promise.resolve();
      notify = function(){
        promise.then(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify = function(){
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
      };
    }
  
    return function(fn){
      var task = {fn: fn, next: undefined};
      if(last)last.next = task;
      if(!head){
        head = task;
        notify();
      } last = task;
    };
  };

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

  var redefine = __webpack_require__(18);
  module.exports = function(target, src, safe){
    for(var key in src)redefine(target, key, src[key], safe);
    return target;
  };

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var strong = __webpack_require__(212);
  
  // 23.1 Map Objects
  module.exports = __webpack_require__(213)('Map', function(get){
    return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key){
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value){
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var dP          = __webpack_require__(11).f
    , create      = __webpack_require__(46)
    , redefineAll = __webpack_require__(210)
    , ctx         = __webpack_require__(20)
    , anInstance  = __webpack_require__(205)
    , defined     = __webpack_require__(35)
    , forOf       = __webpack_require__(206)
    , $iterDefine = __webpack_require__(128)
    , step        = __webpack_require__(194)
    , setSpecies  = __webpack_require__(192)
    , DESCRIPTORS = __webpack_require__(6)
    , fastKey     = __webpack_require__(22).fastKey
    , SIZE        = DESCRIPTORS ? '_s' : 'size';
  
  var getEntry = function(that, key){
    // fast case
    var index = fastKey(key), entry;
    if(index !== 'F')return that._i[index];
    // frozen object case
    for(entry = that._f; entry; entry = entry.n){
      if(entry.k == key)return entry;
    }
  };
  
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
      var C = wrapper(function(that, iterable){
        anInstance(that, C, NAME, '_i');
        that._i = create(null); // index
        that._f = undefined;    // first entry
        that._l = undefined;    // last entry
        that[SIZE] = 0;         // size
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear(){
          for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
            entry.r = true;
            if(entry.p)entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function(key){
          var that  = this
            , entry = getEntry(that, key);
          if(entry){
            var next = entry.n
              , prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if(prev)prev.n = next;
            if(next)next.p = prev;
            if(that._f == entry)that._f = next;
            if(that._l == entry)that._l = prev;
            that[SIZE]--;
          } return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /*, that = undefined */){
          anInstance(this, C, 'forEach');
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
            , entry;
          while(entry = entry ? entry.n : this._f){
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while(entry && entry.r)entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key){
          return !!getEntry(this, key);
        }
      });
      if(DESCRIPTORS)dP(C.prototype, 'size', {
        get: function(){
          return defined(this[SIZE]);
        }
      });
      return C;
    },
    def: function(that, key, value){
      var entry = getEntry(that, key)
        , prev, index;
      // change existing entry
      if(entry){
        entry.v = value;
      // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key,                        // <- key
          v: value,                      // <- value
          p: prev = that._l,             // <- previous entry
          n: undefined,                  // <- next entry
          r: false                       // <- removed
        };
        if(!that._f)that._f = entry;
        if(prev)prev.n = entry;
        that[SIZE]++;
        // add to index
        if(index !== 'F')that._i[index] = entry;
      } return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP){
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      $iterDefine(C, NAME, function(iterated, kind){
        this._t = iterated;  // target
        this._k = kind;      // kind
        this._l = undefined; // previous
      }, function(){
        var that  = this
          , kind  = that._k
          , entry = that._l;
        // revert to the last existing entry
        while(entry && entry.r)entry = entry.p;
        // get next entry
        if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
          // or finish the iteration
          that._t = undefined;
          return step(1);
        }
        // return step by kind
        if(kind == 'keys'  )return step(0, entry.k);
        if(kind == 'values')return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
  
      // add [@@species], 23.1.2.2, 23.2.2.2
      setSpecies(NAME);
    }
  };

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global            = __webpack_require__(4)
    , $export           = __webpack_require__(8)
    , redefine          = __webpack_require__(18)
    , redefineAll       = __webpack_require__(210)
    , meta              = __webpack_require__(22)
    , forOf             = __webpack_require__(206)
    , anInstance        = __webpack_require__(205)
    , isObject          = __webpack_require__(13)
    , fails             = __webpack_require__(7)
    , $iterDetect       = __webpack_require__(165)
    , setToStringTag    = __webpack_require__(24)
    , inheritIfRequired = __webpack_require__(88);
  
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
    var Base  = global[NAME]
      , C     = Base
      , ADDER = IS_MAP ? 'set' : 'add'
      , proto = C && C.prototype
      , O     = {};
    var fixMethod = function(KEY){
      var fn = proto[KEY];
      redefine(proto, KEY,
        KEY == 'delete' ? function(a){
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'has' ? function has(a){
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'get' ? function get(a){
          return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
          : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
      );
    };
    if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
      new C().entries().next();
    }))){
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
      meta.NEED = true;
    } else {
      var instance             = new C
        // early implementations not supports chaining
        , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        , BUGGY_ZERO = !IS_WEAK && fails(function(){
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C()
            , index     = 5;
          while(index--)$instance[ADDER](index, index);
          return !$instance.has(-0);
        });
      if(!ACCEPT_ITERABLES){ 
        C = wrapper(function(target, iterable){
          anInstance(target, C, NAME);
          var that = inheritIfRequired(new Base, target, C);
          if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
      // weak collections should not contains .clear method
      if(IS_WEAK && proto.clear)delete proto.clear;
    }
  
    setToStringTag(C, NAME);
  
    O[NAME] = C;
    $export($export.G + $export.W + $export.F * (C != Base), O);
  
    if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
  
    return C;
  };

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var strong = __webpack_require__(212);
  
  // 23.2 Set Objects
  module.exports = __webpack_require__(213)('Set', function(get){
    return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value){
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }
  }, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var each         = __webpack_require__(172)(0)
    , redefine     = __webpack_require__(18)
    , meta         = __webpack_require__(22)
    , assign       = __webpack_require__(69)
    , weak         = __webpack_require__(216)
    , isObject     = __webpack_require__(13)
    , getWeak      = meta.getWeak
    , isExtensible = Object.isExtensible
    , uncaughtFrozenStore = weak.ufstore
    , tmp          = {}
    , InternalMap;
  
  var wrapper = function(get){
    return function WeakMap(){
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };
  
  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key){
      if(isObject(key)){
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value){
      return weak.def(this, key, value);
    }
  };
  
  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);
  
  // IE11 WeakMap frozen keys fix
  if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
    InternalMap = weak.getConstructor(wrapper);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function(key){
      var proto  = $WeakMap.prototype
        , method = proto[key];
      redefine(proto, key, function(a, b){
        // store frozen objects on internal weakmap shim
        if(isObject(a) && !isExtensible(a)){
          if(!this._f)this._f = new InternalMap;
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
        // store all the rest on native weakmap
        } return method.call(this, a, b);
      });
    });
  }

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var redefineAll       = __webpack_require__(210)
    , getWeak           = __webpack_require__(22).getWeak
    , anObject          = __webpack_require__(12)
    , isObject          = __webpack_require__(13)
    , anInstance        = __webpack_require__(205)
    , forOf             = __webpack_require__(206)
    , createArrayMethod = __webpack_require__(172)
    , $has              = __webpack_require__(5)
    , arrayFind         = createArrayMethod(5)
    , arrayFindIndex    = createArrayMethod(6)
    , id                = 0;
  
  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function(that){
    return that._l || (that._l = new UncaughtFrozenStore);
  };
  var UncaughtFrozenStore = function(){
    this.a = [];
  };
  var findUncaughtFrozen = function(store, key){
    return arrayFind(store.a, function(it){
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function(key){
      var entry = findUncaughtFrozen(this, key);
      if(entry)return entry[1];
    },
    has: function(key){
      return !!findUncaughtFrozen(this, key);
    },
    set: function(key, value){
      var entry = findUncaughtFrozen(this, key);
      if(entry)entry[1] = value;
      else this.a.push([key, value]);
    },
    'delete': function(key){
      var index = arrayFindIndex(this.a, function(it){
        return it[0] === key;
      });
      if(~index)this.a.splice(index, 1);
      return !!~index;
    }
  };
  
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
      var C = wrapper(function(that, iterable){
        anInstance(that, C, NAME, '_i');
        that._i = id++;      // collection id
        that._l = undefined; // leak store for uncaught frozen objects
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function(key){
          if(!isObject(key))return false;
          var data = getWeak(key);
          if(data === true)return uncaughtFrozenStore(this)['delete'](key);
          return data && $has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key){
          if(!isObject(key))return false;
          var data = getWeak(key);
          if(data === true)return uncaughtFrozenStore(this).has(key);
          return data && $has(data, this._i);
        }
      });
      return C;
    },
    def: function(that, key, value){
      var data = getWeak(anObject(key), true);
      if(data === true)uncaughtFrozenStore(that).set(key, value);
      else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var weak = __webpack_require__(216);
  
  // 23.4 WeakSet Objects
  __webpack_require__(213)('WeakSet', function(get){
    return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value){
      return weak.def(this, value, true);
    }
  }, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export      = __webpack_require__(8)
    , $typed       = __webpack_require__(219)
    , buffer       = __webpack_require__(220)
    , anObject     = __webpack_require__(12)
    , toIndex      = __webpack_require__(39)
    , toLength     = __webpack_require__(37)
    , isObject     = __webpack_require__(13)
    , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
    , speciesConstructor = __webpack_require__(207)
    , $ArrayBuffer = buffer.ArrayBuffer
    , $DataView    = buffer.DataView
    , $isView      = $typed.ABV && ArrayBuffer.isView
    , $slice       = $ArrayBuffer.prototype.slice
    , VIEW         = $typed.VIEW
    , ARRAY_BUFFER = 'ArrayBuffer';
  
  $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
  
  $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it){
      return $isView && $isView(it) || isObject(it) && VIEW in it;
    }
  });
  
  $export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end){
      if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
      var len    = anObject(this).byteLength
        , first  = toIndex(start, len)
        , final  = toIndex(end === undefined ? len : end, len)
        , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
        , viewS  = new $DataView(this)
        , viewT  = new $DataView(result)
        , index  = 0;
      while(first < final){
        viewT.setUint8(index++, viewS.getUint8(first++));
      } return result;
    }
  });
  
  __webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

  var global = __webpack_require__(4)
    , hide   = __webpack_require__(10)
    , uid    = __webpack_require__(19)
    , TYPED  = uid('typed_array')
    , VIEW   = uid('view')
    , ABV    = !!(global.ArrayBuffer && global.DataView)
    , CONSTR = ABV
    , i = 0, l = 9, Typed;
  
  var TypedArrayConstructors = (
    'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
  ).split(',');
  
  while(i < l){
    if(Typed = global[TypedArrayConstructors[i++]]){
      hide(Typed.prototype, TYPED, true);
      hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }
  
  module.exports = {
    ABV:    ABV,
    CONSTR: CONSTR,
    TYPED:  TYPED,
    VIEW:   VIEW
  };

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global         = __webpack_require__(4)
    , DESCRIPTORS    = __webpack_require__(6)
    , LIBRARY        = __webpack_require__(28)
    , $typed         = __webpack_require__(219)
    , hide           = __webpack_require__(10)
    , redefineAll    = __webpack_require__(210)
    , fails          = __webpack_require__(7)
    , anInstance     = __webpack_require__(205)
    , toInteger      = __webpack_require__(38)
    , toLength       = __webpack_require__(37)
    , gOPN           = __webpack_require__(50).f
    , dP             = __webpack_require__(11).f
    , arrayFill      = __webpack_require__(188)
    , setToStringTag = __webpack_require__(24)
    , ARRAY_BUFFER   = 'ArrayBuffer'
    , DATA_VIEW      = 'DataView'
    , PROTOTYPE      = 'prototype'
    , WRONG_LENGTH   = 'Wrong length!'
    , WRONG_INDEX    = 'Wrong index!'
    , $ArrayBuffer   = global[ARRAY_BUFFER]
    , $DataView      = global[DATA_VIEW]
    , Math           = global.Math
    , RangeError     = global.RangeError
    , Infinity       = global.Infinity
    , BaseBuffer     = $ArrayBuffer
    , abs            = Math.abs
    , pow            = Math.pow
    , floor          = Math.floor
    , log            = Math.log
    , LN2            = Math.LN2
    , BUFFER         = 'buffer'
    , BYTE_LENGTH    = 'byteLength'
    , BYTE_OFFSET    = 'byteOffset'
    , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
    , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
    , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
  
  // IEEE754 conversions based on https://github.com/feross/ieee754
  var packIEEE754 = function(value, mLen, nBytes){
    var buffer = Array(nBytes)
      , eLen   = nBytes * 8 - mLen - 1
      , eMax   = (1 << eLen) - 1
      , eBias  = eMax >> 1
      , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
      , i      = 0
      , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
      , e, m, c;
    value = abs(value)
    if(value != value || value === Infinity){
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);
      if(value * (c = pow(2, -e)) < 1){
        e--;
        c *= 2;
      }
      if(e + eBias >= 1){
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }
      if(value * c >= 2){
        e++;
        c /= 2;
      }
      if(e + eBias >= eMax){
        m = 0;
        e = eMax;
      } else if(e + eBias >= 1){
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }
    for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
    buffer[--i] |= s * 128;
    return buffer;
  };
  var unpackIEEE754 = function(buffer, mLen, nBytes){
    var eLen  = nBytes * 8 - mLen - 1
      , eMax  = (1 << eLen) - 1
      , eBias = eMax >> 1
      , nBits = eLen - 7
      , i     = nBytes - 1
      , s     = buffer[i--]
      , e     = s & 127
      , m;
    s >>= 7;
    for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
    if(e === 0){
      e = 1 - eBias;
    } else if(e === eMax){
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    } return (s ? -1 : 1) * m * pow(2, e - mLen);
  };
  
  var unpackI32 = function(bytes){
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  };
  var packI8 = function(it){
    return [it & 0xff];
  };
  var packI16 = function(it){
    return [it & 0xff, it >> 8 & 0xff];
  };
  var packI32 = function(it){
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  };
  var packF64 = function(it){
    return packIEEE754(it, 52, 8);
  };
  var packF32 = function(it){
    return packIEEE754(it, 23, 4);
  };
  
  var addGetter = function(C, key, internal){
    dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
  };
  
  var get = function(view, bytes, index, isLittleEndian){
    var numIndex = +index
      , intIndex = toInteger(numIndex);
    if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b
      , start = intIndex + view[$OFFSET]
      , pack  = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  };
  var set = function(view, bytes, index, conversion, value, isLittleEndian){
    var numIndex = +index
      , intIndex = toInteger(numIndex);
    if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b
      , start = intIndex + view[$OFFSET]
      , pack  = conversion(+value);
    for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  };
  
  var validateArrayBufferArguments = function(that, length){
    anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
    var numberLength = +length
      , byteLength   = toLength(numberLength);
    if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
    return byteLength;
  };
  
  if(!$typed.ABV){
    $ArrayBuffer = function ArrayBuffer(length){
      var byteLength = validateArrayBufferArguments(this, length);
      this._b       = arrayFill.call(Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };
  
    $DataView = function DataView(buffer, byteOffset, byteLength){
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH]
        , offset       = toInteger(byteOffset);
      if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };
  
    if(DESCRIPTORS){
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }
  
    redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset){
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset){
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /*, littleEndian */){
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /*, littleEndian */){
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /*, littleEndian */){
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset /*, littleEndian */){
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /*, littleEndian */){
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset /*, littleEndian */){
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value){
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value){
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value /*, littleEndian */){
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value /*, littleEndian */){
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value /*, littleEndian */){
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value /*, littleEndian */){
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if(!fails(function(){
      new $ArrayBuffer;     // eslint-disable-line no-new
    }) || !fails(function(){
      new $ArrayBuffer(.5); // eslint-disable-line no-new
    })){
      $ArrayBuffer = function ArrayBuffer(length){
        return new BaseBuffer(validateArrayBufferArguments(this, length));
      };
      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
      for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
        if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
      };
      if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
    }
    // iOS Safari 7.x bug
    var view = new $DataView(new $ArrayBuffer(2))
      , $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value){
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value){
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }
  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);
  hide($DataView[PROTOTYPE], $typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(8);
  $export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
    DataView: __webpack_require__(220).DataView
  });

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Int8', 1, function(init){
    return function Int8Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  if(__webpack_require__(6)){
    var LIBRARY             = __webpack_require__(28)
      , global              = __webpack_require__(4)
      , fails               = __webpack_require__(7)
      , $export             = __webpack_require__(8)
      , $typed              = __webpack_require__(219)
      , $buffer             = __webpack_require__(220)
      , ctx                 = __webpack_require__(20)
      , anInstance          = __webpack_require__(205)
      , propertyDesc        = __webpack_require__(17)
      , hide                = __webpack_require__(10)
      , redefineAll         = __webpack_require__(210)
      , toInteger           = __webpack_require__(38)
      , toLength            = __webpack_require__(37)
      , toIndex             = __webpack_require__(39)
      , toPrimitive         = __webpack_require__(16)
      , has                 = __webpack_require__(5)
      , same                = __webpack_require__(71)
      , classof             = __webpack_require__(75)
      , isObject            = __webpack_require__(13)
      , toObject            = __webpack_require__(58)
      , isArrayIter         = __webpack_require__(162)
      , create              = __webpack_require__(46)
      , getPrototypeOf      = __webpack_require__(59)
      , gOPN                = __webpack_require__(50).f
      , getIterFn           = __webpack_require__(164)
      , uid                 = __webpack_require__(19)
      , wks                 = __webpack_require__(25)
      , createArrayMethod   = __webpack_require__(172)
      , createArrayIncludes = __webpack_require__(36)
      , speciesConstructor  = __webpack_require__(207)
      , ArrayIterators      = __webpack_require__(193)
      , Iterators           = __webpack_require__(129)
      , $iterDetect         = __webpack_require__(165)
      , setSpecies          = __webpack_require__(192)
      , arrayFill           = __webpack_require__(188)
      , arrayCopyWithin     = __webpack_require__(185)
      , $DP                 = __webpack_require__(11)
      , $GOPD               = __webpack_require__(51)
      , dP                  = $DP.f
      , gOPD                = $GOPD.f
      , RangeError          = global.RangeError
      , TypeError           = global.TypeError
      , Uint8Array          = global.Uint8Array
      , ARRAY_BUFFER        = 'ArrayBuffer'
      , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
      , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
      , PROTOTYPE           = 'prototype'
      , ArrayProto          = Array[PROTOTYPE]
      , $ArrayBuffer        = $buffer.ArrayBuffer
      , $DataView           = $buffer.DataView
      , arrayForEach        = createArrayMethod(0)
      , arrayFilter         = createArrayMethod(2)
      , arraySome           = createArrayMethod(3)
      , arrayEvery          = createArrayMethod(4)
      , arrayFind           = createArrayMethod(5)
      , arrayFindIndex      = createArrayMethod(6)
      , arrayIncludes       = createArrayIncludes(true)
      , arrayIndexOf        = createArrayIncludes(false)
      , arrayValues         = ArrayIterators.values
      , arrayKeys           = ArrayIterators.keys
      , arrayEntries        = ArrayIterators.entries
      , arrayLastIndexOf    = ArrayProto.lastIndexOf
      , arrayReduce         = ArrayProto.reduce
      , arrayReduceRight    = ArrayProto.reduceRight
      , arrayJoin           = ArrayProto.join
      , arraySort           = ArrayProto.sort
      , arraySlice          = ArrayProto.slice
      , arrayToString       = ArrayProto.toString
      , arrayToLocaleString = ArrayProto.toLocaleString
      , ITERATOR            = wks('iterator')
      , TAG                 = wks('toStringTag')
      , TYPED_CONSTRUCTOR   = uid('typed_constructor')
      , DEF_CONSTRUCTOR     = uid('def_constructor')
      , ALL_CONSTRUCTORS    = $typed.CONSTR
      , TYPED_ARRAY         = $typed.TYPED
      , VIEW                = $typed.VIEW
      , WRONG_LENGTH        = 'Wrong length!';
  
    var $map = createArrayMethod(1, function(O, length){
      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });
  
    var LITTLE_ENDIAN = fails(function(){
      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
    });
  
    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
      new Uint8Array(1).set({});
    });
  
    var strictToLength = function(it, SAME){
      if(it === undefined)throw TypeError(WRONG_LENGTH);
      var number = +it
        , length = toLength(it);
      if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
      return length;
    };
  
    var toOffset = function(it, BYTES){
      var offset = toInteger(it);
      if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
      return offset;
    };
  
    var validate = function(it){
      if(isObject(it) && TYPED_ARRAY in it)return it;
      throw TypeError(it + ' is not a typed array!');
    };
  
    var allocate = function(C, length){
      if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
        throw TypeError('It is not a typed array constructor!');
      } return new C(length);
    };
  
    var speciesFromList = function(O, list){
      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };
  
    var fromList = function(C, list){
      var index  = 0
        , length = list.length
        , result = allocate(C, length);
      while(length > index)result[index] = list[index++];
      return result;
    };
  
    var addGetter = function(it, key, internal){
      dP(it, key, {get: function(){ return this._d[internal]; }});
    };
  
    var $from = function from(source /*, mapfn, thisArg */){
      var O       = toObject(source)
        , aLen    = arguments.length
        , mapfn   = aLen > 1 ? arguments[1] : undefined
        , mapping = mapfn !== undefined
        , iterFn  = getIterFn(O)
        , i, length, values, result, step, iterator;
      if(iterFn != undefined && !isArrayIter(iterFn)){
        for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
          values.push(step.value);
        } O = values;
      }
      if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
      for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }
      return result;
    };
  
    var $of = function of(/*...items*/){
      var index  = 0
        , length = arguments.length
        , result = allocate(this, length);
      while(length > index)result[index] = arguments[index++];
      return result;
    };
  
    // iOS Safari 6.x fails here
    var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
  
    var $toLocaleString = function toLocaleString(){
      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };
  
    var proto = {
      copyWithin: function copyWithin(target, start /*, end */){
        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      },
      every: function every(callbackfn /*, thisArg */){
        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
        return arrayFill.apply(validate(this), arguments);
      },
      filter: function filter(callbackfn /*, thisArg */){
        return speciesFromList(this, arrayFilter(validate(this), callbackfn,
          arguments.length > 1 ? arguments[1] : undefined));
      },
      find: function find(predicate /*, thisArg */){
        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      findIndex: function findIndex(predicate /*, thisArg */){
        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      forEach: function forEach(callbackfn /*, thisArg */){
        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      indexOf: function indexOf(searchElement /*, fromIndex */){
        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      includes: function includes(searchElement /*, fromIndex */){
        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      join: function join(separator){ // eslint-disable-line no-unused-vars
        return arrayJoin.apply(validate(this), arguments);
      },
      lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
        return arrayLastIndexOf.apply(validate(this), arguments);
      },
      map: function map(mapfn /*, thisArg */){
        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
        return arrayReduce.apply(validate(this), arguments);
      },
      reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
        return arrayReduceRight.apply(validate(this), arguments);
      },
      reverse: function reverse(){
        var that   = this
          , length = validate(that).length
          , middle = Math.floor(length / 2)
          , index  = 0
          , value;
        while(index < middle){
          value         = that[index];
          that[index++] = that[--length];
          that[length]  = value;
        } return that;
      },
      some: function some(callbackfn /*, thisArg */){
        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      sort: function sort(comparefn){
        return arraySort.call(validate(this), comparefn);
      },
      subarray: function subarray(begin, end){
        var O      = validate(this)
          , length = O.length
          , $begin = toIndex(begin, length);
        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
          O.buffer,
          O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
          toLength((end === undefined ? length : toIndex(end, length)) - $begin)
        );
      }
    };
  
    var $slice = function slice(start, end){
      return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };
  
    var $set = function set(arrayLike /*, offset */){
      validate(this);
      var offset = toOffset(arguments[1], 1)
        , length = this.length
        , src    = toObject(arrayLike)
        , len    = toLength(src.length)
        , index  = 0;
      if(len + offset > length)throw RangeError(WRONG_LENGTH);
      while(index < len)this[offset + index] = src[index++];
    };
  
    var $iterators = {
      entries: function entries(){
        return arrayEntries.call(validate(this));
      },
      keys: function keys(){
        return arrayKeys.call(validate(this));
      },
      values: function values(){
        return arrayValues.call(validate(this));
      }
    };
  
    var isTAIndex = function(target, key){
      return isObject(target)
        && target[TYPED_ARRAY]
        && typeof key != 'symbol'
        && key in target
        && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key){
      return isTAIndex(target, key = toPrimitive(key, true))
        ? propertyDesc(2, target[key])
        : gOPD(target, key);
    };
    var $setDesc = function defineProperty(target, key, desc){
      if(isTAIndex(target, key = toPrimitive(key, true))
        && isObject(desc)
        && has(desc, 'value')
        && !has(desc, 'get')
        && !has(desc, 'set')
        // TODO: add validation descriptor w/o calling accessors
        && !desc.configurable
        && (!has(desc, 'writable') || desc.writable)
        && (!has(desc, 'enumerable') || desc.enumerable)
      ){
        target[key] = desc.value;
        return target;
      } else return dP(target, key, desc);
    };
  
    if(!ALL_CONSTRUCTORS){
      $GOPD.f = $getDesc;
      $DP.f   = $setDesc;
    }
  
    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
      getOwnPropertyDescriptor: $getDesc,
      defineProperty:           $setDesc
    });
  
    if(fails(function(){ arrayToString.call({}); })){
      arrayToString = arrayToLocaleString = function toString(){
        return arrayJoin.call(this);
      }
    }
  
    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
      slice:          $slice,
      set:            $set,
      constructor:    function(){ /* noop */ },
      toString:       arrayToString,
      toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, 'buffer', 'b');
    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
    addGetter($TypedArrayPrototype$, 'length', 'e');
    dP($TypedArrayPrototype$, TAG, {
      get: function(){ return this[TYPED_ARRAY]; }
    });
  
    module.exports = function(KEY, BYTES, wrapper, CLAMPED){
      CLAMPED = !!CLAMPED;
      var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
        , ISNT_UINT8 = NAME != 'Uint8Array'
        , GETTER     = 'get' + KEY
        , SETTER     = 'set' + KEY
        , TypedArray = global[NAME]
        , Base       = TypedArray || {}
        , TAC        = TypedArray && getPrototypeOf(TypedArray)
        , FORCED     = !TypedArray || !$typed.ABV
        , O          = {}
        , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
      var getter = function(that, index){
        var data = that._d;
        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
      };
      var setter = function(that, index, value){
        var data = that._d;
        if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
      };
      var addElement = function(that, index){
        dP(that, index, {
          get: function(){
            return getter(this, index);
          },
          set: function(value){
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if(FORCED){
        TypedArray = wrapper(function(that, data, $offset, $length){
          anInstance(that, TypedArray, NAME, '_d');
          var index  = 0
            , offset = 0
            , buffer, byteLength, length, klass;
          if(!isObject(data)){
            length     = strictToLength(data, true)
            byteLength = length * BYTES;
            buffer     = new $ArrayBuffer(byteLength);
          } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
            buffer = data;
            offset = toOffset($offset, BYTES);
            var $len = data.byteLength;
            if($length === undefined){
              if($len % BYTES)throw RangeError(WRONG_LENGTH);
              byteLength = $len - offset;
              if(byteLength < 0)throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if(TYPED_ARRAY in data){
            return fromList(TypedArray, data);
          } else {
            return $from.call(TypedArray, data);
          }
          hide(that, '_d', {
            b: buffer,
            o: offset,
            l: byteLength,
            e: length,
            v: new $DataView(buffer)
          });
          while(index < length)addElement(that, index++);
        });
        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
        hide(TypedArrayPrototype, 'constructor', TypedArray);
      } else if(!$iterDetect(function(iter){
        // V8 works with iterators, but fails in many other cases
        // https://code.google.com/p/v8/issues/detail?id=4552
        new TypedArray(null); // eslint-disable-line no-new
        new TypedArray(iter); // eslint-disable-line no-new
      }, true)){
        TypedArray = wrapper(function(that, data, $offset, $length){
          anInstance(that, TypedArray, NAME);
          var klass;
          // `ws` module bug, temporarily remove validation length for Uint8Array
          // https://github.com/websockets/ws/pull/645
          if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
          if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
            return $length !== undefined
              ? new Base(data, toOffset($offset, BYTES), $length)
              : $offset !== undefined
                ? new Base(data, toOffset($offset, BYTES))
                : new Base(data);
          }
          if(TYPED_ARRAY in data)return fromList(TypedArray, data);
          return $from.call(TypedArray, data);
        });
        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
          if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
        });
        TypedArray[PROTOTYPE] = TypedArrayPrototype;
        if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
      }
      var $nativeIterator   = TypedArrayPrototype[ITERATOR]
        , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
        , $iterator         = $iterators.values;
      hide(TypedArray, TYPED_CONSTRUCTOR, true);
      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
      hide(TypedArrayPrototype, VIEW, true);
      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
  
      if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
        dP(TypedArrayPrototype, TAG, {
          get: function(){ return NAME; }
        });
      }
  
      O[NAME] = TypedArray;
  
      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
  
      $export($export.S, NAME, {
        BYTES_PER_ELEMENT: BYTES,
        from: $from,
        of: $of
      });
  
      if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
  
      $export($export.P, NAME, proto);
  
      setSpecies(NAME);
  
      $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
  
      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
  
      $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
  
      $export($export.P + $export.F * fails(function(){
        new TypedArray(1).slice();
      }), NAME, {slice: $slice});
  
      $export($export.P + $export.F * (fails(function(){
        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
      }) || !fails(function(){
        TypedArrayPrototype.toLocaleString.call([1, 2]);
      })), NAME, {toLocaleString: $toLocaleString});
  
      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
      if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
  } else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Uint8', 1, function(init){
    return function Uint8Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Uint8', 1, function(init){
    return function Uint8ClampedArray(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  }, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Int16', 2, function(init){
    return function Int16Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Uint16', 2, function(init){
    return function Uint16Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Int32', 4, function(init){
    return function Int32Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Uint32', 4, function(init){
    return function Uint32Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Float32', 4, function(init){
    return function Float32Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(223)('Float64', 8, function(init){
    return function Float64Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
  var $export   = __webpack_require__(8)
    , aFunction = __webpack_require__(21)
    , anObject  = __webpack_require__(12)
    , rApply    = (__webpack_require__(4).Reflect || {}).apply
    , fApply    = Function.apply;
  // MS Edge argumentsList argument is optional
  $export($export.S + $export.F * !__webpack_require__(7)(function(){
    rApply(function(){});
  }), 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList){
      var T = aFunction(target)
        , L = anObject(argumentsList);
      return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
  });

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
  var $export    = __webpack_require__(8)
    , create     = __webpack_require__(46)
    , aFunction  = __webpack_require__(21)
    , anObject   = __webpack_require__(12)
    , isObject   = __webpack_require__(13)
    , fails      = __webpack_require__(7)
    , bind       = __webpack_require__(77)
    , rConstruct = (__webpack_require__(4).Reflect || {}).construct;
  
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails(function(){
    function F(){}
    return !(rConstruct(function(){}, [], F) instanceof F);
  });
  var ARGS_BUG = !fails(function(){
    rConstruct(function(){});
  });
  
  $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
    construct: function construct(Target, args /*, newTarget*/){
      aFunction(Target);
      anObject(args);
      var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
      if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
      if(Target == newTarget){
        // w/o altered newTarget, optimization for 0-4 arguments
        switch(args.length){
          case 0: return new Target;
          case 1: return new Target(args[0]);
          case 2: return new Target(args[0], args[1]);
          case 3: return new Target(args[0], args[1], args[2]);
          case 4: return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o altered newTarget, lot of arguments case
        var $args = [null];
        $args.push.apply($args, args);
        return new (bind.apply(Target, $args));
      }
      // with altered newTarget, not support built-in constructors
      var proto    = newTarget.prototype
        , instance = create(isObject(proto) ? proto : Object.prototype)
        , result   = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  var dP          = __webpack_require__(11)
    , $export     = __webpack_require__(8)
    , anObject    = __webpack_require__(12)
    , toPrimitive = __webpack_require__(16);
  
  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
  $export($export.S + $export.F * __webpack_require__(7)(function(){
    Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes){
      anObject(target);
      propertyKey = toPrimitive(propertyKey, true);
      anObject(attributes);
      try {
        dP.f(target, propertyKey, attributes);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
  var $export  = __webpack_require__(8)
    , gOPD     = __webpack_require__(51).f
    , anObject = __webpack_require__(12);
  
  $export($export.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey){
      var desc = gOPD(anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  });

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 26.1.5 Reflect.enumerate(target)
  var $export  = __webpack_require__(8)
    , anObject = __webpack_require__(12);
  var Enumerate = function(iterated){
    this._t = anObject(iterated); // target
    this._i = 0;                  // next index
    var keys = this._k = []       // keys
      , key;
    for(key in iterated)keys.push(key);
  };
  __webpack_require__(130)(Enumerate, 'Object', function(){
    var that = this
      , keys = that._k
      , key;
    do {
      if(that._i >= keys.length)return {value: undefined, done: true};
    } while(!((key = keys[that._i++]) in that._t));
    return {value: key, done: false};
  });
  
  $export($export.S, 'Reflect', {
    enumerate: function enumerate(target){
      return new Enumerate(target);
    }
  });

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
  var gOPD           = __webpack_require__(51)
    , getPrototypeOf = __webpack_require__(59)
    , has            = __webpack_require__(5)
    , $export        = __webpack_require__(8)
    , isObject       = __webpack_require__(13)
    , anObject       = __webpack_require__(12);
  
  function get(target, propertyKey/*, receiver*/){
    var receiver = arguments.length < 3 ? target : arguments[2]
      , desc, proto;
    if(anObject(target) === receiver)return target[propertyKey];
    if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
      ? desc.value
      : desc.get !== undefined
        ? desc.get.call(receiver)
        : undefined;
    if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
  }
  
  $export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
  var gOPD     = __webpack_require__(51)
    , $export  = __webpack_require__(8)
    , anObject = __webpack_require__(12);
  
  $export($export.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
      return gOPD.f(anObject(target), propertyKey);
    }
  });

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.8 Reflect.getPrototypeOf(target)
  var $export  = __webpack_require__(8)
    , getProto = __webpack_require__(59)
    , anObject = __webpack_require__(12);
  
  $export($export.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target){
      return getProto(anObject(target));
    }
  });

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.9 Reflect.has(target, propertyKey)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Reflect', {
    has: function has(target, propertyKey){
      return propertyKey in target;
    }
  });

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.10 Reflect.isExtensible(target)
  var $export       = __webpack_require__(8)
    , anObject      = __webpack_require__(12)
    , $isExtensible = Object.isExtensible;
  
  $export($export.S, 'Reflect', {
    isExtensible: function isExtensible(target){
      anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }
  });

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.11 Reflect.ownKeys(target)
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

  // all object keys, includes non-enumerable and symbols
  var gOPN     = __webpack_require__(50)
    , gOPS     = __webpack_require__(43)
    , anObject = __webpack_require__(12)
    , Reflect  = __webpack_require__(4).Reflect;
  module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
    var keys       = gOPN.f(anObject(it))
      , getSymbols = gOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.12 Reflect.preventExtensions(target)
  var $export            = __webpack_require__(8)
    , anObject           = __webpack_require__(12)
    , $preventExtensions = Object.preventExtensions;
  
  $export($export.S, 'Reflect', {
    preventExtensions: function preventExtensions(target){
      anObject(target);
      try {
        if($preventExtensions)$preventExtensions(target);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
  var dP             = __webpack_require__(11)
    , gOPD           = __webpack_require__(51)
    , getPrototypeOf = __webpack_require__(59)
    , has            = __webpack_require__(5)
    , $export        = __webpack_require__(8)
    , createDesc     = __webpack_require__(17)
    , anObject       = __webpack_require__(12)
    , isObject       = __webpack_require__(13);
  
  function set(target, propertyKey, V/*, receiver*/){
    var receiver = arguments.length < 4 ? target : arguments[3]
      , ownDesc  = gOPD.f(anObject(target), propertyKey)
      , existingDescriptor, proto;
    if(!ownDesc){
      if(isObject(proto = getPrototypeOf(target))){
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if(has(ownDesc, 'value')){
      if(ownDesc.writable === false || !isObject(receiver))return false;
      existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
  
  $export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.14 Reflect.setPrototypeOf(target, proto)
  var $export  = __webpack_require__(8)
    , setProto = __webpack_require__(73);
  
  if(setProto)$export($export.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto){
      setProto.check(target, proto);
      try {
        setProto.set(target, proto);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/tc39/Array.prototype.includes
  var $export   = __webpack_require__(8)
    , $includes = __webpack_require__(36)(true);
  
  $export($export.P, 'Array', {
    includes: function includes(el /*, fromIndex = 0 */){
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  
  __webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/mathiasbynens/String.prototype.at
  var $export = __webpack_require__(8)
    , $at     = __webpack_require__(127)(true);
  
  $export($export.P, 'String', {
    at: function at(pos){
      return $at(this, pos);
    }
  });

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/tc39/proposal-string-pad-start-end
  var $export = __webpack_require__(8)
    , $pad    = __webpack_require__(250);
  
  $export($export.P, 'String', {
    padStart: function padStart(maxLength /*, fillString = ' ' */){
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/tc39/proposal-string-pad-start-end
  var toLength = __webpack_require__(37)
    , repeat   = __webpack_require__(91)
    , defined  = __webpack_require__(35);
  
  module.exports = function(that, maxLength, fillString, left){
    var S            = String(defined(that))
      , stringLength = S.length
      , fillStr      = fillString === undefined ? ' ' : String(fillString)
      , intMaxLength = toLength(maxLength);
    if(intMaxLength <= stringLength || fillStr == '')return S;
    var fillLen = intMaxLength - stringLength
      , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/tc39/proposal-string-pad-start-end
  var $export = __webpack_require__(8)
    , $pad    = __webpack_require__(250);
  
  $export($export.P, 'String', {
    padEnd: function padEnd(maxLength /*, fillString = ' ' */){
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
  __webpack_require__(83)('trimLeft', function($trim){
    return function trimLeft(){
      return $trim(this, 1);
    };
  }, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
  __webpack_require__(83)('trimRight', function($trim){
    return function trimRight(){
      return $trim(this, 2);
    };
  }, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://tc39.github.io/String.prototype.matchAll/
  var $export     = __webpack_require__(8)
    , defined     = __webpack_require__(35)
    , toLength    = __webpack_require__(37)
    , isRegExp    = __webpack_require__(134)
    , getFlags    = __webpack_require__(196)
    , RegExpProto = RegExp.prototype;
  
  var $RegExpStringIterator = function(regexp, string){
    this._r = regexp;
    this._s = string;
  };
  
  __webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
    var match = this._r.exec(this._s);
    return {value: match, done: match === null};
  });
  
  $export($export.P, 'String', {
    matchAll: function matchAll(regexp){
      defined(this);
      if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
      var S     = String(this)
        , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
        , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
      rx.lastIndex = toLength(regexp.lastIndex);
      return new $RegExpStringIterator(rx, S);
    }
  });

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/tc39/proposal-object-getownpropertydescriptors
  var $export        = __webpack_require__(8)
    , ownKeys        = __webpack_require__(243)
    , toIObject      = __webpack_require__(32)
    , gOPD           = __webpack_require__(51)
    , createProperty = __webpack_require__(163);
  
  $export($export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
      var O       = toIObject(object)
        , getDesc = gOPD.f
        , keys    = ownKeys(O)
        , result  = {}
        , i       = 0
        , key;
      while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
      return result;
    }
  });

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/tc39/proposal-object-values-entries
  var $export = __webpack_require__(8)
    , $values = __webpack_require__(259)(false);
  
  $export($export.S, 'Object', {
    values: function values(it){
      return $values(it);
    }
  });

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

  var getKeys   = __webpack_require__(30)
    , toIObject = __webpack_require__(32)
    , isEnum    = __webpack_require__(44).f;
  module.exports = function(isEntries){
    return function(it){
      var O      = toIObject(it)
        , keys   = getKeys(O)
        , length = keys.length
        , i      = 0
        , result = []
        , key;
      while(length > i)if(isEnum.call(O, key = keys[i++])){
        result.push(isEntries ? [key, O[key]] : O[key]);
      } return result;
    };
  };

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/tc39/proposal-object-values-entries
  var $export  = __webpack_require__(8)
    , $entries = __webpack_require__(259)(true);
  
  $export($export.S, 'Object', {
    entries: function entries(it){
      return $entries(it);
    }
  });

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export         = __webpack_require__(8)
    , toObject        = __webpack_require__(58)
    , aFunction       = __webpack_require__(21)
    , $defineProperty = __webpack_require__(11);
  
  // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
  __webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
    __defineGetter__: function __defineGetter__(P, getter){
      $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
    }
  });

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

  // Forced replacement prototype accessors methods
  module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
    var K = Math.random();
    // In FF throws only define methods
    __defineSetter__.call(null, K, function(){ /* empty */});
    delete __webpack_require__(4)[K];
  });

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export         = __webpack_require__(8)
    , toObject        = __webpack_require__(58)
    , aFunction       = __webpack_require__(21)
    , $defineProperty = __webpack_require__(11);
  
  // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
  __webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
    __defineSetter__: function __defineSetter__(P, setter){
      $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
    }
  });

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export                  = __webpack_require__(8)
    , toObject                 = __webpack_require__(58)
    , toPrimitive              = __webpack_require__(16)
    , getPrototypeOf           = __webpack_require__(59)
    , getOwnPropertyDescriptor = __webpack_require__(51).f;
  
  // B.2.2.4 Object.prototype.__lookupGetter__(P)
  __webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
    __lookupGetter__: function __lookupGetter__(P){
      var O = toObject(this)
        , K = toPrimitive(P, true)
        , D;
      do {
        if(D = getOwnPropertyDescriptor(O, K))return D.get;
      } while(O = getPrototypeOf(O));
    }
  });

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export                  = __webpack_require__(8)
    , toObject                 = __webpack_require__(58)
    , toPrimitive              = __webpack_require__(16)
    , getPrototypeOf           = __webpack_require__(59)
    , getOwnPropertyDescriptor = __webpack_require__(51).f;
  
  // B.2.2.5 Object.prototype.__lookupSetter__(P)
  __webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
    __lookupSetter__: function __lookupSetter__(P){
      var O = toObject(this)
        , K = toPrimitive(P, true)
        , D;
      do {
        if(D = getOwnPropertyDescriptor(O, K))return D.set;
      } while(O = getPrototypeOf(O));
    }
  });

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export  = __webpack_require__(8);
  
  $export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var classof = __webpack_require__(75)
    , from    = __webpack_require__(268);
  module.exports = function(NAME){
    return function toJSON(){
      if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
      return from(this);
    };
  };

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

  var forOf = __webpack_require__(206);
  
  module.exports = function(iter, ITERATOR){
    var result = [];
    forOf(iter, false, result.push, result, ITERATOR);
    return result;
  };


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export  = __webpack_require__(8);
  
  $export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/ljharb/proposal-global
  var $export = __webpack_require__(8);
  
  $export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/ljharb/proposal-is-error
  var $export = __webpack_require__(8)
    , cof     = __webpack_require__(34);
  
  $export($export.S, 'Error', {
    isError: function isError(it){
      return cof(it) === 'Error';
    }
  });

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {
    iaddh: function iaddh(x0, x1, y0, y1){
      var $x0 = x0 >>> 0
        , $x1 = x1 >>> 0
        , $y0 = y0 >>> 0;
      return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
    }
  });

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {
    isubh: function isubh(x0, x1, y0, y1){
      var $x0 = x0 >>> 0
        , $x1 = x1 >>> 0
        , $y0 = y0 >>> 0;
      return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
    }
  });

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {
    imulh: function imulh(u, v){
      var UINT16 = 0xffff
        , $u = +u
        , $v = +v
        , u0 = $u & UINT16
        , v0 = $v & UINT16
        , u1 = $u >> 16
        , v1 = $v >> 16
        , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
    }
  });

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = __webpack_require__(8);
  
  $export($export.S, 'Math', {
    umulh: function umulh(u, v){
      var UINT16 = 0xffff
        , $u = +u
        , $v = +v
        , u0 = $u & UINT16
        , v0 = $v & UINT16
        , u1 = $u >>> 16
        , v1 = $v >>> 16
        , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
    }
  });

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

  var metadata                  = __webpack_require__(277)
    , anObject                  = __webpack_require__(12)
    , toMetaKey                 = metadata.key
    , ordinaryDefineOwnMetadata = metadata.set;
  
  metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
  }});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

  var Map     = __webpack_require__(211)
    , $export = __webpack_require__(8)
    , shared  = __webpack_require__(23)('metadata')
    , store   = shared.store || (shared.store = new (__webpack_require__(215)));
  
  var getOrCreateMetadataMap = function(target, targetKey, create){
    var targetMetadata = store.get(target);
    if(!targetMetadata){
      if(!create)return undefined;
      store.set(target, targetMetadata = new Map);
    }
    var keyMetadata = targetMetadata.get(targetKey);
    if(!keyMetadata){
      if(!create)return undefined;
      targetMetadata.set(targetKey, keyMetadata = new Map);
    } return keyMetadata;
  };
  var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
  };
  var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
  };
  var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
    getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
  };
  var ordinaryOwnMetadataKeys = function(target, targetKey){
    var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
      , keys        = [];
    if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
    return keys;
  };
  var toMetaKey = function(it){
    return it === undefined || typeof it == 'symbol' ? it : String(it);
  };
  var exp = function(O){
    $export($export.S, 'Reflect', O);
  };
  
  module.exports = {
    store: store,
    map: getOrCreateMetadataMap,
    has: ordinaryHasOwnMetadata,
    get: ordinaryGetOwnMetadata,
    set: ordinaryDefineOwnMetadata,
    keys: ordinaryOwnMetadataKeys,
    key: toMetaKey,
    exp: exp
  };

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(277)
    , anObject               = __webpack_require__(12)
    , toMetaKey              = metadata.key
    , getOrCreateMetadataMap = metadata.map
    , store                  = metadata.store;
  
  metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
    var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
      , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
    if(metadataMap.size)return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  }});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(277)
    , anObject               = __webpack_require__(12)
    , getPrototypeOf         = __webpack_require__(59)
    , ordinaryHasOwnMetadata = metadata.has
    , ordinaryGetOwnMetadata = metadata.get
    , toMetaKey              = metadata.key;
  
  var ordinaryGetMetadata = function(MetadataKey, O, P){
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
  };
  
  metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  }});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

  var Set                     = __webpack_require__(214)
    , from                    = __webpack_require__(268)
    , metadata                = __webpack_require__(277)
    , anObject                = __webpack_require__(12)
    , getPrototypeOf          = __webpack_require__(59)
    , ordinaryOwnMetadataKeys = metadata.keys
    , toMetaKey               = metadata.key;
  
  var ordinaryMetadataKeys = function(O, P){
    var oKeys  = ordinaryOwnMetadataKeys(O, P)
      , parent = getPrototypeOf(O);
    if(parent === null)return oKeys;
    var pKeys  = ordinaryMetadataKeys(parent, P);
    return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
  };
  
  metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  }});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(277)
    , anObject               = __webpack_require__(12)
    , ordinaryGetOwnMetadata = metadata.get
    , toMetaKey              = metadata.key;
  
  metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
    return ordinaryGetOwnMetadata(metadataKey, anObject(target)
      , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  }});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

  var metadata                = __webpack_require__(277)
    , anObject                = __webpack_require__(12)
    , ordinaryOwnMetadataKeys = metadata.keys
    , toMetaKey               = metadata.key;
  
  metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  }});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(277)
    , anObject               = __webpack_require__(12)
    , getPrototypeOf         = __webpack_require__(59)
    , ordinaryHasOwnMetadata = metadata.has
    , toMetaKey              = metadata.key;
  
  var ordinaryHasMetadata = function(MetadataKey, O, P){
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if(hasOwn)return true;
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
  };
  
  metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  }});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(277)
    , anObject               = __webpack_require__(12)
    , ordinaryHasOwnMetadata = metadata.has
    , toMetaKey              = metadata.key;
  
  metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
    return ordinaryHasOwnMetadata(metadataKey, anObject(target)
      , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  }});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

  var metadata                  = __webpack_require__(277)
    , anObject                  = __webpack_require__(12)
    , aFunction                 = __webpack_require__(21)
    , toMetaKey                 = metadata.key
    , ordinaryDefineOwnMetadata = metadata.set;
  
  metadata.exp({metadata: function metadata(metadataKey, metadataValue){
    return function decorator(target, targetKey){
      ordinaryDefineOwnMetadata(
        metadataKey, metadataValue,
        (targetKey !== undefined ? anObject : aFunction)(target),
        toMetaKey(targetKey)
      );
    };
  }});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
  var $export   = __webpack_require__(8)
    , microtask = __webpack_require__(209)()
    , process   = __webpack_require__(4).process
    , isNode    = __webpack_require__(34)(process) == 'process';
  
  $export($export.G, {
    asap: function asap(fn){
      var domain = isNode && process.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/zenparsing/es-observable
  var $export     = __webpack_require__(8)
    , global      = __webpack_require__(4)
    , core        = __webpack_require__(9)
    , microtask   = __webpack_require__(209)()
    , OBSERVABLE  = __webpack_require__(25)('observable')
    , aFunction   = __webpack_require__(21)
    , anObject    = __webpack_require__(12)
    , anInstance  = __webpack_require__(205)
    , redefineAll = __webpack_require__(210)
    , hide        = __webpack_require__(10)
    , forOf       = __webpack_require__(206)
    , RETURN      = forOf.RETURN;
  
  var getMethod = function(fn){
    return fn == null ? undefined : aFunction(fn);
  };
  
  var cleanupSubscription = function(subscription){
    var cleanup = subscription._c;
    if(cleanup){
      subscription._c = undefined;
      cleanup();
    }
  };
  
  var subscriptionClosed = function(subscription){
    return subscription._o === undefined;
  };
  
  var closeSubscription = function(subscription){
    if(!subscriptionClosed(subscription)){
      subscription._o = undefined;
      cleanupSubscription(subscription);
    }
  };
  
  var Subscription = function(observer, subscriber){
    anObject(observer);
    this._c = undefined;
    this._o = observer;
    observer = new SubscriptionObserver(this);
    try {
      var cleanup      = subscriber(observer)
        , subscription = cleanup;
      if(cleanup != null){
        if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
        else aFunction(cleanup);
        this._c = cleanup;
      }
    } catch(e){
      observer.error(e);
      return;
    } if(subscriptionClosed(this))cleanupSubscription(this);
  };
  
  Subscription.prototype = redefineAll({}, {
    unsubscribe: function unsubscribe(){ closeSubscription(this); }
  });
  
  var SubscriptionObserver = function(subscription){
    this._s = subscription;
  };
  
  SubscriptionObserver.prototype = redefineAll({}, {
    next: function next(value){
      var subscription = this._s;
      if(!subscriptionClosed(subscription)){
        var observer = subscription._o;
        try {
          var m = getMethod(observer.next);
          if(m)return m.call(observer, value);
        } catch(e){
          try {
            closeSubscription(subscription);
          } finally {
            throw e;
          }
        }
      }
    },
    error: function error(value){
      var subscription = this._s;
      if(subscriptionClosed(subscription))throw value;
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.error);
        if(!m)throw value;
        value = m.call(observer, value);
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    },
    complete: function complete(value){
      var subscription = this._s;
      if(!subscriptionClosed(subscription)){
        var observer = subscription._o;
        subscription._o = undefined;
        try {
          var m = getMethod(observer.complete);
          value = m ? m.call(observer, value) : undefined;
        } catch(e){
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        } cleanupSubscription(subscription);
        return value;
      }
    }
  });
  
  var $Observable = function Observable(subscriber){
    anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
  };
  
  redefineAll($Observable.prototype, {
    subscribe: function subscribe(observer){
      return new Subscription(observer, this._f);
    },
    forEach: function forEach(fn){
      var that = this;
      return new (core.Promise || global.Promise)(function(resolve, reject){
        aFunction(fn);
        var subscription = that.subscribe({
          next : function(value){
            try {
              return fn(value);
            } catch(e){
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  });
  
  redefineAll($Observable, {
    from: function from(x){
      var C = typeof this === 'function' ? this : $Observable;
      var method = getMethod(anObject(x)[OBSERVABLE]);
      if(method){
        var observable = anObject(method.call(x));
        return observable.constructor === C ? observable : new C(function(observer){
          return observable.subscribe(observer);
        });
      }
      return new C(function(observer){
        var done = false;
        microtask(function(){
          if(!done){
            try {
              if(forOf(x, false, function(it){
                observer.next(it);
                if(done)return RETURN;
              }) === RETURN)return;
            } catch(e){
              if(done)throw e;
              observer.error(e);
              return;
            } observer.complete();
          }
        });
        return function(){ done = true; };
      });
    },
    of: function of(){
      for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
      return new (typeof this === 'function' ? this : $Observable)(function(observer){
        var done = false;
        microtask(function(){
          if(!done){
            for(var i = 0; i < items.length; ++i){
              observer.next(items[i]);
              if(done)return;
            } observer.complete();
          }
        });
        return function(){ done = true; };
      });
    }
  });
  
  hide($Observable.prototype, OBSERVABLE, function(){ return this; });
  
  $export($export.G, {Observable: $Observable});
  
  __webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

  // ie9- setTimeout & setInterval additional parameters fix
  var global     = __webpack_require__(4)
    , $export    = __webpack_require__(8)
    , invoke     = __webpack_require__(78)
    , partial    = __webpack_require__(289)
    , navigator  = global.navigator
    , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
  var wrap = function(set){
    return MSIE ? function(fn, time /*, ...args */){
      return set(invoke(
        partial,
        [].slice.call(arguments, 2),
        typeof fn == 'function' ? fn : Function(fn)
      ), time);
    } : set;
  };
  $export($export.G + $export.B + $export.F * MSIE, {
    setTimeout:  wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
  });

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var path      = __webpack_require__(290)
    , invoke    = __webpack_require__(78)
    , aFunction = __webpack_require__(21);
  module.exports = function(/* ...pargs */){
    var fn     = aFunction(this)
      , length = arguments.length
      , pargs  = Array(length)
      , i      = 0
      , _      = path._
      , holder = false;
    while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
    return function(/* ...args */){
      var that = this
        , aLen = arguments.length
        , j = 0, k = 0, args;
      if(!holder && !aLen)return invoke(fn, pargs, that);
      args = pargs.slice();
      if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
      while(aLen > k)args.push(arguments[k++]);
      return invoke(fn, args, that);
    };
  };

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(8)
    , $task   = __webpack_require__(208);
  $export($export.G + $export.B, {
    setImmediate:   $task.set,
    clearImmediate: $task.clear
  });

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

  var $iterators    = __webpack_require__(193)
    , redefine      = __webpack_require__(18)
    , global        = __webpack_require__(4)
    , hide          = __webpack_require__(10)
    , Iterators     = __webpack_require__(129)
    , wks           = __webpack_require__(25)
    , ITERATOR      = wks('iterator')
    , TO_STRING_TAG = wks('toStringTag')
    , ArrayValues   = Iterators.Array;
  
  for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
    var NAME       = collections[i]
      , Collection = global[NAME]
      , proto      = Collection && Collection.prototype
      , key;
    if(proto){
      if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
      if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = ArrayValues;
      for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
    }
  }

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global, process) {/**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */
  
  !(function(global) {
    "use strict";
  
    var hasOwn = Object.prototype.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
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
  
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
  
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
    // `value instanceof AwaitArgument` to determine if the yielded value is
    // meant to be awaited. Some may consider the name of this method too
    // cutesy, but they are curmudgeons.
    runtime.awrap = function(arg) {
      return new AwaitArgument(arg);
    };
  
    function AwaitArgument(arg) {
      this.arg = arg;
    }
  
    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value instanceof AwaitArgument) {
            return Promise.resolve(value.arg).then(function(value) {
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
  
      if (typeof process === "object" && process.domain) {
        invoke = process.domain.bind(invoke);
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
  
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            if (method === "return" ||
                (method === "throw" && delegate.iterator[method] === undefined)) {
              // A return or throw (when the delegate iterator has no throw
              // method) always terminates the yield* loop.
              context.delegate = null;
  
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              var returnMethod = delegate.iterator["return"];
              if (returnMethod) {
                var record = tryCatch(returnMethod, delegate.iterator, arg);
                if (record.type === "throw") {
                  // If the return method threw an exception, let that
                  // exception prevail over the original return or throw.
                  method = "throw";
                  arg = record.arg;
                  continue;
                }
              }
  
              if (method === "return") {
                // Continue with the outer return, now that the delegate
                // iterator has been terminated.
                continue;
              }
            }
  
            var record = tryCatch(
              delegate.iterator[method],
              delegate.iterator,
              arg
            );
  
            if (record.type === "throw") {
              context.delegate = null;
  
              // Like returning generator.throw(uncaught), but without the
              // overhead of an extra function call.
              method = "throw";
              arg = record.arg;
              continue;
            }
  
            // Delegate generator ran and handled its own exceptions so
            // regardless of what the method was, we continue as if it is
            // "next" with an undefined arg.
            method = "next";
            arg = undefined;
  
            var info = record.arg;
            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;
            } else {
              state = GenStateSuspendedYield;
              return info;
            }
  
            context.delegate = null;
          }
  
          if (method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = arg;
  
          } else if (method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw arg;
            }
  
            if (context.dispatchException(arg)) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              method = "next";
              arg = undefined;
            }
  
          } else if (method === "return") {
            context.abrupt("return", arg);
          }
  
          state = GenStateExecuting;
  
          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;
  
            var info = {
              value: record.arg,
              done: context.done
            };
  
            if (record.arg === ContinueSentinel) {
              if (context.delegate && method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                arg = undefined;
              }
            } else {
              return info;
            }
  
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(arg) call above.
            method = "throw";
            arg = record.arg;
          }
        }
      };
    }
  
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
  
    Gp[iteratorSymbol] = function() {
      return this;
    };
  
    Gp[toStringTagSymbol] = "Generator";
  
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
          return !!caught;
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
          this.next = finallyEntry.finallyLoc;
        } else {
          this.complete(record);
        }
  
        return ContinueSentinel;
      },
  
      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
  
        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = record.arg;
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
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
  
        return ContinueSentinel;
      }
    };
  })(
    // Among the various tricks for obtaining a reference to the global
    // object, this seems to be the most reliable technique that does not
    // use indirect eval (which violates Content Security Policy).
    typeof global === "object" ? global :
    typeof window === "object" ? window :
    typeof self === "object" ? self : this
  );
  
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

  // shim for using process in browser
  var process = module.exports = {};
  
  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.
  
  var cachedSetTimeout;
  var cachedClearTimeout;
  
  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ())
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }
  
  
  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }
  
  
  
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  
  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }
  
  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
  
      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  
  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };
  
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};
  
  function noop() {}
  
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  
  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };
  
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(296);
  module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/benjamingr/RexExp.escape
  var $export = __webpack_require__(8)
    , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
  
  $export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

  module.exports = function(regExp, replace){
    var replacer = replace === Object(replace) ? function(part){
      return replace[part];
    } : replace;
    return function(it){
      return String(it).replace(regExp, replacer);
    };
  };

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  var Vector = __webpack_require__(299);
  var Particle = __webpack_require__(300);
  var Utils = __webpack_require__(302);
  var Shapes = __webpack_require__(303);
  
  module.exports = {
    Vector: Vector,
    Particle: Particle,
    Utils: Utils,
    Shapes: Shapes
  };

/***/ },
/* 299 */
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
   * @param  {String} prop  The prop to set on state.
   * @return {Value}        The value assosiated with the prop.
   */
  Vector.prototype.get = function get(prop) {
    return this.state[prop];
  };
  
  /**
   * setAngle - Plot the corrdinates based on radians given.
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
/* 300 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  /**
   * The particle libary is used for physics animations.
   * they are not extremely accurate but still represent
   * and feel like physical movments.
   */
  var extend = __webpack_require__(301);
  
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
   * @return {Boolean}    A boolean to tell wether the property
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
   * @param  {Object}   opts  optional state values to pass to create.
   * @return {Particle}         returns a particle
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
   * @return {Value}  state of the particle after accelerating.
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
   * @param  {Particle} p2      A particle instance.
   * @return {Integer}  Angle   A angle.
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
   * @param  {Particle} p2      A particle instance
   * @return {Integer}  Angle   A Distance
   */
  Particle.prototype.distanceTo = function distanceTo(p2) {
    var deltaX = p2.get("position").get("x") - this.get("position").get("x");
    var deltaY = p2.get("position").get("y") - this.get("position").get("y");
    return Math.hypot(deltaX, deltaY);
  };
  
  /**
   * gravitateTo - Creates a gravity vector if he
   * @param  {Particle} p2          A particle instance.
   * @param  {Vector}   vector      A vector instance.
   * @return {Vector}   veclocity   The velocity of the current state.
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
/* 301 */
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
/* 302 */
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
   * @param  {Float} val  A value.
   * @return {Percent}    A value.
   */
  Utils.prototype.precent = function (val) {
    return val * 100;
  };
  
  module.exports = Utils;

/***/ },
/* 303 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZjg2OTcwMzU0Y2VlYWZkYTMzNiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9zaGltLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19iaW5kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy13cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYS1udW1iZXItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tcHJlY2lzaW9uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWxvZzFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hdGFuaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1leHBtMS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmh5cG90LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpbmguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmF3LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLWlzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1Yi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUubm93LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZGF0ZS10by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zdHJpY3QtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktcmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5sYXN0LWluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWNvcHktd2l0aGluLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi13ZWFrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmFycmF5LWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDgtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtY2xhbXBlZC1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQxNi1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MzItYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDMyLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLmF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXBhZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWVuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5tYXRjaC1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtZ2V0dGVyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1mb3JjZWQtcGFtLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtc2V0dGVyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtZ2V0dGVyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtc2V0dGVyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5c3RlbS5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuZXJyb3IuaXMtZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pYWRkaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLmlzdWJoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGguaW11bGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC51bXVsaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlZmluZS1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1vd24tbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3BhcnRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi5pbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL2ZuL3JlZ2V4cC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcmVwbGFjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi92ZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NoYXBlcy5qcyJdLCJuYW1lcyI6WyJWZWN0b3IiLCJyZXF1aXJlIiwiUGFydGljbGUiLCJVdGlscyIsIlNoYXBlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJJTklUSUFMX1NUQVRFIiwieCIsInkiLCJzdGF0ZSIsInByb3RvdHlwZSIsImNyZWF0ZSIsInZlYyIsInNldCIsInByb3AiLCJ2YWwiLCJoYXNPd25Qcm9wZXJ0eSIsImdldCIsInNldEFuZ2xlIiwicmFkIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiTWF0aCIsImNvcyIsInNpbiIsInNldExlbmd0aCIsImdldEFuZ2xlIiwiaHlwb3QiLCJhdGFuMiIsImFkZCIsInYyIiwic2VsZiIsImNvbnN0cnVjdG9yIiwibmFtZSIsInZlY3MiLCJtYXAiLCJ2IiwicmVkdWNlIiwidjAiLCJ2biIsInN1YnRyYWN0IiwibXVsdGlwbHkiLCJkaXZpZGUiLCJhZGRUbyIsInN1YnRyYWN0RnJvbSIsIm11bHRpcGx5QnkiLCJkaXZpZGVCeSIsImV4dGVuZCIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJncmF2aXR5IiwicmFkaXVzIiwibWFzcyIsIm9wdHMiLCJwYXJ0aWNsZSIsImFjY2VsZXJhdGUiLCJhY2NlbCIsInVwZGF0ZSIsImdyYXYiLCJhbmdsZVRvIiwiYW5nZWxUbyIsInAyIiwiZHgiLCJkeSIsImRpc3RhbmNlVG8iLCJkZWx0YVgiLCJkZWx0YVkiLCJncmF2aXRhdGVUbyIsInZlY3RvciIsImRpc3QiLCJub3JtYWxpemUiLCJtYXgiLCJtaW4iLCJsZXJwIiwicHJlY2VudCIsImN0eCIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJjaXJjbGUiLCJkcmF3Q2lyY2xlIiwiciIsImNvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7O0FDM0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7OztBQy9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCLHFCQUFvQix1QkFBdUIsU0FBUyxJQUFJO0FBQ3hELElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNB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QTtBQUNBLEc7Ozs7OztBQ3BGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBd0IsbUVBQW1FO0FBQzNGLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsVTs7Ozs7O0FDWEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTCxJQUFHO0FBQ0gsRTs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCLDJCQUEwQjtBQUMxQjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEc7Ozs7OztBQ2xGQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0EsRUFBQyxFOzs7Ozs7QUNWRDtBQUNBOztBQUVBLGdDQUErQixrQ0FBZ0MsRTs7Ozs7O0FDSC9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBK0IsU0FBUyxFOzs7Ozs7QUM5QnhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNkRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsc0M7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNURDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDVEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNURDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLGU7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsYTs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQzdCRCwwQzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNsQkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEc7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDUkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsNkRBQTZEO0FBQ3ZHO0FBQ0EsRUFBQyxFOzs7Ozs7QUNYRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxhQUFhO0FBQ3pEO0FBQ0EsRUFBQyxFOzs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQyw2REFBNkQ7QUFDdkc7QUFDQSxFQUFDLEU7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQyxFOzs7Ozs7QUNqQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDLEU7Ozs7OztBQ2pCRDtBQUNBOztBQUVBLHdDQUF1Qyx3Q0FBZ0QsRTs7Ozs7O0FDSHZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNSQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTs7QUFFQSx3Q0FBdUMsd0NBQWdELEU7Ozs7OztBQ0h2RjtBQUNBOztBQUVBLCtCQUE4QiwrQkFBNkIsRTs7Ozs7O0FDSDNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDUkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDVkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDVkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ2ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjO0FBQ2Q7QUFDQSxHQUFFLEU7Ozs7OztBQ1BGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRCxnQkFBZ0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUUsRTs7Ozs7O0FDZEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjO0FBQ2Q7QUFDQSxHQUFFLEU7Ozs7OztBQ2hCRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjO0FBQ2Q7QUFDQSxHQUFFLEU7Ozs7OztBQ2xCRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBLEdBQUUsRTs7Ozs7O0FDUkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYztBQUNkO0FBQ0EsR0FBRSxFOzs7Ozs7QUNQRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjO0FBQ2Q7QUFDQSxHQUFFLEU7Ozs7OztBQ2ZGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBO0FBQ0EsR0FBRSxFOzs7Ozs7QUNSRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUUsRTs7Ozs7O0FDZEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNYRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EseUNBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBOztBQUVBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGFBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNXBCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUlBWCxRQUFPQyxPQUFQLEdBQWlCSCxLQUFqQixDOzs7Ozs7OztBQzdDQTs7Ozs7QUFLQSxVQUFTQyxNQUFULENBQWdCd0UsR0FBaEIsRUFBcUJDLFFBQXJCLEVBQStCO0FBQzdCLE9BQUksQ0FBQ0QsR0FBTCxFQUFVO0FBQ1IsV0FBTSxJQUFJRSxLQUFKLENBQVUsb0RBQVYsQ0FBTjtBQUNEO0FBQ0QsUUFBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsUUFBS0MsUUFBTCxHQUFnQkEsWUFBWUUsT0FBT0YsUUFBbkM7QUFDRDs7QUFFRDs7Ozs7OztBQU9BekUsUUFBT08sU0FBUCxDQUFpQnFFLE1BQWpCLEdBQTBCLFNBQVNDLFVBQVQsR0FBb0Q7QUFBQSxPQUFoQ3pFLENBQWdDLHVFQUE5QixDQUE4QjtBQUFBLE9BQTNCQyxDQUEyQix1RUFBekIsQ0FBeUI7QUFBQSxPQUF0QnlFLENBQXNCLHVFQUFwQixDQUFvQjtBQUFBLE9BQWpCQyxLQUFpQix1RUFBWCxTQUFXOztBQUM1RSxRQUFLUCxHQUFMLENBQVNRLFNBQVQsR0FBcUJELEtBQXJCO0FBQ0EsUUFBS1AsR0FBTCxDQUFTUyxTQUFUO0FBQ0EsUUFBS1QsR0FBTCxDQUFTVSxHQUFULENBQWE5RSxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQnlFLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCM0QsS0FBS2dFLEVBQUwsR0FBVSxDQUFuQyxFQUFzQyxLQUF0QztBQUNBLFFBQUtYLEdBQUwsQ0FBU1ksSUFBVDtBQUNELEVBTEQ7O0FBT0FuRixRQUFPQyxPQUFQLEdBQWlCRixNQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYXJ0aWNsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYXJ0aWNsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZjg2OTcwMzU0Y2VlYWZkYTMzNiIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9zaGltXCIpO1xuXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9mbi9yZWdleHAvZXNjYXBlXCIpO1xuXG5pZiAoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIm9ubHkgb25lIGluc3RhbmNlIG9mIGJhYmVsLXBvbHlmaWxsIGlzIGFsbG93ZWRcIik7XG59XG5nbG9iYWwuX2JhYmVsUG9seWZpbGwgPSB0cnVlO1xuXG52YXIgREVGSU5FX1BST1BFUlRZID0gXCJkZWZpbmVQcm9wZXJ0eVwiO1xuZnVuY3Rpb24gZGVmaW5lKE8sIGtleSwgdmFsdWUpIHtcbiAgT1trZXldIHx8IE9iamVjdFtERUZJTkVfUFJPUEVSVFldKE8sIGtleSwge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5cbmRlZmluZShTdHJpbmcucHJvdG90eXBlLCBcInBhZExlZnRcIiwgXCJcIi5wYWRTdGFydCk7XG5kZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgXCJwYWRSaWdodFwiLCBcIlwiLnBhZEVuZCk7XG5cblwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcyxpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzLGpvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZixyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsXCIuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBbXVtrZXldICYmIGRlZmluZShBcnJheSwga2V5LCBGdW5jdGlvbi5jYWxsLmJpbmQoW11ba2V5XSkpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLXNlYWxlZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmJpbmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucGFyc2UtaW50Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYXNpbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hdGFuaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNicnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jbHozMicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNvc2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5leHBtMScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmh5cG90Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguaW11bCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguc2lnbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnNpbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC50YW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy50cmltJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuYW5jaG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5iaWcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5ib2xkJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5mb250c2l6ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRhbGljcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcubGluaycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc21hbGwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZGF0ZS5ub3cnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZGF0ZS50by1qc29uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5pcy1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lm9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmpvaW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc29ydCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5mb3ItZWFjaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5tYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmlsdGVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnNvbWUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZXZlcnknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5sYXN0LWluZGV4LW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmluZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtZW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLm1hdGNoLWFsbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLWdldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLXNldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLWdldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLXNldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zeXN0ZW0uZ2xvYmFsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LmVycm9yLmlzLWVycm9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGguaWFkZGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWF0aC5pc3ViaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXRoLmltdWxoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGgudW11bGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuYXNhcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYnNlcnZhYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLnRpbWVycycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi5pbW1lZGlhdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbW9kdWxlcy9fY29yZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjMgLyAxNS4yLjMuNyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0aWVzOiByZXF1aXJlKCcuL19vYmplY3QtZHBzJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpLmY7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIG1ldGEgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uKCRmcmVlemUpe1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnc2VhbCcsIGZ1bmN0aW9uKCRzZWFsKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xuICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgncHJldmVudEV4dGVuc2lvbnMnLCBmdW5jdGlvbigkcHJldmVudEV4dGVuc2lvbnMpe1xuICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMgJiYgaXNPYmplY3QoaXQpID8gJHByZXZlbnRFeHRlbnNpb25zKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTIgT2JqZWN0LmlzRnJvemVuKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdpc0Zyb3plbicsIGZ1bmN0aW9uKCRpc0Zyb3plbil7XG4gIHJldHVybiBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0Zyb3plbiA/ICRpc0Zyb3plbihpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xMyBPYmplY3QuaXNTZWFsZWQoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2lzU2VhbGVkJywgZnVuY3Rpb24oJGlzU2VhbGVkKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzU2VhbGVkID8gJGlzU2VhbGVkKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLXNlYWxlZC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjExIE9iamVjdC5pc0V4dGVuc2libGUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uKCRpc0V4dGVuc2libGUpe1xuICByZXR1cm4gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZSA6IGZhbHNlO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtpczogcmVxdWlyZSgnLi9fc2FtZS12YWx1ZScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSl7XG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3NhbWUtdmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjIuMy4yIC8gMTUuMy40LjUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQodGhpc0FyZywgYXJncy4uLilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnRnVuY3Rpb24nLCB7YmluZDogcmVxdWlyZSgnLi9fYmluZCcpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGlzT2JqZWN0ICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGludm9rZSAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGFycmF5U2xpY2UgPSBbXS5zbGljZVxuICAsIGZhY3RvcmllcyAgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uKEYsIGxlbiwgYXJncyl7XG4gIGlmKCEobGVuIGluIGZhY3Rvcmllcykpe1xuICAgIGZvcih2YXIgbiA9IFtdLCBpID0gMDsgaSA8IGxlbjsgaSsrKW5baV0gPSAnYVsnICsgaSArICddJztcbiAgICBmYWN0b3JpZXNbbGVuXSA9IEZ1bmN0aW9uKCdGLGEnLCAncmV0dXJuIG5ldyBGKCcgKyBuLmpvaW4oJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1tsZW5dKEYsIGFyZ3MpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiwgYXJncy4uLiAqLyl7XG4gIHZhciBmbiAgICAgICA9IGFGdW5jdGlvbih0aGlzKVxuICAgICwgcGFydEFyZ3MgPSBhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kID0gZnVuY3Rpb24oLyogYXJncy4uLiAqLyl7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmQgPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gIH07XG4gIGlmKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpYm91bmQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYmluZC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgaGFzICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgRlByb3RvICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAsIG5hbWVSRSAgICAgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS9cbiAgLCBOQU1FICAgICAgID0gJ25hbWUnO1xuXG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpe1xuICAgIHRyeSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgLCBuYW1lID0gKCcnICsgdGhhdCkubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIGhhcyh0aGF0LCBOQU1FKSB8fCAhaXNFeHRlbnNpYmxlKHRoYXQpIHx8IGRQKHRoYXQsIE5BTUUsIGNyZWF0ZURlc2MoNSwgbmFtZSkpO1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIEhBU19JTlNUQU5DRSAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2hhc0luc3RhbmNlJylcbiAgLCBGdW5jdGlvblByb3RvICA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxuaWYoIShIQVNfSU5TVEFOQ0UgaW4gRnVuY3Rpb25Qcm90bykpcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihGdW5jdGlvblByb3RvLCBIQVNfSU5TVEFOQ0UsIHt2YWx1ZTogZnVuY3Rpb24oTyl7XG4gIGlmKHR5cGVvZiB0aGlzICE9ICdmdW5jdGlvbicgfHwgIWlzT2JqZWN0KE8pKXJldHVybiBmYWxzZTtcbiAgaWYoIWlzT2JqZWN0KHRoaXMucHJvdG90eXBlKSlyZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XG4gIC8vIGZvciBlbnZpcm9ubWVudCB3L28gbmF0aXZlIGBAQGhhc0luc3RhbmNlYCBsb2dpYyBlbm91Z2ggYGluc3RhbmNlb2ZgLCBidXQgYWRkIHRoaXM6XG4gIHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSlpZih0aGlzLnByb3RvdHlwZSA9PT0gTylyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcGFyc2VJbnQgPSByZXF1aXJlKCcuL19wYXJzZS1pbnQnKTtcbi8vIDE4LjIuNSBwYXJzZUludChzdHJpbmcsIHJhZGl4KVxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYgKiAocGFyc2VJbnQgIT0gJHBhcnNlSW50KSwge3BhcnNlSW50OiAkcGFyc2VJbnR9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRwYXJzZUludCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLnBhcnNlSW50XG4gICwgJHRyaW0gICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKS50cmltXG4gICwgd3MgICAgICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXdzJylcbiAgLCBoZXggICAgICAgPSAvXltcXC0rXT8wW3hYXS87XG5cbm1vZHVsZS5leHBvcnRzID0gJHBhcnNlSW50KHdzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdzICsgJzB4MTYnKSAhPT0gMjIgPyBmdW5jdGlvbiBwYXJzZUludChzdHIsIHJhZGl4KXtcbiAgdmFyIHN0cmluZyA9ICR0cmltKFN0cmluZyhzdHIpLCAzKTtcbiAgcmV0dXJuICRwYXJzZUludChzdHJpbmcsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KHN0cmluZykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcGFyc2UtaW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc3BhY2VzICA9IHJlcXVpcmUoJy4vX3N0cmluZy13cycpXG4gICwgc3BhY2UgICA9ICdbJyArIHNwYWNlcyArICddJ1xuICAsIG5vbiAgICAgPSAnXFx1MjAwYlxcdTAwODUnXG4gICwgbHRyaW0gICA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKVxuICAsIHJ0cmltICAgPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbihLRVksIGV4ZWMsIEFMSUFTKXtcbiAgdmFyIGV4cCAgID0ge307XG4gIHZhciBGT1JDRSA9IGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuICEhc3BhY2VzW0tFWV0oKSB8fCBub25bS0VZXSgpICE9IG5vbjtcbiAgfSk7XG4gIHZhciBmbiA9IGV4cFtLRVldID0gRk9SQ0UgPyBleGVjKHRyaW0pIDogc3BhY2VzW0tFWV07XG4gIGlmKEFMSUFTKWV4cFtBTElBU10gPSBmbjtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRSwgJ1N0cmluZycsIGV4cCk7XG59O1xuXG4vLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4vLyAzIC0+IFN0cmluZyN0cmltXG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbihzdHJpbmcsIFRZUEUpe1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYoVFlQRSAmIDEpc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgaWYoVFlQRSAmIDIpc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctdHJpbS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXdzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi9fcGFyc2UtZmxvYXQnKTtcbi8vIDE4LjIuNCBwYXJzZUZsb2F0KHN0cmluZylcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCB7cGFyc2VGbG9hdDogJHBhcnNlRmxvYXR9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJHBhcnNlRmxvYXQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5wYXJzZUZsb2F0XG4gICwgJHRyaW0gICAgICAgPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG5cbm1vZHVsZS5leHBvcnRzID0gMSAvICRwYXJzZUZsb2F0KHJlcXVpcmUoJy4vX3N0cmluZy13cycpICsgJy0wJykgIT09IC1JbmZpbml0eSA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyKXtcbiAgdmFyIHN0cmluZyA9ICR0cmltKFN0cmluZyhzdHIpLCAzKVxuICAgICwgcmVzdWx0ID0gJHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiBzdHJpbmcuY2hhckF0KDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcGFyc2UtZmxvYXQuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIGNvZiAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKVxuICAsIHRvUHJpbWl0aXZlICAgICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBmYWlscyAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBnT1BOICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIGdPUEQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mXG4gICwgZFAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgJHRyaW0gICAgICAgICAgICAgPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW1cbiAgLCBOVU1CRVIgICAgICAgICAgICA9ICdOdW1iZXInXG4gICwgJE51bWJlciAgICAgICAgICAgPSBnbG9iYWxbTlVNQkVSXVxuICAsIEJhc2UgICAgICAgICAgICAgID0gJE51bWJlclxuICAsIHByb3RvICAgICAgICAgICAgID0gJE51bWJlci5wcm90b3R5cGVcbiAgLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG4gICwgQlJPS0VOX0NPRiAgICAgICAgPSBjb2YocmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpKHByb3RvKSkgPT0gTlVNQkVSXG4gICwgVFJJTSAgICAgICAgICAgICAgPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuLy8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbihhcmd1bWVudCl7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKXtcbiAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKVxuICAgICAgLCB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSl7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZih0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMClyZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmKGZpcnN0ID09PSA0OCl7XG4gICAgICBzd2l0Y2goaXQuY2hhckNvZGVBdCgxKSl7XG4gICAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OSA6IGNhc2UgMTExIDogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdCA6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBmb3IodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspe1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZihjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKXtcbiAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSl7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWVcbiAgICAgICwgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24oKXsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvcih2YXIga2V5cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BOKEJhc2UpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKyl7XG4gICAgaWYoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSl7XG4gICAgICBkUCgkTnVtYmVyLCBrZXksIGdPUEQoQmFzZSwga2V5KSk7XG4gICAgfVxuICB9XG4gICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIHRhcmdldCwgQyl7XG4gIHZhciBQLCBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICBpZihTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKXtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b0ludGVnZXIgICAgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBhTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuL19hLW51bWJlci12YWx1ZScpXG4gICwgcmVwZWF0ICAgICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXJlcGVhdCcpXG4gICwgJHRvRml4ZWQgICAgID0gMS4udG9GaXhlZFxuICAsIGZsb29yICAgICAgICA9IE1hdGguZmxvb3JcbiAgLCBkYXRhICAgICAgICAgPSBbMCwgMCwgMCwgMCwgMCwgMF1cbiAgLCBFUlJPUiAgICAgICAgPSAnTnVtYmVyLnRvRml4ZWQ6IGluY29ycmVjdCBpbnZvY2F0aW9uISdcbiAgLCBaRVJPICAgICAgICAgPSAnMCc7XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uKG4sIGMpe1xuICB2YXIgaSAgPSAtMVxuICAgICwgYzIgPSBjO1xuICB3aGlsZSgrK2kgPCA2KXtcbiAgICBjMiArPSBuICogZGF0YVtpXTtcbiAgICBkYXRhW2ldID0gYzIgJSAxZTc7XG4gICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gIH1cbn07XG52YXIgZGl2aWRlID0gZnVuY3Rpb24obil7XG4gIHZhciBpID0gNlxuICAgICwgYyA9IDA7XG4gIHdoaWxlKC0taSA+PSAwKXtcbiAgICBjICs9IGRhdGFbaV07XG4gICAgZGF0YVtpXSA9IGZsb29yKGMgLyBuKTtcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgfVxufTtcbnZhciBudW1Ub1N0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpID0gNlxuICAgICwgcyA9ICcnO1xuICB3aGlsZSgtLWkgPj0gMCl7XG4gICAgaWYocyAhPT0gJycgfHwgaSA9PT0gMCB8fCBkYXRhW2ldICE9PSAwKXtcbiAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaV0pO1xuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQuY2FsbChaRVJPLCA3IC0gdC5sZW5ndGgpICsgdDtcbiAgICB9XG4gIH0gcmV0dXJuIHM7XG59O1xudmFyIHBvdyA9IGZ1bmN0aW9uKHgsIG4sIGFjYyl7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG52YXIgbG9nID0gZnVuY3Rpb24oeCl7XG4gIHZhciBuICA9IDBcbiAgICAsIHgyID0geDtcbiAgd2hpbGUoeDIgPj0gNDA5Nil7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlKHgyID49IDIpe1xuICAgIG4gICs9IDE7XG4gICAgeDIgLz0gMjtcbiAgfSByZXR1cm4gbjtcbn07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCEhJHRvRml4ZWQgJiYgKFxuICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcbiAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcbiAgMTAwMDAwMDAwMDAwMDAwMDEyOC4udG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG4pIHx8ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gICR0b0ZpeGVkLmNhbGwoe30pO1xufSkpLCAnTnVtYmVyJywge1xuICB0b0ZpeGVkOiBmdW5jdGlvbiB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKXtcbiAgICB2YXIgeCA9IGFOdW1iZXJWYWx1ZSh0aGlzLCBFUlJPUilcbiAgICAgICwgZiA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cylcbiAgICAgICwgcyA9ICcnXG4gICAgICAsIG0gPSBaRVJPXG4gICAgICAsIGUsIHosIGosIGs7XG4gICAgaWYoZiA8IDAgfHwgZiA+IDIwKXRocm93IFJhbmdlRXJyb3IoRVJST1IpO1xuICAgIGlmKHggIT0geClyZXR1cm4gJ05hTic7XG4gICAgaWYoeCA8PSAtMWUyMSB8fCB4ID49IDFlMjEpcmV0dXJuIFN0cmluZyh4KTtcbiAgICBpZih4IDwgMCl7XG4gICAgICBzID0gJy0nO1xuICAgICAgeCA9IC14O1xuICAgIH1cbiAgICBpZih4ID4gMWUtMjEpe1xuICAgICAgZSA9IGxvZyh4ICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IHggKiBwb3coMiwgLWUsIDEpIDogeCAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZihlID4gMCl7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBqID0gZjtcbiAgICAgICAgd2hpbGUoaiA+PSA3KXtcbiAgICAgICAgICBtdWx0aXBseSgxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZShqID49IDIzKXtcbiAgICAgICAgICBkaXZpZGUoMSA8PCAyMyk7XG4gICAgICAgICAgaiAtPSAyMztcbiAgICAgICAgfVxuICAgICAgICBkaXZpZGUoMSA8PCBqKTtcbiAgICAgICAgbXVsdGlwbHkoMSwgMSk7XG4gICAgICAgIGRpdmlkZSgyKTtcbiAgICAgICAgbSA9IG51bVRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseSgwLCB6KTtcbiAgICAgICAgbXVsdGlwbHkoMSA8PCAtZSwgMCk7XG4gICAgICAgIG0gPSBudW1Ub1N0cmluZygpICsgcmVwZWF0LmNhbGwoWkVSTywgZik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGYgPiAwKXtcbiAgICAgIGsgPSBtLmxlbmd0aDtcbiAgICAgIG0gPSBzICsgKGsgPD0gZiA/ICcwLicgKyByZXBlYXQuY2FsbChaRVJPLCBmIC0gaykgKyBtIDogbS5zbGljZSgwLCBrIC0gZikgKyAnLicgKyBtLnNsaWNlKGsgLSBmKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBzICsgbTtcbiAgICB9IHJldHVybiBtO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgbXNnKXtcbiAgaWYodHlwZW9mIGl0ICE9ICdudW1iZXInICYmIGNvZihpdCkgIT0gJ051bWJlcicpdGhyb3cgVHlwZUVycm9yKG1zZyk7XG4gIHJldHVybiAraXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYS1udW1iZXItdmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KXtcbiAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKVxuICAgICwgcmVzID0gJydcbiAgICAsIG4gICA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xuICBmb3IoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlpZihuICYgMSlyZXMgKz0gc3RyO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1yZXBlYXQuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRmYWlscyAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBhTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuL19hLW51bWJlci12YWx1ZScpXG4gICwgJHRvUHJlY2lzaW9uID0gMS4udG9QcmVjaXNpb247XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCRmYWlscyhmdW5jdGlvbigpe1xuICAvLyBJRTctXG4gIHJldHVybiAkdG9QcmVjaXNpb24uY2FsbCgxLCB1bmRlZmluZWQpICE9PSAnMSc7XG59KSB8fCAhJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gICR0b1ByZWNpc2lvbi5jYWxsKHt9KTtcbn0pKSwgJ051bWJlcicsIHtcbiAgdG9QcmVjaXNpb246IGZ1bmN0aW9uIHRvUHJlY2lzaW9uKHByZWNpc2lvbil7XG4gICAgdmFyIHRoYXQgPSBhTnVtYmVyVmFsdWUodGhpcywgJ051bWJlciN0b1ByZWNpc2lvbjogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gICAgcmV0dXJuIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gJHRvUHJlY2lzaW9uLmNhbGwodGhhdCkgOiAkdG9QcmVjaXNpb24uY2FsbCh0aGF0LCBwcmVjaXNpb24pOyBcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tcHJlY2lzaW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7RVBTSUxPTjogTWF0aC5wb3coMiwgLTUyKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmVwc2lsb24uanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjEuMi4yIE51bWJlci5pc0Zpbml0ZShudW1iZXIpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBfaXNGaW5pdGUgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5pc0Zpbml0ZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCl7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7aXNJbnRlZ2VyOiByZXF1aXJlKCcuL19pcy1pbnRlZ2VyJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZmxvb3IgICAgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0ludGVnZXIoaXQpe1xuICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpe1xuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjEuMi41IE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzSW50ZWdlciA9IHJlcXVpcmUoJy4vX2lzLWludGVnZXInKVxuICAsIGFicyAgICAgICA9IE1hdGguYWJzO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpe1xuICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSAweDFmZmZmZmZmZmZmZmZmO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNQVhfU0FGRV9JTlRFR0VSOiAweDFmZmZmZmZmZmZmZmZmfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNSU5fU0FGRV9JTlRFR0VSOiAtMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi9fcGFyc2UtZmxvYXQnKTtcbi8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksICdOdW1iZXInLCB7cGFyc2VGbG9hdDogJHBhcnNlRmxvYXR9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRwYXJzZUludCA9IHJlcXVpcmUoJy4vX3BhcnNlLWludCcpO1xuLy8gMjAuMS4yLjEzIE51bWJlci5wYXJzZUludChzdHJpbmcsIHJhZGl4KVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTnVtYmVyLnBhcnNlSW50ICE9ICRwYXJzZUludCksICdOdW1iZXInLCB7cGFyc2VJbnQ6ICRwYXJzZUludH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBsb2cxcCAgID0gcmVxdWlyZSgnLi9fbWF0aC1sb2cxcCcpXG4gICwgc3FydCAgICA9IE1hdGguc3FydFxuICAsICRhY29zaCAgPSBNYXRoLmFjb3NoO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFjb3NoXG4gIC8vIFY4IGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM1MDlcbiAgJiYgTWF0aC5mbG9vcigkYWNvc2goTnVtYmVyLk1BWF9WQUxVRSkpID09IDcxMFxuICAvLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYWNvc2goSW5maW5pdHkpIC0+IE5hTiBcbiAgJiYgJGFjb3NoKEluZmluaXR5KSA9PSBJbmZpbml0eVxuKSwgJ01hdGgnLCB7XG4gIGFjb3NoOiBmdW5jdGlvbiBhY29zaCh4KXtcbiAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogeCA+IDk0OTA2MjY1LjYyNDI1MTU2XG4gICAgICA/IE1hdGgubG9nKHgpICsgTWF0aC5MTjJcbiAgICAgIDogbG9nMXAoeCAtIDEgKyBzcXJ0KHggLSAxKSAqIHNxcnQoeCArIDEpKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5sb2cxcCB8fCBmdW5jdGlvbiBsb2cxcCh4KXtcbiAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogTWF0aC5sb2coMSArIHgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtbG9nMXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuNSBNYXRoLmFzaW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGFzaW5oICA9IE1hdGguYXNpbmg7XG5cbmZ1bmN0aW9uIGFzaW5oKHgpe1xuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IE1hdGgubG9nKHggKyBNYXRoLnNxcnQoeCAqIHggKyAxKSk7XG59XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hc2luaCgwKSAtPiAtMCBcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXNpbmggJiYgMSAvICRhc2luaCgwKSA+IDApLCAnTWF0aCcsIHthc2luaDogYXNpbmh9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmguanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuNyBNYXRoLmF0YW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGF0YW5oICA9IE1hdGguYXRhbmg7XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hdGFuaCgtMCkgLT4gMCBcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXRhbmggJiYgMSAvICRhdGFuaCgtMCkgPCAwKSwgJ01hdGgnLCB7XG4gIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KXtcbiAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBNYXRoLmxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuOSBNYXRoLmNicnQoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBzaWduICAgID0gcmVxdWlyZSgnLi9fbWF0aC1zaWduJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2JydDogZnVuY3Rpb24gY2JydCh4KXtcbiAgICByZXR1cm4gc2lnbih4ID0gK3gpICogTWF0aC5wb3coTWF0aC5hYnMoeCksIDEgLyAzKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpe1xuICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2x6MzI6IGZ1bmN0aW9uIGNsejMyKHgpe1xuICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBNYXRoLmZsb29yKE1hdGgubG9nKHggKyAwLjUpICogTWF0aC5MT0cyRSkgOiAzMjtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjb3NoOiBmdW5jdGlvbiBjb3NoKHgpe1xuICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkZXhwbTEgID0gcmVxdWlyZSgnLi9fbWF0aC1leHBtMScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICgkZXhwbTEgIT0gTWF0aC5leHBtMSksICdNYXRoJywge2V4cG0xOiAkZXhwbTF9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxudmFyICRleHBtMSA9IE1hdGguZXhwbTE7XG5tb2R1bGUuZXhwb3J0cyA9ICghJGV4cG0xXG4gIC8vIE9sZCBGRiBidWdcbiAgfHwgJGV4cG0xKDEwKSA+IDIyMDI1LjQ2NTc5NDgwNjcxOSB8fCAkZXhwbTEoMTApIDwgMjIwMjUuNDY1Nzk0ODA2NzE2NTE2OFxuICAvLyBUb3IgQnJvd3NlciBidWdcbiAgfHwgJGV4cG0xKC0yZS0xNykgIT0gLTJlLTE3XG4pID8gZnVuY3Rpb24gZXhwbTEoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBNYXRoLmV4cCh4KSAtIDE7XG59IDogJGV4cG0xO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1leHBtMS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgc2lnbiAgICAgID0gcmVxdWlyZSgnLi9fbWF0aC1zaWduJylcbiAgLCBwb3cgICAgICAgPSBNYXRoLnBvd1xuICAsIEVQU0lMT04gICA9IHBvdygyLCAtNTIpXG4gICwgRVBTSUxPTjMyID0gcG93KDIsIC0yMylcbiAgLCBNQVgzMiAgICAgPSBwb3coMiwgMTI3KSAqICgyIC0gRVBTSUxPTjMyKVxuICAsIE1JTjMyICAgICA9IHBvdygyLCAtMTI2KTtcblxudmFyIHJvdW5kVGllc1RvRXZlbiA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiArIDEgLyBFUFNJTE9OIC0gMSAvIEVQU0lMT047XG59O1xuXG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgZnJvdW5kOiBmdW5jdGlvbiBmcm91bmQoeCl7XG4gICAgdmFyICRhYnMgID0gTWF0aC5hYnMoeClcbiAgICAgICwgJHNpZ24gPSBzaWduKHgpXG4gICAgICAsIGEsIHJlc3VsdDtcbiAgICBpZigkYWJzIDwgTUlOMzIpcmV0dXJuICRzaWduICogcm91bmRUaWVzVG9FdmVuKCRhYnMgLyBNSU4zMiAvIEVQU0lMT04zMikgKiBNSU4zMiAqIEVQU0lMT04zMjtcbiAgICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gICAgcmVzdWx0ID0gYSAtIChhIC0gJGFicyk7XG4gICAgaWYocmVzdWx0ID4gTUFYMzIgfHwgcmVzdWx0ICE9IHJlc3VsdClyZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcbiAgICByZXR1cm4gJHNpZ24gKiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMTcgTWF0aC5oeXBvdChbdmFsdWUxWywgdmFsdWUyWywg4oCmIF1dXSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhYnMgICAgID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaHlwb3Q6IGZ1bmN0aW9uIGh5cG90KHZhbHVlMSwgdmFsdWUyKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBzdW0gID0gMFxuICAgICAgLCBpICAgID0gMFxuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBsYXJnID0gMFxuICAgICAgLCBhcmcsIGRpdjtcbiAgICB3aGlsZShpIDwgYUxlbil7XG4gICAgICBhcmcgPSBhYnMoYXJndW1lbnRzW2krK10pO1xuICAgICAgaWYobGFyZyA8IGFyZyl7XG4gICAgICAgIGRpdiAgPSBsYXJnIC8gYXJnO1xuICAgICAgICBzdW0gID0gc3VtICogZGl2ICogZGl2ICsgMTtcbiAgICAgICAgbGFyZyA9IGFyZztcbiAgICAgIH0gZWxzZSBpZihhcmcgPiAwKXtcbiAgICAgICAgZGl2ICA9IGFyZyAvIGxhcmc7XG4gICAgICAgIHN1bSArPSBkaXYgKiBkaXY7XG4gICAgICB9IGVsc2Ugc3VtICs9IGFyZztcbiAgICB9XG4gICAgcmV0dXJuIGxhcmcgPT09IEluZmluaXR5ID8gSW5maW5pdHkgOiBsYXJnICogTWF0aC5zcXJ0KHN1bSk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkaW11bCAgID0gTWF0aC5pbXVsO1xuXG4vLyBzb21lIFdlYktpdCB2ZXJzaW9ucyBmYWlscyB3aXRoIGJpZyBudW1iZXJzLCBzb21lIGhhcyB3cm9uZyBhcml0eVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAkaW11bCgweGZmZmZmZmZmLCA1KSAhPSAtNSB8fCAkaW11bC5sZW5ndGggIT0gMjtcbn0pLCAnTWF0aCcsIHtcbiAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KXtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG4gICAgICAsIHhuID0gK3hcbiAgICAgICwgeW4gPSAreVxuICAgICAgLCB4bCA9IFVJTlQxNiAmIHhuXG4gICAgICAsIHlsID0gVUlOVDE2ICYgeW47XG4gICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSU5UMTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSU5UMTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cxMDogZnVuY3Rpb24gbG9nMTAoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2xvZzFwOiByZXF1aXJlKCcuL19tYXRoLWxvZzFwJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjI7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge3NpZ246IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMzAgTWF0aC5zaW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgZXhwbTEgICA9IHJlcXVpcmUoJy4vX21hdGgtZXhwbTEnKVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuLy8gVjggbmVhciBDaHJvbWl1bSAzOCBoYXMgYSBwcm9ibGVtIHdpdGggdmVyeSBzbWFsbCBudW1iZXJzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICFNYXRoLnNpbmgoLTJlLTE3KSAhPSAtMmUtMTc7XG59KSwgJ01hdGgnLCB7XG4gIHNpbmg6IGZ1bmN0aW9uIHNpbmgoeCl7XG4gICAgcmV0dXJuIE1hdGguYWJzKHggPSAreCkgPCAxXG4gICAgICA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyXG4gICAgICA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKE1hdGguRSAvIDIpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2luaC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBleHBtMSAgID0gcmVxdWlyZSgnLi9fbWF0aC1leHBtMScpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHRhbmg6IGZ1bmN0aW9uIHRhbmgoeCl7XG4gICAgdmFyIGEgPSBleHBtMSh4ID0gK3gpXG4gICAgICAsIGIgPSBleHBtMSgteCk7XG4gICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpe1xuICAgIHJldHVybiAoaXQgPiAwID8gTWF0aC5mbG9vciA6IE1hdGguY2VpbCkoaXQpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvSW5kZXggICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKVxuICAsIGZyb21DaGFyQ29kZSAgID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuICAsICRmcm9tQ29kZVBvaW50ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQ7XG5cbi8vIGxlbmd0aCBzaG91bGQgYmUgMSwgb2xkIEZGIHByb2JsZW1cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCEhJGZyb21Db2RlUG9pbnQgJiYgJGZyb21Db2RlUG9pbnQubGVuZ3RoICE9IDEpLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxuICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KHgpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIHJlcyAgPSBbXVxuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBpICAgID0gMFxuICAgICAgLCBjb2RlO1xuICAgIHdoaWxlKGFMZW4gPiBpKXtcbiAgICAgIGNvZGUgPSArYXJndW1lbnRzW2krK107XG4gICAgICBpZih0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcbiAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXG4gICAgICAgID8gZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcbiAgICAgICk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG4gIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKXtcbiAgICB2YXIgdHBsICA9IHRvSU9iamVjdChjYWxsU2l0ZS5yYXcpXG4gICAgICAsIGxlbiAgPSB0b0xlbmd0aCh0cGwubGVuZ3RoKVxuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCByZXMgID0gW11cbiAgICAgICwgaSAgICA9IDA7XG4gICAgd2hpbGUobGVuID4gaSl7XG4gICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcbiAgICAgIGlmKGkgPCBhTGVuKXJlcy5wdXNoKFN0cmluZyhhcmd1bWVudHNbaV0pKTtcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjEuMy4yNSBTdHJpbmcucHJvdG90eXBlLnRyaW0oKVxucmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKSgndHJpbScsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW0oKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMyk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkYXQgICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykoZmFsc2UpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxuICBjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKXtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMS4xLjMuNiBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKHNlYXJjaFN0cmluZyBbLCBlbmRQb3NpdGlvbl0pXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGNvbnRleHQgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1jb250ZXh0JylcbiAgLCBFTkRTX1dJVEggPSAnZW5kc1dpdGgnXG4gICwgJGVuZHNXaXRoID0gJydbRU5EU19XSVRIXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscy1pcy1yZWdleHAnKShFTkRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pe1xuICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIEVORFNfV0lUSClcbiAgICAgICwgZW5kUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBsZW4gICAgPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aClcbiAgICAgICwgZW5kICAgID0gZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGxlbiA6IE1hdGgubWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKVxuICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJGVuZHNXaXRoXG4gICAgICA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaGVscGVyIGZvciBTdHJpbmcje3N0YXJ0c1dpdGgsIGVuZHNXaXRoLCBpbmNsdWRlc31cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpXG4gICwgZGVmaW5lZCAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKXtcbiAgaWYoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSl0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBjb2YgICAgICA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgTUFUQ0ggICAgPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIHJlID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW0tFWV0ocmUpO1xuICB9IGNhdGNoKGUpe1xuICAgIHRyeSB7XG4gICAgICByZVtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAhJy8uLydbS0VZXShyZSk7XG4gICAgfSBjYXRjaChmKXsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiB0cnVlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLWlzLXJlZ2V4cC5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvbnRleHQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKVxuICAsIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscy1pcy1yZWdleHAnKShJTkNMVURFUyksICdTdHJpbmcnLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQoY291bnQpXG4gIHJlcGVhdDogcmVxdWlyZSgnLi9fc3RyaW5nLXJlcGVhdCcpXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY29udGV4dCAgICAgPSByZXF1aXJlKCcuL19zdHJpbmctY29udGV4dCcpXG4gICwgU1RBUlRTX1dJVEggPSAnc3RhcnRzV2l0aCdcbiAgLCAkc3RhcnRzV2l0aCA9ICcnW1NUQVJUU19XSVRIXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscy1pcy1yZWdleHAnKShTVEFSVFNfV0lUSCksICdTdHJpbmcnLCB7XG4gIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xuICAgIHZhciB0aGF0ICAgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgU1RBUlRTX1dJVEgpXG4gICAgICAsIGluZGV4ICA9IHRvTGVuZ3RoKE1hdGgubWluKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpXG4gICAgICAsIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkc3RhcnRzV2l0aFxuICAgICAgPyAkc3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG4gICAgICA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4yIFN0cmluZy5wcm90b3R5cGUuYW5jaG9yKG5hbWUpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdhbmNob3InLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFuY2hvcihuYW1lKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICduYW1lJywgbmFtZSk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBxdW90ICAgID0gL1wiL2c7XG4vLyBCLjIuMy4yLjEgQ3JlYXRlSFRNTChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSlcbnZhciBjcmVhdGVIVE1MID0gZnVuY3Rpb24oc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSlcbiAgICAsIHAxID0gJzwnICsgdGFnO1xuICBpZihhdHRyaWJ1dGUgIT09ICcnKXAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgZXhlYyl7XG4gIHZhciBPID0ge307XG4gIE9bTkFNRV0gPSBleGVjKGNyZWF0ZUhUTUwpO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRlc3QgPSAnJ1tOQU1FXSgnXCInKTtcbiAgICByZXR1cm4gdGVzdCAhPT0gdGVzdC50b0xvd2VyQ2FzZSgpIHx8IHRlc3Quc3BsaXQoJ1wiJykubGVuZ3RoID4gMztcbiAgfSksICdTdHJpbmcnLCBPKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctaHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjMgU3RyaW5nLnByb3RvdHlwZS5iaWcoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYmlnJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBiaWcoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYmlnJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNCBTdHJpbmcucHJvdG90eXBlLmJsaW5rKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2JsaW5rJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBibGluaygpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdibGluaycsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNSBTdHJpbmcucHJvdG90eXBlLmJvbGQoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYm9sZCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gYm9sZCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjYgU3RyaW5nLnByb3RvdHlwZS5maXhlZCgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdmaXhlZCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gZml4ZWQoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAndHQnLCAnJywgJycpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjcgU3RyaW5nLnByb3RvdHlwZS5mb250Y29sb3IoY29sb3IpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdmb250Y29sb3InLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRjb2xvcihjb2xvcil7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2ZvbnQnLCAnY29sb3InLCBjb2xvcik7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjggU3RyaW5nLnByb3RvdHlwZS5mb250c2l6ZShzaXplKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnZm9udHNpemUnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRzaXplKHNpemUpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ3NpemUnLCBzaXplKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy45IFN0cmluZy5wcm90b3R5cGUuaXRhbGljcygpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdpdGFsaWNzJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBpdGFsaWNzKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2knLCAnJywgJycpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTAgU3RyaW5nLnByb3RvdHlwZS5saW5rKHVybClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2xpbmsnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGxpbmsodXJsKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjExIFN0cmluZy5wcm90b3R5cGUuc21hbGwoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnc21hbGwnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNtYWxsKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3NtYWxsJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc21hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMiBTdHJpbmcucHJvdG90eXBlLnN0cmlrZSgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdHJpa2UnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN0cmlrZSgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdHJpa2UnLCAnJywgJycpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMyBTdHJpbmcucHJvdG90eXBlLnN1YigpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdWInLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN1Yigpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdWIuanNcbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xNCBTdHJpbmcucHJvdG90eXBlLnN1cCgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdXAnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN1cCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdXAnLCAnJywgJycpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdXAuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4zLjMuMSAvIDE1LjkuNC40IERhdGUubm93KClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnRGF0ZScsIHtub3c6IGZ1bmN0aW9uKCl7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG5ldyBEYXRlKE5hTikudG9KU09OKCkgIT09IG51bGwgfHwgRGF0ZS5wcm90b3R5cGUudG9KU09OLmNhbGwoe3RvSVNPU3RyaW5nOiBmdW5jdGlvbigpeyByZXR1cm4gMTsgfX0pICE9PSAxO1xufSksICdEYXRlJywge1xuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTihrZXkpe1xuICAgIHZhciBPICA9IHRvT2JqZWN0KHRoaXMpXG4gICAgICAsIHB2ID0gdG9QcmltaXRpdmUoTyk7XG4gICAgcmV0dXJuIHR5cGVvZiBwdiA9PSAnbnVtYmVyJyAmJiAhaXNGaW5pdGUocHYpID8gbnVsbCA6IE8udG9JU09TdHJpbmcoKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWpzb24uanNcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyMC4zLjQuMzYgLyAxNS45LjUuNDMgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgZ2V0VGltZSA9IERhdGUucHJvdG90eXBlLmdldFRpbWU7XG5cbnZhciBseiA9IGZ1bmN0aW9uKG51bSl7XG4gIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xufTtcblxuLy8gUGhhbnRvbUpTIC8gb2xkIFdlYktpdCBoYXMgYSBicm9rZW4gaW1wbGVtZW50YXRpb25zXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gbmV3IERhdGUoLTVlMTMgLSAxKS50b0lTT1N0cmluZygpICE9ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIG5ldyBEYXRlKE5hTikudG9JU09TdHJpbmcoKTtcbn0pKSwgJ0RhdGUnLCB7XG4gIHRvSVNPU3RyaW5nOiBmdW5jdGlvbiB0b0lTT1N0cmluZygpe1xuICAgIGlmKCFpc0Zpbml0ZShnZXRUaW1lLmNhbGwodGhpcykpKXRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICAgIHZhciBkID0gdGhpc1xuICAgICAgLCB5ID0gZC5nZXRVVENGdWxsWWVhcigpXG4gICAgICAsIG0gPSBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gICAgICAsIHMgPSB5IDwgMCA/ICctJyA6IHkgPiA5OTk5ID8gJysnIDogJyc7XG4gICAgcmV0dXJuIHMgKyAoJzAwMDAwJyArIE1hdGguYWJzKHkpKS5zbGljZShzID8gLTYgOiAtNCkgK1xuICAgICAgJy0nICsgbHooZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgKyBseihkLmdldFVUQ0RhdGUoKSkgK1xuICAgICAgJ1QnICsgbHooZC5nZXRVVENIb3VycygpKSArICc6JyArIGx6KGQuZ2V0VVRDTWludXRlcygpKSArXG4gICAgICAnOicgKyBseihkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAobSA+IDk5ID8gbSA6ICcwJyArIGx6KG0pKSArICdaJztcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0ZVByb3RvICAgID0gRGF0ZS5wcm90b3R5cGVcbiAgLCBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJ1xuICAsIFRPX1NUUklORyAgICA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgICAgPSBEYXRlUHJvdG9bVE9fU1RSSU5HXVxuICAsIGdldFRpbWUgICAgICA9IERhdGVQcm90by5nZXRUaW1lO1xuaWYobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoRGF0ZVByb3RvLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyAkdG9TdHJpbmcuY2FsbCh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBUT19QUklNSVRJVkUgPSByZXF1aXJlKCcuL193a3MnKSgndG9QcmltaXRpdmUnKVxuICAsIHByb3RvICAgICAgICA9IERhdGUucHJvdG90eXBlO1xuXG5pZighKFRPX1BSSU1JVElWRSBpbiBwcm90bykpcmVxdWlyZSgnLi9faGlkZScpKHByb3RvLCBUT19QUklNSVRJVkUsIHJlcXVpcmUoJy4vX2RhdGUtdG8tcHJpbWl0aXZlJykpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBOVU1CRVIgICAgICA9ICdudW1iZXInO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhpbnQpe1xuICBpZihoaW50ICE9PSAnc3RyaW5nJyAmJiBoaW50ICE9PSBOVU1CRVIgJiYgaGludCAhPT0gJ2RlZmF1bHQnKXRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0IGhpbnQnKTtcbiAgcmV0dXJuIHRvUHJpbWl0aXZlKGFuT2JqZWN0KHRoaXMpLCBoaW50ICE9IE5VTUJFUik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZGF0ZS10by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHtpc0FycmF5OiByZXF1aXJlKCcuL19pcy1hcnJheScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4vLyBXZWJLaXQgQXJyYXkub2YgaXNuJ3QgZ2VuZXJpY1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKEFycmF5Lm9mLmNhbGwoRikgaW5zdGFuY2VvZiBGKTtcbn0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4zIEFycmF5Lm9mKCAuLi5pdGVtcylcbiAgb2Y6IGZ1bmN0aW9uIG9mKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsIGFMZW4gICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KShhTGVuKTtcbiAgICB3aGlsZShhTGVuID4gaW5kZXgpY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gYUxlbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5qb2luKHNlcGFyYXRvcilcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5Sm9pbiA9IFtdLmpvaW47XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBzdHJpbmdzXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChyZXF1aXJlKCcuL19pb2JqZWN0JykgIT0gT2JqZWN0IHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoYXJyYXlKb2luKSksICdBcnJheScsIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3Ipe1xuICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0b0lPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5qb2luLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QsIGFyZyl7XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbigpe1xuICAgIGFyZyA/IG1ldGhvZC5jYWxsKG51bGwsIGZ1bmN0aW9uKCl7fSwgMSkgOiBtZXRob2QuY2FsbChudWxsKTtcbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBodG1sICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY29mICAgICAgICA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgdG9JbmRleCAgICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4JylcbiAgLCB0b0xlbmd0aCAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhcnJheVNsaWNlID0gW10uc2xpY2U7XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICBpZihodG1sKWFycmF5U2xpY2UuY2FsbChodG1sKTtcbn0pLCAnQXJyYXknLCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKXtcbiAgICB2YXIgbGVuICAgPSB0b0xlbmd0aCh0aGlzLmxlbmd0aClcbiAgICAgICwga2xhc3MgPSBjb2YodGhpcyk7XG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XG4gICAgaWYoa2xhc3MgPT0gJ0FycmF5JylyZXR1cm4gYXJyYXlTbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgIHZhciBzdGFydCAgPSB0b0luZGV4KGJlZ2luLCBsZW4pXG4gICAgICAsIHVwVG8gICA9IHRvSW5kZXgoZW5kLCBsZW4pXG4gICAgICAsIHNpemUgICA9IHRvTGVuZ3RoKHVwVG8gLSBzdGFydClcbiAgICAgICwgY2xvbmVkID0gQXJyYXkoc2l6ZSlcbiAgICAgICwgaSAgICAgID0gMDtcbiAgICBmb3IoOyBpIDwgc2l6ZTsgaSsrKWNsb25lZFtpXSA9IGtsYXNzID09ICdTdHJpbmcnXG4gICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcbiAgICAgIDogdGhpc1tzdGFydCArIGldO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCB0b09iamVjdCAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGZhaWxzICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCAkc29ydCAgICAgPSBbXS5zb3J0XG4gICwgdGVzdCAgICAgID0gWzEsIDIsIDNdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuICAvLyBJRTgtXG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIC8vIFY4IGJ1Z1xuICB0ZXN0LnNvcnQobnVsbCk7XG4gIC8vIE9sZCBXZWJLaXRcbn0pIHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoJHNvcnQpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMjUgQXJyYXkucHJvdG90eXBlLnNvcnQoY29tcGFyZWZuKVxuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbil7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkZm9yRWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIFNUUklDVCAgID0gcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLmZvckVhY2gsIHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFTVFJJQ1QsICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjEwIC8gMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkbWFwICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDEpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10ubWFwLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLmZpbHRlciwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjcgLyAxNS40LjQuMjAgQXJyYXkucHJvdG90eXBlLmZpbHRlcihjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHNvbWUgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgzKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLnNvbWUsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4yMyAvIDE1LjQuNC4xNyBBcnJheS5wcm90b3R5cGUuc29tZShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJHNvbWUodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb21lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRldmVyeSAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5ldmVyeSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRldmVyeSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmV2ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRyZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheS1yZWR1Y2UnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLnJlZHVjZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE4IC8gMTUuNC40LjIxIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKXtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIGZhbHNlKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgdG9PYmplY3QgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBjYWxsYmFja2ZuLCBhTGVuLCBtZW1vLCBpc1JpZ2h0KXtcbiAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhhdClcbiAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICwgaW5kZXggID0gaXNSaWdodCA/IGxlbmd0aCAtIDEgOiAwXG4gICAgLCBpICAgICAgPSBpc1JpZ2h0ID8gLTEgOiAxO1xuICBpZihhTGVuIDwgMilmb3IoOzspe1xuICAgIGlmKGluZGV4IGluIHNlbGYpe1xuICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgaW5kZXggKz0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpbmRleCArPSBpO1xuICAgIGlmKGlzUmlnaHQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpe1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgfVxuICB9XG4gIGZvcig7aXNSaWdodCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSlpZihpbmRleCBpbiBzZWxmKXtcbiAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBzZWxmW2luZGV4XSwgaW5kZXgsIE8pO1xuICB9XG4gIHJldHVybiBtZW1vO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXJlZHVjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXktcmVkdWNlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5yZWR1Y2VSaWdodCwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE5IC8gMTUuNC40LjIyIEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodChjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG4gIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKXtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIHRydWUpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkaW5kZXhPZiAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCAkbmF0aXZlICAgICAgID0gW10uaW5kZXhPZlxuICAsIE5FR0FUSVZFX1pFUk8gPSAhISRuYXRpdmUgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkbmF0aXZlKSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjExIC8gMTUuNC40LjE0IEFycmF5LnByb3RvdHlwZS5pbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggPSAwICovKXtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvSU9iamVjdCAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0ludGVnZXIgICAgID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgdG9MZW5ndGggICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgJG5hdGl2ZSAgICAgICA9IFtdLmxhc3RJbmRleE9mXG4gICwgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmxhc3RJbmRleE9mKDEsIC0wKSA8IDA7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkbmF0aXZlKSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE0IC8gMTUuNC40LjE1IEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggPSBAWyotMV0gKi8pe1xuICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICBpZihORUdBVElWRV9aRVJPKXJldHVybiAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMDtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSBsZW5ndGggLSAxO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKWluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHRvSW50ZWdlcihhcmd1bWVudHNbMV0pKTtcbiAgICBpZihpbmRleCA8IDApaW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgICBmb3IoO2luZGV4ID49IDA7IGluZGV4LS0paWYoaW5kZXggaW4gTylpZihPW2luZGV4XSA9PT0gc2VhcmNoRWxlbWVudClyZXR1cm4gaW5kZXggfHwgMDtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtjb3B5V2l0aGluOiByZXF1aXJlKCcuL19hcnJheS1jb3B5LXdpdGhpbicpfSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdjb3B5V2l0aGluJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0luZGV4ICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtdLmNvcHlXaXRoaW4gfHwgZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQvKj0gMCovLCBzdGFydC8qPSAwLCBlbmQgPSBAbGVuZ3RoKi8pe1xuICB2YXIgTyAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuICAgPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAsIHRvICAgID0gdG9JbmRleCh0YXJnZXQsIGxlbilcbiAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxuICAgICwgZW5kICAgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuICAgICwgY291bnQgPSBNYXRoLm1pbigoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB0b0luZGV4KGVuZCwgbGVuKSkgLSBmcm9tLCBsZW4gLSB0bylcbiAgICAsIGluYyAgID0gMTtcbiAgaWYoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KXtcbiAgICBpbmMgID0gLTE7XG4gICAgZnJvbSArPSBjb3VudCAtIDE7XG4gICAgdG8gICArPSBjb3VudCAtIDE7XG4gIH1cbiAgd2hpbGUoY291bnQtLSA+IDApe1xuICAgIGlmKGZyb20gaW4gTylPW3RvXSA9IE9bZnJvbV07XG4gICAgZWxzZSBkZWxldGUgT1t0b107XG4gICAgdG8gICArPSBpbmM7XG4gICAgZnJvbSArPSBpbmM7XG4gIH0gcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktY29weS13aXRoaW4uanNcbi8vIG1vZHVsZSBpZCA9IDE4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKVxuICAsIEFycmF5UHJvdG8gID0gQXJyYXkucHJvdG90eXBlO1xuaWYoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKXJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7ZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpfSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdmaWxsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvSW5kZXggID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XG4gIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCBhTGVuICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSB0b0luZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpXG4gICAgLCBlbmQgICAgPSBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuICAgICwgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKTtcbiAgd2hpbGUoZW5kUG9zID4gaW5kZXgpT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1maWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRmaW5kICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSlcbiAgLCBLRVkgICAgID0gJ2ZpbmQnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkZmluZCAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDYpXG4gICwgS0VZICAgICA9ICdmaW5kSW5kZXgnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnQXJyYXknKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpXG4gICwgZFAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgZ09QTiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCBpc1JlZ0V4cCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpXG4gICwgJGZsYWdzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mbGFncycpXG4gICwgJFJlZ0V4cCAgICAgICAgICAgPSBnbG9iYWwuUmVnRXhwXG4gICwgQmFzZSAgICAgICAgICAgICAgPSAkUmVnRXhwXG4gICwgcHJvdG8gICAgICAgICAgICAgPSAkUmVnRXhwLnByb3RvdHlwZVxuICAsIHJlMSAgICAgICAgICAgICAgID0gL2EvZ1xuICAsIHJlMiAgICAgICAgICAgICAgID0gL2EvZ1xuICAvLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z2d5IGhlcmVcbiAgLCBDT1JSRUNUX05FVyAgICAgICA9IG5ldyAkUmVnRXhwKHJlMSkgIT09IHJlMTtcblxuaWYocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAoIUNPUlJFQ1RfTkVXIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmUyW3JlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gJFJlZ0V4cChyZTEpICE9IHJlMSB8fCAkUmVnRXhwKHJlMikgPT0gcmUyIHx8ICRSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSl7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZil7XG4gICAgdmFyIHRpUkUgPSB0aGlzIGluc3RhbmNlb2YgJFJlZ0V4cFxuICAgICAgLCBwaVJFID0gaXNSZWdFeHAocClcbiAgICAgICwgZmlVICA9IGYgPT09IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gIXRpUkUgJiYgcGlSRSAmJiBwLmNvbnN0cnVjdG9yID09PSAkUmVnRXhwICYmIGZpVSA/IHBcbiAgICAgIDogaW5oZXJpdElmUmVxdWlyZWQoQ09SUkVDVF9ORVdcbiAgICAgICAgPyBuZXcgQmFzZShwaVJFICYmICFmaVUgPyBwLnNvdXJjZSA6IHAsIGYpXG4gICAgICAgIDogQmFzZSgocGlSRSA9IHAgaW5zdGFuY2VvZiAkUmVnRXhwKSA/IHAuc291cmNlIDogcCwgcGlSRSAmJiBmaVUgPyAkZmxhZ3MuY2FsbChwKSA6IGYpXG4gICAgICAsIHRpUkUgPyB0aGlzIDogcHJvdG8sICRSZWdFeHApO1xuICB9O1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbihrZXkpe1xuICAgIGtleSBpbiAkUmVnRXhwIHx8IGRQKCRSZWdFeHAsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbihpdCl7IEJhc2Vba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH07XG4gIGZvcih2YXIga2V5cyA9IGdPUE4oQmFzZSksIGkgPSAwOyBrZXlzLmxlbmd0aCA+IGk7IClwcm94eShrZXlzW2krK10pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG59XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ1JlZ0V4cCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCAgID0gYW5PYmplY3QodGhpcylcbiAgICAsIHJlc3VsdCA9ICcnO1xuICBpZih0aGF0Lmdsb2JhbCkgICAgIHJlc3VsdCArPSAnZyc7XG4gIGlmKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYodGhhdC5tdWx0aWxpbmUpICByZXN1bHQgKz0gJ20nO1xuICBpZih0aGF0LnVuaWNvZGUpICAgIHJlc3VsdCArPSAndSc7XG4gIGlmKHRoYXQuc3RpY2t5KSAgICAgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19mbGFncy5qc1xuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5mbGFncycpO1xudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCAkZmxhZ3MgICAgICA9IHJlcXVpcmUoJy4vX2ZsYWdzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBUT19TVFJJTkcgICA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgICA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24oZm4pe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xufTtcblxuLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuaWYocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoe3NvdXJjZTogJ2EnLCBmbGFnczogJ2InfSkgIT0gJy9hL2InOyB9KSl7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORyl7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuaWYocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJylyZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQEBtYXRjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIE1BVENILCAkbWF0Y2gpe1xuICAvLyAyMS4xLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5tYXRjaChyZWdleHApXG4gIHJldHVybiBbZnVuY3Rpb24gbWF0Y2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICB9LCAkbWF0Y2hdO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBmYWlscyAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIHdrcyAgICAgID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBsZW5ndGgsIGV4ZWMpe1xuICB2YXIgU1lNQk9MICAgPSB3a3MoS0VZKVxuICAgICwgZm5zICAgICAgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSlcbiAgICAsIHN0cmZuICAgID0gZm5zWzBdXG4gICAgLCByeGZuICAgICA9IGZuc1sxXTtcbiAgaWYoZmFpbHMoZnVuY3Rpb24oKXtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKXtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uKHN0cmluZywgYXJnKXsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbihzdHJpbmcpeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qc1xuLy8gbW9kdWxlIGlkID0gMjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24oZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2Upe1xuICAvLyAyMS4xLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpXG4gIHJldHVybiBbZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICB9LCAkcmVwbGFjZV07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQEBzZWFyY2ggbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc2VhcmNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgU0VBUkNILCAkc2VhcmNoKXtcbiAgLy8gMjEuMS4zLjE1IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzZWFyY2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG4gIH0sICRzZWFyY2hdO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFNQTElULCAkc3BsaXQpe1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCAgID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJylcbiAgICAsIF9zcGxpdCAgICAgPSAkc3BsaXRcbiAgICAsICRwdXNoICAgICAgPSBbXS5wdXNoXG4gICAgLCAkU1BMSVQgICAgID0gJ3NwbGl0J1xuICAgICwgTEVOR1RIICAgICA9ICdsZW5ndGgnXG4gICAgLCBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG4gIGlmKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApe1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmKCFpc1JlZ0V4cChzZXBhcmF0b3IpKXJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmKCFOUENHKXNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKCdeJyArIHNlcGFyYXRvckNvcHkuc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgICB3aGlsZShtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKXtcbiAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgIGlmKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpe1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgaWYoIU5QQ0cgJiYgbWF0Y2hbTEVOR1RIXSA+IDEpbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspaWYoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZihsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSl7XG4gICAgICAgIGlmKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSl7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH1cbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KXtcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgcmVkZWZpbmVBbGwgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIG1ldGEgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZm9yT2YgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBmYWlscyAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCAkaXRlckRldGVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyAgICA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uKEtFWSl7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24oYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSAgICAgICAgICAgICA9IG5ldyBDXG4gICAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgICAsIEhBU05UX0NIQUlOSU5HICAgICAgID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZVxuICAgICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgICAsIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24oKXsgaW5zdGFuY2UuaGFzKDEpOyB9KVxuICAgICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgICAgLCBBQ0NFUFRfSVRFUkFCTEVTICAgICA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uKGl0ZXIpeyBuZXcgQyhpdGVyKTsgfSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgICAgLCBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpXG4gICAgICAgICAgLCBpbmRleCAgICAgPSA1O1xuICAgICAgICB3aGlsZShpbmRleC0tKSRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICAgIH0pO1xuICAgIGlmKCFBQ0NFUFRfSVRFUkFCTEVTKXsgXG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTyl7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZihCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKWZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZihJU19XRUFLICYmIHByb3RvLmNsZWFyKWRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZWFjaCAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgcmVkZWZpbmUgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIG1ldGEgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGFzc2lnbiAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKVxuICAsIHdlYWsgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24td2VhaycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBnZXRXZWFrICAgICAgPSBtZXRhLmdldFdlYWtcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlXG4gICwgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IHdlYWsudWZzdG9yZVxuICAsIHRtcCAgICAgICAgICA9IHt9XG4gICwgSW50ZXJuYWxNYXA7XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKXtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn07XG5cbnZhciBtZXRob2RzID0ge1xuICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIGlmKGlzT2JqZWN0KGtleSkpe1xuICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhW3RoaXMuX2ldIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCBrZXksIHZhbHVlKTtcbiAgfVxufTtcblxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcbnZhciAkV2Vha01hcCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdXZWFrTWFwJywgd3JhcHBlciwgbWV0aG9kcywgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5cbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcbmlmKG5ldyAkV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xuICBJbnRlcm5hbE1hcCA9IHdlYWsuZ2V0Q29uc3RydWN0b3Iod3JhcHBlcik7XG4gIGFzc2lnbihJbnRlcm5hbE1hcC5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICBtZXRhLk5FRUQgPSB0cnVlO1xuICBlYWNoKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIHByb3RvICA9ICRXZWFrTWFwLnByb3RvdHlwZVxuICAgICAgLCBtZXRob2QgPSBwcm90b1trZXldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBrZXksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gaW50ZXJuYWwgd2Vha21hcCBzaGltXG4gICAgICBpZihpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKXtcbiAgICAgICAgaWYoIXRoaXMuX2YpdGhpcy5fZiA9IG5ldyBJbnRlcm5hbE1hcDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lQWxsICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBnZXRXZWFrICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5nZXRXZWFrXG4gICwgYW5PYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbkluc3RhbmNlICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJylcbiAgLCAkaGFzICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgYXJyYXlGaW5kICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg1KVxuICAsIGFycmF5RmluZEluZGV4ICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcbiAgLCBpZCAgICAgICAgICAgICAgICA9IDA7XG5cbi8vIGZhbGxiYWNrIGZvciB1bmNhdWdodCBmcm96ZW4ga2V5c1xudmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbih0aGF0KXtcbiAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSk7XG59O1xudmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbigpe1xuICB0aGlzLmEgPSBbXTtcbn07XG52YXIgZmluZFVuY2F1Z2h0RnJvemVuID0gZnVuY3Rpb24oc3RvcmUsIGtleSl7XG4gIHJldHVybiBhcnJheUZpbmQoc3RvcmUuYSwgZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICB9KTtcbn07XG5VbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KXJldHVybiBlbnRyeVsxXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KWVudHJ5WzFdID0gdmFsdWU7XG4gICAgZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9LFxuICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgIH0pO1xuICAgIGlmKH5pbmRleCl0aGlzLmEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gISF+aW5kZXg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gaWQrKzsgICAgICAvLyBjb2xsZWN0aW9uIGlkXG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAvLyBsZWFrIHN0b3JlIGZvciB1bmNhdWdodCBmcm96ZW4gb2JqZWN0c1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpICYmIGRlbGV0ZSBkYXRhW3RoaXMuX2ldO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmhhcyhrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBkYXRhID0gZ2V0V2Vhayhhbk9iamVjdChrZXkpLCB0cnVlKTtcbiAgICBpZihkYXRhID09PSB0cnVlKXVuY2F1Z2h0RnJvemVuU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xuICAgIGVsc2UgZGF0YVt0aGF0Ll9pXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGF0O1xuICB9LFxuICB1ZnN0b3JlOiB1bmNhdWdodEZyb3plblN0b3JlXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi13ZWFrLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHdlYWsgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKTtcblxuLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcbnJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnV2Vha1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywgdmFsdWUsIHRydWUpO1xuICB9XG59LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qc1xuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICR0eXBlZCAgICAgICA9IHJlcXVpcmUoJy4vX3R5cGVkJylcbiAgLCBidWZmZXIgICAgICAgPSByZXF1aXJlKCcuL190eXBlZC1idWZmZXInKVxuICAsIGFuT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JbmRleCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBBcnJheUJ1ZmZlciAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5BcnJheUJ1ZmZlclxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsICRBcnJheUJ1ZmZlciA9IGJ1ZmZlci5BcnJheUJ1ZmZlclxuICAsICREYXRhVmlldyAgICA9IGJ1ZmZlci5EYXRhVmlld1xuICAsICRpc1ZpZXcgICAgICA9ICR0eXBlZC5BQlYgJiYgQXJyYXlCdWZmZXIuaXNWaWV3XG4gICwgJHNsaWNlICAgICAgID0gJEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZVxuICAsIFZJRVcgICAgICAgICA9ICR0eXBlZC5WSUVXXG4gICwgQVJSQVlfQlVGRkVSID0gJ0FycmF5QnVmZmVyJztcblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQXJyYXlCdWZmZXIgIT09ICRBcnJheUJ1ZmZlciksIHtBcnJheUJ1ZmZlcjogJEFycmF5QnVmZmVyfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISR0eXBlZC5DT05TVFIsIEFSUkFZX0JVRkZFUiwge1xuICAvLyAyNC4xLjMuMSBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJnKVxuICBpc1ZpZXc6IGZ1bmN0aW9uIGlzVmlldyhpdCl7XG4gICAgcmV0dXJuICRpc1ZpZXcgJiYgJGlzVmlldyhpdCkgfHwgaXNPYmplY3QoaXQpICYmIFZJRVcgaW4gaXQ7XG4gIH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuVSArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICFuZXcgJEFycmF5QnVmZmVyKDIpLnNsaWNlKDEsIHVuZGVmaW5lZCkuYnl0ZUxlbmd0aDtcbn0pLCBBUlJBWV9CVUZGRVIsIHtcbiAgLy8gMjQuMS40LjMgQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKXtcbiAgICBpZigkc2xpY2UgIT09IHVuZGVmaW5lZCAmJiBlbmQgPT09IHVuZGVmaW5lZClyZXR1cm4gJHNsaWNlLmNhbGwoYW5PYmplY3QodGhpcyksIHN0YXJ0KTsgLy8gRkYgZml4XG4gICAgdmFyIGxlbiAgICA9IGFuT2JqZWN0KHRoaXMpLmJ5dGVMZW5ndGhcbiAgICAgICwgZmlyc3QgID0gdG9JbmRleChzdGFydCwgbGVuKVxuICAgICAgLCBmaW5hbCAgPSB0b0luZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kLCBsZW4pXG4gICAgICAsIHJlc3VsdCA9IG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRBcnJheUJ1ZmZlcikpKHRvTGVuZ3RoKGZpbmFsIC0gZmlyc3QpKVxuICAgICAgLCB2aWV3UyAgPSBuZXcgJERhdGFWaWV3KHRoaXMpXG4gICAgICAsIHZpZXdUICA9IG5ldyAkRGF0YVZpZXcocmVzdWx0KVxuICAgICAgLCBpbmRleCAgPSAwO1xuICAgIHdoaWxlKGZpcnN0IDwgZmluYWwpe1xuICAgICAgdmlld1Quc2V0VWludDgoaW5kZXgrKywgdmlld1MuZ2V0VWludDgoZmlyc3QrKykpO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoQVJSQVlfQlVGRkVSKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmFycmF5LWJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgVFlQRUQgID0gdWlkKCd0eXBlZF9hcnJheScpXG4gICwgVklFVyAgID0gdWlkKCd2aWV3JylcbiAgLCBBQlYgICAgPSAhIShnbG9iYWwuQXJyYXlCdWZmZXIgJiYgZ2xvYmFsLkRhdGFWaWV3KVxuICAsIENPTlNUUiA9IEFCVlxuICAsIGkgPSAwLCBsID0gOSwgVHlwZWQ7XG5cbnZhciBUeXBlZEFycmF5Q29uc3RydWN0b3JzID0gKFxuICAnSW50OEFycmF5LFVpbnQ4QXJyYXksVWludDhDbGFtcGVkQXJyYXksSW50MTZBcnJheSxVaW50MTZBcnJheSxJbnQzMkFycmF5LFVpbnQzMkFycmF5LEZsb2F0MzJBcnJheSxGbG9hdDY0QXJyYXknXG4pLnNwbGl0KCcsJyk7XG5cbndoaWxlKGkgPCBsKXtcbiAgaWYoVHlwZWQgPSBnbG9iYWxbVHlwZWRBcnJheUNvbnN0cnVjdG9yc1tpKytdXSl7XG4gICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFRZUEVELCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG4gIH0gZWxzZSBDT05TVFIgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFCVjogICAgQUJWLFxuICBDT05TVFI6IENPTlNUUixcbiAgVFlQRUQ6ICBUWVBFRCxcbiAgVklFVzogICBWSUVXXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJHR5cGVkICAgICAgICAgPSByZXF1aXJlKCcuL190eXBlZCcpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgdG9JbnRlZ2VyICAgICAgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ09QTiAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBhcnJheUZpbGwgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZpbGwnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEFSUkFZX0JVRkZFUiAgID0gJ0FycmF5QnVmZmVyJ1xuICAsIERBVEFfVklFVyAgICAgID0gJ0RhdGFWaWV3J1xuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBXUk9OR19MRU5HVEggICA9ICdXcm9uZyBsZW5ndGghJ1xuICAsIFdST05HX0lOREVYICAgID0gJ1dyb25nIGluZGV4ISdcbiAgLCAkQXJyYXlCdWZmZXIgICA9IGdsb2JhbFtBUlJBWV9CVUZGRVJdXG4gICwgJERhdGFWaWV3ICAgICAgPSBnbG9iYWxbREFUQV9WSUVXXVxuICAsIE1hdGggICAgICAgICAgID0gZ2xvYmFsLk1hdGhcbiAgLCBSYW5nZUVycm9yICAgICA9IGdsb2JhbC5SYW5nZUVycm9yXG4gICwgSW5maW5pdHkgICAgICAgPSBnbG9iYWwuSW5maW5pdHlcbiAgLCBCYXNlQnVmZmVyICAgICA9ICRBcnJheUJ1ZmZlclxuICAsIGFicyAgICAgICAgICAgID0gTWF0aC5hYnNcbiAgLCBwb3cgICAgICAgICAgICA9IE1hdGgucG93XG4gICwgZmxvb3IgICAgICAgICAgPSBNYXRoLmZsb29yXG4gICwgbG9nICAgICAgICAgICAgPSBNYXRoLmxvZ1xuICAsIExOMiAgICAgICAgICAgID0gTWF0aC5MTjJcbiAgLCBCVUZGRVIgICAgICAgICA9ICdidWZmZXInXG4gICwgQllURV9MRU5HVEggICAgPSAnYnl0ZUxlbmd0aCdcbiAgLCBCWVRFX09GRlNFVCAgICA9ICdieXRlT2Zmc2V0J1xuICAsICRCVUZGRVIgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX2InIDogQlVGRkVSXG4gICwgJExFTkdUSCAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfbCcgOiBCWVRFX0xFTkdUSFxuICAsICRPRkZTRVQgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX28nIDogQllURV9PRkZTRVQ7XG5cbi8vIElFRUU3NTQgY29udmVyc2lvbnMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pZWVlNzU0XG52YXIgcGFja0lFRUU3NTQgPSBmdW5jdGlvbih2YWx1ZSwgbUxlbiwgbkJ5dGVzKXtcbiAgdmFyIGJ1ZmZlciA9IEFycmF5KG5CeXRlcylcbiAgICAsIGVMZW4gICA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICAgICwgZU1heCAgID0gKDEgPDwgZUxlbikgLSAxXG4gICAgLCBlQmlhcyAgPSBlTWF4ID4+IDFcbiAgICAsIHJ0ICAgICA9IG1MZW4gPT09IDIzID8gcG93KDIsIC0yNCkgLSBwb3coMiwgLTc3KSA6IDBcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHMgICAgICA9IHZhbHVlIDwgMCB8fCB2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwID8gMSA6IDBcbiAgICAsIGUsIG0sIGM7XG4gIHZhbHVlID0gYWJzKHZhbHVlKVxuICBpZih2YWx1ZSAhPSB2YWx1ZSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpe1xuICAgIG0gPSB2YWx1ZSAhPSB2YWx1ZSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBmbG9vcihsb2codmFsdWUpIC8gTE4yKTtcbiAgICBpZih2YWx1ZSAqIChjID0gcG93KDIsIC1lKSkgPCAxKXtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYoZSArIGVCaWFzID49IDEpe1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIHBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZih2YWx1ZSAqIGMgPj0gMil7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuICAgIGlmKGUgKyBlQmlhcyA+PSBlTWF4KXtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmKGUgKyBlQmlhcyA+PSAxKXtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBwb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBwb3coMiwgZUJpYXMgLSAxKSAqIHBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuICBmb3IoOyBtTGVuID49IDg7IGJ1ZmZlcltpKytdID0gbSAmIDI1NSwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG4gIGUgPSBlIDw8IG1MZW4gfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvcig7IGVMZW4gPiAwOyBidWZmZXJbaSsrXSA9IGUgJiAyNTUsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuICBidWZmZXJbLS1pXSB8PSBzICogMTI4O1xuICByZXR1cm4gYnVmZmVyO1xufTtcbnZhciB1bnBhY2tJRUVFNzU0ID0gZnVuY3Rpb24oYnVmZmVyLCBtTGVuLCBuQnl0ZXMpe1xuICB2YXIgZUxlbiAgPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgICAsIGVNYXggID0gKDEgPDwgZUxlbikgLSAxXG4gICAgLCBlQmlhcyA9IGVNYXggPj4gMVxuICAgICwgbkJpdHMgPSBlTGVuIC0gN1xuICAgICwgaSAgICAgPSBuQnl0ZXMgLSAxXG4gICAgLCBzICAgICA9IGJ1ZmZlcltpLS1dXG4gICAgLCBlICAgICA9IHMgJiAxMjdcbiAgICAsIG07XG4gIHMgPj49IDc7XG4gIGZvcig7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG4gIG0gPSBlICYgKDEgPDwgLW5CaXRzKSAtIDE7XG4gIGUgPj49IC1uQml0cztcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcbiAgaWYoZSA9PT0gMCl7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmKGUgPT09IGVNYXgpe1xuICAgIHJldHVybiBtID8gTmFOIDogcyA/IC1JbmZpbml0eSA6IEluZmluaXR5O1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgcG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH0gcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBwb3coMiwgZSAtIG1MZW4pO1xufTtcblxudmFyIHVucGFja0kzMiA9IGZ1bmN0aW9uKGJ5dGVzKXtcbiAgcmV0dXJuIGJ5dGVzWzNdIDw8IDI0IHwgYnl0ZXNbMl0gPDwgMTYgfCBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG59O1xudmFyIHBhY2tJOCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIFtpdCAmIDB4ZmZdO1xufTtcbnZhciBwYWNrSTE2ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gW2l0ICYgMHhmZiwgaXQgPj4gOCAmIDB4ZmZdO1xufTtcbnZhciBwYWNrSTMyID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gW2l0ICYgMHhmZiwgaXQgPj4gOCAmIDB4ZmYsIGl0ID4+IDE2ICYgMHhmZiwgaXQgPj4gMjQgJiAweGZmXTtcbn07XG52YXIgcGFja0Y2NCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCA1MiwgOCk7XG59O1xudmFyIHBhY2tGMzIgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBwYWNrSUVFRTc1NChpdCwgMjMsIDQpO1xufTtcblxudmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uKEMsIGtleSwgaW50ZXJuYWwpe1xuICBkUChDW1BST1RPVFlQRV0sIGtleSwge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXNbaW50ZXJuYWxdOyB9fSk7XG59O1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24odmlldywgYnl0ZXMsIGluZGV4LCBpc0xpdHRsZUVuZGlhbil7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleFxuICAgICwgaW50SW5kZXggPSB0b0ludGVnZXIobnVtSW5kZXgpO1xuICBpZihudW1JbmRleCAhPSBpbnRJbmRleCB8fCBpbnRJbmRleCA8IDAgfHwgaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2JcbiAgICAsIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdXG4gICAgLCBwYWNrICA9IHN0b3JlLnNsaWNlKHN0YXJ0LCBzdGFydCArIGJ5dGVzKTtcbiAgcmV0dXJuIGlzTGl0dGxlRW5kaWFuID8gcGFjayA6IHBhY2sucmV2ZXJzZSgpO1xufTtcbnZhciBzZXQgPSBmdW5jdGlvbih2aWV3LCBieXRlcywgaW5kZXgsIGNvbnZlcnNpb24sIHZhbHVlLCBpc0xpdHRsZUVuZGlhbil7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleFxuICAgICwgaW50SW5kZXggPSB0b0ludGVnZXIobnVtSW5kZXgpO1xuICBpZihudW1JbmRleCAhPSBpbnRJbmRleCB8fCBpbnRJbmRleCA8IDAgfHwgaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2JcbiAgICAsIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdXG4gICAgLCBwYWNrICA9IGNvbnZlcnNpb24oK3ZhbHVlKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGJ5dGVzOyBpKyspc3RvcmVbc3RhcnQgKyBpXSA9IHBhY2tbaXNMaXR0bGVFbmRpYW4gPyBpIDogYnl0ZXMgLSBpIC0gMV07XG59O1xuXG52YXIgdmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyA9IGZ1bmN0aW9uKHRoYXQsIGxlbmd0aCl7XG4gIGFuSW5zdGFuY2UodGhhdCwgJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuICB2YXIgbnVtYmVyTGVuZ3RoID0gK2xlbmd0aFxuICAgICwgYnl0ZUxlbmd0aCAgID0gdG9MZW5ndGgobnVtYmVyTGVuZ3RoKTtcbiAgaWYobnVtYmVyTGVuZ3RoICE9IGJ5dGVMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICByZXR1cm4gYnl0ZUxlbmd0aDtcbn07XG5cbmlmKCEkdHlwZWQuQUJWKXtcbiAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKXtcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IHZhbGlkYXRlQXJyYXlCdWZmZXJBcmd1bWVudHModGhpcywgbGVuZ3RoKTtcbiAgICB0aGlzLl9iICAgICAgID0gYXJyYXlGaWxsLmNhbGwoQXJyYXkoYnl0ZUxlbmd0aCksIDApO1xuICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuICB9O1xuXG4gICREYXRhVmlldyA9IGZ1bmN0aW9uIERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCl7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkRGF0YVZpZXcsIERBVEFfVklFVyk7XG4gICAgYW5JbnN0YW5jZShidWZmZXIsICRBcnJheUJ1ZmZlciwgREFUQV9WSUVXKTtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYnVmZmVyWyRMRU5HVEhdXG4gICAgICAsIG9mZnNldCAgICAgICA9IHRvSW50ZWdlcihieXRlT2Zmc2V0KTtcbiAgICBpZihvZmZzZXQgPCAwIHx8IG9mZnNldCA+IGJ1ZmZlckxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG4gICAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckxlbmd0aCAtIG9mZnNldCA6IHRvTGVuZ3RoKGJ5dGVMZW5ndGgpO1xuICAgIGlmKG9mZnNldCArIGJ5dGVMZW5ndGggPiBidWZmZXJMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHRoaXNbJEJVRkZFUl0gPSBidWZmZXI7XG4gICAgdGhpc1skT0ZGU0VUXSA9IG9mZnNldDtcbiAgICB0aGlzWyRMRU5HVEhdID0gYnl0ZUxlbmd0aDtcbiAgfTtcblxuICBpZihERVNDUklQVE9SUyl7XG4gICAgYWRkR2V0dGVyKCRBcnJheUJ1ZmZlciwgQllURV9MRU5HVEgsICdfbCcpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJVRkZFUiwgJ19iJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9MRU5HVEgsICdfbCcpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfT0ZGU0VULCAnX28nKTtcbiAgfVxuXG4gIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgZ2V0SW50ODogZnVuY3Rpb24gZ2V0SW50OChieXRlT2Zmc2V0KXtcbiAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF0gPDwgMjQgPj4gMjQ7XG4gICAgfSxcbiAgICBnZXRVaW50ODogZnVuY3Rpb24gZ2V0VWludDgoYnl0ZU9mZnNldCl7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MTY6IGZ1bmN0aW9uIGdldEludDE2KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcbiAgICAgIHJldHVybiAoYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdKSA8PCAxNiA+PiAxNjtcbiAgICB9LFxuICAgIGdldFVpbnQxNjogZnVuY3Rpb24gZ2V0VWludDE2KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcbiAgICAgIHJldHVybiBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG4gICAgfSxcbiAgICBnZXRJbnQzMjogZnVuY3Rpb24gZ2V0SW50MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpO1xuICAgIH0sXG4gICAgZ2V0VWludDMyOiBmdW5jdGlvbiBnZXRVaW50MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpID4+PiAwO1xuICAgIH0sXG4gICAgZ2V0RmxvYXQzMjogZnVuY3Rpb24gZ2V0RmxvYXQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDIzLCA0KTtcbiAgICB9LFxuICAgIGdldEZsb2F0NjQ6IGZ1bmN0aW9uIGdldEZsb2F0NjQoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCA1MiwgOCk7XG4gICAgfSxcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXRJbnQxNjogZnVuY3Rpb24gc2V0SW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgcGFja0kxNiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRVaW50MTY6IGZ1bmN0aW9uIHNldFVpbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEludDMyOiBmdW5jdGlvbiBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSTMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldFVpbnQzMjogZnVuY3Rpb24gc2V0VWludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0RmxvYXQzMjogZnVuY3Rpb24gc2V0RmxvYXQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrRjMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEZsb2F0NjQ6IGZ1bmN0aW9uIHNldEZsb2F0NjQoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgcGFja0Y2NCwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIGlmKCFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyAkQXJyYXlCdWZmZXI7ICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgJEFycmF5QnVmZmVyKC41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgfSkpe1xuICAgICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCl7XG4gICAgICByZXR1cm4gbmV3IEJhc2VCdWZmZXIodmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyh0aGlzLCBsZW5ndGgpKTtcbiAgICB9O1xuICAgIHZhciBBcnJheUJ1ZmZlclByb3RvID0gJEFycmF5QnVmZmVyW1BST1RPVFlQRV0gPSBCYXNlQnVmZmVyW1BST1RPVFlQRV07XG4gICAgZm9yKHZhciBrZXlzID0gZ09QTihCYXNlQnVmZmVyKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyApe1xuICAgICAgaWYoISgoa2V5ID0ga2V5c1tqKytdKSBpbiAkQXJyYXlCdWZmZXIpKWhpZGUoJEFycmF5QnVmZmVyLCBrZXksIEJhc2VCdWZmZXJba2V5XSk7XG4gICAgfTtcbiAgICBpZighTElCUkFSWSlBcnJheUJ1ZmZlclByb3RvLmNvbnN0cnVjdG9yID0gJEFycmF5QnVmZmVyO1xuICB9XG4gIC8vIGlPUyBTYWZhcmkgNy54IGJ1Z1xuICB2YXIgdmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSlcbiAgICAsICRzZXRJbnQ4ID0gJERhdGFWaWV3W1BST1RPVFlQRV0uc2V0SW50ODtcbiAgdmlldy5zZXRJbnQ4KDAsIDIxNDc0ODM2NDgpO1xuICB2aWV3LnNldEludDgoMSwgMjE0NzQ4MzY0OSk7XG4gIGlmKHZpZXcuZ2V0SW50OCgwKSB8fCAhdmlldy5nZXRJbnQ4KDEpKXJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxuc2V0VG9TdHJpbmdUYWcoJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuc2V0VG9TdHJpbmdUYWcoJERhdGFWaWV3LCBEQVRBX1ZJRVcpO1xuaGlkZSgkRGF0YVZpZXdbUFJPVE9UWVBFXSwgJHR5cGVkLlZJRVcsIHRydWUpO1xuZXhwb3J0c1tBUlJBWV9CVUZGRVJdID0gJEFycmF5QnVmZmVyO1xuZXhwb3J0c1tEQVRBX1ZJRVddID0gJERhdGFWaWV3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQtYnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3R5cGVkJykuQUJWLCB7XG4gIERhdGFWaWV3OiByZXF1aXJlKCcuL190eXBlZC1idWZmZXInKS5EYXRhVmlld1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5kYXRhLXZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdJbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuaWYocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSl7XG4gIHZhciBMSUJSQVJZICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICAgLCBnbG9iYWwgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgICAsIGZhaWxzICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICAgLCAkZXhwb3J0ICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgICAsICR0eXBlZCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190eXBlZCcpXG4gICAgLCAkYnVmZmVyICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJylcbiAgICAsIGN0eCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAgICwgYW5JbnN0YW5jZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgICAsIHByb3BlcnR5RGVzYyAgICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgICAsIGhpZGUgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgICAsIHJlZGVmaW5lQWxsICAgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAgICwgdG9JbnRlZ2VyICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAgICwgdG9MZW5ndGggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICAgLCB0b0luZGV4ICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKVxuICAgICwgdG9QcmltaXRpdmUgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICAgLCBoYXMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgICAsIHNhbWUgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19zYW1lLXZhbHVlJylcbiAgICAsIGNsYXNzb2YgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgICAsIGlzT2JqZWN0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAgICwgdG9PYmplY3QgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICAgLCBpc0FycmF5SXRlciAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICAgLCBjcmVhdGUgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICAgLCBnZXRQcm90b3R5cGVPZiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICAgLCBnT1BOICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICAgLCBnZXRJdGVyRm4gICAgICAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAgICwgdWlkICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICAgLCB3a3MgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgICAsIGNyZWF0ZUFycmF5TWV0aG9kICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJylcbiAgICAsIGNyZWF0ZUFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpXG4gICAgLCBzcGVjaWVzQ29uc3RydWN0b3IgID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICAgLCBBcnJheUl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKVxuICAgICwgSXRlcmF0b3JzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICAgLCAkaXRlckRldGVjdCAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKVxuICAgICwgc2V0U3BlY2llcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgICAsIGFycmF5RmlsbCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1maWxsJylcbiAgICAsIGFycmF5Q29weVdpdGhpbiAgICAgPSByZXF1aXJlKCcuL19hcnJheS1jb3B5LXdpdGhpbicpXG4gICAgLCAkRFAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgICAsICRHT1BEICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICAgLCBkUCAgICAgICAgICAgICAgICAgID0gJERQLmZcbiAgICAsIGdPUEQgICAgICAgICAgICAgICAgPSAkR09QRC5mXG4gICAgLCBSYW5nZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3JcbiAgICAsIFR5cGVFcnJvciAgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICAgLCBVaW50OEFycmF5ICAgICAgICAgID0gZ2xvYmFsLlVpbnQ4QXJyYXlcbiAgICAsIEFSUkFZX0JVRkZFUiAgICAgICAgPSAnQXJyYXlCdWZmZXInXG4gICAgLCBTSEFSRURfQlVGRkVSICAgICAgID0gJ1NoYXJlZCcgKyBBUlJBWV9CVUZGRVJcbiAgICAsIEJZVEVTX1BFUl9FTEVNRU5UICAgPSAnQllURVNfUEVSX0VMRU1FTlQnXG4gICAgLCBQUk9UT1RZUEUgICAgICAgICAgID0gJ3Byb3RvdHlwZSdcbiAgICAsIEFycmF5UHJvdG8gICAgICAgICAgPSBBcnJheVtQUk9UT1RZUEVdXG4gICAgLCAkQXJyYXlCdWZmZXIgICAgICAgID0gJGJ1ZmZlci5BcnJheUJ1ZmZlclxuICAgICwgJERhdGFWaWV3ICAgICAgICAgICA9ICRidWZmZXIuRGF0YVZpZXdcbiAgICAsIGFycmF5Rm9yRWFjaCAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgwKVxuICAgICwgYXJyYXlGaWx0ZXIgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDIpXG4gICAgLCBhcnJheVNvbWUgICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMylcbiAgICAsIGFycmF5RXZlcnkgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg0KVxuICAgICwgYXJyYXlGaW5kICAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICAgLCBhcnJheUZpbmRJbmRleCAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcbiAgICAsIGFycmF5SW5jbHVkZXMgICAgICAgPSBjcmVhdGVBcnJheUluY2x1ZGVzKHRydWUpXG4gICAgLCBhcnJheUluZGV4T2YgICAgICAgID0gY3JlYXRlQXJyYXlJbmNsdWRlcyhmYWxzZSlcbiAgICAsIGFycmF5VmFsdWVzICAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy52YWx1ZXNcbiAgICAsIGFycmF5S2V5cyAgICAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy5rZXlzXG4gICAgLCBhcnJheUVudHJpZXMgICAgICAgID0gQXJyYXlJdGVyYXRvcnMuZW50cmllc1xuICAgICwgYXJyYXlMYXN0SW5kZXhPZiAgICA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2ZcbiAgICAsIGFycmF5UmVkdWNlICAgICAgICAgPSBBcnJheVByb3RvLnJlZHVjZVxuICAgICwgYXJyYXlSZWR1Y2VSaWdodCAgICA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHRcbiAgICAsIGFycmF5Sm9pbiAgICAgICAgICAgPSBBcnJheVByb3RvLmpvaW5cbiAgICAsIGFycmF5U29ydCAgICAgICAgICAgPSBBcnJheVByb3RvLnNvcnRcbiAgICAsIGFycmF5U2xpY2UgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlXG4gICAgLCBhcnJheVRvU3RyaW5nICAgICAgID0gQXJyYXlQcm90by50b1N0cmluZ1xuICAgICwgYXJyYXlUb0xvY2FsZVN0cmluZyA9IEFycmF5UHJvdG8udG9Mb2NhbGVTdHJpbmdcbiAgICAsIElURVJBVE9SICAgICAgICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcbiAgICAsIFRBRyAgICAgICAgICAgICAgICAgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgICAsIFRZUEVEX0NPTlNUUlVDVE9SICAgPSB1aWQoJ3R5cGVkX2NvbnN0cnVjdG9yJylcbiAgICAsIERFRl9DT05TVFJVQ1RPUiAgICAgPSB1aWQoJ2RlZl9jb25zdHJ1Y3RvcicpXG4gICAgLCBBTExfQ09OU1RSVUNUT1JTICAgID0gJHR5cGVkLkNPTlNUUlxuICAgICwgVFlQRURfQVJSQVkgICAgICAgICA9ICR0eXBlZC5UWVBFRFxuICAgICwgVklFVyAgICAgICAgICAgICAgICA9ICR0eXBlZC5WSUVXXG4gICAgLCBXUk9OR19MRU5HVEggICAgICAgID0gJ1dyb25nIGxlbmd0aCEnO1xuXG4gIHZhciAkbWFwID0gY3JlYXRlQXJyYXlNZXRob2QoMSwgZnVuY3Rpb24oTywgbGVuZ3RoKXtcbiAgICByZXR1cm4gYWxsb2NhdGUoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxlbmd0aCk7XG4gIH0pO1xuXG4gIHZhciBMSVRUTEVfRU5ESUFOID0gZmFpbHMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3IFVpbnQxNkFycmF5KFsxXSkuYnVmZmVyKVswXSA9PT0gMTtcbiAgfSk7XG5cbiAgdmFyIEZPUkNFRF9TRVQgPSAhIVVpbnQ4QXJyYXkgJiYgISFVaW50OEFycmF5W1BST1RPVFlQRV0uc2V0ICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IFVpbnQ4QXJyYXkoMSkuc2V0KHt9KTtcbiAgfSk7XG5cbiAgdmFyIHN0cmljdFRvTGVuZ3RoID0gZnVuY3Rpb24oaXQsIFNBTUUpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgdmFyIG51bWJlciA9ICtpdFxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChpdCk7XG4gICAgaWYoU0FNRSAmJiAhc2FtZShudW1iZXIsIGxlbmd0aCkpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHJldHVybiBsZW5ndGg7XG4gIH07XG5cbiAgdmFyIHRvT2Zmc2V0ID0gZnVuY3Rpb24oaXQsIEJZVEVTKXtcbiAgICB2YXIgb2Zmc2V0ID0gdG9JbnRlZ2VyKGl0KTtcbiAgICBpZihvZmZzZXQgPCAwIHx8IG9mZnNldCAlIEJZVEVTKXRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9O1xuXG4gIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgICBpZihpc09iamVjdChpdCkgJiYgVFlQRURfQVJSQVkgaW4gaXQpcmV0dXJuIGl0O1xuICAgIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgdHlwZWQgYXJyYXkhJyk7XG4gIH07XG5cbiAgdmFyIGFsbG9jYXRlID0gZnVuY3Rpb24oQywgbGVuZ3RoKXtcbiAgICBpZighKGlzT2JqZWN0KEMpICYmIFRZUEVEX0NPTlNUUlVDVE9SIGluIEMpKXtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSXQgaXMgbm90IGEgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IhJyk7XG4gICAgfSByZXR1cm4gbmV3IEMobGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgc3BlY2llc0Zyb21MaXN0ID0gZnVuY3Rpb24oTywgbGlzdCl7XG4gICAgcmV0dXJuIGZyb21MaXN0KHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsaXN0KTtcbiAgfTtcblxuICB2YXIgZnJvbUxpc3QgPSBmdW5jdGlvbihDLCBsaXN0KXtcbiAgICB2YXIgaW5kZXggID0gMFxuICAgICAgLCBsZW5ndGggPSBsaXN0Lmxlbmd0aFxuICAgICAgLCByZXN1bHQgPSBhbGxvY2F0ZShDLCBsZW5ndGgpO1xuICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uKGl0LCBrZXksIGludGVybmFsKXtcbiAgICBkUChpdCwga2V5LCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5fZFtpbnRlcm5hbF07IH19KTtcbiAgfTtcblxuICB2YXIgJGZyb20gPSBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiwgbWFwZm4sIHRoaXNBcmcgKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3Qoc291cmNlKVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBpLCBsZW5ndGgsIHZhbHVlcywgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICFpc0FycmF5SXRlcihpdGVyRm4pKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCB2YWx1ZXMgPSBbXSwgaSA9IDA7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaSsrKXtcbiAgICAgICAgdmFsdWVzLnB1c2goc3RlcC52YWx1ZSk7XG4gICAgICB9IE8gPSB2YWx1ZXM7XG4gICAgfVxuICAgIGlmKG1hcHBpbmcgJiYgYUxlbiA+IDIpbWFwZm4gPSBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgZm9yKGkgPSAwLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCksIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7IGxlbmd0aCA+IGk7IGkrKyl7XG4gICAgICByZXN1bHRbaV0gPSBtYXBwaW5nID8gbWFwZm4oT1tpXSwgaSkgOiBPW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciAkb2YgPSBmdW5jdGlvbiBvZigvKi4uLml0ZW1zKi8pe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTtcbiAgICB3aGlsZShsZW5ndGggPiBpbmRleClyZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gaU9TIFNhZmFyaSA2LnggZmFpbHMgaGVyZVxuICB2YXIgVE9fTE9DQUxFX0JVRyA9ICEhVWludDhBcnJheSAmJiBmYWlscyhmdW5jdGlvbigpeyBhcnJheVRvTG9jYWxlU3RyaW5nLmNhbGwobmV3IFVpbnQ4QXJyYXkoMSkpOyB9KTtcblxuICB2YXIgJHRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcoKXtcbiAgICByZXR1cm4gYXJyYXlUb0xvY2FsZVN0cmluZy5hcHBseShUT19MT0NBTEVfQlVHID8gYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpKSA6IHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHZhciBwcm90byA9IHtcbiAgICBjb3B5V2l0aGluOiBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQgLyosIGVuZCAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlDb3B5V2l0aGluLmNhbGwodmFsaWRhdGUodGhpcyksIHRhcmdldCwgc3RhcnQsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUV2ZXJ5KHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCwgZW5kICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5RmlsbC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheUZpbHRlcih2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbixcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpKTtcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUZpbmQodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUZpbmRJbmRleCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgYXJyYXlGb3JFYWNoKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlJbmRleE9mKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXtcbiAgICAgIHJldHVybiBhcnJheUluY2x1ZGVzKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheUpvaW4uYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5TGFzdEluZGV4T2YuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uIG1hcChtYXBmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gJG1hcCh2YWxpZGF0ZSh0aGlzKSwgbWFwZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyosIGluaXRpYWxWYWx1ZSAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheVJlZHVjZS5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qLCBpbml0aWFsVmFsdWUgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlSZWR1Y2VSaWdodC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKXtcbiAgICAgIHZhciB0aGF0ICAgPSB0aGlzXG4gICAgICAgICwgbGVuZ3RoID0gdmFsaWRhdGUodGhhdCkubGVuZ3RoXG4gICAgICAgICwgbWlkZGxlID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKVxuICAgICAgICAsIGluZGV4ICA9IDBcbiAgICAgICAgLCB2YWx1ZTtcbiAgICAgIHdoaWxlKGluZGV4IDwgbWlkZGxlKXtcbiAgICAgICAgdmFsdWUgICAgICAgICA9IHRoYXRbaW5kZXhdO1xuICAgICAgICB0aGF0W2luZGV4KytdID0gdGhhdFstLWxlbmd0aF07XG4gICAgICAgIHRoYXRbbGVuZ3RoXSAgPSB2YWx1ZTtcbiAgICAgIH0gcmV0dXJuIHRoYXQ7XG4gICAgfSxcbiAgICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5U29tZSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pe1xuICAgICAgcmV0dXJuIGFycmF5U29ydC5jYWxsKHZhbGlkYXRlKHRoaXMpLCBjb21wYXJlZm4pO1xuICAgIH0sXG4gICAgc3ViYXJyYXk6IGZ1bmN0aW9uIHN1YmFycmF5KGJlZ2luLCBlbmQpe1xuICAgICAgdmFyIE8gICAgICA9IHZhbGlkYXRlKHRoaXMpXG4gICAgICAgICwgbGVuZ3RoID0gTy5sZW5ndGhcbiAgICAgICAgLCAkYmVnaW4gPSB0b0luZGV4KGJlZ2luLCBsZW5ndGgpO1xuICAgICAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSkpKFxuICAgICAgICBPLmJ1ZmZlcixcbiAgICAgICAgTy5ieXRlT2Zmc2V0ICsgJGJlZ2luICogTy5CWVRFU19QRVJfRUxFTUVOVCxcbiAgICAgICAgdG9MZW5ndGgoKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCkpIC0gJGJlZ2luKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyICRzbGljZSA9IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpe1xuICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpLCBzdGFydCwgZW5kKSk7XG4gIH07XG5cbiAgdmFyICRzZXQgPSBmdW5jdGlvbiBzZXQoYXJyYXlMaWtlIC8qLCBvZmZzZXQgKi8pe1xuICAgIHZhbGlkYXRlKHRoaXMpO1xuICAgIHZhciBvZmZzZXQgPSB0b09mZnNldChhcmd1bWVudHNbMV0sIDEpXG4gICAgICAsIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgICAsIHNyYyAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgbGVuICAgID0gdG9MZW5ndGgoc3JjLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMDtcbiAgICBpZihsZW4gKyBvZmZzZXQgPiBsZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHdoaWxlKGluZGV4IDwgbGVuKXRoaXNbb2Zmc2V0ICsgaW5kZXhdID0gc3JjW2luZGV4KytdO1xuICB9O1xuXG4gIHZhciAkaXRlcmF0b3JzID0ge1xuICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKXtcbiAgICAgIHJldHVybiBhcnJheUVudHJpZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCl7XG4gICAgICByZXR1cm4gYXJyYXlLZXlzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH0sXG4gICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoKXtcbiAgICAgIHJldHVybiBhcnJheVZhbHVlcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzVEFJbmRleCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KXtcbiAgICByZXR1cm4gaXNPYmplY3QodGFyZ2V0KVxuICAgICAgJiYgdGFyZ2V0W1RZUEVEX0FSUkFZXVxuICAgICAgJiYgdHlwZW9mIGtleSAhPSAnc3ltYm9sJ1xuICAgICAgJiYga2V5IGluIHRhcmdldFxuICAgICAgJiYgU3RyaW5nKCtrZXkpID09IFN0cmluZyhrZXkpO1xuICB9O1xuICB2YXIgJGdldERlc2MgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpe1xuICAgIHJldHVybiBpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgICAgPyBwcm9wZXJ0eURlc2MoMiwgdGFyZ2V0W2tleV0pXG4gICAgICA6IGdPUEQodGFyZ2V0LCBrZXkpO1xuICB9O1xuICB2YXIgJHNldERlc2MgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzYyl7XG4gICAgaWYoaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSlcbiAgICAgICYmIGlzT2JqZWN0KGRlc2MpXG4gICAgICAmJiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICAgICYmICFoYXMoZGVzYywgJ2dldCcpXG4gICAgICAmJiAhaGFzKGRlc2MsICdzZXQnKVxuICAgICAgLy8gVE9ETzogYWRkIHZhbGlkYXRpb24gZGVzY3JpcHRvciB3L28gY2FsbGluZyBhY2Nlc3NvcnNcbiAgICAgICYmICFkZXNjLmNvbmZpZ3VyYWJsZVxuICAgICAgJiYgKCFoYXMoZGVzYywgJ3dyaXRhYmxlJykgfHwgZGVzYy53cml0YWJsZSlcbiAgICAgICYmICghaGFzKGRlc2MsICdlbnVtZXJhYmxlJykgfHwgZGVzYy5lbnVtZXJhYmxlKVxuICAgICl7XG4gICAgICB0YXJnZXRba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSByZXR1cm4gZFAodGFyZ2V0LCBrZXksIGRlc2MpO1xuICB9O1xuXG4gIGlmKCFBTExfQ09OU1RSVUNUT1JTKXtcbiAgICAkR09QRC5mID0gJGdldERlc2M7XG4gICAgJERQLmYgICA9ICRzZXREZXNjO1xuICB9XG5cbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhQUxMX0NPTlNUUlVDVE9SUywgJ09iamVjdCcsIHtcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXREZXNjLFxuICAgIGRlZmluZVByb3BlcnR5OiAgICAgICAgICAgJHNldERlc2NcbiAgfSk7XG5cbiAgaWYoZmFpbHMoZnVuY3Rpb24oKXsgYXJyYXlUb1N0cmluZy5jYWxsKHt9KTsgfSkpe1xuICAgIGFycmF5VG9TdHJpbmcgPSBhcnJheVRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgJFR5cGVkQXJyYXlQcm90b3R5cGUkID0gcmVkZWZpbmVBbGwoe30sIHByb3RvKTtcbiAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAkaXRlcmF0b3JzKTtcbiAgaGlkZSgkVHlwZWRBcnJheVByb3RvdHlwZSQsIElURVJBVE9SLCAkaXRlcmF0b3JzLnZhbHVlcyk7XG4gIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwge1xuICAgIHNsaWNlOiAgICAgICAgICAkc2xpY2UsXG4gICAgc2V0OiAgICAgICAgICAgICRzZXQsXG4gICAgY29uc3RydWN0b3I6ICAgIGZ1bmN0aW9uKCl7IC8qIG5vb3AgKi8gfSxcbiAgICB0b1N0cmluZzogICAgICAgYXJyYXlUb1N0cmluZyxcbiAgICB0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nXG4gIH0pO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnVmZmVyJywgJ2InKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVPZmZzZXQnLCAnbycpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZUxlbmd0aCcsICdsJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdsZW5ndGgnLCAnZScpO1xuICBkUCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIFRBRywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXNbVFlQRURfQVJSQVldOyB9XG4gIH0pO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBCWVRFUywgd3JhcHBlciwgQ0xBTVBFRCl7XG4gICAgQ0xBTVBFRCA9ICEhQ0xBTVBFRDtcbiAgICB2YXIgTkFNRSAgICAgICA9IEtFWSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5J1xuICAgICAgLCBJU05UX1VJTlQ4ID0gTkFNRSAhPSAnVWludDhBcnJheSdcbiAgICAgICwgR0VUVEVSICAgICA9ICdnZXQnICsgS0VZXG4gICAgICAsIFNFVFRFUiAgICAgPSAnc2V0JyArIEtFWVxuICAgICAgLCBUeXBlZEFycmF5ID0gZ2xvYmFsW05BTUVdXG4gICAgICAsIEJhc2UgICAgICAgPSBUeXBlZEFycmF5IHx8IHt9XG4gICAgICAsIFRBQyAgICAgICAgPSBUeXBlZEFycmF5ICYmIGdldFByb3RvdHlwZU9mKFR5cGVkQXJyYXkpXG4gICAgICAsIEZPUkNFRCAgICAgPSAhVHlwZWRBcnJheSB8fCAhJHR5cGVkLkFCVlxuICAgICAgLCBPICAgICAgICAgID0ge31cbiAgICAgICwgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXkgJiYgVHlwZWRBcnJheVtQUk9UT1RZUEVdO1xuICAgIHZhciBnZXR0ZXIgPSBmdW5jdGlvbih0aGF0LCBpbmRleCl7XG4gICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG4gICAgICByZXR1cm4gZGF0YS52W0dFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgTElUVExFX0VORElBTik7XG4gICAgfTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24odGhhdCwgaW5kZXgsIHZhbHVlKXtcbiAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcbiAgICAgIGlmKENMQU1QRUQpdmFsdWUgPSAodmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKSkgPCAwID8gMCA6IHZhbHVlID4gMHhmZiA/IDB4ZmYgOiB2YWx1ZSAmIDB4ZmY7XG4gICAgICBkYXRhLnZbU0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCB2YWx1ZSwgTElUVExFX0VORElBTik7XG4gICAgfTtcbiAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4KXtcbiAgICAgIGRQKHRoYXQsIGluZGV4LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgcmV0dXJuIHNldHRlcih0aGlzLCBpbmRleCwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmKEZPUkNFRCl7XG4gICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5LCBOQU1FLCAnX2QnKTtcbiAgICAgICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICAgICAsIG9mZnNldCA9IDBcbiAgICAgICAgICAsIGJ1ZmZlciwgYnl0ZUxlbmd0aCwgbGVuZ3RoLCBrbGFzcztcbiAgICAgICAgaWYoIWlzT2JqZWN0KGRhdGEpKXtcbiAgICAgICAgICBsZW5ndGggICAgID0gc3RyaWN0VG9MZW5ndGgoZGF0YSwgdHJ1ZSlcbiAgICAgICAgICBieXRlTGVuZ3RoID0gbGVuZ3RoICogQllURVM7XG4gICAgICAgICAgYnVmZmVyICAgICA9IG5ldyAkQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSBpZihkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKXtcbiAgICAgICAgICBidWZmZXIgPSBkYXRhO1xuICAgICAgICAgIG9mZnNldCA9IHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKTtcbiAgICAgICAgICB2YXIgJGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICBpZigkbGVuZ3RoID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaWYoJGxlbiAlIEJZVEVTKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gb2Zmc2V0O1xuICAgICAgICAgICAgaWYoYnl0ZUxlbmd0aCA8IDApdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gdG9MZW5ndGgoJGxlbmd0aCkgKiBCWVRFUztcbiAgICAgICAgICAgIGlmKGJ5dGVMZW5ndGggKyBvZmZzZXQgPiAkbGVuKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVuZ3RoID0gYnl0ZUxlbmd0aCAvIEJZVEVTO1xuICAgICAgICB9IGVsc2UgaWYoVFlQRURfQVJSQVkgaW4gZGF0YSl7XG4gICAgICAgICAgcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGUodGhhdCwgJ19kJywge1xuICAgICAgICAgIGI6IGJ1ZmZlcixcbiAgICAgICAgICBvOiBvZmZzZXQsXG4gICAgICAgICAgbDogYnl0ZUxlbmd0aCxcbiAgICAgICAgICBlOiBsZW5ndGgsXG4gICAgICAgICAgdjogbmV3ICREYXRhVmlldyhidWZmZXIpXG4gICAgICAgIH0pO1xuICAgICAgICB3aGlsZShpbmRleCA8IGxlbmd0aClhZGRFbGVtZW50KHRoYXQsIGluZGV4KyspO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheVtQUk9UT1RZUEVdID0gY3JlYXRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCk7XG4gICAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIFR5cGVkQXJyYXkpO1xuICAgIH0gZWxzZSBpZighJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcil7XG4gICAgICAvLyBWOCB3b3JrcyB3aXRoIGl0ZXJhdG9ycywgYnV0IGZhaWxzIGluIG1hbnkgb3RoZXIgY2FzZXNcbiAgICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00NTUyXG4gICAgICBuZXcgVHlwZWRBcnJheShudWxsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIG5ldyBUeXBlZEFycmF5KGl0ZXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH0sIHRydWUpKXtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpe1xuICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUpO1xuICAgICAgICB2YXIga2xhc3M7XG4gICAgICAgIC8vIGB3c2AgbW9kdWxlIGJ1ZywgdGVtcG9yYXJpbHkgcmVtb3ZlIHZhbGlkYXRpb24gbGVuZ3RoIGZvciBVaW50OEFycmF5XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL3B1bGwvNjQ1XG4gICAgICAgIGlmKCFpc09iamVjdChkYXRhKSlyZXR1cm4gbmV3IEJhc2Uoc3RyaWN0VG9MZW5ndGgoZGF0YSwgSVNOVF9VSU5UOCkpO1xuICAgICAgICBpZihkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKXtcbiAgICAgICAgICByZXR1cm4gJGxlbmd0aCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSwgJGxlbmd0aClcbiAgICAgICAgICAgIDogJG9mZnNldCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpKVxuICAgICAgICAgICAgICA6IG5ldyBCYXNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmKFRZUEVEX0FSUkFZIGluIGRhdGEpcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgYXJyYXlGb3JFYWNoKFRBQyAhPT0gRnVuY3Rpb24ucHJvdG90eXBlID8gZ09QTihCYXNlKS5jb25jYXQoZ09QTihUQUMpKSA6IGdPUE4oQmFzZSksIGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCEoa2V5IGluIFR5cGVkQXJyYXkpKWhpZGUoVHlwZWRBcnJheSwga2V5LCBCYXNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBUeXBlZEFycmF5UHJvdG90eXBlO1xuICAgICAgaWYoIUxJQlJBUlkpVHlwZWRBcnJheVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFR5cGVkQXJyYXk7XG4gICAgfVxuICAgIHZhciAkbmF0aXZlSXRlcmF0b3IgICA9IFR5cGVkQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgICAsIENPUlJFQ1RfSVRFUl9OQU1FID0gISEkbmF0aXZlSXRlcmF0b3IgJiYgKCRuYXRpdmVJdGVyYXRvci5uYW1lID09ICd2YWx1ZXMnIHx8ICRuYXRpdmVJdGVyYXRvci5uYW1lID09IHVuZGVmaW5lZClcbiAgICAgICwgJGl0ZXJhdG9yICAgICAgICAgPSAkaXRlcmF0b3JzLnZhbHVlcztcbiAgICBoaWRlKFR5cGVkQXJyYXksIFRZUEVEX0NPTlNUUlVDVE9SLCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRZUEVEX0FSUkFZLCBOQU1FKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgREVGX0NPTlNUUlVDVE9SLCBUeXBlZEFycmF5KTtcblxuICAgIGlmKENMQU1QRUQgPyBuZXcgVHlwZWRBcnJheSgxKVtUQUddICE9IE5BTUUgOiAhKFRBRyBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSl7XG4gICAgICBkUChUeXBlZEFycmF5UHJvdG90eXBlLCBUQUcsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gTkFNRTsgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgT1tOQU1FXSA9IFR5cGVkQXJyYXk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChUeXBlZEFycmF5ICE9IEJhc2UpLCBPKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCBOQU1FLCB7XG4gICAgICBCWVRFU19QRVJfRUxFTUVOVDogQllURVMsXG4gICAgICBmcm9tOiAkZnJvbSxcbiAgICAgIG9mOiAkb2ZcbiAgICB9KTtcblxuICAgIGlmKCEoQllURVNfUEVSX0VMRU1FTlQgaW4gVHlwZWRBcnJheVByb3RvdHlwZSkpaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsIE5BTUUsIHByb3RvKTtcblxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFRF9TRVQsIE5BTUUsIHtzZXQ6ICRzZXR9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIUNPUlJFQ1RfSVRFUl9OQU1FLCBOQU1FLCAkaXRlcmF0b3JzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXlQcm90b3R5cGUudG9TdHJpbmcgIT0gYXJyYXlUb1N0cmluZyksIE5BTUUsIHt0b1N0cmluZzogYXJyYXlUb1N0cmluZ30pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuICAgICAgbmV3IFR5cGVkQXJyYXkoMSkuc2xpY2UoKTtcbiAgICB9KSwgTkFNRSwge3NsaWNlOiAkc2xpY2V9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gWzEsIDJdLnRvTG9jYWxlU3RyaW5nKCkgIT0gbmV3IFR5cGVkQXJyYXkoWzEsIDJdKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICBUeXBlZEFycmF5UHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nLmNhbGwoWzEsIDJdKTtcbiAgICB9KSksIE5BTUUsIHt0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nfSk7XG5cbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBDT1JSRUNUX0lURVJfTkFNRSA/ICRuYXRpdmVJdGVyYXRvciA6ICRpdGVyYXRvcjtcbiAgICBpZighTElCUkFSWSAmJiAhQ09SUkVDVF9JVEVSX05BTUUpaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBJVEVSQVRPUiwgJGl0ZXJhdG9yKTtcbiAgfTtcbn0gZWxzZSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdVaW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gVWludDhDbGFtcGVkQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSwgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1jbGFtcGVkLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnSW50MTYnLCAyLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQxNi1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQxNicsIDIsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gVWludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdJbnQzMicsIDQsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gSW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnVWludDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0Zsb2F0MzInLCA0LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdGbG9hdDY0JywgOCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDY0QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDY0LWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHJBcHBseSAgICA9IChyZXF1aXJlKCcuL19nbG9iYWwnKS5SZWZsZWN0IHx8IHt9KS5hcHBseVxuICAsIGZBcHBseSAgICA9IEZ1bmN0aW9uLmFwcGx5O1xuLy8gTVMgRWRnZSBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJBcHBseShmdW5jdGlvbigpe30pO1xufSksICdSZWZsZWN0Jywge1xuICBhcHBseTogZnVuY3Rpb24gYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3Qpe1xuICAgIHZhciBUID0gYUZ1bmN0aW9uKHRhcmdldClcbiAgICAgICwgTCA9IGFuT2JqZWN0KGFyZ3VtZW50c0xpc3QpO1xuICAgIHJldHVybiByQXBwbHkgPyByQXBwbHkoVCwgdGhpc0FyZ3VtZW50LCBMKSA6IGZBcHBseS5jYWxsKFQsIHRoaXNBcmd1bWVudCwgTCk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseS5qc1xuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDI2LjEuMiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50c0xpc3QgWywgbmV3VGFyZ2V0XSlcbnZhciAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjcmVhdGUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgYUZ1bmN0aW9uICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuT2JqZWN0ICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGZhaWxzICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgYmluZCAgICAgICA9IHJlcXVpcmUoJy4vX2JpbmQnKVxuICAsIHJDb25zdHJ1Y3QgPSAocmVxdWlyZSgnLi9fZ2xvYmFsJykuUmVmbGVjdCB8fCB7fSkuY29uc3RydWN0O1xuXG4vLyBNUyBFZGdlIHN1cHBvcnRzIG9ubHkgMiBhcmd1bWVudHMgYW5kIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcbi8vIEZGIE5pZ2h0bHkgc2V0cyB0aGlyZCBhcmd1bWVudCBhcyBgbmV3LnRhcmdldGAsIGJ1dCBkb2VzIG5vdCBjcmVhdGUgYHRoaXNgIGZyb20gaXRcbnZhciBORVdfVEFSR0VUX0JVRyA9IGZhaWxzKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKHJDb25zdHJ1Y3QoZnVuY3Rpb24oKXt9LCBbXSwgRikgaW5zdGFuY2VvZiBGKTtcbn0pO1xudmFyIEFSR1NfQlVHID0gIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJDb25zdHJ1Y3QoZnVuY3Rpb24oKXt9KTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChORVdfVEFSR0VUX0JVRyB8fCBBUkdTX0JVRyksICdSZWZsZWN0Jywge1xuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyosIG5ld1RhcmdldCovKXtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICBhbk9iamVjdChhcmdzKTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZihBUkdTX0JVRyAmJiAhTkVXX1RBUkdFVF9CVUcpcmV0dXJuIHJDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuICAgIGlmKFRhcmdldCA9PSBuZXdUYXJnZXQpe1xuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcbiAgICAgIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBUYXJnZXQ7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKTtcbiAgICB9XG4gICAgLy8gd2l0aCBhbHRlcmVkIG5ld1RhcmdldCwgbm90IHN1cHBvcnQgYnVpbHQtaW4gY29uc3RydWN0b3JzXG4gICAgdmFyIHByb3RvICAgID0gbmV3VGFyZ2V0LnByb3RvdHlwZVxuICAgICAgLCBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpXG4gICAgICAsIHJlc3VsdCAgID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xuXG4vLyBNUyBFZGdlIGhhcyBicm9rZW4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAtIHRocm93aW5nIGluc3RlYWQgb2YgcmV0dXJuaW5nIGZhbHNlXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShkUC5mKHt9LCAxLCB7dmFsdWU6IDF9KSwgMSwge3ZhbHVlOiAyfSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUocHJvcGVydHlLZXksIHRydWUpO1xuICAgIGFuT2JqZWN0KGF0dHJpYnV0ZXMpO1xuICAgIHRyeSB7XG4gICAgICBkUC5mKHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDIzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBnT1BEICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZlxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHZhciBkZXNjID0gZ09QRChhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgRW51bWVyYXRlID0gZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gYW5PYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB2YXIga2V5cyA9IHRoaXMuX2sgPSBbXSAgICAgICAvLyBrZXlzXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XG59O1xucmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKShFbnVtZXJhdGUsICdPYmplY3QnLCBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXNcbiAgICAsIGtleXMgPSB0aGF0Ll9rXG4gICAgLCBrZXk7XG4gIGRvIHtcbiAgICBpZih0aGF0Ll9pID49IGtleXMubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIH0gd2hpbGUoISgoa2V5ID0ga2V5c1t0aGF0Ll9pKytdKSBpbiB0aGF0Ll90KSk7XG4gIHJldHVybiB7dmFsdWU6IGtleSwgZG9uZTogZmFsc2V9O1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KXtcbiAgICByZXR1cm4gbmV3IEVudW1lcmF0ZSh0YXJnZXQpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxudmFyIGdPUEQgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdXG4gICAgLCBkZXNjLCBwcm90bztcbiAgaWYoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpcmV0dXJuIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIGlmKGRlc2MgPSBnT1BELmYodGFyZ2V0LCBwcm9wZXJ0eUtleSkpcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgID8gZGVzYy52YWx1ZVxuICAgIDogZGVzYy5nZXQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpcmV0dXJuIGdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2dldDogZ2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDI2LjEuNyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyIGdPUEQgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHJldHVybiBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBnZXRQcm90byA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKHRhcmdldCl7XG4gICAgcmV0dXJuIGdldFByb3RvKGFuT2JqZWN0KHRhcmdldCkpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMjM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDI2LjEuOSBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KXtcbiAgICByZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0O1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjYuMS4xMCBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpXG52YXIgJGV4cG9ydCAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgYW5PYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHJldHVybiAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZSh0YXJnZXQpIDogdHJ1ZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanNcbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyNi4xLjExIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7b3duS2V5czogcmVxdWlyZSgnLi9fb3duLWtleXMnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbnZhciBnT1BOICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgUmVmbGVjdCAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5SZWZsZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0ICYmIFJlZmxlY3Qub3duS2V5cyB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSBnT1BOLmYoYW5PYmplY3QoaXQpKVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX293bi1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjYuMS4xMiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldClcbnZhciAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgJHByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmKCRwcmV2ZW50RXh0ZW5zaW9ucykkcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjYuMS4xMyBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIFssIHJlY2VpdmVyXSlcbnZhciBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgZ09QRCAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWLyosIHJlY2VpdmVyKi8pe1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXVxuICAgICwgb3duRGVzYyAgPSBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpXG4gICAgLCBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xuICBpZighb3duRGVzYyl7XG4gICAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSl7XG4gICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBvd25EZXNjID0gY3JlYXRlRGVzYygwKTtcbiAgfVxuICBpZihoYXMob3duRGVzYywgJ3ZhbHVlJykpe1xuICAgIGlmKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9IGdPUEQuZihyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGNyZWF0ZURlc2MoMCk7XG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICBkUC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge3NldDogc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qc1xuLy8gbW9kdWxlIGlkID0gMjQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBzZXRQcm90byA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpO1xuXG5pZihzZXRQcm90bykkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHNldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKXtcbiAgICBzZXRQcm90by5jaGVjayh0YXJnZXQsIHByb3RvKTtcbiAgICB0cnkge1xuICAgICAgc2V0UHJvdG8uc2V0KHRhcmdldCwgcHJvdG8pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkaW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyosIGZyb21JbmRleCA9IDAgKi8pe1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdpbmNsdWRlcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGF0ICAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgYXQ6IGZ1bmN0aW9uIGF0KHBvcyl7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5hdC5qc1xuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHBhZCAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1wYWQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIHBhZFN0YXJ0OiBmdW5jdGlvbiBwYWRTdGFydChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRydWUpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtc3RhcnQuanNcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCByZXBlYXQgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1yZXBlYXQnKVxuICAsIGRlZmluZWQgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIG1heExlbmd0aCwgZmlsbFN0cmluZywgbGVmdCl7XG4gIHZhciBTICAgICAgICAgICAgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAsIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoXG4gICAgLCBmaWxsU3RyICAgICAgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZylcbiAgICAsIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG4gIGlmKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGggfHwgZmlsbFN0ciA9PSAnJylyZXR1cm4gUztcbiAgdmFyIGZpbGxMZW4gPSBpbnRNYXhMZW5ndGggLSBzdHJpbmdMZW5ndGhcbiAgICAsIHN0cmluZ0ZpbGxlciA9IHJlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcbiAgaWYoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pc3RyaW5nRmlsbGVyID0gc3RyaW5nRmlsbGVyLnNsaWNlKDAsIGZpbGxMZW4pO1xuICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXBhZC5qc1xuLy8gbW9kdWxlIGlkID0gMjUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHBhZCAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1wYWQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIHBhZEVuZDogZnVuY3Rpb24gcGFkRW5kKG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgZmFsc2UpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtZW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxucmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKSgndHJpbUxlZnQnLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltTGVmdCgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAxKTtcbiAgfTtcbn0sICd0cmltU3RhcnQnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQuanNcbi8vIG1vZHVsZSBpZCA9IDI1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5yZXF1aXJlKCcuL19zdHJpbmctdHJpbScpKCd0cmltUmlnaHQnLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltUmlnaHQoKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMik7XG4gIH07XG59LCAndHJpbUVuZCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQuanNcbi8vIG1vZHVsZSBpZCA9IDI1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL1N0cmluZy5wcm90b3R5cGUubWF0Y2hBbGwvXG52YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGlzUmVnRXhwICAgID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJylcbiAgLCBnZXRGbGFncyAgICA9IHJlcXVpcmUoJy4vX2ZsYWdzJylcbiAgLCBSZWdFeHBQcm90byA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbnZhciAkUmVnRXhwU3RyaW5nSXRlcmF0b3IgPSBmdW5jdGlvbihyZWdleHAsIHN0cmluZyl7XG4gIHRoaXMuX3IgPSByZWdleHA7XG4gIHRoaXMuX3MgPSBzdHJpbmc7XG59O1xuXG5yZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpKCRSZWdFeHBTdHJpbmdJdGVyYXRvciwgJ1JlZ0V4cCBTdHJpbmcnLCBmdW5jdGlvbiBuZXh0KCl7XG4gIHZhciBtYXRjaCA9IHRoaXMuX3IuZXhlYyh0aGlzLl9zKTtcbiAgcmV0dXJuIHt2YWx1ZTogbWF0Y2gsIGRvbmU6IG1hdGNoID09PSBudWxsfTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgbWF0Y2hBbGw6IGZ1bmN0aW9uIG1hdGNoQWxsKHJlZ2V4cCl7XG4gICAgZGVmaW5lZCh0aGlzKTtcbiAgICBpZighaXNSZWdFeHAocmVnZXhwKSl0aHJvdyBUeXBlRXJyb3IocmVnZXhwICsgJyBpcyBub3QgYSByZWdleHAhJyk7XG4gICAgdmFyIFMgICAgID0gU3RyaW5nKHRoaXMpXG4gICAgICAsIGZsYWdzID0gJ2ZsYWdzJyBpbiBSZWdFeHBQcm90byA/IFN0cmluZyhyZWdleHAuZmxhZ3MpIDogZ2V0RmxhZ3MuY2FsbChyZWdleHApXG4gICAgICAsIHJ4ICAgID0gbmV3IFJlZ0V4cChyZWdleHAuc291cmNlLCB+ZmxhZ3MuaW5kZXhPZignZycpID8gZmxhZ3MgOiAnZycgKyBmbGFncyk7XG4gICAgcngubGFzdEluZGV4ID0gdG9MZW5ndGgocmVnZXhwLmxhc3RJbmRleCk7XG4gICAgcmV0dXJuIG5ldyAkUmVnRXhwU3RyaW5nSXRlcmF0b3IocngsIFMpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5tYXRjaC1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDI1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xudmFyICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBvd25LZXlzICAgICAgICA9IHJlcXVpcmUoJy4vX293bi1rZXlzJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUEQgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCl7XG4gICAgdmFyIE8gICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICAgLCBnZXREZXNjID0gZ09QRC5mXG4gICAgICAsIGtleXMgICAgPSBvd25LZXlzKE8pXG4gICAgICAsIHJlc3VsdCAgPSB7fVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoa2V5cy5sZW5ndGggPiBpKWNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5ID0ga2V5c1tpKytdLCBnZXREZXNjKE8sIGtleSkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpe1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBpc0VudW0gICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KGl0KVxuICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGkgICAgICA9IDBcbiAgICAgICwgcmVzdWx0ID0gW11cbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSl7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KXtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcblxuLy8gQi4yLjIuMiBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oUCwgZ2V0dGVyKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fZGVmaW5lR2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lR2V0dGVyX18oUCwgZ2V0dGVyKXtcbiAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwge2dldDogYUZ1bmN0aW9uKGdldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtZ2V0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRm9yY2VkIHJlcGxhY2VtZW50IHByb3RvdHlwZSBhY2Nlc3NvcnMgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyl8fCAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgSyA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIEluIEZGIHRocm93cyBvbmx5IGRlZmluZSBtZXRob2RzXG4gIF9fZGVmaW5lU2V0dGVyX18uY2FsbChudWxsLCBLLCBmdW5jdGlvbigpeyAvKiBlbXB0eSAqL30pO1xuICBkZWxldGUgcmVxdWlyZSgnLi9fZ2xvYmFsJylbS107XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1mb3JjZWQtcGFtLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcblxuLy8gQi4yLjIuMyBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fZGVmaW5lU2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKXtcbiAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwge3NldDogYUZ1bmN0aW9uKHNldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtc2V0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxuLy8gQi4yLjIuNCBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwR2V0dGVyX18oUClcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2xvb2t1cEdldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cEdldHRlcl9fKFApe1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcylcbiAgICAgICwgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpXG4gICAgICAsIEQ7XG4gICAgZG8ge1xuICAgICAgaWYoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSlyZXR1cm4gRC5nZXQ7XG4gICAgfSB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtZ2V0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxuLy8gQi4yLjIuNSBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwU2V0dGVyX18oUClcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2xvb2t1cFNldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cFNldHRlcl9fKFApe1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcylcbiAgICAgICwgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpXG4gICAgICAsIEQ7XG4gICAgZG8ge1xuICAgICAgaWYoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSlyZXR1cm4gRC5zZXQ7XG4gICAgfSB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtc2V0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgZnJvbSAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanNcbi8vIG1vZHVsZSBpZCA9IDI2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDI2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9wcm9wb3NhbC1nbG9iYWxcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3lzdGVtJywge2dsb2JhbDogcmVxdWlyZSgnLi9fZ2xvYmFsJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5c3RlbS5nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLWlzLWVycm9yXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29mICAgICA9IHJlcXVpcmUoJy4vX2NvZicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0Vycm9yJywge1xuICBpc0Vycm9yOiBmdW5jdGlvbiBpc0Vycm9yKGl0KXtcbiAgICByZXR1cm4gY29mKGl0KSA9PT0gJ0Vycm9yJztcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5lcnJvci5pcy1lcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gMjcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGlhZGRoOiBmdW5jdGlvbiBpYWRkaCh4MCwgeDEsIHkwLCB5MSl7XG4gICAgdmFyICR4MCA9IHgwID4+PiAwXG4gICAgICAsICR4MSA9IHgxID4+PiAwXG4gICAgICAsICR5MCA9IHkwID4+PiAwO1xuICAgIHJldHVybiAkeDEgKyAoeTEgPj4+IDApICsgKCgkeDAgJiAkeTAgfCAoJHgwIHwgJHkwKSAmIH4oJHgwICsgJHkwID4+PiAwKSkgPj4+IDMxKSB8IDA7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pYWRkaC5qc1xuLy8gbW9kdWxlIGlkID0gMjcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGlzdWJoOiBmdW5jdGlvbiBpc3ViaCh4MCwgeDEsIHkwLCB5MSl7XG4gICAgdmFyICR4MCA9IHgwID4+PiAwXG4gICAgICAsICR4MSA9IHgxID4+PiAwXG4gICAgICAsICR5MCA9IHkwID4+PiAwO1xuICAgIHJldHVybiAkeDEgLSAoeTEgPj4+IDApIC0gKCh+JHgwICYgJHkwIHwgfigkeDAgXiAkeTApICYgJHgwIC0gJHkwID4+PiAwKSA+Pj4gMzEpIHwgMDtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLmlzdWJoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaW11bGg6IGZ1bmN0aW9uIGltdWxoKHUsIHYpe1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmZcbiAgICAgICwgJHUgPSArdVxuICAgICAgLCAkdiA9ICt2XG4gICAgICAsIHUwID0gJHUgJiBVSU5UMTZcbiAgICAgICwgdjAgPSAkdiAmIFVJTlQxNlxuICAgICAgLCB1MSA9ICR1ID4+IDE2XG4gICAgICAsIHYxID0gJHYgPj4gMTZcbiAgICAgICwgdCAgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+PiAxNik7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pbXVsaC5qc1xuLy8gbW9kdWxlIGlkID0gMjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHVtdWxoOiBmdW5jdGlvbiB1bXVsaCh1LCB2KXtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG4gICAgICAsICR1ID0gK3VcbiAgICAgICwgJHYgPSArdlxuICAgICAgLCB1MCA9ICR1ICYgVUlOVDE2XG4gICAgICAsIHYwID0gJHYgJiBVSU5UMTZcbiAgICAgICwgdTEgPSAkdSA+Pj4gMTZcbiAgICAgICwgdjEgPSAkdiA+Pj4gMTZcbiAgICAgICwgdCAgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4+IDE2KTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLnVtdWxoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleVxuICAsIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5zZXQ7XG5cbm1ldGFkYXRhLmV4cCh7ZGVmaW5lTWV0YWRhdGE6IGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSl7XG4gIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIGFuT2JqZWN0KHRhcmdldCksIHRvTWV0YUtleSh0YXJnZXRLZXkpKTtcbn19KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVmaW5lLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1hcCAgICAgPSByZXF1aXJlKCcuL2VzNi5tYXAnKVxuICAsICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHNoYXJlZCAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbWV0YWRhdGEnKVxuICAsIHN0b3JlICAgPSBzaGFyZWQuc3RvcmUgfHwgKHNoYXJlZC5zdG9yZSA9IG5ldyAocmVxdWlyZSgnLi9lczYud2Vhay1tYXAnKSkpO1xuXG52YXIgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IGZ1bmN0aW9uKHRhcmdldCwgdGFyZ2V0S2V5LCBjcmVhdGUpe1xuICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgaWYoIXRhcmdldE1ldGFkYXRhKXtcbiAgICBpZighY3JlYXRlKXJldHVybiB1bmRlZmluZWQ7XG4gICAgc3RvcmUuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgTWFwKTtcbiAgfVxuICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcbiAgaWYoIWtleU1ldGFkYXRhKXtcbiAgICBpZighY3JlYXRlKXJldHVybiB1bmRlZmluZWQ7XG4gICAgdGFyZ2V0TWV0YWRhdGEuc2V0KHRhcmdldEtleSwga2V5TWV0YWRhdGEgPSBuZXcgTWFwKTtcbiAgfSByZXR1cm4ga2V5TWV0YWRhdGE7XG59O1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogbWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KTtcbn07XG52YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcbn07XG52YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKXtcbiAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCB0cnVlKS5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xufTtcbnZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uKHRhcmdldCwgdGFyZ2V0S2V5KXtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgZmFsc2UpXG4gICAgLCBrZXlzICAgICAgICA9IFtdO1xuICBpZihtZXRhZGF0YU1hcCltZXRhZGF0YU1hcC5mb3JFYWNoKGZ1bmN0aW9uKF8sIGtleSl7IGtleXMucHVzaChrZXkpOyB9KTtcbiAgcmV0dXJuIGtleXM7XG59O1xudmFyIHRvTWV0YUtleSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcbnZhciBleHAgPSBmdW5jdGlvbihPKXtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0JywgTyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3RvcmU6IHN0b3JlLFxuICBtYXA6IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAsXG4gIGhhczogb3JkaW5hcnlIYXNPd25NZXRhZGF0YSxcbiAgZ2V0OiBvcmRpbmFyeUdldE93bk1ldGFkYXRhLFxuICBzZXQ6IG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEsXG4gIGtleXM6IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzLFxuICBrZXk6IHRvTWV0YUtleSxcbiAgZXhwOiBleHBcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19tZXRhZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcbiAgLCBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gbWV0YWRhdGEubWFwXG4gICwgc3RvcmUgICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLnN0b3JlO1xuXG5tZXRhZGF0YS5leHAoe2RlbGV0ZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICB2YXIgdGFyZ2V0S2V5ICAgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pXG4gICAgLCBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5LCBmYWxzZSk7XG4gIGlmKG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgfHwgIW1ldGFkYXRhTWFwWydkZWxldGUnXShtZXRhZGF0YUtleSkpcmV0dXJuIGZhbHNlO1xuICBpZihtZXRhZGF0YU1hcC5zaXplKXJldHVybiB0cnVlO1xuICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgdGFyZ2V0TWV0YWRhdGFbJ2RlbGV0ZSddKHRhcmdldEtleSk7XG4gIHJldHVybiAhIXRhcmdldE1ldGFkYXRhLnNpemUgfHwgc3RvcmVbJ2RlbGV0ZSddKHRhcmdldCk7XG59fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG4gICwgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmdldFxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbnZhciBvcmRpbmFyeUdldE1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIGlmKGhhc093bilyZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiB1bmRlZmluZWQ7XG59O1xuXG5tZXRhZGF0YS5leHAoe2dldE1ldGFkYXRhOiBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXQgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vZXM2LnNldCcpXG4gICwgZnJvbSAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJylcbiAgLCBtZXRhZGF0YSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXNcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5TWV0YWRhdGFLZXlzID0gZnVuY3Rpb24oTywgUCl7XG4gIHZhciBvS2V5cyAgPSBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICwgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIGlmKHBhcmVudCA9PT0gbnVsbClyZXR1cm4gb0tleXM7XG4gIHZhciBwS2V5cyAgPSBvcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuICByZXR1cm4gcEtleXMubGVuZ3RoID8gb0tleXMubGVuZ3RoID8gZnJvbShuZXcgU2V0KG9LZXlzLmNvbmNhdChwS2V5cykpKSA6IHBLZXlzIDogb0tleXM7XG59O1xuXG5tZXRhZGF0YS5leHAoe2dldE1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5TWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xufX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXRcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoe2dldE93bk1ldGFkYXRhOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDI4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5c1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoe2dldE93bk1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xufX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbnZhciBvcmRpbmFyeUhhc01ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIGlmKGhhc093bilyZXR1cm4gdHJ1ZTtcbiAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IGZhbHNlO1xufTtcblxubWV0YWRhdGEuZXhwKHtoYXNNZXRhZGF0YTogZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDI4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHtoYXNPd25NZXRhZGF0YTogZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldClcbiAgICAsIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcbiAgLCBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gbWV0YWRhdGEuc2V0O1xuXG5tZXRhZGF0YS5leHAoe21ldGFkYXRhOiBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCB0YXJnZXRLZXkpe1xuICAgIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoXG4gICAgICBtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSxcbiAgICAgICh0YXJnZXRLZXkgIT09IHVuZGVmaW5lZCA/IGFuT2JqZWN0IDogYUZ1bmN0aW9uKSh0YXJnZXQpLFxuICAgICAgdG9NZXRhS2V5KHRhcmdldEtleSlcbiAgICApO1xuICB9O1xufX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yd2FsZHJvbi90YzM5LW5vdGVzL2Jsb2IvbWFzdGVyL2VzNi8yMDE0LTA5L3NlcHQtMjUubWQjNTEwLWdsb2JhbGFzYXAtZm9yLWVucXVldWluZy1hLW1pY3JvdGFza1xudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIHByb2Nlc3MgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5HLCB7XG4gIGFzYXA6IGZ1bmN0aW9uIGFzYXAoZm4pe1xuICAgIHZhciBkb21haW4gPSBpc05vZGUgJiYgcHJvY2Vzcy5kb21haW47XG4gICAgbWljcm90YXNrKGRvbWFpbiA/IGRvbWFpbi5iaW5kKGZuKSA6IGZuKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSAyODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxudmFyICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBtaWNyb3Rhc2sgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBPQlNFUlZBQkxFICA9IHJlcXVpcmUoJy4vX3drcycpKCdvYnNlcnZhYmxlJylcbiAgLCBhRnVuY3Rpb24gICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhbkluc3RhbmNlICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgaGlkZSAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgUkVUVVJOICAgICAgPSBmb3JPZi5SRVRVUk47XG5cbnZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihmbil7XG4gIHJldHVybiBmbiA9PSBudWxsID8gdW5kZWZpbmVkIDogYUZ1bmN0aW9uKGZuKTtcbn07XG5cbnZhciBjbGVhbnVwU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcbiAgdmFyIGNsZWFudXAgPSBzdWJzY3JpcHRpb24uX2M7XG4gIGlmKGNsZWFudXApe1xuICAgIHN1YnNjcmlwdGlvbi5fYyA9IHVuZGVmaW5lZDtcbiAgICBjbGVhbnVwKCk7XG4gIH1cbn07XG5cbnZhciBzdWJzY3JpcHRpb25DbG9zZWQgPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICByZXR1cm4gc3Vic2NyaXB0aW9uLl9vID09PSB1bmRlZmluZWQ7XG59O1xuXG52YXIgY2xvc2VTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gIH1cbn07XG5cbnZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihvYnNlcnZlciwgc3Vic2NyaWJlcil7XG4gIGFuT2JqZWN0KG9ic2VydmVyKTtcbiAgdGhpcy5fYyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5fbyA9IG9ic2VydmVyO1xuICBvYnNlcnZlciA9IG5ldyBTdWJzY3JpcHRpb25PYnNlcnZlcih0aGlzKTtcbiAgdHJ5IHtcbiAgICB2YXIgY2xlYW51cCAgICAgID0gc3Vic2NyaWJlcihvYnNlcnZlcilcbiAgICAgICwgc3Vic2NyaXB0aW9uID0gY2xlYW51cDtcbiAgICBpZihjbGVhbnVwICE9IG51bGwpe1xuICAgICAgaWYodHlwZW9mIGNsZWFudXAudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpY2xlYW51cCA9IGZ1bmN0aW9uKCl7IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgZWxzZSBhRnVuY3Rpb24oY2xlYW51cCk7XG4gICAgICB0aGlzLl9jID0gY2xlYW51cDtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgcmV0dXJuO1xuICB9IGlmKHN1YnNjcmlwdGlvbkNsb3NlZCh0aGlzKSljbGVhbnVwU3Vic2NyaXB0aW9uKHRoaXMpO1xufTtcblxuU3Vic2NyaXB0aW9uLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKHt9LCB7XG4gIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpeyBjbG9zZVN1YnNjcmlwdGlvbih0aGlzKTsgfVxufSk7XG5cbnZhciBTdWJzY3JpcHRpb25PYnNlcnZlciA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG4gIHRoaXMuX3MgPSBzdWJzY3JpcHRpb247XG59O1xuXG5TdWJzY3JpcHRpb25PYnNlcnZlci5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuICBuZXh0OiBmdW5jdGlvbiBuZXh0KHZhbHVlKXtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcbiAgICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIubmV4dCk7XG4gICAgICAgIGlmKG0pcmV0dXJuIG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjbG9zZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcih2YWx1ZSl7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYoc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpdGhyb3cgdmFsdWU7XG4gICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgaWYoIW0pdGhyb3cgdmFsdWU7XG4gICAgICB2YWx1ZSA9IG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICB0cnkge1xuICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKXtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcbiAgICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuY29tcGxldGUpO1xuICAgICAgICB2YWx1ZSA9IG0gPyBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufSk7XG5cbnZhciAkT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlcil7XG4gIGFuSW5zdGFuY2UodGhpcywgJE9ic2VydmFibGUsICdPYnNlcnZhYmxlJywgJ19mJykuX2YgPSBhRnVuY3Rpb24oc3Vic2NyaWJlcik7XG59O1xuXG5yZWRlZmluZUFsbCgkT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpe1xuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKG9ic2VydmVyLCB0aGlzLl9mKTtcbiAgfSxcbiAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChmbil7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgKGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIGFGdW5jdGlvbihmbik7XG4gICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhhdC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0IDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZm4odmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIGNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbnJlZGVmaW5lQWxsKCRPYnNlcnZhYmxlLCB7XG4gIGZyb206IGZ1bmN0aW9uIGZyb20oeCl7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZTtcbiAgICB2YXIgbWV0aG9kID0gZ2V0TWV0aG9kKGFuT2JqZWN0KHgpW09CU0VSVkFCTEVdKTtcbiAgICBpZihtZXRob2Qpe1xuICAgICAgdmFyIG9ic2VydmFibGUgPSBhbk9iamVjdChtZXRob2QuY2FsbCh4KSk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZS5jb25zdHJ1Y3RvciA9PT0gQyA/IG9ic2VydmFibGUgOiBuZXcgQyhmdW5jdGlvbihvYnNlcnZlcil7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKXtcbiAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWRvbmUpe1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZihmb3JPZih4LCBmYWxzZSwgZnVuY3Rpb24oaXQpe1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0KTtcbiAgICAgICAgICAgICAgaWYoZG9uZSlyZXR1cm4gUkVUVVJOO1xuICAgICAgICAgICAgfSkgPT09IFJFVFVSTilyZXR1cm47XG4gICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIGlmKGRvbmUpdGhyb3cgZTtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXsgZG9uZSA9IHRydWU7IH07XG4gICAgfSk7XG4gIH0sXG4gIG9mOiBmdW5jdGlvbiBvZigpe1xuICAgIGZvcih2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IEFycmF5KGwpOyBpIDwgbDspaXRlbXNbaV0gPSBhcmd1bWVudHNbaSsrXTtcbiAgICByZXR1cm4gbmV3ICh0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZSkoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICBpZighZG9uZSl7XG4gICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKXtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYoZG9uZSlyZXR1cm47XG4gICAgICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpeyBkb25lID0gdHJ1ZTsgfTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmhpZGUoJE9ic2VydmFibGUucHJvdG90eXBlLCBPQlNFUlZBQkxFLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5HLCB7T2JzZXJ2YWJsZTogJE9ic2VydmFibGV9KTtcblxucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnT2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbnZhciBnbG9iYWwgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpbnZva2UgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBwYXJ0aWFsICAgID0gcmVxdWlyZSgnLi9fcGFydGlhbCcpXG4gICwgbmF2aWdhdG9yICA9IGdsb2JhbC5uYXZpZ2F0b3JcbiAgLCBNU0lFICAgICAgID0gISFuYXZpZ2F0b3IgJiYgL01TSUUgLlxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIHdyYXAgPSBmdW5jdGlvbihzZXQpe1xuICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uKGZuLCB0aW1lIC8qLCAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gc2V0KGludm9rZShcbiAgICAgIHBhcnRpYWwsXG4gICAgICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksXG4gICAgICB0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pXG4gICAgKSwgdGltZSk7XG4gIH0gOiBzZXQ7XG59O1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIgKyAkZXhwb3J0LkYgKiBNU0lFLCB7XG4gIHNldFRpbWVvdXQ6ICB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanNcbi8vIG1vZHVsZSBpZCA9IDI4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgcGF0aCAgICAgID0gcmVxdWlyZSgnLi9fcGF0aCcpXG4gICwgaW52b2tlICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKC8qIC4uLnBhcmdzICovKXtcbiAgdmFyIGZuICAgICA9IGFGdW5jdGlvbih0aGlzKVxuICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgcGFyZ3MgID0gQXJyYXkobGVuZ3RoKVxuICAgICwgaSAgICAgID0gMFxuICAgICwgXyAgICAgID0gcGF0aC5fXG4gICAgLCBob2xkZXIgPSBmYWxzZTtcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigocGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8paG9sZGVyID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBqID0gMCwgayA9IDAsIGFyZ3M7XG4gICAgaWYoIWhvbGRlciAmJiAhYUxlbilyZXR1cm4gaW52b2tlKGZuLCBwYXJncywgdGhhdCk7XG4gICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XG4gICAgaWYoaG9sZGVyKWZvcig7bGVuZ3RoID4gajsgaisrKWlmKGFyZ3Nbal0gPT09IF8pYXJnc1tqXSA9IGFyZ3VtZW50c1trKytdO1xuICAgIHdoaWxlKGFMZW4gPiBrKWFyZ3MucHVzaChhcmd1bWVudHNbaysrXSk7XG4gICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9fcGFydGlhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL19wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICR0YXNrICAgPSByZXF1aXJlKCcuL190YXNrJyk7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiwge1xuICBzZXRJbW1lZGlhdGU6ICAgJHRhc2suc2V0LFxuICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9IEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudGAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuIFNvbWUgbWF5IGNvbnNpZGVyIHRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIHRvb1xuICAvLyBjdXRlc3ksIGJ1dCB0aGV5IGFyZSBjdXJtdWRnZW9ucy5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBuZXcgQXdhaXRBcmd1bWVudChhcmcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEF3YWl0QXJndW1lbnQoYXJnKSB7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDI5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2NvcmUucmVnZXhwLmVzY2FwZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuUmVnRXhwLmVzY2FwZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL2ZuL3JlZ2V4cC9lc2NhcGUuanNcbi8vIG1vZHVsZSBpZCA9IDI5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5nci9SZXhFeHAuZXNjYXBlXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHJlICAgICA9IHJlcXVpcmUoJy4vX3JlcGxhY2VyJykoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVnRXhwJywge2VzY2FwZTogZnVuY3Rpb24gZXNjYXBlKGl0KXsgcmV0dXJuICRyZShpdCk7IH19KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLnJlZ2V4cC5lc2NhcGUuanNcbi8vIG1vZHVsZSBpZCA9IDI5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlZ0V4cCwgcmVwbGFjZSl7XG4gIHZhciByZXBsYWNlciA9IHJlcGxhY2UgPT09IE9iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuICB9IDogcmVwbGFjZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gU3RyaW5nKGl0KS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvX3JlcGxhY2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgVmVjdG9yID0gcmVxdWlyZShcIi4vbGliL3ZlY3RvcnNcIik7XG5jb25zdCBQYXJ0aWNsZSA9IHJlcXVpcmUoXCIuL2xpYi9wYXJ0aWNsZVwiKTtcbmNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vbGliL3V0aWxzXCIpO1xuY29uc3QgU2hhcGVzID0gcmVxdWlyZShcIi4vbGliL3NoYXBlc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZlY3RvcixcbiAgUGFydGljbGUsXG4gIFV0aWxzLFxuICBTaGFwZXMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICB4OiAwLFxuICB5OiAxLFxufTtcblxuLyoqXG4gKiBWZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFZlY3RvcihzdGF0ZT1JTklUSUFMX1NUQVRFKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIC0gRWFzeSB3YXkgdG8gaW5zdGFudGlhdGUgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gIHtJbnR9IHhcbiAqIEBwYXJhbSAge0ludH0geVxuICogQHJldHVybiB7VmVjdG9yfSAgIEEgb2JqZWN0IGluaGVyaXRpbmcgZnJvbSBWZWN0b3IuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHgsIHkpIHtcbiAgY29uc3QgdmVjID0gbmV3IFZlY3Rvcih7eCwgeX0pO1xuICByZXR1cm4gdmVjO1xufTtcblxuLyoqXG4gKiBTZXQgLSBBIHNldHRlciBmb3IgdGhlIHZlY3RvciBjbGFzcy5cbiAqIEBwYXJhbSAgeyp9IHByb3BcbiAqIEBwYXJhbSAgeyp9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn0gSXMgdGhlIHByb3AgeW91ciBwYXNzaW5nIGluIGV4c2lzdC5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcCwgdmFsKSB7XG5cdC8vIFRPRE86IEFkZCBjaGVjayB2YWwgaXMgbnVtYmVyXG5cdC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIHRoaXMuc3RhdGVbcHJvcF0gPSB2YWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIGdldCAtIEEgZ2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wIFx0VGhlIHByb3AgdG8gc2V0IG9uIHN0YXRlLlxuICogQHJldHVybiB7VmFsdWV9IFx0XHRcdFx0VGhlIHZhbHVlIGFzc29zaWF0ZWQgd2l0aCB0aGUgcHJvcC5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQocHJvcCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZVtwcm9wXTtcbn07XG5cbi8qKlxuICogc2V0QW5nbGUgLSBQbG90IHRoZSBjb3JyZGluYXRlcyBiYXNlZCBvbiByYWRpYW5zIGdpdmVuLlxuICogQHBhcmFtIHtSYWRpYW5zfVx0cmFkIEEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLlxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldEFuZ2xlID0gZnVuY3Rpb24gc2V0QW5nbGUocmFkKSB7XG5cdC8vIFRPRE86IEFkZCBjaGVjayByYWQgaXMgbnVtYmVyXG5cdC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xufTtcblxuLyoqXG4gKiBzZXRMZW5ndGggLSBUYWtlcyBhIGxlbmd0aCBhbmQgc2V0cyBjb29yZGluYXRlLlxuICogQHBhcmFtIHtJbnRlZ2VyfSBsZW5ndGhcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXRMZW5ndGggPSBmdW5jdGlvbiBzZXRMZW5ndGgobGVuZ3RoKSB7XG5cdC8vIFRPRE86IEFkZCBjaGVjayByYWQgaXMgbnVtYmVyXG5cdC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBjb25zdCByYWQgPSB0aGlzLmdldEFuZ2xlKCk7XG5cbiAgdGhpcy5zZXQoXCJ4XCIsIE1hdGguY29zKHJhZCkgKiBsZW5ndGgpO1xuICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG59O1xuXG4vKipcbiAqIGdldExlbmd0aCAtIEdldHMgbGVuZ3RoIG9mIHRoZSBjb29yZGluYXRlcyBmcm9tIGNlbnRlciBwbGFuZS5cbiAqIEByZXR1cm4ge0ludGVnZXJ9IC0gQ29vcmlkaW5hdGVzLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgY29uc3QgeCA9IHRoaXMuZ2V0KFwieFwiKTtcbiAgY29uc3QgeSA9IHRoaXMuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSk7XG59O1xuXG4vKipcbiAqIGdldEFuZ2xlIC0gR2V0IHRoZSBhbmdsZSBvZiBjb29yZGluYXRlcyBmcm9tIGNlbnRlciBwbGFuZS5cbiAqIEByZXR1cm4ge0ludGVnZXJ9IC0gQ29vcmlkaW5hdGVzLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24gZ2V0QW5nbGUoKSB7XG4gIGNvbnN0IHggPSB0aGlzLmdldChcInhcIik7XG4gIGNvbnN0IHkgPSB0aGlzLmdldChcInlcIik7XG4gIHJldHVybiBNYXRoLmF0YW4yKHksIHgpO1xufTtcblxuLyoqXG4gKiBhZGQgLSBTaG91bGQgYWRkIHZlY3RvcnMgdG9nZXRoZXIgZ2l2ZW4gYSB2ZWN0b3JcbiAqIEBuYW1lIGFkZFxuICogQG92ZXJyaWRlIFtcIitcIl1cbiAqIEBwYXJhbSB7VmVjdG9yfSAtIEEgZ2l2ZW4gdmVjdG9yIHRvIGFkZC5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gLSBBIHZlY3RvciB3aXRoIGNvb3JpZG5hdGVzLCBvciBtdWx0aXBsZSB2ZWN0b3JzLlxuICovXG5cblZlY3Rvci5wcm90b3R5cGUuYWRkID0gVmVjdG9yLnByb3RvdHlwZVtcIitcIl0gPSBmdW5jdGlvbiBhZGQodjIpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHYyLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIiAmJiB2Mi5sZW5ndGgpIHtcblx0XHQvLyBSZWZhY3RvciB0byBtYWtlIG1vcmUgZWZmZWNpZW50IC8vXG4gICAgY29uc3QgdmVjcyA9IHYyLm1hcCgodikgPT4gKHt4OiB2LmdldChcInhcIiksIHk6IHYuZ2V0KFwieVwiKX0pKVxuXHRcdC5yZWR1Y2UoKHYwLCB2bikgPT5cblx0XHRcdCh7eDogdjAueCArIHZuLngsIHk6IHYwLnkgKyB2bi55fSksXG5cdFx0c2VsZi5zdGF0ZSk7XG5cbiAgICByZXR1cm4gc2VsZi5jcmVhdGUodmVjcy54LCB2ZWNzLnkpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuXHRcdHNlbGYuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIiksXG5cdFx0c2VsZi5nZXQoXCJ5XCIpICsgdjIuZ2V0KFwieVwiKVxuXHQpO1xufTtcblxuLyoqXG4gKiBzdWJ0cmFjdCAtIHNob3VsZCBzdWJ0cmFjdCB0aGUgZ2l2ZW4gdmVjdG9yIHdpdGggaXRzIG93biB2ZWN0b3IuXG4gKiBpZToge3g6IDIsIHk6IDJ9IC0ge3g6IDIsIHk6IDJ9ID0ge3g6IDAsIHk6IDB9XG4gKiBAbmFtZSBzdWJ0cmFjdFxuICogQG92ZXJyaWRlIFtcIi1cIl1cbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3QgPSBWZWN0b3IucHJvdG90eXBlW1wiLVwiXSA9IGZ1bmN0aW9uKHYyKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIGlmICh2Mi5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5XCIgJiYgdjIubGVuZ3RoKSB7XG5cdFx0Ly8gUmVmYWN0b3IgdG8gbWFrZSBtb3JlIGVmZmVjaWVudCAvL1xuICAgIGNvbnN0IHZlY3MgPSB2Mi5tYXAoKHYpID0+ICh7eDogdi5nZXQoXCJ4XCIpLCB5OiB2LmdldChcInlcIil9KSlcblx0XHQucmVkdWNlKCh2MCwgdm4pID0+XG5cdFx0XHQoe3g6IHYwLnggLSB2bi54LCB5OiB2MC55IC0gdm4ueX0pLFxuXHRcdHNlbGYuc3RhdGUpO1xuXG4gICAgcmV0dXJuIHNlbGYuY3JlYXRlKHZlY3MueCwgdmVjcy55KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZShcblx0XHRzZWxmLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpLFxuXHRcdHNlbGYuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIilcblx0KTtcbn07XG5cbi8qKlxuICogTXVsaXRwbHlpbmcgdmVjdG9ycyB0b2dldGhlclxuICogaWU6IHt4OiAyLCB5OiAyfSAqIHt4OiAyLCB5OiAyfSA9IHt4OiA0LCB5OiA0fVxuICogQG5hbWUgbXVsdGlwbHlcbiAqIEBvdmVycmlkZSBbXCIqXCJdXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICovXG5WZWN0b3IucHJvdG90eXBlLm11bHRpcGx5ID0gVmVjdG9yLnByb3RvdHlwZVtcIipcIl0gPSBmdW5jdGlvbih2Mikge1xuICByZXR1cm4gdGhpcy5jcmVhdGUoXG5cdFx0dGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKSxcblx0XHR0aGlzLmdldChcInlcIikgKiB2Mi5nZXQoXCJ5XCIpXG5cdCk7XG59O1xuXG4vKipcbiAqIERpdmlkZSB2ZWN0b3JzIHRvZ2V0aGVyLlxuICogQG5hbWUgRGl2aWRlXG4gKiBAb3ZlcnJpZGUgW1wiL1wiXVxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSAgICBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5kaXZpZGUgPSBWZWN0b3IucHJvdG90eXBlW1wiL1wiXSA9IGZ1bmN0aW9uKHYyKSB7XG4gIHJldHVybiB0aGlzLmNyZWF0ZShcblx0XHR0aGlzLmdldChcInhcIikgLyB2Mi5nZXQoXCJ4XCIpLFxuXHRcdHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIilcblx0KTtcbn07XG5cbi8qKlxuICogQWRkcyB0byBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5hZGRUbyA9IFZlY3Rvci5wcm90b3R5cGVbXCIrPVwiXSA9IGZ1bmN0aW9uKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSArIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgZnJvbSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdEZyb20gPSBWZWN0b3IucHJvdG90eXBlW1wiLT1cIl0gPSBmdW5jdGlvbih2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLSB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogbXVsaXRwbGllcyBieSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5ID0gVmVjdG9yLnByb3RvdHlwZVtcIio9XCJdID0gZnVuY3Rpb24odjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnkgPSBWZWN0b3IucHJvdG90eXBlW1wiLz1cIl0gPSBmdW5jdGlvbih2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLyB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi92ZWN0b3JzLmpzIiwiLyoqXG4gKiBUaGUgcGFydGljbGUgbGliYXJ5IGlzIHVzZWQgZm9yIHBoeXNpY3MgYW5pbWF0aW9ucy5cbiAqIHRoZXkgYXJlIG5vdCBleHRyZW1lbHkgYWNjdXJhdGUgYnV0IHN0aWxsIHJlcHJlc2VudFxuICogYW5kIGZlZWwgbGlrZSBwaHlzaWNhbCBtb3ZtZW50cy5cbiAqL1xuY29uc3QgZXh0ZW5kID0gcmVxdWlyZShcImV4dGVuZFwiKTtcblxuLy8gVGhlIGRlZmF1bHQgc3RhdGUgYSBwYXJ0aWNsZSBzdGFydHMgd2l0aCBJdCBzaG91bGQgbm90IG1vdmUuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBwb3NpdGlvbjogbnVsbCxcbiAgdmVsb2NpdHk6IG51bGwsXG4gIGdyYXZpdHk6IG51bGwsXG4gIHJhZGl1czogMCxcbiAgbWFzczogMSxcbn07XG5cbi8qKlxuICogUGFydGljbGUgY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RhdGV9IHN0YXRlIGluaXRpYWwgc3RhdGUgdG8gcGFzcyB0aGUgY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFydGljbGUoc3RhdGU9SU5JVElBTF9TVEFURSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbi8qKlxuICogZ2V0IC0gQSBnZXR0ZXIgZm9yIHRoZSBwYXJ0aWNsZXMgc3RhdGUuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BcbiAqIEByZXR1cm4ge1ZhbHVlfSAgQSB2YWx1ZSBhc3Nvc2lhdGVkIHdpdGggdGhlIHByb3BlcnR5LlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KHByb3ApIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcF07XG59O1xuXG4vKipcbiAqIHNldCAtIEEgc2V0dGVyIGZvciB0aGUgcGFydGljbGVzIHN0YXRlLlxuICogQHBhcmFtIHtbdHlwZV19IHByb3AgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtIHtbdHlwZV19IHZhbCAgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7Qm9vbGVhbn0gXHRcdEEgYm9vbGVhbiB0byB0ZWxsIHdldGhlciB0aGUgcHJvcGVydHlcbiAqICAgICAgICAgICAgICAgICAgICAgIGV4c2lzdCBvbiB0aGUgaW5pdGFsIHN0YXRlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcCwgdmFsKSB7XG4gIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgdGhpcy5zdGF0ZVtwcm9wXSA9IHZhbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gIHtPYmplY3R9IFx0b3B0cyBcdG9wdGlvbmFsIHN0YXRlIHZhbHVlcyB0byBwYXNzIHRvIGNyZWF0ZS5cbiAqIEByZXR1cm4ge1BhcnRpY2xlfSAgICAgXHRcdHJldHVybnMgYSBwYXJ0aWNsZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz1JTklUSUFMX1NUQVRFKSB7XG5cdC8vIEEgcmVhbGx5IGJhc2ljIGZsYXQgbGV2ZWwgZXh0ZW5kLlxuICBvcHRzID0gZXh0ZW5kKHRydWUsIHt9LCBJTklUSUFMX1NUQVRFLCBvcHRzKTtcbiAgY29uc3QgcGFydGljbGUgPSBuZXcgUGFydGljbGUob3B0cyk7XG4gIHJldHVybiBwYXJ0aWNsZTtcbn07XG5cbi8qKlxuICogQWNjZWxlcmF0ZSAtIEEgY2hhbmdlIGluIHZlbG9jaXR5LlxuICogQHBhcmFtICB7VmVjdG9yfSBhY2NlbCBUaGUgY2hhbmdlIGluIGRpc3RhbmNlIC8gdGltZVxuICogQHJldHVybiB7VmFsdWV9IFx0c3RhdGUgb2YgdGhlIHBhcnRpY2xlIGFmdGVyIGFjY2VsZXJhdGluZy5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFjY2VsZXJhdGUgPSBmdW5jdGlvbiBhY2NlbGVyYXRlKGFjY2VsKSB7XG4gIHRoaXMuZ2V0KFwidmVsb2NpdHlcIikuYWRkVG8oYWNjZWwpO1xuICByZXR1cm4gdGhpcy5nZXQoXCJ2ZWxvY2l0eVwiKTtcbn07XG5cbi8qKlxuICogVXBkYXRlIC0gQSB1cGRhdGUgYSBwb3NpdGlvbiBvZiBhIHBhcnRpY2xlXG4gKiBiYXNlZCBvbiBpdHMgZ3Jhdml0eS4gR3Jhdml0eSBpcyB1c3VhbGx5IGEgYWNjZWxlcmF0aW9uXG4gKiB2ZWN0b3IuXG4gKlxuICogQHBhcmFtICB7VmVjdG9yfSBncmF2IGdyYXZpdHkgZ2l2ZW4uXG4gKiBAcmV0dXJuIHtTdGF0ZX0gICAgICAgc3RhdGUgb2YgcG9zaXRpb25cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShncmF2PXRoaXMuZ2V0KFwiZ3Jhdml0eVwiKSkge1xuICBjb25zdCB2ZWxvY2l0eSA9IHRoaXMuYWNjZWxlcmF0ZShncmF2KTtcbiAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldChcInBvc2l0aW9uXCIpLmFkZFRvKHZlbG9jaXR5KTtcbiAgcmV0dXJuIHBvc2l0aW9uO1xufTtcblxuLyoqXG4gKiBhbmdsZVRvIC0gQXN1bW1pbmcgd2Uga25vdyB3aGVyZVxuICogdGhlIG90aGVyIHBhcnRpY2xlIGlzIG9uIHRoZSBjYW52YXMuIGNhbiB1c2VcbiAqIHRoZSBhbmdsZSBmb3JtdWxhZSB0byBmaWd1cmUgb3V0IHRoZSBhbmdsZVxuICogYmV0d2VlbiB0d28gcGFydGljbGUuIFVzaW5nIGFyY3RhbmdlbnQgaXMgZmluZS5cbiAqIGJ1dCBiZWNhdXNlIHRoZSBjb3JyZGluYXRlIHBsYW5lIGlzIGZpbHBlZCBvbiB0aGVcbiAqIFkgYXhpcyB3ZSB1c2UgYXRhbjIgdG8gZ2V0IHRoZSByaWdodCB2YWx1ZXMuIEV4cGxhaW5lZFxuICogaW4gQVBJIERvY3MuXG4gKlxuICogQHBhcmFtICB7UGFydGljbGV9IHAyIFx0XHRcdEEgcGFydGljbGUgaW5zdGFuY2UuXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSAgQW5nbGUgIFx0QSBhbmdsZS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFuZ2xlVG8gPSBmdW5jdGlvbiBhbmdlbFRvKHAyKSB7XG4gIGNvbnN0IGR4ID0gcDIuZ2V0KFwicG9zaXRpb25cIikuZ2V0KFwieFwiKSAtIHRoaXMuZ2V0KFwicG9zaXRpb25cIikuZ2V0KFwieFwiKTtcbiAgY29uc3QgZHkgPSBwMi5nZXQoXCJwb3NpdGlvblwiKS5nZXQoXCJ5XCIpIC0gdGhpcy5nZXQoXCJwb3NpdGlvblwiKS5nZXQoXCJ5XCIpO1xuICByZXR1cm4gTWF0aC5hdGFuMihkeSwgZHgpO1xufTtcblxuLyoqXG4gKiBkaXN0YW5jZVRvIC0gcGFydGljbGUuXG4gKiBBc3N1bWluZyB3ZSBrbm93IHdoZXJlIGJvdGggcGFydGljbGUgYXJlIG9uIHRoZSBjYW52YXMuXG4gKiB3ZSBjYW4gdXNlIHRoZSBkaXN0YW5jZSBmb3JtdWFsZSB0byBmaWd1cmUgb3V0IHRoZSBkaXN0YW5jZVxuICogYmV0d2VlbiB0aGUgdHdvIHBhcnRpY2xlcy5cbiAqXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDIgXHRcdFx0QSBwYXJ0aWNsZSBpbnN0YW5jZVxuICogQHJldHVybiB7SW50ZWdlcn0gIEFuZ2xlICBcdEEgRGlzdGFuY2VcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmRpc3RhbmNlVG8gPSBmdW5jdGlvbiBkaXN0YW5jZVRvKHAyKSB7XG4gIGNvbnN0IGRlbHRhWCA9IHAyLmdldChcInBvc2l0aW9uXCIpLmdldChcInhcIikgLSB0aGlzLmdldChcInBvc2l0aW9uXCIpLmdldChcInhcIik7XG4gIGNvbnN0IGRlbHRhWSA9IHAyLmdldChcInBvc2l0aW9uXCIpLmdldChcInlcIikgLSB0aGlzLmdldChcInBvc2l0aW9uXCIpLmdldChcInlcIik7XG4gIHJldHVybiBNYXRoLmh5cG90KGRlbHRhWCwgZGVsdGFZKTtcbn07XG5cbi8qKlxuICogZ3Jhdml0YXRlVG8gLSBDcmVhdGVzIGEgZ3Jhdml0eSB2ZWN0b3IgaWYgaGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiAgICAgXHRcdFx0QSBwYXJ0aWNsZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSAge1ZlY3Rvcn0gXHR2ZWN0b3IgXHRcdFx0QSB2ZWN0b3IgaW5zdGFuY2UuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgdmVjbG9jaXR5IFx0VGhlIHZlbG9jaXR5IG9mIHRoZSBjdXJyZW50IHN0YXRlLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ3Jhdml0YXRlVG8gPSBmdW5jdGlvbihwMiwgdmVjdG9yKSB7XG4gIGNvbnN0IGdyYXYgPSB0aGlzLmdldChcImdyYXZpdHlcIikgPT09IG51bGwgP1xuXHRcdCh2ZWN0b3IuY3JlYXRlKDAsIDApKSA6XG5cdFx0XHQodGhpcy5nZXQoXCJncmF2aXR5XCIpKTtcblxuICBjb25zdCBkaXN0ID0gdGhpcy5kaXN0YW5jZVRvKHAyKTtcbiAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLmdldChcInZlbG9jaXR5XCIpO1xuXG4gIGdyYXYuc2V0TGVuZ3RoKHAyLm1hc3MgLyAoZGlzdCAqIGRpc3QpKTtcbiAgZ3Jhdi5zZXRBbmdsZSh0aGlzLmFuZ2xlVG8ocDIpKTtcblxuICB2ZWxvY2l0eVtcIis9XCJdKGdyYXYpO1xuICByZXR1cm4gdmVsb2NpdHk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpY2xlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9wYXJ0aWNsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsvKiovfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH0gZWxzZSBpZiAoKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpIHx8IHRhcmdldCA9PSBudWxsKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtb2R1bGUgaXMgY29tcG9zZWQgb2Ygc21hbGwgZnVuY3Rpb24gdGhhdFxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBuZWVkZWQuIE1vc3QgZnVuY3Rpb25zIGFyZSBwdXJlXG4gKiBhbmQgb25seSByZXR1cm4gdmFsdWVzLiBGb3IgbW9yZSBpbmZvIHJlYWQgdGhlIGRvY3MuXG4gKi9cblxuLyoqXG4gKiBVdGlscyBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7U2VsZn0gaXQgc2VsZlxuICovXG5mdW5jdGlvbiBVdGlscygpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG5vcm1hbGl6ZSAtIFRha2VzIGEgbWF4IGFuZCBtaW4gdmFsdWUgYW5kIHJldHVybnNcbiAqIHRoZSBhIGZsb2F0aW5nIHBvaW50IG51bWJlciB0aGF0IHdoZW4gbXVsdGlwbGllZFxuICogYnkgb25lIGh1bmRyZWQgcmVwcmVzZW50cyBhIHByZWNlbnRhZ2Ugb2YgdGhlIHJhbmdlXG4gKiBiZXR3ZWVuIG1heCBhbmQgbWluLlxuICpcbiAqIEBwYXJhbSAge0ludH0gdmFsIC0gVGhlIHZhbHVlIHRoYXQgbGllcyBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1heCAtIFRoZSBtYXhpdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7SW50fSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcmV0dXJuIHtJbnR9IEludCAtIFRoZSB2YWx1ZSByZXByZXNlbnRlZCBpbiB0aGF0IHJhbmdlLlxuICovXG5VdGlscy5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKHZhbCwgbWF4LCBtaW4pIHtcbiAgcmV0dXJuICh2YWwgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59O1xuXG5VdGlscy5wcm90b3R5cGUubGVycCA9IGZ1bmN0aW9uIGxlcnAodmFsLCBtaW4sIG1heCkge1xuXG59O1xuXG4vKipcbiAqIHByZWNlbnQgLSBUYWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgcHJlY2VudGFnZS5cbiAqIHlvdSBjYW4gcGFzcyBhcmJpdHJhcnkgbGFyZ2UgbnVtYmVycyBpbiBidXQgdGhhdHMgbm90XG4gKiB0aGUgaW50ZW5kZWQgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAge0Zsb2F0fSB2YWwgXHRBIHZhbHVlLlxuICogQHJldHVybiB7UGVyY2VudH0gICAgQSB2YWx1ZS5cbiAqL1xuVXRpbHMucHJvdG90eXBlLnByZWNlbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHZhbCAqIDEwMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3V0aWxzLmpzIiwiLyoqXG4gKiBTaGFwZXMgY29uc3R1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IGN0eCAgICAgIENhbnZhcyBjb250ZXh0LlxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFNoYXBlcyhjdHgsIGRvY3VtZW50KSB7XG4gIGlmICghY3R4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2hhcGVzOiBQbGVhc2UgcHJvdmlkZSBhIGNvbnRleHQgYXJndW1lbnQgW2FyZzo6MV1cIik7XG4gIH1cbiAgdGhpcy5jdHggPSBjdHg7XG4gIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG59O1xuXG4vKipcbiAqIGNpcmNsZSAtIERyYXdzIGEgc2ltcGxlcyBjaXJjbGVcbiAqIEBwYXJhbSAge051bWJlcn0geCAgICAgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHIgICAgIFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgVGhlIGNvbG9yIG9mIHRoZSBjaXJjbGUuXG4gKi9cblNoYXBlcy5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gZHJhd0NpcmNsZSh4PTQsIHk9NCwgcj0yLCBjb2xvcj1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICB0aGlzLmN0eC5maWxsKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvc2hhcGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
