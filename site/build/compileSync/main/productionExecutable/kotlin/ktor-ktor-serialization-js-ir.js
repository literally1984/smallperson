(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    root['ktor-ktor-serialization-js-ir'] = factory(typeof this['ktor-ktor-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var captureStack = kotlin_kotlin.$_$.z8;
  var Exception = kotlin_kotlin.$_$.lc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.t1;
  var classMeta = kotlin_kotlin.$_$.f9;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var interfaceMeta = kotlin_kotlin.$_$.o9;
  var ensureNotNull = kotlin_kotlin.$_$.kd;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.g1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.n;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var isInterface = kotlin_kotlin.$_$.x9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var isObject = kotlin_kotlin.$_$.z9;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var SuspendFunction1 = kotlin_kotlin.$_$.s8;
  //endregion
  //region block: pre-declaration
  ContentConvertException.prototype = Object.create(Exception.prototype);
  ContentConvertException.prototype.constructor = ContentConvertException;
  JsonConvertException.prototype = Object.create(ContentConvertException.prototype);
  JsonConvertException.prototype.constructor = JsonConvertException;
  function register$default(contentType, converter, configuration, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      configuration = Configuration$register$lambda;
    }
    var tmp;
    if ($handler == null) {
      this.i2v(contentType, converter, configuration);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(contentType, converter, configuration);
    }
    return tmp;
  }
  function serialize(contentType, charset, typeInfo, value, $cont) {
    return this.l2v(contentType, charset, typeInfo, value, $cont);
  }
  function serializeNullable(contentType, charset, typeInfo, value, $cont) {
    return this.k2v(contentType, charset, typeInfo, ensureNotNull(value), $cont);
  }
  deserialize$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  deserialize$o$collect$slambda.prototype.constructor = deserialize$o$collect$slambda;
  $collectCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$1.prototype.constructor = $collectCOROUTINE$1;
  deserialize$slambda.prototype = Object.create(CoroutineImpl.prototype);
  deserialize$slambda.prototype.constructor = deserialize$slambda;
  $deserializeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $deserializeCOROUTINE$0.prototype.constructor = $deserializeCOROUTINE$0;
  //endregion
  function ContentConvertException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    ContentConvertException.call($this, message, cause);
    return $this;
  }
  function ContentConvertException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = ContentConvertException_init_$Init$(message, cause, $mask0, $marker, Object.create(ContentConvertException.prototype));
    captureStack(tmp, ContentConvertException_init_$Create$);
    return tmp;
  }
  function ContentConvertException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  ContentConvertException.$metadata$ = classMeta('ContentConvertException', undefined, undefined, undefined, undefined, Exception.prototype);
  function JsonConvertException(message, cause) {
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  JsonConvertException.$metadata$ = classMeta('JsonConvertException', undefined, undefined, undefined, undefined, ContentConvertException.prototype);
  function Configuration$register$lambda($this$null) {
    return Unit_getInstance();
  }
  function Configuration() {
  }
  Configuration.$metadata$ = interfaceMeta('Configuration');
  function ContentConverter() {
  }
  ContentConverter.$metadata$ = interfaceMeta('ContentConverter');
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $cont) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharset$default(_this__u8e3s4, defaultCharset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      defaultCharset = Charsets_getInstance().r28_1;
    return suitableCharset(_this__u8e3s4, defaultCharset);
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.p14(HttpHeaders_getInstance().l2k_1)).d();
    while (tmp0_iterator.e()) {
      var tmp1_loop_parameter = tmp0_iterator.f();
      var charset = tmp1_loop_parameter.h3();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().z2b(charset))
        return Companion_getInstance().y2b(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.a2w_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.w1s = function (value, $cont) {
    return this.a2w_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation) {
    this.j2w_1 = $collector;
    this.k2w_1 = $charset;
    this.l2w_1 = $typeInfo;
    this.m2w_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$o$collect$slambda.prototype.p2w = function (value, $cont) {
    var tmp = this.q2w(value, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  deserialize$o$collect$slambda.prototype.ri = function (p1, $cont) {
    return this.p2w((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$o$collect$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.hi_1 = 1;
            suspendResult = this.n2w_1.m2v(this.k2w_1, this.l2w_1, this.m2w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o2w_1 = suspendResult;
            this.hi_1 = 2;
            suspendResult = this.j2w_1.w1s(this.o2w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 3) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  deserialize$o$collect$slambda.prototype.q2w = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.j2w_1, this.k2w_1, this.l2w_1, this.m2w_1, completion);
    i.n2w_1 = value;
    return i;
  };
  deserialize$o$collect$slambda.$metadata$ = classMeta('deserialize$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$o$collect$slambda_0($collector, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $cont) {
      return i.p2w(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z2w_1 = _this__u8e3s4;
    this.a2x_1 = collector;
  }
  $collectCOROUTINE$1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_0(this.a2x_1, this.z2w_1.c2x_1, this.z2w_1.d2x_1, this.z2w_1.e2x_1, null);
            suspendResult = this.z2w_1.b2x_1.x1s(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 2) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$1.$metadata$ = classMeta('$collectCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv($tmp0_map, $charset, $typeInfo, $body) {
    this.b2x_1 = $tmp0_map;
    this.c2x_1 = $charset;
    this.d2x_1 = $typeInfo;
    this.e2x_1 = $body;
  }
  _no_name_provided__qut3iv.prototype.f2x = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$1(this, collector, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  _no_name_provided__qut3iv.prototype.x1s = function (collector, $cont) {
    return this.f2x(collector, $cont);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Flow]);
  function deserialize$slambda($body, resultContinuation) {
    this.o2x_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$slambda.prototype.q2x = function (it, $cont) {
    var tmp = this.r2x(it, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  deserialize$slambda.prototype.ri = function (p1, $cont) {
    return this.q2x((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        if (tmp === 0) {
          this.ii_1 = 1;
          return !(this.p2x_1 == null) ? true : this.o2x_1.h1y();
        } else if (tmp === 1) {
          throw this.ki_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  deserialize$slambda.prototype.r2x = function (it, completion) {
    var i = new deserialize$slambda(this.o2x_1, completion);
    i.p2x_1 = it;
    return i;
  };
  deserialize$slambda.$metadata$ = classMeta('deserialize$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $cont) {
      return i.q2x(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2v_1 = _this__u8e3s4;
    this.w2v_1 = body;
    this.x2v_1 = typeInfo;
    this.y2v_1 = charset;
  }
  $deserializeCOROUTINE$0.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            var tmp_0 = this;
            tmp_0.z2v_1 = asFlow(this.v2v_1);
            var tmp_1 = new _no_name_provided__qut3iv(this.z2v_1, this.y2v_1, this.x2v_1, this.w2v_1);
            suspendResult = firstOrNull(tmp_1, deserialize$slambda_0(this.w2v_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_2;
            if (!(result == null)) {
              tmp_2 = result;
            } else {
              if (!this.w2v_1.h1y()) {
                tmp_2 = this.w2v_1;
              } else {
                var tmp0_safe_receiver = this.x2v_1.x2h_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.te()) === true) {
                  tmp_2 = NullBody_getInstance();
                } else {
                  var tmp_3 = 'No suitable converter found for ' + this.x2v_1;
                  throw ContentConvertException_init_$Create$(tmp_3, null, 2, null);
                }
              }
            }

            return tmp_2;
          case 2:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 2) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  $deserializeCOROUTINE$0.$metadata$ = classMeta('$deserializeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = suitableCharset$default;
  _.$_$.d = Configuration;
  _.$_$.e = ContentConverter;
  _.$_$.f = JsonConvertException;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-js-ir.js.map
