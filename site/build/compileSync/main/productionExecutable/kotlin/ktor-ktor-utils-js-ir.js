(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    root['ktor-ktor-utils-js-ir'] = factory(typeof this['ktor-ktor-utils-js-ir'] === 'undefined' ? {} : this['ktor-ktor-utils-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.d9;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var getStringHashCode = kotlin_kotlin.$_$.m9;
  var classMeta = kotlin_kotlin.$_$.f9;
  var interfaceMeta = kotlin_kotlin.$_$.o9;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var Long = kotlin_kotlin.$_$.oc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var isObject = kotlin_kotlin.$_$.z9;
  var equals = kotlin_kotlin.$_$.h9;
  var hashCode = kotlin_kotlin.$_$.n9;
  var MutableMap = kotlin_kotlin.$_$.p5;
  var ensureNotNull = kotlin_kotlin.$_$.kd;
  var Entry = kotlin_kotlin.$_$.k5;
  var isInterface = kotlin_kotlin.$_$.x9;
  var MutableEntry = kotlin_kotlin.$_$.o5;
  var charArray = kotlin_kotlin.$_$.b9;
  var charSequenceGet = kotlin_kotlin.$_$.c9;
  var toString = kotlin_kotlin.$_$.t2;
  var Char = kotlin_kotlin.$_$.ec;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.f8;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var get = kotlin_kotlin.$_$.m8;
  var fold = kotlin_kotlin.$_$.l8;
  var minusKey = kotlin_kotlin.$_$.n8;
  var plus = kotlin_kotlin.$_$.q8;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var MutableIterator = kotlin_kotlin.$_$.m5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var Set = kotlin_kotlin.$_$.r5;
  var toString_0 = kotlin_kotlin.$_$.ka;
  var MutableSet = kotlin_kotlin.$_$.q5;
  var firstOrNull = kotlin_kotlin.$_$.o6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var to = kotlin_kotlin.$_$.vd;
  var addAll = kotlin_kotlin.$_$.s5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var get_lastIndex = kotlin_kotlin.$_$.kb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.q2;
  var equals_0 = kotlin_kotlin.$_$.cb;
  var emptyMap = kotlin_kotlin.$_$.k6;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var Comparable = kotlin_kotlin.$_$.fc;
  var Enum = kotlin_kotlin.$_$.jc;
  var isSuspendFunction = kotlin_kotlin.$_$.ba;
  var MutableList = kotlin_kotlin.$_$.n5;
  var ArrayList = kotlin_kotlin.$_$.b5;
  var emptyList = kotlin_kotlin.$_$.j6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.v6;
  var last = kotlin_kotlin.$_$.y6;
  var mutableListOf = kotlin_kotlin.$_$.d7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var extendThrowable = kotlin_kotlin.$_$.i9;
  var captureStack = kotlin_kotlin.$_$.z8;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Companion_getInstance = kotlin_kotlin.$_$.v4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.jd;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.v2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.w2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var Continuation = kotlin_kotlin.$_$.k8;
  var fillArrayVal = kotlin_kotlin.$_$.j9;
  var intercepted = kotlin_kotlin.$_$.e8;
  var toList = kotlin_kotlin.$_$.s7;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var numberToLong = kotlin_kotlin.$_$.fa;
  var IllegalStateException = kotlin_kotlin.$_$.nc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.z1;
  //endregion
  //region block: pre-declaration
  function get_0(key) {
    var tmp0_elvis_lhs = this.v2c(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  $toByteArrayCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $toByteArrayCOROUTINE$0.prototype.constructor = $toByteArrayCOROUTINE$0;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  function get_1(name) {
    var tmp0_safe_receiver = this.h2e(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_forEach = this.j2e();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.s();
      var k = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.t();
      var v = tmp$ret$1;
      body(k, v);
    }
    return Unit_getInstance();
  }
  WeekDay.prototype = Object.create(Enum.prototype);
  WeekDay.prototype.constructor = WeekDay;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  $proceedLoopCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $proceedLoopCOROUTINE$1.prototype.constructor = $proceedLoopCOROUTINE$1;
  DebugPipelineContext.prototype = Object.create(PipelineContext.prototype);
  DebugPipelineContext.prototype.constructor = DebugPipelineContext;
  InvalidPhaseException.prototype = Object.create(Error.prototype);
  InvalidPhaseException.prototype.constructor = InvalidPhaseException;
  After.prototype = Object.create(PipelinePhaseRelation.prototype);
  After.prototype.constructor = After;
  Before.prototype = Object.create(PipelinePhaseRelation.prototype);
  Before.prototype.constructor = Before;
  Last.prototype = Object.create(PipelinePhaseRelation.prototype);
  Last.prototype.constructor = Last;
  SuspendFunctionGun.prototype = Object.create(PipelineContext.prototype);
  SuspendFunctionGun.prototype.constructor = SuspendFunctionGun;
  InvalidTimestampException.prototype = Object.create(IllegalStateException.prototype);
  InvalidTimestampException.prototype.constructor = InvalidTimestampException;
  //endregion
  function AttributeKey(name) {
    this.t2c_1 = name;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.t2c_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  AttributeKey.prototype.toString = function () {
    return 'AttributeKey: ' + this.t2c_1;
  };
  AttributeKey.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof AttributeKey)
      other;
    else
      THROW_CCE();
    if (!(this.t2c_1 === other.t2c_1))
      return false;
    return true;
  };
  AttributeKey.prototype.hashCode = function () {
    return getStringHashCode(this.t2c_1);
  };
  AttributeKey.$metadata$ = classMeta('AttributeKey');
  function Attributes() {
  }
  Attributes.$metadata$ = interfaceMeta('Attributes');
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = other.a2d();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.x2c(element instanceof AttributeKey ? element : THROW_CCE(), other.u2c(element));
    }
  }
  function toByteArray(_this__u8e3s4, $cont) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j2d_1 = _this__u8e3s4;
  }
  $toByteArrayCOROUTINE$0.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.j2d_1.m23(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes$default(ARGUMENT, 0, 1, null);
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
  $toByteArrayCOROUTINE$0.$metadata$ = classMeta('$toByteArrayCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.k2d_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.s().k2d_1, $this$$receiver.t());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.s()), $this$$receiver.t());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.m2d_1 = tmp$ret$0;
  }
  CaseInsensitiveMap.prototype.g = function () {
    return this.m2d_1.g();
  };
  CaseInsensitiveMap.prototype.o14 = function (key) {
    return this.m2d_1.c2(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.o14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.p14 = function (key) {
    return this.m2d_1.i2(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.p14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.m = function () {
    return this.m2d_1.m();
  };
  CaseInsensitiveMap.prototype.bb = function () {
    this.m2d_1.bb();
  };
  CaseInsensitiveMap.prototype.n2d = function (key, value) {
    return this.m2d_1.b(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.b = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.n2d(tmp, isObject(value) ? value : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.o2d = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = from.r().d();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.s();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.t();
      var value = tmp$ret$2;
      this.n2d(key, value);
    }
  };
  CaseInsensitiveMap.prototype.b3 = function (from) {
    return this.o2d(from);
  };
  CaseInsensitiveMap.prototype.p2d = function (key) {
    return this.m2d_1.cc(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.cc = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.p2d((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.j2 = function () {
    var tmp = this.m2d_1.j2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  CaseInsensitiveMap.prototype.r = function () {
    var tmp = this.m2d_1.r();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  CaseInsensitiveMap.prototype.k2 = function () {
    return this.m2d_1.k2();
  };
  CaseInsensitiveMap.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.m2d_1, this.m2d_1);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.m2d_1);
  };
  CaseInsensitiveMap.$metadata$ = classMeta('CaseInsensitiveMap', [MutableMap]);
  function Entry_0(key, value) {
    this.q2d_1 = key;
    this.r2d_1 = value;
  }
  Entry_0.prototype.s = function () {
    return this.q2d_1;
  };
  Entry_0.prototype.t = function () {
    return this.r2d_1;
  };
  Entry_0.prototype.s2d = function (newValue) {
    this.r2d_1 = newValue;
    return this.r2d_1;
  };
  Entry_0.prototype.sb = function (newValue) {
    return this.s2d((newValue == null ? true : isObject(newValue)) ? newValue : THROW_CCE());
  };
  Entry_0.prototype.hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.q2d_1)) | 0) + hashCode(ensureNotNull(this.r2d_1)) | 0;
  };
  Entry_0.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.s(), this.q2d_1) ? equals(other.t(), this.r2d_1) : false;
  };
  Entry_0.prototype.toString = function () {
    return '' + this.q2d_1 + '=' + this.r2d_1;
  };
  Entry_0.$metadata$ = classMeta('Entry', [MutableEntry]);
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'io.ktor.util.toCharArray.<anonymous>' call
      tmp$ret$0 = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercaseChar' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
    return equals(new Char(tmp$ret$3), new Char(_this__u8e3s4));
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    var tmp = SupervisorJob(parent);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.f4(tmp$ret$0);
  }
  function SilentSupervisor$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SilentSupervisor(parent);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__qut3iv.prototype.e1j = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function DelegatingMutableSet$iterator$1(this$0) {
    this.v2d_1 = this$0;
    this.u2d_1 = this$0.w2d_1.d();
  }
  DelegatingMutableSet$iterator$1.prototype.e = function () {
    return this.u2d_1.e();
  };
  DelegatingMutableSet$iterator$1.prototype.f = function () {
    return this.v2d_1.x2d_1(this.u2d_1.f());
  };
  DelegatingMutableSet$iterator$1.prototype.v9 = function () {
    return this.u2d_1.v9();
  };
  DelegatingMutableSet$iterator$1.$metadata$ = classMeta(undefined, [MutableIterator]);
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.w2d_1 = delegate;
    this.x2d_1 = convertTo;
    this.y2d_1 = convert;
    this.z2d_1 = this.w2d_1.g();
  }
  DelegatingMutableSet.prototype.a2e = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      tmp$ret$0 = this.y2d_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.b2e = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      tmp$ret$0 = this.x2d_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.g = function () {
    return this.z2d_1;
  };
  DelegatingMutableSet.prototype.c2e = function (element) {
    return this.w2d_1.a(this.y2d_1(element));
  };
  DelegatingMutableSet.prototype.a = function (element) {
    return this.c2e((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.d2e = function (elements) {
    return this.w2d_1.l(this.a2e(elements));
  };
  DelegatingMutableSet.prototype.l = function (elements) {
    return this.d2e(elements);
  };
  DelegatingMutableSet.prototype.bb = function () {
    this.w2d_1.bb();
  };
  DelegatingMutableSet.prototype.e2e = function (element) {
    return this.w2d_1.l1(this.y2d_1(element));
  };
  DelegatingMutableSet.prototype.l1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e2e((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.f2e = function (elements) {
    return this.w2d_1.m1(this.a2e(elements));
  };
  DelegatingMutableSet.prototype.m1 = function (elements) {
    return this.f2e(elements);
  };
  DelegatingMutableSet.prototype.m = function () {
    return this.w2d_1.m();
  };
  DelegatingMutableSet.prototype.d = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.w2d_1);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.b2e(this.w2d_1);
    var tmp_0;
    if (other.m1(elements)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsAll' call
      var tmp0_containsAll = other;
      tmp$ret$0 = elements.m1(tmp0_containsAll);
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return toString_0(this.b2e(this.w2d_1));
  };
  DelegatingMutableSet.$metadata$ = classMeta('DelegatingMutableSet', [MutableSet]);
  function StringValues() {
  }
  StringValues.$metadata$ = interfaceMeta('StringValues');
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.m2e_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.n2e(name);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.m2e_1;
      tmp0_set.b(name, tmp0_also);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.o2e(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    this.l2e_1 = caseInsensitiveName;
    this.m2e_1 = this.l2e_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  StringValuesBuilderImpl.prototype.g2e = function () {
    return this.l2e_1;
  };
  StringValuesBuilderImpl.prototype.k2 = function () {
    return this.m2e_1;
  };
  StringValuesBuilderImpl.prototype.h2e = function (name) {
    return this.m2e_1.i2(name);
  };
  StringValuesBuilderImpl.prototype.i2e = function () {
    return this.m2e_1.j2();
  };
  StringValuesBuilderImpl.prototype.m = function () {
    return this.m2e_1.m();
  };
  StringValuesBuilderImpl.prototype.j2e = function () {
    return unmodifiable(this.m2e_1.r());
  };
  StringValuesBuilderImpl.prototype.p2e = function (name, value) {
    this.q2e(value);
    var list = ensureListForKey(this, name);
    list.bb();
    list.a(value);
  };
  StringValuesBuilderImpl.prototype.p14 = function (name) {
    var tmp0_safe_receiver = this.h2e(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesBuilderImpl.prototype.r2e = function (name, value) {
    this.q2e(value);
    ensureListForKey(this, name).a(value);
  };
  StringValuesBuilderImpl.prototype.s2e = function (stringValues) {
    stringValues.k2e(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  StringValuesBuilderImpl.prototype.o2e = function (name, values) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureListForKey(this, name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_iterator = values.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.q2e(element);
      tmp0_let.a(element);
    }
    tmp$ret$0 = Unit_getInstance();
  };
  StringValuesBuilderImpl.prototype.t2e = function (name) {
    this.m2e_1.cc(name);
  };
  StringValuesBuilderImpl.prototype.bb = function () {
    this.m2e_1.bb();
  };
  StringValuesBuilderImpl.prototype.n2e = function (name) {
  };
  StringValuesBuilderImpl.prototype.q2e = function (value) {
  };
  StringValuesBuilderImpl.$metadata$ = classMeta('StringValuesBuilderImpl', [StringValuesBuilder]);
  function listForKey($this, name) {
    return $this.v2e_1.i2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    this.u2e_1 = caseInsensitiveName;
    var tmp;
    if (this.u2e_1) {
      tmp = caseInsensitiveMap();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp = tmp$ret$0;
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$1 = values.r().d();
    var tmp0_iterator = tmp$ret$1;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$2 = element.s();
      var key = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$3 = element.t();
      var value = tmp$ret$3;
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = value.g();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_List)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$4;
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          tmp$ret$4 = value.h(index);
          list.a(tmp$ret$4);
        }
         while (inductionVariable < tmp0_List);
      tmp$ret$5 = list;
      tmp$ret$6 = tmp$ret$5;
      var tmp1_set = tmp$ret$6;
      newMap.b(key, tmp1_set);
    }
    this.v2e_1 = newMap;
  }
  StringValuesImpl.prototype.g2e = function () {
    return this.u2e_1;
  };
  StringValuesImpl.prototype.p14 = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesImpl.prototype.h2e = function (name) {
    return listForKey(this, name);
  };
  StringValuesImpl.prototype.i2e = function () {
    return unmodifiable(this.v2e_1.j2());
  };
  StringValuesImpl.prototype.m = function () {
    return this.v2e_1.m();
  };
  StringValuesImpl.prototype.j2e = function () {
    return unmodifiable(this.v2e_1.r());
  };
  StringValuesImpl.prototype.k2e = function (body) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.v2e_1;
    tmp$ret$0 = tmp0_iterator.r().d();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.e()) {
      var tmp1_loop_parameter = tmp0_iterator_0.f();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.s();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.t();
      var value = tmp$ret$2;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.u2e_1 + ') ' + this.j2e();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.u2e_1 === other.g2e()))
      return false;
    return entriesEquals(this.j2e(), other.j2e());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.j2e(), imul(31, this.u2e_1 | 0));
  };
  StringValuesImpl.$metadata$ = classMeta('StringValuesImpl', [StringValues]);
  function StringValuesBuilder() {
  }
  StringValuesBuilder.$metadata$ = interfaceMeta('StringValuesBuilder');
  function appendAll(_this__u8e3s4, builder) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = builder.j2e();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.s();
      var name = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.t();
      var values = tmp$ret$1;
      _this__u8e3s4.o2e(name, values);
    }
    tmp$ret$2 = _this__u8e3s4;
    return tmp$ret$2;
  }
  function flattenEntries(_this__u8e3s4) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = _this__u8e3s4.j2e();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$3;
      // Inline function 'io.ktor.util.flattenEntries.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = element.t();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator_0 = tmp0_map.d();
      while (tmp0_iterator_0.e()) {
        var item = tmp0_iterator_0.f();
        var tmp$ret$0;
        // Inline function 'io.ktor.util.flattenEntries.<anonymous>.<anonymous>' call
        tmp$ret$0 = to(element.s(), item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var list = tmp$ret$3;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$4 = tmp0_flatMapTo;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, index);
          tmp$ret$0 = !equals(new Char(toLowerCasePreservingASCII(tmp0__anonymous__q1qw7t)), new Char(tmp0__anonymous__q1qw7t));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    var tmp1_buildString = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp1_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    tmp0_apply.lg(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp0_apply.w5(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp0_subject = ch;
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$2;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString(ch);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
      tmp$ret$1 = tmp1_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.k2d_1 = content;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.k2d_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    tmp.l2d_1 = getStringHashCode(tmp$ret$1);
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2d_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.k2d_1, true)) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.l2d_1;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this.k2d_1;
  };
  CaseInsensitiveString.$metadata$ = classMeta('CaseInsensitiveString');
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.w2e_1 = atomic$ref$1(emptyMap());
  }
  CopyOnWriteHashMap.prototype.i2 = function (key) {
    return this.w2e_1.m1c_1.i2(key);
  };
  CopyOnWriteHashMap.$metadata$ = classMeta('CopyOnWriteHashMap');
  function Companion() {
    Companion_instance = this;
    this.x2e_1 = GMTDate_0(new Long(0, 0));
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_0();
    this.y2e_1 = seconds;
    this.z2e_1 = minutes;
    this.a2f_1 = hours;
    this.b2f_1 = dayOfWeek;
    this.c2f_1 = dayOfMonth;
    this.d2f_1 = dayOfYear;
    this.e2f_1 = month;
    this.f2f_1 = year;
    this.g2f_1 = timestamp;
  }
  GMTDate.prototype.h2f = function (other) {
    return this.g2f_1.f1(other.g2f_1);
  };
  GMTDate.prototype.b7 = function (other) {
    return this.h2f(other instanceof GMTDate ? other : THROW_CCE());
  };
  GMTDate.prototype.toString = function () {
    return 'GMTDate(seconds=' + this.y2e_1 + ', minutes=' + this.z2e_1 + ', hours=' + this.a2f_1 + ', dayOfWeek=' + this.b2f_1 + ', dayOfMonth=' + this.c2f_1 + ', dayOfYear=' + this.d2f_1 + ', month=' + this.e2f_1 + ', year=' + this.f2f_1 + ', timestamp=' + toString_0(this.g2f_1) + ')';
  };
  GMTDate.prototype.hashCode = function () {
    var result = this.y2e_1;
    result = imul(result, 31) + this.z2e_1 | 0;
    result = imul(result, 31) + this.a2f_1 | 0;
    result = imul(result, 31) + this.b2f_1.hashCode() | 0;
    result = imul(result, 31) + this.c2f_1 | 0;
    result = imul(result, 31) + this.d2f_1 | 0;
    result = imul(result, 31) + this.e2f_1.hashCode() | 0;
    result = imul(result, 31) + this.f2f_1 | 0;
    result = imul(result, 31) + this.g2f_1.hashCode() | 0;
    return result;
  };
  GMTDate.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.y2e_1 === tmp0_other_with_cast.y2e_1))
      return false;
    if (!(this.z2e_1 === tmp0_other_with_cast.z2e_1))
      return false;
    if (!(this.a2f_1 === tmp0_other_with_cast.a2f_1))
      return false;
    if (!this.b2f_1.equals(tmp0_other_with_cast.b2f_1))
      return false;
    if (!(this.c2f_1 === tmp0_other_with_cast.c2f_1))
      return false;
    if (!(this.d2f_1 === tmp0_other_with_cast.d2f_1))
      return false;
    if (!this.e2f_1.equals(tmp0_other_with_cast.e2f_1))
      return false;
    if (!(this.f2f_1 === tmp0_other_with_cast.f2f_1))
      return false;
    if (!this.g2f_1.equals(tmp0_other_with_cast.g2f_1))
      return false;
    return true;
  };
  GMTDate.$metadata$ = classMeta('GMTDate', [Comparable]);
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.i2f = function (ordinal) {
    return values()[ordinal];
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    WeekDay_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_getInstance();
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    Companion_getInstance_1();
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.l2f_1 = value;
  }
  WeekDay.$metadata$ = classMeta('WeekDay', undefined, undefined, undefined, undefined, Enum.prototype);
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.i2f = function (ordinal) {
    return values_0()[ordinal];
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    Month_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Companion_getInstance_2();
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.o2f_1 = value;
  }
  Month.$metadata$ = classMeta('Month', undefined, undefined, undefined, undefined, Enum.prototype);
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function proceedLoop($this, $cont) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x2f_1 = _this__u8e3s4;
  }
  $proceedLoopCOROUTINE$1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 6;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.y2f_1 = this.x2f_1.f2g_1;
            if (this.y2f_1 === -1) {
              this.hi_1 = 5;
              continue $sm;
            } else {
              this.hi_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.z2f_1 = this.x2f_1.c2g_1;
            if (this.y2f_1 >= this.z2f_1.g()) {
              this.x2f_1.g2g();
              this.hi_1 = 5;
              continue $sm;
            } else {
              this.hi_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.a2g_1 = this.z2f_1.h(this.y2f_1);
            this.x2f_1.f2g_1 = this.y2f_1 + 1 | 0;
            this.hi_1 = 4;
            var tmp_0 = this.a2g_1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this.x2f_1, this.x2f_1.e2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            {
              this.hi_1 = 1;
              continue $sm;
            }

            this.hi_1 = 5;
            continue $sm;
          case 5:
            return this.x2f_1.e2g_1;
          case 6:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 6) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  $proceedLoopCOROUTINE$1.$metadata$ = classMeta('$proceedLoopCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.c2g_1 = interceptors;
    this.d2g_1 = coroutineContext;
    this.e2g_1 = subject;
    this.f2g_1 = 0;
  }
  DebugPipelineContext.prototype.d1d = function () {
    return this.d2g_1;
  };
  DebugPipelineContext.prototype.h2g = function () {
    return this.e2g_1;
  };
  DebugPipelineContext.prototype.g2g = function () {
    this.f2g_1 = -1;
  };
  DebugPipelineContext.prototype.i2g = function (subject, $cont) {
    this.e2g_1 = subject;
    return this.j2g($cont);
  };
  DebugPipelineContext.prototype.j2g = function ($cont) {
    var index = this.f2g_1;
    if (index < 0)
      return this.e2g_1;
    if (index >= this.c2g_1.g()) {
      this.g2g();
      return this.e2g_1;
    }
    return proceedLoop(this, $cont);
  };
  DebugPipelineContext.prototype.k2g = function (initial, $cont) {
    this.f2g_1 = 0;
    this.e2g_1 = initial;
    return this.j2g($cont);
  };
  DebugPipelineContext.$metadata$ = classMeta('DebugPipelineContext', undefined, undefined, undefined, undefined, PipelineContext.prototype);
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_3().l2g_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    var tmp0_check = Companion_getInstance_3().l2g_1.m();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      tmp$ret$0 = 'The shared empty array list has been modified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, Object.create(PhaseContent.prototype));
  }
  function copyInterceptors($this) {
    $this.o2g_1 = $this.q2g();
    $this.p2g_1 = false;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.l2g_1 = tmp$ret$0;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_3();
    this.m2g_1 = phase;
    this.n2g_1 = relation;
    this.o2g_1 = interceptors;
    this.p2g_1 = true;
  }
  PhaseContent.prototype.c1k = function () {
    return this.o2g_1.m();
  };
  PhaseContent.prototype.g = function () {
    return this.o2g_1.g();
  };
  PhaseContent.prototype.r2g = function (interceptor) {
    if (this.p2g_1) {
      copyInterceptors(this);
    }
    this.o2g_1.a(interceptor);
  };
  PhaseContent.prototype.s2g = function (destination) {
    var interceptors = this.o2g_1;
    if (destination instanceof ArrayList) {
      destination.dc(destination.g() + interceptors.g() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.g();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.a(interceptors.h(index));
      }
       while (inductionVariable < last);
  };
  PhaseContent.prototype.t2g = function () {
    this.p2g_1 = true;
    return this.o2g_1;
  };
  PhaseContent.prototype.q2g = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    tmp0_apply.l(this.o2g_1);
    tmp$ret$1 = tmp0_apply;
    return tmp$ret$1;
  };
  PhaseContent.prototype.toString = function () {
    return 'Phase `' + this.m2g_1.u2g_1 + '`, ' + this.g() + ' handlers';
  };
  PhaseContent.$metadata$ = classMeta('PhaseContent');
  function _set_interceptors__wod97b($this, value) {
    $this.z2g_1.m1c_1 = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.z2g_1.m1c_1;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.c2h());
  }
  function findPhase($this, phase) {
    var phasesList = $this.x2g_1;
    var inductionVariable = 0;
    var last = phasesList.g();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.za(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.m2g_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.x2g_1;
    var inductionVariable = 0;
    var last = phasesList.g();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.m2g_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.x2g_1;
    var inductionVariable = 0;
    var last = phasesList.g();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.m2g_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.y2g_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.x2g_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.h(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.c1k())
            continue $l$loop_0;
          var interceptors = phaseContent.t2g();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var destination = tmp$ret$0;
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.h(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.s2g(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.a2h_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.a2h_1 = false;
    $this.b2h_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.a2h_1 = false;
    $this.b2h_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.t2g());
    $this.a2h_1 = false;
    $this.b2h_1 = phaseContent.m2g_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.x2g_1.m() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.a2h_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.b2h_1, phase)) {
      currentInterceptors.a(block);
      return true;
    }
    if (equals(phase, last($this.x2g_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.x2g_1)) {
      ensureNotNull(findPhase($this, phase)).r2g(block);
      currentInterceptors.a(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.v2g_1 = Attributes_0(true);
    this.w2g_1 = false;
    this.x2g_1 = mutableListOf(phases.slice());
    this.y2g_1 = 0;
    this.z2g_1 = atomic$ref$1(null);
    this.a2h_1 = false;
    this.b2h_1 = null;
  }
  Pipeline.prototype.c2h = function () {
    return this.w2g_1;
  };
  Pipeline.prototype.d2h = function (context, subject, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.u3();
    return createContext(this, context, subject, tmp$ret$0).k2g(subject, $cont);
  };
  Pipeline.prototype.f2h = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.x2g_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.x2g_1.h(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n2g_1;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.g2h_1;
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.x2g_1.kb(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  Pipeline.prototype.h2h = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.x2g_1.kb(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  Pipeline.prototype.i2h = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block === 'function')
      block;
    else
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.y2g_1;
      tmp1_this.y2g_1 = tmp2 + 1 | 0;
      return Unit_getInstance();
    }
    phaseContent.r2g(block);
    var tmp3_this = this;
    var tmp4 = tmp3_this.y2g_1;
    tmp3_this.y2g_1 = tmp4 + 1 | 0;
    resetInterceptorsList(this);
    this.j2h();
  };
  Pipeline.prototype.j2h = function () {
  };
  Pipeline.$metadata$ = classMeta('Pipeline');
  function PipelineContext(context) {
    this.e2h_1 = context;
  }
  PipelineContext.$metadata$ = classMeta('PipelineContext', [CoroutineScope]);
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    var tmp;
    if (get_DISABLE_SFG() ? true : debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.u2g_1 = name;
  }
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.u2g_1 + "')";
  };
  PipelinePhase.$metadata$ = classMeta('PipelinePhase');
  function InvalidPhaseException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, InvalidPhaseException);
  }
  InvalidPhaseException.$metadata$ = classMeta('InvalidPhaseException', undefined, undefined, undefined, undefined, Error.prototype);
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.g2h_1 = relativeTo;
  }
  After.$metadata$ = classMeta('After', undefined, undefined, undefined, undefined, PipelinePhaseRelation.prototype);
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.k2h_1 = relativeTo;
  }
  Before.$metadata$ = classMeta('Before', undefined, undefined, undefined, undefined, PipelinePhaseRelation.prototype);
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  Last.$metadata$ = objectMeta('Last', undefined, undefined, undefined, undefined, PipelinePhaseRelation.prototype);
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  PipelinePhaseRelation.$metadata$ = classMeta('PipelinePhaseRelation');
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.r2h_1;
      if (currentIndex === $this.m2h_1.g()) {
        if (!direct) {
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          var tmp1_success = $this.o2h_1;
          tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_success);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.r2h_1 = currentIndex + 1 | 0;
      var next = $this.m2h_1.h(currentIndex);
      try {
        var result = next($this, $this.o2h_1, $this.n2h_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.q2h_1 < 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    }
    var next = ensureNotNull($this.p2h_1[$this.q2h_1]);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.q2h_1;
    tmp0_this.q2h_1 = tmp1 - 1 | 0;
    $this.p2h_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.v3(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.v3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.q2h_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp0_this = $this;
    var tmp1 = tmp0_this.q2h_1;
    tmp0_this.q2h_1 = tmp1 - 1 | 0;
    $this.p2h_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    var tmp0_this = $this;
    tmp0_this.q2h_1 = tmp0_this.q2h_1 + 1 | 0;
    $this.p2h_1[tmp0_this.q2h_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.t2h_1 = this$0;
    this.s2h_1 = IntCompanionObject_getInstance().v_1;
  }
  SuspendFunctionGun$continuation$1.prototype.u3 = function () {
    var tmp0_safe_receiver = this.t2h_1.p2h_1[this.t2h_1.q2h_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u3();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Not started');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  SuspendFunctionGun$continuation$1.prototype.u2h = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      resumeRootWith(this.t2h_1, tmp$ret$0);
      return Unit_getInstance();
    }
    loop(this.t2h_1, false);
  };
  SuspendFunctionGun$continuation$1.prototype.v3 = function (result) {
    return this.u2h(result);
  };
  SuspendFunctionGun$continuation$1.$metadata$ = classMeta(undefined, [Continuation, CoroutineStackFrame]);
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.m2h_1 = blocks;
    var tmp = this;
    tmp.n2h_1 = new SuspendFunctionGun$continuation$1(this);
    this.o2h_1 = initial;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.m2h_1.g();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_0.p2h_1 = tmp$ret$0;
    this.q2h_1 = -1;
    this.r2h_1 = 0;
  }
  SuspendFunctionGun.prototype.d1d = function () {
    return this.n2h_1.u3();
  };
  SuspendFunctionGun.prototype.h2g = function () {
    return this.o2h_1;
  };
  SuspendFunctionGun.prototype.j2g = function ($cont) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $cont;
      if (this.r2h_1 === this.m2h_1.g()) {
        tmp$ret$0 = this.o2h_1;
        break $l$block_0;
      }
      addContinuation(this, intercepted(tmp0__anonymous__q1qw7t));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.o2h_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  SuspendFunctionGun.prototype.i2g = function (subject, $cont) {
    this.o2h_1 = subject;
    return this.j2g($cont);
  };
  SuspendFunctionGun.prototype.k2g = function (initial, $cont) {
    this.r2h_1 = 0;
    if (this.r2h_1 === this.m2h_1.g())
      return initial;
    this.o2h_1 = initial;
    if (this.q2h_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.j2g($cont);
  };
  SuspendFunctionGun.$metadata$ = classMeta('SuspendFunctionGun', undefined, undefined, undefined, undefined, PipelineContext.prototype);
  function TypeInfo(type, reifiedType, kotlinType) {
    this.v2h_1 = type;
    this.w2h_1 = reifiedType;
    this.x2h_1 = kotlinType;
  }
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + this.v2h_1 + ', reifiedType=' + this.w2h_1 + ', kotlinType=' + this.x2h_1 + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = this.v2h_1.hashCode();
    result = imul(result, 31) + hashCode(this.w2h_1) | 0;
    result = imul(result, 31) + (this.x2h_1 == null ? 0 : hashCode(this.x2h_1)) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.v2h_1.equals(tmp0_other_with_cast.v2h_1))
      return false;
    if (!equals(this.w2h_1, tmp0_other_with_cast.w2h_1))
      return false;
    if (!equals(this.x2h_1, tmp0_other_with_cast.x2h_1))
      return false;
    return true;
  };
  TypeInfo.$metadata$ = classMeta('TypeInfo');
  function Attributes_0(concurrent) {
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.y2h_1 = tmp$ret$0;
  }
  AttributesJs.prototype.v2c = function (key) {
    var tmp = this.y2h_1.i2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  AttributesJs.prototype.w2c = function (key) {
    return this.y2h_1.c2(key);
  };
  AttributesJs.prototype.x2c = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.y2h_1;
    tmp0_set.b(key, value);
  };
  AttributesJs.prototype.y2c = function (key) {
    this.y2h_1.cc(key);
  };
  AttributesJs.prototype.z2c = function (key, block) {
    var tmp0_safe_receiver = this.y2h_1.i2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return isObject(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.y2h_1;
    tmp0_set.b(key, tmp0_also);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  AttributesJs.prototype.a2d = function () {
    return toList(this.y2h_1.j2());
  };
  AttributesJs.$metadata$ = classMeta('AttributesJs', [Attributes]);
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var tmp_0 = typeof window !== 'undefined' && typeof window.document !== 'undefined' || (typeof self !== 'undefined' && typeof self.location !== 'undefined');
    tmp.z2h_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    tmp_1.a2i_1 = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE();
    this.b2i_1 = false;
    this.c2i_1 = false;
    this.d2i_1 = false;
    this.e2i_1 = true;
  }
  PlatformUtils.prototype.f2i = function () {
    return this.z2h_1;
  };
  PlatformUtils.$metadata$ = objectMeta('PlatformUtils');
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function GMTDate_0(timestamp) {
    var tmp0_safe_receiver = timestamp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fe();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp$ret$0 = new Date(tmp1_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_getInstance_1().i2f((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_getInstance_2().i2f(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function GMTDate$default(timestamp, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      timestamp = null;
    return GMTDate_0(timestamp);
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + toString_0(timestamp), this);
    captureStack(this, InvalidTimestampException);
  }
  InvalidTimestampException.$metadata$ = classMeta('InvalidTimestampException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.je(_this__u8e3s4);
  }
  function Type() {
  }
  Type.$metadata$ = interfaceMeta('Type');
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
    JsType_instance = this;
  }
  JsType.$metadata$ = objectMeta('JsType', [Type]);
  var JsType_instance;
  function JsType_getInstance() {
    if (JsType_instance == null)
      new JsType();
    return JsType_instance;
  }
  //region block: post-declaration
  _no_name_provided__qut3iv.prototype.y3 = get;
  _no_name_provided__qut3iv.prototype.e4 = fold;
  _no_name_provided__qut3iv.prototype.d4 = minusKey;
  _no_name_provided__qut3iv.prototype.f4 = plus;
  AttributesJs.prototype.u2c = get_0;
  //endregion
  //region block: init
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = GMTDate$default;
  _.$_$.c = SilentSupervisor$default;
  _.$_$.d = JsType_getInstance;
  _.$_$.e = PlatformUtils_getInstance;
  _.$_$.f = CopyOnWriteHashMap;
  _.$_$.g = PipelineContext;
  _.$_$.h = PipelinePhase;
  _.$_$.i = Pipeline;
  _.$_$.j = instanceOf;
  _.$_$.k = typeInfoImpl;
  _.$_$.l = AttributeKey;
  _.$_$.m = Attributes_0;
  _.$_$.n = forEach;
  _.$_$.o = get_1;
  _.$_$.p = StringValuesBuilderImpl;
  _.$_$.q = StringValuesBuilder;
  _.$_$.r = StringValuesImpl;
  _.$_$.s = StringValues;
  _.$_$.t = appendAll;
  _.$_$.u = flattenEntries;
  _.$_$.v = isLowerCase;
  _.$_$.w = putAll;
  _.$_$.x = toCharArray;
  _.$_$.y = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils-js-ir.js.map
