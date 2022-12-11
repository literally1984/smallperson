(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.f9;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.td;
  var toString = kotlin_kotlin.$_$.ka;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var isInterface = kotlin_kotlin.$_$.x9;
  var ByteArrayContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.j1;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getKClass = kotlin_kotlin.$_$.e;
  var Long = kotlin_kotlin.$_$.oc;
  var discard = kotlin_io_ktor_ktor_io.$_$.b1;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.e;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Map = kotlin_kotlin.$_$.l5;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Set = kotlin_kotlin.$_$.r5;
  var firstOrNull = kotlin_kotlin.$_$.p6;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.q4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var isArray = kotlin_kotlin.$_$.p9;
  var List = kotlin_kotlin.$_$.j5;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var filterNotNull = kotlin_kotlin.$_$.n6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.m7;
  var Collection = kotlin_kotlin.$_$.c5;
  //endregion
  //region block: pre-declaration
  SerializationNegotiationParameters.prototype = Object.create(SerializationParameters.prototype);
  SerializationNegotiationParameters.prototype.constructor = SerializationNegotiationParameters;
  $serializeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $serializeCOROUTINE$0.prototype.constructor = $serializeCOROUTINE$0;
  KotlinxSerializationConverter$serializationBase$1.prototype = Object.create(KotlinxSerializationBase.prototype);
  KotlinxSerializationConverter$serializationBase$1.prototype.constructor = KotlinxSerializationConverter$serializationBase$1;
  $deserializeCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $deserializeCOROUTINE$1.prototype.constructor = $deserializeCOROUTINE$1;
  //endregion
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.x2x_1 = format;
    this.y2x_1 = value;
    this.z2x_1 = typeInfo;
    this.a2y_1 = charset;
    this.b2y_1 = contentType;
  }
  SerializationNegotiationParameters.prototype.c2y = function () {
    return this.x2x_1;
  };
  SerializationNegotiationParameters.prototype.t = function () {
    return this.y2x_1;
  };
  SerializationNegotiationParameters.prototype.d2y = function () {
    return this.z2x_1;
  };
  SerializationNegotiationParameters.prototype.e2y = function () {
    return this.a2y_1;
  };
  SerializationNegotiationParameters.$metadata$ = classMeta('SerializationNegotiationParameters', undefined, undefined, undefined, undefined, SerializationParameters.prototype);
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2y_1 = _this__u8e3s4;
    this.t2y_1 = parameters;
  }
  $serializeCOROUTINE$0.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 5;
            this.ii_1 = 2;
            var tmp_0 = this;
            tmp_0.v2y_1 = serializerFromTypeInfo(this.t2y_1.d2y(), this.s2y_1.z2y_1.pk());
            this.t2y_1.j2y_1 = this.v2y_1;
            this.hi_1 = 1;
            suspendResult = this.s2y_1.a2z(this.t2y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u2y_1 = suspendResult;
            this.ii_1 = 5;
            this.hi_1 = 3;
            continue $sm;
          case 2:
            this.ii_1 = 5;
            var tmp_1 = this.ki_1;
            if (tmp_1 instanceof SerializationException) {
              this.w2y_1 = this.ki_1;
              var tmp_2 = this;
              tmp_2.u2y_1 = null;
              this.hi_1 = 3;
              continue $sm;
            } else {
              throw this.ki_1;
            }

            break;
          case 3:
            this.ii_1 = 5;
            this.x2y_1 = this.u2y_1;
            if (!(this.x2y_1 == null)) {
              return this.x2y_1;
            }

            this.y2y_1 = guessSerializer(this.t2y_1.t(), this.s2y_1.z2y_1.pk());
            this.t2y_1.j2y_1 = this.y2y_1;
            this.hi_1 = 4;
            suspendResult = this.s2y_1.a2z(this.t2y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
          case 5:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 5) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  $serializeCOROUTINE$0.$metadata$ = classMeta('$serializeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function KotlinxSerializationBase(format) {
    this.z2y_1 = format;
  }
  KotlinxSerializationBase.prototype.b2z = function (parameters, $cont) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  KotlinxSerializationBase.$metadata$ = classMeta('KotlinxSerializationBase');
  function SerializationParameters(format, value, typeInfo, charset) {
    this.f2y_1 = format;
    this.g2y_1 = value;
    this.h2y_1 = typeInfo;
    this.i2y_1 = charset;
  }
  SerializationParameters.prototype.c2y = function () {
    return this.f2y_1;
  };
  SerializationParameters.prototype.t = function () {
    return this.g2y_1;
  };
  SerializationParameters.prototype.d2y = function () {
    return this.h2y_1;
  };
  SerializationParameters.prototype.e2y = function () {
    return this.i2y_1;
  };
  SerializationParameters.prototype.j12 = function () {
    var tmp = this.j2y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  SerializationParameters.$metadata$ = classMeta('SerializationParameters');
  function serialization(_this__u8e3s4, contentType, format) {
    var tmp = new KotlinxSerializationConverter(format);
    _this__u8e3s4.j2v(contentType, tmp, null, 4, null);
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.nk(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      var tmp_0 = withCharsetIfNeeded(contentType, charset);
      tmp = TextContent_init_$Create$(content, tmp_0, null, 4, null);
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.qk(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = ByteArrayContent_init_$Create$(content_0, contentType, null, 4, null);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.d2z_1 = this$0;
    KotlinxSerializationBase.call(this, this$0.e2z_1);
  }
  KotlinxSerializationConverter$serializationBase$1.prototype.g2z = function (parameters, $cont) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).ie() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).ie());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return serializeContent(this.d2z_1, parameters.j12(), parameters.c2y(), parameters.t(), parameters.b2y_1, parameters.e2y());
  };
  KotlinxSerializationConverter$serializationBase$1.prototype.a2z = function (parameters, $cont) {
    return this.g2z(parameters, $cont);
  };
  KotlinxSerializationConverter$serializationBase$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, KotlinxSerializationBase.prototype);
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p2z_1 = _this__u8e3s4;
    this.q2z_1 = charset;
    this.r2z_1 = typeInfo;
    this.s2z_1 = content;
  }
  $deserializeCOROUTINE$1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            this.t2z_1 = serializerFromTypeInfo(this.r2z_1, this.p2z_1.e2z_1.pk());
            this.hi_1 = 1;
            suspendResult = this.s2z_1.m23(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            this.ii_1 = 2;
            var tmp0_subject = this.p2z_1.e2z_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this.p2z_1.e2z_1.ok(this.t2z_1, readText$default(contentPacket, this.q2z_1, 0, 2, null));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this.p2z_1.e2z_1.rk(this.t2z_1, readBytes$default(contentPacket, 0, 1, null));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this.p2z_1.e2z_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
          case 2:
            this.ii_1 = 4;
            var tmp_1 = this.ki_1;
            if (tmp_1 instanceof Error) {
              var cause = this.ki_1;
              throw new JsonConvertException('Illegal input', cause);
            } else {
              throw this.ki_1;
            }

            break;
          case 3:
            this.ii_1 = 4;
            return Unit_getInstance();
          case 4:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 4) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  $deserializeCOROUTINE$1.$metadata$ = classMeta('$deserializeCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function KotlinxSerializationConverter(format) {
    this.e2z_1 = format;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.e2z_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.e2z_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.e2z_1 + ' is not supported.');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_2 = this;
    tmp_2.f2z_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  KotlinxSerializationConverter.prototype.u2z = function (contentType, charset, typeInfo, value, $cont) {
    return this.v2z(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.k2v = function (contentType, charset, typeInfo, value, $cont) {
    return this.u2z(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.v2z = function (contentType, charset, typeInfo, value, $cont) {
    return this.f2z_1.b2z(new SerializationNegotiationParameters(this.e2z_1, value, typeInfo, charset, contentType), $cont);
  };
  KotlinxSerializationConverter.prototype.l2v = function (contentType, charset, typeInfo, value, $cont) {
    return this.v2z(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.m2v = function (charset, typeInfo, content, $cont) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  KotlinxSerializationConverter.$metadata$ = classMeta('KotlinxSerializationConverter', [ContentConverter]);
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.x2h_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.serializerFromTypeInfo.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.se().m() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.uk(typeInfo.v2h_1, null, 2, null);
      tmp_0 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.v2h_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
          var tmp1_safe_receiver = firstOrNull(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
            tmp$ret$0 = guessSerializer(tmp1_safe_receiver, module_0);
            tmp$ret$1 = tmp$ret$0;
            tmp_0 = tmp$ret$1;
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
              var keySerializer = elementSerializer(value.j2(), module_0);
              var valueSerializer = elementSerializer(value.k2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp_1 = getKClassFromExpression(value);
              var tmp3_elvis_lhs = module_0.uk(tmp_1, null, 2, null);
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_2 = tmp;
    return isInterface(tmp_2, KSerializer) ? tmp_2 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.x2h_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.te()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.distinctBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = filterNotNull(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp1_distinctBy.d();
    while (tmp0_iterator_0.e()) {
      var e = tmp0_iterator_0.f();
      var tmp$ret$3;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.vj().bl();
      var key = tmp$ret$3;
      if (set.a(key)) {
        list.a(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.g() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.d();
      while (tmp0_iterator_1.e()) {
        var item_0 = tmp0_iterator_1.f();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.vj().bl();
        tmp0_mapTo_0.a(tmp$ret$5);
      }
      tmp$ret$6 = tmp0_mapTo_0;
      tmp$ret$7 = tmp$ret$6;
      var tmp2_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp2_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.vj().xk()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.m();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.d();
      while (tmp0_iterator_2.e()) {
        var element = tmp0_iterator_2.f();
        var tmp$ret$9;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$9 = element == null;
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-js-ir.js.map
