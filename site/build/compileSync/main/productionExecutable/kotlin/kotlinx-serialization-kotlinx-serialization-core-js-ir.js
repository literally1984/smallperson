(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.o9;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.q4;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var emptyList = kotlin_kotlin.$_$.j6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.pd;
  var classMeta = kotlin_kotlin.$_$.f9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.z8;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.x1;
  var IllegalArgumentException = kotlin_kotlin.$_$.mc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var KClass = kotlin_kotlin.$_$.ua;
  var isInterface = kotlin_kotlin.$_$.x9;
  var Triple = kotlin_kotlin.$_$.vc;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.qc;
  var Entry = kotlin_kotlin.$_$.k5;
  var LinkedHashMap = kotlin_kotlin.$_$.h5;
  var MutableMap = kotlin_kotlin.$_$.p5;
  var Map = kotlin_kotlin.$_$.l5;
  var HashMap = kotlin_kotlin.$_$.d5;
  var LinkedHashSet = kotlin_kotlin.$_$.i5;
  var MutableSet = kotlin_kotlin.$_$.q5;
  var Set = kotlin_kotlin.$_$.r5;
  var HashSet = kotlin_kotlin.$_$.e5;
  var ArrayList = kotlin_kotlin.$_$.b5;
  var MutableList = kotlin_kotlin.$_$.n5;
  var List = kotlin_kotlin.$_$.j5;
  var Collection = kotlin_kotlin.$_$.c5;
  var copyToArray = kotlin_kotlin.$_$.h6;
  var toString = kotlin_kotlin.$_$.ka;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.v2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.x2;
  var isObject = kotlin_kotlin.$_$.z9;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.w2;
  var Result = kotlin_kotlin.$_$.rc;
  var ensureNotNull = kotlin_kotlin.$_$.kd;
  var equals = kotlin_kotlin.$_$.h9;
  var getStringHashCode = kotlin_kotlin.$_$.m9;
  var Iterator = kotlin_kotlin.$_$.g5;
  var Iterable = kotlin_kotlin.$_$.f5;
  var isBlank = kotlin_kotlin.$_$.eb;
  var toList = kotlin_kotlin.$_$.t7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toHashSet = kotlin_kotlin.$_$.q7;
  var toBooleanArray = kotlin_kotlin.$_$.p7;
  var withIndex = kotlin_kotlin.$_$.z7;
  var to = kotlin_kotlin.$_$.vd;
  var toMap = kotlin_kotlin.$_$.u7;
  var lazy_0 = kotlin_kotlin.$_$.qd;
  var contentEquals = kotlin_kotlin.$_$.w5;
  var until = kotlin_kotlin.$_$.ta;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var Long = kotlin_kotlin.$_$.oc;
  var Char = kotlin_kotlin.$_$.ec;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.l2;
  var Duration = kotlin_kotlin.$_$.cc;
  var Companion_getInstance = kotlin_kotlin.$_$.s4;
  var toIntOrNull = kotlin_kotlin.$_$.rb;
  var hashCode = kotlin_kotlin.$_$.n9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var isArray = kotlin_kotlin.$_$.p9;
  var arrayIterator = kotlin_kotlin.$_$.x8;
  var asList = kotlin_kotlin.$_$.u5;
  var step = kotlin_kotlin.$_$.sa;
  var getValue = kotlin_kotlin.$_$.r6;
  var longArray = kotlin_kotlin.$_$.da;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u4;
  var get_lastIndex = kotlin_kotlin.$_$.u6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.id;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.b1;
  var KTypeParameter = kotlin_kotlin.$_$.xa;
  var fillArrayVal = kotlin_kotlin.$_$.j9;
  var booleanArray = kotlin_kotlin.$_$.y8;
  var emptyMap = kotlin_kotlin.$_$.k6;
  var contentHashCode = kotlin_kotlin.$_$.x5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.t4;
  var isCharArray = kotlin_kotlin.$_$.s9;
  var charArray = kotlin_kotlin.$_$.b9;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.m4;
  var isDoubleArray = kotlin_kotlin.$_$.u9;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n4;
  var isFloatArray = kotlin_kotlin.$_$.v9;
  var isLongArray = kotlin_kotlin.$_$.y9;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.y4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.x3;
  var ULongArray = kotlin_kotlin.$_$.ad;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.t3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.q3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.v3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.r3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var isIntArray = kotlin_kotlin.$_$.w9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.x4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.o3;
  var UIntArray = kotlin_kotlin.$_$.yc;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.k3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.h3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.m3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.i3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.p4;
  var isShortArray = kotlin_kotlin.$_$.aa;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.z4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.g4;
  var UShortArray = kotlin_kotlin.$_$.cd;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.c4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.z3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.e4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.a4;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.l4;
  var isByteArray = kotlin_kotlin.$_$.r9;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.w4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.f3;
  var UByteArray = kotlin_kotlin.$_$.wc;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.c3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.d3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z2;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.k4;
  var isBooleanArray = kotlin_kotlin.$_$.q9;
  var coerceAtLeast = kotlin_kotlin.$_$.ma;
  var copyOf = kotlin_kotlin.$_$.b6;
  var copyOf_0 = kotlin_kotlin.$_$.d6;
  var copyOf_1 = kotlin_kotlin.$_$.e6;
  var copyOf_2 = kotlin_kotlin.$_$.z5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.y3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.u3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.w3;
  var copyOf_3 = kotlin_kotlin.$_$.g6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.p3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.l3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.n3;
  var copyOf_4 = kotlin_kotlin.$_$.y5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.h4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.d4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.f4;
  var copyOf_5 = kotlin_kotlin.$_$.c6;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.g3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.b3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.e3;
  var copyOf_6 = kotlin_kotlin.$_$.a6;
  var Unit = kotlin_kotlin.$_$.ed;
  var trimIndent = kotlin_kotlin.$_$.ac;
  var equals_0 = kotlin_kotlin.$_$.cb;
  var charSequenceLength = kotlin_kotlin.$_$.d9;
  var charSequenceGet = kotlin_kotlin.$_$.c9;
  var toString_0 = kotlin_kotlin.$_$.t2;
  var titlecase = kotlin_kotlin.$_$.ob;
  var isLowerCase = kotlin_kotlin.$_$.hb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.r4;
  var ULong = kotlin_kotlin.$_$.bd;
  var UInt = kotlin_kotlin.$_$.zc;
  var UShort = kotlin_kotlin.$_$.dd;
  var UByte = kotlin_kotlin.$_$.xc;
  var mapOf = kotlin_kotlin.$_$.c7;
  var lastOrNull = kotlin_kotlin.$_$.x6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.v6;
  var Annotation = kotlin_kotlin.$_$.dc;
  var get_js = kotlin_kotlin.$_$.ca;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.t6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var get_indices_0 = kotlin_kotlin.$_$.s6;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.v4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.jd;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  function decodeSerializableValue(deserializer) {
    return deserializer.xj(this);
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.gn(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.um(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.wj(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.vj().xk();
    if (isNullabilitySupported) {
      return this.ko(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.on();
    } else {
      this.no();
      this.ko(serializer, value);
    }
  }
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  CollectionSerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  CollectionSerializer.prototype.constructor = CollectionSerializer;
  ArrayListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  ReferenceArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  NoOpEncoder.prototype = Object.create(AbstractEncoder.prototype);
  NoOpEncoder.prototype.constructor = NoOpEncoder;
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  ULongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ULongArraySerializer_0.prototype.constructor = ULongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  UIntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  UIntArraySerializer_0.prototype.constructor = UIntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  UShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  UShortArraySerializer_0.prototype.constructor = UShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  UByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  UByteArraySerializer_0.prototype.constructor = UByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  ULongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ULongArrayBuilder.prototype.constructor = ULongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  UIntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  UIntArrayBuilder.prototype.constructor = UIntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  UShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  UShortArrayBuilder.prototype.constructor = UShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  UByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  UByteArrayBuilder.prototype.constructor = UByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  function contextual(kClass, serializer) {
    return this.d12(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  //endregion
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_1(StringCompanionObject_getInstance()).vj();
      $this$buildSerialDescriptor.gk('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.hk_1.ie() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.gk('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.ak_1 = this$0.ik_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.hk_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.hk_1 = baseClass;
    this.ik_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.jk_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.kk = function () {
    return this.hk_1;
  };
  PolymorphicSerializer.prototype.vj = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.jk_1.t();
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.hk_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.mk(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.kk());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.lk(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.kk());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.vj();
    }, null);
  }
  function SealedClassSerializer() {
  }
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function StringFormat() {
  }
  StringFormat.$metadata$ = interfaceMeta('StringFormat', [SerialFormat]);
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = interfaceMeta('SerialFormat');
  function BinaryFormat() {
  }
  BinaryFormat.$metadata$ = interfaceMeta('BinaryFormat', [SerialFormat]);
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.g() === 1 ? "Field '" + missingFields.h(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.sk_1 = missingFields;
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        tmp$ret$0 = serializer(_this__u8e3s4, item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.d();
      while (tmp0_iterator_0.e()) {
        var item_0 = tmp0_iterator_0.f();
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$3 = tmp_0;
        tmp0_mapTo_0.a(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, types, serializers) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, types, serializers);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, typeArguments, serializers) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.h(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.h(0), serializers.h(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.h(0), serializers.h(1), serializers.h(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = typeArguments.h(0).re();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.h(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.te();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.se();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.t5_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.m()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      var cachedResult = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (failOnMissingTypeArgSerializer) {
        var tmp$ret$5;
        // Inline function 'kotlin.Result.getOrNull' call
        var tmp_1;
        if (_Result___get_isFailure__impl__jpiriv(cachedResult)) {
          tmp_1 = null;
        } else {
          var tmp_2 = _Result___get_value__impl__bjfvqg(cachedResult);
          tmp_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        }
        tmp$ret$5 = tmp_1;
        tmp_0 = tmp$ret$5;
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.getOrElse' call
        // Inline function 'kotlin.contracts.contract' call
        var exception = Result__exceptionOrNull_impl_p6xea9(cachedResult);
        var tmp_3;
        if (exception == null) {
          var tmp_4 = _Result___get_value__impl__bjfvqg(cachedResult);
          tmp_3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        } else {
          return null;
        }
        tmp$ret$6 = tmp_3;
        tmp_0 = tmp$ret$6;
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    var tmp0_safe_receiver = cachedSerializer;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var tmp_5;
    if (typeArguments.m()) {
      tmp_5 = _this__u8e3s4.uk(rootClass, null, 2, null);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp1_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, typeArguments, serializers);
      tmp_5 = tmp2_elvis_lhs == null ? _this__u8e3s4.tk(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_5;
    var tmp3_safe_receiver = contextualSerializer;
    var tmp_7;
    if (tmp3_safe_receiver == null) {
      tmp_7 = null;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$8 = (!(tmp3_safe_receiver == null) ? isInterface(tmp3_safe_receiver, KSerializer) : false) ? tmp3_safe_receiver : THROW_CCE();
      tmp_7 = tmp$ret$8;
    }
    var tmp4_safe_receiver = tmp_7;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_SERIALIZERS_CACHE() {
    init_properties_SerializersCache_kt_1gq1i1();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    init_properties_SerializersCache_kt_1gq1i1();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    init_properties_SerializersCache_kt_1gq1i1();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    init_properties_SerializersCache_kt_1gq1i1();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    init_properties_SerializersCache_kt_1gq1i1();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().vk(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$0 = (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, KSerializer) : false) ? tmp0_safe_receiver : THROW_CCE();
        tmp_0 = tmp$ret$0;
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().vk(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    init_properties_SerializersCache_kt_1gq1i1();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().wk(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().wk(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    init_properties_SerializersCache_kt_1gq1i1();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    init_properties_SerializersCache_kt_1gq1i1();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    init_properties_SerializersCache_kt_1gq1i1();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, types, serializers);
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    init_properties_SerializersCache_kt_1gq1i1();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, types, serializers);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function init_properties_SerializersCache_kt_1gq1i1() {
    if (properties_initialized_SerializersCache_kt_q8kf25) {
    } else {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.vj().xk()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.yk_1 = original;
    this.zk_1 = kClass;
    this.al_1 = this.yk_1.bl() + '<' + this.zk_1.ie() + '>';
  }
  ContextDescriptor.prototype.cl = function () {
    return this.yk_1.cl();
  };
  ContextDescriptor.prototype.dl = function () {
    return this.yk_1.dl();
  };
  ContextDescriptor.prototype.el = function () {
    return this.yk_1.el();
  };
  ContextDescriptor.prototype.xk = function () {
    return this.yk_1.xk();
  };
  ContextDescriptor.prototype.fl = function () {
    return this.yk_1.fl();
  };
  ContextDescriptor.prototype.gl = function (index) {
    return this.yk_1.gl(index);
  };
  ContextDescriptor.prototype.hl = function (index) {
    return this.yk_1.hl(index);
  };
  ContextDescriptor.prototype.il = function (name) {
    return this.yk_1.il(name);
  };
  ContextDescriptor.prototype.jl = function (index) {
    return this.yk_1.jl(index);
  };
  ContextDescriptor.prototype.kl = function (index) {
    return this.yk_1.kl(index);
  };
  ContextDescriptor.prototype.bl = function () {
    return this.al_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.yk_1, another.yk_1) ? another.zk_1.equals(this.zk_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.zk_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.al_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.zk_1 + ', original: ' + this.yk_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.uk(tmp0_safe_receiver, null, 2, null);
      tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.vj();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.zk_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.ll_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.pl_1 = $this_elementDescriptors;
    this.ol_1 = $this_elementDescriptors.dl();
  }
  elementDescriptors$1$1.prototype.e = function () {
    return this.ol_1 > 0;
  };
  elementDescriptors$1$1.prototype.f = function () {
    var tmp = this.pl_1.dl();
    var tmp0_this = this;
    var tmp1 = tmp0_this.ol_1;
    tmp0_this.ol_1 = tmp1 - 1 | 0;
    return this.pl_1.hl(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.ql_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.d = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.ql_1);
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.bk_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda;
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.yj_1 = serialName;
    this.zj_1 = false;
    this.ak_1 = emptyList();
    this.bk_1 = ArrayList_init_$Create$_0();
    this.ck_1 = HashSet_init_$Create$();
    this.dk_1 = ArrayList_init_$Create$_0();
    this.ek_1 = ArrayList_init_$Create$_0();
    this.fk_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.rl = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.ck_1.a(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.bk_1;
    tmp1_plusAssign.a(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.dk_1;
    tmp2_plusAssign.a(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.ek_1;
    tmp3_plusAssign.a(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.fk_1;
    tmp4_plusAssign.a(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.gk = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.rl(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.bk_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda;
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.dm_1.t();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.cm_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.jl(it) + ': ' + this$0.hl(it).bl();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.sl_1 = serialName;
    this.tl_1 = kind;
    this.ul_1 = elementsCount;
    this.vl_1 = builder.ak_1;
    this.wl_1 = toHashSet(builder.bk_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.bk_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.xl_1 = tmp$ret$0;
    this.yl_1 = compactArray(builder.dk_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.ek_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.zl_1 = tmp$ret$1;
    this.am_1 = toBooleanArray(builder.fk_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.xl_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.u2_1, item.t2_1);
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.bm_1 = toMap(tmp$ret$4);
    this.cm_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.dm_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.bl = function () {
    return this.sl_1;
  };
  SerialDescriptorImpl.prototype.fl = function () {
    return this.tl_1;
  };
  SerialDescriptorImpl.prototype.dl = function () {
    return this.ul_1;
  };
  SerialDescriptorImpl.prototype.cl = function () {
    return this.vl_1;
  };
  SerialDescriptorImpl.prototype.em = function () {
    return this.wl_1;
  };
  SerialDescriptorImpl.prototype.jl = function (index) {
    return getChecked(this.xl_1, index);
  };
  SerialDescriptorImpl.prototype.il = function (name) {
    var tmp0_elvis_lhs = this.bm_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.gl = function (index) {
    return getChecked(this.zl_1, index);
  };
  SerialDescriptorImpl.prototype.hl = function (index) {
    return getChecked(this.yl_1, index);
  };
  SerialDescriptorImpl.prototype.kl = function (index) {
    return getChecked_0(this.am_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.bl() === other.bl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.cm_1, tmp0__anonymous__q1qw7t.cm_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.dl() === other.dl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.dl();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.hl(index).bl() === other.hl(index).bl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.hl(index).fl(), other.hl(index).fl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.ul_1);
    var tmp_0 = this.sl_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).ie());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.fm = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.gm = function () {
    return true;
  };
  AbstractDecoder.prototype.hm = function () {
    return null;
  };
  AbstractDecoder.prototype.im = function () {
    var tmp = this.fm();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.jm = function () {
    var tmp = this.fm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.km = function () {
    var tmp = this.fm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.lm = function () {
    var tmp = this.fm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.mm = function () {
    var tmp = this.fm();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.nm = function () {
    var tmp = this.fm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.om = function () {
    var tmp = this.fm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.pm = function () {
    var tmp = this.fm();
    return tmp instanceof Char ? tmp.i1_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.qm = function () {
    var tmp = this.fm();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.rm = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.sm = function (deserializer, previousValue) {
    return this.tm(deserializer);
  };
  AbstractDecoder.prototype.um = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.vm = function (descriptor) {
  };
  AbstractDecoder.prototype.wm = function (descriptor, index) {
    return this.im();
  };
  AbstractDecoder.prototype.xm = function (descriptor, index) {
    return this.jm();
  };
  AbstractDecoder.prototype.ym = function (descriptor, index) {
    return this.km();
  };
  AbstractDecoder.prototype.zm = function (descriptor, index) {
    return this.lm();
  };
  AbstractDecoder.prototype.an = function (descriptor, index) {
    return this.mm();
  };
  AbstractDecoder.prototype.bn = function (descriptor, index) {
    return this.nm();
  };
  AbstractDecoder.prototype.cn = function (descriptor, index) {
    return this.om();
  };
  AbstractDecoder.prototype.dn = function (descriptor, index) {
    return this.pm();
  };
  AbstractDecoder.prototype.en = function (descriptor, index) {
    return this.qm();
  };
  AbstractDecoder.prototype.fn = function (descriptor, index) {
    return this.rm(descriptor.hl(index));
  };
  AbstractDecoder.prototype.gn = function (descriptor, index, deserializer, previousValue) {
    return this.sm(deserializer, previousValue);
  };
  AbstractDecoder.prototype.in = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.vj().xk();
    return (isNullabilitySupported ? true : this.gm()) ? this.sm(deserializer, previousValue) : this.hm();
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.um = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.vm = function (descriptor) {
  };
  AbstractEncoder.prototype.mn = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.nn = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.on = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.pn = function (value) {
    return this.nn(value);
  };
  AbstractEncoder.prototype.qn = function (value) {
    return this.nn(value);
  };
  AbstractEncoder.prototype.rn = function (value) {
    return this.nn(value);
  };
  AbstractEncoder.prototype.sn = function (value) {
    return this.nn(value);
  };
  AbstractEncoder.prototype.tn = function (value) {
    return this.nn(value);
  };
  AbstractEncoder.prototype.un = function (value) {
    return this.nn(value);
  };
  AbstractEncoder.prototype.vn = function (value) {
    return this.nn(value);
  };
  AbstractEncoder.prototype.wn = function (value) {
    return this.nn(new Char(value));
  };
  AbstractEncoder.prototype.xn = function (value) {
    return this.nn(value);
  };
  AbstractEncoder.prototype.yn = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.zn = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.pn(value);
    }
  };
  AbstractEncoder.prototype.ao = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.qn(value);
    }
  };
  AbstractEncoder.prototype.bo = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.rn(value);
    }
  };
  AbstractEncoder.prototype.co = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.sn(value);
    }
  };
  AbstractEncoder.prototype.do = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.tn(value);
    }
  };
  AbstractEncoder.prototype.eo = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.un(value);
    }
  };
  AbstractEncoder.prototype.fo = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.vn(value);
    }
  };
  AbstractEncoder.prototype.go = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.wn(value);
    }
  };
  AbstractEncoder.prototype.ho = function (descriptor, index, value) {
    if (this.mn(descriptor, index)) {
      this.xn(value);
    }
  };
  AbstractEncoder.prototype.io = function (descriptor, index) {
    return this.mn(descriptor, index) ? this.yn(descriptor.hl(index)) : NoOpEncoder_getInstance();
  };
  AbstractEncoder.prototype.jo = function (descriptor, index, serializer, value) {
    if (this.mn(descriptor, index)) {
      this.ko(serializer, value);
    }
  };
  AbstractEncoder.prototype.lo = function (descriptor, index, serializer, value) {
    if (this.mn(descriptor, index)) {
      this.mo(serializer, value);
    }
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.qo_1 = -1;
    this.ro_1 = -3;
  }
  Companion.prototype.so = function () {
    return this.qo_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.um(descriptor);
    var result = block(composite);
    composite.vm(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.oo(descriptor, collectionSize);
    block(composite);
    composite.vm(descriptor);
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.um(descriptor);
    block(composite);
    composite.vm(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.en($this.vj(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.vj();
    return compositeDecoder.hn(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.wj = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.vj();
    var composite = encoder.um(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.ho(this.vj(), 0, actualSerializer.vj().bl());
    var tmp = this.vj();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.jo(tmp, 1, tmp$ret$0, value);
    composite.vm(tmp0_encodeStructure);
  };
  AbstractPolymorphicSerializer.prototype.xj = function (decoder) {
    var tmp$ret$5;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.vj();
    var composite = decoder.um(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.jn()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.kn(this.vj());
        Companion_getInstance_7();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.en(this.vj(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var tmp0_requireNotNull = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (tmp0_requireNotNull == null) {
                  var tmp$ret$1;
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                  var message = tmp$ret$1;
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = tmp0_requireNotNull;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              var tmp = this.vj();
              value = composite.hn(tmp, index, serializer, null, 8, null);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp1_requireNotNull = value;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_requireNotNull == null) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1_requireNotNull;
          break $l$block_1;
        }
      }
      var tmp_0 = tmp$ret$4;
      tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.vm(tmp0_decodeStructure);
    tmp$ret$5 = result;
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.lk = function (decoder, klassName) {
    return decoder.pk().to(this.kk(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.mk = function (encoder, value) {
    return encoder.pk().uo(this.kk(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.ie();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.ie() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.vo_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  DurationSerializer.prototype.vj = function () {
    return this.vo_1;
  };
  DurationSerializer.prototype.wo = function (encoder, value) {
    encoder.xn(Duration__toIsoString_impl_9h6wsm(value));
  };
  DurationSerializer.prototype.wj = function (encoder, value) {
    return this.wo(encoder, value instanceof Duration ? value.u6_1 : THROW_CCE());
  };
  DurationSerializer.prototype.xo = function (decoder) {
    return Companion_getInstance().s6(decoder.qm());
  };
  DurationSerializer.prototype.xj = function (decoder) {
    return new Duration(this.xo(decoder));
  };
  DurationSerializer.$metadata$ = objectMeta('DurationSerializer', [KSerializer]);
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.bl = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.bl = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.bl = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.bl = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.op_1 = primitive.bl() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.bl = function () {
    return this.op_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.ap_1 = elementDescriptor;
    this.bp_1 = 1;
  }
  ListLikeDescriptor.prototype.fl = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.dl = function () {
    return this.bp_1;
  };
  ListLikeDescriptor.prototype.jl = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.il = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.kl = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.bl() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  ListLikeDescriptor.prototype.gl = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.bl() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.hl = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.bl() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ap_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ap_1, other.ap_1) ? this.bl() === other.bl() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.ap_1), 31) + getStringHashCode(this.bl()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.bl() + '(' + this.ap_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.gp_1 = serialName;
    this.hp_1 = keyDescriptor;
    this.ip_1 = valueDescriptor;
    this.jp_1 = 2;
  }
  MapLikeDescriptor.prototype.bl = function () {
    return this.gp_1;
  };
  MapLikeDescriptor.prototype.fl = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.dl = function () {
    return this.jp_1;
  };
  MapLikeDescriptor.prototype.jl = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.il = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.kl = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.bl() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  MapLikeDescriptor.prototype.gl = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.bl() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.hl = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.bl() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.hp_1;
        break;
      case 1:
        tmp = this.ip_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.bl() === other.bl()))
      return false;
    if (!equals(this.hp_1, other.hp_1))
      return false;
    if (!equals(this.ip_1, other.ip_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.bl());
    result = imul(31, result) + hashCode(this.hp_1) | 0;
    result = imul(31, result) + hashCode(this.ip_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.bl() + '(' + this.hp_1 + ', ' + this.ip_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.qp_1 = new ArrayListClassDesc(element.vj());
  }
  ArrayListSerializer.prototype.vj = function () {
    return this.qp_1;
  };
  ArrayListSerializer.prototype.rp = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.sp = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ArrayListSerializer.prototype.tp = function (_this__u8e3s4) {
    return this.sp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.up = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.vp = function (_this__u8e3s4) {
    return this.up(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.wp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.xp = function (_this__u8e3s4) {
    return this.wp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.yp = function (_this__u8e3s4, size) {
    return _this__u8e3s4.dc(size);
  };
  ArrayListSerializer.prototype.zp = function (_this__u8e3s4, size) {
    return this.yp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.aq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.kb(index, element);
  };
  ArrayListSerializer.prototype.bq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.aq(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.mq_1 = new HashSetClassDesc(eSerializer.vj());
  }
  HashSetSerializer.prototype.vj = function () {
    return this.mq_1;
  };
  HashSetSerializer.prototype.rp = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.nq = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashSetSerializer.prototype.tp = function (_this__u8e3s4) {
    return this.nq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.oq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.vp = function (_this__u8e3s4) {
    return this.oq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.pq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.xp = function (_this__u8e3s4) {
    return this.pq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.qq = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.zp = function (_this__u8e3s4, size) {
    return this.qq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.rq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  HashSetSerializer.prototype.bq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.rq(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.tq_1 = new LinkedHashSetClassDesc(eSerializer.vj());
  }
  LinkedHashSetSerializer.prototype.vj = function () {
    return this.tq_1;
  };
  LinkedHashSetSerializer.prototype.rp = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.uq = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashSetSerializer.prototype.tp = function (_this__u8e3s4) {
    return this.uq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.vq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.vp = function (_this__u8e3s4) {
    return this.vq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.pq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.xp = function (_this__u8e3s4) {
    return this.pq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.wq = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.zp = function (_this__u8e3s4, size) {
    return this.wq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.xq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  LinkedHashSetSerializer.prototype.bq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.xq(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.ar_1 = new HashMapClassDesc(kSerializer.vj(), vSerializer.vj());
  }
  HashMapSerializer.prototype.vj = function () {
    return this.ar_1;
  };
  HashMapSerializer.prototype.br = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashMapSerializer.prototype.cr = function (_this__u8e3s4) {
    return this.br((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.dr = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.r().d();
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.er = function (_this__u8e3s4) {
    return this.dr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.rp = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.fr = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  HashMapSerializer.prototype.tp = function (_this__u8e3s4) {
    return this.fr(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.gr = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.vp = function (_this__u8e3s4) {
    return this.gr(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.hr = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.xp = function (_this__u8e3s4) {
    return this.hr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.ir = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.zp = function (_this__u8e3s4, size) {
    return this.ir(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.pr_1 = new LinkedHashMapClassDesc(kSerializer.vj(), vSerializer.vj());
  }
  LinkedHashMapSerializer.prototype.vj = function () {
    return this.pr_1;
  };
  LinkedHashMapSerializer.prototype.br = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashMapSerializer.prototype.cr = function (_this__u8e3s4) {
    return this.br((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.dr = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.r().d();
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.er = function (_this__u8e3s4) {
    return this.dr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.rp = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.qr = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  LinkedHashMapSerializer.prototype.tp = function (_this__u8e3s4) {
    return this.qr(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.rr = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.vp = function (_this__u8e3s4) {
    return this.rr(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.hr = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.xp = function (_this__u8e3s4) {
    return this.hr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.sr = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.zp = function (_this__u8e3s4, size) {
    return this.sr(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ur_1 = kClass;
    this.vr_1 = new ArrayClassDesc(eSerializer.vj());
  }
  ReferenceArraySerializer.prototype.vj = function () {
    return this.vr_1;
  };
  ReferenceArraySerializer.prototype.wr = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.cr = function (_this__u8e3s4) {
    return this.wr((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.xr = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.er = function (_this__u8e3s4) {
    return this.xr((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.rp = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.yr = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ReferenceArraySerializer.prototype.tp = function (_this__u8e3s4) {
    return this.yr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.zr = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ur_1);
  };
  ReferenceArraySerializer.prototype.vp = function (_this__u8e3s4) {
    return this.zr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.as = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.xp = function (_this__u8e3s4) {
    return this.as((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.bs = function (_this__u8e3s4, size) {
    return _this__u8e3s4.dc(size);
  };
  ReferenceArraySerializer.prototype.zp = function (_this__u8e3s4, size) {
    return this.bs(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.cs = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.kb(index, element);
  };
  ReferenceArraySerializer.prototype.bq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.cs(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.dq = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  CollectionSerializer.prototype.cr = function (_this__u8e3s4) {
    return this.dq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.eq = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  CollectionSerializer.prototype.er = function (_this__u8e3s4) {
    return this.eq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.jr_1 = keySerializer;
    this.kr_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.lr = function () {
    return this.jr_1;
  };
  MapLikeSerializer.prototype.mr = function () {
    return this.kr_1;
  };
  MapLikeSerializer.prototype.hq = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.iq(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.iq = function (decoder, index, builder, checkIndex) {
    var tmp = this.vj();
    var key = decoder.hn(tmp, index, this.jr_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.kn(this.vj());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_require = tmp0_also === (index + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.c2(key)) {
      var tmp_3 = this.kr_1.vj().fl();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.gn(this.vj(), vIndex, this.kr_1, getValue(builder, key));
    } else {
      var tmp_4 = this.vj();
      tmp_1 = decoder.hn(tmp_4, vIndex, this.kr_1, null, 8, null);
    }
    var value = tmp_1;
    // Inline function 'kotlin.collections.set' call
    builder.b(key, value);
  };
  MapLikeSerializer.prototype.gq = function (encoder, value) {
    var size = this.cr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.vj();
    var composite = encoder.oo(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.er(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = iterator;
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.s();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.t();
      var v = tmp$ret$2;
      var tmp = this.vj();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.jo(tmp, tmp0, this.jr_1, k);
      var tmp_0 = this.vj();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.jo(tmp_0, tmp1, this.kr_1, v);
    }
    composite.vm(tmp0_encodeCollection);
  };
  MapLikeSerializer.prototype.wj = function (encoder, value) {
    return this.gq(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.fq_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.gq = function (encoder, value) {
    var size = this.cr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.vj();
    var composite = encoder.oo(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.er(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.jo(this.vj(), index, this.fq_1, iterator.f());
      }
       while (inductionVariable < size);
    composite.vm(tmp0_encodeCollection);
  };
  CollectionLikeSerializer.prototype.wj = function (encoder, value) {
    return this.gq(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.hq = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.iq(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.iq = function (decoder, index, builder, checkIndex) {
    var tmp = this.vj();
    this.bq(builder, index, decoder.hn(tmp, index, this.fq_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.ln($this.vj());
    $this.zp(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.kq = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.xp(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.rp() : tmp1_elvis_lhs;
    var startIndex = this.tp(builder);
    var compositeDecoder = decoder.um(this.vj());
    if (compositeDecoder.jn()) {
      this.hq(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.kn(this.vj());
        Companion_getInstance_7();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.jq(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.vm(this.vj());
    return this.vp(builder);
  };
  AbstractCollectionSerializer.prototype.xj = function (decoder) {
    return this.kq(decoder, null);
  };
  AbstractCollectionSerializer.prototype.jq = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    var tmp;
    if ($handler == null) {
      this.iq(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.es_1 = new PrimitiveArrayDescriptor(primitiveSerializer.vj());
  }
  PrimitiveArraySerializer.prototype.vj = function () {
    return this.es_1;
  };
  PrimitiveArraySerializer.prototype.tp = function (_this__u8e3s4) {
    return _this__u8e3s4.fs();
  };
  PrimitiveArraySerializer.prototype.vp = function (_this__u8e3s4) {
    return _this__u8e3s4.gs();
  };
  PrimitiveArraySerializer.prototype.zp = function (_this__u8e3s4, size) {
    return _this__u8e3s4.dc(size);
  };
  PrimitiveArraySerializer.prototype.hs = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.er = function (_this__u8e3s4) {
    return this.hs((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.bq = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.rp = function () {
    return this.xp(this.is());
  };
  PrimitiveArraySerializer.prototype.ks = function (encoder, value) {
    var size = this.cr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.es_1;
    var composite = encoder.oo(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.js(composite, value, size);
    composite.vm(tmp0_encodeCollection);
  };
  PrimitiveArraySerializer.prototype.wj = function (encoder, value) {
    return this.ks(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.gq = function (encoder, value) {
    return this.ks(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.xj = function (decoder) {
    return this.kq(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.ls = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.fs() + 1 | 0;
    var tmp;
    if ($handler == null) {
      this.dc(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(requiredCapacity);
    }
    return tmp;
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function Companion_0() {
    Companion_instance_0 = this;
    this.ms_1 = longArray(0);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).c7(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.qs_1[slot] = $this.qs_1[slot].xh((new Long(1, 0)).c7(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.qs_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.qs_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.wh());
          slotMarks = slotMarks.xh((new Long(1, 0)).c7(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.os_1($this.ns_1, index)) {
            $this.qs_1[slot] = slotMarks;
            return index;
          }
        }
        $this.qs_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_7();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.ns_1 = descriptor;
    this.os_1 = readIfAbsent;
    var elementsCount = this.ns_1.dl();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).c7(elementsCount);
      }
      tmp.ps_1 = tmp_0;
      this.qs_1 = Companion_getInstance_8().ms_1;
    } else {
      this.ps_1 = new Long(0, 0);
      this.qs_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.rs = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.ps_1 = this.ps_1.xh((new Long(1, 0)).c7(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.ss = function () {
    var elementsCount = this.ns_1.dl();
    while (!this.ps_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.ps_1.wh());
      this.ps_1 = this.ps_1.xh((new Long(1, 0)).c7(index));
      if (this.os_1(this.ns_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_7();
    return -1;
  };
  ElementMarker.$metadata$ = classMeta('ElementMarker');
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.ft_1 = true;
  }
  InlineClassDescriptor.prototype.el = function () {
    return this.ft_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.bl() === other.bl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = tmp0__anonymous__q1qw7t.ft_1 ? contentEquals(this.st(), tmp0__anonymous__q1qw7t.st()) : false;
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.dl() === other.dl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.dl();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.hl(index).bl() === other.hl(index).bl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.hl(index).fl(), other.hl(index).fl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = classMeta('InlineClassDescriptor', undefined, undefined, undefined, undefined, PluginGeneratedSerialDescriptor.prototype);
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.ut_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.vt = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.ut_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.vj = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.wj = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.xj = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.xt_1 = EmptySerializersModule_0();
  }
  NoOpEncoder.prototype.pk = function () {
    return this.xt_1;
  };
  NoOpEncoder.prototype.nn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.on = function () {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.pn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.qn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.rn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.sn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.tn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.un = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.vn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.wn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.xn = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.$metadata$ = objectMeta('NoOpEncoder', undefined, undefined, undefined, undefined, AbstractEncoder.prototype);
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function NullableSerializer(serializer) {
    this.yt_1 = serializer;
    this.zt_1 = new SerialDescriptorForNullable(this.yt_1.vj());
  }
  NullableSerializer.prototype.vj = function () {
    return this.zt_1;
  };
  NullableSerializer.prototype.au = function (encoder, value) {
    if (!(value == null)) {
      encoder.no();
      encoder.ko(this.yt_1, value);
    } else {
      encoder.on();
    }
  };
  NullableSerializer.prototype.wj = function (encoder, value) {
    return this.au(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.xj = function (decoder) {
    return decoder.gm() ? decoder.tm(this.yt_1) : decoder.hm();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.yt_1, other.yt_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.yt_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function SerialDescriptorForNullable(original) {
    this.ll_1 = original;
    this.ml_1 = this.ll_1.bl() + '?';
    this.nl_1 = cachedSerialNames(this.ll_1);
  }
  SerialDescriptorForNullable.prototype.cl = function () {
    return this.ll_1.cl();
  };
  SerialDescriptorForNullable.prototype.dl = function () {
    return this.ll_1.dl();
  };
  SerialDescriptorForNullable.prototype.el = function () {
    return this.ll_1.el();
  };
  SerialDescriptorForNullable.prototype.fl = function () {
    return this.ll_1.fl();
  };
  SerialDescriptorForNullable.prototype.gl = function (index) {
    return this.ll_1.gl(index);
  };
  SerialDescriptorForNullable.prototype.hl = function (index) {
    return this.ll_1.hl(index);
  };
  SerialDescriptorForNullable.prototype.il = function (name) {
    return this.ll_1.il(name);
  };
  SerialDescriptorForNullable.prototype.jl = function (index) {
    return this.ll_1.jl(index);
  };
  SerialDescriptorForNullable.prototype.kl = function (index) {
    return this.ll_1.kl(index);
  };
  SerialDescriptorForNullable.prototype.bl = function () {
    return this.ml_1;
  };
  SerialDescriptorForNullable.prototype.em = function () {
    return this.nl_1;
  };
  SerialDescriptorForNullable.prototype.xk = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.ll_1, other.ll_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.ll_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.ll_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.ak_1 = this$0.cu_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.bu_1 = objectInstance;
    this.cu_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.du_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.vj = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.du_1.t();
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.wj = function (encoder, value) {
    encoder.um(this.vj()).vm(this.vj());
  };
  ObjectSerializer.prototype.xj = function (decoder) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.vj();
    var composite = decoder.um(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.kn(this.vj());
      Companion_getInstance_7();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.vm(tmp0_decodeStructure);
    tmp$ret$1 = result;
    return this.bu_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.vj();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function SerializerCache() {
  }
  SerializerCache.$metadata$ = interfaceMeta('SerializerCache');
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function ParametrizedSerializerCache() {
  }
  ParametrizedSerializerCache.$metadata$ = interfaceMeta('ParametrizedSerializerCache');
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.em();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.dl());
    var inductionVariable = 0;
    var last = _this__u8e3s4.dl();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.jl(i);
        result.a(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.re();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.m();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_hashCode = selector(element);
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$1 = tmp + tmp$ret$0 | 0;
      accumulator = tmp$ret$1;
    }
    tmp$ret$2 = accumulator;
    return tmp$ret$2;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.ie() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.');
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.jl(i);
          missingFields.a(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.bl());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.pt_1.t();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.rt_1.t();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.kt_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.kt_1[i];
        indices.b(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ht_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vt();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ht_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wt();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.vj();
          tmp0_mapTo.a(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.st());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.jl(i) + ': ' + this$0.hl(i).bl();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.gt_1 = serialName;
    this.ht_1 = generatedSerializer;
    this.it_1 = elementsCount;
    this.jt_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.it_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.kt_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.it_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.lt_1 = tmp$ret$2;
    this.mt_1 = null;
    this.nt_1 = booleanArray(this.it_1);
    this.ot_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.pt_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.qt_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.rt_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.bl = function () {
    return this.gt_1;
  };
  PluginGeneratedSerialDescriptor.prototype.dl = function () {
    return this.it_1;
  };
  PluginGeneratedSerialDescriptor.prototype.fl = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.cl = function () {
    var tmp0_elvis_lhs = this.mt_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.em = function () {
    return this.ot_1.j2();
  };
  PluginGeneratedSerialDescriptor.prototype.st = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.qt_1.t();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.tt = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.jt_1 = tmp0_this.jt_1 + 1 | 0;
    this.kt_1[tmp0_this.jt_1] = name;
    this.nt_1[this.jt_1] = isOptional;
    this.lt_1[this.jt_1] = null;
    if (this.jt_1 === (this.it_1 - 1 | 0)) {
      this.ot_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.hl = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).vj();
  };
  PluginGeneratedSerialDescriptor.prototype.kl = function (index) {
    return getChecked_0(this.nt_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.gl = function (index) {
    var tmp0_elvis_lhs = getChecked(this.lt_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.jl = function (index) {
    return getChecked(this.kt_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.il = function (name) {
    var tmp0_elvis_lhs = this.ot_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.bl() === other.bl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.st(), tmp0__anonymous__q1qw7t.st());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.dl() === other.dl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.dl();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.hl(index).bl() === other.hl(index).bl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.hl(index).fl(), other.hl(index).fl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.it_1);
    var tmp_0 = this.bl() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.bl());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.bl();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.fl();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.st();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_1()));
  }
  CharArraySerializer_0.prototype.hu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.hu((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.iu = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.iu((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.is = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.ju = function (decoder, index, builder, checkIndex) {
    builder.mu(decoder.dn(this.es_1, index));
  };
  CharArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.ju(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.nu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.go(this.es_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.nu(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.qu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.qu((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.ru = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.ru((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.is = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.su = function (decoder, index, builder, checkIndex) {
    builder.vu(decoder.cn(this.es_1, index));
  };
  DoubleArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.su(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.wu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fo(this.es_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.wu(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.zu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.zu((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.av = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.av((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.is = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.bv = function (decoder, index, builder, checkIndex) {
    builder.ev(decoder.bn(this.es_1, index));
  };
  FloatArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.bv(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.fv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.eo(this.es_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.fv(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_0()));
  }
  LongArraySerializer_0.prototype.iv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.iv((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.jv = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.jv((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.is = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.kv = function (decoder, index, builder, checkIndex) {
    builder.nv(decoder.an(this.es_1, index));
  };
  LongArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.kv(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.ov = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.do(this.es_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.ov(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_2()));
  }
  ULongArraySerializer_0.prototype.rv = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  ULongArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.rv(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.e9_1 : THROW_CCE());
  };
  ULongArraySerializer_0.prototype.sv = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  ULongArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.sv(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.e9_1 : THROW_CCE());
  };
  ULongArraySerializer_0.prototype.tv = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  ULongArraySerializer_0.prototype.is = function () {
    return new ULongArray(this.tv());
  };
  ULongArraySerializer_0.prototype.uv = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.fn(this.es_1, index).mm();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    builder.xv(tmp$ret$0);
  };
  ULongArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.uv(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ULongArraySerializer_0.prototype.yv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.io(this.es_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = ULongArray__get_impl_pr71q9(content, i);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp.tn(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  ULongArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.yv(encoder, content instanceof ULongArray ? content.e9_1 : THROW_CCE(), size);
  };
  ULongArraySerializer_0.$metadata$ = objectMeta('ULongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.bw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.bw((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.cw = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.cw((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.is = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.dw = function (decoder, index, builder, checkIndex) {
    builder.gw(decoder.zm(this.es_1, index));
  };
  IntArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.dw(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.hw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.co(this.es_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.hw(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(Companion_getInstance_3()));
  }
  UIntArraySerializer_0.prototype.kw = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  UIntArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.kw(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.t8_1 : THROW_CCE());
  };
  UIntArraySerializer_0.prototype.lw = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  UIntArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.lw(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.t8_1 : THROW_CCE());
  };
  UIntArraySerializer_0.prototype.mw = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  UIntArraySerializer_0.prototype.is = function () {
    return new UIntArray(this.mw());
  };
  UIntArraySerializer_0.prototype.nw = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.fn(this.es_1, index).lm();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    builder.qw(tmp$ret$0);
  };
  UIntArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.nw(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  UIntArraySerializer_0.prototype.rw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.io(this.es_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = UIntArray__get_impl_gp5kza(content, i);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp.sn(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  UIntArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.rw(encoder, content instanceof UIntArray ? content.t8_1 : THROW_CCE(), size);
  };
  UIntArraySerializer_0.$metadata$ = objectMeta('UIntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.uw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.uw((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.vw = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.vw((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.is = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.ww = function (decoder, index, builder, checkIndex) {
    builder.zw(decoder.ym(this.es_1, index));
  };
  ShortArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.ww(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.ax = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.bo(this.es_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.ax(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(Companion_getInstance_4()));
  }
  UShortArraySerializer_0.prototype.dx = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  UShortArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.dx(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.p9_1 : THROW_CCE());
  };
  UShortArraySerializer_0.prototype.ex = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  UShortArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.ex(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.p9_1 : THROW_CCE());
  };
  UShortArraySerializer_0.prototype.fx = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  UShortArraySerializer_0.prototype.is = function () {
    return new UShortArray(this.fx());
  };
  UShortArraySerializer_0.prototype.gx = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.fn(this.es_1, index).km();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    builder.jx(tmp$ret$0);
  };
  UShortArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.gx(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  UShortArraySerializer_0.prototype.kx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.io(this.es_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = UShortArray__get_impl_fnbhmx(content, i);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp.rn(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  UShortArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.kx(encoder, content instanceof UShortArray ? content.p9_1 : THROW_CCE(), size);
  };
  UShortArraySerializer_0.$metadata$ = objectMeta('UShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.nx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.nx((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.ox = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.ox((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.is = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.px = function (decoder, index, builder, checkIndex) {
    builder.sx(decoder.xm(this.es_1, index));
  };
  ByteArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.px(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.tx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ao(this.es_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.tx(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(Companion_getInstance_5()));
  }
  UByteArraySerializer_0.prototype.wx = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  UByteArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.wx(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.h8_1 : THROW_CCE());
  };
  UByteArraySerializer_0.prototype.xx = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  UByteArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.xx(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.h8_1 : THROW_CCE());
  };
  UByteArraySerializer_0.prototype.yx = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  UByteArraySerializer_0.prototype.is = function () {
    return new UByteArray(this.yx());
  };
  UByteArraySerializer_0.prototype.zx = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.fn(this.es_1, index).jm();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    builder.cy(tmp$ret$0);
  };
  UByteArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.zx(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  UByteArraySerializer_0.prototype.dy = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.io(this.es_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = UByteArray__get_impl_t5f3hv(content, i);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp.qn(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  UByteArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.dy(encoder, content instanceof UByteArray ? content.h8_1 : THROW_CCE(), size);
  };
  UByteArraySerializer_0.$metadata$ = objectMeta('UByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.gy = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.cr = function (_this__u8e3s4) {
    return this.gy((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.hy = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.xp = function (_this__u8e3s4) {
    return this.hy((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.is = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.iy = function (decoder, index, builder, checkIndex) {
    builder.ly(decoder.wm(this.es_1, index));
  };
  BooleanArraySerializer_0.prototype.iq = function (decoder, index, builder, checkIndex) {
    return this.iy(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.my = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.zn(this.es_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.js = function (encoder, content, size) {
    return this.my(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ku_1 = bufferWithData;
    this.lu_1 = bufferWithData.length;
    this.dc(10);
  }
  CharArrayBuilder.prototype.fs = function () {
    return this.lu_1;
  };
  CharArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (this.ku_1.length < requiredCapacity)
      this.ku_1 = copyOf(this.ku_1, coerceAtLeast(requiredCapacity, imul(this.ku_1.length, 2)));
  };
  CharArrayBuilder.prototype.mu = function (c) {
    this.ls(0, 1, null);
    var tmp = this.ku_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.lu_1;
    tmp0_this.lu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.gs = function () {
    return copyOf(this.ku_1, this.lu_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.tu_1 = bufferWithData;
    this.uu_1 = bufferWithData.length;
    this.dc(10);
  }
  DoubleArrayBuilder.prototype.fs = function () {
    return this.uu_1;
  };
  DoubleArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (this.tu_1.length < requiredCapacity)
      this.tu_1 = copyOf_0(this.tu_1, coerceAtLeast(requiredCapacity, imul(this.tu_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.vu = function (c) {
    this.ls(0, 1, null);
    var tmp = this.tu_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.uu_1;
    tmp0_this.uu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.gs = function () {
    return copyOf_0(this.tu_1, this.uu_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cv_1 = bufferWithData;
    this.dv_1 = bufferWithData.length;
    this.dc(10);
  }
  FloatArrayBuilder.prototype.fs = function () {
    return this.dv_1;
  };
  FloatArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (this.cv_1.length < requiredCapacity)
      this.cv_1 = copyOf_1(this.cv_1, coerceAtLeast(requiredCapacity, imul(this.cv_1.length, 2)));
  };
  FloatArrayBuilder.prototype.ev = function (c) {
    this.ls(0, 1, null);
    var tmp = this.cv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.dv_1;
    tmp0_this.dv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.gs = function () {
    return copyOf_1(this.cv_1, this.dv_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.lv_1 = bufferWithData;
    this.mv_1 = bufferWithData.length;
    this.dc(10);
  }
  LongArrayBuilder.prototype.fs = function () {
    return this.mv_1;
  };
  LongArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (this.lv_1.length < requiredCapacity)
      this.lv_1 = copyOf_2(this.lv_1, coerceAtLeast(requiredCapacity, imul(this.lv_1.length, 2)));
  };
  LongArrayBuilder.prototype.nv = function (c) {
    this.ls(0, 1, null);
    var tmp = this.lv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.mv_1;
    tmp0_this.mv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.gs = function () {
    return copyOf_2(this.lv_1, this.mv_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vv_1 = bufferWithData;
    this.wv_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.dc(10);
  }
  ULongArrayBuilder.prototype.fs = function () {
    return this.wv_1;
  };
  ULongArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.vv_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.vv_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.vv_1), 2));
      tmp$ret$0 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
      tmp.vv_1 = tmp$ret$0;
    }
  };
  ULongArrayBuilder.prototype.xv = function (c) {
    this.ls(0, 1, null);
    var tmp = this.vv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.wv_1;
    tmp0_this.wv_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  ULongArrayBuilder.prototype.ny = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.vv_1;
    var tmp1_copyOf = this.wv_1;
    tmp$ret$0 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  ULongArrayBuilder.prototype.gs = function () {
    return new ULongArray(this.ny());
  };
  ULongArrayBuilder.$metadata$ = classMeta('ULongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ew_1 = bufferWithData;
    this.fw_1 = bufferWithData.length;
    this.dc(10);
  }
  IntArrayBuilder.prototype.fs = function () {
    return this.fw_1;
  };
  IntArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (this.ew_1.length < requiredCapacity)
      this.ew_1 = copyOf_3(this.ew_1, coerceAtLeast(requiredCapacity, imul(this.ew_1.length, 2)));
  };
  IntArrayBuilder.prototype.gw = function (c) {
    this.ls(0, 1, null);
    var tmp = this.ew_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.fw_1;
    tmp0_this.fw_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.gs = function () {
    return copyOf_3(this.ew_1, this.fw_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ow_1 = bufferWithData;
    this.pw_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.dc(10);
  }
  UIntArrayBuilder.prototype.fs = function () {
    return this.pw_1;
  };
  UIntArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.ow_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.ow_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.ow_1), 2));
      tmp$ret$0 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
      tmp.ow_1 = tmp$ret$0;
    }
  };
  UIntArrayBuilder.prototype.qw = function (c) {
    this.ls(0, 1, null);
    var tmp = this.ow_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.pw_1;
    tmp0_this.pw_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  UIntArrayBuilder.prototype.oy = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.ow_1;
    var tmp1_copyOf = this.pw_1;
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  UIntArrayBuilder.prototype.gs = function () {
    return new UIntArray(this.oy());
  };
  UIntArrayBuilder.$metadata$ = classMeta('UIntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.xw_1 = bufferWithData;
    this.yw_1 = bufferWithData.length;
    this.dc(10);
  }
  ShortArrayBuilder.prototype.fs = function () {
    return this.yw_1;
  };
  ShortArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (this.xw_1.length < requiredCapacity)
      this.xw_1 = copyOf_4(this.xw_1, coerceAtLeast(requiredCapacity, imul(this.xw_1.length, 2)));
  };
  ShortArrayBuilder.prototype.zw = function (c) {
    this.ls(0, 1, null);
    var tmp = this.xw_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.yw_1;
    tmp0_this.yw_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.gs = function () {
    return copyOf_4(this.xw_1, this.yw_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hx_1 = bufferWithData;
    this.ix_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.dc(10);
  }
  UShortArrayBuilder.prototype.fs = function () {
    return this.ix_1;
  };
  UShortArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.hx_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.hx_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.hx_1), 2));
      tmp$ret$0 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
      tmp.hx_1 = tmp$ret$0;
    }
  };
  UShortArrayBuilder.prototype.jx = function (c) {
    this.ls(0, 1, null);
    var tmp = this.hx_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.ix_1;
    tmp0_this.ix_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  UShortArrayBuilder.prototype.py = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.hx_1;
    var tmp1_copyOf = this.ix_1;
    tmp$ret$0 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  UShortArrayBuilder.prototype.gs = function () {
    return new UShortArray(this.py());
  };
  UShortArrayBuilder.$metadata$ = classMeta('UShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qx_1 = bufferWithData;
    this.rx_1 = bufferWithData.length;
    this.dc(10);
  }
  ByteArrayBuilder.prototype.fs = function () {
    return this.rx_1;
  };
  ByteArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (this.qx_1.length < requiredCapacity)
      this.qx_1 = copyOf_5(this.qx_1, coerceAtLeast(requiredCapacity, imul(this.qx_1.length, 2)));
  };
  ByteArrayBuilder.prototype.sx = function (c) {
    this.ls(0, 1, null);
    var tmp = this.qx_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.rx_1;
    tmp0_this.rx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.gs = function () {
    return copyOf_5(this.qx_1, this.rx_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ay_1 = bufferWithData;
    this.by_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.dc(10);
  }
  UByteArrayBuilder.prototype.fs = function () {
    return this.by_1;
  };
  UByteArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.ay_1) < requiredCapacity) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.ay_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.ay_1), 2));
      tmp$ret$0 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
      tmp.ay_1 = tmp$ret$0;
    }
  };
  UByteArrayBuilder.prototype.cy = function (c) {
    this.ls(0, 1, null);
    var tmp = this.ay_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.by_1;
    tmp0_this.by_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  UByteArrayBuilder.prototype.qy = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.ay_1;
    var tmp1_copyOf = this.by_1;
    tmp$ret$0 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
    return tmp$ret$0;
  };
  UByteArrayBuilder.prototype.gs = function () {
    return new UByteArray(this.qy());
  };
  UByteArrayBuilder.$metadata$ = classMeta('UByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.jy_1 = bufferWithData;
    this.ky_1 = bufferWithData.length;
    this.dc(10);
  }
  BooleanArrayBuilder.prototype.fs = function () {
    return this.ky_1;
  };
  BooleanArrayBuilder.prototype.dc = function (requiredCapacity) {
    if (this.jy_1.length < requiredCapacity)
      this.jy_1 = copyOf_6(this.jy_1, coerceAtLeast(requiredCapacity, imul(this.jy_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.ly = function (c) {
    this.ls(0, 1, null);
    var tmp = this.jy_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.ky_1;
    tmp0_this.ky_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.gs = function () {
    return copyOf_6(this.jy_1, this.ky_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().i2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.ry_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.vj = function () {
    return this.ry_1;
  };
  StringSerializer.prototype.sy = function (encoder, value) {
    return encoder.xn(value);
  };
  StringSerializer.prototype.wj = function (encoder, value) {
    return this.sy(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.xj = function (decoder) {
    return decoder.qm();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.ty_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.vj = function () {
    return this.ty_1;
  };
  CharSerializer.prototype.uy = function (encoder, value) {
    return encoder.wn(value);
  };
  CharSerializer.prototype.wj = function (encoder, value) {
    return this.uy(encoder, value instanceof Char ? value.i1_1 : THROW_CCE());
  };
  CharSerializer.prototype.vy = function (decoder) {
    return decoder.pm();
  };
  CharSerializer.prototype.xj = function (decoder) {
    return new Char(this.vy(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.wy_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.vj = function () {
    return this.wy_1;
  };
  DoubleSerializer.prototype.xy = function (encoder, value) {
    return encoder.vn(value);
  };
  DoubleSerializer.prototype.wj = function (encoder, value) {
    return this.xy(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.xj = function (decoder) {
    return decoder.om();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.yy_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.vj = function () {
    return this.yy_1;
  };
  FloatSerializer.prototype.zy = function (encoder, value) {
    return encoder.un(value);
  };
  FloatSerializer.prototype.wj = function (encoder, value) {
    return this.zy(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.xj = function (decoder) {
    return decoder.nm();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.az_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.vj = function () {
    return this.az_1;
  };
  LongSerializer.prototype.bz = function (encoder, value) {
    return encoder.tn(value);
  };
  LongSerializer.prototype.wj = function (encoder, value) {
    return this.bz(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.xj = function (decoder) {
    return decoder.mm();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.cz_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.vj = function () {
    return this.cz_1;
  };
  IntSerializer.prototype.dz = function (encoder, value) {
    return encoder.sn(value);
  };
  IntSerializer.prototype.wj = function (encoder, value) {
    return this.dz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.xj = function (decoder) {
    return decoder.lm();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.ez_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.vj = function () {
    return this.ez_1;
  };
  ShortSerializer.prototype.fz = function (encoder, value) {
    return encoder.rn(value);
  };
  ShortSerializer.prototype.wj = function (encoder, value) {
    return this.fz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.xj = function (decoder) {
    return decoder.km();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.gz_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.vj = function () {
    return this.gz_1;
  };
  ByteSerializer.prototype.hz = function (encoder, value) {
    return encoder.qn(value);
  };
  ByteSerializer.prototype.wj = function (encoder, value) {
    return this.hz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.xj = function (decoder) {
    return decoder.jm();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.iz_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.vj = function () {
    return this.iz_1;
  };
  BooleanSerializer.prototype.jz = function (encoder, value) {
    return encoder.pn(value);
  };
  BooleanSerializer.prototype.wj = function (encoder, value) {
    return this.jz(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.xj = function (decoder) {
    return decoder.im();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.kz_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.vj = function () {
    return this.kz_1.vj();
  };
  UnitSerializer.prototype.lz = function (decoder) {
    this.kz_1.xj(decoder);
  };
  UnitSerializer.prototype.xj = function (decoder) {
    this.lz(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.mz = function (encoder, value) {
    this.kz_1.wj(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.wj = function (encoder, value) {
    return this.mz(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.nz_1 = serialName;
    this.oz_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.bl = function () {
    return this.nz_1;
  };
  PrimitiveSerialDescriptor_0.prototype.fl = function () {
    return this.oz_1;
  };
  PrimitiveSerialDescriptor_0.prototype.dl = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.jl = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.il = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.kl = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.hl = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.gl = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.nz_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().j2();
    var tmp0_iterator = keys.d();
    while (tmp0_iterator.e()) {
      var primitive = tmp0_iterator.f();
      var simpleName = capitalize(ensureNotNull(primitive.ie()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
      var tmp_0 = toString(tmp$ret$1);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = _this__u8e3s4;
      tmp$ret$3 = tmp$ret$2.substring(1);
      tmp = tmp_0 + tmp$ret$3;
    } else {
      tmp = _this__u8e3s4;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().bg(), serializer_1(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_2(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().eg(), CharArraySerializer()), to(PrimitiveClasses_getInstance().zf(), serializer_3(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().kg(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().yf(), serializer_4(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().jg(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().ig(), LongArraySerializer()), to(getKClass(ULong), serializer_6(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().xf(), serializer_7(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().hg(), IntArraySerializer()), to(getKClass(UInt), serializer_8(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().wf(), serializer_9(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().gg(), ShortArraySerializer()), to(getKClass(UShort), serializer_10(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().vf(), serializer_11(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().fg(), ByteArraySerializer()), to(getKClass(UByte), serializer_12(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().uf(), serializer_13(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().dg(), BooleanArraySerializer()), to(getKClass(Unit), serializer_14(Unit_getInstance())), to(getKClass(Duration), serializer_15(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.rz = function (_this__u8e3s4, index) {
    return this.tz(this.sz(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.tz = function (nestedName) {
    var tmp0_elvis_lhs = this.wz();
    return this.xz(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.sz = function (desc, index) {
    return desc.jl(index);
  };
  NamedValueDecoder.prototype.xz = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(parentName) === 0;
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = classMeta('NamedValueDecoder', undefined, undefined, undefined, undefined, TaggedDecoder.prototype);
  function tagBlock($this, tag, block) {
    $this.k10(tag);
    var r = block();
    if (!$this.vz_1) {
      $this.l10();
    }
    $this.vz_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.sm($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.gm() ? this$0.sm($deserializer, $previousValue) : this$0.hm();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.uz_1 = tmp$ret$0;
    this.vz_1 = false;
  }
  TaggedDecoder.prototype.pk = function () {
    return EmptySerializersModule_0();
  };
  TaggedDecoder.prototype.yz = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.zz = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.a10 = function (tag) {
    var tmp = this.yz(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.b10 = function (tag) {
    var tmp = this.yz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.c10 = function (tag) {
    var tmp = this.yz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.d10 = function (tag) {
    var tmp = this.yz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.e10 = function (tag) {
    var tmp = this.yz(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.f10 = function (tag) {
    var tmp = this.yz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.g10 = function (tag) {
    var tmp = this.yz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.h10 = function (tag) {
    var tmp = this.yz(tag);
    return tmp instanceof Char ? tmp.i1_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.i10 = function (tag) {
    var tmp = this.yz(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.j10 = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.k10(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.sm = function (deserializer, previousValue) {
    return this.tm(deserializer);
  };
  TaggedDecoder.prototype.rm = function (descriptor) {
    return this.j10(this.l10(), descriptor);
  };
  TaggedDecoder.prototype.gm = function () {
    var tmp0_elvis_lhs = this.wz();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.zz(currentTag);
  };
  TaggedDecoder.prototype.hm = function () {
    return null;
  };
  TaggedDecoder.prototype.im = function () {
    return this.a10(this.l10());
  };
  TaggedDecoder.prototype.jm = function () {
    return this.b10(this.l10());
  };
  TaggedDecoder.prototype.km = function () {
    return this.c10(this.l10());
  };
  TaggedDecoder.prototype.lm = function () {
    return this.d10(this.l10());
  };
  TaggedDecoder.prototype.mm = function () {
    return this.e10(this.l10());
  };
  TaggedDecoder.prototype.nm = function () {
    return this.f10(this.l10());
  };
  TaggedDecoder.prototype.om = function () {
    return this.g10(this.l10());
  };
  TaggedDecoder.prototype.pm = function () {
    return this.h10(this.l10());
  };
  TaggedDecoder.prototype.qm = function () {
    return this.i10(this.l10());
  };
  TaggedDecoder.prototype.um = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.vm = function (descriptor) {
  };
  TaggedDecoder.prototype.wm = function (descriptor, index) {
    return this.a10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.xm = function (descriptor, index) {
    return this.b10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.ym = function (descriptor, index) {
    return this.c10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.zm = function (descriptor, index) {
    return this.d10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.an = function (descriptor, index) {
    return this.e10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.bn = function (descriptor, index) {
    return this.f10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.cn = function (descriptor, index) {
    return this.g10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.dn = function (descriptor, index) {
    return this.h10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.en = function (descriptor, index) {
    return this.i10(this.rz(descriptor, index));
  };
  TaggedDecoder.prototype.fn = function (descriptor, index) {
    return this.j10(this.rz(descriptor, index), descriptor.hl(index));
  };
  TaggedDecoder.prototype.gn = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.rz(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.in = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.rz(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.wz = function () {
    return lastOrNull(this.uz_1);
  };
  TaggedDecoder.prototype.k10 = function (name) {
    this.uz_1.a(name);
  };
  TaggedDecoder.prototype.l10 = function () {
    var r = this.uz_1.j3(get_lastIndex_0(this.uz_1));
    this.vz_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.m10_1 = key;
    this.n10_1 = value;
  }
  MapEntry.prototype.s = function () {
    return this.m10_1;
  };
  MapEntry.prototype.t = function () {
    return this.n10_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.m10_1 + ', value=' + this.n10_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.m10_1 == null ? 0 : hashCode(this.m10_1);
    result = imul(result, 31) + (this.n10_1 == null ? 0 : hashCode(this.n10_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.m10_1, tmp0_other_with_cast.m10_1))
      return false;
    if (!equals(this.n10_1, tmp0_other_with_cast.n10_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.vj();
      $this$buildSerialDescriptor.gk('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.vj();
      $this$buildSerialDescriptor.gk('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.q10_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.vj = function () {
    return this.q10_1;
  };
  MapEntrySerializer_0.prototype.r10 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  MapEntrySerializer_0.prototype.s10 = function (_this__u8e3s4) {
    return this.r10((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.t10 = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  MapEntrySerializer_0.prototype.u10 = function (_this__u8e3s4) {
    return this.t10((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.v10 = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.vj();
      $this$buildClassSerialDescriptor.gk('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.vj();
      $this$buildClassSerialDescriptor.gk('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.b11_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.vj = function () {
    return this.b11_1;
  };
  PairSerializer_0.prototype.c11 = function (_this__u8e3s4) {
    return _this__u8e3s4.f3_1;
  };
  PairSerializer_0.prototype.s10 = function (_this__u8e3s4) {
    return this.c11(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.d11 = function (_this__u8e3s4) {
    return _this__u8e3s4.g3_1;
  };
  PairSerializer_0.prototype.u10 = function (_this__u8e3s4) {
    return this.d11(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.v10 = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function decodeSequentially_1($this, composite) {
    var a = composite.hn($this.h11_1, 0, $this.e11_1, null, 8, null);
    var b = composite.hn($this.h11_1, 1, $this.f11_1, null, 8, null);
    var c = composite.hn($this.h11_1, 2, $this.g11_1, null, 8, null);
    composite.vm($this.h11_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.kn($this.h11_1);
      Companion_getInstance_7();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.hn($this.h11_1, 0, $this.e11_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.hn($this.h11_1, 1, $this.f11_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.hn($this.h11_1, 2, $this.g11_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.vm($this.h11_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.e11_1.vj();
      $this$buildClassSerialDescriptor.gk('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.f11_1.vj();
      $this$buildClassSerialDescriptor.gk('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.g11_1.vj();
      $this$buildClassSerialDescriptor.gk('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.e11_1 = aSerializer;
    this.f11_1 = bSerializer;
    this.g11_1 = cSerializer;
    var tmp = this;
    tmp.h11_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.vj = function () {
    return this.h11_1;
  };
  TripleSerializer_0.prototype.i11 = function (encoder, value) {
    var structuredEncoder = encoder.um(this.h11_1);
    structuredEncoder.jo(this.h11_1, 0, this.e11_1, value.v7_1);
    structuredEncoder.jo(this.h11_1, 1, this.f11_1, value.w7_1);
    structuredEncoder.jo(this.h11_1, 2, this.g11_1, value.x7_1);
    structuredEncoder.vm(this.h11_1);
  };
  TripleSerializer_0.prototype.wj = function (encoder, value) {
    return this.i11(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.xj = function (decoder) {
    var composite = decoder.um(this.h11_1);
    if (composite.jn()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.w10_1 = keySerializer;
    this.x10_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.y10 = function (encoder, value) {
    var structuredEncoder = encoder.um(this.vj());
    structuredEncoder.jo(this.vj(), 0, this.w10_1, this.s10(value));
    structuredEncoder.jo(this.vj(), 1, this.x10_1, this.u10(value));
    structuredEncoder.vm(this.vj());
  };
  KeyValueSerializer.prototype.wj = function (encoder, value) {
    return this.y10(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.xj = function (decoder) {
    var composite = decoder.um(this.vj());
    if (composite.jn()) {
      var tmp = this.vj();
      var key = composite.hn(tmp, 0, this.w10_1, null, 8, null);
      var tmp_0 = this.vj();
      var value = composite.hn(tmp_0, 1, this.x10_1, null, 8, null);
      return this.v10(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.kn(this.vj());
      Companion_getInstance_7();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.vj();
          key_0 = composite.hn(tmp_1, 0, this.w10_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.vj();
            value_0 = composite.hn(tmp_2, 1, this.x10_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.vm(this.vj());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.v10(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = classMeta('KeyValueSerializer', [KSerializer]);
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.j11_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_0()));
  }
  ULongSerializer.prototype.vj = function () {
    return this.j11_1;
  };
  ULongSerializer.prototype.k11 = function (encoder, value) {
    var tmp = encoder.yn(this.j11_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.tn(tmp$ret$0);
  };
  ULongSerializer.prototype.wj = function (encoder, value) {
    return this.k11(encoder, value instanceof ULong ? value.z8_1 : THROW_CCE());
  };
  ULongSerializer.prototype.l11 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.rm(this.j11_1).mm();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    return tmp$ret$0;
  };
  ULongSerializer.prototype.xj = function (decoder) {
    return new ULong(this.l11(decoder));
  };
  ULongSerializer.$metadata$ = objectMeta('ULongSerializer', [KSerializer]);
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.m11_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.vj = function () {
    return this.m11_1;
  };
  UIntSerializer.prototype.n11 = function (encoder, value) {
    var tmp = encoder.yn(this.m11_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.sn(tmp$ret$0);
  };
  UIntSerializer.prototype.wj = function (encoder, value) {
    return this.n11(encoder, value instanceof UInt ? value.n8_1 : THROW_CCE());
  };
  UIntSerializer.prototype.o11 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.rm(this.m11_1).lm();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    return tmp$ret$0;
  };
  UIntSerializer.prototype.xj = function (decoder) {
    return new UInt(this.o11(decoder));
  };
  UIntSerializer.$metadata$ = objectMeta('UIntSerializer', [KSerializer]);
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.p11_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_9(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.vj = function () {
    return this.p11_1;
  };
  UShortSerializer.prototype.q11 = function (encoder, value) {
    var tmp = encoder.yn(this.p11_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.rn(tmp$ret$0);
  };
  UShortSerializer.prototype.wj = function (encoder, value) {
    return this.q11(encoder, value instanceof UShort ? value.k9_1 : THROW_CCE());
  };
  UShortSerializer.prototype.r11 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.rm(this.p11_1).km();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    return tmp$ret$0;
  };
  UShortSerializer.prototype.xj = function (decoder) {
    return new UShort(this.r11(decoder));
  };
  UShortSerializer.$metadata$ = objectMeta('UShortSerializer', [KSerializer]);
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.s11_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_11(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.vj = function () {
    return this.s11_1;
  };
  UByteSerializer.prototype.t11 = function (encoder, value) {
    var tmp = encoder.yn(this.s11_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.qn(tmp$ret$0);
  };
  UByteSerializer.prototype.wj = function (encoder, value) {
    return this.t11(encoder, value instanceof UByte ? value.c8_1 : THROW_CCE());
  };
  UByteSerializer.prototype.u11 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.rm(this.s11_1).jm();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    return tmp$ret$0;
  };
  UByteSerializer.prototype.xj = function (decoder) {
    return new UByte(this.u11(decoder));
  };
  UByteSerializer.$metadata$ = objectMeta('UByteSerializer', [KSerializer]);
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.uk = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.tk(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.w11_1 = class2ContextualFactory;
    this.x11_1 = polyBase2Serializers;
    this.y11_1 = polyBase2DefaultSerializerProvider;
    this.z11_1 = polyBase2NamedSerializers;
    this.a12_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.uo = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.x11_1.i2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.y11_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.to = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.z11_1.i2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).i2(serializedClassName);
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.a12_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.tk = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.w11_1.i2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b12(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.v11 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.w11_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.r().d();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.s();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.t();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.e12_1;
        collector.f12(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.d12(kclass, serial.c12_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.x11_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.r().d();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.s();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.t();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.r().d();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.s();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.t();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.g12(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.y11_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.r().d();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.e()) {
      var element_2 = tmp0_iterator_2.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.s();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.t();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.h12(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = this.a12_1;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$13 = tmp3_forEach.r().d();
    var tmp0_iterator_3 = tmp$ret$13;
    while (tmp0_iterator_3.e()) {
      var element_3 = tmp0_iterator_3.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$14 = element_3.s();
      var baseClass_1 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$15 = element_3.t();
      var provider_0 = tmp$ret$15;
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.i12(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  function Argless() {
  }
  Argless.prototype.j12 = function () {
    return this.e12_1;
  };
  Argless.$metadata$ = classMeta('Argless', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function WithTypeArguments() {
  }
  WithTypeArguments.prototype.k12 = function () {
    return this.c12_1;
  };
  WithTypeArguments.$metadata$ = classMeta('WithTypeArguments', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = classMeta('ContextualProvider');
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = interfaceMeta('SerializersModuleCollector');
  function SerializableWith(serializer) {
    this.l12_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.l12_1.equals(tmp0_other_with_cast.l12_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.l12_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.l12_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.je(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.ie() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ag());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.eu(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = get_js(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.m12_1 = $factory;
  }
  createCache$1.prototype.vk = function (key) {
    return this.m12_1(key);
  };
  createCache$1.$metadata$ = classMeta(undefined, [SerializerCache]);
  function createParametrizedCache$1($factory) {
    this.n12_1 = $factory;
  }
  createParametrizedCache$1.prototype.wk = function (key, types) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_6();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      tmp$ret$0 = this.n12_1(key, types);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_6();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    return tmp$ret$3;
  };
  createParametrizedCache$1.$metadata$ = classMeta(undefined, [ParametrizedSerializerCache]);
  //region block: post-declaration
  SerialDescriptorImpl.prototype.xk = get_isNullable;
  SerialDescriptorImpl.prototype.el = get_isInline;
  AbstractDecoder.prototype.hn = decodeSerializableElement$default;
  AbstractDecoder.prototype.tm = decodeSerializableValue;
  AbstractDecoder.prototype.jn = decodeSequentially;
  AbstractDecoder.prototype.ln = decodeCollectionSize;
  AbstractEncoder.prototype.no = encodeNotNullMark;
  AbstractEncoder.prototype.oo = beginCollection;
  AbstractEncoder.prototype.ko = encodeSerializableValue;
  AbstractEncoder.prototype.mo = encodeNullableSerializableValue;
  AbstractEncoder.prototype.po = shouldEncodeElementDefault;
  ListLikeDescriptor.prototype.xk = get_isNullable;
  ListLikeDescriptor.prototype.el = get_isInline;
  ListLikeDescriptor.prototype.cl = get_annotations;
  ArrayListClassDesc.prototype.xk = get_isNullable;
  ArrayListClassDesc.prototype.el = get_isInline;
  ArrayListClassDesc.prototype.cl = get_annotations;
  HashSetClassDesc.prototype.xk = get_isNullable;
  HashSetClassDesc.prototype.el = get_isInline;
  HashSetClassDesc.prototype.cl = get_annotations;
  LinkedHashSetClassDesc.prototype.xk = get_isNullable;
  LinkedHashSetClassDesc.prototype.el = get_isInline;
  LinkedHashSetClassDesc.prototype.cl = get_annotations;
  MapLikeDescriptor.prototype.xk = get_isNullable;
  MapLikeDescriptor.prototype.el = get_isInline;
  MapLikeDescriptor.prototype.cl = get_annotations;
  HashMapClassDesc.prototype.xk = get_isNullable;
  HashMapClassDesc.prototype.el = get_isInline;
  HashMapClassDesc.prototype.cl = get_annotations;
  LinkedHashMapClassDesc.prototype.xk = get_isNullable;
  LinkedHashMapClassDesc.prototype.el = get_isInline;
  LinkedHashMapClassDesc.prototype.cl = get_annotations;
  ArrayClassDesc.prototype.xk = get_isNullable;
  ArrayClassDesc.prototype.el = get_isInline;
  ArrayClassDesc.prototype.cl = get_annotations;
  PrimitiveArrayDescriptor.prototype.xk = get_isNullable;
  PrimitiveArrayDescriptor.prototype.el = get_isInline;
  PrimitiveArrayDescriptor.prototype.cl = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.xk = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.el = get_isInline;
  InlineClassDescriptor.prototype.xk = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.wt = typeParametersSerializers;
  NoOpEncoder.prototype.no = encodeNotNullMark;
  NoOpEncoder.prototype.oo = beginCollection;
  NoOpEncoder.prototype.ko = encodeSerializableValue;
  NoOpEncoder.prototype.mo = encodeNullableSerializableValue;
  NoOpEncoder.prototype.po = shouldEncodeElementDefault;
  PrimitiveSerialDescriptor_0.prototype.xk = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.el = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.cl = get_annotations;
  TaggedDecoder.prototype.hn = decodeSerializableElement$default;
  TaggedDecoder.prototype.tm = decodeSerializableValue;
  TaggedDecoder.prototype.jn = decodeSequentially;
  TaggedDecoder.prototype.ln = decodeCollectionSize;
  NamedValueDecoder.prototype.tm = decodeSerializableValue;
  NamedValueDecoder.prototype.hn = decodeSerializableElement$default;
  NamedValueDecoder.prototype.jn = decodeSequentially;
  NamedValueDecoder.prototype.ln = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = SEALED_getInstance;
  _.$_$.f = STRING_getInstance;
  _.$_$.g = CONTEXTUAL_getInstance;
  _.$_$.h = ENUM_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = Companion_getInstance_7;
  _.$_$.l = IntSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = ListSerializer;
  _.$_$.o = MapSerializer;
  _.$_$.p = SetSerializer;
  _.$_$.q = get_nullable;
  _.$_$.r = serializer_1;
  _.$_$.s = serializer_10;
  _.$_$.t = serializer_8;
  _.$_$.u = serializer_12;
  _.$_$.v = serializer_6;
  _.$_$.w = PolymorphicKind;
  _.$_$.x = PrimitiveKind;
  _.$_$.y = PrimitiveSerialDescriptor;
  _.$_$.z = get_annotations;
  _.$_$.a1 = get_isInline;
  _.$_$.b1 = get_isNullable;
  _.$_$.c1 = SerialDescriptor;
  _.$_$.d1 = ENUM;
  _.$_$.e1 = getContextualDescriptor;
  _.$_$.f1 = AbstractDecoder;
  _.$_$.g1 = AbstractEncoder;
  _.$_$.h1 = decodeCollectionSize;
  _.$_$.i1 = decodeSequentially;
  _.$_$.j1 = CompositeDecoder;
  _.$_$.k1 = CompositeEncoder;
  _.$_$.l1 = decodeSerializableValue;
  _.$_$.m1 = Decoder;
  _.$_$.n1 = beginCollection;
  _.$_$.o1 = encodeNotNullMark;
  _.$_$.p1 = encodeNullableSerializableValue;
  _.$_$.q1 = Encoder;
  _.$_$.r1 = AbstractPolymorphicSerializer;
  _.$_$.s1 = ElementMarker;
  _.$_$.t1 = typeParametersSerializers;
  _.$_$.u1 = GeneratedSerializer;
  _.$_$.v1 = NamedValueDecoder;
  _.$_$.w1 = PluginGeneratedSerialDescriptor;
  _.$_$.x1 = SerializerFactory;
  _.$_$.y1 = jsonCachedSerialNames;
  _.$_$.z1 = throwMissingFieldException;
  _.$_$.a2 = EmptySerializersModule_0;
  _.$_$.b2 = contextual;
  _.$_$.c2 = SerializersModuleCollector;
  _.$_$.d2 = BinaryFormat;
  _.$_$.e2 = DeserializationStrategy;
  _.$_$.f2 = KSerializer;
  _.$_$.g2 = MissingFieldException;
  _.$_$.h2 = SealedClassSerializer;
  _.$_$.i2 = SerializationException;
  _.$_$.j2 = StringFormat;
  _.$_$.k2 = findPolymorphicSerializer;
  _.$_$.l2 = serializerOrNull_0;
  _.$_$.m2 = serializer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
