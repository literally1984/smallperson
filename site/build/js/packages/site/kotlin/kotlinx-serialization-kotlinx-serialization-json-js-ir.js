(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var classMeta = kotlin_kotlin.$_$.f9;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var toString = kotlin_kotlin.$_$.ka;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var charSequenceGet = kotlin_kotlin.$_$.c9;
  var Char = kotlin_kotlin.$_$.ec;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var equals = kotlin_kotlin.$_$.h9;
  var Annotation = kotlin_kotlin.$_$.dc;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var interfaceMeta = kotlin_kotlin.$_$.o9;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var hashCode = kotlin_kotlin.$_$.n9;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var List = kotlin_kotlin.$_$.j5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Map = kotlin_kotlin.$_$.l5;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.m9;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.pd;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var toInt = kotlin_kotlin.$_$.sb;
  var toLong = kotlin_kotlin.$_$.ub;
  var toDouble = kotlin_kotlin.$_$.qb;
  var toLongOrNull = kotlin_kotlin.$_$.tb;
  var toDoubleOrNull = kotlin_kotlin.$_$.pb;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.q4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var toULongOrNull = kotlin_kotlin.$_$.xb;
  var Companion_getInstance = kotlin_kotlin.$_$.y4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.r3;
  var ULong = kotlin_kotlin.$_$.bd;
  var isInterface = kotlin_kotlin.$_$.x9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var lazy_0 = kotlin_kotlin.$_$.qd;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l9;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var toLong_0 = kotlin_kotlin.$_$.ia;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.h3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.j3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.q3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.s3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.a3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.z3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.b4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.z8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.d9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.e9;
  var coerceAtLeast = kotlin_kotlin.$_$.ma;
  var coerceAtMost = kotlin_kotlin.$_$.oa;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.m7;
  var arrayIterator = kotlin_kotlin.$_$.x8;
  var ensureNotNull = kotlin_kotlin.$_$.kd;
  var emptyMap = kotlin_kotlin.$_$.k6;
  var getValue = kotlin_kotlin.$_$.r6;
  var copyOf = kotlin_kotlin.$_$.f6;
  var copyOf_0 = kotlin_kotlin.$_$.g6;
  var fillArrayVal = kotlin_kotlin.$_$.j9;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.hc;
  var invoke = kotlin_kotlin.$_$.ld;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ic;
  var Unit = kotlin_kotlin.$_$.ed;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var SuspendFunction2 = kotlin_kotlin.$_$.t8;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var isObject = kotlin_kotlin.$_$.z9;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var plus = kotlin_kotlin.$_$.sd;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.mc;
  var isFinite = kotlin_kotlin.$_$.nd;
  var isFinite_0 = kotlin_kotlin.$_$.md;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var toUInt = kotlin_kotlin.$_$.wb;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.i3;
  var toULong = kotlin_kotlin.$_$.yb;
  var toUByte = kotlin_kotlin.$_$.vb;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z2;
  var toUShort = kotlin_kotlin.$_$.zb;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.a4;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var toString_0 = kotlin_kotlin.$_$.t2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.x4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.w4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.z4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var setOf = kotlin_kotlin.$_$.l7;
  var numberToChar = kotlin_kotlin.$_$.ea;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var equals_0 = kotlin_kotlin.$_$.cb;
  var toByte = kotlin_kotlin.$_$.ha;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.u1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.l4;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.p4;
  var toShort = kotlin_kotlin.$_$.ja;
  var single = kotlin_kotlin.$_$.mb;
  var emptySet = kotlin_kotlin.$_$.l6;
  var plus_0 = kotlin_kotlin.$_$.e7;
  var toList = kotlin_kotlin.$_$.s7;
  var Enum = kotlin_kotlin.$_$.jc;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var last = kotlin_kotlin.$_$.y6;
  var removeLast = kotlin_kotlin.$_$.i7;
  var lastIndexOf$default = kotlin_kotlin.$_$.p;
  var Long = kotlin_kotlin.$_$.oc;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.o2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.u4;
  var charArray = kotlin_kotlin.$_$.b9;
  var indexOf$default = kotlin_kotlin.$_$.o;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  ComposerWithPrettyPrint.prototype = Object.create(Composer.prototype);
  ComposerWithPrettyPrint.prototype.constructor = ComposerWithPrettyPrint;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, Json.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.o12_1 = configuration;
    this.p12_1 = serializersModule;
    this.q12_1 = new DescriptorSchemaCache();
  }
  Json.prototype.r12 = function () {
    return this.o12_1;
  };
  Json.prototype.pk = function () {
    return this.p12_1;
  };
  Json.prototype.nk = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.t12();
    }
  };
  Json.prototype.ok = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.vj(), null);
    var result = input.tm(deserializer);
    lexer.g13();
    return result;
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.gs();
    return new JsonImpl(conf, builder.t13_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.h13_1 = json.o12_1.u13_1;
    this.i13_1 = json.o12_1.z13_1;
    this.j13_1 = json.o12_1.v13_1;
    this.k13_1 = json.o12_1.w13_1;
    this.l13_1 = json.o12_1.x13_1;
    this.m13_1 = json.o12_1.y13_1;
    this.n13_1 = json.o12_1.a14_1;
    this.o13_1 = json.o12_1.b14_1;
    this.p13_1 = json.o12_1.c14_1;
    this.q13_1 = json.o12_1.d14_1;
    this.r13_1 = json.o12_1.e14_1;
    this.s13_1 = json.o12_1.f14_1;
    this.t13_1 = json.pk();
  }
  JsonBuilder.prototype.g14 = function () {
    return this.n13_1;
  };
  JsonBuilder.prototype.gs = function () {
    if (this.p13_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.q13_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.m13_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.n13_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.n13_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.n13_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.n13_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.h13_1, this.j13_1, this.k13_1, this.l13_1, this.m13_1, this.i13_1, this.n13_1, this.o13_1, this.p13_1, this.q13_1, this.r13_1, this.s13_1);
  };
  JsonBuilder.$metadata$ = classMeta('JsonBuilder');
  function validateConfiguration($this) {
    if (equals($this.pk(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.o12_1.c14_1, $this.o12_1.d14_1);
    $this.pk().v11(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = classMeta('JsonImpl', undefined, undefined, undefined, undefined, Json.prototype);
  function JsonClassDiscriminator() {
  }
  JsonClassDiscriminator.$metadata$ = classMeta('JsonClassDiscriminator', [Annotation]);
  function JsonNames() {
  }
  JsonNames.$metadata$ = classMeta('JsonNames', [Annotation]);
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.u13_1 = encodeDefaults;
    this.v13_1 = ignoreUnknownKeys;
    this.w13_1 = isLenient;
    this.x13_1 = allowStructuredMapKeys;
    this.y13_1 = prettyPrint;
    this.z13_1 = explicitNulls;
    this.a14_1 = prettyPrintIndent;
    this.b14_1 = coerceInputValues;
    this.c14_1 = useArrayPolymorphism;
    this.d14_1 = classDiscriminator;
    this.e14_1 = allowSpecialFloatingPointValues;
    this.f14_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.h14 = function () {
    return this.w13_1;
  };
  JsonConfiguration.prototype.g14 = function () {
    return this.a14_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.u13_1 + ', ignoreUnknownKeys=' + this.v13_1 + ', isLenient=' + this.w13_1 + ', ' + ('allowStructuredMapKeys=' + this.x13_1 + ', prettyPrint=' + this.y13_1 + ', explicitNulls=' + this.z13_1 + ', ') + ("prettyPrintIndent='" + this.a14_1 + "', coerceInputValues=" + this.b14_1 + ', useArrayPolymorphism=' + this.c14_1 + ', ') + ("classDiscriminator='" + this.d14_1 + "', allowSpecialFloatingPointValues=" + this.e14_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  JsonElement.$metadata$ = classMeta('JsonElement', undefined, undefined, {0: JsonElementSerializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonArray(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.k14_1 = content;
  }
  JsonArray.prototype.g = function () {
    return this.k14_1.g();
  };
  JsonArray.prototype.l14 = function (element) {
    return this.k14_1.l1(element);
  };
  JsonArray.prototype.l1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.l14(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.m14 = function (elements) {
    return this.k14_1.m1(elements);
  };
  JsonArray.prototype.m1 = function (elements) {
    return this.m14(elements);
  };
  JsonArray.prototype.h = function (index) {
    return this.k14_1.h(index);
  };
  JsonArray.prototype.m = function () {
    return this.k14_1.m();
  };
  JsonArray.prototype.d = function () {
    return this.k14_1.d();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.k14_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.k14_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.k14_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = classMeta('JsonArray', [List], undefined, {0: JsonArraySerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.s();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.t();
    var v = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.w5(_Char___init__impl__6a9atx(58));
    tmp0_apply.w6(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.n14_1 = content;
  }
  JsonObject.prototype.r = function () {
    return this.n14_1.r();
  };
  JsonObject.prototype.j2 = function () {
    return this.n14_1.j2();
  };
  JsonObject.prototype.g = function () {
    return this.n14_1.g();
  };
  JsonObject.prototype.k2 = function () {
    return this.n14_1.k2();
  };
  JsonObject.prototype.o14 = function (key) {
    return this.n14_1.c2(key);
  };
  JsonObject.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.o14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.p14 = function (key) {
    return this.n14_1.i2(key);
  };
  JsonObject.prototype.i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.p14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.m = function () {
    return this.n14_1.m();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.n14_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.n14_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.n14_1.r();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda, 24, null);
  };
  JsonObject.$metadata$ = classMeta('JsonObject', [Map], undefined, {0: JsonObjectSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    Companion_getInstance_8();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.q14();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.r14_1 = isString;
    this.s14_1 = toString(body);
  }
  JsonLiteral.prototype.q14 = function () {
    return this.s14_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.r14_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.s14_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.s14_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.r14_1 === other.r14_1))
      return false;
    if (!(this.s14_1 === other.s14_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.r14_1 | 0;
    result = imul(31, result) + getStringHashCode(this.s14_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.t14_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.u14_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.q14 = function () {
    return this.t14_1;
  };
  JsonNull.prototype.v14 = function () {
    return this.u14_1.t();
  };
  JsonNull.prototype.eu = function (typeParamsSerializers) {
    return this.v14();
  };
  JsonNull.$metadata$ = objectMeta('JsonNull', [SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, undefined, JsonPrimitive.prototype);
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.q14());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.q14());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.q14());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.q14();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp0_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.q14());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.q14();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.q14());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.q14());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda);
    $this$buildSerialDescriptor.gk('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.gk('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.gk('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.gk('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.gk('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().w14_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().x14_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().y14_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().z14_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().a15_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.b15_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.vj = function () {
    return this.b15_1;
  };
  JsonElementSerializer.prototype.c15 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.ko(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.ko(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.ko(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.wj = function (encoder, value) {
    return this.c15(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.xj = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.j14();
  };
  JsonElementSerializer.$metadata$ = objectMeta('JsonElementSerializer', [KSerializer]);
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.d15_1 = ListSerializer(JsonElementSerializer_getInstance()).vj();
    this.e15_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.cl = function () {
    return this.d15_1.cl();
  };
  JsonArrayDescriptor.prototype.dl = function () {
    return this.d15_1.dl();
  };
  JsonArrayDescriptor.prototype.el = function () {
    return this.d15_1.el();
  };
  JsonArrayDescriptor.prototype.xk = function () {
    return this.d15_1.xk();
  };
  JsonArrayDescriptor.prototype.fl = function () {
    return this.d15_1.fl();
  };
  JsonArrayDescriptor.prototype.gl = function (index) {
    return this.d15_1.gl(index);
  };
  JsonArrayDescriptor.prototype.hl = function (index) {
    return this.d15_1.hl(index);
  };
  JsonArrayDescriptor.prototype.il = function (name) {
    return this.d15_1.il(name);
  };
  JsonArrayDescriptor.prototype.jl = function (index) {
    return this.d15_1.jl(index);
  };
  JsonArrayDescriptor.prototype.kl = function (index) {
    return this.d15_1.kl(index);
  };
  JsonArrayDescriptor.prototype.bl = function () {
    return this.e15_1;
  };
  JsonArrayDescriptor.$metadata$ = objectMeta('JsonArrayDescriptor', [SerialDescriptor]);
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.a15_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.vj = function () {
    return this.a15_1;
  };
  JsonArraySerializer.prototype.f15 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).wj(encoder, value);
  };
  JsonArraySerializer.prototype.wj = function (encoder, value) {
    return this.f15(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.xj = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).xj(decoder));
  };
  JsonArraySerializer.$metadata$ = objectMeta('JsonArraySerializer', [KSerializer]);
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.g15_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).vj();
    this.h15_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.cl = function () {
    return this.g15_1.cl();
  };
  JsonObjectDescriptor.prototype.dl = function () {
    return this.g15_1.dl();
  };
  JsonObjectDescriptor.prototype.el = function () {
    return this.g15_1.el();
  };
  JsonObjectDescriptor.prototype.xk = function () {
    return this.g15_1.xk();
  };
  JsonObjectDescriptor.prototype.fl = function () {
    return this.g15_1.fl();
  };
  JsonObjectDescriptor.prototype.gl = function (index) {
    return this.g15_1.gl(index);
  };
  JsonObjectDescriptor.prototype.hl = function (index) {
    return this.g15_1.hl(index);
  };
  JsonObjectDescriptor.prototype.il = function (name) {
    return this.g15_1.il(name);
  };
  JsonObjectDescriptor.prototype.jl = function (index) {
    return this.g15_1.jl(index);
  };
  JsonObjectDescriptor.prototype.kl = function (index) {
    return this.g15_1.kl(index);
  };
  JsonObjectDescriptor.prototype.bl = function () {
    return this.h15_1;
  };
  JsonObjectDescriptor.$metadata$ = objectMeta('JsonObjectDescriptor', [SerialDescriptor]);
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.z14_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.vj = function () {
    return this.z14_1;
  };
  JsonObjectSerializer.prototype.i15 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).wj(encoder, value);
  };
  JsonObjectSerializer.prototype.wj = function (encoder, value) {
    return this.i15(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.xj = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).xj(decoder));
  };
  JsonObjectSerializer.$metadata$ = objectMeta('JsonObjectSerializer', [KSerializer]);
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.w14_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.vj = function () {
    return this.w14_1;
  };
  JsonPrimitiveSerializer.prototype.j15 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.ko(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.ko(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.wj = function (encoder, value) {
    return this.j15(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.xj = function (decoder) {
    var result = asJsonDecoder(decoder).j14();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = objectMeta('JsonPrimitiveSerializer', [KSerializer]);
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.x14_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.vj = function () {
    return this.x14_1;
  };
  JsonNullSerializer.prototype.k15 = function (encoder, value) {
    verify(encoder);
    encoder.on();
  };
  JsonNullSerializer.prototype.wj = function (encoder, value) {
    return this.k15(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.xj = function (decoder) {
    verify_0(decoder);
    if (decoder.gm()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.hm();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = objectMeta('JsonNullSerializer', [KSerializer]);
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.y14_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.vj = function () {
    return this.y14_1;
  };
  JsonLiteralSerializer.prototype.l15 = function (encoder, value) {
    verify(encoder);
    if (value.r14_1) {
      return encoder.xn(value.s14_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.tn(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.s14_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.yn(serializer_0(Companion_getInstance()).vj());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.tn(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.vn(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.pn(tmp3_safe_receiver);
    }
    encoder.xn(value.s14_1);
  };
  JsonLiteralSerializer.prototype.wj = function (encoder, value) {
    return this.l15(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.xj = function (decoder) {
    var result = asJsonDecoder(decoder).j14();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonLiteralSerializer.$metadata$ = objectMeta('JsonLiteralSerializer', [KSerializer]);
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = original$factory();
    tmp$ret$0 = $this.m15_1.t();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.m15_1 = lazy_0($deferred);
  }
  defer$1.prototype.bl = function () {
    return _get_original__l7ku1m(this).bl();
  };
  defer$1.prototype.fl = function () {
    return _get_original__l7ku1m(this).fl();
  };
  defer$1.prototype.dl = function () {
    return _get_original__l7ku1m(this).dl();
  };
  defer$1.prototype.jl = function (index) {
    return _get_original__l7ku1m(this).jl(index);
  };
  defer$1.prototype.il = function (name) {
    return _get_original__l7ku1m(this).il(name);
  };
  defer$1.prototype.gl = function (index) {
    return _get_original__l7ku1m(this).gl(index);
  };
  defer$1.prototype.hl = function (index) {
    return _get_original__l7ku1m(this).hl(index);
  };
  defer$1.prototype.kl = function (index) {
    return _get_original__l7ku1m(this).kl(index);
  };
  defer$1.$metadata$ = classMeta(undefined, [SerialDescriptor]);
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = interfaceMeta('JsonEncoder', [Encoder, CompositeEncoder]);
  function Composer(writer) {
    this.n15_1 = writer;
    this.o15_1 = true;
  }
  Composer.prototype.p15 = function () {
    this.o15_1 = true;
  };
  Composer.prototype.q15 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.r15 = function () {
    this.o15_1 = false;
  };
  Composer.prototype.s15 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.t15 = function (v) {
    return this.n15_1.u15(v);
  };
  Composer.prototype.v15 = function (v) {
    return this.n15_1.w15(v);
  };
  Composer.prototype.x15 = function (v) {
    return this.n15_1.w15(v.toString());
  };
  Composer.prototype.y15 = function (v) {
    return this.n15_1.w15(v.toString());
  };
  Composer.prototype.z15 = function (v) {
    return this.n15_1.a16(toLong_0(v));
  };
  Composer.prototype.b16 = function (v) {
    return this.n15_1.a16(toLong_0(v));
  };
  Composer.prototype.c16 = function (v) {
    return this.n15_1.a16(toLong_0(v));
  };
  Composer.prototype.d16 = function (v) {
    return this.n15_1.a16(v);
  };
  Composer.prototype.e16 = function (v) {
    return this.n15_1.w15(v.toString());
  };
  Composer.prototype.f16 = function (value) {
    return this.n15_1.g16(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.o12_1.y13_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.j16_1 = forceQuoting;
  }
  ComposerForUnsignedNumbers.prototype.c16 = function (v) {
    if (this.j16_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.f16(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.v15(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.d16 = function (v) {
    if (this.j16_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.f16(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.v15(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.z15 = function (v) {
    if (this.j16_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.f16(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.v15(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.b16 = function (v) {
    if (this.j16_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.f16(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.v15(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.m16_1 = json;
    this.n16_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.p15 = function () {
    this.o15_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.n16_1;
    tmp0_this.n16_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.q15 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.n16_1;
    tmp0_this.n16_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.r15 = function () {
    this.o15_1 = false;
    this.v15('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.n16_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.v15(this.m16_1.o12_1.a14_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.s15 = function () {
    this.t15(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.p16_1 = !descriptor.kl(index) ? descriptor.hl(index).xk() : false;
    return $this.p16_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.o16_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.p16_1 = false;
  }
  JsonElementMarker.prototype.rs = function (index) {
    this.o16_1.rs(index);
  };
  JsonElementMarker.prototype.ss = function () {
    return this.o16_1.ss();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.q16(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.bl() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.fl() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = classMeta('JsonDecodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = classMeta('JsonException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    if (!elementDescriptor.xk() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.fl(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      Companion_getInstance_0();
      if (enumIndex === -3) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.il(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.o12_1.f14_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.s16(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.i2(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.dl();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.gl(i);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.a(element);
          }
        }
        tmp$ret$0 = tmp0_filterIsInstanceTo;
        tmp$ret$1 = tmp$ret$0;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t16_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.e()) {
            var element_0 = tmp0_iterator_0.f();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.dl());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).c2(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.jl(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.jl(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.b(name, index);
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  Tombstone.$metadata$ = objectMeta('Tombstone');
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.w16_1, 2);
    $this.u16_1 = copyOf($this.u16_1, newSize);
    $this.v16_1 = copyOf_0($this.v16_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.u16_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPath.indicies.<anonymous>' call
      tmp$ret$1 = -1;
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.v16_1 = tmp_3;
    this.w16_1 = -1;
  }
  JsonPath.prototype.x16 = function (sd) {
    var tmp0_this = this;
    tmp0_this.w16_1 = tmp0_this.w16_1 + 1 | 0;
    var depth = tmp0_this.w16_1;
    if (depth === this.u16_1.length) {
      resize(this);
    }
    this.u16_1[depth] = sd;
  };
  JsonPath.prototype.y16 = function (index) {
    this.v16_1[this.w16_1] = index;
  };
  JsonPath.prototype.z16 = function (key) {
    var tmp;
    if (!(this.v16_1[this.w16_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.w16_1 = tmp0_this.w16_1 + 1 | 0;
      tmp = tmp0_this.w16_1 === this.u16_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.u16_1[this.w16_1] = key;
    this.v16_1[this.w16_1] = -2;
  };
  JsonPath.prototype.a17 = function () {
    if (this.v16_1[this.w16_1] === -2) {
      this.u16_1[this.w16_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.b17 = function () {
    var depth = this.w16_1;
    if (this.v16_1[depth] === -2) {
      this.v16_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.w16_1;
      tmp0_this.w16_1 = tmp1 - 1 | 0;
    }
    if (!(this.w16_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.w16_1;
      tmp2_this.w16_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.c17 = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.x6('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.w16_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.u16_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.fl(), LIST_getInstance())) {
            if (!(this.v16_1[index] === -1)) {
              tmp0_apply.x6('[');
              tmp0_apply.w6(this.v16_1[index]);
              tmp0_apply.x6(']');
            }
          } else {
            var idx = this.v16_1[index];
            if (idx >= 0) {
              tmp0_apply.x6('.');
              tmp0_apply.x6(element.jl(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.x6('[');
            tmp0_apply.x6("'");
            tmp0_apply.w6(element);
            tmp0_apply.x6("'");
            tmp0_apply.x6(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.c17();
  };
  JsonPath.$metadata$ = classMeta('JsonPath');
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.ko(serializer, value);
  }
  function JsonWriter() {
  }
  JsonWriter.$metadata$ = interfaceMeta('JsonWriter');
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.l17_1.o17(get_TC_BEGIN_OBJ());
    if ($this.l17_1.p17() === get_TC_COMMA()) {
      $this.l17_1.q16('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.l17_1.q17()) {
      var key = $this.m17_1 ? $this.l17_1.s17() : $this.l17_1.r17();
      $this.l17_1.o17(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.t17();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.b(key, element);
      lastToken = $this.l17_1.u17();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.l17_1.q16('Expected end of the object or comma', 0, null, 6, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.l17_1.o17(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.l17_1.q16('Unexpected trailing comma', 0, null, 6, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function readArray($this) {
    var lastToken = $this.l17_1.u17();
    if ($this.l17_1.p17() === get_TC_COMMA()) {
      $this.l17_1.q16('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.l17_1.q17()) {
      var element = $this.t17();
      result.a(element);
      lastToken = $this.l17_1.u17();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.l17_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.c13_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          var tmp = tmp$ret$1;
          tmp0_require.q16(tmp, tmp2_require, null, 4, null);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.l17_1.o17(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.l17_1.q16('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.m17_1 ? true : !isString) {
      tmp = $this.l17_1.s17();
    } else {
      tmp = $this.l17_1.r17();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.q18_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.v18 = function ($this$$receiver, it, $cont) {
    var tmp = this.w18($this$$receiver, it, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.v18(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.t18_1 = this.q18_1.l17_1.p17();
            if (this.t18_1 === get_TC_STRING()) {
              this.u18_1 = readValue(this.q18_1, true);
              this.hi_1 = 2;
              continue $sm;
            } else {
              if (this.t18_1 === get_TC_OTHER()) {
                this.u18_1 = readValue(this.q18_1, false);
                this.hi_1 = 2;
                continue $sm;
              } else {
                if (this.t18_1 === get_TC_BEGIN_OBJ()) {
                  this.hi_1 = 1;
                  suspendResult = readObject_0(this.r18_1, this.q18_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.t18_1 === get_TC_BEGIN_LIST()) {
                    this.u18_1 = readArray(this.q18_1);
                    this.hi_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.q18_1.l17_1.q16("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.u18_1 = suspendResult;
            this.hi_1 = 2;
            continue $sm;
          case 2:
            return this.u18_1;
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
  JsonTreeReader$readDeepRecursive$slambda.prototype.w18 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.q18_1, completion);
    i.r18_1 = $this$$receiver;
    i.s18_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.v18($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d18_1 = _this__u8e3s4;
    this.e18_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 5;
            this.f18_1 = this.d18_1.l17_1.o17(get_TC_BEGIN_OBJ());
            if (this.d18_1.l17_1.p17() === get_TC_COMMA()) {
              this.d18_1.l17_1.q16('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.g18_1 = LinkedHashMap_init_$Create$();
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (!this.d18_1.l17_1.q17()) {
              this.hi_1 = 4;
              continue $sm;
            }

            this.h18_1 = this.d18_1.m17_1 ? this.d18_1.l17_1.s17() : this.d18_1.l17_1.r17();
            this.d18_1.l17_1.o17(get_TC_COLON());
            ;
            this.hi_1 = 2;
            suspendResult = this.e18_1.d7(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.g18_1.b(this.h18_1, element);
            ;
            this.f18_1 = this.d18_1.l17_1.u17();
            var tmp0_subject = this.f18_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.hi_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.hi_1 = 4;
                continue $sm;
              } else {
                this.d18_1.l17_1.q16('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.hi_1 = 1;
            continue $sm;
          case 4:
            if (this.f18_1 === get_TC_BEGIN_OBJ()) {
              this.d18_1.l17_1.o17(get_TC_END_OBJ());
            } else if (this.f18_1 === get_TC_COMMA()) {
              this.d18_1.l17_1.q16('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.g18_1);
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
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.l17_1 = lexer;
    this.m17_1 = configuration.w13_1;
    this.n17_1 = 0;
  }
  JsonTreeReader.prototype.t17 = function () {
    var token = this.l17_1.p17();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.n17_1 = tmp0_this.n17_1 + 1 | 0;
      if (tmp0_this.n17_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.n17_1 = tmp1_this.n17_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.l17_1.q16(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.cl().d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.x18_1;
    }
    return json.o12_1.d14_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.i14().o12_1.c14_1;
    }
    if (tmp) {
      return deserializer.xj(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.vj(), _this__u8e3s4.i14());
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.j14();
    var tmp1_cast = deserializer.vj();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.bl() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.p14(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q14();
    var tmp2_elvis_lhs = deserializer.lk(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.i14();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.i14().o12_1.c14_1;
    }
    if (tmp) {
      serializer.wj(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.vj(), _this__u8e3s4.i14());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.vj().fl());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.wj(_this__u8e3s4, value);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.vj()).l1(classDiscriminator)) {
      var baseName = serializer.vj().bl();
      var actualName = actualSerializer.vj().bl();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.fl();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.ie() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.y18_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.ie() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.dl();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.jl(i);
        if (name === $this.z18_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.y18_1 = useArrayPolymorphism;
    this.z18_1 = discriminator;
  }
  PolymorphismValidator.prototype.d12 = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.g12 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.vj();
    checkKind_0(this, descriptor, actualClass);
    if (!this.y18_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.h12 = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.i12 = function (baseClass, defaultDeserializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.r16_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.a19 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.r16_1;
    var value_0 = tmp0_getOrPut.i2(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(1);
      var answer = tmp$ret$0;
      tmp0_getOrPut.b(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.b(tmp2_set, tmp3_set);
  };
  DescriptorSchemaCache.prototype.s16 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.b19(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.a19(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.b19 = function (descriptor, key) {
    var tmp0_safe_receiver = this.r16_1.i2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.i2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function DiscriminatorHolder(discriminatorToSkip) {
    this.c19_1 = discriminatorToSkip;
  }
  DiscriminatorHolder.$metadata$ = classMeta('DiscriminatorHolder');
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.c19_1 === unknownKey) {
      _this__u8e3s4.c19_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.kn(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.w12_1.p17() === get_TC_COMMA()) {
      $this.w12_1.q16('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.y12_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.y12_1 === -1)) {
        hasComma = $this.w12_1.e19();
      }
    } else {
      $this.w12_1.d19(get_COLON());
    }
    var tmp;
    if ($this.w12_1.q17()) {
      if (decodingKey) {
        if ($this.y12_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.w12_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.c13_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            var tmp_0 = tmp$ret$0;
            tmp0_require.q16(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.w12_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.c13_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            var tmp_1 = tmp$ret$1;
            tmp3_require.q16(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.y12_1 = tmp0_this.y12_1 + 1 | 0;
      tmp = tmp0_this.y12_1;
    } else {
      if (hasComma) {
        $this.w12_1.q16("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.u12_1;
      var tmp1_tryCoerceValue = descriptor.hl(index);
      var tmp;
      if (!tmp1_tryCoerceValue.xk()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.w12_1.f19();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.fl(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.w12_1.g19($this.a13_1.w13_1);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.w12_1.r17();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.w12_1.e19();
    while ($this.w12_1.q17()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.w12_1.d19(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.u12_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.a13_1.b14_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.w12_1.e19();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.b13_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.rs(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.w12_1.q16('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.b13_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ss();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.a13_1.v13_1 ? true : trySkip($this.z12_1, $this, key)) {
      $this.w12_1.i19($this.a13_1.w13_1);
    } else {
      $this.w12_1.h19(key);
    }
    return $this.w12_1.e19();
  }
  function decodeListIndex($this) {
    var hasComma = $this.w12_1.e19();
    var tmp;
    if ($this.w12_1.q17()) {
      if (!($this.y12_1 === -1) ? !hasComma : false) {
        $this.w12_1.q16('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.y12_1 = tmp0_this.y12_1 + 1 | 0;
      tmp = tmp0_this.y12_1;
    } else {
      if (hasComma) {
        $this.w12_1.q16('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.a13_1.w13_1) {
      tmp = $this.w12_1.k19();
    } else {
      tmp = $this.w12_1.j19();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.u12_1 = json;
    this.v12_1 = mode;
    this.w12_1 = lexer;
    this.x12_1 = this.u12_1.pk();
    this.y12_1 = -1;
    this.z12_1 = discriminatorHolder;
    this.a13_1 = this.u12_1.o12_1;
    this.b13_1 = this.a13_1.z13_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.i14 = function () {
    return this.u12_1;
  };
  StreamingJsonDecoder.prototype.l19 = function () {
    return this.w12_1;
  };
  StreamingJsonDecoder.prototype.pk = function () {
    return this.x12_1;
  };
  StreamingJsonDecoder.prototype.j14 = function () {
    return (new JsonTreeReader(this.u12_1.o12_1, this.w12_1)).t17();
  };
  StreamingJsonDecoder.prototype.tm = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.u12_1.o12_1.c14_1;
      }
      if (tmp) {
        return deserializer.xj(this);
      }
      var discriminator = classDiscriminator(deserializer.vj(), this.u12_1);
      var type = this.w12_1.m19(discriminator, this.a13_1.w13_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.lk(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.z12_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.xj(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException($p.sk_1, plus($p.message, ' at path: ') + this.w12_1.d13_1.c17(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.um = function (descriptor) {
    var newMode = switchMode(this.u12_1, descriptor);
    this.w12_1.d13_1.x16(descriptor);
    this.w12_1.d19(newMode.p19_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.l4_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.u12_1, newMode, this.w12_1, descriptor, this.z12_1);
        break;
      default:
        var tmp_0;
        if (this.v12_1.equals(newMode) ? this.u12_1.o12_1.z13_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.u12_1, newMode, this.w12_1, descriptor, this.z12_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.vm = function (descriptor) {
    if (this.u12_1.o12_1.v13_1 ? descriptor.dl() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.w12_1.d19(this.v12_1.q19_1);
    this.w12_1.d13_1.b17();
  };
  StreamingJsonDecoder.prototype.gm = function () {
    var tmp;
    var tmp0_safe_receiver = this.b13_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p16_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.w12_1.f19();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.hm = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.gn = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.v12_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.w12_1.d13_1.a17();
    }
    var value = AbstractDecoder.prototype.gn.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.w12_1.d13_1.z16(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.kn = function (descriptor) {
    var tmp0_subject = this.v12_1;
    var tmp0 = tmp0_subject.l4_1;
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.v12_1.equals(WriteMode_MAP_getInstance())) {
      this.w12_1.d13_1.y16(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.im = function () {
    var tmp;
    if (this.a13_1.w13_1) {
      tmp = this.w12_1.s19();
    } else {
      tmp = this.w12_1.r19();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.jm = function () {
    var value = this.w12_1.t19();
    if (!value.equals(toLong_0(value.yh()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.w12_1.q16(tmp, 0, null, 6, null);
    }
    return value.yh();
  };
  StreamingJsonDecoder.prototype.km = function () {
    var value = this.w12_1.t19();
    if (!value.equals(toLong_0(value.zh()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.w12_1.q16(tmp, 0, null, 6, null);
    }
    return value.zh();
  };
  StreamingJsonDecoder.prototype.lm = function () {
    var value = this.w12_1.t19();
    if (!value.equals(toLong_0(value.o6()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.w12_1.q16(tmp, 0, null, 6, null);
    }
    return value.o6();
  };
  StreamingJsonDecoder.prototype.mm = function () {
    return this.w12_1.t19();
  };
  StreamingJsonDecoder.prototype.nm = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.w12_1;
      var input = tmp0_parseString.s17();
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(input);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.q16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.u12_1.o12_1.e14_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.w12_1, result);
  };
  StreamingJsonDecoder.prototype.om = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.w12_1;
      var input = tmp0_parseString.s17();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.q16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.u12_1.o12_1.e14_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.w12_1, result);
  };
  StreamingJsonDecoder.prototype.pm = function () {
    var string = this.w12_1.s17();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.w12_1.q16(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.qm = function () {
    var tmp;
    if (this.a13_1.w13_1) {
      tmp = this.w12_1.k19();
    } else {
      tmp = this.w12_1.r17();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.rm = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.w12_1, this.u12_1) : AbstractDecoder.prototype.rm.call(this, descriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.s17();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.q16(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.u19_1 = lexer;
    this.v19_1 = json.pk();
  }
  JsonDecoderForUnsignedTypes.prototype.pk = function () {
    return this.v19_1;
  };
  JsonDecoderForUnsignedTypes.prototype.kn = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.lm = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.u19_1;
      var input = tmp0_parseString.s17();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.q16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.mm = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.u19_1;
      var input = tmp0_parseString.s17();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.q16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.jm = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.u19_1;
      var input = tmp0_parseString.s17();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.q16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.km = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.u19_1;
      var input = tmp0_parseString.s17();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.q16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = classMeta('JsonDecoderForUnsignedTypes', undefined, undefined, undefined, undefined, AbstractDecoder.prototype);
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.d17_1.r15();
    $this.xn(ensureNotNull($this.k17_1));
    $this.d17_1.t15(get_COLON());
    $this.d17_1.s15();
    $this.xn(descriptor.bl());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.d17_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.d17_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.d17_1.n15_1, $this.j17_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.d17_1 = composer;
    this.e17_1 = json;
    this.f17_1 = mode;
    this.g17_1 = modeReuseCache;
    this.h17_1 = this.e17_1.pk();
    this.i17_1 = this.e17_1.o12_1;
    this.j17_1 = false;
    this.k17_1 = null;
    var i = this.f17_1.l4_1;
    if (!(this.g17_1 == null)) {
      if (!(this.g17_1[i] === null) ? true : !(this.g17_1[i] === this)) {
        this.g17_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.i14 = function () {
    return this.e17_1;
  };
  StreamingJsonEncoder.prototype.pk = function () {
    return this.h17_1;
  };
  StreamingJsonEncoder.prototype.po = function (descriptor, index) {
    return this.i17_1.u13_1;
  };
  StreamingJsonEncoder.prototype.ko = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.i14().o12_1.c14_1;
      }
      if (tmp) {
        serializer.wj(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.vj(), this.i14());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.vj().fl());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.k17_1 = baseClassDiscriminator;
      actualSerializer.wj(this, value);
    }
  };
  StreamingJsonEncoder.prototype.um = function (descriptor) {
    var newMode = switchMode(this.e17_1, descriptor);
    if (!equals(new Char(newMode.p19_1), new Char(get_INVALID()))) {
      this.d17_1.t15(newMode.p19_1);
      this.d17_1.p15();
    }
    if (!(this.k17_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.k17_1 = null;
    }
    if (this.f17_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.g17_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.l4_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.d17_1, this.e17_1, newMode, this.g17_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.vm = function (descriptor) {
    if (!equals(new Char(this.f17_1.q19_1), new Char(get_INVALID()))) {
      this.d17_1.q15();
      this.d17_1.r15();
      this.d17_1.t15(this.f17_1.q19_1);
    }
  };
  StreamingJsonEncoder.prototype.mn = function (descriptor, index) {
    var tmp0_subject = this.f17_1;
    var tmp0 = tmp0_subject.l4_1;
    switch (tmp0) {
      case 1:
        if (!this.d17_1.o15_1) {
          this.d17_1.t15(get_COMMA());
        }

        this.d17_1.r15();
        ;
        break;
      case 2:
        if (!this.d17_1.o15_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.d17_1.t15(get_COMMA());
            this.d17_1.r15();
            tmp_0 = true;
          } else {
            this.d17_1.t15(get_COLON());
            this.d17_1.s15();
            tmp_0 = false;
          }
          tmp.j17_1 = tmp_0;
        } else {
          this.j17_1 = true;
          this.d17_1.r15();
        }

        break;
      case 3:
        if (index === 0)
          this.j17_1 = true;
        if (index === 1) {
          this.d17_1.t15(get_COMMA());
          this.d17_1.s15();
          this.j17_1 = false;
        }

        break;
      default:
        if (!this.d17_1.o15_1) {
          this.d17_1.t15(get_COMMA());
        }

        this.d17_1.r15();
        this.xn(descriptor.jl(index));
        this.d17_1.t15(get_COLON());
        this.d17_1.s15();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.lo = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.i17_1.z13_1) {
      AbstractEncoder.prototype.lo.call(this, descriptor, index, serializer, value);
    }
  };
  StreamingJsonEncoder.prototype.yn = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.e17_1, this.f17_1, null) : AbstractEncoder.prototype.yn.call(this, descriptor);
  };
  StreamingJsonEncoder.prototype.on = function () {
    this.d17_1.v15(get_NULL());
  };
  StreamingJsonEncoder.prototype.pn = function (value) {
    if (this.j17_1) {
      this.xn(value.toString());
    } else {
      this.d17_1.e16(value);
    }
  };
  StreamingJsonEncoder.prototype.qn = function (value) {
    if (this.j17_1) {
      this.xn(value.toString());
    } else {
      this.d17_1.z15(value);
    }
  };
  StreamingJsonEncoder.prototype.rn = function (value) {
    if (this.j17_1) {
      this.xn(value.toString());
    } else {
      this.d17_1.b16(value);
    }
  };
  StreamingJsonEncoder.prototype.sn = function (value) {
    if (this.j17_1) {
      this.xn(value.toString());
    } else {
      this.d17_1.c16(value);
    }
  };
  StreamingJsonEncoder.prototype.tn = function (value) {
    if (this.j17_1) {
      this.xn(value.toString());
    } else {
      this.d17_1.d16(value);
    }
  };
  StreamingJsonEncoder.prototype.un = function (value) {
    if (this.j17_1) {
      this.xn(value.toString());
    } else {
      this.d17_1.x15(value);
    }
    if (!this.i17_1.e14_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.d17_1.n15_1));
    }
  };
  StreamingJsonEncoder.prototype.vn = function (value) {
    if (this.j17_1) {
      this.xn(value.toString());
    } else {
      this.d17_1.y15(value);
    }
    if (!this.i17_1.e14_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.d17_1.n15_1));
    }
  };
  StreamingJsonEncoder.prototype.wn = function (value) {
    this.xn(toString_0(value));
  };
  StreamingJsonEncoder.prototype.xn = function (value) {
    return this.d17_1.f16(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.el() ? get_unsignedNumberDescriptors().l1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).vj(), serializer_0(Companion_getInstance()).vj(), serializer_2(Companion_getInstance_2()).vj(), serializer_3(Companion_getInstance_3()).vj()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.w5(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(value, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.lg(value, lastPos, i);
          _this__u8e3s4.x6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.lg(value, lastPos, value.length);
    } else {
      _this__u8e3s4.x6(value);
    }
    _this__u8e3s4.w5(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.wz();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.b1a(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.t() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.y19_1 = json;
    this.z19_1 = value;
    this.a1a_1 = this.i14().o12_1;
  }
  AbstractJsonTreeDecoder.prototype.i14 = function () {
    return this.y19_1;
  };
  AbstractJsonTreeDecoder.prototype.t = function () {
    return this.z19_1;
  };
  AbstractJsonTreeDecoder.prototype.pk = function () {
    return this.i14().pk();
  };
  AbstractJsonTreeDecoder.prototype.j14 = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.tm = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.xz = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.um = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.fl();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.i14();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.bl() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.i14();
        var keyDescriptor = carrierDescriptor(descriptor.hl(0), tmp0_selectMapMode.pk());
        var keyKind = keyDescriptor.fl();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.i14();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.bl() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.o12_1.x13_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.i14();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.bl() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp$ret$3 = currentObject_0;
            tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
            tmp_2 = tmp$ret$4;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$5 = tmp_2;
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.i14();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.bl() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.vm = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.gm = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.c1a = function (tag) {
    var currentElement = this.b1a(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.d1a = function (tag) {
    return !(this.b1a(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.zz = function (tag) {
    return this.d1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.e1a = function (tag) {
    var value = this.c1a(tag);
    if (!this.i14().o12_1.w13_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.r14_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.a10 = function (tag) {
    return this.e1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.f1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().w9_1;
        if (result <= ByteCompanionObject_getInstance().x9_1 ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.b10 = function (tag) {
    return this.f1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.g1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().ea_1;
        if (result <= ShortCompanionObject_getInstance().fa_1 ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.c10 = function (tag) {
    return this.g1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.h1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        tmp$ret$0 = get_int(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.d10 = function (tag) {
    return this.h1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.i1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        tmp$ret$0 = get_long(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.e10 = function (tag) {
    return this.i1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.j1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        tmp$ret$0 = get_float(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.i14().o12_1.e14_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.f10 = function (tag) {
    return this.j1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.k1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        tmp$ret$0 = get_double(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.i14().o12_1.e14_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.g10 = function (tag) {
    return this.k1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.l1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.q14());
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.h10 = function (tag) {
    return this.l1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.m1a = function (tag) {
    var value = this.c1a(tag);
    if (!this.i14().o12_1.w13_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.r14_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.q14();
  };
  AbstractJsonTreeDecoder.prototype.i10 = function (tag) {
    return this.m1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.n1a = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.c1a(tag).q14()), this.i14()) : NamedValueDecoder.prototype.j10.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.j10 = function (tag, inlineDescriptor) {
    return this.n1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = classMeta('AbstractJsonTreeDecoder', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.i14();
      var tmp1_tryCoerceValue = descriptor.hl(index);
      var tmp;
      if (!tmp1_tryCoerceValue.xk()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.b1a(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.fl(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.b1a(tag);
        var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
        tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.x1a_1 = (!$this.i14().o12_1.z13_1 ? !descriptor.kl(index) : false) ? descriptor.hl(index).xk() : false;
    return $this.x1a_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.t1a_1 = value;
    this.u1a_1 = polyDiscriminator;
    this.v1a_1 = polyDescriptor;
    this.w1a_1 = 0;
    this.x1a_1 = false;
  }
  JsonTreeDecoder.prototype.t = function () {
    return this.t1a_1;
  };
  JsonTreeDecoder.prototype.kn = function (descriptor) {
    while (this.w1a_1 < descriptor.dl()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.w1a_1;
      tmp0_this.w1a_1 = tmp1 + 1 | 0;
      var name = this.rz(descriptor, tmp1);
      var index = this.w1a_1 - 1 | 0;
      this.x1a_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.t();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).c2(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.a1a_1.b14_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.gm = function () {
    return !this.x1a_1 ? AbstractJsonTreeDecoder.prototype.gm.call(this) : false;
  };
  JsonTreeDecoder.prototype.sz = function (desc, index) {
    var mainName = desc.jl(index);
    if (!this.a1a_1.f14_1)
      return mainName;
    if (this.t().j2().l1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.i14());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.s16(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.t().j2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = alternativeNamesMap.i2(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.b1a = function (tag) {
    return getValue(this.t(), tag);
  };
  JsonTreeDecoder.prototype.um = function (descriptor) {
    if (descriptor === this.v1a_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.um.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.vm = function (descriptor) {
    var tmp;
    if (this.a1a_1.v13_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.fl();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.a1a_1.f14_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.i14()).b19(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.t().j2().d();
    while (tmp1_iterator.e()) {
      var key = tmp1_iterator.f();
      if (!names.l1(key) ? !(key === this.u1a_1) : false) {
        throw UnknownKeyException(key, this.t().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.d1b_1 = value;
    this.e1b_1 = this.d1b_1.g();
    this.f1b_1 = -1;
  }
  JsonTreeListDecoder.prototype.t = function () {
    return this.d1b_1;
  };
  JsonTreeListDecoder.prototype.sz = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.b1a = function (tag) {
    return this.d1b_1.h(toInt(tag));
  };
  JsonTreeListDecoder.prototype.kn = function (descriptor) {
    while (this.f1b_1 < (this.e1b_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.f1b_1;
      tmp0_this.f1b_1 = tmp1 + 1 | 0;
      return this.f1b_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.q1b_1 = value;
    this.r1b_1 = toList(this.q1b_1.j2());
    this.s1b_1 = imul(this.r1b_1.g(), 2);
    this.t1b_1 = -1;
  }
  JsonTreeMapDecoder.prototype.t = function () {
    return this.q1b_1;
  };
  JsonTreeMapDecoder.prototype.sz = function (desc, index) {
    var i = index / 2 | 0;
    return this.r1b_1.h(i);
  };
  JsonTreeMapDecoder.prototype.kn = function (descriptor) {
    while (this.t1b_1 < (this.s1b_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.t1b_1;
      tmp0_this.t1b_1 = tmp1 + 1 | 0;
      return this.t1b_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.b1a = function (tag) {
    return (this.t1b_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.q1b_1, tag);
  };
  JsonTreeMapDecoder.prototype.vm = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.vj())).tm(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.p19_1 = begin;
    this.q19_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.fl();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.hl(0), _this__u8e3s4.pk());
          var keyKind = keyDescriptor.fl();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp$ret$0 = WriteMode_MAP_getInstance();
            tmp_0 = tmp$ret$0;
          } else {
            if (_this__u8e3s4.o12_1.x13_1) {
              var tmp$ret$1;
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp$ret$1 = WriteMode_LIST_getInstance();
              tmp_0 = tmp$ret$1;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$2 = tmp_0;
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.hl(0), _this__u8e3s4.pk());
    var keyKind = keyDescriptor.fl();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.o12_1.x13_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.fl(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.el()) {
      tmp = carrierDescriptor(_this__u8e3s4.hl(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.u1b(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.u1b(lastPosition, currentPosition);
    var result = $this.f13_1.toString();
    $this.f13_1.mg(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.e13_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.e13_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.v1b(), $this.c13_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.w1b(currentPosition);
    if (currentPosition === -1) {
      $this.q16('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.v1b();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.v1b(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.q16(tmp_0, 0, null, 6, null);
    }
    $this.f13_1.w5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.c13_1 = startPos;
      $this.x1b();
      if (($this.c13_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.q16('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.c13_1);
    }
    $this.f13_1.w5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(character);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(character);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 97;
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = Char__toInt_impl_vasixd(character);
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 65;
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.q16(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.w1b(start);
    if (current >= charSequenceLength($this.v1b()) ? true : current === -1) {
      $this.q16('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.v1b();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 116;
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.s17() + "'";
        $this.q16(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.v1b()) - current | 0) < literalSuffix.length) {
      $this.q16('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.v1b(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.s17() + "'";
          $this.q16(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.c13_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.c13_1 = 0;
    this.d13_1 = new JsonPath();
    this.e13_1 = null;
    this.f13_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.x1b = function () {
  };
  AbstractJsonLexer.prototype.y1b = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.g13 = function () {
    var nextToken = this.u17();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.v1b(), this.c13_1 - 1 | 0)) + ' instead';
      this.q16(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.o17 = function (expected) {
    var token = this.u17();
    if (!(token === expected)) {
      this.z1b(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.d19 = function (expected) {
    this.x1b();
    var source = this.v1b();
    var cpos = this.c13_1;
    $l$loop_0: while (true) {
      cpos = this.w1b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.c13_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.a1c(expected);
    }
    this.c13_1 = cpos;
    this.a1c(expected);
  };
  AbstractJsonLexer.prototype.a1c = function (expected) {
    var tmp0_this = this;
    tmp0_this.c13_1 = tmp0_this.c13_1 - 1 | 0;
    if ((this.c13_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.s17() === 'null' : false) {
      this.b1c("Expected string literal but 'null' literal was found", this.c13_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.z1b(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.z1b = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.c13_1 === charSequenceLength(this.v1b()) ? true : this.c13_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.v1b(), this.c13_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.c13_1 - 1 | 0;
    this.q16(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.p17 = function () {
    var source = this.v1b();
    var cpos = this.c13_1;
    $l$loop_0: while (true) {
      cpos = this.w1b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.c13_1 = cpos;
      return charToTokenClass(ch);
    }
    this.c13_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.f19 = function () {
    var current = this.c1c();
    current = this.w1b(current);
    var len = charSequenceLength(this.v1b()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.v1b(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.v1b(), current + 4 | 0)) === 0 : false)
      return true;
    this.c13_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.c1c = function () {
    var current = this.c13_1;
    $l$loop_0: while (true) {
      current = this.w1b(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.v1b(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.c13_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.g19 = function (isLenient) {
    var token = this.p17();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.s17();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.r17();
    }
    var string = tmp;
    this.e13_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.d1c = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.v1b();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.r17 = function () {
    if (!(this.e13_1 == null)) {
      return takePeeked(this);
    }
    return this.j19();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.w1b(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.q16('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.u1b(lastPosition, currentPosition);
          currentPosition = this.w1b(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.q16('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.d1c(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.c13_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.k19 = function () {
    var result = this.s17();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.q16("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.s17 = function () {
    if (!(this.e13_1 == null)) {
      return takePeeked(this);
    }
    var current = this.c1c();
    if (current >= charSequenceLength(this.v1b()) ? true : current === -1) {
      var tmp = current;
      this.q16('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.v1b(), current));
    if (token === 1) {
      return this.r17();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.v1b(), current));
      this.q16(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.v1b(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.v1b())) {
        usedAppend = true;
        this.u1b(this.c13_1, current);
        var eof = this.w1b(current);
        if (eof === -1) {
          this.c13_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.d1c(this.c13_1, current);
    } else {
      tmp_1 = decodedString(this, this.c13_1, current);
    }
    var result = tmp_1;
    this.c13_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.u1b = function (fromIndex, toIndex) {
    this.f13_1.lg(this.v1b(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.e1c = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.q16(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.i19 = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.p17();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.s17();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.p17();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.s17();
        } else {
          this.j19();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.c13_1, 'found ] instead of } at path: ' + this.d13_1, this.v1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.c13_1, 'found } instead of ] at path: ' + this.d13_1, this.v1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.q16('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.u17();
      if (tokenStack.g() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.v1b() + "', currentPosition=" + this.c13_1 + ')';
  };
  AbstractJsonLexer.prototype.h19 = function (key) {
    var processed = this.d1c(0, this.c13_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.b1c("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.b1c = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(hint) === 0;
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.d13_1.c17() + hintMessage, this.v1b());
  };
  AbstractJsonLexer.prototype.q16 = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.c13_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.b1c(message, position, hint);
  };
  AbstractJsonLexer.prototype.t19 = function () {
    var current = this.c1c();
    current = this.w1b(current);
    if (current >= charSequenceLength(this.v1b()) ? true : current === -1) {
      this.q16('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.v1b(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.v1b())) {
        this.q16('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.v1b(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.q16("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.v1b()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.q16(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.z5(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.b6(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.f1(new Long(0, 0)) > 0) {
        this.q16('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.q16('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.q16('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.v1b(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.q16('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.c13_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.x5();
      } else {
        this.q16('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.r19 = function () {
    return consumeBoolean(this, this.c1c());
  };
  AbstractJsonLexer.prototype.s19 = function () {
    var current = this.c1c();
    if (current === charSequenceLength(this.v1b())) {
      this.q16('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.v1b(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.c13_1 === charSequenceLength(this.v1b())) {
        this.q16('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.v1b(), this.c13_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.q16('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.c13_1 = tmp0_this.c13_1 + 1 | 0;
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = classMeta('AbstractJsonLexer');
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().g1c_1;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(c);
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().f1c_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.f1c_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.g1c_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.f1c_1 = charArray(117);
    this.g1c_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = objectMeta('CharMappings');
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.l1c_1 = source;
  }
  StringJsonLexer.prototype.v1b = function () {
    return this.l1c_1;
  };
  StringJsonLexer.prototype.w1b = function (position) {
    return position < this.l1c_1.length ? position : -1;
  };
  StringJsonLexer.prototype.u17 = function () {
    var source = this.l1c_1;
    $l$loop: while (!(this.c13_1 === -1) ? this.c13_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.c13_1;
      tmp0_this.c13_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.e19 = function () {
    var current = this.c1c();
    if (current === this.l1c_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.l1c_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.c13_1 = tmp0_this.c13_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.q17 = function () {
    var current = this.c13_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.l1c_1.length) {
      var c = charSequenceGet(this.l1c_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.c13_1 = current;
      return this.y1b(c);
    }
    this.c13_1 = current;
    return false;
  };
  StringJsonLexer.prototype.c1c = function () {
    var current = this.c13_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.l1c_1.length) {
      var c = charSequenceGet(this.l1c_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.c13_1 = current;
    return current;
  };
  StringJsonLexer.prototype.d19 = function (expected) {
    if (this.c13_1 === -1) {
      this.a1c(expected);
    }
    var source = this.l1c_1;
    $l$loop: while (this.c13_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.c13_1;
      tmp0_this.c13_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.a1c(expected);
    }
    this.a1c(expected);
  };
  StringJsonLexer.prototype.j19 = function () {
    this.d19(get_STRING());
    var current = this.c13_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.l1c_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.z1b(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.l1c_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.l1c_1, this.c13_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.c13_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.l1c_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  StringJsonLexer.prototype.m19 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.c13_1;
    try {
      if (!(this.u17() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.j19() : this.k19();
      if (firstKey === keyToMatch) {
        if (!(this.u17() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.r17() : this.k19();
        return result;
      }
      return null;
    }finally {
      this.c13_1 = positionSnapshot;
    }
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.q12_1;
  }
  function JsonToStringWriter() {
    this.s12_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonToStringWriter.prototype.a16 = function (value) {
    this.s12_1.w6(value);
  };
  JsonToStringWriter.prototype.u15 = function (char) {
    this.s12_1.w5(char);
  };
  JsonToStringWriter.prototype.w15 = function (text) {
    this.s12_1.x6(text);
  };
  JsonToStringWriter.prototype.g16 = function (text) {
    printQuoted(this.s12_1, text);
  };
  JsonToStringWriter.prototype.t12 = function () {
    this.s12_1.ng();
  };
  JsonToStringWriter.prototype.toString = function () {
    return this.s12_1.toString();
  };
  JsonToStringWriter.$metadata$ = classMeta('JsonToStringWriter', [JsonWriter]);
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.xk = get_isNullable;
  defer$1.prototype.el = get_isInline;
  defer$1.prototype.cl = get_annotations;
  PolymorphismValidator.prototype.f12 = contextual;
  StreamingJsonDecoder.prototype.hn = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.jn = decodeSequentially;
  StreamingJsonDecoder.prototype.ln = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.tm = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.hn = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.jn = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.ln = decodeCollectionSize;
  StreamingJsonEncoder.prototype.no = encodeNotNullMark;
  StreamingJsonEncoder.prototype.oo = beginCollection;
  StreamingJsonEncoder.prototype.mo = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.hn = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.jn = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.ln = decodeCollectionSize;
  JsonTreeDecoder.prototype.hn = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.jn = decodeSequentially;
  JsonTreeDecoder.prototype.ln = decodeCollectionSize;
  JsonTreeListDecoder.prototype.hn = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.jn = decodeSequentially;
  JsonTreeListDecoder.prototype.ln = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.hn = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.jn = decodeSequentially;
  JsonTreeMapDecoder.prototype.ln = decodeCollectionSize;
  //endregion
  //region block: init
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json$default;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
