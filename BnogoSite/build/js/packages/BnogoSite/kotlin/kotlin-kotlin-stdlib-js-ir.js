//region block: polyfills
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
//endregion
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlin-stdlib-js-ir'] = factory(typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined' ? {} : this['kotlin-kotlin-stdlib-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  //endregion
  //region block: pre-declaration
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  //endregion
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.length === 0;
  }
  function single(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.length;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$('Array is empty.');
      case 1:
        tmp = _this__u8e3s4[0];
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Array has more than one element.');
    }
    return tmp;
  }
  function contract(builder) {
  }
  function apply(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    block(_this__u8e3s4);
    return _this__u8e3s4;
  }
  function Comparable() {
  }
  Comparable.$metadata$ = interfaceMeta('Comparable');
  function Number_0() {
  }
  Number_0.$metadata$ = classMeta('Number');
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = objectMeta('Unit');
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function asDynamic(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function unsafeCastDynamic(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function unsafeCast(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function KCallable() {
  }
  KCallable.$metadata$ = interfaceMeta('KCallable');
  function KMutableProperty0() {
  }
  KMutableProperty0.$metadata$ = interfaceMeta('KMutableProperty0', [KProperty0, KMutableProperty]);
  function KProperty0() {
  }
  KProperty0.$metadata$ = interfaceMeta('KProperty0', [KProperty]);
  function KMutableProperty() {
  }
  KMutableProperty.$metadata$ = interfaceMeta('KMutableProperty', [KProperty]);
  function KProperty() {
  }
  KProperty.$metadata$ = interfaceMeta('KProperty', [KCallable]);
  function Enum() {
  }
  Enum.prototype.d = function () {
    return this.b_1;
  };
  Enum.prototype.e = function () {
    return this.c_1;
  };
  Enum.prototype.f = function (other) {
    return compareTo(this.c_1, other.c_1);
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this.b_1;
  };
  Enum.$metadata$ = classMeta('Enum', [Comparable]);
  function arrayOf(elements) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = elements;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.i());
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 1;
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = 1;
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.a(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj['kotlinHashCodeValue$'];
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function toString(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = o.toString();
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = 1;
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = 1;
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = instance;
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object.getPrototypeOf(o).hasOwnProperty(name);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function emptyArray() {
    return [];
  }
  function Companion() {
    Companion_instance = this;
    this.j_1 = new Long(0, -2147483648);
    this.k_1 = new Long(-1, 2147483647);
    this.l_1 = 8;
    this.m_1 = 64;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Long(low, high) {
    Companion_getInstance();
    Number_0.call(this);
    this.g_1 = low;
    this.h_1 = high;
  }
  Long.prototype.n = function (other) {
    return compare(this, other);
  };
  Long.prototype.a = function (other) {
    return this.n(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.o = function (other) {
    return add(this, other);
  };
  Long.prototype.p = function (other) {
    return divide(this, other);
  };
  Long.prototype.q = function () {
    return this.r().o(new Long(1, 0));
  };
  Long.prototype.r = function () {
    return new Long(~this.g_1, ~this.h_1);
  };
  Long.prototype.s = function () {
    return this.g_1;
  };
  Long.prototype.i = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.i();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = classMeta('Long', [Comparable], undefined, undefined, undefined, Number_0.prototype);
  function get_ZERO() {
    init_properties_longjs_kt_ttk8rv();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    init_properties_longjs_kt_ttk8rv();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    init_properties_longjs_kt_ttk8rv();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    init_properties_longjs_kt_ttk8rv();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    init_properties_longjs_kt_ttk8rv();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    init_properties_longjs_kt_ttk8rv();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    var a48 = _this__u8e3s4.h_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.h_1 & 65535;
    var a16 = _this__u8e3s4.g_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.g_1 & 65535;
    var b48 = other.h_1 >>> 16 | 0;
    var b32 = other.h_1 & 65535;
    var b16 = other.g_1 >>> 16 | 0;
    var b00 = other.g_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return add(_this__u8e3s4, other.q());
  }
  function multiply(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.h_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.h_1 & 65535;
    var a16 = _this__u8e3s4.g_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.g_1 & 65535;
    var b48 = other.h_1 >>> 16 | 0;
    var b32 = other.h_1 & 65535;
    var b16 = other.g_1 >>> 16 | 0;
    var b00 = other.g_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.p(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.p(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).p(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).p(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.p(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    init_properties_longjs_kt_ttk8rv();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.g_1 << numBits_0, _this__u8e3s4.h_1 << numBits_0 | (_this__u8e3s4.g_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.g_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    init_properties_longjs_kt_ttk8rv();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.g_1 >>> numBits_0 | 0 | _this__u8e3s4.h_1 << (32 - numBits_0 | 0), _this__u8e3s4.h_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.h_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.h_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.h_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function equalsLong(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.h_1 === other.h_1 ? _this__u8e3s4.g_1 === other.g_1 : false;
  }
  function toStringImpl(_this__u8e3s4, radix) {
    init_properties_longjs_kt_ttk8rv();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.p(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).s();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = rem;
        var tmp0_unsafeCast = tmp$ret$0.toString(radix);
        tmp$ret$1 = tmp0_unsafeCast;
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.p(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).s();
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = intval;
      var tmp1_unsafeCast = tmp$ret$2.toString(radix);
      tmp$ret$3 = tmp1_unsafeCast;
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    init_properties_longjs_kt_ttk8rv();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.h_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.h_1 === 0 ? _this__u8e3s4.g_1 === 0 : false;
  }
  function isOdd(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return (_this__u8e3s4.g_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.q();
  }
  function lessThan(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    init_properties_longjs_kt_ttk8rv();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.g_1 >= 0 ? _this__u8e3s4.g_1 : 4.294967296E9 + _this__u8e3s4.g_1;
  }
  var properties_initialized_longjs_kt_5aju7t;
  function init_properties_longjs_kt_ttk8rv() {
    if (properties_initialized_longjs_kt_5aju7t) {
    } else {
      properties_initialized_longjs_kt_5aju7t = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function get_propertyRefClassMetadataCache() {
    init_properties_reflectRuntime_kt_yf9l8h();
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function metadataObject() {
    init_properties_reflectRuntime_kt_yf9l8h();
    var undef = undefined;
    return classMeta(undef, undef, undef, undef, undef, undef);
  }
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    init_properties_reflectRuntime_kt_yf9l8h();
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter, type));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function getPropertyRefClass(obj, metadata) {
    init_properties_reflectRuntime_kt_yf9l8h();
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    return obj;
  }
  function getKPropMetadata(paramCount, setter, type) {
    init_properties_reflectRuntime_kt_yf9l8h();
    var mdata = get_propertyRefClassMetadataCache()[paramCount][setter == null ? 0 : 1];
    if (mdata.interfaces.length === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = mdata.interfaces;
      tmp$ret$0 = tmp0_asDynamic;
      tmp$ret$0.push(type);
      if (mdata.interfacesCache == null) {
        mdata.interfacesCache = generateInterfaceCache();
      } else {
        ensureNotNull(mdata.interfacesCache).isComplete = false;
      }
      extendCacheWithSingle(ensureNotNull(mdata.interfacesCache), type);
    }
    return mdata;
  }
  function getLocalDelegateReference(name, type, mutable, lambda) {
    init_properties_reflectRuntime_kt_yf9l8h();
    return getPropertyCallableRef(name, 0, type, lambda, mutable ? lambda : null);
  }
  var properties_initialized_reflectRuntime_kt_inkhwd;
  function init_properties_reflectRuntime_kt_yf9l8h() {
    if (properties_initialized_reflectRuntime_kt_inkhwd) {
    } else {
      properties_initialized_reflectRuntime_kt_inkhwd = true;
      var tmp$ret$11;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp0_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_arrayOf;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$5;
      // Inline function 'kotlin.arrayOf' call
      var tmp1_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_arrayOf;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp_0 = tmp$ret$5;
      var tmp$ret$8;
      // Inline function 'kotlin.arrayOf' call
      var tmp2_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp2_arrayOf;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      var tmp3_arrayOf = [tmp, tmp_0, tmp$ret$8];
      var tmp$ret$10;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$9 = tmp3_arrayOf;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      propertyRefClassMetadataCache = tmp$ret$11;
    }
  }
  var interfacesCounter;
  function classMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('class', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  function createMetadata(kind, name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return {kind: kind, simpleName: name, interfaceId: kind === 'interface' ? -1 : undefined, interfaces: interfaces || [], associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, fastPrototype: fastPrototype, $kClass$: undefined, interfacesCache: {isComplete: fastPrototype === undefined && (interfaces === undefined || interfaces.length === 0), implementInterfaceMemo: {}}};
  }
  function generateInterfaceCache() {
    return {isComplete: false, implementInterfaceMemo: {}};
  }
  function extendCacheWithSingle(_this__u8e3s4, intr) {
    _this__u8e3s4.implementInterfaceMemo[getOrDefineInterfaceId(intr)] = true;
  }
  function getOrDefineInterfaceId(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = _this__u8e3s4.$metadata$;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    var metadata = tmp$ret$1;
    var tmp0_elvis_lhs = metadata.interfaceId;
    var interfaceId = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    var tmp;
    if (!equals(interfaceId, -1)) {
      tmp = interfaceId;
    } else {
      var tmp1 = interfacesCounter;
      interfacesCounter = tmp1 + 1 | 0;
      var result = tmp1;
      metadata.interfaceId = result;
      tmp = result;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Array.isArray(obj);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function isArrayish(o) {
    return isJsArray(o) ? true : isView(o);
  }
  function interfaceMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('interface', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, undefined);
  }
  function objectMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('object', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = classMeta('Exception', undefined, undefined, undefined, undefined, Error.prototype);
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = classMeta('IllegalArgumentException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = classMeta('IllegalStateException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function NoSuchElementException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$(message) {
    var tmp = NoSuchElementException_init_$Init$(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = classMeta('NoSuchElementException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = classMeta('RuntimeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = classMeta('NullPointerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = classMeta('ClassCastException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = lhs_hack in rhs_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = lhs_hack | rhs_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = typeof value_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function Function0() {
  }
  Function0.$metadata$ = interfaceMeta('Function0');
  //region block: init
  interfacesCounter = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Unit_getInstance;
  _.$_$.b = single;
  _.$_$.c = classMeta;
  _.$_$.d = getLocalDelegateReference;
  _.$_$.e = interfaceMeta;
  _.$_$.f = objectMeta;
  _.$_$.g = toString;
  _.$_$.h = KMutableProperty0;
  _.$_$.i = THROW_ISE;
  _.$_$.j = ensureNotNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-stdlib-js-ir.js.map
